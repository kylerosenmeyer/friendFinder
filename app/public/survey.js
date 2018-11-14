//*Survey.html javascript lives here.

$(".row2, .row3, .row4, .row5, .row6, .row7, .row8, .row9, .row10, .row11, .row12, .row13").fadeOut(0)

//The submitSurvey event grabs all the data from the user's entry, posts it to /api/friends for processing, and grabs the resulting match.
$("#submitSurvey").click( function(event) {

    //Prevent the page from refreshing.
    event.preventDefault()
    
    
    $(".row1, .row2, .row3, .row4, .row5, .row6, .row7, .row8, .row9, .row10, .row11, .row12, .row13").fadeOut(1000, function() {
        window.scrollTo(0,0)
    })

    //Grab the input data.
    let name = $("#inputName").val().trim(),
        photo = $("#inputPhoto").val().trim(),
        q1 = $("#inputQ1").val(),
        q2 = $("#inputQ2").val(),
        q3 = $("#inputQ3").val(),
        q4 = $("#inputQ4").val(),
        q5 = $("#inputQ5").val(),
        q6 = $("#inputQ6").val(),
        q7 = $("#inputQ7").val(),
        q8 = $("#inputQ8").val(),
        q9 = $("#inputQ9").val(),
        q10 = $("#inputQ10").val()

    let newScore = []
    //Store the score data in an array.
    newScore.push(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10)
    
    //Create the newFriend object to be sent to the server.
    let newFriend = {
        name: name,
        photo: photo,
        score: newScore
    }

    // console.log("This is your profile: \n", newFriend)
    
    //POST the newFriend object to /api/friends.
    $.post("/api/friends", newFriend)
        .then( function() {
            // console.log("Profile Add to the Friend Finder!")
        })
    
    //In between these two AJAX calls, apiRoutes is handeling all the processings.
        
    //after 1 second, grab the resulting match from api/friends.
    setTimeout( function() {
        
        $.get("/api/friends", function(data) {
            
            if ( data.pFriend.length !== 0 ) {

                //Attach the information to id's on this page, and trigger the modal.
                $("#matchName").text(perfectFriend.perfectName)
                $("#matchPhoto").attr("src", perfectFriend.perfectPhoto)
                $("#perfectMatchModal").modal("toggle")
            } else {
                $("#noMatchModal").modal("toggle")
            }
        })
    },1000)
    
})

$("#submitName").click( function() {

    $(".row2").fadeIn(1000)
})

$("#submitPhoto").click( function() {

    let photoUrl = $("#inputPhoto").val().trim()
    $("#userPhoto").attr("src", photoUrl)
    $(".row3").fadeIn(1000)
})

//Listen for the user to click and drag the slider for Question 1.
$("#inputQ1").mousedown( function() {

    $(".row4").fadeIn(1000)
    
    $("body").mousemove( function() {
        let currentValue = $("#inputQ1").val()
        $("#q1percent").html(currentValue + "%")
    })
})

//Listen for the user to click and drag the slider for Question 2.
$("#inputQ2").mousedown( function() {

    $(".row5").fadeIn(1000)
    
    $("body").mousemove( function() {
        let currentValue = $("#inputQ2").val()
        $("#q2percent").html(currentValue + "%")
    })
})

//Listen for the user to click and drag the slider for Question 3.
$("#inputQ3").mousedown( function() {

    $(".row6").fadeIn(1000)
    
    $("body").mousemove( function() {
        let currentValue = $("#inputQ3").val()
        $("#q3percent").html(currentValue + "%")
    })
})

//Listen for the user to click and drag the slider for Question 4.
$("#inputQ4").mousedown( function() {

    $(".row7").fadeIn(1000)
    
    $("body").mousemove( function() {
        let currentValue = $("#inputQ4").val()
        $("#q4percent").html(currentValue + "%")
    })
})

//Listen for the user to click and drag the slider for Question 5.
$("#inputQ5").mousedown( function() {

    $(".row8").fadeIn(1000)
    
    $("body").mousemove( function() {
        let currentValue = $("#inputQ5").val()
        $("#q5percent").html(currentValue + "%")
    })
})

//Listen for the user to click and drag the slider for Question 6.
$("#inputQ6").mousedown( function() {

    $(".row9").fadeIn(1000)
    
    $("body").mousemove( function() {
        let currentValue = $("#inputQ6").val()
        $("#q6percent").html(currentValue + "%")
    })
})

//Listen for the user to click and drag the slider for Question 7.
$("#inputQ7").mousedown( function() {

    $(".row10").fadeIn(1000)
    
    $("body").mousemove( function() {
        let currentValue = $("#inputQ7").val()
        $("#q7percent").html(currentValue + "%")
    })
})

//Listen for the user to click and drag the slider for Question 8.
$("#inputQ8").mousedown( function() {

    $(".row11").fadeIn(1000)
    
    $("body").mousemove( function() {
        let currentValue = $("#inputQ8").val()
        $("#q8percent").html(currentValue + "%")
    })
})

//Listen for the user to click and drag the slider for Question 9.
$("#inputQ9").mousedown( function() {
    
    $(".row12").fadeIn(1000)
    
    $("body").mousemove( function() {
        let currentValue = $("#inputQ9").val()
        $("#q9percent").html(currentValue + "%")
    })
})

//Listen for the user to click and drag the slider for Question 10.
$("#inputQ10").mousedown( function() {

    $(".row13").fadeIn(1000)
    
    $("body").mousemove( function() {
        let currentValue = $("#inputQ10").val()
        $("#q10percent").html(currentValue + "%")
    })
})

//Listen for the user to let go of any slider.
$("#inputQ1, #inputQ2, #inputQ3, #inputQ4, #inputQ5, #inputQ6, #inputQ7, #inputQ8, #inputQ9, #inputQ10").mouseup( function() {

    $("body").off("mousemove")
})

$("#tryAgain, #nextFriend").click( function() {

    document.getElementById("friendSurvey").reset()
    $("#userPhoto").attr("src", "")
    $(".row1").fadeIn(1000)
})



//When the modal is triggered, focus on it.
$('#perfectMatchModal').on('show.bs.modal', function() {
    $("#perfectMatchModal").trigger("focus")
})
