// Declare array of strings.
let colors = ["red", "blue", "green"];

// Declare a function that accepts one param.
function addColor(colorArray) {
  // Load a const with user input.
  const newColor = prompt("Enter a color to add:");

  // Add the new color to the beginning of the array.
  colorArray.unshift(newColor);

  // Output the entire array into console.
  console.log("Updated colors:", colorArray);
}

// Call the addColor.
addColor(colors);