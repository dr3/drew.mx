(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(e,t,n){"use strict";n.r(t);n(34);var a=n(186),i=n.n(a),o=n(0),r=n.n(o),l=n(156),s=n(164),d=n.n(s),c=n(161),u=n(187),m=n.n(u),g=(n(170),"#125ad5"),p=Object(l.b)(["font-family:Times;"]),h=l.c.span.withConfig({displayName:"Heading__StyledName",componentId:"sc-1n1oh5g-0"})(["font-size:3.75rem;",";display:block;"],p),b=l.c.span.withConfig({displayName:"Heading__StyledTitle",componentId:"sc-1n1oh5g-1"})(["font-size:2.25rem;",";display:block;color:",";"],p,g),f=l.c.h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-1n1oh5g-2"})(["border:none;font-weight:normal;"]),y=function(e){var t=e.name,n=e.title;return r.a.createElement(f,null,r.a.createElement(h,null,t),r.a.createElement(b,null,n))},w=(n(75),n(56),n(35),l.c.div.withConfig({displayName:"Details__Wrapper",componentId:"n21v49-0"})(["align-self:center;margin-top:2.4375rem;"])),v=l.c.div.withConfig({displayName:"Details__DetailWrapper",componentId:"n21v49-1"})(["text-align:right;font-size:0.9375rem;"]),k=l.c.span.withConfig({displayName:"Details__Label",componentId:"n21v49-2"})(["color:",";font-size:0.75rem;"],g),S=function(e){var t=e.values;return r.a.createElement(w,null,t&&t.map(function(e){var t=e.label,n=e.text;return r.a.createElement(v,{key:t||n},t&&r.a.createElement(k,null,t,": "),n&&r.a.createElement("span",null,n))}))},I=l.c.div.withConfig({displayName:"Header__StyledHeader",componentId:"sc-1y7wkde-0"})(["@media print,(min-width:47rem){display:grid;grid-template-columns:4fr 1fr;grid-column-gap:1rem;}"]),C=function(e){var t=e.name,n=e.title,a=e.userDetails;return r.a.createElement(I,null,r.a.createElement(y,{name:t,title:n}),r.a.createElement(S,{values:a}))},B=l.c.p.withConfig({displayName:"Section__SectionTitle",componentId:"sc-99h4ly-0"})(["color:",";font-weight:bold;@media screen and (max-width:47rem){&::before{content:'';position:absolute;height:4px;border:none;background:",";left:0;right:0;top:0.5rem;}& span{background-color:white;position:relative;padding-right:1rem;}}"],g,g),E=l.c.div.withConfig({displayName:"Section__StyledRow",componentId:"sc-99h4ly-1"})(["position:relative;@media print,(min-width:47rem){display:grid;grid-template-columns:1fr 6fr;grid-column-gap:1rem;}"]),x=l.c.div.withConfig({displayName:"Section__StyledLine",componentId:"sc-99h4ly-2"})(["height:4px;background-color:",";margin-top:0.5rem;@media screen and (max-width:47rem){display:none;}"],g),N=l.c.div.withConfig({displayName:"Section__RowLabel",componentId:"sc-99h4ly-3"})(["text-align:right;margin-bottom:0.8125rem;@media screen and (max-width:47rem){font-weight:bold;text-align:initial;margin:0;}"]),A=l.c.p.withConfig({displayName:"Section__SubsectionTitle",componentId:"sc-99h4ly-4"})(["margin:0;font-weight:bold;"]),_=function(e){var t=e.label,n=e.children;return r.a.createElement(E,null,r.a.createElement(N,null,t),r.a.createElement("div",null,n))},W=function(e){var t=e.title,n=e.subsections,a=r.a.createElement(x,null);return r.a.createElement("div",null,r.a.createElement(_,{label:a},r.a.createElement(B,null,r.a.createElement("span",null,t))),n&&n.map(function(e){var t=e.label,n=e.title,a=e.body;return r.a.createElement(_,{label:t,key:t||n||a[0]},n&&r.a.createElement(A,null,n),a&&a.map(function(e){return r.a.createElement("p",{key:e},e)}))}))},M=l.c.div.withConfig({displayName:"Wrapper",componentId:"tnu170-0"})(["max-width:57rem;margin:0 auto;line-height:1.35rem;",";color:black;padding:0 1rem;text-align:justify;"],p);function T(){var e=i()(["\n  @page {\n    size: auto;\n    margin: 0mm 0mm 0mm 0mm;\n  }\n"]);return T=function(){return e},e}n.d(t,"query",function(){return P});var D=Object(l.a)(T()),P=(t.default=function(e){var t=e.data,n=Object(c.a)(["site","siteMetadata","title"],t),a=Object(c.a)(["site","siteMetadata","title"],t);return r.a.createElement(M,null,r.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:"CV | "+n}),r.a.createElement(D,null),r.a.createElement(C,m.a),m.a.sections&&m.a.sections.map(function(e){return r.a.createElement(W,Object.assign({key:e.title},e))}))},"3998338720")},161:function(e,t,n){"use strict";t.a=function(e,t){return e.reduce(function(e,t){return e&&e[t]?e[t]:null},t)}},170:function(e,t,n){var a=n(25).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n(14)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},186:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),e.raw=t,e}},187:function(e,t){e.exports={name:"Drew McMillan",title:"Curriculum Vitae",userDetails:[{label:"Mailing Address",text:"26 Holly Walk"},{text:"Stratford Upon Avon"},{text:"CV379LR"},{label:"Email",text:"hello@mcmill.co.uk"},{label:"Website",text:"drew.mx"}],sections:[{title:"About Me",subsections:[{body:["Currently working to rebuild BBC article pages from the ground up, I am very a enthusiastic developer with hands on experience working on websites used by millions of users a month. I have experience with the full process of developing robust web applications from analysis and design though to development, testing and deploying.","Achieving a 1st in computer science in 2018, I have a large number of both technical and personal skills. I am very adaptable to new infrastructures and languages, quickly being able to develop new features and improve existing code. I have a wide range of personal skills such as time keeping, team work to ensure that I can develop effective software and write quality code.","Over the next few years I hope to build on my existing knowledge and perfect these skills even more, learn more technical languages, techniques and standards to forge myself a strong career in computing. I hope that what you read will put me in good stride to become an excellent member of your team."]}]},{title:"Key Skills",subsections:[{label:"Adapting quickly",body:["When working in an agile team you can often move to a new software system when a new epic is begun. I am very strong at quickly understanding the new and unknown infrastructure, and developing within it."]},{label:"Agile Methodologies",body:["I have a strong understanding of the agile planning and delivery process, and how it can be best utilised to deliver a high quality product on time."]},{label:"Software design",body:["I am able to understand a brief given and make decisions on how to best approach the issue, debating various aspects and ensuring that all design decisions highly suit the application."]},{label:"Growing progamming knowlege",body:["Not only is the number of languages I am confident in constantly growing, I am constantly developing my understanding of how they can be best used to produce the highest quality product."]},{label:"Teamwork and Personal Skills",body:["I work well with a team and I am able to offer support where needed to team members to ensure that we work optimally to produce high quality software."]},{label:"Problem solving",body:["When a problem presents itself I am able to quickly understand the issue and approach the solution before it becomes a large issue. This includes being able to effectively adapt and refactor a codebase to meet new briefs."]}]},{title:"Employment",subsections:[{label:"November 2018 – Now",title:"Software Engineer - BBC News",body:["Working with the latest in full stack Javascript to build the future of BBC article pages in ReactJS. Current work can be found at https://github.com/bbc/simorgh and https://github.com/bbc/psammead which are entirely opensource."]},{label:"September 2017 – Nov 2018",title:"Junior Software Engineer - BBC News",body:["Working on the front page of BBC news (bbc.co.uk/news) as well as a number of other pages such as topic pages and market data. Working part time (Sept 2017 -> June 2018) during my studies, and full time after that, to develop new features and improving existing code to be more reusable. Writing e2e and unit tests to ensure that our sites maintain functionality with a quickly changing codebase."]},{label:"August 2016 – August 2017",title:"Trainee Web Developer - BBC News",body:["Part of a technical team to produce new features, improvements and whole new sections of the BBC News website. I worked alongside journalists, project and product managers, designers, business analysts, testers and other developers. Working directly on the output of one of the world’s most successful news websites to a global audience of 100s of millions.","Key Projects -","Embedephant - Building a social media post backup system to be used on BBC News and World Service story pages. Working with a small team to evaluate the best approach to take from the start, and developing the system to most effectively and efficiently meet the brief. Accounting for user performace, ensuring stability and working with multiple other teams to integrate the application across the BBC News products.","CPS Migration and BAU - Moving BBC World Service pages to a new CMS, developing new features for audience of millions and improving the existing product to remove bugs and improve usability, ensuring that all pages were translated correctly into over 30 languages. Most notible change was when I single handly improved social sharing by over 80%"]},{label:"July 2012 – September 2015",title:"Waitrose & Virgin Media - Customer Service",body:["Working during my studies to help serve customers by offering great customer service. During this time I improved my comunication and timekeeping skills."]}]},{title:"Technical Interests",subsections:[{label:"Full Stack Web Development",body:["Developing across all layers of web infrastructure to develop great products, especially with JavaScript. Implementing from the front end, following UX designs to create a great user experience, to the backend designing strong infrastructure with concerns for performance, security and usability."]},{label:"Performance",body:["In competitive market user load times of a couple seconds can mean a large amount of the audience leave your site. I have a keen and growing interest in reducing this using methods such as caching, JavaScript bundling and developing to avoid bottlenecks, such as blocking JavaScript, where possible."]},{label:"Serverless Node",body:["At the BBC I spent a lot of time developing on 'Morph', which consists of thousands of micro-services deployed on a cloud infrastructure. I would love to go all the way into true serverless and expand on my existing knowledge. I have used serverless AWS Lambdas in the past, such as creating a prototype for a Korean content collator, which is now in production, but not anything directly."]},{label:"React Native",body:["Over the past couple years I have experimented with React Native and how it can be used to develop applications for both IOS and Android. The ability to comfortably do both as a web developer is brilliant and I would love the opportunity to expand my knowledge in the future."]},{label:"Computer Vision",body:["During my time at University I have had a lot of experience in Computer vision and how it can be used to understand the real world, I find this very interesting and would love to possibly use it on the web in the future."]}]},{title:"Education",subsections:[{label:"2014 - 2018",title:"Computer Science @ Aberystwyth University – 1st",body:["In June 2018 I graduated with a 1st class degree in 'BSC Computer Science (with integrated year in industry)'","In my final year, apart from full stack web, I had a strong interest in Machine learning and Computer Vision and how it can be used to improve our understanding of the real world."]},{label:"2012 - 2014",title:"Stratford School 6th Form",body:["A Levels in Maths, Business Studies and ICT. AS Level in Physics"]},{label:"2014-2012",title:"Stratford Upon Avon High School",body:["12 GCSE's ranging from A* to B - A in Maths and Science and a B in English"]}]},{title:"Technical Skills",subsections:[{label:"Front end development",body:["Detailed knowledge of JavaScript as well as being able to use the lastest HTML and CSS to develop great user experiences while considering backwards compatability with older browsers and adapting to the audience."]},{label:"Programming",body:["Able to quickly learn new languages and how to best use them for various applications. Strong in Clientside Javascript, React, Node.js, Ruby, PHP."]},{label:"Version Control",body:["Strong confidence using GIT to manage development and ensure that code I write is easily managed and up to date with the latest changes."]},{label:"Cloud Computing",body:["Able to utilize cloud computing to deploy large applications into production. Strong understanding of various technologies within AWS and how they can best be used to produce an end result."]}]},{title:"References",subsections:[{title:"Bogdan Dogaru - Software Engineering Team Lead (Current Team)",body:["ZONE 6B BBC, BBC Broadcasting House, Portland Pl, W1A1AA Bogdan.Dogaru@bbc.co.uk"]},{title:"James Donohue - Software Engineering Team Lead (Previous Team)",body:["ZONE 6B BBC, BBC Broadcasting House, Portland Pl, W1A1AA james.donohue@bbc.co.uk"]}]}]}}}]);
//# sourceMappingURL=component---src-pages-cv-jsx-2ce0544e6d9b2f5168e6.js.map