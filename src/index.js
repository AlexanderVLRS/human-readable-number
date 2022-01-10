const strNum = [
    'zero','one','two','three','four', 'five','six','seven','eight','nine', 'ten','eleven','twelve',
    'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen','eighteen','nineteen',
    'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'
];

module.exports = function toReadable (number) {
    let result = [];
    if (number >= 100) {
        const x = Math.floor(number / 100);
        result.push(strNum[x], 'hundred');
        number -= x * 100;
        if (number === 0) {
            return result.join(' ');
        }
    }
    if (number > 19) {
        const x = Math.floor(number / 10);
        result.push(strNum[x+18]);
        number -= x * 10
        if (number > 0) {
            result.push(strNum[number]);
        }
    } else {
        result.push(strNum[number]);
    }
    return result.join(' ');
}