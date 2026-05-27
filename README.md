# Javier Imaz Fandos | Web de autor

Web literaria oficial preparada con Next.js y Tailwind CSS para presentar el catálogo
literario de Javier Imaz Fandos.

## Páginas incluidas

- `/` Inicio editorial con hero, libros, noticias y newsletter.
- `/libros` Biblioteca completa con ocho obras agrupadas en Novela, Poesía y Ensayo.
- `/libros/[slug]` Fichas de Donde aún respira tu nombre, Geometría del desencuentro,
  El Eco del Silencio, La Ética del Tiempo, La Mujer que Nunca Existió y
  La Noche Oscura del Gállego.
- `/el-enigma-de-la-caja-del-tiempo` Sinopsis, personajes, símbolos, ambientación y galería.
- `/lagrimas-errantes` Ficha editorial, muestra descargable y enlace de compra.
- `/autor` Biografía y trayectoria.
- `/bitacora` Crónicas, notas y fragmentos del universo narrativo.
- `/noticias` Revista de novedades con páginas individuales.
- `/contacto` Formulario, Instagram y newsletter.
- `/privacidad` Información previa a la activación de formularios.

## Editar contenido

El contenido principal está centralizado en [`data/site.ts`](./data/site.ts):

- `siteConfig`: dominio, Instagram y correo público.
- `books`: títulos, descripciones, cubiertas y enlaces de compra.
- `news`: noticias y artículos.
- `enigmaCharacters` y `enigmaSymbols`: contenidos de la página de la novela.

La firma junto al logotipo utiliza `siteConfig.brandName` (`Zami Reivaj`), mientras que
la autoría de las obras se mantiene como Javier Imaz Fandos.

Las imágenes y el capítulo de muestra están en `public/assets` y `public/downloads`.
El catálogo actual incluye:

- Novela: *Lágrimas Errantes*, *El Enigma de la Caja del Tiempo*,
  *El Eco del Silencio*, *La Noche Oscura del Gállego* y
  *La Mujer que Nunca Existió*.
- Poesía: *Donde aún respira tu nombre* y *Geometría del desencuentro*.
- Ensayo: *La Ética del Tiempo*.

Listado general:

- *Lágrimas Errantes*.
- *El Enigma de la Caja del Tiempo*.
- *El Eco del Silencio*.
- *La Noche Oscura del Gállego*.
- *La Mujer que Nunca Existió*.
- *Donde aún respira tu nombre*.
- *Geometría del desencuentro*.
- *La Ética del Tiempo*.

Solo *Lágrimas Errantes* aparece como publicada y enlaza a su página editorial de compra.
Las obras sin portada definitiva muestran una imagen de atmósfera claramente indicada.
Para añadir nuevas portadas o enlaces de compra, basta con editar el registro
correspondiente dentro de `data/site.ts`.

En desarrollo, la dirección SEO usa `http://localhost:3000`. Antes de publicar debe
definirse `NEXT_PUBLIC_SITE_URL` con el dominio o dirección definitiva de Vercel.

## Ejecutar en local

Requiere Node.js 20.9 o posterior y npm:

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).
El comando de vista previa ya está ajustado para trabajar de forma estable en macOS
cuando hay muchos archivos abiertos.

Para verificar la versión de publicación:

```bash
npm run lint
npm run build
```

El proyecto fija una versión compatible de ESLint y una actualización segura de PostCSS
en `package.json`, de modo que la auditoría de dependencias no arrastre una versión
vulnerable incluida por herramientas internas de compilación.

## Formularios

Los formularios están desarrollados, pero no envían datos hasta configurar proveedores;
así se evita perder mensajes durante la preparación de la web.

1. Copiar `.env.example` a `.env.local`.
2. Configurar Resend para el formulario de contacto:

```env
NEXT_PUBLIC_CONTACT_EMAIL=contacto@tudominio.com
CONTACT_TO_EMAIL=contacto@tudominio.com
CONTACT_FROM_EMAIL=Web Javier Imaz Fandos <web@tudominio.com>
RESEND_API_KEY=tu_clave_resend
```

3. Configurar Brevo para la newsletter:

```env
BREVO_API_KEY=tu_clave_brevo
BREVO_LIST_ID=123
```

Antes de activar estos servicios, completar la página de privacidad con los datos legales
del responsable y la política definitiva.

## Publicar en GitHub y Vercel

1. Crear un repositorio vacío en GitHub, por ejemplo `javier-imaz-fandos-web`.
2. Desde esta carpeta ejecutar:

```bash
git init
git add .
git commit -m "Crear web de autor de Javier Imaz Fandos"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/javier-imaz-fandos-web.git
git push -u origin main
```

3. Entrar en [vercel.com](https://vercel.com), elegir **Add New Project** e importar el
   repositorio.
4. Vercel reconocerá Next.js automáticamente. Añadir las variables de entorno del apartado
   anterior si se activan los formularios.
5. En **Domains**, conectar el dominio definitivo y establecer:

```env
NEXT_PUBLIC_SITE_URL=https://www.tudominio.com
```

6. Volver a desplegar tras configurar el dominio para que sitemap, enlaces canónicos y
   etiquetas de compartir utilicen la dirección definitiva.

## Netlify

La aplicación también puede desplegarse importando el mismo repositorio en Netlify. El
proyecto emplea rutas y APIs de Next.js, por lo que se debe usar la integración oficial de
Next.js de Netlify y copiar las mismas variables de entorno.

## Adaptación a WordPress

Si finalmente se elige WordPress, los textos, imágenes, fichas de libros y estructura de
secciones pueden trasladarse a páginas y entradas del gestor. La versión actual en Next.js
es la opción ya preparada para publicar directamente en Vercel o Netlify.
