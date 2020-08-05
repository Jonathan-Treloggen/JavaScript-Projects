// FIRST ASSIGNMENT
function Concatenate() {
    var P_1 = "I'm sitting ";
    var P_2 = "in my office ";
    var P_3 = "typing this ";
    var P_4 = "code right now.";
    var together = P_1.concat(P_2, P_3, P_4);
    document.getElementById("Sentence").innerHTML = together;
}
// END OF FIRST ASSIGNMENT


//  SECOND ASSIGNMENT
function Slice_Method() {
    var Sentence = "My name is Jon, and I really like typing code with my Woojer Strap on for enhancesed music experience.";
    var section = Sentence.slice(11,14 );
    document.getElementById("Sentence").innerHTML =  section;
}
// END OF SECOND ASSIGNMENT


// THIRD ASSIGNMENT
function string_function() {
    var v = 72;
    document.getElementById("Str_number").innerHTML = v.toString();
}
// END OF THIRD ASSIGNMENT


// FOURTH ASSIGNMENT
function precision_Method() {
    var s = 13789.52874925114;
    document.getElementById("Precision").innerHTML = s.toPrecision(8);
}
// END OF FOURTH ASSIGNMENT
