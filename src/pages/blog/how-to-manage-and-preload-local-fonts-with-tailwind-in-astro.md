---
layout: '../../layouts/BlogPost.astro'
title: 'How to Manage and Preload Local Fonts with Tailwind in Astro'
description: 'First, we got to grab a font. The most convenient way I’ve discovered is through google-webfonts-helper. Go there and download a font that you want. We are going to be using Open Sans as an example. Specifically the one with a .woff2 extension. Because it is the most compressed format with a wide support.'
pubDate: '29 November, 2022'
updatedDate: '1 December, 2022'
heroImage: '/how-to-manage-and-preload-local-fonts-with-tailwind-in-astro.jpg'
svg: 'how-to-manage-and-preload-local-fonts-with-tailwind-in-astro'
---

## [Prerequisites](#prerequisites)

An Astro project with a Tailwind integration.

## [Downloading Assets](#downloading-assets)

First, we got to grab a font. The most convenient way I've discovered is through <a href="https://gwfh.mranftl.com/fonts" target="_blank" rel="noopener">google-webfonts-helper</a>. Go there and download a font that you want. We are going to be using Open Sans as an example. Specifically the one with a <mark>.woff2</mark> extension. Because it is the most compressed format with a wide support.

Create a <mark>fonts</mark> folder in your <mark>public</mark> directory. Extract your font there.

```
public
  fonts
    open-sans.woff2
```

## [Configuring Tailwind](#configuring-tailwind)

By default, Astro is injecting Tailwind directives on every page. And we don't have access to it. Let's change it.

Open your <mark>astro.config.mjs</mark> and edit tailwind configuration.

```coffee
integrations: [
  tailwind({
    config: {
      applyBaseStyles: false,
    },
  }),
],
```

Now we need to add tailwind and our local fonts into our main <mark>.css</mark> file. (If you don't have one, create it in the <mark>src/styles/main.css</mark>)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: block; /* This property will help us not flash unstyled text for a couple hundred milliseconds, and then it would act like font-display: swap */
    src: url('/fonts/open-sans.woff2') format('woff2');
  }
}
```

You want to make sure that this file is getting imported on every page you want to have it on. Put it into `<Head/>` or `<Layout/>` component. Also, you can import it on a page directly. Like this:

```coffee
import '../styles/main.css';
```

For convenience we can add the font to <mark>tailwind.config.cjs</mark>

```coffee
theme: {
  extend: {
    fontFamily: {
      opensans: ['"Open Sans"', 'sans-serif'],
    },
  },
},
```

And later use it like so:

```html
<div class="font-opensans"></div>
```

## [Preloading the font](#preloading-the-font)

Add this `<link>` to the page where you are going to be using the font (for example `index.astro`) or you can add it to whatever component you want.

```html
<head>
  <!-- rest of the head -->
  <link
    rel="preload"
    href="/fonts/open-sans.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  />
</head>
```

## [That's it](#thats-it)

Now see your fonts load blazingly fast.
