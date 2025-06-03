# 🚀 Astro + Svelte Project Structure

Este proyecto está construido con **Astro** como framework principal y **Svelte** como UI framework. Su arquitectura está diseñada para ser **modular, escalable y mantenible**, ideal para aplicaciones privadas (como dashboards) y públicas (como landing pages).

---

## 📁 Estructura del Proyecto

```
src/
├── assets/ # Recursos estáticos (SVGs, imágenes, etc.)
├── components/ # Componentes UI reutilizables en Svelte
├── layouts/ # Layouts públicos y privados (terminan en .layout.astro)
├── libs/ # Lógica reutilizable como auth, utils, etc. (.lib.ts)
├── modules/ # Módulos agrupados por dominio (auth, dashboard, etc.)
├── pages/ # Rutas accesibles desde el navegador
├── services/ # Conexiones a API, lógica de red (.service.ts)
├── styles/ # Estilos globales
```

---

## 🧭 Convenciones del Proyecto

| Tipo de archivo | Convención           | Ejemplo                |
| --------------- | -------------------- | ---------------------- |
| Layout          | `*.layout.astro`     | `Private.layout.astro` |
| Librería lógica | `*.lib.ts`           | `auth.lib.ts`          |
| Servicio/API    | `*.service.ts`       | `user.service.ts`      |
| Página pública  | `.astro` en `/pages` | `login.astro`          |
| Componente UI   | `.svelte`            | `Button.svelte`        |

---

## 📂 Descripción de Carpetas

### `src/assets/`

Recursos estáticos como íconos, fondos, logos.

```
src/assets/
├── astro.svg
├── background.svg
```

---

### `src/components/`

Componentes visuales reutilizables en Svelte, sin lógica de layout ni rutas.

```
src/components/
├── Button.svelte
├── Card.svelte
```

---

### `src/layouts/`

Contiene los **layouts principales** de las páginas.

- `Public.layout.astro`: Layout para rutas públicas (login, landing, etc.)
- `Private.layout.astro`: Layout para rutas protegidas (requieren sesión)

**Convención:** todos los layouts deben terminar en `.layout.astro`.

---

### `src/libs/`

Contiene **lógica reutilizable** que no pertenece a ningún módulo visual:

- Validación de sesión o tokens
- Utilidades comunes
- Configuraciones internas

Ejemplo:

```ts
// src/libs/auth.lib.ts
export function validateSession(cookies: AstroCookies) {
  const token = cookies.get("session")?.value;
  // lógica de validación...
}
```

### `src/modules/`

Contenedor de módulos funcionales por dominio. Cada módulo puede contener:

Componentes específicos

Servicios

Stores

Archivos de vista o lógica interna

Ejemplo:

```ts

src/modules/auth/
├── LoginForm.svelte
├── login.moduel.astro

```

### `src/pages/`

Contiene las rutas accesibles desde el navegador, siguiendo el routing de Astro.

Archivos .astro en esta carpeta representan rutas como /login, /dashboard, etc.

Internamente pueden usar modules/ o components/.

```
src/pages/
├── index.astro       # Página pública
├── login.astro       # Página pública
├── dashboard.astro   # Página privada
```

### `src/services/`

Contiene la lógica de comunicación con APIs, funciones fetch, etc.

Convención: los archivos terminan en .service.ts.

Ejemplo:

```ts
// src/services/user.service.ts
export async function getUserData() {
  const res = await fetch("/api/user");
  return await res.json();
}
```

### `src/styles/`

Estilos globales o parciales.

```
src/styles/
├── global.css
```

## 🔐 Protección de Rutas

Para proteger rutas privadas:

1. En cada archivo .astro protegido (como /dashboard.astro), importa validateSession() desde libs/auth.lib.ts.
2. Usa la función para verificar si el usuario está autenticado antes de renderizar.
3. Redirige o lanza un error en caso contrario.

Ejemplo base:

```ts
---
// src/pages/dashboard.astro
import { validateSession } from '@/libs/auth.lib';

const session = validateSession(Astro.cookies);

if (!session) {
  return Astro.redirect('/login');
}
---
<Layout>
  <h1>Dashboard</h1>
</Layout>

```

También puedes envolver todas las páginas privadas con Private.layout.astro para centralizar la validación.

---

## 🛣️ Roadmap

- ✅ Estructura modular
- ✅ Layouts públicos/privados
- ✅ Soporte para Svelte components
- 🔜 Sistema de roles
- 🔜 Módulos como admin/, profile/, analytics/
- 🔜 Integración con backend real (API REST o RPC)

---

## 🧩 Notas

El proyecto puede crecer fácilmente hacia un CMS, dashboard administrativo, sistema de control o sitio híbrido público + privado.

En el futuro puedes combinarlo con bases de datos (Supabase, PlanetScale, etc.) o auth providers (Auth.js, Clerk, etc.).

---

> Esta estructura fue diseñada para ofrecer una base sólida, organizada y escalable para proyectos modernos con Astro + Svelte.

---
