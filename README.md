# Ghaafeedi Music Platform

Premium AI-powered music platform with Sophia AI emotional companion, AI Artists Marketplace, and Dodo Payments integration.

## Features

- 🎵 **Premium Luxury Design** - Gold/Purple/Black aesthetic
- 🤖 **Sophia AI Companion** - Advanced emotional AI assistant
- 🎨 **AI Artists Marketplace** - 8+ featured AI artists
- 💳 **Dodo Payments** - BNPL options (Klarna, Sunbit, Affirm, Afterpay)
- 👥 **Role-Based Onboarding** - Consumer, Label, AI Partner flows
- 📱 **Responsive Design** - Mobile-first approach
- 🔐 **Firebase Authentication** - Secure user management

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** OpenAI GPT-4
- **Payments:** Dodo Payments
- **Auth:** Firebase
- **Hosting:** Netlify

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Environment Variables

Required environment variables (see `.env.example`):

- `NEXT_PUBLIC_APP_URL` - Application URL
- `OPENAI_API_KEY` - OpenAI API key (server-side only)
- `NEXT_PUBLIC_FIREBASE_*` - Firebase configuration
- `DODO_API_KEY` - Dodo Payments API key

## Project Structure

```
src/
├── components/      # React components
├── pages/          # Next.js pages and API routes
├── services/       # Business logic and API calls
├── context/        # React context providers
└── utils/          # Utility functions
```

## Key Features

### Sophia AI Companion

Advanced emotional AI assistant with:
- Multi-model support (GPT-4, GPT-4 Turbo)
- Autonomous reasoning
- Deep empathy and understanding
- Real-time chat widget

### AI Artists Marketplace

Browse and interact with 8+ AI artists:
- Detailed artist profiles
- Audio samples
- Collaboration options

### Dodo Payments

Integrated payment system with:
- BNPL options
- Multiple payment methods
- Secure checkout

## Deployment

Deployed on Netlify with automatic builds from GitHub.

### Deploy Configuration

- **Build Command:** `npm run build`
- **Publish Directory:** `.next`
- **Node Version:** 20

## Contributing

1. Create a feature branch
2. Make your changes
3. Push to GitHub
4. Create a Pull Request

## License

Proprietary - Ghaafeedi Music Platform

## Support

For issues or questions, please contact support@ghaafeedi.com
