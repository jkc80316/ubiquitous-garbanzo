//JavaScript Closure

function init() {
    var name = 'Jinesh'; // This is a local variable created by init() function
    function displayName() { // This is closure , the inner function
      console.log(name); // Write the variable used in the global function
    }
    displayName(); //Invoke the function ( closure )
  }

  // JavaScript Closure - Counter Example
const add = (function () {
    let counter = 0; // Initialized Only once 
    console.log(counter);  
    return function () {
        counter +=1; //Increment for every function call
        console.log(counter);
        return counter;

    }
}) ();

  init();
  add();
  add();
  add();


