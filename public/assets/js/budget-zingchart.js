

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
        values:[20, 100, 60, 35, 100],
        backgroundColor:"#29B6F6",
        alpha:1
      },
      {
        //this is the bottom color (amount spent so far)
        values:[5,30,21,18,59],
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



  