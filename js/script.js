/* =====================================================
   SCRIPT.JS - Minecraft Portfolio JavaScript
   ===================================================== */

// ============== DOM ELEMENTS ==============
const sections = document.querySelectorAll('.section');
const navDots = document.querySelectorAll('.nav-dot');
const dayNightToggle = document.getElementById('dayNightToggle');
const soundToggle = document.getElementById('soundToggle');
const langToggle = document.getElementById('langToggle');
const ambientSound = document.getElementById('ambientSound');
const creeperSound = document.getElementById('creeperSound');
const particlesContainer = document.getElementById('particles');
const creeper = document.getElementById('creeper');
const creeperPopup = document.getElementById('creeperPopup');

// ============== STATE ==============
let isNightMode = false;
let isSoundOn = false;
let currentLang = 'es';
let hasAnimatedSections = new Set();
let creeperFound = false;

// ============== TRANSLATIONS ==============
const translations = {
    es: {
        greeting: "Hola, soy",
        about_p1: "¡Bienvenido a mi mundo! Soy un desarrollador apasionado por crear experiencias digitales únicas. Como un jugador de Minecraft que construye bloque a bloque, yo construyo código línea a línea.",
        about_p2: "Me especializo en desarrollo de Software Frontend y Backend, utilizando tecnologías modernas para dar vida a ideas innovadoras. Cada proyecto es una nueva aventura, y estoy emocionado de compartir mis creaciones contigo.",
        scroll_text: "Scroll para explorar",
        projects_title: "Mis Proyectos",
        contact_title: "Contáctame",
        contact_intro: "¿Tienes un proyecto en mente? ¿Quieres formar equipo para una aventura?<br>¡Envíame un mensaje y construyamos algo épico juntos!",
        footer_text: "Crafteado con ❤️ por Wenqiang He © 2026",
        footer_quote: "\"El límite es tu imaginación\"",
        creeper_found: "¡Me encontraste!"
    },
    en: {
        greeting: "Hi, I'm",
        about_p1: "Welcome to my world! I'm a developer passionate about creating unique digital experiences. Like a Minecraft player who builds block by block, I build code line by line.",
        about_p2: "I specialize in Frontend and Backend Software development, using modern technologies to bring innovative ideas to life. Each project is a new adventure, and I'm excited to share my creations with you.",
        scroll_text: "Scroll to explore",
        projects_title: "My Projects",
        contact_title: "Contact Me",
        contact_intro: "Do you have a project in mind? Want to team up for an adventure?<br>Send me a message and let's build something epic together!",
        footer_text: "Crafted with ❤️ by Wenqiang He © 2026",
        footer_quote: "\"The limit is your imagination\"",
        creeper_found: "You found me!"
    }
};

// ============== LANGUAGE TOGGLE ==============
/**
 * Changes the language of the page
 */
function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // Update button display
    const langEs = langToggle.querySelector('.lang-es');
    const langEn = langToggle.querySelector('.lang-en');
    
    if (currentLang === 'en') {
        langEs.style.display = 'none';
        langEn.style.display = 'inline';
    } else {
        langEs.style.display = 'inline';
        langEn.style.display = 'none';
    }
    
    // Apply translations
    applyTranslations();
    
    // Save preference
    localStorage.setItem('language', currentLang);
}

/**
 * Applies translations to all elements with data-i18n attribute
 */
function applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
}

// ============== INTERSECTION OBSERVER FOR SECTIONS ==============
/**
 * Creates an IntersectionObserver to handle section visibility
 * and trigger fade-in/fade-out animations
 */
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const section = entry.target;
        const sectionId = section.id;
        
        if (entry.isIntersecting) {
            // Section is visible
            section.classList.add('visible');
            updateNavDots(sectionId);
            
            // Mark section as animated
            hasAnimatedSections.add(sectionId);
        } else {
            // Only remove visible class if we want continuous animation
            // For "animate once" behavior, comment out the line below
            // section.classList.remove('visible');
        }
    });
}, {
    root: null, // viewport
    rootMargin: '-10% 0px -10% 0px', // trigger when section is 10% into viewport
    threshold: 0.3 // 30% of section must be visible
});

// Observe all sections
sections.forEach(section => {
    sectionObserver.observe(section);
});

// ============== NAVIGATION DOTS ==============
/**
 * Updates the active state of navigation dots
 * @param {string} activeSectionId - ID of the currently active section
 */
function updateNavDots(activeSectionId) {
    navDots.forEach(dot => {
        const dotSection = dot.dataset.section;
        if (dotSection === activeSectionId) {
            dot.classList.add('active');
            dot.setAttribute('aria-current', 'true');
        } else {
            dot.classList.remove('active');
            dot.removeAttribute('aria-current');
        }
    });
}

