const personData = {
	fName: '',
	lName: '',
	email: '',
	phone: '',
	rate: '',
	month: '',
	price: ''
}

// NAVBAR BURGER

const burger = document.querySelector('.header__navbar-burger'),
		burgerMenuList = document.querySelector('.header__navbar-burger_menu');

burger.addEventListener('click', () => {
	burger.classList.toggle('active_burger');
	burgerMenuList.classList.toggle('active_burger_menu');
	closeModal();
	closeSuccessModal();
})

// Slider

const sliderWindow = document.querySelector('.yield-mw_slider-window'),
		sliderLine = document.querySelector('.yield-mw_slider-line'),
		sliderItem = document.querySelectorAll('.mw_slider-item'),
		sliderBtns = document.querySelectorAll('.btn-slider');


sliderBtns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		sliderItem.forEach((item) => {
			item.classList.remove('active-slide');
		})
		sliderItem[idx].classList.add('active-slide');
		sliderBtns.forEach(b => {
			b.classList.remove('active-slide-btn')
		})
		btn.classList.add('active-slide-btn')
	})
})

// SCROLL BTN

const anchors = document.querySelectorAll('a.scrl'),
		scrollTop = document.querySelector('.scrl-to-top');

anchors.forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		const href = this.getAttribute('href').substring(1);

		const scrollTarget = document.querySelector(`#${href}`);

		const headerOffset = 50;
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - headerOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		})

		if (burger.classList.contains('active_burger') && burgerMenuList.classList.contains('active_burger_menu')) {
			burger.classList.remove('active_burger');
			burgerMenuList.classList.remove('active_burger_menu')
		}
	})
})

scrollTop.addEventListener('click', (e) => {
	e.preventDefault();

	const bodyOffset = document.documentElement.offsetTop;

	window.scrollTo({
		top: bodyOffset,
		behavior: 'smooth'
	})
})

const w = document.documentElement.offsetHeight / 2;

window.addEventListener('scroll', () => {
	if (window.pageYOffset >= w) {
		scrollTop.classList.remove('hide')
	} else {
		scrollTop.classList.add('hide')
	}
})

// CARD PERSON

const cardPerson = document.querySelectorAll('.card__person');
const	btns = document.querySelectorAll('.card__btn');
const btnsClose = document.querySelectorAll('.card__btn_c');

btns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		const event = e.target.closest('.card__person');
		event.querySelector('.card__btn').disabled = true;
		event.classList.toggle('on')
	})
})

btnsClose.forEach(close => {
	close.addEventListener('click', (e) => {
		const event = e.target.closest('.card__person');
		event.querySelector('.card__btn').disabled = false;
		event.classList.remove('on')
	})
})

// RATES

const rates = document.querySelectorAll('.rate__title'),
		rateCard = document.querySelectorAll('.rate__card');

rates.forEach((rate, i) => {
	rate.addEventListener('click', () => {
		let cards = Array.from(rateCard).slice();
		cards.splice(i, 1);
		if (cards[0].classList.contains('active__rate') || cards[1].classList.contains('active__rate')) {
			activeRate(i);
		} else {
			rateCard[i].classList.add('active__rate');
		}
	})
})

const activeRate = (i = 0) => {
	rateCard[i].classList.toggle('active__rate');
}

activeRate()

// TIMER

const promoEndDay = document.querySelector('.promo_end_day'),
		promoEndMonth = document.querySelector('.promo_end_month'),
		days = document.querySelector('.days'),
		hours = document.querySelector('.hours'),
		minutes = document.querySelector('.minutes'),
		seconds = document.querySelector('.seconds');

let thisDay = new Date().getDate() + 2,
	 thisMonth = new Date().getMonth();

const deadline = `${new Date().getFullYear()}-${thisMonth + 1}-${thisDay}`;

