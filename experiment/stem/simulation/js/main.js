function restartexp() {
  location.reload();
}

var imgblade = null;
var imgtbdown = null;
var imgtbdowncut = null;
var bladeimg;
function bladejsclick() {
  bladeimg = document.getElementById("bladecss");
  document.getElementById("bladecss").style.top = 6 + '%';
  var bladeleft = 5; //initial  position
  clearInterval(imgblade);

  imgblade = setInterval(frame, 90); /* frame is 90 denotes the speed of the movement*/

  function frame() {
    if (bladeleft == 15) {

      clearInterval(imgblade);
      document.getElementById("stemcss").style.display = "none";
      document.getElementById("cutstemseccss").style.display = "block";
      document.getElementById("cutstemcss").style.display = "block";
      document.getElementById("forcepcss").setAttribute("onclick", "forcepclick()");
      document.getElementById("bladecss").removeAttribute("onclick", "bladejsclick()");
      document.getElementById("bladecss").style.transform = "rotate(0deg)";
      document.getElementById("fingerthumbcss").style.display = "none";
      document.getElementById("fingerindexcss").style.display = "none";
    } else {
      document.getElementById("bladecss").style.transform = "rotateX(80deg)";
      bladeleft++;
      bladeimg.style.left = bladeleft + '%';

    }
  }

}


function forcepclick() {
  document.getElementById("forcepcss").style.display = "none";
  document.getElementById("pickforcepcss").style.display = "block";
  document.getElementById("bladecss").removeAttribute("onclick", "bladejsclick()");
  document.getElementById("bladecss").setAttribute("onclick", "bladejscutsectionclick()");
  document.getElementById("fingerthumbcss").style.display = "block";
  document.getElementById("fingerindexcss").style.display = "block";
  document.getElementById("fingerindexcss").style.top = 35 + "%";
  document.getElementById("fingerindexcss").style.left = 75 + "%";
  document.getElementById("fingerthumbcss").style.top = 35 + "%";
  document.getElementById("fingerthumbcss").style.left = 75 + "%";
}

var imgbladecutsection = null;
var bladecutimg;
function bladejscutsectionclick() {
  bladecutimg = document.getElementById("bladecss");
  document.getElementById("bladecss").style.left = 65 + '%';
  
  var bladetop = 45; //initial  position
  clearInterval(imgbladecutsection);
  imgbladecutsection = setInterval(framecutsection, 120);

  function framecutsection() {
    if (bladetop == 50) {

      clearInterval(imgbladecutsection);
      document.getElementById("smallcutstemseccss").style.display = "block";
      document.getElementById("forcepcss").removeAttribute("onclick", "forcepclick()");
      document.getElementById("bladecss").removeAttribute("onclick", "bladejscutsectionclick()");
      document.getElementById("pickforcepcss").setAttribute("onclick", "pickforcepclick()");
      document.getElementById("bladecss").style.left = 40 + '%';
      document.getElementById("bladecss").style.top = 5 + '%';
      document.getElementById("bladecss").style.transform = "rotate(0deg)";
     

    } else {
      document.getElementById("bladecss").style.transform = "rotateZ(90deg)";
      bladetop++;
      bladecutimg.style.top = bladetop + '%';

    }
  }

}

function pickforcepclick() {
  document.getElementById("forcepcss").style.display = "block";
  document.getElementById("pickforcepcss").style.display = "none";
  document.getElementById("cutstemseccss").style.left = 67 + "%";
  document.getElementById("cutstemseccss").style.top = 15 + "%";
  document.getElementById("fingerthumbcss").style.display = "block";
  document.getElementById("fingerindexcss").style.display = "block";
  document.getElementById("fingerindexcss").style.top = 10 + "%";
  document.getElementById("fingerindexcss").style.left = 90 + "%";
  document.getElementById("fingerthumbcss").style.top = 10 + "%";
  document.getElementById("fingerthumbcss").style.left = 90 + "%";
  document.getElementById("forcepcss").setAttribute("onclick", "forcepclick()");
  document.getElementById("brushcss").setAttribute("onclick", "brushclick()");

}

