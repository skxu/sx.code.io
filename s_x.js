/**Markdown to html converter */
var converter = new Showdown.converter();


/**! @jsx React.DOM */
menuItems = [
  {name:'Home', title:'SX SUBS', link:"home"},
  {name:'Ongoing', title:'Ongoing', link:"ongoing"},
  {name:'Completed', title:'Completed', link:"completed"},
  {name:'Staff', title:'Staff', link:"staff"},
  {name:'About', title:'About', link:"about"},
  {name:'Blog', title:'Blog', url:"/blog"}
];

states = {
  Ongoing: [
    {name:'Trinity Seven', 
     type: 'TV',
     data:{
       score:1,
       line1:'Translation by ',
       line2:'Editing by ',
       line3:'OP&ED by ',
       line1b:'CR+SX',
       line2b:'SX',
       line3b: 'DDY',
       img:'http://cdn.myanimelist.net/images/anime/12/67795.jpg',
       episodes:[
      {ep:'01', url:'http://www.nyaa.se/?page=download&tid=607588'}, 
      {ep:'02', url:'http://www.nyaa.se/?page=download&tid=609598'},
      {ep:'03', url:'http://www.nyaa.se/?page=download&tid=612961'},
      {ep:'04', url:'http://www.nyaa.se/?page=download&tid=622443'},
      {ep:'05', url:'http://www.nyaa.se/?page=download&tid=622441'},
      {ep:'06', url:'http://www.nyaa.se/?page=download&tid=622437'},
      {ep:'07', url:'http://www.nyaa.se/?page=download&tid=625875'},
      {ep:'08', url:'http://www.nyaa.se/?page=download&tid=627469'}, 
      {ep:'09', url:'http://www.nyaa.se/?page=download&tid=630161'},
      {ep:'10', url:'http://www.nyaa.se/?page=download&tid=632853'},
      {ep:'11', url:'http://www.nyaa.se/?page=download&tid=635424'}
       ]
     },
       
    },
  ],
    
  Completed: [
  ],
  
  Home: [
    {
      name:'Welcome',
      data:{}
    }
  ],
  
  Staff: [
    {
      name:'Coming Soon',
      data:{}
    }
  ],
  
  About: [
    {
      name:'Coming Soon',
      data:{
        text: '##Test  \n 1234'
      }
    }
  ]
  
};


var NavigationItem = React.createClass({
    onClick: function() {
        this.props.itemSelected(this.props.item);
    },
    render: function() {
        return (
            <a href={this.props.item.url}>
              <li onClick={this.onClick} className={this.props.selected ? "selected" : ""}>
                
                  {this.props.item.name}
            
              </li>
            </a>
        );
    }
});

var Navigation = React.createClass({
    setSelectedItem: function(item) {
        this.props.itemSelected(item);
    },
    render: function() {
        var _this = this;

        var items = this.props.items.map(function(item) {
            return (
                <NavigationItem item={item} itemSelected={_this.setSelectedItem}
                  selected={item.link === _this.props.activeUrl}
              />
            );
        });

        return (
            <div className="navigation">
                <div className="header">Navigation</div>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
});

var StoryList = React.createClass({

  
    render: function() {
        var storyNodes = this.props.items.map(function(item) {
          console.log(item);
          var storyDetails;
          if (item.type === 'TV') {
            storyDetails = item.data.episodes.map(function(ep) {
                return (
                  <div className={item.name}><p className="episode" >EP {ep.ep}: <a href={ep.url}>Torrent</a> | No DDL</p></div>
                );
              });
          
          
          
          
          }
          
          
          
          return (
                
  
                <tr key={item.data.score}>
                    <td>
                        <p className="score">{item.data.score}</p>
                    </td>
                    <td>
                        <p className="title">
                            <a href={item.data.url}>
                                {item.name}
                            </a>
                        </p>
              
                        <p className="cover">
                            <img src={item.data.img}/>
                        </p>
              
                        <p className="line">
                          {item.data.line1} <b>{item.data.line1b}</b>
                        </p>
              
                        <p className="line">
                          {item.data.line2} <b>{item.data.line2b}</b>
                        </p>
              
                        <p className="line">
                          {item.data.line3} <b>{item.data.line3b}</b>
                        </p>
            
                        <p className="line">
                          {item.data.episodes !== undefined ? <button className="ep_button" onClick={function() {$("[class='"+item.name+"']").slideToggle(0)}}>Episode List</button> : ""}
                        </p>
                                              
                      </td>
                      <td>
                        <p>
                          {storyDetails}
                        </p>
              
                        
                    </td>
                </tr>
            );
        });
      
      

        return (
            <table>
                <tbody>
                    {storyNodes}
                </tbody>
            </table>
        );
    }
});


var StoryDetails = React.createClass({
  render: function() {
    
    
    
    return (
      <div className="header">{this.props.item.name}</div>
    );
  }

});

var App = React.createClass({

    getInitialState: function() {
        return ({
            activeNavigationUrl: "home",
            navigationItems: menuItems,
            storyItems: states["Home"],
            title: "SX SUBS"
        });
    },
    render: function() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <Navigation activeUrl={this.state.activeNavigationUrl}
                    items={this.state.navigationItems}
                    itemSelected={this.setSelectedItem} />
                <StoryList items={this.state.storyItems} />
            </div>
        );
    },
    setSelectedItem: function(item) {
        var _this = this;
        //script.src = "http://www.reddit.com/" + item.data.url + ".json?sort=top&t=month&jsonp=" + cbname;
        _this.setState({storyItems: states[item.name]});

        this.setState({
            activeNavigationUrl: item.link,
            title: item.title
        });
    }
});

React.renderComponent(
    <App />,
    document.body
);
