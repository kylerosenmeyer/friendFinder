//API Routes

//Require the friends.js file to use the friends[] array.
const friends = require("../data/friends.js")

//Export the GET and POST routes for api/friends to be used in server.js
module.exports = function(app) {

    //GET All Possible Friends
    app.get("/api/friends", function(req, res) {

        res.json(friends.friends)
    })

    //Post to Friends
    app.post("/api/friends", function(req, res) {

        let newFriend = req.body 
        friends.friends.push(newFriend)
    })
}