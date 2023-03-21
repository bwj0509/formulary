import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/globalStyle";
import { theme } from "@/styles/theme";
import Header from "@/components/common/header/header";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Formulary</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="F1에 대한 모든것을 제공합니다"
          content="74년의 기록, 1120번의 레이스, 858명의 드라이버"
        ></meta>
        <meta property="og:image" content="/images/f1history.jpg"></meta>
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
