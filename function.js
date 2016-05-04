//############################################   FUNCTIONS   ############################

//----------------------------------- Example 1------------------------------------------

function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = {make: "Honda", model: "Accord", year: 1998};
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
                // (the make property was changed by the function)

//-------------------------------  Example 2 -------------Function hoisting-------------------------------  

console.log(square(5));
/* ... */
function square(n) { return n*n }

// ---------------------------Example 3-----------------Function hoisting -------------------------
console.log(square(5));
var square = function (n) {
  return n * n;
}              

// ----------------------------Example 4 --------------closure chaining ------------------------
// Scope Chaining


function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)


// -------------------------Example 5-------------------same name closures---------------------------
function outside() {
  var x = 10;
  function inside(x) {
    return x;
  }
  return inside;
}
result = outside()(20); // returns 20 instead of 10

// -----------------------------------   Example 6 -------------arguements-------------------------
function myConcat(separator) {
   var result = "", // initialize list
       i;
   // iterate through arguments
   for (i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
   }
   return result;
}

// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// -----------------------------------  Example 7 ---------Default Parameters--------------------
function multiply(a, b = 1) {
  return a*b;
}

multiply(5); // 5