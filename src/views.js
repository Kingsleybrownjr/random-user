const renderPage = () => {
	const rootDiv = document.querySelector('#root');

	rootDiv.innerHTML = `
		<h1>DOM Array Methods</h1>

		<div class="container">
			<aside>
				<button id="add_user">Add User</button>
				<button id="double">Double Money</button>
				<button id="show_millionaires">Show only Millionaires</button>
				<button id="sort">Sort by Richest</button>
				<button id="calculate_wealth">Calculate Wealth</button>
			</aside>

			<main id="main">
				<h2><strong>Person</strong> Wealth</h2>
			</main>
		</div>    
    `;

	return rootDiv;
};

export { renderPage };
