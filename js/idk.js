// copy ip address server
function IPSever() {
    var copyText = document.getElementById("ServerIP");
    copyText.select();
    copyText.setSelectionRange(0, 99999);    // mobile device
    // copyText inside text field
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("Tooltip");
    // tooltip.innerHTML = "Copied: " + copyText.value;  ---- default tooltip value
    tooltip.innerHTML = "Copy thành công:" + copyText.value;
}
function outFunc() {
    var tooltip = document.getElementById("Tooltip");
    tooltip.innerHTML = "Copy to clipboard";
}
// load page
var loadpage;
function myFunction() {
    loadpage = setTimeout(showPage, 1500);
}
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("in-loader").style.display = "block";
}

// MENU RIGHTCLICK
document.onclick = hideMenu;
document.oncontextmenu = rightClick;
function hideMenu() {
    document.getElementById("contextMenu").style.display = "none"
}
function rightClick(e) {
    e.preventDefault();
    if (
        document.getElementById("contextMenu").style.display == "block"
    )
        hideMenu();
    else {
        var menu = document.getElementById("contextMenu")
        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
}


