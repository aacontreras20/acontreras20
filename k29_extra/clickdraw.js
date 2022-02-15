//retrieve 
var c =

var ctx = c.getContext("2d");
//init global state var

var mode = "rect"

//var toggleMode = function(e){}
var toggleMode = (e) => {
    console.log("toggling...");
    if(mode = "rect"){
	mode = "circ";
    }
    else{
	mode = "rect";
    }
}

var drawRect = function(e){
    var mouseX = e.offsetX
    var mouseY = e.offsetY
    console.log("mouseclick registered at ", mouseX, mouseY);
}

var draw = function(e){
	
} 


var bToggler = document.getElementById("buttonToggle") ;
bToggler.addEventListener("click", toggleMode());
var clearB = document.getElementById("buttonClear") ;
clearB.addEventListener("click", wipeCanvas());
