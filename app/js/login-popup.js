(function () {
	var loginLink = document.querySelector('.user-list__login');
	var popup = document.querySelector('.modal-content');
	var close = document.querySelector('.modal-content__close');
	var login = popup.querySelector('[name=login]');
	var password = popup.querySelector('[name=password]');
	var form = popup.querySelector('.login-form');
	var storage = localStorage.getItem('login');

	loginLink.addEventListener('click', function (event) {
		event.preventDefault();
		popup.classList.add('modal-content--show');
		document.body.classList.add('js-no-scroll');

		if (storage) {
			login.value = storage;
			password.focus();
		} else {
			login.focus();
		}
	});

	close.addEventListener('click', function (event) {
		event.preventDefault();
		popup.classList.remove('modal-content--show');
		popup.classList.remove('modal-content--error');
		document.body.classList.remove('js-no-scroll');
	});

	form.addEventListener('submit', function (event) {
		if (!login.value || !password.value) {
			event.preventDefault();
			popup.classList.add('modal-content--error');
			popup.classList.remove('modal-content--error');
			void popup.offsetWidth; // для того что бы удаление класса не происходило до анимации
			popup.classList.add('modal-content--error');
		} else {
			localStorage.setItem(login, login.value);
		}
	});

	window.addEventListener('keydown', function (event) {
		if (event.keyCode === 27) {
			if (popup.classList.contains('modal-content--show')) {
				popup.classList.remove('modal-content--show');
				popup.classList.remove('modal-content--error');
				document.body.classList.remove('js-no-scroll');
			}
		}
	});
}());
