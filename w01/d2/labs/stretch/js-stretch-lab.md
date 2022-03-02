# JS Variables, Conditions Stretch Lab

This is a totally optional stretch lab for those who want a bit more javascript. 

Warning: Instructors may underprioritize requests for help with this lab, as it's not part of the SEI fundamentals.

<img src="https://media1.giphy.com/media/uuocoePH1mkVy/200w.gif?cid=82a1493bgn3yvpo81jd0csdwn7aoljden8z5lsy0n3scrzin&rid=200w.gif&ct=g" >


# Part 1 - Fun with JS Variables


Try these 10 "stretch" questions to complement your basic understanding of variables and conditions in js.

1. What do you think the following code will output? Come up with a guess BEFORE you try out the code.
```js
x = "Cat"
var x

console.log(x)
```

What is happening? Hint: This is a phenomenon called hoisting, which the `var` keyword does when used to declare a variable.

2. What do you think the following code will output? Come up with a guess BEFORE you try out the code.
```js
x = "Cat"
console.log(x)
var x
```

3. What do you think the following code will output? Come up with a guess BEFORE you try out the code.
```js
x = "Cat"
console.log(x + y)
var x

var y = " goes Meow"
```

Were you correct? What is happening here?
Should we use hoisting, in your opinion, or avoid it?

4. What do you think the following code will output? Come up with a guess BEFORE you try out the code.
```js
const y = 5
y = 6
const x = {}
x.foo = 'bar'
console.log(x, y)
```

What is happening? Is this expected behaviour? Why or why not?

5. What do you think the following code will output? Come up with a guess BEFORE you try out the code.
```js
let myString = "Hello I am a string"
console.log(myString[0])

myString[0] = "Y"
console.log(myString)
```

What is happening? Is this expected behaviour? Why or why not? 

6. Write some code to change the first character of the string "Hello I am a string" to "Yello I am a string"


### ...Let's try declaring variables in a more interesting way.

7. The decimal number 31 can be represented in a number of formats. in binary is 11111. In hex it is 1F. Below, I have declared a variable to hold the value 31, but i'm supplying it as a binary numeric literal. Write some code to declare a variable to hold the number 31, but supply the value as a numeric literal in hex format. How could you do this for octal?

```js
let myNumber = 0b11111
```



# Part 2 - Bitwise operators and %

By now you have likely seen the logical operators && and ||, and arithmetic operators + and -.

Javascript also gives us a few other operators that are useful from time to time, but lesser known, namely &, |, ^, << and >>

These are known as <a href="https://www.w3schools.com/js/js_bitwise.asp">bitwise operators</a>, and there are lots of interesting things you can do with them.

The following exercises give you an idea.

For more in-depth study, I recommend the "Bit manipulation" chapter of the book "cracking the coding interview" (available on amazon, or i can lend you my copy), or you can look this up on various online resources such as <a href="https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/tutorial/">this tutorial.</a>


1. Write some code to swap the two values below. You may not use a third variable or declare any new variables.
```js
let a = 8
let b = 9
```

2. Below I have declared a variable that contains a number. Write some code to multiply the following number by 16. You may not use the multiplication or addition operators or division, nor *= or += or -= or /=.

```js
let c = 10
```


3. Write some code to divide the following number by 16. You may not use the multiplication or addition operators or division, nor *= or += or -= or /=.

```js
let d = 16000
```

4. Below I've declared a variable that contains the value "Cat". Using only the XOR operator ^, set the value of this variable to 0.

```js
let question4 = "Cat"
```

5. Below I have declared the number 15, which in binary is 1111. Using the bitwise operator &, write some code that will extract the rightmost binary bit (1) and save it into a variable called answer5

```js
let someNumber = 15
```

6. Similar to the above, but now using both the << and & operators, writes ome code that will extract the second-from-the-right binary bit, and save it into a variable called answer6.

7. I've declared a variable below. Using the % operator, determine the 3rd last digit, and save it into a variable called answer7.

```js
let bigNumber = 54321
```

8. Write a function that returns the ith bit of any number n.

9. Write a function that returns the nth digit of any number n.

# Want more? Try some FAANG interview-level bit manipulation questions

The questions below are designed to challenge computer science majors and are asked during very difficult interviews for large companies like google, so they are quite hard for your average coder:

<a href="https://leetcode.com/tag/bit-manipulation/">https://leetcode.com/tag/bit-manipulation/</a>

I recommend only doing easy questions, and sorting by acceptance (90% is better to start with than 10%). Acceptance roughly means 90% of CS grads who attempted this got it right. Medium and hard should only be attempted once you're comfortable with easy ones.
