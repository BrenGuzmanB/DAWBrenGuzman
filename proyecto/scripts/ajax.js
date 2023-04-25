function actualizarHora() {
    // Crear un objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();
    
    // Definir la función que se ejecutará cuando se reciba una respuesta del servidor
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Actualizar el contenido del elemento con id "hora" con la hora recibida del servidor
        document.getElementById("hora").innerHTML = this.responseText;
      }
    };
    
    // Enviar una solicitud GET al servidor para obtener la hora actual
    xhr.open("GET", "obtener_hora.php", true);
    xhr.send();
  }