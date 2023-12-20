// Get the modal
var modal = document.getElementById("cookie_disclaimer");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];
var accept = document.getElementsByClassName("accept")[0];
var deny = document.getElementsByClassName("deny")[0];

var cookie_content = document.getElementById("cookie_message");

var accepted = false;
var click_off_counter = 0;
var close_counter = 0;
var deny_counter = 0;

// When the user clicks on the button, open the modal
window.onload = function() {
  if (localStorage.getItem("visited") === null){
    modal.style.display = "block";
    localStorage.setItem("visited", true)
  }
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  if (!accepted){
    if (deny_counter == 5){
      cookie_content.innerHTML = cookie_content.innerHTML + "Take the cookie. 🍪"
    } else {
    cookie_content.innerHTML = "Answer the question. <br>" + cookie_content.innerHTML;
    }
    close_counter++;
  } else if (accepted) {
    modal.style.display = "none";
  }
}

accept.onclick = function() {
  //modal.style.display = "none";
  accepted = true;
  console.log("accepted")
  cookie_content.innerHTML = "Yippee !!!"

  accept.style.display = "none";
  deny.style.display = "none";
}

deny.onclick = function() {
  if (deny_counter == 0){
    cookie_content.innerHTML = "Are you sure?"
    deny.innerHTML = "Yeah I don't like cookies"
    accept.innerHTML = "Actually no I'll take the cookie"
    
    deny_counter++
    
  } else if (deny_counter == 1){
    cookie_content.innerHTML = "It's a cookie, who doesn't like cookies?"
    deny.innerHTML = "I don't like cookies :("
    accept.innerHTML = "Nevermind I like cookies :)"
    
    deny_counter++
    
  } else if (deny_counter == 2){
    cookie_content.innerHTML = "What if they have chocolate chips in them?"
    deny.innerHTML = "I hate chocolate and happiness";
    accept.innerHTML = "Sold, give me the cookie";
    
    deny_counter++
    
  } else if (deny_counter == 3){
    cookie_content.innerHTML = "These aren't the type of cookies that track you across the internet, you know. These are just imaginary and they don't exist, just like my good grades.";
    deny.innerHTML = "I don't care, just leave me alone.";
    accept.innerHTML = "Fine."
    
    deny_counter++
    
  } else if (deny_counter == 4){
    cookie_content.innerHTML = "Final chance. Take the cookie. 🍪";
    deny.innerHTML = "Take the cookie.";
    accept.innerHTML = "Take the cookie.";
    
    deny_counter++
    
  } else {
    cookie_content.innerHTML = "That wasn't so hard, was it? Enjoy the website."
    deny.style.display = "none";
    accept.style.display = "none";
    accepted = true;
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (accepted && event.target == modal){
    modal.style.display = "none";
  } else if (event.target == modal){
    if (!accepted && deny_counter < 5) {
      cookie_content.innerHTML = "Pls answer question :) <br>" + cookie_content.innerHTML
      return;
    } else {
      cookie_content.innerHTML = cookie_content.innerHTML + "Take the cookie. 🍪"
      return;
    }
  }
}