(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86,179],{7645:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(5893),o=t(5474),c=t.n(o),i=t(1664);function u(e){var n=e.children,t=e.linkTo;return t?(0,r.jsx)(i.default,{href:t,as:t,passHref:!0,children:(0,r.jsx)("a",{className:c().card,children:(0,r.jsx)("div",{children:n})})}):(0,r.jsx)("div",{className:c().card,children:n})}},8661:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893);function o(e){var n=e.children;return(0,r.jsxs)("div",{children:["Error: ",n]})}},1887:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893);function o(){return(0,r.jsx)("h1",{children:"Loading ......"})}},4384:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(5893),o=t(5474),c=t.n(o),i=(t(1664),t(7645));function u(e){var n=e.posts;return console.log("post link",{posts:n}),(0,r.jsx)("div",{className:c().grid,children:n.map((function(e){return(0,r.jsxs)(i.Z,{linkTo:"/post/".concat(e.id),children:[(0,r.jsx)("h2",{children:e.title}),(0,r.jsxs)("p",{children:["Author: ",e.author.username]})]},e.id)}))})}},5028:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(7757),o=t.n(r),c=t(2137),i=t(6156),u=t(129);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f="https://jsonplaceholder.typicode.com";function l(e){return fetch("".concat(f,"/users/").concat(e.userId)).then((function(e){return e.json()})).then((function(n){return s(s({},e),{},{author:n})}))}function d(e){return p.apply(this,arguments)}function p(){return(p=(0,c.Z)(o().mark((function e(n){var t,r,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&n.id&&(t=n.id,delete n.id),r="".concat(f,"/posts"),t&&(r+="/".concat(t)),n&&(r+="?".concat((0,u.stringify)(n))),e.next=6,fetch(r).then((function(e){return e.json()}));case 6:if(c=e.sent,!Array.isArray(c)){e.next=11;break}return e.abrupt("return",Promise.all(c.map((function(e){return l(e)}))));case 11:return e.abrupt("return",l(c));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},6071:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var c=o(t(7294)),i=t(1689),u=t(2441),a=t(5749),s={};function f(e,n,t,r){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var l=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",l=c.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,h=e.replace,_=e.shallow,m=e.scroll,y=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var b=c.Children.only(v),g=b&&"object"===typeof b&&b.ref,j=(0,a.useIntersection)({rootMargin:"200px"}),x=r(j,2),O=x[0],w=x[1],E=c.default.useCallback((function(e){O(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,O]);(0,c.useEffect)((function(){var e=w&&n&&(0,i.isLocalURL)(d),r="undefined"!==typeof y?y:t&&t.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(t,d,p,{locale:r})}),[p,d,w,y,n,t]);var k={ref:E,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:a,scroll:u}))}(e,t,d,p,h,_,m,y)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),f(t,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var H="undefined"!==typeof y?y:t&&t.locale,L=t&&t.isLocaleDomain&&(0,i.getDomainLocale)(p,H,t&&t.locales,t&&t.domainLocales);k.href=L||(0,i.addBasePath)((0,i.addLocale)(p,H,t&&t.defaultLocale))}return c.default.cloneElement(b,k)};n.default=l},5749:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,a=(0,o.useRef)(),s=(0,o.useState)(!1),f=r(s,2),l=f[0],d=f[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),t||l||e&&e.tagName&&(a.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,i=r.elements;return i.set(e,n),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,l]);return(0,o.useEffect)((function(){if(!i&&!l){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[l]),[p,l]};var o=t(7294),c=t(8391),i="undefined"!==typeof IntersectionObserver;var u=new Map},5130:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(5893),o=t(5723),c=t(5028),i=t(4384),u=t(1887),a=t(8661);function s(){var e=(0,o.ZP)("getAllUser",(function(){return(0,c.Z)()})),n=e.data,t=e.error;return t?(0,r.jsx)(a.Z,{children:t}):n?(0,r.jsx)(i.Z,{posts:n}):(0,r.jsx)(u.Z,{})}},7931:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){return t(5130)}])},5474:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},1664:function(e,n,t){e.exports=t(6071)},4453:function(){},4654:function(){}},function(e){e.O(0,[774,351,433,723,43],(function(){return n=7931,e(e.s=n);var n}));var n=e.O();_N_E=n}]);