

/**Markdown to html converter */
var converter = new Showdown.converter();

var releases = [];

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
    {
      name:'Saenai Heroine no Sodatekata', 
      type: 'TV',
      status: 'ongoing',
      data:{
         score:2, //unique ID #
         rank:1, //used for displaying
         line1:'Translation by ',
         line2:'Editing by ',
         line3:'OP&ED by ',
         line1b:'CR+SX',
         line2b:'SX',
         line3b: 'TBA',
         img:'http://cdn.myanimelist.net/images/anime/7/68783.jpg',
         hbird:'https://hummingbird.me/anime/saenai-heroine-no-sodate-kata',
         mal:'http://myanimelist.net/anime/23277/Saenai_Heroine_no_Sodatekata',
         anidb:'http://anidb.net/perl-bin/animedb.pl?show=anime&aid=10538',
         episodes:[
         ]
       },
    },
    
    {
      name:'Koufuku Graffiti',
      type: 'TV',
      status: 'ongoing',
      data:{
        score:3, //unique ID #
        rank:2, //used for displaying
        line1:'Translation by ',
        line2:'Editing by ',
        line3:'OP&ED by ',
        line1b:'TBA',
        line2b:'SX',
        line3b:'TBA',
        mal:'http://myanimelist.net/anime/24629/Koufuku_Graffiti',
        hbird:'https://hummingbird.me/anime/koufuku-graffiti',
        anidb:'http://anidb.net/perl-bin/animedb.pl?show=anime&aid=10684',
        img:'http://cdn.myanimelist.net/images/anime/6/64615.jpg',
        episodes:[
        ]
      },
    },
    
  ],
    
  Completed: [
    {name:'Trinity Seven', 
     type: 'TV',
     status: 'completed',
     data:{
       score:1,
       rank:1,
       line1:'Translation by ',
       line2:'Editing by ',
       line3:'OP&ED by ',
       line1b:'CR+SX',
       line2b:'SX',
       line3b: 'DDY',
       img:'http://cdn.myanimelist.net/images/anime/12/67795.jpg',
       mal:'http://myanimelist.net/anime/25157/Trinity_Seven',
       hbird:'https://hummingbird.me/anime/trinity-seven',
       anidb:'http://anidb.net/perl-bin/animedb.pl?show=anime&aid=10441',
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
      {ep:'11', url:'http://www.nyaa.se/?page=download&tid=635424'},
      {ep:'12', url:'http://www.nyaa.se/?page=download&tid=637883'}
       ]
     },
       
    },
  ],
  
  Home: [
    {
      type:'markdown',
      name:'Welcome',
      data:{
        date:'12-21-14',
        text:'##Happy Holidays\n  \n\n\nMost recent Trinity Seven episode: 12, [torrent](http://www.nyaa.se/?page=download&tid=637883)  \n\n<img src="http://cdn.awwni.me/mv27.jpg" alt="Drawing" style="width: 35%;"/>'
          },
      
    }
  ],
  
  Staff: [
    {
      type:'markdown',
      name:'Coming Soon',
      data:{
        text: 'Hm?  \n <img src="http://i.imgur.com/K9YJnLl.png" alt="Drawing" style="width: 50%;"/>'
      }
    }
  ],
  
  About: [
    {
      type:'markdown',
      name:'Coming Soon',
      data:{
        text: '##S\\_X\nS\\_X is a pseudo-fansub group. Our goals:  \n\n* Provide a \'watchable\' show in reasonable time\n* Release within 4 hours of airing \n* Fix wrong translations \n* Edit awkward phrases & grammar \n* Reduce as many 2-liners into 1-liners as possible\n  * May involve re-timing / typesetting \n* Include OP&ED from other groups, if available\n* Chapter the releases  \n\nS\\_X releases are meant to be fast & watched during the airing season, not high quality archive material.  \n<br></br>\n##Q\\_X \nQ\\_X is a subdivision which doesn\'t actually exist yet. While S\\_X provides speed, Q\\_X has the goal of providing better quality:  \n\n* Releases are expected within 48 hours \n* Typesetting where appropriate - e.g. signs \n* More editing with QC \n* Better encoding  \n\n<br></br>\n##Website \nWe don\'t like Wordpress so our site is a bit different. You can view the source code [here](https://github.com/skxu/sx.code.io).  \n  \n<u>**Hosting**</u>: DigitalOcean ($60/yr)  \n<u>**Domain**</u>: nic.io ($60/yr)  \n<u>**Webserver**</u>: Nginx  \n<u>**Site**</u>:ReactJS  \n<u>**Blog**</u>:Ghost  \n\n<br></br>\n##FAQ \n***Why do you steal other groups\' kfx?***  \nThe goal of S_X is and has always been to release fast. We don\'t have time or manpower to do kfx. Also, we always give credit to the other groups.  \n\n***Why do your subs suck?***  \nWe\'re new & learning. Criticism is greatly appreciated since it\'s not always easy seeing your own faults.  \n\n***Why is your website so shitty?***  \nSomeone had the wonderful idea of building it from scratch.  \n\n***There are so many fansub groups out there already. Why bother?***  \n We\'re doing this for ourselves. Also, half the groups take too long to release or just quit mid-season.  \n\n'
      }
    }
  ]
  
  
};


