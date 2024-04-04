const ctx1 = document.getElementById("barGraph4").getContext('2d');

const barGraph1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Office of the Administrator'],
        datasets: [{
            label: 'Contractual',
            data: [2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Soft Red
                // 'rgba(229, 115, 115, 0.2)', // Light Red
                // 'rgba(239, 83, 80, 0.2)',  // Tomato Red
                // 'rgba(211, 47, 47, 0.2)',   // Dark Red
                // 'rgba(198, 40, 40, 0.2)',   // Deep Red
                // 'rgba(183, 28, 28, 0.2)',  // Strong Red
                // 'rgba(255, 69, 0, 0.2)'    // Red Orange
            ],
            borderColor: [
                'rgb(255, 99, 132)', // Soft Red
                // 'rgb(229, 115, 115)', // Light Red
                // 'rgb(239, 83, 80)',  // Tomato Red
                // 'rgb(211, 47, 47)',   // Dark Red
                // 'rgb(198, 40, 40)',   // Deep Red
                // 'rgb(183, 28, 28)',  // Strong Red
                // 'rgb(255, 69, 0)'    // Red Orange
            ],
            borderWidth: 1
        },
        {
            label: 'Filled Positions',
            data: [2],
            backgroundColor: [
                'rgba(255, 235, 59, 0.2)', // Lemon Yellow
                // 'rgba(255, 255, 141, 0.2)', // Light Yellow
                // 'rgba(255, 213, 79, 0.2)',  // Mustard Yellow
                // 'rgba(255, 193, 7, 0.2)',   // Amber
                // 'rgba(255, 179, 0, 0.2)',   // Orange Yellow
                // 'rgba(253, 216, 53, 0.2)',  // Golden Yellow
                // 'rgba(255, 202, 40, 0.2)'   // Saffron Yellow
            ],
            borderColor: [
                'rgb(255, 235, 59)', // Lemon Yellow
                // 'rgb(255, 255, 141)', // Light Yellow
                // 'rgb(255, 213, 79)',  // Mustard Yellow
                // 'rgb(255, 193, 7)',   // Amber
                // 'rgb(255, 179, 0)',   // Orange Yellow
                // 'rgb(253, 216, 53)',  // Golden Yellow
                // 'rgb(255, 202, 40)'   // Saffron Yellow
            ],
            borderWidth: 1
        },
        {
            label: 'Unfilled Positions',
            data: [0],
            backgroundColor: [
                'rgba(102, 187, 106, 0.2)', // Light Green
                // 'rgba(76, 175, 80, 0.2)',   // Green
                // 'rgba(67, 160, 71, 0.2)',   // Dark Green
                // 'rgba(56, 142, 60, 0.2)',   // Darker Green
                // 'rgba(46, 125, 50, 0.2)',   // Even Darker Green
                // 'rgba(27, 94, 32, 0.2)',    // Deep Green
                // 'rgba(0, 77, 64, 0.2)'      // Teal Green
            ],
            borderColor: [
                'rgb(102, 187, 106)', // Light Green
                // 'rgb(76, 175, 80)',   // Green
                // 'rgb(67, 160, 71)',   // Dark Green
                // 'rgb(56, 142, 60)',   // Darker Green
                // 'rgb(46, 125, 50)',   // Even Darker Green
                // 'rgb(27, 94, 32)',    // Deep Green
                // 'rgb(0, 77, 64)'      // Teal Green
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    title: context => 
                      context[0].label.replaceAll(',', ' ')
                }
            },
            title: {
                display: true,
                text: 'Fill-Up',
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
                beginAtZero: true,
                max: 8,
                ticks: {
                    color: 'white' // Y-axis labels color
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Office/Unit', // Title text for x-axis labels
                    color: 'white', // Title color
                    font: {
                        size: 18
                    },
                },
                ticks: {
                    font: {
                        size: 13
                    },
                    color: 'white', // X-axis labels color
                    maxRotation: 0, // Set rotation angle to 0
                    autoSkip: true, // Disable auto skipping of labels
                }
            }
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const tFillUpRate = document.getElementById('fillupRate');

    tFillUpRate.textContent = `Fill-Up Rate: 100%`;
});
