(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[48],{468:function(e,t,r){"use strict";var n=r(14),o=r(0),a=r.n(o),i=r(5),l=r.n(i),s=r(470),c={children:l.a.node},p=function(e){return a.a.createElement(s.a,Object(n.a)({group:!0},e))};p.propTypes=c,t.a=p},471:function(e,t,r){"use strict";var n=r(14),o=r(20),a=r(0),i=r.n(a),l=r(5),s=r.n(l),c=r(58),p=r.n(c),u=r(80),f={tag:u.tagPropType,className:s.a.string,cssModule:s.a.object},d=function(e){var t=e.className,r=e.cssModule,a=e.tag,l=Object(o.a)(e,["className","cssModule","tag"]),s=Object(u.mapToCssModules)(p()(t,"card-header"),r);return i.a.createElement(a,Object(n.a)({},l,{className:s}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},473:function(e,t,r){"use strict";var n=r(14),o=r(20),a=r(0),i=r.n(a),l=r(5),s=r.n(l),c=r(58),p=r.n(c),u=r(80),f={tag:u.tagPropType,listTag:u.tagPropType,className:s.a.string,listClassName:s.a.string,cssModule:s.a.object,children:s.a.node,"aria-label":s.a.string},d=function(e){var t=e.className,r=e.listClassName,a=e.cssModule,l=e.children,s=e.tag,c=e.listTag,f=e["aria-label"],d=Object(o.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(u.mapToCssModules)(p()(t),a),g=Object(u.mapToCssModules)(p()("breadcrumb",r),a);return i.a.createElement(s,Object(n.a)({},d,{className:b,"aria-label":f}),i.a.createElement(c,{className:g},l))};d.propTypes=f,d.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=d},474:function(e,t,r){"use strict";var n=r(14),o=r(20),a=r(0),i=r.n(a),l=r(5),s=r.n(l),c=r(58),p=r.n(c),u=r(80),f={tag:u.tagPropType,active:s.a.bool,className:s.a.string,cssModule:s.a.object},d=function(e){var t=e.className,r=e.cssModule,a=e.active,l=e.tag,s=Object(o.a)(e,["className","cssModule","active","tag"]),c=Object(u.mapToCssModules)(p()(t,!!a&&"active","breadcrumb-item"),r);return i.a.createElement(l,Object(n.a)({},s,{className:c,"aria-current":a?"page":void 0}))};d.propTypes=f,d.defaultProps={tag:"li"},t.a=d},475:function(e,t,r){"use strict";var n=r(14),o=r(20),a=r(120),i=r(119),l=r(0),s=r.n(l),c=r(5),p=r.n(c),u=r(58),f=r.n(u),d=r(472),b=r(80),g={children:p.a.node,active:p.a.bool,disabled:p.a.bool,divider:p.a.bool,tag:b.tagPropType,header:p.a.bool,onClick:p.a.func,className:p.a.string,cssModule:p.a.object,toggle:p.a.bool},y=function(e){function t(t){var r;return(r=e.call(this,t)||this).onClick=r.onClick.bind(Object(a.a)(r)),r.getTabIndex=r.getTabIndex.bind(Object(a.a)(r)),r}Object(i.a)(t,e);var r=t.prototype;return r.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},r.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},r.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,r=Object(b.omit)(this.props,["toggle"]),a=r.className,i=r.cssModule,l=r.divider,c=r.tag,p=r.header,u=r.active,d=Object(o.a)(r,["className","cssModule","divider","tag","header","active"]),g=Object(b.mapToCssModules)(f()(a,{disabled:d.disabled,"dropdown-item":!l&&!p,active:u,"dropdown-header":p,"dropdown-divider":l}),i);return"button"===c&&(p?c="h6":l?c="div":d.href&&(c="a")),s.a.createElement(c,Object(n.a)({type:"button"===c&&(d.onClick||this.props.toggle)?"button":void 0},d,{tabIndex:e,role:t,className:g,onClick:this.onClick}))},t}(s.a.Component);y.propTypes=g,y.defaultProps={tag:"button",toggle:!0},y.contextType=d.a,t.a=y},476:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r(467),o=r(14),a=r(120),i=r(119),l=r(0),s=r.n(l),c=r(5),p=r.n(c),u=r(468),f=r(80);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var b=["defaultOpen"],g=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},r.toggle=r.toggle.bind(Object(a.a)(r)),r}Object(i.a)(t,e);var r=t.prototype;return r.toggle=function(){this.setState({isOpen:!this.state.isOpen})},r.render=function(){return s.a.createElement(u.a,Object(o.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(f.omit)(this.props,b)))},t}(l.Component);g.propTypes=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({defaultOpen:p.a.bool},u.a.propTypes)},511:function(e,t,r){"use strict";var n=r(14),o=r(20),a=r(0),i=r.n(a),l=r(5),s=r.n(l),c=r(58),p=r.n(c),u=r(80),f={body:s.a.bool,bottom:s.a.bool,children:s.a.node,className:s.a.string,cssModule:s.a.object,heading:s.a.bool,left:s.a.bool,list:s.a.bool,middle:s.a.bool,object:s.a.bool,right:s.a.bool,tag:u.tagPropType,top:s.a.bool},d=function(e){var t,r=e.body,a=e.bottom,l=e.className,s=e.cssModule,c=e.heading,f=e.left,d=e.list,b=e.middle,g=e.object,y=e.right,v=e.tag,O=e.top,h=Object(o.a)(e,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);t=c?"h4":h.href?"a":h.src||g?"img":d?"ul":"div";var m=v||t,j=Object(u.mapToCssModules)(p()(l,{"media-body":r,"media-heading":c,"media-left":f,"media-right":y,"media-top":O,"media-bottom":a,"media-middle":b,"media-object":g,"media-list":d,media:!r&&!c&&!f&&!y&&!O&&!a&&!b&&!g&&!d}),s);return i.a.createElement(m,Object(n.a)({},h,{className:j}))};d.propTypes=f,t.a=d},618:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(5),i=r.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=s(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Heart",t.a=c},620:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(5),i=r.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=s(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("circle",{cx:"12",cy:"8",r:"7"}),o.a.createElement("polyline",{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Award",t.a=c},690:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(5),i=r.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=s(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),o.a.createElement("polyline",{points:"17 6 23 6 23 12"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="TrendingUp",t.a=c},728:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(5),i=r.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=s(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),o.a.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),o.a.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Users",t.a=c},729:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(5),i=r.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=s(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),o.a.createElement("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),o.a.createElement("line",{x1:"12",y1:"17",x2:"12",y2:"21"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Monitor",t.a=c},794:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(5),i=r.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=s(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),o.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o.a.createElement("path",{d:"M16 10a4 4 0 0 1-8 0"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="ShoppingBag",t.a=c},924:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(5),i=r.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=s(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),o.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),o.a.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="AlertOctagon",t.a=c},932:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(5),i=r.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=s(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}),o.a.createElement("rect",{x:"9",y:"9",width:"6",height:"6"}),o.a.createElement("line",{x1:"9",y1:"1",x2:"9",y2:"4"}),o.a.createElement("line",{x1:"15",y1:"1",x2:"15",y2:"4"}),o.a.createElement("line",{x1:"9",y1:"20",x2:"9",y2:"23"}),o.a.createElement("line",{x1:"15",y1:"20",x2:"15",y2:"23"}),o.a.createElement("line",{x1:"20",y1:"9",x2:"23",y2:"9"}),o.a.createElement("line",{x1:"20",y1:"14",x2:"23",y2:"14"}),o.a.createElement("line",{x1:"1",y1:"9",x2:"4",y2:"9"}),o.a.createElement("line",{x1:"1",y1:"14",x2:"4",y2:"14"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Cpu",t.a=c},945:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(5),i=r.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=s(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("rect",{x:"1",y:"3",width:"15",height:"13"}),o.a.createElement("polygon",{points:"16 8 20 8 23 11 23 16 16 16 16 8"}),o.a.createElement("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),o.a.createElement("circle",{cx:"18.5",cy:"18.5",r:"2.5"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="Truck",t.a=c},946:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(5),i=r.n(a);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,c=s(e,["color","size"]);return o.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.a.createElement("path",{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),o.a.createElement("circle",{cx:"8.5",cy:"7",r:"4"}),o.a.createElement("polyline",{points:"17 11 19 13 23 9"}))}));c.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},c.displayName="UserCheck",t.a=c}}]);
//# sourceMappingURL=48.a945e1a8.chunk.js.map