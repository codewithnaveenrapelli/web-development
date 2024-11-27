## CSS Text Styling


## Text Alignment
The text alignment property is used to align the text within the container. Container can be a div, section, etc.

Syntax:
```html
selector{
    text-align: value;
}
```
There are four values for text alignment:

- left: align the text to the left.
- centre: align the text to the centre.
- right: align the text to the right.
- justify: spread the text evenly between the left and right margins.


Example:
```html
<html lang="en">
<head>
    <style>
        #p1 {text-align: left;}
        #p2 {text-align: right;}
        #p3 {text-align: end;}
        #p4 {text-align: justify;}
    </style>
</head>
<body>
    <p id="p1">text-align: left</p>
    <p id="p2">text-align: right</p>
    <p id="p3">text-align: end</p>
    <p id="p4">text-align: justify</p>
</body>
</html>
```
## Text Transformation
It transforms the text case.

Syntax:
```html
selector {
    text-transform: value;
}
```
There are four values for text-transform:

- uppercase: Transform text to uppercase (all capital letters).
- lowercase: transform text to lowercase (all small letters).
- capitalise: capitalise the first character from each word.
- none: To remove text transformation. 

```html
<html lang="en">
<head>
    <style>
        #p1 {text-transform: uppercase;}
        #p2 {text-transform: lowercase;}
        #p3 {text-transform: capitalize;}
        #p4 {text-transform: none;}
    </style>
</head>
<body>
    <p id="p1">text-transform: uppercase</p>
    <p id="p2">text-transform: lowercase</p>
    <p id="p3">text-transform: capitalize</p>
    <p id="p4">text-transform: none</p>
</body>
</html>
```
## Letter Spacing
The letter-spacing property allows to specify the spacing between each character in the text.

The property values can be in pixels (px), em, rem, percentage (%), etc.

Example:
```html
<html lang="en">
<head>
    <style>
        h1{
            letter-spacing: 5px;
        }
    </style>
</head>
<body>
    <h1>Naveen</h1>
</body>
</html>
```

## Text Decoration
The text-decoration property adds various types of text decorations.

Syntax:
```html
selector {
    text-decoration: value;
}
```
There are four values for text-decoration:

- overline: adds a line above the text
- underline: adds a line below the text
- line-through: Adds a line to the text.
- none: To remove decoration.

### text-decoration-line
- The text-decoration-line property specifies which type of line should be used as decoration for text, such as underline, overline, line-through, or none.

### text-decoration-color
- The text-decoration-color property sets the color of the text decoration lines, like underlines or overlines.

### text-decoration-style
- The text-decoration-style property is used to set the style of the decoration line.

### text-decoration-thickness
- Specifies the thickness of the text decoration line

Example:
```html
<html lang="en">
<head>
<style>
    #p1 {text-decoration: overline;}
    #p2 {text-decoration: underline;}
    #p3 {text-decoration: line-through;}
    #p4 {text-decoration-line: overline underline;}
        
    h1 {
        font-size: 54px;
        font-weight: 900;
        /*?textpropertiesstartshere*/
        text-align: left;
        text-decoration-line: line-through;
        text-decoration-color: red;
        text-decoration-thickness: 10px;
        text-decoration-style: solid;
        text-transform: capitalize;
        text-shadow: -2px -2px 5px rgba(255, 0, 0, 0.2);
    }
</style>
</head>
<body>
    <h1>Naveen</h1>
    <p id="p1">text-decoration: overline</p>
    <p id="p2">text-decoration: undrline</p>
    <p id="p3">text-decoration: line-through</p>
    <p id="p4">text-decoration: overline underline</p>
</body>
</html>
```

## Line Height
The line-height property controls the spacing between the two lines of text.

Example:
```html
<html lang="en">
<head>
    <style>
        h1{
            line-height: 3.5;
        }
    </style>
</head>
<body>
    <h1>Naveen</h1>
    <h1>Developer</h1>
</body>
</html>
```

The value of 3.5 means that the space between lines will be 3.5 times the height of the font size.

## Text Shadow
The text-shadow property adds a shadow to the text.

Syntax:
```html
selector{
    text-shadow:  Horizontal offset, vertical offset, blur radius, color;
}
```
Example:
```html
<html lang="en">
<head>
    <style>
        h1{
            text-shadow: 2px 3px 4px red;
        }
    </style>
</head>
<body>
    <h1>naveen</h1>
</body>
</html>
```

## Text Overflow
The text-overflow property handles text that overflows its container.

There are two values we can use with text-overflow:

- ellipsis: Truncates overflowing text with an ellipsis.
- clip: clips the text without any visual indication.

## white-space 

white-space is used to control how white space within an element is handled.

```html
word-spacing: 1px;
```