function brushclick() {
  document.getElementById("fingerindexcss").style.top = 25 + "%";
  document.getElementById("fingerindexcss").style.left = 70.3 + "%";
  document.getElementById("fingerthumbcss").style.top = 25 + "%";
  document.getElementById("fingerthumbcss").style.left = 70.3 + "%";
  document.getElementById("brushcss").style.top = 17 + "%";
  document.getElementById("brushcss").style.left = 69.5 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "brushclickforwater()");
}

function brushclickforwater() {
  document.getElementById("brushcss").style.top = 17 + "%";
  document.getElementById("brushcss").style.left = 30 + "%";
  document.getElementById("smallcutstemseccss").style.top = 48 + "%";
  document.getElementById("smallcutstemseccss").style.left = 27 + "%";
  document.getElementById("fingerindexcss").style.top = 25 + "%";
  document.getElementById("fingerindexcss").style.left = 30 + "%";
  document.getElementById("fingerthumbcss").style.top = 25 + "%";
  document.getElementById("fingerthumbcss").style.left = 30 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "brushclicktoorg()");
}

function brushclicktoorg() {
  document.getElementById("brushcss").style.top = 0 + "%";
  document.getElementById("brushcss").style.left = 90 + "%";
  document.getElementById("fingerindexcss").style.top = 10 + "%";
  document.getElementById("fingerindexcss").style.left = 90 + "%";
  document.getElementById("fingerthumbcss").style.top = 10 + "%";
  document.getElementById("fingerthumbcss").style.left = 90 + "%";
  document.getElementById("brushcss").removeAttribute("onclick", "brushclick()");
  document.getElementById("brushcss").setAttribute("onclick", "brushpickwaterstemclick()");


}

function brushpickwaterstemclick() {
  document.getElementById("brushcss").style.top = 17 + "%";
  document.getElementById("brushcss").style.left = 30 + "%";
  document.getElementById("smallcutstemseccss").style.top = 48 + "%";
  document.getElementById("smallcutstemseccss").style.left = 27 + "%";
  document.getElementById("fingerindexcss").style.top = 25 + "%";
  document.getElementById("fingerindexcss").style.left = 30 + "%";
  document.getElementById("fingerthumbcss").style.top = 25 + "%";
  document.getElementById("fingerthumbcss").style.left = 30 + "%";

  document.getElementById("brushcss").setAttribute("onclick", "brushclicktoglassslide()");
}

function brushclicktoglassslide() {

  document.getElementById("brushcss").style.top = 17 + "%";
  document.getElementById("brushcss").style.left = 70 + "%";
  document.getElementById("smallcutstemseccss").style.top = 48.5 + "%";
  document.getElementById("smallcutstemseccss").style.left = 68 + "%";
  document.getElementById("fingerindexcss").style.top = 25 + "%";
  document.getElementById("fingerindexcss").style.left = 70.3 + "%";
  document.getElementById("fingerthumbcss").style.top = 25 + "%";
  document.getElementById("fingerthumbcss").style.left = 70.3 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "brushclicktoorg1()");
}

function brushclicktoorg1() {
  document.getElementById("brushcss").style.top = 0 + "%";
  document.getElementById("brushcss").style.left = 90 + "%";
  document.getElementById("fingerthumbcss").style.display = "none";
  document.getElementById("fingerindexcss").style.display = "none";
  /*document.getElementById("fingerindexcss").style.top = 70 + "%";
  document.getElementById("fingerindexcss").style.left = 91 + "%";
  document.getElementById("fingerthumbcss").style.top = 70 + "%";
  document.getElementById("fingerthumbcss").style.left = 91 + "%";*/
  document.getElementById("brushcss").removeAttribute("onclick", "brushclick()");
  //document.getElementById("droppercss").setAttribute("onclick", "droppermovetowaterbeakerclick()");
  document.getElementById("safranindroppercss").setAttribute("onclick", "droppermovesafgslideclick()");
  //document.getElementById("droppercss").setAttribute("onclick", "droppermovetowaterbeakerclick()");
}




function droppermovesafgslideclick() {
  document.getElementById("safranindroppercss").style.top = 23 + "%"; /** 23 */
  document.getElementById("safranindroppercss").style.left = 67 + "%"; /** 26 */
  document.getElementById("safranindroppercss").setAttribute("onclick", "dropperdropsafclick()");

}

