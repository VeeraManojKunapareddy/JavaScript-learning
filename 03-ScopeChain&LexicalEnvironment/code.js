let a = 10;

function first() {
 let b = 20;

  function second() {
    let c = 30;
    console.log(a + b + c); // Access a, b, and c
  }

  second();
}

first();


/*
Explanation:

second() has access to its own variables (c), as well as variables from first() (b) and the global scope (a).

The Scope Chain for second() is:

second() → first() → Global.
*/