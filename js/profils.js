let types = localStorage.getItem('types') ?? []

if(types != null && typeof types === 'string') {
	types = types.split(',')
}
document.querySelectorAll(".dimension_profil").forEach(el => {
	if(Array.isArray(types) && types.includes(el.getAttribute('data-type'))) {
		el.classList.add('active')
	}
	el.addEventListener('click', (e) => {
		el.classList.toggle('active')

		if(el.classList.contains('active')) {
			// if(localStorage.getItem('types')) {
			// 	types = localStorage.getItem('types').split(',')
			// }
			types.push(el.getAttribute('data-type'))

			console.log(types.toString())
		} else {
			// if(localStorage.getItem('types')) {
			// 	types = localStorage.getItem('types').split(',')
			// }
			types = types.filter(type => type !== el.getAttribute('data-type'))
			console.log(types.toString())
		}
			localStorage.setItem('types', types.toString())
	})
})