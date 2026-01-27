# 🎮 Minecraft Portfolio - Wenqiang He

![Minecraft Theme](https://img.shields.io/badge/Theme-Minecraft-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

> Un portfolio personal único con temática de Minecraft, construido con HTML, CSS y JavaScript vanilla.

## 🌐 Demo en Vivo

Visita el portfolio en: **[https://wenqiange.github.io/Portfolio/](https://wenqiange.github.io/portfolio/)**

## ✨ Características

### 🎨 Diseño Visual
- **Estética Pixelada**: Fuentes pixel-art (Press Start 2P) y elementos con bordes gruesos
- **Paleta Minecraft**: Colores inspirados en el juego (verde hierba, marrón tierra, gris piedra)
- **Bloques Decorativos**: Animaciones de bloques flotantes estilo Minecraft
- **Texturas CSS**: Patrones de bloques creados con CSS puro

### 🔄 Animaciones
- **Scroll Fade**: Secciones con fade-in/out usando IntersectionObserver API
- **Partículas Flotantes**: Sistema de partículas ambient
- **Hover Effects**: Efectos de selección de bloque en cards
- **Bloques Animados**: Elementos decorativos con animación de flotación

### 🌓 Modos y Extras
- **Modo Día/Noche**: Toggle para cambiar entre temas claro y oscuro
- **Control de Sonido**: Opción para activar sonido ambiente
- **Easter Egg**: ¡Haz clic en el Creeper para una sorpresa! 💥

### ♿ Accesibilidad
- **WCAG AA Compliant**: Contraste adecuado y navegación por teclado
- **Reduced Motion**: Respeta preferencias de movimiento reducido
- **ARIA Labels**: Etiquetas descriptivas para lectores de pantalla
- **Focus Visible**: Indicadores claros de foco

### 📱 Responsive
- **Mobile-First**: Diseño optimizado para móviles
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 📁 Estructura del Proyecto

```
Portfolio/
├── index.html          # Estructura HTML principal
├── css/
│   ├── style.css       # Estilos globales y layout
│   └── minecraft.css   # Estilos temáticos Minecraft
├── js/
│   └── script.js       # Lógica de scroll, animaciones y interactividad
├── assets/
│   ├── images/         # Imágenes de proyectos (agregar las tuyas)
│   └── textures/       # Texturas adicionales (opcional)
└── README.md           # Este archivo
```

## 🚀 Configuración para GitHub Pages

### Paso 1: Crear repositorio
1. Crea un nuevo repositorio llamado `Portfolio` en GitHub
2. Asegúrate de que sea público

### Paso 2: Subir archivos
```bash
git init
git add .
git commit -m "Initial commit - Minecraft Portfolio"
git branch -M main
git remote add origin https://github.com/tu-usuario/Portfolio.git
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. Ve a **Settings** → **Pages** en tu repositorio
2. En **Source**, selecciona `Deploy from a branch`
3. Selecciona la rama `main` y carpeta `/ (root)`
4. Guarda y espera unos minutos

¡Tu portfolio estará disponible en `https://tu-usuario.github.io/Portfolio/`!

## 🛠️ Personalización

### Cambiar información personal
En `index.html`, busca y modifica:
- Tu nombre en la sección "About"
- Texto de presentación
- Links de GitHub, LinkedIn y email en la sección "Contact"

### Agregar proyectos
En la sección de proyectos, duplica una `<article class="project-card">` y modifica:
```html
<article class="project-card mc-card" tabindex="0">
    <div class="project-image">
        <div class="placeholder-image">
            <span class="placeholder-icon">🎮</span>
        </div>
    </div>
    <div class="project-info">
        <h3 class="project-title">Tu Proyecto</h3>
        <p class="project-description">
            Descripción de tu proyecto aquí.
        </p>
        <div class="project-links">
            <a href="https://github.com/tu-usuario/proyecto" 
               class="mc-button project-btn">
                <span class="btn-icon">📦</span>
                GitHub
            </a>
        </div>
    </div>
</article>
```

### Agregar imágenes reales a proyectos
Reemplaza el `placeholder-image` por una imagen real:
```html
<div class="project-image">
    <img src="assets/images/mi-proyecto.jpg" 
         alt="Descripción del proyecto"
         loading="lazy">
</div>
```

### Modificar colores
En `css/style.css`, ajusta las variables CSS:
```css
:root {
    --mc-green-grass: #5D8C3E;
    --mc-brown-dirt: #8B5A2B;
    --mc-gray-stone: #7D7D7D;
    /* ... más colores */
}
```

## 🎮 Easter Eggs

1. **Creeper**: Busca el Creeper semi-transparente en la sección de contacto. ¡Haz clic para ver qué pasa!
2. **Consola**: Abre la consola del navegador para ver mensajes especiales.

## 📝 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: 
  - Variables CSS
  - Flexbox & Grid
  - Animaciones @keyframes
  - Patrones CSS (sin imágenes)
- **JavaScript Vanilla**:
  - IntersectionObserver API
  - LocalStorage para preferencias
  - Event Listeners

## 🤝 Contribuciones

¡Las sugerencias y mejoras son bienvenidas! 

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo.

---

**Crafteado con ❤️ por Wenqiang He © 2026**

*"El límite es tu imaginación"* 🎮
