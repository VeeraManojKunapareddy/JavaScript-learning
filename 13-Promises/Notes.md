# Promises in JavaScript

A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner and more structured way to handle asynchronous code compared to callbacks.

---

## **What is a Promise?**
A Promise is in one of these states:
1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

---

## **Why Use Promises?**
1. **Avoid Callback Hell**:
   - Promises provide a cleaner way to handle asynchronous operations compared to nested callbacks.
2. **Chaining**:
   - Promises can be chained to perform multiple asynchronous operations sequentially.
3. **Structured Error Handling**:
   - Promises provide a structured way to handle errors using `.catch`.

---

## **How Promises Work**
A Promise is an object that takes a single function (called the **executor**) as an argument. The executor function has two parameters:
- `resolve`: A function to call when the operation is successful.
- `reject`: A function to call when the operation fails.

---

## **Promise Methods**
1. **`then`**:
   - Attaches a callback to be executed when the Promise is fulfilled.
   - Returns a new Promise, allowing for chaining.

---