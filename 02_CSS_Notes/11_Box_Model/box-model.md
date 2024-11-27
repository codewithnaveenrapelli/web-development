## CSS Box Model

The CSS Box model defines how elements are rendered and how their dimensions are calculated.

It describes the structure of an element as a rectangular box that has content, padding, a border, and a margin.

![Box Model](./css_box_model.png)

The box model consists of four main components, which are

## 1. Content
The innermost component of the box model is the actual content of the element. It can be text, image, video, etc.

The content area is defined by the width and height properties.

## 2. Padding
The space between the actual content and the border of the element is the padding.

The padding area is defined by the property padding.

### 1. shorthand Padding:
```html
padding: 10px;  
```   
👉 This sets 10 pixels of padding on all sides of the element.

### 2. Vertical and Horizontal Padding:  
```html
padding: 5px 10px;  
```
👉  This sets 5 pixels of padding on the top and bottom sides and 10 pixels on the right and left sides. */

## 3. top | left and right | bottom
```html
padding: 1px 2px 2px;
```
### 4. top | right | bottom | left 
```html
padding: 5px 1px 0 2px;
```
### 5. Individual Padding
```html
padding-top: 15px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 5px;
This sets different padding values for each side of the element.
```

- Spacing Elements: Padding is commonly used to add space between an element's content and its border, creating separation between elements on a web page.

- Button Styling: Padding is used to control the spacing inside buttons, making them visually appealing and comfortable to click.

- Text and Images: Padding can be applied to text and images to create spacing around them, improving readability and aesthetics.

- Responsive Design: Padding can be adjusted to create responsive layouts, ensuring content is appropriately spaced on different screen sizes.

- Creating Boxes and Panels: Padding is essential for defining the spacing inside boxes, panels, and containers.

In summary, the `padding` property in CSS is a versatile tool for controlling the spacing around an element's content. By using different values and techniques, you can achieve precise control over the layout and spacing of elements on your web page, improving both aesthetics and usability.


## 3. Border
The border surrounds the content and padding and gives the visual border of the element.

The border properties can be controlled using the border keyword.

Let understand the Each border property one by one.

### 1. Border Width

The border-width property controls the thickness of the border. You can specify it using units like pixels (px), ems (em), or percentages (%).

```html
border-width: 15px;
```

### 2. Border Style

The border-style property determines the style of the border. Common values include solid, dotted, dashed, double, groove, ridge, inset, and outset. Each style results in a different visual appearance for the border. */

```html
border-style: none;
border-style: hidden;
border-style: dotted;
border-style: dashed;
border-style: solid;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;

/* top and bottom | left and right */
border-style: dotted solid;

/* top | left and right | bottom */
border-style: hidden double dashed;

```

### 3. Border Color

The border-color property sets the color of the border. You can specify it using color names, hex codes, RGB values, or other color notations.

```html
border-color: #003180;
```

### Short-hand Syntax.
```html
border: [border-width] [border-style] [border-color];
```
Example:
```html
border: 15px solid #003180;
```

## Border-radius
The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.

### Radius is set for all 4 sides */
```html
border-radius: 10px;
```
### top-left-and-bottom-right | top-right-and-bottom-left.
```html
border-radius: 10px 20%;
```
### Creating Custom Radius for Each Corner:
top-left | top-right | bottom-right | bottom-left
```html
border-radius: 15px 5px 10px 20px; 
```

## 4. Margin

The `margin` property defines the space outside the element's border. It creates separation between the element and other elements in the layout.

Margins create extra space around an element, unlike padding, which creates extra space within an element.


### `margin: top right bottom left;`
```html
margin: 50px 40px 30px 60px;
```
- `top`: Specifies the margin on the top side.
- `right`: Specifies the margin on the right side.
- `bottom`: Specifies the margin on the bottom side.
- `left`: Specifies the margin on the left side.

### Three Values: margin: top right-left bottom;
```html
 margin: 50px 30px 60px;
```
- `top`: Specifies the margin on the top side.
- `right-left`: Specifies the margin on the right and left sides.
- `bottom`: Specifies the margin on the bottom side.

### Two Values: margin: top-bottom right-left;
```html
margin: 50px 30px;
```
- `top-bottom`: Specifies the margin on the top and bottom sides.
- `right-left`: Specifies the margin on the right and left sides.

### One Value: margin: value;
```html
margin: 50px;
```
If you provide a single value, it applies to all sides equally.



Auto Value: You can use margin: auto; to horizontally center an element within its container. This is commonly used for centering block-level elements.

Negative Margins: You can use negative margin values to overlap elements or pull elements closer to each other. However, be cautious with negative margins, as they can lead to unexpected layouts and should be used sparingly.

Collapsing Margins: When two adjacent margins meet, they can collapse into a single margin. This behavior is important to understand, especially when dealing with elements like paragraphs and headings. The larger of the two margins takes precedence.


## CSS box-sizing 

box-sizing is a property that controls how the total width and height of an element are calculated, including its content, padding, and border. It has two possible values: content-box (default) and border-box

### box-sizing: content-box.

In the default content-box value, an element's width and height are calculated based on its content area. Padding and border are added to the specified width and height.

This means that if you set the width of an element to 100 pixels, and then add 10 pixels of padding and a 2-pixel border, the element's total width will be 100 + 10 + 2 = 112 pixels.

### box-sizing: border-box.

When using border-box, an element's width and height include its content, padding, and border. Padding and border are subtracted from the specified width and height.

In this case, if you set the width of an element to 100 pixels, and then add 10 pixels of padding and a 2-pixel border, the content area will be adjusted to fit within the specified 100-pixel width, and the padding and border are contained within that.

When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.

```html
/* box model css  */
.section-one {
    width: 800px;
    background-color: #0f2c59;
    color: #fff;
    border: 20px solid #337ccf;
    padding: 50px;
    margin: 0 auto;
}
```

content+padding+border+margin = width

- Default behavior 👉  width = 800 + 50 + 50 + 20 + 20 + 150px + 150px  
- Default behavior 👉  height = 500 + 50 + 50 + 20 + 20 + 100px + 100px

## INTERVIEW QUESTIONS

1: Explain what the CSS Box Model is and its components.

2: What is the purpose of the box-sizing property in CSS? ⭐⭐

The box-sizing property controls how the total width and height of an element are calculated. The two values it can take are content-box (default) and border-box. content-box calculates the total size including padding and border, while border-box calculates the total size including only padding.

3: How can you make an element's content box 300 pixels wide with a 10-pixel border and 20-pixel padding?
```html
 section {
    width: 300px;
    border: 5px solid red;
    padding: 10px;
    box-sizing: border-box;
  }
```
4: How can you globally apply box-sizing: border-box; to all elements on a web page? ⭐⭐⭐

Here comes the Universal Operator

```html
*{
    property:value
}
```