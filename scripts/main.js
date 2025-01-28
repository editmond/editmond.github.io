const myHeading = document.querySelector("h1");

let isDay = true
document.querySelector("h1").addEventListener("click", function () {
  // alert("Ouch! Stop poking me!");
  isDay = !(isDay);
  myHeading.textContent = isDay ? "G'day" : "Good Evening";
});

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
