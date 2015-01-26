// santa mio - http://cdn.awwni.me/mv27.jpg

/**Markdown to html converter */
var converter = new Showdown.converter();

var releases = [];
var quotes = [];

var banners = [
  {large:'http://i.imgur.com/KMdCuLz.png', small:'http://i.imgur.com/NzHFDVJ.png'},
  {large:'http://i.imgur.com/3FfalZ3.png', small:'http://i.imgur.com/cYFbqE5.png'},
  {large:'http://i.imgur.com/XF8UYAF.png', small:'http://i.imgur.com/WTWcHW7.png'},
  {large:'http://i.imgur.com/IbSQfx3.png', small:'http://i.imgur.com/bDR4fuy.png'},
  {large:'http://i.imgur.com/49ZWpmD.png', small:'http://i.imgur.com/YxfSK5H.png'},
  {large:'http://i.imgur.com/SWYoB87.jpg', small:'http://i.imgur.com/ukPrEIJ.png'},
  {large:'http://i.imgur.com/HcKCzZM.png', small:'http://i.imgur.com/iu83kR0.png'},
  {large:'http://i.imgur.com/YMsZiyu.jpg', small:'http://i.imgur.com/82GDEH4.jpg'},
  {large:'http://i.imgur.com/yICoKK3.png', small:'http://i.imgur.com/htS6uyJ.png'},
  {large:'http://i.imgur.com/205duzD.png', small:'http://i.imgur.com/voM9Fyp.png'},
  {large:'http://i.imgur.com/H0cNbCc.jpg', small:'http://i.imgur.com/nga3Bt6.png'}
  
];

/**! @jsx React.DOM */
menuItems = [
  {name:'Home', title:'Home', link:"home"},
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
         line1b:'CR',
         line2b:'SX',
         line3b: 'SX',
         img:'http://cdn.myanimelist.net/images/anime/7/68783.jpg',
         hbird:'https://hummingbird.me/anime/saenai-heroine-no-sodate-kata',
         mal:'http://myanimelist.net/anime/23277/Saenai_Heroine_no_Sodatekata',
         anidb:'http://anidb.net/perl-bin/animedb.pl?show=anime&aid=10538',
         episodes:[
           {v:'v2', ep:'00', url:'http://www.nyaa.se/?page=download&tid=643627'},
           {v:'',   ep:'01', url:'http://www.nyaa.se/?page=download&tid=646123'},
           {v:'',   ep:'02', url:'http://www.nyaa.se/?page=download&tid=648244'}
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
          {v:'', ep:'PV', url:'http://www.nyaa.se/?page=download&tid=640745'}
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
      {v:'',   ep:'01', url:'http://www.nyaa.se/?page=download&tid=607588'}, 
      {v:'',   ep:'02', url:'http://www.nyaa.se/?page=download&tid=609598'},
      {v:'',   ep:'03', url:'http://www.nyaa.se/?page=download&tid=612961'},
      {v:'v2', ep:'04', url:'http://www.nyaa.se/?page=download&tid=622443'},
      {v:'v2', ep:'05', url:'http://www.nyaa.se/?page=download&tid=622441'},
      {v:'v2', ep:'06', url:'http://www.nyaa.se/?page=download&tid=622437'},
      {v:'v2', ep:'07', url:'http://www.nyaa.se/?page=download&tid=625875'},
      {v:'',   ep:'08', url:'http://www.nyaa.se/?page=download&tid=627469'}, 
      {v:'',   ep:'09', url:'http://www.nyaa.se/?page=download&tid=630161'},
      {v:'',   ep:'10', url:'http://www.nyaa.se/?page=download&tid=632853'},
      {v:'',   ep:'11', url:'http://www.nyaa.se/?page=download&tid=635424'},
      {v:'',   ep:'12', url:'http://www.nyaa.se/?page=download&tid=637883'}
       ]
     },
       
    },
  ],
  
  Home: [
    {
      type:'news',
      name:'Welcome',
      data:[
        {
          date:'1-26-15',
          text:"##Banners Update\n  \n\n\nFull gallery available [here](http://imgur.com/a/AUert)."
        },
        {
          date:'1-18-15',
          text:"##Orz\n  \n\n\n2015 January Update  \n\n* We will not be subbing Koufuku Graffiti.   \n* Website still under construction.  \n* Quotes & Rankings coming soon.  \n* Blog updates coming later.  \n\nWe received a few inquiries about recruitment. Your offers to help are all appreciated. Our release cycle isn't exactly streamlined yet, and we don't want to waste your time, so we will be putting everyone on hold for now. If you're willing to cope with beginners or have some advice for us, just comment on either the blog or torrents and one of us will see it."
        },
        {
          date:'12-21-14',
          text:'##Happy Holidays\n  \n\n\nWinter 2015  \n\n* We will be subbing Saekano.  \n* Banners have arrived!  \n* Direct download links are now available thanks to Anime Tosho.'
        }
       
            
           ]
      
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
        text: '##S\\_X\nS\\_X is a pseudo-fansub group. \n\n* Releases are meant to be fast & watched during the airing season, not high quality archive material.  \n* OP&ED from other groups may be used.  \n<br></br>\n##Website \nWe don\'t like Wordpress so our site is a bit different. You can view the source code [here](https://github.com/skxu/sx.code.io).  \n  \n<u>**Hosting**</u>: DigitalOcean ($60/yr)  \n<u>**Domain**</u>: nic.io ($60/yr)  \n<u>**Webserver**</u>: Nginx  \n<u>**Site**</u>:ReactJS  \n<u>**Blog**</u>:Ghost  \n\n<br></br>\n##FAQ \n***Why do you steal other groups\' kfx?***  \nThe goal of S_X is and has always been to release fast. We don\'t have time or manpower to do kfx. Also, we always give credit to the other groups.  <br></br>\n\n***Why do your subs suck?***  \nWe\'re new & learning. Criticism is greatly appreciated since it\'s not always easy seeing your own faults.  <br></br>\n\n***There are so many fansub groups out there already. Why bother?***  \n We\'re doing this for ourselves. Also, half the groups take too long to release or just quit mid-season.  \n\n<br></br><br></br><!--lol brbrbrbr-->'
      }
    }
  ]
  
  
};


