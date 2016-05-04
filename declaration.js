/*#############################DECLARATIONS############################################*/


// ****************************    EVALUATING VARIABLES   ********************************
//--------------------Example1 1 ---------------------------------------------------------

var a;
console.log("The value of a is " + a); // logs "The value of a is undefined"
console.log("The value of b is " + b); // throws ReferenceError exception

//---------------------Example 2 ----------------------------------------------------------
var a;
a + 2;  // Evaluates to NaN

//-------------------Example 3--------------------------------------------------------------
var n = null;
console.log(n * 32); // Will log 0 to the console

// *****************************  VARIABLE SCOPE *******************************************

//-------------------Example 4 -------------------------------------------------------------
if (true) {
  var x = 5;
}
console.log(x);  // 5

// -------------------Example 5 ------------------------------------------------------------
if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y is not defined

//******************************** VARIABLE HOISTING ***************************************

// -------------------Example 6-------------------------------------------------------------

var myvar = "my value";
 
(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

// -------------------Example 7 -------------------------------------------------------------

console.log(x); // ReferenceError
let x = 3;
// *****************************  CONSTANTS  *************************************************

//------------------- Examle 8 ---------------------------------------------------------------

// THIS WILL CAUSE AN ERROR
function f() {};
const f = 5;

// THIS WILL CAUSE AN ERROR ALSO
function f() {
  const g = 5;
  var g;

  //statements
}

//----------------------- Example 9 ------------------------------------------------------------
const MY_OBJECT = {"key": "value"}; 
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT)

/*#############################DATA STRUCTURES ############################################*/


//-------------------------  Example 10  -------------------------------------------------------
//"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2   
// Note: the parentheses are added for clarity, not required.
