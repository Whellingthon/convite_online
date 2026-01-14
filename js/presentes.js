 
        function copiarPix() {
    // Agora pegamos o valor do input oculto
    const chave = document.getElementById('chavePix').value;
    
    // Tenta usar a API moderna de clipboard
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(chave).then(() => {
            // Feedback visual mais agradável (opcional, pode manter o alert se preferir)
            alert("✅ Chave copiada com sucesso!\nÉ só abrir o app do banco e colar.");
        }).catch(err => {
            console.error("Erro ao copiar: ", err);
            prompt("Seu navegador bloqueou a cópia automática. Copie abaixo:", chave);
        });
    } else {
        // Fallback para navegadores antigos ou não seguros (http)
        prompt("Copie a chave Pix abaixo:", chave);
    }
}