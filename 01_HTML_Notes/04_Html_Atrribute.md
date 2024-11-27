## HTML Attribute

HTML attributes provide additional information about HTML elements.

* All HTML elements can have attribute.
* Attribute provide additional information about the element.
* Attribute are always specified in the start tag.
* Attribute usually come in key/value pairs like name="value"

## The href Attribute

```<a>``` tag defines a hyperlink. The href attribute specifies the url of the page to link.

Example:

```html
<a href="www.google.com">Visit Google Website</a>
```

## Src Attribute:

The Img tag is used to embed an image in an html page. the src attribute specifies the path to the image to be displayed.

```html
<img src="path.png">
```
There are two ways to specify the url in src attribute.

1. Absolute URL: Link to an external image that is hosted on another website 
example: https://www.google.com/images/image.png
2. Relative URL: Link to an image that is hosted within the website. url does not include domain name in relative url.

## alt attribute:

alt attribute for the image tag gives an alternative text for an image if image not loading on the page.

```html
<img src="path.png" alt="image">
```

## style Attribute

The style attribute is used to add styles to an element, such as color, font, size, and more.

```html
<p style="color:red;">This is a red paragraph.</p>
```

## lang Attribute

You should always include the lang attribute inside the <html> tag, to declare the language of the Web page. This is meant to assist search engines and browsers.
```html
<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>
```
Country codes can also be added to the language code in the lang attribute. So, the first two characters define the language of the HTML page, and the last two characters define the country.
```html
<!DOCTYPE html>
<html lang="en-US">
<body>
...
</body>
</html>
```
## title Attribute
The title attribute defines some extra information about an element.

The value of the title attribute will be displayed as a tooltip when you mouse over the element.

```html
<p title="I'm a tooltip">This is a paragraph.</p>
```
## id attribute

id attribute is used to define unique values to identify in html element

```html
<p title="I'm a tooltip" id="para">This is a paragraph.</p>
```

## class attribute

class attribute is used to defined for styling or write some js functionality. class attribute can be multiple name.

```html
<p title="I'm a tooltip" id="para">This is a paragraph.</p>
```


