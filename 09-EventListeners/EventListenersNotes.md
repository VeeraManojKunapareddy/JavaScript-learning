# Event Listeners in JavaScript

Event listeners are used to handle user interactions like clicks, mouse movements, keyboard input, and more. They allow you to execute code in response to specific events triggered by the user or the browser.

---

## **What is an Event Listener?**
An **event listener** is a function that waits for a specific event (e.g., a button click) to occur and then executes a block of code in response.

---

## **How Event Listeners Work**
1. **Target Element**:
   - You attach an event listener to a specific HTML element (e.g., a button).
2. **Event Type**:
   - You specify the type of event to listen for (e.g., `click`, `mouseover`, `keydown`).
3. **Callback Function**:
   - You provide a function that will be executed when the event occurs.

---

## **Common Event Types**
- **`click`**: Triggered when an element is clicked.
- **`mouseover`**: Triggered when the mouse pointer moves over an element.
- **`keydown`**: Triggered when a key is pressed.
- **`submit`**: Triggered when a form is submitted.
- **`load`**: Triggered when a page or an image has finished loading.

---

## **Adding Event Listeners**
You can add event listeners using the `addEventListener` method:

### **Syntax**
```javascript
element.addEventListener(eventType, callbackFunction);