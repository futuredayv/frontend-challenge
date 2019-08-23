import { DemoResponse, IMovies } from '@Interfaces';

export declare namespace PageHelpers {
	type PageHelper = (
		pageData: DemoResponse[],
		filterOptions: IMovies.IFilterOptions,
	) => DemoResponse[] | any;
}

export const sort: PageHelpers.PageHelper = (
	pageData,
	{ sort: { ordering, by } },
) => {
	const compareFn = (a: DemoResponse, b: DemoResponse) => {
		switch (by) {
			case 'title':
				return a.title.localeCompare(b.title);
			case 'releaseYear':
				return a.releaseYear - b.releaseYear;
			default:
				return 0;
		}
	};

	return pageData.sort((a, b) =>
		ordering === 'ASC' ? compareFn(a, b) : compareFn(b, a),
	);
};

export const filter: PageHelpers.PageHelper = (pageData, { search }) => {
	return (
		pageData &&
		pageData
			.filter(({ releaseYear: r }) => r >= 2010)
			.filter(({ title }) =>
				title.toLowerCase().includes(search.toLowerCase() || ''),
			)
	);
};

export const preparePageData = (pageData: DemoResponse[]) => {
	return pageData.slice(0, 21).map(({ title, images }) => ({
		title,
		url: images['Poster Art'].url,
	}));
};
