document.getElementById('contactForm').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var mensaje = document.getElementById('mensaje');
    var nombreError = document.getElementById('nombreError');
    var emailError = document.getElementById('emailError');
    var mensajeError = document.getElementById('mensajeError');
    var valid = true;
  
    // Validación del campo Nombre
    if (nombre.value.trim() === '') {
      nombreError.textContent = 'Por favor, ingrese su nombre.';
      valid = false;
    } else {
      nombreError.textContent = '';
    }
  
    // Validación del campo Email
    if (email.value.trim() === '') {
      emailError.textContent = 'Por favor, ingrese su correo electrónico.';
      valid = false;
    } else if (!isValidEmail(email.value.trim())) {
      emailError.textContent = 'Por favor, ingrese un correo electrónico válido.';
      valid = false;
    } else {
      emailError.textContent = '';
    }
  
    // Validación del campo Mensaje
    if (mensaje.value.trim() === '') {
      mensajeError.textContent = 'Por favor, ingrese su mensaje.';
      valid = false;
    } else {
      mensajeError.textContent = '';
    }
  
    if (!valid) {
      event.preventDefault(); // Evita que el formulario se envíe si hay errores
    }
  });
  
  // Función para validar el formato de un correo electrónico
  function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

