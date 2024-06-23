function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const totalProductos = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.getElementById('contador-productos').textContent = totalProductos;
}








function agregarAlCarrito(id, nombre, autor, precio, imagen, descripcion) {
    // Obtener el carrito actual de localStorage o inicializarlo si no existe
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Crear el nuevo producto
    let producto = {
        id: id,
        nombre: nombre,
        autor: autor,
        precio: parseFloat(precio), // Asegurarse de que el precio sea un número
        imagen: imagen,
        descripcion: descripcion,
        cantidad: 1 // Inicializar cantidad a 1
    };

    // Buscar si el producto ya está en el carrito
    let productoExistente = carrito.find(item => item.id === id);

    if (productoExistente) {
        // Si el producto ya existe, incrementar la cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si el producto no existe, agregarlo al carrito
        carrito.push(producto);
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    actualizarContadorCarrito();
    Swal.fire({
        position: 'center',
        width: '20%',
        icon: 'success',
        title: 'Se agregó al carrito',
        showConfirmButton: false,
        timer: 1500
    });
}


function aumentarCantidad(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let producto = carrito.find(item => item.id === id);
    if (producto) {
        producto.cantidad += 1;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
        actualizarContadorCarrito();
    }
}

function disminuirCantidad(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let producto = carrito.find(item => item.id === id);
    if (producto) {
        producto.cantidad -= 1;
        if (producto.cantidad <= 0) {
            carrito = carrito.filter(item => item.id !== id);
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
        actualizarContadorCarrito();
    }
}





function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let carritoContainer = document.querySelector(".contenedor-carrito");
    carritoContainer.innerHTML = ""; // Limpiar el contenido previo del contenedor
    let total = 0;
    carrito.forEach(element => {
        total += element.precio * element.cantidad;
        let productoElement = document.createElement('div');
        
        productoElement.innerHTML = `
            <div class="row justify-content-around my-5">
                <div class="col-6 text-center">
                    <img src="../assets/${element.imagen}" class="img-book" alt="${element.nombre}">
                </div>
                <div class="col-6">
                    <h2 class="montserrat-title no-cambiar-color">${element.nombre}</h2>
                    <p class="oswald-author no-cambiar-color">Autor: ${element.autor}</p>
                    <p class="price-product d-inline no-cambiar-color">Precio: $${element.precio.toFixed(2)}</p>
                    <p class="no-cambiar-color">Cantidad: ${element.cantidad}</p>
                    <div class="row d-flex justify-content-around ">
                            <button class="btn btn-primary col-2 no-cambiar-color d-flex justify-content-center aling-items-center" onclick="aumentarCantidad('${element.id}')"><span class="fs-4">+</span></button>
                            <button class="btn btn-primary col-2 no-cambiar-color d-flex justify-content-center aling-items-center" onclick="disminuirCantidad('${element.id}')" ><span class="fs-4">-</span></button>
                        </div>
                </div>
            </div>
        `;
       
        carritoContainer.appendChild(productoElement);
    });
    document.getElementById('total-productos').textContent = `Total: $${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito();
    mostrarCarrito();
    
    mostrarLibros();
});