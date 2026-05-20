// Typed fetchers for /api/tickets/*. Mirrors util/bmApi.ts conventions
// (credentials: 'include', single jsonOk helper, throws on !ok).

function base(): string {
  const fromEnv = (import.meta.env.VITE_API_BASE_URL as string | undefined) || '';
  if (fromEnv) return fromEnv.replace(/\/+$/, '');
  return window.location.origin;
}

async function jsonOk<T>(res: Response, what: string): Promise<T> {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `${what} (${res.status})`);
  }
  return (await res.json()) as T;
}

export type TicketCreatorInfo = {
  discordId: string;
  discordName: string;
  discordAvatarUrl: string | null;
  guid: string | null;
};

export type TicketSummary = {
  id: number;
  channelId: string;
  categoryKey: string;
  categoryLabel: string;
  permKey: string;
  creator: TicketCreatorInfo;
  createdAt: number;
  claimedBy: string | null;
  claimedAt: number | null;
  status: 'open' | 'claimed' | 'closed';
  closedAt: number | null;
  transcript: string | null;
};

export type TicketDetail = TicketSummary & {
  qa: Array<{ label: string; value: string }>;
};

export type TicketAttachment = {
  name: string;
  url: string;
  contentType: string | null;
  size: number;
};

export type TicketMessage = {
  id: string;
  ts: number;
  content: string;
  author: {
    discordId: string | null;
    name: string;
    avatarUrl: string | null;
    isBot: boolean;
    isAdminRelay: boolean;
    relayUsername: string | null;
  };
  attachments: TicketAttachment[];
  referenceMessageId: string | null;
};

export async function listTickets(opts?: { status?: 'open' | 'closed' | 'all'; categories?: string[] }): Promise<{ tickets: TicketSummary[] }> {
  const params = new URLSearchParams();
  if (opts?.status) params.set('status', opts.status);
  if (opts?.categories && opts.categories.length) params.set('categories', opts.categories.join(','));
  const res = await fetch(`${base()}/api/tickets?${params}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load tickets');
}

export async function getTicket(channelId: string): Promise<{ ticket: TicketDetail }> {
  const res = await fetch(`${base()}/api/tickets/${encodeURIComponent(channelId)}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load ticket');
}

export async function getTicketMessages(channelId: string, opts?: { before?: string; limit?: number }): Promise<{ messages: TicketMessage[] }> {
  const params = new URLSearchParams();
  if (opts?.before) params.set('before', opts.before);
  if (opts?.limit) params.set('limit', String(opts.limit));
  const res = await fetch(`${base()}/api/tickets/${encodeURIComponent(channelId)}/messages?${params}`, { credentials: 'include' });
  return jsonOk(res, 'Failed to load messages');
}

export async function sendTicketMessage(channelId: string, form: FormData): Promise<{ message: TicketMessage }> {
  const res = await fetch(`${base()}/api/tickets/${encodeURIComponent(channelId)}/messages`, {
    method: 'POST',
    credentials: 'include',
    body: form
  });
  return jsonOk(res, 'Failed to send message');
}

export async function closeTicket(channelId: string, reason: string): Promise<{ ok: true; transcript: string | null }> {
  const res = await fetch(`${base()}/api/tickets/${encodeURIComponent(channelId)}/close`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reason })
  });
  return jsonOk(res, 'Failed to close ticket');
}
