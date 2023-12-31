# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
# Scaffolding progetto

## Se creo prima repo

- clona la repo dentro cartella esercizi
- apro la cartella in vs code
- digitare:
  ```sh
    npm create vue@latest
  ``` 
  alla prima domanda sul nome del progetto mettere un punto ad indicare che il progetto è quello della cartella corrente

  alla seconda domanda 'pacckage-name' inserire il nome del progetto ovvero lo stesso nome della repo

  proseguire rspondndo sempre no

- digitare:
    ```sh
        npm install
    ```
- per controllare che tutto funziona far partire il server
    ```sh
        npm run dev
    ```
- per arrestare il server:
```sh
        ctrl + c
``` 


## Se creo prima progetto

- apro la cartella degli esercizi in vs  code
- digitare:
  ```sh
    npm create vue@latest
  ``` 
  alla prima domanda sul nome del progetto mettere il nome della repo

  proseguire rspondendo sempre no

  mi porto dentro la cartella creata:
  ```sh
        cd  nome repo
        code . -r
    ```
- digitare:
    ```sh
        npm install
    ```
- per controllare che tutto funziona far partire il server
    ```sh
        npm run dev
    ```
- per arrestare il server:
```sh
        ctrl + c
``` 

Se tutto funziona pusho su github

## Pulizia dello scaffolding

- Apro App.vue e cancello tutto e scrivo il mio codice in modalità 'options'
- Apro la cartella components e la svuoto
- Apro la cartella assets svuoto tutto tranne main.css
- Cancello tutto il contenuto del main.css e lo rinomino in main.scss
- creo in assets le cartelle images e styles
- sposto dentro la cartella styles main.scss
- aggiorno il path a main.scss in main.js
- aggiungo eventuale cartella immagini a public
- aggiungo dentro la cartella styles una cartella partials per i file partial scss (es. varibili, animazioni, mixins, ecc) 


## Installare dipendenze

```sh
       npm install -D sass
``` 

```sh
       npm install bootstrap axios @fortawesome/fontawesome-free
``` 

- importo bootstrap dentro main.scss @import 'bootstrap/scss/bootstrap';

## progetto
- nome repo: proj-html-vuejs
- nome progetto: bakery
- tempo: (3 giorni) da consegnare entro **Giovedì 23/11 ore 18:00**


## Milestone 0

- crea il file README.md con milestone iniziali
- crea repo e scaffolding e carica immagini nelle cartelle
- crea la prima struttura base dell'html e inizia a dividere le sezioni della pagina 
- implementa struttura header diviso in due compunenti navbar e jumbotron
- dividi il main in section e identifica un nome per ogni sezione
- crea un footer

## Milestone 1

- creare un file di raccolta dati da utilizzare nella pagina 
- crea un array di oggetti **pastries** con le seguenti caratteristiche:
```sh
pastries = [
    {
        name:"String",
        catcategory:"String",
        type:"String",
        firstPrice:Number,
        secondPrice:Number,
        discount:Boolean,
       },
]

```
- creare un array per le parole della navbar
- es.
```sh
navbarWords = 
    {
        'home','shop','about','gallery','locations','journal','contact'
    }


```

## Milestone 2

- crea tutto l'header con la navbar e il jumbotron con la grafica e hover
- inizia a implementare la struttura della prima section

## Milestone 3

- crea la seconda section creando una row con due colonne 
- dai hover alle immagini

## Milestone 4 

- crea la terza section 
- dividi in due colonne la perte di testo e lo slider

## Milestone 5
- crea la quarta sezione dividendo in 3 row con le necessarie col 
- inserisci il testo per ogni col 

## Milestone 6

- crea quinta sezione 
- crea due schede con immagini delle bakery di londra e newyork e inserisci riquadro sotto rispettive immagini con
i dettaggli seguenti: numero di tel. , orari di apertura, bottone per la mappa.

## Milestone 7

- crea sesta sezione
- crea 6 card con delle immagini con hover zoom e nella prima riga inserisci un riquadro con il contatto instagram 

## Milestone 8 
- crea la settina section 
- crea uno spazio per fare acquisti sul negozio, mettendo uno sfondo a tutto schermo con un bottone al suo in terno che porta a un negozio

## milestone 9
- crea il footer dividendolo in due sezioni 
- in una sezione c'è un menù come quello della navbar 
- nell'altra sezione c'è un input per inserire la email e iscriversi

## Milestone 10
- aggiungi quadtrati in position fixed a lato della pagina
- aggiungi animazioni