// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Restaurant Guests (DATA)
var guests = [
  {
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: ""
  }
];

// Routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html")); //view.html would take the user to view the tables/waitlist
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html")); //add.html would take the user to make a reservation.
});

app.get("/api/tables", function(req, res) { //Displays the JSON objects for tables
  return res.json(characters);
});

app.get("/api/waitlist", function(req, res) { //Displays the JSON objects for the waitlist
    return res.json(characters);
  });


// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("Hot Restaurant listening on PORT " + PORT);
});
