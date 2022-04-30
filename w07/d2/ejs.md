# Dynamic Templating using EJS

### Roadmap
1. embedding javascript statements in an EJS file <% %>
2. embedding javascript expressions into an EJS file <%= %>
3. passing in variables into an EJS file
4. creating a visitor counter

### Overview

We've looked at how EJS allows us to render a static HTML file.

This is great, but not scaleable.

A website like amazon has thousands of HTML pages corresponding to millions of products. Are they manually creating a separate file for each of these?
What about spotify, which has thousands of song pages, or album pages. Are they manually creating an HTML file for each of these web pages?

Of course not. They are using dynamic templates.

### 0. Preamble - Javascript statements vs. expressions

#### Question: What is the difference between a javascript statement, and a javascript expression, and what are some examples?

One Answer: expressions are values, statements are instructions not hard values.
- a javascript expression <strong>is</strong> or evaluates to a hard value (ie., it evaluates to <strong>a single value</strong>. Examples: the number 5, the value 5+5, the string value "hello", or a function call like getRandomNumber() that returns a number
- a javascript statement is an instruction / a sentence / a verb that is not a single hard value., (eg., let x = 5 is not an expression but it's an instruction to the computer to declare a variable. A looping statement which "does" something a few times is not a hard value: it's a set of commands. An "if" statement which does something based on some condition isn't a hard value but a command. A function definition which defines a function )


More examples:

|Statements|Expressions|
|----------|-----------|
|let x = 5|anything that evaluates to a number,string,array eg., 5 or 5+5, or `["apple","pear","kiwi"]`|
|console.log("hello")|"hello" is an expression beacause it evaluates to a single value like a string|
|if (status == "active") {x++} is an if statement|status=="active" is an expression because the comparison evaluates to a single value true or false|
|while(x>6){ x-- } is a looping statement||
|x-- a statement because it is doing something - it's decrementing x, so it's a statement||
|any loops or conditionals because they do something many times||
|any function definitions like function add(x,y) {return x+y}|any function calls like add(x,y) or Math.random(500)|


### 1. Embedding javascript statements in an EJS File <% %>

In an EJS File, you can write any amount of javascript statements you would like within `<% %>` ejs scriptlet brackets.
For example:

```js
<% console.log('hello') %>
```

### 2. Embedding javascript into an EJS file <%= %>

You can also <strong><em>embed</em></strong> javascript expressions within "alligator" braces `<%= %>`

Without embedded javascript:
`<p>My favourite number is: 7 </p>`

With embedded javascript:
`<p>My favourite number is: <%= Math.random() * 10 %> </p>`

### 3. Dynamic Templating Overview
<br>

- As we mentioned yesterday, view engines can be used to dynamically generate HTML on the server before sending it to the client.

- Yesterday we just used the `render` method, passing in a single argument: the view name - eg., `res.render('landing.ejs')`

- We can also pass in a JavaScript **object** as a second argument, and all of its properties will be accessible in the view within `ejs` tags! - 

For example, you can write a route handler like this:

```js
app.get('/home', function(req,res) {
  let someObject = {
     name: 'aidan',
     status: 'coolcoolcool',
  }
  res.render('landing.ejs', someObject)
})
```


And then within landing.ejs that object's properties are accessible directly:
```js
<p>
Name: <%= name %>
Status: <%= status %>
</p>
```



### 4. Creating a visitor counter

You do: 

Try to create a page that displays the number of times this webpage has been visited ("hit counters" were all the rage <a href="https://www.google.com/search?q=90s+hit+counters&tbm=isch&ved=2ahUKEwjD4YK_opH3AhWTqHIEHT7cCIEQ2-cCegQIABAA&oq=90s+hit+counters&gs_lcp=CgNpbWcQA1CSD1iOEGCxEWgAcAB4AIABUogBtgKSAQE0mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=0OBWYsO5C5PRytMPvrijiAg&bih=695&biw=1374">in the 90s</a>).

We will go over the answers together in class.
