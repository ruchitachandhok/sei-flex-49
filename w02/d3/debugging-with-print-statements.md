# Debugging Lab 1: Print


<summary>
<strong>True or False:</strong> Developers spend most of their time writing new code?
<details>
    <strong>FALSE</strong>. Actually, developers spend most of their time trying to understand & fix their code.
</details>
</summary>

As indicated by the chart below (created by Jeff Atwood, founder of stackOverflow) developers spend most of their time trying to understand what the heck their code is doing.

<img src="https://blog.codinghorror.com/content/images/uploads/2006/09/6a0120a85dcdae970b0120a86d7477970b-pi.png">

In this series of labs, we will explore two different but equally important debugging methods to help you figure out what the heck your code is actually doing:
- Lab 1: using console.log to print useful information
- Lab 2: using the debugger to follow what your code is doing

## Setup

1. In your local copy of the course repo, `cd` into the d5/labs/ folder and create a new folder called `debugging-lab`. You can do `mkdir debugging-lab` to do this via the terminal.
2. `cd` into the debugging-lab folder, and verify you're in the right folder by doing `pwd`
3. create a file called `index.html` and create a file called `script.js`. You can do this by doing `touch index.html` and `touch script.js` in the terminal
4. Open up the folder in VSCode, either by doing `code .` from the terminal or manually clicking on File menu -> "open folder"  within VSCode.
5. In your HTML file,  put in this boilerplate below:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <section>
        <h1 id="greeting1">Hello there</h1>
        <h1 id="greeting2">How are you?</h1>
    </section>

    <button id="btn1">Click me!</button>
    
    <script defer src="script.js"></script>
</body>
</html>
```
6. In your script.js file, it's always a good idea to throw in an alert("js file working") or console.log("js file working") to test that things are working. So in your script.js file, put in this line below: `console.log("js file working!")`
7. Open your index.html file with chrome, and open up the browser console to verify whther things are working. You should hopefully see something like this:

<img src="https://user-images.githubusercontent.com/24878576/119260419-adcd3380-bba0-11eb-85e3-24909bb6b304.png">

8. Notice the split-screen VSCode mode above, which is showing both the HTML file and the javascript file. When working with the DOM, it's typically good to be able to see your full javascript file, as well as the part of your HTML file containing your elements you're going to be changing, so you can quickly visually verify that your id's are correct, for example.
9. It's also good practice, in your browser window, (typically on another monitor) to always have the chrome console open so you can quickly spot errors.


# Task: Fixing a Broken Event Listener - using console.log messages

1. Replace the contents of your script.js file with the following broken code, which (in theory) does the following:
    - lines 5-6 selects our two h1 elements from the DOM + saves these in a variable in order to change them. 
    - line 2 selects our button element + saves it into a variable called `btnEl`, so that we can attach a "click" listener to it
    - line 9 attaches an event listener to our `btnEl`, so that our button, when it's clicked, will execute that function `myButtonWasClicked`
    - lines 11-14 is our function `myButtonWasClicked` which tries to change our two h1 elements's

```js
// First, select our button using its id "btn1" from the DOM, 2. save the element into a variable btnEl
let btnEl = document.getElementById('btn1')

// First, select the element having id="greeting1", 2. save the element into a variable called h1E1. Do the same for greeting2
let h1El = document.getElementById('greeting1')
let otherh1El = document.getElementById('greeting')

// Make our button listen for "click" event. 2. if a "click" ever happens, we specify that the myButtonWasClicked function will run.
btnEl.addEventListener("click", myButtonWasClicked)

function myButtonWasClicked() {
    h1El.innerHTML = "Goodbye" // change first greeting to "goodbye"
    otherh1El.innerHTML = "Nice knowing you" // change second greeting to "nice knowing you"
}
```

2. Click the button and you will find that something changes, but we also have an error. This is why having the console open is so important.
![image](https://user-images.githubusercontent.com/24878576/119261109-d276da80-bba3-11eb-9342-7195f3dc3220.png)

3. Let's analyze the error message using our <a href="../../../w01/d1/labs/js-basics-lab.md#quick-note-on-dealing-with-errors">MINE</a> methodology.
4. <strong>Task 1.1:</strong> Write a comment in your script.js file explaining your theory as to what is causing the error, and what line number the error is happening in. It doesn't matter if your theory is correct, but coming up with a theory is very important in debugging. Debugging is a very sherlock holmes-ian activity where you slowly eliminate from a list of suspects.
5. My theory is that something is broken in line 13, inside that myButtonWasClicked function. But I'm not sure what it could be. The line looks fine to me. Let's try to use console.log statements to help us debug this error. 
6. <strong>Task 1.2:</strong> After every single variable declaration, use `console.log` to print out the variable. This way, we can check out what values are stored inside every single variable and see whether they make any sense. You can also add in `console.log` statements in other important areas such as as the beginning and ending of functions. Make sure your console.log statements are preceeded by some kind of description, so that we don't get a bunch of log messages that we have no idea what they're referring to. It can also be nice to number your console.log statements so that when you're reading the console you have some idea of the order that things are happening. Your code, after this step, might look something like this:
<img src="https://user-images.githubusercontent.com/24878576/119262109-0eac3a00-bba8-11eb-83d4-0f9e09626ec9.png" width="500">

7. Refresh your browser. You perhaps see something like this now:
![image](https://user-images.githubusercontent.com/24878576/119262224-6f3b7700-bba8-11eb-962f-99b01daf8e03.png)

8. <strong>Task 1.3:</strong> Look carefully at the console messages. Do we have any clues yet as to what's going wrong? Write your answer as a comment in your script.js file. Try to answer this question before proceeding.

9. Now click on the button to trigger our myButtonWasClicked function to run. Hmm. What we see below is interesting. 

<img src="https://user-images.githubusercontent.com/24878576/119262804-8ed39f00-bbaa-11eb-9e6c-7ee78ce5df28.png">

10. <strong>Task 1.4:</strong> Are both of our console.log messages within our function running? What does this tell us about our function? Is the entire function successfully executing? Write your answer as a comment in your script.js file.

11. Actually, although the function is broken, that's not the root cause. It's just the effect. Perhaps you had notice there was an error happening even prior to clicking on the function:

![image](https://user-images.githubusercontent.com/24878576/119261835-2d5e0100-bba7-11eb-932a-cecd45439e33.png)

12. Looking at the console, we see some of our variables do contain what they are supposed to, BUT one of our variables contains a 'null' value.
13. <strong>Task 1.5:</strong> What element is our `otherh1El` value supposed to contain? Why do you suppose it's null? Write your answer as a comment in your script.js file. 
14. <strong>Task 1.6:</strong> Fix the bug. (Hint: the ID is wrong and doesn't match any existing ID's in our HTML)
15. <strong>Task 1.7:</strong> Reflection: Overall, do you think this was a good or bad approach to discovering this bug? Do you think you will be using this technique for your upcoming labs and projects?

..and that is how we can fix bugs with print statements.
The second part of this series of labs will have us use the debugger to step through some code in order to see what our loop is doing wrong.


## Submitting this lab

1. In order to submit this lab, please push your code to your fork of our repo. 
2. On your web browser, navigate to your fork of our repo (Eg., `http://git.generalassemb.ly/alex/sei-40`), and verify that the folder contains your code. Grab the link at the top
3. Put the link into your deliverables file the usual way you've been doing for repl.it links

