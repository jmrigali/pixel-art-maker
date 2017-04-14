var body = document.getElementsByTagName('body')[0];
//grabbing body from html

var currentColor = document.getElementById('currentColor');
//grabbing currentColor ID from html

var grid = document.getElementById('grid');
//grabbing grid from html

var palette = document.getElementById('palette');
//palette access

var brush = 'black';
//global variable

var current = document.createElement('div');
current.className = 'current';
currentColor.appendChild(current);


//GRID !!!!!!
  for(var j = 0; j <2200 ; j++) {
    //creating tiles for grid
    var tile = document.createElement('div');
    //creating divs

    tile.className="tile";
    //attaching
     grid.appendChild(tile);
     grid.addEventListener('click',
     function clickable(event) {
       event.target.style.backgroundColor = brush;
     });
  }



//COLOR PALETTE
function grabColor () {
  //makes color palette

  var colorArr = ['black','white','beige', 'red','coral', 'orange', 'goldenrod', 'yellow', 'navy', 'cyan','blue','aquamarine','turquoise', 'olive', 'green', 'chartreuse', 'pink', 'violet','indigo', 'purple', ];


  for(var i = 0; i < colorArr.length; i++) {
    var colors = document.createElement('div');
    colors.className = "colors";
    colors.style.backgroundColor = colorArr[i];
    palette.appendChild(colors);

    colors.addEventListener('click',
    function colorClick (event) {
      // currentTest = event.target.style.backgroundColor;
     brush = event.target.style.backgroundColor;
    current.style.backgroundColor = event.target.style.backgroundColor;
    });
  }
}

grabColor();
