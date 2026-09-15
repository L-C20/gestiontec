/**
 * config.js
 * Configuración centralizada de GESTIONTEC.
 * Textos, contacto y contenidos que cambian con frecuencia van acá.
 */

const CONFIG = {
    app: {
        name: "GESTIONTEC",
        tagline: "Sistemas de administración para negocios",
        description: "Soluciones tecnológicas especializadas para tu negocio",
        url: "https://gestiontec.com"
    },

    contact: {
        email: "info@gestiontec.com",
        whatsapp: "+54XXXXXXXXX",
        phone: "+54XXXXXXXXX"
    },

    socials: {
        linkedin: "https://linkedin.com/company/gestiontec",
        twitter: "https://twitter.com/gestiontec",
        instagram: "https://instagram.com/gestiontec"
    },

    // Bloques de "¿Qué es GESTIONTEC?"
    whatIsFeatures: [
        { mark: "01", title: "Centralizás todo", text: "Sin planillas sueltas." },
        { mark: "02", title: "Automatizás procesos", text: "Menos tareas manuales." },
        { mark: "03", title: "Accedés desde cualquier lugar", text: "Cloud, en cualquier dispositivo." }
    ],

    benefits: [
        { title: "Más organización", description: "Toda tu información en un solo lugar" },
        { title: "Menos tareas manuales", description: "Automatizá lo repetitivo" },
        { title: "Mayor control", description: "Tu negocio, en tiempo real" },
        { title: "Reportes al instante", description: "Dashboards listos en segundos" },
        { title: "Se adapta a vos", description: "Personalización según tu rubro" },
        { title: "Soporte real", description: "Equipo disponible para ayudarte" }
    ],

    steps: [
        { number: 1, title: "Elegís tu sistema", description: "Según tu rubro" },
        { number: 2, title: "Lo configuramos", description: "A medida de tu negocio" },
        { number: 3, title: "Empezás a usarlo", description: "Acceso inmediato" },
        { number: 4, title: "Tenés soporte", description: "Siempre disponible" }
    ],

    // icon: "shield" | "lock" | "refresh" (ver ICONS en main.js)
    security: [
        { icon: "shield", title: "Desarrollo seguro", description: "Buenas prácticas desde el diseño" },
        { icon: "lock", title: "Acceso protegido", description: "Autenticación y permisos por usuario" },
        { icon: "refresh", title: "Siempre actualizado", description: "Mejoras y parches regulares" }
    ],

    growthPoints: [
        { title: "Escalabilidad", description: "Crece sin límites técnicos" },
        { title: "Flexibilidad", description: "Cambiá de plan cuando quieras" },
        { title: "Integración", description: "Se conecta con tus herramientas" }
    ]
};
