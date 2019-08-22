import * as React from 'react';
import { IMovies } from '@Interfaces';

import { Layout, SearchComponent, Toast } from '@Components';

export class Presentational extends React.Component<IMovies.IProps> {
	render() {
		const { err, isLoading, children } = this.props;

		return (
			<Layout title="Popular Movies">
				{isLoading || !!err ? (
					<Toast isLoading={isLoading} err={err} />
				) : (
					<>
						<SearchComponent />
						<div className="grid-area">{children}</div>
					</>
				)}
			</Layout>
		);
	}
}
