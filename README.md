# Portfolio de Développeur Frontend

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 Présentation

Portfolio de développeur frontend créatif inspiré par un environnement de développement. Ce portfolio interactif présente mes projets et compétences à travers une interface unique simulant un IDE.

## 🚀 Fonctionnalités

- **Interface inspirée d'un IDE** avec navigation par fichiers et onglets
- **Terminal interactif** sur la page d'accueil
- **Mini-jeu "Bug Squash"** pour une expérience ludique
- **Présentation des projets** avec filtrage par technologie (en cours de développement)
- **Section "À propos"** organisée en fichiers Markdown
- **Formulaire de contact** fonctionnel
- **Animations Lottie** pour une meilleure expérience utilisateur
- **Effet machine à écrire** en CSS pur et avec librairie Typewriter pour le texte dynamique
- **Design responsive** adapté aux appareils mobiles et desktop

## 🛠️ Technologies

- **React** - Framework JavaScript pour la construction de l'interface
- **Vite** - Outil de build ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire pour le design
- **Lottie React** - Animations vectorielles dynamiques
- **Animations CSS** - Effets visuels personnalisés
- **Typewriter.js** - Bibliothèque pour les effets de machine à écrire
- **Git & GitHub** - Gestion de version et déploiement

## 🔧 Installation et utilisation

```bash
# Cloner le dépôt
git clone https://github.com/LucDub-code/portfolio-dev.git

# Naviguer dans le répertoire
cd portfolio-dev

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

## 📂 Structure du projet

```
src/
├── assets/            # Ressources statiques (images, animations)
├── components/        # Composants React réutilisables
│   ├── layout/        # Composants de structure (Header, Footer)
│   ├── about/         # Composants de la section "À propos"
│   ├── projects/      # Composants de la section Projets
│   ├── editor/        # Composants de l'éditeur de code
│   ├── terminal/      # Composants du terminal interactif
│   ├── game/          # Composants du mini-jeu "Bug Squash"
│   ├── navigation/    # Composants de navigation
│   ├── statusBar/     # Composants de la barre de statut
│   ├── context/       # Contextes locaux des composants
│   └── data/          # Données statiques des composants
├── context/           # Contextes React globaux
└── main.jsx           # Point d'entrée de l'application
```

## 🌐 Déploiement

Le portfolio est configuré pour être facilement déployé sur des plateformes comme Vercel, Netlify ou GitHub Pages.

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.
