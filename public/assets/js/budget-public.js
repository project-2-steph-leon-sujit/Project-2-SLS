//Initial Budget array
var budgetArray = [];
var $leonTestContainer = $("#leonTestContainer"); //TODO TESTING
var todos = []

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
      <tr>
  `
      $("#tableBody").append(budgetResults)

    })

  });
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