var React = require('react');
var TodoApp = require('./components/TodoApp.react');
/**
 *表示周りはcomponentsに入っている
 */

React.render(
  <TodoApp />,
  document.getElementById('todoapp')
);
