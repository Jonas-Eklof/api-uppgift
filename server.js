const express = require("express");
const app = express();
PORT = 3000;

// Middleware för att tolka JSON i inkommande requests
app.use(express.json());

// Temporär array för att lagra användardata
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

app.get("/", (req, res) => {
  res.send(`<h1>Welcome</h1>`);
});

app.post("/data", (req, res) => {
  console.log("Förfrågan har mottagits");
  res.send("Förfrågan har mottagits");
});

// Hämtar alla användare
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "Användaren kunde inte hittas" });
  }
  res.json(user); // Returnerar den hittade användaren
});

app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name }; // Skapar en ny användare med unikt ID
  users.push(newUser); // Lägger till den nya användaren i listan
  res.status(201).json(newUser); // Returnerar den skapade användaren med statuskod 201 (created)
});

app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).json({ message: "Användaren hittades inte" });

  user.name = req.body.name;
  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id !== parseInt(req.params.id)); // Filtrerar bort användaren från listan
  res.json({ message: "Användaren har tagits bort" }); // Bekräftelse att användaren har tagits bort
});

// About-rutt
app.get("/about", (req, res) => {
  res.json({ version: "1.0.0", author: "Jonas" });
});

// 404-felhantering
app.use((req, res) => {
  res.status(404).json({ message: "Sidan kunde inte hittas" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
