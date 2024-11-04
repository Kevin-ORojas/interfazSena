const showNav = document.querySelector(".main-nav");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");
abrir.addEventListener("click", () => {
  showNav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  showNav.classList.remove("visible");
});

// formulario
const form = document.querySelector(".main-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value; // obtengo los usuarios
  const password = document.getElementById("password").value; // obtengo los password

  const validacionForm = (username, password) => {
    if (username === "" || password === "") {
      alert("Por favor, ingrese un nombre de usuario y contraseña");
      return; // salgo de la función si los campos están vacíos
    }

    if (password.length < 7) {
      alert("La contraseña debe tener al menos 7 caracteres");
      return false; // salgo de la función si la contraseña no tiene la longitud adecuada
    }
    return true;
  };
  const isValid = validacionForm(password, username);
  if (isValid) {
    alert("Usuario registrado");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
});
