let jaIniciou = false;

function iniciarMagia() {
    // Evita cliques duplos
    if (jaIniciou) return;
    jaIniciou = true;

    // Pega os elementos do HTML
    const vidLoop = document.getElementById('vid-loop');
    const vidAcao = document.getElementById('vid-acao');
    const textoToque = document.querySelector('.texto-toque');
    const fraseMagica = document.getElementById('frase-magica');
    const musica = document.getElementById('musica');

    console.log("Iniciando a magia...");

    // 1. Esconde o vídeo de loop e o texto de toque
    vidLoop.style.opacity = '0';
    if(textoToque) textoToque.style.opacity = '0'; // O texto some imediatamente
    
    // 2. MOSTRA A NOVA FRASE
    if(fraseMagica) {
        fraseMagica.style.opacity = '1'; // A frase aparece suavemente (definido no CSS)
        // Pequena animação de zoom para dar ênfase
        fraseMagica.style.transform = "translate(-50%, -50%) scale(1.1)";
        fraseMagica.style.transition = "opacity 1.5s ease, transform 3s ease";
    }
    
    // 3. Mostra e toca o vídeo de ação
    vidAcao.style.opacity = '1';
    vidAcao.play().catch(e => console.error("Erro ao tocar vídeo de ação:", e));

    // 4. Tenta tocar a música
    if (musica) {
        musica.volume = 0.5;
        musica.play().catch(e => {
            console.error("Erro na música:", e);
        });
    }

    // 5. Quando o vídeo de ação acabar, abre o convite
    // A frase mágica sumirá junto com o container do vídeo (que recebe opacity 0)
    vidAcao.onended = function() {
        console.log("Vídeo acabou. Abrindo convite.");
        abrirConviteFinal();
    };
}

function abrirConviteFinal() {
    const container = document.getElementById('convite');
    
    // Adiciona a classe CSS que revela o texto e esconde a capa
    container.classList.add('aberto');
    
    // Solta as partículas no fundo
    criarParticulas();
}

function criarParticulas() {
    const container = document.getElementById('convite');
    const cores = ['#FFD700', '#FDB931', '#FFFFFF', '#FFFACD'];

    for(let i=0; i<40; i++) {
        let p = document.createElement('div');
        p.className = 'particula';
        
        const tamanho = Math.random() * 8 + 4 + 'px';
        p.style.width = tamanho;
        p.style.height = tamanho;
        
        p.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        p.style.left = Math.random() * 100 + '%';
        
        const duracao = Math.random() * 7 + 5;
        p.style.animationDuration = duracao + 's';
        
        p.style.animationDelay = '-' + (Math.random() * 10) + 's';
        
        container.appendChild(p);
    }
}

/* =========================================
   NOVO: LÓGICA DO MODAL DE AVISO
   ========================================= */

function abrirAviso() {
    const modal = document.getElementById('modal-aviso');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function fecharAviso(event) {
    const modal = document.getElementById('modal-aviso');
    // Se o evento for nulo (botão fechar) ou o target for o fundo escuro
    if (modal && (!event || event.target.id === 'modal-aviso')) {
        modal.style.display = 'none';
    }
}