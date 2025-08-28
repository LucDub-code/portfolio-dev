# Mon Portfolio de Développeur Web

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Présentation

Portfolio de développeur web présentant mes projets et compétences à travers une interface interactive inspirée d'un environnement de développement (IDE).

## Architecture

- **Frontend React** dans le dossier `frontend-portfolio/`
- **Backend Express/Node.js** dans le dossier `backend-portfolio/`

## Déploiement

- **Frontend** déployé sur Vercel
- **Backend** déployé sur Render

## Frontend

### Technologies

- **React** - Framework JavaScript pour la construction de l'interface
- **Vite** - Outil de build ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire pour le design
- **Lottie React** - Animations vectorielles dynamiques
- **Animations CSS** - Effets typewriter custom pour la page d'accueil
- **Typewriter.js** - Bibliothèque typewriter de la page à propos
- **Git & GitHub** - Gestion de version

### Fonctionnalités

**Page d'accueil (\_hello-world.js)**

- **Interface inspirée d'un IDE** avec navigation par fichiers et onglets
- **Terminal interactif** avec mini-jeu "Bug Squash"
- **Animations Lottie** lors du clic sur un "bug"
- **Animation CSS pure** : Effet machine à écrire personnalisé
- **Interface Three.js** : Animation 3D en page d'accueil

**Section "À propos" (\_a-propos-de-moi)**

- **Organisation en fichiers Markdown** structurés
- **Librairie Typewriter.js** : Effet machine à écrire dynamique

**Section "Projets" (\_mes-projets.json)**

- **Présentation des projets** avec cartes détaillées
- **Système de filtrage** dynamique par technologies dans la sidebar

**Section "Contact" (\_me-contacter.html)**

- **Formulaire de contact** fonctionnel

**Page CV (\_mon-cv.pdf)**

- **Présentation et téléchargement du CV** en format PDF

**Général**

- **Design responsive** adapté aux appareils mobiles et desktop

### Structure du code

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
│   ├── pages/         # Pages principales de l'application
│   └── data/          # Données statiques des composants
├── context/           # Contextes React globaux
└── main.jsx           # Point d'entrée de l'application
```

## Backend

### Technologies

- **Express** - Framework web Node.js pour l'API
- **Node.js** - Environnement d'exécution JavaScript
- **MongoDB** - Base de données NoSQL
- **Mongoose** - ODM pour MongoDB
- **JWT** - Authentification sécurisée

### Fonctionnalités

- **API REST** pour la gestion des projets
- **Base de données** pour stocker les projets
- **Authentification** pour l'accès administrateur
- **CRUD projets** : Création, lecture, mise à jour, suppression
- **Filtrage des projets** par technologies
- **Formulaire de contact** : Réception des messages et envoi par email

### Structure de l'API

```
backend-portfolio/
├── src/
│   └── index.js           # Point d'entrée de l'API Express
├── package.json           # Dépendances Node.js
└── .env                   # Variables d'environnement
```

## Installation

### Frontend

```bash
cd frontend-portfolio
npm install
npm run dev
```

### Backend

```bash
cd backend-portfolio
npm install
nodemon server
```
