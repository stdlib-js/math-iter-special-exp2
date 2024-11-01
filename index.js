// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterExp2=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,e,n,i,a,c,f,l,s,p,y,v,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(t=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,g=void 0,(g=y-p.length)<0?p:p=v?p+m(g):m(g)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,e,n,o;for(e=[],o=0,n=S.exec(r);n;)(t=r.slice(o,S.lastIndex-n[0].length)).length&&e.push(t),e.push(x(n)),o=S.lastIndex,n=S.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function T(r){var t,e;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return O.apply(null,t)}var F,I=Object.prototype,k=I.toString,V=I.__defineGetter__,P=I.__defineSetter__,N=I.__lookupGetter__,G=I.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(N.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=I,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,t,e.get),a&&P&&P.call(r,t,e.set),r};var L=F;function $(r,t,e){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Z(r,t){return null!=r&&M.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=B()?function(r){var t,e,n;if(null==r)return R.call(r);e=r[Y],t=Z(r,Y);try{r[Y]=void 0}catch(t){return R.call(r)}return n=R.call(r),t?r[Y]=e:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString;var J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,er="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!H(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(tr)return tr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=or.document&&or.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;$(ur,"REGEXP",cr);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var t,e,n,o;if(("Object"===(e=z(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=cr.exec(n.toString()))return t[1]}return lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!fr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(lr));var pr="function"==typeof C||"object"==typeof ar||"function"==typeof ir?function(r){return sr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?sr(r).toLowerCase():t};function yr(r){return"function"===pr(r)}function vr(r){return"number"==typeof r}var gr=Number,dr=gr.prototype.toString;var br=B();function hr(r){return"object"==typeof r&&(r instanceof gr||(br?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function wr(r){return vr(r)||hr(r)}$(wr,"isPrimitive",vr),$(wr,"isObject",hr);var mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var jr,Ar=Object,Er=Object.getPrototypeOf;jr=yr(Object.getPrototypeOf)?Er:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=jr;var Or=Object.prototype;function Sr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(t=function(r){return null==r?null:(r=Ar(r),_r(r))}(r),!t||!Z(r,"constructor")&&Z(t,"constructor")&&yr(t.constructor)&&"[object Function]"===z(t.constructor)&&Z(t,"isPrototypeOf")&&yr(t.isPrototypeOf)&&(t===Or||function(r){var t;for(t in r)if(!Z(r,t))return!1;return!0}(r)))}function xr(r,t,e){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!yr(u.next))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!yr(t))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=function(r,t){return Sr(t)?(Z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",t))}(n,e),i))throw i;return $(o={},"next",(function(){var e;if(a)return{done:!0};if((e=r.next()).done)return a=!0,e;return{value:vr(e.value)?t(e.value):n.invalid,done:!1}})),$(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),mr&&yr(r[mr])&&$(o,mr,(function(){return xr(r[mr](),t,n)})),o}var Ur=1023,Tr=-1022,Fr=Math.round,Ir=Number.POSITIVE_INFINITY,kr=gr.NEGATIVE_INFINITY,Vr=1023,Pr=-1023,Nr=-1074;function Gr(r){return r!=r}function Lr(r){return r===Ir||r===kr}var $r=2147483648,Cr=2147483647,Hr="function"==typeof Uint32Array;var Wr="function"==typeof Uint32Array?Uint32Array:null;var Br,Rr="function"==typeof Uint32Array?Uint32Array:void 0;Br=function(){var r,t,e;if("function"!=typeof Wr)return!1;try{t=new Wr(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Hr&&e instanceof Uint32Array||"[object Uint32Array]"===z(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Mr=Br,Zr="function"==typeof Float64Array;var Xr="function"==typeof Float64Array?Float64Array:null;var Yr,zr="function"==typeof Float64Array?Float64Array:void 0;Yr=function(){var r,t,e;if("function"!=typeof Xr)return!1;try{t=new Xr([1,3.14,-3.14,NaN]),e=t,r=(Zr&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var qr=Yr,Dr="function"==typeof Uint8Array;var Jr="function"==typeof Uint8Array?Uint8Array:null;var Kr,Qr="function"==typeof Uint8Array?Uint8Array:void 0;Kr=function(){var r,t,e;if("function"!=typeof Jr)return!1;try{t=new Jr(t=[1,3.14,-3.14,256,257]),e=t,r=(Dr&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var rt=Kr,tt="function"==typeof Uint16Array;var et="function"==typeof Uint16Array?Uint16Array:null;var nt,ot="function"==typeof Uint16Array?Uint16Array:void 0;nt=function(){var r,t,e;if("function"!=typeof et)return!1;try{t=new et(t=[1,3.14,-3.14,65536,65537]),e=t,r=(tt&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ot:function(){throw new Error("not implemented")};var it,at={uint16:nt,uint8:rt};(it=new at.uint16(1))[0]=4660;var ut,ct,ft=52===new at.uint8(it.buffer)[0];!0===ft?(ut=1,ct=0):(ut=0,ct=1);var lt={HIGH:ut,LOW:ct},st=new qr(1),pt=new Mr(st.buffer),yt=lt.HIGH,vt=lt.LOW;function gt(r,t,e,n){return st[0]=r,t[n]=pt[yt],t[n+e]=pt[vt],t}function dt(r){return gt(r,[0,0],1,0)}$(dt,"assign",gt);var bt,ht,wt=!0===ft?1:0,mt=new qr(1),jt=new Mr(mt.buffer);function At(r){return mt[0]=r,jt[wt]}!0===ft?(bt=1,ht=0):(bt=0,ht=1);var Et={HIGH:bt,LOW:ht},_t=new qr(1),Ot=new Mr(_t.buffer),St=Et.HIGH,xt=Et.LOW;function Ut(r,t){return Ot[St]=r,Ot[xt]=t,_t[0]}var Tt=[0,0];var Ft=22250738585072014e-324;var It=4503599627370496;function kt(r,t,e,n){return Gr(r)||Lr(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<Ft?(t[n]=r*It,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}$((function(r){return kt(r,[0,0],1,0)}),"assign",kt);var Vt=2146435072;var Pt=2220446049250313e-31,Nt=2148532223,Gt=[0,0],Lt=[0,0];function $t(r,t){var e,n,o,i,a,u;return 0===t||0===r||Gr(r)||Lr(r)?r:(kt(r,Gt,1,0),r=Gt[0],t+=Gt[1],t+=function(r){var t=At(r);return(t=(t&Vt)>>>20)-Vr|0}(r),t<Nr?(o=0,i=r,dt.assign(o,Tt,1,0),a=Tt[0],a&=Cr,u=At(i),Ut(a|=u&=$r,Tt[1])):t>Ur?r<0?kr:Ir:(t<=Pr?(t+=52,n=Pt):n=1,dt.assign(r,Lt,1,0),e=Lt[0],e&=Nt,n*Ut(e|=t+Vr<<20,Lt[1])))}function Ct(r){var t,e,n;return Gr(r)?r:r>Ur?Ir:r<Tr?0:(t=(r-=n=Fr(r))*function(r){return 0===r?1513.906801156151:1513.906801156151+r*(20.202065669316532+.023093347705734523*r)}(e=r*r),r=1+$t(r=t/(function(r){return 0===r?4368.211668792106:4368.211668792106+r*(233.1842117223149+1*r)}(e)-t),1),$t(r,n))}return function(r){return xr(r,Ct)}}));
//# sourceMappingURL=index.js.map
