// Route to POST to tables object

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