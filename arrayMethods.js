// 1. concat
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(array1.concat(array2)); // [1, 2, 3, 4, 5, 6]

// 2. every
const allPositive = [1, 2, 3].every(num => num > 0);
console.log(allPositive); // true

// 3. fill
const filledArray = [1, 2, 3].fill(0);
console.log(filledArray); // [0, 0, 0]

// 4. find
const found = [1, 2, 3, 4, 5].find(num => num > 3);
console.log(found); // 4

// 5. findIndex
const foundIndex = [1, 2, 3, 4, 5].findIndex(num => num > 3);
console.log(foundIndex); // 3

// 6. flat
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6]

// 7. includes
const includesThree = [1, 2, 3, 4, 5].includes(3);
console.log(includesThree); // true

// 8. indexOf
const indexOfThree = [1, 2, 3, 4, 5].indexOf(3);
console.log(indexOfThree); // 2

// 9. join
const joinedArray = ['Hello', 'World'].join(' ');
console.log(joinedArray); // "Hello World"

// 10. lastIndexOf
const lastIndex = [1, 2, 3, 2, 1].lastIndexOf(2);
console.log(lastIndex); // 3

// 11. pop
const fruits = ['apple', 'banana', 'orange'];
const lastFruit = fruits.pop();
console.log(lastFruit); // "orange"
console.log(fruits); // ["apple", "banana"]

// 12. push
fruits.push('grape');
console.log(fruits); // ["apple", "banana", "grape"]

// 13. reverse
const reversedArray = [1, 2, 3].reverse();
console.log(reversedArray); // [3, 2, 1]

// 14. unshift
fruits.unshift('mango');
console.log(fruits); // ["mango", "apple", "banana", "grape"]

// 15. shift
const firstFruit = fruits.shift();
console.log(firstFruit); // "mango"
console.log(fruits); // ["apple", "banana", "grape"]

// 16. slice
const slicedArray = [1, 2, 3, 4, 5].slice(1, 4);
console.log(slicedArray); // [2, 3, 4]

// 17. some
const hasNegative = [1, 2, 3, -4, 5].some(num => num < 0);
console.log(hasNegative); // true

// 19. sort
const sortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5].sort((a, b) => a - b);
console.log(sortedArray); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// 20. splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

// 21. toString
const arrayToString = [1, 2, 3].toString();
console.log(arrayToString); // "1,2,3"

// 22. filter
const filteredArray = [1, 2, 3, 4, 5].filter(num => num % 2 === 0);
console.log(filteredArray); // [2, 4]

// 23. reduce
const sum = [1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// 24. map
const doubledArray = [1, 2, 3].map(num => num * 2);
console.log(doubledArray); // [2, 4, 6]

// 25. forEach
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); // Logs: 2, 4, 6