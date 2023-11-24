// ----

//Section 3 Array Methods with Calbacks

// ----


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Every
//1. Determine if every number is greater than or equal to 0

let usingEveryNums = nums.every(nums => nums >= 0)
console.log(usingEveryNums)

//2. determine if every word shorter than 8 characters

let shorterThanEight = panagram.every(words => words.length <= 8)
console.log(shorterThanEight)


// --

//Filter
//1. Filter the array for numbers less than 4

function lessThanFour(nums) {
    return nums <= 4;
}

const result = nums.filter(lessThanFour)
console.log(result)

//2. Filter words that have an even length

const evenLengthWords = panagram.filter(word => word.length % 2 === 0)
console.log(evenLengthWords)

// --

//find
//1. Find the first value divisible by 5
//should say 5

let findDivisibleFive = nums.find((num) => num % 5 === 0)
console.log(findDivisibleFive)

//2. Find the first word that is longer than 5 characters
//There is no word longer than 5 characters
//logs undefined. This feels correct because nothing is greater than 5 characters long
//When I put >=, I get quick, which is the 1st one greater than or equal to 5. This seems right

let longerThanFive = panagram.find((word) => word.length > 5)
console.log(longerThanFive)

// --

//Find index
//1. Find the index of the first number that is divisible by 3

let useFind = nums.findIndex((num) => num % 3 === 0)
console.log(useFind)

//2. Find the index of the first word that is less than 2 characters long
//This should return nothing
//This is logging -1. It shouldn't pull up anything because nothing is less than 2 characters. commenting this out

// const lessThanTwoCharacters = panagram.findIndex((word) => word.length < 2);
// console.log(lessThanTwoCharacters)

// --

//For each
//1. Console.log each value of the nums array multiplied by 3

let multiplyThree = []
nums.forEach(v => {
    multiplyThree.push(v * 2)
})
console.log(multiplyThree)

//2. console.log each word with an exclamation point at the end of it

let addExclamation = []
panagram.forEach(v => {
    addExclamation.push(v + '!')
})
console.log(addExclamation)

// --

//Thought questions

//What happened to the original array. The original array is still there, but a new array called multiplyThree and addExclamation point now have what was requested above
//Can you store the values from a forEach loop method in a new array? Yes! We did just did and console.log it to show the new array

// --

//Map
//1. Make a new array of each number multiplied by 100

//Is this what you're looking for? I created a new array that multiplied every number times 100
let multiply100 = nums.map(v => {
    return {
        hundredTime: 100 * v,
    }
})

console.log(multiply100)

//2. Make a new array of all the words in all uppercase

let allUpperCase = panagram.map(v => {
    return {
        allCaps: panagram.toUpperCase();
    }
})

console.log(allUpperCase)