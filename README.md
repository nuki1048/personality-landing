# Personality.co Clone

A pixel-perfect recreation of [personality.co](https://personality.co/) built with modern technologies.

## 🚀 Live Demo

[View on Vercel](https://your-vercel-deployment-url.vercel.app)

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom theme)
- **UI Components:** HeroUI
- **Internationalization:** next-intl (EN, UK, ES)
- **Linting:** ESLint + Prettier

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── (client)/
│   │   │   ├── module/
│   │   │   │   └── home/
│   │   │   │       ├── home.module.tsx
│   │   │   │       └── elements/
│   │   │   │           ├── hero/
│   │   │   │           │   └── hero.component.tsx
│   │   │   │           ├── features/
│   │   │   │           │   └── features.component.tsx
│   │   │   │           ├── how-it-works/
│   │   │   │           │   ├── how-it-works.component.tsx
│   │   │   │           │   └── components/
│   │   │   │           │       ├── stats-block.component.tsx
│   │   │   │           │       └── step-card.component.tsx
│   │   │   │           ├── what-you-will-receive/
│   │   │   │           │   └── what-you-will-receive.component.tsx
│   │   │   │           └── footer/
│   │   │   │               └── footer.component.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   └── layout.tsx
├── i18n/
│   ├── routing.ts
│   ├── navigation.ts
│   └── request.ts
├── locales/
│   ├── en.json
│   ├── uk.json
│   └── es.json
├── modules/
│   ├── icons/
│   │   └── *.icon.tsx
│   └── shared/
│       ├── components/
│       │   ├── navbar.component.tsx
│       │   ├── mobile-menu.component.tsx
│       │   ├── language-select.component.tsx
│       │   ├── nav-item.component.tsx
│       │   └── block.component.tsx
│       └── utils/
├── styles/
│   └── globals.css
├── types/
│   └── svg.d.ts
└── middleware.ts
```

## ✨ Features

- **Modular Architecture:** Each page is a separate module with its own components
- **Responsive Design:** Optimized for 320px, 360px, 430px, and 1280px+ viewports
- **Internationalization:** Full support for English, Ukrainian, and Spanish
- **Custom Tailwind Theme:** Extended colors, typography, spacing, and shadows
- **HeroUI Integration:** Seamless integration with HeroUI components
- **No Inline Values:** All custom values extracted to Tailwind theme

## 🏃 Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/personality-copy.git

# Navigate to project directory
cd personality-copy

# Install dependencies
yarn install
# or
npm install
```

### Development

```bash
# Start development server
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
yarn build
# or
npm run build

# Start production server
yarn start
# or
npm start
```

### Linting & Formatting

```bash
# Run ESLint
yarn lint
# or
npm run lint

# Format code with Prettier
yarn format
# or
npm run format
```

## 🎨 Tailwind Theme

Custom theme extends:

- **Colors:** Primary (green), text variants, backgrounds, surfaces, borders
- **Typography:** Font sizes with line heights, Inter font family
- **Spacing:** Section spacing, custom values
- **Shadows:** Card shadows with hover states
- **Border Radius:** Card and button variants

## 🌐 Localization

Supported locales:

- `en` - English (default)
- `uk` - Ukrainian
- `es` - Spanish

Routes:

- `/` - English (default, no prefix)
- `/uk` - Ukrainian
- `/es` - Spanish

## 📱 Responsive Breakpoints

| Breakpoint | Width  |
| ---------- | ------ |
| sm         | 390px  |
| md         | 768px  |
| lg         | 1024px |
| xl         | 1280px |

## 📦 Dependencies

### Production

- next: 15.3.6
- react: 18.3.1
- @heroui/\*: Various UI components
- next-intl: 4.5.8
- next-themes: 0.4.6
- framer-motion: 11.18.2

### Development

- typescript: 5.6.3
- tailwindcss: 4.1.11
- eslint: 9.25.1
- prettier: 3.7.4

## 📄 License

MIT
