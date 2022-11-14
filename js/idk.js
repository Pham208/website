// string
var myVar;
// copy ip address server
function copy(text) {
    document.body.insertAdjacentHTML("beforeend", "<div id=\"copy\" contenteditable>" + text + "</div>")
    document.getElementById("copy").focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
    document.getElementById("copy").remove();
    console.log('copy thành công');
}
// load page
function myFunction() {
    myVar = setTimeout(showPage, 1500);
}
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
// clock
setInterval(myTimer, 0);
function myTimer() {
    const d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
// DISABLE RIGHTCLICK, CTRL + U
document.onkeydown = function (e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117))
        return false;
};
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);