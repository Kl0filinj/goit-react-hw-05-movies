"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{3825:function(t,e,r){r(2791);var n=r(4190),a=r(184);e.Z=function(t){var e=t.children;return(0,a.jsx)(n.xu,{position:"relative",flexShrink:"0",overflow:"hidden",p:"12",children:e})}},5105:function(t,e,r){r(2791);var n=r(1087),a=r(7741),c=r(4190),u=r(184);e.Z=function(t){var e=t.movieList,r=t.location,i="home"===t.page?"movies/":"";return(0,u.jsx)(c.Eq,{spacing:"4",justify:"center",pt:"1",children:e.map((function(t){var e=t.id,o=t.poster_path;return(0,u.jsx)(c.Uc,{sx:{"&:hover ":{outline:"solid white 1px",transition:"outline 300ms cubic-bezier(0.4, 0, 0.2, 1)"}},children:(0,u.jsx)(n.OL,{to:"".concat(i).concat(e),state:{from:r},children:(0,u.jsx)(a.Z,{src:o?"https://image.tmdb.org/t/p/w500/".concat(o):"https://via.placeholder.com/200x300",height:"300",width:"200"})})},e)}))})}},7741:function(t,e,r){var n=r(1413),a=r(4925),c=(r(2791),r(4828)),u=r(184),i=["src"];e.Z=function(t){var e=t.src,r=(0,a.Z)(t,i);return(0,u.jsx)(c.Ee,(0,n.Z)({src:e,alt:"",borderTopRadius:"base"},r))}},6961:function(t,e,r){r(2791);var n=r(4190),a=r(184);e.Z=function(t){var e=t.children;return(0,a.jsx)(n.X6,{textAlign:"center",py:"8",fontFamily:"heading",fontWeight:"medium",fontSize:"5xl",color:"white",children:e})}},5415:function(t,e,r){r.r(e);var n=r(5861),a=r(9439),c=r(4687),u=r.n(c),i=r(3825),o=r(5105),s=r(6961),p=r(2791),l=r(7689),f=r(4390),h=r(8593),v=r(4190),d=r(184);e.default=function(t){var e=(0,p.useState)([]),r=(0,a.Z)(e,2),c=r[0],x=r[1],m=(0,p.useState)(!1),b=(0,a.Z)(m,2),w=b[0],y=b[1],Z=(0,l.TH)();return(0,p.useEffect)((function(){function t(){return(t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),t.next=3,(0,f.JS)();case 3:e=t.sent,x(e.results),y(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,d.jsxs)("main",{children:[(0,d.jsx)(s.Z,{children:"Popular Films"}),(0,d.jsxs)(i.Z,{children:[w&&(0,d.jsx)(v.xu,{display:"flex",justifyContent:"center",children:(0,d.jsx)(h.no,{visible:!0,height:"150",width:"150",ariaLabel:"blocks-loading",wrapperClass:"blocks-wrapper"})}),(0,d.jsx)(o.Z,{movieList:c,location:Z,page:"home"})]})]})}},4390:function(t,e,r){r.d(e,{EU:function(){return x},JS:function(){return o},cI:function(){return f},h1:function(){return v},ts:function(){return p}});var n=r(5861),a=r(4687),c=r.n(a),u=r(1044),i="fb16fb8d72c2b1b51619ebc618e9b844";function o(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("trending/all/day?api_key=".concat(i));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("movie/".concat(e,"?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("movie/".concat(e,"/credits?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("search/movie?api_key=".concat(i,"&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}u.ZP.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=415.05254415.chunk.js.map