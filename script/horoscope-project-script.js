const elementDaySelection = document.getElementById('daySelection');
const elementMonthSelection = document.getElementById('monthSelection');

function assignZodiacSign() {
	console.log('Day selection changed1');
	const valueMonth = elementMonthSelection.value;
	const valueDay = elementDaySelection.value;

	console.log('Month ', valueMonth);
	console.log('Day ', valueDay)

	if ((valueMonth === 'March' && valueDay >= 21) || 
    (valueMonth === 'April' && valueDay <= 19)) {
		document.querySelector('.js-horoscope-reveal').innerHTML = '♈ Aries';
	}
	else if ((valueMonth === 'April' && valueDay >= 20) || (valueMonth === 'May' && valueDay <= 20)) {
		document.querySelector('.js-horoscope-reveal').innerHTML = '♉ Taurus';
	}
	else if ((valueMonth === 'May' && valueDay >= 21) || (valueMonth === 'June' && valueDay <= 20)) {
		document.querySelector('.js-horoscope-reveal').innerHTML = '♊ Gemini';
	}
	else if ((valueMonth === 'June' && valueDay >= 21) || (valueMonth === 'July' && valueDay <= 22)) {
		document.querySelector('.js-horoscope-reveal').innerHTML = '♋ Cancer';
	}
	else if ((valueMonth === 'July' && valueDay >= 23) || (valueMonth === 'August' && valueDay <= 22)) {
		document.querySelector('.js-horoscope-reveal').innerHTML = '♌ Leo';
	}
	else if ((valueMonth === 'August' && valueDay >= 23) || (valueMonth === 'September' && valueDay <= 22)) {
		document.querySelector('.js-horoscope-reveal').innerHTML = '♍ Virgo';
	}
	else if ((valueMonth === 'September' && valueDay >= 23) || (valueMonth === 'October' && valueDay <= 22)) {
		document.querySelector('.js-horoscope-reveal').innerHTML = '♎ Libra';
	}
	else if ((valueMonth === 'October' && valueDay >= 23) || (valueMonth === 'November' && valueDay <= 21)) {
		document.querySelector('.js-horoscope-reveal').innerHTML = '♏ Scorpio';
	}
	else if ((valueMonth === 'November' && valueDay >= 22) || (valueMonth === 'December' && valueDay <= 21)) {
		document.querySelector('.js-horoscope-reveal').innerHTML = '♐ Sagittarius';
	}
	else if ((valueMonth === 'December' && valueDay >= 22) || (valueMonth === 'January' && valueDay <= 19)) {
		document.querySelector('.js-horoscope-reveal').innerHTML = '♑ Capricorn';
	}
	else if ((valueMonth === 'January' && valueDay >= 20) || (valueMonth === 'February' && valueDay <= 18)) {
		document.querySelector('.js-horoscope-reveal').innerHTML = '♒ Aquarius';
	}
	else if ((valueMonth === 'February' && valueDay >= 19) || (valueMonth === 'March' && valueDay <= 20)) {
		document.querySelector('.js-horoscope-reveal').innerHTML = '♓ Piscis';
	}

	const starSign = document.querySelector('.js-horoscope-reveal').innerHTML;
	
	let signDescription = '';

	if (starSign === '♈ Aries') {
		signDescription = 'Energetic and assertive, Aries are natural leaders known for their enthusiasm and determination.';
	}
	else if (starSign === '♉ Taurus') {
		signDescription = 'Reliable and practical, Taurus individuals are grounded and enjoy stability and comfort in life.'
	}
	else if (starSign === '♊ Gemini') {
		signDescription = 'Versatile and curious, Geminis are social butterflies who thrive on communication and intellectual stimulation.'
	}
	else if (starSign === '♋ Cancer') {
		signDescription = 'Nurturing and intuitive, Cancers are highly sensitive individuals who value emotional connections and security.'
	}
	else if (starSign === '♌ Leo') {
		signDescription = 'Confident and charismatic, Leos are natural-born leaders who enjoy being in the spotlight and have a generous spirit.'
	}
	else if (starSign === '♍ Virgo') {
		signDescription = 'Detail-oriented and analytical, Virgos are perfectionists who excel in organization and critical thinking.'
	}
	else if (starSign === '♎ Libra') {
		signDescription = 'Diplomatic and charming, Libras are sociable individuals who value harmony and fairness in their relationships.'
	}
	else if (starSign === '♏ Scorpio') {
		signDescription = 'Intense and passionate, Scorpios are fiercely loyal and known for their determination and emotional depth.'
	}
	else if (starSign === '♐ Sagittarius') {
		signDescription = 'Adventurous and optimistic, Sagittarians are free spirits who enjoy exploring new ideas and cultures.'
	}
	else if (starSign === '♑ Capricorn') {
		signDescription = 'Ambitious and disciplined, Capricorns are hardworking individuals who value tradition and strive for success.'
	}
	else if (starSign === '♒ Aquarius') {
		signDescription = 'Independent and unconventional, Aquarians are forward-thinking individuals who champion humanitarian causes.'
	}
	else if (starSign === '♓ Piscis') {
		signDescription = 'Imaginative and compassionate, Pisceans are intuitive souls who are deeply empathetic and creative.'
	}
	document.querySelectorAll('.js-horoscope-description').forEach(element => {element.innerHTML = signDescription;
	});
}

document.getElementById('resetButton').addEventListener('click', function() {
	assignZodiacSign();
});