# GESTIONTEC

**Sistemas de administración especializados para tu negocio**

Sitio web comercial profesional para GESTIONTEC, una marca de software empresarial especializado en gestión y administración de negocios.

---

## 📋 Descripción del Proyecto

GESTIONTEC es un sitio web moderno, responsivo y optimizado que actúa como portfolio comercial y punto de contacto para potenciales clientes. Presenta soluciones de software especializadas para diferentes rubros de negocio.

**Características principales:**
- ✅ Completamente responsivo (320px → 1440px+)
- ✅ Renderizado dinámico de soluciones, planes y FAQ
- ✅ Formulario de contacto con validación avanzada
- ✅ SEO optimizado (meta tags, Open Graph, schema.org)
- ✅ Accesibilidad WCAG AA
- ✅ Performance optimizado
- ✅ Sin dependencias externas (vanilla JavaScript, HTML5, CSS3)

---

## 🛠 Tecnologías

- **HTML5** — Estructura semántica
- **CSS3** — Diseño responsivo, variables CSS, animaciones
- **JavaScript Vanilla** — Renderizado dinámico, validación, interactividad
- **Google Fonts** — Inter (tipografía profesional)

**Sin frameworks ni librerías externas** — Arquitectura simple y mantenible

---

## 📁 Estructura del Proyecto

```
/
├── index.html              # Página principal (única)
├── css/
│   └── styles.css         # Todos los estilos
├── js/
│   ├── config.js          # Configuración (integrada en index.html)
│   ├── data.js            # Datos (integrada en index.html)
│   └── main.js            # Lógica (integrada en index.html)
├── assets/
│   └── images/            # Imágenes optimizadas (cuando se agreguen)
├── README.md              # Esta documentación
└── .gitignore             # Exclusiones Git
```

