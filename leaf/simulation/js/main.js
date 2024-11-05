function restartexp() {
  location.reload();
}

var imgblade = null;
var imgtbdown = null;
var imgtbdowncut = null;
var bladeimg;
function bladejsclick() {
  bladeimg = document.getElementById("bladecss");
  document.getElementById("bladecss").style.top = 10.5 + '%';
  var bladeleft = 10; //initial  position
  clearInterval(imgblade);

  imgblade = setInterval(frame, 90); /* frame is 90 denotes the speed of the movement*/

  function frame() {
    if (bladeleft == 24) {

      clearInterval(imgblade);
      imgtbdown = setInterval(frames, 200);

    } else {

      bladeleft++;
      bladeimg.style.left = bladeleft + '%';

    }
  }

  function frames() {
    clearInterval(imgtbdown);
    var bladetopp = 12;
    var bladeleftd = 10;
    bladeimg.style.left = bladeleftd + '%';
    bladeimg.style.top = bladetopp + '%';
    imgtbdowncut = setInterval(framescut, 60);

  }

  function framescut() {
    var bladeleftdcut = 10;
    clearInterval(imgtbdowncut);
    imgblade = setInterval(framecut2, 90);

    function framecut2() {
      if (bladeleftdcut == 27) {

        clearInterval(imgblade);
        document.getElementById("bladecss").style.display = "none";
        document.getElementById("bladecsscorkcut").style.display = "block";
        //bladeimg.style.left = 60 + '%';
        // bladeimg.style.top = 5 + '%';
        document.getElementById("leafcss").style.display = "none";
        document.getElementById("leafcutsectioncss").style.display = "block";
        document.getElementById("leafcutcss").style.display = "block";
        document.getElementById("instshowsteps").innerHTML = "Click on the small section of the leaf to place it in a cork.";

      } else {

        bladeleftdcut++;
        bladeimg.style.left = bladeleftdcut + '%';

      }
    }
  }

}


function placeincork() {
  document.getElementById("instshowsteps").innerHTML = "Click on the blade to cut a small section of the leaf.";
  document.getElementById("leafcutsectioncss").style.left = 55 + "%";
  document.getElementById("leafcutsectioncss").style.top = 19 + "%";
  document.getElementById("bladecsscorkcut").setAttribute("onclick", "bladejscorkclick()");

}

