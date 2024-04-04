const ctx1 = document.getElementById("barGraph6").getContext('2d');
const longLabels = [
    'Clerical',
    'Administrative',
    'Technical I',
    'Technical II',
    'Highly Technical',
];

const labelsAdjusted = longLabels.map(label => label.split(' '))
const barGraph1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: labelsAdjusted,
        datasets: [{
            label: '',
            data: [44, 43, 11, 5, 8],
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
                text: 'COS',
                color: 'white', // Title color
                font: {
                    size: 18
                }
            },
            // subtitle: {
            //     display: true,
            //     text: 'March 18, 2024',
            //     color: 'white',
            // },
            legend: {
                labels: {
                    color: 'white' // Legend labels color
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 50,
                ticks: {
                    color: 'white' // Y-axis labels color
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Category', // Title text for x-axis labels
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
    const count = [44, 43, 11, 5, 8];

    const totalCount = count.reduce((acc, val) => acc + val, 0);

    // Update HTML to display total of Count
    document.getElementById('totalCount').textContent = `Count: ${totalCount}`;
})