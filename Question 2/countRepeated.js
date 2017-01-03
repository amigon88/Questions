window.onload = function() {
    var countRepeated = function(firstString, secondString) {
        var repeatedCharacters = [];
        
        if (firstString === secondString) {
            return "The strings should be different";
        }
        firstString = firstString.replace(' ', '').split('');
        secondString = secondString.replace(' ', '').split('');
        for(var i = 0, length = firstString.length; i < length; i++) {
            for(var j = 0, length2 = secondString.length; j < length2; j++) {
                if(firstString[i] === secondString[j] && repeatedCharacters.join().indexOf(firstString[i]) === -1) {
                    //Add only in characters are equal and they are not already in the array
                    repeatedCharacters.push(firstString[i]);
                }
            }
        }
        return repeatedCharacters;    
    };
    var content;
    function compareStrings() {
        content = document.createTextNode('The final string is: ' + countRepeated(document.querySelector('#input-string1').value, document.querySelector('#input-string2').value));
        document.querySelector('#string-repeated').innerHTML = '';
        document.querySelector('#string-repeated').appendChild(content);
    }
    document.querySelector('#input-string1').onkeyup = compareStrings;
    document.querySelector('#input-string2').onkeyup = compareStrings;
};