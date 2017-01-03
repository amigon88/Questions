window.onload = function() {
    var countVowels = function (stringToCount) {
        var vowels,
            regexp = /[a||e||i||o||u]{1,1}/gi;
        
        vowels = stringToCount.match(regexp); 
        return vowels && vowels.length || 0;
    };
    var content;
    document.querySelector('#input-string').onkeyup = function () {        
        content = document.createTextNode('The number of vowels is:' + countVowels(document.querySelector('#input-string').value));
        document.querySelector('#total-vowels').innerHTML = '';
        document.querySelector('#total-vowels').appendChild(content);
    };
};
  
