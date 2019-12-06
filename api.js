// Route to POST to tables object
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  // Displays all characters
  app.get("/api/characters", function(req, res) {
    return res.json(characters);
  });
// Tables object
    // custonerName
    // phoneNumber
    // customerEmail
    // customerID

// Waitlist object

// Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

// Display waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(tables);
  });