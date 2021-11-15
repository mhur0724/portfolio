let theme = document.querySelector('.theme');
let body = document.body;
let header__ul = document.querySelector('.header__ul');
let header__ul__li = document.querySelectorAll('.header__ul__li');
let about__me = document.querySelector('.about__me');
let about__me__intro = document.querySelector('.about__me__intro');
let projects = document.querySelector('.projects');
let project = document.querySelectorAll('.project');



theme.addEventListener('click', changeTheme);


function changeTheme() {
    body.classList.toggle('body--dodgers');
    header__ul.classList.toggle('header__ul--dodgers');
    header__ul__li.forEach((element => element.classList.toggle('header__ul__li--dodgers')));
    about__me.classList.toggle('about__me--dodgers');
    about__me__intro.classList.toggle('about__me__intro--dodgers');
    projects.classList.toggle('projects--dodgers');
    project.forEach((element => element.classList.toggle('project--dodgers')));
    if (theme.src.includes('dodgers-logo.png')) {
        theme.src = "lakers-logo.png"
    } else theme.src = "dodgers-logo.png"
}

