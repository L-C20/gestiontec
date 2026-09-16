/**
 * data.js
 * Datos dinámicos: soluciones, planes, FAQ
 */

const DATA = {
    // Sistemas (un sistema por rubro). Cada uno tiene sus propios 3 planes
    // (Inicial/Profesional/Empresa), con funciones y precios propios — lo
    // que se puede hacer en el sistema (y lo que cuesta) es distinto según
    // el rubro, no una lista genérica repetida.
    solutions: [
        {
            id: "medicos",
            name: "GestionTec Médicos",
            rubric: "Consultorios y clínicas",
            description: "Turnos, historiales y facturación en un solo lugar.",
            status: "Disponible",
            plans: [
                {
                    id: "inicial",
                    name: "Inicial",
                    price: 44900,
                    currency: "ARS",
                    period: "mes",
                    description: "Para profesionales y consultorios chicos",
                    highlight: false,
                    features: [
                        { text: "Agenda de turnos", included: true },
                        { text: "Historia clínica básica", included: true },
                        { text: "1 usuario", included: true },
                        { text: "Soporte por email", included: true },
                        { text: "Recordatorios por WhatsApp", included: false },
                        { text: "Facturación electrónica", included: false },
                        { text: "Reportes clínicos", included: false },
                        { text: "API access", included: false }
                    ],
                    cta: "Suscribirme"
                },
                {
                    id: "profesional",
                    name: "Profesional",
                    price: 89900,
                    currency: "ARS",
                    period: "mes",
                    description: "Para clínicas en crecimiento",
                    highlight: true,
                    features: [
                        { text: "Agenda de turnos", included: true },
                        { text: "Historia clínica completa", included: true },
                        { text: "Recordatorios por WhatsApp", included: true },
                        { text: "Facturación electrónica", included: true },
                        { text: "Hasta 5 usuarios", included: true },
                        { text: "Soporte prioritario", included: true },
                        { text: "Hasta 20 usuarios", included: false },
                        { text: "API access", included: false }
                    ],
                    cta: "Suscribirme"
                },
                {
                    id: "empresa",
                    name: "Empresa",
                    price: 199900,
                    currency: "ARS",
                    period: "mes",
                    description: "Para centros médicos con varias sedes",
                    highlight: false,
                    features: [
                        { text: "Historia clínica completa", included: true },
                        { text: "Facturación electrónica", included: true },
                        { text: "Múltiples consultorios", included: true },
                        { text: "Reportes clínicos avanzados", included: true },
                        { text: "Hasta 20 usuarios", included: true },
                        { text: "API access", included: true },
                        { text: "SLA 99.9%", included: true },
                        { text: "Soporte 24/7", included: true }
                    ],
                    cta: "Suscribirme"
                }
            ]
        },
        {
            id: "academias",
            name: "GestionTec Academias",
            rubric: "Academias y centros de enseñanza",
            description: "Alumnos, asistencia, pagos y cursos organizados.",
            status: "Disponible",
            plans: [
                {
                    id: "inicial",
                    name: "Inicial",
                    price: 29900,
                    currency: "ARS",
                    period: "mes",
                    description: "Para academias y talleres chicos",
                    highlight: false,
                    features: [
                        { text: "Alumnos y matrículas", included: true },
                        { text: "Control de asistencia", included: true },
                        { text: "1 usuario", included: true },
                        { text: "Soporte por email", included: true },
                        { text: "Cobro de cuotas online", included: false },
                        { text: "Comunicados por WhatsApp", included: false },
                        { text: "Reportes de rendimiento", included: false },
                        { text: "API access", included: false }
                    ],
                    cta: "Suscribirme"
                },
                {
                    id: "profesional",
                    name: "Profesional",
                    price: 59900,
                    currency: "ARS",
                    period: "mes",
                    description: "Para academias en crecimiento",
                    highlight: true,
                    features: [
                        { text: "Alumnos y matrículas", included: true },
                        { text: "Control de asistencia", included: true },
                        { text: "Cobro de cuotas online", included: true },
                        { text: "Comunicados por WhatsApp", included: true },
                        { text: "Hasta 5 usuarios", included: true },
                        { text: "Soporte prioritario", included: true },
                        { text: "Hasta 20 usuarios", included: false },
                        { text: "API access", included: false }
                    ],
                    cta: "Suscribirme"
                },
                {
                    id: "empresa",
                    name: "Empresa",
                    price: 129900,
                    currency: "ARS",
                    period: "mes",
                    description: "Para instituciones con varias sedes",
                    highlight: false,
                    features: [
                        { text: "Cobro de cuotas online", included: true },
                        { text: "Comunicados por WhatsApp", included: true },
                        { text: "Múltiples sedes", included: true },
                        { text: "Reportes de rendimiento avanzados", included: true },
                        { text: "Hasta 20 usuarios", included: true },
                        { text: "API access", included: true },
                        { text: "SLA 99.9%", included: true },
                        { text: "Soporte 24/7", included: true }
                    ],
                    cta: "Suscribirme"
                }
            ]
        },
        {
            id: "tiendas",
            name: "GestionTec Tiendas",
            rubric: "Tiendas y comercios",
            description: "Ventas, stock y clientes desde cualquier lugar.",
            status: "Disponible",
            plans: [
                {
                    id: "inicial",
                    name: "Inicial",
                    price: 34900,
                    currency: "ARS",
                    period: "mes",
                    description: "Para emprendimientos y tiendas chicas",
                    highlight: false,
                    features: [
                        { text: "Punto de venta", included: true },
                        { text: "Control de stock básico", included: true },
                        { text: "1 usuario", included: true },
                        { text: "Soporte por email", included: true },
                        { text: "Facturación electrónica", included: false },
                        { text: "Múltiples sucursales", included: false },
                        { text: "Reportes de ventas", included: false },
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
                    description: "Para comercios en crecimiento",
                    highlight: true,
                    features: [
                        { text: "Punto de venta", included: true },
                        { text: "Control de stock avanzado", included: true },
                        { text: "Facturación electrónica", included: true },
                        { text: "Reportes de ventas", included: true },
                        { text: "Hasta 5 usuarios", included: true },
                        { text: "Soporte prioritario", included: true },
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
                    description: "Para cadenas con varias sucursales",
                    highlight: false,
                    features: [
                        { text: "Facturación electrónica", included: true },
                        { text: "Control de stock avanzado", included: true },
                        { text: "Múltiples sucursales", included: true },
                        { text: "Reportes de ventas avanzados", included: true },
                        { text: "Hasta 20 usuarios", included: true },
                        { text: "API access", included: true },
                        { text: "SLA 99.9%", included: true },
                        { text: "Soporte 24/7", included: true }
                    ],
                    cta: "Suscribirme"
                }
            ]
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
