import * as React from 'react';
import { ISeries } from '@Interfaces';

import { Layout, SearchComponent, Toast } from '@Components';

export class Presentational extends React.Component<ISeries.IProps> {
	render() {
		const { err, isLoading, children } = this.props;

		return (
			<Layout title="Popular Series">
				{isLoading || !!err ? (
					<Toast isLoading err={!!err} />
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
