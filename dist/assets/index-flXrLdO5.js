function S_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function M_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pg={exports:{}},cc={},mg={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),E_=Symbol.for("react.portal"),w_=Symbol.for("react.fragment"),T_=Symbol.for("react.strict_mode"),A_=Symbol.for("react.profiler"),b_=Symbol.for("react.provider"),C_=Symbol.for("react.context"),R_=Symbol.for("react.forward_ref"),P_=Symbol.for("react.suspense"),L_=Symbol.for("react.memo"),N_=Symbol.for("react.lazy"),hh=Symbol.iterator;function I_(t){return t===null||typeof t!="object"?null:(t=hh&&t[hh]||t["@@iterator"],typeof t=="function"?t:null)}var gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vg=Object.assign,_g={};function ao(t,e,n){this.props=t,this.context=e,this.refs=_g,this.updater=n||gg}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yg(){}yg.prototype=ao.prototype;function ld(t,e,n){this.props=t,this.context=e,this.refs=_g,this.updater=n||gg}var cd=ld.prototype=new yg;cd.constructor=ld;vg(cd,ao.prototype);cd.isPureReactComponent=!0;var ph=Array.isArray,xg=Object.prototype.hasOwnProperty,ud={current:null},Sg={key:!0,ref:!0,__self:!0,__source:!0};function Mg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xg.call(e,i)&&!Sg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ha,type:t,key:s,ref:o,props:r,_owner:ud.current}}function D_(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function U_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mh=/\/+/g;function Ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?U_(""+t.key):e.toString(36)}function ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ha:case E_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ic(o,0):i,ph(r)?(n="",t!=null&&(n=t.replace(mh,"$&/")+"/"),ml(r,e,n,"",function(c){return c})):r!=null&&(fd(r)&&(r=D_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(mh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ph(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ic(s,a);o+=ml(s,e,n,l,r)}else if(l=I_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ic(s,a++),o+=ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var i=[],r=0;return ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function F_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var An={current:null},gl={transition:null},O_={ReactCurrentDispatcher:An,ReactCurrentBatchConfig:gl,ReactCurrentOwner:ud};function Eg(){throw Error("act(...) is not supported in production builds of React.")}yt.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};yt.Component=ao;yt.Fragment=w_;yt.Profiler=A_;yt.PureComponent=ld;yt.StrictMode=T_;yt.Suspense=P_;yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_;yt.act=Eg;yt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=vg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ud.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xg.call(e,l)&&!Sg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ha,type:t.type,key:r,ref:s,props:i,_owner:o}};yt.createContext=function(t){return t={$$typeof:C_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:b_,_context:t},t.Consumer=t};yt.createElement=Mg;yt.createFactory=function(t){var e=Mg.bind(null,t);return e.type=t,e};yt.createRef=function(){return{current:null}};yt.forwardRef=function(t){return{$$typeof:R_,render:t}};yt.isValidElement=fd;yt.lazy=function(t){return{$$typeof:N_,_payload:{_status:-1,_result:t},_init:F_}};yt.memo=function(t,e){return{$$typeof:L_,type:t,compare:e===void 0?null:e}};yt.startTransition=function(t){var e=gl.transition;gl.transition={};try{t()}finally{gl.transition=e}};yt.unstable_act=Eg;yt.useCallback=function(t,e){return An.current.useCallback(t,e)};yt.useContext=function(t){return An.current.useContext(t)};yt.useDebugValue=function(){};yt.useDeferredValue=function(t){return An.current.useDeferredValue(t)};yt.useEffect=function(t,e){return An.current.useEffect(t,e)};yt.useId=function(){return An.current.useId()};yt.useImperativeHandle=function(t,e,n){return An.current.useImperativeHandle(t,e,n)};yt.useInsertionEffect=function(t,e){return An.current.useInsertionEffect(t,e)};yt.useLayoutEffect=function(t,e){return An.current.useLayoutEffect(t,e)};yt.useMemo=function(t,e){return An.current.useMemo(t,e)};yt.useReducer=function(t,e,n){return An.current.useReducer(t,e,n)};yt.useRef=function(t){return An.current.useRef(t)};yt.useState=function(t){return An.current.useState(t)};yt.useSyncExternalStore=function(t,e,n){return An.current.useSyncExternalStore(t,e,n)};yt.useTransition=function(){return An.current.useTransition()};yt.version="18.3.1";mg.exports=yt;var D=mg.exports;const wg=M_(D),k_=S_({__proto__:null,default:wg},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=D,B_=Symbol.for("react.element"),H_=Symbol.for("react.fragment"),G_=Object.prototype.hasOwnProperty,V_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W_={key:!0,ref:!0,__self:!0,__source:!0};function Tg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)G_.call(e,i)&&!W_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B_,type:t,key:s,ref:o,props:r,_owner:V_.current}}cc.Fragment=H_;cc.jsx=Tg;cc.jsxs=Tg;pg.exports=cc;var M=pg.exports,Ku={},Ag={exports:{}},Gn={},bg={exports:{}},Cg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,X){var q=H.length;H.push(X);e:for(;0<q;){var se=q-1>>>1,de=H[se];if(0<r(de,X))H[se]=X,H[q]=de,q=se;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var X=H[0],q=H.pop();if(q!==X){H[0]=q;e:for(var se=0,de=H.length,Ke=de>>>1;se<Ke;){var ee=2*(se+1)-1,le=H[ee],be=ee+1,Fe=H[be];if(0>r(le,q))be<de&&0>r(Fe,le)?(H[se]=Fe,H[be]=q,se=be):(H[se]=le,H[ee]=q,se=ee);else if(be<de&&0>r(Fe,q))H[se]=Fe,H[be]=q,se=be;else break e}}return X}function r(H,X){var q=H.sortIndex-X.sortIndex;return q!==0?q:H.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,g=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(H){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=H)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function S(H){if(y=!1,v(H),!_)if(n(l)!==null)_=!0,Q(L);else{var X=n(c);X!==null&&ae(S,X.startTime-H)}}function L(H,X){_=!1,y&&(y=!1,u(G),G=-1),g=!0;var q=h;try{for(v(X),d=n(l);d!==null&&(!(d.expirationTime>X)||H&&!P());){var se=d.callback;if(typeof se=="function"){d.callback=null,h=d.priorityLevel;var de=se(d.expirationTime<=X);X=t.unstable_now(),typeof de=="function"?d.callback=de:d===n(l)&&i(l),v(X)}else i(l);d=n(l)}if(d!==null)var Ke=!0;else{var ee=n(c);ee!==null&&ae(S,ee.startTime-X),Ke=!1}return Ke}finally{d=null,h=q,g=!1}}var C=!1,b=null,G=-1,re=5,x=-1;function P(){return!(t.unstable_now()-x<re)}function te(){if(b!==null){var H=t.unstable_now();x=H;var X=!0;try{X=b(!0,H)}finally{X?ce():(C=!1,b=null)}}else C=!1}var ce;if(typeof m=="function")ce=function(){m(te)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,ne=k.port2;k.port1.onmessage=te,ce=function(){ne.postMessage(null)}}else ce=function(){p(te,0)};function Q(H){b=H,C||(C=!0,ce())}function ae(H,X){G=p(function(){H(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Q(L))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var q=h;h=X;try{return H()}finally{h=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var q=h;h=H;try{return X()}finally{h=q}},t.unstable_scheduleCallback=function(H,X,q){var se=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?se+q:se):q=se,H){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=q+de,H={id:f++,callback:X,priorityLevel:H,startTime:q,expirationTime:de,sortIndex:-1},q>se?(H.sortIndex=q,e(c,H),n(l)===null&&H===n(c)&&(y?(u(G),G=-1):y=!0,ae(S,q-se))):(H.sortIndex=de,e(l,H),_||g||(_=!0,Q(L))),H},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(H){var X=h;return function(){var q=h;h=X;try{return H.apply(this,arguments)}finally{h=q}}}})(Cg);bg.exports=Cg;var j_=bg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_=D,Hn=j_;function ve(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rg=new Set,$o={};function ns(t,e){Ys(t,e),Ys(t+"Capture",e)}function Ys(t,e){for($o[t]=e,t=0;t<e.length;t++)Rg.add(e[t])}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=Object.prototype.hasOwnProperty,$_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gh={},vh={};function Y_(t){return Zu.call(vh,t)?!0:Zu.call(gh,t)?!1:$_.test(t)?vh[t]=!0:(gh[t]=!0,!1)}function q_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K_(t,e,n,i){if(e===null||typeof e>"u"||q_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dn[t]=new bn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dn[e]=new bn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dn[t]=new bn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dn[t]=new bn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dn[t]=new bn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dn[t]=new bn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dn[t]=new bn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dn[t]=new bn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dn[t]=new bn(t,5,!1,t.toLowerCase(),null,!1,!1)});var dd=/[\-:]([a-z])/g;function hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dd,hd);dn[e]=new bn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dd,hd);dn[e]=new bn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dd,hd);dn[e]=new bn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dn[t]=new bn(t,1,!1,t.toLowerCase(),null,!1,!1)});dn.xlinkHref=new bn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dn[t]=new bn(t,1,!1,t.toLowerCase(),null,!0,!0)});function pd(t,e,n,i){var r=dn.hasOwnProperty(e)?dn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K_(e,n,r,i)&&(n=null),i||r===null?Y_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Gi=X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),As=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),md=Symbol.for("react.strict_mode"),Qu=Symbol.for("react.profiler"),Pg=Symbol.for("react.provider"),Lg=Symbol.for("react.context"),gd=Symbol.for("react.forward_ref"),Ju=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),vd=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),Ng=Symbol.for("react.offscreen"),_h=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var Bt=Object.assign,Dc;function Io(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Uc=!1;function Fc(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Io(t):""}function Z_(t){switch(t.tag){case 5:return Io(t.type);case 16:return Io("Lazy");case 13:return Io("Suspense");case 19:return Io("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case As:return"Portal";case Qu:return"Profiler";case md:return"StrictMode";case Ju:return"Suspense";case ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lg:return(t.displayName||"Context")+".Consumer";case Pg:return(t._context.displayName||"Context")+".Provider";case gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vd:return e=t.displayName||null,e!==null?e:tf(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return tf(t(e))}catch{}}return null}function Q_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(e);case 8:return e===md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J_(t){var e=Ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=J_(t))}function Dg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ig(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nf(t,e){var n=e.checked;return Bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ug(t,e){e=e.checked,e!=null&&pd(t,"checked",e,!1)}function rf(t,e){Ug(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&sf(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sf(t,e,n){(e!=="number"||Rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function Bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function of(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ve(91));return Bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ve(92));if(Do(n)){if(1<n.length)throw Error(ve(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function Fg(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Mh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Og(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function af(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Og(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ey=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){ey.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function zg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function Bg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=zg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ty=Bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(ty[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ve(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ve(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ve(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ve(62))}}function cf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uf=null;function _d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ff=null,Hs=null,Gs=null;function Eh(t){if(t=ga(t)){if(typeof ff!="function")throw Error(ve(280));var e=t.stateNode;e&&(e=pc(e),ff(t.stateNode,t.type,e))}}function Hg(t){Hs?Gs?Gs.push(t):Gs=[t]:Hs=t}function Gg(){if(Hs){var t=Hs,e=Gs;if(Gs=Hs=null,Eh(t),e)for(t=0;t<e.length;t++)Eh(e[t])}}function Vg(t,e){return t(e)}function Wg(){}var Oc=!1;function jg(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return Vg(t,e,n)}finally{Oc=!1,(Hs!==null||Gs!==null)&&(Wg(),Gg())}}function qo(t,e){var n=t.stateNode;if(n===null)return null;var i=pc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ve(231,e,typeof n));return n}var df=!1;if(Oi)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){df=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{df=!1}function ny(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ko=!1,Pl=null,Ll=!1,hf=null,iy={onError:function(t){ko=!0,Pl=t}};function ry(t,e,n,i,r,s,o,a,l){ko=!1,Pl=null,ny.apply(iy,arguments)}function sy(t,e,n,i,r,s,o,a,l){if(ry.apply(this,arguments),ko){if(ko){var c=Pl;ko=!1,Pl=null}else throw Error(ve(198));Ll||(Ll=!0,hf=c)}}function is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wh(t){if(is(t)!==t)throw Error(ve(188))}function oy(t){var e=t.alternate;if(!e){if(e=is(t),e===null)throw Error(ve(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return wh(r),t;if(s===i)return wh(r),e;s=s.sibling}throw Error(ve(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ve(189))}}if(n.alternate!==i)throw Error(ve(190))}if(n.tag!==3)throw Error(ve(188));return n.stateNode.current===n?t:e}function $g(t){return t=oy(t),t!==null?Yg(t):null}function Yg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yg(t);if(e!==null)return e;t=t.sibling}return null}var qg=Hn.unstable_scheduleCallback,Th=Hn.unstable_cancelCallback,ay=Hn.unstable_shouldYield,ly=Hn.unstable_requestPaint,Vt=Hn.unstable_now,cy=Hn.unstable_getCurrentPriorityLevel,yd=Hn.unstable_ImmediatePriority,Kg=Hn.unstable_UserBlockingPriority,Nl=Hn.unstable_NormalPriority,uy=Hn.unstable_LowPriority,Zg=Hn.unstable_IdlePriority,uc=null,Mi=null;function fy(t){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(uc,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:py,dy=Math.log,hy=Math.LN2;function py(t){return t>>>=0,t===0?32:31-(dy(t)/hy|0)|0}var Ta=64,Aa=4194304;function Uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Uo(a):(s&=o,s!==0&&(i=Uo(s)))}else o=n&~r,o!==0?i=Uo(o):s!==0&&(i=Uo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function my(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-di(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=my(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qg(){var t=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),t}function kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function vy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var bt=0;function Jg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ev,Sd,tv,nv,iv,mf=!1,ba=[],cr=null,ur=null,fr=null,Ko=new Map,Zo=new Map,ir=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ah(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function _o(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ga(e),e!==null&&Sd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function yy(t,e,n,i,r){switch(e){case"focusin":return cr=_o(cr,t,e,n,i,r),!0;case"dragenter":return ur=_o(ur,t,e,n,i,r),!0;case"mouseover":return fr=_o(fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ko.set(s,_o(Ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Zo.set(s,_o(Zo.get(s)||null,t,e,n,i,r)),!0}return!1}function rv(t){var e=zr(t.target);if(e!==null){var n=is(e);if(n!==null){if(e=n.tag,e===13){if(e=Xg(n),e!==null){t.blockedOn=e,iv(t.priority,function(){tv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);uf=i,n.target.dispatchEvent(i),uf=null}else return e=ga(n),e!==null&&Sd(e),t.blockedOn=n,!1;e.shift()}return!0}function bh(t,e,n){vl(t)&&n.delete(e)}function xy(){mf=!1,cr!==null&&vl(cr)&&(cr=null),ur!==null&&vl(ur)&&(ur=null),fr!==null&&vl(fr)&&(fr=null),Ko.forEach(bh),Zo.forEach(bh)}function yo(t,e){t.blockedOn===e&&(t.blockedOn=null,mf||(mf=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,xy)))}function Qo(t){function e(r){return yo(r,t)}if(0<ba.length){yo(ba[0],t);for(var n=1;n<ba.length;n++){var i=ba[n];i.blockedOn===t&&(i.blockedOn=null)}}for(cr!==null&&yo(cr,t),ur!==null&&yo(ur,t),fr!==null&&yo(fr,t),Ko.forEach(e),Zo.forEach(e),n=0;n<ir.length;n++)i=ir[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)rv(n),n.blockedOn===null&&ir.shift()}var Vs=Gi.ReactCurrentBatchConfig,Dl=!0;function Sy(t,e,n,i){var r=bt,s=Vs.transition;Vs.transition=null;try{bt=1,Md(t,e,n,i)}finally{bt=r,Vs.transition=s}}function My(t,e,n,i){var r=bt,s=Vs.transition;Vs.transition=null;try{bt=4,Md(t,e,n,i)}finally{bt=r,Vs.transition=s}}function Md(t,e,n,i){if(Dl){var r=gf(t,e,n,i);if(r===null)Yc(t,e,i,Ul,n),Ah(t,i);else if(yy(r,t,e,n,i))i.stopPropagation();else if(Ah(t,i),e&4&&-1<_y.indexOf(t)){for(;r!==null;){var s=ga(r);if(s!==null&&ev(s),s=gf(t,e,n,i),s===null&&Yc(t,e,i,Ul,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Yc(t,e,i,null,n)}}var Ul=null;function gf(t,e,n,i){if(Ul=null,t=_d(i),t=zr(t),t!==null)if(e=is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ul=t,null}function sv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cy()){case yd:return 1;case Kg:return 4;case Nl:case uy:return 16;case Zg:return 536870912;default:return 16}default:return 16}}var sr=null,Ed=null,_l=null;function ov(){if(_l)return _l;var t,e=Ed,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return _l=r.slice(t,1<i?1-i:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function Ch(){return!1}function Vn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ca:Ch,this.isPropagationStopped=Ch,this}return Bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wd=Vn(lo),ma=Bt({},lo,{view:0,detail:0}),Ey=Vn(ma),zc,Bc,xo,fc=Bt({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Td,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(zc=t.screenX-xo.screenX,Bc=t.screenY-xo.screenY):Bc=zc=0,xo=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Rh=Vn(fc),wy=Bt({},fc,{dataTransfer:0}),Ty=Vn(wy),Ay=Bt({},ma,{relatedTarget:0}),Hc=Vn(Ay),by=Bt({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),Cy=Vn(by),Ry=Bt({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Py=Vn(Ry),Ly=Bt({},lo,{data:0}),Ph=Vn(Ly),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dy[t])?!!e[t]:!1}function Td(){return Uy}var Fy=Bt({},ma,{key:function(t){if(t.key){var e=Ny[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Td,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Oy=Vn(Fy),ky=Bt({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=Vn(ky),zy=Bt({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Td}),By=Vn(zy),Hy=Bt({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gy=Vn(Hy),Vy=Bt({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wy=Vn(Vy),jy=[9,13,27,32],Ad=Oi&&"CompositionEvent"in window,zo=null;Oi&&"documentMode"in document&&(zo=document.documentMode);var Xy=Oi&&"TextEvent"in window&&!zo,av=Oi&&(!Ad||zo&&8<zo&&11>=zo),Nh=" ",Ih=!1;function lv(t,e){switch(t){case"keyup":return jy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function $y(t,e){switch(t){case"compositionend":return cv(e);case"keypress":return e.which!==32?null:(Ih=!0,Nh);case"textInput":return t=e.data,t===Nh&&Ih?null:t;default:return null}}function Yy(t,e){if(Cs)return t==="compositionend"||!Ad&&lv(t,e)?(t=ov(),_l=Ed=sr=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return av&&e.locale!=="ko"?null:e.data;default:return null}}var qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qy[t.type]:e==="textarea"}function uv(t,e,n,i){Hg(i),e=Fl(e,"onChange"),0<e.length&&(n=new wd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Bo=null,Jo=null;function Ky(t){Sv(t,0)}function dc(t){var e=Ls(t);if(Dg(e))return t}function Zy(t,e){if(t==="change")return e}var fv=!1;if(Oi){var Gc;if(Oi){var Vc="oninput"in document;if(!Vc){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),Vc=typeof Uh.oninput=="function"}Gc=Vc}else Gc=!1;fv=Gc&&(!document.documentMode||9<document.documentMode)}function Fh(){Bo&&(Bo.detachEvent("onpropertychange",dv),Jo=Bo=null)}function dv(t){if(t.propertyName==="value"&&dc(Jo)){var e=[];uv(e,Jo,t,_d(t)),jg(Ky,e)}}function Qy(t,e,n){t==="focusin"?(Fh(),Bo=e,Jo=n,Bo.attachEvent("onpropertychange",dv)):t==="focusout"&&Fh()}function Jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(Jo)}function ex(t,e){if(t==="click")return dc(e)}function tx(t,e){if(t==="input"||t==="change")return dc(e)}function nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pi=typeof Object.is=="function"?Object.is:nx;function ea(t,e){if(pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Zu.call(e,r)||!pi(t[r],e[r]))return!1}return!0}function Oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kh(t,e){var n=Oh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oh(n)}}function hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pv(){for(var t=window,e=Rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rl(t.document)}return e}function bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ix(t){var e=pv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hv(n.ownerDocument.documentElement,n)){if(i!==null&&bd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=kh(n,s);var o=kh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rx=Oi&&"documentMode"in document&&11>=document.documentMode,Rs=null,vf=null,Ho=null,_f=!1;function zh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_f||Rs==null||Rs!==Rl(i)||(i=Rs,"selectionStart"in i&&bd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ho&&ea(Ho,i)||(Ho=i,i=Fl(vf,"onSelect"),0<i.length&&(e=new wd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Rs)))}function Ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ps={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Wc={},mv={};Oi&&(mv=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function hc(t){if(Wc[t])return Wc[t];if(!Ps[t])return t;var e=Ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mv)return Wc[t]=e[n];return t}var gv=hc("animationend"),vv=hc("animationiteration"),_v=hc("animationstart"),yv=hc("transitionend"),xv=new Map,Bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){xv.set(t,e),ns(e,[t])}for(var jc=0;jc<Bh.length;jc++){var Xc=Bh[jc],sx=Xc.toLowerCase(),ox=Xc[0].toUpperCase()+Xc.slice(1);Ar(sx,"on"+ox)}Ar(gv,"onAnimationEnd");Ar(vv,"onAnimationIteration");Ar(_v,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(yv,"onTransitionEnd");Ys("onMouseEnter",["mouseout","mouseover"]);Ys("onMouseLeave",["mouseout","mouseover"]);Ys("onPointerEnter",["pointerout","pointerover"]);Ys("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function Hh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sy(i,e,void 0,t),t.currentTarget=null}function Sv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Hh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Hh(r,a,c),s=l}}}if(Ll)throw t=hf,Ll=!1,hf=null,t}function Lt(t,e){var n=e[Ef];n===void 0&&(n=e[Ef]=new Set);var i=t+"__bubble";n.has(i)||(Mv(e,t,2,!1),n.add(i))}function $c(t,e,n){var i=0;e&&(i|=4),Mv(n,t,i,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[Pa]){t[Pa]=!0,Rg.forEach(function(n){n!=="selectionchange"&&(ax.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,$c("selectionchange",!1,e))}}function Mv(t,e,n,i){switch(sv(e)){case 1:var r=Sy;break;case 4:r=My;break;default:r=Md}n=r.bind(null,e,n,t),r=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}jg(function(){var c=s,f=_d(n),d=[];e:{var h=xv.get(t);if(h!==void 0){var g=wd,_=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":g=Oy;break;case"focusin":_="focus",g=Hc;break;case"focusout":_="blur",g=Hc;break;case"beforeblur":case"afterblur":g=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=By;break;case gv:case vv:case _v:g=Cy;break;case yv:g=Gy;break;case"scroll":g=Ey;break;case"wheel":g=Wy;break;case"copy":case"cut":case"paste":g=Py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Lh}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=qo(m,u),S!=null&&y.push(na(m,S,v)))),p)break;m=m.return}0<y.length&&(h=new g(h,_,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==uf&&(_=n.relatedTarget||n.fromElement)&&(zr(_)||_[ki]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?zr(_):null,_!==null&&(p=is(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(y=Rh,S="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Lh,S="onPointerLeave",u="onPointerEnter",m="pointer"),p=g==null?h:Ls(g),v=_==null?h:Ls(_),h=new y(S,m+"leave",g,n,f),h.target=p,h.relatedTarget=v,S=null,zr(f)===c&&(y=new y(u,m+"enter",_,n,f),y.target=v,y.relatedTarget=p,S=y),p=S,g&&_)t:{for(y=g,u=_,m=0,v=y;v;v=ss(v))m++;for(v=0,S=u;S;S=ss(S))v++;for(;0<m-v;)y=ss(y),m--;for(;0<v-m;)u=ss(u),v--;for(;m--;){if(y===u||u!==null&&y===u.alternate)break t;y=ss(y),u=ss(u)}y=null}else y=null;g!==null&&Gh(d,h,g,y,!1),_!==null&&p!==null&&Gh(d,p,_,y,!0)}}e:{if(h=c?Ls(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var L=Zy;else if(Dh(h))if(fv)L=tx;else{L=Jy;var C=Qy}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=ex);if(L&&(L=L(t,c))){uv(d,L,n,f);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&sf(h,"number",h.value)}switch(C=c?Ls(c):window,t){case"focusin":(Dh(C)||C.contentEditable==="true")&&(Rs=C,vf=c,Ho=null);break;case"focusout":Ho=vf=Rs=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,zh(d,n,f);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":zh(d,n,f)}var b;if(Ad)e:{switch(t){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Cs?lv(t,n)&&(G="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(av&&n.locale!=="ko"&&(Cs||G!=="onCompositionStart"?G==="onCompositionEnd"&&Cs&&(b=ov()):(sr=f,Ed="value"in sr?sr.value:sr.textContent,Cs=!0)),C=Fl(c,G),0<C.length&&(G=new Ph(G,t,null,n,f),d.push({event:G,listeners:C}),b?G.data=b:(b=cv(n),b!==null&&(G.data=b)))),(b=Xy?$y(t,n):Yy(t,n))&&(c=Fl(c,"onBeforeInput"),0<c.length&&(f=new Ph("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=b))}Sv(d,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=qo(t,n),s!=null&&i.unshift(na(t,s,r)),s=qo(t,e),s!=null&&i.push(na(t,s,r))),t=t.return}return i}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=qo(n,s),l!=null&&o.unshift(na(n,l,a))):r||(l=qo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lx=/\r\n?/g,cx=/\u0000|\uFFFD/g;function Vh(t){return(typeof t=="string"?t:""+t).replace(lx,`
`).replace(cx,"")}function La(t,e,n){if(e=Vh(e),Vh(t)!==e&&n)throw Error(ve(425))}function Ol(){}var yf=null,xf=null;function Sf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mf=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(t){return Wh.resolve(null).then(t).catch(dx)}:Mf;function dx(t){setTimeout(function(){throw t})}function qc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Qo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Qo(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var co=Math.random().toString(36).slice(2),xi="__reactFiber$"+co,ia="__reactProps$"+co,ki="__reactContainer$"+co,Ef="__reactEvents$"+co,hx="__reactListeners$"+co,px="__reactHandles$"+co;function zr(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jh(t);t!==null;){if(n=t[xi])return n;t=jh(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[xi]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ve(33))}function pc(t){return t[ia]||null}var wf=[],Ns=-1;function br(t){return{current:t}}function It(t){0>Ns||(t.current=wf[Ns],wf[Ns]=null,Ns--)}function Pt(t,e){Ns++,wf[Ns]=t.current,t.current=e}var Er={},yn=br(Er),Nn=br(!1),qr=Er;function qs(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function In(t){return t=t.childContextTypes,t!=null}function kl(){It(Nn),It(yn)}function Xh(t,e,n){if(yn.current!==Er)throw Error(ve(168));Pt(yn,e),Pt(Nn,n)}function Ev(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ve(108,Q_(t)||"Unknown",r));return Bt({},n,i)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,qr=yn.current,Pt(yn,t),Pt(Nn,Nn.current),!0}function $h(t,e,n){var i=t.stateNode;if(!i)throw Error(ve(169));n?(t=Ev(t,e,qr),i.__reactInternalMemoizedMergedChildContext=t,It(Nn),It(yn),Pt(yn,t)):It(Nn),Pt(Nn,n)}var Li=null,mc=!1,Kc=!1;function wv(t){Li===null?Li=[t]:Li.push(t)}function mx(t){mc=!0,wv(t)}function Cr(){if(!Kc&&Li!==null){Kc=!0;var t=0,e=bt;try{var n=Li;for(bt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,mc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),qg(yd,Cr),r}finally{bt=e,Kc=!1}}return null}var Is=[],Ds=0,Bl=null,Hl=0,Xn=[],$n=0,Kr=null,Ii=1,Di="";function Ir(t,e){Is[Ds++]=Hl,Is[Ds++]=Bl,Bl=t,Hl=e}function Tv(t,e,n){Xn[$n++]=Ii,Xn[$n++]=Di,Xn[$n++]=Kr,Kr=t;var i=Ii;t=Di;var r=32-di(i)-1;i&=~(1<<r),n+=1;var s=32-di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ii=1<<32-di(e)+r|n<<r|i,Di=s+t}else Ii=1<<s|n<<r|i,Di=t}function Cd(t){t.return!==null&&(Ir(t,1),Tv(t,1,0))}function Rd(t){for(;t===Bl;)Bl=Is[--Ds],Is[Ds]=null,Hl=Is[--Ds],Is[Ds]=null;for(;t===Kr;)Kr=Xn[--$n],Xn[$n]=null,Di=Xn[--$n],Xn[$n]=null,Ii=Xn[--$n],Xn[$n]=null}var Bn=null,zn=null,Dt=!1,li=null;function Av(t,e){var n=Zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Yh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bn=t,zn=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bn=t,zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:Ii,overflow:Di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bn=t,zn=null,!0):!1;default:return!1}}function Tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Af(t){if(Dt){var e=zn;if(e){var n=e;if(!Yh(t,e)){if(Tf(t))throw Error(ve(418));e=dr(n.nextSibling);var i=Bn;e&&Yh(t,e)?Av(i,n):(t.flags=t.flags&-4097|2,Dt=!1,Bn=t)}}else{if(Tf(t))throw Error(ve(418));t.flags=t.flags&-4097|2,Dt=!1,Bn=t}}}function qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function Na(t){if(t!==Bn)return!1;if(!Dt)return qh(t),Dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sf(t.type,t.memoizedProps)),e&&(e=zn)){if(Tf(t))throw bv(),Error(ve(418));for(;e;)Av(t,e),e=dr(e.nextSibling)}if(qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ve(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zn=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zn=null}}else zn=Bn?dr(t.stateNode.nextSibling):null;return!0}function bv(){for(var t=zn;t;)t=dr(t.nextSibling)}function Ks(){zn=Bn=null,Dt=!1}function Pd(t){li===null?li=[t]:li.push(t)}var gx=Gi.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ve(309));var i=n.stateNode}if(!i)throw Error(ve(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ve(284));if(!n._owner)throw Error(ve(290,t))}return t}function Ia(t,e){throw t=Object.prototype.toString.call(e),Error(ve(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kh(t){var e=t._init;return e(t._payload)}function Cv(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=gr(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,S){return m===null||m.tag!==6?(m=iu(v,u.mode,S),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,S){var L=v.type;return L===bs?f(u,m,v.props.children,S,v.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===tr&&Kh(L)===m.type)?(S=r(m,v.props),S.ref=So(u,m,v),S.return=u,S):(S=Al(v.type,v.key,v.props,null,u.mode,S),S.ref=So(u,m,v),S.return=u,S)}function c(u,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=ru(v,u.mode,S),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function f(u,m,v,S,L){return m===null||m.tag!==7?(m=Wr(v,u.mode,S,L),m.return=u,m):(m=r(m,v),m.return=u,m)}function d(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=iu(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ma:return v=Al(m.type,m.key,m.props,null,u.mode,v),v.ref=So(u,null,m),v.return=u,v;case As:return m=ru(m,u.mode,v),m.return=u,m;case tr:var S=m._init;return d(u,S(m._payload),v)}if(Do(m)||go(m))return m=Wr(m,u.mode,v,null),m.return=u,m;Ia(u,m)}return null}function h(u,m,v,S){var L=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return L!==null?null:a(u,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:return v.key===L?l(u,m,v,S):null;case As:return v.key===L?c(u,m,v,S):null;case tr:return L=v._init,h(u,m,L(v._payload),S)}if(Do(v)||go(v))return L!==null?null:f(u,m,v,S,null);Ia(u,v)}return null}function g(u,m,v,S,L){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(m,u,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ma:return u=u.get(S.key===null?v:S.key)||null,l(m,u,S,L);case As:return u=u.get(S.key===null?v:S.key)||null,c(m,u,S,L);case tr:var C=S._init;return g(u,m,v,C(S._payload),L)}if(Do(S)||go(S))return u=u.get(v)||null,f(m,u,S,L,null);Ia(m,S)}return null}function _(u,m,v,S){for(var L=null,C=null,b=m,G=m=0,re=null;b!==null&&G<v.length;G++){b.index>G?(re=b,b=null):re=b.sibling;var x=h(u,b,v[G],S);if(x===null){b===null&&(b=re);break}t&&b&&x.alternate===null&&e(u,b),m=s(x,m,G),C===null?L=x:C.sibling=x,C=x,b=re}if(G===v.length)return n(u,b),Dt&&Ir(u,G),L;if(b===null){for(;G<v.length;G++)b=d(u,v[G],S),b!==null&&(m=s(b,m,G),C===null?L=b:C.sibling=b,C=b);return Dt&&Ir(u,G),L}for(b=i(u,b);G<v.length;G++)re=g(b,u,G,v[G],S),re!==null&&(t&&re.alternate!==null&&b.delete(re.key===null?G:re.key),m=s(re,m,G),C===null?L=re:C.sibling=re,C=re);return t&&b.forEach(function(P){return e(u,P)}),Dt&&Ir(u,G),L}function y(u,m,v,S){var L=go(v);if(typeof L!="function")throw Error(ve(150));if(v=L.call(v),v==null)throw Error(ve(151));for(var C=L=null,b=m,G=m=0,re=null,x=v.next();b!==null&&!x.done;G++,x=v.next()){b.index>G?(re=b,b=null):re=b.sibling;var P=h(u,b,x.value,S);if(P===null){b===null&&(b=re);break}t&&b&&P.alternate===null&&e(u,b),m=s(P,m,G),C===null?L=P:C.sibling=P,C=P,b=re}if(x.done)return n(u,b),Dt&&Ir(u,G),L;if(b===null){for(;!x.done;G++,x=v.next())x=d(u,x.value,S),x!==null&&(m=s(x,m,G),C===null?L=x:C.sibling=x,C=x);return Dt&&Ir(u,G),L}for(b=i(u,b);!x.done;G++,x=v.next())x=g(b,u,G,x.value,S),x!==null&&(t&&x.alternate!==null&&b.delete(x.key===null?G:x.key),m=s(x,m,G),C===null?L=x:C.sibling=x,C=x);return t&&b.forEach(function(te){return e(u,te)}),Dt&&Ir(u,G),L}function p(u,m,v,S){if(typeof v=="object"&&v!==null&&v.type===bs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:e:{for(var L=v.key,C=m;C!==null;){if(C.key===L){if(L=v.type,L===bs){if(C.tag===7){n(u,C.sibling),m=r(C,v.props.children),m.return=u,u=m;break e}}else if(C.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===tr&&Kh(L)===C.type){n(u,C.sibling),m=r(C,v.props),m.ref=So(u,C,v),m.return=u,u=m;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===bs?(m=Wr(v.props.children,u.mode,S,v.key),m.return=u,u=m):(S=Al(v.type,v.key,v.props,null,u.mode,S),S.ref=So(u,m,v),S.return=u,u=S)}return o(u);case As:e:{for(C=v.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=ru(v,u.mode,S),m.return=u,u=m}return o(u);case tr:return C=v._init,p(u,m,C(v._payload),S)}if(Do(v))return _(u,m,v,S);if(go(v))return y(u,m,v,S);Ia(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=iu(v,u.mode,S),m.return=u,u=m),o(u)):n(u,m)}return p}var Zs=Cv(!0),Rv=Cv(!1),Gl=br(null),Vl=null,Us=null,Ld=null;function Nd(){Ld=Us=Vl=null}function Id(t){var e=Gl.current;It(Gl),t._currentValue=e}function bf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){Vl=t,Ld=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ln=!0),t.firstContext=null)}function ei(t){var e=t._currentValue;if(Ld!==t)if(t={context:t,memoizedValue:e,next:null},Us===null){if(Vl===null)throw Error(ve(308));Us=t,Vl.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return e}var Br=null;function Dd(t){Br===null?Br=[t]:Br.push(t)}function Pv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Dd(e)):(n.next=r.next,r.next=n),e.interleaved=n,zi(t,i)}function zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function Ud(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Mt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(t,n)}return r=i.interleaved,r===null?(e.next=e,Dd(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}function Zh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,i){var r=t.updateQueue;nr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(g,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,d,h):_,h==null)break e;d=Bt({},d,h);break e;case 2:nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,l=d):f=f.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=d}}function Qh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ve(191,r));r.call(i)}}}var va={},Ei=br(va),ra=br(va),sa=br(va);function Hr(t){if(t===va)throw Error(ve(174));return t}function Fd(t,e){switch(Pt(sa,e),Pt(ra,t),Pt(Ei,va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:af(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=af(e,t)}It(Ei),Pt(Ei,e)}function Qs(){It(Ei),It(ra),It(sa)}function Nv(t){Hr(sa.current);var e=Hr(Ei.current),n=af(e,t.type);e!==n&&(Pt(ra,t),Pt(Ei,n))}function Od(t){ra.current===t&&(It(Ei),It(ra))}var Ot=br(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function kd(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var Sl=Gi.ReactCurrentDispatcher,Qc=Gi.ReactCurrentBatchConfig,Zr=0,kt=null,qt=null,tn=null,Xl=!1,Go=!1,oa=0,vx=0;function pn(){throw Error(ve(321))}function zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pi(t[n],e[n]))return!1;return!0}function Bd(t,e,n,i,r,s){if(Zr=s,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?Sx:Mx,t=n(i,r),Go){s=0;do{if(Go=!1,oa=0,25<=s)throw Error(ve(301));s+=1,tn=qt=null,e.updateQueue=null,Sl.current=Ex,t=n(i,r)}while(Go)}if(Sl.current=$l,e=qt!==null&&qt.next!==null,Zr=0,tn=qt=kt=null,Xl=!1,e)throw Error(ve(300));return t}function Hd(){var t=oa!==0;return oa=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?kt.memoizedState=tn=t:tn=tn.next=t,tn}function ti(){if(qt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var e=tn===null?kt.memoizedState:tn.next;if(e!==null)tn=e,qt=t;else{if(t===null)throw Error(ve(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},tn===null?kt.memoizedState=tn=t:tn=tn.next=t}return tn}function aa(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=ti(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=qt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Zr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,kt.lanes|=f,Qr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,pi(i,e.memoizedState)||(Ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,kt.lanes|=s,Qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eu(t){var e=ti(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);pi(s,e.memoizedState)||(Ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Iv(){}function Dv(t,e){var n=kt,i=ti(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,Ln=!0),i=i.queue,Gd(Ov.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||tn!==null&&tn.memoizedState.tag&1){if(n.flags|=2048,la(9,Fv.bind(null,n,i,r,e),void 0,null),rn===null)throw Error(ve(349));Zr&30||Uv(n,e,r)}return r}function Uv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Fv(t,e,n,i){e.value=n,e.getSnapshot=i,kv(e)&&zv(t)}function Ov(t,e,n){return n(function(){kv(e)&&zv(t)})}function kv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pi(t,n)}catch{return!0}}function zv(t){var e=zi(t,1);e!==null&&hi(e,t,1,-1)}function Jh(t){var e=gi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=xx.bind(null,kt,t),[e.memoizedState,t]}function la(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Bv(){return ti().memoizedState}function Ml(t,e,n,i){var r=gi();kt.flags|=t,r.memoizedState=la(1|e,n,void 0,i===void 0?null:i)}function gc(t,e,n,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(qt!==null){var o=qt.memoizedState;if(s=o.destroy,i!==null&&zd(i,o.deps)){r.memoizedState=la(e,n,s,i);return}}kt.flags|=t,r.memoizedState=la(1|e,n,s,i)}function ep(t,e){return Ml(8390656,8,t,e)}function Gd(t,e){return gc(2048,8,t,e)}function Hv(t,e){return gc(4,2,t,e)}function Gv(t,e){return gc(4,4,t,e)}function Vv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wv(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,Vv.bind(null,e,t),n)}function Vd(){}function jv(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Xv(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function $v(t,e,n){return Zr&21?(pi(n,e)||(n=Qg(),kt.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ln=!0),t.memoizedState=n)}function _x(t,e){var n=bt;bt=n!==0&&4>n?n:4,t(!0);var i=Qc.transition;Qc.transition={};try{t(!1),e()}finally{bt=n,Qc.transition=i}}function Yv(){return ti().memoizedState}function yx(t,e,n){var i=mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},qv(t))Kv(e,n);else if(n=Pv(t,e,n,i),n!==null){var r=wn();hi(n,t,i,r),Zv(n,e,i)}}function xx(t,e,n){var i=mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(qv(t))Kv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,pi(a,o)){var l=e.interleaved;l===null?(r.next=r,Dd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Pv(t,e,r,i),n!==null&&(r=wn(),hi(n,t,i,r),Zv(n,e,i))}}function qv(t){var e=t.alternate;return t===kt||e!==null&&e===kt}function Kv(t,e){Go=Xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Zv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xd(t,n)}}var $l={readContext:ei,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},Sx={readContext:ei,useCallback:function(t,e){return gi().memoizedState=[t,e===void 0?null:e],t},useContext:ei,useEffect:ep,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,Vv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=gi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=gi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yx.bind(null,kt,t),[i.memoizedState,t]},useRef:function(t){var e=gi();return t={current:t},e.memoizedState=t},useState:Jh,useDebugValue:Vd,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=Jh(!1),e=t[0];return t=_x.bind(null,t[1]),gi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=kt,r=gi();if(Dt){if(n===void 0)throw Error(ve(407));n=n()}else{if(n=e(),rn===null)throw Error(ve(349));Zr&30||Uv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ep(Ov.bind(null,i,s,t),[t]),i.flags|=2048,la(9,Fv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=gi(),e=rn.identifierPrefix;if(Dt){var n=Di,i=Ii;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mx={readContext:ei,useCallback:jv,useContext:ei,useEffect:Gd,useImperativeHandle:Wv,useInsertionEffect:Hv,useLayoutEffect:Gv,useMemo:Xv,useReducer:Jc,useRef:Bv,useState:function(){return Jc(aa)},useDebugValue:Vd,useDeferredValue:function(t){var e=ti();return $v(e,qt.memoizedState,t)},useTransition:function(){var t=Jc(aa)[0],e=ti().memoizedState;return[t,e]},useMutableSource:Iv,useSyncExternalStore:Dv,useId:Yv,unstable_isNewReconciler:!1},Ex={readContext:ei,useCallback:jv,useContext:ei,useEffect:Gd,useImperativeHandle:Wv,useInsertionEffect:Hv,useLayoutEffect:Gv,useMemo:Xv,useReducer:eu,useRef:Bv,useState:function(){return eu(aa)},useDebugValue:Vd,useDeferredValue:function(t){var e=ti();return qt===null?e.memoizedState=t:$v(e,qt.memoizedState,t)},useTransition:function(){var t=eu(aa)[0],e=ti().memoizedState;return[t,e]},useMutableSource:Iv,useSyncExternalStore:Dv,useId:Yv,unstable_isNewReconciler:!1};function oi(t,e){if(t&&t.defaultProps){e=Bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vc={isMounted:function(t){return(t=t._reactInternals)?is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=wn(),r=mr(t),s=Fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(hi(e,t,r,i),xl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=wn(),r=mr(t),s=Fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(hi(e,t,r,i),xl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wn(),i=mr(t),r=Fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=hr(t,r,i),e!==null&&(hi(e,t,i,n),xl(e,t,i))}};function tp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,i)||!ea(r,s):!0}function Qv(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=In(e)?qr:yn.current,i=e.contextTypes,s=(i=i!=null)?qs(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function np(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&vc.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ud(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=In(e)?qr:yn.current,r.context=qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vc.enqueueReplaceState(r,r.state,null),Wl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",i=e;do n+=Z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wx=typeof WeakMap=="function"?WeakMap:Map;function Jv(t,e,n){n=Fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ql||(ql=!0,Bf=i),Pf(t,e)},n}function e0(t,e,n){n=Fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Pf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pf(t,e),typeof i!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kx.bind(null,t,e,n),e.then(t,t))}function rp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fi(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var Tx=Gi.ReactCurrentOwner,Ln=!1;function Mn(t,e,n,i){e.child=t===null?Rv(e,null,n,i):Zs(e,t.child,n,i)}function op(t,e,n,i,r){n=n.render;var s=e.ref;return Ws(e,r),i=Bd(t,e,n,i,s,r),n=Hd(),t!==null&&!Ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(Dt&&n&&Cd(e),e.flags|=1,Mn(t,e,i,r),e.child)}function ap(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Zd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,t0(t,e,s,i,r)):(t=Al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=gr(s,i),t.ref=e.ref,t.return=e,e.child=t}function t0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ea(s,i)&&t.ref===e.ref)if(Ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Ln=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return Lf(t,e,n,i,r)}function n0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(Os,kn),kn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pt(Os,kn),kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Pt(Os,kn),kn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Pt(Os,kn),kn|=i;return Mn(t,e,r,n),e.child}function i0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lf(t,e,n,i,r){var s=In(n)?qr:yn.current;return s=qs(e,s),Ws(e,r),n=Bd(t,e,n,i,s,r),i=Hd(),t!==null&&!Ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(Dt&&i&&Cd(e),e.flags|=1,Mn(t,e,n,r),e.child)}function lp(t,e,n,i,r){if(In(n)){var s=!0;zl(e)}else s=!1;if(Ws(e,r),e.stateNode===null)El(t,e),Qv(e,n,i),Rf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=In(n)?qr:yn.current,c=qs(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&np(e,o,i,c),nr=!1;var h=e.memoizedState;o.state=h,Wl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Nn.current||nr?(typeof f=="function"&&(Cf(e,n,f,i),l=e.memoizedState),(a=nr||tp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Lv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:oi(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=In(n)?qr:yn.current,l=qs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&np(e,o,i,l),nr=!1,h=e.memoizedState,o.state=h,Wl(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||Nn.current||nr?(typeof g=="function"&&(Cf(e,n,g,i),_=e.memoizedState),(c=nr||tp(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Nf(t,e,n,i,s,r)}function Nf(t,e,n,i,r,s){i0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&$h(e,n,!1),Bi(t,e,s);i=e.stateNode,Tx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Zs(e,t.child,null,s),e.child=Zs(e,null,a,s)):Mn(t,e,a,s),e.memoizedState=i.state,r&&$h(e,n,!0),e.child}function r0(t){var e=t.stateNode;e.pendingContext?Xh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xh(t,e.context,!1),Fd(t,e.containerInfo)}function cp(t,e,n,i,r){return Ks(),Pd(r),e.flags|=256,Mn(t,e,n,i),e.child}var If={dehydrated:null,treeContext:null,retryLane:0};function Df(t){return{baseLanes:t,cachePool:null,transitions:null}}function s0(t,e,n){var i=e.pendingProps,r=Ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Pt(Ot,r&1),t===null)return Af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xc(o,i,0,null),t=Wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Df(n),e.memoizedState=If,t):Wd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ax(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=gr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=gr(a,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=If,i}return s=t.child,t=s.sibling,i=gr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wd(t,e){return e=xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,i){return i!==null&&Pd(i),Zs(e,t.child,null,n),t=Wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ax(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=tu(Error(ve(422))),Da(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=xc({mode:"visible",children:i.children},r,0,null),s=Wr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Zs(e,t.child,null,o),e.child.memoizedState=Df(o),e.memoizedState=If,s);if(!(e.mode&1))return Da(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ve(419)),i=tu(s,i,void 0),Da(t,e,o,i)}if(a=(o&t.childLanes)!==0,Ln||a){if(i=rn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(t,r),hi(i,t,r,-1))}return Kd(),i=tu(Error(ve(421))),Da(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,zn=dr(r.nextSibling),Bn=e,Dt=!0,li=null,t!==null&&(Xn[$n++]=Ii,Xn[$n++]=Di,Xn[$n++]=Kr,Ii=t.id,Di=t.overflow,Kr=e),e=Wd(e,i.children),e.flags|=4096,e)}function up(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bf(t.return,e,n)}function nu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function o0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Mn(t,e,i.children,n),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,n,e);else if(t.tag===19)up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Pt(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&jl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&jl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nu(e,!0,n,null,s);break;case"together":nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ve(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bx(t,e,n){switch(e.tag){case 3:r0(e),Ks();break;case 5:Nv(e);break;case 1:In(e.type)&&zl(e);break;case 4:Fd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Pt(Gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Pt(Ot,Ot.current&1),e.flags|=128,null):n&e.child.childLanes?s0(t,e,n):(Pt(Ot,Ot.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);Pt(Ot,Ot.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return o0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Pt(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,n0(t,e,n)}return Bi(t,e,n)}var a0,Uf,l0,c0;a0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uf=function(){};l0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(Ei.current);var s=null;switch(n){case"input":r=nf(t,r),i=nf(t,i),s=[];break;case"select":r=Bt({},r,{value:void 0}),i=Bt({},i,{value:void 0}),s=[];break;case"textarea":r=of(t,r),i=of(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ol)}lf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};c0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Mo(t,e){if(!Dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function mn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Cx(t,e,n){var i=e.pendingProps;switch(Rd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(e),null;case 1:return In(e.type)&&kl(),mn(e),null;case 3:return i=e.stateNode,Qs(),It(Nn),It(yn),kd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Na(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(Vf(li),li=null))),Uf(t,e),mn(e),null;case 5:Od(e);var r=Hr(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)l0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ve(166));return mn(e),null}if(t=Hr(Ei.current),Na(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[ia]=s,t=(e.mode&1)!==0,n){case"dialog":Lt("cancel",i),Lt("close",i);break;case"iframe":case"object":case"embed":Lt("load",i);break;case"video":case"audio":for(r=0;r<Fo.length;r++)Lt(Fo[r],i);break;case"source":Lt("error",i);break;case"img":case"image":case"link":Lt("error",i),Lt("load",i);break;case"details":Lt("toggle",i);break;case"input":yh(i,s),Lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Lt("invalid",i);break;case"textarea":Sh(i,s),Lt("invalid",i)}lf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Lt("scroll",i)}switch(n){case"input":Ea(i),xh(i,s,!0);break;case"textarea":Ea(i),Mh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ol)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Og(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[xi]=e,t[ia]=i,a0(t,e,!1,!1),e.stateNode=t;e:{switch(o=cf(n,i),n){case"dialog":Lt("cancel",t),Lt("close",t),r=i;break;case"iframe":case"object":case"embed":Lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Fo.length;r++)Lt(Fo[r],t);r=i;break;case"source":Lt("error",t),r=i;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),r=i;break;case"details":Lt("toggle",t),r=i;break;case"input":yh(t,i),r=nf(t,i),Lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Bt({},i,{value:void 0}),Lt("invalid",t);break;case"textarea":Sh(t,i),r=of(t,i),Lt("invalid",t);break;default:r=i}lf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Bg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Yo(t,l):typeof l=="number"&&Yo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Lt("scroll",t):l!=null&&pd(t,s,l,o))}switch(n){case"input":Ea(t),xh(t,i,!1);break;case"textarea":Ea(t),Mh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ol)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mn(e),null;case 6:if(t&&e.stateNode!=null)c0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ve(166));if(n=Hr(sa.current),Hr(Ei.current),Na(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==n)&&(t=Bn,t!==null))switch(t.tag){case 3:La(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return mn(e),null;case 13:if(It(Ot),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Dt&&zn!==null&&e.mode&1&&!(e.flags&128))bv(),Ks(),e.flags|=98560,s=!1;else if(s=Na(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ve(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ve(317));s[xi]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mn(e),s=!1}else li!==null&&(Vf(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Ot.current&1?Kt===0&&(Kt=3):Kd())),e.updateQueue!==null&&(e.flags|=4),mn(e),null);case 4:return Qs(),Uf(t,e),t===null&&ta(e.stateNode.containerInfo),mn(e),null;case 10:return Id(e.type._context),mn(e),null;case 17:return In(e.type)&&kl(),mn(e),null;case 19:if(It(Ot),s=e.memoizedState,s===null)return mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Mo(s,!1);else{if(Kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=jl(t),o!==null){for(e.flags|=128,Mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pt(Ot,Ot.current&1|2),e.child}t=t.sibling}s.tail!==null&&Vt()>eo&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=jl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Dt)return mn(e),null}else 2*Vt()-s.renderingStartTime>eo&&n!==1073741824&&(e.flags|=128,i=!0,Mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Vt(),e.sibling=null,n=Ot.current,Pt(Ot,i?n&1|2:n&1),e):(mn(e),null);case 22:case 23:return qd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?kn&1073741824&&(mn(e),e.subtreeFlags&6&&(e.flags|=8192)):mn(e),null;case 24:return null;case 25:return null}throw Error(ve(156,e.tag))}function Rx(t,e){switch(Rd(e),e.tag){case 1:return In(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),It(Nn),It(yn),kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Od(e),null;case 13:if(It(Ot),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ve(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return It(Ot),null;case 4:return Qs(),null;case 10:return Id(e.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var Ua=!1,_n=!1,Px=typeof WeakSet=="function"?WeakSet:Set,De=null;function Fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Gt(t,e,i)}else n.current=null}function Ff(t,e,n){try{n()}catch(i){Gt(t,e,i)}}var fp=!1;function Lx(t,e){if(yf=Dl,t=pv(),bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(xf={focusedElem:t,selectionRange:n},Dl=!1,De=e;De!==null;)if(e=De,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,De=t;else for(;De!==null;){e=De;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:oi(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ve(163))}}catch(S){Gt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}return _=fp,fp=!1,_}function Vo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ff(e,n,s)}r=r.next}while(r!==i)}}function _c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function u0(t){var e=t.alternate;e!==null&&(t.alternate=null,u0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[ia],delete e[Ef],delete e[hx],delete e[px])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function f0(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||f0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ol));else if(i!==4&&(t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}function zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}var on=null,ai=!1;function $i(t,e,n){for(n=n.child;n!==null;)d0(t,e,n),n=n.sibling}function d0(t,e,n){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:_n||Fs(n,e);case 6:var i=on,r=ai;on=null,$i(t,e,n),on=i,ai=r,on!==null&&(ai?(t=on,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):on.removeChild(n.stateNode));break;case 18:on!==null&&(ai?(t=on,n=n.stateNode,t.nodeType===8?qc(t.parentNode,n):t.nodeType===1&&qc(t,n),Qo(t)):qc(on,n.stateNode));break;case 4:i=on,r=ai,on=n.stateNode.containerInfo,ai=!0,$i(t,e,n),on=i,ai=r;break;case 0:case 11:case 14:case 15:if(!_n&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ff(n,e,o),r=r.next}while(r!==i)}$i(t,e,n);break;case 1:if(!_n&&(Fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Gt(n,e,a)}$i(t,e,n);break;case 21:$i(t,e,n);break;case 22:n.mode&1?(_n=(i=_n)||n.memoizedState!==null,$i(t,e,n),_n=i):$i(t,e,n);break;default:$i(t,e,n)}}function hp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Px),e.forEach(function(i){var r=Bx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ni(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:on=a.stateNode,ai=!1;break e;case 3:on=a.stateNode.containerInfo,ai=!0;break e;case 4:on=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(on===null)throw Error(ve(160));d0(s,o,r),on=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)h0(e,t),e=e.sibling}function h0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(e,t),mi(t),i&4){try{Vo(3,t,t.return),_c(3,t)}catch(y){Gt(t,t.return,y)}try{Vo(5,t,t.return)}catch(y){Gt(t,t.return,y)}}break;case 1:ni(e,t),mi(t),i&512&&n!==null&&Fs(n,n.return);break;case 5:if(ni(e,t),mi(t),i&512&&n!==null&&Fs(n,n.return),t.flags&32){var r=t.stateNode;try{Yo(r,"")}catch(y){Gt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ug(r,s),cf(a,o);var c=cf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Bg(r,d):f==="dangerouslySetInnerHTML"?kg(r,d):f==="children"?Yo(r,d):pd(r,f,d,c)}switch(a){case"input":rf(r,s);break;case"textarea":Fg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Bs(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Bs(r,!!s.multiple,s.defaultValue,!0):Bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ia]=s}catch(y){Gt(t,t.return,y)}}break;case 6:if(ni(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(ve(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Gt(t,t.return,y)}}break;case 3:if(ni(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(y){Gt(t,t.return,y)}break;case 4:ni(e,t),mi(t);break;case 13:ni(e,t),mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($d=Vt())),i&4&&hp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(_n=(c=_n)||f,ni(e,t),_n=c):ni(e,t),mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(De=t,f=t.child;f!==null;){for(d=De=f;De!==null;){switch(h=De,g=h.child,h.tag){case 0:case 11:case 14:case 15:Vo(4,h,h.return);break;case 1:Fs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Gt(i,n,y)}}break;case 5:Fs(h,h.return);break;case 22:if(h.memoizedState!==null){mp(d);continue}}g!==null?(g.return=h,De=g):mp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=zg("display",o))}catch(y){Gt(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Gt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ni(e,t),mi(t),i&4&&hp(t);break;case 21:break;default:ni(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(f0(n)){var i=n;break e}n=n.return}throw Error(ve(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Yo(r,""),i.flags&=-33);var s=dp(t);zf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=dp(t);kf(t,a,o);break;default:throw Error(ve(161))}}catch(l){Gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Nx(t,e,n){De=t,p0(t)}function p0(t,e,n){for(var i=(t.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ua;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||_n;a=Ua;var c=_n;if(Ua=o,(_n=l)&&!c)for(De=r;De!==null;)o=De,l=o.child,o.tag===22&&o.memoizedState!==null?gp(r):l!==null?(l.return=o,De=l):gp(r);for(;s!==null;)De=s,p0(s),s=s.sibling;De=r,Ua=a,_n=c}pp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):pp(t)}}function pp(t){for(;De!==null;){var e=De;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_n||_c(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!_n)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Qo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ve(163))}_n||e.flags&512&&Of(e)}catch(h){Gt(e,e.return,h)}}if(e===t){De=null;break}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}}function mp(t){for(;De!==null;){var e=De;if(e===t){De=null;break}var n=e.sibling;if(n!==null){n.return=e.return,De=n;break}De=e.return}}function gp(t){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_c(4,e)}catch(l){Gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Gt(e,r,l)}}var s=e.return;try{Of(e)}catch(l){Gt(e,s,l)}break;case 5:var o=e.return;try{Of(e)}catch(l){Gt(e,o,l)}}}catch(l){Gt(e,e.return,l)}if(e===t){De=null;break}var a=e.sibling;if(a!==null){a.return=e.return,De=a;break}De=e.return}}var Ix=Math.ceil,Yl=Gi.ReactCurrentDispatcher,jd=Gi.ReactCurrentOwner,Jn=Gi.ReactCurrentBatchConfig,Mt=0,rn=null,$t=null,un=0,kn=0,Os=br(0),Kt=0,ca=null,Qr=0,yc=0,Xd=0,Wo=null,Rn=null,$d=0,eo=1/0,Pi=null,ql=!1,Bf=null,pr=null,Fa=!1,or=null,Kl=0,jo=0,Hf=null,wl=-1,Tl=0;function wn(){return Mt&6?Vt():wl!==-1?wl:wl=Vt()}function mr(t){return t.mode&1?Mt&2&&un!==0?un&-un:gx.transition!==null?(Tl===0&&(Tl=Qg()),Tl):(t=bt,t!==0||(t=window.event,t=t===void 0?16:sv(t.type)),t):1}function hi(t,e,n,i){if(50<jo)throw jo=0,Hf=null,Error(ve(185));pa(t,n,i),(!(Mt&2)||t!==rn)&&(t===rn&&(!(Mt&2)&&(yc|=n),Kt===4&&rr(t,un)),Dn(t,i),n===1&&Mt===0&&!(e.mode&1)&&(eo=Vt()+500,mc&&Cr()))}function Dn(t,e){var n=t.callbackNode;gy(t,e);var i=Il(t,t===rn?un:0);if(i===0)n!==null&&Th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Th(n),e===1)t.tag===0?mx(vp.bind(null,t)):wv(vp.bind(null,t)),fx(function(){!(Mt&6)&&Cr()}),n=null;else{switch(Jg(i)){case 1:n=yd;break;case 4:n=Kg;break;case 16:n=Nl;break;case 536870912:n=Zg;break;default:n=Nl}n=M0(n,m0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function m0(t,e){if(wl=-1,Tl=0,Mt&6)throw Error(ve(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var i=Il(t,t===rn?un:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Zl(t,i);else{e=i;var r=Mt;Mt|=2;var s=v0();(rn!==t||un!==e)&&(Pi=null,eo=Vt()+500,Vr(t,e));do try{Fx();break}catch(a){g0(t,a)}while(!0);Nd(),Yl.current=s,Mt=r,$t!==null?e=0:(rn=null,un=0,e=Kt)}if(e!==0){if(e===2&&(r=pf(t),r!==0&&(i=r,e=Gf(t,r))),e===1)throw n=ca,Vr(t,0),rr(t,i),Dn(t,Vt()),n;if(e===6)rr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Dx(r)&&(e=Zl(t,i),e===2&&(s=pf(t),s!==0&&(i=s,e=Gf(t,s))),e===1))throw n=ca,Vr(t,0),rr(t,i),Dn(t,Vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ve(345));case 2:Dr(t,Rn,Pi);break;case 3:if(rr(t,i),(i&130023424)===i&&(e=$d+500-Vt(),10<e)){if(Il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){wn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Mf(Dr.bind(null,t,Rn,Pi),e);break}Dr(t,Rn,Pi);break;case 4:if(rr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ix(i/1960))-i,10<i){t.timeoutHandle=Mf(Dr.bind(null,t,Rn,Pi),i);break}Dr(t,Rn,Pi);break;case 5:Dr(t,Rn,Pi);break;default:throw Error(ve(329))}}}return Dn(t,Vt()),t.callbackNode===n?m0.bind(null,t):null}function Gf(t,e){var n=Wo;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=Rn,Rn=n,e!==null&&Vf(e)),t}function Vf(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function Dx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~Xd,e&=~yc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function vp(t){if(Mt&6)throw Error(ve(327));js();var e=Il(t,0);if(!(e&1))return Dn(t,Vt()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var i=pf(t);i!==0&&(e=i,n=Gf(t,i))}if(n===1)throw n=ca,Vr(t,0),rr(t,e),Dn(t,Vt()),n;if(n===6)throw Error(ve(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,Rn,Pi),Dn(t,Vt()),null}function Yd(t,e){var n=Mt;Mt|=1;try{return t(e)}finally{Mt=n,Mt===0&&(eo=Vt()+500,mc&&Cr())}}function Jr(t){or!==null&&or.tag===0&&!(Mt&6)&&js();var e=Mt;Mt|=1;var n=Jn.transition,i=bt;try{if(Jn.transition=null,bt=1,t)return t()}finally{bt=i,Jn.transition=n,Mt=e,!(Mt&6)&&Cr()}}function qd(){kn=Os.current,It(Os)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ux(n)),$t!==null)for(n=$t.return;n!==null;){var i=n;switch(Rd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kl();break;case 3:Qs(),It(Nn),It(yn),kd();break;case 5:Od(i);break;case 4:Qs();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:Id(i.type._context);break;case 22:case 23:qd()}n=n.return}if(rn=t,$t=t=gr(t.current,null),un=kn=e,Kt=0,ca=null,Xd=yc=Qr=0,Rn=Wo=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Br=null}return t}function g0(t,e){do{var n=$t;try{if(Nd(),Sl.current=$l,Xl){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xl=!1}if(Zr=0,tn=qt=kt=null,Go=!1,oa=0,jd.current=null,n===null||n.return===null){Kt=1,ca=e,$t=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=un,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=rp(o);if(g!==null){g.flags&=-257,sp(g,o,a,s,e),g.mode&1&&ip(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){ip(s,c,e),Kd();break e}l=Error(ve(426))}}else if(Dt&&a.mode&1){var p=rp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),sp(p,o,a,s,e),Pd(Js(l,a));break e}}s=l=Js(l,a),Kt!==4&&(Kt=2),Wo===null?Wo=[s]:Wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Jv(s,l,e);Zh(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(pr===null||!pr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=e0(s,a,e);Zh(s,S);break e}}s=s.return}while(s!==null)}y0(n)}catch(L){e=L,$t===n&&n!==null&&($t=n=n.return);continue}break}while(!0)}function v0(){var t=Yl.current;return Yl.current=$l,t===null?$l:t}function Kd(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),rn===null||!(Qr&268435455)&&!(yc&268435455)||rr(rn,un)}function Zl(t,e){var n=Mt;Mt|=2;var i=v0();(rn!==t||un!==e)&&(Pi=null,Vr(t,e));do try{Ux();break}catch(r){g0(t,r)}while(!0);if(Nd(),Mt=n,Yl.current=i,$t!==null)throw Error(ve(261));return rn=null,un=0,Kt}function Ux(){for(;$t!==null;)_0($t)}function Fx(){for(;$t!==null&&!ay();)_0($t)}function _0(t){var e=S0(t.alternate,t,kn);t.memoizedProps=t.pendingProps,e===null?y0(t):$t=e,jd.current=null}function y0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Rx(n,e),n!==null){n.flags&=32767,$t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,$t=null;return}}else if(n=Cx(n,e,kn),n!==null){$t=n;return}if(e=e.sibling,e!==null){$t=e;return}$t=e=t}while(e!==null);Kt===0&&(Kt=5)}function Dr(t,e,n){var i=bt,r=Jn.transition;try{Jn.transition=null,bt=1,Ox(t,e,n,i)}finally{Jn.transition=r,bt=i}return null}function Ox(t,e,n,i){do js();while(or!==null);if(Mt&6)throw Error(ve(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ve(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vy(t,s),t===rn&&($t=rn=null,un=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,M0(Nl,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jn.transition,Jn.transition=null;var o=bt;bt=1;var a=Mt;Mt|=4,jd.current=null,Lx(t,n),h0(n,t),ix(xf),Dl=!!yf,xf=yf=null,t.current=n,Nx(n),ly(),Mt=a,bt=o,Jn.transition=s}else t.current=n;if(Fa&&(Fa=!1,or=t,Kl=r),s=t.pendingLanes,s===0&&(pr=null),fy(n.stateNode),Dn(t,Vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,t=Bf,Bf=null,t;return Kl&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===Hf?jo++:(jo=0,Hf=t):jo=0,Cr(),null}function js(){if(or!==null){var t=Jg(Kl),e=Jn.transition,n=bt;try{if(Jn.transition=null,bt=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,Kl=0,Mt&6)throw Error(ve(331));var r=Mt;for(Mt|=4,De=t.current;De!==null;){var s=De,o=s.child;if(De.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(De=c;De!==null;){var f=De;switch(f.tag){case 0:case 11:case 15:Vo(8,f,s)}var d=f.child;if(d!==null)d.return=f,De=d;else for(;De!==null;){f=De;var h=f.sibling,g=f.return;if(u0(f),f===c){De=null;break}if(h!==null){h.return=g,De=h;break}De=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}De=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,De=o;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,De=u;break e}De=s.return}}var m=t.current;for(De=m;De!==null;){o=De;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,De=v;else e:for(o=m;De!==null;){if(a=De,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_c(9,a)}}catch(L){Gt(a,a.return,L)}if(a===o){De=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,De=S;break e}De=a.return}}if(Mt=r,Cr(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(uc,t)}catch{}i=!0}return i}finally{bt=n,Jn.transition=e}}return!1}function _p(t,e,n){e=Js(n,e),e=Jv(t,e,1),t=hr(t,e,1),e=wn(),t!==null&&(pa(t,1,e),Dn(t,e))}function Gt(t,e,n){if(t.tag===3)_p(t,t,n);else for(;e!==null;){if(e.tag===3){_p(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pr===null||!pr.has(i))){t=Js(n,t),t=e0(e,t,1),e=hr(e,t,1),t=wn(),e!==null&&(pa(e,1,t),Dn(e,t));break}}e=e.return}}function kx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=wn(),t.pingedLanes|=t.suspendedLanes&n,rn===t&&(un&n)===n&&(Kt===4||Kt===3&&(un&130023424)===un&&500>Vt()-$d?Vr(t,0):Xd|=n),Dn(t,e)}function x0(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=wn();t=zi(t,e),t!==null&&(pa(t,e,n),Dn(t,n))}function zx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),x0(t,n)}function Bx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ve(314))}i!==null&&i.delete(e),x0(t,n)}var S0;S0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nn.current)Ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ln=!1,bx(t,e,n);Ln=!!(t.flags&131072)}else Ln=!1,Dt&&e.flags&1048576&&Tv(e,Hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;El(t,e),t=e.pendingProps;var r=qs(e,yn.current);Ws(e,n),r=Bd(null,e,i,t,r,n);var s=Hd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,In(i)?(s=!0,zl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ud(e),r.updater=vc,e.stateNode=r,r._reactInternals=e,Rf(e,i,t,n),e=Nf(null,e,i,!0,s,n)):(e.tag=0,Dt&&s&&Cd(e),Mn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(El(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Gx(i),t=oi(i,t),r){case 0:e=Lf(null,e,i,t,n);break e;case 1:e=lp(null,e,i,t,n);break e;case 11:e=op(null,e,i,t,n);break e;case 14:e=ap(null,e,i,oi(i.type,t),n);break e}throw Error(ve(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Lf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),lp(t,e,i,r,n);case 3:e:{if(r0(e),t===null)throw Error(ve(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Lv(t,e),Wl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Js(Error(ve(423)),e),e=cp(t,e,i,n,r);break e}else if(i!==r){r=Js(Error(ve(424)),e),e=cp(t,e,i,n,r);break e}else for(zn=dr(e.stateNode.containerInfo.firstChild),Bn=e,Dt=!0,li=null,n=Rv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),i===r){e=Bi(t,e,n);break e}Mn(t,e,i,n)}e=e.child}return e;case 5:return Nv(e),t===null&&Af(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Sf(i,r)?o=null:s!==null&&Sf(i,s)&&(e.flags|=32),i0(t,e),Mn(t,e,o,n),e.child;case 6:return t===null&&Af(e),null;case 13:return s0(t,e,n);case 4:return Fd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Zs(e,null,i,n):Mn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),op(t,e,i,r,n);case 7:return Mn(t,e,e.pendingProps,n),e.child;case 8:return Mn(t,e,e.pendingProps.children,n),e.child;case 12:return Mn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Pt(Gl,i._currentValue),i._currentValue=o,s!==null)if(pi(s.value,o)){if(s.children===r.children&&!Nn.current){e=Bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Fi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ve(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),bf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Mn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ws(e,n),r=ei(r),i=i(r),e.flags|=1,Mn(t,e,i,n),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),ap(t,e,i,r,n);case 15:return t0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),El(t,e),e.tag=1,In(i)?(t=!0,zl(e)):t=!1,Ws(e,n),Qv(e,i,r),Rf(e,i,r,n),Nf(null,e,i,!0,t,n);case 19:return o0(t,e,n);case 22:return n0(t,e,n)}throw Error(ve(156,e.tag))};function M0(t,e){return qg(t,e)}function Hx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,e,n,i){return new Hx(t,e,n,i)}function Zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gx(t){if(typeof t=="function")return Zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gd)return 11;if(t===vd)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bs:return Wr(n.children,r,s,e);case md:o=8,r|=8;break;case Qu:return t=Zn(12,n,e,r|2),t.elementType=Qu,t.lanes=s,t;case Ju:return t=Zn(13,n,e,r),t.elementType=Ju,t.lanes=s,t;case ef:return t=Zn(19,n,e,r),t.elementType=ef,t.lanes=s,t;case Ng:return xc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pg:o=10;break e;case Lg:o=9;break e;case gd:o=11;break e;case vd:o=14;break e;case tr:o=16,i=null;break e}throw Error(ve(130,t==null?t:typeof t,""))}return e=Zn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Wr(t,e,n,i){return t=Zn(7,t,i,e),t.lanes=n,t}function xc(t,e,n,i){return t=Zn(22,t,i,e),t.elementType=Ng,t.lanes=n,t.stateNode={isHidden:!1},t}function iu(t,e,n){return t=Zn(6,t,null,e),t.lanes=n,t}function ru(t,e,n){return e=Zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qd(t,e,n,i,r,s,o,a,l){return t=new Vx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ud(s),t}function Wx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function E0(t){if(!t)return Er;t=t._reactInternals;e:{if(is(t)!==t||t.tag!==1)throw Error(ve(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(In(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ve(171))}if(t.tag===1){var n=t.type;if(In(n))return Ev(t,n,e)}return e}function w0(t,e,n,i,r,s,o,a,l){return t=Qd(n,i,!0,t,r,s,o,a,l),t.context=E0(null),n=t.current,i=wn(),r=mr(n),s=Fi(i,r),s.callback=e??null,hr(n,s,r),t.current.lanes=r,pa(t,r,i),Dn(t,i),t}function Sc(t,e,n,i){var r=e.current,s=wn(),o=mr(r);return n=E0(n),e.context===null?e.context=n:e.pendingContext=n,e=Fi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=hr(r,e,o),t!==null&&(hi(t,r,o,s),xl(t,r,o)),o}function Ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jd(t,e){yp(t,e),(t=t.alternate)&&yp(t,e)}function jx(){return null}var T0=typeof reportError=="function"?reportError:function(t){console.error(t)};function eh(t){this._internalRoot=t}Mc.prototype.render=eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ve(409));Sc(t,e,null,null)};Mc.prototype.unmount=eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){Sc(null,t,null,null)}),e[ki]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=nv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&rv(t)}};function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xp(){}function Xx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ql(o);s.call(c)}}var o=w0(e,i,t,0,null,!1,!1,"",xp);return t._reactRootContainer=o,t[ki]=o.current,ta(t.nodeType===8?t.parentNode:t),Jr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ql(l);a.call(c)}}var l=Qd(t,0,!1,null,null,!1,!1,"",xp);return t._reactRootContainer=l,t[ki]=l.current,ta(t.nodeType===8?t.parentNode:t),Jr(function(){Sc(e,l,n,i)}),l}function wc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ql(o);a.call(l)}}Sc(e,o,t,r)}else o=Xx(n,e,t,r,i);return Ql(o)}ev=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Uo(e.pendingLanes);n!==0&&(xd(e,n|1),Dn(e,Vt()),!(Mt&6)&&(eo=Vt()+500,Cr()))}break;case 13:Jr(function(){var i=zi(t,1);if(i!==null){var r=wn();hi(i,t,1,r)}}),Jd(t,1)}};Sd=function(t){if(t.tag===13){var e=zi(t,134217728);if(e!==null){var n=wn();hi(e,t,134217728,n)}Jd(t,134217728)}};tv=function(t){if(t.tag===13){var e=mr(t),n=zi(t,e);if(n!==null){var i=wn();hi(n,t,e,i)}Jd(t,e)}};nv=function(){return bt};iv=function(t,e){var n=bt;try{return bt=t,e()}finally{bt=n}};ff=function(t,e,n){switch(e){case"input":if(rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pc(i);if(!r)throw Error(ve(90));Dg(i),rf(i,r)}}}break;case"textarea":Fg(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};Vg=Yd;Wg=Jr;var $x={usingClientEntryPoint:!1,Events:[ga,Ls,pc,Hg,Gg,Yd]},Eo={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yx={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$g(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{uc=Oa.inject(Yx),Mi=Oa}catch{}}Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x;Gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(e))throw Error(ve(200));return Wx(t,e,null,n)};Gn.createRoot=function(t,e){if(!th(t))throw Error(ve(299));var n=!1,i="",r=T0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qd(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,ta(t.nodeType===8?t.parentNode:t),new eh(e)};Gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ve(188)):(t=Object.keys(t).join(","),Error(ve(268,t)));return t=$g(e),t=t===null?null:t.stateNode,t};Gn.flushSync=function(t){return Jr(t)};Gn.hydrate=function(t,e,n){if(!Ec(e))throw Error(ve(200));return wc(null,t,e,!0,n)};Gn.hydrateRoot=function(t,e,n){if(!th(t))throw Error(ve(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=T0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=w0(e,null,t,1,n??null,r,!1,s,o),t[ki]=e.current,ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Mc(e)};Gn.render=function(t,e,n){if(!Ec(e))throw Error(ve(200));return wc(null,t,e,!1,n)};Gn.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(ve(40));return t._reactRootContainer?(Jr(function(){wc(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Gn.unstable_batchedUpdates=Yd;Gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ec(n))throw Error(ve(200));if(t==null||t._reactInternals===void 0)throw Error(ve(38));return wc(t,e,n,!1,i)};Gn.version="18.3.1-next-f1338f8080-20240426";function A0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A0)}catch(t){console.error(t)}}A0(),Ag.exports=Gn;var qx=Ag.exports,Sp=qx;Ku.createRoot=Sp.createRoot,Ku.hydrateRoot=Sp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ua.apply(this,arguments)}var ar;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ar||(ar={}));const Mp="popstate";function Kx(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Wf("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Jl(r)}return Qx(e,n,null,t)}function zt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function nh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Zx(){return Math.random().toString(36).substr(2,8)}function Ep(t,e){return{usr:t.state,key:t.key,idx:e}}function Wf(t,e,n,i){return n===void 0&&(n=null),ua({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?uo(e):e,{state:n,key:e&&e.key||i||Zx()})}function Jl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function uo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Qx(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=ar.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(ua({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=ar.Pop;let p=f(),u=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:u})}function h(p,u){a=ar.Push;let m=Wf(y.location,p,u);c=f()+1;let v=Ep(m,c),S=y.createHref(m);try{o.pushState(v,"",S)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;r.location.assign(S)}s&&l&&l({action:a,location:y.location,delta:1})}function g(p,u){a=ar.Replace;let m=Wf(y.location,p,u);c=f();let v=Ep(m,c),S=y.createHref(m);o.replaceState(v,"",S),s&&l&&l({action:a,location:y.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof p=="string"?p:Jl(p);return m=m.replace(/ $/,"%20"),zt(u,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,u)}let y={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Mp,d),l=p,()=>{r.removeEventListener(Mp,d),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:g,go(p){return o.go(p)}};return y}var wp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(wp||(wp={}));function Jx(t,e,n){return n===void 0&&(n="/"),eS(t,e,n)}function eS(t,e,n,i){let r=typeof e=="string"?uo(e):e,s=to(r.pathname||"/",n);if(s==null)return null;let o=b0(t);tS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=dS(s);a=uS(o[l],c)}return a}function b0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(zt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=vr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(zt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),b0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:lS(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of C0(s.path))r(s,o,l)}),e}function C0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=C0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function tS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const nS=/^:[\w-]+$/,iS=3,rS=2,sS=1,oS=10,aS=-2,Tp=t=>t==="*";function lS(t,e){let n=t.split("/"),i=n.length;return n.some(Tp)&&(i+=aS),e&&(i+=rS),n.filter(r=>!Tp(r)).reduce((r,s)=>r+(nS.test(s)?iS:s===""?sS:oS),i)}function cS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function uS(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",d=jf({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),h=l.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:vr([s,d.pathname]),pathnameBase:vS(vr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=vr([s,d.pathnameBase]))}return o}function jf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=fS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,f,d)=>{let{paramName:h,isOptional:g}=f;if(h==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=a[d];return g&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function fS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),nh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function dS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return nh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function to(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const hS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pS=t=>hS.test(t);function mS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?uo(t):t,s;if(n)if(pS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),nh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Ap(n.substring(1),"/"):s=Ap(n,e)}else s=e;return{pathname:s,search:_S(i),hash:yS(r)}}function Ap(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function su(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ih(t,e){let n=gS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function rh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=uo(t):(r=ua({},t),zt(!r.pathname||!r.pathname.includes("?"),su("?","pathname","search",r)),zt(!r.pathname||!r.pathname.includes("#"),su("#","pathname","hash",r)),zt(!r.search||!r.search.includes("#"),su("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=mS(r,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const vr=t=>t.join("/").replace(/\/\/+/g,"/"),vS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_S=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,yS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const R0=["post","put","patch","delete"];new Set(R0);const SS=["get",...R0];new Set(SS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fa.apply(this,arguments)}const Tc=D.createContext(null),P0=D.createContext(null),Vi=D.createContext(null),Ac=D.createContext(null),Wi=D.createContext({outlet:null,matches:[],isDataRoute:!1}),L0=D.createContext(null);function MS(t,e){let{relative:n}=e===void 0?{}:e;fo()||zt(!1);let{basename:i,navigator:r}=D.useContext(Vi),{hash:s,pathname:o,search:a}=Cc(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:vr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function fo(){return D.useContext(Ac)!=null}function ji(){return fo()||zt(!1),D.useContext(Ac).location}function N0(t){D.useContext(Vi).static||D.useLayoutEffect(t)}function bc(){let{isDataRoute:t}=D.useContext(Wi);return t?OS():ES()}function ES(){fo()||zt(!1);let t=D.useContext(Tc),{basename:e,future:n,navigator:i}=D.useContext(Vi),{matches:r}=D.useContext(Wi),{pathname:s}=ji(),o=JSON.stringify(ih(r,n.v7_relativeSplatPath)),a=D.useRef(!1);return N0(()=>{a.current=!0}),D.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let d=rh(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:vr([e,d.pathname])),(f.replace?i.replace:i.push)(d,f.state,f)},[e,i,o,s,t])}const wS=D.createContext(null);function TS(t){let e=D.useContext(Wi).outlet;return e&&D.createElement(wS.Provider,{value:t},e)}function Cc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=D.useContext(Vi),{matches:r}=D.useContext(Wi),{pathname:s}=ji(),o=JSON.stringify(ih(r,i.v7_relativeSplatPath));return D.useMemo(()=>rh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function AS(t,e){return bS(t,e)}function bS(t,e,n,i){fo()||zt(!1);let{navigator:r}=D.useContext(Vi),{matches:s}=D.useContext(Wi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=ji(),f;if(e){var d;let p=typeof e=="string"?uo(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||zt(!1),f=p}else f=c;let h=f.pathname||"/",g=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=Jx(t,{pathname:g}),y=NS(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:vr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:vr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&y?D.createElement(Ac.Provider,{value:{location:fa({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ar.Pop}},y):y}function CS(){let t=FS(),e=xS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:r},n):null,null)}const RS=D.createElement(CS,null);class PS extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Wi.Provider,{value:this.props.routeContext},D.createElement(L0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function LS(t){let{routeContext:e,match:n,children:i}=t,r=D.useContext(Tc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Wi.Provider,{value:e},i)}function NS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||zt(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:h,errors:g}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||_){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,d,h)=>{let g,_=!1,y=null,p=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||RS,l&&(c<0&&h===0?(kS("route-fallback"),_=!0,p=null):c===h&&(_=!0,p=d.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,h+1)),m=()=>{let v;return g?v=y:_?v=p:d.route.Component?v=D.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=f,D.createElement(LS,{match:d,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?D.createElement(PS,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:m(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):m()},null)}var I0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(I0||{}),D0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(D0||{});function IS(t){let e=D.useContext(Tc);return e||zt(!1),e}function DS(t){let e=D.useContext(P0);return e||zt(!1),e}function US(t){let e=D.useContext(Wi);return e||zt(!1),e}function U0(t){let e=US(),n=e.matches[e.matches.length-1];return n.route.id||zt(!1),n.route.id}function FS(){var t;let e=D.useContext(L0),n=DS(),i=U0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function OS(){let{router:t}=IS(I0.UseNavigateStable),e=U0(D0.UseNavigateStable),n=D.useRef(!1);return N0(()=>{n.current=!0}),D.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,fa({fromRouteId:e},s)))},[t,e])}const bp={};function kS(t,e,n){bp[t]||(bp[t]=!0)}function zS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function F0(t){let{to:e,replace:n,state:i,relative:r}=t;fo()||zt(!1);let{future:s,static:o}=D.useContext(Vi),{matches:a}=D.useContext(Wi),{pathname:l}=ji(),c=bc(),f=rh(e,ih(a,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(f);return D.useEffect(()=>c(JSON.parse(d),{replace:n,state:i,relative:r}),[c,d,r,n,i]),null}function BS(t){return TS(t.context)}function er(t){zt(!1)}function HS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ar.Pop,navigator:s,static:o=!1,future:a}=t;fo()&&zt(!1);let l=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:l,navigator:s,static:o,future:fa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=uo(i));let{pathname:f="/",search:d="",hash:h="",state:g=null,key:_="default"}=i,y=D.useMemo(()=>{let p=to(f,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:g,key:_},navigationType:r}},[l,f,d,h,g,_,r]);return y==null?null:D.createElement(Vi.Provider,{value:c},D.createElement(Ac.Provider,{children:n,value:y}))}function GS(t){let{children:e,location:n}=t;return AS(Xf(e),n)}new Promise(()=>{});function Xf(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(i,r)=>{if(!D.isValidElement(i))return;let s=[...e,r];if(i.type===D.Fragment){n.push.apply(n,Xf(i.props.children,s));return}i.type!==er&&zt(!1),!i.props.index||!i.props.children||zt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Xf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ec(){return ec=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ec.apply(this,arguments)}function O0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function VS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function WS(t,e){return t.button===0&&(!e||e==="_self")&&!VS(t)}const jS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],XS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],$S="6";try{window.__reactRouterVersion=$S}catch{}const YS=D.createContext({isTransitioning:!1}),qS="startTransition",Cp=k_[qS];function KS(t){let{basename:e,children:n,future:i,window:r}=t,s=D.useRef();s.current==null&&(s.current=Kx({window:r,v5Compat:!0}));let o=s.current,[a,l]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=D.useCallback(d=>{c&&Cp?Cp(()=>l(d)):l(d)},[l,c]);return D.useLayoutEffect(()=>o.listen(f),[o,f]),D.useEffect(()=>zS(i),[i]),D.createElement(HS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const ZS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,JS=D.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f,viewTransition:d}=e,h=O0(e,jS),{basename:g}=D.useContext(Vi),_,y=!1;if(typeof c=="string"&&QS.test(c)&&(_=c,ZS))try{let v=new URL(window.location.href),S=c.startsWith("//")?new URL(v.protocol+c):new URL(c),L=to(S.pathname,g);S.origin===v.origin&&L!=null?c=L+S.search+S.hash:y=!0}catch{}let p=MS(c,{relative:r}),u=nM(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:r,viewTransition:d});function m(v){i&&i(v),v.defaultPrevented||u(v)}return D.createElement("a",ec({},h,{href:_||p,onClick:y||s?i:m,ref:n,target:l}))}),eM=D.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:f}=e,d=O0(e,XS),h=Cc(l,{relative:d.relative}),g=ji(),_=D.useContext(P0),{navigator:y,basename:p}=D.useContext(Vi),u=_!=null&&iM(h)&&c===!0,m=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,v=g.pathname,S=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(v=v.toLowerCase(),S=S?S.toLowerCase():null,m=m.toLowerCase()),S&&p&&(S=to(S,p)||S);const L=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let C=v===m||!o&&v.startsWith(m)&&v.charAt(L)==="/",b=S!=null&&(S===m||!o&&S.startsWith(m)&&S.charAt(m.length)==="/"),G={isActive:C,isPending:b,isTransitioning:u},re=C?i:void 0,x;typeof s=="function"?x=s(G):x=[s,C?"active":null,b?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(G):a;return D.createElement(JS,ec({},d,{"aria-current":re,className:x,ref:n,style:P,to:l,viewTransition:c}),typeof f=="function"?f(G):f)});var $f;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})($f||($f={}));var Rp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Rp||(Rp={}));function tM(t){let e=D.useContext(Tc);return e||zt(!1),e}function nM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=bc(),c=ji(),f=Cc(t,{relative:o});return D.useCallback(d=>{if(WS(d,n)){d.preventDefault();let h=i!==void 0?i:Jl(c)===Jl(f);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,f,i,r,n,t,s,o,a])}function iM(t,e){e===void 0&&(e={});let n=D.useContext(YS);n==null&&zt(!1);let{basename:i}=tM($f.useViewTransitionState),r=Cc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=to(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=to(n.nextLocation.pathname,i)||n.nextLocation.pathname;return jf(r.pathname,o)!=null||jf(r.pathname,s)!=null}const sh="reforgedz.session";function jt(){const t=localStorage.getItem(sh);if(!t)return null;try{const e=JSON.parse(t);return!e||typeof e.token!="string"||e.token.length===0?null:e}catch{return null}}function rM(t){localStorage.setItem(sh,JSON.stringify(t))}function sM(){localStorage.removeItem(sh)}function oM(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),n=(4-e.length%4)%4,i=e+"=".repeat(n);return atob(i)}function aM(){const t=jt();if(!t)return null;const e=String(t.token).split(".");if(e.length!==2)return null;try{const n=oM(e[0]),i=JSON.parse(n);return!i||typeof i.sub!="string"?null:i}catch{return null}}function ou(t){const e=aM();if(!e)return!1;const n=e.tools;return!n||typeof n!="object"?t==="replay":!!n[t]}function Yt(){const t="https://admin.reforgedz.xyz";return t.length>0?t.replace(/\/$/,""):window.location.origin}async function lM(t,e){const n=Yt(),i=await fetch(`${n}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})});if(!i.ok){const r=await i.text();throw new Error(r||`Login failed (${i.status})`)}return await i.json()}async function cM(){const t=Yt(),e=jt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to list servers (${n.status})`)}return await n.json()}async function Yf(){const t=Yt(),e=jt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/replay/statusAll`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to get replay status for all servers (${n.status})`)}return await n.json()}async function Pp(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/range?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get replay range (${i.status})`)}return await i.json()}async function Lp(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/players?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to list replay players (${i.status})`)}return await i.json()}async function au(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=new URLSearchParams;i.set("serverId",t.serverId),typeof t.sinceTsMs=="number"&&i.set("sinceTsMs",String(t.sinceTsMs)),typeof t.untilTsMs=="number"&&i.set("untilTsMs",String(t.untilTsMs)),typeof t.limit=="number"&&i.set("limit",String(t.limit)),t.tail&&i.set("tail","1");const r=await fetch(`${e}/api/replay/events?${i.toString()}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!r.ok){const s=await r.text();throw new Error(s||`Failed to get replay events (${r.status})`)}return await r.json()}async function uM(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/gmPing`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to send GM ping (${i.status})`)}return await i.json()}async function lu(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapTerrain?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map terrain (${i.status})`)}return await i.json()}async function cu(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapDescriptors?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map descriptors (${i.status})`)}return await i.json()}async function fM(){const t=Yt(),e=jt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/admin/users`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list users (${n.status})`);return await n.json()}async function dM(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to create user (${i.status})`);return await i.json()}async function uu(t,e){const n=Yt(),i=jt();if(!i)throw new Error("Not authenticated");const r=await fetch(`${n}/api/admin/users/${encodeURIComponent(t)}`,{method:"PUT",headers:{Authorization:`Bearer ${i.token}`,"Content-Type":"application/json"},body:JSON.stringify({tools:e})});if(!r.ok)throw new Error(await r.text()||`Failed to update user (${r.status})`);return await r.json()}async function hM(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users/${encodeURIComponent(t)}`,{method:"DELETE",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to delete user (${i.status})`);return await i.json()}async function pM(){const t=Yt(),e=jt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list dev servers (${n.status})`);return await n.json()}async function mM(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to add dev server (${i.status})`);return await i.json()}async function gM(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/clear?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to clear history (${i.status})`);return await i.json()}async function vM(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/regenerateTerrain?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to regenerate terrain (${i.status})`);return await i.json()}async function _M(){const t=Yt(),e=jt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/discordWebhook`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to load webhook (${n.status})`);return await n.json()}async function yM(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/discordWebhook`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify({webhookUrl:t})});if(!i.ok)throw new Error(await i.text()||`Failed to save webhook (${i.status})`);return await i.json()}async function xM(t){const e=Yt(),n=jt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/exportDiscord`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to export to Discord (${i.status})`);return await i.json()}function SM(){const t=bc(),e=ji(),n=D.useMemo(()=>{const h=e.state;return h&&typeof h.from=="string"&&h.from.length>0?h.from:"/"},[e.state]),[i,r]=D.useState(""),[s,o]=D.useState(""),[a,l]=D.useState(null),[c,f]=D.useState(!1);async function d(h){if(h.preventDefault(),l(null),i.trim().length===0||s.length===0){l("Enter username and password");return}f(!0);try{const g=await lM(i.trim(),s);rM({token:g.token}),t(n,{replace:!0})}catch(g){const _=g instanceof Error?g.message:"Login failed";l(_)}finally{f(!1)}}return M.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24,boxSizing:"border-box"},children:M.jsxs("div",{className:"stack",style:{width:"min(440px, 100%)",gap:14},children:[M.jsxs("div",{style:{textAlign:"center"},children:[M.jsx("div",{className:"label",children:"Welcome"}),M.jsx("h1",{className:"h1",style:{fontSize:22,marginTop:6},children:"ReforgedZ Admin Menu"}),M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Sign in to continue."})]}),M.jsx("div",{className:"card",style:{padding:18},children:M.jsxs("form",{className:"stack",onSubmit:d,children:[M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx("div",{className:"label",children:"Username"}),M.jsx("input",{className:"input",value:i,onChange:h=>r(h.target.value),autoComplete:"username"})]}),M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx("div",{className:"label",children:"Password"}),M.jsx("input",{className:"input",type:"password",value:s,onChange:h=>o(h.target.value),autoComplete:"current-password"})]}),a?M.jsx("div",{className:"error",style:{fontSize:13},children:a}):null,M.jsx("button",{className:"button buttonPrimary",type:"submit",disabled:c,children:c?"Signing in…":"Sign in"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"If you aren't meant to be here, say hi to eiry, I know where you live!."})]})})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="161",MM=0,Np=1,EM=2,k0=1,wM=2,Ri=3,wr=0,Un=1,ci=2,_r=0,Xs=1,Ip=2,Dp=3,Up=4,TM=5,Or=100,AM=101,bM=102,Fp=103,Op=104,CM=200,RM=201,PM=202,LM=203,qf=204,Kf=205,NM=206,IM=207,DM=208,UM=209,FM=210,OM=211,kM=212,zM=213,BM=214,HM=0,GM=1,VM=2,tc=3,WM=4,jM=5,XM=6,$M=7,z0=0,YM=1,qM=2,yr=0,KM=1,ZM=2,QM=3,JM=4,eE=5,tE=6,B0=300,no=301,io=302,Zf=303,Qf=304,Rc=306,Jf=1e3,ui=1001,ed=1002,En=1003,kp=1004,wo=1005,Cn=1006,fu=1007,Gr=1008,xr=1009,nE=1010,iE=1011,ah=1012,H0=1013,lr=1014,Ni=1015,da=1016,G0=1017,V0=1018,jr=1020,rE=1021,fi=1023,sE=1024,oE=1025,Xr=1026,ro=1027,aE=1028,W0=1029,lE=1030,j0=1031,X0=1033,du=33776,hu=33777,pu=33778,mu=33779,zp=35840,Bp=35841,Hp=35842,Gp=35843,$0=36196,Vp=37492,Wp=37496,jp=37808,Xp=37809,$p=37810,Yp=37811,qp=37812,Kp=37813,Zp=37814,Qp=37815,Jp=37816,em=37817,tm=37818,nm=37819,im=37820,rm=37821,gu=36492,sm=36494,om=36495,cE=36283,am=36284,lm=36285,cm=36286,Y0=3e3,$r=3001,uE=3200,fE=3201,q0=0,dE=1,qn="",an="srgb",Hi="srgb-linear",lh="display-p3",Pc="display-p3-linear",nc="linear",Nt="srgb",ic="rec709",rc="p3",os=7680,um=519,hE=512,pE=513,mE=514,K0=515,gE=516,vE=517,_E=518,yE=519,td=35044,fm="300 es",nd=1035,Ui=2e3,sc=2001;class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bl=Math.PI/180,id=180/Math.PI;function Sr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[t&255]+gn[t>>8&255]+gn[t>>16&255]+gn[t>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function Pn(t,e,n){return Math.max(e,Math.min(n,t))}function xE(t,e){return(t%e+e)%e}function vu(t,e,n){return(1-n)*t+n*e}function dm(t){return(t&t-1)===0&&t!==0}function rd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Si(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ct(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,n=0){ht.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,n,i,r,s,o,a,l,c){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],g=i[5],_=i[8],y=r[0],p=r[3],u=r[6],m=r[1],v=r[4],S=r[7],L=r[2],C=r[5],b=r[8];return s[0]=o*y+a*m+l*L,s[3]=o*p+a*v+l*C,s[6]=o*u+a*S+l*b,s[1]=c*y+f*m+d*L,s[4]=c*p+f*v+d*C,s[7]=c*u+f*S+d*b,s[2]=h*y+g*m+_*L,s[5]=h*p+g*v+_*C,s[8]=h*u+g*S+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,g=c*s-o*l,_=n*d+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_u.makeScale(e,n)),this}rotate(e){return this.premultiply(_u.makeRotation(-e)),this}translate(e,n){return this.premultiply(_u.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _u=new mt;function Z0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function SE(){const t=oc("canvas");return t.style.display="block",t}const hm={};function Yr(t){t in hm||(hm[t]=!0,console.warn(t))}const pm=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mm=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ka={[Hi]:{transfer:nc,primaries:ic,toReference:t=>t,fromReference:t=>t},[an]:{transfer:Nt,primaries:ic,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Pc]:{transfer:nc,primaries:rc,toReference:t=>t.applyMatrix3(mm),fromReference:t=>t.applyMatrix3(pm)},[lh]:{transfer:Nt,primaries:rc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(mm),fromReference:t=>t.applyMatrix3(pm).convertLinearToSRGB()}},ME=new Set([Hi,Pc]),Rt={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ME.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ka[e].toReference,r=ka[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ka[t].primaries},getTransfer:function(t){return t===qn?nc:ka[t].transfer}};function $s(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let as;class Q0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=oc("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=as}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$s(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($s(n[i]/255)*255):n[i]=$s(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let EE=0;class J0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xu(r[o].image)):s.push(xu(r[o]))}else s=xu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function xu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Q0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wE=0;class Tn extends ho{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,i=ui,r=ui,s=Cn,o=Gr,a=fi,l=xr,c=Tn.DEFAULT_ANISOTROPY,f=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Sr(),this.name="",this.source=new J0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===$r?an:qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jf:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jf:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===an?$r:Y0}set encoding(e){Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$r?an:qn}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=B0;Tn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,n=0,i=0,r=1){nn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],g=l[5],_=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(g+1)/2,L=(u+1)/2,C=(f+h)/4,b=(d+y)/4,G=(_+p)/4;return v>S&&v>L?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=b/i):S>L?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=G/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=b/s,r=G/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-_)*(p-_)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(m)<.001&&(m=1),this.x=(p-_)/m,this.y=(d-y)/m,this.z=(h-f)/m,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TE extends ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new nn(0,0,e,n),this.scissorTest=!1,this.viewport=new nn(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Yr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$r?an:qn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new J0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends TE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class e_ extends Tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class AE extends Tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],g=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==h||c!==g||f!==_){let p=1-a;const u=l*h+c*g+f*_+d*y,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const L=Math.sqrt(v),C=Math.atan2(L,u*m);p=Math.sin(p*C)/L,a=Math.sin(a*C)/L}const S=a*m;if(l=l*p+h*S,c=c*p+g*S,f=f*p+_*S,d=d*p+y*S,p===1-a){const L=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=L,c*=L,f*=L,d*=L}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],g=s[o+2],_=s[o+3];return e[n]=a*_+f*d+l*g-c*h,e[n+1]=l*_+f*h+c*d-a*g,e[n+2]=c*_+f*g+a*h-l*d,e[n+3]=f*_-a*d-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*g*_,this._y=c*g*d-h*f*_,this._z=c*f*_+h*g*d,this._w=c*f*d-h*g*_;break;case"YXZ":this._x=h*f*d+c*g*_,this._y=c*g*d-h*f*_,this._z=c*f*_-h*g*d,this._w=c*f*d+h*g*_;break;case"ZXY":this._x=h*f*d-c*g*_,this._y=c*g*d+h*f*_,this._z=c*f*_+h*g*d,this._w=c*f*d-h*g*_;break;case"ZYX":this._x=h*f*d-c*g*_,this._y=c*g*d+h*f*_,this._z=c*f*_-h*g*d,this._w=c*f*d+h*g*_;break;case"YZX":this._x=h*f*d+c*g*_,this._y=c*g*d+h*f*_,this._z=c*f*_-h*g*d,this._w=c*f*d-h*g*_;break;case"XZY":this._x=h*f*d-c*g*_,this._y=c*g*d-h*f*_,this._z=c*f*_+h*g*d,this._w=c*f*d+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Su.copy(this).projectOnVector(e),this.sub(Su)}reflect(e){return this.sub(Su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Su=new V,gm=new ts;class _a{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),Ba.subVectors(this.max,To),ls.subVectors(e.a,To),cs.subVectors(e.b,To),us.subVectors(e.c,To),Yi.subVectors(cs,ls),qi.subVectors(us,cs),Rr.subVectors(ls,us);let n=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Rr.z,Rr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Rr.z,0,-Rr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Rr.y,Rr.x,0];return!Mu(n,ls,cs,us,Ba)||(n=[1,0,0,0,1,0,0,0,1],!Mu(n,ls,cs,us,Ba))?!1:(Ha.crossVectors(Yi,qi),n=[Ha.x,Ha.y,Ha.z],Mu(n,ls,cs,us,Ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new V,new V,new V,new V,new V,new V,new V,new V],ii=new V,za=new _a,ls=new V,cs=new V,us=new V,Yi=new V,qi=new V,Rr=new V,To=new V,Ba=new V,Ha=new V,Pr=new V;function Mu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Pr.fromArray(t,s);const a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=n.dot(Pr),f=i.dot(Pr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const bE=new _a,Ao=new V,Eu=new V;class Lc{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Eu)),this.expandByPoint(Ao.copy(e.center).sub(Eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new V,wu=new V,Ga=new V,Ki=new V,Tu=new V,Va=new V,Au=new V;class t_{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wu.copy(e).add(n).multiplyScalar(.5),Ga.copy(n).sub(e).normalize(),Ki.copy(this.origin).sub(wu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ga),a=Ki.dot(this.direction),l=-Ki.dot(Ga),c=Ki.lengthSq(),f=Math.abs(1-o*o);let d,h,g,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const y=1/f;d*=y,h*=y,g=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(wu).addScaledVector(Ga,h),g}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){Tu.subVectors(n,e),Va.subVectors(i,e),Au.crossVectors(Tu,Va);let o=this.direction.dot(Au),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=a*this.direction.dot(Va.crossVectors(Ki,Va));if(l<0)return null;const c=a*this.direction.dot(Tu.cross(Ki));if(c<0||l+c>o)return null;const f=-a*Ki.dot(Au);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,g,_,y,p){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,g,_,y,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,g,_,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=g,u[7]=_,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,g=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=g+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,g=l*d,_=c*f,y=c*d;n[0]=h+y*a,n[4]=_*a-g,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=g*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,g=l*d,_=c*f,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,g=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=_*c-g,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=g*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=y-h*d,n[8]=_*d+g,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=g*d+_,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,g=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=o*f,n[9]=g*d-_,n[2]=_*d-g,n[6]=a*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CE,e,RE)}lookAt(e,n,i){const r=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Zi.crossVectors(i,Fn),Zi.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Zi.crossVectors(i,Fn)),Zi.normalize(),Wa.crossVectors(Fn,Zi),r[0]=Zi.x,r[4]=Wa.x,r[8]=Fn.x,r[1]=Zi.y,r[5]=Wa.y,r[9]=Fn.y,r[2]=Zi.z,r[6]=Wa.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],g=i[13],_=i[2],y=i[6],p=i[10],u=i[14],m=i[3],v=i[7],S=i[11],L=i[15],C=r[0],b=r[4],G=r[8],re=r[12],x=r[1],P=r[5],te=r[9],ce=r[13],k=r[2],ne=r[6],Q=r[10],ae=r[14],H=r[3],X=r[7],q=r[11],se=r[15];return s[0]=o*C+a*x+l*k+c*H,s[4]=o*b+a*P+l*ne+c*X,s[8]=o*G+a*te+l*Q+c*q,s[12]=o*re+a*ce+l*ae+c*se,s[1]=f*C+d*x+h*k+g*H,s[5]=f*b+d*P+h*ne+g*X,s[9]=f*G+d*te+h*Q+g*q,s[13]=f*re+d*ce+h*ae+g*se,s[2]=_*C+y*x+p*k+u*H,s[6]=_*b+y*P+p*ne+u*X,s[10]=_*G+y*te+p*Q+u*q,s[14]=_*re+y*ce+p*ae+u*se,s[3]=m*C+v*x+S*k+L*H,s[7]=m*b+v*P+S*ne+L*X,s[11]=m*G+v*te+S*Q+L*q,s[15]=m*re+v*ce+S*ae+L*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],g=e[14],_=e[3],y=e[7],p=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*g-i*l*g)+y*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*f-s*l*f)+p*(+n*c*d-n*a*g-s*o*d+i*o*g+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],g=e[11],_=e[12],y=e[13],p=e[14],u=e[15],m=d*p*c-y*h*c+y*l*g-a*p*g-d*l*u+a*h*u,v=_*h*c-f*p*c-_*l*g+o*p*g+f*l*u-o*h*u,S=f*y*c-_*d*c+_*a*g-o*y*g-f*a*u+o*d*u,L=_*d*l-f*y*l-_*a*h+o*y*h+f*a*p-o*d*p,C=n*m+i*v+r*S+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=m*b,e[1]=(y*h*s-d*p*s-y*r*g+i*p*g+d*r*u-i*h*u)*b,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*u+i*l*u)*b,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*g-i*l*g)*b,e[4]=v*b,e[5]=(f*p*s-_*h*s+_*r*g-n*p*g-f*r*u+n*h*u)*b,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*b,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*g+n*l*g)*b,e[8]=S*b,e[9]=(_*d*s-f*y*s-_*i*g+n*y*g+f*i*u-n*d*u)*b,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*b,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*g-n*a*g)*b,e[12]=L*b,e[13]=(f*y*r-_*d*r+_*i*h-n*y*h-f*i*p+n*d*p)*b,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*p-n*a*p)*b,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,g=s*f,_=s*d,y=o*f,p=o*d,u=a*d,m=l*c,v=l*f,S=l*d,L=i.x,C=i.y,b=i.z;return r[0]=(1-(y+u))*L,r[1]=(g+S)*L,r[2]=(_-v)*L,r[3]=0,r[4]=(g-S)*C,r[5]=(1-(h+u))*C,r[6]=(p+m)*C,r[7]=0,r[8]=(_+v)*b,r[9]=(p-m)*b,r[10]=(1-(h+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=fs.set(r[0],r[1],r[2]).length();const o=fs.set(r[4],r[5],r[6]).length(),a=fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const c=1/s,f=1/o,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=f,ri.elements[5]*=f,ri.elements[6]*=f,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,n.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ui){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(a===Ui)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===sc)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ui){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,g=(i+r)*f;let _,y;if(a===Ui)_=(o+s)*d,y=-2*d;else if(a===sc)_=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const fs=new V,ri=new Wt,CE=new V(0,0,0),RE=new V(1,1,1),Zi=new V,Wa=new V,Fn=new V,vm=new Wt,_m=new ts;class ya{constructor(e=0,n=0,i=0,r=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class n_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PE=0;const ym=new V,ds=new ts,Ai=new Wt,ja=new V,bo=new V,LE=new V,NE=new ts,xm=new V(1,0,0),Sm=new V(0,1,0),Mm=new V(0,0,1),IE={type:"added"},DE={type:"removed"};class Zt extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new V,n=new ya,i=new ts,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new mt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ja.copy(e):ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(bo,ja,this.up):Ai.lookAt(ja,bo,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(Ai),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(IE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(DE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,LE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,NE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new V(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new V,bi=new V,bu=new V,Ci=new V,hs=new V,ps=new V,Em=new V,Cu=new V,Ru=new V,Pu=new V;class Kn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){si.subVectors(r,n),bi.subVectors(i,n),bu.subVectors(e,n);const o=si.dot(si),a=si.dot(bi),l=si.dot(bu),c=bi.dot(bi),f=bi.dot(bu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,g=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),bi.subVectors(e,n),si.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),si.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,i),ps.subVectors(s,i),Cu.subVectors(e,i);const l=hs.dot(Cu),c=ps.dot(Cu);if(l<=0&&c<=0)return n.copy(i);Ru.subVectors(e,r);const f=hs.dot(Ru),d=ps.dot(Ru);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(hs,o);Pu.subVectors(e,s);const g=hs.dot(Pu),_=ps.dot(Pu);if(_>=0&&g<=_)return n.copy(s);const y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ps,a);const p=f*_-g*d;if(p<=0&&d-f>=0&&g-_>=0)return Em.subVectors(s,r),a=(d-f)/(d-f+(g-_)),n.copy(r).addScaledVector(Em,a);const u=1/(p+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(hs,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Lu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ut{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Rt.workingColorSpace){if(e=xE(e,1),n=Pn(n,0,1),i=Pn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Lu(o,s,e+1/3),this.g=Lu(o,s,e),this.b=Lu(o,s,e-1/3)}return Rt.toWorkingColorSpace(this,r),this}setStyle(e,n=an){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=an){const i=i_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=yu(e.r),this.g=yu(e.g),this.b=yu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Rt.fromWorkingColorSpace(vn.copy(this),e),Math.round(Pn(vn.r*255,0,255))*65536+Math.round(Pn(vn.g*255,0,255))*256+Math.round(Pn(vn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.fromWorkingColorSpace(vn.copy(this),n);const i=vn.r,r=vn.g,s=vn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(vn.copy(this),n),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=an){Rt.fromWorkingColorSpace(vn.copy(this),e);const n=vn.r,i=vn.g,r=vn.b;return e!==an?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+n,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qi),e.getHSL(Xa);const i=vu(Qi.h,Xa.h,n),r=vu(Qi.s,Xa.s,n),s=vu(Qi.l,Xa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new ut;ut.NAMES=i_;let UE=0;class rs extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Xs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qf,this.blendDst=Kf,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=tc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qf&&(i.blendSrc=this.blendSrc),this.blendDst!==Kf&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==um&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class r_ extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new V,$a=new ht;class ln{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=td,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)$a.fromBufferAttribute(this,n),$a.applyMatrix3(e),this.setXY(n,$a.x,$a.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Si(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Si(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Si(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Si(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Si(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==td&&(e.usage=this.usage),e}}class s_ extends ln{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o_ extends ln{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class fn extends ln{constructor(e,n,i){super(new Float32Array(e),n,i)}}let FE=0;const jn=new Wt,Nu=new Zt,ms=new V,On=new _a,Co=new _a,en=new V;class cn extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z0(e)?o_:s_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new mt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,i){return jn.makeTranslation(e,n,i),this.applyMatrix4(jn),this}scale(e,n,i){return jn.makeScale(e,n,i),this.applyMatrix4(jn),this}lookAt(e){return Nu.lookAt(e),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(On.min,Co.min),On.expandByPoint(en),en.addVectors(On.max,Co.max),On.expandByPoint(en)):(On.expandByPoint(Co.min),On.expandByPoint(Co.max))}On.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(en));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)en.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(e,c),en.add(ms)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let x=0;x<a;x++)c[x]=new V,f[x]=new V;const d=new V,h=new V,g=new V,_=new ht,y=new ht,p=new ht,u=new V,m=new V;function v(x,P,te){d.fromArray(r,x*3),h.fromArray(r,P*3),g.fromArray(r,te*3),_.fromArray(o,x*2),y.fromArray(o,P*2),p.fromArray(o,te*2),h.sub(d),g.sub(d),y.sub(_),p.sub(_);const ce=1/(y.x*p.y-p.x*y.y);isFinite(ce)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(g,-y.y).multiplyScalar(ce),m.copy(g).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(ce),c[x].add(u),c[P].add(u),c[te].add(u),f[x].add(m),f[P].add(m),f[te].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let x=0,P=S.length;x<P;++x){const te=S[x],ce=te.start,k=te.count;for(let ne=ce,Q=ce+k;ne<Q;ne+=3)v(i[ne+0],i[ne+1],i[ne+2])}const L=new V,C=new V,b=new V,G=new V;function re(x){b.fromArray(s,x*3),G.copy(b);const P=c[x];L.copy(P),L.sub(b.multiplyScalar(b.dot(P))).normalize(),C.crossVectors(G,P);const ce=C.dot(f[x])<0?-1:1;l[x*4]=L.x,l[x*4+1]=L.y,l[x*4+2]=L.z,l[x*4+3]=ce}for(let x=0,P=S.length;x<P;++x){const te=S[x],ce=te.start,k=te.count;for(let ne=ce,Q=ce+k;ne<Q;ne+=3)re(i[ne+0]),re(i[ne+1]),re(i[ne+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,f=new V,d=new V;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let g=0,_=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*f;for(let u=0;u<f;u++)h[_++]=c[g++]}return new ln(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const g=c[d];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,g=d.length;h<g;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new Wt,Lr=new t_,Ya=new Lc,Tm=new V,gs=new V,vs=new V,_s=new V,Iu=new V,qa=new V,Ka=new ht,Za=new ht,Qa=new ht,Am=new V,bm=new V,Cm=new V,Ja=new V,el=new V;class Qn extends Zt{constructor(e=new cn,n=new r_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Iu.fromBufferAttribute(d,e),o?qa.addScaledVector(Iu,f):qa.addScaledVector(Iu.sub(n),f))}n.add(qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(Ya.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Ya,Tm)===null||Lr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(wm.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(wm),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let S=m,L=v;S<L;S+=3){const C=a.getX(S),b=a.getX(S+1),G=a.getX(S+2);r=tl(this,u,e,i,c,f,d,C,b,G),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let p=_,u=y;p<u;p+=3){const m=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=tl(this,o,e,i,c,f,d,m,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=m,L=v;S<L;S+=3){const C=S,b=S+1,G=S+2;r=tl(this,u,e,i,c,f,d,C,b,G),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let p=_,u=y;p<u;p+=3){const m=p,v=p+1,S=p+2;r=tl(this,o,e,i,c,f,d,m,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function OE(t,e,n,i,r,s,o,a){let l;if(e.side===Un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===wr,a),l===null)return null;el.copy(a),el.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(el);return c<n.near||c>n.far?null:{distance:c,point:el.clone(),object:t}}function tl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,gs),t.getVertexPosition(l,vs),t.getVertexPosition(c,_s);const f=OE(t,e,n,i,gs,vs,_s,Ja);if(f){r&&(Ka.fromBufferAttribute(r,a),Za.fromBufferAttribute(r,l),Qa.fromBufferAttribute(r,c),f.uv=Kn.getInterpolation(Ja,gs,vs,_s,Ka,Za,Qa,new ht)),s&&(Ka.fromBufferAttribute(s,a),Za.fromBufferAttribute(s,l),Qa.fromBufferAttribute(s,c),f.uv1=Kn.getInterpolation(Ja,gs,vs,_s,Ka,Za,Qa,new ht),f.uv2=f.uv1),o&&(Am.fromBufferAttribute(o,a),bm.fromBufferAttribute(o,l),Cm.fromBufferAttribute(o,c),f.normal=Kn.getInterpolation(Ja,gs,vs,_s,Am,bm,Cm,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};Kn.getNormal(gs,vs,_s,d.normal),f.face=d}return f}class xa extends cn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(f,3)),this.setAttribute("uv",new fn(d,2));function _(y,p,u,m,v,S,L,C,b,G,re){const x=S/b,P=L/G,te=S/2,ce=L/2,k=C/2,ne=b+1,Q=G+1;let ae=0,H=0;const X=new V;for(let q=0;q<Q;q++){const se=q*P-ce;for(let de=0;de<ne;de++){const Ke=de*x-te;X[y]=Ke*m,X[p]=se*v,X[u]=k,c.push(X.x,X.y,X.z),X[y]=0,X[p]=0,X[u]=C>0?1:-1,f.push(X.x,X.y,X.z),d.push(de/b),d.push(1-q/G),ae+=1}}for(let q=0;q<G;q++)for(let se=0;se<b;se++){const de=h+se+ne*q,Ke=h+se+ne*(q+1),ee=h+(se+1)+ne*(q+1),le=h+(se+1)+ne*q;l.push(de,Ke,le),l.push(Ke,ee,le),H+=6}a.addGroup(g,H,re),g+=H,h+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Sn(t){const e={};for(let n=0;n<t.length;n++){const i=so(t[n]);for(const r in i)e[r]=i[r]}return e}function kE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function a_(t){return t.getRenderTarget()===null?t.outputColorSpace:Rt.workingColorSpace}const zE={clone:so,merge:Sn};var BE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BE,this.fragmentShader=HE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=kE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class l_ extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new V,Rm=new ht,Pm=new ht;class Yn extends l_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,Pm),n.subVectors(Pm,Rm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ys=-90,xs=1;class GE extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yn(ys,xs,e,n);r.layers=this.layers,this.add(r);const s=new Yn(ys,xs,e,n);s.layers=this.layers,this.add(s);const o=new Yn(ys,xs,e,n);o.layers=this.layers,this.add(o);const a=new Yn(ys,xs,e,n);a.layers=this.layers,this.add(a);const l=new Yn(ys,xs,e,n);l.layers=this.layers,this.add(l);const c=new Yn(ys,xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class c_ extends Tn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:no,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VE extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Yr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$r?an:qn),this.texture=new c_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xa(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:_r});s.uniforms.tEquirect.value=n;const o=new Qn(r,s),a=n.minFilter;return n.minFilter===Gr&&(n.minFilter=Cn),new GE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Du=new V,WE=new V,jE=new mt;class Ur{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Du.subVectors(i,n).cross(WE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jE.getNormalMatrix(e),r=this.coplanarPoint(Du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Lc,nl=new V;class ch{constructor(e=new Ur,n=new Ur,i=new Ur,r=new Ur,s=new Ur,o=new Ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],g=r[8],_=r[9],y=r[10],p=r[11],u=r[12],m=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,p-g,S-u).normalize(),i[1].setComponents(l+s,h+c,p+g,S+u).normalize(),i[2].setComponents(l+o,h+f,p+_,S+m).normalize(),i[3].setComponents(l-o,h-f,p-_,S-m).normalize(),i[4].setComponents(l-a,h-d,p-y,S-v).normalize(),n===Ui)i[5].setComponents(l+a,h+d,p+y,S+v).normalize();else if(n===sc)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(nl.x=r.normal.x>0?e.max.x:e.min.x,nl.y=r.normal.y>0?e.max.y:e.min.y,nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function u_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function XE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,g=d.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,f,d){const h=f.array,g=f._updateRange,_=f.updateRanges;if(t.bindBuffer(d,c),g.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let y=0,p=_.length;y<p;y++){const u=_[y];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:l}}class oo extends cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,g=[],_=[],y=[],p=[];for(let u=0;u<f;u++){const m=u*h-o;for(let v=0;v<c;v++){const S=v*d-s;_.push(S,-m,0),y.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,S=m+c*(u+1),L=m+1+c*(u+1),C=m+1+c*u;g.push(v,S,C),g.push(S,L,C)}this.setIndex(g),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(y,3)),this.setAttribute("uv",new fn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}var $E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YE=`#ifdef USE_ALPHAHASH
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
#endif`,qE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JE=`#ifdef USE_AOMAP
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
#endif`,ew=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tw=`#ifdef USE_BATCHING
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
#endif`,nw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,iw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ow=`#ifdef USE_IRIDESCENCE
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
#endif`,aw=`#ifdef USE_BUMPMAP
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
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gw=`#define PI 3.141592653589793
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
} // validated`,vw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_w=`vec3 transformedNormal = objectNormal;
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
#endif`,yw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",ww=`
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
}`,Tw=`#ifdef USE_ENVMAP
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
#endif`,Aw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bw=`#ifdef USE_ENVMAP
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
#endif`,Cw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rw=`#ifdef USE_ENVMAP
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
#endif`,Pw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dw=`#ifdef USE_GRADIENTMAP
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
}`,Uw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ow=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zw=`uniform bool receiveShadow;
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
#endif`,Bw=`#ifdef USE_ENVMAP
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
#endif`,Hw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ww=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jw=`PhysicalMaterial material;
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
#endif`,Xw=`struct PhysicalMaterial {
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
}`,$w=`
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
#endif`,Yw=`#if defined( RE_IndirectDiffuse )
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
#endif`,qw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iT=`#if defined( USE_POINTS_UV )
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
#endif`,rT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aT=`#ifdef USE_MORPHNORMALS
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
#endif`,lT=`#ifdef USE_MORPHTARGETS
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
#endif`,cT=`#ifdef USE_MORPHTARGETS
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
#endif`,uT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mT=`#ifdef USE_NORMALMAP
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
#endif`,gT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ST=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ET=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LT=`float getShadowMask() {
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
}`,NT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IT=`#ifdef USE_SKINNING
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
#endif`,DT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UT=`#ifdef USE_SKINNING
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
#endif`,FT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BT=`#ifdef USE_TRANSMISSION
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
#endif`,HT=`#ifdef USE_TRANSMISSION
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
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$T=`uniform sampler2D t2D;
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
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`#include <common>
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
}`,JT=`#if DEPTH_PACKING == 3200
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
}`,e1=`#define DISTANCE
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
}`,t1=`#define DISTANCE
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`uniform float scale;
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
}`,s1=`uniform vec3 diffuse;
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
}`,o1=`#include <common>
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
}`,a1=`uniform vec3 diffuse;
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
}`,l1=`#define LAMBERT
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
}`,c1=`#define LAMBERT
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
}`,u1=`#define MATCAP
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
}`,f1=`#define MATCAP
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
}`,d1=`#define NORMAL
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
}`,h1=`#define NORMAL
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
}`,p1=`#define PHONG
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
}`,m1=`#define PHONG
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
}`,g1=`#define STANDARD
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
}`,v1=`#define STANDARD
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
}`,_1=`#define TOON
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
}`,y1=`#define TOON
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
}`,x1=`uniform float size;
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
}`,S1=`uniform vec3 diffuse;
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
}`,M1=`#include <common>
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
}`,E1=`uniform vec3 color;
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
}`,w1=`uniform float rotation;
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
}`,T1=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:$E,alphahash_pars_fragment:YE,alphamap_fragment:qE,alphamap_pars_fragment:KE,alphatest_fragment:ZE,alphatest_pars_fragment:QE,aomap_fragment:JE,aomap_pars_fragment:ew,batching_pars_vertex:tw,batching_vertex:nw,begin_vertex:iw,beginnormal_vertex:rw,bsdfs:sw,iridescence_fragment:ow,bumpmap_pars_fragment:aw,clipping_planes_fragment:lw,clipping_planes_pars_fragment:cw,clipping_planes_pars_vertex:uw,clipping_planes_vertex:fw,color_fragment:dw,color_pars_fragment:hw,color_pars_vertex:pw,color_vertex:mw,common:gw,cube_uv_reflection_fragment:vw,defaultnormal_vertex:_w,displacementmap_pars_vertex:yw,displacementmap_vertex:xw,emissivemap_fragment:Sw,emissivemap_pars_fragment:Mw,colorspace_fragment:Ew,colorspace_pars_fragment:ww,envmap_fragment:Tw,envmap_common_pars_fragment:Aw,envmap_pars_fragment:bw,envmap_pars_vertex:Cw,envmap_physical_pars_fragment:Bw,envmap_vertex:Rw,fog_vertex:Pw,fog_pars_vertex:Lw,fog_fragment:Nw,fog_pars_fragment:Iw,gradientmap_pars_fragment:Dw,lightmap_fragment:Uw,lightmap_pars_fragment:Fw,lights_lambert_fragment:Ow,lights_lambert_pars_fragment:kw,lights_pars_begin:zw,lights_toon_fragment:Hw,lights_toon_pars_fragment:Gw,lights_phong_fragment:Vw,lights_phong_pars_fragment:Ww,lights_physical_fragment:jw,lights_physical_pars_fragment:Xw,lights_fragment_begin:$w,lights_fragment_maps:Yw,lights_fragment_end:qw,logdepthbuf_fragment:Kw,logdepthbuf_pars_fragment:Zw,logdepthbuf_pars_vertex:Qw,logdepthbuf_vertex:Jw,map_fragment:eT,map_pars_fragment:tT,map_particle_fragment:nT,map_particle_pars_fragment:iT,metalnessmap_fragment:rT,metalnessmap_pars_fragment:sT,morphcolor_vertex:oT,morphnormal_vertex:aT,morphtarget_pars_vertex:lT,morphtarget_vertex:cT,normal_fragment_begin:uT,normal_fragment_maps:fT,normal_pars_fragment:dT,normal_pars_vertex:hT,normal_vertex:pT,normalmap_pars_fragment:mT,clearcoat_normal_fragment_begin:gT,clearcoat_normal_fragment_maps:vT,clearcoat_pars_fragment:_T,iridescence_pars_fragment:yT,opaque_fragment:xT,packing:ST,premultiplied_alpha_fragment:MT,project_vertex:ET,dithering_fragment:wT,dithering_pars_fragment:TT,roughnessmap_fragment:AT,roughnessmap_pars_fragment:bT,shadowmap_pars_fragment:CT,shadowmap_pars_vertex:RT,shadowmap_vertex:PT,shadowmask_pars_fragment:LT,skinbase_vertex:NT,skinning_pars_vertex:IT,skinning_vertex:DT,skinnormal_vertex:UT,specularmap_fragment:FT,specularmap_pars_fragment:OT,tonemapping_fragment:kT,tonemapping_pars_fragment:zT,transmission_fragment:BT,transmission_pars_fragment:HT,uv_pars_fragment:GT,uv_pars_vertex:VT,uv_vertex:WT,worldpos_vertex:jT,background_vert:XT,background_frag:$T,backgroundCube_vert:YT,backgroundCube_frag:qT,cube_vert:KT,cube_frag:ZT,depth_vert:QT,depth_frag:JT,distanceRGBA_vert:e1,distanceRGBA_frag:t1,equirect_vert:n1,equirect_frag:i1,linedashed_vert:r1,linedashed_frag:s1,meshbasic_vert:o1,meshbasic_frag:a1,meshlambert_vert:l1,meshlambert_frag:c1,meshmatcap_vert:u1,meshmatcap_frag:f1,meshnormal_vert:d1,meshnormal_frag:h1,meshphong_vert:p1,meshphong_frag:m1,meshphysical_vert:g1,meshphysical_frag:v1,meshtoon_vert:_1,meshtoon_frag:y1,points_vert:x1,points_frag:S1,shadow_vert:M1,shadow_frag:E1,sprite_vert:w1,sprite_frag:T1},Te={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},_i={basic:{uniforms:Sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ut(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Sn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Sn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ut(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Sn([Te.points,Te.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Sn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Sn([Te.common,Te.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Sn([Te.sprite,Te.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Sn([Te.common,Te.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Sn([Te.lights,Te.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};_i.physical={uniforms:Sn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const il={r:0,b:0,g:0};function A1(t,e,n,i,r,s,o){const a=new ut(0);let l=s===!0?0:1,c,f,d=null,h=0,g=null;function _(p,u){let m=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),m=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Rc)?(f===void 0&&(f=new Qn(new xa(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:so(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Nt,(d!==v||h!==v.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,g=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Qn(new oo(2,2),new Tr({name:"BackgroundMaterial",uniforms:so(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(v.colorSpace)!==Nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(il,a_(t)),i.buffers.color.setClear(il.r,il.g,il.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:_}}function b1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function d(k,ne,Q,ae,H){let X=!1;if(o){const q=y(ae,Q,ne);c!==q&&(c=q,g(c.object)),X=u(k,ae,Q,H),X&&m(k,ae,Q,H)}else{const q=ne.wireframe===!0;(c.geometry!==ae.id||c.program!==Q.id||c.wireframe!==q)&&(c.geometry=ae.id,c.program=Q.id,c.wireframe=q,X=!0)}H!==null&&n.update(H,t.ELEMENT_ARRAY_BUFFER),(X||f)&&(f=!1,G(k,ne,Q,ae),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(k){return i.isWebGL2?t.bindVertexArray(k):s.bindVertexArrayOES(k)}function _(k){return i.isWebGL2?t.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function y(k,ne,Q){const ae=Q.wireframe===!0;let H=a[k.id];H===void 0&&(H={},a[k.id]=H);let X=H[ne.id];X===void 0&&(X={},H[ne.id]=X);let q=X[ae];return q===void 0&&(q=p(h()),X[ae]=q),q}function p(k){const ne=[],Q=[],ae=[];for(let H=0;H<r;H++)ne[H]=0,Q[H]=0,ae[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:Q,attributeDivisors:ae,object:k,attributes:{},index:null}}function u(k,ne,Q,ae){const H=c.attributes,X=ne.attributes;let q=0;const se=Q.getAttributes();for(const de in se)if(se[de].location>=0){const ee=H[de];let le=X[de];if(le===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&(le=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&(le=k.instanceColor)),ee===void 0||ee.attribute!==le||le&&ee.data!==le.data)return!0;q++}return c.attributesNum!==q||c.index!==ae}function m(k,ne,Q,ae){const H={},X=ne.attributes;let q=0;const se=Q.getAttributes();for(const de in se)if(se[de].location>=0){let ee=X[de];ee===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&(ee=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&(ee=k.instanceColor));const le={};le.attribute=ee,ee&&ee.data&&(le.data=ee.data),H[de]=le,q++}c.attributes=H,c.attributesNum=q,c.index=ae}function v(){const k=c.newAttributes;for(let ne=0,Q=k.length;ne<Q;ne++)k[ne]=0}function S(k){L(k,0)}function L(k,ne){const Q=c.newAttributes,ae=c.enabledAttributes,H=c.attributeDivisors;Q[k]=1,ae[k]===0&&(t.enableVertexAttribArray(k),ae[k]=1),H[k]!==ne&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,ne),H[k]=ne)}function C(){const k=c.newAttributes,ne=c.enabledAttributes;for(let Q=0,ae=ne.length;Q<ae;Q++)ne[Q]!==k[Q]&&(t.disableVertexAttribArray(Q),ne[Q]=0)}function b(k,ne,Q,ae,H,X,q){q===!0?t.vertexAttribIPointer(k,ne,Q,H,X):t.vertexAttribPointer(k,ne,Q,ae,H,X)}function G(k,ne,Q,ae){if(i.isWebGL2===!1&&(k.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=ae.attributes,X=Q.getAttributes(),q=ne.defaultAttributeValues;for(const se in X){const de=X[se];if(de.location>=0){let Ke=H[se];if(Ke===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(Ke=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(Ke=k.instanceColor)),Ke!==void 0){const ee=Ke.normalized,le=Ke.itemSize,be=n.get(Ke);if(be===void 0)continue;const Fe=be.buffer,Xe=be.type,Ue=be.bytesPerElement,ft=i.isWebGL2===!0&&(Xe===t.INT||Xe===t.UNSIGNED_INT||Ke.gpuType===H0);if(Ke.isInterleavedBufferAttribute){const $e=Ke.data,W=$e.stride,gt=Ke.offset;if($e.isInstancedInterleavedBuffer){for(let Pe=0;Pe<de.locationSize;Pe++)L(de.location+Pe,$e.meshPerAttribute);k.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let Pe=0;Pe<de.locationSize;Pe++)S(de.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let Pe=0;Pe<de.locationSize;Pe++)b(de.location+Pe,le/de.locationSize,Xe,ee,W*Ue,(gt+le/de.locationSize*Pe)*Ue,ft)}else{if(Ke.isInstancedBufferAttribute){for(let $e=0;$e<de.locationSize;$e++)L(de.location+$e,Ke.meshPerAttribute);k.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let $e=0;$e<de.locationSize;$e++)S(de.location+$e);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let $e=0;$e<de.locationSize;$e++)b(de.location+$e,le/de.locationSize,Xe,ee,le*Ue,le/de.locationSize*$e*Ue,ft)}}else if(q!==void 0){const ee=q[se];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(de.location,ee);break;case 3:t.vertexAttrib3fv(de.location,ee);break;case 4:t.vertexAttrib4fv(de.location,ee);break;default:t.vertexAttrib1fv(de.location,ee)}}}}C()}function re(){te();for(const k in a){const ne=a[k];for(const Q in ne){const ae=ne[Q];for(const H in ae)_(ae[H].object),delete ae[H];delete ne[Q]}delete a[k]}}function x(k){if(a[k.id]===void 0)return;const ne=a[k.id];for(const Q in ne){const ae=ne[Q];for(const H in ae)_(ae[H].object),delete ae[H];delete ne[Q]}delete a[k.id]}function P(k){for(const ne in a){const Q=a[ne];if(Q[k.id]===void 0)continue;const ae=Q[k.id];for(const H in ae)_(ae[H].object),delete ae[H];delete Q[k.id]}}function te(){ce(),f=!0,c!==l&&(c=l,g(c.object))}function ce(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:ce,dispose:re,releaseStatesOfGeometry:x,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function C1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h;_++)this.render(f[_],d[_]);else{g.multiDrawArraysWEBGL(s,f,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function R1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),L=v&&S,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:L,maxSamples:C}}function P1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ur,a=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||i!==0||r;return r=h,i=d.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,g){const _=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const m=s?0:i,v=m*4;let S=u.clippingState||null;l.value=S,S=f(_,h,v,g);for(let L=0;L!==v;++L)S[L]=n[L];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,g,_){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const u=g+y*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,S=g;v!==y;++v,S+=4)o.copy(d[v]).applyMatrix4(m,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function L1(t){let e=new WeakMap;function n(o,a){return a===Zf?o.mapping=no:a===Qf&&(o.mapping=io),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zf||a===Qf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new VE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class f_ extends l_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ks=4,Lm=[.125,.215,.35,.446,.526,.582],kr=20,Uu=new f_,Nm=new ut;let Fu=null,Ou=0,ku=0;const Fr=(1+Math.sqrt(5))/2,Ss=1/Fr,Im=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Fr,Ss),new V(0,Fr,-Ss),new V(Ss,0,Fr),new V(-Ss,0,Fr),new V(Fr,Ss,0),new V(-Fr,Ss,0)];class Dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Fu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fu,Ou,ku),e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fu=this._renderer.getRenderTarget(),Ou=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:da,format:fi,colorSpace:Hi,depthBuffer:!1},r=Um(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N1(s)),this._blurMaterial=I1(s,e,n)}return r}_compileMaterial(e){const n=new Qn(this._lodPlanes[0],e);this._renderer.compile(n,Uu)}_sceneToCubeUV(e,n,i,r){const a=new Yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Nm),f.toneMapping=yr,f.autoClear=!1;const g=new r_({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),_=new Qn(new xa,g);let y=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,y=!0):(g.color.copy(Nm),y=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;rl(r,m*v,u>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===no||e.mapping===io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Uu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Im[(r-1)%Im.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Qn(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*kr-1),y=s/_,p=isFinite(s)?1+Math.floor(f*y):kr;p>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kr}`);const u=[];let m=0;for(let b=0;b<kr;++b){const G=b/y,re=Math.exp(-G*G/2);u.push(re),b===0?m+=re:b<p&&(m+=2*re)}for(let b=0;b<u.length;b++)u[b]=u[b]/m;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const S=this._sizeLods[r],L=3*S*(r>v-ks?r-v+ks:0),C=4*(this._cubeSize-S);rl(n,L,C,3*S,2*S),l.setRenderTarget(n),l.render(d,Uu)}}function N1(t){const e=[],n=[],i=[];let r=t;const s=t-ks+1+Lm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ks?l=Lm[o-t+ks-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],g=6,_=6,y=3,p=2,u=1,m=new Float32Array(y*_*g),v=new Float32Array(p*_*g),S=new Float32Array(u*_*g);for(let C=0;C<g;C++){const b=C%3*2/3-1,G=C>2?0:-1,re=[b,G,0,b+2/3,G,0,b+2/3,G+1,0,b,G,0,b+2/3,G+1,0,b,G+1,0];m.set(re,y*_*C),v.set(h,p*_*C);const x=[C,C,C,C,C,C];S.set(x,u*_*C)}const L=new cn;L.setAttribute("position",new ln(m,y)),L.setAttribute("uv",new ln(v,p)),L.setAttribute("faceIndex",new ln(S,u)),e.push(L),r>ks&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Um(t,e,n){const i=new es(t,e,n);return i.texture.mapping=Rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function I1(t,e,n){const i=new Float32Array(kr),r=new V(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uh(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Fm(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Om(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function D1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zf||l===Qf,f=l===no||l===io;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Dm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new Dm(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function U1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function F1(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const y=g[_];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(d){const h=[],g=d.index,_=d.attributes.position;let y=0;if(g!==null){const m=g.array;y=g.version;for(let v=0,S=m.length;v<S;v+=3){const L=m[v+0],C=m[v+1],b=m[v+2];h.push(L,C,C,b,b,L)}}else if(_!==void 0){const m=_.array;y=_.version;for(let v=0,S=m.length/3-1;v<S;v+=3){const L=v+0,C=v+1,b=v+2;h.push(L,C,C,b,b,L)}}else return;const p=new(Z0(h)?o_:s_)(h,1);p.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function O1(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function f(g,_){t.drawElements(s,_,a,g*l),n.update(_,s,1)}function d(g,_,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,a,g*l,y),n.update(_,s,y)}function h(g,_,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(g[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,a,g,0,y);let u=0;for(let m=0;m<y;m++)u+=_[m];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function k1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function z1(t,e){return t[0]-e[0]}function B1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function H1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new nn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let p=s.get(f);if(p===void 0||p.count!==y){let ne=function(){ce.dispose(),s.delete(f),f.removeEventListener("dispose",ne)};var g=ne;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,L=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],G=f.morphAttributes.color||[];let re=0;v===!0&&(re=1),S===!0&&(re=2),L===!0&&(re=3);let x=f.attributes.position.count*re,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const te=new Float32Array(x*P*4*y),ce=new e_(te,x,P,y);ce.type=Ni,ce.needsUpdate=!0;const k=re*4;for(let Q=0;Q<y;Q++){const ae=C[Q],H=b[Q],X=G[Q],q=x*P*4*Q;for(let se=0;se<ae.count;se++){const de=se*k;v===!0&&(o.fromBufferAttribute(ae,se),te[q+de+0]=o.x,te[q+de+1]=o.y,te[q+de+2]=o.z,te[q+de+3]=0),S===!0&&(o.fromBufferAttribute(H,se),te[q+de+4]=o.x,te[q+de+5]=o.y,te[q+de+6]=o.z,te[q+de+7]=0),L===!0&&(o.fromBufferAttribute(X,se),te[q+de+8]=o.x,te[q+de+9]=o.y,te[q+de+10]=o.z,te[q+de+11]=X.itemSize===4?o.w:1)}}p={count:y,texture:ce,size:new ht(x,P)},s.set(f,p),f.addEventListener("dispose",ne)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const m=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",m),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let S=0;S<_;S++)y[S]=[S,0];i[f.id]=y}for(let S=0;S<_;S++){const L=y[S];L[0]=S,L[1]=h[S]}y.sort(B1);for(let S=0;S<8;S++)S<_&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(z1);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let m=0;for(let S=0;S<8;S++){const L=a[S],C=L[0],b=L[1];C!==Number.MAX_SAFE_INTEGER&&b?(p&&f.getAttribute("morphTarget"+S)!==p[C]&&f.setAttribute("morphTarget"+S,p[C]),u&&f.getAttribute("morphNormal"+S)!==u[C]&&f.setAttribute("morphNormal"+S,u[C]),r[S]=b,m+=b):(p&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),u&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const v=f.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function G1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class d_ extends Tn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Xr,f!==Xr&&f!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Xr&&(i=lr),i===void 0&&f===ro&&(i=jr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const h_=new Tn,p_=new d_(1,1);p_.compareFunction=K0;const m_=new e_,g_=new AE,v_=new c_,km=[],zm=[],Bm=new Float32Array(16),Hm=new Float32Array(9),Gm=new Float32Array(4);function po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=km[r];if(s===void 0&&(s=new Float32Array(r),km[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nc(t,e){let n=zm[e];n===void 0&&(n=new Int32Array(e),zm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function V1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function W1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2fv(this.addr,e),Jt(n,e)}}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Qt(n,e))return;t.uniform3fv(this.addr,e),Jt(n,e)}}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4fv(this.addr,e),Jt(n,e)}}function $1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,i))return;Gm.set(i),t.uniformMatrix2fv(this.addr,!1,Gm),Jt(n,i)}}function Y1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,i))return;Hm.set(i),t.uniformMatrix3fv(this.addr,!1,Hm),Jt(n,i)}}function q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,i))return;Bm.set(i),t.uniformMatrix4fv(this.addr,!1,Bm),Jt(n,i)}}function K1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2iv(this.addr,e),Jt(n,e)}}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;t.uniform3iv(this.addr,e),Jt(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4iv(this.addr,e),Jt(n,e)}}function eA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2uiv(this.addr,e),Jt(n,e)}}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;t.uniform3uiv(this.addr,e),Jt(n,e)}}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4uiv(this.addr,e),Jt(n,e)}}function rA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?p_:h_;n.setTexture2D(e||s,r)}function sA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||g_,r)}function oA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||v_,r)}function aA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||m_,r)}function lA(t){switch(t){case 5126:return V1;case 35664:return W1;case 35665:return j1;case 35666:return X1;case 35674:return $1;case 35675:return Y1;case 35676:return q1;case 5124:case 35670:return K1;case 35667:case 35671:return Z1;case 35668:case 35672:return Q1;case 35669:case 35673:return J1;case 5125:return eA;case 36294:return tA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return aA}}function cA(t,e){t.uniform1fv(this.addr,e)}function uA(t,e){const n=po(e,this.size,2);t.uniform2fv(this.addr,n)}function fA(t,e){const n=po(e,this.size,3);t.uniform3fv(this.addr,n)}function dA(t,e){const n=po(e,this.size,4);t.uniform4fv(this.addr,n)}function hA(t,e){const n=po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pA(t,e){const n=po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mA(t,e){const n=po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gA(t,e){t.uniform1iv(this.addr,e)}function vA(t,e){t.uniform2iv(this.addr,e)}function _A(t,e){t.uniform3iv(this.addr,e)}function yA(t,e){t.uniform4iv(this.addr,e)}function xA(t,e){t.uniform1uiv(this.addr,e)}function SA(t,e){t.uniform2uiv(this.addr,e)}function MA(t,e){t.uniform3uiv(this.addr,e)}function EA(t,e){t.uniform4uiv(this.addr,e)}function wA(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Qt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||h_,s[o])}function TA(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Qt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||g_,s[o])}function AA(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Qt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||v_,s[o])}function bA(t,e,n){const i=this.cache,r=e.length,s=Nc(n,r);Qt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||m_,s[o])}function CA(t){switch(t){case 5126:return cA;case 35664:return uA;case 35665:return fA;case 35666:return dA;case 35674:return hA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return vA;case 35668:case 35672:return _A;case 35669:case 35673:return yA;case 5125:return xA;case 36294:return SA;case 36295:return MA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return bA}}class RA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lA(n.type)}}class PA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CA(n.type)}}class LA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function Vm(t,e){t.seq.push(e),t.map[e.id]=e}function NA(t,e,n){const i=t.name,r=i.length;for(zu.lastIndex=0;;){const s=zu.exec(i),o=zu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Vm(n,c===void 0?new RA(a,t,e):new PA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new LA(a),Vm(n,d)),n=d}}}class Cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);NA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const IA=37297;let DA=0;function UA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function FA(t){const e=Rt.getPrimaries(Rt.workingColorSpace),n=Rt.getPrimaries(t);let i;switch(e===n?i="":e===rc&&n===ic?i="LinearDisplayP3ToLinearSRGB":e===ic&&n===rc&&(i="LinearSRGBToLinearDisplayP3"),t){case Hi:case Pc:return[i,"LinearTransferOETF"];case an:case lh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function jm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+UA(t.getShaderSource(e),o)}else return r}function OA(t,e){const n=FA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function kA(t,e){let n;switch(e){case KM:n="Linear";break;case ZM:n="Reinhard";break;case QM:n="OptimizedCineon";break;case JM:n="ACESFilmic";break;case tE:n="AgX";break;case eE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function zA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function BA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function HA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function GA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function zs(t){return t!==""}function Xm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $m(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VA=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(t){return t.replace(VA,jA)}const WA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jA(t,e){let n=dt[e];if(n===void 0){const i=WA.get(e);if(i!==void 0)n=dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sd(n)}const XA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(t){return t.replace(XA,$A)}function $A(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function YA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===k0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===wM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function qA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function ZA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case z0:e="ENVMAP_BLENDING_MULTIPLY";break;case YM:e="ENVMAP_BLENDING_MIX";break;case qM:e="ENVMAP_BLENDING_ADD";break}return e}function QA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function JA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=YA(n),c=qA(n),f=KA(n),d=ZA(n),h=QA(n),g=n.isWebGL2?"":zA(n),_=BA(n),y=HA(s),p=r.createProgram();let u,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(zs).join(`
`),u.length>0&&(u+=`
`),m=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(zs).join(`
`),m.length>0&&(m+=`
`)):(u=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),m=[g,qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?dt.tonemapping_pars_fragment:"",n.toneMapping!==yr?kA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,OA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zs).join(`
`)),o=sd(o),o=Xm(o,n),o=$m(o,n),a=sd(a),a=Xm(a,n),a=$m(a,n),o=Ym(o),a=Ym(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=v+u+o,L=v+m+a,C=Wm(r,r.VERTEX_SHADER,S),b=Wm(r,r.FRAGMENT_SHADER,L);r.attachShader(p,C),r.attachShader(p,b),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function G(te){if(t.debug.checkShaderErrors){const ce=r.getProgramInfoLog(p).trim(),k=r.getShaderInfoLog(C).trim(),ne=r.getShaderInfoLog(b).trim();let Q=!0,ae=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,C,b);else{const H=jm(r,C,"vertex"),X=jm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+te.name+`
Material Type: `+te.type+`

Program Info Log: `+ce+`
`+H+`
`+X)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(k===""||ne==="")&&(ae=!1);ae&&(te.diagnostics={runnable:Q,programLog:ce,vertexShader:{log:k,prefix:u},fragmentShader:{log:ne,prefix:m}})}r.deleteShader(C),r.deleteShader(b),re=new Cl(r,p),x=GA(r,p)}let re;this.getUniforms=function(){return re===void 0&&G(this),re};let x;this.getAttributes=function(){return x===void 0&&G(this),x};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(p,IA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=b,this}let eb=0;class tb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nb(e),n.set(e,i)),i}}class nb{constructor(e){this.id=eb++,this.code=e,this.usedTimes=0}}function ib(t,e,n,i,r,s,o){const a=new n_,l=new tb,c=new Set,f=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,P,te,ce,k){const ne=ce.fog,Q=k.geometry,ae=x.isMeshStandardMaterial?ce.environment:null,H=(x.isMeshStandardMaterial?n:e).get(x.envMap||ae),X=H&&H.mapping===Rc?H.image.height:null,q=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const se=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,de=se!==void 0?se.length:0;let Ke=0;Q.morphAttributes.position!==void 0&&(Ke=1),Q.morphAttributes.normal!==void 0&&(Ke=2),Q.morphAttributes.color!==void 0&&(Ke=3);let ee,le,be,Fe;if(q){const we=_i[q];ee=we.vertexShader,le=we.fragmentShader}else ee=x.vertexShader,le=x.fragmentShader,l.update(x),be=l.getVertexShaderID(x),Fe=l.getFragmentShaderID(x);const Xe=t.getRenderTarget(),Ue=k.isInstancedMesh===!0,ft=k.isBatchedMesh===!0,$e=!!x.map,W=!!x.matcap,gt=!!H,Pe=!!x.aoMap,ke=!!x.lightMap,Ge=!!x.bumpMap,Tt=!!x.normalMap,lt=!!x.displacementMap,A=!!x.emissiveMap,w=!!x.metalnessMap,Y=!!x.roughnessMap,he=x.anisotropy>0,ue=x.clearcoat>0,J=x.iridescence>0,Oe=x.sheen>0,Ce=x.transmission>0,Le=he&&!!x.anisotropyMap,et=ue&&!!x.clearcoatMap,rt=ue&&!!x.clearcoatNormalMap,fe=ue&&!!x.clearcoatRoughnessMap,Et=J&&!!x.iridescenceMap,it=J&&!!x.iridescenceThicknessMap,Qe=Oe&&!!x.sheenColorMap,Ve=Oe&&!!x.sheenRoughnessMap,Ne=!!x.specularMap,tt=!!x.specularColorMap,St=!!x.specularIntensityMap,vt=Ce&&!!x.transmissionMap,ct=Ce&&!!x.thicknessMap,Ye=!!x.gradientMap,N=!!x.alphaMap,pe=x.alphaTest>0,_e=!!x.alphaHash,Ie=!!x.extensions;let We=yr;x.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(We=t.toneMapping);const xt={isWebGL2:d,shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:le,defines:x.defines,customVertexShaderID:be,customFragmentShaderID:Fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:ft,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Xe===null?t.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:Hi,alphaToCoverage:!!x.alphaToCoverage,map:$e,matcap:W,envMap:gt,envMapMode:gt&&H.mapping,envMapCubeUVHeight:X,aoMap:Pe,lightMap:ke,bumpMap:Ge,normalMap:Tt,displacementMap:g&&lt,emissiveMap:A,normalMapObjectSpace:Tt&&x.normalMapType===dE,normalMapTangentSpace:Tt&&x.normalMapType===q0,metalnessMap:w,roughnessMap:Y,anisotropy:he,anisotropyMap:Le,clearcoat:ue,clearcoatMap:et,clearcoatNormalMap:rt,clearcoatRoughnessMap:fe,iridescence:J,iridescenceMap:Et,iridescenceThicknessMap:it,sheen:Oe,sheenColorMap:Qe,sheenRoughnessMap:Ve,specularMap:Ne,specularColorMap:tt,specularIntensityMap:St,transmission:Ce,transmissionMap:vt,thicknessMap:ct,gradientMap:Ye,opaque:x.transparent===!1&&x.blending===Xs&&x.alphaToCoverage===!1,alphaMap:N,alphaTest:pe,alphaHash:_e,combine:x.combine,mapUv:$e&&p(x.map.channel),aoMapUv:Pe&&p(x.aoMap.channel),lightMapUv:ke&&p(x.lightMap.channel),bumpMapUv:Ge&&p(x.bumpMap.channel),normalMapUv:Tt&&p(x.normalMap.channel),displacementMapUv:lt&&p(x.displacementMap.channel),emissiveMapUv:A&&p(x.emissiveMap.channel),metalnessMapUv:w&&p(x.metalnessMap.channel),roughnessMapUv:Y&&p(x.roughnessMap.channel),anisotropyMapUv:Le&&p(x.anisotropyMap.channel),clearcoatMapUv:et&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:it&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&p(x.sheenRoughnessMap.channel),specularMapUv:Ne&&p(x.specularMap.channel),specularColorMapUv:tt&&p(x.specularColorMap.channel),specularIntensityMapUv:St&&p(x.specularIntensityMap.channel),transmissionMapUv:vt&&p(x.transmissionMap.channel),thicknessMapUv:ct&&p(x.thicknessMap.channel),alphaMapUv:N&&p(x.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Tt||he),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Q.attributes.uv&&($e||N),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ke,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&te.length>0,shadowMapType:t.shadowMap.type,toneMapping:We,useLegacyLights:t._useLegacyLights,decodeVideoTexture:$e&&x.map.isVideoTexture===!0&&Rt.getTransfer(x.map.colorSpace)===Nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ci,flipSided:x.side===Un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Ie&&x.extensions.derivatives===!0,extensionFragDepth:Ie&&x.extensions.fragDepth===!0,extensionDrawBuffers:Ie&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ie&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ie&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ie&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function m(x){const P=[];if(x.shaderID?P.push(x.shaderID):(P.push(x.customVertexShaderID),P.push(x.customFragmentShaderID)),x.defines!==void 0)for(const te in x.defines)P.push(te),P.push(x.defines[te]);return x.isRawShaderMaterial===!1&&(v(P,x),S(P,x),P.push(t.outputColorSpace)),P.push(x.customProgramCacheKey),P.join()}function v(x,P){x.push(P.precision),x.push(P.outputColorSpace),x.push(P.envMapMode),x.push(P.envMapCubeUVHeight),x.push(P.mapUv),x.push(P.alphaMapUv),x.push(P.lightMapUv),x.push(P.aoMapUv),x.push(P.bumpMapUv),x.push(P.normalMapUv),x.push(P.displacementMapUv),x.push(P.emissiveMapUv),x.push(P.metalnessMapUv),x.push(P.roughnessMapUv),x.push(P.anisotropyMapUv),x.push(P.clearcoatMapUv),x.push(P.clearcoatNormalMapUv),x.push(P.clearcoatRoughnessMapUv),x.push(P.iridescenceMapUv),x.push(P.iridescenceThicknessMapUv),x.push(P.sheenColorMapUv),x.push(P.sheenRoughnessMapUv),x.push(P.specularMapUv),x.push(P.specularColorMapUv),x.push(P.specularIntensityMapUv),x.push(P.transmissionMapUv),x.push(P.thicknessMapUv),x.push(P.combine),x.push(P.fogExp2),x.push(P.sizeAttenuation),x.push(P.morphTargetsCount),x.push(P.morphAttributeCount),x.push(P.numDirLights),x.push(P.numPointLights),x.push(P.numSpotLights),x.push(P.numSpotLightMaps),x.push(P.numHemiLights),x.push(P.numRectAreaLights),x.push(P.numDirLightShadows),x.push(P.numPointLightShadows),x.push(P.numSpotLightShadows),x.push(P.numSpotLightShadowsWithMaps),x.push(P.numLightProbes),x.push(P.shadowMapType),x.push(P.toneMapping),x.push(P.numClippingPlanes),x.push(P.numClipIntersection),x.push(P.depthPacking)}function S(x,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),P.alphaHash&&a.enable(18),P.batching&&a.enable(19),x.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.alphaToCoverage&&a.enable(20),x.push(a.mask)}function L(x){const P=y[x.type];let te;if(P){const ce=_i[P];te=zE.clone(ce.uniforms)}else te=x.uniforms;return te}function C(x,P){let te;for(let ce=0,k=f.length;ce<k;ce++){const ne=f[ce];if(ne.cacheKey===P){te=ne,++te.usedTimes;break}}return te===void 0&&(te=new JA(t,P,x,s),f.push(te)),te}function b(x){if(--x.usedTimes===0){const P=f.indexOf(x);f[P]=f[f.length-1],f.pop(),x.destroy()}}function G(x){l.remove(x)}function re(){l.dispose()}return{getParameters:u,getProgramCacheKey:m,getUniforms:L,acquireProgram:C,releaseProgram:b,releaseShaderCache:G,programs:f,dispose:re}}function rb(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function sb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Km(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Zm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,g,_,y,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:g,groupOrder:_,renderOrder:d.renderOrder,z:y,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=g,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=y,u.group=p),e++,u}function a(d,h,g,_,y,p){const u=o(d,h,g,_,y,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(d,h,g,_,y,p){const u=o(d,h,g,_,y,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||sb),i.length>1&&i.sort(h||Km),r.length>1&&r.sort(h||Km)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function ob(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Zm,t.set(i,[o])):r>=s.length?(o=new Zm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ab(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new ut};break;case"SpotLight":n={position:new V,direction:new V,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":n={color:new ut,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function lb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cb=0;function ub(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fb(t,e){const n=new ab,i=lb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new V);const s=new V,o=new Wt,a=new Wt;function l(f,d){let h=0,g=0,_=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let y=0,p=0,u=0,m=0,v=0,S=0,L=0,C=0,b=0,G=0,re=0;f.sort(ub);const x=d===!0?Math.PI:1;for(let te=0,ce=f.length;te<ce;te++){const k=f[te],ne=k.color,Q=k.intensity,ae=k.distance,H=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=ne.r*Q*x,g+=ne.g*Q*x,_+=ne.b*Q*x;else if(k.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(k.sh.coefficients[X],Q);re++}else if(k.isDirectionalLight){const X=n.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity*x),k.castShadow){const q=k.shadow,se=i.get(k);se.shadowBias=q.bias,se.shadowNormalBias=q.normalBias,se.shadowRadius=q.radius,se.shadowMapSize=q.mapSize,r.directionalShadow[y]=se,r.directionalShadowMap[y]=H,r.directionalShadowMatrix[y]=k.shadow.matrix,S++}r.directional[y]=X,y++}else if(k.isSpotLight){const X=n.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy(ne).multiplyScalar(Q*x),X.distance=ae,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,r.spot[u]=X;const q=k.shadow;if(k.map&&(r.spotLightMap[b]=k.map,b++,q.updateMatrices(k),k.castShadow&&G++),r.spotLightMatrix[u]=q.matrix,k.castShadow){const se=i.get(k);se.shadowBias=q.bias,se.shadowNormalBias=q.normalBias,se.shadowRadius=q.radius,se.shadowMapSize=q.mapSize,r.spotShadow[u]=se,r.spotShadowMap[u]=H,C++}u++}else if(k.isRectAreaLight){const X=n.get(k);X.color.copy(ne).multiplyScalar(Q),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),r.rectArea[m]=X,m++}else if(k.isPointLight){const X=n.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity*x),X.distance=k.distance,X.decay=k.decay,k.castShadow){const q=k.shadow,se=i.get(k);se.shadowBias=q.bias,se.shadowNormalBias=q.normalBias,se.shadowRadius=q.radius,se.shadowMapSize=q.mapSize,se.shadowCameraNear=q.camera.near,se.shadowCameraFar=q.camera.far,r.pointShadow[p]=se,r.pointShadowMap[p]=H,r.pointShadowMatrix[p]=k.shadow.matrix,L++}r.point[p]=X,p++}else if(k.isHemisphereLight){const X=n.get(k);X.skyColor.copy(k.color).multiplyScalar(Q*x),X.groundColor.copy(k.groundColor).multiplyScalar(Q*x),r.hemi[v]=X,v++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=_;const P=r.hash;(P.directionalLength!==y||P.pointLength!==p||P.spotLength!==u||P.rectAreaLength!==m||P.hemiLength!==v||P.numDirectionalShadows!==S||P.numPointShadows!==L||P.numSpotShadows!==C||P.numSpotMaps!==b||P.numLightProbes!==re)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=m,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+b-G,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=re,P.directionalLength=y,P.pointLength=p,P.spotLength=u,P.rectAreaLength=m,P.hemiLength=v,P.numDirectionalShadows=S,P.numPointShadows=L,P.numSpotShadows=C,P.numSpotMaps=b,P.numLightProbes=re,r.version=cb++)}function c(f,d){let h=0,g=0,_=0,y=0,p=0;const u=d.matrixWorldInverse;for(let m=0,v=f.length;m<v;m++){const S=f[m];if(S.isDirectionalLight){const L=r.directional[h];L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),h++}else if(S.isSpotLight){const L=r.spot[_];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const L=r.rectArea[y];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const L=r.point[g];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(u),g++}else if(S.isHemisphereLight){const L=r.hemi[p];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Qm(t,e){const n=new fb(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function db(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Qm(t,e),n.set(s,[l])):o>=a.length?(l=new Qm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class hb extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pb extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gb=`uniform sampler2D shadow_pass;
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
}`;function vb(t,e,n){let i=new ch;const r=new ht,s=new ht,o=new nn,a=new hb({depthPacking:fE}),l=new pb,c={},f=n.maxTextureSize,d={[wr]:Un,[Un]:wr,[ci]:ci},h=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:mb,fragmentShader:gb}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new cn;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Qn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k0;let u=this.type;this.render=function(C,b,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const re=t.getRenderTarget(),x=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),te=t.state;te.setBlending(_r),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ce=u!==Ri&&this.type===Ri,k=u===Ri&&this.type!==Ri;for(let ne=0,Q=C.length;ne<Q;ne++){const ae=C[ne],H=ae.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const X=H.getFrameExtents();if(r.multiply(X),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/X.x),r.x=s.x*X.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/X.y),r.y=s.y*X.y,H.mapSize.y=s.y)),H.map===null||ce===!0||k===!0){const se=this.type!==Ri?{minFilter:En,magFilter:En}:{};H.map!==null&&H.map.dispose(),H.map=new es(r.x,r.y,se),H.map.texture.name=ae.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const q=H.getViewportCount();for(let se=0;se<q;se++){const de=H.getViewport(se);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),te.viewport(o),H.updateMatrices(ae,se),i=H.getFrustum(),S(b,G,H.camera,ae,this.type)}H.isPointLightShadow!==!0&&this.type===Ri&&m(H,G),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(re,x,P)};function m(C,b){const G=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new es(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,G,h,y,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,G,g,y,null)}function v(C,b,G,re){let x=null;const P=G.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)x=P;else if(x=G.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const te=x.uuid,ce=b.uuid;let k=c[te];k===void 0&&(k={},c[te]=k);let ne=k[ce];ne===void 0&&(ne=x.clone(),k[ce]=ne,b.addEventListener("dispose",L)),x=ne}if(x.visible=b.visible,x.wireframe=b.wireframe,re===Ri?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,G.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const te=t.properties.get(x);te.light=G}return x}function S(C,b,G,re,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Ri)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld);const ce=e.update(C),k=C.material;if(Array.isArray(k)){const ne=ce.groups;for(let Q=0,ae=ne.length;Q<ae;Q++){const H=ne[Q],X=k[H.materialIndex];if(X&&X.visible){const q=v(C,X,re,x);C.onBeforeShadow(t,C,b,G,ce,q,H),t.renderBufferDirect(G,null,ce,q,C,H),C.onAfterShadow(t,C,b,G,ce,q,H)}}}else if(k.visible){const ne=v(C,k,re,x);C.onBeforeShadow(t,C,b,G,ce,ne,null),t.renderBufferDirect(G,null,ce,ne,C,null),C.onAfterShadow(t,C,b,G,ce,ne,null)}}const te=C.children;for(let ce=0,k=te.length;ce<k;ce++)S(te[ce],b,G,re,x)}function L(C){C.target.removeEventListener("dispose",L);for(const G in c){const re=c[G],x=C.target.uuid;x in re&&(re[x].dispose(),delete re[x])}}}function _b(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const pe=new nn;let _e=null;const Ie=new nn(0,0,0,0);return{setMask:function(We){_e!==We&&!N&&(t.colorMask(We,We,We,We),_e=We)},setLocked:function(We){N=We},setClear:function(We,xt,we,Ut,ie){ie===!0&&(We*=Ut,xt*=Ut,we*=Ut),pe.set(We,xt,we,Ut),Ie.equals(pe)===!1&&(t.clearColor(We,xt,we,Ut),Ie.copy(pe))},reset:function(){N=!1,_e=null,Ie.set(-1,0,0,0)}}}function s(){let N=!1,pe=null,_e=null,Ie=null;return{setTest:function(We){We?Ue(t.DEPTH_TEST):ft(t.DEPTH_TEST)},setMask:function(We){pe!==We&&!N&&(t.depthMask(We),pe=We)},setFunc:function(We){if(_e!==We){switch(We){case HM:t.depthFunc(t.NEVER);break;case GM:t.depthFunc(t.ALWAYS);break;case VM:t.depthFunc(t.LESS);break;case tc:t.depthFunc(t.LEQUAL);break;case WM:t.depthFunc(t.EQUAL);break;case jM:t.depthFunc(t.GEQUAL);break;case XM:t.depthFunc(t.GREATER);break;case $M:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=We}},setLocked:function(We){N=We},setClear:function(We){Ie!==We&&(t.clearDepth(We),Ie=We)},reset:function(){N=!1,pe=null,_e=null,Ie=null}}}function o(){let N=!1,pe=null,_e=null,Ie=null,We=null,xt=null,we=null,Ut=null,ie=null;return{setTest:function(ge){N||(ge?Ue(t.STENCIL_TEST):ft(t.STENCIL_TEST))},setMask:function(ge){pe!==ge&&!N&&(t.stencilMask(ge),pe=ge)},setFunc:function(ge,Me,me){(_e!==ge||Ie!==Me||We!==me)&&(t.stencilFunc(ge,Me,me),_e=ge,Ie=Me,We=me)},setOp:function(ge,Me,me){(xt!==ge||we!==Me||Ut!==me)&&(t.stencilOp(ge,Me,me),xt=ge,we=Me,Ut=me)},setLocked:function(ge){N=ge},setClear:function(ge){ie!==ge&&(t.clearStencil(ge),ie=ge)},reset:function(){N=!1,pe=null,_e=null,Ie=null,We=null,xt=null,we=null,Ut=null,ie=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let h={},g={},_=new WeakMap,y=[],p=null,u=!1,m=null,v=null,S=null,L=null,C=null,b=null,G=null,re=new ut(0,0,0),x=0,P=!1,te=null,ce=null,k=null,ne=null,Q=null;const ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,X=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=X>=2);let se=null,de={};const Ke=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),le=new nn().fromArray(Ke),be=new nn().fromArray(ee);function Fe(N,pe,_e,Ie){const We=new Uint8Array(4),xt=t.createTexture();t.bindTexture(N,xt),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<_e;we++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(pe,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,We):t.texImage2D(pe+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,We);return xt}const Xe={};Xe[t.TEXTURE_2D]=Fe(t.TEXTURE_2D,t.TEXTURE_2D,1),Xe[t.TEXTURE_CUBE_MAP]=Fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Xe[t.TEXTURE_2D_ARRAY]=Fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Xe[t.TEXTURE_3D]=Fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(t.DEPTH_TEST),l.setFunc(tc),lt(!1),A(Np),Ue(t.CULL_FACE),Ge(_r);function Ue(N){h[N]!==!0&&(t.enable(N),h[N]=!0)}function ft(N){h[N]!==!1&&(t.disable(N),h[N]=!1)}function $e(N,pe){return g[N]!==pe?(t.bindFramebuffer(N,pe),g[N]=pe,i&&(N===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=pe),N===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=pe)),!0):!1}function W(N,pe){let _e=y,Ie=!1;if(N)if(_e=_.get(pe),_e===void 0&&(_e=[],_.set(pe,_e)),N.isWebGLMultipleRenderTargets){const We=N.texture;if(_e.length!==We.length||_e[0]!==t.COLOR_ATTACHMENT0){for(let xt=0,we=We.length;xt<we;xt++)_e[xt]=t.COLOR_ATTACHMENT0+xt;_e.length=We.length,Ie=!0}}else _e[0]!==t.COLOR_ATTACHMENT0&&(_e[0]=t.COLOR_ATTACHMENT0,Ie=!0);else _e[0]!==t.BACK&&(_e[0]=t.BACK,Ie=!0);Ie&&(n.isWebGL2?t.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function gt(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const Pe={[Or]:t.FUNC_ADD,[AM]:t.FUNC_SUBTRACT,[bM]:t.FUNC_REVERSE_SUBTRACT};if(i)Pe[Fp]=t.MIN,Pe[Op]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Pe[Fp]=N.MIN_EXT,Pe[Op]=N.MAX_EXT)}const ke={[CM]:t.ZERO,[RM]:t.ONE,[PM]:t.SRC_COLOR,[qf]:t.SRC_ALPHA,[FM]:t.SRC_ALPHA_SATURATE,[DM]:t.DST_COLOR,[NM]:t.DST_ALPHA,[LM]:t.ONE_MINUS_SRC_COLOR,[Kf]:t.ONE_MINUS_SRC_ALPHA,[UM]:t.ONE_MINUS_DST_COLOR,[IM]:t.ONE_MINUS_DST_ALPHA,[OM]:t.CONSTANT_COLOR,[kM]:t.ONE_MINUS_CONSTANT_COLOR,[zM]:t.CONSTANT_ALPHA,[BM]:t.ONE_MINUS_CONSTANT_ALPHA};function Ge(N,pe,_e,Ie,We,xt,we,Ut,ie,ge){if(N===_r){u===!0&&(ft(t.BLEND),u=!1);return}if(u===!1&&(Ue(t.BLEND),u=!0),N!==TM){if(N!==m||ge!==P){if((v!==Or||C!==Or)&&(t.blendEquation(t.FUNC_ADD),v=Or,C=Or),ge)switch(N){case Xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ip:t.blendFunc(t.ONE,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ip:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Up:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,L=null,b=null,G=null,re.set(0,0,0),x=0,m=N,P=ge}return}We=We||pe,xt=xt||_e,we=we||Ie,(pe!==v||We!==C)&&(t.blendEquationSeparate(Pe[pe],Pe[We]),v=pe,C=We),(_e!==S||Ie!==L||xt!==b||we!==G)&&(t.blendFuncSeparate(ke[_e],ke[Ie],ke[xt],ke[we]),S=_e,L=Ie,b=xt,G=we),(Ut.equals(re)===!1||ie!==x)&&(t.blendColor(Ut.r,Ut.g,Ut.b,ie),re.copy(Ut),x=ie),m=N,P=!1}function Tt(N,pe){N.side===ci?ft(t.CULL_FACE):Ue(t.CULL_FACE);let _e=N.side===Un;pe&&(_e=!_e),lt(_e),N.blending===Xs&&N.transparent===!1?Ge(_r):Ge(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Ie=N.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Y(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ue(t.SAMPLE_ALPHA_TO_COVERAGE):ft(t.SAMPLE_ALPHA_TO_COVERAGE)}function lt(N){te!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),te=N)}function A(N){N!==MM?(Ue(t.CULL_FACE),N!==ce&&(N===Np?t.cullFace(t.BACK):N===EM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ft(t.CULL_FACE),ce=N}function w(N){N!==k&&(H&&t.lineWidth(N),k=N)}function Y(N,pe,_e){N?(Ue(t.POLYGON_OFFSET_FILL),(ne!==pe||Q!==_e)&&(t.polygonOffset(pe,_e),ne=pe,Q=_e)):ft(t.POLYGON_OFFSET_FILL)}function he(N){N?Ue(t.SCISSOR_TEST):ft(t.SCISSOR_TEST)}function ue(N){N===void 0&&(N=t.TEXTURE0+ae-1),se!==N&&(t.activeTexture(N),se=N)}function J(N,pe,_e){_e===void 0&&(se===null?_e=t.TEXTURE0+ae-1:_e=se);let Ie=de[_e];Ie===void 0&&(Ie={type:void 0,texture:void 0},de[_e]=Ie),(Ie.type!==N||Ie.texture!==pe)&&(se!==_e&&(t.activeTexture(_e),se=_e),t.bindTexture(N,pe||Xe[N]),Ie.type=N,Ie.texture=pe)}function Oe(){const N=de[se];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qe(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(N){le.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),le.copy(N))}function St(N){be.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),be.copy(N))}function vt(N,pe){let _e=d.get(pe);_e===void 0&&(_e=new WeakMap,d.set(pe,_e));let Ie=_e.get(N);Ie===void 0&&(Ie=t.getUniformBlockIndex(pe,N.name),_e.set(N,Ie))}function ct(N,pe){const Ie=d.get(pe).get(N);f.get(pe)!==Ie&&(t.uniformBlockBinding(pe,Ie,N.__bindingPointIndex),f.set(pe,Ie))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},se=null,de={},g={},_=new WeakMap,y=[],p=null,u=!1,m=null,v=null,S=null,L=null,C=null,b=null,G=null,re=new ut(0,0,0),x=0,P=!1,te=null,ce=null,k=null,ne=null,Q=null,le.set(0,0,t.canvas.width,t.canvas.height),be.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ue,disable:ft,bindFramebuffer:$e,drawBuffers:W,useProgram:gt,setBlending:Ge,setMaterial:Tt,setFlipSided:lt,setCullFace:A,setLineWidth:w,setPolygonOffset:Y,setScissorTest:he,activeTexture:ue,bindTexture:J,unbindTexture:Oe,compressedTexImage2D:Ce,compressedTexImage3D:Le,texImage2D:Ve,texImage3D:Ne,updateUBOMapping:vt,uniformBlockBinding:ct,texStorage2D:it,texStorage3D:Qe,texSubImage2D:et,texSubImage3D:rt,compressedTexSubImage2D:fe,compressedTexSubImage3D:Et,scissor:tt,viewport:St,reset:Ye}}function yb(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,w){return g?new OffscreenCanvas(A,w):oc("canvas")}function y(A,w,Y,he){let ue=1;if((A.width>he||A.height>he)&&(ue=he/Math.max(A.width,A.height)),ue<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const J=w?rd:Math.floor,Oe=J(ue*A.width),Ce=J(ue*A.height);d===void 0&&(d=_(Oe,Ce));const Le=Y?_(Oe,Ce):d;return Le.width=Oe,Le.height=Ce,Le.getContext("2d").drawImage(A,0,0,Oe,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Oe+"x"+Ce+")."),Le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return dm(A.width)&&dm(A.height)}function u(A){return a?!1:A.wrapS!==ui||A.wrapT!==ui||A.minFilter!==En&&A.minFilter!==Cn}function m(A,w){return A.generateMipmaps&&w&&A.minFilter!==En&&A.minFilter!==Cn}function v(A){t.generateMipmap(A)}function S(A,w,Y,he,ue=!1){if(a===!1)return w;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=w;if(w===t.RED&&(Y===t.FLOAT&&(J=t.R32F),Y===t.HALF_FLOAT&&(J=t.R16F),Y===t.UNSIGNED_BYTE&&(J=t.R8)),w===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(J=t.R8UI),Y===t.UNSIGNED_SHORT&&(J=t.R16UI),Y===t.UNSIGNED_INT&&(J=t.R32UI),Y===t.BYTE&&(J=t.R8I),Y===t.SHORT&&(J=t.R16I),Y===t.INT&&(J=t.R32I)),w===t.RG&&(Y===t.FLOAT&&(J=t.RG32F),Y===t.HALF_FLOAT&&(J=t.RG16F),Y===t.UNSIGNED_BYTE&&(J=t.RG8)),w===t.RGBA){const Oe=ue?nc:Rt.getTransfer(he);Y===t.FLOAT&&(J=t.RGBA32F),Y===t.HALF_FLOAT&&(J=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(J=Oe===Nt?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function L(A,w,Y){return m(A,Y)===!0||A.isFramebufferTexture&&A.minFilter!==En&&A.minFilter!==Cn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function C(A){return A===En||A===kp||A===wo?t.NEAREST:t.LINEAR}function b(A){const w=A.target;w.removeEventListener("dispose",b),re(w),w.isVideoTexture&&f.delete(w)}function G(A){const w=A.target;w.removeEventListener("dispose",G),P(w)}function re(A){const w=i.get(A);if(w.__webglInit===void 0)return;const Y=A.source,he=h.get(Y);if(he){const ue=he[w.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&x(A),Object.keys(he).length===0&&h.delete(Y)}i.remove(A)}function x(A){const w=i.get(A);t.deleteTexture(w.__webglTexture);const Y=A.source,he=h.get(Y);delete he[w.__cacheKey],o.memory.textures--}function P(A){const w=A.texture,Y=i.get(A),he=i.get(w);if(he.__webglTexture!==void 0&&(t.deleteTexture(he.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(Y.__webglFramebuffer[ue]))for(let J=0;J<Y.__webglFramebuffer[ue].length;J++)t.deleteFramebuffer(Y.__webglFramebuffer[ue][J]);else t.deleteFramebuffer(Y.__webglFramebuffer[ue]);Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer[ue])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ue=0;ue<Y.__webglFramebuffer.length;ue++)t.deleteFramebuffer(Y.__webglFramebuffer[ue]);else t.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ue=0;ue<Y.__webglColorRenderbuffer.length;ue++)Y.__webglColorRenderbuffer[ue]&&t.deleteRenderbuffer(Y.__webglColorRenderbuffer[ue]);Y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ue=0,J=w.length;ue<J;ue++){const Oe=i.get(w[ue]);Oe.__webglTexture&&(t.deleteTexture(Oe.__webglTexture),o.memory.textures--),i.remove(w[ue])}i.remove(w),i.remove(A)}let te=0;function ce(){te=0}function k(){const A=te;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),te+=1,A}function ne(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function Q(A,w){const Y=i.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){const he=A.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(Y,A,w);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+w)}function ae(A,w){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){le(Y,A,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+w)}function H(A,w){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){le(Y,A,w);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+w)}function X(A,w){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){be(Y,A,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+w)}const q={[Jf]:t.REPEAT,[ui]:t.CLAMP_TO_EDGE,[ed]:t.MIRRORED_REPEAT},se={[En]:t.NEAREST,[kp]:t.NEAREST_MIPMAP_NEAREST,[wo]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[fu]:t.LINEAR_MIPMAP_NEAREST,[Gr]:t.LINEAR_MIPMAP_LINEAR},de={[hE]:t.NEVER,[yE]:t.ALWAYS,[pE]:t.LESS,[K0]:t.LEQUAL,[mE]:t.EQUAL,[_E]:t.GEQUAL,[gE]:t.GREATER,[vE]:t.NOTEQUAL};function Ke(A,w,Y){if(w.type===Ni&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Cn||w.magFilter===fu||w.magFilter===wo||w.magFilter===Gr||w.minFilter===Cn||w.minFilter===fu||w.minFilter===wo||w.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(t.texParameteri(A,t.TEXTURE_WRAP_S,q[w.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,q[w.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,q[w.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,se[w.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,se[w.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==ui||w.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(w.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(w.minFilter)),w.minFilter!==En&&w.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,de[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const he=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===En||w.minFilter!==wo&&w.minFilter!==Gr||w.type===Ni&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===da&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(A,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ee(A,w){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",b));const he=w.source;let ue=h.get(he);ue===void 0&&(ue={},h.set(he,ue));const J=ne(w);if(J!==A.__cacheKey){ue[J]===void 0&&(ue[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ue[J].usedTimes++;const Oe=ue[A.__cacheKey];Oe!==void 0&&(ue[A.__cacheKey].usedTimes--,Oe.usedTimes===0&&x(w)),A.__cacheKey=J,A.__webglTexture=ue[J].texture}return Y}function le(A,w,Y){let he=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=t.TEXTURE_3D);const ue=ee(A,w),J=w.source;n.bindTexture(he,A.__webglTexture,t.TEXTURE0+Y);const Oe=i.get(J);if(J.version!==Oe.__version||ue===!0){n.activeTexture(t.TEXTURE0+Y);const Ce=Rt.getPrimaries(Rt.workingColorSpace),Le=w.colorSpace===qn?null:Rt.getPrimaries(w.colorSpace),et=w.colorSpace===qn||Ce===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const rt=u(w)&&p(w.image)===!1;let fe=y(w.image,rt,!1,r.maxTextureSize);fe=lt(w,fe);const Et=p(fe)||a,it=s.convert(w.format,w.colorSpace);let Qe=s.convert(w.type),Ve=S(w.internalFormat,it,Qe,w.colorSpace,w.isVideoTexture);Ke(he,w,Et);let Ne;const tt=w.mipmaps,St=a&&w.isVideoTexture!==!0&&Ve!==$0,vt=Oe.__version===void 0||ue===!0,ct=J.dataReady,Ye=L(w,fe,Et);if(w.isDepthTexture)Ve=t.DEPTH_COMPONENT,a?w.type===Ni?Ve=t.DEPTH_COMPONENT32F:w.type===lr?Ve=t.DEPTH_COMPONENT24:w.type===jr?Ve=t.DEPTH24_STENCIL8:Ve=t.DEPTH_COMPONENT16:w.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Xr&&Ve===t.DEPTH_COMPONENT&&w.type!==ah&&w.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=lr,Qe=s.convert(w.type)),w.format===ro&&Ve===t.DEPTH_COMPONENT&&(Ve=t.DEPTH_STENCIL,w.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=jr,Qe=s.convert(w.type))),vt&&(St?n.texStorage2D(t.TEXTURE_2D,1,Ve,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Ve,fe.width,fe.height,0,it,Qe,null));else if(w.isDataTexture)if(tt.length>0&&Et){St&&vt&&n.texStorage2D(t.TEXTURE_2D,Ye,Ve,tt[0].width,tt[0].height);for(let N=0,pe=tt.length;N<pe;N++)Ne=tt[N],St?ct&&n.texSubImage2D(t.TEXTURE_2D,N,0,0,Ne.width,Ne.height,it,Qe,Ne.data):n.texImage2D(t.TEXTURE_2D,N,Ve,Ne.width,Ne.height,0,it,Qe,Ne.data);w.generateMipmaps=!1}else St?(vt&&n.texStorage2D(t.TEXTURE_2D,Ye,Ve,fe.width,fe.height),ct&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,it,Qe,fe.data)):n.texImage2D(t.TEXTURE_2D,0,Ve,fe.width,fe.height,0,it,Qe,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){St&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ye,Ve,tt[0].width,tt[0].height,fe.depth);for(let N=0,pe=tt.length;N<pe;N++)Ne=tt[N],w.format!==fi?it!==null?St?ct&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,N,0,0,0,Ne.width,Ne.height,fe.depth,it,Ne.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,N,Ve,Ne.width,Ne.height,fe.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?ct&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,N,0,0,0,Ne.width,Ne.height,fe.depth,it,Qe,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,N,Ve,Ne.width,Ne.height,fe.depth,0,it,Qe,Ne.data)}else{St&&vt&&n.texStorage2D(t.TEXTURE_2D,Ye,Ve,tt[0].width,tt[0].height);for(let N=0,pe=tt.length;N<pe;N++)Ne=tt[N],w.format!==fi?it!==null?St?ct&&n.compressedTexSubImage2D(t.TEXTURE_2D,N,0,0,Ne.width,Ne.height,it,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,N,Ve,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?ct&&n.texSubImage2D(t.TEXTURE_2D,N,0,0,Ne.width,Ne.height,it,Qe,Ne.data):n.texImage2D(t.TEXTURE_2D,N,Ve,Ne.width,Ne.height,0,it,Qe,Ne.data)}else if(w.isDataArrayTexture)St?(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ye,Ve,fe.width,fe.height,fe.depth),ct&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,it,Qe,fe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ve,fe.width,fe.height,fe.depth,0,it,Qe,fe.data);else if(w.isData3DTexture)St?(vt&&n.texStorage3D(t.TEXTURE_3D,Ye,Ve,fe.width,fe.height,fe.depth),ct&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,it,Qe,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Ve,fe.width,fe.height,fe.depth,0,it,Qe,fe.data);else if(w.isFramebufferTexture){if(vt)if(St)n.texStorage2D(t.TEXTURE_2D,Ye,Ve,fe.width,fe.height);else{let N=fe.width,pe=fe.height;for(let _e=0;_e<Ye;_e++)n.texImage2D(t.TEXTURE_2D,_e,Ve,N,pe,0,it,Qe,null),N>>=1,pe>>=1}}else if(tt.length>0&&Et){St&&vt&&n.texStorage2D(t.TEXTURE_2D,Ye,Ve,tt[0].width,tt[0].height);for(let N=0,pe=tt.length;N<pe;N++)Ne=tt[N],St?ct&&n.texSubImage2D(t.TEXTURE_2D,N,0,0,it,Qe,Ne):n.texImage2D(t.TEXTURE_2D,N,Ve,it,Qe,Ne);w.generateMipmaps=!1}else St?(vt&&n.texStorage2D(t.TEXTURE_2D,Ye,Ve,fe.width,fe.height),ct&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,it,Qe,fe)):n.texImage2D(t.TEXTURE_2D,0,Ve,it,Qe,fe);m(w,Et)&&v(he),Oe.__version=J.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function be(A,w,Y){if(w.image.length!==6)return;const he=ee(A,w),ue=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+Y);const J=i.get(ue);if(ue.version!==J.__version||he===!0){n.activeTexture(t.TEXTURE0+Y);const Oe=Rt.getPrimaries(Rt.workingColorSpace),Ce=w.colorSpace===qn?null:Rt.getPrimaries(w.colorSpace),Le=w.colorSpace===qn||Oe===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const et=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let N=0;N<6;N++)!et&&!rt?fe[N]=y(w.image[N],!1,!0,r.maxCubemapSize):fe[N]=rt?w.image[N].image:w.image[N],fe[N]=lt(w,fe[N]);const Et=fe[0],it=p(Et)||a,Qe=s.convert(w.format,w.colorSpace),Ve=s.convert(w.type),Ne=S(w.internalFormat,Qe,Ve,w.colorSpace),tt=a&&w.isVideoTexture!==!0,St=J.__version===void 0||he===!0,vt=ue.dataReady;let ct=L(w,Et,it);Ke(t.TEXTURE_CUBE_MAP,w,it);let Ye;if(et){tt&&St&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ct,Ne,Et.width,Et.height);for(let N=0;N<6;N++){Ye=fe[N].mipmaps;for(let pe=0;pe<Ye.length;pe++){const _e=Ye[pe];w.format!==fi?Qe!==null?tt?vt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe,0,0,_e.width,_e.height,Qe,_e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe,Ne,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?vt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe,0,0,_e.width,_e.height,Qe,Ve,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe,Ne,_e.width,_e.height,0,Qe,Ve,_e.data)}}}else{Ye=w.mipmaps,tt&&St&&(Ye.length>0&&ct++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ct,Ne,fe[0].width,fe[0].height));for(let N=0;N<6;N++)if(rt){tt?vt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,fe[N].width,fe[N].height,Qe,Ve,fe[N].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Ne,fe[N].width,fe[N].height,0,Qe,Ve,fe[N].data);for(let pe=0;pe<Ye.length;pe++){const Ie=Ye[pe].image[N].image;tt?vt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe+1,0,0,Ie.width,Ie.height,Qe,Ve,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe+1,Ne,Ie.width,Ie.height,0,Qe,Ve,Ie.data)}}else{tt?vt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Qe,Ve,fe[N]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,Ne,Qe,Ve,fe[N]);for(let pe=0;pe<Ye.length;pe++){const _e=Ye[pe];tt?vt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe+1,0,0,Qe,Ve,_e.image[N]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,pe+1,Ne,Qe,Ve,_e.image[N])}}}m(w,it)&&v(t.TEXTURE_CUBE_MAP),J.__version=ue.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Fe(A,w,Y,he,ue,J){const Oe=s.convert(Y.format,Y.colorSpace),Ce=s.convert(Y.type),Le=S(Y.internalFormat,Oe,Ce,Y.colorSpace);if(!i.get(w).__hasExternalTextures){const rt=Math.max(1,w.width>>J),fe=Math.max(1,w.height>>J);ue===t.TEXTURE_3D||ue===t.TEXTURE_2D_ARRAY?n.texImage3D(ue,J,Le,rt,fe,w.depth,0,Oe,Ce,null):n.texImage2D(ue,J,Le,rt,fe,0,Oe,Ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ge(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,ue,i.get(Y).__webglTexture,0,ke(w)):(ue===t.TEXTURE_2D||ue>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,he,ue,i.get(Y).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(A,w,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let he=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Y||Ge(w)){const ue=w.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Ni?he=t.DEPTH_COMPONENT32F:ue.type===lr&&(he=t.DEPTH_COMPONENT24));const J=ke(w);Ge(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,he,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,J,he,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,he,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const he=ke(w);Y&&Ge(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,t.DEPTH24_STENCIL8,w.width,w.height):Ge(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const he=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ue=0;ue<he.length;ue++){const J=he[ue],Oe=s.convert(J.format,J.colorSpace),Ce=s.convert(J.type),Le=S(J.internalFormat,Oe,Ce,J.colorSpace),et=ke(w);Y&&Ge(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,et,Le,w.width,w.height):Ge(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,et,Le,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Le,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Q(w.depthTexture,0);const he=i.get(w.depthTexture).__webglTexture,ue=ke(w);if(w.depthTexture.format===Xr)Ge(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,he,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,he,0);else if(w.depthTexture.format===ro)Ge(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,he,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function ft(A){const w=i.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ue(w.__webglFramebuffer,A)}else if(Y){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]=t.createRenderbuffer(),Xe(w.__webglDepthbuffer[he],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Xe(w.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(A,w,Y){const he=i.get(A);w!==void 0&&Fe(he.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&ft(A)}function W(A){const w=A.texture,Y=i.get(A),he=i.get(w);A.addEventListener("dispose",G),A.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture()),he.__version=w.version,o.memory.textures++);const ue=A.isWebGLCubeRenderTarget===!0,J=A.isWebGLMultipleRenderTargets===!0,Oe=p(A)||a;if(ue){Y.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(a&&w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[Ce]=[];for(let Le=0;Le<w.mipmaps.length;Le++)Y.__webglFramebuffer[Ce][Le]=t.createFramebuffer()}else Y.__webglFramebuffer[Ce]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)Y.__webglFramebuffer[Ce]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(J)if(r.drawBuffers){const Ce=A.texture;for(let Le=0,et=Ce.length;Le<et;Le++){const rt=i.get(Ce[Le]);rt.__webglTexture===void 0&&(rt.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ge(A)===!1){const Ce=J?w:[w];Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Le=0;Le<Ce.length;Le++){const et=Ce[Le];Y.__webglColorRenderbuffer[Le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[Le]);const rt=s.convert(et.format,et.colorSpace),fe=s.convert(et.type),Et=S(et.internalFormat,rt,fe,et.colorSpace,A.isXRRenderTarget===!0),it=ke(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,it,Et,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,Y.__webglColorRenderbuffer[Le])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),Xe(Y.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,he.__webglTexture),Ke(t.TEXTURE_CUBE_MAP,w,Oe);for(let Ce=0;Ce<6;Ce++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Le=0;Le<w.mipmaps.length;Le++)Fe(Y.__webglFramebuffer[Ce][Le],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Le);else Fe(Y.__webglFramebuffer[Ce],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);m(w,Oe)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(J){const Ce=A.texture;for(let Le=0,et=Ce.length;Le<et;Le++){const rt=Ce[Le],fe=i.get(rt);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),Ke(t.TEXTURE_2D,rt,Oe),Fe(Y.__webglFramebuffer,A,rt,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,0),m(rt,Oe)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let Ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ce,he.__webglTexture),Ke(Ce,w,Oe),a&&w.mipmaps&&w.mipmaps.length>0)for(let Le=0;Le<w.mipmaps.length;Le++)Fe(Y.__webglFramebuffer[Le],A,w,t.COLOR_ATTACHMENT0,Ce,Le);else Fe(Y.__webglFramebuffer,A,w,t.COLOR_ATTACHMENT0,Ce,0);m(w,Oe)&&v(Ce),n.unbindTexture()}A.depthBuffer&&ft(A)}function gt(A){const w=p(A)||a,Y=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let he=0,ue=Y.length;he<ue;he++){const J=Y[he];if(m(J,w)){const Oe=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(J).__webglTexture;n.bindTexture(Oe,Ce),v(Oe),n.unbindTexture()}}}function Pe(A){if(a&&A.samples>0&&Ge(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],Y=A.width,he=A.height;let ue=t.COLOR_BUFFER_BIT;const J=[],Oe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(A),Le=A.isWebGLMultipleRenderTargets===!0;if(Le)for(let et=0;et<w.length;et++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+et,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+et,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let et=0;et<w.length;et++){J.push(t.COLOR_ATTACHMENT0+et),A.depthBuffer&&J.push(Oe);const rt=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(rt===!1&&(A.depthBuffer&&(ue|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ue|=t.STENCIL_BUFFER_BIT)),Le&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[et]),rt===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Oe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Oe])),Le){const fe=i.get(w[et]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,Y,he,0,0,Y,he,ue,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,J)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Le)for(let et=0;et<w.length;et++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+et,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[et]);const rt=i.get(w[et]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+et,t.TEXTURE_2D,rt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function ke(A){return Math.min(r.maxSamples,A.samples)}function Ge(A){const w=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(A){const w=o.render.frame;f.get(A)!==w&&(f.set(A,w),A.update())}function lt(A,w){const Y=A.colorSpace,he=A.format,ue=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===nd||Y!==Hi&&Y!==qn&&(Rt.getTransfer(Y)===Nt?a===!1?e.has("EXT_sRGB")===!0&&he===fi?(A.format=nd,A.minFilter=Cn,A.generateMipmaps=!1):w=Q0.sRGBToLinear(w):(he!==fi||ue!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}this.allocateTextureUnit=k,this.resetTextureUnits=ce,this.setTexture2D=Q,this.setTexture2DArray=ae,this.setTexture3D=H,this.setTextureCube=X,this.rebindTextures=$e,this.setupRenderTarget=W,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Ge}function xb(t,e,n){const i=n.isWebGL2;function r(s,o=qn){let a;const l=Rt.getTransfer(o);if(s===xr)return t.UNSIGNED_BYTE;if(s===G0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===V0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===nE)return t.BYTE;if(s===iE)return t.SHORT;if(s===ah)return t.UNSIGNED_SHORT;if(s===H0)return t.INT;if(s===lr)return t.UNSIGNED_INT;if(s===Ni)return t.FLOAT;if(s===da)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rE)return t.ALPHA;if(s===fi)return t.RGBA;if(s===sE)return t.LUMINANCE;if(s===oE)return t.LUMINANCE_ALPHA;if(s===Xr)return t.DEPTH_COMPONENT;if(s===ro)return t.DEPTH_STENCIL;if(s===nd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===aE)return t.RED;if(s===W0)return t.RED_INTEGER;if(s===lE)return t.RG;if(s===j0)return t.RG_INTEGER;if(s===X0)return t.RGBA_INTEGER;if(s===du||s===hu||s===pu||s===mu)if(l===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===du)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===du)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zp||s===Bp||s===Hp||s===Gp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===zp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vp||s===Wp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vp)return l===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jp||s===Xp||s===$p||s===Yp||s===qp||s===Kp||s===Zp||s===Qp||s===Jp||s===em||s===tm||s===nm||s===im||s===rm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$p)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jp)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===em)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tm)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nm)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===im)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rm)return l===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gu||s===sm||s===om)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gu)return l===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===om)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cE||s===am||s===lm||s===cm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===am)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===lm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Sb extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yi extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mb={type:"move"};class Bu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wb=`
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

}`;class Tb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Tn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Tr({extensions:{fragDepth:!0},vertexShader:Eb,fragmentShader:wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qn(new oo(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class Ab extends ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,g=null,_=null;const y=new Tb,p=n.getContextAttributes();let u=null,m=null;const v=[],S=[],L=new ht;let C=null;const b=new Yn;b.layers.enable(1),b.viewport=new nn;const G=new Yn;G.layers.enable(2),G.viewport=new nn;const re=[b,G],x=new Sb;x.layers.enable(1),x.layers.enable(2);let P=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=v[ee];return le===void 0&&(le=new Bu,v[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=v[ee];return le===void 0&&(le=new Bu,v[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=v[ee];return le===void 0&&(le=new Bu,v[ee]=le),le.getHandSpace()};function ce(ee){const le=S.indexOf(ee.inputSource);if(le===-1)return;const be=v[le];be!==void 0&&(be.update(ee.inputSource,ee.frame,c||o),be.dispatchEvent({type:ee.type,data:ee.inputSource}))}function k(){r.removeEventListener("select",ce),r.removeEventListener("selectstart",ce),r.removeEventListener("selectend",ce),r.removeEventListener("squeeze",ce),r.removeEventListener("squeezestart",ce),r.removeEventListener("squeezeend",ce),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<v.length;ee++){const le=S[ee];le!==null&&(S[ee]=null,v[ee].disconnect(le))}P=null,te=null,y.reset(),e.setRenderTarget(u),g=null,h=null,d=null,r=null,m=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",ce),r.addEventListener("selectstart",ce),r.addEventListener("selectend",ce),r.addEventListener("squeeze",ce),r.addEventListener("squeezestart",ce),r.addEventListener("squeezeend",ce),r.addEventListener("end",k),r.addEventListener("inputsourceschange",ne),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new es(g.framebufferWidth,g.framebufferHeight,{format:fi,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,be=null,Fe=null;p.depth&&(Fe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=p.stencil?ro:Xr,be=p.stencil?jr:lr);const Xe={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new es(h.textureWidth,h.textureHeight,{format:fi,type:xr,depthTexture:new d_(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Ue=e.properties.get(m);Ue.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ne(ee){for(let le=0;le<ee.removed.length;le++){const be=ee.removed[le],Fe=S.indexOf(be);Fe>=0&&(S[Fe]=null,v[Fe].disconnect(be))}for(let le=0;le<ee.added.length;le++){const be=ee.added[le];let Fe=S.indexOf(be);if(Fe===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=S.length){S.push(be),Fe=Ue;break}else if(S[Ue]===null){S[Ue]=be,Fe=Ue;break}if(Fe===-1)break}const Xe=v[Fe];Xe&&Xe.connect(be)}}const Q=new V,ae=new V;function H(ee,le,be){Q.setFromMatrixPosition(le.matrixWorld),ae.setFromMatrixPosition(be.matrixWorld);const Fe=Q.distanceTo(ae),Xe=le.projectionMatrix.elements,Ue=be.projectionMatrix.elements,ft=Xe[14]/(Xe[10]-1),$e=Xe[14]/(Xe[10]+1),W=(Xe[9]+1)/Xe[5],gt=(Xe[9]-1)/Xe[5],Pe=(Xe[8]-1)/Xe[0],ke=(Ue[8]+1)/Ue[0],Ge=ft*Pe,Tt=ft*ke,lt=Fe/(-Pe+ke),A=lt*-Pe;le.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(A),ee.translateZ(lt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const w=ft+lt,Y=$e+lt,he=Ge-A,ue=Tt+(Fe-A),J=W*$e/Y*w,Oe=gt*$e/Y*w;ee.projectionMatrix.makePerspective(he,ue,J,Oe,w,Y),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function X(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;y.texture!==null&&(ee.near=y.depthNear,ee.far=y.depthFar),x.near=G.near=b.near=ee.near,x.far=G.far=b.far=ee.far,(P!==x.near||te!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,te=x.far,b.near=P,b.far=te,G.near=P,G.far=te,b.updateProjectionMatrix(),G.updateProjectionMatrix(),ee.updateProjectionMatrix());const le=ee.parent,be=x.cameras;X(x,le);for(let Fe=0;Fe<be.length;Fe++)X(be[Fe],le);be.length===2?H(x,b,G):x.projectionMatrix.copy(b.projectionMatrix),q(ee,x,le)};function q(ee,le,be){be===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(be.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=id*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null};let se=null;function de(ee,le){if(f=le.getViewerPose(c||o),_=le,f!==null){const be=f.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let Fe=!1;be.length!==x.cameras.length&&(x.cameras.length=0,Fe=!0);for(let Ue=0;Ue<be.length;Ue++){const ft=be[Ue];let $e=null;if(g!==null)$e=g.getViewport(ft);else{const gt=d.getViewSubImage(h,ft);$e=gt.viewport,Ue===0&&(e.setRenderTargetTextures(m,gt.colorTexture,h.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(m))}let W=re[Ue];W===void 0&&(W=new Yn,W.layers.enable(Ue),W.viewport=new nn,re[Ue]=W),W.matrix.fromArray(ft.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(ft.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set($e.x,$e.y,$e.width,$e.height),Ue===0&&(x.matrix.copy(W.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Fe===!0&&x.cameras.push(W)}const Xe=r.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")){const Ue=d.getDepthInformation(be[0]);Ue&&Ue.isValid&&Ue.texture&&y.init(e,Ue,r.renderState)}}for(let be=0;be<v.length;be++){const Fe=S[be],Xe=v[be];Fe!==null&&Xe!==void 0&&Xe.update(Fe,le,c||o)}y.render(e,x),se&&se(ee,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const Ke=new u_;Ke.setAnimationLoop(de),this.setAnimationLoop=function(ee){se=ee},this.dispose=function(){}}}function bb(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,a_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,m,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&g(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,m,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Un&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Un&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const m=e.get(u).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,m,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*m,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,m){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Un&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const m=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Cb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const S=v.program;i.uniformBlockBinding(m,S)}function c(m,v){let S=r[m.id];S===void 0&&(_(m),S=f(m),r[m.id]=S,m.addEventListener("dispose",p));const L=v.program;i.updateUBOMapping(m,L);const C=e.render.frame;s[m.id]!==C&&(h(m),s[m.id]=C)}function f(m){const v=d();m.__bindingPointIndex=v;const S=t.createBuffer(),L=m.__size,C=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],S=m.uniforms,L=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,b=S.length;C<b;C++){const G=Array.isArray(S[C])?S[C]:[S[C]];for(let re=0,x=G.length;re<x;re++){const P=G[re];if(g(P,C,re,L)===!0){const te=P.__offset,ce=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let ne=0;ne<ce.length;ne++){const Q=ce[ne],ae=y(Q);typeof Q=="number"||typeof Q=="boolean"?(P.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,te+k,P.__data)):Q.isMatrix3?(P.__data[0]=Q.elements[0],P.__data[1]=Q.elements[1],P.__data[2]=Q.elements[2],P.__data[3]=0,P.__data[4]=Q.elements[3],P.__data[5]=Q.elements[4],P.__data[6]=Q.elements[5],P.__data[7]=0,P.__data[8]=Q.elements[6],P.__data[9]=Q.elements[7],P.__data[10]=Q.elements[8],P.__data[11]=0):(Q.toArray(P.__data,k),k+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,te,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,S,L){const C=m.value,b=v+"_"+S;if(L[b]===void 0)return typeof C=="number"||typeof C=="boolean"?L[b]=C:L[b]=C.clone(),!0;{const G=L[b];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return L[b]=C,!0}else if(G.equals(C)===!1)return G.copy(C),!0}return!1}function _(m){const v=m.uniforms;let S=0;const L=16;for(let b=0,G=v.length;b<G;b++){const re=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,P=re.length;x<P;x++){const te=re[x],ce=Array.isArray(te.value)?te.value:[te.value];for(let k=0,ne=ce.length;k<ne;k++){const Q=ce[k],ae=y(Q),H=S%L;H!==0&&L-H<ae.boundary&&(S+=L-H),te.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=S,S+=ae.storage}}}const C=S%L;return C>0&&(S+=L-C),m.__size=S,m.__cache={},this}function y(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function p(m){const v=m.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class __{constructor(e={}){const{canvas:n=SE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const u=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=yr,this.toneMappingExposure=1;const v=this;let S=!1,L=0,C=0,b=null,G=-1,re=null;const x=new nn,P=new nn;let te=null;const ce=new ut(0);let k=0,ne=n.width,Q=n.height,ae=1,H=null,X=null;const q=new nn(0,0,ne,Q),se=new nn(0,0,ne,Q);let de=!1;const Ke=new ch;let ee=!1,le=!1,be=null;const Fe=new Wt,Xe=new ht,Ue=new V,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return b===null?ae:1}let W=i;function gt(T,B){for(let j=0;j<T.length;j++){const K=T[j],$=n.getContext(K,B);if($!==null)return $}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${oh}`),n.addEventListener("webglcontextlost",Ye,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",pe,!1),W===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),W=gt(B,T),W===null)throw gt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pe,ke,Ge,Tt,lt,A,w,Y,he,ue,J,Oe,Ce,Le,et,rt,fe,Et,it,Qe,Ve,Ne,tt,St;function vt(){Pe=new U1(W),ke=new R1(W,Pe,e),Pe.init(ke),Ne=new xb(W,Pe,ke),Ge=new _b(W,Pe,ke),Tt=new k1(W),lt=new rb,A=new yb(W,Pe,Ge,lt,ke,Ne,Tt),w=new L1(v),Y=new D1(v),he=new XE(W,ke),tt=new b1(W,Pe,he,ke),ue=new F1(W,he,Tt,tt),J=new G1(W,ue,he,Tt),it=new H1(W,ke,A),rt=new P1(lt),Oe=new ib(v,w,Y,Pe,ke,tt,rt),Ce=new bb(v,lt),Le=new ob,et=new db(Pe,ke),Et=new A1(v,w,Y,Ge,J,h,l),fe=new vb(v,J,ke),St=new Cb(W,Tt,ke,Ge),Qe=new C1(W,Pe,Tt,ke),Ve=new O1(W,Pe,Tt,ke),Tt.programs=Oe.programs,v.capabilities=ke,v.extensions=Pe,v.properties=lt,v.renderLists=Le,v.shadowMap=fe,v.state=Ge,v.info=Tt}vt();const ct=new Ab(v,W);this.xr=ct,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=Pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(T){T!==void 0&&(ae=T,this.setSize(ne,Q,!1))},this.getSize=function(T){return T.set(ne,Q)},this.setSize=function(T,B,j=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=T,Q=B,n.width=Math.floor(T*ae),n.height=Math.floor(B*ae),j===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(ne*ae,Q*ae).floor()},this.setDrawingBufferSize=function(T,B,j){ne=T,Q=B,ae=j,n.width=Math.floor(T*j),n.height=Math.floor(B*j),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(q)},this.setViewport=function(T,B,j,K){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,B,j,K),Ge.viewport(x.copy(q).multiplyScalar(ae).floor())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,B,j,K){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,B,j,K),Ge.scissor(P.copy(se).multiplyScalar(ae).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){Ge.setScissorTest(de=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){X=T},this.getClearColor=function(T){return T.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(T=!0,B=!0,j=!0){let K=0;if(T){let $=!1;if(b!==null){const Re=b.texture.format;$=Re===X0||Re===j0||Re===W0}if($){const Re=b.texture.type,ze=Re===xr||Re===lr||Re===ah||Re===jr||Re===G0||Re===V0,Ae=Et.getClearColor(),Be=Et.getClearAlpha(),at=Ae.r,qe=Ae.g,E=Ae.b;ze?(g[0]=at,g[1]=qe,g[2]=E,g[3]=Be,W.clearBufferuiv(W.COLOR,0,g)):(_[0]=at,_[1]=qe,_[2]=E,_[3]=Be,W.clearBufferiv(W.COLOR,0,_))}else K|=W.COLOR_BUFFER_BIT}B&&(K|=W.DEPTH_BUFFER_BIT),j&&(K|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ye,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),Le.dispose(),et.dispose(),lt.dispose(),w.dispose(),Y.dispose(),J.dispose(),tt.dispose(),St.dispose(),Oe.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ie),ct.removeEventListener("sessionend",ge),be&&(be.dispose(),be=null),Me.stop()};function Ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Tt.autoReset,B=fe.enabled,j=fe.autoUpdate,K=fe.needsUpdate,$=fe.type;vt(),Tt.autoReset=T,fe.enabled=B,fe.autoUpdate=j,fe.needsUpdate=K,fe.type=$}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _e(T){const B=T.target;B.removeEventListener("dispose",_e),Ie(B)}function Ie(T){We(T),lt.remove(T)}function We(T){const B=lt.get(T).programs;B!==void 0&&(B.forEach(function(j){Oe.releaseProgram(j)}),T.isShaderMaterial&&Oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,j,K,$,Re){B===null&&(B=ft);const ze=$.isMesh&&$.matrixWorld.determinant()<0,Ae=Ht(T,B,j,K,$);Ge.setMaterial(K,ze);let Be=j.index,at=1;if(K.wireframe===!0){if(Be=ue.getWireframeAttribute(j),Be===void 0)return;at=2}const qe=j.drawRange,E=j.attributes.position;let F=qe.start*at,U=(qe.start+qe.count)*at;Re!==null&&(F=Math.max(F,Re.start*at),U=Math.min(U,(Re.start+Re.count)*at)),Be!==null?(F=Math.max(F,0),U=Math.min(U,Be.count)):E!=null&&(F=Math.max(F,0),U=Math.min(U,E.count));const I=U-F;if(I<0||I===1/0)return;tt.setup($,K,Ae,j,Be);let Z,O=Qe;if(Be!==null&&(Z=he.get(Be),O=Ve,O.setIndex(Z)),$.isMesh)K.wireframe===!0?(Ge.setLineWidth(K.wireframeLinewidth*$e()),O.setMode(W.LINES)):O.setMode(W.TRIANGLES);else if($.isLine){let R=K.linewidth;R===void 0&&(R=1),Ge.setLineWidth(R*$e()),$.isLineSegments?O.setMode(W.LINES):$.isLineLoop?O.setMode(W.LINE_LOOP):O.setMode(W.LINE_STRIP)}else $.isPoints?O.setMode(W.POINTS):$.isSprite&&O.setMode(W.TRIANGLES);if($.isBatchedMesh)O.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)O.renderInstances(F,I,$.count);else if(j.isInstancedBufferGeometry){const R=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,z=Math.min(j.instanceCount,R);O.renderInstances(F,I,z)}else O.render(F,I)};function xt(T,B,j){T.transparent===!0&&T.side===ci&&T.forceSinglePass===!1?(T.side=Un,T.needsUpdate=!0,ot(T,B,j),T.side=wr,T.needsUpdate=!0,ot(T,B,j),T.side=ci):ot(T,B,j)}this.compile=function(T,B,j=null){j===null&&(j=T),p=et.get(j),p.init(),m.push(p),j.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),T!==j&&T.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights(v._useLegacyLights);const K=new Set;return T.traverse(function($){const Re=$.material;if(Re)if(Array.isArray(Re))for(let ze=0;ze<Re.length;ze++){const Ae=Re[ze];xt(Ae,j,$),K.add(Ae)}else xt(Re,j,$),K.add(Re)}),m.pop(),p=null,K},this.compileAsync=function(T,B,j=null){const K=this.compile(T,B,j);return new Promise($=>{function Re(){if(K.forEach(function(ze){lt.get(ze).currentProgram.isReady()&&K.delete(ze)}),K.size===0){$(T);return}setTimeout(Re,10)}Pe.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let we=null;function Ut(T){we&&we(T)}function ie(){Me.stop()}function ge(){Me.start()}const Me=new u_;Me.setAnimationLoop(Ut),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(T){we=T,ct.setAnimationLoop(T),T===null?Me.stop():Me.start()},ct.addEventListener("sessionstart",ie),ct.addEventListener("sessionend",ge),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(B),B=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,b),p=et.get(T,m.length),p.init(),m.push(p),Fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ke.setFromProjectionMatrix(Fe),le=this.localClippingEnabled,ee=rt.init(this.clippingPlanes,le),y=Le.get(T,u.length),y.init(),u.push(y),me(T,B,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(H,X),this.info.render.frame++,ee===!0&&rt.beginShadows();const j=p.state.shadowsArray;if(fe.render(j,T,B),ee===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1)&&Et.render(y,T),p.setupLights(v._useLegacyLights),B.isArrayCamera){const K=B.cameras;for(let $=0,Re=K.length;$<Re;$++){const ze=K[$];xe(y,T,ze,ze.viewport)}}else xe(y,T,B);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(v,T,B),tt.resetDefaultState(),G=-1,re=null,m.pop(),m.length>0?p=m[m.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function me(T,B,j,K){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ke.intersectsSprite(T)){K&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Fe);const ze=J.update(T),Ae=T.material;Ae.visible&&y.push(T,ze,Ae,j,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ke.intersectsObject(T))){const ze=J.update(T),Ae=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Ue.copy(ze.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ae)){const Be=ze.groups;for(let at=0,qe=Be.length;at<qe;at++){const E=Be[at],F=Ae[E.materialIndex];F&&F.visible&&y.push(T,ze,F,j,Ue.z,E)}}else Ae.visible&&y.push(T,ze,Ae,j,Ue.z,null)}}const Re=T.children;for(let ze=0,Ae=Re.length;ze<Ae;ze++)me(Re[ze],B,j,K)}function xe(T,B,j,K){const $=T.opaque,Re=T.transmissive,ze=T.transparent;p.setupLightsView(j),ee===!0&&rt.setGlobalState(v.clippingPlanes,j),Re.length>0&&He($,Re,B,j),K&&Ge.viewport(x.copy(K)),$.length>0&&Ze($,B,j),Re.length>0&&Ze(Re,B,j),ze.length>0&&Ze(ze,B,j),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function He(T,B,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const Re=ke.isWebGL2;be===null&&(be=new es(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?da:xr,minFilter:Gr,samples:Re?4:0})),v.getDrawingBufferSize(Xe),Re?be.setSize(Xe.x,Xe.y):be.setSize(rd(Xe.x),rd(Xe.y));const ze=v.getRenderTarget();v.setRenderTarget(be),v.getClearColor(ce),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear();const Ae=v.toneMapping;v.toneMapping=yr,Ze(T,j,K),A.updateMultisampleRenderTarget(be),A.updateRenderTargetMipmap(be);let Be=!1;for(let at=0,qe=B.length;at<qe;at++){const E=B[at],F=E.object,U=E.geometry,I=E.material,Z=E.group;if(I.side===ci&&F.layers.test(K.layers)){const O=I.side;I.side=Un,I.needsUpdate=!0,st(F,j,K,U,I,Z),I.side=O,I.needsUpdate=!0,Be=!0}}Be===!0&&(A.updateMultisampleRenderTarget(be),A.updateRenderTargetMipmap(be)),v.setRenderTarget(ze),v.setClearColor(ce,k),v.toneMapping=Ae}function Ze(T,B,j){const K=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Re=T.length;$<Re;$++){const ze=T[$],Ae=ze.object,Be=ze.geometry,at=K===null?ze.material:K,qe=ze.group;Ae.layers.test(j.layers)&&st(Ae,B,j,Be,at,qe)}}function st(T,B,j,K,$,Re){T.onBeforeRender(v,B,j,K,$,Re),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(v,B,j,K,T,Re),$.transparent===!0&&$.side===ci&&$.forceSinglePass===!1?($.side=Un,$.needsUpdate=!0,v.renderBufferDirect(j,B,K,$,T,Re),$.side=wr,$.needsUpdate=!0,v.renderBufferDirect(j,B,K,$,T,Re),$.side=ci):v.renderBufferDirect(j,B,K,$,T,Re),T.onAfterRender(v,B,j,K,$,Re)}function ot(T,B,j){B.isScene!==!0&&(B=ft);const K=lt.get(T),$=p.state.lights,Re=p.state.shadowsArray,ze=$.state.version,Ae=Oe.getParameters(T,$.state,Re,B,j),Be=Oe.getProgramCacheKey(Ae);let at=K.programs;K.environment=T.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(T.isMeshStandardMaterial?Y:w).get(T.envMap||K.environment),at===void 0&&(T.addEventListener("dispose",_e),at=new Map,K.programs=at);let qe=at.get(Be);if(qe!==void 0){if(K.currentProgram===qe&&K.lightsStateVersion===ze)return _t(T,Ae),qe}else Ae.uniforms=Oe.getUniforms(T),T.onBuild(j,Ae,v),T.onBeforeCompile(Ae,v),qe=Oe.acquireProgram(Ae,Be),at.set(Be,qe),K.uniforms=Ae.uniforms;const E=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(E.clippingPlanes=rt.uniform),_t(T,Ae),K.needsLights=hn(T),K.lightsStateVersion=ze,K.needsLights&&(E.ambientLightColor.value=$.state.ambient,E.lightProbe.value=$.state.probe,E.directionalLights.value=$.state.directional,E.directionalLightShadows.value=$.state.directionalShadow,E.spotLights.value=$.state.spot,E.spotLightShadows.value=$.state.spotShadow,E.rectAreaLights.value=$.state.rectArea,E.ltc_1.value=$.state.rectAreaLTC1,E.ltc_2.value=$.state.rectAreaLTC2,E.pointLights.value=$.state.point,E.pointLightShadows.value=$.state.pointShadow,E.hemisphereLights.value=$.state.hemi,E.directionalShadowMap.value=$.state.directionalShadowMap,E.directionalShadowMatrix.value=$.state.directionalShadowMatrix,E.spotShadowMap.value=$.state.spotShadowMap,E.spotLightMatrix.value=$.state.spotLightMatrix,E.spotLightMap.value=$.state.spotLightMap,E.pointShadowMap.value=$.state.pointShadowMap,E.pointShadowMatrix.value=$.state.pointShadowMatrix),K.currentProgram=qe,K.uniformsList=null,qe}function At(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Cl.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function _t(T,B){const j=lt.get(T);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function Ht(T,B,j,K,$){B.isScene!==!0&&(B=ft),A.resetTextureUnits();const Re=B.fog,ze=K.isMeshStandardMaterial?B.environment:null,Ae=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Hi,Be=(K.isMeshStandardMaterial?Y:w).get(K.envMap||ze),at=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qe=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),E=!!j.morphAttributes.position,F=!!j.morphAttributes.normal,U=!!j.morphAttributes.color;let I=yr;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(I=v.toneMapping);const Z=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,O=Z!==void 0?Z.length:0,R=lt.get(K),z=p.state.lights;if(ee===!0&&(le===!0||T!==re)){const pt=T===re&&K.id===G;rt.setState(K,T,pt)}let oe=!1;K.version===R.__version?(R.needsLights&&R.lightsStateVersion!==z.state.version||R.outputColorSpace!==Ae||$.isBatchedMesh&&R.batching===!1||!$.isBatchedMesh&&R.batching===!0||$.isInstancedMesh&&R.instancing===!1||!$.isInstancedMesh&&R.instancing===!0||$.isSkinnedMesh&&R.skinning===!1||!$.isSkinnedMesh&&R.skinning===!0||$.isInstancedMesh&&R.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&R.instancingColor===!1&&$.instanceColor!==null||R.envMap!==Be||K.fog===!0&&R.fog!==Re||R.numClippingPlanes!==void 0&&(R.numClippingPlanes!==rt.numPlanes||R.numIntersection!==rt.numIntersection)||R.vertexAlphas!==at||R.vertexTangents!==qe||R.morphTargets!==E||R.morphNormals!==F||R.morphColors!==U||R.toneMapping!==I||ke.isWebGL2===!0&&R.morphTargetsCount!==O)&&(oe=!0):(oe=!0,R.__version=K.version);let ye=R.currentProgram;oe===!0&&(ye=ot(K,B,$));let Se=!1,Ee=!1,nt=!1;const Je=ye.getUniforms(),je=R.uniforms;if(Ge.useProgram(ye.program)&&(Se=!0,Ee=!0,nt=!0),K.id!==G&&(G=K.id,Ee=!0),Se||re!==T){Je.setValue(W,"projectionMatrix",T.projectionMatrix),Je.setValue(W,"viewMatrix",T.matrixWorldInverse);const pt=Je.map.cameraPosition;pt!==void 0&&pt.setValue(W,Ue.setFromMatrixPosition(T.matrixWorld)),ke.logarithmicDepthBuffer&&Je.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Je.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),re!==T&&(re=T,Ee=!0,nt=!0)}if($.isSkinnedMesh){Je.setOptional(W,$,"bindMatrix"),Je.setOptional(W,$,"bindMatrixInverse");const pt=$.skeleton;pt&&(ke.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),Je.setValue(W,"boneTexture",pt.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Je.setOptional(W,$,"batchingTexture"),Je.setValue(W,"batchingTexture",$._matricesTexture,A));const wt=j.morphAttributes;if((wt.position!==void 0||wt.normal!==void 0||wt.color!==void 0&&ke.isWebGL2===!0)&&it.update($,j,ye),(Ee||R.receiveShadow!==$.receiveShadow)&&(R.receiveShadow=$.receiveShadow,Je.setValue(W,"receiveShadow",$.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(je.envMap.value=Be,je.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Ee&&(Je.setValue(W,"toneMappingExposure",v.toneMappingExposure),R.needsLights&&Ft(je,nt),Re&&K.fog===!0&&Ce.refreshFogUniforms(je,Re),Ce.refreshMaterialUniforms(je,K,ae,Q,be),Cl.upload(W,At(R),je,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Cl.upload(W,At(R),je,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Je.setValue(W,"center",$.center),Je.setValue(W,"modelViewMatrix",$.modelViewMatrix),Je.setValue(W,"normalMatrix",$.normalMatrix),Je.setValue(W,"modelMatrix",$.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const pt=K.uniformsGroups;for(let Wn=0,mo=pt.length;Wn<mo;Wn++)if(ke.isWebGL2){const Xi=pt[Wn];St.update(Xi,ye),St.bind(Xi,ye)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ye}function Ft(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function hn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,B,j){lt.get(T.texture).__webglTexture=B,lt.get(T.depthTexture).__webglTexture=j;const K=lt.get(T);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const j=lt.get(T);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,j=0){b=T,L=B,C=j;let K=!0,$=null,Re=!1,ze=!1;if(T){const Be=lt.get(T);Be.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(W.FRAMEBUFFER,null),K=!1):Be.__webglFramebuffer===void 0?A.setupRenderTarget(T):Be.__hasExternalTextures&&A.rebindTextures(T,lt.get(T.texture).__webglTexture,lt.get(T.depthTexture).__webglTexture);const at=T.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(ze=!0);const qe=lt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qe[B])?$=qe[B][j]:$=qe[B],Re=!0):ke.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?$=lt.get(T).__webglMultisampledFramebuffer:Array.isArray(qe)?$=qe[j]:$=qe,x.copy(T.viewport),P.copy(T.scissor),te=T.scissorTest}else x.copy(q).multiplyScalar(ae).floor(),P.copy(se).multiplyScalar(ae).floor(),te=de;if(Ge.bindFramebuffer(W.FRAMEBUFFER,$)&&ke.drawBuffers&&K&&Ge.drawBuffers(T,$),Ge.viewport(x),Ge.scissor(P),Ge.setScissorTest(te),Re){const Be=lt.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+B,Be.__webglTexture,j)}else if(ze){const Be=lt.get(T.texture),at=B||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Be.__webglTexture,j||0,at)}G=-1},this.readRenderTargetPixels=function(T,B,j,K,$,Re,ze){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ze!==void 0&&(Ae=Ae[ze]),Ae){Ge.bindFramebuffer(W.FRAMEBUFFER,Ae);try{const Be=T.texture,at=Be.format,qe=Be.type;if(at!==fi&&Ne.convert(at)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const E=qe===da&&(Pe.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(qe!==xr&&Ne.convert(qe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===Ni&&(ke.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!E){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-K&&j>=0&&j<=T.height-$&&W.readPixels(B,j,K,$,Ne.convert(at),Ne.convert(qe),Re)}finally{const Be=b!==null?lt.get(b).__webglFramebuffer:null;Ge.bindFramebuffer(W.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(T,B,j=0){const K=Math.pow(2,-j),$=Math.floor(B.image.width*K),Re=Math.floor(B.image.height*K);A.setTexture2D(B,0),W.copyTexSubImage2D(W.TEXTURE_2D,j,0,0,T.x,T.y,$,Re),Ge.unbindTexture()},this.copyTextureToTexture=function(T,B,j,K=0){const $=B.image.width,Re=B.image.height,ze=Ne.convert(j.format),Ae=Ne.convert(j.type);A.setTexture2D(j,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment),B.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,K,T.x,T.y,$,Re,ze,Ae,B.image.data):B.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,K,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,ze,B.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,K,T.x,T.y,ze,Ae,B.image),K===0&&j.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(T,B,j,K,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=T.max.x-T.min.x+1,ze=T.max.y-T.min.y+1,Ae=T.max.z-T.min.z+1,Be=Ne.convert(K.format),at=Ne.convert(K.type);let qe;if(K.isData3DTexture)A.setTexture3D(K,0),qe=W.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),qe=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);const E=W.getParameter(W.UNPACK_ROW_LENGTH),F=W.getParameter(W.UNPACK_IMAGE_HEIGHT),U=W.getParameter(W.UNPACK_SKIP_PIXELS),I=W.getParameter(W.UNPACK_SKIP_ROWS),Z=W.getParameter(W.UNPACK_SKIP_IMAGES),O=j.isCompressedTexture?j.mipmaps[$]:j.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,O.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,O.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,T.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,T.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,T.min.z),j.isDataTexture||j.isData3DTexture?W.texSubImage3D(qe,$,B.x,B.y,B.z,Re,ze,Ae,Be,at,O.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(qe,$,B.x,B.y,B.z,Re,ze,Ae,Be,O.data)):W.texSubImage3D(qe,$,B.x,B.y,B.z,Re,ze,Ae,Be,at,O),W.pixelStorei(W.UNPACK_ROW_LENGTH,E),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,F),W.pixelStorei(W.UNPACK_SKIP_PIXELS,U),W.pixelStorei(W.UNPACK_SKIP_ROWS,I),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Z),$===0&&K.generateMipmaps&&W.generateMipmap(qe),Ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Ge.unbindTexture()},this.resetState=function(){L=0,C=0,b=null,Ge.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===lh?"display-p3":"srgb",n.unpackColorSpace=Rt.workingColorSpace===Pc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===an?$r:Y0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$r?an:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Rb extends __{}Rb.prototype.isWebGL1Renderer=!0;class Pb extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Lb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=td,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new V;class ac{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Si(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Si(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Si(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Si(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Si(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ct(n,this.array),i=Ct(i,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new ln(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ac(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class od extends rs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ms;const Ro=new V,Es=new V,ws=new V,Ts=new ht,Po=new ht,y_=new Wt,sl=new V,Lo=new V,ol=new V,Jm=new ht,Hu=new ht,eg=new ht;class tg extends Zt{constructor(e=new od){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new cn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lb(n,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new ac(i,3,0,!1)),Ms.setAttribute("uv",new ac(i,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new ht(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),y_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-ws.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;al(sl.set(-.5,-.5,0),ws,o,Es,r,s),al(Lo.set(.5,-.5,0),ws,o,Es,r,s),al(ol.set(.5,.5,0),ws,o,Es,r,s),Jm.set(0,0),Hu.set(1,0),eg.set(1,1);let a=e.ray.intersectTriangle(sl,Lo,ol,!1,Ro);if(a===null&&(al(Lo.set(-.5,.5,0),ws,o,Es,r,s),Hu.set(0,1),a=e.ray.intersectTriangle(sl,ol,Lo,!1,Ro),a===null))return;const l=e.ray.origin.distanceTo(Ro);l<e.near||l>e.far||n.push({distance:l,point:Ro.clone(),uv:Kn.getInterpolation(Ro,sl,Lo,ol,Jm,Hu,eg,new ht),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function al(t,e,n,i,r,s){Ts.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Po.x=s*Ts.x-r*Ts.y,Po.y=r*Ts.x+s*Ts.y):Po.copy(Ts),t.copy(e),t.x+=Po.x,t.y+=Po.y,t.applyMatrix4(y_)}class vi extends rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ng=new V,ig=new V,rg=new Wt,Gu=new t_,ll=new Lc;class ad extends Zt{constructor(e=new cn,n=new vi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ng.fromBufferAttribute(n,r-1),ig.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ng.distanceTo(ig);e.setAttribute("lineDistance",new fn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(r),ll.radius+=s,e.ray.intersectsSphere(ll)===!1)return;rg.copy(r).invert(),Gu.copy(e.ray).applyMatrix4(rg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new V,f=new V,d=new V,h=new V,g=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),m=Math.min(_.count,o.start+o.count);for(let v=u,S=m-1;v<S;v+=g){const L=_.getX(v),C=_.getX(v+1);if(c.fromBufferAttribute(p,L),f.fromBufferAttribute(p,C),Gu.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(h);G<e.near||G>e.far||n.push({distance:G,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let v=u,S=m-1;v<S;v+=g){if(c.fromBufferAttribute(p,v),f.fromBufferAttribute(p,v+1),Gu.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||n.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const sg=new V,og=new V;class Xo extends ad{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)sg.fromBufferAttribute(n,r),og.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+sg.distanceTo(og);e.setAttribute("lineDistance",new fn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ag extends Tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const cl=new V,ul=new V,Vu=new V,fl=new Kn;class Nb extends cn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(bl*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},g=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:p,c:u}=fl;if(y.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),fl.getNormal(Vu),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let m=0;m<3;m++){const v=(m+1)%3,S=d[m],L=d[v],C=fl[f[m]],b=fl[f[v]],G=`${S}_${L}`,re=`${L}_${S}`;re in h&&h[re]?(Vu.dot(h[re].normal)<=s&&(g.push(C.x,C.y,C.z),g.push(b.x,b.y,b.z)),h[re]=null):G in h||(h[G]={index0:c[m],index1:c[v],normal:Vu.clone()})}}for(const _ in h)if(h[_]){const{index0:y,index1:p}=h[_];cl.fromBufferAttribute(a,y),ul.fromBufferAttribute(a,p),g.push(cl.x,cl.y,cl.z),g.push(ul.x,ul.y,ul.z)}this.setAttribute("position",new fn(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class fh extends cn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new V,h=new V,g=[],_=[],y=[],p=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let L=0;L<=n;L++){const C=L/n;d.x=-e*Math.cos(r+C*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),p.push(C+S,1-v),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=f[u][m+1],S=f[u][m],L=f[u+1][m],C=f[u+1][m+1];(u!==0||o>0)&&g.push(v,S,C),(u!==i-1||l<Math.PI)&&g.push(S,L,C)}this.setIndex(g),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(y,3)),this.setAttribute("uv",new fn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class No extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q0,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dh extends Zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Ib extends dh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Wu=new Wt,lg=new V,cg=new V;class Db{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ch,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;lg.setFromMatrixPosition(e.matrixWorld),n.position.copy(lg),cg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(cg),n.updateMatrixWorld(),Wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ub extends Db{constructor(){super(new f_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ug extends dh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new Ub}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fb extends dh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ob extends Xo{constructor(e=10,n=10,i=4473924,r=8947848){i=new ut(i),r=new ut(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,g=0,_=-a;h<=n;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=h===s?i:r;y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3}const f=new cn;f.setAttribute("position",new fn(l,3)),f.setAttribute("color",new fn(c,3));const d=new vi({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class kb extends Xo{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new cn;r.setAttribute("position",new fn(n,3)),r.setAttribute("color",new fn(i,3));const s=new vi({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new ut,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);function ju(t,e,n){return t<e?e:t>n?n:t}function zb(t){const e=D.useRef(null),n=D.useRef([]),i=D.useRef(null),r=D.useRef(0),s=D.useRef(null),o=D.useRef({enabled:!0,scale:1,background:!0}),a=D.useRef(!0),l=D.useRef(null),c=D.useRef([]),f=D.useRef([]),d=D.useRef(null),h=D.useRef([]),g=D.useRef({markers:!0,trail:!0,death:!0,ping:!0,terrain:!0,towns:!0});return D.useEffect(()=>{n.current=t.players,g.current.markers=!0},[t.players]),D.useEffect(()=>{i.current=t.focusTarget},[t.focusTarget]),D.useEffect(()=>{r.current=t.focusNonce},[t.focusNonce]),D.useEffect(()=>{s.current=typeof t.followPlayerId=="number"?t.followPlayerId:null},[t.followPlayerId]),D.useEffect(()=>{o.current=t.nameTags||{enabled:!0,scale:1,background:!0},g.current.markers=!0},[t.nameTags]),D.useEffect(()=>{a.current=t.showAimLines!==!1,g.current.markers=!0},[t.showAimLines]),D.useEffect(()=>{l.current=t.trail||null,g.current.trail=!0},[t.trail]),D.useEffect(()=>{c.current=Array.isArray(t.deathMarkers)?t.deathMarkers:[],g.current.death=!0},[t.deathMarkers]),D.useEffect(()=>{f.current=Array.isArray(t.pingMarkers)?t.pingMarkers:[],g.current.ping=!0},[t.pingMarkers]),D.useEffect(()=>{d.current=t.terrain||null,g.current.terrain=!0},[t.terrain]),D.useEffect(()=>{h.current=Array.isArray(t.towns)?t.towns:[],g.current.towns=!0},[t.towns]),D.useEffect(()=>{const _=e.current;if(!_)return;const y=_,p=new __({canvas:y,antialias:!0,powerPreference:"high-performance"});p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),p.shadowMap.enabled=!1;const u=new Pb;u.background=new ut(724761);const m=new Yn(70,1,.1,2e4);m.position.set(0,25,60);const v=new Fb(16777215,.28);u.add(v);const S=new Ib(9418495,724761,.35);u.add(S);const L=new ug(16777215,1.15);L.position.set(150,260,130),L.castShadow=!1,u.add(L);const C=new ug(16777215,.35);C.position.set(-180,160,-120),u.add(C);const b=new Ob(2e3,200,3293278,1910328);u.add(b);const G=new kb(10);u.add(G);const re=new yi;u.add(re);const x=new yi;u.add(x);const P=new yi;u.add(P);const te=new yi;u.add(te);const ce=new yi;u.add(ce);const k=new yi;u.add(k);const ne=new fh(.4,16,12),Q=new No({color:16366681}),ae=new No({color:16757322}),H=new No({color:9081766}),X=new vi({color:16366681,transparent:!0,opacity:.8}),q=new vi({color:16757322,transparent:!0,opacity:.8}),se=new vi({color:9081766,transparent:!0,opacity:.7}),de=new vi({color:16366681,transparent:!0,opacity:.35}),Ke=new vi({color:16730698,transparent:!0,opacity:.9}),ee=new vi({color:16366681,transparent:!0,opacity:.95}),le=new No({vertexColors:!0,roughness:1,metalness:0,side:ci,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),be=new vi({color:15134195,transparent:!0,opacity:.55}),Fe=new Map,Xe=new Map,Ue=new Map,ft=new Map,$e=new Map,W=new Map;let gt=null,Pe=null,ke=null,Ge="",Tt=null;function lt(ie){const ge=ie.material;ge.map&&ge.map.dispose(),ge.dispose()}function A(){const ie=h.current;if(ie===Tt)return;Tt=ie;for(const xe of Ue.values())lt(xe),ce.remove(xe);if(Ue.clear(),!ie||ie.length===0)return;const ge={scale:2.8,background:!1},Me=xe=>/^type:\s*\d+\s*$/i.test(xe.trim()),me=xe=>{let He=(xe||"").trim();return He=He.replace(/^#AR-MapLocation_/i,""),He=He.replace(/_/g," ").trim(),He};for(const xe of ie){if(!xe||typeof xe.name!="string"||!xe.name)continue;const He=me(xe.name);if(!He||Me(He))continue;const Ze=xe.pos;if(!Ze||!Number.isFinite(Ze.x)||!Number.isFinite(Ze.y)||!Number.isFinite(Ze.z))continue;const st=Y(He,ge);he(st,ge),st.frustumCulled=!1,st.material.depthWrite=!1,st.position.set(Ze.x,Ze.y+5,Ze.z),ce.add(st);const ot=Math.round(Ze.x),At=Math.round(Ze.z),_t=`${He}|${ot}|${At}`;Ue.set(_t,st)}}let w=null;function Y(ie,ge){const Me=document.createElement("canvas"),me=Me.getContext("2d");if(!me){const B=new ag(document.createElement("canvas")),j=new od({map:B,transparent:!0});return new tg(j)}const xe=16;me.font=`600 ${xe}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;const He=10,Ze=6,st=me.measureText(ie),ot=Math.ceil(st.width),At=Math.max(8,ot+He*2),_t=xe+Ze*2,Ht=2;if(Me.width=At*Ht,Me.height=_t*Ht,me.setTransform(Ht,0,0,Ht,0,0),me.clearRect(0,0,At,_t),ge.background){me.fillStyle="rgba(0,0,0,0.55)";const B=6;me.beginPath(),me.moveTo(B,0),me.lineTo(At-B,0),me.quadraticCurveTo(At,0,At,B),me.lineTo(At,_t-B),me.quadraticCurveTo(At,_t,At-B,_t),me.lineTo(B,_t),me.quadraticCurveTo(0,_t,0,_t-B),me.lineTo(0,B),me.quadraticCurveTo(0,0,B,0),me.closePath(),me.fill()}me.font=`600 ${xe}px system-ui, -apple-system, Segoe UI, Roboto, Arial`,me.fillStyle="rgba(255,255,255,0.95)",me.textBaseline="middle",me.fillText(ie,He,Math.floor(_t/2));const Ft=new ag(Me);Ft.needsUpdate=!0;const hn=new od({map:Ft,transparent:!0,depthTest:!1}),T=new tg(hn);return T.userData={canvas:Me,texture:Ft,text:ie},T.center.set(.5,0),T}function he(ie,ge){const me=ie.material.map,xe=me&&me.image;if(!xe||!xe.width||!xe.height){ie.scale.set(2.5*ge.scale,.8*ge.scale,1);return}const He=xe.width/xe.height,Ze=.85*ge.scale,st=Ze*He;ie.scale.set(st,Ze,1)}function ue(ie,ge,Me){const me=ie.userData;if(me&&me.text===ge){he(ie,Me);return}const xe=ie.material,He=xe.map;He&&He.dispose(),xe.dispose();const Ze=Y(ge,Me);ie.material=Ze.material,ie.userData=Ze.userData,he(ie,Me)}const J={rmbDown:!1,pointerLocked:!1,yaw:0,pitch:0,speed:20,keys:Object.create(null)};let Oe=0;function Ce(){const ie=y.clientWidth,ge=y.clientHeight;p.setSize(ie,ge,!1),m.aspect=ie/ge,m.updateProjectionMatrix()}const Le=new ResizeObserver(()=>Ce());Le.observe(y),Ce();function et(){const ie=new Set,ge=o.current,Me=a.current,me=n.current;for(const xe of me){ie.add(xe.playerId);let He=Fe.get(xe.playerId);if(!He){He=new Qn(ne,Q),He.castShadow=!1,He.receiveShadow=!1,He.userData={playerId:xe.playerId},Fe.set(xe.playerId,He),re.add(He);const Ht=Y(xe.label||String(xe.playerId),ge);Ht.position.set(0,1.2,0),he(Ht,ge),Xe.set(xe.playerId,Ht),He.add(Ht);const Ft=new cn,hn=new Float32Array(6);Ft.setAttribute("position",new ln(hn,3));const T=new ad(Ft,X);ft.set(xe.playerId,T),re.add(T)}const Ze=!!xe.isDead,st=!!xe.inVehicle,ot=Ze?H:st?ae:Q;He.material!==ot&&(He.material=ot),He.position.set(xe.pos.x,xe.pos.y,xe.pos.z);const At=Xe.get(xe.playerId);At&&(At.visible=ge.enabled,ge.enabled&&ue(At,xe.label||String(xe.playerId),ge));const _t=ft.get(xe.playerId);if(_t){if(_t.visible=Me,!Me)continue;const Ht=Ze?se:st?q:X;_t.material!==Ht&&(_t.material=Ht);const Ft=xe.aimDir,hn=_t.geometry.getAttribute("position");if(!Ft)hn.setXYZ(0,xe.pos.x,xe.pos.y,xe.pos.z),hn.setXYZ(1,xe.pos.x,xe.pos.y,xe.pos.z),hn.needsUpdate=!0;else{const T=Ft.x,B=Ft.y,j=Ft.z,K=Math.max(1e-4,Math.sqrt(T*T+B*B+j*j)),$=T/K,Re=B/K,ze=j/K,Ae=6,Be=xe.pos.x,at=xe.pos.y+.6,qe=xe.pos.z,E=Be+$*Ae,F=at+Re*Ae,U=qe+ze*Ae;hn.setXYZ(0,Be,at,qe),hn.setXYZ(1,E,F,U),hn.needsUpdate=!0}}}for(const[xe,He]of Fe){if(ie.has(xe))continue;re.remove(He),Fe.delete(xe);const Ze=Xe.get(xe);if(Ze){He.remove(Ze);const ot=Ze.material;ot.map&&ot.map.dispose(),ot.dispose(),Xe.delete(xe)}const st=ft.get(xe);st&&(re.remove(st),st.geometry.dispose(),ft.delete(xe))}}function rt(){const ie=l.current;if(!ie||!Array.isArray(ie.points)||ie.points.length<2){w&&(x.remove(w),w.geometry.dispose(),w=null);return}const ge=ie.points,Me=new Float32Array(ge.length*3);for(let me=0;me<ge.length;me++)Me[me*3+0]=ge[me].x,Me[me*3+1]=ge[me].y+.15,Me[me*3+2]=ge[me].z;if(w){const me=w.geometry;me.setAttribute("position",new ln(Me,3)),me.getAttribute("position").needsUpdate=!0,me.computeBoundingSphere()}else{const me=new cn;me.setAttribute("position",new ln(Me,3)),w=new ad(me,de),x.add(w)}}function fe(){const ie=c.current,ge=new Set;for(let Me=0;Me<ie.length;Me++){const me=ie[Me],xe=`${Math.round(me.x*10)}|${Math.round(me.y*10)}|${Math.round(me.z*10)}|${Me}`;ge.add(xe);let He=$e.get(xe);if(!He){const st=new cn,ot=new Float32Array([-1.2,0,-1.2,1.2,0,1.2,-1.2,0,1.2,1.2,0,-1.2]);st.setAttribute("position",new ln(ot,3)),He=new Xo(st,Ke),$e.set(xe,He),P.add(He)}He.position.set(me.x,me.y+.1,me.z)}for(const[Me,me]of $e)ge.has(Me)||(P.remove(me),me.geometry.dispose(),$e.delete(Me))}function Et(){const ie=f.current,ge=new Set;for(let Me=0;Me<ie.length;Me++){const me=ie[Me],xe=`${Math.round(me.x*10)}|${Math.round(me.y*10)}|${Math.round(me.z*10)}|${Me}`;ge.add(xe);let He=W.get(xe);if(!He){const st=new cn,ot=new Float32Array([-1.8,0,-1.8,1.8,0,1.8,-1.8,0,1.8,1.8,0,-1.8]);st.setAttribute("position",new ln(ot,3)),He=new Xo(st,ee),W.set(xe,He),te.add(He)}He.position.set(me.x,me.y+.15,me.z)}for(const[Me,me]of W)ge.has(Me)||(te.remove(me),me.geometry.dispose(),W.delete(Me))}function it(){const ie=new ts().setFromAxisAngle(new V(0,1,0),J.yaw),ge=new ts().setFromAxisAngle(new V(1,0,0),J.pitch);m.quaternion.copy(ie).multiply(ge)}function Qe(ie){ie.preventDefault()}function Ve(ie){ie.button===2&&(J.rmbDown=!0,document.pointerLockElement!==y&&y.requestPointerLock())}function Ne(ie){ie.button===2&&(J.rmbDown=!1,document.pointerLockElement===y&&document.exitPointerLock())}function tt(){if(J.pointerLocked=document.pointerLockElement===y,J.pointerLocked){const ie=new ya().setFromQuaternion(m.quaternion,"YXZ");J.yaw=ie.y,J.pitch=ie.x}}function St(ie){if(!J.pointerLocked)return;const ge=ie.movementX||0,Me=ie.movementY||0;J.yaw-=ge*.002,J.pitch-=Me*.002,J.pitch=ju(J.pitch,-Math.PI/2+.01,Math.PI/2-.01)}function vt(ie){if(typeof s.current=="number"){const xe=ie.deltaY<0?.9:1.1,He=we.clone().multiplyScalar(xe),Ze=He.length(),st=ju(Ze,6,800);Ze>1e-4&&He.multiplyScalar(st/Ze),we.copy(He);return}const Me=ie.deltaY<0?1:-1,me=J.speed+Me*Math.max(1,J.speed*.1);J.speed=ju(me,1,400)}function ct(ie){J.keys[ie.code]=!0}function Ye(ie){J.keys[ie.code]=!1}function N(){const ie=d.current;if(!ie){b.visible=!0,gt&&(gt.geometry.dispose(),k.remove(gt),gt=null,Ge=""),Pe&&(Pe.geometry.dispose(),k.remove(Pe),Pe=null),ke&&(ke.geometry.dispose(),ke.material.dispose(),k.remove(ke),ke=null);return}b.visible=!1;const ge=`${ie.gridW}x${ie.gridH}|${ie.bbMin.x},${ie.bbMin.y},${ie.bbMin.z}|${ie.bbMax.x},${ie.bbMax.y},${ie.bbMax.z}|${ie.heights.length}`;if(ge===Ge)return;Ge=ge,gt&&(gt.geometry.dispose(),k.remove(gt),gt=null),Pe&&(Pe.geometry.dispose(),k.remove(Pe),Pe=null),ke&&(ke.geometry.dispose(),ke.material.dispose(),k.remove(ke),ke=null);const Me=Math.max(2,Math.floor(ie.gridW)),me=Math.max(2,Math.floor(ie.gridH)),xe=Me*me;if(!Array.isArray(ie.heights)||ie.heights.length<xe)return;const He=ie.bbMax.x-ie.bbMin.x,Ze=ie.bbMax.z-ie.bbMin.z;if(!Number.isFinite(He)||!Number.isFinite(Ze)||He<=0||Ze<=0)return;const st=new oo(He,Ze,Me-1,me-1);st.rotateX(-Math.PI/2);const ot=st.attributes.position;let At=1/0,_t=-1/0;for(let Ae=0;Ae<xe;Ae++){const Be=ie.heights[Ae];typeof Be!="number"||!Number.isFinite(Be)||(Be<At&&(At=Be),Be>_t&&(_t=Be))}(!Number.isFinite(At)||!Number.isFinite(_t)||_t-At<.001)&&(At=0,_t=1);const Ht=_t-At,Ft=new Float32Array(xe*3),hn=new ut(988708),T=new ut(1910328),B=new ut(3293278),j=0,K=new ut(735846);for(let Ae=0;Ae<me;Ae++){const Be=Ae,at=Ae;for(let qe=0;qe<Me;qe++){const E=qe+Me*Be,F=qe+Me*at,U=ie.heights[E];ot.setY(F,U);let I=(U-At)/Ht;Number.isFinite(I)||(I=0),I=Math.min(1,Math.max(0,I)),I=Math.pow(I,.65);const Z=I<.5?hn.clone().lerp(T,I/.5):T.clone().lerp(B,(I-.5)/.5);Number.isFinite(U)&&U<j&&Z.lerp(K,.28),Ft[F*3+0]=Z.r,Ft[F*3+1]=Z.g,Ft[F*3+2]=Z.b}}ot.needsUpdate=!0,st.setAttribute("color",new ln(Ft,3)),st.computeVertexNormals(),gt=new Qn(st,le),gt.receiveShadow=!1,gt.castShadow=!1;const $=(ie.bbMin.x+ie.bbMax.x)/2,Re=(ie.bbMin.z+ie.bbMax.z)/2;if(gt.position.set($,0,Re),k.add(gt),At<j&&_t>j){const Ae=new oo(He,Ze,1,1);Ae.rotateX(-Math.PI/2);const Be=new No({color:1732264,transparent:!0,opacity:.26,roughness:.15,metalness:0,side:ci,depthWrite:!1});ke=new Qn(Ae,Be),ke.receiveShadow=!1,ke.castShadow=!1,ke.position.set($,j,Re),k.add(ke)}const ze=new Nb(st,35);Pe=new Xo(ze,be),Pe.position.copy(gt.position),k.add(Pe)}y.addEventListener("contextmenu",Qe),y.addEventListener("mousedown",Ve),window.addEventListener("mouseup",Ne),document.addEventListener("pointerlockchange",tt),window.addEventListener("mousemove",St),y.addEventListener("wheel",vt,{passive:!0}),window.addEventListener("keydown",ct),window.addEventListener("keyup",Ye);let pe=performance.now(),_e=0,Ie=0,We=0,xt=null;const we=new V(0,25,60);function Ut(ie){const ge=Math.min((ie-pe)/1e3,.05);pe=ie;const Me=g.current;Me.towns&&(A(),Me.towns=!1),Me.markers&&ie-Ie>=50&&(et(),Me.markers=!1,Ie=ie),Me.trail&&ie-We>=75&&(rt(),Me.trail=!1,We=ie),Me.death&&(fe(),Me.death=!1),Me.ping&&(Et(),Me.ping=!1),Me.terrain&&(N(),Me.terrain=!1);const me=s.current;if(typeof me=="number"){const st=n.current.find(ot=>ot&&ot.playerId===me);if(st){const ot=st.pos;if(me!==xt){we.set(m.position.x-ot.x,m.position.y-ot.y,m.position.z-ot.z);const _t=we.length();(!Number.isFinite(we.x)||!Number.isFinite(we.y)||!Number.isFinite(we.z)||!Number.isFinite(_t)||_t<1||_t>500)&&we.set(0,25,60),xt=me}if(m.position.set(ot.x+we.x,ot.y+we.y,ot.z+we.z),m.lookAt(ot.x,ot.y+1.5,ot.z),J.rmbDown||J.pointerLocked){const _t=new V(0,0,-1).applyQuaternion(m.quaternion),Ht=new V(1,0,0).applyQuaternion(m.quaternion),Ft=new V(0,1,0);J.keys.KeyW&&we.addScaledVector(_t,J.speed*ge),J.keys.KeyS&&we.addScaledVector(_t,-J.speed*ge),J.keys.KeyA&&we.addScaledVector(Ht,-J.speed*ge),J.keys.KeyD&&we.addScaledVector(Ht,J.speed*ge),J.keys.KeyQ&&we.addScaledVector(Ft,J.speed*ge),J.keys.KeyZ&&we.addScaledVector(Ft,-J.speed*ge)}m.position.set(ot.x+we.x,ot.y+we.y,ot.z+we.z),m.lookAt(ot.x,ot.y+1.5,ot.z)}}else xt=null;const xe=r.current;if(me===null&&xe!==Oe){Oe=xe;const Ze=i.current;Ze&&(m.position.set(Ze.x,Ze.y+25,Ze.z+60),m.lookAt(Ze.x,Ze.y+1.5,Ze.z))}if(J.pointerLocked&&me===null&&it(),(J.rmbDown||J.pointerLocked)&&me===null){const Ze=new V(0,0,-1).applyQuaternion(m.quaternion),st=new V(1,0,0).applyQuaternion(m.quaternion),ot=new V(0,1,0);J.keys.KeyW&&m.position.addScaledVector(Ze,J.speed*ge),J.keys.KeyS&&m.position.addScaledVector(Ze,-J.speed*ge),J.keys.KeyA&&m.position.addScaledVector(st,-J.speed*ge),J.keys.KeyD&&m.position.addScaledVector(st,J.speed*ge),J.keys.KeyQ&&m.position.addScaledVector(ot,J.speed*ge),J.keys.KeyZ&&m.position.addScaledVector(ot,-J.speed*ge)}p.render(u,m),_e=window.requestAnimationFrame(Ut)}return _e=window.requestAnimationFrame(Ut),()=>{window.cancelAnimationFrame(_e),y.removeEventListener("contextmenu",Qe),y.removeEventListener("mousedown",Ve),window.removeEventListener("mouseup",Ne),document.removeEventListener("pointerlockchange",tt),window.removeEventListener("mousemove",St),y.removeEventListener("wheel",vt),window.removeEventListener("keydown",ct),window.removeEventListener("keyup",Ye),Le.disconnect(),ne.dispose(),Q.dispose(),ae.dispose(),H.dispose(),X.dispose(),q.dispose(),se.dispose(),de.dispose(),Ke.dispose(),ee.dispose(),le.dispose(),be.dispose(),w&&(w.geometry.dispose(),w=null),gt&&(gt.geometry.dispose(),gt=null),Pe&&(Pe.geometry.dispose(),Pe=null);for(const ie of $e.values())ie.geometry.dispose();for(const ie of W.values())ie.geometry.dispose();p.dispose()}},[]),M.jsx("div",{style:{width:"100%",height:"100%",minHeight:400,position:"relative"},children:M.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block",borderRadius:8}})})}function sn(t){if(!t)return null;if(typeof t=="object"){if(Array.isArray(t)){if(t.length<3)return null;const r=t[0],s=t[1],o=t[2];return typeof r!="number"||typeof s!="number"||typeof o!="number"?null:{x:r,y:s,z:o}}const e=t.x,n=t.y,i=t.z;return typeof e!="number"||typeof n!="number"||typeof i!="number"?null:{x:e,y:n,z:i}}if(typeof t=="string"){const e=t.trim().split(/\s+/g);if(e.length<3)return null;const n=Number(e[0]),i=Number(e[1]),r=Number(e[2]);return!Number.isFinite(n)||!Number.isFinite(i)||!Number.isFinite(r)?null:{x:n,y:i,z:r}}return null}function Xu(t,e=30){return!t||typeof t.x!="number"||typeof t.z!="number"?!0:Math.abs(t.x)<=e&&Math.abs(t.z)<=e}function $u(t){if(!t)return null;const e=sn(t.bbMin),n=sn(t.bbMax),i=typeof t.gridW=="number"?t.gridW:0,r=typeof t.gridH=="number"?t.gridH:0,s=Array.isArray(t.heights)?t.heights.filter(o=>typeof o=="number"):[];return e&&n&&i>=2&&r>=2&&s.length>=i*r?{bbMin:e,bbMax:n,gridW:i,gridH:r,heights:s}:null}function Yu(t){if(!t)return null;const e=Array.isArray(t.descriptors)?t.descriptors:Array.isArray(t.towns)?t.towns:[];if(e.length===0)return null;const n=[];for(const i of e){if(!i)continue;const r=typeof i.name=="string"?i.name.trim():"",s=typeof i.type=="string"?i.type.trim():"",o=typeof i.baseType=="number"?i.baseType:null,a=r||s||(o!==null?`type:${o}`:"descriptor"),l=sn(i.pos);l&&n.push({name:a,pos:l})}return n.length===0?null:n}function fg(t,e,n){if(!t||!t.bbMin||!t.bbMax||!Array.isArray(t.heights))return null;const i=Math.floor(t.gridW),r=Math.floor(t.gridH);if(i<2||r<2||t.heights.length<i*r)return null;const s=t.bbMin.x,o=t.bbMax.x,a=t.bbMin.z,l=t.bbMax.z,c=o-s,f=l-a;if(!Number.isFinite(c)||!Number.isFinite(f)||c<=0||f<=0)return null;const d=(e-s)/c,h=(n-a)/f;if(!Number.isFinite(d)||!Number.isFinite(h)||d<0||d>1||h<0||h>1)return null;const g=d*(i-1),_=h*(r-1),y=Math.floor(g),p=Math.floor(_),u=Math.min(i-1,y+1),m=Math.min(r-1,p+1),v=g-y,S=_-p,L=y+i*p,C=u+i*p,b=y+i*m,G=u+i*m,re=t.heights[L],x=t.heights[C],P=t.heights[b],te=t.heights[G];if(![re,x,P,te].every(ne=>typeof ne=="number"&&Number.isFinite(ne)))return null;const ce=re*(1-v)+x*v,k=P*(1-v)+te*v;return ce*(1-S)+k*S}function Bb(t){const e=ji();return D.useMemo(()=>{const i=new URLSearchParams(e.search).get(t);return i||null},[e.search,t])}function dl(t){const e=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,n=Math.floor(e/1e3),i=Math.floor(n/3600),r=Math.floor(n%3600/60),s=n%60,o=String(i).padStart(2,"0"),a=String(r).padStart(2,"0"),l=String(s).padStart(2,"0");return`${o}:${a}:${l}`}function qu(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function Hb(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function Gb(t,e){if(!Array.isArray(t)||t.length===0)return[];const n=new Map;for(const r of t){const s=e(r).trim();s&&n.set(s,(n.get(s)||0)+1)}const i=Array.from(n.entries()).map(([r,s])=>({name:r,count:s}));return i.sort((r,s)=>s.count-r.count||r.name.localeCompare(s.name)),i}function lc(t){const e=t.payload;return e&&typeof e.tsMs=="number"?e.tsMs:null}function hl(t){const e=t.payload;return`${t.receivedAt}|${e&&e.tsMs}|${e&&e.type}`}function dg(t,e,n){if(!Number.isFinite(e)||e<=0)return[];if(t.length<=e)return t;if(typeof n!="number"||!Number.isFinite(n))return t.slice(t.length-e);const i=lc(t[0]),r=lc(t[t.length-1]);if(typeof i!="number"||typeof r!="number")return t.slice(t.length-e);const s=Math.abs(n-i),o=Math.abs(r-n),a=t.length-e;return s>o?t.slice(a):t.slice(0,t.length-a)}function Vb(){const t=Bb("serverId"),[e,n]=D.useState([]),[i,r]=D.useState(""),[s,o]=D.useState(null),[a,l]=D.useState(null),[c,f]=D.useState(null),[d,h]=D.useState(!1),[g,_]=D.useState(!0),[y,p]=D.useState({minTsMs:null,maxTsMs:null}),[u,m]=D.useState(null),[v,S]=D.useState(null),[L,C]=D.useState(null),[b,G]=D.useState([]),[re,x]=D.useState(""),[P,te]=D.useState(null),[ce,k]=D.useState(null),[ne,Q]=D.useState(0),[ae,H]=D.useState(!0),[X,q]=D.useState("players"),[se,de]=D.useState(!1),[Ke,ee]=D.useState(!0),[le,be]=D.useState(null),[Fe,Xe]=D.useState(null),Ue=D.useRef(new Map),[ft,$e]=D.useState(!1),[W,gt]=D.useState(1),Pe=D.useRef(null),[ke,Ge]=D.useState(!0),[Tt,lt]=D.useState(1),[A,w]=D.useState(!0),[Y,he]=D.useState(!0),[ue,J]=D.useState(!0),[Oe,Ce]=D.useState(!0),[Le,et]=D.useState(!0),[rt,fe]=D.useState(20),[Et,it]=D.useState([]),Qe=D.useRef(0),[Ve,Ne]=D.useState(()=>{try{const E=window.localStorage.getItem("replay.eventClickOffsetSeconds"),F=E!==null?Number(E):5;return Number.isFinite(F)?Math.max(0,Math.min(60,Math.floor(F))):5}catch{return 5}}),[tt,St]=D.useState(null),[vt,ct]=D.useState(null),[Ye,N]=D.useState([]),pe=D.useRef(null),_e=D.useRef(!1),Ie=D.useRef(!1),We=D.useRef(!1),xt=D.useRef(new Map);D.useEffect(()=>{t&&t.length>0&&r(t)},[t]),D.useEffect(()=>{Pe.current=u},[u]),D.useEffect(()=>{try{window.localStorage.setItem("replay.eventClickOffsetSeconds",String(Ve))}catch{}},[Ve]),D.useEffect(()=>{function E(F){F.code==="KeyF"&&vt!==null&&ct(null)}return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[vt]),D.useEffect(()=>{let E=!1;async function F(){try{const U=await cM();if(E)return;n(U)}catch(U){if(E)return;const I=U instanceof Error?U.message:"Failed to load servers";f(I)}}return F(),()=>{E=!0}},[]),D.useEffect(()=>{let E=!1;async function F(){try{const I=await Yf();if(E)return;o(I),l(null)}catch(I){if(E)return;const Z=I instanceof Error?I.message:"Failed to load server status";l(Z)}}F();const U=window.setInterval(F,15e3);return()=>{E=!0,window.clearInterval(U)}},[]);const we=i.length>0?i:null;D.useEffect(()=>{S(null),C(null)},[we]),D.useEffect(()=>{if(!we)return;const E=we;let F=!1;async function U(){h(!0),f(null);try{const[I,Z,O,R]=await Promise.all([Pp(E),Lp(E),lu(E).catch(()=>null),cu(E).catch(()=>null)]);if(F)return;p({minTsMs:I.minTsMs,maxTsMs:I.maxTsMs}),G(Z);const z=$u(O);z&&S(z);const oe=Yu(R);if(oe&&C(oe),typeof I.maxTsMs=="number"){m(I.maxTsMs);const ye=await au({serverId:E,untilTsMs:I.maxTsMs,limit:5e3,tail:!0}).catch(()=>[]);if(!F){N(ye);let Se=null;for(const Ee of ye){const nt=Ee.payload;nt&&typeof nt.tsMs=="number"&&(Se===null||nt.tsMs>Se)&&(Se=nt.tsMs)}pe.current=Se!==null?Se:Math.max(0,I.maxTsMs-15e3)}}Qe.current=Date.now(),$e(!1)}catch(I){if(F)return;const Z=I instanceof Error?I.message:"Failed to load replay data";f(Z)}finally{F||h(!1)}}return U(),()=>{F=!0}},[we]),D.useEffect(()=>{if(!we||v||Ie.current||!Ye.some(U=>{const I=U.payload;return I&&(I.type==="map"||I.type==="terrain")}))return;let F=!1;return Ie.current=!0,lu(we).then(U=>{if(F)return;const I=$u(U);I&&S(I)}).catch(()=>{}).finally(()=>{Ie.current=!1}),()=>{F=!0}},[Ye,we,v]),D.useEffect(()=>{if(!we||L||We.current||!Ye.some(U=>{const I=U.payload;return I&&(I.type==="map"||I.type==="terrain"||I.type==="towns"||I.type==="descriptors")}))return;let F=!1;return We.current=!0,cu(we).then(U=>{if(F)return;const I=Yu(U);I&&C(I)}).catch(()=>{}).finally(()=>{We.current=!1}),()=>{F=!0}},[Ye,we,L]),D.useEffect(()=>{if(!we||g||!ft||typeof y.maxTsMs!="number")return;let E=0,F=performance.now();function U(I){const Z=Math.min(250,Math.max(0,I-F));F=I;const O=Pe.current;if(typeof O=="number"){const R=y.maxTsMs;let z=O+Z*W;z>=R&&(z=R,$e(!1)),Pe.current=z,m(z)}E=window.requestAnimationFrame(U)}return E=window.requestAnimationFrame(U),()=>window.cancelAnimationFrame(E)},[ft,g,W,y.maxTsMs,we]),D.useEffect(()=>{if(!we)return;const E=we;let F=!1,U=null;async function I(){try{const Z=await Lp(E);F||G(Z)}catch{}F||(U=window.setTimeout(I,g?3e3:5e3))}return I(),()=>{F=!0,U!==null&&window.clearTimeout(U)}},[g,we]),D.useEffect(()=>{if(!we)return;const E=we;let F=!1,U=null;async function I(){try{const Z=await Pp(E);if(F)return;const O=pe.current;typeof O=="number"&&typeof Z.maxTsMs=="number"&&Z.maxTsMs+1e3<O&&(pe.current=null,Qe.current=Date.now(),N([{receivedAt:Date.now(),payload:{type:"restart",tsMs:Z.maxTsMs,event:{reason:"server_restart_or_history_cleared"}}}]),it([]),$e(!1),Ie.current=!1,lu(E).then(R=>{if(F)return;const z=$u(R);z&&S(z)}).catch(()=>{}),We.current=!1,cu(E).then(R=>{if(F)return;const z=Yu(R);z&&C(z)}).catch(()=>{})),p({minTsMs:Z.minTsMs,maxTsMs:Z.maxTsMs}),g&&typeof Z.maxTsMs=="number"&&m(Z.maxTsMs)}catch{}F||(U=window.setTimeout(I,g?2e3:3e3))}return I(),()=>{F=!0,U!==null&&window.clearTimeout(U)}},[g,we]),D.useEffect(()=>{if(!we)return;const E=we;let F=!1,U=null;async function I(){const Z=y.maxTsMs;if(typeof Z!="number"){F||(U=window.setTimeout(I,1e3));return}const O=pe.current,R=typeof O=="number"?O+1:Math.max(0,Z-8e3);try{let ye=R;const Se=[];let Ee=typeof pe.current=="number"?pe.current:null;for(let nt=0;nt<2;nt++){const Je=await au({serverId:E,sinceTsMs:ye,untilTsMs:Z,limit:1500});Se.push(...Je);let je=null;for(const wt of Je){const pt=lc(wt);pt!==null&&((je===null||pt>je)&&(je=pt),(Ee===null||pt>Ee)&&(Ee=pt))}if(Je.length<1500||je===null||je>=Z)break;ye=je+1}if(F)return;Se.length>0&&N(nt=>{const Je=nt.slice(-500),je=new Set;for(const pt of Je)je.add(hl(pt));const wt=nt.slice();for(const pt of Se){const Wn=hl(pt);je.has(Wn)||wt.push(pt)}return dg(wt,25e4,Pe.current)}),typeof Ee=="number"&&(pe.current=Ee)}catch(z){if(!F){const oe=z instanceof Error?z.message:"Failed to fetch replay events";f(oe)}}F||(U=window.setTimeout(I,g?1e3:1500))}return I(),()=>{F=!0,U!==null&&window.clearTimeout(U)}},[g,y.maxTsMs,we]);const Ut=D.useMemo(()=>{let E=null,F=null;for(const U of Ye){const I=U.payload,Z=I&&typeof I.tsMs=="number"?I.tsMs:null;Z!==null&&((E===null||Z<E)&&(E=Z),(F===null||Z>F)&&(F=Z))}return{minTsMs:E,maxTsMs:F}},[Ye]);D.useEffect(()=>{if(!we)return;const E=we,F=u,U=Ut.minTsMs,I=y.minTsMs;if(typeof F!="number"||typeof U!="number"||typeof I!="number"||U<=I+1||F>U+2e3||_e.current)return;_e.current=!0;const O=Math.max(0,Math.floor(U)-1);au({serverId:E,untilTsMs:O,limit:5e3,tail:!0}).then(R=>{R.length!==0&&N(z=>{const oe=z.slice(0,800),ye=new Set;for(const nt of oe)ye.add(hl(nt));const Se=[];for(const nt of R){const Je=hl(nt);ye.has(Je)||Se.push(nt)}const Ee=Se.concat(z);return dg(Ee,25e4,Pe.current)})}).catch(()=>{}).finally(()=>{_e.current=!1})},[u,Ut.minTsMs,y.minTsMs,we]);const ie=D.useMemo(()=>{const E=[];for(const F of Ye){const U=F.payload;!U||typeof U!="object"||U.type==="snapshot"&&typeof U.tsMs=="number"&&Array.isArray(U.players)&&E.push({tsMs:U.tsMs,players:U.players})}return E.sort((F,U)=>F.tsMs-U.tsMs),E},[Ye]),ge=D.useMemo(()=>{const E=new Map;for(const U of b){if(!U||typeof U.playerId!="number")continue;const I=typeof U.name=="string"&&U.name.trim().length>0?U.name.trim():String(U.playerId);E.set(U.playerId,I)}for(const U of Ye){const I=U.payload;if(!I||typeof I!="object"||I.type!=="join"&&I.type!=="disconnect")continue;const Z=I.event,O=Z&&typeof Z.playerId=="number"?Z.playerId:null;if(O===null)continue;const R=Z&&typeof Z.name=="string"&&Z.name.trim().length>0?Z.name.trim():"";R?E.set(O,R):E.has(O)||E.set(O,String(O))}for(const U of ie)for(const I of U.players){if(!I||typeof I!="object")continue;const Z=I.playerId;if(typeof Z!="number")continue;const O=typeof I.name=="string"&&I.name.trim().length>0?I.name.trim():"";O?E.set(Z,O):E.has(Z)||E.set(Z,String(Z))}const F=Array.from(E.entries()).map(([U,I])=>({playerId:U,name:I}));return F.sort((U,I)=>U.name.localeCompare(I.name)||U.playerId-I.playerId),F},[Ye,b,ie]),Me=D.useMemo(()=>{const E=new Map;for(const F of ie){const U=F.tsMs;for(const I of F.players){if(!I||typeof I!="object")continue;const Z=I.playerId;if(typeof Z!="number")continue;let O=E.get(Z);O||(O=[],E.set(Z,O)),O.push({tsMs:U,player:I})}}return E},[ie]),me=D.useMemo(()=>{const E=new Map;for(const F of Ye){const U=F.payload;if(!U||typeof U!="object"||U.type!=="join"&&U.type!=="disconnect"||typeof U.tsMs!="number")continue;const I=U.event,Z=I&&typeof I.playerId=="number"?I.playerId:null;if(Z===null)continue;let O=E.get(Z);O||(O=[],E.set(Z,O)),O.push({tsMs:U.tsMs,type:U.type})}for(const F of E.values())F.sort((U,I)=>U.tsMs-I.tsMs);return E},[Ye]),xe=D.useMemo(()=>(E,F)=>{const U=Me.get(E);if(!U||U.length===0)return null;let I=0,Z=U.length-1,O=-1;for(;I<=Z;){const R=I+Z>>1;U[R].tsMs<=F?(O=R,I=R+1):Z=R-1}return O<0?null:U[O]},[Me]),He=D.useMemo(()=>(E,F,U)=>{const I=Me.get(E);if(!I||I.length===0)return null;let Z=0,O=I.length-1,R=-1;for(;Z<=O;){const z=Z+O>>1;I[z].tsMs<=F?(R=z,Z=z+1):O=z-1}if(R<0)return null;for(let z=R;z>=0;z--){const oe=I[z],ye=F-oe.tsMs;if(ye<0)continue;if(ye>U)break;const Se=oe.player;if(!Se||typeof Se!="object")continue;const Ee=Se.inventory,nt=Se.attachments,Je=Se.weapon,je={tsMs:oe.tsMs};if(Array.isArray(Ee)&&(je.inventory=Ee),Array.isArray(nt)&&(je.attachments=nt),Je&&typeof Je=="object"&&typeof Je.name=="string"&&Je.name.length>0&&(je.weapon=Je),"inventory"in je||"attachments"in je||"weapon"in je)return je}return null},[Me]),Ze=D.useMemo(()=>(E,F)=>{const U=me.get(E);if(!U||U.length===0)return null;let I=0,Z=U.length-1,O=-1;for(;I<=Z;){const R=I+Z>>1;U[R].tsMs<=F?(O=R,I=R+1):Z=R-1}return O<0?null:U[O].type==="join"},[me]),st=D.useMemo(()=>(E,F,U=6e4)=>{if(typeof E!="number"||E<0||typeof F!="number"||!Number.isFinite(F)||ie.length===0)return null;const I=F+Math.max(1e3,Math.min(5*60*1e3,Math.floor(U)));let Z=0,O=ie.length-1,R=ie.length;for(;Z<=O;){const z=Z+O>>1;ie[z].tsMs>=F?(R=z,O=z-1):Z=z+1}for(let z=R;z<ie.length;z++){const oe=ie[z];if(oe.tsMs>I)break;const ye=oe.players.find(Ee=>Ee&&typeof Ee=="object"&&Ee.playerId===E);if(!ye)continue;const Se=sn(ye.pos);if(Se&&!Xu(Se,30))return Se}return null},[ie]),ot=D.useMemo(()=>(E,F,U=6e4)=>{if(typeof E!="number"||E<0||typeof F!="number"||!Number.isFinite(F)||ie.length===0)return null;const I=F-Math.max(1e3,Math.min(5*60*1e3,Math.floor(U)));let Z=0,O=ie.length-1,R=-1;for(;Z<=O;){const z=Z+O>>1;ie[z].tsMs<=F?(R=z,Z=z+1):O=z-1}for(let z=R;z>=0;z--){const oe=ie[z];if(oe.tsMs<I)break;const ye=oe.players.find(Ee=>Ee&&typeof Ee=="object"&&Ee.playerId===E);if(!ye)continue;const Se=sn(ye.pos);if(Se&&!Xu(Se,30))return Se}return null},[ie]),At=D.useMemo(()=>{const E=new Map;for(const F of Ye){const U=F.payload;if(!U||typeof U!="object"||U.type!=="kill"&&U.type!=="death"||typeof U.tsMs!="number")continue;const I=U.event,Z=I&&typeof I.victimPlayerId=="number"?I.victimPlayerId:null;if(Z===null)continue;const O=U.tsMs+3e4,R=E.get(Z)||0;O>R&&E.set(Z,O)}return E},[Ye]),_t=D.useMemo(()=>({enabled:ke,scale:Math.min(2,Math.max(.5,Tt)),background:A}),[A,Tt,ke]),Ht=D.useMemo(()=>{const E=u;if(typeof E!="number")return[];if(Me.size===0)return[];const F=new Map;for(const Z of ge)F.set(Z.playerId,Z.name);const U=3e4,I=[];for(const Z of ge){const O=Z.playerId,R=xe(O,E);if(!R)continue;const z=Ze(O,E);if(z===!1||z===null&&E-R.tsMs>U)continue;const oe=R.player,ye=sn(oe.pos);if(!ye)continue;const Se=!!oe.inVehicle,Ee=fg(v,ye.x,ye.z),Je=!Se&&typeof Ee=="number"&&Number.isFinite(Ee)&&typeof ye.y=="number"&&Number.isFinite(ye.y)&&Math.abs(ye.y-Ee)<=3.5?{...ye,y:Ee+.35}:ye,je=sn(oe.aimDir),wt=oe.vehicle&&typeof oe.vehicle.name=="string"?String(oe.vehicle.name):"",pt=R.tsMs,Wn=At.get(O)||0,mo=typeof pt=="number"?Wn>pt:!1;let Xi=F.get(O)||String(O);Y&&Se&&wt&&(Xi=`${Xi} (${wt})`),I.push({playerId:O,label:Xi,pos:Je,aimDir:je,inVehicle:Se,isDead:mo})}return I},[u,At,xe,Ze,ge,Me,Y,v]),Ft=D.useMemo(()=>{if(!Le||P===null||typeof u!="number"||ie.length===0)return null;const E=Math.max(5e3,Math.min(6e4,Math.floor(rt*1e3))),F=u-E,U=[];let I=null;for(const O of ie){if(O.tsMs<F)continue;if(O.tsMs>u)break;const R=O.players.find(Je=>Je&&typeof Je=="object"&&Je.playerId===P);if(!R)continue;const z=!!R.inVehicle,oe=R.entityId,ye=typeof oe=="string"&&oe.length>0?oe:null;ye&&I&&ye!==I&&(U.length=0),ye&&(I=ye);const Se=sn(R.pos);if(!Se||Xu(Se,30))continue;const Ee=fg(v,Se.x,Se.z),nt=!z&&typeof Ee=="number"&&Number.isFinite(Ee)&&typeof Se.y=="number"&&Number.isFinite(Se.y)&&Math.abs(Se.y-Ee)<=3.5;U.push(nt?{...Se,y:Ee}:Se)}if(U.length<2)return null;const Z=200;if(U.length>Z){const O=Math.ceil(U.length/Z),R=[];for(let z=0;z<U.length;z+=O)R.push(U[z]);return{points:R}}return{points:U}},[u,Le,P,ie,v,rt]),hn=D.useMemo(()=>{if(!Oe)return[];const E=u;if(typeof E!="number")return[];const F=[];for(const U of Ye){const I=U.payload;if(!I||typeof I!="object"||I.type!=="kill"&&I.type!=="death"||typeof I.tsMs!="number"||E<I.tsMs||E>I.tsMs+3e3)continue;const Z=I.event,O=Z?sn(Z.victimPos):null;if(O&&(F.push(O),F.length>=40))break}return F},[u,Ye,Oe]),T=D.useMemo(()=>{const E=y.minTsMs,F=y.maxTsMs,U=u;return typeof E!="number"||typeof F!="number"||typeof U!="number"?{min:0,max:100,value:0,disabled:!0}:F<=E?{min:E,max:E+1,value:E,disabled:!1}:{min:E,max:F,value:Math.min(Math.max(U,E),F),disabled:!1}},[u,y.maxTsMs,y.minTsMs]),B=D.useMemo(()=>{let E=-1/0,F=0;for(const U of Ye){if(!U||typeof U.receivedAt!="number")continue;const I=lc(U);I!==null&&I>E&&(E=I,F=U.receivedAt)}return!Number.isFinite(E)||E<0||!Number.isFinite(F)||F<=0?null:{tsMs:E,receivedAt:F}},[Ye]),j=D.useMemo(()=>{if(!B)return null;const E=B;return F=>{const U=E.receivedAt+(F-E.tsMs);return Number.isFinite(U)?new Date(U).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}):""}},[B]),K=D.useMemo(()=>{if(vt===null)return null;const E=ge.find(F=>F.playerId===vt);return E?E.name:String(vt)},[vt,ge]);function $(E){const F=Math.max(0,Math.floor(Ve*1e3)),U=T.disabled?0:T.min,I=T.disabled?E:T.max,Z=Math.min(I,Math.max(U,E-F));m(Z)}const Re=D.useMemo(()=>{const E=re.trim().toLowerCase(),F=Array.isArray(ge)?ge:[];return E?F.filter(U=>(U.name||"").toLowerCase().includes(E)||String(U.playerId).includes(E)):F},[ge,re]),ze=D.useMemo(()=>{if(P===null)return null;const E=u;if(typeof E!="number")return null;const F=xe(P,E);return F?{snapTsMs:F.tsMs,player:F.player}:null},[u,xe,P]),Ae=D.useMemo(()=>{const E=u;if(typeof E!="number")return ze;const F=ze;if(!F||!F.player||typeof F.player!="object")return F;const U=F.player,I=F.snapTsMs,Z=typeof U.playerId=="number"?U.playerId:null;if(Z===null)return F;const O=5*6e4,R=xt.current.get(Z)||{invTsMs:-1,hotbarTsMs:-1,weaponTsMs:-1},z=U.inventory;Array.isArray(z)&&(R.inventory=z,R.invTsMs=I);const oe=U.attachments;Array.isArray(oe)&&(R.attachments=oe,R.hotbarTsMs=I);const ye=U.weapon;ye&&typeof ye=="object"&&typeof ye.name=="string"&&ye.name.length>0&&(R.weapon=ye,R.weaponTsMs=I),xt.current.set(Z,R);const Se=!Array.isArray(z),Ee=!Array.isArray(oe),nt=!ye||!ye.name,je=Se||Ee||nt?He(Z,E,O):null;je&&je.inventory&&(!("inventory"in R)||R.invTsMs>E||E-R.invTsMs>O)&&(R.inventory=je.inventory,R.invTsMs=je.tsMs),je&&je.attachments&&(!("attachments"in R)||R.hotbarTsMs>E||E-R.hotbarTsMs>O)&&(R.attachments=je.attachments,R.hotbarTsMs=je.tsMs),je&&je.weapon&&(!R.weapon||R.weaponTsMs>E||E-R.weaponTsMs>O)&&(R.weapon=je.weapon,R.weaponTsMs=je.tsMs);const wt=E-R.invTsMs,pt=E-R.hotbarTsMs,Wn=E-R.weaponTsMs,mo="inventory"in R&&R.invTsMs<=E&&wt>=0&&wt<=O&&Se,Xi="attachments"in R&&R.hotbarTsMs<=E&&pt>=0&&pt<=O&&Ee,x_=!!R.weapon&&R.weaponTsMs<=E&&Wn>=0&&Wn<=O&&nt;return{...U,inventory:mo?R.inventory:z,attachments:Xi?R.attachments:oe,weapon:x_?R.weapon:ye,__snapTsMs:I}},[u,He,ze]),Be=D.useMemo(()=>{const E=[];for(const Z of Ye){const O=Z.payload;if(!O||typeof O!="object"||typeof O.tsMs!="number"||O.type==="snapshot"||O.type!=="kill"&&O.type!=="death"&&O.type!=="aiKill"&&O.type!=="join"&&O.type!=="disconnect"&&O.type!=="restart"&&O.type!=="gmPing")continue;const R=O.event;if(O.type==="kill"){const z=R&&typeof R.killerName=="string"?R.killerName:"Unknown",oe=R&&typeof R.victimName=="string"?R.victimName:"Unknown",ye=R&&typeof R.weaponName=="string"?R.weaponName:"",Se=R&&typeof R.distanceM=="number"?R.distanceM:null,Ee=typeof Se=="number"&&Number.isFinite(Se)?`${Math.round(Se)}m`:"",nt=R?sn(R.victimPos):null,Je=R&&typeof R.victimPlayerId=="number"?R.victimPlayerId:null,je=R&&typeof R.killerPlayerId=="number"?R.killerPlayerId:null,wt=[];ye&&wt.push(ye),Ee&&wt.push(Ee),E.push({tsMs:O.tsMs,type:"kill",title:`${z} → ${oe}`,subtitle:wt.join(" • "),focusPos:nt,focusPlayerId:Je,playerIds:[je,Je].filter(pt=>typeof pt=="number")})}else if(O.type==="death"){const z=R&&typeof R.victimPlayerId=="number"?R.victimPlayerId:null,oe=R&&typeof R.killerPlayerId=="number"?R.killerPlayerId:null;if(z!==null&&oe!==null&&oe>=0&&oe!==z)continue;const ye=R&&typeof R.victimName=="string"?R.victimName:"Unknown",Se=R&&typeof R.weaponName=="string"?R.weaponName:"",Ee=R&&typeof R.distanceM=="number"?R.distanceM:null,nt=typeof Ee=="number"&&Number.isFinite(Ee)?`${Math.round(Ee)}m`:"",Je=R?sn(R.victimPos):null,je=[];Se&&je.push(Se),nt&&je.push(nt),E.push({tsMs:O.tsMs,type:"death",title:`${ye} died`,subtitle:je.join(" • "),focusPos:Je,focusPlayerId:z,playerIds:[z].filter(wt=>typeof wt=="number")})}else if(O.type==="aiKill"){const z=R&&typeof R.killerName=="string"?R.killerName:"Unknown",oe=R&&typeof R.victimName=="string"?R.victimName:"Unknown",ye=R&&typeof R.weaponName=="string"?R.weaponName:"",Se=R&&typeof R.distanceM=="number"?R.distanceM:null,Ee=typeof Se=="number"&&Number.isFinite(Se)?`${Math.round(Se)}m`:"",nt=R?sn(R.victimPos):null,Je=R&&typeof R.killerPlayerId=="number"?R.killerPlayerId:null,je=[];ye&&je.push(ye),Ee&&je.push(Ee),E.push({tsMs:O.tsMs,type:"aiKill",title:`${z} → AI: ${oe}`,subtitle:je.join(" • "),focusPos:nt,focusPlayerId:Je,playerIds:[Je].filter(wt=>typeof wt=="number")})}else if(O.type==="gmPing"){const z=R&&typeof R.by=="string"&&R.by.length>0?R.by:"",oe=R&&typeof R.title=="string"&&R.title.length>0?R.title:"event",ye=R?sn(R.pos):null,Se=z?`(${z} sent a GM ping to ${oe})`:`GM ping to ${oe}`;E.push({tsMs:O.tsMs,type:"gmPing",title:Se,subtitle:"",focusPos:ye,focusPlayerId:null,playerIds:[]})}else{if(O.type==="restart"){E.push({tsMs:O.tsMs,type:"restart",title:"Server restarted",subtitle:"restart / history cleared",focusPos:null,focusPlayerId:null,playerIds:[]});continue}const z=R&&typeof R.name=="string"?R.name:String(R&&R.playerId?R.playerId:"player"),oe=R&&typeof R.playerId=="number"?R.playerId:null,ye=O.type==="join"&&typeof oe=="number"?st(oe,O.tsMs,9e4):null,Se=O.type==="disconnect"&&typeof oe=="number"?ot(oe,O.tsMs,9e4):null;E.push({tsMs:O.tsMs,type:String(O.type),title:`${O.type==="join"?"Join":"Disconnect"}: ${z}`,subtitle:O.type==="disconnect"&&R&&typeof R.kickCause=="string"&&R.kickCause?`cause: ${R.kickCause}`:"",focusPos:ye||Se,focusPlayerId:oe,playerIds:[oe].filter(Ee=>typeof Ee=="number")})}}E.sort((Z,O)=>Z.tsMs-O.tsMs);const F=u,U=tt;let I=E;return typeof F=="number"&&(I=I.filter(Z=>Z.tsMs<=F)),typeof U=="number"&&(I=I.filter(Z=>Z.playerIds.includes(U))),I.slice(-200)},[u,tt,Ye,st]);D.useEffect(()=>{if(!Fe)return;const E=window.setTimeout(()=>{const F=Ue.current.get(Fe);F&&F.scrollIntoView({block:"nearest",behavior:"smooth"})},0);return()=>window.clearTimeout(E)},[Fe,X]);const at=D.useMemo(()=>{const E=y.minTsMs,F=y.maxTsMs;if(typeof E!="number"||typeof F!="number")return[];let U=[];for(const O of Ye){const R=O.payload;if(!R||typeof R!="object"||R.type!=="kill"&&R.type!=="death"&&R.type!=="aiKill"&&R.type!=="join"&&R.type!=="disconnect"&&R.type!=="restart"&&R.type!=="gmPing"||typeof R.tsMs!="number"||R.tsMs<E||R.tsMs>F)continue;const z=R.event;if(R.type==="kill"){const oe=z&&typeof z.killerName=="string"?z.killerName:"Unknown",ye=z&&typeof z.victimName=="string"?z.victimName:"Unknown",Se=z&&typeof z.weaponName=="string"?z.weaponName:"",Ee=z&&typeof z.distanceM=="number"?z.distanceM:null,nt=typeof Ee=="number"&&Number.isFinite(Ee)?`${Math.round(Ee)}m`:"",Je=z?sn(z.victimPos):null,je=z&&typeof z.victimPlayerId=="number"?z.victimPlayerId:null,wt=z&&typeof z.killerPlayerId=="number"?z.killerPlayerId:null,pt=[];Se&&pt.push(Se),nt&&pt.push(nt),U.push({tsMs:R.tsMs,type:"kill",title:`${oe} → ${ye}`,subtitle:pt.join(" • "),focusPos:Je,focusPlayerId:je,playerIds:[wt,je].filter(Wn=>typeof Wn=="number")})}else if(R.type==="death"){const oe=z&&typeof z.victimPlayerId=="number"?z.victimPlayerId:null,ye=z&&typeof z.killerPlayerId=="number"?z.killerPlayerId:null;if(oe!==null&&ye!==null&&ye>=0&&ye!==oe)continue;const Se=z&&typeof z.victimName=="string"?z.victimName:"Unknown",Ee=z&&typeof z.weaponName=="string"?z.weaponName:"",nt=z&&typeof z.distanceM=="number"?z.distanceM:null,Je=typeof nt=="number"&&Number.isFinite(nt)?`${Math.round(nt)}m`:"",je=z?sn(z.victimPos):null,wt=[];Ee&&wt.push(Ee),Je&&wt.push(Je),U.push({tsMs:R.tsMs,type:"death",title:`${Se} died`,subtitle:wt.join(" • "),focusPos:je,focusPlayerId:oe,playerIds:[oe].filter(pt=>typeof pt=="number")})}else if(R.type==="aiKill"){const oe=z&&typeof z.killerName=="string"?z.killerName:"Unknown",ye=z&&typeof z.victimName=="string"?z.victimName:"Unknown",Se=z&&typeof z.weaponName=="string"?z.weaponName:"",Ee=z&&typeof z.distanceM=="number"?z.distanceM:null,nt=typeof Ee=="number"&&Number.isFinite(Ee)?`${Math.round(Ee)}m`:"",Je=z?sn(z.victimPos):null,je=z&&typeof z.killerPlayerId=="number"?z.killerPlayerId:null,wt=[];Se&&wt.push(Se),nt&&wt.push(nt),U.push({tsMs:R.tsMs,type:"aiKill",title:`${oe} → AI: ${ye}`,subtitle:wt.join(" • "),focusPos:Je,focusPlayerId:je,playerIds:[je].filter(pt=>typeof pt=="number")})}else if(R.type==="gmPing"){const oe=z&&typeof z.by=="string"&&z.by.length>0?z.by:"",ye=z&&typeof z.title=="string"&&z.title.length>0?z.title:"event",Se=z?sn(z.pos):null,Ee=oe?`(${oe} sent a GM ping to ${ye})`:`GM ping to ${ye}`;U.push({tsMs:R.tsMs,type:"gmPing",title:Ee,subtitle:"",focusPos:Se,focusPlayerId:null,playerIds:[]})}else if(R.type==="restart"){const oe=z&&typeof z.reason=="string"?z.reason:"",ye=oe==="session_start"?"server restart":oe==="server_restart_or_history_cleared"?"restart / history cleared":oe||"restart";U.push({tsMs:R.tsMs,type:"restart",title:"Server restarted",subtitle:ye,focusPos:null,focusPlayerId:null,playerIds:[]})}else{const oe=z&&typeof z.name=="string"?z.name:String(z&&z.playerId?z.playerId:"player"),ye=z&&typeof z.playerId=="number"?z.playerId:null,Se=R.type==="join"&&typeof ye=="number"?st(ye,R.tsMs,9e4):null;U.push({tsMs:R.tsMs,type:R.type,title:`${R.type==="join"?"Join":"Disconnect"}: ${oe}`,subtitle:R.type==="disconnect"&&z&&typeof z.kickCause=="string"&&z.kickCause?`cause: ${z.kickCause}`:"",focusPos:Se,focusPlayerId:ye,playerIds:[ye].filter(Ee=>typeof Ee=="number")})}}U.sort((O,R)=>O.tsMs-R.tsMs);const I=tt;typeof I=="number"&&(U=U.filter(O=>O.playerIds.includes(I)));const Z=420;if(U.length>Z){const O=Math.ceil(U.length/Z),R=[];for(let z=0;z<U.length;z+=O)R.push(U[z]);return R}return U},[tt,Ye,st,y.maxTsMs,y.minTsMs]);function qe(E){const F=`${Date.now()}-${Math.random().toString(16).slice(2)}`;it(U=>[{id:F,...E,visible:!1},...U].slice(0,5)),window.setTimeout(()=>{it(U=>U.map(I=>I.id===F?{...I,visible:!0}:I))},10),window.setTimeout(()=>{it(U=>U.map(I=>I.id===F?{...I,visible:!1}:I))},4500),window.setTimeout(()=>{it(U=>U.filter(I=>I.id!==F))},5200)}return D.useEffect(()=>{if(!g||Ye.length===0)return;const E=Qe.current;let F=E;const U=[];for(const I of Ye)!I||typeof I.receivedAt!="number"||I.receivedAt<=E||(I.receivedAt>F&&(F=I.receivedAt),U.push({receivedAt:I.receivedAt,payload:I.payload}));U.sort((I,Z)=>I.receivedAt-Z.receivedAt);for(const I of U){const Z=I.payload;if(!(!Z||typeof Z!="object")&&Z.type!=="snapshot"){if(Z.type==="gmPing"){const O=Z.event,R=O&&typeof O.by=="string"&&O.by.length>0?O.by:"",z=O&&typeof O.title=="string"&&O.title.length>0?O.title:"Ping";qe({kind:"event",title:"GM ping",subtitle:R?`${R} • ${z}`:z});continue}if(Z.type==="kill"){const O=Z.event,R=O&&typeof O.killerName=="string"?O.killerName:"Unknown",z=O&&typeof O.victimName=="string"?O.victimName:"Unknown",oe=O&&typeof O.weaponName=="string"&&O.weaponName.length>0?O.weaponName:"",ye=O&&typeof O.distanceM=="number"?O.distanceM:null,Se=typeof ye=="number"&&Number.isFinite(ye)?`${Math.round(ye)}m`:"",Ee=[];oe&&Ee.push(oe),Se&&Ee.push(Se),qe({kind:"kill",title:`${R} → ${z}`,subtitle:Ee.length>0?Ee.join(" • "):"Kill"})}else if(Z.type==="death"){const O=Z.event,R=O&&typeof O.victimPlayerId=="number"?O.victimPlayerId:null,z=O&&typeof O.killerPlayerId=="number"?O.killerPlayerId:null;if(R!==null&&z!==null&&z>=0&&z!==R)continue;const oe=O&&typeof O.victimName=="string"?O.victimName:"Unknown",ye=O&&typeof O.weaponName=="string"&&O.weaponName.length>0?O.weaponName:"",Se=O&&typeof O.distanceM=="number"?O.distanceM:null,Ee=typeof Se=="number"&&Number.isFinite(Se)?`${Math.round(Se)}m`:"",nt=[];ye&&nt.push(ye),Ee&&nt.push(Ee),qe({kind:"event",title:`${oe} died`,subtitle:nt.length>0?nt.join(" • "):"Death"})}else if(Z.type==="aiKill"){const O=Z.event,R=O&&typeof O.killerName=="string"?O.killerName:"Unknown",z=O&&typeof O.victimName=="string"?O.victimName:"Unknown",oe=O&&typeof O.weaponName=="string"&&O.weaponName.length>0?O.weaponName:"",ye=O&&typeof O.distanceM=="number"?O.distanceM:null,Se=typeof ye=="number"&&Number.isFinite(ye)?`${Math.round(ye)}m`:"",Ee=[];oe&&Ee.push(oe),Se&&Ee.push(Se),qe({kind:"kill",title:`${R} → AI: ${z}`,subtitle:Ee.length>0?Ee.join(" • "):"AI kill"})}}}F>E&&(Qe.current=F)},[Ye,g]),M.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden"},children:[M.jsxs("div",{className:"row",style:{gap:12,padding:12,alignItems:"center"},children:[M.jsxs("div",{style:{minWidth:240,maxWidth:520,flex:1},children:[M.jsxs("select",{className:"input",value:i,onChange:E=>{r(E.target.value),G([]),te(null),k(null),N([]),p({minTsMs:null,maxTsMs:null}),m(null),pe.current=null,Qe.current=0,it([])},children:[M.jsx("option",{value:"",children:"Select a server…"}),e.map(E=>M.jsxs("option",{value:E.id,children:[E.name," (",E.id,")"]},E.id))]}),e.length===0?M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"No servers returned yet."}):null]}),we?null:M.jsx("button",{className:"button",onClick:()=>{l(null),Yf().then(E=>o(E)).catch(E=>{const F=E instanceof Error?E.message:"Failed to load server status";l(F)})},children:"Refresh overview"}),d?M.jsx("div",{className:"muted",style:{fontSize:12},children:"Loading…"}):null,c?M.jsx("div",{className:"error",style:{flex:1},children:c}):null]}),we?M.jsx("div",{style:{position:"relative",width:"100%",height:"calc(100vh - 72px)",padding:12,boxSizing:"border-box"},children:M.jsx("div",{className:"card",style:{width:"100%",height:"100%",padding:0,overflow:"hidden"},children:M.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[M.jsx(zb,{players:Ht,focusTarget:ce,focusNonce:ne,followPlayerId:vt,nameTags:_t,showAimLines:ue,trail:Ft,deathMarkers:hn,terrain:v,towns:L||void 0}),vt!==null&&K?M.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:132,display:"flex",justifyContent:"center",pointerEvents:"none"},children:M.jsx("div",{className:"card",style:{padding:"8px 12px",background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)"},children:M.jsxs("div",{style:{fontWeight:800,fontSize:12},children:["Attached to ",K,", press F to unattach"]})})}):null,M.jsx("div",{style:{position:"absolute",top:12,right:12,width:340,display:"flex",flexDirection:"column",gap:8,pointerEvents:"none"},children:Et.map(E=>M.jsxs("div",{style:{pointerEvents:"none",padding:"10px 12px",borderRadius:10,background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)",opacity:E.visible?1:0,transform:E.visible?"translateY(0px)":"translateY(-6px)",transition:"opacity 250ms ease, transform 250ms ease"},children:[M.jsx("div",{style:{fontWeight:700,fontSize:13},children:E.title}),E.subtitle?M.jsx("div",{className:"muted",style:{fontSize:12},children:E.subtitle}):null]},E.id))}),M.jsx("div",{style:{position:"absolute",top:12,left:12,width:ae?360:"auto"},children:M.jsxs("div",{className:"card",style:{padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"nowrap"},children:[M.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:X==="players"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:X==="players"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>q("players"),children:"Players"}),M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:X==="events"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:X==="events"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>q("events"),children:"Events"})]}),M.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[X==="players"?M.jsx("button",{type:"button",className:"button",title:"Nametag options",style:{padding:"6px 10px"},onClick:()=>de(E=>!E),children:"⚙"}):null,M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>H(E=>!E),children:ae?"−":"+"})]})]}),ae?M.jsxs("div",{className:"stack",style:{marginTop:10},children:[X==="players"?M.jsxs(M.Fragment,{children:[se?M.jsxs("div",{style:{border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:[M.jsx("div",{className:"label",style:{marginBottom:8},children:"Nametags"}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:ke,onChange:E=>Ge(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Show nametags"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:A,onChange:E=>w(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Background"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:Y,onChange:E=>he(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Include vehicle in label"})]}),M.jsx("div",{className:"label",style:{marginBottom:6},children:"Nametag size"}),M.jsx("input",{style:{width:"100%"},type:"range",min:.6,max:1.6,step:.1,value:Tt,onChange:E=>lt(Number(E.target.value))}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:[Tt.toFixed(1),"×"]}),M.jsx("div",{style:{height:8}}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:ue,onChange:E=>J(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Aim direction line"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:Oe,onChange:E=>Ce(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Death markers"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:Le,onChange:E=>et(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Trails (focused player)"})]}),Le?M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"label",style:{marginBottom:6},children:"Trail window (seconds)"}),M.jsx("input",{style:{width:"100%"},type:"range",min:5,max:60,step:5,value:rt,onChange:E=>fe(Number(E.target.value))}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:[rt,"s"]})]}):null]}):null,M.jsx("input",{className:"input",placeholder:"Search players…",value:re,onChange:E=>x(E.target.value)})]}):null,X==="players"?M.jsx("div",{className:"scroll",style:{maxHeight:240,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:Re.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No players."}):Re.map(E=>{const F=P===E.playerId;return M.jsxs("button",{type:"button",onClick:()=>{q("players"),te(E.playerId),ct(E.playerId);const U=Ht.find(I=>I.playerId===E.playerId);U&&(k(U.pos),Q(I=>I+1))},className:"button",style:{width:"100%",textAlign:"left",borderRadius:0,border:"none",borderBottom:"1px solid rgba(255,255,255,0.06)",background:F?"rgba(255,255,255,0.08)":"transparent",padding:"8px 10px"},children:[M.jsx("div",{style:{fontWeight:700,fontSize:13},children:E.name}),M.jsxs("div",{className:"muted",style:{fontSize:11},children:["#",E.playerId]})]},E.playerId)})}):M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between",gap:10},children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Event click offset"}),M.jsxs("div",{className:"row",style:{gap:8},children:[M.jsx("input",{className:"input",style:{width:90,padding:"6px 10px"},type:"number",min:0,max:60,step:1,value:Ve,onChange:E=>Ne(Math.max(0,Math.min(60,Math.floor(Number(E.target.value)||0)))),title:"Jump this many seconds before an event"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"sec"})]})]}),M.jsx("div",{className:"scroll",style:{maxWidth:340,overflowX:"auto",overflowY:"hidden",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:Be.length===0?M.jsx("div",{className:"muted",style:{fontSize:12},children:"No events in buffer yet."}):M.jsx("div",{style:{display:"flex",gap:10},children:Be.slice().reverse().map((E,F)=>{const U=`${E.tsMs}|${E.type}|${E.title}|${E.subtitle||""}`,I=Fe===U,Z=!!we&&E.type!=="gmPing"&&!!E.focusPos,O=E.subtitle?`${E.title} • ${E.subtitle}`:E.title;return M.jsxs("div",{ref:R=>{R?Ue.current.set(U,R):Ue.current.delete(U)},className:"button",style:{minWidth:220,textAlign:"left",borderRadius:10,border:I?"1px solid rgba(255,255,255,0.35)":"1px solid rgba(255,255,255,0.10)",background:I?"rgba(255,255,255,0.10)":"rgba(255,255,255,0.06)",padding:"8px 10px",position:"relative"},role:"button",tabIndex:0,onClick:()=>{Xe(U),$e(!1),_(!1),$(E.tsMs),typeof E.focusPlayerId=="number"&&te(E.focusPlayerId),E.focusPos&&(k(E.focusPos),Q(R=>R+1))},onKeyDown:R=>{R.key!=="Enter"&&R.key!==" "||(R.preventDefault(),Xe(U),$e(!1),_(!1),$(E.tsMs),typeof E.focusPlayerId=="number"&&te(E.focusPlayerId),E.focusPos&&(k(E.focusPos),Q(z=>z+1)))},children:[M.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:8,right:8,padding:"4px 8px",fontSize:11,opacity:Z?1:.4},title:Z?"Send GM ping to this event location":"No position for this event",disabled:!Z,onClick:R=>{if(R.stopPropagation(),!we)return;const z=E.focusPos;if(!z)return;const oe=typeof E.focusPlayerId=="number"?E.focusPlayerId:Array.isArray(E.playerIds)&&E.playerIds.length>0?E.playerIds[0]:null;uM({serverId:we,tsMs:E.tsMs,pos:z,title:O,reporterPlayerId:oe})},children:"GM ping"}),M.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:34,right:8,padding:"4px 8px",fontSize:11,opacity:Z?1:.4},title:Z?"Export 5s before/after as a GIF to Discord":"No position for this event",disabled:!Z,onClick:R=>{if(R.stopPropagation(),!we)return;const z=E.focusPos;z&&(async()=>{try{await xM({serverId:we,tsMs:E.tsMs,title:E.title,pos:z,focusPlayerId:typeof E.focusPlayerId=="number"?E.focusPlayerId:null,playerIds:Array.isArray(E.playerIds)?E.playerIds:null}),qe({kind:"event",title:"Discord export",subtitle:"Sent"})}catch(oe){f(oe instanceof Error?oe.message:"Failed to export to Discord")}})()},children:"Export"}),M.jsx("div",{style:{fontWeight:800,fontSize:12},children:E.title}),M.jsxs("div",{className:"muted",style:{fontSize:11,marginTop:2},children:["+",dl(E.tsMs-T.min),j?` • ${j(E.tsMs)}`:"",E.subtitle?` • ${E.subtitle}`:""]})]},`${E.tsMs}-${F}`)})})})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Selected"}),P===null?M.jsx("div",{className:"muted",style:{fontSize:12},children:"Click a player to view equipment."}):Ae?M.jsxs("div",{style:{fontSize:12},children:[M.jsxs("div",{className:"muted",style:{marginBottom:6},children:["pos: ",JSON.stringify(Ae.pos)]}),M.jsxs("details",{open:!0,children:[M.jsx("summary",{style:{cursor:"pointer",fontWeight:700},children:"Weapon"}),M.jsx("div",{className:"muted",style:{marginTop:6},children:Ae.weapon&&Ae.weapon.name?Ae.weapon.name:"None"})]}),M.jsx("div",{style:{height:6}}),M.jsxs("details",{children:[M.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Inventory (",Array.isArray(Ae.inventory)?Ae.inventory.length:0,")"]}),M.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:(()=>{const E=Gb(Ae.inventory,F=>F&&F.name?String(F.name):"Item");return E.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No inventory data in this snapshot."}):E.slice(0,80).map((F,U)=>M.jsx("div",{style:{padding:"7px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{style:{fontSize:12},children:[F.name,F.count>1?` ×${F.count}`:""]})},U))})()})]}),M.jsx("div",{style:{height:6}}),M.jsxs("details",{children:[M.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Hotbar (",Array.isArray(Ae.attachments)?Ae.attachments.length:0,")"]}),M.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:Array.isArray(Ae.attachments)&&Ae.attachments.length>0?Ae.attachments.map((E,F)=>M.jsx("div",{style:{padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{style:{fontSize:12},children:[E&&E.slot?M.jsxs("span",{className:"muted",style:{fontSize:11},children:[String(E.slot),":"]}):null," ",E&&E.name?String(E.name):"Item"]})},F)):M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No attachments data in this snapshot."})})]}),M.jsx("div",{style:{height:8}}),M.jsxs("div",{children:[M.jsx("div",{className:"muted",style:{fontSize:12,marginBottom:6},children:"Filter events by player"}),M.jsxs("select",{className:"input",style:{width:"100%",padding:"6px 10px"},value:tt===null?"":String(tt),onChange:E=>{const F=String(E.target.value||"");if(!F){St(null);return}const U=Number(F);St(Number.isFinite(U)?U:null)},title:"Filter events by player",children:[M.jsx("option",{value:"",children:"All players"}),ge.map(E=>M.jsxs("option",{value:String(E.playerId),children:[E.name," (#",E.playerId,")"]},E.playerId))]})]})]}):M.jsx("div",{className:"muted",style:{fontSize:12},children:"No snapshot data for this player at the current time."})]})]}):null]})}),M.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:12,display:"flex",justifyContent:"center"},children:M.jsxs("div",{className:"card",style:{width:"min(980px, 100%)",padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Replay time"}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:["+",dl(T.value-T.min)," of +",dl(T.max-T.min),j?` • ${j(T.value)}`:""]})]}),M.jsxs("div",{className:"row",style:{gap:10,alignItems:"center"},children:[M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>{g&&_(!1),$e(E=>!E)},disabled:T.disabled,children:ft?"Pause":"Play"}),M.jsxs("select",{className:"input",style:{width:110,padding:"6px 10px"},value:String(W),onChange:E=>gt(Number(E.target.value)),disabled:T.disabled,title:"Playback speed",children:[M.jsx("option",{value:"0.25",children:"0.25×"}),M.jsx("option",{value:"0.5",children:"0.5×"}),M.jsx("option",{value:"1",children:"1×"}),M.jsx("option",{value:"2",children:"2×"}),M.jsx("option",{value:"4",children:"4×"})]}),M.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[M.jsx("input",{type:"checkbox",checked:Ke,onChange:E=>ee(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Events"})]}),M.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[M.jsx("input",{type:"checkbox",checked:g,onChange:E=>{const F=E.target.checked;_(F),F&&$e(!1)}}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Live"})]})]})]}),Ke?M.jsxs("div",{style:{position:"relative",height:18,marginTop:6,marginBottom:4},children:[M.jsx("div",{style:{position:"absolute",left:0,right:0,top:8,height:2,background:"rgba(255,255,255,0.10)"}}),le?M.jsxs("div",{style:{position:"absolute",left:`${le.leftPct}%`,top:0,transform:"translate(-50%, -110%)",zIndex:10,pointerEvents:"none",maxWidth:320,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:"6px 8px"},children:[M.jsx("div",{style:{fontWeight:800,fontSize:12,lineHeight:1.2},children:le.title}),M.jsx("div",{className:"muted",style:{fontSize:11,marginTop:2,lineHeight:1.2},children:le.subtitle})]}):null,(()=>{const E=T.min,F=T.max,U=Math.max(1,F-E);return at.map((I,Z)=>{const O=(I.tsMs-E)/U,R=Math.min(1,Math.max(0,O))*100,z=I.type==="kill"||I.type==="death"||I.type==="aiKill"?"rgba(255,74,74,0.95)":I.type==="restart"?"rgba(255,217,102,0.95)":"rgba(183,247,200,0.95)",oe=I.type==="disconnect"?"brightness(0.65) saturate(1.1)":void 0,ye=`+${dl(I.tsMs-E)}${j?` • ${j(I.tsMs)}`:""}${I.subtitle?` • ${I.subtitle}`:""}`,Se=`${I.tsMs}|${I.type}|${I.title}|${I.subtitle||""}`;return M.jsx("button",{type:"button",className:"button",style:{position:"absolute",left:`calc(${R}% - 4px)`,top:4,width:8,height:8,borderRadius:999,padding:0,border:"1px solid rgba(0,0,0,0.35)",background:z,filter:oe},onMouseEnter:()=>{be({tsMs:I.tsMs,type:I.type,title:I.title,subtitle:ye,leftPct:R})},onMouseLeave:()=>be(null),onClick:()=>{$e(!1),_(!1),$(I.tsMs),typeof I.focusPlayerId=="number"&&te(I.focusPlayerId),I.focusPos&&(k(I.focusPos),Q(Ee=>Ee+1)),q("events"),Xe(Se),be(null)}},`${I.tsMs}-${Z}-${I.type}`)})})()]}):null,M.jsx("input",{style:{width:"100%"},type:"range",min:T.min,max:T.max,value:T.value,disabled:T.disabled,onChange:E=>{const F=Number(E.target.value);Number.isFinite(F)&&(g&&_(!1),ft&&$e(!1),m(F))}})]})})]})})}):null,we?null:M.jsxs("div",{style:{padding:12,height:"calc(100vh - 72px)",boxSizing:"border-box",overflow:"auto"},children:[M.jsxs("div",{className:"card",style:{marginBottom:12},children:[M.jsx("div",{style:{fontWeight:900,letterSpacing:.2},children:"Server overview"}),M.jsx("div",{style:{marginTop:4,fontSize:13},children:"Pick a server to open the replay viewer. Times are shown in your local clock."}),a?M.jsx("div",{className:"error",style:{marginTop:10},children:a}):null]}),M.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:(s&&s.length>0?s:e.map(E=>({serverId:E.id,name:E.name,lastIngestTsMs:null,minTsMs:null,maxTsMs:null,firstReceivedAt:null,lastReceivedAt:null,storedEvents:null,totalEvents:null,retentionMs:0,mapId:null}))).map(E=>{const F=typeof E.retentionMs=="number"?E.retentionMs:0,U=typeof E.lastReceivedAt=="number"?E.lastReceivedAt:null,I=F>0&&U!==null?U-F:null,Z=typeof E.firstReceivedAt=="number"?I!==null?Math.max(E.firstReceivedAt,I):E.firstReceivedAt:I;return M.jsxs("button",{className:"card",style:{textAlign:"left",cursor:"pointer",border:"none"},onClick:()=>{r(E.serverId),G([]),te(null),k(null),N([]),p({minTsMs:null,maxTsMs:null}),m(null),pe.current=null,Qe.current=0,it([])},children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12},children:[M.jsx("div",{style:{fontWeight:900},children:E.name}),M.jsx("div",{className:"muted",style:{fontSize:12},children:E.serverId})]}),M.jsxs("div",{style:{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Events"}),M.jsx("div",{style:{fontWeight:800},children:typeof E.storedEvents=="number"?`${E.storedEvents} events`:"—"}),typeof E.totalEvents=="number"&&typeof E.storedEvents=="number"&&E.totalEvents!==E.storedEvents?M.jsxs("div",{className:"muted",style:{fontSize:12,marginTop:2},children:["All-time: ",E.totalEvents," events"]}):null]}),M.jsxs("div",{children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Retention"}),M.jsx("div",{style:{fontWeight:800},children:F>0?Hb(F):"∞"})]}),M.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Buffer window"}),M.jsxs("div",{style:{fontWeight:800,fontSize:13},children:[qu(Z)," → ",qu(U)]})]}),M.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Last ingest"}),M.jsx("div",{style:{fontWeight:800,fontSize:13},children:qu(E.lastReceivedAt)})]})]})]},E.serverId)})}),(!s||s.length===0)&&e.length===0?M.jsx("div",{style:{marginTop:12},children:"No servers yet — add one in the Dev page, then come back here."}):null]})]})}function hg(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function Wb(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function jb(){const[t,e]=D.useState(null),[n,i]=D.useState(null);D.useEffect(()=>{let s=!1;return Yf().then(o=>{s||(e(o),i(null))}).catch(o=>{if(s)return;const a=o instanceof Error?o.message:"Failed to load replay status";i(a)}),()=>{s=!0}},[]);const r=D.useMemo(()=>{if(!t)return[];const s=t.slice();return s.sort((o,a)=>{const l=typeof o.storedEvents=="number"?o.storedEvents:-1;return(typeof a.storedEvents=="number"?a.storedEvents:-1)-l}),s.slice(0,6)},[t]);return M.jsx("div",{className:"container",children:M.jsxs("div",{className:"stack",children:[M.jsx("div",{className:"card",style:{padding:18},children:M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx("div",{className:"label",children:"Welcome"}),M.jsx("h1",{className:"h1",style:{marginTop:0},children:"ReforgedZ Admin"}),M.jsx("div",{className:"muted",children:"Use the sidebar to manage users, servers, and replay history."})]})}),M.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:[M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Replay overview"}),M.jsx("div",{className:"muted",style:{fontSize:13},children:t?`${t.length} server${t.length===1?"":"s"} detected.`:"Loading…"}),n?M.jsx("div",{className:"error",style:{marginTop:8},children:n}):null]}),r.length>0?M.jsx("div",{className:"stack",style:{gap:8},children:r.map(s=>{const o=typeof s.retentionMs=="number"?s.retentionMs:0,a=typeof s.lastReceivedAt=="number"?s.lastReceivedAt:null,l=o>0&&a!==null?a-o:null,c=typeof s.firstReceivedAt=="number"?l!==null?Math.max(s.firstReceivedAt,l):s.firstReceivedAt:l;return M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:850},children:s.name}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:[hg(c)," → ",hg(a)]})]}),M.jsxs("div",{style:{textAlign:"right"},children:[M.jsx("div",{style:{fontWeight:900},children:typeof s.storedEvents=="number"?`${s.storedEvents} events`:"—"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:o>0?Wb(o):"∞"}),typeof s.totalEvents=="number"&&typeof s.storedEvents=="number"&&s.totalEvents!==s.storedEvents?M.jsxs("div",{className:"muted",style:{fontSize:11},children:["All-time ",s.totalEvents," events"]}):null]})]},s.serverId)})}):M.jsx("div",{className:"muted",style:{fontSize:12},children:"Open Replay Tool to see a detailed per-server dashboard."})]})}),M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Replay Tool tips"}),M.jsx("div",{className:"muted",style:{fontSize:13},children:"A few quick controls that help a lot."})]}),M.jsxs("div",{className:"stack",style:{gap:6,fontSize:13},children:[M.jsxs("div",{children:[M.jsx("span",{style:{fontWeight:850},children:"Attach camera:"})," click a player in the left panel."]}),M.jsxs("div",{children:[M.jsx("span",{style:{fontWeight:850},children:"Detach:"})," press ",M.jsx("span",{style:{fontWeight:900},children:"F"}),"."]}),M.jsxs("div",{children:[M.jsx("span",{style:{fontWeight:850},children:"Event jump offset:"})," defaults to 5s before the event (configurable in Replay Tool)."]})]})]})}),M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Retention"}),M.jsx("div",{className:"muted",style:{fontSize:13},children:"Replay is a rolling buffer. Restarts are marked in the timeline."})]}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"If you clear a server’s history, replay data is removed but cached map metadata is preserved."})]})})]})]})})}function Xb(){const[t,e]=D.useState(null),[n,i]=D.useState(!1),[r,s]=D.useState([]),[o,a]=D.useState(""),[l,c]=D.useState(""),[f,d]=D.useState(!0),[h,g]=D.useState(!1),[_,y]=D.useState(!1);async function p(){i(!0),e(null);try{const m=await fM();s(m)}catch(m){e(m instanceof Error?m.message:"Failed to load users")}finally{i(!1)}}D.useEffect(()=>{p()},[]);const u=D.useMemo(()=>o.trim().length>=3&&l.length>=6,[l.length,o]);return M.jsx("div",{className:"container",children:M.jsxs("div",{className:"stack",children:[M.jsx("h1",{className:"h1",children:"Admin"}),t?M.jsx("div",{className:"error",children:t}):null,M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Create user"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Create a new account and choose which tools it can access."})]}),M.jsxs("div",{className:"row",children:[M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Username"}),M.jsx("input",{className:"input",value:o,onChange:m=>a(m.target.value),placeholder:"username"})]}),M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Password"}),M.jsx("input",{className:"input",type:"password",value:l,onChange:m=>c(m.target.value),placeholder:"password"})]})]}),M.jsxs("div",{className:"row",style:{gap:16},children:[M.jsxs("label",{className:"row",style:{gap:8},children:[M.jsx("input",{type:"checkbox",checked:f,onChange:m=>d(m.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Replay Tool"})]}),M.jsxs("label",{className:"row",style:{gap:8},children:[M.jsx("input",{type:"checkbox",checked:h,onChange:m=>g(m.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Admin"})]}),M.jsxs("label",{className:"row",style:{gap:8},children:[M.jsx("input",{type:"checkbox",checked:_,onChange:m=>y(m.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Dev"})]})]}),M.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:M.jsx("button",{className:"button buttonPrimary",disabled:!u||n,onClick:async()=>{i(!0),e(null);try{await dM({username:o.trim(),password:l,tools:{replay:f,admin:h,dev:_}}),a(""),c(""),d(!0),g(!1),y(!1),await p()}catch(m){e(m instanceof Error?m.message:"Failed to create user")}finally{i(!1)}},children:"Create user"})})]})}),M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Users"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Manage tool access and reset passwords."})]}),M.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:p,children:"Refresh"})]}),M.jsx("div",{className:"scroll",style:{maxHeight:420,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No users found."}):r.map(m=>{var v,S,L,C,b,G;return M.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center"},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:800},children:m.username}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:["tools: ",(v=m.tools)!=null&&v.replay?"replay ":"",(S=m.tools)!=null&&S.admin?"admin ":"",(L=m.tools)!=null&&L.dev?"dev ":""]})]}),M.jsxs("div",{className:"row",style:{gap:8},children:[M.jsxs("button",{className:"button",onClick:async()=>{var re,x,P;i(!0),e(null);try{await uu(m.username,{replay:!((re=m.tools)!=null&&re.replay),admin:!!((x=m.tools)!=null&&x.admin),dev:!!((P=m.tools)!=null&&P.dev)}),await p()}catch(te){e(te instanceof Error?te.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle replay tool access",children:["Replay: ",(C=m.tools)!=null&&C.replay?"On":"Off"]}),M.jsxs("button",{className:"button",onClick:async()=>{var re,x,P;i(!0),e(null);try{await uu(m.username,{replay:!!((re=m.tools)!=null&&re.replay),admin:!((x=m.tools)!=null&&x.admin),dev:!!((P=m.tools)!=null&&P.dev)}),await p()}catch(te){e(te instanceof Error?te.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle admin access",children:["Admin: ",(b=m.tools)!=null&&b.admin?"On":"Off"]}),M.jsxs("button",{className:"button",onClick:async()=>{var re,x,P;i(!0),e(null);try{await uu(m.username,{replay:!!((re=m.tools)!=null&&re.replay),admin:!!((x=m.tools)!=null&&x.admin),dev:!((P=m.tools)!=null&&P.dev)}),await p()}catch(te){e(te instanceof Error?te.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle dev access",children:["Dev: ",(G=m.tools)!=null&&G.dev?"On":"Off"]}),M.jsx("button",{className:"button",style:{borderColor:"rgba(255, 180, 180, 0.35)"},disabled:n,onClick:async()=>{if(confirm(`Delete user '${m.username}'?`)){i(!0),e(null);try{await hM(m.username),await p()}catch(re){e(re instanceof Error?re.message:"Failed to delete user")}finally{i(!1)}}},children:"Delete"})]})]})},m.username)})})]})})]})})}function $b(){const[t,e]=D.useState(null),[n,i]=D.useState(!1),[r,s]=D.useState([]),[o,a]=D.useState(""),[l,c]=D.useState(""),[f,d]=D.useState(!1),[h,g]=D.useState(""),[_,y]=D.useState(""),[p,u]=D.useState("");async function m(){i(!0),e(null);try{const v=await pM();s(v);const S=await _M();d(!!S.isSet),a(S.masked||"")}catch(v){e(v instanceof Error?v.message:"Failed to load dev servers")}finally{i(!1)}}return D.useEffect(()=>{m()},[]),M.jsx("div",{className:"container",children:M.jsxs("div",{className:"stack",children:[M.jsx("h1",{className:"h1",children:"Dev"}),t?M.jsx("div",{className:"error",children:t}):null,M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Discord webhook (global)"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Used by “Export event to Discord”. One webhook URL is shared for all servers."})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Current"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:f?o||"set":"not set"})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Webhook URL"}),M.jsx("input",{className:"input",type:"password",value:l,onChange:v=>c(v.target.value),placeholder:"https://discord.com/api/webhooks/..."}),M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Leave blank and click Save to clear."})]}),M.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:M.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:async()=>{i(!0),e(null);try{await yM(l.trim()),c(""),await m()}catch(v){e(v instanceof Error?v.message:"Failed to save webhook")}finally{i(!1)}},children:"Save webhook"})}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Add server"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Adds a new ingest key so the backend will accept replay uploads for that server."})]}),M.jsxs("div",{className:"row",children:[M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Server ID"}),M.jsx("input",{className:"input",value:h,onChange:v=>g(v.target.value),placeholder:"reforgedz-dev-eu-1"})]}),M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Server name (optional)"}),M.jsx("input",{className:"input",value:p,onChange:v=>u(v.target.value),placeholder:"EU #1"})]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Server key / secret"}),M.jsx("input",{className:"input",value:_,onChange:v=>y(v.target.value),placeholder:"secret"}),M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"This must match what the Reforger exporter sends as serverKey."})]}),M.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:M.jsx("button",{className:"button buttonPrimary",disabled:n||h.trim().length===0||_.trim().length<6,onClick:async()=>{i(!0),e(null);try{await mM({serverId:h.trim(),serverKey:_.trim(),name:p.trim()||void 0}),g(""),y(""),u(""),await m()}catch(v){e(v instanceof Error?v.message:"Failed to add server")}finally{i(!1)}},children:"Add server"})})]})}),M.jsxs("div",{className:"card",children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Servers"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Clear history deletes stored replay history for that server (events + snapshots). Cached map data is kept."})]}),M.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:m,children:"Refresh"})]}),M.jsx("div",{style:{height:10}}),M.jsx("div",{className:"scroll",style:{maxHeight:520,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No servers configured."}):r.map(v=>M.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:800},children:v.name||v.id}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:["id: ",v.id,v.keyHint?` • key: ${v.keyHint}`:""]})]}),M.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Clear history for '${v.id}'? This deletes stored replay data.`)){i(!0),e(null);try{await gM(v.id),await m()}catch(S){e(S instanceof Error?S.message:"Failed to clear history")}finally{i(!1)}}},children:"Clear history"}),M.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Regenerate terrain data for '${v.id}'? This queues a command for the exporter to re-send map terrain.`)){i(!0),e(null);try{await vM(v.id),await m()}catch(S){e(S instanceof Error?S.message:"Failed to regenerate terrain")}finally{i(!1)}}},children:"Regenerate terrain data"})]})},v.id))})]})]})})}function pl(t){return M.jsx(eM,{to:t.to,className:({isActive:e})=>`navItem${e?" navItemActive":""}`,children:t.label})}function Yb(){const t=bc();function e(){sM(),t("/login",{replace:!0})}return M.jsxs("div",{className:"appShell",children:[M.jsxs("aside",{className:"sidebar",children:[M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"ReforgedZ"}),M.jsx("div",{className:"h2",children:"Admin Panel"})]}),M.jsx("div",{style:{height:8}}),M.jsx("div",{className:"label",children:"Tools"}),M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx(pl,{to:"/",label:"Home"}),ou("replay")?M.jsx(pl,{to:"/replay",label:"Replay Tool"}):null,ou("admin")?M.jsx(pl,{to:"/admin",label:"Admin"}):null,ou("dev")?M.jsx(pl,{to:"/dev",label:"Dev"}):null]})]}),M.jsx("div",{style:{flex:1}}),M.jsx("button",{className:"button buttonPrimary",onClick:e,children:"Log out"})]}),M.jsx("main",{className:"main",children:M.jsx(BS,{})})]})}function qb(t){const e=ji();return jt()?M.jsx(M.Fragment,{children:t.children}):M.jsx(F0,{to:"/login",replace:!0,state:{from:e.pathname}})}function Kb(){return M.jsxs(GS,{children:[M.jsx(er,{path:"/login",element:M.jsx(SM,{})}),M.jsxs(er,{element:M.jsx(qb,{children:M.jsx(Yb,{})}),children:[M.jsx(er,{path:"/",element:M.jsx(jb,{})}),M.jsx(er,{path:"/replay",element:M.jsx(Vb,{})}),M.jsx(er,{path:"/admin",element:M.jsx(Xb,{})}),M.jsx(er,{path:"/dev",element:M.jsx($b,{})})]}),M.jsx(er,{path:"*",element:M.jsx(F0,{to:"/",replace:!0})})]})}Ku.createRoot(document.getElementById("root")).render(M.jsx(wg.StrictMode,{children:M.jsx(KS,{children:M.jsx(Kb,{})})}));
