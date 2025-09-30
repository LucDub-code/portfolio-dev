# Mon Portfolio de Développeur Web

![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Stack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Shadcn/UI](https://img.shields.io/badge/shadcn%2Fui-000000.svg?style=for-the-badge&logo=shadcnui&logoColor=white) ![Motion](https://img.shields.io/badge/Motion-FFD700.svg?style=for-the-badge&logo=motion&logoColor=black) ![Vercel AI](https://img.shields.io/badge/Vercel%20AI-000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)


## Présentation

Portfolio de développeur web présentant mes projets et compétences à travers une interface interactive inspirée d'un environnement de développement (IDE).

## Architecture

- **Frontend React** dans le dossier `frontend-portfolio/`
- **Backend Express/Node.js** dans le dossier `backend-portfolio/`

## Déploiement

- **Frontend** déployé sur Vercel
- **Backend** déployé sur Fly.io

## Frontend

### Technologies

- **React** - Framework JavaScript pour la construction de l'interface
- **Vite** - Outil de build
- **Tailwind CSS** - Framework CSS utilitaire pour le design
- **Shadcn/UI** - Collection de composants UI réutilisables qui utilisent Tailwind
- **Motion** - Bibliothèque d'animations
- **Vercel AI SDK** - Intégration de l'assistant IA conversationnel
- **Animations CSS** - Effets typewriter custom pour la page d'accueil
- **Typewriter.js** - Bibliothèque typewriter de la page à propos
- **Git & GitHub** - Gestion de version

### Fonctionnalités

**Page d'accueil (\_hello-world.js)**

- **Interface inspirée d'un IDE** avec navigation par fichiers et onglets
- **Éditeur de code** avec effet typewriter CSS personnalisé (animation ligne par ligne)
- **Assistant IA conversationnel "Vigeo"** : Chatbot intégré dans le terminal utilisant Vercel AI SDK avec streaming des réponses en temps réel
- **Animations Motion** : TiltCard 3D avec photo de profil et effet de parallaxe, TextShimmer sur l'en-tête du terminal, TextLoop dans la StatusBar affichant les aspirations professionnelles

**Section "À propos" (\_a-propos-de-moi)**

- **Organisation en fichiers Markdown** structurés
- **Librairie Typewriter.js** : Effet machine à écrire dynamique

**Section "Projets" (\_mes-projets.json)**

- **Présentation des projets** avec cartes détaillées
- **Système de filtrage** dynamique par technologies dans la sidebar

**Section "Contact" (\_me-contacter.html)**

- **Formulaire de contact** fonctionnel

**Général**

- **Design responsive** adapté aux appareils mobiles et desktop

## Backend

### Technologies

- **Express** - Framework web Node.js pour l'API
- **Node.js** - Environnement d'exécution JavaScript
- **MongoDB** - Base de données NoSQL avec Atlas Vector Search
- **Mongoose** - ODM pour MongoDB
- **JWT (jsonwebtoken)** - Authentification sécurisée
- **Vercel AI SDK** - Intégration IA avec Mistral AI
- **Mistral AI** - Modèle LLM et embeddings pour l'assistant conversationnel
- **Cloudinary** - Gestion et stockage d'images
- **Nodemailer** - Envoi d'emails pour le formulaire de contact

### Fonctionnalités

- **API REST** pour la gestion des projets
- **Base de données MongoDB** pour stocker les projets et la base de connaissances IA
- **Authentification JWT** pour l'accès administrateur
- **CRUD projets** : Création, lecture, modification, suppression
- **Filtrage des projets** par technologies et plateformes (filtres multiples combinés)
- **Assistant IA conversationnel "Vigeo"** : Système RAG (Retrieval Augmented Generation) avec Mistral AI et recherche vectorielle MongoDB Atlas pour des réponses contextuelles en temps réel
- **Upload d'images sécurisé** via Cloudinary avec signature côté serveur
- **Système de contact** avec protection anti-spam et limitation de requêtes
- **Middleware d'authentification** pour sécuriser les routes admin
- **Architecture MVC** pour une organisation claire du code
