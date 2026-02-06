// education.js

const educationData = [
	{
		title: 'Пензенский государственный политехнический колледж',
		type: 'Федеральное государственное образовательное учреждение среднего профессионального образования',
		period: '2005 – 2010',
		city: 'г. Пенза',
		specialty: 'Программное обеспечение вычислительной техники и автоматизированных систем',
	},
	{
		title: 'Пензенский государственный технологический университет',
		type: 'Федеральное государственное бюджетное образовательное учреждение высшего профессионального образования',
		period: '2008 – 2013',
		city: 'г. Пенза',
		specialty: 'Сервис (Факультет: Специалист по сервису)',
	},
	{
		title: 'SkillBox',
		type: 'Курсы',
		period: '2023 – 2025',
		specialty: 'Frontend-разработчик',
		diploma: 'img/diploma.jpg',
	},
]

const educationContainer = document.getElementById('education')

educationData.forEach(ed => {
	const el = document.createElement('div')
	el.className = 'education-item'

	el.innerHTML = `
    <h4 class="education-title">${ed.title}</h4>
    <p class="education-type">${ed.type}</p>
    ${ed.city ? `<p class="education-city">${ed.city}</p>` : ''}
    <p class="education-period">${ed.period}</p>
    <p class="education-specialty">${ed.specialty}</p>
  `

	if (ed.diploma) {
		const thumb = document.createElement('img')
		thumb.src = ed.diploma
		thumb.alt = `Диплом ${ed.title}`
		thumb.className = 'education-diploma-thumb'
		thumb.style.width = '120px'
		thumb.style.cursor = 'pointer'
		thumb.style.marginTop = '0.5rem'
		el.appendChild(thumb)

		thumb.addEventListener('click', () => {
			const modal = document.getElementById('diploma-modal')
			const modalImg = document.getElementById('diploma-img')
			modal.classList.add('show')
			modalImg.src = ed.diploma
		})
	}

	educationContainer.appendChild(el)
})

// Модалка диплома
const diplomaModal = document.getElementById('diploma-modal')
const diplomaClose = diplomaModal.querySelector('.modal-close')

diplomaClose.addEventListener('click', () => {
	diplomaModal.classList.remove('show')
	document.getElementById('diploma-img').src = ''
})

diplomaModal.addEventListener('click', e => {
	if (e.target === diplomaModal) {
		diplomaModal.classList.remove('show')
		document.getElementById('diploma-img').src = ''
	}
})
