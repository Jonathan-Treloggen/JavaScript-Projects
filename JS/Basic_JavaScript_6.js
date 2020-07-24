function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    can_ride = (Height < 52) ? "You're too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = can_ride + " to ride";
}

function Pokemon(Name, Type, Generation) {
    this.Pokemon_Name = Name;
    this.Pokemon_Type = Type;
    this.Pokemon_Generation = Generation;
}
var Jon = new Pokemon("Metagross", "Steel, Psychic", "GEN 3");
var Cody = new Pokemon("Charizard", "Fire, Flying", "GEN 1");
var Megan = new Pokemon("Rapidash", "Fire", "GEN 1");
function FavPokemon() {
    document.getElementById("New_and_This").innerHTML =
    "Jon's favorite Pokemon is " + Jon.Pokemon_Name + " that is a " 
    + Jon.Pokemon_Type + " type, and is from the " + Jon.Pokemon_Generation
    + " games, Sapphire, and Ruby."
}

function nested() {
    document.getElementById("Nested_Function").innerHTML = number_of_nests();
    function number_of_nests () {
        var Starting_point = 5;
        function Plus_one_nest () {Starting_point += 1;}
        Plus_one_nest();
        return Starting_point;
    }
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}