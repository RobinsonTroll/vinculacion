document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('form');

form.addEventListener('submit', function(event){
event.preventDefault();

const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');


if (email === "" || password === "") {
alert('Por favor, complete todos los campos.');
return false; // Envía el formulario

} else {
alert('¡Campos inválidos! Realizar acciones adicionales...');
}

// Función para validar el correo electrónico
function validateEmail(email) {
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
return emailRegex.test(email);
}
// Función para validar la contraseña
function validatePassword(password) {
return password.length >= 8;
}
if (!termsCheckbox.checked) {
    showError('Debe aceptar los términos y condiciones.');
    return;
}
console.log("Inicio de sesión exitoso.");
});
});