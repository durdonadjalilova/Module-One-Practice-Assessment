/**
 * Return the product of all odd numbers in an array.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - product of all the odd numbers
 *
 * ex: productOfOddNumbers([1, 2, 3, 4, 5])
 * returns 15
 */

function productOfOddNumbers(nums) {
  let product = 1;
  
  let numOfOdds = nums.filter((num) => num % 2===1 )
    if(numOfOdds.length === 0) {
        return 0
    } else {
        numOfOdds.forEach((num) =>{
            product *= num
        })
    }
    return product
}

module.exports = productOfOddNumbers;
