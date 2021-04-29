import { createContext, useState } from "react";
import usePrevious from 'use-previous';

export const TickersContext = createContext();

export default function TickersContextProvider({ children }) {
    const [ticker1, setTicker1] = useState();
    const prevTicker1 = usePrevious(ticker1);
    const [ticker2, setTicker2] = useState();
    const prevTicker2 = usePrevious(ticker2);
    
    return (
        <TickersContext.Provider value={{ ticker1, setTicker1, ticker2, setTicker2, prevTicker1, prevTicker2 }}>
            {children}
        </TickersContext.Provider>
    );
}