var ReleaseListItem = React.createClass({
  render: function() {
    return (
      <div>
      {this.props.hidden ? null : <li className="releaseName">{this.props.release.name} - <a className="download_720p" href={this.props.release.url}>720p</a></li>
      }
      </div>
    )
  }
});

var ReleaseList = React.createClass({
  getInitialState: function() {
    return {
      search: '',
      hide: true,
    };
  },
  
  setSearch: function(event) {
    return this.setState({
      search: event.target.value,
      hide: this.state.hide
    });
  },
  
  releases: function() {
    return this.props.releases.filter((function(_this) {
      return function(release) {
        name1 = release.name.toLowerCase();
        name2 = release.alt.toLowerCase();
        return ((name1.indexOf(_this.state.search.toLowerCase()) > -1) || (name2.indexOf(_this.state.search.toLowerCase()) > -1));
      };
    })(this));
  },
  
  searchInput: function() {
    return React.DOM.input({
      name: 'search',
      className: 'searchBox',
      onChange: this.setSearch,
      placeholder: 'Search (e.g. Trinity Seven 7)'
    });
  },
  
  releaseList: function() {
    var release;
    return React.DOM.ul({}, [
      (function() {
        var _i, _len, _ref, _results;
        _ref = this.releases();
        _results = [];
        for (_i = _ref.length; _i >= 0; _i--) {
          release = _ref[_i];
          if (release === undefined) continue;
          _results.push(ReleaseListItem({
            release: release,
            hidden: _results.length >= 3 && this.state.hide
          }));
        }
        if (_results.length > 3) {
          $('.showAll').show();
        } else {
          $('.showAll').hide();
        }
        return _results;
      }).call(this)
    ]);
  },
  
  header: function() {
    return (
      <div>
      <ul>
        <li className="releases">Recent releases</li>
      </ul>
      </div>
    );
  },

  
  onClick: function() {
    set = this.state.hide ? false : true;
    this.setState({
      search: this.state.search,
      hide:set});
    this.forceUpdate();
  },
  
  showButton: function() {
    return (
      <div>
        <button className="showAll" onClick={this.onClick}>{this.state.hide ? "Show All" : "Show Less"}</button>
      </div>
    )
  },
  
  render: function() {
    return React.DOM.div({}, this.header(), this.searchInput(), this.releaseList(), this.showButton());
  }
});


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
      
        if (releases.length === 0) {
          /**Load release list
             In the future, all data should be loaded
           */
          $.getJSON("releases.json", function(releaseList) {
            releases = releaseList[0].releases;
            _this.forceUpdate();
            $('.releaseList li:gt(3)').hide();
            $('.searchBox').fancyInput();
            
          });
        }

        return (
            <div className="navigation">
                <div className="header">Navigation</div>
                <ul>
                    {items}
                </ul>
                <div className="search">
                  <ul className="releaseList">
                    <ReleaseList releases={releases}/>
                  </ul>
                </div>
                
            </div>
            

        );
    }
});

