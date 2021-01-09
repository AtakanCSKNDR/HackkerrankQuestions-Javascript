/// Input Hour
let s = "12:40:22PM";

const timeConversion = (s) => {
  let hour = s.slice(0, 2);
  let currentHour = hour == "12" ? "00" : hour;
  if (s.includes("PM")) {
    return s.replace(hour, parseInt(currentHour) + 12).replace("PM", "");
  } else {
    return s.replace(hour, currentHour).replace("AM", "");
  }
};

console.log(timeConversion(s));
