
// jQuery(function() {
//   $('.ac_list li').click(function(){
//     var tab_id = $(this).attr('data-tab');
 
//     $('.ac_list li').removeClass('current');
//     $('.chart_wrap').removeClass('current');
 
//     $(this).addClass('current');
//     $("#"+tab_id).addClass('current');

//     chart_drawing(tab_id);
//   });
// })

function chart_drawing(val) 
{
if(val == 'chart_box_03_01'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);

  /**
   * 경제/산업 Chart 영역
   */

  //
  // 3-1. 전주시 고용률/실업률_chartdiv14 //
  //  

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

if(val == 'chart_box_03_02'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);
  //
  // 3-2. 청년층(15~29세) 고용률_chartdiv15 //
  //
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

if(val == 'chart_box_03_03'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);
        
  //
  // 3-3. 전주시 취업자/실업자_chartdiv16 //
  //


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


if(val == 'chart_box_03_04'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);
        
  //
  // 3-4. 비경제활동인구_chartdiv17 //
  //


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



if(val == 'chart_box_03_05'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);
  //
  // 3-5. 산업별 취업자_chartdiv18 //
  //

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

if(val == 'chart_box_03_06'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);
  //
  // 3-6. 직업별 취업자_chartdiv19 //
  //

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

if(val == 'chart_box_03_07'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);
  //
  // 3-7. 고용보험 적용사업장 및 피보험자_chartdiv20 //
  //
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

if(val == 'chart_box_03_08'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);
  // 
  // (3-8. 생략_20220314) 실업급여 지급현황_chartdiv21 //생략_20220316
  //
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

if(val == 'chart_box_03_09'){
  am4core.ready(function() {
  am4core.useTheme(am4themes_animated);
  //
  // (3-9. 생략_20220314) 전주지역 기업현황_chartdiv22 //
  //

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

}

$(document).ready(function(){
  var first = 'chart_box1';
  chart_drawing(first);
});