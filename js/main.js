/**
 * main.js
 * Renderizado dinámico e interactividad de GESTIONTEC.
 * Usa los datos globales definidos en config.js y data.js.
 */

// Iconos inline usados en la sección de Seguridad (mapeados por nombre en config.js)
const ICONS = {
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11A8 8 0 1 0 6.5 17.5"/><path d="M20 5v6h-6"/></svg>'
};

// Sistema seleccionado actualmente (afecta la sección de Planes y el checkout)
let selectedSystemId = DATA.solutions[0].id;

document.addEventListener('DOMContentLoaded', () => {
    renderWhatIs();
    renderHeroSystems();
    renderPricingSystemTabs();
    selectSystem(selectedSystemId);
    renderPlans();
    renderPricingAddon();
    renderFAQ();
    renderBenefits();
    renderSteps();
    renderSecurity();
    renderGrowthPoints();
    setupMenuToggle();
    setCurrentYear();
    setupFormValidation();
    setupCheckout();
    setupSmoothScroll();
    setupScrollReveal();
});

// ==================== QUÉ ES GESTIONTEC ====================

function renderWhatIs() {
    const el = document.getElementById('whatIsFeatures');
    if (!el) return;
    el.innerHTML = CONFIG.whatIsFeatures.map(f => `
        <div class="what-is__feature reveal">
            <span class="what-is__feature-mark">${f.mark}</span>
            <div>
                <p class="what-is__feature-title">${f.title}</p>
                <p class="what-is__feature-text">${f.text}</p>
            </div>
        </div>
    `).join('');
}

// ==================== SISTEMAS (hero + selector de planes) ====================

function renderHeroSystems() {
    const el = document.getElementById('soluciones');
    if (!el) return;

    el.innerHTML = DATA.solutions.map(s => `
        <button type="button" class="system-card reveal" data-system-id="${s.id}">
            <span class="system-card__badge ${s.status === 'Disponible' ? 'system-card__badge--available' : ''}">${s.status}</span>
            <h3 class="system-card__title">${s.name}</h3>
            <p class="system-card__desc">${s.description}</p>
            <span class="system-card__cta">Ver planes →</span>
        </button>
    `).join('');

    el.querySelectorAll('[data-system-id]').forEach(btn => {
        btn.addEventListener('click', () => selectSystem(btn.dataset.systemId, { scroll: true }));
    });
}

function renderPricingSystemTabs() {
    const el = document.getElementById('pricingSystemTabs');
    if (!el) return;

    el.innerHTML = DATA.solutions.map(s => `
        <button type="button" class="system-tab ${s.id === selectedSystemId ? 'system-tab--active' : ''}" data-system-id="${s.id}">${s.name}</button>
    `).join('');

    el.querySelectorAll('[data-system-id]').forEach(btn => {
        btn.addEventListener('click', () => selectSystem(btn.dataset.systemId));
    });
}

function selectSystem(systemId, { scroll = false } = {}) {
    selectedSystemId = systemId;
    const system = DATA.solutions.find(s => s.id === systemId);

    document.querySelectorAll('#pricingSystemTabs [data-system-id]').forEach(btn => {
        btn.classList.toggle('system-tab--active', btn.dataset.systemId === systemId);
    });

    const heading = document.getElementById('pricingSystemHeading');
    if (heading && system) heading.textContent = `Planes para ${system.name}`;

    if (scroll) {
        document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' });
    }
}

function renderPricingAddon() {
    const el = document.getElementById('pricingAddon');
    if (!el) return;

    el.innerHTML = DATA.addons.map(a => `
        <div class="addon-card">
            <div>
                <span class="addon-card__label">Complemento opcional</span>
                <h4 class="addon-card__title">${a.name}</h4>
                <p class="addon-card__desc">${a.description}</p>
            </div>
            <a href="#contacto" class="btn-secondary btn-sm">Consultar precio</a>
        </div>
    `).join('');
}

// ==================== PLANES ====================

function renderPlans() {
    const grid = document.getElementById('plansGrid');
    if (!grid) return;

    grid.innerHTML = `<div class="grid grid--3col pricing__grid">${DATA.plans.map(p => `
        <div class="plan-card ${p.highlight ? 'plan-card--highlight' : ''} reveal">
            ${p.highlight ? '<span class="plan-card__ribbon">Más elegido</span>' : ''}
            <h3 class="plan-card__name">${p.name}</h3>
            <p class="plan-card__desc">${p.description}</p>
            <div class="plan-card__price-row">
                <span class="plan-card__price">$${p.price.toLocaleString('es-AR')}</span>
                <span class="plan-card__period">${p.currency} / ${p.period}</span>
            </div>
            <ul class="plan-card__list">
                ${p.features.map(f => `
                    <li class="plan-card__list-item ${f.included ? '' : 'plan-card__list-item--off'}">${f.text}</li>
                `).join('')}
            </ul>
            <button class="btn-primary btn-block" data-plan-id="${p.id}" data-plan-name="${p.name}">${p.cta}</button>
        </div>
    `).join('')}</div>`;
}

