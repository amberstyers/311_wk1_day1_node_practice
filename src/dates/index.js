// import moment here; use this package in each function
const moment = require("moment");

const today = () => {
  const day = moment().format("dddd");
  console.log("Today is:",day);
  return day;

};

const calendar = () => {
  const date = moment().format("LL");
  console.log("Today's date:", date);
  return date;

};

const currentTime = () => {
  const time = moment().format('hLTS')
  console.log("The time is:", time)
  return time;

};

module.exports = {
  today,
  calendar,
  currentTime
}