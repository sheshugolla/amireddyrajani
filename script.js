// ============================================
// HROAI - Dr. Amireddy Rajani Portfolio
// Production JavaScript with Scroll Position Fix
// Version: 2.1.0
// ============================================

'use strict';

// ============================================
// MOBILE MENU TOGGLE
// ============================================
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    
    if (!navbar.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
});


// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow on scroll
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});


// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" or empty
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});


// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
// Trigger on page load
reveal();


// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            element.textContent = target.toLocaleString() + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe all counter elements
document.querySelectorAll('.counter-number').forEach(counter => {
    counterObserver.observe(counter);
});


// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// ============================================
// WHATSAPP POPUP FUNCTIONS
// ============================================
const whatsappPopup = document.getElementById('whatsappPopup');

function openWhatsAppPopup() {
    whatsappPopup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeWhatsAppPopup() {
    whatsappPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close on background click
whatsappPopup.addEventListener('click', function(e) {
    if (e.target === whatsappPopup) {
        closeWhatsAppPopup();
    }
});

// Close on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (whatsappPopup.style.display === 'flex') {
            closeWhatsAppPopup();
        }
        if (imageModal.classList.contains('active')) {
            closeImageModal();
        }
    }
});


// ============================================
// IMAGE MODAL FUNCTIONS - ✅ WITH SCROLL POSITION FIX
// ============================================
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalBadge = document.getElementById('modalBadge');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

// ✅ Store scroll position
let scrollPosition = 0;

// Gallery Data
const galleryData = [
    {
        src: 'assets/images/newspaper-disability.jpg',
        badge: 'Press Coverage 📰',
        title: 'విభిన్న ప్రతిభావంతులు సమస్యల పరిష్కారానికి కృషి',
        description: "Dr. Rajani's tireless work for differently-abled persons' rights featured in leading Telugu daily"
    },
    {
        src: 'assets/images/nandhi-award.jpg',
        badge: 'Awards 🏆',
        title: 'Best Seva Nandi Awards 2025',
        description: 'Prestigious state-level recognition for outstanding social service and community impact'
    },
    {
        src: 'assets/images/newspaper-legal-rights.jpg',
        badge: 'Press Coverage 📰',
        title: 'మహిళలకు చేబాలిన అవగాహన పంచుకోవాలి',
        description: "Legal awareness campaign for women's rights covered by regional media"
    },
    {
        src: 'assets/images/legal-consultation.jpg',
        badge: 'LEGAL AID 💼',
        title: 'Legal Aid & Rights Counseling Session',
        description: 'Dr. Rajani provides comprehensive legal consultation and documentation support to families seeking justice and rights protection'
    },
    {
        src: 'assets/images/stage-award-ceremony.jpg',
        badge: 'Recognition 🎖️',
        title: 'ఇండియా ఆర్ట్స్ ఫౌండేషన్ గుర్తింపు',
        description: 'Honored by India Arts Foundation for cultural and social contributions'
    },
    {
        src: 'assets/images/field-visit.jpg',
        badge: 'Outreach 🤝',
        title: 'Grassroots Field Assistance Program',
        description: 'Community outreach providing direct support to rural families'
    }
];

// ✅ Open Modal - Save Scroll Position
function openImageModal(index) {
    const data = galleryData[index];
    
    modalImage.src = data.src;
    modalImage.alt = data.title;
    modalBadge.textContent = data.badge;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    
    imageModal.classList.add('active');
    
    // ✅ SAVE current scroll position
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // ✅ Prevent body scroll and maintain position
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    
    // ✅ Hide navbar on mobile when modal opens
    if (window.innerWidth <= 768) {
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.transition = 'transform 0.3s ease';
        
        // Ensure modal is on top
        imageModal.style.zIndex = '99999';
    }
}

// ✅ Close Modal - Restore Scroll Position
function closeImageModal() {
    imageModal.classList.remove('active');
    
    // ✅ Restore body scroll
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // ✅ RESTORE scroll position
    window.scrollTo(0, scrollPosition);
    
    // ✅ Show navbar again
    if (window.innerWidth <= 768) {
        navbar.style.transform = 'translateY(0)';
    }
    
    // Reset modal z-index
    imageModal.style.zIndex = '';
}

// Close on background click
imageModal.addEventListener('click', function(e) {
    if (e.target === imageModal) {
        closeImageModal();
    }
});

// ✅ Restore navbar on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navbar.style.transform = 'translateY(0)';
    }
    
    // If modal is open and we resize to desktop, ensure navbar is visible
    if (window.innerWidth > 768 && imageModal.classList.contains('active')) {
        navbar.style.transform = 'translateY(0)';
    }
});


// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll('main > div[id], section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    let current = '';
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
updateActiveNavLink();


// ============================================
// LAZY LOADING IMAGES
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}


// ============================================
// FORM VALIDATION (if contact form exists)
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}


// ============================================
// PREVENT FLASH OF UNSTYLED CONTENT
// ============================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});


// ============================================
// ACCESSIBILITY: FOCUS TRAP IN MODALS
// ============================================
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    });
}

// Apply focus trap to modals when they open
const modalElements = [imageModal, whatsappPopup];
modalElements.forEach(modal => {
    if (modal) {
        const observer = new MutationObserver(() => {
            if (modal.classList.contains('active') || modal.style.display === 'flex') {
                trapFocus(modal);
            }
        });
        
        observer.observe(modal, { attributes: true, attributeFilter: ['class', 'style'] });
    }
});


// ============================================
// PERFORMANCE: DEBOUNCE SCROLL EVENTS
// ============================================
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(reveal, 15));
window.addEventListener('scroll', debounce(updateActiveNavLink, 15));


// ============================================
// CONSOLE CREDITS
// ============================================
console.log(
    '%c🌟 HROAI Portfolio Website',
    'color: #d84315; font-size: 20px; font-weight: bold;'
);
console.log(
    '%cDeveloped for Dr. Amireddy Rajani',
    'color: #666; font-size: 14px;'
);
console.log(
    '%c© 2025 Human Rights Organization All India',
    'color: #999; font-size: 12px;'
);


// ============================================
// ERROR HANDLING
// ============================================
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
});


// ============================================
// END OF SCRIPT
// ============================================
