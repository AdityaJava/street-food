function handleClick() {
    console.log("Menu icon clicked");
    document.getElementById("mobile-sidebar-id").style.width = "150px";
}

function handleClose() {
    document.getElementById("mobile-sidebar-id").style.width = "0px";
}

document.getElementById("mobile-menu-button").addEventListener("click", handleClick)
document.getElementById("mobile-menu-cross").addEventListener("click", handleClose)