---
title: "Golang: text/template package"
date: 2022-03-06 1:35:00
draft: false
tags: ["GoLang", "text/Template", "package"]
summary: "Simple know how on how to do templating using the text/template package in Golang. Covering concepts from parsing to template functions."
---

I recently started learning about the templating patterns and packages in Golang programming language, and decided to write this blog post consolidate all that I learnt about it in simple but practical examples.

### Getting Started

Templates are nothing but a raw skeleton or structure in which you can programmatically add data. They are executed against any data structure to give the final output of our document. This allows us to use templates in various scenarios, like serving dynamic HTML pages, making previews, creating documents dynamically, etc the possibilities are endless. For simplicity we'll look at parsing HTML templates with the `text/template` package (don't confuse it with html/template package). Our goal will be to understand what are the basic principles of using templates and working with passing data into them, lets get started!

### Parsing our files

Parsing is the first think we'll need to learn about. You can think of it as loading your HTML templates into your golang program so you can further work with them. They are many ways of doing this, but we'll use the simplest way.

So lets first create our simple HTML template or file we'll like to load into our program:

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```
We now have our template which is a very simple HTML document, now lets write our go code to load this template:
```go
package main

import (
	"log"
	"os"
	"text/template"
)


func main() {
	// ParseFiles takes multiple files (variadic parameter)
	tlp, err := template.ParseFiles(
		"templates/1.html",
	)
	if err != nil {
		log.Fatal(err)
	}

	err = tlp.Execute(os.Stdout, nil)
	if err != nil {
		log.Fatal(err)
	}
}
```
Here we load three golang package namely `log`, `os`, and `text/template`. We use the `text/template` package's `ParseFiles` function to load our html document in our go program. The ParseFiles function can take more than one file paths to load multiple templates (here my file is present in ./template/1.html) and returns a pointer to a `template.Template` type and an err. The rest is just plain old error handling and then we call the `Execute` method on our loaded template. The `Execute` method takes in two argument one needs to be of a type that implement Writer interface and second is the data we want to pass into the template. Lets run and see what our output will look like:
```bash
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```
Here our plain HTML document gets printed out on our console in textual format. This is the most simple example of working with templates in Go. Now lets take a step further and see how can we pass data into our template.

### Passing Data

To make templating useful for different use cases the next thing we'll want to do is pass some data into our template so that we can use it to create dynamic pages or documents. For doing this we use a general syntax of `{{ . }}`, so lets add this to our html template and try to pass some data into it from our go program.

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        {{ . }}
    </body>
</html>
```
We also modify our go code to now pass a slice of struct data type called fruit into our html template as follows:
```go
package main

import (
	"log"
	"os"
	"text/template"
)

type fruit struct {
	Name     string
	Quantity int8
	Price    int8
}

func main() {
	// ParseFiles takes multiple files (variadic parameter)
	tlp, err := template.ParseFiles(
		"templates/1.html",
	)
	if err != nil {
		log.Fatal(err)
	}

	var fruits []fruit = []fruit{
		fruit{
			Name:     "Banana",
			Quantity: 2,
			Price:    10,
		},
		fruit{
			Name:     "Orange",
			Quantity: 4,
			Price:    18,
		},
	}
	err = tlp.Execute(os.Stdout, fruits)
	if err != nil {
		log.Fatal(err)
	}
}
```
On running our go program we see something very interesting, our whole slice of data was passed into the html template and gets printed out, the output should look something like the following:
```bash
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        [{Banana 2 10} {Orange 4 18}]
    </body>
</html>
```
We can think of "." called dot, as a variable holding the data structure we have passed to it through the `Execute` method of our template.

Quoting the official documentation:

> Execution of the template walks the structure and sets the cursor, represented by a period '.' and called "dot", to the value at the current location in the structure as execution proceeds

source: https://pkg.go.dev/text/template

So we now have our template and we have successfully given it the data we wanted it to have, but we can't just display the raw data structure (in our case slice of struct) to the user. We want to process this data and format it in our HTML document in a manner the user expects it to be. Hence we want to perform some actions and control the flow of the data as we would in any program.

### Actions

