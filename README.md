# FTU Trips Website

Bilingual (English/Arabic) travel website showcasing FTU Adventure trips, designed by Beyond Destination.

## Features

- 🌍 Two featured trips: Scotland & South Africa
- 🌐 Full bilingual support (English/Arabic)
- 📱 Fully responsive design
- 🎨 Clean, modern interface with warm aesthetics
- 📋 Organized trip information with tabs:
  - Day-by-day itinerary
  - Accommodation details
  - Included services & terms
  - Local recommendations

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18+ or pnpm

### Installation

```bash
# Install dependencies
pnpm install
# or
npm install
```

### Development

```bash
# Start development server
pnpm dev
# or
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Create production build
pnpm build
# or
npm run build
```

## Project Structure

```
ftu-trips-clean/
├── client/
│   ├── src/
│   │   ├── pages/          # Page components
│   │   ├── components/     # Reusable UI components
│   │   ├── lib/            # Data and utilities
│   │   │   └── tripData.ts # All trip content
│   │   ├── contexts/       # React contexts
│   │   └── index.css       # Global styles
│   └── index.html
├── server/                 # Server code
├── package.json
└── vite.config.ts
```

## Key Files to Edit

- **`client/src/lib/tripData.ts`** - All trip content (itineraries, hotels, recommendations)
- **`client/src/pages/Home.tsx`** - Homepage
- **`client/src/pages/TripDetail.tsx`** - Trip detail pages
- **`client/src/components/Navbar.tsx`** - Navigation bar
- **`client/src/components/Footer.tsx`** - Footer with contact info
- **`client/src/index.css`** - Design tokens and colors

## Contact

**FTU Adventure**
- WhatsApp: +965 6004 1555
- Phone: +965 9779 7782
- Email: ftu@ftuadventure.com
- Instagram: @ftu_adventure

**Beyond Destination** (Website Design)
- Instagram: @Q8BDOFFICIAL
- Website: www.q8bd.com

## License

© 2026 Beyond Destination. All rights reserved.
