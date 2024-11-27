## Gradient

Gradient classified into two types.
1. Linear Gradient
2. Radial Gradient

## 1. Linear Gradient

The linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors along a straight line

linear Gradient are by default top to bottom.

linear gradient we can specify the direction how to display.

```html
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);

background-image: linear-gradient(red, yellow);
```
### Direction - Left to Right

```html
background-image: linear-gradient(to right, red , yellow);
```
### Direction - Diagonal

You can make a gradient diagonally by specifying both the horizontal and vertical starting positions.

```html
background-image: linear-gradient(to bottom right, red, yellow);
```

### Using Angles
If you want more control over the direction of the gradient, you can define an angle, instead of the predefined directions (to bottom, to top, to right, to left, to bottom right, etc.). A value of 0deg is equivalent to "to top". A value of 90deg is equivalent to "to right". A value of 180deg is equivalent to "to bottom".

Syntax
```html
background-image: linear-gradient(angle, color-stop1, color-stop2);
```

## 2. Radial Gradient

The radial-gradient() function sets a radial gradient as the background image.

Syntax:

```html
background-image: radial-gradient(shape size at position, start-color, ..., last-color);
```

```html
background-image: radial-gradient(red, yellow, green);
```

### Radial Gradient - Differently Spaced Color Stops

```html
background-image: radial-gradient(red 5%, yellow 15%, green 60%);
```
### Set Shape
 
The shape parameter defines the shape. It can take the value circle or ellipse. The default value is ellipse.

```html
background-image: radial-gradient(circle, red, yellow, green);
```

### Use of Different Size Keywords
The size parameter defines the size of the gradient. It can take four values:

- closest-side
- farthest-side
- closest-corner
- farthest-corner
Example
A radial gradient with different size keywords:
```html
#grad1 {
  background-image: radial-gradient(closest-side at 60% 55%, red, yellow, black);
}

#grad2 {
  background-image: radial-gradient(farthest-side at 60% 55%, red, yellow, black);
}
```

### Repeating a radial-gradient
The repeating-radial-gradient() function is used to repeat radial gradients:

```html
background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
```

## Interview Question  

1: What are CSS gradients, and why are they useful in web design?

sol: CSS gradients are a way to create smooth transitions between two or more specified colors. They are useful in web design because they allow for the creation of visually appealing backgrounds, buttons, and text effects, enhancing the overall design and user experience. 

2: Explain the difference between linear gradients and radial gradients in CSS. When would you use one over the other?

sol: Linear gradients create a smooth transition along a straight line, such as from top to bottom or left to right. Radial gradients, on the other hand, create a circular transition from the center outward. You would use linear gradients for linear background effects like horizontal or vertical color transitions. Radial gradients are ideal for creating circular elements or radial backgrounds, such as buttons or circular divs.

3: How can you create a diagonal linear gradient in CSS? 🚀  
```html
 background-image: linear-gradient(to bottom right, #004d7a, #a8eb12); 
```
4: How can you create a transparent gradient in CSS? 🚀 
```html
background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1)); 
```
5:Can you create a gradient that transitions from multiple colors rather than just two? 🚀  
```html 
 background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  ); 
```

6: create a repeating radial gradient in CSS? 
```html
background-image: repeating-radial-gradient(#ff5733, #ffc300 , #A8DF8E ); 
```
7: Create a CSS-only radial gradient that creates a circular pattern of colors with smooth transitions between them. 
```html 
 background: radial-gradient(
      circle at center,
      #ff5733 0%,
      #ffc300 20%,
      #ff5733 40%,
      #2980b9 60%,
      #33ff57 80%,
      #2980b9 100%
);
``` 