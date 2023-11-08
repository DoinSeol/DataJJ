
jQuery(function() {
  $('.ac_list li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.ac_list li').removeClass('current');
    $('.chart_wrap').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');

    chart_drawing(tab_id);
  });
})

function chart_drawing(val) 
{
/* 05_01_자동차등록 -----------------------------------------------------------*/
if(val == 'chart_box_05_01'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // 5-1. 자동차 등록_chartdiv29 //
  chart_5_1 = am4core.create("chart_05_01", am4charts.XYChart);

  // Data for both series
  chart_5_1.data = [ {
    "year" : "2021",
    "series1" : 288821,
    "series2" : 38911,
    "series3" : 24703,
    "series4" : 9337,
    "series5" : 1261
  }, {
    "year" : "2022",
    "series1" : 293406,
    "series2" : 39711,
    "series3" : 24893,
    "series4" : 9017,
    "series5" : 1420
  }, {
    "year" : "2023.04",
    "series1" : 293916,
    "series2" : 40206,
    "series3" : 24983,
    "series4" : 8833,
    "series5" : 1439
  }, {
    "year" : "2023.05",
    "series1" : 293863,
    "series2" : 40090,
    "series3" : 25007,
    "series4" : 8768,
    "series5" : 1449
  }, {
    "year" : "2023.06",
    "series1" : 293850,
    "series2" : 40075,
    "series3" : 25019,
    "series4" : 8709,
    "series5" : 1451
  }, {
    "year" : "2023.07",
    "series1" : 293918,
    "series2" : 40019,
    "series3" : 25009,
    "series4" : 8662,
    "series5" : 1452
  }, {
    "year" : "2023.08",
    "series1" : 293547,
    "series2" : 40043,
    "series3" : 8610,
    "series4" : 1451,
    "series5" : 25018
  }, {
    "year" : "2023.09",
    "series1" : 293872,
    "series2" : 39999,
    "series3" : 8597,
    "series4" : 1453,
    "series5" : 25055
  }, {
    "year" : "2023.10",
    "series1" : 293911,
    "series2" : 39951,
    "series3" : 8598,
    "series4" : 1457,
    "series5" : 25057
  }, ];

  // Create axes
  categoryAxis = chart_5_1.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0;

  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 20;

  valueAxis = chart_5_1.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 300000;

  // Create series
  function createSeries1(field, name, stacked) {
    var series = chart_5_1.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
      chart_5_1.series.each(function(item) {
        text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 대\n";
      });
      return text;
    });
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#fff");
    series.tooltip.label.fill = am4core.color("#00");
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(60);
  }

  createSeries1("series1", "승용", false);
  createSeries1("series2", "화물", false);
  createSeries1("series3", "이륜", false);
  createSeries1("series4", "승합", false);
  createSeries1("series5", "특수", false);
  /* Add legend */
  chart_5_1.legend = new am4charts.Legend();

  /* Create a cursor */
  chart_5_1.cursor = new am4charts.XYCursor();
  chart_5_1.cursor.maxTooltipDistance = 0;
  chart_5_1.cursor.behavior = 'none';
  chart_5_1.logo.height = -15000;

  // axis break
  axisBreak = valueAxis.axisBreaks.create();
  axisBreak.startValue = 50000;
  axisBreak.endValue = 220000;
  // axisBreak.breakSize = 0.005;

  // fixed axis break
  d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
  axisBreak.breakSize = 0.05 * (1 - d) / d;

  // make break expand on hover
  hoverState = axisBreak.states.create("hover");
  hoverState.properties.breakSize = 1;
  hoverState.properties.opacity = 0.1;
  hoverState.transitionDuration = 1500;

  axisBreak.defaultState.transitionDuration = 1000;
  });
}

