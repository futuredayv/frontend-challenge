//#region Global Imports
import App, { Container, NextAppContext } from 'next/app';
import Head from 'next/head';
import * as React from 'react';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
//#endregion Global Imports

//#region Local Imports
import store from '@Redux/store';
import '../src/Styles/styles.scss';
//#endregion Local Imports

//#region Interface Imports
import { IApp } from '@Interfaces';
//#endregion Interface Imports

class MyApp extends App<IApp.IProps> {
	static async getInitialProps(props: NextAppContext) {
		let pageProps = {};

		if (props.Component.getInitialProps) {
			pageProps = await props.Component.getInitialProps(props.ctx);
		}

		return { pageProps };
	}

	render(): JSX.Element {
		const { Component, pageProps, store } = this.props;

		return (
			<Container>
				<Provider store={store}>
					<Head>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0"
						/>
					</Head>
					<Component {...pageProps} />
				</Provider>
			</Container>
		);
	}
}

export default withRedux(store)(MyApp);
