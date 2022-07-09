// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).quantile={})}(this,(function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,t){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),p&&f&&f.call(r,n,t.set),r};var l=t;function y(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var p=Math.floor;function v(r){return p(r)===r&&r>0}var s=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;function d(r){return r==r&&r>b&&r<s}function w(r){return r!=r}var m=Math.ceil;function A(r){return r<0?m(r):p(r)}function h(r){return r===s||r===b}var g="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return g&&"symbol"==typeof Symbol.toStringTag}var j=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function E(r,n){return null!=r&&U.call(r,n)}var N="function"==typeof Symbol?Symbol.toStringTag:"";var O=_()?function(r){var n,t,e;if(null==r)return j.call(r);t=r[N],n=E(r,N);try{r[N]=void 0}catch(n){return j.call(r)}return e=j.call(r),n?r[N]=t:delete r[N],e}:function(r){return j.call(r)},S="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null;var T,F="function"==typeof Uint32Array?Uint32Array:void 0;T=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(S&&t instanceof Uint32Array||"[object Uint32Array]"===O(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var H=T,P="function"==typeof Float64Array;var G="function"==typeof Float64Array?Float64Array:null;var V,B="function"==typeof Float64Array?Float64Array:void 0;V=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G([1,3.14,-3.14,NaN]),t=n,r=(P&&t instanceof Float64Array||"[object Float64Array]"===O(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?B:function(){throw new Error("not implemented")};var L=V,x="function"==typeof Uint8Array;var M="function"==typeof Uint8Array?Uint8Array:null;var W,k="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(x&&t instanceof Uint8Array||"[object Uint8Array]"===O(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var C=W,Y="function"==typeof Uint16Array;var q="function"==typeof Uint16Array?Uint16Array:null;var R,X="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===O(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?X:function(){throw new Error("not implemented")};var z,D={uint16:R,uint8:C};(z=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(z.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var Z={HIGH:J,LOW:K},$=new L(1),rr=new H($.buffer),nr=Z.HIGH,tr=Z.LOW;function er(r,n){return $[0]=n,r[0]=rr[nr],r[1]=rr[tr],r}function or(r,n){return 1===arguments.length?er([0,0],r):er(r,n)}var ur,ir,fr=!0===Q?1:0,ar=new L(1),cr=new H(ar.buffer);function lr(r){return ar[0]=r,cr[fr]}!0===Q?(ur=1,ir=0):(ur=0,ir=1);var yr={HIGH:ur,LOW:ir},pr=new L(1),vr=new H(pr.buffer),sr=yr.HIGH,br=yr.LOW;function dr(r,n){return vr[sr]=r,vr[br]=n,pr[0]}var wr=[0,0];function mr(r,n){return w(n)||h(n)?(r[0]=n,r[1]=0,r):0!==n&&function(r){return Math.abs(r)}(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Ar=[0,0],hr=[0,0];function gr(r,n){var t,e,o,u,i;return 0===n||0===r||w(r)||h(r)?r:(function(r,n){1===arguments.length?mr([0,0],r):mr(r,n)}(Ar,r),n+=Ar[1],n+=function(r){var n=lr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Ar[0]),n<-1074?(o=r,or(wr,0),u=wr[0],u&=2147483647,i=lr(o),dr(u|=i&=2147483648,wr[1])):n>1023?r<0?b:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,or(hr,r),t=hr[0],t&=2148532223,e*dr(t|=n+1023<<20,hr[1])))}var _r=1.4426950408889634,jr=1/(1<<28);function Ur(r){var n;return w(r)||r===s?r:r===b?0:r>709.782712893384?s:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<jr?1+r:function(r,n,t){var e,o,u,i;return gr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=A(r<0?_r*r-.5:_r*r+.5)),1.9082149292705877e-10*n,n)}var Er=.6931471805599453,Nr=/./;function Or(r){return"boolean"==typeof r}var Sr=Boolean.prototype.toString;var Ir=_();function Tr(r){return"object"==typeof r&&(r instanceof Boolean||(Ir?function(r){try{return Sr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function Fr(r){return Or(r)||Tr(r)}function Hr(){return new Function("return this;")()}y(Fr,"isPrimitive",Or),y(Fr,"isObject",Tr);var Pr="object"==typeof self?self:null,Gr="object"==typeof window?window:null,Vr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Br="object"==typeof Vr?Vr:null;var Lr=function(r){if(arguments.length){if(!Or(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Hr()}if(Pr)return Pr;if(Gr)return Gr;if(Br)return Br;throw new Error("unexpected error. Unable to resolve global object.")}(),xr=Lr.document&&Lr.document.childNodes,Mr=Int8Array;function Wr(){return/^\s*function\s*([^(]*)/i}var kr=/^\s*function\s*([^(]*)/i;y(Wr,"REGEXP",kr);var Cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};function Yr(r){return null!==r&&"object"==typeof r}function qr(r){var n,t,e,o;if(("Object"===(t=O(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=kr.exec(e.toString()))return n[1]}return Yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}y(Yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!Cr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(Yr));var Rr,Xr="function"==typeof Nr||"object"==typeof Mr||"function"==typeof xr?function(r){return qr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?qr(r).toLowerCase():n};function zr(r){return"function"===Xr(r)}function Dr(r){return r}Rr=function(r,n){var t,e;if(!zr(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(arguments.length<2)t=Dr;else if(!zr(t=n))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+t+"`.");return y(o,"cache",e={}),o;function o(){var n,o,u,i;for(n=new Array(arguments.length),i=0;i<arguments.length;i++)n[i]=arguments[i];return u=t(n).toString(),E(e,u)?e[u]:(o=r.apply(null,n),e[u]=o,o)}}((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),Rr(r-n,n-1)+Rr(r,n-1)))}));var Jr=Rr;function Kr(r,n){var t,e,o;if(w(n)||!v(n)||!d(n))return NaN;if(w(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return n*(n+1)/2;for(t=Ur(-n*Er),o=0,e=-1;o<r;)o+=t*Jr(e+=1,n);return e}function Qr(r){var n,t;return!w(r)&&v(r)&&d(r)?(n=Ur(-r*Er),function(t){var e,o;if(w(t)||t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return r*(r+1)/2;e=0,o=-1;for(;e<t;)e+=n*Jr(o+=1,r);return o}):(t=NaN,function(){return t})}y(Kr,"factory",Qr),r.default=Kr,r.factory=Qr,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=browser.js.map
