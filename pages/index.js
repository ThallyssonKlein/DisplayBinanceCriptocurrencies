import { useState } from 'react';
import { WebSocket } from 'nextjs-websocket'

export default function Home(){
    const [ticker, setTicker] = useState("");

    const handleData = data => {
        setTicker(data);
    }
    
    return <div>
            <p>{ticker}</p>
            <WebSocket url='wss://stream.binance.com:9443/ws/bnbbtc@ticker'
                       onMessage={data => handleData(data)}
            />
    </div>;
}