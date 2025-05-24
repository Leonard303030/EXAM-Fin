// Prompt user to enter 5 names and split into an array
let names = prompt("Enter 5 names separated by commas (e.g., Genevieve,Juan,Luna,Gabriel,Elise)").split(',');

// Prompt user to enter 5 corresponding ages and convert to number array
let ages = prompt("Enter 5 ages separated by commas (e.g., 24,65,21,5,9)").split(',').map(Number);

// Create a new multidimensional array with [name, age] pairs
let pairedArray = names.map((name, index) => [name, ages[index]]);

// Log each name-age pair to the console
pairedArray.forEach(pair => {
  console.log(pair);
});
