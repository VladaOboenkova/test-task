const upButton = document.querySelector('.up');
const buyButtons = document.querySelectorAll('.card-button');
const modal = document.querySelector('.modal');
const form = document.querySelector('.modal-form');
const closeButton = document.querySelector('.close-button');
const dates = document.querySelectorAll('.card-time');
const themeSwitcher = document.querySelector('.theme-switcher');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const sectionHeaders = document.querySelectorAll('.section-header');
const listItems = document.querySelectorAll('li a');
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', function(){
	let windowHeight = document.documentElement.clientHeight;
	(window.scrollY > windowHeight) ? upButton.classList.add('up-show') : upButton.classList.remove('up-show');
})

upButton.addEventListener('click', function(){
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})

themeSwitcher.addEventListener('click', function(){
	if (themeSwitcher.textContent === "Тёмная тема") {
		themeSwitcher.textContent = "Светлая тема";
		header.classList.add('header-dark');
		main.classList.add('main-dark');
		footer.classList.add('footer-dark');
		for (let header of sectionHeaders){
			header.classList.add('section-header-dark');
		}
		for (let listItem of listItems){
			listItem.classList.add('list-dark');
		}
		for (let card of cards){
			card.classList.add('card-dark');
		}
		for (let cardButton of buyButtons){
			cardButton.classList.add('card-button-dark');
		}
		upButton.classList.add('up-dark');
		themeSwitcher.classList.add('theme-switcher-dark');
	} else {
		themeSwitcher.textContent = "Тёмная тема";
		header.classList.remove('header-dark');
		main.classList.remove('main-dark');
		footer.classList.remove('footer-dark');
		for (let header of sectionHeaders){
			header.classList.remove('section-header-dark');
		}
		for (let listItem of listItems){
			listItem.classList.remove('list-dark');
		}
		for (let card of cards){
			card.classList.remove('card-dark');
		}
		for (let cardButton of buyButtons){
			cardButton.classList.remove('card-button-dark');
		}
		upButton.classList.remove('up-dark');
		themeSwitcher.classList.remove('theme-switcher-dark');
	}
})

for (let buyButton of buyButtons){
	buyButton.addEventListener('click', function (){
		modal.classList.add('modal-show');
	})
}

form.addEventListener('submit', function(event){
	const form = event.currentTarget;
	const isValid = form.checkValidity();
	if (!isValid){
		event.preventDefault();
	}
	alert('Спасибо за покупку!');
})

closeButton.addEventListener('click', function(){
	modal.classList.remove('modal-show');
})

function getMonthName(month) {
	const months = ['Января', 'Февраля', 'Марта', 
						 'Апреля', 'Мая', 'Июня', 'Июля',
						 'Августа', 'Сентября', 'Октября', 
						 'Ноября', 'Декабря']
	return months[month];
}

function getWeekNumber(day){
	let weekNumber = 0;
	if (day > 0){
		if (day <= 7){
			weekNumber = 1;
		} else if (day <= 14) {
			weekNumber = 2;
		} else if (day <= 21){
			weekNumber = 3;
		} else if (day <= 28){
			weekNumber = 4;
		} else {
			weekNumber = 5;
		}
	}
	return weekNumber;
}

function getDayName(day){
	const dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	return dayNames[day];
}

function getDayInfo(dates){
	for (let date of dates){
		const cardDate = new Date(date.getAttribute('datetime'));
		date.textContent = 
			`${getDayName(cardDate.getDay())}, ${getWeekNumber(cardDate.getDate())} неделя 
			${getMonthName(cardDate.getMonth())} ${cardDate.getFullYear()} года`;
	}
}

getDayInfo(dates);

