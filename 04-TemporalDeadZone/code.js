// Example 1: TDZ with `let`
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20; // Variable `y` is declared and initialized here
console.log(y); // Output: 20 (accessible after declaration)

// Example 2: TDZ with `const`
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30; // Variable `z` is declared and initialized here
console.log(z); // Output: 30 (accessible after declaration)

// Example 3: No TDZ with `var`
console.log(a); // Output: undefined (no TDZ for `var`, but it's hoisted and initialized with `undefined`)
var a = 40; // Variable `a` is declared and initialized here
console.log(a); // Output: 40 (accessible after declaration)