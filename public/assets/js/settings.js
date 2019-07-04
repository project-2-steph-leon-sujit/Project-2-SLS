//control posting data from edit settings form to database

$(document).ready(function() {
showCats();

//show edit settings
$("#edit-button").on("click", function(event){
    $("#edit-settings").show();
});

// ======================= new budget table ==========================

$("#create-budget-submit").on("click", function(event){
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


        //reset form values 
        $("#incomeBudget").val("");
        $("#savingsBudget").val("");
        $("#rentBudget").val("");
        $("#foodBudget").val("");
        $("#entBudget").val("");
        $("#petsBudget").val("");
        $("#miscBudget").val("");

});

//TODO: ========= add a create function so that the jquery stuff in the getCats() function isn't inside a button click =========

function createBudget(catBudget) {
    $.post("/api/budget", catBudget, function() {
        console.log("posting new budget");
    }).then(function(){
        showCats();
    })
}


//display content from database in html
function showCats(budget) {
    $.get("/api/budget", budget, function(data) {
        console.log("getting data from category budget");
        console.log("New Budget: ", data);

        var insertIncome = $("#settings-income");
        var insertGoal = $("#settings-savings");
        var insertRent = $("#rent");
        var insertFood = $("#food");
        var insertEnt = $("#ent");
        var insertPets = $("#pets");
        var insertMisc = $("#misc");

 insertIncome.text("$"+data[0].income);
        insertGoal.text("$"+data[0].goal);
        insertRent.text("$"+data[0].rent);
        insertFood.text("$"+data[0].food);
        insertEnt.text("$"+data[0].entertainment);
        insertPets.text("$"+data[0].pets);
        insertMisc.text("$"+data[0].misc);
    
    })
};

function updatePost(catBudget) {
    $.ajax({
      method: "PUT",
      url: "/api/budget",
      data: catBudget
    })
      .then(function() {
        window.location.href = "/blog";
      });
  }

//close document ready
});