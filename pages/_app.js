import '../styles/index.css'
import TickersContextProvider from '../contexts/TickersContext';
export default function Home({ Component, pageProps }) {
  return <TickersContextProvider>
      <Component {...pageProps} />
  </TickersContextProvider>
}
