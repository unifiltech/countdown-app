const input = document.getElementById("date-input");
const output = document.getElementById("output");

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_MONTH = ONE_DAY * 30;
const ONE_YEAR = ONE_MONTH * 12;

function calculateRemainingTime(referenceDate, todayDate) {
  let timeLeft = referenceDate - todayDate;

  let yearsLeft = 0;
  while (timeLeft > ONE_YEAR) {
    yearsLeft++;
    timeLeft -= ONE_YEAR;
  }

  let monthsLeft = 0;
  while (timeLeft > ONE_MONTH) {
    monthsLeft++;
    timeLeft -= ONE_MONTH;
  }

  let daysLeft = 0;
  while (timeLeft > ONE_DAY) {
    daysLeft++;
    timeLeft -= ONE_DAY;
  }

  let hoursLeft = 0;
  while (timeLeft > ONE_HOUR) {
    hoursLeft++;
    timeLeft -= ONE_HOUR;
  }

  let minutesLeft = 0;
  while (timeLeft > ONE_MINUTE) {
    minutesLeft++;
    timeLeft -= ONE_MINUTE;
  }

  let secondsLeft = 0;
  while (timeLeft > ONE_SECOND) {
    secondsLeft++;
    timeLeft -= ONE_SECOND;
  }

  return [yearsLeft, monthsLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft];
}

function textBuilder(years, months, days, hours, minutes, seconds) {
  let result = [];
  if (years) {
    result.push(`${years} ${years > 1 ? "years" : "year"}`);
  }
  if (months) {
    result.push(`${months} ${months > 1 ? "months" : "month"}`);
  }
  if (days) {
    result.push(`${days} ${days > 1 ? "days" : "day"}`);
  }
  if (hours) {
    result.push(`${hours} ${hours > 1 ? "hours" : "hour"}`);
  }
  if (minutes) {
    result.push(`${minutes} ${minutes > 1 ? "minutes" : "minute"}`);
  }
  if (seconds) {
    result.push(`${seconds} ${seconds > 1 ? "seconds" : "second"}`);
  }
  if (!result) {
    return "COMPLETED";
  }
  return result.join(", ");
}

function onInputChange() {
    const [year, month, day] = input.value.split("-");
    const referenceDate = new Date(year, month - 1, day).getTime();
    const todayDate = new Date().getTime();

    let remainingTime = calculateRemainingTime(referenceDate, todayDate)
    let text = textBuilder(...remainingTime)
    output.textContent = text
}

input.addEventListener("change", onInputChange);
