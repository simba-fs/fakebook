(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{8661:function(r,t,n){"use strict";n.d(t,{Z:function(){return c}});var e=n(5893);function c(r){var t=r.children;return(0,e.jsxs)("div",{children:["Error: ",t]})}},1887:function(r,t,n){"use strict";n.d(t,{Z:function(){return c}});var e=n(5893);function c(){return(0,e.jsx)("h1",{children:"Loading ......"})}},5028:function(r,t,n){"use strict";n.d(t,{Z:function(){return d}});var e=n(7757),c=n.n(e),o=n(2137),u=n(6156),i=n(129);function s(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.push.apply(n,e)}return n}function a(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,u.Z)(r,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}var f="https://jsonplaceholder.typicode.com";function p(r){return fetch("".concat(f,"/users/").concat(r.userId)).then((function(r){return r.json()})).then((function(t){return a(a({},r),{},{author:t})}))}function d(r){return h.apply(this,arguments)}function h(){return(h=(0,o.Z)(c().mark((function r(t){var n,e,o;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t&&t.id&&(n=t.id,delete t.id),e="".concat(f,"/posts"),n&&(e+="/".concat(n)),t&&(e+="?".concat((0,i.stringify)(t))),r.next=6,fetch(e).then((function(r){return r.json()}));case 6:if(o=r.sent,!Array.isArray(o)){r.next=11;break}return r.abrupt("return",Promise.all(o.map((function(r){return p(r)}))));case 11:return r.abrupt("return",p(o));case 12:case"end":return r.stop()}}),r)})))).apply(this,arguments)}},1552:function(r,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s},default:function(){return a}});var e=n(5893),c=n(5723),o=n(5028),u=n(1887);n(8661);function i(r){var t=r.post;return(0,e.jsxs)("div",{children:[(0,e.jsx)("h1",{children:t.title}),(0,e.jsx)("h4",{children:"".concat(t.author.name," <").concat(t.author.username,">")}),(0,e.jsx)("p",{children:t.body})]})}var s=!0;function a(r){var t=r.id,n=(0,c.ZP)("getPost",(function(){return(0,o.Z)({id:t})})),s=n.data,a=n.postError;return a?(0,e.jsx)(ErrorMs,{children:a}):s?(0,e.jsx)(i,{post:s}):(0,e.jsx)(u.Z,{})}},5021:function(r,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[id]",function(){return n(1552)}])},4654:function(){}},function(r){r.O(0,[774,351,723,43],(function(){return t=5021,r(r.s=t);var t}));var t=r.O();_N_E=t}]);