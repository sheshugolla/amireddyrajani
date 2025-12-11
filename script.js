/* ============================================
   HROAI - Dr. Amireddy Rajani Portfolio
   Production-Ready JavaScript
   Version: 1.2.0 - Complete Functionality
   ============================================ */

'use strict';

/* ============================================
   1. GALLERY DATA FOR IMAGE MODAL
   ============================================ */
const galleryData = [
    {
        image: 'assets/images/newspaper-disability.jpg',
        badge: 'Press Coverage 📰',
        title: 'విభిన్న ప్రతిభావంతులు సమస్యల పరిష్కారానికి కృషి',
        description: 'Dr. Rajani spearheading comprehensive disability rights awareness campaign featured prominently in Telugu newspaper. The coverage highlights our organization\'s dedicated efforts in providing marriage support, pension assistance, and legal aid services for persons with disabilities. Our team works across multiple government departments including social welfare, ensuring complete support from application to approval for vulnerable communities in Andhra Pradesh.'
    },
    {
        image: 'assets/images/nandhi-award.jpg',
        badge: 'Awards 🏆',
        title: 'Best Seva Nandi Awards 2025',
        description: 'Human Rights Organization All India proudly presents the prestigious Best Seva Nandi Awards ceremony scheduled for July 27, 2025, in Vijayawada. This esteemed recognition celebrates exceptional contributions to social service, community welfare, and humanitarian efforts. The award honors individuals and organizations who have demonstrated unwavering commitment to uplifting marginalized communities, protecting human rights, and creating lasting positive impact across Andhra Pradesh and beyond.'
    },
    {
        image: 'assets/images/newspaper-legal-rights.jpg',
        badge: 'Press Coverage 📰',
        title: 'మహిళలకు చేబాలిన అవగాహన పంచుకోవాలి',
        description: 'Comprehensive legal rights awareness campaign featured extensively in regional media outlets. Dr. Rajani emphasizes the critical importance of educating women about their fundamental constitutional and legal rights, including property inheritance under Hindu Succession Act, domestic violence protection under IPC Section 323 and 498A, matrimonial rights, maintenance claims, child custody laws, and employment rights. This grassroots initiative empowers women with knowledge to recognize violations and seek immediate legal recourse through proper channels.'
    },
    {
        image: 'assets/images/office-counseling.jpg',
        badge: 'Legal Aid 💼',
        title: 'Family Counseling Session at HROAI Office',
        description: 'Dr. Rajani conducting an in-depth, personalized counseling session at the Human Rights Organization All India headquarters. Our comprehensive approach includes legal guidance on family disputes, matrimonial conflict resolution, property rights consultation, psychological support for trauma victims, mediation between family members, documentation assistance, and strategic planning for court proceedings. We maintain absolute confidentiality and provide continuous follow-up support throughout the resolution process, ensuring no client feels abandoned during their most challenging times.'
    },
    {
        image: 'assets/images/stage-award-ceremony.jpg',
        badge: 'Recognition 🎖️',
        title: 'ఇండియా ఆర్ట్స్ ఫౌండేషన్ Award Ceremony',
        description: 'Dr. Rajani honored at the prestigious India Arts Foundation award ceremony for exemplary social service and transformative community leadership. This state-level recognition acknowledges over 15 years of unwavering dedication to human rights protection, women empowerment initiatives, disability rights advocacy, legal assistance programs for marginalized communities, and measurable positive impact on thousands of families. The award celebrates her role in creating systemic change through grassroots activism, policy advocacy, and compassionate direct service delivery across Andhra Pradesh.'
    },
    {
        image: 'assets/images/field-visit.jpg',
        badge: 'Outreach 🤝',
        title: 'Grassroots Field Assistance Program',
        description: 'Comprehensive field visits to remote villages and underserved rural areas, ensuring no individual is left behind in accessing justice and essential support services. Our mobile outreach team travels extensively across Krishna District and neighboring regions to provide doorstep legal aid, facilitate government scheme applications (Ayushman Bharat, E-Shram, pension schemes), conduct community awareness sessions on rights and entitlements, offer immediate crisis intervention, and bridge the gap between vulnerable populations and institutional support systems. Making justice truly accessible to all.'
    }
];


