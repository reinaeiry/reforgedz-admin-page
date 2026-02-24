function Uy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Fy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cg={exports:{}},wc={},Rg={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),ky=Symbol.for("react.portal"),Oy=Symbol.for("react.fragment"),zy=Symbol.for("react.strict_mode"),By=Symbol.for("react.profiler"),Hy=Symbol.for("react.provider"),Gy=Symbol.for("react.context"),Vy=Symbol.for("react.forward_ref"),Wy=Symbol.for("react.suspense"),jy=Symbol.for("react.memo"),Xy=Symbol.for("react.lazy"),Ch=Symbol.iterator;function $y(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var Pg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lg=Object.assign,Ng={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=Ng,this.updater=n||Pg}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ig(){}Ig.prototype=Mo.prototype;function Ed(t,e,n){this.props=t,this.context=e,this.refs=Ng,this.updater=n||Pg}var wd=Ed.prototype=new Ig;wd.constructor=Ed;Lg(wd,Mo.prototype);wd.isPureReactComponent=!0;var Rh=Array.isArray,Dg=Object.prototype.hasOwnProperty,Td={current:null},Ug={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dg.call(e,i)&&!Ug.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ca,type:t,key:s,ref:o,props:r,_owner:Td.current}}function Yy(t,e){return{$$typeof:Ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ca}function qy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ph=/\/+/g;function Yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qy(""+t.key):e.toString(36)}function Pl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ca:case ky:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Yc(o,0):i,Rh(r)?(n="",t!=null&&(n=t.replace(Ph,"$&/")+"/"),Pl(r,e,n,"",function(c){return c})):r!=null&&(Ad(r)&&(r=Yy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ph,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Rh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Yc(s,a);o+=Pl(s,e,n,l,r)}else if(l=$y(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Yc(s,a++),o+=Pl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var i=[],r=0;return Pl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ky(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var On={current:null},Ll={transition:null},Zy={ReactCurrentDispatcher:On,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:Td};function kg(){throw Error("act(...) is not supported in production builds of React.")}Mt.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!Ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Mt.Component=Mo;Mt.Fragment=Oy;Mt.Profiler=By;Mt.PureComponent=Ed;Mt.StrictMode=zy;Mt.Suspense=Wy;Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;Mt.act=kg;Mt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Lg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Td.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dg.call(e,l)&&!Ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ca,type:t.type,key:r,ref:s,props:i,_owner:o}};Mt.createContext=function(t){return t={$$typeof:Gy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Hy,_context:t},t.Consumer=t};Mt.createElement=Fg;Mt.createFactory=function(t){var e=Fg.bind(null,t);return e.type=t,e};Mt.createRef=function(){return{current:null}};Mt.forwardRef=function(t){return{$$typeof:Vy,render:t}};Mt.isValidElement=Ad;Mt.lazy=function(t){return{$$typeof:Xy,_payload:{_status:-1,_result:t},_init:Ky}};Mt.memo=function(t,e){return{$$typeof:jy,type:t,compare:e===void 0?null:e}};Mt.startTransition=function(t){var e=Ll.transition;Ll.transition={};try{t()}finally{Ll.transition=e}};Mt.unstable_act=kg;Mt.useCallback=function(t,e){return On.current.useCallback(t,e)};Mt.useContext=function(t){return On.current.useContext(t)};Mt.useDebugValue=function(){};Mt.useDeferredValue=function(t){return On.current.useDeferredValue(t)};Mt.useEffect=function(t,e){return On.current.useEffect(t,e)};Mt.useId=function(){return On.current.useId()};Mt.useImperativeHandle=function(t,e,n){return On.current.useImperativeHandle(t,e,n)};Mt.useInsertionEffect=function(t,e){return On.current.useInsertionEffect(t,e)};Mt.useLayoutEffect=function(t,e){return On.current.useLayoutEffect(t,e)};Mt.useMemo=function(t,e){return On.current.useMemo(t,e)};Mt.useReducer=function(t,e,n){return On.current.useReducer(t,e,n)};Mt.useRef=function(t){return On.current.useRef(t)};Mt.useState=function(t){return On.current.useState(t)};Mt.useSyncExternalStore=function(t,e,n){return On.current.useSyncExternalStore(t,e,n)};Mt.useTransition=function(){return On.current.useTransition()};Mt.version="18.3.1";Rg.exports=Mt;var F=Rg.exports;const Og=Fy(F),Qy=Uy({__proto__:null,default:Og},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy=F,e_=Symbol.for("react.element"),t_=Symbol.for("react.fragment"),n_=Object.prototype.hasOwnProperty,i_=Jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r_={key:!0,ref:!0,__self:!0,__source:!0};function zg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)n_.call(e,i)&&!r_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:e_,type:t,key:s,ref:o,props:r,_owner:i_.current}}wc.Fragment=t_;wc.jsx=zg;wc.jsxs=zg;Cg.exports=wc;var E=Cg.exports,df={},Bg={exports:{}},ei={},Hg={exports:{}},Gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,Y){var Z=H.length;H.push(Y);e:for(;0<Z;){var re=Z-1>>>1,he=H[re];if(0<r(he,Y))H[re]=Y,H[Z]=he,Z=re;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var Y=H[0],Z=H.pop();if(Z!==Y){H[0]=Z;e:for(var re=0,he=H.length,Ze=he>>>1;re<Ze;){var J=2*(re+1)-1,le=H[J],Ae=J+1,Fe=H[Ae];if(0>r(le,Z))Ae<he&&0>r(Fe,le)?(H[re]=Fe,H[Ae]=Z,re=Ae):(H[re]=le,H[J]=Z,re=J);else if(Ae<he&&0>r(Fe,Z))H[re]=Fe,H[Ae]=Z,re=Ae;else break e}}return Y}function r(H,Y){var Z=H.sortIndex-Y.sortIndex;return Z!==0?Z:H.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,g=!1,y=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(H){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=H)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(H){if(_=!1,v(H),!y)if(n(l)!==null)y=!0,Q(I);else{var Y=n(c);Y!==null&&ae(M,Y.startTime-H)}}function I(H,Y){y=!1,_&&(_=!1,u(G),G=-1),g=!0;var Z=h;try{for(v(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||H&&!L());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var he=re(d.expirationTime<=Y);Y=t.unstable_now(),typeof he=="function"?d.callback=he:d===n(l)&&i(l),v(Y)}else i(l);d=n(l)}if(d!==null)var Ze=!0;else{var J=n(c);J!==null&&ae(M,J.startTime-Y),Ze=!1}return Ze}finally{d=null,h=Z,g=!1}}var P=!1,C=null,G=-1,ne=5,x=-1;function L(){return!(t.unstable_now()-x<ne)}function ee(){if(C!==null){var H=t.unstable_now();x=H;var Y=!0;try{Y=C(!0,H)}finally{Y?ue():(P=!1,C=null)}}else P=!1}var ue;if(typeof m=="function")ue=function(){m(ee)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,te=z.port2;z.port1.onmessage=ee,ue=function(){te.postMessage(null)}}else ue=function(){p(ee,0)};function Q(H){C=H,P||(P=!0,ue())}function ae(H,Y){G=p(function(){H(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Q(I))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var Z=h;h=Y;try{return H()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,Y){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=h;h=H;try{return Y()}finally{h=Z}},t.unstable_scheduleCallback=function(H,Y,Z){var re=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?re+Z:re):Z=re,H){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Z+he,H={id:f++,callback:Y,priorityLevel:H,startTime:Z,expirationTime:he,sortIndex:-1},Z>re?(H.sortIndex=Z,e(c,H),n(l)===null&&H===n(c)&&(_?(u(G),G=-1):_=!0,ae(M,Z-re))):(H.sortIndex=he,e(l,H),y||g||(y=!0,Q(I))),H},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(H){var Y=h;return function(){var Z=h;h=Y;try{return H.apply(this,arguments)}finally{h=Z}}}})(Gg);Hg.exports=Gg;var s_=Hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_=F,Jn=s_;function _e(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vg=new Set,la={};function ps(t,e){lo(t,e),lo(t+"Capture",e)}function lo(t,e){for(la[t]=e,t=0;t<e.length;t++)Vg.add(e[t])}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hf=Object.prototype.hasOwnProperty,a_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lh={},Nh={};function l_(t){return hf.call(Nh,t)?!0:hf.call(Lh,t)?!1:a_.test(t)?Nh[t]=!0:(Lh[t]=!0,!1)}function c_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function u_(t,e,n,i){if(e===null||typeof e>"u"||c_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tn[t]=new zn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tn[e]=new zn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tn[t]=new zn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tn[t]=new zn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tn[t]=new zn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tn[t]=new zn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tn[t]=new zn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tn[t]=new zn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tn[t]=new zn(t,5,!1,t.toLowerCase(),null,!1,!1)});var bd=/[\-:]([a-z])/g;function Cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bd,Cd);Tn[e]=new zn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bd,Cd);Tn[e]=new zn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bd,Cd);Tn[e]=new zn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tn[t]=new zn(t,1,!1,t.toLowerCase(),null,!1,!1)});Tn.xlinkHref=new zn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tn[t]=new zn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rd(t,e,n,i){var r=Tn.hasOwnProperty(e)?Tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(u_(e,n,r,i)&&(n=null),i||r===null?l_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var er=o_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),Wg=Symbol.for("react.provider"),jg=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),gf=Symbol.for("react.suspense_list"),Nd=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),Xg=Symbol.for("react.offscreen"),Ih=Symbol.iterator;function Lo(t){return t===null||typeof t!="object"?null:(t=Ih&&t[Ih]||t["@@iterator"],typeof t=="function"?t:null)}var Yt=Object.assign,qc;function Yo(t){if(qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qc=e&&e[1]||""}return`
`+qc+t}var Kc=!1;function Zc(t,e){if(!t||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yo(t):""}function f_(t){switch(t.tag){case 5:return Yo(t.type);case 16:return Yo("Lazy");case 13:return Yo("Suspense");case 19:return Yo("SuspenseList");case 0:case 2:case 15:return t=Zc(t.type,!1),t;case 11:return t=Zc(t.type.render,!1),t;case 1:return t=Zc(t.type,!0),t;default:return""}}function vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case Bs:return"Portal";case pf:return"Profiler";case Pd:return"StrictMode";case mf:return"Suspense";case gf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jg:return(t.displayName||"Context")+".Consumer";case Wg:return(t._context.displayName||"Context")+".Provider";case Ld:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nd:return e=t.displayName||null,e!==null?e:vf(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return vf(t(e))}catch{}}return null}function d_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vf(e);case 8:return e===Pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $g(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h_(t){var e=$g(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oa(t){t._valueTracker||(t._valueTracker=h_(t))}function Yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$g(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yf(t,e){var n=e.checked;return Yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qg(t,e){e=e.checked,e!=null&&Rd(t,"checked",e,!1)}function _f(t,e){qg(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xf(t,e.type,n):e.hasOwnProperty("defaultValue")&&xf(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xf(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qo=Array.isArray;function eo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_e(91));return Yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_e(92));if(qo(n)){if(1<n.length)throw Error(_e(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function Kg(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function kh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var za,Qg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(za=za||document.createElement("div"),za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p_=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(t){p_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qo[e]=Qo[t]})});function Jg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qo.hasOwnProperty(t)&&Qo[t]?(""+e).trim():e+"px"}function ev(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var m_=Yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ef(t,e){if(e){if(m_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_e(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_e(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_e(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_e(62))}}function wf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tf=null;function Id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Af=null,to=null,no=null;function Oh(t){if(t=La(t)){if(typeof Af!="function")throw Error(_e(280));var e=t.stateNode;e&&(e=Rc(e),Af(t.stateNode,t.type,e))}}function tv(t){to?no?no.push(t):no=[t]:to=t}function nv(){if(to){var t=to,e=no;if(no=to=null,Oh(t),e)for(t=0;t<e.length;t++)Oh(e[t])}}function iv(t,e){return t(e)}function rv(){}var Qc=!1;function sv(t,e,n){if(Qc)return t(e,n);Qc=!0;try{return iv(t,e,n)}finally{Qc=!1,(to!==null||no!==null)&&(rv(),nv())}}function ua(t,e){var n=t.stateNode;if(n===null)return null;var i=Rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_e(231,e,typeof n));return n}var bf=!1;if(qi)try{var No={};Object.defineProperty(No,"passive",{get:function(){bf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{bf=!1}function g_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Jo=!1,jl=null,Xl=!1,Cf=null,v_={onError:function(t){Jo=!0,jl=t}};function y_(t,e,n,i,r,s,o,a,l){Jo=!1,jl=null,g_.apply(v_,arguments)}function __(t,e,n,i,r,s,o,a,l){if(y_.apply(this,arguments),Jo){if(Jo){var c=jl;Jo=!1,jl=null}else throw Error(_e(198));Xl||(Xl=!0,Cf=c)}}function ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ov(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zh(t){if(ms(t)!==t)throw Error(_e(188))}function x_(t){var e=t.alternate;if(!e){if(e=ms(t),e===null)throw Error(_e(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zh(r),t;if(s===i)return zh(r),e;s=s.sibling}throw Error(_e(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(_e(189))}}if(n.alternate!==i)throw Error(_e(190))}if(n.tag!==3)throw Error(_e(188));return n.stateNode.current===n?t:e}function av(t){return t=x_(t),t!==null?lv(t):null}function lv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lv(t);if(e!==null)return e;t=t.sibling}return null}var cv=Jn.unstable_scheduleCallback,Bh=Jn.unstable_cancelCallback,S_=Jn.unstable_shouldYield,M_=Jn.unstable_requestPaint,Jt=Jn.unstable_now,E_=Jn.unstable_getCurrentPriorityLevel,Dd=Jn.unstable_ImmediatePriority,uv=Jn.unstable_UserBlockingPriority,$l=Jn.unstable_NormalPriority,w_=Jn.unstable_LowPriority,fv=Jn.unstable_IdlePriority,Tc=null,Ii=null;function T_(t){if(Ii&&typeof Ii.onCommitFiberRoot=="function")try{Ii.onCommitFiberRoot(Tc,t,void 0,(t.current.flags&128)===128)}catch{}}var wi=Math.clz32?Math.clz32:C_,A_=Math.log,b_=Math.LN2;function C_(t){return t>>>=0,t===0?32:31-(A_(t)/b_|0)|0}var Ba=64,Ha=4194304;function Ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ko(a):(s&=o,s!==0&&(i=Ko(s)))}else o=n&~r,o!==0?i=Ko(o):s!==0&&(i=Ko(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-wi(e),r=1<<n,i|=t[n],e&=~r;return i}function R_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=R_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Rf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dv(){var t=Ba;return Ba<<=1,!(Ba&4194240)&&(Ba=64),t}function Jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wi(e),t[e]=n}function L_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-wi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-wi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Dt=0;function hv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pv,Fd,mv,gv,vv,Pf=!1,Ga=[],xr=null,Sr=null,Mr=null,fa=new Map,da=new Map,pr=[],N_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hh(t,e){switch(t){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(e.pointerId)}}function Io(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=La(e),e!==null&&Fd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function I_(t,e,n,i,r){switch(e){case"focusin":return xr=Io(xr,t,e,n,i,r),!0;case"dragenter":return Sr=Io(Sr,t,e,n,i,r),!0;case"mouseover":return Mr=Io(Mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fa.set(s,Io(fa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,da.set(s,Io(da.get(s)||null,t,e,n,i,r)),!0}return!1}function yv(t){var e=Zr(t.target);if(e!==null){var n=ms(e);if(n!==null){if(e=n.tag,e===13){if(e=ov(n),e!==null){t.blockedOn=e,vv(t.priority,function(){mv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Tf=i,n.target.dispatchEvent(i),Tf=null}else return e=La(n),e!==null&&Fd(e),t.blockedOn=n,!1;e.shift()}return!0}function Gh(t,e,n){Nl(t)&&n.delete(e)}function D_(){Pf=!1,xr!==null&&Nl(xr)&&(xr=null),Sr!==null&&Nl(Sr)&&(Sr=null),Mr!==null&&Nl(Mr)&&(Mr=null),fa.forEach(Gh),da.forEach(Gh)}function Do(t,e){t.blockedOn===e&&(t.blockedOn=null,Pf||(Pf=!0,Jn.unstable_scheduleCallback(Jn.unstable_NormalPriority,D_)))}function ha(t){function e(r){return Do(r,t)}if(0<Ga.length){Do(Ga[0],t);for(var n=1;n<Ga.length;n++){var i=Ga[n];i.blockedOn===t&&(i.blockedOn=null)}}for(xr!==null&&Do(xr,t),Sr!==null&&Do(Sr,t),Mr!==null&&Do(Mr,t),fa.forEach(e),da.forEach(e),n=0;n<pr.length;n++)i=pr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)yv(n),n.blockedOn===null&&pr.shift()}var io=er.ReactCurrentBatchConfig,ql=!0;function U_(t,e,n,i){var r=Dt,s=io.transition;io.transition=null;try{Dt=1,kd(t,e,n,i)}finally{Dt=r,io.transition=s}}function F_(t,e,n,i){var r=Dt,s=io.transition;io.transition=null;try{Dt=4,kd(t,e,n,i)}finally{Dt=r,io.transition=s}}function kd(t,e,n,i){if(ql){var r=Lf(t,e,n,i);if(r===null)cu(t,e,i,Kl,n),Hh(t,i);else if(I_(r,t,e,n,i))i.stopPropagation();else if(Hh(t,i),e&4&&-1<N_.indexOf(t)){for(;r!==null;){var s=La(r);if(s!==null&&pv(s),s=Lf(t,e,n,i),s===null&&cu(t,e,i,Kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cu(t,e,i,null,n)}}var Kl=null;function Lf(t,e,n,i){if(Kl=null,t=Id(i),t=Zr(t),t!==null)if(e=ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ov(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kl=t,null}function _v(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E_()){case Dd:return 1;case uv:return 4;case $l:case w_:return 16;case fv:return 536870912;default:return 16}default:return 16}}var gr=null,Od=null,Il=null;function xv(){if(Il)return Il;var t,e=Od,n=e.length,i,r="value"in gr?gr.value:gr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Il=r.slice(t,1<i?1-i:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Va(){return!0}function Vh(){return!1}function ti(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Va:Vh,this.isPropagationStopped=Vh,this}return Yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),e}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zd=ti(Eo),Pa=Yt({},Eo,{view:0,detail:0}),k_=ti(Pa),eu,tu,Uo,Ac=Yt({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(eu=t.screenX-Uo.screenX,tu=t.screenY-Uo.screenY):tu=eu=0,Uo=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Wh=ti(Ac),O_=Yt({},Ac,{dataTransfer:0}),z_=ti(O_),B_=Yt({},Pa,{relatedTarget:0}),nu=ti(B_),H_=Yt({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),G_=ti(H_),V_=Yt({},Eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W_=ti(V_),j_=Yt({},Eo,{data:0}),jh=ti(j_),X_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Y_[t])?!!e[t]:!1}function Bd(){return q_}var K_=Yt({},Pa,{key:function(t){if(t.key){var e=X_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bd,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Z_=ti(K_),Q_=Yt({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=ti(Q_),J_=Yt({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bd}),ex=ti(J_),tx=Yt({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),nx=ti(tx),ix=Yt({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rx=ti(ix),sx=[9,13,27,32],Hd=qi&&"CompositionEvent"in window,ea=null;qi&&"documentMode"in document&&(ea=document.documentMode);var ox=qi&&"TextEvent"in window&&!ea,Sv=qi&&(!Hd||ea&&8<ea&&11>=ea),$h=" ",Yh=!1;function Mv(t,e){switch(t){case"keyup":return sx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ev(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function ax(t,e){switch(t){case"compositionend":return Ev(e);case"keypress":return e.which!==32?null:(Yh=!0,$h);case"textInput":return t=e.data,t===$h&&Yh?null:t;default:return null}}function lx(t,e){if(Gs)return t==="compositionend"||!Hd&&Mv(t,e)?(t=xv(),Il=Od=gr=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sv&&e.locale!=="ko"?null:e.data;default:return null}}var cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cx[t.type]:e==="textarea"}function wv(t,e,n,i){tv(i),e=Zl(e,"onChange"),0<e.length&&(n=new zd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ta=null,pa=null;function ux(t){Uv(t,0)}function bc(t){var e=js(t);if(Yg(e))return t}function fx(t,e){if(t==="change")return e}var Tv=!1;if(qi){var iu;if(qi){var ru="oninput"in document;if(!ru){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),ru=typeof Kh.oninput=="function"}iu=ru}else iu=!1;Tv=iu&&(!document.documentMode||9<document.documentMode)}function Zh(){ta&&(ta.detachEvent("onpropertychange",Av),pa=ta=null)}function Av(t){if(t.propertyName==="value"&&bc(pa)){var e=[];wv(e,pa,t,Id(t)),sv(ux,e)}}function dx(t,e,n){t==="focusin"?(Zh(),ta=e,pa=n,ta.attachEvent("onpropertychange",Av)):t==="focusout"&&Zh()}function hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bc(pa)}function px(t,e){if(t==="click")return bc(e)}function mx(t,e){if(t==="input"||t==="change")return bc(e)}function gx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ai=typeof Object.is=="function"?Object.is:gx;function ma(t,e){if(Ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hf.call(e,r)||!Ai(t[r],e[r]))return!1}return!0}function Qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jh(t,e){var n=Qh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qh(n)}}function bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cv(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vx(t){var e=Cv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bv(n.ownerDocument.documentElement,n)){if(i!==null&&Gd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jh(n,s);var o=Jh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yx=qi&&"documentMode"in document&&11>=document.documentMode,Vs=null,Nf=null,na=null,If=!1;function ep(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||Vs==null||Vs!==Wl(i)||(i=Vs,"selectionStart"in i&&Gd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),na&&ma(na,i)||(na=i,i=Zl(Nf,"onSelect"),0<i.length&&(e=new zd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Vs)))}function Wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ws={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},su={},Rv={};qi&&(Rv=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function Cc(t){if(su[t])return su[t];if(!Ws[t])return t;var e=Ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rv)return su[t]=e[n];return t}var Pv=Cc("animationend"),Lv=Cc("animationiteration"),Nv=Cc("animationstart"),Iv=Cc("transitionend"),Dv=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){Dv.set(t,e),ps(e,[t])}for(var ou=0;ou<tp.length;ou++){var au=tp[ou],_x=au.toLowerCase(),xx=au[0].toUpperCase()+au.slice(1);kr(_x,"on"+xx)}kr(Pv,"onAnimationEnd");kr(Lv,"onAnimationIteration");kr(Nv,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(Iv,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function np(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,__(i,e,void 0,t),t.currentTarget=null}function Uv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;np(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;np(r,a,c),s=l}}}if(Xl)throw t=Cf,Xl=!1,Cf=null,t}function Bt(t,e){var n=e[Of];n===void 0&&(n=e[Of]=new Set);var i=t+"__bubble";n.has(i)||(Fv(e,t,2,!1),n.add(i))}function lu(t,e,n){var i=0;e&&(i|=4),Fv(n,t,i,e)}var ja="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[ja]){t[ja]=!0,Vg.forEach(function(n){n!=="selectionchange"&&(Sx.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ja]||(e[ja]=!0,lu("selectionchange",!1,e))}}function Fv(t,e,n,i){switch(_v(e)){case 1:var r=U_;break;case 4:r=F_;break;default:r=kd}n=r.bind(null,e,n,t),r=void 0,!bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}sv(function(){var c=s,f=Id(n),d=[];e:{var h=Dv.get(t);if(h!==void 0){var g=zd,y=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":g=Z_;break;case"focusin":y="focus",g=nu;break;case"focusout":y="blur",g=nu;break;case"beforeblur":case"afterblur":g=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ex;break;case Pv:case Lv:case Nv:g=G_;break;case Iv:g=nx;break;case"scroll":g=k_;break;case"wheel":g=rx;break;case"copy":case"cut":case"paste":g=W_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Xh}var _=(e&4)!==0,p=!_&&t==="scroll",u=_?h!==null?h+"Capture":null:h;_=[];for(var m=c,v;m!==null;){v=m;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=ua(m,u),M!=null&&_.push(va(m,M,v)))),p)break;m=m.return}0<_.length&&(h=new g(h,y,null,n,f),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Tf&&(y=n.relatedTarget||n.fromElement)&&(Zr(y)||y[Ki]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Zr(y):null,y!==null&&(p=ms(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(_=Wh,M="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=Xh,M="onPointerLeave",u="onPointerEnter",m="pointer"),p=g==null?h:js(g),v=y==null?h:js(y),h=new _(M,m+"leave",g,n,f),h.target=p,h.relatedTarget=v,M=null,Zr(f)===c&&(_=new _(u,m+"enter",y,n,f),_.target=v,_.relatedTarget=p,M=_),p=M,g&&y)t:{for(_=g,u=y,m=0,v=_;v;v=ys(v))m++;for(v=0,M=u;M;M=ys(M))v++;for(;0<m-v;)_=ys(_),m--;for(;0<v-m;)u=ys(u),v--;for(;m--;){if(_===u||u!==null&&_===u.alternate)break t;_=ys(_),u=ys(u)}_=null}else _=null;g!==null&&ip(d,h,g,_,!1),y!==null&&p!==null&&ip(d,p,y,_,!0)}}e:{if(h=c?js(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var I=fx;else if(qh(h))if(Tv)I=mx;else{I=hx;var P=dx}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=px);if(I&&(I=I(t,c))){wv(d,I,n,f);break e}P&&P(t,h,c),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&xf(h,"number",h.value)}switch(P=c?js(c):window,t){case"focusin":(qh(P)||P.contentEditable==="true")&&(Vs=P,Nf=c,na=null);break;case"focusout":na=Nf=Vs=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,ep(d,n,f);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":ep(d,n,f)}var C;if(Hd)e:{switch(t){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Gs?Mv(t,n)&&(G="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(Sv&&n.locale!=="ko"&&(Gs||G!=="onCompositionStart"?G==="onCompositionEnd"&&Gs&&(C=xv()):(gr=f,Od="value"in gr?gr.value:gr.textContent,Gs=!0)),P=Zl(c,G),0<P.length&&(G=new jh(G,t,null,n,f),d.push({event:G,listeners:P}),C?G.data=C:(C=Ev(n),C!==null&&(G.data=C)))),(C=ox?ax(t,n):lx(t,n))&&(c=Zl(c,"onBeforeInput"),0<c.length&&(f=new jh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=C))}Uv(d,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ua(t,n),s!=null&&i.unshift(va(t,s,r)),s=ua(t,e),s!=null&&i.push(va(t,s,r))),t=t.return}return i}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ip(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ua(n,s),l!=null&&o.unshift(va(n,l,a))):r||(l=ua(n,s),l!=null&&o.push(va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Mx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function rp(t){return(typeof t=="string"?t:""+t).replace(Mx,`
`).replace(Ex,"")}function Xa(t,e,n){if(e=rp(e),rp(t)!==e&&n)throw Error(_e(425))}function Ql(){}var Df=null,Uf=null;function Ff(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kf=typeof setTimeout=="function"?setTimeout:void 0,wx=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,Tx=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(t){return sp.resolve(null).then(t).catch(Ax)}:kf;function Ax(t){setTimeout(function(){throw t})}function uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ha(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),Li="__reactFiber$"+wo,ya="__reactProps$"+wo,Ki="__reactContainer$"+wo,Of="__reactEvents$"+wo,bx="__reactListeners$"+wo,Cx="__reactHandles$"+wo;function Zr(t){var e=t[Li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ki]||n[Li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=op(t);t!==null;){if(n=t[Li])return n;t=op(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[Li]||t[Ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_e(33))}function Rc(t){return t[ya]||null}var zf=[],Xs=-1;function Or(t){return{current:t}}function Gt(t){0>Xs||(t.current=zf[Xs],zf[Xs]=null,Xs--)}function Ot(t,e){Xs++,zf[Xs]=t.current,t.current=e}var Dr={},Ln=Or(Dr),Wn=Or(!1),as=Dr;function co(t,e){var n=t.type.contextTypes;if(!n)return Dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function jn(t){return t=t.childContextTypes,t!=null}function Jl(){Gt(Wn),Gt(Ln)}function ap(t,e,n){if(Ln.current!==Dr)throw Error(_e(168));Ot(Ln,e),Ot(Wn,n)}function kv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(_e(108,d_(t)||"Unknown",r));return Yt({},n,i)}function ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,as=Ln.current,Ot(Ln,t),Ot(Wn,Wn.current),!0}function lp(t,e,n){var i=t.stateNode;if(!i)throw Error(_e(169));n?(t=kv(t,e,as),i.__reactInternalMemoizedMergedChildContext=t,Gt(Wn),Gt(Ln),Ot(Ln,t)):Gt(Wn),Ot(Wn,n)}var Vi=null,Pc=!1,fu=!1;function Ov(t){Vi===null?Vi=[t]:Vi.push(t)}function Rx(t){Pc=!0,Ov(t)}function zr(){if(!fu&&Vi!==null){fu=!0;var t=0,e=Dt;try{var n=Vi;for(Dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Vi=null,Pc=!1}catch(r){throw Vi!==null&&(Vi=Vi.slice(t+1)),cv(Dd,zr),r}finally{Dt=e,fu=!1}}return null}var $s=[],Ys=0,tc=null,nc=0,ri=[],si=0,ls=null,ji=1,Xi="";function jr(t,e){$s[Ys++]=nc,$s[Ys++]=tc,tc=t,nc=e}function zv(t,e,n){ri[si++]=ji,ri[si++]=Xi,ri[si++]=ls,ls=t;var i=ji;t=Xi;var r=32-wi(i)-1;i&=~(1<<r),n+=1;var s=32-wi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ji=1<<32-wi(e)+r|n<<r|i,Xi=s+t}else ji=1<<s|n<<r|i,Xi=t}function Vd(t){t.return!==null&&(jr(t,1),zv(t,1,0))}function Wd(t){for(;t===tc;)tc=$s[--Ys],$s[Ys]=null,nc=$s[--Ys],$s[Ys]=null;for(;t===ls;)ls=ri[--si],ri[si]=null,Xi=ri[--si],ri[si]=null,ji=ri[--si],ri[si]=null}var Qn=null,Zn=null,Vt=!1,xi=null;function Bv(t,e){var n=ci(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qn=t,Zn=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qn=t,Zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ls!==null?{id:ji,overflow:Xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ci(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qn=t,Zn=null,!0):!1;default:return!1}}function Bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hf(t){if(Vt){var e=Zn;if(e){var n=e;if(!cp(t,e)){if(Bf(t))throw Error(_e(418));e=Er(n.nextSibling);var i=Qn;e&&cp(t,e)?Bv(i,n):(t.flags=t.flags&-4097|2,Vt=!1,Qn=t)}}else{if(Bf(t))throw Error(_e(418));t.flags=t.flags&-4097|2,Vt=!1,Qn=t}}}function up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qn=t}function $a(t){if(t!==Qn)return!1;if(!Vt)return up(t),Vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ff(t.type,t.memoizedProps)),e&&(e=Zn)){if(Bf(t))throw Hv(),Error(_e(418));for(;e;)Bv(t,e),e=Er(e.nextSibling)}if(up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_e(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zn=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zn=null}}else Zn=Qn?Er(t.stateNode.nextSibling):null;return!0}function Hv(){for(var t=Zn;t;)t=Er(t.nextSibling)}function uo(){Zn=Qn=null,Vt=!1}function jd(t){xi===null?xi=[t]:xi.push(t)}var Px=er.ReactCurrentBatchConfig;function Fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_e(309));var i=n.stateNode}if(!i)throw Error(_e(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_e(284));if(!n._owner)throw Error(_e(290,t))}return t}function Ya(t,e){throw t=Object.prototype.toString.call(e),Error(_e(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fp(t){var e=t._init;return e(t._payload)}function Gv(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=br(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,M){return m===null||m.tag!==6?(m=yu(v,u.mode,M),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,M){var I=v.type;return I===Hs?f(u,m,v.props.children,M,v.key):m!==null&&(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===dr&&fp(I)===m.type)?(M=r(m,v.props),M.ref=Fo(u,m,v),M.return=u,M):(M=Hl(v.type,v.key,v.props,null,u.mode,M),M.ref=Fo(u,m,v),M.return=u,M)}function c(u,m,v,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=_u(v,u.mode,M),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function f(u,m,v,M,I){return m===null||m.tag!==7?(m=ns(v,u.mode,M,I),m.return=u,m):(m=r(m,v),m.return=u,m)}function d(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=yu(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ka:return v=Hl(m.type,m.key,m.props,null,u.mode,v),v.ref=Fo(u,null,m),v.return=u,v;case Bs:return m=_u(m,u.mode,v),m.return=u,m;case dr:var M=m._init;return d(u,M(m._payload),v)}if(qo(m)||Lo(m))return m=ns(m,u.mode,v,null),m.return=u,m;Ya(u,m)}return null}function h(u,m,v,M){var I=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return I!==null?null:a(u,m,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ka:return v.key===I?l(u,m,v,M):null;case Bs:return v.key===I?c(u,m,v,M):null;case dr:return I=v._init,h(u,m,I(v._payload),M)}if(qo(v)||Lo(v))return I!==null?null:f(u,m,v,M,null);Ya(u,v)}return null}function g(u,m,v,M,I){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,a(m,u,""+M,I);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ka:return u=u.get(M.key===null?v:M.key)||null,l(m,u,M,I);case Bs:return u=u.get(M.key===null?v:M.key)||null,c(m,u,M,I);case dr:var P=M._init;return g(u,m,v,P(M._payload),I)}if(qo(M)||Lo(M))return u=u.get(v)||null,f(m,u,M,I,null);Ya(m,M)}return null}function y(u,m,v,M){for(var I=null,P=null,C=m,G=m=0,ne=null;C!==null&&G<v.length;G++){C.index>G?(ne=C,C=null):ne=C.sibling;var x=h(u,C,v[G],M);if(x===null){C===null&&(C=ne);break}t&&C&&x.alternate===null&&e(u,C),m=s(x,m,G),P===null?I=x:P.sibling=x,P=x,C=ne}if(G===v.length)return n(u,C),Vt&&jr(u,G),I;if(C===null){for(;G<v.length;G++)C=d(u,v[G],M),C!==null&&(m=s(C,m,G),P===null?I=C:P.sibling=C,P=C);return Vt&&jr(u,G),I}for(C=i(u,C);G<v.length;G++)ne=g(C,u,G,v[G],M),ne!==null&&(t&&ne.alternate!==null&&C.delete(ne.key===null?G:ne.key),m=s(ne,m,G),P===null?I=ne:P.sibling=ne,P=ne);return t&&C.forEach(function(L){return e(u,L)}),Vt&&jr(u,G),I}function _(u,m,v,M){var I=Lo(v);if(typeof I!="function")throw Error(_e(150));if(v=I.call(v),v==null)throw Error(_e(151));for(var P=I=null,C=m,G=m=0,ne=null,x=v.next();C!==null&&!x.done;G++,x=v.next()){C.index>G?(ne=C,C=null):ne=C.sibling;var L=h(u,C,x.value,M);if(L===null){C===null&&(C=ne);break}t&&C&&L.alternate===null&&e(u,C),m=s(L,m,G),P===null?I=L:P.sibling=L,P=L,C=ne}if(x.done)return n(u,C),Vt&&jr(u,G),I;if(C===null){for(;!x.done;G++,x=v.next())x=d(u,x.value,M),x!==null&&(m=s(x,m,G),P===null?I=x:P.sibling=x,P=x);return Vt&&jr(u,G),I}for(C=i(u,C);!x.done;G++,x=v.next())x=g(C,u,G,x.value,M),x!==null&&(t&&x.alternate!==null&&C.delete(x.key===null?G:x.key),m=s(x,m,G),P===null?I=x:P.sibling=x,P=x);return t&&C.forEach(function(ee){return e(u,ee)}),Vt&&jr(u,G),I}function p(u,m,v,M){if(typeof v=="object"&&v!==null&&v.type===Hs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ka:e:{for(var I=v.key,P=m;P!==null;){if(P.key===I){if(I=v.type,I===Hs){if(P.tag===7){n(u,P.sibling),m=r(P,v.props.children),m.return=u,u=m;break e}}else if(P.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===dr&&fp(I)===P.type){n(u,P.sibling),m=r(P,v.props),m.ref=Fo(u,P,v),m.return=u,u=m;break e}n(u,P);break}else e(u,P);P=P.sibling}v.type===Hs?(m=ns(v.props.children,u.mode,M,v.key),m.return=u,u=m):(M=Hl(v.type,v.key,v.props,null,u.mode,M),M.ref=Fo(u,m,v),M.return=u,u=M)}return o(u);case Bs:e:{for(P=v.key;m!==null;){if(m.key===P)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=_u(v,u.mode,M),m.return=u,u=m}return o(u);case dr:return P=v._init,p(u,m,P(v._payload),M)}if(qo(v))return y(u,m,v,M);if(Lo(v))return _(u,m,v,M);Ya(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=yu(v,u.mode,M),m.return=u,u=m),o(u)):n(u,m)}return p}var fo=Gv(!0),Vv=Gv(!1),ic=Or(null),rc=null,qs=null,Xd=null;function $d(){Xd=qs=rc=null}function Yd(t){var e=ic.current;Gt(ic),t._currentValue=e}function Gf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ro(t,e){rc=t,Xd=qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vn=!0),t.firstContext=null)}function di(t){var e=t._currentValue;if(Xd!==t)if(t={context:t,memoizedValue:e,next:null},qs===null){if(rc===null)throw Error(_e(308));qs=t,rc.dependencies={lanes:0,firstContext:t}}else qs=qs.next=t;return e}var Qr=null;function qd(t){Qr===null?Qr=[t]:Qr.push(t)}function Wv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,qd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Zi(t,i)}function Zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function Kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zi(t,n)}return r=i.interleaved,r===null?(e.next=e,qd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zi(t,n)}function Ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ud(t,n)}}function dp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sc(t,e,n,i){var r=t.updateQueue;hr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(h=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=Yt({},d,h);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,l=d):f=f.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);us|=o,t.lanes=o,t.memoizedState=d}}function hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(_e(191,r));r.call(i)}}}var Na={},Di=Or(Na),_a=Or(Na),xa=Or(Na);function Jr(t){if(t===Na)throw Error(_e(174));return t}function Zd(t,e){switch(Ot(xa,e),Ot(_a,t),Ot(Di,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mf(e,t)}Gt(Di),Ot(Di,e)}function ho(){Gt(Di),Gt(_a),Gt(xa)}function Xv(t){Jr(xa.current);var e=Jr(Di.current),n=Mf(e,t.type);e!==n&&(Ot(_a,t),Ot(Di,n))}function Qd(t){_a.current===t&&(Gt(Di),Gt(_a))}var jt=Or(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var du=[];function Jd(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var Fl=er.ReactCurrentDispatcher,hu=er.ReactCurrentBatchConfig,cs=0,Xt=null,ln=null,gn=null,ac=!1,ia=!1,Sa=0,Lx=0;function An(){throw Error(_e(321))}function eh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ai(t[n],e[n]))return!1;return!0}function th(t,e,n,i,r,s){if(cs=s,Xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fl.current=t===null||t.memoizedState===null?Ux:Fx,t=n(i,r),ia){s=0;do{if(ia=!1,Sa=0,25<=s)throw Error(_e(301));s+=1,gn=ln=null,e.updateQueue=null,Fl.current=kx,t=n(i,r)}while(ia)}if(Fl.current=lc,e=ln!==null&&ln.next!==null,cs=0,gn=ln=Xt=null,ac=!1,e)throw Error(_e(300));return t}function nh(){var t=Sa!==0;return Sa=0,t}function Ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Xt.memoizedState=gn=t:gn=gn.next=t,gn}function hi(){if(ln===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=ln.next;var e=gn===null?Xt.memoizedState:gn.next;if(e!==null)gn=e,ln=t;else{if(t===null)throw Error(_e(310));ln=t,t={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},gn===null?Xt.memoizedState=gn=t:gn=gn.next=t}return gn}function Ma(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=hi(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=ln,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((cs&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Xt.lanes|=f,us|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ai(i,e.memoizedState)||(Vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Xt.lanes|=s,us|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=hi(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ai(s,e.memoizedState)||(Vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $v(){}function Yv(t,e){var n=Xt,i=hi(),r=e(),s=!Ai(i.memoizedState,r);if(s&&(i.memoizedState=r,Vn=!0),i=i.queue,ih(Zv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||gn!==null&&gn.memoizedState.tag&1){if(n.flags|=2048,Ea(9,Kv.bind(null,n,i,r,e),void 0,null),yn===null)throw Error(_e(349));cs&30||qv(n,e,r)}return r}function qv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kv(t,e,n,i){e.value=n,e.getSnapshot=i,Qv(e)&&Jv(t)}function Zv(t,e,n){return n(function(){Qv(e)&&Jv(t)})}function Qv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ai(t,n)}catch{return!0}}function Jv(t){var e=Zi(t,1);e!==null&&Ti(e,t,1,-1)}function pp(t){var e=Ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},e.queue=t,t=t.dispatch=Dx.bind(null,Xt,t),[e.memoizedState,t]}function Ea(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function e0(){return hi().memoizedState}function kl(t,e,n,i){var r=Ci();Xt.flags|=t,r.memoizedState=Ea(1|e,n,void 0,i===void 0?null:i)}function Lc(t,e,n,i){var r=hi();i=i===void 0?null:i;var s=void 0;if(ln!==null){var o=ln.memoizedState;if(s=o.destroy,i!==null&&eh(i,o.deps)){r.memoizedState=Ea(e,n,s,i);return}}Xt.flags|=t,r.memoizedState=Ea(1|e,n,s,i)}function mp(t,e){return kl(8390656,8,t,e)}function ih(t,e){return Lc(2048,8,t,e)}function t0(t,e){return Lc(4,2,t,e)}function n0(t,e){return Lc(4,4,t,e)}function i0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r0(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,i0.bind(null,e,t),n)}function rh(){}function s0(t,e){var n=hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&eh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function o0(t,e){var n=hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&eh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function a0(t,e,n){return cs&21?(Ai(n,e)||(n=dv(),Xt.lanes|=n,us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vn=!0),t.memoizedState=n)}function Nx(t,e){var n=Dt;Dt=n!==0&&4>n?n:4,t(!0);var i=hu.transition;hu.transition={};try{t(!1),e()}finally{Dt=n,hu.transition=i}}function l0(){return hi().memoizedState}function Ix(t,e,n){var i=Ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},c0(t))u0(e,n);else if(n=Wv(t,e,n,i),n!==null){var r=Fn();Ti(n,t,i,r),f0(n,e,i)}}function Dx(t,e,n){var i=Ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(c0(t))u0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ai(a,o)){var l=e.interleaved;l===null?(r.next=r,qd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Wv(t,e,r,i),n!==null&&(r=Fn(),Ti(n,t,i,r),f0(n,e,i))}}function c0(t){var e=t.alternate;return t===Xt||e!==null&&e===Xt}function u0(t,e){ia=ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function f0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ud(t,n)}}var lc={readContext:di,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},Ux={readContext:di,useCallback:function(t,e){return Ci().memoizedState=[t,e===void 0?null:e],t},useContext:di,useEffect:mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,i0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=Ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ix.bind(null,Xt,t),[i.memoizedState,t]},useRef:function(t){var e=Ci();return t={current:t},e.memoizedState=t},useState:pp,useDebugValue:rh,useDeferredValue:function(t){return Ci().memoizedState=t},useTransition:function(){var t=pp(!1),e=t[0];return t=Nx.bind(null,t[1]),Ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Xt,r=Ci();if(Vt){if(n===void 0)throw Error(_e(407));n=n()}else{if(n=e(),yn===null)throw Error(_e(349));cs&30||qv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mp(Zv.bind(null,i,s,t),[t]),i.flags|=2048,Ea(9,Kv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ci(),e=yn.identifierPrefix;if(Vt){var n=Xi,i=ji;n=(i&~(1<<32-wi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Lx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fx={readContext:di,useCallback:s0,useContext:di,useEffect:ih,useImperativeHandle:r0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:o0,useReducer:pu,useRef:e0,useState:function(){return pu(Ma)},useDebugValue:rh,useDeferredValue:function(t){var e=hi();return a0(e,ln.memoizedState,t)},useTransition:function(){var t=pu(Ma)[0],e=hi().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:Yv,useId:l0,unstable_isNewReconciler:!1},kx={readContext:di,useCallback:s0,useContext:di,useEffect:ih,useImperativeHandle:r0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:o0,useReducer:mu,useRef:e0,useState:function(){return mu(Ma)},useDebugValue:rh,useDeferredValue:function(t){var e=hi();return ln===null?e.memoizedState=t:a0(e,ln.memoizedState,t)},useTransition:function(){var t=mu(Ma)[0],e=hi().memoizedState;return[t,e]},useMutableSource:$v,useSyncExternalStore:Yv,useId:l0,unstable_isNewReconciler:!1};function yi(t,e){if(t&&t.defaultProps){e=Yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nc={isMounted:function(t){return(t=t._reactInternals)?ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Fn(),r=Ar(t),s=Yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(Ti(e,t,r,i),Ul(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Fn(),r=Ar(t),s=Yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(Ti(e,t,r,i),Ul(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Fn(),i=Ar(t),r=Yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=wr(t,r,i),e!==null&&(Ti(e,t,i,n),Ul(e,t,i))}};function gp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ma(n,i)||!ma(r,s):!0}function d0(t,e,n){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=di(s):(r=jn(e)?as:Ln.current,i=e.contextTypes,s=(i=i!=null)?co(t,r):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nc.enqueueReplaceState(e,e.state,null)}function Wf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Kd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=di(s):(s=jn(e)?as:Ln.current,r.context=co(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nc.enqueueReplaceState(r,r.state,null),sc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function po(t,e){try{var n="",i=e;do n+=f_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ox=typeof WeakMap=="function"?WeakMap:Map;function h0(t,e,n){n=Yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){uc||(uc=!0,td=i),jf(t,e)},n}function p0(t,e,n){n=Yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){jf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jf(t,e),typeof i!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ox;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Qx.bind(null,t,e,n),e.then(t,t))}function _p(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yi(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var zx=er.ReactCurrentOwner,Vn=!1;function Dn(t,e,n,i){e.child=t===null?Vv(e,null,n,i):fo(e,t.child,n,i)}function Sp(t,e,n,i,r){n=n.render;var s=e.ref;return ro(e,r),i=th(t,e,n,i,s,r),n=nh(),t!==null&&!Vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(Vt&&n&&Vd(e),e.flags|=1,Dn(t,e,i,r),e.child)}function Mp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,m0(t,e,s,i,r)):(t=Hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(o,i)&&t.ref===e.ref)return Qi(t,e,r)}return e.flags|=1,t=br(s,i),t.ref=e.ref,t.return=e,e.child=t}function m0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ma(s,i)&&t.ref===e.ref)if(Vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Vn=!0);else return e.lanes=t.lanes,Qi(t,e,r)}return Xf(t,e,n,i,r)}function g0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Zs,Kn),Kn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ot(Zs,Kn),Kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ot(Zs,Kn),Kn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ot(Zs,Kn),Kn|=i;return Dn(t,e,r,n),e.child}function v0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xf(t,e,n,i,r){var s=jn(n)?as:Ln.current;return s=co(e,s),ro(e,r),n=th(t,e,n,i,s,r),i=nh(),t!==null&&!Vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(Vt&&i&&Vd(e),e.flags|=1,Dn(t,e,n,r),e.child)}function Ep(t,e,n,i,r){if(jn(n)){var s=!0;ec(e)}else s=!1;if(ro(e,r),e.stateNode===null)Ol(t,e),d0(e,n,i),Wf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=di(c):(c=jn(n)?as:Ln.current,c=co(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&vp(e,o,i,c),hr=!1;var h=e.memoizedState;o.state=h,sc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Wn.current||hr?(typeof f=="function"&&(Vf(e,n,f,i),l=e.memoizedState),(a=hr||gp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,jv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:yi(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=di(l):(l=jn(n)?as:Ln.current,l=co(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&vp(e,o,i,l),hr=!1,h=e.memoizedState,o.state=h,sc(e,i,o,r);var y=e.memoizedState;a!==d||h!==y||Wn.current||hr?(typeof g=="function"&&(Vf(e,n,g,i),y=e.memoizedState),(c=hr||gp(e,n,c,i,h,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return $f(t,e,n,i,s,r)}function $f(t,e,n,i,r,s){v0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&lp(e,n,!1),Qi(t,e,s);i=e.stateNode,zx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=fo(e,t.child,null,s),e.child=fo(e,null,a,s)):Dn(t,e,a,s),e.memoizedState=i.state,r&&lp(e,n,!0),e.child}function y0(t){var e=t.stateNode;e.pendingContext?ap(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ap(t,e.context,!1),Zd(t,e.containerInfo)}function wp(t,e,n,i,r){return uo(),jd(r),e.flags|=256,Dn(t,e,n,i),e.child}var Yf={dehydrated:null,treeContext:null,retryLane:0};function qf(t){return{baseLanes:t,cachePool:null,transitions:null}}function _0(t,e,n){var i=e.pendingProps,r=jt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ot(jt,r&1),t===null)return Hf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,i,0,null),t=ns(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qf(n),e.memoizedState=Yf,t):sh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Bx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=br(a,s):(s=ns(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?qf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yf,i}return s=t.child,t=s.sibling,i=br(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sh(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qa(t,e,n,i){return i!==null&&jd(i),fo(e,t.child,null,n),t=sh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Bx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=gu(Error(_e(422))),qa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uc({mode:"visible",children:i.children},r,0,null),s=ns(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&fo(e,t.child,null,o),e.child.memoizedState=qf(o),e.memoizedState=Yf,s);if(!(e.mode&1))return qa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(_e(419)),i=gu(s,i,void 0),qa(t,e,o,i)}if(a=(o&t.childLanes)!==0,Vn||a){if(i=yn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zi(t,r),Ti(i,t,r,-1))}return fh(),i=gu(Error(_e(421))),qa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Jx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Zn=Er(r.nextSibling),Qn=e,Vt=!0,xi=null,t!==null&&(ri[si++]=ji,ri[si++]=Xi,ri[si++]=ls,ji=t.id,Xi=t.overflow,ls=e),e=sh(e,i.children),e.flags|=4096,e)}function Tp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Gf(t.return,e,n)}function vu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function x0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Dn(t,e,i.children,n),i=jt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tp(t,n,e);else if(t.tag===19)Tp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ot(jt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&oc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vu(e,!0,n,null,s);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_e(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hx(t,e,n){switch(e.tag){case 3:y0(e),uo();break;case 5:Xv(e);break;case 1:jn(e.type)&&ec(e);break;case 4:Zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ot(ic,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ot(jt,jt.current&1),e.flags|=128,null):n&e.child.childLanes?_0(t,e,n):(Ot(jt,jt.current&1),t=Qi(t,e,n),t!==null?t.sibling:null);Ot(jt,jt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return x0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ot(jt,jt.current),i)break;return null;case 22:case 23:return e.lanes=0,g0(t,e,n)}return Qi(t,e,n)}var S0,Kf,M0,E0;S0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kf=function(){};M0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(Di.current);var s=null;switch(n){case"input":r=yf(t,r),i=yf(t,i),s=[];break;case"select":r=Yt({},r,{value:void 0}),i=Yt({},i,{value:void 0}),s=[];break;case"textarea":r=Sf(t,r),i=Sf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ql)}Ef(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(la.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(la.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Bt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};E0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ko(t,e){if(!Vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function bn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Gx(t,e,n){var i=e.pendingProps;switch(Wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(e),null;case 1:return jn(e.type)&&Jl(),bn(e),null;case 3:return i=e.stateNode,ho(),Gt(Wn),Gt(Ln),Jd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xi!==null&&(rd(xi),xi=null))),Kf(t,e),bn(e),null;case 5:Qd(e);var r=Jr(xa.current);if(n=e.type,t!==null&&e.stateNode!=null)M0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(_e(166));return bn(e),null}if(t=Jr(Di.current),$a(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Li]=e,i[ya]=s,t=(e.mode&1)!==0,n){case"dialog":Bt("cancel",i),Bt("close",i);break;case"iframe":case"object":case"embed":Bt("load",i);break;case"video":case"audio":for(r=0;r<Zo.length;r++)Bt(Zo[r],i);break;case"source":Bt("error",i);break;case"img":case"image":case"link":Bt("error",i),Bt("load",i);break;case"details":Bt("toggle",i);break;case"input":Dh(i,s),Bt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Bt("invalid",i);break;case"textarea":Fh(i,s),Bt("invalid",i)}Ef(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",""+a]):la.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Bt("scroll",i)}switch(n){case"input":Oa(i),Uh(i,s,!0);break;case"textarea":Oa(i),kh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Li]=e,t[ya]=i,S0(t,e,!1,!1),e.stateNode=t;e:{switch(o=wf(n,i),n){case"dialog":Bt("cancel",t),Bt("close",t),r=i;break;case"iframe":case"object":case"embed":Bt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Zo.length;r++)Bt(Zo[r],t);r=i;break;case"source":Bt("error",t),r=i;break;case"img":case"image":case"link":Bt("error",t),Bt("load",t),r=i;break;case"details":Bt("toggle",t),r=i;break;case"input":Dh(t,i),r=yf(t,i),Bt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Yt({},i,{value:void 0}),Bt("invalid",t);break;case"textarea":Fh(t,i),r=Sf(t,i),Bt("invalid",t);break;default:r=i}Ef(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ev(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Bt("scroll",t):l!=null&&Rd(t,s,l,o))}switch(n){case"input":Oa(t),Uh(t,i,!1);break;case"textarea":Oa(t),kh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?eo(t,!!i.multiple,s,!1):i.defaultValue!=null&&eo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return bn(e),null;case 6:if(t&&e.stateNode!=null)E0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(_e(166));if(n=Jr(xa.current),Jr(Di.current),$a(e)){if(i=e.stateNode,n=e.memoizedProps,i[Li]=e,(s=i.nodeValue!==n)&&(t=Qn,t!==null))switch(t.tag){case 3:Xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Li]=e,e.stateNode=i}return bn(e),null;case 13:if(Gt(jt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&Zn!==null&&e.mode&1&&!(e.flags&128))Hv(),uo(),e.flags|=98560,s=!1;else if(s=$a(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(_e(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_e(317));s[Li]=e}else uo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bn(e),s=!1}else xi!==null&&(rd(xi),xi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||jt.current&1?cn===0&&(cn=3):fh())),e.updateQueue!==null&&(e.flags|=4),bn(e),null);case 4:return ho(),Kf(t,e),t===null&&ga(e.stateNode.containerInfo),bn(e),null;case 10:return Yd(e.type._context),bn(e),null;case 17:return jn(e.type)&&Jl(),bn(e),null;case 19:if(Gt(jt),s=e.memoizedState,s===null)return bn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ko(s,!1);else{if(cn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=oc(t),o!==null){for(e.flags|=128,ko(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ot(jt,jt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Jt()>mo&&(e.flags|=128,i=!0,ko(s,!1),e.lanes=4194304)}else{if(!i)if(t=oc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Vt)return bn(e),null}else 2*Jt()-s.renderingStartTime>mo&&n!==1073741824&&(e.flags|=128,i=!0,ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Jt(),e.sibling=null,n=jt.current,Ot(jt,i?n&1|2:n&1),e):(bn(e),null);case 22:case 23:return uh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Kn&1073741824&&(bn(e),e.subtreeFlags&6&&(e.flags|=8192)):bn(e),null;case 24:return null;case 25:return null}throw Error(_e(156,e.tag))}function Vx(t,e){switch(Wd(e),e.tag){case 1:return jn(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ho(),Gt(Wn),Gt(Ln),Jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qd(e),null;case 13:if(Gt(jt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_e(340));uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Gt(jt),null;case 4:return ho(),null;case 10:return Yd(e.type._context),null;case 22:case 23:return uh(),null;case 24:return null;default:return null}}var Ka=!1,Pn=!1,Wx=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Kt(t,e,i)}else n.current=null}function Zf(t,e,n){try{n()}catch(i){Kt(t,e,i)}}var Ap=!1;function jx(t,e){if(Df=ql,t=Cv(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:t,selectionRange:n},ql=!1,Ue=e;Ue!==null;)if(e=Ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ue=t;else for(;Ue!==null;){e=Ue;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,p=y.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:yi(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_e(163))}}catch(M){Kt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ue=t;break}Ue=e.return}return y=Ap,Ap=!1,y}function ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zf(e,n,s)}r=r.next}while(r!==i)}}function Ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function w0(t){var e=t.alternate;e!==null&&(t.alternate=null,w0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Li],delete e[ya],delete e[Of],delete e[bx],delete e[Cx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T0(t){return t.tag===5||t.tag===3||t.tag===4}function bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(i!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}function ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}var _n=null,_i=!1;function rr(t,e,n){for(n=n.child;n!==null;)A0(t,e,n),n=n.sibling}function A0(t,e,n){if(Ii&&typeof Ii.onCommitFiberUnmount=="function")try{Ii.onCommitFiberUnmount(Tc,n)}catch{}switch(n.tag){case 5:Pn||Ks(n,e);case 6:var i=_n,r=_i;_n=null,rr(t,e,n),_n=i,_i=r,_n!==null&&(_i?(t=_n,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_n.removeChild(n.stateNode));break;case 18:_n!==null&&(_i?(t=_n,n=n.stateNode,t.nodeType===8?uu(t.parentNode,n):t.nodeType===1&&uu(t,n),ha(t)):uu(_n,n.stateNode));break;case 4:i=_n,r=_i,_n=n.stateNode.containerInfo,_i=!0,rr(t,e,n),_n=i,_i=r;break;case 0:case 11:case 14:case 15:if(!Pn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zf(n,e,o),r=r.next}while(r!==i)}rr(t,e,n);break;case 1:if(!Pn&&(Ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Kt(n,e,a)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(Pn=(i=Pn)||n.memoizedState!==null,rr(t,e,n),Pn=i):rr(t,e,n);break;default:rr(t,e,n)}}function Cp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wx),e.forEach(function(i){var r=eS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function pi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_n=a.stateNode,_i=!1;break e;case 3:_n=a.stateNode.containerInfo,_i=!0;break e;case 4:_n=a.stateNode.containerInfo,_i=!0;break e}a=a.return}if(_n===null)throw Error(_e(160));A0(s,o,r),_n=null,_i=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Kt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b0(e,t),e=e.sibling}function b0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pi(e,t),bi(t),i&4){try{ra(3,t,t.return),Ic(3,t)}catch(_){Kt(t,t.return,_)}try{ra(5,t,t.return)}catch(_){Kt(t,t.return,_)}}break;case 1:pi(e,t),bi(t),i&512&&n!==null&&Ks(n,n.return);break;case 5:if(pi(e,t),bi(t),i&512&&n!==null&&Ks(n,n.return),t.flags&32){var r=t.stateNode;try{ca(r,"")}catch(_){Kt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&qg(r,s),wf(a,o);var c=wf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?ev(r,d):f==="dangerouslySetInnerHTML"?Qg(r,d):f==="children"?ca(r,d):Rd(r,f,d,c)}switch(a){case"input":_f(r,s);break;case"textarea":Kg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?eo(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?eo(r,!!s.multiple,s.defaultValue,!0):eo(r,!!s.multiple,s.multiple?[]:"",!1))}r[ya]=s}catch(_){Kt(t,t.return,_)}}break;case 6:if(pi(e,t),bi(t),i&4){if(t.stateNode===null)throw Error(_e(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Kt(t,t.return,_)}}break;case 3:if(pi(e,t),bi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ha(e.containerInfo)}catch(_){Kt(t,t.return,_)}break;case 4:pi(e,t),bi(t);break;case 13:pi(e,t),bi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lh=Jt())),i&4&&Cp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Pn=(c=Pn)||f,pi(e,t),Pn=c):pi(e,t),bi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ue=t,f=t.child;f!==null;){for(d=Ue=f;Ue!==null;){switch(h=Ue,g=h.child,h.tag){case 0:case 11:case 14:case 15:ra(4,h,h.return);break;case 1:Ks(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Kt(i,n,_)}}break;case 5:Ks(h,h.return);break;case 22:if(h.memoizedState!==null){Pp(d);continue}}g!==null?(g.return=h,Ue=g):Pp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jg("display",o))}catch(_){Kt(t,t.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){Kt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:pi(e,t),bi(t),i&4&&Cp(t);break;case 21:break;default:pi(e,t),bi(t)}}function bi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T0(n)){var i=n;break e}n=n.return}throw Error(_e(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=bp(t);ed(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=bp(t);Jf(t,a,o);break;default:throw Error(_e(161))}}catch(l){Kt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Xx(t,e,n){Ue=t,C0(t)}function C0(t,e,n){for(var i=(t.mode&1)!==0;Ue!==null;){var r=Ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ka;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Pn;a=Ka;var c=Pn;if(Ka=o,(Pn=l)&&!c)for(Ue=r;Ue!==null;)o=Ue,l=o.child,o.tag===22&&o.memoizedState!==null?Lp(r):l!==null?(l.return=o,Ue=l):Lp(r);for(;s!==null;)Ue=s,C0(s),s=s.sibling;Ue=r,Ka=a,Pn=c}Rp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ue=s):Rp(t)}}function Rp(t){for(;Ue!==null;){var e=Ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pn||Ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Pn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:yi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ha(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_e(163))}Pn||e.flags&512&&Qf(e)}catch(h){Kt(e,e.return,h)}}if(e===t){Ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Pp(t){for(;Ue!==null;){var e=Ue;if(e===t){Ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Lp(t){for(;Ue!==null;){var e=Ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ic(4,e)}catch(l){Kt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Kt(e,r,l)}}var s=e.return;try{Qf(e)}catch(l){Kt(e,s,l)}break;case 5:var o=e.return;try{Qf(e)}catch(l){Kt(e,o,l)}}}catch(l){Kt(e,e.return,l)}if(e===t){Ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ue=a;break}Ue=e.return}}var $x=Math.ceil,cc=er.ReactCurrentDispatcher,oh=er.ReactCurrentOwner,fi=er.ReactCurrentBatchConfig,Rt=0,yn=null,on=null,En=0,Kn=0,Zs=Or(0),cn=0,wa=null,us=0,Dc=0,ah=0,sa=null,Hn=null,lh=0,mo=1/0,Gi=null,uc=!1,td=null,Tr=null,Za=!1,vr=null,fc=0,oa=0,nd=null,zl=-1,Bl=0;function Fn(){return Rt&6?Jt():zl!==-1?zl:zl=Jt()}function Ar(t){return t.mode&1?Rt&2&&En!==0?En&-En:Px.transition!==null?(Bl===0&&(Bl=dv()),Bl):(t=Dt,t!==0||(t=window.event,t=t===void 0?16:_v(t.type)),t):1}function Ti(t,e,n,i){if(50<oa)throw oa=0,nd=null,Error(_e(185));Ra(t,n,i),(!(Rt&2)||t!==yn)&&(t===yn&&(!(Rt&2)&&(Dc|=n),cn===4&&mr(t,En)),Xn(t,i),n===1&&Rt===0&&!(e.mode&1)&&(mo=Jt()+500,Pc&&zr()))}function Xn(t,e){var n=t.callbackNode;P_(t,e);var i=Yl(t,t===yn?En:0);if(i===0)n!==null&&Bh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bh(n),e===1)t.tag===0?Rx(Np.bind(null,t)):Ov(Np.bind(null,t)),Tx(function(){!(Rt&6)&&zr()}),n=null;else{switch(hv(i)){case 1:n=Dd;break;case 4:n=uv;break;case 16:n=$l;break;case 536870912:n=fv;break;default:n=$l}n=F0(n,R0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function R0(t,e){if(zl=-1,Bl=0,Rt&6)throw Error(_e(327));var n=t.callbackNode;if(so()&&t.callbackNode!==n)return null;var i=Yl(t,t===yn?En:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dc(t,i);else{e=i;var r=Rt;Rt|=2;var s=L0();(yn!==t||En!==e)&&(Gi=null,mo=Jt()+500,ts(t,e));do try{Kx();break}catch(a){P0(t,a)}while(!0);$d(),cc.current=s,Rt=r,on!==null?e=0:(yn=null,En=0,e=cn)}if(e!==0){if(e===2&&(r=Rf(t),r!==0&&(i=r,e=id(t,r))),e===1)throw n=wa,ts(t,0),mr(t,i),Xn(t,Jt()),n;if(e===6)mr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Yx(r)&&(e=dc(t,i),e===2&&(s=Rf(t),s!==0&&(i=s,e=id(t,s))),e===1))throw n=wa,ts(t,0),mr(t,i),Xn(t,Jt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(_e(345));case 2:Xr(t,Hn,Gi);break;case 3:if(mr(t,i),(i&130023424)===i&&(e=lh+500-Jt(),10<e)){if(Yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=kf(Xr.bind(null,t,Hn,Gi),e);break}Xr(t,Hn,Gi);break;case 4:if(mr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-wi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Jt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$x(i/1960))-i,10<i){t.timeoutHandle=kf(Xr.bind(null,t,Hn,Gi),i);break}Xr(t,Hn,Gi);break;case 5:Xr(t,Hn,Gi);break;default:throw Error(_e(329))}}}return Xn(t,Jt()),t.callbackNode===n?R0.bind(null,t):null}function id(t,e){var n=sa;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=dc(t,e),t!==2&&(e=Hn,Hn=n,e!==null&&rd(e)),t}function rd(t){Hn===null?Hn=t:Hn.push.apply(Hn,t)}function Yx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~ah,e&=~Dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wi(e),i=1<<n;t[n]=-1,e&=~i}}function Np(t){if(Rt&6)throw Error(_e(327));so();var e=Yl(t,0);if(!(e&1))return Xn(t,Jt()),null;var n=dc(t,e);if(t.tag!==0&&n===2){var i=Rf(t);i!==0&&(e=i,n=id(t,i))}if(n===1)throw n=wa,ts(t,0),mr(t,e),Xn(t,Jt()),n;if(n===6)throw Error(_e(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,Hn,Gi),Xn(t,Jt()),null}function ch(t,e){var n=Rt;Rt|=1;try{return t(e)}finally{Rt=n,Rt===0&&(mo=Jt()+500,Pc&&zr())}}function fs(t){vr!==null&&vr.tag===0&&!(Rt&6)&&so();var e=Rt;Rt|=1;var n=fi.transition,i=Dt;try{if(fi.transition=null,Dt=1,t)return t()}finally{Dt=i,fi.transition=n,Rt=e,!(Rt&6)&&zr()}}function uh(){Kn=Zs.current,Gt(Zs)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wx(n)),on!==null)for(n=on.return;n!==null;){var i=n;switch(Wd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:ho(),Gt(Wn),Gt(Ln),Jd();break;case 5:Qd(i);break;case 4:ho();break;case 13:Gt(jt);break;case 19:Gt(jt);break;case 10:Yd(i.type._context);break;case 22:case 23:uh()}n=n.return}if(yn=t,on=t=br(t.current,null),En=Kn=e,cn=0,wa=null,ah=Dc=us=0,Hn=sa=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Qr=null}return t}function P0(t,e){do{var n=on;try{if($d(),Fl.current=lc,ac){for(var i=Xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ac=!1}if(cs=0,gn=ln=Xt=null,ia=!1,Sa=0,oh.current=null,n===null||n.return===null){cn=1,wa=e,on=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=En,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=_p(o);if(g!==null){g.flags&=-257,xp(g,o,a,s,e),g.mode&1&&yp(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){yp(s,c,e),fh();break e}l=Error(_e(426))}}else if(Vt&&a.mode&1){var p=_p(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),xp(p,o,a,s,e),jd(po(l,a));break e}}s=l=po(l,a),cn!==4&&(cn=2),sa===null?sa=[s]:sa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=h0(s,l,e);dp(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Tr===null||!Tr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=p0(s,a,e);dp(s,M);break e}}s=s.return}while(s!==null)}I0(n)}catch(I){e=I,on===n&&n!==null&&(on=n=n.return);continue}break}while(!0)}function L0(){var t=cc.current;return cc.current=lc,t===null?lc:t}function fh(){(cn===0||cn===3||cn===2)&&(cn=4),yn===null||!(us&268435455)&&!(Dc&268435455)||mr(yn,En)}function dc(t,e){var n=Rt;Rt|=2;var i=L0();(yn!==t||En!==e)&&(Gi=null,ts(t,e));do try{qx();break}catch(r){P0(t,r)}while(!0);if($d(),Rt=n,cc.current=i,on!==null)throw Error(_e(261));return yn=null,En=0,cn}function qx(){for(;on!==null;)N0(on)}function Kx(){for(;on!==null&&!S_();)N0(on)}function N0(t){var e=U0(t.alternate,t,Kn);t.memoizedProps=t.pendingProps,e===null?I0(t):on=e,oh.current=null}function I0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Vx(n,e),n!==null){n.flags&=32767,on=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{cn=6,on=null;return}}else if(n=Gx(n,e,Kn),n!==null){on=n;return}if(e=e.sibling,e!==null){on=e;return}on=e=t}while(e!==null);cn===0&&(cn=5)}function Xr(t,e,n){var i=Dt,r=fi.transition;try{fi.transition=null,Dt=1,Zx(t,e,n,i)}finally{fi.transition=r,Dt=i}return null}function Zx(t,e,n,i){do so();while(vr!==null);if(Rt&6)throw Error(_e(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_e(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(L_(t,s),t===yn&&(on=yn=null,En=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,F0($l,function(){return so(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=fi.transition,fi.transition=null;var o=Dt;Dt=1;var a=Rt;Rt|=4,oh.current=null,jx(t,n),b0(n,t),vx(Uf),ql=!!Df,Uf=Df=null,t.current=n,Xx(n),M_(),Rt=a,Dt=o,fi.transition=s}else t.current=n;if(Za&&(Za=!1,vr=t,fc=r),s=t.pendingLanes,s===0&&(Tr=null),T_(n.stateNode),Xn(t,Jt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(uc)throw uc=!1,t=td,td=null,t;return fc&1&&t.tag!==0&&so(),s=t.pendingLanes,s&1?t===nd?oa++:(oa=0,nd=t):oa=0,zr(),null}function so(){if(vr!==null){var t=hv(fc),e=fi.transition,n=Dt;try{if(fi.transition=null,Dt=16>t?16:t,vr===null)var i=!1;else{if(t=vr,vr=null,fc=0,Rt&6)throw Error(_e(331));var r=Rt;for(Rt|=4,Ue=t.current;Ue!==null;){var s=Ue,o=s.child;if(Ue.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ue=c;Ue!==null;){var f=Ue;switch(f.tag){case 0:case 11:case 15:ra(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ue=d;else for(;Ue!==null;){f=Ue;var h=f.sibling,g=f.return;if(w0(f),f===c){Ue=null;break}if(h!==null){h.return=g,Ue=h;break}Ue=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}Ue=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ue=o;else e:for(;Ue!==null;){if(s=Ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ra(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ue=u;break e}Ue=s.return}}var m=t.current;for(Ue=m;Ue!==null;){o=Ue;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ue=v;else e:for(o=m;Ue!==null;){if(a=Ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ic(9,a)}}catch(I){Kt(a,a.return,I)}if(a===o){Ue=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ue=M;break e}Ue=a.return}}if(Rt=r,zr(),Ii&&typeof Ii.onPostCommitFiberRoot=="function")try{Ii.onPostCommitFiberRoot(Tc,t)}catch{}i=!0}return i}finally{Dt=n,fi.transition=e}}return!1}function Ip(t,e,n){e=po(n,e),e=h0(t,e,1),t=wr(t,e,1),e=Fn(),t!==null&&(Ra(t,1,e),Xn(t,e))}function Kt(t,e,n){if(t.tag===3)Ip(t,t,n);else for(;e!==null;){if(e.tag===3){Ip(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Tr===null||!Tr.has(i))){t=po(n,t),t=p0(e,t,1),e=wr(e,t,1),t=Fn(),e!==null&&(Ra(e,1,t),Xn(e,t));break}}e=e.return}}function Qx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Fn(),t.pingedLanes|=t.suspendedLanes&n,yn===t&&(En&n)===n&&(cn===4||cn===3&&(En&130023424)===En&&500>Jt()-lh?ts(t,0):ah|=n),Xn(t,e)}function D0(t,e){e===0&&(t.mode&1?(e=Ha,Ha<<=1,!(Ha&130023424)&&(Ha=4194304)):e=1);var n=Fn();t=Zi(t,e),t!==null&&(Ra(t,e,n),Xn(t,n))}function Jx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D0(t,n)}function eS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(_e(314))}i!==null&&i.delete(e),D0(t,n)}var U0;U0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Wn.current)Vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vn=!1,Hx(t,e,n);Vn=!!(t.flags&131072)}else Vn=!1,Vt&&e.flags&1048576&&zv(e,nc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ol(t,e),t=e.pendingProps;var r=co(e,Ln.current);ro(e,n),r=th(null,e,i,t,r,n);var s=nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jn(i)?(s=!0,ec(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kd(e),r.updater=Nc,e.stateNode=r,r._reactInternals=e,Wf(e,i,t,n),e=$f(null,e,i,!0,s,n)):(e.tag=0,Vt&&s&&Vd(e),Dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ol(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nS(i),t=yi(i,t),r){case 0:e=Xf(null,e,i,t,n);break e;case 1:e=Ep(null,e,i,t,n);break e;case 11:e=Sp(null,e,i,t,n);break e;case 14:e=Mp(null,e,i,yi(i.type,t),n);break e}throw Error(_e(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yi(i,r),Xf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yi(i,r),Ep(t,e,i,r,n);case 3:e:{if(y0(e),t===null)throw Error(_e(387));i=e.pendingProps,s=e.memoizedState,r=s.element,jv(t,e),sc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=po(Error(_e(423)),e),e=wp(t,e,i,n,r);break e}else if(i!==r){r=po(Error(_e(424)),e),e=wp(t,e,i,n,r);break e}else for(Zn=Er(e.stateNode.containerInfo.firstChild),Qn=e,Vt=!0,xi=null,n=Vv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(uo(),i===r){e=Qi(t,e,n);break e}Dn(t,e,i,n)}e=e.child}return e;case 5:return Xv(e),t===null&&Hf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ff(i,r)?o=null:s!==null&&Ff(i,s)&&(e.flags|=32),v0(t,e),Dn(t,e,o,n),e.child;case 6:return t===null&&Hf(e),null;case 13:return _0(t,e,n);case 4:return Zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=fo(e,null,i,n):Dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yi(i,r),Sp(t,e,i,r,n);case 7:return Dn(t,e,e.pendingProps,n),e.child;case 8:return Dn(t,e,e.pendingProps.children,n),e.child;case 12:return Dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ot(ic,i._currentValue),i._currentValue=o,s!==null)if(Ai(s.value,o)){if(s.children===r.children&&!Wn.current){e=Qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Gf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_e(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ro(e,n),r=di(r),i=i(r),e.flags|=1,Dn(t,e,i,n),e.child;case 14:return i=e.type,r=yi(i,e.pendingProps),r=yi(i.type,r),Mp(t,e,i,r,n);case 15:return m0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yi(i,r),Ol(t,e),e.tag=1,jn(i)?(t=!0,ec(e)):t=!1,ro(e,n),d0(e,i,r),Wf(e,i,r,n),$f(null,e,i,!0,t,n);case 19:return x0(t,e,n);case 22:return g0(t,e,n)}throw Error(_e(156,e.tag))};function F0(t,e){return cv(t,e)}function tS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,e,n,i){return new tS(t,e,n,i)}function dh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nS(t){if(typeof t=="function")return dh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ld)return 11;if(t===Nd)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=ci(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")dh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return ns(n.children,r,s,e);case Pd:o=8,r|=8;break;case pf:return t=ci(12,n,e,r|2),t.elementType=pf,t.lanes=s,t;case mf:return t=ci(13,n,e,r),t.elementType=mf,t.lanes=s,t;case gf:return t=ci(19,n,e,r),t.elementType=gf,t.lanes=s,t;case Xg:return Uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wg:o=10;break e;case jg:o=9;break e;case Ld:o=11;break e;case Nd:o=14;break e;case dr:o=16,i=null;break e}throw Error(_e(130,t==null?t:typeof t,""))}return e=ci(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ns(t,e,n,i){return t=ci(7,t,i,e),t.lanes=n,t}function Uc(t,e,n,i){return t=ci(22,t,i,e),t.elementType=Xg,t.lanes=n,t.stateNode={isHidden:!1},t}function yu(t,e,n){return t=ci(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=ci(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jc(0),this.expirationTimes=Jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hh(t,e,n,i,r,s,o,a,l){return t=new iS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ci(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(s),t}function rS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function k0(t){if(!t)return Dr;t=t._reactInternals;e:{if(ms(t)!==t||t.tag!==1)throw Error(_e(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_e(171))}if(t.tag===1){var n=t.type;if(jn(n))return kv(t,n,e)}return e}function O0(t,e,n,i,r,s,o,a,l){return t=hh(n,i,!0,t,r,s,o,a,l),t.context=k0(null),n=t.current,i=Fn(),r=Ar(n),s=Yi(i,r),s.callback=e??null,wr(n,s,r),t.current.lanes=r,Ra(t,r,i),Xn(t,i),t}function Fc(t,e,n,i){var r=e.current,s=Fn(),o=Ar(r);return n=k0(n),e.context===null?e.context=n:e.pendingContext=n,e=Yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=wr(r,e,o),t!==null&&(Ti(t,r,o,s),Ul(t,r,o)),o}function hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ph(t,e){Dp(t,e),(t=t.alternate)&&Dp(t,e)}function sS(){return null}var z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function mh(t){this._internalRoot=t}kc.prototype.render=mh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_e(409));Fc(t,e,null,null)};kc.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fs(function(){Fc(null,t,null,null)}),e[Ki]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=gv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&yv(t)}};function gh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function oS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=hc(o);s.call(c)}}var o=O0(e,i,t,0,null,!1,!1,"",Up);return t._reactRootContainer=o,t[Ki]=o.current,ga(t.nodeType===8?t.parentNode:t),fs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=hc(l);a.call(c)}}var l=hh(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=l,t[Ki]=l.current,ga(t.nodeType===8?t.parentNode:t),fs(function(){Fc(e,l,n,i)}),l}function zc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=hc(o);a.call(l)}}Fc(e,o,t,r)}else o=oS(n,e,t,r,i);return hc(o)}pv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ko(e.pendingLanes);n!==0&&(Ud(e,n|1),Xn(e,Jt()),!(Rt&6)&&(mo=Jt()+500,zr()))}break;case 13:fs(function(){var i=Zi(t,1);if(i!==null){var r=Fn();Ti(i,t,1,r)}}),ph(t,1)}};Fd=function(t){if(t.tag===13){var e=Zi(t,134217728);if(e!==null){var n=Fn();Ti(e,t,134217728,n)}ph(t,134217728)}};mv=function(t){if(t.tag===13){var e=Ar(t),n=Zi(t,e);if(n!==null){var i=Fn();Ti(n,t,e,i)}ph(t,e)}};gv=function(){return Dt};vv=function(t,e){var n=Dt;try{return Dt=t,e()}finally{Dt=n}};Af=function(t,e,n){switch(e){case"input":if(_f(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rc(i);if(!r)throw Error(_e(90));Yg(i),_f(i,r)}}}break;case"textarea":Kg(t,n);break;case"select":e=n.value,e!=null&&eo(t,!!n.multiple,e,!1)}};iv=ch;rv=fs;var aS={usingClientEntryPoint:!1,Events:[La,js,Rc,tv,nv,ch]},Oo={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lS={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=av(t),t===null?null:t.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||sS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Tc=Qa.inject(lS),Ii=Qa}catch{}}ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aS;ei.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gh(e))throw Error(_e(200));return rS(t,e,null,n)};ei.createRoot=function(t,e){if(!gh(t))throw Error(_e(299));var n=!1,i="",r=z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hh(t,1,!1,null,null,n,!1,i,r),t[Ki]=e.current,ga(t.nodeType===8?t.parentNode:t),new mh(e)};ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_e(188)):(t=Object.keys(t).join(","),Error(_e(268,t)));return t=av(e),t=t===null?null:t.stateNode,t};ei.flushSync=function(t){return fs(t)};ei.hydrate=function(t,e,n){if(!Oc(e))throw Error(_e(200));return zc(null,t,e,!0,n)};ei.hydrateRoot=function(t,e,n){if(!gh(t))throw Error(_e(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=z0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=O0(e,null,t,1,n??null,r,!1,s,o),t[Ki]=e.current,ga(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new kc(e)};ei.render=function(t,e,n){if(!Oc(e))throw Error(_e(200));return zc(null,t,e,!1,n)};ei.unmountComponentAtNode=function(t){if(!Oc(t))throw Error(_e(40));return t._reactRootContainer?(fs(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ki]=null})}),!0):!1};ei.unstable_batchedUpdates=ch;ei.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Oc(n))throw Error(_e(200));if(t==null||t._reactInternals===void 0)throw Error(_e(38));return zc(t,e,n,!1,i)};ei.version="18.3.1-next-f1338f8080-20240426";function B0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B0)}catch(t){console.error(t)}}B0(),Bg.exports=ei;var cS=Bg.exports,Fp=cS;df.createRoot=Fp.createRoot,df.hydrateRoot=Fp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ta.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const kp="popstate";function uS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return sd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:pc(r)}return dS(e,n,null,t)}function $t(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function vh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fS(){return Math.random().toString(36).substr(2,8)}function Op(t,e){return{usr:t.state,key:t.key,idx:e}}function sd(t,e,n,i){return n===void 0&&(n=null),Ta({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?To(e):e,{state:n,key:e&&e.key||i||fS()})}function pc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function To(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function dS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=yr.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(Ta({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=yr.Pop;let p=f(),u=p==null?null:p-c;c=p,l&&l({action:a,location:_.location,delta:u})}function h(p,u){a=yr.Push;let m=sd(_.location,p,u);c=f()+1;let v=Op(m,c),M=_.createHref(m);try{o.pushState(v,"",M)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;r.location.assign(M)}s&&l&&l({action:a,location:_.location,delta:1})}function g(p,u){a=yr.Replace;let m=sd(_.location,p,u);c=f();let v=Op(m,c),M=_.createHref(m);o.replaceState(v,"",M),s&&l&&l({action:a,location:_.location,delta:0})}function y(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof p=="string"?p:pc(p);return m=m.replace(/ $/,"%20"),$t(u,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,u)}let _={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(kp,d),l=p,()=>{r.removeEventListener(kp,d),l=null}},createHref(p){return e(r,p)},createURL:y,encodeLocation(p){let u=y(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:g,go(p){return o.go(p)}};return _}var zp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zp||(zp={}));function hS(t,e,n){return n===void 0&&(n="/"),pS(t,e,n)}function pS(t,e,n,i){let r=typeof e=="string"?To(e):e,s=go(r.pathname||"/",n);if(s==null)return null;let o=H0(t);mS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=AS(s);a=wS(o[l],c)}return a}function H0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&($t(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Cr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&($t(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),H0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:MS(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of G0(s.path))r(s,o,l)}),e}function G0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=G0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function mS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ES(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const gS=/^:[\w-]+$/,vS=3,yS=2,_S=1,xS=10,SS=-2,Bp=t=>t==="*";function MS(t,e){let n=t.split("/"),i=n.length;return n.some(Bp)&&(i+=SS),e&&(i+=yS),n.filter(r=>!Bp(r)).reduce((r,s)=>r+(gS.test(s)?vS:s===""?_S:xS),i)}function ES(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function wS(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",d=od({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),h=l.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:Cr([s,d.pathname]),pathnameBase:LS(Cr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=Cr([s,d.pathnameBase]))}return o}function od(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=TS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,f,d)=>{let{paramName:h,isOptional:g}=f;if(h==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[d];return g&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function TS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),vh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function AS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function go(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const bS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,CS=t=>bS.test(t);function RS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?To(t):t,s;if(n)if(CS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),vh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Hp(n.substring(1),"/"):s=Hp(n,e)}else s=e;return{pathname:s,search:NS(i),hash:IS(r)}}function Hp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function xu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function yh(t,e){let n=PS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function _h(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=To(t):(r=Ta({},t),$t(!r.pathname||!r.pathname.includes("?"),xu("?","pathname","search",r)),$t(!r.pathname||!r.pathname.includes("#"),xu("#","pathname","hash",r)),$t(!r.search||!r.search.includes("#"),xu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=RS(r,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const Cr=t=>t.join("/").replace(/\/\/+/g,"/"),LS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),NS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,IS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function DS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const V0=["post","put","patch","delete"];new Set(V0);const US=["get",...V0];new Set(US);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Aa.apply(this,arguments)}const Bc=F.createContext(null),W0=F.createContext(null),tr=F.createContext(null),Hc=F.createContext(null),nr=F.createContext({outlet:null,matches:[],isDataRoute:!1}),j0=F.createContext(null);function FS(t,e){let{relative:n}=e===void 0?{}:e;Ao()||$t(!1);let{basename:i,navigator:r}=F.useContext(tr),{hash:s,pathname:o,search:a}=Vc(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Cr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function Ao(){return F.useContext(Hc)!=null}function ir(){return Ao()||$t(!1),F.useContext(Hc).location}function X0(t){F.useContext(tr).static||F.useLayoutEffect(t)}function Gc(){let{isDataRoute:t}=F.useContext(nr);return t?ZS():kS()}function kS(){Ao()||$t(!1);let t=F.useContext(Bc),{basename:e,future:n,navigator:i}=F.useContext(tr),{matches:r}=F.useContext(nr),{pathname:s}=ir(),o=JSON.stringify(yh(r,n.v7_relativeSplatPath)),a=F.useRef(!1);return X0(()=>{a.current=!0}),F.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let d=_h(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Cr([e,d.pathname])),(f.replace?i.replace:i.push)(d,f.state,f)},[e,i,o,s,t])}const OS=F.createContext(null);function zS(t){let e=F.useContext(nr).outlet;return e&&F.createElement(OS.Provider,{value:t},e)}function Vc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=F.useContext(tr),{matches:r}=F.useContext(nr),{pathname:s}=ir(),o=JSON.stringify(yh(r,i.v7_relativeSplatPath));return F.useMemo(()=>_h(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function BS(t,e){return HS(t,e)}function HS(t,e,n,i){Ao()||$t(!1);let{navigator:r}=F.useContext(tr),{matches:s}=F.useContext(nr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=ir(),f;if(e){var d;let p=typeof e=="string"?To(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||$t(!1),f=p}else f=c;let h=f.pathname||"/",g=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let y=hS(t,{pathname:g}),_=XS(y&&y.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:Cr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Cr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&_?F.createElement(Hc.Provider,{value:{location:Aa({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:yr.Pop}},_):_}function GS(){let t=KS(),e=DS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:r},n):null,null)}const VS=F.createElement(GS,null);class WS extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(nr.Provider,{value:this.props.routeContext},F.createElement(j0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jS(t){let{routeContext:e,match:n,children:i}=t,r=F.useContext(Bc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(nr.Provider,{value:e},i)}function XS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||$t(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:h,errors:g}=n,y=d.route.loader&&h[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||y){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,d,h)=>{let g,y=!1,_=null,p=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||VS,l&&(c<0&&h===0?(QS("route-fallback"),y=!0,p=null):c===h&&(y=!0,p=d.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,h+1)),m=()=>{let v;return g?v=_:y?v=p:d.route.Component?v=F.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=f,F.createElement(jS,{match:d,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?F.createElement(WS,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:m(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):m()},null)}var $0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}($0||{}),Y0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Y0||{});function $S(t){let e=F.useContext(Bc);return e||$t(!1),e}function YS(t){let e=F.useContext(W0);return e||$t(!1),e}function qS(t){let e=F.useContext(nr);return e||$t(!1),e}function q0(t){let e=qS(),n=e.matches[e.matches.length-1];return n.route.id||$t(!1),n.route.id}function KS(){var t;let e=F.useContext(j0),n=YS(),i=q0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function ZS(){let{router:t}=$S($0.UseNavigateStable),e=q0(Y0.UseNavigateStable),n=F.useRef(!1);return X0(()=>{n.current=!0}),F.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Aa({fromRouteId:e},s)))},[t,e])}const Gp={};function QS(t,e,n){Gp[t]||(Gp[t]=!0)}function JS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function K0(t){let{to:e,replace:n,state:i,relative:r}=t;Ao()||$t(!1);let{future:s,static:o}=F.useContext(tr),{matches:a}=F.useContext(nr),{pathname:l}=ir(),c=Gc(),f=_h(e,yh(a,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(f);return F.useEffect(()=>c(JSON.parse(d),{replace:n,state:i,relative:r}),[c,d,r,n,i]),null}function eM(t){return zS(t.context)}function fr(t){$t(!1)}function tM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=yr.Pop,navigator:s,static:o=!1,future:a}=t;Ao()&&$t(!1);let l=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:l,navigator:s,static:o,future:Aa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=To(i));let{pathname:f="/",search:d="",hash:h="",state:g=null,key:y="default"}=i,_=F.useMemo(()=>{let p=go(f,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:g,key:y},navigationType:r}},[l,f,d,h,g,y,r]);return _==null?null:F.createElement(tr.Provider,{value:c},F.createElement(Hc.Provider,{children:n,value:_}))}function nM(t){let{children:e,location:n}=t;return BS(ad(e),n)}new Promise(()=>{});function ad(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(i,r)=>{if(!F.isValidElement(i))return;let s=[...e,r];if(i.type===F.Fragment){n.push.apply(n,ad(i.props.children,s));return}i.type!==fr&&$t(!1),!i.props.index||!i.props.children||$t(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=ad(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mc(){return mc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},mc.apply(this,arguments)}function Z0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function iM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function rM(t,e){return t.button===0&&(!e||e==="_self")&&!iM(t)}const sM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],oM=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],aM="6";try{window.__reactRouterVersion=aM}catch{}const lM=F.createContext({isTransitioning:!1}),cM="startTransition",Vp=Qy[cM];function uM(t){let{basename:e,children:n,future:i,window:r}=t,s=F.useRef();s.current==null&&(s.current=uS({window:r,v5Compat:!0}));let o=s.current,[a,l]=F.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=F.useCallback(d=>{c&&Vp?Vp(()=>l(d)):l(d)},[l,c]);return F.useLayoutEffect(()=>o.listen(f),[o,f]),F.useEffect(()=>JS(i),[i]),F.createElement(tM,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const fM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hM=F.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f,viewTransition:d}=e,h=Z0(e,sM),{basename:g}=F.useContext(tr),y,_=!1;if(typeof c=="string"&&dM.test(c)&&(y=c,fM))try{let v=new URL(window.location.href),M=c.startsWith("//")?new URL(v.protocol+c):new URL(c),I=go(M.pathname,g);M.origin===v.origin&&I!=null?c=I+M.search+M.hash:_=!0}catch{}let p=FS(c,{relative:r}),u=gM(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:r,viewTransition:d});function m(v){i&&i(v),v.defaultPrevented||u(v)}return F.createElement("a",mc({},h,{href:y||p,onClick:_||s?i:m,ref:n,target:l}))}),pM=F.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:f}=e,d=Z0(e,oM),h=Vc(l,{relative:d.relative}),g=ir(),y=F.useContext(W0),{navigator:_,basename:p}=F.useContext(tr),u=y!=null&&vM(h)&&c===!0,m=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,v=g.pathname,M=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(v=v.toLowerCase(),M=M?M.toLowerCase():null,m=m.toLowerCase()),M&&p&&(M=go(M,p)||M);const I=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let P=v===m||!o&&v.startsWith(m)&&v.charAt(I)==="/",C=M!=null&&(M===m||!o&&M.startsWith(m)&&M.charAt(m.length)==="/"),G={isActive:P,isPending:C,isTransitioning:u},ne=P?i:void 0,x;typeof s=="function"?x=s(G):x=[s,P?"active":null,C?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let L=typeof a=="function"?a(G):a;return F.createElement(hM,mc({},d,{"aria-current":ne,className:x,ref:n,style:L,to:l,viewTransition:c}),typeof f=="function"?f(G):f)});var ld;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ld||(ld={}));var Wp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Wp||(Wp={}));function mM(t){let e=F.useContext(Bc);return e||$t(!1),e}function gM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Gc(),c=ir(),f=Vc(t,{relative:o});return F.useCallback(d=>{if(rM(d,n)){d.preventDefault();let h=i!==void 0?i:pc(c)===pc(f);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,f,i,r,n,t,s,o,a])}function vM(t,e){e===void 0&&(e={});let n=F.useContext(lM);n==null&&$t(!1);let{basename:i}=mM(ld.useViewTransitionState),r=Vc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=go(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=go(n.nextLocation.pathname,i)||n.nextLocation.pathname;return od(r.pathname,o)!=null||od(r.pathname,s)!=null}const xh="reforgedz.session";function tn(){const t=localStorage.getItem(xh);if(!t)return null;try{const e=JSON.parse(t);return!e||typeof e.token!="string"||e.token.length===0?null:e}catch{return null}}function yM(t){localStorage.setItem(xh,JSON.stringify(t))}function _M(){localStorage.removeItem(xh)}function xM(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),n=(4-e.length%4)%4,i=e+"=".repeat(n);return atob(i)}function SM(){const t=tn();if(!t)return null;const e=String(t.token).split(".");if(e.length!==2)return null;try{const n=xM(e[0]),i=JSON.parse(n);return!i||typeof i.sub!="string"?null:i}catch{return null}}function Su(t){const e=SM();if(!e)return!1;const n=e.tools;return!n||typeof n!="object"?t==="replay":!!n[t]}function an(){const t="https://admin.reforgedz.xyz";return t.length>0?t.replace(/\/$/,""):window.location.origin}async function MM(t,e){const n=an(),i=await fetch(`${n}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})});if(!i.ok){const r=await i.text();throw new Error(r||`Login failed (${i.status})`)}return await i.json()}async function EM(){const t=an(),e=tn();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to list servers (${n.status})`)}return await n.json()}async function cd(){const t=an(),e=tn();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/replay/statusAll`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to get replay status for all servers (${n.status})`)}return await n.json()}async function jp(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/range?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get replay range (${i.status})`)}return await i.json()}async function Xp(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/players?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to list replay players (${i.status})`)}return await i.json()}async function Ja(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=new URLSearchParams;i.set("serverId",t.serverId),typeof t.sinceTsMs=="number"&&i.set("sinceTsMs",String(t.sinceTsMs)),typeof t.untilTsMs=="number"&&i.set("untilTsMs",String(t.untilTsMs)),typeof t.limit=="number"&&i.set("limit",String(t.limit)),t.tail&&i.set("tail","1");const r=await fetch(`${e}/api/replay/events?${i.toString()}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!r.ok){const s=await r.text();throw new Error(s||`Failed to get replay events (${r.status})`)}return await r.json()}async function wM(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/gmPing`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to send GM ping (${i.status})`)}return await i.json()}async function Mu(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapTerrain?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map terrain (${i.status})`)}return await i.json()}async function Eu(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapDescriptors?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map descriptors (${i.status})`)}return await i.json()}async function TM(){const t=an(),e=tn();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/admin/users`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list users (${n.status})`);return await n.json()}async function AM(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to create user (${i.status})`);return await i.json()}async function wu(t,e){const n=an(),i=tn();if(!i)throw new Error("Not authenticated");const r=await fetch(`${n}/api/admin/users/${encodeURIComponent(t)}`,{method:"PUT",headers:{Authorization:`Bearer ${i.token}`,"Content-Type":"application/json"},body:JSON.stringify({tools:e})});if(!r.ok)throw new Error(await r.text()||`Failed to update user (${r.status})`);return await r.json()}async function bM(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users/${encodeURIComponent(t)}`,{method:"DELETE",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to delete user (${i.status})`);return await i.json()}async function CM(){const t=an(),e=tn();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list dev servers (${n.status})`);return await n.json()}async function RM(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to add dev server (${i.status})`);return await i.json()}async function PM(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/clear?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to clear history (${i.status})`);return await i.json()}async function LM(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/regenerateTerrain?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to regenerate terrain (${i.status})`);return await i.json()}async function NM(){const t=an(),e=tn();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/discordWebhook`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to load webhook (${n.status})`);return await n.json()}async function IM(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/discordWebhook`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify({webhookUrl:t})});if(!i.ok)throw new Error(await i.text()||`Failed to save webhook (${i.status})`);return await i.json()}async function DM(t){const e=an(),n=tn();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/exportDiscord`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to export to Discord (${i.status})`);return await i.json()}function UM(){const t=Gc(),e=ir(),n=F.useMemo(()=>{const h=e.state;return h&&typeof h.from=="string"&&h.from.length>0?h.from:"/"},[e.state]),[i,r]=F.useState(""),[s,o]=F.useState(""),[a,l]=F.useState(null),[c,f]=F.useState(!1);async function d(h){if(h.preventDefault(),l(null),i.trim().length===0||s.length===0){l("Enter username and password");return}f(!0);try{const g=await MM(i.trim(),s);yM({token:g.token}),t(n,{replace:!0})}catch(g){const y=g instanceof Error?g.message:"Login failed";l(y)}finally{f(!1)}}return E.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24,boxSizing:"border-box"},children:E.jsxs("div",{className:"stack",style:{width:"min(440px, 100%)",gap:14},children:[E.jsxs("div",{style:{textAlign:"center"},children:[E.jsx("div",{className:"label",children:"Welcome"}),E.jsx("h1",{className:"h1",style:{fontSize:22,marginTop:6},children:"ReforgedZ Admin Menu"}),E.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Sign in to continue."})]}),E.jsx("div",{className:"card",style:{padding:18},children:E.jsxs("form",{className:"stack",onSubmit:d,children:[E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsx("div",{className:"label",children:"Username"}),E.jsx("input",{className:"input",value:i,onChange:h=>r(h.target.value),autoComplete:"username"})]}),E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsx("div",{className:"label",children:"Password"}),E.jsx("input",{className:"input",type:"password",value:s,onChange:h=>o(h.target.value),autoComplete:"current-password"})]}),a?E.jsx("div",{className:"error",style:{fontSize:13},children:a}):null,E.jsx("button",{className:"button buttonPrimary",type:"submit",disabled:c,children:c?"Signing in…":"Sign in"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"If you aren't meant to be here, say hi to eiry, I know where you live!."})]})})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="161",FM=0,$p=1,kM=2,Q0=1,OM=2,Hi=3,Ur=0,$n=1,Si=2,Rr=0,oo=1,Yp=2,qp=3,Kp=4,zM=5,qr=100,BM=101,HM=102,Zp=103,Qp=104,GM=200,VM=201,WM=202,jM=203,ud=204,fd=205,XM=206,$M=207,YM=208,qM=209,KM=210,ZM=211,QM=212,JM=213,eE=214,tE=0,nE=1,iE=2,gc=3,rE=4,sE=5,oE=6,aE=7,J0=0,lE=1,cE=2,Pr=0,uE=1,fE=2,dE=3,hE=4,pE=5,mE=6,ey=300,vo=301,yo=302,dd=303,hd=304,Wc=306,pd=1e3,Mi=1001,md=1002,Un=1003,Jp=1004,zo=1005,Bn=1006,Tu=1007,es=1008,Lr=1009,gE=1010,vE=1011,Mh=1012,ty=1013,_r=1014,Wi=1015,ba=1016,ny=1017,iy=1018,is=1020,yE=1021,Ei=1023,_E=1024,xE=1025,rs=1026,_o=1027,SE=1028,ry=1029,ME=1030,sy=1031,oy=1033,Au=33776,bu=33777,Cu=33778,Ru=33779,em=35840,tm=35841,nm=35842,im=35843,ay=36196,rm=37492,sm=37496,om=37808,am=37809,lm=37810,cm=37811,um=37812,fm=37813,dm=37814,hm=37815,pm=37816,mm=37817,gm=37818,vm=37819,ym=37820,_m=37821,Pu=36492,xm=36494,Sm=36495,EE=36283,Mm=36284,Em=36285,wm=36286,ly=3e3,ss=3001,wE=3200,TE=3201,cy=0,AE=1,ai="",xn="srgb",Ji="srgb-linear",Eh="display-p3",jc="display-p3-linear",vc="linear",Ht="srgb",yc="rec709",_c="p3",_s=7680,Tm=519,bE=512,CE=513,RE=514,uy=515,PE=516,LE=517,NE=518,IE=519,gd=35044,Am="300 es",vd=1035,$i=2e3,xc=2001;class bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gl=Math.PI/180,yd=180/Math.PI;function Nr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[t&255]+Cn[t>>8&255]+Cn[t>>16&255]+Cn[t>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[n&63|128]+Cn[n>>8&255]+"-"+Cn[n>>16&255]+Cn[n>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function Gn(t,e,n){return Math.max(e,Math.min(n,t))}function DE(t,e){return(t%e+e)%e}function Lu(t,e,n){return(1-n)*t+n*e}function bm(t){return(t&t-1)===0&&t!==0}function _d(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ni(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ft(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,n=0){vt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,n,i,r,s,o,a,l,c){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],g=i[5],y=i[8],_=r[0],p=r[3],u=r[6],m=r[1],v=r[4],M=r[7],I=r[2],P=r[5],C=r[8];return s[0]=o*_+a*m+l*I,s[3]=o*p+a*v+l*P,s[6]=o*u+a*M+l*C,s[1]=c*_+f*m+d*I,s[4]=c*p+f*v+d*P,s[7]=c*u+f*M+d*C,s[2]=h*_+g*m+y*I,s[5]=h*p+g*v+y*P,s[8]=h*u+g*M+y*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,g=c*s-o*l,y=n*d+i*h+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=d*_,e[1]=(r*c-f*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=g*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Nu.makeScale(e,n)),this}rotate(e){return this.premultiply(Nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nu=new xt;function fy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function UE(){const t=Sc("canvas");return t.style.display="block",t}const Cm={};function os(t){t in Cm||(Cm[t]=!0,console.warn(t))}const Rm=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pm=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),el={[Ji]:{transfer:vc,primaries:yc,toReference:t=>t,fromReference:t=>t},[xn]:{transfer:Ht,primaries:yc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[jc]:{transfer:vc,primaries:_c,toReference:t=>t.applyMatrix3(Pm),fromReference:t=>t.applyMatrix3(Rm)},[Eh]:{transfer:Ht,primaries:_c,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Pm),fromReference:t=>t.applyMatrix3(Rm).convertLinearToSRGB()}},FE=new Set([Ji,jc]),kt={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!FE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=el[e].toReference,r=el[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return el[t].primaries},getTransfer:function(t){return t===ai?vc:el[t].transfer}};function ao(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Iu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xs;class dy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Sc("canvas")),xs.width=e.width,xs.height=e.height;const i=xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ao(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ao(n[i]/255)*255):n[i]=ao(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kE=0;class hy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=Nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Du(r[o].image)):s.push(Du(r[o]))}else s=Du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OE=0;class kn extends bo{constructor(e=kn.DEFAULT_IMAGE,n=kn.DEFAULT_MAPPING,i=Mi,r=Mi,s=Bn,o=es,a=Ei,l=Lr,c=kn.DEFAULT_ANISOTROPY,f=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Nr(),this.name="",this.source=new hy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===ss?xn:ai),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ey)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pd:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pd:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xn?ss:ly}set encoding(e){os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ss?xn:ai}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=ey;kn.DEFAULT_ANISOTROPY=1;class vn{constructor(e=0,n=0,i=0,r=1){vn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],g=l[5],y=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-_)<.01&&Math.abs(y-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+_)<.1&&Math.abs(y+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(g+1)/2,I=(u+1)/2,P=(f+h)/4,C=(d+_)/4,G=(y+p)/4;return v>M&&v>I?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=P/i,s=C/i):M>I?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=P/r,s=G/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=G/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-y)*(p-y)+(d-_)*(d-_)+(h-f)*(h-f));return Math.abs(m)<.001&&(m=1),this.x=(p-y)/m,this.y=(d-_)/m,this.z=(h-f)/m,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zE extends bo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new vn(0,0,e,n),this.scissorTest=!1,this.viewport=new vn(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ss?xn:ai),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new hy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends zE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class py extends kn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class BE extends kn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],g=s[o+1],y=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=y,e[n+3]=_;return}if(d!==_||l!==h||c!==g||f!==y){let p=1-a;const u=l*h+c*g+f*y+d*_,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const I=Math.sqrt(v),P=Math.atan2(I,u*m);p=Math.sin(p*P)/I,a=Math.sin(a*P)/I}const M=a*m;if(l=l*p+h*M,c=c*p+g*M,f=f*p+y*M,d=d*p+_*M,p===1-a){const I=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=I,c*=I,f*=I,d*=I}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],g=s[o+2],y=s[o+3];return e[n]=a*y+f*d+l*g-c*h,e[n+1]=l*y+f*h+c*d-a*g,e[n+2]=c*y+f*g+a*h-l*d,e[n+3]=f*y-a*d-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*g*y,this._y=c*g*d-h*f*y,this._z=c*f*y+h*g*d,this._w=c*f*d-h*g*y;break;case"YXZ":this._x=h*f*d+c*g*y,this._y=c*g*d-h*f*y,this._z=c*f*y-h*g*d,this._w=c*f*d+h*g*y;break;case"ZXY":this._x=h*f*d-c*g*y,this._y=c*g*d+h*f*y,this._z=c*f*y+h*g*d,this._w=c*f*d-h*g*y;break;case"ZYX":this._x=h*f*d-c*g*y,this._y=c*g*d+h*f*y,this._z=c*f*y-h*g*d,this._w=c*f*d+h*g*y;break;case"YZX":this._x=h*f*d+c*g*y,this._y=c*g*d+h*f*y,this._z=c*f*y-h*g*d,this._w=c*f*d-h*g*y;break;case"XZY":this._x=h*f*d-c*g*y,this._y=c*g*d-h*f*y,this._z=c*f*y+h*g*d,this._w=c*f*d+h*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uu=new W,Lm=new hs;class Ia{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(s,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),nl.subVectors(this.max,Bo),Ss.subVectors(e.a,Bo),Ms.subVectors(e.b,Bo),Es.subVectors(e.c,Bo),sr.subVectors(Ms,Ss),or.subVectors(Es,Ms),Br.subVectors(Ss,Es);let n=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Br.z,Br.y,sr.z,0,-sr.x,or.z,0,-or.x,Br.z,0,-Br.x,-sr.y,sr.x,0,-or.y,or.x,0,-Br.y,Br.x,0];return!Fu(n,Ss,Ms,Es,nl)||(n=[1,0,0,0,1,0,0,0,1],!Fu(n,Ss,Ms,Es,nl))?!1:(il.crossVectors(sr,or),n=[il.x,il.y,il.z],Fu(n,Ss,Ms,Es,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new W,new W,new W,new W,new W,new W,new W,new W],mi=new W,tl=new Ia,Ss=new W,Ms=new W,Es=new W,sr=new W,or=new W,Br=new W,Bo=new W,nl=new W,il=new W,Hr=new W;function Fu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Hr.fromArray(t,s);const a=r.x*Math.abs(Hr.x)+r.y*Math.abs(Hr.y)+r.z*Math.abs(Hr.z),l=e.dot(Hr),c=n.dot(Hr),f=i.dot(Hr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const HE=new Ia,Ho=new W,ku=new W;class Xc{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):HE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const n=Ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(ku)),this.expandByPoint(Ho.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new W,Ou=new W,rl=new W,ar=new W,zu=new W,sl=new W,Bu=new W;class my{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ou.copy(e).add(n).multiplyScalar(.5),rl.copy(n).sub(e).normalize(),ar.copy(this.origin).sub(Ou);const s=e.distanceTo(n)*.5,o=-this.direction.dot(rl),a=ar.dot(this.direction),l=-ar.dot(rl),c=ar.lengthSq(),f=Math.abs(1-o*o);let d,h,g,y;if(f>0)if(d=o*l-a,h=o*a-l,y=s*f,d>=0)if(h>=-y)if(h<=y){const _=1/f;d*=_,h*=_,g=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h<=-y?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c):h<=y?(d=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ou).addScaledVector(rl,h),g}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){zu.subVectors(n,e),sl.subVectors(i,e),Bu.crossVectors(zu,sl);let o=this.direction.dot(Bu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,e);const l=a*this.direction.dot(sl.crossVectors(ar,sl));if(l<0)return null;const c=a*this.direction.dot(zu.cross(ar));if(c<0||l+c>o)return null;const f=-a*ar.dot(Bu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,n,i,r,s,o,a,l,c,f,d,h,g,y,_,p){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,g,y,_,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,g,y,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=g,u[7]=y,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,g=o*d,y=a*f,_=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=g+y*c,n[5]=h-_*c,n[9]=-a*l,n[2]=_-h*c,n[6]=y+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,g=l*d,y=c*f,_=c*d;n[0]=h+_*a,n[4]=y*a-g,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=g*a-y,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,g=l*d,y=c*f,_=c*d;n[0]=h-_*a,n[4]=-o*d,n[8]=y+g*a,n[1]=g+y*a,n[5]=o*f,n[9]=_-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,g=o*d,y=a*f,_=a*d;n[0]=l*f,n[4]=y*c-g,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=g*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,y=a*l,_=a*c;n[0]=l*f,n[4]=_-h*d,n[8]=y*d+g,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=g*d+y,n[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,g=o*c,y=a*l,_=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+_,n[5]=o*f,n[9]=g*d-y,n[2]=y*d-g,n[6]=a*f,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GE,e,VE)}lookAt(e,n,i){const r=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),lr.crossVectors(i,Yn),lr.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),lr.crossVectors(i,Yn)),lr.normalize(),ol.crossVectors(Yn,lr),r[0]=lr.x,r[4]=ol.x,r[8]=Yn.x,r[1]=lr.y,r[5]=ol.y,r[9]=Yn.y,r[2]=lr.z,r[6]=ol.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],g=i[13],y=i[2],_=i[6],p=i[10],u=i[14],m=i[3],v=i[7],M=i[11],I=i[15],P=r[0],C=r[4],G=r[8],ne=r[12],x=r[1],L=r[5],ee=r[9],ue=r[13],z=r[2],te=r[6],Q=r[10],ae=r[14],H=r[3],Y=r[7],Z=r[11],re=r[15];return s[0]=o*P+a*x+l*z+c*H,s[4]=o*C+a*L+l*te+c*Y,s[8]=o*G+a*ee+l*Q+c*Z,s[12]=o*ne+a*ue+l*ae+c*re,s[1]=f*P+d*x+h*z+g*H,s[5]=f*C+d*L+h*te+g*Y,s[9]=f*G+d*ee+h*Q+g*Z,s[13]=f*ne+d*ue+h*ae+g*re,s[2]=y*P+_*x+p*z+u*H,s[6]=y*C+_*L+p*te+u*Y,s[10]=y*G+_*ee+p*Q+u*Z,s[14]=y*ne+_*ue+p*ae+u*re,s[3]=m*P+v*x+M*z+I*H,s[7]=m*C+v*L+M*te+I*Y,s[11]=m*G+v*ee+M*Q+I*Z,s[15]=m*ne+v*ue+M*ae+I*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],g=e[14],y=e[3],_=e[7],p=e[11],u=e[15];return y*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*g-i*l*g)+_*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*f-s*l*f)+p*(+n*c*d-n*a*g-s*o*d+i*o*g+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],g=e[11],y=e[12],_=e[13],p=e[14],u=e[15],m=d*p*c-_*h*c+_*l*g-a*p*g-d*l*u+a*h*u,v=y*h*c-f*p*c-y*l*g+o*p*g+f*l*u-o*h*u,M=f*_*c-y*d*c+y*a*g-o*_*g-f*a*u+o*d*u,I=y*d*l-f*_*l-y*a*h+o*_*h+f*a*p-o*d*p,P=n*m+i*v+r*M+s*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=m*C,e[1]=(_*h*s-d*p*s-_*r*g+i*p*g+d*r*u-i*h*u)*C,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*C,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*g-i*l*g)*C,e[4]=v*C,e[5]=(f*p*s-y*h*s+y*r*g-n*p*g-f*r*u+n*h*u)*C,e[6]=(y*l*s-o*p*s-y*r*c+n*p*c+o*r*u-n*l*u)*C,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*g+n*l*g)*C,e[8]=M*C,e[9]=(y*d*s-f*_*s-y*i*g+n*_*g+f*i*u-n*d*u)*C,e[10]=(o*_*s-y*a*s+y*i*c-n*_*c-o*i*u+n*a*u)*C,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*g-n*a*g)*C,e[12]=I*C,e[13]=(f*_*r-y*d*r+y*i*h-n*_*h-f*i*p+n*d*p)*C,e[14]=(y*a*r-o*_*r-y*i*l+n*_*l+o*i*p-n*a*p)*C,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,g=s*f,y=s*d,_=o*f,p=o*d,u=a*d,m=l*c,v=l*f,M=l*d,I=i.x,P=i.y,C=i.z;return r[0]=(1-(_+u))*I,r[1]=(g+M)*I,r[2]=(y-v)*I,r[3]=0,r[4]=(g-M)*P,r[5]=(1-(h+u))*P,r[6]=(p+m)*P,r[7]=0,r[8]=(y+v)*C,r[9]=(p-m)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ws.set(r[0],r[1],r[2]).length();const o=ws.set(r[4],r[5],r[6]).length(),a=ws.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gi.copy(this);const c=1/s,f=1/o,d=1/a;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=f,gi.elements[5]*=f,gi.elements[6]*=f,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,n.setFromRotationMatrix(gi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=$i){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,y;if(a===$i)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===xc)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=$i){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,g=(i+r)*f;let y,_;if(a===$i)y=(o+s)*d,_=-2*d;else if(a===xc)y=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ws=new W,gi=new en,GE=new W(0,0,0),VE=new W(1,1,1),lr=new W,ol=new W,Yn=new W,Nm=new en,Im=new hs;class Da{constructor(e=0,n=0,i=0,r=Da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Da.DEFAULT_ORDER="XYZ";class gy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WE=0;const Dm=new W,Ts=new hs,Oi=new en,al=new W,Go=new W,jE=new W,XE=new hs,Um=new W(1,0,0),Fm=new W(0,1,0),km=new W(0,0,1),$E={type:"added"},YE={type:"removed"};class un extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new W,n=new Da,i=new hs,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new en},normalMatrix:{value:new xt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Um,e)}rotateY(e){return this.rotateOnAxis(Fm,e)}rotateZ(e){return this.rotateOnAxis(km,e)}translateOnAxis(e,n){return Dm.copy(e).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Um,e)}translateY(e){return this.translateOnAxis(Fm,e)}translateZ(e){return this.translateOnAxis(km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?al.copy(e):al.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Go,al,this.up):Oi.lookAt(al,Go,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(Oi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($E)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(YE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,jE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,XE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new W(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new W,zi=new W,Hu=new W,Bi=new W,As=new W,bs=new W,Om=new W,Gu=new W,Vu=new W,Wu=new W;class li{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),vi.subVectors(e,n),r.cross(vi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){vi.subVectors(r,n),zi.subVectors(i,n),Hu.subVectors(e,n);const o=vi.dot(vi),a=vi.dot(zi),l=vi.dot(Hu),c=zi.dot(zi),f=zi.dot(Hu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,g=(c*l-a*f)*h,y=(o*f-a*l)*h;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static isFrontFacing(e,n,i,r){return vi.subVectors(i,n),zi.subVectors(e,n),vi.cross(zi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),vi.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return li.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;As.subVectors(r,i),bs.subVectors(s,i),Gu.subVectors(e,i);const l=As.dot(Gu),c=bs.dot(Gu);if(l<=0&&c<=0)return n.copy(i);Vu.subVectors(e,r);const f=As.dot(Vu),d=bs.dot(Vu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(As,o);Wu.subVectors(e,s);const g=As.dot(Wu),y=bs.dot(Wu);if(y>=0&&g<=y)return n.copy(s);const _=g*c-l*y;if(_<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(bs,a);const p=f*y-g*d;if(p<=0&&d-f>=0&&g-y>=0)return Om.subVectors(s,r),a=(d-f)/(d-f+(g-y)),n.copy(r).addScaledVector(Om,a);const u=1/(p+_+h);return o=_*u,a=h*u,n.copy(i).addScaledVector(As,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function ju(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=kt.workingColorSpace){return this.r=e,this.g=n,this.b=i,kt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=kt.workingColorSpace){if(e=DE(e,1),n=Gn(n,0,1),i=Gn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ju(o,s,e+1/3),this.g=ju(o,s,e),this.b=ju(o,s,e-1/3)}return kt.toWorkingColorSpace(this,r),this}setStyle(e,n=xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xn){const i=vy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}copyLinearToSRGB(e){return this.r=Iu(e.r),this.g=Iu(e.g),this.b=Iu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return kt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(Gn(Rn.r*255,0,255))*65536+Math.round(Gn(Rn.g*255,0,255))*256+Math.round(Gn(Rn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=kt.workingColorSpace){kt.fromWorkingColorSpace(Rn.copy(this),n);const i=Rn.r,r=Rn.g,s=Rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=kt.workingColorSpace){return kt.fromWorkingColorSpace(Rn.copy(this),n),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=xn){kt.fromWorkingColorSpace(Rn.copy(this),e);const n=Rn.r,i=Rn.g,r=Rn.b;return e!==xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+n,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cr),e.getHSL(ll);const i=Lu(cr.h,ll.h,n),r=Lu(cr.s,ll.s,n),s=Lu(cr.l,ll.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new pt;pt.NAMES=vy;let qE=0;class gs extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=oo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=fd,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=gc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(i.blending=this.blending),this.side!==Ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ud&&(i.blendSrc=this.blendSrc),this.blendDst!==fd&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yy extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=J0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new W,cl=new vt;class Sn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return os("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix3(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ni(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ni(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ni(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ni(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ft(n,this.array),i=Ft(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ft(n,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ft(n,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gd&&(e.usage=this.usage),e}}class _y extends Sn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class xy extends Sn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wn extends Sn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let KE=0;const ni=new en,Xu=new un,Cs=new W,qn=new Ia,Vo=new Ia,pn=new W;class Mn extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fy(e)?xy:_y)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new xt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,i){return ni.makeTranslation(e,n,i),this.applyMatrix4(ni),this}scale(e,n,i){return ni.makeScale(e,n,i),this.applyMatrix4(ni),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(qn.min,Vo.min),qn.expandByPoint(pn),pn.addVectors(qn.max,Vo.max),qn.expandByPoint(pn)):(qn.expandByPoint(Vo.min),qn.expandByPoint(Vo.max))}qn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)pn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)pn.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(e,c),pn.add(Cs)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let x=0;x<a;x++)c[x]=new W,f[x]=new W;const d=new W,h=new W,g=new W,y=new vt,_=new vt,p=new vt,u=new W,m=new W;function v(x,L,ee){d.fromArray(r,x*3),h.fromArray(r,L*3),g.fromArray(r,ee*3),y.fromArray(o,x*2),_.fromArray(o,L*2),p.fromArray(o,ee*2),h.sub(d),g.sub(d),_.sub(y),p.sub(y);const ue=1/(_.x*p.y-p.x*_.y);isFinite(ue)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(g,-_.y).multiplyScalar(ue),m.copy(g).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(ue),c[x].add(u),c[L].add(u),c[ee].add(u),f[x].add(m),f[L].add(m),f[ee].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let x=0,L=M.length;x<L;++x){const ee=M[x],ue=ee.start,z=ee.count;for(let te=ue,Q=ue+z;te<Q;te+=3)v(i[te+0],i[te+1],i[te+2])}const I=new W,P=new W,C=new W,G=new W;function ne(x){C.fromArray(s,x*3),G.copy(C);const L=c[x];I.copy(L),I.sub(C.multiplyScalar(C.dot(L))).normalize(),P.crossVectors(G,L);const ue=P.dot(f[x])<0?-1:1;l[x*4]=I.x,l[x*4+1]=I.y,l[x*4+2]=I.z,l[x*4+3]=ue}for(let x=0,L=M.length;x<L;++x){const ee=M[x],ue=ee.start,z=ee.count;for(let te=ue,Q=ue+z;te<Q;te+=3)ne(i[te+0]),ne(i[te+1]),ne(i[te+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,f=new W,d=new W;if(e)for(let h=0,g=e.count;h<g;h+=3){const y=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)pn.fromBufferAttribute(e,n),pn.normalize(),e.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let g=0,y=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*f;for(let u=0;u<f;u++)h[y++]=c[g++]}return new Sn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const g=c[d];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,g=d.length;h<g;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zm=new en,Gr=new my,ul=new Xc,Bm=new W,Rs=new W,Ps=new W,Ls=new W,$u=new W,fl=new W,dl=new vt,hl=new vt,pl=new vt,Hm=new W,Gm=new W,Vm=new W,ml=new W,gl=new W;class ui extends un{constructor(e=new Mn,n=new yy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&($u.fromBufferAttribute(d,e),o?fl.addScaledVector($u,f):fl.addScaledVector($u.sub(n),f))}n.add(fl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(s),Gr.copy(e.ray).recast(e.near),!(ul.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(ul,Bm)===null||Gr.origin.distanceToSquared(Bm)>(e.far-e.near)**2))&&(zm.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(zm),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const p=h[y],u=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let M=m,I=v;M<I;M+=3){const P=a.getX(M),C=a.getX(M+1),G=a.getX(M+2);r=vl(this,u,e,i,c,f,d,P,C,G),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let p=y,u=_;p<u;p+=3){const m=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);r=vl(this,o,e,i,c,f,d,m,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const p=h[y],u=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let M=m,I=v;M<I;M+=3){const P=M,C=M+1,G=M+2;r=vl(this,u,e,i,c,f,d,P,C,G),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=y,u=_;p<u;p+=3){const m=p,v=p+1,M=p+2;r=vl(this,o,e,i,c,f,d,m,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function ZE(t,e,n,i,r,s,o,a){let l;if(e.side===$n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ur,a),l===null)return null;gl.copy(a),gl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(gl);return c<n.near||c>n.far?null:{distance:c,point:gl.clone(),object:t}}function vl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Rs),t.getVertexPosition(l,Ps),t.getVertexPosition(c,Ls);const f=ZE(t,e,n,i,Rs,Ps,Ls,ml);if(f){r&&(dl.fromBufferAttribute(r,a),hl.fromBufferAttribute(r,l),pl.fromBufferAttribute(r,c),f.uv=li.getInterpolation(ml,Rs,Ps,Ls,dl,hl,pl,new vt)),s&&(dl.fromBufferAttribute(s,a),hl.fromBufferAttribute(s,l),pl.fromBufferAttribute(s,c),f.uv1=li.getInterpolation(ml,Rs,Ps,Ls,dl,hl,pl,new vt),f.uv2=f.uv1),o&&(Hm.fromBufferAttribute(o,a),Gm.fromBufferAttribute(o,l),Vm.fromBufferAttribute(o,c),f.normal=li.getInterpolation(ml,Rs,Ps,Ls,Hm,Gm,Vm,new W),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};li.getNormal(Rs,Ps,Ls,d.normal),f.face=d}return f}class Ua extends Mn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(f,3)),this.setAttribute("uv",new wn(d,2));function y(_,p,u,m,v,M,I,P,C,G,ne){const x=M/C,L=I/G,ee=M/2,ue=I/2,z=P/2,te=C+1,Q=G+1;let ae=0,H=0;const Y=new W;for(let Z=0;Z<Q;Z++){const re=Z*L-ue;for(let he=0;he<te;he++){const Ze=he*x-ee;Y[_]=Ze*m,Y[p]=re*v,Y[u]=z,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[u]=P>0?1:-1,f.push(Y.x,Y.y,Y.z),d.push(he/C),d.push(1-Z/G),ae+=1}}for(let Z=0;Z<G;Z++)for(let re=0;re<C;re++){const he=h+re+te*Z,Ze=h+re+te*(Z+1),J=h+(re+1)+te*(Z+1),le=h+(re+1)+te*Z;l.push(he,Ze,le),l.push(Ze,J,le),H+=6}a.addGroup(g,H,ne),g+=H,h+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function In(t){const e={};for(let n=0;n<t.length;n++){const i=xo(t[n]);for(const r in i)e[r]=i[r]}return e}function QE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Sy(t){return t.getRenderTarget()===null?t.outputColorSpace:kt.workingColorSpace}const JE={clone:xo,merge:In};var ew=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ew,this.fragmentShader=tw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=QE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class My extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=$i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new W,Wm=new vt,jm=new vt;class oi extends My{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=yd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yd*2*Math.atan(Math.tan(Gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,Wm,jm),n.subVectors(jm,Wm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Is=1;class nw extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new oi(Ns,Is,e,n);r.layers=this.layers,this.add(r);const s=new oi(Ns,Is,e,n);s.layers=this.layers,this.add(s);const o=new oi(Ns,Is,e,n);o.layers=this.layers,this.add(o);const a=new oi(Ns,Is,e,n);a.layers=this.layers,this.add(a);const l=new oi(Ns,Is,e,n);l.layers=this.layers,this.add(l);const c=new oi(Ns,Is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===$i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Ey extends kn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:vo,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iw extends ds{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ss?xn:ai),this.texture=new Ey(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ua(5,5,5),s=new Fr({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:Rr});s.uniforms.tEquirect.value=n;const o=new ui(r,s),a=n.minFilter;return n.minFilter===es&&(n.minFilter=Bn),new nw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Yu=new W,rw=new W,sw=new xt;class $r{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yu.subVectors(i,n).cross(rw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sw.getNormalMatrix(e),r=this.coplanarPoint(Yu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Xc,yl=new W;class wh{constructor(e=new $r,n=new $r,i=new $r,r=new $r,s=new $r,o=new $r){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=$i){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],g=r[8],y=r[9],_=r[10],p=r[11],u=r[12],m=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-g,M-u).normalize(),i[1].setComponents(l+s,h+c,p+g,M+u).normalize(),i[2].setComponents(l+o,h+f,p+y,M+m).normalize(),i[3].setComponents(l-o,h-f,p-y,M-m).normalize(),i[4].setComponents(l-a,h-d,p-_,M-v).normalize(),n===$i)i[5].setComponents(l+a,h+d,p+_,M+v).normalize();else if(n===xc)i[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ow(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,g=d.byteLength,y=t.createBuffer();t.bindBuffer(f,y),t.bufferData(f,d,h),c.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:y,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,f,d){const h=f.array,g=f._updateRange,y=f.updateRanges;if(t.bindBuffer(d,c),g.count===-1&&y.length===0&&t.bufferSubData(d,0,h),y.length!==0){for(let _=0,p=y.length;_<p;_++){const u=y[_];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:l}}class So extends Mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,g=[],y=[],_=[],p=[];for(let u=0;u<f;u++){const m=u*h-o;for(let v=0;v<c;v++){const M=v*d-s;y.push(M,-m,0),_.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,M=m+c*(u+1),I=m+1+c*(u+1),P=m+1+c*u;g.push(v,M,P),g.push(M,I,P)}this.setIndex(g),this.setAttribute("position",new wn(y,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.widthSegments,e.heightSegments)}}var aw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lw=`#ifdef USE_ALPHAHASH
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
#endif`,cw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hw=`#ifdef USE_AOMAP
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
#endif`,pw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mw=`#ifdef USE_BATCHING
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
#endif`,gw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_w=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xw=`#ifdef USE_IRIDESCENCE
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
#endif`,Sw=`#ifdef USE_BUMPMAP
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
#endif`,Mw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ww=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Aw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pw=`#define PI 3.141592653589793
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
} // validated`,Lw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nw=`vec3 transformedNormal = objectNormal;
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
#endif`,Iw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ow=`
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
}`,zw=`#ifdef USE_ENVMAP
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
#endif`,Bw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hw=`#ifdef USE_ENVMAP
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
#endif`,Gw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vw=`#ifdef USE_ENVMAP
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
#endif`,Ww=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$w=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yw=`#ifdef USE_GRADIENTMAP
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
}`,qw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jw=`uniform bool receiveShadow;
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
#endif`,eT=`#ifdef USE_ENVMAP
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
#endif`,tT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sT=`PhysicalMaterial material;
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
#endif`,oT=`struct PhysicalMaterial {
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
}`,aT=`
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
#endif`,lT=`#if defined( RE_IndirectDiffuse )
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
#endif`,cT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,hT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vT=`#if defined( USE_POINTS_UV )
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
#endif`,yT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_T=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ST=`#ifdef USE_MORPHNORMALS
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
#endif`,MT=`#ifdef USE_MORPHTARGETS
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
#endif`,ET=`#ifdef USE_MORPHTARGETS
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
#endif`,wT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RT=`#ifdef USE_NORMALMAP
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
#endif`,PT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jT=`float getShadowMask() {
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
}`,XT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,YT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
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
#endif`,KT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e1=`#ifdef USE_TRANSMISSION
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
#endif`,t1=`#ifdef USE_TRANSMISSION
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a1=`uniform sampler2D t2D;
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`#include <common>
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
}`,h1=`#if DEPTH_PACKING == 3200
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
}`,p1=`#define DISTANCE
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
}`,m1=`#define DISTANCE
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y1=`uniform float scale;
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
}`,_1=`uniform vec3 diffuse;
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
}`,x1=`#include <common>
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
}`,S1=`uniform vec3 diffuse;
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
}`,M1=`#define LAMBERT
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
}`,E1=`#define LAMBERT
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
}`,w1=`#define MATCAP
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
}`,T1=`#define MATCAP
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
}`,A1=`#define NORMAL
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
}`,b1=`#define NORMAL
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
}`,C1=`#define PHONG
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
}`,R1=`#define PHONG
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
}`,P1=`#define STANDARD
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
}`,L1=`#define STANDARD
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
}`,N1=`#define TOON
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
}`,I1=`#define TOON
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
}`,D1=`uniform float size;
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
}`,U1=`uniform vec3 diffuse;
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
}`,F1=`#include <common>
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
}`,k1=`uniform vec3 color;
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
}`,O1=`uniform float rotation;
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
}`,z1=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:aw,alphahash_pars_fragment:lw,alphamap_fragment:cw,alphamap_pars_fragment:uw,alphatest_fragment:fw,alphatest_pars_fragment:dw,aomap_fragment:hw,aomap_pars_fragment:pw,batching_pars_vertex:mw,batching_vertex:gw,begin_vertex:vw,beginnormal_vertex:yw,bsdfs:_w,iridescence_fragment:xw,bumpmap_pars_fragment:Sw,clipping_planes_fragment:Mw,clipping_planes_pars_fragment:Ew,clipping_planes_pars_vertex:ww,clipping_planes_vertex:Tw,color_fragment:Aw,color_pars_fragment:bw,color_pars_vertex:Cw,color_vertex:Rw,common:Pw,cube_uv_reflection_fragment:Lw,defaultnormal_vertex:Nw,displacementmap_pars_vertex:Iw,displacementmap_vertex:Dw,emissivemap_fragment:Uw,emissivemap_pars_fragment:Fw,colorspace_fragment:kw,colorspace_pars_fragment:Ow,envmap_fragment:zw,envmap_common_pars_fragment:Bw,envmap_pars_fragment:Hw,envmap_pars_vertex:Gw,envmap_physical_pars_fragment:eT,envmap_vertex:Vw,fog_vertex:Ww,fog_pars_vertex:jw,fog_fragment:Xw,fog_pars_fragment:$w,gradientmap_pars_fragment:Yw,lightmap_fragment:qw,lightmap_pars_fragment:Kw,lights_lambert_fragment:Zw,lights_lambert_pars_fragment:Qw,lights_pars_begin:Jw,lights_toon_fragment:tT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:rT,lights_physical_fragment:sT,lights_physical_pars_fragment:oT,lights_fragment_begin:aT,lights_fragment_maps:lT,lights_fragment_end:cT,logdepthbuf_fragment:uT,logdepthbuf_pars_fragment:fT,logdepthbuf_pars_vertex:dT,logdepthbuf_vertex:hT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:gT,map_particle_pars_fragment:vT,metalnessmap_fragment:yT,metalnessmap_pars_fragment:_T,morphcolor_vertex:xT,morphnormal_vertex:ST,morphtarget_pars_vertex:MT,morphtarget_vertex:ET,normal_fragment_begin:wT,normal_fragment_maps:TT,normal_pars_fragment:AT,normal_pars_vertex:bT,normal_vertex:CT,normalmap_pars_fragment:RT,clearcoat_normal_fragment_begin:PT,clearcoat_normal_fragment_maps:LT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:IT,opaque_fragment:DT,packing:UT,premultiplied_alpha_fragment:FT,project_vertex:kT,dithering_fragment:OT,dithering_pars_fragment:zT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:HT,shadowmap_pars_fragment:GT,shadowmap_pars_vertex:VT,shadowmap_vertex:WT,shadowmask_pars_fragment:jT,skinbase_vertex:XT,skinning_pars_vertex:$T,skinning_vertex:YT,skinnormal_vertex:qT,specularmap_fragment:KT,specularmap_pars_fragment:ZT,tonemapping_fragment:QT,tonemapping_pars_fragment:JT,transmission_fragment:e1,transmission_pars_fragment:t1,uv_pars_fragment:n1,uv_pars_vertex:i1,uv_vertex:r1,worldpos_vertex:s1,background_vert:o1,background_frag:a1,backgroundCube_vert:l1,backgroundCube_frag:c1,cube_vert:u1,cube_frag:f1,depth_vert:d1,depth_frag:h1,distanceRGBA_vert:p1,distanceRGBA_frag:m1,equirect_vert:g1,equirect_frag:v1,linedashed_vert:y1,linedashed_frag:_1,meshbasic_vert:x1,meshbasic_frag:S1,meshlambert_vert:M1,meshlambert_frag:E1,meshmatcap_vert:w1,meshmatcap_frag:T1,meshnormal_vert:A1,meshnormal_frag:b1,meshphong_vert:C1,meshphong_frag:R1,meshphysical_vert:P1,meshphysical_frag:L1,meshtoon_vert:N1,meshtoon_frag:I1,points_vert:D1,points_frag:U1,shadow_vert:F1,shadow_frag:k1,sprite_vert:O1,sprite_frag:z1},Te={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Ri={basic:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new pt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:In([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:In([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new pt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:In([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:In([Te.points,Te.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:In([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:In([Te.common,Te.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:In([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:In([Te.sprite,Te.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:In([Te.common,Te.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:In([Te.lights,Te.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ri.physical={uniforms:In([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const _l={r:0,b:0,g:0};function B1(t,e,n,i,r,s,o){const a=new pt(0);let l=s===!0?0:1,c,f,d=null,h=0,g=null;function y(p,u){let m=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),m=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Wc)?(f===void 0&&(f=new ui(new Ua(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:xo(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(I,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=kt.getTransfer(v.colorSpace)!==Ht,(d!==v||h!==v.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,g=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ui(new So(2,2),new Fr({name:"BackgroundMaterial",uniforms:xo(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=kt.getTransfer(v.colorSpace)!==Ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(_l,Sy(t)),i.buffers.color.setClear(_l.r,_l.g,_l.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:y}}function H1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function d(z,te,Q,ae,H){let Y=!1;if(o){const Z=_(ae,Q,te);c!==Z&&(c=Z,g(c.object)),Y=u(z,ae,Q,H),Y&&m(z,ae,Q,H)}else{const Z=te.wireframe===!0;(c.geometry!==ae.id||c.program!==Q.id||c.wireframe!==Z)&&(c.geometry=ae.id,c.program=Q.id,c.wireframe=Z,Y=!0)}H!==null&&n.update(H,t.ELEMENT_ARRAY_BUFFER),(Y||f)&&(f=!1,G(z,te,Q,ae),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(z){return i.isWebGL2?t.bindVertexArray(z):s.bindVertexArrayOES(z)}function y(z){return i.isWebGL2?t.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function _(z,te,Q){const ae=Q.wireframe===!0;let H=a[z.id];H===void 0&&(H={},a[z.id]=H);let Y=H[te.id];Y===void 0&&(Y={},H[te.id]=Y);let Z=Y[ae];return Z===void 0&&(Z=p(h()),Y[ae]=Z),Z}function p(z){const te=[],Q=[],ae=[];for(let H=0;H<r;H++)te[H]=0,Q[H]=0,ae[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:Q,attributeDivisors:ae,object:z,attributes:{},index:null}}function u(z,te,Q,ae){const H=c.attributes,Y=te.attributes;let Z=0;const re=Q.getAttributes();for(const he in re)if(re[he].location>=0){const J=H[he];let le=Y[he];if(le===void 0&&(he==="instanceMatrix"&&z.instanceMatrix&&(le=z.instanceMatrix),he==="instanceColor"&&z.instanceColor&&(le=z.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;Z++}return c.attributesNum!==Z||c.index!==ae}function m(z,te,Q,ae){const H={},Y=te.attributes;let Z=0;const re=Q.getAttributes();for(const he in re)if(re[he].location>=0){let J=Y[he];J===void 0&&(he==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),he==="instanceColor"&&z.instanceColor&&(J=z.instanceColor));const le={};le.attribute=J,J&&J.data&&(le.data=J.data),H[he]=le,Z++}c.attributes=H,c.attributesNum=Z,c.index=ae}function v(){const z=c.newAttributes;for(let te=0,Q=z.length;te<Q;te++)z[te]=0}function M(z){I(z,0)}function I(z,te){const Q=c.newAttributes,ae=c.enabledAttributes,H=c.attributeDivisors;Q[z]=1,ae[z]===0&&(t.enableVertexAttribArray(z),ae[z]=1),H[z]!==te&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,te),H[z]=te)}function P(){const z=c.newAttributes,te=c.enabledAttributes;for(let Q=0,ae=te.length;Q<ae;Q++)te[Q]!==z[Q]&&(t.disableVertexAttribArray(Q),te[Q]=0)}function C(z,te,Q,ae,H,Y,Z){Z===!0?t.vertexAttribIPointer(z,te,Q,H,Y):t.vertexAttribPointer(z,te,Q,ae,H,Y)}function G(z,te,Q,ae){if(i.isWebGL2===!1&&(z.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=ae.attributes,Y=Q.getAttributes(),Z=te.defaultAttributeValues;for(const re in Y){const he=Y[re];if(he.location>=0){let Ze=H[re];if(Ze===void 0&&(re==="instanceMatrix"&&z.instanceMatrix&&(Ze=z.instanceMatrix),re==="instanceColor"&&z.instanceColor&&(Ze=z.instanceColor)),Ze!==void 0){const J=Ze.normalized,le=Ze.itemSize,Ae=n.get(Ze);if(Ae===void 0)continue;const Fe=Ae.buffer,Qe=Ae.type,Oe=Ae.bytesPerElement,yt=i.isWebGL2===!0&&(Qe===t.INT||Qe===t.UNSIGNED_INT||Ze.gpuType===ty);if(Ze.isInterleavedBufferAttribute){const qe=Ze.data,j=qe.stride,Wt=Ze.offset;if(qe.isInstancedInterleavedBuffer){for(let ze=0;ze<he.locationSize;ze++)I(he.location+ze,qe.meshPerAttribute);z.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let ze=0;ze<he.locationSize;ze++)M(he.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let ze=0;ze<he.locationSize;ze++)C(he.location+ze,le/he.locationSize,Qe,J,j*Oe,(Wt+le/he.locationSize*ze)*Oe,yt)}else{if(Ze.isInstancedBufferAttribute){for(let qe=0;qe<he.locationSize;qe++)I(he.location+qe,Ze.meshPerAttribute);z.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let qe=0;qe<he.locationSize;qe++)M(he.location+qe);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let qe=0;qe<he.locationSize;qe++)C(he.location+qe,le/he.locationSize,Qe,J,le*Oe,le/he.locationSize*qe*Oe,yt)}}else if(Z!==void 0){const J=Z[re];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(he.location,J);break;case 3:t.vertexAttrib3fv(he.location,J);break;case 4:t.vertexAttrib4fv(he.location,J);break;default:t.vertexAttrib1fv(he.location,J)}}}}P()}function ne(){ee();for(const z in a){const te=a[z];for(const Q in te){const ae=te[Q];for(const H in ae)y(ae[H].object),delete ae[H];delete te[Q]}delete a[z]}}function x(z){if(a[z.id]===void 0)return;const te=a[z.id];for(const Q in te){const ae=te[Q];for(const H in ae)y(ae[H].object),delete ae[H];delete te[Q]}delete a[z.id]}function L(z){for(const te in a){const Q=a[te];if(Q[z.id]===void 0)continue;const ae=Q[z.id];for(const H in ae)y(ae[H].object),delete ae[H];delete Q[z.id]}}function ee(){ue(),f=!0,c!==l&&(c=l,g(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ee,resetDefaultState:ue,dispose:ne,releaseStatesOfGeometry:x,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:M,disableUnusedAttributes:P}}function G1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let g,y;if(r)g=t,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<h;y++)this.render(f[y],d[y]);else{g.multiDrawArraysWEBGL(s,f,0,d,0,h);let y=0;for(let _=0;_<h;_++)y+=d[_];n.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function V1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=o||e.has("OES_texture_float"),I=v&&M,P=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:I,maxSamples:P}}function W1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new $r,a=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||i!==0||r;return r=h,i=d.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,g){const y=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||y===null||y.length===0||s&&!p)s?f(null):c();else{const m=s?0:i,v=m*4;let M=u.clippingState||null;l.value=M,M=f(y,h,v,g);for(let I=0;I!==v;++I)M[I]=n[I];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,g,y){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,y!==!0||p===null){const u=g+_*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,M=g;v!==_;++v,M+=4)o.copy(d[v]).applyMatrix4(m,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function j1(t){let e=new WeakMap;function n(o,a){return a===dd?o.mapping=vo:a===hd&&(o.mapping=yo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===dd||a===hd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new iw(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ty extends My{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qs=4,Xm=[.125,.215,.35,.446,.526,.582],Kr=20,qu=new Ty,$m=new pt;let Ku=null,Zu=0,Qu=0;const Yr=(1+Math.sqrt(5))/2,Ds=1/Yr,Ym=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Yr,Ds),new W(0,Yr,-Ds),new W(Ds,0,Yr),new W(-Ds,0,Yr),new W(Yr,Ds,0),new W(-Yr,Ds,0)];class qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Zu,Qu),e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vo||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ba,format:Ei,colorSpace:Ji,depthBuffer:!1},r=Km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X1(s)),this._blurMaterial=$1(s,e,n)}return r}_compileMaterial(e){const n=new ui(this._lodPlanes[0],e);this._renderer.compile(n,qu)}_sceneToCubeUV(e,n,i,r){const a=new oi(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor($m),f.toneMapping=Pr,f.autoClear=!1;const g=new yy({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),y=new ui(new Ua,g);let _=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,_=!0):(g.color.copy($m),_=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;xl(r,m*v,u>2?v:0,v,v),f.setRenderTarget(r),_&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===vo||e.mapping===yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ui(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,qu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ym[(r-1)%Ym.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new ui(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Kr-1),_=s/y,p=isFinite(s)?1+Math.floor(f*_):Kr;p>Kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kr}`);const u=[];let m=0;for(let C=0;C<Kr;++C){const G=C/_,ne=Math.exp(-G*G/2);u.push(ne),C===0?m+=ne:C<p&&(m+=2*ne)}for(let C=0;C<u.length;C++)u[C]=u[C]/m;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=y,h.mipInt.value=v-i;const M=this._sizeLods[r],I=3*M*(r>v-Qs?r-v+Qs:0),P=4*(this._cubeSize-M);xl(n,I,P,3*M,2*M),l.setRenderTarget(n),l.render(d,qu)}}function X1(t){const e=[],n=[],i=[];let r=t;const s=t-Qs+1+Xm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Qs?l=Xm[o-t+Qs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],g=6,y=6,_=3,p=2,u=1,m=new Float32Array(_*y*g),v=new Float32Array(p*y*g),M=new Float32Array(u*y*g);for(let P=0;P<g;P++){const C=P%3*2/3-1,G=P>2?0:-1,ne=[C,G,0,C+2/3,G,0,C+2/3,G+1,0,C,G,0,C+2/3,G+1,0,C,G+1,0];m.set(ne,_*y*P),v.set(h,p*y*P);const x=[P,P,P,P,P,P];M.set(x,u*y*P)}const I=new Mn;I.setAttribute("position",new Sn(m,_)),I.setAttribute("uv",new Sn(v,p)),I.setAttribute("faceIndex",new Sn(M,u)),e.push(I),r>Qs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Km(t,e,n){const i=new ds(t,e,n);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function $1(t,e,n){const i=new Float32Array(Kr),r=new W(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Zm(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Qm(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Th(){return`

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
	`}function Y1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===dd||l===hd,f=l===vo||l===yo;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new qm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new qm(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function q1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function K1(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const _=h.morphAttributes[y];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const y in g){const _=g[y];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(d){const h=[],g=d.index,y=d.attributes.position;let _=0;if(g!==null){const m=g.array;_=g.version;for(let v=0,M=m.length;v<M;v+=3){const I=m[v+0],P=m[v+1],C=m[v+2];h.push(I,P,P,C,C,I)}}else if(y!==void 0){const m=y.array;_=y.version;for(let v=0,M=m.length/3-1;v<M;v+=3){const I=v+0,P=v+1,C=v+2;h.push(I,P,P,C,C,I)}}else return;const p=new(fy(h)?xy:_y)(h,1);p.version=_;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function Z1(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function f(g,y){t.drawElements(s,y,a,g*l),n.update(y,s,1)}function d(g,y,_){if(_===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,y,a,g*l,_),n.update(y,s,_)}function h(g,y,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(g[u]/l,y[u]);else{p.multiDrawElementsWEBGL(s,y,0,a,g,0,_);let u=0;for(let m=0;m<_;m++)u+=y[m];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function Q1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function J1(t,e){return t[0]-e[0]}function eA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function tA(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new vn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=y!==void 0?y.length:0;let p=s.get(f);if(p===void 0||p.count!==_){let te=function(){ue.dispose(),s.delete(f),f.removeEventListener("dispose",te)};var g=te;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,I=f.morphAttributes.color!==void 0,P=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],G=f.morphAttributes.color||[];let ne=0;v===!0&&(ne=1),M===!0&&(ne=2),I===!0&&(ne=3);let x=f.attributes.position.count*ne,L=1;x>e.maxTextureSize&&(L=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const ee=new Float32Array(x*L*4*_),ue=new py(ee,x,L,_);ue.type=Wi,ue.needsUpdate=!0;const z=ne*4;for(let Q=0;Q<_;Q++){const ae=P[Q],H=C[Q],Y=G[Q],Z=x*L*4*Q;for(let re=0;re<ae.count;re++){const he=re*z;v===!0&&(o.fromBufferAttribute(ae,re),ee[Z+he+0]=o.x,ee[Z+he+1]=o.y,ee[Z+he+2]=o.z,ee[Z+he+3]=0),M===!0&&(o.fromBufferAttribute(H,re),ee[Z+he+4]=o.x,ee[Z+he+5]=o.y,ee[Z+he+6]=o.z,ee[Z+he+7]=0),I===!0&&(o.fromBufferAttribute(Y,re),ee[Z+he+8]=o.x,ee[Z+he+9]=o.y,ee[Z+he+10]=o.z,ee[Z+he+11]=Y.itemSize===4?o.w:1)}}p={count:_,texture:ue,size:new vt(x,L)},s.set(f,p),f.addEventListener("dispose",te)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const m=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",m),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const y=h===void 0?0:h.length;let _=i[f.id];if(_===void 0||_.length!==y){_=[];for(let M=0;M<y;M++)_[M]=[M,0];i[f.id]=_}for(let M=0;M<y;M++){const I=_[M];I[0]=M,I[1]=h[M]}_.sort(eA);for(let M=0;M<8;M++)M<y&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(J1);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let m=0;for(let M=0;M<8;M++){const I=a[M],P=I[0],C=I[1];P!==Number.MAX_SAFE_INTEGER&&C?(p&&f.getAttribute("morphTarget"+M)!==p[P]&&f.setAttribute("morphTarget"+M,p[P]),u&&f.getAttribute("morphNormal"+M)!==u[P]&&f.setAttribute("morphNormal"+M,u[P]),r[M]=C,m+=C):(p&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),u&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const v=f.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function nA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Ay extends kn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:rs,f!==rs&&f!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===rs&&(i=_r),i===void 0&&f===_o&&(i=is),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const by=new kn,Cy=new Ay(1,1);Cy.compareFunction=uy;const Ry=new py,Py=new BE,Ly=new Ey,Jm=[],eg=[],tg=new Float32Array(16),ng=new Float32Array(9),ig=new Float32Array(4);function Co(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Jm[r];if(s===void 0&&(s=new Float32Array(r),Jm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function fn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function dn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $c(t,e){let n=eg[e];n===void 0&&(n=new Int32Array(e),eg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2fv(this.addr,e),dn(n,e)}}function sA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(fn(n,e))return;t.uniform3fv(this.addr,e),dn(n,e)}}function oA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4fv(this.addr,e),dn(n,e)}}function aA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),dn(n,e)}else{if(fn(n,i))return;ig.set(i),t.uniformMatrix2fv(this.addr,!1,ig),dn(n,i)}}function lA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),dn(n,e)}else{if(fn(n,i))return;ng.set(i),t.uniformMatrix3fv(this.addr,!1,ng),dn(n,i)}}function cA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(fn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),dn(n,e)}else{if(fn(n,i))return;tg.set(i),t.uniformMatrix4fv(this.addr,!1,tg),dn(n,i)}}function uA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2iv(this.addr,e),dn(n,e)}}function dA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;t.uniform3iv(this.addr,e),dn(n,e)}}function hA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4iv(this.addr,e),dn(n,e)}}function pA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(fn(n,e))return;t.uniform2uiv(this.addr,e),dn(n,e)}}function gA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(fn(n,e))return;t.uniform3uiv(this.addr,e),dn(n,e)}}function vA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(fn(n,e))return;t.uniform4uiv(this.addr,e),dn(n,e)}}function yA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Cy:by;n.setTexture2D(e||s,r)}function _A(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Py,r)}function xA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ly,r)}function SA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ry,r)}function MA(t){switch(t){case 5126:return iA;case 35664:return rA;case 35665:return sA;case 35666:return oA;case 35674:return aA;case 35675:return lA;case 35676:return cA;case 5124:case 35670:return uA;case 35667:case 35671:return fA;case 35668:case 35672:return dA;case 35669:case 35673:return hA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return SA}}function EA(t,e){t.uniform1fv(this.addr,e)}function wA(t,e){const n=Co(e,this.size,2);t.uniform2fv(this.addr,n)}function TA(t,e){const n=Co(e,this.size,3);t.uniform3fv(this.addr,n)}function AA(t,e){const n=Co(e,this.size,4);t.uniform4fv(this.addr,n)}function bA(t,e){const n=Co(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function CA(t,e){const n=Co(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function RA(t,e){const n=Co(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function PA(t,e){t.uniform1iv(this.addr,e)}function LA(t,e){t.uniform2iv(this.addr,e)}function NA(t,e){t.uniform3iv(this.addr,e)}function IA(t,e){t.uniform4iv(this.addr,e)}function DA(t,e){t.uniform1uiv(this.addr,e)}function UA(t,e){t.uniform2uiv(this.addr,e)}function FA(t,e){t.uniform3uiv(this.addr,e)}function kA(t,e){t.uniform4uiv(this.addr,e)}function OA(t,e,n){const i=this.cache,r=e.length,s=$c(n,r);fn(i,s)||(t.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||by,s[o])}function zA(t,e,n){const i=this.cache,r=e.length,s=$c(n,r);fn(i,s)||(t.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Py,s[o])}function BA(t,e,n){const i=this.cache,r=e.length,s=$c(n,r);fn(i,s)||(t.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ly,s[o])}function HA(t,e,n){const i=this.cache,r=e.length,s=$c(n,r);fn(i,s)||(t.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ry,s[o])}function GA(t){switch(t){case 5126:return EA;case 35664:return wA;case 35665:return TA;case 35666:return AA;case 35674:return bA;case 35675:return CA;case 35676:return RA;case 5124:case 35670:return PA;case 35667:case 35671:return LA;case 35668:case 35672:return NA;case 35669:case 35673:return IA;case 5125:return DA;case 36294:return UA;case 36295:return FA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return zA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return HA}}class VA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=MA(n.type)}}class WA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GA(n.type)}}class jA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function rg(t,e){t.seq.push(e),t.map[e.id]=e}function XA(t,e,n){const i=t.name,r=i.length;for(Ju.lastIndex=0;;){const s=Ju.exec(i),o=Ju.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){rg(n,c===void 0?new VA(a,t,e):new WA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new jA(a),rg(n,d)),n=d}}}class Vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);XA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function sg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $A=37297;let YA=0;function qA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function KA(t){const e=kt.getPrimaries(kt.workingColorSpace),n=kt.getPrimaries(t);let i;switch(e===n?i="":e===_c&&n===yc?i="LinearDisplayP3ToLinearSRGB":e===yc&&n===_c&&(i="LinearSRGBToLinearDisplayP3"),t){case Ji:case jc:return[i,"LinearTransferOETF"];case xn:case Eh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function og(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+qA(t.getShaderSource(e),o)}else return r}function ZA(t,e){const n=KA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function QA(t,e){let n;switch(e){case uE:n="Linear";break;case fE:n="Reinhard";break;case dE:n="OptimizedCineon";break;case hE:n="ACESFilmic";break;case mE:n="AgX";break;case pE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function JA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function eb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function tb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Js(t){return t!==""}function ag(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ib=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(t){return t.replace(ib,sb)}const rb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sb(t,e){let n=gt[e];if(n===void 0){const i=rb.get(e);if(i!==void 0)n=gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xd(n)}const ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(t){return t.replace(ob,ab)}function ab(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ug(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function lb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Q0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===OM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function cb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case vo:case yo:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ub(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function fb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case J0:e="ENVMAP_BLENDING_MULTIPLY";break;case lE:e="ENVMAP_BLENDING_MIX";break;case cE:e="ENVMAP_BLENDING_ADD";break}return e}function db(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=lb(n),c=cb(n),f=ub(n),d=fb(n),h=db(n),g=n.isWebGL2?"":JA(n),y=eb(n),_=tb(s),p=r.createProgram();let u,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),u.length>0&&(u+=`
`),m=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),m.length>0&&(m+=`
`)):(u=[ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),m=[g,ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pr?"#define TONE_MAPPING":"",n.toneMapping!==Pr?gt.tonemapping_pars_fragment:"",n.toneMapping!==Pr?QA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,ZA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),o=xd(o),o=ag(o,n),o=lg(o,n),a=xd(a),a=ag(a,n),a=lg(a,n),o=cg(o),a=cg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Am?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=v+u+o,I=v+m+a,P=sg(r,r.VERTEX_SHADER,M),C=sg(r,r.FRAGMENT_SHADER,I);r.attachShader(p,P),r.attachShader(p,C),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function G(ee){if(t.debug.checkShaderErrors){const ue=r.getProgramInfoLog(p).trim(),z=r.getShaderInfoLog(P).trim(),te=r.getShaderInfoLog(C).trim();let Q=!0,ae=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,P,C);else{const H=og(r,P,"vertex"),Y=og(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+ee.name+`
Material Type: `+ee.type+`

Program Info Log: `+ue+`
`+H+`
`+Y)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(z===""||te==="")&&(ae=!1);ae&&(ee.diagnostics={runnable:Q,programLog:ue,vertexShader:{log:z,prefix:u},fragmentShader:{log:te,prefix:m}})}r.deleteShader(P),r.deleteShader(C),ne=new Vl(r,p),x=nb(r,p)}let ne;this.getUniforms=function(){return ne===void 0&&G(this),ne};let x;this.getAttributes=function(){return x===void 0&&G(this),x};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(p,$A)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=P,this.fragmentShader=C,this}let pb=0;class mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new gb(e),n.set(e,i)),i}}class gb{constructor(e){this.id=pb++,this.code=e,this.usedTimes=0}}function vb(t,e,n,i,r,s,o){const a=new gy,l=new mb,c=new Set,f=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,g=r.vertexTextures;let y=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,L,ee,ue,z){const te=ue.fog,Q=z.geometry,ae=x.isMeshStandardMaterial?ue.environment:null,H=(x.isMeshStandardMaterial?n:e).get(x.envMap||ae),Y=H&&H.mapping===Wc?H.image.height:null,Z=_[x.type];x.precision!==null&&(y=r.getMaxPrecision(x.precision),y!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",y,"instead."));const re=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,he=re!==void 0?re.length:0;let Ze=0;Q.morphAttributes.position!==void 0&&(Ze=1),Q.morphAttributes.normal!==void 0&&(Ze=2),Q.morphAttributes.color!==void 0&&(Ze=3);let J,le,Ae,Fe;if(Z){const Et=Ri[Z];J=Et.vertexShader,le=Et.fragmentShader}else J=x.vertexShader,le=x.fragmentShader,l.update(x),Ae=l.getVertexShaderID(x),Fe=l.getFragmentShaderID(x);const Qe=t.getRenderTarget(),Oe=z.isInstancedMesh===!0,yt=z.isBatchedMesh===!0,qe=!!x.map,j=!!x.matcap,Wt=!!H,ze=!!x.aoMap,Je=!!x.lightMap,Be=!!x.bumpMap,ct=!!x.normalMap,Xe=!!x.displacementMap,A=!!x.emissiveMap,w=!!x.metalnessMap,q=!!x.roughnessMap,ye=x.anisotropy>0,fe=x.clearcoat>0,ce=x.iridescence>0,ke=x.sheen>0,we=x.transmission>0,Pe=ye&&!!x.anisotropyMap,pe=fe&&!!x.clearcoatMap,ot=fe&&!!x.clearcoatNormalMap,de=fe&&!!x.clearcoatRoughnessMap,wt=ce&&!!x.iridescenceMap,it=ce&&!!x.iridescenceThicknessMap,et=ke&&!!x.sheenColorMap,Ge=ke&&!!x.sheenRoughnessMap,Le=!!x.specularMap,dt=!!x.specularColorMap,_t=!!x.specularIntensityMap,Pt=we&&!!x.transmissionMap,rt=we&&!!x.thicknessMap,Tt=!!x.gradientMap,R=!!x.alphaMap,ve=x.alphaTest>0,me=!!x.alphaHash,Ne=!!x.extensions;let $e=Pr;x.toneMapped&&(Qe===null||Qe.isXRRenderTarget===!0)&&($e=t.toneMapping);const St={isWebGL2:d,shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:le,defines:x.defines,customVertexShaderID:Ae,customFragmentShaderID:Fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:y,batching:yt,instancing:Oe,instancingColor:Oe&&z.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Qe===null?t.outputColorSpace:Qe.isXRRenderTarget===!0?Qe.texture.colorSpace:Ji,alphaToCoverage:!!x.alphaToCoverage,map:qe,matcap:j,envMap:Wt,envMapMode:Wt&&H.mapping,envMapCubeUVHeight:Y,aoMap:ze,lightMap:Je,bumpMap:Be,normalMap:ct,displacementMap:g&&Xe,emissiveMap:A,normalMapObjectSpace:ct&&x.normalMapType===AE,normalMapTangentSpace:ct&&x.normalMapType===cy,metalnessMap:w,roughnessMap:q,anisotropy:ye,anisotropyMap:Pe,clearcoat:fe,clearcoatMap:pe,clearcoatNormalMap:ot,clearcoatRoughnessMap:de,iridescence:ce,iridescenceMap:wt,iridescenceThicknessMap:it,sheen:ke,sheenColorMap:et,sheenRoughnessMap:Ge,specularMap:Le,specularColorMap:dt,specularIntensityMap:_t,transmission:we,transmissionMap:Pt,thicknessMap:rt,gradientMap:Tt,opaque:x.transparent===!1&&x.blending===oo&&x.alphaToCoverage===!1,alphaMap:R,alphaTest:ve,alphaHash:me,combine:x.combine,mapUv:qe&&p(x.map.channel),aoMapUv:ze&&p(x.aoMap.channel),lightMapUv:Je&&p(x.lightMap.channel),bumpMapUv:Be&&p(x.bumpMap.channel),normalMapUv:ct&&p(x.normalMap.channel),displacementMapUv:Xe&&p(x.displacementMap.channel),emissiveMapUv:A&&p(x.emissiveMap.channel),metalnessMapUv:w&&p(x.metalnessMap.channel),roughnessMapUv:q&&p(x.roughnessMap.channel),anisotropyMapUv:Pe&&p(x.anisotropyMap.channel),clearcoatMapUv:pe&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:it&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:et&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&p(x.sheenRoughnessMap.channel),specularMapUv:Le&&p(x.specularMap.channel),specularColorMapUv:dt&&p(x.specularColorMap.channel),specularIntensityMapUv:_t&&p(x.specularIntensityMap.channel),transmissionMapUv:Pt&&p(x.transmissionMap.channel),thicknessMapUv:rt&&p(x.thicknessMap.channel),alphaMapUv:R&&p(x.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ct||ye),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(qe||R),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ze,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&ee.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,useLegacyLights:t._useLegacyLights,decodeVideoTexture:qe&&x.map.isVideoTexture===!0&&kt.getTransfer(x.map.colorSpace)===Ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Si,flipSided:x.side===$n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Ne&&x.extensions.derivatives===!0,extensionFragDepth:Ne&&x.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ne&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function m(x){const L=[];if(x.shaderID?L.push(x.shaderID):(L.push(x.customVertexShaderID),L.push(x.customFragmentShaderID)),x.defines!==void 0)for(const ee in x.defines)L.push(ee),L.push(x.defines[ee]);return x.isRawShaderMaterial===!1&&(v(L,x),M(L,x),L.push(t.outputColorSpace)),L.push(x.customProgramCacheKey),L.join()}function v(x,L){x.push(L.precision),x.push(L.outputColorSpace),x.push(L.envMapMode),x.push(L.envMapCubeUVHeight),x.push(L.mapUv),x.push(L.alphaMapUv),x.push(L.lightMapUv),x.push(L.aoMapUv),x.push(L.bumpMapUv),x.push(L.normalMapUv),x.push(L.displacementMapUv),x.push(L.emissiveMapUv),x.push(L.metalnessMapUv),x.push(L.roughnessMapUv),x.push(L.anisotropyMapUv),x.push(L.clearcoatMapUv),x.push(L.clearcoatNormalMapUv),x.push(L.clearcoatRoughnessMapUv),x.push(L.iridescenceMapUv),x.push(L.iridescenceThicknessMapUv),x.push(L.sheenColorMapUv),x.push(L.sheenRoughnessMapUv),x.push(L.specularMapUv),x.push(L.specularColorMapUv),x.push(L.specularIntensityMapUv),x.push(L.transmissionMapUv),x.push(L.thicknessMapUv),x.push(L.combine),x.push(L.fogExp2),x.push(L.sizeAttenuation),x.push(L.morphTargetsCount),x.push(L.morphAttributeCount),x.push(L.numDirLights),x.push(L.numPointLights),x.push(L.numSpotLights),x.push(L.numSpotLightMaps),x.push(L.numHemiLights),x.push(L.numRectAreaLights),x.push(L.numDirLightShadows),x.push(L.numPointLightShadows),x.push(L.numSpotLightShadows),x.push(L.numSpotLightShadowsWithMaps),x.push(L.numLightProbes),x.push(L.shadowMapType),x.push(L.toneMapping),x.push(L.numClippingPlanes),x.push(L.numClipIntersection),x.push(L.depthPacking)}function M(x,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.matcap&&a.enable(4),L.envMap&&a.enable(5),L.normalMapObjectSpace&&a.enable(6),L.normalMapTangentSpace&&a.enable(7),L.clearcoat&&a.enable(8),L.iridescence&&a.enable(9),L.alphaTest&&a.enable(10),L.vertexColors&&a.enable(11),L.vertexAlphas&&a.enable(12),L.vertexUv1s&&a.enable(13),L.vertexUv2s&&a.enable(14),L.vertexUv3s&&a.enable(15),L.vertexTangents&&a.enable(16),L.anisotropy&&a.enable(17),L.alphaHash&&a.enable(18),L.batching&&a.enable(19),x.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.useLegacyLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.alphaToCoverage&&a.enable(20),x.push(a.mask)}function I(x){const L=_[x.type];let ee;if(L){const ue=Ri[L];ee=JE.clone(ue.uniforms)}else ee=x.uniforms;return ee}function P(x,L){let ee;for(let ue=0,z=f.length;ue<z;ue++){const te=f[ue];if(te.cacheKey===L){ee=te,++ee.usedTimes;break}}return ee===void 0&&(ee=new hb(t,L,x,s),f.push(ee)),ee}function C(x){if(--x.usedTimes===0){const L=f.indexOf(x);f[L]=f[f.length-1],f.pop(),x.destroy()}}function G(x){l.remove(x)}function ne(){l.dispose()}return{getParameters:u,getProgramCacheKey:m,getUniforms:I,acquireProgram:P,releaseProgram:C,releaseShaderCache:G,programs:f,dispose:ne}}function yb(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function _b(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,g,y,_,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:g,groupOrder:y,renderOrder:d.renderOrder,z:_,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=g,u.groupOrder=y,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function a(d,h,g,y,_,p){const u=o(d,h,g,y,_,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(d,h,g,y,_,p){const u=o(d,h,g,y,_,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||_b),i.length>1&&i.sort(h||fg),r.length>1&&r.sort(h||fg)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function xb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new dg,t.set(i,[o])):r>=s.length?(o=new dg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Sb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new pt};break;case"SpotLight":n={position:new W,direction:new W,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function Mb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Eb=0;function wb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Tb(t,e){const n=new Sb,i=Mb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new W);const s=new W,o=new en,a=new en;function l(f,d){let h=0,g=0,y=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let _=0,p=0,u=0,m=0,v=0,M=0,I=0,P=0,C=0,G=0,ne=0;f.sort(wb);const x=d===!0?Math.PI:1;for(let ee=0,ue=f.length;ee<ue;ee++){const z=f[ee],te=z.color,Q=z.intensity,ae=z.distance,H=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=te.r*Q*x,g+=te.g*Q*x,y+=te.b*Q*x;else if(z.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(z.sh.coefficients[Y],Q);ne++}else if(z.isDirectionalLight){const Y=n.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity*x),z.castShadow){const Z=z.shadow,re=i.get(z);re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,r.directionalShadow[_]=re,r.directionalShadowMap[_]=H,r.directionalShadowMatrix[_]=z.shadow.matrix,M++}r.directional[_]=Y,_++}else if(z.isSpotLight){const Y=n.get(z);Y.position.setFromMatrixPosition(z.matrixWorld),Y.color.copy(te).multiplyScalar(Q*x),Y.distance=ae,Y.coneCos=Math.cos(z.angle),Y.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Y.decay=z.decay,r.spot[u]=Y;const Z=z.shadow;if(z.map&&(r.spotLightMap[C]=z.map,C++,Z.updateMatrices(z),z.castShadow&&G++),r.spotLightMatrix[u]=Z.matrix,z.castShadow){const re=i.get(z);re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,r.spotShadow[u]=re,r.spotShadowMap[u]=H,P++}u++}else if(z.isRectAreaLight){const Y=n.get(z);Y.color.copy(te).multiplyScalar(Q),Y.halfWidth.set(z.width*.5,0,0),Y.halfHeight.set(0,z.height*.5,0),r.rectArea[m]=Y,m++}else if(z.isPointLight){const Y=n.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity*x),Y.distance=z.distance,Y.decay=z.decay,z.castShadow){const Z=z.shadow,re=i.get(z);re.shadowBias=Z.bias,re.shadowNormalBias=Z.normalBias,re.shadowRadius=Z.radius,re.shadowMapSize=Z.mapSize,re.shadowCameraNear=Z.camera.near,re.shadowCameraFar=Z.camera.far,r.pointShadow[p]=re,r.pointShadowMap[p]=H,r.pointShadowMatrix[p]=z.shadow.matrix,I++}r.point[p]=Y,p++}else if(z.isHemisphereLight){const Y=n.get(z);Y.skyColor.copy(z.color).multiplyScalar(Q*x),Y.groundColor.copy(z.groundColor).multiplyScalar(Q*x),r.hemi[v]=Y,v++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=y;const L=r.hash;(L.directionalLength!==_||L.pointLength!==p||L.spotLength!==u||L.rectAreaLength!==m||L.hemiLength!==v||L.numDirectionalShadows!==M||L.numPointShadows!==I||L.numSpotShadows!==P||L.numSpotMaps!==C||L.numLightProbes!==ne)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=m,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=P+C-G,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=ne,L.directionalLength=_,L.pointLength=p,L.spotLength=u,L.rectAreaLength=m,L.hemiLength=v,L.numDirectionalShadows=M,L.numPointShadows=I,L.numSpotShadows=P,L.numSpotMaps=C,L.numLightProbes=ne,r.version=Eb++)}function c(f,d){let h=0,g=0,y=0,_=0,p=0;const u=d.matrixWorldInverse;for(let m=0,v=f.length;m<v;m++){const M=f[m];if(M.isDirectionalLight){const I=r.directional[h];I.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(u),h++}else if(M.isSpotLight){const I=r.spot[y];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(u),I.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(u),y++}else if(M.isRectAreaLight){const I=r.rectArea[_];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const I=r.point[g];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(u),g++}else if(M.isHemisphereLight){const I=r.hemi[p];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function hg(t,e){const n=new Tb(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ab(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new hg(t,e),n.set(s,[l])):o>=a.length?(l=new hg(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class bb extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cb extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pb=`uniform sampler2D shadow_pass;
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
}`;function Lb(t,e,n){let i=new wh;const r=new vt,s=new vt,o=new vn,a=new bb({depthPacking:TE}),l=new Cb,c={},f=n.maxTextureSize,d={[Ur]:$n,[$n]:Ur,[Si]:Si},h=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Rb,fragmentShader:Pb}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const y=new Mn;y.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ui(y,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q0;let u=this.type;this.render=function(P,C,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const ne=t.getRenderTarget(),x=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),ee=t.state;ee.setBlending(Rr),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const ue=u!==Hi&&this.type===Hi,z=u===Hi&&this.type!==Hi;for(let te=0,Q=P.length;te<Q;te++){const ae=P[te],H=ae.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Y=H.getFrameExtents();if(r.multiply(Y),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Y.x),r.x=s.x*Y.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Y.y),r.y=s.y*Y.y,H.mapSize.y=s.y)),H.map===null||ue===!0||z===!0){const re=this.type!==Hi?{minFilter:Un,magFilter:Un}:{};H.map!==null&&H.map.dispose(),H.map=new ds(r.x,r.y,re),H.map.texture.name=ae.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const Z=H.getViewportCount();for(let re=0;re<Z;re++){const he=H.getViewport(re);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),ee.viewport(o),H.updateMatrices(ae,re),i=H.getFrustum(),M(C,G,H.camera,ae,this.type)}H.isPointLightShadow!==!0&&this.type===Hi&&m(H,G),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(ne,x,L)};function m(P,C){const G=e.update(_);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,g.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ds(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(C,null,G,h,_,null),g.uniforms.shadow_pass.value=P.mapPass.texture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(C,null,G,g,_,null)}function v(P,C,G,ne){let x=null;const L=G.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)x=L;else if(x=G.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const ee=x.uuid,ue=C.uuid;let z=c[ee];z===void 0&&(z={},c[ee]=z);let te=z[ue];te===void 0&&(te=x.clone(),z[ue]=te,C.addEventListener("dispose",I)),x=te}if(x.visible=C.visible,x.wireframe=C.wireframe,ne===Hi?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,G.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const ee=t.properties.get(x);ee.light=G}return x}function M(P,C,G,ne,x){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===Hi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,P.matrixWorld);const ue=e.update(P),z=P.material;if(Array.isArray(z)){const te=ue.groups;for(let Q=0,ae=te.length;Q<ae;Q++){const H=te[Q],Y=z[H.materialIndex];if(Y&&Y.visible){const Z=v(P,Y,ne,x);P.onBeforeShadow(t,P,C,G,ue,Z,H),t.renderBufferDirect(G,null,ue,Z,P,H),P.onAfterShadow(t,P,C,G,ue,Z,H)}}}else if(z.visible){const te=v(P,z,ne,x);P.onBeforeShadow(t,P,C,G,ue,te,null),t.renderBufferDirect(G,null,ue,te,P,null),P.onAfterShadow(t,P,C,G,ue,te,null)}}const ee=P.children;for(let ue=0,z=ee.length;ue<z;ue++)M(ee[ue],C,G,ne,x)}function I(P){P.target.removeEventListener("dispose",I);for(const G in c){const ne=c[G],x=P.target.uuid;x in ne&&(ne[x].dispose(),delete ne[x])}}}function Nb(t,e,n){const i=n.isWebGL2;function r(){let R=!1;const ve=new vn;let me=null;const Ne=new vn(0,0,0,0);return{setMask:function($e){me!==$e&&!R&&(t.colorMask($e,$e,$e,$e),me=$e)},setLocked:function($e){R=$e},setClear:function($e,St,Et,zt,nn){nn===!0&&($e*=zt,St*=zt,Et*=zt),ve.set($e,St,Et,zt),Ne.equals(ve)===!1&&(t.clearColor($e,St,Et,zt),Ne.copy(ve))},reset:function(){R=!1,me=null,Ne.set(-1,0,0,0)}}}function s(){let R=!1,ve=null,me=null,Ne=null;return{setTest:function($e){$e?Oe(t.DEPTH_TEST):yt(t.DEPTH_TEST)},setMask:function($e){ve!==$e&&!R&&(t.depthMask($e),ve=$e)},setFunc:function($e){if(me!==$e){switch($e){case tE:t.depthFunc(t.NEVER);break;case nE:t.depthFunc(t.ALWAYS);break;case iE:t.depthFunc(t.LESS);break;case gc:t.depthFunc(t.LEQUAL);break;case rE:t.depthFunc(t.EQUAL);break;case sE:t.depthFunc(t.GEQUAL);break;case oE:t.depthFunc(t.GREATER);break;case aE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=$e}},setLocked:function($e){R=$e},setClear:function($e){Ne!==$e&&(t.clearDepth($e),Ne=$e)},reset:function(){R=!1,ve=null,me=null,Ne=null}}}function o(){let R=!1,ve=null,me=null,Ne=null,$e=null,St=null,Et=null,zt=null,nn=null;return{setTest:function(At){R||(At?Oe(t.STENCIL_TEST):yt(t.STENCIL_TEST))},setMask:function(At){ve!==At&&!R&&(t.stencilMask(At),ve=At)},setFunc:function(At,Ce,hn){(me!==At||Ne!==Ce||$e!==hn)&&(t.stencilFunc(At,Ce,hn),me=At,Ne=Ce,$e=hn)},setOp:function(At,Ce,hn){(St!==At||Et!==Ce||zt!==hn)&&(t.stencilOp(At,Ce,hn),St=At,Et=Ce,zt=hn)},setLocked:function(At){R=At},setClear:function(At){nn!==At&&(t.clearStencil(At),nn=At)},reset:function(){R=!1,ve=null,me=null,Ne=null,$e=null,St=null,Et=null,zt=null,nn=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let h={},g={},y=new WeakMap,_=[],p=null,u=!1,m=null,v=null,M=null,I=null,P=null,C=null,G=null,ne=new pt(0,0,0),x=0,L=!1,ee=null,ue=null,z=null,te=null,Q=null;const ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=Y>=2);let re=null,he={};const Ze=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),le=new vn().fromArray(Ze),Ae=new vn().fromArray(J);function Fe(R,ve,me,Ne){const $e=new Uint8Array(4),St=t.createTexture();t.bindTexture(R,St),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Et=0;Et<me;Et++)i&&(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)?t.texImage3D(ve,0,t.RGBA,1,1,Ne,0,t.RGBA,t.UNSIGNED_BYTE,$e):t.texImage2D(ve+Et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,$e);return St}const Qe={};Qe[t.TEXTURE_2D]=Fe(t.TEXTURE_2D,t.TEXTURE_2D,1),Qe[t.TEXTURE_CUBE_MAP]=Fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Qe[t.TEXTURE_2D_ARRAY]=Fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Qe[t.TEXTURE_3D]=Fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(t.DEPTH_TEST),l.setFunc(gc),Xe(!1),A($p),Oe(t.CULL_FACE),Be(Rr);function Oe(R){h[R]!==!0&&(t.enable(R),h[R]=!0)}function yt(R){h[R]!==!1&&(t.disable(R),h[R]=!1)}function qe(R,ve){return g[R]!==ve?(t.bindFramebuffer(R,ve),g[R]=ve,i&&(R===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ve),R===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ve)),!0):!1}function j(R,ve){let me=_,Ne=!1;if(R)if(me=y.get(ve),me===void 0&&(me=[],y.set(ve,me)),R.isWebGLMultipleRenderTargets){const $e=R.texture;if(me.length!==$e.length||me[0]!==t.COLOR_ATTACHMENT0){for(let St=0,Et=$e.length;St<Et;St++)me[St]=t.COLOR_ATTACHMENT0+St;me.length=$e.length,Ne=!0}}else me[0]!==t.COLOR_ATTACHMENT0&&(me[0]=t.COLOR_ATTACHMENT0,Ne=!0);else me[0]!==t.BACK&&(me[0]=t.BACK,Ne=!0);Ne&&(n.isWebGL2?t.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Wt(R){return p!==R?(t.useProgram(R),p=R,!0):!1}const ze={[qr]:t.FUNC_ADD,[BM]:t.FUNC_SUBTRACT,[HM]:t.FUNC_REVERSE_SUBTRACT};if(i)ze[Zp]=t.MIN,ze[Qp]=t.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(ze[Zp]=R.MIN_EXT,ze[Qp]=R.MAX_EXT)}const Je={[GM]:t.ZERO,[VM]:t.ONE,[WM]:t.SRC_COLOR,[ud]:t.SRC_ALPHA,[KM]:t.SRC_ALPHA_SATURATE,[YM]:t.DST_COLOR,[XM]:t.DST_ALPHA,[jM]:t.ONE_MINUS_SRC_COLOR,[fd]:t.ONE_MINUS_SRC_ALPHA,[qM]:t.ONE_MINUS_DST_COLOR,[$M]:t.ONE_MINUS_DST_ALPHA,[ZM]:t.CONSTANT_COLOR,[QM]:t.ONE_MINUS_CONSTANT_COLOR,[JM]:t.CONSTANT_ALPHA,[eE]:t.ONE_MINUS_CONSTANT_ALPHA};function Be(R,ve,me,Ne,$e,St,Et,zt,nn,At){if(R===Rr){u===!0&&(yt(t.BLEND),u=!1);return}if(u===!1&&(Oe(t.BLEND),u=!0),R!==zM){if(R!==m||At!==L){if((v!==qr||P!==qr)&&(t.blendEquation(t.FUNC_ADD),v=qr,P=qr),At)switch(R){case oo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yp:t.blendFunc(t.ONE,t.ONE);break;case qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case oo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}M=null,I=null,C=null,G=null,ne.set(0,0,0),x=0,m=R,L=At}return}$e=$e||ve,St=St||me,Et=Et||Ne,(ve!==v||$e!==P)&&(t.blendEquationSeparate(ze[ve],ze[$e]),v=ve,P=$e),(me!==M||Ne!==I||St!==C||Et!==G)&&(t.blendFuncSeparate(Je[me],Je[Ne],Je[St],Je[Et]),M=me,I=Ne,C=St,G=Et),(zt.equals(ne)===!1||nn!==x)&&(t.blendColor(zt.r,zt.g,zt.b,nn),ne.copy(zt),x=nn),m=R,L=!1}function ct(R,ve){R.side===Si?yt(t.CULL_FACE):Oe(t.CULL_FACE);let me=R.side===$n;ve&&(me=!me),Xe(me),R.blending===oo&&R.transparent===!1?Be(Rr):Be(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const Ne=R.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),q(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Oe(t.SAMPLE_ALPHA_TO_COVERAGE):yt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(R){ee!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),ee=R)}function A(R){R!==FM?(Oe(t.CULL_FACE),R!==ue&&(R===$p?t.cullFace(t.BACK):R===kM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):yt(t.CULL_FACE),ue=R}function w(R){R!==z&&(H&&t.lineWidth(R),z=R)}function q(R,ve,me){R?(Oe(t.POLYGON_OFFSET_FILL),(te!==ve||Q!==me)&&(t.polygonOffset(ve,me),te=ve,Q=me)):yt(t.POLYGON_OFFSET_FILL)}function ye(R){R?Oe(t.SCISSOR_TEST):yt(t.SCISSOR_TEST)}function fe(R){R===void 0&&(R=t.TEXTURE0+ae-1),re!==R&&(t.activeTexture(R),re=R)}function ce(R,ve,me){me===void 0&&(re===null?me=t.TEXTURE0+ae-1:me=re);let Ne=he[me];Ne===void 0&&(Ne={type:void 0,texture:void 0},he[me]=Ne),(Ne.type!==R||Ne.texture!==ve)&&(re!==me&&(t.activeTexture(me),re=me),t.bindTexture(R,ve||Qe[R]),Ne.type=R,Ne.texture=ve)}function ke(){const R=he[re];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function we(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function wt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function it(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function et(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ge(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function dt(R){le.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function _t(R){Ae.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),Ae.copy(R))}function Pt(R,ve){let me=d.get(ve);me===void 0&&(me=new WeakMap,d.set(ve,me));let Ne=me.get(R);Ne===void 0&&(Ne=t.getUniformBlockIndex(ve,R.name),me.set(R,Ne))}function rt(R,ve){const Ne=d.get(ve).get(R);f.get(ve)!==Ne&&(t.uniformBlockBinding(ve,Ne,R.__bindingPointIndex),f.set(ve,Ne))}function Tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},re=null,he={},g={},y=new WeakMap,_=[],p=null,u=!1,m=null,v=null,M=null,I=null,P=null,C=null,G=null,ne=new pt(0,0,0),x=0,L=!1,ee=null,ue=null,z=null,te=null,Q=null,le.set(0,0,t.canvas.width,t.canvas.height),Ae.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:yt,bindFramebuffer:qe,drawBuffers:j,useProgram:Wt,setBlending:Be,setMaterial:ct,setFlipSided:Xe,setCullFace:A,setLineWidth:w,setPolygonOffset:q,setScissorTest:ye,activeTexture:fe,bindTexture:ce,unbindTexture:ke,compressedTexImage2D:we,compressedTexImage3D:Pe,texImage2D:Ge,texImage3D:Le,updateUBOMapping:Pt,uniformBlockBinding:rt,texStorage2D:it,texStorage3D:et,texSubImage2D:pe,texSubImage3D:ot,compressedTexSubImage2D:de,compressedTexSubImage3D:wt,scissor:dt,viewport:_t,reset:Tt}}function Ib(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,w){return g?new OffscreenCanvas(A,w):Sc("canvas")}function _(A,w,q,ye){let fe=1;if((A.width>ye||A.height>ye)&&(fe=ye/Math.max(A.width,A.height)),fe<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ce=w?_d:Math.floor,ke=ce(fe*A.width),we=ce(fe*A.height);d===void 0&&(d=y(ke,we));const Pe=q?y(ke,we):d;return Pe.width=ke,Pe.height=we,Pe.getContext("2d").drawImage(A,0,0,ke,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ke+"x"+we+")."),Pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return bm(A.width)&&bm(A.height)}function u(A){return a?!1:A.wrapS!==Mi||A.wrapT!==Mi||A.minFilter!==Un&&A.minFilter!==Bn}function m(A,w){return A.generateMipmaps&&w&&A.minFilter!==Un&&A.minFilter!==Bn}function v(A){t.generateMipmap(A)}function M(A,w,q,ye,fe=!1){if(a===!1)return w;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce=w;if(w===t.RED&&(q===t.FLOAT&&(ce=t.R32F),q===t.HALF_FLOAT&&(ce=t.R16F),q===t.UNSIGNED_BYTE&&(ce=t.R8)),w===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(ce=t.R8UI),q===t.UNSIGNED_SHORT&&(ce=t.R16UI),q===t.UNSIGNED_INT&&(ce=t.R32UI),q===t.BYTE&&(ce=t.R8I),q===t.SHORT&&(ce=t.R16I),q===t.INT&&(ce=t.R32I)),w===t.RG&&(q===t.FLOAT&&(ce=t.RG32F),q===t.HALF_FLOAT&&(ce=t.RG16F),q===t.UNSIGNED_BYTE&&(ce=t.RG8)),w===t.RGBA){const ke=fe?vc:kt.getTransfer(ye);q===t.FLOAT&&(ce=t.RGBA32F),q===t.HALF_FLOAT&&(ce=t.RGBA16F),q===t.UNSIGNED_BYTE&&(ce=ke===Ht?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function I(A,w,q){return m(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==Un&&A.minFilter!==Bn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function P(A){return A===Un||A===Jp||A===zo?t.NEAREST:t.LINEAR}function C(A){const w=A.target;w.removeEventListener("dispose",C),ne(w),w.isVideoTexture&&f.delete(w)}function G(A){const w=A.target;w.removeEventListener("dispose",G),L(w)}function ne(A){const w=i.get(A);if(w.__webglInit===void 0)return;const q=A.source,ye=h.get(q);if(ye){const fe=ye[w.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&x(A),Object.keys(ye).length===0&&h.delete(q)}i.remove(A)}function x(A){const w=i.get(A);t.deleteTexture(w.__webglTexture);const q=A.source,ye=h.get(q);delete ye[w.__cacheKey],o.memory.textures--}function L(A){const w=A.texture,q=i.get(A),ye=i.get(w);if(ye.__webglTexture!==void 0&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(q.__webglFramebuffer[fe]))for(let ce=0;ce<q.__webglFramebuffer[fe].length;ce++)t.deleteFramebuffer(q.__webglFramebuffer[fe][ce]);else t.deleteFramebuffer(q.__webglFramebuffer[fe]);q.__webglDepthbuffer&&t.deleteRenderbuffer(q.__webglDepthbuffer[fe])}else{if(Array.isArray(q.__webglFramebuffer))for(let fe=0;fe<q.__webglFramebuffer.length;fe++)t.deleteFramebuffer(q.__webglFramebuffer[fe]);else t.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&t.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&t.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let fe=0;fe<q.__webglColorRenderbuffer.length;fe++)q.__webglColorRenderbuffer[fe]&&t.deleteRenderbuffer(q.__webglColorRenderbuffer[fe]);q.__webglDepthRenderbuffer&&t.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let fe=0,ce=w.length;fe<ce;fe++){const ke=i.get(w[fe]);ke.__webglTexture&&(t.deleteTexture(ke.__webglTexture),o.memory.textures--),i.remove(w[fe])}i.remove(w),i.remove(A)}let ee=0;function ue(){ee=0}function z(){const A=ee;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),ee+=1,A}function te(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function Q(A,w){const q=i.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const ye=A.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(q,A,w);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+w)}function ae(A,w){const q=i.get(A);if(A.version>0&&q.__version!==A.version){le(q,A,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+w)}function H(A,w){const q=i.get(A);if(A.version>0&&q.__version!==A.version){le(q,A,w);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+w)}function Y(A,w){const q=i.get(A);if(A.version>0&&q.__version!==A.version){Ae(q,A,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+w)}const Z={[pd]:t.REPEAT,[Mi]:t.CLAMP_TO_EDGE,[md]:t.MIRRORED_REPEAT},re={[Un]:t.NEAREST,[Jp]:t.NEAREST_MIPMAP_NEAREST,[zo]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[Tu]:t.LINEAR_MIPMAP_NEAREST,[es]:t.LINEAR_MIPMAP_LINEAR},he={[bE]:t.NEVER,[IE]:t.ALWAYS,[CE]:t.LESS,[uy]:t.LEQUAL,[RE]:t.EQUAL,[NE]:t.GEQUAL,[PE]:t.GREATER,[LE]:t.NOTEQUAL};function Ze(A,w,q){if(w.type===Wi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bn||w.magFilter===Tu||w.magFilter===zo||w.magFilter===es||w.minFilter===Bn||w.minFilter===Tu||w.minFilter===zo||w.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(t.texParameteri(A,t.TEXTURE_WRAP_S,Z[w.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Z[w.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Z[w.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,re[w.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,re[w.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==Mi||w.wrapT!==Mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,P(w.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,P(w.minFilter)),w.minFilter!==Un&&w.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ye=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Un||w.minFilter!==zo&&w.minFilter!==es||w.type===Wi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===ba&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(A,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function J(A,w){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",C));const ye=w.source;let fe=h.get(ye);fe===void 0&&(fe={},h.set(ye,fe));const ce=te(w);if(ce!==A.__cacheKey){fe[ce]===void 0&&(fe[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,q=!0),fe[ce].usedTimes++;const ke=fe[A.__cacheKey];ke!==void 0&&(fe[A.__cacheKey].usedTimes--,ke.usedTimes===0&&x(w)),A.__cacheKey=ce,A.__webglTexture=fe[ce].texture}return q}function le(A,w,q){let ye=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ye=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ye=t.TEXTURE_3D);const fe=J(A,w),ce=w.source;n.bindTexture(ye,A.__webglTexture,t.TEXTURE0+q);const ke=i.get(ce);if(ce.version!==ke.__version||fe===!0){n.activeTexture(t.TEXTURE0+q);const we=kt.getPrimaries(kt.workingColorSpace),Pe=w.colorSpace===ai?null:kt.getPrimaries(w.colorSpace),pe=w.colorSpace===ai||we===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const ot=u(w)&&p(w.image)===!1;let de=_(w.image,ot,!1,r.maxTextureSize);de=Xe(w,de);const wt=p(de)||a,it=s.convert(w.format,w.colorSpace);let et=s.convert(w.type),Ge=M(w.internalFormat,it,et,w.colorSpace,w.isVideoTexture);Ze(ye,w,wt);let Le;const dt=w.mipmaps,_t=a&&w.isVideoTexture!==!0&&Ge!==ay,Pt=ke.__version===void 0||fe===!0,rt=ce.dataReady,Tt=I(w,de,wt);if(w.isDepthTexture)Ge=t.DEPTH_COMPONENT,a?w.type===Wi?Ge=t.DEPTH_COMPONENT32F:w.type===_r?Ge=t.DEPTH_COMPONENT24:w.type===is?Ge=t.DEPTH24_STENCIL8:Ge=t.DEPTH_COMPONENT16:w.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===rs&&Ge===t.DEPTH_COMPONENT&&w.type!==Mh&&w.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=_r,et=s.convert(w.type)),w.format===_o&&Ge===t.DEPTH_COMPONENT&&(Ge=t.DEPTH_STENCIL,w.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=is,et=s.convert(w.type))),Pt&&(_t?n.texStorage2D(t.TEXTURE_2D,1,Ge,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Ge,de.width,de.height,0,it,et,null));else if(w.isDataTexture)if(dt.length>0&&wt){_t&&Pt&&n.texStorage2D(t.TEXTURE_2D,Tt,Ge,dt[0].width,dt[0].height);for(let R=0,ve=dt.length;R<ve;R++)Le=dt[R],_t?rt&&n.texSubImage2D(t.TEXTURE_2D,R,0,0,Le.width,Le.height,it,et,Le.data):n.texImage2D(t.TEXTURE_2D,R,Ge,Le.width,Le.height,0,it,et,Le.data);w.generateMipmaps=!1}else _t?(Pt&&n.texStorage2D(t.TEXTURE_2D,Tt,Ge,de.width,de.height),rt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,it,et,de.data)):n.texImage2D(t.TEXTURE_2D,0,Ge,de.width,de.height,0,it,et,de.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){_t&&Pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Tt,Ge,dt[0].width,dt[0].height,de.depth);for(let R=0,ve=dt.length;R<ve;R++)Le=dt[R],w.format!==Ei?it!==null?_t?rt&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,R,0,0,0,Le.width,Le.height,de.depth,it,Le.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,R,Ge,Le.width,Le.height,de.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?rt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,R,0,0,0,Le.width,Le.height,de.depth,it,et,Le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,R,Ge,Le.width,Le.height,de.depth,0,it,et,Le.data)}else{_t&&Pt&&n.texStorage2D(t.TEXTURE_2D,Tt,Ge,dt[0].width,dt[0].height);for(let R=0,ve=dt.length;R<ve;R++)Le=dt[R],w.format!==Ei?it!==null?_t?rt&&n.compressedTexSubImage2D(t.TEXTURE_2D,R,0,0,Le.width,Le.height,it,Le.data):n.compressedTexImage2D(t.TEXTURE_2D,R,Ge,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?rt&&n.texSubImage2D(t.TEXTURE_2D,R,0,0,Le.width,Le.height,it,et,Le.data):n.texImage2D(t.TEXTURE_2D,R,Ge,Le.width,Le.height,0,it,et,Le.data)}else if(w.isDataArrayTexture)_t?(Pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Tt,Ge,de.width,de.height,de.depth),rt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,it,et,de.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ge,de.width,de.height,de.depth,0,it,et,de.data);else if(w.isData3DTexture)_t?(Pt&&n.texStorage3D(t.TEXTURE_3D,Tt,Ge,de.width,de.height,de.depth),rt&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,it,et,de.data)):n.texImage3D(t.TEXTURE_3D,0,Ge,de.width,de.height,de.depth,0,it,et,de.data);else if(w.isFramebufferTexture){if(Pt)if(_t)n.texStorage2D(t.TEXTURE_2D,Tt,Ge,de.width,de.height);else{let R=de.width,ve=de.height;for(let me=0;me<Tt;me++)n.texImage2D(t.TEXTURE_2D,me,Ge,R,ve,0,it,et,null),R>>=1,ve>>=1}}else if(dt.length>0&&wt){_t&&Pt&&n.texStorage2D(t.TEXTURE_2D,Tt,Ge,dt[0].width,dt[0].height);for(let R=0,ve=dt.length;R<ve;R++)Le=dt[R],_t?rt&&n.texSubImage2D(t.TEXTURE_2D,R,0,0,it,et,Le):n.texImage2D(t.TEXTURE_2D,R,Ge,it,et,Le);w.generateMipmaps=!1}else _t?(Pt&&n.texStorage2D(t.TEXTURE_2D,Tt,Ge,de.width,de.height),rt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,it,et,de)):n.texImage2D(t.TEXTURE_2D,0,Ge,it,et,de);m(w,wt)&&v(ye),ke.__version=ce.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Ae(A,w,q){if(w.image.length!==6)return;const ye=J(A,w),fe=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+q);const ce=i.get(fe);if(fe.version!==ce.__version||ye===!0){n.activeTexture(t.TEXTURE0+q);const ke=kt.getPrimaries(kt.workingColorSpace),we=w.colorSpace===ai?null:kt.getPrimaries(w.colorSpace),Pe=w.colorSpace===ai||ke===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const pe=w.isCompressedTexture||w.image[0].isCompressedTexture,ot=w.image[0]&&w.image[0].isDataTexture,de=[];for(let R=0;R<6;R++)!pe&&!ot?de[R]=_(w.image[R],!1,!0,r.maxCubemapSize):de[R]=ot?w.image[R].image:w.image[R],de[R]=Xe(w,de[R]);const wt=de[0],it=p(wt)||a,et=s.convert(w.format,w.colorSpace),Ge=s.convert(w.type),Le=M(w.internalFormat,et,Ge,w.colorSpace),dt=a&&w.isVideoTexture!==!0,_t=ce.__version===void 0||ye===!0,Pt=fe.dataReady;let rt=I(w,wt,it);Ze(t.TEXTURE_CUBE_MAP,w,it);let Tt;if(pe){dt&&_t&&n.texStorage2D(t.TEXTURE_CUBE_MAP,rt,Le,wt.width,wt.height);for(let R=0;R<6;R++){Tt=de[R].mipmaps;for(let ve=0;ve<Tt.length;ve++){const me=Tt[ve];w.format!==Ei?et!==null?dt?Pt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ve,0,0,me.width,me.height,et,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ve,Le,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?Pt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ve,0,0,me.width,me.height,et,Ge,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ve,Le,me.width,me.height,0,et,Ge,me.data)}}}else{Tt=w.mipmaps,dt&&_t&&(Tt.length>0&&rt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,rt,Le,de[0].width,de[0].height));for(let R=0;R<6;R++)if(ot){dt?Pt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,de[R].width,de[R].height,et,Ge,de[R].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Le,de[R].width,de[R].height,0,et,Ge,de[R].data);for(let ve=0;ve<Tt.length;ve++){const Ne=Tt[ve].image[R].image;dt?Pt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ve+1,0,0,Ne.width,Ne.height,et,Ge,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ve+1,Le,Ne.width,Ne.height,0,et,Ge,Ne.data)}}else{dt?Pt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,et,Ge,de[R]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,Le,et,Ge,de[R]);for(let ve=0;ve<Tt.length;ve++){const me=Tt[ve];dt?Pt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ve+1,0,0,et,Ge,me.image[R]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+R,ve+1,Le,et,Ge,me.image[R])}}}m(w,it)&&v(t.TEXTURE_CUBE_MAP),ce.__version=fe.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Fe(A,w,q,ye,fe,ce){const ke=s.convert(q.format,q.colorSpace),we=s.convert(q.type),Pe=M(q.internalFormat,ke,we,q.colorSpace);if(!i.get(w).__hasExternalTextures){const ot=Math.max(1,w.width>>ce),de=Math.max(1,w.height>>ce);fe===t.TEXTURE_3D||fe===t.TEXTURE_2D_ARRAY?n.texImage3D(fe,ce,Pe,ot,de,w.depth,0,ke,we,null):n.texImage2D(fe,ce,Pe,ot,de,0,ke,we,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Be(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ye,fe,i.get(q).__webglTexture,0,Je(w)):(fe===t.TEXTURE_2D||fe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ye,fe,i.get(q).__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(A,w,q){if(t.bindRenderbuffer(t.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let ye=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(q||Be(w)){const fe=w.depthTexture;fe&&fe.isDepthTexture&&(fe.type===Wi?ye=t.DEPTH_COMPONENT32F:fe.type===_r&&(ye=t.DEPTH_COMPONENT24));const ce=Je(w);Be(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,ye,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,ye,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,ye,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const ye=Je(w);q&&Be(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,t.DEPTH24_STENCIL8,w.width,w.height):Be(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ye=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let fe=0;fe<ye.length;fe++){const ce=ye[fe],ke=s.convert(ce.format,ce.colorSpace),we=s.convert(ce.type),Pe=M(ce.internalFormat,ke,we,ce.colorSpace),pe=Je(w);q&&Be(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,Pe,w.width,w.height):Be(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,Pe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Q(w.depthTexture,0);const ye=i.get(w.depthTexture).__webglTexture,fe=Je(w);if(w.depthTexture.format===rs)Be(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ye,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ye,0);else if(w.depthTexture.format===_o)Be(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ye,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function yt(A){const w=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Oe(w.__webglFramebuffer,A)}else if(q){w.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ye]),w.__webglDepthbuffer[ye]=t.createRenderbuffer(),Qe(w.__webglDepthbuffer[ye],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Qe(w.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(A,w,q){const ye=i.get(A);w!==void 0&&Fe(ye.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&yt(A)}function j(A){const w=A.texture,q=i.get(A),ye=i.get(w);A.addEventListener("dispose",G),A.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture()),ye.__version=w.version,o.memory.textures++);const fe=A.isWebGLCubeRenderTarget===!0,ce=A.isWebGLMultipleRenderTargets===!0,ke=p(A)||a;if(fe){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(a&&w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let Pe=0;Pe<w.mipmaps.length;Pe++)q.__webglFramebuffer[we][Pe]=t.createFramebuffer()}else q.__webglFramebuffer[we]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)q.__webglFramebuffer[we]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(ce)if(r.drawBuffers){const we=A.texture;for(let Pe=0,pe=we.length;Pe<pe;Pe++){const ot=i.get(we[Pe]);ot.__webglTexture===void 0&&(ot.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Be(A)===!1){const we=ce?w:[w];q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Pe=0;Pe<we.length;Pe++){const pe=we[Pe];q.__webglColorRenderbuffer[Pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[Pe]);const ot=s.convert(pe.format,pe.colorSpace),de=s.convert(pe.type),wt=M(pe.internalFormat,ot,de,pe.colorSpace,A.isXRRenderTarget===!0),it=Je(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,it,wt,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,q.__webglColorRenderbuffer[Pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),Qe(q.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,ye.__webglTexture),Ze(t.TEXTURE_CUBE_MAP,w,ke);for(let we=0;we<6;we++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)Fe(q.__webglFramebuffer[we][Pe],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+we,Pe);else Fe(q.__webglFramebuffer[we],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);m(w,ke)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){const we=A.texture;for(let Pe=0,pe=we.length;Pe<pe;Pe++){const ot=we[Pe],de=i.get(ot);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),Ze(t.TEXTURE_2D,ot,ke),Fe(q.__webglFramebuffer,A,ot,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,0),m(ot,ke)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let we=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?we=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(we,ye.__webglTexture),Ze(we,w,ke),a&&w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)Fe(q.__webglFramebuffer[Pe],A,w,t.COLOR_ATTACHMENT0,we,Pe);else Fe(q.__webglFramebuffer,A,w,t.COLOR_ATTACHMENT0,we,0);m(w,ke)&&v(we),n.unbindTexture()}A.depthBuffer&&yt(A)}function Wt(A){const w=p(A)||a,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ye=0,fe=q.length;ye<fe;ye++){const ce=q[ye];if(m(ce,w)){const ke=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(ce).__webglTexture;n.bindTexture(ke,we),v(ke),n.unbindTexture()}}}function ze(A){if(a&&A.samples>0&&Be(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,ye=A.height;let fe=t.COLOR_BUFFER_BIT;const ce=[],ke=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(A),Pe=A.isWebGLMultipleRenderTargets===!0;if(Pe)for(let pe=0;pe<w.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){ce.push(t.COLOR_ATTACHMENT0+pe),A.depthBuffer&&ce.push(ke);const ot=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(ot===!1&&(A.depthBuffer&&(fe|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(fe|=t.STENCIL_BUFFER_BIT)),Pe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[pe]),ot===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ke]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ke])),Pe){const de=i.get(w[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,q,ye,0,0,q,ye,fe,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ce)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Pe)for(let pe=0;pe<w.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,we.__webglColorRenderbuffer[pe]);const ot=i.get(w[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,ot,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function Je(A){return Math.min(r.maxSamples,A.samples)}function Be(A){const w=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ct(A){const w=o.render.frame;f.get(A)!==w&&(f.set(A,w),A.update())}function Xe(A,w){const q=A.colorSpace,ye=A.format,fe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===vd||q!==Ji&&q!==ai&&(kt.getTransfer(q)===Ht?a===!1?e.has("EXT_sRGB")===!0&&ye===Ei?(A.format=vd,A.minFilter=Bn,A.generateMipmaps=!1):w=dy.sRGBToLinear(w):(ye!==Ei||fe!==Lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}this.allocateTextureUnit=z,this.resetTextureUnits=ue,this.setTexture2D=Q,this.setTexture2DArray=ae,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=qe,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Be}function Db(t,e,n){const i=n.isWebGL2;function r(s,o=ai){let a;const l=kt.getTransfer(o);if(s===Lr)return t.UNSIGNED_BYTE;if(s===ny)return t.UNSIGNED_SHORT_4_4_4_4;if(s===iy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===gE)return t.BYTE;if(s===vE)return t.SHORT;if(s===Mh)return t.UNSIGNED_SHORT;if(s===ty)return t.INT;if(s===_r)return t.UNSIGNED_INT;if(s===Wi)return t.FLOAT;if(s===ba)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===yE)return t.ALPHA;if(s===Ei)return t.RGBA;if(s===_E)return t.LUMINANCE;if(s===xE)return t.LUMINANCE_ALPHA;if(s===rs)return t.DEPTH_COMPONENT;if(s===_o)return t.DEPTH_STENCIL;if(s===vd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===SE)return t.RED;if(s===ry)return t.RED_INTEGER;if(s===ME)return t.RG;if(s===sy)return t.RG_INTEGER;if(s===oy)return t.RGBA_INTEGER;if(s===Au||s===bu||s===Cu||s===Ru)if(l===Ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Au)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Au)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ru)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===em||s===tm||s===nm||s===im)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===em)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===im)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ay)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rm||s===sm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===rm)return l===Ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===sm)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===om||s===am||s===lm||s===cm||s===um||s===fm||s===dm||s===hm||s===pm||s===mm||s===gm||s===vm||s===ym||s===_m)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===om)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===am)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lm)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cm)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===um)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fm)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dm)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hm)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pm)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mm)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gm)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vm)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ym)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_m)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pu||s===xm||s===Sm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Pu)return l===Ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===xm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Sm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===EE||s===Mm||s===Em||s===wm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Pu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Mm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Em)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===is?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Ub extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pi extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fb={type:"move"};class ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),g=.02,y=.005;c.inputState.pinching&&h>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const kb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ob=`
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

}`;class zb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new kn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Fr({extensions:{fragDepth:!0},vertexShader:kb,fragmentShader:Ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new So(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class Bb extends bo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,g=null,y=null;const _=new zb,p=n.getContextAttributes();let u=null,m=null;const v=[],M=[],I=new vt;let P=null;const C=new oi;C.layers.enable(1),C.viewport=new vn;const G=new oi;G.layers.enable(2),G.viewport=new vn;const ne=[C,G],x=new Ub;x.layers.enable(1),x.layers.enable(2);let L=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=v[J];return le===void 0&&(le=new ef,v[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=v[J];return le===void 0&&(le=new ef,v[J]=le),le.getGripSpace()},this.getHand=function(J){let le=v[J];return le===void 0&&(le=new ef,v[J]=le),le.getHandSpace()};function ue(J){const le=M.indexOf(J.inputSource);if(le===-1)return;const Ae=v[le];Ae!==void 0&&(Ae.update(J.inputSource,J.frame,c||o),Ae.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",te);for(let J=0;J<v.length;J++){const le=M[J];le!==null&&(M[J]=null,v[J].disconnect(le))}L=null,ee=null,_.reset(),e.setRenderTarget(u),g=null,h=null,d=null,r=null,m=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",z),r.addEventListener("inputsourceschange",te),p.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new ds(g.framebufferWidth,g.framebufferHeight,{format:Ei,type:Lr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,Ae=null,Fe=null;p.depth&&(Fe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=p.stencil?_o:rs,Ae=p.stencil?is:_r);const Qe={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Qe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new ds(h.textureWidth,h.textureHeight,{format:Ei,type:Lr,depthTexture:new Ay(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Oe=e.properties.get(m);Oe.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(J){for(let le=0;le<J.removed.length;le++){const Ae=J.removed[le],Fe=M.indexOf(Ae);Fe>=0&&(M[Fe]=null,v[Fe].disconnect(Ae))}for(let le=0;le<J.added.length;le++){const Ae=J.added[le];let Fe=M.indexOf(Ae);if(Fe===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=M.length){M.push(Ae),Fe=Oe;break}else if(M[Oe]===null){M[Oe]=Ae,Fe=Oe;break}if(Fe===-1)break}const Qe=v[Fe];Qe&&Qe.connect(Ae)}}const Q=new W,ae=new W;function H(J,le,Ae){Q.setFromMatrixPosition(le.matrixWorld),ae.setFromMatrixPosition(Ae.matrixWorld);const Fe=Q.distanceTo(ae),Qe=le.projectionMatrix.elements,Oe=Ae.projectionMatrix.elements,yt=Qe[14]/(Qe[10]-1),qe=Qe[14]/(Qe[10]+1),j=(Qe[9]+1)/Qe[5],Wt=(Qe[9]-1)/Qe[5],ze=(Qe[8]-1)/Qe[0],Je=(Oe[8]+1)/Oe[0],Be=yt*ze,ct=yt*Je,Xe=Fe/(-ze+Je),A=Xe*-ze;le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(A),J.translateZ(Xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const w=yt+Xe,q=qe+Xe,ye=Be-A,fe=ct+(Fe-A),ce=j*qe/q*w,ke=Wt*qe/q*w;J.projectionMatrix.makePerspective(ye,fe,ce,ke,w,q),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function Y(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;_.texture!==null&&(J.near=_.depthNear,J.far=_.depthFar),x.near=G.near=C.near=J.near,x.far=G.far=C.far=J.far,(L!==x.near||ee!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,ee=x.far,C.near=L,C.far=ee,G.near=L,G.far=ee,C.updateProjectionMatrix(),G.updateProjectionMatrix(),J.updateProjectionMatrix());const le=J.parent,Ae=x.cameras;Y(x,le);for(let Fe=0;Fe<Ae.length;Fe++)Y(Ae[Fe],le);Ae.length===2?H(x,C,G):x.projectionMatrix.copy(C.projectionMatrix),Z(J,x,le)};function Z(J,le,Ae){Ae===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=yd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null};let re=null;function he(J,le){if(f=le.getViewerPose(c||o),y=le,f!==null){const Ae=f.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let Fe=!1;Ae.length!==x.cameras.length&&(x.cameras.length=0,Fe=!0);for(let Oe=0;Oe<Ae.length;Oe++){const yt=Ae[Oe];let qe=null;if(g!==null)qe=g.getViewport(yt);else{const Wt=d.getViewSubImage(h,yt);qe=Wt.viewport,Oe===0&&(e.setRenderTargetTextures(m,Wt.colorTexture,h.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(m))}let j=ne[Oe];j===void 0&&(j=new oi,j.layers.enable(Oe),j.viewport=new vn,ne[Oe]=j),j.matrix.fromArray(yt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(yt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(qe.x,qe.y,qe.width,qe.height),Oe===0&&(x.matrix.copy(j.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Fe===!0&&x.cameras.push(j)}const Qe=r.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")){const Oe=d.getDepthInformation(Ae[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,r.renderState)}}for(let Ae=0;Ae<v.length;Ae++){const Fe=M[Ae],Qe=v[Ae];Fe!==null&&Qe!==void 0&&Qe.update(Fe,le,c||o)}_.render(e,x),re&&re(J,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),y=null}const Ze=new wy;Ze.setAnimationLoop(he),this.setAnimationLoop=function(J){re=J},this.dispose=function(){}}}function Hb(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Sy(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,m,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&g(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),y(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,m,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===$n&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===$n&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const m=e.get(u).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,m,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*m,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,m){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===$n&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const m=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Gb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const M=v.program;i.uniformBlockBinding(m,M)}function c(m,v){let M=r[m.id];M===void 0&&(y(m),M=f(m),r[m.id]=M,m.addEventListener("dispose",p));const I=v.program;i.updateUBOMapping(m,I);const P=e.render.frame;s[m.id]!==P&&(h(m),s[m.id]=P)}function f(m){const v=d();m.__bindingPointIndex=v;const M=t.createBuffer(),I=m.__size,P=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,I,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],M=m.uniforms,I=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let P=0,C=M.length;P<C;P++){const G=Array.isArray(M[P])?M[P]:[M[P]];for(let ne=0,x=G.length;ne<x;ne++){const L=G[ne];if(g(L,P,ne,I)===!0){const ee=L.__offset,ue=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let te=0;te<ue.length;te++){const Q=ue[te],ae=_(Q);typeof Q=="number"||typeof Q=="boolean"?(L.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,ee+z,L.__data)):Q.isMatrix3?(L.__data[0]=Q.elements[0],L.__data[1]=Q.elements[1],L.__data[2]=Q.elements[2],L.__data[3]=0,L.__data[4]=Q.elements[3],L.__data[5]=Q.elements[4],L.__data[6]=Q.elements[5],L.__data[7]=0,L.__data[8]=Q.elements[6],L.__data[9]=Q.elements[7],L.__data[10]=Q.elements[8],L.__data[11]=0):(Q.toArray(L.__data,z),z+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ee,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,M,I){const P=m.value,C=v+"_"+M;if(I[C]===void 0)return typeof P=="number"||typeof P=="boolean"?I[C]=P:I[C]=P.clone(),!0;{const G=I[C];if(typeof P=="number"||typeof P=="boolean"){if(G!==P)return I[C]=P,!0}else if(G.equals(P)===!1)return G.copy(P),!0}return!1}function y(m){const v=m.uniforms;let M=0;const I=16;for(let C=0,G=v.length;C<G;C++){const ne=Array.isArray(v[C])?v[C]:[v[C]];for(let x=0,L=ne.length;x<L;x++){const ee=ne[x],ue=Array.isArray(ee.value)?ee.value:[ee.value];for(let z=0,te=ue.length;z<te;z++){const Q=ue[z],ae=_(Q),H=M%I;H!==0&&I-H<ae.boundary&&(M+=I-H),ee.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=M,M+=ae.storage}}}const P=M%I;return P>0&&(M+=I-P),m.__size=M,m.__cache={},this}function _(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function p(m){const v=m.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Ny{constructor(e={}){const{canvas:n=UE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const g=new Uint32Array(4),y=new Int32Array(4);let _=null,p=null;const u=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this._useLegacyLights=!1,this.toneMapping=Pr,this.toneMappingExposure=1;const v=this;let M=!1,I=0,P=0,C=null,G=-1,ne=null;const x=new vn,L=new vn;let ee=null;const ue=new pt(0);let z=0,te=n.width,Q=n.height,ae=1,H=null,Y=null;const Z=new vn(0,0,te,Q),re=new vn(0,0,te,Q);let he=!1;const Ze=new wh;let J=!1,le=!1,Ae=null;const Fe=new en,Qe=new vt,Oe=new W,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return C===null?ae:1}let j=i;function Wt(T,B){for(let X=0;X<T.length;X++){const K=T[X],$=n.getContext(K,B);if($!==null)return $}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sh}`),n.addEventListener("webglcontextlost",Tt,!1),n.addEventListener("webglcontextrestored",R,!1),n.addEventListener("webglcontextcreationerror",ve,!1),j===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),j=Wt(B,T),j===null)throw Wt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ze,Je,Be,ct,Xe,A,w,q,ye,fe,ce,ke,we,Pe,pe,ot,de,wt,it,et,Ge,Le,dt,_t;function Pt(){ze=new q1(j),Je=new V1(j,ze,e),ze.init(Je),Le=new Db(j,ze,Je),Be=new Nb(j,ze,Je),ct=new Q1(j),Xe=new yb,A=new Ib(j,ze,Be,Xe,Je,Le,ct),w=new j1(v),q=new Y1(v),ye=new ow(j,Je),dt=new H1(j,ze,ye,Je),fe=new K1(j,ye,ct,dt),ce=new nA(j,fe,ye,ct),it=new tA(j,Je,A),ot=new W1(Xe),ke=new vb(v,w,q,ze,Je,dt,ot),we=new Hb(v,Xe),Pe=new xb,pe=new Ab(ze,Je),wt=new B1(v,w,q,Be,ce,h,l),de=new Lb(v,ce,Je),_t=new Gb(j,ct,Je,Be),et=new G1(j,ze,ct,Je),Ge=new Z1(j,ze,ct,Je),ct.programs=ke.programs,v.capabilities=Je,v.extensions=ze,v.properties=Xe,v.renderLists=Pe,v.shadowMap=de,v.state=Be,v.info=ct}Pt();const rt=new Bb(v,j);this.xr=rt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const T=ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(T){T!==void 0&&(ae=T,this.setSize(te,Q,!1))},this.getSize=function(T){return T.set(te,Q)},this.setSize=function(T,B,X=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,Q=B,n.width=Math.floor(T*ae),n.height=Math.floor(B*ae),X===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(te*ae,Q*ae).floor()},this.setDrawingBufferSize=function(T,B,X){te=T,Q=B,ae=X,n.width=Math.floor(T*X),n.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,B,X,K){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,B,X,K),Be.viewport(x.copy(Z).multiplyScalar(ae).floor())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,B,X,K){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,B,X,K),Be.scissor(L.copy(re).multiplyScalar(ae).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(T){Be.setScissorTest(he=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(T=!0,B=!0,X=!0){let K=0;if(T){let $=!1;if(C!==null){const Me=C.texture.format;$=Me===oy||Me===sy||Me===ry}if($){const Me=C.texture.type,Ie=Me===Lr||Me===_r||Me===Mh||Me===is||Me===ny||Me===iy,Re=wt.getClearColor(),Ke=wt.getClearAlpha(),tt=Re.r,nt=Re.g,Ve=Re.b;Ie?(g[0]=tt,g[1]=nt,g[2]=Ve,g[3]=Ke,j.clearBufferuiv(j.COLOR,0,g)):(y[0]=tt,y[1]=nt,y[2]=Ve,y[3]=Ke,j.clearBufferiv(j.COLOR,0,y))}else K|=j.COLOR_BUFFER_BIT}B&&(K|=j.DEPTH_BUFFER_BIT),X&&(K|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",R,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Pe.dispose(),pe.dispose(),Xe.dispose(),w.dispose(),q.dispose(),ce.dispose(),dt.dispose(),_t.dispose(),ke.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",nn),rt.removeEventListener("sessionend",At),Ae&&(Ae.dispose(),Ae=null),Ce.stop()};function Tt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=ct.autoReset,B=de.enabled,X=de.autoUpdate,K=de.needsUpdate,$=de.type;Pt(),ct.autoReset=T,de.enabled=B,de.autoUpdate=X,de.needsUpdate=K,de.type=$}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function me(T){const B=T.target;B.removeEventListener("dispose",me),Ne(B)}function Ne(T){$e(T),Xe.remove(T)}function $e(T){const B=Xe.get(T).programs;B!==void 0&&(B.forEach(function(X){ke.releaseProgram(X)}),T.isShaderMaterial&&ke.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,K,$,Me){B===null&&(B=yt);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,Re=ht(T,B,X,K,$);Be.setMaterial(K,Ie);let Ke=X.index,tt=1;if(K.wireframe===!0){if(Ke=fe.getWireframeAttribute(X),Ke===void 0)return;tt=2}const nt=X.drawRange,Ve=X.attributes.position;let mt=nt.start*tt,Zt=(nt.start+nt.count)*tt;Me!==null&&(mt=Math.max(mt,Me.start*tt),Zt=Math.min(Zt,(Me.start+Me.count)*tt)),Ke!==null?(mt=Math.max(mt,0),Zt=Math.min(Zt,Ke.count)):Ve!=null&&(mt=Math.max(mt,0),Zt=Math.min(Zt,Ve.count));const Nt=Zt-mt;if(Nt<0||Nt===1/0)return;dt.setup($,K,Re,X,Ke);let Ut,bt=et;if(Ke!==null&&(Ut=ye.get(Ke),bt=Ge,bt.setIndex(Ut)),$.isMesh)K.wireframe===!0?(Be.setLineWidth(K.wireframeLinewidth*qe()),bt.setMode(j.LINES)):bt.setMode(j.TRIANGLES);else if($.isLine){let at=K.linewidth;at===void 0&&(at=1),Be.setLineWidth(at*qe()),$.isLineSegments?bt.setMode(j.LINES):$.isLineLoop?bt.setMode(j.LINE_LOOP):bt.setMode(j.LINE_STRIP)}else $.isPoints?bt.setMode(j.POINTS):$.isSprite&&bt.setMode(j.TRIANGLES);if($.isBatchedMesh)bt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)bt.renderInstances(mt,Nt,$.count);else if(X.isInstancedBufferGeometry){const at=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,qt=Math.min(X.instanceCount,at);bt.renderInstances(mt,Nt,qt)}else bt.render(mt,Nt)};function St(T,B,X){T.transparent===!0&&T.side===Si&&T.forceSinglePass===!1?(T.side=$n,T.needsUpdate=!0,xe(T,B,X),T.side=Ur,T.needsUpdate=!0,xe(T,B,X),T.side=Si):xe(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),p=pe.get(X),p.init(),m.push(p),X.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),T!==X&&T.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(v._useLegacyLights);const K=new Set;return T.traverse(function($){const Me=$.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){const Re=Me[Ie];St(Re,X,$),K.add(Re)}else St(Me,X,$),K.add(Me)}),m.pop(),p=null,K},this.compileAsync=function(T,B,X=null){const K=this.compile(T,B,X);return new Promise($=>{function Me(){if(K.forEach(function(Ie){Xe.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){$(T);return}setTimeout(Me,10)}ze.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Et=null;function zt(T){Et&&Et(T)}function nn(){Ce.stop()}function At(){Ce.start()}const Ce=new wy;Ce.setAnimationLoop(zt),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(T){Et=T,rt.setAnimationLoop(T),T===null?Ce.stop():Ce.start()},rt.addEventListener("sessionstart",nn),rt.addEventListener("sessionend",At),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(B),B=rt.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,C),p=pe.get(T,m.length),p.init(),m.push(p),Fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ze.setFromProjectionMatrix(Fe),le=this.localClippingEnabled,J=ot.init(this.clippingPlanes,le),_=Pe.get(T,u.length),_.init(),u.push(_),hn(T,B,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(H,Y),this.info.render.frame++,J===!0&&ot.beginShadows();const X=p.state.shadowsArray;if(de.render(X,T,B),J===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1)&&wt.render(_,T),p.setupLights(v._useLegacyLights),B.isArrayCamera){const K=B.cameras;for(let $=0,Me=K.length;$<Me;$++){const Ie=K[$];ie(_,T,Ie,Ie.viewport)}}else ie(_,T,B);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,B),dt.resetDefaultState(),G=-1,ne=null,m.pop(),m.length>0?p=m[m.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function hn(T,B,X,K){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ze.intersectsSprite(T)){K&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Fe);const Ie=ce.update(T),Re=T.material;Re.visible&&_.push(T,Ie,Re,X,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ze.intersectsObject(T))){const Ie=ce.update(T),Re=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Oe.copy(Ie.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(Fe)),Array.isArray(Re)){const Ke=Ie.groups;for(let tt=0,nt=Ke.length;tt<nt;tt++){const Ve=Ke[tt],mt=Re[Ve.materialIndex];mt&&mt.visible&&_.push(T,Ie,mt,X,Oe.z,Ve)}}else Re.visible&&_.push(T,Ie,Re,X,Oe.z,null)}}const Me=T.children;for(let Ie=0,Re=Me.length;Ie<Re;Ie++)hn(Me[Ie],B,X,K)}function ie(T,B,X,K){const $=T.opaque,Me=T.transmissive,Ie=T.transparent;p.setupLightsView(X),J===!0&&ot.setGlobalState(v.clippingPlanes,X),Me.length>0&&De($,Me,B,X),K&&Be.viewport(x.copy(K)),$.length>0&&be($,B,X),Me.length>0&&be(Me,B,X),Ie.length>0&&be(Ie,B,X),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function De(T,B,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Me=Je.isWebGL2;Ae===null&&(Ae=new ds(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")?ba:Lr,minFilter:es,samples:Me?4:0})),v.getDrawingBufferSize(Qe),Me?Ae.setSize(Qe.x,Qe.y):Ae.setSize(_d(Qe.x),_d(Qe.y));const Ie=v.getRenderTarget();v.setRenderTarget(Ae),v.getClearColor(ue),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear();const Re=v.toneMapping;v.toneMapping=Pr,be(T,X,K),A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae);let Ke=!1;for(let tt=0,nt=B.length;tt<nt;tt++){const Ve=B[tt],mt=Ve.object,Zt=Ve.geometry,Nt=Ve.material,Ut=Ve.group;if(Nt.side===Si&&mt.layers.test(K.layers)){const bt=Nt.side;Nt.side=$n,Nt.needsUpdate=!0,Se(mt,X,K,Zt,Nt,Ut),Nt.side=bt,Nt.needsUpdate=!0,Ke=!0}}Ke===!0&&(A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae)),v.setRenderTarget(Ie),v.setClearColor(ue,z),v.toneMapping=Re}function be(T,B,X){const K=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Me=T.length;$<Me;$++){const Ie=T[$],Re=Ie.object,Ke=Ie.geometry,tt=K===null?Ie.material:K,nt=Ie.group;Re.layers.test(X.layers)&&Se(Re,B,X,Ke,tt,nt)}}function Se(T,B,X,K,$,Me){T.onBeforeRender(v,B,X,K,$,Me),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(v,B,X,K,T,Me),$.transparent===!0&&$.side===Si&&$.forceSinglePass===!1?($.side=$n,$.needsUpdate=!0,v.renderBufferDirect(X,B,K,$,T,Me),$.side=Ur,$.needsUpdate=!0,v.renderBufferDirect(X,B,K,$,T,Me),$.side=Si):v.renderBufferDirect(X,B,K,$,T,Me),T.onAfterRender(v,B,X,K,$,Me)}function xe(T,B,X){B.isScene!==!0&&(B=yt);const K=Xe.get(T),$=p.state.lights,Me=p.state.shadowsArray,Ie=$.state.version,Re=ke.getParameters(T,$.state,Me,B,X),Ke=ke.getProgramCacheKey(Re);let tt=K.programs;K.environment=T.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(T.isMeshStandardMaterial?q:w).get(T.envMap||K.environment),tt===void 0&&(T.addEventListener("dispose",me),tt=new Map,K.programs=tt);let nt=tt.get(Ke);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===Ie)return Ye(T,Re),nt}else Re.uniforms=ke.getUniforms(T),T.onBuild(X,Re,v),T.onBeforeCompile(Re,v),nt=ke.acquireProgram(Re,Ke),tt.set(Ke,nt),K.uniforms=Re.uniforms;const Ve=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=ot.uniform),Ye(T,Re),K.needsLights=Lt(T),K.lightsStateVersion=Ie,K.needsLights&&(Ve.ambientLightColor.value=$.state.ambient,Ve.lightProbe.value=$.state.probe,Ve.directionalLights.value=$.state.directional,Ve.directionalLightShadows.value=$.state.directionalShadow,Ve.spotLights.value=$.state.spot,Ve.spotLightShadows.value=$.state.spotShadow,Ve.rectAreaLights.value=$.state.rectArea,Ve.ltc_1.value=$.state.rectAreaLTC1,Ve.ltc_2.value=$.state.rectAreaLTC2,Ve.pointLights.value=$.state.point,Ve.pointLightShadows.value=$.state.pointShadow,Ve.hemisphereLights.value=$.state.hemi,Ve.directionalShadowMap.value=$.state.directionalShadowMap,Ve.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ve.spotShadowMap.value=$.state.spotShadowMap,Ve.spotLightMatrix.value=$.state.spotLightMatrix,Ve.spotLightMap.value=$.state.spotLightMap,Ve.pointShadowMap.value=$.state.pointShadowMap,Ve.pointShadowMatrix.value=$.state.pointShadowMatrix),K.currentProgram=nt,K.uniformsList=null,nt}function He(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Vl.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Ye(T,B){const X=Xe.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function ht(T,B,X,K,$){B.isScene!==!0&&(B=yt),A.resetTextureUnits();const Me=B.fog,Ie=K.isMeshStandardMaterial?B.environment:null,Re=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ji,Ke=(K.isMeshStandardMaterial?q:w).get(K.envMap||Ie),tt=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,nt=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ve=!!X.morphAttributes.position,mt=!!X.morphAttributes.normal,Zt=!!X.morphAttributes.color;let Nt=Pr;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const Ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bt=Ut!==void 0?Ut.length:0,at=Xe.get(K),qt=p.state.lights;if(J===!0&&(le===!0||T!==ne)){const se=T===ne&&K.id===G;ot.setState(K,T,se)}let S=!1;K.version===at.__version?(at.needsLights&&at.lightsStateVersion!==qt.state.version||at.outputColorSpace!==Re||$.isBatchedMesh&&at.batching===!1||!$.isBatchedMesh&&at.batching===!0||$.isInstancedMesh&&at.instancing===!1||!$.isInstancedMesh&&at.instancing===!0||$.isSkinnedMesh&&at.skinning===!1||!$.isSkinnedMesh&&at.skinning===!0||$.isInstancedMesh&&at.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&at.instancingColor===!1&&$.instanceColor!==null||at.envMap!==Ke||K.fog===!0&&at.fog!==Me||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==ot.numPlanes||at.numIntersection!==ot.numIntersection)||at.vertexAlphas!==tt||at.vertexTangents!==nt||at.morphTargets!==Ve||at.morphNormals!==mt||at.morphColors!==Zt||at.toneMapping!==Nt||Je.isWebGL2===!0&&at.morphTargetsCount!==bt)&&(S=!0):(S=!0,at.__version=K.version);let O=at.currentProgram;S===!0&&(O=xe(K,B,$));let D=!1,b=!1,V=!1;const U=O.getUniforms(),N=at.uniforms;if(Be.useProgram(O.program)&&(D=!0,b=!0,V=!0),K.id!==G&&(G=K.id,b=!0),D||ne!==T){U.setValue(j,"projectionMatrix",T.projectionMatrix),U.setValue(j,"viewMatrix",T.matrixWorldInverse);const se=U.map.cameraPosition;se!==void 0&&se.setValue(j,Oe.setFromMatrixPosition(T.matrixWorld)),Je.logarithmicDepthBuffer&&U.setValue(j,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&U.setValue(j,"isOrthographic",T.isOrthographicCamera===!0),ne!==T&&(ne=T,b=!0,V=!0)}if($.isSkinnedMesh){U.setOptional(j,$,"bindMatrix"),U.setOptional(j,$,"bindMatrixInverse");const se=$.skeleton;se&&(Je.floatVertexTextures?(se.boneTexture===null&&se.computeBoneTexture(),U.setValue(j,"boneTexture",se.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(U.setOptional(j,$,"batchingTexture"),U.setValue(j,"batchingTexture",$._matricesTexture,A));const k=X.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0&&Je.isWebGL2===!0)&&it.update($,X,O),(b||at.receiveShadow!==$.receiveShadow)&&(at.receiveShadow=$.receiveShadow,U.setValue(j,"receiveShadow",$.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(N.envMap.value=Ke,N.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),b&&(U.setValue(j,"toneMappingExposure",v.toneMappingExposure),at.needsLights&&st(N,V),Me&&K.fog===!0&&we.refreshFogUniforms(N,Me),we.refreshMaterialUniforms(N,K,ae,Q,Ae),Vl.upload(j,He(at),N,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Vl.upload(j,He(at),N,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&U.setValue(j,"center",$.center),U.setValue(j,"modelViewMatrix",$.modelViewMatrix),U.setValue(j,"normalMatrix",$.normalMatrix),U.setValue(j,"modelMatrix",$.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const se=K.uniformsGroups;for(let oe=0,ge=se.length;oe<ge;oe++)if(Je.isWebGL2){const Ee=se[oe];_t.update(Ee,O),_t.bind(Ee,O)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return O}function st(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Lt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,B,X){Xe.get(T.texture).__webglTexture=B,Xe.get(T.depthTexture).__webglTexture=X;const K=Xe.get(T);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=X===void 0,K.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const X=Xe.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,X=0){C=T,I=B,P=X;let K=!0,$=null,Me=!1,Ie=!1;if(T){const Ke=Xe.get(T);Ke.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(j.FRAMEBUFFER,null),K=!1):Ke.__webglFramebuffer===void 0?A.setupRenderTarget(T):Ke.__hasExternalTextures&&A.rebindTextures(T,Xe.get(T.texture).__webglTexture,Xe.get(T.depthTexture).__webglTexture);const tt=T.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ie=!0);const nt=Xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(nt[B])?$=nt[B][X]:$=nt[B],Me=!0):Je.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?$=Xe.get(T).__webglMultisampledFramebuffer:Array.isArray(nt)?$=nt[X]:$=nt,x.copy(T.viewport),L.copy(T.scissor),ee=T.scissorTest}else x.copy(Z).multiplyScalar(ae).floor(),L.copy(re).multiplyScalar(ae).floor(),ee=he;if(Be.bindFramebuffer(j.FRAMEBUFFER,$)&&Je.drawBuffers&&K&&Be.drawBuffers(T,$),Be.viewport(x),Be.scissor(L),Be.setScissorTest(ee),Me){const Ke=Xe.get(T.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ke.__webglTexture,X)}else if(Ie){const Ke=Xe.get(T.texture),tt=B||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ke.__webglTexture,X||0,tt)}G=-1},this.readRenderTargetPixels=function(T,B,X,K,$,Me,Ie){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Re=Re[Ie]),Re){Be.bindFramebuffer(j.FRAMEBUFFER,Re);try{const Ke=T.texture,tt=Ke.format,nt=Ke.type;if(tt!==Ei&&Le.convert(tt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=nt===ba&&(ze.has("EXT_color_buffer_half_float")||Je.isWebGL2&&ze.has("EXT_color_buffer_float"));if(nt!==Lr&&Le.convert(nt)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===Wi&&(Je.isWebGL2||ze.has("OES_texture_float")||ze.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-K&&X>=0&&X<=T.height-$&&j.readPixels(B,X,K,$,Le.convert(tt),Le.convert(nt),Me)}finally{const Ke=C!==null?Xe.get(C).__webglFramebuffer:null;Be.bindFramebuffer(j.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(T,B,X=0){const K=Math.pow(2,-X),$=Math.floor(B.image.width*K),Me=Math.floor(B.image.height*K);A.setTexture2D(B,0),j.copyTexSubImage2D(j.TEXTURE_2D,X,0,0,T.x,T.y,$,Me),Be.unbindTexture()},this.copyTextureToTexture=function(T,B,X,K=0){const $=B.image.width,Me=B.image.height,Ie=Le.convert(X.format),Re=Le.convert(X.type);A.setTexture2D(X,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,X.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,K,T.x,T.y,$,Me,Ie,Re,B.image.data):B.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,K,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Ie,B.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,K,T.x,T.y,Ie,Re,B.image),K===0&&X.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(T,B,X,K,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=T.max.x-T.min.x+1,Ie=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,Ke=Le.convert(K.format),tt=Le.convert(K.type);let nt;if(K.isData3DTexture)A.setTexture3D(K,0),nt=j.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),nt=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,K.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,K.unpackAlignment);const Ve=j.getParameter(j.UNPACK_ROW_LENGTH),mt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Zt=j.getParameter(j.UNPACK_SKIP_PIXELS),Nt=j.getParameter(j.UNPACK_SKIP_ROWS),Ut=j.getParameter(j.UNPACK_SKIP_IMAGES),bt=X.isCompressedTexture?X.mipmaps[$]:X.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,bt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,bt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,T.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,T.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?j.texSubImage3D(nt,$,B.x,B.y,B.z,Me,Ie,Re,Ke,tt,bt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(nt,$,B.x,B.y,B.z,Me,Ie,Re,Ke,bt.data)):j.texSubImage3D(nt,$,B.x,B.y,B.z,Me,Ie,Re,Ke,tt,bt),j.pixelStorei(j.UNPACK_ROW_LENGTH,Ve),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,mt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Zt),j.pixelStorei(j.UNPACK_SKIP_ROWS,Nt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ut),$===0&&K.generateMipmaps&&j.generateMipmap(nt),Be.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Be.unbindTexture()},this.resetState=function(){I=0,P=0,C=null,Be.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Eh?"display-p3":"srgb",n.unpackColorSpace=kt.workingColorSpace===jc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xn?ss:ly}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ss?xn:Ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Vb extends Ny{}Vb.prototype.isWebGL1Renderer=!0;class Wb extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class jb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=gd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Nr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return os("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new W;class Mc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Nn.fromBufferAttribute(this,n),Nn.applyMatrix4(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nn.fromBufferAttribute(this,n),Nn.applyNormalMatrix(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nn.fromBufferAttribute(this,n),Nn.transformDirection(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Ni(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ni(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ni(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ni(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ni(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ft(n,this.array),i=Ft(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ft(n,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ft(n,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Sn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Sd extends gs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Us;const Wo=new W,Fs=new W,ks=new W,Os=new vt,jo=new vt,Iy=new en,Sl=new W,Xo=new W,Ml=new W,pg=new vt,tf=new vt,mg=new vt;class gg extends un{constructor(e=new Sd){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new Mn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jb(n,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new Mc(i,3,0,!1)),Us.setAttribute("uv",new Mc(i,2,3,!1))}this.geometry=Us,this.material=e,this.center=new vt(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Iy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-ks.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;El(Sl.set(-.5,-.5,0),ks,o,Fs,r,s),El(Xo.set(.5,-.5,0),ks,o,Fs,r,s),El(Ml.set(.5,.5,0),ks,o,Fs,r,s),pg.set(0,0),tf.set(1,0),mg.set(1,1);let a=e.ray.intersectTriangle(Sl,Xo,Ml,!1,Wo);if(a===null&&(El(Xo.set(-.5,.5,0),ks,o,Fs,r,s),tf.set(0,1),a=e.ray.intersectTriangle(Sl,Ml,Xo,!1,Wo),a===null))return;const l=e.ray.origin.distanceTo(Wo);l<e.near||l>e.far||n.push({distance:l,point:Wo.clone(),uv:li.getInterpolation(Wo,Sl,Xo,Ml,pg,tf,mg,new vt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function El(t,e,n,i,r,s){Os.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(jo.x=s*Os.x-r*Os.y,jo.y=r*Os.x+s*Os.y):jo.copy(Os),t.copy(e),t.x+=jo.x,t.y+=jo.y,t.applyMatrix4(Iy)}class ii extends gs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vg=new W,yg=new W,_g=new en,nf=new my,wl=new Xc;class Md extends un{constructor(e=new Mn,n=new ii){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)vg.fromBufferAttribute(n,r-1),yg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=vg.distanceTo(yg);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;_g.copy(r).invert(),nf.copy(e.ray).applyMatrix4(_g);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new W,f=new W,d=new W,h=new W,g=this.isLineSegments?2:1,y=i.index,p=i.attributes.position;if(y!==null){const u=Math.max(0,o.start),m=Math.min(y.count,o.start+o.count);for(let v=u,M=m-1;v<M;v+=g){const I=y.getX(v),P=y.getX(v+1);if(c.fromBufferAttribute(p,I),f.fromBufferAttribute(p,P),nf.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(h);G<e.near||G>e.far||n.push({distance:G,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let v=u,M=m-1;v<M;v+=g){if(c.fromBufferAttribute(p,v),f.fromBufferAttribute(p,v+1),nf.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||n.push({distance:P,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const xg=new W,Sg=new W;class aa extends Md{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)xg.fromBufferAttribute(n,r),Sg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xg.distanceTo(Sg);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mg extends kn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Tl=new W,Al=new W,rf=new W,bl=new li;class Xb extends Mn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Gl*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},g=[];for(let y=0;y<l;y+=3){o?(c[0]=o.getX(y),c[1]=o.getX(y+1),c[2]=o.getX(y+2)):(c[0]=y,c[1]=y+1,c[2]=y+2);const{a:_,b:p,c:u}=bl;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),bl.getNormal(rf),d[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let m=0;m<3;m++){const v=(m+1)%3,M=d[m],I=d[v],P=bl[f[m]],C=bl[f[v]],G=`${M}_${I}`,ne=`${I}_${M}`;ne in h&&h[ne]?(rf.dot(h[ne].normal)<=s&&(g.push(P.x,P.y,P.z),g.push(C.x,C.y,C.z)),h[ne]=null):G in h||(h[G]={index0:c[m],index1:c[v],normal:rf.clone()})}}for(const y in h)if(h[y]){const{index0:_,index1:p}=h[y];Tl.fromBufferAttribute(a,_),Al.fromBufferAttribute(a,p),g.push(Tl.x,Tl.y,Tl.z),g.push(Al.x,Al.y,Al.z)}this.setAttribute("position",new wn(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ah extends Mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new W,h=new W,g=[],y=[],_=[],p=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let I=0;I<=n;I++){const P=I/n;d.x=-e*Math.cos(r+P*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+P*s)*Math.sin(o+v*a),y.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),p.push(P+M,1-v),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=f[u][m+1],M=f[u][m],I=f[u+1][m],P=f[u+1][m+1];(u!==0||o>0)&&g.push(v,M,P),(u!==i-1||l<Math.PI)&&g.push(M,I,P)}this.setIndex(g),this.setAttribute("position",new wn(y,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wr extends gs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cy,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bh extends un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class $b extends bh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const sf=new en,Eg=new W,wg=new W;class Yb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Eg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Eg),wg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wg),n.updateMatrixWorld(),sf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qb extends Yb{constructor(){super(new Ty(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tg extends bh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new qb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kb extends bh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zb extends aa{constructor(e=10,n=10,i=4473924,r=8947848){i=new pt(i),r=new pt(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,g=0,y=-a;h<=n;h++,y+=o){l.push(-a,0,y,a,0,y),l.push(y,0,-a,y,0,a);const _=h===s?i:r;_.toArray(c,g),g+=3,_.toArray(c,g),g+=3,_.toArray(c,g),g+=3,_.toArray(c,g),g+=3}const f=new Mn;f.setAttribute("position",new wn(l,3)),f.setAttribute("color",new wn(c,3));const d=new ii({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Qb extends aa{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Mn;r.setAttribute("position",new wn(n,3)),r.setAttribute("color",new wn(i,3));const s=new ii({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new pt,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);function of(t,e,n){return t<e?e:t>n?n:t}function Jb(t){const e=F.useRef(null),n=F.useRef([]),i=F.useRef(null),r=F.useRef(0),s=F.useRef(null),o=F.useRef({enabled:!0,scale:1,background:!0}),a=F.useRef(!0),l=F.useRef(null),c=F.useRef([]),f=F.useRef([]),d=F.useRef(null),h=F.useRef([]),g=F.useRef({markers:!0,trail:!0,death:!0,ping:!0,terrain:!0,towns:!0});return F.useEffect(()=>{n.current=t.players,g.current.markers=!0},[t.players]),F.useEffect(()=>{i.current=t.focusTarget},[t.focusTarget]),F.useEffect(()=>{r.current=t.focusNonce},[t.focusNonce]),F.useEffect(()=>{s.current=typeof t.followPlayerId=="number"?t.followPlayerId:null},[t.followPlayerId]),F.useEffect(()=>{o.current=t.nameTags||{enabled:!0,scale:1,background:!0},g.current.markers=!0},[t.nameTags]),F.useEffect(()=>{a.current=t.showAimLines!==!1,g.current.markers=!0},[t.showAimLines]),F.useEffect(()=>{l.current=t.trail||null,g.current.trail=!0},[t.trail]),F.useEffect(()=>{c.current=Array.isArray(t.deathMarkers)?t.deathMarkers:[],g.current.death=!0},[t.deathMarkers]),F.useEffect(()=>{f.current=Array.isArray(t.pingMarkers)?t.pingMarkers:[],g.current.ping=!0},[t.pingMarkers]),F.useEffect(()=>{d.current=t.terrain||null,g.current.terrain=!0},[t.terrain]),F.useEffect(()=>{h.current=Array.isArray(t.towns)?t.towns:[],g.current.towns=!0},[t.towns]),F.useEffect(()=>{const y=e.current;if(!y)return;const _=y,p=new Ny({canvas:_,antialias:!0,powerPreference:"high-performance"});p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),p.shadowMap.enabled=!1;const u=new Wb;u.background=new pt(724761);const m=new oi(70,1,.1,2e4);m.position.set(0,25,60);const v=new Kb(16777215,.28);u.add(v);const M=new $b(9418495,724761,.35);u.add(M);const I=new Tg(16777215,1.15);I.position.set(150,260,130),I.castShadow=!1,u.add(I);const P=new Tg(16777215,.35);P.position.set(-180,160,-120),u.add(P);const C=new Zb(2e3,200,3293278,1910328);u.add(C);const G=new Qb(10);u.add(G);const ne=new Pi;u.add(ne);const x=new Pi;u.add(x);const L=new Pi;u.add(L);const ee=new Pi;u.add(ee);const ue=new Pi;u.add(ue);const z=new Pi;u.add(z);const te=new Ah(.4,16,12),Q=new Wr({color:16366681}),ae=new Wr({color:16757322}),H=new Wr({color:9081766}),Y=new Wr({color:2795519,emissive:731972,emissiveIntensity:.9}),Z=new Wr({color:11818495,emissive:2752575,emissiveIntensity:.9}),re=new ii({color:16366681,transparent:!0,opacity:.8}),he=new ii({color:16757322,transparent:!0,opacity:.8}),Ze=new ii({color:9081766,transparent:!0,opacity:.7}),J=new ii({color:2795519,transparent:!0,opacity:.95}),le=new ii({color:11818495,transparent:!0,opacity:.95}),Ae=new ii({color:16366681,transparent:!0,opacity:.35}),Fe=new ii({color:16730698,transparent:!0,opacity:.9}),Qe=new ii({color:16366681,transparent:!0,opacity:.95}),Oe=new Wr({vertexColors:!0,roughness:1,metalness:0,side:Si,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),yt=new ii({color:15134195,transparent:!0,opacity:.55}),qe=new Map,j=new Map,Wt=new Map,ze=new Map,Je=new Map,Be=new Map;let ct=null,Xe=null,A=null,w="",q=null;function ye(ie){const De=ie.material;De.map&&De.map.dispose(),De.dispose()}function fe(){const ie=h.current;if(ie===q)return;q=ie;for(const xe of Wt.values())ye(xe),ue.remove(xe);if(Wt.clear(),!ie||ie.length===0)return;const De={scale:2.8,background:!1},be=xe=>/^type:\s*\d+\s*$/i.test(xe.trim()),Se=xe=>{let He=(xe||"").trim();return He=He.replace(/^#AR-MapLocation_/i,""),He=He.replace(/_/g," ").trim(),He};for(const xe of ie){if(!xe||typeof xe.name!="string"||!xe.name)continue;const He=Se(xe.name);if(!He||be(He))continue;const Ye=xe.pos;if(!Ye||!Number.isFinite(Ye.x)||!Number.isFinite(Ye.y)||!Number.isFinite(Ye.z))continue;const ht=ke(He,De);we(ht,De),ht.frustumCulled=!1,ht.material.depthWrite=!1,ht.position.set(Ye.x,Ye.y+5,Ye.z),ue.add(ht);const st=Math.round(Ye.x),Lt=Math.round(Ye.z),T=`${He}|${st}|${Lt}`;Wt.set(T,ht)}}let ce=null;function ke(ie,De){const be=document.createElement("canvas"),Se=be.getContext("2d");if(!Se){const Me=new Mg(document.createElement("canvas")),Ie=new Sd({map:Me,transparent:!0});return new gg(Ie)}const xe=16;Se.font=`600 ${xe}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;const He=10,Ye=6,ht=Se.measureText(ie),st=Math.ceil(ht.width),Lt=Math.max(8,st+He*2),T=xe+Ye*2,B=2;if(be.width=Lt*B,be.height=T*B,Se.setTransform(B,0,0,B,0,0),Se.clearRect(0,0,Lt,T),De.background){Se.fillStyle="rgba(0,0,0,0.55)";const Me=6;Se.beginPath(),Se.moveTo(Me,0),Se.lineTo(Lt-Me,0),Se.quadraticCurveTo(Lt,0,Lt,Me),Se.lineTo(Lt,T-Me),Se.quadraticCurveTo(Lt,T,Lt-Me,T),Se.lineTo(Me,T),Se.quadraticCurveTo(0,T,0,T-Me),Se.lineTo(0,Me),Se.quadraticCurveTo(0,0,Me,0),Se.closePath(),Se.fill()}Se.font=`600 ${xe}px system-ui, -apple-system, Segoe UI, Roboto, Arial`,Se.fillStyle="rgba(255,255,255,0.95)",Se.textBaseline="middle",Se.fillText(ie,He,Math.floor(T/2));const X=new Mg(be);X.needsUpdate=!0;const K=new Sd({map:X,transparent:!0,depthTest:!1}),$=new gg(K);return $.userData={canvas:be,texture:X,text:ie},$.center.set(.5,0),$}function we(ie,De){const Se=ie.material.map,xe=Se&&Se.image;if(!xe||!xe.width||!xe.height){ie.scale.set(2.5*De.scale,.8*De.scale,1);return}const He=xe.width/xe.height,Ye=.85*De.scale,ht=Ye*He;ie.scale.set(ht,Ye,1)}function Pe(ie,De,be){const Se=ie.userData;if(Se&&Se.text===De){we(ie,be);return}const xe=ie.material,He=xe.map;He&&He.dispose(),xe.dispose();const Ye=ke(De,be);ie.material=Ye.material,ie.userData=Ye.userData,we(ie,be)}const pe={rmbDown:!1,pointerLocked:!1,yaw:0,pitch:0,speed:20,keys:Object.create(null)};let ot=0;function de(){const ie=_.clientWidth,De=_.clientHeight;p.setSize(ie,De,!1),m.aspect=ie/De,m.updateProjectionMatrix()}const wt=new ResizeObserver(()=>de());wt.observe(_),de();function it(){const ie=new Set,De=o.current,be=a.current,Se=n.current;for(const xe of Se){ie.add(xe.playerId);let He=qe.get(xe.playerId);if(!He){He=new ui(te,Q),He.castShadow=!1,He.receiveShadow=!1,He.userData={playerId:xe.playerId},qe.set(xe.playerId,He),ne.add(He);const X=ke(xe.label||String(xe.playerId),De);X.position.set(0,1.2,0),we(X,De),j.set(xe.playerId,X),He.add(X);const K=new Mn,$=new Float32Array(6);K.setAttribute("position",new Sn($,3));const Me=new Md(K,re);ze.set(xe.playerId,Me),ne.add(Me)}const Ye=!!xe.isDead,ht=!!xe.inVehicle,st=xe.highlight||null,Lt=st==="killer"?Y:st==="victim"?Z:Ye?H:ht?ae:Q;He.material!==Lt&&(He.material=Lt),He.position.set(xe.pos.x,xe.pos.y,xe.pos.z);const T=j.get(xe.playerId);T&&(T.visible=De.enabled,De.enabled&&Pe(T,xe.label||String(xe.playerId),De));const B=ze.get(xe.playerId);if(B){if(B.visible=be,!be)continue;const X=st==="killer"?J:st==="victim"?le:Ye?Ze:ht?he:re;B.material!==X&&(B.material=X);const K=xe.aimDir,$=B.geometry.getAttribute("position");if(!K)$.setXYZ(0,xe.pos.x,xe.pos.y,xe.pos.z),$.setXYZ(1,xe.pos.x,xe.pos.y,xe.pos.z),$.needsUpdate=!0;else{const Me=K.x,Ie=K.y,Re=K.z,Ke=Math.max(1e-4,Math.sqrt(Me*Me+Ie*Ie+Re*Re)),tt=Me/Ke,nt=Ie/Ke,Ve=Re/Ke,mt=6,Zt=xe.pos.x,Nt=xe.pos.y+.6,Ut=xe.pos.z,bt=Zt+tt*mt,at=Nt+nt*mt,qt=Ut+Ve*mt;$.setXYZ(0,Zt,Nt,Ut),$.setXYZ(1,bt,at,qt),$.needsUpdate=!0}}}for(const[xe,He]of qe){if(ie.has(xe))continue;ne.remove(He),qe.delete(xe);const Ye=j.get(xe);if(Ye){He.remove(Ye);const st=Ye.material;st.map&&st.map.dispose(),st.dispose(),j.delete(xe)}const ht=ze.get(xe);ht&&(ne.remove(ht),ht.geometry.dispose(),ze.delete(xe))}}function et(){const ie=l.current;if(!ie||!Array.isArray(ie.points)||ie.points.length<2){ce&&(x.remove(ce),ce.geometry.dispose(),ce=null);return}const De=ie.points,be=new Float32Array(De.length*3);for(let Se=0;Se<De.length;Se++)be[Se*3+0]=De[Se].x,be[Se*3+1]=De[Se].y+.15,be[Se*3+2]=De[Se].z;if(ce){const Se=ce.geometry;Se.setAttribute("position",new Sn(be,3)),Se.getAttribute("position").needsUpdate=!0,Se.computeBoundingSphere()}else{const Se=new Mn;Se.setAttribute("position",new Sn(be,3)),ce=new Md(Se,Ae),x.add(ce)}}function Ge(){const ie=c.current,De=new Set;for(let be=0;be<ie.length;be++){const Se=ie[be],xe=`${Math.round(Se.x*10)}|${Math.round(Se.y*10)}|${Math.round(Se.z*10)}|${be}`;De.add(xe);let He=Je.get(xe);if(!He){const ht=new Mn,st=new Float32Array([-1.2,0,-1.2,1.2,0,1.2,-1.2,0,1.2,1.2,0,-1.2]);ht.setAttribute("position",new Sn(st,3)),He=new aa(ht,Fe),Je.set(xe,He),L.add(He)}He.position.set(Se.x,Se.y+.1,Se.z)}for(const[be,Se]of Je)De.has(be)||(L.remove(Se),Se.geometry.dispose(),Je.delete(be))}function Le(){const ie=f.current,De=new Set;for(let be=0;be<ie.length;be++){const Se=ie[be],xe=`${Math.round(Se.x*10)}|${Math.round(Se.y*10)}|${Math.round(Se.z*10)}|${be}`;De.add(xe);let He=Be.get(xe);if(!He){const ht=new Mn,st=new Float32Array([-1.8,0,-1.8,1.8,0,1.8,-1.8,0,1.8,1.8,0,-1.8]);ht.setAttribute("position",new Sn(st,3)),He=new aa(ht,Qe),Be.set(xe,He),ee.add(He)}He.position.set(Se.x,Se.y+.15,Se.z)}for(const[be,Se]of Be)De.has(be)||(ee.remove(Se),Se.geometry.dispose(),Be.delete(be))}function dt(){const ie=new hs().setFromAxisAngle(new W(0,1,0),pe.yaw),De=new hs().setFromAxisAngle(new W(1,0,0),pe.pitch);m.quaternion.copy(ie).multiply(De)}function _t(ie){ie.preventDefault()}function Pt(ie){ie.button===2&&(pe.rmbDown=!0,document.pointerLockElement!==_&&_.requestPointerLock())}function rt(ie){ie.button===2&&(pe.rmbDown=!1,document.pointerLockElement===_&&document.exitPointerLock())}function Tt(){if(pe.pointerLocked=document.pointerLockElement===_,pe.pointerLocked){const ie=new Da().setFromQuaternion(m.quaternion,"YXZ");pe.yaw=ie.y,pe.pitch=ie.x}}function R(ie){if(!pe.pointerLocked)return;const De=ie.movementX||0,be=ie.movementY||0;pe.yaw-=De*.002,pe.pitch-=be*.002,pe.pitch=of(pe.pitch,-Math.PI/2+.01,Math.PI/2-.01)}function ve(ie){if(typeof s.current=="number"){const xe=ie.deltaY<0?.9:1.1,He=Ce.clone().multiplyScalar(xe),Ye=He.length(),ht=of(Ye,6,800);Ye>1e-4&&He.multiplyScalar(ht/Ye),Ce.copy(He);return}const be=ie.deltaY<0?1:-1,Se=pe.speed+be*Math.max(1,pe.speed*.1);pe.speed=of(Se,1,400)}function me(ie){pe.keys[ie.code]=!0}function Ne(ie){pe.keys[ie.code]=!1}function $e(){const ie=d.current;if(!ie){C.visible=!0,ct&&(ct.geometry.dispose(),z.remove(ct),ct=null,w=""),Xe&&(Xe.geometry.dispose(),z.remove(Xe),Xe=null),A&&(A.geometry.dispose(),A.material.dispose(),z.remove(A),A=null);return}C.visible=!1;const De=`${ie.gridW}x${ie.gridH}|${ie.bbMin.x},${ie.bbMin.y},${ie.bbMin.z}|${ie.bbMax.x},${ie.bbMax.y},${ie.bbMax.z}|${ie.heights.length}`;if(De===w)return;w=De,ct&&(ct.geometry.dispose(),z.remove(ct),ct=null),Xe&&(Xe.geometry.dispose(),z.remove(Xe),Xe=null),A&&(A.geometry.dispose(),A.material.dispose(),z.remove(A),A=null);const be=Math.max(2,Math.floor(ie.gridW)),Se=Math.max(2,Math.floor(ie.gridH)),xe=be*Se;if(!Array.isArray(ie.heights)||ie.heights.length<xe)return;const He=ie.bbMax.x-ie.bbMin.x,Ye=ie.bbMax.z-ie.bbMin.z;if(!Number.isFinite(He)||!Number.isFinite(Ye)||He<=0||Ye<=0)return;const ht=new So(He,Ye,be-1,Se-1);ht.rotateX(-Math.PI/2);const st=ht.attributes.position;let Lt=1/0,T=-1/0;for(let Ve=0;Ve<xe;Ve++){const mt=ie.heights[Ve];typeof mt!="number"||!Number.isFinite(mt)||(mt<Lt&&(Lt=mt),mt>T&&(T=mt))}(!Number.isFinite(Lt)||!Number.isFinite(T)||T-Lt<.001)&&(Lt=0,T=1);const B=T-Lt,X=new Float32Array(xe*3),K=new pt(988708),$=new pt(1910328),Me=new pt(3293278),Ie=0,Re=new pt(735846);for(let Ve=0;Ve<Se;Ve++){const mt=Ve,Zt=Ve;for(let Nt=0;Nt<be;Nt++){const Ut=Nt+be*mt,bt=Nt+be*Zt,at=ie.heights[Ut];st.setY(bt,at);let qt=(at-Lt)/B;Number.isFinite(qt)||(qt=0),qt=Math.min(1,Math.max(0,qt)),qt=Math.pow(qt,.65);const S=qt<.5?K.clone().lerp($,qt/.5):$.clone().lerp(Me,(qt-.5)/.5);Number.isFinite(at)&&at<Ie&&S.lerp(Re,.28),X[bt*3+0]=S.r,X[bt*3+1]=S.g,X[bt*3+2]=S.b}}st.needsUpdate=!0,ht.setAttribute("color",new Sn(X,3)),ht.computeVertexNormals(),ct=new ui(ht,Oe),ct.receiveShadow=!1,ct.castShadow=!1;const Ke=(ie.bbMin.x+ie.bbMax.x)/2,tt=(ie.bbMin.z+ie.bbMax.z)/2;if(ct.position.set(Ke,0,tt),z.add(ct),Lt<Ie&&T>Ie){const Ve=new So(He,Ye,1,1);Ve.rotateX(-Math.PI/2);const mt=new Wr({color:1732264,transparent:!0,opacity:.26,roughness:.15,metalness:0,side:Si,depthWrite:!1});A=new ui(Ve,mt),A.receiveShadow=!1,A.castShadow=!1,A.position.set(Ke,Ie,tt),z.add(A)}const nt=new Xb(ht,35);Xe=new aa(nt,yt),Xe.position.copy(ct.position),z.add(Xe)}_.addEventListener("contextmenu",_t),_.addEventListener("mousedown",Pt),window.addEventListener("mouseup",rt),document.addEventListener("pointerlockchange",Tt),window.addEventListener("mousemove",R),_.addEventListener("wheel",ve,{passive:!0}),window.addEventListener("keydown",me),window.addEventListener("keyup",Ne);let St=performance.now(),Et=0,zt=0,nn=0,At=null;const Ce=new W(0,25,60);function hn(ie){const De=Math.min((ie-St)/1e3,.05);St=ie;const be=g.current;be.towns&&(fe(),be.towns=!1),be.markers&&ie-zt>=50&&(it(),be.markers=!1,zt=ie),be.trail&&ie-nn>=75&&(et(),be.trail=!1,nn=ie),be.death&&(Ge(),be.death=!1),be.ping&&(Le(),be.ping=!1),be.terrain&&($e(),be.terrain=!1);const Se=s.current;if(typeof Se=="number"){const ht=n.current.find(st=>st&&st.playerId===Se);if(ht){const st=ht.pos;if(Se!==At){Ce.set(m.position.x-st.x,m.position.y-st.y,m.position.z-st.z);const T=Ce.length();(!Number.isFinite(Ce.x)||!Number.isFinite(Ce.y)||!Number.isFinite(Ce.z)||!Number.isFinite(T)||T<1||T>500)&&Ce.set(0,25,60),At=Se}if(m.position.set(st.x+Ce.x,st.y+Ce.y,st.z+Ce.z),m.lookAt(st.x,st.y+1.5,st.z),pe.rmbDown||pe.pointerLocked){const T=new W(0,0,-1).applyQuaternion(m.quaternion),B=new W(1,0,0).applyQuaternion(m.quaternion),X=new W(0,1,0);pe.keys.KeyW&&Ce.addScaledVector(T,pe.speed*De),pe.keys.KeyS&&Ce.addScaledVector(T,-pe.speed*De),pe.keys.KeyA&&Ce.addScaledVector(B,-pe.speed*De),pe.keys.KeyD&&Ce.addScaledVector(B,pe.speed*De),pe.keys.KeyQ&&Ce.addScaledVector(X,pe.speed*De),pe.keys.KeyZ&&Ce.addScaledVector(X,-pe.speed*De)}m.position.set(st.x+Ce.x,st.y+Ce.y,st.z+Ce.z),m.lookAt(st.x,st.y+1.5,st.z)}}else At=null;const xe=r.current;if(Se===null&&xe!==ot){ot=xe;const Ye=i.current;Ye&&(m.position.set(Ye.x,Ye.y+25,Ye.z+60),m.lookAt(Ye.x,Ye.y+1.5,Ye.z))}if(pe.pointerLocked&&Se===null&&dt(),(pe.rmbDown||pe.pointerLocked)&&Se===null){const Ye=new W(0,0,-1).applyQuaternion(m.quaternion),ht=new W(1,0,0).applyQuaternion(m.quaternion),st=new W(0,1,0);pe.keys.KeyW&&m.position.addScaledVector(Ye,pe.speed*De),pe.keys.KeyS&&m.position.addScaledVector(Ye,-pe.speed*De),pe.keys.KeyA&&m.position.addScaledVector(ht,-pe.speed*De),pe.keys.KeyD&&m.position.addScaledVector(ht,pe.speed*De),pe.keys.KeyQ&&m.position.addScaledVector(st,pe.speed*De),pe.keys.KeyZ&&m.position.addScaledVector(st,-pe.speed*De)}p.render(u,m),Et=window.requestAnimationFrame(hn)}return Et=window.requestAnimationFrame(hn),()=>{window.cancelAnimationFrame(Et),_.removeEventListener("contextmenu",_t),_.removeEventListener("mousedown",Pt),window.removeEventListener("mouseup",rt),document.removeEventListener("pointerlockchange",Tt),window.removeEventListener("mousemove",R),_.removeEventListener("wheel",ve),window.removeEventListener("keydown",me),window.removeEventListener("keyup",Ne),wt.disconnect(),te.dispose(),Q.dispose(),ae.dispose(),H.dispose(),Y.dispose(),Z.dispose(),re.dispose(),he.dispose(),Ze.dispose(),J.dispose(),le.dispose(),Ae.dispose(),Fe.dispose(),Qe.dispose(),Oe.dispose(),yt.dispose(),ce&&(ce.geometry.dispose(),ce=null),ct&&(ct.geometry.dispose(),ct=null),Xe&&(Xe.geometry.dispose(),Xe=null);for(const ie of Je.values())ie.geometry.dispose();for(const ie of Be.values())ie.geometry.dispose();p.dispose()}},[]),E.jsx("div",{style:{width:"100%",height:"100%",minHeight:400,position:"relative"},children:E.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block",borderRadius:8}})})}function mn(t){if(!t)return null;if(typeof t=="object"){if(Array.isArray(t)){if(t.length<3)return null;const r=t[0],s=t[1],o=t[2];return typeof r!="number"||typeof s!="number"||typeof o!="number"?null:{x:r,y:s,z:o}}const e=t.x,n=t.y,i=t.z;return typeof e!="number"||typeof n!="number"||typeof i!="number"?null:{x:e,y:n,z:i}}if(typeof t=="string"){const e=t.trim().split(/\s+/g);if(e.length<3)return null;const n=Number(e[0]),i=Number(e[1]),r=Number(e[2]);return!Number.isFinite(n)||!Number.isFinite(i)||!Number.isFinite(r)?null:{x:n,y:i,z:r}}return null}function $o(t,e=30){return!t||typeof t.x!="number"||typeof t.z!="number"?!0:Math.abs(t.x)<=e&&Math.abs(t.z)<=e}function af(t,e,n){if(!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(n))return t;const i=Math.max(0,Math.min(1,n));return t+(e-t)*i}function eC(t,e,n){return{x:af(t.x,e.x,n),y:af(t.y,e.y,n),z:af(t.z,e.z,n)}}function lf(t){if(!t)return null;const e=mn(t.bbMin),n=mn(t.bbMax),i=typeof t.gridW=="number"?t.gridW:0,r=typeof t.gridH=="number"?t.gridH:0,s=Array.isArray(t.heights)?t.heights.filter(o=>typeof o=="number"):[];return e&&n&&i>=2&&r>=2&&s.length>=i*r?{bbMin:e,bbMax:n,gridW:i,gridH:r,heights:s}:null}function cf(t){if(!t)return null;const e=Array.isArray(t.descriptors)?t.descriptors:Array.isArray(t.towns)?t.towns:[];if(e.length===0)return null;const n=[];for(const i of e){if(!i)continue;const r=typeof i.name=="string"?i.name.trim():"",s=typeof i.type=="string"?i.type.trim():"",o=typeof i.baseType=="number"?i.baseType:null,a=r||s||(o!==null?`type:${o}`:"descriptor"),l=mn(i.pos);l&&n.push({name:a,pos:l})}return n.length===0?null:n}function Ag(t,e,n){if(!t||!t.bbMin||!t.bbMax||!Array.isArray(t.heights))return null;const i=Math.floor(t.gridW),r=Math.floor(t.gridH);if(i<2||r<2||t.heights.length<i*r)return null;const s=t.bbMin.x,o=t.bbMax.x,a=t.bbMin.z,l=t.bbMax.z,c=o-s,f=l-a;if(!Number.isFinite(c)||!Number.isFinite(f)||c<=0||f<=0)return null;const d=(e-s)/c,h=(n-a)/f;if(!Number.isFinite(d)||!Number.isFinite(h)||d<0||d>1||h<0||h>1)return null;const g=d*(i-1),y=h*(r-1),_=Math.floor(g),p=Math.floor(y),u=Math.min(i-1,_+1),m=Math.min(r-1,p+1),v=g-_,M=y-p,I=_+i*p,P=u+i*p,C=_+i*m,G=u+i*m,ne=t.heights[I],x=t.heights[P],L=t.heights[C],ee=t.heights[G];if(![ne,x,L,ee].every(te=>typeof te=="number"&&Number.isFinite(te)))return null;const ue=ne*(1-v)+x*v,z=L*(1-v)+ee*v;return ue*(1-M)+z*M}function tC(t){const e=ir();return F.useMemo(()=>{const i=new URLSearchParams(e.search).get(t);return i||null},[e.search,t])}function Cl(t){const e=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,n=Math.floor(e/1e3),i=Math.floor(n/3600),r=Math.floor(n%3600/60),s=n%60,o=String(i).padStart(2,"0"),a=String(r).padStart(2,"0"),l=String(s).padStart(2,"0");return`${o}:${a}:${l}`}function uf(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function nC(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function iC(t,e){if(!Array.isArray(t)||t.length===0)return[];const n=new Map;for(const r of t){const s=e(r).trim();s&&n.set(s,(n.get(s)||0)+1)}const i=Array.from(n.entries()).map(([r,s])=>({name:r,count:s}));return i.sort((r,s)=>s.count-r.count||r.name.localeCompare(s.name)),i}function Ec(t){const e=t.payload;return e&&typeof e.tsMs=="number"?e.tsMs:null}function zs(t){const e=t.payload;return`${t.receivedAt}|${e&&e.tsMs}|${e&&e.type}`}function ff(t,e,n){if(!Number.isFinite(e)||e<=0)return[];if(t.length<=e)return t;if(typeof n!="number"||!Number.isFinite(n))return t.slice(t.length-e);const i=Ec(t[0]),r=Ec(t[t.length-1]);if(typeof i!="number"||typeof r!="number")return t.slice(t.length-e);const s=Math.abs(n-i),o=Math.abs(r-n),a=t.length-e;return s>o?t.slice(a):t.slice(0,t.length-a)}function rC(){const t=tC("serverId"),[e,n]=F.useState([]),[i,r]=F.useState(""),[s,o]=F.useState(null),[a,l]=F.useState(null),[c,f]=F.useState(null),[d,h]=F.useState(!1),[g,y]=F.useState(!0),[_,p]=F.useState({minTsMs:null,maxTsMs:null}),[u,m]=F.useState(null),[v,M]=F.useState(null),[I,P]=F.useState(null),[C,G]=F.useState([]),[ne,x]=F.useState(""),[L,ee]=F.useState(null),[ue,z]=F.useState(null),[te,Q]=F.useState(0),[ae,H]=F.useState(!0),[Y,Z]=F.useState("players"),[re,he]=F.useState(!1),[Ze,J]=F.useState(!0),[le,Ae]=F.useState(null),[Fe,Qe]=F.useState(null),Oe=F.useRef(new Map),[yt,qe]=F.useState(!1),[j,Wt]=F.useState(1),ze=F.useRef(null),[Je,Be]=F.useState(!0),[ct,Xe]=F.useState(1),[A,w]=F.useState(!0),[q,ye]=F.useState(!0),[fe,ce]=F.useState(!0),[ke,we]=F.useState(!0),[Pe,pe]=F.useState(!0),[ot,de]=F.useState(20),[wt,it]=F.useState([]),et=F.useRef(0),Ge=F.useRef(null),[Le,dt]=F.useState(()=>{try{const S=window.localStorage.getItem("replay.eventClickOffsetSeconds"),O=S!==null?Number(S):5;return Number.isFinite(O)?Math.max(0,Math.min(60,Math.floor(O))):5}catch{return 5}}),[_t,Pt]=F.useState(null),[rt,Tt]=F.useState(null),[R,ve]=F.useState([]),me=F.useRef(null),Ne=F.useRef(!1),$e=F.useRef(null),St=F.useRef(0),Et=F.useRef(0),zt=F.useRef(!1),nn=F.useRef(!1),At=F.useRef(new Map);F.useEffect(()=>{t&&t.length>0&&r(t)},[t]),F.useEffect(()=>{ze.current=u},[u]),F.useEffect(()=>{$e.current=null,St.current=0,Et.current=0},[i]),F.useEffect(()=>{try{window.localStorage.setItem("replay.eventClickOffsetSeconds",String(Le))}catch{}},[Le]),F.useEffect(()=>{function S(O){O.code==="KeyF"&&rt!==null&&Tt(null)}return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[rt]),F.useEffect(()=>{let S=!1;async function O(){try{const D=await EM();if(S)return;n(D)}catch(D){if(S)return;const b=D instanceof Error?D.message:"Failed to load servers";f(b)}}return O(),()=>{S=!0}},[]),F.useEffect(()=>{let S=!1;async function O(){try{const b=await cd();if(S)return;o(b),l(null)}catch(b){if(S)return;const V=b instanceof Error?b.message:"Failed to load server status";l(V)}}O();const D=window.setInterval(O,15e3);return()=>{S=!0,window.clearInterval(D)}},[]);const Ce=i.length>0?i:null;F.useEffect(()=>{M(null),P(null)},[Ce]),F.useEffect(()=>{if(!Ce)return;const S=Ce;let O=!1;async function D(){h(!0),f(null);try{const[b,V,U,N]=await Promise.all([jp(S),Xp(S),Mu(S).catch(()=>null),Eu(S).catch(()=>null)]);if(O)return;p({minTsMs:b.minTsMs,maxTsMs:b.maxTsMs}),G(V);const k=lf(U);k&&M(k);const se=cf(N);if(se&&P(se),typeof b.maxTsMs=="number"){m(b.maxTsMs);const oe=await Ja({serverId:S,untilTsMs:b.maxTsMs,limit:5e3,tail:!0}).catch(()=>[]);if(!O){ve(oe);let ge=null;for(const Ee of oe){const We=Ee.payload;We&&typeof We.tsMs=="number"&&(ge===null||We.tsMs>ge)&&(ge=We.tsMs)}me.current=ge!==null?ge:Math.max(0,b.maxTsMs-15e3)}}et.current=Date.now(),Ge.current=null,qe(!1)}catch(b){if(O)return;const V=b instanceof Error?b.message:"Failed to load replay data";f(V)}finally{O||h(!1)}}return D(),()=>{O=!0}},[Ce]),F.useEffect(()=>{if(!Ce||v||zt.current||!R.some(D=>{const b=D.payload;return b&&(b.type==="map"||b.type==="terrain")}))return;let O=!1;return zt.current=!0,Mu(Ce).then(D=>{if(O)return;const b=lf(D);b&&M(b)}).catch(()=>{}).finally(()=>{zt.current=!1}),()=>{O=!0}},[R,Ce,v]),F.useEffect(()=>{if(!Ce||I||nn.current||!R.some(D=>{const b=D.payload;return b&&(b.type==="map"||b.type==="terrain"||b.type==="towns"||b.type==="descriptors")}))return;let O=!1;return nn.current=!0,Eu(Ce).then(D=>{if(O)return;const b=cf(D);b&&P(b)}).catch(()=>{}).finally(()=>{nn.current=!1}),()=>{O=!0}},[R,Ce,I]),F.useEffect(()=>{if(!Ce||g||!yt||typeof _.maxTsMs!="number")return;let S=0,O=performance.now();function D(b){const V=Math.min(250,Math.max(0,b-O));O=b;const U=ze.current;if(typeof U=="number"){const N=_.maxTsMs;let k=U+V*j;k>=N&&(k=N,qe(!1)),ze.current=k,m(k)}S=window.requestAnimationFrame(D)}return S=window.requestAnimationFrame(D),()=>window.cancelAnimationFrame(S)},[yt,g,j,_.maxTsMs,Ce]),F.useEffect(()=>{if(!Ce)return;const S=Ce;let O=!1,D=null;async function b(){try{const V=await Xp(S);O||G(V)}catch{}O||(D=window.setTimeout(b,g?3e3:5e3))}return b(),()=>{O=!0,D!==null&&window.clearTimeout(D)}},[g,Ce]),F.useEffect(()=>{if(!Ce)return;const S=Ce;let O=!1,D=null;async function b(){try{const V=await jp(S);if(O)return;const U=me.current;typeof U=="number"&&typeof V.maxTsMs=="number"&&V.maxTsMs+1e3<U&&(me.current=null,et.current=Date.now(),ve([{receivedAt:Date.now(),payload:{type:"restart",tsMs:V.maxTsMs,event:{reason:"server_restart_or_history_cleared"}}}]),it([]),qe(!1),zt.current=!1,Mu(S).then(N=>{if(O)return;const k=lf(N);k&&M(k)}).catch(()=>{}),nn.current=!1,Eu(S).then(N=>{if(O)return;const k=cf(N);k&&P(k)}).catch(()=>{})),p({minTsMs:V.minTsMs,maxTsMs:V.maxTsMs}),g&&typeof V.maxTsMs=="number"&&m(V.maxTsMs)}catch{}O||(D=window.setTimeout(b,g?2e3:3e3))}return b(),()=>{O=!0,D!==null&&window.clearTimeout(D)}},[g,Ce]),F.useEffect(()=>{if(!Ce)return;const S=Ce;let O=!1,D=null;async function b(){const V=_.maxTsMs;if(typeof V!="number"){O||(D=window.setTimeout(b,1e3));return}const U=me.current,N=typeof U=="number"?U+1:Math.max(0,V-8e3);try{let oe=N;const ge=[];let Ee=typeof me.current=="number"?me.current:null;for(let We=0;We<2;We++){const lt=await Ja({serverId:S,sinceTsMs:oe,untilTsMs:V,limit:1500});ge.push(...lt);let je=null;for(const ut of lt){const ft=Ec(ut);ft!==null&&((je===null||ft>je)&&(je=ft),(Ee===null||ft>Ee)&&(Ee=ft))}if(lt.length<1500||je===null||je>=V)break;oe=je+1}if(O)return;ge.length>0&&ve(We=>{const lt=We.slice(-500),je=new Set;for(const ft of lt)je.add(zs(ft));const ut=We.slice();for(const ft of ge){const Qt=zs(ft);je.has(Qt)||ut.push(ft)}return ff(ut,25e4,ze.current)}),typeof Ee=="number"&&(me.current=Ee)}catch(k){if(!O){const se=k instanceof Error?k.message:"Failed to fetch replay events";f(se)}}O||(D=window.setTimeout(b,g?1e3:1500))}return b(),()=>{O=!0,D!==null&&window.clearTimeout(D)}},[g,_.maxTsMs,Ce]);const hn=F.useMemo(()=>{let S=null,O=null;for(const D of R){const b=D.payload,V=b&&typeof b.tsMs=="number"?b.tsMs:null;V!==null&&((S===null||V<S)&&(S=V),(O===null||V>O)&&(O=V))}return{minTsMs:S,maxTsMs:O}},[R]);F.useEffect(()=>{if(!Ce)return;const S=Ce,O=u,D=hn.minTsMs,b=_.minTsMs;if(typeof O!="number"||typeof D!="number"||typeof b!="number"||D<=b+1||O>D+2e3||Ne.current)return;Ne.current=!0;const U=Math.max(0,Math.floor(D)-1);Ja({serverId:S,untilTsMs:U,limit:5e3,tail:!0}).then(N=>{N.length!==0&&ve(k=>{const se=k.slice(0,800),oe=new Set;for(const We of se)oe.add(zs(We));const ge=[];for(const We of N){const lt=zs(We);oe.has(lt)||ge.push(We)}const Ee=ge.concat(k);return ff(Ee,25e4,ze.current)})}).catch(()=>{}).finally(()=>{Ne.current=!1})},[u,hn.minTsMs,_.minTsMs,Ce]),F.useEffect(()=>{if(!Ce)return;const S=Ce;if(!g||$e.current===S)return;const O=hn.minTsMs,D=_.minTsMs,b=_.maxTsMs;if(typeof O!="number"||typeof D!="number"||typeof b!="number")return;const V=15*6e4,U=Math.max(D,Math.max(0,Math.floor(b-V)));if(O<=U+1)return;const N=25e4;if(R.length>=N-5e3){$e.current=S;return}const k=Date.now();if(k-Et.current<1500||Ne.current)return;Et.current=k,Ne.current=!0;const se=Math.max(0,Math.floor(O)-1);Ja({serverId:S,untilTsMs:se,limit:5e3,tail:!0}).then(oe=>{if(oe.length===0){St.current+=1,St.current>=3&&($e.current=S);return}St.current=0,ve(ge=>{const Ee=ge.slice(0,800),We=new Set;for(const ut of Ee)We.add(zs(ut));const lt=[];for(const ut of oe){const ft=zs(ut);We.has(ft)||lt.push(ut)}const je=lt.concat(ge);return ff(je,N,ze.current)})}).catch(()=>{}).finally(()=>{Ne.current=!1})},[R.length,g,hn.minTsMs,_.maxTsMs,_.minTsMs,Ce]);const ie=F.useMemo(()=>{const S=[];for(const O of R){const D=O.payload;!D||typeof D!="object"||D.type==="snapshot"&&typeof D.tsMs=="number"&&Array.isArray(D.players)&&S.push({tsMs:D.tsMs,players:D.players})}return S.sort((O,D)=>O.tsMs-D.tsMs),S},[R]),De=F.useMemo(()=>{const S=new Map;for(const D of C){if(!D||typeof D.playerId!="number")continue;const b=typeof D.name=="string"&&D.name.trim().length>0?D.name.trim():String(D.playerId);S.set(D.playerId,b)}for(const D of R){const b=D.payload;if(!b||typeof b!="object"||b.type!=="join"&&b.type!=="disconnect")continue;const V=b.event,U=V&&typeof V.playerId=="number"?V.playerId:null;if(U===null)continue;const N=V&&typeof V.name=="string"&&V.name.trim().length>0?V.name.trim():"";N?S.set(U,N):S.has(U)||S.set(U,String(U))}for(const D of ie)for(const b of D.players){if(!b||typeof b!="object")continue;const V=b.playerId;if(typeof V!="number")continue;const U=typeof b.name=="string"&&b.name.trim().length>0?b.name.trim():"";U?S.set(V,U):S.has(V)||S.set(V,String(V))}const O=Array.from(S.entries()).map(([D,b])=>({playerId:D,name:b}));return O.sort((D,b)=>D.name.localeCompare(b.name)||D.playerId-b.playerId),O},[R,C,ie]),be=F.useMemo(()=>{const S=new Map;for(const O of ie){const D=O.tsMs;for(const b of O.players){if(!b||typeof b!="object")continue;const V=b.playerId;if(typeof V!="number")continue;let U=S.get(V);U||(U=[],S.set(V,U)),U.push({tsMs:D,player:b})}}return S},[ie]),Se=F.useMemo(()=>(S,O)=>{const D=be.get(S);if(!D||D.length===0)return null;let b=0,V=D.length-1,U=-1;for(;b<=V;){const Ct=b+V>>1;D[Ct].tsMs<=O?(U=Ct,b=Ct+1):V=Ct-1}if(U<0)return null;const N=30,k=25,se=6e4,oe=2500,ge=5e3,Ee=80,We=Ct=>{const It=Ct&&typeof Ct=="object"?Ct.entityId:null;if(typeof It!="string")return null;const rn=It.trim();return rn.length>0?rn:null};let lt=null;const je=We(D[U].player);if(je)lt=je;else{let Ct=null;for(let Ui=U;Ui>=0&&U-Ui<Ee;Ui--){const Ro=D[Ui];if(O-Ro.tsMs>ge)break;const Po=We(Ro.player);if(Po){Ct=Po;break}}let It=null;for(let Ui=U+1;Ui<D.length&&Ui-U<Ee;Ui++){const Ro=D[Ui];if(Ro.tsMs-O>ge)break;const Po=We(Ro.player);if(Po){It=Po;break}}const rn=mn(D[U].player&&D[U].player.pos);!!(rn&&$o(rn,N))&&It?lt=It:lt=Ct||It}const ut=Ct=>{if(lt){const rn=We(Ct);if(rn&&rn!==lt)return null}const It=mn(Ct&&Ct.pos);return!It||$o(It,N)?null:It};let ft=null;for(let Ct=U;Ct>=0&&U-Ct<k;Ct--){const It=D[Ct];if(O-It.tsMs>se)break;if(lt){const vs=We(It.player);if(vs&&vs!==lt)break}const rn=ut(It.player);if(rn){ft={pos:rn,tsMs:It.tsMs,player:It.player};break}}let Qt=null;for(let Ct=U+1;Ct<D.length&&Ct-U<k;Ct++){const It=D[Ct];if(It.tsMs-O>se)break;if(lt){const vs=We(It.player);if(vs&&vs!==lt)break}const rn=ut(It.player);if(rn){Qt={pos:rn,tsMs:It.tsMs,player:It.player};break}}if(!ft&&Qt)return Qt.tsMs-O<=750?Qt:null;if(!ft)return null;if(Qt&&Qt.tsMs>ft.tsMs&&O>=ft.tsMs&&O<=Qt.tsMs){const Ct=Qt.tsMs-ft.tsMs;if(Ct>0&&Ct<=oe){const It=(O-ft.tsMs)/Ct;return{pos:eC(ft.pos,Qt.pos,It),tsMs:ft.tsMs,player:ft.player}}}return ft},[be]),xe=F.useMemo(()=>{const S=[];for(const O of R){const D=O&&O.payload;if(!(!D||typeof D!="object")&&typeof D.tsMs=="number"&&D.type!=="snapshot"){if(D.type==="gmPing"){const b=D.event,V=b&&typeof b.by=="string"&&b.by.length>0?b.by:"",U=b&&typeof b.title=="string"&&b.title.length>0?b.title:"Ping";S.push({tsMs:D.tsMs,kind:"event",title:"GM ping",subtitle:V?`${V} • ${U}`:U});continue}if(D.type==="kill"){const b=D.event,V=b&&typeof b.killerName=="string"?b.killerName:"Unknown",U=b&&typeof b.victimName=="string"?b.victimName:"Unknown",N=b&&typeof b.weaponName=="string"&&b.weaponName.length>0?b.weaponName:"",k=b&&typeof b.distanceM=="number"?b.distanceM:null,se=typeof k=="number"&&Number.isFinite(k)?`${Math.round(k)}m`:"",oe=[];N&&oe.push(N),se&&oe.push(se),S.push({tsMs:D.tsMs,kind:"kill",title:`${V} → ${U}`,subtitle:oe.length>0?oe.join(" • "):"Kill"});continue}if(D.type==="death"){const b=D.event,V=b&&typeof b.victimPlayerId=="number"?b.victimPlayerId:null,U=b&&typeof b.killerPlayerId=="number"?b.killerPlayerId:null;if(V!==null&&U!==null&&U>=0&&U!==V)continue;const N=b&&typeof b.victimName=="string"?b.victimName:"Unknown",k=b&&typeof b.weaponName=="string"&&b.weaponName.length>0?b.weaponName:"",se=b&&typeof b.distanceM=="number"?b.distanceM:null,oe=typeof se=="number"&&Number.isFinite(se)?`${Math.round(se)}m`:"",ge=[];k&&ge.push(k),oe&&ge.push(oe),S.push({tsMs:D.tsMs,kind:"event",title:`${N} died`,subtitle:ge.length>0?ge.join(" • "):"Death"});continue}if(D.type==="aiKill"){const b=D.event,V=b&&typeof b.killerName=="string"?b.killerName:"Unknown",U=b&&typeof b.victimName=="string"?b.victimName:"Unknown",N=b&&typeof b.weaponName=="string"&&b.weaponName.length>0?b.weaponName:"",k=b&&typeof b.distanceM=="number"?b.distanceM:null,se=typeof k=="number"&&Number.isFinite(k)?`${Math.round(k)}m`:"",oe=[];N&&oe.push(N),se&&oe.push(se),S.push({tsMs:D.tsMs,kind:"kill",title:`${V} → AI: ${U}`,subtitle:oe.length>0?oe.join(" • "):"AI kill"})}}}return S.sort((O,D)=>O.tsMs-D.tsMs),S},[R]),He=F.useMemo(()=>{const S=new Map;for(const O of R){const D=O.payload;if(!D||typeof D!="object"||D.type!=="join"&&D.type!=="disconnect"||typeof D.tsMs!="number")continue;const b=D.event,V=b&&typeof b.playerId=="number"?b.playerId:null;if(V===null)continue;let U=S.get(V);U||(U=[],S.set(V,U)),U.push({tsMs:D.tsMs,type:D.type})}for(const O of S.values())O.sort((D,b)=>D.tsMs-b.tsMs);return S},[R]),Ye=F.useMemo(()=>(S,O)=>{const D=be.get(S);if(!D||D.length===0)return null;let b=0,V=D.length-1,U=-1;for(;b<=V;){const N=b+V>>1;D[N].tsMs<=O?(U=N,b=N+1):V=N-1}return U<0?null:D[U]},[be]),ht=F.useMemo(()=>(S,O,D)=>{const b=be.get(S);if(!b||b.length===0)return null;let V=0,U=b.length-1,N=-1;for(;V<=U;){const k=V+U>>1;b[k].tsMs<=O?(N=k,V=k+1):U=k-1}if(N<0)return null;for(let k=N;k>=0;k--){const se=b[k],oe=O-se.tsMs;if(oe<0)continue;if(oe>D)break;const ge=se.player;if(!ge||typeof ge!="object")continue;const Ee=ge.inventory,We=ge.attachments,lt=ge.weapon,je={tsMs:se.tsMs};if(Array.isArray(Ee)&&(je.inventory=Ee),Array.isArray(We)&&(je.attachments=We),lt&&typeof lt=="object"&&typeof lt.name=="string"&&lt.name.length>0&&(je.weapon=lt),"inventory"in je||"attachments"in je||"weapon"in je)return je}return null},[be]),st=F.useMemo(()=>(S,O)=>{const D=He.get(S);if(!D||D.length===0)return null;let b=0,V=D.length-1,U=-1;for(;b<=V;){const N=b+V>>1;D[N].tsMs<=O?(U=N,b=N+1):V=N-1}return U<0?null:D[U].type==="join"},[He]),Lt=F.useMemo(()=>(S,O,D=6e4)=>{if(typeof S!="number"||S<0||typeof O!="number"||!Number.isFinite(O)||ie.length===0)return null;const b=O+Math.max(1e3,Math.min(5*60*1e3,Math.floor(D)));let V=0,U=ie.length-1,N=ie.length;for(;V<=U;){const k=V+U>>1;ie[k].tsMs>=O?(N=k,U=k-1):V=k+1}for(let k=N;k<ie.length;k++){const se=ie[k];if(se.tsMs>b)break;const oe=se.players.find(Ee=>Ee&&typeof Ee=="object"&&Ee.playerId===S);if(!oe)continue;const ge=mn(oe.pos);if(ge&&!$o(ge,30))return ge}return null},[ie]),T=F.useMemo(()=>(S,O,D=6e4)=>{if(typeof S!="number"||S<0||typeof O!="number"||!Number.isFinite(O)||ie.length===0)return null;const b=O-Math.max(1e3,Math.min(5*60*1e3,Math.floor(D)));let V=0,U=ie.length-1,N=-1;for(;V<=U;){const k=V+U>>1;ie[k].tsMs<=O?(N=k,V=k+1):U=k-1}for(let k=N;k>=0;k--){const se=ie[k];if(se.tsMs<b)break;const oe=se.players.find(Ee=>Ee&&typeof Ee=="object"&&Ee.playerId===S);if(!oe)continue;const ge=mn(oe.pos);if(ge&&!$o(ge,30))return ge}return null},[ie]),B=F.useMemo(()=>{const S=new Map;for(const O of R){const D=O.payload;if(!D||typeof D!="object"||D.type!=="kill"&&D.type!=="death"||typeof D.tsMs!="number")continue;const b=D.event,V=b&&typeof b.victimPlayerId=="number"?b.victimPlayerId:null;if(V===null)continue;const U=D.tsMs+3e4,N=S.get(V)||0;U>N&&S.set(V,U)}return S},[R]),X=F.useMemo(()=>{const S=new Map;if(!Fe)return S;const O=Fe.split("|");if(O.length<2)return S;const D=Number(O[0]),b=String(O[1]||"");if(!Number.isFinite(D)||b!=="kill"&&b!=="death")return S;let V=null;for(const N of R){const k=N&&N.payload;if(!(!k||typeof k!="object")&&k.type===b&&typeof k.tsMs=="number"&&k.tsMs===D){V=k.event;break}}if(!V||typeof V!="object")return S;if(b==="kill"){const N=typeof V.killerPlayerId=="number"?V.killerPlayerId:null,k=typeof V.victimPlayerId=="number"?V.victimPlayerId:null;return N!==null&&S.set(N,"killer"),k!==null&&S.set(k,"victim"),S}const U=typeof V.victimPlayerId=="number"?V.victimPlayerId:null;return U!==null&&S.set(U,"victim"),S},[R,Fe]),K=F.useMemo(()=>({enabled:Je,scale:Math.min(2,Math.max(.5,ct)),background:A}),[A,ct,Je]),$=F.useMemo(()=>{const S=u;if(typeof S!="number")return[];if(be.size===0)return[];const O=new Map;for(const V of De)O.set(V.playerId,V.name);const D=3e4,b=[];for(const V of De){const U=V.playerId,N=Ye(U,S);if(!N)continue;const k=st(U,S);if(k===!1||k===null&&S-N.tsMs>D)continue;const se=Se(U,S);if(!se)continue;const oe=se.player,ge=se.pos,Ee=!!oe.inVehicle,We=Ag(v,ge.x,ge.z),je=!Ee&&typeof We=="number"&&Number.isFinite(We)&&typeof ge.y=="number"&&Number.isFinite(ge.y)&&Math.abs(ge.y-We)<=3.5?{...ge,y:We+.35}:ge,ut=mn(oe.aimDir),ft=oe.vehicle&&typeof oe.vehicle.name=="string"?String(oe.vehicle.name):"",Qt=N.tsMs,Ct=B.get(U)||0,It=typeof Qt=="number"?Ct>Qt:!1;let rn=O.get(U)||String(U);q&&Ee&&ft&&(rn=`${rn} (${ft})`),b.push({playerId:U,label:rn,pos:je,aimDir:ut,inVehicle:Ee,isDead:It,highlight:X.get(U)||null})}return b},[u,B,Se,Ye,st,De,be,X,q,v]),Me=F.useMemo(()=>{if(!Pe||L===null||typeof u!="number")return null;const S=be.get(L);if(!S||S.length===0)return null;const O=Math.max(5e3,Math.min(6e4,Math.floor(ot*1e3))),D=u-O,b=[];let V=null,U=0,N=S.length-1,k=S.length;for(;U<=N;){const oe=U+N>>1;S[oe].tsMs>=D?(k=oe,N=oe-1):U=oe+1}for(let oe=Math.max(0,k-1);oe<S.length;oe++){const ge=S[oe];if(ge.tsMs<D)continue;if(ge.tsMs>u)break;const Ee=ge.player;if(!Ee||typeof Ee!="object")continue;const We=!!Ee.inVehicle,lt=Ee.entityId,je=typeof lt=="string"&&lt.length>0?lt:null;je&&V&&je!==V&&(b.length=0),je&&(V=je);const ut=mn(Ee.pos);if(!ut||$o(ut,30))continue;const ft=Ag(v,ut.x,ut.z),Qt=!We&&typeof ft=="number"&&Number.isFinite(ft)&&typeof ut.y=="number"&&Number.isFinite(ut.y)&&Math.abs(ut.y-ft)<=3.5;b.push(Qt?{...ut,y:ft}:ut)}if(b.length<2)return null;const se=200;if(b.length>se){const oe=Math.ceil(b.length/se),ge=[];for(let Ee=0;Ee<b.length;Ee+=oe)ge.push(b[Ee]);return{points:ge}}return{points:b}},[u,Pe,be,L,v,ot]),Ie=F.useMemo(()=>{if(!ke)return[];const S=u;if(typeof S!="number")return[];const O=[];for(const D of R){const b=D.payload;if(!b||typeof b!="object"||b.type!=="kill"&&b.type!=="death"||typeof b.tsMs!="number"||S<b.tsMs||S>b.tsMs+3e3)continue;const V=b.event;let U=V?mn(V.victimPos):null;if(!U&&V&&typeof V=="object"){const N=typeof V.victimPlayerId=="number"?V.victimPlayerId:null;if(typeof N=="number"){const k=Se(N,b.tsMs);k&&(U=k.pos)}}if(U&&(O.push(U),O.length>=40))break}return O},[u,R,Se,ke]),Re=F.useMemo(()=>{const S=_.minTsMs,O=_.maxTsMs,D=u;return typeof S!="number"||typeof O!="number"||typeof D!="number"?{min:0,max:100,value:0,disabled:!0}:O<=S?{min:S,max:S+1,value:S,disabled:!1}:{min:S,max:O,value:Math.min(Math.max(D,S),O),disabled:!1}},[u,_.maxTsMs,_.minTsMs]),Ke=F.useMemo(()=>{let S=-1/0,O=0;for(const D of R){if(!D||typeof D.receivedAt!="number")continue;const b=Ec(D);b!==null&&b>S&&(S=b,O=D.receivedAt)}return!Number.isFinite(S)||S<0||!Number.isFinite(O)||O<=0?null:{tsMs:S,receivedAt:O}},[R]),tt=F.useMemo(()=>{if(!Ke)return null;const S=Ke;return O=>{const D=S.receivedAt+(O-S.tsMs);return Number.isFinite(D)?new Date(D).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}):""}},[Ke]),nt=F.useMemo(()=>{if(rt===null)return null;const S=De.find(O=>O.playerId===rt);return S?S.name:String(rt)},[rt,De]),Ve=F.useMemo(()=>{const S=u;if(typeof S!="number"||!Number.isFinite(S))return[];const O=3e4,D=[];for(const b of De){const V=b.playerId,U=st(V,S);if(U===!0){D.push(b);continue}if(U===!1)continue;const N=Ye(V,S);N&&S-N.tsMs<=O&&D.push(b)}return D.sort((b,V)=>b.name.localeCompare(V.name)||b.playerId-V.playerId),D},[u,Ye,st,De]);function mt(S){const O=Math.max(0,Math.floor(Le*1e3)),D=Re.disabled?0:Re.min,b=Re.disabled?S:Re.max,V=Math.min(b,Math.max(D,S-O));m(V)}const Zt=F.useMemo(()=>{const S=ne.trim().toLowerCase(),O=Array.isArray(Ve)?Ve:[];return S?O.filter(D=>(D.name||"").toLowerCase().includes(S)||String(D.playerId).includes(S)):O},[ne,Ve]),Nt=F.useMemo(()=>{if(L===null)return null;const S=u;if(typeof S!="number")return null;const O=Ye(L,S);return O?{snapTsMs:O.tsMs,player:O.player}:null},[u,Ye,L]),Ut=F.useMemo(()=>{const S=u;if(typeof S!="number")return Nt;const O=Nt;if(!O||!O.player||typeof O.player!="object")return O;const D=O.player,b=O.snapTsMs,V=typeof D.playerId=="number"?D.playerId:null;if(V===null)return O;const U=5*6e4,N=At.current.get(V)||{invTsMs:-1,hotbarTsMs:-1,weaponTsMs:-1},k=D.inventory;Array.isArray(k)&&(N.inventory=k,N.invTsMs=b);const se=D.attachments;Array.isArray(se)&&(N.attachments=se,N.hotbarTsMs=b);const oe=D.weapon;oe&&typeof oe=="object"&&typeof oe.name=="string"&&oe.name.length>0&&(N.weapon=oe,N.weaponTsMs=b),At.current.set(V,N);const ge=!Array.isArray(k),Ee=!Array.isArray(se),We=!oe||!oe.name,je=ge||Ee||We?ht(V,S,U):null;je&&je.inventory&&(!("inventory"in N)||N.invTsMs>S||S-N.invTsMs>U)&&(N.inventory=je.inventory,N.invTsMs=je.tsMs),je&&je.attachments&&(!("attachments"in N)||N.hotbarTsMs>S||S-N.hotbarTsMs>U)&&(N.attachments=je.attachments,N.hotbarTsMs=je.tsMs),je&&je.weapon&&(!N.weapon||N.weaponTsMs>S||S-N.weaponTsMs>U)&&(N.weapon=je.weapon,N.weaponTsMs=je.tsMs);const ut=S-N.invTsMs,ft=S-N.hotbarTsMs,Qt=S-N.weaponTsMs,Ct="inventory"in N&&N.invTsMs<=S&&ut>=0&&ut<=U&&ge,It="attachments"in N&&N.hotbarTsMs<=S&&ft>=0&&ft<=U&&Ee,rn=!!N.weapon&&N.weaponTsMs<=S&&Qt>=0&&Qt<=U&&We;return{...D,inventory:Ct?N.inventory:k,attachments:It?N.attachments:se,weapon:rn?N.weapon:oe,__snapTsMs:b}},[u,ht,Nt]),bt=F.useMemo(()=>{const S=[];for(const V of R){const U=V.payload;if(!U||typeof U!="object"||typeof U.tsMs!="number"||U.type==="snapshot"||U.type!=="kill"&&U.type!=="death"&&U.type!=="aiKill"&&U.type!=="join"&&U.type!=="disconnect"&&U.type!=="restart"&&U.type!=="gmPing")continue;const N=U.event;if(U.type==="kill"){const k=N&&typeof N.killerName=="string"?N.killerName:"Unknown",se=N&&typeof N.victimName=="string"?N.victimName:"Unknown",oe=N&&typeof N.weaponName=="string"?N.weaponName:"",ge=N&&typeof N.distanceM=="number"?N.distanceM:null,Ee=typeof ge=="number"&&Number.isFinite(ge)?`${Math.round(ge)}m`:"",We=N?mn(N.victimPos):null,lt=N&&typeof N.victimPlayerId=="number"?N.victimPlayerId:null,je=N&&typeof N.killerPlayerId=="number"?N.killerPlayerId:null,ut=[];oe&&ut.push(oe),Ee&&ut.push(Ee),S.push({tsMs:U.tsMs,type:"kill",title:`${k} → ${se}`,subtitle:ut.join(" • "),focusPos:We,focusPlayerId:lt,playerIds:[je,lt].filter(ft=>typeof ft=="number")})}else if(U.type==="death"){const k=N&&typeof N.victimPlayerId=="number"?N.victimPlayerId:null,se=N&&typeof N.killerPlayerId=="number"?N.killerPlayerId:null;if(k!==null&&se!==null&&se>=0&&se!==k)continue;const oe=N&&typeof N.victimName=="string"?N.victimName:"Unknown",ge=N&&typeof N.weaponName=="string"?N.weaponName:"",Ee=N&&typeof N.distanceM=="number"?N.distanceM:null,We=typeof Ee=="number"&&Number.isFinite(Ee)?`${Math.round(Ee)}m`:"",lt=N?mn(N.victimPos):null,je=[];ge&&je.push(ge),We&&je.push(We),S.push({tsMs:U.tsMs,type:"death",title:`${oe} died`,subtitle:je.join(" • "),focusPos:lt,focusPlayerId:k,playerIds:[k].filter(ut=>typeof ut=="number")})}else if(U.type==="aiKill"){const k=N&&typeof N.killerName=="string"?N.killerName:"Unknown",se=N&&typeof N.victimName=="string"?N.victimName:"Unknown",oe=N&&typeof N.weaponName=="string"?N.weaponName:"",ge=N&&typeof N.distanceM=="number"?N.distanceM:null,Ee=typeof ge=="number"&&Number.isFinite(ge)?`${Math.round(ge)}m`:"",We=N?mn(N.victimPos):null,lt=N&&typeof N.killerPlayerId=="number"?N.killerPlayerId:null,je=[];oe&&je.push(oe),Ee&&je.push(Ee),S.push({tsMs:U.tsMs,type:"aiKill",title:`${k} → AI: ${se}`,subtitle:je.join(" • "),focusPos:We,focusPlayerId:lt,playerIds:[lt].filter(ut=>typeof ut=="number")})}else if(U.type==="gmPing"){const k=N&&typeof N.by=="string"&&N.by.length>0?N.by:"",se=N&&typeof N.title=="string"&&N.title.length>0?N.title:"event",oe=N?mn(N.pos):null,ge=k?`(${k} sent a GM ping to ${se})`:`GM ping to ${se}`;S.push({tsMs:U.tsMs,type:"gmPing",title:ge,subtitle:"",focusPos:oe,focusPlayerId:null,playerIds:[]})}else{if(U.type==="restart"){S.push({tsMs:U.tsMs,type:"restart",title:"Server restarted",subtitle:"restart / history cleared",focusPos:null,focusPlayerId:null,playerIds:[]});continue}const k=N&&typeof N.name=="string"?N.name:String(N&&N.playerId?N.playerId:"player"),se=N&&typeof N.playerId=="number"?N.playerId:null,oe=U.type==="join"&&typeof se=="number"?Lt(se,U.tsMs,9e4):null,ge=U.type==="disconnect"&&typeof se=="number"?T(se,U.tsMs,9e4):null;S.push({tsMs:U.tsMs,type:String(U.type),title:`${U.type==="join"?"Join":"Disconnect"}: ${k}`,subtitle:U.type==="disconnect"&&N&&typeof N.kickCause=="string"&&N.kickCause?`cause: ${N.kickCause}`:"",focusPos:oe||ge,focusPlayerId:se,playerIds:[se].filter(Ee=>typeof Ee=="number")})}}S.sort((V,U)=>V.tsMs-U.tsMs);const O=u,D=_t;let b=S;return typeof O=="number"&&(b=b.filter(V=>V.tsMs<=O)),typeof D=="number"&&(b=b.filter(V=>V.playerIds.includes(D))),b.slice(-200)},[u,_t,R,Lt]);F.useEffect(()=>{if(!Fe)return;const S=window.setTimeout(()=>{const O=Oe.current.get(Fe);O&&O.scrollIntoView({block:"nearest",behavior:"smooth"})},0);return()=>window.clearTimeout(S)},[Fe,Y]);const at=F.useMemo(()=>{const S=_.minTsMs,O=_.maxTsMs;if(typeof S!="number"||typeof O!="number")return[];let D=[];for(const U of R){const N=U.payload;if(!N||typeof N!="object"||N.type!=="kill"&&N.type!=="death"&&N.type!=="aiKill"&&N.type!=="join"&&N.type!=="disconnect"&&N.type!=="restart"&&N.type!=="gmPing"||typeof N.tsMs!="number"||N.tsMs<S||N.tsMs>O)continue;const k=N.event;if(N.type==="kill"){const se=k&&typeof k.killerName=="string"?k.killerName:"Unknown",oe=k&&typeof k.victimName=="string"?k.victimName:"Unknown",ge=k&&typeof k.weaponName=="string"?k.weaponName:"",Ee=k&&typeof k.distanceM=="number"?k.distanceM:null,We=typeof Ee=="number"&&Number.isFinite(Ee)?`${Math.round(Ee)}m`:"",lt=k?mn(k.victimPos):null,je=k&&typeof k.victimPlayerId=="number"?k.victimPlayerId:null,ut=k&&typeof k.killerPlayerId=="number"?k.killerPlayerId:null,ft=[];ge&&ft.push(ge),We&&ft.push(We),D.push({tsMs:N.tsMs,type:"kill",title:`${se} → ${oe}`,subtitle:ft.join(" • "),focusPos:lt,focusPlayerId:je,playerIds:[ut,je].filter(Qt=>typeof Qt=="number")})}else if(N.type==="death"){const se=k&&typeof k.victimPlayerId=="number"?k.victimPlayerId:null,oe=k&&typeof k.killerPlayerId=="number"?k.killerPlayerId:null;if(se!==null&&oe!==null&&oe>=0&&oe!==se)continue;const ge=k&&typeof k.victimName=="string"?k.victimName:"Unknown",Ee=k&&typeof k.weaponName=="string"?k.weaponName:"",We=k&&typeof k.distanceM=="number"?k.distanceM:null,lt=typeof We=="number"&&Number.isFinite(We)?`${Math.round(We)}m`:"",je=k?mn(k.victimPos):null,ut=[];Ee&&ut.push(Ee),lt&&ut.push(lt),D.push({tsMs:N.tsMs,type:"death",title:`${ge} died`,subtitle:ut.join(" • "),focusPos:je,focusPlayerId:se,playerIds:[se].filter(ft=>typeof ft=="number")})}else if(N.type==="aiKill"){const se=k&&typeof k.killerName=="string"?k.killerName:"Unknown",oe=k&&typeof k.victimName=="string"?k.victimName:"Unknown",ge=k&&typeof k.weaponName=="string"?k.weaponName:"",Ee=k&&typeof k.distanceM=="number"?k.distanceM:null,We=typeof Ee=="number"&&Number.isFinite(Ee)?`${Math.round(Ee)}m`:"",lt=k?mn(k.victimPos):null,je=k&&typeof k.killerPlayerId=="number"?k.killerPlayerId:null,ut=[];ge&&ut.push(ge),We&&ut.push(We),D.push({tsMs:N.tsMs,type:"aiKill",title:`${se} → AI: ${oe}`,subtitle:ut.join(" • "),focusPos:lt,focusPlayerId:je,playerIds:[je].filter(ft=>typeof ft=="number")})}else if(N.type==="gmPing"){const se=k&&typeof k.by=="string"&&k.by.length>0?k.by:"",oe=k&&typeof k.title=="string"&&k.title.length>0?k.title:"event",ge=k?mn(k.pos):null,Ee=se?`(${se} sent a GM ping to ${oe})`:`GM ping to ${oe}`;D.push({tsMs:N.tsMs,type:"gmPing",title:Ee,subtitle:"",focusPos:ge,focusPlayerId:null,playerIds:[]})}else if(N.type==="restart"){const se=k&&typeof k.reason=="string"?k.reason:"",oe=se==="session_start"?"server restart":se==="server_restart_or_history_cleared"?"restart / history cleared":se||"restart";D.push({tsMs:N.tsMs,type:"restart",title:"Server restarted",subtitle:oe,focusPos:null,focusPlayerId:null,playerIds:[]})}else{const se=k&&typeof k.name=="string"?k.name:String(k&&k.playerId?k.playerId:"player"),oe=k&&typeof k.playerId=="number"?k.playerId:null,ge=N.type==="join"&&typeof oe=="number"?Lt(oe,N.tsMs,9e4):null;D.push({tsMs:N.tsMs,type:N.type,title:`${N.type==="join"?"Join":"Disconnect"}: ${se}`,subtitle:N.type==="disconnect"&&k&&typeof k.kickCause=="string"&&k.kickCause?`cause: ${k.kickCause}`:"",focusPos:ge,focusPlayerId:oe,playerIds:[oe].filter(Ee=>typeof Ee=="number")})}}D.sort((U,N)=>U.tsMs-N.tsMs);const b=_t;typeof b=="number"&&(D=D.filter(U=>U.playerIds.includes(b)));const V=420;if(D.length>V){const U=Math.ceil(D.length/V),N=[];for(let k=0;k<D.length;k+=U)N.push(D[k]);return N}return D},[_t,R,Lt,_.maxTsMs,_.minTsMs]);function qt(S){const O=`${Date.now()}-${Math.random().toString(16).slice(2)}`;it(D=>[{id:O,...S,visible:!1},...D].slice(0,5)),window.setTimeout(()=>{it(D=>D.map(b=>b.id===O?{...b,visible:!0}:b))},10),window.setTimeout(()=>{it(D=>D.map(b=>b.id===O?{...b,visible:!1}:b))},4500),window.setTimeout(()=>{it(D=>D.filter(b=>b.id!==O))},5200)}return F.useEffect(()=>{if(!g||R.length===0)return;const S=et.current;let O=S;const D=[];for(const b of R)!b||typeof b.receivedAt!="number"||b.receivedAt<=S||(b.receivedAt>O&&(O=b.receivedAt),D.push({receivedAt:b.receivedAt,payload:b.payload}));D.sort((b,V)=>b.receivedAt-V.receivedAt);for(const b of D){const V=b.payload;if(!(!V||typeof V!="object")&&V.type!=="snapshot"){if(V.type==="gmPing"){const U=V.event,N=U&&typeof U.by=="string"&&U.by.length>0?U.by:"",k=U&&typeof U.title=="string"&&U.title.length>0?U.title:"Ping";qt({kind:"event",title:"GM ping",subtitle:N?`${N} • ${k}`:k});continue}if(V.type==="kill"){const U=V.event,N=U&&typeof U.killerName=="string"?U.killerName:"Unknown",k=U&&typeof U.victimName=="string"?U.victimName:"Unknown",se=U&&typeof U.weaponName=="string"&&U.weaponName.length>0?U.weaponName:"",oe=U&&typeof U.distanceM=="number"?U.distanceM:null,ge=typeof oe=="number"&&Number.isFinite(oe)?`${Math.round(oe)}m`:"",Ee=[];se&&Ee.push(se),ge&&Ee.push(ge),qt({kind:"kill",title:`${N} → ${k}`,subtitle:Ee.length>0?Ee.join(" • "):"Kill"})}else if(V.type==="death"){const U=V.event,N=U&&typeof U.victimPlayerId=="number"?U.victimPlayerId:null,k=U&&typeof U.killerPlayerId=="number"?U.killerPlayerId:null;if(N!==null&&k!==null&&k>=0&&k!==N)continue;const se=U&&typeof U.victimName=="string"?U.victimName:"Unknown",oe=U&&typeof U.weaponName=="string"&&U.weaponName.length>0?U.weaponName:"",ge=U&&typeof U.distanceM=="number"?U.distanceM:null,Ee=typeof ge=="number"&&Number.isFinite(ge)?`${Math.round(ge)}m`:"",We=[];oe&&We.push(oe),Ee&&We.push(Ee),qt({kind:"event",title:`${se} died`,subtitle:We.length>0?We.join(" • "):"Death"})}else if(V.type==="aiKill"){const U=V.event,N=U&&typeof U.killerName=="string"?U.killerName:"Unknown",k=U&&typeof U.victimName=="string"?U.victimName:"Unknown",se=U&&typeof U.weaponName=="string"&&U.weaponName.length>0?U.weaponName:"",oe=U&&typeof U.distanceM=="number"?U.distanceM:null,ge=typeof oe=="number"&&Number.isFinite(oe)?`${Math.round(oe)}m`:"",Ee=[];se&&Ee.push(se),ge&&Ee.push(ge),qt({kind:"kill",title:`${N} → AI: ${k}`,subtitle:Ee.length>0?Ee.join(" • "):"AI kill"})}}}O>S&&(et.current=O)},[R,g]),F.useEffect(()=>{if(!Ce||g)return;const S=u;if(typeof S!="number"||!Number.isFinite(S)||xe.length===0)return;const O=Ge.current;if(typeof O!="number"||!Number.isFinite(O)){Ge.current=S;return}if(S+50<O){Ge.current=S,it([]);return}if(S<=O)return;let D=0,b=xe.length-1,V=xe.length;for(;D<=b;){const k=D+b>>1;xe[k].tsMs>O?(V=k,b=k-1):D=k+1}const U=[];for(let k=V;k<xe.length;k++){const se=xe[k];if(se.tsMs>S)break;U.push(se)}const N=U.length>2?U.slice(-2):U;for(const k of N)qt({kind:k.kind,title:k.title,subtitle:k.subtitle});Ge.current=S},[u,g,Ce,xe]),E.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden"},children:[E.jsxs("div",{className:"row",style:{gap:12,padding:12,alignItems:"center"},children:[E.jsxs("div",{style:{minWidth:240,maxWidth:520,flex:1},children:[E.jsxs("select",{className:"input",value:i,onChange:S=>{r(S.target.value),G([]),ee(null),z(null),ve([]),p({minTsMs:null,maxTsMs:null}),m(null),me.current=null,et.current=0,Ge.current=null,it([])},children:[E.jsx("option",{value:"",children:"Select a server…"}),e.map(S=>E.jsxs("option",{value:S.id,children:[S.name," (",S.id,")"]},S.id))]}),e.length===0?E.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"No servers returned yet."}):null]}),Ce?null:E.jsx("button",{className:"button",onClick:()=>{l(null),cd().then(S=>o(S)).catch(S=>{const O=S instanceof Error?S.message:"Failed to load server status";l(O)})},children:"Refresh overview"}),d?E.jsx("div",{className:"muted",style:{fontSize:12},children:"Loading…"}):null,c?E.jsx("div",{className:"error",style:{flex:1},children:c}):null]}),Ce?E.jsx("div",{style:{position:"relative",width:"100%",height:"calc(100vh - 72px)",padding:12,boxSizing:"border-box"},children:E.jsx("div",{className:"card",style:{width:"100%",height:"100%",padding:0,overflow:"hidden"},children:E.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[E.jsx(Jb,{players:$,focusTarget:ue,focusNonce:te,followPlayerId:rt,nameTags:K,showAimLines:fe,trail:Me,deathMarkers:Ie,terrain:v,towns:I||void 0}),rt!==null&&nt?E.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:132,display:"flex",justifyContent:"center",pointerEvents:"none"},children:E.jsx("div",{className:"card",style:{padding:"8px 12px",background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)"},children:E.jsxs("div",{style:{fontWeight:800,fontSize:12},children:["Attached to ",nt,", press F to unattach"]})})}):null,E.jsx("div",{style:{position:"absolute",top:12,right:12,width:340,display:"flex",flexDirection:"column",gap:8,pointerEvents:"none"},children:wt.map(S=>E.jsxs("div",{style:{pointerEvents:"none",padding:"10px 12px",borderRadius:10,background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)",opacity:S.visible?1:0,transform:S.visible?"translateY(0px)":"translateY(-6px)",transition:"opacity 250ms ease, transform 250ms ease"},children:[E.jsx("div",{style:{fontWeight:700,fontSize:13},children:S.title}),S.subtitle?E.jsx("div",{className:"muted",style:{fontSize:12},children:S.subtitle}):null]},S.id))}),E.jsx("div",{style:{position:"absolute",top:12,left:12,width:ae?360:"auto"},children:E.jsxs("div",{className:"card",style:{padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"nowrap"},children:[E.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[E.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:Y==="players"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:Y==="players"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>Z("players"),children:"Players"}),E.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:Y==="events"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:Y==="events"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>Z("events"),children:"Events"})]}),E.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[Y==="players"?E.jsx("button",{type:"button",className:"button",title:"Nametag options",style:{padding:"6px 10px"},onClick:()=>he(S=>!S),children:"⚙"}):null,E.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>H(S=>!S),children:ae?"−":"+"})]})]}),ae?E.jsxs("div",{className:"stack",style:{marginTop:10},children:[Y==="players"?E.jsxs(E.Fragment,{children:[re?E.jsxs("div",{style:{border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:[E.jsx("div",{className:"label",style:{marginBottom:8},children:"Nametags"}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:Je,onChange:S=>Be(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Show nametags"})]}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:A,onChange:S=>w(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Background"})]}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:q,onChange:S=>ye(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Include vehicle in label"})]}),E.jsx("div",{className:"label",style:{marginBottom:6},children:"Nametag size"}),E.jsx("input",{style:{width:"100%"},type:"range",min:.6,max:1.6,step:.1,value:ct,onChange:S=>Xe(Number(S.target.value))}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:[ct.toFixed(1),"×"]}),E.jsx("div",{style:{height:8}}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:fe,onChange:S=>ce(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Aim direction line"})]}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:ke,onChange:S=>we(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Death markers"})]}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:Pe,onChange:S=>pe(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Trails (focused player)"})]}),Pe?E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"label",style:{marginBottom:6},children:"Trail window (seconds)"}),E.jsx("input",{style:{width:"100%"},type:"range",min:5,max:60,step:5,value:ot,onChange:S=>de(Number(S.target.value))}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:[ot,"s"]})]}):null]}):null,E.jsx("input",{className:"input",placeholder:"Search players…",value:ne,onChange:S=>x(S.target.value)})]}):null,Y==="players"?E.jsx("div",{className:"scroll",style:{maxHeight:240,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:Zt.length===0?E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No players."}):Zt.map(S=>{const O=L===S.playerId;return E.jsxs("button",{type:"button",onClick:()=>{Z("players"),ee(S.playerId),Tt(S.playerId);const D=$.find(b=>b.playerId===S.playerId);D&&(z(D.pos),Q(b=>b+1))},className:"button",style:{width:"100%",textAlign:"left",borderRadius:0,border:"none",borderBottom:"1px solid rgba(255,255,255,0.06)",background:O?"rgba(255,255,255,0.08)":"transparent",padding:"8px 10px"},children:[E.jsx("div",{style:{fontWeight:700,fontSize:13},children:S.name}),E.jsxs("div",{className:"muted",style:{fontSize:11},children:["#",S.playerId]})]},S.playerId)})}):E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between",gap:10},children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Event click offset"}),E.jsxs("div",{className:"row",style:{gap:8},children:[E.jsx("input",{className:"input",style:{width:90,padding:"6px 10px"},type:"number",min:0,max:60,step:1,value:Le,onChange:S=>dt(Math.max(0,Math.min(60,Math.floor(Number(S.target.value)||0)))),title:"Jump this many seconds before an event"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"sec"})]})]}),E.jsx("div",{className:"scroll",style:{maxWidth:340,overflowX:"auto",overflowY:"hidden",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:bt.length===0?E.jsx("div",{className:"muted",style:{fontSize:12},children:"No events in buffer yet."}):E.jsx("div",{style:{display:"flex",gap:10},children:bt.slice().reverse().map((S,O)=>{const D=`${S.tsMs}|${S.type}|${S.title}|${S.subtitle||""}`,b=Fe===D,V=!!Ce&&S.type!=="gmPing"&&!!S.focusPos,U=S.subtitle?`${S.title} • ${S.subtitle}`:S.title;return E.jsxs("div",{ref:N=>{N?Oe.current.set(D,N):Oe.current.delete(D)},className:"button",style:{minWidth:220,textAlign:"left",borderRadius:10,border:b?"1px solid rgba(255,255,255,0.35)":"1px solid rgba(255,255,255,0.10)",background:b?"rgba(255,255,255,0.10)":"rgba(255,255,255,0.06)",padding:"8px 10px",position:"relative"},role:"button",tabIndex:0,onClick:()=>{Qe(D),qe(!1),y(!1),mt(S.tsMs),typeof S.focusPlayerId=="number"&&ee(S.focusPlayerId),S.focusPos&&(z(S.focusPos),Q(N=>N+1))},onKeyDown:N=>{N.key!=="Enter"&&N.key!==" "||(N.preventDefault(),Qe(D),qe(!1),y(!1),mt(S.tsMs),typeof S.focusPlayerId=="number"&&ee(S.focusPlayerId),S.focusPos&&(z(S.focusPos),Q(k=>k+1)))},children:[E.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:8,right:8,padding:"4px 8px",fontSize:11,opacity:V?1:.4},title:V?"Send GM ping to this event location":"No position for this event",disabled:!V,onClick:N=>{if(N.stopPropagation(),!Ce)return;const k=S.focusPos;if(!k)return;const se=typeof S.focusPlayerId=="number"?S.focusPlayerId:Array.isArray(S.playerIds)&&S.playerIds.length>0?S.playerIds[0]:null;wM({serverId:Ce,tsMs:S.tsMs,pos:k,title:U,reporterPlayerId:se})},children:"GM ping"}),E.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:34,right:8,padding:"4px 8px",fontSize:11,opacity:V?1:.4},title:V?"Export 5s before/after as a GIF to Discord":"No position for this event",disabled:!V,onClick:N=>{if(N.stopPropagation(),!Ce)return;const k=S.focusPos;k&&(async()=>{try{await DM({serverId:Ce,tsMs:S.tsMs,title:S.title,pos:k,focusPlayerId:typeof S.focusPlayerId=="number"?S.focusPlayerId:null,playerIds:Array.isArray(S.playerIds)?S.playerIds:null}),qt({kind:"event",title:"Discord export",subtitle:"Sent"})}catch(se){f(se instanceof Error?se.message:"Failed to export to Discord")}})()},children:"Export"}),E.jsx("div",{style:{fontWeight:800,fontSize:12},children:S.title}),E.jsxs("div",{className:"muted",style:{fontSize:11,marginTop:2},children:["+",Cl(S.tsMs-Re.min),tt?` • ${tt(S.tsMs)}`:"",S.subtitle?` • ${S.subtitle}`:""]})]},`${S.tsMs}-${O}`)})})})]}),E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Selected"}),L===null?E.jsx("div",{className:"muted",style:{fontSize:12},children:"Click a player to view equipment."}):Ut?E.jsxs("div",{style:{fontSize:12},children:[E.jsxs("div",{className:"muted",style:{marginBottom:6},children:["pos: ",JSON.stringify(Ut.pos)]}),E.jsxs("details",{open:!0,children:[E.jsx("summary",{style:{cursor:"pointer",fontWeight:700},children:"Weapon"}),E.jsx("div",{className:"muted",style:{marginTop:6},children:Ut.weapon&&Ut.weapon.name?Ut.weapon.name:"None"})]}),E.jsx("div",{style:{height:6}}),E.jsxs("details",{children:[E.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Inventory (",Array.isArray(Ut.inventory)?Ut.inventory.length:0,")"]}),E.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:(()=>{const S=iC(Ut.inventory,O=>O&&O.name?String(O.name):"Item");return S.length===0?E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No inventory data in this snapshot."}):S.slice(0,80).map((O,D)=>E.jsx("div",{style:{padding:"7px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:E.jsxs("div",{style:{fontSize:12},children:[O.name,O.count>1?` ×${O.count}`:""]})},D))})()})]}),E.jsx("div",{style:{height:6}}),E.jsxs("details",{children:[E.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Hotbar (",Array.isArray(Ut.attachments)?Ut.attachments.length:0,")"]}),E.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:Array.isArray(Ut.attachments)&&Ut.attachments.length>0?Ut.attachments.map((S,O)=>E.jsx("div",{style:{padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:E.jsxs("div",{style:{fontSize:12},children:[S&&S.slot?E.jsxs("span",{className:"muted",style:{fontSize:11},children:[String(S.slot),":"]}):null," ",S&&S.name?String(S.name):"Item"]})},O)):E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No attachments data in this snapshot."})})]}),E.jsx("div",{style:{height:8}}),E.jsxs("div",{children:[E.jsx("div",{className:"muted",style:{fontSize:12,marginBottom:6},children:"Filter events by player"}),E.jsxs("select",{className:"input",style:{width:"100%",padding:"6px 10px"},value:_t===null?"":String(_t),onChange:S=>{const O=String(S.target.value||"");if(!O){Pt(null);return}const D=Number(O);Pt(Number.isFinite(D)?D:null)},title:"Filter events by player",children:[E.jsx("option",{value:"",children:"All players"}),Ve.map(S=>E.jsxs("option",{value:String(S.playerId),children:[S.name," (#",S.playerId,")"]},S.playerId))]})]})]}):E.jsx("div",{className:"muted",style:{fontSize:12},children:"No snapshot data for this player at the current time."})]})]}):null]})}),E.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:12,display:"flex",justifyContent:"center"},children:E.jsxs("div",{className:"card",style:{width:"min(980px, 100%)",padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Replay time"}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:["+",Cl(Re.value-Re.min)," of +",Cl(Re.max-Re.min),tt?` • ${tt(Re.value)}`:""]})]}),E.jsxs("div",{className:"row",style:{gap:10,alignItems:"center"},children:[E.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>{g&&y(!1),qe(S=>!S)},disabled:Re.disabled,children:yt?"Pause":"Play"}),E.jsxs("select",{className:"input",style:{width:110,padding:"6px 10px"},value:String(j),onChange:S=>Wt(Number(S.target.value)),disabled:Re.disabled,title:"Playback speed",children:[E.jsx("option",{value:"0.25",children:"0.25×"}),E.jsx("option",{value:"0.5",children:"0.5×"}),E.jsx("option",{value:"1",children:"1×"}),E.jsx("option",{value:"2",children:"2×"}),E.jsx("option",{value:"4",children:"4×"})]}),E.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[E.jsx("input",{type:"checkbox",checked:Ze,onChange:S=>J(S.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Events"})]}),E.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[E.jsx("input",{type:"checkbox",checked:g,onChange:S=>{const O=S.target.checked;y(O),O&&qe(!1)}}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Live"})]})]})]}),Ze?E.jsxs("div",{style:{position:"relative",height:18,marginTop:6,marginBottom:4},children:[E.jsx("div",{style:{position:"absolute",left:0,right:0,top:8,height:2,background:"rgba(255,255,255,0.10)"}}),le?E.jsxs("div",{style:{position:"absolute",left:`${le.leftPct}%`,top:0,transform:"translate(-50%, -110%)",zIndex:10,pointerEvents:"none",maxWidth:320,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:"6px 8px"},children:[E.jsx("div",{style:{fontWeight:800,fontSize:12,lineHeight:1.2},children:le.title}),E.jsx("div",{className:"muted",style:{fontSize:11,marginTop:2,lineHeight:1.2},children:le.subtitle})]}):null,(()=>{const S=Re.min,O=Re.max,D=Math.max(1,O-S);return at.map((b,V)=>{const U=(b.tsMs-S)/D,N=Math.min(1,Math.max(0,U))*100,k=b.type==="kill"||b.type==="death"||b.type==="aiKill"?"rgba(255,74,74,0.95)":b.type==="restart"?"rgba(255,217,102,0.95)":"rgba(183,247,200,0.95)",se=b.type==="disconnect"?"brightness(0.65) saturate(1.1)":void 0,oe=`+${Cl(b.tsMs-S)}${tt?` • ${tt(b.tsMs)}`:""}${b.subtitle?` • ${b.subtitle}`:""}`,ge=`${b.tsMs}|${b.type}|${b.title}|${b.subtitle||""}`;return E.jsx("button",{type:"button",className:"button",style:{position:"absolute",left:`calc(${N}% - 4px)`,top:4,width:8,height:8,borderRadius:999,padding:0,border:"1px solid rgba(0,0,0,0.35)",background:k,filter:se},onMouseEnter:()=>{Ae({tsMs:b.tsMs,type:b.type,title:b.title,subtitle:oe,leftPct:N})},onMouseLeave:()=>Ae(null),onClick:()=>{qe(!1),y(!1),mt(b.tsMs),typeof b.focusPlayerId=="number"&&ee(b.focusPlayerId),b.focusPos&&(z(b.focusPos),Q(Ee=>Ee+1)),Z("events"),Qe(ge),Ae(null)}},`${b.tsMs}-${V}-${b.type}`)})})()]}):null,E.jsx("input",{style:{width:"100%"},type:"range",min:Re.min,max:Re.max,value:Re.value,disabled:Re.disabled,onChange:S=>{const O=Number(S.target.value);Number.isFinite(O)&&(g&&y(!1),yt&&qe(!1),m(O))}})]})})]})})}):null,Ce?null:E.jsxs("div",{style:{padding:12,height:"calc(100vh - 72px)",boxSizing:"border-box",overflow:"auto"},children:[E.jsxs("div",{className:"card",style:{marginBottom:12},children:[E.jsx("div",{style:{fontWeight:900,letterSpacing:.2},children:"Server overview"}),E.jsx("div",{style:{marginTop:4,fontSize:13},children:"Pick a server to open the replay viewer. Times are shown in your local clock."}),a?E.jsx("div",{className:"error",style:{marginTop:10},children:a}):null]}),E.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:(s&&s.length>0?s:e.map(S=>({serverId:S.id,name:S.name,lastIngestTsMs:null,minTsMs:null,maxTsMs:null,firstReceivedAt:null,lastReceivedAt:null,storedEvents:null,totalEvents:null,retentionMs:0,mapId:null}))).map(S=>{const O=typeof S.retentionMs=="number"?S.retentionMs:0,D=typeof S.lastReceivedAt=="number"?S.lastReceivedAt:null,b=O>0&&D!==null?D-O:null,V=typeof S.firstReceivedAt=="number"?b!==null?Math.max(S.firstReceivedAt,b):S.firstReceivedAt:b;return E.jsxs("button",{className:"card",style:{textAlign:"left",cursor:"pointer",border:"none"},onClick:()=>{r(S.serverId),G([]),ee(null),z(null),ve([]),p({minTsMs:null,maxTsMs:null}),m(null),me.current=null,et.current=0,it([])},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12},children:[E.jsx("div",{style:{fontWeight:900},children:S.name}),E.jsx("div",{className:"muted",style:{fontSize:12},children:S.serverId})]}),E.jsxs("div",{style:{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Events"}),E.jsx("div",{style:{fontWeight:800},children:typeof S.storedEvents=="number"?`${S.storedEvents} events`:"—"}),typeof S.totalEvents=="number"&&typeof S.storedEvents=="number"&&S.totalEvents!==S.storedEvents?E.jsxs("div",{className:"muted",style:{fontSize:12,marginTop:2},children:["All-time: ",S.totalEvents," events"]}):null]}),E.jsxs("div",{children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Retention"}),E.jsx("div",{style:{fontWeight:800},children:O>0?nC(O):"∞"})]}),E.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Buffer window"}),E.jsxs("div",{style:{fontWeight:800,fontSize:13},children:[uf(V)," → ",uf(D)]})]}),E.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Last ingest"}),E.jsx("div",{style:{fontWeight:800,fontSize:13},children:uf(S.lastReceivedAt)})]})]})]},S.serverId)})}),(!s||s.length===0)&&e.length===0?E.jsx("div",{style:{marginTop:12},children:"No servers yet — add one in the Dev page, then come back here."}):null]})]})}function bg(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function sC(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function oC(){const[t,e]=F.useState(null),[n,i]=F.useState(null);F.useEffect(()=>{let s=!1;return cd().then(o=>{s||(e(o),i(null))}).catch(o=>{if(s)return;const a=o instanceof Error?o.message:"Failed to load replay status";i(a)}),()=>{s=!0}},[]);const r=F.useMemo(()=>{if(!t)return[];const s=t.slice();return s.sort((o,a)=>{const l=typeof o.storedEvents=="number"?o.storedEvents:-1;return(typeof a.storedEvents=="number"?a.storedEvents:-1)-l}),s.slice(0,6)},[t]);return E.jsx("div",{className:"container",children:E.jsxs("div",{className:"stack",children:[E.jsx("div",{className:"card",style:{padding:18},children:E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsx("div",{className:"label",children:"Welcome"}),E.jsx("h1",{className:"h1",style:{marginTop:0},children:"ReforgedZ Admin"}),E.jsx("div",{className:"muted",children:"Use the sidebar to manage users, servers, and replay history."})]})}),E.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:[E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",style:{gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Replay overview"}),E.jsx("div",{className:"muted",style:{fontSize:13},children:t?`${t.length} server${t.length===1?"":"s"} detected.`:"Loading…"}),n?E.jsx("div",{className:"error",style:{marginTop:8},children:n}):null]}),r.length>0?E.jsx("div",{className:"stack",style:{gap:8},children:r.map(s=>{const o=typeof s.retentionMs=="number"?s.retentionMs:0,a=typeof s.lastReceivedAt=="number"?s.lastReceivedAt:null,l=o>0&&a!==null?a-o:null,c=typeof s.firstReceivedAt=="number"?l!==null?Math.max(s.firstReceivedAt,l):s.firstReceivedAt:l;return E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:850},children:s.name}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:[bg(c)," → ",bg(a)]})]}),E.jsxs("div",{style:{textAlign:"right"},children:[E.jsx("div",{style:{fontWeight:900},children:typeof s.storedEvents=="number"?`${s.storedEvents} events`:"—"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:o>0?sC(o):"∞"}),typeof s.totalEvents=="number"&&typeof s.storedEvents=="number"&&s.totalEvents!==s.storedEvents?E.jsxs("div",{className:"muted",style:{fontSize:11},children:["All-time ",s.totalEvents," events"]}):null]})]},s.serverId)})}):E.jsx("div",{className:"muted",style:{fontSize:12},children:"Open Replay Tool to see a detailed per-server dashboard."})]})}),E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",style:{gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Replay Tool tips"}),E.jsx("div",{className:"muted",style:{fontSize:13},children:"A few quick controls that help a lot."})]}),E.jsxs("div",{className:"stack",style:{gap:6,fontSize:13},children:[E.jsxs("div",{children:[E.jsx("span",{style:{fontWeight:850},children:"Attach camera:"})," click a player in the left panel."]}),E.jsxs("div",{children:[E.jsx("span",{style:{fontWeight:850},children:"Detach:"})," press ",E.jsx("span",{style:{fontWeight:900},children:"F"}),"."]}),E.jsxs("div",{children:[E.jsx("span",{style:{fontWeight:850},children:"Event jump offset:"})," defaults to 5s before the event (configurable in Replay Tool)."]})]})]})}),E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",style:{gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Retention"}),E.jsx("div",{className:"muted",style:{fontSize:13},children:"Replay is a rolling buffer. Restarts are marked in the timeline."})]}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"If you clear a server’s history, replay data is removed but cached map metadata is preserved."})]})})]})]})})}function aC(){const[t,e]=F.useState(null),[n,i]=F.useState(!1),[r,s]=F.useState([]),[o,a]=F.useState(""),[l,c]=F.useState(""),[f,d]=F.useState(!0),[h,g]=F.useState(!1),[y,_]=F.useState(!1);async function p(){i(!0),e(null);try{const m=await TM();s(m)}catch(m){e(m instanceof Error?m.message:"Failed to load users")}finally{i(!1)}}F.useEffect(()=>{p()},[]);const u=F.useMemo(()=>o.trim().length>=3&&l.length>=6,[l.length,o]);return E.jsx("div",{className:"container",children:E.jsxs("div",{className:"stack",children:[E.jsx("h1",{className:"h1",children:"Admin"}),t?E.jsx("div",{className:"error",children:t}):null,E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Create user"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Create a new account and choose which tools it can access."})]}),E.jsxs("div",{className:"row",children:[E.jsxs("div",{style:{flex:1,minWidth:240},children:[E.jsx("div",{className:"label",children:"Username"}),E.jsx("input",{className:"input",value:o,onChange:m=>a(m.target.value),placeholder:"username"})]}),E.jsxs("div",{style:{flex:1,minWidth:240},children:[E.jsx("div",{className:"label",children:"Password"}),E.jsx("input",{className:"input",type:"password",value:l,onChange:m=>c(m.target.value),placeholder:"password"})]})]}),E.jsxs("div",{className:"row",style:{gap:16},children:[E.jsxs("label",{className:"row",style:{gap:8},children:[E.jsx("input",{type:"checkbox",checked:f,onChange:m=>d(m.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Replay Tool"})]}),E.jsxs("label",{className:"row",style:{gap:8},children:[E.jsx("input",{type:"checkbox",checked:h,onChange:m=>g(m.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Admin"})]}),E.jsxs("label",{className:"row",style:{gap:8},children:[E.jsx("input",{type:"checkbox",checked:y,onChange:m=>_(m.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Dev"})]})]}),E.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:E.jsx("button",{className:"button buttonPrimary",disabled:!u||n,onClick:async()=>{i(!0),e(null);try{await AM({username:o.trim(),password:l,tools:{replay:f,admin:h,dev:y}}),a(""),c(""),d(!0),g(!1),_(!1),await p()}catch(m){e(m instanceof Error?m.message:"Failed to create user")}finally{i(!1)}},children:"Create user"})})]})}),E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Users"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Manage tool access and reset passwords."})]}),E.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:p,children:"Refresh"})]}),E.jsx("div",{className:"scroll",style:{maxHeight:420,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No users found."}):r.map(m=>{var v,M,I,P,C,G;return E.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:E.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:800},children:m.username}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:["tools: ",(v=m.tools)!=null&&v.replay?"replay ":"",(M=m.tools)!=null&&M.admin?"admin ":"",(I=m.tools)!=null&&I.dev?"dev ":""]})]}),E.jsxs("div",{className:"row",style:{gap:8},children:[E.jsxs("button",{className:"button",onClick:async()=>{var ne,x,L;i(!0),e(null);try{await wu(m.username,{replay:!((ne=m.tools)!=null&&ne.replay),admin:!!((x=m.tools)!=null&&x.admin),dev:!!((L=m.tools)!=null&&L.dev)}),await p()}catch(ee){e(ee instanceof Error?ee.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle replay tool access",children:["Replay: ",(P=m.tools)!=null&&P.replay?"On":"Off"]}),E.jsxs("button",{className:"button",onClick:async()=>{var ne,x,L;i(!0),e(null);try{await wu(m.username,{replay:!!((ne=m.tools)!=null&&ne.replay),admin:!((x=m.tools)!=null&&x.admin),dev:!!((L=m.tools)!=null&&L.dev)}),await p()}catch(ee){e(ee instanceof Error?ee.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle admin access",children:["Admin: ",(C=m.tools)!=null&&C.admin?"On":"Off"]}),E.jsxs("button",{className:"button",onClick:async()=>{var ne,x,L;i(!0),e(null);try{await wu(m.username,{replay:!!((ne=m.tools)!=null&&ne.replay),admin:!!((x=m.tools)!=null&&x.admin),dev:!((L=m.tools)!=null&&L.dev)}),await p()}catch(ee){e(ee instanceof Error?ee.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle dev access",children:["Dev: ",(G=m.tools)!=null&&G.dev?"On":"Off"]}),E.jsx("button",{className:"button",style:{borderColor:"rgba(255, 180, 180, 0.35)"},disabled:n,onClick:async()=>{if(confirm(`Delete user '${m.username}'?`)){i(!0),e(null);try{await bM(m.username),await p()}catch(ne){e(ne instanceof Error?ne.message:"Failed to delete user")}finally{i(!1)}}},children:"Delete"})]})]})},m.username)})})]})})]})})}function lC(){const[t,e]=F.useState(null),[n,i]=F.useState(!1),[r,s]=F.useState([]),[o,a]=F.useState(""),[l,c]=F.useState(""),[f,d]=F.useState(!1),[h,g]=F.useState(""),[y,_]=F.useState(""),[p,u]=F.useState("");async function m(){i(!0),e(null);try{const v=await CM();s(v);const M=await NM();d(!!M.isSet),a(M.masked||"")}catch(v){e(v instanceof Error?v.message:"Failed to load dev servers")}finally{i(!1)}}return F.useEffect(()=>{m()},[]),E.jsx("div",{className:"container",children:E.jsxs("div",{className:"stack",children:[E.jsx("h1",{className:"h1",children:"Dev"}),t?E.jsx("div",{className:"error",children:t}):null,E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Discord webhook (global)"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Used by “Export event to Discord”. One webhook URL is shared for all servers."})]}),E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Current"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:f?o||"set":"not set"})]}),E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Webhook URL"}),E.jsx("input",{className:"input",type:"password",value:l,onChange:v=>c(v.target.value),placeholder:"https://discord.com/api/webhooks/..."}),E.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Leave blank and click Save to clear."})]}),E.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:E.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:async()=>{i(!0),e(null);try{await IM(l.trim()),c(""),await m()}catch(v){e(v instanceof Error?v.message:"Failed to save webhook")}finally{i(!1)}},children:"Save webhook"})}),E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Add server"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Adds a new ingest key so the backend will accept replay uploads for that server."})]}),E.jsxs("div",{className:"row",children:[E.jsxs("div",{style:{flex:1,minWidth:240},children:[E.jsx("div",{className:"label",children:"Server ID"}),E.jsx("input",{className:"input",value:h,onChange:v=>g(v.target.value),placeholder:"reforgedz-dev-eu-1"})]}),E.jsxs("div",{style:{flex:1,minWidth:240},children:[E.jsx("div",{className:"label",children:"Server name (optional)"}),E.jsx("input",{className:"input",value:p,onChange:v=>u(v.target.value),placeholder:"EU #1"})]})]}),E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Server key / secret"}),E.jsx("input",{className:"input",value:y,onChange:v=>_(v.target.value),placeholder:"secret"}),E.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"This must match what the Reforger exporter sends as serverKey."})]}),E.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:E.jsx("button",{className:"button buttonPrimary",disabled:n||h.trim().length===0||y.trim().length<6,onClick:async()=>{i(!0),e(null);try{await RM({serverId:h.trim(),serverKey:y.trim(),name:p.trim()||void 0}),g(""),_(""),u(""),await m()}catch(v){e(v instanceof Error?v.message:"Failed to add server")}finally{i(!1)}},children:"Add server"})})]})}),E.jsxs("div",{className:"card",children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Servers"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Clear history deletes stored replay history for that server (events + snapshots). Cached map data is kept."})]}),E.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:m,children:"Refresh"})]}),E.jsx("div",{style:{height:10}}),E.jsx("div",{className:"scroll",style:{maxHeight:520,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No servers configured."}):r.map(v=>E.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:E.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:800},children:v.name||v.id}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:["id: ",v.id,v.keyHint?` • key: ${v.keyHint}`:""]})]}),E.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Clear history for '${v.id}'? This deletes stored replay data.`)){i(!0),e(null);try{await PM(v.id),await m()}catch(M){e(M instanceof Error?M.message:"Failed to clear history")}finally{i(!1)}}},children:"Clear history"}),E.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Regenerate terrain data for '${v.id}'? This queues a command for the exporter to re-send map terrain.`)){i(!0),e(null);try{await LM(v.id),await m()}catch(M){e(M instanceof Error?M.message:"Failed to regenerate terrain")}finally{i(!1)}}},children:"Regenerate terrain data"})]})},v.id))})]})]})})}function Rl(t){return E.jsx(pM,{to:t.to,className:({isActive:e})=>`navItem${e?" navItemActive":""}`,children:t.label})}function cC(){const t=Gc();function e(){_M(),t("/login",{replace:!0})}return E.jsxs("div",{className:"appShell",children:[E.jsxs("aside",{className:"sidebar",children:[E.jsxs("div",{className:"stack",style:{gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"ReforgedZ"}),E.jsx("div",{className:"h2",children:"Admin Panel"})]}),E.jsx("div",{style:{height:8}}),E.jsx("div",{className:"label",children:"Tools"}),E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsx(Rl,{to:"/",label:"Home"}),Su("replay")?E.jsx(Rl,{to:"/replay",label:"Replay Tool"}):null,Su("admin")?E.jsx(Rl,{to:"/admin",label:"Admin"}):null,Su("dev")?E.jsx(Rl,{to:"/dev",label:"Dev"}):null]})]}),E.jsx("div",{style:{flex:1}}),E.jsx("button",{className:"button buttonPrimary",onClick:e,children:"Log out"})]}),E.jsx("main",{className:"main",children:E.jsx(eM,{})})]})}function uC(t){const e=ir();return tn()?E.jsx(E.Fragment,{children:t.children}):E.jsx(K0,{to:"/login",replace:!0,state:{from:e.pathname}})}function fC(){return E.jsxs(nM,{children:[E.jsx(fr,{path:"/login",element:E.jsx(UM,{})}),E.jsxs(fr,{element:E.jsx(uC,{children:E.jsx(cC,{})}),children:[E.jsx(fr,{path:"/",element:E.jsx(oC,{})}),E.jsx(fr,{path:"/replay",element:E.jsx(rC,{})}),E.jsx(fr,{path:"/admin",element:E.jsx(aC,{})}),E.jsx(fr,{path:"/dev",element:E.jsx(lC,{})})]}),E.jsx(fr,{path:"*",element:E.jsx(K0,{to:"/",replace:!0})})]})}df.createRoot(document.getElementById("root")).render(E.jsx(Og.StrictMode,{children:E.jsx(uM,{children:E.jsx(fC,{})})}));
