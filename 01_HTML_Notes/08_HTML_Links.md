## HTML Links (Anchor Link)

HTML links are hyperlinks.

When you click on a link and jump to another document.

The ```<a>``` tag defines a hyperlink, which is used to link from one page to another

syntax:

```html
<a href="url">Link Text</a>
```

## href attribute:

* Specifies the URL or destination the link points

# Absolute URLs vs. Relative URLs
```html
<h2>Absolute URLs</h2>
<a href="https://www.google.com/">Google</a>

<h2>Relative URLs</h2>
<p><a href="html_images.asp">HTML Images</a></p>
```

By default, links will appear as follows in all browsers:

* An unvisited link is underlined and blue
* A visited link is underlined and purple
* An active link is underlined and red

## HTML Links - target Attribute

By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.

The target attribute specifies where to open the linked document.

The target attribute can have one of the following values:

* _self - Default. Opens the document in the same window/tab as it was clicked
* _blank - Opens the document in a new window or tab
* _parent - Opens the document in the parent frame
* _top - Opens the document in the full body of the window

```html
<a href="www.google.com" target="_blank">Google</a>
```
## Link to an Email Address

* Use mailto: inside the href attribute to create a link that opens the user's email program (to let them send a new email)

```html
<a href="mailto:someone@example.com">Send email</a>
```

## Link Titles

* title attribute specifies extra information about an element

```html
<a href="www.google.com" target="_blank" title="open google">Google</a>
```

## download attribute 

* Suggests that the target will be downloaded when clicked

```html
 <a href="https://drive.google.com/drive/u/0/folders/1kJfV2QBpITEyCp5uf6JX2zf-Zd5QQGG" download>Download HTML Notes</a>
```        

## tel attribute

```html
<a href="tel:+1234567890">Call Us</a>
```



