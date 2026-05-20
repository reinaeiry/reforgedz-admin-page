import React from 'react';
import type { TicketAttachment, TicketMessage as TicketMessageT } from '../../util/ticketsApi';

const URL_RE = /\bhttps?:\/\/[^\s<>"]+/g;
const IMAGE_EXT_RE = /\.(png|jpe?g|gif|webp|bmp|avif)(?:\?|#|$)/i;
const VIDEO_EXT_RE = /\.(mp4|webm|mov|m4v)(?:\?|#|$)/i;
const AUDIO_EXT_RE = /\.(mp3|ogg|wav|m4a)(?:\?|#|$)/i;
const DISCORD_CDN_RE = /^https?:\/\/(?:cdn|media)\.discord(?:app)?\.(?:com|net)\//i;
const TENOR_RE = /^https?:\/\/(?:www\.)?tenor\.com\//i;
const GIPHY_RE = /^https?:\/\/(?:www\.)?giphy\.com\//i;
const MEDAL_CLIP_RE = /^https?:\/\/medal\.tv\/(?:games\/[^/]+\/)?clips\/([A-Za-z0-9_-]+)/i;
const YOUTUBE_RE = /^https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/i;

type UrlKind = 'image' | 'video' | 'audio' | 'tenor' | 'giphy' | 'medal' | 'youtube' | 'link';

function classifyUrl(url: string): UrlKind {
  if (IMAGE_EXT_RE.test(url)) return 'image';
  if (VIDEO_EXT_RE.test(url)) return 'video';
  if (AUDIO_EXT_RE.test(url)) return 'audio';
  if (MEDAL_CLIP_RE.test(url)) return 'medal';
  if (YOUTUBE_RE.test(url)) return 'youtube';
  if (TENOR_RE.test(url)) return 'tenor';
  if (GIPHY_RE.test(url)) return 'giphy';
  return 'link';
}

function medalEmbedSrc(url: string): string | null {
  const m = MEDAL_CLIP_RE.exec(url);
  if (!m) return null;
  return `https://medal.tv/clip/${m[1]}?theatreMode=false`;
}

function youtubeEmbedSrc(url: string): string | null {
  const m = YOUTUBE_RE.exec(url);
  if (!m) return null;
  return `https://www.youtube.com/embed/${m[1]}`;
}

function MediaEmbed({ url, kind }: { url: string; kind: UrlKind }) {
  if (kind === 'image') {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="ticketAttachment-img">
        <img src={url} alt="" loading="lazy" />
      </a>
    );
  }
  if (kind === 'video') {
    return (
      <video controls preload="metadata" className="ticketAttachment-video">
        <source src={url} />
      </video>
    );
  }
  if (kind === 'audio') {
    return <audio controls preload="metadata" src={url} className="ticketAttachment-audio" />;
  }
  if (kind === 'medal') {
    const src = medalEmbedSrc(url);
    if (!src) return <a href={url} target="_blank" rel="noreferrer">{url}</a>;
    return (
      <iframe
        className="ticketAttachment-iframe"
        src={src}
        title="Medal clip"
        allow="autoplay; fullscreen; picture-in-picture"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }
  if (kind === 'youtube') {
    const src = youtubeEmbedSrc(url);
    if (!src) return <a href={url} target="_blank" rel="noreferrer">{url}</a>;
    return (
      <iframe
        className="ticketAttachment-iframe"
        src={src}
        title="YouTube video"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }
  return <a href={url} target="_blank" rel="noreferrer">{url}</a>;
}

// Splits the content into linkable inline parts. Embeddable URLs get
// rendered as block elements (images/videos) AFTER the textual block so
// they don't disrupt the inline flow.
function renderContent(text: string): { inline: React.ReactNode[]; embeds: { url: string; kind: UrlKind }[] } {
  if (!text) return { inline: [], embeds: [] };
  const inline: React.ReactNode[] = [];
  const embeds: { url: string; kind: UrlKind }[] = [];
  const seen = new Set<string>();
  let cursor = 0;
  let match: RegExpExecArray | null;
  URL_RE.lastIndex = 0;
  while ((match = URL_RE.exec(text)) !== null) {
    if (match.index > cursor) inline.push(text.slice(cursor, match.index));
    const url = match[0];
    const kind = classifyUrl(url);
    inline.push(<a key={match.index} href={url} target="_blank" rel="noreferrer">{url}</a>);
    if ((kind === 'image' || kind === 'video' || kind === 'audio' || kind === 'medal' || kind === 'youtube') && !seen.has(url)) {
      embeds.push({ url, kind });
      seen.add(url);
    }
    cursor = match.index + url.length;
  }
  if (cursor < text.length) inline.push(text.slice(cursor));
  return { inline, embeds };
}

function isImage(att: TicketAttachment): boolean {
  if (att.contentType && att.contentType.startsWith('image/')) return true;
  return /\.(png|jpe?g|gif|webp|bmp|avif)$/i.test(att.name || '');
}

function isVideo(att: TicketAttachment): boolean {
  if (att.contentType && att.contentType.startsWith('video/')) return true;
  return /\.(mp4|webm|mov|m4v)$/i.test(att.name || '');
}

function isAudio(att: TicketAttachment): boolean {
  if (att.contentType && att.contentType.startsWith('audio/')) return true;
  return /\.(mp3|ogg|wav|m4a)$/i.test(att.name || '');
}

function fmtSize(n: number): string {
  if (!n) return '';
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / 1024 / 1024).toFixed(1)} MB`;
}

function fmtTime(ts: number): string {
  const d = new Date(ts);
  const today = new Date();
  const sameDay = d.toDateString() === today.toDateString();
  return sameDay
    ? d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
    : d.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export function TicketMessage({ msg }: { msg: TicketMessageT }) {
  const isRelay = msg.author.isAdminRelay;
  return (
    <article className={`ticketMessage ${isRelay ? 'adminRelay' : ''} ${msg.author.isBot ? 'bot' : ''}`}>
      {msg.author.avatarUrl ? (
        <img src={msg.author.avatarUrl} alt={msg.author.name} className="ticketMessage-avatar" loading="lazy" />
      ) : (
        <div className="ticketMessage-avatar ticketMessage-avatarFallback">{(msg.author.name?.[0] || '?').toUpperCase()}</div>
      )}
      <div className="ticketMessage-body">
        <header className="ticketMessage-header">
          <strong>{msg.author.name}</strong>
          {isRelay && msg.author.relayUsername ? <span className="ticketMessage-relay">via admin · {msg.author.relayUsername}</span> : null}
          {!isRelay && msg.author.isBot ? <span className="ticketMessage-bot">bot</span> : null}
          <span className="ticketMessage-time">{fmtTime(msg.ts)}</span>
        </header>
        {msg.content ? (() => {
          const { inline, embeds } = renderContent(msg.content);
          return (
            <>
              <div className="ticketMessage-content">{inline}</div>
              {embeds.length ? (
                <div className="ticketMessage-mediaEmbeds">
                  {embeds.map((e, i) => <MediaEmbed key={i} url={e.url} kind={e.kind} />)}
                </div>
              ) : null}
            </>
          );
        })() : null}
        {msg.attachments.length ? (
          <div className="ticketMessage-attachments">
            {msg.attachments.map((a, i) => {
              if (isImage(a)) {
                return (
                  <a key={i} href={a.url} target="_blank" rel="noreferrer" className="ticketAttachment-img">
                    <img src={a.url} alt={a.name} loading="lazy" />
                  </a>
                );
              }
              if (isVideo(a)) {
                return (
                  <video key={i} controls preload="metadata" className="ticketAttachment-video">
                    <source src={a.url} type={a.contentType || undefined} />
                  </video>
                );
              }
              if (isAudio(a)) {
                return <audio key={i} controls preload="metadata" src={a.url} className="ticketAttachment-audio" />;
              }
              return (
                <a key={i} href={a.url} target="_blank" rel="noreferrer" className="ticketAttachment-file">
                  <span className="ticketAttachment-name">{a.name}</span>
                  <span className="muted">{fmtSize(a.size)}</span>
                </a>
              );
            })}
          </div>
        ) : null}
      </div>
    </article>
  );
}
