const ctx = document.getElementById('chartjsChart').getContext('2d');

const colors = ['red', 'green', 'orange', 'purple', 'blue'];
const axisTitles = ['데이터 1', '데이터 2', '데이터 3', '데이터 4', '데이터 5'];
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const getChartData = () => {
    return [
        [10, 15, 30, 35, 70, 60, 100],
        [30, 60, 90, 50, 30, 100, 90],
        [15, 30, 35, 80, 55, 65, 25],
        [15, 25, 30, 50, 70, 90, 95],
        [120, 50, 10, 30, 80, 40, 30],
    ];
};

const generateDatasets = (data) => {
    return data.map((dataset, index) => ({
        label: axisTitles[index],
        data: dataset,
        borderColor: colors[index],
        backgroundColor: colors[index],
        fill: false,
        yAxisID: `y${index + 1}`,
        lineTension: 0,
    }));
};

const data = {
    labels: labels,
    datasets: generateDatasets(getChartData()),
};

const options = {
    responsive: true,
    title: {
        display: true,
        text: 'ChartJs',
    },
    scales: {
        xAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: 'month (월)',
                },
                ticks: {
                    fontColor: 'black',
                },
            },
        ],
        yAxes: colors.map((color, index) => ({
            id: `y${index + 1}`,
            type: 'linear',
            position: index < 2 ? 'left' : 'right',
            scaleLabel: {
                display: true,
                labelString: axisTitles[index],
                fontColor: color,
            },
            ticks: {
                fontColor: color,
            },
            gridLines: {
                drawOnChartArea: index === 0,
            },
        })),
    },
};

new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
});
