const palindromes = function (string) {
    let cleaned = string.replace(/[^\w]/g, '').toLowerCase();
    let letters = Array.from(cleaned);
    let invertedLetters = letters.slice().reverse();
    return letters.join('') === invertedLetters.join('');
};

// Do not edit below this line
module.exports = palindromes;
