      // =================================================================
        // 🛍️ BANCO DE DADOS DE PRODUTOS (SEUS LINKS SHEIN)
        // =================================================================

        const giftDatabase = [
            // --- JOIAS ---
            { 
                name: "Berloque Prata", 
                category: "joias", 
                price: 25, 
                tags: ["romantica", "moderna"], 
                icon: "💍", 
                link: "https://br.shein.com/goods-p-29647263.html?goods_id=29647263&test=5051&url_from=shein_bing_bradplaPT_Kids_20250814&scene=1&pf=bing&ad_type=DPA&language=pt-br&siteuid=br&version_bid=101986081,102001861&version_eid=100769286&landing_page_id=1510&ad_test_id=45625&requestId=ssr-31e23bfd1ccb46ec&cid=580933308&adid=72087010508346&tv_b=2&setid=1153389500444543&currency=BRL&msclkid=81cfade12ead16593660c48460263303" 
            },
            { 
                name: "Colar Ponto Luz", 
                category: "joias", 
                price: 30, 
                tags: ["romantica"], 
                icon: "💎", 
                link: "https://br.shein.com/goods-p-210818761.html?goods_id=210818761&test=5051&url_from=shein_bing_bradplaPT_Kids_20250814&scene=1&pf=bing&ad_type=DPA&language=pt-br&siteuid=br&version_bid=101986081,102001861&version_eid=100769286&landing_page_id=1510&ad_test_id=45625&requestId=ssr-e47a5c7a8ded30c1&cid=580933308&adid=72087010508346&tv_b=2&setid=1153389500444543&currency=BRL&msclkid=518b85a4158c161eea74ecc15b239bf2" 
            },
            
            // --- BELEZA ---
            { 
                name: "Maleta Makeup", 
                category: "beleza", 
                price: 145, 
                tags: ["moderna", "romantica"], 
                icon: "💄", 
                link: "https://br.shein.com/Makeup-Organizers-p-21648482.html?src_identifier=st%3D2%60sc%3DMaleta%20Makeup%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_goods_detail1768246964010&mallCode=2&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-1_21648482%7C0-2&pageListType=4" 
            },
            { 
                name: "Kit Skincare", 
                category: "beleza", 
                price: 40, 
                tags: ["geek", "moderna"], 
                icon: "🧖‍♀️", 
                link: "https://br.shein.com/Dermachem-Anti-Oiliness-Skin-Care-Kit-p-48223655.html?src_identifier=st%3D2%60sc%3DKit%20Skincare%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_goods_detail1768247012249&mallCode=2&pageListType=4&imgRatio=3-4&detailBusinessFrom=0-1_48223655%7C0-2&pageListType=4" 
            },
            
            // --- ELETRÔNICOS ---
            { 
                name: "Instax Mini", 
                category: "eletronicos", 
                price: 700, 
                tags: ["moderna", "romantica"], 
                icon: "📸", 
                link: "https://br.shein.com/FujiFilm-In-Tax-Mini-12-Camera-Kit-Green-Blue-Lilac-Purple-Or-Pink-Film-Bag-Instant-Developed-Photos-Retro-Gift-Spray-Art-p-48366104.html?src_identifier=st%3D2%60sc%3DInstax%20Mini%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_goods_detail1768247087747&mallCode=2&pageListType=4&imgRatio=3-4&detailBusinessFrom=0-1_48366104%7C0-2&pageListType=4" 
            },
            { 
                name: "Kindle", 
                category: "eletronicos", 
                price: 799, 
                tags: ["geek", "romantica"], 
                icon: "📖", 
                link: "https://br.shein.com/Kindle-16GB-Digital-Reader-Lightweight-And-Compact-Long-Battery-Life-Adjustable-Light-p-220102954.html?src_identifier=st%3D2%60sc%3DKindle%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_goods_detail1768247128473&mallCode=2&pageListType=4&imgRatio=1-1&detailBusinessFrom=0-1_220102954%7C0-2&pageListType=4" 
            },
            { 
                name: "Fone Bluetooth", 
                category: "eletronicos", 
                price: 200, 
                tags: ["geek", "moderna"], 
                icon: "🎧", 
                link: "https://br.shein.com/Wireless-Earphones-Airdots-For-Redmi-TWS-Bluetooth-5-0-E6S-p-296900951.html?src_identifier=st%3D2%60sc%3DFone%20Bluetooth%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_goods_detail1768247058278&mallCode=2&pageListType=4&imgRatio=3-4&detailBusinessFrom=0-1_296900951%7C0-2&pageListType=4" 
            },
            
            // --- QUARTO ---
            { 
                name: "Luminária Lua", 
                category: "quarto", 
                price: 20, 
                tags: ["geek", "romantica"], 
                icon: "🌕", 
                link: "https://br.shein.com/Moon-Night-Lights-For-Kids-To-Paint-And-Craft-Bedroom-Planet-Lamp-Decor-p-39443451.html?src_identifier=st%3D2%60sc%3DLumin%C3%A1ria%20Lua%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_goods_detail1768247280387&mallCode=2&pageListType=4&imgRatio=3-4&detailBusinessFrom=0-1_39443451%7C0-2&pageListType=4" 
            },
            { 
                name: "Espelho Camarim", 
                category: "quarto", 
                price: 95, 
                tags: ["moderna"], 
                icon: "🪞", 
                link: "https://br.shein.com/Round-Mirror-With-LED-Lighting-3-Colors-Warm-Neutral-Cool-Frosted-Various-Sizes-Beveled-Edge-Luxury-Bathroom-p-243966686.html?src_identifier=st%3D2%60sc%3DEspelho%20Camarim%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_goods_detail1768247304551&mallCode=2&pageListType=4&imgRatio=3-4&detailBusinessFrom=0-1_243966686%7C0-2&pageListType=4" 
            }
        ];

        // =================================================================
        // ⚙️ LÓGICA DO SISTEMA
        // =================================================================

        function selectOption(group, value, btnElement) {
            document.getElementById(`input-${group}`).value = value;
            const buttons = btnElement.parentElement.querySelectorAll('.tag-btn');
            buttons.forEach(b => b.classList.remove('active'));
            btnElement.classList.add('active');
        }

        function updateBudget(val) {
            document.getElementById('input-budget').value = val;
            document.getElementById('budget-display').innerText = `Até R$ ${val}`;
        }

        function generateSuggestions() {
            const style = document.getElementById('input-style').value;
            const category = document.getElementById('input-category').value;
            const budget = parseInt(document.getElementById('input-budget').value);

            // Filtro: Preço menor ou igual ao orçamento + 20% de margem
            const filtered = giftDatabase.filter(gift => {
                const matchStyle = gift.tags.includes(style); 
                const matchCategory = category === 'todos' ? true : gift.category === category; 
                const matchPrice = gift.price <= (budget * 1.2); 
                
                return matchStyle && matchCategory && matchPrice;
            });

            const container = document.getElementById('cards-container');
            container.innerHTML = '';

            if (filtered.length === 0) {
                container.innerHTML = `
                    <div style="text-align: center; color: #ccc; padding: 20px;">
                        <i class="fa-regular fa-face-sad-tear" style="font-size: 2rem; margin-bottom: 10px; color: #c5a059;"></i>
                        <p style="font-family: 'Cinzel', serif;">Nenhum presente encontrado.</p>
                        <small>Tente aumentar o valor no controle deslizante.</small>
                    </div>
                `;
            } else {
                filtered.forEach(gift => {
                    const card = document.createElement('div');
                    card.className = 'gift-card';
                    
                    card.innerHTML = `
                        <div class="gift-icon">${gift.icon}</div>
                        <div class="gift-info">
                            <h4>${gift.name}</h4>
                            <p>R$ ${gift.price.toFixed(2).replace('.', ',')}</p>
                        </div>
                        <a href="${gift.link}" class="gift-buy-btn" target="_blank" title="Ver na Shein">
                            <i class="fa-solid fa-chevron-right"></i>
                        </a>
                    `;
                    container.appendChild(card);
                });
            }

            document.getElementById('form-section').classList.add('hidden');
            document.getElementById('results-section').classList.remove('hidden');
        }

        function resetForm() {
            document.getElementById('form-section').classList.remove('hidden');
            document.getElementById('results-section').classList.add('hidden');
        }

        function navegarPara(url) {
            const container = document.getElementById('page-container') || document.body;
            container.style.transition = "opacity 0.5s ease";
            container.style.opacity = "0";
            setTimeout(() => { window.location.href = url; }, 500);
        }

        // =================================================================
        // ✨ PARTÍCULAS MÁGICAS (NOVO)
        // =================================================================
        function criarParticulas() {
            const container = document.getElementById('page-container'); // Usa o container principal
            if (!container) return;

            const cores = ['#FFD700', '#FDB931', '#FFFFFF', '#FFFACD'];

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
                
                // Delay Negativo para efeito imediato
                p.style.animationDelay = '-' + (Math.random() * 10) + 's';
                
                container.appendChild(p);
            }
        }

        // Inicia as partículas ao carregar a página
        window.onload = function() {
            criarParticulas();
        };
