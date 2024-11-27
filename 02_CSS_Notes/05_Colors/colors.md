## CSS Colors

The color property of CSS helps to set the color of the HTML element(s). 

This helps to set the foreground color of text, text decorations, and borders.

Syntax:

```html
selector {
    /* colorname can be any colour, such as red, blue, yellow, purple, green, etc. */
    color: colorname
}

```
Example:

```html
<head>
    <style>
        p{
            color: purple;
        }
    </style>
</head>

<body>
    <p>Hello</p>
    <p>Naveen</p>
</body>

</html>
```

There are many ways to set the property-value of color.

## RGB Colors

RGB (Red, Green, Blue) values allow you to define colors by specifying the amount of red, green, and blue in the color.

```html
p {
    color: blue;
    color: rgb(0, 0, 255);
}
```

## RGBA Colors.

RGBA is similar to RGB but includes an alpha channel for opacity control

```html
p {
    color: rgba(0, 0, 255, 0.5);
}

```

## Hexadecimal Colors

You can specify colors using hexadecimal values

```html

p {
    color: #ccc;
}
```

## HSL Colors.

HSL (Hue, Saturation, Lightness) values provide a way to specify colors based on their hue, saturation, and lightness.

```html

p {
    color: hsl(226, 84%, 17%);
}
```

## HSLA Colors.

Similar to HSL, HSLA includes an alpha channel for opacity control.

```html
p {
    color: hsl(226, 84%, 17%, 0.8);
}

```