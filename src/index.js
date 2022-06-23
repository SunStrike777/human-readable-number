module.exports = function toReadable (number) {
    let simpleNumerals = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let numerals = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "hundred"];

    if (number > 0 && number <= 19) return simpleNumerals[number];
    else if (number >= 20 && number <= 99) return (numerals[number.toString().split('')[0]] + ' ' + simpleNumerals[number.toString().split('')[1]]).trim();
    else if (number >= 100 && number <= 999 && number.toString().slice(-2) > 19) return (simpleNumerals[number.toString().split('')[0]] + ' ' + numerals[10] + ' ' + numerals[number.toString().split('')[1]] + ' ' + simpleNumerals[number.toString().split('')[2]]).trim();
    else if (number >= 100 && number <= 999 && number.toString().slice(-2) <= 19) return (simpleNumerals[number.toString().split('')[0]] + ' ' + numerals[10] + ' ' + simpleNumerals[Number(number.toString().slice(-2))]).trim();
    else return 'zero';
}

