# Save the Princess - Mysql Coding Game

## Intro 

Prinzessin Amalya wurde entführt und in ein dunkles Verlies gesperrt. Du hast das Verlies bereits erreicht, aber es ist mit einer digitalen Sicherung verschlossen. 
Prinzessin Amalya flüstert Dir zu, dass die Tür nur über eine Statusänderung in der Kerker-Datenbank auf dem Server <IP: 192.168.178.134> geöffnet werden kann.

Neben der Tür befindet sich ein kleiner Tisch mit Bildschirm und eine Tastatur. Am Bildschirm hängt ein Klebezettel mit folgender Aufschrift:

orkse 123
urukhai sodom13
saruman urusai_chigai

Du vermutest, dass das die Zugangsdaten für den Datenbank-Server sind. Melde Dich an, und finde heraus welche Datenbanken für Dich relevant sind.

## Zielpublikum

Lernende, die sich per mysql-client an einem DB-Server anmelden können und die grundlegenden CRUD Befehle von SQL beherrschen (sollten)

## Vorgehen

Der visuelle Teil des Games wird auf einem Webserver visualisiert.
Der DBMS-Teil wird auf einer Mysql-DB Instanz installiert.

Webserver und Mysql-DB sollten auf dem gleichen IP Adresse erreichbar sein. Idealer *Kerkerserver* ist beispielsweise ein Raspi, der mit dem Schul-WLAN verbunden ist.
Die Lernenden öffnen die IP im Browser, und verbinden sich gleichzeitig mit dem DBMS via mysql-client, wo alles live ausprobiert werden kann.
Sachdienliche Hinweise werden nach der Beantwortung der Fragen im Browser angezeigt.

Have fun!

<img src="github_readme.jpg" alt="Screenshot Web-UI" title="Screenshot Web-UI" width=400>
