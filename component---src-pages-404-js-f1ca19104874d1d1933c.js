(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(t,e,n){"use strict";n.r(e);var r=n(7),a=n.n(r),i=n(0),o=n.n(i),l=n(151),c=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){return o.a.createElement(l.a,{location:this.props.location},o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist...."),o.a.createElement("div",{style:{width:"100%",height:0,paddingBottom:"70%",position:"relative"}},o.a.createElement("iframe",{src:"https://giphy.com/embed/OK27wINdQS5YQ",width:"100%",height:"100%",style:{position:"absolute"},frameBorder:0,className:"giphy-embed",allowFullScreen:!0})),o.a.createElement("p",null,o.a.createElement("a",{href:"https://giphy.com/gifs/mind-seinfeild-OK27wINdQS5YQ"},"via GIPHY")))},e}(o.a.Component);e.default=c},146:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return u});var r=n(152),a=n.n(r),i=n(153),o=n.n(i),l=new a.a(o.a);var c=l.rhythm,u=l.scale},147:function(t,e,n){var r;t.exports=(r=n(150))&&r.default||r},148:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(145),c=n.n(l);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return l.withPrefix}),n.d(e,"navigate",function(){return l.navigate}),n.d(e,"push",function(){return l.push}),n.d(e,"replace",function(){return l.replace}),n.d(e,"navigateTo",function(){return l.navigateTo});var u=n(147),s=n.n(u);n.d(e,"PageRenderer",function(){return s.a});var d=n(34);n.d(e,"parsePath",function(){return d.a});var p=a.a.createContext({}),m=function(t){return a.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(t,e,n){"use strict";e.a={twitter:{url:"https://twitter.com/drewmcmill",text:"@drewmcmill"},github:{url:"https://github.com/dr3",text:"@dr3"},email:{url:"hello@mcmill.co.uk"},linkedin:{url:"https://www.linkedin.com/in/dr3",text:"@dr3"},facebook:{url:"https://www.facebook.com/drewmcmill",text:"drewmcmill"},spotify:{url:"https://open.spotify.com/user/1118248995",text:"Drew McMillan"},instagram:{url:"https://www.instagram.com/drewmcmill_",text:"@drewmcmill_"},npm:{url:"https://www.linkedin.com/in/dr3",text:"@dr3"},paypal:{url:"https://www.paypal.me/drewmcmill",text:"drewmcmill"}}},150:function(t,e,n){"use strict";n.r(e);n(33);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),l=n(48),c=n(2),u=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},151:function(t,e,n){"use strict";n(33);var r=n(7),a=n.n(r),i=n(0),o=n.n(i),l=n(146),c=function(){return o.a.createElement("div",{style:{textAlign:"center"}})},u=n(148),s=n(149),d=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},o.a.createElement("div",{style:{width:Object(l.a)(24),maxWidth:400,display:"flex",flexDirection:"row",justifyContent:"space-between"}},o.a.createElement(u.Link,{to:"/"},"Home"),o.a.createElement("a",{href:s.a.github.url,target:"_new"},"Github"),o.a.createElement(u.Link,{to:"/contact"},"Contact"),o.a.createElement(u.Link,{to:"/blog"},"Blog")))},e}(i.Component),p={rootContainer:{display:"flex",flexDirection:"row",justifyContent:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:15}},m=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:p.rootContainer},"Built with ",o.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank"},"GatsbyJS"))},e}(i.Component),f=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.children,e=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(32),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)},r=Object.assign({},n,e);return o.a.createElement("div",{style:r},o.a.createElement(c,null),o.a.createElement(d,null),o.a.createElement("br",null),t,o.a.createElement(m,null))},e}(o.a.Component);e.a=f}}]);
//# sourceMappingURL=component---src-pages-404-js-f1ca19104874d1d1933c.js.map