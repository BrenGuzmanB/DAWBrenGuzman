var nav = document.getElementById('main-nav');
var menu = document.getElementById('menu');

menu.addEventListener('click', function() {   //abre el menu desplegable
  if (nav.classList.contains('menu-open')) {
    nav.classList.remove('menu-open');
  } else {
    nav.classList.add('menu-open');
  }
});

document.addEventListener('click', function(event) {    //cierra el menu si se da clic en otro lado de la pantalla
  if (!nav.contains(event.target) && !menu.contains(event.target)) {
    nav.classList.remove('menu-open');
  }
});
