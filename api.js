// Tables object
    // custonerName
    // phoneNumber
    // customerEmail
    // customerID

// Waitlist object

// Displays all tables
app.get("/api/tablesReservation", function(req, res) {
    return res.json(tablesReservation);
  });

// Display waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });