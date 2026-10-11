# NXT Labs — Landing

Implementación en React + TypeScript + Tailwind del sitio de Figma
(`nxt_labs`, fileKey `5Ld3JevbGSXiK1NOhOoUZd`).

## Facturación — verificada con datos exactos de Figma (nodo 31:356)

Reconstruida con `get_design_context`, no con capturas. Corrige errores de la
versión anterior: hero gris plano `#F1F1F1` (sin textura), imagen del hero
rectangular 559x407 (no circular), las 6 características son **texto blanco
sobre la banda azul** (no tarjetas blancas), secciones alternadas con padding
lateral 200 / gap 100 / imagen 436x399, y botón/inputs/footer con las medidas
reales (compartidos por todas las páginas vía `MasInformacion` y `Footer`).
El Header marca "Soluciones" en verde en `/soluciones`, `/facturacion` y `/erp`.

**Pendiente de esta página:** la ilustración `otrofacturacion 1` (559x407) del
hero no está como archivo — hay un recuadro con la nota. Exportarla desde
Figma (nodo `31:625`) a `src/assets/` y pasarla como `heroImg` en
`pages/Facturacion.tsx`. La página **ERP** usa la misma estructura pero sus
textos exactos no se verificaron (solo se confirmó Facturación).

## Home — verificado pixel a pixel (get_design_context sobre toda la sección)

A diferencia del resto de las páginas, **Home ya se confirmó con datos
exactos de posición/tamaño de Figma** (no solo capturas de pantalla), y se
corrigieron 2 errores reales que tenía:

1. El hero no usa el padding estándar de 80px del resto de las secciones:
   el texto arranca en `x=162px` con padding vertical asimétrico
   (265px arriba / 144px abajo). Ya corregido.
2. El orden real de los logos de clientes es **SAFI, Elefante Azul, Banco
   Unión, TOTTO** en la fila 1 (yo había puesto TOTTO primero) — y la fila 2
   tiene un logo adicional no subido, va **centrada como grupo** en vez de
   de punta a punta. Ya corregido, con placeholders donde falta el archivo
   real (SAFI, Elefante Azul, y el logo desconocido de fila 2).

El resto de las páginas (Soluciones, Precios, Facturación, ERP, Contacto)
siguen construidas a partir de capturas de pantalla, no de datos exactos —
mismo motivo de siempre: el límite de llamadas de la API de Figma se agota
rápido y no llega para cubrir las 6 páginas en una sesión.

Las páginas **Facturación** y **ERP** (`/facturacion`, `/erp`) se
reconstruyeron a partir de una captura subida por el usuario mostrando ambas
una al lado de la otra: hero con fondo claro (no navy oscuro como en la
versión anterior) + botón "LEER MAS", banda azul (`nxt-blue`) con título y
grilla de 6 tarjetas "Característica 1-6", y 3 secciones alternadas de
texto+captura antes de "Más información". El copy de esas 6 características
y las 3 secciones sigue siendo texto de relleno (igual que en el Figma
real, que tampoco tiene copy final ahí todavía) — reemplazar por contenido
real de cada módulo cuando esté definido.

Las páginas **Precios** y **Contacto** (`/precios`, `/contacto`) también se
reconstruyeron a partir de una captura subida por el usuario: hero
**centrado** (título + ilustración geométrica decorativa), no el hero
left-aligned con eyebrow que tenía antes. Las ilustraciones geométricas
(cubos para Precios, hexágonos para Contacto) son aproximaciones a mano en
`components/GeometricArt.tsx` — no son un asset exportado de Figma, porque
no se subió ese archivo. Los 4 planes de Precios y los 3 canales de
Contacto usan el botón sólido verde real (`btn-solid`) en vez de los botones
outline que tenía antes.

## Páginas

Inicio (`/`), **Soluciones** (`/soluciones` — nueva, agregada a partir de la
captura subida por el usuario), Precios (`/precios`), Facturación
(`/facturacion`), ERP (`/erp`), Contacto (`/contacto`).

La página **Soluciones** se construyó a partir de una captura de pantalla
(no de `get_design_context`, por límite de la API de Figma) — la estructura
general (título, 2 columnas con ilustración circular + texto, "Más
información") es correcta, pero tamaños exactos de círculo y espaciados son
aproximados visualmente, no medidos en el archivo real.

## Estado actual (con assets reales incorporados)

Se integraron las imágenes/íconos reales exportados manualmente desde Figma:
`img_facturacion.png`, `img_erp.png`, los 4 íconos de "Características del
sistema", 3 de los 4 íconos de "¿Por qué elegir?", y 4 logos de clientes
(TOTTO, Banco Unión, Amper, Red Enlace Bolivia) — todos en `src/assets/`.

## Lo que todavía falta (assets no subidos)

1. **`fondo8.png`** (textura de puntos del hero) — se sigue aproximando con
   un patrón CSS (`radial-gradient`), no es la imagen real.
2. **4º ícono de "¿Por qué elegir?"** (laptop con gráfico) — se mantiene
   reconstruido a mano en `components/Icon.tsx` (`IconLaptopChart`).
3. **Logo de NXT Labs** como archivo aislado (el que se subió, `mas_info.png`,
   es una captura de la sección completa, no el logo solo) — se mantiene
   reconstruido a mano en `components/Logo.tsx`.
4. **2 logos de clientes**: "Elefante Azul" y un cliente más de la fila 2 —
   quedan como placeholders con el nombre.
5. **Páginas Precios, Facturación (detalle), ERP (detalle) y Contacto**
   siguen con el sistema de color/tipografía corregido pero sin verificar
   nodo por nodo contra Figma (se llegó al límite de llamadas de la API de
   Figma a mitad de esa revisión).

## Cómo correrlo

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build de producción en dist/
```

