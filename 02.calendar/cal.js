const year = Number(process.argv[2]);
const month = Number(process.argv[3]);

const firstDay = new Date(year, month - 1, 1);
const lastDay = new Date(year, month, 0);
const weeks = ["日", "月", "火", "水", "木", "金", "土"];
const header = `${month}月 ${year}`;
const dateWidth = 3;
const calendarWidth = dateWidth * 7 - 1;
const spaces = Math.floor((calendarWidth - header.length) / 2);

let dates = "";
for (let i = 0; i < firstDay.getDay(); i++) {
  dates += " ".repeat(dateWidth);
}
for (let date = 1; date <= lastDay.getDate(); date++) {
  dates += `${String(date).padStart(2, " ")} `;
  if ((firstDay.getDay() + date) % 7 === 0) {
    dates += "\n";
  }
}

console.log(`${" ".repeat(spaces)}${header}`);
console.log(weeks.join(" "));
console.log(dates);
