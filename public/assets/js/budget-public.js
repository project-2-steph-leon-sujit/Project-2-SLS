
$(document).ready(function(){




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

  // console.log("showAll function is working");

  $.get("/api/new", function (data) {
    console.log("this is data", data);
    // todos = data;
  
    $.each(data, function (i, item) {
      var budgetResults = `
    <tr>
      <td>${item.name}</td>
      <td>${item.expense}</td>
      <td>${item.description}</td>
      <td>${item.category}</td>
      <td>
        <button type="button" class="update-button btn btn-sm m-0" id="${i}update">update</button>
        <button type="button" class="delete-button btn btn-sm m-0" id="${i}delete">delete</button>
      <td>
      <tr>
      `
      console.log("Item name", item.name);
      console.log("item ID:", item.id);
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

      //END OF .each loop ---------------------------------------------------------
    })


    budgetAdder();

    console.log()


    //Delete button must be within this call or it won't know how to grab each ID for updates/deletes
    // $(".delete-button").on("click", handlePostDelete)

    $(".delete-button").click(function(){
      // console.log(this);
      // var delString = this.id;
      // // console.log(delString);
      // var newNumber = parseInt(delString)
      // console.log(newNumber);
      // var newerNumber = newNumber + 1
      // console.log("sequel ID: ", newerNumber);

      // $(this).parents('tr').first().remove()
      // console.log($(this).parents().first())
 


      // deleteItem(newerNumber); <---reuse if new method fails
      deleteItem();
 
      
    });

  });
}

//This function will delete items from sequel at the id name. 
function deleteItem(id) {

  var listItemData = $(this).parent("td").parent("tr");

  console.log("this is listItemData", listItemData);

  $.ajax({
    method: "DELETE",
    url: "/api/new/" + id
  })
  
  // .then(document.location.reload()) //<-reload the document so the math will work
    // .then(showAll) //<--callback to re-get all the budgets after delex is successful
}





function budgetAdder() {
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

});




















// // ---------------------------------------------------MAY NEED BELOW LATER

// function initializeRows() {
//   console.log("todos length", todos.length); //TODO: this is working
//   $leonTestContainer.empty();
//   var rowsToAdd = [];
//   for (var i = 0; i < todos.length; i++) {
//     rowsToAdd.push(createNewRow(todos[i]));
//   }
//   $leonTestContainer.prepend(rowsToAdd);
//   console.log("this is rowsToAdd", rowsToAdd);
// }


// // This function constructs a todo-item row
// function createNewRow(todo) {
//   var $newInputRow = $(
//     [
//       "<li class='list-group-item todo-item'>",
//       "<span>",
//       todo.text,
//       "</span>",
//       "<input type='text' class='edit' style='display: none;'>",
//       "<button class='delete btn btn-danger'>x</button>",
//       "<button class='complete btn btn-primary'>✓</button>",
//       "</li>"
//     ].join("")
//   );

//   $newInputRow.find("button.delete").data("id", todo.id);
//   $newInputRow.find("input.edit").css("display", "none");
//   $newInputRow.data("todo", todo);
//   if (todo.complete) {
//     $newInputRow.find("span").css("text-decoration", "line-through");
//   }
//   return $newInputRow;
// }
