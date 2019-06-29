// window.onload event for Javascript to run after HTML
// because this Javascript is injected into the document head
window.addEventListener('load', () => {
    // Javascript code to execute after DOM content
    
    // full ZingChart schema can be found here:
    // https://www.zingchart.com/docs/api/json-configuration/
   var myConfig = {
       type: "gauge",
       globals: {
         fontSize: 25,
         marginBottom: 0,
         paddingBottom: 0
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
               text: '$%v<br>Out Of $850'
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
        minValue:300,
        maxValue:850,
        step:50,
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
        labels:['300','','','','','','580','640','700','750','','850'],
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
              values : [755], // starting value
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
      id: 'myChart', 
      data: myConfig, 
      height: '100%', 
      width: '100%' 
    });
  });
  