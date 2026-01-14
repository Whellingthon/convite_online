  function copiarPix() {
            // Pega o número do telefone
            const chave = "14998933492"; 
            
            // Copia para a área de transferência
            navigator.clipboard.writeText(chave).then(() => {
                alert("Chave Pix copiada com sucesso! \nAgora é só colar no app do seu banco.");
            }).catch(err => {
                console.error('Erro ao copiar: ', err);
                alert("Não foi possível copiar automaticamente. A chave é: " + chave);
            });
        }