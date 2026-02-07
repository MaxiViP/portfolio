const awardsData = [
	{
		title: 'Open Source Contributions',
		description:
			'Активное участие в нескольких open-source проектах на GitHub: исправление багов, добавление функций, улучшение документации и тестов.',
		backgroundUrl: 'img/awards/opensource.jpg',
	},
	{
		title: 'Инновационные проекты',
		description:
			'Создание прототипов и экспериментов: Web Audio визуализатор, интерактивные SPA, VR/AR интерфейсы, нестандартные UI-решения.',
		backgroundUrl: 'img/awards/innovation.jpg',
	},
	{
		title: 'Технические мастерства',
		description:
			'Освоены современные инструменты и практики: TypeScript, Vue 3, Pinia, Nuxt, Webpack, тестирование, CI/CD, WebGL и оптимизация производительности.',
		backgroundUrl: 'img/awards/skills.jpg',
	},
	{
		title: 'Адаптивная и кроссбраузерная верстка',
		description:
			'Созданы несколько сайтов с адаптивным дизайном, кроссбраузерной поддержкой и оптимизацией под мобильные устройства.',
		backgroundUrl: 'img/awards/responsive.jpg',
	},
	{
		title: 'Оптимизация производительности',
		description:
			'Успешно оптимизировал загрузку веб-приложений: lazy-loading, code-splitting, уменьшение размера bundle и ускорение рендеринга.',
		backgroundUrl: 'img/awards/performance.jpg',
	},
	{
		title: 'UI/UX Дизайн и Анимации',
		description:
			'Разработка интуитивного интерфейса с микровзаимодействиями, плавными анимациями и современными UX-паттернами для веб-приложений.',
		backgroundUrl: 'img/awards/uiux.jpg',
	},
	{
		title: 'Реализация сложной логики',
		description:
			'Проекты с управлением состоянием, динамическими данными и сложными компонентами: плееры, CRM, чаты, интеграции с API.',
		backgroundUrl: 'img/awards/logic.jpg',
	},
	{
		title: 'Тестирование и качество кода',
		description:
			'Покрытие приложений unit-тестами и e2e, настройка CI/CD для проверки кода, обеспечение стабильной работы проектов.',
		backgroundUrl: 'img/awards/testing.jpg',
	},
	{
		title: 'Визуальные данные и графики',
		description:
			'Создание интерактивной визуализации данных с Chart.js, D3.js и другими библиотеками для аналитических панелей и дашбордов.',
		backgroundUrl: 'img/awards/charts.jpg',
	},
	{
		title: 'Полноценные SPA-приложения',
		description:
			'Разработка сложных одностраничных приложений с маршрутизацией, авторизацией, интеграцией с API и продуманной архитектурой.',
		backgroundUrl: 'img/awards/spa.jpg',
	},
]
const awardsContainer = document.getElementById('awards')
const wrapper = document.getElementById('awards-wrapper')
const toggleBtn = document.getElementById('toggle-view')
const prevBtn = document.querySelector('.carousel__btn--prev')
const nextBtn = document.querySelector('.carousel__btn--next')
const touchHint = document.getElementById('touch-hint')

let isDragging = false
let startX
let scrollLeft

function createAwardCards() {
	awardsContainer.innerHTML = ''

	awardsData.forEach(a => {
		const el = document.createElement('div')
		el.className = 'award-item'
		el.setAttribute('role', 'listitem')
		el.setAttribute('aria-label', a.title)
		el.style.backgroundImage = `url(${a.backgroundUrl})`

		const content = document.createElement('div')
		content.className = 'award-item-content'

		const title = document.createElement('strong')
		title.textContent = a.title

		const desc = document.createElement('span')
		desc.textContent = a.description

		content.append(title, desc)
		el.appendChild(content)
		awardsContainer.appendChild(el)
	})
}

function setupTouchScrolling() {
	wrapper.addEventListener('mousedown', e => {
		if (window.innerWidth <= 768 && wrapper.classList.contains('horizontal')) {
			isDragging = true
			startX = e.pageX - wrapper.offsetLeft
			scrollLeft = wrapper.scrollLeft
			wrapper.style.cursor = 'grabbing'
			wrapper.style.userSelect = 'none'
		}
	})

	wrapper.addEventListener('mouseleave', () => {
		isDragging = false
		wrapper.style.cursor = 'grab'
	})

	wrapper.addEventListener('mouseup', () => {
		isDragging = false
		wrapper.style.cursor = 'grab'
		wrapper.style.userSelect = 'auto'
	})

	wrapper.addEventListener('mousemove', e => {
		if (!isDragging) return
		e.preventDefault()
		const x = e.pageX - wrapper.offsetLeft
		const walk = (x - startX) * 1.5
		wrapper.scrollLeft = scrollLeft - walk
	})

	wrapper.addEventListener(
		'touchstart',
		e => {
			if (window.innerWidth <= 768 && wrapper.classList.contains('horizontal')) {
				isDragging = true
				startX = e.touches[0].pageX - wrapper.offsetLeft
				scrollLeft = wrapper.scrollLeft
			}
		},
		{ passive: true },
	)

	wrapper.addEventListener('touchend', () => {
		isDragging = false
	})

	wrapper.addEventListener(
		'touchmove',
		e => {
			if (!isDragging) return
			e.preventDefault()
			const x = e.touches[0].pageX - wrapper.offsetLeft
			const walk = (x - startX) * 1.5
			wrapper.scrollLeft = scrollLeft - walk
		},
		{ passive: false },
	)
}

