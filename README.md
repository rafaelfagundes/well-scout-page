# WellScout - Your Guide to Informed Food Choices ✨

**Scan. Search. Understand.** WellScout empowers you to make healthier food choices with ease. Leveraging the power of Open Food Facts, Google Gemini AI, and a sleek, modern interface, WellScout provides instant product insights and personalized recommendations. Get ready to decode nutrition labels like a pro!

## Demo 🚀

[![](https://img.youtube.com/vi/4FT19RdkdNU/maxresdefault.jpg)](https://www.youtube.com/watch?v=4FT19RdkdNU)
_Click to watch the demo!_

## Features 🌟

WellScout is packed with features designed to make healthy eating simple and intuitive:

- **Instant Product Scanning:** Scan barcodes to instantly access comprehensive product information from the [Open Food Facts](https://world.openfoodfacts.org/) database.
- **Smart Search:** Find products quickly by name or category. Our intelligent search learns your preferences!
- **AI-Powered Advice:** Receive personalized dietary recommendations from Google Gemini, tailored to the products you scan.
- **Nutritional Deep Dive:** Explore detailed nutritional information, including Nutri-Score, ingredients, and additives. Understand what you're _really_ eating.
- **Favorites & History:** Save your favorite products and track your scanning history for personalized recommendations and easy access.
- **Constantly Updated:** Stay informed with the latest product information. Our database is continuously expanding, ensuring you always have access to the most up-to-date data.

## How It Works 💡

1. **Scan:** Use your phone's camera to scan a food product's barcode.
2. **Search:** Or, search for product by name or category.
3. **Discover:** View detailed product information, including nutritional facts, ingredients, and Nutri-Score.
4. **Get Advice:** Get personalized dietary recommendations powered by Google Gemini AI.

## Tech Stack 🛠️

WellScout is built with a modern, robust tech stack:

- **Frontend:** [React Native](https://reactnative.dev/) & [Expo](https://expo.dev/) - for a cross-platform (iOS and Android) experience.
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) - for predictable and efficient state management.
- **Data:** [Open Food Facts API](https://world.openfoodfacts.org/data) - providing a vast, community-driven database of food products.
- **AI:** [Google Gemini API](https://ai.google.dev/gemini) - delivering personalized dietary advice.
- **Camera:** [Vision Camera](https://visioncamera.dev/) - for seamless barcode scanning.
- **Navigation:** [Expo Router](https://expo.github.io/router/) - for easy and intuitive navigation.
- **Animations:** [Reanimated](https://docs.swmansion.com/react-native-reanimated/) - adding smooth, performant animations.
- **Storage** [AsyncStorage] - Persistent storage.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Rapid UI Development.
- **UI Components:** Custom components built with Tailwind CSS, plus components from the `shadcn/ui` library (e.g., `Button`, `Card`, `HoverCard`).
- **Dark Mode Support:** Built-in support for dark mode, providing a comfortable viewing experience in any lighting condition.

## Get WellScout (Coming Soon!) 📱

Be among the first to know when WellScout launches!

[![App Store](https://img.shields.io/badge/App_Store-Coming_Soon-black?style=for-the-badge&logo=apple)](https://www.apple.com/app-store/) [![Google Play](https://img.shields.io/badge/Google_Play-Coming_Soon-green?style=for-the-badge&logo=google-play)](https://play.google.com/store)

## Project Structure 📂

```
well-scout-page/
├── app/           # Core application files (Next.js)
│   ├── globals.css     # Global styles and Tailwind configuration
│   ├── layout.tsx      # Root layout for the application
│   └── page.tsx        # Main landing page component
│
├── components/    # Reusable UI components
│   ├── ui/        # shadcn/ui components (Button, Card, etc.)
│   ├── magicui/  # Custom UI components like AvatarCircles and Ripple
│   ├── *.tsx      # Individual feature components (Hero, Features, etc.)
│   └── components.json # shadcn/ui configuration
│
├── lib/           # Utility functions (e.g., cn for class name merging)
├── public/        # Static assets (images, fonts, etc.)
├── .gitignore     # Files and folders to be ignored by Git
├── next.config.ts # Next.js configuration
├── package.json   # Project dependencies and scripts
├── tsconfig.json  # TypeScript configuration
└── ...
```

## Development 💻

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests.

## Author 👤

- [Rafael Fagundes](https://github.com/rafaelfagundes) - [![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Frafaelcflima)](https://x.com/rafaelcflima) [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/rafael_fagundes) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafaelcfl/)

## License

This project is open source (you would typically specify a license like MIT here - I'll omit it for this example since the original source didn't specify one).
