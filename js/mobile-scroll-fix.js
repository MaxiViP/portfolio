// mobile-scroll-fix.js

document.addEventListener('DOMContentLoaded', function () {
	// Функция для проверки и исправления горизонтального скролла
	function checkAndFixHorizontalScroll() {
		const isMobile = window.innerWidth <= 767

		if (!isMobile) return

		// Проверяем наличие горизонтального скролла
		const hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth

		if (hasHorizontalScroll) {
			console.warn('Обнаружен горизонтальный скролл на мобильном устройстве. Применяем исправления...')

			// Принудительно скрываем горизонтальный скролл
			document.documentElement.style.overflowX = 'hidden'
			document.body.style.overflowX = 'hidden'

			// Находим все элементы с прокруткой
			const scrollableElements = document.querySelectorAll('*')
			scrollableElements.forEach(el => {
				const styles = window.getComputedStyle(el)
				const overflowX = styles.overflowX

				if (overflowX === 'auto' || overflowX === 'scroll') {
					el.style.overflowX = 'hidden'
				}
			})

			// Принудительно ограничиваем ширину основных контейнеров
			const containers = document.querySelectorAll('.container, .main-grid, .card, .projects-grid, .awards-wrapper')
			containers.forEach(container => {
				container.style.maxWidth = '100%'
				container.style.overflowX = 'hidden'
			})
		}
	}

	// Запускаем проверку
	checkAndFixHorizontalScroll()

	// Проверяем при изменении размера окна
	window.addEventListener('resize', checkAndFixHorizontalScroll)

	// Проверяем после загрузки всех ресурсов
	window.addEventListener('load', checkAndFixHorizontalScroll)

	// Проверяем после изменений в DOM (для динамического контента)
	const observer = new MutationObserver(checkAndFixHorizontalScroll)
	observer.observe(document.body, { childList: true, subtree: true })
})
