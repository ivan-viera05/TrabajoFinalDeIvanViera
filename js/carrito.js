function agregarAlCarrito() {
    // Obtener los detalles del producto actualmente mostrado
    let id = document.getElementById('productLink').getAttribute('data-id');
    let nombre = document.getElementById('productName').textContent;
    let autor = document.getElementById('productAutor').textContent;
    let precio = document.getElementById('productPrice').textContent.replace('$', ''); // Quitar el símbolo de $
    let imagen = document.getElementById('productImage').getAttribute('src');
    let descripcion = document.getElementById('productDescripcion').textContent;

    // Crear un objeto con los detalles del producto
    let producto = {
        id: id,
        nombre: nombre,
        autor: autor,
        precio: parseFloat(precio), // Convertir a número
        imagen: imagen,
        descripcion: descripcion,
        cantidad: 1 // Puedes agregar más propiedades según sea necesario
    };

    // Obtener el array de productos del localStorage o inicializarlo si está vacío
    let productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    

    // Verificar si el producto ya está en el carrito (usando el ID como identificador único)
    let productoExistente = productosEnCarrito.find(item => item.id === producto.id);

    if (productoExistente) {
        // Si el producto ya existe, aumentar la cantidad
        productoExistente.cantidad++;
    } else {
        // Si el producto no está en el carrito, agregarlo
        productosEnCarrito.push(producto);
    }

    // Guardar el array actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(productosEnCarrito));

    // Mostrar un mensaje de confirmación (opcional)
    alert(`El producto "${nombre}" se agregó al carrito.`);

    // Opcional: Redirigir a la página del carrito o actualizar la interfaz de usuario
    // window.location.href = 'ruta-a-la-pagina-del-carrito.html';
    
}
function mostrarCarrito() {
    // Obtener los productos del carrito desde el localStorage
    let productosEnCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Mostrar los productos en la consola
    console.log("Productos en el carrito:", productosEnCarrito);
  }
  mostrarCarrito();