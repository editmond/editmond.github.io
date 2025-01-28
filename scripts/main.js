const myHeading = document.querySelector("h1");

let isDay = true;
let greeting = "G'day";
let now = new Date();
let hour = now.getHour();
if (hour < 5){
  greeting = "go to sleep!";
}
if (15 < hour && hour < 18){
  greeting = "Good afternoon!";
}
if (18 < hour){
  greeting = "Good evening!";
}
myHeading.textContent = greeting;
// document.querySelector("h1").addEventListener("click", function () {
//   // alert("Ouch! Stop poking me!");
//   isDay = !(isDay);
//   myHeading.textContent = isDay ? "G'day" : "Good Evening";
// });

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
