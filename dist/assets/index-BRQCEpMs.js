function S_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function M_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hg={exports:{}},sc={},pg={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),E_=Symbol.for("react.portal"),w_=Symbol.for("react.fragment"),T_=Symbol.for("react.strict_mode"),A_=Symbol.for("react.profiler"),b_=Symbol.for("react.provider"),C_=Symbol.for("react.context"),R_=Symbol.for("react.forward_ref"),P_=Symbol.for("react.suspense"),L_=Symbol.for("react.memo"),N_=Symbol.for("react.lazy"),fh=Symbol.iterator;function I_(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var mg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gg=Object.assign,vg={};function io(t,e,n){this.props=t,this.context=e,this.refs=vg,this.updater=n||mg}io.prototype.isReactComponent={};io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _g(){}_g.prototype=io.prototype;function of(t,e,n){this.props=t,this.context=e,this.refs=vg,this.updater=n||mg}var af=of.prototype=new _g;af.constructor=of;gg(af,io.prototype);af.isPureReactComponent=!0;var hh=Array.isArray,yg=Object.prototype.hasOwnProperty,lf={current:null},xg={key:!0,ref:!0,__self:!0,__source:!0};function Sg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)yg.call(e,i)&&!xg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ca,type:t,key:s,ref:o,props:r,_owner:lf.current}}function D_(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function U_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ph=/\/+/g;function Lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?U_(""+t.key):e.toString(36)}function dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case E_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Lc(o,0):i,hh(r)?(n="",t!=null&&(n=t.replace(ph,"$&/")+"/"),dl(r,e,n,"",function(c){return c})):r!=null&&(cf(r)&&(r=D_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ph,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Lc(s,a);o+=dl(s,e,n,l,r)}else if(l=I_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Lc(s,a++),o+=dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function va(t,e,n){if(t==null)return t;var i=[],r=0;return dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function F_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},fl={transition:null},O_={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:fl,ReactCurrentOwner:lf};function Mg(){throw Error("act(...) is not supported in production builds of React.")}ct.Children={map:va,forEach:function(t,e,n){va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return va(t,function(){e++}),e},toArray:function(t){return va(t,function(e){return e})||[]},only:function(t){if(!cf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ct.Component=io;ct.Fragment=w_;ct.Profiler=A_;ct.PureComponent=of;ct.StrictMode=T_;ct.Suspense=P_;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_;ct.act=Mg;ct.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=gg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=lf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)yg.call(e,l)&&!xg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ca,type:t.type,key:r,ref:s,props:i,_owner:o}};ct.createContext=function(t){return t={$$typeof:C_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:b_,_context:t},t.Consumer=t};ct.createElement=Sg;ct.createFactory=function(t){var e=Sg.bind(null,t);return e.type=t,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(t){return{$$typeof:R_,render:t}};ct.isValidElement=cf;ct.lazy=function(t){return{$$typeof:N_,_payload:{_status:-1,_result:t},_init:F_}};ct.memo=function(t,e){return{$$typeof:L_,type:t,compare:e===void 0?null:e}};ct.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};ct.unstable_act=Mg;ct.useCallback=function(t,e){return Sn.current.useCallback(t,e)};ct.useContext=function(t){return Sn.current.useContext(t)};ct.useDebugValue=function(){};ct.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};ct.useEffect=function(t,e){return Sn.current.useEffect(t,e)};ct.useId=function(){return Sn.current.useId()};ct.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};ct.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};ct.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};ct.useMemo=function(t,e){return Sn.current.useMemo(t,e)};ct.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};ct.useRef=function(t){return Sn.current.useRef(t)};ct.useState=function(t){return Sn.current.useState(t)};ct.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};ct.useTransition=function(){return Sn.current.useTransition()};ct.version="18.3.1";pg.exports=ct;var F=pg.exports;const Eg=M_(F),k_=S_({__proto__:null,default:Eg},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=F,B_=Symbol.for("react.element"),H_=Symbol.for("react.fragment"),G_=Object.prototype.hasOwnProperty,V_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W_={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)G_.call(e,i)&&!W_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B_,type:t,key:s,ref:o,props:r,_owner:V_.current}}sc.Fragment=H_;sc.jsx=wg;sc.jsxs=wg;hg.exports=sc;var M=hg.exports,Yu={},Tg={exports:{}},On={},Ag={exports:{}},bg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,X){var Z=V.length;V.push(X);e:for(;0<Z;){var ae=Z-1>>>1,he=V[ae];if(0<r(he,X))V[ae]=X,V[Z]=he,Z=ae;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var X=V[0],Z=V.pop();if(Z!==X){V[0]=Z;e:for(var ae=0,he=V.length,Ve=he>>>1;ae<Ve;){var ee=2*(ae+1)-1,de=V[ee],Ae=ee+1,Ue=V[Ae];if(0>r(de,Z))Ae<he&&0>r(Ue,de)?(V[ae]=Ue,V[Ae]=Z,ae=Ae):(V[ae]=de,V[ee]=Z,ae=ee);else if(Ae<he&&0>r(Ue,Z))V[ae]=Ue,V[Ae]=Z,ae=Ae;else break e}}return X}function r(V,X){var Z=V.sortIndex-X.sortIndex;return Z!==0?Z:V.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,v=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(V){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=V)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function x(V){if(y=!1,g(V),!_)if(n(l)!==null)_=!0,Q(L);else{var X=n(c);X!==null&&ce(x,X.startTime-V)}}function L(V,X){_=!1,y&&(y=!1,u(G),G=-1),v=!0;var Z=h;try{for(g(X),f=n(l);f!==null&&(!(f.expirationTime>X)||V&&!R());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,h=f.priorityLevel;var he=ae(f.expirationTime<=X);X=t.unstable_now(),typeof he=="function"?f.callback=he:f===n(l)&&i(l),g(X)}else i(l);f=n(l)}if(f!==null)var Ve=!0;else{var ee=n(c);ee!==null&&ce(x,ee.startTime-X),Ve=!1}return Ve}finally{f=null,h=Z,v=!1}}var C=!1,b=null,G=-1,re=5,S=-1;function R(){return!(t.unstable_now()-S<re)}function te(){if(b!==null){var V=t.unstable_now();S=V;var X=!0;try{X=b(!0,V)}finally{X?le():(C=!1,b=null)}}else C=!1}var le;if(typeof m=="function")le=function(){m(te)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,ne=z.port2;z.port1.onmessage=te,le=function(){ne.postMessage(null)}}else le=function(){p(te,0)};function Q(V){b=V,C||(C=!0,le())}function ce(V,X){G=p(function(){V(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,Q(L))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var Z=h;h=X;try{return V()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,X){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Z=h;h=V;try{return X()}finally{h=Z}},t.unstable_scheduleCallback=function(V,X,Z){var ae=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ae+Z:ae):Z=ae,V){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Z+he,V={id:d++,callback:X,priorityLevel:V,startTime:Z,expirationTime:he,sortIndex:-1},Z>ae?(V.sortIndex=Z,e(c,V),n(l)===null&&V===n(c)&&(y?(u(G),G=-1):y=!0,ce(x,Z-ae))):(V.sortIndex=he,e(l,V),_||v||(_=!0,Q(L))),V},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(V){var X=h;return function(){var Z=h;h=X;try{return V.apply(this,arguments)}finally{h=Z}}}})(bg);Ag.exports=bg;var j_=Ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_=F,Fn=j_;function _e(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cg=new Set,Vo={};function Qr(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(Vo[t]=e,t=0;t<e.length;t++)Cg.add(e[t])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=Object.prototype.hasOwnProperty,$_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},gh={};function Y_(t){return qu.call(gh,t)?!0:qu.call(mh,t)?!1:$_.test(t)?gh[t]=!0:(mh[t]=!0,!1)}function q_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K_(t,e,n,i){if(e===null||typeof e>"u"||q_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){an[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];an[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){an[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){an[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){an[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){an[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){an[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){an[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){an[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,df);an[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,df);an[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,df);an[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){an[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});an.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){an[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ff(t,e,n,i){var r=an.hasOwnProperty(e)?an[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K_(e,n,r,i)&&(n=null),i||r===null?Y_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),Rg=Symbol.for("react.provider"),Pg=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),mf=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),Lg=Symbol.for("react.offscreen"),vh=Symbol.iterator;function fo(t){return t===null||typeof t!="object"?null:(t=vh&&t[vh]||t["@@iterator"],typeof t=="function"?t:null)}var It=Object.assign,Nc;function Ro(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Ic=!1;function Dc(t,e){if(!t||Ic)return"";Ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function Z_(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function Ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ms:return"Portal";case Ku:return"Profiler";case hf:return"StrictMode";case Zu:return"Suspense";case Qu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pg:return(t.displayName||"Context")+".Consumer";case Rg:return(t._context.displayName||"Context")+".Provider";case pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mf:return e=t.displayName||null,e!==null?e:Ju(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return Ju(t(e))}catch{}}return null}function Q_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ju(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ng(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J_(t){var e=Ng(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ya(t){t._valueTracker||(t._valueTracker=J_(t))}function Ig(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ng(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ed(t,e){var n=e.checked;return It({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _h(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dg(t,e){e=e.checked,e!=null&&ff(t,"checked",e,!1)}function td(t,e){Dg(t,e);var n=vr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nd(t,e.type,n):e.hasOwnProperty("defaultValue")&&nd(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nd(t,e,n){(e!=="number"||Tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function Fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function id(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_e(91));return It({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_e(92));if(Po(n)){if(1<n.length)throw Error(_e(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function Ug(t,e){var n=vr(e.value),i=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xa,Og=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xa=xa||document.createElement("div"),xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ey=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){ey.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function kg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=kg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ty=It({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sd(t,e){if(e){if(ty[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_e(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_e(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_e(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_e(62))}}function od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ad=null;function gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ld=null,Os=null,ks=null;function Mh(t){if(t=fa(t)){if(typeof ld!="function")throw Error(_e(280));var e=t.stateNode;e&&(e=uc(e),ld(t.stateNode,t.type,e))}}function Bg(t){Os?ks?ks.push(t):ks=[t]:Os=t}function Hg(){if(Os){var t=Os,e=ks;if(ks=Os=null,Mh(t),e)for(t=0;t<e.length;t++)Mh(e[t])}}function Gg(t,e){return t(e)}function Vg(){}var Uc=!1;function Wg(t,e,n){if(Uc)return t(e,n);Uc=!0;try{return Gg(t,e,n)}finally{Uc=!1,(Os!==null||ks!==null)&&(Vg(),Hg())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var i=uc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_e(231,e,typeof n));return n}var cd=!1;if(Ii)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){cd=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{cd=!1}function ny(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Do=!1,Al=null,bl=!1,ud=null,iy={onError:function(t){Do=!0,Al=t}};function ry(t,e,n,i,r,s,o,a,l){Do=!1,Al=null,ny.apply(iy,arguments)}function sy(t,e,n,i,r,s,o,a,l){if(ry.apply(this,arguments),Do){if(Do){var c=Al;Do=!1,Al=null}else throw Error(_e(198));bl||(bl=!0,ud=c)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Eh(t){if(Jr(t)!==t)throw Error(_e(188))}function oy(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(_e(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Eh(r),t;if(s===i)return Eh(r),e;s=s.sibling}throw Error(_e(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(_e(189))}}if(n.alternate!==i)throw Error(_e(190))}if(n.tag!==3)throw Error(_e(188));return n.stateNode.current===n?t:e}function Xg(t){return t=oy(t),t!==null?$g(t):null}function $g(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$g(t);if(e!==null)return e;t=t.sibling}return null}var Yg=Fn.unstable_scheduleCallback,wh=Fn.unstable_cancelCallback,ay=Fn.unstable_shouldYield,ly=Fn.unstable_requestPaint,Ft=Fn.unstable_now,cy=Fn.unstable_getCurrentPriorityLevel,vf=Fn.unstable_ImmediatePriority,qg=Fn.unstable_UserBlockingPriority,Cl=Fn.unstable_NormalPriority,uy=Fn.unstable_LowPriority,Kg=Fn.unstable_IdlePriority,oc=null,_i=null;function dy(t){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(oc,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:py,fy=Math.log,hy=Math.LN2;function py(t){return t>>>=0,t===0?32:31-(fy(t)/hy|0)|0}var Sa=64,Ma=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Lo(a):(s&=o,s!==0&&(i=Lo(s)))}else o=n&~r,o!==0?i=Lo(o):s!==0&&(i=Lo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function my(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=my(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function dd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zg(){var t=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),t}function Fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function vy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function _f(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var _t=0;function Qg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jg,yf,ev,tv,nv,fd=!1,Ea=[],rr=null,sr=null,or=null,Xo=new Map,$o=new Map,Qi=[],_y="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(e.pointerId)}}function po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fa(e),e!==null&&yf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function yy(t,e,n,i,r){switch(e){case"focusin":return rr=po(rr,t,e,n,i,r),!0;case"dragenter":return sr=po(sr,t,e,n,i,r),!0;case"mouseover":return or=po(or,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Xo.set(s,po(Xo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$o.set(s,po($o.get(s)||null,t,e,n,i,r)),!0}return!1}function iv(t){var e=Ur(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=jg(n),e!==null){t.blockedOn=e,nv(t.priority,function(){ev(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ad=i,n.target.dispatchEvent(i),ad=null}else return e=fa(n),e!==null&&yf(e),t.blockedOn=n,!1;e.shift()}return!0}function Ah(t,e,n){hl(t)&&n.delete(e)}function xy(){fd=!1,rr!==null&&hl(rr)&&(rr=null),sr!==null&&hl(sr)&&(sr=null),or!==null&&hl(or)&&(or=null),Xo.forEach(Ah),$o.forEach(Ah)}function mo(t,e){t.blockedOn===e&&(t.blockedOn=null,fd||(fd=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,xy)))}function Yo(t){function e(r){return mo(r,t)}if(0<Ea.length){mo(Ea[0],t);for(var n=1;n<Ea.length;n++){var i=Ea[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&mo(rr,t),sr!==null&&mo(sr,t),or!==null&&mo(or,t),Xo.forEach(e),$o.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)iv(n),n.blockedOn===null&&Qi.shift()}var zs=ki.ReactCurrentBatchConfig,Pl=!0;function Sy(t,e,n,i){var r=_t,s=zs.transition;zs.transition=null;try{_t=1,xf(t,e,n,i)}finally{_t=r,zs.transition=s}}function My(t,e,n,i){var r=_t,s=zs.transition;zs.transition=null;try{_t=4,xf(t,e,n,i)}finally{_t=r,zs.transition=s}}function xf(t,e,n,i){if(Pl){var r=hd(t,e,n,i);if(r===null)Xc(t,e,i,Ll,n),Th(t,i);else if(yy(r,t,e,n,i))i.stopPropagation();else if(Th(t,i),e&4&&-1<_y.indexOf(t)){for(;r!==null;){var s=fa(r);if(s!==null&&Jg(s),s=hd(t,e,n,i),s===null&&Xc(t,e,i,Ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xc(t,e,i,null,n)}}var Ll=null;function hd(t,e,n,i){if(Ll=null,t=gf(i),t=Ur(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ll=t,null}function rv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cy()){case vf:return 1;case qg:return 4;case Cl:case uy:return 16;case Kg:return 536870912;default:return 16}default:return 16}}var er=null,Sf=null,pl=null;function sv(){if(pl)return pl;var t,e=Sf,n=e.length,i,r="value"in er?er.value:er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function bh(){return!1}function kn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:bh,this.isPropagationStopped=bh,this}return It(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mf=kn(ro),da=It({},ro,{view:0,detail:0}),Ey=kn(da),Oc,kc,go,ac=It({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(Oc=t.screenX-go.screenX,kc=t.screenY-go.screenY):kc=Oc=0,go=t),Oc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),Ch=kn(ac),wy=It({},ac,{dataTransfer:0}),Ty=kn(wy),Ay=It({},da,{relatedTarget:0}),zc=kn(Ay),by=It({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),Cy=kn(by),Ry=It({},ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Py=kn(Ry),Ly=It({},ro,{data:0}),Rh=kn(Ly),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dy[t])?!!e[t]:!1}function Ef(){return Uy}var Fy=It({},da,{key:function(t){if(t.key){var e=Ny[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Oy=kn(Fy),ky=It({},ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ph=kn(ky),zy=It({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),By=kn(zy),Hy=It({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gy=kn(Hy),Vy=It({},ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wy=kn(Vy),jy=[9,13,27,32],wf=Ii&&"CompositionEvent"in window,Uo=null;Ii&&"documentMode"in document&&(Uo=document.documentMode);var Xy=Ii&&"TextEvent"in window&&!Uo,ov=Ii&&(!wf||Uo&&8<Uo&&11>=Uo),Lh=" ",Nh=!1;function av(t,e){switch(t){case"keyup":return jy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function $y(t,e){switch(t){case"compositionend":return lv(e);case"keypress":return e.which!==32?null:(Nh=!0,Lh);case"textInput":return t=e.data,t===Lh&&Nh?null:t;default:return null}}function Yy(t,e){if(ws)return t==="compositionend"||!wf&&av(t,e)?(t=sv(),pl=Sf=er=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ov&&e.locale!=="ko"?null:e.data;default:return null}}var qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qy[t.type]:e==="textarea"}function cv(t,e,n,i){Bg(i),e=Nl(e,"onChange"),0<e.length&&(n=new Mf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fo=null,qo=null;function Ky(t){xv(t,0)}function lc(t){var e=bs(t);if(Ig(e))return t}function Zy(t,e){if(t==="change")return e}var uv=!1;if(Ii){var Bc;if(Ii){var Hc="oninput"in document;if(!Hc){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),Hc=typeof Dh.oninput=="function"}Bc=Hc}else Bc=!1;uv=Bc&&(!document.documentMode||9<document.documentMode)}function Uh(){Fo&&(Fo.detachEvent("onpropertychange",dv),qo=Fo=null)}function dv(t){if(t.propertyName==="value"&&lc(qo)){var e=[];cv(e,qo,t,gf(t)),Wg(Ky,e)}}function Qy(t,e,n){t==="focusin"?(Uh(),Fo=e,qo=n,Fo.attachEvent("onpropertychange",dv)):t==="focusout"&&Uh()}function Jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lc(qo)}function ex(t,e){if(t==="click")return lc(e)}function tx(t,e){if(t==="input"||t==="change")return lc(e)}function nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:nx;function Ko(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qu.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function Fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oh(t,e){var n=Fh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fh(n)}}function fv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hv(){for(var t=window,e=Tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tl(t.document)}return e}function Tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ix(t){var e=hv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fv(n.ownerDocument.documentElement,n)){if(i!==null&&Tf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Oh(n,s);var o=Oh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rx=Ii&&"documentMode"in document&&11>=document.documentMode,Ts=null,pd=null,Oo=null,md=!1;function kh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;md||Ts==null||Ts!==Tl(i)||(i=Ts,"selectionStart"in i&&Tf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oo&&Ko(Oo,i)||(Oo=i,i=Nl(pd,"onSelect"),0<i.length&&(e=new Mf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ts)))}function Ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Gc={},pv={};Ii&&(pv=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function cc(t){if(Gc[t])return Gc[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pv)return Gc[t]=e[n];return t}var mv=cc("animationend"),gv=cc("animationiteration"),vv=cc("animationstart"),_v=cc("transitionend"),yv=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){yv.set(t,e),Qr(e,[t])}for(var Vc=0;Vc<zh.length;Vc++){var Wc=zh[Vc],sx=Wc.toLowerCase(),ox=Wc[0].toUpperCase()+Wc.slice(1);Sr(sx,"on"+ox)}Sr(mv,"onAnimationEnd");Sr(gv,"onAnimationIteration");Sr(vv,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(_v,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function Bh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sy(i,e,void 0,t),t.currentTarget=null}function xv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Bh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Bh(r,a,c),s=l}}}if(bl)throw t=ud,bl=!1,ud=null,t}function Et(t,e){var n=e[xd];n===void 0&&(n=e[xd]=new Set);var i=t+"__bubble";n.has(i)||(Sv(e,t,2,!1),n.add(i))}function jc(t,e,n){var i=0;e&&(i|=4),Sv(n,t,i,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function Zo(t){if(!t[Aa]){t[Aa]=!0,Cg.forEach(function(n){n!=="selectionchange"&&(ax.has(n)||jc(n,!1,t),jc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,jc("selectionchange",!1,e))}}function Sv(t,e,n,i){switch(rv(e)){case 1:var r=Sy;break;case 4:r=My;break;default:r=xf}n=r.bind(null,e,n,t),r=void 0,!cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Xc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Wg(function(){var c=s,d=gf(n),f=[];e:{var h=yv.get(t);if(h!==void 0){var v=Mf,_=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":v=Oy;break;case"focusin":_="focus",v=zc;break;case"focusout":_="blur",v=zc;break;case"beforeblur":case"afterblur":v=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=By;break;case mv:case gv:case vv:v=Cy;break;case _v:v=Gy;break;case"scroll":v=Ey;break;case"wheel":v=Wy;break;case"copy":case"cut":case"paste":v=Py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ph}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,g;m!==null;){g=m;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,u!==null&&(x=jo(m,u),x!=null&&y.push(Qo(m,x,g)))),p)break;m=m.return}0<y.length&&(h=new v(h,_,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==ad&&(_=n.relatedTarget||n.fromElement)&&(Ur(_)||_[Di]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=c,_=_?Ur(_):null,_!==null&&(p=Jr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=c),v!==_)){if(y=Ch,x="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ph,x="onPointerLeave",u="onPointerEnter",m="pointer"),p=v==null?h:bs(v),g=_==null?h:bs(_),h=new y(x,m+"leave",v,n,d),h.target=p,h.relatedTarget=g,x=null,Ur(d)===c&&(y=new y(u,m+"enter",_,n,d),y.target=g,y.relatedTarget=p,x=y),p=x,v&&_)t:{for(y=v,u=_,m=0,g=y;g;g=ts(g))m++;for(g=0,x=u;x;x=ts(x))g++;for(;0<m-g;)y=ts(y),m--;for(;0<g-m;)u=ts(u),g--;for(;m--;){if(y===u||u!==null&&y===u.alternate)break t;y=ts(y),u=ts(u)}y=null}else y=null;v!==null&&Hh(f,h,v,y,!1),_!==null&&p!==null&&Hh(f,p,_,y,!0)}}e:{if(h=c?bs(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var L=Zy;else if(Ih(h))if(uv)L=tx;else{L=Jy;var C=Qy}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=ex);if(L&&(L=L(t,c))){cv(f,L,n,d);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&nd(h,"number",h.value)}switch(C=c?bs(c):window,t){case"focusin":(Ih(C)||C.contentEditable==="true")&&(Ts=C,pd=c,Oo=null);break;case"focusout":Oo=pd=Ts=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,kh(f,n,d);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":kh(f,n,d)}var b;if(wf)e:{switch(t){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else ws?av(t,n)&&(G="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(ov&&n.locale!=="ko"&&(ws||G!=="onCompositionStart"?G==="onCompositionEnd"&&ws&&(b=sv()):(er=d,Sf="value"in er?er.value:er.textContent,ws=!0)),C=Nl(c,G),0<C.length&&(G=new Rh(G,t,null,n,d),f.push({event:G,listeners:C}),b?G.data=b:(b=lv(n),b!==null&&(G.data=b)))),(b=Xy?$y(t,n):Yy(t,n))&&(c=Nl(c,"onBeforeInput"),0<c.length&&(d=new Rh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=b))}xv(f,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=jo(t,n),s!=null&&i.unshift(Qo(t,s,r)),s=jo(t,e),s!=null&&i.push(Qo(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=jo(n,s),l!=null&&o.unshift(Qo(n,l,a))):r||(l=jo(n,s),l!=null&&o.push(Qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lx=/\r\n?/g,cx=/\u0000|\uFFFD/g;function Gh(t){return(typeof t=="string"?t:""+t).replace(lx,`
`).replace(cx,"")}function ba(t,e,n){if(e=Gh(e),Gh(t)!==e&&n)throw Error(_e(425))}function Il(){}var gd=null,vd=null;function _d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yd=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,dx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(t){return Vh.resolve(null).then(t).catch(fx)}:yd;function fx(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Yo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Yo(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var so=Math.random().toString(36).slice(2),gi="__reactFiber$"+so,Jo="__reactProps$"+so,Di="__reactContainer$"+so,xd="__reactEvents$"+so,hx="__reactListeners$"+so,px="__reactHandles$"+so;function Ur(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Di]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wh(t);t!==null;){if(n=t[gi])return n;t=Wh(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[gi]||t[Di],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_e(33))}function uc(t){return t[Jo]||null}var Sd=[],Cs=-1;function Mr(t){return{current:t}}function Tt(t){0>Cs||(t.current=Sd[Cs],Sd[Cs]=null,Cs--)}function Mt(t,e){Cs++,Sd[Cs]=t.current,t.current=e}var _r={},hn=Mr(_r),bn=Mr(!1),jr=_r;function js(t,e){var n=t.type.contextTypes;if(!n)return _r;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Cn(t){return t=t.childContextTypes,t!=null}function Dl(){Tt(bn),Tt(hn)}function jh(t,e,n){if(hn.current!==_r)throw Error(_e(168));Mt(hn,e),Mt(bn,n)}function Mv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(_e(108,Q_(t)||"Unknown",r));return It({},n,i)}function Ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,jr=hn.current,Mt(hn,t),Mt(bn,bn.current),!0}function Xh(t,e,n){var i=t.stateNode;if(!i)throw Error(_e(169));n?(t=Mv(t,e,jr),i.__reactInternalMemoizedMergedChildContext=t,Tt(bn),Tt(hn),Mt(hn,t)):Tt(bn),Mt(bn,n)}var bi=null,dc=!1,Yc=!1;function Ev(t){bi===null?bi=[t]:bi.push(t)}function mx(t){dc=!0,Ev(t)}function Er(){if(!Yc&&bi!==null){Yc=!0;var t=0,e=_t;try{var n=bi;for(_t=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,dc=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),Yg(vf,Er),r}finally{_t=e,Yc=!1}}return null}var Rs=[],Ps=0,Fl=null,Ol=0,Hn=[],Gn=0,Xr=null,Ri=1,Pi="";function Rr(t,e){Rs[Ps++]=Ol,Rs[Ps++]=Fl,Fl=t,Ol=e}function wv(t,e,n){Hn[Gn++]=Ri,Hn[Gn++]=Pi,Hn[Gn++]=Xr,Xr=t;var i=Ri;t=Pi;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ri=1<<32-li(e)+r|n<<r|i,Pi=s+t}else Ri=1<<s|n<<r|i,Pi=t}function Af(t){t.return!==null&&(Rr(t,1),wv(t,1,0))}function bf(t){for(;t===Fl;)Fl=Rs[--Ps],Rs[Ps]=null,Ol=Rs[--Ps],Rs[Ps]=null;for(;t===Xr;)Xr=Hn[--Gn],Hn[Gn]=null,Pi=Hn[--Gn],Hn[Gn]=null,Ri=Hn[--Gn],Hn[Gn]=null}var Un=null,Dn=null,At=!1,ri=null;function Tv(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $h(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,Dn=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Ri,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,Dn=null,!0):!1;default:return!1}}function Md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ed(t){if(At){var e=Dn;if(e){var n=e;if(!$h(t,e)){if(Md(t))throw Error(_e(418));e=ar(n.nextSibling);var i=Un;e&&$h(t,e)?Tv(i,n):(t.flags=t.flags&-4097|2,At=!1,Un=t)}}else{if(Md(t))throw Error(_e(418));t.flags=t.flags&-4097|2,At=!1,Un=t}}}function Yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function Ca(t){if(t!==Un)return!1;if(!At)return Yh(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_d(t.type,t.memoizedProps)),e&&(e=Dn)){if(Md(t))throw Av(),Error(_e(418));for(;e;)Tv(t,e),e=ar(e.nextSibling)}if(Yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_e(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=Un?ar(t.stateNode.nextSibling):null;return!0}function Av(){for(var t=Dn;t;)t=ar(t.nextSibling)}function Xs(){Dn=Un=null,At=!1}function Cf(t){ri===null?ri=[t]:ri.push(t)}var gx=ki.ReactCurrentBatchConfig;function vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_e(309));var i=n.stateNode}if(!i)throw Error(_e(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_e(284));if(!n._owner)throw Error(_e(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(_e(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qh(t){var e=t._init;return e(t._payload)}function bv(t){function e(u,m){if(t){var g=u.deletions;g===null?(u.deletions=[m],u.flags|=16):g.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=dr(u,m),u.index=0,u.sibling=null,u}function s(u,m,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<m?(u.flags|=2,m):g):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,g,x){return m===null||m.tag!==6?(m=tu(g,u.mode,x),m.return=u,m):(m=r(m,g),m.return=u,m)}function l(u,m,g,x){var L=g.type;return L===Es?d(u,m,g.props.children,x,g.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ki&&qh(L)===m.type)?(x=r(m,g.props),x.ref=vo(u,m,g),x.return=u,x):(x=Ml(g.type,g.key,g.props,null,u.mode,x),x.ref=vo(u,m,g),x.return=u,x)}function c(u,m,g,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=nu(g,u.mode,x),m.return=u,m):(m=r(m,g.children||[]),m.return=u,m)}function d(u,m,g,x,L){return m===null||m.tag!==7?(m=Br(g,u.mode,x,L),m.return=u,m):(m=r(m,g),m.return=u,m)}function f(u,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=tu(""+m,u.mode,g),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _a:return g=Ml(m.type,m.key,m.props,null,u.mode,g),g.ref=vo(u,null,m),g.return=u,g;case Ms:return m=nu(m,u.mode,g),m.return=u,m;case Ki:var x=m._init;return f(u,x(m._payload),g)}if(Po(m)||fo(m))return m=Br(m,u.mode,g,null),m.return=u,m;Ra(u,m)}return null}function h(u,m,g,x){var L=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:a(u,m,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _a:return g.key===L?l(u,m,g,x):null;case Ms:return g.key===L?c(u,m,g,x):null;case Ki:return L=g._init,h(u,m,L(g._payload),x)}if(Po(g)||fo(g))return L!==null?null:d(u,m,g,x,null);Ra(u,g)}return null}function v(u,m,g,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(g)||null,a(m,u,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _a:return u=u.get(x.key===null?g:x.key)||null,l(m,u,x,L);case Ms:return u=u.get(x.key===null?g:x.key)||null,c(m,u,x,L);case Ki:var C=x._init;return v(u,m,g,C(x._payload),L)}if(Po(x)||fo(x))return u=u.get(g)||null,d(m,u,x,L,null);Ra(m,x)}return null}function _(u,m,g,x){for(var L=null,C=null,b=m,G=m=0,re=null;b!==null&&G<g.length;G++){b.index>G?(re=b,b=null):re=b.sibling;var S=h(u,b,g[G],x);if(S===null){b===null&&(b=re);break}t&&b&&S.alternate===null&&e(u,b),m=s(S,m,G),C===null?L=S:C.sibling=S,C=S,b=re}if(G===g.length)return n(u,b),At&&Rr(u,G),L;if(b===null){for(;G<g.length;G++)b=f(u,g[G],x),b!==null&&(m=s(b,m,G),C===null?L=b:C.sibling=b,C=b);return At&&Rr(u,G),L}for(b=i(u,b);G<g.length;G++)re=v(b,u,G,g[G],x),re!==null&&(t&&re.alternate!==null&&b.delete(re.key===null?G:re.key),m=s(re,m,G),C===null?L=re:C.sibling=re,C=re);return t&&b.forEach(function(R){return e(u,R)}),At&&Rr(u,G),L}function y(u,m,g,x){var L=fo(g);if(typeof L!="function")throw Error(_e(150));if(g=L.call(g),g==null)throw Error(_e(151));for(var C=L=null,b=m,G=m=0,re=null,S=g.next();b!==null&&!S.done;G++,S=g.next()){b.index>G?(re=b,b=null):re=b.sibling;var R=h(u,b,S.value,x);if(R===null){b===null&&(b=re);break}t&&b&&R.alternate===null&&e(u,b),m=s(R,m,G),C===null?L=R:C.sibling=R,C=R,b=re}if(S.done)return n(u,b),At&&Rr(u,G),L;if(b===null){for(;!S.done;G++,S=g.next())S=f(u,S.value,x),S!==null&&(m=s(S,m,G),C===null?L=S:C.sibling=S,C=S);return At&&Rr(u,G),L}for(b=i(u,b);!S.done;G++,S=g.next())S=v(b,u,G,S.value,x),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?G:S.key),m=s(S,m,G),C===null?L=S:C.sibling=S,C=S);return t&&b.forEach(function(te){return e(u,te)}),At&&Rr(u,G),L}function p(u,m,g,x){if(typeof g=="object"&&g!==null&&g.type===Es&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case _a:e:{for(var L=g.key,C=m;C!==null;){if(C.key===L){if(L=g.type,L===Es){if(C.tag===7){n(u,C.sibling),m=r(C,g.props.children),m.return=u,u=m;break e}}else if(C.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ki&&qh(L)===C.type){n(u,C.sibling),m=r(C,g.props),m.ref=vo(u,C,g),m.return=u,u=m;break e}n(u,C);break}else e(u,C);C=C.sibling}g.type===Es?(m=Br(g.props.children,u.mode,x,g.key),m.return=u,u=m):(x=Ml(g.type,g.key,g.props,null,u.mode,x),x.ref=vo(u,m,g),x.return=u,u=x)}return o(u);case Ms:e:{for(C=g.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(u,m.sibling),m=r(m,g.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=nu(g,u.mode,x),m.return=u,u=m}return o(u);case Ki:return C=g._init,p(u,m,C(g._payload),x)}if(Po(g))return _(u,m,g,x);if(fo(g))return y(u,m,g,x);Ra(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,g),m.return=u,u=m):(n(u,m),m=tu(g,u.mode,x),m.return=u,u=m),o(u)):n(u,m)}return p}var $s=bv(!0),Cv=bv(!1),kl=Mr(null),zl=null,Ls=null,Rf=null;function Pf(){Rf=Ls=zl=null}function Lf(t){var e=kl.current;Tt(kl),t._currentValue=e}function wd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){zl=t,Rf=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(An=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(Rf!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(zl===null)throw Error(_e(308));Ls=t,zl.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var Fr=null;function Nf(t){Fr===null?Fr=[t]:Fr.push(t)}function Rv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Nf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function If(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,mt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Nf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_f(t,n)}}function Kh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,v=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(v,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(v,f,h):_,h==null)break e;f=It({},f,h);break e;case 2:Zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,l=f):d=d.next=v,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=f}}function Zh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(_e(191,r));r.call(i)}}}var ha={},yi=Mr(ha),ea=Mr(ha),ta=Mr(ha);function Or(t){if(t===ha)throw Error(_e(174));return t}function Df(t,e){switch(Mt(ta,e),Mt(ea,t),Mt(yi,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rd(e,t)}Tt(yi),Mt(yi,e)}function Ys(){Tt(yi),Tt(ea),Tt(ta)}function Lv(t){Or(ta.current);var e=Or(yi.current),n=rd(e,t.type);e!==n&&(Mt(ea,t),Mt(yi,n))}function Uf(t){ea.current===t&&(Tt(yi),Tt(ea))}var Pt=Mr(0);function Hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function Ff(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var vl=ki.ReactCurrentDispatcher,Kc=ki.ReactCurrentBatchConfig,$r=0,Lt=null,Vt=null,Kt=null,Gl=!1,ko=!1,na=0,vx=0;function ln(){throw Error(_e(321))}function Of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function kf(t,e,n,i,r,s){if($r=s,Lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?Sx:Mx,t=n(i,r),ko){s=0;do{if(ko=!1,na=0,25<=s)throw Error(_e(301));s+=1,Kt=Vt=null,e.updateQueue=null,vl.current=Ex,t=n(i,r)}while(ko)}if(vl.current=Vl,e=Vt!==null&&Vt.next!==null,$r=0,Kt=Vt=Lt=null,Gl=!1,e)throw Error(_e(300));return t}function zf(){var t=na!==0;return na=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?Lt.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function Kn(){if(Vt===null){var t=Lt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=Kt===null?Lt.memoizedState:Kt.next;if(e!==null)Kt=e,Vt=t;else{if(t===null)throw Error(_e(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Kt===null?Lt.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function ia(t,e){return typeof e=="function"?e(t):e}function Zc(t){var e=Kn(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if(($r&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Lt.lanes|=d,Yr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ui(i,e.memoizedState)||(An=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Lt.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=Kn(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ui(s,e.memoizedState)||(An=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Nv(){}function Iv(t,e){var n=Lt,i=Kn(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,An=!0),i=i.queue,Bf(Fv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Kt!==null&&Kt.memoizedState.tag&1){if(n.flags|=2048,ra(9,Uv.bind(null,n,i,r,e),void 0,null),Qt===null)throw Error(_e(349));$r&30||Dv(n,e,r)}return r}function Dv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Uv(t,e,n,i){e.value=n,e.getSnapshot=i,Ov(e)&&kv(t)}function Fv(t,e,n){return n(function(){Ov(e)&&kv(t)})}function Ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function kv(t){var e=Ui(t,1);e!==null&&ci(e,t,1,-1)}function Qh(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=xx.bind(null,Lt,t),[e.memoizedState,t]}function ra(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function zv(){return Kn().memoizedState}function _l(t,e,n,i){var r=fi();Lt.flags|=t,r.memoizedState=ra(1|e,n,void 0,i===void 0?null:i)}function fc(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var o=Vt.memoizedState;if(s=o.destroy,i!==null&&Of(i,o.deps)){r.memoizedState=ra(e,n,s,i);return}}Lt.flags|=t,r.memoizedState=ra(1|e,n,s,i)}function Jh(t,e){return _l(8390656,8,t,e)}function Bf(t,e){return fc(2048,8,t,e)}function Bv(t,e){return fc(4,2,t,e)}function Hv(t,e){return fc(4,4,t,e)}function Gv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vv(t,e,n){return n=n!=null?n.concat([t]):null,fc(4,4,Gv.bind(null,e,t),n)}function Hf(){}function Wv(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function jv(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Xv(t,e,n){return $r&21?(ui(n,e)||(n=Zg(),Lt.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=n)}function _x(t,e){var n=_t;_t=n!==0&&4>n?n:4,t(!0);var i=Kc.transition;Kc.transition={};try{t(!1),e()}finally{_t=n,Kc.transition=i}}function $v(){return Kn().memoizedState}function yx(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Yv(t))qv(e,n);else if(n=Rv(t,e,n,i),n!==null){var r=yn();ci(n,t,i,r),Kv(n,e,i)}}function xx(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yv(t))qv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ui(a,o)){var l=e.interleaved;l===null?(r.next=r,Nf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Rv(t,e,r,i),n!==null&&(r=yn(),ci(n,t,i,r),Kv(n,e,i))}}function Yv(t){var e=t.alternate;return t===Lt||e!==null&&e===Lt}function qv(t,e){ko=Gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_f(t,n)}}var Vl={readContext:qn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},Sx={readContext:qn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:Jh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,Gv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yx.bind(null,Lt,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:Qh,useDebugValue:Hf,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=Qh(!1),e=t[0];return t=_x.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Lt,r=fi();if(At){if(n===void 0)throw Error(_e(407));n=n()}else{if(n=e(),Qt===null)throw Error(_e(349));$r&30||Dv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Jh(Fv.bind(null,i,s,t),[t]),i.flags|=2048,ra(9,Uv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=fi(),e=Qt.identifierPrefix;if(At){var n=Pi,i=Ri;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mx={readContext:qn,useCallback:Wv,useContext:qn,useEffect:Bf,useImperativeHandle:Vv,useInsertionEffect:Bv,useLayoutEffect:Hv,useMemo:jv,useReducer:Zc,useRef:zv,useState:function(){return Zc(ia)},useDebugValue:Hf,useDeferredValue:function(t){var e=Kn();return Xv(e,Vt.memoizedState,t)},useTransition:function(){var t=Zc(ia)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:Nv,useSyncExternalStore:Iv,useId:$v,unstable_isNewReconciler:!1},Ex={readContext:qn,useCallback:Wv,useContext:qn,useEffect:Bf,useImperativeHandle:Vv,useInsertionEffect:Bv,useLayoutEffect:Hv,useMemo:jv,useReducer:Qc,useRef:zv,useState:function(){return Qc(ia)},useDebugValue:Hf,useDeferredValue:function(t){var e=Kn();return Vt===null?e.memoizedState=t:Xv(e,Vt.memoizedState,t)},useTransition:function(){var t=Qc(ia)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:Nv,useSyncExternalStore:Iv,useId:$v,unstable_isNewReconciler:!1};function ni(t,e){if(t&&t.defaultProps){e=It({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Td(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:It({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hc={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=yn(),r=ur(t),s=Ni(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(ci(e,t,r,i),gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=yn(),r=ur(t),s=Ni(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(ci(e,t,r,i),gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yn(),i=ur(t),r=Ni(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(ci(e,t,i,n),gl(e,t,i))}};function ep(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,i)||!Ko(r,s):!0}function Zv(t,e,n){var i=!1,r=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=Cn(e)?jr:hn.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):_r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function tp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&hc.enqueueReplaceState(e,e.state,null)}function Ad(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},If(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=Cn(e)?jr:hn.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Td(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hc.enqueueReplaceState(r,r.state,null),Bl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",i=e;do n+=Z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wx=typeof WeakMap=="function"?WeakMap:Map;function Qv(t,e,n){n=Ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jl||(jl=!0,Od=i),bd(t,e)},n}function Jv(t,e,n){n=Ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){bd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bd(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function np(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kx.bind(null,t,e,n),e.then(t,t))}function ip(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ni(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var Tx=ki.ReactCurrentOwner,An=!1;function vn(t,e,n,i){e.child=t===null?Cv(e,null,n,i):$s(e,t.child,n,i)}function sp(t,e,n,i,r){n=n.render;var s=e.ref;return Bs(e,r),i=kf(t,e,n,i,s,r),n=zf(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(At&&n&&Af(e),e.flags|=1,vn(t,e,i,r),e.child)}function op(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,e0(t,e,s,i,r)):(t=Ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function e0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ko(s,i)&&t.ref===e.ref)if(An=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(An=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return Cd(t,e,n,i,r)}function t0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(Is,In),In|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Mt(Is,In),In|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Mt(Is,In),In|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Mt(Is,In),In|=i;return vn(t,e,r,n),e.child}function n0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cd(t,e,n,i,r){var s=Cn(n)?jr:hn.current;return s=js(e,s),Bs(e,r),n=kf(t,e,n,i,s,r),i=zf(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(At&&i&&Af(e),e.flags|=1,vn(t,e,n,r),e.child)}function ap(t,e,n,i,r){if(Cn(n)){var s=!0;Ul(e)}else s=!1;if(Bs(e,r),e.stateNode===null)yl(t,e),Zv(e,n,i),Ad(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=Cn(n)?jr:hn.current,c=js(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&tp(e,o,i,c),Zi=!1;var h=e.memoizedState;o.state=h,Bl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||bn.current||Zi?(typeof d=="function"&&(Td(e,n,d,i),l=e.memoizedState),(a=Zi||ep(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Pv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ni(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=Cn(n)?jr:hn.current,l=js(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&tp(e,o,i,l),Zi=!1,h=e.memoizedState,o.state=h,Bl(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||bn.current||Zi?(typeof v=="function"&&(Td(e,n,v,i),_=e.memoizedState),(c=Zi||ep(e,n,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Rd(t,e,n,i,s,r)}function Rd(t,e,n,i,r,s){n0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Xh(e,n,!1),Fi(t,e,s);i=e.stateNode,Tx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):vn(t,e,a,s),e.memoizedState=i.state,r&&Xh(e,n,!0),e.child}function i0(t){var e=t.stateNode;e.pendingContext?jh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jh(t,e.context,!1),Df(t,e.containerInfo)}function lp(t,e,n,i,r){return Xs(),Cf(r),e.flags|=256,vn(t,e,n,i),e.child}var Pd={dehydrated:null,treeContext:null,retryLane:0};function Ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function r0(t,e,n){var i=e.pendingProps,r=Pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Mt(Pt,r&1),t===null)return Ed(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gc(o,i,0,null),t=Br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ld(n),e.memoizedState=Pd,t):Gf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ax(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=Br(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ld(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pd,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gf(t,e){return e=gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Pa(t,e,n,i){return i!==null&&Cf(i),$s(e,t.child,null,n),t=Gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ax(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Jc(Error(_e(422))),Pa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gc({mode:"visible",children:i.children},r,0,null),s=Br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=Ld(o),e.memoizedState=Pd,s);if(!(e.mode&1))return Pa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(_e(419)),i=Jc(s,i,void 0),Pa(t,e,o,i)}if(a=(o&t.childLanes)!==0,An||a){if(i=Qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),ci(i,t,r,-1))}return Yf(),i=Jc(Error(_e(421))),Pa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=zx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Dn=ar(r.nextSibling),Un=e,At=!0,ri=null,t!==null&&(Hn[Gn++]=Ri,Hn[Gn++]=Pi,Hn[Gn++]=Xr,Ri=t.id,Pi=t.overflow,Xr=e),e=Gf(e,i.children),e.flags|=4096,e)}function cp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),wd(t.return,e,n)}function eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function s0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(t,e,i.children,n),i=Pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cp(t,n,e);else if(t.tag===19)cp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Mt(Pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Hl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Hl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}eu(e,!0,n,null,s);break;case"together":eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_e(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bx(t,e,n){switch(e.tag){case 3:i0(e),Xs();break;case 5:Lv(e);break;case 1:Cn(e.type)&&Ul(e);break;case 4:Df(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Mt(kl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Mt(Pt,Pt.current&1),e.flags|=128,null):n&e.child.childLanes?r0(t,e,n):(Mt(Pt,Pt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);Mt(Pt,Pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return s0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Mt(Pt,Pt.current),i)break;return null;case 22:case 23:return e.lanes=0,t0(t,e,n)}return Fi(t,e,n)}var o0,Nd,a0,l0;o0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nd=function(){};a0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(yi.current);var s=null;switch(n){case"input":r=ed(t,r),i=ed(t,i),s=[];break;case"select":r=It({},r,{value:void 0}),i=It({},i,{value:void 0}),s=[];break;case"textarea":r=id(t,r),i=id(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Il)}sd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};l0=function(t,e,n,i){n!==i&&(e.flags|=4)};function _o(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function cn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Cx(t,e,n){var i=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return Cn(e.type)&&Dl(),cn(e),null;case 3:return i=e.stateNode,Ys(),Tt(bn),Tt(hn),Ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(Bd(ri),ri=null))),Nd(t,e),cn(e),null;case 5:Uf(e);var r=Or(ta.current);if(n=e.type,t!==null&&e.stateNode!=null)a0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(_e(166));return cn(e),null}if(t=Or(yi.current),Ca(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[Jo]=s,t=(e.mode&1)!==0,n){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<No.length;r++)Et(No[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":_h(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":xh(i,s),Et("invalid",i)}sd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ba(i.textContent,a,t),r=["children",""+a]):Vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Et("scroll",i)}switch(n){case"input":ya(i),yh(i,s,!0);break;case"textarea":ya(i),Sh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[gi]=e,t[Jo]=i,o0(t,e,!1,!1),e.stateNode=t;e:{switch(o=od(n,i),n){case"dialog":Et("cancel",t),Et("close",t),r=i;break;case"iframe":case"object":case"embed":Et("load",t),r=i;break;case"video":case"audio":for(r=0;r<No.length;r++)Et(No[r],t);r=i;break;case"source":Et("error",t),r=i;break;case"img":case"image":case"link":Et("error",t),Et("load",t),r=i;break;case"details":Et("toggle",t),r=i;break;case"input":_h(t,i),r=ed(t,i),Et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=It({},i,{value:void 0}),Et("invalid",t);break;case"textarea":xh(t,i),r=id(t,i),Et("invalid",t);break;default:r=i}sd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?zg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Og(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wo(t,l):typeof l=="number"&&Wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Et("scroll",t):l!=null&&ff(t,s,l,o))}switch(n){case"input":ya(t),yh(t,i,!1);break;case"textarea":ya(t),Sh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+vr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(t&&e.stateNode!=null)l0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(_e(166));if(n=Or(ta.current),Or(yi.current),Ca(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:ba(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return cn(e),null;case 13:if(Tt(Pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&Dn!==null&&e.mode&1&&!(e.flags&128))Av(),Xs(),e.flags|=98560,s=!1;else if(s=Ca(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(_e(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_e(317));s[gi]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),s=!1}else ri!==null&&(Bd(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Pt.current&1?Wt===0&&(Wt=3):Yf())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return Ys(),Nd(t,e),t===null&&Zo(e.stateNode.containerInfo),cn(e),null;case 10:return Lf(e.type._context),cn(e),null;case 17:return Cn(e.type)&&Dl(),cn(e),null;case 19:if(Tt(Pt),s=e.memoizedState,s===null)return cn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)_o(s,!1);else{if(Wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hl(t),o!==null){for(e.flags|=128,_o(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Mt(Pt,Pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ft()>Ks&&(e.flags|=128,i=!0,_o(s,!1),e.lanes=4194304)}else{if(!i)if(t=Hl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return cn(e),null}else 2*Ft()-s.renderingStartTime>Ks&&n!==1073741824&&(e.flags|=128,i=!0,_o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,n=Pt.current,Mt(Pt,i?n&1|2:n&1),e):(cn(e),null);case 22:case 23:return $f(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?In&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(_e(156,e.tag))}function Rx(t,e){switch(bf(e),e.tag){case 1:return Cn(e.type)&&Dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ys(),Tt(bn),Tt(hn),Ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uf(e),null;case 13:if(Tt(Pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_e(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Tt(Pt),null;case 4:return Ys(),null;case 10:return Lf(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var La=!1,fn=!1,Px=typeof WeakSet=="function"?WeakSet:Set,De=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ut(t,e,i)}else n.current=null}function Id(t,e,n){try{n()}catch(i){Ut(t,e,i)}}var up=!1;function Lx(t,e){if(gd=Pl,t=hv(),Tf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var v;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vd={focusedElem:t,selectionRange:n},Pl=!1,De=e;De!==null;)if(e=De,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,De=t;else for(;De!==null;){e=De;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:ni(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_e(163))}}catch(x){Ut(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,De=t;break}De=e.return}return _=up,up=!1,_}function zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Id(e,n,s)}r=r.next}while(r!==i)}}function pc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function c0(t){var e=t.alternate;e!==null&&(t.alternate=null,c0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[Jo],delete e[xd],delete e[hx],delete e[px])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u0(t){return t.tag===5||t.tag===3||t.tag===4}function dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ud(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(i!==4&&(t=t.child,t!==null))for(Ud(t,e,n),t=t.sibling;t!==null;)Ud(t,e,n),t=t.sibling}function Fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Fd(t,e,n),t=t.sibling;t!==null;)Fd(t,e,n),t=t.sibling}var en=null,ii=!1;function Gi(t,e,n){for(n=n.child;n!==null;)d0(t,e,n),n=n.sibling}function d0(t,e,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(oc,n)}catch{}switch(n.tag){case 5:fn||Ns(n,e);case 6:var i=en,r=ii;en=null,Gi(t,e,n),en=i,ii=r,en!==null&&(ii?(t=en,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):en.removeChild(n.stateNode));break;case 18:en!==null&&(ii?(t=en,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),Yo(t)):$c(en,n.stateNode));break;case 4:i=en,r=ii,en=n.stateNode.containerInfo,ii=!0,Gi(t,e,n),en=i,ii=r;break;case 0:case 11:case 14:case 15:if(!fn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Id(n,e,o),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!fn&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ut(n,e,a)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(fn=(i=fn)||n.memoizedState!==null,Gi(t,e,n),fn=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function fp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Px),e.forEach(function(i){var r=Bx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:en=a.stateNode,ii=!1;break e;case 3:en=a.stateNode.containerInfo,ii=!0;break e;case 4:en=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(en===null)throw Error(_e(160));d0(s,o,r),en=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ut(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)f0(e,t),e=e.sibling}function f0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),di(t),i&4){try{zo(3,t,t.return),pc(3,t)}catch(y){Ut(t,t.return,y)}try{zo(5,t,t.return)}catch(y){Ut(t,t.return,y)}}break;case 1:Qn(e,t),di(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(Qn(e,t),di(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{Wo(r,"")}catch(y){Ut(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dg(r,s),od(a,o);var c=od(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?zg(r,f):d==="dangerouslySetInnerHTML"?Og(r,f):d==="children"?Wo(r,f):ff(r,d,f,c)}switch(a){case"input":td(r,s);break;case"textarea":Ug(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Fs(r,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Jo]=s}catch(y){Ut(t,t.return,y)}}break;case 6:if(Qn(e,t),di(t),i&4){if(t.stateNode===null)throw Error(_e(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Ut(t,t.return,y)}}break;case 3:if(Qn(e,t),di(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(y){Ut(t,t.return,y)}break;case 4:Qn(e,t),di(t);break;case 13:Qn(e,t),di(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(jf=Ft())),i&4&&fp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(fn=(c=fn)||d,Qn(e,t),fn=c):Qn(e,t),di(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(De=t,d=t.child;d!==null;){for(f=De=d;De!==null;){switch(h=De,v=h.child,h.tag){case 0:case 11:case 14:case 15:zo(4,h,h.return);break;case 1:Ns(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Ut(i,n,y)}}break;case 5:Ns(h,h.return);break;case 22:if(h.memoizedState!==null){pp(f);continue}}v!==null?(v.return=h,De=v):pp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=kg("display",o))}catch(y){Ut(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Ut(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qn(e,t),di(t),i&4&&fp(t);break;case 21:break;default:Qn(e,t),di(t)}}function di(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u0(n)){var i=n;break e}n=n.return}throw Error(_e(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wo(r,""),i.flags&=-33);var s=dp(t);Fd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=dp(t);Ud(t,a,o);break;default:throw Error(_e(161))}}catch(l){Ut(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Nx(t,e,n){De=t,h0(t)}function h0(t,e,n){for(var i=(t.mode&1)!==0;De!==null;){var r=De,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||La;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||fn;a=La;var c=fn;if(La=o,(fn=l)&&!c)for(De=r;De!==null;)o=De,l=o.child,o.tag===22&&o.memoizedState!==null?mp(r):l!==null?(l.return=o,De=l):mp(r);for(;s!==null;)De=s,h0(s),s=s.sibling;De=r,La=a,fn=c}hp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,De=s):hp(t)}}function hp(t){for(;De!==null;){var e=De;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:fn||pc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!fn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Yo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_e(163))}fn||e.flags&512&&Dd(e)}catch(h){Ut(e,e.return,h)}}if(e===t){De=null;break}if(n=e.sibling,n!==null){n.return=e.return,De=n;break}De=e.return}}function pp(t){for(;De!==null;){var e=De;if(e===t){De=null;break}var n=e.sibling;if(n!==null){n.return=e.return,De=n;break}De=e.return}}function mp(t){for(;De!==null;){var e=De;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pc(4,e)}catch(l){Ut(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ut(e,r,l)}}var s=e.return;try{Dd(e)}catch(l){Ut(e,s,l)}break;case 5:var o=e.return;try{Dd(e)}catch(l){Ut(e,o,l)}}}catch(l){Ut(e,e.return,l)}if(e===t){De=null;break}var a=e.sibling;if(a!==null){a.return=e.return,De=a;break}De=e.return}}var Ix=Math.ceil,Wl=ki.ReactCurrentDispatcher,Vf=ki.ReactCurrentOwner,Yn=ki.ReactCurrentBatchConfig,mt=0,Qt=null,Ht=null,sn=0,In=0,Is=Mr(0),Wt=0,sa=null,Yr=0,mc=0,Wf=0,Bo=null,wn=null,jf=0,Ks=1/0,Ai=null,jl=!1,Od=null,cr=null,Na=!1,tr=null,Xl=0,Ho=0,kd=null,xl=-1,Sl=0;function yn(){return mt&6?Ft():xl!==-1?xl:xl=Ft()}function ur(t){return t.mode&1?mt&2&&sn!==0?sn&-sn:gx.transition!==null?(Sl===0&&(Sl=Zg()),Sl):(t=_t,t!==0||(t=window.event,t=t===void 0?16:rv(t.type)),t):1}function ci(t,e,n,i){if(50<Ho)throw Ho=0,kd=null,Error(_e(185));ua(t,n,i),(!(mt&2)||t!==Qt)&&(t===Qt&&(!(mt&2)&&(mc|=n),Wt===4&&Ji(t,sn)),Rn(t,i),n===1&&mt===0&&!(e.mode&1)&&(Ks=Ft()+500,dc&&Er()))}function Rn(t,e){var n=t.callbackNode;gy(t,e);var i=Rl(t,t===Qt?sn:0);if(i===0)n!==null&&wh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&wh(n),e===1)t.tag===0?mx(gp.bind(null,t)):Ev(gp.bind(null,t)),dx(function(){!(mt&6)&&Er()}),n=null;else{switch(Qg(i)){case 1:n=vf;break;case 4:n=qg;break;case 16:n=Cl;break;case 536870912:n=Kg;break;default:n=Cl}n=S0(n,p0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function p0(t,e){if(xl=-1,Sl=0,mt&6)throw Error(_e(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=Rl(t,t===Qt?sn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=$l(t,i);else{e=i;var r=mt;mt|=2;var s=g0();(Qt!==t||sn!==e)&&(Ai=null,Ks=Ft()+500,zr(t,e));do try{Fx();break}catch(a){m0(t,a)}while(!0);Pf(),Wl.current=s,mt=r,Ht!==null?e=0:(Qt=null,sn=0,e=Wt)}if(e!==0){if(e===2&&(r=dd(t),r!==0&&(i=r,e=zd(t,r))),e===1)throw n=sa,zr(t,0),Ji(t,i),Rn(t,Ft()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!Dx(r)&&(e=$l(t,i),e===2&&(s=dd(t),s!==0&&(i=s,e=zd(t,s))),e===1))throw n=sa,zr(t,0),Ji(t,i),Rn(t,Ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(_e(345));case 2:Pr(t,wn,Ai);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=jf+500-Ft(),10<e)){if(Rl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){yn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yd(Pr.bind(null,t,wn,Ai),e);break}Pr(t,wn,Ai);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ix(i/1960))-i,10<i){t.timeoutHandle=yd(Pr.bind(null,t,wn,Ai),i);break}Pr(t,wn,Ai);break;case 5:Pr(t,wn,Ai);break;default:throw Error(_e(329))}}}return Rn(t,Ft()),t.callbackNode===n?p0.bind(null,t):null}function zd(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=$l(t,e),t!==2&&(e=wn,wn=n,e!==null&&Bd(e)),t}function Bd(t){wn===null?wn=t:wn.push.apply(wn,t)}function Dx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~Wf,e&=~mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function gp(t){if(mt&6)throw Error(_e(327));Hs();var e=Rl(t,0);if(!(e&1))return Rn(t,Ft()),null;var n=$l(t,e);if(t.tag!==0&&n===2){var i=dd(t);i!==0&&(e=i,n=zd(t,i))}if(n===1)throw n=sa,zr(t,0),Ji(t,e),Rn(t,Ft()),n;if(n===6)throw Error(_e(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,wn,Ai),Rn(t,Ft()),null}function Xf(t,e){var n=mt;mt|=1;try{return t(e)}finally{mt=n,mt===0&&(Ks=Ft()+500,dc&&Er())}}function qr(t){tr!==null&&tr.tag===0&&!(mt&6)&&Hs();var e=mt;mt|=1;var n=Yn.transition,i=_t;try{if(Yn.transition=null,_t=1,t)return t()}finally{_t=i,Yn.transition=n,mt=e,!(mt&6)&&Er()}}function $f(){In=Is.current,Tt(Is)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ux(n)),Ht!==null)for(n=Ht.return;n!==null;){var i=n;switch(bf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Dl();break;case 3:Ys(),Tt(bn),Tt(hn),Ff();break;case 5:Uf(i);break;case 4:Ys();break;case 13:Tt(Pt);break;case 19:Tt(Pt);break;case 10:Lf(i.type._context);break;case 22:case 23:$f()}n=n.return}if(Qt=t,Ht=t=dr(t.current,null),sn=In=e,Wt=0,sa=null,Wf=mc=Yr=0,wn=Bo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Fr=null}return t}function m0(t,e){do{var n=Ht;try{if(Pf(),vl.current=Vl,Gl){for(var i=Lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gl=!1}if($r=0,Kt=Vt=Lt=null,ko=!1,na=0,Vf.current=null,n===null||n.return===null){Wt=1,sa=e,Ht=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=sn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=ip(o);if(v!==null){v.flags&=-257,rp(v,o,a,s,e),v.mode&1&&np(s,c,e),e=v,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){np(s,c,e),Yf();break e}l=Error(_e(426))}}else if(At&&a.mode&1){var p=ip(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),rp(p,o,a,s,e),Cf(qs(l,a));break e}}s=l=qs(l,a),Wt!==4&&(Wt=2),Bo===null?Bo=[s]:Bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Qv(s,l,e);Kh(s,u);break e;case 1:a=l;var m=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(cr===null||!cr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Jv(s,a,e);Kh(s,x);break e}}s=s.return}while(s!==null)}_0(n)}catch(L){e=L,Ht===n&&n!==null&&(Ht=n=n.return);continue}break}while(!0)}function g0(){var t=Wl.current;return Wl.current=Vl,t===null?Vl:t}function Yf(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Qt===null||!(Yr&268435455)&&!(mc&268435455)||Ji(Qt,sn)}function $l(t,e){var n=mt;mt|=2;var i=g0();(Qt!==t||sn!==e)&&(Ai=null,zr(t,e));do try{Ux();break}catch(r){m0(t,r)}while(!0);if(Pf(),mt=n,Wl.current=i,Ht!==null)throw Error(_e(261));return Qt=null,sn=0,Wt}function Ux(){for(;Ht!==null;)v0(Ht)}function Fx(){for(;Ht!==null&&!ay();)v0(Ht)}function v0(t){var e=x0(t.alternate,t,In);t.memoizedProps=t.pendingProps,e===null?_0(t):Ht=e,Vf.current=null}function _0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Rx(n,e),n!==null){n.flags&=32767,Ht=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Wt=6,Ht=null;return}}else if(n=Cx(n,e,In),n!==null){Ht=n;return}if(e=e.sibling,e!==null){Ht=e;return}Ht=e=t}while(e!==null);Wt===0&&(Wt=5)}function Pr(t,e,n){var i=_t,r=Yn.transition;try{Yn.transition=null,_t=1,Ox(t,e,n,i)}finally{Yn.transition=r,_t=i}return null}function Ox(t,e,n,i){do Hs();while(tr!==null);if(mt&6)throw Error(_e(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_e(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vy(t,s),t===Qt&&(Ht=Qt=null,sn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,S0(Cl,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=_t;_t=1;var a=mt;mt|=4,Vf.current=null,Lx(t,n),f0(n,t),ix(vd),Pl=!!gd,vd=gd=null,t.current=n,Nx(n),ly(),mt=a,_t=o,Yn.transition=s}else t.current=n;if(Na&&(Na=!1,tr=t,Xl=r),s=t.pendingLanes,s===0&&(cr=null),dy(n.stateNode),Rn(t,Ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(jl)throw jl=!1,t=Od,Od=null,t;return Xl&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===kd?Ho++:(Ho=0,kd=t):Ho=0,Er(),null}function Hs(){if(tr!==null){var t=Qg(Xl),e=Yn.transition,n=_t;try{if(Yn.transition=null,_t=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,Xl=0,mt&6)throw Error(_e(331));var r=mt;for(mt|=4,De=t.current;De!==null;){var s=De,o=s.child;if(De.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(De=c;De!==null;){var d=De;switch(d.tag){case 0:case 11:case 15:zo(8,d,s)}var f=d.child;if(f!==null)f.return=d,De=f;else for(;De!==null;){d=De;var h=d.sibling,v=d.return;if(c0(d),d===c){De=null;break}if(h!==null){h.return=v,De=h;break}De=v}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}De=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,De=o;else e:for(;De!==null;){if(s=De,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,De=u;break e}De=s.return}}var m=t.current;for(De=m;De!==null;){o=De;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,De=g;else e:for(o=m;De!==null;){if(a=De,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pc(9,a)}}catch(L){Ut(a,a.return,L)}if(a===o){De=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,De=x;break e}De=a.return}}if(mt=r,Er(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(oc,t)}catch{}i=!0}return i}finally{_t=n,Yn.transition=e}}return!1}function vp(t,e,n){e=qs(n,e),e=Qv(t,e,1),t=lr(t,e,1),e=yn(),t!==null&&(ua(t,1,e),Rn(t,e))}function Ut(t,e,n){if(t.tag===3)vp(t,t,n);else for(;e!==null;){if(e.tag===3){vp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=qs(n,t),t=Jv(e,t,1),e=lr(e,t,1),t=yn(),e!==null&&(ua(e,1,t),Rn(e,t));break}}e=e.return}}function kx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=yn(),t.pingedLanes|=t.suspendedLanes&n,Qt===t&&(sn&n)===n&&(Wt===4||Wt===3&&(sn&130023424)===sn&&500>Ft()-jf?zr(t,0):Wf|=n),Rn(t,e)}function y0(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=yn();t=Ui(t,e),t!==null&&(ua(t,e,n),Rn(t,n))}function zx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),y0(t,n)}function Bx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(_e(314))}i!==null&&i.delete(e),y0(t,n)}var x0;x0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bn.current)An=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return An=!1,bx(t,e,n);An=!!(t.flags&131072)}else An=!1,At&&e.flags&1048576&&wv(e,Ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(t,e),t=e.pendingProps;var r=js(e,hn.current);Bs(e,n),r=kf(null,e,i,t,r,n);var s=zf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Cn(i)?(s=!0,Ul(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,If(e),r.updater=hc,e.stateNode=r,r._reactInternals=e,Ad(e,i,t,n),e=Rd(null,e,i,!0,s,n)):(e.tag=0,At&&s&&Af(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Gx(i),t=ni(i,t),r){case 0:e=Cd(null,e,i,t,n);break e;case 1:e=ap(null,e,i,t,n);break e;case 11:e=sp(null,e,i,t,n);break e;case 14:e=op(null,e,i,ni(i.type,t),n);break e}throw Error(_e(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Cd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),ap(t,e,i,r,n);case 3:e:{if(i0(e),t===null)throw Error(_e(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Pv(t,e),Bl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qs(Error(_e(423)),e),e=lp(t,e,i,n,r);break e}else if(i!==r){r=qs(Error(_e(424)),e),e=lp(t,e,i,n,r);break e}else for(Dn=ar(e.stateNode.containerInfo.firstChild),Un=e,At=!0,ri=null,n=Cv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xs(),i===r){e=Fi(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return Lv(e),t===null&&Ed(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,_d(i,r)?o=null:s!==null&&_d(i,s)&&(e.flags|=32),n0(t,e),vn(t,e,o,n),e.child;case 6:return t===null&&Ed(e),null;case 13:return r0(t,e,n);case 4:return Df(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=$s(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),sp(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Mt(kl,i._currentValue),i._currentValue=o,s!==null)if(ui(s.value,o)){if(s.children===r.children&&!bn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ni(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_e(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Bs(e,n),r=qn(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),op(t,e,i,r,n);case 15:return e0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),yl(t,e),e.tag=1,Cn(i)?(t=!0,Ul(e)):t=!1,Bs(e,n),Zv(e,i,r),Ad(e,i,r,n),Rd(null,e,i,!0,t,n);case 19:return s0(t,e,n);case 22:return t0(t,e,n)}throw Error(_e(156,e.tag))};function S0(t,e){return Yg(t,e)}function Hx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new Hx(t,e,n,i)}function qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gx(t){if(typeof t=="function")return qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pf)return 11;if(t===mf)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")qf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Br(n.children,r,s,e);case hf:o=8,r|=8;break;case Ku:return t=Xn(12,n,e,r|2),t.elementType=Ku,t.lanes=s,t;case Zu:return t=Xn(13,n,e,r),t.elementType=Zu,t.lanes=s,t;case Qu:return t=Xn(19,n,e,r),t.elementType=Qu,t.lanes=s,t;case Lg:return gc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rg:o=10;break e;case Pg:o=9;break e;case pf:o=11;break e;case mf:o=14;break e;case Ki:o=16,i=null;break e}throw Error(_e(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Br(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function gc(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=Lg,t.lanes=n,t.stateNode={isHidden:!1},t}function tu(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function nu(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fc(0),this.expirationTimes=Fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kf(t,e,n,i,r,s,o,a,l){return t=new Vx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},If(s),t}function Wx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function M0(t){if(!t)return _r;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(_e(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_e(171))}if(t.tag===1){var n=t.type;if(Cn(n))return Mv(t,n,e)}return e}function E0(t,e,n,i,r,s,o,a,l){return t=Kf(n,i,!0,t,r,s,o,a,l),t.context=M0(null),n=t.current,i=yn(),r=ur(n),s=Ni(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,ua(t,r,i),Rn(t,i),t}function vc(t,e,n,i){var r=e.current,s=yn(),o=ur(r);return n=M0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ni(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,o),t!==null&&(ci(t,r,o,s),gl(t,r,o)),o}function Yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _p(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zf(t,e){_p(t,e),(t=t.alternate)&&_p(t,e)}function jx(){return null}var w0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qf(t){this._internalRoot=t}_c.prototype.render=Qf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_e(409));vc(t,e,null,null)};_c.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){vc(null,t,null,null)}),e[Di]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var e=tv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&iv(t)}};function Jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yp(){}function Xx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Yl(o);s.call(c)}}var o=E0(e,i,t,0,null,!1,!1,"",yp);return t._reactRootContainer=o,t[Di]=o.current,Zo(t.nodeType===8?t.parentNode:t),qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Yl(l);a.call(c)}}var l=Kf(t,0,!1,null,null,!1,!1,"",yp);return t._reactRootContainer=l,t[Di]=l.current,Zo(t.nodeType===8?t.parentNode:t),qr(function(){vc(e,l,n,i)}),l}function xc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Yl(o);a.call(l)}}vc(e,o,t,r)}else o=Xx(n,e,t,r,i);return Yl(o)}Jg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(_f(e,n|1),Rn(e,Ft()),!(mt&6)&&(Ks=Ft()+500,Er()))}break;case 13:qr(function(){var i=Ui(t,1);if(i!==null){var r=yn();ci(i,t,1,r)}}),Zf(t,1)}};yf=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=yn();ci(e,t,134217728,n)}Zf(t,134217728)}};ev=function(t){if(t.tag===13){var e=ur(t),n=Ui(t,e);if(n!==null){var i=yn();ci(n,t,e,i)}Zf(t,e)}};tv=function(){return _t};nv=function(t,e){var n=_t;try{return _t=t,e()}finally{_t=n}};ld=function(t,e,n){switch(e){case"input":if(td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=uc(i);if(!r)throw Error(_e(90));Ig(i),td(i,r)}}}break;case"textarea":Ug(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};Gg=Xf;Vg=qr;var $x={usingClientEntryPoint:!1,Events:[fa,bs,uc,Bg,Hg,Xf]},yo={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yx={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xg(t),t===null?null:t.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{oc=Ia.inject(Yx),_i=Ia}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(e))throw Error(_e(200));return Wx(t,e,null,n)};On.createRoot=function(t,e){if(!Jf(t))throw Error(_e(299));var n=!1,i="",r=w0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kf(t,1,!1,null,null,n,!1,i,r),t[Di]=e.current,Zo(t.nodeType===8?t.parentNode:t),new Qf(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_e(188)):(t=Object.keys(t).join(","),Error(_e(268,t)));return t=Xg(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return qr(t)};On.hydrate=function(t,e,n){if(!yc(e))throw Error(_e(200));return xc(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!Jf(t))throw Error(_e(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=w0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=E0(e,null,t,1,n??null,r,!1,s,o),t[Di]=e.current,Zo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new _c(e)};On.render=function(t,e,n){if(!yc(e))throw Error(_e(200));return xc(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!yc(t))throw Error(_e(40));return t._reactRootContainer?(qr(function(){xc(null,null,t,!1,function(){t._reactRootContainer=null,t[Di]=null})}),!0):!1};On.unstable_batchedUpdates=Xf;On.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!yc(n))throw Error(_e(200));if(t==null||t._reactInternals===void 0)throw Error(_e(38));return xc(t,e,n,!1,i)};On.version="18.3.1-next-f1338f8080-20240426";function T0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T0)}catch(t){console.error(t)}}T0(),Tg.exports=On;var qx=Tg.exports,xp=qx;Yu.createRoot=xp.createRoot,Yu.hydrateRoot=xp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},oa.apply(this,arguments)}var nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nr||(nr={}));const Sp="popstate";function Kx(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Hd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ql(r)}return Qx(e,n,null,t)}function Nt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function eh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Zx(){return Math.random().toString(36).substr(2,8)}function Mp(t,e){return{usr:t.state,key:t.key,idx:e}}function Hd(t,e,n,i){return n===void 0&&(n=null),oa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?oo(e):e,{state:n,key:e&&e.key||i||Zx()})}function ql(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function oo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Qx(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=nr.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(oa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=nr.Pop;let p=d(),u=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:u})}function h(p,u){a=nr.Push;let m=Hd(y.location,p,u);c=d()+1;let g=Mp(m,c),x=y.createHref(m);try{o.pushState(g,"",x)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;r.location.assign(x)}s&&l&&l({action:a,location:y.location,delta:1})}function v(p,u){a=nr.Replace;let m=Hd(y.location,p,u);c=d();let g=Mp(m,c),x=y.createHref(m);o.replaceState(g,"",x),s&&l&&l({action:a,location:y.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof p=="string"?p:ql(p);return m=m.replace(/ $/,"%20"),Nt(u,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,u)}let y={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Sp,f),l=p,()=>{r.removeEventListener(Sp,f),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:v,go(p){return o.go(p)}};return y}var Ep;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ep||(Ep={}));function Jx(t,e,n){return n===void 0&&(n="/"),eS(t,e,n)}function eS(t,e,n,i){let r=typeof e=="string"?oo(e):e,s=Zs(r.pathname||"/",n);if(s==null)return null;let o=A0(t);tS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=fS(s);a=uS(o[l],c)}return a}function A0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Nt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=fr([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Nt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),A0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:lS(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of b0(s.path))r(s,o,l)}),e}function b0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=b0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function tS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const nS=/^:[\w-]+$/,iS=3,rS=2,sS=1,oS=10,aS=-2,wp=t=>t==="*";function lS(t,e){let n=t.split("/"),i=n.length;return n.some(wp)&&(i+=aS),e&&(i+=rS),n.filter(r=>!wp(r)).reduce((r,s)=>r+(nS.test(s)?iS:s===""?sS:oS),i)}function cS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function uS(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Gd({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:fr([s,f.pathname]),pathnameBase:vS(fr([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=fr([s,f.pathnameBase]))}return o}function Gd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=dS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let y=a[f]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=a[f];return v&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function dS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),eh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function fS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return eh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Zs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const hS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pS=t=>hS.test(t);function mS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?oo(t):t,s;if(n)if(pS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),eh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Tp(n.substring(1),"/"):s=Tp(n,e)}else s=e;return{pathname:s,search:_S(i),hash:yS(r)}}function Tp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function iu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function th(t,e){let n=gS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function nh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=oo(t):(r=oa({},t),Nt(!r.pathname||!r.pathname.includes("?"),iu("?","pathname","search",r)),Nt(!r.pathname||!r.pathname.includes("#"),iu("#","pathname","hash",r)),Nt(!r.search||!r.search.includes("#"),iu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=mS(r,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const fr=t=>t.join("/").replace(/\/\/+/g,"/"),vS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_S=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,yS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const C0=["post","put","patch","delete"];new Set(C0);const SS=["get",...C0];new Set(SS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},aa.apply(this,arguments)}const Sc=F.createContext(null),R0=F.createContext(null),zi=F.createContext(null),Mc=F.createContext(null),Bi=F.createContext({outlet:null,matches:[],isDataRoute:!1}),P0=F.createContext(null);function MS(t,e){let{relative:n}=e===void 0?{}:e;ao()||Nt(!1);let{basename:i,navigator:r}=F.useContext(zi),{hash:s,pathname:o,search:a}=wc(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:fr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function ao(){return F.useContext(Mc)!=null}function Hi(){return ao()||Nt(!1),F.useContext(Mc).location}function L0(t){F.useContext(zi).static||F.useLayoutEffect(t)}function Ec(){let{isDataRoute:t}=F.useContext(Bi);return t?OS():ES()}function ES(){ao()||Nt(!1);let t=F.useContext(Sc),{basename:e,future:n,navigator:i}=F.useContext(zi),{matches:r}=F.useContext(Bi),{pathname:s}=Hi(),o=JSON.stringify(th(r,n.v7_relativeSplatPath)),a=F.useRef(!1);return L0(()=>{a.current=!0}),F.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let f=nh(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:fr([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,o,s,t])}const wS=F.createContext(null);function TS(t){let e=F.useContext(Bi).outlet;return e&&F.createElement(wS.Provider,{value:t},e)}function wc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=F.useContext(zi),{matches:r}=F.useContext(Bi),{pathname:s}=Hi(),o=JSON.stringify(th(r,i.v7_relativeSplatPath));return F.useMemo(()=>nh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function AS(t,e){return bS(t,e)}function bS(t,e,n,i){ao()||Nt(!1);let{navigator:r}=F.useContext(zi),{matches:s}=F.useContext(Bi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Hi(),d;if(e){var f;let p=typeof e=="string"?oo(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||Nt(!1),d=p}else d=c;let h=d.pathname||"/",v=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=Jx(t,{pathname:v}),y=NS(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:fr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:fr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&y?F.createElement(Mc.Provider,{value:{location:aa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:nr.Pop}},y):y}function CS(){let t=FS(),e=xS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:r},n):null,null)}const RS=F.createElement(CS,null);class PS extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(Bi.Provider,{value:this.props.routeContext},F.createElement(P0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function LS(t){let{routeContext:e,match:n,children:i}=t,r=F.useContext(Sc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(Bi.Provider,{value:e},i)}function NS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Nt(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:v}=n,_=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||_){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,h)=>{let v,_=!1,y=null,p=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||RS,l&&(c<0&&h===0?(kS("route-fallback"),_=!0,p=null):c===h&&(_=!0,p=f.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,h+1)),m=()=>{let g;return v?g=y:_?g=p:f.route.Component?g=F.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,F.createElement(LS,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?F.createElement(PS,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:m(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):m()},null)}var N0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(N0||{}),I0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(I0||{});function IS(t){let e=F.useContext(Sc);return e||Nt(!1),e}function DS(t){let e=F.useContext(R0);return e||Nt(!1),e}function US(t){let e=F.useContext(Bi);return e||Nt(!1),e}function D0(t){let e=US(),n=e.matches[e.matches.length-1];return n.route.id||Nt(!1),n.route.id}function FS(){var t;let e=F.useContext(P0),n=DS(),i=D0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function OS(){let{router:t}=IS(N0.UseNavigateStable),e=D0(I0.UseNavigateStable),n=F.useRef(!1);return L0(()=>{n.current=!0}),F.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,aa({fromRouteId:e},s)))},[t,e])}const Ap={};function kS(t,e,n){Ap[t]||(Ap[t]=!0)}function zS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function U0(t){let{to:e,replace:n,state:i,relative:r}=t;ao()||Nt(!1);let{future:s,static:o}=F.useContext(zi),{matches:a}=F.useContext(Bi),{pathname:l}=Hi(),c=Ec(),d=nh(e,th(a,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(d);return F.useEffect(()=>c(JSON.parse(f),{replace:n,state:i,relative:r}),[c,f,r,n,i]),null}function BS(t){return TS(t.context)}function qi(t){Nt(!1)}function HS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=nr.Pop,navigator:s,static:o=!1,future:a}=t;ao()&&Nt(!1);let l=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:l,navigator:s,static:o,future:aa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=oo(i));let{pathname:d="/",search:f="",hash:h="",state:v=null,key:_="default"}=i,y=F.useMemo(()=>{let p=Zs(d,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:v,key:_},navigationType:r}},[l,d,f,h,v,_,r]);return y==null?null:F.createElement(zi.Provider,{value:c},F.createElement(Mc.Provider,{children:n,value:y}))}function GS(t){let{children:e,location:n}=t;return AS(Vd(e),n)}new Promise(()=>{});function Vd(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(i,r)=>{if(!F.isValidElement(i))return;let s=[...e,r];if(i.type===F.Fragment){n.push.apply(n,Vd(i.props.children,s));return}i.type!==qi&&Nt(!1),!i.props.index||!i.props.children||Nt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Vd(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kl(){return Kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Kl.apply(this,arguments)}function F0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function VS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function WS(t,e){return t.button===0&&(!e||e==="_self")&&!VS(t)}const jS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],XS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],$S="6";try{window.__reactRouterVersion=$S}catch{}const YS=F.createContext({isTransitioning:!1}),qS="startTransition",bp=k_[qS];function KS(t){let{basename:e,children:n,future:i,window:r}=t,s=F.useRef();s.current==null&&(s.current=Kx({window:r,v5Compat:!0}));let o=s.current,[a,l]=F.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},d=F.useCallback(f=>{c&&bp?bp(()=>l(f)):l(f)},[l,c]);return F.useLayoutEffect(()=>o.listen(d),[o,d]),F.useEffect(()=>zS(i),[i]),F.createElement(HS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const ZS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,JS=F.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,h=F0(e,jS),{basename:v}=F.useContext(zi),_,y=!1;if(typeof c=="string"&&QS.test(c)&&(_=c,ZS))try{let g=new URL(window.location.href),x=c.startsWith("//")?new URL(g.protocol+c):new URL(c),L=Zs(x.pathname,v);x.origin===g.origin&&L!=null?c=L+x.search+x.hash:y=!0}catch{}let p=MS(c,{relative:r}),u=nM(c,{replace:o,state:a,target:l,preventScrollReset:d,relative:r,viewTransition:f});function m(g){i&&i(g),g.defaultPrevented||u(g)}return F.createElement("a",Kl({},h,{href:_||p,onClick:y||s?i:m,ref:n,target:l}))}),eM=F.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:d}=e,f=F0(e,XS),h=wc(l,{relative:f.relative}),v=Hi(),_=F.useContext(R0),{navigator:y,basename:p}=F.useContext(zi),u=_!=null&&iM(h)&&c===!0,m=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,g=v.pathname,x=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(g=g.toLowerCase(),x=x?x.toLowerCase():null,m=m.toLowerCase()),x&&p&&(x=Zs(x,p)||x);const L=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let C=g===m||!o&&g.startsWith(m)&&g.charAt(L)==="/",b=x!=null&&(x===m||!o&&x.startsWith(m)&&x.charAt(m.length)==="/"),G={isActive:C,isPending:b,isTransitioning:u},re=C?i:void 0,S;typeof s=="function"?S=s(G):S=[s,C?"active":null,b?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(G):a;return F.createElement(JS,Kl({},f,{"aria-current":re,className:S,ref:n,style:R,to:l,viewTransition:c}),typeof d=="function"?d(G):d)});var Wd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Wd||(Wd={}));var Cp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Cp||(Cp={}));function tM(t){let e=F.useContext(Sc);return e||Nt(!1),e}function nM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Ec(),c=Hi(),d=wc(t,{relative:o});return F.useCallback(f=>{if(WS(f,n)){f.preventDefault();let h=i!==void 0?i:ql(c)===ql(d);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,d,i,r,n,t,s,o,a])}function iM(t,e){e===void 0&&(e={});let n=F.useContext(YS);n==null&&Nt(!1);let{basename:i}=tM(Wd.useViewTransitionState),r=wc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Zs(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=Zs(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Gd(r.pathname,o)!=null||Gd(r.pathname,s)!=null}const ih="reforgedz.session";function kt(){const t=localStorage.getItem(ih);if(!t)return null;try{const e=JSON.parse(t);return!e||typeof e.token!="string"||e.token.length===0?null:e}catch{return null}}function rM(t){localStorage.setItem(ih,JSON.stringify(t))}function sM(){localStorage.removeItem(ih)}function oM(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),n=(4-e.length%4)%4,i=e+"=".repeat(n);return atob(i)}function aM(){const t=kt();if(!t)return null;const e=String(t.token).split(".");if(e.length!==2)return null;try{const n=oM(e[0]),i=JSON.parse(n);return!i||typeof i.sub!="string"?null:i}catch{return null}}function ru(t){const e=aM();if(!e)return!1;const n=e.tools;return!n||typeof n!="object"?t==="replay":!!n[t]}function Gt(){const t="https://admin.reforgedz.xyz";return t.length>0?t.replace(/\/$/,""):window.location.origin}async function lM(t,e){const n=Gt(),i=await fetch(`${n}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})});if(!i.ok){const r=await i.text();throw new Error(r||`Login failed (${i.status})`)}return await i.json()}async function cM(){const t=Gt(),e=kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to list servers (${n.status})`)}return await n.json()}async function jd(){const t=Gt(),e=kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/replay/statusAll`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to get replay status for all servers (${n.status})`)}return await n.json()}async function Rp(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/range?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get replay range (${i.status})`)}return await i.json()}async function Pp(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/players?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to list replay players (${i.status})`)}return await i.json()}async function su(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=new URLSearchParams;i.set("serverId",t.serverId),typeof t.sinceTsMs=="number"&&i.set("sinceTsMs",String(t.sinceTsMs)),typeof t.untilTsMs=="number"&&i.set("untilTsMs",String(t.untilTsMs)),typeof t.limit=="number"&&i.set("limit",String(t.limit)),t.tail&&i.set("tail","1");const r=await fetch(`${e}/api/replay/events?${i.toString()}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!r.ok){const s=await r.text();throw new Error(s||`Failed to get replay events (${r.status})`)}return await r.json()}async function uM(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/gmPing`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to send GM ping (${i.status})`)}return await i.json()}async function ou(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapTerrain?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map terrain (${i.status})`)}return await i.json()}async function au(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapDescriptors?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map descriptors (${i.status})`)}return await i.json()}async function dM(){const t=Gt(),e=kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/admin/users`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list users (${n.status})`);return await n.json()}async function fM(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to create user (${i.status})`);return await i.json()}async function lu(t,e){const n=Gt(),i=kt();if(!i)throw new Error("Not authenticated");const r=await fetch(`${n}/api/admin/users/${encodeURIComponent(t)}`,{method:"PUT",headers:{Authorization:`Bearer ${i.token}`,"Content-Type":"application/json"},body:JSON.stringify({tools:e})});if(!r.ok)throw new Error(await r.text()||`Failed to update user (${r.status})`);return await r.json()}async function hM(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users/${encodeURIComponent(t)}`,{method:"DELETE",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to delete user (${i.status})`);return await i.json()}async function pM(){const t=Gt(),e=kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list dev servers (${n.status})`);return await n.json()}async function mM(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to add dev server (${i.status})`);return await i.json()}async function gM(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/clear?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to clear history (${i.status})`);return await i.json()}async function vM(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/regenerateTerrain?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to regenerate terrain (${i.status})`);return await i.json()}async function _M(){const t=Gt(),e=kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/discordWebhook`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to load webhook (${n.status})`);return await n.json()}async function yM(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/discordWebhook`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify({webhookUrl:t})});if(!i.ok)throw new Error(await i.text()||`Failed to save webhook (${i.status})`);return await i.json()}async function xM(t){const e=Gt(),n=kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/exportDiscord`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to export to Discord (${i.status})`);return await i.json()}function SM(){const t=Ec(),e=Hi(),n=F.useMemo(()=>{const h=e.state;return h&&typeof h.from=="string"&&h.from.length>0?h.from:"/"},[e.state]),[i,r]=F.useState(""),[s,o]=F.useState(""),[a,l]=F.useState(null),[c,d]=F.useState(!1);async function f(h){if(h.preventDefault(),l(null),i.trim().length===0||s.length===0){l("Enter username and password");return}d(!0);try{const v=await lM(i.trim(),s);rM({token:v.token}),t(n,{replace:!0})}catch(v){const _=v instanceof Error?v.message:"Login failed";l(_)}finally{d(!1)}}return M.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24,boxSizing:"border-box"},children:M.jsxs("div",{className:"stack",style:{width:"min(440px, 100%)",gap:14},children:[M.jsxs("div",{style:{textAlign:"center"},children:[M.jsx("div",{className:"label",children:"Welcome"}),M.jsx("h1",{className:"h1",style:{fontSize:22,marginTop:6},children:"ReforgedZ Admin Menu"}),M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Sign in to continue."})]}),M.jsx("div",{className:"card",style:{padding:18},children:M.jsxs("form",{className:"stack",onSubmit:f,children:[M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx("div",{className:"label",children:"Username"}),M.jsx("input",{className:"input",value:i,onChange:h=>r(h.target.value),autoComplete:"username"})]}),M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx("div",{className:"label",children:"Password"}),M.jsx("input",{className:"input",type:"password",value:s,onChange:h=>o(h.target.value),autoComplete:"current-password"})]}),a?M.jsx("div",{className:"error",style:{fontSize:13},children:a}):null,M.jsx("button",{className:"button buttonPrimary",type:"submit",disabled:c,children:c?"Signing in…":"Sign in"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"If you aren't meant to be here, say hi to eiry, I know where you live!."})]})})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="161",MM=0,Lp=1,EM=2,O0=1,k0=2,Ti=3,yr=0,Pn=1,si=2,hr=0,Gs=1,Np=2,Ip=3,Dp=4,wM=5,Ir=100,TM=101,AM=102,Up=103,Fp=104,bM=200,CM=201,RM=202,PM=203,Xd=204,$d=205,LM=206,NM=207,IM=208,DM=209,UM=210,FM=211,OM=212,kM=213,zM=214,BM=0,HM=1,GM=2,Zl=3,VM=4,WM=5,jM=6,XM=7,z0=0,$M=1,YM=2,pr=0,qM=1,KM=2,ZM=3,QM=4,JM=5,eE=6,B0=300,Qs=301,Js=302,Yd=303,qd=304,Tc=306,Kd=1e3,oi=1001,Zd=1002,_n=1003,Op=1004,xo=1005,En=1006,cu=1007,kr=1008,mr=1009,tE=1010,nE=1011,sh=1012,H0=1013,ir=1014,Ci=1015,la=1016,G0=1017,V0=1018,Hr=1020,iE=1021,ai=1023,rE=1024,sE=1025,Gr=1026,eo=1027,oE=1028,W0=1029,aE=1030,j0=1031,X0=1033,uu=33776,du=33777,fu=33778,hu=33779,kp=35840,zp=35841,Bp=35842,Hp=35843,$0=36196,Gp=37492,Vp=37496,Wp=37808,jp=37809,Xp=37810,$p=37811,Yp=37812,qp=37813,Kp=37814,Zp=37815,Qp=37816,Jp=37817,em=37818,tm=37819,nm=37820,im=37821,pu=36492,rm=36494,sm=36495,lE=36283,om=36284,am=36285,lm=36286,Y0=3e3,Vr=3001,cE=3200,uE=3201,q0=0,dE=1,Wn="",tn="srgb",Oi="srgb-linear",oh="display-p3",Ac="display-p3-linear",Ql="linear",wt="srgb",Jl="rec709",ec="p3",ns=7680,cm=519,fE=512,hE=513,pE=514,K0=515,mE=516,gE=517,vE=518,_E=519,Qd=35044,um="300 es",Jd=1035,Li=2e3,tc=2001;class lo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],El=Math.PI/180,ef=180/Math.PI;function gr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[t&255]+un[t>>8&255]+un[t>>16&255]+un[t>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Tn(t,e,n){return Math.max(e,Math.min(n,t))}function yE(t,e){return(t%e+e)%e}function mu(t,e,n){return(1-n)*t+n*e}function dm(t){return(t&t-1)===0&&t!==0}function tf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function vi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,n=0){st.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,i,r,s,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],v=i[5],_=i[8],y=r[0],p=r[3],u=r[6],m=r[1],g=r[4],x=r[7],L=r[2],C=r[5],b=r[8];return s[0]=o*y+a*m+l*L,s[3]=o*p+a*g+l*C,s[6]=o*u+a*x+l*b,s[1]=c*y+d*m+f*L,s[4]=c*p+d*g+f*C,s[7]=c*u+d*x+f*b,s[2]=h*y+v*m+_*L,s[5]=h*p+v*g+_*C,s[8]=h*u+v*x+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,v=c*s-o*l,_=n*f+i*h+r*v;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=v*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gu.makeScale(e,n)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,n){return this.premultiply(gu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gu=new ot;function Z0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function xE(){const t=nc("canvas");return t.style.display="block",t}const fm={};function Wr(t){t in fm||(fm[t]=!0,console.warn(t))}const hm=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pm=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Da={[Oi]:{transfer:Ql,primaries:Jl,toReference:t=>t,fromReference:t=>t},[tn]:{transfer:wt,primaries:Jl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ac]:{transfer:Ql,primaries:ec,toReference:t=>t.applyMatrix3(pm),fromReference:t=>t.applyMatrix3(hm)},[oh]:{transfer:wt,primaries:ec,toReference:t=>t.convertSRGBToLinear().applyMatrix3(pm),fromReference:t=>t.applyMatrix3(hm).convertLinearToSRGB()}},SE=new Set([Oi,Ac]),xt={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!SE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Da[e].toReference,r=Da[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Da[t].primaries},getTransfer:function(t){return t===Wn?Ql:Da[t].transfer}};function Vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class Q0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=nc("canvas")),is.width=e.width,is.height=e.height;const i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=is}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vs(n[i]/255)*255):n[i]=Vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ME=0;class J0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_u(r[o].image)):s.push(_u(r[o]))}else s=_u(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function _u(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Q0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EE=0;class xn extends lo{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=oi,r=oi,s=En,o=kr,a=ai,l=mr,c=xn.DEFAULT_ANISOTROPY,d=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=gr(),this.name="",this.source=new J0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Vr?tn:Wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kd:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kd:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tn?Vr:Y0}set encoding(e){Wr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vr?tn:Wn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=B0;xn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,n=0,i=0,r=1){Zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],v=l[5],_=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+v+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,x=(v+1)/2,L=(u+1)/2,C=(d+h)/4,b=(f+y)/4,G=(_+p)/4;return g>x&&g>L?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=b/i):x>L?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=G/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=b/s,r=G/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-_)*(p-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(m)<.001&&(m=1),this.x=(p-_)/m,this.y=(f-y)/m,this.z=(h-d)/m,this.w=Math.acos((c+v+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wE extends lo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Zt(0,0,e,n),this.scissorTest=!1,this.viewport=new Zt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Wr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Vr?tn:Wn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new J0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends wE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class e_ extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class TE extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],v=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=v,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||c!==v||d!==_){let p=1-a;const u=l*h+c*v+d*_+f*y,m=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const L=Math.sqrt(g),C=Math.atan2(L,u*m);p=Math.sin(p*C)/L,a=Math.sin(a*C)/L}const x=a*m;if(l=l*p+h*x,c=c*p+v*x,d=d*p+_*x,f=f*p+y*x,p===1-a){const L=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=L,c*=L,d*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],v=s[o+2],_=s[o+3];return e[n]=a*_+d*f+l*v-c*h,e[n+1]=l*_+d*h+c*f-a*v,e[n+2]=c*_+d*v+a*h-l*f,e[n+3]=d*_-a*f-l*h-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),v=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*v*_,this._y=c*v*f-h*d*_,this._z=c*d*_+h*v*f,this._w=c*d*f-h*v*_;break;case"YXZ":this._x=h*d*f+c*v*_,this._y=c*v*f-h*d*_,this._z=c*d*_-h*v*f,this._w=c*d*f+h*v*_;break;case"ZXY":this._x=h*d*f-c*v*_,this._y=c*v*f+h*d*_,this._z=c*d*_+h*v*f,this._w=c*d*f-h*v*_;break;case"ZYX":this._x=h*d*f-c*v*_,this._y=c*v*f+h*d*_,this._z=c*d*_-h*v*f,this._w=c*d*f+h*v*_;break;case"YZX":this._x=h*d*f+c*v*_,this._y=c*v*f+h*d*_,this._z=c*d*_-h*v*f,this._w=c*d*f-h*v*_;break;case"XZY":this._x=h*d*f-c*v*_,this._y=c*v*f-h*d*_,this._z=c*d*_+h*v*f,this._w=c*d*f+h*v*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const v=.5/Math.sqrt(h+1);this._w=.25/v,this._x=(d-l)*v,this._y=(s-c)*v,this._z=(o-r)*v}else if(i>a&&i>f){const v=2*Math.sqrt(1+i-a-f);this._w=(d-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+c)/v}else if(a>f){const v=2*Math.sqrt(1+a-i-f);this._w=(s-c)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+d)/v}else{const v=2*Math.sqrt(1+f-i-a);this._w=(o-r)/v,this._x=(s+c)/v,this._y=(l+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-n;return this._w=v*o+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yu.copy(this).projectOnVector(e),this.sub(yu)}reflect(e){return this.sub(yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yu=new W,mm=new Zr;class pa{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),Fa.subVectors(this.max,So),rs.subVectors(e.a,So),ss.subVectors(e.b,So),os.subVectors(e.c,So),Vi.subVectors(ss,rs),Wi.subVectors(os,ss),Tr.subVectors(rs,os);let n=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-Tr.z,Tr.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,Tr.z,0,-Tr.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-Tr.y,Tr.x,0];return!xu(n,rs,ss,os,Fa)||(n=[1,0,0,0,1,0,0,0,1],!xu(n,rs,ss,os,Fa))?!1:(Oa.crossVectors(Vi,Wi),n=[Oa.x,Oa.y,Oa.z],xu(n,rs,ss,os,Fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new W,new W,new W,new W,new W,new W,new W,new W],Jn=new W,Ua=new pa,rs=new W,ss=new W,os=new W,Vi=new W,Wi=new W,Tr=new W,So=new W,Fa=new W,Oa=new W,Ar=new W;function xu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ar.fromArray(t,s);const a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=n.dot(Ar),d=i.dot(Ar);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const AE=new pa,Mo=new W,Su=new W;class bc{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):AE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const n=Mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(Su)),this.expandByPoint(Mo.copy(e.center).sub(Su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new W,Mu=new W,ka=new W,ji=new W,Eu=new W,za=new W,wu=new W;class t_{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Mu.copy(e).add(n).multiplyScalar(.5),ka.copy(n).sub(e).normalize(),ji.copy(this.origin).sub(Mu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ka),a=ji.dot(this.direction),l=-ji.dot(ka),c=ji.lengthSq(),d=Math.abs(1-o*o);let f,h,v,_;if(d>0)if(f=o*l-a,h=o*a-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const y=1/d;f*=y,h*=y,v=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),v=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),v=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),v=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),v=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),v=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),v=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Mu).addScaledVector(ka,h),v}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){Eu.subVectors(n,e),za.subVectors(i,e),wu.crossVectors(Eu,za);let o=this.direction.dot(wu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(za.crossVectors(ji,za));if(l<0)return null;const c=a*this.direction.dot(Eu.cross(ji));if(c<0||l+c>o)return null;const d=-a*ji.dot(wu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,n,i,r,s,o,a,l,c,d,f,h,v,_,y,p){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,v,_,y,p)}set(e,n,i,r,s,o,a,l,c,d,f,h,v,_,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=v,u[7]=_,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,v=o*f,_=a*d,y=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=v+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+v*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,v=l*f,_=c*d,y=c*f;n[0]=h+y*a,n[4]=_*a-v,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=v*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,v=l*f,_=c*d,y=c*f;n[0]=h-y*a,n[4]=-o*f,n[8]=_+v*a,n[1]=v+_*a,n[5]=o*d,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,v=o*f,_=a*d,y=a*f;n[0]=l*d,n[4]=_*c-v,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=v*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,v=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=y-h*f,n[8]=_*f+v,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=v*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,v=o*c,_=a*l,y=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+y,n[5]=o*d,n[9]=v*f-_,n[2]=_*f-v,n[6]=a*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bE,e,CE)}lookAt(e,n,i){const r=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Xi.crossVectors(i,Ln),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Xi.crossVectors(i,Ln)),Xi.normalize(),Ba.crossVectors(Ln,Xi),r[0]=Xi.x,r[4]=Ba.x,r[8]=Ln.x,r[1]=Xi.y,r[5]=Ba.y,r[9]=Ln.y,r[2]=Xi.z,r[6]=Ba.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],v=i[13],_=i[2],y=i[6],p=i[10],u=i[14],m=i[3],g=i[7],x=i[11],L=i[15],C=r[0],b=r[4],G=r[8],re=r[12],S=r[1],R=r[5],te=r[9],le=r[13],z=r[2],ne=r[6],Q=r[10],ce=r[14],V=r[3],X=r[7],Z=r[11],ae=r[15];return s[0]=o*C+a*S+l*z+c*V,s[4]=o*b+a*R+l*ne+c*X,s[8]=o*G+a*te+l*Q+c*Z,s[12]=o*re+a*le+l*ce+c*ae,s[1]=d*C+f*S+h*z+v*V,s[5]=d*b+f*R+h*ne+v*X,s[9]=d*G+f*te+h*Q+v*Z,s[13]=d*re+f*le+h*ce+v*ae,s[2]=_*C+y*S+p*z+u*V,s[6]=_*b+y*R+p*ne+u*X,s[10]=_*G+y*te+p*Q+u*Z,s[14]=_*re+y*le+p*ce+u*ae,s[3]=m*C+g*S+x*z+L*V,s[7]=m*b+g*R+x*ne+L*X,s[11]=m*G+g*te+x*Q+L*Z,s[15]=m*re+g*le+x*ce+L*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],v=e[14],_=e[3],y=e[7],p=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*v-i*l*v)+y*(+n*l*v-n*c*h+s*o*h-r*o*v+r*c*d-s*l*d)+p*(+n*c*f-n*a*v-s*o*f+i*o*v+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],v=e[11],_=e[12],y=e[13],p=e[14],u=e[15],m=f*p*c-y*h*c+y*l*v-a*p*v-f*l*u+a*h*u,g=_*h*c-d*p*c-_*l*v+o*p*v+d*l*u-o*h*u,x=d*y*c-_*f*c+_*a*v-o*y*v-d*a*u+o*f*u,L=_*f*l-d*y*l-_*a*h+o*y*h+d*a*p-o*f*p,C=n*m+i*g+r*x+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=m*b,e[1]=(y*h*s-f*p*s-y*r*v+i*p*v+f*r*u-i*h*u)*b,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*u+i*l*u)*b,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*v-i*l*v)*b,e[4]=g*b,e[5]=(d*p*s-_*h*s+_*r*v-n*p*v-d*r*u+n*h*u)*b,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*b,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*v+n*l*v)*b,e[8]=x*b,e[9]=(_*f*s-d*y*s-_*i*v+n*y*v+d*i*u-n*f*u)*b,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*b,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*v-n*a*v)*b,e[12]=L*b,e[13]=(d*y*r-_*f*r+_*i*h-n*y*h-d*i*p+n*f*p)*b,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*p-n*a*p)*b,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,v=s*d,_=s*f,y=o*d,p=o*f,u=a*f,m=l*c,g=l*d,x=l*f,L=i.x,C=i.y,b=i.z;return r[0]=(1-(y+u))*L,r[1]=(v+x)*L,r[2]=(_-g)*L,r[3]=0,r[4]=(v-x)*C,r[5]=(1-(h+u))*C,r[6]=(p+m)*C,r[7]=0,r[8]=(_+g)*b,r[9]=(p-m)*b,r[10]=(1-(h+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=as.set(r[0],r[1],r[2]).length();const o=as.set(r[4],r[5],r[6]).length(),a=as.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ei.copy(this);const c=1/s,d=1/o,f=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=d,ei.elements[5]*=d,ei.elements[6]*=d,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,n.setFromRotationMatrix(ei),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Li){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let v,_;if(a===Li)v=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===tc)v=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Li){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,v=(i+r)*d;let _,y;if(a===Li)_=(o+s)*f,y=-2*f;else if(a===tc)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const as=new W,ei=new Ot,bE=new W(0,0,0),CE=new W(1,1,1),Xi=new W,Ba=new W,Ln=new W,gm=new Ot,vm=new Zr;class ma{constructor(e=0,n=0,i=0,r=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class n_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RE=0;const _m=new W,ls=new Zr,Mi=new Ot,Ha=new W,Eo=new W,PE=new W,LE=new Zr,ym=new W(1,0,0),xm=new W(0,1,0),Sm=new W(0,0,1),NE={type:"added"},IE={type:"removed"};class jt extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new W,n=new ma,i=new Zr,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ot}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,n){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ha.copy(e):Ha.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Eo,Ha,this.up):Mi.lookAt(Ha,Eo,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(Mi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(NE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(IE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,PE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,LE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),v=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),v.length>0&&(i.animations=v),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new W(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new W,Ei=new W,Tu=new W,wi=new W,cs=new W,us=new W,Mm=new W,Au=new W,bu=new W,Cu=new W;class jn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ti.subVectors(e,n),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ti.subVectors(r,n),Ei.subVectors(i,n),Tu.subVectors(e,n);const o=ti.dot(ti),a=ti.dot(Ei),l=ti.dot(Tu),c=Ei.dot(Ei),d=Ei.dot(Tu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,v=(c*l-a*d)*h,_=(o*d-a*l)*h;return s.set(1-v-_,_,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static isFrontFacing(e,n,i,r){return ti.subVectors(i,n),Ei.subVectors(e,n),ti.cross(Ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),ti.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;cs.subVectors(r,i),us.subVectors(s,i),Au.subVectors(e,i);const l=cs.dot(Au),c=us.dot(Au);if(l<=0&&c<=0)return n.copy(i);bu.subVectors(e,r);const d=cs.dot(bu),f=us.dot(bu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(cs,o);Cu.subVectors(e,s);const v=cs.dot(Cu),_=us.dot(Cu);if(_>=0&&v<=_)return n.copy(s);const y=v*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(us,a);const p=d*_-v*f;if(p<=0&&f-d>=0&&v-_>=0)return Mm.subVectors(s,r),a=(f-d)/(f-d+(v-_)),n.copy(r).addScaledVector(Mm,a);const u=1/(p+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(cs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function Ru(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=xt.workingColorSpace){return this.r=e,this.g=n,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=xt.workingColorSpace){if(e=yE(e,1),n=Tn(n,0,1),i=Tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ru(o,s,e+1/3),this.g=Ru(o,s,e),this.b=Ru(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,n=tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=tn){const i=i_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=vu(e.r),this.g=vu(e.g),this.b=vu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return xt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Tn(dn.r*255,0,255))*65536+Math.round(Tn(dn.g*255,0,255))*256+Math.round(Tn(dn.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=xt.workingColorSpace){xt.fromWorkingColorSpace(dn.copy(this),n);const i=dn.r,r=dn.g,s=dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=xt.workingColorSpace){return xt.fromWorkingColorSpace(dn.copy(this),n),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=tn){xt.fromWorkingColorSpace(dn.copy(this),e);const n=dn.r,i=dn.g,r=dn.b;return e!==tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(Ga);const i=mu($i.h,Ga.h,n),r=mu($i.s,Ga.s,n),s=mu($i.l,Ga.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new nt;nt.NAMES=i_;let DE=0;class es extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=Gs,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=$d,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xd&&(i.blendSrc=this.blendSrc),this.blendDst!==$d&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class r_ extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new W,Va=new st;class nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Qd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Wr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Va.fromBufferAttribute(this,n),Va.applyMatrix3(e),this.setXY(n,Va.x,Va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vi(n,this.array)),n}setX(e,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vi(n,this.array)),n}setY(e,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vi(n,this.array)),n}setW(e,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qd&&(e.usage=this.usage),e}}class s_ extends nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o_ extends nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class on extends nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let UE=0;const Bn=new Ot,Pu=new jt,ds=new W,Nn=new pa,wo=new pa,qt=new W;class rn extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z0(e)?o_:s_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return Pu.lookAt(e),Pu.updateMatrix(),this.applyMatrix4(Pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new on(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Nn.min,wo.min),Nn.expandByPoint(qt),qt.addVectors(Nn.max,wo.max),Nn.expandByPoint(qt)):(Nn.expandByPoint(wo.min),Nn.expandByPoint(wo.max))}Nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)qt.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),qt.add(ds)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let S=0;S<a;S++)c[S]=new W,d[S]=new W;const f=new W,h=new W,v=new W,_=new st,y=new st,p=new st,u=new W,m=new W;function g(S,R,te){f.fromArray(r,S*3),h.fromArray(r,R*3),v.fromArray(r,te*3),_.fromArray(o,S*2),y.fromArray(o,R*2),p.fromArray(o,te*2),h.sub(f),v.sub(f),y.sub(_),p.sub(_);const le=1/(y.x*p.y-p.x*y.y);isFinite(le)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(v,-y.y).multiplyScalar(le),m.copy(v).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(le),c[S].add(u),c[R].add(u),c[te].add(u),d[S].add(m),d[R].add(m),d[te].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let S=0,R=x.length;S<R;++S){const te=x[S],le=te.start,z=te.count;for(let ne=le,Q=le+z;ne<Q;ne+=3)g(i[ne+0],i[ne+1],i[ne+2])}const L=new W,C=new W,b=new W,G=new W;function re(S){b.fromArray(s,S*3),G.copy(b);const R=c[S];L.copy(R),L.sub(b.multiplyScalar(b.dot(R))).normalize(),C.crossVectors(G,R);const le=C.dot(d[S])<0?-1:1;l[S*4]=L.x,l[S*4+1]=L.y,l[S*4+2]=L.z,l[S*4+3]=le}for(let S=0,R=x.length;S<R;++S){const te=x[S],le=te.start,z=te.count;for(let ne=le,Q=le+z;ne<Q;ne+=3)re(i[ne+0]),re(i[ne+1]),re(i[ne+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,v=i.count;h<v;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,d=new W,f=new W;if(e)for(let h=0,v=e.count;h<v;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,v=n.count;h<v;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let v=0,_=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?v=l[y]*a.data.stride+a.offset:v=l[y]*d;for(let u=0;u<d;u++)h[_++]=c[v++]}return new nn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],v=e(h,i);l.push(v)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const v=c[f];d.push(v.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,v=f.length;h<v;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Em=new Ot,br=new t_,Wa=new bc,wm=new W,fs=new W,hs=new W,ps=new W,Lu=new W,ja=new W,Xa=new st,$a=new st,Ya=new st,Tm=new W,Am=new W,bm=new W,qa=new W,Ka=new W;class $n extends jt{constructor(e=new rn,n=new r_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Lu.fromBufferAttribute(f,e),o?ja.addScaledVector(Lu,d):ja.addScaledVector(Lu.sub(n),d))}n.add(ja)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Wa.containsPoint(br.origin)===!1&&(br.intersectSphere(Wa,wm)===null||br.origin.distanceToSquared(wm)>(e.far-e.near)**2))&&(Em.copy(s).invert(),br.copy(e.ray).applyMatrix4(Em),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=o[p.materialIndex],m=Math.max(p.start,v.start),g=Math.min(a.count,Math.min(p.start+p.count,v.start+v.count));for(let x=m,L=g;x<L;x+=3){const C=a.getX(x),b=a.getX(x+1),G=a.getX(x+2);r=Za(this,u,e,i,c,d,f,C,b,G),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,v.start),y=Math.min(a.count,v.start+v.count);for(let p=_,u=y;p<u;p+=3){const m=a.getX(p),g=a.getX(p+1),x=a.getX(p+2);r=Za(this,o,e,i,c,d,f,m,g,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=o[p.materialIndex],m=Math.max(p.start,v.start),g=Math.min(l.count,Math.min(p.start+p.count,v.start+v.count));for(let x=m,L=g;x<L;x+=3){const C=x,b=x+1,G=x+2;r=Za(this,u,e,i,c,d,f,C,b,G),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,v.start),y=Math.min(l.count,v.start+v.count);for(let p=_,u=y;p<u;p+=3){const m=p,g=p+1,x=p+2;r=Za(this,o,e,i,c,d,f,m,g,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function FE(t,e,n,i,r,s,o,a){let l;if(e.side===Pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===yr,a),l===null)return null;Ka.copy(a),Ka.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ka);return c<n.near||c>n.far?null:{distance:c,point:Ka.clone(),object:t}}function Za(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,fs),t.getVertexPosition(l,hs),t.getVertexPosition(c,ps);const d=FE(t,e,n,i,fs,hs,ps,qa);if(d){r&&(Xa.fromBufferAttribute(r,a),$a.fromBufferAttribute(r,l),Ya.fromBufferAttribute(r,c),d.uv=jn.getInterpolation(qa,fs,hs,ps,Xa,$a,Ya,new st)),s&&(Xa.fromBufferAttribute(s,a),$a.fromBufferAttribute(s,l),Ya.fromBufferAttribute(s,c),d.uv1=jn.getInterpolation(qa,fs,hs,ps,Xa,$a,Ya,new st),d.uv2=d.uv1),o&&(Tm.fromBufferAttribute(o,a),Am.fromBufferAttribute(o,l),bm.fromBufferAttribute(o,c),d.normal=jn.getInterpolation(qa,fs,hs,ps,Tm,Am,bm,new W),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};jn.getNormal(fs,hs,ps,f.normal),d.face=f}return d}class ga extends rn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,v=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(d,3)),this.setAttribute("uv",new on(f,2));function _(y,p,u,m,g,x,L,C,b,G,re){const S=x/b,R=L/G,te=x/2,le=L/2,z=C/2,ne=b+1,Q=G+1;let ce=0,V=0;const X=new W;for(let Z=0;Z<Q;Z++){const ae=Z*R-le;for(let he=0;he<ne;he++){const Ve=he*S-te;X[y]=Ve*m,X[p]=ae*g,X[u]=z,c.push(X.x,X.y,X.z),X[y]=0,X[p]=0,X[u]=C>0?1:-1,d.push(X.x,X.y,X.z),f.push(he/b),f.push(1-Z/G),ce+=1}}for(let Z=0;Z<G;Z++)for(let ae=0;ae<b;ae++){const he=h+ae+ne*Z,Ve=h+ae+ne*(Z+1),ee=h+(ae+1)+ne*(Z+1),de=h+(ae+1)+ne*Z;l.push(he,Ve,de),l.push(Ve,ee,de),V+=6}a.addGroup(v,V,re),v+=V,h+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=to(t[n]);for(const r in i)e[r]=i[r]}return e}function OE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function a_(t){return t.getRenderTarget()===null?t.outputColorSpace:xt.workingColorSpace}const kE={clone:to,merge:gn};var zE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xr extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zE,this.fragmentShader=BE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class l_ extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new W,Cm=new st,Rm=new st;class Vn extends l_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(El*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(El*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,Cm,Rm),n.subVectors(Rm,Cm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(El*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ms=-90,gs=1;class HE extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new Vn(ms,gs,e,n);s.layers=this.layers,this.add(s);const o=new Vn(ms,gs,e,n);o.layers=this.layers,this.add(o);const a=new Vn(ms,gs,e,n);a.layers=this.layers,this.add(a);const l=new Vn(ms,gs,e,n);l.layers=this.layers,this.add(l);const c=new Vn(ms,gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,v),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class c_ extends xn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Qs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GE extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Wr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vr?tn:Wn),this.texture=new c_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ga(5,5,5),s=new xr({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:hr});s.uniforms.tEquirect.value=n;const o=new $n(r,s),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=En),new HE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Nu=new W,VE=new W,WE=new ot;class Lr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nu.subVectors(i,n).cross(VE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||WE.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new bc,Qa=new W;class ah{constructor(e=new Lr,n=new Lr,i=new Lr,r=new Lr,s=new Lr,o=new Lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],v=r[8],_=r[9],y=r[10],p=r[11],u=r[12],m=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,p-v,x-u).normalize(),i[1].setComponents(l+s,h+c,p+v,x+u).normalize(),i[2].setComponents(l+o,h+d,p+_,x+m).normalize(),i[3].setComponents(l-o,h-d,p-_,x-m).normalize(),i[4].setComponents(l-a,h-f,p-y,x-g).normalize(),n===Li)i[5].setComponents(l+a,h+f,p+y,x+g).normalize();else if(n===tc)i[5].setComponents(a,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function u_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,v=f.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:v}}function s(c,d,f){const h=d.array,v=d._updateRange,_=d.updateRanges;if(t.bindBuffer(f,c),v.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let y=0,p=_.length;y<p;y++){const u=_[y];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}v.count!==-1&&(n?t.bufferSubData(f,v.offset*h.BYTES_PER_ELEMENT,h,v.offset,v.count):t.bufferSubData(f,v.offset*h.BYTES_PER_ELEMENT,h.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:o,remove:a,update:l}}class no extends rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,v=[],_=[],y=[],p=[];for(let u=0;u<d;u++){const m=u*h-o;for(let g=0;g<c;g++){const x=g*f-s;_.push(x,-m,0),y.push(0,0,1),p.push(g/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const g=m+c*u,x=m+c*(u+1),L=m+1+c*(u+1),C=m+1+c*u;v.push(g,x,C),v.push(x,L,C)}this.setIndex(v),this.setAttribute("position",new on(_,3)),this.setAttribute("normal",new on(y,3)),this.setAttribute("uv",new on(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.widthSegments,e.heightSegments)}}var XE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$E=`#ifdef USE_ALPHAHASH
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
#endif`,YE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QE=`#ifdef USE_AOMAP
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
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ew=`#ifdef USE_BATCHING
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
#endif`,tw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sw=`#ifdef USE_IRIDESCENCE
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
#endif`,ow=`#ifdef USE_BUMPMAP
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
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mw=`#define PI 3.141592653589793
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
} // validated`,gw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vw=`vec3 transformedNormal = objectNormal;
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
#endif`,_w=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ew=`
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
}`,ww=`#ifdef USE_ENVMAP
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
#endif`,Tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Aw=`#ifdef USE_ENVMAP
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
#endif`,bw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
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
#endif`,Rw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iw=`#ifdef USE_GRADIENTMAP
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
}`,Dw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kw=`uniform bool receiveShadow;
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
#endif`,zw=`#ifdef USE_ENVMAP
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
#endif`,Bw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ww=`PhysicalMaterial material;
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
#endif`,jw=`struct PhysicalMaterial {
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
}`,Xw=`
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
#endif`,$w=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nT=`#if defined( USE_POINTS_UV )
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
#endif`,iT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oT=`#ifdef USE_MORPHNORMALS
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
#endif`,aT=`#ifdef USE_MORPHTARGETS
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
#endif`,lT=`#ifdef USE_MORPHTARGETS
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
#endif`,cT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pT=`#ifdef USE_NORMALMAP
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
#endif`,mT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ST=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ET=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PT=`float getShadowMask() {
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
}`,LT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NT=`#ifdef USE_SKINNING
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
#endif`,IT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DT=`#ifdef USE_SKINNING
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
#endif`,UT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zT=`#ifdef USE_TRANSMISSION
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
#endif`,BT=`#ifdef USE_TRANSMISSION
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
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XT=`uniform sampler2D t2D;
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
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`#include <common>
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
}`,QT=`#if DEPTH_PACKING == 3200
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
}`,JT=`#define DISTANCE
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
}`,e1=`#define DISTANCE
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`uniform float scale;
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
}`,r1=`uniform vec3 diffuse;
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
}`,s1=`#include <common>
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
}`,o1=`uniform vec3 diffuse;
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
}`,a1=`#define LAMBERT
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
}`,l1=`#define LAMBERT
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
}`,c1=`#define MATCAP
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
}`,u1=`#define MATCAP
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
}`,f1=`#define NORMAL
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
}`,h1=`#define PHONG
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
}`,p1=`#define PHONG
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
}`,m1=`#define STANDARD
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
}`,g1=`#define STANDARD
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
}`,v1=`#define TOON
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
}`,_1=`#define TOON
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
}`,y1=`uniform float size;
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
}`,x1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,M1=`uniform vec3 color;
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
}`,E1=`uniform float rotation;
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
}`,w1=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:XE,alphahash_pars_fragment:$E,alphamap_fragment:YE,alphamap_pars_fragment:qE,alphatest_fragment:KE,alphatest_pars_fragment:ZE,aomap_fragment:QE,aomap_pars_fragment:JE,batching_pars_vertex:ew,batching_vertex:tw,begin_vertex:nw,beginnormal_vertex:iw,bsdfs:rw,iridescence_fragment:sw,bumpmap_pars_fragment:ow,clipping_planes_fragment:aw,clipping_planes_pars_fragment:lw,clipping_planes_pars_vertex:cw,clipping_planes_vertex:uw,color_fragment:dw,color_pars_fragment:fw,color_pars_vertex:hw,color_vertex:pw,common:mw,cube_uv_reflection_fragment:gw,defaultnormal_vertex:vw,displacementmap_pars_vertex:_w,displacementmap_vertex:yw,emissivemap_fragment:xw,emissivemap_pars_fragment:Sw,colorspace_fragment:Mw,colorspace_pars_fragment:Ew,envmap_fragment:ww,envmap_common_pars_fragment:Tw,envmap_pars_fragment:Aw,envmap_pars_vertex:bw,envmap_physical_pars_fragment:zw,envmap_vertex:Cw,fog_vertex:Rw,fog_pars_vertex:Pw,fog_fragment:Lw,fog_pars_fragment:Nw,gradientmap_pars_fragment:Iw,lightmap_fragment:Dw,lightmap_pars_fragment:Uw,lights_lambert_fragment:Fw,lights_lambert_pars_fragment:Ow,lights_pars_begin:kw,lights_toon_fragment:Bw,lights_toon_pars_fragment:Hw,lights_phong_fragment:Gw,lights_phong_pars_fragment:Vw,lights_physical_fragment:Ww,lights_physical_pars_fragment:jw,lights_fragment_begin:Xw,lights_fragment_maps:$w,lights_fragment_end:Yw,logdepthbuf_fragment:qw,logdepthbuf_pars_fragment:Kw,logdepthbuf_pars_vertex:Zw,logdepthbuf_vertex:Qw,map_fragment:Jw,map_pars_fragment:eT,map_particle_fragment:tT,map_particle_pars_fragment:nT,metalnessmap_fragment:iT,metalnessmap_pars_fragment:rT,morphcolor_vertex:sT,morphnormal_vertex:oT,morphtarget_pars_vertex:aT,morphtarget_vertex:lT,normal_fragment_begin:cT,normal_fragment_maps:uT,normal_pars_fragment:dT,normal_pars_vertex:fT,normal_vertex:hT,normalmap_pars_fragment:pT,clearcoat_normal_fragment_begin:mT,clearcoat_normal_fragment_maps:gT,clearcoat_pars_fragment:vT,iridescence_pars_fragment:_T,opaque_fragment:yT,packing:xT,premultiplied_alpha_fragment:ST,project_vertex:MT,dithering_fragment:ET,dithering_pars_fragment:wT,roughnessmap_fragment:TT,roughnessmap_pars_fragment:AT,shadowmap_pars_fragment:bT,shadowmap_pars_vertex:CT,shadowmap_vertex:RT,shadowmask_pars_fragment:PT,skinbase_vertex:LT,skinning_pars_vertex:NT,skinning_vertex:IT,skinnormal_vertex:DT,specularmap_fragment:UT,specularmap_pars_fragment:FT,tonemapping_fragment:OT,tonemapping_pars_fragment:kT,transmission_fragment:zT,transmission_pars_fragment:BT,uv_pars_fragment:HT,uv_pars_vertex:GT,uv_vertex:VT,worldpos_vertex:WT,background_vert:jT,background_frag:XT,backgroundCube_vert:$T,backgroundCube_frag:YT,cube_vert:qT,cube_frag:KT,depth_vert:ZT,depth_frag:QT,distanceRGBA_vert:JT,distanceRGBA_frag:e1,equirect_vert:t1,equirect_frag:n1,linedashed_vert:i1,linedashed_frag:r1,meshbasic_vert:s1,meshbasic_frag:o1,meshlambert_vert:a1,meshlambert_frag:l1,meshmatcap_vert:c1,meshmatcap_frag:u1,meshnormal_vert:d1,meshnormal_frag:f1,meshphong_vert:h1,meshphong_frag:p1,meshphysical_vert:m1,meshphysical_frag:g1,meshtoon_vert:v1,meshtoon_frag:_1,points_vert:y1,points_frag:x1,shadow_vert:S1,shadow_frag:M1,sprite_vert:E1,sprite_frag:w1},be={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},pi={basic:{uniforms:gn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:gn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new nt(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:gn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:gn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:gn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new nt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:gn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:gn([be.points,be.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:gn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:gn([be.common,be.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:gn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:gn([be.sprite,be.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:gn([be.common,be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:gn([be.lights,be.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};pi.physical={uniforms:gn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Ja={r:0,b:0,g:0};function T1(t,e,n,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,d,f=null,h=0,v=null;function _(p,u){let m=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),m=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Tc)?(d===void 0&&(d=new $n(new ga(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:to(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=xt.getTransfer(g.colorSpace)!==wt,(f!==g||h!==g.version||v!==t.toneMapping)&&(d.material.needsUpdate=!0,f=g,h=g.version,v=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new $n(new no(2,2),new xr({name:"BackgroundMaterial",uniforms:to(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=xt.getTransfer(g.colorSpace)!==wt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,v=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(Ja,a_(t)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:_}}function A1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function f(z,ne,Q,ce,V){let X=!1;if(o){const Z=y(ce,Q,ne);c!==Z&&(c=Z,v(c.object)),X=u(z,ce,Q,V),X&&m(z,ce,Q,V)}else{const Z=ne.wireframe===!0;(c.geometry!==ce.id||c.program!==Q.id||c.wireframe!==Z)&&(c.geometry=ce.id,c.program=Q.id,c.wireframe=Z,X=!0)}V!==null&&n.update(V,t.ELEMENT_ARRAY_BUFFER),(X||d)&&(d=!1,G(z,ne,Q,ce),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(V).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function v(z){return i.isWebGL2?t.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return i.isWebGL2?t.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function y(z,ne,Q){const ce=Q.wireframe===!0;let V=a[z.id];V===void 0&&(V={},a[z.id]=V);let X=V[ne.id];X===void 0&&(X={},V[ne.id]=X);let Z=X[ce];return Z===void 0&&(Z=p(h()),X[ce]=Z),Z}function p(z){const ne=[],Q=[],ce=[];for(let V=0;V<r;V++)ne[V]=0,Q[V]=0,ce[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:Q,attributeDivisors:ce,object:z,attributes:{},index:null}}function u(z,ne,Q,ce){const V=c.attributes,X=ne.attributes;let Z=0;const ae=Q.getAttributes();for(const he in ae)if(ae[he].location>=0){const ee=V[he];let de=X[he];if(de===void 0&&(he==="instanceMatrix"&&z.instanceMatrix&&(de=z.instanceMatrix),he==="instanceColor"&&z.instanceColor&&(de=z.instanceColor)),ee===void 0||ee.attribute!==de||de&&ee.data!==de.data)return!0;Z++}return c.attributesNum!==Z||c.index!==ce}function m(z,ne,Q,ce){const V={},X=ne.attributes;let Z=0;const ae=Q.getAttributes();for(const he in ae)if(ae[he].location>=0){let ee=X[he];ee===void 0&&(he==="instanceMatrix"&&z.instanceMatrix&&(ee=z.instanceMatrix),he==="instanceColor"&&z.instanceColor&&(ee=z.instanceColor));const de={};de.attribute=ee,ee&&ee.data&&(de.data=ee.data),V[he]=de,Z++}c.attributes=V,c.attributesNum=Z,c.index=ce}function g(){const z=c.newAttributes;for(let ne=0,Q=z.length;ne<Q;ne++)z[ne]=0}function x(z){L(z,0)}function L(z,ne){const Q=c.newAttributes,ce=c.enabledAttributes,V=c.attributeDivisors;Q[z]=1,ce[z]===0&&(t.enableVertexAttribArray(z),ce[z]=1),V[z]!==ne&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,ne),V[z]=ne)}function C(){const z=c.newAttributes,ne=c.enabledAttributes;for(let Q=0,ce=ne.length;Q<ce;Q++)ne[Q]!==z[Q]&&(t.disableVertexAttribArray(Q),ne[Q]=0)}function b(z,ne,Q,ce,V,X,Z){Z===!0?t.vertexAttribIPointer(z,ne,Q,V,X):t.vertexAttribPointer(z,ne,Q,ce,V,X)}function G(z,ne,Q,ce){if(i.isWebGL2===!1&&(z.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const V=ce.attributes,X=Q.getAttributes(),Z=ne.defaultAttributeValues;for(const ae in X){const he=X[ae];if(he.location>=0){let Ve=V[ae];if(Ve===void 0&&(ae==="instanceMatrix"&&z.instanceMatrix&&(Ve=z.instanceMatrix),ae==="instanceColor"&&z.instanceColor&&(Ve=z.instanceColor)),Ve!==void 0){const ee=Ve.normalized,de=Ve.itemSize,Ae=n.get(Ve);if(Ae===void 0)continue;const Ue=Ae.buffer,Ge=Ae.type,Ne=Ae.bytesPerElement,et=i.isWebGL2===!0&&(Ge===t.INT||Ge===t.UNSIGNED_INT||Ve.gpuType===H0);if(Ve.isInterleavedBufferAttribute){const He=Ve.data,H=He.stride,dt=Ve.offset;if(He.isInstancedInterleavedBuffer){for(let Pe=0;Pe<he.locationSize;Pe++)L(he.location+Pe,He.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Pe=0;Pe<he.locationSize;Pe++)x(he.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Pe=0;Pe<he.locationSize;Pe++)b(he.location+Pe,de/he.locationSize,Ge,ee,H*Ne,(dt+de/he.locationSize*Pe)*Ne,et)}else{if(Ve.isInstancedBufferAttribute){for(let He=0;He<he.locationSize;He++)L(he.location+He,Ve.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let He=0;He<he.locationSize;He++)x(he.location+He);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let He=0;He<he.locationSize;He++)b(he.location+He,de/he.locationSize,Ge,ee,de*Ne,de/he.locationSize*He*Ne,et)}}else if(Z!==void 0){const ee=Z[ae];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(he.location,ee);break;case 3:t.vertexAttrib3fv(he.location,ee);break;case 4:t.vertexAttrib4fv(he.location,ee);break;default:t.vertexAttrib1fv(he.location,ee)}}}}C()}function re(){te();for(const z in a){const ne=a[z];for(const Q in ne){const ce=ne[Q];for(const V in ce)_(ce[V].object),delete ce[V];delete ne[Q]}delete a[z]}}function S(z){if(a[z.id]===void 0)return;const ne=a[z.id];for(const Q in ne){const ce=ne[Q];for(const V in ce)_(ce[V].object),delete ce[V];delete ne[Q]}delete a[z.id]}function R(z){for(const ne in a){const Q=a[ne];if(Q[z.id]===void 0)continue;const ce=Q[z.id];for(const V in ce)_(ce[V].object),delete ce[V];delete Q[z.id]}}function te(){le(),d=!0,c!==l&&(c=l,v(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:te,resetDefaultState:le,dispose:re,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:x,disableUnusedAttributes:C}}function b1(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let v,_;if(r)v=t,_="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[_](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<h;_++)this.render(d[_],f[_]);else{v.multiDrawArraysWEBGL(s,d,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=f[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function C1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,x=o||e.has("OES_texture_float"),L=g&&x,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:m,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:L,maxSamples:C}}function R1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Lr,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const v=f.length!==0||h||i!==0||r;return r=h,i=f.length,v},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,v){const _=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const m=s?0:i,g=m*4;let x=u.clippingState||null;l.value=x,x=d(_,h,g,v);for(let L=0;L!==g;++L)x[L]=n[L];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,v,_){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const u=v+y*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,x=v;g!==y;++g,x+=4)o.copy(f[g]).applyMatrix4(m,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function P1(t){let e=new WeakMap;function n(o,a){return a===Yd?o.mapping=Qs:a===qd&&(o.mapping=Js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Yd||a===qd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new GE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class d_ extends l_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,Pm=[.125,.215,.35,.446,.526,.582],Dr=20,Iu=new d_,Lm=new nt;let Du=null,Uu=0,Fu=0;const Nr=(1+Math.sqrt(5))/2,vs=1/Nr,Nm=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Nr,vs),new W(0,Nr,-vs),new W(vs,0,Nr),new W(-vs,0,Nr),new W(Nr,vs,0),new W(-Nr,vs,0)];class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Du=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Du,Uu,Fu),e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Du=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:la,format:ai,colorSpace:Oi,depthBuffer:!1},r=Dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L1(s)),this._blurMaterial=N1(s,e,n)}return r}_compileMaterial(e){const n=new $n(this._lodPlanes[0],e);this._renderer.compile(n,Iu)}_sceneToCubeUV(e,n,i,r){const a=new Vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Lm),d.toneMapping=pr,d.autoClear=!1;const v=new r_({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),_=new $n(new ga,v);let y=!1;const p=e.background;p?p.isColor&&(v.color.copy(p),e.background=null,y=!0):(v.color.copy(Lm),y=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;el(r,m*g,u>2?g:0,g,g),d.setRenderTarget(r),y&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qs||e.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;el(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Iu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nm[(r-1)%Nm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new $n(this._lodPlanes[r],c),h=c.uniforms,v=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Dr-1),y=s/_,p=isFinite(s)?1+Math.floor(d*y):Dr;p>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dr}`);const u=[];let m=0;for(let b=0;b<Dr;++b){const G=b/y,re=Math.exp(-G*G/2);u.push(re),b===0?m+=re:b<p&&(m+=2*re)}for(let b=0;b<u.length;b++)u[b]=u[b]/m;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const x=this._sizeLods[r],L=3*x*(r>g-Ds?r-g+Ds:0),C=4*(this._cubeSize-x);el(n,L,C,3*x,2*x),l.setRenderTarget(n),l.render(f,Iu)}}function L1(t){const e=[],n=[],i=[];let r=t;const s=t-Ds+1+Pm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ds?l=Pm[o-t+Ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],v=6,_=6,y=3,p=2,u=1,m=new Float32Array(y*_*v),g=new Float32Array(p*_*v),x=new Float32Array(u*_*v);for(let C=0;C<v;C++){const b=C%3*2/3-1,G=C>2?0:-1,re=[b,G,0,b+2/3,G,0,b+2/3,G+1,0,b,G,0,b+2/3,G+1,0,b,G+1,0];m.set(re,y*_*C),g.set(h,p*_*C);const S=[C,C,C,C,C,C];x.set(S,u*_*C)}const L=new rn;L.setAttribute("position",new nn(m,y)),L.setAttribute("uv",new nn(g,p)),L.setAttribute("faceIndex",new nn(x,u)),e.push(L),r>Ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Dm(t,e,n){const i=new Kr(t,e,n);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function N1(t,e,n){const i=new Float32Array(Dr),r=new W(0,1,0);return new xr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lh(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Um(){return new xr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Fm(){return new xr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function I1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yd||l===qd,d=l===Qs||l===Js;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new Im(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new Im(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function D1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function U1(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];const v=s.get(h);v&&(e.remove(v),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const v=f.morphAttributes;for(const _ in v){const y=v[_];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(f){const h=[],v=f.index,_=f.attributes.position;let y=0;if(v!==null){const m=v.array;y=v.version;for(let g=0,x=m.length;g<x;g+=3){const L=m[g+0],C=m[g+1],b=m[g+2];h.push(L,C,C,b,b,L)}}else if(_!==void 0){const m=_.array;y=_.version;for(let g=0,x=m.length/3-1;g<x;g+=3){const L=g+0,C=g+1,b=g+2;h.push(L,C,C,b,b,L)}}else return;const p=new(Z0(h)?o_:s_)(h,1);p.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const v=f.index;v!==null&&h.version<v.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function F1(t,e,n,i){const r=i.isWebGL2;let s;function o(v){s=v}let a,l;function c(v){a=v.type,l=v.bytesPerElement}function d(v,_){t.drawElements(s,_,a,v*l),n.update(_,s,1)}function f(v,_,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,a,v*l,y),n.update(_,s,y)}function h(v,_,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(v[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,a,v,0,y);let u=0;for(let m=0;m<y;m++)u+=_[m];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function O1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function k1(t,e){return t[0]-e[0]}function z1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function B1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let p=s.get(d);if(p===void 0||p.count!==y){let ne=function(){le.dispose(),s.delete(d),d.removeEventListener("dispose",ne)};var v=ne;p!==void 0&&p.texture.dispose();const g=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,L=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],G=d.morphAttributes.color||[];let re=0;g===!0&&(re=1),x===!0&&(re=2),L===!0&&(re=3);let S=d.attributes.position.count*re,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const te=new Float32Array(S*R*4*y),le=new e_(te,S,R,y);le.type=Ci,le.needsUpdate=!0;const z=re*4;for(let Q=0;Q<y;Q++){const ce=C[Q],V=b[Q],X=G[Q],Z=S*R*4*Q;for(let ae=0;ae<ce.count;ae++){const he=ae*z;g===!0&&(o.fromBufferAttribute(ce,ae),te[Z+he+0]=o.x,te[Z+he+1]=o.y,te[Z+he+2]=o.z,te[Z+he+3]=0),x===!0&&(o.fromBufferAttribute(V,ae),te[Z+he+4]=o.x,te[Z+he+5]=o.y,te[Z+he+6]=o.z,te[Z+he+7]=0),L===!0&&(o.fromBufferAttribute(X,ae),te[Z+he+8]=o.x,te[Z+he+9]=o.y,te[Z+he+10]=o.z,te[Z+he+11]=X.itemSize===4?o.w:1)}}p={count:y,texture:le,size:new st(S,R)},s.set(d,p),d.addEventListener("dispose",ne)}let u=0;for(let g=0;g<h.length;g++)u+=h[g];const m=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let y=i[d.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[d.id]=y}for(let x=0;x<_;x++){const L=y[x];L[0]=x,L[1]=h[x]}y.sort(z1);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(k1);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const L=a[x],C=L[0],b=L[1];C!==Number.MAX_SAFE_INTEGER&&b?(p&&d.getAttribute("morphTarget"+x)!==p[C]&&d.setAttribute("morphTarget"+x,p[C]),u&&d.getAttribute("morphNormal"+x)!==u[C]&&d.setAttribute("morphNormal"+x,u[C]),r[x]=b,m+=b):(p&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),u&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),r[x]=0)}const g=d.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function H1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class f_ extends xn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Gr,d!==Gr&&d!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Gr&&(i=ir),i===void 0&&d===eo&&(i=Hr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const h_=new xn,p_=new f_(1,1);p_.compareFunction=K0;const m_=new e_,g_=new TE,v_=new c_,Om=[],km=[],zm=new Float32Array(16),Bm=new Float32Array(9),Hm=new Float32Array(4);function co(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Om[r];if(s===void 0&&(s=new Float32Array(r),Om[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cc(t,e){let n=km[e];n===void 0&&(n=new Int32Array(e),km[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function G1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function W1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function X1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Hm.set(i),t.uniformMatrix2fv(this.addr,!1,Hm),$t(n,i)}}function $1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Bm.set(i),t.uniformMatrix3fv(this.addr,!1,Bm),$t(n,i)}}function Y1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;zm.set(i),t.uniformMatrix4fv(this.addr,!1,zm),$t(n,i)}}function q1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function J1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function iA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?p_:h_;n.setTexture2D(e||s,r)}function rA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||g_,r)}function sA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||v_,r)}function oA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||m_,r)}function aA(t){switch(t){case 5126:return G1;case 35664:return V1;case 35665:return W1;case 35666:return j1;case 35674:return X1;case 35675:return $1;case 35676:return Y1;case 5124:case 35670:return q1;case 35667:case 35671:return K1;case 35668:case 35672:return Z1;case 35669:case 35673:return Q1;case 5125:return J1;case 36294:return eA;case 36295:return tA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return oA}}function lA(t,e){t.uniform1fv(this.addr,e)}function cA(t,e){const n=co(e,this.size,2);t.uniform2fv(this.addr,n)}function uA(t,e){const n=co(e,this.size,3);t.uniform3fv(this.addr,n)}function dA(t,e){const n=co(e,this.size,4);t.uniform4fv(this.addr,n)}function fA(t,e){const n=co(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hA(t,e){const n=co(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pA(t,e){const n=co(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mA(t,e){t.uniform1iv(this.addr,e)}function gA(t,e){t.uniform2iv(this.addr,e)}function vA(t,e){t.uniform3iv(this.addr,e)}function _A(t,e){t.uniform4iv(this.addr,e)}function yA(t,e){t.uniform1uiv(this.addr,e)}function xA(t,e){t.uniform2uiv(this.addr,e)}function SA(t,e){t.uniform3uiv(this.addr,e)}function MA(t,e){t.uniform4uiv(this.addr,e)}function EA(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||h_,s[o])}function wA(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||g_,s[o])}function TA(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||v_,s[o])}function AA(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||m_,s[o])}function bA(t){switch(t){case 5126:return lA;case 35664:return cA;case 35665:return uA;case 35666:return dA;case 35674:return fA;case 35675:return hA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return vA;case 35669:case 35673:return _A;case 5125:return yA;case 36294:return xA;case 36295:return SA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return wA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return AA}}class CA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=aA(n.type)}}class RA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bA(n.type)}}class PA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ou=/(\w+)(\])?(\[|\.)?/g;function Gm(t,e){t.seq.push(e),t.map[e.id]=e}function LA(t,e,n){const i=t.name,r=i.length;for(Ou.lastIndex=0;;){const s=Ou.exec(i),o=Ou.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gm(n,c===void 0?new CA(a,t,e):new RA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new PA(a),Gm(n,f)),n=f}}}class wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);LA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Vm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const NA=37297;let IA=0;function DA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function UA(t){const e=xt.getPrimaries(xt.workingColorSpace),n=xt.getPrimaries(t);let i;switch(e===n?i="":e===ec&&n===Jl?i="LinearDisplayP3ToLinearSRGB":e===Jl&&n===ec&&(i="LinearSRGBToLinearDisplayP3"),t){case Oi:case Ac:return[i,"LinearTransferOETF"];case tn:case oh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Wm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+DA(t.getShaderSource(e),o)}else return r}function FA(t,e){const n=UA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function OA(t,e){let n;switch(e){case qM:n="Linear";break;case KM:n="Reinhard";break;case ZM:n="OptimizedCineon";break;case QM:n="ACESFilmic";break;case eE:n="AgX";break;case JM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function kA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function zA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function BA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function HA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Us(t){return t!==""}function jm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GA=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(t){return t.replace(GA,WA)}const VA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function WA(t,e){let n=rt[e];if(n===void 0){const i=VA.get(e);if(i!==void 0)n=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nf(n)}const jA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(t){return t.replace(jA,XA)}function XA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ym(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function $A(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===O0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===k0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function YA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qs:case Js:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function KA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case z0:e="ENVMAP_BLENDING_MULTIPLY";break;case $M:e="ENVMAP_BLENDING_MIX";break;case YM:e="ENVMAP_BLENDING_ADD";break}return e}function ZA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function QA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$A(n),c=YA(n),d=qA(n),f=KA(n),h=ZA(n),v=n.isWebGL2?"":kA(n),_=zA(n),y=BA(s),p=r.createProgram();let u,m,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Us).join(`
`),u.length>0&&(u+=`
`),m=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Us).join(`
`),m.length>0&&(m+=`
`)):(u=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),m=[v,Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pr?"#define TONE_MAPPING":"",n.toneMapping!==pr?rt.tonemapping_pars_fragment:"",n.toneMapping!==pr?OA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,FA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Us).join(`
`)),o=nf(o),o=jm(o,n),o=Xm(o,n),a=nf(a),a=jm(a,n),a=Xm(a,n),o=$m(o),a=$m(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=g+u+o,L=g+m+a,C=Vm(r,r.VERTEX_SHADER,x),b=Vm(r,r.FRAGMENT_SHADER,L);r.attachShader(p,C),r.attachShader(p,b),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function G(te){if(t.debug.checkShaderErrors){const le=r.getProgramInfoLog(p).trim(),z=r.getShaderInfoLog(C).trim(),ne=r.getShaderInfoLog(b).trim();let Q=!0,ce=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,C,b);else{const V=Wm(r,C,"vertex"),X=Wm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+te.name+`
Material Type: `+te.type+`

Program Info Log: `+le+`
`+V+`
`+X)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(z===""||ne==="")&&(ce=!1);ce&&(te.diagnostics={runnable:Q,programLog:le,vertexShader:{log:z,prefix:u},fragmentShader:{log:ne,prefix:m}})}r.deleteShader(C),r.deleteShader(b),re=new wl(r,p),S=HA(r,p)}let re;this.getUniforms=function(){return re===void 0&&G(this),re};let S;this.getAttributes=function(){return S===void 0&&G(this),S};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(p,NA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=b,this}let JA=0;class eb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new tb(e),n.set(e,i)),i}}class tb{constructor(e){this.id=JA++,this.code=e,this.usedTimes=0}}function nb(t,e,n,i,r,s,o){const a=new n_,l=new eb,c=new Set,d=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,v=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return c.add(S),S===0?"uv":`uv${S}`}function u(S,R,te,le,z){const ne=le.fog,Q=z.geometry,ce=S.isMeshStandardMaterial?le.environment:null,V=(S.isMeshStandardMaterial?n:e).get(S.envMap||ce),X=V&&V.mapping===Tc?V.image.height:null,Z=y[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const ae=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,he=ae!==void 0?ae.length:0;let Ve=0;Q.morphAttributes.position!==void 0&&(Ve=1),Q.morphAttributes.normal!==void 0&&(Ve=2),Q.morphAttributes.color!==void 0&&(Ve=3);let ee,de,Ae,Ue;if(Z){const se=pi[Z];ee=se.vertexShader,de=se.fragmentShader}else ee=S.vertexShader,de=S.fragmentShader,l.update(S),Ae=l.getVertexShaderID(S),Ue=l.getFragmentShaderID(S);const Ge=t.getRenderTarget(),Ne=z.isInstancedMesh===!0,et=z.isBatchedMesh===!0,He=!!S.map,H=!!S.matcap,dt=!!V,Pe=!!S.aoMap,$e=!!S.lightMap,ze=!!S.bumpMap,vt=!!S.normalMap,Je=!!S.displacementMap,A=!!S.emissiveMap,w=!!S.metalnessMap,Y=!!S.roughnessMap,ve=S.anisotropy>0,K=S.clearcoat>0,me=S.iridescence>0,Fe=S.sheen>0,Ce=S.transmission>0,Le=ve&&!!S.anisotropyMap,Ye=K&&!!S.clearcoatMap,Qe=K&&!!S.clearcoatNormalMap,fe=K&&!!S.clearcoatRoughnessMap,gt=me&&!!S.iridescenceMap,Ze=me&&!!S.iridescenceThicknessMap,je=Fe&&!!S.sheenColorMap,Oe=Fe&&!!S.sheenRoughnessMap,Ie=!!S.specularMap,Ke=!!S.specularColorMap,ut=!!S.specularIntensityMap,at=Ce&&!!S.transmissionMap,tt=Ce&&!!S.thicknessMap,qe=!!S.gradientMap,P=!!S.alphaMap,pe=S.alphaTest>0,xe=!!S.alphaHash,Ee=!!S.extensions;let Be=pr;S.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(Be=t.toneMapping);const ie={isWebGL2:f,shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:de,defines:S.defines,customVertexShaderID:Ae,customFragmentShaderID:Ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:et,instancing:Ne,instancingColor:Ne&&z.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Ge===null?t.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Oi,alphaToCoverage:!!S.alphaToCoverage,map:He,matcap:H,envMap:dt,envMapMode:dt&&V.mapping,envMapCubeUVHeight:X,aoMap:Pe,lightMap:$e,bumpMap:ze,normalMap:vt,displacementMap:v&&Je,emissiveMap:A,normalMapObjectSpace:vt&&S.normalMapType===dE,normalMapTangentSpace:vt&&S.normalMapType===q0,metalnessMap:w,roughnessMap:Y,anisotropy:ve,anisotropyMap:Le,clearcoat:K,clearcoatMap:Ye,clearcoatNormalMap:Qe,clearcoatRoughnessMap:fe,iridescence:me,iridescenceMap:gt,iridescenceThicknessMap:Ze,sheen:Fe,sheenColorMap:je,sheenRoughnessMap:Oe,specularMap:Ie,specularColorMap:Ke,specularIntensityMap:ut,transmission:Ce,transmissionMap:at,thicknessMap:tt,gradientMap:qe,opaque:S.transparent===!1&&S.blending===Gs&&S.alphaToCoverage===!1,alphaMap:P,alphaTest:pe,alphaHash:xe,combine:S.combine,mapUv:He&&p(S.map.channel),aoMapUv:Pe&&p(S.aoMap.channel),lightMapUv:$e&&p(S.lightMap.channel),bumpMapUv:ze&&p(S.bumpMap.channel),normalMapUv:vt&&p(S.normalMap.channel),displacementMapUv:Je&&p(S.displacementMap.channel),emissiveMapUv:A&&p(S.emissiveMap.channel),metalnessMapUv:w&&p(S.metalnessMap.channel),roughnessMapUv:Y&&p(S.roughnessMap.channel),anisotropyMapUv:Le&&p(S.anisotropyMap.channel),clearcoatMapUv:Ye&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:je&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(S.sheenRoughnessMap.channel),specularMapUv:Ie&&p(S.specularMap.channel),specularColorMapUv:Ke&&p(S.specularColorMap.channel),specularIntensityMapUv:ut&&p(S.specularIntensityMap.channel),transmissionMapUv:at&&p(S.transmissionMap.channel),thicknessMapUv:tt&&p(S.thicknessMap.channel),alphaMapUv:P&&p(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(vt||ve),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(He||P),fog:!!ne,useFog:S.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ve,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&te.length>0,shadowMapType:t.shadowMap.type,toneMapping:Be,useLegacyLights:t._useLegacyLights,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===wt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===si,flipSided:S.side===Pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Ee&&S.extensions.derivatives===!0,extensionFragDepth:Ee&&S.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ee&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function m(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const te in S.defines)R.push(te),R.push(S.defines[te]);return S.isRawShaderMaterial===!1&&(g(R,S),x(R,S),R.push(t.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function g(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function x(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),S.push(a.mask)}function L(S){const R=y[S.type];let te;if(R){const le=pi[R];te=kE.clone(le.uniforms)}else te=S.uniforms;return te}function C(S,R){let te;for(let le=0,z=d.length;le<z;le++){const ne=d[le];if(ne.cacheKey===R){te=ne,++te.usedTimes;break}}return te===void 0&&(te=new QA(t,R,S,s),d.push(te)),te}function b(S){if(--S.usedTimes===0){const R=d.indexOf(S);d[R]=d[d.length-1],d.pop(),S.destroy()}}function G(S){l.remove(S)}function re(){l.dispose()}return{getParameters:u,getProgramCacheKey:m,getUniforms:L,acquireProgram:C,releaseProgram:b,releaseShaderCache:G,programs:d,dispose:re}}function ib(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function rb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function qm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Km(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,v,_,y,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:v,groupOrder:_,renderOrder:f.renderOrder,z:y,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=v,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=p),e++,u}function a(f,h,v,_,y,p){const u=o(f,h,v,_,y,p);v.transmission>0?i.push(u):v.transparent===!0?r.push(u):n.push(u)}function l(f,h,v,_,y,p){const u=o(f,h,v,_,y,p);v.transmission>0?i.unshift(u):v.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||rb),i.length>1&&i.sort(h||qm),r.length>1&&r.sort(h||qm)}function d(){for(let f=e,h=t.length;f<h;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function sb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Km,t.set(i,[o])):r>=s.length?(o=new Km,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function ob(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new nt};break;case"SpotLight":n={position:new W,direction:new W,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function ab(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let lb=0;function cb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ub(t,e){const n=new ob,i=ab(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new W);const s=new W,o=new Ot,a=new Ot;function l(d,f){let h=0,v=0,_=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let y=0,p=0,u=0,m=0,g=0,x=0,L=0,C=0,b=0,G=0,re=0;d.sort(cb);const S=f===!0?Math.PI:1;for(let te=0,le=d.length;te<le;te++){const z=d[te],ne=z.color,Q=z.intensity,ce=z.distance,V=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=ne.r*Q*S,v+=ne.g*Q*S,_+=ne.b*Q*S;else if(z.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(z.sh.coefficients[X],Q);re++}else if(z.isDirectionalLight){const X=n.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity*S),z.castShadow){const Z=z.shadow,ae=i.get(z);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,r.directionalShadow[y]=ae,r.directionalShadowMap[y]=V,r.directionalShadowMatrix[y]=z.shadow.matrix,x++}r.directional[y]=X,y++}else if(z.isSpotLight){const X=n.get(z);X.position.setFromMatrixPosition(z.matrixWorld),X.color.copy(ne).multiplyScalar(Q*S),X.distance=ce,X.coneCos=Math.cos(z.angle),X.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),X.decay=z.decay,r.spot[u]=X;const Z=z.shadow;if(z.map&&(r.spotLightMap[b]=z.map,b++,Z.updateMatrices(z),z.castShadow&&G++),r.spotLightMatrix[u]=Z.matrix,z.castShadow){const ae=i.get(z);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,r.spotShadow[u]=ae,r.spotShadowMap[u]=V,C++}u++}else if(z.isRectAreaLight){const X=n.get(z);X.color.copy(ne).multiplyScalar(Q),X.halfWidth.set(z.width*.5,0,0),X.halfHeight.set(0,z.height*.5,0),r.rectArea[m]=X,m++}else if(z.isPointLight){const X=n.get(z);if(X.color.copy(z.color).multiplyScalar(z.intensity*S),X.distance=z.distance,X.decay=z.decay,z.castShadow){const Z=z.shadow,ae=i.get(z);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,ae.shadowCameraNear=Z.camera.near,ae.shadowCameraFar=Z.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=V,r.pointShadowMatrix[p]=z.shadow.matrix,L++}r.point[p]=X,p++}else if(z.isHemisphereLight){const X=n.get(z);X.skyColor.copy(z.color).multiplyScalar(Q*S),X.groundColor.copy(z.groundColor).multiplyScalar(Q*S),r.hemi[g]=X,g++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=v,r.ambient[2]=_;const R=r.hash;(R.directionalLength!==y||R.pointLength!==p||R.spotLength!==u||R.rectAreaLength!==m||R.hemiLength!==g||R.numDirectionalShadows!==x||R.numPointShadows!==L||R.numSpotShadows!==C||R.numSpotMaps!==b||R.numLightProbes!==re)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=m,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+b-G,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=re,R.directionalLength=y,R.pointLength=p,R.spotLength=u,R.rectAreaLength=m,R.hemiLength=g,R.numDirectionalShadows=x,R.numPointShadows=L,R.numSpotShadows=C,R.numSpotMaps=b,R.numLightProbes=re,r.version=lb++)}function c(d,f){let h=0,v=0,_=0,y=0,p=0;const u=f.matrixWorldInverse;for(let m=0,g=d.length;m<g;m++){const x=d[m];if(x.isDirectionalLight){const L=r.directional[h];L.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),h++}else if(x.isSpotLight){const L=r.spot[_];L.position.setFromMatrixPosition(x.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),_++}else if(x.isRectAreaLight){const L=r.rectArea[y];L.position.setFromMatrixPosition(x.matrixWorld),L.position.applyMatrix4(u),a.identity(),o.copy(x.matrixWorld),o.premultiply(u),a.extractRotation(o),L.halfWidth.set(x.width*.5,0,0),L.halfHeight.set(0,x.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const L=r.point[v];L.position.setFromMatrixPosition(x.matrixWorld),L.position.applyMatrix4(u),v++}else if(x.isHemisphereLight){const L=r.hemi[p];L.direction.setFromMatrixPosition(x.matrixWorld),L.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Zm(t,e){const n=new ub(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function db(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Zm(t,e),n.set(s,[l])):o>=a.length?(l=new Zm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class fb extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hb extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mb=`uniform sampler2D shadow_pass;
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
}`;function gb(t,e,n){let i=new ah;const r=new st,s=new st,o=new Zt,a=new fb({depthPacking:uE}),l=new hb,c={},d=n.maxTextureSize,f={[yr]:Pn,[Pn]:yr,[si]:si},h=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:pb,fragmentShader:mb}),v=h.clone();v.defines.HORIZONTAL_PASS=1;const _=new rn;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new $n(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O0;let u=this.type;this.render=function(C,b,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const re=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),te=t.state;te.setBlending(hr),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const le=u!==Ti&&this.type===Ti,z=u===Ti&&this.type!==Ti;for(let ne=0,Q=C.length;ne<Q;ne++){const ce=C[ne],V=ce.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const X=V.getFrameExtents();if(r.multiply(X),s.copy(V.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/X.x),r.x=s.x*X.x,V.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/X.y),r.y=s.y*X.y,V.mapSize.y=s.y)),V.map===null||le===!0||z===!0){const ae=this.type!==Ti?{minFilter:_n,magFilter:_n}:{};V.map!==null&&V.map.dispose(),V.map=new Kr(r.x,r.y,ae),V.map.texture.name=ce.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const Z=V.getViewportCount();for(let ae=0;ae<Z;ae++){const he=V.getViewport(ae);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),te.viewport(o),V.updateMatrices(ce,ae),i=V.getFrustum(),x(b,G,V.camera,ce,this.type)}V.isPointLightShadow!==!0&&this.type===Ti&&m(V,G),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(re,S,R)};function m(C,b){const G=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Kr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,G,h,y,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,G,v,y,null)}function g(C,b,G,re){let S=null;const R=G.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)S=R;else if(S=G.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const te=S.uuid,le=b.uuid;let z=c[te];z===void 0&&(z={},c[te]=z);let ne=z[le];ne===void 0&&(ne=S.clone(),z[le]=ne,b.addEventListener("dispose",L)),S=ne}if(S.visible=b.visible,S.wireframe=b.wireframe,re===Ti?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:f[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,G.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const te=t.properties.get(S);te.light=G}return S}function x(C,b,G,re,S){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Ti)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld);const le=e.update(C),z=C.material;if(Array.isArray(z)){const ne=le.groups;for(let Q=0,ce=ne.length;Q<ce;Q++){const V=ne[Q],X=z[V.materialIndex];if(X&&X.visible){const Z=g(C,X,re,S);C.onBeforeShadow(t,C,b,G,le,Z,V),t.renderBufferDirect(G,null,le,Z,C,V),C.onAfterShadow(t,C,b,G,le,Z,V)}}}else if(z.visible){const ne=g(C,z,re,S);C.onBeforeShadow(t,C,b,G,le,ne,null),t.renderBufferDirect(G,null,le,ne,C,null),C.onAfterShadow(t,C,b,G,le,ne,null)}}const te=C.children;for(let le=0,z=te.length;le<z;le++)x(te[le],b,G,re,S)}function L(C){C.target.removeEventListener("dispose",L);for(const G in c){const re=c[G],S=C.target.uuid;S in re&&(re[S].dispose(),delete re[S])}}}function vb(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const pe=new Zt;let xe=null;const Ee=new Zt(0,0,0,0);return{setMask:function(Be){xe!==Be&&!P&&(t.colorMask(Be,Be,Be,Be),xe=Be)},setLocked:function(Be){P=Be},setClear:function(Be,ie,se,Re,oe){oe===!0&&(Be*=Re,ie*=Re,se*=Re),pe.set(Be,ie,se,Re),Ee.equals(pe)===!1&&(t.clearColor(Be,ie,se,Re),Ee.copy(pe))},reset:function(){P=!1,xe=null,Ee.set(-1,0,0,0)}}}function s(){let P=!1,pe=null,xe=null,Ee=null;return{setTest:function(Be){Be?Ne(t.DEPTH_TEST):et(t.DEPTH_TEST)},setMask:function(Be){pe!==Be&&!P&&(t.depthMask(Be),pe=Be)},setFunc:function(Be){if(xe!==Be){switch(Be){case BM:t.depthFunc(t.NEVER);break;case HM:t.depthFunc(t.ALWAYS);break;case GM:t.depthFunc(t.LESS);break;case Zl:t.depthFunc(t.LEQUAL);break;case VM:t.depthFunc(t.EQUAL);break;case WM:t.depthFunc(t.GEQUAL);break;case jM:t.depthFunc(t.GREATER);break;case XM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=Be}},setLocked:function(Be){P=Be},setClear:function(Be){Ee!==Be&&(t.clearDepth(Be),Ee=Be)},reset:function(){P=!1,pe=null,xe=null,Ee=null}}}function o(){let P=!1,pe=null,xe=null,Ee=null,Be=null,ie=null,se=null,Re=null,oe=null;return{setTest:function(ue){P||(ue?Ne(t.STENCIL_TEST):et(t.STENCIL_TEST))},setMask:function(ue){pe!==ue&&!P&&(t.stencilMask(ue),pe=ue)},setFunc:function(ue,we,We){(xe!==ue||Ee!==we||Be!==We)&&(t.stencilFunc(ue,we,We),xe=ue,Ee=we,Be=We)},setOp:function(ue,we,We){(ie!==ue||se!==we||Re!==We)&&(t.stencilOp(ue,we,We),ie=ue,se=we,Re=We)},setLocked:function(ue){P=ue},setClear:function(ue){oe!==ue&&(t.clearStencil(ue),oe=ue)},reset:function(){P=!1,pe=null,xe=null,Ee=null,Be=null,ie=null,se=null,Re=null,oe=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let h={},v={},_=new WeakMap,y=[],p=null,u=!1,m=null,g=null,x=null,L=null,C=null,b=null,G=null,re=new nt(0,0,0),S=0,R=!1,te=null,le=null,z=null,ne=null,Q=null;const ce=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(Z)[1]),V=X>=1):Z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),V=X>=2);let ae=null,he={};const Ve=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),de=new Zt().fromArray(Ve),Ae=new Zt().fromArray(ee);function Ue(P,pe,xe,Ee){const Be=new Uint8Array(4),ie=t.createTexture();t.bindTexture(P,ie),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let se=0;se<xe;se++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(pe,0,t.RGBA,1,1,Ee,0,t.RGBA,t.UNSIGNED_BYTE,Be):t.texImage2D(pe+se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Be);return ie}const Ge={};Ge[t.TEXTURE_2D]=Ue(t.TEXTURE_2D,t.TEXTURE_2D,1),Ge[t.TEXTURE_CUBE_MAP]=Ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ge[t.TEXTURE_2D_ARRAY]=Ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ge[t.TEXTURE_3D]=Ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(t.DEPTH_TEST),l.setFunc(Zl),Je(!1),A(Lp),Ne(t.CULL_FACE),ze(hr);function Ne(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function et(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function He(P,pe){return v[P]!==pe?(t.bindFramebuffer(P,pe),v[P]=pe,i&&(P===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=pe),P===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=pe)),!0):!1}function H(P,pe){let xe=y,Ee=!1;if(P)if(xe=_.get(pe),xe===void 0&&(xe=[],_.set(pe,xe)),P.isWebGLMultipleRenderTargets){const Be=P.texture;if(xe.length!==Be.length||xe[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,se=Be.length;ie<se;ie++)xe[ie]=t.COLOR_ATTACHMENT0+ie;xe.length=Be.length,Ee=!0}}else xe[0]!==t.COLOR_ATTACHMENT0&&(xe[0]=t.COLOR_ATTACHMENT0,Ee=!0);else xe[0]!==t.BACK&&(xe[0]=t.BACK,Ee=!0);Ee&&(n.isWebGL2?t.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function dt(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const Pe={[Ir]:t.FUNC_ADD,[TM]:t.FUNC_SUBTRACT,[AM]:t.FUNC_REVERSE_SUBTRACT};if(i)Pe[Up]=t.MIN,Pe[Fp]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Pe[Up]=P.MIN_EXT,Pe[Fp]=P.MAX_EXT)}const $e={[bM]:t.ZERO,[CM]:t.ONE,[RM]:t.SRC_COLOR,[Xd]:t.SRC_ALPHA,[UM]:t.SRC_ALPHA_SATURATE,[IM]:t.DST_COLOR,[LM]:t.DST_ALPHA,[PM]:t.ONE_MINUS_SRC_COLOR,[$d]:t.ONE_MINUS_SRC_ALPHA,[DM]:t.ONE_MINUS_DST_COLOR,[NM]:t.ONE_MINUS_DST_ALPHA,[FM]:t.CONSTANT_COLOR,[OM]:t.ONE_MINUS_CONSTANT_COLOR,[kM]:t.CONSTANT_ALPHA,[zM]:t.ONE_MINUS_CONSTANT_ALPHA};function ze(P,pe,xe,Ee,Be,ie,se,Re,oe,ue){if(P===hr){u===!0&&(et(t.BLEND),u=!1);return}if(u===!1&&(Ne(t.BLEND),u=!0),P!==wM){if(P!==m||ue!==R){if((g!==Ir||C!==Ir)&&(t.blendEquation(t.FUNC_ADD),g=Ir,C=Ir),ue)switch(P){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Np:t.blendFunc(t.ONE,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Np:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,L=null,b=null,G=null,re.set(0,0,0),S=0,m=P,R=ue}return}Be=Be||pe,ie=ie||xe,se=se||Ee,(pe!==g||Be!==C)&&(t.blendEquationSeparate(Pe[pe],Pe[Be]),g=pe,C=Be),(xe!==x||Ee!==L||ie!==b||se!==G)&&(t.blendFuncSeparate($e[xe],$e[Ee],$e[ie],$e[se]),x=xe,L=Ee,b=ie,G=se),(Re.equals(re)===!1||oe!==S)&&(t.blendColor(Re.r,Re.g,Re.b,oe),re.copy(Re),S=oe),m=P,R=!1}function vt(P,pe){P.side===si?et(t.CULL_FACE):Ne(t.CULL_FACE);let xe=P.side===Pn;pe&&(xe=!xe),Je(xe),P.blending===Gs&&P.transparent===!1?ze(hr):ze(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Ee=P.stencilWrite;c.setTest(Ee),Ee&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Y(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ne(t.SAMPLE_ALPHA_TO_COVERAGE):et(t.SAMPLE_ALPHA_TO_COVERAGE)}function Je(P){te!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),te=P)}function A(P){P!==MM?(Ne(t.CULL_FACE),P!==le&&(P===Lp?t.cullFace(t.BACK):P===EM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):et(t.CULL_FACE),le=P}function w(P){P!==z&&(V&&t.lineWidth(P),z=P)}function Y(P,pe,xe){P?(Ne(t.POLYGON_OFFSET_FILL),(ne!==pe||Q!==xe)&&(t.polygonOffset(pe,xe),ne=pe,Q=xe)):et(t.POLYGON_OFFSET_FILL)}function ve(P){P?Ne(t.SCISSOR_TEST):et(t.SCISSOR_TEST)}function K(P){P===void 0&&(P=t.TEXTURE0+ce-1),ae!==P&&(t.activeTexture(P),ae=P)}function me(P,pe,xe){xe===void 0&&(ae===null?xe=t.TEXTURE0+ce-1:xe=ae);let Ee=he[xe];Ee===void 0&&(Ee={type:void 0,texture:void 0},he[xe]=Ee),(Ee.type!==P||Ee.texture!==pe)&&(ae!==xe&&(t.activeTexture(xe),ae=xe),t.bindTexture(P,pe||Ge[P]),Ee.type=P,Ee.texture=pe)}function Fe(){const P=he[ae];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Qe(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function gt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ze(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(P){de.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),de.copy(P))}function ut(P){Ae.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),Ae.copy(P))}function at(P,pe){let xe=f.get(pe);xe===void 0&&(xe=new WeakMap,f.set(pe,xe));let Ee=xe.get(P);Ee===void 0&&(Ee=t.getUniformBlockIndex(pe,P.name),xe.set(P,Ee))}function tt(P,pe){const Ee=f.get(pe).get(P);d.get(pe)!==Ee&&(t.uniformBlockBinding(pe,Ee,P.__bindingPointIndex),d.set(pe,Ee))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ae=null,he={},v={},_=new WeakMap,y=[],p=null,u=!1,m=null,g=null,x=null,L=null,C=null,b=null,G=null,re=new nt(0,0,0),S=0,R=!1,te=null,le=null,z=null,ne=null,Q=null,de.set(0,0,t.canvas.width,t.canvas.height),Ae.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ne,disable:et,bindFramebuffer:He,drawBuffers:H,useProgram:dt,setBlending:ze,setMaterial:vt,setFlipSided:Je,setCullFace:A,setLineWidth:w,setPolygonOffset:Y,setScissorTest:ve,activeTexture:K,bindTexture:me,unbindTexture:Fe,compressedTexImage2D:Ce,compressedTexImage3D:Le,texImage2D:Oe,texImage3D:Ie,updateUBOMapping:at,uniformBlockBinding:tt,texStorage2D:Ze,texStorage3D:je,texSubImage2D:Ye,texSubImage3D:Qe,compressedTexSubImage2D:fe,compressedTexSubImage3D:gt,scissor:Ke,viewport:ut,reset:qe}}function _b(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,w){return v?new OffscreenCanvas(A,w):nc("canvas")}function y(A,w,Y,ve){let K=1;if((A.width>ve||A.height>ve)&&(K=ve/Math.max(A.width,A.height)),K<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const me=w?tf:Math.floor,Fe=me(K*A.width),Ce=me(K*A.height);f===void 0&&(f=_(Fe,Ce));const Le=Y?_(Fe,Ce):f;return Le.width=Fe,Le.height=Ce,Le.getContext("2d").drawImage(A,0,0,Fe,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Fe+"x"+Ce+")."),Le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return dm(A.width)&&dm(A.height)}function u(A){return a?!1:A.wrapS!==oi||A.wrapT!==oi||A.minFilter!==_n&&A.minFilter!==En}function m(A,w){return A.generateMipmaps&&w&&A.minFilter!==_n&&A.minFilter!==En}function g(A){t.generateMipmap(A)}function x(A,w,Y,ve,K=!1){if(a===!1)return w;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let me=w;if(w===t.RED&&(Y===t.FLOAT&&(me=t.R32F),Y===t.HALF_FLOAT&&(me=t.R16F),Y===t.UNSIGNED_BYTE&&(me=t.R8)),w===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(me=t.R8UI),Y===t.UNSIGNED_SHORT&&(me=t.R16UI),Y===t.UNSIGNED_INT&&(me=t.R32UI),Y===t.BYTE&&(me=t.R8I),Y===t.SHORT&&(me=t.R16I),Y===t.INT&&(me=t.R32I)),w===t.RG&&(Y===t.FLOAT&&(me=t.RG32F),Y===t.HALF_FLOAT&&(me=t.RG16F),Y===t.UNSIGNED_BYTE&&(me=t.RG8)),w===t.RGBA){const Fe=K?Ql:xt.getTransfer(ve);Y===t.FLOAT&&(me=t.RGBA32F),Y===t.HALF_FLOAT&&(me=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(me=Fe===wt?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(me=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(me=t.RGB5_A1)}return(me===t.R16F||me===t.R32F||me===t.RG16F||me===t.RG32F||me===t.RGBA16F||me===t.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function L(A,w,Y){return m(A,Y)===!0||A.isFramebufferTexture&&A.minFilter!==_n&&A.minFilter!==En?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function C(A){return A===_n||A===Op||A===xo?t.NEAREST:t.LINEAR}function b(A){const w=A.target;w.removeEventListener("dispose",b),re(w),w.isVideoTexture&&d.delete(w)}function G(A){const w=A.target;w.removeEventListener("dispose",G),R(w)}function re(A){const w=i.get(A);if(w.__webglInit===void 0)return;const Y=A.source,ve=h.get(Y);if(ve){const K=ve[w.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(A),Object.keys(ve).length===0&&h.delete(Y)}i.remove(A)}function S(A){const w=i.get(A);t.deleteTexture(w.__webglTexture);const Y=A.source,ve=h.get(Y);delete ve[w.__cacheKey],o.memory.textures--}function R(A){const w=A.texture,Y=i.get(A),ve=i.get(w);if(ve.__webglTexture!==void 0&&(t.deleteTexture(ve.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(Y.__webglFramebuffer[K]))for(let me=0;me<Y.__webglFramebuffer[K].length;me++)t.deleteFramebuffer(Y.__webglFramebuffer[K][me]);else t.deleteFramebuffer(Y.__webglFramebuffer[K]);Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer[K])}else{if(Array.isArray(Y.__webglFramebuffer))for(let K=0;K<Y.__webglFramebuffer.length;K++)t.deleteFramebuffer(Y.__webglFramebuffer[K]);else t.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let K=0;K<Y.__webglColorRenderbuffer.length;K++)Y.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(Y.__webglColorRenderbuffer[K]);Y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let K=0,me=w.length;K<me;K++){const Fe=i.get(w[K]);Fe.__webglTexture&&(t.deleteTexture(Fe.__webglTexture),o.memory.textures--),i.remove(w[K])}i.remove(w),i.remove(A)}let te=0;function le(){te=0}function z(){const A=te;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),te+=1,A}function ne(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function Q(A,w){const Y=i.get(A);if(A.isVideoTexture&&vt(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){const ve=A.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(Y,A,w);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+w)}function ce(A,w){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){de(Y,A,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+w)}function V(A,w){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){de(Y,A,w);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+w)}function X(A,w){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){Ae(Y,A,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+w)}const Z={[Kd]:t.REPEAT,[oi]:t.CLAMP_TO_EDGE,[Zd]:t.MIRRORED_REPEAT},ae={[_n]:t.NEAREST,[Op]:t.NEAREST_MIPMAP_NEAREST,[xo]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[cu]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},he={[fE]:t.NEVER,[_E]:t.ALWAYS,[hE]:t.LESS,[K0]:t.LEQUAL,[pE]:t.EQUAL,[vE]:t.GEQUAL,[mE]:t.GREATER,[gE]:t.NOTEQUAL};function Ve(A,w,Y){if(w.type===Ci&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===En||w.magFilter===cu||w.magFilter===xo||w.magFilter===kr||w.minFilter===En||w.minFilter===cu||w.minFilter===xo||w.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(t.texParameteri(A,t.TEXTURE_WRAP_S,Z[w.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Z[w.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Z[w.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ae[w.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ae[w.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==oi||w.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(w.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(w.minFilter)),w.minFilter!==_n&&w.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===_n||w.minFilter!==xo&&w.minFilter!==kr||w.type===Ci&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===la&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(A,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ee(A,w){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",b));const ve=w.source;let K=h.get(ve);K===void 0&&(K={},h.set(ve,K));const me=ne(w);if(me!==A.__cacheKey){K[me]===void 0&&(K[me]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),K[me].usedTimes++;const Fe=K[A.__cacheKey];Fe!==void 0&&(K[A.__cacheKey].usedTimes--,Fe.usedTimes===0&&S(w)),A.__cacheKey=me,A.__webglTexture=K[me].texture}return Y}function de(A,w,Y){let ve=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ve=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ve=t.TEXTURE_3D);const K=ee(A,w),me=w.source;n.bindTexture(ve,A.__webglTexture,t.TEXTURE0+Y);const Fe=i.get(me);if(me.version!==Fe.__version||K===!0){n.activeTexture(t.TEXTURE0+Y);const Ce=xt.getPrimaries(xt.workingColorSpace),Le=w.colorSpace===Wn?null:xt.getPrimaries(w.colorSpace),Ye=w.colorSpace===Wn||Ce===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const Qe=u(w)&&p(w.image)===!1;let fe=y(w.image,Qe,!1,r.maxTextureSize);fe=Je(w,fe);const gt=p(fe)||a,Ze=s.convert(w.format,w.colorSpace);let je=s.convert(w.type),Oe=x(w.internalFormat,Ze,je,w.colorSpace,w.isVideoTexture);Ve(ve,w,gt);let Ie;const Ke=w.mipmaps,ut=a&&w.isVideoTexture!==!0&&Oe!==$0,at=Fe.__version===void 0||K===!0,tt=me.dataReady,qe=L(w,fe,gt);if(w.isDepthTexture)Oe=t.DEPTH_COMPONENT,a?w.type===Ci?Oe=t.DEPTH_COMPONENT32F:w.type===ir?Oe=t.DEPTH_COMPONENT24:w.type===Hr?Oe=t.DEPTH24_STENCIL8:Oe=t.DEPTH_COMPONENT16:w.type===Ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Gr&&Oe===t.DEPTH_COMPONENT&&w.type!==sh&&w.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ir,je=s.convert(w.type)),w.format===eo&&Oe===t.DEPTH_COMPONENT&&(Oe=t.DEPTH_STENCIL,w.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Hr,je=s.convert(w.type))),at&&(ut?n.texStorage2D(t.TEXTURE_2D,1,Oe,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Oe,fe.width,fe.height,0,Ze,je,null));else if(w.isDataTexture)if(Ke.length>0&&gt){ut&&at&&n.texStorage2D(t.TEXTURE_2D,qe,Oe,Ke[0].width,Ke[0].height);for(let P=0,pe=Ke.length;P<pe;P++)Ie=Ke[P],ut?tt&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,Ie.width,Ie.height,Ze,je,Ie.data):n.texImage2D(t.TEXTURE_2D,P,Oe,Ie.width,Ie.height,0,Ze,je,Ie.data);w.generateMipmaps=!1}else ut?(at&&n.texStorage2D(t.TEXTURE_2D,qe,Oe,fe.width,fe.height),tt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,Ze,je,fe.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,fe.width,fe.height,0,Ze,je,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ut&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,Oe,Ke[0].width,Ke[0].height,fe.depth);for(let P=0,pe=Ke.length;P<pe;P++)Ie=Ke[P],w.format!==ai?Ze!==null?ut?tt&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,P,0,0,0,Ie.width,Ie.height,fe.depth,Ze,Ie.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,P,Oe,Ie.width,Ie.height,fe.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?tt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,P,0,0,0,Ie.width,Ie.height,fe.depth,Ze,je,Ie.data):n.texImage3D(t.TEXTURE_2D_ARRAY,P,Oe,Ie.width,Ie.height,fe.depth,0,Ze,je,Ie.data)}else{ut&&at&&n.texStorage2D(t.TEXTURE_2D,qe,Oe,Ke[0].width,Ke[0].height);for(let P=0,pe=Ke.length;P<pe;P++)Ie=Ke[P],w.format!==ai?Ze!==null?ut?tt&&n.compressedTexSubImage2D(t.TEXTURE_2D,P,0,0,Ie.width,Ie.height,Ze,Ie.data):n.compressedTexImage2D(t.TEXTURE_2D,P,Oe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?tt&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,Ie.width,Ie.height,Ze,je,Ie.data):n.texImage2D(t.TEXTURE_2D,P,Oe,Ie.width,Ie.height,0,Ze,je,Ie.data)}else if(w.isDataArrayTexture)ut?(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,Oe,fe.width,fe.height,fe.depth),tt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ze,je,fe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,fe.width,fe.height,fe.depth,0,Ze,je,fe.data);else if(w.isData3DTexture)ut?(at&&n.texStorage3D(t.TEXTURE_3D,qe,Oe,fe.width,fe.height,fe.depth),tt&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ze,je,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,fe.width,fe.height,fe.depth,0,Ze,je,fe.data);else if(w.isFramebufferTexture){if(at)if(ut)n.texStorage2D(t.TEXTURE_2D,qe,Oe,fe.width,fe.height);else{let P=fe.width,pe=fe.height;for(let xe=0;xe<qe;xe++)n.texImage2D(t.TEXTURE_2D,xe,Oe,P,pe,0,Ze,je,null),P>>=1,pe>>=1}}else if(Ke.length>0&&gt){ut&&at&&n.texStorage2D(t.TEXTURE_2D,qe,Oe,Ke[0].width,Ke[0].height);for(let P=0,pe=Ke.length;P<pe;P++)Ie=Ke[P],ut?tt&&n.texSubImage2D(t.TEXTURE_2D,P,0,0,Ze,je,Ie):n.texImage2D(t.TEXTURE_2D,P,Oe,Ze,je,Ie);w.generateMipmaps=!1}else ut?(at&&n.texStorage2D(t.TEXTURE_2D,qe,Oe,fe.width,fe.height),tt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ze,je,fe)):n.texImage2D(t.TEXTURE_2D,0,Oe,Ze,je,fe);m(w,gt)&&g(ve),Fe.__version=me.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Ae(A,w,Y){if(w.image.length!==6)return;const ve=ee(A,w),K=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+Y);const me=i.get(K);if(K.version!==me.__version||ve===!0){n.activeTexture(t.TEXTURE0+Y);const Fe=xt.getPrimaries(xt.workingColorSpace),Ce=w.colorSpace===Wn?null:xt.getPrimaries(w.colorSpace),Le=w.colorSpace===Wn||Fe===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,Qe=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let P=0;P<6;P++)!Ye&&!Qe?fe[P]=y(w.image[P],!1,!0,r.maxCubemapSize):fe[P]=Qe?w.image[P].image:w.image[P],fe[P]=Je(w,fe[P]);const gt=fe[0],Ze=p(gt)||a,je=s.convert(w.format,w.colorSpace),Oe=s.convert(w.type),Ie=x(w.internalFormat,je,Oe,w.colorSpace),Ke=a&&w.isVideoTexture!==!0,ut=me.__version===void 0||ve===!0,at=K.dataReady;let tt=L(w,gt,Ze);Ve(t.TEXTURE_CUBE_MAP,w,Ze);let qe;if(Ye){Ke&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,tt,Ie,gt.width,gt.height);for(let P=0;P<6;P++){qe=fe[P].mipmaps;for(let pe=0;pe<qe.length;pe++){const xe=qe[pe];w.format!==ai?je!==null?Ke?at&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe,0,0,xe.width,xe.height,je,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe,0,0,xe.width,xe.height,je,Oe,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe,Ie,xe.width,xe.height,0,je,Oe,xe.data)}}}else{qe=w.mipmaps,Ke&&ut&&(qe.length>0&&tt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,tt,Ie,fe[0].width,fe[0].height));for(let P=0;P<6;P++)if(Qe){Ke?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,fe[P].width,fe[P].height,je,Oe,fe[P].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Ie,fe[P].width,fe[P].height,0,je,Oe,fe[P].data);for(let pe=0;pe<qe.length;pe++){const Ee=qe[pe].image[P].image;Ke?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe+1,0,0,Ee.width,Ee.height,je,Oe,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe+1,Ie,Ee.width,Ee.height,0,je,Oe,Ee.data)}}else{Ke?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,je,Oe,fe[P]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Ie,je,Oe,fe[P]);for(let pe=0;pe<qe.length;pe++){const xe=qe[pe];Ke?at&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe+1,0,0,je,Oe,xe.image[P]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe+1,Ie,je,Oe,xe.image[P])}}}m(w,Ze)&&g(t.TEXTURE_CUBE_MAP),me.__version=K.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Ue(A,w,Y,ve,K,me){const Fe=s.convert(Y.format,Y.colorSpace),Ce=s.convert(Y.type),Le=x(Y.internalFormat,Fe,Ce,Y.colorSpace);if(!i.get(w).__hasExternalTextures){const Qe=Math.max(1,w.width>>me),fe=Math.max(1,w.height>>me);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,me,Le,Qe,fe,w.depth,0,Fe,Ce,null):n.texImage2D(K,me,Le,Qe,fe,0,Fe,Ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ze(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ve,K,i.get(Y).__webglTexture,0,$e(w)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ve,K,i.get(Y).__webglTexture,me),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(A,w,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let ve=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Y||ze(w)){const K=w.depthTexture;K&&K.isDepthTexture&&(K.type===Ci?ve=t.DEPTH_COMPONENT32F:K.type===ir&&(ve=t.DEPTH_COMPONENT24));const me=$e(w);ze(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,ve,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,me,ve,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,ve,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const ve=$e(w);Y&&ze(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,t.DEPTH24_STENCIL8,w.width,w.height):ze(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ve=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0;K<ve.length;K++){const me=ve[K],Fe=s.convert(me.format,me.colorSpace),Ce=s.convert(me.type),Le=x(me.internalFormat,Fe,Ce,me.colorSpace),Ye=$e(w);Y&&ze(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,Le,w.width,w.height):ze(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,Le,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Le,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Q(w.depthTexture,0);const ve=i.get(w.depthTexture).__webglTexture,K=$e(w);if(w.depthTexture.format===Gr)ze(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ve,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ve,0);else if(w.depthTexture.format===eo)ze(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ve,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function et(A){const w=i.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ne(w.__webglFramebuffer,A)}else if(Y){w.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ve]),w.__webglDepthbuffer[ve]=t.createRenderbuffer(),Ge(w.__webglDepthbuffer[ve],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Ge(w.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(A,w,Y){const ve=i.get(A);w!==void 0&&Ue(ve.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&et(A)}function H(A){const w=A.texture,Y=i.get(A),ve=i.get(w);A.addEventListener("dispose",G),A.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture()),ve.__version=w.version,o.memory.textures++);const K=A.isWebGLCubeRenderTarget===!0,me=A.isWebGLMultipleRenderTargets===!0,Fe=p(A)||a;if(K){Y.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(a&&w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[Ce]=[];for(let Le=0;Le<w.mipmaps.length;Le++)Y.__webglFramebuffer[Ce][Le]=t.createFramebuffer()}else Y.__webglFramebuffer[Ce]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)Y.__webglFramebuffer[Ce]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(me)if(r.drawBuffers){const Ce=A.texture;for(let Le=0,Ye=Ce.length;Le<Ye;Le++){const Qe=i.get(Ce[Le]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ze(A)===!1){const Ce=me?w:[w];Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Le=0;Le<Ce.length;Le++){const Ye=Ce[Le];Y.__webglColorRenderbuffer[Le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[Le]);const Qe=s.convert(Ye.format,Ye.colorSpace),fe=s.convert(Ye.type),gt=x(Ye.internalFormat,Qe,fe,Ye.colorSpace,A.isXRRenderTarget===!0),Ze=$e(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,gt,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,Y.__webglColorRenderbuffer[Le])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),Ge(Y.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,ve.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,w,Fe);for(let Ce=0;Ce<6;Ce++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Le=0;Le<w.mipmaps.length;Le++)Ue(Y.__webglFramebuffer[Ce][Le],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Le);else Ue(Y.__webglFramebuffer[Ce],A,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);m(w,Fe)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){const Ce=A.texture;for(let Le=0,Ye=Ce.length;Le<Ye;Le++){const Qe=Ce[Le],fe=i.get(Qe);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),Ve(t.TEXTURE_2D,Qe,Fe),Ue(Y.__webglFramebuffer,A,Qe,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,0),m(Qe,Fe)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let Ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Ce,ve.__webglTexture),Ve(Ce,w,Fe),a&&w.mipmaps&&w.mipmaps.length>0)for(let Le=0;Le<w.mipmaps.length;Le++)Ue(Y.__webglFramebuffer[Le],A,w,t.COLOR_ATTACHMENT0,Ce,Le);else Ue(Y.__webglFramebuffer,A,w,t.COLOR_ATTACHMENT0,Ce,0);m(w,Fe)&&g(Ce),n.unbindTexture()}A.depthBuffer&&et(A)}function dt(A){const w=p(A)||a,Y=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ve=0,K=Y.length;ve<K;ve++){const me=Y[ve];if(m(me,w)){const Fe=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ce=i.get(me).__webglTexture;n.bindTexture(Fe,Ce),g(Fe),n.unbindTexture()}}}function Pe(A){if(a&&A.samples>0&&ze(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],Y=A.width,ve=A.height;let K=t.COLOR_BUFFER_BIT;const me=[],Fe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(A),Le=A.isWebGLMultipleRenderTargets===!0;if(Le)for(let Ye=0;Ye<w.length;Ye++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ye=0;Ye<w.length;Ye++){me.push(t.COLOR_ATTACHMENT0+Ye),A.depthBuffer&&me.push(Fe);const Qe=Ce.__ignoreDepthValues!==void 0?Ce.__ignoreDepthValues:!1;if(Qe===!1&&(A.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),Le&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ye]),Qe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Fe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Fe])),Le){const fe=i.get(w[Ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,Y,ve,0,0,Y,ve,K,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,me)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Le)for(let Ye=0;Ye<w.length;Ye++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ye]);const Qe=i.get(w[Ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.TEXTURE_2D,Qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}}function $e(A){return Math.min(r.maxSamples,A.samples)}function ze(A){const w=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function vt(A){const w=o.render.frame;d.get(A)!==w&&(d.set(A,w),A.update())}function Je(A,w){const Y=A.colorSpace,ve=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Jd||Y!==Oi&&Y!==Wn&&(xt.getTransfer(Y)===wt?a===!1?e.has("EXT_sRGB")===!0&&ve===ai?(A.format=Jd,A.minFilter=En,A.generateMipmaps=!1):w=Q0.sRGBToLinear(w):(ve!==ai||K!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}this.allocateTextureUnit=z,this.resetTextureUnits=le,this.setTexture2D=Q,this.setTexture2DArray=ce,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=He,this.setupRenderTarget=H,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ze}function yb(t,e,n){const i=n.isWebGL2;function r(s,o=Wn){let a;const l=xt.getTransfer(o);if(s===mr)return t.UNSIGNED_BYTE;if(s===G0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===V0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===tE)return t.BYTE;if(s===nE)return t.SHORT;if(s===sh)return t.UNSIGNED_SHORT;if(s===H0)return t.INT;if(s===ir)return t.UNSIGNED_INT;if(s===Ci)return t.FLOAT;if(s===la)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===iE)return t.ALPHA;if(s===ai)return t.RGBA;if(s===rE)return t.LUMINANCE;if(s===sE)return t.LUMINANCE_ALPHA;if(s===Gr)return t.DEPTH_COMPONENT;if(s===eo)return t.DEPTH_STENCIL;if(s===Jd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===oE)return t.RED;if(s===W0)return t.RED_INTEGER;if(s===aE)return t.RG;if(s===j0)return t.RG_INTEGER;if(s===X0)return t.RGBA_INTEGER;if(s===uu||s===du||s===fu||s===hu)if(l===wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===uu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===uu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===du)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kp||s===zp||s===Bp||s===Hp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===kp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gp||s===Vp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Gp)return l===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Vp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wp||s===jp||s===Xp||s===$p||s===Yp||s===qp||s===Kp||s===Zp||s===Qp||s===Jp||s===em||s===tm||s===nm||s===im)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Wp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$p)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===qp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jp)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===em)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nm)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===im)return l===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pu||s===rm||s===sm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===pu)return l===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lE||s===om||s===am||s===lm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===pu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===om)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===am)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class xb extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mi extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sb={type:"move"};class ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),v=.02,_=.005;c.inputState.pinching&&h>v+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=v-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eb=`
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

}`;class wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new xn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new xr({extensions:{fragDepth:!0},vertexShader:Mb,fragmentShader:Eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new $n(new no(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class Tb extends lo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,v=null,_=null;const y=new wb,p=n.getContextAttributes();let u=null,m=null;const g=[],x=[],L=new st;let C=null;const b=new Vn;b.layers.enable(1),b.viewport=new Zt;const G=new Vn;G.layers.enable(2),G.viewport=new Zt;const re=[b,G],S=new xb;S.layers.enable(1),S.layers.enable(2);let R=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=g[ee];return de===void 0&&(de=new ku,g[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=g[ee];return de===void 0&&(de=new ku,g[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=g[ee];return de===void 0&&(de=new ku,g[ee]=de),de.getHandSpace()};function le(ee){const de=x.indexOf(ee.inputSource);if(de===-1)return;const Ae=g[de];Ae!==void 0&&(Ae.update(ee.inputSource,ee.frame,c||o),Ae.dispatchEvent({type:ee.type,data:ee.inputSource}))}function z(){r.removeEventListener("select",le),r.removeEventListener("selectstart",le),r.removeEventListener("selectend",le),r.removeEventListener("squeeze",le),r.removeEventListener("squeezestart",le),r.removeEventListener("squeezeend",le),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<g.length;ee++){const de=x[ee];de!==null&&(x[ee]=null,g[ee].disconnect(de))}R=null,te=null,y.reset(),e.setRenderTarget(u),v=null,h=null,f=null,r=null,m=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:v},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",le),r.addEventListener("selectstart",le),r.addEventListener("selectend",le),r.addEventListener("squeeze",le),r.addEventListener("squeezestart",le),r.addEventListener("squeezeend",le),r.addEventListener("end",z),r.addEventListener("inputsourceschange",ne),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),m=new Kr(v.framebufferWidth,v.framebufferHeight,{format:ai,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let de=null,Ae=null,Ue=null;p.depth&&(Ue=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=p.stencil?eo:Gr,Ae=p.stencil?Hr:ir);const Ge={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new Kr(h.textureWidth,h.textureHeight,{format:ai,type:mr,depthTexture:new f_(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Ne=e.properties.get(m);Ne.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ne(ee){for(let de=0;de<ee.removed.length;de++){const Ae=ee.removed[de],Ue=x.indexOf(Ae);Ue>=0&&(x[Ue]=null,g[Ue].disconnect(Ae))}for(let de=0;de<ee.added.length;de++){const Ae=ee.added[de];let Ue=x.indexOf(Ae);if(Ue===-1){for(let Ne=0;Ne<g.length;Ne++)if(Ne>=x.length){x.push(Ae),Ue=Ne;break}else if(x[Ne]===null){x[Ne]=Ae,Ue=Ne;break}if(Ue===-1)break}const Ge=g[Ue];Ge&&Ge.connect(Ae)}}const Q=new W,ce=new W;function V(ee,de,Ae){Q.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(Ae.matrixWorld);const Ue=Q.distanceTo(ce),Ge=de.projectionMatrix.elements,Ne=Ae.projectionMatrix.elements,et=Ge[14]/(Ge[10]-1),He=Ge[14]/(Ge[10]+1),H=(Ge[9]+1)/Ge[5],dt=(Ge[9]-1)/Ge[5],Pe=(Ge[8]-1)/Ge[0],$e=(Ne[8]+1)/Ne[0],ze=et*Pe,vt=et*$e,Je=Ue/(-Pe+$e),A=Je*-Pe;de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(A),ee.translateZ(Je),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const w=et+Je,Y=He+Je,ve=ze-A,K=vt+(Ue-A),me=H*He/Y*w,Fe=dt*He/Y*w;ee.projectionMatrix.makePerspective(ve,K,me,Fe,w,Y),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function X(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;y.texture!==null&&(ee.near=y.depthNear,ee.far=y.depthFar),S.near=G.near=b.near=ee.near,S.far=G.far=b.far=ee.far,(R!==S.near||te!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,te=S.far,b.near=R,b.far=te,G.near=R,G.far=te,b.updateProjectionMatrix(),G.updateProjectionMatrix(),ee.updateProjectionMatrix());const de=ee.parent,Ae=S.cameras;X(S,de);for(let Ue=0;Ue<Ae.length;Ue++)X(Ae[Ue],de);Ae.length===2?V(S,b,G):S.projectionMatrix.copy(b.projectionMatrix),Z(ee,S,de)};function Z(ee,de,Ae){Ae===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(Ae.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ef*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&v===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null};let ae=null;function he(ee,de){if(d=de.getViewerPose(c||o),_=de,d!==null){const Ae=d.views;v!==null&&(e.setRenderTargetFramebuffer(m,v.framebuffer),e.setRenderTarget(m));let Ue=!1;Ae.length!==S.cameras.length&&(S.cameras.length=0,Ue=!0);for(let Ne=0;Ne<Ae.length;Ne++){const et=Ae[Ne];let He=null;if(v!==null)He=v.getViewport(et);else{const dt=f.getViewSubImage(h,et);He=dt.viewport,Ne===0&&(e.setRenderTargetTextures(m,dt.colorTexture,h.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(m))}let H=re[Ne];H===void 0&&(H=new Vn,H.layers.enable(Ne),H.viewport=new Zt,re[Ne]=H),H.matrix.fromArray(et.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(et.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(He.x,He.y,He.width,He.height),Ne===0&&(S.matrix.copy(H.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ue===!0&&S.cameras.push(H)}const Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){const Ne=f.getDepthInformation(Ae[0]);Ne&&Ne.isValid&&Ne.texture&&y.init(e,Ne,r.renderState)}}for(let Ae=0;Ae<g.length;Ae++){const Ue=x[Ae],Ge=g[Ae];Ue!==null&&Ge!==void 0&&Ge.update(Ue,de,c||o)}y.render(e,S),ae&&ae(ee,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Ve=new u_;Ve.setAnimationLoop(he),this.setAnimationLoop=function(ee){ae=ee},this.dispose=function(){}}}function Ab(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,a_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,m,g,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&v(p,u,x)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,m,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Pn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Pn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const m=e.get(u).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,m,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*m,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function v(p,u,m){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const m=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,g){const x=g.program;i.uniformBlockBinding(m,x)}function c(m,g){let x=r[m.id];x===void 0&&(_(m),x=d(m),r[m.id]=x,m.addEventListener("dispose",p));const L=g.program;i.updateUBOMapping(m,L);const C=e.render.frame;s[m.id]!==C&&(h(m),s[m.id]=C)}function d(m){const g=f();m.__bindingPointIndex=g;const x=t.createBuffer(),L=m.__size,C=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const g=r[m.id],x=m.uniforms,L=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,b=x.length;C<b;C++){const G=Array.isArray(x[C])?x[C]:[x[C]];for(let re=0,S=G.length;re<S;re++){const R=G[re];if(v(R,C,re,L)===!0){const te=R.__offset,le=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let ne=0;ne<le.length;ne++){const Q=le[ne],ce=y(Q);typeof Q=="number"||typeof Q=="boolean"?(R.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,te+z,R.__data)):Q.isMatrix3?(R.__data[0]=Q.elements[0],R.__data[1]=Q.elements[1],R.__data[2]=Q.elements[2],R.__data[3]=0,R.__data[4]=Q.elements[3],R.__data[5]=Q.elements[4],R.__data[6]=Q.elements[5],R.__data[7]=0,R.__data[8]=Q.elements[6],R.__data[9]=Q.elements[7],R.__data[10]=Q.elements[8],R.__data[11]=0):(Q.toArray(R.__data,z),z+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,te,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(m,g,x,L){const C=m.value,b=g+"_"+x;if(L[b]===void 0)return typeof C=="number"||typeof C=="boolean"?L[b]=C:L[b]=C.clone(),!0;{const G=L[b];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return L[b]=C,!0}else if(G.equals(C)===!1)return G.copy(C),!0}return!1}function _(m){const g=m.uniforms;let x=0;const L=16;for(let b=0,G=g.length;b<G;b++){const re=Array.isArray(g[b])?g[b]:[g[b]];for(let S=0,R=re.length;S<R;S++){const te=re[S],le=Array.isArray(te.value)?te.value:[te.value];for(let z=0,ne=le.length;z<ne;z++){const Q=le[z],ce=y(Q),V=x%L;V!==0&&L-V<ce.boundary&&(x+=L-V),te.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=x,x+=ce.storage}}}const C=x%L;return C>0&&(x+=L-C),m.__size=x,m.__cache={},this}function y(m){const g={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(g.boundary=4,g.storage=4):m.isVector2?(g.boundary=8,g.storage=8):m.isVector3||m.isColor?(g.boundary=16,g.storage=12):m.isVector4?(g.boundary=16,g.storage=16):m.isMatrix3?(g.boundary=48,g.storage=48):m.isMatrix4?(g.boundary=64,g.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),g}function p(m){const g=m.target;g.removeEventListener("dispose",p);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class __{constructor(e={}){const{canvas:n=xE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const v=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const u=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this._useLegacyLights=!1,this.toneMapping=pr,this.toneMappingExposure=1;const g=this;let x=!1,L=0,C=0,b=null,G=-1,re=null;const S=new Zt,R=new Zt;let te=null;const le=new nt(0);let z=0,ne=n.width,Q=n.height,ce=1,V=null,X=null;const Z=new Zt(0,0,ne,Q),ae=new Zt(0,0,ne,Q);let he=!1;const Ve=new ah;let ee=!1,de=!1,Ae=null;const Ue=new Ot,Ge=new st,Ne=new W,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return b===null?ce:1}let H=i;function dt(T,B){for(let q=0;q<T.length;q++){const J=T[q],j=n.getContext(J,B);if(j!==null)return j}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rh}`),n.addEventListener("webglcontextlost",qe,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",pe,!1),H===null){const B=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&B.shift(),H=dt(B,T),H===null)throw dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pe,$e,ze,vt,Je,A,w,Y,ve,K,me,Fe,Ce,Le,Ye,Qe,fe,gt,Ze,je,Oe,Ie,Ke,ut;function at(){Pe=new D1(H),$e=new C1(H,Pe,e),Pe.init($e),Ie=new yb(H,Pe,$e),ze=new vb(H,Pe,$e),vt=new O1(H),Je=new ib,A=new _b(H,Pe,ze,Je,$e,Ie,vt),w=new P1(g),Y=new I1(g),ve=new jE(H,$e),Ke=new A1(H,Pe,ve,$e),K=new U1(H,ve,vt,Ke),me=new H1(H,K,ve,vt),Ze=new B1(H,$e,A),Qe=new R1(Je),Fe=new nb(g,w,Y,Pe,$e,Ke,Qe),Ce=new Ab(g,Je),Le=new sb,Ye=new db(Pe,$e),gt=new T1(g,w,Y,ze,me,h,l),fe=new gb(g,me,$e),ut=new bb(H,vt,$e,ze),je=new b1(H,Pe,vt,$e),Oe=new F1(H,Pe,vt,$e),vt.programs=Fe.programs,g.capabilities=$e,g.extensions=Pe,g.properties=Je,g.renderLists=Le,g.shadowMap=fe,g.state=ze,g.info=vt}at();const tt=new Tb(g,H);this.xr=tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=Pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(T){T!==void 0&&(ce=T,this.setSize(ne,Q,!1))},this.getSize=function(T){return T.set(ne,Q)},this.setSize=function(T,B,q=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=T,Q=B,n.width=Math.floor(T*ce),n.height=Math.floor(B*ce),q===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(ne*ce,Q*ce).floor()},this.setDrawingBufferSize=function(T,B,q){ne=T,Q=B,ce=q,n.width=Math.floor(T*q),n.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,B,q,J){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,B,q,J),ze.viewport(S.copy(Z).multiplyScalar(ce).floor())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,B,q,J){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,B,q,J),ze.scissor(R.copy(ae).multiplyScalar(ce).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(T){ze.setScissorTest(he=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){X=T},this.getClearColor=function(T){return T.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(T=!0,B=!0,q=!0){let J=0;if(T){let j=!1;if(b!==null){const E=b.texture.format;j=E===X0||E===j0||E===W0}if(j){const E=b.texture.type,D=E===mr||E===ir||E===sh||E===Hr||E===G0||E===V0,O=gt.getClearColor(),U=gt.getClearAlpha(),$=O.r,k=O.g,N=O.b;D?(v[0]=$,v[1]=k,v[2]=N,v[3]=U,H.clearBufferuiv(H.COLOR,0,v)):(_[0]=$,_[1]=k,_[2]=N,_[3]=U,H.clearBufferiv(H.COLOR,0,_))}else J|=H.COLOR_BUFFER_BIT}B&&(J|=H.DEPTH_BUFFER_BIT),q&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",qe,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),Le.dispose(),Ye.dispose(),Je.dispose(),w.dispose(),Y.dispose(),me.dispose(),Ke.dispose(),ut.dispose(),Fe.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",oe),tt.removeEventListener("sessionend",ue),Ae&&(Ae.dispose(),Ae=null),we.stop()};function qe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=vt.autoReset,B=fe.enabled,q=fe.autoUpdate,J=fe.needsUpdate,j=fe.type;at(),vt.autoReset=T,fe.enabled=B,fe.autoUpdate=q,fe.needsUpdate=J,fe.type=j}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xe(T){const B=T.target;B.removeEventListener("dispose",xe),Ee(B)}function Ee(T){Be(T),Je.remove(T)}function Be(T){const B=Je.get(T).programs;B!==void 0&&(B.forEach(function(q){Fe.releaseProgram(q)}),T.isShaderMaterial&&Fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,J,j,E){B===null&&(B=et);const D=j.isMesh&&j.matrixWorld.determinant()<0,O=Yt(T,B,q,J,j);ze.setMaterial(J,D);let U=q.index,$=1;if(J.wireframe===!0){if(U=K.getWireframeAttribute(q),U===void 0)return;$=2}const k=q.drawRange,N=q.attributes.position;let I=k.start*$,Se=(k.start+k.count)*$;E!==null&&(I=Math.max(I,E.start*$),Se=Math.min(Se,(E.start+E.count)*$)),U!==null?(I=Math.max(I,0),Se=Math.min(Se,U.count)):N!=null&&(I=Math.max(I,0),Se=Math.min(Se,N.count));const ye=Se-I;if(ye<0||ye===1/0)return;Ke.setup(j,J,O,q,U);let Me,ge=je;if(U!==null&&(Me=ve.get(U),ge=Oe,ge.setIndex(Me)),j.isMesh)J.wireframe===!0?(ze.setLineWidth(J.wireframeLinewidth*He()),ge.setMode(H.LINES)):ge.setMode(H.TRIANGLES);else if(j.isLine){let Te=J.linewidth;Te===void 0&&(Te=1),ze.setLineWidth(Te*He()),j.isLineSegments?ge.setMode(H.LINES):j.isLineLoop?ge.setMode(H.LINE_LOOP):ge.setMode(H.LINE_STRIP)}else j.isPoints?ge.setMode(H.POINTS):j.isSprite&&ge.setMode(H.TRIANGLES);if(j.isBatchedMesh)ge.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)ge.renderInstances(I,ye,j.count);else if(q.isInstancedBufferGeometry){const Te=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ft=Math.min(q.instanceCount,Te);ge.renderInstances(I,ye,ft)}else ge.render(I,ye)};function ie(T,B,q){T.transparent===!0&&T.side===si&&T.forceSinglePass===!1?(T.side=Pn,T.needsUpdate=!0,it(T,B,q),T.side=yr,T.needsUpdate=!0,it(T,B,q),T.side=si):it(T,B,q)}this.compile=function(T,B,q=null){q===null&&(q=T),p=Ye.get(q),p.init(),m.push(p),q.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),T!==q&&T.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(g._useLegacyLights);const J=new Set;return T.traverse(function(j){const E=j.material;if(E)if(Array.isArray(E))for(let D=0;D<E.length;D++){const O=E[D];ie(O,q,j),J.add(O)}else ie(E,q,j),J.add(E)}),m.pop(),p=null,J},this.compileAsync=function(T,B,q=null){const J=this.compile(T,B,q);return new Promise(j=>{function E(){if(J.forEach(function(D){Je.get(D).currentProgram.isReady()&&J.delete(D)}),J.size===0){j(T);return}setTimeout(E,10)}Pe.get("KHR_parallel_shader_compile")!==null?E():setTimeout(E,10)})};let se=null;function Re(T){se&&se(T)}function oe(){we.stop()}function ue(){we.start()}const we=new u_;we.setAnimationLoop(Re),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(T){se=T,tt.setAnimationLoop(T),T===null?we.stop():we.start()},tt.addEventListener("sessionstart",oe),tt.addEventListener("sessionend",ue),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(B),B=tt.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,B,b),p=Ye.get(T,m.length),p.init(),m.push(p),Ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ve.setFromProjectionMatrix(Ue),de=this.localClippingEnabled,ee=Qe.init(this.clippingPlanes,de),y=Le.get(T,u.length),y.init(),u.push(y),We(T,B,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(V,X),this.info.render.frame++,ee===!0&&Qe.beginShadows();const q=p.state.shadowsArray;if(fe.render(q,T,B),ee===!0&&Qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1)&&gt.render(y,T),p.setupLights(g._useLegacyLights),B.isArrayCamera){const J=B.cameras;for(let j=0,E=J.length;j<E;j++){const D=J[j];ke(y,T,D,D.viewport)}}else ke(y,T,B);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(g,T,B),Ke.resetDefaultState(),G=-1,re=null,m.pop(),m.length>0?p=m[m.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function We(T,B,q,J){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){J&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);const D=me.update(T),O=T.material;O.visible&&y.push(T,D,O,q,Ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){const D=me.update(T),O=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(D.boundingSphere===null&&D.computeBoundingSphere(),Ne.copy(D.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(O)){const U=D.groups;for(let $=0,k=U.length;$<k;$++){const N=U[$],I=O[N.materialIndex];I&&I.visible&&y.push(T,D,I,q,Ne.z,N)}}else O.visible&&y.push(T,D,O,q,Ne.z,null)}}const E=T.children;for(let D=0,O=E.length;D<O;D++)We(E[D],B,q,J)}function ke(T,B,q,J){const j=T.opaque,E=T.transmissive,D=T.transparent;p.setupLightsView(q),ee===!0&&Qe.setGlobalState(g.clippingPlanes,q),E.length>0&&bt(j,E,B,q),J&&ze.viewport(S.copy(J)),j.length>0&&lt(j,B,q),E.length>0&&lt(E,B,q),D.length>0&&lt(D,B,q),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function bt(T,B,q,J){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const E=$e.isWebGL2;Ae===null&&(Ae=new Kr(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?la:mr,minFilter:kr,samples:E?4:0})),g.getDrawingBufferSize(Ge),E?Ae.setSize(Ge.x,Ge.y):Ae.setSize(tf(Ge.x),tf(Ge.y));const D=g.getRenderTarget();g.setRenderTarget(Ae),g.getClearColor(le),z=g.getClearAlpha(),z<1&&g.setClearColor(16777215,.5),g.clear();const O=g.toneMapping;g.toneMapping=pr,lt(T,q,J),A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae);let U=!1;for(let $=0,k=B.length;$<k;$++){const N=B[$],I=N.object,Se=N.geometry,ye=N.material,Me=N.group;if(ye.side===si&&I.layers.test(J.layers)){const ge=ye.side;ye.side=Pn,ye.needsUpdate=!0,ht(I,q,J,Se,ye,Me),ye.side=ge,ye.needsUpdate=!0,U=!0}}U===!0&&(A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae)),g.setRenderTarget(D),g.setClearColor(le,z),g.toneMapping=O}function lt(T,B,q){const J=B.isScene===!0?B.overrideMaterial:null;for(let j=0,E=T.length;j<E;j++){const D=T[j],O=D.object,U=D.geometry,$=J===null?D.material:J,k=D.group;O.layers.test(q.layers)&&ht(O,B,q,U,$,k)}}function ht(T,B,q,J,j,E){T.onBeforeRender(g,B,q,J,j,E),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(g,B,q,J,T,E),j.transparent===!0&&j.side===si&&j.forceSinglePass===!1?(j.side=Pn,j.needsUpdate=!0,g.renderBufferDirect(q,B,J,j,T,E),j.side=yr,j.needsUpdate=!0,g.renderBufferDirect(q,B,J,j,T,E),j.side=si):g.renderBufferDirect(q,B,J,j,T,E),T.onAfterRender(g,B,q,J,j,E)}function it(T,B,q){B.isScene!==!0&&(B=et);const J=Je.get(T),j=p.state.lights,E=p.state.shadowsArray,D=j.state.version,O=Fe.getParameters(T,j.state,E,B,q),U=Fe.getProgramCacheKey(O);let $=J.programs;J.environment=T.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(T.isMeshStandardMaterial?Y:w).get(T.envMap||J.environment),$===void 0&&(T.addEventListener("dispose",xe),$=new Map,J.programs=$);let k=$.get(U);if(k!==void 0){if(J.currentProgram===k&&J.lightsStateVersion===D)return Dt(T,O),k}else O.uniforms=Fe.getUniforms(T),T.onBuild(q,O,g),T.onBeforeCompile(O,g),k=Fe.acquireProgram(O,U),$.set(U,k),J.uniforms=O.uniforms;const N=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(N.clippingPlanes=Qe.uniform),Dt(T,O),J.needsLights=pn(T),J.lightsStateVersion=D,J.needsLights&&(N.ambientLightColor.value=j.state.ambient,N.lightProbe.value=j.state.probe,N.directionalLights.value=j.state.directional,N.directionalLightShadows.value=j.state.directionalShadow,N.spotLights.value=j.state.spot,N.spotLightShadows.value=j.state.spotShadow,N.rectAreaLights.value=j.state.rectArea,N.ltc_1.value=j.state.rectAreaLTC1,N.ltc_2.value=j.state.rectAreaLTC2,N.pointLights.value=j.state.point,N.pointLightShadows.value=j.state.pointShadow,N.hemisphereLights.value=j.state.hemi,N.directionalShadowMap.value=j.state.directionalShadowMap,N.directionalShadowMatrix.value=j.state.directionalShadowMatrix,N.spotShadowMap.value=j.state.spotShadowMap,N.spotLightMatrix.value=j.state.spotLightMatrix,N.spotLightMap.value=j.state.spotLightMap,N.pointShadowMap.value=j.state.pointShadowMap,N.pointShadowMatrix.value=j.state.pointShadowMatrix),J.currentProgram=k,J.uniformsList=null,k}function Ct(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=wl.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Dt(T,B){const q=Je.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Yt(T,B,q,J,j){B.isScene!==!0&&(B=et),A.resetTextureUnits();const E=B.fog,D=J.isMeshStandardMaterial?B.environment:null,O=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Oi,U=(J.isMeshStandardMaterial?Y:w).get(J.envMap||D),$=J.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,k=!!q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),N=!!q.morphAttributes.position,I=!!q.morphAttributes.normal,Se=!!q.morphAttributes.color;let ye=pr;J.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ye=g.toneMapping);const Me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ge=Me!==void 0?Me.length:0,Te=Je.get(J),ft=p.state.lights;if(ee===!0&&(de===!0||T!==re)){const zn=T===re&&J.id===G;Qe.setState(J,T,zn)}let Xe=!1;J.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ft.state.version||Te.outputColorSpace!==O||j.isBatchedMesh&&Te.batching===!1||!j.isBatchedMesh&&Te.batching===!0||j.isInstancedMesh&&Te.instancing===!1||!j.isInstancedMesh&&Te.instancing===!0||j.isSkinnedMesh&&Te.skinning===!1||!j.isSkinnedMesh&&Te.skinning===!0||j.isInstancedMesh&&Te.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Te.instancingColor===!1&&j.instanceColor!==null||Te.envMap!==U||J.fog===!0&&Te.fog!==E||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Qe.numPlanes||Te.numIntersection!==Qe.numIntersection)||Te.vertexAlphas!==$||Te.vertexTangents!==k||Te.morphTargets!==N||Te.morphNormals!==I||Te.morphColors!==Se||Te.toneMapping!==ye||$e.isWebGL2===!0&&Te.morphTargetsCount!==ge)&&(Xe=!0):(Xe=!0,Te.__version=J.version);let pt=Te.currentProgram;Xe===!0&&(pt=it(J,B,j));let St=!1,Zn=!1,uo=!1;const zt=pt.getUniforms(),wr=Te.uniforms;if(ze.useProgram(pt.program)&&(St=!0,Zn=!0,uo=!0),J.id!==G&&(G=J.id,Zn=!0),St||re!==T){zt.setValue(H,"projectionMatrix",T.projectionMatrix),zt.setValue(H,"viewMatrix",T.matrixWorldInverse);const zn=zt.map.cameraPosition;zn!==void 0&&zn.setValue(H,Ne.setFromMatrixPosition(T.matrixWorld)),$e.logarithmicDepthBuffer&&zt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&zt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),re!==T&&(re=T,Zn=!0,uo=!0)}if(j.isSkinnedMesh){zt.setOptional(H,j,"bindMatrix"),zt.setOptional(H,j,"bindMatrixInverse");const zn=j.skeleton;zn&&($e.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),zt.setValue(H,"boneTexture",zn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(zt.setOptional(H,j,"batchingTexture"),zt.setValue(H,"batchingTexture",j._matricesTexture,A));const Rc=q.morphAttributes;if((Rc.position!==void 0||Rc.normal!==void 0||Rc.color!==void 0&&$e.isWebGL2===!0)&&Ze.update(j,q,pt),(Zn||Te.receiveShadow!==j.receiveShadow)&&(Te.receiveShadow=j.receiveShadow,zt.setValue(H,"receiveShadow",j.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(wr.envMap.value=U,wr.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1),Zn&&(zt.setValue(H,"toneMappingExposure",g.toneMappingExposure),Te.needsLights&&Rt(wr,uo),E&&J.fog===!0&&Ce.refreshFogUniforms(wr,E),Ce.refreshMaterialUniforms(wr,J,ce,Q,Ae),wl.upload(H,Ct(Te),wr,A)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(wl.upload(H,Ct(Te),wr,A),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&zt.setValue(H,"center",j.center),zt.setValue(H,"modelViewMatrix",j.modelViewMatrix),zt.setValue(H,"normalMatrix",j.normalMatrix),zt.setValue(H,"modelMatrix",j.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const zn=J.uniformsGroups;for(let Pc=0,x_=zn.length;Pc<x_;Pc++)if($e.isWebGL2){const dh=zn[Pc];ut.update(dh,pt),ut.bind(dh,pt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pt}function Rt(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function pn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,B,q){Je.get(T.texture).__webglTexture=B,Je.get(T.depthTexture).__webglTexture=q;const J=Je.get(T);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=q===void 0,J.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const q=Je.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){b=T,L=B,C=q;let J=!0,j=null,E=!1,D=!1;if(T){const U=Je.get(T);U.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(H.FRAMEBUFFER,null),J=!1):U.__webglFramebuffer===void 0?A.setupRenderTarget(T):U.__hasExternalTextures&&A.rebindTextures(T,Je.get(T.texture).__webglTexture,Je.get(T.depthTexture).__webglTexture);const $=T.texture;($.isData3DTexture||$.isDataArrayTexture||$.isCompressedArrayTexture)&&(D=!0);const k=Je.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(k[B])?j=k[B][q]:j=k[B],E=!0):$e.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?j=Je.get(T).__webglMultisampledFramebuffer:Array.isArray(k)?j=k[q]:j=k,S.copy(T.viewport),R.copy(T.scissor),te=T.scissorTest}else S.copy(Z).multiplyScalar(ce).floor(),R.copy(ae).multiplyScalar(ce).floor(),te=he;if(ze.bindFramebuffer(H.FRAMEBUFFER,j)&&$e.drawBuffers&&J&&ze.drawBuffers(T,j),ze.viewport(S),ze.scissor(R),ze.setScissorTest(te),E){const U=Je.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,U.__webglTexture,q)}else if(D){const U=Je.get(T.texture),$=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,U.__webglTexture,q||0,$)}G=-1},this.readRenderTargetPixels=function(T,B,q,J,j,E,D){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O=Je.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&D!==void 0&&(O=O[D]),O){ze.bindFramebuffer(H.FRAMEBUFFER,O);try{const U=T.texture,$=U.format,k=U.type;if($!==ai&&Ie.convert($)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const N=k===la&&(Pe.has("EXT_color_buffer_half_float")||$e.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(k!==mr&&Ie.convert(k)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(k===Ci&&($e.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!N){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-J&&q>=0&&q<=T.height-j&&H.readPixels(B,q,J,j,Ie.convert($),Ie.convert(k),E)}finally{const U=b!==null?Je.get(b).__webglFramebuffer:null;ze.bindFramebuffer(H.FRAMEBUFFER,U)}}},this.copyFramebufferToTexture=function(T,B,q=0){const J=Math.pow(2,-q),j=Math.floor(B.image.width*J),E=Math.floor(B.image.height*J);A.setTexture2D(B,0),H.copyTexSubImage2D(H.TEXTURE_2D,q,0,0,T.x,T.y,j,E),ze.unbindTexture()},this.copyTextureToTexture=function(T,B,q,J=0){const j=B.image.width,E=B.image.height,D=Ie.convert(q.format),O=Ie.convert(q.type);A.setTexture2D(q,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,J,T.x,T.y,j,E,D,O,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,J,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,D,B.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,J,T.x,T.y,D,O,B.image),J===0&&q.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q,J,j=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const E=T.max.x-T.min.x+1,D=T.max.y-T.min.y+1,O=T.max.z-T.min.z+1,U=Ie.convert(J.format),$=Ie.convert(J.type);let k;if(J.isData3DTexture)A.setTexture3D(J,0),k=H.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)A.setTexture2DArray(J,0),k=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,J.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,J.unpackAlignment);const N=H.getParameter(H.UNPACK_ROW_LENGTH),I=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Se=H.getParameter(H.UNPACK_SKIP_PIXELS),ye=H.getParameter(H.UNPACK_SKIP_ROWS),Me=H.getParameter(H.UNPACK_SKIP_IMAGES),ge=q.isCompressedTexture?q.mipmaps[j]:q.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ge.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ge.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),q.isDataTexture||q.isData3DTexture?H.texSubImage3D(k,j,B.x,B.y,B.z,E,D,O,U,$,ge.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(k,j,B.x,B.y,B.z,E,D,O,U,ge.data)):H.texSubImage3D(k,j,B.x,B.y,B.z,E,D,O,U,$,ge),H.pixelStorei(H.UNPACK_ROW_LENGTH,N),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,I),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Se),H.pixelStorei(H.UNPACK_SKIP_ROWS,ye),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Me),j===0&&J.generateMipmaps&&H.generateMipmap(k),ze.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ze.unbindTexture()},this.resetState=function(){L=0,C=0,b=null,ze.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===oh?"display-p3":"srgb",n.unpackColorSpace=xt.workingColorSpace===Ac?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tn?Vr:Y0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vr?tn:Oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Cb extends __{}Cb.prototype.isWebGL1Renderer=!0;class Rb extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Pb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Qd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Wr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new W;class ic{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=vi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=vi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=vi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=vi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array),s=yt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new nn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ic(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rf extends es{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _s;const To=new W,ys=new W,xs=new W,Ss=new st,Ao=new st,y_=new Ot,tl=new W,bo=new W,nl=new W,Qm=new st,zu=new st,Jm=new st;class eg extends jt{constructor(e=new rf){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new rn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Pb(n,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new ic(i,3,0,!1)),_s.setAttribute("uv",new ic(i,2,3,!1))}this.geometry=_s,this.material=e,this.center=new st(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),y_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-xs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;il(tl.set(-.5,-.5,0),xs,o,ys,r,s),il(bo.set(.5,-.5,0),xs,o,ys,r,s),il(nl.set(.5,.5,0),xs,o,ys,r,s),Qm.set(0,0),zu.set(1,0),Jm.set(1,1);let a=e.ray.intersectTriangle(tl,bo,nl,!1,To);if(a===null&&(il(bo.set(-.5,.5,0),xs,o,ys,r,s),zu.set(0,1),a=e.ray.intersectTriangle(tl,nl,bo,!1,To),a===null))return;const l=e.ray.origin.distanceTo(To);l<e.near||l>e.far||n.push({distance:l,point:To.clone(),uv:jn.getInterpolation(To,tl,bo,nl,Qm,zu,Jm,new st),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function il(t,e,n,i,r,s){Ss.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Ao.x=s*Ss.x-r*Ss.y,Ao.y=r*Ss.x+s*Ss.y):Ao.copy(Ss),t.copy(e),t.x+=Ao.x,t.y+=Ao.y,t.applyMatrix4(y_)}class hi extends es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tg=new W,ng=new W,ig=new Ot,Bu=new t_,rl=new bc;class sf extends jt{constructor(e=new rn,n=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)tg.fromBufferAttribute(n,r-1),ng.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=tg.distanceTo(ng);e.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;ig.copy(r).invert(),Bu.copy(e.ray).applyMatrix4(ig);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new W,d=new W,f=new W,h=new W,v=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),m=Math.min(_.count,o.start+o.count);for(let g=u,x=m-1;g<x;g+=v){const L=_.getX(g),C=_.getX(g+1);if(c.fromBufferAttribute(p,L),d.fromBufferAttribute(p,C),Bu.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(h);G<e.near||G>e.far||n.push({distance:G,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let g=u,x=m-1;g<x;g+=v){if(c.fromBufferAttribute(p,g),d.fromBufferAttribute(p,g+1),Bu.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||n.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const rg=new W,sg=new W;class Go extends sf{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)rg.fromBufferAttribute(n,r),sg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+rg.distanceTo(sg);e.setAttribute("lineDistance",new on(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class og extends xn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const sl=new W,ol=new W,Hu=new W,al=new jn;class Lb extends rn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(El*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],f=new Array(3),h={},v=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:p,c:u}=al;if(y.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),al.getNormal(Hu),f[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,f[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,f[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let m=0;m<3;m++){const g=(m+1)%3,x=f[m],L=f[g],C=al[d[m]],b=al[d[g]],G=`${x}_${L}`,re=`${L}_${x}`;re in h&&h[re]?(Hu.dot(h[re].normal)<=s&&(v.push(C.x,C.y,C.z),v.push(b.x,b.y,b.z)),h[re]=null):G in h||(h[G]={index0:c[m],index1:c[g],normal:Hu.clone()})}}for(const _ in h)if(h[_]){const{index0:y,index1:p}=h[_];sl.fromBufferAttribute(a,y),ol.fromBufferAttribute(a,p),v.push(sl.x,sl.y,sl.z),v.push(ol.x,ol.y,ol.z)}this.setAttribute("position",new on(v,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ch extends rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new W,h=new W,v=[],_=[],y=[],p=[];for(let u=0;u<=i;u++){const m=[],g=u/i;let x=0;u===0&&o===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let L=0;L<=n;L++){const C=L/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+g*a),f.y=e*Math.cos(o+g*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+g*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),p.push(C+x,1-g),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const g=d[u][m+1],x=d[u][m],L=d[u+1][m],C=d[u+1][m+1];(u!==0||o>0)&&v.push(g,x,C),(u!==i-1||l<Math.PI)&&v.push(x,L,C)}this.setIndex(v),this.setAttribute("position",new on(_,3)),this.setAttribute("normal",new on(y,3)),this.setAttribute("uv",new on(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ch(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Co extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q0,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uh extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Nb extends uh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Gu=new Ot,ag=new W,lg=new W;class Ib{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ag.setFromMatrixPosition(e.matrixWorld),n.position.copy(ag),lg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(lg),n.updateMatrixWorld(),Gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Db extends Ib{constructor(){super(new d_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cg extends uh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Db}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ub extends uh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fb extends Go{constructor(e=10,n=10,i=4473924,r=8947848){i=new nt(i),r=new nt(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,v=0,_=-a;h<=n;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=h===s?i:r;y.toArray(c,v),v+=3,y.toArray(c,v),v+=3,y.toArray(c,v),v+=3,y.toArray(c,v),v+=3}const d=new rn;d.setAttribute("position",new on(l,3)),d.setAttribute("color",new on(c,3));const f=new hi({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ob extends Go{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new rn;r.setAttribute("position",new on(n,3)),r.setAttribute("color",new on(i,3));const s=new hi({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new nt,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);function Vu(t,e,n){return t<e?e:t>n?n:t}function kb(t){const e=F.useRef(null),n=F.useRef([]),i=F.useRef(null),r=F.useRef(0),s=F.useRef(null),o=F.useRef({enabled:!0,scale:1,background:!0}),a=F.useRef(!0),l=F.useRef(null),c=F.useRef([]),d=F.useRef([]),f=F.useRef(null),h=F.useRef([]);return F.useEffect(()=>{n.current=t.players},[t.players]),F.useEffect(()=>{i.current=t.focusTarget},[t.focusTarget]),F.useEffect(()=>{r.current=t.focusNonce},[t.focusNonce]),F.useEffect(()=>{s.current=typeof t.followPlayerId=="number"?t.followPlayerId:null},[t.followPlayerId]),F.useEffect(()=>{o.current=t.nameTags||{enabled:!0,scale:1,background:!0}},[t.nameTags]),F.useEffect(()=>{a.current=t.showAimLines!==!1},[t.showAimLines]),F.useEffect(()=>{l.current=t.trail||null},[t.trail]),F.useEffect(()=>{c.current=Array.isArray(t.deathMarkers)?t.deathMarkers:[]},[t.deathMarkers]),F.useEffect(()=>{d.current=Array.isArray(t.pingMarkers)?t.pingMarkers:[]},[t.pingMarkers]),F.useEffect(()=>{f.current=t.terrain||null},[t.terrain]),F.useEffect(()=>{h.current=Array.isArray(t.towns)?t.towns:[]},[t.towns]),F.useEffect(()=>{const v=e.current;if(!v)return;const _=v,y=new __({canvas:_,antialias:!0});y.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),y.shadowMap.enabled=!0,y.shadowMap.type=k0;const p=new Rb;p.background=new nt(724761);const u=new Vn(70,1,.1,2e4);u.position.set(0,25,60);const m=new Ub(16777215,.28);p.add(m);const g=new Nb(9418495,724761,.35);p.add(g);const x=new cg(16777215,1.15);x.position.set(150,260,130),x.castShadow=!0,x.shadow.mapSize.width=2048,x.shadow.mapSize.height=2048,x.shadow.camera.near=10,x.shadow.camera.far=1200,x.shadow.camera.left=-420,x.shadow.camera.right=420,x.shadow.camera.top=420,x.shadow.camera.bottom=-420,x.shadow.bias=-15e-5,p.add(x);const L=new cg(16777215,.35);L.position.set(-180,160,-120),p.add(L);const C=new Fb(2e3,200,3293278,1910328);p.add(C);const b=new Ob(10);p.add(b);const G=new mi;p.add(G);const re=new mi;p.add(re);const S=new mi;p.add(S);const R=new mi;p.add(R);const te=new mi;p.add(te);const le=new mi;p.add(le);const z=new ch(.4,16,12),ne=new Co({color:16366681}),Q=new Co({color:16757322}),ce=new Co({color:9081766}),V=new hi({color:16366681,transparent:!0,opacity:.8}),X=new hi({color:16757322,transparent:!0,opacity:.8}),Z=new hi({color:9081766,transparent:!0,opacity:.7}),ae=new hi({color:16366681,transparent:!0,opacity:.35}),he=new hi({color:16730698,transparent:!0,opacity:.9}),Ve=new hi({color:16366681,transparent:!0,opacity:.95}),ee=new Co({vertexColors:!0,roughness:1,metalness:0,side:si,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),de=new hi({color:15134195,transparent:!0,opacity:.55}),Ae=new Map,Ue=new Map,Ge=new Map,Ne=new Map,et=new Map,He=new Map;let H=null,dt=null,Pe=null,$e="",ze=null;function vt(ie){const se=ie.material;se.map&&se.map.dispose(),se.dispose()}function Je(){const ie=h.current;if(ie===ze)return;ze=ie;for(const ue of Ge.values())vt(ue),te.remove(ue);if(Ge.clear(),!ie||ie.length===0)return;const se={scale:2.8,background:!1},Re=ue=>/^type:\s*\d+\s*$/i.test(ue.trim()),oe=ue=>{let we=(ue||"").trim();return we=we.replace(/^#AR-MapLocation_/i,""),we=we.replace(/_/g," ").trim(),we};for(const ue of ie){if(!ue||typeof ue.name!="string"||!ue.name)continue;const we=oe(ue.name);if(!we||Re(we))continue;const We=ue.pos;if(!We||!Number.isFinite(We.x)||!Number.isFinite(We.y)||!Number.isFinite(We.z))continue;const ke=w(we,se);Y(ke,se),ke.frustumCulled=!1,ke.material.depthWrite=!1,ke.position.set(We.x,We.y+5,We.z),te.add(ke);const bt=Math.round(We.x),lt=Math.round(We.z),ht=`${we}|${bt}|${lt}`;Ge.set(ht,ke)}}let A=null;function w(ie,se){const Re=document.createElement("canvas"),oe=Re.getContext("2d");if(!oe){const Rt=new og(document.createElement("canvas")),pn=new rf({map:Rt,transparent:!0});return new eg(pn)}const ue=16;oe.font=`600 ${ue}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;const we=10,We=6,ke=oe.measureText(ie),bt=Math.ceil(ke.width),lt=Math.max(8,bt+we*2),ht=ue+We*2,it=2;if(Re.width=lt*it,Re.height=ht*it,oe.setTransform(it,0,0,it,0,0),oe.clearRect(0,0,lt,ht),se.background){oe.fillStyle="rgba(0,0,0,0.55)";const Rt=6;oe.beginPath(),oe.moveTo(Rt,0),oe.lineTo(lt-Rt,0),oe.quadraticCurveTo(lt,0,lt,Rt),oe.lineTo(lt,ht-Rt),oe.quadraticCurveTo(lt,ht,lt-Rt,ht),oe.lineTo(Rt,ht),oe.quadraticCurveTo(0,ht,0,ht-Rt),oe.lineTo(0,Rt),oe.quadraticCurveTo(0,0,Rt,0),oe.closePath(),oe.fill()}oe.font=`600 ${ue}px system-ui, -apple-system, Segoe UI, Roboto, Arial`,oe.fillStyle="rgba(255,255,255,0.95)",oe.textBaseline="middle",oe.fillText(ie,we,Math.floor(ht/2));const Ct=new og(Re);Ct.needsUpdate=!0;const Dt=new rf({map:Ct,transparent:!0,depthTest:!1}),Yt=new eg(Dt);return Yt.userData={canvas:Re,texture:Ct,text:ie},Yt.center.set(.5,0),Yt}function Y(ie,se){const oe=ie.material.map,ue=oe&&oe.image;if(!ue||!ue.width||!ue.height){ie.scale.set(2.5*se.scale,.8*se.scale,1);return}const we=ue.width/ue.height,We=.85*se.scale,ke=We*we;ie.scale.set(ke,We,1)}function ve(ie,se,Re){const oe=ie.userData;if(oe&&oe.text===se){Y(ie,Re);return}const ue=ie.material,we=ue.map;we&&we.dispose(),ue.dispose();const We=w(se,Re);ie.material=We.material,ie.userData=We.userData,Y(ie,Re)}const K={rmbDown:!1,pointerLocked:!1,yaw:0,pitch:0,speed:20,keys:Object.create(null)};let me=0;function Fe(){const ie=_.clientWidth,se=_.clientHeight;y.setSize(ie,se,!1),u.aspect=ie/se,u.updateProjectionMatrix()}const Ce=new ResizeObserver(()=>Fe());Ce.observe(_),Fe();function Le(){const ie=new Set,se=o.current,Re=a.current,oe=n.current;for(const ue of oe){ie.add(ue.playerId);let we=Ae.get(ue.playerId);if(!we){we=new $n(z,ne),we.castShadow=!0,we.receiveShadow=!1,we.userData={playerId:ue.playerId},Ae.set(ue.playerId,we),G.add(we);const it=w(ue.label||String(ue.playerId),se);it.position.set(0,1.2,0),Y(it,se),Ue.set(ue.playerId,it),we.add(it);const Ct=new rn,Dt=new Float32Array(6);Ct.setAttribute("position",new nn(Dt,3));const Yt=new sf(Ct,V);Ne.set(ue.playerId,Yt),G.add(Yt)}const We=!!ue.isDead,ke=!!ue.inVehicle,bt=We?ce:ke?Q:ne;we.material!==bt&&(we.material=bt),we.position.set(ue.pos.x,ue.pos.y,ue.pos.z);const lt=Ue.get(ue.playerId);lt&&(lt.visible=se.enabled,se.enabled&&ve(lt,ue.label||String(ue.playerId),se));const ht=Ne.get(ue.playerId);if(ht){if(ht.visible=Re,!Re)continue;const it=We?Z:ke?X:V;ht.material!==it&&(ht.material=it);const Ct=ue.aimDir,Dt=ht.geometry.getAttribute("position");if(!Ct)Dt.setXYZ(0,ue.pos.x,ue.pos.y,ue.pos.z),Dt.setXYZ(1,ue.pos.x,ue.pos.y,ue.pos.z),Dt.needsUpdate=!0;else{const Yt=Ct.x,Rt=Ct.y,pn=Ct.z,T=Math.max(1e-4,Math.sqrt(Yt*Yt+Rt*Rt+pn*pn)),B=Yt/T,q=Rt/T,J=pn/T,j=6,E=ue.pos.x,D=ue.pos.y+.6,O=ue.pos.z,U=E+B*j,$=D+q*j,k=O+J*j;Dt.setXYZ(0,E,D,O),Dt.setXYZ(1,U,$,k),Dt.needsUpdate=!0}}}for(const[ue,we]of Ae){if(ie.has(ue))continue;G.remove(we),Ae.delete(ue);const We=Ue.get(ue);if(We){we.remove(We);const bt=We.material;bt.map&&bt.map.dispose(),bt.dispose(),Ue.delete(ue)}const ke=Ne.get(ue);ke&&(G.remove(ke),ke.geometry.dispose(),Ne.delete(ue))}}function Ye(){const ie=l.current;if(!ie||!Array.isArray(ie.points)||ie.points.length<2){A&&(re.remove(A),A.geometry.dispose(),A=null);return}const se=ie.points,Re=new Float32Array(se.length*3);for(let oe=0;oe<se.length;oe++)Re[oe*3+0]=se[oe].x,Re[oe*3+1]=se[oe].y+.15,Re[oe*3+2]=se[oe].z;if(A){const oe=A.geometry;oe.setAttribute("position",new nn(Re,3)),oe.getAttribute("position").needsUpdate=!0,oe.computeBoundingSphere()}else{const oe=new rn;oe.setAttribute("position",new nn(Re,3)),A=new sf(oe,ae),re.add(A)}}function Qe(){const ie=c.current,se=new Set;for(let Re=0;Re<ie.length;Re++){const oe=ie[Re],ue=`${Math.round(oe.x*10)}|${Math.round(oe.y*10)}|${Math.round(oe.z*10)}|${Re}`;se.add(ue);let we=et.get(ue);if(!we){const ke=new rn,bt=new Float32Array([-1.2,0,-1.2,1.2,0,1.2,-1.2,0,1.2,1.2,0,-1.2]);ke.setAttribute("position",new nn(bt,3)),we=new Go(ke,he),et.set(ue,we),S.add(we)}we.position.set(oe.x,oe.y+.1,oe.z)}for(const[Re,oe]of et)se.has(Re)||(S.remove(oe),oe.geometry.dispose(),et.delete(Re))}function fe(){const ie=d.current,se=new Set;for(let Re=0;Re<ie.length;Re++){const oe=ie[Re],ue=`${Math.round(oe.x*10)}|${Math.round(oe.y*10)}|${Math.round(oe.z*10)}|${Re}`;se.add(ue);let we=He.get(ue);if(!we){const ke=new rn,bt=new Float32Array([-1.8,0,-1.8,1.8,0,1.8,-1.8,0,1.8,1.8,0,-1.8]);ke.setAttribute("position",new nn(bt,3)),we=new Go(ke,Ve),He.set(ue,we),R.add(we)}we.position.set(oe.x,oe.y+.15,oe.z)}for(const[Re,oe]of He)se.has(Re)||(R.remove(oe),oe.geometry.dispose(),He.delete(Re))}function gt(){const ie=new Zr().setFromAxisAngle(new W(0,1,0),K.yaw),se=new Zr().setFromAxisAngle(new W(1,0,0),K.pitch);u.quaternion.copy(ie).multiply(se)}function Ze(ie){ie.preventDefault()}function je(ie){ie.button===2&&(K.rmbDown=!0,document.pointerLockElement!==_&&_.requestPointerLock())}function Oe(ie){ie.button===2&&(K.rmbDown=!1,document.pointerLockElement===_&&document.exitPointerLock())}function Ie(){if(K.pointerLocked=document.pointerLockElement===_,K.pointerLocked){const ie=new ma().setFromQuaternion(u.quaternion,"YXZ");K.yaw=ie.y,K.pitch=ie.x}}function Ke(ie){if(!K.pointerLocked)return;const se=ie.movementX||0,Re=ie.movementY||0;K.yaw-=se*.002,K.pitch-=Re*.002,K.pitch=Vu(K.pitch,-Math.PI/2+.01,Math.PI/2-.01)}function ut(ie){if(typeof s.current=="number"){const ue=ie.deltaY<0?.9:1.1,we=Ee.clone().multiplyScalar(ue),We=we.length(),ke=Vu(We,6,800);We>1e-4&&we.multiplyScalar(ke/We),Ee.copy(we);return}const Re=ie.deltaY<0?1:-1,oe=K.speed+Re*Math.max(1,K.speed*.1);K.speed=Vu(oe,1,400)}function at(ie){K.keys[ie.code]=!0}function tt(ie){K.keys[ie.code]=!1}function qe(){const ie=f.current;if(!ie){C.visible=!0,H&&(H.geometry.dispose(),le.remove(H),H=null,$e=""),dt&&(dt.geometry.dispose(),le.remove(dt),dt=null),Pe&&(Pe.geometry.dispose(),Pe.material.dispose(),le.remove(Pe),Pe=null);return}C.visible=!1;const se=`${ie.gridW}x${ie.gridH}|${ie.bbMin.x},${ie.bbMin.y},${ie.bbMin.z}|${ie.bbMax.x},${ie.bbMax.y},${ie.bbMax.z}|${ie.heights.length}`;if(se===$e)return;$e=se,H&&(H.geometry.dispose(),le.remove(H),H=null),dt&&(dt.geometry.dispose(),le.remove(dt),dt=null),Pe&&(Pe.geometry.dispose(),Pe.material.dispose(),le.remove(Pe),Pe=null);const Re=Math.max(2,Math.floor(ie.gridW)),oe=Math.max(2,Math.floor(ie.gridH)),ue=Re*oe;if(!Array.isArray(ie.heights)||ie.heights.length<ue)return;const we=ie.bbMax.x-ie.bbMin.x,We=ie.bbMax.z-ie.bbMin.z;if(!Number.isFinite(we)||!Number.isFinite(We)||we<=0||We<=0)return;const ke=new no(we,We,Re-1,oe-1);ke.rotateX(-Math.PI/2);const bt=ke.attributes.position;let lt=1/0,ht=-1/0;for(let j=0;j<ue;j++){const E=ie.heights[j];typeof E!="number"||!Number.isFinite(E)||(E<lt&&(lt=E),E>ht&&(ht=E))}(!Number.isFinite(lt)||!Number.isFinite(ht)||ht-lt<.001)&&(lt=0,ht=1);const it=ht-lt,Ct=new Float32Array(ue*3),Dt=new nt(988708),Yt=new nt(1910328),Rt=new nt(3293278),pn=0,T=new nt(735846);for(let j=0;j<oe;j++){const E=j,D=j;for(let O=0;O<Re;O++){const U=O+Re*E,$=O+Re*D,k=ie.heights[U];bt.setY($,k);let N=(k-lt)/it;Number.isFinite(N)||(N=0),N=Math.min(1,Math.max(0,N)),N=Math.pow(N,.65);const I=N<.5?Dt.clone().lerp(Yt,N/.5):Yt.clone().lerp(Rt,(N-.5)/.5);Number.isFinite(k)&&k<pn&&I.lerp(T,.28),Ct[$*3+0]=I.r,Ct[$*3+1]=I.g,Ct[$*3+2]=I.b}}bt.needsUpdate=!0,ke.setAttribute("color",new nn(Ct,3)),ke.computeVertexNormals(),H=new $n(ke,ee),H.receiveShadow=!0,H.castShadow=!1;const B=(ie.bbMin.x+ie.bbMax.x)/2,q=(ie.bbMin.z+ie.bbMax.z)/2;if(H.position.set(B,0,q),le.add(H),lt<pn&&ht>pn){const j=new no(we,We,1,1);j.rotateX(-Math.PI/2);const E=new Co({color:1732264,transparent:!0,opacity:.26,roughness:.15,metalness:0,side:si,depthWrite:!1});Pe=new $n(j,E),Pe.receiveShadow=!1,Pe.castShadow=!1,Pe.position.set(B,pn,q),le.add(Pe)}const J=new Lb(ke,18);dt=new Go(J,de),dt.position.copy(H.position),le.add(dt)}_.addEventListener("contextmenu",Ze),_.addEventListener("mousedown",je),window.addEventListener("mouseup",Oe),document.addEventListener("pointerlockchange",Ie),window.addEventListener("mousemove",Ke),_.addEventListener("wheel",ut,{passive:!0}),window.addEventListener("keydown",at),window.addEventListener("keyup",tt);let P=performance.now(),pe=0,xe=null;const Ee=new W(0,25,60);function Be(ie){const se=Math.min((ie-P)/1e3,.05);P=ie,Je(),Le(),Ye(),Qe(),fe(),qe();const Re=s.current;if(typeof Re=="number"){const We=n.current.find(ke=>ke&&ke.playerId===Re);if(We){const ke=We.pos;if(Re!==xe){Ee.set(u.position.x-ke.x,u.position.y-ke.y,u.position.z-ke.z);const lt=Ee.length();(!Number.isFinite(Ee.x)||!Number.isFinite(Ee.y)||!Number.isFinite(Ee.z)||!Number.isFinite(lt)||lt<1||lt>500)&&Ee.set(0,25,60),xe=Re}if(u.position.set(ke.x+Ee.x,ke.y+Ee.y,ke.z+Ee.z),u.lookAt(ke.x,ke.y+1.5,ke.z),K.rmbDown||K.pointerLocked){const lt=new W(0,0,-1).applyQuaternion(u.quaternion),ht=new W(1,0,0).applyQuaternion(u.quaternion),it=new W(0,1,0);K.keys.KeyW&&Ee.addScaledVector(lt,K.speed*se),K.keys.KeyS&&Ee.addScaledVector(lt,-K.speed*se),K.keys.KeyA&&Ee.addScaledVector(ht,-K.speed*se),K.keys.KeyD&&Ee.addScaledVector(ht,K.speed*se),K.keys.KeyQ&&Ee.addScaledVector(it,K.speed*se),K.keys.KeyZ&&Ee.addScaledVector(it,-K.speed*se)}u.position.set(ke.x+Ee.x,ke.y+Ee.y,ke.z+Ee.z),u.lookAt(ke.x,ke.y+1.5,ke.z)}}else xe=null;const oe=r.current;if(Re===null&&oe!==me){me=oe;const we=i.current;we&&(u.position.set(we.x,we.y+25,we.z+60),u.lookAt(we.x,we.y+1.5,we.z))}if(K.pointerLocked&&Re===null&&gt(),(K.rmbDown||K.pointerLocked)&&Re===null){const we=new W(0,0,-1).applyQuaternion(u.quaternion),We=new W(1,0,0).applyQuaternion(u.quaternion),ke=new W(0,1,0);K.keys.KeyW&&u.position.addScaledVector(we,K.speed*se),K.keys.KeyS&&u.position.addScaledVector(we,-K.speed*se),K.keys.KeyA&&u.position.addScaledVector(We,-K.speed*se),K.keys.KeyD&&u.position.addScaledVector(We,K.speed*se),K.keys.KeyQ&&u.position.addScaledVector(ke,K.speed*se),K.keys.KeyZ&&u.position.addScaledVector(ke,-K.speed*se)}y.render(p,u),pe=window.requestAnimationFrame(Be)}return pe=window.requestAnimationFrame(Be),()=>{window.cancelAnimationFrame(pe),_.removeEventListener("contextmenu",Ze),_.removeEventListener("mousedown",je),window.removeEventListener("mouseup",Oe),document.removeEventListener("pointerlockchange",Ie),window.removeEventListener("mousemove",Ke),_.removeEventListener("wheel",ut),window.removeEventListener("keydown",at),window.removeEventListener("keyup",tt),Ce.disconnect(),z.dispose(),ne.dispose(),Q.dispose(),ce.dispose(),V.dispose(),X.dispose(),Z.dispose(),ae.dispose(),he.dispose(),Ve.dispose(),ee.dispose(),de.dispose(),A&&(A.geometry.dispose(),A=null),H&&(H.geometry.dispose(),H=null),dt&&(dt.geometry.dispose(),dt=null);for(const ie of et.values())ie.geometry.dispose();for(const ie of He.values())ie.geometry.dispose();y.dispose()}},[]),M.jsx("div",{style:{width:"100%",height:"100%",minHeight:400,position:"relative"},children:M.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block",borderRadius:8}})})}function Jt(t){if(!t)return null;if(typeof t=="object"){if(Array.isArray(t)){if(t.length<3)return null;const r=t[0],s=t[1],o=t[2];return typeof r!="number"||typeof s!="number"||typeof o!="number"?null:{x:r,y:s,z:o}}const e=t.x,n=t.y,i=t.z;return typeof e!="number"||typeof n!="number"||typeof i!="number"?null:{x:e,y:n,z:i}}if(typeof t=="string"){const e=t.trim().split(/\s+/g);if(e.length<3)return null;const n=Number(e[0]),i=Number(e[1]),r=Number(e[2]);return!Number.isFinite(n)||!Number.isFinite(i)||!Number.isFinite(r)?null:{x:n,y:i,z:r}}return null}function Wu(t,e=30){return!t||typeof t.x!="number"||typeof t.z!="number"?!0:Math.abs(t.x)<=e&&Math.abs(t.z)<=e}function ju(t){if(!t)return null;const e=Jt(t.bbMin),n=Jt(t.bbMax),i=typeof t.gridW=="number"?t.gridW:0,r=typeof t.gridH=="number"?t.gridH:0,s=Array.isArray(t.heights)?t.heights.filter(o=>typeof o=="number"):[];return e&&n&&i>=2&&r>=2&&s.length>=i*r?{bbMin:e,bbMax:n,gridW:i,gridH:r,heights:s}:null}function Xu(t){if(!t)return null;const e=Array.isArray(t.descriptors)?t.descriptors:Array.isArray(t.towns)?t.towns:[];if(e.length===0)return null;const n=[];for(const i of e){if(!i)continue;const r=typeof i.name=="string"?i.name.trim():"",s=typeof i.type=="string"?i.type.trim():"",o=typeof i.baseType=="number"?i.baseType:null,a=r||s||(o!==null?`type:${o}`:"descriptor"),l=Jt(i.pos);l&&n.push({name:a,pos:l})}return n.length===0?null:n}function ug(t,e,n){if(!t||!t.bbMin||!t.bbMax||!Array.isArray(t.heights))return null;const i=Math.floor(t.gridW),r=Math.floor(t.gridH);if(i<2||r<2||t.heights.length<i*r)return null;const s=t.bbMin.x,o=t.bbMax.x,a=t.bbMin.z,l=t.bbMax.z,c=o-s,d=l-a;if(!Number.isFinite(c)||!Number.isFinite(d)||c<=0||d<=0)return null;const f=(e-s)/c,h=(n-a)/d;if(!Number.isFinite(f)||!Number.isFinite(h)||f<0||f>1||h<0||h>1)return null;const v=f*(i-1),_=h*(r-1),y=Math.floor(v),p=Math.floor(_),u=Math.min(i-1,y+1),m=Math.min(r-1,p+1),g=v-y,x=_-p,L=y+i*p,C=u+i*p,b=y+i*m,G=u+i*m,re=t.heights[L],S=t.heights[C],R=t.heights[b],te=t.heights[G];if(![re,S,R,te].every(ne=>typeof ne=="number"&&Number.isFinite(ne)))return null;const le=re*(1-g)+S*g,z=R*(1-g)+te*g;return le*(1-x)+z*x}function zb(t){const e=Hi();return F.useMemo(()=>{const i=new URLSearchParams(e.search).get(t);return i||null},[e.search,t])}function ll(t){const e=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,n=Math.floor(e/1e3),i=Math.floor(n/3600),r=Math.floor(n%3600/60),s=n%60,o=String(i).padStart(2,"0"),a=String(r).padStart(2,"0"),l=String(s).padStart(2,"0");return`${o}:${a}:${l}`}function $u(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function Bb(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function Hb(t,e){if(!Array.isArray(t)||t.length===0)return[];const n=new Map;for(const r of t){const s=e(r).trim();s&&n.set(s,(n.get(s)||0)+1)}const i=Array.from(n.entries()).map(([r,s])=>({name:r,count:s}));return i.sort((r,s)=>s.count-r.count||r.name.localeCompare(s.name)),i}function rc(t){const e=t.payload;return e&&typeof e.tsMs=="number"?e.tsMs:null}function cl(t){const e=t.payload;return`${t.receivedAt}|${e&&e.tsMs}|${e&&e.type}`}function dg(t,e,n){if(!Number.isFinite(e)||e<=0)return[];if(t.length<=e)return t;if(typeof n!="number"||!Number.isFinite(n))return t.slice(t.length-e);const i=rc(t[0]),r=rc(t[t.length-1]);if(typeof i!="number"||typeof r!="number")return t.slice(t.length-e);const s=Math.abs(n-i),o=Math.abs(r-n),a=t.length-e;return s>o?t.slice(a):t.slice(0,t.length-a)}function Gb(){const t=zb("serverId"),[e,n]=F.useState([]),[i,r]=F.useState(""),[s,o]=F.useState(null),[a,l]=F.useState(null),[c,d]=F.useState(null),[f,h]=F.useState(!1),[v,_]=F.useState(!0),[y,p]=F.useState({minTsMs:null,maxTsMs:null}),[u,m]=F.useState(null),[g,x]=F.useState(null),[L,C]=F.useState(null),[b,G]=F.useState([]),[re,S]=F.useState(""),[R,te]=F.useState(null),[le,z]=F.useState(null),[ne,Q]=F.useState(0),[ce,V]=F.useState(!0),[X,Z]=F.useState("players"),[ae,he]=F.useState(!1),[Ve,ee]=F.useState(!0),[de,Ae]=F.useState(null),[Ue,Ge]=F.useState(null),Ne=F.useRef(new Map),[et,He]=F.useState(!1),[H,dt]=F.useState(1),Pe=F.useRef(null),[$e,ze]=F.useState(!0),[vt,Je]=F.useState(1),[A,w]=F.useState(!0),[Y,ve]=F.useState(!0),[K,me]=F.useState(!0),[Fe,Ce]=F.useState(!0),[Le,Ye]=F.useState(!0),[Qe,fe]=F.useState(20),[gt,Ze]=F.useState([]),je=F.useRef(0),[Oe,Ie]=F.useState(()=>{try{const E=window.localStorage.getItem("replay.eventClickOffsetSeconds"),D=E!==null?Number(E):5;return Number.isFinite(D)?Math.max(0,Math.min(60,Math.floor(D))):5}catch{return 5}}),[Ke,ut]=F.useState(null),[at,tt]=F.useState(null),[qe,P]=F.useState([]),pe=F.useRef(null),xe=F.useRef(!1),Ee=F.useRef(!1),Be=F.useRef(!1),ie=F.useRef(new Map);F.useEffect(()=>{t&&t.length>0&&r(t)},[t]),F.useEffect(()=>{Pe.current=u},[u]),F.useEffect(()=>{try{window.localStorage.setItem("replay.eventClickOffsetSeconds",String(Oe))}catch{}},[Oe]),F.useEffect(()=>{function E(D){D.code==="KeyF"&&at!==null&&tt(null)}return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[at]),F.useEffect(()=>{let E=!1;async function D(){try{const O=await cM();if(E)return;n(O)}catch(O){if(E)return;const U=O instanceof Error?O.message:"Failed to load servers";d(U)}}return D(),()=>{E=!0}},[]),F.useEffect(()=>{let E=!1;async function D(){try{const U=await jd();if(E)return;o(U),l(null)}catch(U){if(E)return;const $=U instanceof Error?U.message:"Failed to load server status";l($)}}D();const O=window.setInterval(D,15e3);return()=>{E=!0,window.clearInterval(O)}},[]);const se=i.length>0?i:null;F.useEffect(()=>{x(null),C(null)},[se]),F.useEffect(()=>{if(!se)return;const E=se;let D=!1;async function O(){h(!0),d(null);try{const[U,$,k,N]=await Promise.all([Rp(E),Pp(E),ou(E).catch(()=>null),au(E).catch(()=>null)]);if(D)return;p({minTsMs:U.minTsMs,maxTsMs:U.maxTsMs}),G($);const I=ju(k);I&&x(I);const Se=Xu(N);if(Se&&C(Se),typeof U.maxTsMs=="number"){m(U.maxTsMs);const ye=await su({serverId:E,untilTsMs:U.maxTsMs,limit:5e3,tail:!0}).catch(()=>[]);if(!D){P(ye);let Me=null;for(const ge of ye){const Te=ge.payload;Te&&typeof Te.tsMs=="number"&&(Me===null||Te.tsMs>Me)&&(Me=Te.tsMs)}pe.current=Me!==null?Me:Math.max(0,U.maxTsMs-15e3)}}je.current=Date.now(),He(!1)}catch(U){if(D)return;const $=U instanceof Error?U.message:"Failed to load replay data";d($)}finally{D||h(!1)}}return O(),()=>{D=!0}},[se]),F.useEffect(()=>{if(!se||g||Ee.current||!qe.some(O=>{const U=O.payload;return U&&(U.type==="map"||U.type==="terrain")}))return;let D=!1;return Ee.current=!0,ou(se).then(O=>{if(D)return;const U=ju(O);U&&x(U)}).catch(()=>{}).finally(()=>{Ee.current=!1}),()=>{D=!0}},[qe,se,g]),F.useEffect(()=>{if(!se||L||Be.current||!qe.some(O=>{const U=O.payload;return U&&(U.type==="map"||U.type==="terrain"||U.type==="towns"||U.type==="descriptors")}))return;let D=!1;return Be.current=!0,au(se).then(O=>{if(D)return;const U=Xu(O);U&&C(U)}).catch(()=>{}).finally(()=>{Be.current=!1}),()=>{D=!0}},[qe,se,L]),F.useEffect(()=>{if(!se||v||!et||typeof y.maxTsMs!="number")return;let E=0,D=performance.now();function O(U){const $=Math.min(250,Math.max(0,U-D));D=U;const k=Pe.current;if(typeof k=="number"){const N=y.maxTsMs;let I=k+$*H;I>=N&&(I=N,He(!1)),Pe.current=I,m(I)}E=window.requestAnimationFrame(O)}return E=window.requestAnimationFrame(O),()=>window.cancelAnimationFrame(E)},[et,v,H,y.maxTsMs,se]),F.useEffect(()=>{if(!se)return;const E=se;let D=!1,O=null;async function U(){try{const $=await Pp(E);D||G($)}catch{}D||(O=window.setTimeout(U,v?1e3:2500))}return U(),()=>{D=!0,O!==null&&window.clearTimeout(O)}},[v,se]),F.useEffect(()=>{if(!se)return;const E=se;let D=!1,O=null;async function U(){try{const $=await Rp(E);if(D)return;const k=pe.current;typeof k=="number"&&typeof $.maxTsMs=="number"&&$.maxTsMs+1e3<k&&(pe.current=null,je.current=Date.now(),P([{receivedAt:Date.now(),payload:{type:"restart",tsMs:$.maxTsMs,event:{reason:"server_restart_or_history_cleared"}}}]),Ze([]),He(!1),Ee.current=!1,ou(E).then(N=>{if(D)return;const I=ju(N);I&&x(I)}).catch(()=>{}),Be.current=!1,au(E).then(N=>{if(D)return;const I=Xu(N);I&&C(I)}).catch(()=>{})),p({minTsMs:$.minTsMs,maxTsMs:$.maxTsMs}),v&&typeof $.maxTsMs=="number"&&m($.maxTsMs)}catch{}D||(O=window.setTimeout(U,v?500:1500))}return U(),()=>{D=!0,O!==null&&window.clearTimeout(O)}},[v,se]),F.useEffect(()=>{if(!se)return;const E=se;let D=!1,O=null;async function U(){const $=y.maxTsMs;if(typeof $!="number"){D||(O=window.setTimeout(U,1e3));return}const k=pe.current,N=typeof k=="number"?k+1:Math.max(0,$-15e3);try{let ye=N;const Me=[];let ge=typeof pe.current=="number"?pe.current:null;for(let Te=0;Te<5;Te++){const ft=await su({serverId:E,sinceTsMs:ye,untilTsMs:$,limit:5e3});Me.push(...ft);let Xe=null;for(const pt of ft){const St=rc(pt);St!==null&&((Xe===null||St>Xe)&&(Xe=St),(ge===null||St>ge)&&(ge=St))}if(ft.length<5e3||Xe===null||Xe>=$)break;ye=Xe+1}if(D)return;Me.length>0&&P(Te=>{const ft=Te.slice(-500),Xe=new Set;for(const St of ft)Xe.add(cl(St));const pt=Te.slice();for(const St of Me){const Zn=cl(St);Xe.has(Zn)||pt.push(St)}return dg(pt,25e4,Pe.current)}),typeof ge=="number"&&(pe.current=ge)}catch(I){if(!D){const Se=I instanceof Error?I.message:"Failed to fetch replay events";d(Se)}}D||(O=window.setTimeout(U,v?200:900))}return U(),()=>{D=!0,O!==null&&window.clearTimeout(O)}},[v,y.maxTsMs,se]);const Re=F.useMemo(()=>{let E=null,D=null;for(const O of qe){const U=O.payload,$=U&&typeof U.tsMs=="number"?U.tsMs:null;$!==null&&((E===null||$<E)&&(E=$),(D===null||$>D)&&(D=$))}return{minTsMs:E,maxTsMs:D}},[qe]);F.useEffect(()=>{if(!se)return;const E=se,D=u,O=Re.minTsMs,U=y.minTsMs;if(typeof D!="number"||typeof O!="number"||typeof U!="number"||O<=U+1||D>O+2e3||xe.current)return;xe.current=!0;const k=Math.max(0,Math.floor(O)-1);su({serverId:E,untilTsMs:k,limit:5e3,tail:!0}).then(N=>{N.length!==0&&P(I=>{const Se=I.slice(0,800),ye=new Set;for(const Te of Se)ye.add(cl(Te));const Me=[];for(const Te of N){const ft=cl(Te);ye.has(ft)||Me.push(Te)}const ge=Me.concat(I);return dg(ge,25e4,Pe.current)})}).catch(()=>{}).finally(()=>{xe.current=!1})},[u,Re.minTsMs,y.minTsMs,se]);const oe=F.useMemo(()=>{const E=[];for(const D of qe){const O=D.payload;!O||typeof O!="object"||O.type==="snapshot"&&typeof O.tsMs=="number"&&Array.isArray(O.players)&&E.push({tsMs:O.tsMs,players:O.players})}return E.sort((D,O)=>D.tsMs-O.tsMs),E},[qe]),ue=F.useMemo(()=>(E,D,O=6e4)=>{if(typeof E!="number"||E<0||typeof D!="number"||!Number.isFinite(D)||oe.length===0)return null;const U=D+Math.max(1e3,Math.min(5*60*1e3,Math.floor(O)));let $=0,k=oe.length-1,N=oe.length;for(;$<=k;){const I=$+k>>1;oe[I].tsMs>=D?(N=I,k=I-1):$=I+1}for(let I=N;I<oe.length;I++){const Se=oe[I];if(Se.tsMs>U)break;const ye=Se.players.find(ge=>ge&&typeof ge=="object"&&ge.playerId===E);if(!ye)continue;const Me=Jt(ye.pos);if(Me&&!Wu(Me,30))return Me}return null},[oe]),we=F.useMemo(()=>(E,D,O=6e4)=>{if(typeof E!="number"||E<0||typeof D!="number"||!Number.isFinite(D)||oe.length===0)return null;const U=D-Math.max(1e3,Math.min(5*60*1e3,Math.floor(O)));let $=0,k=oe.length-1,N=-1;for(;$<=k;){const I=$+k>>1;oe[I].tsMs<=D?(N=I,$=I+1):k=I-1}for(let I=N;I>=0;I--){const Se=oe[I];if(Se.tsMs<U)break;const ye=Se.players.find(ge=>ge&&typeof ge=="object"&&ge.playerId===E);if(!ye)continue;const Me=Jt(ye.pos);if(Me&&!Wu(Me,30))return Me}return null},[oe]),We=F.useMemo(()=>{const E=new Map;for(const D of qe){const O=D.payload;if(!O||typeof O!="object"||O.type!=="kill"&&O.type!=="death"||typeof O.tsMs!="number")continue;const U=O.event,$=U&&typeof U.victimPlayerId=="number"?U.victimPlayerId:null;if($===null)continue;const k=O.tsMs+3e4,N=E.get($)||0;k>N&&E.set($,k)}return E},[qe]),ke=F.useMemo(()=>({enabled:$e,scale:Math.min(2,Math.max(.5,vt)),background:A}),[A,vt,$e]),bt=F.useMemo(()=>{const E=u;if(typeof E!="number")return[];if(oe.length===0)return[];let D=0,O=oe.length-1,U=-1;for(;D<=O;){const I=D+O>>1;oe[I].tsMs<=E?(U=I,D=I+1):O=I-1}U<0&&(U=0);const $=oe[U],k=new Map;for(const I of b)k.set(I.playerId,I.name);const N=[];for(const I of $.players){if(!I||typeof I!="object")continue;const Se=I.playerId;if(typeof Se!="number")continue;const ye=Jt(I.pos);if(!ye)continue;const Me=!!I.inVehicle,ge=ug(g,ye.x,ye.z),ft=!Me&&typeof ge=="number"&&Number.isFinite(ge)&&typeof ye.y=="number"&&Number.isFinite(ye.y)&&Math.abs(ye.y-ge)<=3.5?{...ye,y:ge+.35}:ye,Xe=Jt(I.aimDir),pt=I.vehicle&&typeof I.vehicle.name=="string"?String(I.vehicle.name):"",St=$.tsMs,Zn=We.get(Se)||0,uo=typeof St=="number"?Zn>St:!1;let zt=k.get(Se)||String(Se);Y&&Me&&pt&&(zt=`${zt} (${pt})`),N.push({playerId:Se,label:zt,pos:ft,aimDir:Xe,inVehicle:Me,isDead:uo})}return N},[u,We,b,Y,oe,g]),lt=F.useMemo(()=>{if(!Le||R===null||typeof u!="number"||oe.length===0)return null;const E=Math.max(5e3,Math.min(6e4,Math.floor(Qe*1e3))),D=u-E,O=[];let U=null;for(const k of oe){if(k.tsMs<D)continue;if(k.tsMs>u)break;const N=k.players.find(ft=>ft&&typeof ft=="object"&&ft.playerId===R);if(!N)continue;const I=!!N.inVehicle,Se=N.entityId,ye=typeof Se=="string"&&Se.length>0?Se:null;ye&&U&&ye!==U&&(O.length=0),ye&&(U=ye);const Me=Jt(N.pos);if(!Me||Wu(Me,30))continue;const ge=ug(g,Me.x,Me.z),Te=!I&&typeof ge=="number"&&Number.isFinite(ge)&&typeof Me.y=="number"&&Number.isFinite(Me.y)&&Math.abs(Me.y-ge)<=3.5;O.push(Te?{...Me,y:ge}:Me)}if(O.length<2)return null;const $=200;if(O.length>$){const k=Math.ceil(O.length/$),N=[];for(let I=0;I<O.length;I+=k)N.push(O[I]);return{points:N}}return{points:O}},[u,Le,R,oe,g,Qe]),ht=F.useMemo(()=>{if(!Fe)return[];const E=u;if(typeof E!="number")return[];const D=[];for(const O of qe){const U=O.payload;if(!U||typeof U!="object"||U.type!=="kill"&&U.type!=="death"||typeof U.tsMs!="number"||E<U.tsMs||E>U.tsMs+5e3)continue;const $=U.event,k=$?Jt($.victimPos):null;if(k&&(D.push(k),D.length>=40))break}return D},[u,qe,Fe]),it=F.useMemo(()=>{const E=y.minTsMs,D=y.maxTsMs,O=u;return typeof E!="number"||typeof D!="number"||typeof O!="number"?{min:0,max:100,value:0,disabled:!0}:D<=E?{min:E,max:E+1,value:E,disabled:!1}:{min:E,max:D,value:Math.min(Math.max(O,E),D),disabled:!1}},[u,y.maxTsMs,y.minTsMs]),Ct=F.useMemo(()=>{let E=-1/0,D=0;for(const O of qe){if(!O||typeof O.receivedAt!="number")continue;const U=rc(O);U!==null&&U>E&&(E=U,D=O.receivedAt)}return!Number.isFinite(E)||E<0||!Number.isFinite(D)||D<=0?null:{tsMs:E,receivedAt:D}},[qe]),Dt=F.useMemo(()=>{if(!Ct)return null;const E=Ct;return D=>{const O=E.receivedAt+(D-E.tsMs);return Number.isFinite(O)?new Date(O).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}):""}},[Ct]),Yt=F.useMemo(()=>{if(at===null)return null;const E=b.find(D=>D.playerId===at);return E?E.name:String(at)},[at,b]);function Rt(E){const D=Math.max(0,Math.floor(Oe*1e3)),O=it.disabled?0:it.min,U=it.disabled?E:it.max,$=Math.min(U,Math.max(O,E-D));m($)}const pn=F.useMemo(()=>{const E=re.trim().toLowerCase(),D=Array.isArray(b)?b:[];return E?D.filter(O=>(O.name||"").toLowerCase().includes(E)||String(O.playerId).includes(E)):D},[re,b]),T=F.useMemo(()=>{if(R===null)return null;const E=u;if(typeof E!="number"||oe.length===0)return null;let D=0,O=oe.length-1,U=-1;for(;D<=O;){const N=D+O>>1;oe[N].tsMs<=E?(U=N,D=N+1):O=N-1}return U<0&&(U=0),oe[U].players.find(N=>N&&typeof N=="object"&&N.playerId===R)||null},[u,R,oe]),B=F.useMemo(()=>{const E=T,D=u;if(!E||typeof E!="object"||typeof D!="number")return E;const O=typeof E.playerId=="number"?E.playerId:null;if(O===null)return E;const U=12e3,$=ie.current.get(O)||{invTsMs:-1,hotbarTsMs:-1,weaponTsMs:-1},k=E.inventory;Array.isArray(k)&&($.inventory=k,$.invTsMs=D);const N=E.attachments;Array.isArray(N)&&($.attachments=N,$.hotbarTsMs=D);const I=E.weapon;I&&typeof I=="object"&&typeof I.name=="string"&&I.name.length>0&&($.weapon=I,$.weaponTsMs=D),ie.current.set(O,$);const Se=!Array.isArray(k),ye=!Array.isArray(N),Me=!I||!I.name,ge="inventory"in $&&D-$.invTsMs<=U&&Se,Te="attachments"in $&&D-$.hotbarTsMs<=U&&ye,ft=!!$.weapon&&D-$.weaponTsMs<=U&&Me;return{...E,inventory:ge?$.inventory:k,attachments:Te?$.attachments:N,weapon:ft?$.weapon:I}},[u,T]),q=F.useMemo(()=>{const E=[];for(const $ of qe){const k=$.payload;if(!k||typeof k!="object"||typeof k.tsMs!="number"||k.type==="snapshot"||k.type!=="kill"&&k.type!=="death"&&k.type!=="aiKill"&&k.type!=="join"&&k.type!=="disconnect"&&k.type!=="restart"&&k.type!=="gmPing")continue;const N=k.event;if(k.type==="kill"){const I=N&&typeof N.killerName=="string"?N.killerName:"Unknown",Se=N&&typeof N.victimName=="string"?N.victimName:"Unknown",ye=N&&typeof N.weaponName=="string"?N.weaponName:"",Me=N&&typeof N.distanceM=="number"?N.distanceM:null,ge=typeof Me=="number"&&Number.isFinite(Me)?`${Math.round(Me)}m`:"",Te=N?Jt(N.victimPos):null,ft=N&&typeof N.victimPlayerId=="number"?N.victimPlayerId:null,Xe=N&&typeof N.killerPlayerId=="number"?N.killerPlayerId:null,pt=[];ye&&pt.push(ye),ge&&pt.push(ge),E.push({tsMs:k.tsMs,type:"kill",title:`${I} → ${Se}`,subtitle:pt.join(" • "),focusPos:Te,focusPlayerId:ft,playerIds:[Xe,ft].filter(St=>typeof St=="number")})}else if(k.type==="death"){const I=N&&typeof N.victimPlayerId=="number"?N.victimPlayerId:null,Se=N&&typeof N.killerPlayerId=="number"?N.killerPlayerId:null;if(I!==null&&Se!==null&&Se>=0&&Se!==I)continue;const ye=N&&typeof N.victimName=="string"?N.victimName:"Unknown",Me=N&&typeof N.weaponName=="string"?N.weaponName:"",ge=N&&typeof N.distanceM=="number"?N.distanceM:null,Te=typeof ge=="number"&&Number.isFinite(ge)?`${Math.round(ge)}m`:"",ft=N?Jt(N.victimPos):null,Xe=[];Me&&Xe.push(Me),Te&&Xe.push(Te),E.push({tsMs:k.tsMs,type:"death",title:`${ye} died`,subtitle:Xe.join(" • "),focusPos:ft,focusPlayerId:I,playerIds:[I].filter(pt=>typeof pt=="number")})}else if(k.type==="aiKill"){const I=N&&typeof N.killerName=="string"?N.killerName:"Unknown",Se=N&&typeof N.victimName=="string"?N.victimName:"Unknown",ye=N&&typeof N.weaponName=="string"?N.weaponName:"",Me=N&&typeof N.distanceM=="number"?N.distanceM:null,ge=typeof Me=="number"&&Number.isFinite(Me)?`${Math.round(Me)}m`:"",Te=N?Jt(N.victimPos):null,ft=N&&typeof N.killerPlayerId=="number"?N.killerPlayerId:null,Xe=[];ye&&Xe.push(ye),ge&&Xe.push(ge),E.push({tsMs:k.tsMs,type:"aiKill",title:`${I} → AI: ${Se}`,subtitle:Xe.join(" • "),focusPos:Te,focusPlayerId:ft,playerIds:[ft].filter(pt=>typeof pt=="number")})}else if(k.type==="gmPing"){const I=N&&typeof N.by=="string"&&N.by.length>0?N.by:"",Se=N&&typeof N.title=="string"&&N.title.length>0?N.title:"event",ye=N?Jt(N.pos):null,Me=I?`(${I} sent a GM ping to ${Se})`:`GM ping to ${Se}`;E.push({tsMs:k.tsMs,type:"gmPing",title:Me,subtitle:"",focusPos:ye,focusPlayerId:null,playerIds:[]})}else{if(k.type==="restart"){E.push({tsMs:k.tsMs,type:"restart",title:"Server restarted",subtitle:"restart / history cleared",focusPos:null,focusPlayerId:null,playerIds:[]});continue}const I=N&&typeof N.name=="string"?N.name:String(N&&N.playerId?N.playerId:"player"),Se=N&&typeof N.playerId=="number"?N.playerId:null,ye=k.type==="join"&&typeof Se=="number"?ue(Se,k.tsMs,9e4):null,Me=k.type==="disconnect"&&typeof Se=="number"?we(Se,k.tsMs,9e4):null;E.push({tsMs:k.tsMs,type:String(k.type),title:`${k.type==="join"?"Join":"Disconnect"}: ${I}`,subtitle:k.type==="disconnect"&&N&&typeof N.kickCause=="string"&&N.kickCause?`cause: ${N.kickCause}`:"",focusPos:ye||Me,focusPlayerId:Se,playerIds:[Se].filter(ge=>typeof ge=="number")})}}E.sort(($,k)=>$.tsMs-k.tsMs);const D=u,O=Ke;let U=E;return typeof D=="number"&&(U=U.filter($=>$.tsMs<=D)),typeof O=="number"&&(U=U.filter($=>$.playerIds.includes(O))),U.slice(-200)},[u,Ke,qe,ue]);F.useEffect(()=>{if(!Ue)return;const E=window.setTimeout(()=>{const D=Ne.current.get(Ue);D&&D.scrollIntoView({block:"nearest",behavior:"smooth"})},0);return()=>window.clearTimeout(E)},[Ue,X]);const J=F.useMemo(()=>{const E=y.minTsMs,D=y.maxTsMs;if(typeof E!="number"||typeof D!="number")return[];let O=[];for(const k of qe){const N=k.payload;if(!N||typeof N!="object"||N.type!=="kill"&&N.type!=="death"&&N.type!=="aiKill"&&N.type!=="join"&&N.type!=="disconnect"&&N.type!=="restart"&&N.type!=="gmPing"||typeof N.tsMs!="number"||N.tsMs<E||N.tsMs>D)continue;const I=N.event;if(N.type==="kill"){const Se=I&&typeof I.killerName=="string"?I.killerName:"Unknown",ye=I&&typeof I.victimName=="string"?I.victimName:"Unknown",Me=I&&typeof I.weaponName=="string"?I.weaponName:"",ge=I&&typeof I.distanceM=="number"?I.distanceM:null,Te=typeof ge=="number"&&Number.isFinite(ge)?`${Math.round(ge)}m`:"",ft=I?Jt(I.victimPos):null,Xe=I&&typeof I.victimPlayerId=="number"?I.victimPlayerId:null,pt=I&&typeof I.killerPlayerId=="number"?I.killerPlayerId:null,St=[];Me&&St.push(Me),Te&&St.push(Te),O.push({tsMs:N.tsMs,type:"kill",title:`${Se} → ${ye}`,subtitle:St.join(" • "),focusPos:ft,focusPlayerId:Xe,playerIds:[pt,Xe].filter(Zn=>typeof Zn=="number")})}else if(N.type==="death"){const Se=I&&typeof I.victimPlayerId=="number"?I.victimPlayerId:null,ye=I&&typeof I.killerPlayerId=="number"?I.killerPlayerId:null;if(Se!==null&&ye!==null&&ye>=0&&ye!==Se)continue;const Me=I&&typeof I.victimName=="string"?I.victimName:"Unknown",ge=I&&typeof I.weaponName=="string"?I.weaponName:"",Te=I&&typeof I.distanceM=="number"?I.distanceM:null,ft=typeof Te=="number"&&Number.isFinite(Te)?`${Math.round(Te)}m`:"",Xe=I?Jt(I.victimPos):null,pt=[];ge&&pt.push(ge),ft&&pt.push(ft),O.push({tsMs:N.tsMs,type:"death",title:`${Me} died`,subtitle:pt.join(" • "),focusPos:Xe,focusPlayerId:Se,playerIds:[Se].filter(St=>typeof St=="number")})}else if(N.type==="aiKill"){const Se=I&&typeof I.killerName=="string"?I.killerName:"Unknown",ye=I&&typeof I.victimName=="string"?I.victimName:"Unknown",Me=I&&typeof I.weaponName=="string"?I.weaponName:"",ge=I&&typeof I.distanceM=="number"?I.distanceM:null,Te=typeof ge=="number"&&Number.isFinite(ge)?`${Math.round(ge)}m`:"",ft=I?Jt(I.victimPos):null,Xe=I&&typeof I.killerPlayerId=="number"?I.killerPlayerId:null,pt=[];Me&&pt.push(Me),Te&&pt.push(Te),O.push({tsMs:N.tsMs,type:"aiKill",title:`${Se} → AI: ${ye}`,subtitle:pt.join(" • "),focusPos:ft,focusPlayerId:Xe,playerIds:[Xe].filter(St=>typeof St=="number")})}else if(N.type==="gmPing"){const Se=I&&typeof I.by=="string"&&I.by.length>0?I.by:"",ye=I&&typeof I.title=="string"&&I.title.length>0?I.title:"event",Me=I?Jt(I.pos):null,ge=Se?`(${Se} sent a GM ping to ${ye})`:`GM ping to ${ye}`;O.push({tsMs:N.tsMs,type:"gmPing",title:ge,subtitle:"",focusPos:Me,focusPlayerId:null,playerIds:[]})}else if(N.type==="restart"){const Se=I&&typeof I.reason=="string"?I.reason:"",ye=Se==="session_start"?"server restart":Se==="server_restart_or_history_cleared"?"restart / history cleared":Se||"restart";O.push({tsMs:N.tsMs,type:"restart",title:"Server restarted",subtitle:ye,focusPos:null,focusPlayerId:null,playerIds:[]})}else{const Se=I&&typeof I.name=="string"?I.name:String(I&&I.playerId?I.playerId:"player"),ye=I&&typeof I.playerId=="number"?I.playerId:null,Me=N.type==="join"&&typeof ye=="number"?ue(ye,N.tsMs,9e4):null;O.push({tsMs:N.tsMs,type:N.type,title:`${N.type==="join"?"Join":"Disconnect"}: ${Se}`,subtitle:N.type==="disconnect"&&I&&typeof I.kickCause=="string"&&I.kickCause?`cause: ${I.kickCause}`:"",focusPos:Me,focusPlayerId:ye,playerIds:[ye].filter(ge=>typeof ge=="number")})}}O.sort((k,N)=>k.tsMs-N.tsMs);const U=Ke;typeof U=="number"&&(O=O.filter(k=>k.playerIds.includes(U)));const $=420;if(O.length>$){const k=Math.ceil(O.length/$),N=[];for(let I=0;I<O.length;I+=k)N.push(O[I]);return N}return O},[Ke,qe,ue,y.maxTsMs,y.minTsMs]);function j(E){const D=`${Date.now()}-${Math.random().toString(16).slice(2)}`;Ze(O=>[{id:D,...E,visible:!1},...O].slice(0,5)),window.setTimeout(()=>{Ze(O=>O.map(U=>U.id===D?{...U,visible:!0}:U))},10),window.setTimeout(()=>{Ze(O=>O.map(U=>U.id===D?{...U,visible:!1}:U))},4500),window.setTimeout(()=>{Ze(O=>O.filter(U=>U.id!==D))},5200)}return F.useEffect(()=>{if(!v||qe.length===0)return;const E=je.current;let D=E;const O=[];for(const U of qe)!U||typeof U.receivedAt!="number"||U.receivedAt<=E||(U.receivedAt>D&&(D=U.receivedAt),O.push({receivedAt:U.receivedAt,payload:U.payload}));O.sort((U,$)=>U.receivedAt-$.receivedAt);for(const U of O){const $=U.payload;if(!(!$||typeof $!="object")&&$.type!=="snapshot"){if($.type==="gmPing"){const k=$.event,N=k&&typeof k.by=="string"&&k.by.length>0?k.by:"",I=k&&typeof k.title=="string"&&k.title.length>0?k.title:"Ping";j({kind:"event",title:"GM ping",subtitle:N?`${N} • ${I}`:I});continue}if($.type==="kill"){const k=$.event,N=k&&typeof k.killerName=="string"?k.killerName:"Unknown",I=k&&typeof k.victimName=="string"?k.victimName:"Unknown",Se=k&&typeof k.weaponName=="string"&&k.weaponName.length>0?k.weaponName:"",ye=k&&typeof k.distanceM=="number"?k.distanceM:null,Me=typeof ye=="number"&&Number.isFinite(ye)?`${Math.round(ye)}m`:"",ge=[];Se&&ge.push(Se),Me&&ge.push(Me),j({kind:"kill",title:`${N} → ${I}`,subtitle:ge.length>0?ge.join(" • "):"Kill"})}else if($.type==="death"){const k=$.event,N=k&&typeof k.victimPlayerId=="number"?k.victimPlayerId:null,I=k&&typeof k.killerPlayerId=="number"?k.killerPlayerId:null;if(N!==null&&I!==null&&I>=0&&I!==N)continue;const Se=k&&typeof k.victimName=="string"?k.victimName:"Unknown",ye=k&&typeof k.weaponName=="string"&&k.weaponName.length>0?k.weaponName:"",Me=k&&typeof k.distanceM=="number"?k.distanceM:null,ge=typeof Me=="number"&&Number.isFinite(Me)?`${Math.round(Me)}m`:"",Te=[];ye&&Te.push(ye),ge&&Te.push(ge),j({kind:"event",title:`${Se} died`,subtitle:Te.length>0?Te.join(" • "):"Death"})}else if($.type==="aiKill"){const k=$.event,N=k&&typeof k.killerName=="string"?k.killerName:"Unknown",I=k&&typeof k.victimName=="string"?k.victimName:"Unknown",Se=k&&typeof k.weaponName=="string"&&k.weaponName.length>0?k.weaponName:"",ye=k&&typeof k.distanceM=="number"?k.distanceM:null,Me=typeof ye=="number"&&Number.isFinite(ye)?`${Math.round(ye)}m`:"",ge=[];Se&&ge.push(Se),Me&&ge.push(Me),j({kind:"kill",title:`${N} → AI: ${I}`,subtitle:ge.length>0?ge.join(" • "):"AI kill"})}}}D>E&&(je.current=D)},[qe,v]),M.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden"},children:[M.jsxs("div",{className:"row",style:{gap:12,padding:12,alignItems:"center"},children:[M.jsxs("div",{style:{minWidth:240,maxWidth:520,flex:1},children:[M.jsxs("select",{className:"input",value:i,onChange:E=>{r(E.target.value),G([]),te(null),z(null),P([]),p({minTsMs:null,maxTsMs:null}),m(null),pe.current=null,je.current=0,Ze([])},children:[M.jsx("option",{value:"",children:"Select a server…"}),e.map(E=>M.jsxs("option",{value:E.id,children:[E.name," (",E.id,")"]},E.id))]}),e.length===0?M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"No servers returned yet."}):null]}),se?null:M.jsx("button",{className:"button",onClick:()=>{l(null),jd().then(E=>o(E)).catch(E=>{const D=E instanceof Error?E.message:"Failed to load server status";l(D)})},children:"Refresh overview"}),f?M.jsx("div",{className:"muted",style:{fontSize:12},children:"Loading…"}):null,c?M.jsx("div",{className:"error",style:{flex:1},children:c}):null]}),se?M.jsx("div",{style:{position:"relative",width:"100%",height:"calc(100vh - 72px)",padding:12,boxSizing:"border-box"},children:M.jsx("div",{className:"card",style:{width:"100%",height:"100%",padding:0,overflow:"hidden"},children:M.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[M.jsx(kb,{players:bt,focusTarget:le,focusNonce:ne,followPlayerId:at,nameTags:ke,showAimLines:K,trail:lt,deathMarkers:ht,terrain:g,towns:L||void 0}),at!==null&&Yt?M.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:132,display:"flex",justifyContent:"center",pointerEvents:"none"},children:M.jsx("div",{className:"card",style:{padding:"8px 12px",background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)"},children:M.jsxs("div",{style:{fontWeight:800,fontSize:12},children:["Attached to ",Yt,", press F to unattach"]})})}):null,M.jsx("div",{style:{position:"absolute",top:12,right:12,width:340,display:"flex",flexDirection:"column",gap:8,pointerEvents:"none"},children:gt.map(E=>M.jsxs("div",{style:{pointerEvents:"none",padding:"10px 12px",borderRadius:10,background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)",opacity:E.visible?1:0,transform:E.visible?"translateY(0px)":"translateY(-6px)",transition:"opacity 250ms ease, transform 250ms ease"},children:[M.jsx("div",{style:{fontWeight:700,fontSize:13},children:E.title}),E.subtitle?M.jsx("div",{className:"muted",style:{fontSize:12},children:E.subtitle}):null]},E.id))}),M.jsx("div",{style:{position:"absolute",top:12,left:12,width:ce?360:"auto"},children:M.jsxs("div",{className:"card",style:{padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"nowrap"},children:[M.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:X==="players"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:X==="players"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>Z("players"),children:"Players"}),M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:X==="events"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:X==="events"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>Z("events"),children:"Events"})]}),M.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[X==="players"?M.jsx("button",{type:"button",className:"button",title:"Nametag options",style:{padding:"6px 10px"},onClick:()=>he(E=>!E),children:"⚙"}):null,M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>V(E=>!E),children:ce?"−":"+"})]})]}),ce?M.jsxs("div",{className:"stack",style:{marginTop:10},children:[X==="players"?M.jsxs(M.Fragment,{children:[ae?M.jsxs("div",{style:{border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:[M.jsx("div",{className:"label",style:{marginBottom:8},children:"Nametags"}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:$e,onChange:E=>ze(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Show nametags"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:A,onChange:E=>w(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Background"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:Y,onChange:E=>ve(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Include vehicle in label"})]}),M.jsx("div",{className:"label",style:{marginBottom:6},children:"Nametag size"}),M.jsx("input",{style:{width:"100%"},type:"range",min:.6,max:1.6,step:.1,value:vt,onChange:E=>Je(Number(E.target.value))}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:[vt.toFixed(1),"×"]}),M.jsx("div",{style:{height:8}}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:K,onChange:E=>me(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Aim direction line"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:Fe,onChange:E=>Ce(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Death markers"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:Le,onChange:E=>Ye(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Trails (focused player)"})]}),Le?M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"label",style:{marginBottom:6},children:"Trail window (seconds)"}),M.jsx("input",{style:{width:"100%"},type:"range",min:5,max:60,step:5,value:Qe,onChange:E=>fe(Number(E.target.value))}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:[Qe,"s"]})]}):null]}):null,M.jsx("input",{className:"input",placeholder:"Search players…",value:re,onChange:E=>S(E.target.value)})]}):null,X==="players"?M.jsx("div",{className:"scroll",style:{maxHeight:240,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:pn.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No players."}):pn.map(E=>{const D=R===E.playerId;return M.jsxs("button",{type:"button",onClick:()=>{Z("players"),te(E.playerId),tt(E.playerId);const O=bt.find(U=>U.playerId===E.playerId);O&&(z(O.pos),Q(U=>U+1))},className:"button",style:{width:"100%",textAlign:"left",borderRadius:0,border:"none",borderBottom:"1px solid rgba(255,255,255,0.06)",background:D?"rgba(255,255,255,0.08)":"transparent",padding:"8px 10px"},children:[M.jsx("div",{style:{fontWeight:700,fontSize:13},children:E.name}),M.jsxs("div",{className:"muted",style:{fontSize:11},children:["#",E.playerId]})]},E.playerId)})}):M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between",gap:10},children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Event click offset"}),M.jsxs("div",{className:"row",style:{gap:8},children:[M.jsx("input",{className:"input",style:{width:90,padding:"6px 10px"},type:"number",min:0,max:60,step:1,value:Oe,onChange:E=>Ie(Math.max(0,Math.min(60,Math.floor(Number(E.target.value)||0)))),title:"Jump this many seconds before an event"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"sec"})]})]}),M.jsx("div",{className:"scroll",style:{maxWidth:340,overflowX:"auto",overflowY:"hidden",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:q.length===0?M.jsx("div",{className:"muted",style:{fontSize:12},children:"No events in buffer yet."}):M.jsx("div",{style:{display:"flex",gap:10},children:q.slice().reverse().map((E,D)=>{const O=`${E.tsMs}|${E.type}|${E.title}|${E.subtitle||""}`,U=Ue===O,$=!!se&&E.type!=="gmPing"&&!!E.focusPos,k=E.subtitle?`${E.title} • ${E.subtitle}`:E.title;return M.jsxs("div",{ref:N=>{N?Ne.current.set(O,N):Ne.current.delete(O)},className:"button",style:{minWidth:220,textAlign:"left",borderRadius:10,border:U?"1px solid rgba(255,255,255,0.35)":"1px solid rgba(255,255,255,0.10)",background:U?"rgba(255,255,255,0.10)":"rgba(255,255,255,0.06)",padding:"8px 10px",position:"relative"},role:"button",tabIndex:0,onClick:()=>{Ge(O),He(!1),_(!1),Rt(E.tsMs),typeof E.focusPlayerId=="number"&&te(E.focusPlayerId),E.focusPos&&(z(E.focusPos),Q(N=>N+1))},onKeyDown:N=>{N.key!=="Enter"&&N.key!==" "||(N.preventDefault(),Ge(O),He(!1),_(!1),Rt(E.tsMs),typeof E.focusPlayerId=="number"&&te(E.focusPlayerId),E.focusPos&&(z(E.focusPos),Q(I=>I+1)))},children:[M.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:8,right:8,padding:"4px 8px",fontSize:11,opacity:$?1:.4},title:$?"Send GM ping to this event location":"No position for this event",disabled:!$,onClick:N=>{if(N.stopPropagation(),!se)return;const I=E.focusPos;if(!I)return;const Se=typeof E.focusPlayerId=="number"?E.focusPlayerId:Array.isArray(E.playerIds)&&E.playerIds.length>0?E.playerIds[0]:null;uM({serverId:se,tsMs:E.tsMs,pos:I,title:k,reporterPlayerId:Se})},children:"GM ping"}),M.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:34,right:8,padding:"4px 8px",fontSize:11,opacity:$?1:.4},title:$?"Export 5s before/after as a GIF to Discord":"No position for this event",disabled:!$,onClick:N=>{if(N.stopPropagation(),!se)return;const I=E.focusPos;I&&(async()=>{try{await xM({serverId:se,tsMs:E.tsMs,title:E.title,pos:I,focusPlayerId:typeof E.focusPlayerId=="number"?E.focusPlayerId:null,playerIds:Array.isArray(E.playerIds)?E.playerIds:null}),j({kind:"event",title:"Discord export",subtitle:"Sent"})}catch(Se){d(Se instanceof Error?Se.message:"Failed to export to Discord")}})()},children:"Export"}),M.jsx("div",{style:{fontWeight:800,fontSize:12},children:E.title}),M.jsxs("div",{className:"muted",style:{fontSize:11,marginTop:2},children:["+",ll(E.tsMs-it.min),Dt?` • ${Dt(E.tsMs)}`:"",E.subtitle?` • ${E.subtitle}`:""]})]},`${E.tsMs}-${D}`)})})})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Selected"}),R===null?M.jsx("div",{className:"muted",style:{fontSize:12},children:"Click a player to view equipment."}):B?M.jsxs("div",{style:{fontSize:12},children:[M.jsxs("div",{className:"muted",style:{marginBottom:6},children:["pos: ",JSON.stringify(B.pos)]}),M.jsxs("details",{open:!0,children:[M.jsx("summary",{style:{cursor:"pointer",fontWeight:700},children:"Weapon"}),M.jsx("div",{className:"muted",style:{marginTop:6},children:B.weapon&&B.weapon.name?B.weapon.name:"None"})]}),M.jsx("div",{style:{height:6}}),M.jsxs("details",{children:[M.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Inventory (",Array.isArray(B.inventory)?B.inventory.length:0,")"]}),M.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:(()=>{const E=Hb(B.inventory,D=>D&&D.name?String(D.name):"Item");return E.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No inventory data in this snapshot."}):E.slice(0,80).map((D,O)=>M.jsx("div",{style:{padding:"7px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{style:{fontSize:12},children:[D.name,D.count>1?` ×${D.count}`:""]})},O))})()})]}),M.jsx("div",{style:{height:6}}),M.jsxs("details",{children:[M.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Hotbar (",Array.isArray(B.attachments)?B.attachments.length:0,")"]}),M.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:Array.isArray(B.attachments)&&B.attachments.length>0?B.attachments.map((E,D)=>M.jsx("div",{style:{padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{style:{fontSize:12},children:[E&&E.slot?M.jsxs("span",{className:"muted",style:{fontSize:11},children:[String(E.slot),":"]}):null," ",E&&E.name?String(E.name):"Item"]})},D)):M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No attachments data in this snapshot."})})]}),M.jsx("div",{style:{height:8}}),M.jsxs("div",{children:[M.jsx("div",{className:"muted",style:{fontSize:12,marginBottom:6},children:"Filter events by player"}),M.jsxs("select",{className:"input",style:{width:"100%",padding:"6px 10px"},value:Ke===null?"":String(Ke),onChange:E=>{const D=String(E.target.value||"");if(!D){ut(null);return}const O=Number(D);ut(Number.isFinite(O)?O:null)},title:"Filter events by player",children:[M.jsx("option",{value:"",children:"All players"}),b.map(E=>M.jsxs("option",{value:String(E.playerId),children:[E.name," (#",E.playerId,")"]},E.playerId))]})]})]}):M.jsx("div",{className:"muted",style:{fontSize:12},children:"No snapshot data for this player at the current time."})]})]}):null]})}),M.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:12,display:"flex",justifyContent:"center"},children:M.jsxs("div",{className:"card",style:{width:"min(980px, 100%)",padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Replay time"}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:["+",ll(it.value-it.min)," of +",ll(it.max-it.min),Dt?` • ${Dt(it.value)}`:""]})]}),M.jsxs("div",{className:"row",style:{gap:10,alignItems:"center"},children:[M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>{v&&_(!1),He(E=>!E)},disabled:it.disabled,children:et?"Pause":"Play"}),M.jsxs("select",{className:"input",style:{width:110,padding:"6px 10px"},value:String(H),onChange:E=>dt(Number(E.target.value)),disabled:it.disabled,title:"Playback speed",children:[M.jsx("option",{value:"0.25",children:"0.25×"}),M.jsx("option",{value:"0.5",children:"0.5×"}),M.jsx("option",{value:"1",children:"1×"}),M.jsx("option",{value:"2",children:"2×"}),M.jsx("option",{value:"4",children:"4×"})]}),M.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[M.jsx("input",{type:"checkbox",checked:Ve,onChange:E=>ee(E.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Events"})]}),M.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[M.jsx("input",{type:"checkbox",checked:v,onChange:E=>{const D=E.target.checked;_(D),D&&He(!1)}}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Live"})]})]})]}),Ve?M.jsxs("div",{style:{position:"relative",height:18,marginTop:6,marginBottom:4},children:[M.jsx("div",{style:{position:"absolute",left:0,right:0,top:8,height:2,background:"rgba(255,255,255,0.10)"}}),de?M.jsxs("div",{style:{position:"absolute",left:`${de.leftPct}%`,top:0,transform:"translate(-50%, -110%)",zIndex:10,pointerEvents:"none",maxWidth:320,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:"6px 8px"},children:[M.jsx("div",{style:{fontWeight:800,fontSize:12,lineHeight:1.2},children:de.title}),M.jsx("div",{className:"muted",style:{fontSize:11,marginTop:2,lineHeight:1.2},children:de.subtitle})]}):null,(()=>{const E=it.min,D=it.max,O=Math.max(1,D-E);return J.map((U,$)=>{const k=(U.tsMs-E)/O,N=Math.min(1,Math.max(0,k))*100,I=U.type==="kill"||U.type==="death"||U.type==="aiKill"?"rgba(255,74,74,0.95)":U.type==="restart"?"rgba(255,217,102,0.95)":"rgba(183,247,200,0.95)",Se=U.type==="disconnect"?"brightness(0.65) saturate(1.1)":void 0,ye=`+${ll(U.tsMs-E)}${Dt?` • ${Dt(U.tsMs)}`:""}${U.subtitle?` • ${U.subtitle}`:""}`,Me=`${U.tsMs}|${U.type}|${U.title}|${U.subtitle||""}`;return M.jsx("button",{type:"button",className:"button",style:{position:"absolute",left:`calc(${N}% - 4px)`,top:4,width:8,height:8,borderRadius:999,padding:0,border:"1px solid rgba(0,0,0,0.35)",background:I,filter:Se},onMouseEnter:()=>{Ae({tsMs:U.tsMs,type:U.type,title:U.title,subtitle:ye,leftPct:N})},onMouseLeave:()=>Ae(null),onClick:()=>{He(!1),_(!1),Rt(U.tsMs),typeof U.focusPlayerId=="number"&&te(U.focusPlayerId),U.focusPos&&(z(U.focusPos),Q(ge=>ge+1)),Z("events"),Ge(Me),Ae(null)}},`${U.tsMs}-${$}-${U.type}`)})})()]}):null,M.jsx("input",{style:{width:"100%"},type:"range",min:it.min,max:it.max,value:it.value,disabled:it.disabled,onChange:E=>{const D=Number(E.target.value);Number.isFinite(D)&&(v&&_(!1),et&&He(!1),m(D))}})]})})]})})}):null,se?null:M.jsxs("div",{style:{padding:12,height:"calc(100vh - 72px)",boxSizing:"border-box",overflow:"auto"},children:[M.jsxs("div",{className:"card",style:{marginBottom:12},children:[M.jsx("div",{style:{fontWeight:900,letterSpacing:.2},children:"Server overview"}),M.jsx("div",{style:{marginTop:4,fontSize:13},children:"Pick a server to open the replay viewer. Times are shown in your local clock."}),a?M.jsx("div",{className:"error",style:{marginTop:10},children:a}):null]}),M.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:(s&&s.length>0?s:e.map(E=>({serverId:E.id,name:E.name,lastIngestTsMs:null,minTsMs:null,maxTsMs:null,firstReceivedAt:null,lastReceivedAt:null,storedEvents:null,totalEvents:null,retentionMs:0,mapId:null}))).map(E=>{const D=typeof E.retentionMs=="number"?E.retentionMs:0,O=typeof E.lastReceivedAt=="number"?E.lastReceivedAt:null,U=D>0&&O!==null?O-D:null,$=typeof E.firstReceivedAt=="number"?U!==null?Math.max(E.firstReceivedAt,U):E.firstReceivedAt:U;return M.jsxs("button",{className:"card",style:{textAlign:"left",cursor:"pointer",border:"none"},onClick:()=>{r(E.serverId),G([]),te(null),z(null),P([]),p({minTsMs:null,maxTsMs:null}),m(null),pe.current=null,je.current=0,Ze([])},children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12},children:[M.jsx("div",{style:{fontWeight:900},children:E.name}),M.jsx("div",{className:"muted",style:{fontSize:12},children:E.serverId})]}),M.jsxs("div",{style:{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Events"}),M.jsx("div",{style:{fontWeight:800},children:typeof E.storedEvents=="number"?`${E.storedEvents} events`:"—"}),typeof E.totalEvents=="number"&&typeof E.storedEvents=="number"&&E.totalEvents!==E.storedEvents?M.jsxs("div",{className:"muted",style:{fontSize:12,marginTop:2},children:["All-time: ",E.totalEvents," events"]}):null]}),M.jsxs("div",{children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Retention"}),M.jsx("div",{style:{fontWeight:800},children:D>0?Bb(D):"∞"})]}),M.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Buffer window"}),M.jsxs("div",{style:{fontWeight:800,fontSize:13},children:[$u($)," → ",$u(O)]})]}),M.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Last ingest"}),M.jsx("div",{style:{fontWeight:800,fontSize:13},children:$u(E.lastReceivedAt)})]})]})]},E.serverId)})}),(!s||s.length===0)&&e.length===0?M.jsx("div",{style:{marginTop:12},children:"No servers yet — add one in the Dev page, then come back here."}):null]})]})}function fg(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function Vb(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function Wb(){const[t,e]=F.useState(null),[n,i]=F.useState(null);F.useEffect(()=>{let s=!1;return jd().then(o=>{s||(e(o),i(null))}).catch(o=>{if(s)return;const a=o instanceof Error?o.message:"Failed to load replay status";i(a)}),()=>{s=!0}},[]);const r=F.useMemo(()=>{if(!t)return[];const s=t.slice();return s.sort((o,a)=>{const l=typeof o.storedEvents=="number"?o.storedEvents:-1;return(typeof a.storedEvents=="number"?a.storedEvents:-1)-l}),s.slice(0,6)},[t]);return M.jsx("div",{className:"container",children:M.jsxs("div",{className:"stack",children:[M.jsx("div",{className:"card",style:{padding:18},children:M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx("div",{className:"label",children:"Welcome"}),M.jsx("h1",{className:"h1",style:{marginTop:0},children:"ReforgedZ Admin"}),M.jsx("div",{className:"muted",children:"Use the sidebar to manage users, servers, and replay history."})]})}),M.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:[M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Replay overview"}),M.jsx("div",{className:"muted",style:{fontSize:13},children:t?`${t.length} server${t.length===1?"":"s"} detected.`:"Loading…"}),n?M.jsx("div",{className:"error",style:{marginTop:8},children:n}):null]}),r.length>0?M.jsx("div",{className:"stack",style:{gap:8},children:r.map(s=>{const o=typeof s.retentionMs=="number"?s.retentionMs:0,a=typeof s.lastReceivedAt=="number"?s.lastReceivedAt:null,l=o>0&&a!==null?a-o:null,c=typeof s.firstReceivedAt=="number"?l!==null?Math.max(s.firstReceivedAt,l):s.firstReceivedAt:l;return M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:850},children:s.name}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:[fg(c)," → ",fg(a)]})]}),M.jsxs("div",{style:{textAlign:"right"},children:[M.jsx("div",{style:{fontWeight:900},children:typeof s.storedEvents=="number"?`${s.storedEvents} events`:"—"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:o>0?Vb(o):"∞"}),typeof s.totalEvents=="number"&&typeof s.storedEvents=="number"&&s.totalEvents!==s.storedEvents?M.jsxs("div",{className:"muted",style:{fontSize:11},children:["All-time ",s.totalEvents," events"]}):null]})]},s.serverId)})}):M.jsx("div",{className:"muted",style:{fontSize:12},children:"Open Replay Tool to see a detailed per-server dashboard."})]})}),M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Replay Tool tips"}),M.jsx("div",{className:"muted",style:{fontSize:13},children:"A few quick controls that help a lot."})]}),M.jsxs("div",{className:"stack",style:{gap:6,fontSize:13},children:[M.jsxs("div",{children:[M.jsx("span",{style:{fontWeight:850},children:"Attach camera:"})," click a player in the left panel."]}),M.jsxs("div",{children:[M.jsx("span",{style:{fontWeight:850},children:"Detach:"})," press ",M.jsx("span",{style:{fontWeight:900},children:"F"}),"."]}),M.jsxs("div",{children:[M.jsx("span",{style:{fontWeight:850},children:"Event jump offset:"})," defaults to 5s before the event (configurable in Replay Tool)."]})]})]})}),M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Retention"}),M.jsx("div",{className:"muted",style:{fontSize:13},children:"Replay is a rolling buffer. Restarts are marked in the timeline."})]}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"If you clear a server’s history, replay data is removed but cached map metadata is preserved."})]})})]})]})})}function jb(){const[t,e]=F.useState(null),[n,i]=F.useState(!1),[r,s]=F.useState([]),[o,a]=F.useState(""),[l,c]=F.useState(""),[d,f]=F.useState(!0),[h,v]=F.useState(!1),[_,y]=F.useState(!1);async function p(){i(!0),e(null);try{const m=await dM();s(m)}catch(m){e(m instanceof Error?m.message:"Failed to load users")}finally{i(!1)}}F.useEffect(()=>{p()},[]);const u=F.useMemo(()=>o.trim().length>=3&&l.length>=6,[l.length,o]);return M.jsx("div",{className:"container",children:M.jsxs("div",{className:"stack",children:[M.jsx("h1",{className:"h1",children:"Admin"}),t?M.jsx("div",{className:"error",children:t}):null,M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Create user"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Create a new account and choose which tools it can access."})]}),M.jsxs("div",{className:"row",children:[M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Username"}),M.jsx("input",{className:"input",value:o,onChange:m=>a(m.target.value),placeholder:"username"})]}),M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Password"}),M.jsx("input",{className:"input",type:"password",value:l,onChange:m=>c(m.target.value),placeholder:"password"})]})]}),M.jsxs("div",{className:"row",style:{gap:16},children:[M.jsxs("label",{className:"row",style:{gap:8},children:[M.jsx("input",{type:"checkbox",checked:d,onChange:m=>f(m.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Replay Tool"})]}),M.jsxs("label",{className:"row",style:{gap:8},children:[M.jsx("input",{type:"checkbox",checked:h,onChange:m=>v(m.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Admin"})]}),M.jsxs("label",{className:"row",style:{gap:8},children:[M.jsx("input",{type:"checkbox",checked:_,onChange:m=>y(m.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Dev"})]})]}),M.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:M.jsx("button",{className:"button buttonPrimary",disabled:!u||n,onClick:async()=>{i(!0),e(null);try{await fM({username:o.trim(),password:l,tools:{replay:d,admin:h,dev:_}}),a(""),c(""),f(!0),v(!1),y(!1),await p()}catch(m){e(m instanceof Error?m.message:"Failed to create user")}finally{i(!1)}},children:"Create user"})})]})}),M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Users"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Manage tool access and reset passwords."})]}),M.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:p,children:"Refresh"})]}),M.jsx("div",{className:"scroll",style:{maxHeight:420,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No users found."}):r.map(m=>{var g,x,L,C,b,G;return M.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center"},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:800},children:m.username}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:["tools: ",(g=m.tools)!=null&&g.replay?"replay ":"",(x=m.tools)!=null&&x.admin?"admin ":"",(L=m.tools)!=null&&L.dev?"dev ":""]})]}),M.jsxs("div",{className:"row",style:{gap:8},children:[M.jsxs("button",{className:"button",onClick:async()=>{var re,S,R;i(!0),e(null);try{await lu(m.username,{replay:!((re=m.tools)!=null&&re.replay),admin:!!((S=m.tools)!=null&&S.admin),dev:!!((R=m.tools)!=null&&R.dev)}),await p()}catch(te){e(te instanceof Error?te.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle replay tool access",children:["Replay: ",(C=m.tools)!=null&&C.replay?"On":"Off"]}),M.jsxs("button",{className:"button",onClick:async()=>{var re,S,R;i(!0),e(null);try{await lu(m.username,{replay:!!((re=m.tools)!=null&&re.replay),admin:!((S=m.tools)!=null&&S.admin),dev:!!((R=m.tools)!=null&&R.dev)}),await p()}catch(te){e(te instanceof Error?te.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle admin access",children:["Admin: ",(b=m.tools)!=null&&b.admin?"On":"Off"]}),M.jsxs("button",{className:"button",onClick:async()=>{var re,S,R;i(!0),e(null);try{await lu(m.username,{replay:!!((re=m.tools)!=null&&re.replay),admin:!!((S=m.tools)!=null&&S.admin),dev:!((R=m.tools)!=null&&R.dev)}),await p()}catch(te){e(te instanceof Error?te.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle dev access",children:["Dev: ",(G=m.tools)!=null&&G.dev?"On":"Off"]}),M.jsx("button",{className:"button",style:{borderColor:"rgba(255, 180, 180, 0.35)"},disabled:n,onClick:async()=>{if(confirm(`Delete user '${m.username}'?`)){i(!0),e(null);try{await hM(m.username),await p()}catch(re){e(re instanceof Error?re.message:"Failed to delete user")}finally{i(!1)}}},children:"Delete"})]})]})},m.username)})})]})})]})})}function Xb(){const[t,e]=F.useState(null),[n,i]=F.useState(!1),[r,s]=F.useState([]),[o,a]=F.useState(""),[l,c]=F.useState(""),[d,f]=F.useState(!1),[h,v]=F.useState(""),[_,y]=F.useState(""),[p,u]=F.useState("");async function m(){i(!0),e(null);try{const g=await pM();s(g);const x=await _M();f(!!x.isSet),a(x.masked||"")}catch(g){e(g instanceof Error?g.message:"Failed to load dev servers")}finally{i(!1)}}return F.useEffect(()=>{m()},[]),M.jsx("div",{className:"container",children:M.jsxs("div",{className:"stack",children:[M.jsx("h1",{className:"h1",children:"Dev"}),t?M.jsx("div",{className:"error",children:t}):null,M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Discord webhook (global)"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Used by “Export event to Discord”. One webhook URL is shared for all servers."})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Current"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:d?o||"set":"not set"})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Webhook URL"}),M.jsx("input",{className:"input",type:"password",value:l,onChange:g=>c(g.target.value),placeholder:"https://discord.com/api/webhooks/..."}),M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Leave blank and click Save to clear."})]}),M.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:M.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:async()=>{i(!0),e(null);try{await yM(l.trim()),c(""),await m()}catch(g){e(g instanceof Error?g.message:"Failed to save webhook")}finally{i(!1)}},children:"Save webhook"})}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Add server"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Adds a new ingest key so the backend will accept replay uploads for that server."})]}),M.jsxs("div",{className:"row",children:[M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Server ID"}),M.jsx("input",{className:"input",value:h,onChange:g=>v(g.target.value),placeholder:"reforgedz-dev-eu-1"})]}),M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Server name (optional)"}),M.jsx("input",{className:"input",value:p,onChange:g=>u(g.target.value),placeholder:"EU #1"})]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Server key / secret"}),M.jsx("input",{className:"input",value:_,onChange:g=>y(g.target.value),placeholder:"secret"}),M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"This must match what the Reforger exporter sends as serverKey."})]}),M.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:M.jsx("button",{className:"button buttonPrimary",disabled:n||h.trim().length===0||_.trim().length<6,onClick:async()=>{i(!0),e(null);try{await mM({serverId:h.trim(),serverKey:_.trim(),name:p.trim()||void 0}),v(""),y(""),u(""),await m()}catch(g){e(g instanceof Error?g.message:"Failed to add server")}finally{i(!1)}},children:"Add server"})})]})}),M.jsxs("div",{className:"card",children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Servers"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Clear history deletes stored replay history for that server (events + snapshots). Cached map data is kept."})]}),M.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:m,children:"Refresh"})]}),M.jsx("div",{style:{height:10}}),M.jsx("div",{className:"scroll",style:{maxHeight:520,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No servers configured."}):r.map(g=>M.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:800},children:g.name||g.id}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:["id: ",g.id,g.keyHint?` • key: ${g.keyHint}`:""]})]}),M.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Clear history for '${g.id}'? This deletes stored replay data.`)){i(!0),e(null);try{await gM(g.id),await m()}catch(x){e(x instanceof Error?x.message:"Failed to clear history")}finally{i(!1)}}},children:"Clear history"}),M.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Regenerate terrain data for '${g.id}'? This queues a command for the exporter to re-send map terrain.`)){i(!0),e(null);try{await vM(g.id),await m()}catch(x){e(x instanceof Error?x.message:"Failed to regenerate terrain")}finally{i(!1)}}},children:"Regenerate terrain data"})]})},g.id))})]})]})})}function ul(t){return M.jsx(eM,{to:t.to,className:({isActive:e})=>`navItem${e?" navItemActive":""}`,children:t.label})}function $b(){const t=Ec();function e(){sM(),t("/login",{replace:!0})}return M.jsxs("div",{className:"appShell",children:[M.jsxs("aside",{className:"sidebar",children:[M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"ReforgedZ"}),M.jsx("div",{className:"h2",children:"Admin Panel"})]}),M.jsx("div",{style:{height:8}}),M.jsx("div",{className:"label",children:"Tools"}),M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx(ul,{to:"/",label:"Home"}),ru("replay")?M.jsx(ul,{to:"/replay",label:"Replay Tool"}):null,ru("admin")?M.jsx(ul,{to:"/admin",label:"Admin"}):null,ru("dev")?M.jsx(ul,{to:"/dev",label:"Dev"}):null]})]}),M.jsx("div",{style:{flex:1}}),M.jsx("button",{className:"button buttonPrimary",onClick:e,children:"Log out"})]}),M.jsx("main",{className:"main",children:M.jsx(BS,{})})]})}function Yb(t){const e=Hi();return kt()?M.jsx(M.Fragment,{children:t.children}):M.jsx(U0,{to:"/login",replace:!0,state:{from:e.pathname}})}function qb(){return M.jsxs(GS,{children:[M.jsx(qi,{path:"/login",element:M.jsx(SM,{})}),M.jsxs(qi,{element:M.jsx(Yb,{children:M.jsx($b,{})}),children:[M.jsx(qi,{path:"/",element:M.jsx(Wb,{})}),M.jsx(qi,{path:"/replay",element:M.jsx(Gb,{})}),M.jsx(qi,{path:"/admin",element:M.jsx(jb,{})}),M.jsx(qi,{path:"/dev",element:M.jsx(Xb,{})})]}),M.jsx(qi,{path:"*",element:M.jsx(U0,{to:"/",replace:!0})})]})}Yu.createRoot(document.getElementById("root")).render(M.jsx(Eg.StrictMode,{children:M.jsx(KS,{children:M.jsx(qb,{})})}));
