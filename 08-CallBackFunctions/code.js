// Callback Functions in JavaScript

// Example 1: Synchronous Callback
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Execute the callback function
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("Alice", sayGoodbye);
  // Output:
  // "Hello, Alice"
  // "Goodbye!"
  
  // Example 2: Asynchronous Callback (using setTimeout)
  function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(function () {
      const data = { id: 1, name: "John Doe" };
      callback(data); // Execute the callback with the fetched data
    }, 2000);
  }
  
  function displayData(data) {
    console.log("Data received:", data);
  }
  
  fetchData(displayData);
  // Output:
  // "Fetching data..."
  // (After 2 seconds) "Data received: { id: 1, name: 'John Doe' }"
  
  /*// Example 3: Callback in Event Handling
  const button = document.createElement("button");
  button.textContent = "Click Me";
  document.body.appendChild(button);
  
  button.addEventListener("click", function () {
    console.log("Button clicked!");
  });
  // Output when button is clicked:
  // "Button clicked!" */
  
  // Example 4: Avoiding Callback Hell
  function step1(callback) {
    setTimeout(function () {
      console.log("Step 1 completed");
      callback();
    }, 1000);
  }
  
  function step2(callback) {
    setTimeout(function () {
      console.log("Step 2 completed");
      callback();
    }, 1000);
  }
  
  function step3() {
    console.log("Step 3 completed");
  }
  
  step1(function () {
    step2(step3);
  });
  // Output:
  // "Step 1 completed" (after 1 second)
  // "Step 2 completed" (after 2 seconds)
  // "Step 3 completed"
