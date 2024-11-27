## HTML ENTITIES

HTML entities are codes used to represent special characters and symbols that have reserved meanings in HTML. These entities are especially important when you  want to display characters that might conflict with HTML syntax or when you want to display characters that aren't directly available on your keyboard. HTML entities are represented using an ampersand (&) followed by a code and a semicolon (;)

```html
&lt; 👉 Less than sign (<)
&gt; 👉 Greater than sign (>)
&amp; 👉 Ampersand (&)
&quot; 👉 Double quotation mark (")
&apos; 👉 Single quotation mark or apostrophe (')
&nbsp; 👉 Non-breaking space ( )
&copy; 👉 Copyright symbol (©)
&reg; 👉 Registered trademark symbol (®)
&trade; 👉 Trademark symbol (™)
&hearts; 👉 Heart symbol (♥) 
```

Example:

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>

<body>
    <p>This is an example of a &lt;p&gt; tag.</p>
    <p>&copy; 2023 All rights reserved.</p>
</body>

</html>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Entities Example</title>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Urbanist:wght@300;400;600;700;800;900&display=swap");

        html {
            font-family: "Poppins", sans-serif;
        }
    </style>
</head>

<body>
    <p>
        &lt;: Less than sign (<br />
        &gt;: Greater than sign (>)<br />
        &amp;: Ampersand (&amp;)<br />
        &quot;: Double quotation mark (")<br />
        &apos;: Single quotation mark or apostrophe (')<br />
        &nbsp;: Non-breaking &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;space ( )<br />
        &dollar;: Dollar Sign ($) <br />
        &copy;: Copyright symbol (©)<br />
        &reg;: Registered trademark symbol (®)<br />
        &trade;: Trademark symbol (™)<br />
        &hearts;: Heart symbol (♥, 💖)
    </p>
</body>

</html>

```