import { useContext, useState } from 'react';
import { WebSocket } from 'nextjs-websocket'
import Grid from '@material-ui/core/Grid';
import Ticker from '../components/Ticker';
import { TickersContext } from '../contexts/TickersContext';

export default function Home(){
    const { setTicker1, setTicker2 } = useContext(TickersContext);
    const [ firstMessage, setFirstMessage ] = useState(false);

    const handleData = (data, code) => {
        console.log('code:');
        console.log(code);
        switch(code){
            case 1:
                setTicker1(data);
                break;
            case 2:
                setTicker2(data);
                break;
        }
        setFirstMessage(true);
    }

    return  <div className="viewport">
                <WebSocket url='wss://stream.binance.com:9443/ws/btceth@ticker'
                        onMessage={data => handleData(data, 1)}
                />
                <WebSocket url='wss://stream.binance.com:9443/ws/ethbtc@ticker'
                        onMessage={data => handleData(data, 2)}
                />
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <Ticker symbol="BTCETH" firstMessage={firstMessage}/>
                        <Ticker symbol="ETHBTC" firstMessage={firstMessage}/>

                </Grid>
            </div>
}