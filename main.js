const theme = document.querySelector(".theme__image");
const body = document.body;
const header__ul = document.querySelector(".header__ul");
const header__ul__li = document.querySelectorAll(".header__ul__li");
const about__me = document.querySelector(".about__me");
const about__me__intro = document.querySelector(".about__me__intro");
const projects = document.querySelector(".projects");
const project = document.querySelectorAll(".project");
const nintendo = document.querySelector(".nintendo");
const nintendoImgBackgroundColor = document.querySelector(
  ".nintendo-card__project-image"
);
const audioCoin = document.querySelector(".nintendo-audio-coin");
const audio1Up = document.querySelector(".nintendo-audio-1up");
const menuBtn = document.querySelector(".menu-button");
const menuBtnLines = document.querySelector(".menu-button__lines");
const moreAboutMe = Array.from(
  document.querySelector(".more__about__me").children
);
const toolKit = Array.from(document.querySelector(".my__toolkit").children);

theme.addEventListener("click", changeTheme);
nintendo.addEventListener("click", nintendoPlay);
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu-button--open");
  header__ul.classList.toggle("header__ul--open");
});

function changeTheme() {
  body.classList.toggle("body--dodgers");
  header__ul.parentElement.classList.toggle("header__ul--dodgers");
  header__ul.classList.toggle("header__ul--dodgers");
  header__ul__li.forEach((element) =>
    element.classList.toggle("header__ul__li--dodgers")
  );
  menuBtnLines.classList.toggle("menu-button__lines--dodgers");
  about__me.classList.toggle("about__me--dodgers");
  about__me__intro.classList.toggle("about__me__intro--dodgers");
  projects.classList.toggle("projects--dodgers");
  project.forEach((element) => element.classList.toggle("project--dodgers"));
  if (theme.src.includes("images/dodgers-logo.png")) {
    theme.src = "images/lakers-logo.png";
  } else theme.src = "images/dodgers-logo.png";
  nintendo.classList.toggle("nintendo--dodgers");
  moreAboutMe.forEach((item) => {
    item.classList.toggle("color--dodgers-red");
  });
  toolKit.forEach((item) => {
    item.classList.toggle("color--dodgers-red");
  });
  nintendoImgBackgroundColor.classList.toggle(
    "nintendo-card__project-image--dodgers"
  );
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
