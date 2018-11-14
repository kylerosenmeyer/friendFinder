//HTML Routes

//Require express and path modules to build the GET routes.
const 
    express = require("express"),
    path = require("path")

//Export the GET routes for home.html, survey.html, and the local CSS files to be used in server.js.
//This controls what the user sees.
module.exports = function(app) {

    app.use(express.static(path.join(__dirname, "../public")))

    //*Home Page
    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname,"../public", "home.html"))
    })

    //Survey Page + Catch All
    app.get("/:path", function(req, res) {

        let catchAll = req.params.path

        if ( catchAll === "survey" ) {

            
            //Serve the survey.html page if the route is /survey
            res.sendFile(path.join(__dirname,"../public", "survey.html"))
            
        } else if ( catchAll !== "api/friends" ) {

            //Serve the home.html page if the route is anyting else (except api/friends)
            res.sendFile(path.join(__dirname,"../public", "home.html"))
        }
    })
}
  

