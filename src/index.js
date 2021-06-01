import { doubleMoney } from './doubleMoney';
import { getRandomUser } from './getRandomUser';
import { sortByRichest } from './sortByRiches';
import { showMillionaires } from './showMillionaires';
import { calculateWealth } from './calculateWealth';

const addUserBtn = document.querySelector('#add_user');
getRandomUser();
const doubleMoneyBtn = document.querySelector('#double');
const showMillionaireBtn = document.querySelector('#show_millionaires');
const sortBtn = document.querySelector('#sort');
const calculateWealthBtn = document.querySelector('#calculate_wealth');

addUserBtn.addEventListener('click', getRandomUser);
doubleMoneyBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionaireBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
