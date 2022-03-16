# Loops Lab Pt. 2: Counting things, and Summing things

By now, you know the drill! Open up a new repl.it, and write some javascript code to complete the following tasks.If you get stuck, please leave comments so we can give you part credit.

# Exercises

**Exercise 1: Counting strings**

1. Declare an array containing the following foods, including duplicates (remembering to declare them as strings): pizza, cheese, broccoli, pizza, pizza, spinach, artichokes, pizza, water, coke
2. Write a `for of` loop that will count the number of times pizza appears in the array. 
3. (Hint: declare a counter variable before the loop, check each item to see if it is equal to "pizza", and increment the counter every time the check passes)
4. Print out the final result to the console

**Exercise 2: Counting 7s**

1. Imagine that you are writing code for a casino slot machine program, and at the moment, the user sees the following result, given by this array: `let slots = [7, "apple", "winner", 7] `
2. Write a `for of` loop that will count the number of times 7 appears in the array. 
3. (Hint: declare a counter variable before the loop, check each item to see if it is equal to 7, and increment the counter every time the check passes)
4. Print out the final result to the console
5. Outside of the loop, write some code such that, if the number of 7's is 4, print out the word "jackpot!" (you can modify your slots array to 7,7,7,7 to see if this works)

**Exercise 3: Summing things** 

1. Declare an array of numbers representing the prices of the last 10 things you bought, eg., `let purchases=[12, 34, 13, 500, 610, 13,]`. 
2. Use a `for of` loop to calculate the sum of all the numbers in the array. 
3. (Hint: declare a sum variable before the loop, and add the current element to it)
4. Print out the sum to the console

**Exercise 4: Calculating the Product**
1. Using the same prices array as above, use another `for of` loop to calculate the product of all the numbers in the array. (Hint: declare a product variable before the loop)
2. Print out the product to the console.

**Exercise 5 (optional) (challenging) **
1. Redo exercises 3 and 4 using the `reduce` array iterator method.