/* ============================================
   2. DOM ELEMENTS
   ============================================ */
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const scrollTopBtn = document.getElementById('scrollTop');
const whatsappPopup = document.getElementById('whatsappPopup');
const imageModal = document.getElementById('imageModal');


/* ============================================
   3. MOBILE MENU TOGGLE
   ============================================ */
function toggleMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        
        // Prevent body scroll when menu is open
        if (!mobileMenu.classList.contains('hidden')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}


/* ============================================
   4. WHATSAPP POPUP FUNCTIONS
   ============================================ */
function openWhatsAppPopup() {
    if (whatsappPopup) {
        whatsappPopup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeWhatsAppPopup() {
    if (whatsappPopup) {
        whatsappPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}


/* ============================================
   5. IMAGE MODAL FUNCTIONS
   ============================================ */
function openImageModal(index) {
    if (!imageModal || !galleryData[index]) return;
    
    const data = galleryData[index];
    
    // Update modal content
    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalImage').alt = data.title;
    document.getElementById('modalBadge').textContent = data.badge;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.description;
    
    // Show modal
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    if (imageModal) {
        imageModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}


/* ============================================
   6. SCROLL TO TOP
   ============================================ */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


/* ============================================
   7. NAVIGATION SCROLL EFFECT
   ============================================ */
function handleScroll() {
    const scrollPosition = window.scrollY;
    
    // Navbar scroll effect
    if (navbar) {
        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Scroll to top button visibility
    if (scrollTopBtn) {
        if (scrollPosition > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
}


/* ============================================
   8. COUNTER ANIMATION
   ============================================ */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number with commas for thousands
        const formatted = Math.floor(current).toLocaleString();
        element.textContent = formatted + (target >= 1000 ? '+' : '');
    }, 16);
}


/* ============================================
   9. INTERSECTION OBSERVER - SCROLL REVEAL
   ============================================ */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length === 0) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger counter animation if element has counter
                const counters = entry.target.querySelectorAll('.counter-number');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    if (target && !counter.classList.contains('counted')) {
                        counter.classList.add('counted');
                        animateCounter(counter, target);
                    }
                });
            }
        });
    }, observerOptions);
    
    revealElements.forEach(element => observer.observe(element));
}


/* ============================================
   10. ACTIVE NAVIGATION LINK
   ============================================ */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('main > div[id], section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}


/* ============================================
   11. SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip empty anchors
            if (href === '#' || href === '#!') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
                
                // Smooth scroll to target
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}


/* ============================================
   12. CLOSE MODALS ON ESC KEY
   ============================================ */
function handleEscapeKey(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        closeWhatsAppPopup();
        closeImageModal();
    }
}


/* ============================================
   13. CLOSE MODALS ON BACKGROUND CLICK
   ============================================ */
function initModalBackgroundClose() {
    // WhatsApp Popup
    if (whatsappPopup) {
        whatsappPopup.addEventListener('click', function(e) {
            if (e.target === whatsappPopup) {
                closeWhatsAppPopup();
            }
        });
    }
    
    // Image Modal
    if (imageModal) {
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                closeImageModal();
            }
        });
    }
}


/* ============================================
   14. PREVENT BODY SCROLL WHEN MODAL OPEN
   ============================================ */
function preventScrollOnModalOpen() {
    const modals = [whatsappPopup, imageModal];
    
    modals.forEach(modal => {
        if (modal) {
            const observer = new MutationObserver(() => {
                const isVisible = window.getComputedStyle(modal).display !== 'none';
                document.body.style.overflow = isVisible ? 'hidden' : 'auto';
            });
            
            observer.observe(modal, {
                attributes: true,
                attributeFilter: ['style', 'class']
            });
        }
    });
}


