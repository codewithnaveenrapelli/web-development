## HTML Lists

* HTML lists allow to group a set of related items in lists.
* HTML List are classified into two ways.
    - Ordered list
    - UnOrdered list

## UnOrdered List.

* An unordered list starts with the ```<ul>``` tag. Each list item starts with the ```<li>``` tag.
* list items will be marked with bullets point by default.
* we can change default value by using css list-style-type
|
- disc -->	Sets the list item marker to a bullet (default)
- circle -->	Sets the list item marker to a circle
- square -->	Sets the list item marker to a square
- none--> 	The list items will not be marked

```html
<ul style="list-style-type:disc">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>
```    
## Ordered List

* An ordered list starts with the ```<ol>``` tag. Each list item starts with the ```<li>``` tag.

* list items will be marked with numbers by default.

- type="1" -->	The list items will be numbered with numbers (default)
- type="A" -->	The list items will be numbered with uppercase letters
- type="a" -->	The list items will be numbered with lowercase letters
- type="I" -->	The list items will be numbered with uppercase roman numbers
- type="i" -->	The list items will be numbered with lowercase roman numbers


```html
<ol type="1">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ol>
```  

## Description Lists

* The ```<dl>``` tag defines the description list, the ```<dt>``` tag defines the term (name), and the ```<dd>``` tag describes each term.

```html
<dl>
  <dt>naveen</dt>
  <dd>- black hot drink</dd>
  <dt>love</dt>
  <dd>- white cold drink</dd>
</dl>
```
## Nested HTML Lists

```html
<ul>
  <li>Coffee</li>
  <li>Tea
    <ul>
      <li>Black tea</li>
      <li>Green tea</li>
    </ul>
  </li>
  <li>Milk</li>
</ul>
```




