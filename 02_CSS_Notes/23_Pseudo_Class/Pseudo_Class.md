## Pseudo Classes in CSS

1. Link (`a:link`): This is the default state for an unvisited link. 

2. Visited (`a:visited`): This state applies to a link that the user has already visited. 

3. Hover (`a:hover`): This state triggers when the user hovers their mouse pointer over a link. 

4. Active (`a:active`): This state is triggered when the user clicks on a link. 

5. :hover - This pseudo-class is used for styling an element when a user hovers their mouse over it. 
```css 
a:hover {    
    color: #A78295; Change text color on hover  
} 
```
 6. :first-child - Selects the first child element of its parent. 

 7. :last-child - Selects the last child element of its parent. 

 8. :nth-child(n) - Selects elements based on their position within a parent element, where "n" is a numeric value. 

 9. :first-of-type - Selects the first element of its type within its parent. 

 10. :last-of-type - Selects the last element of its type within its parent. 

 11. :nth-of-type(n) - Selects elements of a specified type based on their position within a parent. 

```css

/*? List of Pseudo Class  */

.hero-content a:link {
    color: rgb(10, 10, 10);
}

.hero-content a:visited {
    color: #d67e03;
}

.hero-content a:hover {
    color: #0062ff;
}

.hero-content a:active {
    color: #f31559;
}

.content-1:first-child {
    color: red;
}

.content-1 ul:first-child {
    color: Red;
  }

.content-1 p:first-child {
    color: red;
}

.content-1 p:last-child {
    color: blue;
}

```
