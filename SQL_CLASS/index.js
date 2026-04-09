const express = require('express');
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

function getRandomUser() {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ImPrion#@$257',
  database: 'test_db'
});

// let query = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser());
// }

// try {
//   connection.query(query, [data], (error, results) => {
//     if (error) throw error;
//     console.log(results);
//   });
// } catch (error) {
//   console.log(error);
// } 

// connection.end(); 

// home route
app.get("/", (req, res) => {
  let query = `SELECT COUNT(*) FROM user`;
  try {
    connection.query(query, (error, results) => {
      if (error) throw error;
      let count = results[0]['COUNT(*)'];
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(error);
  }
});

// show users route
app.get("/users", (req, res) => {
  let query = `SELECT id,username,email FROM user`;
  try {
    connection.query(query, (error, results) => {
      if (error) throw error;
      res.render("show.ejs", { results });
    });
  } catch (error) {
    console.log(error);
  }
});

// Edit route
app.get("/users/:id/edit", (req, res) => {
  let { id } = req.params;
  let query = `SELECT * FROM user WHERE id = ?`;
  try {
    connection.query(query, [id], (error, results) => {
      if (error) throw error;
      console.log(results);
      let user = results[0];
      res.render("edit.ejs", { user });
    });
  } catch (error) {
    console.log(error);
  }
});
// Update route
app.patch("/users/:id", (req, res) => {
  let { id } = req.params;
  let { username: newUsername, password: formpass } = req.body;
  let query = `SELECT * FROM user WHERE id = ?`;
  try {
    connection.query(query, [id], (error, results) => {
      if (error) throw error;
      let user = results[0];
      if (formpass !== user.password) {
        return res.send("Password incorrect. Update failed.");
      } else {
        let query2 = `UPDATE user SET username= ? WHERE id = ?`;
        connection.query(query2, [newUsername, id], (error2, results2) => {
          if (error2) throw error2;
          res.redirect("/users");
        });
      } 
    });
  } catch (error) {
    console.log(error);
  }
});

// Add route
app.get("/users/new", (req, res) => {
  res.render("add.ejs");
});
// update route
app.post("/users", (req, res) => {
  let { id, username, email, password } = req.body;
  let query = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
  try {
    connection.query(query, [id, username, email, password], (error, results) => {
      if (error) throw error;
      res.redirect("/users"); 
    });
  } catch (error) {
    console.log(error);
  }
});

// delete confirmation route
app.get("/users/:id/delete", (req, res) => {
  let { id } = req.params;
  let query = `SELECT id FROM user WHERE id = ?`;
  connection.query(query, [id], (error, results) => {
    if (error) throw error;
    let user = results[0];
    res.render("delete.ejs", { user });
  });
});
// delete route
app.delete("/users/:id", (req, res) => {
  let { id } = req.params;
  let { password: formpass } = req.body;
  let query = `SELECT password FROM user WHERE id = ?`;
  try {
    connection.query(query, [id], (error, results) => {
      if (error) throw error;
      let user = results[0];
      if (formpass !== user.password) {
        return res.send("Incorrect password. Deletion failed.");
      }
      let query2 = `DELETE FROM user WHERE id = ?`;
      connection.query(query2, [id], (error2, results2) => {
        if (error2) throw error2;
        res.redirect("/users");
      });
    });
  } catch (error) {
    console.log(error);
  }
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
}); 