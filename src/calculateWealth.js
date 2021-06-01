import { getData, formatToMoney } from './getRandomUser';

const calculateWealth = () => {
	const main = document.querySelector('#main');

	let data = getData();

	const wealth = data.reduce((acc, data) => (acc += data.money), 0);

	const wealthEl = document.createElement('div');

	wealthEl.innerHTML = `
        <h3>Total Wealth: <strong>${formatToMoney(wealth)}</strong></h3>
    `;
	main.appendChild(wealthEl);
};

export { calculateWealth };
