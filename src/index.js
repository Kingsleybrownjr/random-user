import { doubleMoney } from './doubleMoney';
import { getRandomUser } from './getRandomUser';

const addUserBtn = document.querySelector('#add_user');
getRandomUser();
const doubleMoneyBtn = document.querySelector('#double');
const showMillionaireBtn = document.querySelector('#show_millionaires');
const sortBtn = document.querySelector('#sort');
const calculateWealthBtn = document.querySelector('#calculate_wealth');

addUserBtn.addEventListener('click', getRandomUser);

doubleMoneyBtn.addEventListener('click', doubleMoney);
