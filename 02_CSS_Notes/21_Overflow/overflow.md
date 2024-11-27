## OVERFLOW IN CSS

 The overflow property in CSS is used to control how content overflows its containing element when it doesn't fit within the available space. It's a useful property for handling content that exceeds its container's dimensions. 

 ## Overflow: Visible (Default)
 
 This is the default behavior where content can overflow its container without any clipping. Use it when you want content to extend beyond its container's boundaries.  
```css
 .container {   
    overflow: visible; 
} 
```

 ## Overflow: Hidden: 
 Content that overflows the container is hidden and not visible. 
 Useful when you want to hide extra content that doesn't fit within a fixed-size container. 
```css
 .container {   
    overflow: hidden; 
} 
```

## Overflow: Scroll:
 Scrollbars (both horizontal and vertical) are added to the container, allowing users to scroll to see the hidden content. 

 Use it when you want to display all content and provide a scrolling mechanism. 
```css
 .container {  
    overflow: scroll; 
    } 
```
 ## Overflow: Auto: 

 Scrollbars are added only when content overflows the container. 
 
 It's a combination of visible (no scrollbars if content fits) and scroll (scrollbars when content overflows). Ideal for creating scrollable containers only when needed. 
```css
 .container {  
    overflow: auto; 
    } 
```

```css
  /* our code will start from here  */
    overflow: hidden;
    overflow-y: scroll;
    overflow-x: scroll;
    overflow: scroll;
    white-space: nowrap;
    overflow: auto;
 ```   