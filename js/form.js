// import Axios from "axios"
// import axios from "axios"
const formPlus = document.querySelector('#add_value')
const customValForm = document.querySelector('#add_custom_value')



formPlus.addEventListener('submit', (e) => {
	e.preventDefault()
	const idSilo = parseInt(document.forms['add_value'].elements['id_silo'].value)
	const quantite = parseInt(e.submitter.value)
	console.log(document.forms['add_value'].action)
	// sendData(document.forms['add_value'].action, quantite, idSilo)
})

customValForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const idSilo = parseInt(document.forms['add_custom_value'].elements['id_silo'].value)
	const quantite = parseInt(document.forms['add_custom_value'].elements['quantite'].value)
	// console.log(document.forms['add_custom_value'].elements['quantite'].value, idSilo)
	sendData(document.forms['add_value'].action, quantite, idSilo)
})



async function sendData(url, quantity, idSilo) {
	const response = await axios.post(url, {
		'quantite': quantity,
		'id_silo': idSilo
	})
	console.log(response)
}


