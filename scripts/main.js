// Time based greetings
const myHeading = document.getElementById("maintitle");
if (myHeading) {
  let greeting = "G'day!";
  let now = new Date();
  let hours = now.getHours();
  // let minutes = now.getMinutes();
  // let seconds = now.getSeconds();
  if (hours < 5){
    greeting = "Go to sleep!";
  }
  if (15 <= hours && hours < 18){
    greeting = "Good afternoon!";
  }
  if (18 <= hours){
    greeting = "Good evening!";
  }
  myHeading.textContent = greeting;
}
// click image easter egg
const pfpImage = document.querySelector("img");
pfpImage.addEventListener("click", () => {
  const mySrc = pfpImage.getAttribute("src");
  if (mySrc === "images/e_letter.png"){
    pfpImage.setAttribute("src", "images/pfp.png");
  } 
  else{
    pfpImage.setAttribute("src", "images/e_letter.png");
  }
});

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

function showFootnote(footnoteObject, footnoteText){
  footnoteObject.innerHTML = footnoteText;
}

function hideFootnote(footnoteObject, footnoteMarker){
  footnoteObject.innerHTML = footnoteMarker;
}