// ==================== BENEFICIOS ====================

function renderBenefits() {
    const grid = document.getElementById('benefitsGrid');
    if (!grid) return;

    grid.innerHTML = `<div class="grid grid--3col">${CONFIG.benefits.map((b, i) => `
        <div class="benefit-card reveal">
            <span class="benefit-card__icon">${String(i + 1).padStart(2, '0')}</span>
            <h4 class="benefit-card__title">${b.title}</h4>
            <p class="benefit-card__text">${b.description}</p>
        </div>
    `).join('')}</div>`;
}

// ==================== CÓMO FUNCIONA ====================

function renderSteps() {
    const container = document.getElementById('stepsContainer');
    if (!container) return;

    container.innerHTML = `<div class="grid grid--4col steps">${CONFIG.steps.map(s => `
        <div class="step reveal">
            <div class="step__circle">${s.number}</div>
            <h4 class="step__title">${s.title}</h4>
            <p class="step__text">${s.description}</p>
        </div>
    `).join('')}</div>`;
}

// ==================== SEGURIDAD ====================

function renderSecurity() {
    const el = document.getElementById('securityPoints');
    if (!el) return;

    el.innerHTML = `<div class="grid grid--3col">${CONFIG.security.map(s => `
        <div class="security-card reveal">
            <span class="security-card__icon">${ICONS[s.icon] || ''}</span>
            <h4 class="security-card__title">${s.title}</h4>
            <p class="security-card__text">${s.description}</p>
        </div>
    `).join('')}</div>`;
}

// ==================== PENSADO PARA CRECER ====================

function renderGrowthPoints() {
    const el = document.getElementById('growthPoints');
    if (!el) return;

    el.innerHTML = `<div class="grid grid--3col">${CONFIG.growthPoints.map(p => `
        <div class="growth-card reveal">
            <h5 class="growth-card__title">${p.title}</h5>
            <p class="growth-card__text">${p.description}</p>
        </div>
    `).join('')}</div>`;
}

// ==================== FAQ ====================

