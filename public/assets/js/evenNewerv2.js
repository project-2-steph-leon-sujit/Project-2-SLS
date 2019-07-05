
//!                     SO FAR THE BUDGET WORKS         


$(document).ready(function () {
  
    // budgetContainer holds all of our budgets
    var budgetContainer = $("#tableBody");
    var budgetCategorySelect = $("#category");
  
  
    var incomeSum = []
    var rentSum = []
    var foodSum = []
    var entertainmentSum = []
    var petsSum = []
    var miscSum = []
    var vacationSum = []
  
    // Click events for the edit and delete buttons
    $(document).on("click", ".del-button", handleBudgetDelete);
    $(document).on("click", ".up-button", handleBudgetEdit);
    budgetCategorySelect.on("change", handleCategoryChange); //need to write 'handleCategoryChange'
  


    // -----------------------------Getting the initial list of budgets and categories----------------------------
    getBudgets();
    showCats();
    // -----------------------------Getting the initial list of budgets and categories----------------------------
  
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
          // console.log("this is the if hitting");
          // displayEmpty();
        }
        else {   //<- if there is a budget. run the initializeRows function. 
          // console.log("this is the else hitting. If rows are added it would happen here. ")
          initializeRows();
        }
  
        //Use a .then so that it runs this adding function
      }).then(function () {
  
        //income, rent, food, entertainment, pets, vacation, misc
        for (i = 0; i < budgets.length; i++) {
          
          console.log("this should only run after the get is done");
          // console.log(budgets);
  
          if (budgets[i].category == "income") {
              incomeSum.push(budgets[i].expense);
          }
  
          if (budgets[i].category == "rent"){
            rentSum.push(budgets[i].expense);
          }
          
          if (budgets[i].category == "food"){
            foodSum.push(budgets[i].expense);
          }
          if (budgets[i].category == "entertainment"){
            entertainmentSum.push(budgets[i].expense);
          }
          if (budgets[i].category == "pets"){
            petsSum.push(budgets[i].expense);
          }
          if (budgets[i].category == "vacation"){
            vacationSum.push(budgets[i].expense);
          }
          if (budgets[i].category == "misc"){
            miscSum.push(budgets[i].expense);
          }
          else {
            console.log("nothing is being hit");
          }
        }
  
  
        // console.log("this is incomeSum", incomeSum);
        // console.log("this is rentSum", rentSum);
        // console.log("this is foodSum", foodSum);
        // console.log("this is entertainmentSum", entertainmentSum);
        // console.log("this is petSum", petsSum);
        // console.log("this is vacationSum", vacationSum);
        // console.log("this is miscSum", miscSum);
  
      })
      .then(function(){  
  //!----------------TEST BOX-----------------------------------------
        budgetAdder()
        // showCats()
  
        console.log("this is chart income", chartIncome)
        console.log("this is goal rent ", goalRent)

        budgetScreenChart()

        // var myConfig = {
        //     type: "bar",
        //      globals: {
        //          fontSize: 25,
        //          marginTop: 10,
        //          marginBottom: 10,
        //          paddingBottom: 10,
        //          fontFamily: "Quicksand, sans-serif",
        //          color: "#040130"
        //        },
        //     plot:{
        //       stacked:true,
        //       stackType:"normal"
        //     },
        //     scaleX: {
        //         label:{
        //           text:"Current Spending by Budget Categories"
        //         },
        //         labels:["Rent","Food","Entertainment","Pets","Misc"] 
        //       },
        //     series:[
        //       {
        //         //this is the top color (full budget)
        //         values:[goalRent, goalFood, goalEnt, goalPets, goalMisc],
        //         backgroundColor:"#29B6F6",
        //         alpha:1
        //       },
        //       {
        //         //this is the bottom color (amount spent so far)
        //         values:[chartRent,chartFood,chartEntertainment,chartPets,chartMisc],
        //         backgroundColor:"#040130",
        //         alpha:1
        //       },
             
        //     ]
        //   };
          
        //   zingchart.render({ 
        //       id : 'myChart', 
        //       data : myConfig, 
        //       height: "100%", 
        //       width: "100%" 
        //   });
        
        
        //TODO: THIS IS THE ZING CHART FOR THE HOME PAGE

        var saved =700;

        var myConfig2 = {
            type: "gauge",
            globals: {
              fontSize: 25,
              marginBottom: 0,
              paddingBottom: 0,
              fontFamily: "Quicksand, sans-serif",
              color: "#040130"
            },
            plotarea:{
              marginTop:0,
              marginBottom:0
            },
            plot:{
              marginBottom: 0,
              paddingBottom: 0,
              size:'100%',
              valueBox: {
                placement: 'center',
                text:'%v', //default
                fontSize:35,
                rules:[
                  {
                    rule: '%v <= 850',
                    text: '$%v<br>Out Of $1000'
                  },
                  {
                    rule: '%v >= 850',
                    text: '$%v<br>You Did It!'
                  }   
                ]
              }
            },
         tooltip:{
           borderRadius:5
         },
            scaleR:{
             aperture:180,
             minValue:0,
             maxValue:900,
             step:90,
             center:{
               visible:false
             },
             tick:{
               visible:false
             },
             item:{
               offsetR:0,
               rules:[
                 {
                   rule:'%i == 9',
                   offsetX:15
                 }
               ]
             },
             labels:['0','','','','','','','','','', 900],
             ring:{
               size:50,
               rules:[
                 
                 {
                   rule:'%v <= 850',
                   backgroundColor:'#29B6F6'
                 }      
               ]
             }
            },
         refresh:{  
             type:"feed",
             transport:"js",
             url:"feed()",
             interval:1500,
             resetTimeout:1000
         },
           series : [
               {
                   values : [saved], // starting value
                   backgroundColor:'black',
               indicator:[10,10,10,10,0.75],
               animation:{  
               effect:2,
               method:1,
               sequence:4,
               speed: 900
            },
               }
           ]
       };
       
         // render chart with width and height to
         // fill the parent container CSS dimensions
         zingchart.render({ 
           id: 'myChart2', 
           data: myConfig2, 
           height: '100%', 
           width: '100%' 
         });


          



  //!----------------TEST BOX-----------------------------------------

      })
  
  
      



  
    }
  
  
    //TODO: set up an on click for the budgetAdder and see what's goin on
  
  // $("#budgetAdder").on("click", budgetAdder)
  
  
  
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
  
  
  
    // InitializeRows handles appending all of our constructed budget HTML inside
  
    function initializeRows() {
      budgetContainer.empty();
      var budgetsToAdd = [];
      for (var i = 0; i < budgets.length; i++) {
        budgetsToAdd.push(createNewRow(budgets[i]));
  
        console.log("this is budgets Leon", budgets);
  
  
  
      }
      budgetContainer.append(budgetsToAdd);
  
  
      // budgetAdder();
      // console.log("budgets adding. Function initializeRows is working");
      // console.log("current budgetsToAdd. It's working!", budgetsToAdd);
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
      location.reload();
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
  
  
  
    function budgetAdder() {
      // function for adding two numbers. Easy!
      const add = (a, b) =>
        a + b
      // use reduce to sum our array
  
      incomeSum = incomeSum.reduce(add,0)
      rentSum = rentSum.reduce(add,0)
      foodSum = foodSum.reduce(add,0)
      entertainmentSum = entertainmentSum.reduce(add,0)
      petsSum = petsSum.reduce(add,0)
      miscSum = miscSum.reduce(add,0)
      vacationSum = vacationSum.reduce(add,0)
  
  //! IMPORTANT TEST FOR NOW
      chartIncome = incomeSum
      chartRent = rentSum
      chartFood = foodSum
      chartEntertainment = entertainmentSum
      chartPets = petsSum
      chartMisc = miscSum
      chartVacation = vacationSum
  
      //This takes total income minus expenses
      netBudget = incomeSum - (rentSum+foodSum+entertainmentSum+petsSum+miscSum)
      //TODO: *****STEPH**** You can use these variables information to display the sum of each category
    //   console.log("Sum of income", incomeSum);
    //   console.log("Sum of rent", rentSum);
    //   console.log("Sum of food", foodSum);
    //   console.log("Sum of entertainment", entertainmentSum);
    //   console.log("Sum of pets", petsSum);
    //   console.log("Sum of misc", miscSum);
    //   console.log("Sum of vacation", vacationSum);
  
      $("#incSum").append(incomeSum);
      $("#rentSum").append(rentSum)
      $("#foodSum").append(foodSum);
      $("#entertainmentSum").append(entertainmentSum);
      $("#petsSum").append(petsSum);
      $("#miscSum").append(miscSum);
      $("#netSum").append(netBudget);
  
  
    }
  
  
  
  
  
  
    $("#incomeIDz").text(incomeSum);
    // console.log("income sum is", incomeSum);
  
  });
  
  
  
  
  //TODO:
  
  //TODO: 1. Run the .get to show all the rows. 
  //TODO: 2. .Then Show the screen for Your Budget. 
  //TOdo: 3. .Then grab the graph. 




