const menuButton = document.querySelector(".hamburger")
const menuItem = document.querySelector(".menu-items")

const menu = document.querySelector(".menu")
const html = document

menuButton.addEventListener('click', () =>{
    menu.classList.toggle("show");
})
menuItem.addEventListener('click', () =>{
    menu.classList.toggle("show");
})
