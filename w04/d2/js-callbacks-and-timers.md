<img src="https://i.imgur.com/uizE4Zt.png" height="500">

# JavaScript Callback Functions

| Learning Objectives - SWBAT: |
| :--- |
| Use Anonymous & Named Functions as Callbacks |
| Use Callbacks with Array Iterator Methods |
| Use Callbacks with Asynchronous Operations |

## Roadmap
1. Setup
2. What's a Callback Function?
3. Why are Callbacks Needed?
4. Using Callbacks with Array Iterator Methods 
5. Using Callbacks with Asynchronous Functions
6. Essential Questions
7. Further Study

### 1. Setup

Create a new HTML, CSS, JS Repl and name it **Callback Functions**.

### 2. What's a Callback Function?

- **Callback functions** are not a new type of function, they are defined just like any other function (as a declaration, expression or arrow function).

- **A callback function, is a function being passed to another function as an argument.**

	> DEV VOCAB:  In programming, a function that accepts a function as input and/or returns a function is known as a **_higher-order function_**.

- Typically, the higher-order function accepts a callback for the purpose of invoking it at least once.

- Because you've already used the array `forEach` method which accepts a function as an argument, you've already passed callback functions!

- Although using **anonymous functions** as callbacks is convenient, it's not uncommon to use a **named function** for code organization, for example:

	```js
	document.getElementById('todo-container')
	  .addEventListener('click', handleTodoClick);
	```
	Or when the callback might be called from more than just one point in the code, for example:
	
	```js
	/*-- Event Listeners --*/
	document.getElementById('replay-btn').addEventListener('click', init);
	
	/*-- Functions --*/
	init();
	
	function init() {
	  // Initialize state and call render
	}
	```

- **Be careful not to invoke the callback when passing it** - in other words, do not put parens after it! Otherwise, you'll be passing the result returned by that function instead of the function itself.

##### REVIEW QUESTIONS - What are Callback Functions?

```js
const colors = ['red', 'green', 'blue'];
	
colors.forEach(function(color, idx) {
  console.log(`${idx + 1} - ${color}`);
});
```

**Based upon the above code, answer the following:**
	
❓ What part of the code is the callback function?
	
❓ How many times will the higher-order function, `forEach`, invoke the callback?

### 3. Why are Callbacks Needed?

There are two scenarios that require the use of callbacks:

1. As you've already seen, functions/methods like `forEach` & `addEventListener` can only fulfill their purpose if they are provided a block of code - and callback functions provide that block of code.

2. As we'll see later in this lesson, JavaScript requires certain operations to execute _asynchronously_, that is, certain functions have to run in the "background" while the rest of the program continues to execute. These asynchronous operations are often designed to accept a callback function that's invoked when the background operation has completed.

	> NOTE: JavaScript's asynchronous programming model is one of the more challenging concepts, so don't despair if it takes a bit of time to understand.

### 4. Using Callbacks with Asynchronous Functions

To understand what "asynchronous" code means, let's first confirm what **synchronous** code is.

#### Synchronous Code Execution

So far, we've taken for granted that the code we write runs line by line and if we call a function/method, it finishes before the next line of code runs, i.e., it executes synchronously.

For example:

```js
const colors = ['red', 'green', 'blue'];

console.log('Code BEFORE the forEach...');

colors.forEach(function(color, idx) {
  console.log(`${idx + 1} - ${color}`);
});

console.log('Code AFTER the forEach...');
```
Running the above results in this expected output:

```
Code BEFORE the forEach...
1 - red
2 - green
3 - blue
Code AFTER the forEach...
```

#### Asynchronous Code Execution

By design, certain functions/methods in JavaScript run **asynchronously**.

When we invoke one of these asynchronous operations, they start doing their business in the "background" while the rest of the code continues to run.

For example, let's take a look at JavaScript's `setTimeout` & `setInterval` functions which, when called, wait in the background until the appropriate time to call the provided callback:

```js
const colors = ['red', 'green', 'blue'];

console.log('Code BEFORE the forEach...');

// setTimeout accepts a callback & how long to wait before calling the cb
setTimeout(function() {
  colors.forEach(function(color, idx) {
    console.log(`${idx + 1} - ${color}`);
  });
}, 1000);  // 1000 milliseconds (1 sec)

console.log('Code AFTER the forEach...');
```

Running the above results in different output than the synchronous version:

