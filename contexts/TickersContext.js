import { createContext, useState } from "react";
import usePrevious from 'use-previous';

export const TickersContext = createContext();

export default function TickersContextProvider({ children }) {
    const [ticker1, setTicker1] = useState();
    const prevTicker1 = usePrevious(ticker1);
    const [ticker2, setTicker2] = useState();
    const prevTicker2 = usePrevious(ticker2);
    const [ticker3, setTicker3] = useState();
    const prevTicker3 = usePrevious(ticker3);
    const [ticker4, setTicker4] = useState();
    const prevTicker4 = usePrevious(ticker4);
    
    return (
        <TickersContext.Provider value={{ ticker1, setTicker1, ticker2, setTicker2, ticker3, setTicker3, ticker4, setTicker4, prevTicker1, prevTicker2, prevTicker3, prevTicker4}}>
            {children}
        </TickersContext.Provider>
    );
}
