TESTER = document.getElementById('tester');
var y_one= [20, 14, 23]
var y_two = [12, 18, 29]
var trace1 = {
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: y_one,
  name: 'SF Zoo',
  type: 'bar'
};

var trace2 = {
  x: ['giraffes', 'orangutans', 'monkeys'],
  y: y_two,
  name: 'LA Zoo',
  type: 'bar'
};

var data = [trace1, trace2];

var layout = {barmode: 'group'};

Plotly.newPlot(TESTER, data, layout);



var listSelection = document.getElementById('myList');
listSelection.addEventListener('change', function() {
    var y_new = y_one.map(x => x * this.value); 
    var y2_new =  y_two.map(x => x * this.value); 
    

    var trace1 = {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: y_new,
      name: 'SF Zoo',
      type: 'bar'
    };
    
    var trace2 = {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: y2_new,
      name: 'LA Zoo',
      type: 'bar'
    };
    
    var data = [trace1, trace2];
    
    var layout = {barmode: 'group'};
    
    Plotly.react('tester', data, layout,  {showLink: false});
});





piechart = document.getElementById('chart');

var data1 = [{
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie'
  }];
  
  var layout1 = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot(piechart, data1, layout1,  {showLink: false});



