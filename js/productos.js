function redirectToShop(id, nombre, autor, precio, imagen, descripcion) {
    // Guardar los detalles del producto seleccionado en localStorage
    let productToDisplay = {
        id: id,
        nombre: nombre,
        autor: autor,
        precio: precio,
        imagen: imagen,
        descripcion: descripcion
    };
  
    // Guardar en localStorage para mostrar en shop.html
    localStorage.setItem('productToDisplay', JSON.stringify(productToDisplay));
  }
function displayProductDetails() {
    // Obtener los detalles del producto desde el localStorage (o desde otro origen de datos)
    let producto = JSON.parse(localStorage.getItem('productToDisplay'));
  
  
    // Verificar si hay datos válidos del producto
    if (producto) {
        // Mostrar los detalles del producto en la página shop.html
        document.getElementById('productImage').setAttribute('src', `../assets/${producto.imagen}`);
        document.getElementById('productName').textContent = producto.nombre;
        document.getElementById('productAutor').textContent = producto.autor;
        document.getElementById('productPrice').textContent = `$${producto.precio}`;
        document.getElementById('productDescripcion').textContent = producto.descripcion;
        // Establecer el enlace del producto con su ID
        document.getElementById('productLink').setAttribute('data-id', producto.id);
        document.title = `${producto.nombre} - Libreria El Gitano`;
      } else {
          // Manejar el caso donde no se encuentren datos del producto
          console.error('No se encontraron datos del producto para mostrar.');
      }
  }
// Obtener el botón de "Agregar al carrito"
const addToCartBtn = document.getElementById('addToCartBtn');

// Agregar un listener para el clic
addToCartBtn.addEventListener('click', function() {
    
    //detalles del producto del elemento que se está mostrando
    let id = document.getElementById('productLink').getAttribute('data-id');
    let nombre = document.getElementById('productName').textContent;
    let autor = document.getElementById('productAutor').textContent;
    let precio = parseFloat(document.getElementById('productPrice').textContent.replace('$', ''));
    let imagen = document.getElementById('productImage').getAttribute('src');
    let descripcion = document.getElementById('productDescripcion').textContent;
   
    // Llamar a la función para agregar al carrito con los detalles obtenidos
 agregarAlCarrito(id, nombre, autor, precio, imagen, descripcion);

});




