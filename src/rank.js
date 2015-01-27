var App = React.createClass({displayName: "App",
  getInitialState: function() {
    return {
      rankings: '',
    }
  },
  
  componentDidMount: function() {
    /**load stuff*/
  },
  
  render: function() {
    var _this = this;
    
    return (
      React.createElement("div", null, 
        React.createElement("p", null, "Coming Soon.")
      )
    );
  }
});
  
React.renderComponent(
  React.createElement(App, null),
  document.body
);