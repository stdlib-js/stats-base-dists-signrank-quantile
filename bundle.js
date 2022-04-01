// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=n()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return n({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,n,t){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),v&&a&&a.call(r,n,t.set),r},y=e,v=l,p=t()?y:v;var b=function(r,n,t){p(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})},s=b,d=Math.floor,w=d;var m=function(r){return w(r)===r&&r>0},h=Number.POSITIVE_INFINITY,A=Number.NEGATIVE_INFINITY,_=h,g=A;var j=function(r){return r==r&&r>g&&r<_};var U=function(r){return r!=r},E=Math.ceil,O=d,N=E;var S=function(r){return r<0?N(r):O(r)},I=h,T=A;var P=function(r){return r===I||r===T};var F=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var G=function(){return F&&"symbol"==typeof Symbol.toStringTag},H=Object.prototype.toString,V=H;var B=function(r){return V.call(r)},L=Object.prototype.hasOwnProperty;var M=function(r,n){return null!=r&&L.call(r,n)},x="function"==typeof Symbol?Symbol.toStringTag:"",k=M,W=x,C=H;var R=B,X=function(r){var n,t,e;if(null==r)return C.call(r);t=r[W],n=k(r,W);try{r[W]=void 0}catch(n){return C.call(r)}return e=C.call(r),n?r[W]=t:delete r[W],e},Y=G()?X:R,q=Y,z="function"==typeof Uint32Array;var D="function"==typeof Uint32Array?Uint32Array:null,J=function(r){return z&&r instanceof Uint32Array||"[object Uint32Array]"===q(r)},K=D;var Q=function(){var r,n;if("function"!=typeof K)return!1;try{n=new K(n=[1,3.14,-3.14,4294967296,4294967297]),r=J(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Z="function"==typeof Uint32Array?Uint32Array:void 0,$=function(){throw new Error("not implemented")},rr=Q()?Z:$,nr=Y,tr="function"==typeof Float64Array;var er="function"==typeof Float64Array?Float64Array:null,or=function(r){return tr&&r instanceof Float64Array||"[object Float64Array]"===nr(r)},ur=er;var ir=function(){var r,n;if("function"!=typeof ur)return!1;try{n=new ur([1,3.14,-3.14,NaN]),r=or(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var ar="function"==typeof Float64Array?Float64Array:void 0,fr=function(){throw new Error("not implemented")},cr=ir()?ar:fr,lr=Y,yr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null,pr=function(r){return yr&&r instanceof Uint8Array||"[object Uint8Array]"===lr(r)},br=vr;var sr=function(){var r,n;if("function"!=typeof br)return!1;try{n=new br(n=[1,3.14,-3.14,256,257]),r=pr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var dr="function"==typeof Uint8Array?Uint8Array:void 0,wr=function(){throw new Error("not implemented")},mr=sr()?dr:wr,hr=Y,Ar="function"==typeof Uint16Array;var _r="function"==typeof Uint16Array?Uint16Array:null,gr=function(r){return Ar&&r instanceof Uint16Array||"[object Uint16Array]"===hr(r)},jr=_r;var Ur=function(){var r,n;if("function"!=typeof jr)return!1;try{n=new jr(n=[1,3.14,-3.14,65536,65537]),r=gr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Er,Or="function"==typeof Uint16Array?Uint16Array:void 0,Nr=function(){throw new Error("not implemented")},Sr={uint16:Ur()?Or:Nr,uint8:mr};(Er=new Sr.uint16(1))[0]=4660;var Ir,Tr,Pr=52===new Sr.uint8(Er.buffer)[0];!0===Pr?(Ir=1,Tr=0):(Ir=0,Tr=1);var Fr=rr,Gr={HIGH:Ir,LOW:Tr},Hr=new cr(1),Vr=new Fr(Hr.buffer),Br=Gr.HIGH,Lr=Gr.LOW;var Mr=function(r,n){return Hr[0]=n,r[0]=Vr[Br],r[1]=Vr[Lr],r};var xr=function(r,n){return 1===arguments.length?Mr([0,0],r):Mr(r,n)},kr=xr,Wr=rr,Cr=!0===Pr?1:0,Rr=new cr(1),Xr=new Wr(Rr.buffer);var Yr,qr,zr=function(r){return Rr[0]=r,Xr[Cr]};!0===Pr?(Yr=1,qr=0):(Yr=0,qr=1);var Dr=rr,Jr={HIGH:Yr,LOW:qr},Kr=new cr(1),Qr=new Dr(Kr.buffer),Zr=Jr.HIGH,$r=Jr.LOW;var rn=function(r,n){return Qr[Zr]=r,Qr[$r]=n,Kr[0]},nn=kr,tn=zr,en=rn,on=[0,0];var un=P,an=U,fn=function(r){return Math.abs(r)};var cn=function(r,n){return an(n)||un(n)?(r[0]=n,r[1]=0,r):0!==n&&fn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var ln=function(r,n){return 1===arguments.length?cn([0,0],r):cn(r,n)},yn=zr;var vn=function(r){var n=yn(r);return(n=(2146435072&n)>>>20)-1023|0},pn=h,bn=A,sn=U,dn=P,wn=function(r,n){var t,e;return nn(on,r),t=on[0],t&=2147483647,e=tn(n),en(t|=e&=2147483648,on[1])},mn=ln,hn=vn,An=kr,_n=rn,gn=[0,0],jn=[0,0];var Un=function(r,n){var t,e;return 0===n||0===r||sn(r)||dn(r)?r:(mn(gn,r),n+=gn[1],(n+=hn(r=gn[0]))<-1074?wn(0,r):n>1023?r<0?bn:pn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,An(jn,r),t=jn[0],t&=2148532223,e*_n(t|=n+1023<<20,jn[1])))};var En=Un,On=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Nn=U,Sn=S,In=A,Tn=h,Pn=function(r,n,t){var e,o,u;return u=(e=r-n)-(o=e*e)*On(o),En(1-(n-e*u/(2-u)-r),t)},Fn=1.4426950408889634,Gn=1/(1<<28);var Hn=function(r){var n;return Nn(r)||r===Tn?r:r===In?0:r>709.782712893384?Tn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Gn?1+r:(n=Sn(r<0?Fn*r-.5:Fn*r+.5),Pn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Vn=/./;var Bn=function(r){return"boolean"==typeof r},Ln=Boolean.prototype.toString;var Mn=Y,xn=function(r){try{return Ln.call(r),!0}catch(r){return!1}},kn=G();var Wn=function(r){return"object"==typeof r&&(r instanceof Boolean||(kn?xn(r):"[object Boolean]"===Mn(r)))},Cn=Bn,Rn=Wn;var Xn=s,Yn=function(r){return Cn(r)||Rn(r)},qn=Wn;Xn(Yn,"isPrimitive",Bn),Xn(Yn,"isObject",qn);var zn=Yn;var Dn=function(){return new Function("return this;")()},Jn="object"==typeof self?self:null,Kn="object"==typeof window?window:null,Qn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Zn="object"==typeof Qn?Qn:null;module.exports=Zn;var $n=zn.isPrimitive,rt=Dn,nt=Jn,tt=Kn,et=r(Object.freeze({__proto__:null}));var ot=function(r){if(arguments.length){if(!$n(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return rt()}if(nt)return nt;if(tt)return tt;if(et)return et;throw new Error("unexpected error. Unable to resolve global object.")},ut=ot(),it=ut.document&&ut.document.childNodes,at=Int8Array,ft=Vn,ct=it,lt=at;var yt=function(){return"function"==typeof ft||"object"==typeof lt||"function"==typeof ct};var vt=function(){return/^\s*function\s*([^(]*)/i},pt=vt;s(pt,"REGEXP",vt());var bt=pt,st=Y;var dt=Array.isArray?Array.isArray:function(r){return"[object Array]"===st(r)};var wt=function(r){return null!==r&&"object"==typeof r};s(wt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!dt(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(wt));var mt=wt;var ht=Y,At=bt.REGEXP,_t=function(r){return mt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var gt=function(r){var n,t,e;if(("Object"===(t=ht(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=At.exec(e.toString()))return n[1]}return _t(r)?"Buffer":t},jt=gt;var Ut=gt;var Et=function(r){var n;return null===r?"null":"object"===(n=typeof r)?jt(r).toLowerCase():n},Ot=function(r){return Ut(r).toLowerCase()},Nt=yt()?Ot:Et;var St=function(r){return"function"===Nt(r)},It=s,Tt=function(r){return r},Pt=M;var Ft,Gt=function(r,n){var t,e;if(!St(r))throw new TypeError("invalid argument. First argument must be a function. Value: `"+r+"`.");if(arguments.length<2)t=Tt;else if(!St(t=n))throw new TypeError("invalid argument. Hash function argument must be a function. Value: `"+t+"`.");return It(o,"cache",e={}),o;function o(){var n,o,u,i;for(n=new Array(arguments.length),i=0;i<arguments.length;i++)n[i]=arguments[i];return u=t(n).toString(),Pt(e,u)?e[u]:(o=r.apply(null,n),e[u]=o,o)}};Ft=Gt((function(r,n){var t;return 0===n?0===r?1:0:(t=n*(n+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),Ft(r-n,n-1)+Ft(r,n-1)))}));var Ht=m,Vt=j,Bt=U,Lt=Hn,Mt=Ft;var xt=m,kt=function(r){return function(){return r}},Wt=j,Ct=U,Rt=Hn,Xt=Ft;var Yt=function(r,n){var t,e,o;if(Bt(n)||!Ht(n)||!Vt(n))return NaN;if(Bt(r)||r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return n*(n+1)/2;for(t=Lt(.6931471805599453*-n),o=0,e=-1;o<r;)o+=t*Mt(e+=1,n);return e};return s(Yt,"factory",(function(r){var n;return!Ct(r)&&xt(r)&&Wt(r)?(n=Rt(.6931471805599453*-r),function(t){var e,o;if(Ct(t)||t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return r*(r+1)/2;e=0,o=-1;for(;e<t;)e+=n*Xt(o+=1,r);return o}):kt(NaN)})),Yt}));
//# sourceMappingURL=bundle.js.map
