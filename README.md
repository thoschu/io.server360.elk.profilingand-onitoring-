# io.server360.node.profiling-monitoring

Profiling und Monitoring 

node-hc index.js

# Konfiguration

Die Konfiguration von appmetrics findet über die Datei appmetrics.properties statt. Sie liegt normalerweise im Wurzelverzeichnis Ihrer Applikation, kann aber auch in dem Verzeichnis liegen, von dem aus Sie Ihre Applikation starten. Wird das Programm an beiden Orten nicht fündig, wird im Installationsverzeichnis von appmetrics, also node_modules/appmetrics, nach dieser Datei gesucht. Hier befindet sich eine Standardkonfiguration, die bei der Installation des Pakets mit ausgeliefert wird.

In dieser Datei können Sie zum Beispiel die Kommunikation mit einem MQTT-Broker konfigurieren. MQTT ist das Kommunikationsprotokoll, das appmetrics zum Versand der Monitoringinformationen verwendet. Es wurde von IBM für die Machine-to-Machine-Kommunikation entwickelt.

https://codesandbox.io/s/
