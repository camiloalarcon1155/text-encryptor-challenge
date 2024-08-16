console.log(` eres un gran tipo y mereces ser fullStack`);

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


// Función para ajustar la altura del textarea segun el contenido
function autoResize() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}
  

function encriptarTexto() {
    
    if (textoParaEncriptar.value) {

        var textoSinEncriptar = textoParaEncriptar.value;
        arregloDeTexto = textoSinEncriptar.split('');
        console.log(arregloDeTexto);
        
        const textoCambiado = arregloDeTexto.map(function(letra) {
            /* return letra === 'a' ? 'ai' : letra; */
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
        console.log(textoEncriptado);
        console.log(`${textoParaEncriptar.value}`)
        // pMostrarTexto.innerText = textoParaEncriptar.value;
        pMostrarTexto.innerText = textoEncriptado;
        sectionTextoEncriptadoNoEncontrado.classList.add('inactive'); 
        sectionTextoEncriptadoEncontrado.classList.remove('inactive');
        console.log(`${textoParaEncriptar.value} se encuentra en el textarea`);
    } else {
        sectionTextoEncriptadoEncontrado.classList.add('inactive');
        sectionTextoEncriptadoNoEncontrado.classList.remove('inactive');
        console.log(`no hay nada en el textarea`);
    } 
}


function desencriptarTexto() {
    
    if (textoParaEncriptar.value) {

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

        console.log(textoCambiado); 

            console.log(textoCambiado);
            pMostrarTexto.innerText = textoCambiado;
            sectionTextoEncriptadoNoEncontrado.classList.add('inactive'); 
            sectionTextoEncriptadoEncontrado.classList.remove('inactive');
            console.log(`${textoParaEncriptar.value} se encuentra en el textarea`);
    } else {
            sectionTextoEncriptadoEncontrado.classList.add('inactive');
            sectionTextoEncriptadoNoEncontrado.classList.remove('inactive');
            console.log(`no hay nada en el textarea`);
        } 
}


function copiarTextoTratado() {
    var textoParaSerEncriptado = pMostrarTexto.innerText;

    //creamos un textarea para poder guardar el texto de nuestro p y aplicar la funcion de copiado de texto, ya que no se puede aplicar esta funcion para elementos tipo p.
    var textareaTemporal = document.createElement('textarea');
    textareaTemporal.value = textoParaSerEncriptado;
    console.log(`${textarea.value} se copio`)
    textareaTemporal.style.position = "absolute";
    textareaTemporal.style.left = "-9999px";
    document.body.appendChild(textareaTemporal);
    textareaTemporal.select();
    textareaTemporal.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textareaTemporal.value);
    document.body.removeChild(textareaTemporal);
}