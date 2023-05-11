"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[174],{5799:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=e||"";t&&(o=r(e));n&&(o=a(o));return o};var n=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function r(e){return e.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,r){return t>0&&t+e.length!==r.length&&e.search(n)>-1&&":"!==r.charAt(t-2)&&("-"!==r.charAt(t+e.length)||"-"===r.charAt(t-1))&&r.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}function a(e){return"string"==typeof(t=e)&&-1!==t.indexOf("@")?(console.warn("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}},6991:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GA4=void 0;var r=u(n(9127)),a=u(n(5799)),o=["eventCategory","eventAction","eventLabel","eventValue","hitType"],i=["title","location"],c=["page","hitType"];function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function g(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,c=[],u=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(s){l=!0,a=s}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return c}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_(r.key),r)}}function b(e,t,n){return(t=_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}var h=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"reset",(function(){t.isInitialized=!1,t._testMode=!1,t._currentMeasurementId,t._hasLoadedGA=!1,t._isQueuing=!1,t._queueGtag=[]})),b(this,"_gtag",(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];t._testMode||t._isQueuing?t._queueGtag.push(n):r.default.apply(void 0,n)})),b(this,"_loadGA",(function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://www.googletagmanager.com/gtag/js";if("undefined"!=typeof window&&"undefined"!=typeof document&&!t._hasLoadedGA){var a=document.createElement("script");a.async=!0,a.src="".concat(r,"?id=").concat(e),n&&a.setAttribute("nonce",n),document.body.appendChild(a),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},t._hasLoadedGA=!0}})),b(this,"_toGtagOptions",(function(e){if(e){var t={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(e).reduce((function(e,n){var r=p(n,2),a=r[0],o=r[1];return t[a]?e[t[a]]=o:e[a]=o,e}),{})}})),b(this,"initialize",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)throw new Error("Require GA_MEASUREMENT_ID");var r="string"==typeof e?[{trackingId:e}]:e;t._currentMeasurementId=r[0].trackingId;var a=n.gaOptions,o=n.gtagOptions,i=n.nonce,c=n.testMode,u=void 0!==c&&c,l=n.gtagUrl;if(t._testMode=u,u||t._loadGA(t._currentMeasurementId,i,l),t.isInitialized||(t._gtag("js",new Date),r.forEach((function(e){var n=d(d(d({},t._toGtagOptions(d(d({},a),e.gaOptions))),o),e.gtagOptions);Object.keys(n).length?t._gtag("config",e.trackingId,n):t._gtag("config",e.trackingId)}))),t.isInitialized=!0,!u){var s=g(t._queueGtag);for(t._queueGtag=[],t._isQueuing=!1;s.length;){var f=s.shift();t._gtag.apply(t,g(f)),"get"===f[0]&&(t._isQueuing=!0)}}})),b(this,"set",(function(e){e?"object"===s(e)?(0===Object.keys(e).length&&console.warn("empty `fieldsObject` given to .set()"),t._gaCommand("set",e)):console.warn("Expected `fieldsObject` arg to be an Object"):console.warn("`fieldsObject` is required in .set()")})),b(this,"_gaCommandSendEvent",(function(e,n,r,a,o){t._gtag("event",n,d(d({event_category:e,event_label:r,value:a},o&&{non_interaction:o.nonInteraction}),t._toGtagOptions(o)))})),b(this,"_gaCommandSendEventParameters",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if("string"==typeof n[0])t._gaCommandSendEvent.apply(t,g(n.slice(1)));else{var a=n[0],i=a.eventCategory,c=a.eventAction,u=a.eventLabel,s=a.eventValue,f=(a.hitType,l(a,o));t._gaCommandSendEvent(i,c,u,s,f)}})),b(this,"_gaCommandSendTiming",(function(e,n,r,a){t._gtag("event","timing_complete",{name:n,value:r,event_category:e,event_label:a})})),b(this,"_gaCommandSendPageview",(function(e,n){if(n&&Object.keys(n).length){var r=t._toGtagOptions(n),a=r.title,o=r.location,c=l(r,i);t._gtag("event","page_view",d(d(d(d({},e&&{page_path:e}),a&&{page_title:a}),o&&{page_location:o}),c))}else e?t._gtag("event","page_view",{page_path:e}):t._gtag("event","page_view")})),b(this,"_gaCommandSendPageviewParameters",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if("string"==typeof n[0])t._gaCommandSendPageview.apply(t,g(n.slice(1)));else{var a=n[0],o=a.page,i=(a.hitType,l(a,c));t._gaCommandSendPageview(o,i)}})),b(this,"_gaCommandSend",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var a="string"==typeof n[0]?n[0]:n[0].hitType;switch(a){case"event":t._gaCommandSendEventParameters.apply(t,n);break;case"pageview":t._gaCommandSendPageviewParameters.apply(t,n);break;case"timing":t._gaCommandSendTiming.apply(t,g(n.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(a));break;default:console.warn("Send command doesn't exist: ".concat(a))}})),b(this,"_gaCommandSet",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]=b({},n[0],n[1])),t._gtag("set",t._toGtagOptions(n[0]))})),b(this,"_gaCommand",(function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];switch(e){case"send":t._gaCommandSend.apply(t,r);break;case"set":t._gaCommandSet.apply(t,r);break;default:console.warn("Command doesn't exist: ".concat(e))}})),b(this,"ga",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];if("string"==typeof n[0])t._gaCommand.apply(t,n);else{var a=n[0];t._gtag("get",t._currentMeasurementId,"client_id",(function(e){t._isQueuing=!1;var n=t._queueGtag;for(a({get:function(n){return"clientId"===n?e:"trackingId"===n?t._currentMeasurementId:"apiVersion"===n?"1":void 0}});n.length;){var r=n.shift();t._gtag.apply(t,g(r))}})),t._isQueuing=!0}return t.ga})),b(this,"event",(function(e,n){if("string"==typeof e)t._gtag("event",e,t._toGtagOptions(n));else{var r=e.action,o=e.category,i=e.label,c=e.value,u=e.nonInteraction,l=e.transport;if(!o||!r)return void console.warn("args.category AND args.action are required in event()");var s={hitType:"event",eventCategory:(0,a.default)(o),eventAction:(0,a.default)(r)};i&&(s.eventLabel=(0,a.default)(i)),void 0!==c&&("number"!=typeof c?console.warn("Expected `args.value` arg to be a Number."):s.eventValue=c),void 0!==u&&("boolean"!=typeof u?console.warn("`args.nonInteraction` must be a boolean."):s.nonInteraction=u),void 0!==l&&("string"!=typeof l?console.warn("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(l)&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),s.transport=l)),t._gaCommand("send",s)}})),b(this,"send",(function(e){t._gaCommand("send",e)})),this.reset()}var t,n,u;return t=e,n=[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}],n&&m(t.prototype,n),u&&m(t,u),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.GA4=h;var w=new h;t.default=w},9127:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r;"undefined"!=typeof window&&(void 0===window.gtag&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(r=window).gtag.apply(r,t))};t.default=n},6725:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.ZP=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var u=i?Object.getOwnPropertyDescriptor(e,c):null;u&&(u.get||u.set)?Object.defineProperty(a,c,u):a[c]=e[c]}a.default=e,n&&n.set(e,a);return a}(n(6991));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}a.GA4;var i=a.default;t.ZP=i}}]);
//# sourceMappingURL=e6e040dbbe8f4c80316b4514b4dae2bcd019e4d9-ebde18ae02a0e7efe6a1.js.map