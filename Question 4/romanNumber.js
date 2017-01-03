window.onload = function() {
    var getRomanNumber = function(number) {
        var romanNumber = '', 
            map = [],
            parsedNumber;

        function parseMaxDecimalToLiteral(number) {
            number = getMaxDecimalValue(number);
            for(var i =0, length = map.length; i < length; i++) {
                if (number <= map[i].number) {
                    return map[i];
                }
            }  
        }

        function getMaxDecimalValue(number) {
            var maxDecimalValue = 1;
            for(var i =0, length = map.length; i < length; i++) {
                if (number >= map[i].number) {
                    maxDecimalValue = map[i].number;
                } else {
                    break;
                }
            } 
            return maxDecimalValue;            
        }

        number = parseInt(number);
        if(number < 1 || number > 3999) {
            return "Number is not valid";
        }
        map[0] = {number:1, literal: 'I'};
        map[1] = {number:4, literal: 'IV'};
        map[2] = {number:5, literal: 'V'};
        map[3] = {number:9, literal: 'IX'};
        map[4] = {number:10, literal: 'X'};
        map[5] = {number:40, literal: 'XL'};
        map[6] = {number:50, literal: 'L'};
        map[7] = {number:90, literal: 'XC'};
        map[8] = {number:100, literal: 'C'};
        map[9] = {number:400, literal: 'CD'};
        map[10] = {number:500, literal: 'D'};
        map[11] = {number:900, literal: 'CM'};
        map[12] = {number:1000, literal: 'M'};                
        while(number > 0) {
            parsedNumber = parseMaxDecimalToLiteral(number);
            number = number - parsedNumber.number;
            romanNumber += parsedNumber.literal;
        }
        return romanNumber;
    };
    var content;
    document.querySelector('#input-roman-number').onkeyup = function () {        
        content = document.createTextNode('The roman numeral is:' + getRomanNumber(document.querySelector('#input-roman-number').value));
        document.querySelector('#roman-number').innerHTML = '';
        document.querySelector('#roman-number').appendChild(content);
    };
};