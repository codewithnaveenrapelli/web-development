## Combinator in CSS

A combinator is something that explains the relationship between the selectors.

A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

Types of Combinator

1. Descendant Selector
2. Child Selector (>)
3. Adjacent Sibling Selector(+)
4. General Sibling Selector(~)
5. universal selector(*)

### 1. Descendant Selector
The descendant selector matches all elements that are descendants of a specified element.

selects all ```<p>``` elements inside ```<div>``` elements: 

Example
```html
div p {
  background-color: yellow;
}
```

### 2.Child Selector (>)
The child selector selects all elements that are the children of a specified element.

selects all ```<p>``` elements that are children of a ```<div>``` element:

Example
```html
div > p {
  background-color: yellow;
}
```

### 3.Adjacent Sibling Selector (+)
The adjacent sibling selector is used to select an element that is directly after another specific element.

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

selects the first ```<p>``` element that are placed immediately after ```<div>``` elements:

Example
```html
div + p {
  background-color: yellow;
}
```

### 4.General Sibling Selector (~)
The general sibling selector selects all elements that are next siblings of a specified element.

selects all ```<p>``` elements that are next siblings of ```<div>``` elements: 

Example
```html
div ~ p {
  background-color: yellow;
}
```
### 5. universal selector(*)

Example:
```html
*{
  padding:0;
  margin:0;
}

```

