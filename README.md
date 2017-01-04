# React Todo

Todo app copied from various places:

- js from the [redux examples](http://redux.js.org/docs/basics/ExampleTodoList.html)
- css from the [todomvc](http://todomvc.com/examples/react/)

# Development

```sh
  $ npm install -g yarn electron-forge
  $ yarn install
  $ DEBUG=* npm run ui:build-css
  $ DEBUG=* npm start
```

run `DEBUG=* npm run package:osx` or similar to test a one-off build
