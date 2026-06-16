# ImpulsoLocal - Web profesional + Google Ads

Sitio creado sobre el tema **AstroFlow**, adaptado para promocionar servicios de creación de páginas web profesionales y configuración inicial de Google Ads para negocios locales.

## Qué incluye

- Página principal de ImpulsoLocal.
- Página de servicios.
- Página de precios con Pack Captación Local de $49.990.
- Página de contacto.
- Página general de demos.
- Página de clientes reales publicados.
- 2 páginas reales integradas como trabajos/clientes:
  - ServiGasfíter: `/clientes/servigasfiter/`
  - FullCerrajería 24Hrs: `/clientes/fullcerrajeria24hrs/`
- 7 demos diferenciadas por tipo de web:
  - Landing page: gasfitería urgente.
  - Sitio web corporativo: empresa eléctrica.
  - Micrositio: cerrajero 24/7.
  - Tienda online: ferretería / productos.
  - Blog / magazine: consejos del hogar.
  - Portfolio: techumbres y trabajos realizados.
  - Aplicación web: agenda de servicios.

## Clientes reales incluidos

Los sitios reales están dentro de:

```txt
public/clientes/servigasfiter/
public/clientes/fullcerrajeria24hrs/
```

La página principal y la navegación incluyen un enlace a `Clientes`, donde se muestran ambos casos con botón para abrir cada web completa.

## Datos que debes editar

Abre este archivo:

```txt
src/config/site.ts
```

Y cambia:

```ts
whatsapp: '56900000000'
email: 'contacto@tudominio.cl'
url: 'https://tudominio.cl'
```

También puedes cambiar el nombre de la marca si no usarás `ImpulsoLocal`.

## Comandos locales

Instalar dependencias:

```bash
npm install
```

Ver la web localmente:

```bash
npm run dev
```

Construir la web:

```bash
npm run build
```

## Publicar en GitHub Pages

Este proyecto ya incluye un workflow en:

```txt
.github/workflows/deploy.yml
```

Pasos:

1. Crea un repositorio en GitHub.
2. Sube todos los archivos de este proyecto.
3. Ve a **Settings > Pages**.
4. En **Build and deployment**, selecciona **GitHub Actions**.
5. Haz push a la rama `main`.
6. GitHub construirá y publicará la web automáticamente.

## Importante

La inversión en Google Ads debe pagarla cada cliente directamente a Google desde su propia cuenta. Tú puedes configurar y optimizar la campaña con acceso autorizado, sin pedir tarjetas ni contraseñas.
