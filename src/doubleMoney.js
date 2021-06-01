import { getData, updateData, updateDOM } from './getRandomUser';

const doubleMoney = () => {
	let data = getData();

	data = data.map(data => {
		return { ...data, money: data.money * 2 };
	});
	updateData(data);
	updateDOM(data);
};

export { doubleMoney };
