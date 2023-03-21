// VARIABLES ----------------------

const botonFooter = document.querySelector(".button");
const footer = document.querySelector(".footer");

// EVENTOS ----------------------------

botonFooter.addEventListener('click', aparecer);


// FUNCTIONS ------------------------------

function aparecer() {
    console.log("apareciendo");
    footer.classList.toggle("aparecer");  
      
}