
let container = document.getElementById("container");
let a = "0123456789ABCDEF";
function randomColor() {

  let color = "#";

  for (let i = 0; i < 6; i++) {

    color += a[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  container.style.backgroundColor = color;

}
function myFunction() {

  let progressBar = document.querySelector(".progress-bar");

  let progressValue = document.querySelector(".progress-value");

  let button = document.querySelector(".button");

  let progressH = document.getElementById("progressh");
  let wishes = document.getElementById("wishes");


  let progressStartValue = 0,
    progressEndValue = 100,
    speed = 100;

  let progress = setInterval(() => {
    progressStartValue++;
    if (progressStartValue <= progressEndValue) {
      
      progressValue.innerHTML = `${progressStartValue}%`;
      progressBar.style.background = `conic-gradient(green ${progressStartValue * 3.6}deg  ,#ededed 0deg)`;
      progressH.textContent = `${progressStartValue}%`;
      progressH.style.width = `${progressStartValue}%`;
    }
    else {
      clearInterval(progress);
      wishes.style.display = "block";
      container.style.backgroundImage = `url('images/imgc.gif')`;

    }
  }, speed);

  wishes.style.display = "none";
  container.style.backgroundImage = `none`;
  };




















