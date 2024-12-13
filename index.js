

//1)  Write a for loop using javascript and it will show only even numbers between 1 - 20. Ex: 2, 4, 6, 8, 10 ,12, 14, 16, 18, 20
let result = [];
for (let i = 2; i <= 20; i += 2) {
    result.push(i);
}
console.log(result.join(", ")); //Output=2, 4, 6, 8, 10, 12, 14, 16, 18, 20


//2)  Write a function reverseString(str) that takes a string and returns it reversed. Ex: reverseString("hello"); // Output: "olleh"
function reverseString(str) {
    return str.split("").reverse().join("");
}
// Example usage:
console.log(reverseString("hello")); // Output: "olleh"


//3) Write a function removeDuplicates(arr) that takes an array and returns a new array with only unique values (duplicates removed).
// Ex: removeDuplicates([5, 5, 5, 6, 7]); // Output: [5, 6, 7]

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
// Example usage:
console.log(removeDuplicates([5, 5, 5, 6, 7])); // Output: [5, 6, 7]


//4) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U)
// in the string. It should filter vowels from the string.
// Ex: countVowels(“Your Name”) // Output: 4

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    return [...str].filter(char => vowels.includes(char)).length;
}
// Example usage:
console.log(countVowels("Your Name")); // Output: 4
