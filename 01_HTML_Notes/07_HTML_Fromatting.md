## HTML Formatting

HTML formatting involves enhancing the visual presentation of text with special meaning. It enables text manipulation for improved aesthetics, eliminating the need for CSS. Various formatting tags within HTML facilitate techniques such as bold, italics, and underline, enhancing the text's visual prominence and emphasis

1. ```<b>``` - Bold text
2. ```<strong>``` - Important text
3. ```<i>``` - Italic text
4. ```<em>``` - Emphasized text
5. ```<mark>``` - Marked text
6. ```<small>``` - Smaller text
7. ```<del>``` - Deleted text
8. ```<ins>``` - Inserted text
9. ```<sub>``` - Subscript text
10. ```<sup>``` - Superscript text

1. ```<b>``` - Bold text

* ```<b>``` element defines bold text, without any extra importance

2. ```<strong>``` - Important text

* ```<strong>``` element defines text with strong importance. The content inside is typically displayed in bold

3. ```<i>``` - Italic text

* ```<i>``` element defined the text in italic format.

4. ```<em>``` - Emphasized text

* ```<em>``` element defines emphasized text

5. ```<mark>``` - Marked text

* ```<mark>``` element defines text that should be marked or highlighted:

6. ```<small>``` - Smaller text

* ```<small>``` element defines the smaller text.

7. ```<del>``` - Deleted text

* ```<del>``` element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text

8. ```<ins>``` - Inserted text

* ```<ins>``` element defines a text that has been inserted into a document. Browsers will usually underline inserted text

9. ```<sub>``` - Subscript text

* ```<sub>``` element defines subscript text. Subscript text appears half a character below the normal line

10. ```<sup>``` - Superscript text

* ```<sup>``` element defines superscript text. Superscript text appears half a character above the normal line

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Formatting</title>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Urbanist:wght@300;400;600;700;800;900&display=swap");

        html {
            font-family: "Poppins", sans-serif;
        }
    </style>
</head>

<body>
    <!--? Bold and Italic:   <strong>: Represents strong importance. Text inside this tag is typically displayed in bold.          <em>: Represents emphasized text. Text inside this tag is usually displayed in italics. -->
    <hr />
    <p>This is <strong> important </strong> and <em> emphasized </em> text.</p>

    <!--? Underline and Strikethrough:
    <u>: Represents underlined text.
    <s>: Represents strikethrough text (crossed out). -->
    <hr />
    <p>This is <u> underlined </u> and <s> strikethrough </s> text.</p>

    <!--? Subscript and Superscript:
    <sub>: Represents subscript text (lower and smaller).
    <sup>: Represents superscript text (upper and smaller). -->
    <hr />
    <p>the water 👉 H<sub>2</sub>O</p>
    <p>Theory of Relativity 👉 e=mc<sup>2</sup></p>

    <!--TODO How to write Water Formula and Theory of Relativity? -->

    <!--? Preformatted Text:  <pre>: Represents preformatted text, preserving spaces and line breaks. -->
    <!--* <kbd> Tag: The <kbd> tag represents keyboard input, indicating that the enclosed content should be treated as something a user would type on a keyboard. It is often used to show examples of keyboard commands or shortcuts. -->
    <!--? <abbr> Tag: The <abbr> tag stands for "abbreviation" and is used to mark up abbreviations or acronyms in your content.   -->

    <hr />
    <pre>
      To
      The principal
      KVS School
      
      Date : 23 Aug. 2023
      
      Subject : Leave Application for two Days.
      
      Respected sir/madam
      
      With due Respect, I beg to say that I am a student of class 10th in your school. I am not feeling well today and also have some weakness. Hence I request you to please grant me two days leave.
      
      I hope you will consider my application. I will definitely try to remain present after 2 days.
      
      Thanking you.
      
      Yours obediently
      Name : naveen rapelly
      Class : 10th
      </pre>
    <hr />
    <p>To save a file, press <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>

    <hr />
    <p>
        <abbr title="World Health Organization">WHO</abbr> is an international
        organization.
    </p>

    <!--? <mark> Tag: 
      The <mark> tag is used to highlight or mark a portion of text to draw attention to it. It typically results in a yellow background color behind the marked text, making it stand out visually. -->
    <hr />
    <p>Highlight <mark>this text</mark> to emphasize it.</p>

    <!--? <small> Tag: 
      The <small> tag is used to indicate that the enclosed text should be displayed in a smaller font size. It's often used for fine print, legal disclaimers, or less important information. -->
    <hr />
    <p>This is a <small>smaller font size</small> text.</p>

    <!--? <del> Tag:
      The <del> tag is used to represent deleted or removed text in a document. Browsers typically render the text with a strike-through line to indicate that it has been deleted. -->
    <hr />
    <p><del>My favorite color is green red.</p></del>

    <!--? Inline Styles: 
      You can use inline CSS styles to apply formatting directly to specific text elements. -->
    <hr />
    <p style="color: green">
        Inline style is one of the way to style HTML content
    </p>
</body>

</html>
```