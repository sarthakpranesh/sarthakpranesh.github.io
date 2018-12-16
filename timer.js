var x;
function timerfuc(){
var countDownDate = new Date("Dec 17, 2018 15:37:25").getTime();

// Update the count down every 1 second
 x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with following ids as
  // day, hour, min, sec given in the html file
  document.getElementById("day").innerHTML = days + "D";
  document.getElementById("hour").innerHTML = hours + "H";
  document.getElementById("min").innerHTML = minutes + "M";
  document.getElementById("sec").innerHTML = seconds + "S";

  // If the count down is finished, write some text
  //This is the condition after the clock reaches 0
  if (distance < 0) {
    clearInterval(x);
    alert("EXPIRED");
  }

}, 1000);
}

//object on click-- checking if the object has been clicked
b1.onclick = timerfuc();


//defining a reset time function
function resettime(){
  document.getElementById("day").innerHTML = "0";
  document.getElementById("hour").innerHTML = "0";
  document.getElementById("min").innerHTML = "0";
  document.getElementById("sec").innerHTML = "0";
  clearInterval(x);
  alert("Timer cleared");
}


//reseting the timer
b2.onclick = resettime();


//The change of bgcolor of the html on an interwal of 10s
var i = 0;
var y = setInterval(function(){
  var l = ['yellow','white','aqua','pink','red','maroon','tomato','dodgerblue','mediumseagreen','violet'];
  while(i<=l.length-1){
  document.body.style.backgroundColor = l[i];
  i = i + 1;
  break;
}
  if(i==l.length){
    i = 0;
  }
}, 10000);