const number = [1, 2, 3, 4];

let sum = number.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(sum);

let average = sum / number.length;

console.log(average);
