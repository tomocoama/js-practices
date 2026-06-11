#!/usr/bin/env node
const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;

const yearIndex = process.argv.indexOf("-y");
if (yearIndex !== -1) {
  year = Number(process.argv[yearIndex + 1]);
}

const monthIndex = process.argv.indexOf("-m");
if (monthIndex !== -1) {
  month = Number(process.argv[monthIndex + 1]);
}

const firstDay = new Date(year, month - 1, 1);
const lastDay = new Date(year, month, 0);

let dates = "";
for (let i = 0; i < firstDay.getDay(); i++) {
  dates += " ".repeat(3);
}
for (let date = 1; date <= lastDay.getDate(); date++) {
  const dayOfWeek = (firstDay.getDay() + date - 1) % 7;
  const isSaturday = dayOfWeek === 6;

  dates += String(date).padStart(2, " ");

  if (date !== lastDay.getDate()) {
    dates += isSaturday ? "\n" : " ";
  }
}

console.log(`      ${month}月 ${year}`);
console.log("日 月 火 水 木 金 土");
console.log(dates);
