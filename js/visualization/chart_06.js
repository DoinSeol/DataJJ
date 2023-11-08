
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
  
/* 06_01_주요관관지관광객수 -----------------------------------------------------------*/
if(val == 'chart_box_06_01'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // 6-1. 주요 관광지 관광객수_chartdiv35 //
  am4core.options.queue = true;

  chart_6_1 = am4core.create("chart_06_01", am4charts.XYChart);
  chart_6_1.hiddenState.properties.opacity = 0; // this creates initial fade-in

  // Add data
  chart_6_1.data = [ {
    "year" : "2016",
    "value1" : 1095266,
    "value2" : 343021,
    "value3" : 0,
    "value4" : 987845,
    "value5" : 39262,
    "value6" : 0,
    "value7" : 0,
    "value8" : 0,
    "value9" : 0
  }, {
    "year" : "2017",
    "value1" : 1211682,
    "value2" : 417317,
    "value3" : 148580,
    "value4" : 595975,
    "value5" : 21107,
    "value6" : 57855,
    "value7" : 30232,
    "value8" : 0,
    "value9" : 153992
  }, {
    "year" : "2018",
    "value1" : 891387,
    "value2" : 430540,
    "value3" : 296832,
    "value4" : 783449,
    "value5" : 19168,
    "value6" : 119894,
    "value7" : 33774,
    "value8" : 0,
    "value9" : 537455
  }, {
    "year" : "2019",
    "value1" : 821527,
    "value2" : 447968,
    "value3" : 268693,
    "value4" : 806060,
    "value5" : 20080,
    "value6" : 129340,
    "value7" : 25747,
    "value8" : 61990,
    "value9" : 646310
  }, {
    "year" : "2020",
    "value1" : 284862,
    "value2" : 94976,
    "value3" : 153062,
    "value4" : 252652,
    "value5" : 863,
    "value6" : 24766,
    "value7" : 0,
    "value8" : 37053,
    "value9" : 371564
  }, {
    "year" : "2021",
    "value1" : 447937,
    "value2" : 95659,
    "value3" : 38721,
    "value4" : 723715,
    "value5" : 744,
    "value6" : 49130,
    "value7" : 0,
    "value8" : 46570,
    "value9" : 530921
  }, {
    "year" : "2022.06",
    "value1" : 278465,
    "value2" : 194008,
    "value3" : 20455,
    "value4" : 439678,
    "value5" : 2719,
    "value6" : 26154,
    "value7" : 0,
    "value8" : 32381,
    "value9" : 327423
  }  ];

  // Create axes
  categoryAxis = chart_6_1.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.autoGridCount = false;
  categoryAxis.labelFrequency = 0;
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0.5;
  categoryAxis.renderer.minGridDistance = 20;
  categoryAxis.renderer.cellStartLocation = 0.1;
  categoryAxis.renderer.cellEndLocation = 0.9;

  valueAxis = chart_6_1.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 1250000;
  valueAxis.autoGridCount = false;
  valueAxis.boldLabels = true;
  valueAxis.gridCount = 4;
  
  // Create series
  function createSeries1(field, name) {
    var series = chart_6_1.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.tooltipText = "";
    series.strokeWidth = 3;

    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
      chart_6_1.series.each(function(item) {
        text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 명\n";
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

  createSeries1("value1", "경기전");
  createSeries1("value2", "국립전주박물관");
  createSeries1("value3", "스파라쿠아 전주온천");
  createSeries1("value4", "전주동물원");
  createSeries1("value5", "전주한벽문화관");
  createSeries1("value6", "전주한옥레일바이크");
  createSeries1("value7", "전주한지박물관");
  createSeries1("value8", "팔복예술공장");
  createSeries1("value9", "한국도로공사수목원");

  // Add legend
  chart_6_1.legend = new am4charts.Legend();

  // Add cursor
  chart_6_1.cursor = new am4charts.XYCursor();
  chart_6_1.cursor.maxTooltipDistance = 0;
  chart_6_1.cursor.behavior = 'none';
  chart_6_1.logo.height = -15000;

  /*
  * // this is exactly the same, but with events axisBreak.events.on("over",
  * function() { axisBreak.animate( [{ property: "breakSize", to: 1 }, {
  * property: "opacity", to: 0.1 }], 1500, am4core.ease.sinOut ); });
  * axisBreak.events.on("out", function() { axisBreak.animate( [{ property:
  * "breakSize", to: 0.005 }, { property: "opacity", to: 1 }], 1000,
  * am4core.ease.quadOut ); });
  */

  chart_6_1.logo.height = -15000;

  });
}

//
/* 06_02_생략)통신사 관광지 관광객수 -----------------------------------------------------------*/
// (6-2. 생략_20220314) 통신사 관광지 관광객수_chartdiv36 //
// 자료 없음
//

/* 06_03_관광사업체등록현황 -----------------------------------------------------------*/
if(val == 'chart_box_06_03'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // 6-2. 관광 사업체 등록 현황_chartdiv37 //
  chart_6_3 = am4core.create("chart_06_03", am4charts.XYChart);
  chart_6_3.hiddenState.properties.opacity = 0; // this creates initial fade-in

  // Add data
  chart_6_3.data = [ {
    "year" : "2016",
    "value1" : 417,
    "value2" : 18,
    "value3" : 102,
    "value4" : 5,
    "value5" : 11,
    "value6" : 199,
    "value7" : 752
  }, {
    "year" : "2017",
    "value1" : 468,
    "value2" : 17,
    "value3" : 118,
    "value4" : 7,
    "value5" : 26,
    "value6" : 210,
    "value7" : 846
  }, {
    "year" : "2018",
    "value1" : 483,
    "value2" : 20,
    "value3" : 121,
    "value4" : 9,
    "value5" : 41,
    "value6" : 240,
    "value7" : 914
  }, {
    "year" : "2019",
    "value1" : 469,
    "value2" : 21,
    "value3" : 117,
    "value4" : 10,
    "value5" : 48,
    "value6" : 241,
    "value7" : 906
  }, {
    "year" : "2020",
    "value1" : 503,
    "value2" : 23,
    "value3" : 120,
    "value4" : 13,
    "value5" : 38,
    "value6" : 251,
    "value7" : 948
  }, {
    "year" : "2021",
    "value1" : 468,
    "value2" : 24,
    "value3" : 352,
    "value4" : 13,
    "value5" : 35,
    "value6" : 38,
    "value7" : 930
  }, {
    "year" : "2022.06",
    "value1" : 454,
    "value2" : 27,
    "value3" : 364,
    "value4" : 14,
    "value5" : 33,
    "value6" : 38,
    "value7" : 930

  } ];

  /* Create axes */
  categoryAxis = chart_6_3.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.minGridDistance = 30;

  /* Create value axis */
  valueAxis = chart_6_3.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;
  valueAxis.max = 1200;
  valueAxis.renderer.opposite = true;
  /* Create value axis */
  valueAxis1 = chart_6_3.yAxes.push(new am4charts.ValueAxis());
  valueAxis1.min = 0;
  valueAxis1.max = 1200;

  valueAxis1.syncWithAxis = valueAxis;

  // Create series
  function createSeries3(field, name, stacked) {
    if(field == "value7")
    {
      var series = chart_6_3.series.push(new am4charts.LineSeries());
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
        chart_6_3.series.each(function(item) {
          if(item.name == "총계")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 개소\n";
          }          
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 개소\n";
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
      var series = chart_6_3.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.yAxis = valueAxis1;
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
        chart_6_3.series.each(function(item) {
          if(item.name == "총계")
          {
            text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 개소\n";
          }          
          else
          {
            text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 개소\n";
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

  createSeries3("value1", "여행업", true);
  createSeries3("value2", "관광숙박업", true);
  createSeries3("value3", "관광객이용시설업", true);
  createSeries3("value4", "국제회의업", true);
  createSeries3("value5", "유원시설업", true);
  createSeries3("value6", "관광편의시설업", true);
  createSeries3("value7", "총계", false);

  // Add legend
  chart_6_3.legend = new am4charts.Legend();

  // Add cursor
  chart_6_3.cursor = new am4charts.XYCursor();
  chart_6_3.cursor.maxTooltipDistance = 0;
  chart_6_3.cursor.behavior = 'none';
  chart_6_3.logo.height = -15000;
    });
  }

/* 06_04_박물관/미술관현황 -----------------------------------------------------------*/
if(val == 'chart_box_06_04'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // 6-3. 박물관/미술관 현황_chartdiv38 //
  chart_6_4 = am4core.create("chart_06_04", am4charts.XYChart);

  // Add data
  chart_6_4.data = [ {
    "year" : "2016",
    "series1" : 8,
    "series2" : 12
  }, {
    "year" : "2017",
    "series1" : 8,
    "series2" : 12
  }, {
    "year" : "2018",
    "series1" : 8,
    "series2" : 13
  }, {
    "year" : "2019",
    "series1" : 8,
    "series2" : 13
  }, {
    "year" : "2020",
    "series1" : 8,
    "series2" : 13  
  }, {
    "year" : "2021",
    "series1" : 16,
    "series2" : 6
  }, {
    "year" : "2022.06",
    "series1" : 11,
    "series2" : 5
  } ];

  // Create axes
  categoryAxis = chart_6_4.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0.5;

  valueAxis = chart_6_4.yAxes.push(new am4charts.ValueAxis());

  // Create series
  function createSeries4(field, name, stacked) {
    var series = chart_6_4.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
      chart_6_4.series.each(function(item) {
        text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 개소\n";
      });
      return text;
    });
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#fff");
    series.tooltip.label.fill = am4core.color("#00");
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(60);
  }

  createSeries4("series1", "박물관", true);
  createSeries4("series2", "미술관", true);

  // Add cursor
  chart_6_4.cursor = new am4charts.XYCursor();
  chart_6_4.cursor.maxTooltipDistance = 0;
  chart_6_4.cursor.behavior = 'none';
  // Add legend
  chart_6_4.legend = new am4charts.Legend();

  chart_6_4.logo.height = -15000;
    });
  }

/* 06_05_생략)민박/펜션업 현황 -----------------------------------------------------------*/
if(val == 'chart_box_06_05'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  // (6-5.생략_20220314) 민박/펜션업 현황_chartdiv39 //
  chart_6_5 = am4core.create("chart_06_05", am4charts.XYChart);

  // Add data
  chart_6_5.data = [ {
    "year" : "2014",
    "series1" : 19,
    "series2" : 33
  }, {
    "year" : "2015",
    "series1" : 24,
    "series2" : 37
  }, {
    "year" : "2016",
    "series1" : 26,
    "series2" : 36
  }, {
    "year" : "2017",
    "series1" : 23,
    "series2" : 38
  }, {
    "year" : "2018",
    "series1" : 28,
    "series2" : 45
  }, {
    "year" : "2019",
    "series1" : 34,
    "series2" : 42
  }, {
    "year" : "2020",
    "series1" : 25,
    "series2" : 34
  }, {
    "year" : "2021",
    "series1" : 91,
    "series2" : 29
  } ];

  // Create axes
  categoryAxis = chart_6_5.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0.5;
  

  valueAxis = chart_6_5.yAxes.push(new am4charts.ValueAxis());

  // Create series
  function createSeries5(field, name, stacked) {
    var series = chart_6_5.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;

    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
      chart_6_5.series.each(function(item) {
        text += "[" + item.stroke.hex + "]■[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 개소\n";
      });
      return text;
    });
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color("#fff");
    series.tooltip.label.fill = am4core.color("#00");

    // Prevent cross-fading of tooltips
    series.tooltip.defaultState.transitionDuration = 0;
    series.tooltip.hiddenState.transitionDuration = 0;

    //series.columns.template.tooltipText = "[font-size: 18px bold]{year} 년 [font-size: 18px bold]{name}: [font-size: 18px]{valueY}[/]";
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(60);
  }

  createSeries5("series1", "민박", true);
  createSeries5("series2", "펜션", true);

  // Add cursor
  chart_6_5.cursor = new am4charts.XYCursor();
  chart_6_5.cursor.maxTooltipDistance = 0;
  chart_6_5.cursor.behavior = 'none';
  // Add legend
  chart_6_5.legend = new am4charts.Legend();

  chart_6_5.logo.height = -15000;
    });
  }

