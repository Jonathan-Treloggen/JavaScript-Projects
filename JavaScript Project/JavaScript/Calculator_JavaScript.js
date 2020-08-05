const Calculator = {               // CREATES AN OBJECT TO KEEP TRACK OF VALUES
    Display_Value: '0',          // THIS DISPLAYS A 0 ON THE SCREEN
    First_Operand: null,           // THIS WILL HOLD THE FIRST OPERAND FOR ANY EXPRESSIONS, WE SET IT TO NULL FOR NOW.
    Wait_Second_Operand: false,  // THIS CHECKS WETHER OR NOT THE SECOND OPERAND HAS BEEN INPUTED.
    operator: null,                // THIS WILL HOLD THE OPERATOR, WE SET IT TO NULL FOR NOW.
};

function Input_Digit(digit) {                                      // THIS MODIFIES VALUES EACH TIME A BUTTON IS CLICKED.
    const { Display_Value, Wait_Second_Operand } = Calculator; 
    if (Wait_Second_Operand === true) {                         // WE ARE CHECKING TO SEE IF Wait_Second_Operand IS TRUE
        Calculator.Display_Value = digit;                       // AND SET Display_Value TO THE KEY THAT WAS CLICKED.
        Calculator.Wait_Second_Operand = false;
    }
    else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
                                 // THIS OVERWRITES Display_Value IF THE CURRENT VALUE IS 0
                                 // OTHERWISE IT ADDS ONTO IT                    
    }
}

function Input_Decimal(dot) {                                // THIS SECTION HANDLES DECIMAL POINTS
    if (Calculator.Wait_Second_Operand === true) return;  // THIS ENSURES THAT ACCIDENTAL CLICKING OF THE DECIMAL POINT
                                                          // DOESN'T CAUSE BUGS IN YOUR OPERATION
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;                     // WE ARE SAYING THAT IF THE Display_Value DOES NOT CONTAIN
                                                             // A DECIMAL POINT WE WANT TO ADD A DECIMAL POINT.
    }
}

function Handle_Operator(Next_Operator) {                           // THIS SECTION HANDLES OPERATORS
    const { First_Operand, Display_Value, operator } = Calculator
    const Value_of_Input = parseFloat(Display_Value);             // WHEN AN OPERATOR KEY IS PRESSED, WE CONVERT THE CURRENT NUMBER
                                                                  // DISPLAYED ON THE SCREEN TO A NUMBER AND THEN STORE THE RESULT
                                                                  // IN Calculator.First_Operand IF IT DOESN'T ALREADY EXIST.

    if (operator && Calculator.Wait_Second_Operand) {               // CHECKS IF AN OPERATOR ALREADY EXISTS AND IF Wait_Second_Operand
                                                                    // IS TRUE, THEN IT UPDATES THE OPERATOR AND EXITS FROM THE FUNCTION.
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    }                       
    else if (operator) {                                                       // CHECKS IF AN OPERATOR ALREADY EXISTS.
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);   // IF OPERATOR EXISTS, PROPERTY LOOKUP IS PERFORMED
                                                                                 // FOR THE OPERATOR IN THE Perform_Calculation OBJECT
                                                                                 // AND THE FUNCTION THAT MATCHES THE OPERATOR IS EXECUTED.

        result = Number(result).toFixed(9)                                    // HERE WE ADD A FIXED AMOUNT OF NUMBERS AFTER THE DECIMAL.
        result = (result * 1).toString()                                         // THIS WILL REMOVE ANY TRAILING 0'S
        Calculator.Display_Value = (result);
        Calculator.First_Operand = result;
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => First_Operand = Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() {                                        // THIS FUNCTION UPDATES THE SCREEN WITH THE CONTENTS OF Display_Value.
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
const keys = document.querySelector('.calculator-keys');  // THIS SECTION MONITORS BUTTON CLICKS
keys.addEventListener('click', (event) => {
    const { target } = event;                                // THE TARGET VARIABLE IS AN OBJECT THAT REPRESENTS THE ELEMENT
                                                             // THAT WAS CLICKED.

    if (!target.matches('button')) {                      // IF THE ELEMENT THAT WAS CLICKED ON IS NOT A BUTTON, EXIT THE FUNCTION.
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target,classList,contains('decimal'))  {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    if (target.classList,contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})