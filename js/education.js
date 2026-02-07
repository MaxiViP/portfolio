const educationData = [
	{
		id: 1,
		title: 'Пензенский государственный политехнический колледж',
		type: 'Среднее профессиональное образование',
		period: '2005 – 2010',
		city: 'г. Пенза',
		specialty: 'Программное обеспечение вычислительной техники и автоматизированных систем',
		icon: '🎓',
		description: 'Фундаментальное образование в области программирования и компьютерных систем.',
	},
	{
		id: 2,
		title: 'Пензенский государственный технологический университет',
		type: 'Высшее образование',
		period: '2008 – 2013',
		city: 'г. Пенза',
		specialty: 'Сервис (Факультет: Специалист по сервису)',
		icon: '🏛️',
		description: 'Дополнительное высшее образование в сфере сервиса и управления.',
	},
	{
		id: 3,
		title: 'SkillBox',
		type: 'Профессиональные курсы',
		period: '2023 – 2025',
		specialty: 'Frontend-разработчик',
		icon: '💻',
		description: 'Современный курс по фронтенд-разработке с изучением Vue 3, TypeScript и лучших практик.',
		diploma: 'img/diploma.jpg',
	},
]

const educationContainer = document.getElementById('education')

educationData.forEach(ed => {
	const el = document.createElement('div')
	el.className = 'education-item'
	el.setAttribute('data-education-id', ed.id)

	let icon = ed.icon || '📚'

	el.innerHTML = `
        <div class="education-item-content">
            <div class="education-icon" aria-hidden="true">
                ${icon}
            </div>
            
            <div class="education-details">
                <div class="education-header-row">
                    <h3 class="education-title">${ed.title}</h3>
                    <span class="education-type">${ed.type}</span>
                </div>
                
                <div class="education-meta">
                    <div class="education-meta-item">
                        <span class="education-meta-icon" aria-hidden="true">📅</span>
                        <span>${ed.period}</span>
                    </div>
                    ${
											ed.city
												? `
                    <div class="education-meta-item">
                        <span class="education-meta-icon" aria-hidden="true">📍</span>
                        <span>${ed.city}</span>
                    </div>
                    `
												: ''
										}
                </div>
                
                <p class="education-specialty">${ed.specialty}</p>
                
                ${
									ed.description
										? `
                <div class="education-description">
                    ${ed.description}
                </div>
                `
										: ''
								}
                
                ${
									ed.diploma
										? `
                <div class="education-diploma-container">
                   
                    <img src="${ed.diploma}" 
                         alt="Диплом ${ed.title}" 
                         class="education-diploma-thumb"
                         data-diploma="${ed.diploma}">
                </div>
                `
										: ''
								}
            </div>
        </div>
    `

	educationContainer.appendChild(el)
})

const diplomaModal = document.getElementById('diploma-modal')
const modalImg = document.getElementById('diploma-img')
const modalClose = diplomaModal.querySelector('.modal-close')

document.addEventListener('click', function (e) {

	if (e.target.classList.contains('education-diploma-thumb')) {
		const diplomaSrc = e.target.getAttribute('data-diploma')
		if (diplomaSrc) {
			openDiplomaModal(diplomaSrc, e.target.alt)
		}
	}

	if (e.target.classList.contains('education-diploma-label') || e.target.closest('.education-diploma-label')) {
		e.preventDefault()
		const link = e.target.classList.contains('education-diploma-label')
			? e.target
			: e.target.closest('.education-diploma-label')
		const diplomaSrc = link.getAttribute('data-diploma')
		if (diplomaSrc) {
			const title = link.closest('.education-item').querySelector('.education-title').textContent
			openDiplomaModal(diplomaSrc, `Диплом ${title}`)
		}
	}
})

function openDiplomaModal(src, alt) {
	modalImg.src = src
	modalImg.alt = alt
	diplomaModal.classList.add('show')
	diplomaModal.setAttribute('aria-hidden', 'false')
	document.body.style.overflow = 'hidden'

	setTimeout(() => modalClose.focus(), 100)
}

modalClose.addEventListener('click', closeDiplomaModal)

diplomaModal.addEventListener('click', function (e) {
	if (e.target === diplomaModal || e.target.classList.contains('modal-overlay')) {
		closeDiplomaModal()
	}
})

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && diplomaModal.classList.contains('show')) {
		closeDiplomaModal()
	}
})

function closeDiplomaModal() {
	diplomaModal.classList.remove('show')
	diplomaModal.setAttribute('aria-hidden', 'true')
	modalImg.src = ''
	modalImg.alt = ''
	document.body.style.overflow = ''
}

document.addEventListener('DOMContentLoaded', function () {
	const educationItems = document.querySelectorAll('.education-item')

	educationItems.forEach((item, index) => {
		item.style.animationDelay = `${(index + 1) * 0.1}s`
	})
})
