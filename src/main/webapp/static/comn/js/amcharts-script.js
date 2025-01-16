am4core.ready(function () {
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("amchartsChart", am4charts.XYChart);
    chart.data = getAmChartsData();
    chart.titles.create().text = "amCharts";

    setupCategoryAxis(chart);
    setupValueAxesAndSeries(chart);

    chart.legend = new am4charts.Legend();
    chart.cursor = new am4charts.XYCursor();
});

const getAmChartsData = () => {
    return [
        { category: "January", data1: 10, data2: 30, data3: 15, data4: 15, data5: 120 },
        { category: "February", data1: 15, data2: 60, data3: 30, data4: 25, data5: 50 },
        { category: "March", data1: 30, data2: 90, data3: 35, data4: 30, data5: 10 },
        { category: "April", data1: 35, data2: 50, data3: 80, data4: 50, data5: 30 },
        { category: "May", data1: 70, data2: 30, data3: 55, data4: 70, data5: 80 },
        { category: "June", data1: 60, data2: 100, data3: 65, data4: 90, data5: 40 },
        { category: "July", data1: 100, data2: 90, data3: 25, data4: 95, data5: 30 }
    ];
}

function setupCategoryAxis(chart) {
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.title.text = "month (월)";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
}

function setupValueAxesAndSeries(chart) {
    const colors = ["red", "green", "orange", "purple", "blue"];
    const axisTitles = ["데이터 1", "데이터 2", "데이터 3", "데이터 4", "데이터 5"];

    for (let i = 1; i <= axisTitles.length; i++) {
        const valueAxis = createValueAxis(chart, colors[i - 1], axisTitles[i - 1], i);
        createSeries(chart, `data${i}`, axisTitles[i - 1], colors[i - 1], valueAxis);
    }
}

function createValueAxis(chart, color, title, index) {
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = index > 2;
    valueAxis.renderer.grid.template.disabled = index !== 1;
    valueAxis.title.text = title;
    valueAxis.title.fill = am4core.color(color);
    valueAxis.renderer.labels.template.fill = am4core.color(color);
    valueAxis.renderer.line.stroke = am4core.color(color);
    valueAxis.renderer.line.strokeWidth = 2;
    valueAxis.renderer.labels.template.adapter.add("text", (text) => text + "");
    return valueAxis;
}

function createSeries(chart, valueField, name, color, valueAxis) {
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = valueField;
    series.dataFields.categoryX = "category";
    series.name = name;
    series.stroke = am4core.color(color);
    series.fill = am4core.color(color);
    series.strokeWidth = 2;
    series.tooltipText = `{name}: [bold]{valueY}[/]`;
    series.yAxis = valueAxis;
}