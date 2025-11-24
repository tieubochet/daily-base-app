# Daily Base App - Farcaster Miniapp

A mobile-first Web3 application built to help users track their onchain activity, maintain daily streaks, and explore the Base and Superchain ecosystems. This app is designed to be embedded as a Farcaster Frame or run as a standalone web application.

## 🚀 Features

- **Wallet Integration**: Seamless wallet connection using **RainbowKit** and **Wagmi**.
- **Dashboard**: View real-time ETH/Token balances and total transaction counts.
- **Daily Streak**: "Check-in" functionality to simulate onchain interaction streaks (Mock Contract integrated).
- **Badges System**: A comprehensive list of ecosystem badges (e.g., Creator Score, Base User, Gitcoin Donor) with:
  - Auto-generated avatar icons based on badge names.
  - Detailed modal views explaining "Why it matters", "How to progress", and "Tiers".
  - Direct links to external dapps.
- **Ecosystem & Routines**: Curated links to essential ecosystem apps and daily onchain tasks.
- **Theming**: Support for Light, Dark, and Dim modes with a glassmorphism aesthetic.
- **Responsive Design**: Mobile-first layout with smooth animations (slide-up modals, fade-ins).
- **Farcaster Support**: Integrated with `@farcaster/frame-sdk`.

## 🛠 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Lucide React](https://lucide.dev/) (Icons)
- **Web3**: 
  - [Wagmi](https://wagmi.sh/) (Hooks & Vanilla JS)
  - [Viem](https://viem.sh/) (Ethereum Interface)
  - [RainbowKit](https://www.rainbowkit.com/) (Wallet Connect UI)
- **Deployment**: Vercel (Recommended)

## 📂 Project Structure

```bash
├── components/       # Reusable UI components
│   ├── BadgeIcon.tsx # Generates colored avatars from initials
│   ├── BadgeItem.tsx # List item component for badges
│   └── Card.tsx      # Glassmorphism container component
├── constants.ts      # Static data (Badges, Links, Theme colors)
├── types.ts          # TypeScript interfaces
├── App.tsx           # Main application logic & layout
├── index.tsx         # Web3 Providers setup (Wagmi, QueryClient)
└── index.html        # Entry point with Tailwind & Fonts
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd daily-base-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   Open `index.tsx` and replace `'YOUR_PROJECT_ID'` with your actual WalletConnect Project ID (obtainable from [WalletConnect Cloud](https://cloud.walletconnect.com/)).

   ```typescript
   // index.tsx
   const config = getDefaultConfig({
     appName: 'Base Daily App',
     projectId: 'YOUR_PROJECT_ID', // <--- Update this
     chains: [base, mainnet, optimism, ...],
   });
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```

5. **Build for Production:**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Data
All badge data, ecosystem links, and routine items are stored in `constants.ts`. You can easily add or modify badges by updating the `BADGES_DATA` array.

### Theme
The app uses CSS variables for theming. You can adjust the color palettes in `constants.ts` under the `THEMES` object.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available under the MIT License.

---

*Inspired by wenaltszn.eth. Not affiliated with Base.*
