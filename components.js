document.addEventListener("DOMContentLoaded", function() {
    const APPS_SCRIPT_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbzsYHtOsiCpHlZxeFABfb1ECrrDG92_--ER30ZsRsRsuPDbo-qqUjuK5kBlXI66TQp_0w/exec';

    function trackEvent(eventName, params) {
        if (typeof window.gtag !== 'function') {
            return;
        }

        window.gtag('event', eventName, params);
    }

    function compactText(value) {
        return String(value || '').replace(/\s+/g, ' ').trim().slice(0, 100);
    }

    function classifyCtaHref(href) {
        if (!href) {
            return 'unknown';
        }

        if (href.startsWith('mailto:')) {
            return 'email';
        }

        if (href.startsWith('tel:')) {
            return 'phone';
        }

        if (href.includes('wa.me')) {
            return 'whatsapp';
        }

        if (/^https?:\/\//i.test(href)) {
            return 'external';
        }

        if (href.includes('contact.html')) {
            return 'contact_page';
        }

        if (href.includes('case-studies.html')) {
            return 'case_studies_page';
        }

        if (href.includes('portfolio.html')) {
            return 'portfolio_page';
        }

        return 'internal';
    }

    function initAnalyticsTracking() {
        document.addEventListener('click', (event) => {
            const clickedLink = event.target.closest('a');

            if (clickedLink) {
                const href = clickedLink.getAttribute('href') || '';
                const ctaType = classifyCtaHref(href);
                const shouldTrack = ctaType !== 'internal' || href.includes('contact.html') || href.includes('case-studies.html') || href.includes('portfolio.html');

                if (shouldTrack) {
                    trackEvent('cta_click', {
                        cta_text: compactText(clickedLink.dataset.analyticsLabel || clickedLink.textContent || 'link'),
                        cta_href: compactText(href),
                        cta_type: ctaType,
                        page_path: window.location.pathname
                    });
                }

                return;
            }

            const clickedButton = event.target.closest('button');
            if (clickedButton && clickedButton.type === 'submit') {
                const parentForm = clickedButton.closest('form');

                trackEvent('form_submit_click', {
                    form_source: parentForm?.dataset.formSource || 'unknown',
                    button_text: compactText(clickedButton.textContent || 'submit'),
                    page_path: window.location.pathname
                });
            }
        }, { passive: true });
    }

    // Inject premium styles
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = 'style.css';
    document.head.appendChild(styleLink);

    // Mouse tracking glow effect for buttons
    function initButtonGlowEffect() {
        const buttons = document.querySelectorAll('.btn-premium');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                button.style.setProperty('--mouse-x', x + 'px');
                button.style.setProperty('--mouse-y', y + 'px');
            });
        });
    }

    function setFormStatus(form, message, isError) {
        let statusNode = form.querySelector('.form-submit-status');

        if (!statusNode) {
            statusNode = document.createElement('p');
            statusNode.className = 'form-submit-status text-sm mt-3 font-medium';
            form.appendChild(statusNode);
        }

        statusNode.textContent = message;
        statusNode.style.color = isError ? '#ba1a1a' : '#0f766e';
    }

    // Submit website forms to Google Apps Script Web App.
    function initAppsScriptForms() {
        const forms = document.querySelectorAll('form[data-appscript-form]');

        forms.forEach((form) => {
            const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');

            form.addEventListener('submit', async (event) => {
                event.preventDefault();

                if (!form.checkValidity()) {
                    form.reportValidity();
                    trackEvent('form_submit_invalid', {
                        form_source: form.dataset.formSource || 'website-form',
                        page_path: window.location.pathname
                    });
                    return;
                }

                const formData = new FormData(form);
                const payload = new URLSearchParams();

                formData.forEach((value, key) => {
                    payload.append(key, String(value));
                });

                payload.append('source', form.dataset.formSource || 'website-form');
                payload.append('page', window.location.pathname.split('/').pop() || 'index.html');
                payload.append('submittedAt', new Date().toISOString());

                const originalButtonText = submitButton ? submitButton.textContent : '';

                try {
                    if (submitButton) {
                        submitButton.disabled = true;
                        submitButton.textContent = 'Sending...';
                    }

                    await fetch(APPS_SCRIPT_WEBAPP_URL, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                        },
                        body: payload.toString()
                    });

                    form.reset();
                    setFormStatus(form, 'Thanks! Your request has been submitted successfully.', false);
                    trackEvent('form_submit_success', {
                        form_source: form.dataset.formSource || 'website-form',
                        page_path: window.location.pathname
                    });
                } catch (error) {
                    console.error('Form submission failed:', error);
                    setFormStatus(form, 'Submission failed. Please try again in a moment.', true);
                    trackEvent('form_submit_failed', {
                        form_source: form.dataset.formSource || 'website-form',
                        page_path: window.location.pathname
                    });
                } finally {
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = originalButtonText;
                    }
                }
            });
        });
    }

    // Intersection Observer for scroll-reveal animations
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('section, .reveal, .page-section, .group');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => {
            el.classList.add('reveal');
            revealObserver.observe(el);
        });
    }

    // Enhanced Hero Section Animations
    function initHeroAnimations() {
        setTimeout(() => {
            const heroTitle = document.querySelector('h1.title-reveal');
            if (heroTitle) {
                heroTitle.classList.add('active');
                // Add glow effect to hero
                document.querySelector('main')?.classList.add('hero-active');
            }
        }, 200);

        // Parallax-like effect on hero elements on scroll
        window.addEventListener('scroll', () => {
            const heroSection = document.querySelector('[class*="min-h-\\[90vh\\]"]');
            if (heroSection) {
                const scrollPosition = window.scrollY;
                const opacity = Math.max(0, 1 - scrollPosition / 500);
                if (opacity > 0) {
                    heroSection.style.opacity = opacity;
                }
            }
        });
    }

    // Component Loader Function
    async function loadComponent(id, file) {
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.text();
            const placeholder = document.getElementById(id);
            if (placeholder) {
                placeholder.innerHTML = data;
                
                if (id === 'header-placeholder') {
                    setActiveLink();
                }
                
                if (id === 'footer-placeholder') {
                    const yearElement = document.getElementById('current-year');
                    if (yearElement) {
                        yearElement.textContent = new Date().getFullYear();
                    }
                }
            }
        } catch (error) {
            console.error(`Error loading ${file}:`, error);
        }
    }

    // Function to set the active class on the current page's nav link
    function setActiveLink() {
        const currentPage = window.location.pathname.split("/").pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.classList.add('text-blue-700', 'font-black');
                link.classList.remove('text-slate-600');
            } else {
                link.classList.add('text-slate-600');
                link.classList.remove('text-blue-700', 'font-black');
            }
        });
    }

    // Initial Loading Procedure
    (async () => {
        await Promise.all([
            loadComponent('header-placeholder', 'header.html'),
            loadComponent('footer-placeholder', 'footer.html')
        ]);
        
        // After components are loaded, initialize animations
        setTimeout(() => {
            initScrollReveal();
            initButtonGlowEffect();
            initHeroAnimations();
            initAppsScriptForms();
            initAnalyticsTracking();
        }, 100);
    })();
});
