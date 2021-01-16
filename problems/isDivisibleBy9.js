/**
 * Returns if a number is divisible by 9. 
 * @param {number} num - a number
 * @returns {boolean} - is the number divisible by 9
 *
 * ex: isDivisibleBy9(27) //=> true
 * ex: isDivisibleBy9(16) //=> false
 *
 */

function isDivisibleBy9(num) {
    if(num % 9 === 0) {
        return true
    }
    return false
}

module.exports = isDivisibleBy9;
