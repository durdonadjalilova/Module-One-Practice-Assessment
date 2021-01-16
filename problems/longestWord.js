/**
 * Returns the longest word in the array.
 * Ties should go to the earlier word
 * @param {string[]} words - an array containing words
 * @returns {string} - longest word
 *
 * ex: longestWord(["cat", "bird", "hello", "corey", "do"])
 * returns "hello"
 */

function longestWord(words) {
    let longest = words[0]
    for(i = 0; i < words.length; i++) {
    let el = words[i]
        if(el.length > longest.length) {
            longest = el
        } else if(el.length === longest.length) {
            longest
        }
    }
    return longest
}

module.exports = longestWord;
