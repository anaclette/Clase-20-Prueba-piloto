const cart = document.querySelector('.cart > button');
const cartAmount = document.querySelector('.cart span');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const closeCartMenu = document.querySelectorAll('#close-menu');
const purchaseButton = document.querySelectorAll('.purchase-button');

const searchingFilter = document.querySelector('#searching');
const gradingFilter = document.getElementsByClassName('grading-filter');
const categoryFilter = document.querySelectorAll('.category-filter');
const singleProduct = document.getElementsByClassName('product');
const trashButton = document.querySelector('#trash-can');

const listLikeButton = document.querySelector('#list-layout-button');
const gridLikeButton = document.querySelector('#grid-layout-button');
const container = document.querySelector('#list-layout');
const productDescription = document.querySelectorAll('.product-description');
const visibleProductsHeader = document.querySelector('#visible-products');
const filterButton = document.querySelector('#filters-button');
const productsInCart = document.querySelectorAll('.in-cart');

const asideMenu = document.querySelector('aside');

// --------------- Cart data update ----------------------

const addedProduct = document.querySelector('#added-prod');
const cartProducts = document.querySelector('.cart-products');

product = 0;
for (let button of purchaseButton) {
	button.onclick = () => {
		product++;
		addedProduct.innerHTML = `${product} producto(s) agregado(s)`;
		cartAmount.innerHTML = `Carrito ${product} items`;

		for (let product of productsInCart) {
			// const updateCartData = () => {
			product.classList.add('in-cart');

			for (let each of singleProduct) {
				let img = each.dataset.src;
				let name = each.dataset.name;
				let price = each.dataset.price;

				cartProducts.innerHTML = ' ';
				let cartImg = document.createElement('div');
				// productInCart.innerHTML = `${img}`;
				cartProducts.appendChild(cartImg);
				cartProducts.innerHTML += cartImg;
				// img.content.cloneNode(true);

				let cartName = document.createElement('div');
				// cartName.innerHTML = `${name}`;
				cartProducts.appendChild(cartName);
				cartProducts.innerHTML += cartName;
				// name.content.cloneNode(true);

				let cartPrice = document.createElement('div');
				// cartPrice.innerHTML = `${price}`;
				cartProducts.appendChild(cartPrice);
				cartProducts.innerHTML += cartPrice;
				// price.content.cloneNode(true);
			}
		}
	};
}

//  -------------- Cart button's behaviour ---------------

const emptyCart = document.querySelector('#empty-cart');
const fullCart = document.querySelector('#full-cart');

const cartBehaviour = () => {
	cart.onclick = () => {
		overlay.classList.remove('hidden');
		document.body.classList.add('no-scroll');
		menu.classList.add('show-menu');

		for (let cross of closeCartMenu) {
			cross.onclick = () => {
				overlay.classList.add('hidden');
				document.body.classList.remove('no-scroll');
				menu.classList.remove('show-menu');
			};
		}
		if (product === 0) {
			emptyCart.classList.remove('hidden');
			emptyCart.classList.add('emptycart-menu');
			fullCart.classList.add('hidden');
		} else if (product > 0) {
			fullCart.classList.remove('hidden');
			fullCart.classList.add('fullcart-menu');
			emptyCart.classList.add('hidden');
		}
	};
};

cartBehaviour();

// -------------- Search per product filter ----------------

searchingFilter.oninput = () => {
	for (let each of singleProduct) {
		if (each.dataset.name.toLowerCase().includes(searchingFilter.value)) {
			each.classList.remove('hidden');
			refreshVisibleProducts();
		} else {
			each.classList.add('hidden');
			refreshVisibleProducts();
		}
	}
};

// ------------------- Search per grading filter ---------------------

for (let checkbox of gradingFilter) {
	checkbox.onclick = () => {
		filterProducts();
	};
}

const matchingCheckbox = () => {
	for (let checkbox of gradingFilter) {
		if (checkbox.checked) {
			return true;
		}
	}
};

const pickingMatch = (each) => {
	for (let checkbox of gradingFilter) {
		if (checkbox.value === each.dataset.grading && checkbox.checked) {
			return true;
		}
	}
};

const filterProducts = () => {
	for (let each of singleProduct) {
		each.classList.add('hidden');
		refreshVisibleProducts();
		if (matchingCheckbox()) {
			if (pickingMatch(each)) {
				each.classList.remove('hidden');
				refreshVisibleProducts();
			}
		} else {
			each.classList.remove('hidden');
			refreshVisibleProducts();
		}
	}
};

// -------------------- Search per category filter ----------------

for (let checkbox of categoryFilter) {
	checkbox.onclick = () => {
		filterPerCategory();
	};
}

const selectedCategory = () => {
	for (let checkbox of categoryFilter) {
		if (checkbox.checked) {
			return true;
		}
	}
};

