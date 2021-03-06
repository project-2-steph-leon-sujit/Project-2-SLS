//controls stuff happening on the home page

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

   $("#new-transaction-form").replaceWith('<div><h2 class="success-alert">Success!</h2><button id="sign-up-success" class="add-new-button">add another transaction</button></div>'); 
   $("#sign-up-success").on("click", function(event){
       event.preventDefault();
    window.location.reload();
});

});


// ======================= POST ==========================

//function to handle what happens when submit button is clicked to create new expense
function submitBudget(callback) {
    $.post("/api/new/", callback, function() {
    //   window.location.reload();
        console.log("this is working?")
    });
    // window.location.reload();
};