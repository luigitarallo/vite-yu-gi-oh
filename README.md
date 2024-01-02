# Vite Yu-Gi-Oh

## Overview

- The web application is a dynamic card information platform designed for Yu-Gi-Oh! Trading Card Game enthusiasts. It leverages Vue.js as the frontend framework, utilizing components for a modular and organized structure. The application makes use of Axios for seamless asynchronous HTTP requests, fetching card details from the YGOProDeck API.

The app enables users to select specific archetypes, triggering the fetching of relevant card information dynamically. A loader has been implemented to provide a visual indication of data retrieval.

The card details are displayed in a responsive layout, featuring card images, names, and archetype information.\

## Key Features and skills improved

- Vue.js Proficiency: Strengthened skills in Vue.js, particularly in component-based development and state management.

- Asynchronous Operations: Enhanced expertise in handling asynchronous operations by effectively implementing loaders for a better user experience.

- Conditional Rendering: Applied conditional rendering techniques to dynamically display content, improving the app's flexibility and user interface.

- API Integration: Gained experience in integrating external APIs, allowing for real-time data updates and expanding the application's functionality.

- Responsive Design: Implemented responsive design practices to ensure optimal user experience across various devices and screen sizes.

## Technologies Used:

- HTML
- CSS
- SASS pre-processor
- npm package manager
- Vite
- JavaScript
- VueJs
- Ajax requests using Axios

## Istructions

1. Open new termina
2. Run command

```
npm i
```

3. Run command

```
npm run dev
```

## ScreenShot

![Alt text](/public/yu-gi-oh-screenshot.png)

## TRACCIA GIORNO 1

- Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.

- Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php
  e con i dati restituiti, stampate una card per ogni carta. - ATTENZIONE: l'api restituisce tutti i risultati in un colpo solo. Per evitare attese e/o rallentamenti nelle richieste, potete diminuire il numero di risultati sfruttando i parametri num e offset
  https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0

- **Bonus**:
  Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.
  Documentazione: https://ygoprodeck.com/api-guide/

## TRACCIA GIORNO 2

- Continuate a lavorare nella stessa repo di ieri e aggiungete un componente per filtrare le carte di gioco. Procedete in ordine e con calma.

### Milestone 1

- Create un componente BaseSelect per filtrare i risultati in base all’archetipo. Le option della select devono essere popolate dinamicamente chiamando questo endpoint dell'api:
  https://db.ygoprodeck.com/api/v7/archetypes.php

  - Consigli per la M1:
    1. Testare la chiamata dell'API con PostMan
    2. Verificare la struttura dati
    3. Implementare la chiamata Axios all'API
    4. Verificare che il componente BaseSelect riceva correttamente l'array di archetipi
    5. Stampare gli archetipi nelle option della select

### Milestone 2

- Quando l'utente seleziona un valore dalla lista, viene effettuata una chiamata alle API con l'archetipo selezionato

  - Consigli per la M2:
    1. Collegare la select ai data
    2. Verificare che i data siano reattivi al cambio della select
    3. Emettere un custom event per il genitore di BaseSelect passando come parametro il valore della select
    4. Sul genitore ascoltare e gestire l'evento customizzato
       - Costruire l'url dell'API con il parametro del filtro (verificare che l'url sia corretto)
       - Chiamare l'url appena costruito e aggiornare i risultati

**Bonus:**

Creare un componente che mostri il numero totale di risultati ottenuti.
