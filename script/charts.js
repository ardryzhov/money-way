// CHARTs

// MONEY WAY
const ctxMW = document.querySelector('#money_way').getContext('2d');

ctxMW.canvas.parentNode.style.height = '250px';
ctxMW.canvas.parentNode.style.width = '250px';
ctxMW.canvas.parentNode.style.display = 'flex';
ctxMW.canvas.parentNode.style.justifyContent = 'start'


const myChartMW = new Chart(ctxMW, {
	type: 'pie',
	data: {
		labels: ['Информационные технологии', 'Финансовый сектор', 'Энергетика', 'Коммуникационные услуги','Здравоохранение', 'Промышленный сектор','Недвижимость', 'Нефть и газ', 'Сырьевой сектор'],
		datasets: [{
			label: 'Секторы портфеля',
			data: ['30', '18', '12', '9', '8', '7', '6', '5', '5'],
			backgroundColor: [
				'#4087F4',
				'#AB45BC',
				'#A09F1E',
				'#079F57',
				'#DC4334',
				'#00AEC1',
				'#007B6B',
				'#C4115B',
				'#F26392'
			],
			display: 'flex'
		}],
	},
	options: {
		plugins: {
			legend: {
				display: false,
			}
		},
	}
})



// S&P 500

const sp = document.querySelector('#SP').getContext('2d');

sp.canvas.parentNode.style.height = '200px';
sp.canvas.parentNode.style.width = '400px';

const dataSP = {
	labels: ["Ноя '20", "Дек '20", "Янв '21", "Фев '21", "Мар '21", "Апр '21", "Май '21", "Июн '21", "Июл '21", "Авг '21", "Сен '21", "Окт '21"],
	datasets: [{
		label: 'S&P 500 (+35.9%)',
		data: ['3510.45', '3663.56', '3773.86', '3901.82', '4019.87', '4181.17', '4202.04', '4319.94', '4412.52', '4254.09', '4357.04', '4613.67'],
		borderColor: 'rgb(0, 0, 0)'
	}]
}

const sAndP = new Chart(sp, {
	type: 'line',
	data: dataSP
})

// DJ

const DJ = document.querySelector('#DJ').getContext('2d');

DJ.canvas.parentNode.style.height = '200px';
DJ.canvas.parentNode.style.width = '400px';

const dataDJ = {
	labels: ["Ноя '20", "Дек '20", "Янв '21", "Фев '21", "Мар '21", "Апр '21", "Май '21", "Июн '21", "Июл '21", "Авг '21", "Сен '21", "Окт '21"],
	datasets: [{
		label: 'Dow Jones Industrial(+29.72%)',
		data: ['28390.18', '29823.92', '30606.48', '30253.01', '31535.51', '33153.21', '33874.85', '34575.31', '34633.53', '34838.16', '35312.53', '34326.46'],
		borderColor: 'rgb(0, 0, 0)'
	}]
}

const DowJones = new Chart(DJ, {
	type: 'line',
	data: dataDJ
})

// NASDAQ

const nasd = document.querySelector('#Nasd').getContext('2d');

nasd.canvas.parentNode.style.height = '200px';
nasd.canvas.parentNode.style.width = '400px';

const dataNasd = {
	labels: ["Ноя '20", "Дек '20", "Янв '21", "Фев '21", "Мар '21", "Апр '21", "Май '21", "Июн '21", "Июл '21", "Авг '21", "Сен '21", "Окт '21"],
	datasets: [{
		label: 'NASDAQ(+37.53%)',
		data: ['11890.93', '12198.74', '12899.42', '13635.99', '13533.05', '13377.54', '13914.76', '13379.05', '14174.14', '14733.24', '14860.18', '15374.33'],
		borderColor: 'rgb(0, 0, 0)'
	}]
}

const nasdaq = new Chart(nasd, {
	type: 'line',
	data: dataNasd
})

// Money Way

const moneyWay = document.querySelector('#moneyWay').getContext('2d');

moneyWay.canvas.parentNode.style.height = '200px';
moneyWay.canvas.parentNode.style.width = '400px';

const dataMW = {
	labels: ["Ноя '20", "Дек '20", "Янв '21", "Фев '21", "Мар '21", "Апр '21", "Май '21", "Июн '21", "Июл '21", "Авг '21", "Сен '21", "Окт '21"],
	datasets: [{
		label: 'Money Way(+56.32%)',
		data: ['735.1', '826.92', '854.13', '922.88', '931.55', '938.08', '989.42', '1020.35', '1067.45', '1097.89', '1108.46', '1158.8'],
		borderColor: 'rgb(0, 0, 0)'
	}]
}

const monWay = new Chart(moneyWay, {
	type: 'line',
	data: dataMW
})