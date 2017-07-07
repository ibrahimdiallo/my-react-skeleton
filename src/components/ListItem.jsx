var React = require('react');

var ListItem = React.createClass({
  render: function(){
    return (
      <li>{ this.props.detail }</li>
    );
  }
});

module.exports = ListItem;
