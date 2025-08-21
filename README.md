# Portfolio Développeur Web de Lucas Dubeau

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Présentation

Portfolio de développeur web présentant mes projets et compétences à travers une interface interactive inspirée d'un environnement de développement (IDE).

## Frontend

### Technologies

- **React** - Framework JavaScript pour la construction de l'interface
- **Vite** - Outil de build ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire pour le design
- **Lottie React** - Animations vectorielles dynamiques
- **Animations CSS** - Effets typewriter custom pour la page d'accueil
- **Typewriter.js** - Bibliothèque pour les effets de machine à écrire de la page à propos
- **Git & GitHub** - Gestion de version

### Fonctionnalités

- **Interface inspirée d'un IDE** avec navigation par fichiers et onglets
- **Terminal interactif** sur la page d'accueil
- **Mini-jeu "Bug Squash"** pour une expérience ludique interactive
- **Présentation des projets** avec filtrage par technologie
- **Section "À propos"** organisée en fichiers Markdown
- **Formulaire de contact** fonctionnel intégré avec Formspree
- **Animations Lottie** pour une meilleure expérience utilisateur
- **Effet machine à écrire** en CSS pur et avec librairie Typewriter
- **Design responsive** adapté aux appareils mobiles et desktop
- **Page CV** : `_mon-cv.pdf` avec option de téléchargement
- **Gestion des projets** : Cartes avec titre, descriptif et technologies
- **Filtrage par technos** : Sidebar avec filtres dynamiques
- **Interface Three.js** : Animation 3D en page d'accueil (inspirée de gateremark.me)

### Structure du code

```
frontend/
└── src/
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
    │   ├── pages/         # Pages principales de l'application
    │   └── data/          # Données statiques des composants
    ├── context/           # Contextes React globaux
    └── main.jsx           # Point d'entrée de l'application
```

## Backend

### Technologies

- **NestJS** - Framework Node.js pour l'API
- **TypeScript** - Langage de programmation typé
- **MongoDB** - Base de données NoSQL
- **Mongoose** - ODM pour MongoDB
- **JWT** - Authentification sécurisée
- **Passport** - Stratégies d'authentification

### Fonctionnalités

- **API REST** pour la gestion des projets
- **Base de données** MongoDB pour stocker les projets
- **Authentification** JWT pour l'accès administrateur
- **CRUD projets** : Création, lecture, mise à jour, suppression
- **Gestion des technologies** et filtres
- **Formulaire de contact** : Réception et stockage des messages

### Structure de l'API

```
backend/
├── src/
│   ├── projects/          # Module gestion des projets
│   ├── auth/              # Module authentification
│   ├── users/             # Module utilisateurs
│   ├── common/            # Utilitaires et décorateurs
│   └── main.ts            # Point d'entrée de l'API
├── test/                  # Tests unitaires et e2e
└── dist/                  # Code compilé
```

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run start:dev
```

## Déploiement

- **Frontend** : Déployé sur Vercel
- **Backend** : Déployé sur Render (API en production)

## Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.
