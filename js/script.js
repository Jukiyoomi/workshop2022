import {createCard, cleanContainer} from './createCard.js'

let currentType = "bar"
let value = 0
let chart = null

window.addEventListener('DOMContentLoaded',  async () => {
    let startTime = performance.now()
    const data = await getDataSilo()
    cleanContainer()
    if(Array.isArray(data)) {
        data.forEach(item => createCard(item.nom, item.id))
    }
    let endTime = performance.now()
    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

    const allCards = document.querySelectorAll('.card')

    allCards.forEach(card => {
        const idCard = parseInt(card.querySelector('[type="hidden"]').getAttribute('value'))

        getData(idCard)
            .then((res) => {
                if(Array.isArray(res)) {
                    getTotal(card.querySelector('.myChart'), res, 'bar')
                } else {
                    getTotal(card.querySelector('.myChart'), 0, 'bar')
                }
            })
    })



    // const ctx = document.querySelectorAll('.myChart')
    const dropdownItems = document.querySelectorAll('.dropdown')
    const deleteBtns = document.querySelectorAll('.form-supp')

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
                item.parentElement.setAttribute('data-current', currentType)
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
        const correspondingCustomForm = it.parentElement.children[4].children[0].children[0]
        const correspondingId = correspondingForm.children['id_silo'].value

        console.log(correspondingCustomForm)

        correspondingForm.addEventListener('submit', (e) => {
            e.preventDefault()
            const quantite = parseInt(e.submitter.value)
            console.log(correspondingId, quantite, correspondingForm.getAttribute('action'))
            sendData(correspondingForm.getAttribute('action'), quantite, correspondingId)
                .then(() => {
                    getData(correspondingId)
                        .then((data) => {
                            // getTotal(data, "bar")
                            console.log(data)
                            const correspondingChart = correspondingForm.parentElement.previousElementSibling
                            const newCanvas = document.createElement('canvas')
                            newCanvas.className = correspondingChart.className
                            newCanvas.setAttribute("width", correspondingChart.getAttribute('width'))
                            newCanvas.setAttribute("height", correspondingChart.getAttribute('height'))
                            correspondingChart.parentElement.insertBefore(newCanvas, correspondingChart)
                            correspondingChart.parentElement.removeChild(correspondingChart.parentElement.children[1])
                            // createChart(newCanvas, 8, currentType)
                            const correspondingCurrentType = correspondingForm.previousElementSibling.previousElementSibling.previousElementSibling.children[1].getAttribute('data-current')
                            // const correspondingCurrentType = correspondingForm.parentElement.children[2].children[1]

                            console.log(correspondingCurrentType)
                            getTotal(newCanvas, data, currentType)

                        })
                })
        })

        correspondingCustomForm.addEventListener('submit', (e) => {
            e.preventDefault()
            const quantite = parseFloat(correspondingCustomForm.children[0].value)
            console.log(quantite, correspondingCustomForm.getAttribute('action'))
            if(quantite == 0 || quantite == undefined || quantite == null || isNaN(quantite)) console.log("no number")
            sendData(correspondingForm.getAttribute('action'), quantite, correspondingId)
                .then(() => {
                    getData(correspondingId)
                        .then((data) => {
                            console.log(data)
                            const correspondingChart = correspondingForm.parentElement.previousElementSibling
                            const newCanvas = document.createElement('canvas')
                            newCanvas.className = correspondingChart.className
                            newCanvas.setAttribute("width", correspondingChart.getAttribute('width'))
                            newCanvas.setAttribute("height", correspondingChart.getAttribute('height'))
                            correspondingChart.parentElement.insertBefore(newCanvas, correspondingChart)
                            correspondingChart.parentElement.removeChild(correspondingChart.parentElement.children[1])
                            // createChart(newCanvas, 8, currentType)
                            getTotal(newCanvas, data, currentType)
                            console.log(correspondingChart)

                        })
                })
        })

    })

    // ctx.forEach(ct => {
    //     let tot = null
    //     createChart(ct, tot)
    // })
    // for (let i = 0; i < ctx.length; i++) {
    //     createChart(ctx[i], response[i].quantite, 'bar')
    // }

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

async function getData(id) {
    const {data} = await axios.post('http://localhost/workshop2022/bdd/get_quantite_silo.php', {
        id_silo: id
    })
    // console.log(response)
    return data
}

async function getDataSilo() {
    let {data} = await axios.get('http://localhost/workshop2022/bdd/getDataSilo.php')
    return data
}
function getTotal(canvas, param, type) {
    // console.log(param)
    value = parseInt(Array.isArray(param) ? param.map(data => data.quantite).reduce(reducer) : 0)
    console.log(value)

    createChart(canvas, value, type)
}

function reducer(previousValue, currentValue, index) {
    return parseInt(previousValue) + parseInt(currentValue);
}

function createChart(ctx, test = 8, chartType = 'bar', chartTaker) {
    const tt = ctx.getContext('2d')

    // if(chartTaker != null) {
        chartTaker?.destroy()
    // }
    // console.log(ctx)
    // console.log(new Array(5).map(d => Math.floor(Math.random() * 15) + 1))

    let randomVals = []
        // new Array(5).map(d => Math.floor(Math.random() * 15) + 1)

    for (let i = 0; i <= 4; i++) {
        // randomVals.push(Math.floor(Math.random() * 15) + 1)
        randomVals = [...randomVals, Math.floor(Math.random() * 15) + 1]
    }


    console.log(randomVals)

    chartTaker = new Chart(tt, {
        type: chartType,
        data: {
            labels: ['Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre'],
            datasets: [{
                label: 'Quantité (en tonnes)',
                data: [...randomVals, test],
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