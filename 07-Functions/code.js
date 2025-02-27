// 1. Function Statement (Function Declaration)
function greet(name) {
    console.log("Hello, " + name);
  }
  greet("Friends"); // Output: "Hello, Friends"
  
  // 2. Function Expression
  const greetExpression = function (name) {
    console.log("Hello, " + name);
  };
  greetExpression("Everyone"); // Output: "Hello, Everyone"
  
  // 3. Anonymous Function
  setTimeout(function () {
    console.log("This is an anonymous function");
  }, 1000);
  
  // 4. Named Function Expression
  const greetNamedExpression = function sayHello(name) {
    console.log("Hello, " + name);
    if (name === "Friends") {
      sayHello("Everyone"); // Recursive call
    }
  };
  greetNamedExpression("Friends"); // Output: "Hello, Friends" followed by "Hello, Everyone"
  
  // 5. First-Class Functions
  // Assigning a function to a variable
  const greetFirstClass = function (name) {
    return "Hello, " + name;
  };
  
  // Passing a function as an argument
  function greetUser(greetFunction, name) {
    console.log(greetFunction(name));
  }
  greetUser(greetFirstClass, "Friends"); // Output: "Hello, Friends"
  
  // Returning a function from another function
  function createGreeting() {
    return function (name) {
      return "Hello, " + name;
    };
  }
  const greetingFunction = createGreeting();
  console.log(greetingFunction("Everyone")); // Output: "Hello, Everyone"