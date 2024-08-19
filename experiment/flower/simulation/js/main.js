function restartexp() {
  location.reload();
}
var selectflowerltsection = document.getElementById("selectflowersection");

function selectflowersec(){
  if (selectflowerltsection.options[selectflowerltsection.selectedIndex].value == 0) {
    alert("select");
  }
  if (selectflowerltsection.options[selectflowerltsection.selectedIndex].value == 1) {
    document.getElementById("lscardcol").style.display="block";
    document.getElementById("lstr").style.display="block";
    document.getElementById("tstr").style.display="none";
    document.getElementById("lscardcol1").style.display="block";
    document.getElementById("tscardcol").style.display="none";
    document.getElementById("tscardcol1").style.display="none";
    document.getElementById("flowersteps").style.display="block";
    document.getElementById("instshowsteps").innerHTML="A fresh hibiscus flower is chosen. Click on the blade.";

  }
  if (selectflowerltsection.options[selectflowerltsection.selectedIndex].value == 2) {
    document.getElementById("tstr").style.display="block";
    document.getElementById("lstr").style.display="none";
    document.getElementById("tscardcol").style.display="block";
    document.getElementById("tscardcol1").style.display="block";
    document.getElementById("lscardcol").style.display="none";
    document.getElementById("lscardcol1").style.display="none";
    document.getElementById("flowersteps").style.display="block";
    document.getElementById("instshowsteps").innerHTML="Click on the blade.";
   
    
  }
}


var imgblade = null;
var bladeimg;
function clickblade() {
  bladeimg = document.getElementById("bladecssls");
  document.getElementById("bladecssls").style.top =55 + '%';
  document.getElementById("bladecssls").style.left =60 + '%';
  var bladetop = 55; //initial  position
  clearInterval(imgblade);

  imgblade = setInterval(frame, 90); /* frame is 90 denotes the speed of the movement*/

  function frame() {
    if (bladetop == 75) {

      clearInterval(imgblade);
     
      document.getElementById("forcepcssls").setAttribute("onclick", "forcepclick()");
      document.getElementById("bladecssls").removeAttribute("onclick", "bladejsclick()");
      document.getElementById("instshowsteps").innerHTML = "Click on the forcep.";
      document.getElementById("bladecssls").style.top =5 + '%';
      document.getElementById("bladecssls").style.left =95 + '%';
    } else {
      
      bladetop++;
      bladeimg.style.top = bladetop + '%';

    }
  }

}

function forcepclick(){
  document.getElementById("instshowsteps").innerHTML="Click on the forcep to remove the cut part of the flower."
  document.getElementById("pickforcepcssls").style.display="block";
  document.getElementById("forcepcssls").style.display="none";
  document.getElementById("pickforcepcssls").setAttribute("onclick", "pickforcepclick()");
 
}



function pickforcepclick(){
  document.getElementById("instshowsteps").innerHTML="Click on the glass slide to see the L.S of flower."
  document.getElementById("pickforcepcssls").style.top = 47 + "%";
  document.getElementById("pickforcepcssls").style.left = 35 + "%";
  document.getElementById("petalcss").style.left = 10 + "%";
  document.getElementById("petalcss").style.top = 25 + "%";
  
  document.getElementById("pickforcepcssls").setAttribute("onclick", "pickforcepclickorg()");
  document.getElementById("glassslidecssls").setAttribute("onclick", "clickglassslide()");


}
/*function pickforcepclickorg(){
  document.getElementById("instshowsteps").innerHTML="Click on the glass slide to see the L.S of flower."
  document.getElementById("pickforcepcssls").style.display="none";
  document.getElementById("forcepcssls").style.display="block";
  document.getElementById("glassslidecssls").setAttribute("onclick", "clickglassslide()");

}*/


function clickglassslide(){
  document.getElementById("instshowsteps").innerHTML="Select Transverse section of flower from the dropdown, to study the internal structure of a flower ovary."
  document.getElementById("glassslidecssls").style.left = 56 + "%";
  document.getElementById("glassslidecssls").style.top = 77 + "%";
}