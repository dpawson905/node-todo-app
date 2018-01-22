const express = require("express"),
      app     = express(),
      port    = process.env.PORT || 3000,
      bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const todoRoutes = require("./routes/todos");

app.get('/', function(req, res) {
    res.send("Hello from the root route");
});

app.use('/api/todos', todoRoutes);
      
app.listen(port, function() {
    console.log("App is running on " + process.env.PORT);
});