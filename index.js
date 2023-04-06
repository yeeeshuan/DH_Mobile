const btn = document.querySelector(".clicked");
let clicked = false; 

/*
btn.addEventListener("click", changeColor);
function changeColor() {
    const count = 10; 
  if (btn.style.background === "orange") {
    btn.style.background = "white";
  } else {
    btn.style.background = "orange";
  }
}
*/

btn.addEventListener("onmouseenter", myFunction_set);

function myFunction_set() {
  if (clicked) {
  btn.innerHTML = 
  "<p> Wolfgang Weingart (1941-2021) was a Swiss designer, typographer, and teacher that altered the direction of Swiss typography \
  from utilizing strict and conservative guidelines to a more experimental and playful approach. An inquisitive and explorative student,\
  <br/>\
  &emsp; Weingart constantly questioned the paradigms that existed for Swiss Design—rather than believing that typography should be about \
  readability, Weingart wanted to show that typography is an art. This idea led to a lifetime commitment to his work and teaching,\
  inspiring students to see typography as art and imagery rather than a tool for readability, and paving the way for the New Wave\
  and Swiss Punk typography. </p>"
  } else {
  btn.innerHTML = 
    "yo"
  }
}



/*
// Create a function for getting a variable value
function myFunction_get() {
    // Get the styles (properties and values) for the root
    var temp = getComputedStyle(btn);
    // Alert the value of the --blue variable
    alert("The value of --mono is: " + temp.getPropertyValue('--mono'));
    myFunction_set
  }

function myFunction_set() {
    // Set the value of variable --blue to another value (in this case "lightblue")
    btn.style.setProperty('--mono', 1);
  }

function changeColor() {
    mono = mono - 0.1; 
    console.log(mono); 
  if (mono > 0 ) {
    btn.style.mono = mono;
  } else {
    mono = 1
  }
}
*/