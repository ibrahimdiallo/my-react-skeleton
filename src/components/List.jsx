var React = require('react') ;
var ListItem = require('./ListItem.jsx') ;

var detailList = [{"id":1 , "text":"Oeufs"},{"id":2, "text":"Sucre"},{"id":3, "text":"Pain"},{"id":4, "text":"Yaourts"}];

var List = React.createClass({
  render: function(){
    var createItem = function(item){
      return <ListItem key={ item.id } detail={item.text} />;
    };

    return (<ul> { detailList.map(createItem) } </ul>);
  }
});

module.exports = List;
