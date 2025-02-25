# Scope Chain and Lexical Environment in JavaScript

Understanding **Scope Chain** and **Lexical Environment** is crucial for mastering how JavaScript handles variable access and function execution.

---

## **What is a Lexical Environment?**

A **Lexical Environment** is a data structure that holds:
- **Variables** and their values.
- A reference to the **outer environment** (the parent scope).

Every time a function is called, a new Lexical Environment is created for that function.

---

### **Components of a Lexical Environment**
1. **Environment Record**:
   - Stores variables and functions declared in the current scope.
2. **Reference to Outer Environment**:
   - Points to the Lexical Environment of the parent scope.

---

## **What is a Scope Chain?**

The **Scope Chain** is the sequence of Lexical Environments that JavaScript traverses to find a variable or function. When a variable is accessed, JavaScript:
1. Looks for it in the current Lexical Environment.
2. If not found, it moves to the outer (parent) Lexical Environment.
3. Continues this process until it reaches the **Global Lexical Environment**.

---