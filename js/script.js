// Función para quitar acentos de una cadena de texto
function quitarAcentos(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Función para mostrar los libros en el contenedor
function mostrarLibros(libros) {
  let contenedor = document.querySelector('#productos');
  contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar los libros

  libros.forEach(libro => {
      let productoHTML = `
          <div data-aos="zoom-in" class="container-product d-flex p-5 col-sm-6 col-md-4 col-xl-3" id="${libro.name}">
              <div class="row justify-content-center">
                  <a class="book-container" href="html/shop.html" onclick="redirectToShop('${libro.id}', '${libro.name}', '${libro.autor}', '${libro.price}', '${libro.imagen}', '${libro.descripcion}')" target="_blank" rel="noreferrer noopener">
                      <div class="book">
                          <img alt="${libro.name}" src="assets/${libro.imagen}">
                      </div>
                  </a>
                  <div class="descripcion-product col-12 mt-4 text-center">
                      <h3 class="title-product montserrat-title">${libro.name}</h3>
                      <h4 class="autor-product oswald-author">${libro.autor}</h4>
                      <div class="d-flex price-btn-product justify-content-around align-items-center">
                          <p class="price-product no-cambiar-color">$${libro.price}</p>
                          <button class="btn-product mx-1 border d-inline addToCartBtn" onclick="agregarAlCarrito('${libro.id}', '${libro.name}', '${libro.autor}', '${libro.price}', '${libro.imagen}', '${libro.descripcion}')">Agregar al carrito</button>
                      </div>
                  </div>
              </div>
          </div>
      `;
      contenedor.innerHTML += productoHTML;
  });
}

// Función para cargar el archivo JSON y mostrar los libros
function cargarLibros() {
  fetch('libros.json')
      .then(response => response.json())
      .then(data => {
          libros = data; // Guardar los libros en una variable global
          mostrarLibros(libros); // Mostrar todos los libros inicialmente
      })
      .catch(error => {
          console.error('Error al cargar los libros:', error);
      });
}

// Función para mostrar libros filtrados
function mostrarLibrosFiltrados(librosFiltrados) {
  let contenedor = document.querySelector('#productos');
  contenedor.innerHTML = ''; // Limpiar contenedor antes de agregar libros filtrados

  if (librosFiltrados.length === 0) {
      contenedor.innerHTML = '<p>No se encontraron libros que coincidan con la búsqueda.</p>';
  } else {
      mostrarLibros(librosFiltrados); // Reutilizar la función mostrarLibros
  }
}

// Evento para manejar la búsqueda en tiempo real
document.addEventListener('DOMContentLoaded', function() {
  cargarLibros();

  const formBusqueda = document.getElementById('searchForm');
  const inputBusqueda = document.querySelector('.buscador');

  formBusqueda.addEventListener('input', function() {
      const valorBusqueda = quitarAcentos(inputBusqueda.value.trim().toLowerCase());

      const librosFiltrados = libros.filter(libro =>
          quitarAcentos(libro.name).includes(valorBusqueda) || quitarAcentos(libro.autor).includes(valorBusqueda)
      );

      mostrarLibrosFiltrados(librosFiltrados);
  });

  // Seleccionar elementos del menú desplegable
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  const dropdownButton = document.querySelector('#dropdownMenuButton');

  //evento de clic a cada elemento del menú desplegable
  dropdownItems.forEach(item => {
      item.addEventListener('click', function(event) {
          event.preventDefault(); // Evitar comportamiento predeterminado del enlace

          const generoSeleccionado = this.getAttribute('data-genero');
          const precioSeleccionado = this.getAttribute('data-precio');

          let librosFiltrados = [];

          if (generoSeleccionado) {
              const genero = generoSeleccionado.toLowerCase();
              librosFiltrados = libros.filter(libro => libro.genero.toLowerCase() === genero);
          } else if (precioSeleccionado) {
              if (precioSeleccionado === 'mayor-menor') {
                  librosFiltrados = [...libros].sort((a, b) => b.price - a.price);
                  dropdownButton.textContent = 'Mayor a Menor';
              } else if (precioSeleccionado === 'menor-mayor') {
                  librosFiltrados = [...libros].sort((a, b) => a.price - b.price);
                  dropdownButton.textContent = 'Menor a Mayor';
              } else if (precioSeleccionado === '10000-30000') {
                  librosFiltrados = libros.filter(libro => libro.price >= 10000 && libro.price <= 30000);
                  dropdownButton.textContent = '10000 - 30000';
              } else if (precioSeleccionado === '1000-10000') {
                  librosFiltrados = libros.filter(libro => libro.price >= 1000 && libro.price <= 10000);
                  dropdownButton.textContent = '1000 - 10000';
              } else if (precioSeleccionado === '30000+') {
                  librosFiltrados = libros.filter(libro => libro.price > 30000);
                  dropdownButton.textContent = '30000+';
              }
          }

          // Mostrar libros filtrados
          mostrarLibrosFiltrados(librosFiltrados);
      });
  });
});

AOS.init();