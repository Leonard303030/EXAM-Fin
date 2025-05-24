// Prompt user to enter the first word
const word1 = prompt("Enter first word (e.g., RACECAR):");

// Prompt user to enter the second word
const word2 = prompt("Enter second word (e.g., RECORDER):");

// Function to check if a word is a palindrome
function isPalindrome(str) {
  // Compare original string with its reversed version
  return str === str.split('').reverse().join('');
}

// Display the original, reversed, and result for the first word
console.log(`Original: ${word1}, Reversed: ${word1.split('').reverse().join('')}, Is Palindrome: ${isPalindrome(word1)}`);

// Display the original, reversed, and result for the second word
console.log(`Original: ${word2}, Reversed: ${word2.split('').reverse().join('')}, Is Palindrome: ${isPalindrome(word2)}`);
