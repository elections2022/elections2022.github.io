var hamburger = document.getElementById("hamburger");
var hideState = 0;
var buttons = document.getElementById("mobile-collapse").children;
hamburger.addEventListener("click",function(){
    hideState++;
    if (hideState == 1) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "block";
        }
    } else {
        hideState = 0;
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.display = "none";
        }
    }
});