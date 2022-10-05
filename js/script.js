import createCard from './createCard.js'

// const dropdownItems = document.querySelectorAll('.dropdown-item')
// const formPlus = document.querySelector('#add_value')
// const customValForm = document.querySelector('#add_custom_value')
let currentType = "bar"
let value = 0
let chart = null

//Events sur les forms
// formPlus.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const idSilo = parseInt(document.forms['add_value'].elements['id_silo'].value)
//     const quantite = parseInt(e.submitter.value)
//     // console.log(document.forms['add_value'].action, idSilo, quantite)
//     sendData(document.forms['add_value'].action, quantite, idSilo)
// })

// customValForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const idSilo = parseInt(document.forms['add_custom_value'].elements['id_silo'].value)
//     const quantite = parseInt(document.forms['add_custom_value'].elements['quantite'].value)
//
//     // console.log(document.forms['add_custom_value'].elements['quantite'].value, idSilo)
//     sendData(document.forms['add_value'].action, quantite, idSilo)
// })




// dropdownItems.forEach(item => {
//     item.addEventListener('click',() => {
//     currentType = item.getAttribute('data-value').toString()
//     createChart(value, currentType)
//     })
// })

window.addEventListener('DOMContentLoaded',  async () => {
    // const response = await getData()
    // getTotal(response, currentType)
    const data = await getDataSilo()
    console.log(data)
    data.forEach(item => createCard(item.nom, item.id))
    const ctx = document.querySelectorAll('.myChart')
    const dropdownItems = document.querySelectorAll('.dropdown')
    // console.log(dropdownItems)

    dropdownItems.forEach(it => {
        const itt = [...it.children[1].children]

        itt.forEach(item => {
            item.addEventListener('click',() => {
                currentType = item.getAttribute('data-value').toString()
                // createChart(value, currentType)
                const correspondingChart = item.parentElement.parentElement.parentElement.previousElementSibling
                const newCanvas = document.createElement('canvas')
                newCanvas.className = correspondingChart.className
                newCanvas.setAttribute("width", correspondingChart.getAttribute('width'))
                newCanvas.setAttribute("height", correspondingChart.getAttribute('height'))
                correspondingChart.parentElement.insertBefore(newCanvas, correspondingChart)
                // console.log(currentType, correspondingChart)
                const canvasToRemove = document.querySelector("." + correspondingChart.classList[1])
                console.log(canvasToRemove)
                correspondingChart.parentElement.removeChild(correspondingChart.parentElement.children[1])
                createChart(newCanvas, 8, currentType)
                // console.log(correspondingChart.data(correspondingChart.classList[1]))

            })
        })
    })

    ctx.forEach(ct => {
        let tot = null
        createChart(ct, tot)
    })

})

async function sendData(url, quantity, idSilo) {
    const response = await axios.post(url, {
        'quantite': quantity,
        'id_silo': idSilo
    })
    const data = await getData()
    getTotal(data, currentType)
}

async function getData() {
    const {data} = await axios.get('http://localhost/B3/workshop2022/bdd/get_quantite_silo.php')
    // console.log(response)
    return data
}

async function getDataSilo() {
    let {data} = await axios.get('http://localhost/B3/workshop2022/bdd/getDataSilo.php')
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

function createChart(ctx, test = 8, chartType = 'bar', chartTaker) {
    const tt = ctx.getContext('2d')

    // if(chartTaker != null) {
        chartTaker?.destroy()
    // }
    // console.log(ctx)

    chartTaker = new Chart(tt, {
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