

 
  

$(document).ready(function(){
 
  var api="https://fcc-weather-api.glitch.me/api/current?";
   var long;
    var lat;
  var currentTemp;

    

  
  
  /* get position Geoalocation HTML5 */
  
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
       long= "lat=" + position.coords.longitude;
      lat= "lon=" + position.coords.latitude ;
      getWeather(lat,long);
    $("#data").text(long + " - " + lat);
    });
  }else{
    console.log("the Geaolocation HTML5 is not supported by this Browser");
  }
 
  function getWeather(lat,long){
      var url=api + lat + "&" + long;
      var icon="";
   $.getJSON(url ,function(data){
  /* alert(data.sys.country); */
      var weather=data.weather[0].main;
     $("#country").html(data.sys.country);
     $("#weather").html(data.weather[0].main);
     $("#description").html(data.weather[0].description);
     currentTemp=data.main.temp;
     change_To(currentTemp);
     $("#temp").html(currentTemp );
      weather=weather.toLowerCase();
      if(weather==="clouds"){
        $("#icon").html("<i class=' fa fa-cloud'></i>");
      }else if(weather==="rain"){
        $("#icon").html("<i class=' fa fa-tint'></i>");
      }
     else if(weather==="clear"){
        $("#icon").html("<i class=' fa fa-sun-o'></i>");
      }
     else if(weather==="clear"){
        $("#icon").html("<i class=' fa fa-sun-o'></i>");
      }
      else if(weather==="clear"){
        $("#icon").html("<i class=' fa fa-sun-o'></i>");
      }
    
  });
    
    
      
      
    }
    
 /* change Celsiuse to Farnhat */  
  function change_To(arg){
    arg= (arg) *((9/5) + 32);
    
  };
 
  
});