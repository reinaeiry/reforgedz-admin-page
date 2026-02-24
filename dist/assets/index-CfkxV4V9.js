function Cy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ry(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mg={exports:{}},gc={},Eg={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),Py=Symbol.for("react.portal"),Ly=Symbol.for("react.fragment"),Ny=Symbol.for("react.strict_mode"),Iy=Symbol.for("react.profiler"),Dy=Symbol.for("react.provider"),Uy=Symbol.for("react.context"),Fy=Symbol.for("react.forward_ref"),Oy=Symbol.for("react.suspense"),ky=Symbol.for("react.memo"),zy=Symbol.for("react.lazy"),Mh=Symbol.iterator;function By(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tg=Object.assign,Ag={};function mo(t,e,n){this.props=t,this.context=e,this.refs=Ag,this.updater=n||wg}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bg(){}bg.prototype=mo.prototype;function vd(t,e,n){this.props=t,this.context=e,this.refs=Ag,this.updater=n||wg}var yd=vd.prototype=new bg;yd.constructor=vd;Tg(yd,mo.prototype);yd.isPureReactComponent=!0;var Eh=Array.isArray,Cg=Object.prototype.hasOwnProperty,_d={current:null},Rg={key:!0,ref:!0,__self:!0,__source:!0};function Pg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cg.call(e,i)&&!Rg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_a,type:t,key:s,ref:o,props:r,_owner:_d.current}}function Hy(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function Gy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wh=/\/+/g;function Gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gy(""+t.key):e.toString(36)}function Ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case Py:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Gc(o,0):i,Eh(r)?(n="",t!=null&&(n=t.replace(wh,"$&/")+"/"),Ml(r,e,n,"",function(c){return c})):r!=null&&(xd(r)&&(r=Hy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Eh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Gc(s,a);o+=Ml(s,e,n,l,r)}else if(l=By(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Gc(s,a++),o+=Ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ba(t,e,n){if(t==null)return t;var i=[],r=0;return Ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Vy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nn={current:null},El={transition:null},Wy={ReactCurrentDispatcher:Nn,ReactCurrentBatchConfig:El,ReactCurrentOwner:_d};function Lg(){throw Error("act(...) is not supported in production builds of React.")}St.Children={map:ba,forEach:function(t,e,n){ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ba(t,function(){e++}),e},toArray:function(t){return ba(t,function(e){return e})||[]},only:function(t){if(!xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};St.Component=mo;St.Fragment=Ly;St.Profiler=Iy;St.PureComponent=vd;St.StrictMode=Ny;St.Suspense=Oy;St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wy;St.act=Lg;St.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=_d.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Cg.call(e,l)&&!Rg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:_a,type:t.type,key:r,ref:s,props:i,_owner:o}};St.createContext=function(t){return t={$$typeof:Uy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Dy,_context:t},t.Consumer=t};St.createElement=Pg;St.createFactory=function(t){var e=Pg.bind(null,t);return e.type=t,e};St.createRef=function(){return{current:null}};St.forwardRef=function(t){return{$$typeof:Fy,render:t}};St.isValidElement=xd;St.lazy=function(t){return{$$typeof:zy,_payload:{_status:-1,_result:t},_init:Vy}};St.memo=function(t,e){return{$$typeof:ky,type:t,compare:e===void 0?null:e}};St.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};St.unstable_act=Lg;St.useCallback=function(t,e){return Nn.current.useCallback(t,e)};St.useContext=function(t){return Nn.current.useContext(t)};St.useDebugValue=function(){};St.useDeferredValue=function(t){return Nn.current.useDeferredValue(t)};St.useEffect=function(t,e){return Nn.current.useEffect(t,e)};St.useId=function(){return Nn.current.useId()};St.useImperativeHandle=function(t,e,n){return Nn.current.useImperativeHandle(t,e,n)};St.useInsertionEffect=function(t,e){return Nn.current.useInsertionEffect(t,e)};St.useLayoutEffect=function(t,e){return Nn.current.useLayoutEffect(t,e)};St.useMemo=function(t,e){return Nn.current.useMemo(t,e)};St.useReducer=function(t,e,n){return Nn.current.useReducer(t,e,n)};St.useRef=function(t){return Nn.current.useRef(t)};St.useState=function(t){return Nn.current.useState(t)};St.useSyncExternalStore=function(t,e,n){return Nn.current.useSyncExternalStore(t,e,n)};St.useTransition=function(){return Nn.current.useTransition()};St.version="18.3.1";Eg.exports=St;var U=Eg.exports;const Ng=Ry(U),jy=Cy({__proto__:null,default:Ng},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy=U,$y=Symbol.for("react.element"),Yy=Symbol.for("react.fragment"),qy=Object.prototype.hasOwnProperty,Ky=Xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zy={key:!0,ref:!0,__self:!0,__source:!0};function Ig(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)qy.call(e,i)&&!Zy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$y,type:t,key:s,ref:o,props:r,_owner:Ky.current}}gc.Fragment=Yy;gc.jsx=Ig;gc.jsxs=Ig;Mg.exports=gc;var E=Mg.exports,of={},Dg={exports:{}},Yn={},Ug={exports:{}},Fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,Y){var Z=H.length;H.push(Y);e:for(;0<Z;){var ie=Z-1>>>1,he=H[ie];if(0<r(he,Y))H[ie]=Y,H[Z]=he,Z=ie;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var Y=H[0],Z=H.pop();if(Z!==Y){H[0]=Z;e:for(var ie=0,he=H.length,Ze=he>>>1;ie<Ze;){var J=2*(ie+1)-1,ae=H[J],Ae=J+1,Ue=H[Ae];if(0>r(ae,Z))Ae<he&&0>r(Ue,ae)?(H[ie]=Ue,H[Ae]=Z,ie=Ae):(H[ie]=ae,H[J]=Z,ie=J);else if(Ae<he&&0>r(Ue,Z))H[ie]=Ue,H[Ae]=Z,ie=Ae;else break e}}return Y}function r(H,Y){var Z=H.sortIndex-Y.sortIndex;return Z!==0?Z:H.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,g=!1,y=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(H){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=H)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(H){if(_=!1,v(H),!y)if(n(l)!==null)y=!0,Q(L);else{var Y=n(c);Y!==null&&re(M,Y.startTime-H)}}function L(H,Y){y=!1,_&&(_=!1,u(G),G=-1),g=!0;var Z=h;try{for(v(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||H&&!R());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var he=ie(d.expirationTime<=Y);Y=t.unstable_now(),typeof he=="function"?d.callback=he:d===n(l)&&i(l),v(Y)}else i(l);d=n(l)}if(d!==null)var Ze=!0;else{var J=n(c);J!==null&&re(M,J.startTime-Y),Ze=!1}return Ze}finally{d=null,h=Z,g=!1}}var C=!1,b=null,G=-1,ne=5,x=-1;function R(){return!(t.unstable_now()-x<ne)}function ee(){if(b!==null){var H=t.unstable_now();x=H;var Y=!0;try{Y=b(!0,H)}finally{Y?ue():(C=!1,b=null)}}else C=!1}var ue;if(typeof m=="function")ue=function(){m(ee)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,te=z.port2;z.port1.onmessage=ee,ue=function(){te.postMessage(null)}}else ue=function(){p(ee,0)};function Q(H){b=H,C||(C=!0,ue())}function re(H,Y){G=p(function(){H(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Q(L))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var Z=h;h=Y;try{return H()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,Y){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=h;h=H;try{return Y()}finally{h=Z}},t.unstable_scheduleCallback=function(H,Y,Z){var ie=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ie+Z:ie):Z=ie,H){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Z+he,H={id:f++,callback:Y,priorityLevel:H,startTime:Z,expirationTime:he,sortIndex:-1},Z>ie?(H.sortIndex=Z,e(c,H),n(l)===null&&H===n(c)&&(_?(u(G),G=-1):_=!0,re(M,Z-ie))):(H.sortIndex=he,e(l,H),y||g||(y=!0,Q(L))),H},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(H){var Y=h;return function(){var Z=h;h=Y;try{return H.apply(this,arguments)}finally{h=Z}}}})(Fg);Ug.exports=Fg;var Qy=Ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=U,$n=Qy;function Se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Og=new Set,Jo={};function ls(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(Jo[t]=e,t=0;t<e.length;t++)Og.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),af=Object.prototype.hasOwnProperty,e_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Th={},Ah={};function t_(t){return af.call(Ah,t)?!0:af.call(Th,t)?!1:e_.test(t)?Ah[t]=!0:(Th[t]=!0,!1)}function n_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i_(t,e,n,i){if(e===null||typeof e>"u"||n_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function In(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yn[t]=new In(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yn[e]=new In(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yn[t]=new In(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yn[t]=new In(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yn[t]=new In(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yn[t]=new In(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yn[t]=new In(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yn[t]=new In(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yn[t]=new In(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sd=/[\-:]([a-z])/g;function Md(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sd,Md);yn[e]=new In(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sd,Md);yn[e]=new In(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sd,Md);yn[e]=new In(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yn[t]=new In(t,1,!1,t.toLowerCase(),null,!1,!1)});yn.xlinkHref=new In("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yn[t]=new In(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ed(t,e,n,i){var r=yn.hasOwnProperty(e)?yn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i_(e,n,r,i)&&(n=null),i||r===null?t_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Yi=Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),Is=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),wd=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),kg=Symbol.for("react.provider"),zg=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),cf=Symbol.for("react.suspense"),uf=Symbol.for("react.suspense_list"),Ad=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Bg=Symbol.for("react.offscreen"),bh=Symbol.iterator;function Eo(t){return t===null||typeof t!="object"?null:(t=bh&&t[bh]||t["@@iterator"],typeof t=="function"?t:null)}var Xt=Object.assign,Vc;function zo(t){if(Vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Vc=e&&e[1]||""}return`
`+Vc+t}var Wc=!1;function jc(t,e){if(!t||Wc)return"";Wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zo(t):""}function r_(t){switch(t.tag){case 5:return zo(t.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return t=jc(t.type,!1),t;case 11:return t=jc(t.type.render,!1),t;case 1:return t=jc(t.type,!0),t;default:return""}}function ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ds:return"Fragment";case Is:return"Portal";case lf:return"Profiler";case wd:return"StrictMode";case cf:return"Suspense";case uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zg:return(t.displayName||"Context")+".Consumer";case kg:return(t._context.displayName||"Context")+".Provider";case Td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ad:return e=t.displayName||null,e!==null?e:ff(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return ff(t(e))}catch{}}return null}function s_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ff(e);case 8:return e===wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function o_(t){var e=Hg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=o_(t))}function Gg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Hg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function df(t,e){var n=e.checked;return Xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ch(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vg(t,e){e=e.checked,e!=null&&Ed(t,"checked",e,!1)}function hf(t,e){Vg(t,e);var n=br(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&pf(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Rh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pf(t,e,n){(e!=="number"||Fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bo=Array.isArray;function $s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function mf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Se(91));return Xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ph(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Se(92));if(Bo(n)){if(1<n.length)throw Error(Se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function Wg(t,e){var n=br(e.value),i=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Lh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pa,Xg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pa=Pa||document.createElement("div"),Pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},a_=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){a_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function $g(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function Yg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=$g(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var l_=Xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vf(t,e){if(e){if(l_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Se(62))}}function yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _f=null;function bd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xf=null,Ys=null,qs=null;function Nh(t){if(t=Ma(t)){if(typeof xf!="function")throw Error(Se(280));var e=t.stateNode;e&&(e=Sc(e),xf(t.stateNode,t.type,e))}}function qg(t){Ys?qs?qs.push(t):qs=[t]:Ys=t}function Kg(){if(Ys){var t=Ys,e=qs;if(qs=Ys=null,Nh(t),e)for(t=0;t<e.length;t++)Nh(e[t])}}function Zg(t,e){return t(e)}function Qg(){}var Xc=!1;function Jg(t,e,n){if(Xc)return t(e,n);Xc=!0;try{return Zg(t,e,n)}finally{Xc=!1,(Ys!==null||qs!==null)&&(Qg(),Kg())}}function ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Se(231,e,typeof n));return n}var Sf=!1;if(Vi)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Sf=!1}function c_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Wo=!1,Ol=null,kl=!1,Mf=null,u_={onError:function(t){Wo=!0,Ol=t}};function f_(t,e,n,i,r,s,o,a,l){Wo=!1,Ol=null,c_.apply(u_,arguments)}function d_(t,e,n,i,r,s,o,a,l){if(f_.apply(this,arguments),Wo){if(Wo){var c=Ol;Wo=!1,Ol=null}else throw Error(Se(198));kl||(kl=!0,Mf=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ev(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ih(t){if(cs(t)!==t)throw Error(Se(188))}function h_(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(Se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ih(r),t;if(s===i)return Ih(r),e;s=s.sibling}throw Error(Se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Se(189))}}if(n.alternate!==i)throw Error(Se(190))}if(n.tag!==3)throw Error(Se(188));return n.stateNode.current===n?t:e}function tv(t){return t=h_(t),t!==null?nv(t):null}function nv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=nv(t);if(e!==null)return e;t=t.sibling}return null}var iv=$n.unstable_scheduleCallback,Dh=$n.unstable_cancelCallback,p_=$n.unstable_shouldYield,m_=$n.unstable_requestPaint,Yt=$n.unstable_now,g_=$n.unstable_getCurrentPriorityLevel,Cd=$n.unstable_ImmediatePriority,rv=$n.unstable_UserBlockingPriority,zl=$n.unstable_NormalPriority,v_=$n.unstable_LowPriority,sv=$n.unstable_IdlePriority,vc=null,Ci=null;function y_(t){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(vc,t,void 0,(t.current.flags&128)===128)}catch{}}var _i=Math.clz32?Math.clz32:S_,__=Math.log,x_=Math.LN2;function S_(t){return t>>>=0,t===0?32:31-(__(t)/x_|0)|0}var La=64,Na=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ho(a):(s&=o,s!==0&&(i=Ho(s)))}else o=n&~r,o!==0?i=Ho(o):s!==0&&(i=Ho(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-_i(e),r=1<<n,i|=t[n],e&=~r;return i}function M_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_i(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=M_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ov(){var t=La;return La<<=1,!(La&4194240)&&(La=64),t}function $c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_i(e),t[e]=n}function w_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-_i(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Rd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-_i(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Nt=0;function av(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var lv,Pd,cv,uv,fv,wf=!1,Ia=[],pr=null,mr=null,gr=null,na=new Map,ia=new Map,lr=[],T_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uh(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(e.pointerId)}}function To(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ma(e),e!==null&&Pd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function A_(t,e,n,i,r){switch(e){case"focusin":return pr=To(pr,t,e,n,i,r),!0;case"dragenter":return mr=To(mr,t,e,n,i,r),!0;case"mouseover":return gr=To(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return na.set(s,To(na.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ia.set(s,To(ia.get(s)||null,t,e,n,i,r)),!0}return!1}function dv(t){var e=jr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=ev(n),e!==null){t.blockedOn=e,fv(t.priority,function(){cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_f=i,n.target.dispatchEvent(i),_f=null}else return e=Ma(n),e!==null&&Pd(e),t.blockedOn=n,!1;e.shift()}return!0}function Fh(t,e,n){wl(t)&&n.delete(e)}function b_(){wf=!1,pr!==null&&wl(pr)&&(pr=null),mr!==null&&wl(mr)&&(mr=null),gr!==null&&wl(gr)&&(gr=null),na.forEach(Fh),ia.forEach(Fh)}function Ao(t,e){t.blockedOn===e&&(t.blockedOn=null,wf||(wf=!0,$n.unstable_scheduleCallback($n.unstable_NormalPriority,b_)))}function ra(t){function e(r){return Ao(r,t)}if(0<Ia.length){Ao(Ia[0],t);for(var n=1;n<Ia.length;n++){var i=Ia[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&Ao(pr,t),mr!==null&&Ao(mr,t),gr!==null&&Ao(gr,t),na.forEach(e),ia.forEach(e),n=0;n<lr.length;n++)i=lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)dv(n),n.blockedOn===null&&lr.shift()}var Ks=Yi.ReactCurrentBatchConfig,Hl=!0;function C_(t,e,n,i){var r=Nt,s=Ks.transition;Ks.transition=null;try{Nt=1,Ld(t,e,n,i)}finally{Nt=r,Ks.transition=s}}function R_(t,e,n,i){var r=Nt,s=Ks.transition;Ks.transition=null;try{Nt=4,Ld(t,e,n,i)}finally{Nt=r,Ks.transition=s}}function Ld(t,e,n,i){if(Hl){var r=Tf(t,e,n,i);if(r===null)iu(t,e,i,Gl,n),Uh(t,i);else if(A_(r,t,e,n,i))i.stopPropagation();else if(Uh(t,i),e&4&&-1<T_.indexOf(t)){for(;r!==null;){var s=Ma(r);if(s!==null&&lv(s),s=Tf(t,e,n,i),s===null&&iu(t,e,i,Gl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else iu(t,e,i,null,n)}}var Gl=null;function Tf(t,e,n,i){if(Gl=null,t=bd(i),t=jr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ev(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function hv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g_()){case Cd:return 1;case rv:return 4;case zl:case v_:return 16;case sv:return 536870912;default:return 16}default:return 16}}var ur=null,Nd=null,Tl=null;function pv(){if(Tl)return Tl;var t,e=Nd,n=e.length,i,r="value"in ur?ur.value:ur.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Tl=r.slice(t,1<i?1-i:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function Oh(){return!1}function qn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:Oh,this.isPropagationStopped=Oh,this}return Xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=qn(go),Sa=Xt({},go,{view:0,detail:0}),P_=qn(Sa),Yc,qc,bo,yc=Xt({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bo&&(bo&&t.type==="mousemove"?(Yc=t.screenX-bo.screenX,qc=t.screenY-bo.screenY):qc=Yc=0,bo=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),kh=qn(yc),L_=Xt({},yc,{dataTransfer:0}),N_=qn(L_),I_=Xt({},Sa,{relatedTarget:0}),Kc=qn(I_),D_=Xt({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),U_=qn(D_),F_=Xt({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),O_=qn(F_),k_=Xt({},go,{data:0}),zh=qn(k_),z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=H_[t])?!!e[t]:!1}function Dd(){return G_}var V_=Xt({},Sa,{key:function(t){if(t.key){var e=z_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?B_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dd,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),W_=qn(V_),j_=Xt({},yc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bh=qn(j_),X_=Xt({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dd}),$_=qn(X_),Y_=Xt({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),q_=qn(Y_),K_=Xt({},yc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z_=qn(K_),Q_=[9,13,27,32],Ud=Vi&&"CompositionEvent"in window,jo=null;Vi&&"documentMode"in document&&(jo=document.documentMode);var J_=Vi&&"TextEvent"in window&&!jo,mv=Vi&&(!Ud||jo&&8<jo&&11>=jo),Hh=" ",Gh=!1;function gv(t,e){switch(t){case"keyup":return Q_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function ex(t,e){switch(t){case"compositionend":return vv(e);case"keypress":return e.which!==32?null:(Gh=!0,Hh);case"textInput":return t=e.data,t===Hh&&Gh?null:t;default:return null}}function tx(t,e){if(Us)return t==="compositionend"||!Ud&&gv(t,e)?(t=pv(),Tl=Nd=ur=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mv&&e.locale!=="ko"?null:e.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nx[t.type]:e==="textarea"}function yv(t,e,n,i){qg(i),e=Vl(e,"onChange"),0<e.length&&(n=new Id("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xo=null,sa=null;function ix(t){Rv(t,0)}function _c(t){var e=ks(t);if(Gg(e))return t}function rx(t,e){if(t==="change")return e}var _v=!1;if(Vi){var Zc;if(Vi){var Qc="oninput"in document;if(!Qc){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),Qc=typeof Wh.oninput=="function"}Zc=Qc}else Zc=!1;_v=Zc&&(!document.documentMode||9<document.documentMode)}function jh(){Xo&&(Xo.detachEvent("onpropertychange",xv),sa=Xo=null)}function xv(t){if(t.propertyName==="value"&&_c(sa)){var e=[];yv(e,sa,t,bd(t)),Jg(ix,e)}}function sx(t,e,n){t==="focusin"?(jh(),Xo=e,sa=n,Xo.attachEvent("onpropertychange",xv)):t==="focusout"&&jh()}function ox(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _c(sa)}function ax(t,e){if(t==="click")return _c(e)}function lx(t,e){if(t==="input"||t==="change")return _c(e)}function cx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Si=typeof Object.is=="function"?Object.is:cx;function oa(t,e){if(Si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!af.call(e,r)||!Si(t[r],e[r]))return!1}return!0}function Xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $h(t,e){var n=Xh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xh(n)}}function Sv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mv(){for(var t=window,e=Fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fl(t.document)}return e}function Fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ux(t){var e=Mv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sv(n.ownerDocument.documentElement,n)){if(i!==null&&Fd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$h(n,s);var o=$h(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fx=Vi&&"documentMode"in document&&11>=document.documentMode,Fs=null,Af=null,$o=null,bf=!1;function Yh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bf||Fs==null||Fs!==Fl(i)||(i=Fs,"selectionStart"in i&&Fd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$o&&oa($o,i)||($o=i,i=Vl(Af,"onSelect"),0<i.length&&(e=new Id("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fs)))}function Ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},Jc={},Ev={};Vi&&(Ev=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function xc(t){if(Jc[t])return Jc[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ev)return Jc[t]=e[n];return t}var wv=xc("animationend"),Tv=xc("animationiteration"),Av=xc("animationstart"),bv=xc("transitionend"),Cv=new Map,qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){Cv.set(t,e),ls(e,[t])}for(var eu=0;eu<qh.length;eu++){var tu=qh[eu],dx=tu.toLowerCase(),hx=tu[0].toUpperCase()+tu.slice(1);Lr(dx,"on"+hx)}Lr(wv,"onAnimationEnd");Lr(Tv,"onAnimationIteration");Lr(Av,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(bv,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function Kh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,d_(i,e,void 0,t),t.currentTarget=null}function Rv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Kh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Kh(r,a,c),s=l}}}if(kl)throw t=Mf,kl=!1,Mf=null,t}function kt(t,e){var n=e[Nf];n===void 0&&(n=e[Nf]=new Set);var i=t+"__bubble";n.has(i)||(Pv(e,t,2,!1),n.add(i))}function nu(t,e,n){var i=0;e&&(i|=4),Pv(n,t,i,e)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[Fa]){t[Fa]=!0,Og.forEach(function(n){n!=="selectionchange"&&(px.has(n)||nu(n,!1,t),nu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fa]||(e[Fa]=!0,nu("selectionchange",!1,e))}}function Pv(t,e,n,i){switch(hv(e)){case 1:var r=C_;break;case 4:r=R_;break;default:r=Ld}n=r.bind(null,e,n,t),r=void 0,!Sf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function iu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=jr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Jg(function(){var c=s,f=bd(n),d=[];e:{var h=Cv.get(t);if(h!==void 0){var g=Id,y=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":g=W_;break;case"focusin":y="focus",g=Kc;break;case"focusout":y="blur",g=Kc;break;case"beforeblur":case"afterblur":g=Kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=N_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=$_;break;case wv:case Tv:case Av:g=U_;break;case bv:g=q_;break;case"scroll":g=P_;break;case"wheel":g=Z_;break;case"copy":case"cut":case"paste":g=O_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Bh}var _=(e&4)!==0,p=!_&&t==="scroll",u=_?h!==null?h+"Capture":null:h;_=[];for(var m=c,v;m!==null;){v=m;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=ta(m,u),M!=null&&_.push(la(m,M,v)))),p)break;m=m.return}0<_.length&&(h=new g(h,y,null,n,f),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==_f&&(y=n.relatedTarget||n.fromElement)&&(jr(y)||y[Wi]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?jr(y):null,y!==null&&(p=cs(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(_=kh,M="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=Bh,M="onPointerLeave",u="onPointerEnter",m="pointer"),p=g==null?h:ks(g),v=y==null?h:ks(y),h=new _(M,m+"leave",g,n,f),h.target=p,h.relatedTarget=v,M=null,jr(f)===c&&(_=new _(u,m+"enter",y,n,f),_.target=v,_.relatedTarget=p,M=_),p=M,g&&y)t:{for(_=g,u=y,m=0,v=_;v;v=fs(v))m++;for(v=0,M=u;M;M=fs(M))v++;for(;0<m-v;)_=fs(_),m--;for(;0<v-m;)u=fs(u),v--;for(;m--;){if(_===u||u!==null&&_===u.alternate)break t;_=fs(_),u=fs(u)}_=null}else _=null;g!==null&&Zh(d,h,g,_,!1),y!==null&&p!==null&&Zh(d,p,y,_,!0)}}e:{if(h=c?ks(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var L=rx;else if(Vh(h))if(_v)L=lx;else{L=ox;var C=sx}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=ax);if(L&&(L=L(t,c))){yv(d,L,n,f);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&pf(h,"number",h.value)}switch(C=c?ks(c):window,t){case"focusin":(Vh(C)||C.contentEditable==="true")&&(Fs=C,Af=c,$o=null);break;case"focusout":$o=Af=Fs=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,Yh(d,n,f);break;case"selectionchange":if(fx)break;case"keydown":case"keyup":Yh(d,n,f)}var b;if(Ud)e:{switch(t){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Us?gv(t,n)&&(G="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(mv&&n.locale!=="ko"&&(Us||G!=="onCompositionStart"?G==="onCompositionEnd"&&Us&&(b=pv()):(ur=f,Nd="value"in ur?ur.value:ur.textContent,Us=!0)),C=Vl(c,G),0<C.length&&(G=new zh(G,t,null,n,f),d.push({event:G,listeners:C}),b?G.data=b:(b=vv(n),b!==null&&(G.data=b)))),(b=J_?ex(t,n):tx(t,n))&&(c=Vl(c,"onBeforeInput"),0<c.length&&(f=new zh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=b))}Rv(d,e)})}function la(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ta(t,n),s!=null&&i.unshift(la(t,s,r)),s=ta(t,e),s!=null&&i.push(la(t,s,r))),t=t.return}return i}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ta(n,s),l!=null&&o.unshift(la(n,l,a))):r||(l=ta(n,s),l!=null&&o.push(la(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mx=/\r\n?/g,gx=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(mx,`
`).replace(gx,"")}function Oa(t,e,n){if(e=Qh(e),Qh(t)!==e&&n)throw Error(Se(425))}function Wl(){}var Cf=null,Rf=null;function Pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lf=typeof setTimeout=="function"?setTimeout:void 0,vx=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(t){return Jh.resolve(null).then(t).catch(_x)}:Lf;function _x(t){setTimeout(function(){throw t})}function ru(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ra(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),Ai="__reactFiber$"+vo,ca="__reactProps$"+vo,Wi="__reactContainer$"+vo,Nf="__reactEvents$"+vo,xx="__reactListeners$"+vo,Sx="__reactHandles$"+vo;function jr(t){var e=t[Ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[Ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ep(t);t!==null;){if(n=t[Ai])return n;t=ep(t)}return e}t=n,n=t.parentNode}return null}function Ma(t){return t=t[Ai]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Se(33))}function Sc(t){return t[ca]||null}var If=[],zs=-1;function Nr(t){return{current:t}}function Bt(t){0>zs||(t.current=If[zs],If[zs]=null,zs--)}function Ft(t,e){zs++,If[zs]=t.current,t.current=e}var Cr={},Tn=Nr(Cr),kn=Nr(!1),ts=Cr;function no(t,e){var n=t.type.contextTypes;if(!n)return Cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function zn(t){return t=t.childContextTypes,t!=null}function jl(){Bt(kn),Bt(Tn)}function tp(t,e,n){if(Tn.current!==Cr)throw Error(Se(168));Ft(Tn,e),Ft(kn,n)}function Lv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Se(108,s_(t)||"Unknown",r));return Xt({},n,i)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,ts=Tn.current,Ft(Tn,t),Ft(kn,kn.current),!0}function np(t,e,n){var i=t.stateNode;if(!i)throw Error(Se(169));n?(t=Lv(t,e,ts),i.__reactInternalMemoizedMergedChildContext=t,Bt(kn),Bt(Tn),Ft(Tn,t)):Bt(kn),Ft(kn,n)}var Oi=null,Mc=!1,su=!1;function Nv(t){Oi===null?Oi=[t]:Oi.push(t)}function Mx(t){Mc=!0,Nv(t)}function Ir(){if(!su&&Oi!==null){su=!0;var t=0,e=Nt;try{var n=Oi;for(Nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Oi=null,Mc=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(t+1)),iv(Cd,Ir),r}finally{Nt=e,su=!1}}return null}var Bs=[],Hs=0,$l=null,Yl=0,Qn=[],Jn=0,ns=null,zi=1,Bi="";function zr(t,e){Bs[Hs++]=Yl,Bs[Hs++]=$l,$l=t,Yl=e}function Iv(t,e,n){Qn[Jn++]=zi,Qn[Jn++]=Bi,Qn[Jn++]=ns,ns=t;var i=zi;t=Bi;var r=32-_i(i)-1;i&=~(1<<r),n+=1;var s=32-_i(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zi=1<<32-_i(e)+r|n<<r|i,Bi=s+t}else zi=1<<s|n<<r|i,Bi=t}function Od(t){t.return!==null&&(zr(t,1),Iv(t,1,0))}function kd(t){for(;t===$l;)$l=Bs[--Hs],Bs[Hs]=null,Yl=Bs[--Hs],Bs[Hs]=null;for(;t===ns;)ns=Qn[--Jn],Qn[Jn]=null,Bi=Qn[--Jn],Qn[Jn]=null,zi=Qn[--Jn],Qn[Jn]=null}var Xn=null,jn=null,Ht=!1,mi=null;function Dv(t,e){var n=ii(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ip(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Xn=t,jn=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Xn=t,jn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ns!==null?{id:zi,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ii(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Xn=t,jn=null,!0):!1;default:return!1}}function Df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uf(t){if(Ht){var e=jn;if(e){var n=e;if(!ip(t,e)){if(Df(t))throw Error(Se(418));e=vr(n.nextSibling);var i=Xn;e&&ip(t,e)?Dv(i,n):(t.flags=t.flags&-4097|2,Ht=!1,Xn=t)}}else{if(Df(t))throw Error(Se(418));t.flags=t.flags&-4097|2,Ht=!1,Xn=t}}}function rp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xn=t}function ka(t){if(t!==Xn)return!1;if(!Ht)return rp(t),Ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pf(t.type,t.memoizedProps)),e&&(e=jn)){if(Df(t))throw Uv(),Error(Se(418));for(;e;)Dv(t,e),e=vr(e.nextSibling)}if(rp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jn=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jn=null}}else jn=Xn?vr(t.stateNode.nextSibling):null;return!0}function Uv(){for(var t=jn;t;)t=vr(t.nextSibling)}function io(){jn=Xn=null,Ht=!1}function zd(t){mi===null?mi=[t]:mi.push(t)}var Ex=Yi.ReactCurrentBatchConfig;function Co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Se(309));var i=n.stateNode}if(!i)throw Error(Se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Se(284));if(!n._owner)throw Error(Se(290,t))}return t}function za(t,e){throw t=Object.prototype.toString.call(e),Error(Se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sp(t){var e=t._init;return e(t._payload)}function Fv(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=Sr(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,M){return m===null||m.tag!==6?(m=du(v,u.mode,M),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,M){var L=v.type;return L===Ds?f(u,m,v.props.children,M,v.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===or&&sp(L)===m.type)?(M=r(m,v.props),M.ref=Co(u,m,v),M.return=u,M):(M=Il(v.type,v.key,v.props,null,u.mode,M),M.ref=Co(u,m,v),M.return=u,M)}function c(u,m,v,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=hu(v,u.mode,M),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function f(u,m,v,M,L){return m===null||m.tag!==7?(m=Kr(v,u.mode,M,L),m.return=u,m):(m=r(m,v),m.return=u,m)}function d(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=du(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ca:return v=Il(m.type,m.key,m.props,null,u.mode,v),v.ref=Co(u,null,m),v.return=u,v;case Is:return m=hu(m,u.mode,v),m.return=u,m;case or:var M=m._init;return d(u,M(m._payload),v)}if(Bo(m)||Eo(m))return m=Kr(m,u.mode,v,null),m.return=u,m;za(u,m)}return null}function h(u,m,v,M){var L=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return L!==null?null:a(u,m,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ca:return v.key===L?l(u,m,v,M):null;case Is:return v.key===L?c(u,m,v,M):null;case or:return L=v._init,h(u,m,L(v._payload),M)}if(Bo(v)||Eo(v))return L!==null?null:f(u,m,v,M,null);za(u,v)}return null}function g(u,m,v,M,L){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,a(m,u,""+M,L);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ca:return u=u.get(M.key===null?v:M.key)||null,l(m,u,M,L);case Is:return u=u.get(M.key===null?v:M.key)||null,c(m,u,M,L);case or:var C=M._init;return g(u,m,v,C(M._payload),L)}if(Bo(M)||Eo(M))return u=u.get(v)||null,f(m,u,M,L,null);za(m,M)}return null}function y(u,m,v,M){for(var L=null,C=null,b=m,G=m=0,ne=null;b!==null&&G<v.length;G++){b.index>G?(ne=b,b=null):ne=b.sibling;var x=h(u,b,v[G],M);if(x===null){b===null&&(b=ne);break}t&&b&&x.alternate===null&&e(u,b),m=s(x,m,G),C===null?L=x:C.sibling=x,C=x,b=ne}if(G===v.length)return n(u,b),Ht&&zr(u,G),L;if(b===null){for(;G<v.length;G++)b=d(u,v[G],M),b!==null&&(m=s(b,m,G),C===null?L=b:C.sibling=b,C=b);return Ht&&zr(u,G),L}for(b=i(u,b);G<v.length;G++)ne=g(b,u,G,v[G],M),ne!==null&&(t&&ne.alternate!==null&&b.delete(ne.key===null?G:ne.key),m=s(ne,m,G),C===null?L=ne:C.sibling=ne,C=ne);return t&&b.forEach(function(R){return e(u,R)}),Ht&&zr(u,G),L}function _(u,m,v,M){var L=Eo(v);if(typeof L!="function")throw Error(Se(150));if(v=L.call(v),v==null)throw Error(Se(151));for(var C=L=null,b=m,G=m=0,ne=null,x=v.next();b!==null&&!x.done;G++,x=v.next()){b.index>G?(ne=b,b=null):ne=b.sibling;var R=h(u,b,x.value,M);if(R===null){b===null&&(b=ne);break}t&&b&&R.alternate===null&&e(u,b),m=s(R,m,G),C===null?L=R:C.sibling=R,C=R,b=ne}if(x.done)return n(u,b),Ht&&zr(u,G),L;if(b===null){for(;!x.done;G++,x=v.next())x=d(u,x.value,M),x!==null&&(m=s(x,m,G),C===null?L=x:C.sibling=x,C=x);return Ht&&zr(u,G),L}for(b=i(u,b);!x.done;G++,x=v.next())x=g(b,u,G,x.value,M),x!==null&&(t&&x.alternate!==null&&b.delete(x.key===null?G:x.key),m=s(x,m,G),C===null?L=x:C.sibling=x,C=x);return t&&b.forEach(function(ee){return e(u,ee)}),Ht&&zr(u,G),L}function p(u,m,v,M){if(typeof v=="object"&&v!==null&&v.type===Ds&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ca:e:{for(var L=v.key,C=m;C!==null;){if(C.key===L){if(L=v.type,L===Ds){if(C.tag===7){n(u,C.sibling),m=r(C,v.props.children),m.return=u,u=m;break e}}else if(C.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===or&&sp(L)===C.type){n(u,C.sibling),m=r(C,v.props),m.ref=Co(u,C,v),m.return=u,u=m;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===Ds?(m=Kr(v.props.children,u.mode,M,v.key),m.return=u,u=m):(M=Il(v.type,v.key,v.props,null,u.mode,M),M.ref=Co(u,m,v),M.return=u,u=M)}return o(u);case Is:e:{for(C=v.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=hu(v,u.mode,M),m.return=u,u=m}return o(u);case or:return C=v._init,p(u,m,C(v._payload),M)}if(Bo(v))return y(u,m,v,M);if(Eo(v))return _(u,m,v,M);za(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=du(v,u.mode,M),m.return=u,u=m),o(u)):n(u,m)}return p}var ro=Fv(!0),Ov=Fv(!1),ql=Nr(null),Kl=null,Gs=null,Bd=null;function Hd(){Bd=Gs=Kl=null}function Gd(t){var e=ql.current;Bt(ql),t._currentValue=e}function Ff(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Zs(t,e){Kl=t,Bd=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(On=!0),t.firstContext=null)}function oi(t){var e=t._currentValue;if(Bd!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(Kl===null)throw Error(Se(308));Gs=t,Kl.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Xr=null;function Vd(t){Xr===null?Xr=[t]:Xr.push(t)}function kv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Vd(e)):(n.next=r.next,r.next=n),e.interleaved=n,ji(t,i)}function ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(t,n)}return r=i.interleaved,r===null?(e.next=e,Vd(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(t,n)}function bl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rd(t,n)}}function op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Zl(t,e,n,i){var r=t.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(h=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=Xt({},d,h);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,l=d):f=f.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);rs|=o,t.lanes=o,t.memoizedState=d}}function ap(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Se(191,r));r.call(i)}}}var Ea={},Ri=Nr(Ea),ua=Nr(Ea),fa=Nr(Ea);function $r(t){if(t===Ea)throw Error(Se(174));return t}function jd(t,e){switch(Ft(fa,e),Ft(ua,t),Ft(Ri,Ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gf(e,t)}Bt(Ri),Ft(Ri,e)}function so(){Bt(Ri),Bt(ua),Bt(fa)}function Bv(t){$r(fa.current);var e=$r(Ri.current),n=gf(e,t.type);e!==n&&(Ft(ua,t),Ft(Ri,n))}function Xd(t){ua.current===t&&(Bt(Ri),Bt(ua))}var Vt=Nr(0);function Ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ou=[];function $d(){for(var t=0;t<ou.length;t++)ou[t]._workInProgressVersionPrimary=null;ou.length=0}var Cl=Yi.ReactCurrentDispatcher,au=Yi.ReactCurrentBatchConfig,is=0,Wt=null,en=null,ln=null,Jl=!1,Yo=!1,da=0,wx=0;function xn(){throw Error(Se(321))}function Yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Si(t[n],e[n]))return!1;return!0}function qd(t,e,n,i,r,s){if(is=s,Wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?Cx:Rx,t=n(i,r),Yo){s=0;do{if(Yo=!1,da=0,25<=s)throw Error(Se(301));s+=1,ln=en=null,e.updateQueue=null,Cl.current=Px,t=n(i,r)}while(Yo)}if(Cl.current=ec,e=en!==null&&en.next!==null,is=0,ln=en=Wt=null,Jl=!1,e)throw Error(Se(300));return t}function Kd(){var t=da!==0;return da=0,t}function Ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Wt.memoizedState=ln=t:ln=ln.next=t,ln}function ai(){if(en===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var e=ln===null?Wt.memoizedState:ln.next;if(e!==null)ln=e,en=t;else{if(t===null)throw Error(Se(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},ln===null?Wt.memoizedState=ln=t:ln=ln.next=t}return ln}function ha(t,e){return typeof e=="function"?e(t):e}function lu(t){var e=ai(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=en,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((is&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Wt.lanes|=f,rs|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Si(i,e.memoizedState)||(On=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Wt.lanes|=s,rs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cu(t){var e=ai(),n=e.queue;if(n===null)throw Error(Se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Si(s,e.memoizedState)||(On=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Hv(){}function Gv(t,e){var n=Wt,i=ai(),r=e(),s=!Si(i.memoizedState,r);if(s&&(i.memoizedState=r,On=!0),i=i.queue,Zd(jv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||ln!==null&&ln.memoizedState.tag&1){if(n.flags|=2048,pa(9,Wv.bind(null,n,i,r,e),void 0,null),un===null)throw Error(Se(349));is&30||Vv(n,e,r)}return r}function Vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Wt.updateQueue,e===null?(e={lastEffect:null,stores:null},Wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wv(t,e,n,i){e.value=n,e.getSnapshot=i,Xv(e)&&$v(t)}function jv(t,e,n){return n(function(){Xv(e)&&$v(t)})}function Xv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Si(t,n)}catch{return!0}}function $v(t){var e=ji(t,1);e!==null&&xi(e,t,1,-1)}function lp(t){var e=Ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=bx.bind(null,Wt,t),[e.memoizedState,t]}function pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Wt.updateQueue,e===null?(e={lastEffect:null,stores:null},Wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Yv(){return ai().memoizedState}function Rl(t,e,n,i){var r=Ei();Wt.flags|=t,r.memoizedState=pa(1|e,n,void 0,i===void 0?null:i)}function Ec(t,e,n,i){var r=ai();i=i===void 0?null:i;var s=void 0;if(en!==null){var o=en.memoizedState;if(s=o.destroy,i!==null&&Yd(i,o.deps)){r.memoizedState=pa(e,n,s,i);return}}Wt.flags|=t,r.memoizedState=pa(1|e,n,s,i)}function cp(t,e){return Rl(8390656,8,t,e)}function Zd(t,e){return Ec(2048,8,t,e)}function qv(t,e){return Ec(4,2,t,e)}function Kv(t,e){return Ec(4,4,t,e)}function Zv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qv(t,e,n){return n=n!=null?n.concat([t]):null,Ec(4,4,Zv.bind(null,e,t),n)}function Qd(){}function Jv(t,e){var n=ai();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function e0(t,e){var n=ai();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function t0(t,e,n){return is&21?(Si(n,e)||(n=ov(),Wt.lanes|=n,rs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,On=!0),t.memoizedState=n)}function Tx(t,e){var n=Nt;Nt=n!==0&&4>n?n:4,t(!0);var i=au.transition;au.transition={};try{t(!1),e()}finally{Nt=n,au.transition=i}}function n0(){return ai().memoizedState}function Ax(t,e,n){var i=xr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},i0(t))r0(e,n);else if(n=kv(t,e,n,i),n!==null){var r=Pn();xi(n,t,i,r),s0(n,e,i)}}function bx(t,e,n){var i=xr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(i0(t))r0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Si(a,o)){var l=e.interleaved;l===null?(r.next=r,Vd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=kv(t,e,r,i),n!==null&&(r=Pn(),xi(n,t,i,r),s0(n,e,i))}}function i0(t){var e=t.alternate;return t===Wt||e!==null&&e===Wt}function r0(t,e){Yo=Jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function s0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rd(t,n)}}var ec={readContext:oi,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},Cx={readContext:oi,useCallback:function(t,e){return Ei().memoizedState=[t,e===void 0?null:e],t},useContext:oi,useEffect:cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,Zv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=Ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ax.bind(null,Wt,t),[i.memoizedState,t]},useRef:function(t){var e=Ei();return t={current:t},e.memoizedState=t},useState:lp,useDebugValue:Qd,useDeferredValue:function(t){return Ei().memoizedState=t},useTransition:function(){var t=lp(!1),e=t[0];return t=Tx.bind(null,t[1]),Ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Wt,r=Ei();if(Ht){if(n===void 0)throw Error(Se(407));n=n()}else{if(n=e(),un===null)throw Error(Se(349));is&30||Vv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,cp(jv.bind(null,i,s,t),[t]),i.flags|=2048,pa(9,Wv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ei(),e=un.identifierPrefix;if(Ht){var n=Bi,i=zi;n=(i&~(1<<32-_i(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Rx={readContext:oi,useCallback:Jv,useContext:oi,useEffect:Zd,useImperativeHandle:Qv,useInsertionEffect:qv,useLayoutEffect:Kv,useMemo:e0,useReducer:lu,useRef:Yv,useState:function(){return lu(ha)},useDebugValue:Qd,useDeferredValue:function(t){var e=ai();return t0(e,en.memoizedState,t)},useTransition:function(){var t=lu(ha)[0],e=ai().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:Gv,useId:n0,unstable_isNewReconciler:!1},Px={readContext:oi,useCallback:Jv,useContext:oi,useEffect:Zd,useImperativeHandle:Qv,useInsertionEffect:qv,useLayoutEffect:Kv,useMemo:e0,useReducer:cu,useRef:Yv,useState:function(){return cu(ha)},useDebugValue:Qd,useDeferredValue:function(t){var e=ai();return en===null?e.memoizedState=t:t0(e,en.memoizedState,t)},useTransition:function(){var t=cu(ha)[0],e=ai().memoizedState;return[t,e]},useMutableSource:Hv,useSyncExternalStore:Gv,useId:n0,unstable_isNewReconciler:!1};function hi(t,e){if(t&&t.defaultProps){e=Xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Of(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wc={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Pn(),r=xr(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(xi(e,t,r,i),bl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Pn(),r=xr(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(xi(e,t,r,i),bl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pn(),i=xr(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=yr(t,r,i),e!==null&&(xi(e,t,i,n),bl(e,t,i))}};function up(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!oa(n,i)||!oa(r,s):!0}function o0(t,e,n){var i=!1,r=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=oi(s):(r=zn(e)?ts:Tn.current,i=e.contextTypes,s=(i=i!=null)?no(t,r):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function fp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wc.enqueueReplaceState(e,e.state,null)}function kf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Wd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=oi(s):(s=zn(e)?ts:Tn.current,r.context=no(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wc.enqueueReplaceState(r,r.state,null),Zl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",i=e;do n+=r_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function uu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Lx=typeof WeakMap=="function"?WeakMap:Map;function a0(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nc||(nc=!0,qf=i),zf(t,e)},n}function l0(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){zf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zf(t,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Lx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=jx.bind(null,t,e,n),e.then(t,t))}function hp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var Nx=Yi.ReactCurrentOwner,On=!1;function Cn(t,e,n,i){e.child=t===null?Ov(e,null,n,i):ro(e,t.child,n,i)}function mp(t,e,n,i,r){n=n.render;var s=e.ref;return Zs(e,r),i=qd(t,e,n,i,s,r),n=Kd(),t!==null&&!On?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(Ht&&n&&Od(e),e.flags|=1,Cn(t,e,i,r),e.child)}function gp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,c0(t,e,s,i,r)):(t=Il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:oa,n(o,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function c0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(oa(s,i)&&t.ref===e.ref)if(On=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(On=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return Bf(t,e,n,i,r)}function u0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Ws,Wn),Wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ft(Ws,Wn),Wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ft(Ws,Wn),Wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ft(Ws,Wn),Wn|=i;return Cn(t,e,r,n),e.child}function f0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bf(t,e,n,i,r){var s=zn(n)?ts:Tn.current;return s=no(e,s),Zs(e,r),n=qd(t,e,n,i,s,r),i=Kd(),t!==null&&!On?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(Ht&&i&&Od(e),e.flags|=1,Cn(t,e,n,r),e.child)}function vp(t,e,n,i,r){if(zn(n)){var s=!0;Xl(e)}else s=!1;if(Zs(e,r),e.stateNode===null)Pl(t,e),o0(e,n,i),kf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=oi(c):(c=zn(n)?ts:Tn.current,c=no(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&fp(e,o,i,c),ar=!1;var h=e.memoizedState;o.state=h,Zl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||kn.current||ar?(typeof f=="function"&&(Of(e,n,f,i),l=e.memoizedState),(a=ar||up(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,zv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:hi(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=oi(l):(l=zn(n)?ts:Tn.current,l=no(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&fp(e,o,i,l),ar=!1,h=e.memoizedState,o.state=h,Zl(e,i,o,r);var y=e.memoizedState;a!==d||h!==y||kn.current||ar?(typeof g=="function"&&(Of(e,n,g,i),y=e.memoizedState),(c=ar||up(e,n,c,i,h,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Hf(t,e,n,i,s,r)}function Hf(t,e,n,i,r,s){f0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&np(e,n,!1),Xi(t,e,s);i=e.stateNode,Nx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,a,s)):Cn(t,e,a,s),e.memoizedState=i.state,r&&np(e,n,!0),e.child}function d0(t){var e=t.stateNode;e.pendingContext?tp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tp(t,e.context,!1),jd(t,e.containerInfo)}function yp(t,e,n,i,r){return io(),zd(r),e.flags|=256,Cn(t,e,n,i),e.child}var Gf={dehydrated:null,treeContext:null,retryLane:0};function Vf(t){return{baseLanes:t,cachePool:null,transitions:null}}function h0(t,e,n){var i=e.pendingProps,r=Vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ft(Vt,r&1),t===null)return Uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bc(o,i,0,null),t=Kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vf(n),e.memoizedState=Gf,t):Jd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ix(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Vf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gf,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Jd(t,e){return e=bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ba(t,e,n,i){return i!==null&&zd(i),ro(e,t.child,null,n),t=Jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ix(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=uu(Error(Se(422))),Ba(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=bc({mode:"visible",children:i.children},r,0,null),s=Kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=Vf(o),e.memoizedState=Gf,s);if(!(e.mode&1))return Ba(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Se(419)),i=uu(s,i,void 0),Ba(t,e,o,i)}if(a=(o&t.childLanes)!==0,On||a){if(i=un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(t,r),xi(i,t,r,-1))}return sh(),i=uu(Error(Se(421))),Ba(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Xx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,jn=vr(r.nextSibling),Xn=e,Ht=!0,mi=null,t!==null&&(Qn[Jn++]=zi,Qn[Jn++]=Bi,Qn[Jn++]=ns,zi=t.id,Bi=t.overflow,ns=e),e=Jd(e,i.children),e.flags|=4096,e)}function _p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ff(t.return,e,n)}function fu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function p0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Cn(t,e,i.children,n),i=Vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,n,e);else if(t.tag===19)_p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ft(Vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ql(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),fu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ql(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}fu(e,!0,n,null,s);break;case"together":fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),rs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Se(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dx(t,e,n){switch(e.tag){case 3:d0(e),io();break;case 5:Bv(e);break;case 1:zn(e.type)&&Xl(e);break;case 4:jd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ft(ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ft(Vt,Vt.current&1),e.flags|=128,null):n&e.child.childLanes?h0(t,e,n):(Ft(Vt,Vt.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);Ft(Vt,Vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return p0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ft(Vt,Vt.current),i)break;return null;case 22:case 23:return e.lanes=0,u0(t,e,n)}return Xi(t,e,n)}var m0,Wf,g0,v0;m0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wf=function(){};g0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,$r(Ri.current);var s=null;switch(n){case"input":r=df(t,r),i=df(t,i),s=[];break;case"select":r=Xt({},r,{value:void 0}),i=Xt({},i,{value:void 0}),s=[];break;case"textarea":r=mf(t,r),i=mf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wl)}vf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&kt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};v0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ro(t,e){if(!Ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ux(t,e,n){var i=e.pendingProps;switch(kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(e),null;case 1:return zn(e.type)&&jl(),Sn(e),null;case 3:return i=e.stateNode,so(),Bt(kn),Bt(Tn),$d(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mi!==null&&(Qf(mi),mi=null))),Wf(t,e),Sn(e),null;case 5:Xd(e);var r=$r(fa.current);if(n=e.type,t!==null&&e.stateNode!=null)g0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Se(166));return Sn(e),null}if(t=$r(Ri.current),ka(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[ca]=s,t=(e.mode&1)!==0,n){case"dialog":kt("cancel",i),kt("close",i);break;case"iframe":case"object":case"embed":kt("load",i);break;case"video":case"audio":for(r=0;r<Go.length;r++)kt(Go[r],i);break;case"source":kt("error",i);break;case"img":case"image":case"link":kt("error",i),kt("load",i);break;case"details":kt("toggle",i);break;case"input":Ch(i,s),kt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},kt("invalid",i);break;case"textarea":Ph(i,s),kt("invalid",i)}vf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Oa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Oa(i.textContent,a,t),r=["children",""+a]):Jo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&kt("scroll",i)}switch(n){case"input":Ra(i),Rh(i,s,!0);break;case"textarea":Ra(i),Lh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ai]=e,t[ca]=i,m0(t,e,!1,!1),e.stateNode=t;e:{switch(o=yf(n,i),n){case"dialog":kt("cancel",t),kt("close",t),r=i;break;case"iframe":case"object":case"embed":kt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Go.length;r++)kt(Go[r],t);r=i;break;case"source":kt("error",t),r=i;break;case"img":case"image":case"link":kt("error",t),kt("load",t),r=i;break;case"details":kt("toggle",t),r=i;break;case"input":Ch(t,i),r=df(t,i),kt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Xt({},i,{value:void 0}),kt("invalid",t);break;case"textarea":Ph(t,i),r=mf(t,i),kt("invalid",t);break;default:r=i}vf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ea(t,l):typeof l=="number"&&ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Jo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&kt("scroll",t):l!=null&&Ed(t,s,l,o))}switch(n){case"input":Ra(t),Rh(t,i,!1);break;case"textarea":Ra(t),Lh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+br(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?$s(t,!!i.multiple,s,!1):i.defaultValue!=null&&$s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Sn(e),null;case 6:if(t&&e.stateNode!=null)v0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Se(166));if(n=$r(fa.current),$r(Ri.current),ka(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==n)&&(t=Xn,t!==null))switch(t.tag){case 3:Oa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return Sn(e),null;case 13:if(Bt(Vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&jn!==null&&e.mode&1&&!(e.flags&128))Uv(),io(),e.flags|=98560,s=!1;else if(s=ka(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Se(317));s[Ai]=e}else io(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Sn(e),s=!1}else mi!==null&&(Qf(mi),mi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Vt.current&1?tn===0&&(tn=3):sh())),e.updateQueue!==null&&(e.flags|=4),Sn(e),null);case 4:return so(),Wf(t,e),t===null&&aa(e.stateNode.containerInfo),Sn(e),null;case 10:return Gd(e.type._context),Sn(e),null;case 17:return zn(e.type)&&jl(),Sn(e),null;case 19:if(Bt(Vt),s=e.memoizedState,s===null)return Sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ro(s,!1);else{if(tn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ql(t),o!==null){for(e.flags|=128,Ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ft(Vt,Vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Yt()>ao&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ql(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ht)return Sn(e),null}else 2*Yt()-s.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Yt(),e.sibling=null,n=Vt.current,Ft(Vt,i?n&1|2:n&1),e):(Sn(e),null);case 22:case 23:return rh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Wn&1073741824&&(Sn(e),e.subtreeFlags&6&&(e.flags|=8192)):Sn(e),null;case 24:return null;case 25:return null}throw Error(Se(156,e.tag))}function Fx(t,e){switch(kd(e),e.tag){case 1:return zn(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),Bt(kn),Bt(Tn),$d(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xd(e),null;case 13:if(Bt(Vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Se(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Bt(Vt),null;case 4:return so(),null;case 10:return Gd(e.type._context),null;case 22:case 23:return rh(),null;case 24:return null;default:return null}}var Ha=!1,wn=!1,Ox=typeof WeakSet=="function"?WeakSet:Set,De=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){$t(t,e,i)}else n.current=null}function jf(t,e,n){try{n()}catch(i){$t(t,e,i)}}var xp=!1;function kx(t,e){if(Cf=Hl,t=Mv(),Fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rf={focusedElem:t,selectionRange:n},Hl=!1,De=e;De!==null;)if(e=De,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,De=t;else for(;De!==null;){e=De;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,p=y.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:hi(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Se(163))}}catch(M){$t(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}return y=xp,xp=!1,y}function qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&jf(e,n,s)}r=r.next}while(r!==i)}}function Tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function y0(t){var e=t.alternate;e!==null&&(t.alternate=null,y0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ai],delete e[ca],delete e[Nf],delete e[xx],delete e[Sx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _0(t){return t.tag===5||t.tag===3||t.tag===4}function Sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wl));else if(i!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}function Yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}var dn=null,pi=!1;function Qi(t,e,n){for(n=n.child;n!==null;)x0(t,e,n),n=n.sibling}function x0(t,e,n){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(vc,n)}catch{}switch(n.tag){case 5:wn||Vs(n,e);case 6:var i=dn,r=pi;dn=null,Qi(t,e,n),dn=i,pi=r,dn!==null&&(pi?(t=dn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dn.removeChild(n.stateNode));break;case 18:dn!==null&&(pi?(t=dn,n=n.stateNode,t.nodeType===8?ru(t.parentNode,n):t.nodeType===1&&ru(t,n),ra(t)):ru(dn,n.stateNode));break;case 4:i=dn,r=pi,dn=n.stateNode.containerInfo,pi=!0,Qi(t,e,n),dn=i,pi=r;break;case 0:case 11:case 14:case 15:if(!wn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jf(n,e,o),r=r.next}while(r!==i)}Qi(t,e,n);break;case 1:if(!wn&&(Vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){$t(n,e,a)}Qi(t,e,n);break;case 21:Qi(t,e,n);break;case 22:n.mode&1?(wn=(i=wn)||n.memoizedState!==null,Qi(t,e,n),wn=i):Qi(t,e,n);break;default:Qi(t,e,n)}}function Mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ox),e.forEach(function(i){var r=$x.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ci(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dn=a.stateNode,pi=!1;break e;case 3:dn=a.stateNode.containerInfo,pi=!0;break e;case 4:dn=a.stateNode.containerInfo,pi=!0;break e}a=a.return}if(dn===null)throw Error(Se(160));x0(s,o,r),dn=null,pi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){$t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S0(e,t),e=e.sibling}function S0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(e,t),Mi(t),i&4){try{qo(3,t,t.return),Tc(3,t)}catch(_){$t(t,t.return,_)}try{qo(5,t,t.return)}catch(_){$t(t,t.return,_)}}break;case 1:ci(e,t),Mi(t),i&512&&n!==null&&Vs(n,n.return);break;case 5:if(ci(e,t),Mi(t),i&512&&n!==null&&Vs(n,n.return),t.flags&32){var r=t.stateNode;try{ea(r,"")}catch(_){$t(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Vg(r,s),yf(a,o);var c=yf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Yg(r,d):f==="dangerouslySetInnerHTML"?Xg(r,d):f==="children"?ea(r,d):Ed(r,f,d,c)}switch(a){case"input":hf(r,s);break;case"textarea":Wg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?$s(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?$s(r,!!s.multiple,s.defaultValue,!0):$s(r,!!s.multiple,s.multiple?[]:"",!1))}r[ca]=s}catch(_){$t(t,t.return,_)}}break;case 6:if(ci(e,t),Mi(t),i&4){if(t.stateNode===null)throw Error(Se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){$t(t,t.return,_)}}break;case 3:if(ci(e,t),Mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ra(e.containerInfo)}catch(_){$t(t,t.return,_)}break;case 4:ci(e,t),Mi(t);break;case 13:ci(e,t),Mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(nh=Yt())),i&4&&Mp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(wn=(c=wn)||f,ci(e,t),wn=c):ci(e,t),Mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(De=t,f=t.child;f!==null;){for(d=De=f;De!==null;){switch(h=De,g=h.child,h.tag){case 0:case 11:case 14:case 15:qo(4,h,h.return);break;case 1:Vs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){$t(i,n,_)}}break;case 5:Vs(h,h.return);break;case 22:if(h.memoizedState!==null){wp(d);continue}}g!==null?(g.return=h,De=g):wp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$g("display",o))}catch(_){$t(t,t.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){$t(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ci(e,t),Mi(t),i&4&&Mp(t);break;case 21:break;default:ci(e,t),Mi(t)}}function Mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_0(n)){var i=n;break e}n=n.return}throw Error(Se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ea(r,""),i.flags&=-33);var s=Sp(t);Yf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Sp(t);$f(t,a,o);break;default:throw Error(Se(161))}}catch(l){$t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zx(t,e,n){De=t,M0(t)}function M0(t,e,n){for(var i=(t.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ha;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||wn;a=Ha;var c=wn;if(Ha=o,(wn=l)&&!c)for(De=r;De!==null;)o=De,l=o.child,o.tag===22&&o.memoizedState!==null?Tp(r):l!==null?(l.return=o,De=l):Tp(r);for(;s!==null;)De=s,M0(s),s=s.sibling;De=r,Ha=a,wn=c}Ep(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):Ep(t)}}function Ep(t){for(;De!==null;){var e=De;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wn||Tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!wn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:hi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ap(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ap(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ra(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Se(163))}wn||e.flags&512&&Xf(e)}catch(h){$t(e,e.return,h)}}if(e===t){De=null;break}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}}function wp(t){for(;De!==null;){var e=De;if(e===t){De=null;break}var n=e.sibling;if(n!==null){n.return=e.return,De=n;break}De=e.return}}function Tp(t){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tc(4,e)}catch(l){$t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){$t(e,r,l)}}var s=e.return;try{Xf(e)}catch(l){$t(e,s,l)}break;case 5:var o=e.return;try{Xf(e)}catch(l){$t(e,o,l)}}}catch(l){$t(e,e.return,l)}if(e===t){De=null;break}var a=e.sibling;if(a!==null){a.return=e.return,De=a;break}De=e.return}}var Bx=Math.ceil,tc=Yi.ReactCurrentDispatcher,eh=Yi.ReactCurrentOwner,si=Yi.ReactCurrentBatchConfig,Ct=0,un=null,Qt=null,gn=0,Wn=0,Ws=Nr(0),tn=0,ma=null,rs=0,Ac=0,th=0,Ko=null,Un=null,nh=0,ao=1/0,Fi=null,nc=!1,qf=null,_r=null,Ga=!1,fr=null,ic=0,Zo=0,Kf=null,Ll=-1,Nl=0;function Pn(){return Ct&6?Yt():Ll!==-1?Ll:Ll=Yt()}function xr(t){return t.mode&1?Ct&2&&gn!==0?gn&-gn:Ex.transition!==null?(Nl===0&&(Nl=ov()),Nl):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:hv(t.type)),t):1}function xi(t,e,n,i){if(50<Zo)throw Zo=0,Kf=null,Error(Se(185));xa(t,n,i),(!(Ct&2)||t!==un)&&(t===un&&(!(Ct&2)&&(Ac|=n),tn===4&&cr(t,gn)),Bn(t,i),n===1&&Ct===0&&!(e.mode&1)&&(ao=Yt()+500,Mc&&Ir()))}function Bn(t,e){var n=t.callbackNode;E_(t,e);var i=Bl(t,t===un?gn:0);if(i===0)n!==null&&Dh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Dh(n),e===1)t.tag===0?Mx(Ap.bind(null,t)):Nv(Ap.bind(null,t)),yx(function(){!(Ct&6)&&Ir()}),n=null;else{switch(av(i)){case 1:n=Cd;break;case 4:n=rv;break;case 16:n=zl;break;case 536870912:n=sv;break;default:n=zl}n=P0(n,E0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function E0(t,e){if(Ll=-1,Nl=0,Ct&6)throw Error(Se(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var i=Bl(t,t===un?gn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rc(t,i);else{e=i;var r=Ct;Ct|=2;var s=T0();(un!==t||gn!==e)&&(Fi=null,ao=Yt()+500,qr(t,e));do try{Vx();break}catch(a){w0(t,a)}while(!0);Hd(),tc.current=s,Ct=r,Qt!==null?e=0:(un=null,gn=0,e=tn)}if(e!==0){if(e===2&&(r=Ef(t),r!==0&&(i=r,e=Zf(t,r))),e===1)throw n=ma,qr(t,0),cr(t,i),Bn(t,Yt()),n;if(e===6)cr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Hx(r)&&(e=rc(t,i),e===2&&(s=Ef(t),s!==0&&(i=s,e=Zf(t,s))),e===1))throw n=ma,qr(t,0),cr(t,i),Bn(t,Yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Se(345));case 2:Br(t,Un,Fi);break;case 3:if(cr(t,i),(i&130023424)===i&&(e=nh+500-Yt(),10<e)){if(Bl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Lf(Br.bind(null,t,Un,Fi),e);break}Br(t,Un,Fi);break;case 4:if(cr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-_i(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Bx(i/1960))-i,10<i){t.timeoutHandle=Lf(Br.bind(null,t,Un,Fi),i);break}Br(t,Un,Fi);break;case 5:Br(t,Un,Fi);break;default:throw Error(Se(329))}}}return Bn(t,Yt()),t.callbackNode===n?E0.bind(null,t):null}function Zf(t,e){var n=Ko;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=rc(t,e),t!==2&&(e=Un,Un=n,e!==null&&Qf(e)),t}function Qf(t){Un===null?Un=t:Un.push.apply(Un,t)}function Hx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Si(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~th,e&=~Ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_i(e),i=1<<n;t[n]=-1,e&=~i}}function Ap(t){if(Ct&6)throw Error(Se(327));Qs();var e=Bl(t,0);if(!(e&1))return Bn(t,Yt()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var i=Ef(t);i!==0&&(e=i,n=Zf(t,i))}if(n===1)throw n=ma,qr(t,0),cr(t,e),Bn(t,Yt()),n;if(n===6)throw Error(Se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,Un,Fi),Bn(t,Yt()),null}function ih(t,e){var n=Ct;Ct|=1;try{return t(e)}finally{Ct=n,Ct===0&&(ao=Yt()+500,Mc&&Ir())}}function ss(t){fr!==null&&fr.tag===0&&!(Ct&6)&&Qs();var e=Ct;Ct|=1;var n=si.transition,i=Nt;try{if(si.transition=null,Nt=1,t)return t()}finally{Nt=i,si.transition=n,Ct=e,!(Ct&6)&&Ir()}}function rh(){Wn=Ws.current,Bt(Ws)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vx(n)),Qt!==null)for(n=Qt.return;n!==null;){var i=n;switch(kd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&jl();break;case 3:so(),Bt(kn),Bt(Tn),$d();break;case 5:Xd(i);break;case 4:so();break;case 13:Bt(Vt);break;case 19:Bt(Vt);break;case 10:Gd(i.type._context);break;case 22:case 23:rh()}n=n.return}if(un=t,Qt=t=Sr(t.current,null),gn=Wn=e,tn=0,ma=null,th=Ac=rs=0,Un=Ko=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Xr=null}return t}function w0(t,e){do{var n=Qt;try{if(Hd(),Cl.current=ec,Jl){for(var i=Wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Jl=!1}if(is=0,ln=en=Wt=null,Yo=!1,da=0,eh.current=null,n===null||n.return===null){tn=1,ma=e,Qt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=gn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=hp(o);if(g!==null){g.flags&=-257,pp(g,o,a,s,e),g.mode&1&&dp(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){dp(s,c,e),sh();break e}l=Error(Se(426))}}else if(Ht&&a.mode&1){var p=hp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),pp(p,o,a,s,e),zd(oo(l,a));break e}}s=l=oo(l,a),tn!==4&&(tn=2),Ko===null?Ko=[s]:Ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=a0(s,l,e);op(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(_r===null||!_r.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=l0(s,a,e);op(s,M);break e}}s=s.return}while(s!==null)}b0(n)}catch(L){e=L,Qt===n&&n!==null&&(Qt=n=n.return);continue}break}while(!0)}function T0(){var t=tc.current;return tc.current=ec,t===null?ec:t}function sh(){(tn===0||tn===3||tn===2)&&(tn=4),un===null||!(rs&268435455)&&!(Ac&268435455)||cr(un,gn)}function rc(t,e){var n=Ct;Ct|=2;var i=T0();(un!==t||gn!==e)&&(Fi=null,qr(t,e));do try{Gx();break}catch(r){w0(t,r)}while(!0);if(Hd(),Ct=n,tc.current=i,Qt!==null)throw Error(Se(261));return un=null,gn=0,tn}function Gx(){for(;Qt!==null;)A0(Qt)}function Vx(){for(;Qt!==null&&!p_();)A0(Qt)}function A0(t){var e=R0(t.alternate,t,Wn);t.memoizedProps=t.pendingProps,e===null?b0(t):Qt=e,eh.current=null}function b0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Fx(n,e),n!==null){n.flags&=32767,Qt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tn=6,Qt=null;return}}else if(n=Ux(n,e,Wn),n!==null){Qt=n;return}if(e=e.sibling,e!==null){Qt=e;return}Qt=e=t}while(e!==null);tn===0&&(tn=5)}function Br(t,e,n){var i=Nt,r=si.transition;try{si.transition=null,Nt=1,Wx(t,e,n,i)}finally{si.transition=r,Nt=i}return null}function Wx(t,e,n,i){do Qs();while(fr!==null);if(Ct&6)throw Error(Se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(w_(t,s),t===un&&(Qt=un=null,gn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ga||(Ga=!0,P0(zl,function(){return Qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=si.transition,si.transition=null;var o=Nt;Nt=1;var a=Ct;Ct|=4,eh.current=null,kx(t,n),S0(n,t),ux(Rf),Hl=!!Cf,Rf=Cf=null,t.current=n,zx(n),m_(),Ct=a,Nt=o,si.transition=s}else t.current=n;if(Ga&&(Ga=!1,fr=t,ic=r),s=t.pendingLanes,s===0&&(_r=null),y_(n.stateNode),Bn(t,Yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nc)throw nc=!1,t=qf,qf=null,t;return ic&1&&t.tag!==0&&Qs(),s=t.pendingLanes,s&1?t===Kf?Zo++:(Zo=0,Kf=t):Zo=0,Ir(),null}function Qs(){if(fr!==null){var t=av(ic),e=si.transition,n=Nt;try{if(si.transition=null,Nt=16>t?16:t,fr===null)var i=!1;else{if(t=fr,fr=null,ic=0,Ct&6)throw Error(Se(331));var r=Ct;for(Ct|=4,De=t.current;De!==null;){var s=De,o=s.child;if(De.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(De=c;De!==null;){var f=De;switch(f.tag){case 0:case 11:case 15:qo(8,f,s)}var d=f.child;if(d!==null)d.return=f,De=d;else for(;De!==null;){f=De;var h=f.sibling,g=f.return;if(y0(f),f===c){De=null;break}if(h!==null){h.return=g,De=h;break}De=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}De=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,De=o;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,De=u;break e}De=s.return}}var m=t.current;for(De=m;De!==null;){o=De;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,De=v;else e:for(o=m;De!==null;){if(a=De,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tc(9,a)}}catch(L){$t(a,a.return,L)}if(a===o){De=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,De=M;break e}De=a.return}}if(Ct=r,Ir(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(vc,t)}catch{}i=!0}return i}finally{Nt=n,si.transition=e}}return!1}function bp(t,e,n){e=oo(n,e),e=a0(t,e,1),t=yr(t,e,1),e=Pn(),t!==null&&(xa(t,1,e),Bn(t,e))}function $t(t,e,n){if(t.tag===3)bp(t,t,n);else for(;e!==null;){if(e.tag===3){bp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){t=oo(n,t),t=l0(e,t,1),e=yr(e,t,1),t=Pn(),e!==null&&(xa(e,1,t),Bn(e,t));break}}e=e.return}}function jx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Pn(),t.pingedLanes|=t.suspendedLanes&n,un===t&&(gn&n)===n&&(tn===4||tn===3&&(gn&130023424)===gn&&500>Yt()-nh?qr(t,0):th|=n),Bn(t,e)}function C0(t,e){e===0&&(t.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var n=Pn();t=ji(t,e),t!==null&&(xa(t,e,n),Bn(t,n))}function Xx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C0(t,n)}function $x(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Se(314))}i!==null&&i.delete(e),C0(t,n)}var R0;R0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kn.current)On=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return On=!1,Dx(t,e,n);On=!!(t.flags&131072)}else On=!1,Ht&&e.flags&1048576&&Iv(e,Yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pl(t,e),t=e.pendingProps;var r=no(e,Tn.current);Zs(e,n),r=qd(null,e,i,t,r,n);var s=Kd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,zn(i)?(s=!0,Xl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wd(e),r.updater=wc,e.stateNode=r,r._reactInternals=e,kf(e,i,t,n),e=Hf(null,e,i,!0,s,n)):(e.tag=0,Ht&&s&&Od(e),Cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qx(i),t=hi(i,t),r){case 0:e=Bf(null,e,i,t,n);break e;case 1:e=vp(null,e,i,t,n);break e;case 11:e=mp(null,e,i,t,n);break e;case 14:e=gp(null,e,i,hi(i.type,t),n);break e}throw Error(Se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),Bf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),vp(t,e,i,r,n);case 3:e:{if(d0(e),t===null)throw Error(Se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,zv(t,e),Zl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oo(Error(Se(423)),e),e=yp(t,e,i,n,r);break e}else if(i!==r){r=oo(Error(Se(424)),e),e=yp(t,e,i,n,r);break e}else for(jn=vr(e.stateNode.containerInfo.firstChild),Xn=e,Ht=!0,mi=null,n=Ov(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),i===r){e=Xi(t,e,n);break e}Cn(t,e,i,n)}e=e.child}return e;case 5:return Bv(e),t===null&&Uf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Pf(i,r)?o=null:s!==null&&Pf(i,s)&&(e.flags|=32),f0(t,e),Cn(t,e,o,n),e.child;case 6:return t===null&&Uf(e),null;case 13:return h0(t,e,n);case 4:return jd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ro(e,null,i,n):Cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),mp(t,e,i,r,n);case 7:return Cn(t,e,e.pendingProps,n),e.child;case 8:return Cn(t,e,e.pendingProps.children,n),e.child;case 12:return Cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ft(ql,i._currentValue),i._currentValue=o,s!==null)if(Si(s.value,o)){if(s.children===r.children&&!kn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ff(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ff(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Zs(e,n),r=oi(r),i=i(r),e.flags|=1,Cn(t,e,i,n),e.child;case 14:return i=e.type,r=hi(i,e.pendingProps),r=hi(i.type,r),gp(t,e,i,r,n);case 15:return c0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),Pl(t,e),e.tag=1,zn(i)?(t=!0,Xl(e)):t=!1,Zs(e,n),o0(e,i,r),kf(e,i,r,n),Hf(null,e,i,!0,t,n);case 19:return p0(t,e,n);case 22:return u0(t,e,n)}throw Error(Se(156,e.tag))};function P0(t,e){return iv(t,e)}function Yx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,e,n,i){return new Yx(t,e,n,i)}function oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qx(t){if(typeof t=="function")return oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Td)return 11;if(t===Ad)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=ii(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Il(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")oh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ds:return Kr(n.children,r,s,e);case wd:o=8,r|=8;break;case lf:return t=ii(12,n,e,r|2),t.elementType=lf,t.lanes=s,t;case cf:return t=ii(13,n,e,r),t.elementType=cf,t.lanes=s,t;case uf:return t=ii(19,n,e,r),t.elementType=uf,t.lanes=s,t;case Bg:return bc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kg:o=10;break e;case zg:o=9;break e;case Td:o=11;break e;case Ad:o=14;break e;case or:o=16,i=null;break e}throw Error(Se(130,t==null?t:typeof t,""))}return e=ii(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Kr(t,e,n,i){return t=ii(7,t,i,e),t.lanes=n,t}function bc(t,e,n,i){return t=ii(22,t,i,e),t.elementType=Bg,t.lanes=n,t.stateNode={isHidden:!1},t}function du(t,e,n){return t=ii(6,t,null,e),t.lanes=n,t}function hu(t,e,n){return e=ii(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Kx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ah(t,e,n,i,r,s,o,a,l){return t=new Kx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ii(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wd(s),t}function Zx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function L0(t){if(!t)return Cr;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(Se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(zn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Se(171))}if(t.tag===1){var n=t.type;if(zn(n))return Lv(t,n,e)}return e}function N0(t,e,n,i,r,s,o,a,l){return t=ah(n,i,!0,t,r,s,o,a,l),t.context=L0(null),n=t.current,i=Pn(),r=xr(n),s=Gi(i,r),s.callback=e??null,yr(n,s,r),t.current.lanes=r,xa(t,r,i),Bn(t,i),t}function Cc(t,e,n,i){var r=e.current,s=Pn(),o=xr(r);return n=L0(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yr(r,e,o),t!==null&&(xi(t,r,o,s),bl(t,r,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lh(t,e){Cp(t,e),(t=t.alternate)&&Cp(t,e)}function Qx(){return null}var I0=typeof reportError=="function"?reportError:function(t){console.error(t)};function ch(t){this._internalRoot=t}Rc.prototype.render=ch.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Se(409));Cc(t,e,null,null)};Rc.prototype.unmount=ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ss(function(){Cc(null,t,null,null)}),e[Wi]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=uv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&dv(t)}};function uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function Jx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=sc(o);s.call(c)}}var o=N0(e,i,t,0,null,!1,!1,"",Rp);return t._reactRootContainer=o,t[Wi]=o.current,aa(t.nodeType===8?t.parentNode:t),ss(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=sc(l);a.call(c)}}var l=ah(t,0,!1,null,null,!1,!1,"",Rp);return t._reactRootContainer=l,t[Wi]=l.current,aa(t.nodeType===8?t.parentNode:t),ss(function(){Cc(e,l,n,i)}),l}function Lc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=sc(o);a.call(l)}}Cc(e,o,t,r)}else o=Jx(n,e,t,r,i);return sc(o)}lv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(Rd(e,n|1),Bn(e,Yt()),!(Ct&6)&&(ao=Yt()+500,Ir()))}break;case 13:ss(function(){var i=ji(t,1);if(i!==null){var r=Pn();xi(i,t,1,r)}}),lh(t,1)}};Pd=function(t){if(t.tag===13){var e=ji(t,134217728);if(e!==null){var n=Pn();xi(e,t,134217728,n)}lh(t,134217728)}};cv=function(t){if(t.tag===13){var e=xr(t),n=ji(t,e);if(n!==null){var i=Pn();xi(n,t,e,i)}lh(t,e)}};uv=function(){return Nt};fv=function(t,e){var n=Nt;try{return Nt=t,e()}finally{Nt=n}};xf=function(t,e,n){switch(e){case"input":if(hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Sc(i);if(!r)throw Error(Se(90));Gg(i),hf(i,r)}}}break;case"textarea":Wg(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};Zg=ih;Qg=ss;var eS={usingClientEntryPoint:!1,Events:[Ma,ks,Sc,qg,Kg,ih]},Po={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tS={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tv(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||Qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{vc=Va.inject(tS),Ci=Va}catch{}}Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eS;Yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uh(e))throw Error(Se(200));return Zx(t,e,null,n)};Yn.createRoot=function(t,e){if(!uh(t))throw Error(Se(299));var n=!1,i="",r=I0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ah(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,aa(t.nodeType===8?t.parentNode:t),new ch(e)};Yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Se(188)):(t=Object.keys(t).join(","),Error(Se(268,t)));return t=tv(e),t=t===null?null:t.stateNode,t};Yn.flushSync=function(t){return ss(t)};Yn.hydrate=function(t,e,n){if(!Pc(e))throw Error(Se(200));return Lc(null,t,e,!0,n)};Yn.hydrateRoot=function(t,e,n){if(!uh(t))throw Error(Se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=I0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=N0(e,null,t,1,n??null,r,!1,s,o),t[Wi]=e.current,aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Rc(e)};Yn.render=function(t,e,n){if(!Pc(e))throw Error(Se(200));return Lc(null,t,e,!1,n)};Yn.unmountComponentAtNode=function(t){if(!Pc(t))throw Error(Se(40));return t._reactRootContainer?(ss(function(){Lc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};Yn.unstable_batchedUpdates=ih;Yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Pc(n))throw Error(Se(200));if(t==null||t._reactInternals===void 0)throw Error(Se(38));return Lc(t,e,n,!1,i)};Yn.version="18.3.1-next-f1338f8080-20240426";function D0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D0)}catch(t){console.error(t)}}D0(),Dg.exports=Yn;var nS=Dg.exports,Pp=nS;of.createRoot=Pp.createRoot,of.hydrateRoot=Pp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ga.apply(this,arguments)}var dr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(dr||(dr={}));const Lp="popstate";function iS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Jf("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:oc(r)}return sS(e,n,null,t)}function jt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rS(){return Math.random().toString(36).substr(2,8)}function Np(t,e){return{usr:t.state,key:t.key,idx:e}}function Jf(t,e,n,i){return n===void 0&&(n=null),ga({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yo(e):e,{state:n,key:e&&e.key||i||rS()})}function oc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function yo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function sS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=dr.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(ga({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=dr.Pop;let p=f(),u=p==null?null:p-c;c=p,l&&l({action:a,location:_.location,delta:u})}function h(p,u){a=dr.Push;let m=Jf(_.location,p,u);c=f()+1;let v=Np(m,c),M=_.createHref(m);try{o.pushState(v,"",M)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;r.location.assign(M)}s&&l&&l({action:a,location:_.location,delta:1})}function g(p,u){a=dr.Replace;let m=Jf(_.location,p,u);c=f();let v=Np(m,c),M=_.createHref(m);o.replaceState(v,"",M),s&&l&&l({action:a,location:_.location,delta:0})}function y(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof p=="string"?p:oc(p);return m=m.replace(/ $/,"%20"),jt(u,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,u)}let _={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Lp,d),l=p,()=>{r.removeEventListener(Lp,d),l=null}},createHref(p){return e(r,p)},createURL:y,encodeLocation(p){let u=y(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:g,go(p){return o.go(p)}};return _}var Ip;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ip||(Ip={}));function oS(t,e,n){return n===void 0&&(n="/"),aS(t,e,n)}function aS(t,e,n,i){let r=typeof e=="string"?yo(e):e,s=lo(r.pathname||"/",n);if(s==null)return null;let o=U0(t);lS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=_S(s);a=vS(o[l],c)}return a}function U0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(jt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Mr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(jt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),U0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:mS(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of F0(s.path))r(s,o,l)}),e}function F0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=F0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function lS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const cS=/^:[\w-]+$/,uS=3,fS=2,dS=1,hS=10,pS=-2,Dp=t=>t==="*";function mS(t,e){let n=t.split("/"),i=n.length;return n.some(Dp)&&(i+=pS),e&&(i+=fS),n.filter(r=>!Dp(r)).reduce((r,s)=>r+(cS.test(s)?uS:s===""?dS:hS),i)}function gS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function vS(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",d=ed({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),h=l.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:Mr([s,d.pathname]),pathnameBase:wS(Mr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=Mr([s,d.pathnameBase]))}return o}function ed(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=yS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,f,d)=>{let{paramName:h,isOptional:g}=f;if(h==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[d];return g&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function yS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),fh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function _S(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function lo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const xS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,SS=t=>xS.test(t);function MS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?yo(t):t,s;if(n)if(SS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),fh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Up(n.substring(1),"/"):s=Up(n,e)}else s=e;return{pathname:s,search:TS(i),hash:AS(r)}}function Up(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function pu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ES(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dh(t,e){let n=ES(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function hh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=yo(t):(r=ga({},t),jt(!r.pathname||!r.pathname.includes("?"),pu("?","pathname","search",r)),jt(!r.pathname||!r.pathname.includes("#"),pu("#","pathname","hash",r)),jt(!r.search||!r.search.includes("#"),pu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=MS(r,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const Mr=t=>t.join("/").replace(/\/\/+/g,"/"),wS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),TS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,AS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function bS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const O0=["post","put","patch","delete"];new Set(O0);const CS=["get",...O0];new Set(CS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},va.apply(this,arguments)}const Nc=U.createContext(null),k0=U.createContext(null),qi=U.createContext(null),Ic=U.createContext(null),Ki=U.createContext({outlet:null,matches:[],isDataRoute:!1}),z0=U.createContext(null);function RS(t,e){let{relative:n}=e===void 0?{}:e;_o()||jt(!1);let{basename:i,navigator:r}=U.useContext(qi),{hash:s,pathname:o,search:a}=Uc(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Mr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function _o(){return U.useContext(Ic)!=null}function Zi(){return _o()||jt(!1),U.useContext(Ic).location}function B0(t){U.useContext(qi).static||U.useLayoutEffect(t)}function Dc(){let{isDataRoute:t}=U.useContext(Ki);return t?WS():PS()}function PS(){_o()||jt(!1);let t=U.useContext(Nc),{basename:e,future:n,navigator:i}=U.useContext(qi),{matches:r}=U.useContext(Ki),{pathname:s}=Zi(),o=JSON.stringify(dh(r,n.v7_relativeSplatPath)),a=U.useRef(!1);return B0(()=>{a.current=!0}),U.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let d=hh(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Mr([e,d.pathname])),(f.replace?i.replace:i.push)(d,f.state,f)},[e,i,o,s,t])}const LS=U.createContext(null);function NS(t){let e=U.useContext(Ki).outlet;return e&&U.createElement(LS.Provider,{value:t},e)}function Uc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=U.useContext(qi),{matches:r}=U.useContext(Ki),{pathname:s}=Zi(),o=JSON.stringify(dh(r,i.v7_relativeSplatPath));return U.useMemo(()=>hh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function IS(t,e){return DS(t,e)}function DS(t,e,n,i){_o()||jt(!1);let{navigator:r}=U.useContext(qi),{matches:s}=U.useContext(Ki),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Zi(),f;if(e){var d;let p=typeof e=="string"?yo(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||jt(!1),f=p}else f=c;let h=f.pathname||"/",g=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let y=oS(t,{pathname:g}),_=zS(y&&y.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Mr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Mr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&_?U.createElement(Ic.Provider,{value:{location:va({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:dr.Pop}},_):_}function US(){let t=VS(),e=bS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:r},n):null,null)}const FS=U.createElement(US,null);class OS extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Ki.Provider,{value:this.props.routeContext},U.createElement(z0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kS(t){let{routeContext:e,match:n,children:i}=t,r=U.useContext(Nc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Ki.Provider,{value:e},i)}function zS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||jt(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:h,errors:g}=n,y=d.route.loader&&h[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||y){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,d,h)=>{let g,y=!1,_=null,p=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||FS,l&&(c<0&&h===0?(jS("route-fallback"),y=!0,p=null):c===h&&(y=!0,p=d.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,h+1)),m=()=>{let v;return g?v=_:y?v=p:d.route.Component?v=U.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=f,U.createElement(kS,{match:d,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?U.createElement(OS,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:m(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):m()},null)}var H0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(H0||{}),G0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(G0||{});function BS(t){let e=U.useContext(Nc);return e||jt(!1),e}function HS(t){let e=U.useContext(k0);return e||jt(!1),e}function GS(t){let e=U.useContext(Ki);return e||jt(!1),e}function V0(t){let e=GS(),n=e.matches[e.matches.length-1];return n.route.id||jt(!1),n.route.id}function VS(){var t;let e=U.useContext(z0),n=HS(),i=V0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function WS(){let{router:t}=BS(H0.UseNavigateStable),e=V0(G0.UseNavigateStable),n=U.useRef(!1);return B0(()=>{n.current=!0}),U.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,va({fromRouteId:e},s)))},[t,e])}const Fp={};function jS(t,e,n){Fp[t]||(Fp[t]=!0)}function XS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function W0(t){let{to:e,replace:n,state:i,relative:r}=t;_o()||jt(!1);let{future:s,static:o}=U.useContext(qi),{matches:a}=U.useContext(Ki),{pathname:l}=Zi(),c=Dc(),f=hh(e,dh(a,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(f);return U.useEffect(()=>c(JSON.parse(d),{replace:n,state:i,relative:r}),[c,d,r,n,i]),null}function $S(t){return NS(t.context)}function sr(t){jt(!1)}function YS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=dr.Pop,navigator:s,static:o=!1,future:a}=t;_o()&&jt(!1);let l=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:l,navigator:s,static:o,future:va({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=yo(i));let{pathname:f="/",search:d="",hash:h="",state:g=null,key:y="default"}=i,_=U.useMemo(()=>{let p=lo(f,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:g,key:y},navigationType:r}},[l,f,d,h,g,y,r]);return _==null?null:U.createElement(qi.Provider,{value:c},U.createElement(Ic.Provider,{children:n,value:_}))}function qS(t){let{children:e,location:n}=t;return IS(td(e),n)}new Promise(()=>{});function td(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(i,r)=>{if(!U.isValidElement(i))return;let s=[...e,r];if(i.type===U.Fragment){n.push.apply(n,td(i.props.children,s));return}i.type!==sr&&jt(!1),!i.props.index||!i.props.children||jt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=td(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ac(){return ac=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ac.apply(this,arguments)}function j0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function KS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ZS(t,e){return t.button===0&&(!e||e==="_self")&&!KS(t)}const QS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],JS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],eM="6";try{window.__reactRouterVersion=eM}catch{}const tM=U.createContext({isTransitioning:!1}),nM="startTransition",Op=jy[nM];function iM(t){let{basename:e,children:n,future:i,window:r}=t,s=U.useRef();s.current==null&&(s.current=iS({window:r,v5Compat:!0}));let o=s.current,[a,l]=U.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=U.useCallback(d=>{c&&Op?Op(()=>l(d)):l(d)},[l,c]);return U.useLayoutEffect(()=>o.listen(f),[o,f]),U.useEffect(()=>XS(i),[i]),U.createElement(YS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const rM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oM=U.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f,viewTransition:d}=e,h=j0(e,QS),{basename:g}=U.useContext(qi),y,_=!1;if(typeof c=="string"&&sM.test(c)&&(y=c,rM))try{let v=new URL(window.location.href),M=c.startsWith("//")?new URL(v.protocol+c):new URL(c),L=lo(M.pathname,g);M.origin===v.origin&&L!=null?c=L+M.search+M.hash:_=!0}catch{}let p=RS(c,{relative:r}),u=cM(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:r,viewTransition:d});function m(v){i&&i(v),v.defaultPrevented||u(v)}return U.createElement("a",ac({},h,{href:y||p,onClick:_||s?i:m,ref:n,target:l}))}),aM=U.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:f}=e,d=j0(e,JS),h=Uc(l,{relative:d.relative}),g=Zi(),y=U.useContext(k0),{navigator:_,basename:p}=U.useContext(qi),u=y!=null&&uM(h)&&c===!0,m=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,v=g.pathname,M=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(v=v.toLowerCase(),M=M?M.toLowerCase():null,m=m.toLowerCase()),M&&p&&(M=lo(M,p)||M);const L=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let C=v===m||!o&&v.startsWith(m)&&v.charAt(L)==="/",b=M!=null&&(M===m||!o&&M.startsWith(m)&&M.charAt(m.length)==="/"),G={isActive:C,isPending:b,isTransitioning:u},ne=C?i:void 0,x;typeof s=="function"?x=s(G):x=[s,C?"active":null,b?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(G):a;return U.createElement(oM,ac({},d,{"aria-current":ne,className:x,ref:n,style:R,to:l,viewTransition:c}),typeof f=="function"?f(G):f)});var nd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(nd||(nd={}));var kp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kp||(kp={}));function lM(t){let e=U.useContext(Nc);return e||jt(!1),e}function cM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Dc(),c=Zi(),f=Uc(t,{relative:o});return U.useCallback(d=>{if(ZS(d,n)){d.preventDefault();let h=i!==void 0?i:oc(c)===oc(f);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,f,i,r,n,t,s,o,a])}function uM(t,e){e===void 0&&(e={});let n=U.useContext(tM);n==null&&jt(!1);let{basename:i}=lM(nd.useViewTransitionState),r=Uc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=lo(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=lo(n.nextLocation.pathname,i)||n.nextLocation.pathname;return ed(r.pathname,o)!=null||ed(r.pathname,s)!=null}const ph="reforgedz.session";function Kt(){const t=localStorage.getItem(ph);if(!t)return null;try{const e=JSON.parse(t);return!e||typeof e.token!="string"||e.token.length===0?null:e}catch{return null}}function fM(t){localStorage.setItem(ph,JSON.stringify(t))}function dM(){localStorage.removeItem(ph)}function hM(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),n=(4-e.length%4)%4,i=e+"=".repeat(n);return atob(i)}function pM(){const t=Kt();if(!t)return null;const e=String(t.token).split(".");if(e.length!==2)return null;try{const n=hM(e[0]),i=JSON.parse(n);return!i||typeof i.sub!="string"?null:i}catch{return null}}function mu(t){const e=pM();if(!e)return!1;const n=e.tools;return!n||typeof n!="object"?t==="replay":!!n[t]}function Jt(){const t="https://admin.reforgedz.xyz";return t.length>0?t.replace(/\/$/,""):window.location.origin}async function mM(t,e){const n=Jt(),i=await fetch(`${n}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})});if(!i.ok){const r=await i.text();throw new Error(r||`Login failed (${i.status})`)}return await i.json()}async function gM(){const t=Jt(),e=Kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to list servers (${n.status})`)}return await n.json()}async function id(){const t=Jt(),e=Kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/replay/statusAll`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to get replay status for all servers (${n.status})`)}return await n.json()}async function zp(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/range?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get replay range (${i.status})`)}return await i.json()}async function Bp(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/players?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to list replay players (${i.status})`)}return await i.json()}async function Wa(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=new URLSearchParams;i.set("serverId",t.serverId),typeof t.sinceTsMs=="number"&&i.set("sinceTsMs",String(t.sinceTsMs)),typeof t.untilTsMs=="number"&&i.set("untilTsMs",String(t.untilTsMs)),typeof t.limit=="number"&&i.set("limit",String(t.limit)),t.tail&&i.set("tail","1");const r=await fetch(`${e}/api/replay/events?${i.toString()}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!r.ok){const s=await r.text();throw new Error(s||`Failed to get replay events (${r.status})`)}return await r.json()}async function vM(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/gmPing`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to send GM ping (${i.status})`)}return await i.json()}async function gu(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapTerrain?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map terrain (${i.status})`)}return await i.json()}async function vu(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapDescriptors?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map descriptors (${i.status})`)}return await i.json()}async function yM(){const t=Jt(),e=Kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/admin/users`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list users (${n.status})`);return await n.json()}async function _M(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to create user (${i.status})`);return await i.json()}async function yu(t,e){const n=Jt(),i=Kt();if(!i)throw new Error("Not authenticated");const r=await fetch(`${n}/api/admin/users/${encodeURIComponent(t)}`,{method:"PUT",headers:{Authorization:`Bearer ${i.token}`,"Content-Type":"application/json"},body:JSON.stringify({tools:e})});if(!r.ok)throw new Error(await r.text()||`Failed to update user (${r.status})`);return await r.json()}async function xM(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users/${encodeURIComponent(t)}`,{method:"DELETE",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to delete user (${i.status})`);return await i.json()}async function SM(){const t=Jt(),e=Kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list dev servers (${n.status})`);return await n.json()}async function MM(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to add dev server (${i.status})`);return await i.json()}async function EM(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/clear?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to clear history (${i.status})`);return await i.json()}async function wM(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/regenerateTerrain?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to regenerate terrain (${i.status})`);return await i.json()}async function TM(){const t=Jt(),e=Kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/discordWebhook`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to load webhook (${n.status})`);return await n.json()}async function AM(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/discordWebhook`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify({webhookUrl:t})});if(!i.ok)throw new Error(await i.text()||`Failed to save webhook (${i.status})`);return await i.json()}async function bM(t){const e=Jt(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/exportDiscord`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to export to Discord (${i.status})`);return await i.json()}function CM(){const t=Dc(),e=Zi(),n=U.useMemo(()=>{const h=e.state;return h&&typeof h.from=="string"&&h.from.length>0?h.from:"/"},[e.state]),[i,r]=U.useState(""),[s,o]=U.useState(""),[a,l]=U.useState(null),[c,f]=U.useState(!1);async function d(h){if(h.preventDefault(),l(null),i.trim().length===0||s.length===0){l("Enter username and password");return}f(!0);try{const g=await mM(i.trim(),s);fM({token:g.token}),t(n,{replace:!0})}catch(g){const y=g instanceof Error?g.message:"Login failed";l(y)}finally{f(!1)}}return E.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24,boxSizing:"border-box"},children:E.jsxs("div",{className:"stack",style:{width:"min(440px, 100%)",gap:14},children:[E.jsxs("div",{style:{textAlign:"center"},children:[E.jsx("div",{className:"label",children:"Welcome"}),E.jsx("h1",{className:"h1",style:{fontSize:22,marginTop:6},children:"ReforgedZ Admin Menu"}),E.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Sign in to continue."})]}),E.jsx("div",{className:"card",style:{padding:18},children:E.jsxs("form",{className:"stack",onSubmit:d,children:[E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsx("div",{className:"label",children:"Username"}),E.jsx("input",{className:"input",value:i,onChange:h=>r(h.target.value),autoComplete:"username"})]}),E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsx("div",{className:"label",children:"Password"}),E.jsx("input",{className:"input",type:"password",value:s,onChange:h=>o(h.target.value),autoComplete:"current-password"})]}),a?E.jsx("div",{className:"error",style:{fontSize:13},children:a}):null,E.jsx("button",{className:"button buttonPrimary",type:"submit",disabled:c,children:c?"Signing in…":"Sign in"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"If you aren't meant to be here, say hi to eiry, I know where you live!."})]})})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="161",RM=0,Hp=1,PM=2,X0=1,LM=2,Ui=3,Rr=0,Hn=1,gi=2,Er=0,Js=1,Gp=2,Vp=3,Wp=4,NM=5,Vr=100,IM=101,DM=102,jp=103,Xp=104,UM=200,FM=201,OM=202,kM=203,rd=204,sd=205,zM=206,BM=207,HM=208,GM=209,VM=210,WM=211,jM=212,XM=213,$M=214,YM=0,qM=1,KM=2,lc=3,ZM=4,QM=5,JM=6,eE=7,$0=0,tE=1,nE=2,wr=0,iE=1,rE=2,sE=3,oE=4,aE=5,lE=6,Y0=300,co=301,uo=302,od=303,ad=304,Fc=306,ld=1e3,vi=1001,cd=1002,Rn=1003,$p=1004,Lo=1005,Dn=1006,_u=1007,Yr=1008,Tr=1009,cE=1010,uE=1011,gh=1012,q0=1013,hr=1014,ki=1015,ya=1016,K0=1017,Z0=1018,Zr=1020,fE=1021,yi=1023,dE=1024,hE=1025,Qr=1026,fo=1027,pE=1028,Q0=1029,mE=1030,J0=1031,ey=1033,xu=33776,Su=33777,Mu=33778,Eu=33779,Yp=35840,qp=35841,Kp=35842,Zp=35843,ty=36196,Qp=37492,Jp=37496,em=37808,tm=37809,nm=37810,im=37811,rm=37812,sm=37813,om=37814,am=37815,lm=37816,cm=37817,um=37818,fm=37819,dm=37820,hm=37821,wu=36492,pm=36494,mm=36495,gE=36283,gm=36284,vm=36285,ym=36286,ny=3e3,Jr=3001,vE=3200,yE=3201,iy=0,_E=1,ti="",hn="srgb",$i="srgb-linear",vh="display-p3",Oc="display-p3-linear",cc="linear",zt="srgb",uc="rec709",fc="p3",ds=7680,_m=519,xE=512,SE=513,ME=514,ry=515,EE=516,wE=517,TE=518,AE=519,ud=35044,xm="300 es",fd=1035,Hi=2e3,dc=2001;class xo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dl=Math.PI/180,dd=180/Math.PI;function Ar(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[t&255]+Mn[t>>8&255]+Mn[t>>16&255]+Mn[t>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[n&63|128]+Mn[n>>8&255]+"-"+Mn[n>>16&255]+Mn[n>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function Fn(t,e,n){return Math.max(e,Math.min(n,t))}function bE(t,e){return(t%e+e)%e}function Tu(t,e,n){return(1-n)*t+n*e}function Sm(t){return(t&t-1)===0&&t!==0}function hd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function bi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Dt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,n=0){vt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,n,i,r,s,o,a,l,c){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],g=i[5],y=i[8],_=r[0],p=r[3],u=r[6],m=r[1],v=r[4],M=r[7],L=r[2],C=r[5],b=r[8];return s[0]=o*_+a*m+l*L,s[3]=o*p+a*v+l*C,s[6]=o*u+a*M+l*b,s[1]=c*_+f*m+d*L,s[4]=c*p+f*v+d*C,s[7]=c*u+f*M+d*b,s[2]=h*_+g*m+y*L,s[5]=h*p+g*v+y*C,s[8]=h*u+g*M+y*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,g=c*s-o*l,y=n*d+i*h+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=d*_,e[1]=(r*c-f*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=g*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Au.makeScale(e,n)),this}rotate(e){return this.premultiply(Au.makeRotation(-e)),this}translate(e,n){return this.premultiply(Au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Au=new _t;function sy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function CE(){const t=hc("canvas");return t.style.display="block",t}const Mm={};function es(t){t in Mm||(Mm[t]=!0,console.warn(t))}const Em=new _t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wm=new _t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ja={[$i]:{transfer:cc,primaries:uc,toReference:t=>t,fromReference:t=>t},[hn]:{transfer:zt,primaries:uc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Oc]:{transfer:cc,primaries:fc,toReference:t=>t.applyMatrix3(wm),fromReference:t=>t.applyMatrix3(Em)},[vh]:{transfer:zt,primaries:fc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(wm),fromReference:t=>t.applyMatrix3(Em).convertLinearToSRGB()}},RE=new Set([$i,Oc]),Ut={enabled:!0,_workingColorSpace:$i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!RE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ja[e].toReference,r=ja[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ja[t].primaries},getTransfer:function(t){return t===ti?cc:ja[t].transfer}};function eo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let hs;class oy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=hc("canvas")),hs.width=e.width,hs.height=e.height;const i=hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=hs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=eo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(eo(n[i]/255)*255):n[i]=eo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PE=0;class ay{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Ar(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cu(r[o].image)):s.push(Cu(r[o]))}else s=Cu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?oy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LE=0;class Ln extends xo{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,i=vi,r=vi,s=Dn,o=Yr,a=yi,l=Tr,c=Ln.DEFAULT_ANISOTROPY,f=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Ar(),this.name="",this.source=new ay(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Jr?hn:ti),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ld:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ld:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===hn?Jr:ny}set encoding(e){es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jr?hn:ti}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=Y0;Ln.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,n=0,i=0,r=1){cn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],g=l[5],y=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-_)<.01&&Math.abs(y-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+_)<.1&&Math.abs(y+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(g+1)/2,L=(u+1)/2,C=(f+h)/4,b=(d+_)/4,G=(y+p)/4;return v>M&&v>L?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=b/i):M>L?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=G/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=b/s,r=G/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-y)*(p-y)+(d-_)*(d-_)+(h-f)*(h-f));return Math.abs(m)<.001&&(m=1),this.x=(p-y)/m,this.y=(d-_)/m,this.z=(h-f)/m,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NE extends xo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new cn(0,0,e,n),this.scissorTest=!1,this.viewport=new cn(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Jr?hn:ti),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ay(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends NE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ly extends Ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IE extends Ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],g=s[o+1],y=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=y,e[n+3]=_;return}if(d!==_||l!==h||c!==g||f!==y){let p=1-a;const u=l*h+c*g+f*y+d*_,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const L=Math.sqrt(v),C=Math.atan2(L,u*m);p=Math.sin(p*C)/L,a=Math.sin(a*C)/L}const M=a*m;if(l=l*p+h*M,c=c*p+g*M,f=f*p+y*M,d=d*p+_*M,p===1-a){const L=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=L,c*=L,f*=L,d*=L}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],g=s[o+2],y=s[o+3];return e[n]=a*y+f*d+l*g-c*h,e[n+1]=l*y+f*h+c*d-a*g,e[n+2]=c*y+f*g+a*h-l*d,e[n+3]=f*y-a*d-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*g*y,this._y=c*g*d-h*f*y,this._z=c*f*y+h*g*d,this._w=c*f*d-h*g*y;break;case"YXZ":this._x=h*f*d+c*g*y,this._y=c*g*d-h*f*y,this._z=c*f*y-h*g*d,this._w=c*f*d+h*g*y;break;case"ZXY":this._x=h*f*d-c*g*y,this._y=c*g*d+h*f*y,this._z=c*f*y+h*g*d,this._w=c*f*d-h*g*y;break;case"ZYX":this._x=h*f*d-c*g*y,this._y=c*g*d+h*f*y,this._z=c*f*y-h*g*d,this._w=c*f*d+h*g*y;break;case"YZX":this._x=h*f*d+c*g*y,this._y=c*g*d+h*f*y,this._z=c*f*y-h*g*d,this._w=c*f*d-h*g*y;break;case"XZY":this._x=h*f*d-c*g*y,this._y=c*g*d-h*f*y,this._z=c*f*y+h*g*d,this._w=c*f*d+h*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ru.copy(this).projectOnVector(e),this.sub(Ru)}reflect(e){return this.sub(Ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ru=new V,Tm=new as;class wa{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ui.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ui.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(s,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),$a.subVectors(this.max,No),ps.subVectors(e.a,No),ms.subVectors(e.b,No),gs.subVectors(e.c,No),Ji.subVectors(ms,ps),er.subVectors(gs,ms),Dr.subVectors(ps,gs);let n=[0,-Ji.z,Ji.y,0,-er.z,er.y,0,-Dr.z,Dr.y,Ji.z,0,-Ji.x,er.z,0,-er.x,Dr.z,0,-Dr.x,-Ji.y,Ji.x,0,-er.y,er.x,0,-Dr.y,Dr.x,0];return!Pu(n,ps,ms,gs,$a)||(n=[1,0,0,0,1,0,0,0,1],!Pu(n,ps,ms,gs,$a))?!1:(Ya.crossVectors(Ji,er),n=[Ya.x,Ya.y,Ya.z],Pu(n,ps,ms,gs,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new V,new V,new V,new V,new V,new V,new V,new V],ui=new V,Xa=new wa,ps=new V,ms=new V,gs=new V,Ji=new V,er=new V,Dr=new V,No=new V,$a=new V,Ya=new V,Ur=new V;function Pu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ur.fromArray(t,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),c=n.dot(Ur),f=i.dot(Ur);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const DE=new wa,Io=new V,Lu=new V;class kc{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):DE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const n=Io.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Io,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Lu)),this.expandByPoint(Io.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new V,Nu=new V,qa=new V,tr=new V,Iu=new V,Ka=new V,Du=new V;class cy{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nu.copy(e).add(n).multiplyScalar(.5),qa.copy(n).sub(e).normalize(),tr.copy(this.origin).sub(Nu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(qa),a=tr.dot(this.direction),l=-tr.dot(qa),c=tr.lengthSq(),f=Math.abs(1-o*o);let d,h,g,y;if(f>0)if(d=o*l-a,h=o*a-l,y=s*f,d>=0)if(h>=-y)if(h<=y){const _=1/f;d*=_,h*=_,g=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h<=-y?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c):h<=y?(d=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Nu).addScaledVector(qa,h),g}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,s){Iu.subVectors(n,e),Ka.subVectors(i,e),Du.crossVectors(Iu,Ka);let o=this.direction.dot(Du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors(tr,Ka));if(l<0)return null;const c=a*this.direction.dot(Iu.cross(tr));if(c<0||l+c>o)return null;const f=-a*tr.dot(Du);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,g,y,_,p){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,g,y,_,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,g,y,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=g,u[7]=y,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,g=o*d,y=a*f,_=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=g+y*c,n[5]=h-_*c,n[9]=-a*l,n[2]=_-h*c,n[6]=y+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,g=l*d,y=c*f,_=c*d;n[0]=h+_*a,n[4]=y*a-g,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=g*a-y,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,g=l*d,y=c*f,_=c*d;n[0]=h-_*a,n[4]=-o*d,n[8]=y+g*a,n[1]=g+y*a,n[5]=o*f,n[9]=_-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,g=o*d,y=a*f,_=a*d;n[0]=l*f,n[4]=y*c-g,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=g*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,y=a*l,_=a*c;n[0]=l*f,n[4]=_-h*d,n[8]=y*d+g,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=g*d+y,n[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,g=o*c,y=a*l,_=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+_,n[5]=o*f,n[9]=g*d-y,n[2]=y*d-g,n[6]=a*f,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UE,e,FE)}lookAt(e,n,i){const r=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),nr.crossVectors(i,Gn),nr.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),nr.crossVectors(i,Gn)),nr.normalize(),Za.crossVectors(Gn,nr),r[0]=nr.x,r[4]=Za.x,r[8]=Gn.x,r[1]=nr.y,r[5]=Za.y,r[9]=Gn.y,r[2]=nr.z,r[6]=Za.z,r[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],g=i[13],y=i[2],_=i[6],p=i[10],u=i[14],m=i[3],v=i[7],M=i[11],L=i[15],C=r[0],b=r[4],G=r[8],ne=r[12],x=r[1],R=r[5],ee=r[9],ue=r[13],z=r[2],te=r[6],Q=r[10],re=r[14],H=r[3],Y=r[7],Z=r[11],ie=r[15];return s[0]=o*C+a*x+l*z+c*H,s[4]=o*b+a*R+l*te+c*Y,s[8]=o*G+a*ee+l*Q+c*Z,s[12]=o*ne+a*ue+l*re+c*ie,s[1]=f*C+d*x+h*z+g*H,s[5]=f*b+d*R+h*te+g*Y,s[9]=f*G+d*ee+h*Q+g*Z,s[13]=f*ne+d*ue+h*re+g*ie,s[2]=y*C+_*x+p*z+u*H,s[6]=y*b+_*R+p*te+u*Y,s[10]=y*G+_*ee+p*Q+u*Z,s[14]=y*ne+_*ue+p*re+u*ie,s[3]=m*C+v*x+M*z+L*H,s[7]=m*b+v*R+M*te+L*Y,s[11]=m*G+v*ee+M*Q+L*Z,s[15]=m*ne+v*ue+M*re+L*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],g=e[14],y=e[3],_=e[7],p=e[11],u=e[15];return y*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*g-i*l*g)+_*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*f-s*l*f)+p*(+n*c*d-n*a*g-s*o*d+i*o*g+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],g=e[11],y=e[12],_=e[13],p=e[14],u=e[15],m=d*p*c-_*h*c+_*l*g-a*p*g-d*l*u+a*h*u,v=y*h*c-f*p*c-y*l*g+o*p*g+f*l*u-o*h*u,M=f*_*c-y*d*c+y*a*g-o*_*g-f*a*u+o*d*u,L=y*d*l-f*_*l-y*a*h+o*_*h+f*a*p-o*d*p,C=n*m+i*v+r*M+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=m*b,e[1]=(_*h*s-d*p*s-_*r*g+i*p*g+d*r*u-i*h*u)*b,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*b,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*g-i*l*g)*b,e[4]=v*b,e[5]=(f*p*s-y*h*s+y*r*g-n*p*g-f*r*u+n*h*u)*b,e[6]=(y*l*s-o*p*s-y*r*c+n*p*c+o*r*u-n*l*u)*b,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*g+n*l*g)*b,e[8]=M*b,e[9]=(y*d*s-f*_*s-y*i*g+n*_*g+f*i*u-n*d*u)*b,e[10]=(o*_*s-y*a*s+y*i*c-n*_*c-o*i*u+n*a*u)*b,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*g-n*a*g)*b,e[12]=L*b,e[13]=(f*_*r-y*d*r+y*i*h-n*_*h-f*i*p+n*d*p)*b,e[14]=(y*a*r-o*_*r-y*i*l+n*_*l+o*i*p-n*a*p)*b,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,g=s*f,y=s*d,_=o*f,p=o*d,u=a*d,m=l*c,v=l*f,M=l*d,L=i.x,C=i.y,b=i.z;return r[0]=(1-(_+u))*L,r[1]=(g+M)*L,r[2]=(y-v)*L,r[3]=0,r[4]=(g-M)*C,r[5]=(1-(h+u))*C,r[6]=(p+m)*C,r[7]=0,r[8]=(y+v)*b,r[9]=(p-m)*b,r[10]=(1-(h+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),a=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fi.copy(this);const c=1/s,f=1/o,d=1/a;return fi.elements[0]*=c,fi.elements[1]*=c,fi.elements[2]*=c,fi.elements[4]*=f,fi.elements[5]*=f,fi.elements[6]*=f,fi.elements[8]*=d,fi.elements[9]*=d,fi.elements[10]*=d,n.setFromRotationMatrix(fi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Hi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,y;if(a===Hi)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===dc)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Hi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,g=(i+r)*f;let y,_;if(a===Hi)y=(o+s)*d,_=-2*d;else if(a===dc)y=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vs=new V,fi=new qt,UE=new V(0,0,0),FE=new V(1,1,1),nr=new V,Za=new V,Gn=new V,Am=new qt,bm=new as;class Ta{constructor(e=0,n=0,i=0,r=Ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Fn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Am,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bm.setFromEuler(this),this.setFromQuaternion(bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ta.DEFAULT_ORDER="XYZ";class uy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OE=0;const Cm=new V,ys=new as,Ni=new qt,Qa=new V,Do=new V,kE=new V,zE=new as,Rm=new V(1,0,0),Pm=new V(0,1,0),Lm=new V(0,0,1),BE={type:"added"},HE={type:"removed"};class nn extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new V,n=new Ta,i=new as,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new _t}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,n){return ys.setFromAxisAngle(e,n),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Rm,e)}rotateY(e){return this.rotateOnAxis(Pm,e)}rotateZ(e){return this.rotateOnAxis(Lm,e)}translateOnAxis(e,n){return Cm.copy(e).applyQuaternion(this.quaternion),this.position.add(Cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rm,e)}translateY(e){return this.translateOnAxis(Pm,e)}translateZ(e){return this.translateOnAxis(Lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qa.copy(e):Qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Do,Qa,this.up):Ni.lookAt(Qa,Do,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(Ni),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(BE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(HE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,e,kE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,zE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new V(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new V,Ii=new V,Uu=new V,Di=new V,_s=new V,xs=new V,Nm=new V,Fu=new V,Ou=new V,ku=new V;class ni{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),di.subVectors(e,n),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){di.subVectors(r,n),Ii.subVectors(i,n),Uu.subVectors(e,n);const o=di.dot(di),a=di.dot(Ii),l=di.dot(Uu),c=Ii.dot(Ii),f=Ii.dot(Uu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,g=(c*l-a*f)*h,y=(o*f-a*l)*h;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static isFrontFacing(e,n,i,r){return di.subVectors(i,n),Ii.subVectors(e,n),di.cross(Ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),di.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),xs.subVectors(s,i),Fu.subVectors(e,i);const l=_s.dot(Fu),c=xs.dot(Fu);if(l<=0&&c<=0)return n.copy(i);Ou.subVectors(e,r);const f=_s.dot(Ou),d=xs.dot(Ou);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(_s,o);ku.subVectors(e,s);const g=_s.dot(ku),y=xs.dot(ku);if(y>=0&&g<=y)return n.copy(s);const _=g*c-l*y;if(_<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(xs,a);const p=f*y-g*d;if(p<=0&&d-f>=0&&g-y>=0)return Nm.subVectors(s,r),a=(d-f)/(d-f+(g-y)),n.copy(r).addScaledVector(Nm,a);const u=1/(p+_+h);return o=_*u,a=h*u,n.copy(i).addScaledVector(_s,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function zu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ht{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ut.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ut.workingColorSpace){if(e=bE(e,1),n=Fn(n,0,1),i=Fn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=zu(o,s,e+1/3),this.g=zu(o,s,e),this.b=zu(o,s,e-1/3)}return Ut.toWorkingColorSpace(this,r),this}setStyle(e,n=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hn){const i=fy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}copyLinearToSRGB(e){return this.r=bu(e.r),this.g=bu(e.g),this.b=bu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Ut.fromWorkingColorSpace(En.copy(this),e),Math.round(Fn(En.r*255,0,255))*65536+Math.round(Fn(En.g*255,0,255))*256+Math.round(Fn(En.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ut.workingColorSpace){Ut.fromWorkingColorSpace(En.copy(this),n);const i=En.r,r=En.g,s=En.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(En.copy(this),n),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=hn){Ut.fromWorkingColorSpace(En.copy(this),e);const n=En.r,i=En.g,r=En.b;return e!==hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(Ja);const i=Tu(ir.h,Ja.h,n),r=Tu(ir.s,Ja.s,n),s=Tu(ir.l,Ja.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new ht;ht.NAMES=fy;let GE=0;class us extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=Js,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rd&&(i.blendSrc=this.blendSrc),this.blendDst!==sd&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_m&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dy extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new V,el=new vt;class pn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ud,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return es("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)el.fromBufferAttribute(this,n),el.applyMatrix3(e),this.setXY(n,el.x,el.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=bi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=bi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=bi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=bi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ud&&(e.usage=this.usage),e}}class hy extends pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class py extends pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vn extends pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let VE=0;const Kn=new qt,Bu=new nn,Ss=new V,Vn=new wa,Uo=new wa,an=new V;class mn extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sy(e)?py:hy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new _t().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,n,i){return Kn.makeTranslation(e,n,i),this.applyMatrix4(Kn),this}scale(e,n,i){return Kn.makeScale(e,n,i),this.applyMatrix4(Kn),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Vn.min,Uo.min),Vn.expandByPoint(an),an.addVectors(Vn.max,Uo.max),Vn.expandByPoint(an)):(Vn.expandByPoint(Uo.min),Vn.expandByPoint(Uo.max))}Vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(an));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)an.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),an.add(Ss)),r=Math.max(r,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let x=0;x<a;x++)c[x]=new V,f[x]=new V;const d=new V,h=new V,g=new V,y=new vt,_=new vt,p=new vt,u=new V,m=new V;function v(x,R,ee){d.fromArray(r,x*3),h.fromArray(r,R*3),g.fromArray(r,ee*3),y.fromArray(o,x*2),_.fromArray(o,R*2),p.fromArray(o,ee*2),h.sub(d),g.sub(d),_.sub(y),p.sub(y);const ue=1/(_.x*p.y-p.x*_.y);isFinite(ue)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(g,-_.y).multiplyScalar(ue),m.copy(g).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(ue),c[x].add(u),c[R].add(u),c[ee].add(u),f[x].add(m),f[R].add(m),f[ee].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let x=0,R=M.length;x<R;++x){const ee=M[x],ue=ee.start,z=ee.count;for(let te=ue,Q=ue+z;te<Q;te+=3)v(i[te+0],i[te+1],i[te+2])}const L=new V,C=new V,b=new V,G=new V;function ne(x){b.fromArray(s,x*3),G.copy(b);const R=c[x];L.copy(R),L.sub(b.multiplyScalar(b.dot(R))).normalize(),C.crossVectors(G,R);const ue=C.dot(f[x])<0?-1:1;l[x*4]=L.x,l[x*4+1]=L.y,l[x*4+2]=L.z,l[x*4+3]=ue}for(let x=0,R=M.length;x<R;++x){const ee=M[x],ue=ee.start,z=ee.count;for(let te=ue,Q=ue+z;te<Q;te+=3)ne(i[te+0]),ne(i[te+1]),ne(i[te+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,f=new V,d=new V;if(e)for(let h=0,g=e.count;h<g;h+=3){const y=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let g=0,y=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*f;for(let u=0;u<f;u++)h[y++]=c[g++]}return new pn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const g=c[d];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,g=d.length;h<g;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Im=new qt,Fr=new cy,tl=new kc,Dm=new V,Ms=new V,Es=new V,ws=new V,Hu=new V,nl=new V,il=new vt,rl=new vt,sl=new vt,Um=new V,Fm=new V,Om=new V,ol=new V,al=new V;class ri extends nn{constructor(e=new mn,n=new dy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Hu.fromBufferAttribute(d,e),o?nl.addScaledVector(Hu,f):nl.addScaledVector(Hu.sub(n),f))}n.add(nl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(tl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(tl,Dm)===null||Fr.origin.distanceToSquared(Dm)>(e.far-e.near)**2))&&(Im.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Im),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const p=h[y],u=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let M=m,L=v;M<L;M+=3){const C=a.getX(M),b=a.getX(M+1),G=a.getX(M+2);r=ll(this,u,e,i,c,f,d,C,b,G),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let p=y,u=_;p<u;p+=3){const m=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);r=ll(this,o,e,i,c,f,d,m,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const p=h[y],u=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let M=m,L=v;M<L;M+=3){const C=M,b=M+1,G=M+2;r=ll(this,u,e,i,c,f,d,C,b,G),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=y,u=_;p<u;p+=3){const m=p,v=p+1,M=p+2;r=ll(this,o,e,i,c,f,d,m,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function WE(t,e,n,i,r,s,o,a){let l;if(e.side===Hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Rr,a),l===null)return null;al.copy(a),al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(al);return c<n.near||c>n.far?null:{distance:c,point:al.clone(),object:t}}function ll(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ms),t.getVertexPosition(l,Es),t.getVertexPosition(c,ws);const f=WE(t,e,n,i,Ms,Es,ws,ol);if(f){r&&(il.fromBufferAttribute(r,a),rl.fromBufferAttribute(r,l),sl.fromBufferAttribute(r,c),f.uv=ni.getInterpolation(ol,Ms,Es,ws,il,rl,sl,new vt)),s&&(il.fromBufferAttribute(s,a),rl.fromBufferAttribute(s,l),sl.fromBufferAttribute(s,c),f.uv1=ni.getInterpolation(ol,Ms,Es,ws,il,rl,sl,new vt),f.uv2=f.uv1),o&&(Um.fromBufferAttribute(o,a),Fm.fromBufferAttribute(o,l),Om.fromBufferAttribute(o,c),f.normal=ni.getInterpolation(ol,Ms,Es,ws,Um,Fm,Om,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};ni.getNormal(Ms,Es,ws,d.normal),f.face=d}return f}class Aa extends mn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(f,3)),this.setAttribute("uv",new vn(d,2));function y(_,p,u,m,v,M,L,C,b,G,ne){const x=M/b,R=L/G,ee=M/2,ue=L/2,z=C/2,te=b+1,Q=G+1;let re=0,H=0;const Y=new V;for(let Z=0;Z<Q;Z++){const ie=Z*R-ue;for(let he=0;he<te;he++){const Ze=he*x-ee;Y[_]=Ze*m,Y[p]=ie*v,Y[u]=z,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[u]=C>0?1:-1,f.push(Y.x,Y.y,Y.z),d.push(he/b),d.push(1-Z/G),re+=1}}for(let Z=0;Z<G;Z++)for(let ie=0;ie<b;ie++){const he=h+ie+te*Z,Ze=h+ie+te*(Z+1),J=h+(ie+1)+te*(Z+1),ae=h+(ie+1)+te*Z;l.push(he,Ze,ae),l.push(Ze,J,ae),H+=6}a.addGroup(g,H,ne),g+=H,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function bn(t){const e={};for(let n=0;n<t.length;n++){const i=ho(t[n]);for(const r in i)e[r]=i[r]}return e}function jE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function my(t){return t.getRenderTarget()===null?t.outputColorSpace:Ut.workingColorSpace}const XE={clone:ho,merge:bn};var $E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=YE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=jE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class gy extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new V,km=new vt,zm=new vt;class ei extends gy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=dd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dd*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,km,zm),n.subVectors(zm,km)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Dl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ts=-90,As=1;class qE extends nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ei(Ts,As,e,n);r.layers=this.layers,this.add(r);const s=new ei(Ts,As,e,n);s.layers=this.layers,this.add(s);const o=new ei(Ts,As,e,n);o.layers=this.layers,this.add(o);const a=new ei(Ts,As,e,n);a.layers=this.layers,this.add(a);const l=new ei(Ts,As,e,n);l.layers=this.layers,this.add(l);const c=new ei(Ts,As,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class vy extends Ln{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:co,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KE extends os{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jr?hn:ti),this.texture=new vy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Aa(5,5,5),s=new Pr({name:"CubemapFromEquirect",uniforms:ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hn,blending:Er});s.uniforms.tEquirect.value=n;const o=new ri(r,s),a=n.minFilter;return n.minFilter===Yr&&(n.minFilter=Dn),new qE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Gu=new V,ZE=new V,QE=new _t;class Hr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gu.subVectors(i,n).cross(ZE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||QE.getNormalMatrix(e),r=this.coplanarPoint(Gu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new kc,cl=new V;class yh{constructor(e=new Hr,n=new Hr,i=new Hr,r=new Hr,s=new Hr,o=new Hr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],g=r[8],y=r[9],_=r[10],p=r[11],u=r[12],m=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-g,M-u).normalize(),i[1].setComponents(l+s,h+c,p+g,M+u).normalize(),i[2].setComponents(l+o,h+f,p+y,M+m).normalize(),i[3].setComponents(l-o,h-f,p-y,M-m).normalize(),i[4].setComponents(l-a,h-d,p-_,M-v).normalize(),n===Hi)i[5].setComponents(l+a,h+d,p+_,M+v).normalize();else if(n===dc)i[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function JE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,g=d.byteLength,y=t.createBuffer();t.bindBuffer(f,y),t.bufferData(f,d,h),c.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:y,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,f,d){const h=f.array,g=f._updateRange,y=f.updateRanges;if(t.bindBuffer(d,c),g.count===-1&&y.length===0&&t.bufferSubData(d,0,h),y.length!==0){for(let _=0,p=y.length;_<p;_++){const u=y[_];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:l}}class po extends mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,g=[],y=[],_=[],p=[];for(let u=0;u<f;u++){const m=u*h-o;for(let v=0;v<c;v++){const M=v*d-s;y.push(M,-m,0),_.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,M=m+c*(u+1),L=m+1+c*(u+1),C=m+1+c*u;g.push(v,M,C),g.push(M,L,C)}this.setIndex(g),this.setAttribute("position",new vn(y,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}var ew=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ow=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lw=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_w=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ew=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ww=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Aw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Nw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Iw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ow=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ww=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$w=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,aT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ET=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$T=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,a1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,L1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:ew,alphahash_pars_fragment:tw,alphamap_fragment:nw,alphamap_pars_fragment:iw,alphatest_fragment:rw,alphatest_pars_fragment:sw,aomap_fragment:ow,aomap_pars_fragment:aw,batching_pars_vertex:lw,batching_vertex:cw,begin_vertex:uw,beginnormal_vertex:fw,bsdfs:dw,iridescence_fragment:hw,bumpmap_pars_fragment:pw,clipping_planes_fragment:mw,clipping_planes_pars_fragment:gw,clipping_planes_pars_vertex:vw,clipping_planes_vertex:yw,color_fragment:_w,color_pars_fragment:xw,color_pars_vertex:Sw,color_vertex:Mw,common:Ew,cube_uv_reflection_fragment:ww,defaultnormal_vertex:Tw,displacementmap_pars_vertex:Aw,displacementmap_vertex:bw,emissivemap_fragment:Cw,emissivemap_pars_fragment:Rw,colorspace_fragment:Pw,colorspace_pars_fragment:Lw,envmap_fragment:Nw,envmap_common_pars_fragment:Iw,envmap_pars_fragment:Dw,envmap_pars_vertex:Uw,envmap_physical_pars_fragment:$w,envmap_vertex:Fw,fog_vertex:Ow,fog_pars_vertex:kw,fog_fragment:zw,fog_pars_fragment:Bw,gradientmap_pars_fragment:Hw,lightmap_fragment:Gw,lightmap_pars_fragment:Vw,lights_lambert_fragment:Ww,lights_lambert_pars_fragment:jw,lights_pars_begin:Xw,lights_toon_fragment:Yw,lights_toon_pars_fragment:qw,lights_phong_fragment:Kw,lights_phong_pars_fragment:Zw,lights_physical_fragment:Qw,lights_physical_pars_fragment:Jw,lights_fragment_begin:eT,lights_fragment_maps:tT,lights_fragment_end:nT,logdepthbuf_fragment:iT,logdepthbuf_pars_fragment:rT,logdepthbuf_pars_vertex:sT,logdepthbuf_vertex:oT,map_fragment:aT,map_pars_fragment:lT,map_particle_fragment:cT,map_particle_pars_fragment:uT,metalnessmap_fragment:fT,metalnessmap_pars_fragment:dT,morphcolor_vertex:hT,morphnormal_vertex:pT,morphtarget_pars_vertex:mT,morphtarget_vertex:gT,normal_fragment_begin:vT,normal_fragment_maps:yT,normal_pars_fragment:_T,normal_pars_vertex:xT,normal_vertex:ST,normalmap_pars_fragment:MT,clearcoat_normal_fragment_begin:ET,clearcoat_normal_fragment_maps:wT,clearcoat_pars_fragment:TT,iridescence_pars_fragment:AT,opaque_fragment:bT,packing:CT,premultiplied_alpha_fragment:RT,project_vertex:PT,dithering_fragment:LT,dithering_pars_fragment:NT,roughnessmap_fragment:IT,roughnessmap_pars_fragment:DT,shadowmap_pars_fragment:UT,shadowmap_pars_vertex:FT,shadowmap_vertex:OT,shadowmask_pars_fragment:kT,skinbase_vertex:zT,skinning_pars_vertex:BT,skinning_vertex:HT,skinnormal_vertex:GT,specularmap_fragment:VT,specularmap_pars_fragment:WT,tonemapping_fragment:jT,tonemapping_pars_fragment:XT,transmission_fragment:$T,transmission_pars_fragment:YT,uv_pars_fragment:qT,uv_pars_vertex:KT,uv_vertex:ZT,worldpos_vertex:QT,background_vert:JT,background_frag:e1,backgroundCube_vert:t1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:r1,depth_vert:s1,depth_frag:o1,distanceRGBA_vert:a1,distanceRGBA_frag:l1,equirect_vert:c1,equirect_frag:u1,linedashed_vert:f1,linedashed_frag:d1,meshbasic_vert:h1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:v1,meshmatcap_frag:y1,meshnormal_vert:_1,meshnormal_frag:x1,meshphong_vert:S1,meshphong_frag:M1,meshphysical_vert:E1,meshphysical_frag:w1,meshtoon_vert:T1,meshtoon_frag:A1,points_vert:b1,points_frag:C1,shadow_vert:R1,shadow_frag:P1,sprite_vert:L1,sprite_frag:N1},Te={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},wi={basic:{uniforms:bn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:bn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ht(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:bn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:bn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:bn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ht(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:bn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:bn([Te.points,Te.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:bn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:bn([Te.common,Te.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:bn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:bn([Te.sprite,Te.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:bn([Te.common,Te.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:bn([Te.lights,Te.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};wi.physical={uniforms:bn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const ul={r:0,b:0,g:0};function I1(t,e,n,i,r,s,o){const a=new ht(0);let l=s===!0?0:1,c,f,d=null,h=0,g=null;function y(p,u){let m=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),m=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Fc)?(f===void 0&&(f=new ri(new Aa(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:ho(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=Ut.getTransfer(v.colorSpace)!==zt,(d!==v||h!==v.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,g=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ri(new po(2,2),new Pr({name:"BackgroundMaterial",uniforms:ho(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ut.getTransfer(v.colorSpace)!==zt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(ul,my(t)),i.buffers.color.setClear(ul.r,ul.g,ul.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:y}}function D1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function d(z,te,Q,re,H){let Y=!1;if(o){const Z=_(re,Q,te);c!==Z&&(c=Z,g(c.object)),Y=u(z,re,Q,H),Y&&m(z,re,Q,H)}else{const Z=te.wireframe===!0;(c.geometry!==re.id||c.program!==Q.id||c.wireframe!==Z)&&(c.geometry=re.id,c.program=Q.id,c.wireframe=Z,Y=!0)}H!==null&&n.update(H,t.ELEMENT_ARRAY_BUFFER),(Y||f)&&(f=!1,G(z,te,Q,re),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(z){return i.isWebGL2?t.bindVertexArray(z):s.bindVertexArrayOES(z)}function y(z){return i.isWebGL2?t.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function _(z,te,Q){const re=Q.wireframe===!0;let H=a[z.id];H===void 0&&(H={},a[z.id]=H);let Y=H[te.id];Y===void 0&&(Y={},H[te.id]=Y);let Z=Y[re];return Z===void 0&&(Z=p(h()),Y[re]=Z),Z}function p(z){const te=[],Q=[],re=[];for(let H=0;H<r;H++)te[H]=0,Q[H]=0,re[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:Q,attributeDivisors:re,object:z,attributes:{},index:null}}function u(z,te,Q,re){const H=c.attributes,Y=te.attributes;let Z=0;const ie=Q.getAttributes();for(const he in ie)if(ie[he].location>=0){const J=H[he];let ae=Y[he];if(ae===void 0&&(he==="instanceMatrix"&&z.instanceMatrix&&(ae=z.instanceMatrix),he==="instanceColor"&&z.instanceColor&&(ae=z.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;Z++}return c.attributesNum!==Z||c.index!==re}function m(z,te,Q,re){const H={},Y=te.attributes;let Z=0;const ie=Q.getAttributes();for(const he in ie)if(ie[he].location>=0){let J=Y[he];J===void 0&&(he==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),he==="instanceColor"&&z.instanceColor&&(J=z.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),H[he]=ae,Z++}c.attributes=H,c.attributesNum=Z,c.index=re}function v(){const z=c.newAttributes;for(let te=0,Q=z.length;te<Q;te++)z[te]=0}function M(z){L(z,0)}function L(z,te){const Q=c.newAttributes,re=c.enabledAttributes,H=c.attributeDivisors;Q[z]=1,re[z]===0&&(t.enableVertexAttribArray(z),re[z]=1),H[z]!==te&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,te),H[z]=te)}function C(){const z=c.newAttributes,te=c.enabledAttributes;for(let Q=0,re=te.length;Q<re;Q++)te[Q]!==z[Q]&&(t.disableVertexAttribArray(Q),te[Q]=0)}function b(z,te,Q,re,H,Y,Z){Z===!0?t.vertexAttribIPointer(z,te,Q,H,Y):t.vertexAttribPointer(z,te,Q,re,H,Y)}function G(z,te,Q,re){if(i.isWebGL2===!1&&(z.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=re.attributes,Y=Q.getAttributes(),Z=te.defaultAttributeValues;for(const ie in Y){const he=Y[ie];if(he.location>=0){let Ze=H[ie];if(Ze===void 0&&(ie==="instanceMatrix"&&z.instanceMatrix&&(Ze=z.instanceMatrix),ie==="instanceColor"&&z.instanceColor&&(Ze=z.instanceColor)),Ze!==void 0){const J=Ze.normalized,ae=Ze.itemSize,Ae=n.get(Ze);if(Ae===void 0)continue;const Ue=Ae.buffer,Qe=Ae.type,ke=Ae.bytesPerElement,yt=i.isWebGL2===!0&&(Qe===t.INT||Qe===t.UNSIGNED_INT||Ze.gpuType===q0);if(Ze.isInterleavedBufferAttribute){const Ke=Ze.data,W=Ke.stride,Gt=Ze.offset;if(Ke.isInstancedInterleavedBuffer){for(let Be=0;Be<he.locationSize;Be++)L(he.location+Be,Ke.meshPerAttribute);z.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let Be=0;Be<he.locationSize;Be++)M(he.location+Be);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Be=0;Be<he.locationSize;Be++)b(he.location+Be,ae/he.locationSize,Qe,J,W*ke,(Gt+ae/he.locationSize*Be)*ke,yt)}else{if(Ze.isInstancedBufferAttribute){for(let Ke=0;Ke<he.locationSize;Ke++)L(he.location+Ke,Ze.meshPerAttribute);z.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let Ke=0;Ke<he.locationSize;Ke++)M(he.location+Ke);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Ke=0;Ke<he.locationSize;Ke++)b(he.location+Ke,ae/he.locationSize,Qe,J,ae*ke,ae/he.locationSize*Ke*ke,yt)}}else if(Z!==void 0){const J=Z[ie];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(he.location,J);break;case 3:t.vertexAttrib3fv(he.location,J);break;case 4:t.vertexAttrib4fv(he.location,J);break;default:t.vertexAttrib1fv(he.location,J)}}}}C()}function ne(){ee();for(const z in a){const te=a[z];for(const Q in te){const re=te[Q];for(const H in re)y(re[H].object),delete re[H];delete te[Q]}delete a[z]}}function x(z){if(a[z.id]===void 0)return;const te=a[z.id];for(const Q in te){const re=te[Q];for(const H in re)y(re[H].object),delete re[H];delete te[Q]}delete a[z.id]}function R(z){for(const te in a){const Q=a[te];if(Q[z.id]===void 0)continue;const re=Q[z.id];for(const H in re)y(re[H].object),delete re[H];delete Q[z.id]}}function ee(){ue(),f=!0,c!==l&&(c=l,g(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ee,resetDefaultState:ue,dispose:ne,releaseStatesOfGeometry:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:M,disableUnusedAttributes:C}}function U1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let g,y;if(r)g=t,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<h;y++)this.render(f[y],d[y]);else{g.multiDrawArraysWEBGL(s,f,0,d,0,h);let y=0;for(let _=0;_<h;_++)y+=d[_];n.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function F1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=o||e.has("OES_texture_float"),L=v&&M,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:L,maxSamples:C}}function O1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Hr,a=new _t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||i!==0||r;return r=h,i=d.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,g){const y=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||y===null||y.length===0||s&&!p)s?f(null):c();else{const m=s?0:i,v=m*4;let M=u.clippingState||null;l.value=M,M=f(y,h,v,g);for(let L=0;L!==v;++L)M[L]=n[L];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,g,y){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,y!==!0||p===null){const u=g+_*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,M=g;v!==_;++v,M+=4)o.copy(d[v]).applyMatrix4(m,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function k1(t){let e=new WeakMap;function n(o,a){return a===od?o.mapping=co:a===ad&&(o.mapping=uo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===od||a===ad)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new KE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _y extends gy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const js=4,Bm=[.125,.215,.35,.446,.526,.582],Wr=20,Vu=new _y,Hm=new ht;let Wu=null,ju=0,Xu=0;const Gr=(1+Math.sqrt(5))/2,bs=1/Gr,Gm=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Gr,bs),new V(0,Gr,-bs),new V(bs,0,Gr),new V(-bs,0,Gr),new V(Gr,bs,0),new V(-Gr,bs,0)];class Vm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Wu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,ju,Xu),e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===co||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),ju=this._renderer.getActiveCubeFace(),Xu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ya,format:yi,colorSpace:$i,depthBuffer:!1},r=Wm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z1(s)),this._blurMaterial=B1(s,e,n)}return r}_compileMaterial(e){const n=new ri(this._lodPlanes[0],e);this._renderer.compile(n,Vu)}_sceneToCubeUV(e,n,i,r){const a=new ei(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Hm),f.toneMapping=wr,f.autoClear=!1;const g=new dy({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),y=new ri(new Aa,g);let _=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,_=!0):(g.color.copy(Hm),_=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;fl(r,m*v,u>2?v:0,v,v),f.setRenderTarget(r),_&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===co||e.mapping===uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ri(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Vu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gm[(r-1)%Gm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new ri(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Wr-1),_=s/y,p=isFinite(s)?1+Math.floor(f*_):Wr;p>Wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wr}`);const u=[];let m=0;for(let b=0;b<Wr;++b){const G=b/_,ne=Math.exp(-G*G/2);u.push(ne),b===0?m+=ne:b<p&&(m+=2*ne)}for(let b=0;b<u.length;b++)u[b]=u[b]/m;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=y,h.mipInt.value=v-i;const M=this._sizeLods[r],L=3*M*(r>v-js?r-v+js:0),C=4*(this._cubeSize-M);fl(n,L,C,3*M,2*M),l.setRenderTarget(n),l.render(d,Vu)}}function z1(t){const e=[],n=[],i=[];let r=t;const s=t-js+1+Bm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-js?l=Bm[o-t+js-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],g=6,y=6,_=3,p=2,u=1,m=new Float32Array(_*y*g),v=new Float32Array(p*y*g),M=new Float32Array(u*y*g);for(let C=0;C<g;C++){const b=C%3*2/3-1,G=C>2?0:-1,ne=[b,G,0,b+2/3,G,0,b+2/3,G+1,0,b,G,0,b+2/3,G+1,0,b,G+1,0];m.set(ne,_*y*C),v.set(h,p*y*C);const x=[C,C,C,C,C,C];M.set(x,u*y*C)}const L=new mn;L.setAttribute("position",new pn(m,_)),L.setAttribute("uv",new pn(v,p)),L.setAttribute("faceIndex",new pn(M,u)),e.push(L),r>js&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Wm(t,e,n){const i=new os(t,e,n);return i.texture.mapping=Fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function B1(t,e,n){const i=new Float32Array(Wr),r=new V(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function jm(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Xm(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function _h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===od||l===ad,f=l===co||l===uo;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Vm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new Vm(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function G1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function V1(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const _=h.morphAttributes[y];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const y in g){const _=g[y];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(d){const h=[],g=d.index,y=d.attributes.position;let _=0;if(g!==null){const m=g.array;_=g.version;for(let v=0,M=m.length;v<M;v+=3){const L=m[v+0],C=m[v+1],b=m[v+2];h.push(L,C,C,b,b,L)}}else if(y!==void 0){const m=y.array;_=y.version;for(let v=0,M=m.length/3-1;v<M;v+=3){const L=v+0,C=v+1,b=v+2;h.push(L,C,C,b,b,L)}}else return;const p=new(sy(h)?py:hy)(h,1);p.version=_;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function W1(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function f(g,y){t.drawElements(s,y,a,g*l),n.update(y,s,1)}function d(g,y,_){if(_===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,y,a,g*l,_),n.update(y,s,_)}function h(g,y,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(g[u]/l,y[u]);else{p.multiDrawElementsWEBGL(s,y,0,a,g,0,_);let u=0;for(let m=0;m<_;m++)u+=y[m];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function j1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function X1(t,e){return t[0]-e[0]}function $1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Y1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new cn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=y!==void 0?y.length:0;let p=s.get(f);if(p===void 0||p.count!==_){let te=function(){ue.dispose(),s.delete(f),f.removeEventListener("dispose",te)};var g=te;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,L=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],G=f.morphAttributes.color||[];let ne=0;v===!0&&(ne=1),M===!0&&(ne=2),L===!0&&(ne=3);let x=f.attributes.position.count*ne,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const ee=new Float32Array(x*R*4*_),ue=new ly(ee,x,R,_);ue.type=ki,ue.needsUpdate=!0;const z=ne*4;for(let Q=0;Q<_;Q++){const re=C[Q],H=b[Q],Y=G[Q],Z=x*R*4*Q;for(let ie=0;ie<re.count;ie++){const he=ie*z;v===!0&&(o.fromBufferAttribute(re,ie),ee[Z+he+0]=o.x,ee[Z+he+1]=o.y,ee[Z+he+2]=o.z,ee[Z+he+3]=0),M===!0&&(o.fromBufferAttribute(H,ie),ee[Z+he+4]=o.x,ee[Z+he+5]=o.y,ee[Z+he+6]=o.z,ee[Z+he+7]=0),L===!0&&(o.fromBufferAttribute(Y,ie),ee[Z+he+8]=o.x,ee[Z+he+9]=o.y,ee[Z+he+10]=o.z,ee[Z+he+11]=Y.itemSize===4?o.w:1)}}p={count:_,texture:ue,size:new vt(x,R)},s.set(f,p),f.addEventListener("dispose",te)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const m=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",m),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const y=h===void 0?0:h.length;let _=i[f.id];if(_===void 0||_.length!==y){_=[];for(let M=0;M<y;M++)_[M]=[M,0];i[f.id]=_}for(let M=0;M<y;M++){const L=_[M];L[0]=M,L[1]=h[M]}_.sort($1);for(let M=0;M<8;M++)M<y&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(X1);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let m=0;for(let M=0;M<8;M++){const L=a[M],C=L[0],b=L[1];C!==Number.MAX_SAFE_INTEGER&&b?(p&&f.getAttribute("morphTarget"+M)!==p[C]&&f.setAttribute("morphTarget"+M,p[C]),u&&f.getAttribute("morphNormal"+M)!==u[C]&&f.setAttribute("morphNormal"+M,u[C]),r[M]=b,m+=b):(p&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),u&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const v=f.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function q1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class xy extends Ln{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Qr,f!==Qr&&f!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Qr&&(i=hr),i===void 0&&f===fo&&(i=Zr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Sy=new Ln,My=new xy(1,1);My.compareFunction=ry;const Ey=new ly,wy=new IE,Ty=new vy,$m=[],Ym=[],qm=new Float32Array(16),Km=new Float32Array(9),Zm=new Float32Array(4);function So(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=$m[r];if(s===void 0&&(s=new Float32Array(r),$m[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function rn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function sn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function zc(t,e){let n=Ym[e];n===void 0&&(n=new Int32Array(e),Ym[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function K1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2fv(this.addr,e),sn(n,e)}}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(rn(n,e))return;t.uniform3fv(this.addr,e),sn(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4fv(this.addr,e),sn(n,e)}}function eA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,i))return;Zm.set(i),t.uniformMatrix2fv(this.addr,!1,Zm),sn(n,i)}}function tA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,i))return;Km.set(i),t.uniformMatrix3fv(this.addr,!1,Km),sn(n,i)}}function nA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,i))return;qm.set(i),t.uniformMatrix4fv(this.addr,!1,qm),sn(n,i)}}function iA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function rA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2iv(this.addr,e),sn(n,e)}}function sA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;t.uniform3iv(this.addr,e),sn(n,e)}}function oA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4iv(this.addr,e),sn(n,e)}}function aA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2uiv(this.addr,e),sn(n,e)}}function cA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;t.uniform3uiv(this.addr,e),sn(n,e)}}function uA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4uiv(this.addr,e),sn(n,e)}}function fA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?My:Sy;n.setTexture2D(e||s,r)}function dA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||wy,r)}function hA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ty,r)}function pA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ey,r)}function mA(t){switch(t){case 5126:return K1;case 35664:return Z1;case 35665:return Q1;case 35666:return J1;case 35674:return eA;case 35675:return tA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return rA;case 35668:case 35672:return sA;case 35669:case 35673:return oA;case 5125:return aA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return pA}}function gA(t,e){t.uniform1fv(this.addr,e)}function vA(t,e){const n=So(e,this.size,2);t.uniform2fv(this.addr,n)}function yA(t,e){const n=So(e,this.size,3);t.uniform3fv(this.addr,n)}function _A(t,e){const n=So(e,this.size,4);t.uniform4fv(this.addr,n)}function xA(t,e){const n=So(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function SA(t,e){const n=So(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function MA(t,e){const n=So(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function EA(t,e){t.uniform1iv(this.addr,e)}function wA(t,e){t.uniform2iv(this.addr,e)}function TA(t,e){t.uniform3iv(this.addr,e)}function AA(t,e){t.uniform4iv(this.addr,e)}function bA(t,e){t.uniform1uiv(this.addr,e)}function CA(t,e){t.uniform2uiv(this.addr,e)}function RA(t,e){t.uniform3uiv(this.addr,e)}function PA(t,e){t.uniform4uiv(this.addr,e)}function LA(t,e,n){const i=this.cache,r=e.length,s=zc(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Sy,s[o])}function NA(t,e,n){const i=this.cache,r=e.length,s=zc(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||wy,s[o])}function IA(t,e,n){const i=this.cache,r=e.length,s=zc(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ty,s[o])}function DA(t,e,n){const i=this.cache,r=e.length,s=zc(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ey,s[o])}function UA(t){switch(t){case 5126:return gA;case 35664:return vA;case 35665:return yA;case 35666:return _A;case 35674:return xA;case 35675:return SA;case 35676:return MA;case 5124:case 35670:return EA;case 35667:case 35671:return wA;case 35668:case 35672:return TA;case 35669:case 35673:return AA;case 5125:return bA;case 36294:return CA;case 36295:return RA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return DA}}class FA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=mA(n.type)}}class OA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UA(n.type)}}class kA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function Qm(t,e){t.seq.push(e),t.map[e.id]=e}function zA(t,e,n){const i=t.name,r=i.length;for($u.lastIndex=0;;){const s=$u.exec(i),o=$u.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Qm(n,c===void 0?new FA(a,t,e):new OA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new kA(a),Qm(n,d)),n=d}}}class Ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);zA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Jm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const BA=37297;let HA=0;function GA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function VA(t){const e=Ut.getPrimaries(Ut.workingColorSpace),n=Ut.getPrimaries(t);let i;switch(e===n?i="":e===fc&&n===uc?i="LinearDisplayP3ToLinearSRGB":e===uc&&n===fc&&(i="LinearSRGBToLinearDisplayP3"),t){case $i:case Oc:return[i,"LinearTransferOETF"];case hn:case vh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function eg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+GA(t.getShaderSource(e),o)}else return r}function WA(t,e){const n=VA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function jA(t,e){let n;switch(e){case iE:n="Linear";break;case rE:n="Reinhard";break;case sE:n="OptimizedCineon";break;case oE:n="ACESFilmic";break;case lE:n="AgX";break;case aE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function XA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xs).join(`
`)}function $A(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function YA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function qA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xs(t){return t!==""}function tg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ng(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KA=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(t){return t.replace(KA,QA)}const ZA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function QA(t,e){let n=gt[e];if(n===void 0){const i=ZA.get(e);if(i!==void 0)n=gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pd(n)}const JA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ig(t){return t.replace(JA,eb)}function eb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===X0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===LM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function nb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case co:case uo:e="ENVMAP_TYPE_CUBE";break;case Fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ib(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function rb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case $0:e="ENVMAP_BLENDING_MULTIPLY";break;case tE:e="ENVMAP_BLENDING_MIX";break;case nE:e="ENVMAP_BLENDING_ADD";break}return e}function sb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ob(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=tb(n),c=nb(n),f=ib(n),d=rb(n),h=sb(n),g=n.isWebGL2?"":XA(n),y=$A(n),_=YA(s),p=r.createProgram();let u,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xs).join(`
`),u.length>0&&(u+=`
`),m=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xs).join(`
`),m.length>0&&(m+=`
`)):(u=[rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),m=[g,rg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wr?"#define TONE_MAPPING":"",n.toneMapping!==wr?gt.tonemapping_pars_fragment:"",n.toneMapping!==wr?jA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,WA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),o=pd(o),o=tg(o,n),o=ng(o,n),a=pd(a),a=tg(a,n),a=ng(a,n),o=ig(o),a=ig(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=v+u+o,L=v+m+a,C=Jm(r,r.VERTEX_SHADER,M),b=Jm(r,r.FRAGMENT_SHADER,L);r.attachShader(p,C),r.attachShader(p,b),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function G(ee){if(t.debug.checkShaderErrors){const ue=r.getProgramInfoLog(p).trim(),z=r.getShaderInfoLog(C).trim(),te=r.getShaderInfoLog(b).trim();let Q=!0,re=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,C,b);else{const H=eg(r,C,"vertex"),Y=eg(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+ee.name+`
Material Type: `+ee.type+`

Program Info Log: `+ue+`
`+H+`
`+Y)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(z===""||te==="")&&(re=!1);re&&(ee.diagnostics={runnable:Q,programLog:ue,vertexShader:{log:z,prefix:u},fragmentShader:{log:te,prefix:m}})}r.deleteShader(C),r.deleteShader(b),ne=new Ul(r,p),x=qA(r,p)}let ne;this.getUniforms=function(){return ne===void 0&&G(this),ne};let x;this.getAttributes=function(){return x===void 0&&G(this),x};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(p,BA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=b,this}let ab=0;class lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new cb(e),n.set(e,i)),i}}class cb{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}}function ub(t,e,n,i,r,s,o){const a=new uy,l=new lb,c=new Set,f=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,g=r.vertexTextures;let y=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,R,ee,ue,z){const te=ue.fog,Q=z.geometry,re=x.isMeshStandardMaterial?ue.environment:null,H=(x.isMeshStandardMaterial?n:e).get(x.envMap||re),Y=H&&H.mapping===Fc?H.image.height:null,Z=_[x.type];x.precision!==null&&(y=r.getMaxPrecision(x.precision),y!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));const ie=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,he=ie!==void 0?ie.length:0;let Ze=0;Q.morphAttributes.position!==void 0&&(Ze=1),Q.morphAttributes.normal!==void 0&&(Ze=2),Q.morphAttributes.color!==void 0&&(Ze=3);let J,ae,Ae,Ue;if(Z){const Tt=wi[Z];J=Tt.vertexShader,ae=Tt.fragmentShader}else J=x.vertexShader,ae=x.fragmentShader,l.update(x),Ae=l.getVertexShaderID(x),Ue=l.getFragmentShaderID(x);const Qe=t.getRenderTarget(),ke=z.isInstancedMesh===!0,yt=z.isBatchedMesh===!0,Ke=!!x.map,W=!!x.matcap,Gt=!!H,Be=!!x.aoMap,tt=!!x.lightMap,Ve=!!x.bumpMap,ct=!!x.normalMap,Ye=!!x.displacementMap,A=!!x.emissiveMap,w=!!x.metalnessMap,q=!!x.roughnessMap,_e=x.anisotropy>0,fe=x.clearcoat>0,le=x.iridescence>0,Fe=x.sheen>0,we=x.transmission>0,Pe=_e&&!!x.anisotropyMap,pe=fe&&!!x.clearcoatMap,at=fe&&!!x.clearcoatNormalMap,de=fe&&!!x.clearcoatRoughnessMap,At=le&&!!x.iridescenceMap,lt=le&&!!x.iridescenceThicknessMap,nt=Fe&&!!x.sheenColorMap,Xe=Fe&&!!x.sheenRoughnessMap,Oe=!!x.specularMap,rt=!!x.specularColorMap,wt=!!x.specularIntensityMap,xt=we&&!!x.transmissionMap,dt=we&&!!x.thicknessMap,je=!!x.gradientMap,P=!!x.alphaMap,ge=x.alphaTest>0,xe=!!x.alphaHash,Ne=!!x.extensions;let qe=wr;x.toneMapped&&(Qe===null||Qe.isXRRenderTarget===!0)&&(qe=t.toneMapping);const Mt={isWebGL2:d,shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:ae,defines:x.defines,customVertexShaderID:Ae,customFragmentShaderID:Ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:yt,instancing:ke,instancingColor:ke&&z.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Qe===null?t.outputColorSpace:Qe.isXRRenderTarget===!0?Qe.texture.colorSpace:$i,alphaToCoverage:!!x.alphaToCoverage,map:Ke,matcap:W,envMap:Gt,envMapMode:Gt&&H.mapping,envMapCubeUVHeight:Y,aoMap:Be,lightMap:tt,bumpMap:Ve,normalMap:ct,displacementMap:g&&Ye,emissiveMap:A,normalMapObjectSpace:ct&&x.normalMapType===_E,normalMapTangentSpace:ct&&x.normalMapType===iy,metalnessMap:w,roughnessMap:q,anisotropy:_e,anisotropyMap:Pe,clearcoat:fe,clearcoatMap:pe,clearcoatNormalMap:at,clearcoatRoughnessMap:de,iridescence:le,iridescenceMap:At,iridescenceThicknessMap:lt,sheen:Fe,sheenColorMap:nt,sheenRoughnessMap:Xe,specularMap:Oe,specularColorMap:rt,specularIntensityMap:wt,transmission:we,transmissionMap:xt,thicknessMap:dt,gradientMap:je,opaque:x.transparent===!1&&x.blending===Js&&x.alphaToCoverage===!1,alphaMap:P,alphaTest:ge,alphaHash:xe,combine:x.combine,mapUv:Ke&&p(x.map.channel),aoMapUv:Be&&p(x.aoMap.channel),lightMapUv:tt&&p(x.lightMap.channel),bumpMapUv:Ve&&p(x.bumpMap.channel),normalMapUv:ct&&p(x.normalMap.channel),displacementMapUv:Ye&&p(x.displacementMap.channel),emissiveMapUv:A&&p(x.emissiveMap.channel),metalnessMapUv:w&&p(x.metalnessMap.channel),roughnessMapUv:q&&p(x.roughnessMap.channel),anisotropyMapUv:Pe&&p(x.anisotropyMap.channel),clearcoatMapUv:pe&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&p(x.sheenRoughnessMap.channel),specularMapUv:Oe&&p(x.specularMap.channel),specularColorMapUv:rt&&p(x.specularColorMap.channel),specularIntensityMapUv:wt&&p(x.specularIntensityMap.channel),transmissionMapUv:xt&&p(x.transmissionMap.channel),thicknessMapUv:dt&&p(x.thicknessMap.channel),alphaMapUv:P&&p(x.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ct||_e),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(Ke||P),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ze,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&ee.length>0,shadowMapType:t.shadowMap.type,toneMapping:qe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ke&&x.map.isVideoTexture===!0&&Ut.getTransfer(x.map.colorSpace)===zt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gi,flipSided:x.side===Hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Ne&&x.extensions.derivatives===!0,extensionFragDepth:Ne&&x.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ne&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const ee in x.defines)R.push(ee),R.push(x.defines[ee]);return x.isRawShaderMaterial===!1&&(v(R,x),M(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function v(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function M(x,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),x.push(a.mask)}function L(x){const R=_[x.type];let ee;if(R){const ue=wi[R];ee=XE.clone(ue.uniforms)}else ee=x.uniforms;return ee}function C(x,R){let ee;for(let ue=0,z=f.length;ue<z;ue++){const te=f[ue];if(te.cacheKey===R){ee=te,++ee.usedTimes;break}}return ee===void 0&&(ee=new ob(t,R,x,s),f.push(ee)),ee}function b(x){if(--x.usedTimes===0){const R=f.indexOf(x);f[R]=f[f.length-1],f.pop(),x.destroy()}}function G(x){l.remove(x)}function ne(){l.dispose()}return{getParameters:u,getProgramCacheKey:m,getUniforms:L,acquireProgram:C,releaseProgram:b,releaseShaderCache:G,programs:f,dispose:ne}}function fb(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function db(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function sg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function og(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,g,y,_,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:g,groupOrder:y,renderOrder:d.renderOrder,z:_,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=g,u.groupOrder=y,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function a(d,h,g,y,_,p){const u=o(d,h,g,y,_,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(d,h,g,y,_,p){const u=o(d,h,g,y,_,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||db),i.length>1&&i.sort(h||sg),r.length>1&&r.sort(h||sg)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function hb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new og,t.set(i,[o])):r>=s.length?(o=new og,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function pb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new ht};break;case"SpotLight":n={position:new V,direction:new V,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function mb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let gb=0;function vb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yb(t,e){const n=new pb,i=mb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new V);const s=new V,o=new qt,a=new qt;function l(f,d){let h=0,g=0,y=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let _=0,p=0,u=0,m=0,v=0,M=0,L=0,C=0,b=0,G=0,ne=0;f.sort(vb);const x=d===!0?Math.PI:1;for(let ee=0,ue=f.length;ee<ue;ee++){const z=f[ee],te=z.color,Q=z.intensity,re=z.distance,H=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=te.r*Q*x,g+=te.g*Q*x,y+=te.b*Q*x;else if(z.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(z.sh.coefficients[Y],Q);ne++}else if(z.isDirectionalLight){const Y=n.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity*x),z.castShadow){const Z=z.shadow,ie=i.get(z);ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,r.directionalShadow[_]=ie,r.directionalShadowMap[_]=H,r.directionalShadowMatrix[_]=z.shadow.matrix,M++}r.directional[_]=Y,_++}else if(z.isSpotLight){const Y=n.get(z);Y.position.setFromMatrixPosition(z.matrixWorld),Y.color.copy(te).multiplyScalar(Q*x),Y.distance=re,Y.coneCos=Math.cos(z.angle),Y.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Y.decay=z.decay,r.spot[u]=Y;const Z=z.shadow;if(z.map&&(r.spotLightMap[b]=z.map,b++,Z.updateMatrices(z),z.castShadow&&G++),r.spotLightMatrix[u]=Z.matrix,z.castShadow){const ie=i.get(z);ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,r.spotShadow[u]=ie,r.spotShadowMap[u]=H,C++}u++}else if(z.isRectAreaLight){const Y=n.get(z);Y.color.copy(te).multiplyScalar(Q),Y.halfWidth.set(z.width*.5,0,0),Y.halfHeight.set(0,z.height*.5,0),r.rectArea[m]=Y,m++}else if(z.isPointLight){const Y=n.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity*x),Y.distance=z.distance,Y.decay=z.decay,z.castShadow){const Z=z.shadow,ie=i.get(z);ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,ie.shadowCameraNear=Z.camera.near,ie.shadowCameraFar=Z.camera.far,r.pointShadow[p]=ie,r.pointShadowMap[p]=H,r.pointShadowMatrix[p]=z.shadow.matrix,L++}r.point[p]=Y,p++}else if(z.isHemisphereLight){const Y=n.get(z);Y.skyColor.copy(z.color).multiplyScalar(Q*x),Y.groundColor.copy(z.groundColor).multiplyScalar(Q*x),r.hemi[v]=Y,v++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=y;const R=r.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==u||R.rectAreaLength!==m||R.hemiLength!==v||R.numDirectionalShadows!==M||R.numPointShadows!==L||R.numSpotShadows!==C||R.numSpotMaps!==b||R.numLightProbes!==ne)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=m,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+b-G,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=ne,R.directionalLength=_,R.pointLength=p,R.spotLength=u,R.rectAreaLength=m,R.hemiLength=v,R.numDirectionalShadows=M,R.numPointShadows=L,R.numSpotShadows=C,R.numSpotMaps=b,R.numLightProbes=ne,r.version=gb++)}function c(f,d){let h=0,g=0,y=0,_=0,p=0;const u=d.matrixWorldInverse;for(let m=0,v=f.length;m<v;m++){const M=f[m];if(M.isDirectionalLight){const L=r.directional[h];L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),h++}else if(M.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),y++}else if(M.isRectAreaLight){const L=r.rectArea[_];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),L.halfWidth.set(M.width*.5,0,0),L.halfHeight.set(0,M.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(u),g++}else if(M.isHemisphereLight){const L=r.hemi[p];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function ag(t,e){const n=new yb(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function _b(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new ag(t,e),n.set(s,[l])):o>=a.length?(l=new ag(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class xb extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sb extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wb(t,e,n){let i=new yh;const r=new vt,s=new vt,o=new cn,a=new xb({depthPacking:yE}),l=new Sb,c={},f=n.maxTextureSize,d={[Rr]:Hn,[Hn]:Rr,[gi]:gi},h=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Mb,fragmentShader:Eb}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const y=new mn;y.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ri(y,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=X0;let u=this.type;this.render=function(C,b,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const ne=t.getRenderTarget(),x=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),ee=t.state;ee.setBlending(Er),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const ue=u!==Ui&&this.type===Ui,z=u===Ui&&this.type!==Ui;for(let te=0,Q=C.length;te<Q;te++){const re=C[te],H=re.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Y=H.getFrameExtents();if(r.multiply(Y),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,H.mapSize.y=s.y)),H.map===null||ue===!0||z===!0){const ie=this.type!==Ui?{minFilter:Rn,magFilter:Rn}:{};H.map!==null&&H.map.dispose(),H.map=new os(r.x,r.y,ie),H.map.texture.name=re.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const Z=H.getViewportCount();for(let ie=0;ie<Z;ie++){const he=H.getViewport(ie);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),ee.viewport(o),H.updateMatrices(re,ie),i=H.getFrustum(),M(b,G,H.camera,re,this.type)}H.isPointLightShadow!==!0&&this.type===Ui&&m(H,G),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(ne,x,R)};function m(C,b){const G=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new os(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,G,h,_,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,G,g,_,null)}function v(C,b,G,ne){let x=null;const R=G.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=G.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const ee=x.uuid,ue=b.uuid;let z=c[ee];z===void 0&&(z={},c[ee]=z);let te=z[ue];te===void 0&&(te=x.clone(),z[ue]=te,b.addEventListener("dispose",L)),x=te}if(x.visible=b.visible,x.wireframe=b.wireframe,ne===Ui?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,G.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const ee=t.properties.get(x);ee.light=G}return x}function M(C,b,G,ne,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Ui)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld);const ue=e.update(C),z=C.material;if(Array.isArray(z)){const te=ue.groups;for(let Q=0,re=te.length;Q<re;Q++){const H=te[Q],Y=z[H.materialIndex];if(Y&&Y.visible){const Z=v(C,Y,ne,x);C.onBeforeShadow(t,C,b,G,ue,Z,H),t.renderBufferDirect(G,null,ue,Z,C,H),C.onAfterShadow(t,C,b,G,ue,Z,H)}}}else if(z.visible){const te=v(C,z,ne,x);C.onBeforeShadow(t,C,b,G,ue,te,null),t.renderBufferDirect(G,null,ue,te,C,null),C.onAfterShadow(t,C,b,G,ue,te,null)}}const ee=C.children;for(let ue=0,z=ee.length;ue<z;ue++)M(ee[ue],b,G,ne,x)}function L(C){C.target.removeEventListener("dispose",L);for(const G in c){const ne=c[G],x=C.target.uuid;x in ne&&(ne[x].dispose(),delete ne[x])}}}function Tb(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ge=new cn;let xe=null;const Ne=new cn(0,0,0,0);return{setMask:function(qe){xe!==qe&&!P&&(t.colorMask(qe,qe,qe,qe),xe=qe)},setLocked:function(qe){P=qe},setClear:function(qe,Mt,Tt,Ot,on){on===!0&&(qe*=Ot,Mt*=Ot,Tt*=Ot),ge.set(qe,Mt,Tt,Ot),Ne.equals(ge)===!1&&(t.clearColor(qe,Mt,Tt,Ot),Ne.copy(ge))},reset:function(){P=!1,xe=null,Ne.set(-1,0,0,0)}}}function s(){let P=!1,ge=null,xe=null,Ne=null;return{setTest:function(qe){qe?ke(t.DEPTH_TEST):yt(t.DEPTH_TEST)},setMask:function(qe){ge!==qe&&!P&&(t.depthMask(qe),ge=qe)},setFunc:function(qe){if(xe!==qe){switch(qe){case YM:t.depthFunc(t.NEVER);break;case qM:t.depthFunc(t.ALWAYS);break;case KM:t.depthFunc(t.LESS);break;case lc:t.depthFunc(t.LEQUAL);break;case ZM:t.depthFunc(t.EQUAL);break;case QM:t.depthFunc(t.GEQUAL);break;case JM:t.depthFunc(t.GREATER);break;case eE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=qe}},setLocked:function(qe){P=qe},setClear:function(qe){Ne!==qe&&(t.clearDepth(qe),Ne=qe)},reset:function(){P=!1,ge=null,xe=null,Ne=null}}}function o(){let P=!1,ge=null,xe=null,Ne=null,qe=null,Mt=null,Tt=null,Ot=null,on=null;return{setTest:function(Ie){P||(Ie?ke(t.STENCIL_TEST):yt(t.STENCIL_TEST))},setMask:function(Ie){ge!==Ie&&!P&&(t.stencilMask(Ie),ge=Ie)},setFunc:function(Ie,pt,Pt){(xe!==Ie||Ne!==pt||qe!==Pt)&&(t.stencilFunc(Ie,pt,Pt),xe=Ie,Ne=pt,qe=Pt)},setOp:function(Ie,pt,Pt){(Mt!==Ie||Tt!==pt||Ot!==Pt)&&(t.stencilOp(Ie,pt,Pt),Mt=Ie,Tt=pt,Ot=Pt)},setLocked:function(Ie){P=Ie},setClear:function(Ie){on!==Ie&&(t.clearStencil(Ie),on=Ie)},reset:function(){P=!1,ge=null,xe=null,Ne=null,qe=null,Mt=null,Tt=null,Ot=null,on=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let h={},g={},y=new WeakMap,_=[],p=null,u=!1,m=null,v=null,M=null,L=null,C=null,b=null,G=null,ne=new ht(0,0,0),x=0,R=!1,ee=null,ue=null,z=null,te=null,Q=null;const re=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=Y>=2);let ie=null,he={};const Ze=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),ae=new cn().fromArray(Ze),Ae=new cn().fromArray(J);function Ue(P,ge,xe,Ne){const qe=new Uint8Array(4),Mt=t.createTexture();t.bindTexture(P,Mt),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Tt=0;Tt<xe;Tt++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ge,0,t.RGBA,1,1,Ne,0,t.RGBA,t.UNSIGNED_BYTE,qe):t.texImage2D(ge+Tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,qe);return Mt}const Qe={};Qe[t.TEXTURE_2D]=Ue(t.TEXTURE_2D,t.TEXTURE_2D,1),Qe[t.TEXTURE_CUBE_MAP]=Ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Qe[t.TEXTURE_2D_ARRAY]=Ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Qe[t.TEXTURE_3D]=Ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ke(t.DEPTH_TEST),l.setFunc(lc),Ye(!1),A(Hp),ke(t.CULL_FACE),Ve(Er);function ke(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function yt(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Ke(P,ge){return g[P]!==ge?(t.bindFramebuffer(P,ge),g[P]=ge,i&&(P===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ge),P===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ge)),!0):!1}function W(P,ge){let xe=_,Ne=!1;if(P)if(xe=y.get(ge),xe===void 0&&(xe=[],y.set(ge,xe)),P.isWebGLMultipleRenderTargets){const qe=P.texture;if(xe.length!==qe.length||xe[0]!==t.COLOR_ATTACHMENT0){for(let Mt=0,Tt=qe.length;Mt<Tt;Mt++)xe[Mt]=t.COLOR_ATTACHMENT0+Mt;xe.length=qe.length,Ne=!0}}else xe[0]!==t.COLOR_ATTACHMENT0&&(xe[0]=t.COLOR_ATTACHMENT0,Ne=!0);else xe[0]!==t.BACK&&(xe[0]=t.BACK,Ne=!0);Ne&&(n.isWebGL2?t.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function Gt(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const Be={[Vr]:t.FUNC_ADD,[IM]:t.FUNC_SUBTRACT,[DM]:t.FUNC_REVERSE_SUBTRACT};if(i)Be[jp]=t.MIN,Be[Xp]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Be[jp]=P.MIN_EXT,Be[Xp]=P.MAX_EXT)}const tt={[UM]:t.ZERO,[FM]:t.ONE,[OM]:t.SRC_COLOR,[rd]:t.SRC_ALPHA,[VM]:t.SRC_ALPHA_SATURATE,[HM]:t.DST_COLOR,[zM]:t.DST_ALPHA,[kM]:t.ONE_MINUS_SRC_COLOR,[sd]:t.ONE_MINUS_SRC_ALPHA,[GM]:t.ONE_MINUS_DST_COLOR,[BM]:t.ONE_MINUS_DST_ALPHA,[WM]:t.CONSTANT_COLOR,[jM]:t.ONE_MINUS_CONSTANT_COLOR,[XM]:t.CONSTANT_ALPHA,[$M]:t.ONE_MINUS_CONSTANT_ALPHA};function Ve(P,ge,xe,Ne,qe,Mt,Tt,Ot,on,Ie){if(P===Er){u===!0&&(yt(t.BLEND),u=!1);return}if(u===!1&&(ke(t.BLEND),u=!0),P!==NM){if(P!==m||Ie!==R){if((v!==Vr||C!==Vr)&&(t.blendEquation(t.FUNC_ADD),v=Vr,C=Vr),Ie)switch(P){case Js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gp:t.blendFunc(t.ONE,t.ONE);break;case Vp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Vp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,L=null,b=null,G=null,ne.set(0,0,0),x=0,m=P,R=Ie}return}qe=qe||ge,Mt=Mt||xe,Tt=Tt||Ne,(ge!==v||qe!==C)&&(t.blendEquationSeparate(Be[ge],Be[qe]),v=ge,C=qe),(xe!==M||Ne!==L||Mt!==b||Tt!==G)&&(t.blendFuncSeparate(tt[xe],tt[Ne],tt[Mt],tt[Tt]),M=xe,L=Ne,b=Mt,G=Tt),(Ot.equals(ne)===!1||on!==x)&&(t.blendColor(Ot.r,Ot.g,Ot.b,on),ne.copy(Ot),x=on),m=P,R=!1}function ct(P,ge){P.side===gi?yt(t.CULL_FACE):ke(t.CULL_FACE);let xe=P.side===Hn;ge&&(xe=!xe),Ye(xe),P.blending===Js&&P.transparent===!1?Ve(Er):Ve(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Ne=P.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),q(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ke(t.SAMPLE_ALPHA_TO_COVERAGE):yt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(P){ee!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),ee=P)}function A(P){P!==RM?(ke(t.CULL_FACE),P!==ue&&(P===Hp?t.cullFace(t.BACK):P===PM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):yt(t.CULL_FACE),ue=P}function w(P){P!==z&&(H&&t.lineWidth(P),z=P)}function q(P,ge,xe){P?(ke(t.POLYGON_OFFSET_FILL),(te!==ge||Q!==xe)&&(t.polygonOffset(ge,xe),te=ge,Q=xe)):yt(t.POLYGON_OFFSET_FILL)}function _e(P){P?ke(t.SCISSOR_TEST):yt(t.SCISSOR_TEST)}function fe(P){P===void 0&&(P=t.TEXTURE0+re-1),ie!==P&&(t.activeTexture(P),ie=P)}function le(P,ge,xe){xe===void 0&&(ie===null?xe=t.TEXTURE0+re-1:xe=ie);let Ne=he[xe];Ne===void 0&&(Ne={type:void 0,texture:void 0},he[xe]=Ne),(Ne.type!==P||Ne.texture!==ge)&&(ie!==xe&&(t.activeTexture(xe),ie=xe),t.bindTexture(P,ge||Qe[P]),Ne.type=P,Ne.texture=ge)}function Fe(){const P=he[ie];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function we(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xe(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(P){ae.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),ae.copy(P))}function wt(P){Ae.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),Ae.copy(P))}function xt(P,ge){let xe=d.get(ge);xe===void 0&&(xe=new WeakMap,d.set(ge,xe));let Ne=xe.get(P);Ne===void 0&&(Ne=t.getUniformBlockIndex(ge,P.name),xe.set(P,Ne))}function dt(P,ge){const Ne=d.get(ge).get(P);f.get(ge)!==Ne&&(t.uniformBlockBinding(ge,Ne,P.__bindingPointIndex),f.set(ge,Ne))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ie=null,he={},g={},y=new WeakMap,_=[],p=null,u=!1,m=null,v=null,M=null,L=null,C=null,b=null,G=null,ne=new ht(0,0,0),x=0,R=!1,ee=null,ue=null,z=null,te=null,Q=null,ae.set(0,0,t.canvas.width,t.canvas.height),Ae.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ke,disable:yt,bindFramebuffer:Ke,drawBuffers:W,useProgram:Gt,setBlending:Ve,setMaterial:ct,setFlipSided:Ye,setCullFace:A,setLineWidth:w,setPolygonOffset:q,setScissorTest:_e,activeTexture:fe,bindTexture:le,unbindTexture:Fe,compressedTexImage2D:we,compressedTexImage3D:Pe,texImage2D:Xe,texImage3D:Oe,updateUBOMapping:xt,uniformBlockBinding:dt,texStorage2D:lt,texStorage3D:nt,texSubImage2D:pe,texSubImage3D:at,compressedTexSubImage2D:de,compressedTexSubImage3D:At,scissor:rt,viewport:wt,reset:je}}function Ab(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,w){return g?new OffscreenCanvas(A,w):hc("canvas")}function _(A,w,q,_e){let fe=1;if((A.width>_e||A.height>_e)&&(fe=_e/Math.max(A.width,A.height)),fe<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const le=w?hd:Math.floor,Fe=le(fe*A.width),we=le(fe*A.height);d===void 0&&(d=y(Fe,we));const Pe=q?y(Fe,we):d;return Pe.width=Fe,Pe.height=we,Pe.getContext("2d").drawImage(A,0,0,Fe,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Fe+"x"+we+")."),Pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return Sm(A.width)&&Sm(A.height)}function u(A){return a?!1:A.wrapS!==vi||A.wrapT!==vi||A.minFilter!==Rn&&A.minFilter!==Dn}function m(A,w){return A.generateMipmaps&&w&&A.minFilter!==Rn&&A.minFilter!==Dn}function v(A){t.generateMipmap(A)}function M(A,w,q,_e,fe=!1){if(a===!1)return w;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le=w;if(w===t.RED&&(q===t.FLOAT&&(le=t.R32F),q===t.HALF_FLOAT&&(le=t.R16F),q===t.UNSIGNED_BYTE&&(le=t.R8)),w===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(le=t.R8UI),q===t.UNSIGNED_SHORT&&(le=t.R16UI),q===t.UNSIGNED_INT&&(le=t.R32UI),q===t.BYTE&&(le=t.R8I),q===t.SHORT&&(le=t.R16I),q===t.INT&&(le=t.R32I)),w===t.RG&&(q===t.FLOAT&&(le=t.RG32F),q===t.HALF_FLOAT&&(le=t.RG16F),q===t.UNSIGNED_BYTE&&(le=t.RG8)),w===t.RGBA){const Fe=fe?cc:Ut.getTransfer(_e);q===t.FLOAT&&(le=t.RGBA32F),q===t.HALF_FLOAT&&(le=t.RGBA16F),q===t.UNSIGNED_BYTE&&(le=Fe===zt?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function L(A,w,q){return m(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==Rn&&A.minFilter!==Dn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function C(A){return A===Rn||A===$p||A===Lo?t.NEAREST:t.LINEAR}function b(A){const w=A.target;w.removeEventListener("dispose",b),ne(w),w.isVideoTexture&&f.delete(w)}function G(A){const w=A.target;w.removeEventListener("dispose",G),R(w)}function ne(A){const w=i.get(A);if(w.__webglInit===void 0)return;const q=A.source,_e=h.get(q);if(_e){const fe=_e[w.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&x(A),Object.keys(_e).length===0&&h.delete(q)}i.remove(A)}function x(A){const w=i.get(A);t.deleteTexture(w.__webglTexture);const q=A.source,_e=h.get(q);delete _e[w.__cacheKey],o.memory.textures--}function R(A){const w=A.texture,q=i.get(A),_e=i.get(w);if(_e.__webglTexture!==void 0&&(t.deleteTexture(_e.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(q.__webglFramebuffer[fe]))for(let le=0;le<q.__webglFramebuffer[fe].length;le++)t.deleteFramebuffer(q.__webglFramebuffer[fe][le]);else t.deleteFramebuffer(q.__webglFramebuffer[fe]);q.__webglDepthbuffer&&t.deleteRenderbuffer(q.__webglDepthbuffer[fe])}else{if(Array.isArray(q.__webglFramebuffer))for(let fe=0;fe<q.__webglFramebuffer.length;fe++)t.deleteFramebuffer(q.__webglFramebuffer[fe]);else t.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&t.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&t.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let fe=0;fe<q.__webglColorRenderbuffer.length;fe++)q.__webglColorRenderbuffer[fe]&&t.deleteRenderbuffer(q.__webglColorRenderbuffer[fe]);q.__webglDepthRenderbuffer&&t.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let fe=0,le=w.length;fe<le;fe++){const Fe=i.get(w[fe]);Fe.__webglTexture&&(t.deleteTexture(Fe.__webglTexture),o.memory.textures--),i.remove(w[fe])}i.remove(w),i.remove(A)}let ee=0;function ue(){ee=0}function z(){const A=ee;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),ee+=1,A}function te(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function Q(A,w){const q=i.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const _e=A.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(q,A,w);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+w)}function re(A,w){const q=i.get(A);if(A.version>0&&q.__version!==A.version){ae(q,A,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+w)}function H(A,w){const q=i.get(A);if(A.version>0&&q.__version!==A.version){ae(q,A,w);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+w)}function Y(A,w){const q=i.get(A);if(A.version>0&&q.__version!==A.version){Ae(q,A,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+w)}const Z={[ld]:t.REPEAT,[vi]:t.CLAMP_TO_EDGE,[cd]:t.MIRRORED_REPEAT},ie={[Rn]:t.NEAREST,[$p]:t.NEAREST_MIPMAP_NEAREST,[Lo]:t.NEAREST_MIPMAP_LINEAR,[Dn]:t.LINEAR,[_u]:t.LINEAR_MIPMAP_NEAREST,[Yr]:t.LINEAR_MIPMAP_LINEAR},he={[xE]:t.NEVER,[AE]:t.ALWAYS,[SE]:t.LESS,[ry]:t.LEQUAL,[ME]:t.EQUAL,[TE]:t.GEQUAL,[EE]:t.GREATER,[wE]:t.NOTEQUAL};function Ze(A,w,q){if(w.type===ki&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Dn||w.magFilter===_u||w.magFilter===Lo||w.magFilter===Yr||w.minFilter===Dn||w.minFilter===_u||w.minFilter===Lo||w.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(t.texParameteri(A,t.TEXTURE_WRAP_S,Z[w.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Z[w.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Z[w.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ie[w.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ie[w.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==vi||w.wrapT!==vi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(w.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(w.minFilter)),w.minFilter!==Rn&&w.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Rn||w.minFilter!==Lo&&w.minFilter!==Yr||w.type===ki&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===ya&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(A,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function J(A,w){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",b));const _e=w.source;let fe=h.get(_e);fe===void 0&&(fe={},h.set(_e,fe));const le=te(w);if(le!==A.__cacheKey){fe[le]===void 0&&(fe[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,q=!0),fe[le].usedTimes++;const Fe=fe[A.__cacheKey];Fe!==void 0&&(fe[A.__cacheKey].usedTimes--,Fe.usedTimes===0&&x(w)),A.__cacheKey=le,A.__webglTexture=fe[le].texture}return q}function ae(A,w,q){let _e=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(_e=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(_e=t.TEXTURE_3D);const fe=J(A,w),le=w.source;n.bindTexture(_e,A.__webglTexture,t.TEXTURE0+q);const Fe=i.get(le);if(le.version!==Fe.__version||fe===!0){n.activeTexture(t.TEXTURE0+q);const we=Ut.getPrimaries(Ut.workingColorSpace),Pe=w.colorSpace===ti?null:Ut.getPrimaries(w.colorSpace),pe=w.colorSpace===ti||we===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const at=u(w)&&p(w.image)===!1;let de=_(w.image,at,!1,r.maxTextureSize);de=Ye(w,de);const At=p(de)||a,lt=s.convert(w.format,w.colorSpace);let nt=s.convert(w.type),Xe=M(w.internalFormat,lt,nt,w.colorSpace,w.isVideoTexture);Ze(_e,w,At);let Oe;const rt=w.mipmaps,wt=a&&w.isVideoTexture!==!0&&Xe!==ty,xt=Fe.__version===void 0||fe===!0,dt=le.dataReady,je=L(w,de,At);if(w.isDepthTexture)Xe=t.DEPTH_COMPONENT,a?w.type===ki?Xe=t.DEPTH_COMPONENT32F:w.type===hr?Xe=t.DEPTH_COMPONENT24:w.type===Zr?Xe=t.DEPTH24_STENCIL8:Xe=t.DEPTH_COMPONENT16:w.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Qr&&Xe===t.DEPTH_COMPONENT&&w.type!==gh&&w.type!==hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=hr,nt=s.convert(w.type)),w.format===fo&&Xe===t.DEPTH_COMPONENT&&(Xe=t.DEPTH_STENCIL,w.type!==Zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Zr,nt=s.convert(w.type))),xt&&(wt?n.texStorage2D(t.TEXTURE_2D,1,Xe,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Xe,de.width,de.height,0,lt,nt,null));else if(w.isDataTexture)if(rt.length>0&&At){wt&&xt&&n.texStorage2D(t.TEXTURE_2D,je,Xe,rt[0].width,rt[0].height);for(let P=0,ge=rt.length;P<ge;P++)Oe=rt[P],wt?dt&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,Oe.width,Oe.height,lt,nt,Oe.data):n.texImage2D(t.TEXTURE_2D,P,Xe,Oe.width,Oe.height,0,lt,nt,Oe.data);w.generateMipmaps=!1}else wt?(xt&&n.texStorage2D(t.TEXTURE_2D,je,Xe,de.width,de.height),dt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,lt,nt,de.data)):n.texImage2D(t.TEXTURE_2D,0,Xe,de.width,de.height,0,lt,nt,de.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){wt&&xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Xe,rt[0].width,rt[0].height,de.depth);for(let P=0,ge=rt.length;P<ge;P++)Oe=rt[P],w.format!==yi?lt!==null?wt?dt&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,P,0,0,0,Oe.width,Oe.height,de.depth,lt,Oe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,P,Xe,Oe.width,Oe.height,de.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?dt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,P,0,0,0,Oe.width,Oe.height,de.depth,lt,nt,Oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,P,Xe,Oe.width,Oe.height,de.depth,0,lt,nt,Oe.data)}else{wt&&xt&&n.texStorage2D(t.TEXTURE_2D,je,Xe,rt[0].width,rt[0].height);for(let P=0,ge=rt.length;P<ge;P++)Oe=rt[P],w.format!==yi?lt!==null?wt?dt&&n.compressedTexSubImage2D(t.TEXTURE_2D,P,0,0,Oe.width,Oe.height,lt,Oe.data):n.compressedTexImage2D(t.TEXTURE_2D,P,Xe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?dt&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,Oe.width,Oe.height,lt,nt,Oe.data):n.texImage2D(t.TEXTURE_2D,P,Xe,Oe.width,Oe.height,0,lt,nt,Oe.data)}else if(w.isDataArrayTexture)wt?(xt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Xe,de.width,de.height,de.depth),dt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,lt,nt,de.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Xe,de.width,de.height,de.depth,0,lt,nt,de.data);else if(w.isData3DTexture)wt?(xt&&n.texStorage3D(t.TEXTURE_3D,je,Xe,de.width,de.height,de.depth),dt&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,lt,nt,de.data)):n.texImage3D(t.TEXTURE_3D,0,Xe,de.width,de.height,de.depth,0,lt,nt,de.data);else if(w.isFramebufferTexture){if(xt)if(wt)n.texStorage2D(t.TEXTURE_2D,je,Xe,de.width,de.height);else{let P=de.width,ge=de.height;for(let xe=0;xe<je;xe++)n.texImage2D(t.TEXTURE_2D,xe,Xe,P,ge,0,lt,nt,null),P>>=1,ge>>=1}}else if(rt.length>0&&At){wt&&xt&&n.texStorage2D(t.TEXTURE_2D,je,Xe,rt[0].width,rt[0].height);for(let P=0,ge=rt.length;P<ge;P++)Oe=rt[P],wt?dt&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,lt,nt,Oe):n.texImage2D(t.TEXTURE_2D,P,Xe,lt,nt,Oe);w.generateMipmaps=!1}else wt?(xt&&n.texStorage2D(t.TEXTURE_2D,je,Xe,de.width,de.height),dt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,lt,nt,de)):n.texImage2D(t.TEXTURE_2D,0,Xe,lt,nt,de);m(w,At)&&v(_e),Fe.__version=le.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Ae(A,w,q){if(w.image.length!==6)return;const _e=J(A,w),fe=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+q);const le=i.get(fe);if(fe.version!==le.__version||_e===!0){n.activeTexture(t.TEXTURE0+q);const Fe=Ut.getPrimaries(Ut.workingColorSpace),we=w.colorSpace===ti?null:Ut.getPrimaries(w.colorSpace),Pe=w.colorSpace===ti||Fe===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const pe=w.isCompressedTexture||w.image[0].isCompressedTexture,at=w.image[0]&&w.image[0].isDataTexture,de=[];for(let P=0;P<6;P++)!pe&&!at?de[P]=_(w.image[P],!1,!0,r.maxCubemapSize):de[P]=at?w.image[P].image:w.image[P],de[P]=Ye(w,de[P]);const At=de[0],lt=p(At)||a,nt=s.convert(w.format,w.colorSpace),Xe=s.convert(w.type),Oe=M(w.internalFormat,nt,Xe,w.colorSpace),rt=a&&w.isVideoTexture!==!0,wt=le.__version===void 0||_e===!0,xt=fe.dataReady;let dt=L(w,At,lt);Ze(t.TEXTURE_CUBE_MAP,w,lt);let je;if(pe){rt&&wt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,dt,Oe,At.width,At.height);for(let P=0;P<6;P++){je=de[P].mipmaps;for(let ge=0;ge<je.length;ge++){const xe=je[ge];w.format!==yi?nt!==null?rt?xt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge,0,0,xe.width,xe.height,nt,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge,Oe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?xt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge,0,0,xe.width,xe.height,nt,Xe,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge,Oe,xe.width,xe.height,0,nt,Xe,xe.data)}}}else{je=w.mipmaps,rt&&wt&&(je.length>0&&dt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,dt,Oe,de[0].width,de[0].height));for(let P=0;P<6;P++)if(at){rt?xt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,de[P].width,de[P].height,nt,Xe,de[P].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Oe,de[P].width,de[P].height,0,nt,Xe,de[P].data);for(let ge=0;ge<je.length;ge++){const Ne=je[ge].image[P].image;rt?xt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge+1,0,0,Ne.width,Ne.height,nt,Xe,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge+1,Oe,Ne.width,Ne.height,0,nt,Xe,Ne.data)}}else{rt?xt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,nt,Xe,de[P]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Oe,nt,Xe,de[P]);for(let ge=0;ge<je.length;ge++){const xe=je[ge];rt?xt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge+1,0,0,nt,Xe,xe.image[P]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge+1,Oe,nt,Xe,xe.image[P])}}}m(w,lt)&&v(t.TEXTURE_CUBE_MAP),le.__version=fe.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Ue(A,w,q,_e,fe,le){const Fe=s.convert(q.format,q.colorSpace),we=s.convert(q.type),Pe=M(q.internalFormat,Fe,we,q.colorSpace);if(!i.get(w).__hasExternalTextures){const at=Math.max(1,w.width>>le),de=Math.max(1,w.height>>le);fe===t.TEXTURE_3D||fe===t.TEXTURE_2D_ARRAY?n.texImage3D(fe,le,Pe,at,de,w.depth,0,Fe,we,null):n.texImage2D(fe,le,Pe,at,de,0,Fe,we,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ve(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,_e,fe,i.get(q).__webglTexture,0,tt(w)):(fe===t.TEXTURE_2D||fe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,_e,fe,i.get(q).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(A,w,q){if(t.bindRenderbuffer(t.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let _e=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(q||Ve(w)){const fe=w.depthTexture;fe&&fe.isDepthTexture&&(fe.type===ki?_e=t.DEPTH_COMPONENT32F:fe.type===hr&&(_e=t.DEPTH_COMPONENT24));const le=tt(w);Ve(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,_e,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,_e,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,_e,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const _e=tt(w);q&&Ve(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,t.DEPTH24_STENCIL8,w.width,w.height):Ve(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const _e=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let fe=0;fe<_e.length;fe++){const le=_e[fe],Fe=s.convert(le.format,le.colorSpace),we=s.convert(le.type),Pe=M(le.internalFormat,Fe,we,le.colorSpace),pe=tt(w);q&&Ve(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,Pe,w.width,w.height):Ve(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,Pe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ke(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Q(w.depthTexture,0);const _e=i.get(w.depthTexture).__webglTexture,fe=tt(w);if(w.depthTexture.format===Qr)Ve(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,_e,0);else if(w.depthTexture.format===fo)Ve(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function yt(A){const w=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ke(w.__webglFramebuffer,A)}else if(q){w.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[_e]),w.__webglDepthbuffer[_e]=t.createRenderbuffer(),Qe(w.__webglDepthbuffer[_e],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Qe(w.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ke(A,w,q){const _e=i.get(A);w!==void 0&&Ue(_e.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&yt(A)}function W(A){const w=A.texture,q=i.get(A),_e=i.get(w);A.addEventListener("dispose",G),A.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture()),_e.__version=w.version,o.memory.textures++);const fe=A.isWebGLCubeRenderTarget===!0,le=A.isWebGLMultipleRenderTargets===!0,Fe=p(A)||a;if(fe){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(a&&w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let Pe=0;Pe<w.mipmaps.length;Pe++)q.__webglFramebuffer[we][Pe]=t.createFramebuffer()}else q.__webglFramebuffer[we]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)q.__webglFramebuffer[we]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const we=A.texture;for(let Pe=0,pe=we.length;Pe<pe;Pe++){const at=i.get(we[Pe]);at.__webglTexture===void 0&&(at.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ve(A)===!1){const we=le?w:[w];q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Pe=0;Pe<we.length;Pe++){const pe=we[Pe];q.__webglColorRenderbuffer[Pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[Pe]);const at=s.convert(pe.format,pe.colorSpace),de=s.convert(pe.type),At=M(pe.internalFormat,at,de,pe.colorSpace,A.isXRRenderTarget===!0),lt=tt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,lt,At,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,q.__webglColorRenderbuffer[Pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),Qe(q.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,_e.__webglTexture),Ze(t.TEXTURE_CUBE_MAP,w,Fe);for(let we=0;we<6;we++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)Ue(q.__webglFramebuffer[we][Pe],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+we,Pe);else Ue(q.__webglFramebuffer[we],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);m(w,Fe)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const we=A.texture;for(let Pe=0,pe=we.length;Pe<pe;Pe++){const at=we[Pe],de=i.get(at);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),Ze(t.TEXTURE_2D,at,Fe),Ue(q.__webglFramebuffer,A,at,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,0),m(at,Fe)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let we=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?we=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(we,_e.__webglTexture),Ze(we,w,Fe),a&&w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)Ue(q.__webglFramebuffer[Pe],A,w,t.COLOR_ATTACHMENT0,we,Pe);else Ue(q.__webglFramebuffer,A,w,t.COLOR_ATTACHMENT0,we,0);m(w,Fe)&&v(we),n.unbindTexture()}A.depthBuffer&&yt(A)}function Gt(A){const w=p(A)||a,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let _e=0,fe=q.length;_e<fe;_e++){const le=q[_e];if(m(le,w)){const Fe=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(le).__webglTexture;n.bindTexture(Fe,we),v(Fe),n.unbindTexture()}}}function Be(A){if(a&&A.samples>0&&Ve(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,_e=A.height;let fe=t.COLOR_BUFFER_BIT;const le=[],Fe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(A),Pe=A.isWebGLMultipleRenderTargets===!0;if(Pe)for(let pe=0;pe<w.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){le.push(t.COLOR_ATTACHMENT0+pe),A.depthBuffer&&le.push(Fe);const at=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(at===!1&&(A.depthBuffer&&(fe|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(fe|=t.STENCIL_BUFFER_BIT)),Pe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[pe]),at===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Fe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Fe])),Pe){const de=i.get(w[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,q,_e,0,0,q,_e,fe,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Pe)for(let pe=0;pe<w.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,we.__webglColorRenderbuffer[pe]);const at=i.get(w[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,at,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function tt(A){return Math.min(r.maxSamples,A.samples)}function Ve(A){const w=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ct(A){const w=o.render.frame;f.get(A)!==w&&(f.set(A,w),A.update())}function Ye(A,w){const q=A.colorSpace,_e=A.format,fe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===fd||q!==$i&&q!==ti&&(Ut.getTransfer(q)===zt?a===!1?e.has("EXT_sRGB")===!0&&_e===yi?(A.format=fd,A.minFilter=Dn,A.generateMipmaps=!1):w=oy.sRGBToLinear(w):(_e!==yi||fe!==Tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}this.allocateTextureUnit=z,this.resetTextureUnits=ue,this.setTexture2D=Q,this.setTexture2DArray=re,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=Ke,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ve}function bb(t,e,n){const i=n.isWebGL2;function r(s,o=ti){let a;const l=Ut.getTransfer(o);if(s===Tr)return t.UNSIGNED_BYTE;if(s===K0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Z0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===cE)return t.BYTE;if(s===uE)return t.SHORT;if(s===gh)return t.UNSIGNED_SHORT;if(s===q0)return t.INT;if(s===hr)return t.UNSIGNED_INT;if(s===ki)return t.FLOAT;if(s===ya)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===fE)return t.ALPHA;if(s===yi)return t.RGBA;if(s===dE)return t.LUMINANCE;if(s===hE)return t.LUMINANCE_ALPHA;if(s===Qr)return t.DEPTH_COMPONENT;if(s===fo)return t.DEPTH_STENCIL;if(s===fd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===pE)return t.RED;if(s===Q0)return t.RED_INTEGER;if(s===mE)return t.RG;if(s===J0)return t.RG_INTEGER;if(s===ey)return t.RGBA_INTEGER;if(s===xu||s===Su||s===Mu||s===Eu)if(l===zt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===xu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===xu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Su)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Eu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yp||s===qp||s===Kp||s===Zp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Yp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ty)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qp||s===Jp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Qp)return l===zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Jp)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===em||s===tm||s===nm||s===im||s===rm||s===sm||s===om||s===am||s===lm||s===cm||s===um||s===fm||s===dm||s===hm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===em)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tm)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nm)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===im)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rm)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sm)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===om)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===am)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lm)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cm)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===um)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fm)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dm)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hm)return l===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wu||s===pm||s===mm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===wu)return l===zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gE||s===gm||s===vm||s===ym)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===wu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===gm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ym)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Cb extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ti extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rb={type:"move"};class Yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),g=.02,y=.005;c.inputState.pinching&&h>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ti;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Pr({extensions:{fragDepth:!0},vertexShader:Pb,fragmentShader:Lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ri(new po(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class Ib extends xo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,g=null,y=null;const _=new Nb,p=n.getContextAttributes();let u=null,m=null;const v=[],M=[],L=new vt;let C=null;const b=new ei;b.layers.enable(1),b.viewport=new cn;const G=new ei;G.layers.enable(2),G.viewport=new cn;const ne=[b,G],x=new Cb;x.layers.enable(1),x.layers.enable(2);let R=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=v[J];return ae===void 0&&(ae=new Yu,v[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=v[J];return ae===void 0&&(ae=new Yu,v[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=v[J];return ae===void 0&&(ae=new Yu,v[J]=ae),ae.getHandSpace()};function ue(J){const ae=M.indexOf(J.inputSource);if(ae===-1)return;const Ae=v[ae];Ae!==void 0&&(Ae.update(J.inputSource,J.frame,c||o),Ae.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",te);for(let J=0;J<v.length;J++){const ae=M[J];ae!==null&&(M[J]=null,v[J].disconnect(ae))}R=null,ee=null,_.reset(),e.setRenderTarget(u),g=null,h=null,d=null,r=null,m=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",z),r.addEventListener("inputsourceschange",te),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new os(g.framebufferWidth,g.framebufferHeight,{format:yi,type:Tr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ae=null,Ae=null,Ue=null;p.depth&&(Ue=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=p.stencil?fo:Qr,Ae=p.stencil?Zr:hr);const Qe={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Qe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new os(h.textureWidth,h.textureHeight,{format:yi,type:Tr,depthTexture:new xy(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ke=e.properties.get(m);ke.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(J){for(let ae=0;ae<J.removed.length;ae++){const Ae=J.removed[ae],Ue=M.indexOf(Ae);Ue>=0&&(M[Ue]=null,v[Ue].disconnect(Ae))}for(let ae=0;ae<J.added.length;ae++){const Ae=J.added[ae];let Ue=M.indexOf(Ae);if(Ue===-1){for(let ke=0;ke<v.length;ke++)if(ke>=M.length){M.push(Ae),Ue=ke;break}else if(M[ke]===null){M[ke]=Ae,Ue=ke;break}if(Ue===-1)break}const Qe=v[Ue];Qe&&Qe.connect(Ae)}}const Q=new V,re=new V;function H(J,ae,Ae){Q.setFromMatrixPosition(ae.matrixWorld),re.setFromMatrixPosition(Ae.matrixWorld);const Ue=Q.distanceTo(re),Qe=ae.projectionMatrix.elements,ke=Ae.projectionMatrix.elements,yt=Qe[14]/(Qe[10]-1),Ke=Qe[14]/(Qe[10]+1),W=(Qe[9]+1)/Qe[5],Gt=(Qe[9]-1)/Qe[5],Be=(Qe[8]-1)/Qe[0],tt=(ke[8]+1)/ke[0],Ve=yt*Be,ct=yt*tt,Ye=Ue/(-Be+tt),A=Ye*-Be;ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(A),J.translateZ(Ye),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const w=yt+Ye,q=Ke+Ye,_e=Ve-A,fe=ct+(Ue-A),le=W*Ke/q*w,Fe=Gt*Ke/q*w;J.projectionMatrix.makePerspective(_e,fe,le,Fe,w,q),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function Y(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;_.texture!==null&&(J.near=_.depthNear,J.far=_.depthFar),x.near=G.near=b.near=J.near,x.far=G.far=b.far=J.far,(R!==x.near||ee!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,ee=x.far,b.near=R,b.far=ee,G.near=R,G.far=ee,b.updateProjectionMatrix(),G.updateProjectionMatrix(),J.updateProjectionMatrix());const ae=J.parent,Ae=x.cameras;Y(x,ae);for(let Ue=0;Ue<Ae.length;Ue++)Y(Ae[Ue],ae);Ae.length===2?H(x,b,G):x.projectionMatrix.copy(b.projectionMatrix),Z(J,x,ae)};function Z(J,ae,Ae){Ae===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=dd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null};let ie=null;function he(J,ae){if(f=ae.getViewerPose(c||o),y=ae,f!==null){const Ae=f.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let Ue=!1;Ae.length!==x.cameras.length&&(x.cameras.length=0,Ue=!0);for(let ke=0;ke<Ae.length;ke++){const yt=Ae[ke];let Ke=null;if(g!==null)Ke=g.getViewport(yt);else{const Gt=d.getViewSubImage(h,yt);Ke=Gt.viewport,ke===0&&(e.setRenderTargetTextures(m,Gt.colorTexture,h.ignoreDepthValues?void 0:Gt.depthStencilTexture),e.setRenderTarget(m))}let W=ne[ke];W===void 0&&(W=new ei,W.layers.enable(ke),W.viewport=new cn,ne[ke]=W),W.matrix.fromArray(yt.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(yt.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ke===0&&(x.matrix.copy(W.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ue===!0&&x.cameras.push(W)}const Qe=r.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")){const ke=d.getDepthInformation(Ae[0]);ke&&ke.isValid&&ke.texture&&_.init(e,ke,r.renderState)}}for(let Ae=0;Ae<v.length;Ae++){const Ue=M[Ae],Qe=v[Ae];Ue!==null&&Qe!==void 0&&Qe.update(Ue,ae,c||o)}_.render(e,x),ie&&ie(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),y=null}const Ze=new yy;Ze.setAnimationLoop(he),this.setAnimationLoop=function(J){ie=J},this.dispose=function(){}}}function Db(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,my(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,m,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&g(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),y(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,m,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Hn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Hn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const m=e.get(u).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,m,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*m,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,m){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Hn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const m=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ub(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const M=v.program;i.uniformBlockBinding(m,M)}function c(m,v){let M=r[m.id];M===void 0&&(y(m),M=f(m),r[m.id]=M,m.addEventListener("dispose",p));const L=v.program;i.updateUBOMapping(m,L);const C=e.render.frame;s[m.id]!==C&&(h(m),s[m.id]=C)}function f(m){const v=d();m.__bindingPointIndex=v;const M=t.createBuffer(),L=m.__size,C=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],M=m.uniforms,L=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,b=M.length;C<b;C++){const G=Array.isArray(M[C])?M[C]:[M[C]];for(let ne=0,x=G.length;ne<x;ne++){const R=G[ne];if(g(R,C,ne,L)===!0){const ee=R.__offset,ue=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let te=0;te<ue.length;te++){const Q=ue[te],re=_(Q);typeof Q=="number"||typeof Q=="boolean"?(R.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,ee+z,R.__data)):Q.isMatrix3?(R.__data[0]=Q.elements[0],R.__data[1]=Q.elements[1],R.__data[2]=Q.elements[2],R.__data[3]=0,R.__data[4]=Q.elements[3],R.__data[5]=Q.elements[4],R.__data[6]=Q.elements[5],R.__data[7]=0,R.__data[8]=Q.elements[6],R.__data[9]=Q.elements[7],R.__data[10]=Q.elements[8],R.__data[11]=0):(Q.toArray(R.__data,z),z+=re.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ee,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,M,L){const C=m.value,b=v+"_"+M;if(L[b]===void 0)return typeof C=="number"||typeof C=="boolean"?L[b]=C:L[b]=C.clone(),!0;{const G=L[b];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return L[b]=C,!0}else if(G.equals(C)===!1)return G.copy(C),!0}return!1}function y(m){const v=m.uniforms;let M=0;const L=16;for(let b=0,G=v.length;b<G;b++){const ne=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,R=ne.length;x<R;x++){const ee=ne[x],ue=Array.isArray(ee.value)?ee.value:[ee.value];for(let z=0,te=ue.length;z<te;z++){const Q=ue[z],re=_(Q),H=M%L;H!==0&&L-H<re.boundary&&(M+=L-H),ee.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=M,M+=re.storage}}}const C=M%L;return C>0&&(M+=L-C),m.__size=M,m.__cache={},this}function _(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function p(m){const v=m.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Ay{constructor(e={}){const{canvas:n=CE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const g=new Uint32Array(4),y=new Int32Array(4);let _=null,p=null;const u=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this._useLegacyLights=!1,this.toneMapping=wr,this.toneMappingExposure=1;const v=this;let M=!1,L=0,C=0,b=null,G=-1,ne=null;const x=new cn,R=new cn;let ee=null;const ue=new ht(0);let z=0,te=n.width,Q=n.height,re=1,H=null,Y=null;const Z=new cn(0,0,te,Q),ie=new cn(0,0,te,Q);let he=!1;const Ze=new yh;let J=!1,ae=!1,Ae=null;const Ue=new qt,Qe=new vt,ke=new V,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return b===null?re:1}let W=i;function Gt(T,B){for(let j=0;j<T.length;j++){const K=T[j],X=n.getContext(K,B);if(X!==null)return X}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mh}`),n.addEventListener("webglcontextlost",je,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",ge,!1),W===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),W=Gt(B,T),W===null)throw Gt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Be,tt,Ve,ct,Ye,A,w,q,_e,fe,le,Fe,we,Pe,pe,at,de,At,lt,nt,Xe,Oe,rt,wt;function xt(){Be=new G1(W),tt=new F1(W,Be,e),Be.init(tt),Oe=new bb(W,Be,tt),Ve=new Tb(W,Be,tt),ct=new j1(W),Ye=new fb,A=new Ab(W,Be,Ve,Ye,tt,Oe,ct),w=new k1(v),q=new H1(v),_e=new JE(W,tt),rt=new D1(W,Be,_e,tt),fe=new V1(W,_e,ct,rt),le=new q1(W,fe,_e,ct),lt=new Y1(W,tt,A),at=new O1(Ye),Fe=new ub(v,w,q,Be,tt,rt,at),we=new Db(v,Ye),Pe=new hb,pe=new _b(Be,tt),At=new I1(v,w,q,Ve,le,h,l),de=new wb(v,le,tt),wt=new Ub(W,ct,tt,Ve),nt=new U1(W,Be,ct,tt),Xe=new W1(W,Be,ct,tt),ct.programs=Fe.programs,v.capabilities=tt,v.extensions=Be,v.properties=Ye,v.renderLists=Pe,v.shadowMap=de,v.state=Ve,v.info=ct}xt();const dt=new Ib(v,W);this.xr=dt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=Be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(te,Q,!1))},this.getSize=function(T){return T.set(te,Q)},this.setSize=function(T,B,j=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,Q=B,n.width=Math.floor(T*re),n.height=Math.floor(B*re),j===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(te*re,Q*re).floor()},this.setDrawingBufferSize=function(T,B,j){te=T,Q=B,re=j,n.width=Math.floor(T*j),n.height=Math.floor(B*j),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,B,j,K){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,B,j,K),Ve.viewport(x.copy(Z).multiplyScalar(re).floor())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,B,j,K){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,B,j,K),Ve.scissor(R.copy(ie).multiplyScalar(re).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(T){Ve.setScissorTest(he=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(T=!0,B=!0,j=!0){let K=0;if(T){let X=!1;if(b!==null){const oe=b.texture.format;X=oe===ey||oe===J0||oe===Q0}if(X){const oe=b.texture.type,Re=oe===Tr||oe===hr||oe===gh||oe===Zr||oe===K0||oe===Z0,He=At.getClearColor(),et=At.getClearAlpha(),st=He.r,it=He.g,$e=He.b;Re?(g[0]=st,g[1]=it,g[2]=$e,g[3]=et,W.clearBufferuiv(W.COLOR,0,g)):(y[0]=st,y[1]=it,y[2]=$e,y[3]=et,W.clearBufferiv(W.COLOR,0,y))}else K|=W.COLOR_BUFFER_BIT}B&&(K|=W.DEPTH_BUFFER_BIT),j&&(K|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",je,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),Pe.dispose(),pe.dispose(),Ye.dispose(),w.dispose(),q.dispose(),le.dispose(),rt.dispose(),wt.dispose(),Fe.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",on),dt.removeEventListener("sessionend",Ie),Ae&&(Ae.dispose(),Ae=null),pt.stop()};function je(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=ct.autoReset,B=de.enabled,j=de.autoUpdate,K=de.needsUpdate,X=de.type;xt(),ct.autoReset=T,de.enabled=B,de.autoUpdate=j,de.needsUpdate=K,de.type=X}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xe(T){const B=T.target;B.removeEventListener("dispose",xe),Ne(B)}function Ne(T){qe(T),Ye.remove(T)}function qe(T){const B=Ye.get(T).programs;B!==void 0&&(B.forEach(function(j){Fe.releaseProgram(j)}),T.isShaderMaterial&&Fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,j,K,X,oe){B===null&&(B=yt);const Re=X.isMesh&&X.matrixWorld.determinant()<0,He=ut(T,B,j,K,X);Ve.setMaterial(K,Re);let et=j.index,st=1;if(K.wireframe===!0){if(et=fe.getWireframeAttribute(j),et===void 0)return;st=2}const it=j.drawRange,$e=j.attributes.position;let mt=it.start*st,Rt=(it.start+it.count)*st;oe!==null&&(mt=Math.max(mt,oe.start*st),Rt=Math.min(Rt,(oe.start+oe.count)*st)),et!==null?(mt=Math.max(mt,0),Rt=Math.min(Rt,et.count)):$e!=null&&(mt=Math.max(mt,0),Rt=Math.min(Rt,$e.count));const Lt=Rt-mt;if(Lt<0||Lt===1/0)return;rt.setup(X,K,He,j,et);let _n,Et=nt;if(et!==null&&(_n=_e.get(et),Et=Xe,Et.setIndex(_n)),X.isMesh)K.wireframe===!0?(Ve.setLineWidth(K.wireframeLinewidth*Ke()),Et.setMode(W.LINES)):Et.setMode(W.TRIANGLES);else if(X.isLine){let S=K.linewidth;S===void 0&&(S=1),Ve.setLineWidth(S*Ke()),X.isLineSegments?Et.setMode(W.LINES):X.isLineLoop?Et.setMode(W.LINE_LOOP):Et.setMode(W.LINE_STRIP)}else X.isPoints?Et.setMode(W.POINTS):X.isSprite&&Et.setMode(W.TRIANGLES);if(X.isBatchedMesh)Et.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Et.renderInstances(mt,Lt,X.count);else if(j.isInstancedBufferGeometry){const S=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,O=Math.min(j.instanceCount,S);Et.renderInstances(mt,Lt,O)}else Et.render(mt,Lt)};function Mt(T,B,j){T.transparent===!0&&T.side===gi&&T.forceSinglePass===!1?(T.side=Hn,T.needsUpdate=!0,Me(T,B,j),T.side=Rr,T.needsUpdate=!0,Me(T,B,j),T.side=gi):Me(T,B,j)}this.compile=function(T,B,j=null){j===null&&(j=T),p=pe.get(j),p.init(),m.push(p),j.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),T!==j&&T.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(v._useLegacyLights);const K=new Set;return T.traverse(function(X){const oe=X.material;if(oe)if(Array.isArray(oe))for(let Re=0;Re<oe.length;Re++){const He=oe[Re];Mt(He,j,X),K.add(He)}else Mt(oe,j,X),K.add(oe)}),m.pop(),p=null,K},this.compileAsync=function(T,B,j=null){const K=this.compile(T,B,j);return new Promise(X=>{function oe(){if(K.forEach(function(Re){Ye.get(Re).currentProgram.isReady()&&K.delete(Re)}),K.size===0){X(T);return}setTimeout(oe,10)}Be.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Tt=null;function Ot(T){Tt&&Tt(T)}function on(){pt.stop()}function Ie(){pt.start()}const pt=new yy;pt.setAnimationLoop(Ot),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(T){Tt=T,dt.setAnimationLoop(T),T===null?pt.stop():pt.start()},dt.addEventListener("sessionstart",on),dt.addEventListener("sessionend",Ie),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(B),B=dt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,b),p=pe.get(T,m.length),p.init(),m.push(p),Ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ze.setFromProjectionMatrix(Ue),ae=this.localClippingEnabled,J=at.init(this.clippingPlanes,ae),_=Pe.get(T,u.length),_.init(),u.push(_),Pt(T,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(H,Y),this.info.render.frame++,J===!0&&at.beginShadows();const j=p.state.shadowsArray;if(de.render(j,T,B),J===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),(dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1)&&At.render(_,T),p.setupLights(v._useLegacyLights),B.isArrayCamera){const K=B.cameras;for(let X=0,oe=K.length;X<oe;X++){const Re=K[X];se(_,T,Re,Re.viewport)}}else se(_,T,B);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(v,T,B),rt.resetDefaultState(),G=-1,ne=null,m.pop(),m.length>0?p=m[m.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Pt(T,B,j,K){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ze.intersectsSprite(T)){K&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);const Re=le.update(T),He=T.material;He.visible&&_.push(T,Re,He,j,ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ze.intersectsObject(T))){const Re=le.update(T),He=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ke.copy(Re.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(He)){const et=Re.groups;for(let st=0,it=et.length;st<it;st++){const $e=et[st],mt=He[$e.materialIndex];mt&&mt.visible&&_.push(T,Re,mt,j,ke.z,$e)}}else He.visible&&_.push(T,Re,He,j,ke.z,null)}}const oe=T.children;for(let Re=0,He=oe.length;Re<He;Re++)Pt(oe[Re],B,j,K)}function se(T,B,j,K){const X=T.opaque,oe=T.transmissive,Re=T.transparent;p.setupLightsView(j),J===!0&&at.setGlobalState(v.clippingPlanes,j),oe.length>0&&Ce(X,oe,B,j),K&&Ve.viewport(x.copy(K)),X.length>0&&Le(X,B,j),oe.length>0&&Le(oe,B,j),Re.length>0&&Le(Re,B,j),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Ce(T,B,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const oe=tt.isWebGL2;Ae===null&&(Ae=new os(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")?ya:Tr,minFilter:Yr,samples:oe?4:0})),v.getDrawingBufferSize(Qe),oe?Ae.setSize(Qe.x,Qe.y):Ae.setSize(hd(Qe.x),hd(Qe.y));const Re=v.getRenderTarget();v.setRenderTarget(Ae),v.getClearColor(ue),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear();const He=v.toneMapping;v.toneMapping=wr,Le(T,j,K),A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae);let et=!1;for(let st=0,it=B.length;st<it;st++){const $e=B[st],mt=$e.object,Rt=$e.geometry,Lt=$e.material,_n=$e.group;if(Lt.side===gi&&mt.layers.test(K.layers)){const Et=Lt.side;Lt.side=Hn,Lt.needsUpdate=!0,Ee(mt,j,K,Rt,Lt,_n),Lt.side=Et,Lt.needsUpdate=!0,et=!0}}et===!0&&(A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae)),v.setRenderTarget(Re),v.setClearColor(ue,z),v.toneMapping=He}function Le(T,B,j){const K=B.isScene===!0?B.overrideMaterial:null;for(let X=0,oe=T.length;X<oe;X++){const Re=T[X],He=Re.object,et=Re.geometry,st=K===null?Re.material:K,it=Re.group;He.layers.test(j.layers)&&Ee(He,B,j,et,st,it)}}function Ee(T,B,j,K,X,oe){T.onBeforeRender(v,B,j,K,X,oe),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(v,B,j,K,T,oe),X.transparent===!0&&X.side===gi&&X.forceSinglePass===!1?(X.side=Hn,X.needsUpdate=!0,v.renderBufferDirect(j,B,K,X,T,oe),X.side=Rr,X.needsUpdate=!0,v.renderBufferDirect(j,B,K,X,T,oe),X.side=gi):v.renderBufferDirect(j,B,K,X,T,oe),T.onAfterRender(v,B,j,K,X,oe)}function Me(T,B,j){B.isScene!==!0&&(B=yt);const K=Ye.get(T),X=p.state.lights,oe=p.state.shadowsArray,Re=X.state.version,He=Fe.getParameters(T,X.state,oe,B,j),et=Fe.getProgramCacheKey(He);let st=K.programs;K.environment=T.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(T.isMeshStandardMaterial?q:w).get(T.envMap||K.environment),st===void 0&&(T.addEventListener("dispose",xe),st=new Map,K.programs=st);let it=st.get(et);if(it!==void 0){if(K.currentProgram===it&&K.lightsStateVersion===Re)return Je(T,He),it}else He.uniforms=Fe.getUniforms(T),T.onBuild(j,He,v),T.onBeforeCompile(He,v),it=Fe.acquireProgram(He,et),st.set(et,it),K.uniforms=He.uniforms;const $e=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=at.uniform),Je(T,He),K.needsLights=It(T),K.lightsStateVersion=Re,K.needsLights&&($e.ambientLightColor.value=X.state.ambient,$e.lightProbe.value=X.state.probe,$e.directionalLights.value=X.state.directional,$e.directionalLightShadows.value=X.state.directionalShadow,$e.spotLights.value=X.state.spot,$e.spotLightShadows.value=X.state.spotShadow,$e.rectAreaLights.value=X.state.rectArea,$e.ltc_1.value=X.state.rectAreaLTC1,$e.ltc_2.value=X.state.rectAreaLTC2,$e.pointLights.value=X.state.point,$e.pointLightShadows.value=X.state.pointShadow,$e.hemisphereLights.value=X.state.hemi,$e.directionalShadowMap.value=X.state.directionalShadowMap,$e.directionalShadowMatrix.value=X.state.directionalShadowMatrix,$e.spotShadowMap.value=X.state.spotShadowMap,$e.spotLightMatrix.value=X.state.spotLightMatrix,$e.spotLightMap.value=X.state.spotLightMap,$e.pointShadowMap.value=X.state.pointShadowMap,$e.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=it,K.uniformsList=null,it}function We(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Ul.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Je(T,B){const j=Ye.get(T);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function ut(T,B,j,K,X){B.isScene!==!0&&(B=yt),A.resetTextureUnits();const oe=B.fog,Re=K.isMeshStandardMaterial?B.environment:null,He=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:$i,et=(K.isMeshStandardMaterial?q:w).get(K.envMap||Re),st=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,it=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),$e=!!j.morphAttributes.position,mt=!!j.morphAttributes.normal,Rt=!!j.morphAttributes.color;let Lt=wr;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Lt=v.toneMapping);const _n=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Et=_n!==void 0?_n.length:0,S=Ye.get(K),O=p.state.lights;if(J===!0&&(ae===!0||T!==ne)){const ce=T===ne&&K.id===G;at.setState(K,T,ce)}let I=!1;K.version===S.__version?(S.needsLights&&S.lightsStateVersion!==O.state.version||S.outputColorSpace!==He||X.isBatchedMesh&&S.batching===!1||!X.isBatchedMesh&&S.batching===!0||X.isInstancedMesh&&S.instancing===!1||!X.isInstancedMesh&&S.instancing===!0||X.isSkinnedMesh&&S.skinning===!1||!X.isSkinnedMesh&&S.skinning===!0||X.isInstancedMesh&&S.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&S.instancingColor===!1&&X.instanceColor!==null||S.envMap!==et||K.fog===!0&&S.fog!==oe||S.numClippingPlanes!==void 0&&(S.numClippingPlanes!==at.numPlanes||S.numIntersection!==at.numIntersection)||S.vertexAlphas!==st||S.vertexTangents!==it||S.morphTargets!==$e||S.morphNormals!==mt||S.morphColors!==Rt||S.toneMapping!==Lt||tt.isWebGL2===!0&&S.morphTargetsCount!==Et)&&(I=!0):(I=!0,S.__version=K.version);let D=S.currentProgram;I===!0&&(D=Me(K,B,X));let $=!1,k=!1,N=!1;const F=D.getUniforms(),ye=S.uniforms;if(Ve.useProgram(D.program)&&($=!0,k=!0,N=!0),K.id!==G&&(G=K.id,k=!0),$||ne!==T){F.setValue(W,"projectionMatrix",T.projectionMatrix),F.setValue(W,"viewMatrix",T.matrixWorldInverse);const ce=F.map.cameraPosition;ce!==void 0&&ce.setValue(W,ke.setFromMatrixPosition(T.matrixWorld)),tt.logarithmicDepthBuffer&&F.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&F.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),ne!==T&&(ne=T,k=!0,N=!0)}if(X.isSkinnedMesh){F.setOptional(W,X,"bindMatrix"),F.setOptional(W,X,"bindMatrixInverse");const ce=X.skeleton;ce&&(tt.floatVertexTextures?(ce.boneTexture===null&&ce.computeBoneTexture(),F.setValue(W,"boneTexture",ce.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(F.setOptional(W,X,"batchingTexture"),F.setValue(W,"batchingTexture",X._matricesTexture,A));const ve=j.morphAttributes;if((ve.position!==void 0||ve.normal!==void 0||ve.color!==void 0&&tt.isWebGL2===!0)&&lt.update(X,j,D),(k||S.receiveShadow!==X.receiveShadow)&&(S.receiveShadow=X.receiveShadow,F.setValue(W,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ye.envMap.value=et,ye.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),k&&(F.setValue(W,"toneMappingExposure",v.toneMappingExposure),S.needsLights&&ft(ye,N),oe&&K.fog===!0&&we.refreshFogUniforms(ye,oe),we.refreshMaterialUniforms(ye,K,re,Q,Ae),Ul.upload(W,We(S),ye,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ul.upload(W,We(S),ye,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&F.setValue(W,"center",X.center),F.setValue(W,"modelViewMatrix",X.modelViewMatrix),F.setValue(W,"normalMatrix",X.normalMatrix),F.setValue(W,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ce=K.uniformsGroups;for(let me=0,ze=ce.length;me<ze;me++)if(tt.isWebGL2){const Ge=ce[me];wt.update(Ge,D),wt.bind(Ge,D)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return D}function ft(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function It(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,B,j){Ye.get(T.texture).__webglTexture=B,Ye.get(T.depthTexture).__webglTexture=j;const K=Ye.get(T);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const j=Ye.get(T);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,j=0){b=T,L=B,C=j;let K=!0,X=null,oe=!1,Re=!1;if(T){const et=Ye.get(T);et.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(W.FRAMEBUFFER,null),K=!1):et.__webglFramebuffer===void 0?A.setupRenderTarget(T):et.__hasExternalTextures&&A.rebindTextures(T,Ye.get(T.texture).__webglTexture,Ye.get(T.depthTexture).__webglTexture);const st=T.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Re=!0);const it=Ye.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(it[B])?X=it[B][j]:X=it[B],oe=!0):tt.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?X=Ye.get(T).__webglMultisampledFramebuffer:Array.isArray(it)?X=it[j]:X=it,x.copy(T.viewport),R.copy(T.scissor),ee=T.scissorTest}else x.copy(Z).multiplyScalar(re).floor(),R.copy(ie).multiplyScalar(re).floor(),ee=he;if(Ve.bindFramebuffer(W.FRAMEBUFFER,X)&&tt.drawBuffers&&K&&Ve.drawBuffers(T,X),Ve.viewport(x),Ve.scissor(R),Ve.setScissorTest(ee),oe){const et=Ye.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+B,et.__webglTexture,j)}else if(Re){const et=Ye.get(T.texture),st=B||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,et.__webglTexture,j||0,st)}G=-1},this.readRenderTargetPixels=function(T,B,j,K,X,oe,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ye.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(He=He[Re]),He){Ve.bindFramebuffer(W.FRAMEBUFFER,He);try{const et=T.texture,st=et.format,it=et.type;if(st!==yi&&Oe.convert(st)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=it===ya&&(Be.has("EXT_color_buffer_half_float")||tt.isWebGL2&&Be.has("EXT_color_buffer_float"));if(it!==Tr&&Oe.convert(it)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===ki&&(tt.isWebGL2||Be.has("OES_texture_float")||Be.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-K&&j>=0&&j<=T.height-X&&W.readPixels(B,j,K,X,Oe.convert(st),Oe.convert(it),oe)}finally{const et=b!==null?Ye.get(b).__webglFramebuffer:null;Ve.bindFramebuffer(W.FRAMEBUFFER,et)}}},this.copyFramebufferToTexture=function(T,B,j=0){const K=Math.pow(2,-j),X=Math.floor(B.image.width*K),oe=Math.floor(B.image.height*K);A.setTexture2D(B,0),W.copyTexSubImage2D(W.TEXTURE_2D,j,0,0,T.x,T.y,X,oe),Ve.unbindTexture()},this.copyTextureToTexture=function(T,B,j,K=0){const X=B.image.width,oe=B.image.height,Re=Oe.convert(j.format),He=Oe.convert(j.type);A.setTexture2D(j,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment),B.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,K,T.x,T.y,X,oe,Re,He,B.image.data):B.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,K,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Re,B.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,K,T.x,T.y,Re,He,B.image),K===0&&j.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(T,B,j,K,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const oe=T.max.x-T.min.x+1,Re=T.max.y-T.min.y+1,He=T.max.z-T.min.z+1,et=Oe.convert(K.format),st=Oe.convert(K.type);let it;if(K.isData3DTexture)A.setTexture3D(K,0),it=W.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),it=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);const $e=W.getParameter(W.UNPACK_ROW_LENGTH),mt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Rt=W.getParameter(W.UNPACK_SKIP_PIXELS),Lt=W.getParameter(W.UNPACK_SKIP_ROWS),_n=W.getParameter(W.UNPACK_SKIP_IMAGES),Et=j.isCompressedTexture?j.mipmaps[X]:j.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Et.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Et.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,T.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,T.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?W.texSubImage3D(it,X,B.x,B.y,B.z,oe,Re,He,et,st,Et.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(it,X,B.x,B.y,B.z,oe,Re,He,et,Et.data)):W.texSubImage3D(it,X,B.x,B.y,B.z,oe,Re,He,et,st,Et),W.pixelStorei(W.UNPACK_ROW_LENGTH,$e),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,mt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Rt),W.pixelStorei(W.UNPACK_SKIP_ROWS,Lt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,_n),X===0&&K.generateMipmaps&&W.generateMipmap(it),Ve.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Ve.unbindTexture()},this.resetState=function(){L=0,C=0,b=null,Ve.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===vh?"display-p3":"srgb",n.unpackColorSpace=Ut.workingColorSpace===Oc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===hn?Jr:ny}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jr?hn:$i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Fb extends Ay{}Fb.prototype.isWebGL1Renderer=!0;class Ob extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class kb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=ud,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ar()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return es("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new V;class pc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)An.fromBufferAttribute(this,n),An.applyMatrix4(e),this.setXYZ(n,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)An.fromBufferAttribute(this,n),An.applyNormalMatrix(e),this.setXYZ(n,An.x,An.y,An.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)An.fromBufferAttribute(this,n),An.transformDirection(e),this.setXYZ(n,An.x,An.y,An.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=bi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=bi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=bi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=bi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new pn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class md extends us{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Cs;const Fo=new V,Rs=new V,Ps=new V,Ls=new vt,Oo=new vt,by=new qt,dl=new V,ko=new V,hl=new V,lg=new vt,qu=new vt,cg=new vt;class ug extends nn{constructor(e=new md){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new mn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new kb(n,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new pc(i,3,0,!1)),Cs.setAttribute("uv",new pc(i,2,3,!1))}this.geometry=Cs,this.material=e,this.center=new vt(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),by.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Ps.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;pl(dl.set(-.5,-.5,0),Ps,o,Rs,r,s),pl(ko.set(.5,-.5,0),Ps,o,Rs,r,s),pl(hl.set(.5,.5,0),Ps,o,Rs,r,s),lg.set(0,0),qu.set(1,0),cg.set(1,1);let a=e.ray.intersectTriangle(dl,ko,hl,!1,Fo);if(a===null&&(pl(ko.set(-.5,.5,0),Ps,o,Rs,r,s),qu.set(0,1),a=e.ray.intersectTriangle(dl,hl,ko,!1,Fo),a===null))return;const l=e.ray.origin.distanceTo(Fo);l<e.near||l>e.far||n.push({distance:l,point:Fo.clone(),uv:ni.getInterpolation(Fo,dl,ko,hl,lg,qu,cg,new vt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pl(t,e,n,i,r,s){Ls.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Oo.x=s*Ls.x-r*Ls.y,Oo.y=r*Ls.x+s*Ls.y):Oo.copy(Ls),t.copy(e),t.x+=Oo.x,t.y+=Oo.y,t.applyMatrix4(by)}class Zn extends us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fg=new V,dg=new V,hg=new qt,Ku=new cy,ml=new kc;class gd extends nn{constructor(e=new mn,n=new Zn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)fg.fromBufferAttribute(n,r-1),dg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=fg.distanceTo(dg);e.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(r),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;hg.copy(r).invert(),Ku.copy(e.ray).applyMatrix4(hg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new V,f=new V,d=new V,h=new V,g=this.isLineSegments?2:1,y=i.index,p=i.attributes.position;if(y!==null){const u=Math.max(0,o.start),m=Math.min(y.count,o.start+o.count);for(let v=u,M=m-1;v<M;v+=g){const L=y.getX(v),C=y.getX(v+1);if(c.fromBufferAttribute(p,L),f.fromBufferAttribute(p,C),Ku.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(h);G<e.near||G>e.far||n.push({distance:G,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let v=u,M=m-1;v<M;v+=g){if(c.fromBufferAttribute(p,v),f.fromBufferAttribute(p,v+1),Ku.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||n.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const pg=new V,mg=new V;class Qo extends gd{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)pg.fromBufferAttribute(n,r),mg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+pg.distanceTo(mg);e.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gg extends Ln{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const gl=new V,vl=new V,Zu=new V,yl=new ni;class zb extends mn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Dl*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},g=[];for(let y=0;y<l;y+=3){o?(c[0]=o.getX(y),c[1]=o.getX(y+1),c[2]=o.getX(y+2)):(c[0]=y,c[1]=y+1,c[2]=y+2);const{a:_,b:p,c:u}=yl;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),yl.getNormal(Zu),d[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let m=0;m<3;m++){const v=(m+1)%3,M=d[m],L=d[v],C=yl[f[m]],b=yl[f[v]],G=`${M}_${L}`,ne=`${L}_${M}`;ne in h&&h[ne]?(Zu.dot(h[ne].normal)<=s&&(g.push(C.x,C.y,C.z),g.push(b.x,b.y,b.z)),h[ne]=null):G in h||(h[G]={index0:c[m],index1:c[v],normal:Zu.clone()})}}for(const y in h)if(h[y]){const{index0:_,index1:p}=h[y];gl.fromBufferAttribute(a,_),vl.fromBufferAttribute(a,p),g.push(gl.x,gl.y,gl.z),g.push(vl.x,vl.y,vl.z)}this.setAttribute("position",new vn(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xh extends mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new V,h=new V,g=[],y=[],_=[],p=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let L=0;L<=n;L++){const C=L/n;d.x=-e*Math.cos(r+C*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+v*a),y.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(C+M,1-v),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=f[u][m+1],M=f[u][m],L=f[u+1][m],C=f[u+1][m+1];(u!==0||o>0)&&g.push(v,M,C),(u!==i-1||l<Math.PI)&&g.push(M,L,C)}this.setIndex(g),this.setAttribute("position",new vn(y,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kr extends us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iy,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sh extends nn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Bb extends Sh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Qu=new qt,vg=new V,yg=new V;class Hb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;vg.setFromMatrixPosition(e.matrixWorld),n.position.copy(vg),yg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(yg),n.updateMatrixWorld(),Qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gb extends Hb{constructor(){super(new _y(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _g extends Sh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new Gb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vb extends Sh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wb extends Qo{constructor(e=10,n=10,i=4473924,r=8947848){i=new ht(i),r=new ht(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,g=0,y=-a;h<=n;h++,y+=o){l.push(-a,0,y,a,0,y),l.push(y,0,-a,y,0,a);const _=h===s?i:r;_.toArray(c,g),g+=3,_.toArray(c,g),g+=3,_.toArray(c,g),g+=3,_.toArray(c,g),g+=3}const f=new mn;f.setAttribute("position",new vn(l,3)),f.setAttribute("color",new vn(c,3));const d=new Zn({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class jb extends Qo{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new mn;r.setAttribute("position",new vn(n,3)),r.setAttribute("color",new vn(i,3));const s=new Zn({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new ht,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);function Ju(t,e,n){return t<e?e:t>n?n:t}function Xb(t){const e=U.useRef(null),n=U.useRef([]),i=U.useRef(null),r=U.useRef(0),s=U.useRef(null),o=U.useRef({enabled:!0,scale:1,background:!0}),a=U.useRef(!0),l=U.useRef(null),c=U.useRef([]),f=U.useRef([]),d=U.useRef(null),h=U.useRef([]),g=U.useRef({markers:!0,trail:!0,death:!0,ping:!0,terrain:!0,towns:!0});return U.useEffect(()=>{n.current=t.players,g.current.markers=!0},[t.players]),U.useEffect(()=>{i.current=t.focusTarget},[t.focusTarget]),U.useEffect(()=>{r.current=t.focusNonce},[t.focusNonce]),U.useEffect(()=>{s.current=typeof t.followPlayerId=="number"?t.followPlayerId:null},[t.followPlayerId]),U.useEffect(()=>{o.current=t.nameTags||{enabled:!0,scale:1,background:!0},g.current.markers=!0},[t.nameTags]),U.useEffect(()=>{a.current=t.showAimLines!==!1,g.current.markers=!0},[t.showAimLines]),U.useEffect(()=>{l.current=t.trail||null,g.current.trail=!0},[t.trail]),U.useEffect(()=>{c.current=Array.isArray(t.deathMarkers)?t.deathMarkers:[],g.current.death=!0},[t.deathMarkers]),U.useEffect(()=>{f.current=Array.isArray(t.pingMarkers)?t.pingMarkers:[],g.current.ping=!0},[t.pingMarkers]),U.useEffect(()=>{d.current=t.terrain||null,g.current.terrain=!0},[t.terrain]),U.useEffect(()=>{h.current=Array.isArray(t.towns)?t.towns:[],g.current.towns=!0},[t.towns]),U.useEffect(()=>{const y=e.current;if(!y)return;const _=y,p=new Ay({canvas:_,antialias:!0,powerPreference:"high-performance"});p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),p.shadowMap.enabled=!1;const u=new Ob;u.background=new ht(724761);const m=new ei(70,1,.1,2e4);m.position.set(0,25,60);const v=new Vb(16777215,.28);u.add(v);const M=new Bb(9418495,724761,.35);u.add(M);const L=new _g(16777215,1.15);L.position.set(150,260,130),L.castShadow=!1,u.add(L);const C=new _g(16777215,.35);C.position.set(-180,160,-120),u.add(C);const b=new Wb(2e3,200,3293278,1910328);u.add(b);const G=new jb(10);u.add(G);const ne=new Ti;u.add(ne);const x=new Ti;u.add(x);const R=new Ti;u.add(R);const ee=new Ti;u.add(ee);const ue=new Ti;u.add(ue);const z=new Ti;u.add(z);const te=new xh(.4,16,12),Q=new kr({color:16366681}),re=new kr({color:16757322}),H=new kr({color:9081766}),Y=new kr({color:2795519,emissive:731972,emissiveIntensity:.9}),Z=new kr({color:11818495,emissive:2752575,emissiveIntensity:.9}),ie=new Zn({color:16366681,transparent:!0,opacity:.8}),he=new Zn({color:16757322,transparent:!0,opacity:.8}),Ze=new Zn({color:9081766,transparent:!0,opacity:.7}),J=new Zn({color:2795519,transparent:!0,opacity:.95}),ae=new Zn({color:11818495,transparent:!0,opacity:.95}),Ae=new Zn({color:16366681,transparent:!0,opacity:.35}),Ue=new Zn({color:16730698,transparent:!0,opacity:.9}),Qe=new Zn({color:16366681,transparent:!0,opacity:.95}),ke=new kr({vertexColors:!0,roughness:1,metalness:0,side:gi,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),yt=new Zn({color:15134195,transparent:!0,opacity:.55}),Ke=new Map,W=new Map,Gt=new Map,Be=new Map,tt=new Map,Ve=new Map;let ct=null,Ye=null,A=null,w="",q=null;function _e(se){const Ce=se.material;Ce.map&&Ce.map.dispose(),Ce.dispose()}function fe(){const se=h.current;if(se===q)return;q=se;for(const Me of Gt.values())_e(Me),ue.remove(Me);if(Gt.clear(),!se||se.length===0)return;const Ce={scale:2.8,background:!1},Le=Me=>/^type:\s*\d+\s*$/i.test(Me.trim()),Ee=Me=>{let We=(Me||"").trim();return We=We.replace(/^#AR-MapLocation_/i,""),We=We.replace(/_/g," ").trim(),We};for(const Me of se){if(!Me||typeof Me.name!="string"||!Me.name)continue;const We=Ee(Me.name);if(!We||Le(We))continue;const Je=Me.pos;if(!Je||!Number.isFinite(Je.x)||!Number.isFinite(Je.y)||!Number.isFinite(Je.z))continue;const ut=Fe(We,Ce);we(ut,Ce),ut.frustumCulled=!1,ut.material.depthWrite=!1,ut.position.set(Je.x,Je.y+5,Je.z),ue.add(ut);const ft=Math.round(Je.x),It=Math.round(Je.z),T=`${We}|${ft}|${It}`;Gt.set(T,ut)}}let le=null;function Fe(se,Ce){const Le=document.createElement("canvas"),Ee=Le.getContext("2d");if(!Ee){const oe=new gg(document.createElement("canvas")),Re=new md({map:oe,transparent:!0});return new ug(Re)}const Me=16;Ee.font=`600 ${Me}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;const We=10,Je=6,ut=Ee.measureText(se),ft=Math.ceil(ut.width),It=Math.max(8,ft+We*2),T=Me+Je*2,B=2;if(Le.width=It*B,Le.height=T*B,Ee.setTransform(B,0,0,B,0,0),Ee.clearRect(0,0,It,T),Ce.background){Ee.fillStyle="rgba(0,0,0,0.55)";const oe=6;Ee.beginPath(),Ee.moveTo(oe,0),Ee.lineTo(It-oe,0),Ee.quadraticCurveTo(It,0,It,oe),Ee.lineTo(It,T-oe),Ee.quadraticCurveTo(It,T,It-oe,T),Ee.lineTo(oe,T),Ee.quadraticCurveTo(0,T,0,T-oe),Ee.lineTo(0,oe),Ee.quadraticCurveTo(0,0,oe,0),Ee.closePath(),Ee.fill()}Ee.font=`600 ${Me}px system-ui, -apple-system, Segoe UI, Roboto, Arial`,Ee.fillStyle="rgba(255,255,255,0.95)",Ee.textBaseline="middle",Ee.fillText(se,We,Math.floor(T/2));const j=new gg(Le);j.needsUpdate=!0;const K=new md({map:j,transparent:!0,depthTest:!1}),X=new ug(K);return X.userData={canvas:Le,texture:j,text:se},X.center.set(.5,0),X}function we(se,Ce){const Ee=se.material.map,Me=Ee&&Ee.image;if(!Me||!Me.width||!Me.height){se.scale.set(2.5*Ce.scale,.8*Ce.scale,1);return}const We=Me.width/Me.height,Je=.85*Ce.scale,ut=Je*We;se.scale.set(ut,Je,1)}function Pe(se,Ce,Le){const Ee=se.userData;if(Ee&&Ee.text===Ce){we(se,Le);return}const Me=se.material,We=Me.map;We&&We.dispose(),Me.dispose();const Je=Fe(Ce,Le);se.material=Je.material,se.userData=Je.userData,we(se,Le)}const pe={rmbDown:!1,pointerLocked:!1,yaw:0,pitch:0,speed:20,keys:Object.create(null)};let at=0;function de(){const se=_.clientWidth,Ce=_.clientHeight;p.setSize(se,Ce,!1),m.aspect=se/Ce,m.updateProjectionMatrix()}const At=new ResizeObserver(()=>de());At.observe(_),de();function lt(){const se=new Set,Ce=o.current,Le=a.current,Ee=n.current;for(const Me of Ee){se.add(Me.playerId);let We=Ke.get(Me.playerId);if(!We){We=new ri(te,Q),We.castShadow=!1,We.receiveShadow=!1,We.userData={playerId:Me.playerId},Ke.set(Me.playerId,We),ne.add(We);const j=Fe(Me.label||String(Me.playerId),Ce);j.position.set(0,1.2,0),we(j,Ce),W.set(Me.playerId,j),We.add(j);const K=new mn,X=new Float32Array(6);K.setAttribute("position",new pn(X,3));const oe=new gd(K,ie);Be.set(Me.playerId,oe),ne.add(oe)}const Je=!!Me.isDead,ut=!!Me.inVehicle,ft=Me.highlight||null,It=ft==="killer"?Y:ft==="victim"?Z:Je?H:ut?re:Q;We.material!==It&&(We.material=It),We.position.set(Me.pos.x,Me.pos.y,Me.pos.z);const T=W.get(Me.playerId);T&&(T.visible=Ce.enabled,Ce.enabled&&Pe(T,Me.label||String(Me.playerId),Ce));const B=Be.get(Me.playerId);if(B){if(B.visible=Le,!Le)continue;const j=ft==="killer"?J:ft==="victim"?ae:Je?Ze:ut?he:ie;B.material!==j&&(B.material=j);const K=Me.aimDir,X=B.geometry.getAttribute("position");if(!K)X.setXYZ(0,Me.pos.x,Me.pos.y,Me.pos.z),X.setXYZ(1,Me.pos.x,Me.pos.y,Me.pos.z),X.needsUpdate=!0;else{const oe=K.x,Re=K.y,He=K.z,et=Math.max(1e-4,Math.sqrt(oe*oe+Re*Re+He*He)),st=oe/et,it=Re/et,$e=He/et,mt=6,Rt=Me.pos.x,Lt=Me.pos.y+.6,_n=Me.pos.z,Et=Rt+st*mt,S=Lt+it*mt,O=_n+$e*mt;X.setXYZ(0,Rt,Lt,_n),X.setXYZ(1,Et,S,O),X.needsUpdate=!0}}}for(const[Me,We]of Ke){if(se.has(Me))continue;ne.remove(We),Ke.delete(Me);const Je=W.get(Me);if(Je){We.remove(Je);const ft=Je.material;ft.map&&ft.map.dispose(),ft.dispose(),W.delete(Me)}const ut=Be.get(Me);ut&&(ne.remove(ut),ut.geometry.dispose(),Be.delete(Me))}}function nt(){const se=l.current;if(!se||!Array.isArray(se.points)||se.points.length<2){le&&(x.remove(le),le.geometry.dispose(),le=null);return}const Ce=se.points,Le=new Float32Array(Ce.length*3);for(let Ee=0;Ee<Ce.length;Ee++)Le[Ee*3+0]=Ce[Ee].x,Le[Ee*3+1]=Ce[Ee].y+.15,Le[Ee*3+2]=Ce[Ee].z;if(le){const Ee=le.geometry;Ee.setAttribute("position",new pn(Le,3)),Ee.getAttribute("position").needsUpdate=!0,Ee.computeBoundingSphere()}else{const Ee=new mn;Ee.setAttribute("position",new pn(Le,3)),le=new gd(Ee,Ae),x.add(le)}}function Xe(){const se=c.current,Ce=new Set;for(let Le=0;Le<se.length;Le++){const Ee=se[Le],Me=`${Math.round(Ee.x*10)}|${Math.round(Ee.y*10)}|${Math.round(Ee.z*10)}|${Le}`;Ce.add(Me);let We=tt.get(Me);if(!We){const ut=new mn,ft=new Float32Array([-1.2,0,-1.2,1.2,0,1.2,-1.2,0,1.2,1.2,0,-1.2]);ut.setAttribute("position",new pn(ft,3)),We=new Qo(ut,Ue),tt.set(Me,We),R.add(We)}We.position.set(Ee.x,Ee.y+.1,Ee.z)}for(const[Le,Ee]of tt)Ce.has(Le)||(R.remove(Ee),Ee.geometry.dispose(),tt.delete(Le))}function Oe(){const se=f.current,Ce=new Set;for(let Le=0;Le<se.length;Le++){const Ee=se[Le],Me=`${Math.round(Ee.x*10)}|${Math.round(Ee.y*10)}|${Math.round(Ee.z*10)}|${Le}`;Ce.add(Me);let We=Ve.get(Me);if(!We){const ut=new mn,ft=new Float32Array([-1.8,0,-1.8,1.8,0,1.8,-1.8,0,1.8,1.8,0,-1.8]);ut.setAttribute("position",new pn(ft,3)),We=new Qo(ut,Qe),Ve.set(Me,We),ee.add(We)}We.position.set(Ee.x,Ee.y+.15,Ee.z)}for(const[Le,Ee]of Ve)Ce.has(Le)||(ee.remove(Ee),Ee.geometry.dispose(),Ve.delete(Le))}function rt(){const se=new as().setFromAxisAngle(new V(0,1,0),pe.yaw),Ce=new as().setFromAxisAngle(new V(1,0,0),pe.pitch);m.quaternion.copy(se).multiply(Ce)}function wt(se){se.preventDefault()}function xt(se){se.button===2&&(pe.rmbDown=!0,document.pointerLockElement!==_&&_.requestPointerLock())}function dt(se){se.button===2&&(pe.rmbDown=!1,document.pointerLockElement===_&&document.exitPointerLock())}function je(){if(pe.pointerLocked=document.pointerLockElement===_,pe.pointerLocked){const se=new Ta().setFromQuaternion(m.quaternion,"YXZ");pe.yaw=se.y,pe.pitch=se.x}}function P(se){if(!pe.pointerLocked)return;const Ce=se.movementX||0,Le=se.movementY||0;pe.yaw-=Ce*.002,pe.pitch-=Le*.002,pe.pitch=Ju(pe.pitch,-Math.PI/2+.01,Math.PI/2-.01)}function ge(se){if(typeof s.current=="number"){const Me=se.deltaY<0?.9:1.1,We=pt.clone().multiplyScalar(Me),Je=We.length(),ut=Ju(Je,6,800);Je>1e-4&&We.multiplyScalar(ut/Je),pt.copy(We);return}const Le=se.deltaY<0?1:-1,Ee=pe.speed+Le*Math.max(1,pe.speed*.1);pe.speed=Ju(Ee,1,400)}function xe(se){pe.keys[se.code]=!0}function Ne(se){pe.keys[se.code]=!1}function qe(){const se=d.current;if(!se){b.visible=!0,ct&&(ct.geometry.dispose(),z.remove(ct),ct=null,w=""),Ye&&(Ye.geometry.dispose(),z.remove(Ye),Ye=null),A&&(A.geometry.dispose(),A.material.dispose(),z.remove(A),A=null);return}b.visible=!1;const Ce=`${se.gridW}x${se.gridH}|${se.bbMin.x},${se.bbMin.y},${se.bbMin.z}|${se.bbMax.x},${se.bbMax.y},${se.bbMax.z}|${se.heights.length}`;if(Ce===w)return;w=Ce,ct&&(ct.geometry.dispose(),z.remove(ct),ct=null),Ye&&(Ye.geometry.dispose(),z.remove(Ye),Ye=null),A&&(A.geometry.dispose(),A.material.dispose(),z.remove(A),A=null);const Le=Math.max(2,Math.floor(se.gridW)),Ee=Math.max(2,Math.floor(se.gridH)),Me=Le*Ee;if(!Array.isArray(se.heights)||se.heights.length<Me)return;const We=se.bbMax.x-se.bbMin.x,Je=se.bbMax.z-se.bbMin.z;if(!Number.isFinite(We)||!Number.isFinite(Je)||We<=0||Je<=0)return;const ut=new po(We,Je,Le-1,Ee-1);ut.rotateX(-Math.PI/2);const ft=ut.attributes.position;let It=1/0,T=-1/0;for(let $e=0;$e<Me;$e++){const mt=se.heights[$e];typeof mt!="number"||!Number.isFinite(mt)||(mt<It&&(It=mt),mt>T&&(T=mt))}(!Number.isFinite(It)||!Number.isFinite(T)||T-It<.001)&&(It=0,T=1);const B=T-It,j=new Float32Array(Me*3),K=new ht(988708),X=new ht(1910328),oe=new ht(3293278),Re=0,He=new ht(735846);for(let $e=0;$e<Ee;$e++){const mt=$e,Rt=$e;for(let Lt=0;Lt<Le;Lt++){const _n=Lt+Le*mt,Et=Lt+Le*Rt,S=se.heights[_n];ft.setY(Et,S);let O=(S-It)/B;Number.isFinite(O)||(O=0),O=Math.min(1,Math.max(0,O)),O=Math.pow(O,.65);const I=O<.5?K.clone().lerp(X,O/.5):X.clone().lerp(oe,(O-.5)/.5);Number.isFinite(S)&&S<Re&&I.lerp(He,.28),j[Et*3+0]=I.r,j[Et*3+1]=I.g,j[Et*3+2]=I.b}}ft.needsUpdate=!0,ut.setAttribute("color",new pn(j,3)),ut.computeVertexNormals(),ct=new ri(ut,ke),ct.receiveShadow=!1,ct.castShadow=!1;const et=(se.bbMin.x+se.bbMax.x)/2,st=(se.bbMin.z+se.bbMax.z)/2;if(ct.position.set(et,0,st),z.add(ct),It<Re&&T>Re){const $e=new po(We,Je,1,1);$e.rotateX(-Math.PI/2);const mt=new kr({color:1732264,transparent:!0,opacity:.26,roughness:.15,metalness:0,side:gi,depthWrite:!1});A=new ri($e,mt),A.receiveShadow=!1,A.castShadow=!1,A.position.set(et,Re,st),z.add(A)}const it=new zb(ut,35);Ye=new Qo(it,yt),Ye.position.copy(ct.position),z.add(Ye)}_.addEventListener("contextmenu",wt),_.addEventListener("mousedown",xt),window.addEventListener("mouseup",dt),document.addEventListener("pointerlockchange",je),window.addEventListener("mousemove",P),_.addEventListener("wheel",ge,{passive:!0}),window.addEventListener("keydown",xe),window.addEventListener("keyup",Ne);let Mt=performance.now(),Tt=0,Ot=0,on=0,Ie=null;const pt=new V(0,25,60);function Pt(se){const Ce=Math.min((se-Mt)/1e3,.05);Mt=se;const Le=g.current;Le.towns&&(fe(),Le.towns=!1),Le.markers&&se-Ot>=50&&(lt(),Le.markers=!1,Ot=se),Le.trail&&se-on>=75&&(nt(),Le.trail=!1,on=se),Le.death&&(Xe(),Le.death=!1),Le.ping&&(Oe(),Le.ping=!1),Le.terrain&&(qe(),Le.terrain=!1);const Ee=s.current;if(typeof Ee=="number"){const ut=n.current.find(ft=>ft&&ft.playerId===Ee);if(ut){const ft=ut.pos;if(Ee!==Ie){pt.set(m.position.x-ft.x,m.position.y-ft.y,m.position.z-ft.z);const T=pt.length();(!Number.isFinite(pt.x)||!Number.isFinite(pt.y)||!Number.isFinite(pt.z)||!Number.isFinite(T)||T<1||T>500)&&pt.set(0,25,60),Ie=Ee}if(m.position.set(ft.x+pt.x,ft.y+pt.y,ft.z+pt.z),m.lookAt(ft.x,ft.y+1.5,ft.z),pe.rmbDown||pe.pointerLocked){const T=new V(0,0,-1).applyQuaternion(m.quaternion),B=new V(1,0,0).applyQuaternion(m.quaternion),j=new V(0,1,0);pe.keys.KeyW&&pt.addScaledVector(T,pe.speed*Ce),pe.keys.KeyS&&pt.addScaledVector(T,-pe.speed*Ce),pe.keys.KeyA&&pt.addScaledVector(B,-pe.speed*Ce),pe.keys.KeyD&&pt.addScaledVector(B,pe.speed*Ce),pe.keys.KeyQ&&pt.addScaledVector(j,pe.speed*Ce),pe.keys.KeyZ&&pt.addScaledVector(j,-pe.speed*Ce)}m.position.set(ft.x+pt.x,ft.y+pt.y,ft.z+pt.z),m.lookAt(ft.x,ft.y+1.5,ft.z)}}else Ie=null;const Me=r.current;if(Ee===null&&Me!==at){at=Me;const Je=i.current;Je&&(m.position.set(Je.x,Je.y+25,Je.z+60),m.lookAt(Je.x,Je.y+1.5,Je.z))}if(pe.pointerLocked&&Ee===null&&rt(),(pe.rmbDown||pe.pointerLocked)&&Ee===null){const Je=new V(0,0,-1).applyQuaternion(m.quaternion),ut=new V(1,0,0).applyQuaternion(m.quaternion),ft=new V(0,1,0);pe.keys.KeyW&&m.position.addScaledVector(Je,pe.speed*Ce),pe.keys.KeyS&&m.position.addScaledVector(Je,-pe.speed*Ce),pe.keys.KeyA&&m.position.addScaledVector(ut,-pe.speed*Ce),pe.keys.KeyD&&m.position.addScaledVector(ut,pe.speed*Ce),pe.keys.KeyQ&&m.position.addScaledVector(ft,pe.speed*Ce),pe.keys.KeyZ&&m.position.addScaledVector(ft,-pe.speed*Ce)}p.render(u,m),Tt=window.requestAnimationFrame(Pt)}return Tt=window.requestAnimationFrame(Pt),()=>{window.cancelAnimationFrame(Tt),_.removeEventListener("contextmenu",wt),_.removeEventListener("mousedown",xt),window.removeEventListener("mouseup",dt),document.removeEventListener("pointerlockchange",je),window.removeEventListener("mousemove",P),_.removeEventListener("wheel",ge),window.removeEventListener("keydown",xe),window.removeEventListener("keyup",Ne),At.disconnect(),te.dispose(),Q.dispose(),re.dispose(),H.dispose(),Y.dispose(),Z.dispose(),ie.dispose(),he.dispose(),Ze.dispose(),J.dispose(),ae.dispose(),Ae.dispose(),Ue.dispose(),Qe.dispose(),ke.dispose(),yt.dispose(),le&&(le.geometry.dispose(),le=null),ct&&(ct.geometry.dispose(),ct=null),Ye&&(Ye.geometry.dispose(),Ye=null);for(const se of tt.values())se.geometry.dispose();for(const se of Ve.values())se.geometry.dispose();p.dispose()}},[]),E.jsx("div",{style:{width:"100%",height:"100%",minHeight:400,position:"relative"},children:E.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block",borderRadius:8}})})}function fn(t){if(!t)return null;if(typeof t=="object"){if(Array.isArray(t)){if(t.length<3)return null;const r=t[0],s=t[1],o=t[2];return typeof r!="number"||typeof s!="number"||typeof o!="number"?null:{x:r,y:s,z:o}}const e=t.x,n=t.y,i=t.z;return typeof e!="number"||typeof n!="number"||typeof i!="number"?null:{x:e,y:n,z:i}}if(typeof t=="string"){const e=t.trim().split(/\s+/g);if(e.length<3)return null;const n=Number(e[0]),i=Number(e[1]),r=Number(e[2]);return!Number.isFinite(n)||!Number.isFinite(i)||!Number.isFinite(r)?null:{x:n,y:i,z:r}}return null}function _l(t,e=30){return!t||typeof t.x!="number"||typeof t.z!="number"?!0:Math.abs(t.x)<=e&&Math.abs(t.z)<=e}function ef(t,e,n){if(!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(n))return t;const i=Math.max(0,Math.min(1,n));return t+(e-t)*i}function $b(t,e,n){return{x:ef(t.x,e.x,n),y:ef(t.y,e.y,n),z:ef(t.z,e.z,n)}}function tf(t){if(!t)return null;const e=fn(t.bbMin),n=fn(t.bbMax),i=typeof t.gridW=="number"?t.gridW:0,r=typeof t.gridH=="number"?t.gridH:0,s=Array.isArray(t.heights)?t.heights.filter(o=>typeof o=="number"):[];return e&&n&&i>=2&&r>=2&&s.length>=i*r?{bbMin:e,bbMax:n,gridW:i,gridH:r,heights:s}:null}function nf(t){if(!t)return null;const e=Array.isArray(t.descriptors)?t.descriptors:Array.isArray(t.towns)?t.towns:[];if(e.length===0)return null;const n=[];for(const i of e){if(!i)continue;const r=typeof i.name=="string"?i.name.trim():"",s=typeof i.type=="string"?i.type.trim():"",o=typeof i.baseType=="number"?i.baseType:null,a=r||s||(o!==null?`type:${o}`:"descriptor"),l=fn(i.pos);l&&n.push({name:a,pos:l})}return n.length===0?null:n}function xg(t,e,n){if(!t||!t.bbMin||!t.bbMax||!Array.isArray(t.heights))return null;const i=Math.floor(t.gridW),r=Math.floor(t.gridH);if(i<2||r<2||t.heights.length<i*r)return null;const s=t.bbMin.x,o=t.bbMax.x,a=t.bbMin.z,l=t.bbMax.z,c=o-s,f=l-a;if(!Number.isFinite(c)||!Number.isFinite(f)||c<=0||f<=0)return null;const d=(e-s)/c,h=(n-a)/f;if(!Number.isFinite(d)||!Number.isFinite(h)||d<0||d>1||h<0||h>1)return null;const g=d*(i-1),y=h*(r-1),_=Math.floor(g),p=Math.floor(y),u=Math.min(i-1,_+1),m=Math.min(r-1,p+1),v=g-_,M=y-p,L=_+i*p,C=u+i*p,b=_+i*m,G=u+i*m,ne=t.heights[L],x=t.heights[C],R=t.heights[b],ee=t.heights[G];if(![ne,x,R,ee].every(te=>typeof te=="number"&&Number.isFinite(te)))return null;const ue=ne*(1-v)+x*v,z=R*(1-v)+ee*v;return ue*(1-M)+z*M}function Yb(t){const e=Zi();return U.useMemo(()=>{const i=new URLSearchParams(e.search).get(t);return i||null},[e.search,t])}function xl(t){const e=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,n=Math.floor(e/1e3),i=Math.floor(n/3600),r=Math.floor(n%3600/60),s=n%60,o=String(i).padStart(2,"0"),a=String(r).padStart(2,"0"),l=String(s).padStart(2,"0");return`${o}:${a}:${l}`}function rf(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function qb(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function Kb(t,e){if(!Array.isArray(t)||t.length===0)return[];const n=new Map;for(const r of t){const s=e(r).trim();s&&n.set(s,(n.get(s)||0)+1)}const i=Array.from(n.entries()).map(([r,s])=>({name:r,count:s}));return i.sort((r,s)=>s.count-r.count||r.name.localeCompare(s.name)),i}function mc(t){const e=t.payload;return e&&typeof e.tsMs=="number"?e.tsMs:null}function Ns(t){const e=t.payload;return`${t.receivedAt}|${e&&e.tsMs}|${e&&e.type}`}function sf(t,e,n){if(!Number.isFinite(e)||e<=0)return[];if(t.length<=e)return t;if(typeof n!="number"||!Number.isFinite(n))return t.slice(t.length-e);const i=mc(t[0]),r=mc(t[t.length-1]);if(typeof i!="number"||typeof r!="number")return t.slice(t.length-e);const s=Math.abs(n-i),o=Math.abs(r-n),a=t.length-e;return s>o?t.slice(a):t.slice(0,t.length-a)}function Zb(){const t=Yb("serverId"),[e,n]=U.useState([]),[i,r]=U.useState(""),[s,o]=U.useState(null),[a,l]=U.useState(null),[c,f]=U.useState(null),[d,h]=U.useState(!1),[g,y]=U.useState(!0),[_,p]=U.useState({minTsMs:null,maxTsMs:null}),[u,m]=U.useState(null),[v,M]=U.useState(null),[L,C]=U.useState(null),[b,G]=U.useState([]),[ne,x]=U.useState(""),[R,ee]=U.useState(null),[ue,z]=U.useState(null),[te,Q]=U.useState(0),[re,H]=U.useState(!0),[Y,Z]=U.useState("players"),[ie,he]=U.useState(!1),[Ze,J]=U.useState(!0),[ae,Ae]=U.useState(null),[Ue,Qe]=U.useState(null),ke=U.useRef(new Map),[yt,Ke]=U.useState(!1),[W,Gt]=U.useState(1),Be=U.useRef(null),[tt,Ve]=U.useState(!0),[ct,Ye]=U.useState(1),[A,w]=U.useState(!0),[q,_e]=U.useState(!0),[fe,le]=U.useState(!0),[Fe,we]=U.useState(!0),[Pe,pe]=U.useState(!0),[at,de]=U.useState(20),[At,lt]=U.useState([]),nt=U.useRef(0),[Xe,Oe]=U.useState(()=>{try{const S=window.localStorage.getItem("replay.eventClickOffsetSeconds"),O=S!==null?Number(S):5;return Number.isFinite(O)?Math.max(0,Math.min(60,Math.floor(O))):5}catch{return 5}}),[rt,wt]=U.useState(null),[xt,dt]=U.useState(null),[je,P]=U.useState([]),ge=U.useRef(null),xe=U.useRef(!1),Ne=U.useRef(null),qe=U.useRef(0),Mt=U.useRef(0),Tt=U.useRef(!1),Ot=U.useRef(!1),on=U.useRef(new Map);U.useEffect(()=>{t&&t.length>0&&r(t)},[t]),U.useEffect(()=>{Be.current=u},[u]),U.useEffect(()=>{Ne.current=null,qe.current=0,Mt.current=0},[i]),U.useEffect(()=>{try{window.localStorage.setItem("replay.eventClickOffsetSeconds",String(Xe))}catch{}},[Xe]),U.useEffect(()=>{function S(O){O.code==="KeyF"&&xt!==null&&dt(null)}return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[xt]),U.useEffect(()=>{let S=!1;async function O(){try{const I=await gM();if(S)return;n(I)}catch(I){if(S)return;const D=I instanceof Error?I.message:"Failed to load servers";f(D)}}return O(),()=>{S=!0}},[]),U.useEffect(()=>{let S=!1;async function O(){try{const D=await id();if(S)return;o(D),l(null)}catch(D){if(S)return;const $=D instanceof Error?D.message:"Failed to load server status";l($)}}O();const I=window.setInterval(O,15e3);return()=>{S=!0,window.clearInterval(I)}},[]);const Ie=i.length>0?i:null;U.useEffect(()=>{M(null),C(null)},[Ie]),U.useEffect(()=>{if(!Ie)return;const S=Ie;let O=!1;async function I(){h(!0),f(null);try{const[D,$,k,N]=await Promise.all([zp(S),Bp(S),gu(S).catch(()=>null),vu(S).catch(()=>null)]);if(O)return;p({minTsMs:D.minTsMs,maxTsMs:D.maxTsMs}),G($);const F=tf(k);F&&M(F);const ye=nf(N);if(ye&&C(ye),typeof D.maxTsMs=="number"){m(D.maxTsMs);const ve=await Wa({serverId:S,untilTsMs:D.maxTsMs,limit:5e3,tail:!0}).catch(()=>[]);if(!O){P(ve);let ce=null;for(const me of ve){const ze=me.payload;ze&&typeof ze.tsMs=="number"&&(ce===null||ze.tsMs>ce)&&(ce=ze.tsMs)}ge.current=ce!==null?ce:Math.max(0,D.maxTsMs-15e3)}}nt.current=Date.now(),Ke(!1)}catch(D){if(O)return;const $=D instanceof Error?D.message:"Failed to load replay data";f($)}finally{O||h(!1)}}return I(),()=>{O=!0}},[Ie]),U.useEffect(()=>{if(!Ie||v||Tt.current||!je.some(I=>{const D=I.payload;return D&&(D.type==="map"||D.type==="terrain")}))return;let O=!1;return Tt.current=!0,gu(Ie).then(I=>{if(O)return;const D=tf(I);D&&M(D)}).catch(()=>{}).finally(()=>{Tt.current=!1}),()=>{O=!0}},[je,Ie,v]),U.useEffect(()=>{if(!Ie||L||Ot.current||!je.some(I=>{const D=I.payload;return D&&(D.type==="map"||D.type==="terrain"||D.type==="towns"||D.type==="descriptors")}))return;let O=!1;return Ot.current=!0,vu(Ie).then(I=>{if(O)return;const D=nf(I);D&&C(D)}).catch(()=>{}).finally(()=>{Ot.current=!1}),()=>{O=!0}},[je,Ie,L]),U.useEffect(()=>{if(!Ie||g||!yt||typeof _.maxTsMs!="number")return;let S=0,O=performance.now();function I(D){const $=Math.min(250,Math.max(0,D-O));O=D;const k=Be.current;if(typeof k=="number"){const N=_.maxTsMs;let F=k+$*W;F>=N&&(F=N,Ke(!1)),Be.current=F,m(F)}S=window.requestAnimationFrame(I)}return S=window.requestAnimationFrame(I),()=>window.cancelAnimationFrame(S)},[yt,g,W,_.maxTsMs,Ie]),U.useEffect(()=>{if(!Ie)return;const S=Ie;let O=!1,I=null;async function D(){try{const $=await Bp(S);O||G($)}catch{}O||(I=window.setTimeout(D,g?3e3:5e3))}return D(),()=>{O=!0,I!==null&&window.clearTimeout(I)}},[g,Ie]),U.useEffect(()=>{if(!Ie)return;const S=Ie;let O=!1,I=null;async function D(){try{const $=await zp(S);if(O)return;const k=ge.current;typeof k=="number"&&typeof $.maxTsMs=="number"&&$.maxTsMs+1e3<k&&(ge.current=null,nt.current=Date.now(),P([{receivedAt:Date.now(),payload:{type:"restart",tsMs:$.maxTsMs,event:{reason:"server_restart_or_history_cleared"}}}]),lt([]),Ke(!1),Tt.current=!1,gu(S).then(N=>{if(O)return;const F=tf(N);F&&M(F)}).catch(()=>{}),Ot.current=!1,vu(S).then(N=>{if(O)return;const F=nf(N);F&&C(F)}).catch(()=>{})),p({minTsMs:$.minTsMs,maxTsMs:$.maxTsMs}),g&&typeof $.maxTsMs=="number"&&m($.maxTsMs)}catch{}O||(I=window.setTimeout(D,g?2e3:3e3))}return D(),()=>{O=!0,I!==null&&window.clearTimeout(I)}},[g,Ie]),U.useEffect(()=>{if(!Ie)return;const S=Ie;let O=!1,I=null;async function D(){const $=_.maxTsMs;if(typeof $!="number"){O||(I=window.setTimeout(D,1e3));return}const k=ge.current,N=typeof k=="number"?k+1:Math.max(0,$-8e3);try{let ve=N;const ce=[];let me=typeof ge.current=="number"?ge.current:null;for(let ze=0;ze<2;ze++){const Ge=await Wa({serverId:S,sinceTsMs:ve,untilTsMs:$,limit:1500});ce.push(...Ge);let be=null;for(const ot of Ge){const bt=mc(ot);bt!==null&&((be===null||bt>be)&&(be=bt),(me===null||bt>me)&&(me=bt))}if(Ge.length<1500||be===null||be>=$)break;ve=be+1}if(O)return;ce.length>0&&P(ze=>{const Ge=ze.slice(-500),be=new Set;for(const bt of Ge)be.add(Ns(bt));const ot=ze.slice();for(const bt of ce){const li=Ns(bt);be.has(li)||ot.push(bt)}return sf(ot,25e4,Be.current)}),typeof me=="number"&&(ge.current=me)}catch(F){if(!O){const ye=F instanceof Error?F.message:"Failed to fetch replay events";f(ye)}}O||(I=window.setTimeout(D,g?1e3:1500))}return D(),()=>{O=!0,I!==null&&window.clearTimeout(I)}},[g,_.maxTsMs,Ie]);const pt=U.useMemo(()=>{let S=null,O=null;for(const I of je){const D=I.payload,$=D&&typeof D.tsMs=="number"?D.tsMs:null;$!==null&&((S===null||$<S)&&(S=$),(O===null||$>O)&&(O=$))}return{minTsMs:S,maxTsMs:O}},[je]);U.useEffect(()=>{if(!Ie)return;const S=Ie,O=u,I=pt.minTsMs,D=_.minTsMs;if(typeof O!="number"||typeof I!="number"||typeof D!="number"||I<=D+1||O>I+2e3||xe.current)return;xe.current=!0;const k=Math.max(0,Math.floor(I)-1);Wa({serverId:S,untilTsMs:k,limit:5e3,tail:!0}).then(N=>{N.length!==0&&P(F=>{const ye=F.slice(0,800),ve=new Set;for(const ze of ye)ve.add(Ns(ze));const ce=[];for(const ze of N){const Ge=Ns(ze);ve.has(Ge)||ce.push(ze)}const me=ce.concat(F);return sf(me,25e4,Be.current)})}).catch(()=>{}).finally(()=>{xe.current=!1})},[u,pt.minTsMs,_.minTsMs,Ie]),U.useEffect(()=>{if(!Ie)return;const S=Ie;if(!g||Ne.current===S)return;const O=pt.minTsMs,I=_.minTsMs,D=_.maxTsMs;if(typeof O!="number"||typeof I!="number"||typeof D!="number")return;const $=15*6e4,k=Math.max(I,Math.max(0,Math.floor(D-$)));if(O<=k+1)return;const N=25e4;if(je.length>=N-5e3){Ne.current=S;return}const F=Date.now();if(F-Mt.current<1500||xe.current)return;Mt.current=F,xe.current=!0;const ye=Math.max(0,Math.floor(O)-1);Wa({serverId:S,untilTsMs:ye,limit:5e3,tail:!0}).then(ve=>{if(ve.length===0){qe.current+=1,qe.current>=3&&(Ne.current=S);return}qe.current=0,P(ce=>{const me=ce.slice(0,800),ze=new Set;for(const ot of me)ze.add(Ns(ot));const Ge=[];for(const ot of ve){const bt=Ns(ot);ze.has(bt)||Ge.push(ot)}const be=Ge.concat(ce);return sf(be,N,Be.current)})}).catch(()=>{}).finally(()=>{xe.current=!1})},[je.length,g,pt.minTsMs,_.maxTsMs,_.minTsMs,Ie]);const Pt=U.useMemo(()=>{const S=[];for(const O of je){const I=O.payload;!I||typeof I!="object"||I.type==="snapshot"&&typeof I.tsMs=="number"&&Array.isArray(I.players)&&S.push({tsMs:I.tsMs,players:I.players})}return S.sort((O,I)=>O.tsMs-I.tsMs),S},[je]),se=U.useMemo(()=>{const S=new Map;for(const I of b){if(!I||typeof I.playerId!="number")continue;const D=typeof I.name=="string"&&I.name.trim().length>0?I.name.trim():String(I.playerId);S.set(I.playerId,D)}for(const I of je){const D=I.payload;if(!D||typeof D!="object"||D.type!=="join"&&D.type!=="disconnect")continue;const $=D.event,k=$&&typeof $.playerId=="number"?$.playerId:null;if(k===null)continue;const N=$&&typeof $.name=="string"&&$.name.trim().length>0?$.name.trim():"";N?S.set(k,N):S.has(k)||S.set(k,String(k))}for(const I of Pt)for(const D of I.players){if(!D||typeof D!="object")continue;const $=D.playerId;if(typeof $!="number")continue;const k=typeof D.name=="string"&&D.name.trim().length>0?D.name.trim():"";k?S.set($,k):S.has($)||S.set($,String($))}const O=Array.from(S.entries()).map(([I,D])=>({playerId:I,name:D}));return O.sort((I,D)=>I.name.localeCompare(D.name)||I.playerId-D.playerId),O},[je,b,Pt]),Ce=U.useMemo(()=>{const S=new Map;for(const O of Pt){const I=O.tsMs;for(const D of O.players){if(!D||typeof D!="object")continue;const $=D.playerId;if(typeof $!="number")continue;let k=S.get($);k||(k=[],S.set($,k)),k.push({tsMs:I,player:D})}}return S},[Pt]),Le=U.useMemo(()=>(S,O)=>{const I=Ce.get(S);if(!I||I.length===0)return null;let D=0,$=I.length-1,k=-1;for(;D<=$;){const Ge=D+$>>1;I[Ge].tsMs<=O?(k=Ge,D=Ge+1):$=Ge-1}if(k<0)return null;const N=30,F=25,ye=6e4,ve=2500,ce=Ge=>{const be=fn(Ge&&Ge.pos);return!be||_l(be,N)?null:be};let me=null;for(let Ge=k;Ge>=0&&k-Ge<F;Ge--){const be=I[Ge];if(O-be.tsMs>ye)break;const ot=ce(be.player);if(ot){me={pos:ot,tsMs:be.tsMs,player:be.player};break}}let ze=null;for(let Ge=k+1;Ge<I.length&&Ge-k<F;Ge++){const be=I[Ge];if(be.tsMs-O>ye)break;const ot=ce(be.player);if(ot){ze={pos:ot,tsMs:be.tsMs,player:be.player};break}}if(!me&&ze)return ze;if(!me)return null;if(ze&&ze.tsMs>me.tsMs&&O>=me.tsMs&&O<=ze.tsMs){const Ge=ze.tsMs-me.tsMs;if(Ge>0&&Ge<=ve){const be=(O-me.tsMs)/Ge;return{pos:$b(me.pos,ze.pos,be),tsMs:me.tsMs,player:me.player}}}return me},[Ce]),Ee=U.useMemo(()=>{const S=new Map;for(const O of je){const I=O.payload;if(!I||typeof I!="object"||I.type!=="join"&&I.type!=="disconnect"||typeof I.tsMs!="number")continue;const D=I.event,$=D&&typeof D.playerId=="number"?D.playerId:null;if($===null)continue;let k=S.get($);k||(k=[],S.set($,k)),k.push({tsMs:I.tsMs,type:I.type})}for(const O of S.values())O.sort((I,D)=>I.tsMs-D.tsMs);return S},[je]),Me=U.useMemo(()=>(S,O)=>{const I=Ce.get(S);if(!I||I.length===0)return null;let D=0,$=I.length-1,k=-1;for(;D<=$;){const N=D+$>>1;I[N].tsMs<=O?(k=N,D=N+1):$=N-1}return k<0?null:I[k]},[Ce]),We=U.useMemo(()=>(S,O,I)=>{const D=Ce.get(S);if(!D||D.length===0)return null;let $=0,k=D.length-1,N=-1;for(;$<=k;){const F=$+k>>1;D[F].tsMs<=O?(N=F,$=F+1):k=F-1}if(N<0)return null;for(let F=N;F>=0;F--){const ye=D[F],ve=O-ye.tsMs;if(ve<0)continue;if(ve>I)break;const ce=ye.player;if(!ce||typeof ce!="object")continue;const me=ce.inventory,ze=ce.attachments,Ge=ce.weapon,be={tsMs:ye.tsMs};if(Array.isArray(me)&&(be.inventory=me),Array.isArray(ze)&&(be.attachments=ze),Ge&&typeof Ge=="object"&&typeof Ge.name=="string"&&Ge.name.length>0&&(be.weapon=Ge),"inventory"in be||"attachments"in be||"weapon"in be)return be}return null},[Ce]),Je=U.useMemo(()=>(S,O)=>{const I=Ee.get(S);if(!I||I.length===0)return null;let D=0,$=I.length-1,k=-1;for(;D<=$;){const N=D+$>>1;I[N].tsMs<=O?(k=N,D=N+1):$=N-1}return k<0?null:I[k].type==="join"},[Ee]),ut=U.useMemo(()=>(S,O,I=6e4)=>{if(typeof S!="number"||S<0||typeof O!="number"||!Number.isFinite(O)||Pt.length===0)return null;const D=O+Math.max(1e3,Math.min(5*60*1e3,Math.floor(I)));let $=0,k=Pt.length-1,N=Pt.length;for(;$<=k;){const F=$+k>>1;Pt[F].tsMs>=O?(N=F,k=F-1):$=F+1}for(let F=N;F<Pt.length;F++){const ye=Pt[F];if(ye.tsMs>D)break;const ve=ye.players.find(me=>me&&typeof me=="object"&&me.playerId===S);if(!ve)continue;const ce=fn(ve.pos);if(ce&&!_l(ce,30))return ce}return null},[Pt]),ft=U.useMemo(()=>(S,O,I=6e4)=>{if(typeof S!="number"||S<0||typeof O!="number"||!Number.isFinite(O)||Pt.length===0)return null;const D=O-Math.max(1e3,Math.min(5*60*1e3,Math.floor(I)));let $=0,k=Pt.length-1,N=-1;for(;$<=k;){const F=$+k>>1;Pt[F].tsMs<=O?(N=F,$=F+1):k=F-1}for(let F=N;F>=0;F--){const ye=Pt[F];if(ye.tsMs<D)break;const ve=ye.players.find(me=>me&&typeof me=="object"&&me.playerId===S);if(!ve)continue;const ce=fn(ve.pos);if(ce&&!_l(ce,30))return ce}return null},[Pt]),It=U.useMemo(()=>{const S=new Map;for(const O of je){const I=O.payload;if(!I||typeof I!="object"||I.type!=="kill"&&I.type!=="death"||typeof I.tsMs!="number")continue;const D=I.event,$=D&&typeof D.victimPlayerId=="number"?D.victimPlayerId:null;if($===null)continue;const k=I.tsMs+3e4,N=S.get($)||0;k>N&&S.set($,k)}return S},[je]),T=U.useMemo(()=>{const S=new Map;if(!Ue)return S;const O=Ue.split("|");if(O.length<2)return S;const I=Number(O[0]),D=String(O[1]||"");if(!Number.isFinite(I)||D!=="kill"&&D!=="death")return S;let $=null;for(const N of je){const F=N&&N.payload;if(!(!F||typeof F!="object")&&F.type===D&&typeof F.tsMs=="number"&&F.tsMs===I){$=F.event;break}}if(!$||typeof $!="object")return S;if(D==="kill"){const N=typeof $.killerPlayerId=="number"?$.killerPlayerId:null,F=typeof $.victimPlayerId=="number"?$.victimPlayerId:null;return N!==null&&S.set(N,"killer"),F!==null&&S.set(F,"victim"),S}const k=typeof $.victimPlayerId=="number"?$.victimPlayerId:null;return k!==null&&S.set(k,"victim"),S},[je,Ue]),B=U.useMemo(()=>({enabled:tt,scale:Math.min(2,Math.max(.5,ct)),background:A}),[A,ct,tt]),j=U.useMemo(()=>{const S=u;if(typeof S!="number")return[];if(Ce.size===0)return[];const O=new Map;for(const $ of se)O.set($.playerId,$.name);const I=3e4,D=[];for(const $ of se){const k=$.playerId,N=Me(k,S);if(!N)continue;const F=Je(k,S);if(F===!1||F===null&&S-N.tsMs>I)continue;const ye=Le(k,S);if(!ye)continue;const ve=ye.player,ce=ye.pos,me=!!ve.inVehicle,ze=xg(v,ce.x,ce.z),be=!me&&typeof ze=="number"&&Number.isFinite(ze)&&typeof ce.y=="number"&&Number.isFinite(ce.y)&&Math.abs(ce.y-ze)<=3.5?{...ce,y:ze+.35}:ce,ot=fn(ve.aimDir),bt=ve.vehicle&&typeof ve.vehicle.name=="string"?String(ve.vehicle.name):"",li=N.tsMs,Bc=It.get(k)||0,Hc=typeof li=="number"?Bc>li:!1;let Mo=O.get(k)||String(k);q&&me&&bt&&(Mo=`${Mo} (${bt})`),D.push({playerId:k,label:Mo,pos:be,aimDir:ot,inVehicle:me,isDead:Hc,highlight:T.get(k)||null})}return D},[u,It,Le,Me,Je,se,Ce,T,q,v]),K=U.useMemo(()=>{if(!Pe||R===null||typeof u!="number")return null;const S=Ce.get(R);if(!S||S.length===0)return null;const O=Math.max(5e3,Math.min(6e4,Math.floor(at*1e3))),I=u-O,D=[];let $=null,k=0,N=S.length-1,F=S.length;for(;k<=N;){const ve=k+N>>1;S[ve].tsMs>=I?(F=ve,N=ve-1):k=ve+1}for(let ve=Math.max(0,F-1);ve<S.length;ve++){const ce=S[ve];if(ce.tsMs<I)continue;if(ce.tsMs>u)break;const me=ce.player;if(!me||typeof me!="object")continue;const ze=!!me.inVehicle,Ge=me.entityId,be=typeof Ge=="string"&&Ge.length>0?Ge:null;be&&$&&be!==$&&(D.length=0),be&&($=be);const ot=fn(me.pos);if(!ot||_l(ot,30))continue;const bt=xg(v,ot.x,ot.z),li=!ze&&typeof bt=="number"&&Number.isFinite(bt)&&typeof ot.y=="number"&&Number.isFinite(ot.y)&&Math.abs(ot.y-bt)<=3.5;D.push(li?{...ot,y:bt}:ot)}if(D.length<2)return null;const ye=200;if(D.length>ye){const ve=Math.ceil(D.length/ye),ce=[];for(let me=0;me<D.length;me+=ve)ce.push(D[me]);return{points:ce}}return{points:D}},[u,Pe,Ce,R,v,at]),X=U.useMemo(()=>{if(!Fe)return[];const S=u;if(typeof S!="number")return[];const O=[];for(const I of je){const D=I.payload;if(!D||typeof D!="object"||D.type!=="kill"&&D.type!=="death"||typeof D.tsMs!="number"||S<D.tsMs||S>D.tsMs+3e3)continue;const $=D.event,k=$?fn($.victimPos):null;if(k&&(O.push(k),O.length>=40))break}return O},[u,je,Fe]),oe=U.useMemo(()=>{const S=_.minTsMs,O=_.maxTsMs,I=u;return typeof S!="number"||typeof O!="number"||typeof I!="number"?{min:0,max:100,value:0,disabled:!0}:O<=S?{min:S,max:S+1,value:S,disabled:!1}:{min:S,max:O,value:Math.min(Math.max(I,S),O),disabled:!1}},[u,_.maxTsMs,_.minTsMs]),Re=U.useMemo(()=>{let S=-1/0,O=0;for(const I of je){if(!I||typeof I.receivedAt!="number")continue;const D=mc(I);D!==null&&D>S&&(S=D,O=I.receivedAt)}return!Number.isFinite(S)||S<0||!Number.isFinite(O)||O<=0?null:{tsMs:S,receivedAt:O}},[je]),He=U.useMemo(()=>{if(!Re)return null;const S=Re;return O=>{const I=S.receivedAt+(O-S.tsMs);return Number.isFinite(I)?new Date(I).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}):""}},[Re]),et=U.useMemo(()=>{if(xt===null)return null;const S=se.find(O=>O.playerId===xt);return S?S.name:String(xt)},[xt,se]),st=U.useMemo(()=>{const S=u;if(typeof S!="number"||!Number.isFinite(S))return[];const O=3e4,I=[];for(const D of se){const $=D.playerId,k=Je($,S);if(k===!0){I.push(D);continue}if(k===!1)continue;const N=Me($,S);N&&S-N.tsMs<=O&&I.push(D)}return I.sort((D,$)=>D.name.localeCompare($.name)||D.playerId-$.playerId),I},[u,Me,Je,se]);function it(S){const O=Math.max(0,Math.floor(Xe*1e3)),I=oe.disabled?0:oe.min,D=oe.disabled?S:oe.max,$=Math.min(D,Math.max(I,S-O));m($)}const $e=U.useMemo(()=>{const S=ne.trim().toLowerCase(),O=Array.isArray(st)?st:[];return S?O.filter(I=>(I.name||"").toLowerCase().includes(S)||String(I.playerId).includes(S)):O},[ne,st]),mt=U.useMemo(()=>{if(R===null)return null;const S=u;if(typeof S!="number")return null;const O=Me(R,S);return O?{snapTsMs:O.tsMs,player:O.player}:null},[u,Me,R]),Rt=U.useMemo(()=>{const S=u;if(typeof S!="number")return mt;const O=mt;if(!O||!O.player||typeof O.player!="object")return O;const I=O.player,D=O.snapTsMs,$=typeof I.playerId=="number"?I.playerId:null;if($===null)return O;const k=5*6e4,N=on.current.get($)||{invTsMs:-1,hotbarTsMs:-1,weaponTsMs:-1},F=I.inventory;Array.isArray(F)&&(N.inventory=F,N.invTsMs=D);const ye=I.attachments;Array.isArray(ye)&&(N.attachments=ye,N.hotbarTsMs=D);const ve=I.weapon;ve&&typeof ve=="object"&&typeof ve.name=="string"&&ve.name.length>0&&(N.weapon=ve,N.weaponTsMs=D),on.current.set($,N);const ce=!Array.isArray(F),me=!Array.isArray(ye),ze=!ve||!ve.name,be=ce||me||ze?We($,S,k):null;be&&be.inventory&&(!("inventory"in N)||N.invTsMs>S||S-N.invTsMs>k)&&(N.inventory=be.inventory,N.invTsMs=be.tsMs),be&&be.attachments&&(!("attachments"in N)||N.hotbarTsMs>S||S-N.hotbarTsMs>k)&&(N.attachments=be.attachments,N.hotbarTsMs=be.tsMs),be&&be.weapon&&(!N.weapon||N.weaponTsMs>S||S-N.weaponTsMs>k)&&(N.weapon=be.weapon,N.weaponTsMs=be.tsMs);const ot=S-N.invTsMs,bt=S-N.hotbarTsMs,li=S-N.weaponTsMs,Bc="inventory"in N&&N.invTsMs<=S&&ot>=0&&ot<=k&&ce,Hc="attachments"in N&&N.hotbarTsMs<=S&&bt>=0&&bt<=k&&me,Mo=!!N.weapon&&N.weaponTsMs<=S&&li>=0&&li<=k&&ze;return{...I,inventory:Bc?N.inventory:F,attachments:Hc?N.attachments:ye,weapon:Mo?N.weapon:ve,__snapTsMs:D}},[u,We,mt]),Lt=U.useMemo(()=>{const S=[];for(const $ of je){const k=$.payload;if(!k||typeof k!="object"||typeof k.tsMs!="number"||k.type==="snapshot"||k.type!=="kill"&&k.type!=="death"&&k.type!=="aiKill"&&k.type!=="join"&&k.type!=="disconnect"&&k.type!=="restart"&&k.type!=="gmPing")continue;const N=k.event;if(k.type==="kill"){const F=N&&typeof N.killerName=="string"?N.killerName:"Unknown",ye=N&&typeof N.victimName=="string"?N.victimName:"Unknown",ve=N&&typeof N.weaponName=="string"?N.weaponName:"",ce=N&&typeof N.distanceM=="number"?N.distanceM:null,me=typeof ce=="number"&&Number.isFinite(ce)?`${Math.round(ce)}m`:"",ze=N?fn(N.victimPos):null,Ge=N&&typeof N.victimPlayerId=="number"?N.victimPlayerId:null,be=N&&typeof N.killerPlayerId=="number"?N.killerPlayerId:null,ot=[];ve&&ot.push(ve),me&&ot.push(me),S.push({tsMs:k.tsMs,type:"kill",title:`${F} → ${ye}`,subtitle:ot.join(" • "),focusPos:ze,focusPlayerId:Ge,playerIds:[be,Ge].filter(bt=>typeof bt=="number")})}else if(k.type==="death"){const F=N&&typeof N.victimPlayerId=="number"?N.victimPlayerId:null,ye=N&&typeof N.killerPlayerId=="number"?N.killerPlayerId:null;if(F!==null&&ye!==null&&ye>=0&&ye!==F)continue;const ve=N&&typeof N.victimName=="string"?N.victimName:"Unknown",ce=N&&typeof N.weaponName=="string"?N.weaponName:"",me=N&&typeof N.distanceM=="number"?N.distanceM:null,ze=typeof me=="number"&&Number.isFinite(me)?`${Math.round(me)}m`:"",Ge=N?fn(N.victimPos):null,be=[];ce&&be.push(ce),ze&&be.push(ze),S.push({tsMs:k.tsMs,type:"death",title:`${ve} died`,subtitle:be.join(" • "),focusPos:Ge,focusPlayerId:F,playerIds:[F].filter(ot=>typeof ot=="number")})}else if(k.type==="aiKill"){const F=N&&typeof N.killerName=="string"?N.killerName:"Unknown",ye=N&&typeof N.victimName=="string"?N.victimName:"Unknown",ve=N&&typeof N.weaponName=="string"?N.weaponName:"",ce=N&&typeof N.distanceM=="number"?N.distanceM:null,me=typeof ce=="number"&&Number.isFinite(ce)?`${Math.round(ce)}m`:"",ze=N?fn(N.victimPos):null,Ge=N&&typeof N.killerPlayerId=="number"?N.killerPlayerId:null,be=[];ve&&be.push(ve),me&&be.push(me),S.push({tsMs:k.tsMs,type:"aiKill",title:`${F} → AI: ${ye}`,subtitle:be.join(" • "),focusPos:ze,focusPlayerId:Ge,playerIds:[Ge].filter(ot=>typeof ot=="number")})}else if(k.type==="gmPing"){const F=N&&typeof N.by=="string"&&N.by.length>0?N.by:"",ye=N&&typeof N.title=="string"&&N.title.length>0?N.title:"event",ve=N?fn(N.pos):null,ce=F?`(${F} sent a GM ping to ${ye})`:`GM ping to ${ye}`;S.push({tsMs:k.tsMs,type:"gmPing",title:ce,subtitle:"",focusPos:ve,focusPlayerId:null,playerIds:[]})}else{if(k.type==="restart"){S.push({tsMs:k.tsMs,type:"restart",title:"Server restarted",subtitle:"restart / history cleared",focusPos:null,focusPlayerId:null,playerIds:[]});continue}const F=N&&typeof N.name=="string"?N.name:String(N&&N.playerId?N.playerId:"player"),ye=N&&typeof N.playerId=="number"?N.playerId:null,ve=k.type==="join"&&typeof ye=="number"?ut(ye,k.tsMs,9e4):null,ce=k.type==="disconnect"&&typeof ye=="number"?ft(ye,k.tsMs,9e4):null;S.push({tsMs:k.tsMs,type:String(k.type),title:`${k.type==="join"?"Join":"Disconnect"}: ${F}`,subtitle:k.type==="disconnect"&&N&&typeof N.kickCause=="string"&&N.kickCause?`cause: ${N.kickCause}`:"",focusPos:ve||ce,focusPlayerId:ye,playerIds:[ye].filter(me=>typeof me=="number")})}}S.sort(($,k)=>$.tsMs-k.tsMs);const O=u,I=rt;let D=S;return typeof O=="number"&&(D=D.filter($=>$.tsMs<=O)),typeof I=="number"&&(D=D.filter($=>$.playerIds.includes(I))),D.slice(-200)},[u,rt,je,ut]);U.useEffect(()=>{if(!Ue)return;const S=window.setTimeout(()=>{const O=ke.current.get(Ue);O&&O.scrollIntoView({block:"nearest",behavior:"smooth"})},0);return()=>window.clearTimeout(S)},[Ue,Y]);const _n=U.useMemo(()=>{const S=_.minTsMs,O=_.maxTsMs;if(typeof S!="number"||typeof O!="number")return[];let I=[];for(const k of je){const N=k.payload;if(!N||typeof N!="object"||N.type!=="kill"&&N.type!=="death"&&N.type!=="aiKill"&&N.type!=="join"&&N.type!=="disconnect"&&N.type!=="restart"&&N.type!=="gmPing"||typeof N.tsMs!="number"||N.tsMs<S||N.tsMs>O)continue;const F=N.event;if(N.type==="kill"){const ye=F&&typeof F.killerName=="string"?F.killerName:"Unknown",ve=F&&typeof F.victimName=="string"?F.victimName:"Unknown",ce=F&&typeof F.weaponName=="string"?F.weaponName:"",me=F&&typeof F.distanceM=="number"?F.distanceM:null,ze=typeof me=="number"&&Number.isFinite(me)?`${Math.round(me)}m`:"",Ge=F?fn(F.victimPos):null,be=F&&typeof F.victimPlayerId=="number"?F.victimPlayerId:null,ot=F&&typeof F.killerPlayerId=="number"?F.killerPlayerId:null,bt=[];ce&&bt.push(ce),ze&&bt.push(ze),I.push({tsMs:N.tsMs,type:"kill",title:`${ye} → ${ve}`,subtitle:bt.join(" • "),focusPos:Ge,focusPlayerId:be,playerIds:[ot,be].filter(li=>typeof li=="number")})}else if(N.type==="death"){const ye=F&&typeof F.victimPlayerId=="number"?F.victimPlayerId:null,ve=F&&typeof F.killerPlayerId=="number"?F.killerPlayerId:null;if(ye!==null&&ve!==null&&ve>=0&&ve!==ye)continue;const ce=F&&typeof F.victimName=="string"?F.victimName:"Unknown",me=F&&typeof F.weaponName=="string"?F.weaponName:"",ze=F&&typeof F.distanceM=="number"?F.distanceM:null,Ge=typeof ze=="number"&&Number.isFinite(ze)?`${Math.round(ze)}m`:"",be=F?fn(F.victimPos):null,ot=[];me&&ot.push(me),Ge&&ot.push(Ge),I.push({tsMs:N.tsMs,type:"death",title:`${ce} died`,subtitle:ot.join(" • "),focusPos:be,focusPlayerId:ye,playerIds:[ye].filter(bt=>typeof bt=="number")})}else if(N.type==="aiKill"){const ye=F&&typeof F.killerName=="string"?F.killerName:"Unknown",ve=F&&typeof F.victimName=="string"?F.victimName:"Unknown",ce=F&&typeof F.weaponName=="string"?F.weaponName:"",me=F&&typeof F.distanceM=="number"?F.distanceM:null,ze=typeof me=="number"&&Number.isFinite(me)?`${Math.round(me)}m`:"",Ge=F?fn(F.victimPos):null,be=F&&typeof F.killerPlayerId=="number"?F.killerPlayerId:null,ot=[];ce&&ot.push(ce),ze&&ot.push(ze),I.push({tsMs:N.tsMs,type:"aiKill",title:`${ye} → AI: ${ve}`,subtitle:ot.join(" • "),focusPos:Ge,focusPlayerId:be,playerIds:[be].filter(bt=>typeof bt=="number")})}else if(N.type==="gmPing"){const ye=F&&typeof F.by=="string"&&F.by.length>0?F.by:"",ve=F&&typeof F.title=="string"&&F.title.length>0?F.title:"event",ce=F?fn(F.pos):null,me=ye?`(${ye} sent a GM ping to ${ve})`:`GM ping to ${ve}`;I.push({tsMs:N.tsMs,type:"gmPing",title:me,subtitle:"",focusPos:ce,focusPlayerId:null,playerIds:[]})}else if(N.type==="restart"){const ye=F&&typeof F.reason=="string"?F.reason:"",ve=ye==="session_start"?"server restart":ye==="server_restart_or_history_cleared"?"restart / history cleared":ye||"restart";I.push({tsMs:N.tsMs,type:"restart",title:"Server restarted",subtitle:ve,focusPos:null,focusPlayerId:null,playerIds:[]})}else{const ye=F&&typeof F.name=="string"?F.name:String(F&&F.playerId?F.playerId:"player"),ve=F&&typeof F.playerId=="number"?F.playerId:null,ce=N.type==="join"&&typeof ve=="number"?ut(ve,N.tsMs,9e4):null;I.push({tsMs:N.tsMs,type:N.type,title:`${N.type==="join"?"Join":"Disconnect"}: ${ye}`,subtitle:N.type==="disconnect"&&F&&typeof F.kickCause=="string"&&F.kickCause?`cause: ${F.kickCause}`:"",focusPos:ce,focusPlayerId:ve,playerIds:[ve].filter(me=>typeof me=="number")})}}I.sort((k,N)=>k.tsMs-N.tsMs);const D=rt;typeof D=="number"&&(I=I.filter(k=>k.playerIds.includes(D)));const $=420;if(I.length>$){const k=Math.ceil(I.length/$),N=[];for(let F=0;F<I.length;F+=k)N.push(I[F]);return N}return I},[rt,je,ut,_.maxTsMs,_.minTsMs]);function Et(S){const O=`${Date.now()}-${Math.random().toString(16).slice(2)}`;lt(I=>[{id:O,...S,visible:!1},...I].slice(0,5)),window.setTimeout(()=>{lt(I=>I.map(D=>D.id===O?{...D,visible:!0}:D))},10),window.setTimeout(()=>{lt(I=>I.map(D=>D.id===O?{...D,visible:!1}:D))},4500),window.setTimeout(()=>{lt(I=>I.filter(D=>D.id!==O))},5200)}return U.useEffect(()=>{if(!g||je.length===0)return;const S=nt.current;let O=S;const I=[];for(const D of je)!D||typeof D.receivedAt!="number"||D.receivedAt<=S||(D.receivedAt>O&&(O=D.receivedAt),I.push({receivedAt:D.receivedAt,payload:D.payload}));I.sort((D,$)=>D.receivedAt-$.receivedAt);for(const D of I){const $=D.payload;if(!(!$||typeof $!="object")&&$.type!=="snapshot"){if($.type==="gmPing"){const k=$.event,N=k&&typeof k.by=="string"&&k.by.length>0?k.by:"",F=k&&typeof k.title=="string"&&k.title.length>0?k.title:"Ping";Et({kind:"event",title:"GM ping",subtitle:N?`${N} • ${F}`:F});continue}if($.type==="kill"){const k=$.event,N=k&&typeof k.killerName=="string"?k.killerName:"Unknown",F=k&&typeof k.victimName=="string"?k.victimName:"Unknown",ye=k&&typeof k.weaponName=="string"&&k.weaponName.length>0?k.weaponName:"",ve=k&&typeof k.distanceM=="number"?k.distanceM:null,ce=typeof ve=="number"&&Number.isFinite(ve)?`${Math.round(ve)}m`:"",me=[];ye&&me.push(ye),ce&&me.push(ce),Et({kind:"kill",title:`${N} → ${F}`,subtitle:me.length>0?me.join(" • "):"Kill"})}else if($.type==="death"){const k=$.event,N=k&&typeof k.victimPlayerId=="number"?k.victimPlayerId:null,F=k&&typeof k.killerPlayerId=="number"?k.killerPlayerId:null;if(N!==null&&F!==null&&F>=0&&F!==N)continue;const ye=k&&typeof k.victimName=="string"?k.victimName:"Unknown",ve=k&&typeof k.weaponName=="string"&&k.weaponName.length>0?k.weaponName:"",ce=k&&typeof k.distanceM=="number"?k.distanceM:null,me=typeof ce=="number"&&Number.isFinite(ce)?`${Math.round(ce)}m`:"",ze=[];ve&&ze.push(ve),me&&ze.push(me),Et({kind:"event",title:`${ye} died`,subtitle:ze.length>0?ze.join(" • "):"Death"})}else if($.type==="aiKill"){const k=$.event,N=k&&typeof k.killerName=="string"?k.killerName:"Unknown",F=k&&typeof k.victimName=="string"?k.victimName:"Unknown",ye=k&&typeof k.weaponName=="string"&&k.weaponName.length>0?k.weaponName:"",ve=k&&typeof k.distanceM=="number"?k.distanceM:null,ce=typeof ve=="number"&&Number.isFinite(ve)?`${Math.round(ve)}m`:"",me=[];ye&&me.push(ye),ce&&me.push(ce),Et({kind:"kill",title:`${N} → AI: ${F}`,subtitle:me.length>0?me.join(" • "):"AI kill"})}}}O>S&&(nt.current=O)},[je,g]),E.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden"},children:[E.jsxs("div",{className:"row",style:{gap:12,padding:12,alignItems:"center"},children:[E.jsxs("div",{style:{minWidth:240,maxWidth:520,flex:1},children:[E.jsxs("select",{className:"input",value:i,onChange:S=>{r(S.target.value),G([]),ee(null),z(null),P([]),p({minTsMs:null,maxTsMs:null}),m(null),ge.current=null,nt.current=0,lt([])},children:[E.jsx("option",{value:"",children:"Select a server…"}),e.map(S=>E.jsxs("option",{value:S.id,children:[S.name," (",S.id,")"]},S.id))]}),e.length===0?E.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"No servers returned yet."}):null]}),Ie?null:E.jsx("button",{className:"button",onClick:()=>{l(null),id().then(S=>o(S)).catch(S=>{const O=S instanceof Error?S.message:"Failed to load server status";l(O)})},children:"Refresh overview"}),d?E.jsx("div",{className:"muted",style:{fontSize:12},children:"Loading…"}):null,c?E.jsx("div",{className:"error",style:{flex:1},children:c}):null]}),Ie?E.jsx("div",{style:{position:"relative",width:"100%",height:"calc(100vh - 72px)",padding:12,boxSizing:"border-box"},children:E.jsx("div",{className:"card",style:{width:"100%",height:"100%",padding:0,overflow:"hidden"},children:E.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[E.jsx(Xb,{players:j,focusTarget:ue,focusNonce:te,followPlayerId:xt,nameTags:B,showAimLines:fe,trail:K,deathMarkers:X,terrain:v,towns:L||void 0}),xt!==null&&et?E.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:132,display:"flex",justifyContent:"center",pointerEvents:"none"},children:E.jsx("div",{className:"card",style:{padding:"8px 12px",background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)"},children:E.jsxs("div",{style:{fontWeight:800,fontSize:12},children:["Attached to ",et,", press F to unattach"]})})}):null,E.jsx("div",{style:{position:"absolute",top:12,right:12,width:340,display:"flex",flexDirection:"column",gap:8,pointerEvents:"none"},children:At.map(S=>E.jsxs("div",{style:{pointerEvents:"none",padding:"10px 12px",borderRadius:10,background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)",opacity:S.visible?1:0,transform:S.visible?"translateY(0px)":"translateY(-6px)",transition:"opacity 250ms ease, transform 250ms ease"},children:[E.jsx("div",{style:{fontWeight:700,fontSize:13},children:S.title}),S.subtitle?E.jsx("div",{className:"muted",style:{fontSize:12},children:S.subtitle}):null]},S.id))}),E.jsx("div",{style:{position:"absolute",top:12,left:12,width:re?360:"auto"},children:E.jsxs("div",{className:"card",style:{padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"nowrap"},children:[E.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[E.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:Y==="players"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:Y==="players"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>Z("players"),children:"Players"}),E.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:Y==="events"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:Y==="events"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>Z("events"),children:"Events"})]}),E.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[Y==="players"?E.jsx("button",{type:"button",className:"button",title:"Nametag options",style:{padding:"6px 10px"},onClick:()=>he(S=>!S),children:"⚙"}):null,E.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>H(S=>!S),children:re?"−":"+"})]})]}),re?E.jsxs("div",{className:"stack",style:{marginTop:10},children:[Y==="players"?E.jsxs(E.Fragment,{children:[ie?E.jsxs("div",{style:{border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:[E.jsx("div",{className:"label",style:{marginBottom:8},children:"Nametags"}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:tt,onChange:S=>Ve(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Show nametags"})]}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:A,onChange:S=>w(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Background"})]}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:q,onChange:S=>_e(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Include vehicle in label"})]}),E.jsx("div",{className:"label",style:{marginBottom:6},children:"Nametag size"}),E.jsx("input",{style:{width:"100%"},type:"range",min:.6,max:1.6,step:.1,value:ct,onChange:S=>Ye(Number(S.target.value))}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:[ct.toFixed(1),"×"]}),E.jsx("div",{style:{height:8}}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:fe,onChange:S=>le(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Aim direction line"})]}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:Fe,onChange:S=>we(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Death markers"})]}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:Pe,onChange:S=>pe(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Trails (focused player)"})]}),Pe?E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"label",style:{marginBottom:6},children:"Trail window (seconds)"}),E.jsx("input",{style:{width:"100%"},type:"range",min:5,max:60,step:5,value:at,onChange:S=>de(Number(S.target.value))}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:[at,"s"]})]}):null]}):null,E.jsx("input",{className:"input",placeholder:"Search players…",value:ne,onChange:S=>x(S.target.value)})]}):null,Y==="players"?E.jsx("div",{className:"scroll",style:{maxHeight:240,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:$e.length===0?E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No players."}):$e.map(S=>{const O=R===S.playerId;return E.jsxs("button",{type:"button",onClick:()=>{Z("players"),ee(S.playerId),dt(S.playerId);const I=j.find(D=>D.playerId===S.playerId);I&&(z(I.pos),Q(D=>D+1))},className:"button",style:{width:"100%",textAlign:"left",borderRadius:0,border:"none",borderBottom:"1px solid rgba(255,255,255,0.06)",background:O?"rgba(255,255,255,0.08)":"transparent",padding:"8px 10px"},children:[E.jsx("div",{style:{fontWeight:700,fontSize:13},children:S.name}),E.jsxs("div",{className:"muted",style:{fontSize:11},children:["#",S.playerId]})]},S.playerId)})}):E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between",gap:10},children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Event click offset"}),E.jsxs("div",{className:"row",style:{gap:8},children:[E.jsx("input",{className:"input",style:{width:90,padding:"6px 10px"},type:"number",min:0,max:60,step:1,value:Xe,onChange:S=>Oe(Math.max(0,Math.min(60,Math.floor(Number(S.target.value)||0)))),title:"Jump this many seconds before an event"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"sec"})]})]}),E.jsx("div",{className:"scroll",style:{maxWidth:340,overflowX:"auto",overflowY:"hidden",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:Lt.length===0?E.jsx("div",{className:"muted",style:{fontSize:12},children:"No events in buffer yet."}):E.jsx("div",{style:{display:"flex",gap:10},children:Lt.slice().reverse().map((S,O)=>{const I=`${S.tsMs}|${S.type}|${S.title}|${S.subtitle||""}`,D=Ue===I,$=!!Ie&&S.type!=="gmPing"&&!!S.focusPos,k=S.subtitle?`${S.title} • ${S.subtitle}`:S.title;return E.jsxs("div",{ref:N=>{N?ke.current.set(I,N):ke.current.delete(I)},className:"button",style:{minWidth:220,textAlign:"left",borderRadius:10,border:D?"1px solid rgba(255,255,255,0.35)":"1px solid rgba(255,255,255,0.10)",background:D?"rgba(255,255,255,0.10)":"rgba(255,255,255,0.06)",padding:"8px 10px",position:"relative"},role:"button",tabIndex:0,onClick:()=>{Qe(I),Ke(!1),y(!1),it(S.tsMs),typeof S.focusPlayerId=="number"&&ee(S.focusPlayerId),S.focusPos&&(z(S.focusPos),Q(N=>N+1))},onKeyDown:N=>{N.key!=="Enter"&&N.key!==" "||(N.preventDefault(),Qe(I),Ke(!1),y(!1),it(S.tsMs),typeof S.focusPlayerId=="number"&&ee(S.focusPlayerId),S.focusPos&&(z(S.focusPos),Q(F=>F+1)))},children:[E.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:8,right:8,padding:"4px 8px",fontSize:11,opacity:$?1:.4},title:$?"Send GM ping to this event location":"No position for this event",disabled:!$,onClick:N=>{if(N.stopPropagation(),!Ie)return;const F=S.focusPos;if(!F)return;const ye=typeof S.focusPlayerId=="number"?S.focusPlayerId:Array.isArray(S.playerIds)&&S.playerIds.length>0?S.playerIds[0]:null;vM({serverId:Ie,tsMs:S.tsMs,pos:F,title:k,reporterPlayerId:ye})},children:"GM ping"}),E.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:34,right:8,padding:"4px 8px",fontSize:11,opacity:$?1:.4},title:$?"Export 5s before/after as a GIF to Discord":"No position for this event",disabled:!$,onClick:N=>{if(N.stopPropagation(),!Ie)return;const F=S.focusPos;F&&(async()=>{try{await bM({serverId:Ie,tsMs:S.tsMs,title:S.title,pos:F,focusPlayerId:typeof S.focusPlayerId=="number"?S.focusPlayerId:null,playerIds:Array.isArray(S.playerIds)?S.playerIds:null}),Et({kind:"event",title:"Discord export",subtitle:"Sent"})}catch(ye){f(ye instanceof Error?ye.message:"Failed to export to Discord")}})()},children:"Export"}),E.jsx("div",{style:{fontWeight:800,fontSize:12},children:S.title}),E.jsxs("div",{className:"muted",style:{fontSize:11,marginTop:2},children:["+",xl(S.tsMs-oe.min),He?` • ${He(S.tsMs)}`:"",S.subtitle?` • ${S.subtitle}`:""]})]},`${S.tsMs}-${O}`)})})})]}),E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Selected"}),R===null?E.jsx("div",{className:"muted",style:{fontSize:12},children:"Click a player to view equipment."}):Rt?E.jsxs("div",{style:{fontSize:12},children:[E.jsxs("div",{className:"muted",style:{marginBottom:6},children:["pos: ",JSON.stringify(Rt.pos)]}),E.jsxs("details",{open:!0,children:[E.jsx("summary",{style:{cursor:"pointer",fontWeight:700},children:"Weapon"}),E.jsx("div",{className:"muted",style:{marginTop:6},children:Rt.weapon&&Rt.weapon.name?Rt.weapon.name:"None"})]}),E.jsx("div",{style:{height:6}}),E.jsxs("details",{children:[E.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Inventory (",Array.isArray(Rt.inventory)?Rt.inventory.length:0,")"]}),E.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:(()=>{const S=Kb(Rt.inventory,O=>O&&O.name?String(O.name):"Item");return S.length===0?E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No inventory data in this snapshot."}):S.slice(0,80).map((O,I)=>E.jsx("div",{style:{padding:"7px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:E.jsxs("div",{style:{fontSize:12},children:[O.name,O.count>1?` ×${O.count}`:""]})},I))})()})]}),E.jsx("div",{style:{height:6}}),E.jsxs("details",{children:[E.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Hotbar (",Array.isArray(Rt.attachments)?Rt.attachments.length:0,")"]}),E.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:Array.isArray(Rt.attachments)&&Rt.attachments.length>0?Rt.attachments.map((S,O)=>E.jsx("div",{style:{padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:E.jsxs("div",{style:{fontSize:12},children:[S&&S.slot?E.jsxs("span",{className:"muted",style:{fontSize:11},children:[String(S.slot),":"]}):null," ",S&&S.name?String(S.name):"Item"]})},O)):E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No attachments data in this snapshot."})})]}),E.jsx("div",{style:{height:8}}),E.jsxs("div",{children:[E.jsx("div",{className:"muted",style:{fontSize:12,marginBottom:6},children:"Filter events by player"}),E.jsxs("select",{className:"input",style:{width:"100%",padding:"6px 10px"},value:rt===null?"":String(rt),onChange:S=>{const O=String(S.target.value||"");if(!O){wt(null);return}const I=Number(O);wt(Number.isFinite(I)?I:null)},title:"Filter events by player",children:[E.jsx("option",{value:"",children:"All players"}),st.map(S=>E.jsxs("option",{value:String(S.playerId),children:[S.name," (#",S.playerId,")"]},S.playerId))]})]})]}):E.jsx("div",{className:"muted",style:{fontSize:12},children:"No snapshot data for this player at the current time."})]})]}):null]})}),E.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:12,display:"flex",justifyContent:"center"},children:E.jsxs("div",{className:"card",style:{width:"min(980px, 100%)",padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Replay time"}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:["+",xl(oe.value-oe.min)," of +",xl(oe.max-oe.min),He?` • ${He(oe.value)}`:""]})]}),E.jsxs("div",{className:"row",style:{gap:10,alignItems:"center"},children:[E.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>{g&&y(!1),Ke(S=>!S)},disabled:oe.disabled,children:yt?"Pause":"Play"}),E.jsxs("select",{className:"input",style:{width:110,padding:"6px 10px"},value:String(W),onChange:S=>Gt(Number(S.target.value)),disabled:oe.disabled,title:"Playback speed",children:[E.jsx("option",{value:"0.25",children:"0.25×"}),E.jsx("option",{value:"0.5",children:"0.5×"}),E.jsx("option",{value:"1",children:"1×"}),E.jsx("option",{value:"2",children:"2×"}),E.jsx("option",{value:"4",children:"4×"})]}),E.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[E.jsx("input",{type:"checkbox",checked:Ze,onChange:S=>J(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Events"})]}),E.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[E.jsx("input",{type:"checkbox",checked:g,onChange:S=>{const O=S.target.checked;y(O),O&&Ke(!1)}}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Live"})]})]})]}),Ze?E.jsxs("div",{style:{position:"relative",height:18,marginTop:6,marginBottom:4},children:[E.jsx("div",{style:{position:"absolute",left:0,right:0,top:8,height:2,background:"rgba(255,255,255,0.10)"}}),ae?E.jsxs("div",{style:{position:"absolute",left:`${ae.leftPct}%`,top:0,transform:"translate(-50%, -110%)",zIndex:10,pointerEvents:"none",maxWidth:320,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:"6px 8px"},children:[E.jsx("div",{style:{fontWeight:800,fontSize:12,lineHeight:1.2},children:ae.title}),E.jsx("div",{className:"muted",style:{fontSize:11,marginTop:2,lineHeight:1.2},children:ae.subtitle})]}):null,(()=>{const S=oe.min,O=oe.max,I=Math.max(1,O-S);return _n.map((D,$)=>{const k=(D.tsMs-S)/I,N=Math.min(1,Math.max(0,k))*100,F=D.type==="kill"||D.type==="death"||D.type==="aiKill"?"rgba(255,74,74,0.95)":D.type==="restart"?"rgba(255,217,102,0.95)":"rgba(183,247,200,0.95)",ye=D.type==="disconnect"?"brightness(0.65) saturate(1.1)":void 0,ve=`+${xl(D.tsMs-S)}${He?` • ${He(D.tsMs)}`:""}${D.subtitle?` • ${D.subtitle}`:""}`,ce=`${D.tsMs}|${D.type}|${D.title}|${D.subtitle||""}`;return E.jsx("button",{type:"button",className:"button",style:{position:"absolute",left:`calc(${N}% - 4px)`,top:4,width:8,height:8,borderRadius:999,padding:0,border:"1px solid rgba(0,0,0,0.35)",background:F,filter:ye},onMouseEnter:()=>{Ae({tsMs:D.tsMs,type:D.type,title:D.title,subtitle:ve,leftPct:N})},onMouseLeave:()=>Ae(null),onClick:()=>{Ke(!1),y(!1),it(D.tsMs),typeof D.focusPlayerId=="number"&&ee(D.focusPlayerId),D.focusPos&&(z(D.focusPos),Q(me=>me+1)),Z("events"),Qe(ce),Ae(null)}},`${D.tsMs}-${$}-${D.type}`)})})()]}):null,E.jsx("input",{style:{width:"100%"},type:"range",min:oe.min,max:oe.max,value:oe.value,disabled:oe.disabled,onChange:S=>{const O=Number(S.target.value);Number.isFinite(O)&&(g&&y(!1),yt&&Ke(!1),m(O))}})]})})]})})}):null,Ie?null:E.jsxs("div",{style:{padding:12,height:"calc(100vh - 72px)",boxSizing:"border-box",overflow:"auto"},children:[E.jsxs("div",{className:"card",style:{marginBottom:12},children:[E.jsx("div",{style:{fontWeight:900,letterSpacing:.2},children:"Server overview"}),E.jsx("div",{style:{marginTop:4,fontSize:13},children:"Pick a server to open the replay viewer. Times are shown in your local clock."}),a?E.jsx("div",{className:"error",style:{marginTop:10},children:a}):null]}),E.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:(s&&s.length>0?s:e.map(S=>({serverId:S.id,name:S.name,lastIngestTsMs:null,minTsMs:null,maxTsMs:null,firstReceivedAt:null,lastReceivedAt:null,storedEvents:null,totalEvents:null,retentionMs:0,mapId:null}))).map(S=>{const O=typeof S.retentionMs=="number"?S.retentionMs:0,I=typeof S.lastReceivedAt=="number"?S.lastReceivedAt:null,D=O>0&&I!==null?I-O:null,$=typeof S.firstReceivedAt=="number"?D!==null?Math.max(S.firstReceivedAt,D):S.firstReceivedAt:D;return E.jsxs("button",{className:"card",style:{textAlign:"left",cursor:"pointer",border:"none"},onClick:()=>{r(S.serverId),G([]),ee(null),z(null),P([]),p({minTsMs:null,maxTsMs:null}),m(null),ge.current=null,nt.current=0,lt([])},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12},children:[E.jsx("div",{style:{fontWeight:900},children:S.name}),E.jsx("div",{className:"muted",style:{fontSize:12},children:S.serverId})]}),E.jsxs("div",{style:{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Events"}),E.jsx("div",{style:{fontWeight:800},children:typeof S.storedEvents=="number"?`${S.storedEvents} events`:"—"}),typeof S.totalEvents=="number"&&typeof S.storedEvents=="number"&&S.totalEvents!==S.storedEvents?E.jsxs("div",{className:"muted",style:{fontSize:12,marginTop:2},children:["All-time: ",S.totalEvents," events"]}):null]}),E.jsxs("div",{children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Retention"}),E.jsx("div",{style:{fontWeight:800},children:O>0?qb(O):"∞"})]}),E.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Buffer window"}),E.jsxs("div",{style:{fontWeight:800,fontSize:13},children:[rf($)," → ",rf(I)]})]}),E.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Last ingest"}),E.jsx("div",{style:{fontWeight:800,fontSize:13},children:rf(S.lastReceivedAt)})]})]})]},S.serverId)})}),(!s||s.length===0)&&e.length===0?E.jsx("div",{style:{marginTop:12},children:"No servers yet — add one in the Dev page, then come back here."}):null]})]})}function Sg(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function Qb(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function Jb(){const[t,e]=U.useState(null),[n,i]=U.useState(null);U.useEffect(()=>{let s=!1;return id().then(o=>{s||(e(o),i(null))}).catch(o=>{if(s)return;const a=o instanceof Error?o.message:"Failed to load replay status";i(a)}),()=>{s=!0}},[]);const r=U.useMemo(()=>{if(!t)return[];const s=t.slice();return s.sort((o,a)=>{const l=typeof o.storedEvents=="number"?o.storedEvents:-1;return(typeof a.storedEvents=="number"?a.storedEvents:-1)-l}),s.slice(0,6)},[t]);return E.jsx("div",{className:"container",children:E.jsxs("div",{className:"stack",children:[E.jsx("div",{className:"card",style:{padding:18},children:E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsx("div",{className:"label",children:"Welcome"}),E.jsx("h1",{className:"h1",style:{marginTop:0},children:"ReforgedZ Admin"}),E.jsx("div",{className:"muted",children:"Use the sidebar to manage users, servers, and replay history."})]})}),E.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:[E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",style:{gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Replay overview"}),E.jsx("div",{className:"muted",style:{fontSize:13},children:t?`${t.length} server${t.length===1?"":"s"} detected.`:"Loading…"}),n?E.jsx("div",{className:"error",style:{marginTop:8},children:n}):null]}),r.length>0?E.jsx("div",{className:"stack",style:{gap:8},children:r.map(s=>{const o=typeof s.retentionMs=="number"?s.retentionMs:0,a=typeof s.lastReceivedAt=="number"?s.lastReceivedAt:null,l=o>0&&a!==null?a-o:null,c=typeof s.firstReceivedAt=="number"?l!==null?Math.max(s.firstReceivedAt,l):s.firstReceivedAt:l;return E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:850},children:s.name}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:[Sg(c)," → ",Sg(a)]})]}),E.jsxs("div",{style:{textAlign:"right"},children:[E.jsx("div",{style:{fontWeight:900},children:typeof s.storedEvents=="number"?`${s.storedEvents} events`:"—"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:o>0?Qb(o):"∞"}),typeof s.totalEvents=="number"&&typeof s.storedEvents=="number"&&s.totalEvents!==s.storedEvents?E.jsxs("div",{className:"muted",style:{fontSize:11},children:["All-time ",s.totalEvents," events"]}):null]})]},s.serverId)})}):E.jsx("div",{className:"muted",style:{fontSize:12},children:"Open Replay Tool to see a detailed per-server dashboard."})]})}),E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",style:{gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Replay Tool tips"}),E.jsx("div",{className:"muted",style:{fontSize:13},children:"A few quick controls that help a lot."})]}),E.jsxs("div",{className:"stack",style:{gap:6,fontSize:13},children:[E.jsxs("div",{children:[E.jsx("span",{style:{fontWeight:850},children:"Attach camera:"})," click a player in the left panel."]}),E.jsxs("div",{children:[E.jsx("span",{style:{fontWeight:850},children:"Detach:"})," press ",E.jsx("span",{style:{fontWeight:900},children:"F"}),"."]}),E.jsxs("div",{children:[E.jsx("span",{style:{fontWeight:850},children:"Event jump offset:"})," defaults to 5s before the event (configurable in Replay Tool)."]})]})]})}),E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",style:{gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Retention"}),E.jsx("div",{className:"muted",style:{fontSize:13},children:"Replay is a rolling buffer. Restarts are marked in the timeline."})]}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"If you clear a server’s history, replay data is removed but cached map metadata is preserved."})]})})]})]})})}function eC(){const[t,e]=U.useState(null),[n,i]=U.useState(!1),[r,s]=U.useState([]),[o,a]=U.useState(""),[l,c]=U.useState(""),[f,d]=U.useState(!0),[h,g]=U.useState(!1),[y,_]=U.useState(!1);async function p(){i(!0),e(null);try{const m=await yM();s(m)}catch(m){e(m instanceof Error?m.message:"Failed to load users")}finally{i(!1)}}U.useEffect(()=>{p()},[]);const u=U.useMemo(()=>o.trim().length>=3&&l.length>=6,[l.length,o]);return E.jsx("div",{className:"container",children:E.jsxs("div",{className:"stack",children:[E.jsx("h1",{className:"h1",children:"Admin"}),t?E.jsx("div",{className:"error",children:t}):null,E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Create user"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Create a new account and choose which tools it can access."})]}),E.jsxs("div",{className:"row",children:[E.jsxs("div",{style:{flex:1,minWidth:240},children:[E.jsx("div",{className:"label",children:"Username"}),E.jsx("input",{className:"input",value:o,onChange:m=>a(m.target.value),placeholder:"username"})]}),E.jsxs("div",{style:{flex:1,minWidth:240},children:[E.jsx("div",{className:"label",children:"Password"}),E.jsx("input",{className:"input",type:"password",value:l,onChange:m=>c(m.target.value),placeholder:"password"})]})]}),E.jsxs("div",{className:"row",style:{gap:16},children:[E.jsxs("label",{className:"row",style:{gap:8},children:[E.jsx("input",{type:"checkbox",checked:f,onChange:m=>d(m.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Replay Tool"})]}),E.jsxs("label",{className:"row",style:{gap:8},children:[E.jsx("input",{type:"checkbox",checked:h,onChange:m=>g(m.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Admin"})]}),E.jsxs("label",{className:"row",style:{gap:8},children:[E.jsx("input",{type:"checkbox",checked:y,onChange:m=>_(m.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Dev"})]})]}),E.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:E.jsx("button",{className:"button buttonPrimary",disabled:!u||n,onClick:async()=>{i(!0),e(null);try{await _M({username:o.trim(),password:l,tools:{replay:f,admin:h,dev:y}}),a(""),c(""),d(!0),g(!1),_(!1),await p()}catch(m){e(m instanceof Error?m.message:"Failed to create user")}finally{i(!1)}},children:"Create user"})})]})}),E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Users"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Manage tool access and reset passwords."})]}),E.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:p,children:"Refresh"})]}),E.jsx("div",{className:"scroll",style:{maxHeight:420,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No users found."}):r.map(m=>{var v,M,L,C,b,G;return E.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:E.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:800},children:m.username}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:["tools: ",(v=m.tools)!=null&&v.replay?"replay ":"",(M=m.tools)!=null&&M.admin?"admin ":"",(L=m.tools)!=null&&L.dev?"dev ":""]})]}),E.jsxs("div",{className:"row",style:{gap:8},children:[E.jsxs("button",{className:"button",onClick:async()=>{var ne,x,R;i(!0),e(null);try{await yu(m.username,{replay:!((ne=m.tools)!=null&&ne.replay),admin:!!((x=m.tools)!=null&&x.admin),dev:!!((R=m.tools)!=null&&R.dev)}),await p()}catch(ee){e(ee instanceof Error?ee.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle replay tool access",children:["Replay: ",(C=m.tools)!=null&&C.replay?"On":"Off"]}),E.jsxs("button",{className:"button",onClick:async()=>{var ne,x,R;i(!0),e(null);try{await yu(m.username,{replay:!!((ne=m.tools)!=null&&ne.replay),admin:!((x=m.tools)!=null&&x.admin),dev:!!((R=m.tools)!=null&&R.dev)}),await p()}catch(ee){e(ee instanceof Error?ee.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle admin access",children:["Admin: ",(b=m.tools)!=null&&b.admin?"On":"Off"]}),E.jsxs("button",{className:"button",onClick:async()=>{var ne,x,R;i(!0),e(null);try{await yu(m.username,{replay:!!((ne=m.tools)!=null&&ne.replay),admin:!!((x=m.tools)!=null&&x.admin),dev:!((R=m.tools)!=null&&R.dev)}),await p()}catch(ee){e(ee instanceof Error?ee.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle dev access",children:["Dev: ",(G=m.tools)!=null&&G.dev?"On":"Off"]}),E.jsx("button",{className:"button",style:{borderColor:"rgba(255, 180, 180, 0.35)"},disabled:n,onClick:async()=>{if(confirm(`Delete user '${m.username}'?`)){i(!0),e(null);try{await xM(m.username),await p()}catch(ne){e(ne instanceof Error?ne.message:"Failed to delete user")}finally{i(!1)}}},children:"Delete"})]})]})},m.username)})})]})})]})})}function tC(){const[t,e]=U.useState(null),[n,i]=U.useState(!1),[r,s]=U.useState([]),[o,a]=U.useState(""),[l,c]=U.useState(""),[f,d]=U.useState(!1),[h,g]=U.useState(""),[y,_]=U.useState(""),[p,u]=U.useState("");async function m(){i(!0),e(null);try{const v=await SM();s(v);const M=await TM();d(!!M.isSet),a(M.masked||"")}catch(v){e(v instanceof Error?v.message:"Failed to load dev servers")}finally{i(!1)}}return U.useEffect(()=>{m()},[]),E.jsx("div",{className:"container",children:E.jsxs("div",{className:"stack",children:[E.jsx("h1",{className:"h1",children:"Dev"}),t?E.jsx("div",{className:"error",children:t}):null,E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Discord webhook (global)"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Used by “Export event to Discord”. One webhook URL is shared for all servers."})]}),E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Current"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:f?o||"set":"not set"})]}),E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Webhook URL"}),E.jsx("input",{className:"input",type:"password",value:l,onChange:v=>c(v.target.value),placeholder:"https://discord.com/api/webhooks/..."}),E.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Leave blank and click Save to clear."})]}),E.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:E.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:async()=>{i(!0),e(null);try{await AM(l.trim()),c(""),await m()}catch(v){e(v instanceof Error?v.message:"Failed to save webhook")}finally{i(!1)}},children:"Save webhook"})}),E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Add server"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Adds a new ingest key so the backend will accept replay uploads for that server."})]}),E.jsxs("div",{className:"row",children:[E.jsxs("div",{style:{flex:1,minWidth:240},children:[E.jsx("div",{className:"label",children:"Server ID"}),E.jsx("input",{className:"input",value:h,onChange:v=>g(v.target.value),placeholder:"reforgedz-dev-eu-1"})]}),E.jsxs("div",{style:{flex:1,minWidth:240},children:[E.jsx("div",{className:"label",children:"Server name (optional)"}),E.jsx("input",{className:"input",value:p,onChange:v=>u(v.target.value),placeholder:"EU #1"})]})]}),E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Server key / secret"}),E.jsx("input",{className:"input",value:y,onChange:v=>_(v.target.value),placeholder:"secret"}),E.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"This must match what the Reforger exporter sends as serverKey."})]}),E.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:E.jsx("button",{className:"button buttonPrimary",disabled:n||h.trim().length===0||y.trim().length<6,onClick:async()=>{i(!0),e(null);try{await MM({serverId:h.trim(),serverKey:y.trim(),name:p.trim()||void 0}),g(""),_(""),u(""),await m()}catch(v){e(v instanceof Error?v.message:"Failed to add server")}finally{i(!1)}},children:"Add server"})})]})}),E.jsxs("div",{className:"card",children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Servers"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Clear history deletes stored replay history for that server (events + snapshots). Cached map data is kept."})]}),E.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:m,children:"Refresh"})]}),E.jsx("div",{style:{height:10}}),E.jsx("div",{className:"scroll",style:{maxHeight:520,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No servers configured."}):r.map(v=>E.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:E.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:800},children:v.name||v.id}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:["id: ",v.id,v.keyHint?` • key: ${v.keyHint}`:""]})]}),E.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Clear history for '${v.id}'? This deletes stored replay data.`)){i(!0),e(null);try{await EM(v.id),await m()}catch(M){e(M instanceof Error?M.message:"Failed to clear history")}finally{i(!1)}}},children:"Clear history"}),E.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Regenerate terrain data for '${v.id}'? This queues a command for the exporter to re-send map terrain.`)){i(!0),e(null);try{await wM(v.id),await m()}catch(M){e(M instanceof Error?M.message:"Failed to regenerate terrain")}finally{i(!1)}}},children:"Regenerate terrain data"})]})},v.id))})]})]})})}function Sl(t){return E.jsx(aM,{to:t.to,className:({isActive:e})=>`navItem${e?" navItemActive":""}`,children:t.label})}function nC(){const t=Dc();function e(){dM(),t("/login",{replace:!0})}return E.jsxs("div",{className:"appShell",children:[E.jsxs("aside",{className:"sidebar",children:[E.jsxs("div",{className:"stack",style:{gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"ReforgedZ"}),E.jsx("div",{className:"h2",children:"Admin Panel"})]}),E.jsx("div",{style:{height:8}}),E.jsx("div",{className:"label",children:"Tools"}),E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsx(Sl,{to:"/",label:"Home"}),mu("replay")?E.jsx(Sl,{to:"/replay",label:"Replay Tool"}):null,mu("admin")?E.jsx(Sl,{to:"/admin",label:"Admin"}):null,mu("dev")?E.jsx(Sl,{to:"/dev",label:"Dev"}):null]})]}),E.jsx("div",{style:{flex:1}}),E.jsx("button",{className:"button buttonPrimary",onClick:e,children:"Log out"})]}),E.jsx("main",{className:"main",children:E.jsx($S,{})})]})}function iC(t){const e=Zi();return Kt()?E.jsx(E.Fragment,{children:t.children}):E.jsx(W0,{to:"/login",replace:!0,state:{from:e.pathname}})}function rC(){return E.jsxs(qS,{children:[E.jsx(sr,{path:"/login",element:E.jsx(CM,{})}),E.jsxs(sr,{element:E.jsx(iC,{children:E.jsx(nC,{})}),children:[E.jsx(sr,{path:"/",element:E.jsx(Jb,{})}),E.jsx(sr,{path:"/replay",element:E.jsx(Zb,{})}),E.jsx(sr,{path:"/admin",element:E.jsx(eC,{})}),E.jsx(sr,{path:"/dev",element:E.jsx(tC,{})})]}),E.jsx(sr,{path:"*",element:E.jsx(W0,{to:"/",replace:!0})})]})}of.createRoot(document.getElementById("root")).render(E.jsx(Ng.StrictMode,{children:E.jsx(iM,{children:E.jsx(rC,{})})}));
