// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    initNavigation();
    
    // Form handling
    initForms();
    
    // Scroll animations
    initScrollAnimations();
    
    // Mobile navigation
    initMobileNav();
    
    // CTA button tracking
    initCTATracking();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    
    // Change navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('nav-menu');
                const navToggle = document.getElementById('nav-toggle');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
}

// Mobile navigation
function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// Form handling
function initForms() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Google Analytics event tracking
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'form_submit', {
                        'event_category': 'Contact',
                        'event_label': 'Free Trial Signup',
                        'value': 1
                    });
                }
                
                // Show success message
                showNotification('Thank you! We\'ll be in touch soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
            }, 2000);
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        backgroundColor: type === 'success' ? '#10b981' : '#4f46e5',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        zIndex: '9999',
        fontSize: '0.9rem',
        fontWeight: '500',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card, .step, .faq-item').forEach(el => {
        observer.observe(el);
    });
}

// CTA button tracking
function initCTATracking() {
    // Track all primary CTA buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            const section = this.closest('section')?.id || 'unknown';
            
            // Google Analytics event tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'cta_click', {
                    'event_category': 'CTA',
                    'event_label': `${section} - ${buttonText}`,
                    'value': 1
                });
            }
            
            // Console log for development
            console.log(`CTA clicked: ${buttonText} in section: ${section}`);
        });
    });
    
    // Track demo button clicks
    document.querySelectorAll('a[href="#demo"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Google Analytics event tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'demo_request', {
                    'event_category': 'Engagement',
                    'event_label': 'Demo Video Request',
                    'value': 1
                });
            }
            
            // Show demo modal or redirect to demo page
            showDemoModal();
        });
    });
}

// Demo modal
function showDemoModal() {
    // Create modal backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'demo-modal-backdrop';
    Object.assign(backdrop.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: '9999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '0',
        transition: 'opacity 0.3s ease'
    });
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'demo-modal';
    Object.assign(modal.style, {
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '2rem',
        maxWidth: '500px',
        width: '90%',
        textAlign: 'center',
        transform: 'scale(0.8)',
        transition: 'transform 0.3s ease'
    });
    
    modal.innerHTML = `
        <h3 style="margin-bottom: 1rem; color: #1e293b; font-size: 1.5rem;">Watch Vibe Meet AI in Action</h3>
        <p style="margin-bottom: 2rem; color: #64748b; line-height: 1.6;">
            See how our AI meeting assistant transforms your meetings with real-time transcription and smart summaries.
        </p>
        <div style="margin-bottom: 2rem;">
            <div style="width: 100%; height: 250px; background: #f3f4f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                <i class="fas fa-play" style="font-size: 3rem; color: #4f46e5;"></i>
            </div>
            <p style="font-size: 0.9rem; color: #64748b;">Demo video coming soon!</p>
        </div>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button class="btn-secondary" onclick="this.closest('.demo-modal-backdrop').remove()">Close</button>
            <button class="btn-primary" onclick="window.location.href='#contact'">Start Free Trial</button>
        </div>
    `;
    
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    
    // Animate in
    setTimeout(() => {
        backdrop.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    }, 100);
    
    // Close on backdrop click
    backdrop.addEventListener('click', function(e) {
        if (e.target === backdrop) {
            backdrop.remove();
        }
    });
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            backdrop.remove();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + (counter.textContent.includes('%') ? '%' : '+');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.textContent.includes('%') ? '%' : '+');
            }
        };
        
        // Start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.unobserve(counter);
            }
        });
        
        observer.observe(counter);
    });
}

// Initialize counter animations when DOM is ready
document.addEventListener('DOMContentLoaded', animateCounters);

// FAQ accordion functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        
        if (question && answer) {
            // Add click handler to question
            question.style.cursor = 'pointer';
            question.addEventListener('click', () => {
                item.classList.toggle('active');
                
                // Close other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        }
    });
}

// Initialize FAQ when DOM is ready
document.addEventListener('DOMContentLoaded', initFAQ);

// Pricing calculator (future enhancement)
function initPricingCalculator() {
    // This could be expanded to include a dynamic pricing calculator
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Monitor page load time
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_time', {
                'event_category': 'Performance',
                'event_label': 'Page Load',
                'value': Math.round(loadTime)
            });
        }
        
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
    });
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', function() {
    initPricingCalculator();
    initPerformanceMonitoring();
});

// Utility functions
const utils = {
    // Debounce function for performance
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Format numbers for display
    formatNumber: (num) => {
        return new Intl.NumberFormat().format(num);
    }
};

// Export for potential use in other scripts
window.VibeMeetAI = {
    utils,
    showNotification,
    showDemoModal
}; 