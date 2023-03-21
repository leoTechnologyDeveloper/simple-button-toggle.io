// VARIABLES ----------------------

const botonFooter = document.querySelector(".button");
const footer = document.querySelector(".footer");

// EVENTOS ----------------------------

botonFooter.addEventListener('click', aparecer);
botonFooter.addEventListener('click', comprobarEstado);

// FUNCTIONS ------------------------------

function aparecer() {
    console.log("apareciendo");
    footer.classList.toggle("aparecer");  
}

function comprobarEstado() {
    
    if (footer.classList.contains('aparecer')) {
        console.log("El footer esta activo");
        botonFooter.textContent = "Ocultar Footer"
        botonFooter.style.backgroundColor = "red";
        botonFooter.style.color = "white";
       
    } else {
        console.log("No hay Hover");
        botonFooter.textContent = "Aparecer Footer"
        botonFooter.style.backgroundColor = "greenyellow";
        botonFooter.style.color = "black";
    }
}

