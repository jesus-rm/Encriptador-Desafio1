const textoIngresado = document.getElementById('texto');
const resultado = document.getElementById('resultado');
const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');
const botonCopiar = document.getElementById('copiar');
const sinResultado = document.getElementById('sinResultado');
const conResultado = document.getElementById('conResultado');


/* Función para validar entrada:
   - Sin mayúsculas
   - Sin acentos
   - Evitando cadenas vacías (espacios y saltos de línea) */

function validarEntrada() {
    const regexAcentos = /[áéíóúÁÉÍÓÚ]/;
    const regexMayusculas = /[A-Z]/;
    const entrada = textoIngresado.value.trim();

    if (regexAcentos.test(entrada) || regexMayusculas.test(entrada) || entrada.length === 0)
        return false;

    return true;
}

/* Función para mostrar la sección donde se imprime el resultado */
function mostrarSeccion() {
    sinResultado.classList.add('d-none');
    conResultado.classList.remove('d-none');
}

/* Función para ocultar la sección del resultado y mostrar otra en su lugar */
function ocultarSeccion() {
    sinResultado.classList.remove('d-none');
    conResultado.classList.add('d-none');
}

// Función para encriptar el texto
function encriptarTexto() {

    if (validarEntrada()) {

        const texto = textoIngresado.value;
        let textoEncriptado = '';

        const llaves = {
            e: 'enter',
            i: 'imes',
            a: 'ai',
            o: 'ober',
            u: 'ufat'
        };

        for (let i = 0; i < texto.length; i++) {
            const letra = texto[i];
            const letraEncriptada = llaves[letra] || letra;
            textoEncriptado += letraEncriptada;
        }

        resultado.value = textoEncriptado; // Asignar el texto encriptado al textarea de resultado
        mostrarSeccion();
        
    }
    else {
        ocultarSeccion();
        alert('El texto ingresado no es válido');
    }

}

// Función para desencriptar el texto
function desencriptarTexto() {
    
    if(validarEntrada()) {
        let textoEncriptado = textoIngresado.value;

        const llaves = {
            enter: 'e',
            imes: 'i',
            ai: 'a',
            ober: 'o',
            ufat: 'u'
        };

        for (const llave in llaves) {
            const valor = llaves[llave];
            textoEncriptado = textoEncriptado.replaceAll(llave, valor);
        }

        resultado.value = textoEncriptado; // Asignar el texto desencriptado al textarea de resultado
        mostrarSeccion();
    
    } else {
        ocultarSeccion();
        alert('El texto ingresado no es válido');
    }

}

function copiar() {
    const texto = resultado.value;
    navigator.clipboard.writeText(texto)
    .then(() => {
        console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
        console.error('Error: ', err);
    });
}

// Asignar el evento de clic al botón "Encriptar"
botonEncriptar.addEventListener('click', encriptarTexto);
// Asignar el evento de clic al botón "Desencriptar"
botonDesencriptar.addEventListener('click', desencriptarTexto);

botonCopiar.addEventListener('click', copiar);