// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterExp2=t()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},y=e,v=l,p=n()?y:v;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,g=_;var A=function(r){return g.call(r)},h=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&h.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,P=_;var T=A,F=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},I=j()?F:T,N=Boolean.prototype.toString;var x=I,G=function(r){try{return N.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===x(r)))},B=m,L=H;var M=s,k=function(r){return B(r)||L(r)},W=H;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D="object"==typeof z?z:null;module.exports=D;var q=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;s(fr,"REGEXP",ar());var cr=fr,lr=I;var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},vr=yr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!vr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=I,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var _r=wr;var gr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},Ar=function(r){return _r(r).toLowerCase()},hr=ir()?Ar:gr;var Or=function(r){return"function"===hr(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Sr=function(r){return"number"==typeof r},Pr=Number,Tr=Pr.prototype.toString;var Fr=I,Ir=Pr,Nr=function(r){try{return Tr.call(r),!0}catch(r){return!1}},xr=j();var Gr=function(r){return"object"==typeof r&&(r instanceof Ir||(xr?Nr(r):"[object Number]"===Fr(r)))},Vr=Sr,Hr=Gr;var Br=s,Lr=function(r){return Vr(r)||Hr(r)},Mr=Gr;Br(Lr,"isPrimitive",Sr),Br(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=yr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var zr=function(r){return r.__proto__},Dr=I,qr=zr;var Jr=function(r){var t=qr(r);return t||null===t?t:"[object Function]"===Dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=I,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ft=s,ct=Or,lt=Ur,yt=kr.isPrimitive,vt=Cr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return ft(u={},"next",f),ft(u,"return",c),vt&&ct(t[vt])&&ft(u,vt,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:yt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[vt](),n,o)}},st=bt,dt=Math.round,mt=Number.POSITIVE_INFINITY,wt=Pr.NEGATIVE_INFINITY;var jt=function(r){return r!=r},_t=mt,gt=wt;var At=function(r){return r===_t||r===gt},ht=I,Ot="function"==typeof Uint32Array;var Et="function"==typeof Uint32Array?Uint32Array:null,Ut=function(r){return Ot&&r instanceof Uint32Array||"[object Uint32Array]"===ht(r)},St=Et;var Pt=function(){var r,t;if("function"!=typeof St)return!1;try{t=new St(t=[1,3.14,-3.14,4294967296,4294967297]),r=Ut(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Tt="function"==typeof Uint32Array?Uint32Array:void 0,Ft=function(){throw new Error("not implemented")},It=Pt()?Tt:Ft,Nt=I,xt="function"==typeof Float64Array;var Gt="function"==typeof Float64Array?Float64Array:null,Vt=function(r){return xt&&r instanceof Float64Array||"[object Float64Array]"===Nt(r)},Ht=Gt;var Bt=function(){var r,t;if("function"!=typeof Ht)return!1;try{t=new Ht([1,3.14,-3.14,NaN]),r=Vt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Lt="function"==typeof Float64Array?Float64Array:void 0,Mt=function(){throw new Error("not implemented")},kt=Bt()?Lt:Mt,Wt=I,Ct="function"==typeof Uint8Array;var Rt="function"==typeof Uint8Array?Uint8Array:null,Xt=function(r){return Ct&&r instanceof Uint8Array||"[object Uint8Array]"===Wt(r)},Yt=Rt;var zt=function(){var r,t;if("function"!=typeof Yt)return!1;try{t=new Yt(t=[1,3.14,-3.14,256,257]),r=Xt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Dt="function"==typeof Uint8Array?Uint8Array:void 0,qt=function(){throw new Error("not implemented")},Jt=zt()?Dt:qt,Kt=I,Qt="function"==typeof Uint16Array;var Zt="function"==typeof Uint16Array?Uint16Array:null,$t=function(r){return Qt&&r instanceof Uint16Array||"[object Uint16Array]"===Kt(r)},rn=Zt;var tn=function(){var r,t;if("function"!=typeof rn)return!1;try{t=new rn(t=[1,3.14,-3.14,65536,65537]),r=$t(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var nn,en="function"==typeof Uint16Array?Uint16Array:void 0,on=function(){throw new Error("not implemented")},un={uint16:tn()?en:on,uint8:Jt};(nn=new un.uint16(1))[0]=4660;var an,fn,cn=52===new un.uint8(nn.buffer)[0];!0===cn?(an=1,fn=0):(an=0,fn=1);var ln=It,yn={HIGH:an,LOW:fn},vn=new kt(1),pn=new ln(vn.buffer),bn=yn.HIGH,sn=yn.LOW;var dn=function(r,t){return vn[0]=t,r[0]=pn[bn],r[1]=pn[sn],r};var mn=function(r,t){return 1===arguments.length?dn([0,0],r):dn(r,t)},wn=mn,jn=It,_n=!0===cn?1:0,gn=new kt(1),An=new jn(gn.buffer);var hn,On,En=function(r){return gn[0]=r,An[_n]};!0===cn?(hn=1,On=0):(hn=0,On=1);var Un=It,Sn={HIGH:hn,LOW:On},Pn=new kt(1),Tn=new Un(Pn.buffer),Fn=Sn.HIGH,In=Sn.LOW;var Nn=function(r,t){return Tn[Fn]=r,Tn[In]=t,Pn[0]},xn=wn,Gn=En,Vn=Nn,Hn=[0,0];var Bn=At,Ln=jt,Mn=function(r){return Math.abs(r)};var kn=function(r,t){return Ln(t)||Bn(t)?(r[0]=t,r[1]=0,r):0!==t&&Mn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var Wn=function(r,t){return 1===arguments.length?kn([0,0],r):kn(r,t)},Cn=En;var Rn=function(r){var t=Cn(r);return(t=(2146435072&t)>>>20)-1023|0},Xn=mt,Yn=wt,zn=jt,Dn=At,qn=function(r,t){var n,e;return xn(Hn,r),n=Hn[0],n&=2147483647,e=Gn(t),Vn(n|=e&=2147483648,Hn[1])},Jn=Wn,Kn=Rn,Qn=wn,Zn=Nn,$n=[0,0],re=[0,0];var te=function(r,t){var n,e;return 0===t||0===r||zn(r)||Dn(r)?r:(Jn($n,r),t+=$n[1],(t+=Kn(r=$n[0]))<-1074?qn(0,r):t>1023?r<0?Yn:Xn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Qn(re,r),n=re[0],n&=2148532223,e*Zn(n|=t+1023<<20,re[1])))};var ne=dt,ee=te,oe=jt,ue=mt,ie=function(r){return 0===r?1513.906801156151:1513.906801156151+r*(20.202065669316532+.023093347705734523*r)},ae=function(r){return 0===r?4368.211668792106:4368.211668792106+r*(233.1842117223149+1*r)};var fe=st,ce=function(r){var t,n,e;return oe(r)?r:r>1023?ue:r<-1022?0:(r=(t=(r-=e=ne(r))*ie(n=r*r))/(ae(n)-t),r=1+ee(r,1),ee(r,e))};var le=function(r){return fe(r,ce)};return le}));
//# sourceMappingURL=bundle.js.map