const createPromoDate = (day, month) => {
	promoEndDay.textContent = day;
	switch (month) {
		case 0:
			promoEndMonth.textContent = ' января'
			break;
		case 1:
			promoEndMonth.textContent = ' февраля'
			break;
		case 2:
			promoEndMonth.textContent = ' марта'
			break;
		case 3:
			promoEndMonth.textContent = ' апреля'
			break;
		case 4:
			promoEndMonth.textContent = ' мая'
			break;
		case 5:
			promoEndMonth.textContent = ' июня'
			break;
		case 6:
			promoEndMonth.textContent = ' июля'
			break;
		case 7:
			promoEndMonth.textContent = ' августа'
			break;
		case 8:
			promoEndMonth.textContent = ' сентября'
			break;
		case 9:
			promoEndMonth.textContent = ' октября'
			break;
		case 10:
			promoEndMonth.textContent = ' ноября'
			break;
		case 11:
			promoEndMonth.textContent = ' декабря'
			break;
		default:
			break;
	}
}

createPromoDate(thisDay, thisMonth);

function getTimeRemaining(deadline) {
	const t = Date.parse(deadline) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor(t / (1000 * 60 * 60) % 24),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);

	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
};

function getZero(num) {
	if (num >= 0 && num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
};

function setClock(selector, deadline) {
	const time = document.querySelector(selector),
			days = time.querySelector('.days'),
			hours = time.querySelector('.hours'),
			minutes = time.querySelector('.minutes'),
			seconds = time.querySelector('.seconds'),
			timeId = setInterval(updateClock, 1000);

	updateClock();

	function updateClock() {
		const t = getTimeRemaining(deadline);

		days.innerHTML = getZero(t.days);
		hours.innerHTML = getZero(t.hours);
		minutes.innerHTML = getZero(t.minutes);
		seconds.innerHTML = getZero(t.seconds);

		if (t.total == 0) {
			clearInterval(timeId)
		}
	}
}

setClock('.timer__counter', deadline)

// MODAL 

const modalWrapper = document.querySelector('.modal__wrapper'),
		btnModalOpen = document.querySelectorAll('.btn_open_modal'),
		modalClose = document.querySelector('.modal__title i'),
		navbarBurgerMenu = document.querySelector('.header__navbar-burger_menu');

function openModal() {
	successModal.classList.add('hide-modal')
	modalWrapper.classList.remove('hide-modal');
	modalWrapper.classList.add('show-modal');
	document.body.style.overflow = 'hidden';
};

function closeModal() {
	modalWrapper.classList.remove('show-modal');
	modalWrapper.classList.add('hide-modal');
	document.body.style.overflow = '';
}

btnModalOpen.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		burger.classList.remove('active_burger');
		burgerMenuList.classList.remove('active_burger_menu');
		openModal();
	})
})

modalClose.addEventListener('click', closeModal)

modalWrapper.addEventListener('click', (e) => {
	if (modalWrapper.classList.contains('show-modal') && e.target.classList.contains('modal__wrapper')) {
		closeModal();
	}
})

window.addEventListener('keydown', (e) => {
	if (modalWrapper.classList.contains('show-modal') && e.code == 'Escape' || successModal.classList.contains('success__modal_wrapper') && e.code == 'Escape') {
		closeSuccessModal();
		closeModal();
	}
})

// MODAL RATE 

const modalRate = document.querySelectorAll('.rate-radio'),
		rateCardBtn = document.querySelectorAll('.rate__card_btn button');

rateCardBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		modalRate.forEach(check => {
			if (check.checked) {
				checkedRadio(check);
				console.log('hello')
			} else {
				console.log('faal')
				return;
			}
		})
	})
})

function checkedRadio(check) {
	const title = check.value,
			labelChildren = document.querySelector(`[for=${check.id}] > .rate__card_price`).children,
			checkMonth = labelChildren[0].textContent,
			checkActualPrice = labelChildren[1].textContent,
			checkDelPrice = labelChildren[2].textContent,
			modalTitle = document.querySelector('.modal__rate_title h3'),
			modalCheckRate = document.querySelector('.modal__rate_check');

	modalCheckRate.innerHTML = '';
	modalTitle.textContent = 'Вы выбрали тариф:';
	modalCheckRate.insertAdjacentHTML('afterbegin', `
	<div class="rate_check-title">
		<h3>${title}</h3>
	</div>
	<div class="rate_check_group">
		<div class="rate_check-time">
			<span>${checkMonth}</span>
		</div>
		<div class="rate_check_prices">
			<div class="rate_check-actual-price">
				<span>${checkActualPrice}</span>
				<span class='offprice'>Скидка 25%</span>
			</div>
			<div class="rate_check-del-price">
				<span>${checkDelPrice}</span>
			</div>
		</div>
	</div>
	`)
	openModal();
}

