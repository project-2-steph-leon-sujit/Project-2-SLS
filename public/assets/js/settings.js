//control posting data from edit settings form to database

$(document).ready(function() {
showCats();

//show edit settings
$("#edit-button").on("click", function(event){
    $("#edit-settings").show();
});

// ======================= new budget table ==========================

$("#edit-settings-button").on("click", function(event){
    event.preventDefault();
    console.log("i've been clicked!");

    var newBudget = {
        income: $("#incomeBudget").val(),
        goal: $("#savingsBudget").val(),
        rent: $("#rentBudget").val(),
        food: $("#foodBudget").val(),
        entertainment: $("#entBudget").val(),
        pets: $("#petsBudget").val(),
        misc: $("#miscBudget").val()
       }

    console.log(newBudget);
    createBudget(newBudget);
    showCats(newBudget);


        //reset form values 
        $("#incomeBudget").val("");
        $("#savingsBudget").val("");
        $("#rentBudget").val("");
        $("#foodBudget").val("");
        $("#entBudget").val("");
        $("#petsBudget").val("");
        $("#miscBudget").val("");



    setTimeout(function() {$("#edit-settings").hide()}, 400);
});

//TODO: ========= add a create function so that the jquery stuff in the getCats() function isn't inside a button click =========

function createBudget(catBudget) {
    $.post("/api/budget", catBudget, function() {
        console.log("posting new budget");
    })
}

//this function needs to be the update
function getCats(){
    $.get("/api/budget", function(budgetData){

    console.log(budgetData);
    console.log(budgetData[0].rent);


    $("#settings-income").text("$"+budgetData[0].income);
    $("#settings-savings").text("$"+budgetData[0].goal);
    $("#rent").text("$"+budgetData[0].rent);
    $("#food").text("$"+budgetData[0].food);
    $("#ent").text("$"+budgetData[0].entertainment);
    $("#pets").text("$"+budgetData[0].pets);
    $("#misc").text("$"+budgetData[0].misc);

    });

};

//display content from database in html
function showCats(budget) {
    $.get("/api/budget", budget, function(data) {
        console.log("getting data from category budget");
        console.log("New Budget: ", data);

        var insertRent = $("#rent");
        var insertFood = $("#food");
        var insertEnt = $("#ent");
        var insertPets = $("#pets");
        var insertMisc = $("#misc");

        insertRent.text("$"+budget[0].rent);
        insertFood.text("$"+budget[0].food);

        // insertRent.text(budget[0])
        // var newPostCard = $("<div>");
        // newPostCard.addClass("card");
        // var newPostCardHeading = $("<div>");
        // newPostCardHeading.addClass("card-header");
        // var deleteBtn = $("<button>");
        // deleteBtn.text("x");
        // deleteBtn.addClass("delete btn btn-danger");
        // var editBtn = $("<button>");
        // editBtn.text("EDIT");
        // editBtn.addClass("edit btn btn-default");
        // var newPostTitle = $("<h2>");
        // var newPostDate = $("<small>");
        // var newPostCategory = $("<h5>");

        
    })
};

//close document ready
});