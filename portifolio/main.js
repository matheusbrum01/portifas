const cursor = document.querySelector("#ponto-cursor-id");
const cursor2 = document.querySelector("#borda-cursor-id");
window.addEventListener("mousemove", function (e) {
    var posX = e.clientX;
    var posY = e.clientY;

    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";

    cursor2.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});
window.addEventListener("click", function () {
    cursor2.animate({
        width: "20px",
        height: "20px"
    }, { duration: 250, direction: "alternate" });
});

var btnDarkMode = document.querySelector("#Dark-Mode-Btn");
var verificarDark = false;
btnDarkMode.addEventListener("click", function () {
    const dark = document.body;
    const darkButtom = document.body.querySelector('#Dark-Span');

    dark.classList.toggle('Dark-Mode');

    if (verificarDark == false) {
        verificarDark = true;
        darkButtom.innerHTML = "light_mode";
    } else if (verificarDark == true) {
        verificarDark = false;
        darkButtom.innerHTML = "dark_mode";
    }
});