// Event Listeners Example

// 1. Button Click Event
const clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", function () {
  alert("Button clicked!");
});

// 2. Mouseover Event
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");

box1.addEventListener("mouseover", function () {
  box1.style.backgroundColor = "red";
});

box1.addEventListener("mouseout", function () {
  box1.style.backgroundColor = "lightblue";
});

box2.addEventListener("mouseover", function () {
  box2.style.backgroundColor = "green";
});

box2.addEventListener("mouseout", function () {
  box2.style.backgroundColor = "lightblue";
});

// 3. Form Submit Event
const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  const name = document.getElementById("nameInput").value;
  alert(`Hello, ${name}! Form submitted successfully.`);
});

// 4. Keyboard Event
document.addEventListener("keydown", function (event) {
  const keyOutput = document.getElementById("keyOutput");
  keyOutput.textContent = `You pressed: ${event.key} (Key Code: ${event.code})`;
});