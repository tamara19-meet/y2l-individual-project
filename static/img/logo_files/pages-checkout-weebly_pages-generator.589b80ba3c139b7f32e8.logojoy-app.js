(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-checkout-weebly~pages-generator"],{478:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(5),a=n.n(r),o=n(9),c=n.n(o),i=n(467),s=n.n(i);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={star:"star",menu:"menu",phone:"phone",arrow:"play_arrow",heart:"favorite",info:"info",lock:"lock",check:"check",close:"close",add:"add",subtract:"remove",delete:"delete",undo:"undo",redo:"redo",share:"share",link:"link","shopping-cart":"shopping_cart","check-in-circle":"check_circle","empty-heart":"favorite_border","up-arrow":"arrow_drop_up","down-arrow":"arrow_drop_down","left-arrow":"arrow_back","right-arrow":"arrow_forward","expand-up":"expand_less","left-chevron":"keyboard_arrow_left","right-chevron":"keyboard_arrow_right"};function d(e){var t=e.name,n=e.className,r=u(e,["name","className"]),o=s()(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({"material-icons":!0},n,!0));return a.a.createElement("i",l({className:o},r),p[t])}d.propTypes={name:c.a.string,className:c.a.oneOfType([c.a.string,c.a.object])}},479:function(e,t,n){"use strict";n.d(t,"b",function(){return p}),n.d(t,"a",function(){return d});var r=n(147),a=n.n(r),o=n(105),c=n(6),i=n(2);function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=regeneratorRuntime.mark(p),u=regeneratorRuntime.mark(d);function p(e){var t,n,r,o,s=arguments;return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:for(t=s.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=s[r];return l.next=3,Object(c.a)(a()(e).map(function(e){return c.e.apply(void 0,[e].concat(n))}));case 3:return o=l.sent,l.next=6,Object(c.i)(i.p);case 6:o.forEach(function(e){return e.cancel()});case 7:case"end":return l.stop()}},l,this)}function d(e){var t,n,r,a=arguments;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:for(t=a.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=a[r];case 1:return c.next=4,p.apply(void 0,[e].concat(s(Object(o.a)(n))));case 4:c.next=1;break;case 6:case"end":return c.stop()}},u,this)}},489:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=n(2),a=function(){return{type:r.t}},o=function(){return{type:r.b}}},508:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(22),c=n(9),i=n.n(c),s=n(75);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={container:Object(o.css)({position:"fixed",top:0,zIndex:111,pointerEvents:"none",overflow:"hidden",width:"100%",height:"100%"}),activeContainer:Object(o.css)({pointerEvents:"all"}),overlay:Object(o.css)({position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, .6)",opacity:0,pointerEvents:"none",transition:"all 0.3s linear"}),activeOverlay:Object(o.css)({opacity:1,pointerEvents:"all"}),root:function(e){return Object(o.css)({transition:"all 300ms cubic-bezier(.51,.98,.39,.99)",width:420,height:"100vh",background:e.palette.ui.background,position:"fixed","@media (max-width: 425px)":{width:"100%"}})},activeSidebar:Object(o.css)({transition:"all 300ms cubic-bezier(.51,.98,.39,.99)"}),left:Object(o.css)({left:-420}),leftActive:Object(o.css)({left:0}),right:Object(o.css)({right:-420}),rightActive:Object(o.css)({right:0}),scroll:Object(o.css)({overflow:"scroll"})},p=function(e){var t,n,r,c=e.theme,i=e.children,s=e.isOpen,p=e.onCloseSidebar,d=e.scroll,m=e.large,f=e.side,b=Object(o.cx)((l(t={},u.overlay,!0),l(t,u.activeOverlay,s),t)),h=Object(o.cx)((l(n={},u.root(c,m),!0),l(n,u[f],!0),l(n,u.activeSidebar,s),l(n,u["".concat(f,"Active")],s),l(n,u.scroll,d),n)),v=Object(o.cx)((l(r={},u.container,!0),l(r,u.activeContainer,s),r));return a.a.createElement("div",{className:v},a.a.createElement("div",{onClick:p,className:b}),a.a.createElement("div",{className:h},i))};p.propTypes={children:i.a.node,isOpen:i.a.bool,onCloseSidebar:i.a.func,side:i.a.string,scroll:i.a.bool,large:i.a.bool,theme:i.a.object.isRequired},p.defaultProps={side:"right"},t.a=Object(s.b)(p)},510:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var r=n(5),a=n.n(r),o=n(9),c=n.n(o),i=n(22),s=n(77),l=n(467),u=n.n(l),p=n(78),d=n.n(p);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={container:Object(i.css)({position:"relative"}),toolTip:Object(i.css)(g({opacity:"0",visibility:"hidden",position:"absolute",top:"calc(100% + 5px)",left:"50%",transform:"translateX(-50%)",transition:"opacity 600ms ease",backgroundColor:"#222",color:"#fff",padding:"10px 12px",borderRadius:4,fontSize:10,fontWeight:500,zIndex:99999,whiteSpace:"nowrap",":after":{content:'""',position:"absolute",bottom:"100%",left:"50%",border:"solid transparent",height:0,width:0,borderColor:" rgba(34, 34, 34, 0)",borderBottomColor:"#222",borderWidth:5,marginLeft:-5}},"@media (max-width: ".concat(s.b,"px)"),{display:"none"})),activeTooltip:Object(i.css)({opacity:1,visibility:"visible"})},O=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=function(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?v(e):t}(this,b(t).call(this)),d()(v(v(e))),e.state={hovered:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),function(e,t,n){t&&f(e.prototype,t),n&&f(e,n)}(t,[{key:"onMouseEnter",value:function(){this.setState({hovered:!0})}},{key:"onMouseLeave",value:function(){this.setState({hovered:!1})}},{key:"render",value:function(){var e,t=this.props,n=t.text,r=t.children,o=t.className;if(!n)return r;var c=(g(e={},y.toolTip,!0),g(e,y.activeTooltip,this.state.hovered),e);o&&(c["".concat(o)]=!0);var i=u()(c);return a.a.createElement("span",{className:y.container,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},r,a.a.createElement("div",{className:i},n))}}]),t}();O.propTypes={text:c.a.oneOfType([c.a.string,c.a.node]),children:c.a.node,className:c.a.any}},516:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(9),c=n.n(o),i=n(22),s=n(455),l=n(478),u=n(75),p={button:Object(i.css)({height:"100%",width:50,cursor:"pointer"}),icon:function(e){return Object(i.css)({color:e.palette.text.primary})},headerIcon:Object(i.css)({minWidth:50})};function d(e){var t=e.theme,n=e.onOpenSidebar;return a.a.createElement("div",{className:p.headerIcon},a.a.createElement(s.a,{onClick:n,className:p.button,justify:"end",align:"center"},a.a.createElement(l.a,{className:p.icon(t),name:"menu"})))}t.a=Object(u.b)(d),d.propTypes={onOpenSidebar:c.a.func.isRequired,theme:c.a.object.isRequired}},521:function(e,t,n){"use strict";var r=n(76),a=n(489),o=n(145),c=n(106),i=n(5),s=n.n(i),l=n(22),u=n(9),p=n.n(u),d=n(484),m=n.n(d),f=n(508),b=n(455),h=n(478),v=n(75),g=n(1);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w={root:Object(l.css)({overflow:"hidden"}),footer:function(e){return Object(l.css)({position:"absolute",bottom:0,width:"100%",background:e.palette.ui.divider,padding:"10px 10px 10px 30px",margin:0})},footerDiv:Object(l.css)({display:"inline"}),footerItem:function(e){return Object(l.css)({listStyle:"none",display:"inline-block",fontSize:13,cursor:"pointer",color:e.palette.text.primary,padding:"5px 0",paddingRight:"20px"," a":{color:e.palette.text.primary}})},header:function(e){return Object(l.css)({background:e.palette.primary.main,padding:10})},username:function(e){return Object(l.css)({color:e.palette.primary.contrastText,fontSize:16,fontWeight:600})},menu:Object(l.css)({height:"calc(100vh - 131px)",marginTop:30,paddingBottom:40,position:"relative",overflow:"scroll"}),linkItem:Object(l.css)({textDecoration:"none"}),menuItem:function(e){return Object(l.css)({color:e.palette.text.primary,fontSize:16,padding:"12px 30px",margin:0,fontWeight:600,cursor:"pointer",letterSpacing:0,":hover":{background:e.palette.ui.divider}})},activeHeader:Object(l.css)({padding:"30px"}),close:function(e){return Object(l.css)({color:e.palette.primary.contrastText,fontSize:"5px",paddingLeft:"15px",marginLeft:"auto"})},icon:Object(l.css)({cursor:"pointer"}),divider:function(e){return Object(l.css)({position:"relative",marginBottom:50,"&:after":{content:'""',width:"calc(100% - 60px)",height:"1px",position:"absolute",background:e.palette.ui.divider,bottom:-25,left:30}})},dividerHeader:Object(l.css)({paddingLeft:25,fontSize:20})},x=function(e){var t=e.theme,n=e.isAuthenticated,r=e.onLogout;return s.a.createElement("ul",{className:w.footer(t)},n&&s.a.createElement("div",{className:w.footerDiv},s.a.createElement(m.a,{to:"/account-settings"},s.a.createElement("li",{className:w.footerItem(t)},"Account")),s.a.createElement("li",{onClick:r,className:w.footerItem(t)},"Log Out")),s.a.createElement("li",{className:w.footerItem(t)},s.a.createElement("a",{href:"/terms",target:"_blank",rel:"noopener noreferrer"},"Terms of Service")),s.a.createElement("li",{className:w.footerItem(t)},s.a.createElement("a",{href:"/privacy",target:"_blank",rel:"noopener noreferrer"},"Privacy")))};function E(e){var t,n=e.theme,r=e.isAuthenticated,a=e.userName,o=e.onLogin,c=e.onRegister,i=e.onLogout,u=e.onCloseSidebar,p=e.brands,d=j(e,["theme","isAuthenticated","userName","onLogin","onRegister","onLogout","onCloseSidebar","brands"]),v=Object(l.cx)((O(t={},w.header(n),!0),O(t,w.activeHeader,r),t)),E=p&&0!==p.length;return s.a.createElement(f.a,y({onCloseSidebar:u},d),s.a.createElement("div",{className:w.root},s.a.createElement(b.a,{className:v,justify:"start",align:"end"},s.a.createElement("span",{className:w.username(n)},a),s.a.createElement("div",{className:w.close(n)},s.a.createElement(h.a,{className:w.icon,name:"close",onClick:u}))),s.a.createElement(b.a,{className:w.menu,column:!0},r&&s.a.createElement("div",null,E&&s.a.createElement("div",{className:w.divider(n)},s.a.createElement("h4",{className:w.dividerHeader},"Brands"),p.map(function(e){var t=e.id,r=e.name;return s.a.createElement(m.a,{to:"/brands/".concat(t),key:"sidebar-".concat(t),className:w.linkItem},s.a.createElement("p",{className:w.menuItem(n)},r))})),s.a.createElement("div",null,s.a.createElement("h4",{className:w.dividerHeader},"Logos"),s.a.createElement(m.a,{to:"/dashboard",className:w.linkItem},s.a.createElement("p",{className:w.menuItem(n)},"Saved logos")),s.a.createElement(m.a,{to:"/logo-maker",className:w.linkItem},s.a.createElement("p",{className:w.menuItem(n)},"Logo Generator")),s.a.createElement(m.a,{to:g.z,target:"_blank",rel:"noopener noreferrer",className:w.linkItem},s.a.createElement("p",{className:w.menuItem(n)},"How to use your logo")))),!r&&s.a.createElement("div",null,s.a.createElement("p",{onClick:o,className:w.menuItem(n)},"Log in"),s.a.createElement("p",{onClick:c,className:w.menuItem(n)},"Register"))),s.a.createElement(x,{theme:n,isAuthenticated:r,onLogout:i})))}x.propTypes={isAuthenticated:p.a.bool,onLogout:p.a.func,theme:p.a.object.isRequired};var k=Object(v.b)(E);E.propTypes={isAuthenticated:p.a.bool,userName:p.a.string,onLogin:p.a.func,onRegister:p.a.func,onLogout:p.a.func,onCloseSidebar:p.a.func,brands:p.a.array,theme:p.a.object.isRequired};var N=n(144),S=n(108),I={onCloseSidebar:a.a,onLogin:c.b,onRegister:c.d,onLogout:o.c,requestPurchasedBrands:S.d};t.a=Object(r.connect)(function(e){return{isOpen:e.ui.isSidebarOpen,isAuthenticated:Object(N.a)(e),userName:function(e){if(!Object(N.a)(e))return"";var t=e.auth.user.display_name||e.auth.user.full_name;return e.auth.user.displayName||t}(e),brands:e.brands}},I)(k)},522:function(e,t,n){"use strict";var r=n(76),a=n(5),o=n.n(a),c=n(22),i=n(9),s=n.n(i),l=n(484),u=n.n(l),p=n(455),d=n(478),m=n(510),f=n(516),b=n(75),h=n(77),v=n(84),g=n(1);function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=v.a.featureIsEnabled(g.s.HORIZONTAL_EXPLORE),j={root:function(e){return Object(c.css)({position:"fixed",top:0,left:0,width:"100%",height:70,padding:"0 30px",zIndex:110,justifyContent:"space-between",flexDirection:"row",display:"flex",alignItems:"center",background:e.palette.ui.background,borderBottom:"1px solid ".concat(e.palette.ui.divider)})},horizontalExplore:Object(c.css)(y({},"@media screen and (min-width: ".concat(h.c,"px)"),{width:"100vw"})),button:Object(c.css)({height:"100%",width:50,cursor:"pointer",border:"none",background:"transparent"}),logo:Object(c.css)({position:"relative",top:2}),fav:function(e){return Object(c.css)({width:"0px",height:"0px",background:e.palette.common.error,borderRadius:"100%",fontSize:"0px",lineHeight:"0px",color:e.palette.common.white,textAlign:"center",position:"absolute",left:"20px",top:"0px"})},newFav:Object(c.css)({transition:"all 0.3s cubic-bezier(0.510, 0.190, 0.000, 1.570)",width:"18px",fontSize:"10px",lineHeight:"18px",height:"18px",left:"11px",top:"-5px"}),headerIcon:Object(c.css)({minWidth:50}),icon:function(e){return Object(c.css)({color:e.palette.text.primary})}};function w(e){var t,n,r=e.theme,a=e.onOpenSidebar,i=e.onOpenFavouriter,s=e.onBack,l=e.hasBack,b=e.hasFavourite,h=e.hasNewFavourite,v=Object(c.cx)((y(t={},j.root(r),!0),y(t,j.horizontalExplore,O),t)),g=Object(c.cx)((y(n={},j.fav(r),!0),y(n,j.newFav,Boolean(h>0)),n));return o.a.createElement("div",{className:v},o.a.createElement("div",{className:j.headerIcon},b&&o.a.createElement(p.a,{onClick:i,className:"".concat(j.button," ").concat(j.favouriteButton),justify:"start",align:"center",tagName:"button"},o.a.createElement(m.a,{text:"Saved"},o.a.createElement("img",{src:"https://cdn.logojoy.com/app/editor/ic_heart.svg",alt:"Save your logo"}),o.a.createElement("div",{className:g},h>0?h:""))),l&&o.a.createElement(p.a,{onClick:s,className:"".concat(j.button," ").concat(j.backButton),justify:"start",align:"center"},o.a.createElement(d.a,{className:j.icon(r),name:"left-arrow"}))),o.a.createElement(p.a,{className:j.logo,align:"center",justify:"center",auto:!0},o.a.createElement(u.a,{to:"/dashboard"},o.a.createElement("img",{src:"light"===r.palette.type?r.logo.dark:r.logo.light,alt:"Navigate to dashboard. Caution: this will navigate you away from your current page"}))),o.a.createElement(f.a,{onOpenSidebar:a}))}var x=Object(b.b)(w);w.defaultProps={onBack:function(){}},w.propTypes={onOpenSidebar:s.a.func,onOpenFavouriter:s.a.func,onBack:s.a.func,hasBack:s.a.bool,hasFavourite:s.a.bool,hasNewFavourite:s.a.number,theme:s.a.object.isRequired};var E={onOpenSidebar:n(489).b};t.a=Object(r.connect)(null,E)(x)},523:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(22),c=n(9),i=n.n(c),s=n(521),l=n(522),u=n(75);function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=function(e){return Object(o.css)({background:e.palette.background})};function m(e){var t=e.theme,n=e.children,r=p(e,["theme","children"]);return a.a.createElement("div",{className:d(t)},a.a.createElement("div",null,n),a.a.createElement(l.a,r),a.a.createElement(s.a,null))}t.a=Object(u.b)(m),m.propTypes={children:i.a.node,theme:i.a.object.isRequired}},537:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(5),a=n.n(r),o=n(9),c=n.n(o);function i(e){var t=e.children,n=e.className;return a.a.createElement("div",{className:n},t)}i.propTypes={children:c.a.node,className:c.a.oneOfType([c.a.string,c.a.object])}}}]);
//# sourceMappingURL=pages-checkout-weebly~pages-generator.589b80ba3c139b7f32e8.logojoy-app.js.map