"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[29],{29:function(t,n,r){r.r(n),r.d(n,{default:function(){return m}});var e,a,c=r(861),u=r(885),i=r(757),s=r.n(i),o=r(837),p=r(791),f=r(470),l=r(390),h=r(168),d=r(444),v=d.ZP.img(e||(e=(0,h.Z)(["\n  border-radius: 100px;\n"]))),x=d.ZP.li(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-basis: calc(100% / 8);\n  padding: 15px 0;\n"]))),b=r(184),m=function(t){var n=(0,p.useState)([]),r=(0,u.Z)(n,2),e=r[0],a=r[1],i=(0,f.TH)().state.movieId;return(0,p.useEffect)((function(){function t(){return(t=(0,c.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.cI)(i);case 2:n=t.sent,a(n.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[i]),(0,b.jsx)("section",{children:(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{children:"Cast of "}),(0,b.jsx)(o.sS,{children:e.map((function(t){var n=t.id,r=t.profile_path;t.name,t.character;return(0,b.jsx)(x,{children:(0,b.jsx)(v,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://via.placeholder.com/200x100",alt:"",width:"140",height:"140"})},n)}))})]})})}},837:function(t,n,r){r.d(n,{C6:function(){return h},Ut:function(){return f},r6:function(){return l},sS:function(){return p}});var e,a,c,u,i=r(168),s=r(444),o=r(731),p=s.ZP.ul(e||(e=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: base-line;\n"]))),f=s.ZP.li(a||(a=(0,i.Z)(["\n  display: flex;\n  flex-basis: calc(100% / 6);\n  padding: 15px 0;\n"]))),l=(0,s.ZP)(o.OL)(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212121;\n  height: 100%;\n  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.3));\n  border-radius: 0.25rem;\n"]))),h=s.ZP.img(u||(u=(0,i.Z)(["\n  border-radius: 0.25rem;\n  &:hover {\n    outline: 1px solid #fff;\n  }\n"])))},390:function(t,n,r){r.d(n,{EU:function(){return x},JS:function(){return s},cI:function(){return l},h1:function(){return d},ts:function(){return p}});var e=r(861),a=r(757),c=r.n(a),u=r(44),i="fb16fb8d72c2b1b51619ebc618e9b844";function s(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("trending/all/day?api_key=".concat(i));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("movie/".concat(n,"?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("movie/".concat(n,"/credits?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("movie/".concat(n,"/reviews?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function x(t){return b.apply(this,arguments)}function b(){return(b=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("search/movie?api_key=".concat(i,"&query=").concat(n));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}u.ZP.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=29.ce82c231.chunk.js.map