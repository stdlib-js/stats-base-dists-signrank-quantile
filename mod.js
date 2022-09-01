// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=Math.floor;function p(r){return y(r)===r&&r>0}var v=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;function s(r){return r==r&&r>b&&r<v}function w(r){return r!=r}var d=Math.ceil;function m(r){return r<0?d(r):y(r)}function A(r){return r===v||r===b}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return h&&"symbol"==typeof Symbol.toStringTag}var _=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;function U(r,n){return null!=r&&j.call(r,n)}var E="function"==typeof Symbol?Symbol.toStringTag:"";var N=g()?function(r){var n,t,e;if(null==r)return _.call(r);t=r[E],n=U(r,E);try{r[E]=void 0}catch(n){return _.call(r)}return e=_.call(r),n?r[E]=t:delete r[E],e}:function(r){return _.call(r)},O="function"==typeof Uint32Array;var S="function"==typeof Uint32Array?Uint32Array:null;var I,F="function"==typeof Uint32Array?Uint32Array:void 0;I=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(O&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T=I,H="function"==typeof Float64Array;var G="function"==typeof Float64Array?Float64Array:null;var P,V="function"==typeof Float64Array?Float64Array:void 0;P=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G([1,3.14,-3.14,NaN]),t=n,r=(H&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var B=P,L="function"==typeof Uint8Array;var M="function"==typeof Uint8Array?Uint8Array:null;var x,W="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,256,257]),t=n,r=(L&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k=x,C="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var R,X="function"==typeof Uint16Array?Uint16Array:void 0;R=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(C&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?X:function(){throw new Error("not implemented")};var q,z={uint16:R,uint8:k};(q=new z.uint16(1))[0]=4660;var D,J,K=52===new z.uint8(q.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},Z=new B(1),$=new T(Z.buffer),rr=Q.HIGH,nr=Q.LOW;function tr(r,n){return Z[0]=n,r[0]=$[rr],r[1]=$[nr],r}function er(r,n){return 1===arguments.length?tr([0,0],r):tr(r,n)}var or,ur,ir=!0===K?1:0,ar=new B(1),fr=new T(ar.buffer);function cr(r){return ar[0]=r,fr[ir]}!0===K?(or=1,ur=0):(or=0,ur=1);var lr={HIGH:or,LOW:ur},yr=new B(1),pr=new T(yr.buffer),vr=lr.HIGH,br=lr.LOW;function sr(r,n){return pr[vr]=r,pr[br]=n,yr[0]}var wr=[0,0];function dr(r,n){return w(n)||A(n)?(r[0]=n,r[1]=0,r):0!==n&&function(r){return Math.abs(r)}(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var mr=[0,0],Ar=[0,0];function hr(r,n){var t,e,o,u,i;return 0===n||0===r||w(r)||A(r)?r:(function(r,n){1===arguments.length?dr([0,0],r):dr(r,n)}(mr,r),n+=mr[1],n+=function(r){var n=cr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=mr[0]),n<-1074?(o=r,er(wr,0),u=wr[0],u&=2147483647,i=cr(o),sr(u|=i&=2147483648,wr[1])):n>1023?r<0?b:v:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,er(Ar,r),t=Ar[0],t&=2148532223,e*sr(t|=n+1023<<20,Ar[1])))}function gr(r){var n;return w(r)||r===v?r:r===b?0:r>709.782712893384?v:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,u,i;return hr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=m(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}var _r=.6931471805599453,jr=/./;function Ur(r){return"boolean"==typeof r}var Er=Boolean.prototype.toString;var Nr=g();function Or(r){return"object"==typeof r&&(r instanceof Boolean||(Nr?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===N(r)))}function Sr(r){return Ur(r)||Or(r)}function Ir(){return new Function("return this;")()}l(Sr,"isPrimitive",Ur),l(Sr,"isObject",Or);var Fr="object"==typeof self?self:null,Tr="object"==typeof window?window:null,Hr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Gr="object"==typeof Hr?Hr:null;var Pr=function(r){if(arguments.length){if(!Ur(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ir()}if(Fr)return Fr;if(Tr)return Tr;if(Gr)return Gr;throw new Error("unexpected error. Unable to resolve global object.")}(),Vr=Pr.document&&Pr.document.childNodes,Br=Int8Array;function Lr(){return/^\s*function\s*([^(]*)/i}var Mr=/^\s*function\s*([^(]*)/i;l(Lr,"REGEXP",Mr);var xr=Array.isArray?Array.isArray:function(r){return"[object Array]"===N(r)};function Wr(r){return null!==r&&"object"==typeof r}function kr(r){var n,t,e,o;if(("Object"===(t=N(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=Mr.exec(e.toString()))return n[1]}return Wr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(Wr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!xr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(Wr));var Cr,Yr="function"==typeof jr||"object"==typeof Br||"function"==typeof Vr?function(r){return kr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?kr(r).toLowerCase():n};function Rr(r){return"function"===Yr(r)}function Xr(r){return r}var qr=Cr=function(r,n){var t,e;if(!Rr(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(arguments.length<2)t=Xr;else if(!Rr(t=n))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+t+"`.");return l(o,"cache",e={}),o;function o(){var n,o,u,i;for(n=new Array(arguments.length),i=0;i<arguments.length;i++)n[i]=arguments[i];return u=t(n).toString(),U(e,u)?e[u]:(o=r.apply(null,n),e[u]=o,o)}}((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),Cr(r-n,n-1)+Cr(r,n-1)))}));function zr(r,n){var t,e,o;if(w(n)||!p(n)||!s(n))return NaN;if(w(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return n*(n+1)/2;for(t=gr(-n*_r),o=0,e=-1;o<r;)o+=t*qr(e+=1,n);return e}function Dr(r){var n,t;return!w(r)&&p(r)&&s(r)?(n=gr(-r*_r),function(t){var e,o;if(w(t)||t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return r*(r+1)/2;e=0,o=-1;for(;e<t;)e+=n*qr(o+=1,r);return o}):(t=NaN,function(){return t})}l(zr,"factory",Dr);export{zr as default,Dr as factory};
//# sourceMappingURL=mod.js.map
