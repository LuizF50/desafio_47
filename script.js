function decodificarMensagem() {
    const mensagemInput = document.getElementById('mensagem');
    const mensagemAlienigena = mensagemInput.value.toUpperCase();
    const resultadoElement = document.getElementById('resultado');

    if (!mensagemAlienigena) {
        resultadoElement.innerText = 'Por favor, insira uma mensagem.';
        return;
    }

    let mensagemDecodificada = '';

    for (let i = 0; i < mensagemAlienigena.length; i++) {
        const caractere = mensagemAlienigena[i];

        if (caractere === ' ') {
            mensagemDecodificada += ' ';
        } else {
            const codigoAscii = mensagemAlienigena.charCodeAt(i);
            const novoCodigoAscii = (codigoAscii - 65 - 3 + 26) % 26 + 65;
            mensagemDecodificada += String.fromCharCode(novoCodigoAscii);
        }
    }

    resultadoElement.innerText = mensagemDecodificada;
}
