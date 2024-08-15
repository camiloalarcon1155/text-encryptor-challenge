console.log(` eres un gran tipo y mereces ser fullStack`);

const textarea = document.getElementById('textoIngresado');
const btnEncriptar = document.querySelector('.buttonEncriptar');
const textoParaEncriptar = document.querySelector('.textoParaEncriptar');
const pMostrarTexto = document.querySelector('.pMostrarTextoTratado');
const sectionTextoEncriptadoNoEncontrado = document.querySelector('.sectionTextoEncriptado');
const sectionTextoEncriptadoEncontrado = document.querySelector('.sectionMostrarTextoEncriptado');



// Evento de input para ajustar la altura cuando el usuario escribe
textarea.addEventListener('input', autoResize);
btnEncriptar.addEventListener('click', encriptarTexto)










// Función para ajustar la altura del textarea
function autoResize() {
    textarea.style.height = 'auto'; // Restablecer la altura para calcular la nueva altura
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajustar la altura según el contenido
}

/* function activarMensajeEncriptado() {
    var cosa = textoParaEncriptar.value;
   if (cosa) {
        sectionTextoEncriptadoNoEncontrado.classList.add('inactive'); 
       sectionTextoEncriptadoEncontrado.classList.remove('inactive');
        console.log(`${textoParaEncriptar.value}SI hay valor en el texa`);
    } else {
        sectionTextoEncriptadoEncontrado.classList.add('inactive');
       sectionTextoEncriptadoNoEncontrado.classList.remove('inactive');
       console.log('no hay valor en el texa');
    } 
}

activarMensajeEncriptado() */

    
function encriptarTexto() {
    
     
    if (textoParaEncriptar.value) {
        console.log(`${textoParaEncriptar.value}`)
        pMostrarTexto.innerText = textoParaEncriptar.value;
        sectionTextoEncriptadoNoEncontrado.classList.add('inactive'); 
        sectionTextoEncriptadoEncontrado.classList.remove('inactive');
        console.log(`${textoParaEncriptar.value} se encuentra en el textarea`);
    } else {
        sectionTextoEncriptadoEncontrado.classList.add('inactive');
        sectionTextoEncriptadoNoEncontrado.classList.remove('inactive');
        console.log(`no hay nada en el textarea`);
    } 
    
}

