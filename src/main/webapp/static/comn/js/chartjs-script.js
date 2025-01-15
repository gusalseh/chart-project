const ctx = document.getElementById('chartjsChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 20, 30, 40, 50, 60, 70],
                borderColor: 'red',
                fill: false
            }
        ]
    }
});
