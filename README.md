# Itti OMDB App

Aplicación web desarrollada con React + TypeScript para búsqueda de películas y series utilizando la API de OMDB.

## 🚀 Tecnologías

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Zustand
- React Query
- Jest + React Testing Library
- Axios

## 📋 Prerrequisitos

- Node.js (v18+)
- npm o yarn
- API Key de OMDB (obtener en https://www.omdbapi.com/apikey.aspx)

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd itti-omdb-react-challenge
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

4. Editar `.env` y agregar tu API Key de OMDB:
```
VITE_OMDB_API_KEY=
```

## 🏃‍♂️ Ejecutar el proyecto

### Modo desarrollo:
```bash
npm run dev
```

### Build para producción:
```bash
npm run build
```

### Preview del build:
```bash
npm run preview
```

## 🧪 Testing

### Ejecutar tests:
```bash
npm run test
```

### Tests en modo watch:
```bash
npm run test:watch
```

### Coverage:
```bash
npm run test:coverage
```

## 📝 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run preview` - Preview del build de producción
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Corrige problemas de ESLint automáticamente
- `npm run format` - Formatea el código con Prettier
- `npm run test` - Ejecuta los tests
- `npm run test:watch` - Ejecuta tests en modo watch
- `npm run test:coverage` - Genera reporte de coverage

## 🏗️ Arquitectura

La aplicación sigue los principios de Clean Architecture y Domain-Driven Design:

```
src/
├── domain/          # Entidades, casos de uso y tipos
├── data/            # Repositorios e integración con API
├── presentation/    # Componentes React (Atomic Design)
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── pages/
├── infrastructure/  # Configuración y servicios externos
└── tests/          # Tests unitarios y de integración
```

## 🎨 Diseño

- Tailwind CSS para estilos
- Diseño responsive
- Atomic Design para organización de componentes
- Accesibilidad (a11y)

