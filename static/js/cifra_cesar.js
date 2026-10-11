function cifraCesar(texto, deslocamento) {
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const codigo = texto.charCodeAt(i);

        if (codigo >= 65 && codigo <= 90) {
            let novo = (codigo - 65 + deslocamento) % 26;
            if (novo < 0) novo += 26;
            resultado += String.fromCharCode(novo + 65);
        } else if (codigo >= 97 && codigo <= 122) {
            let novo = (codigo - 97 + deslocamento) % 26;
            if (novo < 0) novo += 26;
            resultado += String.fromCharCode(novo + 97);
        } else {
            resultado += texto[i];
        }
    }

    return resultado;
}

document.addEventListener('DOMContentLoaded', function () {
    const mensagemInput = document.getElementById('mensagem');
    const resultadoDiv = document.getElementById('resultado');
    const btnCriptografar = document.getElementById('btnCriptografar');
    const btnDescriptografar = document.getElementById('btnDescriptografar');
    const chave = 3;

    btnCriptografar.addEventListener('click', function () {
        const mensagem = mensagemInput.value;

        if (!mensagem.trim()) {
            alert('Digite uma mensagem!');
            return;
        }

        resultadoDiv.textContent = cifraCesar(mensagem, chave);
        resultadoDiv.classList.add('visible');
    });

    btnDescriptografar.addEventListener('click', function () {
        // Usa o texto já cifrado na tela. Se não houver, usa o campo.
        const origem = resultadoDiv.textContent.trim() || mensagemInput.value;

        if (!origem.trim()) {
            alert('Não há texto para descriptografar.');
            return;
        }

        resultadoDiv.textContent = cifraCesar(origem, -chave);
        resultadoDiv.classList.add('visible');
    });
});