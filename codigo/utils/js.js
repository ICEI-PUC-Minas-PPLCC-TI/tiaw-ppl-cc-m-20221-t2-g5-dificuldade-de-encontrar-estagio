const IUrl = "../C-Estagiario/index.html"
const IIUrl = "../C-Estagiario/C-EstagiarioII/index.html"
const IIIUrl = "../C-Estagiario/C-EstagiarioIII/index.html"
const IVUrl = "../C-Estagiario/C-EstagiarioIV/index.html"

var iframe = document.getElementById("iframe");
var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
elmnt.style.display = "none";

var count = 0

goOn(true)

function goOn(firstView) {
    if (firstView) {
        count = 0
    } else {
        count++
    }
    console.log(count)
    switch (count) {
        case 0:
            iframe.src = IUrl;
            break
        case 1:
            iframe.src = IIUrl;
            break
        case 2:
            iframe.src = IIIUrl;
            break
        case 3:
            iframe.src = IVUrl
            break
    }
    if (count > 3) {
        console.log("fim do fluxo")
    }
}