## CSS Positions

The CSS positions allow you to control the placement of an element on the web page.

It helps to determine how elements are placed inside the container element and how they interact with the other elements on the page.

There are various types of position property values.

## Static(Default)
The elements are positioned according to the normal flow of the document.

```html
selector {
      position: static;
}
```

## Relative
Elements are positioned relative to the normal position in the document.

You can use the top, right, bottom, and left properties to move the element from its original position.

Syntax:
```
selector {
      position: relative;
}
```

## Absolute
Elements are positioned relative to the closest positioned ancestor (parent), which means we need to have a parent element with a positioning other than 'static'.

Note: An absolutely positioned element is removed from the normal flow.

```
 <section class="parent-div">
    <div class="child child-1">child 1</div>
    <div class="child child-2">child 2</div>
    <div class="child child-3">child 3</div>
    <div class="child child-4">child 4</div>
    <div class="child child-5">child 5</div>
</section>

#parent-div{
    position:relative;
}
.child {
    position: absolute;
    top:10px;
    left:10px;
}

```

## Fixed
Elements are positioned relative to the viewport (screen) and do not move when the page is scrolled.

This is useful for creating elements like fixed headers or footers.

You can use the top, right, bottom, and left properties to specify the exact position.

```
/* position fixed start here  */
    position: fixed;
    top: 0;
```

## Sticky (position: sticky;).

sticky are initially positioned according to the normal flow, but they become "sticky" and stay within the viewport once they reach a specified scroll position.

You can use the top, right, bottom, and left properties to set the stickiness behavior.

```
position: sticky;
top: 0;
```
## Static (position: static;).
This is the default value for all elements.

Elements with position: static are positioned according to the normal document flow.

They are not affected by the top, right, bottom, or left properties.
