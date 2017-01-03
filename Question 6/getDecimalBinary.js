window.onload = function() {
    var getDecimalBinary = function(number) {
        var result;
        
        number = parseInt(number);
        if(number < 0 || number > 1) {
            return 'Error';
        }
        if(number === 0) {
            result = '0';
        } else {
            result = '0.';
        }
        while (number > 0) {
            number = number * 2;
            if (number >= 1) {
                result += '1';
                number = number - 1;
            } else {
                result += '0';            
            }
            if (result.length > 32) {
                return 'Error';
            }
        }
        return result;
    };
    var content;
    document.querySelector('#input-decimal').onkeyup = function () {        
        content = document.createTextNode('The binary representation is: ' + getDecimalBinary(document.querySelector('#input-decimal').value));
        document.querySelector('#binary-representation').innerHTML = '';
        document.querySelector('#binary-representation').appendChild(content);
    };
};