//! --- ---- --- --- --- --- -- ----STEPHS CODE HERE --- --- -- -- --- -- ---

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
        location.reload();
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
    
        goalGoal = data[0].goal
        goalRent = data[0].rent
        goalFood = data[0].food
        goalEnt = data[0].entertainment
        goalPets = data[0].pets
        goalMisc = data[0].misc

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



function budgetScreenChart(){
    var myConfig = {
        type: "bar",
         globals: {
             fontSize: 25,
             marginTop: 10,
             marginBottom: 10,
             paddingBottom: 10,
             fontFamily: "Quicksand, sans-serif",
             color: "#040130"
           },
        plot:{
          stacked:true,
          stackType:"normal"
        },
        scaleX: {
            label:{
              text:"Current Spending by Budget Categories"
            },
            labels:["Rent","Food","Entertainment","Pets","Misc"] 
          },
        series:[
          {
            //this is the top color (full budget)
            values:[goalRent, goalFood, goalEnt, goalPets, goalMisc],
            backgroundColor:"#29B6F6",
            alpha:1
          },
          {
            //this is the bottom color (amount spent so far)
            values:[chartRent,chartFood,chartEntertainment,chartPets,chartMisc],
            backgroundColor:"#040130",
            alpha:1
          },
         
        ]
      };
      
      zingchart.render({ 
          id : 'myChart', 
          data : myConfig, 
          height: "100%", 
          width: "100%" 
      });


}