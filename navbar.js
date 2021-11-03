const menuButton = document.querySelector(".hamburger");
const menuBug = document.querySelector("#menuBug");
const menuBugF = document.querySelector("#menuBugF");
const menuBugP = document.querySelector("#menuBugP");
const menuBugC = document.querySelector("#menuBugC");
const inicio = document.querySelector(".menu-items");
const menu = document.querySelector(".menu");
const html = document;

menuButton.addEventListener("click", () => {
  menu.classList.toggle("show");
  $('html,body').css('overflow', 'hidden');
});
inicio.addEventListener("click", () => {
  menu.classList.remove("show");
});
menuBug.addEventListener("click", () => {
  menu.classList.remove("show");
});
menuBugF.addEventListener("click", () => {
  menu.classList.remove("show");
});
menuBugP.addEventListener("click", () => {
  menu.classList.remove("show");
});
menuBugC.addEventListener("click", () => {
  menu.classList.remove("show");
});

