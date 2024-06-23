const compra = document.querySelector('#btn-compra');
compra.addEventListener('click', () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu compra ha sido realizada con exito',
        showConfirmButton: false,
        timer: 1500
    })
});


