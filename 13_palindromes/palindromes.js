const palindromes = function (string) {
   const str = string
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
    for (let i = 0; i<str.length; i++){
        if(str[i] != str[str.length-1 - i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
