const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8]


const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evens); // Output: [2, 4]


const sum = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log(sum); // Output: 10