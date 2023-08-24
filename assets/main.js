/* Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.


MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in solo console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

/* Strumenti:
- prompt x2 (km del viaggio e eta' del passeggero)
- console.log(typeof Number(quantity))
- moltiplico i km per 0.21
- if eta' > o uguale 65: -40%
- if eta' < o = 17: -20%
- console.log 
*/

const price_per_km = 0.21;
document.getElementById("generate").addEventListener("click", function () {
  const user = document.getElementById("userName").value;
  console.log(user);
  const km = document.getElementById("trainJourney").value;
  console.log(km);
  const age = document.getElementById("userAge").value;
  console.log(age);

  let ticket_price = km * price_per_km;
  console.log(ticket_price);

  let discount = 0;

  if (age == "Minorenne") {
    console.log("sei minorenne, ti faccio il 20% di sconto");
    discount = ticket_price * 0.2;
    ticket_price = ticket_price - discount;
  }
  if (age == "Piu' di 65") {
    console.log("sei over 65, ti faccio il 40% di sconto");
    discount = ticket_price * 0.4;
    ticket_price = ticket_price - discount;
  }

  console.log("il prezzo del biglietto = " + ticket_price + " euro");

  let yourTicket =
    user + " il prezzo del tuo biglietto e' " + ticket_price + " Euro";

  document.getElementById("name").innerHTML = "Nome e       Cognome: " + user;
  document.getElementById("journey").innerHTML =
    "Km da percorrere: " + km + " kilometri;";
  document.getElementById("eta").innerHTML = "Fascia d'eta': " + age;
  document.getElementById("yourTicket").innerHTML = yourTicket;
});
