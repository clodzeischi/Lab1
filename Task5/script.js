// Declare a function with one param.
function classifyTemperature(celsius) {
  // Convert param from C to F.
  const fahrenheit = (celsius * (9 / 5)) + 32;

  // Run the result through some checks to return a String.
  if (fahrenheit > 100) {
    return "Hot";
  } else if (fahrenheit > 80) {
    return "Warm";
  } else if (fahrenheit < 40) {
    return "Cold";
  } else {
    return "Chilly";
  }
}

// Ask user to input C.
const input = prompt("Enter temperature in Celsius:");

// Cast to a number.
const celsius = Number(input);

// Validate.
if (Number.isNaN(celsius)) {
  console.log("Error: Please enter a valid number.");
} else {
  // Call the conversion function.
  const classification = classifyTemperature(celsius);

  // Output to console.
  console.log("The temperature is:", classification);
}