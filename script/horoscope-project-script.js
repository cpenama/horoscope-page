const elementDaySelection = document.getElementById('daySelection');
const elementMonthSelection = document.getElementById('monthSelection');

function assignZodiacSign() {
	console.log('Day selection changed1');
	const valueMonth = elementMonthSelection.value;
	const valueDay = elementDaySelection.value;

	if ((valueMonth === '3' && valueDay >= '21') || (valueMonth === '4' && valueDay <= '19')) {
		document.querySelector('.js-horoscope-reveal').innerHTML = 'Aries';
	}
	else if ((valueMonth === '4' && valueDay >= '20') || (valueMonth === '5' && valueDay <= '20')) {
		document.querySelector('.js-horoscope-reveal').innerHTML = 'Taurus';
	}
	else if ((valueMonth === '5' && valueDay >= '21') || (valueMonth === '6' && valueDay <= '20')) {
		document.querySelector('.js-horoscope-reveal').innerHTML = 'Gemini';
	}
	else if ((valueMonth === '6' && valueDay >= '21') || (valueMonth === '7' && valueDay <= '22')) {
		document.querySelector('.js-horoscope-reveal').innerHTML = 'Cancer';
	}
	else if ((valueMonth === '7' && valueDay >= '23') || (valueMonth === '8' && valueDay <= '22')) {
		document.querySelector('.js-horoscope-reveal').innerHTML = 'Leo';
	}
	else if ((valueMonth === '8' && valueDay >= '23') || (valueMonth === '9' && valueDay <= '22')) {
		document.querySelector('.js-horoscope-reveal').innerHTML = 'Virgo';
	}
	else if ((valueMonth === '9' && valueDay >= '23') || (valueMonth === '10' && valueDay <= '22')) {
		document.querySelector('.js-horoscope-reveal').innerHTML = 'Libra';
	}
	else if ((valueMonth === '10' && valueDay >= '23') || (valueMonth === '11' && valueDay <= '21')) {
		document.querySelector('.js-horoscope-reveal').innerHTML = 'Scorpio';
	}
	else if ((valueMonth === '11' && valueDay >= '22') || (valueMonth === '12' && valueDay <= '21')) {
		document.querySelector('.js-horoscope-reveal').innerHTML = 'Sagittarius';
	}
	else if ((valueMonth === '12' && valueDay >= '22') || (valueMonth === '1' && valueDay <= '19')) {
		document.querySelector('.js-horoscope-reveal').innerHTML = 'Capricorn';
	}
	else if ((valueMonth === '1' && valueDay >= '20') || (valueMonth === '2' && valueDay <= '18')) {
		document.querySelector('.js-horoscope-reveal').innerHTML = 'Aquarius';
	}
	else if ((valueMonth === '2' && valueDay >= '19') || (valueMonth === '3' && valueDay <= '20')) {
		document.querySelector('.js-horoscope-reveal').innerHTML = 'Piscis';
	}
}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', assignZodiacSign);