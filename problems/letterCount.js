/**
 * Return a frequency map of each letter in a string, ignores spaces.
 * @param {string} str - a string
 * @returns {Object} - the characters and their frequency
 *
 * ex: letterCount("hello world") //=> {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 *
 */

function letterCount(str) {
    let arr = str.split(" ")
    let str1 = arr.join("")
    let obj = {}
    for(i = 0; i < str1.length; i++) {
        let el = str1[i].toLowerCase()
        if(obj[el]) {
         
            obj[el] +=1
            
        } else {
            obj[el] = 1
        }
    }
    return obj
}

module.exports = letterCount;
