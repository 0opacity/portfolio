import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { globalStyles } from 'src/styles/globalStyles';
import { theme } from 'src/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp;
