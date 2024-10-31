const showNav = document.querySelector(".main-nav");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");
abrir.addEventListener("click", () => {
  showNav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  showNav.classList.remove("visible");
});
