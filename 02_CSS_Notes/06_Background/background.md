## CSS Backgrounds
The CSS background property helps set the background style, property, and effects of the element.

There are various background properties, such as:

## Background color
The background color property sets the background colour of HTML tags such as div, section, p, etc.

Syntax
```html
selector{
      background-color: color;
}
```
Note: Color can be hex, rdb, hsl, etc
```html
<html>
<head>
    <style>
        p{
            background-color: orange;
        }
        span{
            background-color: purple;
        }
    </style>
</head>
<body>
    <div>
        <p>Developer<span>naveen</span></p>
    </div>
</body>
</html>
```
## Background Image


The Background Image property sets an image as a background by providing the image URL within the url() function.

Syntax
```html
selector{
        background-image: url('image-url');
}
```
Example.
```html
<style>
    div{
        background-image: url('image.png');
    }
</style>
```
The image is repeated many times because CSS repeats the image on both the x and y axes, to avoid leaving empty spaces due to the image dimensions. To solve this issue, use the background property repeat.

## Background repeat
Background repeat helps to control how the image will repeat.

Syntax
```html
selector{
   background-repeat: repeat-x || repeat-y || repeat || no-repeat;
}
```
background-repeat can be set to repeat, no-repeat, repeat-x (horizontal), or repeat-y (vertical).

### repeat-x 

repeat the image in the x direction or horizontally repeat the image.

Syntax.
```html
selector{
   background-repeat: repeat-x;
}
```

### repeat-y
repeat the image in the y direction or vertically repeat the image.

Syntax.
```html
selector{
   background-repeat: repeat-y;
}
```

## repeat
The background image is repeated in both the x and y directions. This is the default.

Syntax
```html
selector{
   background-repeat: repeat;
}
```

## no-repeat
The background image is not repeated in any direction. Only one image will be on the screen.

Syntax.
```html
selector{
   background-repeat: no-repeat;
}
```

## Background Size
The Background Size property sets custom sizes for the background image.

Syntax.
```html
selector{
    background-size: propery-value;
}
```
Property-value can be any of the following:

## cover
The image fits the whole screen according to the dimensions; the background area will be completely covered by the image while maintaining its aspect ratio.

Syntax
```html
div{
     background-image: url("./image.png");
     background-size: cover;
}
```

## contain.
Scales the image to fit within the background area entirely while maintaining its aspect ratio.

Syntax.
```html
div{
    background-image: url("./image.png");
    background-size: contain;
}
```
## auto
The image will be displayed in its original size. This is the default

Syntax.
```html
div{
    background-image: url("./image.png");
    background-size: auto;
}
``` 
## Distinct width and height
We can manually set the width and height of the background image.

Syntax.
```html
div{
    background-image: url("./image.png");
    background-size: 100% 100%;
}
```
Note: The width and height are used in percentage(%);

## Background Position
This property sets the starting position of the background image within the container (parent div).

By default, the position is top left.

Syntax.
```html
selector{
     background-position: property-value;
}
```
Property value can be top, bottom, left, right, or center. We use combinations of positions such as top left, top right, bottom left, bottom right, centre, etc.

Example.
```html
div{
     background-image: url("./image.png");
     background-repeat: no-repeat;
     background-position: top right;
}
```

## Background Attachment
The background-attachment property determines whether the background image scrolls with the content.

Syntax.
```html
div{
    background-attachment: fixed || scroll;
}
```
Use fixed for a fixed background, or scroll for a scrolling background.

 

## Shorthands
All the background properties would look something like this in a single line.

Syntax
```html
selector{
    background: [background-color] [background-attachment] [background-image] [background-repeat] [background-position];
}
```

## background-blend-mode

Applies blending modes to the background image and color.

## Values
Various blending mode keywords like multiply, screen, overlay.

Example
```html
background-blend-mode: multiply;
```