/* 05_02_영업용자동차등록대수 -----------------------------------------------------------*/
if(val == 'chart_box_05_02'){
  am4core.ready(function() {

  // 5-2. 영업용 자동차 등록대수_chartdiv30 //
  am4core.useTheme(am4themes_animated);

  chart_5_2 = am4core.create("chart_05_02", am4charts.XYChart);

  // Add data
  chart_5_2.data = [ {
    "year" : "2016",
    "series1" : 3862,
    "series2" : 1943,
    "series3" : 1871,
    "series4" : 402,
    "series5" : 501,
    "series6" : 457
  }, {
    "year" : "2017",
    "series1" : 3861,
    "series2" : 2026,
    "series3" : 2054,
    "series4" : 411,
    "series5" : 477,
    "series6" : 457
  }, {
    "year" : "2018",
    "series1" : 3860,
    "series2" : 2106,
    "series3" : 2073,
    "series4" : 409,
    "series5" : 463,
    "series6" : 445
  }, {
    "year" : "2019",
    "series1" : 3859,
    "series2" : 2041,
    "series3" : 2130,
    "series4" : 408,
    "series5" : 458,
    "series6" : 445
  }, {
    "year" : "2020",
    "series1" : 3858,
    "series2" : 2009,
    "series3" : 2203,
    "series4" : 408,
    "series5" : 443,
    "series6" : 466
  }, {
    "year" : "2021",
    "series1" : 3798,
    "series2" : 1907,
    "series3" : 2367,
    "series4" : 399,
    "series5" : 443,
    "series6" : 468

  } ];

  // Create axes
  categoryAxis = chart_5_2.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0;

  valueAxis = chart_5_2.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 4500;

  // Create series
  function createSeries2(field, name, stacked) {
    var series = chart_5_2.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
      chart_5_2.series.each(function(item) {
        text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 대\n";
      });
      return text;
    });
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#fff");
    series.tooltip.label.fill = am4core.color("#00");
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(60);
  }

  createSeries2("series1", "택시", false);
  createSeries2("series2", "일반화물", false);
  createSeries2("series3", "개인화물", false);
  createSeries2("series4", "시내버스", false);
  createSeries2("series5", "시외버스", false);
  createSeries2("series6", "전세버스", false);
  /* Add legend */
  chart_5_2.legend = new am4charts.Legend();

  /* Create a cursor */
  chart_5_2.cursor = new am4charts.XYCursor();
  chart_5_2.cursor.maxTooltipDistance = 0;
  chart_5_2.cursor.behavior = 'none';
  chart_5_2.logo.height = -15000;

  // axis break
  // axisBreak = valueAxis.axisBreaks.create();
  // axisBreak.startValue = 2500;
  // axisBreak.endValue = 3500;
  // axisBreak.breakSize = 0.005;

  // fixed axis break
  d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
  axisBreak.breakSize = 0.05 * (1 - d) / d;

  // make break expand on hover
  hoverState = axisBreak.states.create("hover");
  hoverState.properties.breakSize = 1;
  hoverState.properties.opacity = 0.1;
  hoverState.transitionDuration = 1500;

  axisBreak.defaultState.transitionDuration = 1000;
  });
}

/* 05_03_도로현황 -----------------------------------------------------------*/
if(val == 'chart_box_05_03'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // 5-3. 도로 현황_chartdiv31 //
  chart_5_3 = am4core.create("chart_05_03", am4charts.XYChart);
  chart_5_3.hiddenState.properties.opacity = 0; // this creates initial fade-in

    // Add data
    chart_5_3.data = [{
      "year": "2016",
      "value1": 773601,
      "value2": 35095,
      "value3": 15415,
      "value4": 13080,
      "value5": 837191
    }, {
      "year": "2017",
      "value1": 773601,
      "value2": 35095,
      "value3": 15415,
      "value4": 13080,
      "value5": 837191
    }, {
      "year": "2018",
      "value1": 864087,
      "value2": 54844,
      "value3": 21845,
      "value4": 13080,
      "value5": 953856
    }, {
      "year": "2019",
      "value1": 864087,
      "value2": 57194,
      "value3": 21845,
      "value4": 13080,
      "value5": 956206
    }, {
      "year": "2020",
      "value1": 864087,
      "value2": 57194,
      "value3": 21845,
      "value4": 13080,
      "value5": 956206 
    }, {
      "year": "2021",
      "value1": 865585,
      "value2": 57194,
      "value3": 21845,
      "value4": 13080,
      "value5": 957704 
    }];
    
  /* Create axes */
  categoryAxis = chart_5_3.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.minGridDistance = 30;

  /* Create value axis */
  valueAxis = chart_5_3.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 1200000;
  valueAxis.renderer.opposite = true;
  /* Create value axis */
  valueAxis1 = chart_5_3.yAxes.push(new am4charts.ValueAxis());
  valueAxis1.min = 0;
  valueAxis1.max = 1200000;

  valueAxis1.syncWithAxis = valueAxis;

  // Create series
  function createSeries3(field, name, stacked) {
    if(field == "value5")
    {
      var series = chart_5_3.series.push(new am4charts.LineSeries());
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
        var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
        chart_5_3.series.each(function(item) {
          if(item.name == "총계")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} m\n";
          }          
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} m\n";
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
      var series = chart_5_3.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.yAxis = valueAxis1;
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
        chart_5_3.series.each(function(item) {
          if(item.name == "총계")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} m\n";
          }          
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} m\n";
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

  createSeries3("value1", "시도", true);
  createSeries3("value2", "일반국도", true);
  createSeries3("value3", "지방도", true);
  createSeries3("value4", "고속도로", true);
  createSeries3("value5", "총계", false); 

  // Add legend
  chart_5_3.legend = new am4charts.Legend();

  // Add cursor
  chart_5_3.cursor = new am4charts.XYCursor();
  chart_5_3.cursor.maxTooltipDistance = 0;
  chart_5_3.cursor.behavior = 'none';
  chart_5_3.logo.height = -15000;
    });
  }
        


