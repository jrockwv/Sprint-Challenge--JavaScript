// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function consume (par1, par2, callback){
  return callback(par1, par2);
}
function add(par3, par4){
  return par3 + par4;
}
function multiply(par5, par6){
  return par5 * par6;
}
function greeting(first_name, last_name){
  return `Hello ${first_name} ${last_name}, nice to meet you!`
}
/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!



// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: nested functions look for the closest var starting with whats inside it's closure, or function. If nothing reads right inside of the closure, then it will
// expand outside the closure to find the closest var that it's trying to read.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
