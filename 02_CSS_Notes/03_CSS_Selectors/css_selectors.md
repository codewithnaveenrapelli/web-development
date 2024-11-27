## What are CSS Selectors?

CSS selectors allow us to choose specific elements and apply styles to them. Suppose we want to add a custom style to only a specific tag(s). There, We can make use of CSS selector. 

There are different types of CSS selectors, which are as follows:

1. Universal Selector
2. Element Selector
3. Id Selector
4. Class Selector
5. Group Selector
6. Attribute selectors
7. Pseudo-classes and pseudo-elements
8. Combinator
9. Next-sibling combinator

## Universal Selector

Universal selector represented by "*" targets all the HTML elements on the page.

```html
* {
    property : value;
}
```

## Element Selector (Type Selector)

The element selector selects the target element based on the specific type. Suppose you want to underline all the ```<p>``` tags; in this case, the element selector will be the best choice.

```html
p {
    property : value;
}
```

## ID Selector
The ID selector targets the elements based on the specific ID. It is written with the hash “#” character followed by the ID name in the style sheet.

```html
#ID {
    property : value;
}
```

## Class Selector
The class selector does the same job as the id selector, a class selector helps group various types of elements. Suppose, we want to give a custom style to a specific group of elements. In this case, the class selector is the best option.

It is written with the period “.” character followed by the class name in the style sheet.

```html
.class {
    property : value;
}
```

## Group Selector

The group selector is used to minimise the code. Commas "," are used to separate each selector in a grouping. This reduces the number of lines of code. The code also looks clean.

```html
div, p, a {
    property : value;
}
```

## Attribute selectors

This group of selectors gives you different ways to select elements based on the presence of a certain attribute on an element.

```html
a[title] {
}
```

## Pseudo-classes and pseudo-elements

This group of selectors includes pseudo-classes, which style certain states of an element. The :hover pseudo-class for example selects an element only when it is being hovered over by the mouse pointer.

```html
a:hover {
}
```

It also includes pseudo-elements, which select a certain part of an element rather than the element itself. 
For example, ::first-line always selects the first line of text inside an element (a ```<p>``` in the below case), acting as if a ````<span>``` was wrapped around the first formatted line and then selected.

```html
p::first-line {
}
```

## Combinator

The final group of selectors combine other selectors in order to target elements within our documents. The following, for example, selects paragraphs that are direct children of ```<article>``` elements using the child combinator (>).

```html
article > p {
}
```

## Next-sibling combinator

The next-sibling combinator (+) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the next sibling element of the first selector. For example, to select all ```<img>``` elements that are immediately preceded by a ```<p>``` element.

```html

a + p{

}
```

