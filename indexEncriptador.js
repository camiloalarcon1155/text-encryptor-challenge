console.log(` eres un gran tipo y mereces ser fullStack`);

const textarea = document.getElementById('textoIngresado');
const btnEncriptar = document.querySelector('.buttonEncriptar');
const textoParaEncriptar = document.querySelector('#textoIngresado');
const pMostrarTexto = document.querySelector('.pMostrarTextoTratado');

 



// Evento de input para ajustar la altura cuando el usuario escribe
textarea.addEventListener('input', autoResize);
btnEncriptar.addEventListener('click', encriptarTexto)










// Función para ajustar la altura del textarea
function autoResize() {
    textarea.style.height = 'auto'; // Restablecer la altura para calcular la nueva altura
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajustar la altura según el contenido
}


function encriptarTexto() {
    console.log(`${textoParaEncriptar.value}`)
    pMostrarTexto.innerText = textoParaEncriptar.value
}

