const baseUrl = window.location.origin
document.addEventListener('DOMContentLoaded', () => {
  const fibObject = document.getElementById('fibObject');
  updateFibonacci(fibObject)
});

async function updateFibonacci(displayObject){
  console.log("asdf")
  num = 0;
  try {
    res = await fetch(baseUrl+"/fibonacci/");
    responseObject = await res.json();
    num = responseObject.num;
  } catch (error) {
    console.error("Failed to fetch fibonacci number: ", error);
  }
  console.log(num)
  displayObject.innerHTML = num;
}
