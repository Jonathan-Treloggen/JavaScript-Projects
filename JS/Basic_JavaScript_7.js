// FIRST ASSIGNMENT
function Error1_Function() {
    var E = 15;
    console.log(23 + E);
}
function Error2_Function() {
    console.log(E + 15);
}

function Local1_Function() {
    var R = 20;
    document.write(R + 12);  
}
function Local2_Function() {
    document.write(R + 12);  
}

var I = 72;
function Global1_Function() {
    document.write(I + 5);
}
function Global2_Function() {
    document.write(83 + I);
}
// END OF FIRST ASSIGNMENT


// SECOND ASSIGNMENT
function the_hour() {
    if (new Date() .getHours() < 18) {
        document.getElementById("or").innerHTML = "How are you today?";
    }
}

function Path() {
    var Xbox = 72;
    var PS5 =60;
    if (Xbox > PS5) {
        document.getElementById("Correct").innerHTML = "Xbox is better the PS, believe it. Now you know the truth.";
    }
}
// END OF SECOND ASSIGNMENT


// THIRD ASSIGNMENT
function Ben_PR() {
    FAV = document.getElementById("FAV").value;
    var Cal = "Calzone";
    if (FAV == Cal) {
        Choice = "Ben Cubison from Parks and rec,  and myself would agree with you.";
    }
    else {
        Choice = "Wrong, Park and rec will give you the answer. Hint Ben.";
    }
    document.getElementById("answer").innerHTML = Choice;
}
// END OF THIRD ASSIGNMENT


// FOURTH ASSIGNMENT
function Time_of_day() {
    var Time = new Date().getHours();
    var Response;
    if (Time < 12 == Time > 0) {
        Response = "It's morning.";
    }
    else if (Time >12 == Time < 18) {
        Response = "It's afternoon."  ;   
    } 
    else {
        Response = "It's Evening.";
    }
    document.getElementById("Hello").innerHTML = Response;
}
// END OF FOURTH ASSIGNMENT