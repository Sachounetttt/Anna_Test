// Adaptation du code du TP, attribué à Webdevtrick (https://webdevtrick.com).
// Affichage sur 24 heures : la variable non définie 'session' est supprimée.
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s;
    document.getElementById("DigitalCLOCK").textContent = time;
    setTimeout(showTime, 1000);
}

showTime();
