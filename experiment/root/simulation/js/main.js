function restartexp() {
  location.reload();
}

var imgblade = null;
var imgtbdown = null;
var bladeimg;
function bladejsclick() {
  bladeimg = document.getElementById("bladecss");
  document.getElementById("bladecss").style.left = 2 + '%';
  document.getElementById("bladecss").style.transform = "rotateX(80deg)";
  var bladetop = 5; //initial  position
  clearInterval(imgblade);

  imgblade = setInterval(frame, 90); /* frame is 90 denotes the speed of the movement*/

  function frame() {
    if (bladetop == -5) {
      document.getElementById("bladecss").style.transform = "rotate(160deg)";
      document.getElementById("bladecss").style.top = 40 + "%";
      document.getElementById("bladecss").style.left = 32 + "%";
      document.getElementById("rootsectioncss").style.display = "block";
      document.getElementById("fingerthumbcss").style.display="none";
      document.getElementById("fingerindexcss").style.display="none";
      clearInterval(imgblade);

      document.getElementById("bladecss").removeAttribute("onclick", "bladejsclick()");
      document.getElementById("brushcss").setAttribute("onclick", "brushmovetoblade()");
    } else {
      document.getElementById("bladecss").style.transform = "rotateX(80deg)";
      bladetop--;
      bladeimg.style.top = bladetop + '%';

    }
  }

}


function brushmovetoblade() {
  document.getElementById("brushcss").style.top = -20 + "%";
  document.getElementById("brushcss").style.left = 42 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "brushmoveroottopdish()");
}

function brushmoveroottopdish() {
  document.getElementById("brushcss").style.top = -5 + "%";
  document.getElementById("brushcss").style.left = 45 + "%";
  document.getElementById("rootsectioncss").style.top = 73 + "%";
  document.getElementById("rootsectioncss").style.left = 42 + "%";
  document.getElementById("bladecss").style.top = 5 + "%";
  document.getElementById("bladecss").style.left = 25 + "%";
  document.getElementById("bladecss").style.transform = "rotate(0deg)";
  document.getElementById("brushcss").setAttribute("onclick", "brushmovetoorg()");
}

function brushmovetoorg(){
  document.getElementById("brushcss").style.top = 0+ "%";
  document.getElementById("brushcss").style.left = 90 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "brushmovetopdish()");
}

function brushmovetopdish(){
  document.getElementById("brushcss").style.top = -5 + "%";
  document.getElementById("brushcss").style.left = 45 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "rootmovetoglassslide()");
}

function rootmovetoglassslide(){
  document.getElementById("brushcss").style.top = -5 + "%";
  document.getElementById("brushcss").style.left = 72 + "%";
  document.getElementById("rootsectioncss").style.top = 73 + "%";
  document.getElementById("rootsectioncss").style.left = 69 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "brushmovetoorg1()");
}

function brushmovetoorg1(){
  document.getElementById("brushcss").style.top = 0+ "%";
  document.getElementById("brushcss").style.left = 90 + "%";
  document.getElementById("safranindroppercss").setAttribute("onclick", "clickdroppertomove()");
}

function clickdroppertomove(){
  document.getElementById("safranindroppercss").style.top = 25+ "%";
  document.getElementById("safranindroppercss").style.left = 68.5 + "%";
  document.getElementById("safranindroppercss").setAttribute("onclick", "clicktodrop()");

}

function clicktodrop(){
  document.getElementById("safranindropcss").style.display="block";
  document.getElementById("safranindroppercss").style.top = 31+ "%";
  document.getElementById("safranindroppercss").style.left = 93.85+ "%";
  document.getElementById("coverslipcss").setAttribute("onclick", "addcoverslip()");

}

function addcoverslip(){
  document.getElementById("coverslipcss").style.top = 65+ "%";
  document.getElementById("coverslipcss").style.left = 68+ "%";
  document.getElementById("glassslidecss").setAttribute("onclick", "clickglassslide()");
}

function clickglassslide(){
  document.getElementById("mircoscopeslidecss").style.display="block";
  document.getElementById("safranindropcss").style.display="none";
  document.getElementById("glassslidecss").style.display="none";
  document.getElementById("coverslipcss").style.display="none";
  document.getElementById("rootsectioncss").style.display="none";


}