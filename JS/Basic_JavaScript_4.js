function my_Dictionary() {
    var Animal = {
        Species:"Owl",
        Color:"White",
        Breed:"Snowy Owl",
        Age:"12",
        Sound:"Hoot"
    };
    delete Animal.Breed;
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}