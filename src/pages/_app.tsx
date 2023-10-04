import '@/styles/global.css';

import { Sriracha } from '@next/font/google';
import clsx from 'clsx';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { MainProvider } from '@/context/main-context';
import Redux from '@/redux';

const font = Sriracha({ weight: '400', subsets: ['latin', 'vietnamese'] });

const { store, persistor } = Redux();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainProvider>
        <ContainerMyApp pageProps={pageProps} Component={Component} />
      </MainProvider>
    </PersistGate>
  </Provider>
);

const ContainerMyApp = ({ Component, pageProps }: any) => {
  return (
    <div className={clsx(font.className)}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
