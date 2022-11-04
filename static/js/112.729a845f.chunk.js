"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[112],{825:function(n,e,t){t(791);var r=t(184);e.Z=function(n){var e=n.children;return(0,r.jsx)("div",{style:{position:"relative",flexShrink:0,overflow:"hidden",padding:"3rem"},children:e})}},386:function(n,e,t){t.d(e,{K:function(){return u},h:function(){return s}});var r,i,c=t(168),o=t(444),a=t(731),s=o.ZP.header(r||(r=(0,c.Z)(["\n  overflow: hidden;\n  background-color: #121212;\n  padding: 20px 10px;\n"]))),u=(0,o.ZP)(a.OL)(i||(i=(0,c.Z)(["\n  float: left;\n  color: white;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  margin-right: 15px;\n\n  &.active {\n    background-color: #e5a00c;\n    color: white;\n  }\n\n  &:hover {\n    background-color: #ddd;\n    color: black;\n  }\n"])))},187:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(683);function i(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}t(791);var c=t(837),o=t(184),a=["src"],s=function(n){var e=n.src,t=i(n,a);return(0,o.jsx)(c.C6,(0,r.Z)({src:e,alt:""},t))}},837:function(n,e,t){t.d(e,{C6:function(){return d},Ut:function(){return p},r6:function(){return f},sS:function(){return l}});var r,i,c,o,a=t(168),s=t(444),u=t(731),l=s.ZP.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: base-line;\n"]))),p=s.ZP.li(i||(i=(0,a.Z)(["\n  display: flex;\n  flex-basis: calc(100% / 6);\n  padding: 15px 0;\n"]))),f=(0,s.ZP)(u.OL)(c||(c=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212121;\n  height: 100%;\n  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));\n  border-radius: 0.25rem;\n"]))),d=s.ZP.img(o||(o=(0,a.Z)(["\n  border-radius: 0.25rem;\n  &:hover {\n    outline: 1px solid #fff;\n  }\n"])))},112:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,i,c,o,a,s=t(861),u=t(885),l=t(757),p=t.n(l),f=t(825),d=t(791),h=t(731),x=t(470),v=t(390),b=t(168),m=t(444),g=m.ZP.h1(r||(r=(0,b.Z)(["\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 32px;\n  font-weight: 700;\n"]))),y=m.ZP.span(i||(i=(0,b.Z)(["\n  border: 1px solid white;\n  border-radius: 5px;\n  font-size: 14px;\n  margin-right: 5px;\n  padding: 4px;\n"]))),j=m.ZP.div(c||(c=(0,b.Z)(["\n  padding: 48px;\n  background: #3c3c3c;\n  color: white;\n  display: flex;\n  align-items: flex-start;\n  flex-direction: row;\n  row-gap: 48px;\n  column-gap: 48px;\n"]))),w=t(187),Z=m.ZP.div(o||(o=(0,b.Z)(["\n  display: flex;\n  max-width: 700px;\n  flex-direction: column;\n"]))),O=m.ZP.div(a||(a=(0,b.Z)(["\n  margin-bottom: 30px;\n"]))),k=t(683),P=t(386),S=t(184),_=function(n){var e=n.location,t=n.movieId;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("h2",{children:"Additonal Information"}),(0,S.jsxs)("ul",{children:[(0,S.jsx)("li",{children:(0,S.jsx)(P.K,{to:"cast",state:(0,k.Z)((0,k.Z)({},e.state),{},{movieId:t}),children:"Cast"})}),(0,S.jsx)("li",{children:(0,S.jsx)(P.K,{to:"reviews",state:(0,k.Z)((0,k.Z)({},e.state),{},{movieId:t}),children:"Reviews"})})]})]})},I=function(n){var e=n.filmDetails,t=n.location,r=n.movieId,i=e.poster_path,c=e.original_title,o=e.vote_average,a=e.overview,s=e.genres,u=Math.floor(10*Number(o));return(0,S.jsxs)(S.Fragment,{children:[" ",(0,S.jsxs)(j,{children:[(0,S.jsx)(w.Z,{src:i?"https://image.tmdb.org/t/p/w500/".concat(i):"https://via.placeholder.com/300x450",width:"300",height:"450"}),(0,S.jsxs)(Z,{children:[(0,S.jsx)(O,{children:(0,S.jsx)(g,{children:c})}),(0,S.jsxs)(O,{children:[(0,S.jsx)("h2",{children:"User Rate"}),(0,S.jsx)("p",{children:" ".concat(u,"%")})]}),(0,S.jsxs)(O,{children:[(0,S.jsx)("h2",{children:"Overview"}),(0,S.jsx)("p",{children:a})]}),(0,S.jsxs)(O,{children:[(0,S.jsx)("h2",{children:"Geners"}),(0,S.jsx)("ul",{style:{display:"flex"},children:s.map((function(n){var e=n.id,t=n.name;return(0,S.jsx)(y,{children:t},e)}))})]}),(0,S.jsx)(O,{children:(0,S.jsx)(_,{location:t,movieId:r})})]})]}),(0,S.jsx)(j,{children:(0,S.jsx)(d.Suspense,{fallback:null,children:(0,S.jsx)(x.j3,{})})})]})},U=function(n){var e,t,r=(0,d.useState)(null),i=(0,u.Z)(r,2),c=i[0],o=i[1],a=(0,x.TH)(),l=(0,x.UO)().movieId,b=null!==(e=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/goit-react-hw-05-movies";if((0,d.useEffect)((function(){function n(){return(n=(0,s.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,v.ts)(l);case 2:e=n.sent,o(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[l]),null!==c)return(0,S.jsx)("main",{children:(0,S.jsxs)(f.Z,{children:[(0,S.jsx)(h.OL,{to:b,children:"\u2b05\ufe0f Go Back"}),(0,S.jsx)(I,{filmDetails:c,location:a,movieId:l})]})})}},390:function(n,e,t){t.d(e,{EU:function(){return v},JS:function(){return s},cI:function(){return f},h1:function(){return h},ts:function(){return l}});var r=t(861),i=t(757),c=t.n(i),o=t(44),a="fb16fb8d72c2b1b51619ebc618e9b844";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("trending/all/day?api_key=".concat(a));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("movie/".concat(e,"?api_key=").concat(a));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("movie/".concat(e,"/credits?api_key=").concat(a));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(a));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("search/movie?api_key=".concat(a,"&query=").concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:return n.prev=7,n.t0=n.catch(0),console.log(n.t0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}o.ZP.defaults.baseURL="https://api.themoviedb.org/3/"},683:function(n,e,t){function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=112.729a845f.chunk.js.map