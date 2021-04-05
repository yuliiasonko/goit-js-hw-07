let ruleFont = document.getElementById("font-size-control");

let text = document.getElementById("text");

ruleFont.oninput = function() {
  text.style.fontSize = ruleFont.value + "px";
};