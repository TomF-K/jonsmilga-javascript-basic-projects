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

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 11, 25, 23, 59, 59);

// easy values to get
const futureDate = new Date(tempYear, tempMonth,tempDay + 10, 11, 30, 0)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// harder values to access

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

// ADMIRE THIS CONDENSED SYNTAX

let day = weekdays[futureDate.getDay()];

// update year, hours, and mins in HTML

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // computed time values
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  // value of 1d in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let daysRemaining = t / oneDay;
  daysRemaining = Math.floor(daysRemaining);
  let hoursRemaining = Math.floor((t % oneDay) / oneHour);
  let minsRemaining = Math.floor((t % oneHour) / oneMinute);
  let secsRemaining = Math.floor((t % oneMinute) / 1000);

  // set values array
const values = [daysRemaining, hoursRemaining, minsRemaining, secsRemaining];

function format(item){
  if(item < 10){
    return (item = `0${item}`);
  }
  return item;
}

items.forEach(function(item,index) {
  item.innerHTML = values[index];
});
if(t < 0){
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</h4>`
}
}
// countdown
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();
