function restartexp() {
  location.reload();
}

var imgblade = null;
var imgtbdown = null;
var bladeimg;
function bladejsclick() {
  bladeimg = document.getElementById("bladecss");
  document.getElementById("bladecss").style.left = 28 + '%';
  document.getElementById("bladecss").style.top = 40 + '%';
  document.getElementById("rootcss").style.top = 1+ "%";
    document.getElementById("rootcss").style.transform = "rotate(90deg)";
    document.getElementById("fingerthumbcss").style.top = 40 + "%";
  document.getElementById("fingerthumbcss").style.left = 22 + "%";
  document.getElementById("fingerindexcss").style.top = 40+ "%";
  document.getElementById("fingerindexcss").style.left = 23 + "%";
  document.getElementById("fingerindexcss").style.transform = "rotate(195deg)";
 document.getElementById("fingerthumbcss").style.transform = "rotate(187deg)";
  var bladetop = 40; //initial  position
  clearInterval(imgblade);

  imgblade = setInterval(frame, 90); /* frame is 90 denotes the speed of the movement*/

  function frame() {
    if (bladetop == 45) {
      document.getElementById("bladecss").style.transform = "rotate(130deg)";
      document.getElementById("bladecss").style.top = 40.5 + "%";
      document.getElementById("bladecss").style.left = 32 + "%";
      document.getElementById("rootsectioncss").style.display = "block";
     document.getElementById("fingerthumbcss").style.top = 10 + "%";
  document.getElementById("fingerthumbcss").style.left = 90 + "%";
  document.getElementById("fingerindexcss").style.top = 10+ "%";
  document.getElementById("fingerindexcss").style.left = 90 + "%";
  document.getElementById("rootcss").style.transform = "rotate(0deg)";
  document.getElementById("fingerindexcss").style.transform = "rotate(0deg)";
  document.getElementById("fingerthumbcss").style.transform = "rotate(0deg)";
      clearInterval(imgblade);

      document.getElementById("bladecss").removeAttribute("onclick", "bladejsclick()");
      document.getElementById("brushcss").setAttribute("onclick", "brushmovetoblade()");
    } else {
      document.getElementById("bladecss").style.transform = "rotate(90deg)";
      bladetop++;
      bladeimg.style.top = bladetop + '%';

    }
  }

}


function brushmovetoblade() {
  document.getElementById("brushcss").style.top = 8 + "%";
  document.getElementById("brushcss").style.left = 42 + "%";
  document.getElementById("fingerthumbcss").style.top = 15 + "%";
  document.getElementById("fingerthumbcss").style.left = 43 + "%";
  document.getElementById("fingerindexcss").style.top = 15+ "%";
  document.getElementById("fingerindexcss").style.left = 43 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "brushmoveroottopdish()");
}

function brushmoveroottopdish() {
  document.getElementById("brushcss").style.top = 17 + "%";
  document.getElementById("brushcss").style.left = 45 + "%";
  document.getElementById("rootsectioncss").style.top = 60 + "%";
  document.getElementById("rootsectioncss").style.left = 42 + "%";
  document.getElementById("bladecss").style.top = 5 + "%";
  document.getElementById("bladecss").style.left = 25 + "%";
  document.getElementById("bladecss").style.transform = "rotate(0deg)";
  document.getElementById("fingerthumbcss").style.top = 21 + "%";
  document.getElementById("fingerthumbcss").style.left = 47 + "%";
  document.getElementById("fingerindexcss").style.top = 21+ "%";
  document.getElementById("fingerindexcss").style.left = 47 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "brushmovetoorg()");
}

function brushmovetoorg(){
  document.getElementById("brushcss").style.top = 0+ "%";
  document.getElementById("brushcss").style.left = 90 + "%";
  document.getElementById("fingerthumbcss").style.top = 10 + "%";
  document.getElementById("fingerthumbcss").style.left = 90 + "%";
  document.getElementById("fingerindexcss").style.top = 10+ "%";
  document.getElementById("fingerindexcss").style.left = 90 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "brushmovetopdish()");
}

function brushmovetopdish(){
  document.getElementById("brushcss").style.top = 17.2 + "%";
  document.getElementById("brushcss").style.left = 45 + "%";
  document.getElementById("fingerthumbcss").style.top = 21 + "%";
  document.getElementById("fingerthumbcss").style.left = 47 + "%";
  document.getElementById("fingerindexcss").style.top = 21+ "%";
  document.getElementById("fingerindexcss").style.left = 47 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "rootmovetoglassslide()");
}