var StoryList = React.createClass({

  
    render: function() {
        var storyNodes = this.props.items.map(function(item) {
          //console.log(item);
          var storyDetails;
          if (item.type === 'TV') {
            storyDetails = item.data.episodes.map(function(ep) {
                return (
                  <div className={item.name}><p className="episode" >EP {ep.ep}: <a href={ep.url}>Torrent</a> | No DDL</p></div>
                );
              });
            return (
                <tr key={item.data.score}>
                    <td>
                        <p className="score">{item.data.rank}</p>
                    </td>
                    <td>
                        <p className="title">
                            <a href={item.data.url}>
                                {item.name}
                            </a>
                            <a href={item.data.mal}><img className="icon" title="MyAnimeList" src="http://i.imgur.com/cHU6p56.jpg"></img></a>
                            <a href={item.data.hbird}><img className="icon" title="Hummingbird.me" src="https://hummingbird.me/assets/h-logo-d5cecd961cfcf1feb9974e0affdf7268.png"></img></a>
                            <a href={item.data.anidb}><img className="icon" title="aniDB" src="http://i.imgur.com/Z0C5NSK.png"></img></a>
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
                          <button className="ep_button" onClick={function() {$("[class='"+item.name+"']").slideToggle(0)}}>Episode List</button>
                        </p>
                        <br></br>
                        <br></br>
                    </td>
                    <td>
                        <p>
                          {storyDetails}
                        </p>
              
                    </td>
                </tr>
                
            );
        
        } else if (item.type === 'markdown') {
          var rawMarkup = converter.makeHtml(item.data.text);
          return (
            <div>
            <tr>
              <td>
                <div dangerouslySetInnerHTML={{__html: rawMarkup}} />
              </td>
            </tr>
            </div>
          );
  
  
        } else if (item.type === 'news') {
          
          storyDetails = item.data.stories.map(function(story) {
            var rawMarkup = converter.makeHtml(story.text);
            return (
              <tr key={story.date}>
                <td>
                    <p>
                      <div dangerouslySetInnerHTML={{__html: rawMarkup}} />
                    </p>
                    <br></br>
                </td>
              </tr>
            );
          });
          
          return (
            <div>{storyDetails}</div>
          );
        
        }
              
    }); //end storynodes
      
      

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
        if (window.location.hash === "#About") {
          return ({
            activeNavigationUrl: "about",
            navigationItems: menuItems,
            storyItems: states["About"],
            title: "About"
          });
        } else if (window.location.hash === "#Ongoing") {
          return ({
            activeNavigationUrl: "ongoing",
            navigationItems: menuItems,
            storyItems: states["Ongoing"],
            title: "Ongoing"
          });
        } else if (window.location.hash === "#Completed") {
          return ({
            activeNavigationUrl: "completed",
            navigationItems: menuItems,
            storyItems: states["Completed"],
            title: "Completed",
          });
        } else if (window.location.hash === "#Staff") {
          return ({
            activeNavigationUrl: "staff",
            navigationItems: menuItems,
            storyItems: states["Staff"],
            title: "Staff",
          });
        } else {
          return ({
              activeNavigationUrl: "home",
              navigationItems: menuItems,
              storyItems: states["Home"],
              releases: [],
              title: "SX SUBS"
          });
        }
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
        
        _this.setState({storyItems: states[item.name]});
        window.location.hash = "#" + item.name;
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
