<img src="https://i.imgur.com/QBi5aLq.png">

# Guide on How to Build a Browser Game

## Intro

Getting started and knowing how to structure the code in an application is one of the most difficult things for students to figure out.

There might be plenty of sources available to learn about how to use a `forEach` loop, but finding help on how to think like a developer and write code to implement an app's features is difficult at best.

Luckily, you've come to the right place!

In SEI, it's not just about learning how to use languages, libraries and frameworks - it's also about learning how to organize and structure code to implement the features of a web app.

This guide will help you with:

- How to start a project, and
- How to organize/structure your code, in other words, how to "architect" your app.

## Client-Side MVC Architectural Approach

**Model-View-Controller (MVC)** is a popular software architectural pattern that is used to organize code in both client and server applications. The idea is to separate:

1. the UI code <strong>(view)</strong> such as ```<button>```s and ```<input>```s, and
2. the actual state of the game <strong>(model)</strong> such as the current high score, the current secret word, or the current number of players - ie., your variables, and
3. the code that connects the variables with the UI <strong>(controller)</strong> - eg., event listener code. When an event occurs, e.g., the user clicks the correct button, the Controller: <br> - Updates the variables (state) -- for example, ```currentScore += 1```, and<br>- Updates the View (DOM), using the data contained in the Model variables (state) --- for example, set the highscore visually from the highscore variable: ```div3.innerHTML = currentScore```

## Overall Application Flow

Let's see how we might apply the MVC pattern when writing a browser app such as a game. 

The following diagram denotes one approach to structuring your code:

<img src="https://i.imgur.com/jayaYY2.png">

#### Key Points & Best Practices

- **Use constants** instead of literal values to improve code readability and maintenance. For example, let's say you wanted to limit the number of guesses in a game to a certain number.<br>You could write code like this:

	```js
	let lose = numGuesses > 5;
	```
	However, code like the following which would be more maintainable because you probably will need to use the maximum guesses value in more than one section of code:
	
	```js
	let lose = numGuesses > MAX_GUESSES;
	```

- **Store state in separate variables, or arrays, or objects**. For example, if you need to track info for two players, you can use several variables like `player1name`, `player2name`, `player1score`, `player2score`, etc., or an array of score where index 0 represents player one's score and index 1 represents player two's score like ```let scores=[0,0]```, or consider using an object like:

	```js
	const players = {
		'1': {
			name: '',
			score: 0
		},
		'-1': {
			name: '',
			score: 0
		}
	};
	```
	
	Try to make your code concise, and make it easier to implement certain features such as persisting the state of a game.

- **Don't store state data that can be computed** as needed from other data - this avoids the risk of data becoming out of sync or inconsistent. For example, in Tic-Tac-Toe, it's not necessary to track the number of moves to determine if there's a tie game - the variable used to track the state of the board can already provide this info.

- If your code needs to access a DOM element more than once during runtime - **cache** it (save it in a variable).

- **The `render()` function's responsibility is to transfer all state to the DOM (ie., update your UI from your variables)**.  This includes the hiding/showing of parts of the UI based upon the application's state.  For example, when a hand is in play in a game of Blackjack, the `render()` function would show the hit/stand buttons and hide the betting-related buttons. Also, if the `render()` function becomes too large, you can break it up into smaller functions, e.g., `renderScores()`, 

- The overreaching principle to keep in mind is...<br>**In response to user interaction**:
	1. **Update all state impacted by the interaction**, then
	2. **Update the DOM by calling `render()`**.

## Suggested Steps to Get Started

The following approach has been proven to help students write complex front-end web apps, such as games.

If you're concerned that using the following approach will result in you and your fellow students having code that is structured similarly - don't be!  **What matters is what prospective employers think when they look at your projects's code structure in GitHub!**

1. **Analyze the app's functionality**
	- The app's features, from the user's point of view, should be described using _User Stories_.  User stories follow this template: **As a [role], I want [feature] because [reason]**.  Example user story: _As a player, I want to see a list of high-scores so that I know what I have to score to make the list_.

2. **Think about the overall design (look & feel) of the app**
	- Take the users (audience) of the app into consideration.
	- Should the app have a clean/minimalist UI (current trend),  or should it be themed to match the app's purpose?

3. **Wireframe the UI**
	- Wireframes provide a blueprint for the HTML & CSS. 
	- Wireframes also help reveal an application's data (state) and functionality.

4. **Pseudocode**
	- Some of the app's features may need to be pseudocoded, that is, outlining the app's logic in a plain, informal way.
	- Pseudocode the app's **overall** functionality first.
	- More detailed pseudocode for a given feature may be required later.

5. **Analyze the application's state (data)**
	- What does the application need to "remember" throughout its execution?
	- Use the wireframe(s), user stories and pseudocode to help determine what state needs to be tracked.
	- Note that in an application with a database, we would analyze the database design during this step.

6. **Set up the project**
	- Create project directory OUTSIDE of any existing git repo (nested repos cause problems).
	- Create the starting project files. Here's a possible structure:
		- **index.html**
		- **css/main.css**
		- **js/main.js**
	- Create the HTML boilerplate within **index.html**.
	- Link **main.css** in the `<head>`.
	- Loading **main.js** just above the closing `</body>` tag ensures that the DOM is ready before the script runs. Alternatively, if you want to put the script tag in the `<head>`, add a `defer` attribute as follows:<br>
`<script defer src="js/main.js">`<br>Be sure to load libraries such as jQuery before the app's scripts.

7. **Create a local repo**
	- `$ git init`
	- Create a remote repo in your GitHub account then follow the instructions that GitHub provides to add a remote to link your local repo to GitHub.
	- It is recommended that the name of the repo and the project directory match.

8. **Organize the app's JS into sections**

	- Adding comments such as the following will help you organize your app's code:
	<br>`/*----- constants -----*/`
	<br>`/*----- app's state (variables) -----*/`
	<br>`/*----- cached element references -----*/`
	<br>`/*----- event listeners -----*/`
	<br>`/*----- functions -----*/`

9. **Code away!**
	- Iterating between adding HTML, CSS & JS is one approach.
	- Start with some markup for the basic layout of the UI.
	- Declare, but don't initialize, the application-wide variables (state). The initialization of the variables to their "start-up" state should be done within an `initialize`, or similarly named function, i.e., `init`, `reset`, etc.
	- Write that `initialize` function.
	- Invoke `initialize()` to "kick off" the app.
	- Next stub up a `render` function.  Be sure to call `render` after state has been updated in event handlers, the `initialize` function, etc. 
	- Register event listeners - browser apps are typically _event-driven_.
	- If you have user stories, code them in a logical order.


10. **More recommendations for interactive browser app's, such as games**
	- Create a main `render` function that is responsible for rendering the state of the app to the DOM.
	- If the `render` function becomes lengthy, add additional rendering oriented functions, for example:
	
	```js
	function render() {
		renderHands();
		renderControls();
		if (winner) {
			renderWinnerMessage();
		} else {
			renderTurnMessage();
		}
	}
	```
	- Avoid accessing the DOM from outside render-oriented functions. However, "eye candy" animations, a ticking time display, etc. are exceptions to this tip.
	- **Data (state) is the single source of truth of the app** - when implementing an app's logic, the DOM is secondary to data manipulation. **Get used to thinking about how to your app's data changes vs. the display.**
	- As the user interacts with the application (or other events such as timers trigger), code the app such that it:
		- Updates state, then...
		- Calls `render()`

11. **Make frequent git commits of working code**
	- At a minimum, commit each "milestone" or feature implementation.

12. **Experiment and refactor code as necessary**

13. **Have fun!**