/**
 * Note View
 *
 * A single note.
 */
var React = require("react");
var Base = require("./base.jsx");
var NoteView = require("./note/view.jsx");
var NoteEdit = require("./note/edit.jsx");

module.exports = React.createClass({
  // TODO: ABSTRACT OUT -- Model sync.
  // From: https://github.com/facebook/react/blob/1be9a9e/examples/
  //       todomvc-backbone/js/app.js#L148-L171
  componentDidMount: function () {
    // [BB] Add forceUpdate bindings.
    this.props.note.on("add change remove", function () {
      this.forceUpdate();
    }, this);
  },

  componentWillUnmount: function () {
    // [BB] Stop all listeners.
    this.props.note.off(null, null, this);
  },

  render: function () {
    return (
      <Base>
        {this.props.action === "view" ?
          <NoteView note={this.props.note} /> :
          <NoteEdit note={this.props.note} />
        }
      </Base>
    );
  }
});
