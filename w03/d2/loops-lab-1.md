<img src="https://i.imgur.com/sA6iEbw.jpg">

# JavaScript Looping over Arrays Lab

## Introduction

This lab provides an opportunity to practice looping over arrays.

> **Note:** Feel free to reference the arrays lesson, collaborate, google, etc.

## Setup & Instructions

Create a new HTML/CSS/JS repl on [repl.it](https://repl.it) for these exercises.

Title your repl **JS Looping over Arrays Lab**.

Copy the exercises below into the repl's **script.js** file and code away!

This lab is **a DELIVERABLE**. When completed, submit the link to your repl to your instructors.

You don't need to complete all of these, but <strong>you must complete at least 5 of these exercises.</strong> I would strongly encourage you to attempt as many as possible though.

## Exercise

```js

/*
If (conditions) and comparison Exercise 1:
  - declare two variables x and y, and set them to some numbers
  - write some code to do the following: if x is greater than y, console.log the word "greater". If x is equal to y, console.log the word "equal". If x < y, console.log the word "less".
*/

/*
If (conditions) and comparison Exercise 2:
  - Use the following code to prompt the user to type in a string, such as "hello", and save it into the variable userGuess 1
  - let userGuess1 = prompt("Hey, please input a feeling")
  - First, write some code to console.log the variable userGuess1 to verify that the variable contains what the user has typed in.
  - Second, write some code to do the following: if the user has typed in the word "happy" (ie., check the userGuess variable is equal to "happy"), console.log the word "yay". Otherwise, if the user has typed in the word "sad", console.log the phrase "sorry to hear that", Otherwise, if the user has typed in anything else at all, console.log the phrase "Not sure what that means sorry"
*/

/*
If (conditions) and comparison Exercise 3:
  - fix the bug in this code below, and copy paste your answer below, outside the comment.
let num1 = 5
let num2 = 6
if (num1 = num2) {
    console.log("num1 and num2 are the same")
} else if (num1 > num2) {
   console.log("num1 greater")
} else {
   console.log("num2 greater")
}
*/



/*
If (conditions) and comparison Exercise 4:
  - fix the bug in the code below, and copy-paste your answer outside the comment.
   let x = 1;
   let y = 2;
   if ( x < y ) {
        alert("x < y")
   } else ( y > x) {
        alert("y > x")
   }
*/



/*
If (conditions) and comparison Exercise 5:
  - Prompt the user to input a number and store their input in a variable called guessString1
  - Again, prompt the user to input a second number and store their input in a variable called guessString2. (prompts have to be done one at a time).
  - Now, convert each of these numbers to integers (hint: use parseInt), and store the converted values in variables guessNum1 and guessNum2.
  - console.log all 4 variables, the numbers, and the strings, to make sure the conversion is working.
  - Now, write some code to check if guessString1 is greater than guessString2. If it is, either alert or console.log the word "Greater!" otherwise "Equal!" if x is equal to y, otherwise alert "Less!" 
*/


/*
If (conditions) and comparison Exercise 6:
  - Using the random number generator code from yesterday's lab, Declare a variable randomNum2, and another variable randomNum3 that each hold a randomly-generated number from 1 to 10.
  - verify your code by using console.log("random number two is",randomNum2) and similar for randomNum3. (Or by putting this code into the javascript visualizer and stepping to the end of execution)
  - Now, write an if statement that will check whether the two numbers are the same. 
  - If they are, print to the console "these numbers are the same". If they aren't, print "they are not the same".
*/


/*
Logical Operators Exercise 1:
  - Declare a variable called wheels_are_working to store the boolean value true , and similarly, declare engine_is_working to store the boolean value false.
  - Will the expression wheels_are_working && engine_is_working evaluate to true or false?
  - Try it out by printing the expression to the console
*/
/*
Logical Operators Exercise 2:
  - Declare a variable called wheels_are_working to store the boolean value true , and similarly, declare engine_is_working to store the boolean value false.
  - Will the expression wheels_are_working || engine_is_working evaluate to true or false?
  - Try it out by printing this to the console
*/

/* Arrays Exercise 1:
  - Write some code to print out the first element of this array, and the second element of this array
*/
let myArray = [1, 3, 2, 5, 24, 6, 2]

/* Arrays Exercise 2:
  - This is a two-parter.
  - Declare an array of strings of your choosing. Put in at least 3-4 strings.
  - 1. Write some code to print out the length of the array.
  - 2. Write some code to print out the LAST element of the array, REGARDLESS of how many elements there are.
*/


/*
Loops Exercise 1: Printing arrays
  - Below, we've declared an array of numbers called "numbers" with the numbers 45, 13, 646, and 913
  - Using a "for of" loop, print to the console each individual element of the numbers array.
  - (hint: your loop block should probably use console.log to print out the current element as it loops through the array)
  - Note: although console.log(numbers) would print out the entire array, we want to see each individual element printed on separate lines
*/

// Complete Exercise below...

let numbers = [45, 13, 646, 913]

// Write your loop code here


/*
 Loops Exercise 2: compare all elements to 500 and print
  - Using a 'for of' loop, print out all elements in the numbers array that are greater than 500
  - (Hint: your loop block should probably contain an 'if-else' statement that checks if the current element is bigger than 500)
*/



/*
 Loops Exercise 3: compare all elements to 500 + save First
  - Declare a variable called firstOver500. Then, Using a 'for of' loop, inspect all the elements in the array, and save the first one that is greater than 500 (into your previously-declared variable), and then break out of the loop
  - (Hint: your loop block should probably contain an 'if-else' statement that checks if the current element is bigger than 500)
  - (Hint: your loop block should probably contain a `break` statement)
*/

/*
 Loops Exercise 4: compare all elements to 500 + save First ---- with find
  - Redo exercise 3 using a find statement instead of a `for of` loop
*/

/*
Loops Exercise 5: do we have soup?
  - Declare a new array called "foods" that contains an array of strings, and you get to decide whether to include the word soup.
  - Task: Declare a variable named hasSoup and set an initial value of false, and then loop through the array, and, if the foods array includes the string 'soup', set hasSoup to true
*/


/*
 Loops Exercise 6: do we have an "e"?
  - Declare these two variables below:
  - let secretWord = "spongebob"
  - let found = false;
  - Write a `for of` loop to determine if the secretWord string contains an "e" (Please don't use str.includes("e") or other pre-built methods)
  - if there is an "e" in the word, the variable found should be true. If there isn't, the variable found should be untouched.
  - Print the result to the console
*/
  
  
/*
 Final Loops Exercise: try something fun!
  - Declare an array of some kind - eg., an array of animals? an array of fruits? an array of arrays?
  - Think about some kind of operation you'd like to do on the array, and try to implement it using any of the loop structures we've learned.
*/

```


## Additional Resources

- [MDN Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
