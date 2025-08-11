const fibonacci = function(n) {
    if (typeof n === "string") n = Number(n);
    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    if (n === 1|| n === 2) return 1;

    let seq = [1, 1];
    
    for (let i = 2; i < n; i++) {
         seq.push(seq[i - 1] + seq[i - 2]);
    }

    return seq[n - 1]
}

// Do not edit below this line
module.exports = fibonacci;
