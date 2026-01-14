const reverseString = function(str) {
    let newStr = "";
   newStr = str.split("").reverse().join("");
   return newStr;
};

// Do not edit below this line
module.exports = reverseString;
