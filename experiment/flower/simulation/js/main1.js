function restartexp() {
    location.reload();
  }
  
  
  var imgbladets = null;
  var bladeimgts;
  function clickbladets() {
    bladeimgts = document.getElementById("bladecssts");
    document.getElementById("bladecssts").style.top =55 + '%';
    document.getElementById("bladecssts").style.left =12 + '%';
    document.getElementById("bladecssts").style.transform="rotateX(80deg)";
    var bladeleftts = 12; //initial  position
    clearInterval(imgbladets);
  
    imgbladets = setInterval(framets, 90); /* frame is 90 denotes the speed of the movement*/
  
    function framets() {
      if (bladeleftts == 20) {
  
        clearInterval(imgbladets);
        document.getElementById("flowerovarysectioncssts").style.display="none";
        document.getElementById("flowerovarysectioncssts1").style.display="block";
       // document.getElementById("forcepcssts").setAttribute("onclick", "forcepclick()");
        document.getElementById("bladecssts").removeAttribute("onclick", "bladejsclick()");
        document.getElementById("bladecssts").setAttribute("onclick", "bladejsclickcutsection()");
        document.getElementById("instshowsteps").innerHTML = "Click on the blade.";
        document.getElementById("bladecssts").style.top =5 + '%';
        document.getElementById("bladecssts").style.left =55 + '%';
        document.getElementById("bladecssts").style.transform="rotateX(0deg)";
      } else {
        
        bladeleftts++;
        bladeimgts.style.left = bladeleftts + '%';
  
      }
    }
  
  }
  
  var imgbladets2 = null;
  var bladeimgts2;
function bladejsclickcutsection(){
    

    bladeimgts2 = document.getElementById("bladecssts");
    document.getElementById("bladecssts").style.top =57 + '%';
    document.getElementById("bladecssts").style.left =12 + '%';
    document.getElementById("bladecssts").style.transform="rotateX(80deg)";
    var bladeleftts2 = 12; //initial  position
    clearInterval(imgbladets2);
  
    imgbladets2 = setInterval(framets2, 90); /* frame is 90 denotes the speed of the movement*/
  
    function framets2() {
      if (bladeleftts2 == 20) {
  
        clearInterval(imgbladets2);
        
        document.getElementById("brushcssts").setAttribute("onclick", "brushclick()");
        document.getElementById("flowerovarysectioncssts2").style.display="block";
        document.getElementById("bladecssts").removeAttribute("onclick", "bladejsclickcutsection()");
        document.getElementById("instshowsteps").innerHTML = "Click on the brush.";
        document.getElementById("bladecssts").style.top =30 + '%';
        document.getElementById("bladecssts").style.left =45 + '%';
        document.getElementById("bladecssts").style.transform="rotateX(20deg)";
      } else {
        
        bladeleftts2++;
        bladeimgts2.style.left = bladeleftts2 + '%';
  
      }
    }
}

  function brushclick(){
    document.getElementById("brushcssts").style.top =1 + '%';
    document.getElementById("brushcssts").style.left =53 + '%';
    document.getElementById("instshowsteps").innerHTML="Click on the brush to transfer the thin ovary section flower into watch glass containing water."
    document.getElementById("brushcssts").setAttribute("onclick", "movebrushclick()");
   
  }
  
  
  
  function movebrushclick(){
    document.getElementById("brushcssts").style.top =7 + '%';
    document.getElementById("brushcssts").style.left =55 + '%';
    document.getElementById("instshowsteps").innerHTML="Click on the brush to move to its orginal position."
    document.getElementById("flowerovarysectioncssts2").style.left = 52 + "%";
    document.getElementById("flowerovarysectioncssts2").style.top = 48 + "%";
    document.getElementById("brushcssts").setAttribute("onclick", "movebrushorgclick()");
   // document.getElementById("pickforcepcssls").setAttribute("onclick", "pickforcepclickorg()");
   // document.getElementById("glassslidecssls").setAttribute("onclick", "clickglassslide()");

  }

  function movebrushorgclick(){
    document.getElementById("instshowsteps").innerHTML="Click on the brush."
    document.getElementById("brushcssts").style.top =0 + '%';
    document.getElementById("brushcssts").style.left =90 + '%';
    document.getElementById("bladecssts").style.top =5 + '%';
    document.getElementById("bladecssts").style.left =55 + '%';
    document.getElementById("brushcssts").setAttribute("onclick", "movebrushwatercontclick()");
  }



