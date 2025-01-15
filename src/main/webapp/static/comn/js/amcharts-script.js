am4core.ready(function () {
    // 애니메이션 테마 적용
    am4core.useTheme(am4themes_animated);

    // 차트 생성
    let chart = am4core.create("amchartsChart", am4charts.XYChart);

    // 데이터 추가
    chart.data = [
        { category: "January", data1: 10, data2: 30, data3: 15, data4: 15, data5: 120 },
        { category: "February", data1: 15, data2: 60, data3: 30, data4: 25, data5: 50 },
        { category: "March", data1: 30, data2: 90, data3: 35, data4: 30, data5: 10 },
        { category: "April", data1: 35, data2: 50, data3: 80, data4: 50, data5: 30 },
        { category: "May", data1: 70, data2: 30, data3: 55, data4: 70, data5: 80 },
        { category: "June", data1: 60, data2: 100, data3: 65, data4: 90, data5: 40 },
        { category: "July", data1: 100, data2: 90, data3: 25, data4: 95, data5: 30 }
    ];

    // 차트 제목 추가
    chart.titles.create().text = "amCharts";

    // 카테고리 축 설정
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.title.text = "month (월)";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    // 색상 및 축 제목 설정
    const colors = ["red", "green", "orange", "purple", "blue"];
    const axisTitles = ["데이터 1", "데이터 2", "데이터 3", "데이터 4", "데이터 5"];

    // 축 및 시리즈 생성
    for (let i = 1; i <= 5; i++) {
        // y축 생성
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.opposite = i > 2; // 세 번째 축부터 반대편에 위치
        valueAxis.renderer.grid.template.disabled = i !== 1; // 첫 번째 축만 그리드 표시
        valueAxis.title.text = axisTitles[i - 1];
        valueAxis.title.fill = am4core.color(colors[i - 1]);
        valueAxis.renderer.labels.template.fill = am4core.color(colors[i - 1]);
        valueAxis.renderer.line.stroke = am4core.color(colors[i - 1]);
        valueAxis.renderer.line.strokeWidth = 2;
        valueAxis.renderer.labels.template.adapter.add("text", (text) => text + "");

        // 시리즈 추가
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = `data${i}`;
        series.dataFields.categoryX = "category";
        series.name = axisTitles[i - 1];
        series.stroke = am4core.color(colors[i - 1]);
        series.fill = am4core.color(colors[i - 1]);
        series.strokeWidth = 2;
        series.tooltipText = `{name}: [bold]{valueY}[/]`;
        series.yAxis = valueAxis; // 시리즈를 각 축에 매칭
    }

    // 범례 및 커서 추가
    chart.legend = new am4charts.Legend();
    chart.cursor = new am4charts.XYCursor();
});
