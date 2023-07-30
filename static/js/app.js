function typeWriter(elementId, speed) {
    var element = document.getElementById(elementId);
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    var interval = setInterval(function() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
        }, speed);
}

window.onload = function() {
    typeWriter('name', 100);
    setTimeout(function() {
        document.getElementById('lastline').style.visibility = "visible";
        typeWriter('lastline', 50);
    }, 2500);
}


document.body.classList.add('js-loaded');