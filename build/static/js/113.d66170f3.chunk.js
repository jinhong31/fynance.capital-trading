(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[113],{2008:function(e,t,o){"use strict";o.r(t);var n=o(15),r=o(0),a=o(124),c=o(1102),i=o(469),s=o(994),l=o(481),u=o(1095),p=o(1096),f=o(1151),d=o(471),b=o(1116),y=o(1152),m=o(1106),j=o(463),h=o(6),O=function(){return Object(h.jsx)(r.Fragment,{children:Object(h.jsx)("div",{className:"toastify-header pb-0",children:Object(h.jsxs)("div",{className:"title-wrapper",children:[Object(h.jsx)(i.a,{size:"sm",color:"success",icon:Object(h.jsx)(c.a,{})}),Object(h.jsx)("h6",{className:"toast-title",children:"Copied To Clipboard !"})]})})})};t.default=function(){var e=Object(r.useState)("Copy Me!"),t=Object(n.a)(e,2),o=t[0],c=t[1],i=Object(r.useState)(!1),g=Object(n.a)(i,2),v=(g[0],g[1]);return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(l.a,{title:"React Copy To Clipboard",subTitle:"Copy to clipboard React component",link:"https://github.com/nkbt/react-copy-to-clipboard"}),Object(h.jsx)(u.a,{children:Object(h.jsx)(p.a,{sm:"12",children:Object(h.jsxs)(f.a,{children:[Object(h.jsx)(d.a,{children:Object(h.jsx)(b.a,{tag:"h4",children:"Clipboard"})}),Object(h.jsx)(y.a,{children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(p.a,{xl:"3",md:"4",sm:"6",className:"pr-sm-0 mb-md-0 mb-1",children:Object(h.jsx)(m.a,{value:o,onChange:function(e){var t=e.target.value;c(t),v(!1)}})}),Object(h.jsx)(p.a,{md:"2",sm:"12",children:Object(h.jsx)(s.CopyToClipboard,{onCopy:function(){v(!0),a.f.success(Object(h.jsx)(O,{}),{autoClose:3e3,hideProgressBar:!0,closeButton:!1})},text:o,children:Object(h.jsx)(j.a.Ripple,{color:"primary",outline:!0,children:"Copy!"})})})]})})]})})})]})}},471:function(e,t,o){"use strict";var n=o(14),r=o(20),a=o(0),c=o.n(a),i=o(5),s=o.n(i),l=o(58),u=o.n(l),p=o(80),f={tag:p.tagPropType,className:s.a.string,cssModule:s.a.object},d=function(e){var t=e.className,o=e.cssModule,a=e.tag,i=Object(r.a)(e,["className","cssModule","tag"]),s=Object(p.mapToCssModules)(u()(t,"card-header"),o);return c.a.createElement(a,Object(n.a)({},i,{className:s}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},481:function(e,t,o){"use strict";var n=o(1095),r=o(1096),a=o(6);t.a=function(e){return Object(a.jsx)(n.a,{className:"mb-2",children:Object(a.jsxs)(r.a,{sm:"12",className:"ml-50",children:[Object(a.jsx)("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title",children:e.title}),e.link?Object(a.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:e.subTitle}):Object(a.jsx)("p",{className:"text-primary",children:e.subTitle})]})})}},994:function(e,t,o){"use strict";var n=o(995).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},995:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=a(o(0)),r=a(o(996));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?d(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function y(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var m=function(e){function t(){var e,o;l(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return y(d(o=p(this,(e=f(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=o.props,a=t.text,c=t.onCopy,i=t.children,s=t.options,l=n.default.Children.only(i),u=(0,r.default)(a,s);c&&c(a,u),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(e)})),o}var o,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),o=t,a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=s(e,["text","onCopy","options","children"]),r=n.default.Children.only(t);return n.default.cloneElement(r,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(o,!0).forEach((function(t){y(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},o,{onClick:this.onClick}))}}],a&&u(o.prototype,a),c&&u(o,c),t}(n.default.PureComponent);t.CopyToClipboard=m,y(m,"defaultProps",{onCopy:void 0,options:void 0})},996:function(e,t,o){"use strict";var n=o(997),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,a,c,i,s,l,u=!1;t||(t={}),o=t.debug||!1;try{if(c=n(),i=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),i.selectNodeContents(l),s.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){o&&console.error("unable to copy using execCommand: ",p),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){o&&console.error("unable to copy using clipboardData: ",p),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(i):s.removeAllRanges()),l&&document.body.removeChild(l),c()}return u}},997:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=113.d66170f3.chunk.js.map