/* ============================================
   15. LAZY LOADING IMAGES
   ============================================ */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}


/* ============================================
   16. FORM VALIDATION (If needed in future)
   ============================================ */
function validateContactForm(formData) {
    const errors = [];
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
        errors.push('Invalid email address');
    }
    
    // Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
        errors.push('Invalid phone number');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}


/* ============================================
   17. DEBOUNCE UTILITY
   ============================================ */
function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


/* ============================================
   18. THROTTLE UTILITY
   ============================================ */
function throttle(func, limit = 100) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}


/* ============================================
   19. PERFORMANCE MONITORING
   ============================================ */
function logPerformance() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;
        
        console.log(`%c⚡ Performance Metrics`, 'color: #25D366; font-weight: bold; font-size: 14px;');
        console.log(`📊 Page Load Time: ${pageLoadTime}ms`);
        console.log(`🔌 Server Connect Time: ${connectTime}ms`);
        console.log(`🎨 Render Time: ${renderTime}ms`);
    }
}


/* ============================================
   20. INITIALIZE ALL FUNCTIONS
   ============================================ */
function init() {
    // Scroll event listener (throttled for performance)
    const throttledScroll = throttle(() => {
        handleScroll();
        updateActiveNavLink();
    }, 100);
    
    window.addEventListener('scroll', throttledScroll);
    
    // Keyboard event listener
    document.addEventListener('keydown', handleEscapeKey);
    
    // Initialize scroll reveal
    initScrollReveal();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize modal background close
    initModalBackgroundClose();
    
    // Initialize lazy loading
    initLazyLoading();
    
    // Prevent scroll on modal open
    preventScrollOnModalOpen();
    
    // Run initial scroll check
    handleScroll();
    updateActiveNavLink();
    
    // Log performance metrics (development only)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.addEventListener('load', () => {
            setTimeout(logPerformance, 1000);
        });
    }
    
    console.log('%c✨ HROAI Portfolio Loaded Successfully', 'color: #d84315; font-weight: bold; font-size: 16px;');
    console.log('%cDr. Amireddy Rajani - National Women Chairman', 'color: #4a4a4a; font-size: 12px;');
}


/* ============================================
   21. DOM CONTENT LOADED
   ============================================ */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}


/* ============================================
   22. EXPOSE FUNCTIONS GLOBALLY (for onclick handlers)
   ============================================ */
window.toggleMobileMenu = toggleMobileMenu;
window.openWhatsAppPopup = openWhatsAppPopup;
window.closeWhatsAppPopup = closeWhatsAppPopup;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
window.scrollToTop = scrollToTop;


/* ============================================
   23. SERVICE WORKER REGISTRATION (Optional)
   ============================================ */
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}


/* ============================================
   24. DETECT OFFLINE/ONLINE STATUS
   ============================================ */
window.addEventListener('online', () => {
    console.log('🌐 Back online');
    // Optional: Show toast notification
});

window.addEventListener('offline', () => {
    console.log('📡 You are offline');
    // Optional: Show toast notification
});


/* ============================================
   25. PREVENT RIGHT CLICK ON IMAGES (Optional Security)
   ============================================ */
function preventImageRightClick() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('contextmenu', (e) => {
            // Uncomment to prevent right-click
            // e.preventDefault();
        });
    });
}


/* ============================================
   26. AUTO-CLOSE MOBILE MENU ON RESIZE
   ============================================ */
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    }, 250);
});


/* ============================================
   27. PRINT PAGE PREPARATION
   ============================================ */
window.addEventListener('beforeprint', () => {
    // Close all modals before printing
    closeWhatsAppPopup();
    closeImageModal();
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
    }
});


/* ============================================
   28. FOCUS TRAP FOR MODALS (Accessibility)
   ============================================ */
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}


/* ============================================
   END OF SCRIPT
   ============================================ */
console.log('%c🚀 All systems operational', 'color: #25D366; font-weight: bold;');
