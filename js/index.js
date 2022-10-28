// accordion start 
// (taget inspirtation fra w3schools og ændret heri)

var acc = document.getElementsByClassName("accordion");
var i;

// her for loopes der gennem min accordions og for hver [i] tilføjes on click event.
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click",
  
  function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    // skifter mellem block og none, afhængig om accordion er åben eller ej.
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// accordion end


// Burgermenu start
// functionen her i javascript fungere når on click på burgermenuen svg i index html så reagere
// og tilføjes classen "show" til navbaren
function menuShow() {
  document.querySelector("#menu").classList.toggle("show");
  }
  // Burgermenu end