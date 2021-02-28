const menu = document.getElementById("menuWrapper");
const navigation = document.getElementById("navigation");
const mobileMenuButton = document.getElementById("menuButton");
const navLink = document.querySelectorAll(".navigation li")

document.addEventListener("scroll", () => {
    menu.classList.add("scrolled");
})

let menuFlag = false;

const openCloseMenu = () => {
    if(menuFlag){
        navigation.classList.add("openNavigation");
        menu.classList.add("openWrapper");
    }
    else{
        navigation.classList.remove("openNavigation");
        menu.classList.remove("openWrapper");
    }
}



mobileMenuButton.addEventListener("click", () => {
    menuFlag = !menuFlag;
    openCloseMenu()

});

[...navLink].forEach(el => el.addEventListener("click", () => {
    menuFlag = false;
    openCloseMenu()
}))