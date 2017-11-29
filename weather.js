
window.onload = function() {
    // all of your code goes in here
    // it runs after the DOM is built
var d = new Date();
document.getElementById("time").innerHTML = d.toUTCString();
}
$(document).ready(function(){
  $('#submitWeather').click(function(){
     var city=$("#city").val();
      if(city !==''){
       $.ajax({
url:'https://api.openweathermap.org/data/2.5/forecast?q='+ city +"&units=metric" + "&appid=b5ab9b7b0c62d581a84f06e829638d0b",
           type:"GET",
           dataType:"jsonp",
           success:function(data){
               console.log(data);
          var widject = show(data);
               $("#ding").html(widject);
               $("#city").val('');
               function show(data){
    return "<h3><strong>Weather</strong>: "+ data.list[0].main.temp +"&deg;C</h3>" +
        "<h3><strong>Min Temp</strong>: "+ data.list[0].main.temp_min +"</h3>"+
        "<h3><strong>Max Temp</strong>: "+ data.list[0].main.temp_max +"</h3>"+

    "<h3><strong>Country</strong>: "+ data.city.country +"</h3>" +
    "<h3><strong>SKY</strong>: "+ data.list[0].weather[0].main +"</h3>" +
        "<h3><strong>Description</strong>: <img src='http://openweathermap.org/img/w/"+ data.list[0].weather[0].icon +".png'>"  + data.list[0].weather[0].description +"</h3>";
        }
           }
           });
      }else{
          $("#error").html("Filed cannot be empty");
      }

  });
    });




