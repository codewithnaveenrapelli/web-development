## HTML Tables

* The ```<table>``` in HTML allow to arrange the data in form of rows and columns

* A table in HTML consists of table cells inside rows and columns.

## Table Cells
* Each table cell is defined by a ```<td>``` stand for table data and a ```</td>``` tag.

* Everything between ```<td>``` and ```</td>``` are the content of the table cell.

```css
<table>
  <tr>
    <td>Emil</td>
    <td>phone</td>
    <td>address</td>
  </tr>
</table>
```
## Table Rows

* Each row start with <tr> and ends with </tr> tag.

* tr stands for table row

```css
<table>
  <tr>
    <td>Age</td>
    <td>Age</td>
    <td>Age</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
```

## Table Header
* th stands for table header
```css
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Naveen</td>
    <td>27</td>
    <td>mumbai</td>
  </tr>
  <tr>
    <td>santosh</td>
    <td>28</td>
    <td>Hyderabad</td>
  </tr>
</table>
```
* By default, the text in ```<th>``` elements are bold and centered, but you can change that with CSS.

## Table Border

## How To Add a Border

* To add a border, use the CSS border property on table, th, and td elements.

```css
table, th, td {
  border: 1px solid black;
}
```
## Collapsed Table Borders

* To avoid having double borders like in the example above, set the CSS border-collapse property to collapse.
```css
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
```

## Style Table Borders
```css
table, th, td {
  border: 1px solid white;
  border-collapse: collapse;
}
th, td {
  background-color: #96D4D4;
}
```
## Round Table Borders
```css
table, th, td {
  border: 1px solid black;
  border-radius: 10px;
}
```
* Skip the border around the table by leaving out table from the css selector.

## Dotted Table Borders
* With the border-style property, you can set the appearance of the border.
```html
 th, td {
  border-style: dotted;
}
```
## HTML Table Width
* To set the width of a table, add the style attribute to the ```<table>``` element.

```css
<table style="width=100%">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Naveen</td>
    <td>27</td>
    <td>mumbai</td>
  </tr>
  <tr>
    <td>santosh</td>
    <td>28</td>
    <td>Hyderabad</td>
  </tr>
</table>
```

## HTML Table Row Height
* To set the height of a specific row, add the style attribute on a table row element.

```css
<table style="width:100%">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr style="height:200px">
    <td>Naveen</td>
    <td>27</td>
    <td>mumbai</td>
  </tr>
  <tr>
    <td>santosh</td>
    <td>28</td>
    <td>Hyderabad</td>
  </tr>
</table>
```
## HTML Table Headers

* Table headers are defined with th elements. Each th element represents a table cell.

## Vertical Table Headers

```css
<table style="width:100%">
  <tr>
    <th>Name</th>
    <td>Naveen</td>
    <td>santosh</td>
  </tr>
  <tr style="height:200px">
    <th>Age</th>
    <td>27</td>
    <td>28</td>
  </tr>
  <tr>
    <th>City</th>
    <td>mumbai</td>
    <td>Hyderabad</td>
  </tr>
</table>
```
## Align Table Headers

* By default, table headers are bold and centered:
```css
th {
  text-align: left;
}
```

## HTML Table Colspan & Rowspan

* use the colspan attribute on the ```<th>``` element
```css
<table style="width:100%">
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr style="height:200px">
    <td>Naveen</td>
    <td>27</td>
    <td>mumbai</td>
  </tr>
  <tr>
    <td>santosh</td>
    <td>28</td>
    <td>Hyderabad</td>
  </tr>
</table>
```
## Rowspan
```css
<table style="width:100%">
  <tr>
    <th>Name</th>
    <td>Naveen</td>
    <td>santosh</td>
  </tr>
  <tr style="height:200px">
    <th rowspan="2">Age</th>
    <td>27</td>
    <td>28</td>
  </tr>
  <tr>
    <th>City</th>
    <td>mumbai</td>
    <td>Hyderabad</td>
  </tr>
</table>
```
## LIST OF DEPRECATED TAGS - HTML TABLES
```css
<table align="...">: Used to horizontally align the table within its containing element.
<tr align="...">: Used to horizontally align the content of a table row.
<td align="...">: Used to horizontally align the content of a table cell.
<th align="...">: Used to horizontally align the content of a table header cell.
<bgcolor="...">: Used to set the background color of a table, row, or cell.
<border="...">: Used to define the border width of a table.
<frame="...">: Used to specify whether a table should have outer frames.
<rules="...">: Used to define the presence and types of horizontal and vertical rules within a table.
<width="...">: Used to set the width of a table, row, or cell. 
cellspacing & cellpadding for the cell padding and outer spacing
```