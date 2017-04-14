var body = document.getElementsByTagName('body')[0];

var grid = document.getElementById('grid');
console.log(grid);

  for(var j = 0; j <2200 ; j++) {
    var tile = document.createElement('div');
    tile.className="tile";
     grid.appendChild(tile);
    //  grid.addEventListener('click',
    //  function clickable(event) {
    //    event.target.style.backgroundColor = "green";
    //  });
  }
var palette = document.getElementById('palette');

var colorArr = ['red', 'orange', 'yellow', 'navy', 'blue', 'green', 'purple', 'black'];
var brush;

for(var i = 0; i < colorArr.length; i++) {
  var colors = document.createElement('div');
  colors.className = "colors";
  colors.style.backgroundColor = colorArr[i];
  palette.appendChild(colors);
  
}
// colors.addEventListener('click', function(event) {
//   brush= this.style.backgroundColor;
//   console.log(brush);
// });
// console.log('brushoutside', brush);


// function addColor() {
// var brush = "";
//
// if()
// }
// var palette = document.createElement('div');
// palette.class= "palette";
// palette.style.width = "600px";
// palette.style.backgroundColor = "gray";
// palette.style.border = "1 px solid black";
// palette.style.padding = "2px";
// palette.style.marginTop = "2px";
// palette.style.borderRadius = "5px";
// palette.style.height = "40px";
// palette.style.position = "relative";
// body.appendChild(palette);
//
// var colorStatement= document.createElement('p');
// colorStatement.innerText = "Color Palette:";
// colorStatement.style.float = "left";
// palette.appendChild(colorStatement);
//
// var colorArray = ['green','navy','purple', 'yellow', 'orange', 'red'];
//
// for(var i = 0; i < colorArray.length; i++ ) {
// var circle= document.createElement('div');
//
// colorArray[i].style.width = "8%";
// colorArray[i].style.height = "100%";
// colorArray[i].style.backgroundColor = "colorArray[i]";
// colorArray[i].style.border = "1px solid black";
// colorArray[i].style.borderRadius = "50%";
// colorArray[i].style.float= "left";
// colorArray[i].style.marginLeft = "10px";
// palette.appendChild(colorArray[i]);
// }
