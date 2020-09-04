document.getElementById("slide2").style.display="none";
document.getElementById("slide3").style.display="none";
document.getElementById("slide4").style.display="none";
document.getElementById("slide1").style.display="inline";

var myVar = setInterval(myTimer, 10000);


var scrolled = false;
var nav = document.getElementsByClassName('nav-top-float');

function myFunction() {
    if (100 < window.scrollY && !scrolled) {
      nav[0].classList.add("visible");
      nav[0].animate([{top:"-150px"},{top:0}],{
        duration:300,
        easing:'ease-in-out',
        iterations:1,
        direction:"alternate",
        fill:"forwards"
      })
        scrolled = true;
    }

   if (100 > window.scrollY && scrolled) {
    
    nav[0].animate([{top:0},{top:"-150px"}],{
        duration:100,
        easing:'ease-in-out',
        iterations:1,
        direction:"alternate",
        fill:"forwards"
      })

      setTimeout(function(){ 
        nav[0].classList.remove("visible");
       }, 300);
        scrolled = false;      
    }
}

function myslider(id, labelid){

clearInterval(myVar)

for (let index = 0; index < 4; index++) {
  document.getElementById("slide"+(index+1)).style.display="none";
  if(document.getElementById("label"+(index+1)).classList.length==2){
    document.getElementById("label"+(index+1)).classList.remove("texto-seleccionado");
  }
}

document.getElementById(id).style.display="inline";
document.getElementById(labelid).classList.add("texto-seleccionado");

}




function myTimer() {
var position = 0;
for (let index = 0; index < 4; index++) {
  if(document.getElementById('slide'+(index+1)).style.display=='inline'){
    document.getElementById('slide'+(index+1)).style.display="none";
    position=index+1;
  }
  if(document.getElementById("label"+(index+1)).classList.length==2){
      document.getElementById("label"+(index+1)).classList.remove("texto-seleccionado");
  }
}

document.getElementById("radio"+(position==4?1:position+1)).checked = true;
document.getElementById('slide'+(position==4?1:position+1)).style.display="inline";
document.getElementById("label"+(position==4?1:position+1)).classList.add("texto-seleccionado");

}



//         document.addEventListener('swiped-left', function(e) {
//             console.log(e.target); // the element that was swiped
//         });

//         document.addEventListener('swiped-right', function(e) {
//             console.log(e.target); // the element that was swiped
//         });

//         document.addEventListener('swiped-down', function(e) {
//     console.log(e.target); // the element that was swiped
// });

var elementoTouch= document.getElementById("pestanias");

elementoTouch.addEventListener('touchstart', function(event){
//Comprobamos si hay varios eventos del mismo tipo
if (event.targetTouches.length == 1) { 
var touch = event.targetTouches[0]; 
// con esto solo se procesa UN evento touch
console.log(" se ha producido un touchstart en las siguientes cordenas: X " + touch.pageX + " en Y " + touch.pageY);
if(touch.pageX>130){
var position = 0;
for (let index = 0; index < 4; index++) {
  if(document.getElementById('slide'+(index+1)).style.display=='inline'){
    document.getElementById('slide'+(index+1)).style.display="none";
    position=index+1;
  }
  if(document.getElementById("label"+(index+1)).classList.length==2){
      document.getElementById("label"+(index+1)).classList.remove("texto-seleccionado");
  }
}

document.getElementById("radio"+(position==4?1:position+1)).checked = true;
document.getElementById('slide'+(position==4?1:position+1)).style.display="inline";
document.getElementById("label"+(position==4?1:position+1)).classList.add("texto-seleccionado");
}else{

var position = 0;
for (let index = 0; index < 4; index++) {
if(document.getElementById('slide'+(index+1)).style.display=='inline'){
document.getElementById('slide'+(index+1)).style.display="none";
position=index+1;
}
if(document.getElementById("label"+(index+1)).classList.length==2){
document.getElementById("label"+(index+1)).classList.remove("texto-seleccionado");
}
}

document.getElementById("radio"+(position==1?4:position==4?3:position-1)).checked = true;
document.getElementById('slide'+(position==1?4:position==4?3:position-1)).style.display="inline";
document.getElementById("label"+(position==1?4:position==4?3:position-1)).classList.add("texto-seleccionado");

}
}

}, false);