/* 05_04_교통사고건수 -----------------------------------------------------------*/
if(val == 'chart_box_05_04'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // 5-4. 교통사고건수(자동차)_chartdiv32 //
  chart_5_4 = am4core.create("chart_05_04", am4charts.XYChart);

  // Data for both series
  chart_5_4.data = [ {
    "year" : "2016",
    "series1" : 3214,
    "series2" : 3666,
    "series3" : 50
  }, {
    "year" : "2017",
    "series1" : 2427,
    "series2" : 3801,
    "series3" : 53
  }, {
    "year" : "2018",
    "series1" : 2256,
    "series2" : 3342,
    "series3" : 36
  }, {
    "year" : "2019",
    "series1" : 2365,
    "series2" : 3541,
    "series3" : 35
  }, {
    "year" : "2020",
    "series1" : 2082,
    "series2" : 3116,
    "series3" : 40
  }, {
    "year" : "2021",
    "series1" : 2151,
    "series2" : 3070,
    "series3" : 39
  }, {
    "year" : "2022",
    "series1" : 1918,
    "series2" : 2720,
    "series3" : 26
  } ];

  // Create axes
  categoryAxis = chart_5_4.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0;

  valueAxis = chart_5_4.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 4500;

  // Create series
  function createSeries4(field, name, stacked) {
    var series = chart_5_4.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
      chart_5_4.series.each(function(item) {
        if(item.name == "사고(건)")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 건\n";
          }          
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 명\n";
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

  createSeries4("series1", "사고(건)", false);
  createSeries4("series2", "부상(명)", false);
  createSeries4("series3", "사망(명)", false);
  /* Add legend */
  chart_5_4.legend = new am4charts.Legend();

  /* Create a cursor */
  chart_5_4.cursor = new am4charts.XYCursor();
  chart_5_4.cursor.maxTooltipDistance = 0;
  chart_5_4.cursor.behavior = 'none';
  chart_5_4.logo.height = -15000;

  // axis break
  // axisBreak = valueAxis.axisBreaks.create();
  // axisBreak.startValue = 50000;
  // axisBreak.endValue = 200000;
  // axisBreak.breakSize = 0.005;

  // fixed axis break
  d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
  axisBreak.breakSize = 0.05 * (1 - d) / d;

  // make break expand on hover
  hoverState = axisBreak.states.create("hover");
  hoverState.properties.breakSize = 1;
  hoverState.properties.opacity = 0.1;
  hoverState.transitionDuration = 1500;

  axisBreak.defaultState.transitionDuration = 1000;

      });
  }


