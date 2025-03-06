# Async/Await in JavaScript

`async/await` is a modern syntax for working with Promises in JavaScript. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.

---

## **What is `async/await`?**
- **`async`**: A keyword used to declare an asynchronous function. It automatically returns a Promise.
- **`await`**: A keyword used to pause the execution of an `async` function until a Promise is resolved.

---

## **Why Use `async/await`?**
1. **Cleaner Code**:
   - `async/await` eliminates the need for chaining `.then` and `.catch`, making code easier to read.
2. **Error Handling**:
   - Errors can be handled using `try...catch`, similar to synchronous code.
3. **Sequential Execution**:
   - `await` ensures that asynchronous operations are executed in sequence.

---

## **How `async/await` Works**
1. **`async` Functions**:
   - An `async` function always returns a Promise. If the function returns a value, the Promise is resolved with that value. If the function throws an error, the Promise is rejected.

2. **`await` Keyword**:
   - The `await` keyword pauses the execution of the `async` function until the Promise is resolved.
   - It can only be used inside an `async` function.

---