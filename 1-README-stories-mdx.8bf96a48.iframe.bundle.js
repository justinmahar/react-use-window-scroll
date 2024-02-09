/*! For license information please see 1-README-stories-mdx.8bf96a48.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_use_window_scroll=self.webpackChunkreact_use_window_scroll||[]).push([[836],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qb:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Qb});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/core/1.README.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>_1_README_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const READMEraw_namespaceObject='<h2 align="center">\n  ↕️ React Use Window Scroll\n</h2>\n<h3 align="center">\n  React hooks for scrolling the page to any location, or by any amount.<br/>Supports smooth scrolling.\n</h3>\n<p align="center">\n  <a href="https://badge.fury.io/js/react-use-window-scroll" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-use-window-scroll.svg" alt="npm Version" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/react-use-window-scroll/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/react-use-window-scroll/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-use-window-scroll/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>\n</p>\n\x3c!-- [lock:donate-badges] 🚫--------------------------------------- --\x3e\n<p align="center">\n  <a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>\n</p>\n\x3c!-- [/lock:donate-badges] ---------------------------------------🚫 --\x3e\n\n## Documentation\n\nRead the **[official documentation](https://justinmahar.github.io/react-use-window-scroll/)**.\n\n<a href="https://justinmahar.github.io/react-use-window-scroll/?path=/story/hooks-usescrollto--page#hook-example"><img src="https://justinmahar.github.io/react-use-window-scroll/demo.gif" alt="Demo" /></a>\n\n## Overview\n\nThis package includes two hooks for scrolling the page to any coordinates, or by any amount. They both use the the [Window Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window)\'s scroll functions and support using [ScrollToOptions](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions) for smooth scrolling implemented natively by the browser.\n\n- [`useScrollBy`](https://justinmahar.github.io/react-use-window-scroll/?path=/story/hooks-usescrollby--page) - Returns a function to scroll the page up or down by any amount, in pixels. Supports smooth scrolling.\n- [`useScrollTo`](https://justinmahar.github.io/react-use-window-scroll/?path=/story/hooks-usescrollto--page) - Returns a function to scroll the page to any page coordinates, in pixels. Supports smooth scrolling.\n\nClick either of those to see a live demo (at bottom of page).\n\n### Features include:\n\n- **🎯 Scroll the page to any pixel coordinates, or by any pixel amount**\n  - Easily send your viewer to any location on the page. Great for scrolling to the top on first render, or smoothly sending to the top when reaching the bottom.\n- **😎 Native smooth scrolling support**\n  - Supports browser-native smooth scrolling by specifying [ScrollToOptions](https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions).\n- **🧮 Legacy browser support**\n  - Includes polyfill to support browsers that lack native smooth scrolling support (I\'m looking at you, Safari!)\n- **🤏 Low overhead**\n  - Uses browser-provided [Window.scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo) and [Window.scrollBy](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy) functions only—even for smooth scrolling.\n- **🛡️ Safely access the [Window Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window)**\n  - Accessing `window` haphazardly in React is considered sloppy. These hooks follow the React paradigm of containing side-effects.\n\n\x3c!-- [lock:donate] 🚫--------------------------------------- --\x3e\n\n## Donate \n\nIf this project helped you, please consider buying me a coffee or sponsoring me. Your support is much appreciated!\n\n<a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>\n\n\x3c!-- [/lock:donate] ---------------------------------------🚫 --\x3e\n\n## Table of Contents \n\n- [Documentation](#documentation)\n- [Overview](#overview)\n  - [Features include:](#features-include)\n- [Donate](#donate)\n- [Table of Contents](#table-of-contents)\n- [Installation](#installation)\n- [Quick Start](#quick-start)\n  - [useScrollBy](#usescrollby)\n  - [useScrollTo](#usescrollto)\n- [TypeScript](#typescript)\n- [Icon Attribution](#icon-attribution)\n- [Contributing](#contributing)\n- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)\n- [License](#license)\n\n## Installation\n\n```\nnpm i react-use-window-scroll\n```\n\n## Quick Start\n\n### useScrollBy\n\n```jsx\nimport * as React from "react";\nimport { useScrollBy } from "react-use-window-scroll";\n\nconst HookExample = () => {\n  const scrollBy = useScrollBy();\n  return (\n    <div>\n      {/* Hard scroll down by 200 pixels */}\n      <button onClick={() => scrollBy(200, 0)}>Hard Scroll By 200</button>\n      {/* Smooth scroll down by 200 pixels */}\n      <button\n        onClick={() => scrollBy({ top: 200, left: 0, behavior: "smooth" })}\n      >\n        Smooth Scroll By 200\n      </button> ...\n    </div>\n  );\n};\n```\n\nRead full [useScrollBy docs](https://justinmahar.github.io/react-use-window-scroll/?path=/story/hooks-usescrollby--page).\n\n### useScrollTo\n\n```jsx\nimport { useScrollTo } from "react-use-window-scroll";\n\nconst HookExample = () => {\n  const scrollTo = useScrollTo();\n  return (\n    <div style={{ border: "solid 2px #67788a", padding: "20px" }}>\n      {/* Hard scroll to the top */}\n      <button onClick={() => scrollTo(0, 0)}>\n        Hard Scroll To Top (0, 0)\n      </button> {/* Smooth scroll to the top */}\n      <button onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}>\n        Smooth Scroll To Top (0, 0)\n      </button>\n    </div>\n  );\n};\n```\n\nRead full [useScrollTo docs](https://justinmahar.github.io/react-use-window-scroll/?path=/story/hooks-usescrollto--page).\n\n\x3c!-- [lock:typescript] 🚫--------------------------------------- --\x3e\n\n## TypeScript\n\nType definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.\n\n\x3c!-- [/lock:typescript] ---------------------------------------🚫 --\x3e\n\n\x3c!-- [lock:icon] 🚫--------------------------------------- --\x3e\n\n## Icon Attribution\n\nFavicon by [Twemoji](https://github.com/twitter/twemoji).\n\n\x3c!-- [/lock:icon] ---------------------------------------🚫 --\x3e\n\n\x3c!-- [lock:contributing] 🚫--------------------------------------- --\x3e\n\n## Contributing\n\nOpen source software is awesome and so are you. 😎\n\nFeel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.\n\nFor major changes, open an issue first to discuss what you\'d like to change.\n\n\x3c!-- [/lock:contributing] --------------------------------------🚫 --\x3e\n\n## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-use-window-scroll/stargazers)\n\nIf you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-use-window-scroll/stargazers): [👉⭐](https://github.com/justinmahar/react-use-window-scroll/stargazers)\n\n## License\n\nSee [LICENSE.md](https://justinmahar.github.io/react-use-window-scroll/?path=/story/license--page).';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{title:"Home"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.Ih,{children:READMEraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Home",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const _1_README_stories=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);