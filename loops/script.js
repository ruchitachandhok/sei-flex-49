//alert("hi")

/* Arrays Exercise 1:
  - Write some basic code to print out the FIRST element of this array, and the SECOND element of this array
*/
let myArray = [1, 3, 2, 5, 24, 6, 2]
console.log (i=myArray[0], i=myArray[1]);

/* Arrays Exercise 2:
  - This is a two-parter.
  - Declare an array of strings of your choosing. Put in at least 3-4 strings.
  - 1. Write some code to print out the length of the array.
  - 2. Write some code to print out the LAST element of the array, REGARDLESS of how many elements there are.
*/
let ruchitaarray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log("My Array length is " , ruchitaarray.length);
console.log(i=ruchitaarray[4]);

/* Arrays Exercise 3: Insert and delete
  - 1. Use the .push() array method to insert another number into 'myArray' above, and print out the resulting array
  - 2. Use the .splice() method to remove the first number, and print out the resulting array. (Splice is confusing as it does several things although in practice it's more often used just to delete an item from an array. You can find help <a href="https://www.w3schools.com/jsref/jsref_splice.asp">here</a> and <a href="https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/">here</a>
*/
myArray.push(22, 8);
console.log (myArray); //printing out the result of the array.

//----------------------------------------------------------------
/*
Loops Exercise 1: Printing arrays
  - Below, we've declared an array of numbers called "numbers" with the numbers 45, 13, 646, and 913
  - Using a "while" loop, print to the console each INDIVIDUAL element of the numbers array, one per line.
  - (hint: your loop block should probably use console.log to print out the current element as it loops through the array)
  - Note: although console.log(numbers) would print out the entire array, we want to see each individual element printed on separate lines
*/

// Complete Exercise below...

let numbers = [45, 13, 646, 913]
//Answer Loop Exercise 1:
// while (numbers.length){
//   var x = numbers.shift();
//   console.log(x);
// }

// Write your loop code here

/*
 Loops Exercise 2: compare all elements to 500 and print
  - Using a 'while' loop, print out all elements in the numbers array that are greater than 500
  - (Hint: your loop block should probably contain an 'if-else' statement that checks if the current element is bigger than 500)
*/
//Answer Loop Exercise 2:
// while (numbers.length){
//   var b = numbers.shift();
//     if (b > 500){
//     console.log ("The Bigger Numbers are: ")
//     console.log(b);
//   }
// }

/*
 Loops Exercise 3: compare all elements to 500 + save First
  - Declare a variable called firstOver500. Then, Using a 'while' loop, iterate over all the elements in the numbers array, and stop iterating when you find the first number that is greater than 500. Save this number into your previously-declared variable, and then break out of the loop
  - (Hint: your loop block should probably contain an 'if-else' statement that checks if the current element is bigger than 500)
  - (Hint: your loop block should probably contain a `break` statement)
*/
///Answer Loop Exercise 3:
// var firstOver500; 
// i = 0;
// while (i < numbers.length){
//       if (numbers[i] > 500) {
//       firstOver500 = numbers[i];
//       console.log ("The 1st Bigger Number than 500 is: " , + firstOver500);
//       break; 
//     } 
//     else {
//       i++;
//     }
// }

/*
Loops Exercise 4: do we have soup?
  - Declare a new array called "foods" that contains an array of strings, and you get to decide whether to include the word soup.
  - Task: Declare a variable named hasSoup and set an initial value of false, and then loop through the array, and, if the foods array includes the string 'soup', set hasSoup to true. Once finished looping, log the value of hasSoup.
*/
///Answer Loop Exercise 4:
let foods = [ "Noodles", "Rice", "Soup", "Pizza"];
var hasSoup = false;
i = 0;

while ( i < foods.length){
  if (foods[i] == "Soup"){
    hasSoup = true;
    console.log ("Soup value is: ", hasSoup);
    i++;
  }
  else {
    i++;
  }
}

/*
 Loops Exercise 5: do we have an "e"?
  - Declare these two variables below:
  - let secretWord = "spongebob"
  - let found = false;
  - Write a `while` loop to determine if the secretWord string contains an "e" (Please don't use str.includes("e") or other pre-built methods)
  - if there is an "e" in the word, the variable found should be true. If there isn't, the variable found should be untouched.
  - Print the result to the console
*/
///Answer Loop Exercise 5:
let secretWord = "spongebob";
let found = false;
i = 0;

while (i < secretWord.length){
  if (secretWord[i] == "e"){
    console.log(secretWord[i]);
    i++;
  }
 else {
      i++;
       }
}

//Part. 2: Counting things, and Summing things
//Exercise 2.1: Counting strings
 let yummyfoods = ["pizza", "cheese", "broccoli", "pizza", "pizza", "spinach", "artichokes", "pizza", "water", "coke"];
 i = 0;
 var counter = 0;
 while ( i < yummyfoods.length){
   if (yummyfoods[i] == "pizza"){
     counter++;
     i++;
   }
   else {
     i++;
   }
   }
   console.log ("The number of times, pizza exists is: " , counter);

   //Exercise 2.2: Counting 7s
   let slots = [ 7, "apple", "winner", 7, 7, 7];
   i = 0;
   var counter = 0;
   while ( i < slots.length){
     if (slots[i] == "7"){
       counter++;
       i++;
     }
     else {
       i++;
     }
     }
     if (counter = 4);{
      console.log ("You have hit JACKPOT, my friend! " , counter, "times");
     }
     

     //Exercise 2.3: Summing things
     //Answer:
    //let purchases = [12, 34, 13, 500, 610, 13];
    //  i = 0;
    //  var mysum = 0;
    //  while (i < purchases.length){
    //    mysum = purchases[i] + mysum;
    //    i++;
    //  } 
    //  console.log(mysum);
    
//Exercise 2.4: Calculating the Product
let purchases = [12, 34, 13, 500, 610, 13];
let product = 1;
i = 0;
while (i < purchases.length) {
  product *= purchases[i];
  i++;
}
console.log(product);

//Part 3: Trace tables

//3.1. 
// int i = 0, j = 10, n = 0;
// while (i < j) {
//   i++;
//   j--;
//   n++;
//   }

//Answer 3.1:
//   i j n
//   0 10 0
//   1 9  1
//   2 8  2
//   3 7  3
//   4 6  4
//   5 5  5

// 3.2. int i = 0, j = 0, n = 0;

// while (i < 10) {

// i++;
// n = n + i + j;
// j++;
// }

//Answer 3.2:
// i  j  n
// 0  0  0
// 1  1  2
// 2  2  5
// 3  3  10
// 4  4  17
// 5  5  28
// 6  6  39
// 7  7  52

// 3.3. int i = 10, j = 0, n = 0;

// while (i > 0) {

// i--;
// j++;
// n = n + i - j;
// }
//Answer 3.3
// i  j  n
// 10 0  0 
// 9  1  8
// 8  2  14
// 7  3  18
// 6  4  20
// 5  5  20
// 4  6  18
// 3  7  14
// 2  8  8
// 1  9  0
// 0  10 10  

// 3.4. int i = 0, j = 10, n = 0;

// while (i != j) {

// i = i + 2;
// j = j - 2;
// n++;
// }
//Answer 3.4:
// i  j  n
// 0  10 0
// 2  8  1
// 4  6  2
// 6  4  3 
// 8  2  4
// 10 0  5