// Navigation dot click handlers
navDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const targetSection = dot.dataset.section;
        const section = document.getElementById(targetSection);
        
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
    
    // Keyboard accessibility
    dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            dot.click();
        }
    });
});

// ============== DAY/NIGHT MODE ==============
/**
 * Toggles between day and night mode
 */
function toggleDayNight() {
    isNightMode = !isNightMode;
    document.body.classList.toggle('night-mode', isNightMode);
    
    // Update toggle button icons
    const sunIcon = dayNightToggle.querySelector('.sun-icon');
    const moonIcon = dayNightToggle.querySelector('.moon-icon');
    
    if (isNightMode) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
        dayNightToggle.setAttribute('aria-label', 'Cambiar a modo día');
    } else {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
        dayNightToggle.setAttribute('aria-label', 'Cambiar a modo noche');
    }
    
    // Update particles for night mode
    updateParticlesForMode();
    
    // Save preference
    localStorage.setItem('nightMode', isNightMode);
}

dayNightToggle.addEventListener('click', toggleDayNight);

// ============== SOUND TOGGLE ==============
/**
 * Toggles ambient sound on/off
 */
function toggleSound() {
    isSoundOn = !isSoundOn;
    updateSoundUI();
}

/**
 * Updates sound UI and plays/pauses music
 */
function updateSoundUI() {
    const soundOnIcon = soundToggle.querySelector('.sound-on');
    const soundOffIcon = soundToggle.querySelector('.sound-off');
    
    if (isSoundOn) {
        ambientSound.volume = 0.3;
        ambientSound.play().catch(e => {
            console.log('Audio autoplay prevented:', e);
        });
        soundOnIcon.style.display = 'inline';
        soundOffIcon.style.display = 'none';
        soundToggle.setAttribute('aria-label', 'Desactivar sonido');
    } else {
        ambientSound.pause();
        soundOnIcon.style.display = 'none';
        soundOffIcon.style.display = 'inline';
        soundToggle.setAttribute('aria-label', 'Activar sonido');
    }
    
    // Save preference
    localStorage.setItem('soundOn', isSoundOn);
}

soundToggle.addEventListener('click', toggleSound);

// ============== PARTICLES SYSTEM ==============
/**
 * Creates floating particles for ambient effect
 */
function createParticles() {
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        // Random duration
        particle.style.animationDuration = `${8 + Math.random() * 6}s`;
        
        // Random size (pixelated)
        const size = (Math.floor(Math.random() * 3) + 1) * 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particlesContainer.appendChild(particle);
    }
}

/**
 * Updates particle colors based on day/night mode
 */
function updateParticlesForMode() {
    const particles = particlesContainer.querySelectorAll('.particle');
    
    particles.forEach(particle => {
        if (isNightMode) {
            // Night mode: stars/sparkles
            particle.style.backgroundColor = `rgba(255, 255, 255, ${0.4 + Math.random() * 0.4})`;
            particle.style.boxShadow = '0 0 4px rgba(255, 255, 255, 0.5)';
        } else {
            // Day mode: pollen/dust
            particle.style.backgroundColor = `rgba(255, 255, 255, ${0.3 + Math.random() * 0.3})`;
            particle.style.boxShadow = 'none';
        }
    });
}

// Initialize particles
createParticles();

// Recreate particles on resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createParticles, 250);
});

// ============== CREEPER EASTER EGG ==============
/**
 * Easter egg: Creeper interaction with explosion, sound and popup
 */
if (creeper) {
    creeper.addEventListener('click', () => {
        // Only trigger once
        if (creeperFound) return;
        creeperFound = true;
        
        // Play explosion sound
        if (creeperSound) {
            creeperSound.currentTime = 0;
            creeperSound.volume = 0.5;
            creeperSound.play().catch(e => console.log('Sound blocked:', e));
        }
        
        // Add explosion animation class
        creeper.classList.add('exploding');
        
        // Create explosion effect
        createExplosion(creeper);
        
        // Show popup after short delay
        setTimeout(() => {
            showCreeperPopup();
        }, 400);
        
        // Hide creeper permanently
        setTimeout(() => {
            creeper.style.display = 'none';
        }, 800);
    });
}

/**
 * Shows the creeper found popup for 3 seconds
 */
function showCreeperPopup() {
    if (creeperPopup) {
        // Update text based on language
        const popupText = creeperPopup.querySelector('.popup-text');
        if (popupText && translations[currentLang].creeper_found) {
            popupText.textContent = translations[currentLang].creeper_found;
        }
        
        creeperPopup.classList.remove('hidden');
        
        // Hide popup after 3 seconds
        setTimeout(() => {
            creeperPopup.classList.add('hidden');
        }, 3000);
    }
}

/**
 * Creates explosion particle effect
 * @param {HTMLElement} element - The element to explode from
 */
function createExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Create explosion particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${getRandomExplosionColor()};
            border: 2px solid #000;
            left: ${centerX}px;
            top: ${centerY}px;
            pointer-events: none;
            z-index: 9999;
        `;
        
        document.body.appendChild(particle);
        
        // Animate particle
        const angle = (Math.PI * 2 / 20) * i;
        const velocity = 100 + Math.random() * 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let x = 0;
        let y = 0;
        let opacity = 1;
        
        function animateParticle() {
            x += vx * 0.02;
            y += vy * 0.02 + 2; // Add gravity
            opacity -= 0.02;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animateParticle);
            } else {
                particle.remove();
            }
        }
        
        requestAnimationFrame(animateParticle);
    }
}

/**
 * Returns a random Minecraft explosion color
 * @returns {string} - Hex color code
 */
function getRandomExplosionColor() {
    const colors = ['#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#808080'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// ============== KEYBOARD NAVIGATION ==============
/**
 * Handle keyboard navigation for accessibility
 */
document.addEventListener('keydown', (e) => {
    // Arrow keys for section navigation
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        const currentSection = Array.from(sections).find(section => 
            section.classList.contains('visible')
        );
        
        if (currentSection) {
            const currentIndex = Array.from(sections).indexOf(currentSection);
            let targetIndex;
            
            if (e.key === 'ArrowDown') {
                targetIndex = Math.min(currentIndex + 1, sections.length - 1);
            } else {
                targetIndex = Math.max(currentIndex - 1, 0);
            }
            
            sections[targetIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }
});

// ============== LAZY LOADING FOR IMAGES ==============
/**
 * Lazy load images when they come into view
 */
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
        }
    });
}, {
    rootMargin: '50px'
});

// Observe images with data-src attribute
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ============== REDUCED MOTION PREFERENCE ==============
/**
 * Check and respect user's reduced motion preference
 */
function checkReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Disable animations
        document.documentElement.style.setProperty('--transition-fast', '0ms');
        document.documentElement.style.setProperty('--transition-normal', '0ms');
        document.documentElement.style.setProperty('--transition-slow', '0ms');
        
        // Show all sections immediately
        sections.forEach(section => {
            section.classList.add('visible');
        });
        
        // Remove particles
        particlesContainer.innerHTML = '';
    }
}

checkReducedMotion();

// ============== LOAD SAVED PREFERENCES ==============
/**
 * Load user preferences from localStorage
 */
function loadPreferences() {
    // Night mode preference
    const savedNightMode = localStorage.getItem('nightMode');
    if (savedNightMode === 'true') {
        toggleDayNight();
    }
    
    // Language preference
    const savedLang = localStorage.getItem('language');
    if (savedLang && savedLang !== currentLang) {
        toggleLanguage();
    }
    
    // Note: Sound preference is not auto-applied due to browser restrictions
}

// ============== INITIALIZATION ==============
/**
 * Initialize the portfolio
 */
function init() {
    // Load preferences
    loadPreferences();
    
    // Make first section visible immediately
    if (sections[0]) {
        sections[0].classList.add('visible');
        hasAnimatedSections.add(sections[0].id);
    }
    
    // Update particles for initial mode
    updateParticlesForMode();
    
    // Apply initial translations
    applyTranslations();
    
    // Start music automatically (will require user interaction due to browser policies)
    startAmbientMusic();
    
    console.log('🎮 Minecraft Portfolio initialized!');
    console.log('💡 Tip: Click on the Creeper for a surprise!');
}

/**
 * Start ambient music automatically
 */
function startAmbientMusic() {
    isSoundOn = true;
    updateSoundUI();
    
    // Also try to play on first user interaction if autoplay is blocked
    const startOnInteraction = () => {
        if (isSoundOn && ambientSound.paused) {
            ambientSound.play().catch(() => {});
        }
        document.removeEventListener('click', startOnInteraction);
        document.removeEventListener('keydown', startOnInteraction);
        document.removeEventListener('scroll', startOnInteraction);
    };
    
    document.addEventListener('click', startOnInteraction);
    document.addEventListener('keydown', startOnInteraction);
    document.addEventListener('scroll', startOnInteraction);
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============== SMOOTH SCROLL POLYFILL (if needed) ==============
/**
 * Simple smooth scroll fallback for older browsers
 */
if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPosition = target.offsetTop;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                let startTime = null;
                
                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / 500, 1);
                    const ease = progress < 0.5 
                        ? 2 * progress * progress 
                        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
                    
                    window.scrollTo(0, startPosition + distance * ease);
                    
                    if (timeElapsed < 500) {
                        requestAnimationFrame(animation);
                    }
                }
                
                requestAnimationFrame(animation);
            }
        });
    });
}
