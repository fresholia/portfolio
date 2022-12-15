import type { AppProps } from 'next/app';
import 'app/ui/styles/_globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
