function Call_Loop() {
    var B = 0;
    var Loop = "";
    while (B < 16) {
        Loop += "<br>" + B;
        B++;
    }
    document.getElementById("Loop").innerHTML = Loop;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments [Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "playing";
    Cat_Picture[1] = "eating";
    Cat_Picture[2] = "looking like a potato"
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}

function constant_function() {
    const console = {type:"Xbox series X", brand:"Microsoft", color:"black", fan_color:"green"};
    console.type = "Xbox series X";
    console.price = "$700";
    document.getElementById("Constant").innerHTML = "The cost of the " + console.type +
    " is " + console.price + ".";
}

function let_function() {
    var H = 72;
    document.write(H);
    {
    let H = 44;
    document.write("<br>" + H);
    }
    document.write("<br>" + H);
}

let car = {
    make: "Jeep ",
    model: "Commander.",
    year: "2010 ",
    color: "dark blue ",
    description : function() {
        return "This car is a " +this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_object").innerHTML = car.description();