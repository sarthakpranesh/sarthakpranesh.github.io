window.onscroll = function() {addEnigma()};

function addEnigma() {
    if (window.innerWidth >= 760) {
        if (document.body.scrollTop > 400 * window.devicePixelRatio || document.documentElement.scrollTop > 400 * window.devicePixelRatio) {
            document.getElementById("nav-top").classList.add()
        }
    }
    else {
        document.getElementById("nav-top").classList.add(navbar-dark);
        document.getElementById("nav-top").classList.add(bg-dark);
    }
}