module.exports = function toReadable (number) {
    let simpleNumerals = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let numerals = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred"];
    let splittedNumber = number.toString().split('')

    if (number > 0 && number <= 19) return simpleNumerals[number];
    else if (number >= 20 && number <= 99) return (numerals[splittedNumber[0]] + ' ' + simpleNumerals[splittedNumber[1]]).trim();
    else if (number >= 100 && number <= 999 && number.toString().slice(-2) > 19) return (simpleNumerals[splittedNumber[0]] + ' ' + numerals[10] + ' ' + numerals[splittedNumber[1]] + ' ' + simpleNumerals[splittedNumber[2]]).trim();
    else if (number >= 100 && number <= 999 && number.toString().slice(-2) <= 19) return (simpleNumerals[splittedNumber[0]] + ' ' + numerals[10] + ' ' + simpleNumerals[+(number.toString().slice(-2))]).trim();
    else return 'zero';
}

