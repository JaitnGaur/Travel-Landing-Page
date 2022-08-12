//-------------Header scroll background----------------------
const nav = document.querySelector("header");
function changeBG() {
    let scrollval = window.scrollY;
    if (scrollY > 50) nav.classList.add("header-scroll");
    else if ((scrollY < 50) & (hamopen == false))
        nav.classList.remove("header-scroll");
}
window.addEventListener("scroll", changeBG);
//------------------ham-button----------------------------------
let hambtn = document.querySelector(".ham-button");
let ul = document.querySelector(".nav-list");
let hamopen = false;
hambtn.addEventListener("click", function () {
    if (hamopen == false) {
        hambtn.classList.add("open");
        nav.classList.add("header-scroll");
        ul.classList.add("active");
        hamopen = true;
    } else {
        hambtn.classList.remove("open");
        ul.classList.remove("active");
        hamopen = false;
        if (scrollval == 0) {
            nav.classList.remove("header-scroll");
        }
    }
});
//---------------------video-play-button-------------------
let video = document.querySelector(".video");
let btn = document.querySelector(".play-button");

function toggleplay() {
    if (video.paused) {
        video.play();
        btn.style.display = "none";
        document.querySelector('.video-front-img').style.display = "none";
    } else {
        video.pause();
        btn.style.display = "block";
        btn.classList.remove("none");
    }
}
btn.onclick = function () {
    toggleplay();
};
video.onclick = function () {
    toggleplay();
};