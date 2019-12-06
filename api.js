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

  app.post("/api/tablesReservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    tableArray.push(newReservation);
  
    res.json(newReservation);
  });

  app.post("/api/waitlist", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newWait = req.body;
  
    newWait.routeName = newWait.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newWait);
  
    waitingArray.push(newWait);
  
    res.json(newWait);
  });