function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }

const add = (function () {
    let counter = 0;
    console.log(counter);
    return function () {
        counter +=1;
        console.log(counter);
        return counter;

    }
}) ();

  init();
  add();
  add();
  add();


