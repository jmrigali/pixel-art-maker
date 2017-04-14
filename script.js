var body = document.getElementsByTagName('body')[0];

var grid = document.getElementById('grid');
console.log(grid);

var brush = 'black';

  for(var j = 0; j <2200 ; j++) {
    var tile = document.createElement('div');
    tile.className="tile";
     grid.appendChild(tile);
     grid.addEventListener('click',
     function clickable(event) {
       event.target.style.backgroundColor = brush;
     });
  }
var palette = document.getElementById('palette');


function grabColor () {
  var colorArr = ['black','white','beige', 'red','coral', 'orange', 'goldenrod', 'yellow', 'navy', 'cyan','blue','aquamarine','turquoise', 'olive', 'green', 'chartreuse', 'pink', 'violet','indigo', 'purple', ];


  for(var i = 0; i < colorArr.length; i++) {
    var colors = document.createElement('div');
    colors.className = "colors";
    colors.style.backgroundColor = colorArr[i];
    palette.appendChild(colors);

    colors.addEventListener('click',
    function (event) {
      brush = event.target.style.backgroundColor;
    });
  }

}

grabColor();
// console.log('brushoutside', brush);
