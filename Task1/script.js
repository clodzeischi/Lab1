

// Declare a function with a single argument.
function calculateAge(year) {

  // Create a const and load it with a return from class Date, method getFullYear.
  const currentYear = new Date().getFullYear();

  // Return difference between the current year and the year passed in as argument.
  return currentYear - year;
}

// Open dialog to get user input and load it into a constant 'input'.
const input = prompt("Enter your birth year (e.g., 2004):");

// Cast input to a number.
const birthYear = Number(input);

// Validate input.
if (input === null || Number.isNaN(birthYear)) {
  // Log to console that input is empty or cannot be cast to a number.
  console.log("No valid year provided.");
} else {
  // Call the function from above.
  const age = calculateAge(birthYear);

  // Display in console.
  console.log("Your age is:", age);
}