const range = document.getElementById('range')
range.addEventListener('change',(e)=>{
  //console.log(range.value)
})
range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, -45,-15) 
    //console.log(left)
    label.style.left = `${left}px`


    label.innerHTML = value +" mg"
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }


var lastVisitVar=getCookie("lastvisited");
if (lastVisitVar != "") {
  date1 =  new Date(parseInt(lastVisitVar));  
  document.getElementById("lastVisit").innerHTML = new Intl.DateTimeFormat('he-IL', { dateStyle: 'full', timeStyle: 'medium', }).format(date1);
}
var took=getCookie("took");
if (took != "") {
  
}
function showTook(d){
  document.getElementById("took").innerHTML = +getAmount() +"mg  | " + new Intl.DateTimeFormat('he-IL', { dateStyle: 'full', timeStyle: 'medium', }).format(d)  ;
}
function lakahti() {
   var d = new Date();
   setCookie("took", Date.parse(d),100);
   
   setCookie("amount", range.value ,100);
   showTook(d)

}

function getAmount() {
   
   return getCookie("amount")
}
function lastvisit() {
   var d = new Date();
   setCookie("lastvisited", Date.parse(d),100);
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
if (took != "") {
  date2 =  new Date(parseInt(took));  
  showTook(date2)
}
function timer(){
   var took=getCookie("took");

  // Get today's date and time
  var now = new Date().getTime();
  var d = new Date();
  // Find the distance between now and the count down date
  var distance = now - took ;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countup").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countup").innerHTML = "00:00:00";
  }
}
 timer()
var x = setInterval(function() {
 timer()
}, 1000);
lastvisit();
