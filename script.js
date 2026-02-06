// Навыки (прогресс-бары)
const skills = [
	{ name: 'Vue.js / Vue 3', level: 92 },
	{ name: 'TypeScript', level: 85 },
	{ name: 'JavaScript', level: 95 },
	{ name: 'HTML / CSS', level: 94 },
	{ name: 'Nuxt', level: 78 },
	{ name: 'Pinia / Vuex', level: 88 },
]

const skillsContainer = document.getElementById('skills')

skills.forEach(skill => {
	const el = document.createElement('div')
	el.className = 'skill'
	el.innerHTML = `
    <strong>${skill.name}</strong>
    <div class="skill-bar"><span style="width:${skill.level}%"></span></div>
  `
	skillsContainer.appendChild(el)
})

// Проекты с ссылками на репозитории и видеообзорами
const projects = [
	{
		title: 'VK Marusya CinemaGuide',
		description:
			'SPA-приложение на Vue 3 для поиска фильмов: авторизация, избранное, маршрутизация, анимации интерфейса и адаптивная вёрстка.',
		image: 'img/cinema.png',
		github: 'https://gitlab.skillbox.ru/maksim_poliakov_3/final_project_vue.js',
		video: 'https://www.loom.com/share/3635104eb60b445e800305ced2ef7ef0',
		link: null,
		tech: ['Vue 3', 'Composition API', 'Vue Router', 'Pinia', 'Vite', 'TypeScript'],
	},
	{
		title: 'Streaming Service',
		description:
			'Музыкальный стриминг-сервис на TypeScript с модульной архитектурой: аудиоплеер, управление треками и плейлистами, поиск, лайки, Web Audio API.',
		image: 'img/music.png',
		github: 'https://gitlab.skillbox.ru/maksim_poliakov_3/streaming_service',
		video: 'https://www.loom.com/share/98750bb37d79412baf75aeb2a1149925?t=129',
		link: null,
		tech: ['TypeScript', 'Webpack', 'Web Audio API', 'DOM API', 'SCSS', 'ESLint'],
	},
	{
		title: 'SkillNotes',
		description:
			'Full-stack приложение для заметок с Markdown: SPA-фронтенд, аутентификация (email и Google OAuth), поиск, фильтрация и экспорт в PDF.',
		image: 'img/SkillNotes.png',
		github: 'https://github.com/MaxiViP/che-notes-fullstack',
		video: null,
		link: null,
		tech: ['Svelte', 'SPA Router', 'Node.js', 'Express', 'MongoDB', 'Markdown', 'OAuth 2.0'],
	},
	{
		title: 'CRM System',
		description:
			'CRM-система для управления клиентами: CRUD-операции, фильтрация, статистика и локальное хранилище. Реализовано на чистом TypeScript.',
		image: 'img/CRM.png',
		github: 'https://gitlab.skillbox.ru/maksim_poliakov_3/JS/-/tree/JavaScript?ref_type=heads',
		video: 'https://www.loom.com/share/9a36d851baba40afab932e0008439b1e',
		link: null,
		tech: ['TypeScript', 'LocalStorage API', 'Chart.js', 'Tailwind CSS', 'Vite'],
	},
	{
		title: 'Shopping List',
		description:
			'Приложение для управления списком покупок: добавление, удаление, отметка выполненного, хранение данных в LocalStorage, адаптивный дизайн.',
		image: 'img/logo-shoppinglist.png',
		github: 'https://github.com/MaxiViP/shopping-list',
		video: null,
		link: 'https://maxivip-shopping-list-720a.twc1.net/products',
		tech: ['JavaScript', 'HTML', 'CSS', 'LocalStorage', 'Responsive Design'],
	},
	{
		title: 'Premium Cigars',
		description:
			'Учебный проект интернет-магазина элитных сигар: каталог товаров, фильтры, поиск, корзина, аутентификация, SPA-интерфейс.',
		image: 'img/logo-premiumcigars.png',
		github: 'https://github.com/MaxiViP/Premium-Cigars',
		video: null,
		link: 'https://maxivip-premium-cigars-fc19.twc1.net/',
		tech: ['Vue 3', 'TypeScript', 'Pinia', 'Vite', 'SCSS', 'SPA'],
	},
	{
		title: 'Chatbot',
		description:
			'Интерактивный чат‑бот с обработкой команд и диалогами — реализация логики и API взаимодействий (Node.js/JS).',
		image: 'img/chatbot.png',
		github: 'https://github.com/MaxiViP/chatbot',
		video: null,
		link: null,
		tech: ['JavaScript', 'Node.js', 'API'],
	},
]

const projectsContainer = document.getElementById('projects')

