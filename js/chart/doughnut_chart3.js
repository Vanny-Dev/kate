const ctx1 = document.getElementById("doughnutChart3").getContext('2d');

const barGraph1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: '',
            data: [2, 0],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 99, 132)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);
                            const value = context.parsed;
                            const percentage = ((value / total) * 100).toFixed(2) + '%';
                            label += `${value} (${percentage})`;
                        }
                        return label;
                    }
                }
            },
            title: {
                display: true,
                text: 'Sex Disaggregation of COS Employees',
                color: 'white', // Title color
                font: {
                    size: 18
                }
            },
            legend: {
                labels: {
                    color: 'white' // Legend labels color
                }
            }
        },
        scales: {
            y: {
                display: false, // Since it's a doughnut chart, we don't need a Y axis
            },
            x: {
                display: false, // Since it's a doughnut chart, we don't need an X axis
            }
        }
    }
});
// document.addEventListener("DOMContentLoaded", function() {
//     const tFillUpRate = document.getElementById('fillupRate');

//     tFillUpRate.textContent = `Fill-Up Rate: 100%`;
// });
