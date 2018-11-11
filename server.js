//Set up initial variables
const 
    express = require("express"),
    path = require("path")
        
let app = express(),
    PORT = process.env.PORT || 8080

//Set up middlewhere
app.use(express.json())












//Set up port connection
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    })