// js/index.js

let jaIniciou = false;

function iniciarMagia() {
    // Evita cliques duplos
    if (jaIniciou) return;
    jaIniciou = true;

    // Pega os elementos do HTML
    const vidLoop = document.getElementById('vid-loop');
    const vidAcao = document.getElementById('vid-acao');
    const texto = document.querySelector('.texto-toque');
    const musica = document.getElementById('musica'); // <--- Importante!

    console.log("Iniciando a magia...");

    // 1. Esconde o vídeo de loop e o texto
    vidLoop.style.opacity = '0';
    if(texto) texto.style.opacity = '0';
    
    // 2. Mostra e toca o vídeo de ação
    vidAcao.style.opacity = '1';
    vidAcao.play().catch(e => console.error("Erro ao tocar vídeo de ação:", e));

    // 3. Tenta tocar a música
    if (musica) {
        musica.volume = 0.5; // Volume em 50%
        musica.play()
            .then(() => console.log("Música tocando!"))
            .catch(e => {
                console.error("Erro na música:", e);
                // Dica: Se der erro aqui, verifique o nome do arquivo na pasta IMG
            });
    }

    // 4. Quando o vídeo de ação acabar, abre o convite
    vidAcao.onended = function() {
        console.log("Vídeo acabou. Abrindo convite.");
        abrirConviteFinal();
    };
}

function abrirConviteFinal() {
    const container = document.getElementById('convite');
    
    // Adiciona a classe CSS que revela o texto
    container.classList.add('aberto');
    
    // Solta as partículas
    criarParticulas();
}

function criarParticulas() {
    const container = document.getElementById('convite');
    const cores = ['#FFD700', '#FDB931', '#FFFFFF', '#FFFACD'];

    // Reduzi para 40 para não pesar, já que elas nunca somem
    for(let i=0; i<40; i++) {
        let p = document.createElement('div');
        p.className = 'particula';
        
        // Tamanho variado
        const tamanho = Math.random() * 8 + 4 + 'px';
        p.style.width = tamanho;
        p.style.height = tamanho;
        
        p.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        p.style.left = Math.random() * 100 + '%';
        
        // Duração: Algumas sobem rápido (5s), outras devagar (12s)
        const duracao = Math.random() * 7 + 5;
        p.style.animationDuration = duracao + 's';
        
        // O SEGREDO DO LOOP PERFEITO: Delay Negativo
        // Faz a partícula começar em uma altura aleatória da tela
        p.style.animationDelay = '-' + (Math.random() * 10) + 's';
        
        container.appendChild(p);
        
       
    }
}