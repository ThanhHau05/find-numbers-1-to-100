import '@/styles/global.css';

import { Sriracha } from '@next/font/google';
import clsx from 'clsx';
import type { AppProps } from 'next/app';

const font = Sriracha({ weight: '400', subsets: ['latin', 'vietnamese'] });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className={clsx(font.className)}>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