var ReleaseListItem = React.createClass({
  render: function() {
    return (
      <div>
      {this.props.hidden ? null : <li className="releaseName">{this.props.release.name}<div className="normalCase">720p - <a className="download_720p" href={this.props.release.url}>Torrent</a><a target="_blank" className="download_720p" href={this.props.release.ddl}>DDL</a></div></li>
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
      autocomplete:'off',
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
              <div className="main">
                <li onClick={this.onClick} className={this.props.selected ? "selected" : ""}>
              
                  {this.props.item.name}
            
                </li>
              </div>
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
        var _this = this;
        var storyNodes = this.props.items.map(function(item) {
          //console.log(item);
          var storyDetails;
          if (item.type === 'TV') {
            storyDetails = item.data.episodes.map(function(ep) {
                return (
                  <div className={item.name}><p className="episode" >{ep.ep != "PV" ? "EP" : ""} {ep.ep}: <a href={ep.url}>Torrent</a> | <a target="_blank" href={"https://animetosho.org/search?q=s_x "+item.name+" "+ep.ep+ep.v}>DDL</a></p></div>
                );
              });
            return (
                <tbody>
                <tr key={item.data.score}>
                    <td>
                        <p className="score">{item.data.rank}</p>
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
                        
                        <p className="links">
                            <a href={item.data.mal}>MyAnimeList</a> | 
                            <a href={item.data.hbird}>Hummingbird</a> | 
                            <a href={item.data.anidb}>AniDB</a>
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
                </tbody>
                
            );
        
        } else if (item.name === 'Welcome') {
          var quote = {
            quote:"",
            author:""
          };
          
          if (quotes.length === 0) {
            /**Load quotes list */
            $.getJSON("quotes.json", function(quoteList) {
              quotes = quoteList;
              _this.forceUpdate();
              //$('.releaseList li:gt(3)').hide();
            });
          } else {
            quote = quotes[Math.floor(Math.random()*quotes.length)];
            
          }
          
          storyDetails = item.data.map(function(item) {
            var rawMarkup = converter.makeHtml(item.text);
            return (
                <div>
                  <div className="newsArticle" dangerouslySetInnerHTML={{__html: rawMarkup}} />
                  <div className="lineBreak"/>
                </div>
            );
          });
          
          return (
            <tbody>
              <tr>
                <td>
                  <div className="quoteContainer">
                  <div className="quote">
                    {quote.quote}
                  </div>
                  <div className="quoteAuthor">
                    {quote.author}
                  </div>
                  </div>
                </td>
                
              </tr>
              <tr>
                <td><div className="news">{storyDetails}</div></td>
              </tr>
            </tbody>

          );
        
        } else if (item.type === 'markdown') {
          var rawMarkup = converter.makeHtml(item.data.text);
          return (
            
            <tbody>
            <tr>
              <td>
                <div dangerouslySetInnerHTML={{__html: rawMarkup}} />
              </td>
            </tr>
            </tbody>
            
          );
  
  
        } 
              
    }); //end storynodes
      
      

        return (
            
            <table>
                
                    {storyNodes}
                
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
              title: "Home"
          });
        }
    },
    render: function() {
        var banner = banners[Math.floor(Math.random()*banners.length)];
        return (
            <div>
                <img className="largeBanner" src={banner.large} onload="this.style.display='block'"></img>
                <img className="smallBanner" src={banner.small}></img>
                <Navigation activeUrl={this.state.activeNavigationUrl}
                    items={this.state.navigationItems}
                    itemSelected={this.setSelectedItem} />
                <h1>{this.state.title}</h1>
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
