## Iframe 

* The ```<iframe>``` HTML element represents a nested browsing context, embedding another HTML page into the current one.

syntax:

```html
<iframe src="url" title="description"></iframe>
```

* keep in mind we cannot embed all the sites ex. google, yt direct 

# Iframe - Set Height and Width

* Use the height and width attributes to specify the size of the iframe.

```html
<iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>
```
## Iframe - Target for a Link

* The target attribute of the link must refer to the name attribute of the iframe.

```html
<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>

<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>

```