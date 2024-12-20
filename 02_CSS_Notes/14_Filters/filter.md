## CSS Filter Property

CSS filters are a set of graphical effects that can be applied to HTML elements to modify their appearance. 

Filters can alter properties like color, brightness, contrast, and more. 

## Commonly Used Filter Functions: 

## grayscale(): 
 
Converts the element to grayscale. A value of 1 (or 100%) means fully grayscale. 
```html
filter: grayscale(0.5); 
```
## blur(): 

Applies a blur effect to the element. The value determines the amount of blur. 
```html
filter: blur(5px); 5 pixels of blur 
```

## brightness(): 

Adjusts the brightness of the element. Values greater than 1 increase brightness, and values less than 1 decrease it. 
```html
filter: brightness(1.5); 150% brightness 
```
## contrast(): 
Adjusts the contrast of the element. Similar to brightness(), values greater than 1 increase contrast, and values less than 1 decrease it.
```html 
filter: contrast(0.8); 80% contrast 
```
## saturate(): 
Increases or decreases the saturation of the element. Values greater than 1 increase saturation, and values less than 1 desaturate it. 
```html
filter: saturate(2); Double saturation 
```
## hue-rotate(): 
Rotates the hues of the element. Values are in degrees. 
```html
filter: hue-rotate(90deg); 90-degree hue rotation 
```
## invert(): 
Inverts the colors of the element. A value of 1 (or 100%) inverts completely. 
```html
filter: invert(0.7); 70% color inversion 
```
## opacity(): 
Adjusts the opacity (transparency) of the element. Values range from 0 (completely transparent) to 1 (completely opaque). 
```html
filter: opacity(0.5); 50% opacity 
```
## sepia(): 
Applies a sepia tone effect to the element. A value of 1 (or 100%) is full sepia. 
```html
filter: sepia(0.7); 70% sepia effect 
```
## IMPORTANT TIPS - FILTERS - CSS3

CSS filters can be combined by separating them with spaces.

Filters can be applied to images, backgrounds, and even entire sections of a webpage.

Experiment with filter values to create unique visual effects.

Be cautious with excessive use of filters, as they can significantly alter the appearance of elements. 
