# JS Fundamentals Lab

It's time for our first deliverable.

<img src="https://media.tenor.com/images/bb189e05ae620b39e13da787770921ba/tenor.gif">

This homework will give you practice with our primary learning objectives:
- variables: declaring and updating variables of various data types (String, Number, etc.)
- conditions: using conditions (if statements) and comparison operators (==) to compare two expressions
- using builtin functions console.log(), alert(), prompt()

You will also practice these secondary learning objectives:
- error handling
- using the course resources (recordings, #sei-errors, lecture notes, peers)

## Setup & How to Submit

Create a new HTML/CSS/JS repl on [repl.it](https://repl.it) for these exercises.

Title your repl **JS Fundamentals Lab**.

Copy the exercises below into the repl's **script.js** file and code away!

This lab is **a DELIVERABLE**. When completed, submit the link into our <a href="https://git.generalassemb.ly/sei-toronto/sei-40-deliverables">deliverables</a> repo.


## Quick note on Dealing with Errors

What do you do when your code is not working? Danny Beck, a GA instructor from California, has a great set of steps he calls <strong>MINE</strong>:

1. <strong>M(yself)</strong>: Read the error. Errors are our best friends and allies. Learn to love them, and understand their meaning. Ask yourself:
      - What is the error telling me? ReferenceError is something different from an AttributeError. Come up with a <strong>theory</strong>.
      - What could be the causes of this error message?
      - Is it a syntax issue? In that case, read the error carefully: <strong>which line number is broken?</strong>
      - Maybe it's a logic issue? In that case, have I used console.log() to verify the results of the previous steps?
      - Sometimes it's not working but there is no error. Walk through the code, 1 line at a time, and compare against your notes.
      - Also: Paste your code in the <a href="http://pythontutor.com/javascript.html#mode=edit">JS Visualizer</a> to debug!
2. <strong>I(nternet)</strong>: Google the error, or your task, click on multiple different links, see what other users are asking in the threads. Try rephrasing your search and repeat at least 3-5 times. 
3. <strong>(N)etwork</strong>: Post your code/screenshots on slack/stackoverlow/reddit, with an explanation of what you have tried/searched/found and to provide context.
4. <strong>(E)scalate</strong>: Bring the issue to a more experienced developer: a peer, a TA, and finally, an instructor. Ideally in that order.

Finally, once you figure it out, don't throw away the lesson. It is useful to keep an error diary. A lot of programming is simply knowing what each error means. Add any newly discovered errors (& fixes) to your error diary.

## Exercise

Answer each of the questions using the following format, in your repl.it
For conceptual questions, put in a comment as your answer

```js
/*
Variables Exercise 1:
  - declare a variable called result1 to hold the number 7
  - verify your code by using console.log("result1 is",result1), or by putting it into the javascript visualizer and stepping to the end
*/

// Exercise 1 has been completed for you

let result1 = 7

console.log('result 1 is', result1);

/*
Variables Exercise 2:
  - without changing result1 above, write some code below to update result1 to now hold the number 10 added to the previous value of result1
*/

// Complete Exercise 2 here...

/*
Variables Exercise 3:
  - There is a bug in the following code. Copy and paste it below, fix it, and then print each of the variables to the console:
let a = 7
let b = 8
let c = 9
let a = b + c
*/

// Complete Exercise 3 here...

/*
Variables Exercise 4:
  - what is the value of x, y, and z going to be after each line in the following operations? Write your answers as comments
let x = 1    // x will be 1, y doesn't exist yet, z doesn't exist yet
let y = 6    // x will be... you do the rest!
let z = 90
z = x + y
x = z + y
y = y + x + z
y += 1
*/

// Complete Exercise 4 here

/*
Variables Exercise 5:
  - Write an expression to multiply 10 with 5, and store the result in a variable called product. Display the result using alert(product), or console.log(product).
*/

// Complete Exercise 5 here. You know the drill..

/*
Data Types Exercise 1:
  - in javascript, what is the difference between the expression "7" versus 7, for example x = "7" vs x = 7? Write your answer as a comment. 
*/

/*
Data Types Exercise 2:
  - is let sentence = How are you? a valid javascript statement? why or why not? Write your answer as a comment.
*/

/*
Data Types Exercise 3:
  - "string" is an important datatype. Declare a variable called myString that will store a sentence of your choosing, eg., "My name is Alex". Print the variable myString to the console.
*/

/*
Data Types Exercise 4:
  - All strings have a .length property. Doing myString.length is evaluates to the length of the string, eg., 7 if there are 7 characters. Print the number of characters (length) of the variable myString to the console using the .length property.
*/

/*
Data Types Exercise 5:
  - All strings have a .includes() function. Eg., myString.includes("x") is an expression that will output true if "x" is in the string and false if not. Use the .includes function to print to the console whether myString contains the character x or not.
*/


/*
Data Types Exercise 6:
  - Declare two strings, "hello", and "world", store them in variables of your choosing, and then concatenate two strings. Alert the result "Hello World!".
*/

/*
Data Types Exercise 7:
  - Declare a variable called myNumber and store a number of your choosing into it. Now convert this into a string and store the converted string into a variable called myString. Print both variables to the console to verify.
*/

/*
Data Types Exercise 8:
  - Declare a variable called anotherString and make it hold the value "42" which is a string. Now, convert this number into a number and create a variable called anotherNumber to hold this number. Print both variables to the console to verify.
*/

/*
Expressions Exercise 1:
  - is 7+7 a javascript statement, or a javascript expression? why? Write your answer as a comment.
*/

/*
Expressions Exercise 2:
  - your instructor Aidan tells you that Math.floor(Math.random() * 10) + 1 is a magic js expression that generates a random number from 1 to 10. You're not sure if you trust Aidan, so you want to try this out! 
  - Declare a variable called randomNum1 that holds a random number from 1 to 10
  - Verify your code by using console.log("random number 1 is",randomNum1), or by putting it into the javascript visualizer and stepping to the end of execution
*/

/*
Expressions Exercise 3:
  - The prompt() command is a very fun built-in javascript function that allows you to send the user a request to type some information in, and the user can enter some input.
  - The input will be a string, even if they type in a number. Eg., if they type in a 7, it will be stored as a "7" 
  - The input can then be saved in a variable. Feel free to try it out. For example, do this below: let userGuess = prompt("Hey, please type in a number!")
  - console.log the userGuess variable to see what it contains
*/

/*
Expressions Exercise 4:
  - In the code above, knowing what you know about variables and expressions, which side is executed first: the "let userGuess" variable declaration? or the prompt("Hey, please type in a number!") ? Write your answer as a comment.
*/

/*
Errors Exercise 1:
  - try to generate a referenceError. comment out your code once you've succeeded.
*/

/*
Errors Exercise 2:
  - try to generate this error - SyntaxError: Identifier 'x' has already been declared. comment out your code once you've succeeded.
*/



```

# Congrats! You made it

Grab the repl.it link, and paste it into your deliverables file.


