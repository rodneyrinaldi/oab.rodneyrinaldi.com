import { SelectionContext, SelectionProvider } from '../contexts/selection'
import type { AppProps /*, AppContext */ } from 'next/app'

import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SelectionProvider>
      <Component {...pageProps} />
    </SelectionProvider>
  )
}

export default MyApp