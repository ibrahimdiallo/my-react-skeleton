var React = require('react') ;
var ListItem = require('./ListItem.jsx') ;

var detailList = [{"id":1 , "text":"Oeufs"},{"id":2, "text":"Sucre"},{"id":3, "text":"Pain"},{"id":4, "text":"Yaourts"}];

var List = React.createClass({
  render: function(){
    var createItem = function(item){
      return <ListItem key={ item.id } detail={item.text} />;
    };

    var divStyle = {
      margin: 10,
      backgroundColor: 'gray',
      color: 'blue'
    };

    return (
      <div className="row">
          <div className="panel panel-body" style={divStyle} >
              <div className="col-sm-12"  >
                <ul> { detailList.map(createItem) } </ul>
              </div>
          </div>
      </div>
    )
      ;

  }
});

module.exports = List;
