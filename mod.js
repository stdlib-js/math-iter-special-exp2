// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,c=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var f,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||c.call(t,r)?(f=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=f):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var f=r;function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},A=Boolean.prototype.toString;var g=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},F="object"==typeof E?E:null;var I=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(F)return F;throw new Error("unexpected error. Unable to resolve global object.")}(),N=I.document&&I.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function H(t){return null!==t&&"object"==typeof t}function x(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=V.exec(e.toString()))return r[1]}return H(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(H,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!G(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(H));var B="function"==typeof y||"object"==typeof P||"function"==typeof N?function(t){return x(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?x(t).toLowerCase():r};function L(t){return"function"===B(t)}function M(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&L(t.next)}function W(t){return"number"==typeof t}var k=Number,C=k.prototype.toString;var Y=b();function R(t){return"object"==typeof t&&(t instanceof k||(Y?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function X(t){return W(t)||R(t)}l(X,"isPrimitive",W),l(X,"isObject",R);var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!G(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function Z(t,r){return Q(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function $(t,r,n){var e,o,u,i;if(!M(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!L(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",a),l(o,"return",c),q&&L(t[q])&&l(o,q,f),o;function a(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:W(n.value)?r(n.value):e.invalid,done:!1}}function c(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return $(t[q](),r,e)}}var tt=Math.round,rt=Number.POSITIVE_INFINITY,nt=k.NEGATIVE_INFINITY;function et(t){return t!=t}function ot(t){return t===rt||t===nt}var ut="function"==typeof Uint32Array;var it="function"==typeof Uint32Array?Uint32Array:null;var at,ct="function"==typeof Uint32Array?Uint32Array:void 0;at=function(){var t,r,n;if("function"!=typeof it)return!1;try{r=new it(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(ut&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?ct:function(){throw new Error("not implemented")};var ft=at,lt="function"==typeof Float64Array;var yt="function"==typeof Float64Array?Float64Array:null;var pt,vt="function"==typeof Float64Array?Float64Array:void 0;pt=function(){var t,r,n;if("function"!=typeof yt)return!1;try{r=new yt([1,3.14,-3.14,NaN]),n=r,t=(lt&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?vt:function(){throw new Error("not implemented")};var bt=pt,st="function"==typeof Uint8Array;var dt="function"==typeof Uint8Array?Uint8Array:null;var mt,wt="function"==typeof Uint8Array?Uint8Array:void 0;mt=function(){var t,r,n;if("function"!=typeof dt)return!1;try{r=new dt(r=[1,3.14,-3.14,256,257]),n=r,t=(st&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?wt:function(){throw new Error("not implemented")};var jt=mt,At="function"==typeof Uint16Array;var gt="function"==typeof Uint16Array?Uint16Array:null;var _t,ht="function"==typeof Uint16Array?Uint16Array:void 0;_t=function(){var t,r,n;if("function"!=typeof gt)return!1;try{r=new gt(r=[1,3.14,-3.14,65536,65537]),n=r,t=(At&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?ht:function(){throw new Error("not implemented")};var Ot,Ut={uint16:_t,uint8:jt};(Ot=new Ut.uint16(1))[0]=4660;var St,Et,Ft=52===new Ut.uint8(Ot.buffer)[0];!0===Ft?(St=1,Et=0):(St=0,Et=1);var It={HIGH:St,LOW:Et},Nt=new bt(1),Pt=new ft(Nt.buffer),Tt=It.HIGH,Vt=It.LOW;function Gt(t,r){return Nt[0]=r,t[0]=Pt[Tt],t[1]=Pt[Vt],t}function Ht(t,r){return 1===arguments.length?Gt([0,0],t):Gt(t,r)}var xt,Bt,Lt=!0===Ft?1:0,Mt=new bt(1),Wt=new ft(Mt.buffer);function kt(t){return Mt[0]=t,Wt[Lt]}!0===Ft?(xt=1,Bt=0):(xt=0,Bt=1);var Ct={HIGH:xt,LOW:Bt},Yt=new bt(1),Rt=new ft(Yt.buffer),Xt=Ct.HIGH,qt=Ct.LOW;function zt(t,r){return Rt[Xt]=t,Rt[qt]=r,Yt[0]}var Dt=[0,0];function Jt(t,r,n,e){return et(t)||ot(t)?(r[e]=t,r[e+n]=0,r):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}l((function(t){return Jt(t,[0,0],1,0)}),"assign",Jt);var Kt=[0,0],Qt=[0,0];function Zt(t,r){var n,e,o,u,i;return 0===r||0===t||et(t)||ot(t)?t:(Jt(t,Kt,1,0),r+=Kt[1],r+=function(t){var r=kt(t);return(r=(2146435072&r)>>>20)-1023|0}(t=Kt[0]),r<-1074?(o=t,Ht(Dt,0),u=Dt[0],u&=2147483647,i=kt(o),zt(u|=i&=2147483648,Dt[1])):r>1023?t<0?nt:rt:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Ht(Qt,t),n=Qt[0],n&=2148532223,e*zt(n|=r+1023<<20,Qt[1])))}function $t(t){var r,n,e;return et(t)?t:t>1023?rt:t<-1022?0:(r=(t-=e=tt(t))*function(t){return 0===t?1513.906801156151:1513.906801156151+t*(20.202065669316532+.023093347705734523*t)}(n=t*t),t=1+Zt(t=r/(function(t){return 0===t?4368.211668792106:4368.211668792106+t*(233.1842117223149+1*t)}(n)-r),1),Zt(t,e))}function tr(t){return $(t,$t)}export{tr as default};
//# sourceMappingURL=mod.js.map
