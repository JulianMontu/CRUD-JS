const listarClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};
const eliminarCliente = (id) => {
  console.log("Eliminar ", id);
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};
const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((repuesta) =>
    repuesta.json()
  );
};
const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};
export const clientServices = {
  listarClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente
};
