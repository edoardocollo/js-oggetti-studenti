// // // // 1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
  img : 'img/Darth-Vader.png',
  nome : 'Edoardo',
  cognome : 'Collo',
  eta : 32
};
var target = $('#alert_box');
for (var key in studente) {
  var contenuto = target.html()
  if (key == 'img') {
    target.html(contenuto + `<img src="${studente[key]}">`);

  }else{

    target.html(contenuto + `<h2>${key}:</h2> <p>${studente[key]}</p>`);
  }
}




// // 2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// //////////////////////////////////////////////////////////
setTimeout(function () {
  target.html('');
  // genero array oggetti
  studenti = [
    {
      img : 'img/Clone-Trooper.png',
      nome : 'mario',
      cognome : 'rossi',
      eta : 22
    },
    {
      img : 'img/Death-Sta.png',
      nome : 'gino',
      cognome : 'bianchi',
      eta : 30
    },
    {
      img : 'img/Master-Joda.png',
      nome : 'beppe',
      cognome : 'gialli',
      eta : 40
    },
    {
      img : 'img/R2D2.png',
      nome : 'gigi',
      cognome : 'verdi',
      eta : 27
    },
  ]
  // ciclo l'array per stampare valori
  var contatoreStudenti = 1;
  target.css('flexDirection','row');
  target.css('flexWrap','wrap');

  for (var i = 0; i < studenti.length; i++) {
    var imgStudente = studenti[i].img;
    var nomeStudente = studenti[i].nome;
    var cognomeStudente = studenti[i].cognome;
    var etaStudente = studenti[i].eta
    var contenuto2 = target.html()

    target.html(contenuto2 + `<div class="small_card"><img src="${imgStudente}"><h3>nome:</h3> <p>${nomeStudente}</p><h3>cognome:</h3> <p>${cognomeStudente}</p><h3>eta':</h3> <p>${etaStudente}</p>`);
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
