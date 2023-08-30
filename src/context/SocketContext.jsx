import { createContext } from 'react';

import { useSocket } from '../hooks';
import { config } from '../config';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const { socket, online } = useSocket(config.serverPath);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    );
};
