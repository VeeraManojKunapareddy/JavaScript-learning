# Map, Filter, and Reduce in JavaScript

`map`, `filter`, and `reduce` are three of the most commonly used array methods in JavaScript. They allow you to manipulate and transform arrays in a declarative and functional way.

---

## **1. `map`**
The `map` method creates a new array by applying a function to each element of the original array.

### **Syntax**
```javascript
const newArray = array.map(function (element, index, array) {
  return transformedElement;
});

---

## **2. `filter`**
The `filter` method creates a new array with all elements that pass a test (provided as a function).

### **Syntax**
```javascript
const newArray = array.filter(function (element, index, array) {
    return condition;
});
```
---

## **3. `reduce`**
The `reduce` method reduces an array to a single value by applying a function to each element and accumulating the result.

### **Syntax**
```javascript
const result = array.reduce(function (accumulator, element, index, array) {
    return updatedAccumulator;
}, initialValue);
```

---

## **When to Use**

- **Use `map`** when you want to transform each element in an array.
- **Use `filter`** when you want to select specific elements from an array.
- **Use `reduce`** when you want to aggregate an array into a single value.
