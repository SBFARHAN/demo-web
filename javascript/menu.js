// ! Toggle Menu Script
const toggle = document.querySelector(".toggle_area");
toggle.addEventListener("click", function () {
    const menu_container = document.querySelector(".menu_container");
    menu_container.classList.toggle("active_menu");
});
//! More Sub menu Enable Disable
const more_li = document.querySelector(".more_li");
more_li.addEventListener("click", function (e) {
    e.preventDefault();
    const sub_menu = document.querySelector(".sub_menu");
    sub_menu.classList.toggle("active_subMenu");
});
//!  Search Bar Enable Disable
const search_icon = document.querySelector(".search_icon");
search_icon.addEventListener("click", function () {
    const search_box = document.querySelector(".search_box");
    search_box.classList.toggle("active_search");
});