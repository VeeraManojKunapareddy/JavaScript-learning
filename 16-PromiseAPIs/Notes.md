# Promise APIs in JavaScript

The `Promise` object in JavaScript provides several utility methods to handle multiple Promises or specific use cases. These methods make it easier to work with asynchronous operations in a structured way.

---

## **1. `Promise.all`**
- **Purpose**: Waits for **all** Promises in an iterable to resolve.
- **Behavior**:
  - Resolves with an array of results when all Promises resolve.
  - Rejects immediately if **any** Promise rejects.
- **Use Case**: When you need all Promises to succeed before proceeding.

---

## **2. `Promise.allSettled`**
- **Purpose**: Waits for **all** Promises in an iterable to settle (resolve or reject).
- **Behavior**:
  - Resolves with an array of objects describing the outcome of each Promise.
  - Each object has a `status` property (`"fulfilled"` or `"rejected"`) and either a `value` (if resolved) or a `reason` (if rejected).
  - Never rejects.
- **Use Case**: When you want to know the outcome of all Promises, regardless of success or failure.

---

## **3. `Promise.race`**
- **Purpose**: Waits for the **first** Promise in an iterable to settle (resolve or reject).
- **Behavior**:
  - Resolves or rejects with the value or reason of the first settled Promise.
- **Use Case**: When you need the result of the fastest Promise.

---

## **4. `Promise.any`**
- **Purpose**: Waits for the **first** Promise in an iterable to resolve.
- **Behavior**:
  - Resolves with the value of the first resolved Promise.
  - Rejects only if **all** Promises reject, with an `AggregateError` containing all rejection reasons.
- **Use Case**: When you need the result of the first successful Promise.

---