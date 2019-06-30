//Get references to table where data will be displayed

// ======================= FORM SUBMIT ==========================

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
    
});

// ======================= EDIT SETTINGS FORM SUBMIT ==========================

//add event listeners to form to create a new object
$("#edit-settings-button").on("click", function(event){
    event.preventDefault();

    //get new variables from form


    var userName = $("#inputUserName").val().trim();
    var profilePic = $("#inputProfilePic").val().trim();
    var income = $("#inputIncome").val().trim();

    var rent = $("#inputRent").val().trim();
    var food = $("#inputFood").val().trim();
    var entertainment = $("#inputEnt").val().trim();
    var pets = $("#inputPets").val().trim();
    var misc = $("#inputMisc").val().trim();


    //empty input boxes on submit to clear form
    $("#inputUserName").val("");
    $("#inputProfilePic").val("");
    $("#inputIncome").val("");

    $("#inputRent").val("");
    $("#inputFood").val("");
    $("#inputEnt").val("");
    $("#inputPets").val("");
    $("#inputMisc").val("");

    //repopulates categories with updated budgets
//    editSettings();
    
});

// ======================= POST ==========================

//function to handle what happens when submit button is clicked to create new expense
function submitBudget(callback) {
    $.post("/api/new/", callback, function() {
    //   window.location.reload();
        console.log("this is working?")
    });
};






// ======================= GET DATA FOR TABLES ==========================
//adding something for shits and giggles