//  ###############################   OBJECTS   #######################################

//-------------------- Example 1  ------Enumerating all properties of an object--------
//   http://stackoverflow.com/questions/17893718/what-does-enumerable-mean
var obj = { key: 'val' };

console.log('toString' in obj); // true
console.log(typeof obj.toString); // "function"

for (var key in obj)
    console.log(key); // "key"


//  --------------------Example 2 --------------------------------------------------
var o = {};
o['foo'] =  0;                               // enumerable, normal
Object.defineProperty(o, 'bar', {value: 1}); // nonenumerable, weird
//Now in a for..in, imagine it like pseudocode

/*for property in o:
    if not property enumerable continue // skip non-enumerable, "bar"
    else do /* whatever */              // act upon enumerable, "foo"*/

// -----------------------------Example 3  -----------------------------------------

var car = {
    make: 'Honda',
    model: 'Civic',
    year: '2008',
    condition: 'bad',
    mileage: 36000
  };

  Object.defineProperty(car, 'mySecretAboutTheCar', {
    value: 'cat pee in back seat',
    enumerable: false
  });

console.log(car.mySecretAboutTheCar); // prints 'cat pee in back seat'
console.log(Object.keys(car)); //prints ['make', 'model', 'year', 'condition', 'mileage']


// Example ------------------------  Example 4 -------Using the Object.create method--------------------

// Animal properties and method encapsulation
var Animal = {
  type: "Invertebrates", // Default value of properties
  displayType : function() {  // Method which will display type of Animal
    console.log(this.type);
  }
}

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Output:Fishes


// ------------------------------ Example 5 Inheritance ------------------------------------------

var o = {
  a: 2,
  m: function(b){
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// When calling o.m in this case, 'this' refers to o

var p = Object.create(o);
// p is an object that inherits from o

p.a = 12; // creates an own property 'a' on p
console.log(p.m()); // 13
// when p.m is called, 'this' refers to p.
// So when p inherits the function m of o, 
// 'this.a' means p.a, the own property 'a' of p

// -----------------------------  Example 6 ------Objects created with syntax constructs--------------------------

var o = {a: 1};
Object.prototype.q = 'q'
console.log(o.q)   //   q

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype. 
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// Arrays inherit from Array.prototype 
// (which has methods like indexOf, forEach, etc.)
// The prototype chain looks like:
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// Functions inherit from Function.prototype 
// (which has methods like call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null


// -------------------  Example 7 ------Object.create-----------------
var a = {a: 1}; 
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); 
// undefined, because d doesn't inherit from Object.prototype



//----------------------  Example 8   classes --------------

"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);


// ----------------------------   Example 9  -constructor function------------------

function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};

var g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.