// skills.js

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
