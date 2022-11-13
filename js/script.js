const shareButton = document.querySelector('.btn');
const sharePanelBtn = document.querySelector('.btn2');
const sharePanel = document.querySelector('.card__footer-share');

const toggleSharePanel = () => {
	// toggle działa jak przełącznik - usuwa klasę jeśli już jest
	// a jeśli nie ma - to dodaje
	sharePanel.classList.toggle('hidden');
};

shareButton.addEventListener('click', toggleSharePanel);
sharePanelBtn.addEventListener('click', toggleSharePanel);
