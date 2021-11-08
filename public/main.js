function clock() {
  const now = new Date();

  const hour = now.getHours();

  let minute = now.getMinutes();
  if (minute < 10) minute = "0" + minute;

  let second = now.getSeconds();
  if (second < 10) second = "0" + second;

  document.getElementById("clock-text").innerHTML =
    hour + " : " + minute + " : " + second;
}

clock();

setInterval(clock, 1000);
