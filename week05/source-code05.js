/* • Write a function addProperty(obj, key, value) that adds a new
property to an object and returns the updated object.
• Output
• console.log(addProperty({ name: 'John' }, 'age', 25))
// { name: 'John', age: 25 }
• console.log(addProperty({}, 'city', 'New York’))
// { city: 'New York' } */
function addProperty(obj, key, value) {
  obj[key] = value; 
  return obj; 
}

console.log(addProperty({ name: 'John' }, 'age', 25));
console.log(addProperty({}, 'city', 'New York'));

/* • Write a function mergeObject(obj1, obj2) and return merges two
objects.
• Output
• console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))
//{ name: 'John', age: 25, city: 'New York' }
• console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }))
//{ name: 'Jane', age: 30, country: 'USA' }*/
function mergeObject(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }));
console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }));


/* Write a function getFreqOfWords(sentence) that returns an object with keys representing
unique words in lowercase and values representing the frequency of occurrences of each
word with ignore case in the sentence. If the input string is null or undefined, return
undefined.
• Output
• console.log(getFreqOfWords('Today is present and present is your gift'))
//{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
• console.log(getFreqOfWords('Do you best just do it’))
//{ do: 2, you: 1, best: 1, just: 1, it: 1 }
• console.log(getFreqOfWords(null)) //undefined
• console.log(getFreqOfWords(undefined)) //undefined */
function getFreqOfWords(sentence) {
  if (sentence === null || sentence === undefined) {
    return undefined;
  }

  let words = sentence.toLowerCase().split(" ");
  let freq = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    freq[word] = (freq[word] || 0) + 1;
  }

  return freq;
}
console.log(getFreqOfWords('Today is present and present is your gift'));
console.log(getFreqOfWords('Do you best just do it'));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined));

/* • Write a function mergeObject(obj1, obj2) and return merges two objects. • Output • console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' })) //{ name: 'John', age: 25, city: 'New York' } • console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' })) //{ name: 'Jane', age: 30, country: 'USA' } */
function mergeObject(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }));
console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }));

/* Write a function mergeAndDestructure(obj1, obj2) that merges two
objects using the spread operator, and then destructures the merged
object to extract specific properties. Return an object with the extracted
properties.
• Output
• console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }))
// { name: 'John', age: 25 }
• console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }))
// { name: 'Jane', age: 30 } */
function mergeAndDestructure(obj1, obj2) {
  const merged = { ...obj1, ...obj2 };
  const { name, age } = merged;
  return { name, age };
}
console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }));
console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }));

/* Write a function findValue(arr) that takes an array of numbers and
returns an object with the following properties:
• min: the minimum value in the array
• max: the maximum value in the array
• sum: the sum of all the values in the array
• avg: the average of all the values in the array
For example, given the array [1, 2, 3, 4, 5], the function should return:
{ min: 1, max: 5, sum: 15, avg: 3 } */
function findValue(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = sum / arr.length;
  return { min, max, sum, avg };
}
console.log(findValue([1, 2, 3, 4, 5]));
console.log(findValue([10, 20, 30]));

/*Write a function removeFalsyValues(arr) that takes an array and
returns a new array with all falsy values removed. Falsy values include
0, empty string, false, null, and undefined.
Sample Outputs
• removeFalsyValues([0, 1, false, 2, '', 3]) // [1, 2, 3]
• removeFalsyValues(['a', '', 'b', null, 'c']) // ['a', 'b', 'c’]
• removeFalsyValues([null, undefined, 'A']) // ['A']*/
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, '', 3]));
console.log(removeFalsyValues(['a', '', 'b', null, 'c']));
console.log(removeFalsyValues([null, undefined, 'A']));

/* • Write a function processNumbers(arr) that takes an array of
numbers, squares each number, filters out the even numbers, and
returns the sum of the remaining numbers.
• Sample Outputs
• processNumbers([1, 2, 3, 4]) // 10 (1^2 + 3^2)
• processNumbers([5, 6, 7, 8]) // 74 (5^2 + 7^2) */
function processNumbers(arr) {
  return arr
    .map(n => n ** 2)
    .filter(n => n % 2 !== 0)
    .reduce((a, b) => a + b, 0);
}
console.log(processNumbers([1, 2, 3, 4]));
console.log(processNumbers([5, 6, 7, 8]));
