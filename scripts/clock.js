let counts = setInterval(currentTime, 10);
function currentTime(){
  let myCounter = document.getElementById("clock");
  now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();
  myCounter.innerHTML = `${hours}:${minutes}:${seconds}`;
}
