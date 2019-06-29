//Initial Budget array
var budgetArray = []; //TODO TESTING not in use
var $leonTestContainer = $("#leonTestContainer"); //TODO TESTING not in use
var todos = [] //TODO TESTING not in use

//For /budget this shows upper left box. Start at [0,0] so reduce function works. 
var catIncome = [0, 0]
var catRent = [0, 0]
var catFood = [0, 0]
var catEntertainment = [0, 0]
var catPets = [0, 0]
var catMisc = [0, 0]
var catVacation = [0, 0]



//Getting all budgets from database when page loads
showAll();



function showAll() {
  console.log("showAll function is working");

  $.get("/api/new", function (data) {
    // todos = data;
    initializeRows();
    // var rowsToAdd = [];
    // for (var i = 0; i < data.length; i++) {
    //   rowsToAdd.push(createAuthorRow(data[i]));
    // }
    // renderAuthorList(rowsToAdd);
    // nameInput.val("");
    // console.log("This is 'todos'", todos)

    console.log("current data", data);

    //A loop to dynamically create a table with update and delete buttons
    $.each(data, function (i, item) {
      var budgetResults = `
    <tr>
      <td>${item.name}</td>
      <td>${item.expense}</td>
      <td>${item.description}</td>
      <td>${item.category}</td>
      <td>
        <button type="button" class="update-button btn btn-sm m-0" id="update-button${i}">update</button>
        <button type="button" class="delete-button btn btn-sm m-0" id="delete-button${i}">delete</button>
      <td>
      <tr>`
      $("#tableBody").append(budgetResults)

//This will push the items in each category to its respective array------------------------------
      if (item.category == "income") {
        catIncome.push(item.expense)
      };
      if (item.category == "rent") {
        catRent.push(item.expense)
      };
      if (item.category == "food") {
        catFood.push(item.expense)
      }; 
      if (item.category == "entertainment") {
        catEntertainment.push(item.expense)
      }; 
      if (item.category == "pets") {
        catPets.push(item.expense)
      };
       if (item.category == "misc") {
        catMisc.push(item.expense)
      };
       if (item.category == "vacation") {
        catVacation.push(item.expense)
      };
//Above will push the items in each category to its respective array------------------------------

//END OF .each loop
    })

  budgetAdder();

  });
}




function budgetAdder(){
    // function for adding two numbers. Easy!
    const add = (a, b) =>
      a + b
    // use reduce to sum our array

    var incomeSum = catIncome.reduce(add)
    var rentSum = catRent.reduce(add)
    var foodSum = catFood.reduce(add)
    var entertainmentSum = catEntertainment.reduce(add)
    var petsSum = catPets.reduce(add)
    var miscSum = catMisc.reduce(add)
    var vacationSum = catVacation.reduce(add)

    //TODO: *****STEPH**** You can use these variables information to display the sum of each category
    console.log("Sum of income", incomeSum);
    console.log("Sum of rent", rentSum);
    console.log("Sum of food", foodSum);
    console.log("Sum of entertainment", entertainmentSum);
    console.log("Sum of pets", petsSum);
    console.log("Sum of misc", miscSum);
    console.log("Sum of vacation", vacationSum);
    //TODO: *****STEPH****------------------------------------------------------------------
}

// const catIncome = [10, 20, 30, 40] // sums to 100



function yourBudget(){




  
}






















// ---------------------------------------------------MAY NEED BELOW LATER

function initializeRows() {
  console.log("todos length", todos.length); //TODO: this is working
  $leonTestContainer.empty();
  var rowsToAdd = [];
  for (var i = 0; i < todos.length; i++) {
    rowsToAdd.push(createNewRow(todos[i]));
  }
  $leonTestContainer.prepend(rowsToAdd);
  console.log("this is rowsToAdd", rowsToAdd);
}


// This function constructs a todo-item row
function createNewRow(todo) {
  var $newInputRow = $(
    [
      "<li class='list-group-item todo-item'>",
      "<span>",
      todo.text,
      "</span>",
      "<input type='text' class='edit' style='display: none;'>",
      "<button class='delete btn btn-danger'>x</button>",
      "<button class='complete btn btn-primary'>✓</button>",
      "</li>"
    ].join("")
  );

  $newInputRow.find("button.delete").data("id", todo.id);
  $newInputRow.find("input.edit").css("display", "none");
  $newInputRow.data("todo", todo);
  if (todo.complete) {
    $newInputRow.find("span").css("text-decoration", "line-through");
  }
  return $newInputRow;
}