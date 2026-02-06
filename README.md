# Megilat Ester

A clean, minimal React website for reading Megillat Esther with RTL support, theme switching, and dynamic font sizing.

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Text.jsx        # H1, H2, H3, BodyText, PasukText
│   ├── Numbers.jsx     # Perek/Pasuk markers
│   └── Paragraph.jsx   # Paragraph & QuoteParagraph
├── sections/          # Page sections
│   └── Header.jsx     # Theme toggle & font size controls
├── pages/             # Full pages
│   └── Home.jsx       # Main page
├── assets/
│   └── icons/         # SVG icons
├── styles/
│   ├── tokens.css     # Design system CSS variables
│   └── tokens.json    # Design tokens data
├── index.css          # Global styles
├── main.jsx           # Entry point
└── App.jsx            # Simple app wrapper
```

## Features

- **RTL Support**: Full right-to-left layout for Hebrew text
- **Theme Switching**: Light/Dark mode toggle
- **Dynamic Font Sizing**: Adjustable text size (75% - 150%)
- **Responsive**: Adapts to all screen sizes
- **Design System**: Consistent tokens and components

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Lint code
```

## Design System

### Typography Scale
- **H1**: 24px / 28px line-height
- **H2**: 16px / 20px line-height
- **H3**: 12px / 16px line-height
- **Text**: 16px / 24px line-height
- **Pasuk**: 6px / 8px line-height

### Colors
- **Light Mode**: White background, dark text
- **Dark Mode**: Dark background, light text
- **Accent**: #C9B693 (gold)

### Font Families
- Sans: Noto Sans Hebrew
- Serif: Noto Serif Hebrew

## Components

### Text Components
```jsx
import { H1, H2, H3, BodyText, PasukText } from './components/Text.jsx'

<H1>Main Title</H1>
<H2>Section Title</H2>
<BodyText>Body text</BodyText>
```

### Paragraph
```jsx
import { Paragraph, QuoteParagraph } from './components/Paragraph.jsx'

<Paragraph perek="א" pasuk="א" text="..." />
<QuoteParagraph perek="א" pasuk="ב" lead="..." text="..." />
```

### Header
```jsx
import { Header } from './sections/Header.jsx'

<Header 
  theme={theme}
  onToggleTheme={toggleTheme}
  fontScale={fontScale}
  onDecreaseFontSize={decreaseFontSize}
  onIncreaseFontSize={increaseFontSize}
/>
```

## Built With

- React 19
- Vite 7
- CSS Modules

## License

Private
