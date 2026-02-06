// skills.js
const skills = [
	{ name: 'Vue 3', level: 92, color: '#42b883' },
	{ name: 'TypeScript', level: 85, color: '#3178c6' },
	{ name: 'JavaScript', level: 95, color: '#f0db4f' },
	{ name: 'HTML / CSS', level: 94, color: '#e34c26' },
	{ name: 'Nuxt', level: 78, color: '#00dc82' },
	{ name: 'Pinia / Vuex', level: 88, color: '#ff6b6b' },
]

// Создание прогресс-баров навыков
document.addEventListener('DOMContentLoaded', function () {
	const skillsContainer = document.getElementById('skills')
	if (!skillsContainer) return

	skills.forEach(skill => {
		const percent = skill.level
		const el = document.createElement('div')
		el.className = 'skill'
		el.innerHTML = `
            <div class="skill__name">${skill.name}</div>
            <div class="skill__bar">
                <div class="skill__level" style="--level: ${percent / 100}; background-color: ${skill.color}"></div>
            </div>
        `
		skillsContainer.appendChild(el)
	})

	// Создаем радар
	createRadar()
})

// Функция для создания радара
function createRadar() {
	const svg = document.querySelector('.radar-svg')
	if (!svg) return

	const centerX = 250
	const centerY = 250
	const maxRadius = 180
	const n = skills.length
	const angleStep = (2 * Math.PI) / n

	// Генерация точек полигона навыков
	let points = ''
	skills.forEach((skill, i) => {
		const angle = i * angleStep - Math.PI / 2 // начинаем сверху
		const radius = maxRadius * (skill.level / 100)
		const x = centerX + radius * Math.cos(angle)
		const y = centerY + radius * Math.sin(angle)
		points += `${x.toFixed(1)},${y.toFixed(1)} `
	})

	// Позиции подписей
	let labelsHTML = ''
	skills.forEach((skill, i) => {
		const angle = i * angleStep - Math.PI / 2
		const labelRadius = maxRadius * 1.16
		const lx = centerX + labelRadius * Math.cos(angle)
		const ly = centerY + labelRadius * Math.sin(angle) + 6

		let textAnchor = 'middle'
		if (Math.abs(lx - centerX) < 5) textAnchor = 'middle'
		else if (lx > centerX) textAnchor = 'start'
		else textAnchor = 'end'

		labelsHTML += `
            <text 
                x="${lx.toFixed(1)}" 
                y="${ly.toFixed(1)}" 
                text-anchor="${textAnchor}"
                font-size="15"
                font-weight="500"
                fill="${skill.color}"
            >${skill.name}</text>
        `
	})

	// Собираем SVG
	svg.innerHTML = `
        <!-- Сетка (фон) -->
        <g class="radar-grid">
            <polygon points="250,70 430,250 250,430 70,250" />
            <polygon points="250,110 390,250 250,390 110,250" />
            <polygon points="250,150 350,250 250,350 150,250" />
            <polygon points="250,190 310,250 250,310 190,250" />
            <line x1="250" y1="70" x2="250" y2="430" />
            <line x1="70" y1="250" x2="430" y2="250" />
            <line x1="150" y1="150" x2="350" y2="350" />
            <line x1="150" y1="350" x2="350" y2="150" />
        </g>
        
        <!-- Заполненная область навыков -->
        <polygon 
            class="radar-fill radar-fill--animate"
            points="${points.trim()}"
            fill="rgba(59, 130, 246, 0.28)"
            stroke="var(--color-primary, #3b82f6)"
            stroke-width="3"
            stroke-linejoin="round"
        />
        
        <!-- Подписи -->
        ${labelsHTML}
        
        <!-- Центральная точка -->
        <circle cx="250" cy="250" r="3" fill="var(--color-primary)" />
    `
}
