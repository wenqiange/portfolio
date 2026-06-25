# Portfolio - Wenqiang He

Portfolio personal desarrollado con HTML, CSS y JavaScript vanilla, con una temática visual inspirada en Minecraft. El sitio es responsive, accesible y no depende de frameworks ni librerías externas.

## Demo

Disponible en: [https://wenqiange.github.io/portfolio/](https://wenqiange.github.io/portfolio/)

## Características

### Diseño
- Estética pixel-art con tipografías Press Start 2P y VT323.
- Paleta de colores inspirada en Minecraft (hierba, tierra, piedra).
- Elementos decorativos y texturas generadas íntegramente con CSS.

### Interacción
- Transiciones de secciones con fade-in mediante la IntersectionObserver API.
- Sistema de partículas ambientales.
- Efectos hover en las tarjetas de proyecto.
- Modo día/noche con persistencia en localStorage.
- Soporte multidioma (español / inglés).
- Control de audio ambiente.

### Accesibilidad
- Contraste conforme a WCAG AA y navegación por teclado.
- Soporte de `prefers-reduced-motion`.
- Etiquetas ARIA e indicadores de foco visibles.

### Responsive
- Diseño mobile-first con breakpoints para móvil, tablet y escritorio.

## Estructura del proyecto

```
portfolio/
├── index.html          # Estructura HTML principal
├── css/
│   ├── style.css       # Estilos globales y layout
│   └── minecraft.css   # Estilos temáticos
├── js/
│   └── script.js       # Lógica de scroll, animaciones e interactividad
├── assets/
│   ├── images/         # Imágenes de proyectos
│   └── textures/       # Texturas adicionales
└── README.md
```

## Tecnologías

- **HTML5**: estructura semántica.
- **CSS3**: variables, Flexbox, Grid, animaciones `@keyframes` y patrones sin imágenes.
- **JavaScript (vanilla)**: IntersectionObserver API, localStorage y gestión de eventos.

## Ejecución local

Al tratarse de un sitio estático, basta con clonar el repositorio y abrir `index.html` en el navegador. Para evitar restricciones del protocolo `file://`, se recomienda servirlo con un servidor local:

```bash
python -m http.server 8000
```

Y acceder a `http://localhost:8000`.

## Licencia

Distribuido bajo la Licencia MIT.

---

Wenqiang He © 2026
