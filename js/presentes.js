 
        function copiarPix() {
            const chave = document.getElementById('chavePix').innerText;
            
            // Tenta usar a API moderna de clipboard
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(chave).then(() => {
                    alert("Chave Pix copiada com sucesso!\nÉ só colar no app do banco.");
                }).catch(err => {
                    prompt("Seu navegador bloqueou a cópia automática. Copie abaixo:", chave);
                });
            } else {
                // Fallback para navegadores antigos ou não seguros
                prompt("Copie a chave Pix abaixo:", chave);
            }
        }
    