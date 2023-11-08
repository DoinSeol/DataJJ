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


function chart_drawing(val) 
{ 
  if(val == 'chart_box_02_01'){
    am4core.ready(function() {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    /**
     * 보건/복지 Chart 영역
     */

    //
    // 2-1. 의료기관현황_chartdiv7 //
    //        
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
        var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
        chart_2_1.series.each(function(item) {
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
      var series = chart_2_1.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.yAxis = valueAxis1;
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
        chart_2_1.series.each(function(item) {
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



  if(val == 'chart_box_02_02'){
    am4core.ready(function() {
    am4core.useTheme(am4themes_animated);
        
  //
  // 2-2. 의료기관종사 의료인력_chartdiv8 //
  //  
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
          var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
          chart_2_2.series.each(function(item) {
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
        var series = chart_2_2.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "year";
        series.name = name;
        series.yAxis = valueAxis1;
        // Set up tooltip
        series.adapter.add("tooltipText", function(ev) {
          var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
          chart_2_2.series.each(function(item) {
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


  if(val == 'chart_box_02_03')
  {
    am4core.ready(function() {
    am4core.useTheme(am4themes_animated);
  //
  // 2-3. 노인복지시설현황_chartdiv9 //
  //
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
        var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
        chart_2_3.series.each(function(item) {
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
      var series = chart_2_3.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.yAxis = valueAxis1;
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
        chart_2_3.series.each(function(item) {
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



    if(val == 'chart_box_02_04')
  {
    am4core.ready(function() {
      am4core.useTheme(am4themes_animated);
  //
  // 2-4. 장애인복지시설 현황_chartdiv10 //
  //
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
        var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
        chart_2_4.series.each(function(item) {
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
      var series = chart_2_4.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = "year";
      series.name = name;
      series.yAxis = valueAxis1;
      // Set up tooltip
      series.adapter.add("tooltipText", function(ev) {
        var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
        chart_2_4.series.each(function(item) {
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


    if(val == 'chart_box_02_05')
  {
    am4core.ready(function() {
  //
  // (2-5. 생략_20220314) 보건기관(전주시보건소) 이용률_chartdiv11 //
  //
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
      var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
      chart_2_5.series.each(function(item) {
        text += "[" + item.stroke.hex + "]●[/] [font-size: 18px bold]" + item.name + " : [font-size: 18px]{" + item.dataFields.valueY + "}%\n";
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
    if(val == 'chart_box_02_06')
  {
        am4core.ready(function() {
  //
  // (2-6. 생략_20220314) 복지관 이용 현황(5개소)_chartdiv12 //
  //

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
      var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
      chart_2_6.series.each(function(item) {
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

  if(val == 'chart_box_02_07')
{
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
          var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
          chart_2_7.series.each(function(item) {
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
        var series = chart_2_7.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "year";
        series.name = name;
        series.yAxis = valueAxis1;
        // Set up tooltip
        series.adapter.add("tooltipText", function(ev) {
          var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
          chart_2_7.series.each(function(item) {
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
          var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
          chart_2_8.series.each(function(item) {
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
        var series = chart_2_8.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "year";
        series.name = name;
        series.yAxis = valueAxis1;
        // Set up tooltip
        series.adapter.add("tooltipText", function(ev) {
          var text = "[font-size: 18px bold]{categoryX} 기준[/]\n"
          chart_2_8.series.each(function(item) {
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
}

