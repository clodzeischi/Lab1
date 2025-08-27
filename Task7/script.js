// Calling lambda, passing into a chained ternary.
const classifyGrade = (grade) => 

  (grade >= 90) ? "A" :
  (grade >= 80) ? "B" :
  (grade >= 70) ? "C" :
  (grade >= 60) ? "D" :
  "F";

// Ask user to input numeric grade.
const input = prompt("Enter a grade (0-100):");

// Cast to number.
const grade = Number(input);

// Validate.
if (Number.isNaN(grade)) {
  console.log("Error: Please enter a valid number.");
} else {
  // Call the earlier function. Output result to console.
  const classification = classifyGrade(grade);
  console.log("The grade classification is:", classification);
}