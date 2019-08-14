//#region Global Imports
import React from 'react';
import Link from 'next/link';
//#endregion Global Imports
import './style.scss';

//#region Interface Imports
import { IGridItem } from '@Interfaces';
//#endregion Interface Imports

// renderGridItem(model) {
// }

export const GridItem = ({
	name,
	desc,
	img,
	routerLink = '',
}: IGridItem.IProps): JSX.Element => (
	<Link href={routerLink || ''}>
		<div className="GridItem">
			<div className="GridItem__Inner">
				<div className="poster">
					<img src={img} />
				</div>

				<div className="overlay">{name}</div>
			</div>

			<div className="GridItem__Desc">{desc}</div>
		</div>
	</Link>
);
