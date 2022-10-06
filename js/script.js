import {createCard, cleanContainer} from './createCard.js'

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
    // console.log(data)
    let startTime = performance.now()
    cleanContainer()
    if(Array.isArray(data)) {
        data.forEach(item => createCard(item.nom, item.id))
    }
    let endTime = performance.now()
    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

    const ctx = document.querySelectorAll('.myChart')
    const dropdownItems = document.querySelectorAll('.dropdown')
    const deleteBtns = document.querySelectorAll('.form-supp')
    // console.log(dropdownItems)

    deleteBtns.forEach(btn => {
        btn.addEventListener('submit', (e) => {
            e.preventDefault()
            const idSilo = parseInt(btn.parentElement.parentElement.parentElement.children[3].lastElementChild.value)

            deleteSilo(idSilo).then((response) => {
                // cleanContainer()
                if(Array.isArray(data)) {
                    const filteredData = data.filter(d => parseInt(d.id) !== idSilo)
                    // console.log(filteredData)
                    // console.log(document.querySelector(`.card-${idSilo}`))
                    document
                        .querySelector('.containerjs')
                        .removeChild(
                            document
                                .querySelector(`.card-${idSilo}`)
                        )
                }


                // console.log(data.some(d => d.id == idSilo))
            })

        })
    })

    dropdownItems.forEach(it => {

        // console.log()
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
                correspondingChart.parentElement.removeChild(correspondingChart.parentElement.children[1])
                createChart(newCanvas, 8, currentType)

            })
        })

        const correspondingForm = it.parentElement.children[3]
        const correspondingId = correspondingForm.children['id_silo'].value

        // console.log(correspondingForm, correspondingId)

        correspondingForm.addEventListener('submit', (e) => {
            e.preventDefault()
            const quantite = parseInt(e.submitter.value)
            console.log(correspondingId, quantite, correspondingForm.getAttribute('action'))
            sendData(correspondingForm.getAttribute('action'), quantite, correspondingId)
        })

    })

    ctx.forEach(ct => {
        let tot = null
        createChart(ct, tot)
    })

})

async function deleteSilo(id) {
    const {data} = await axios.post('http://localhost/workshop2022/bdd/delete_silo.php', {
        id_silo: id
    })
    // console.log(response)
    return data
}

async function sendData(url, quantity, idSilo) {
    const response = await axios.post(url, {
        'quantite': quantity,
        'id_silo': idSilo
    })
    // const data = await getData()
    // getTotal(data, currentType)
}

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
                label: 'Quantité (en tonnes)',
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