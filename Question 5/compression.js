window.onload = function() {
    var compression = function(stringToCompress) {
        var arrayString,
            letter = '',
            counterRepeated = 0,
            stringCompressed = ''; 

        arrayString = stringToCompress.split('');
        letter = arrayString[0];
        for(var i = 0, length = arrayString.length; i < length; i++) {
            //Check if the actual character is the same than the previous one
            if(letter !== arrayString[i]) {            
                stringCompressed += letter + counterRepeated;
                counterRepeated = 1;
            } else {
                counterRepeated++;
            }                
            letter = arrayString[i];
        }
        stringCompressed += letter + counterRepeated;
        if (stringToCompress.length > stringCompressed.length) {
            return stringCompressed;
        } else {
            return stringToCompress;
        }    
    };
    var content;
    document.querySelector('#input-string').onkeyup = function () {        
        content = document.createTextNode('The final string is: ' + compression(document.querySelector('#input-string').value));
        document.querySelector('#string-compressed').innerHTML = '';
        document.querySelector('#string-compressed').appendChild(content);
    };
};


