import './form.js'

const ctx = document.getElementById('myChart').getContext('2d');
const dropdownItems = document.querySelectorAll('.dropdown-item')
let value = 0
let chart = null

dropdownItems.forEach(item => {
    item.addEventListener('click',() => {

    createChart(item.getAttribute('data-value').toString())
    })
})

window.addEventListener('DOMContentLoaded', async () => {
    const response = await axios.get('http://localhost/workshop2022/bdd/get_quantite_silo.php')
    console.log(parseInt(response.data[0].quantite))
    value = response.data.map(data => data.quantite).reduce(reducer)
    console.log(value)
    createChart(value)
})

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
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [test, 8, 3, 5, 2, 3],
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