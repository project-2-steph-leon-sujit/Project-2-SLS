//control posting data from edit settings form to database

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
    //ajax call to submit
        $.post("/api/budget", newBudget, function() {
        //   window.location.href = "/blog";
        }).then(function(){
            getCats(newBudget);
        });

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

}
