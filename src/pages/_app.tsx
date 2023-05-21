import 'src/styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux'; // Provider는 react가 아닌 react-redux에서 가져온다.
import store from 'src/Redux/Store';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
