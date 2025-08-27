// Declare an array of objects with properties name and age.
let students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 18 }
];

// Declare a function that passes param into a lambda.
const updateStudentAge = (array) => {
  // Ask for user input, save it to a name variable.
  let studentName = prompt("Enter the student's name to update:");

  // Check to see if a name is already in the array, by bringing test and control names to lower case for a full match.
  let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

  // Throw error on match.
  if (!student) {
    console.log("Error: Student not found.");
    return;
  }

  // Ask user for age.
  let newAge = Number(prompt("Enter the new age:"));

  // Validate.
  if (Number.isNaN(newAge)) {
    console.log("Error: Age must be a number.");
    return;
  }

  // Load it into the object.
  student.age = newAge;

  // Output to console.
  console.log("Updated students:", array);
};

// Call function and pass students array.
updateStudentAge(students);