function toggleViewMode() {
	const isVertical = wrapper.classList.contains('vertical')

	if (isVertical) {
		wrapper.classList.remove('vertical')
		wrapper.classList.add('horizontal')
		toggleBtn.textContent = 'Вертикально'
		toggleBtn.setAttribute('aria-label', 'Переключить на вертикальный вид')

		if (touchHint) touchHint.classList.remove('hidden')

		wrapper.style.overflowX = 'auto'
		wrapper.style.overflowY = 'hidden'

		if (prevBtn && nextBtn && window.innerWidth >= 1024) {
			prevBtn.style.display = 'flex'
			nextBtn.style.display = 'flex'
		}
	} else {
		wrapper.classList.remove('horizontal')
		wrapper.classList.add('vertical')
		toggleBtn.textContent = 'Горизонтально'
		toggleBtn.setAttribute('aria-label', 'Переключить на горизонтальный вид')

		if (touchHint) touchHint.classList.add('hidden')

		wrapper.style.overflowX = 'hidden'
		wrapper.style.overflowY = 'auto'

		if (prevBtn && nextBtn) {
			prevBtn.style.display = 'none'
			nextBtn.style.display = 'none'
		}

		wrapper.scrollTop = 0
	}
}

function setupCarousel() {
	if (prevBtn && nextBtn && wrapper) {

		prevBtn.addEventListener('click', () => {
			wrapper.scrollBy({
				left: -300,
				behavior: 'smooth',
			})
		})

		nextBtn.addEventListener('click', () => {
			wrapper.scrollBy({
				left: 300,
				behavior: 'smooth',
			})
		})

		if (window.innerWidth >= 1024) {
			wrapper.addEventListener('scroll', () => {
				const scrollLeft = wrapper.scrollLeft
				const scrollWidth = wrapper.scrollWidth
				const clientWidth = wrapper.clientWidth

				if (scrollWidth > clientWidth) {
					prevBtn.style.opacity = scrollLeft > 0 ? '1' : '0.5'
					prevBtn.style.cursor = scrollLeft > 0 ? 'pointer' : 'not-allowed'

					nextBtn.style.opacity = scrollLeft < scrollWidth - clientWidth - 10 ? '1' : '0.5'
					nextBtn.style.cursor = scrollLeft < scrollWidth - clientWidth - 10 ? 'pointer' : 'not-allowed'
				} else {
					prevBtn.style.opacity = '0.5'
					nextBtn.style.opacity = '0.5'
					prevBtn.style.cursor = 'not-allowed'
					nextBtn.style.cursor = 'not-allowed'
				}
			})
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {

	createAwardCards()

	const touchHint = document.getElementById('touch-hint')

	if (toggleBtn) {
		toggleBtn.addEventListener('click', toggleViewMode)
		if ('ontouchstart' in window) toggleBtn.style.minHeight = '44px'
	}

	setupTouchScrolling()
	setupCarousel()

	const isInitiallyVertical = wrapper.classList.contains('vertical')
	if (isInitiallyVertical) {
		toggleBtn.textContent = 'Горизонтально'
		toggleBtn.setAttribute('aria-label', 'Переключить на горизонтальный вид')
		if (prevBtn && nextBtn) {
			prevBtn.style.display = 'none'
			nextBtn.style.display = 'none'
		}
		if (touchHint) touchHint.classList.add('hidden')
	} else {
		toggleBtn.textContent = 'Вертикально'
		toggleBtn.setAttribute('aria-label', 'Переключить на вертикальный вид')
		if (window.innerWidth >= 1024 && prevBtn && nextBtn) {
			prevBtn.style.display = 'flex'
			nextBtn.style.display = 'flex'
		}
		if (touchHint) touchHint.classList.remove('hidden')
	}

	window.addEventListener('resize', () => {
		if (wrapper.classList.contains('horizontal')) {
			if (window.innerWidth >= 1024 && prevBtn && nextBtn) {
				prevBtn.style.display = 'flex'
				nextBtn.style.display = 'flex'
			} else if (prevBtn && nextBtn) {
				prevBtn.style.display = 'none'
				nextBtn.style.display = 'none'
			}
		}
	})
})
