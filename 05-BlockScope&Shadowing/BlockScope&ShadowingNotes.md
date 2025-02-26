# Block Scope and Shadowing in JavaScript

In JavaScript, **block scope** and **shadowing** are important concepts that determine how variables behave within different blocks of code.

---

## **What is Block Scope?**
- A **block** is a section of code enclosed in curly braces `{}`.
- Variables declared with `let` and `const` are **block-scoped**, meaning they are only accessible within the block they are declared in.
- Variables declared with `var` are **function-scoped** and not block-scoped.

---

## **What is Shadowing?**
- **Shadowing** occurs when a variable declared in a nested block has the same name as a variable in an outer scope.
- The inner variable "shadows" the outer variable, making the outer variable inaccessible within the inner block.

---