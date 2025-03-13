# API Dokumentation - Användarhantering

## Base URL

http://localhost:3000

## Beskrivning

Detta REST API tillhandahåller CRUD-funktioner (Create, Read, Update, Delete) för att hantera användare. API:t använder Express och JSON-format för datakommunikation.

## Endpoints

### 1. Root - API Information

GET /

Returnerar en kort beskrivning av API:t och dess användning.

Exempel:

GET http://localhost:3000/

Svar:

<h1>Welcome</h1>

### 2. Hämta alla användare

GET /users

Returnerar en lista med alla användare.

Exempel:

GET http://localhost:3000/users

Svar:

[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]

### 3. Hämta en specifik användare

GET /users/************:id

Hämtar en användare baserat på ID.

Parameter:

id (obligatorisk): ID för användaren du vill hämta.

Exempel:

GET http://localhost:3000/users/1

Svar:

{
  "id": 1,
  "name": "Alice"
}

Om användaren inte hittas:

{
  "message": "Användaren kunde inte hittas"
}

### 4. Skapa en ny användare

POST /users

Skapar en ny användare baserat på data i request body.

Request Body:

{
  "name": "Charlie"
}

Exempel:

POST http://localhost:3000/users

Svar:

{
  "id": 3,
  "name": "Charlie"
}

Om name saknas:

{
  "message": "Namn är obligatoriskt"
}

### 5. Uppdatera en användare

PUT /users/************:id

Uppdaterar namnet på en befintlig användare.

Request Body:

{
  "name": "Alice Updated"
}

Exempel:

PUT http://localhost:3000/users/1

Svar:

{
  "id": 1,
  "name": "Alice Updated"
}

Om användaren inte finns:

{
  "message": "Användaren hittades inte"
}

### 6. Ta bort en användare

DELETE /users/************:id

Tar bort en användare baserat på ID.

Exempel:

DELETE http://localhost:3000/users/1

Svar:

{
  "message": "Användaren har tagits bort"
}

Om användaren inte finns:

{
  "message": "Användaren hittades inte"
}

### Felmeddelanden

400 Bad Request: Om ett obligatoriskt fält saknas eller om data är ogiltig.

404 Not Found: Om den angivna resursen (t.ex. användare) inte finns.

500 Internal Server Error: Om det sker ett oväntat serverfel.

### Exempel på HTTP Statuskoder

200 OK: Begäran lyckades.

201 Created: En ny resurs skapades framgångsrikt.

204 No Content: Resursen raderades utan att returnera någon body.

400 Bad Request: Fel i begäran, t.ex. saknas obligatorisk data.

404 Not Found: Resursen finns inte.

### Testa API:t

För att testa detta API kan du använda verktyg som Postman eller Insomnia. Dessa gör det enkelt att skicka HTTP-förfrågningar till servern och visa svaren i användarvänliga format.
