function enlargeText() {
  var textArea = document.getElementById("textInput");
  textArea.style.fontSize = "24pt";
}

function applyStyles() {
  var textArea = document.getElementById("textInput");
  var fancyRadio = document.getElementById("fancy");
  var boringRadio = document.getElementById("boring");

  if (fancyRadio.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooFunction() {
  var textArea = document.getElementById("textInput");
  var text = textArea.value;

  text = text.toUpperCase();

  var sentences = text.split(".");
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].trim().split(" ");
    if (words.length > 0) {
      var lastWord = words.pop();
      if (!lastWord.toLowerCase().endsWith("-moo")) {
        words.push(lastWord + "-MOO");
      } else {
        words.push(lastWord);
      }
      sentences[i] = words.join(" ");
    }
  }

  text = sentences.join(".");
  textArea.value = text;
}

document.addEventListener("DOMContentLoaded", function () {
  var biggerButton = document.getElementById("biggerButton");
  var fancyRadio = document.getElementById("fancy");
  var boringRadio = document.getElementById("boring");
  var mooButton = document.getElementById("mooButton");

  biggerButton.addEventListener("click", enlargeText);
  fancyRadio.addEventListener("change", applyStyles);
  boringRadio.addEventListener("change", applyStyles);
  mooButton.addEventListener("click", mooFunction);
});
