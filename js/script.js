let libros = [];

// Función para quitar acentos de una cadena de texto
function quitarAcentos(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Función para mostrar los libros destacados (primeros 6 libros)
function mostrarLibrosDestacados(libros) {
  let contenedor = document.querySelector('#libros-destacados');
  contenedor.innerHTML = ''; // Limpiar el contenedor

  // Tomar solo los primeros 6 libros como destacados
  const librosDestacados = libros.slice(0, 6);

  librosDestacados.forEach(libro => {
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

// Función para mostrar la sección de todos los libros
function cargarLibros() {
  fetch('libros.json')
      .then(response => response.json())
      .then(data => {
          libros = data; // Guardar los libros en una variable global
          mostrarLibrosDestacados(libros); // Mostrar libros destacados inicialmente
      })
      .catch(error => {
          console.error('Error al cargar los libros:', error);
      });
}

// Función para mostrar la sección de todos los libros
function mostrarTodosLosLibros() {
  // Ocultar toda la sección de destacados (incluye título, descripción y botón)
  document.getElementById('seccion-destacados').style.display = 'none';
  
  // Mostrar la sección de todos los libros
  document.getElementById('todos-los-libros').style.display = 'block';
  
  // Limpiar filtros y mostrar todos los libros
  limpiarTodosFiltros();
  
  // Hacer scroll suave hacia la sección
  document.getElementById('todos-los-libros').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// Función para volver a la vista de destacados
function volverADestacados() {
  // Mostrar toda la sección de destacados
  document.getElementById('seccion-destacados').style.display = 'block';
  
  // Ocultar la sección de todos los libros
  document.getElementById('todos-los-libros').style.display = 'none';
  
  // Hacer scroll suave hacia la sección de destacados
  document.getElementById('seccion-destacados').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// Función para mostrar libros filtrados
function mostrarLibrosFiltrados(librosFiltrados) {
  let contenedor = document.querySelector('#productos');
  contenedor.innerHTML = ''; // Limpiar contenedor antes de agregar libros filtrados

  if (librosFiltrados.length === 0) {
      contenedor.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="bi bi-search display-1 text-muted mb-3"></i>
          <h3 class="text-muted mb-3">No se encontraron libros</h3>
          <p class="text-muted">Prueba ajustando los filtros o términos de búsqueda</p>
          <button class="btn btn-primary" onclick="limpiarTodosFiltros()">
            <i class="bi bi-arrow-clockwise me-2"></i>Limpiar filtros
          </button>
        </div>
      `;
  } else {
      mostrarLibros(librosFiltrados); // Reutilizar la función mostrarLibros
  }
}

// Variables para tracking de filtros activos
let filtrosActivos = {
  genero: null,
  precio: null,
  busqueda: null
};

// Función para actualizar badges de filtros activos
function actualizarFiltrosActivos() {
  const activeFiltersDiv = document.getElementById('active-filters');
  const filterBadgesDiv = document.getElementById('filter-badges');
  
  if (!activeFiltersDiv || !filterBadgesDiv) return;
  
  // Limpiar badges existentes
  filterBadgesDiv.innerHTML = '';
  
  let hayFiltros = false;
  
  // Badge para género
  if (filtrosActivos.genero && filtrosActivos.genero !== 'todos') {
    hayFiltros = true;
    const badge = document.createElement('span');
    badge.className = 'filter-badge me-2';
    badge.innerHTML = `
      <i class="bi bi-tags me-1"></i>
      ${filtrosActivos.genero}
      <button class="remove-filter ms-1" onclick="removerFiltro('genero')">
        <i class="bi bi-x"></i>
      </button>
    `;
    filterBadgesDiv.appendChild(badge);
  }
  
  // Badge para precio
  if (filtrosActivos.precio && filtrosActivos.precio !== 'todos') {
    hayFiltros = true;
    const badge = document.createElement('span');
    badge.className = 'filter-badge me-2';
    let precioTexto = '';
    switch(filtrosActivos.precio) {
      case 'menor-mayor': precioTexto = 'Precio: Menor a Mayor'; break;
      case 'mayor-menor': precioTexto = 'Precio: Mayor a Menor'; break;
      case '1000-10000': precioTexto = '$1,000 - $10,000'; break;
      case '10000-30000': precioTexto = '$10,000 - $30,000'; break;
      case '30000+': precioTexto = 'Más de $30,000'; break;
    }
    badge.innerHTML = `
      <i class="bi bi-currency-dollar me-1"></i>
      ${precioTexto}
      <button class="remove-filter ms-1" onclick="removerFiltro('precio')">
        <i class="bi bi-x"></i>
      </button>
    `;
    filterBadgesDiv.appendChild(badge);
  }
  
  // Badge para búsqueda
  if (filtrosActivos.busqueda) {
    hayFiltros = true;
    const badge = document.createElement('span');
    badge.className = 'filter-badge me-2';
    badge.innerHTML = `
      <i class="bi bi-search me-1"></i>
      "${filtrosActivos.busqueda}"
      <button class="remove-filter ms-1" onclick="removerFiltro('busqueda')">
        <i class="bi bi-x"></i>
      </button>
    `;
    filterBadgesDiv.appendChild(badge);
  }
  
  // Mostrar/ocultar la sección de filtros activos
  activeFiltersDiv.style.display = hayFiltros ? 'block' : 'none';
}

// Función para remover un filtro específico
function removerFiltro(tipoFiltro) {
  switch(tipoFiltro) {
    case 'genero':
      filtrosActivos.genero = null;
      const generoButton = document.getElementById('generoButton');
      if (generoButton) {
        generoButton.innerHTML = '<i class="bi bi-tags me-2"></i>Géneros';
      }
      break;
    case 'precio':
      filtrosActivos.precio = null;
      const precioButton = document.getElementById('dropdownMenuButton');
      if (precioButton) {
        precioButton.innerHTML = '<i class="bi bi-currency-dollar me-2"></i>Precio';
      }
      break;
    case 'busqueda':
      filtrosActivos.busqueda = null;
      const inputBusqueda = document.querySelector('.buscador');
      if (inputBusqueda) {
        inputBusqueda.value = '';
      }
      break;
  }
  
  aplicarFiltros();
  actualizarFiltrosActivos();
}

// Función para limpiar todos los filtros
function limpiarTodosFiltros() {
  filtrosActivos = {
    genero: null,
    precio: null,
    busqueda: null
  };
  
  // Resetear UI
  const generoButton = document.getElementById('generoButton');
  const precioButton = document.getElementById('dropdownMenuButton');
  const inputBusqueda = document.querySelector('.buscador');
  
  if (generoButton) {
    generoButton.innerHTML = '<i class="bi bi-tags me-2"></i>Géneros';
  }
  if (precioButton) {
    precioButton.innerHTML = '<i class="bi bi-currency-dollar me-2"></i>Precio';
  }
  if (inputBusqueda) {
    inputBusqueda.value = '';
  }
  
  // Mostrar todos los libros
  mostrarLibros(libros);
  actualizarFiltrosActivos();
}

// Función para aplicar todos los filtros combinados
function aplicarFiltros() {
  let librosFiltrados = [...libros];
  
  // Filtrar por género
  if (filtrosActivos.genero && filtrosActivos.genero !== 'todos') {
    librosFiltrados = librosFiltrados.filter(libro => 
      libro.genero.toLowerCase() === filtrosActivos.genero.toLowerCase()
    );
  }
  
  // Filtrar por búsqueda
  if (filtrosActivos.busqueda) {
    const valorBusqueda = quitarAcentos(filtrosActivos.busqueda.toLowerCase());
    librosFiltrados = librosFiltrados.filter(libro =>
      quitarAcentos(libro.name).includes(valorBusqueda) || 
      quitarAcentos(libro.autor).includes(valorBusqueda)
    );
  }
  
  // Aplicar filtros de precio
  if (filtrosActivos.precio && filtrosActivos.precio !== 'todos') {
    switch(filtrosActivos.precio) {
      case 'mayor-menor':
        librosFiltrados.sort((a, b) => b.price - a.price);
        break;
      case 'menor-mayor':
        librosFiltrados.sort((a, b) => a.price - b.price);
        break;
      case '1000-10000':
        librosFiltrados = librosFiltrados.filter(libro => 
          libro.price >= 1000 && libro.price <= 10000
        );
        break;
      case '10000-30000':
        librosFiltrados = librosFiltrados.filter(libro => 
          libro.price >= 10000 && libro.price <= 30000
        );
        break;
      case '30000+':
        librosFiltrados = librosFiltrados.filter(libro => libro.price > 30000);
        break;
    }
  }
  
  mostrarLibrosFiltrados(librosFiltrados);
}

// Evento para manejar la búsqueda en tiempo real y navegación
document.addEventListener('DOMContentLoaded', function() {
  cargarLibros();

  // Event listener para el botón "Ver Todos los Libros"
  const btnVerTodos = document.getElementById('ver-todos-libros');
  btnVerTodos.addEventListener('click', mostrarTodosLosLibros);

  // Event listener para el botón "Volver a Destacados"
  const btnVolverDestacados = document.getElementById('volver-destacados');
  btnVolverDestacados.addEventListener('click', volverADestacados);

  // Event listener para limpiar todos los filtros
  const btnClearFilters = document.getElementById('clear-filters');
  if (btnClearFilters) {
    btnClearFilters.addEventListener('click', limpiarTodosFiltros);
  }

  // Event listener para la búsqueda
  const formBusqueda = document.getElementById('searchForm');
  const inputBusqueda = document.querySelector('.buscador');

  formBusqueda.addEventListener('input', function() {
      const valorBusqueda = inputBusqueda.value.trim();
      filtrosActivos.busqueda = valorBusqueda || null;
      aplicarFiltros();
      actualizarFiltrosActivos();
  });

  // Prevenir submit del form de búsqueda
  formBusqueda.addEventListener('submit', function(e) {
      e.preventDefault();
  });

  // Event listeners para los filtros de género
  const dropdownGenero = document.querySelectorAll('[data-genero]');
  const generoButton = document.getElementById('generoButton');

  dropdownGenero.forEach(item => {
      item.addEventListener('click', function(event) {
          event.preventDefault();
          
          const generoSeleccionado = this.getAttribute('data-genero');
          filtrosActivos.genero = generoSeleccionado;
          
          // Actualizar texto del botón
          if (generoButton) {
            if (generoSeleccionado === 'todos') {
                generoButton.innerHTML = '<i class="bi bi-tags me-2"></i>Géneros';
            } else {
                const icon = this.querySelector('i');
                const iconClass = icon ? icon.className : 'bi bi-tags';
                const texto = this.textContent.trim();
                generoButton.innerHTML = `<i class="${iconClass} me-2"></i>${texto}`;
            }
          }
          
          aplicarFiltros();
          actualizarFiltrosActivos();
      });
  });

  // Event listeners para los filtros de precio
  const dropdownPrecios = document.querySelectorAll('[data-precio]');
  const precioButton = document.querySelector('#dropdownMenuButton');

  dropdownPrecios.forEach(item => {
      item.addEventListener('click', function(event) {
          event.preventDefault();
          
          const precioSeleccionado = this.getAttribute('data-precio');
          filtrosActivos.precio = precioSeleccionado;
          
          // Actualizar texto del botón
          if (precioButton) {
            if (precioSeleccionado === 'todos') {
                precioButton.innerHTML = '<i class="bi bi-currency-dollar me-2"></i>Precio';
            } else {
                const icon = this.querySelector('i');
                const iconClass = icon ? icon.className : 'bi bi-currency-dollar';
                const texto = this.textContent.trim();
                precioButton.innerHTML = `<i class="${iconClass} me-2"></i>${texto}`;
            }
          }
          
          aplicarFiltros();
          actualizarFiltrosActivos();
      });
  });
});

AOS.init();