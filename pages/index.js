import { WebSocket } from 'nextjs-websocket'
import Grid from '@material-ui/core/Grid';
import TickersContextProvider from '../contexts/TickersContext';
import Ticker from '../components/Ticker';

export default function Home(){
    const handleData = data => {
        setTicker(data);
    }
    
    // {
    //     "e": "aggTrade",  // Event type
    //     "E": 123456789,   // Event time
    //     "s": "BNBBTC",    // Symbol
    //     "a": 12345,       // Aggregate trade ID
    //     "p": "0.001",     // Price
    //     "q": "100",       // Quantity
    //     "f": 100,         // First trade ID
    //     "l": 105,         // Last trade ID
    //     "T": 123456785,   // Trade time
    //     "m": true,        // Is the buyer the market maker?
    //     "M": true         // Ignore
    //   }

    return <TickersContextProvider>
                <div style={{height : "100vh", backgroundColor : "red"}}>
                    {/* <p>{ticker}</p>
                    <WebSocket url='wss://stream.binance.com:9443/ws/bnbbtc@ticker'
                            onMessage={data => handleData(data)}
                    /> */}
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center">
                            <Ticker symbol="BTCUSD"/>
                            <Ticker symbol="BTCBRL"/>
                            <Ticker symbol="ETHUSD"/>
                            <Ticker symbol="ETHBRL"/>
                    </Grid>
                </div>
    </TickersContextProvider>
}