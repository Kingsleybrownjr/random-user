import { getData, updateDOM } from './getRandomUser';

const doubleMoney = () => {
	let data = getData();
	
	data = data.map(data => {
		return { ...data, money: data.money * 2 };
	});
	updateDOM(data);
};

export { doubleMoney };
