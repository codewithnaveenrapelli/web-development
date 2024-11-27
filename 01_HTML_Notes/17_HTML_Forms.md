## HTML Forms 

## Forms element
An HTML form is used to collect user input. The user input is used to sent to a server for processing the request.

```html
<form>

form elements

</form>
```
The ```<form>``` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

## input element
The ```<input>``` HTML element is used to create interactive controls for web-based forms to accept data from the user. We must write inside the tag

```<input type="text">```	Displays a single-line text input field

```<input type="radio">```	Displays a radio button (for selecting one of many choices)

```<input type="checkbox">```	Displays a checkbox (for selecting zero or more of many choices)

```<input type="submit">```	Displays a submit button (for submitting the form)

```<input type="button">```	Displays a clickable button

## Text Fields

The ```<input type="text">``` defines a single-line input field for text input.

Example:

```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```
## label Element

label element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focuses on the input element.

## Name Attribute for ```<input>```

Each input field must have a name attribute to submit the data to server

## Action Attribute

The action attribute defines the action to be performed when the form is submitted. form data is sent to a file on the server when the user clicks on the submit button.

```html
<form action="/script.js" method="get" autocomplete="on">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```
## Method Attribute

method attribute specifies the HTTP method to be used when submitting the form data.

The form-data can be sent as URL variables (with method="get") or as HTTP post transaction (with method="post").

The default HTTP method when submitting form data is GET

```html
<form action="/script.js" method="get" autocomplete="on">
```

## Autocomplete Attribute

autocomplete attribute specifies whether a form should have autocomplete on or off.

When autocomplete is on, the browser automatically complete values based on values that the user has entered before

```html
<form action="/script.js" method="get" autocomplete="on">
```

## Novalidate Attribute
The novalidate attribute is a boolean attribute.

When present, it specifies that the form-data (input) should not be validated when submitted.
```html
<form action="/script.js" novalidate>
```
```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Urbanist:wght@300;400;600;700;800;900&display=swap");

    html {
        font-family: "jost", sans-serif;
        background-color: #efefef;
    }

    h1 {
        font-weight: bold;
    }

    .sameclass {
        background-color: red;
    }
</style>

<body>
    <h1>HTML FORM</h1>
    <!-- Add Form Here -->
    <form>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" class="sameclass" placeholder="Enter your password" />
        </div>
        <div>
            <label for="number">max subject</label>
            <input type="number" class="sameclass" id="number" max="5" min="1" value="1" />
        </div>
        <div>
            <label for="gender">Gender</label>
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female
        </div>

        <div>
            <label for="hobbies"> Fav Hobbies: </label>
            <input type="checkbox" name="interest" value="music" /> Music
            <input type="checkbox" name="interest" value="sports" /> Sports
        </div>

        <div>
            <label for="country">Fav Country: </label>
            <select name="country" id="country">
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="uk">UK</option>
            </select>
        </div>

        <div>
            <label for="country">Select a Country:</label>
            <input type="text" id="country" name="country" list="countries" />
            <datalist id="countries">
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="uk">UK</option>
            </datalist>
        </div>

        <div>
            <label for="comment"> Message Us: </label>
            <textarea name="comments" rows="10" cols="100" placeholder="Enter your comments"></textarea>
        </div>

        <div>
            <label for="file">Select File</label>
            <input type="file" name="fileUpload" />
        </div>

        <input type="submit" value="Submit" />
        <!-- or -->
        <button type="submit">Submit</button>
    </form>
</body>

</html>
```

1: Text Input (```<input type="text" />```): Allows users to enter a single line of text. 

 2: Password Input (```<input type="password" />```): Hides the entered text for
secure password entry. 

3: Email Input (```<input type="email" />```): Validates and formats input as an email address. 

4:Number Input (```<input type="number" />```): Accepts numeric input and provides increment/decrement controls. 

5:Radio Buttons (```<input type="radio" />```): Allows users to choose a single option from a group of
options. 

6: Checkboxes (```<input type="checkbox" />```): Allows users to select
multiple options. 

7: Dropdowns (```<select> and <option>```): Provides a list of options for users to choose from.
  
8: ```<datalist>``` Provide a predefined list of options for autocomplete suggestions.

9: Textarea (```<textarea>```): Allows users to enter multiple lines of text.

10:File Upload (```<input type="file">```):  Lets users choose and upload files from their device.

11: Submit Button (```<input type="submit">```):  Submits the form data to the server.


