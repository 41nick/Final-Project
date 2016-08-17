// var mapCanvas = document.getElementById("map");
// var mapOptions = {
//     center: new google.maps.LatLng(42.331427, -83.045754), zoom:  10
// }
// var map = new google.maps.Map(mapCanvas, mapOptions);
$(document).ready(function(){
    $(".nick").click(function(){
        $("img").slideToggle();
        });
  $(".detroit").click(function(){
        $("p").slideToggle();
    });
  $(".code").click(function(){
        $("h1").slideUp();
});
  });