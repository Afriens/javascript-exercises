const repeatString = function(string, number) {
    if (number < 0) return "ERROR";
    let repeatWord = ''
    for(let i=0; i < number ; i++) {
      repeatWord += string
    }
    return repeatWord
};

// Do not edit below this line
module.exports = repeatString;
