## HTML Head Element

* In HTML head element is a container for the following elements.
```
<title>
<style>
<meta>
<link>
<script>
<base>
```    
* HTML Head Element is container for metadata and is placed between the ```<html>``` tag and ```<body>``` tag.
* HTML Metadata is data about the HTML document. Metadata is not displayed.
* Metadata typically defined the document title, character set, style,script and other meta information.

* title element defines the title of the document.

* style element is used to define style information for a single HTML page.

* link element defined relationship between current file and other file.

* meta element typically used to specify the character set page,description,keywords,author of the document and viewpoint settings.
```html
Examples
Define the character set used:

<meta charset="UTF-8">
Define keywords for search engines:

<meta name="keywords" content="HTML, CSS, JavaScript">
Define a description of your web page:

<meta name="description" content="website description">
Define the author of a page:

<meta name="author" content="naveen">
Refresh document every 30 seconds:

<meta http-equiv="refresh" content="30">
Setting the viewport to make your website look good on all devices:

<meta name="viewport" content="width=device-width, initial-scale=1.0">
Example of <meta> tags:

Example
<meta charset="UTF-8">
<meta name="description" content="website description">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="naveen">
```
* The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

* The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.

* The ```<base>``` element specifies the base URL and/or target for all relative URLs in a page
