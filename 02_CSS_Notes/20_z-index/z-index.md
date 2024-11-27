## z-index CSS

The z-index property in CSS is used to control the stacking order of elements on a web page. It determines which elements should appear in front of or behind other elements when they overlap in the same space. Elements with higher z-index values are placed in front of elements with lower z-index values.

## NOTES + TIPS
Positioned Elements: To use z-index, an element must have a position value other than static (e.g., relative, absolute, fixed, or sticky). Positioned elements can be moved in the stacking order using z-index. 

## Numeric Values:

You can assign numeric values to z-index. Elements with higher numeric values will appear in front of elements with lower values.

## Negative Values:
You can also use negative values for z-index. Elements with lower (more negative) values will appear in front of elements with higher (less negative) values.

```css
.parent-div {
    position: relative;
}

.child-2 {
    z-index: 1;
}

.child-3 {
    z-index: 2;
}

.child-1 {
    z-index: 3;
}
```