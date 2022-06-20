import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { ThemeProvider } from 'styled-components'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Next - Template!</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
