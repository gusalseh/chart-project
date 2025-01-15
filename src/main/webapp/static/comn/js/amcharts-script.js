am4core.ready(function () {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("amchartsChart", am4charts.XYChart);
    chart.data = [
        { category: "January", value: 10 },
        { category: "February", value: 20 },
        { category: "March", value: 30 },
        { category: "April", value: 40 },
        { category: "May", value: 50 }
    ];
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "category";
});
