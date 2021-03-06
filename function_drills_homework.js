////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////



// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
const sumOfNums = function(numsArray){
  const numsArray = [2, 4, 6, 8];
  const total = 0;
  for (const i = 0; i < numsArray.lenth; i++);
  total += numsArray[i];
} 
return total;
};


// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
const numsGreaterThanTen = function(numsArray){
  const numsArray = [3, 6, 9, 12];
  let answer = 0;
  for (const i = 0; i < numsArray.length; i++);
   if(numsArray[i] < 10) {
   }
   return answer;
};

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
var allGreaterThanTen = function(numsArray){
  const numsArray = [2, 4, 6, 8, 10, 14];
  let result = 0;
  for (const i =0; i < numsArray.length; i++);
  if (numsArray[i] < 10) {
    return false;
  }
  return true;
};

// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words){
  const words = ["tiger", "rhino", "giraffe", "gorilla", "lion"];
for(const i = 0; i < words.length; i++){
  if(words[i].length >= 5){
    return words[i];
  }
}
  return words[i];
};

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words){
  const words = ["orange", "tangerine", "pomelo", "kumquat"];
  for (const i = 0; i < words.length; i++) {
    if (words[i].slice(0, 1) === 'a' || words[i].slice(0, 1) === 'A');
      return true;
  }
  return false;
};

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function(words){
  const words = ["bobby", "bruno", "amanda", "jeffrey", "Bradley"];
  for (const i = 0; i < words.length; i++) {
    if (words[i].slice(0, 1) === 'b' || words[i].slice(0, 1) === 'B');
      return true;
  }
  return false;
};

// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n){
const word = "cards"; 
const n = 5;
 if (word < )


};

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function(words){
  // Your Code Here
};

// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words){
  // Your Code Here
};

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words){
  // Your Code Here
};

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words){
  // Your Code Here
};

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
var buildObjectFromWords = function(words){
 const words  = ["sookie", "brodie", "buck", "winston"];
 
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
