# Hoisting in JavaScript

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during the **compilation phase**. This means you can use variables and functions before they are declared in the code.

---

## **How Hoisting Works**

### **1. Variable Hoisting**
- Variables declared with `var` are hoisted to the top of their scope.
- However, only the **declaration** is hoisted, not the **initialization**.
- Until the variable is initialized, its value is `undefined`.

**Example:**
```javascript
console.log(name); // Output: undefined (hoisted but not initialized)
var name = "Manoj";
console.log(name); // Output: "Manoj"