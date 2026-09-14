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

    // Métricas mostradas debajo de los CTA del hero
    heroStats: [
        { value: "3", label: "Rubros cubiertos" },
        { value: "100%", label: "Basado en la nube" },
        { value: "24/7", label: "Acceso disponible" }
    ],

    // Bloques de "¿Qué es GESTIONTEC?"
    whatIsFeatures: [
        { mark: "01", title: "Centralizás todo", text: "Toda la información de tu negocio en un mismo lugar, sin planillas sueltas." },
        { mark: "02", title: "Automatizás procesos", text: "Menos tareas manuales repetitivas, más tiempo para lo importante." },
        { mark: "03", title: "Accedés desde cualquier lugar", text: "Cloud, disponible desde PC, tablet o celular en todo momento." }
    ],

    benefits: [
        { title: "Más organización", description: "Centraliza toda tu información en un único lugar" },
        { title: "Menos tareas manuales", description: "Automatiza procesos repetitivos y ahorra tiempo" },
        { title: "Información centralizada", description: "Accede a todos tus datos desde cualquier dispositivo" },
        { title: "Mayor control", description: "Visualiza el estado de tu negocio en tiempo real" },
        { title: "Acceso rápido", description: "Reportes y dashboards listos en segundos" },
        { title: "Adaptación a tu negocio", description: "Personalización según tus necesidades específicas" },
        { title: "Evolución constante", description: "Nuevas características y mejoras regularmente" },
        { title: "Soporte profesional", description: "Equipo dedicado disponible para ayudarte" }
    ],

    steps: [
        { number: 1, title: "Elegís una solución", description: "Selecciona el sistema que se adapte a tu negocio" },
        { number: 2, title: "Configuramos el sistema", description: "Personalizamos la solución según tus necesidades" },
        { number: 3, title: "Comenzás a utilizarlo", description: "Acceso inmediato a tu panel de administración" },
        { number: 4, title: "Recibís soporte", description: "Apoyo continuo y evolución de tu sistema" }
    ],

    // icon: "shield" | "lock" | "refresh" (ver ICONS en main.js)
    security: [
        { icon: "shield", title: "Desarrollo seguro", description: "Seguimos buenas prácticas de seguridad en el desarrollo" },
        { icon: "lock", title: "Protección de acceso", description: "Autenticación y control de permisos robustos" },
        { icon: "refresh", title: "Actualizaciones", description: "Parches de seguridad y mejoras regularmente" }
    ],

    growthPoints: [
        { title: "Escalabilidad", description: "Crece sin limitaciones técnicas" },
        { title: "Flexibilidad", description: "Cambia de plan o agrega módulos cuando lo necesites" },
        { title: "Integración", description: "Conecta con otras herramientas que ya utilizas" }
    ]
};
