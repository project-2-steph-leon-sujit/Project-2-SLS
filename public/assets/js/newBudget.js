$(document).ready(function () {
  // budgetContainer holds all of our budgets
  var budgetContainer = $("#tableBody");
  var budgetCategorySelect = $("#category");

  // Click events for the edit and delete buttons
  $(document).on("click", ".del-button", handleBudgetDelete); 
  $(document).on("click", ".up-button", handleBudgetEdit); 
  budgetCategorySelect.on("change", handleCategoryChange); //need to write 'handleCategoryChange'

  var budgets; //This holds the api.get data in global scope. 

  //This is saying, pass in category type into getBudgets. If there is a category, then run /api/budgets/:category. need a route for this. 
  function getBudgets(category) {
    // var categoryString = category || "";
    // if (categoryString) {
    categoryString = ""; //TODO: for now console this out. 
    //   // categoryString = "/category/" + categoryString;
    // }
    $.get("/api/new" + categoryString, function (data) {
      console.log("Leons Budgets", data);
      budgets = data;
      if (!budgets || !budgets.length) { //<- If there are no budgets, display nothing. 
        console.log("this is the if hitting");
        // displayEmpty();
      }
      else {   //<- if there is a budget. run the initializeRows function. 
        console.log("this is the else hitting")
        initializeRows();
      }
    });
  }

        // This function does an API call to delete budgets
  function deleteBudget(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/new/" + id
    })
      .then(function () {
        getBudgets(budgetCategorySelect.val());
      });
  }


  // -----------------------------Getting the initial list of budgets----------------------------
  getBudgets();
  // -----------------------------Getting the initial list of budgets----------------------------


  // InitializeRows handles appending all of our constructed budget HTML inside

  function initializeRows() {
    budgetContainer.empty();
    var budgetsToAdd = [];
    for (var i = 0; i < budgets.length; i++) {
      budgetsToAdd.push(createNewRow(budgets[i]));
    }
    budgetContainer.append(budgetsToAdd);
    console.log("budgets adding. Function initializeRows is working");
    console.log("current budgetsToAdd. It's working!", budgetsToAdd);
  }

  // This function constructs a budget's HTML
  function createNewRow(budget) {
    console.log("create new row is getting hit");
    //creating the Row
//TODO: WORKING
    var newTr = $("<tr>");
    newTr.data("budget", budget);
    newTr.append("<td>" + budget.name + "</td>");
    newTr.append("<td>" + budget.expense + "</td>");
    newTr.append("<td>" + budget.description + "</td>");
    newTr.append("<td>" + budget.category + "</td>");
//TODO: ^---WORKING----
    var deleteBtn = $("<button>");
    deleteBtn.text("Delete")
    deleteBtn.addClass("del-button btn btn-sm m-0");
    var editBtn = $("<button>");
    editBtn.text("Update");
    editBtn.addClass("up-button btn btn-sm m-0");
    newTr.append(deleteBtn);
    newTr.append(editBtn);
    return newTr;
  }


  // This function figures out which budget we want to delete and then calls
  // deleteBudget
  function handleBudgetDelete() {
    var currentBudget = $(this)
      .parent()
      .data("budget");
    console.log("handleBudgetDelete function gettin clicked")
    deleteBudget(currentBudget.id);
  }

  // This function figures out which budget we want to edit and takes it to the
  // Appropriate url
  function handleBudgetEdit() {
    var currentBudget = $(this)
      .parent()
      .data("budget");
    window.location.href = "/cms?budget_id=" + currentBudget.id;
  }

  // This function displays a message when there are no budgets
  function displayEmpty() {
    budgetContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No budgets yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
    budgetContainer.append(messageH2);
  }

  // This function handles reloading new budgets when the category changes
  function handleCategoryChange() {
    var newBudgetCategory = $(this).val();
    getBudgets(newBudgetCategory);
  }

});


