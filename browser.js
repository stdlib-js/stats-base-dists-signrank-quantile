// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,w,"$1e"),n=s.call(n,v,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,E=isNaN,_=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,c,f,l,s,p,y,g,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=U.exec(r);n;)(e=r.slice(i,U.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=U.lastIndex,n=U.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function x(r){var e,t;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var F,N=Object.prototype,k=N.toString,V=N.__defineGetter__,O=N.__defineSetter__,G=N.__lookupGetter__,L=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,e,t.get),a&&O&&O.call(r,e,t.set),r};var $=F;function C(r,e,t){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var H=Math.floor;function P(r){return H(r)===r&&r>0}var W=Number.POSITIVE_INFINITY,B=Number.NEGATIVE_INFINITY;function R(r){return r==r&&r>B&&r<W}function M(r){return r!=r}var Z=Math.ceil;function X(r){return r<0?Z(r):H(r)}var Y=1023,q=1023,z=-1023,D=-1074;function J(r){return r===W||r===B}var K=2147483648,Q=2147483647,rr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function er(){return rr&&"symbol"==typeof Symbol.toStringTag}var tr=Object.prototype.toString,nr=Object.prototype.hasOwnProperty;function ir(r,e){return null!=r&&nr.call(r,e)}var or,ar="function"==typeof Symbol?Symbol:void 0,ur="function"==typeof ar?ar.toStringTag:"",cr=er()?function(r){var e,t,n;if(null==r)return tr.call(r);t=r[ur],e=ir(r,ur);try{r[ur]=void 0}catch(e){return tr.call(r)}return n=tr.call(r),e?r[ur]=t:delete r[ur],n}:function(r){return tr.call(r)},fr="function"==typeof Uint32Array,lr="function"==typeof Uint32Array?Uint32Array:null,sr="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(fr&&t instanceof Uint32Array||"[object Uint32Array]"===cr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var pr,yr=or,gr="function"==typeof Float64Array,dr="function"==typeof Float64Array?Float64Array:null,hr="function"==typeof Float64Array?Float64Array:void 0;pr=function(){var r,e,t;if("function"!=typeof dr)return!1;try{e=new dr([1,3.14,-3.14,NaN]),t=e,r=(gr&&t instanceof Float64Array||"[object Float64Array]"===cr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var vr,wr=pr,br="function"==typeof Uint8Array,mr="function"==typeof Uint8Array?Uint8Array:null,Ar="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,256,257]),t=e,r=(br&&t instanceof Uint8Array||"[object Uint8Array]"===cr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var Er,_r=vr,jr="function"==typeof Uint16Array,Sr="function"==typeof Uint16Array?Uint16Array:null,Ur="function"==typeof Uint16Array?Uint16Array:void 0;Er=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(jr&&t instanceof Uint16Array||"[object Uint16Array]"===cr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Ir,Tr={uint16:Er,uint8:_r};(Ir=new Tr.uint16(1))[0]=4660;var xr,Fr,Nr=52===new Tr.uint8(Ir.buffer)[0];!0===Nr?(xr=1,Fr=0):(xr=0,Fr=1);var kr={HIGH:xr,LOW:Fr},Vr=new wr(1),Or=new yr(Vr.buffer),Gr=kr.HIGH,Lr=kr.LOW;function $r(r,e,t,n){return Vr[0]=r,e[n]=Or[Gr],e[n+t]=Or[Lr],e}function Cr(r){return $r(r,[0,0],1,0)}C(Cr,"assign",$r);var Hr,Pr,Wr=!0===Nr?1:0,Br=new wr(1),Rr=new yr(Br.buffer);function Mr(r){return Br[0]=r,Rr[Wr]}!0===Nr?(Hr=1,Pr=0):(Hr=0,Pr=1);var Zr={HIGH:Hr,LOW:Pr},Xr=new wr(1),Yr=new yr(Xr.buffer),qr=Zr.HIGH,zr=Zr.LOW;function Dr(r,e){return Yr[qr]=r,Yr[zr]=e,Xr[0]}var Jr=[0,0],Kr=22250738585072014e-324,Qr=4503599627370496;function re(r,e,t,n){return M(r)||J(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<Kr?(e[n]=r*Qr,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}C((function(r){return re(r,[0,0],1,0)}),"assign",re);var ee=2146435072,te=2220446049250313e-31,ne=2148532223,ie=[0,0],oe=[0,0];function ae(r,e){var t,n,i,o,a,u;return 0===e||0===r||M(r)||J(r)?r:(re(r,ie,1,0),r=ie[0],e+=ie[1],e+=function(r){var e=Mr(r);return(e=(e&ee)>>>20)-Y|0}(r),e<D?(i=0,o=r,Cr.assign(i,Jr,1,0),a=Jr[0],a&=Q,u=Mr(o),Dr(a|=u&=K,Jr[1])):e>q?r<0?B:W:(e<=z?(e+=52,n=te):n=1,Cr.assign(r,oe,1,0),t=oe[0],t&=ne,n*Dr(t|=e+Y<<20,oe[1])))}var ue=.6931471803691238,ce=1.9082149292705877e-10,fe=1.4426950408889634,le=709.782712893384,se=-745.1332191019411,pe=1/(1<<28),ye=-pe;function ge(r){var e;return M(r)||r===W?r:r===B?0:r>le?W:r<se?0:r>ye&&r<pe?1+r:function(r,e,t){var n,i,o,a;return ae(1-(e-(n=r-e)*(o=n-(i=n*n)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-(e=X(r<0?fe*r-.5:fe*r+.5))*ue,e*ce,e)}var de=.6931471805599453,he=/./;function ve(r){return"boolean"==typeof r}var we=Boolean,be=Boolean.prototype.toString,me=er();function Ae(r){return"object"==typeof r&&(r instanceof we||(me?function(r){try{return be.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===cr(r)))}function Ee(r){return ve(r)||Ae(r)}C(Ee,"isPrimitive",ve),C(Ee,"isObject",Ae);var _e="object"==typeof self?self:null,je="object"==typeof window?window:null,Se="object"==typeof globalThis?globalThis:null,Ue=function(r){if(arguments.length){if(!ve(r))throw new TypeError(x("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Se)return Se;if(_e)return _e;if(je)return je;throw new Error("unexpected error. Unable to resolve global object.")}(),Ie=Ue.document&&Ue.document.childNodes,Te=Int8Array;function xe(){return/^\s*function\s*([^(]*)/i}var Fe=/^\s*function\s*([^(]*)/i;C(xe,"REGEXP",Fe);var Ne=Array.isArray?Array.isArray:function(r){return"[object Array]"===cr(r)};function ke(r){return null!==r&&"object"==typeof r}function Ve(r){var e,t,n,i;if(("Object"===(t=cr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Fe.exec(n.toString()))return e[1]}return ke(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}C(ke,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(x("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Ne(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(ke));var Oe,Ge="function"==typeof he||"object"==typeof Te||"function"==typeof Ie?function(r){return Ve(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Ve(r).toLowerCase():e};function Le(r){return"function"===Ge(r)}function $e(r){return r}Oe=function(r,e){var t,n;if(!Le(r))throw new TypeError(x("invalid argument. First argument must be a function. Value: `%s`.",r));if(arguments.length<2)t=$e;else if(!Le(t=e))throw new TypeError(x("invalid argument. Hash function argument must be a function. Value: `%s`.",t));return C(i,"cache",n={}),i;function i(){var e,i,o,a;for(e=new Array(arguments.length),a=0;a<arguments.length;a++)e[a]=arguments[a];return o=t(e).toString(),ir(n,o)?n[o]:(i=r.apply(null,e),n[o]=i,i)}}((function(r,e){var t;return 0===e?0===r?1:0:(t=e*(e+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),Oe(r-e,e-1)+Oe(r,e-1)))}));var Ce=Oe;function He(r,e){var t,n,i;if(M(e)||!P(e)||!R(e))return NaN;if(M(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return e*(e+1)/2;for(t=ge(-e*de),i=0,n=-1;i<r;)i+=t*Ce(n+=1,e);return n}return C(He,"factory",(function(r){var e,t;return!M(r)&&P(r)&&R(r)?(e=ge(-r*de),function(t){var n,i;if(M(t)||t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return r*(r+1)/2;for(n=0,i=-1;n<t;)n+=e*Ce(i+=1,r);return i}):(t=NaN,function(){return t})})),He},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=e();
//# sourceMappingURL=browser.js.map