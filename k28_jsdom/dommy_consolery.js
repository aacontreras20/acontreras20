/*
   your PPTASK:
   
   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.
    		
    		Write with your future self or teammates in mind.
    		
    		If you find yourself falling out of flow mode, consult 
    		other teams
    		MDN

   A few comments have been pre-filled for you...
   
   (delete this block comment once you are done)
*/

// Team Caffinated Kangaroos :: Aaron Contreras, David Chong
//SoftDev pd0
//K28 -- DOMFoolery
//2022-02-08
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-J in Firefox to reveal console)
console.log("AYO");

var i = "hello"; //typing i or j into dev console returns their value
var j = 20;



//assign an anonymous fxn to a var
var f = function(x) { //typing f (x) into dev console returns output of function
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy', //typing o.<key> will display value 
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist");//gets id by parsing through html file 
  var newitem = document.createElement("li");//creates new li element in html file
  newitem.innerHTML = text;  
  list.appendChild(newitem);
};


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {//only updates elements without class
  var items = document.getElementsByTagName("li");//is collection
  console.log(items)
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
// FIB
function fib(n){
  if(n <= 1){
      return n;
  }else{
      return (fib(n-1) + fib)
  }
}
// FAC
factorial = function(n){
  if(n == 1){
      return 1;
  }else{
      return(n * factorial(n-1));
  }
}
// GCD
gcd = function(a, b){
  smallest = a;
  if(a > b){
      smallest = b;
  }
  // console.log("smallest is " + smallest);
  for(let i = smallest; i >= 1; i--){
      // console.log("i is " + i);
      // console.log("a % i is " + a%i)
      // console.log("b % i is " + b%i)
      if(a % i == 0 && b % i == 0){
          return i;
      }
  }
}

addItem("The GCD of 1280 and 146 is " + gcd(1280,146));


