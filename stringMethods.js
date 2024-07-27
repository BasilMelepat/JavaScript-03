// 1. concat
let str1 = "Hello";
let str2 = "Mom";
console.log(str1.concat(" ", str2)); // Output: "Hello Mom"

// 2. includes
let sentence = "Welcome to the new world";
console.log(sentence.includes("world")); // Output: true

// 3. indexOf
console.log(sentence.indexOf("world")); // Output: 4

// 4. lastIndexOf
console.log(sentence.lastIndexOf("the")); // Output: 31

// 5. padEnd
let str3 = "5";
console.log(str3.padEnd(3, "0")); // Output: "500"

// 6. padStart
let str4 = "5";
console.log(str4.padStart(3, "0")); // Output: "005"

// 7. repeat
let str5 = "Ha";
console.log(str5.repeat(3)); // Output: "HaHaHa"

// 8. replace
let str6 = "Hello World";
console.log(str6.replace("World", "Mom")); // Output: "Hello Mom"

// 9. search
console.log(sentence.search("world")); // Output: 19 

// 10. slice
console.log(sentence.slice(8, 15)); // Output: "to the"

// 11 split
console.log(sentence.split(" ")); // Output: [ "Welcome", "to", "the", "new", "world" ]

// 12. startsWith
console.log(sentence.startsWith("new")); // Output: true

// 13. substr
console.log(sentence.substr(8, 10)); // Output: "to the new"

// 14. substring
console.log(sentence.substring(8, 10)); // Output: "to"

// 15. toLowerCase
let str7 = "HELLO MOM";
console.log(str7.toLowerCase()); // Output: "hello mom"

// 16. toUpperCase
let str8 = "hello mom";
console.log(str8.toUpperCase()); // Output: "HELLO MOM"

// 17. trim
let str9 = "   Hello World   ";
console.log(str9.trim()); // Output: "Hello World"

// 18. trimEnd (or trimRight)
console.log(str9.trimEnd()); // Output: "   Hello World"

// 19. trimStart (or trimLeft)
console.log(str9.trimStart()); // Output: "Hello World   "

// 20. charAt
console.log(sentence.charAt(0)); // Output: "W"

// 21. charCodeAt
console.log(sentence.charCodeAt(0)); // Output: 87