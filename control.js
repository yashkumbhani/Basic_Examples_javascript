// ########################## BLOCK STATEMENT #############################
//-------------------------------Example 1---------------------------------

var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2

// ######################### IF ELSE #####################################
// ----------------------------Example 2 ---------------------------------
var x;
var y = true;
if (x = y) {
  console.log('value of x ',x)
}

// -----------------------------Example 3----------------------------------

var b = new Boolean(false);
if (b) // this condition evaluates to true
if (b == true) // this condition evaluates to false

//-------------------------------Example 4 --------------------------------

var b = new Boolean(false);
if (b.valueOf()) // this condition evaluates to true
if (b.valueOf()== true) // this condition evaluates to false

// ----------------------------Example  5------------------------------------
var fruittype = 'Bananas';
switch (fruittype) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
   console.log("Sorry, we are out of " + fruittype + ".");
}
console.log("Is there anything else you'd like?");


/*output : Bananas are $0.48 a pound.
 Cherries are $3.00 a pound.
 Mangoes are $0.56 a pound.
Is there anything else you'd like
*/


// ---------------------Example 6 ---------------------------
// labels in javascript
var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
//----------------------Example 7 -----------------------------

let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}


