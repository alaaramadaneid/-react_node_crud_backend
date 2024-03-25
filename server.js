//creation le server Express
const express = require('express')
const cors = require("cors")
const mysql = require("mysql")


const app = express()
app.use(express.json()); // Middleware pour analyser les corps de requête au format JSON
app.use(cors()); // Middleware pour gérer les requêtes CORS

// Connexion à la base de données MySQL

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: "alaa",
    database:"crud"

})

// Check MySQL connection
db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });
  
 // Vérifier la connexion à MySQL

  app.get('/', (req, res) => {
    const sql = 'SELECT * FROM student';
    db.query(sql, (err, data) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(data);
    });
  });
  // Endpoint pour créer un nouvel étudiant

  app.post('/create', (req, res) => {
   const sql = "INSERT INTO student (`Name`, `Email`) VALUES (?)";
   const values = [

    req.body.name,
    req.body.email
   ]
   db.query(sql, [values], (err, data) => {
    if(err) return res.json("Error");
    return res.json(data);
   })
  })

  // Endpoint pour mettre à jour un étudiant existant

  app.put('/update/:id', (req, res) => {
    const sql = "UPDATE student SET Name = ?, Email = ? WHERE Id = ?";
    const values = [req.body.name, req.body.email, req.params.id];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(data);
    });
});
// Endpoint pour supprimer un étudiant existant
app.delete('/student/:id', (req, res) => {
    const sql = "DELETE FROM student WHERE Id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(data);
    });
});

// Démarrer le serveur

  const PORT = process.env.PORT || 8001;
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });