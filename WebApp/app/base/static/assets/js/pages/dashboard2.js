

function swapView(){
  $('#salesChartWeekly').toggle('slow','swing')
  $('#salesChart').toggle('slow','swing')
  $('#monthly').toggle()
  $('#weekly').toggle()
  $('#lmonth').toggle()
  $('#lweek').toggle()
}

var json2;
var keys = [];
var values = [];
var keys3 = [];
var values3 = [];
$(window).on('load', function(){ 
  var request = new XMLHttpRequest()
  var json1;
  request.open('GET', '/api/data', true)
  
  request.onload = function(res) {
    json1 = JSON.parse(request.responseText)
    console.log(json1[1][0])
    json2 = json1[1][0]
    for (var key in json2) {
      if(key!=="tag"){
        keys.push(key)
        values.push(json2[key])
      }
  }
  
  json3 = json1[1][1]
    for (var key in json3) {
      if(key!=="tag"){
        keys3.push(key)
        values3.push(json3[key])
      }
  }
  //console.log(keys3,values3)
  
var marksCanvas = document.getElementById("bully");


var marksData = {
  labels: keys,
  datasets: [{
    label: "",
    backgroundColor: "transparent",
    borderColor: "rgba(200,0,0,0.6)",
    fill: false,
    radius: 6,
    pointRadius: 6,
    pointBorderWidth: 3,
    pointBackgroundColor: "orange",
    pointBorderColor: "rgba(200,0,0,0.6)",
    pointHoverRadius: 10,
    data: values
  }]
};


var radarChart = new Chart(marksCanvas, {
  type: 'radar',
  data: marksData,
  });

  var marksData1 = {
    labels: keys3,
    datasets: [{
      label: "",
      backgroundColor: "transparent",
      borderColor: "rgba(200,0,0,0.6)",
      fill: false,
      radius: 6,
      pointRadius: 6,
      pointBorderWidth: 3,
      pointBackgroundColor: "orange",
      pointBorderColor: "rgba(200,0,0,0.6)",
      pointHoverRadius: 10,
      data: values3
    }]
  };
  
  var marksCanvas1 = document.getElementById("nonBully");
  
    var radarChart1 = new Chart(marksCanvas1, {
      type: 'radar',
      data: marksData1,
      });
  
  //end radar chart

     // -----------------------
  // - MONTHLY SALES CHART -
  // -----------------------
  var month = {'Jan':0,'Feb':0,'Mar':0,'Apr':0,'May':0,'Jun':0,'Jul':0,'Aug':0,'Sep':0,'Oct':0,'Nov':0,'Dec':0}
  var weekdays = {'Mon':0,'Tue':0,'Wed':0,'Thu':0,'Fri':0,'Sat':0,'Sun':0}

  for(var i=0;i<json1[0].length;i++){
    for(var key in month){json1[0][i][2]
      if(json1[0][i][2].includes(key)){
        month[key]++;
      }
    }
  }

  var date2 = new Date()
  
  
  for(var i=0;i<json1[0].length;i++){
    var date1 = new Date(json1[0][i][2])
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    if(diffDays<=7)
    {
      for(var key in weekdays){
        if(json1[0][i][2].includes(key)){
          weekdays[key]++
        }
      }
    }
  }

  
  keys1=[]
  values1=[]
  for (var key in month) {
    keys1.push(key)
    values1.push(month[key])
  }

  keys2=[]
  values2=[]
  for (var key in weekdays) {
    keys2.push(key)
    values2.push(weekdays[key])
  }
  // Get context with jQuery - using jQuery's .get() method.
  var salesChartCanvas = $('#salesChart').get(0).getContext('2d');
  // This will get the first returned node in the jQuery collection.
  var barData = {
    labels  : keys2,
    datasets: [
      {
        label               : 'CyberBullying Cases',
        fill           : 'rgb(210, 214, 222)',
        borderColor         : 'Blue',
        pointBackgroundColor          : 'rgb(210, 214, 222)',
        pointBorderColor    : 'rgb(0,2,255)',
        backgroundColor : 'Blue',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgb(220,220,220)',
        data                : values2
      },]
  }

  var salesChartData = {
    labels  : keys1,
    
    datasets: [
      {
        label               : 'CyberBullying Cases',
        fill           : 'rgb(210, 214, 222)',
        borderColor         : 'Blue',
        pointBackgroundColor          : 'rgb(210, 214, 222)',
        pointBorderColor    : 'rgb(0,2,255)',
        backgroundColor : 'Blue',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgb(220,220,220)',
        data                : values1
      },
      /*
      {
        label               : 'Digital Goods',
        fill          : 'rgba(60,141,205)',
        borderColor         : 'Purple',
        pointBackgroundColor          : 'rgb(200,0,255)',
        backgroundColor  : 'Purple',
        pointBorderColor    : 'Purple',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data                : [28, 48, 40, 19, 86, 27, 90]
      }*/
    ]
  };

  var salesChartOptions = {
    // Boolean - If we should show the scale at all
    showScale               : true,
    // Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines      : false,
    // String - Colour of the grid lines
    scaleGridLineColor      : 'rgba(0,0,0,.05)',
    // Number - Width of the grid lines
    scaleGridLineWidth      : 1,
    // Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    // Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines  : true,
    // Boolean - Whether the line is curved between points
    bezierCurve             : true,
    // Number - Tension of the bezier curve between points
    bezierCurveTension      : 0.3,
    // Boolean - Whether to show a dot for each point
    pointDot                : false,
    // Number - Radius of each point dot in pixels
    pointDotRadius          : 4,
    // Number - Pixel width of point dot stroke
    pointDotStrokeWidth     : 1,
    // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,
    // Boolean - Whether to show a stroke for datasets
    datasetStroke           : true,
    // Number - Pixel width of dataset stroke
    datasetStrokeWidth      : 2,
    // Boolean - Whether to fill the dataset with a color
    datasetFill             : true,
    // String - A legend template
    legendTemplate          : '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].lineColor%>\'></span><%=datasets[i].label%></li><%}%></ul>',
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio     : true,
    // Boolean - whether to make the chart responsive to window resizing
    responsive              : true
  };

  // Create the line chart
  // salesChart.Line(salesChartData, salesChartOptions);

  var myLineChart = new Chart(salesChartCanvas, {
    type: 'line',
    data: salesChartData,
    options: salesChartOptions
  });
  
  var salesChartCanvas1 = $('#salesChartWeekly').get(0).getContext('2d');
  var myBarChart = new Chart(salesChartCanvas1, {
    type: 'bar',
    data: barData,
    options: salesChartOptions
  });

var json4 = json1[2]
var marker =[]
for(var i=0;i<json4.length;i++){
  if(json4[i]!=null){
    marker.push({latLng:[json4[i][1],json4[i][2]],name:json4[i][0]})
  }
}

  $('#world-map-markers').vectorMap({
    map              : 'world_mill_en',
    normalizeFunction: 'polynomial',
    hoverOpacity     : 0.7,
    hoverColor       : false,
    backgroundColor  : 'transparent',
    regionStyle      : {
      initial      : {
        fill            : 'rgba(210, 214, 222, 1)',
        'fill-opacity'  : 1,
        stroke          : 'none',
        'stroke-width'  : 0,
        'stroke-opacity': 1
      },
      hover        : {
        'fill-opacity': 0.7,
        cursor        : 'pointer'
      },
      selected     : {
        fill: 'yellow'
      },
      selectedHover: {}
    },
    markerStyle      : {
      initial: {
        fill  : '#00a65a',
        stroke: '#111'
      }
    },
    markers          : marker
  });
  


  }
  
  request.send()


}
);


