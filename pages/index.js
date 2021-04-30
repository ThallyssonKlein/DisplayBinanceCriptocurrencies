import { useContext } from 'react';
import { WebSocket } from 'nextjs-websocket'
import Grid from '@material-ui/core/Grid';
import Ticker from '../components/Ticker';
import { TickersContext } from '../contexts/TickersContext';

export default function Home(){
    const { setTicker1, setTicker2 } = useContext(TickersContext);

    const handleData = (data, code) => {
        switch(code){
            case 1:
                setTicker1(JSON.parse(data));
                break;
            case 2:
                setTicker2(JSON.parse(data));
                break;
        }
    }

    return  <div className="viewport">
                <h1 style={{fontFamily: 'arial', marginBottom : 10, textAlign : 'center'}}>Display Binance Cryptocurrencies</h1>
                <WebSocket url='wss://stream.binance.com:9443/ws/dogebtc@ticker'
                        onMessage={data => handleData(data, 1)}
                />
                <WebSocket url='wss://stream.binance.com:9443/ws/ethbtc@ticker'
                        onMessage={data => handleData(data, 2)}
                />
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <Ticker symbol="DOGEBTC"/>
                        <Ticker symbol="ETHBTC"/>
                </Grid>
            </div>
}