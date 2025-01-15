# Chart Project

## 개요
이 프로젝트는 Chart.js와 amCharts를 활용하여 데이터 시각화를 구현한 웹 애플리케이션입니다.<br/>
JSP 기반의 웹 애플리케이션으로, Maven을 사용하여 빌드되고 Tomcat을 통해 배포됩니다.<br/>
차트 라이브러리의 CDN을 사용하지 않고 직접 라이브러리 파일을 관리하여 로컬 환경에서 실행될 수 있도록 설계되었습니다.

## 프로젝트 목표
 - #### Chart.js와 amCharts를 사용하여 데이터 시각화를 효율적으로 구현
 - #### JSP와 Maven을 활용한 안정적이고 유지보수 가능한 웹 애플리케이션 개발
 - #### 데이터 시각화를 통해 직관적이고 유의미한 인사이트 제공
 - #### CDN 대신 로컬 라이브러리를 활용하여 네트워크 의존성을 최소화

## 주요 기능
1. #### Chart.js를 활용한 라인 차트
   - 일별 데이터 시각화.
   - 다중 데이터셋 지원.
   - 사용자 친화적인 툴팁과 상호작용 제공.
2. #### amCharts를 활용한 다중 축 라인 차트
   - 최대 5개의 데이터셋에 대한 시각화.
   - 각 데이터 축에 고유한 색상과 라벨을 적용.
   - 확대/축소 및 범례 기능 제공.
3. #### 구성 요소
   - index.jsp: 차트 렌더링을 위한 메인 파일.
   - TagLibraries.jsp: 공통 태그와 스크립트를 관리하는 템플릿 파일.
   - chartjs-script.js: Chart.js를 활용한 데이터 시각화 스크립트 파일.
   - amcharts-script.js: amCharts를 활용한 데이터 시각화 스크립트 파일.
   
## 기술 스택
   프론트엔드:
   - HTML5 / CSS3
   - Chart.js
   - amCharts
<br/>

   백엔드:
   - JSP
   - Apache Tomcat 9.0
<br/>

   빌드 및 관리:
   - Maven
<br/>

   기타:
   - Java 1.8

## 디렉토리 구조
📦src
┣ 📂main
┃ ┣ 📂java
┃ ┣ 📂resources
┃ ┗ 📂webapp
┃ ┃ ┣ 📂static
┃ ┃ ┃ ┗ 📂comn
┃ ┃ ┃ ┃ ┗ 📂js
┃ ┃ ┃ ┃ ┃ ┣ 📜amcharts-script.js
┃ ┃ ┃ ┃ ┃ ┣ 📜animated.js
┃ ┃ ┃ ┃ ┃ ┣ 📜chart.min.js
┃ ┃ ┃ ┃ ┃ ┣ 📜chartjs-script.js
┃ ┃ ┃ ┃ ┃ ┣ 📜charts.js
┃ ┃ ┃ ┃ ┃ ┗ 📜core.js
┃ ┃ ┣ 📂templates
┃ ┃ ┃ ┗ 📜TagLibraries.jsp
┃ ┃ ┣ 📂WEB-INF
┃ ┃ ┃ ┣ 📂lib
┃ ┃ ┃ ┃ ┗ 📜jstl-1.2.jar
┃ ┃ ┃ ┗ 📜web.xml
┃ ┃ ┗ 📜index.jsp
┗ 📂test
┃ ┗ 📂java
   
## 설치 및 실행 방법
1. 필수 요구사항
   - Java Development Kit (JDK) 1.8 이상
   - Apache Maven 3.x 이상
   - Apache Tomcat 9.0 이상

   <br/>

2. 설치 절차

   프로젝트 클론
   ```shell
    git clone https://github.com/your-repo/chart-project.git
    cd chart-project
    ```
   Maven 빌드
   ```shell
    mvn clean package
    ```
   Tomcat에 배포
   ```text
   생성된 target/chart-project-1.0.war 파일을 Tomcat의 webapps 디렉토리에 복사
   ```
   Tomcat 서버 실행
   ```shell
    C:\apache-tomcat-9.0\bin\startup.bat
    ```
   애플리케이션 접속
   ```shell
    http://localhost:8080/chart-project-1.0/
    ```

## 사용 방법
### Chart.js 그래프:
- chartjs-script.js에 데이터를 수정하여 사용자 정의 그래프 생성
- 기본 데이터와 데이터셋의 스타일을 변경 가능

### amCharts 그래프:
- amcharts-script.js에서 데이터셋을 정의하여 다중 축 그래프를 생성
- 각 축의 스타일과 색상을 커스터마이징 가능

## 참고
- Chart.js: https://www.chartjs.org/docs/\
- amCharts: https://www.amcharts.com/docs/v4/
