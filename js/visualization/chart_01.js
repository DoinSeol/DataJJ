jQuery(function () {
  $('.visual_menu_btn_area button').click(function () {
    var tab_id_2dep = $(this).attr('data-tab');

    $('.visual_menu_btn_area.dep2 button').removeClass('act');
    // $('.chart_wrap').removeClass('act');

    $(this).addClass('act');
    $("#" + tab_id_2dep).addClass('act');

    chart_drawing(tab_id_2dep);

    if(tab_id_2dep == 'chart_box_02'){
      chart_drawing('chart_box_02_01');
    }
    if(tab_id_2dep == 'chart_box_03'){
      chart_drawing('chart_box_03_01');
    }
    if(tab_id_2dep == 'chart_box_04'){
      chart_drawing('chart_box_04_01');
    }
    if(tab_id_2dep == 'chart_box_05'){
      chart_drawing('chart_box_05_01');
    }
    if(tab_id_2dep == 'chart_box_06'){
      chart_drawing('chart_box_06_01');
    }
  });

  $(document).ready(function () {
    var first = 'chart_box_01_01';
    chart_drawing(first);
  });
});

function chart_drawing(val) {

/*----- 01_인구·가구 Chart 영역---------------------------------------------------------------------------*/
/* 01_01_주민등록인구현황 ------------------------------------------------------*/
  if (val == 'chart_box_01_01') {
    am4core.ready(function () {
      am4core.useTheme(am4themes_animated);

      // 1-1-1. 주민등록인구 현황_pie_chartdiv1_1 //
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

      // 1-1-2. 주민등록인구 현황_bar+line_chartdiv1_2 --------------------------------------//
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

/* 01_02_연도별 인구 및 세대 ------------------------------------------------------*/
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
            var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
            chart_2.series.each(function (item) {
              if (item.name == "세대당 인구") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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
            var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
            chart_2.series.each(function (item) {
              if (item.name == "세대당 인구") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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

/* 01_03_동별세대및인구 ------------------------------------------------------*/
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
            var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
            chart_3.series.each(function (item) {
              if (item.name == "평균연령") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
              } else if (item.name == "남자 인구수") {
                text += "[" + item.stroke.hex + "]◐[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
              } else if (item.name == "여자 인구수") {
                text += "[" + item.stroke.hex + "]◑[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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
            var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
            chart_3.series.each(function (item) {
              if (item.name == "평균연령") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
              } else if (item.name == "남자 인구수") {
                text += "[" + item.stroke.hex + "]◐[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
              } else if (item.name == "여자 인구수") {
                text += "[" + item.stroke.hex + "]◑[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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

/* 01_04_연령계층별인구 ------------------------------------------------------*/
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
            var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
            chart_4.series.each(function (item) {
              if (item.name == "평균연령") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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
            var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
            chart_4.series.each(function (item) {
              if (item.name == "평균연령") {
                text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
              } else {
                text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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

/* 01_05_인구동향(출생,사망,혼인,이혼) ------------------------------------------------------*/
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
          var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
          chart_5.series.each(function (item) {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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

/* 01_06_연도별 인구이동 ------------------------------------------------------*/
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
          var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
          chart_6.series.each(function (item) {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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

/* 01_07_학교,학생수 ------------------------------------------------------*/
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
              var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
              chart_7
                .series
                .each(function (item) {
                  if (item.name == "학교 수") {
                    text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-" +
                      "size: 18px]{" + item.dataFields.valueY + "}\n";
                  } else {
                    text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-" +
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
              var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
              chart_7
                .series
                .each(function (item) {
                  if (item.name == "학생수 총계") {
                    text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-" +
                      "size: 18px]{" + item.dataFields.valueY + "}\n";
                  } else {
                    text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-" +
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
              var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
              chart_7
                .series
                .each(function (item) {
                  if (item.name == "총계") {
                    text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-" +
                      "size: 18px]{" + item.dataFields.valueY + "}\n";
                  } else {
                    text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-" +
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



/*----- 02_보건·복지 Chart 영역---------------------------------------------------------------------------*/
/* 02_01_의료기관현황 ------------------------------------------------------*/
if(val == 'chart_box_02_01'){
  am4core.ready(function() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // 2-1. 의료기관현황_chartdiv7 //      
  chart_2_1 = am4core.create("chart_02_01", am4charts.XYChart);

  // Add data
  chart_2_1.data = [ {
    "year" : "2018",
    "value1" : 5,
    "value2" : 36,
    "value3" : 35,
    "value4" : 468,
    "value5" : 266,
    "value6" : 20,
    "value7" : 200,
    "value8" : 4,
    "value9" : 327,
    "value10" : 1361
  }, {
    "year" : "2019",
    "value1" : 5,
    "value2" : 33,
    "value3" : 35,
    "value4" : 476,
    "value5" : 272,
    "value6" : 21,
    "value7" : 198,
    "value8" : 4,
    "value9" : 327,
    "value10" : 1361
  }, {
    "year" : "2020",
    "value1" : 5,
    "value2" : 30,
    "value3" : 35,
    "value4" : 486,
    "value5" : 277,
    "value6" : 22,
    "value7" : 200,
    "value8" : 4,
    "value9" : 337,
    "value10" : 1381
  }, {
    "year" : "2021",
    "value1" : 5,
    "value2" : 30,
    "value3" : 35,
    "value4" : 497,
    "value5" : 278,
    "value6" : 21,
    "value7" : 208,
    "value8" : 4,
    "value9" : 367,
    "value10" : 1445
  }, {
    "year" : "2022 1/4",
    "value1" : 6,
    "value2" : 29,
    "value3" : 35,
    "value4" : 503,
    "value5" : 282,
    "value6" : 20,
    "value7" : 211,
    "value8" : 4,
    "value9" : 370,
    "value10" : 1460
  }, {
    "year" : "2022 2/4",
    "value1" : 6,
    "value2" : 29,
    "value3" : 35,
    "value4" : 512,
    "value5" : 282,
    "value6" : 21,
    "value7" : 210,
    "value8" : 4,
    "value9" : 380,
    "value10" : 1479

  }, {
    "year" : "2022 3/4",
    "value1" : 6,
    "value2" : 29,
    "value3" : 35,
    "value4" : 516,
    "value5" : 284,
    "value6" : 22,
    "value7" : 210,
    "value8" : 4,
    "value9" : 381,
    "value10" : 1487

  },{
    "year" : "2022 4/4",
    "value1" : 6,
    "value2" : 27,
    "value3" : 34,
    "value4" : 518,
    "value5" : 284,
    "value6" : 22,
    "value7" : 211,
    "value8" : 4,
    "value9" : 382,
    "value10" : 1488

  } ];

/* Create axes */
categoryAxis = chart_2_1.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.minGridDistance = 30;

/* Create value axis */
valueAxis = chart_2_1.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 1200;
valueAxis.renderer.opposite = true;
/* Create value axis */
valueAxis1 = chart_2_1.yAxes.push(new am4charts.ValueAxis());
valueAxis1.min = 0;
valueAxis1.max = 1200;

valueAxis1.syncWithAxis = valueAxis;

// Create series
function createSeries8(field, name, stacked) {
  if(field == "value10")
  {
    var series = chart_2_1.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.tooltipText = "";
    series.strokeWidth = 3;
    series.yAxis = valueAxis;
    series.stroke = am4core.color("#fdd400");
    series.fill = am4core.color("#fdd400");
    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_2_1.series.each(function(item) {
        if(item.name == "총계")
        {
          text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
        }          
        else
        {
          text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
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
  else
  {
    var series = chart_2_1.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.yAxis = valueAxis1;
    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_2_1.series.each(function(item) {
        if(item.name == "총계")
        {
          text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
        }          
        else
        {
          text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
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

  createSeries8("value1", "종합병원", true);
  createSeries8("value2", "병원", true);
  createSeries8("value3", "요양병원", true);
  createSeries8("value4", "의원", true);
  createSeries8("value5", "치과병의원", true);
  createSeries8("value6", "한방병원", true);
  createSeries8("value7", "한의원", true);
  createSeries8("value8", "보건소,보건진료소", true);
  createSeries8("value9", "약국", true);
  createSeries8("value10", "총계", false);

// Add legend
chart_2_1.legend = new am4charts.Legend();

// Add cursor
chart_2_1.cursor = new am4charts.XYCursor();
chart_2_1.cursor.maxTooltipDistance = 0;
chart_2_1.cursor.behavior = 'none';
chart_2_1.logo.height = -15000;
  });
}

/* 02_02_의료기관종사 의료인력 ------------------------------------------------------*/
if(val == 'chart_box_02_02'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

// 2-2. 의료기관종사 의료인력_chartdiv8 //  
chart_2_2 = am4core.create("chart_02_02", am4charts.XYChart);

// Add data
  chart_2_2.data = [ {
      "year" : "2018",
      "value1" : 1712,
      "value2" : 424,
      "value3" : 377,
      "value4" : 583,
      "value5" : 3441,
      "value6" : 3951,
      "value7" : 2632,
      "value8" : 149,
      "value9" : 13269
    }, {
      "year" : "2019",
      "value1" : 1761,
      "value2" : 431,
      "value3" : 384,
      "value4" : 615,
      "value5" : 3740,
      "value6" : 4048,
      "value7" : 2741,
      "value8" : 147,
      "value9" : 13867
    }, {
      "year" : "2020",
      "value1" : 1761,
      "value2" : 431,
      "value3" : 384,
      "value4" : 615,
      "value5" : 3822,
      "value6" : 4061,
      "value7" : 2820,
      "value8" : 160,
      "value9" : 14054
    }, {
      "year" : "2021",
      "value1" : 1788,
      "value2" : 448,
      "value3" : 395,
      "value4" : 622,
      "value5" : 4149,
      "value6" : 4129,
      "value7" : 2890,
      "value8" : 158,
      "value9" : 14579
    }, {
      "year" : "2022 1/4",
      "value1" : 1805,
      "value2" : 456,
      "value3" : 398,
      "value4" : 630,
      "value5" : 4245,
      "value6" : 4081,
      "value7" : 2930,
      "value8" : 160,
      "value9" : 14705
    }, {
      "year" : "2022 2/4",
      "value1" : 1835,
      "value2" : 464,
      "value3" : 393,
      "value4" : 646,
      "value5" : 4275,
      "value6" : 4120,
      "value7" : 2944,
      "value8" : 162,
      "value9" : 14839
  }, {
      "year" : "2022 3/4",
      "value1" : 1833,
      "value2" : 463,
      "value3" : 392,
      "value4" : 654,
      "value5" : 4286,
      "value6" : 4135,
      "value7" : 2958,
      "value8" : 162,
      "value9" : 14883
  },{
      "year" : "2022 4/4",
      "value1" : 1820,
      "value2" : 464,
      "value3" : 391,
      "value4" : 650,
      "value5" : 4312,
      "value6" : 4117,
      "value7" : 3011,
      "value8" : 156,
      "value9" : 14921
  } ];

  /* Create axes */
  categoryAxis = chart_2_2.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.minGridDistance = 30;

  /* Create value axis */
  valueAxis = chart_2_2.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 16000;
  valueAxis.renderer.opposite = true;
  /* Create value axis */
  valueAxis1 = chart_2_2.yAxes.push(new am4charts.ValueAxis());
  valueAxis1.min = 0;
  valueAxis1.max = 16000;

  valueAxis1.syncWithAxis = valueAxis;

  // Create series
  function createSeries16(field, name, stacked) {
    if(field == "value9")
    {
      var series = chart_2_2.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.tooltipText = "";
      series.strokeWidth = 3;
      series.yAxis = valueAxis;
      series.stroke = am4core.color("#fdd400");
      series.fill = am4core.color("#fdd400");
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
        chart_2_2.series.each(function(item) {
          if(item.name == "총계")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
          }          
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
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
    else
    {
      var series = chart_2_2.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.yAxis = valueAxis1;
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
        chart_2_2.series.each(function(item) {
          if(item.name == "총계")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
          }          
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
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

  createSeries16("value1", "의사", true);
  createSeries16("value2", "치과의사", true);
  createSeries16("value3", "한의사", true);
  createSeries16("value4", "약사", true);
  createSeries16("value5", "간호사", true);
  createSeries16("value6", "간호조무사", true);
  createSeries16("value7", "의료기사", true);
  createSeries16("value8", "보건의료정보관리사", true);
  createSeries16("value9", "총계", false);
// Add cursor
chart_2_2.cursor = new am4charts.XYCursor();
chart_2_2.cursor.maxTooltipDistance = 0;
  chart_2_2.cursor.behavior = 'none';
// Add legend
chart_2_2.legend = new am4charts.Legend();

chart_2_2.logo.height = -15000;
  });
}

/* 02_03_노인복지시설 현황 ------------------------------------------------------*/
if(val == 'chart_box_02_03'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

// 2-3. 노인복지시설현황_chartdiv9 //
chart_2_3 = am4core.create("chart_02_03", am4charts.XYChart);

// Add data
chart_2_3.data = [ {
  "year" : "2015",
  "value1" : 34,
  "value2" : 11,
  "value3" : 24,
  "value4" : 17,
  "value5" : 0,
  "value6" : 0,
  "value7" : 86
}, {
  "year" : "2016",
  "value1" : 35,
  "value2" : 7,
  "value3" : 21,
  "value4" : 16,
  "value5" : 0,
  "value6" : 0,
  "value7" : 79
}, {
  "year" : "2017",
  "value1" : 33,
  "value2" : 8,
  "value3" : 17,
  "value4" : 16,
  "value5" : 0,
  "value6" : 18,
  "value7" : 92
}, {
  "year" : "2018",
  "value1" : 29,
  "value2" : 10,
  "value3" : 21,
  "value4" : 16,
  "value5" : 1,
  "value6" : 15,
  "value7" : 92
}, {
  "year" : "2019",
  "value1" : 31,
  "value2" : 8,
  "value3" : 21,
  "value4" : 17,
  "value5" : 6,
  "value6" : 6,
  "value7" : 89
}, {
  "year" : "2020",
  "value1" : 31,
  "value2" : 10,
  "value3" : 19,
  "value4" : 31,
  "value5" : 7,
  "value6" : 17,
  "value7" : 115
}, {
  "year" : "2021",
  "value1" : 34,
  "value2" : 9,
  "value3" : 24,
  "value4" : 29,
  "value5" : 15,
  "value6" : 18,
  "value7" : 129
} ];

/* Create axes */
categoryAxis = chart_2_3.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.minGridDistance = 30;

/* Create value axis */
valueAxis = chart_2_3.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 140;
valueAxis.renderer.opposite = true;
/* Create value axis */
valueAxis1 = chart_2_3.yAxes.push(new am4charts.ValueAxis());
valueAxis1.min = 0;
valueAxis1.max = 140;

valueAxis1.syncWithAxis = valueAxis;

// Create series
function createSeries10(field, name, stacked) {
  if(field == "value7")
  {
    var series = chart_2_3.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.tooltipText = "";
    series.strokeWidth = 3;
    series.yAxis = valueAxis;
    series.stroke = am4core.color("#fdd400");
    series.fill = am4core.color("#fdd400");
    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_2_3.series.each(function(item) {
        if(item.name == "총계")
        {
          text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
        }          
        else
        {
          text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
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
  else
  {
    var series = chart_2_3.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.yAxis = valueAxis1;
    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_2_3.series.each(function(item) {
        if(item.name == "총계")
        {
          text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
        }          
        else
        {
          text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
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

createSeries10("value1", "노인요양시설", true);
createSeries10("value2", "노인요양공동생활가정", true);
createSeries10("value3", "방문요양서비스", true);
createSeries10("value4", "주야간보호시설", true);
createSeries10("value5", "방문목욕서비스", true);
createSeries10("value6", "재가지원서비스", true);
createSeries10("value7", "총계", false);

// Add legend
chart_2_3.legend = new am4charts.Legend();

// Add cursor
chart_2_3.cursor = new am4charts.XYCursor();
chart_2_3.cursor.maxTooltipDistance = 0;
chart_2_3.cursor.behavior = 'none';
chart_2_3.logo.height = -15000;
  });
}

/* 02_04_장애인복지시설 현황 ------------------------------------------------------*/
if(val == 'chart_box_02_04'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

// 2-4. 장애인복지시설 현황_chartdiv10 //
chart_2_4 = am4core.create("chart_02_04", am4charts.XYChart);

// Add data
chart_2_4.data = [ {
  "year" : "2016",
  "value1" : 5,
  "value2" : 8,
  "value3" : 2,
  "value4" : 11,
  "value5" : 1,
  "value6" : 2,
  "value7" : 2,
  "value8" : 2,
  "value9" : 0,
  "value10" : 33
}, {
  "year" : "2017",
  "value1" : 5,
  "value2" : 5,
  "value3" : 2,
  "value4" : 11,
  "value5" : 1,
  "value6" : 2,
  "value7" : 2,
  "value8" : 2,
  "value9" : 0,
  "value10" : 30
}, {
  "year" : "2018",
  "value1" : 5,
  "value2" : 6,
  "value3" : 2,
  "value4" : 13,
  "value5" : 1,
  "value6" : 2,
  "value7" : 2,
  "value8" : 2,
  "value9" : 0,
  "value10" : 33
}, {
  "year" : "2019",
  "value1" : 5,
  "value2" : 7,
  "value3" : 2,
  "value4" : 13,
  "value5" : 1,
  "value6" : 2,
  "value7" : 2,
  "value8" : 2,
  "value9" : 0,
  "value10" : 34
}, {
  "year" : "2020",
  "value1" : 5,
  "value2" : 7,
  "value3" : 2,
  "value4" : 13,
  "value5" : 2,
  "value6" : 2,
  "value7" : 2,
  "value8" : 1,
  "value9" : 5,
  "value10" : 39 
}, {
  "year" : "2021",
  "value1" : 5,
  "value2" : 8,
  "value3" : 2,
  "value4" : 13,
  "value5" : 2,
  "value6" : 2,
  "value7" : 2,
  "value8" : 1,
  "value9" : 5,
  "value10" : 40 
}];

/* Create axes */
categoryAxis = chart_2_4.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.minGridDistance = 30;

/* Create value axis */
valueAxis = chart_2_4.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 45;
valueAxis.renderer.opposite = true;
/* Create value axis */
valueAxis1 = chart_2_4.yAxes.push(new am4charts.ValueAxis());
valueAxis1.min = 0;
valueAxis1.max = 45;

valueAxis1.syncWithAxis = valueAxis;

// Create series
function createSeries11(field, name, stacked) {
  if(field == "value10")
  {
    var series = chart_2_4.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.tooltipText = "";
    series.strokeWidth = 3;
    series.yAxis = valueAxis;
    series.stroke = am4core.color("#fdd400");
    series.fill = am4core.color("#fdd400");
    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_2_4.series.each(function(item) {
        if(item.name == "총계")
        {
          text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
        }          
        else
        {
          text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
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
  else
  {
    var series = chart_2_4.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.yAxis = valueAxis1;
    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_2_4.series.each(function(item) {
        if(item.name == "총계")
        {
          text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
        }          
        else
        {
          text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
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

createSeries11("value1", "거주시설", true);
createSeries11("value2", "공동생활가정", true);
createSeries11("value3", "장애인복지관", true);
createSeries11("value4", "주간보호시설", true);
createSeries11("value5", "장애인체육시설", true);
createSeries11("value6", "수어릉역센터", true);
createSeries11("value7", "생활이동지원센터", true);
createSeries11("value8", "점자도서관", true);
createSeries11("value9", "재활치료설계", true);
createSeries11("value10", "총계", false);

// Add legend
chart_2_4.legend = new am4charts.Legend();

// Add cursor
chart_2_4.cursor = new am4charts.XYCursor();
chart_2_4.cursor.maxTooltipDistance = 0;
chart_2_4.cursor.behavior = 'none';
chart_2_4.logo.height = -15000;
  });
}

/* 02_05_생략)보건기관(전주시보건소) 이용률 ------------------------------------------------------*/
if(val == 'chart_box_02_05'){
am4core.ready(function() {

// (2-5. 생략_20220314) 보건기관(전주시보건소) 이용률_chartdiv11 //
am4core.useTheme(am4themes_animated);
chart_2_5 = am4core.create("chart_02_05", am4charts.XYChart);

// Add data
chart_2_5.data = [ {
"year" : "2010",
"value1" : 17.8
}, {
"year" : "2011",
"value1" : 19.2
}, {
"year" : "2012",
"value1" : 23.7
}, {
"year" : "2013",
"value1" : 18.1
}, {
"year" : "2014",
"value1" : 22.4
}, {
"year" : "2015",
"value1" : 24.5
}, {
"year" : "2016",
"value1" : 23.9
}, {
"year" : "2017",
"value1" : 23.6
}, {
"year" : "2018",
"value1" : 18.3
}, {
"year" : "2019",
"value1" : 20.7
} ];

// Create axes
categoryAxis = chart_2_5.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.autoGridCount = false;
categoryAxis.labelFrequency = 0;
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0.5;


valueAxis = chart_2_5.yAxes.push(new am4charts.ValueAxis());
valueAxis.autoGridCount = false;
valueAxis.boldLabels = true;
valueAxis.gridCount = 4;

// Create series
function createSeries12(field, name) {
var series = chart_2_5.series.push(new am4charts.LineSeries());
series.dataFields.valueY = field;
series.dataFields.categoryX = "year";
series.name = name;
series.tooltipText = "";
series.strokeWidth = 3;

// Set up tooltip
series.adapter.add("tooltipText", function(ev) {
var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
chart_2_5.series.each(function(item) {
text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "}%\n";
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

createSeries12("value1", "이용률");

// Add cursor
chart_2_5.cursor = new am4charts.XYCursor();
chart_2_5.cursor.maxTooltipDistance = 0;
chart_2_5.cursor.behavior = 'none';
// Add legend
chart_2_5.legend = new am4charts.Legend();

chart_2_5.logo.height = -15000;
});
}

/* 02_06_생략)복지관 이용 현황(5개소) ------------------------------------------------------*/
if(val == 'chart_box_02_06'){
  am4core.ready(function() {

// (2-6. 생략_20220314) 복지관 이용 현황(5개소)_chartdiv12 //
am4core.useTheme(am4themes_animated);

chart_2_6 = am4core.create("chart_02_06", am4charts.XYChart);

// Add data
chart_2_6.data = [ {
  "year" : "2019.11",
  "value1" : 12691,
  "value2" : 9063,
  "value3" : 3937,
  "value4" : 6299,
  "value5" : 7793
}, {
  "year" : "2019.12",
  "value1" : 12748,
  "value2" : 9179,
  "value3" : 3375,
  "value4" : 6191,
  "value5" : 7780
}, {
  "year" : "2020.01",
  "value1" : 9441,
  "value2" : 6918,
  "value3" : 227,
  "value4" : 3191,
  "value5" : 6356
}, {
  "year" : "2020.02",
  "value1" : 9365,
  "value2" : 7142,
  "value3" : 282,
  "value4" : 1617,
  "value5" : 5604
}, {
  "year" : "2020.03",
  "value1" : 9191,
  "value2" : 6187,
  "value3" : 278,
  "value4" : 734,
  "value5" : 4906
}, {
  "year" : "2020.04",
  "value1" : 9863,
  "value2" : 5982,
  "value3" : 167,
  "value4" : 421,
  "value5" : 5038
}, {
  "year" : "2020.05",
  "value1" : 9799,
  "value2" : 8014,
  "value3" : 1414,
  "value4" : 612,
  "value5" : 5504
}, {
  "year" : "2020.06",
  "value1" : 9930,
  "value2" : 7797,
  "value3" : 898,
  "value4" : 1187,
  "value5" : 5826
}, {
  "year" : "2020.07",
  "value1" : 9602,
  "value2" : 8432,
  "value3" : 735,
  "value4" : 1288,
  "value5" : 6093
}, {
  "year" : "2020.08",
  "value1" : 10439,
  "value2" : 6600,
  "value3" : 265,
  "value4" : 1107,
  "value5" : 5676
}, {
  "year" : "2020.09",
  "value1" : 9980,
  "value2" : 10550,
  "value3" : 397,
  "value4" : 1302,
  "value5" : 5804
}, {
  "year" : "2020.10",
  "value1" : 11120,
  "value2" : 6341,
  "value3" : 1964,
  "value4" : 1339,
  "value5" : 5903
}, {
  "year" : "2020.11",
  "value1" : 1008,
  "value2" : 6687,
  "value3" : 2887,
  "value4" : 3785,
  "value5" : 6020
} ];

// Create axes
categoryAxis = chart_2_6.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.autoGridCount = false;
categoryAxis.labelFrequency = 0;
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0.5;


valueAxis = chart_2_6.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 15000;
valueAxis.autoGridCount = false;
valueAxis.boldLabels = true;
valueAxis.gridCount = 4;

// Create series
function createSeries13(field, name) {
  var series = chart_2_6.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = field;
  series.dataFields.categoryX = "year";
  series.name = name;
  series.tooltipText = "";
  series.strokeWidth = 3;

  // Set up tooltip
  series.adapter.add("tooltipText", function(ev) {
    var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
    chart_2_6.series.each(function(item) {
      text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 명\n";
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

createSeries13("value1", "평화사회복지관");
createSeries13("value2", "전주종합복지관");
createSeries13("value3", "전북종합복지관");
createSeries13("value4", "선너머복지관");
createSeries13("value5", "학산종합복지관");

// Add cursor
chart_2_6.cursor = new am4charts.XYCursor();
chart_2_6.cursor.maxTooltipDistance = 0;
chart_2_6.cursor.behavior = 'none';
// Add legend
chart_2_6.legend = new am4charts.Legend();

chart_2_6.logo.height = -15000;

  });
}

/* 02_07_국민연금 지급금액 ------------------------------------------------------*/
if(val == 'chart_box_02_07'){
am4core.ready(function() {
am4core.useTheme(am4themes_animated);
    
//
// 2-6. 국민연금 지급금액_chartdiv13_1 //
//  

  chart_2_7 = am4core.create("chart_02_07", am4charts.XYChart);
  //chart_2_7.hiddenState.properties.opacity = 0; // this creates initial fade-in

  // Add data
  chart_2_7.data = [ {
      "year" : "2015",
      "value1" : 37655741,
      "value2" : 15415993,
      "value3" : 44353099,
      "value4" : 33733970,
      "value5" : 202176,
      "value6" : 3962183,
      "value7" : 17344287,
      "value8" : 462917,
      "value9" : 5738731,
      "value10" : 528095,
      "value11" : 159397192
    }, {
      "year" : "2016",
      "value1" : 37163262,
      "value2" : 21029760,
      "value3" : 53406364,
      "value4" : 36363505,
      "value5" : 290248,
      "value6" : 4087419,
      "value7" : 18588235,
      "value8" : 487352,
      "value9" : 6133283,
      "value10" : 431529,
      "value11" : 177980957
    }, {
      "year" : "2017",
      "value1" : 36747444,
      "value2" : 27807005,
      "value3" : 62962577,
      "value4" : 38411806,
      "value5" : 409765,
      "value6" : 4113253,
      "value7" : 20291538,
      "value8" : 774840,
      "value9" : 5659134,
      "value10" : 404201,
      "value11" : 197581563
    }, {
      "year" : "2018",
      "value1" : 36686355,
      "value2" : 30564986,
      "value3" : 68473147,
      "value4" : 41345027,
      "value5" : 547033,
      "value6" : 4186391,
      "value7" : 22256286,
      "value8" : 626240,
      "value9" : 5168838,
      "value10" : 460098,
      "value11" : 210314401
    }, {
      "year" : "2019",
      "value1" : 36621792,
      "value2" : 37832457,
      "value3" : 76689283,
      "value4" : 46562167,
      "value5" : 638447,
      "value6" : 4210420,
      "value7" : 25895008,
      "value8" : 543616,
      "value9" : 6239090,
      "value10" : 545234,
      "value11" : 235777514
    }, {
      "year" : "2020",
      "value1" : 35807104,
      "value2" : 51063701,
      "value3" : 87084478,
      "value4" : 50775842,
      "value5" : 839448,
      "value6" : 4377201,
      "value7" : 27779304,
      "value8" : 581587,
      "value9" : 7191239,
      "value10" : 702960,
      "value11" : 266202864
    }, {
      "year" : "2021",
      "value1" : 35035252,
      "value2" : 68134287,
      "value3" : 98337289,
      "value4" : 54604985,
      "value5" : 1216383,
      "value6" : 4556183,
      "value7" : 29951130,
      "value8" : 406575,
      "value9" : 6675665,
      "value10" : 676166,
      "value11" : 299593915
  } ];

  /* Create axes */
  categoryAxis = chart_2_7.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.minGridDistance = 30;

  /* Create value axis */
  valueAxis = chart_2_7.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 400000000;
  valueAxis.renderer.opposite = true;
  /* Create value axis */
  valueAxis1 = chart_2_7.yAxes.push(new am4charts.ValueAxis());
  valueAxis1.min = 0;
  valueAxis1.max = 400000000;

  valueAxis1.syncWithAxis = valueAxis;

  // Create series
  function createSeries14(field, name, stacked) {
    if(field == "value11")
    {
      var series = chart_2_7.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.tooltipText = "";
      series.strokeWidth = 3;
      series.yAxis = valueAxis;
      series.stroke = am4core.color("#fdd400");
      series.fill = am4core.color("#fdd400");
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
        chart_2_7.series.each(function(item) {
          if(item.name == "총계")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
          }          
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
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
    else
    {
      var series = chart_2_7.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.yAxis = valueAxis1;
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
        chart_2_7.series.each(function(item) {
          if(item.name == "총계")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
          }          
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
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

  createSeries14("value1", "특례노령연금", true);
  createSeries14("value2", "노령연금(20년이상)", true);
  createSeries14("value3", "노령연금(10년~20년미만)", true);
  createSeries14("value4", "조기노령연금", true);
  createSeries14("value5", "분할노령연금", true);
  createSeries14("value6", "장애연금", true);
  createSeries14("value7", "유족연금", true);
  createSeries14("value8", "장애일시금", true);
  createSeries14("value9", "반환일시금", true);
  createSeries14("value10", "사망일시금", true);
  createSeries14("value11", "총계", false);

  // Add legend
  chart_2_7.legend = new am4charts.Legend();

  // Add cursor
  chart_2_7.cursor = new am4charts.XYCursor();
  chart_2_7.cursor.maxTooltipDistance = 0;
  chart_2_7.cursor.behavior = 'none';
  chart_2_7.logo.height = -15000;
  });
}

/* 02_08_국민연금 지급자수 ------------------------------------------------------*/
if(val == 'chart_box_02_08'){
am4core.ready(function() {
am4core.useTheme(am4themes_animated);
    
//
// 2-5. 국민연금 지급자수_chartdiv13_2 //
//  

  chart_2_8 = am4core.create("chart_02_08", am4charts.XYChart);
  //chart_2_8.hiddenState.properties.opacity = 0; // this creates initial fade-in

  // Add data
  chart_2_8.data = [ {
      "year" : "2015",
      "value1" : 16589,
      "value2" : 1750,
      "value3" : 10965,
      "value4" : 5383,
      "value5" : 129,
      "value6" : 908,
      "value7" : 6717,
      "value8" : 31,
      "value9" : 1641,
      "value10" : 262,
      "value11" : 44375
    }, {
      "year" : "2016",
      "value1" : 16274,
      "value2" : 2366,
      "value3" : 13211,
      "value4" : 5968,
      "value5" : 181,
      "value6" : 918,
      "value7" : 7123,
      "value8" : 40,
      "value9" : 1883,
      "value10" : 290,
      "value11" : 48254
    }, {
      "year" : "2017",
      "value1" : 15985,
      "value2" : 3028,
      "value3" : 15584,
      "value4" : 6234,
      "value5" : 246,
      "value6" : 907,
      "value7" : 7696,
      "value8" : 45,
      "value9" : 1658,
      "value10" : 269,
      "value11" : 51662
    }, {
      "year" : "2018",
      "value1" : 15686,
      "value2" : 2924,
      "value3" : 15960,
      "value4" : 6584,
      "value5" : 275,
      "value6" : 903,
      "value7" : 8258,
      "value8" : 37,
      "value9" : 1191,
      "value10" : 259,
      "value11" : 52077
    }, {
      "year" : "2019",
      "value1" : 15398,
      "value2" : 4120,
      "value3" : 18571,
      "value4" : 7166,
      "value5" : 333,
      "value6" : 929,
      "value7" : 9330,
      "value8" : 37,
      "value9" : 1589,
      "value10" : 263,
      "value11" : 57736
    }, {
      "year" : "2020",
      "value1" : 15034,
      "value2" : 5479,
      "value3" : 20963,
      "value4" : 7543,
      "value5" : 424,
      "value6" : 941,
      "value7" : 9952,
      "value8" : 40,
      "value9" : 1880,
      "value10" : 330,
      "value11" : 62586
    }, {
      "year" : "2021",
      "value1" : 14659,
      "value2" : 7212,
      "value3" : 23761,
      "value4" : 7887,
      "value5" : 553,
      "value6" : 959,
      "value7" : 10570,
      "value8" : 27,
      "value9" : 1679,
      "value10" : 330,
      "value11" : 67637
  } ];

  /* Create axes */
  categoryAxis = chart_2_8.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.minGridDistance = 30;

  /* Create value axis */
  valueAxis = chart_2_8.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 70000;
  valueAxis.renderer.opposite = true;
  /* Create value axis */
  valueAxis1 = chart_2_8.yAxes.push(new am4charts.ValueAxis());
  valueAxis1.min = 0;
  valueAxis1.max = 70000;

  valueAxis1.syncWithAxis = valueAxis;

  // Create series
  function createSeries15(field, name, stacked) {
    if(field == "value11")
    {
      var series = chart_2_8.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.tooltipText = "";
      series.strokeWidth = 3;
      series.yAxis = valueAxis;
      series.stroke = am4core.color("#fdd400");
      series.fill = am4core.color("#fdd400");
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
        chart_2_8.series.each(function(item) {
          if(item.name == "총계")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
          }          
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
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
    else
    {
      var series = chart_2_8.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.yAxis = valueAxis1;
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
        chart_2_8.series.each(function(item) {
          if(item.name == "총계")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
          }          
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 개소\n";
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

  createSeries15("value1", "특례노령연금", true);
  createSeries15("value2", "노령연금(20년이상)", true);
  createSeries15("value3", "노령연금(10년~20년미만)", true);
  createSeries15("value4", "조기노령연금", true);
  createSeries15("value5", "분할노령연금", true);
  createSeries15("value6", "장애연금", true);
  createSeries15("value7", "유족연금", true);
  createSeries15("value8", "장애일시금", true);
  createSeries15("value9", "반환일시금", true);
  createSeries15("value10", "사망일시금", true);
  createSeries15("value11", "총계", false);

  // Add legend
  chart_2_8.legend = new am4charts.Legend();

  // Add cursor
  chart_2_8.cursor = new am4charts.XYCursor();
  chart_2_8.cursor.maxTooltipDistance = 0;
  chart_2_8.cursor.behavior = 'none';
  chart_2_8.logo.height = -15000;
  });
}



/*----- 03_경제·산업 Chart 영역---------------------------------------------------------------------------*/
/* 03_01_전주시고용률·실업률 ------------------------------------------------------*/
if(val == 'chart_box_03_01'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // 3-1. 전주시 고용률/실업률_chartdiv14 //
  chart_3_1 = am4core.create("chart_03_01", am4charts.XYChart);
  chart_3_1.hiddenState.properties.opacity = 0; // this creates initial fade-in

  // Add data
  chart_3_1.data = [{
    "year" : "2016",
    "value1" : 53.9,
    "value2" : 3.3
  }, {
    "year" : "2017",
    "value1" : 54.2,
    "value2" : 2.8
  }, {
    "year" : "2018",
    "value1" : 55.8,
    "value2" : 1.8
  }, {
    "year" : "2019",
    "value1" : 58.3,
    "value2" : 2.3
  }, {
    "year" : "2020",
    "value1" : 58,
    "value2" : 3.2
  }, {
    "year" : "2021",
    "value1" : 60.1,
    "value2" : 3.1
  }, {
    "year" : "2022 1/2",
    "value1" : 59.9,
    "value2" : 2.7
  }, {
    "year" : "2022 2/2",
    "value1" : 59.6,
    "value2" : 2.7
  } ];

  // Create axes
  categoryAxis = chart_3_1.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.autoGridCount = false;
  categoryAxis.labelFrequency = 0;
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0.5;

  valueAxis = chart_3_1.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 65.0;
  valueAxis.autoGridCount = false;
  valueAxis.boldLabels = true;
  valueAxis.gridCount = 4;

  // Create series
  function createSeries1(field, name) {
    var series = chart_3_1.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.tooltipText = "";
    series.strokeWidth = 3;

    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_3_1.series.each(function(item) {
        text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "}%\n";
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

  createSeries1("value1", "고용률");
  createSeries1("value2", "실업률");

  // Add cursor
  chart_3_1.cursor = new am4charts.XYCursor();
  chart_3_1.cursor.maxTooltipDistance = 0;
  chart_3_1.cursor.behavior = 'none';
  // Add legend
  chart_3_1.legend = new am4charts.Legend();

  // axis break
  axisBreak = valueAxis.axisBreaks.create();
  axisBreak.startValue = 10.0;
  axisBreak.endValue = 50.0;

  // axisBreak.breakSize = 0.005;

  // fixed axis break
  d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
  axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break
                        // will take 5% of the total
                        // value axis height

  // make break expand on hover
  hoverState = axisBreak.states.create("hover");
  hoverState.properties.breakSize = 1;
  hoverState.properties.opacity = 0.1;
  hoverState.transitionDuration = 1500;

  axisBreak.defaultState.transitionDuration = 1000;
  /*
  * // this is exactly the same, but with events axisBreak.events.on("over",
  * function() { axisBreak.animate( [{ property: "breakSize", to: 1 }, {
  * property: "opacity", to: 0.1 }], 1500, am4core.ease.sinOut ); });
  * axisBreak.events.on("out", function() { axisBreak.animate( [{ property:
  * "breakSize", to: 0.005 }, { property: "opacity", to: 1 }], 1000,
  * am4core.ease.quadOut ); });
  */

  chart_3_1.logo.height = -15000;


  });
}

/* 03_02_청년층(15~29세)고용률 ------------------------------------------------------*/
if(val == 'chart_box_03_02'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);
  //
  // 3-2. 청년층(15~29세) 고용률_chartdiv15 //
  chart_3_2 = am4core.create("chart_03_02", am4charts.XYChart);
  chart_3_2.hiddenState.properties.opacity = 0; // this creates initial fade-in

  // Add data
  chart_3_2.data = [ {
    "year" : "2016",
    "value1" : 41.7,
    "value2" : 28.1
  }, {
    "year" : "2017",
    "value1" : 41.7,
    "value2" : 29.6
  }, {
    "year" : "2018",
    "value1" : 42.9,
    "value2" : 30.4
  }, {
    "year" : "2019",
    "value1" : 44.1,
    "value2" : 33.0
  }, {
    "year" : "2020",
    "value1" : 42.0,
    "value2" : 30.3
  }, {
    "year" : "2021",
    "value1" : 45.1,
    "value2" : 37.1
  }, {
    "year" : "2022 1/2",
    "value1" : 47.4,
    "value2" : 35.3
  }, {
    "year" : "2022 2/2",
    "value1" : 46.7,
    "value2" : 40.9
  
  } ];

  // Create axes
  categoryAxis = chart_3_2.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.autoGridCount = false;
  categoryAxis.labelFrequency = 0;
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0.5;

  valueAxis = chart_3_2.yAxes.push(new am4charts.ValueAxis());
  valueAxis.autoGridCount = false;
  valueAxis.boldLabels = true;
  valueAxis.gridCount = 4;

  // Create series
  function createSeries2(field, name) {
    var series = chart_3_2.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.tooltipText = "";
    series.strokeWidth = 3;

    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_3_2.series.each(function(item) {
        text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "}%\n";
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

  createSeries2("value1", "전국");
  createSeries2("value2", "전주");

  // Add cursor
  chart_3_2.cursor = new am4charts.XYCursor();
  chart_3_2.cursor.maxTooltipDistance = 0;
      chart_3_2.cursor.behavior = 'none';
  // Add legend
  chart_3_2.legend = new am4charts.Legend();

  chart_3_2.logo.height = -15000;
  });
}

/* 03_03_전주시취업자·실업자 ------------------------------------------------------*/
if(val == 'chart_box_03_03'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // 3-3. 전주시 취업자/실업자_chartdiv16 //
  chart_3_3 = am4core.create("chart_03_03", am4charts.XYChart);
  chart_3_3.hiddenState.properties.opacity = 0; // this creates initial fade-in

  // Add data
  chart_3_3.data = [ {
    "year" : "2016",
    "value1" : 298.4,
    "value2" : 10.3
  }, {
    "year" : "2017",
    "value1" : 301.0,
    "value2" : 8.6
  }, {
    "year" : "2018",
    "value1" : 312.2,
    "value2" : 5.7
  }, {
    "year" : "2019",
    "value1" : 328.4,
    "value2" : 7.8
  }, {
    "year" : "2020",
    "value1" : 329.4,
    "value2" : 10.9
  }, {
    "year" : "2021",
    "value1" : 345.8,
    "value2" : 11.0
  }, {
    "year" : "2022 1/2",
    "value1" : 345.6,
    "value2" : 9.7
  }, {
    "year" : "2022 2/2",
    "value1" : 343.3,
    "value2" : 9.2
  } ];

  // Create axes
  categoryAxis = chart_3_3.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.autoGridCount = false;
  categoryAxis.labelFrequency = 0;
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0.5;


  valueAxis = chart_3_3.yAxes.push(new am4charts.ValueAxis());

  valueAxis.autoGridCount = false;
  valueAxis.boldLabels = true;
  valueAxis.gridCount = 4;
  valueAxis.min = 0;
  valueAxis.max = 360.0;

  // Create series
  function createSeries3(field, name) {
    var series = chart_3_3.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.tooltipText = "";
    series.strokeWidth = 3;

    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_3_3.series.each(function(item) {
        text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 천명\n";
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

  createSeries3("value1", "취업자");
  createSeries3("value2", "실업자");

  // Add cursor
  chart_3_3.cursor = new am4charts.XYCursor();
  chart_3_3.cursor.maxTooltipDistance = 0;
      chart_3_3.cursor.behavior = 'none';
  // Add legend
  chart_3_3.legend = new am4charts.Legend();

  // axis break
  axisBreak = valueAxis.axisBreaks.create();
  axisBreak.startValue = 50.0;
  axisBreak.endValue = 250.0;
  // axisBreak.breakSize = 0.005;

  // fixed axis break
  d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
  axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break
                        // will take 5% of the total
                        // value axis height

  // make break expand on hover
  hoverState = axisBreak.states.create("hover");
  hoverState.properties.breakSize = 1;
  hoverState.properties.opacity = 0.1;
  hoverState.transitionDuration = 1500;

  axisBreak.defaultState.transitionDuration = 1000;
  /*
  * // this is exactly the same, but with events axisBreak.events.on("over",
  * function() { axisBreak.animate( [{ property: "breakSize", to: 1 }, {
  * property: "opacity", to: 0.1 }], 1500, am4core.ease.sinOut ); });
  * axisBreak.events.on("out", function() { axisBreak.animate( [{ property:
  * "breakSize", to: 0.005 }, { property: "opacity", to: 1 }], 1000,
  * am4core.ease.quadOut ); });
  */

  chart_3_3.logo.height = -15000;
    });
  }

/* 03_04_비경제활동인구 ------------------------------------------------------*/
if(val == 'chart_box_03_04'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // 3-4. 비경제활동인구_chartdiv17 //
  chart_3_4 = am4core.create("chart_03_04", am4charts.XYChart);
  chart_3_4.hiddenState.properties.opacity = 0; // this creates initial fade-in

  chart_3_4.data = [ {
    year : "2016",
    value : 244.7
  }, {
    year : "2017",
    value : 245.6
  }, {
    year : "2018",
    value : 241.3
  }, {
    year : "2019",
    value : 227.3
  }, {
    year : "2020",
    value : 228.0
  }, {
    year : "2021",
    value : 218.5
  }, {
    year : "2022 1/2",
    value : 221.4
  }, {
    year : "2022 2/2",
    value : 223.6
  } ];

 // Create axes
  categoryAxis = chart_3_4.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.autoGridCount = false;
  categoryAxis.labelFrequency = 0;
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0.5;


  valueAxis = chart_3_4.yAxes.push(new am4charts.ValueAxis());

  valueAxis.autoGridCount = false;
  valueAxis.boldLabels = true;
  valueAxis.gridCount = 4;
  valueAxis.min = 210.0;
  valueAxis.max = 250.0;

  // Create series
  function createSeries4(field, name) {
    var series = chart_3_4.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.tooltipText = "";
    series.strokeWidth = 3;

    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_3_4.series.each(function(item) {
        text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + " : [font-size: 12px]{" + item.dataFields.valueY + "} 천명\n";
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

  createSeries4("value", "비경제활동인구");

  // Add cursor
  chart_3_4.cursor = new am4charts.XYCursor();
  chart_3_4.cursor.maxTooltipDistance = 0;
  chart_3_4.cursor.behavior = 'none';
  // Add legend
  chart_3_4.legend = new am4charts.Legend();

  // axis break
  // axisBreak = valueAxis.axisBreaks.create();
  // axisBreak.startValue = 50.0;
  // axisBreak.endValue = 250.0;
  // // axisBreak.breakSize = 0.005;

  // fixed axis break
  d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
  axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break
                        // will take 5% of the total
                        // value axis height

  // make break expand on hover
  hoverState = axisBreak.states.create("hover");
  hoverState.properties.breakSize = 1;
  hoverState.properties.opacity = 0.1;
  hoverState.transitionDuration = 1500;

  axisBreak.defaultState.transitionDuration = 1000;

  /*
  * // this is exactly the same, but with events axisBreak.events.on("over",
  * function() { axisBreak.animate( [{ property: "breakSize", to: 1 }, {
  * property: "opacity", to: 0.1 }], 1500, am4core.ease.sinOut ); });
  * axisBreak.events.on("out", function() { axisBreak.animate( [{ property:
  * "breakSize", to: 0.005 }, { property: "opacity", to: 1 }], 1000,
  * am4core.ease.quadOut ); });
  */

  chart_3_4.logo.height = -15000;
  });
}

/* 03_05_산업별취업자 ------------------------------------------------------*/
if(val == 'chart_box_03_05'){
am4core.ready(function() {
am4core.useTheme(am4themes_animated);

// 3-5. 산업별 취업자_chartdiv18 //
chart_3_5 = am4core.create("chart_03_05", am4charts.XYChart);

// Data for both series
chart_3_5.data = [ {
"year" : "2016",
"value1" : 298.3,
"value2" : 6.1, 
"value3" : 31.1,
"value4" : 28.5,
"value5" : 69.3,
"value6" : 32.7,
"value7" : 130.6
}, {
"year" : "2017",
"value1" : 301.1,
"value2" : 7.2,
"value3" : 28.9,
"value4" : 31.0,
"value5" : 64.8,
"value6" : 35.2,
"value7" : 134.0
}, {
"year" : "2018",
"value1" : 312.1,
"value2" : 9.0,
"value3" : 32.1,
"value4" : 33.1,
"value5" : 68.9,
"value6" : 33.0,
"value7" : 136.0
}, {
"year" : "2019",
"value1" : 328.4,
"value2" : 11.5,
"value3" : 32.6,
"value4" : 37.1,
"value5" : 65.7,
"value6" : 34.4,
"value7" : 147.1
}, {
"year" : "2020",
"value1" : 329.5,
"value2" : 11.7,
"value3" : 33.1,
"value4" : 35.1,
"value5" : 66.4,
"value6" : 36.3,
"value7" : 146.9
}, {
"year" : "2021",
"value1" : 345.8, 
"value2" : 11.1,
"value3" : 34.2,
"value4" : 39.1,
"value5" : 76.5,
"value6" : 34.2,
"value7" : 150.7
}, {
"year" : "2022 1/2",
"value1" : 345.6,
"value2" : 14.2,
"value3" : 34.7,
"value4" : 35.5,
"value5" : 70.6,
"value6" : 33.9,
"value7" : 156.7
}, {
"year" : "2022 2/2",
"value1" : 343.3, 
"value2" : 13.9,
"value3" : 39.9,
"value4" : 31.3,
"value5" : 65.1,
"value6" : 30.7,
"value7" : 162.3
} ];

/* Create axes */
categoryAxis = chart_3_5.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.minGridDistance = 30;

/* Create value axis */
valueAxis = chart_3_5.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 360;
// Create series
function createSeries5(field, name, stacked) {
if (field == "value1") {
var series = chart_3_5.series.push(new am4charts.LineSeries());
series.dataFields.valueY = field;
series.dataFields.categoryX = "year";
series.name = name;
series.tooltipText = "";
series.strokeWidth = 3;
series.stroke = am4core.color("#fdd400");
series.fill = am4core.color("#fdd400");
// Set up tooltip
series.adapter.add("tooltipText", function(ev) {
var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
chart_3_5.series.each(function(item) {
if (item.name == "총계") {
text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
} else {
text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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
var series = chart_3_5.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = field;
series.dataFields.categoryX = "year";
series.name = name;
// Set up tooltip
series.adapter.add("tooltipText", function(ev) {
var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
chart_3_5.series.each(function(item) {
if (item.name == "총계") {
text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
} else {
text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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

createSeries5("value2", "농업, 임업 및 어업", true);
createSeries5("value3", "광·제조업", true);
createSeries5("value4", "건설업", true);
createSeries5("value5", "도소매·음식숙박업", true);
createSeries5("value6", "전기·운수·통신·금융", true);
createSeries5("value7", "사업·개인·공공서비스 및 기타", true);
createSeries5("value1", "총계", false);


// make break expand on hover
hoverState = axisBreak.states.create("hover");
hoverState.properties.breakSize = 1;
hoverState.properties.opacity = 0.1;
hoverState.transitionDuration = 1500;

axisBreak.defaultState.transitionDuration = 1000;

// Add legend
chart_3_5.legend = new am4charts.Legend();

// Add cursor
chart_3_5.cursor = new am4charts.XYCursor();
chart_3_5.cursor.maxTooltipDistance = 0;
chart_3_5.cursor.behavior = 'none';
chart_3_5.logo.height = -15000;
});
}

/* 03_06_직업별취업자 ------------------------------------------------------*/
if(val == 'chart_box_03_06'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // 3-6. 직업별 취업자_chartdiv19 //
  chart_3_6 = am4core.create("chart_03_06", am4charts.XYChart);

  // Data for both series
  chart_3_6.data = [ {
    "year" : "2016",
    "value1" : 298.4,
    "value2" : 73.7, 
    "value3" : 54.0,
    "value4" : 75.2, 
    "value5" : 6.4,
    "value6" : 54.5,
    "value7" : 34.6,
  }, {
    "year" : "2017",
    "value1" : 301.0,
    "value2" : 73.9,
    "value3" : 62.9,
    "value4" : 66.6,
    "value5" : 5.6,
    "value6" : 56.6,
    "value7" : 35.4
  }, {
    "year" : "2018",
    "value1" : 312.2,
    "value2" : 71.3,
    "value3" : 59.7,
    "value4" : 77.0,
    "value5" : 8.1,
    "value6" : 59.5,
    "value7" : 36.6
  }, {
    "year" : "2019",
    "value1" : 328.5,
    "value2" : 79.7,
    "value3" : 60.0,
    "value4" : 75.4,
    "value5" : 9.7,
    "value6" : 61.0,
    "value7" : 42.7
  }, {
    "year" : "2020",
    "value1" : 329.3,
    "value2" : 76.8,
    "value3" : 57.2,
    "value4" : 77.9,
    "value5" : 10.3,
    "value6" : 58.1,
    "value7" : 49
  }, {
    "year" : "2021",
    "value1" : 345.8,
    "value2" : 76.6,
    "value3" : 60.5,
    "value4" : 85.4,
    "value5" : 11.2,
    "value6" : 60.3,
    "value7" : 51.8
  }, {
    "year" : "2022 1/2",
    "value1" : 345.6,
    "value2" : 77.8,
    "value3" : 62.0,
    "value4" : 82.2,
    "value5" : 12.7,
    "value6" : 60.1,
    "value7" : 50.8
  }, {
    "year" : "2022 2/2",
    "value1" : 343.3,
    "value2" : 86.5,
    "value3" : 65.3,
    "value4" : 80.4,
    "value5" : 12.5,
    "value6" : 55.6,
    "value7" : 43.0
  } ];

  /* Create axes */
  categoryAxis = chart_3_6.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.minGridDistance = 30;

  /* Create value axis */
  valueAxis = chart_3_6.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 400;

  function createSeries6(field, name, stacked) {
    if (field == "value1") {
      var series = chart_3_6.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.tooltipText = "";
      series.strokeWidth = 3;
      series.stroke = am4core.color("#fdd400");
      series.fill = am4core.color("#fdd400");
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
        chart_3_6.series.each(function(item) {
          if (item.name == "총계") {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
          } else {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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
      var series = chart_3_6.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
        chart_3_6.series.each(function(item) {
          if (item.name == "총계") {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
          } else {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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

  createSeries6("value2", "관리자, 전문가 및 관련종사자", true);
  createSeries6("value3", "사무종사자", true);
  createSeries6("value4", "서비스·판매 종사자", true);
  createSeries6("value5", "농림어업 숙련종사자", true);
  createSeries6("value6", "기능·기계조작·조립 종사자", true);
  createSeries6("value7", "단순노무 종사자", true);
  createSeries6("value1", "총계", false);

  // Add cursor
  // Add legend
  chart_3_6.legend = new am4charts.Legend();

  // Add cursor
  chart_3_6.cursor = new am4charts.XYCursor();
  chart_3_6.cursor.maxTooltipDistance = 0;
  chart_3_6.cursor.behavior = 'none';
  chart_3_6.logo.height = -15000;
  });
}

/* 03_07_생략)고용보험 적용사업장 및 피보험자 ------------------------------------------------------*/
if(val == 'chart_box_03_07'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // 3-7. 고용보험 적용사업장 및 피보험자_chartdiv20 //
  chart_3_7 = am4core.create("chart_03_07", am4charts.XYChart);
  chart_3_7.hiddenState.properties.opacity = 0; // this creates initial fade-in

  // Add data
  chart_3_7.data = [{
    "year" : "2019",
    "value1" : 28812,
    "value2" : 124278
  }, {
    "year" : "2020",
    "value1" : 27955,
    "value2" : 129519
  }, {
    "year" : "2021",
    "value1" : 29102,
    "value2" : 131496
  }  ];

  // Create axes
  categoryAxis = chart_3_7.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.autoGridCount = false;
  categoryAxis.labelFrequency = 0;
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0.5;

  valueAxis = chart_3_7.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 150000;
  valueAxis.autoGridCount = false;
  valueAxis.boldLabels = true;
  valueAxis.gridCount = 4;

  // Create series
  function createSeries7(field, name) {
    var series = chart_3_7.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.tooltipText = "";
    series.strokeWidth = 3;

    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_3_7.series.each(function(item) {
        text += "[" + item.stroke.hex + "]●[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
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

  createSeries7("value1", "적용사업장");
  createSeries7("value2", "피보험자");

  // Add cursor
  chart_3_7.cursor = new am4charts.XYCursor();
  chart_3_7.cursor.maxTooltipDistance = 0;
  chart_3_7.cursor.behavior = 'none';
  // Add legend
  chart_3_7.legend = new am4charts.Legend();

  // axis break
  axisBreak = valueAxis.axisBreaks.create();
  axisBreak.startValue = 50000;
  axisBreak.endValue = 100000;
  // axisBreak.breakSize = 0.005;

  // fixed axis break
  d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
  axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break
                        // will take 5% of the total
                        // value axis height

  // make break expand on hover
  hoverState = axisBreak.states.create("hover");
  hoverState.properties.breakSize = 1;
  hoverState.properties.opacity = 0.1;
  hoverState.transitionDuration = 1500;

  axisBreak.defaultState.transitionDuration = 1000;
  /*
  * // this is exactly the same, but with events axisBreak.events.on("over",
  * function() { axisBreak.animate( [{ property: "breakSize", to: 1 }, {
  * property: "opacity", to: 0.1 }], 1500, am4core.ease.sinOut ); });
  * axisBreak.events.on("out", function() { axisBreak.animate( [{ property:
  * "breakSize", to: 0.005 }, { property: "opacity", to: 1 }], 1000,
  * am4core.ease.quadOut ); });
  */

  chart_3_7.logo.height = -15000;
  });
}

/* 03_08_생략)실업급여 지급현황 ------------------------------------------------------*/
if(val == 'chart_box_03_08'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // (3-8. 생략_20220314) 실업급여 지급현황_chartdiv21 //생략_20220316
  chart_3_8 = am4core.create("chart_03_08", am4charts.XYChart);

  // Add data
  chart_3_8.data = [{
    "year" : "2019.07",
    "value1" : 9,
    "value2" : 1692,
    "value3" : 2628,
    "value4" : 3346,
    "value5" : 4438,
    "value6" : 3889,
    "value7" : 131
  }, {
    "year" : "2019.08",
    "value1" : 9,
    "value2" : 1454,
    "value3" : 2392,
    "value4" : 3045,
    "value5" : 4165,
    "value6" : 3654,
    "value7" : 136
  }, {
    "year" : "2019.09",
    "value1" : 11,
    "value2" : 1369,
    "value3" : 2257,
    "value4" : 2835,
    "value5" : 3956,
    "value6" : 3504,
    "value7" : 123
  }, {
    "year" : "2019.10",
    "value1" : 14,
    "value2" : 1414,
    "value3" : 2126,
    "value4" : 2697,
    "value5" : 3660,
    "value6" : 3079,
    "value7" : 97
  }, {
    "year" : "2019.11",
    "value1" : 17,
    "value2" : 1401,
    "value3" : 2024,
    "value4" : 2545,
    "value5" : 3515,
    "value6" : 2952,
    "value7" : 103
  }, {
    "year" : "2019.12",
    "value1" : 21,
    "value2" : 1466,
    "value3" : 2047,
    "value4" : 2556,
    "value5" : 3583,
    "value6" : 2986,
    "value7" : 98
  }, {
    "year" : "2020.01",
    "value1" : 32,
    "value2" : 2001,
    "value3" : 2534,
    "value4" : 3142,
    "value5" : 4425,
    "value6" : 4236,
    "value7" : 135
  }, {
    "year" : "2020.02",
    "value1" : 43,
    "value2" : 2183,
    "value3" : 2608,
    "value4" : 3336,
    "value5" : 4756,
    "value6" : 4768,
    "value7" : 149
  }, {
    "year" : "2020.03",
    "value1" : 47,
    "value2" : 2744,
    "value3" : 3143,
    "value4" : 4069,
    "value5" : 5291,
    "value6" : 5129,
    "value7" : 153
  }, {
    "year" : "2020.04",
    "value1" : 49,
    "value2" : 3035,
    "value3" : 3321,
    "value4" : 4203,
    "value5" : 5404,
    "value6" : 5129,
    "value7" : 164
  }, {
    "year" : "2020.05",
    "value1" : 58,
    "value2" : 3183,
    "value3" : 3604,
    "value4" : 4527,
    "value5" : 5600,
    "value6" : 5140,
    "value7" : 169
  }, {
    "year" : "2020.06",
    "value1" : 44,
    "value2" : 3163,
    "value3" : 3618,
    "value4" : 4628,
    "value5" : 5750,
    "value6" : 5185,
    "value7" : 172
  }, {
    "year" : "2020.07",
    "value1" : 39,
    "value2" : 3031,
    "value3" : 3615,
    "value4" : 4487,
    "value5" : 5862,
    "value6" : 5548,
    "value7" : 197
  } 
  /*
  },{
    "year" : "2020.12",
    "value1" : 31,
    "value2" : 2344,
    "value3" : 2674,
    "value4" : 3516,
    "value5" : 4690,
    "value6" : 4381,
    "value7" : 165
  }, {
    "year" : "2021.01",
    "value1" : 38,
    "value2" : 2805,
    "value3" : 2978,
    "value4" : 3852,
    "value5" : 5323,
    "value6" : 5589,
    "value7" : 181
  } 
  */
  ];

  // Create axes
  categoryAxis = chart_3_8.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0.5;

  /* Create value axis */
  valueAxis = chart_3_8.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 25000;

  // Create series
  function createSeries8(field, name, stacked) {
    var series = chart_3_8.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;

    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_3_8.series.each(function(item) {
        text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
      });
      return text;
    });
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#fff");
    series.tooltip.label.fill = am4core.color("#00");

    // Prevent cross-fading of tooltips
    series.tooltip.defaultState.transitionDuration = 0;
    series.tooltip.hiddenState.transitionDuration = 0;

    // series.columns.template.tooltipText = "[font-size: 12px bold]{year} 년
    // [font-size: 12px bold]{name}: [font-size: 12px]{valueY}[/]";
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(60);
  }

  createSeries8("value1", "20세미만", true);
  createSeries8("value2", "20 ~ 29세", true);
  createSeries8("value3", "30 ~ 39세", true);
  createSeries8("value4", "40 ~ 49세", true);
  createSeries8("value5", "50 ~ 59세", true);
  createSeries8("value6", "60 ~ 69세", true);
  createSeries8("value7", "70세이상", true);

  // Add cursor
  chart_3_8.cursor = new am4charts.XYCursor();
  chart_3_8.cursor.maxTooltipDistance = 0;
      chart_3_8.cursor.behavior = 'none';
  // Add legend
  chart_3_8.legend = new am4charts.Legend();

  chart_3_8.logo.height = -15000;
  });
}

/* 03_09_생략)전주지역 기업현황 ------------------------------------------------------*/
if(val == 'chart_box_03_09'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // (3-9. 생략_20220314) 전주지역 기업현황_chartdiv22 //
  chart_3_9 = am4core.create("chart_03_09", am4charts.XYChart);

  // Add data
  chart_3_9.data = [ {
    "year" : "2015",
    "value1" : 25,
    "value2" : 149,
    "value3" : 0,
    "value4" : 28,
    "value5" : 484,
    "value6" : 150
  }, {
    "year" : "2016",
    "value1" : 32,
    "value2" : 151,
    "value3" : 2,
    "value4" : 26,
    "value5" : 493,
    "value6" : 171
  }, {
    "year" : "2017",
    "value1" : 32,
    "value2" : 157,
    "value3" : 4,
    "value4" : 33,
    "value5" : 533,
    "value6" : 199
  }, {
    "year" : "2018",
    "value1" : 32,
    "value2" : 155,
    "value3" : 4,
    "value4" : 45,
    "value5" : 580,
    "value6" : 222
  }, {
    "year" : "2019",
    "value1" : 46,
    "value2" : 159,
    "value3" : 5,
    "value4" : 51,
    "value5" : 609,
    "value6" : 245
  }, {
    "year" : "2020",
    "value1" : 50,
    "value2" : 155,
    "value3" : 7,
    "value4" : 54,
    "value5" : 661,
    "value6" : 256
  } ];

  // Create axes
  categoryAxis = chart_3_9.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.cellStartLocation = 0.1;
  categoryAxis.renderer.cellEndLocation = 0.9;

  valueAxis = chart_3_9.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 1500;

  // Create series
  function createSeries9(field, name, stacked) {
    var series = chart_3_9.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;

    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 12px bold]{categoryX} 기준[/]\n"
      chart_3_9.series.each(function(item) {
        text += "[" + item.stroke.hex + "]■[/] [font-size: 12px bold]" + item.name + ": [font-size: 12px]{" + item.dataFields.valueY + "}\n";
      });
      return text;
    });
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#fff");
    series.tooltip.label.fill = am4core.color("#00");

    // Prevent cross-fading of tooltips
    series.tooltip.defaultState.transitionDuration = 0;
    series.tooltip.hiddenState.transitionDuration = 0;

    // series.columns.template.tooltipText = "[font-size: 12px bold]{year} 년
    // [font-size: 12px bold]{name}: [font-size: 12px]{valueY}[/]";
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(60);
  }

  createSeries9("value1", "친환경", true);
  createSeries9("value2", "산업단지", true);
  createSeries9("value3", "자연순화특화", true);
  createSeries9("value4", "도시첨단", true);
  createSeries9("value5", "덕진개별", true);
  createSeries9("value6", "완산개별", true);

  // Add cursor
  chart_3_9.cursor = new am4charts.XYCursor();
  chart_3_9.cursor.maxTooltipDistance = 0;
      chart_3_9.cursor.behavior = 'none';
  // Add legend
  chart_3_9.legend = new am4charts.Legend();

  chart_3_9.logo.height = -15000;
  });
}



/*----- 04_환경·녹지 Chart 영역---------------------------------------------------------------------------*/
/* 04_01_월별기온 ------------------------------------------------------*/
if (val == 'chart_box_04_01') {
  am4core.ready(function () {
    am4core.useTheme(am4themes_animated);

    // 4-1. 월별기온_chartdiv23 //
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

/* 04_02_월별강수량 ------------------------------------------------------*/
if (val == 'chart_box_04_02') {
  am4core.ready(function () {

    am4core.useTheme(am4themes_animated);

    // 4-2. 월별강수량_chartdiv24 //
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

/* 04_03_미세먼지현황 ------------------------------------------------------*/
if (val == 'chart_box_04_03') {
  am4core.ready(function () {

    am4core.useTheme(am4themes_animated);

    // 4-3. 미세먼지현황_chartdiv25 //
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

/* 04_04_쓰레기배출 ------------------------------------------------------*/
if (val == 'chart_box_04_04') {
  am4core.ready(function () {

    am4core.useTheme(am4themes_animated);

    // 4-5. 폐기물 발생 및 재활용 현황_chartdiv26 //
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

/* 04_05_폐기물발생및재활용현황 ------------------------------------------------------*/
if (val == 'chart_box_04_05') {
  am4core.ready(function () {

    am4core.useTheme(am4themes_animated);

    // 4-4. 쓰레기 배출_chartdiv27 //
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

/* 04_06_녹지현황(면적) ------------------------------------------------------*/
if (val == 'chart_box_04_06') {
  am4core.ready(function () {
    am4core.useTheme(am4themes_animated);

    // 4-6. 녹지현황(면적)_chartdiv28 //
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



/*----- 05_교통·안전 Chart 영역---------------------------------------------------------------------------*/
// /* 05_01_자동차등록 -----------------------------------------------------------*/
// if(val == 'chart_box_05_01'){
//   am4core.ready(function() {
//   am4core.useTheme(am4themes_animated);

//   // 5-1. 자동차 등록_chartdiv29 //
//   chart_5_1 = am4core.create("chart_05_01", am4charts.XYChart);

//   // Data for both series
//   chart_5_1.data = [ {
//     "year" : "2021",
//     "series1" : 288821,
//     "series2" : 38911,
//     "series3" : 24703,
//     "series4" : 9337,
//     "series5" : 1261
//   }, {
//     "year" : "2022",
//     "series1" : 293406,
//     "series2" : 39711,
//     "series3" : 24893,
//     "series4" : 9017,
//     "series5" : 1420
//   }, {
//     "year" : "2023.04",
//     "series1" : 293916,
//     "series2" : 40206,
//     "series3" : 24983,
//     "series4" : 8833,
//     "series5" : 1439
//   }, {
//     "year" : "2023.05",
//     "series1" : 293863,
//     "series2" : 40090,
//     "series3" : 25007,
//     "series4" : 8768,
//     "series5" : 1449
//   }, {
//     "year" : "2023.06",
//     "series1" : 293850,
//     "series2" : 40075,
//     "series3" : 25019,
//     "series4" : 8709,
//     "series5" : 1451
//   }, {
//     "year" : "2023.07",
//     "series1" : 293918,
//     "series2" : 40019,
//     "series3" : 25009,
//     "series4" : 8662,
//     "series5" : 1452
//   }, {
//     "year" : "2023.08",
//     "series1" : 293547,
//     "series2" : 40043,
//     "series3" : 8610,
//     "series4" : 1451,
//     "series5" : 25018
//   }, {
//     "year" : "2023.09",
//     "series1" : 293872,
//     "series2" : 39999,
//     "series3" : 8597,
//     "series4" : 1453,
//     "series5" : 25055
//   }, {
//     "year" : "2023.10",
//     "series1" : 293911,
//     "series2" : 39951,
//     "series3" : 8598,
//     "series4" : 1457,
//     "series5" : 25057
//   }, ];

//   // Create axes
//   categoryAxis = chart_5_1.xAxes.push(new am4charts.CategoryAxis());
//   categoryAxis.dataFields.category = "year";
//   categoryAxis.renderer.grid.template.location = 0;

//   categoryAxis.renderer.grid.template.location = 0;
//   categoryAxis.renderer.minGridDistance = 20;

//   valueAxis = chart_5_1.yAxes.push(new am4charts.ValueAxis());
//   valueAxis.min = 0;
//   valueAxis.max = 300000;

//   // Create series
//   function createSeries1(field, name, stacked) {
//     var series = chart_5_1.series.push(new am4charts.ColumnSeries());
//     series.dataFields.valueY = field;
//     series.dataFields.categoryX = "year";
//     series.name = name;
//     // Set up tooltip
//     series.adapter.add("tooltipText", function(ev) {
//       var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
//       chart_5_1.series.each(function(item) {
//         text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 대\n";
//       });
//       return text;
//     });
//     series.tooltip.getFillFromObject = false;
//     series.tooltip.background.fill = am4core.color("#fff");
//     series.tooltip.label.fill = am4core.color("#00");
//     series.stacked = stacked;
//     series.columns.template.width = am4core.percent(60);
//   }

//   createSeries1("series1", "승용", false);
//   createSeries1("series2", "화물", false);
//   createSeries1("series3", "이륜", false);
//   createSeries1("series4", "승합", false);
//   createSeries1("series5", "특수", false);
//   /* Add legend */
//   chart_5_1.legend = new am4charts.Legend();

//   /* Create a cursor */
//   chart_5_1.cursor = new am4charts.XYCursor();
//   chart_5_1.cursor.maxTooltipDistance = 0;
//   chart_5_1.cursor.behavior = 'none';
//   chart_5_1.logo.height = -15000;

//   // axis break
//   axisBreak = valueAxis.axisBreaks.create();
//   axisBreak.startValue = 50000;
//   axisBreak.endValue = 220000;
//   // axisBreak.breakSize = 0.005;

//   // fixed axis break
//   d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
//   axisBreak.breakSize = 0.05 * (1 - d) / d;

//   // make break expand on hover
//   hoverState = axisBreak.states.create("hover");
//   hoverState.properties.breakSize = 1;
//   hoverState.properties.opacity = 0.1;
//   hoverState.transitionDuration = 1500;

//   axisBreak.defaultState.transitionDuration = 1000;
//   });
// }

// /* 05_02_영업용자동차등록대수 -----------------------------------------------------------*/
// if(val == 'chart_box_05_02'){
//   am4core.ready(function() {

//   // 5-2. 영업용 자동차 등록대수_chartdiv30 //
//   am4core.useTheme(am4themes_animated);

//   chart_5_2 = am4core.create("chart_05_02", am4charts.XYChart);

//   // Add data
//   chart_5_2.data = [ {
//     "year" : "2016",
//     "series1" : 3862,
//     "series2" : 1943,
//     "series3" : 1871,
//     "series4" : 402,
//     "series5" : 501,
//     "series6" : 457
//   }, {
//     "year" : "2017",
//     "series1" : 3861,
//     "series2" : 2026,
//     "series3" : 2054,
//     "series4" : 411,
//     "series5" : 477,
//     "series6" : 457
//   }, {
//     "year" : "2018",
//     "series1" : 3860,
//     "series2" : 2106,
//     "series3" : 2073,
//     "series4" : 409,
//     "series5" : 463,
//     "series6" : 445
//   }, {
//     "year" : "2019",
//     "series1" : 3859,
//     "series2" : 2041,
//     "series3" : 2130,
//     "series4" : 408,
//     "series5" : 458,
//     "series6" : 445
//   }, {
//     "year" : "2020",
//     "series1" : 3858,
//     "series2" : 2009,
//     "series3" : 2203,
//     "series4" : 408,
//     "series5" : 443,
//     "series6" : 466
//   }, {
//     "year" : "2021",
//     "series1" : 3798,
//     "series2" : 1907,
//     "series3" : 2367,
//     "series4" : 399,
//     "series5" : 443,
//     "series6" : 468

//   } ];

//   // Create axes
//   categoryAxis = chart_5_2.xAxes.push(new am4charts.CategoryAxis());
//   categoryAxis.dataFields.category = "year";
//   categoryAxis.renderer.grid.template.location = 0;

//   valueAxis = chart_5_2.yAxes.push(new am4charts.ValueAxis());
//   valueAxis.min = 0;
//   valueAxis.max = 4500;

//   // Create series
//   function createSeries2(field, name, stacked) {
//     var series = chart_5_2.series.push(new am4charts.ColumnSeries());
//     series.dataFields.valueY = field;
//     series.dataFields.categoryX = "year";
//     series.name = name;
//     // Set up tooltip
//     series.adapter.add("tooltipText", function(ev) {
//       var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
//       chart_5_2.series.each(function(item) {
//         text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 대\n";
//       });
//       return text;
//     });
//     series.tooltip.getFillFromObject = false;
//     series.tooltip.background.fill = am4core.color("#fff");
//     series.tooltip.label.fill = am4core.color("#00");
//     series.stacked = stacked;
//     series.columns.template.width = am4core.percent(60);
//   }

//   createSeries2("series1", "택시", false);
//   createSeries2("series2", "일반화물", false);
//   createSeries2("series3", "개인화물", false);
//   createSeries2("series4", "시내버스", false);
//   createSeries2("series5", "시외버스", false);
//   createSeries2("series6", "전세버스", false);
//   /* Add legend */
//   chart_5_2.legend = new am4charts.Legend();

//   /* Create a cursor */
//   chart_5_2.cursor = new am4charts.XYCursor();
//   chart_5_2.cursor.maxTooltipDistance = 0;
//   chart_5_2.cursor.behavior = 'none';
//   chart_5_2.logo.height = -15000;

//   // axis break
//   // axisBreak = valueAxis.axisBreaks.create();
//   // axisBreak.startValue = 2500;
//   // axisBreak.endValue = 3500;
//   // axisBreak.breakSize = 0.005;

//   // fixed axis break
//   d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
//   axisBreak.breakSize = 0.05 * (1 - d) / d;

//   // make break expand on hover
//   hoverState = axisBreak.states.create("hover");
//   hoverState.properties.breakSize = 1;
//   hoverState.properties.opacity = 0.1;
//   hoverState.transitionDuration = 1500;

//   axisBreak.defaultState.transitionDuration = 1000;
//   });
// }

// /* 05_03_도로현황 -----------------------------------------------------------*/
// if(val == 'chart_box_05_03'){
//   am4core.ready(function() {
//   am4core.useTheme(am4themes_animated);

//   // 5-3. 도로 현황_chartdiv31 //
//   chart_5_3 = am4core.create("chart_05_03", am4charts.XYChart);
//   chart_5_3.hiddenState.properties.opacity = 0; // this creates initial fade-in

//     // Add data
//     chart_5_3.data = [{
//       "year": "2016",
//       "value1": 773601,
//       "value2": 35095,
//       "value3": 15415,
//       "value4": 13080,
//       "value5": 837191
//     }, {
//       "year": "2017",
//       "value1": 773601,
//       "value2": 35095,
//       "value3": 15415,
//       "value4": 13080,
//       "value5": 837191
//     }, {
//       "year": "2018",
//       "value1": 864087,
//       "value2": 54844,
//       "value3": 21845,
//       "value4": 13080,
//       "value5": 953856
//     }, {
//       "year": "2019",
//       "value1": 864087,
//       "value2": 57194,
//       "value3": 21845,
//       "value4": 13080,
//       "value5": 956206
//     }, {
//       "year": "2020",
//       "value1": 864087,
//       "value2": 57194,
//       "value3": 21845,
//       "value4": 13080,
//       "value5": 956206 
//     }, {
//       "year": "2021",
//       "value1": 865585,
//       "value2": 57194,
//       "value3": 21845,
//       "value4": 13080,
//       "value5": 957704 
//     }];
    
//   /* Create axes */
//   categoryAxis = chart_5_3.xAxes.push(new am4charts.CategoryAxis());
//   categoryAxis.dataFields.category = "year";
//   categoryAxis.renderer.minGridDistance = 30;

//   /* Create value axis */
//   valueAxis = chart_5_3.yAxes.push(new am4charts.ValueAxis());
//   valueAxis.min = 0;
//   valueAxis.max = 1200000;
//   valueAxis.renderer.opposite = true;
//   /* Create value axis */
//   valueAxis1 = chart_5_3.yAxes.push(new am4charts.ValueAxis());
//   valueAxis1.min = 0;
//   valueAxis1.max = 1200000;

//   valueAxis1.syncWithAxis = valueAxis;

//   // Create series
//   function createSeries3(field, name, stacked) {
//     if(field == "value5")
//     {
//       var series = chart_5_3.series.push(new am4charts.LineSeries());
//       series.dataFields.valueY = field;
//       series.dataFields.categoryX = "year";
//       series.name = name;
//       series.tooltipText = "";
//       series.strokeWidth = 3;
//       series.yAxis = valueAxis;
//       series.stroke = am4core.color("#fdd400");
//       series.fill = am4core.color("#fdd400");
//       // Set up tooltip
//       series.adapter.add("tooltipText", function(ev) {
//         var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
//         chart_5_3.series.each(function(item) {
//           if(item.name == "총계")
//           {
//             text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} m\n";
//           }          
//           else
//           {
//             text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} m\n";
//           }
//         });
//         return text;
//       });
  
//       series.tooltip.getFillFromObject = false;
//       series.tooltip.background.fill = am4core.color("#fff");
//       series.tooltip.label.fill = am4core.color("#00");
  
//       // Prevent cross-fading of tooltips
//       series.tooltip.defaultState.transitionDuration = 0;
//       series.tooltip.hiddenState.transitionDuration = 0;
  
//       var bullet = series.bullets.push(new am4charts.CircleBullet());
//       bullet.circle.radius = 5;
//     }
//     else
//     {
//       var series = chart_5_3.series.push(new am4charts.ColumnSeries());
//       series.dataFields.valueY = field;
//       series.dataFields.categoryX = "year";
//       series.name = name;
//       series.yAxis = valueAxis1;
//       // Set up tooltip
//       series.adapter.add("tooltipText", function(ev) {
//         var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
//         chart_5_3.series.each(function(item) {
//           if(item.name == "총계")
//           {
//             text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} m\n";
//           }          
//           else
//           {
//             text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} m\n";
//           }
//         });
//         return text;
//       });
//       series.tooltip.getFillFromObject = false;
//       series.tooltip.background.fill = am4core.color("#fff");
//       series.tooltip.label.fill = am4core.color("#00");
//       series.stacked = stacked;
//       series.columns.template.width = am4core.percent(60);
//     }
//   }

//   createSeries3("value1", "시도", true);
//   createSeries3("value2", "일반국도", true);
//   createSeries3("value3", "지방도", true);
//   createSeries3("value4", "고속도로", true);
//   createSeries3("value5", "총계", false); 

//   // Add legend
//   chart_5_3.legend = new am4charts.Legend();

//   // Add cursor
//   chart_5_3.cursor = new am4charts.XYCursor();
//   chart_5_3.cursor.maxTooltipDistance = 0;
//   chart_5_3.cursor.behavior = 'none';
//   chart_5_3.logo.height = -15000;
//     });
// }

// /* 05_04_교통사고건수 -----------------------------------------------------------*/
// if(val == 'chart_box_05_04'){
//   am4core.ready(function() {
//   am4core.useTheme(am4themes_animated);

//   // 5-4. 교통사고건수(자동차)_chartdiv32 //
//   chart_5_4 = am4core.create("chart_05_04", am4charts.XYChart);

//   // Data for both series
//   chart_5_4.data = [ {
//     "year" : "2016",
//     "series1" : 3214,
//     "series2" : 3666,
//     "series3" : 50
//   }, {
//     "year" : "2017",
//     "series1" : 2427,
//     "series2" : 3801,
//     "series3" : 53
//   }, {
//     "year" : "2018",
//     "series1" : 2256,
//     "series2" : 3342,
//     "series3" : 36
//   }, {
//     "year" : "2019",
//     "series1" : 2365,
//     "series2" : 3541,
//     "series3" : 35
//   }, {
//     "year" : "2020",
//     "series1" : 2082,
//     "series2" : 3116,
//     "series3" : 40
//   }, {
//     "year" : "2021",
//     "series1" : 2151,
//     "series2" : 3070,
//     "series3" : 39
//   }, {
//     "year" : "2022",
//     "series1" : 1918,
//     "series2" : 2720,
//     "series3" : 26
//   } ];

//   // Create axes
//   categoryAxis = chart_5_4.xAxes.push(new am4charts.CategoryAxis());
//   categoryAxis.dataFields.category = "year";
//   categoryAxis.renderer.grid.template.location = 0;

//   valueAxis = chart_5_4.yAxes.push(new am4charts.ValueAxis());
//   valueAxis.min = 0;
//   valueAxis.max = 4500;

//   // Create series
//   function createSeries4(field, name, stacked) {
//     var series = chart_5_4.series.push(new am4charts.ColumnSeries());
//     series.dataFields.valueY = field;
//     series.dataFields.categoryX = "year";
//     series.name = name;
//     // Set up tooltip
//     series.adapter.add("tooltipText", function(ev) {
//       var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
//       chart_5_4.series.each(function(item) {
//         if(item.name == "사고(건)")
//           {
//             text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 건\n";
//           }          
//           else
//           {
//             text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 명\n";
//           }
//       });
//       return text;
//     });
//     series.tooltip.getFillFromObject = false;
//     series.tooltip.background.fill = am4core.color("#fff");
//     series.tooltip.label.fill = am4core.color("#00");
//     series.stacked = stacked;
//     series.columns.template.width = am4core.percent(60);
//   }

//   createSeries4("series1", "사고(건)", false);
//   createSeries4("series2", "부상(명)", false);
//   createSeries4("series3", "사망(명)", false);
//   /* Add legend */
//   chart_5_4.legend = new am4charts.Legend();

//   /* Create a cursor */
//   chart_5_4.cursor = new am4charts.XYCursor();
//   chart_5_4.cursor.maxTooltipDistance = 0;
//   chart_5_4.cursor.behavior = 'none';
//   chart_5_4.logo.height = -15000;

//   // axis break
//   // axisBreak = valueAxis.axisBreaks.create();
//   // axisBreak.startValue = 50000;
//   // axisBreak.endValue = 200000;
//   // axisBreak.breakSize = 0.005;

//   // fixed axis break
//   d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
//   axisBreak.breakSize = 0.05 * (1 - d) / d;

//   // make break expand on hover
//   hoverState = axisBreak.states.create("hover");
//   hoverState.properties.breakSize = 1;
//   hoverState.properties.opacity = 0.1;
//   hoverState.transitionDuration = 1500;

//   axisBreak.defaultState.transitionDuration = 1000;

//       });
// }

// /* 05_05_화재발생 -----------------------------------------------------------*/
// if(val == 'chart_box_05_05'){
//   am4core.ready(function() {

//   // 5-5. 화재발생_chartdiv33 //
//   am4core.useTheme(am4themes_animated);

//   chart_5_5 = am4core.create("chart_05_05", am4charts.XYChart);

//   // Data for both series
//   chart_5_5.data = [ {
//     "year" : "2015",
//     "value1" : 928572,
//     "value2" : 335,
//     "value3" : 14
//   }, {
//     "year" : "2016",
//     "value1" : 1467276,
//     "value2" : 329,
//     "value3" : 13
//   }, {
//     "year" : "2017",
//     "value1" : 1734507,
//     "value2" : 339,
//     "value3" : 18
//   }, {
//     "year" : "2018",
//     "value1" : 1861256,
//     "value2" : 345,
//     "value3" : 45
//   }, {
//     "year" : "2019",
//     "value1" : 3247296,
//     "value2" : 413,
//     "value3" : 23
//   }, {
//     "year" : "2020",
//     "value1" : 3076936,
//     "value2" : 457,
//     "value3" : 15
//   }, {
//     "year" : "2021",
//     "value1" : 2917270,
//     "value2" : 390,
//     "value3" : 36
//   }, {
//     "year" : "2022",
//     "value1" : 2008709,
//     "value2" : 343,
//     "value3" : 11
//   } ];

//   /* Create axes */
//   categoryAxis = chart_5_5.xAxes.push(new am4charts.CategoryAxis());
//   categoryAxis.dataFields.category = "year";
//   categoryAxis.renderer.minGridDistance = 30;

//   /* Create value axis */
//   valueAxis = chart_5_5.yAxes.push(new am4charts.ValueAxis());
//   valueAxis.min = 0;
//   valueAxis.max = 10000000;
//   valueAxis.renderer.opposite = true;
//   /* Create value axis */
//   valueAxis1 = chart_5_5.yAxes.push(new am4charts.ValueAxis());
//   valueAxis1.min = 0;
//   valueAxis1.max = 600;

//   valueAxis1.syncWithAxis = valueAxis;

//   // Create series
//   function createSeries5(field, name, stacked) {
//     if(field == "value1")
//     {
//       var series = chart_5_5.series.push(new am4charts.LineSeries());
//       series.dataFields.valueY = field;
//       series.dataFields.categoryX = "year";
//       series.name = name;
//       series.tooltipText = "";
//       series.strokeWidth = 3;
//       series.yAxis = valueAxis;
//       series.stroke = am4core.color("#fdd400");
//       series.fill = am4core.color("#fdd400");
//       // Set up tooltip
//       series.adapter.add("tooltipText", function(ev) {
//         var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
//         chart_5_5.series.each(function(item) {
//           if(item.name == "피해액(천원)")
//           {
//             text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 천원\n";
//           }          
//           else if(item.name == "인명피해(명)")        
//           {
//             text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 명\n";
//           }
//           else
//           {
//             text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 건\n";
//           }
//         });
//         return text;
//       });
  
//       series.tooltip.getFillFromObject = false;
//       series.tooltip.background.fill = am4core.color("#fff");
//       series.tooltip.label.fill = am4core.color("#00");
  
//       // Prevent cross-fading of tooltips
//       series.tooltip.defaultState.transitionDuration = 0;
//       series.tooltip.hiddenState.transitionDuration = 0;
  
//       var bullet = series.bullets.push(new am4charts.CircleBullet());
//       bullet.circle.radius = 5;
//     }
//     else
//     {
//       var series = chart_5_5.series.push(new am4charts.ColumnSeries());
//       series.dataFields.valueY = field;
//       series.dataFields.categoryX = "year";
//       series.name = name;
//       series.yAxis = valueAxis1;
//       // Set up tooltip
//       series.adapter.add("tooltipText", function(ev) {
//         var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
//         chart_5_5.series.each(function(item) {
//           if(item.name == "피해액(천원)")
//           {
//             text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 천원\n";
//           }
//           else if(item.name == "인명피해(명)")        
//           {
//             text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 명\n";
//           }
//           else
//           {
//             text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 건\n";
//           }
//         });
//         return text;
//       });
//       series.tooltip.getFillFromObject = false;
//       series.tooltip.background.fill = am4core.color("#fff");
//       series.tooltip.label.fill = am4core.color("#00");
//       series.stacked = stacked;
//       series.columns.template.width = am4core.percent(60);
//     }
//   }
//   createSeries5("value2", "발생(건)", false);
//   createSeries5("value3", "인명피해(명)", false);
//   createSeries5("value1", "피해액(천원)", false);

//   // Add legend
//   chart_5_5.legend = new am4charts.Legend();

//   // Add cursor
//   chart_5_5.cursor = new am4charts.XYCursor();
//   chart_5_5.cursor.maxTooltipDistance = 0;
//       chart_5_5.cursor.behavior = 'none';
//   chart_5_5.logo.height = -15000;
//     });
//   }

// /* 05_06_119구급활동실적 -----------------------------------------------------------*/
// if(val == 'chart_box_05_06'){
//     am4core.ready(function() {
//     am4core.useTheme(am4themes_animated);

//   // 5-6. 119 구급활동 실적_chartdiv34 //
//   chart_5_6 = am4core.create("chart_05_06", am4charts.XYChart);

//   // Data for both series
//   chart_5_6.data = [ {
//     "year" : "2015",
//     "series1" : 38601,
//     "series2" : 24570,
//     "series3" : 25295
//   }, {
//     "year" : "2016",
//     "series1" : 39867,
//     "series2" : 25284,
//     "series3" : 23397
//   }, {
//     "year" : "2017",
//     "series1" : 40867,
//     "series2" : 25669,
//     "series3" : 26275
//   }, {
//     "year" : "2018",
//     "series1" : 43287,
//     "series2" : 26963,
//     "series3" : 26406
//   }, {
//     "year" : "2019",
//     "series1" : 37183,
//     "series2" : 22637,
//     "series3" : 23034
//   }, {
//     "year" : "2020",
//     "series1" : 34778,
//     "series2" : 20478,
//     "series3" : 20820
//   }, {
//     "year" : "2021",
//     "series1" : 40006,
//     "series2" : 22476,
//     "series3" : 22981
//   } ];

//   // Create axes
//   categoryAxis = chart_5_6.xAxes.push(new am4charts.CategoryAxis());
//   categoryAxis.dataFields.category = "year";
//   categoryAxis.renderer.grid.template.location = 0;

//   valueAxis = chart_5_6.yAxes.push(new am4charts.ValueAxis());
//   valueAxis.min = 0;
//   valueAxis.max = 50000;

//   // Create series
//   function createSeries6(field, name, stacked) {
//     var series = chart_5_6.series.push(new am4charts.ColumnSeries());
//     series.dataFields.valueY = field;
//     series.dataFields.categoryX = "year";
//     series.name = name;
//     // Set up tooltip
//     series.adapter.add("tooltipText", function(ev) {
//       var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
//       chart_5_6.series.each(function(item) {
//         if(item.name == "구급환자(명)")
//           {
//             text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 명\n";
//           }          
//           else
//           {
//             text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 건\n";
//           }
//       });
//       return text;
//     });
//     series.tooltip.getFillFromObject = false;
//     series.tooltip.background.fill = am4core.color("#fff");
//     series.tooltip.label.fill = am4core.color("#00");
//     series.stacked = stacked;
//     series.columns.template.width = am4core.percent(60);
//   }

//   createSeries6("series1", "신고건수(건)", false);
//   createSeries6("series2", "이송건수(건)", false);
//   createSeries6("series3", "구급환자(명)", false);
//   /* Add legend */
//   chart_5_6.legend = new am4charts.Legend();

//   /* Create a cursor */
//   chart_5_6.cursor = new am4charts.XYCursor();
//   chart_5_6.cursor.maxTooltipDistance = 0;
//   chart_5_6.cursor.behavior = 'none';
//   chart_5_6.logo.height = -15000;

//   // axis break
//   // axisBreak = valueAxis.axisBreaks.create();
//   // axisBreak.startValue = 50000;
//   // axisBreak.endValue = 200000;
//   // axisBreak.breakSize = 0.005;

//   // fixed axis break
//   d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
//   axisBreak.breakSize = 0.05 * (1 - d) / d;

//   // make break expand on hover
//   hoverState = axisBreak.states.create("hover");
//   hoverState.properties.breakSize = 1;
//   hoverState.properties.opacity = 0.1;
//   hoverState.transitionDuration = 1500;

//   axisBreak.defaultState.transitionDuration = 1000;

//   });
// }



/*----- 06_관광·문화 Chart 영역---------------------------------------------------------------------------*/








// ------------------
}