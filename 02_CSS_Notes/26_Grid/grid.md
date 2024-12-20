## Grid in CSS

CSS Grid Layout, often referred to simply as Grid, is a two-dimensional layout system in CSS that allows you to design complex web layouts with rows and columns. It provides a highly flexible and precise way to arrange and align content on a webpage.

## 1:Two-Dimensional Grid:

Unlike traditional layout models, such as the box model and Flexbox, CSS Grid is a two-dimensional layout system. It simultaneously manages both rows and columns.

## 2: Grid Container and Grid Items:

A grid layout consists of a grid container and its grid items.

The grid container is an element that contains grid items. It's often an immediate parent element.

Grid items are the children of the grid container, and they are positioned within the grid.

## 3: Defining the Grid: 

 To create a grid, you first define the columns and rows.

 Use the grid-template-columns and grid-template-rows properties to set the sizes and structure of the grid. 
 
 Columns and rows can be specified as fixed sizes (e.g., pixels) or flexible sizes (e.g., percentages, fractions). 

## 4: Grid Lines and Tracks: 

 Grid lines are the dividing lines between columns and rows. 

 Tracks are the spaces between grid lines where content can be placed. 
 
 You can name grid lines and tracks for better organization. 

## 5. Placing Grid Items: 

 Grid items are placed within the grid using the grid-column and grid-row properties. 

 You can also use the shorthand property grid-area to specify both column and row placement in a single declaration. 

## The grid-area property specifies a grid item's size and location in a grid layout, and is a shorthand property for the following properties:

grid-row-start
grid-column-start
grid-row-end
grid-column-end 

## Explicit vs Implicit grid  

## 6. Grid Gaps: 

Grid gaps are the spaces between grid items and tracks.

You can control gaps between columns and rows separately using the grid-column-gap and grid-row-gap properties or the shorthand grid-gap. 

This property is a shorthand for the following CSS properties: The gap CSS shorthand property sets the gaps (gutters) between rows and columns. 

column-gap 
row-gap 
gap 

## 7. Grid Auto: 

Grid items can be automatically placed using grid-auto-flow. By default, they fill rows, but you can change this behavior to fill columns. 

grid-auto-rows and grid-auto-columns control the size of automatically placed items. 

## 8. Responsive Grids: 

CSS Grid is highly responsive. Grid items can be repositioned and resized automatically as the viewport size changes. 

Use media queries to adjust grid layouts for different screen sizes. 

## 9. Alignment and Justification: 

You can align and justify content within grid items and the grid container itself. 

Properties like justify-items, align-items, justify-content, and align-content help you control alignment and spacing. 
