## Image Tag

* Image Tag is used to embed an image in a web page.
* Image are not technically inserted into a web page. Images are linked to web pages.
* Image tag is empty tags. it contain only attribute it does not have a closing tags

* image tag has two attributes.
    - src -- Specifies the path to the image.
        - src -- absolute path
        - src -- relative path
    - alt -- Specifies an alternative text for the image if browser cannot find an image, it will display alt value.
```html
<!-- Relative URL -->
<img src="/web-developer/HTML_Notes/image/google_chrome.png" alt ="google image">
```

## Image Size - Width and Height

The width and height attributes always define the width and height of the image in pixels.

```html
<!-- Relative URL -->
<img src="/web-developer/HTML_Notes/image/google_chrome.png" alt ="google image" width="500" height="500">
```

## Image as a Link
* To use an image as a link, put the ```<img>``` tag inside the ```<a>``` tag
```html
<!-- Relative URL -->
<a href="www.google.com">
<img src="/web-developer/HTML_Notes/image/google_chrome.png" alt ="google image" width="500" height="500"></a>
```

## Image Floating
* Use the CSS float property to let the image float to the right or to the left of a text.
```html
<!-- Relative URL -->
<a href="www.google.com">
<img src="/web-developer/HTML_Notes/image/google_chrome.png" alt ="google image" width="500" height="500" style="float:left"></a>
```
## Image map
* An image map is an image with clickable areas. The areas are defined with one or more ```<area>``` tags.

## How does it work?

The idea behind an image map is that you should be able to perform different actions depending on where in the image you click.

To create an image map you need an image, and some HTML code that describes the clickable areas.

## Image
* Create a image and you must add usemap attribute and value for it starts with # symbol
```html
<img src="/web-developer/HTML_Notes/image/google_chrome.png" usemap="#workmap" alt="google image" width="500"
    height="500">
```    
## Create Image Map

```html
<map name="workmap">
```
* The name attribute must have the same value as the <img>'s usemap attribute .

## Areas

Add the clickable areas is defined using an ```<area>``` element.

## Shape
You must define the shape of the clickable area, and you can choose one of these values:

* rect - defines a rectangular region
* circle - defines a circular region
* poly - defines a polygonal region
* default - defines the entire region

```html
<img src="/web-developer/HTML_Notes/image/google_chrome.png" usemap="#workmap" alt="google image" width="500"
    height="500">
  <map name="workmap">
    <area shape="rect" coords="34,44,270,350" alt="Computer" href="06_Entities.html">
    <area shape="rect" coords="290,172,333,250" alt="Phone" href="08_Picture.html">
    <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="09_figure.html">
  </map>
``` 
## Background Image on a HTML element

* To add a background image on an HTML element, use the HTML style attribute and the CSS background-image property.
```html
<p style="background-image: url('img_girl.jpg');">
```
To avoid the background image from repeating itself, set the background-repeat property to no-repeat.

```html
<style>
body {
  background-image: url('example_img_girl.jpg');
  background-repeat: no-repeat;
}
</style>
```
## Background Cover

If you want the background image to cover the entire element, you can set the background-size property to cover.

```html
<style>
body {
  background-image: url('img_girl.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
```

## Picture Element
This element allows you to display different pictures for different devices or screen sizes

```<picture>``` element contains one or more ```<source>``` elements, each referring to different images through the srcset attribute. This way the browser can choose the image that best fits the current view and/or device.

Each ```<source>``` element has a media attribute that defines when the image is the most suitable

```html
 <picture>
        <source srcset="./images/html.webp" type="image/webp" />
        <source srcset="./images/html.jpg" type="image/jpg" />
        <source srcset="./images/html.jpeg" type="image/jpeg" />
        <source srcset="./images/html.svg" type="image/svg" />
        <img src="./images/html.png" alt="Images" width="500" />
</picture>
```   





