# What is CSS?

* CSS stands for Cascading Style Sheets. It is a stylesheet language that is used to describe the visual presentation of a web page written in HTML (Hypertext Markup Language).

* HTML creates the structure of the page, while CSS adds styling to that structure
## Inline CSS
Inline CSS is used to add custom properties to specific elements. The added style will only reflect on that particular element only.
```html
<body>
    <h1>Basic of CSS</h1>
    <p class="para" style="color: red;">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, quidem dolorum? Cum ducimus cumque nobis
        architecto, earum tenetur voluptatem vel voluptates aliquid enim inventore repudiandae eius culpa asperiores
        ipsam fuga quasi molestiae nam impedit non ad, ex consequuntur. Aspernatur.
    </p> 
</body>    
```
## Internal CSS

Internal CSS is used to apply custom style to the multiple elements on the same page. The style can be used throughout the HTML page.

Internal CSS is defined in a style block, which will be inside the head section.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basics</title>
    <!-- Internal CSS -->
    <!-- <style>
        h1 {
            color: aqua;
        }
    </style> -->
</head>
```
## External CSS

External CSS works similarly to internal CSS but with a twist. Instead of adding the styles within the HTML file, we create a separate file with .css extension. This file will hold all the styling details. Then, we link this file to the HTML page, giving it the instructions on how to look. 

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basics</title>
    <!-- External CSS -->
    <link rel="stylesheet" href="style.css">
</head>
```

