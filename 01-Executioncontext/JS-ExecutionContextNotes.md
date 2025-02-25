# JavaScript Execution Context

Execution context is a fundamental concept in JavaScript that defines the environment in which your code is executed. It helps you understand how variables, functions, and scopes work.

---

## **What is Execution Context?**

Execution context is like a "workspace" where JavaScript code runs. It contains:
- **Variables** (data).
- **Functions** (actions).
- **Rules** for how the code is executed.

---

## **Types of Execution Context**

There are two types of execution contexts in JavaScript:

### **1. Global Execution Context**
- Created when the script first runs.
- Represents the global scope (the entire file).
- In browsers, the global object is `window`; in Node.js, it’s `global`.

### **2. Function Execution Context**
- Created whenever a function is called.
- Represents the local scope of that function.
- Disappears after the function finishes execution.

---

## **How Execution Context Works**

Execution context is created in **two phases**:

### **1. Creation Phase**
- JavaScript sets up memory space for variables and functions (**hoisting**).
- Variables declared with `var` are initialized with `undefined`.
- Functions are stored entirely in memory.

### **2. Execution Phase**
- JavaScript runs the code line by line.
- Assigns actual values to variables.
- Executes function calls.

---
## **The Call Stack**

The call stack is a mechanism JavaScript uses to keep track of function calls.

### **How the Call Stack Works**
1. When a function is called, a new execution context is created and **pushed** onto the stack.
2. When the function finishes, its execution context is **popped** off the stack.
3. The **global execution context** is always at the bottom of the stack.

---