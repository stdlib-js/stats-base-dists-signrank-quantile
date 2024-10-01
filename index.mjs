// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-integer@v0.3.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-finite@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.4-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ln-two@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-memoize@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";var o;var a=o=m((function(t,s){var e;return 0===s?0===t?1:0:(e=s*(s+1)/2,t<0||t>e?0:(t>e/2&&(t=e-t),o(t-s,s-1)+o(t,s-1)))}));function f(t,m){var d,o,f;if(r(m)||!s(m)||!e(m))return NaN;if(r(t)||t<0||t>1)return NaN;if(0===t)return 0;if(1===t)return m*(m+1)/2;for(d=n(-m*i),f=0,o=-1;f<t;)f+=d*a(o+=1,m);return o}function l(t){var m;return!r(t)&&s(t)&&e(t)?(m=n(-t*i),function(s){var e,n;if(r(s)||s<0||s>1)return NaN;if(0===s)return 0;if(1===s)return t*(t+1)/2;e=0,n=-1;for(;e<s;)e+=m*a(n+=1,t);return n}):d(NaN)}t(f,"factory",l);export{f as default,l as factory};
//# sourceMappingURL=index.mjs.map
