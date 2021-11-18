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
  if (nintendoClick < 3) {
    audioCoin.currentTime = 0;
    audioCoin.play();
    nintendoClick++;
    console.log("coin");
  } else if (nintendoClick < 6) {
    audio1Up.currentTime = 0;
    audio1Up.play();
    console.log("1up");
    nintendoClick++;
  } else {
    return;
  }
}