function rootmovetoglassslide(){
  document.getElementById("brushcss").style.top = 17.2 + "%";
  document.getElementById("brushcss").style.left = 72 + "%";
  document.getElementById("rootsectioncss").style.top = 60 + "%";
  document.getElementById("rootsectioncss").style.left = 69 + "%";
  document.getElementById("fingerthumbcss").style.top = 21 + "%";
  document.getElementById("fingerthumbcss").style.left = 74 + "%";
  document.getElementById("fingerindexcss").style.top = 21+ "%";
  document.getElementById("fingerindexcss").style.left = 74 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "brushmovetoorg1()");
}

function brushmovetoorg1(){
  document.getElementById("brushcss").style.top = 0+ "%";
  document.getElementById("brushcss").style.left = 90 + "%";
  document.getElementById("fingerthumbcss").style.display = "none";
  document.getElementById("fingerindexcss").style.display="none";
  document.getElementById("safranindroppercss").setAttribute("onclick", "clickdroppertomove()");
}

function clickdroppertomove(){
  document.getElementById("safranindroppercss").style.top = 25+ "%";
  document.getElementById("safranindroppercss").style.left = 68.5 + "%";
  document.getElementById("safranindroppercss").setAttribute("onclick", "clicktodrop()");

}

function clicktodrop(){
  document.getElementById("safranindropcss").style.display="block";
  document.getElementById("safranindroppercss").style.top = 87+ "%";
  document.getElementById("safranindroppercss").style.left = 93.85+ "%";
  document.getElementById("droppercss").setAttribute("onclick", "dropperdradistwwater()");

}


function dropperdradistwwater(){
  document.getElementById("droppercss").style.display="none";
  document.getElementById("distwaterdroppercss").style.display="block";
  document.getElementById("distwaterdroppercss").setAttribute("onclick", "distwaterdroponglassslide()");

}

function distwaterdroponglassslide(){
  
  document.getElementById("distwaterdroppercss").style.display="block";
  document.getElementById("distwaterdroppercss").style.top = 25+ "%";
  document.getElementById("distwaterdroppercss").style.left = 68.5+ "%";
  document.getElementById("distwaterdroppercss").setAttribute("onclick", "distwaterdroponroot()");

}

function distwaterdroponroot(){
  document.getElementById("safranindropcss").style.display="none";
  document.getElementById("distwaterdropcss").style.display="block";
  document.getElementById("droppercss").style.display="block";
  document.getElementById("distwaterdroppercss").style.display="none";
  document.getElementById("droppercss").setAttribute("onclick", "dropperdrawwater()");

}


function dropperdrawwater(){
  document.getElementById("droppercss").style.display="none";
  document.getElementById("waterdroppercss").style.display="block";
  document.getElementById("waterdroppercss").setAttribute("onclick", "waterdroponglassslide()");

}

function waterdroponglassslide(){
  
  document.getElementById("waterdroppercss").style.display="block";
  document.getElementById("waterdroppercss").style.top = 25+ "%";
  document.getElementById("waterdroppercss").style.left = 68.5+ "%";
  document.getElementById("waterdroppercss").setAttribute("onclick", "waterdroponroot()");

}

function waterdroponroot(){
  document.getElementById("safranindropcss").style.display="none";
  document.getElementById("watercss").style.display="block";
  document.getElementById("droppercss").style.display="block";
  document.getElementById("waterdroppercss").style.display="none";
  document.getElementById("coverslipcss").setAttribute("onclick", "addcoverslip()");

}



function addcoverslip(){
  document.getElementById("coverslipcss").style.top = 55+ "%";
  document.getElementById("coverslipcss").style.left = 68+ "%";
  document.getElementById("glassslidecss").setAttribute("onclick", "clickglassslide()");
}

function clickglassslide(){
  document.getElementById("mircoscopeslidecss").style.display="block";
  document.getElementById("safranindropcss").style.display="none";
  document.getElementById("watercss").style.display="none";
  document.getElementById("distwaterdropcss").style.display="none";
  document.getElementById("glassslidecss").style.display="none";
  document.getElementById("coverslipcss").style.display="none";
  document.getElementById("rootsectioncss").style.display="none";


}