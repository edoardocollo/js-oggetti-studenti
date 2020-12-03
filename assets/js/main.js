var gameh1 = $('.gameh1');
var dragon = $('.dragon');
var street = $('.street');
var slug = $('.slug');
var gameh2 = $('.gameh2');
setTimeout(function () {

  gameh1.removeClass('o0').addClass('o1')
}, );
setTimeout(function () {
  gameh1.removeClass('o1').addClass('o0')
  dragon.removeClass('o0').addClass('o1')
}, 2000);
setTimeout(function () {
  dragon.removeClass('o1').addClass('o0')
  street.removeClass('o0').addClass('o1')
}, 4000);
setTimeout(function () {
  street.removeClass('o1').addClass('o0')
  slug.removeClass('o0').addClass('o1')
}, 6000);
setTimeout(function () {

  slug.removeClass('o1').addClass('o0')
  gameh2.removeClass('o0').addClass('o1')
}, 8000);






// // // // // 1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
  img : 'img/Darth-Vader.png',
  nome : 'Edoardo',
  cognome : 'Collo',
  eta : 32
};
  var target = $('#alert_box');
setTimeout(function () {
  target.html('');
  for (var key in studente) {
    var contenuto = target.html()
    if (key == 'img') {
      target.html(contenuto + `<h1>Player 1</h1><img src="${studente[key]}">`);

    }else{

      target.html(contenuto + `<h2>${key}:</h2> <p>${studente[key]}</p>`);
    }
  }
}, 10000);


// // // 2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// // //////////////////////////////////////////////////////////
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

    target.html(contenuto2 + `<div class="small_card"><h2>Player${(i + 1)}</h2><img src="${imgStudente}"><h3>nome:</h3> <p>${nomeStudente}</p><h3>cognome:</h3> <p>${cognomeStudente}</p><h3>eta':</h3> <p>${etaStudente}</p>`);
    contatoreStudenti++;
  }
}, 12000);



// 3 Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
setTimeout(function () {
  target.html('');

  var newNomeUtente = prompt('inserisci il nome del tuo personaggio');
  var newCognomeUtente = prompt('inserisci un cognome per il tuo personaggio');
  var newEtaUtente = prompt("inserisci l'età del tuo personaggio");
  var newUtente = {}
  newUtente.img = 'img/mask.png'
  newUtente.nome = newNomeUtente;
  newUtente.cognome = newCognomeUtente;
  newUtente.eta = newEtaUtente;
  console.log(newUtente);
  studenti.push(newUtente);
  studenti.unshift(studente);
  var contatoreStudenti = 1;
  console.log(studenti);

  for (var i = 0; i < studenti.length; i++) {
    var nomeStudente = studenti[i].nome;
    var cognomeStudente = studenti[i].cognome;
    var contenuto2 = target.html()

    target.html(contenuto2 + `<p class+"pmini">Studente ${contatoreStudenti} nome: ${nomeStudente} cognome: ${cognomeStudente}</p>`);
    contatoreStudenti++;
  }

}, 16000);

setTimeout(function () {
  target.html('');
  target.css('flexDirection','column');
  target.css('flexWrap','no-wrap');

  var profiloGiocatore = studenti[(studenti.length - 1)];
  for (var key in profiloGiocatore) {
    var contenuto = target.html()
    if (key == 'img') {
      target.html(contenuto + `<h1>Player 6</h1><img src="${profiloGiocatore[key]}">`);

    }else{

      target.html(contenuto + `<h2>${key}:</h2> <p>${profiloGiocatore[key]}</p>`);
    }
  }
}, 20000);
