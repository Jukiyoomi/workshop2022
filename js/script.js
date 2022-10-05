import './form.js'

const ctx = document.getElementById('myChart').getContext('2d');
const dropdownItems = document.querySelectorAll('.dropdown-item')
let value = ""
let chart = null

dropdownItems.forEach(item => {
    item.addEventListener('click',() => {

    createChart(item.getAttribute('data-value').toString())
    })
})

window.addEventListener('DOMContentLoaded', () => createChart())

function createChart(chartType = 'line') {
    if(chart != null) {
        chart.destroy()
    }
    chart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [6, 8, 3, 5, 2, 3],
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