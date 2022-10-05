// import Axios from "axios"
// import axios from "axios"
const formPlus = document.querySelector('#add_value')

formPlus.addEventListener('submit', (e) => {
	e.preventDefault()
	const idSilo = parseInt(document.forms['add_value'].elements['id_silo'].value)
	sendData(document.forms['add_value'].action, parseInt(e.submitter.value), idSilo)
})


async function sendData(url, quantity, idSilo) {
	const response = await axios.post(url, {
		'quantite': quantity,
		'id_silo': idSilo
	})
	console.log(response)
}


