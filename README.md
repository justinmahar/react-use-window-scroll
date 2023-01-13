<h2 align="center">
  ↕️ React Use Window Scroll
</h2>
<h3 align="center">
  React hooks for scrolling the page to any location, or by any amount.<br/>Supports smooth scrolling.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-use-window-scroll" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-use-window-scroll.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-use-window-scroll/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-use-window-scroll/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-use-window-scroll/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>&nbsp;
  <a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-use-window-scroll/)**.

[![Demo](https://justinmahar.github.io/react-use-window-scroll/demo.gif "Demo")](https://justinmahar.github.io/react-use-window-scroll/?path=/story/hooks-usescrollto--page#hook-example)

👁️ **[Live Demo](https://justinmahar.github.io/react-use-window-scroll/?path=/story/hooks-usescrollto--page#hook-example)**

## Overview

This package includes two hooks for scrolling the page to any coordinates, or by any amount. They both use the the [Window Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window)'s scroll functions and support using [ScrollToOptions](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions) for smooth scrolling implemented natively by the browser.

- [`useScrollBy`](https://justinmahar.github.io/react-use-window-scroll/?path=/story/hooks-usescrollby--page) - Returns a function to scroll the page up or down by any amount, in pixels. Supports smooth scrolling.
- [`useScrollTo`](https://justinmahar.github.io/react-use-window-scroll/?path=/story/hooks-usescrollto--page) - Returns a function to scroll the page to any page coordinates, in pixels. Supports smooth scrolling.

Click either of those to see a live demo (at bottom of page).

### Features include:

- **🎯 Scroll the page to any pixel coordinates, or by any pixel amount**
  - Easily send your viewer to any location on the page. Great for scrolling to the top on first render, or smoothly sending to the top when reaching the bottom.
- **😎 Native smooth scrolling support**
  - Supports browser-native smooth scrolling by specifying [ScrollToOptions](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions).
- **🧮 Legacy browser support**
  - Includes polyfill to support browsers that lack native smooth scrolling support (I'm looking at you, Safari!)
- **🤏 Low overhead**
  - Uses browser-provided [Window.scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo) and [Window.scrollBy](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy) functions only—even for smooth scrolling.
- **🛡️ Safely access the [Window Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window)**
  - Accessing `window` haphazardly in React is considered sloppy. These hooks follow the React paradigm of containing side-effects.

[lock:donate]::🚫---------------------------------------

## Donate 

I hope this project makes your life a little easier! If it does and you'd like to show your appreciation, consider supporting the project with a coffee or sponsorship. 

Your support helps keep the project going and will earn you some serious virtual high fives. Maybe even a virtual fist bump if you're feeling extra cool.

<a href="https://github.com/sponsors/justinmahar">
  <img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/5">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/15">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/25">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" />
</a>

[/lock:donate]::---------------------------------------🚫

## Table of Contents 

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
  - [useScrollBy](#usescrollby)
  - [useScrollTo](#usescrollto)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i react-use-window-scroll
```

## Quick Start

### useScrollBy

```jsx
import * as React from "react";
import { useScrollBy } from "react-use-window-scroll";

const HookExample = () => {
  const scrollBy = useScrollBy();
  return (
    <div>
      {/* Hard scroll down by 200 pixels */}
      <button onClick={() => scrollBy(200, 0)}>Hard Scroll By 200</button>
      {/* Smooth scroll down by 200 pixels */}
      <button
        onClick={() => scrollBy({ top: 200, left: 0, behavior: "smooth" })}
      >
        Smooth Scroll By 200
      </button> ...
    </div>
  );
};
```

Read full [useScrollBy docs](https://justinmahar.github.io/react-use-window-scroll/?path=/story/hooks-usescrollby--page).

### useScrollTo

```jsx
import { useScrollTo } from "react-use-window-scroll";

const HookExample = () => {
  const scrollTo = useScrollTo();
  return (
    <div style={{ border: "solid 2px #67788a", padding: "20px" }}>
      {/* Hard scroll to the top */}
      <button onClick={() => scrollTo(0, 0)}>
        Hard Scroll To Top (0, 0)
      </button> {/* Smooth scroll to the top */}
      <button onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
        Smooth Scroll To Top (0, 0)
      </button>
    </div>
  );
};
```

Read full [useScrollTo docs](https://justinmahar.github.io/react-use-window-scroll/?path=/story/hooks-usescrollto--page).

[lock:typescript]::🚫---------------------------------------

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

[/lock:typescript]::---------------------------------------🚫

[lock:icon]::🚫---------------------------------------

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

[/lock:icon]::---------------------------------------🚫

[lock:contributing]::🚫---------------------------------------

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

[/lock:contributing]::---------------------------------------🚫

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-use-window-scroll/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-use-window-scroll/stargazers): [👉⭐](https://github.com/justinmahar/react-use-window-scroll/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/react-use-window-scroll/?path=/story/license--page).