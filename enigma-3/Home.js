function man() {
    if (window.innerWidth >= 760) {
        var ele = document.getElementById("enigma-man");
        var pos = 0;
        var id = setInterval(frame, 1);

        function frame() {
            if (pos == 510) {
                clearInterval(id);
            } else {
                pos=pos+2;
                ele.style.width = pos + "px";
            }
        }
    }
}