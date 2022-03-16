<img src="https://i.imgur.com/sA6iEbw.jpg">

# JavaScript Looping over Arrays Lab

## Introduction

This lab provides an opportunity to practice basic array operations, and looping over arrays.

This lab is **a DELIVERABLE**. 

> **Note:** Feel free to reference the lecture notes, the london textbook, mdn, w3schools, udemy, google, etc. Loops are hard!

## Setup & Instructions

1. Create a new folder in your fork called "loops1".
2. In this folder, create a file called index.html and a file called script.js
3. Link your index.html file to your script.js file and test it with an alert.
4. When completed, push the folder to your fork, and grab the link to this folder by navigating to your fork via web browser. 
5. Submit the link to your deliverables file.

You don't need to complete all of these, but <strong>you must complete at least 10 of these exercises.</strong> I would strongly encourage you to attempt as many as possible though.

## Part 0: Two exercises on Basic array operations

For Part 0 and Part 1, copy the exercises below into the **script.js** file and code away!

```js

/* Arrays Exercise 1:
  - Write some basic code to print out the FIRST element of this array, and the SECOND element of this array
*/
let myArray = [1, 3, 2, 5, 24, 6, 2]

/* Arrays Exercise 2:
  - This is a two-parter.
  - Declare an array of strings of your choosing. Put in at least 3-4 strings.
  - 1. Write some code to print out the length of the array.
  - 2. Write some code to print out the LAST element of the array, REGARDLESS of how many elements there are.
*/

/* Arrays Exercise 3: Insert and delete
  - 1. Use the .push() array method to insert another number into 'myArray' above, and print out the resulting array
  - 2. Use the .slice() method to remove the first number, and print out the resulting array. (Slice is confusing as it does several things although in practice it's more often used just to delete an item from an array. You can find help <a href="https://www.w3schools.com/jsref/jsref_splice.asp">here</a> and <a href="https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/">here</a>
*/
```

## Part 1: Five Exercises on Basic while loops, and Finding things within an array

**Beginner Loops Tip 1**: It can be helpful to use a pen and paper to draw a diagram depicting the loop condition prior to coding, like this diagram depicting how to write a loop that keeps printing the numbers from 0 to 5:

<img src="https://media.git.generalassemb.ly/user/29550/files/f94c3600-a554-11ec-9aec-437a53428d0a">

**Beginner Loops Tip 2**: It can also be helpful to use a pen and paper to write out a "trace table" for the loop and write out each of the values of each variable **per iteration**.

