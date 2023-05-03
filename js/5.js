// Obtener los datos de los usuarios del backend
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    // Crear un elemento de lista para cada usuario
    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
    <p>Teléfono: ${user.phone}</p>
    <p>Sitio web: ${user.website}</p>
  `;

      // Agregamos un evento de clic para mostrar la información del usuario
      li.addEventListener("click", () => {
        alert(
          `Nombre: ${user.name}\nEmail: ${user.email}\nTeléfono: ${user.phone}\nSitio web: ${user.website}`
        );
      });

      // Agregar el elemento de lista al listado de usuarios
      document.getElementById("user-list").appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error al obtener los usuarios:", error);
  });
