const sumAll = function(start, finish) {
    if (!Number.isInteger(start) || start < 0 || !Number.isInteger(finish) || finish < 0)  {
         return 'ERROR';
    };

    const min = Math.min(start, finish);
    const max = Math.max(start, finish);

    let finalSum = 0;
    for (let i = min; i <= max; i++) {
        finalSum += i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
