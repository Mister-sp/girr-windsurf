# GIRR Windsurf

## TODO / Roadmap

- Titrage personnalisable (choix de la police, couleur, position)
- Effets d'apparition/disparition (glitch, fondu, etc.)
- Vue XSplit flexible (séparer titre et média en 2 pages ou non)
- Aperçu XSplit dans l'éditeur des sujets/émissions
- Travail full cloud (édition et utilisation 100% en ligne)
 (Frontend)

Ce projet est la refonte moderne du frontend de GIRR, basé sur Vue 3, TypeScript, Pinia, Vue Router et TailwindCSS.

## Stack technique
- [Vue 3](https://vuejs.org/) (Composition API)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/) (gestion d'état)
- [Vue Router](https://router.vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/) (styles modernes)
- [Vite](https://vitejs.dev/) (build ultra-rapide)

## Structure du projet
```
/frontend/

## 📁 Structure du projet

```
src/
  components/
    common/         # Header, Card, Loader, NavBar...
    features/       # ShowSubjects, ShowTitle...
  pages/            # HomePage, ShowPage, ConfigPage
  router/           # Vue Router config
  services/         # Appels API REST
  store/            # Pinia (état émissions, sujets)
  main.ts           # Entrée app
  App.vue           # Shell principal (NavBar + router-view)
```

---

## 🧭 Conventions & Architecture

- **Pages** : dans `src/pages/`, chaque page principale (Home, Show, Config) = un composant Vue.
- **Composants communs** : `src/components/common/` (Header, NavBar, Loader, Card…)
- **Composants métier** : `src/components/features/` (ShowSubjects, ShowTitle…)
- **Gestion d’état** : un store Pinia centralise les émissions & sujets, expose des actions asynchrones.
- **Services** : `src/services/api.ts` centralise tous les appels API (Axios).
- **UI** : TailwindCSS pour la rapidité, la cohérence et la responsivité.
- **TypeScript** : tous les stores/services sont typés pour la robustesse.

---

## ⚙️ Installation & Démarrage

```bash
git clone https://github.com/ton-org/girr-windsurf.git
cd girr-windsurf
npm install
npm run dev
```

- Accède à l’app sur http://localhost:5173/
- Vérifie que le backend GIRR est lancé sur l’URL attendue (proxy Vite possible)

---

## 🖥️ Fonctionnalités principales

- **Accueil** : liste dynamique des émissions (API `/shows`)
- **Page émission** : détails, sujets, titrage éditable (API `/shows/:id`, PATCH)
- **Page configuration** : sélection d’une émission, modification du titre, feedback utilisateur
- **Navigation moderne** : NavBar accessible partout
- **Feedback UX** : loader animé, gestion erreurs/succès

---

## 🔌 API attendue

- `GET    /shows`                 → liste des émissions
- `GET    /shows/:id`             → détails émission
- `PATCH  /shows/:id`             → maj titre émission `{ title }`
- `GET    /shows/:id/subjects`    → sujets d’une émission

---

## 🧩 Contribution & bonnes pratiques

- **Ajout d’une page** : créer un composant dans `pages/`, ajouter la route dans `router/index.ts`.
- **Ajout d’un composant** : privilégier la réutilisabilité, placer dans `common/` ou `features/`.
- **Ajout d’un appel API** : centraliser dans `services/api.ts`, typer la réponse.
- **Gestion d’état** : utiliser Pinia, exposer des actions asynchrones, typer les stores.
- **UI** : utiliser TailwindCSS pour la cohérence.
- **Types** : toujours typer les props, stores, services.
- **Tests** (optionnel) : privilégier les tests unitaires sur les stores/services.

---

## 🤝 Guide de contribution rapide

1. Fork/clone le repo
2. Crée une branche pour ta feature/fix
3. Ajoute/modifie le code (respecte la structure et les conventions)
4. Vérifie le typage TypeScript et le lint
5. Soumets une PR claire et concise

---

## 📚 Pour aller plus loin

- Ajouter d’autres paramètres de config (overlays, couleurs, options direct…)
- Préparer l’intégration WebSocket (si direct temps réel)
- Ajouter des tests unitaires (Pinia, services)
- Déployer sur Netlify/Vercel (Vite compatible)

---

**Contact & support** : ouvre une issue ou contacte les mainteneurs sur le repo principal GIRR.
- Toute la logique fonctionnelle est préservée.

## Contact
Pour toute question, voir la documentation ou ouvrir une issue sur le dépôt principal.
