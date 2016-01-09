import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div className="greeting">
        Hola, {this.props.name}!
      </div>
    );
  },
});
