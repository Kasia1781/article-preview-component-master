const btn = document.querySelector('button');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const removeBtn = document.querySelector('.card__footer');
const addBtn = document.querySelector('.card__footer-share');
const addBtn2 = document.querySelector('.card__footer-share2');
const addBtn3 = document.querySelector('.card__footer-desktop')

const remove = () => {
	removeBtn.style.display = 'none';
	addBtn.style.display = 'flex';
};
const add = () => {
	removeBtn.style.display = 'flex';
	addBtn.style.display = 'none';
};

const add2 = () => {
	addBtn2.style.display = 'flex';
};

btn.addEventListener('click', remove);
btn2.addEventListener('click', add);
btn1.addEventListener('click', add2);
