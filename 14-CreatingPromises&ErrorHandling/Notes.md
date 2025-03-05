# Creating Promises and Error Handling in JavaScript

Promises are a powerful way to handle asynchronous operations in JavaScript.

---

## **Creating a Promise**
A Promise is created using the `Promise` constructor, which takes a single function (called the **executor**) as an argument. The executor function has two parameters:
- **`resolve`**: A function to call when the operation is successful.
- **`reject`**: A function to call when the operation fails.

### **Syntax**
```javascript
const promise = new Promise(function (resolve, reject) {
  // Asynchronous operation
  if (/* operation successful */) {
    resolve(value); // Fulfill the Promise
  } else {
    reject(error); // Reject the Promise
  }
});