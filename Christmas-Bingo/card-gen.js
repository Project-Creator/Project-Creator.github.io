function rbn(col,row){
   if(col == "g"){
   var rl = 1;
   var rh = 16;
   }
     if(col == "i"){
       var rl = 17;
       var rh = 32;
     }
       if(col == "f"){
         var rl = 33;
         var rh = 48;
       }
         if(col == "t"){
           var rl = 49 ;
           var rh = 64;
         }
  if(col == "s"){
           var rl = 65 ;
           var rh = 80;
         }
   var num = Math.floor(Math.random() * (rh - rl) + rl);
  console.log("rh="+rh+" and "+col+row+"="+num);
  document.getElementById(col + row).innerHTML = num;
  var colornum = Math.floor(Math.random() * (4 - 1) + 1);
  if(colornum == 1){
     document.getElementById(col + row).style.backgroundColor = "red";
  }
  if(colornum == 2){
     document.getElementById(col + row).style.backgroundColor = "green";
  }
  if(colornum == 3){
     document.getElementById(col + row).style.backgroundColor = "rgb(102, 204, 255";
  }
}
rbn("g","1");
rbn("g","2");
rbn("g","3");
rbn("g","4");
rbn("g","5");
rbn("i","1");
rbn("i","2");
rbn("i","3");
rbn("i","4");
rbn("i","5");
rbn("f","1");
rbn("f","2");
rbn("f","4");
rbn("f","5");
rbn("t","1");
rbn("t","2");
rbn("t","3");
rbn("t","4");
rbn("t","5");
rbn("s","1");
rbn("s","2");
rbn("s","3");
rbn("s","4");
rbn("s","5");
