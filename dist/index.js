"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=s(function(E,q){
var h=require('@stdlib/utils-memoize/dist'),v;function w(r,e){var t;return e===0?r===0?1:0:(t=e*(e+1)/2,r<0||r>t?0:(r>t/2&&(r=t-r),v(r-e,e-1)+v(r,e-1)))}v=h(w);q.exports=v
});var c=s(function(G,o){
var y=require('@stdlib/math-base-assert-is-positive-integer/dist'),d=require('@stdlib/math-base-assert-is-finite/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-special-exp/dist'),I=require('@stdlib/constants-float64-ln-two/dist'),L=n();function P(r,e){var t,i,u;if(f(e)||!y(e)||!d(e))return NaN;if(f(r)||r<0||r>1)return NaN;if(r===0)return 0;if(r===1)return e*(e+1)/2;for(t=z(-e*I),u=0,i=-1;u<r;)i+=1,u+=t*L(i,e);return i}o.exports=P
});var l=s(function(H,m){
var F=require('@stdlib/math-base-assert-is-positive-integer/dist'),O=require('@stdlib/utils-constant-function/dist'),R=require('@stdlib/math-base-assert-is-finite/dist'),N=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-exp/dist'),j=require('@stdlib/constants-float64-ln-two/dist'),k=n();function A(r){var e;if(N(r)||!F(r)||!R(r))return O(NaN);return e=b(-r*j),t;function t(i){var u,a;if(N(i)||i<0||i>1)return NaN;if(i===0)return 0;if(i===1)return r*(r+1)/2;for(u=0,a=-1;u<i;)a+=1,u+=e*k(a,r);return a}}m.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=c(),C=l();B(g,"factory",C);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
