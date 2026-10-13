/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const NAME = "Francesca";
const SURNAME = "Morrone";
console.log(`Ciao, mi chiamo ${NAME} ${SURNAME}`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10;
let b = 3;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log (`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ANNO_NASCITA = 1999;
const ANNO_CORRENTE = 2026;
let currentAge = ANNO_CORRENTE - ANNO_NASCITA;

console.log(`Oggi hai ${currentAge} anni`);
console.log(`Tra 10 anni avrai ${currentAge + 10} anni`);
console.log(`5 anni fa avevi ${currentAge - 5}`);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let eta;
eta = 25;
let maggiorenne = eta >= 18;
console.log(`Età: ${eta} - Maggiorenne: ${maggiorenne}`);


/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let stringVar = "ciao";
let numberVar = 3;
let booleanVar = true;
/* la variabile nullVar ritorna "object" per via di un bug che la community sta cercando di sistemare */
let nullVar = null;
let undefinedVar;

console.log(`La variabile ${stringVar} è di tipo ${typeof stringVar}`);
console.log(`La variabile ${numberVar} è di tipo ${typeof numberVar}`);
console.log(`La variabile ${booleanVar} è di tipo ${typeof booleanVar}`);
console.log(`La variabile ${nullVar} è di tipo ${typeof nullVar}`);
console.log(`La variabile ${undefinedVar} è di tipo ${typeof undefinedVar}`);


/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 5;
let stringa = "5";
console.log(`Il risultato di "numero == stringa" è ${numero == stringa}`);
console.log(`Il risultato di "numero === stringa" è ${numero === stringa}`);
/* il primo è true in quanto == converte le stringhe in numeri, quindi le due variabili sono uguali in valore. 
nel secondo caso, === significa "strettamente uguale a", e non fa conversione di tipo.*/

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA 
   - "5" + 3 -> 53
   - "5" - 3 -> 2
   - true + 1 -> 2
   - "10" * "2" -> 20
   */

   console.log("5" + 3);
   console.log("5" - 3);
   console.log(true + 1);
   console.log("10" * "2");

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n;
n = 5;
let pari = n % 2 === 0;
let divisibilePer3 = n % 3 === 0;
let pariDivisibile = pari && divisibilePer3;

console.log(`${n} è pari: ${pari}`);
console.log(`${n} è pari: ${divisibilePer3}`);
console.log(`${n} è pari e divisibile per 3: ${pariDivisibile}`);

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const A = 4;
const B = 4;
const C = 7;
let perimetro = A + B + C;
let tipo;

if (A === B && B === C) {
   tipo ="equilatero";
   console.log(`Triangolo ${tipo}, perimetro ${perimetro}`);
} else if (A === B || B === C || C === A) {
   tipo = "isoscele";
   console.log(`Triangolo ${tipo}, perimetro ${perimetro}`);
} else {
   tipo = 'scaleno';
   console.log(`Triangolo ${tipo}, perimetro ${perimetro}`);
}



