var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');

function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),                 // すべてのTodoを返す関数
    areAllComplete: TodoStore.areAllComplete()    // すべてのTodoが完了済みか示す
  };
}

var TodoApp = React.createClass({
  getInitialState: function() {
    return getTodoState();
  },
  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },
/**
 * Header は Header.react.jsのrender
 * MainSection は MainSection.react.jsのrender
 * Footer は Footer.react.js のrender
 * this.stateは getTodoStateに対応しているので，
 * allTodos は TodoStore.getAll()関数
 * areAllComplte は TodoStore.areAllComplete()関数に対応している
 * 従って. onChangeが働くのはTodoStoreが変わった時となる
 */
  render: function() {
    return (
      <div>
        <Header />
        <MainSection
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete}
        />
        <Footer allTodos={this.state.allTodos} />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  }

});
