// Obtener referencia a los elementos del DOM
const contactForm = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const contactButtons = document.querySelectorAll('.pet-card button');

// Agregar un evento de envío al formulario
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores de los campos de entrada
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Validar los campos
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Realizar alguna acción con los datos, como enviar un correo electrónico o guardar en una base de datos
  // Aquí puedes agregar tu lógica personalizada

  // Limpiar los campos del formulario después de enviarlo
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
});

// Agregar evento de clic a los botones de contacto
contactButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Gracias por tu interés. Serás contactado a la brevedad.');
  });
});

