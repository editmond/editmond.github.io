let counts = setInterval(currentTime, 10);
function currentTime(){
  let myCounter = document.getElementById("clock");
  now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  // seconds = now.getSeconds();
  seconds = 2;
  zero = "";
  if (seconds < 10){
    zero = "0";
  }
  myCounter.innerHTML = `${hours}:${minutes}:${zero}${seconds}`;
}
