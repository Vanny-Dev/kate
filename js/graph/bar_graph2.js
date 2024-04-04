const ctx2 = document.getElementById('barGraph2').getContext('2d');
  const barGraph2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [
            'AD', 
            'CD', 
            'FSO', 
            'FD', 
            'LAD',
            'MID',
            'OA',
            'PMD',
            'VAMD',
            'VMHD',
            'VRMD'     
        ],
        datasets: [{
            label: '',
            data: [91, 81, 96, 85, 100, 100, 93, 93, 80, 87, 88],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)', // Sky Blue
                // 'rgba(23, 105, 170, 0.2)', // Cerulean
                // 'rgba(3, 155, 229, 0.2)',  // Dodger Blue
                // 'rgba(33, 150, 243, 0.2)', // Light Blue
                // 'rgba(25, 118, 210, 0.2)', // Dark Blue
                // 'rgba(13, 71, 161, 0.2)',  // Navy Blue
                // 'rgba(100, 181, 246, 0.2)' // Cornflower Blue
            ],
            borderColor: [
                'rgb(54, 162, 235)', // Sky Blue
                // 'rgb(23, 105, 170)', // Cerulean
                // 'rgb(3, 155, 229)',  // Dodger Blue
                // 'rgb(33, 150, 243)', // Light Blue
                // 'rgb(25, 118, 210)', // Dark Blue
                // 'rgb(13, 71, 161)',  // Navy Blue
                // 'rgb(100, 181, 246)' // Cornflower Blue
            ],
            borderWidth: 1
        },
    ]},
    options: {
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    title: (context) => {
                        return context[0].label.replaceAll(',', ' ');
                    },
                    label: function(context) {
                        let label = context.dataset.label || '';
            
                        if (label) {
                            label += ': ';
                        }
                        const value = context.parsed.x; // Since this is a horizontal bar chart, we use 'parsed.x' to get the value
                        label += `${value}%`; // Directly append '%' to indicate it's a percentage
                        return label;
                    }
                }
            },
            title: {
                display: true,
                text: 'Fill-Up Rate',
                color: 'white',
                font: {
                    size: 18
                }
            },
        },
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: (value) => `${value}%`,
                    color: 'white', // Y-axis labels color

                },
                
            },
            y: {
                title: {
                    display: true,
                    text: 'Office/Unit', // Title text for x-axis labels
                    color: 'white', // Title color
                    font: {
                        size: 18
                    }
                },
                ticks: {
                    autoSkip: false,
                    color: 'white' // Y-axis labels color
                },
                
            },
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const data = [91, 81, 96, 85, 100, 100, 93, 93, 80, 87, 88];
    const total = data.reduce((acc, val) => acc + val, 0);
    const totalPercentage = (total / (data.length * 100)) * 100;

    // Check if the element with id 'tQuotient' exists
    let pElement = document.getElementById('tQuotient');
    // If it doesn't exist, create and append it
    if (!pElement) {
        pElement = document.createElement('p');
        pElement.id = 'tQuotient';
        document.body.appendChild(pElement); // Append the <p> element to the body or any other desired container
    }

    // Update the content of the <p> element
    pElement.textContent = `Fill-Up Rate: ${totalPercentage.toFixed(2)}%`;
});
