<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Save the Princess</title>
  <link rel="stylesheet" href="css/style.css"/>
</head>
<body>
  <article class="">
    <h1>Save the Princess (mit MySQL)</h1>
    <p id="intro"><img id="img_zelda" src="img/zelda_prison.png" alt="" style="margin: 5px;float: right";>
    Prinzessin Amalya wurde entführt und in ein dunkles Verlies gesperrt. Du hast das Verlies bereits erreicht, aber es ist mit einer digitalen Sicherung verschlossen. Prinzessin Amalya flüstert Dir zu, dass die Tür nur über eine Statusänderung in der Kerker-Datenbank auf dem Server <?php echo $_SERVER['SERVER_ADDR']; ?> geöffnet werden kann.</p>
    <hr>
    <div id="message">

    </div>
    <hr>
    <div>

      <form class="" action="." method="post">
        <label id="answer_label" for="answer_txt"></label><br>
        <input type="text" id="answer_txt"><br>
        <button id="weiter">Weiter</button>
      </form>


    </div>
    <hr>
    <div id="info">

    </div>
    <hr>
    <label for="darkmode">Darkmode</label><input type="checkbox" id="darkmode">
  </article>

  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/stp.js"></script>
  <script type="text/javascript">
    $('#darkmode').on('click',function(){
      var style = "style"
      if ($('#darkmode').prop('checked')==true){
        //style = "style_dark"
        $('body').addClass('dark')
      }
      else {
        $('body').removeClass('dark')
      }
    })
  </script> 
</body>
</html>
