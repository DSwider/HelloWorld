// Set the date we're counting down to
var countDownDate = new Date("march 11, 2024 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


(function(){
  
  // Defaults
  var BUTTON = document.getElementById('btnpopup');
  var POPUP = document.getElementById('mypopup');
  var POPUP_CLASS = 'popup-ui';
  
  // Popup button (Click on button to open modal)
  BUTTON.addEventListener('click', function(){
    POPUP.className = POPUP_CLASS + ' show';
  }, false);

  // Popup modal (Click on modal to close it)
  POPUP.addEventListener('click', function(){
    this.className = POPUP_CLASS;
  }, false);
  
  
})();