/* 06_06_공공도서관대출자료수/도서수현황 -----------------------------------------------------------*/
if(val == 'chart_box_06_06'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);
  
  // 6-4. 공공도서관_chartdiv40 //
  chart_6_6 = am4core.create("chart_06_06", am4charts.XYChart);
  chart_6_6.hiddenState.properties.opacity = 0; // this creates initial fade-in

  // Add data
  chart_6_6.data = [ {
    "year" : "2015",
    "value1" : 1291644,
    "value2" : 1067163
  }, {
    "year" : "2016",
    "value1" : 1306286,
    "value2" : 1139753
  }, {
    "year" : "2017",
    "value1" : 1383631,
    "value2" : 1193005
  }, {
    "year" : "2018",
    "value1" : 1407493,
    "value2" : 1228521
  }, {
    "year" : "2019",
    "value1" : 1414688,
    "value2" : 1340723
  }, {
    "year" : "2020",
    "value1" : 1347482,
    "value2" : 736021
  }, {
    "year" : "2021",
    "value1" : 1142410,
    "value2" : 966486
  },{
    "year" : "2022.10",
    "value1" : 1184339,
    "value2" : 1177672
  },{
    "year" : "2022.11",
    "value1" : 1188059,
    "value2" : 1301279
  },{
    "year" : "2022.12",
    "value1" : 1126791,
    "value2" : 1418941
  } ];

  // Create axes
  var dateAxis = chart_6_6.xAxes.push(new am4charts.CategoryAxis());
  dateAxis.autoGridCount = false;
  dateAxis.labelFrequency = 0;
  dateAxis.dataFields.category = "year";
  dateAxis.renderer.grid.template.location = 0.5;

  var valueAxis = chart_6_6.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 600000;
  valueAxis.max = 1600000;
  // Create series
  function createSeries(field, name) {
    var series = chart_6_6.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.name = name;
    series.tooltipText = "";
    series.strokeWidth = 3;

    // Set up tooltip
    series.adapter.add("tooltipText", function(ev) {
      var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
      chart_6_6.series.each(function(item) {
        text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "} 권\n";
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

  createSeries("value1", "도서수");
  createSeries("value2", "대출자료수");

  // Add legend
  chart_6_6.legend = new am4charts.Legend();

  // Add cursor
  chart_6_6.cursor = new am4charts.XYCursor();
  chart_6_6.cursor.maxTooltipDistance = 0;
  chart_6_6.cursor.behavior = 'none';
  chart_6_6.logo.height = -15000;
  });
}


}

$(document).ready(function(){
  var first = 'chart_box1';
  chart_drawing(first);
});
