jQuery(function () {
  $('.visual_menu_btn_area button').click(function () {
    var tab_id_2dep = $(this).attr('data-tab');

    $('.visual_menu_btn_area.dep2 button').removeClass('act');
    // $('.chart_wrap').removeClass('act');

    $(this).addClass('act');
    $("#" + tab_id_2dep).addClass('act');

    chart_drawing(tab_id_2dep);
  });

  $(document).ready(function () {
    var first = 'chart_box_01_01';
    chart_drawing(first);
  });
});

function chart_drawing(val) {

  if (val == 'chart_box_01_01') {
    am4core.ready(function () {
      am4core.useTheme(am4themes_animated);

      /**
       * 인구/가구 Chart 영역
       */

      //
      // 1-1-1. 주민등록인구 현황_pie_chartdiv1_1 //
      //
      // Create chart instance
      chart = am4core.create("chart_01_01_01", am4charts.PieChart);

      // Add data
      chart.data = [{
        "sex": "남자",
        "litres": 316650
      }, {
        "sex": "여자",
        "litres": 327739
      }];

      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "sex";
      pieSeries.slices.template.tooltipText = "[font-size: 14px bold]{category}: [font-size: 14px]{value} 명";

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;

      chart.hiddenState.properties.radius = am4core.percent(0);

      // Add cursor
      chart.cursor = new am4charts.XYCursor();

      chart.logo.height = -15000;

      //
      // 1-1-2. 주민등록인구 현황_bar+line_chartdiv1_2 //
      //

      // am4core.useTheme(am4themes_kelly);
      am4core.useTheme(am4themes_animated);

      // Create chart instance
      chart_7 = am4core.create("chart_01_01_02", am4charts.XYChart);

      // Add data
      chart_7.data = [{
        "year": "2020",
        "man": 322252,
        "woman": 332514,
        "units": 654766
      }, {
        "year": "2021",
        "man": 323427,
        "woman": 333842,
        "units": 657269
      }, {
        "year": "2022",
        "man": 320265,
        "woman": 331230,
        "units": 651495
      }, {
        "year": "2023.04",
        "man": 318054,
        "woman": 329252,
        "units": 647306
      }, {
        "year": "2023.05",
        "man": 317758,
        "woman": 328970,
        "units": 646728
      }, {
        "year": "2023.06",
        "man": 317457,
        "woman": 328693,
        "units": 646150
      }, {
        "year": "2023.07",
        "man": 317196,
        "woman": 328404,
        "units": 645600
      }, {
        "year": "2023.08",
        "man": 316872,
        "woman": 328037,
        "units": 644909
      }, {
        "year": "2023.09",
        "man": 316650,
        "woman": 327739,
        "units": 644389
      },];

      // Create axes
      categoryAxis = chart_7.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.autoGridCount = false;
      categoryAxis.labelFrequency = 0;
      categoryAxis.dataFields.category = "year";
      categoryAxis.gridPosition = "start";
      categoryAxis.labelRotation = 45;
      // categoryAxis.gridCount = 11;
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 20;
      categoryAxis.renderer.cellStartLocation = 0.1;
      categoryAxis.renderer.cellEndLocation = 0.9;

      // First value axis
      valueAxis = chart_7.yAxes.push(new am4charts.ValueAxis());
      valueAxis.autoGridCount = false;
      valueAxis.gridCount = 10;
      valueAxis.min = 300000;
      valueAxis.max = 400000;
      // Second value axis
      valueAxis2 = chart_7.yAxes.push(new am4charts.ValueAxis());
      valueAxis2.autoGridCount = false;
      valueAxis2.renderer.opposite = true;
      valueAxis2.min = 600000;
      valueAxis2.max = 700000
      // Create series
      function createSeries1(field, name, stacked) {
        if (field == "units") {
          var series = chart_7.series.push(new am4charts.LineSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          series.tooltipText = "";
          series.strokeWidth = 3;
          series.yAxis = valueAxis2;
          series.stroke = am4core.color("#fdd400");
          series.fill = am4core.color("#fdd400");
          // Set up tooltip
          series.adapter.add("tooltipText", function (ev) {
            var text = "[font-size: 14px bold]{categoryX} 기준[/]\n"
            chart_7.series.each(function (item) {
              if (item.name == "총인구") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 14px bold]" + item.name + ": [font-size: 14px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 14px bold]" + item.name + ": [font-size: 14px]{" + item.dataFields.valueY + "}\n";
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
        } else {
          var series = chart_7.series.push(new am4charts.ColumnSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          // Set up tooltip
          series.adapter.add("tooltipText", function (ev) {
            var text = "[font-size: 14px bold]{categoryX} 기준[/]\n"
            chart_7.series.each(function (item) {
              if (item.name == "총인구") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 14px bold]" + item.name + ": [font-size: 14px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 14px bold]" + item.name + ": [font-size: 14px]{" + item.dataFields.valueY + "}\n";
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

      createSeries1("man", "남자", false);
      createSeries1("woman", "여자", false);
      createSeries1("units", "총인구", false);

      // Add legend
      chart_7.legend = new am4charts.Legend();

      // Add cursor
      chart_7.cursor = new am4charts.XYCursor();
      chart_7.cursor.maxTooltipDistance = 0;
      chart_7.cursor.behavior = 'none';
      chart_7.logo.height = -15000;

    });
  }

  if (val == 'chart_box_01_02') {
    am4core.ready(function () {
      am4core.useTheme(am4themes_animated);

      //
      // 1-2. 연도별 인구 및 세대_chart_01_02 (chartdiv2) //
      //

      // Create chart instance
      chart_2 = am4core.create("chart_01_02", am4charts.XYChart);

      // Add data
      chart_2.data = [{
        "year": "2019",
        "value1": 663158,
        "value2": 273753,
        "value3": 2.42
      }, {
        "year": "2020",
        "value1": 666548,
        "value2": 283334,
        "value3": 2.35
      }, {
        "year": "2021",
        "value1": 657269,
        "value2": 293207,
        "value3": 2.24
      }, {
        "year": "2022",
        "value1": 651495,
        "value2": 296241,
        "value3": 2.20
      }, {
        "year": "2023.04",
        "value1": 647306,
        "value2": 296420,
        "value3": 2.18
      }, {
        "year": "2023.05",
        "value1": 646728,
        "value2": 296637,
        "value3": 2.18
      }, {
        "year": "2023.06",
        "value1": 646150,
        "value2": 296691,
        "value3": 2.18
      }, {
        "year": "2023.07",
        "value1": 645600,
        "value2": 296819,
        "value3": 2.18
      }, {
        "year": "2023.08",
        "value1": 644909,
        "value2": 296807,
        "value3": 2.17
      }, {
        "year": "2023.09",
        "value1": 644389,
        "value2": 296785,
        "value3": 2.17
      }];
      // Create axes
      categoryAxis = chart_2.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.autoGridCount = false;
      categoryAxis.labelFrequency = 0;
      categoryAxis.dataFields.category = "year";

      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 20;


      // First value axis
      valueAxis = chart_2.yAxes.push(new am4charts.ValueAxis());
      valueAxis.autoGridCount = false;
      valueAxis.gridCount = 10;
      valueAxis.min = 0;
      valueAxis.max = 650000;
      // Second value axis
      valueAxis2 = chart_2.yAxes.push(new am4charts.ValueAxis());
      valueAxis2.autoGridCount = false;
      valueAxis2.renderer.opposite = true;
      valueAxis2.min = 1.50;
      valueAxis2.max = 2.50;
      // Create series
      function createSeries1(field, name, stacked) {
        if (field == "value3") {
          var series = chart_2.series.push(new am4charts.LineSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          series.tooltipText = "";
          series.strokeWidth = 3;
          series.yAxis = valueAxis2;
          series.stroke = am4core.color("#fdd400");
          series.fill = am4core.color("#fdd400");
          // Set up tooltip
          series.adapter.add("tooltipText", function (ev) {
            var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
            chart_2.series.each(function (item) {
              if (item.name == "세대당 인구") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
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
        } else {
          var series = chart_2.series.push(new am4charts.ColumnSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          // Set up tooltip
          series.adapter.add("tooltipText", function (ev) {
            var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
            chart_2.series.each(function (item) {
              if (item.name == "세대당 인구") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
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

      createSeries1("value1", "인구", false);
      createSeries1("value2", "세대", false);
      createSeries1("value3", "세대당 인구", false);

      // Add legend
      chart_2.legend = new am4charts.Legend();

      // Add cursor
      chart_2.cursor = new am4charts.XYCursor();
      chart_2.cursor.maxTooltipDistance = 0;
      chart_2.cursor.behavior = 'none';
      chart_2.logo.height = -15000;

      // Themes end
    });
  }
  if (val == 'chart_box_01_03') {
    am4core.ready(function () {
      am4core.useTheme(am4themes_animated);

      //
      // 1-3. 동별 세대 및 인구_chartdiv3 //
      //    

      // Create chart instance
      chart_3 = am4core.create("chart_01_03", am4charts.XYChart);

      // Add data
      chart_3.data = [{
        "year": "중앙동",
        "series1": 9795,
        "series2": 4973,
        "series3": 4868,
        "series4": 4927,
        "series5": 47.7,
      }, {
        "year": "풍남동",
        "series1": 3738,
        "series2": 2336,
        "series3": 1857,
        "series4": 1881,
        "series5": 56.2,
      }, {
        "year": "노송동",
        "series1": 10704,
        "series2": 5620,
        "series3": 5231,
        "series4": 5473,
        "series5": 51.1,
      }, {
        "year": "완산동",
        "series1": 5053,
        "series2": 2664,
        "series3": 2479,
        "series4": 2574,
        "series5": 51.3,
      }, {
        "year": "동서학동",
        "series1": 5983,
        "series2": 3168,
        "series3": 2931,
        "series4": 3052,
        "series5": 52.8,
      }, {
        "year": "서서학동",
        "series1": 8114,
        "series2": 4380,
        "series3": 3932,
        "series4": 4182,
        "series5": 52.5,
      }, {
        "year": "중화산1동",
        "series1": 13734,
        "series2": 6357,
        "series3": 6550,
        "series4": 7184,
        "series5": 46.1,
      }, {
        "year": "중화산2동",
        "series1": 19204,
        "series2": 9241,
        "series3": 9641,
        "series4": 9563,
        "series5": 41.1,
      }, {
        "year": "서신동",
        "series1": 39613,
        "series2": 17545,
        "series3": 19235,
        "series4": 20378,
        "series5": 41.9,
      }, {
        "year": "평화1동",
        "series1": 12143,
        "series2": 7081,
        "series3": 5830,
        "series4": 6313,
        "series5": 52.3,
      }, {
        "year": "평화2동",
        "series1": 43849,
        "series2": 18611,
        "series3": 21045,
        "series4": 22804,
        "series5": 44.2,
      }, {
        "year": "삼천1동",
        "series1": 11667,
        "series2": 5328,
        "series3": 5658,
        "series4": 6008,
        "series5": 46.4,
      }, {
        "year": "삼천2동",
        "series1": 12654,
        "series2": 6119,
        "series3": 6075,
        "series4": 6579,
        "series5": 47.9,
      }, {
        "year": "삼천3동",
        "series1": 20968,
        "series2": 9078,
        "series3": 10090,
        "series4": 10878,
        "series5": 45.5,
      }, {
        "year": "효자1동",
        "series1": 13039,
        "series2": 5956,
        "series3": 6251,
        "series4": 6788,
        "series5": 46.7,
      }, {
        "year": "효자2동",
        "series1": 9293,
        "series2": 4480,
        "series3": 4438,
        "series4": 4855,
        "series5": 48,
      }, {
        "year": "효자3동",
        "series1": 14047,
        "series2": 5951,
        "series3": 6569,
        "series4": 7478,
        "series5": 46.4,
      }, {
        "year": "효자4동",
        "series1": 68603,
        "series2": 16549,
        "series3": 18859,
        "series4": 19744,
        "series5": 38.9,
      }, {
        "year": "효자5동",
        "series1": 36130,
        "series2": 18215,
        "series3": 18074,
        "series4": 18056,
        "series5": 38,
      }, {
        "year": "진북동",
        "series1": 13165,
        "series2": 6785,
        "series3": 6391,
        "series4": 6774,
        "series5": 52,
      }, {
        "year": "인후1동",
        "series1": 17460,
        "series2": 7443,
        "series3": 8383,
        "series4": 9077,
        "series5": 44.7,
      }, {
        "year": "인후2동",
        "series1": 10525,
        "series2": 5786,
        "series3": 5211,
        "series4": 5314,
        "series5": 49.8,
      }, {
        "year": "인후3동",
        "series1": 30613,
        "series2": 14494,
        "series3": 15098,
        "series4": 15515,
        "series5": 42.2,
      }, {
        "year": "덕진동",
        "series1": 20591,
        "series2": 10853,
        "series3": 10408,
        "series4": 10183,
        "series5": 41.1,
      }, {
        "year": "금암1동",
        "series1": 7905,
        "series2": 5629,
        "series3": 4304,
        "series4": 3601,
        "series5": 42.7,
      }, {
        "year": "금암2동",
        "series1": 9433,
        "series2": 5100,
        "series3": 4597,
        "series4": 4836,
        "series5": 49.5,
      }, {
        "year": "팔복동",
        "series1": 7640,
        "series2": 4649,
        "series3": 4161,
        "series4": 3479,
        "series5": 50.4,
      }, {
        "year": "우아1동",
        "series1": 12203,
        "series2": 5975,
        "series3": 6073,
        "series4": 6130,
        "series5": 44.3,
      }, {
        "year": "우아2동",
        "series1": 14023,
        "series2": 7647,
        "series3": 7327,
        "series4": 6696,
        "series5": 46.1,
      }, {
        "year": "호성동",
        "series1": 18816,
        "series2": 7881,
        "series3": 8931,
        "series4": 9885,
        "series5": 45.2,
      }, {
        "year": "송천1동",
        "series1": 64570,
        "series2": 24100,
        "series3": 31943,
        "series4": 32627,
        "series5": 37.1,
      }, {
        "year": "송천2동",
        "series1": 25023,
        "series2": 10357,
        "series3": 12189,
        "series4": 12834,
        "series5": 43.6,
      }, {
        "year": "조촌동",
        "series1": 12129,
        "series2": 6257,
        "series3": 6221,
        "series4": 5908,
        "series5": 46.9,
      }, {
        "year": "여의동",
        "series1": 16168,
        "series2": 7206,
        "series3": 8195,
        "series4": 7973,
        "series5": 44.3,
      }, {
        "year": "혁신동",
        "series1": 35794,
        "series2": 12981,
        "series3": 17605,
        "series4": 18189,
        "series5": 34.6,
      }];

      // Create axes
      categoryAxis = chart_3.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 20;
      categoryAxis.renderer.cellStartLocation = 0.1;
      categoryAxis.renderer.cellEndLocation = 0.9;

      // First value axis
      valueAxis = chart_3.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.max = 70000;
      
      // Second value axis
      valueAxis2 = chart_3.yAxes.push(new am4charts.ValueAxis());
      valueAxis2.autoGridCount = false;
      valueAxis2.renderer.opposite = true;
      valueAxis2.min = 0;
      valueAxis2.max = 70;

      // Create series
      function createSeries3(field, name, stacked) {

        if (field == "series5" || field == "series3"|| field == "series4") {
          var series = chart_3.series.push(new am4charts.LineSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          series.tooltipText = "";
          series.strokeWidth = 3;
          series.yAxis = valueAxis2;
          series.stroke = am4core.color("#fdd400");
          series.fill = am4core.color("#fdd400");
          // Set up tooltip
          series.adapter.add("tooltipText", function (ev) {
            var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
            chart_3.series.each(function (item) {
              if (item.name == "평균연령") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
              } else if (item.name == "남자 인구수") {
                text += "[" + item.stroke.hex + "]◐[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
              } else if (item.name == "여자 인구수") {
                text += "[" + item.stroke.hex + "]◑[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
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
          
        } else {
          series = chart_3.series.push(new am4charts.ColumnSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          // Set up tooltip
          series.adapter.add("tooltipText", function (ev) {
            var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
            chart_3.series.each(function (item) {
              if (item.name == "평균연령") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
              } else if (item.name == "남자 인구수") {
                text += "[" + item.stroke.hex + "]◐[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
              } else if (item.name == "여자 인구수") {
                text += "[" + item.stroke.hex + "]◑[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
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

          // series.columns.tem
          series.stacked = stacked;
          series.columns.template.width = am4core.percent(50);
        }


      }

      createSeries3("series1", "인구", false);
      createSeries3("series2", "세대", false);
      createSeries3("series5", "평균연령", false);
      createSeries3("series3", "남자 인구수", false);
      createSeries3("series4", "여자 인구수", false);

      // Add legend
      chart_3.legend = new am4charts.Legend();
      // Add cursor
      chart_3.cursor = new am4charts.XYCursor();
      chart_3.cursor.maxTooltipDistance = 0;
      chart_3.cursor.behavior = 'none';
      chart_3.logo.height = -15000;
    });
  }


  if (val == 'chart_box_01_04') {
    am4core.ready(function () {
      am4core.useTheme(am4themes_animated);

      //
      // 1-4. 연령계층별 인구_chartdiv4 //
      //    

      // Create chart instance
      chart_4 = am4core.create("chart_01_04", am4charts.XYChart);

      // Add data
      chart_4.data = [{
        "year": "2020",
        "series1": 88444,
        "series2": 471049,
        "series3": 98252,
        "series4": 41.7
      }, {
        "year": "2021",
        "series1": 86089,
        "series2": 468195,
        "series3": 98891,
        "series4": 42.2
      }, {
        "year": "2022",
        "series1": 82176,
        "series2": 461962,
        "series3": 107357,
        "series4": 42.8
      }, {
        "year": "2023.04",
        "series1": 80383,
        "series2": 458403,
        "series3": 108520,
        "series4": 43.1
      }, {
        "year": "2023.05",
        "series1": 79982,
        "series2": 457924,
        "series3": 108822,
        "series4": 43.1
      }, {
        "year": "2023.06",
        "series1": 79708,
        "series2": 457315,
        "series3": 109127,
        "series4": 43.2
      }, {
        "year": "2023.07",
        "series1": 79341,
        "series2": 456790,
        "series3": 109469,
        "series4": 43.2
      }, {
        "year": "2023.08",
        "series1": 79003,
        "series2": 455988,
        "series3": 109918,
        "series4": 43.3
      }, {
        "year": "2023.09",
        "series1": 78635,
        "series2": 455417,
        "series3": 110337,
        "series4": 43.3
      },];

      // Create axes
      categoryAxis = chart_4.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 20;


      // First value axis
      valueAxis = chart_4.yAxes.push(new am4charts.ValueAxis());
      valueAxis.max = 650000;
      valueAxis.min = 0;

      // Second value axis
      valueAxis2 = chart_4.yAxes.push(new am4charts.ValueAxis());
      // valueAxis2.autoGridCount = false;
      valueAxis2.renderer.opposite = true;
      valueAxis2.min = 37.50;
      valueAxis2.max = 44.00;

      // Create series
      function createSeries4(field, name, stacked) {
        if (field == "series4") {
          var series = chart_4.series.push(new am4charts.LineSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          series.tooltipText = "";
          series.strokeWidth = 3;
          series.yAxis = valueAxis2;
          series.stroke = am4core.color("#fdd400");
          series.fill = am4core.color("#fdd400");
          // Set up tooltip
          series.adapter.add("tooltipText", function (ev) {
            var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
            chart_4.series.each(function (item) {
              if (item.name == "평균연령") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
              }
            });
            return text;
          });

          series.tooltip.getFillFromObject = false;
          series.tooltip.background.fill = am4core.color("#fff");
          series.tooltip.label.fill = am4core.color("#00");
          series.stacked = stacked;

          // Prevent cross-fading of tooltips
          series.tooltip.defaultState.transitionDuration = 0;
          series.tooltip.hiddenState.transitionDuration = 0;

          var bullet = series.bullets.push(new am4charts.CircleBullet());
          bullet.circle.radius = 5;

        } else {

          var series = chart_4.series.push(new am4charts.ColumnSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          // Set up tooltip
          series.adapter.add("tooltipText", function (ev) {
            var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
            chart_4.series.each(function (item) {
              if (item.name == "평균연령") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
              }
            });
            return text;
          });


          series.tooltip.getFillFromObject = false;
          series.tooltip.background.fill = am4core.color("#fff");
          series.tooltip.label.fill = am4core.color("#00");
          series.stacked = stacked;
          // series.columns.template.width = am4core.percent(60);

        }	
      }

      createSeries4("series1", "0~14세", true);
      createSeries4("series2", "15~64세", true);
      createSeries4("series3", "65세 이상", true);
      createSeries4("series4", "평균연령", true);

      // Add legend
      chart_4.legend = new am4charts.Legend();

      // Add cursor
      chart_4.cursor = new am4charts.XYCursor();
      chart_4.cursor.maxTooltipDistance = 0;
      chart_4.cursor.behavior = 'none';

      chart_4.logo.height = -15000;

      // Themes end
    });
  }


  if (val == 'chart_box_01_05') {
    am4core.ready(function () {

      //
      // 1-5. 인구동향(출생,사망,혼인,이혼)_chartdiv5 //
      //    
      am4core.useTheme(am4themes_animated);

      // Create chart instance
      chart_5 = am4core.create("chart_01_05", am4charts.XYChart);

      // Add data
      chart_5.data = [{
        "year": "2016",
        "value1": 4797,
        "value2": 3190,
        "value3": 3084,
        "value4": 1306
      }, {
        "year": "2017",
        "value1": 4298,
        "value2": 3225,
        "value3": 2911,
        "value4": 1141
      }, {
        "year": "2018",
        "value1": 3827,
        "value2": 3356,
        "value3": 2944,
        "value4": 1251
      }, {
        "year": "2019",
        "value1": 3502,
        "value2": 3374,
        "value3": 2828,
        "value4": 1290
      }, {
        "year": "2020",
        "value1": 3207,
        "value2": 3403,
        "value3": 2447,
        "value4": 1216
      }, {
        "year": "2021",
        "value1": 3134,
        "value2": 3416,
        "value3": 2185,
        "value4": 1201
      }, {
        "year": "2022",
        "value1": 2956,
        "value2": 4201,
        "value3": 2299,
        "value4": 1062
      }
      ];

      // Create axes
      categoryAxis = chart_5.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.autoGridCount = false;
      categoryAxis.labelFrequency = 0;
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.grid.template.location = 0.5;

      valueAxis = chart_5.yAxes.push(new am4charts.ValueAxis());
      valueAxis.autoGridCount = false;
      valueAxis.boldLabels = true;

      // Create series
      function createSeries5(field, name) {
        var series = chart_5.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "year";
        series.name = name;
        series.tooltipText = "";
        series.strokeWidth = 3;

        // Set up tooltip
        series.adapter.add("tooltipText", function (ev) {
          var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
          chart_5.series.each(function (item) {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
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

      createSeries5("value1", "출생");
      createSeries5("value2", "사망");
      createSeries5("value3", "혼인");
      createSeries5("value4", "이혼");

      // Add cursor
      chart_5.cursor = new am4charts.XYCursor();
      chart_5.cursor.maxTooltipDistance = 0;
      chart_5.cursor.behavior = 'none';
      // Add legend
      chart_5.legend = new am4charts.Legend();

      chart_5.logo.height = -15000;

      // Themes end
    });
  }
  if (val == 'chart_box_01_06') {
    am4core.ready(function () {
      //
      // 1-6. 연도별 인구이동_chartdiv6 //
      //       

      am4core.useTheme(am4themes_animated);

      // Create chart instance
      chart_6 = am4core.create("chart_01_06", am4charts.XYChart);

      // Add data
      chart_6.data = [{
        "year": "2010",
        "value1": 115287,
        "value2": 115183
      }, {
        "year": "2011",
        "value1": 111784,
        "value2": 110454
      }, {
        "year": "2012",
        "value1": 97671,
        "value2": 97561
      }, {
        "year": "2013",
        "value1": 96858,
        "value2": 98238
      }, {
        "year": "2014",
        "value1": 107301,
        "value2": 106953
      }, {
        "year": "2015",
        "value1": 98572,
        "value2": 101573
      }, {
        "year": "2016",
        "value1": 95810,
        "value2": 98234
      }, {
        "year": "2017",
        "value1": 84966,
        "value2": 88848
      }, {
        "year": "2018",
        "value1": 102608,
        "value2": 101110
      }, {
        "year": "2019",
        "value1": 99640,
        "value2": 96550
      }, {
        "year": "2020",
        "value1": 107423,
        "value2": 104277
      }, {
        "year": "2021",
        "value1": 93521,
        "value2": 92637
      }, {
        "year": "2022",
        "value1": 84656,
        "value2": 80500
      }];

      // Modify chart's colors
      chart_6.colors.list = [am4core.color("#845EC2"), am4core.color("#D65DB1"), am4core.color("#FF6F91"), am4core.color("#FF9671"), am4core.color("#FFC75F"), am4core.color("#F9F871"),];

      // Create axes
      categoryAxis = chart_6.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.autoGridCount = false;
      categoryAxis.labelFrequency = 0;
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.grid.template.location = 0.5;

      valueAxis = chart_6.yAxes.push(new am4charts.ValueAxis());
      valueAxis.autoGridCount = false;
      valueAxis.boldLabels = true;
      valueAxis.gridCount = 4;

      // Create series
      function createSeries6(field, name) {
        var series = chart_6.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "year";
        series.name = name;
        series.tooltipText = "";
        series.strokeWidth = 3;

        // Set up tooltip
        series.adapter.add("tooltipText", function (ev) {
          var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
          chart_6.series.each(function (item) {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + ": [font-size: 18px]{" + item.dataFields.valueY + "}\n";
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

      createSeries6("value1", "전입");
      createSeries6("value2", "전출");

      // Add cursor
      chart_6.cursor = new am4charts.XYCursor();
      chart_6.cursor.maxTooltipDistance = 0;
      chart_6.cursor.behavior = 'none';
      // Add legend
      chart_6.legend = new am4charts.Legend();

      chart_6.logo.height = -15000;

    });
  }
  if (val == 'chart_box_01_07') {
    am4core.ready(function () {
      //
      // 1-7. 학교/학생 수_chartdiv6 //
      //       

      am4core.useTheme(am4themes_animated);

      // Create chart instance
      chart_7 = am4core.create("chart_01_07", am4charts.XYChart);

      // Add data
      chart_7.data = [{
        "year": "2018",
        "value1": 279,
        "value2": 10538,
        "value3": 38967,
        "value4": 20582,
        "value5": 25305,
        "value6": 41839,
        "value7": 137231,
      }, {
        "year": "2019",
        "value1": 275,
        "value2": 9293,
        "value3": 39670,
        "value4": 19684,
        "value5": 23220,
        "value6": 42400,
        "value7": 134267,
      }, {
        "year": "2020",
        "value1": 273,
        "value2": 9171,
        "value3": 39321,
        "value4": 19850,
        "value5": 21982,
        "value6": 42193,
        "value7": 132517,
      }, {
        "year": "2021",
        "value1": 275,
        "value2": 8961,
        "value3": 39216,
        "value4": 20236,
        "value5": 21178,
        "value6": 42004,
        "value7": 131595,
      }, {
        "year": "2022",
        "value1": 274,
        "value2": 8452,
        "value3": 39311,
        "value4": 20221,
        "value5": 20274,
        "value6": 41188,
        "value7": 129436,
      },];

      /* Create axes */
      categoryAxis = chart_7.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.minGridDistance = 30;

      /* Create value axis */
      valueAxis = chart_7.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 270;
      valueAxis.max = 280;
      valueAxis.renderer.minGridDistance = 1;
      valueAxis.renderer.opposite = true;
      valueAxis.renderer.grid.template.disabled = true;
      /* Create value axis */
      valueAxis1 = chart_7.yAxes.push(new am4charts.ValueAxis());
      valueAxis1.min = 0;
      valueAxis1.max = 160000;
      valueAxis1.renderer.minGridDistance = 20;

      // Create series
      function createSeries7(field, name, stacked) {
        if (field == "value1") {
          var series = chart_7
            .series
            .push(new am4charts.LineSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          series.tooltipText = "";
          series.strokeWidth = 3;
          series.yAxis = valueAxis;
          series.stroke = am4core.color("#fdd400");
          series.fill = am4core.color("#fdd400");
          // Set up tooltip
          series
            .adapter
            .add("tooltipText", function (ev) {
              var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
              chart_7
                .series
                .each(function (item) {
                  if (item.name == "학교 수") {
                    text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-" +
                      "size: 18px]{" + item.dataFields.valueY + "}\n";
                  } else {
                    text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-" +
                      "size: 18px]{" + item.dataFields.valueY + "}\n";
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

          var bullet = series
            .bullets
            .push(new am4charts.CircleBullet());
          bullet.circle.radius = 5;
        } else if (field == "value7") {
          var series = chart_7
            .series
            .push(new am4charts.LineSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          series.tooltipText = "";
          series.strokeWidth = 3;
          series.yAxis = valueAxis1;
          series.stroke = am4core.color("#6c89cc");
          series.fill = am4core.color("#6c89cc");
          // Set up tooltip
          series
            .adapter
            .add("tooltipText", function (ev) {
              var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
              chart_7
                .series
                .each(function (item) {
                  if (item.name == "학생수 총계") {
                    text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-" +
                      "size: 18px]{" + item.dataFields.valueY + "}\n";
                  } else {
                    text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-" +
                      "size: 18px]{" + item.dataFields.valueY + "}\n";
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

          var bullet = series
            .bullets
            .push(new am4charts.CircleBullet());
          bullet.circle.radius = 5;
        } else {
          var series = chart_7
            .series
            .push(new am4charts.ColumnSeries());
          series.dataFields.valueY = field;
          series.dataFields.categoryX = "year";
          series.name = name;
          series.yAxis = valueAxis1;
          // Set up tooltip
          series
            .adapter
            .add("tooltipText", function (ev) {
              var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
              chart_7
                .series
                .each(function (item) {
                  if (item.name == "총계") {
                    text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-" +
                      "size: 18px]{" + item.dataFields.valueY + "}\n";
                  } else {
                    text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-" +
                      "size: 18px]{" + item.dataFields.valueY + "}\n";
                  }
                });
              return text;
            });
          series.tooltip.getFillFromObject = false;
          series.tooltip.background.fill = am4core.color("#fff");
          series.tooltip.label.fill = am4core.color("#00");
          series.stacked = stacked;
          series.columns.template.width = am4core.percent(20);
        }
      }

      createSeries7("value1", "학교수", false);
      createSeries7("value2", "유치원 원아수", true);
      createSeries7("value3", "초등학교 학생수", true);
      createSeries7("value4", "중학교 학생수", true);
      createSeries7("value5", "고등학교 학생수", true);
      createSeries7("value6", "대학교 학생수", true);
      createSeries7("value7", "학생수 총계", false);

      // Add legend
      chart_7.legend = new am4charts.Legend();

      // Add cursor
      chart_7.cursor = new am4charts.XYCursor();
      chart_7.cursor.maxTooltipDistance = 0;
      chart_7.cursor.behavior = 'none';
      chart_7.logo.height = -15000;
    });
  }
}