(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235,179],{7645:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var t=r(5893),o=r(5474),c=r.n(o),i=r(1664);function a(e){var n=e.children,r=e.linkTo;return r?(0,t.jsx)(i.default,{href:r,as:r,passHref:!0,children:(0,t.jsx)("a",{className:c().card,children:(0,t.jsx)("div",{children:n})})}):(0,t.jsx)("div",{className:c().card,children:n})}},8661:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(5893);function o(e){var n=e.children;return(0,t.jsxs)("div",{children:["Error: ",n]})}},1887:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var t=r(5893);function o(){return(0,t.jsx)("h1",{children:"Loading ......"})}},6071:function(e,n,r){"use strict";var t=r(3038),o=r(862);n.default=void 0;var c=o(r(7294)),i=r(1689),a=r(2441),u=r(5749),s={};function l(e,n,r,t){if(e&&(0,i.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,r=(0,a.useRouter)(),o=r&&r.pathname||"/",f=c.default.useMemo((function(){var n=(0,i.resolveHref)(o,e.href,!0),r=t(n,2),c=r[0],a=r[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,_=e.shallow,m=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var x=c.Children.only(v),j=x&&"object"===typeof x&&x.ref,E=(0,u.useIntersection)({rootMargin:"200px"}),y=t(E,2),b=y[0],H=y[1],L=c.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);(0,c.useEffect)((function(){var e=H&&n&&(0,i.isLocalURL)(d),t="undefined"!==typeof g?g:r&&r.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&l(r,d,p,{locale:t})}),[p,d,H,g,n,r]);var k={ref:L,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,c,a,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==a&&(a=t.indexOf("#")<0),n[o?"replace":"push"](r,t,{shallow:c,locale:u,scroll:a}))}(e,r,d,p,h,_,m,g)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),l(r,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var w="undefined"!==typeof g?g:r&&r.locale,C=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(p,w,r&&r.locales,r&&r.domainLocales);k.href=C||(0,i.addBasePath)((0,i.addLocale)(p,w,r&&r.defaultLocale))}return c.default.cloneElement(x,k)};n.default=f},5749:function(e,n,r){"use strict";var t=r(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!i,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=t(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=a.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return a.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,c=t.observer,i=t.elements;return i.set(e,n),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r(7294),c=r(8391),i="undefined"!==typeof IntersectionObserver;var a=new Map},33:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r(5893);function o(){return fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return function(e,n){var r={};return n.forEach((function(n){return r[n]=e[n]})),r}(e,["id","name","username","email"])}))}))}var c=r(5723),i=r(5474),a=r.n(i),u=(r(1664),r(7645));function s(e){var n=e.users;return(0,t.jsx)("div",{className:a().grid,children:n.map((function(e){return(0,t.jsxs)(u.Z,{linkTo:"/user/".concat(e.id),children:[(0,t.jsx)("h2",{children:e.name}),(0,t.jsx)("p",{children:e.username}),(0,t.jsx)("p",{children:e.email})]},e.id)}))})}var l=r(1887),f=r(8661);function d(){var e=(0,c.ZP)("getAllUser",o),n=e.data,r=e.error;return r?(0,t.jsx)(f.Z,{children:r}):n?(0,t.jsx)(s,{users:n}):(0,t.jsx)(l.Z,{})}},252:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){return r(33)}])},5474:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},1664:function(e,n,r){e.exports=r(6071)},4453:function(){}},function(e){e.O(0,[774,351,433,723],(function(){return n=252,e(e.s=n);var n}));var n=e.O();_N_E=n}]);