showAll();


function showAll(){
    console.log("showAll is working");

    $.get("/api/new", function(data) {
        // var rowsToAdd = [];
        // for (var i = 0; i < data.length; i++) {
        //   rowsToAdd.push(createAuthorRow(data[i]));
        // }
        // renderAuthorList(rowsToAdd);
        // nameInput.val("");
        console.log(data);


        $("#testName").text(data[0].category + "" + data[0].expense)

      });

// $("#testName").text("hey you ");


}

