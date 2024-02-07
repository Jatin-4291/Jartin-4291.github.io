const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");
const balloons = document.querySelectorAll(".ballon-gif");

yesButton.addEventListener("click", function () {
  console.log("test");
  document.querySelector(".valentine-gif").classList.add("hidden");
  document.querySelector(".header").classList.add("hidden");

  document.querySelector(".love-you").classList.remove("hidden");
  document.querySelector(".header-2").classList.remove("hidden");

  balloons.forEach((balloon) => {
    balloon.classList.remove("hidden");
  });
});

noButton.addEventListener("click", function () {
  console.log("test-2");
  noButton.style.transform = `translate(${Math.random() * 10}vh,${
    Math.random() * 20
  }vh)`;
});
