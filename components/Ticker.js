import { useContext } from 'react';
import { TickersContext } from '../contexts/TickersContext';

export default function Ticker(props){
    var ticker, prevTicker;
    if(props.symbol === "BTCUSD"){
        const { ticker1, prevTicker1 } = useContext(TickersContext);
        ticker = ticker1;
        prevTicker = prevTicker1;
    }else if(props.symbol === "BTCBRL"){
        const { ticker2, prevTicker2 } = useContext(TickersContext);
        ticker = ticker2;
        prevTicker = prevTicker2;
    }else if(props.symbol === "ETHUSD"){
        const { ticker3, prevTicker3 } = useContext(TickersContext);
        ticker = ticker3;
        prevTicker = prevTicker3;
    }else if(props.symbol === "ETHBRL"){
        const { ticker4, prevTicker4 } = useContext(TickersContext);
        ticker = ticker4;
        prevTicker = prevTicker4;
    }

    return <div>
        <p>test</p>
    </div>
}