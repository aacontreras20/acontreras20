// Team Phantom Tollbooth :: Clyde Sinclair, Fierce Dragon
// SoftDev pd0
// K31 -- canvas based JS animation
// 2022-02-15t

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

var requestID = 10; //t global var for use with animation frames


//var clear = function(e) {
var clear = (e) => {
  console.log("clear invoked...")

  
};


var radius = 0;
var growing = true;


//var drawDot = function() {
var drawDot = (e) => {
  window.cancelAnimationFrame(drawDot)
  console.log("drawDot invoked...")
  console.log(requestID)
  clear();
  ctx.beginPath();
  ctx.arc(250, 250, requestID, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fill()
  requestID++
  if(requestID <= 100){
  window.requestAnimationFrame(drawDot(requestID));
  
  }
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
  window.cancelAnimationFrame(drawDot)

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
