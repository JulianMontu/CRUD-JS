import { clientServices } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  if (id == null) {
    window.location.href = "/screens/error.html";
  }
  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");
  console.log(nombre, " ", email);
  clientServices.detalleCliente(id).then((pefil) => {
    nombre.value = pefil.nombre;
    email.value = pefil.email;
  });
};

obtenerInformacion();
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices.actualizarCliente(nombre, email, id).then(() => {
    window.location.href = "/screens/edicion_concluida.html";
  });
});
