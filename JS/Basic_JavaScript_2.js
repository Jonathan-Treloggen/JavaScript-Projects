function displayDate() {
    document.getElementById("when").innerHTML= Date();
}

function Instructions() {
    var L = "Well, above this button is another button, click it.";
    L += "If you don\'t like the answer it gave you, refresh the page and click it again.";
    document.getElementById("hmmm").innerHTML = L;
}