function dropperdropsafclick() {
  document.getElementById("safranindropcss").style.display = "block";
  //document.getElementById("droppercss").style.display="block";
  document.getElementById("safranindroppercss").style.top = 69.8 + "%";
  document.getElementById("safranindroppercss").style.left = 91.7 + "%";
  document.getElementById("droppercss").setAttribute("onclick", "droppermovedistbeakerclick()");
  document.getElementById("safranindroppercss").removeAttribute("onclick", "dropperdropsafclick()");
}


function droppermovedistbeakerclick() {
  document.getElementById("droppercss").style.display = "none";
  document.getElementById("dropperdistwatercss").style.display = "block";
  document.getElementById("dropperdistwatercss").setAttribute("onclick", "droppershowdistdropperclick()");

}

function droppershowdistdropperclick() {
  document.getElementById("dropperdistwatercss").style.top = 24 + "%";
  document.getElementById("dropperdistwatercss").style.left = 67 + "%";
  document.getElementById("dropperdistwatercss").setAttribute("onclick", "dropperdropdistgslideclick()");
}

function dropperdropdistgslideclick() {
  document.getElementById("distwaterdropcss").style.display = "block";
  document.getElementById("droppercss").style.display = "block";
  document.getElementById("dropperdistwatercss").style.display = "none";
  document.getElementById("safranindropcss").style.display = "none";
  //document.getElementById("brushcss").setAttribute("onclick", "brushpickdiststemclick()");
  document.getElementById("droppercss").removeAttribute("onclick", "droppermovedistdropperclick()");
  document.getElementById("fastgreendroppercss").setAttribute("onclick", "droppermovefastgdropperclick()");

}





function droppermovefastgdropperclick() {
  document.getElementById("fastgreendroppercss").style.top = 22 + "%";
  document.getElementById("fastgreendroppercss").style.left = 67 + "%";
  document.getElementById("fastgreendroppercss").setAttribute("onclick", "dropfastgreenclick()");
}

function dropfastgreenclick() {
  document.getElementById("distwaterdropcss").style.display = "none";
  document.getElementById("fastgreendropcss").style.display = "block";
  document.getElementById("fastgreendroppercss").style.top = 69.8 + "%";
  document.getElementById("fastgreendroppercss").style.left = 83.6 + "%";
  document.getElementById("droppercss").setAttribute("onclick", "droppermovetowaterbeakerclick()");
  document.getElementById("fastgreendroppercss").removeAttribute("onclick", "droppermovefastgdropperclick()");
  document.getElementById("fastgreendroppercss").removeAttribute("onclick", "dropfastgreenclick()");

}

function droppermovetowaterbeakerclick() {

  document.getElementById("droppercss").style.display = "none";
  document.getElementById("dropperwatercss").style.display = "block";
  document.getElementById("dropperwatercss").setAttribute("onclick", "droppermovetoglasssliderclick()");

}

function droppermovetoglasssliderclick() {
  document.getElementById("dropperwatercss").style.top = 24 + "%";
  document.getElementById("dropperwatercss").style.left = 67 + "%";
  document.getElementById("dropperwatercss").setAttribute("onclick", "dropperdropwatergslideclick()");
}

function dropperdropwatergslideclick() {
  document.getElementById("waterdropcss").style.display = "block";
  document.getElementById("droppercss").style.display = "block";
  document.getElementById("fastgreendropcss").style.display = "none";
  document.getElementById("dropperwatercss").style.display = "none";
  document.getElementById("droppercss").removeAttribute("onclick", "droppermovetowaterbeakerclick()");
  document.getElementById("coverslipcss").setAttribute("onclick", "coverslipclick()");
}

function coverslipclick() {
  document.getElementById("coverslipcss").style.top = 45 + "%";
  document.getElementById("coverslipcss").style.left = 66 + "%";
  document.getElementById("glassslidecss").setAttribute("onclick", "clicktomovetomicroscope()");

}
function clicktomovetomicroscope() {
  document.getElementById("mircoscopeslidecss").style.display = "block";
  document.getElementById("glassslidecss").style.display = "none";
  document.getElementById("coverslipcss").style.display = "none";
  document.getElementById("smallcutstemseccss").style.display = "none";
  document.getElementById("waterdropcss").style.display = "none";
}