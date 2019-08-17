//#region Global Imports
import React, { useState } from 'react';
import Link from 'next/link';
//#endregion Global Imports
import './style.scss';

//#region Interface Imports
import { IGridItem } from '@Interfaces';
//#endregion Interface Imports

export const GridItem = ({
	name,
	desc,
	img,
	routerLink = '',
}: IGridItem.IProps): JSX.Element => {
	const [isLoaded, setLoaded] = useState(false);

	return (
		<Link href={routerLink || ''}>
			<div className={`GridItem ${isLoaded && 'loaded'}`}>
				<div className="GridItem__Inner">
					<div className="poster">
						<img src={img} onLoad={() => setLoaded(true)} />
					</div>

					<div className="overlay">{name}</div>
				</div>

				<div className="GridItem__Desc">{desc}</div>
			</div>
		</Link>
	);
};
