// Example: Higher-order function that takes a function as an argument
function repeat(operation, num) {
    for (let i = 0; i < num; i++) {
        operation();
    }
}

function sayHello() {
    console.log('Hello!');
}

// Using the higher-order function
repeat(sayHello, 3);
// Output:
// Hello!
// Hello!
// Hello!
