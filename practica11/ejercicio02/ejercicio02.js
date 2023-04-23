//AMPLIAR IMAGEN
const imagenes = document.querySelectorAll('.imagen');
const imagenAmpliadaContainer = document.getElementById('imagen-ampliada-container');
imagenAmpliadaContainer.style.display = 'none';

imagenes.forEach((imagen) => {
  imagen.addEventListener('mouseover', () => {
    const src = imagen.getAttribute('src');
    const imagenAmpliada = document.createElement('img');
    imagenAmpliada.setAttribute('src', src);

    imagenAmpliadaContainer.appendChild(imagenAmpliada);
    imagenAmpliadaContainer.style.display = 'block';
  });

  imagen.addEventListener('mouseout', () => {
    imagenAmpliadaContainer.style.display = 'none';
    imagenAmpliadaContainer.innerHTML = '';
  });
});

//FILTRAR POR GENERO
const filtro = document.querySelector("#filtro");
const filtrarBtn = document.querySelector("#filtrar");
const tabla = document.querySelector("table tbody");

filtrarBtn.addEventListener("click", () => {
  const valorFiltro = filtro.value;
  const filas = tabla.querySelectorAll("tr");
  event.preventDefault();
  for (let i = 0; i < filas.length; i++) {
    const fila = filas[i];
    const genero = fila.cells[5].textContent;

    if (valorFiltro == 0) {
      fila.style.display = ""; // mostrar todas las filas si no se ha seleccionado un filtro
    } else if (genero == filtro.options[valorFiltro].text) {
      fila.style.display = ""; // mostrar la fila si cumple con el filtro
    } else {
      fila.style.display = "none"; // ocultar la fila si no cumple con el filtro
    }
  }
});

//EDITAR
const ventana = document.querySelector('#ventanaEditar');
const fondo = document.querySelector('#fondo');
const btnCerrar = document.querySelector('.close');
btnCerrar.addEventListener('click', () => {
  // Ocultar la ventana emergente y el fondo negro
  ventana.classList.add('oculto');
  fondo.classList.add('oculto');
});

const botonesEditar = document.querySelectorAll('.pintura button');

botonesEditar.forEach(boton => {
  boton.addEventListener('click', mostrarVentanaEditar);
});
function mostrarVentanaEditar(evento) {
  event.preventDefault();
  document.getElementById('fondo').classList.remove('oculto');
  document.getElementById('ventanaEditar').classList.remove('oculto');

  // Obtén la fila del botón de editar presionado
  const fila = evento.target.closest('tr');

  // Obtén los datos de la pintura
  const imagen = fila.querySelector('img').getAttribute('src');
  const titulo = fila.querySelector('em').textContent;
  const autor = fila.querySelectorAll('td')[3].textContent;
  const year = fila.querySelectorAll('td')[4].textContent;
  const genero = fila.querySelector('.genero').textContent;

  // Rellena las cajas de texto con los datos de la pintura
  document.getElementById('input-imagen').setAttribute('src', imagen);
  document.getElementById('input-titulo').setAttribute('value', titulo);
  document.getElementById('input-autor').setAttribute('value', autor);
  document.getElementById('input-year').setAttribute('value', year);
  document.getElementById('input-genero').setAttribute('value', genero);
}








