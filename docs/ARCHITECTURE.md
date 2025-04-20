# Architecture du projet GIRR Windsurf (Vue 2)

```mermaid
graph TD;
  Utilisateur-->Frontend[Vue 2]
  Frontend-->API[API REST]
  API-->Backend[Serveur Node/Express]
  Frontend-->WebSocket[WebSocket]
  WebSocket-->Backend
```

## Modèles principaux

```mermaid
classDiagram
  class Show {
    id: string
    name: string
    subjects: Subject[]
  }
  class Subject {
    id: string
    title: string
    order: number
  }
  Show "1" -- "*" Subject : contient
```

## Routes principales

- `/shows` : liste des émissions
- `/shows/:id` : détail d'une émission
- `/config` : page de configuration

## Composants inspirés de TwitchToast
- Overlay dynamique
- Notifications en temps réel
- Titrage personnalisable
- Effets visuels (glitch, fondu, etc.)

Voir : https://github.com/codlab/TwitchToast
