/**
 * data.js
 * Datos dinámicos: soluciones, planes, FAQ
 */

const DATA = {
    // Sistemas (un sistema por rubro, mismos planes y precios para los 3)
    solutions: [
        {
            id: "medicos",
            name: "GestionTec Médicos",
            rubric: "Consultorios y clínicas",
            description: "Turnos, historiales y facturación en un solo lugar.",
            status: "Disponible"
        },
        {
            id: "academias",
            name: "GestionTec Academias",
            rubric: "Academias y centros de enseñanza",
            description: "Alumnos, asistencia, pagos y cursos organizados.",
            status: "Disponible"
        },
        {
            id: "tiendas",
            name: "GestionTec Tiendas",
            rubric: "Tiendas y comercios",
            description: "Ventas, stock y clientes desde cualquier lugar.",
            status: "Disponible"
        }
    ],

    // Planes de suscripción
    plans: [
        {
            id: "inicial",
            name: "Inicial",
            price: 34900,
            currency: "ARS",
            period: "mes",
            description: "Para emprendimientos y negocios pequeños",
            highlight: false,
            features: [
                { text: "1 usuario", included: true },
                { text: "Módulo base completo", included: true },
                { text: "Soporte por email", included: true },
                { text: "Actualizaciones incluidas", included: true },
                { text: "Múltiples usuarios", included: false },
                { text: "Reportes avanzados", included: false },
                { text: "Integraciones", included: false },
                { text: "API access", included: false }
            ],
            cta: "Suscribirme"
        },
        {
            id: "profesional",
            name: "Profesional",
            price: 69900,
            currency: "ARS",
            period: "mes",
            description: "Para pequeñas empresas en crecimiento",
            highlight: true,
            features: [
                { text: "Hasta 5 usuarios", included: true },
                { text: "Todos los módulos", included: true },
                { text: "Reportes y análisis", included: true },
                { text: "Integraciones básicas", included: true },
                { text: "Soporte prioritario", included: true },
                { text: "Actualizaciones incluidas", included: true },
                { text: "Hasta 20 usuarios", included: false },
                { text: "API access", included: false }
            ],
            cta: "Suscribirme"
        },
        {
            id: "empresa",
            name: "Empresa",
            price: 149900,
            currency: "ARS",
            period: "mes",
            description: "Para medianas empresas",
            highlight: false,
            features: [
                { text: "Hasta 20 usuarios", included: true },
                { text: "Todos los módulos", included: true },
                { text: "Reportes avanzados", included: true },
                { text: "Integraciones personalizadas", included: true },
                { text: "API access", included: true },
                { text: "SLA 99.9%", included: true },
                { text: "Soporte 24/7", included: true },
                { text: "Consultoría incluida", included: true }
            ],
            cta: "Suscribirme"
        }
    ],

    // Complementos opcionales (pago aparte, disponibles para cualquier plan/sistema)
    addons: [
        {
            id: "landing",
            name: "Página web promocional",
            description: "Sitio de presentación para tu negocio, listo para compartir.",
            price: null,
            currency: "ARS",
            period: "mes"
        }
    ],

    // Preguntas frecuentes
    faq: [
        {
            question: "¿Qué es GESTIONTEC?",
            answer: "Sistemas de administración por rubro: Médicos, Academias y Tiendas. Centralizan tu información y automatizan tareas repetitivas."
        },
        {
            question: "¿Qué incluye la suscripción?",
            answer: "Acceso al sistema, actualizaciones y soporte técnico. El alcance exacto depende del plan elegido."
        },
        {
            question: "¿Puedo cambiar de plan?",
            answer: "Sí, cuando quieras. El cambio se ajusta en tu próxima facturación."
        },
        {
            question: "¿Necesito instalar algo?",
            answer: "No. Es 100% en la nube: solo necesitás internet y un navegador."
        },
        {
            question: "¿Puedo usarlo desde el celular?",
            answer: "Sí, desde PC, tablet o celular, siempre sincronizado."
        },
        {
            question: "¿Cómo funciona el soporte?",
            answer: "Inicial: soporte por email. Profesional: soporte prioritario. Empresa: soporte 24/7 con consultoría."
        },
        {
            question: "¿Los precios pueden cambiar?",
            answer: "Pueden actualizarse, pero respetamos el precio vigente de tu suscripción activa y te avisamos antes de cualquier cambio."
        }
    ]
};

// Permite que el backend (Node) use los mismos datos que el frontend,
// evitando duplicar precios de planes en dos lugares.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA;
}
