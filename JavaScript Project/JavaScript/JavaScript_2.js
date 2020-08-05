// RESPONSE IF NO INFO
function validateForm() {
    var x = document.forms["Contact_form"]["fname"].value;
    var y = document.forms["Contact_form"]["lname"].value;
    var z = document.forms["Contact_form"]["email"].value;
    if (x == "") {
        alert("Must fill out all the information please.");
        return false;
    }
    if (y == "") {
        alert("Must fill out all the information please.");
        return false;
    }
    if (z == "") {
        alert("Must fill out all the information please.");
        return false;
    }
}
// END OF RESPONSE IF NO INFO