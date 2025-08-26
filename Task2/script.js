// Declare a function that accepts three parameters.
function calculateSimpleInterest(principal, rate, time) {
  // self-explanatory.
  return (principal * rate * time) / 100;
}

// User enters the principal.
const principal = Number(prompt("Enter the principal amount:"));

// User enters the interest.
const rate = Number(prompt("Enter the rate of interest:"));

// User enters time.
const time = Number(prompt("Enter the time in years:"));

// Call function, passing the user-provided consts as params.
const interest = calculateSimpleInterest(principal, rate, time);

// Output to console.
console.log("Your simple interest is:", interest);