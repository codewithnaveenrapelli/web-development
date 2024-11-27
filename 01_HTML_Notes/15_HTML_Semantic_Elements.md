## HTML Semantic Elements

## What are Semantic Elements?

A Semantic element clearly describe the meaning of the element

Classified into two types:

    - non-semantic element
    - semantic element

## semantic element.

Semantic elements are important part of modern web development as they provide a clearer structure to web documents and improve accessibility, search engine optimization, and styling
```html
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Web Page</title>
</head>

<body>
    <header>
        <!-- Header content goes here -->
        <nav>
            <!-- Navigation menu goes here -->
        </nav>
    </header>

    <main>
        <!-- Main content of the page goes here -->
        <article>
            <!-- Article content goes here -->
        </article>

        <section>
            <!-- Section content goes here -->
        </section>
    </main>

    <aside>
        <!-- Sidebar content goes here -->
    </aside>

    <footer>
        <!-- Footer content goes here -->
    </footer>
</body>

</html>

```

Example:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DevJunctionPoint - Best for Web Developers</title>
    <style>
        /* Your CSS styles here */
    </style>
</head>

<body>
    <header>
        <div>
            <a href="https://devjunctionpoint.blogspot.com/" target="_blank">
                <img src="./images/logo.png" alt="logo" />
            </a>
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        </nav>
    </header>
    <!-- main section of body  -->
    <main>
        <section class="hero-section">
            <h1>I am naveen rapelly</h1>
            <p>
                This website is all about Website Development,
                Tricks, Designs Principle, Source Code sales and Programming.
            </p>
            <button>see my works</button>
            <a href="#"> <button>visit youtube</button></a>
        </section>

        <article>
            <h2>Why Choose web development</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia eum laborum totam ratione
                ipsa quae error inventore, itaque illo!.
            </p>
        </article>

        <aside>
            <h3>Latest</h3>
            <p>Check: "Building Responsive Web Layouts."</p>
        </aside>
    </main>

    <footer>
        <p>&copy; 2023 All right reserved</p>
    </footer>
</body>

</html>

```

## non-semantic element:

non-semantic elements which does not have clear definition or meaning.

Example:
```<div>``` and ```<span>``` - Tells nothing about its content.

