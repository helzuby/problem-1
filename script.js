// Step1: Write a javascript function that accepts a string as a parameter.
//And find the longest word.
//Step 2: Create a variable that will hold the string.
//Step 3 : Use the .split method to break the array of words 
//Step5: Loop through the words using the for loop method
//step6: Use an if statement to give conditions that should be met to get a return value.
//step7: Return the value of the array
//step 8: console.log the longestword.


function longestWord(str) {
  const arrayOfWords = str.split(" ");


  let longestWord = "";

  for(let i = 0; i < arrayOfWords.length; i++) {
    if(arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    } 
  }

  return longestWord;
}

console.log(longestWord("How to write nested arrays")); 
