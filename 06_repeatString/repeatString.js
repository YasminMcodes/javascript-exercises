const repeatString = function(string, num) {
    let newstr =""
    if (num < 0) return "ERROR" ;
    for(i = 1; i<=num;i++){
        newstr += string;
    } return newstr;
};

// Do not edit below this line
module.exports = repeatString;