function renderFAQ() {
    const list = document.getElementById('faqList');
    if (!list) return;

    list.innerHTML = DATA.faq.map((item, i) => `
        <div class="faq-item reveal">
            <button class="faq-question" data-index="${i}" aria-expanded="false">
                <span>${item.question}</span>
                <span class="faq-toggle">+</span>
            </button>
            <div class="faq-answer" data-index="${i}">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');

    setupAccordion();
}

function setupAccordion() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function () {
            const idx = this.getAttribute('data-index');
            const item = this.closest('.faq-item');
            const answer = document.querySelector(`.faq-answer[data-index="${idx}"]`);
            const toggle = this.querySelector('.faq-toggle');
            const isOpen = item.classList.contains('active');

            document.querySelectorAll('.faq-item.active').forEach(openItem => {
                if (openItem !== item) {
                    openItem.classList.remove('active');
                    openItem.querySelector('.faq-answer').style.maxHeight = '0';
                    openItem.querySelector('.faq-toggle').textContent = '+';
                    openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            item.classList.toggle('active', !isOpen);
            answer.style.maxHeight = isOpen ? '0' : answer.scrollHeight + 'px';
            toggle.textContent = isOpen ? '+' : '−';
            this.setAttribute('aria-expanded', String(!isOpen));
        });
    });
}

// ==================== MENÚ HAMBURGUESA ====================

function setupMenuToggle() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.header__nav');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('is-open');
        this.classList.toggle('active', isOpen);
        this.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            nav.classList.remove('is-open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ==================== AÑO DINÁMICO ====================

function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) yearElement.textContent = new Date().getFullYear();
}

// ==================== VALIDACIÓN DE FORMULARIO ====================

function setupFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const fields = {
        name: document.getElementById('formName'),
        business: document.getElementById('formBusiness'),
        category: document.getElementById('formCategory'),
        email: document.getElementById('formEmail'),
        phone: document.getElementById('formPhone'),
        message: document.getElementById('formMessage')
    };

    fields.name.addEventListener('blur', () => validateField('name', fields.name.value));
    fields.business.addEventListener('blur', () => validateField('business', fields.business.value));
    fields.category.addEventListener('change', () => validateField('category', fields.category.value));
    fields.email.addEventListener('blur', () => validateField('email', fields.email.value));
    fields.phone.addEventListener('blur', () => validateField('phone', fields.phone.value));
    fields.message.addEventListener('blur', () => validateField('message', fields.message.value));

    fields.message.addEventListener('input', function () {
        const count = this.value.length;
        const counter = document.getElementById('charCount');
        if (counter) counter.textContent = count + '/500';
        if (count > 500) this.value = this.value.substring(0, 500);
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;
        Object.keys(fields).forEach(field => {
            if (!validateField(field, fields[field].value)) isValid = false;
        });
        if (!isValid) return;

        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        setTimeout(() => {
            const successMsg = document.getElementById('successMessage');
            successMsg.style.display = 'block';
            form.style.display = 'none';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Mensaje';
        }, 1200);
    });

    function validateField(field, rawValue) {
        const value = rawValue || '';
        const errorElement = document.getElementById(field + 'Error');
        const inputElement = fields[field];
        let isValid = true;
        let errorMsg = '';

        switch (field) {
            case 'name':
                if (!value.trim()) { errorMsg = 'El nombre es requerido'; isValid = false; }
                else if (value.trim().length < 3) { errorMsg = 'Debe tener al menos 3 caracteres'; isValid = false; }
                break;
            case 'business':
                if (!value.trim()) { errorMsg = 'El nombre del negocio es requerido'; isValid = false; }
                else if (value.trim().length < 3) { errorMsg = 'Debe tener al menos 3 caracteres'; isValid = false; }
                break;
            case 'category':
                if (!value) { errorMsg = 'Selecciona un rubro'; isValid = false; }
                break;
            case 'email':
                if (!value.trim()) { errorMsg = 'El email es requerido'; isValid = false; }
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) { errorMsg = 'Email inválido'; isValid = false; }
                break;
            case 'phone':
                if (value && !/^[\d\s\-+()]{6,}$/.test(value)) { errorMsg = 'Teléfono inválido'; isValid = false; }
                break;
            case 'message':
                if (!value.trim()) { errorMsg = 'El mensaje es requerido'; isValid = false; }
                else if (value.trim().length < 10) { errorMsg = 'Mínimo 10 caracteres'; isValid = false; }
                else if (value.length > 500) { errorMsg = 'Máximo 500 caracteres'; isValid = false; }
                break;
        }

        if (errorElement) errorElement.textContent = errorMsg;
        if (inputElement) {
            inputElement.classList.remove('form__invalid', 'form__valid');
            if (value.trim()) inputElement.classList.add(isValid ? 'form__valid' : 'form__invalid');
        }
        return isValid;
    }
}

// ==================== CHECKOUT (SUSCRIPCIÓN) ====================

function setupCheckout() {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;

    const form = document.getElementById('checkoutForm');
    const planNameEl = document.getElementById('checkoutPlanName');
    const systemNameEl = document.getElementById('checkoutSystemName');
    const planIdInput = document.getElementById('checkoutPlanId');
    const systemIdInput = document.getElementById('checkoutSystemId');
    const errorEl = document.getElementById('checkoutError');
    const submitBtn = document.getElementById('checkoutSubmit');

    function openModal(planId, planName) {
        const system = DATA.solutions.find(s => s.id === selectedSystemId) || DATA.solutions[0];
        form.reset();
        planIdInput.value = planId;
        systemIdInput.value = system.id;
        planNameEl.textContent = planName;
        systemNameEl.textContent = system.name;
        errorEl.textContent = '';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Ir a pagar';
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.hidden = true;
        document.body.style.overflow = '';
    }

    document.querySelectorAll('#plansGrid [data-plan-id]').forEach(btn => {
        btn.addEventListener('click', () => openModal(btn.dataset.planId, btn.dataset.planName));
    });

    modal.querySelectorAll('[data-checkout-close]').forEach(el => {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        errorEl.textContent = '';

        const name = document.getElementById('checkoutName').value.trim();
        const email = document.getElementById('checkoutEmail').value.trim();
        const phone = document.getElementById('checkoutPhone').value.trim();
        const business = document.getElementById('checkoutBusiness').value.trim();
        const planId = planIdInput.value;
        const systemId = systemIdInput.value;

        if (name.length < 3) {
            errorEl.textContent = 'Ingresá tu nombre completo.';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorEl.textContent = 'Ingresá un email válido.';
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Redirigiendo a Mercado Pago...';

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ planId, systemId, name, email, phone, business })
            });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'No pudimos procesar la solicitud.');
            }

            window.location.href = data.init_point;
        } catch (err) {
            errorEl.textContent = err.message || 'Ocurrió un error. Intentá de nuevo.';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Ir a pagar';
        }
    });
}

// ==================== SMOOTH SCROLL ====================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ==================== APARICIÓN AL HACER SCROLL ====================

function setupScrollReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => observer.observe(el));
}
