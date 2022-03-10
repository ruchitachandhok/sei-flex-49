![](https://i.imgur.com/hGEeDR1.png)

# JavaScript Functions Lab

## Introduction

This lab provides an opportunity to practice defining and coding some real-world functions. Function expressions are covered in the notes, but function declarations can be used instead if you feel more comfortable.

> **Note:** Feel free to work in pairs to complete this lab. Also, Google/StackOverflow is a good friend to have around...

## Exercise

#### Setup & Instructions

Create a new HTML/CSS/JS repl in [repl.it](https://repl.it) for these exercises.

Title your repl **JS Function Lab**.

This lab is **a deliverable**.

#### Requirements

# Complete at least 13
 of the exercises on this markdown. You may do more, and you may choose which 13. I recommend going from top to bottom, easier to harder.

Be sure to number each function with a comment above it.

# Part I. Defining and calling functions & return

1. <strong>(Concept: Calling a function that has already been defined.)</strong><br> The following function definition defines a function called `getRandomNumber()`. Your task is to first, copy this function and then <strong>call</strong> this function. Store the result of this function call in a variable called result1. Print out the result. Secondly, <strong>call</strong> this function again, and this time store the result of this function call in a variable called result2. Print out the result.

```js
function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

```

2. <strong>(Concept: Calling a function that has already been defined.)</strong><br> Below we are defining a function that returns the date. Right below that, we are calling this function two times, but we have made a mistake while calling the function the first time. What's the mistake? Fix it.

```js
function getDate() {
  let date = new Date()
  let dateAsString = date.toLocaleString()
  return dateAsString
}
		
let result3 = getDate
console.log(result3)
let result4 = getDate()
console.log(result4)
```
  
3. <strong>(Concept: Defining a function)</strong><br> Below we are defining a function to get the current time. After that, we are calling this function two times, and storing the results in variables. But this is failing due to a mistake while defining the function. What's the mistake? Fix it. (Hint: the function is calculating the time correctly but then it's not doing much with that time variable. What's missing?)

```js
function getTime() {
  let time = (new Date().toLocaleTimeString())
  
  // insert missing line below
}

let result5 = getTime()
console.log(result5)
let result6 = getTime()
console.log(result6)
```

4. <strong>(Concept: Functions are not executed until called.)</strong><br>If we run the program below, in what order will the 5 console.log statements be executed? Write down your theory as a js comment BEFORE you verify your theory by running your code. Then, verify your theory by running the code, and also by trying it in the <a href="http://pythontutor.com/javascript.html#mode=edit">js visualizer</a>. Or the <a href="https://developer.chrome.com/docs/devtools/javascript/#sources-ui">chrome debugger</a>. Was your theory correct?

```js
function getAnotherRandomNumber() {
  let rand = Math.floor(Math.random() * 100)
  console.log("Javascript is calculating stuff inside the function now...")
  return rand
}

console.log("Let's get a random number...!")
let answer = getAnotherRandomNumber()
console.log("Let's get another random number again...!")
let answer2 = getAnotherRandomNumber()
console.log("The first number is..." + answer)
console.log("The second number is...", answer2)
```

5. <strong>(Concept:Define a function).</strong><br> Now you will define a function. First, define a function called `getName` that will return your name as a string. Secondly, call this function at least two times, and print out the result both times. If your code doesn't work, try it in the <a href="http://pythontutor.com/javascript.html#mode=edit">js visualizer</a> to help you debug it, or <a href="https://developer.chrome.com/docs/devtools/javascript/#sources-ui">the chrome debugger</a>.

6. <strong>(Concept: Defining a function containing an if statement).</strong><br> Let's define a more interesting function. First, Define a function called `guessMyName`. Your function should include the following code:
	- In your function, write some code to `prompt` the user to guess your name and save their guess in a variable called `userGuess`
	- Still inside your function, write an if statement to verify if the userGuess variable is equal to your name or not. If it is, return the word "you got it!". If isn't equal, return a phrase offering some negative feedback to your user (Eg.,"Booo!!"). 
	- Now, outside your function, in global scope, call this function at least 2 times. 
	- When you're done, you can comment out the code once you're done the exercise so it doesn't keep prompting you as you work on the next one.

Congrats! You understand how to use functions that don't have parameters. We will be looking at functions with parameters now below.

# Part II: functions with parameters

1. <strong>(Concept: Calling a function that has already been defined.)</strong><br> The following function definition defines a function called `pokemon_contains` that will tell you if a single `incoming_letter` passed into this function exists in the word "pokemon". This function returns a <strong>boolean</strong> (ie., True or False). Your task is to first, copy this function and then <strong>call</strong> this function by passing in the letter "k". Store the result of this function call in a variable called result1. Print out the result. Secondly, <strong>call</strong> this function by passing in the letter "o". Store the result of this function call in a variable called result2. Print out the result.

```js
function pokemonContains(incomingLetter) {
  if ("pokemon".includes(incomingLetter)) {
    return true;
  } else {
    return false;
  }
}
```

2. <strong>(Concept: Calling a function that has already been defined.)</strong><br> Below we are defining a function to sum two numbers. Right below that, we are calling this function two times, but we have made a mistake while calling the function the first time. What's the mistake? Fix it.

```js
function sumTwo(a,b) {
  let answer = a + b
  return answer
}
		
let result3 = sumTwo(a,b)
console.log(result3)
let result4 = sumTwo(5,6)
console.log(result4)
```
  
3. <strong>(Concept: Defining a function)</strong><br> Below we are defining a function to multiply two numbers. After that, we are calling this function two times, and storing the results in variables. But this is failing due to a mistake (actually, two) while defining the function. What's the mistake? Fix it.

```js
function multiply(num1,num2) {
  let answer = a*b
}

let result5 = multiply(10,10)
console.log(result5)
let result6 = multiply(5,6)
console.log(result6)
```

4. <strong>(Concept: Functions are not executed until called.)</strong><br>If we run the program below, in what order will the 5 console.log statements be executed? Write down your theory as a js comment, and then verify your theory by running your code, and also by trying it in the <a href="http://pythontutor.com/javascript.html#mode=edit">js visualizer</a>. Was your theory correct?

```js
function multiplication(a,b) {
  let myAnswer = a*b
  console.log("Calculating...")
  return myAnswer
}

console.log("Let's Multiply stuff...")
let answer = multiplication(5,6)
console.log("Let's Multiply more stuff...")
let answer2 = multiplication(5,6)
console.log("The answer is..." + answer)
console.log("The answer is...", answer2)
```

5. <strong>(Concept:Define a function).</strong><br> First, define a function called `subtract` that accepts two parameters and will subtract the second parameter from the first. Secondly, call this function at least two times and plug in various numbers, and print out the result both times. If your code doesn't work, try it in the <a href="http://pythontutor.com/javascript.html#mode=edit">js visualizer</a> to help you debug it.

6. <strong>(Concept: Defining a function).</strong><br> First, Define a function called `greaterThan5` that accepts one parameter will return true if the incoming input is greater than 5, and returns false if the incoming is less than or equal to 5. Secondly, call this function at least 3 times and print out the result of each call separately.


# Part III: Harder questions

#### Part 3 requirements
Define the functions below either as a function expression or declaration. After each function, call it **at least once** and `console.log` the results.

1. Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.

2. Define a function, as a function declaration, `maxOfThree` that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.


# Part IV (Optional/Bonus) as we haven't done arrays or loops yet

1. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.

2. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.

3. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.

4. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

5. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the length of the longest string.

6. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.



Hungry for more? Get a head start on our <a href="../../../README.md#8-daily-code-challenges">daily coding challenges</a>.. which we're required to complete by the end of the course!

## Additional Resources

- [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
