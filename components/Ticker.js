import { useContext } from 'react';
import { TickersContext } from '../contexts/TickersContext';

export default function Ticker(props){
    var ticker, prevTicker;
    console.log(props.symbol)
    if(props.symbol === "BTCETH"){
        const { ticker1, prevTicker1 } = useContext(TickersContext);
        ticker = ticker1;
        prevTicker = prevTicker1;
        console.log('1');
    }else if(props.symbol === "ETHBTC"){
        const { ticker2, prevTicker2 } = useContext(TickersContext);
        ticker = ticker2;
        prevTicker = prevTicker2;
        console.log('2');
    }

    if(props.firstMessage){
        return <div className="ticker">
                <p style={{color : "white", textAlign : "center"}}>{props.symbol}</p>
                <p>Price: {ticker.p}</p>
                <p>Quantity: {ticker.q}</p>
                <p>Is buyer a market maker? {(ticker.m) ? "Yes" : "No"}</p>
            </div>
    }else{
        return <div/>
    }
}