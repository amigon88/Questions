window.onload = function() {
    var generateLeapYears = function() {
        var leapYears = [],
            year = new Date().getFullYear();
        
        function isLeapYear(year) {
            if (year % 4 === 0 && year % 100 !== 0) {
                return true;
            } else if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        
        while (!isLeapYear(year)) {
            year++;
        }
        for(var i = 0; i < 20; i++) {
            leapYears.push(year);
            year += 4;
        }
        return leapYears;
    };
    var content = document.createTextNode(generateLeapYears());
    document.querySelector('#leap-years').appendChild(content);    
};


