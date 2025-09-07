let arr = [1, 2, 3];
arr.push(4);   
arr.pop();    
arr.unshift(0);
arr.shift();  
console.log(arr); 

let nums = [10, 20, 30, 40];
let newArr = nums.concat([50, 60]); 
let sliced = nums.slice(1, 3); 
nums.splice(1, 2, 99, 100); 

let fruits = ["apple", "banana", "cherry", "banana"];

console.log(fruits.indexOf("banana")); 
console.log(fruits.lastIndexOf("banana"));
console.log(fruits.includes("cherry")); 

let found = fruits.find(f => f.startsWith("b"));
let foundIndex = fruits.findIndex(f => f.startsWith("c"));

let colors = ["red", "green", "blue"];
console.log(colors.join(" - "));
console.log(colors.toString());  

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(n => console.log(n * 2));
let squares = numbers.map(n => n ** 2);
let evens = numbers.filter(n => n % 2 === 0);
let total = numbers.reduce((a, b) => a + b, 0);
let hasEven = numbers.some(n => n % 2 === 0);
let allPositive = numbers.every(n => n > 0);

let letters = ["d", "a", "c", "b"];
letters.sort();  
letters.reverse(); 
