//$(document).ready(function () { 

    // Select Menu when click users
    // $(document).on("click", ".ul_class li a", function () {
    //     $(this).addClass("active_link").siblings().removeClass("active_link");
    // });


//}); // ready function end

//!Select Menu when click users
const currentLocation = location.href;
const menuItems = document.querySelectorAll(".ul_class li a");
const menuLent = menuItems.length;

for(let i = 0; i < menuLent; i++) { 
    if (menuItems[i].href === currentLocation) { 
        menuItems[i].className = "active_link";
    }
}

// ! Manual Javascript
function navbarSlide() { 
    const toggleMenu = document.querySelector(".toggle_menu");
    const nevUl = document.querySelector(".ul_class");
        toggleMenu.addEventListener("click", function () {
            nevUl.classList.toggle("ul_return");
            toggleMenu.classList.toggle("cross_nav");
    });

}
navbarSlide();