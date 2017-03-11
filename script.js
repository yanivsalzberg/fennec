
//single click
$('.world').on('click', function () { 
  $('.world').css("background-color", "tomato"); 
});


//double click
$('.world').dblclick(function () {  
  var sound = 'assets/spaceSound.mp3';
  var audio = new Audio(sound);
  audio.play();
});


//change cursor to hand
$(".world").css({"cursor":"pointer"});



//hover
$(".world").hover(function () {
  $('.world').css("background-color", "purple");
});



