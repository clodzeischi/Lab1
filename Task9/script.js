// Create a function that doesn't take any params.
const getWeekday = () => {
  // Get today's date.
  const today = new Date();

  // Get today's day of the week.
  const dayNumber = today.getDay();

  // Create array for days of the week.
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Return member of the array based on today's dayNumber.
  return days[dayNumber];
};

// Output to console.
console.log("Today is:", getWeekday());