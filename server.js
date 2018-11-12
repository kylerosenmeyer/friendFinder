//Set up initial variables
const 
    express = require("express"),
    htmlRoutes = require("./app/routing/htmlRoutes.js"),
    apiRoutes = require("./app/routing/apiRoutes.js")
        
let app = express(),
    PORT = process.env.PORT || 8080

//Set up middlewhere
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Bring in the HTML Routes
htmlRoutes(app)

//Bring in the API Routes
apiRoutes(app)

//Set up port connection
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})