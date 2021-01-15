let homeBtn = document.getElementById("home");

window.onscroll = function() {
    rotateImg();
}

function rotateImg() {
    homeBtn.style.transform = "rotate(" + window.pageYOffset/8 + "deg)";
}