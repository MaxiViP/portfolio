// projects.js

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
		github: 'https://gitlab.skillbox.ru/maksim_poliakov_3/course_node/-/tree/master/99_diploma?ref_type=heads',
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

// Функция для создания карточек проектов
function createProjectCards() {
	projects.forEach((p, index) => {
		const el = document.createElement('div')
		el.className = 'project'
		el.setAttribute('data-index', index)
		el.setAttribute('role', 'article')
		el.setAttribute('aria-label', `Проект: ${p.title}`)

		// Создаем ссылки
		let linksHTML = ''

		if (p.github) {
			linksHTML += `
				<a href="${p.github}" target="_blank" rel="noopener noreferrer" 
				   class="project-link github" 
				   aria-label="Посмотреть код на GitHub">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
						<path d="M9 18c-4.51 2-5-2-7-2"/>
					</svg>
					GitHub
				</a>
			`
		}

		if (p.video) {
			linksHTML += `
				<a href="${p.video}" target="_blank" rel="noopener noreferrer" 
				   class="project-link video" 
				   aria-label="Смотреть видео демонстрацию">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="2" y="6" width="20" height="12" rx="2" ry="2"/>
						<path d="m10 9 5 3-5 3Z"/>
					</svg>
					Видео
				</a>
			`
		}

		if (p.link) {
			linksHTML += `
				<a href="${p.link}" target="_blank" rel="noopener noreferrer" 
				   class="project-link site" 
				   aria-label="Перейти на сайт проекта">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<circle cx="12" cy="12" r="10"/>
						<line x1="2" y1="12" x2="22" y2="12"/>
						<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
					</svg>
					Сайт
				</a>
			`
		}

		// Создаем теги технологий
		const techTags = p.tech
			.map(tech => `<span class="project__tag" aria-label="Технология: ${tech}">${tech}</span>`)
			.join('')

		el.innerHTML = `
			<img src="${p.image}" alt="${p.title}" 
				 class="project__image" 
				 loading="lazy"
				 data-src="${p.image}">
			
			<div class="project__content">
				<h3 class="project__title">${p.title}</h3>
				<p class="project__description">${p.description}</p>
				
				${
					linksHTML
						? `
				<div class="project__links">
					${linksHTML}
				</div>
				`
						: ''
				}
				
				${
					techTags
						? `
				<div class="project__meta">
					${techTags}
				</div>
				`
						: ''
				}
			</div>
		`

		projectsContainer.appendChild(el)
	})
}

// Инициализация ленивой загрузки изображений
function initLazyLoading() {
	const lazyImages = document.querySelectorAll('.project__image[data-src]')

	if ('IntersectionObserver' in window) {
		const imageObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const img = entry.target
						img.src = img.dataset.src
						img.classList.add('loaded')
						img.removeAttribute('data-src')
						observer.unobserve(img)
					}
				})
			},
			{
				rootMargin: '100px 0px',
				threshold: 0.01,
			},
		)

		lazyImages.forEach(img => imageObserver.observe(img))
	} else {
		// Fallback для старых браузеров
		lazyImages.forEach(img => {
			img.src = img.dataset.src
			img.classList.add('loaded')
		})
	}
}

// Анимация появления карточек
function animateProjects() {
	const projects = document.querySelectorAll('.project')

	projects.forEach((project, index) => {
		project.style.setProperty('--item-index', index)

		// Добавляем атрибуты доступности
		project.setAttribute('tabindex', '0')

		// Обработка клавиатуры
		project.addEventListener('keydown', e => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault()
				const firstLink = project.querySelector('a')
				if (firstLink) {
					firstLink.focus()
					firstLink.click()
				}
			}
		})
	})
}

// Touch оптимизация
function initTouchOptimization() {
	if ('ontouchstart' in window) {
		document.body.classList.add('touch-device')

		const projects = document.querySelectorAll('.project')

		projects.forEach(project => {
			// Убираем hover-эффекты для touch
			project.style.cursor = 'pointer'

			// Touch обработчики
			let touchStartTime

			project.addEventListener(
				'touchstart',
				() => {
					touchStartTime = Date.now()
					project.classList.add('touching')
				},
				{ passive: true },
			)

			project.addEventListener('touchend', () => {
				project.classList.remove('touching')

				// Если касание было коротким (тап), добавляем активное состояние
				if (Date.now() - touchStartTime < 300) {
					project.classList.add('active')
					setTimeout(() => project.classList.remove('active'), 300)
				}
			})
		})
	}
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
	createProjectCards()
	initLazyLoading()
	animateProjects()
	initTouchOptimization()
})

// Обработчик изменения ориентации
window.addEventListener('orientationchange', () => {
	setTimeout(animateProjects, 100)
})
