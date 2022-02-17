// Team Caffinated Kangaroos :: Aaron Contreras, David Chong
//SoftDev pd0
//K31 -- Canvas based js operations
//2022-02-16

// model for HTML5 canvas-based animation

// SKEELTON


//access canvas and buttons via DOM
var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to team color
ctx.fillStyle = "#42c2f5"; // YOUR CODE HERE

var requestID; //t global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")
  ctx.clearRect(0, 0, c.clientWidth, c.height)
  
};

var radius = 0;
var growing = true;


//var drawDot = function() {
var drawDot = (e) => {
  stop();
  clear();
  window.cancelAnimationFrame(requestID);
  console.log("drawDot invoked...");
  console.log(requestID);
  if (growing){
    radius = radius + 1;
    if (radius >= 250){
      growing = false;

    }  
  }
  else{
    radius = radius -1;
    if (radius <= 0){
      growing = true;
    }
  }

  
  ctx.beginPath();
  ctx.arc(250, 250, radius, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fill();
  requestID = window.requestAnimationFrame(drawDot);
  
  
  // YOUR CODE H

  /*
    ...to
    Wipe the canvas,
    Repaint the circle,

    ...and somewhere (where/when is the right time?)
    Update requestID to propagate the animation.
    You will need
    window.cancelAnimationFrame()
    window.requestAnimationFrame()

   */
};


//var stopIt = function() {
var stopIt = () => {
  console.log("stopIt invoked...")
  console.log( requestID );
  window.cancelAnimationFrame(requestID)

  // YOUR CODE HERE
  /*
    ...to
    Stop the animation

    You will need
    window.cancelAnimationFrame()
  */
};


dotButton.addEventListener( "click", drawDot );
stopButton.addEventListener( "click",  stopIt );
