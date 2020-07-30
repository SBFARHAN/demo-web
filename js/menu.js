// ! Click Toggle bar than show and hide  menu
const toggle_menu = document.querySelector(".menu_icon");

toggle_menu.addEventListener("click", function () { 
    const div_show = document.querySelector(".menu_div");
    div_show.classList.toggle("active_div");
    console.log("click toggle bar");
});