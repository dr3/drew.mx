(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return b});var n=a(0),r=a.n(n),i=a(156),o=a(160),l=a(164),c=a.n(l),m=a(161),d=a(168),s=a(163),p=a(167),u=a.n(p),f=a(158),g=Object(i.c)("h1").withConfig({displayName:"pages__Heading",componentId:"sc-1a8ue9f-0"})(["border:none;margin-top:2.5rem;"]),h=i.c.div.withConfig({displayName:"pages__DescriptionWrapper",componentId:"sc-1a8ue9f-1"})(["display:grid;grid-template-columns:2fr 1fr;grid-column-gap:1rem;@media (max-width:45rem){display:initial;}"]),w=i.c.img.withConfig({displayName:"pages__DescriptionImage",componentId:"sc-1a8ue9f-2"})(["margin-top:2.5rem;border-radius:50%;align-self:center;@media (max-width:45rem){max-width:15rem;margin:0 auto;display:block;}@media (max-width:15rem){width:100%;}"]);t.default=function(e){var t=e.data,a=Object(m.a)(["site","siteMetadata","title"],t),i=Object(m.a)(["site","siteMetadata","title"],t),l=Object(m.a)(["blogPosts","edges"],t),p=Object(m.a)(["descriptions","edges",0,"node","html"],t);return r.a.createElement(s.a,null,r.a.createElement(c.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:i})),r.a.createElement(h,null,r.a.createElement("div",null,r.a.createElement(g,null,"Hey! I'm Drew ",r.a.createElement("span",{role:"img","aria-label":"Wave emoji"},"👋")),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:p}})),r.a.createElement(w,{src:u.a,alt:f.author})),l[0]&&r.a.createElement(n.Fragment,null,r.a.createElement("br",null),r.a.createElement(d.a,{posts:l}),r.a.createElement(o.a,{to:"/blog"},"See more blog posts →")))};var b="3733108130"},157:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return m});var n=a(165),r=a.n(n),i=a(166),o=a.n(i),l=new r.a(o.a);var c=l.rhythm,m=l.scale},158:function(e,t){e.exports={title:"🙈 Drew McMillan",author:"Drew McMillan",description:"Personal website of Drew McMillan, a software engineer in London, UK. Drew is currently working at BBC News on a brand new React/Node stack and has a strong interest in all things frontend web.",siteUrl:"https://new.drew.mx",githubUrl:"https://github.com/dr3",repoUrl:"https://github.com/dr3/drew.mx"}},159:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(159),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},161:function(e,t,a){"use strict";t.a=function(e,t){return e.reduce(function(e,t){return e&&e[t]?e[t]:null},t)}},162:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},163:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(156),o=a(157),l=a(160),c=a(158),m=i.c.div.withConfig({displayName:"Navbar__NavWrapper",componentId:"w42vpv-0"})(["width:100%;display:flex;flex-direction:row;justify-content:center;@media (min-width:21rem){padding-bottom:2rem;}"]),d=i.c.div.withConfig({displayName:"Navbar__NavInner",componentId:"w42vpv-1"})(["width:",";max-width:400px;display:flex;flex-direction:row;justify-content:space-between;@media (max-width:21rem){display:grid;grid-template-columns:1fr 1fr;text-align:center;grid-gap:1rem;}"],Object(o.a)(24)),s=Object(i.c)(l.a).withConfig({displayName:"Navbar__LinkHiddenMobile",componentId:"w42vpv-2"})(["@media (max-width:21rem){display:none;}"]),p=function(){return r.a.createElement(m,null,r.a.createElement(d,null,r.a.createElement(l.a,{to:"/"},"Home"),r.a.createElement("a",{href:c.githubUrl,target:"_new"},"Github"),r.a.createElement(l.a,{to:"/contact"},"Contact"),r.a.createElement(l.a,{to:"/blog"},"Blog"),r.a.createElement(s,{to:"/cv"},"CV")))},u=i.c.div.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1ik35zv-0"})(["display:grid;justify-content:center;text-align:center;font-size:10px;text-transform:uppercase;letter-spacing:2px;color:gray;padding-top:4rem;@media (min-width:26rem){display:flex;flex-direction:row;text-align:initial;}"]),f=i.c.span.withConfig({displayName:"Footer__SeparatorSpan",componentId:"sc-1ik35zv-1"})(["@media (max-width:26rem){display:none;}"]),g=function(){return r.a.createElement(u,null,r.a.createElement("span",null,"Built with ",r.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"GatsbyJS")),r.a.createElement(f,{"aria-hidden":!0}," - "),r.a.createElement("span",null,"Open source on ",r.a.createElement("a",{href:c.repoUrl,target:"_blank",rel:"noopener noreferrer"},"Github")))},h=i.c.div.withConfig({displayName:"Layout__LayoutWrapper",componentId:"sc-1pnar2i-0"})(["margin:0 auto;max-width:",";padding:"," ",";@media (max-width:20rem){padding:"," ",";}"],Object(o.a)(32),Object(o.a)(1.5),Object(o.a)(.75),Object(o.a)(.5),Object(o.a)(.75));t.a=function(e){var t=e.children;return r.a.createElement(h,null,r.a.createElement(p,null),t,r.a.createElement(g,null))}},167:function(e,t,a){e.exports=a.p+"static/avatar-14cd1f0dfb3893ded33a685ee8fd2d37.jpg"},168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(156),o=a(160),l=a(161),c=a(157),m=i.c.h3.withConfig({displayName:"BlogList__Heading",componentId:"h3v50f-0"})(["margin-bottom:",";"],Object(c.a)(.25));t.a=function(e){var t=e.posts;return r.a.createElement(n.Fragment,null,t.map(function(e){var t=e.node,a=Object(l.a)(["frontmatter","title"],t)||Object(l.a)(["frontmatter","path"],t);return r.a.createElement("div",{key:t.frontmatter.path},r.a.createElement(m,null,r.a.createElement(o.a,{style:{boxShadow:"none"},to:t.frontmatter.path},a)),r.a.createElement("small",null,t.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-4389da3efc6e7b2caf03.js.map