// Time based greetings
const myHeading = document.querySelector("h1");
let greeting = "G'day!";
let now = new Date();
let hour = now.getHours();
if (hour < 5){
  greeting = "Go to sleep!";
}
if (15 <= hour && hour < 18){
  greeting = "Good afternoon!";
}
if (18 <= hour){
  greeting = "Good evening!";
}
myHeading.textContent = greeting;

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

  
