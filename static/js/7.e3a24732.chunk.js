(this["webpackJsonpresume-cv"]=this["webpackJsonpresume-cv"]||[]).push([[7],{179:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n(5),o=n(21),i=function(e){var t=e.data;return Object(c.jsx)("article",{className:"degree-container",children:Object(c.jsxs)("header",{children:[Object(c.jsx)("h4",{className:"degree",children:t.degree}),Object(c.jsxs)("p",{className:"school",children:[Object(c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"education",children:[Object(c.jsx)("div",{className:"link-to",id:"education"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(c.jsx)(i,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(c.jsxs)("article",{className:"jobs-container",children:[Object(c.jsxs)("header",{children:[Object(c.jsxs)("h4",{children:[Object(c.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(c.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(c.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(c.jsx)("li",{children:e},e)}))})]})},b=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"experience",children:[Object(c.jsx)("div",{className:"link-to",id:"experience"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(c.jsx)(u,{data:e},e.company)}))]})};b.defaultProps={data:[]};var d=b;function j(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=p(e);if(t){var r=p(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return f(this,n)}}var g=n(60),O=n(59),v=function(e){var t=e.handleClick,n=e.active,r=e.label;return Object(c.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},x=function(e){var t=e.data,n=e.categories,r=t.category,a=t.competency,o=t.title,i={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(O.a)(Object(O.a)({},i),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return Object(c.jsxs)("div",{className:"skillbar clearfix",children:[Object(c.jsx)("div",{className:"skillbar-title",style:i,children:Object(c.jsx)("span",{children:o})}),Object(c.jsx)("div",{className:"skillbar-bar",style:s}),Object(c.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};x.defaultProps={categories:[]};var k=x,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(o,e);var t,n,r,a=h(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,c){return Object(O.a)(Object(O.a)({},n),{},Object(g.a)({},c,e===c&&!t.buttons[c]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(O.a)(Object(O.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(c.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(c.jsx)(v,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"skills",children:[Object(c.jsx)("div",{className:"link-to",id:"skills"}),Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h3",{children:"Skills"}),Object(c.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(c.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(c.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&j(t.prototype,n),r&&j(t,r),o}(r.Component);S.defaultProps={skills:[],categories:[]};var N=S,P=function(e){var t=e.data,n=e.last;return Object(c.jsxs)("li",{className:"course-container",children:[Object(c.jsxs)("a",{href:t.link,children:[Object(c.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(c.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(c.jsx)("div",{className:"course-dot",children:Object(c.jsx)("p",{className:"course-name",children:" \u2022"})})]})};P.defaultProps={last:!1};var D=P,w=function(e){var t,n=e.data;return Object(c.jsxs)("div",{className:"courses",children:[Object(c.jsx)("div",{className:"link-to",id:"courses"}),Object(c.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(c.jsx)(D,{data:e,last:n===t.length-1},e.title)})))})]})};w.defaultProps={data:[]};var C=w,L=function(){return Object(c.jsx)("div",{className:"references",children:Object(c.jsx)("div",{className:"link-to",id:"references"})})},E=[],A=[{school:"City Engineering College",degree:"Bachelor of Computer Science and Engineering",link:"http://cityengineeringcollege.ac.in/",year:2020},{school:"BNM Pre - University College",degree:"12th Science With Computer Science",link:"https://bnmit.org",year:2016}],R=[{company:"Tata Consultancy Services",position:"Assistant System Engineer",link:"https://www.tcs.com",daterange:"Mar 2021 - Current",points:["I am Working under the role of developer.","Focusing on cloud operations.","Golang , Docker and kubernetes are the main focus."]}],W=n(80),J=[{title:"Javascript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:3,category:["Web Development","Tools"]},{title:"MySQL/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Flask",competency:3,category:["Web Development","Python"]},{title:"Git",competency:5,category:["Tools"]},{title:"Android Native",competency:3,category:["Android Development"]},{title:"React-Native",competency:3,category:["Android Development","Javascript"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"GoLang",competency:5,category:["languages","Web Development"]},{title:"Docker",competency:5,category:["tools"]},{title:"kubernetes",competency:5,category:["tools"]},{title:"jenkins",competency:3,category:["tools"]},{title:"maven",competency:3,category:["tools"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"HTML + SASS/SCSS/CSS",competency:4,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"Java",competency:3.5,category:["Languages"]},{title:"C",competency:5,category:["Languages"]},{title:"Unix/Linux",competency:5,category:["tools"]},{title:"C++",competency:4,category:["Languages"]},{title:"PHP",competency:4,category:["Web Development","Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"Pandas",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]}].map((function(e){return Object(O.a)(Object(O.a)({},e),{},{category:e.category.sort()})})),T=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],_=Object(W.a)(new Set(J.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e,t){return{name:e,color:T[t]}})),M=["Education","Experience","Skills"];t.default=function(){return Object(c.jsx)(o.a,{title:"Resume",description:"Sachin Sadashiv's Resume.",children:Object(c.jsxs)("article",{className:"post",id:"resume",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{"data-testid":"heading",children:Object(c.jsx)(a.b,{to:"resume",children:"Resume"})}),Object(c.jsx)("a",{style:{marginLeft:500,marginTop:0},href:"https://drive.google.com/file/d/16Tz0baPO32WdjnWbm42c7_N_-79VSd0Z/view?usp=sharing",children:"Download My Resume"}),Object(c.jsx)("div",{className:"link-container",children:M.map((function(e){return Object(c.jsx)("h4",{children:Object(c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(c.jsx)(l,{data:A}),Object(c.jsx)(d,{data:R}),Object(c.jsx)(N,{skills:J,categories:_}),Object(c.jsx)(C,{data:E}),Object(c.jsx)(L,{})]})})}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(60);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},60:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}))},68:function(e,t,n){"use strict";function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n.d(t,"a",(function(){return c}))},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(15);var r=n(68),a=n(22);function o(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||Object(r.a)(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=7.e3a24732.chunk.js.map