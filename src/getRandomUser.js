let data = [];

// fetch random user and add money
const getRandomUser = async () => {
	const res = await fetch('https://randomuser.me/api');

	const data = await res.json();
	const user = data.results[0];
	const { first, last } = user.name;

	const newUser = {
		name: `${first} ${last}`,
		money: Math.floor(Math.random() * 1_000_000),
	};
	addData(newUser);
};

// add user info to data array and update DOM when a new user is added
const addData = userInfo => {
	data.push(userInfo);
	updateDOM();
};

const updateDOM = (providedData = data) => {
	const main = document.querySelector('#main');

	// clear the main div
	main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;

	providedData.forEach(data => {
		const div = document.createElement('div');
		div.classList.add('person');

		div.innerHTML = `
            <strong>${data.name}</strong> $${formatToMoney(data.money)}
        `;
		main.appendChild(div);
	});
};

const getData = () => data;

// update the data array with changes
const updateData = newData => {
	data = newData;
};

//Format number as money
const formatToMoney = number =>
	number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

export { getRandomUser, getData, updateDOM, updateData, formatToMoney };
