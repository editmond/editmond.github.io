let counts = setInterval(currentTime, 10);
function currentTime(){
  let myCounter = document.getElementById("clock");
  now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();
  hourZero = "";
  minuteZero = "";
  secondZero = "";
  if (hours < 10){
    hourZero = "0";
  }
  if (minutes < 10){
    minuteZero = "0";
  }
  if (seconds < 10){
    secondZero = "0";
  }
  myCounter.innerHTML = `${hourZero}${hours}:${minuteZero}${minutes}:${secondZero}${seconds}`;
}
