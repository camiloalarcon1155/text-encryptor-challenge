const textarea = document.getElementById('textoIngresado');
const btnEncriptar = document.querySelector('.buttonEncriptar');
const btnDesencriptar = document.querySelector('.buttonDesencriptar');
const textoParaEncriptar = document.querySelector('.textoParaEncriptar');
const pMostrarTexto = document.querySelector('.pMostrarTextoTratado');
const sectionTextoEncriptadoNoEncontrado = document.querySelector('.sectionTextoEncriptado');
const sectionTextoEncriptadoEncontrado = document.querySelector('.sectionMostrarTextoEncriptado');
const btnCopiarTextoTratado = document.querySelector('.buttonCopiarTexto');


// Evento de input para ajustar la altura cuando el usuario escribe
textarea.addEventListener('input', autoResize);
btnEncriptar.addEventListener('click', encriptarTexto);
btnDesencriptar.addEventListener('click', desencriptarTexto);
btnCopiarTextoTratado.addEventListener('click', copiarTextoTratado)
textarea.addEventListener('input', function() {
    ValidarTexto(this);
});

//Funcion para admitir solamente letras minusculas o espacios, si no borra elemento mal escrito y crea un alert
function ValidarTexto(textarea) {
    const isTextoValido = textarea.value.match(/^[a-z\s]*$/);

    if (!isTextoValido) {
        alert('solo minusculas y espacios');
        textarea.value = textarea.value.slice(0, -1);
    } 
}


// Función para ajustar la altura del textarea segun el contenido
function autoResize() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}
  

function encriptarTexto() {
    const isTextoValido = textarea.value.match(/^[a-z\s]*$/);
    if (textoParaEncriptar.value && isTextoValido) {

        var textoSinEncriptar = textoParaEncriptar.value;
        arregloDeTexto = textoSinEncriptar.split('');
        const textoCambiado = arregloDeTexto.map(function(letra) {
        
                if (letra === 'a') {
                    return 'ai';
                } else if (letra === 'e') {
                    return 'enter';
                } else if (letra === 'i') {
                    return 'imes';
                } else if (letra === 'o') {
                    return 'ober';
                } else if (letra === 'u') {
                    return 'ufat';
                } else {
                    return letra;
                }
        });

        const textoEncriptado = textoCambiado.join('');
        pMostrarTexto.innerText = textoEncriptado;
        sectionTextoEncriptadoNoEncontrado.classList.add('inactive'); 
        sectionTextoEncriptadoEncontrado.classList.remove('inactive');

    } else {
        alert('solo minusculas con espacios');
        sectionTextoEncriptadoEncontrado.classList.add('inactive');
        sectionTextoEncriptadoNoEncontrado.classList.remove('inactive');
    } 
}


function desencriptarTexto() {
    const isTextoValido = textarea.value.match(/^[a-z\s]*$/);
    if (textoParaEncriptar.value && isTextoValido) {

        let textoParaTratar = textoParaEncriptar.value;

        const reemplazos = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };

        let textoCambiado = textoParaTratar;

        for (let [clave, valor] of Object.entries(reemplazos)) {
            textoCambiado = textoCambiado.replaceAll(clave, valor);
        }
            pMostrarTexto.innerText = textoCambiado;
            sectionTextoEncriptadoNoEncontrado.classList.add('inactive'); 
            sectionTextoEncriptadoEncontrado.classList.remove('inactive');
            
    } else {
            alert('solo minusculas con espacios');
            sectionTextoEncriptadoEncontrado.classList.add('inactive');
            sectionTextoEncriptadoNoEncontrado.classList.remove('inactive');
        } 
}


function copiarTextoTratado() {
    var textoParaSerEncriptado = pMostrarTexto.innerText;

    //creamos un textarea para poder guardar el texto de nuestro p y aplicar la funcion de copiado de texto, ya que no se puede aplicar este metodo para elementos tipo p.
    var textareaTemporal = document.createElement('textarea');
    textareaTemporal.value = textoParaSerEncriptado;
    textareaTemporal.style.position = "absolute";
    textareaTemporal.style.left = "-9999px";
    document.body.appendChild(textareaTemporal);
    textareaTemporal.select();
    textareaTemporal.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textareaTemporal.value);
    document.body.removeChild(textareaTemporal);
}


