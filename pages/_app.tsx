import '@/styles/globals.css'
import { Jost } from 'next/font/google'
import type { AppProps } from 'next/app'

const jost = Jost({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'], 
})
export default function App({ Component, pageProps }: AppProps) {
  return (
        <Component {...pageProps} />
    )
}
