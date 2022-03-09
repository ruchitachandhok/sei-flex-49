![](https://i.imgur.com/hGEeDR1.png)

# JavaScript Objects vs. Arrays Lab<br> (deliverable!)

## Intro

Javascript objects are something you are going to be using all the time going forward from this week, and continuing onwards into Unit 2 and Unit 4 -- their importance cannot be overstated!

They are the second most important data structure after arrays.

Here are some exercises to give you some basic practice with objects (and more practice with arrays) in increasing order of difficulty.

<strong>Please do these in a new repl.it</strong> and submit it into your <strong>deliverables</strong>.

<i>(Attribution: Some of these exercises were adopted from the online textbook at https://github.com/workshopper/javascripting)</i>

## Warmup: W3Schools (optional)
<ul>
  <li><a href="https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_objects1">Basic Objects Practice 1 (W3Schools)</a></li>
</ul>

## Notes for Exercise 1:

Objects are lists of values similar to arrays, except values are identified by keys instead of integers.

Here is an example:

```js
const foodPreferences = {
  pizza: 'yum',
  salad: 'gross'
}
```

Observe how we've declared a variable named `pizza` below that holds an object.

```js
let pizza = {
  toppings: 3,
  crust: 'deep dish',
  serves: 2
}
```


### Exercise 1:

1. Objects: Declare a variable named after yourself. In this variable, store an object. Give this object at least 3 properties and appropriate values: eg., "name": "alex", mood: happy, age: "getting old", and use `console.log()` to print the entire object to the terminal.

2. Arrays Review: Now, declare another variable to store an array called `myFavouriteThings`. Give this array at least 3 items, and use `console.log()` to print the entire array to the terminal.

3. Answer this question as a comment: When do we use arrays, and when do we use objects? 

## Notes for Exercise 2: Accessing a Property

You can access and manipulate object properties –– the keys and values that an object contains –– using a method very similar to arrays.

Here's an example using **square brackets**:

```js
const example = {
  pizza: 'yummy'
}

console.log( example['pizza'] )
```

The above code will print the string `'yummy'` to the terminal.

Alternately, you can use **dot notation** to get identical results:

```js
console.log( example.pizza )
console.log( example['pizza'] )
```

The two lines of code above will both return `yummy`.

### Exercise 2:

1. Define a variable named `product` like this:

```js
const product = {
  price: 500,
  name: "Iphone X",
  quality: "high"
}
```

2. Use `console.log()` to print just the `price` property of the `product` object to the terminal.
3. Now declare an array called `productNames` that holds at least 3 of your favourite products
4. Use `console.log()` to print out the first item of the productNames array.
5. Use `console.log()` to print out the last item of the productNames array. (Hint: instead of doing `productNames[3]` where you have to know the length in advance, try `productNames[productNames.length-1]` so that it will work regardless of the length).

## Notes for Exercise 3: Modifying a property of an object

I can change any property in the above product array by doing this:
```js
   product.price = 300
```

or this:
```js
   product[price] = 300
```

### Exercise 3

1. Without touching (ie., redeclaring) the above product object from exercise2, use dot notation to change the price property to 0, and console.log just the price property
2. Similarly, change the name property to become a name of your choosing.
3. Now, let's practice modifying arrays. Without redeclaring your productNames array from exercise 2, change the first element to be a string of your choosing.
4. Without redeclaring your productNames array from exercise 3, change the first element to be a string of your choosing.


# Optional exercises that won't be marked as we haven't covered loops yet (looping over objects)

## Optional Exercise 4: Object Keys

JavaScript provides a native way of listing all the available keys of an object. This can be helpful for looping through all the properties of an object and manipulating their values accordingly.

Here's an example of listing all object keys using the **Object.keys()**
prototype method.

```js
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020
}
const keys = Object.keys(car)

console.log(keys)
```

The above code will print an array of strings, where each string is a key in the car object. `['make', 'model', 'year']`

### The challenge:

Define a variable named `car` like this:

```js
const car = {
  make: 'Honda',
  model: 'Accord',
  year: 2020
}
```

Then define another variable named `keys` like this:
```js
const keys = Object.keys(car)
```

1. Use `console.log()` to print the `keys` array to the terminal.
2. Using the keys, we can figure out the length of the object. Print out the length of the object.
3. Use a for of loop to print out all the keys of the object.
4. Use a for of loop to print out all the keys <strong>and values</strong> of the object.

## Level 5: Arrays of Objects

Objects are frequently found in arrays. For example, in Unit 2, when we look at databases, we might encounter a database of products like this:

```js
let products = [
{id:"1", name:"LG Big Screen TV", price:400},
{id:"2", name:"Iphone X", price: 500},
{id:"3", name:"Google Pixel 5", price: 300},
{id: "4", name:"Plantronics Headset", price: 150},
]
```

### The challenge(s)


1. Use a `for of` loop, and `console.log()` to print just the names of the products to the terminal.</li>
2. Use `console.log()` to print the total price to the terminal</li>
3. Use `console.log()` to print the product that has the highest price to the terminal</li>

