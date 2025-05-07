# Moment 4 - Typescript

Denna uppgift har gått ut på att skapa en webbplats med Angular där man hämtar data från en webbtjänst för att sedan skriva ut den datan till skärmen.
Har använt mig av en extern URL, som är en JSON-fil med ett ramschema. 

Ramschematt läses in och presenteras för användaren i en tabell. Det finns en sökruta som man kan filtrera på, och på kolumnrubrikerna "Kurskod", "Kursnamn" oc "Progression" kan
man sortera ordningen. Det går endast att sortera i fallande ordning. 

## Installation

Eftersom jag redan hade Angular CLI installerat så skapade jag direkt ett nytt projekt genom att köra kommando:

```bash
ng new moment4-typescript
```

För att få igång en localhost med liverserver körde jag kommando:

```bash
ng serve
```

## Använt mig av dessa:
- HTML
- CSS
- TypeScript
- Angular

## Struktur

**src/app/courses** - För att strukturera upp mitt arbete har jag gjort en komponent för "courses" där jag har all kod för det som syns på skärmen. HTML-kod för tabell, CSS för styling av sidan, och en TS-fil för att visa datan, filtrera och sortera.

**src/app/models** - Jag har skapat en models mapp för att lägga in en TS-fil för att exportera mitt interface av kursinformation.

**src/app/services** - Jag har gjort en service för att hämta datan från URL och gjort en funktion för att ladda in kurserna. 