var imgbladecutleft = null;
var imgbladecutright = null;
var imgblademoveleft = null;
var imgblademovedowncork = null;
var imgblademovedowncork1 = null;
var bladeorgpos = null;
var bladecorkimg;
function bladejscorkclick() {
 
  bladecorkimg = document.getElementById("bladecsscorkcut");

  var bladetop = 15; //initial  position
  clearInterval(imgbladecutright);

  imgbladecutright = setInterval(frame, 90); /* frame is 90 denotes the speed of the movement*/

  function frame() {
    if (bladetop == 24) {

      clearInterval(imgbladecutright);
      imgbladecutleft = setInterval(framesleft, 200);

    } else {
      bladecorkimg.style.transform = "rotate(90deg)";
      bladetop++;
      bladecorkimg.style.top = bladetop + '%';

    }
  }

  function framesleft() {
    clearInterval(imgbladecutleft);
    bladecorkimg.style.top = 15 + '%';
    bladecorkimg.style.left = 56 + '%';
    imgblademoveleft = setInterval(frameleftcut, 90);

  }

  function frameleftcut() {
    var bladetopl = 15;

    clearInterval(imgblademoveleft);

    imgblademoveleft = setInterval(framemoveleft, 90);
    function framemoveleft() {

      if (bladetopl == 24) {

        clearInterval(imgblademoveleft);
        bladecorkimg.style.transform = "rotate(0deg)";
        bladecorkimg.style.top = 5 + '%';
        bladecorkimg.style.left = 65 + '%';
        document.getElementById("corkcss").style.transform = "rotate(90deg)";
        document.getElementById("leafcutsectioncss").style.display = "none";
        document.getElementById("leafthinsection").style.display = "block";
        imgblademovedowncork = setInterval(framemovedown, 200);

      } else {
        bladecorkimg.style.transform = "rotate(90deg)";
        bladetopl++;
        bladecorkimg.style.top = bladetopl + '%';

      }
    }
  }
  function framemovedown() {

    var bladetopl = 15;
    clearInterval(imgblademovedowncork);

    imgblademovedowncork1 = setInterval(framemovedowncork, 90);
    function framemovedowncork() {

      if (bladetopl == 24) {

        clearInterval(imgblademoveleft);
        clearInterval(imgblademovedowncork1);
       bladecorkimg.style.top = 10 + '%';
       bladecorkimg.style.left = 76 + '%';
       bladecorkimg.style.transform = "rotate(20deg)";
        document.getElementById("leafthinsection1").style.display = "block";
        document.getElementById("fingerthumbcss").style.display = "block";
        document.getElementById("fingerindexcss").style.display = "block";
        //bladeorgpos = setInterval(bladeorgposition, 200);
        document.getElementById("brushcss").setAttribute("onclick", "brushclickmoveleaf()");
        document.getElementById("bladecsscorkcut").removeAttribute("onclick", "bladejscorkclick()");
        document.getElementById("instshowsteps").innerHTML = "Click on the brush to place near blade.";
      }
      else {
        bladecorkimg.style.transform = "rotate(90deg)";
        bladecorkimg.style.left = 61 + '%';
        bladetopl++;
        bladecorkimg.style.top = bladetopl + '%';
      }
    }

  }
}
function brushclickmoveleaf(){
  document.getElementById("instshowsteps").innerHTML = "Click on the brush to shift the leaf section in watch glass/   petridish containing water.";
  document.getElementById("brushcss").style.top = -14 + "%";
  document.getElementById("brushcss").style.left = 84.4 + "%";
  document.getElementById("fingerthumbcss").style.top = -2 + "%";
  document.getElementById("fingerthumbcss").style.left = 84 + "%";
  document.getElementById("fingerindexcss").style.top = -2 + "%";
  document.getElementById("fingerindexcss").style.left = 84 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "brushleafmovetopetridish()");
  document.getElementById("bladecsscorkcut").removeAttribute("onclick", "bladejscorkclick()");
}

function brushleafmovetopetridish(){
  document.getElementById("instshowsteps").innerHTML = "Click on the brush to place over petridish.";
  document.getElementById("leafthinsection1").style.top=23+"%";
  document.getElementById("leafthinsection1").style.left=82+"%";
  document.getElementById("fingerthumbcss").style.top = 8 + "%";
  document.getElementById("fingerthumbcss").style.left = 95 + "%";
  document.getElementById("fingerindexcss").style.top = 8+ "%";
  document.getElementById("fingerindexcss").style.left = 95 + "%";
  //document.getElementById("brushcss").setAttribute("onclick", "brushmoveorgposition()");
  //document.getElementById("brushcss").setAttribute("onclick", "bladeorgposition()");
  clearInterval(bladeorgpos);
  bladecorkimg.style.top = 5 + '%';
  bladecorkimg.style.left = 60 + '%';
  document.getElementById("brushcss").style.top = 0 + "%";
  document.getElementById("brushcss").style.left = 95 + "%";
  bladecorkimg.style.transform = "rotate(0deg)";
  document.getElementById("bladecsscorkcut").removeAttribute("onclick", "bladejscorkclick()");
  document.getElementById("brushcss").setAttribute("onclick", "brushmovetopetridish()");
  
}




/*function bladeorgposition() {
  clearInterval(bladeorgpos);
  bladecorkimg.style.top = 5 + '%';
  bladecorkimg.style.left = 60 + '%';
  document.getElementById("brushcss").style.top = 0 + "%";
  document.getElementById("brushcss").style.left = 95 + "%";
  bladecorkimg.style.transform = "rotate(0deg)";
  document.getElementById("bladecsscorkcut").removeAttribute("onclick", "bladejscorkclick()");
  document.getElementById("brushcss").setAttribute("onclick", "brushmovetopetridish()");
}*/

function brushmovetopetridish() {
  document.getElementById("instshowsteps").innerHTML = "Click on the brush to transfer the leaf section onto a glass microscope slide. ";
  document.getElementById("brushcss").style.top = -10 + "%";
  document.getElementById("brushcss").style.left = 84.4 + "%";
  document.getElementById("fingerthumbcss").style.top = 1 + "%";
  document.getElementById("fingerthumbcss").style.left = 85 + "%";
  document.getElementById("fingerindexcss").style.top = 1 + "%";
  document.getElementById("fingerindexcss").style.left = 85 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "putinglassslide()");
}

