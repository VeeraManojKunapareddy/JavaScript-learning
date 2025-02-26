# Temporal Dead Zone (TDZ) in JavaScript

The **Temporal Dead Zone (TDZ)** is a behavior in JavaScript that occurs with variables declared using `let` and `const`. It refers to the time between the start of a block scope and the point where the variable is declared. During this time, accessing the variable results in a **ReferenceError**.

---

## **What is the Temporal Dead Zone?**
- Variables declared with `let` and `const` are hoisted but not initialized.
- They enter the TDZ from the start of the block until the declaration is encountered.
- Accessing the variable in the TDZ throws an error.

---

## **How TDZ Works**
1. **Hoisting**: Variables declared with `let` and `const` are hoisted to the top of their block scope.
2. **TDZ**: The variable is in the TDZ from the start of the block until the declaration is reached.
3. **Initialization**: The variable is initialized when the declaration is executed.

---