
// ======================= SIGN IN / SIGN UP SUBMIT ==========================
$("#sign-up-form").hide();

$("#sign-up").on("click", function(){
    $("#sign-in-form").hide();
    $("#sign-up-prompt").hide();
    $("#sign-up-form").show();

});

$("#sign-up-submit").on("click", function(){
    event.preventDefault();
    $('#sign-up-form').append('<div><h4>Success!</h4><button id="sign-up-success" class="delete-button">log in</button></div>'); 
    var newUser = {
        userName: $("#newUser").val().trim()
    };
    submitUser(newUser);   

});

$("#sign-up-success").on("click", function(){
    event.preventDefault();
    window.location.reload();
    
    
})



// ======================= POST ==========================



//post new user name to user name database
function submitUser(callback) {
    $.post("/api/login/", callback, function() {
    //   window.location.reload();
        console.log("this is working?")
    });
};





// // ======================= new budget table ==========================

// $("#edit-settings-button").on("click", function(event){
//     event.preventDefault();
//     console.log("i've been clicked!");

//     var newBudget = {
//         income: $("#incomeBudget").val(),
//         rent: $("#rentBudget").val(),
//         food: $("#foodBudget").val(),
//         entertainment: $("#entBudget").val(),
//         pets: $("#petsBudget").val(),
//         misc: $("#miscBudget").val()
//        }

//     console.log(newBudget);
//     //ajax call to submit
//         $.post("/api/budget", newBudget, function() {
//         //   window.location.href = "/blog";
//         }).then(function(){
//             getCats(newBudget);
//         });
// });

// function getCats(){
//     $.get("/api/budget", function(budgetData){

//     console.log(budgetData);
//     console.log(budgetData[0].rent);

//     // [""0""].income

//     // var rent = budgetData.rent;

//     $("#settings-income").text("$"+budgetData[0].income);
//     $("#rent").text("$"+budgetData[0].rent);
//     $("#food").text("$"+budgetData[0].food);
//     $("#ent").text("$"+budgetData[0].entertainment);
//     $("#pets").text("$"+budgetData[0].pets);
//     $("#misc").text("$"+budgetData[0].misc);

//     });

// }
