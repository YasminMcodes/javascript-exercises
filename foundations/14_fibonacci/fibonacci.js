const fibonacci = function(n) {
    let arr = [1,1];
    if (n==0) return 0;
    else if(n<0) return "OOPS";
    for(let i=1; i<n;i++){
        let num = arr[i] + arr[i-1];
        arr.push(num);
    }
    return arr[n-1];

};

// Do not edit below this line
module.exports = fibonacci;
