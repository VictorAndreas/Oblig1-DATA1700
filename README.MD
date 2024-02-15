# Oblig 1 DATA1700
Applikasjon som registrerer informasjon fra input-bokser og legger til informasjon som et objekt i et array med javascript. 
Inn-data fra Input kontrolleres før det blir lagt til som et objekt med if-setninger. 
Feilmeldinger vises via klasser som vises når if-setningen oppfylles.
Resetting av input-boksene kjøres gjennom en egen clear-funksjon. Resetting av feilmeldinger har også egen clear-funksjon.
Lager en tabell som vises i div id="alleBilletter"></div, og printer ut verdiene til tabellen gjennom en for-løkke.
Til slutt er det en funksjon som kan kjøres for å fjerne teksten om lagret billettinformasjon samt sletter objektene fra BillettArray-et.
Feilmeldingene vises ikke ideelt ettersom det ikke er noe CSS på siden som uthever teksten. Det var også ønskelig å bruke HTML-funksjoner som pattern, required, type = "email" etc for å kontrollere input-informasjon, men det ble overskrevet av JavaScript-koden for å kunne lagre i Arrayet. Endret if-setningene til å bruke regex patterns i stedet. 