You can find the list of actions or controls you can use [here](https://pkg.go.dev/text/template#hdr-Actions). In our case we'll be discussing about the `range` action. The `range` action is as simple as it sounds, it allows us to range over our slice data type and access each slice element as in a for loop. Lets use our previous example and modify our HTML template to make use of the `range` action available to us:
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        {{ range $index, $element := . }}
            {{ $element }}
        {{ end }}
    </body>
</html>
```
Here we also use `:=` to get access to index of each element, if you don't want index you can simply use `{{ range .}}` and then when you access dot before the end statement it will have the current element. I like taking out the index and element using pipeline like in the template (php vibes 😬), it makes it more clear to work with. Our go program remains the same, and on running it again we get the following:
```bash
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        
            {Banana 2 10}
        
            {Orange 4 18}
        
    </body>
</html>
```
So now the `[]` slice is gone and we have two struct object things printed out separately. Progress, now we'll want to access our individual struct fields. Doing that is fairly simple we use the field name defined in our go program in our HTML template to access it directly off the `$element` we defined in our template. Here's how:
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        {{ range $index, $element := . }}
            Fruit: {{ $element.Name }}
            Quantity: {{ $element.Quantity }}
            Price: {{ $element.Price }}
        {{ end }}
    </body>
</html>
```
The output on running the program would look like the following:
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        
            Fruit: Banana
            Quantity: 2
            Price: 10
        
            Fruit: Orange
            Quantity: 4
            Price: 18
        
    </body>
</html>
```
We now have a document formatted in a way that is readable to a general user. But we can even go a step further...

### Passing in Functions

We can find two kinds of functions (or function maps) that are available to us by default, the first is in the template which can be defined by us and is empty by default and the second in the global function map which has a lot of very useful predefined functions. You can read about these predefined functions [here](https://pkg.go.dev/text/template#hdr-Functions)

For better understanding we'll define our own simple function called `totalPrice` and use it in our template. The function itself will be very simple and will take two arguments which are quantity and price, and will return the product of the two. Our go program will now look like:
```go
package main

import (
	"log"
	"os"
	"text/template"
)

type fruit struct {
	Name     string
	Quantity int8
	Price    int8
}

func totalPrice(q, p int8) int8 {
	return q * p
}

func main() {
	var fnMap template.FuncMap = template.FuncMap{
		"tp": totalPrice,
	}
	tlp := template.New("").Funcs(fnMap)

	var err error
	// ParseFiles takes multiple files (variadic parameter)
	tlp, err = tlp.ParseGlob(
		"templates/1.html",
	)
	if err != nil {
		log.Fatal(err)
	}

	var fruits []fruit = []fruit{
		fruit{
			Name:     "Banana",
			Quantity: 2,
			Price:    10,
		},
		fruit{
			Name:     "Orange",
			Quantity: 4,
			Price:    18,
		},
	}
	err = tlp.ExecuteTemplate(os.Stdout, "1.html", fruits)
	if err != nil {
		log.Fatal(err)
	}
}
```
So whats going on here, we use the `FuncMap` type available in `template` package to declare a function map that we can attach to our template. We use the key as `tp` and value as the function, so in our template we can use `tp` to use the `totalPrice` function. Then we use the `New` function in `text/template` package to declare an empty template and chain it with the call to `Funcs` method that will attach our function to the template. After which we go ahead and parse our actual HTML template.

There is a common mistake we can make here, that is if we parse our document before attaching our function map, then that parsed document will not have access to the function map. So we have to attach our function map first and only then we can parse our document, this is the sole reason we have used `New` function in this example.

Now to access this function in our HTML template all we do is call `tp` and pass in the parameters, just like below:
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        {{ range $index, $element := . }}
            Fruit: {{ $element.Name }}
            Quantity: {{ $element.Quantity }}
            Price: {{ $element.Price }}
            Total: {{ tp $element.Quantity $element.Price }}
        {{ end }}
    </body>
</html>
```
Now on running the program we'll be able to see the product of the two number being displayed
```bash
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        
            Fruit: Banana
            Quantity: 2
            Price: 10
            Total: 20
        
            Fruit: Orange
            Quantity: 4
            Price: 18
            Total: 72
        
    </body>
</html>
```
We have successfully displayed an extra value `total` to the user by running our `totalPrice` function inside of our template.

### Bonus
Here is a more cleaner version of the same go code we developed in this example:

```go
package main

import (
	"log"
	"os"
	"text/template"
)

var tlp *template.Template
var fn = template.FuncMap{
	"tp": func(q, p int8) int8 {
		return q * p
	},
}

type fruit struct {
	Name     string
	Quantity int8
	Price    int8
}

func init() {
	tlp = template.New("").Funcs(fn)
	tlp = template.Must(tlp.ParseGlob("templates/1.html"))
}

func main() {
	var fruits []fruit = []fruit{
		fruit{
			Name:     "Banana",
			Quantity: 2,
			Price:    10,
		},
		fruit{
			Name:     "Orange",
			Quantity: 4,
			Price:    18,
		},
	}
	err := tlp.ExecuteTemplate(os.Stdout, "1.html", fruits)
	if err != nil {
		log.Fatal(err)
	}
}
```

### Conclusion
This is just the tip of the iceberg, the `text/template` package provides a lot of functionalities and trying to discuss them all will convert this article into a thesis. To learn more head over to the official documentation of the package available at [here](https://pkg.go.dev/text/template)
