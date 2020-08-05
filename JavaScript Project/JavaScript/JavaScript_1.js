//SWITCH FUNCTION
function Console_of_Choice() {
    var response;
    var console = document.getElementById("Console_Input").value;
    var console_string = " is a respectable choice.";
    switch(console) {
        case "PC":
            response = "PC" + console_string;
        break;
        case "MAC":
            response = "MAC" + console_string;
        break;
        case "Xbox":
            response = "Xbox" + console_string;
        break;
        case "Playstation":
            response = "Playstation" + console_string;
        break;
        case "Switch":
            response = "Switch" + console_string;
        break;
        default:
            response = "Please enter a console or Computer preference exactly as written on the list above.";
    }
    document.getElementById("response").innerHTML = response;
}
//END OF SWITCH FUNCTION


//GET CLASS METHOD
function GClass_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "This text has changed!";
}
// END OF GET CLASS METHOD


// CANVAS BACKGROUND
var B = document.getElementById("Display");
var Btx = B.getContext("2d");
var Bgrd = Btx.createLinearGradient(0,0,500,0);
Bgrd.addColorStop(0, "white");
Bgrd.addColorStop(0.5, "red");
Bgrd.addColorStop(1, "orange");
Btx.fillStyle = Bgrd;
Btx.fillRect(0,0,500,250);
// END OF CANVAS BACKGROUND

// CANVAS TEXT
var C = document.getElementById("Display");
var Ctx = C.getContext("2d");
var grd = Ctx.createLinearGradient(0,0,500,0);
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "green");
grd.addColorStop(1, "blue");
Ctx.fillStyle = grd;
Ctx.fillRect(0,0,500,0);
Ctx.font = "60px Arial";
Ctx.textAlign = "center"
Ctx.fillText("Hello, hello.", 250, 150);
// END OF CANVAS TEXT
