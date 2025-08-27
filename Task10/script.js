// Get date in millis. Use a Lambda to instantiate and return new object of class Date.
const getToday = () => {
    return new Date();
};

// Call the function from above and load the return value into a const called today
const today = getToday();

// Create an array that stores days of the week (strings). Calls a getDay on today object from earlier
// to get an INT, corresponding to the day of the week (millis -> 0-6). Returns member of the array at that index.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// Creates array of months.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Creates year, month, and day consts from the today object from earlier.
const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

// Prases the number through a switch statement to establish the correct suffix for the number.
const getSuffix = (n) => {
    if ([11, 12, 13].includes(n % 100)) return "th";
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

// Formats the date into year, month, day(nd/th etc)
const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// Outputs today and the formatted date to console.
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// Creates a const graduationDate and loads it with a new Date object
const graduationDate = new Date("2025-11-13");

// Finds (and saves) difference between graduation date and today.
const diff = graduationDate - today;
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// Outputs to console.
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");