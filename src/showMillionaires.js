import { getData, updateDOM } from './getRandomUser';

const showMillionaires = () => {
	let data = getData();
	data = data.filter(data => data.money >= 1_000_000);
	updateDOM(data);
};

export { showMillionaires };
