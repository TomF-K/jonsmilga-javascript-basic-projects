const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// target giveaway
const giveaway = document.querySelector(".giveaway");
// target deadline
const deadline = document.querySelector(".deadline");
// target all h4 (hours/days etc)
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 11, 31, 23, 59, 59);

// easy values to get

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// harder values to access

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

// update year, hours, and mins in HTML

giveaway.textContent = `giveaway ends on ${date} ${month} ${year} ${hours}:${minutes}`;
