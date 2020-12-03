// // // 1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
  nome : 'mario',
  cognome : 'rossi',
  eta : 22
};
var target = $('#alert_box');
for (var key in studente) {
  var contenuto = target.html()
  target.html(contenuto + `<p>${key}: ${studente[key]}</p>`)
}




// // 2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// //////////////////////////////////////////////////////////
setTimeout(function () {
  target.html('');
  // genero array oggetti
  studenti = [
    {
      nome : 'mario',
      cognome : 'rossi',
      eta : 22
    },
    {
      nome : 'gino',
      cognome : 'bianchi',
      eta : 30
    },
    {
      nome : 'beppe',
      cognome : 'gialli',
      eta : 40
    },
    {
      nome : 'gigi',
      cognome : 'verdi',
      eta : 27
    },
  ]
  // ciclo l'array per stampare valori
  var contatoreStudenti = 1;

  for (var i = 0; i < studenti.length; i++) {
    var nomeStudente = studenti[i].nome;
    var cognomeStudente = studenti[i].cognome;
    var contenuto2 = target.html()

    target.html(contenuto2 + `<p>Studente ${contatoreStudenti} nome: ${nomeStudente} cognome: ${cognomeStudente}</p>`);
    contatoreStudenti++;
  }
}, 5000);



// 3 Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
setTimeout(function () {
  target.html('');

  var newNomeUtente = prompt('inserisci un nome utente');
  var newCognomeUtente = prompt('inserisci un cognome utente');
  var newEtaUtente = prompt("inserisci un' età utente");
  var newUtente = {}
  newUtente.nome = newNomeUtente;
  newUtente.cognome = newCognomeUtente;
  newUtente.eta = newEtaUtente;
  console.log(newUtente);
  studenti.push(newUtente);
  console.log(studenti);

  var contatoreStudenti = 1;

  for (var i = 0; i < studenti.length; i++) {
    var nomeStudente = studenti[i].nome;
    var cognomeStudente = studenti[i].cognome;
    var contenuto2 = target.html()

    target.html(contenuto2 + `<p>Studente ${contatoreStudenti} nome: ${nomeStudente} cognome: ${cognomeStudente}</p>`);
    contatoreStudenti++;
  }

}, 10000);
