
var p = false;
function drawty(i) {
  if(p == false){
  var num = Math.floor(Math.random() * (80 - 1) + 1);
  if(num <= 16){
    drawfin(num, "g");
  }else{
    if(num <= 32){
      drawfin(num, "i");
    } else{
      if( num <= 48){
        drawfin(num, "f");
      } else{
        if( num <= 64){
          drawfin(num, "t");
        }else{
          if( num <= 80){
            drawfin(num, "s");
          }else{
            alert("error: number not defined");
          }
        }
      } 
    }
  }
}
}
var calledlist = {};
function drawfin (n,c) {
  if(Object.keys(calledlist).length == 79){
    p = true;
    alert("Due to a technical limitation, This Christmas Themed Bingo Drawer cannot draw more than 79 numbers.");
  }
  if(calledlist[c+n] == true){
    drawty();
  } else{ 
  document.getElementById("shoebox").innerHTML = c.toUpperCase() + n;
  calledlist[c+n] = true;
  document.getElementById(c+n).classList.toggle("called");
  }
} 
for(var i = 0 ; i < 76; i++){
  drawty();
}
