// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function-array@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtype@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-dtype-resolve-enum@v0.2.2-esm/index.mjs";function m(m,l,p,w,j,v){var a,g,c;if(i(m))c=m;else if(!s(m))throw new TypeError(d("1dX5d",m));if(!n(l))throw new TypeError(d("1dX2y",l));if(!n(p)&&null!==p)throw new TypeError(d("1dX5e",p));if(!e(w))throw new TypeError(d("1dX5f",w));if(!r(j))throw new TypeError(d("1dX5X",j));if(!r(v))throw new TypeError(d("1dX5g",v));if(0===(a=j+v))throw new Error(d("1dX0h"));if(w!==a+1)throw new Error(d("1dXCy"));if(c){if(g=l.length/a,!t(g))throw new Error(d("1dX0j"))}else if(g=m.length,l.length!==g*a)throw new Error(d("1dX0j"));if(p&&p.length!==g)throw new Error(d("1dX0k"));return l=function(r){var e,t;for(e=[],t=0;t<r.length;t++)e.push(f(r[t]));return e}(l),function(){var r,e,t,s,n,u,y,X,E;if(s=arguments.length,s!==w){if(s<w)throw new Error(d("1dX0l"));if(s!==w+1)throw new Error(d("1dX0m"));r=arguments[s-=1]}if(n=arguments[s-1],!i(n))throw new TypeError(d("1dX2b",n));for(e=[],t=[],E=0;E<a;E++){if(!o(y=arguments[E]))throw E<j?new TypeError(d("1dX5h",y)):new TypeError(d("1dX5i",y));e.push(y),t.push(f(h(y)))}if((u=function(r,e,t,s,i,n,o,d,h){var f,m,l,p;for(f=n,l=0;l<r;l++){for(m=h,p=0;p<e&&t[f+p*i]===o[m];p++)m+=d;if(p===e)return l;f+=s}return-1}(g,a,l,a,1,0,t,1,0))<0)throw new TypeError(d("1dX0n"));X=c||m[u];p?X(e,p[u],n,r):X(e,n,r);if(1===v)return e[a-1];if(0===v)return;return e.slice(j)}}export{m as default};
//# sourceMappingURL=index.mjs.map