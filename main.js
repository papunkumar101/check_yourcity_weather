
 $(document).ready(function(){
   $("#sbt").click(function(event){
      event.preventDefault();
   var sear=$("#search").val();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       //console.log(this.responseText);
      
      var result=JSON.parse(this.responseText);
      var imgs=result['weather'][0]['icon'];
      var date = new Date((result.dt) * 1000);
      
      
      if(result['cod']==200){
      $("#nm").html(result.name + "," + result.sys.country);
      $(".bottom-left").html("wind : " + Math.round(result['wind']['speed'])+"Km/h");
      $(".bottom-right").html(date.toUTCString());
      $("#img").attr("src",`http://openweathermap.org/img/wn/${imgs}@4x.png`);
      $(".top-left").html(Math.round(result.main.temp-274.15)+"°C");
      $(".top-right").html("Wheather : "+result['weather'][0]['main']);
      }else{ $("#nm").html("Please Enter A Valied City Name");  }
    }
  };
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${sear}&appid=1dbfcef178ad4992e525442e871dcd65`;
  xhttp.open("GET",url , true);
  xhttp.send();

});
});