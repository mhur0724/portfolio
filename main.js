const theme = document.querySelector(".theme__image");
const body = document.body;
const header__ul = document.querySelector(".header__ul");
const header__ul__li = document.querySelectorAll(".header__ul__li");
const intro = document.querySelector(".intro");
const introText = document.querySelector(".intro__text");
const scrollArrow = document.querySelector(".fa-chevron-down");
const projects = document.querySelector(".projects");
const projectImgDiv = document.querySelectorAll(".project__image");
const project = document.querySelectorAll(".project");
const nintendo = document.querySelector(".nintendo");
const audioCoin = document.querySelector(".nintendo-audio-coin");
const audio1Up = document.querySelector(".nintendo-audio-1up");
const menuBtn = document.querySelector(".menu-button");
const menuBtnLines = document.querySelector(".menu-button__lines");
const aboutMe = Array.from(document.querySelector(".about__me").children);
const toolKit = Array.from(document.querySelector(".my__toolkit").children);

theme.addEventListener("click", changeTheme);
nintendo.addEventListener("click", nintendoPlay);
menuBtn.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 600px)").matches) {
    header__ul__li.forEach((item) => {
      item.addEventListener("click", () => {
        header__ul.classList.remove("header__ul--open");
        menuBtn.classList.remove("menu-button--open");
      });
    });
  }

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
  intro.classList.toggle("intro--dodgers");
  introText.classList.toggle("intro__text--dodgers");
  scrollArrow.classList.toggle("color--dodgers-blue");
  projects.classList.toggle("projects--dodgers");
  project.forEach((element) => element.classList.toggle("project--dodgers"));
  if (theme.src.includes("images/dodgers-logo.png")) {
    theme.src = "images/lakers-logo.png";
  } else theme.src = "images/dodgers-logo.png";
  nintendo.classList.toggle("nintendo--dodgers");
  aboutMe.forEach((item) => {
    item.classList.toggle("color--dodgers-red");
  });
  toolKit.forEach((item) => {
    item.classList.toggle("color--dodgers-red");
  });
  projectImgDiv.forEach((item) => {
    item.classList.toggle("project__image--dodgers");
    console.log(item.classList);
  });
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
