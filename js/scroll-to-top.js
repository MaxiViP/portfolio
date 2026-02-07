document.addEventListener('DOMContentLoaded', function () {
	const backToTopBtn = document.querySelector('.footer__back-btn')

	if (!backToTopBtn) return

	window.addEventListener('scroll', function () {
		if (window.pageYOffset > 300) {
			backToTopBtn.style.opacity = '1'
			backToTopBtn.style.visibility = 'visible'
			backToTopBtn.style.transform = 'translateY(0)'
		} else {
			backToTopBtn.style.opacity = '0'
			backToTopBtn.style.visibility = 'hidden'
			backToTopBtn.style.transform = 'translateY(10px)'
		}
	})

	backToTopBtn.addEventListener('click', function (e) {
		e.preventDefault()

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})

		const header = document.querySelector('header')
		if (header) {
			header.setAttribute('tabindex', '-1')
			header.focus()
		}
	})

	backToTopBtn.style.transition = 'all 0.3s ease'
	backToTopBtn.style.opacity = '0'
	backToTopBtn.style.visibility = 'hidden'
	backToTopBtn.style.transform = 'translateY(10px)'

	createFloatingBackToTopButton()
})

function createFloatingBackToTopButton() {
	const floatingBtn = document.createElement('button')
	floatingBtn.className = 'floating-back-to-top'
	floatingBtn.setAttribute('aria-label', 'Вернуться к началу страницы')
	floatingBtn.innerHTML = `
        <svg width="25" height="25" aria-hidden="true">
            <path d="M6 15l6-6 6 6" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>
    `

	document.body.appendChild(floatingBtn)

	const style = document.createElement('style')
	style.textContent = `
        .floating-back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: rgba(59, 130, 246, 0.9);
            border: none;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
            backdrop-filter: blur(10px);
        }
        
        .floating-back-to-top:hover {
            background: rgba(37, 99, 235, 0.9);
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }
        
        .floating-back-to-top:active {
            transform: translateY(-2px) scale(1.05);
        }
        
        .floating-back-to-top:focus-visible {
            outline: 2px solid white;
            outline-offset: 2px;
        }
        
        .floating-back-to-top.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        @media (max-width: 768px) {
            .floating-back-to-top {
                bottom: 20px;
                right: 20px;
                width: 44px;
                height: 44px;
            }
        }
    `
	document.head.appendChild(style)

	window.addEventListener('scroll', function () {
		if (window.pageYOffset > 500) {
			floatingBtn.classList.add('visible')
		} else {
			floatingBtn.classList.remove('visible')
		}
	})

	floatingBtn.addEventListener('click', function () {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
}
