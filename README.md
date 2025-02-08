# Casino Comparison Website

## Windows Setup Instructions

1. Create a new directory and navigate to it (using Command Prompt or PowerShell):
```cmd
md casino-comparison
cd casino-comparison
```

2. Initialize a new git repository:
```cmd
git init
```

3. Copy all project files maintaining the following structure:
```
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   └── CasinoCard.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── utils.ts
│   ├── index.css
│   └── vite-env.d.ts
├── public/
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

4. Install dependencies:
```cmd
npm install
```

5. Start the development server:
```cmd
npm run dev
```

6. Open Visual Studio Code in the current directory:
```cmd
code .
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Prerequisites for Windows

1. Make sure you have Node.js installed. Download from: https://nodejs.org/
2. Make sure you have Git installed. Download from: https://git-scm.com/download/win
3. Make sure you have Visual Studio Code installed. Download from: https://code.visualstudio.com/

After installing the prerequisites, you may need to restart your computer for all PATH variables to be properly set.