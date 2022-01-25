(this["webpackJsonpresume-cv"]=this["webpackJsonpresume-cv"]||[]).push([[0],{21:function(e,n,t){"use strict";var c=t(0),i=t(1),a=t(17),s=t(3),l=t(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/cv-resume",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&l.a.initialize(j);var b=function(){var e=Object(s.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},h=t(5),d=t(23),u=[{index:!0,label:"Sachin Sadashiv",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return t.e(6).then(t.t.bind(null,178,7))})),m=function(){var e=Object(i.useState)(!1),n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:u.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,onClick:function(){return a(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:u.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(h.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:u.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=t(27),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(h.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/cv-resume","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Sachin Sadashiv"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:sachin.sadashivsap@gmail.com",children:"sachin.sadashivsap@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{align:"justify",children:"Hi, I'm Sachin Sadashiv. I like building things. Accomplished Software Developer with 2 years of experience in development of applications. Excels in every stage of the life cycle of software development, including design creation, coding, debugging, testing and maintenance. Expert in devising innovative and tailored solutions to assist businesses achieve their goals in avariety of industries.Advanced skills and knowledge of leading programming tools with a strong background in mathematics, algorithms, and data-processing logic."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(h.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(h.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsx)("p",{className:"copyright",children:"\xa9 Sachin Sadashiv"})]})]})},v=function(){var e=Object(s.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},g=function(e){return Object(c.jsxs)(a.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(v,{}),Object(c.jsxs)(a.a,{titleTemplate:"%s | Sachin Sadashiv",defaultTitle:"Sachin Sadashiv",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};g.defaultProps={children:null,fullPage:!1,title:null,description:"Sachin Sadashiv's personal website."};n.a=g},27:function(e,n,t){"use strict";var c=t(0),i=(t(1),t(31)),a=t(32),s=t(33),l=t(34),r=t(35),o=t(36),j=t(37),b=t(38),h=[{link:"https://github.com/VulRun1331",label:"Github",icon:a.faGithub},{link:"https://www.facebook.com/sapxd/",label:"Facebook",icon:s.faFacebookF},{link:"https://www.instagram.com/saacchhin/",label:"Instagram",icon:l.faInstagram},{link:"https://linkedin.com/in/sachin-sadashiv-22241017b/",label:"LinkedIn",icon:r.faLinkedinIn},{link:"https://angel.co/u/padmalochan-sahoo",label:"Angel List",icon:o.faAngellist},{link:"https://twitter.com/Saacchhin1331",label:"Twitter",icon:j.faTwitter},{link:"mailto:sachin.sadashivsap@gmail.com",label:"Email",icon:b.faEnvelope}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},51:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),a=t.n(i),s=t(16),l=t(5),r=t(3),o=t(21),j=(t(51),Object(i.lazy)((function(){return Promise.all([t.e(2),t.e(9)]).then(t.bind(null,175))}))),b=Object(i.lazy)((function(){return t.e(10).then(t.bind(null,182))})),h=Object(i.lazy)((function(){return Promise.all([t.e(4),t.e(11)]).then(t.bind(null,176))})),d=Object(i.lazy)((function(){return t.e(12).then(t.bind(null,177))})),u=Object(i.lazy)((function(){return t.e(8).then(t.bind(null,181))})),O=Object(i.lazy)((function(){return t.e(7).then(t.bind(null,179))})),m=Object(i.lazy)((function(){return Promise.all([t.e(5),t.e(13)]).then(t.bind(null,180))})),x=function(){return Object(c.jsx)(l.a,{basename:"/cv-resume",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(r.a,{path:"/about",component:j}),Object(c.jsx)(r.a,{path:"/projects",component:u}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(s.hydrate)(Object(c.jsx)(p,{}),f):Object(s.render)(Object(c.jsx)(p,{}),f)}},[[52,1,3]]]);
//# sourceMappingURL=main.a69410c5.chunk.js.map