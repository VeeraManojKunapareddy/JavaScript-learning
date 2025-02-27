# Closures and Garbage Collection in JavaScript

Closures and garbage collection are fundamental concepts in JavaScript that help manage memory and scope in your programs.

---

## **What is a Closure?**
A **closure** is a function that retains access to its lexical scope (the environment in which it was created) even after the outer function has finished executing. This allows the inner function to "remember" and access variables from the outer function.

---

### **How Closures Work**
1. An outer function defines a variable.
2. An inner function is defined inside the outer function and references the outer variable.
3. The inner function is returned or passed to another function, preserving its access to the outer variable.

---

### **Key Points About Closures**
1. **Memory Efficiency**:
   - Closures allow functions to retain access to variables without needing to redefine them.
2. **Data Encapsulation**:
   - Closures can be used to create private variables and methods.
3. **Common Use Cases**:
   - Callback functions, event handlers, and module patterns.

---

## **What is Garbage Collection?**
Garbage collection is the process by which JavaScript automatically frees up memory by removing unused objects and variables. JavaScript uses a **mark-and-sweep** algorithm to identify and clean up unreachable memory.

---

### **How Garbage Collection Works**
1. **Mark**: The garbage collector marks all reachable objects (those still in use).
2. **Sweep**: It removes all unmarked (unreachable) objects.
3. **Memory Reclamation**: The freed memory is returned to the system.

---