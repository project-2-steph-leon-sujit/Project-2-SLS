//Initial Budget array
var budgetArray = [];
var $leonTestContainer = $("#leonTestContainer"); //TODO TESTING
var todos = []

//Getting all budgets from database when page loads
showAll();



function showAll(){
    console.log("showAll function is working");

    $.get("/api/new", function(data) {
      todos = data;
      initializeRows();
        // var rowsToAdd = [];
        // for (var i = 0; i < data.length; i++) {
        //   rowsToAdd.push(createAuthorRow(data[i]));
        // }
        // renderAuthorList(rowsToAdd);
        // nameInput.val("");
        console.log("This is 'todos'", todos)
        
        $("#leonTestContainer").text(data[0].category + "" + data[0].expense)
      });
}


//TODO: Do i need a function to loop all the data and display in the #testName thing?

//TODO: reference Sequelize Activity 9: toDo's. 


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