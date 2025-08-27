// Declare a function, define using lambda.
const getToday = () => {
  return new Date();
};

// Load a const called today using the function from earlier.
const today = getToday();

// Create array of days of the week.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// Create array of months.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

// Parse the number using switch statement and return the proper suffix.
const getSuffix = (n) => {
  if ([11, 12, 13].includes(n % 100)) return "th";
  switch (n % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
};

const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// Output today's day of the week and formatted date to console.
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// Create a const with the expected graduation date.
const graduationDate = new Date("2025-11-13");

const diff = graduationDate - today; 
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// Output to console how many days are left till graduation.
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");