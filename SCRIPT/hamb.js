/*-------------MENU-------------*/

let boton_abrir = document.getElementById("boton_menu");
let boton_cerrar = document.getElementById("cerrar_menu");
let nav = document.querySelector("nav");

function abrir() {
  boton_cerrar.classList.add("abierto");
  boton_abrir.classList.add("abierto");
  nav.classList.add("abierto");
}

function cerrar() {
  boton_cerrar.classList.remove("abierto");
  boton_abrir.classList.remove("abierto");
  nav.classList.remove("abierto");
}