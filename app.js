'use strict';

var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');

var chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['coding', 'stuff', 'cats'],
    datasets: [{
      label: 'votes for my fav shit',
      data: [3, 10, 8],
      backgroundColor: ['#000000', '#444444', '#888888']
    }]
  }
});
