/**
 * Returns a new string with every other letter.
 * @param {string} str - a string
 * @returns {str} -
 *
 * ex: everyOddCharacter("mississippi") //=> "issip"
 *
 */

function everyOddCharacter(str) {}



/**
 * Returns the characters from str that are found in targets array
 * @param {string} str - string input
 * @param {string[]} target - targets to find in string
 * @returns {string} - amount of times the target was included
 *
 * ex: retieveTargets("hello world", ["h", "l", "o"] ) //=> "hllool"
 *
 */

function retieveTargets(str, targets) {}



/**
 * Returns true if every number is an odd number . 
 * @param {arr} nums - an array of numbers
 * @returns {boolean} - is every number is an odd number
 *
 * ex: isOddNumbers([27, 17, 21, 51]) //=> true
 * ex: isOddNumbers([1, 37, 5, 2]) //=> false
 *
 */

function isOddNumbers(nums) {}


/**
 * Return an array of letters that match the frequency value of that letter
 * @param {Object} obj- the characters and their frequency
 * @returns {Object} - 
 *
 * ex: frequencyPrint({h: 1, e: 1, l: 2, o: 1}) //=> "hello"
 *
 */

function frequencyPrint(obj) {}


/**
 * Returns the longest word in the object.
 * Ties should go to the earlier word
 * @param {object} petNames - an object containing words
 * @returns {string} - longest word
 *
 * ex: longestPetName({cat:"Tommy", bird:"Sunny", dog:"Sunshine", rat:"tiki"})
 * returns "Sunshine"
 */

function longestPetName(petNames) {}


/**
 * Return a number without zeros.
 * @param {number} num - a number
 * @returns {number || null} - a number without zeros
 *
 * ex: remove0(1023) //=> 123
 * ex: remove0(0000000) //=> null
 *
 */

function remove0(num) {}


/**
 * Returns an array of words that includes a target character. 
 * @param {string[]} words - an array containing words
 * @param {string} letter - a letter target
 * @returns {string[]} - words that include target letter
 *
 * ex: onlyStringsThatContainTheTargetLetter(["cat", "hello", "corey", "dog", "hiccups"], "c")
 * returns ["cat", "corey", "hiccups"]
 */

function onlyStringsThatContainTheTargetLetter(words, target) {}


/**
 * Return the product of all even numbers in an array.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - product of all the odd numbers
 *
 * ex: productOfOddNumbers([1, 2, 3, 4, 5, 6])
 * returns 48
 */

function productOfEvenNumbers(nums) {}

/**
 * Takes in an object and returns the sum of all values
 * @param {Object} obj - an object with key value pairs
 * @returns {number} - sum of all values
 *
 * ex: sumOfValuesOfObject({corey: 5, sam: 10, peter: 3, sparky: 9, key: 10})
 * returns 27
 */

function sumOfValuesOfObject(obj) {}


/**
 * Return the third smallest number. Cannot use sort.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - third smallest number
 *
 * ex: thirdSmallest([12, 3, 8, 2, 1, 14])
 * returns 3
 */

function thirdLargest(nums) {}


/**
 * Takes in an array of cars and sorts them by year from newest to oldest
 * @param {Object[]} people - an array containing car objects
 * @returns {Object[]} - a sorted array
 *
 * ex: sortCarByYear([
  { car: "BMW", year: 2001 },
  { car: "Tesla", year: 2021 },
  { car: "Toyota", year: 1995 },
  { car: "Ford", year: 2020 },
])

 /** returns [
     { car: "Tesla", year: 2021 },
     { car: "Ford", year: 2020 },
  { car: "BMW", year: 2005 },
  { car: "Toyota", year: 1995 },
]
 */

function sortCarByYear(peoples) {}



