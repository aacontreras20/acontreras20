// Team Caffinated Kangaroos :: Aaron Contreras, David Chong
//SoftDev pd0
//K27 -- Basic functions in JavaScript
//2022-02-03
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

fact = function (n){
    if(n == 1){
        return 1;
    }else{
        return(n * factorial(n-1));
    }
}

function fib(n){
    if(n <= 1){
        return n;
    }else{
        return (fib(n-1) + fib(n-2))
    }
}



