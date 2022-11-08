"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[319],{6736:function(e,n,t){t.d(n,{Z:function(){return q}});var r=t(1413),a=t(4925),i=t(2791),l=t(4942),o=t(9439),s=t(1507),c=t(3595),u=t(2965),d=t(2680),p=t(9194),m=["children","className"],f=["label","placement","spacing","children","className","__css"],v=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],h=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],g=["icon","children","isRound","aria-label"],Z=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")},b=function(e){return e?"":void 0},y=(0,d.k)({strict:!1,name:"ButtonGroupContext"}),x=(0,o.Z)(y,2),E=x[0],_=x[1];function I(e){var n=e.children,t=e.className,l=(0,a.Z)(e,m),o=(0,i.isValidElement)(n)?(0,i.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,s=Z("chakra-button__icon",t);return i.createElement(c.m$.span,(0,r.Z)((0,r.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},l),{},{className:s}),o)}function N(e){var n=e.label,t=e.placement,o=e.spacing,s=void 0===o?"0.5rem":o,u=e.children,d=void 0===u?i.createElement(p.$,{color:"currentColor",width:"1em",height:"1em"}):u,m=e.className,v=e.__css,h=(0,a.Z)(e,f),g=Z("chakra-button__spinner",m),b="start"===t?"marginEnd":"marginStart",y=(0,i.useMemo)((function(){var e;return(0,r.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,l.Z)(e,b,n?s:0),(0,l.Z)(e,"fontSize","1em"),(0,l.Z)(e,"lineHeight","normal"),e),v)}),[v,n,b,s]);return i.createElement(c.m$.div,(0,r.Z)((0,r.Z)({className:g},h),{},{__css:y}),d)}I.displayName="ButtonIcon",N.displayName="ButtonSpinner";var k=(0,c.Gp)((function(e,n){var t=_(),l=(0,c.mq)("Button",(0,r.Z)((0,r.Z)({},t),e)),d=(0,u.Lr)(e),p=d.isDisabled,m=void 0===p?null==t?void 0:t.isDisabled:p,f=d.isLoading,h=d.isActive,g=d.children,y=d.leftIcon,x=d.rightIcon,E=d.loadingText,I=d.iconSpacing,k=void 0===I?"0.5rem":I,w=d.type,R=d.spinner,q=d.spinnerPlacement,C=void 0===q?"start":q,j=d.className,F=d.as,A=(0,a.Z)(d,v),G=(0,i.useMemo)((function(){var e=(0,r.Z)((0,r.Z)({},null==l?void 0:l._focus),{},{zIndex:1});return(0,r.Z)((0,r.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},l),!!t&&{_focus:e})}),[l,t]),L=function(e){var n=(0,i.useState)(!e),t=(0,o.Z)(n,2),r=t[0],a=t[1];return{ref:(0,i.useCallback)((function(e){e&&a("BUTTON"===e.tagName)}),[]),type:r?"button":void 0}}(F),P=L.ref,T=L.type,z={rightIcon:x,leftIcon:y,iconSpacing:k,children:g};return i.createElement(c.m$.button,(0,r.Z)({disabled:m||f,ref:(0,s.qq)(n,P),as:F,type:null!==w&&void 0!==w?w:T,"data-active":b(h),"data-loading":b(f),__css:G,className:Z("chakra-button",j)},A),f&&"start"===C&&i.createElement(N,{className:"chakra-button__spinner--start",label:E,placement:"start",spacing:k},R),f?E||i.createElement(c.m$.span,{opacity:0},i.createElement(S,(0,r.Z)({},z))):i.createElement(S,(0,r.Z)({},z)),f&&"end"===C&&i.createElement(N,{className:"chakra-button__spinner--end",label:E,placement:"end",spacing:k},R))}));function S(e){var n=e.leftIcon,t=e.rightIcon,r=e.children,a=e.iconSpacing;return i.createElement(i.Fragment,null,n&&i.createElement(I,{marginEnd:a},n),r,t&&i.createElement(I,{marginStart:a},t))}k.displayName="Button",(0,c.Gp)((function(e,n){var t=e.size,l=e.colorScheme,o=e.variant,s=e.className,u=e.spacing,d=void 0===u?"0.5rem":u,p=e.isAttached,m=e.isDisabled,f=(0,a.Z)(e,h),v=Z("chakra-button__group",s),g=(0,i.useMemo)((function(){return{size:t,colorScheme:l,variant:o,isDisabled:m}}),[t,l,o,m]),b={display:"inline-flex"};return b=p?(0,r.Z)((0,r.Z)({},b),{},{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}):(0,r.Z)((0,r.Z)({},b),{},{"& > *:not(style) ~ *:not(style)":{marginStart:d}}),i.createElement(E,{value:g},i.createElement(c.m$.div,(0,r.Z)({ref:n,role:"group",__css:b,className:v,"data-attached":p?"":void 0},f)))})).displayName="ButtonGroup",(0,c.Gp)((function(e,n){var t=e.icon,l=e.children,o=e.isRound,s=e["aria-label"],c=(0,a.Z)(e,g),u=t||l,d=(0,i.isValidElement)(u)?(0,i.cloneElement)(u,{"aria-hidden":!0,focusable:!1}):null;return i.createElement(k,(0,r.Z)({padding:"0",borderRadius:o?"full":void 0,ref:n,"aria-label":s},c),d)})).displayName="IconButton";var w=t(184),R=["children","margin","variant"],q=function(e){var n=e.children,t=e.margin,i=void 0===t?0:t,l=e.variant,o=void 0===l?"outline":l,s=(0,a.Z)(e,R);return(0,w.jsx)(k,(0,r.Z)((0,r.Z)({},s),{},{colorScheme:"orange",variant:o,ml:i,sx:{"&:hover ":{color:"black",backgroundColor:"orange.600"}},children:n}))}},3825:function(e,n,t){t(2791);var r=t(4190),a=t(184);n.Z=function(e){var n=e.children;return(0,a.jsx)(r.xu,{position:"relative",flexShrink:"0",overflow:"hidden",p:"12",children:n})}},5105:function(e,n,t){t(2791);var r=t(1087),a=t(7741),i=t(4190),l=t(184);n.Z=function(e){var n=e.movieList,t=e.location,o="home"===e.page?"movies/":"";return(0,l.jsx)(i.Eq,{spacing:"4",justify:"center",pt:"1",children:n.map((function(e){var n=e.id,s=e.poster_path;return(0,l.jsx)(i.Uc,{sx:{"&:hover ":{outline:"solid white 1px",transition:"outline 300ms cubic-bezier(0.4, 0, 0.2, 1)"}},children:(0,l.jsx)(r.OL,{to:"".concat(o).concat(n),state:{from:t},children:(0,l.jsx)(a.Z,{src:s?"https://image.tmdb.org/t/p/w500/".concat(s):"https://via.placeholder.com/200x300",height:"300",width:"200"})})},n)}))})}},7741:function(e,n,t){var r=t(1413),a=t(4925),i=(t(2791),t(4828)),l=t(184),o=["src"];n.Z=function(e){var n=e.src,t=(0,a.Z)(e,o);return(0,l.jsx)(i.Ee,(0,r.Z)({src:n,alt:"",borderTopRadius:"base"},t))}},6961:function(e,n,t){t(2791);var r=t(4190),a=t(184);n.Z=function(e){var n=e.children;return(0,a.jsx)(r.X6,{textAlign:"center",py:"8",fontFamily:"heading",fontWeight:"medium",fontSize:"5xl",color:"white",children:n})}},319:function(e,n,t){t.r(n),t.d(n,{default:function(){return be}});var r=t(5861),a=t(9439),i=t(4687),l=t.n(i),o=t(1413),s=t(4925),c=t(2791),u=t(2680),d=t(1507),p=t(3595),m=t(2965),f=t(9894),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],g=["isDisabled","isInvalid","isReadOnly","isRequired"],Z=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"],b=["className","children","requiredIndicator","optionalIndicator"],y=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")},x=function(e){return e?"":void 0},E=function(e){return!!e||void 0};function _(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.some((function(n){return null==n||n(e),null==e?void 0:e.defaultPrevented}))}}var I=(0,u.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),N=(0,a.Z)(I,2),k=N[0],S=N[1],w=(0,u.k)({strict:!1,name:"FormControlContext"}),R=(0,a.Z)(w,2),q=R[0],C=R[1];var j=(0,p.Gp)((function(e,n){var t=(0,p.jC)("Form",e),r=function(e){var n=e.id,t=e.isRequired,r=e.isInvalid,i=e.isDisabled,l=e.isReadOnly,u=(0,s.Z)(e,v),p=(0,c.useId)(),m=n||"field-".concat(p),f="".concat(m,"-label"),h="".concat(m,"-feedback"),g="".concat(m,"-helptext"),Z=(0,c.useState)(!1),b=(0,a.Z)(Z,2),y=b[0],E=b[1],_=(0,c.useState)(!1),I=(0,a.Z)(_,2),N=I[0],k=I[1],S=(0,c.useState)(!1),w=(0,a.Z)(S,2),R=w[0],q=w[1],C=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,o.Z)((0,o.Z)({id:g},e),{},{ref:(0,d.lq)(n,(function(e){e&&k(!0)}))})}),[g]),j=(0,c.useCallback)((function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,o.Z)((0,o.Z)({},t),{},{ref:a,"data-focus":x(R),"data-disabled":x(i),"data-invalid":x(r),"data-readonly":x(l),id:null!==(e=t.id)&&void 0!==e?e:f,htmlFor:null!==(n=t.htmlFor)&&void 0!==n?n:m})}),[m,i,R,r,l,f]),F=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,o.Z)((0,o.Z)({id:h},e),{},{ref:(0,d.lq)(n,(function(e){e&&E(!0)})),"aria-live":"polite"})}),[h]),A=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,o.Z)((0,o.Z)((0,o.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),G=(0,c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,o.Z)((0,o.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!t,isInvalid:!!r,isReadOnly:!!l,isDisabled:!!i,isFocused:!!R,onFocus:function(){return q(!0)},onBlur:function(){return q(!1)},hasFeedbackText:y,setHasFeedbackText:E,hasHelpText:N,setHasHelpText:k,id:m,labelId:f,feedbackId:h,helpTextId:g,htmlProps:u,getHelpTextProps:C,getErrorMessageProps:F,getRootProps:A,getLabelProps:j,getRequiredIndicatorProps:G}}((0,m.Lr)(e)),i=r.getRootProps,l=(r.htmlProps,(0,s.Z)(r,h)),u=y("chakra-form-control",e.className);return c.createElement(q,{value:l},c.createElement(k,{value:t},c.createElement(p.m$.div,(0,o.Z)((0,o.Z)({},i({},n)),{},{className:u,__css:t.container}))))}));function F(e){var n=function(e){var n,t,r,a=C(),i=e.id,l=e.disabled,c=e.readOnly,u=e.required,d=e.isRequired,p=e.isInvalid,m=e.isReadOnly,f=e.isDisabled,v=e.onFocus,h=e.onBlur,g=(0,s.Z)(e,Z),b=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&b.push(a.feedbackId);(null==a?void 0:a.hasHelpText)&&b.push(a.helpTextId);return(0,o.Z)((0,o.Z)({},g),{},{"aria-describedby":b.join(" ")||void 0,id:null!==i&&void 0!==i?i:null==a?void 0:a.id,isDisabled:null!==(n=null!==l&&void 0!==l?l:f)&&void 0!==n?n:null==a?void 0:a.isDisabled,isReadOnly:null!==(t=null!==c&&void 0!==c?c:m)&&void 0!==t?t:null==a?void 0:a.isReadOnly,isRequired:null!==(r=null!==u&&void 0!==u?u:d)&&void 0!==r?r:null==a?void 0:a.isRequired,isInvalid:null!==p&&void 0!==p?p:null==a?void 0:a.isInvalid,onFocus:_(null==a?void 0:a.onFocus,v),onBlur:_(null==a?void 0:a.onBlur,h)})}(e),t=n.isDisabled,r=n.isInvalid,a=n.isReadOnly,i=n.isRequired,l=(0,s.Z)(n,g);return(0,o.Z)((0,o.Z)({},l),{},{disabled:t,readOnly:a,required:i,"aria-invalid":E(r),"aria-required":E(i),"aria-readonly":E(a)})}j.displayName="FormControl",(0,p.Gp)((function(e,n){var t=C(),r=S(),a=y("chakra-form__helper-text",e.className);return c.createElement(p.m$.div,(0,o.Z)((0,o.Z)({},null==t?void 0:t.getHelpTextProps(e,n)),{},{__css:r.helperText,className:a}))})).displayName="FormHelperText";var A=(0,u.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),G=(0,a.Z)(A,2),L=G[0],P=G[1];(0,p.Gp)((function(e,n){var t=(0,p.jC)("FormError",e),r=(0,m.Lr)(e),a=C();return(null==a?void 0:a.isInvalid)?c.createElement(L,{value:t},c.createElement(p.m$.div,(0,o.Z)((0,o.Z)({},null==a?void 0:a.getErrorMessageProps(r,n)),{},{className:y("chakra-form__error-message",e.className),__css:(0,o.Z)({display:"flex",alignItems:"center"},t.text)}))):null})).displayName="FormErrorMessage",(0,p.Gp)((function(e,n){var t=P(),r=C();if(!(null==r?void 0:r.isInvalid))return null;var a=y("chakra-form__error-icon",e.className);return c.createElement(f.JO,(0,o.Z)((0,o.Z)({ref:n,"aria-hidden":!0},e),{},{__css:t.icon,className:a}),c.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))})).displayName="FormErrorIcon",(0,p.Gp)((function(e,n){var t,r=(0,p.mq)("FormLabel",e),a=(0,m.Lr)(e),i=(a.className,a.children),l=a.requiredIndicator,u=void 0===l?c.createElement(T,null):l,d=a.optionalIndicator,f=void 0===d?null:d,v=(0,s.Z)(a,b),h=C(),g=null!==(t=null==h?void 0:h.getLabelProps(v,n))&&void 0!==t?t:(0,o.Z)({ref:n},v);return c.createElement(p.m$.label,(0,o.Z)((0,o.Z)({},g),{},{className:y("chakra-form__label",a.className),__css:(0,o.Z)({display:"block",textAlign:"start"},r)}),i,(null==h?void 0:h.isRequired)?u:f)})).displayName="FormLabel";var T=(0,p.Gp)((function(e,n){var t=C(),r=S();if(!(null==t?void 0:t.isRequired))return null;var a=y("chakra-form__required-indicator",e.className);return c.createElement(p.m$.span,(0,o.Z)((0,o.Z)({},null==t?void 0:t.getRequiredIndicatorProps(e,n)),{},{__css:r.requiredIndicator,className:a}))}));T.displayName="RequiredIndicator";var z=t(4942),D=t(4328),O=t(7810),B=t(2300),$=["htmlSize"],M=["children","className"],H=["placement"],U=["placement"],J=["className"],V=["className"],W=(0,p.Gp)((function(e,n){var t=e.htmlSize,r=(0,s.Z)(e,$),a=(0,p.jC)("Input",r),i=F((0,m.Lr)(r)),l=(0,D.cx)("chakra-input",e.className);return c.createElement(p.m$.input,(0,o.Z)((0,o.Z)({size:t},i),{},{__css:a.field,ref:n,className:l}))}));W.displayName="Input",W.id="Input";var X=(0,u.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),K=(0,a.Z)(X,2),Q=K[0],Y=K[1];(0,p.Gp)((function(e,n){var t=(0,p.jC)("Input",e),r=(0,m.Lr)(e),a=r.children,i=r.className,l=(0,s.Z)(r,M),u=(0,D.cx)("chakra-input__group",i),d={},f=(0,O.W)(a),v=t.field;f.forEach((function(e){if(t){var n,r;if(v&&"InputLeftElement"===e.type.id)d.paddingStart=null!==(n=v.height)&&void 0!==n?n:v.h;if(v&&"InputRightElement"===e.type.id)d.paddingEnd=null!==(r=v.height)&&void 0!==r?r:v.h;"InputRightAddon"===e.type.id&&(d.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(d.borderStartRadius=0)}}));var h=f.map((function(n){var t,r,a=(0,B.oA)({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(r=n.props)?void 0:r.variant)||e.variant});return"Input"!==n.type.id?(0,c.cloneElement)(n,a):(0,c.cloneElement)(n,Object.assign(a,d,n.props))}));return c.createElement(p.m$.div,(0,o.Z)({className:u,ref:n,__css:{width:"100%",display:"flex",position:"relative"}},l),c.createElement(Q,{value:t},h))})).displayName="InputGroup";var ee={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},ne=(0,p.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),te=(0,p.Gp)((function(e,n){var t,r=e.placement,a=void 0===r?"left":r,i=(0,s.Z)(e,H),l=null!==(t=ee[a])&&void 0!==t?t:{},u=Y();return c.createElement(ne,(0,o.Z)((0,o.Z)({ref:n},i),{},{__css:(0,o.Z)((0,o.Z)({},u.addon),l)}))}));te.displayName="InputAddon";var re=(0,p.Gp)((function(e,n){return c.createElement(te,(0,o.Z)((0,o.Z)({ref:n,placement:"left"},e),{},{className:(0,D.cx)("chakra-input__left-addon",e.className)}))}));re.displayName="InputLeftAddon",re.id="InputLeftAddon";var ae=(0,p.Gp)((function(e,n){return c.createElement(te,(0,o.Z)((0,o.Z)({ref:n,placement:"right"},e),{},{className:(0,D.cx)("chakra-input__right-addon",e.className)}))}));ae.displayName="InputRightAddon",ae.id="InputRightAddon";var ie=(0,p.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),le=(0,p.Gp)((function(e,n){var t,r,a,i=e.placement,l=void 0===i?"left":i,u=(0,s.Z)(e,U),d=Y(),p=d.field,m="left"===l?"insetStart":"insetEnd",f=(0,o.Z)((a={},(0,z.Z)(a,m,"0"),(0,z.Z)(a,"width",null!==(t=null==p?void 0:p.height)&&void 0!==t?t:null==p?void 0:p.h),(0,z.Z)(a,"height",null!==(r=null==p?void 0:p.height)&&void 0!==r?r:null==p?void 0:p.h),(0,z.Z)(a,"fontSize",null==p?void 0:p.fontSize),a),d.element);return c.createElement(ie,(0,o.Z)({ref:n,__css:f},u))}));le.id="InputElement",le.displayName="InputElement";var oe=(0,p.Gp)((function(e,n){var t=e.className,r=(0,s.Z)(e,J),a=(0,D.cx)("chakra-input__left-element",t);return c.createElement(le,(0,o.Z)({ref:n,placement:"left",className:a},r))}));oe.id="InputLeftElement",oe.displayName="InputLeftElement";var se=(0,p.Gp)((function(e,n){var t=e.className,r=(0,s.Z)(e,V),a=(0,D.cx)("chakra-input__right-element",t);return c.createElement(le,(0,o.Z)({ref:n,placement:"right",className:a},r))}));se.id="InputRightElement",se.displayName="InputRightElement";var ce=t(4190),ue=t(8593),de=t(3825),pe=t(5105),me=t(6961),fe=t(6736),ve=t(1087),he=t(7689),ge=t(4390),Ze=t(184),be=function(e){var n,t=(0,he.TH)(),i=(0,ve.lr)(),o=(0,a.Z)(i,2),s=o[0],u=o[1],d=(0,c.useState)([]),p=(0,a.Z)(d,2),m=p[0],f=p[1],v=(0,c.useState)(""),h=(0,a.Z)(v,2),g=h[0],Z=h[1],b=(0,c.useState)(null),y=(0,a.Z)(b,2),x=y[0],E=y[1],_=(0,c.useState)(!1),I=(0,a.Z)(_,2),N=I[0],k=I[1],S=null!==(n=s.get("title"))&&void 0!==n?n:"";return(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),E(null),e.next=4,(0,ge.EU)(S);case 4:if(0!==(n=e.sent).results.length){e.next=9;break}return E(!0),k(!1),e.abrupt("return");case 9:k(!1),f(n.results);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}""!==S&&(!function(){e.apply(this,arguments)}(),Z(S))}),[S]),(0,Ze.jsxs)("main",{children:[(0,Ze.jsx)(me.Z,{children:"Search Movies \u2b07\ufe0f"}),(0,Ze.jsxs)(de.Z,{children:[(0,Ze.jsx)(ce.xu,{p:"3",children:(0,Ze.jsx)("form",{autoComplete:"false",onSubmit:function(e){if(e.preventDefault(),g===S)return alert("Enter new movie Title ^_^");u(""!==g?{title:g}:{})},children:(0,Ze.jsxs)(j,{textAlign:"center",children:[(0,Ze.jsx)(W,{type:"text",value:g,onChange:function(e){return Z(e.target.value)}}),(0,Ze.jsx)(fe.Z,{type:"submit",variant:"solid",py:"7",px:"16",mt:"6",children:"Search"})]})})}),x?(0,Ze.jsx)(ce.X6,{textAlign:"center",children:"Nothing was found for your request, try again"}):(0,Ze.jsxs)(Ze.Fragment,{children:[" ",N&&(0,Ze.jsx)(ce.xu,{display:"flex",justifyContent:"center",children:(0,Ze.jsx)(ue.no,{visible:!0,height:"150",width:"150",ariaLabel:"blocks-loading",wrapperClass:"blocks-wrapper"})}),(0,Ze.jsx)(pe.Z,{movieList:m,location:t,page:"movies"})]})]})]})}},4390:function(e,n,t){t.d(n,{EU:function(){return h},JS:function(){return s},cI:function(){return p},h1:function(){return f},ts:function(){return u}});var r=t(5861),a=t(4687),i=t.n(a),l=t(1044),o="fb16fb8d72c2b1b51619ebc618e9b844";function s(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.ZP.get("trending/all/day?api_key=".concat(o));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.ZP.get("movie/".concat(n,"?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.ZP.get("movie/".concat(n,"/credits?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.ZP.get("movie/".concat(n,"/reviews?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.ZP.get("search/movie?api_key=".concat(o,"&query=").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}l.ZP.defaults.baseURL="https://api.themoviedb.org/3/"},1507:function(e,n,t){t.d(n,{lq:function(){return i},qq:function(){return l}});var r=t(2791);function a(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(t){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){n.forEach((function(n){a(n,e)}))}}function l(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.useMemo)((function(){return i.apply(void 0,n)}),n)}}}]);
//# sourceMappingURL=319.6f8df0a4.chunk.js.map