const pickingMatchedCategory = (each) => {
	for (let checkbox of categoryFilter) {
		if (
			(checkbox.value === each.dataset.category && checkbox.checked) ||
			(checkbox.name === each.dataset.shared && checkbox.checked) ||
			(checkbox.name === each.dataset.plus && checkbox.checked)
		) {
			return true;
		}
	}
};

const filterPerCategory = () => {
	for (let each of singleProduct) {
		each.classList.add('hidden');
		refreshVisibleProducts();

		if (selectedCategory()) {
			if (pickingMatchedCategory(each)) {
				each.classList.remove('hidden');
				refreshVisibleProducts();
			}
		} else {
			each.classList.remove('hidden');
			refreshVisibleProducts();
		}
	}
};

// -------------------- Filter wiping -------------------

trashButton.onclick = () => {
	wipingFilter();
};

const wipingFilter = () => {
	searchingFilter.value = ' ';
	for (let checkbox of gradingFilter) {
		checkbox.checked = false;
	}
	for (let checkbox of categoryFilter) {
		checkbox.checked = false;
	}
	for (let each of singleProduct) {
		if (each.classList.contains('hidden')) {
			each.classList.remove('hidden');
			refreshVisibleProducts();
		}
	}
};

// -------------------- Products layout --------------

gridLikeButton.onclick = () => {
	container.classList.remove('list-layout');
	container.classList.add('products-container');
	for (let each of singleProduct) {
		each.classList.remove('list-style');
		each.classList.add('grid-layout');
	}
	for (let description of productDescription) {
		description.classList.add('hidden');
	}
};

listLikeButton.onclick = () => {
	container.classList.add('list-layout');
	container.classList.remove('products-container');
	for (let each of singleProduct) {
		each.classList.add('list-style');
		each.classList.remove('grid-layout');
	}
	for (let description of productDescription) {
		description.classList.remove('hidden');
	}
};

// ---------------- Refreshing visible product amount ------------------------

const refreshVisibleProducts = () => {
	let visibleAmount = singleProduct.length;
	for (let each of singleProduct) {
		if (each.classList.contains('hidden')) {
			visibleAmount--;
		}
	}

	visibleProductsHeader.innerHTML = `Mostrando ${visibleAmount} producto(s) de ${singleProduct.length}`;
};

// ------------------- Products filter from tablets and cell devices -------------

const filtersForSmallDevices = () => {
	filterButton.onclick = () => {
		overlay.classList.remove('hidden');
		document.body.classList.add('no-scroll');

		asideMenu.classList.add('small-devices-display');
		asideMenu.classList.remove('small-devices-hidden');
		asideMenu.classList.add('.small-devices-showmenu');

		for (let cross of closeCartMenu) {
			cross.classList.remove('hidden');
			cross.onclick = () => {
				overlay.classList.add('hidden');
				document.body.classList.remove('no-scroll');

				asideMenu.classList.remove('small-devices-display');
				asideMenu.classList.add('small-devices-hidden');
				asideMenu.classList.remove('.small-devices-showmenu');
			};
		}
	};
};

filtersForSmallDevices();

// ------------------------ Purchase panel functioning -------------------

const subtotal = document.querySelector('#subtotal');
const checkboxEfectivo = document.querySelector('#efectivo');
const total = document.querySelector('#total');
const recargoParrafo = document.querySelector('#recargo');

const checkboxTarjeta = document.querySelector('#tarjeta');
const checkboxDescuento = document.querySelector('#descuento');
const descuento = document.querySelector('.descuento');
const checkboxEnvio = document.querySelector('#envio');
const envio = document.querySelector('.envio');

const buyButton = document.querySelector('#buy');
const purchasePanel = document.querySelector('#purchase-panel');
const endPurchaseButton = document.querySelector('#ending-button');
const keepOnLookingButton = document.querySelector('#keepon-looking');
const regretButton = document.querySelector('#regret');

// const subtotalProductos = document.querySelectorAll('div[data-price]');
// console.log(subtotalProductos);

const cancellPanel = document.querySelector('.cancell-purchase-panel');
const emptyCartButton = document.querySelector('#empty');
const cancellButton = document.querySelector('#cancell');

const subtotalProductos = 5000;

buyButton.onclick = () => {
	purchasePanel.classList.remove('hidden');
	menu.classList.remove('show-menu');
	total.textContent = calcularTotal(subtotalProductos);

	endPurchaseButton.onclick = () => {
		window.location.reload();
		return false;
	};

	keepOnLookingButton.onclick = () => {
		purchasePanel.classList.add('hidden');
		overlay.classList.add('hidden');
		document.body.classList.remove('no-scroll');
	};
};

