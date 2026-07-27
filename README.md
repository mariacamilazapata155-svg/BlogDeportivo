# Blog Deportivo

Blog estático multi-página sobre el mundo del deporte: fútbol, tenis, NBA, F1, NFL y MotoGP. Construido con HTML, CSS y JavaScript puro, sin frameworks ni dependencias externas.

> **Demo en vivo:** reemplaza esta URL tras desplegar en GitHub Pages → `https://tu-usuario.github.io/Myblog/`

---

## Características

- Diseño editorial responsive con paleta cálida y tipografías Google Fonts
- Navegación sticky con menú hamburguesa en móvil
- Sección de deportes con tarjetas interactivas y panel lateral de detalle
- Perfiles de deportistas con estadísticas y noticias relacionadas
- Noticias filtrables por disciplina (JavaScript vanilla)
- Timeline de memorias históricas y calendario de torneos
- Meta tags SEO y Open Graph en todas las páginas

---

## Estructura del proyecto

```
Myblog/
├── index.html          # Inicio con hero y accesos rápidos
├── noticias.html       # Noticias con filtro por deporte
├── deportes.html       # Tarjetas interactivas por disciplina
├── deportistas.html    # Perfiles de atletas destacados
├── memorias.html       # Momentos históricos del deporte
├── torneos.html        # Competencias y calendario
├── styles.css          # Estilos globales
├── script.js           # Nav, menú móvil, filtros y footer
├── .gitignore
├── images/
│   ├── header.png      # Banner del encabezado
│   └── kimich.jpg      # Foto de deportista (ejemplo)
└── README.md
```

---

## Cómo correrlo localmente

No requiere instalación. Abre `index.html` en tu navegador o usa Live Server:

```bash
# Con Live Server (VS Code)
# Clic derecho en index.html → "Open with Live Server"
```

Se recomienda Live Server para evitar problemas con rutas de imágenes locales.

---

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| HTML5 | Estructura semántica multi-página |
| CSS3 | Grid, variables CSS, diseño responsive |
| JavaScript (vanilla) | Nav activo, menú móvil, filtros, paneles |
| Google Fonts | Playfair Display + Source Serif 4 |

---

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub y sube el proyecto:

```bash
git init
git add .
git commit -m "Initial commit: Blog Deportivo"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/Myblog.git
git push -u origin main
```

2. En GitHub ve a **Settings → Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. En unos minutos tu sitio estará en `https://TU-USUARIO.github.io/Myblog/`.

5. Actualiza la URL de demo al inicio de este README.

### Otras opciones de despliegue

- **Netlify** — arrastra la carpeta en [netlify.com](https://netlify.com)
- **Vercel** — conecta el repositorio y despliega con un clic

---

## Paleta de colores

| Color | Hex | Uso |
|-------|-----|-----|
| Fondo principal | `#f5f3ef` | Cuerpo de la página |
| Superficie | `#faf8f5` | Tarjetas y artículos |
| Oscuro cálido | `#2c2a27` | Nav, footer, botones |
| Acento tierra | `#9e8f7a` | Bordes, etiquetas, títulos |
| Texto secundario | `#5a5550` | Párrafos |

---

## Cómo agregar contenido

### Nueva noticia

Copia un bloque `<article class="news-card">` en `noticias.html` y asigna `data-category`:

```html
<article class="news-card" data-category="futbol">
    <p class="news-card-tag">Fútbol</p>
    <h3>Título de la noticia</h3>
    <p class="news-card-date">Mes 2026</p>
    <p class="news-card-excerpt">Resumen breve...</p>
</article>
```

Categorías válidas para el filtro: `futbol`, `tenis`, `nba`, `f1`, `nfl`, `motogp`.

---

## Mejoras futuras

- [ ] Formulario de contacto
- [ ] Buscador de artículos
- [ ] Modo oscuro
- [ ] Optimizar imágenes (WebP)
- [ ] Dominio personalizado

---

## Licencia

© 2026 MyBlog · Todos los derechos reservados.
