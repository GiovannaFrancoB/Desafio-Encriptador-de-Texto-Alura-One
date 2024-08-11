document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.textarea');
    const botonEncriptar = document.querySelector('.boton_encriptar');
    const botonDesencriptar = document.querySelector('.boton_desencriptar');
    const botonCopiar = document.querySelector('.boton_copiar');
    const contenedorSubtitulo = document.querySelector('.contenedor_subtitulo h3');
    const contenedorParrafo = document.querySelector('.contenedor_parrafo p');

    const encriptar = (texto) => {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    };

    const desencriptar = (texto) => {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    };

    botonEncriptar.addEventListener('click', () => {
        const texto = textarea.value.toLowerCase();
        const textoEncriptado = encriptar(texto);
        contenedorSubtitulo.textContent = 'Texto Encriptado';
        contenedorParrafo.textContent = textoEncriptado;
    });

    botonDesencriptar.addEventListener('click', () => {
        const texto = textarea.value.toLowerCase();
        const textoDesencriptado = desencriptar(texto);
        contenedorSubtitulo.textContent = 'Texto Desencriptado';
        contenedorParrafo.textContent = textoDesencriptado;
    });

    botonCopiar.addEventListener('click', () => {
        const texto = contenedorParrafo.textContent;
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado al portapapeles');
        });
    });
});
















