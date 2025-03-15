/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs de fond principales
        "btn-hover": "#3E3E42",
        "bg-terminal": "#1E1E1E",
        "bg-ui": "#252526",
        
        // Couleurs de texte
        "text-default": "#D4D4D4",
        "text-selected": "#FFFFFF",
        
        // Couleurs bleues
        "blue-accent": "#007ACC",
        "blue-html": "#569CD6",
        "blue-attr": "#9CDCFE",
        
        // Couleurs vertes
        "green-class": "#4EC9B0",
        "green-comment": "#6A9955",
        "green-number": "#B5CEA8",
        
        // Couleurs dorées
        "gold-function": "#DCDCAA",
        "gold-css": "#D7BA7D",
        
        // Autres couleurs syntaxiques
        "orange-string": "#CE9178",
        "pink-keyword": "#C586C0",
        
        // Couleurs d'interface
        "gray-inactive": "#6B6B6B",
        "border-ide": "#3F3F3F",
        "line-number": "#858585",
        "btn-bg": "#323232",
        
        // Couleurs de notification et de statut
        "error-foreground": "#F48771",
        "success-foreground": "#89D185",
        
        // Couleurs des logos de technologies
        "logo-html": "#E34F26",
        "logo-css": "#1572B6",
        "logo-javascript": "#F7DF1E",
        "logo-react": "#61DAFB",
        "logo-git": "#F05032",
        "logo-tailwind": "#06B6D4",
        "logo-json": "#D35400",
        "logo-markdown": "#007BD4",
        
        // Couleurs syntaxiques supplémentaires
        "syntax-punctuation": "#FFD700",
        
        // Couleurs d'interface supplémentaires
        "statusBar-background": "#007ACC",
        "focus-hover": "#0E639C",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}