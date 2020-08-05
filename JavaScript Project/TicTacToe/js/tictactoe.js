let activePlayer = 'X';        // THIS KEEPS TRACK ON WHO'S TURN IT IS.
let selectedSquares = [];      // THIS STORES AN ARRAY OF MOVES. WE USE THIS TO DETERMINE WIN CONDITIONS.

function audio(audioURL) {      // THIS FUNCTION TAKES A STRING PARAMETER OF THE PATH YOU SET EARLIER FOR
                                // PLACEMENT SOUND ('./media/place.mp3')
    let audio = new Audio(audioURL);      //  WE CREATE A NEW AUDIO OBJECT AND WE PASS THE PATH AS A PARAMETER.
    audio.play();      // PLAY METHOD PLAYS OUR AUDIO SOUND.
}

function resetGame() {      // THIS FUNCTION RESETS THE GAME IN A TIE OR A WIN.
    for (let i = 0; i < 9; i++) {      // THIS FOR LOOP ITERATES THROUGH EACH HTML SQUARE ELEMENT.
        let square = document.getElementById(String(i));      // THIS VARIABLE GETS THE HTML ELEMENT OF i.
        square.style.backgroundImage = '';      // THIS REMOVES OUR ELEMENTS backgroundImage.
    }
    selectedSquares = [];      // THIS RESETS THE ARRAY SO IT IS EMPTY AND WE CAN START OVER.
}
function disableClick() {      // THIS FUNCTION MAKES OUR BODY ELEMENT TEMPORARILY UNCLICKABLE.
    body.style.pointeEvents = 'none';      // THIS MAKES OUR BODY UNCLICKABLE.
    setTimeout(function() {body.style.pointeEvents = 'auto';}, 1000);  // THIS MAKES OUR BODY CLICKABLE AGAIN AFTER 1 SECOND.
}

function placeXorO(squareNumber) {      //FOR PLACING AND X OR AN O IN A SQUARE.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {      // THIS ENSURES A SQUARE HASN'T BEEN SELECTED ALREADY.
                                                                                 //.some() IS USED TO CHECK EACH ELEMENT OF selectedSquares ARRAY TO
                                                                                 // SEE IF IT CONTAINS A AVALIBLE NUMBER.
        
        let select = document.getElementById(squareNumber);      // THIS RETRIEVES THE HTML ID ELEMENT THAT WAS CLICKED ON.
        
        if (activePlayer === 'X') {       // THIS CONDITION CHECKS WHO'S TURN IT IS.
            select.style.backgroundImage = 'url("images/x.png")';       // IF activePlayer IS EQUAL TO 'X' THE x.png IS PLACE IN HTML.
        }
        else {      // THE ACTIVE PLAYER MAY ONLY BE 'X' OR 'O' SO, IF NOT 'X' THEN IT MUST BE 'O'.
            select.style.backgroundImage = 'url("images/o.png")'       // IF activePlayer IS EQUAL TO 'O' THE o.png IS PLACE IN HTML.
        }
        selectedSquares.push(squareNumber + activePlayer);      // squareNumber AND activePlayer ARE CONCATENATED TOGETHER AND ADDED TO ARRAY.
        checkWinConditions();      // THIS CALLS A FUNCTION TO CHECK FOR ANY WIN CONDITIONS.
        if (activePlayer === 'X') {      // THIS CONDITION IS FOR CHANGING THE ACTIVE PLAYER.
            activePlayer = 'O';      // IF ACTIVE PLAYER IS 'X' CHANGE TO 'O'.
        }
        else {      // IF ACTIVE PLAYER IS ANYTHING OTHER THAN 'X'.
            activePlayer = 'X';      // CHANGE THE activePlayer TO 'X'.
        }

        audio('./media/place.mp3');      // THIS FUNCTION PLAYS PLACEMENT SOUND.
        if(activePlayer === 'O'){      // THIS CHECKS TO SEE IF IT'S THE COMPUTERS TURN.
            disableClick();      // THIS DISABLES CLICKING FOR THE COMPUTER CHOICE.
            setTimeout(function (){ computersTurn(); }, 1000);      // THIS FUNCTION WAITS 1 SECOND BEFORE PLACING THE IMAGE AND ENABLING CLICK.
        }
        return true;      // RETURNING TRUE IS NEEDED FOR OUR computerTurn() FUNCTION TO WORK.
    }
    function computersTurn() {      // RANDOM SQUARE IS SELECTED.
        let success = false;      // THIS BOOLEAN IS NEEDED FOR OUR WHILE LOOP.
        let pickASquare;      // THIS VARIABLE STORES ARANDOM NUMBER 0-8.
        while(!success) {      // THIS CONDITION ALLOWS OUR WHILE LOOP TO KEEP TRYING IF A SQUARE IS SELECTED ALREADY.
            pickASquare = String(Math.floor(Math.random() * 9));       // A RANDOM NUMBER BETWEEN 0 AND 8 IS SELECTED.
            if (placeXorO(pickASquare)) {      // IF THE RANDOM NUMBER EVALUATES RETURNS TRUE, THE SQUARE HASN'T BEEN SELECTED YET.
                placeXorO(pickASquare);      // THIS LINE CALLS THE FUNCTION.
                success = true;      // THIS CHANGES OUR BOOLEAN AND ENDS THE LOOP.
            };
        }
    }
}


