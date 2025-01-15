<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/templates/TagLibraries.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>Chart Example</title>
</head>
<body>
    <h1>Chart.js와 amCharts</h1>

    <!-- Chart.js -->
    <div class="chart-container">
        <canvas id="chartjsChart"></canvas>
    </div>

    <!-- amCharts -->
    <div class="chart-container">
        <div id="amchartsChart"></div>
    </div>

    <!-- Load custom scripts -->
    <script src="${pageContext.request.contextPath}/static/comn/js/chartjs-script.js"></script>
    <script src="${pageContext.request.contextPath}/static/comn/js/amcharts-script.js"></script>
</body>
</html>
