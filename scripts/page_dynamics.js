window.onscroll = function() {
    rotateImg();
}

function rotateImg() {
    let homeBtn = document.getElementById("home");
    homeBtn.style.transform = "rotate(" + window.pageYOffset/8 + "deg)";
}