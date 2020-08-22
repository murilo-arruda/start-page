# start-page with pixel art style

hello there! i am creating a custom start page (default browser page) using the nes.css / pixelart style. i want to provide simple and clean start page.

this projects it's note ready yet. Here my plans:

- options menu
  - dark mode
  - select which icons will display
  - edit sections with with your link lists
  - choose default search engine (google, duckduckgo, bing...)
  - timestamp selection
  - multiple time zone
  - and much more
- serviceworker to work ofline (or use localstorage for data persistence)
- some bugs

## How to use

if you want to use the early version of this page you can run `npm install` and `npm run build` and this will genarate the site files on `public/build` directory.

then you can self host using Netlify, Firebase, Now or whatever hosting provider you want. firefox have handy extension to host direct from your machine.

## Development

in case you want to fix a bug or create a new functionallity you can easyly do that.

requirements: node.js

instructions:

1 - clone `git clone https://github.com/murilo-arruda/start-page.git`
2 - change directory `cd start-page`
3 - install the dependencies `npm install`
4 - start the dev enviroment `npm run build`
5 - the server will be up on localhost:5000
