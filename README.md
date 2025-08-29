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
- **Vite** - Outil de build
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

**Section "À propos" (\_a-propos-de-moi)**

- **Organisation en fichiers Markdown** structurés
- **Librairie Typewriter.js** : Effet machine à écrire dynamique

**Section "Projets" (\_mes-projets.json)**

- **Présentation des projets** avec cartes détaillées
- **Système de filtrage** dynamique par technologies dans la sidebar

**Section "Contact" (\_me-contacter.html)**

- **Formulaire de contact** fonctionnel

**Page CV (\_mon-cv.pdf)**

- **Présentation et téléchargement de mon CV** en format PDF

**Général**

- **Design responsive** adapté aux appareils mobiles et desktop

## Backend

### Technologies

- **Express** - Framework web Node.js pour l'API
- **Node.js** - Environnement d'exécution JavaScript
- **MongoDB** - Base de données NoSQL
- **Mongoose** - ODM pour MongoDB
- **JWT (jsonwebtoken)** - Authentification sécurisée
- **CORS** - Gestion des requêtes cross-origin
- **dotenv** - Gestion des variables d'environnement

### Fonctionnalités

- **API REST** pour la gestion des projets
- **Base de données MongoDB** pour stocker les projets
- **Authentification JWT** pour l'accès administrateur
- **CRUD projets** : Création, lecture, modification, suppression
- **Filtrage des projets** par technologies (une ou plusieurs)
- **Middleware d'authentification** pour sécuriser les routes admin
- **Architecture MVC** pour une organisation claire du code
