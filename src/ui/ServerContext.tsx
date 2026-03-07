import React, { createContext, useContext, useEffect, useState } from 'react';
import { listServers, type ServerInfo } from '../util/api';

interface ServerContextValue {
  servers: ServerInfo[];
  serverId: string;
  setServerId: (id: string) => void;
}

const ServerContext = createContext<ServerContextValue>({
  servers: [],
  serverId: '',
  setServerId: () => {},
});

export function useServer() {
  return useContext(ServerContext);
}

export function ServerProvider({ children }: { children: React.ReactNode }) {
  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [serverId, setServerId] = useState('');

  useEffect(() => {
    listServers().then((s) => {
      setServers(s);
      if (s.length === 1 && !serverId) setServerId(s[0].id);
    }).catch(() => {});
  }, []);

  return (
    <ServerContext.Provider value={{ servers, serverId, setServerId }}>
      {children}
    </ServerContext.Provider>
  );
}
