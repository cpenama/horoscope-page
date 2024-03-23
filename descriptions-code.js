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