// MODAL SUCCES ORDER 

const modalSuccessBtn = document.querySelector('.modal_button button'),
		successModal = document.querySelector('.success__modal_wrapper'),
		successModalText = document.querySelector('.success__modal_text'),
		successModalClose = document.querySelector('.success__modal_title i'),
		inputs = document.querySelectorAll('.input_check'),
		checkValid = document.querySelectorAll('.form_check_valid');

inputs.forEach((input, i) => {
	input.addEventListener('change', () => {

		if (personData.hasOwnProperty(input.name)) {
			personData[`${input.name}`] = input.value
		}

		if (allFormValidation(input)) {
			checkValid[i].innerHTML = `<i class="fas fa-check"></i>`
		} else {
			checkValid[i].innerHTML = `<i class="fas fa-times"></i>`
		}
	})


	input.addEventListener('focus', () => {
		input.classList.add('active__field')
	})

	input.addEventListener('blur', () => {
		if (input.value == '') {
			input.classList.remove('active__field');
			checkValid[i].innerHTML = ''
		} else {
			return;
		}
	})
})

modalSuccessBtn.addEventListener('click', (e) => {
	e.preventDefault();
	let valid = 0;

	inputs.forEach(input => {
		if (input.validity.valid) {
			valid++;
		} else {
			return;
		}
	})
	modalRate.forEach(check => {
		if (valid == inputs.length && check.checked) {
			personData['price'] = check.dataset.price;
			personData['month'] = check.dataset.month;
			personData['rate'] = check.value;
			closeModal()
			openSuccesModal()
			successfulConsoleMessage(personData)
		} else {
			modalReset()
		}
	})
})

function modalReset() {
	const form = document.querySelector('#modal__form');
	checkValid.forEach(valid => {
		valid.innerHTML = '';
	})
	inputs.forEach(input => {
		input.classList.remove('active__field');
	})
	form.reset();
}

successModalClose.addEventListener('click', closeSuccessModal)

successModal.addEventListener('click', (e) => {
	if (successModal.classList.contains('show-modal') && e.target.classList.contains('success__modal_wrapper')) {
		closeSuccessModal();
	} 
})

function openSuccesModal() {
	successModal.classList.remove('hide-modal');
	successModal.classList.add('show-modal');
	document.body.style.overflow = 'hidden';
};

function closeSuccessModal() {
	successModal.classList.remove('show-modal');
	successModal.classList.add('hide-modal');
	document.body.style.overflow = '';
}

function validateEmail(email) {
	const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(String(email).toLowerCase());
}

function validatePhone(phone) {
	const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
	return regex.test(phone);
}

function validateWord(word) {
	const regex = /^([а-яё]+|[a-z]+)$/i;
	return regex.test(word);
}

function allFormValidation(val) {
	if (val.type == 'text' && validateWord(val.value)) {
		return true
	} else if (val.type == 'email' && validateEmail(val.value)) {
		return true;
	} else if (val.type == 'tel' && validatePhone(val.value)) {
		return true;
	} else {
		return false
	}
}

function successfulConsoleMessage(person_data) {
	console.log(`
			Информация о заказчике:
	Имя: ${person_data.fName},
	Фамилия: ${person_data.lName},
		Для связи:
	Телефон: ${person_data.phone},
	email: ${person_data.email},
		Выбранный тариф:
	Тариф: '${person_data.rate}',
	Подписка на: ${person_data.month} мес.,
	Цена: ${person_data.price} ₽

	Благодарим за заказ!
	`)
}





