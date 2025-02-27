// Example 1: Basic Closure
function outer() {
    let outerVar = "I'm from outer!";
  
    function inner() {
      console.log(outerVar); // Access outerVar from the outer scope
    }
  
    return inner;
  }
  
  const closureFunc = outer(); // outer() finishes execution, but inner() retains access to outerVar
  closureFunc(); // Output: "I'm from outer!"
  
  // Example 2: Data Encapsulation with Closure
  function createCounter() {
    let count = 0; // Private variable
  
    return {
        increment() {
          count++;
          console.log("Count:", count);
        },
        decrement() {
          count--;
          console.log("Count:", count);
        },
      };
  }
  
  const counter = createCounter();
  counter.increment(); // Output: "Count: 1"
  counter.increment(); // Output: "Count: 2"
  counter.decrement(); // Output: "Count: 1"