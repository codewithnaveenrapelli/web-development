## CSS Box Shadow

Classified into two types:

1. box shadow
2. drop shadow

## 1. Box Shadow

Box Shadow is a new property to add shadow effects to any html Element. You can choose your own color, offset, blur, spread, offset and repetition. Unlike border, it not a part of CSS Box Model, thus doesn't effect the layout even if it is bigger in size. Also we can add multiple shadows with different colors and offsets.

Outer Box Shadow: Default box shadow is outer. x-offset and y-offset are compulsory properties, rest all are optional.

Inner Box Shadow: To use inner box shadow, use inset. Inset is only required if shadow is inside. By-default shadow is outside.

```html
    <!-- box-shadow: offset-x,offset-y,blur,color -->
    box-shadow: 0px 0px 60px 60px #ffb000;
```

## 2. Drop Shadow

Drop shadow, often used for images, creates a shadow below the element, giving the illusion of it being lifted from the page.

It is defined using the filter property with the drop-shadow function.

The drop-shadow function accepts values for horizontal and vertical offsets, blur radius, and color.

values  
 
Two length values 

drop-shadow( ```<length> <length>``` ) 
drop-shadow(5px 5px) 

 Three length values 
 drop-shadow( ```<length> <length> <length>``` ) 
 drop-shadow(5px 5px 15px) 

 Two length values and a color 
 drop-shadow( ```<length> <length> <color>``` ) 
 drop-shadow(5px 5px yellow) 

 Three length values and a color 
 drop-shadow( ```<length> <length> <length> <color>``` ) 
 drop-shadow(5px 5px 15px yellow) 

 The order of color and length values can be changed 
 drop-shadow( ```<color> <length> <length> <length>``` ) 
 drop-shadow(#e23 0.5rem 0.5rem 1rem) 


 ```html
filter: drop-shadow(-10px 10px 0 #f90000);
```

