/**
 * data.js
 * Datos dinámicos: soluciones, planes, FAQ
 */

const DATA = {
    // Soluciones
    solutions: [
        {
            id: "quirogestion",
            name: "QuiroGest",
            rubric: "Consultorios",
            description: "Sistema especializado para la gestión integral de consultorios odontológicos y de salud",
            features: [
                "Gestión de turnos",
                "Historiales de pacientes",
                "Facturación y cobros",
                "Control de inventario",
                "Reportes y estadísticas"
            ],
            status: "Disponible",
            cta: "Conocer más"
        },
        {
            id: "solution-2",
            name: "ComercioSystem",
            rubric: "Comercios",
            description: "Solución integral para tiendas y comercios minoristas",
            features: [
                "Punto de venta",
                "Gestión de inventario",
                "Control de ventas",
                "Registros de clientes",
                "Análisis de ventas"
            ],
            status: "En desarrollo",
            cta: "Notificarme"
        },
        {
            id: "solution-3",
            name: "ProGest",
            rubric: "Profesionales",
            description: "Sistema para profesionales independientes que necesitan organizar su trabajo",
            features: [
                "Agenda profesional",
                "Gestión de clientes",
                "Cotizaciones",
                "Facturación",
                "Seguimiento de proyectos"
            ],
            status: "En desarrollo",
            cta: "Notificarme"
        }
    ],

    // Planes de suscripción
    plans: [
        {
            id: "inicial",
            name: "Inicial",
            price: 9900,
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
            cta: "Solicitar información"
        },
        {
            id: "profesional",
            name: "Profesional",
            price: 24900,
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
            cta: "Solicitar información"
        },
        {
            id: "empresa",
            name: "Empresa",
            price: 39900,
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
            cta: "Solicitar información"
        }
    ],

    // Preguntas frecuentes
    faq: [
        {
            question: "¿Qué es GESTIONTEC?",
            answer: "GESTIONTEC es una plataforma de sistemas de administración especializados para distintos tipos de negocios. Ofrecemos soluciones que centralizan información, automatizan procesos y facilitan la gestión empresarial."
        },
        {
            question: "¿Qué incluye la suscripción?",
            answer: "Cada plan incluye acceso al sistema, actualizaciones, soporte técnico y posibilidad de personalización según el plan elegido. Consulta los detalles de cada plan para conocer exactamente qué se incluye."
        },
        {
            question: "¿Puedo cambiar de plan?",
            answer: "Sí, puedes cambiar de plan en cualquier momento. Los cambios se ajustan proporcionalmente en tu próxima facturación."
        },
        {
            question: "¿El sistema se adapta a mi rubro?",
            answer: "Contamos con soluciones especializadas para distintos rubros. Si tu sector no está cubierto, podemos personalizar una solución. Contactanos para más detalles."
        },
        {
            question: "¿Necesito instalar algo?",
            answer: "No. GESTIONTEC es una solución en la nube (cloud). Solo necesitas acceso a internet y un navegador web. Funciona desde cualquier dispositivo."
        },
        {
            question: "¿Puedo usarlo desde distintos dispositivos?",
            answer: "Sí. Como es una solución web, puedes acceder desde computadoras, notebooks, tablets y smartphones. Tu información siempre está sincronizada."
        },
        {
            question: "¿Cómo funciona el soporte?",
            answer: "El soporte varía según el plan. Los planes Inicial incluyen soporte por email, Profesional incluye soporte prioritario, y Empresa incluye soporte 24/7 con consultoría."
        },
        {
            question: "¿Los precios pueden cambiar?",
            answer: "Los precios pueden estar sujetos a cambios. Sin embargo, respetamos los precios vigentes para suscripciones activas. Te notificaremos con anticipación sobre cualquier cambio."
        }
    ]
};
