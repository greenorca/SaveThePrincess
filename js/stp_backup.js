$(document).ready(function(){
  var stage = 1;
  var misses = 0;
  init();

  $(this).on('contextmenu', function(e){
	alert("Verlaufen?");
        e.preventDefault();
  });

  $('#weiter').on('click', function(){
    console.log("weiter geklickt: " + stage);
    switch (stage){
      case 1: checkCorrectDatabase(); break;
      case 2: checkIdPrincess(); break;
      case 3: checkKerkerNummer(); break;
      case 4: checkUpdateCommand(); break;
      default : init();
    }
    event.preventDefault();
  })

  function init(){
    clearInfo();
    $('#img_zelda').attr("src","img/zelda_prison.png");
    $('#message').empty();
    $("<p>Neben der Tür befindet sich ein kleiner Tisch mit Bildschirm und eine Tastatur. Am Bildschirm hängt ein Klebezettel mit folgender Aufschrift:</p>").appendTo('#message');
    $("<pre>orkse 123\nurukhai sodom13\nsaruman urusai_chigai</pre>").appendTo('#message');
    $('<p>Du vermutest, dass das die Zugangsdaten für den Datenbank-Server sind. Melde Dich an, und finde heraus welche Datenbanken für Dich relevant sind.</p>').appendTo('#message');

    $('#answer_label').text("In welcher Datenbank befinden sich die relevanten Informationen?");
    stage = 1;
    clearInfo();
  }

  function checkCorrectDatabase(){
    if ($('#answer_txt').val()=="kerkerdaten"){

      $('<p>Prima! Finde nun heraus, welche Nummer (bzw. ID) die Prinzessin hat.</p>').appendTo('#message');
      $('#answer_label').text("Mit welcher ID ist Prinzessin Amalya in der DB gespeichert?");
      stage++;
      clearInfo();
    }
    else {
      var help_msg = "Ohh, das ist nicht die richtige Datenbank!"
      if (misses % 2 == 1) help_msg = help_msg + " Zum Einloggen benutzt man folgenden Befehl: mysql -u xyz -p -h hostname.";
      else if (misses >= 2) {
        help_msg = help_msg + " Nach erfolgreicher Anmeldung vorhandene (und berechtigte) Datenbanken anzeigen: SHOW DATABASES;"
      } else if (misses > 6){
        help_msg = help_msg + " Bitte mit dem Benutzer Saruman einloggen. Die richtige Datenbank heisst kerkerdaten."
      }
      setInfo(help_msg);
      misses++;
    }
  }

  function checkIdPrincess(){
    if ($('#answer_txt').val()==="42"){
      $('#message').empty();
      $('<p>Good job! Finde nun heraus, in welchem Kerker sich die Prinzessin befindet.</p>').appendTo('#message');
      $('#answer_label').text("Welche ID hat der Kerker der Prinzessin?");
      stage++;
      clearInfo();
    }
    else {
      setInfo("Ohh, das ist nicht die richtige Prinzessin!");
      misses++;
    }
  }

  function checkKerkerNummer(){
    if ($('#answer_txt').val()==="3"){
      $('#message').empty();
      $('<p>Good job! Jetzt öffne den Kerker der Prinzessin. Achtung - die Monster in den anderen Kerkern dürfen nicht befreit werden!</p>').appendTo('#message');
      $('#answer_label').text("Mit welchem SQL-Befehl kannst Du den Kerker aufsperren?");
      stage++;
      clearInfo();
    }
    else {
      setInfo("Ohh, das ist nicht die richtige Tür!");
      misses++;
    }
  }

  function checkUpdateCommand(){
    var answer = $('#answer_txt').val()
      .toLowerCase()
      .replaceAll("= ", "=").replaceAll(" =","=")
      .replace(";","")
      .replace(/["']/g, "'");

    if ( answer == "UPDATE kerker SET tuer_zustand='offen' WHERE id=3".toLowerCase()
    ){
      $('#message').empty();
      $('<p class="win">Exzellent! Die Prinzessin ist befreit, und Du bist ein(e) SQL-Superheld(in)!</p>').appendTo('#message');
      $('#answer_label').text("");
      $('#img_zelda').attr("src","img/zelda.png");
      stage++;
      clearInfo()
    }
    else {
      misses++;
      if (
        answer.startsWith("UPDATE kerker SET tuer_zustand='offen' WHERE id=".toLowerCase())
      ) {
        setInfo("Ohh, das ist nicht die richtige Tür!");
      }
      else if (answer.startsWith("UPDATE kerker SET tuer_zustand='offen'".toLowerCase())
      ) {
        setInfo("Ohh my goodness, alle Monster sind frei (und fressen die Prinzessin) :| !");
      }
      else if (answer.startsWith('UPDATE kerker SET tuer_zustand='.toLowerCase())
      ) {
        setInfo("Der Anfang stimmt. Welche Werte kann der tuer_zustand annehmen?");
      }
      else if (answer.startsWith('UPDATE kerker SET'.toLowerCase())
      ) {
        setInfo("Der Anfang stimmt. Welche Spalte soll geändert werden?");
      }
      else if (answer.startsWith('UPDATE kerker'.toLowerCase())
      ) {
        setInfo("Der Anfang stimmt...");
      }
      else {
        setInfo("Mit welchem Befehl können die Daten in einer Tabelle geändert werden?");
      }
    }
  }

  function clearInfo(){
    $('#info').text("");
    $('#answer_txt').val("");
  }

  function setInfo(message){
    $('#info').text(message);
  }

});
