"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[235],{825:function(t,n,r){r(791);var e=r(184);n.Z=function(t){var n=t.children;return(0,e.jsx)("div",{style:{position:"relative",flexShrink:0,overflow:"hidden",padding:"3rem"},children:n})}},105:function(t,n,r){r(791);var e=r(837),c=r(187),a=r(184);n.Z=function(t){var n=t.movieList,r=t.location,o="home"===t.page?"movies/":"";return(0,a.jsx)(e.sS,{children:n.map((function(t){var n=t.id,u=t.poster_path;return(0,a.jsx)(e.Ut,{children:(0,a.jsx)(e.r6,{to:"".concat(o).concat(n),state:{from:r},children:(0,a.jsx)(c.Z,{src:u?"https://image.tmdb.org/t/p/w500/".concat(u):"https://via.placeholder.com/200x300",height:"300",width:"200"})})},n)}))})}},187:function(t,n,r){r.d(n,{Z:function(){return i}});var e=r(683);function c(t,n){if(null==t)return{};var r,e,c=function(t,n){if(null==t)return{};var r,e,c={},a=Object.keys(t);for(e=0;e<a.length;e++)r=a[e],n.indexOf(r)>=0||(c[r]=t[r]);return c}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(e=0;e<a.length;e++)r=a[e],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(c[r]=t[r])}return c}r(791);var a=r(837),o=r(184),u=["src"],i=function(t){var n=t.src,r=c(t,u);return(0,o.jsx)(a.C6,(0,e.Z)({src:n,alt:""},r))}},235:function(t,n,r){r.r(n),r.d(n,{default:function(){return y}});var e,c=r(861),a=r(885),o=r(757),u=r.n(o),i=r(825),s=r(105),p=r(791),f=r(168),l=r(444).ZP.h1(e||(e=(0,f.Z)(["\n  text-align: center;\n  font-size: 48px;\n  margin-top: 3rem;\n"]))),h=r(184),d=function(t){var n=t.children;return(0,h.jsx)(l,{children:n})},v=r(470),b=r(390),y=function(t){var n=(0,p.useState)([]),r=(0,a.Z)(n,2),e=r[0],o=r[1],f=(0,v.TH)();return(0,p.useEffect)((function(){function t(){return(t=(0,c.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,b.JS)();case 2:n=t.sent,o(n.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,h.jsxs)("main",{children:[(0,h.jsx)(d,{children:"Popular Films \u2b07\ufe0f"}),(0,h.jsx)(i.Z,{children:(0,h.jsx)(s.Z,{movieList:e,location:f,page:"home"})})]})}},837:function(t,n,r){r.d(n,{C6:function(){return h},Ut:function(){return f},r6:function(){return l},sS:function(){return p}});var e,c,a,o,u=r(168),i=r(444),s=r(731),p=i.ZP.ul(e||(e=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: base-line;\n"]))),f=i.ZP.li(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-basis: calc(100% / 6);\n  padding: 15px 0;\n"]))),l=(0,i.ZP)(s.OL)(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212121;\n  height: 100%;\n  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));\n  border-radius: 0.25rem;\n"]))),h=i.ZP.img(o||(o=(0,u.Z)(["\n  border-radius: 0.25rem;\n  &:hover {\n    outline: 1px solid #fff;\n  }\n"])))},390:function(t,n,r){r.d(n,{EU:function(){return b},JS:function(){return i},cI:function(){return l},h1:function(){return d},ts:function(){return p}});var e=r(861),c=r(757),a=r.n(c),o=r(44),u="fb16fb8d72c2b1b51619ebc618e9b844";function i(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("trending/all/day?api_key=".concat(u));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("movie/".concat(n,"?api_key=").concat(u));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("movie/".concat(n,"/credits?api_key=").concat(u));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("movie/".concat(n,"/reviews?api_key=").concat(u));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function b(t){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.ZP.get("search/movie?api_key=".concat(u,"&query=").concat(n));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}o.ZP.defaults.baseURL="https://api.themoviedb.org/3/"},683:function(t,n,r){function e(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function c(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function a(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}r.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=235.67c9a057.chunk.js.map