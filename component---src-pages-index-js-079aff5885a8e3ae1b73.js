(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return h});var a=n(7),r=n.n(a),i=n(0),u=n.n(i),l=n(155),o=n.n(l),s=n(154),c=n.n(s),d=n(151),m=n(226),p=n.n(m),f=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=o()(this,"props.data.site.siteMetadata.title"),e=o()(this,"props.data.site.siteMetadata.description");return u.a.createElement(d.a,null,u.a.createElement(c.a,null,u.a.createElement("title",null,t),u.a.createElement("meta",{name:"description",content:e})),u.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis. Vestibulum lectus mauris ultrices eros in cursus turpis. Blandit volutpat maecenas volutpat blandit aliquam etiam. Sagittis purus sit amet volutpat. Nullam ac tortor vitae purus faucibus ornare suspendisse. Vulputate sapien nec sagittis aliquam malesuada. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Sit amet cursus sit amet dictum sit amet. Malesuada proin libero nunc consequat interdum varius sit amet. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Habitasse platea dictumst quisque sagittis. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Amet massa vitae tortor condimentum lacinia quis vel eros donec."),u.a.createElement("img",{src:p.a,alt:t}))},e}(u.a.Component);e.default=f;var h="3998338720"},146:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s});var a=n(152),r=n.n(a),i=n(153),u=n.n(i),l=new r.a(u.a);var o=l.rhythm,s=l.scale},147:function(t,e,n){var a;t.exports=(a=n(150))&&a.default||a},148:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return m}),n.d(e,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),l=n(145),o=n.n(l);n.d(e,"Link",function(){return o.a}),n.d(e,"withPrefix",function(){return l.withPrefix}),n.d(e,"navigate",function(){return l.navigate}),n.d(e,"push",function(){return l.push}),n.d(e,"replace",function(){return l.replace}),n.d(e,"navigateTo",function(){return l.navigateTo});var s=n(147),c=n.n(s);n.d(e,"PageRenderer",function(){return c.a});var d=n(34);n.d(e,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},149:function(t,e,n){"use strict";e.a={twitter:{url:"https://twitter.com/drewmcmill",text:"@drewmcmill"},github:{url:"https://github.com/dr3",text:"@dr3"},email:{url:"hello@mcmill.co.uk"},linkedin:{url:"https://www.linkedin.com/in/dr3",text:"@dr3"},facebook:{url:"https://www.facebook.com/drewmcmill",text:"drewmcmill"},spotify:{url:"https://open.spotify.com/user/1118248995",text:"Drew McMillan"},instagram:{url:"https://www.instagram.com/drewmcmill_",text:"@drewmcmill_"},npm:{url:"https://www.linkedin.com/in/dr3",text:"@dr3"},paypal:{url:"https://www.paypal.me/drewmcmill",text:"drewmcmill"}}},150:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),r=n.n(a),i=n(4),u=n.n(i),l=n(48),o=n(2),s=function(t){var e=t.location,n=o.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=s},151:function(t,e,n){"use strict";n(33);var a=n(7),r=n.n(a),i=n(0),u=n.n(i),l=n(146),o=function(){return u.a.createElement("div",{style:{textAlign:"center"}})},s=n(148),c=n(149),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return u.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},u.a.createElement("div",{style:{width:Object(l.a)(24),maxWidth:400,display:"flex",flexDirection:"row",justifyContent:"space-between"}},u.a.createElement(s.Link,{to:"/"},"Home"),u.a.createElement("a",{href:c.a.github.url,target:"_new"},"Github"),u.a.createElement(s.Link,{to:"/contact"},"Contact"),u.a.createElement(s.Link,{to:"/blog"},"Blog")))},e}(i.Component),m={rootContainer:{display:"flex",flexDirection:"row",justifyContent:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:15}},p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return u.a.createElement("div",{style:m.rootContainer},"Built with ",u.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank"},"GatsbyJS"))},e}(i.Component),f=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children,e=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(32),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)},a=Object.assign({},n,e);return u.a.createElement("div",{style:a},u.a.createElement(o,null),u.a.createElement(d,null),u.a.createElement("br",null),t,u.a.createElement(p,null))},e}(u.a.Component);e.a=f},226:function(t,e,n){t.exports=n.p+"static/main_image-51b9a254acc63d466e3b1ae61ab0e0c8.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-079aff5885a8e3ae1b73.js.map