![image](https://user-images.githubusercontent.com/24878576/158700886-2053cb49-62b1-4428-b209-2ff916a4ec0e.png)


```js

/*
Loops Exercise 1: Printing arrays
  - Below, we've declared an array of numbers called "numbers" with the numbers 45, 13, 646, and 913
  - Using a "while" loop, print to the console each INDIVIDUAL element of the numbers array, one per line.
  - (hint: your loop block should probably use console.log to print out the current element as it loops through the array)
  - Note: although console.log(numbers) would print out the entire array, we want to see each individual element printed on separate lines
*/

// Complete Exercise below...

let numbers = [45, 13, 646, 913]

// Write your loop code here


/*
 Loops Exercise 2: compare all elements to 500 and print
  - Using a 'while' loop, print out all elements in the numbers array that are greater than 500
  - (Hint: your loop block should probably contain an 'if-else' statement that checks if the current element is bigger than 500)
*/



/*
 Loops Exercise 3: compare all elements to 500 + save First
  - Declare a variable called firstOver500. Then, Using a 'while' loop, iterate over all the elements in the numbers array, and stop iterating when you find the first number that is greater than 500. Save this number into your previously-declared variable, and then break out of the loop
  - (Hint: your loop block should probably contain an 'if-else' statement that checks if the current element is bigger than 500)
  - (Hint: your loop block should probably contain a `break` statement)
*/

/*
Loops Exercise 4: do we have soup?
  - Declare a new array called "foods" that contains an array of strings, and you get to decide whether to include the word soup.
  - Task: Declare a variable named hasSoup and set an initial value of false, and then loop through the array, and, if the foods array includes the string 'soup', set hasSoup to true. Once finished looping, log the value of hasSoup.
*/


/*
 Loops Exercise 5: do we have an "e"?
  - Declare these two variables below:
  - let secretWord = "spongebob"
  - let found = false;
  - Write a `while` loop to determine if the secretWord string contains an "e" (Please don't use str.includes("e") or other pre-built methods)
  - if there is an "e" in the word, the variable found should be true. If there isn't, the variable found should be untouched.
  - Print the result to the console
*/
  
  
```

# Loops Lab Pt. 2: Five exercises on Counting things, and Summing things

In the same vein as above, complete the following exercises, which involve more very common operations on arrays using loops.

**Exercise 2.1: Counting strings**

1. Declare an array containing the following foods, including duplicates (remembering to declare them as strings): pizza, cheese, broccoli, pizza, pizza, spinach, artichokes, pizza, water, coke
2. Write a `while` loop that will count the number of times pizza appears in the array. 
3. (Hint: declare a counter variable before the loop, check each item to see if it is equal to "pizza", and increment the counter every time the check passes)
4. Print out the final result to the console

**Exercise 2.2: Counting 7s**

1. Imagine that you are writing code for a casino slot machine program, and at the moment, the user sees the following result, given by this array: `let slots = [7, "apple", "winner", 7] `
2. Write a `while` loop that will count the number of times 7 appears in the array. 
3. (Hint: declare a counter variable before the loop, check each item to see if it is equal to 7, and increment the counter every time the check passes)
4. Print out the final result to the console
5. Outside of the loop, write some code such that, if the number of 7's is 4, print out the word "jackpot!" (you can modify your slots array to 7,7,7,7 to see if this works)

**Exercise 2.3: Summing things** 

1. Declare an array of numbers representing the prices of the last 10 things you bought, eg., `let purchases=[12, 34, 13, 500, 610, 13,]`. 
2. Use a `while` loop to calculate the sum of all the numbers in the array. 
3. (Hint: declare a sum variable before the loop, and add the current element to it)
4. Print out the sum to the console

**Exercise 2.4: Calculating the Product**
1. Using the same prices array as above, use another `while` loop to calculate the product of all the numbers in the array. (Hint: declare a product variable before the loop)
2. Print out the product to the console.

## Part 3: Trace tables

# Do at least one of the following.
### You may do more but one is required.

These below are exercises on "Trace tables" and helping you figure out "what the heck is the following code doing?"

For each of the following code (pseudocode), determine the final values of i, j, n, and any other variables in each exercise. In order to do this, write out a trace table (as a js comment) such as below in order to point out the values of i,j,n (or any other variables) PER iteration of the loop:

![image](https://user-images.githubusercontent.com/24878576/158700886-2053cb49-62b1-4428-b209-2ff916a4ec0e.png) 

```js
3.1. int i = 0, j = 10, n = 0;

while (i < j) {

i++;
j--;
n++;
}

--

3.2. int i = 0, j = 0, n = 0;

while (i < 10) {

i++;
n = n + i + j;
j++;
}

--

3.3. int i = 10, j = 0, n = 0;

while (i > 0) {

i--;
j++;
n = n + i - j;
}

--

3.4. int i = 0, j = 10, n = 0;

while (i != j) {

i = i + 2;
j = j - 2;
n++;
}

--

3.5. int i = 3, j = 4, n = 0;

while (i != 0) {

n += j;
i--;
}
```

## Part 4: totally optional stuff

**Loops Exercise 3.1: try something fun! (optional) **
1. Declare an array of some kind - eg., an array of animals? an array of fruits? an array of arrays?
2. Think about some kind of operation you'd like to do on the array, and try to implement it using any of the loop structures we've learned.

**Exercise 3 (optional) (challenging) **
1. Redo exercises 2.3 and 2.4 using the `reduce` array iterator method. We'll be studying this in more detail next week.



## Additional Resources

- [MDN Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
