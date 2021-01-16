/**
 * Return the third largest number. Cannot use sort.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - third largest number
 *
 * ex: thirdLargest([12, 3, 8, 2, 1, 14])
 * returns 8
 */

function thirdLargest(nums) {
    let thirdLarge = -Infinity
    let largest = -Infinity
    let secondLargest = -Infinity
   for(let i = 0; i < nums.length; i++) {
       let el = nums[i]
       if(nums.length < 3) {
           return null
       } else if(el > largest) {
            thirdLarge = secondLargest
            secondLargest = largest
            largest = el
        } else if(el > secondLargest) {
            thirdLarge = secondLargest
            secondLargest = el 
        } else if(el > thirdLarge) {
            thirdLarge = el
        }
    }
    return thirdLarge
}

module.exports = thirdLargest