function putinglassslide(){
  document.getElementById("instshowsteps").innerHTML = "Click on the brush to move the brush to its original position.";
  document.getElementById("brushcss").style.top = 15 + "%";
  document.getElementById("brushcss").style.left = 72 + "%";
  document.getElementById("leafthinsection1").style.top = 48 + "%";
  document.getElementById("leafthinsection1").style.left = 69 + "%";
  document.getElementById("fingerthumbcss").style.top = 30 + "%";
  document.getElementById("fingerthumbcss").style.left = 71 + "%";
  document.getElementById("fingerindexcss").style.top = 30+ "%";
  document.getElementById("fingerindexcss").style.left = 71 + "%";
  document.getElementById("brushcss").setAttribute("onclick", "brushmoveorgpos()");
  
}


function brushmoveorgpos(){
  document.getElementById("instshowsteps").innerHTML = "Click on the dropper to draw water from the beaker. ";
  document.getElementById("brushcss").style.top = 0 + "%";
  document.getElementById("brushcss").style.left = 95 + "%";
  document.getElementById("fingerthumbcss").style.display = "none";
        document.getElementById("fingerindexcss").style.display = "none";
  document.getElementById("droppercss").setAttribute("onclick", "dropperwater()");
}

function dropperwater() {
  document.getElementById("instshowsteps").innerHTML = "Click on the dropper to place the dropper above glass slide. ";
  document.getElementById("droppercss").style.left = 65 + "%";
  document.getElementById("droppercss").removeAttribute("onclick", "dropperwater()");
  document.getElementById("droppercss").setAttribute("onclick", "droppermoveglassslide()");
}

function droppermoveglassslide() {
  document.getElementById("instshowsteps").innerHTML = "Click on the dropper to add a drop of water onto the leaf section.";
  document.getElementById("dropperwatercss").style.display = "block";
  document.getElementById("dropperwatercss").style.left = 68 + "%";
  document.getElementById("dropperwatercss").style.top = 23 + "%";
  document.getElementById("droppercss").style.display = "none";
  document.getElementById("dropperwatercss").removeAttribute("onclick", "droppermoveglassslide()()");
  document.getElementById("dropperwatercss").setAttribute("onclick", "dropwaterglassslide()");

}

var dropwater = null;
var dropimage;
function dropwaterglassslide() {

  dropimage = document.getElementById("dropcss").style.display = "block";
  var waterdroptop = 45;
  clearInterval(dropwater);

  dropwater = setInterval(framemovedrop, 90);

  function framemovedrop() {

    if (waterdroptop == 48) {
      clearInterval(dropwater);
      document.getElementById("watercss").style.display = "block";
      document.getElementById("dropperwatercss").style.display = "none";
      document.getElementById("droppercss").style.display = "block";
      document.getElementById("droppercss").style.left = 75 + "%";
      document.getElementById("dropcss").style.display = "none";
      document.getElementById("coverslipcss").setAttribute("onclick", "coverslipcover()");
      document.getElementById("instshowsteps").innerHTML = "Click on the coverslip to place over the leaf section.";
    }
    else {

      waterdroptop++;
      dropimage.style.top = waterdroptop + '%';
    }
  }

}



function coverslipcover() {
  document.getElementById("instshowsteps").innerHTML = "Click on the prepared slide to place on the stage of the microscope.";
  document.getElementById("coverslipcss").style.left = 68 + "%";
  document.getElementById("coverslipcss").style.top = 45 + "%";
  document.getElementById("coverslipcss").removeAttribute("onclick", "coverslipcover()");
  document.getElementById("glassslidecss").setAttribute("onclick", "glasslidetomicroscope()");

}

function glasslidetomicroscope() {
  document.getElementById("instshowsteps").innerHTML = "Click on the lens to see the cross section of the leaf.";
  document.getElementById("mircoscopeslidecss").style.display = "block";
  document.getElementById("leafthinsection1").style.display = "none";
  document.getElementById("glassslidecss").style.display = "none";
  document.getElementById("coverslipcss").style.display = "none";
  document.getElementById("watercss").style.display = "none";


}