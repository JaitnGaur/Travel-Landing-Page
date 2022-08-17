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
//---------radio-button checked---------------------------
let radiobtn2 = document.querySelector('#radio-destination');
let radiobtn1 = document.querySelector('#radio-work');
document.querySelector('.destination').addEventListener('click', function () {
    if (radiobtn2.checked == true) {
        radiobtn2.checked = false;
    } else radiobtn2.checked = true;
})
document.querySelector('.work-do').addEventListener('click', function () {
    if (radiobtn1.checked == true) {
        radiobtn1.checked = false;
    } else radiobtn1.checked = true;
})

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