//*API Routes

//Require the friends.js file to use the friends[] array.
const friends = require("../data/friends.js")

//Export the GET and POST routes for api/friends to be used in server.js
module.exports = function(app) {

    //GET All Possible Friends
    app.get("/api/friends", function(req, res) {

        let allFriends = {
            friends: friends.friends,
            pFriend: friends.pFriend
        }
        //Respond to the route request with all of the friends data.
        res.json(allFriends)
    })

    //Post to Friends
    //This section contains all of the app logic, desribed below.
    app.post("/api/friends", function(req, res) {

        let newFriend = req.body,
            friendScore = 0,
            totalScores = []

        //Push the newFriend object into the friends[] array.
        friends.friends.push(newFriend)

        //Run a loop through the friends[] array to compare the user's profile to the available friends.
        for ( let i=0; i<friends.friends.length; i++) {

            //At the beginning of the loop, set the friendScore to zero. This should be reset before comparing the user to 
            //the next available friend in the database.
            friendScore = 0
            // console.log("newFriend: ", newFriend.name)
            // console.log("compare to: ", friends.friends[i].name)

            //Check to see if the user is comparing against some1 of the same name. Assume a score of 1000 (virtually assured)
            //not to be a match.
            if ( newFriend.name !== friends.friends[i].name ) {

                //Once we have two potential friends to compare, run through their scores one by one and tally the difference.
                for ( let j=0; j<newFriend.score.length; j++ ) {

                    var scoreComparison = Math.abs(newFriend.score[j]-friends.friends[i].score[j])
                    friendScore += scoreComparison 
                }
                
                //After the total difference is tallied, push it to the totalScores[] array.
                totalScores.push(friendScore)
                // console.log("totalScores: ", totalScores)

            } else totalScores.push(1000)
        }

        //Proceed to select the best friend match if there is data in the totalScores[] array.
        if ( totalScores.length > 0 ) {

            //Grab the lowest score from totalScores, and the index of that score.
            //The index position here will match the friends[] array.
            let friendSelection = Math.min.apply(Math, totalScores),
                friendIndex = totalScores.indexOf(friendSelection)

            // console.log("friendSelection: ", friendSelection)
            // console.log("friendIndex: ", friendIndex)

            // Check that we are not experiencing a negative friendIndex position and that we have a better match than 1000.
            if ( ( friendIndex !== -1 ) && ( friendSelection !== 1000 ) ) {

                let perfectName = friends.friends[friendIndex].name,
                    perfectPhoto = friends.friends[friendIndex].photo,
                    perfectFriend = {
                        perfectName: perfectName,
                        perfectPhoto: perfectPhoto
                    }
            
                // console.log("Perfect Friend: ", perfectName)
                // console.log("Perfect Photo: ", perfectPhoto)
                
                //Push the best friend match into the pFriend[] array, which will be available to survey.html.
                friends.pFriend.push(perfectFriend)
            }
        } 
    })
}