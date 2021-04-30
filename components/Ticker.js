import { useContext } from 'react';
import { TickersContext } from '../contexts/TickersContext';
import { AiFillCaretUp, AiFillCaretDown} from 'react-icons/ai';

export default function Ticker(props){
    const { ticker1, prevTicker1, ticker2, prevTicker2 } = useContext(TickersContext);
    
    if(ticker1 !== undefined && ticker2 !== undefined){
        let arrow = <div/>;
        let price, prevPrice;
        
        if(prevTicker1 !== undefined && prevTicker2 !== undefined){
            if(props.symbol === "DOGEBTC"){
                price = ticker1.p;
                prevPrice = prevTicker1.p;
            }else{
                price = ticker2.p;
                prevPrice = prevTicker2.p;
            }
    
            if(price < prevPrice){
                arrow = <AiFillCaretDown size={20} color="red"/>
            }else if (price > prevPrice){
                arrow = <AiFillCaretUp size={20} color="green"/>;
            }
        }

        return <div className="ticker">
                <div style={{display : 'flex', flexDirection : "row", justifyContent : "space-between"}}>
                    <p className="p">{props.symbol}</p>
                    {arrow}
                </div>
                <p className="p">Price: {(props.symbol === "DOGEBTC") ? ticker1.p : ticker2.p}</p>
                <p className="p">Quantity: {(props.symbol === "DOGEBTC") ? ticker1.q : ticker2.q}</p>
                <p className="p">Is buyer a market maker? {((props.symbol === "DOGEBTC" ? ticker1.m : ticker2.m)) ? "Yes" : "No"}</p>
            </div>
    }else{
        return <div/>
    }
}