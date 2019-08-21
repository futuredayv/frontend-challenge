//#region Global Imports
import * as React from 'react';
//#endregion Global Imports

//#region Interface Imports
import { ILayout } from '@Interfaces';
import { Heading, Footer } from '@Components';
//#endregion Interface Imports

export const Layout = (props: ILayout.IProps): JSX.Element => {
	const { title, children } = props;

	return (
		<>
			<Heading title={title} />
			<main className="container">{children}</main>
			<Footer />
		</>
	);
};
