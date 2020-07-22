document.write((typeof 5) + "<br><br>"); // typeof assignment

document.write((3E4354) + "<br>");
document.write((-34E376) + "<br><br>");

document.write((10 < 2) + "<br>");
document.write((10 > 2) + "<br><br>");

console.log(2 + 2);

document.write(("15" + 5) + "<br><br>"); // strings and numbers assignment

console.log(10 < 2);

document.write((27 == 27) + "<br>");    // equal value assignment
document.write((27 == 28) + "<br><br>");

document.write((5 === 5) + "<br>");     // equal value and typeof assignment
document.write(("five" === 6) + "<br>");
document.write(("five" === 5) + "<br>");
document.write((5 === 6) + "<br><br>");

document.write((5 < 10 && 6 > 3) + "<br>")  // AND assignment
document.write((5 > 10 && 6 > 3) + "<br>")
document.write((5 < 10 || 6 > 3) + "<br>")  // OR assignment
document.write((5 > 10 || 6 < 3) + "<br>")
function notT_Function() {                  // NOT assignment
    document.getElementById("NotT").innerHTML = !(20 > 10);
}
function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}