projects.forEach(p => {
	const el = document.createElement('div')
	el.className = 'project'

	// Генерируем ссылки GitHub / Видео / Сайт
	let linksHTML = `
		<a
			href="${p.github}"
			target="_blank"
			rel="noopener noreferrer"
			class="project-link github"
			aria-label="Репозиторий GitHub"
		>
			GitHub/GitLab
		</a>
	`

	if (p.video) {
		linksHTML += `
		<a
			href="${p.video}"
			target="_blank"
			rel="noopener noreferrer"
			class="project-link video"
			aria-label="Видеообзор проекта"
		>
			🎥
		</a>
		`
	}

	if (p.link) {
		linksHTML += `
		<a
			href="${p.link}"
			target="_blank"
			rel="noopener noreferrer"
			class="project-link site"
			aria-label="Сайт проекта"
		>
			🌐
		</a>
		`
	}

	el.innerHTML = `
		<div class="project-media">
			<img src="${p.image}" alt="${p.title}" loading="lazy">
			<div class="project-links">
				${linksHTML}
			</div>
		</div>

		<div class="project-content">
			<h4>${p.title}</h4>
			<p>${p.description}</p>
		</div>
	`

	projectsContainer.appendChild(el)
})

// Достижения
const awardsData = [
	{
		title: 'Frontend-разработчик PRO',
		description:
			'Полный курс Skillbox 2025. Vue 3, Composition API, Pinia, TypeScript, Nuxt, SSR, тестирование, CI/CD, оптимизация.',
		image: 'assets/awards/skillbox-pro.jpg',
	},
	{
		title: 'VK Marusya CinemaGuide',
		description: 'Полноценное SPA на Vue 3: поиск, авторизация, избранное, современный UI/UX, анимации.',
		image: 'assets/awards/vue.jpg',
	},
	{
		title: 'Play_now — стриминг музыки',
		description: 'TypeScript + Vue: плеер, плейлисты, авторизация, интеграция API, адаптивный дизайн.',
		image: 'assets/awards/music.jpg',
	},
	{
		title: 'Che-notes Markdown',
		description: 'Full-stack: Node.js + Vue. Заметки в Markdown, поиск, фильтры, PDF-экспорт, OAuth.',
		image: 'assets/awards/notes.jpg',
	},
	{
		title: '10+ лет во frontend',
		description:
			'Коммерческий опыт с 2010. Фриланс, студии, бизнес-заказчики. Переход на современный стек (Vue 3, TS).',
		image: 'assets/awards/10years.jpg',
	},
]

const awardsContainer = document.getElementById('awards')

awardsData.forEach(a => {
	const el = document.createElement('div')
	el.className = 'award'
	el.style.backgroundImage = `url(${a.image})`
	el.dataset.title = a.title

	const tip = document.createElement('div')
	tip.className = 'tooltip'
	tip.textContent = a.description

	el.appendChild(tip)
	awardsContainer.appendChild(el)
})

// Карусель достижений
const wrapper = document.querySelector('.awards-wrapper')
const prevBtn = document.querySelector('.carousel__btn--prev')
const nextBtn = document.querySelector('.carousel__btn--next')

if (prevBtn && nextBtn && wrapper) {
	prevBtn.addEventListener('click', () => {
		wrapper.scrollBy({ left: -260, behavior: 'smooth' })
	})
	nextBtn.addEventListener('click', () => {
		wrapper.scrollBy({ left: 260, behavior: 'smooth' })
	})
}

// Образование и курсы
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

	// Основной контент
	el.innerHTML = `
    <h4 class="education-title">${ed.title}</h4>
    <p class="education-type">${ed.type}</p>
    ${ed.city ? `<p class="education-city">${ed.city}</p>` : ''}
    <p class="education-period">${ed.period}</p>
    <p class="education-specialty">${ed.specialty}</p>
  `

	// Если есть диплом, добавляем миниатюру
	if (ed.diploma) {
		const thumb = document.createElement('img')
		thumb.src = ed.diploma
		thumb.alt = `Диплом ${ed.title}`
		thumb.className = 'education-diploma-thumb'
		thumb.style.width = '120px'
		thumb.style.cursor = 'pointer'
		thumb.style.marginTop = '0.5rem'

		el.appendChild(thumb)

		// Открытие модалки при клике
		thumb.addEventListener('click', () => {
			const modal = document.getElementById('diploma-modal')
			const modalImg = document.getElementById('diploma-img')
			modal.classList.add('show')
			modalImg.src = ed.diploma
		})
	}

	educationContainer.appendChild(el)
})


const diplomaModal = document.getElementById('diploma-modal')
const diplomaClose = diplomaModal.querySelector('.modal-close')

// Закрытие по кнопке
diplomaClose.addEventListener('click', () => {
	diplomaModal.classList.remove('show')
	document.getElementById('diploma-img').src = ''
})

// Закрытие по клику на фон
diplomaModal.addEventListener('click', e => {
	if (e.target === diplomaModal) {
		diplomaModal.classList.remove('show')
		document.getElementById('diploma-img').src = ''
	}
})
