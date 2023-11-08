
  jQuery(function () {
    $('.ac_list li').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('.ac_list li').removeClass('current');
      $('.chart_wrap').removeClass('current');

      $(this).addClass('current');
      $("#" + tab_id).addClass('current');

      chart_drawing(tab_id);
    });
  })

  function chart_drawing(val) {
    if (val == 'chart_box_04_01') {
      am4core.ready(function () {
        am4core.useTheme(am4themes_animated);
        //
        // 4-1. 월별기온_chartdiv23 //
        //
        chart_4_1 = am4core.create("chart_04_01", am4charts.XYChart);
        chart_4_1.hiddenState.properties.opacity = 0; // this creates initial fade-in

        // Add data
        chart_4_1.data = [{
          "year": "2022.11",
          "value1": 6.1,
          "value2": 11.1,
          "value3": 17.4
        }, {
          "year": "2022.12",
          "value1": -4.2,
          "value2": -0.2,
          "value3": 4.4
        }, {
          "year": "2023.01",
          "value1": -4,
          "value2": 0.8,
          "value3": 5.9
        }, {
          "year": "2023.02",
          "value1": -1.8,
          "value2": 3,
          "value3": 8.8
        }, {
          "year": "2023.03",
          "value1": 3.9,
          "value2": 10.2,
          "value3": 17.7
        }, {
          "year": "2023.04",
          "value1": 8.5,
          "value2": 14.2,
          "value3": 20.5
        }, {
          "year": "2023.05",
          "value1": 14.4,
          "value2": 19.4,
          "value3": 25.2
        }, {
          "year": "2023.06",
          "value1": 19.2,
          "value2": 23.3,
          "value3": 28.9
        }, {
          "year": "2023.07",
          "value1": 23.4,
          "value2": 26.5,
          "value3": 30.5
        }, {
          "year": "2023.08",
          "value1": 24,
          "value2": 27.5,
          "value3": 31.9
        }, {
          "year": "2023.09",
          "value1": 20.1,
          "value2": 23.7,
          "value3": 28.2
        }, {
          "year": "2023.10",
          "value1": 11.4,
          "value2": 16.1,
          "value3": 21.8
        },];

        // Create axes
        categoryAxis = chart_4_1.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.autoGridCount = false;
        categoryAxis.labelFrequency = 0;
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;

        valueAxis = chart_4_1.yAxes.push(new am4charts.ValueAxis());
        valueAxis.autoGridCount = false;
        valueAxis.boldLabels = true;
        valueAxis.gridCount = 4;

        // Create series
        function createSeries1(field, name) {
          var series = chart_4_1.series.push(new am4charts.LineSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          series.tooltipText = "";
          series.strokeWidth = 3;

          // Set up tooltip
          series.adapter.add("tooltipText", function (ev) {
            var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
            chart_4_1.series.each(function (item) {
              text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "}℃\n";
            });
            return text;
          });

          series.tooltip.getFillFromObject = false;
          series.tooltip.background.fill = am4core.color("#fff");
          series.tooltip.label.fill = am4core.color("#00");

          // Prevent cross-fading of tooltips
          series.tooltip.defaultState.transitionDuration = 0;
          series.tooltip.hiddenState.transitionDuration = 0;

          var bullet = series.bullets.push(new am4charts.CircleBullet());
          bullet.circle.radius = 5;

          return series;
        }

        createSeries1("value1", "평균최저기온");
        createSeries1("value2", "평균기온");
        createSeries1("value3", "평균최고기온");

        // Add cursor
        chart_4_1.cursor = new am4charts.XYCursor();
        chart_4_1.cursor.maxTooltipDistance = 0;
        chart_4_1.cursor.behavior = 'none';
        // Add legend
        chart_4_1.legend = new am4charts.Legend();

        chart_4_1.logo.height = -15000;

      });
    }
    if (val == 'chart_box_04_02') {
      am4core.ready(function () {

        am4core.useTheme(am4themes_animated);
        //
        // 4-2. 월별강수량_chartdiv24 //
        //

        chart_4_2 = am4core.create("chart_04_02", am4charts.XYChart);
        chart_4_2.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart_4_2.data = [{
          year: "2022.11",
          value: 77
        }, {
          year: "2022.12",
          value: 30
        }, {
          year: "2023.01",
          value: 26.8
        }, {
          year: "2023.02",
          value: 9.6
        }, {
          year: "2023.03",
          value: 27
        }, {
          year: "2023.04",
          value: 79.9
        }, {
          year: "2023.05",
          value: 240.7
        }, {
          year: "2023.06",
          value: 169.9
        }, {
          year: "2023.07",
          value: 735
        }, {
          year: "2023.08",
          value: 274.8
        }, {
          year: "2023.09",
          value: 203.4
        }, {
          year: "2023.10",
          value: 18.2
        },];

        categoryAxis = chart_4_2.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.fontSize = 12;

        valueAxis = chart_4_2.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.max = 800;
        valueAxis.strictMinMax = true;
        valueAxis.renderer.minGridDistance = 20;

        // Create series
        function createSeries2(field, name, stacked) {
          var series = chart_4_2.series.push(new am4charts.ColumnSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          // Set up tooltip
          series.adapter.add("tooltipText", function (ev) {
            var text = "[font-size: 12px bold]{categoryX}[/]\n"
            chart_4_2.series.each(function (item) {
              text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} mm\n";
            });
            return text;
          });
          series.tooltip.getFillFromObject = false;
          series.tooltip.background.fill = am4core.color("#fff");
          series.tooltip.label.fill = am4core.color("#00");
          series.stacked = stacked;
          series.columns.template.width = am4core.percent(60);
        }

        createSeries2("value", "강수량", false);

        //Add cursor
        chart_4_2.cursor = new am4charts.XYCursor();
        chart_4_2.cursor.maxTooltipDistance = 0;
        chart_4_2.cursor.behavior = 'none';
        // Add legend
        chart_4_2.legend = new am4charts.Legend();

        chart_4_2.logo.height = -15000;
      });
    }
    if (val == 'chart_box_04_03') {
      am4core.ready(function () {

        am4core.useTheme(am4themes_animated);
        //
        // 4-3. 미세먼지현황_chartdiv25 //
        //

        chart_4_3 = am4core.create("chart_04_03", am4charts.XYChart);
        chart_4_3.hiddenState.properties.opacity = 0; // this creates initial fade-in

        // Add data
        chart_4_3.data = [{
          "year": "2022. 11",
          "value1": 45,
          "value2": 27,
        }, {
          "year": "2022. 12",
          "value1": 39,
          "value2": 24,
        }, {
          "year": "2023. 01",
          "value1": 50,
          "value2": 27,
        }, {
          "year": "2022. 02",
          "value1": 53,
          "value2": 36,
        }, {
          "year": "2023. 03",
          "value1": 72,
          "value2": 32,
        }, {
          "year": "2023. 04",
          "value1": 69,
          "value2": 25,
        }, {
          "year": "2023. 05",
          "value1": 39,
          "value2": 16,
        }, {
          "year": "2023. 06",
          "value1": 30,
          "value2": 16,
        }, {
          "year": "2023. 07",
          "value1": 22,
          "value2": 13,
        }, {
          "year": "2023. 08",
          "value1": 26,
          "value2": 15,
        }, {
          "year": "2023. 09",
          "value1": 27,
          "value2": 14,
        },];

        // Create axes
        categoryAxis = chart_4_3.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.autoGridCount = false;
        categoryAxis.labelFrequency = 0;
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;

        valueAxis = chart_4_3.yAxes.push(new am4charts.ValueAxis());
        valueAxis.autoGridCount = false;
        valueAxis.boldLabels = true;
        valueAxis.gridCount = 4;

        // Create series
        function createSeries3(field, name) {
          var series = chart_4_3.series.push(new am4charts.LineSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          series.tooltipText = "";
          series.strokeWidth = 3;

          // Set up tooltip
          series.adapter.add("tooltipText", function (ev) {
            var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
            chart_4_3.series.each(function (item) {
              text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} pm\n";
            });
            return text;
          });

          series.tooltip.getFillFromObject = false;
          series.tooltip.background.fill = am4core.color("#fff");
          series.tooltip.label.fill = am4core.color("#00");

          // Prevent cross-fading of tooltips
          series.tooltip.defaultState.transitionDuration = 0;
          series.tooltip.hiddenState.transitionDuration = 0;

          var bullet = series.bullets.push(new am4charts.CircleBullet());
          bullet.circle.radius = 5;

          return series;
        }

        createSeries3("value1", "미세먼지");
        createSeries3("value2", "초미세먼지");


        // Add cursor
        chart_4_3.cursor = new am4charts.XYCursor();
        chart_4_3.cursor.maxTooltipDistance = 0;
        chart_4_3.cursor.behavior = 'none';
        // Add legend
        chart_4_3.legend = new am4charts.Legend();

        chart_4_3.logo.height = -15000;


      });
    }
    if (val == 'chart_box_04_04') {
      am4core.ready(function () {

        am4core.useTheme(am4themes_animated);

        //
        // 4-5. 폐기물 발생 및 재활용 현황_chartdiv26 //
        //
        chart_4_4 = am4core.create("chart_04_04", am4charts.XYChart);

        // Add data
        chart_4_4.data = [{
          "year": "2015",
          "value1": 691,
          "value2": 2264,
          "value3": 1788,
          "value4": 134,
          "value5": 67

        }, {
          "year": "2016",
          "value1": 615,
          "value2": 2180,
          "value3": 1121,
          "value4": 35,
          "value5": 63
        }, {
          "year": "2017",
          "value1": 754,
          "value2": 2063,
          "value3": 1774,
          "value4": 96,
          "value5": 62
        }, {
          "year": "2018",
          "value1": 876,
          "value2": 2198,
          "value3": 1399,
          "value4": 125,
          "value5": 49
        }, {
          "year": "2019",
          "value1": 585,
          "value2": 2462,
          "value3": 1841,
          "value4": 120,
          "value5": 91
        }, {
          "year": "2020",
          "value1": 543,
          "value2": 1967,
          "value3": 1007,
          "value4": 106,
          "value5": 56
        }, {
          "year": "2021",
          "value1": 599,
          "value2": 1834,
          "value3": 1135,
          "value4": 99,
          "value5": 61
        }];

        /* Create axes */
        categoryAxis = chart_4_4.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.minGridDistance = 30;

        /* Create value axis */
        valueAxis = chart_4_4.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.max = 100;
        valueAxis.renderer.opposite = true;
        /* Create value axis */
        valueAxis1 = chart_4_4.yAxes.push(new am4charts.ValueAxis());
        valueAxis1.min = 0;
        valueAxis1.max = 6000;

        valueAxis1.syncWithAxis = valueAxis;

        // Create series
        function createSeries4(field, name, stacked) {
          if (field == "value5") {
            var series = chart_4_4.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "year";
            series.name = name;
            series.tooltipText = "";
            series.strokeWidth = 3;
            series.yAxis = valueAxis;
            series.stroke = am4core.color("#fdd400");
            series.fill = am4core.color("#fdd400");
            // Set up tooltip
            series.adapter.add("tooltipText", function (ev) {
              var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
              chart_4_4.series.each(function (item) {
                if (item.name == "폐기물재활용률(%)") {
                  text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} %\n";
                }
                else {
                  text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 톤/일\n";
                }
              });
              return text;
            });

            series.tooltip.getFillFromObject = false;
            series.tooltip.background.fill = am4core.color("#fff");
            series.tooltip.label.fill = am4core.color("#00");

            // Prevent cross-fading of tooltips
            series.tooltip.defaultState.transitionDuration = 0;
            series.tooltip.hiddenState.transitionDuration = 0;

            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.radius = 5;
          }
          else {
            var series = chart_4_4.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "year";
            series.name = name;
            series.yAxis = valueAxis1;
            // Set up tooltip
            series.adapter.add("tooltipText", function (ev) {
              var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
              chart_4_4.series.each(function (item) {
                if (item.name == "폐기물재활용률(%)") {
                  text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} %\n";
                }
                else {
                  text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 톤/일\n";
                }
              });
              return text;
            });
            series.tooltip.getFillFromObject = false;
            series.tooltip.background.fill = am4core.color("#fff");
            series.tooltip.label.fill = am4core.color("#00");
            series.stacked = stacked;
            series.columns.template.width = am4core.percent(60);
          }
        }

        createSeries4("value1", "생활폐기물", true);
        createSeries4("value2", "사업장배출시설계폐기물", true);
        createSeries4("value3", "건설폐기물", true);
        createSeries4("value4", "지정폐기물", true);
        createSeries4("value5", "폐기물재활용률(%)", false);

        // Add legend
        chart_4_4.legend = new am4charts.Legend();

        // Add cursor
        chart_4_4.cursor = new am4charts.XYCursor();
        chart_4_4.cursor.maxTooltipDistance = 0;
        chart_4_4.cursor.behavior = 'none';
        chart_4_4.logo.height = -15000;
      });
    }


    if (val == 'chart_box_04_05') {
      am4core.ready(function () {

        am4core.useTheme(am4themes_animated);
        //
        // 4-4. 쓰레기 배출_chartdiv27 //
        //

        chart_4_5 = am4core.create("chart_04_05", am4charts.XYChart);

        // Data for both series
        chart_4_5.data = [{
          "year": "2015",
          "value1": 691,
          "value2": 100
        }, {
          "year": "2016",
          "value1": 615,
          "value2": 100
        }, {
          "year": "2017",
          "value1": 754,
          "value2": 100
        }, {
          "year": "2018",
          "value1": 876,
          "value2": 100
        }, {
          "year": "2019",
          "value1": 585,
          "value2": 100
        }, {
          "year": "2020",
          "value1": 543,
          "value2": 100
        }, {
          "year": "2021",
          "value1": 599,
          "value2": 100
        }];

        /* Create axes */
        categoryAxis = chart_4_5.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.minGridDistance = 30;

        /* Create value axis */
        valueAxis = chart_4_5.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 400;
        valueAxis.max = 1000;

        /* Create value axis */
        valueAxis1 = chart_4_5.yAxes.push(new am4charts.ValueAxis());
        valueAxis1.min = 0;
        valueAxis1.max = 100;
        valueAxis1.renderer.opposite = true;
        valueAxis1.syncWithAxis = valueAxis;

        // Create series
        function createSeries5(field, name, stacked) {
          if (field == "value2") {
            var series = chart_4_5.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "year";
            series.name = name;
            series.tooltipText = "";
            series.strokeWidth = 3;
            series.yAxis = valueAxis1;
            series.stroke = am4core.color("#fdd400");
            series.fill = am4core.color("#fdd400");
            // Set up tooltip
            series.adapter.add("tooltipText", function (ev) {
              var text = "[font-size: 12px bold]{categoryX}[/]\n"
              chart_4_5.series.each(function (item) {
                if (item.name == "수거율") {
                  text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} %\n";
                }
                else {
                  text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 톤/일\n";
                }
              });
              return text;
            });

            series.tooltip.getFillFromObject = false;
            series.tooltip.background.fill = am4core.color("#fff");
            series.tooltip.label.fill = am4core.color("#00");

            // Prevent cross-fading of tooltips
            series.tooltip.defaultState.transitionDuration = 0;
            series.tooltip.hiddenState.transitionDuration = 0;

            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.radius = 5;
          }
          else {
            var series = chart_4_5.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "year";
            series.name = name;
            series.yAxis = valueAxis;
            // Set up tooltip
            series.adapter.add("tooltipText", function (ev) {
              var text = "[font-size: 12px bold]{categoryX}[/]\n"
              chart_4_5.series.each(function (item) {
                if (item.name == "수거율") {
                  text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} %\n";
                }
                else {
                  text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 톤/일\n";
                }
              });
              return text;
            });
            series.tooltip.getFillFromObject = false;
            series.tooltip.background.fill = am4core.color("#fff");
            series.tooltip.label.fill = am4core.color("#00");
            series.stacked = stacked;
            series.columns.template.width = am4core.percent(60);
          }

        }
        createSeries5("value1", "쓰레기배출량", false);
        createSeries5("value2", "수거율", false);

        // Add legend
        chart_4_5.legend = new am4charts.Legend();

        // Add cursor
        chart_4_5.cursor = new am4charts.XYCursor();
        chart_4_5.cursor.maxTooltipDistance = 0;
        chart_4_5.cursor.behavior = 'none';
        chart_4_5.logo.height = -15000;
      });
    }


    if (val == 'chart_box_04_06') {
      am4core.ready(function () {

        am4core.useTheme(am4themes_animated);
        //
        // 4-6. 녹지현황(면적)_chartdiv28 //
        //

        chart_4_6 = am4core.create("chart_04_06", am4charts.XYChart);
        chart_4_6.hiddenState.properties.opacity = 0; // this creates initial fade-in

        // Add data
        chart_4_6.data = [{
          "year": "2015",
          "value1": 905.8,
          "value2": 82.2,
          "value3": 31.5,
          "value4": 1019.5
        }, {
          "year": "2016",
          "value1": 905.8,
          "value2": 68.7,
          "value3": 31.5,
          "value4": 1006
        }, {
          "year": "2017",
          "value1": 890.4,
          "value2": 68.7,
          "value3": 31.5,
          "value4": 990.6
        }, {
          "year": "2018",
          "value1": 942.3,
          "value2": 89.6,
          "value3": 65.5,
          "value4": 1097.4
        }, {
          "year": "2019",
          "value1": 942.3,
          "value2": 89.6,
          "value3": 65.5,
          "value4": 1097.4
        }, {
          "year": "2020",
          "value1": 940.3,
          "value2": 89.6,
          "value3": 65.5,
          "value4": 1098.3
        }, {
          "year": "2021",
          "value1": 942.3,
          "value2": 90.5,
          "value3": 65.6,
          "value4": 1098.4
        }];

        /* Create axes */
        categoryAxis = chart_4_6.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.minGridDistance = 30;

        /* Create value axis */
        valueAxis = chart_4_6.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.max = 1200;
        valueAxis.renderer.opposite = true;
        /* Create value axis */
        valueAxis1 = chart_4_6.yAxes.push(new am4charts.ValueAxis());
        valueAxis1.min = 0;
        valueAxis1.max = 1200;

        valueAxis1.syncWithAxis = valueAxis;

        // Create series
        function createSeries6(field, name, stacked) {
          if (field == "value4") {
            var series = chart_4_6.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "year";
            series.name = name;
            series.tooltipText = "";
            series.strokeWidth = 3;
            series.yAxis = valueAxis;
            series.stroke = am4core.color("#fdd400");
            series.fill = am4core.color("#fdd400");
            // Set up tooltip
            series.adapter.add("tooltipText", function (ev) {
              var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
              chart_4_6.series.each(function (item) {
                if (item.name == "총계") {
                  text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 천㎡\n";
                }
                else {
                  text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 천㎡\n";
                }
              });
              return text;
            });

            series.tooltip.getFillFromObject = false;
            series.tooltip.background.fill = am4core.color("#fff");
            series.tooltip.label.fill = am4core.color("#00");

            // Prevent cross-fading of tooltips
            series.tooltip.defaultState.transitionDuration = 0;
            series.tooltip.hiddenState.transitionDuration = 0;

            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.radius = 5;
          }
          else {
            var series = chart_4_6.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "year";
            series.name = name;
            series.yAxis = valueAxis1;
            // Set up tooltip
            series.adapter.add("tooltipText", function (ev) {
              var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
              chart_4_6.series.each(function (item) {
                if (item.name == "총계") {
                  text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 천㎡\n";
                }
                else {
                  text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 천㎡\n";
                }
              });
              return text;
            });
            series.tooltip.getFillFromObject = false;
            series.tooltip.background.fill = am4core.color("#fff");
            series.tooltip.label.fill = am4core.color("#00");
            series.stacked = stacked;
            series.columns.template.width = am4core.percent(60);
          }
        }

        createSeries6("value1", "완충녹지", true);
        createSeries6("value2", "경관녹지", true);
        createSeries6("value3", "연결녹지", true);
        createSeries6("value4", "총계", false);

        // Add legend
        chart_4_6.legend = new am4charts.Legend();

        // Add cursor
        chart_4_6.cursor = new am4charts.XYCursor();
        chart_4_6.cursor.maxTooltipDistance = 0;
        chart_4_6.cursor.behavior = 'none';
        chart_4_6.logo.height = -15000;
      });
    }
  }

  $(document).ready(function () {
    var first = 'chart_box1';
    chart_drawing(first);
  });