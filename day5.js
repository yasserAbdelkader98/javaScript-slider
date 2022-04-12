let nextButton = document.querySelectorAll("#slider button")[0];
let prevButton = document.querySelectorAll("#slider button")[1];
let slideButton = document.querySelectorAll("#slider button")[2];
let stoppedButton = document.querySelectorAll("#slider button")[3];
let myImg = document.querySelector(".fake");
let imgNames = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
];
let index = 0;

nextButton.addEventListener("click", function () {
  if (index == imgNames.length - 1) {
    index = 0;
  }
  index++;
  return myImg.setAttribute("src", imgNames[index]);
});

prevButton.addEventListener("click", function () {
  if (index == 0) {
    index = imgNames.length;
  }
  index--;
  return myImg.setAttribute("src", imgNames[index]);
});

slideButton.addEventListener("click", function () {
  index = 0;
  const mySlide = setInterval(() => {
    if (index == imgNames.length - 1) {
      index = 0;
    }
    index++;
    myImg.setAttribute("src", imgNames[index]);
  }, 1000);
  stoppedButton.addEventListener("click", function () {
    clearInterval(mySlide);
  });
});
