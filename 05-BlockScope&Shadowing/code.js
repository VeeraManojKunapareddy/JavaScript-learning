// Example 1: Block Scope with `let`
{
    let x = 10; // `x` is block-scoped
    console.log(x); // Output: 10
  }
  // console.log(x); // ReferenceError: x is not defined (outside the block)
  
  // Example 2: Block Scope with `const`
  {
    const y = 20; // `y` is block-scoped
    console.log(y); // Output: 20
  }
  // console.log(y); // ReferenceError: y is not defined (outside the block)
  
  // Example 3: No Block Scope with `var`
  {
    var z = 30; // `z` is not block-scoped
    console.log(z); // Output: 30
  }
  console.log(z); // Output: 30 (accessible outside the block)
  
  // Example 4: Shadowing
  let a = 100; // Outer variable `a`
  {
    let a = 200; // Inner variable `a` shadows the outer variable
    console.log(a); // Output: 200 (inner `a` takes precedence)
  }
  console.log(a); // Output: 100 (outer `a` is unaffected)
  
  // Example 5: Shadowing with `var`
  var b = 300; // Outer variable `b`
  {
    var b = 400; // Inner variable `b` shadows the outer variable
    console.log(b); // Output: 400 (inner `b` takes precedence)
  }
  console.log(b); // Output: 400 (outer `b` is modified because `var` is function-scoped)