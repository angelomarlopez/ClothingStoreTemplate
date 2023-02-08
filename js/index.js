let currentTab = document.querySelector(".current");

currentTab.addEventListener("click", () => {
  currentTab.querySelector(".hidden-content").classList.toggle("open");
});

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  document.querySelector(".side-bar").classList.toggle("show");
  // document.querySelector(".main").classList.toggle("idle");
});

let closeIcon = document.querySelector(".close");
closeIcon.addEventListener("click", () => {
  document.querySelector(".side-bar").classList.toggle("show");
  // document.querySelector(".main").classList.toggle("idle");
});