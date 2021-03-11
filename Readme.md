# browser-support-checker
Lightweight browser support checker

## Install

```
git clone https://github.com/vanya6537/browser-checker-tao
cd browser-checker-tao 
npm install
```
After `npm install` production version builds to dist directory automatically
## Development

Available scripts in the project:

- `npm run build`: build for production into `dist` directory
- `npm run build:watch`: build for production into `dist` directory and watch for changes

### Bundle size

```
Version: webpack 4.46.0
Time: 2812ms
Built at: 03/11/2021 12:29:09 PM
         Asset      Size  Chunks                   Chunk Names
    checker.js  2.42 KiB    0, 1  [emitted]        checker.js
checker.js.map  7.25 KiB    0, 1  [emitted] [dev]  checker.js
      index.js  2.38 KiB       1  [emitted]        index.js
  index.js.map  7.15 KiB       1  [emitted] [dev]  index.js
```