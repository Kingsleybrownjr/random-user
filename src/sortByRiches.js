import { getData, updateDOM } from './getRandomUser';

const sortByRichest = () => {
	const data = getData();

	data.sort((a, b) => b.money - a.money);
	updateDOM(data);
};

export { sortByRichest };
