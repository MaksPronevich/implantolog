/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from '../modules.js';

// Подключение модуля
import intlTelInput from 'intl-tel-input';
import 'inputmask/dist/inputmask.min.js';

// Базовые стили
import 'intl-tel-input/build/css/intlTelInput.css';

// Запуск
const inputsPhone = document.querySelectorAll('input[name=phone]');

if (inputsPhone.length) {
	inputsPhone.forEach(input => {
		const iti = intlTelInput(input, {
			initialCountry: 'by',
			// hiddenInput: 'phone',
			autoHideDialCode: true,
			separateDialCode: true,
			preferredCountries: ['by', 'ru', 'ua'],
			utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js',
		});

		input.addEventListener('countrychange', function () {
			input.value = '';
			input.getAttribute('placeholder').replace(/[0-9]/g, 'd');
		});
	});

	flsModules.inputsPhone = Inputmask({ mask: '99-999-99-99' }).mask(inputsPhone);
}

// $('input[name="phone"]').on('close:countrydropdown', function (e, countryData) {
// 	$(this).val('');
// 	$(this).mask($(this).attr('placeholder').replace(/[0-9]/g, 'd'));
// });

// $.mask.definitions['9'] = '';
// $.mask.definitions['d'] = '[0-9]';

// $('input[name=phone]').mask('dd ddd-dd-dd');