// DEINTING checkWinConditions()
function checkWinConditions() {      // THIS FUNCTION PARSES THE selectedSquares ARRAY TO SEARCH FOR WIN CONDITIONS.
                                     // drawWinLine FUNCTION IS CALLED TO DRAW LIN IF CONDITION IS MET.
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }      // X 0, 1, 2 CONDITION.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }      // X 3, 4, 5 CONDITION.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }      // X 6, 7, 8 CONDITION.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }      // X 0, 3, 6 CONDITION.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }      // X 1, 4, 7 CONDITION.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }      // X 1, 5, 8 CONDITION.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }      // X 6, 4, 2 CONDITION.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }      // X 0, 4, 8 CONDITION.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }      // O 0, 1, 2 CONDITION.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }      // O 3, 4, 5 CONDITION.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }      // O 6, 7, 8 CONDITION.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }      // O 0, 3, 6 CONDITION.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }      // O 1, 4, 7 CONDITION.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }      // O 1, 5, 8 CONDITION.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }      // O 6, 4, 2 CONDITION.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }      // O 0, 4, 8 CONDITION.
    else if (selectedSquares.length >= 9) {      // THIS CONDITION CHECKS FOR A TIE. IF NONE OF THE ABOVE CONDITIONS REGISTER
                                                 // AND 9 SQUARES ARE SELECTED, THE CODE EXECUTES.
        audio('./media/tie.mp3');      // THIS FUNCTION PLAYS THE TIE GAME SOUND.
        setTimeout(function () { resetGame(); }, 1000);      // THIS FUNCTION SETS A .3 SECOND TIMER BEFORE THE resetGame is called.
    }

    function arrayIncludes(squareA, squareB, squareC) {      // THIS FUNCTION CHECKS IF AN ARRAY INCLUDES 3 STRINGS.
                                                            // IT IS USED FOR EACH WIN CONDITION.
        const a = selectedSquares.includes(squareA) ;      // THE NEXT 3 VARIABLES WILL BE USED TO CHECK FOR 3 IN A ROW.
        const b = selectedSquares.includes(squareB) ;
        const c = selectedSquares.includes(squareC) ;
        if (a === true && b === true && c === true) { return true; }
    }
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {     // THIS FUNCTION UTILIZES HTML CANVAS TO DRAW WIN LINES.
    const canvas = document.getElementById('win-lines');      // THIS LINE ACCESSES OUR HTML CANVAS ELEMENT.
    const c = canvas.getContext('2d');      // THIS LINE GIVES US ACCESS TO METHODS AND PROPERTIES TO USE ON CANVAS.
    let x1 = coordX1,      // THIS LINE INDICATES WHERE THE START OF THE X AXIS LINE IS.
        y1 = coordY1,      // THIS LINE INDICATES WHERE THE START OF THE Y AXIS LINE IS.
        x2 = coordX2,      // THIS LINE INDICATES WHERE THE END OF THE X AXIS LINE IS.
        y2 = coordY2,      // THIS LINE INDICATES WHERE THE END OF THE Y AXIS LINE IS.
        x = x1,      // THIS VARIABLE STORES TEMPORARY X AXIS DATA WE UPDATE IN OUR ANIMATION LOOP.
        y = y1;      // THIS VARIABLE STORES TEMPORARY Y AXIS DATA WE UPDATE IN OUR ANIMATION LOOP.

    function animateLineDrawing() {      // THIS FUNCTION INTERACTS WITH THE CANVAS.
        const animationLoop = requestAnimationFrame(animateLineDrawing);      // THIS VARIABLE CREATES THE LOOP FOR WHEN THE GAME ENDS IT RESTARTS.
        c.clearRect(0, 0, 608, 608);     // THIS METHOD CLEARS CONTENT FROM LAST LOOP ITERATION.
        c.beginPath();      // THIS METHOD STARTS A NEW PATH
        c.moveTo(x1, y1);      // THIS METHOD MOVES US TO A STARTING POINT FOR OUR LINE.
        c.lineTo(x, y);      // THIS METHOD INDICATES THE END POINT IN OUR LINE.
        c.lineWidth = 10;      // THIS METHOD SETS THE WIDTH OF THE LINE.
        c.strokeStyle = 'rgba(70, 225, 33, .8)';      // THIS METHOD SETS THE COLOR OF OUR LINE.
        c.stroke();      // THIS METHOD DRAWS EVERYTHING WE LAID OUT ABOVE.
        if (x1 <= x2 && y1 <= y2) {      // THIS CONDITION CHECKS IF WE'VE REACHED THE ENDPOINT.
            if (x < x2) { x += 10; }      // THIS CONDITION ADDS 10 TO THE PREVIOUS END X POINT.
            if (y < y2) { y += 10; }      // THIS CONDITION ADDS 10 TO THE PREVIOUS END Y POINT.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {      // THIS CONDITION IS SIMILAR TO THE ONE ABOVE.
                                         // IT WAS NECESSARY FOR THE 6, 4, 2 WIN CONDITION.
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); } 
        }
    }
    function clear() {      // THIS FUNCTION CLEARS OUR CANVAS AFTER OUR WIN LINE IS DRAWN.
        const animationLoop = requestAnimationFrame(clear);      // THIS LINE STARTS OUR ANIMATION LOOP.
        c.clearRect(0, 0, 608, 608);      // THIS LINE CLEARS THE CANVAS.
        cancelAnimationFrame(animationLoop);      // THIS LINE STOPS THE ANIMATION LOOP.
    }
    disableClick();      // THIS LINE STOPS THE ANIMATION LOOP.
    audio('./media/winGame.mp3')      // THIS LINE PLAYS THE WIN SOUND.
    animateLineDrawing() ;      // THIS LINE CALLS THE MAIN ANIMATION LOOP.
    setTimeout(function () { clear() ; resetGame() ; }, 1000);      // THIS LINE WAITS 1 SECOND.
                                                                    // THEN, CLEAR CANVAS, RESET THE GAME, AND ALLOWS CLICKING AGAIN.
}