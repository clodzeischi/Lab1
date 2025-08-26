// Declare a function that accepts one param.
function calculateDaysUntil(eventDate) {
  // Load today's date into a const called today.
  const today = new Date();

  // Convert the passed in param into Date format.
  const event = new Date(eventDate);

  // Load difference between event and today (time to event) into a const called diff.
  const diff = event - today;

  // Divide the diff by # of millis in a day to get number of days (and round up).
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  // Return days.
  return days;
}

// Load user input into a variable.
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// Validate user input to make sure it matches the requested format using REGEX.
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

while (!dateFormat.test(eventDate)) {
  eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// Call the function and load the return into daysRemaining.
const daysRemaining = calculateDaysUntil(eventDate);

// Output to console.
console.log("Days until the event:", daysRemaining);