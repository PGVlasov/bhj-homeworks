const prodCart = document.querySelector('.cart__products');
const reduceBtn = document.querySelectorAll('.product__quantity-control_dec');
const increaseBtn = document.querySelectorAll('.product__quantity-control_inc');
const prodAdd = document.querySelectorAll('.product__add');

for(let btn of reduceBtn) {
	btn.addEventListener('click', (event) => {
		const parent = btn.parentNode;
		const val = parent.childNodes[3];
		let value = val.textContent;
		if(value > 1) val.textContent = --value;
	});
}

for(let btn of increaseBtn) {
	btn.addEventListener('click', (event) => {
		const parent = btn.parentNode;
		const val = parent.childNodes[3];
		let value = val.textContent;
		val.textContent = ++value;
	});
}

for(let btn of prodAdd) {
	btn.addEventListener('click', (event) => {
		const parent = event.target.closest('.product');
		const id = parent.dataset.id;
		const src = parent.childNodes[3].src;
		const value = Number(document.querySelector('.product__quantity-value').textContent);
		html(id, src, value);
	});
}

function html(id, src, counter) {
	const children = Array.from(prodCart.children);
	const block = children.find((block) => block.dataset.id === id);
	if(block) {
		const value = parseInt(block.children[1].textContent);
		block.children[1].textContent = value + parseInt(counter);
		return 0;
	}
	prodCart.innerHTML += `<div class="cart__product" data-id="${id}">
				                <img class="cart__product-image" src="${src}">
				                <div class="cart__product-count">${counter}</div>
				            </div>`;
}