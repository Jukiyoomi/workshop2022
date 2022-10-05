import createCard from './createCard.js'

const ctx = document.getElementById('myChart').getContext('2d');
const dropdownItems = document.querySelectorAll('.dropdown-item')
const formPlus = document.querySelector('#add_value')
const customValForm = document.querySelector('#add_custom_value')
let currentType = "bar"
let value = 0
let chart = null

tt()

//Events sur les forms
formPlus.addEventListener('submit', (e) => {
    e.preventDefault()
    const idSilo = parseInt(document.forms['add_value'].elements['id_silo'].value)
    const quantite = parseInt(e.submitter.value)
    // console.log(document.forms['add_value'].action, idSilo, quantite)
    sendData(document.forms['add_value'].action, quantite, idSilo)
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
    const data = await getData()
    getTotal(data, currentType)
}


dropdownItems.forEach(item => {
    item.addEventListener('click',() => {
    currentType = item.getAttribute('data-value').toString()
    createChart(value, currentType)
    })
})

window.addEventListener('DOMContentLoaded',  async () => {
    // const response = await getData()
    // getTotal(response, currentType)
    const tt = await getDataSilo()
    console.log(tt)

})

async function getData() {
    const {data} = await axios.get('http://localhost/workshop2022/bdd/get_quantite_silo.php')
    // console.log(response)
    return data
}

async function getDataSilo() {
    let {data} = await axios.get('http://localhost/workshop2022/bdd/getDataSilo.php')
    return data
}
function getTotal(param, type) {
    // console.log(param)
    value = param.map(data => data.quantite).reduce(reducer)
    console.log(value)

    createChart(value, type)
}

function reducer(previousValue, currentValue, index) {
    // console.log(
    //     `previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    // );
    return parseInt(previousValue) + parseInt(currentValue);
}

function createChart(test, chartType = 'bar') {
    if(chart != null) {
        chart.destroy()
    }
    chart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: ['Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre'],
            datasets: [{
                label: '# of Votes',
                data: [8, 3, 5, 2, 3, test],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}