$(function () {

  'use strict';

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */


  // ---------------------------
  // - END MONTHLY SALES CHART -
  // ---------------------------

  //begin bar graph
  
  //
  // begin radar chart

  // 
  // -------------
  // - PIE CHART -
  // -------------
  // Get context with jQuery - using jQuery's .get() method.
  var pieChartCanvas = $('#pieChart').get(0).getContext('2d');
  
  var pieData = {
    datasets: [{
        data: [10,20,30,40,50,60],
        backgroundColor: [
          '#f56964',
          '#00a65o',
          '#f39c12',
          '#00c0ef',
          '#3c8dbc',
          '#d2d6be',
        ],
        borderColor: [
          '#f56964',
          '#00a65o',
          '#f39c12',
          '#00c0ef',
          '#3c8dbc',
          '#d2d6be',
        ],
        borderWidth: 1,
        hoverBorderWidth: 5,
        hoverBackgroundColor: [
          '#f56964',
          '#00a65o',
          '#f39c12',
          '#00c0ef',
          '#3c8dbc',
          '#d2d6be', 
        ]
    }],
    labels: [
      'Facebook', 'Instagram','Twitter','LinkedIn','Reddit','Quora'
    ]
    
};
  var pieOptions     = {
    legend:{
      position:'right',
      // These labels appear in the legend and in the tooltips when hovering different arcs
      
    },
    // Boolean - Whether we should show a stroke on each segment
    segmentShowStroke    : true,
    // String - The colour of each segment stroke
    segmentStrokeColor   : '#fff',
    // Number - The width of each segment stroke
    segmentStrokeWidth   : 1,
    // Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    // Number - Amount of animation steps
    animationSteps       : 100,
    // String - Animation easing effect
    animationEasing      : 'easeOutBounce',
    // Boolean - Whether we animate the rotation of the Doughnut
    animateRotate        : true,
    // Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale         : false,
    // Boolean - whether to make the chart responsive to window resizing
    responsive           : true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio  : false,
    // String - A legend template
    legendTemplate       : '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<segments.length; i++){%><li><span style=\'background-color:<%=segments[i].fillColor%>\'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
    // String - A tooltip template
    tooltipTemplate      : '<%=value %> <%=label%> users'
  };
  // Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  var myDoughnutChart = new Chart(pieChartCanvas, {
    type: 'doughnut',
    data: pieData,
    options: pieOptions
});
  // -----------------
  // - END PIE CHART -
  // -----------------

  /* jVector Maps
   * ------------
   * Create a world map with markers
   */
  

  /* SPARKLINE CHARTS
   * ----------------
   * Create a inline charts with spark line
   */

  // -----------------
  // - SPARKLINE BAR -
  // -----------------
  $('.sparkbar').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type    : 'bar',
      height  : $this.data('height') ? $this.data('height') : '30',
      barColor: $this.data('color')
    });
  });

  // -----------------
  // - SPARKLINE PIE -
  // -----------------
  $('.sparkpie').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type       : 'pie',
      height     : $this.data('height') ? $this.data('height') : '90',
      sliceColors: $this.data('color')
    });
  });

  // ------------------
  // - SPARKLINE LINE -
  // ------------------
  $('.sparkline').each(function () {
    var $this = $(this);
    $this.sparkline('html', {
      type     : 'line',
      height   : $this.data('height') ? $this.data('height') : '90',
      width    : '100%',
      lineColor: $this.data('linecolor'),
      fillColor: $this.data('fillcolor'),
      spotColor: $this.data('spotcolor')
    });
  });
});
