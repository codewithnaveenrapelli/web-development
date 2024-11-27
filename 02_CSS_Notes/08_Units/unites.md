## CSS Units

Units are classified into two types.

1. Absolute length
2. Relative length

## 1. Absolute Length

The absolute length unites are fixed and a length expressed in any of these will appear as a exactly that size.

    - Pixels(px)
    - inches(in)
    - points(pt)

## pixels(px)
* px is an absolute unit of measurement in CSS, representing the smallest unit of screen space.
* It provides a fixed and consistent size on all devices and screens

**1px = 6.25%**

```html
h1 {
  font-size: 54px; //
  color: purple;
}

p {
  font-size: 36px;
}

li {
  font-size: 44px;
}
```

## 2. Relative Length

The relative length units are specify a length relative to another length property. Relative length units scale better between different rendering medium.

    - em (1em = 16px)
    - rem (1rem = 10px)
    - percentage(%) -> 100% = 16px

## em (em): 

* em is a relative unit that is calculated based on the font size of the parent element.
* When you set an element's size in em, it's relative to the font size of its nearest parent with a specified font size.

**1em=16px**

example: I want 54px now for h1 tag --> 54/16 --> 3.375em

```html
h1 {
  font-size: 3.375em;
}

p {
  font-size: 2.25em;
}
```

I have parent element for li element and adding some pixel to parent element.

parent element pixel making as 10px

```html
<div class="parent">
    <ul>
        <li>This is Text</li>
        <li>This is Text</li>
        <li>This is Text</li>
        <li>This is Text</li>
    </ul>
</div> 

.parent{
    font-size:10px;
}

li{
    font-size:3em; // 3*10 -> 30px
}

```

## Root Em (rem) 
* rem is also a relative unit like em, but it's based on the font size of the root (html) element.
* Using rem ensures that the size is consistent throughout the entire document, making it especially useful for responsive design.  

```
16px = 100%;
1px = 6.25%;
10px = 62.5%

html {
    font-size: 62.5%; // 10px percentage value can change 
} 

/* 1rem = 10px ; */
 h1 {
    font-size: 5.4rem;
}

p {
    font-size: 3.6rem;
}

.parent {
    font-size: 20px;  // this will not change the child element based on parent element in rem this will work only in em
  } 

li {
    font-size: 4.4rem;
} 

```

## Percentage(%)
* Percentages are relative units based on the parent element's size or the containing block.
* Widely used in creating responsive layouts.

Example: width: 50%; sets an element's width to 50% of its parent's width. 

**100% = 16px** --> 100/16 -->  1px = 6.25%

```html
h1 {
  font-size: 337.5%;  // 54px required --> 54*6.25--> 337.5%
}

p {
  font-size: 225%;
}

li {
  font-size: 275%;
}
```

## IMPORTANT TIPS + NOTES

px provides fixed sizes and is not recommended for responsive design as it doesn't adapt to different screen sizes and font settings. However, it can be useful for precise control over small elements.

em is useful for relative sizing within the context of the parent element's font size. It allows for more flexible and scalable designs.

rem is the preferred choice for responsive design as it offers a consistent relative size based on the root font size. It's easier to maintain and provides better scalability.
