// Seleccionamos los elementos
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Agregamos un evento al botón para alternar la visibilidad del menú
menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');  // Alterna la clase 'hidden'  
});

function toggleAccordion(section) {
    const content = document.getElementById(`accordion-content-${section}`);
    content.classList.toggle('hidden');
}