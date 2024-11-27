## CSS LIST STYLING 

In HTML, there are two main types of lists:

1. unordered lists (```<ul>```) - the list items are marked with bullets
2. ordered lists (```<ol>```) - the list items are marked with numbers or letters

The list-style-type property specifies the type of list item marker.

he list-style-image property specifies an image as the list item marker.

The list-style-position property specifies the position of the list-item markers (bullet points).

The list-style property is a shorthand property. It is used to set all the list properties in one declaration.

```html
ul {
    list-style-type: decimal;
    list-style-position: inside;
    list-style-image: url("../images/mario-run.gif");
}
```