/* 05_05_화재발생 -----------------------------------------------------------*/
if(val == 'chart_box_05_05'){
  am4core.ready(function() {
  // 5-5. 화재발생_chartdiv33 //
  am4core.useTheme(am4themes_animated);

  chart_5_5 = am4core.create("chart_05_05", am4charts.XYChart);

  // Data for both series
  chart_5_5.data = [ {
    "year" : "2015",
    "value1" : 928572,
    "value2" : 335,
    "value3" : 14
  }, {
    "year" : "2016",
    "value1" : 1467276,
    "value2" : 329,
    "value3" : 13
  }, {
    "year" : "2017",
    "value1" : 1734507,
    "value2" : 339,
    "value3" : 18
  }, {
    "year" : "2018",
    "value1" : 1861256,
    "value2" : 345,
    "value3" : 45
  }, {
    "year" : "2019",
    "value1" : 3247296,
    "value2" : 413,
    "value3" : 23
  }, {
    "year" : "2020",
    "value1" : 3076936,
    "value2" : 457,
    "value3" : 15
  }, {
    "year" : "2021",
    "value1" : 2917270,
    "value2" : 390,
    "value3" : 36
  }, {
    "year" : "2022",
    "value1" : 2008709,
    "value2" : 343,
    "value3" : 11
  } ];

  /* Create axes */
  categoryAxis = chart_5_5.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.minGridDistance = 30;

  /* Create value axis */
  valueAxis = chart_5_5.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 10000000;
  valueAxis.renderer.opposite = true;
  /* Create value axis */
  valueAxis1 = chart_5_5.yAxes.push(new am4charts.ValueAxis());
  valueAxis1.min = 0;
  valueAxis1.max = 600;

  valueAxis1.syncWithAxis = valueAxis;

  // Create series
  function createSeries5(field, name, stacked) {
    if(field == "value1")
    {
      var series = chart_5_5.series.push(new am4charts.LineSeries());
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
        var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
        chart_5_5.series.each(function(item) {
          if(item.name == "피해액(천원)")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 천원\n";
          }          
          else if(item.name == "인명피해(명)")        
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 명\n";
          }
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 건\n";
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
      var series = chart_5_5.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.yAxis = valueAxis1;
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
        chart_5_5.series.each(function(item) {
          if(item.name == "피해액(천원)")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 천원\n";
          }
          else if(item.name == "인명피해(명)")        
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 명\n";
          }
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 건\n";
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
  createSeries5("value2", "발생(건)", false);
  createSeries5("value3", "인명피해(명)", false);
  createSeries5("value1", "피해액(천원)", false);

  // Add legend
  chart_5_5.legend = new am4charts.Legend();

  // Add cursor
  chart_5_5.cursor = new am4charts.XYCursor();
  chart_5_5.cursor.maxTooltipDistance = 0;
      chart_5_5.cursor.behavior = 'none';
  chart_5_5.logo.height = -15000;
    });
  }


/* 05_06_119구급활동실적 -----------------------------------------------------------*/
  if(val == 'chart_box_05_06'){
    am4core.ready(function() {
    am4core.useTheme(am4themes_animated);

  // 5-6. 119 구급활동 실적_chartdiv34 //
  chart_5_6 = am4core.create("chart_05_06", am4charts.XYChart);

  // Data for both series
  chart_5_6.data = [ {
    "year" : "2015",
    "series1" : 38601,
    "series2" : 24570,
    "series3" : 25295
  }, {
    "year" : "2016",
    "series1" : 39867,
    "series2" : 25284,
    "series3" : 23397
  }, {
    "year" : "2017",
    "series1" : 40867,
    "series2" : 25669,
    "series3" : 26275
  }, {
    "year" : "2018",
    "series1" : 43287,
    "series2" : 26963,
    "series3" : 26406
  }, {
    "year" : "2019",
    "series1" : 37183,
    "series2" : 22637,
    "series3" : 23034
  }, {
    "year" : "2020",
    "series1" : 34778,
    "series2" : 20478,
    "series3" : 20820
  }, {
    "year" : "2021",
    "series1" : 40006,
    "series2" : 22476,
    "series3" : 22981
  } ];

  // Create axes
  categoryAxis = chart_5_6.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0;

  valueAxis = chart_5_6.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 50000;

  // Create series
  function createSeries6(field, name, stacked) {
    var series = chart_5_6.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
      chart_5_6.series.each(function(item) {
        if(item.name == "구급환자(명)")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 명\n";
          }          
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 건\n";
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

  createSeries6("series1", "신고건수(건)", false);
  createSeries6("series2", "이송건수(건)", false);
  createSeries6("series3", "구급환자(명)", false);
  /* Add legend */
  chart_5_6.legend = new am4charts.Legend();

  /* Create a cursor */
  chart_5_6.cursor = new am4charts.XYCursor();
  chart_5_6.cursor.maxTooltipDistance = 0;
  chart_5_6.cursor.behavior = 'none';
  chart_5_6.logo.height = -15000;

  // axis break
  // axisBreak = valueAxis.axisBreaks.create();
  // axisBreak.startValue = 50000;
  // axisBreak.endValue = 200000;
  // axisBreak.breakSize = 0.005;

  // fixed axis break
  d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
  axisBreak.breakSize = 0.05 * (1 - d) / d;

  // make break expand on hover
  hoverState = axisBreak.states.create("hover");
  hoverState.properties.breakSize = 1;
  hoverState.properties.opacity = 0.1;
  hoverState.transitionDuration = 1500;

  axisBreak.defaultState.transitionDuration = 1000;

  });
}

}

$(document).ready(function(){
  var first = 'chart_box1';
  chart_drawing(first);
});
