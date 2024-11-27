## HTML Comments

* Comments help with documentation and are helpful for the future users who read that code, so that they can understand it easily.

* Comments are ignored by the browser and Comments don't affect the styling or layout.

* CSS Comments are enclosed between /* and */.

There are two types of comments in CSS:

## Single-line comment:

Single-line comments are contained within one line. They are useful for short annotations.

Syntax
```html
selector{
    /* property: value */
}
```
for example:
```html
/* This is a single line commnent */
p{
    /* color: red */
}
```
here, the comment is between /* and */

## Multi-line comments
Multi-line comments span across multiple lines, making them ideal for detailed explanations or temporarily disabling blocks of code.

Syntax
```html
selector{
    /* property1: value1
    property1: value1
    property1: value1 */
}
```
These are similar to single-line comments, but this helps to comment large descriptions, notes, etc.

for example:
```html
/* This is a
multi line
commment */
p {
    /* color: red;
    background-color: purple; */
    color: purple;
    background-color: red;
}
```
Tip: If you are using vs code, you can use `cltr + /` to comment the line.

