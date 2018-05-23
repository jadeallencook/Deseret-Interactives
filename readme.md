# Newsroom.js

Tools built for interactive data presentations!

### Creating A New Interactive

To create a new interactive, start by generating a script in "src/scripts/my-interactive.js" and a stylesheet in "src/styles/my-interactive.scss" with the same name. In the newly created script file, export your interactive as a function.

```js
    export default function MyInteractive(container, otherPatameters) {}
```

Then import the function into the "src/scripts/app.js". 

```js
    import MyInteractive from './my-ineractive.js';
```

And attach it to the "init" method on the "Newsroom" object.

```js
    else if (type === 'my-interactive') new MyInteractive(interactive, Newsroom.parameter(interactive, 'example'));
```

Now that you have the development enviroment setup, you'll need a preview so you can see what you're working on. To create the preview, edit this file: 

```sh
    examples/app.js
```

In the "interactives" object, create a new object with the title of your interactive (the key will be the hash that you pass via the homepage). The only nessasry key/value pair you'll need is a "type" because the type corresponds with the type you pass "src/scripts/app.js". Then to complete everything, just copy/paste the interactive element in the "index.html" that describes your project. You'll notice that the "preview" link goes to "examples/#myInteractive".

### Development Tools 

Turn on Webpack, SCSS, and PHP once you have an interactive created that you want to start building. If you don't have any of those, you can use NPM to install them! 

```sh
    npm i -g webpack
    npm i -g sass
```

PHP should be on your machine already if you're running Mac OS.

Now you can use NPM scripts to turn everything on. 

```sh
    # webpack 
    npm run scripts
    # scss
    npm run styles
    # php
    npm run server
```

