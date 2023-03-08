import '../styles/globals.css';
import '../public/antd.min.css';
import type { AppProps } from 'next/app';
import { StyleProvider } from '@ant-design/cssinjs';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider hashPriority='high'>
      <Component {...pageProps} />
    </StyleProvider>
  );
}