**Nota:** Por razones de compatibilidad con archivos locales (file://), toda la lógica JavaScript está incrustada directamente en `index.html` dentro de un `<script>`.

---

## 🎨 Diseño & Identidad Visual

### Paleta de Colores

| Rol | Color | HEX |
|-----|-------|-----|
| Primario | Azul Petróleo | `#0F3B52` |
| Primario Claro | Azul Oscuro | `#1a5f7a` |
| Acento | Azul Cielo | `#0EA5E9` |
| Éxito | Verde | `#10B981` |
| Fondo | Blanco | `#FFFFFF` |
| Fondo Alt | Gris Muy Claro | `#F8F9FB` |
| Texto | Gris Oscuro | `#1A1A1A` |

### Tipografía

- **Font:** Inter (Google Fonts)
- **Weights:** 400, 500, 600, 700
- **Tamaños:** Escalables desde 12px (mobile) a 48px (h1)

### Responsive Breakpoints

- **320px** — Mobile muy pequeño
- **480px** — Mobile
- **600px** — Tablet pequeño
- **768px** — Tablet
- **1024px** — Desktop
- **1440px+** — Desktop grande

---

## 📄 Secciones del Sitio

1. **Header** — Logo, navegación, CTA sticky
2. **Hero** — Propuesta principal, CTAs
3. **¿Qué es GESTIONTEC?** — Explicación de la marca
4. **Nuestras Soluciones** — Cards dinámicas (3 soluciones)
5. **Beneficios** — Grid de 8 beneficios
6. **Cómo Funciona** — 4 pasos numerados
7. **Planes y Precios** — 3 planes de suscripción
8. **Seguridad y Confianza** — 3 puntos de seguridad
9. **Pensado para Crecer** — Concepto de escalabilidad
10. **Preguntas Frecuentes** — Acordeón con 8 FAQs
11. **Contacto** — Formulario validado
12. **Footer** — Links, copyright dinámico

---

## 🚀 Funcionalidades Implementadas

### Renderizado Dinámico

✅ **Soluciones** — 3 soluciones con características renderizadas desde datos
✅ **Planes** — 3 planes con precios ($9.900, $24.900, $39.900) y características dinámicas
✅ **Beneficios** — 8 beneficios renderizados en grid 4x2
✅ **Pasos** — 4 pasos con números circulares animados
✅ **FAQ** — 8 preguntas con acordeón funcional
✅ **Puntos de Seguridad** — 3 items dinámicos
✅ **Puntos de Crecimiento** — 3 items dinámicos

### Interactividad

✅ **Menú Hamburguesa** — Toggle en mobile (< 768px)
✅ **Acordeón FAQ** — Abrir/cerrar preguntas
✅ **Smooth Scroll** — Navegación interna suave
✅ **Validación de Formulario** — En tiempo real + al enviar
✅ **Contador de Caracteres** — En textarea (máx 500)
✅ **Feedback Visual** — Colores de error/éxito en campos

### Animaciones

✅ **Fade-In Escalonado** — Cards al cargar (staggered 0.6s)
✅ **Pulse** — Números de pasos (2s infinite)
✅ **Float** — Visual del hero (6s infinite)
✅ **Ripple** — Botones al hover

---

## 📱 Responsividad

Totalmente responsivo sin scroll horizontal:

- ✅ **Desktop (1440px)** — Doble columna, tamaños óptimos
- ✅ **Tablet (768px)** — Grids adaptados, espacios reducidos
- ✅ **Mobile (375px)** — Single column, hero sin visual, compacto
- ✅ **Mobile pequeño (320px)** — Ultra compacto, font sizes reducidos

**Testeo realizado en:**
- 320px, 375px, 480px, 600px, 768px, 1024px, 1440px

---

## 🔍 SEO & Accesibilidad

### SEO

✅ Meta tags completos (description, keywords, robots)
✅ Open Graph (og:title, og:description, og:image)
✅ Twitter Card (twitter:card, twitter:image)
✅ Canonical URL
✅ Structured Data (JSON-LD) — SoftwareApplication, Organization
✅ HTML lang="es"
✅ DNS Prefetch para Google Fonts
✅ Headings semánticos H1 → H6

### Accesibilidad (WCAG AA)

✅ Focus visible (outline azul)
✅ Contraste suficiente (AA)
✅ HTML semántico (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
✅ Labels asociados con inputs
✅ Navegación por teclado completa
✅ `prefers-reduced-motion` respetado
✅ Estructura clara de headings
✅ Alt text preparado para imágenes

---

## 📝 Modificación de Contenido

### Cambiar Precios

Editar `index.html`, buscar `const DATA = {` y modificar en `plans`:

```javascript
{
    id: "inicial",
    price: 9900,  // ← Cambiar aquí
    ...
}
```

### Agregar Nueva Solución

En el mismo objeto `DATA.solutions`:

```javascript
{
    id: "nueva-solucion",
    name: "NuevaSolución",
    rubric: "Rubro",
    description: "...",
    features: ["feature1", "feature2", ...],
    status: "Disponible",
    cta: "Conocer más"
}
```

### Cambiar Beneficios

En `const CONFIG = {`, editar `benefits`:

```javascript
benefits: [
    { title: "Título", description: "Descripción" },
    ...
]
```

### Modificar Preguntas FAQ

En `const DATA = {`, editar `faq`:

```javascript
faq: [
    { question: "¿Pregunta?", answer: "Respuesta..." },
    ...
]
```

---

## 🔧 Configuración para Backend

El formulario está preparado para integración backend:

```html
<form class="contact__form" id="contactForm" method="POST" action="#">
```

**Para integrar backend:**
1. Cambiar `action="#"` a tu endpoint (ej: `/api/contact`)
2. Cambiar `method="POST"` según tu API
3. Remover o adaptar la validación frontend simulada
4. Agregar CSRF token si es necesario

**Campos del formulario:**
- `name` — Nombre completo
- `business` — Nombre del negocio
- `category` — Rubro (select)
- `email` — Email
- `phone` — Teléfono (opcional)
- `message` — Mensaje

---

## 📊 Validación del Formulario

**Frontend:**

- ✅ Nombre: Requerido, min 3 caracteres
- ✅ Negocio: Requerido, min 3 caracteres
- ✅ Rubro: Requerido (select)
- ✅ Email: Requerido, formato válido
- ✅ Teléfono: Opcional, formato flexible
- ✅ Mensaje: Requerido, 10-500 caracteres

**Feedback:**
- ✅ Errores específicos bajo cada campo
- ✅ Campo inválido: Borde rojo + fondo suave rojo
- ✅ Campo válido: Borde verde + fondo suave verde
- ✅ Contador de caracteres en mensaje

---

## 🎯 Variables CSS Personalizables

Editar `css/styles.css` en `:root`:

```css
:root {
    --color-primary: #0F3B52;           /* Color principal */
    --color-primary-light: #1a5f7a;     /* Variación clara */
    --color-accent: #0EA5E9;            /* Color de acento */
    --color-success: #10B981;           /* Color de éxito */
    
    --space-4: 1rem;                    /* Espacios base */
    --font-size-base: 1rem;             /* Tamaño base de fuente */
    
    /* ... y muchas más */
}
```

---

## 🌐 Publicación

### Localmente

```bash
# Abrir directamente
open index.html

# O con un servidor simple
python -m http.server 8000
# Luego: http://localhost:8000
```

### En Producción

1. Subir archivos a tu servidor/hosting
2. Cambiar `og:url` en meta tags a tu dominio real
3. Cambiar `canonical` URL
4. Reemplazar email de contacto en `contactPoint` (schema.org)
5. Agregar endpoint real en formulario `action`

---

## 📈 Performance

**Optimizaciones implementadas:**

- ✅ CSS crítico inline
- ✅ JavaScript incrustado (sin requests adicionales)
- ✅ Zero dependencias externas
- ✅ Animaciones GPU-accelerated
- ✅ Variables CSS (reutilización)
- ✅ Colores de fondo alternados (reduce fatiga)

**Próximas optimizaciones (cuando se agreguen imágenes):**

- Lazy loading con `loading="lazy"`
- Webp con fallback PNG
- Srcset para responsive images
- Image optimization

---

## 📋 Checklist de Funcionalidad

- ✅ Todos los contenidos se renderizan dinámicamente
- ✅ Formulario valida correctamente
- ✅ Responsivo en todos los breakpoints
- ✅ Sin scroll horizontal
- ✅ Navegación por teclado funcional
- ✅ Focus visible en elementos interactivos
- ✅ Meta tags completados
- ✅ Open Graph configurado
- ✅ Schema.org estructurado
- ✅ Animaciones suaves
- ✅ Acordeón FAQ funcional
- ✅ Menú hamburguesa en mobile
- ✅ Smooth scroll en links
- ✅ Año dinámico en footer
- ✅ Contador de caracteres
- ✅ Feedback visual en formulario

---

## 🚀 Roadmap Futuro

### Fase 2: Backend & Integración

- [ ] Node.js + Express backend
- [ ] PostgreSQL database
- [ ] Autenticación JWT
- [ ] Email de contacto (SendGrid/SMTP)
- [ ] Endpoint para formulario

### Fase 3: Cliente & Panel

- [ ] Dashboard de clientes
- [ ] Login de usuarios
- [ ] Panel administrativo
- [ ] Gestión de suscripciones

### Fase 4: Sistemas Especializados

- [ ] QuiroGest completo
- [ ] ComercioSystem
- [ ] ProGest
- [ ] APIs para integraciones

---

## 📄 Licencia

© 2026 GESTIONTEC. Todos los derechos reservados.

---

## 📧 Contacto

- **Email:** info@gestiontec.com
- **Web:** https://gestiontec.com

---

**Desarrollado con HTML5, CSS3 y JavaScript Vanilla — Sin dependencias externas.**

*Última actualización: 2026-09-14*