function movebrushwatercontclick(){
  document.getElementById("instshowsteps").innerHTML="Click on the brush to move the cut section onto the glass slide."
  document.getElementById("brushcssts").style.top =7 + '%';
  document.getElementById("brushcssts").style.left =55 + '%';
  document.getElementById("brushcssts").setAttribute("onclick", "movetoglassslideclick()");
}


function movetoglassslideclick(){
  document.getElementById("instshowsteps").innerHTML="Click on the brush to move to its original position."
  document.getElementById("brushcssts").style.top =15 + '%';
    document.getElementById("brushcssts").style.left =82 + '%';
    document.getElementById("flowerovarysectioncssts2").style.left = 80 + "%";
    document.getElementById("flowerovarysectioncssts2").style.top = 55 + "%";
    document.getElementById("brushcssts").setAttribute("onclick", "movetobrushorg2click()");
}


  
  function movetobrushorg2click(){
    document.getElementById("instshowsteps").innerHTML="Click on the dropper 1 of staining solution bottle."
    document.getElementById("brushcssts").style.top =0 + '%';
    document.getElementById("brushcssts").style.left =90 + '%';
    document.getElementById("safranindroppercss").setAttribute("onclick", "stainingdropperclick()");
  }
  
  
  function stainingdropperclick() {
    document.getElementById("instshowsteps").innerHTML ="Click on the dropper 1 to add a drop of staining solution on the cut ovary section.";
    document.getElementById("safranindroppercss").style.top = 25 + "%";
    document.getElementById("safranindroppercss").style.left = 79 + "%";
    document.getElementById("safranindroppercss").setAttribute("onclick", "staingclick()");
  }
  
  function staingclick() {
    document.getElementById("instshowsteps").innerHTML ="Click on the dropper 2 to draw water from the beaker.  ";
    //document.getElementById("distwaterdropcss").style.display = "none";
    document.getElementById("safranindropcss").style.display = "block";
    document.getElementById("safranindroppercss").style.top = 69 + "%";
    document.getElementById("safranindroppercss").style.left = 91.8 + "%";
    document.getElementById("droppercssts").setAttribute("onclick", "droppermovetowaterbeakerclick() ");
    document.getElementById("safranindroppercss").removeAttribute("onclick", "stainingdropperclick()");
    document.getElementById("safranindroppercss").removeAttribute("onclick", "staingclick()");
  }
  

  function droppermovetowaterbeakerclick() {
    document.getElementById("instshowsteps").innerHTML ="Click on the dropper 2 to place the dropper above the glass slide. ";
    document.getElementById("droppercssts").style.display = "none";
    document.getElementById("dropperwatercssts").style.display = "block";
    document.getElementById("dropperwatercssts").setAttribute("onclick", "droppermovetoglasssliderclick()");
  
  }
  
  function droppermovetoglasssliderclick() {
    document.getElementById("instshowsteps").innerHTML =" Click on the dropper 2 to add a drop of  water on the cut section. ";
    document.getElementById("dropperwatercssts").style.top = 18 + "%";
    document.getElementById("dropperwatercssts").style.left = 78 + "%";
    document.getElementById("dropperwatercssts").setAttribute("onclick", "dropperdropwatergslideclick()");
  }
  
  function dropperdropwatergslideclick() {
    document.getElementById("instshowsteps").innerHTML="Click on the coverslip to place  over the section.";
    document.getElementById("waterdropcssts").style.display = "block";
    document.getElementById("droppercssts").style.display = "block";
    document.getElementById("safranindropcss").style.display = "none";
    document.getElementById("dropperwatercssts").style.display = "none";
    document.getElementById("droppercssts").removeAttribute("onclick", "droppermovetowaterbeakerclick()");
    document.getElementById("coverslipcssts").setAttribute("onclick", "coverslipclick()");
  
  }

function coverslipclick(){
  document.getElementById("instshowsteps").innerHTML="Click on the glass slide to place the slide on the microscope stage.";
  document.getElementById("coverslipcssts").style.top = 50 + "%";
  document.getElementById("coverslipcssts").style.left = 78 + "%";
  document.getElementById("glassslidecssts").setAttribute("onclick", "clickglassslide()");
  document.getElementById("coverslipcssts").removeAttribute("onclick", "coverslipclick()");
}

  function clickglassslide(){
    document.getElementById("glassslidecssts").style.left = 19 + "%";
    document.getElementById("glassslidecssts").style.top = 61 + "%";
  }