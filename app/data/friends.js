//The array friends[] will store the data of each user while the server is running. This is only persistant as long as the 
//server is running. 

let friends = [],
    pFriend = []

//Export the array to be used in apiRoutes.js
module.exports = {
    friends: friends,
    pFriend: pFriend
}