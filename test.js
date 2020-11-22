$('#plot-drop li').click( function(event) {
    event.preventDefault(); 
    TESTER = document.getElementById('tester');
    var val = $(this).attr('value');
    $("#plot-drop-button").html(val);
    var a = parseFloat(val);
    var trace1 = {x: [1, 2, 3, 4, 5], y: [1, 2, 4, 8, 16 + a] };
    var data = [trace1];
    Plotly.newPlot( TESTER, data, { margin: { t: 0 } } );
  });