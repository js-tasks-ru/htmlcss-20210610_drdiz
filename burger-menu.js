document.getElementById('burger-menu-open').addEventListener("input", burger)
let f = 0;

function burger() {
    f = f + 1;
    if (f % 2 != 0) {
        document.getElementById('header__mobile-nav').style.visibility = 'visible';
        document.getElementById('header__mobile-nav').style.opacity = 1;
    } else {
        document.getElementById('header__mobile-nav').style.visibility = 'hidden';
        document.getElementById('header__mobile-nav').style.opacity = 0;
    }
}