```
Code BEFORE the forEach...
Code AFTER the forEach...
1 - red
2 - green
3 - blue
```

##### Why do Asynchronous Functions exist?

Asynchronous functions exists in JS for two reasons:

1. **By Design:**

	The `setTimeout` & `setInterval` allow us to run code after a certain amount of time expires (repeatedly as in the case of `setInterval`).  Meanwhile, we want the rest of the program to continue to run, handle events, update the DOM, etc.
	
	Another example is the browser's event system.  As we've seen, calling `addEventListener` starts listening for a certain event in the background while the rest of the program continues to execute.

2. **For Efficiency/Performance:**

	One day, we'll be calling functions to fetch data across the Internet or from a database.  In computer terms, these operations take a crazy long time to complete - that's why they are known as **long-running operations**.  To avoid wasting valuable CPU cycles waiting for a long-running operation to finish, they are designed as asynchronous operations so that the rest of the program can do its thing.

## 6. Essential Questions

1. **True or False:  Callback functions are defined differently than non-callback functions.**

2. **If asked in a job interview, "What's a callback function?" - what would a good answer be?**

3. **Is the following code likely to work as expected?**

	```js
	document.getElementById('items')
	  .addEventListener('click', handleClick());
	```

4. **True or False:  The `addEventListener` method is a _higher-order function_.**


## 7. Further Study

##### Using Callbacks to Work with Asynchronous Code

JavaScript provides two approaches to run a function **after** an asynchronous operation completes its long-running process or when an event such as a timeout occurs:

- **Callbacks**, and
- **Promises**

Which approach is determined by the function/method itself.  For example, `forEach` & `setTimeout` require callbacks.

Later in the course, we'll encounter functions/methods designed to use promises, or even both!

##### An Asynchronous Example

The code below demonstrates how `setTimeout` and callback functions can be used to implement the scenario where we need to do something, wait for some time, do something else, wait for some time, etc.

Let's say we wanted a traffic light to cycle between Red, Green & Yellow lights with each light being "lit" for a differing amount of time:

- Red light on for 3 seconds
- Green light on for 2 seconds
- Yellow light on for 1 second

First, let's copy/paste the HTML into **index.html**:

```html
<body>
  <!-- add the following HTML -->
  <main>
    <div id="red"></div>
    <div id="yellow"></div>
    <div id="green"></div>
  </main>
```

Now for some CSS:

```css
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

main {
  display: grid;
  grid-template-columns: 20vmin;
  grid-template-rows: repeat(3, 20vmin);
  border: 2px solid grey;
}

main div {
  margin: 2vmin;
  border-radius: 50%;
  border: 2px solid grey;
}
```

> REMINDER: Expect the following asynchronous code to be difficult to understand.  However, the following example will come in handy if you choose to do a game like _Simon_ that requires timing/sequencing.

For the JavaScript, let's start by defining a flexible data structure that makes it easy to modify the functionality (color and time):

```js
// Using a data-centric approach minimizes code and increases flexibility
const lightSequence = [
  {color: 'red', time: 3000},
  {color: 'green', time: 2000},
  {color: 'yellow', time: 1000}
];
```

Next, cache the light `<div>`s and define a variable to track the current light:

```js
// Cache the divs for the lights
const lightEls = document.querySelectorAll('main > div');

// Variable to track the current light
let curLightIdx = 0;  // Start with red object
```

Now for the function responsible for displaying the current light and letting its caller know when the time has expired for the light:

```js
function renderLight(cb) {
  // Turn all lights off
  lightEls.forEach(el => el.style.backgroundColor = 'black');
  lightEls[curLightIdx].style.backgroundColor = lightSequence[curLightIdx].color;
  // Invoke the callback when this light's time has expired
  setTimeout(cb, lightSequence[curLightIdx].time);
}
```

Finally, a function that increments the `curLightIdx` and calls `renderLight` while passing itself as a callback:

```js
function renderNextLight() {
  renderLight(renderNextLight);
  // Increment and reset to zero when 3 is reached
  curLightIdx = ++curLightIdx % 3;
}

// Make it start!
renderNextLight();
```

Very cool!

Let's wrap up with some questions!

# Further further study

### The Browser's Event Loop

Here's a great video on how asynchronous operations, such as the handling of events, do their business and notify JavaScript when their work is done.

<a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ">An explanation of the event loop</a>

[The Event Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0) (in this video, the amazing and funny Jake Archibald from Google does an amazing job demonstrating the browser's event loop).
