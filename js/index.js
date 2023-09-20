const navH = document.querySelector(".gnb_menu_wrap");
const head = document.querySelector("header");
navH.addEventListener('mouseenter', () => {
  // alert("hover");
  head.classList.add('active');
})
head.addEventListener('mouseleave', () => {
  // alert("hover");
  head.classList.remove('active');
})