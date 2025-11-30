const openBtn = document.getElementById("openModalBtn");
const backdrop = document.getElementById("modalBackdrop");
const closeBtn = document.querySelector("#closeModalBackdrop");

const openMobileBtn = document.getElementById("openMobileMenu");
const menuMobile = document.getElementById("mobileWindow");
const closeMobileBtn = document.querySelector("#closeMobileWindow");

openBtn.addEventListener("click", () => {
  backdrop.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});

openMobileBtn.addEventListener("click", () => {
  menuMobile.classList.add("is-open");
  console.log(menuMobile);
});

closeMobileBtn.addEventListener("click", () => {
  menuMobile.classList.remove("is-open");
});
