// ----------------------------------------------------------------
        // DATA
        // ----------------------------------------------------------------

        const servicesData = [
            {
                title: "Progettazione e Ingegneria",
                desc: "Sviluppiamo soluzioni architettoniche e ingegneristiche all'avanguardia, ottimizzando ogni dettaglio per la massima efficienza e durabilità.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB06-axN9ZkD29NW3sOGUbDo-F9WVlvY4Xxwf3MQtb16pLy8VOgv9w9kCJaBp4Z_PYdFjFhZxA8lr3i4Oyo5elyNEhF4_efq0PWTB7FWLXcA2VjXKYwit9CC1B18cc86PQP-8E3JZEE8N1UTwduh3QnhieOyf4KoVdgN2BwyIoOBapBF66DUCjxfXSljotoLndGgfCEN2gq4hKjV91SwsclFipCC1w5WtxbxZG22B7M-mQiNKEla6tSpqfp7YJGLsj7XFTAWtcaEU8"
            },
            {
                title: "Calcolo Strutturale",
                desc: "Analisi rigorose e calcoli precisi per garantire la stabilità e la sicurezza di ogni struttura, utilizzando i software più avanzati del settore.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBRuGLyetinsyVW4uvdbb_garObNiyo06lqSTPipiXDSEDAIxteS7A0Sf7-vKie7HX6Ygr4mN0JLhl9bDKDoDqqmc3bHUR-J10fcZd3b-opRwzyBiTRDVEAAuxby_tRRU1JciRZ-XsXn0k1fubD56vZe5nKuvxshIB_hSDRSGlQtthkQRvULqzBA2tWH9yLKkmaixPPCM56PKOgZ0-6hvx_WyUvgkl6MJev_EMgTgQA8jVokVFfrh6-p0zMvVB9td0q3qcq6RXlmU"
            },
            {
                title: "Direzione Lavori",
                desc: "Supervisione costante in cantiere per assicurare che ogni fase costruttiva rispetti fedelmente il progetto e gli standard qualitativi prefissati.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArjv--q_WzL75BQ9g6mge_e-mQRqY2tlrPeEpxuMpio94qJRdSUtYARvODpmF264vBr3cGBN7yJV21AXChfoHJRtHLL83v8MxxIu2nnjhu3RzNpM7G-ClABfC7CSN3t5AFj-aIS3amzOPdelTKjXTktBp_QFZDBQknNrR2Hmu7tYE7N4BK7je1cevZ-vgkEsfFWX1Zt7ITLSDjKC13rD7hw-IQ0lQL_2BvsETXf2jHIGCKNjMk8OPB1X5tMSLmtL3VxMiQdgAqsiI"
            },
            {
                title: "Strutture in XLAM",
                desc: "Costruzioni in pannelli di legno massiccio a strati incrociati per edifici multipiano sicuri, ecosostenibili e ad altissimo comfort abitativo.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa0dCgEuyLMl-9Wqh8EvkOInzLjYxcnHzJJ72eu23oIxzpv7IZXBprvWNlqZPO_xFbSg6PDaks_DNQx5B4LQlyymbb7M-qE6PSoD-JUmkXJfeNvJtht5fL_mRRakds5seOdJq5hAs7LImElEvSckGDaPahPhLWS2JKQ4cPXcUd8YotUI86jf03lvvP0BafXwBmeL6goTFkOFg-sbbfAef3Bl687_-oVzhKdp8KdqvE4QyT0q_ms0q1mCCNDO2jgL7dgQgv4DyNH4w"
            },
            {
                title: "Legno Lamellare",
                desc: "Realizzazione di grandi luci e forme complesse con travi in legno lamellare, coniugando resistenza meccanica e calore estetico naturale.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4L_SUP3AunyP_32hqBN7ZVaI3B0V9pfZLyAxXGcuBPf_TG9smhDXSKNTcrfW0W4dBKdWBJdZvFyJR6hiq3D8IqNUHbErg5DO9bAhA-ZaUlPuVTW-6-2xyL1IR3HvBrQQWOLjT-nsAaUsY13o-tgR0B5xjNghsv8S9calN3SR0utYV5uXdHj3KnnkrzcKOEf-e6Vp_2IIimqAP7m-gYtkWjyq74rko6tQNBoOcn20D6fxZp62eAvACDxnE8MvasgcMlN5okcWIxGU"
            },
            {
                title: "Coperture e Tetti",
                desc: "Sistemi di copertura ventilati e isolati per una protezione totale dagli agenti atmosferici e un'efficienza energetica superiore.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB03AsVET-XHRu_UkbwcnlRV1sFOotdhB_c_PUqKnwAaIeRDbpDPTNB3P9xu0KNVEIWoP8NOMY9Ok47IuDjLvMRj6oBqkPxRFJfF_2oZdcNNAJlGC-hWNA6OAM1hBbHgdTvnKiJv9rp0YR1jQ6e1swaNgNgWEuQ_94cY5GGAH9iJIn-p0xPx__YMm7ovKqImA9yAu1I5a1Vk7pCckKg3mLlvG4A3pT3nn4hSrPU84g-tp9fCl1wThu6P7vVw96hBeBYsjLgLSbDWFw"
            },
            {
                title: "Cappotti Termici",
                desc: "Isolamento termico a cappotto con materiali naturali o sintetici per abbattere i consumi energetici e migliorare il benessere interno.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEwiO6FdWhisz3r4em5Iwa4PtSCh4gzXrbMfLeTNr7aSb1sEbZIeggr8X9FxU7xjYyAGFoFKvMEQZ5PhUuxC-P2fca9GRGncGrtyh71xQ23Mh8oPaZ30mi-H7vGnEKhItxiHORLULNqXbUYH1kv_saWlK6FklmsClZwhZoUZZrg3azCrvw1nBAnMd3y3kkP_6bUnN9OTPaZ6RfOZc5vIFfXQJasv19_ucX09bEUMTiyTBeAAWc70pVVh3SAziGDs5FZUhR9Yp3atg"
            },
            {
                title: "Cartongesso e Finiture",
                desc: "Sistemi a secco per interni ed esterni, controsoffittature e finiture di pregio per ambienti moderni, funzionali e acusticamente isolati.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_glT2bIma-gIOnyJwZMFUtYZxOO1GRRgomX0iWcg7dk1TEpiNQzfF96F0J1nnF0Y2pD5B7EZiMAOofP9BhOBtbB4KL4hmmsWtmba_AxhlyhhHLOMOJjBAF-gmGrZFv9Zg8DZRENrgCiXcQPkyNdt_EeUJydCqL0nHXIPY4I_1M9vPIE3xF9QTlaRcXDR6pbL2QwRbdut7-HlOQFjTimawAiv1krMxaEV_bxlScOcrd8LLiIRNBkiA7-v57TngM7Bxbg_CMv0Pe04"
            },
            {
                title: "Lattonerie",
                desc: "Lavorazioni artigianali in rame, alluminio e acciaio per lo smaltimento delle acque piovane e la protezione dei nodi costruttivi.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB06-axN9ZkD29NW3sOGUbDo-F9WVlvY4Xxwf3MQtb16pLy8VOgv9w9kCJaBp4Z_PYdFjFhZxA8lr3i4Oyo5elyNEhF4_efq0PWTB7FWLXcA2VjXKYwit9CC1B18cc86PQP-8E3JZEE8N1UTwduh3QnhieOyf4KoVdgN2BwyIoOBapBF66DUCjxfXSljotoLndGgfCEN2gq4hKjV91SwsclFipCC1w5WtxbxZG22B7M-mQiNKEla6tSpqfp7YJGLsj7XFTAWtcaEU8"
            }
        ];

        const pillarsData = [
            {
                title: "Sostenibilità Ambientale",
                desc: "Utilizziamo esclusivamente legname proveniente da foreste certificate PEFC/FSC, garantendo un ciclo di vita a basso impatto ambientale per la tua casa.",
                color: "#526045",
                icon: "eco"
            },
            {
                title: "Efficienza Energetica",
                desc: "Progetti studiati per il massimo isolamento termico, riducendo drasticamente i consumi e garantendo una classe energetica superiore (A4).",
                color: "#476500",
                icon: "bolt"
            },
            {
                title: "Comfort Abitativo",
                desc: "Il legno regola naturalmente l'umidità e offre un isolamento acustico d'eccellenza, creando ambienti sani e accoglienti in ogni stagione.",
                color: "#5d7f13",
                icon: "thermostat"
            },
            {
                title: "Design Bioclimatico",
                desc: "Sfruttiamo l'orientamento solare e la ventilazione naturale per ottimizzare il microclima interno senza l'uso forzato di impianti energivori.",
                color: "#747967",
                icon: "wb_sunny"
            }
        ];

        // ----------------------------------------------------------------
        // STATE
        // ----------------------------------------------------------------

        let activeServiceIndex = 0;
        let activePillarIndex  = 0;

        // ----------------------------------------------------------------
        // RENDER: Services List
        // ----------------------------------------------------------------

        // function renderServicesList() {
        //     const container = document.getElementById('services-list-container');
        //     if (!container) return;

        //     container.innerHTML = servicesData.map((service, index) => {
        //         const isActive = index === activeServiceIndex;
        //         return `
        //             <div class="service-item group border-b border-[#c4c9b4]/40 ${isActive ? 'active' : ''}" data-index="${index}" data-aos="fade-right" data-aos-delay="${index * 80}" data-aos-duration="500">
        //                 <button
        //                     class="w-full py-5 flex flex-col text-left transition-all duration-300 ${isActive ? 'pl-6 text-[#476500]' : 'pl-0 hover:pl-3 text-on-surface-variant'}"
        //                     onclick="updateService(${index})"
        //                 >
        //                     <div class="flex items-center justify-between w-full">
        //                         <span class="font-display text-xl md:text-2xl font-semibold">${service.title}</span>
        //                         <div class="flex items-center gap-4">
                                    
        //                             <span class="material-symbols-outlined transition-transform duration-300 ${isActive ? 'rotate-90' : ''}">arrow_forward</span>
        //                         </div>
        //                     </div>
        //                     <div class="service-desc pr-12">
        //                         <p class="text-on-surface-variant/80 text-base leading-relaxed">${service.desc}</p>
        //                     </div>
        //                 </button>
        //             </div>
        //         `;
        //     }).join('');
        //     if (window.AOS) {
        //         AOS.refresh();
        //     }
        // }

        function renderServicesList() {
            const container = document.getElementById('services-list-container');
            if (!container) return;

            container.innerHTML = servicesData.map((service, index) => {
                const isActive = index === activeServiceIndex;

                return `
                    <div class="service-item group border-b border-[#c4c9b4]/40 ${isActive ? 'active' : ''}"
                        data-index="${index}"
                        data-aos="fade-right"
                        data-aos-delay="${index * 50}"
                        data-aos-duration="500">

                        <button
                            class="w-full py-5 flex flex-col text-left transition-all duration-300 ${isActive ? 'pl-6 text-[#476500]' : 'pl-0 hover:pl-3 text-on-surface-variant'}"
                            onclick="updateService(${index})"
                        >
                            <div class="flex items-center justify-between w-full">
                                <span class="font-display text-xl md:text-2xl font-semibold">${service.title}</span>

                                <div class="flex items-center gap-4">
                                    <span class="material-symbols-outlined transition-transform duration-300 ${isActive ? 'rotate-90' : ''}">
                                        arrow_forward
                                    </span>
                                </div>
                            </div>

                            <div class="service-desc pr-12">
                                <p class="text-on-surface-variant/80 text-base leading-relaxed">
                                    ${service.desc}
                                </p>
                            </div>
                        </button>
                    </div>
                `;
            }).join('');

            
            requestAnimationFrame(() => {
                if (window.AOS) {
                    AOS.refresh();
                }
            });
        }

        // ----------------------------------------------------------------
        // RENDER: Pillars
        // ----------------------------------------------------------------

        function renderPillars() {
            const container = document.getElementById('pillars-container');
            if (!container) return;

            container.innerHTML = pillarsData.map((pillar, index) => {
                const isActive = index === activePillarIndex;
                // return `
                //     <div class="pillar-item group border-b border-black/5 ${isActive ? 'active' : ''}" data-index="${index}">
                //         <button class="w-full py-6 flex flex-col text-left transition-all" onclick="updatePillar(${index})">
                //             <div class="flex items-center gap-6">
                //                 <div
                //                     class="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                //                     style="background-color: ${isActive ? pillar.color : pillar.color + '10'}"
                //                 >
                //                     <span
                //                         class="material-symbols-outlined"
                //                         style="color: ${isActive ? '#fff' : pillar.color}"
                //                     >${pillar.icon}</span>
                //                 </div>
                //                 <span
                //                     class="font-display text-xl md:text-2xl font-bold transition-colors ${isActive ? 'text-[#1c1b1b]' : 'text-[#444939]'}"
                //                 >${pillar.title}</span>
                //             </div>
                //             <div class="pillar-content pl-[72px]">
                //                 <p class="text-[#444939] text-base leading-relaxed">${pillar.desc}</p>
                //             </div>
                //         </button>
                //     </div>
                // `;
                return `
                    <div
                        class="pillar-item group border-b border-black/5 ${isActive ? 'active' : ''}"
                        data-index="${index}"
                        data-aos="fade-right"
                        data-aos-delay="${index * 50}"
                        data-aos-duration="500"
                    >
                        <button class="w-full py-6 flex flex-col text-left transition-all" onclick="updatePillar(${index})">
                            <div class="flex items-center gap-6">
                                <div
                                    class="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                                    style="background-color: ${isActive ? pillar.color : pillar.color + '10'}"
                                >
                                    <span
                                        class="material-symbols-outlined"
                                        style="color: ${isActive ? '#fff' : pillar.color}"
                                    >${pillar.icon}</span>
                                </div>

                                <span
                                    class="font-display text-xl md:text-2xl font-bold transition-colors ${isActive ? 'text-[#1c1b1b]' : 'text-[#444939]'}"
                                >
                                    ${pillar.title}
                                </span>
                            </div>

                            <div class="pillar-content pl-[72px]">
                                <p class="text-[#444939] text-base leading-relaxed">
                                    ${pillar.desc}
                                </p>
                            </div>
                        </button>
                    </div>
                `;
            }).join('');

            if (window.AOS) {
                AOS.refreshHard();
            }
        }

        // ----------------------------------------------------------------
        // UPDATE: Active Service
        // ----------------------------------------------------------------

        function updateService(index) {
            if (activeServiceIndex === index) return;
            activeServiceIndex = index;
            renderServicesList();

            const img   = document.getElementById('service-image');
            const title = document.getElementById('service-title-preview');
            const desc  = document.getElementById('service-desc-preview');
            const data  = servicesData[index];

            if (img) {
                img.style.opacity   = '0';
                img.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    img.src = data.img;
                    if (title) title.textContent = data.title;
                    if (desc)  desc.textContent  = data.desc;
                    img.style.opacity   = '1';
                    img.style.transform = 'scale(1)';
                }, 300);
            }
        }

        // ----------------------------------------------------------------
        // UPDATE: Active Pillar
        // ----------------------------------------------------------------

        function updatePillar(index) {
            if (activePillarIndex === index) return;
            activePillarIndex = index;
            renderPillars();
        }

        // ----------------------------------------------------------------
        // MOBILE NAV
        // ----------------------------------------------------------------

        const mobileToggle      = document.getElementById('mobile-menu-toggle');
        const mobileClose       = document.getElementById('mobile-menu-close');
        const mobileNav         = document.getElementById('mobile-nav');
        const backdrop          = document.getElementById('nav-backdrop');
        const accordionBtn      = document.querySelector('#cosa-offriamo-accordion button');
        const accordionContainer= document.getElementById('cosa-offriamo-accordion');

        function toggleMenu() {
            mobileNav.classList.toggle('mobile-menu-active');
            backdrop.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        }

        if (mobileToggle)        mobileToggle.addEventListener('click', toggleMenu);
        if (mobileClose)         mobileClose.addEventListener('click', toggleMenu);
        if (backdrop)            backdrop.addEventListener('click', toggleMenu);
        if (accordionBtn)        accordionBtn.addEventListener('click', () => accordionContainer.classList.toggle('accordion-active'));

        document.querySelectorAll('#mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileNav.classList.contains('mobile-menu-active')) toggleMenu();
            });
        });

        // ----------------------------------------------------------------
        // CAROUSEL
        // ----------------------------------------------------------------

        const slides        = document.querySelectorAll('.carousel-slide');
        const dots          = document.querySelectorAll('#carousel-dots button');
        const counter       = document.getElementById('carousel-current');
        const prevBtn       = document.getElementById('carousel-prev');
        const nextBtn       = document.getElementById('carousel-next');
        let currentIndex    = 0;
        let isTransitioning = false;

        function updateCarousel(newIndex, direction) {
            if (isTransitioning || newIndex === currentIndex || slides.length === 0) return;
            isTransitioning = true;

            const currentSlide = slides[currentIndex];
            const nextSlide    = slides[newIndex];

            nextSlide.classList.remove('next', 'prev');
            nextSlide.classList.add(direction === 'next' ? 'next' : 'prev');
            nextSlide.offsetHeight; // force reflow

            currentSlide.classList.remove('active');
            currentSlide.classList.add(direction === 'next' ? 'prev' : 'next');
            nextSlide.classList.remove('next', 'prev');
            nextSlide.classList.add('active');

            dots.forEach((dot, idx) => {
                if (idx === newIndex) {
                    dot.classList.replace('h-2',        'h-8');
                    dot.classList.replace('bg-white/30','bg-[#c8f17a]');
                } else {
                    dot.classList.replace('h-8',        'h-2');
                    dot.classList.replace('bg-[#c8f17a]','bg-white/30');
                }
            });

            currentIndex = newIndex;
            if (counter) counter.textContent = String(currentIndex + 1).padStart(2, '0');

            setTimeout(() => {
                slides.forEach((s, idx) => { if (idx !== currentIndex) s.classList.remove('next', 'prev'); });
                isTransitioning = false;
            }, 800);
        }

        if (prevBtn) prevBtn.addEventListener('click', () => updateCarousel((currentIndex - 1 + slides.length) % slides.length, 'prev'));
        if (nextBtn) nextBtn.addEventListener('click', () => updateCarousel((currentIndex + 1) % slides.length, 'next'));
        dots.forEach((dot, index) => dot.addEventListener('click', () => updateCarousel(index, index > currentIndex ? 'next' : 'prev')));

        // ----------------------------------------------------------------
        // COMPARISON SLIDER
        // ----------------------------------------------------------------

        const sliderContainer = document.getElementById('comparison-slider');
        const sliderBefore    = document.getElementById('slider-before');
        const sliderLine      = document.getElementById('slider-line');

        function moveSlider(percentage) {
            const p = Math.max(0, Math.min(100, percentage));
            sliderBefore.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
            sliderLine.style.left       = `${p}%`;
        }

        function handleMove(e) {
            const rect       = sliderContainer.getBoundingClientRect();
            const x          = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
            const percentage = (x / rect.width) * 100;
            moveSlider(percentage);
        }

        if (sliderContainer) {
            let isDragging = false;
            sliderContainer.addEventListener('mousedown',  (e) => { isDragging = true; handleMove(e); });
            sliderContainer.addEventListener('touchstart', (e) => { isDragging = true; handleMove(e); }, { passive: true });
            window.addEventListener('mousemove',  (e) => { if (!isDragging) return; handleMove(e); });
            window.addEventListener('touchmove',  (e) => { if (!isDragging) return; handleMove(e); }, { passive: true });
            window.addEventListener('mouseup',  () => isDragging = false);
            window.addEventListener('touchend', () => isDragging = false);
        }

        // ----------------------------------------------------------------
        // INIT
        // ----------------------------------------------------------------

        renderServicesList();
        renderPillars();
        if (sliderBefore) moveSlider(50);