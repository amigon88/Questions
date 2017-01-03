window.onload = function() {
    var basicCalculator = function(operations) {
        var numbers,
            operators,
            result = 0,
            regexp = /[\+||\-||\/||\*]+/g;

        function doOperation(x, y, operator) {
            x = parseInt(x);
            y = parseInt(y);        
            switch (operator) {
                case '+':
                    return x + y;
                case '-':
                    return x - y;
                case '/':
                    return x / y;
                case '*':
                    return x * y;
            }
            return;
        }
        //Extract the numbers from the string
        numbers = operations.split(regexp);
        //Extract the operators from the string
        operators = operations.match(regexp);    
        result = parseInt(numbers[0]);
        numbers = numbers.slice(1);
        while(numbers.length > 0) {
            result = doOperation(result, numbers[0], operators[0]);
            numbers = numbers.slice(1);
            operators = operators.slice(1);
        }    
        return result;
    };
    var content;
    document.querySelector('#input-string').onkeyup = function () {        
        content = document.createTextNode('The total of the operation is: ' + basicCalculator(document.querySelector('#input-string').value));
        document.querySelector('#total-operation').innerHTML = '';
        document.querySelector('#total-operation').appendChild(content);
    };
};


