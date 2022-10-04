document.querySelectorAll(".dimension_profil").forEach(el => {
	el.addEventListener('click', (e) => {
		el.classList.toggle('active')
	})
})