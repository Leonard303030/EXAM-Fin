// Prompt user for a list of numbers and convert them to an array of numbers
let numbers = prompt("Enter numbers separated by commas (e.g., 24,65,21,5,9,32,42,80,57)").split(',').map(Number);

// Prompt user for a list of names and convert them to an array of strings
let names = prompt("Enter names separated by commas (e.g., Zenvo,Erica,Jordie,Alicia,Redon)").split(',');

// Merge both arrays (numbers and names) into one array
console.log("Merged Array:", [...numbers, ...names]);

// Sort numbers in descending order and display the result
console.log("Sorted Numbers (Descending):", numbers.sort((a, b) => b - a));

// Sort names in alphabetical order and display the result
console.log("Sorted Names (Alphabetically):", names.sort());