regretButton.onclick = () => {
	cancellPanel.classList.remove('hidden');

	emptyCartButton.onclick = () => {
		for (let product of singleProduct) {
			product.classList.remove('in-cart');
		}

		cancellPanel.classList.add('hidden');
		emptyCart.classList.remove('hidden');
		emptyCart.classList.add('emptycart-menu');
		fullCart.classList.add('hidden');
		// cartAmount.textContent = `Carrito (${amount} item)`;
	};
	cancellButton.onclick = () => {
		cancellPanel.classList.add('hidden');
	};
};

// const subtotalProductos = () => {
// 	for (let valor of subtotalProductos) {
// 		buyButton.onclick = () => {
// 			subtotal.textContent = valor;
// 			total = `$${calcularTotal()}`;
// 		};
// 	}
// };

const pagaEnEfectivo = () => {
	if (checkboxEfectivo.checked) {
		return true;
	} else {
		return false;
	}
};

checkboxEfectivo.onclick = () => {
	if (pagaEnEfectivo()) {
		subtotal.textContent = `$${subtotalProductos}`;
		total.textContent = `$${calcularTotal(subtotalProductos)}`;
		recargoParrafo.textContent = '$ ';
	} else {
		subtotal.textContent = '$ ';
		total.textContent = `$${subtotalProductos}`;
	}
};

const tieneDescuento = () => {
	if (checkboxDescuento.checked) {
		return true;
	} else {
		return false;
	}
};

const tieneRecargo = () => {
	if (checkboxTarjeta.checked) {
		return true;
	} else {
		return false;
	}
};

const tieneEnvio = () => {
	if (checkboxEnvio.checked) {
		return true;
	} else {
		return false;
	}
};

const obtenerRecargo = (subtotalProductos) => {
	const recargo = subtotalProductos * 0.1;
	return recargo;
};

checkboxTarjeta.onclick = () => {
	if (tieneRecargo()) {
		recargoParrafo.textContent = `$${obtenerRecargo(subtotalProductos)}`;
		total.textContent = `$${calcularTotal(subtotalProductos)} `;
	} else {
		recargoParrafo.textContent = '$ ';
		total.textContent = `$${subtotalProductos}`;
	}
};

const obtenerDescuento = (subtotalProductos) => {
	return subtotalProductos - subtotalProductos * 0.1;
};

checkboxDescuento.onclick = () => {
	if (tieneDescuento()) {
		descuento.textContent = `$${subtotalProductos - obtenerDescuento(subtotalProductos)}`;
		total.textContent = `$${calcularTotal(subtotalProductos)}`;
	} else {
		descuento.textContent = '$ ';
		total.textContent = `$${calcularTotal(subtotalProductos)}`;
	}
};

const valorEnvio = 300;
checkboxEnvio.onclick = () => {
	if (tieneEnvio()) {
		envio.textContent = `$${obtenerCalculoEnvio(subtotalProductos)}`;
		total.textContent = `$${calcularTotal(subtotalProductos)}`;
	} else {
		envio.textContent = '$ ';
		total.textContent = `$${calcularTotal(subtotalProductos)}`;
	}
};

const obtenerGastoDeEnvio = (subtotalProductos) => {
	return subtotalProductos + valorEnvio;
};

const obtenerCalculoEnvio = (subtotalProductos) => {
	let envio = obtenerGastoDeEnvio(subtotalProductos) - subtotalProductos;
	return envio;
};

const calcularTotal = (subtotalProductos) => {
	if (tieneRecargo()) {
		return subtotalProductos + obtenerRecargo(subtotalProductos);
	} else if (tieneRecargo() && tieneEnvio()) {
		return subtotalProductos + obtenerRecargo(subtotalProductos) + obtenerCalculoEnvio(subtotalProductos);
	} else if (tieneRecargo() && tieneEnvio() && tieneDescuento()) {
		return subtotalProductos + obtenerRecargo(subtotalProductos) - obtenerDescuento(subtotalProductos);
	} else if (tieneRecargo() && tieneDescuento()) {
		return obtenerRecargo(subtotalProductos) - obtenerDescuento(subtotalProductos);
	} else if (pagaEnEfectivo()) {
		return subtotalProductos;
	} else if (pagaEnEfectivo() && tieneEnvio()) {
		return subtotalProductos + obtenerCalculoEnvio(subtotalProductos);
	} else if (pagaEnEfectivo() && tieneDescuento()) {
		return subtotalProductos - obtenerDescuento(subtotalProductos);
	} else if (pagaEnEfectivo() && tieneDescuento() && tieneEnvio()) {
		return subtotalProductos + obtenerCalculoEnvio(subtotalProductos) - obtenerDescuento(subtotalProductos);
	} else {
		return `$${subtotalProductos}`;
	}
};

calcularTotal(subtotalProductos);
