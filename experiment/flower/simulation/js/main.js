function restartexp() {
  location.reload();
}
var selectflowerltsection = document.getElementById("selectflowersection");
function selectflowersec(){
  if (selectflowerltsection.options[selectflowerltsection.selectedIndex].value == 0) {
    alert("select");
  }
  if (selectflowerltsection.options[selectflowerltsection.selectedIndex].value == 1) {
    
    document.getElementById("ls").style.display="block";
    document.getElementById("lscardcol").style.display="block";
    document.getElementById("lscardcol1").style.display="block";
    document.getElementById("ts").style.display="none";
    document.getElementById("tscardcol").style.display="none";
    document.getElementById("tscardcol1").style.display="none";
    document.getElementById("flowersteps").style.display="block";
    document.getElementById("instshowsteps").innerHTML="A fresh hibiscus flower is chosen and petals has been removed. Click on the glass slide.";

  }
  if (selectflowerltsection.options[selectflowerltsection.selectedIndex].value == 2) {
    
    document.getElementById("ts").style.display="block";
    document.getElementById("tscardcol").style.display="block";
    document.getElementById("tscardcol1").style.display="block";
    document.getElementById("ls").style.display="none";
    document.getElementById("lscardcol").style.display="none";
    document.getElementById("lscardcol1").style.display="none";
    document.getElementById("flowersteps").style.display="block";
    document.getElementById("instshowsteps").innerHTML="Click on the blade.";
  }
}


function clickglassslide(){
  document.getElementById("glassslidecss").style.left = 60 + "%";
  document.getElementById("glassslidecss").style.top = 80 + "%";
}