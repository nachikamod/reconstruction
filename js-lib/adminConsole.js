function timeStamper(){


          
  
  

    var check;

    var d = new Date();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    var stamp = d.getDate() + " " + months[d.getMonth()] + " " +  d.getFullYear() + " @ " + d.getHours() + ":"  + d.getMinutes();
  
    console.log(stamp);
  
    if (check == 1) {
      console.log("Page refresh : " + stamp);
    }
  
    else{
  
      var database = firebase.database().ref().child("logs").child("admin").push();
  
      firebase.database().ref().child("logs").child("buffer").set(stamp);
  
      database.child("log").set(stamp);
  
    }
  
    check = 1;

}

function pieChart() {

  $(function() {
      $('.chart').easyPieChart({
          lineWidth:20,
          scaleColor:false,
          size:200,
          trackColor:'#4C4C78',
          barColor:'#6C63FF'
      });


      $('.chart').data('easyPieChart').update(dataStream);


  });
  $(function() {
      $('.chart2').easyPieChart({
          lineWidth:20,
          scaleColor:false,
          size:200,
          trackColor:'#4C4C78',
          barColor:'#6C63FF'
      });


      $('.chart2').data('easyPieChart').update(40);


  });

};