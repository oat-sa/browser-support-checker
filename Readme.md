# browser-support-checker
Lightweight browser support checker

### Usage as npm package
`npm i --save @oat-sa/browser-support-checker`
### For using as script tag
`<script src="./dist/checker.js"></script>`
There can be  `src` link pointing to minified version of checker.js

## Development
```
git clone https://github.com/vanya6537/browser-checker-tao
cd browser-checker-tao 
npm ci
```
After `npm ci` production version builds to dist directory automatically

Available scripts in the project:

- `npm run build`: build for production into `dist` directory
- `npm run build:watch`: build for production into `dist` directory and watch for changes
- `npm run update:browsers`: build supportedBrowsers.js(browser versions RegExp) into root directory

## Bundle size

```
Version: webpack 4.46.0
Time: 3025ms
Built at: 03/26/2021 3:59:40 AM
         Asset      Size  Chunks                   Chunk Names
    checker.js  2.48 KiB    0, 1  [emitted]        checker.js
checker.js.map  7.74 KiB    0, 1  [emitted] [dev]  checker.js
      index.js  2.38 KiB       1  [emitted]        index.js
  index.js.map  7.46 KiB       1  [emitted] [dev]  index.js

```