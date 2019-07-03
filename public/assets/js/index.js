//Get references to table where data will be displayed

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

$("#sugn-up-success").on("click", function(){
    event.preventDefault();
    window.location.reload();
})

// ======================= TRANSACTION FORM SUBMIT ==========================

//add event listeners to form to create a new object
$("#budget-submit").on("click", function(event){
    event.preventDefault();

    //make new expense object
    var newExpense = {
        name: $("#inputName").val().trim(),
        amount: $("#inputAmount").val().trim(),
        category:$("#inputCategory").val().trim(),
        description: $("#inputDescription").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newExpense);

    //empty input boxes on submit to clear form
    $("#inputName").val("");
    $("#inputAmount").val("");
    $("#inputCategory").val("");
    $("#inputDescription").val("");

    //submits new expense and reloads the page
   submitBudget(newExpense);

   $("#new-transaction-form").append('<div><h4>Success!</h4><button id="sign-up-success" class="delete-button">log in</button></div>'); 
    
});

// ======================= EDIT SETTINGS FORM SUBMIT ==========================

//add event listeners to form to create a new object
// $("#edit-settings-button").on("click", function(event){
//     event.preventDefault();

//     //get new variables from form

//     var newSettings = {
//      income: $("#inputIncome").val().trim(),
//      rent: $("#inputRent").val().trim(),
//      food: $("#inputFood").val().trim(),
//      entertianment: $("#inputEnt").val().trim(),
//      pets: $("#inputPets").val().trim(),
//      misc: $("#inputMisc").val().trim()
//     }

//     console.log(newSettings);

//     //empty input boxes on submit to clear form
//     $("#inputUserName").val("");
//     $("#inputProfilePic").val("");
//     $("#inputIncome").val("");

//     $("#inputRent").val("");
//     $("#inputFood").val("");
//     $("#inputEnt").val("");
//     $("#inputPets").val("");
//     $("#inputMisc").val("");

//     $("#settings-income").text("$"+newSettings.income);
//     $("#rent").text("$"+newSettings.rent);
//     $("#food").text("$"+newSettings.food);
//     $("#ent").text("$"+newSettings.entertianment);
//     $("#pets").text("$"+newSettings.pets);
//     $("#misc").text("$"+newSettings.misc);


//     //repopulates categories with updated budgets
// //    editSettings();
    
// });

// ======================= POST ==========================

//function to handle what happens when submit button is clicked to create new expense
function submitBudget(callback) {
    $.post("/api/new/", callback, function() {
    //   window.location.reload();
        console.log("this is working?")
    });
};

//post new user name to user name database
function submitUser(callback) {
    $.post("/api/login/", callback, function() {
    //   window.location.reload();
        console.log("this is working?")
    });
};





// ======================= new budget table ==========================

$("#edit-settings-button").on("click", function(event){
    event.preventDefault();
    console.log("i've been clicked!");

    var newBudget = {
        income: $("#incomeBudget").val(),
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
});

function getCats(){
    $.get("/api/budget", function(budgetData){

    console.log(budgetData);
    console.log(budgetData[0].rent);

    // [""0""].income

    // var rent = budgetData.rent;

    $("#settings-income").text("$"+budgetData[0].income);
    $("#rent").text("$"+budgetData[0].rent);
    $("#food").text("$"+budgetData[0].food);
    $("#ent").text("$"+budgetData[0].entertainment);
    $("#pets").text("$"+budgetData[0].pets);
    $("#misc").text("$"+budgetData[0].misc);

    });

}
