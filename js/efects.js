


document.addEventListener('DOMContentLoaded', function () {
  var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'));
  var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
    offcanvasEl.addEventListener('hide.bs.offcanvas', function () {
      offcanvasEl.style.transform = 'translateX(-100%)';
    });
    offcanvasEl.addEventListener('show.bs.offcanvas', function () {
      offcanvasEl.style.transform = 'translateX(0%)';
    });
    return new bootstrap.Offcanvas(offcanvasEl);
  });




});


const btn = document.querySelector('#cambiarColorBtn');
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('footer');
const textElements = document.querySelectorAll('.text-light');
const priceElements = document.querySelectorAll('.no-cambiar-color');
const icon = document.querySelector('#icon');
btn.addEventListener('click', function () {

  if (icon.classList.contains('bi-sun-fill')) {
    icon.classList.remove('bi-sun-fill');
    icon.classList.remove('colordelsol');
    icon.classList.add('bi-moon-stars-fill');
    icon.classList.add('text-light')
    icon.classList.add('icon-rotate');
    setTimeout(() => {
      icon.classList.remove('icon-rotate');
    }, 500);
  } else {
    icon.classList.remove('bi-moon-stars-fill');
    icon.classList.add('bi-sun-fill');
    icon.classList.add('colordelsol');
    icon.classList.remove('text-light');
    icon.classList.add('icon-rotate');
    setTimeout(() => {
      icon.classList.remove('icon-rotate');
    }, 500);
  }
  // Alternar entre las clases 'fondo-negro' y 'fondo-blanco' en el body
  document.body.classList.toggle('fondo-negro');

  // Alternar entre las clases 'navegador-oscuro' y 'bg-nav' en el navbar
  if (navbar.classList.contains('navegador-oscuro')) {
    navbar.classList.remove('navegador-oscuro');
    navbar.classList.add('bg-nav');
  } else {
    navbar.classList.remove('bg-nav');
    navbar.classList.add('navegador-oscuro');
  }



  // Alternar entre las clases 'pie-oscuro' y 'bg-nav' en el footer
  if (footer.classList.contains('pie-oscuro')) {
    footer.classList.remove('pie-oscuro');
    footer.classList.add('bg-nav');
  } else {
    footer.classList.remove('bg-nav');
    footer.classList.add('pie-oscuro');
  }

  // Cambiar el color de los textos con la clase 'text-light'
  textElements.forEach(function (element) {
    element.classList.toggle('text-light-oscuro');
  });

  // Asegurar que los elementos con la clase 'no-cambiar-color' mantengan su color original
  priceElements.forEach(function (element) {
    element.classList.remove('text-light-oscuro');
  });
});