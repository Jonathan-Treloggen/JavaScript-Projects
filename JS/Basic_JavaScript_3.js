window.alert(Math.random()  * 100);

function addition() {
    var add3 = 5 + 6;
    document.getElementById("Math").innerHTML = add3;
}

function subtraction() {
    var sub3 = 5 - 6;
    document.getElementById("MathS").innerHTML = sub3;
}

function multiplication() {
    var mul3 = 5 * 6;
    document.getElementById("MathM").innerHTML = mul3;
}

function division() {
    var div3 = 30 / 6;
    document.getElementById("MathD").innerHTML = div3;
}

function more_math() {
    var multi_math = (30 / 6) + 6 - 11;
    document.getElementById("MathMul").innerHTML = multi_math;
}

function modulus() {
    var mod3 = 30 % 11;
    document.getElementById("MathMod").innerHTML = mod3;
}

function unary() {
    var x = 11;
    document.getElementById("MathU").innerHTML = -x;
}

function increment(){
    var x = 11;
    x++;
    document.getElementById("MathIn").innerHTML = x;
}

function decrement() {
    var x = 11;
    x--;
    document.getElementById("MathDe").innerHTML = x;
}

function object() {
    document.getElementById("ObjectM").innerHTML = Math.sqrt(36);
}