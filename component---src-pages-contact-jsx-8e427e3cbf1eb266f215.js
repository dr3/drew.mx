(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});var a=n(0),r=n.n(a),i=n(154),o=n.n(i),c=n(150),l=n(151);t.default=function(e){var t=e.data,n=Object(c.a)(["site","siteMetadata","title"],t),a=Object(c.a)(["site","siteMetadata","title"],t),i=Object(c.a)(["allMarkdownRemark","edges",0,"node","html"],t);return r.a.createElement(l.a,null,r.a.createElement(o.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:"Contact | "+n}),r.a.createElement("h2",null,"Contact"),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}}))};var u="936586093"},145:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u});var a=n(152),r=n.n(a),i=n(153),o=n.n(i),c=new r.a(o.a);var l=c.rhythm,u=c.scale},146:function(e,t){e.exports={title:"🙈 Drew McMillan",author:"Drew McMillan",description:"Personal website of Drew McMillan, a software engineer in London, UK. Drew is currently working at BBC News on a brand new React/Node stack and has a strong interest in all things frontend web.",siteUrl:"https://new.drew.mx",githubUrl:"https://github.com/dr3",repoUrl:"https://github.com/dr3/drew.mx"}},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(143),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(148),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},149:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(49),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},150:function(e,t,n){"use strict";n(48);t.a=function(e,t){return e.reduce(function(e,t){return e&&e[t]?e[t]:null},t)}},151:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(144),o=n(145),c=n(147),l=n(146),u=i.a.div.withConfig({displayName:"Navbar__NavWrapper",componentId:"w42vpv-0"})(["width:100%;display:flex;flex-direction:row;justify-content:center;"]),s=i.a.div.withConfig({displayName:"Navbar__NavInner",componentId:"w42vpv-1"})(["width:",";max-width:400px;display:flex;flex-direction:row;justify-content:space-between;"],Object(o.a)(24)),d=function(){return r.a.createElement(u,null,r.a.createElement(s,null,r.a.createElement(c.Link,{to:"/"},"Home"),r.a.createElement("a",{href:l.githubUrl,target:"_new"},"Github"),r.a.createElement(c.Link,{to:"/contact"},"Contact"),r.a.createElement(c.Link,{to:"/blog"},"Blog")))},p=i.a.div.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1ik35zv-0"})(["display:flex;flex-direction:row;justify-content:center;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:gray;padding-top:15px;"]),f=function(){return r.a.createElement(p,null,"Built with ",r.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"GatsbyJS")," - Open source on ",r.a.createElement("a",{href:l.repoUrl,target:"_blank",rel:"noopener noreferrer"},"Github"))},m=i.a.div.withConfig({displayName:"Layout__LayoutWrapper",componentId:"sc-1pnar2i-0"})(["margin:0 auto;max-width:",";padding:"," ",";"],Object(o.a)(32),Object(o.a)(1.5),Object(o.a)(.75));t.a=function(e){var t=e.children;return r.a.createElement(m,null,r.a.createElement(d,null),r.a.createElement("br",null),t,r.a.createElement(f,null))}}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-8e427e3cbf1eb266f215.js.map