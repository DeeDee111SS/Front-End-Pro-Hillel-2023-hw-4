let operator = prompt('What do you want to do? (add, sub, mult, div)'); // or prompt('Enter the operator (" + ", " - ", " * ", " / ")')
let a = prompt('Enter the first number');
let b = prompt('Enter the second number');


function calculate(a, b, operator) {
    
    if (operator === "add") { // or (operator === "+")
        console.log('Result: ' + a + ' + ' + b + ' = ' + (Number(a) + Number(b)));
        
    } else if (operator === "sub") { // or (operator === "-")
        console.log('Result: ' + a + ' - ' + b + ' = ' + (a - b));
        
    } else if (operator === "mult") { // or (operator === "*")
        console.log('Result: ' + a + ' * ' + b + ' = ' + (a * b));
        
    } else if (operator === "div") { // or (operator === "/") 
        console.log('Result: ' + a + ' / ' + b + ' = ' + (a / b));
        
    } else {
        console.log("uncorrect input data");
    }     
}

calculate(a, b, operator);