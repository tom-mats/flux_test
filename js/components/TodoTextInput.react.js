/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var TodoTextInput = React.createClass({
 /**
  * Javaで言う所のインターフェースらしい
  * this.prop.xxxで参照できる項目
  * 変更できないプロパティ
  */
  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },
 /**
  * 初期化
  * this.prop.valueがある場合はその値を, ない場合は空の値を返す
  * こちらは this.state.xxxで参照できる．
  * 変更はsetState関数ないで実施しなくてなならない
  */
  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  /**
   * @return {object}
   * this.state.valueは上のgetInitialStateに対応している
   */
  render: function() /*object*/ {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
      />
    );
  },

  /**
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways.
   */
  _save: function() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },

  /**
   * @param {object} event
   */
  _onChange: function(/*object*/ event) {
    this.setState({
      value: event.target.value
    });
  },

  /**
   * @param  {object} event
   */
  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }

});

module.exports = TodoTextInput;
