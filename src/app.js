// Seleccionamos los elementos
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Agregamos un evento al botón para alternar la visibilidad del menú
dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

// Cierra el menú si haces clic fuera de él
document.addEventListener('click', (e) => {
    if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
    }
});

const darkMode = () => {
    document.documentElement.classList.toggle("dark")
    if (document.documentElement.classList.contains("dark")){
        localStorage.setItem("theme", "dark")
    }else{
        localStorage.setItem("theme", "light")
    }
}

// Colocando el onclick
if  (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark")
}else{
    document.documentElement.classList.remove("dark")
}

// Usando Id de HTML
const btnDarkmode = document.getElementById("btn-darkmode")

btnDarkmode.addEventListener("click", darkMode)
