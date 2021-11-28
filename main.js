let theme = document.querySelector(".theme");
let body = document.body;
let header__ul = document.querySelector(".header__ul");
let header__ul__li = document.querySelectorAll(".header__ul__li");
let about__me = document.querySelector(".about__me");
let about__me__intro = document.querySelector(".about__me__intro");
let projects = document.querySelector(".projects");
let project = document.querySelectorAll(".project");
let nintendo = document.querySelector(".nintendo");
let audioCoin = document.querySelector(".nintendo-audio-coin");
let audio1Up = document.querySelector(".nintendo-audio-1up");

theme.addEventListener("click", changeTheme);
nintendo.addEventListener("click", nintendoPlay);

function changeTheme() {
  body.classList.toggle("body--dodgers");
  header__ul.classList.toggle("header__ul--dodgers");
  header__ul__li.forEach((element) =>
    element.classList.toggle("header__ul__li--dodgers")
  );
  about__me.classList.toggle("about__me--dodgers");
  about__me__intro.classList.toggle("about__me__intro--dodgers");
  projects.classList.toggle("projects--dodgers");
  project.forEach((element) => element.classList.toggle("project--dodgers"));
  if (theme.src.includes("images/dodgers-logo.png")) {
    theme.src = "images/lakers-logo.png";
  } else theme.src = "images/dodgers-logo.png";
  nintendo.classList.toggle("nintendo--dodgers");
}

let nintendoClick = 0;

function nintendoPlay() {
  audioCoin.currentTime = 0;
  audioCoin.play();
}

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    console.log(newIndex);
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
