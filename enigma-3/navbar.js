window.onscroll = function() {addEnigma()};

function addEnigma() {
    if (window.innerWidth >= 760) {
        if (document.body.scrollTop > 400 * window.devicePixelRatio || document.documentElement.scrollTop > 400 * window.devicePixelRatio) {
            document.getElementById("enigma-on-nav").style.display = "block";
        } else {
            document.getElementById("enigma-on-nav").style.display = "none";
        }
    }
}