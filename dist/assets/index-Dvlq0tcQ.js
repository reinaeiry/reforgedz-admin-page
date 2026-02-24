function T_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function A_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _g={exports:{}},hc={},yg={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var va=Symbol.for("react.element"),b_=Symbol.for("react.portal"),C_=Symbol.for("react.fragment"),R_=Symbol.for("react.strict_mode"),P_=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),N_=Symbol.for("react.context"),I_=Symbol.for("react.forward_ref"),D_=Symbol.for("react.suspense"),U_=Symbol.for("react.memo"),F_=Symbol.for("react.lazy"),_h=Symbol.iterator;function O_(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sg=Object.assign,Mg={};function fo(t,e,n){this.props=t,this.context=e,this.refs=Mg,this.updater=n||xg}fo.prototype.isReactComponent={};fo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Eg(){}Eg.prototype=fo.prototype;function hd(t,e,n){this.props=t,this.context=e,this.refs=Mg,this.updater=n||xg}var pd=hd.prototype=new Eg;pd.constructor=hd;Sg(pd,fo.prototype);pd.isPureReactComponent=!0;var yh=Array.isArray,wg=Object.prototype.hasOwnProperty,md={current:null},Tg={key:!0,ref:!0,__self:!0,__source:!0};function Ag(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)wg.call(e,i)&&!Tg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:va,type:t,key:s,ref:o,props:r,_owner:md.current}}function k_(t,e){return{$$typeof:va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gd(t){return typeof t=="object"&&t!==null&&t.$$typeof===va}function z_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xh=/\/+/g;function kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z_(""+t.key):e.toString(36)}function yl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case va:case b_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+kc(o,0):i,yh(r)?(n="",t!=null&&(n=t.replace(xh,"$&/")+"/"),yl(r,e,n,"",function(c){return c})):r!=null&&(gd(r)&&(r=k_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(xh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",yh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+kc(s,a);o+=yl(s,e,n,l,r)}else if(l=O_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+kc(s,a++),o+=yl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ta(t,e,n){if(t==null)return t;var i=[],r=0;return yl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function B_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pn={current:null},xl={transition:null},H_={ReactCurrentDispatcher:Pn,ReactCurrentBatchConfig:xl,ReactCurrentOwner:md};function bg(){throw Error("act(...) is not supported in production builds of React.")}xt.Children={map:Ta,forEach:function(t,e,n){Ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ta(t,function(){e++}),e},toArray:function(t){return Ta(t,function(e){return e})||[]},only:function(t){if(!gd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};xt.Component=fo;xt.Fragment=C_;xt.Profiler=P_;xt.PureComponent=hd;xt.StrictMode=R_;xt.Suspense=D_;xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_;xt.act=bg;xt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Sg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=md.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)wg.call(e,l)&&!Tg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:va,type:t.type,key:r,ref:s,props:i,_owner:o}};xt.createContext=function(t){return t={$$typeof:N_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:L_,_context:t},t.Consumer=t};xt.createElement=Ag;xt.createFactory=function(t){var e=Ag.bind(null,t);return e.type=t,e};xt.createRef=function(){return{current:null}};xt.forwardRef=function(t){return{$$typeof:I_,render:t}};xt.isValidElement=gd;xt.lazy=function(t){return{$$typeof:F_,_payload:{_status:-1,_result:t},_init:B_}};xt.memo=function(t,e){return{$$typeof:U_,type:t,compare:e===void 0?null:e}};xt.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};xt.unstable_act=bg;xt.useCallback=function(t,e){return Pn.current.useCallback(t,e)};xt.useContext=function(t){return Pn.current.useContext(t)};xt.useDebugValue=function(){};xt.useDeferredValue=function(t){return Pn.current.useDeferredValue(t)};xt.useEffect=function(t,e){return Pn.current.useEffect(t,e)};xt.useId=function(){return Pn.current.useId()};xt.useImperativeHandle=function(t,e,n){return Pn.current.useImperativeHandle(t,e,n)};xt.useInsertionEffect=function(t,e){return Pn.current.useInsertionEffect(t,e)};xt.useLayoutEffect=function(t,e){return Pn.current.useLayoutEffect(t,e)};xt.useMemo=function(t,e){return Pn.current.useMemo(t,e)};xt.useReducer=function(t,e,n){return Pn.current.useReducer(t,e,n)};xt.useRef=function(t){return Pn.current.useRef(t)};xt.useState=function(t){return Pn.current.useState(t)};xt.useSyncExternalStore=function(t,e,n){return Pn.current.useSyncExternalStore(t,e,n)};xt.useTransition=function(){return Pn.current.useTransition()};xt.version="18.3.1";yg.exports=xt;var D=yg.exports;const Cg=A_(D),G_=T_({__proto__:null,default:Cg},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_=D,W_=Symbol.for("react.element"),j_=Symbol.for("react.fragment"),X_=Object.prototype.hasOwnProperty,$_=V_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y_={key:!0,ref:!0,__self:!0,__source:!0};function Rg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)X_.call(e,i)&&!Y_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:W_,type:t,key:s,ref:o,props:r,_owner:$_.current}}hc.Fragment=j_;hc.jsx=Rg;hc.jsxs=Rg;_g.exports=hc;var M=_g.exports,tf={},Pg={exports:{}},Xn={},Lg={exports:{}},Ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,$){var Z=H.length;H.push($);e:for(;0<Z;){var ae=Z-1>>>1,pe=H[ae];if(0<r(pe,$))H[ae]=$,H[Z]=pe,Z=ae;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var $=H[0],Z=H.pop();if(Z!==$){H[0]=Z;e:for(var ae=0,pe=H.length,qe=pe>>>1;ae<qe;){var ee=2*(ae+1)-1,ce=H[ee],Ae=ee+1,Ue=H[Ae];if(0>r(ce,Z))Ae<pe&&0>r(Ue,ce)?(H[ae]=Ue,H[Ae]=Z,ae=Ae):(H[ae]=ce,H[ee]=Z,ae=ee);else if(Ae<pe&&0>r(Ue,Z))H[ae]=Ue,H[Ae]=Z,ae=Ae;else break e}}return $}function r(H,$){var Z=H.sortIndex-$.sortIndex;return Z!==0?Z:H.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,g=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(H){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=H)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function S(H){if(y=!1,v(H),!_)if(n(l)!==null)_=!0,Q(P);else{var $=n(c);$!==null&&le(S,$.startTime-H)}}function P(H,$){_=!1,y&&(y=!1,u(G),G=-1),g=!0;var Z=h;try{for(v($),d=n(l);d!==null&&(!(d.expirationTime>$)||H&&!R());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,h=d.priorityLevel;var pe=ae(d.expirationTime<=$);$=t.unstable_now(),typeof pe=="function"?d.callback=pe:d===n(l)&&i(l),v($)}else i(l);d=n(l)}if(d!==null)var qe=!0;else{var ee=n(c);ee!==null&&le(S,ee.startTime-$),qe=!1}return qe}finally{d=null,h=Z,g=!1}}var C=!1,b=null,G=-1,ie=5,x=-1;function R(){return!(t.unstable_now()-x<ie)}function te(){if(b!==null){var H=t.unstable_now();x=H;var $=!0;try{$=b(!0,H)}finally{$?fe():(C=!1,b=null)}}else C=!1}var fe;if(typeof m=="function")fe=function(){m(te)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,ne=O.port2;O.port1.onmessage=te,fe=function(){ne.postMessage(null)}}else fe=function(){p(te,0)};function Q(H){b=H,C||(C=!0,fe())}function le(H,$){G=p(function(){H(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Q(P))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var Z=h;h=$;try{return H()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,$){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=h;h=H;try{return $()}finally{h=Z}},t.unstable_scheduleCallback=function(H,$,Z){var ae=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ae+Z:ae):Z=ae,H){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=Z+pe,H={id:f++,callback:$,priorityLevel:H,startTime:Z,expirationTime:pe,sortIndex:-1},Z>ae?(H.sortIndex=Z,e(c,H),n(l)===null&&H===n(c)&&(y?(u(G),G=-1):y=!0,le(S,Z-ae))):(H.sortIndex=pe,e(l,H),_||g||(_=!0,Q(P))),H},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(H){var $=h;return function(){var Z=h;h=$;try{return H.apply(this,arguments)}finally{h=Z}}}})(Ng);Lg.exports=Ng;var q_=Lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=D,jn=q_;function ye(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ig=new Set,Zo={};function ss(t,e){Qs(t,e),Qs(t+"Capture",e)}function Qs(t,e){for(Zo[t]=e,t=0;t<e.length;t++)Ig.add(e[t])}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nf=Object.prototype.hasOwnProperty,Z_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sh={},Mh={};function Q_(t){return nf.call(Mh,t)?!0:nf.call(Sh,t)?!1:Z_.test(t)?Mh[t]=!0:(Sh[t]=!0,!1)}function J_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ey(t,e,n,i){if(e===null||typeof e>"u"||J_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var gn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gn[t]=new Ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gn[e]=new Ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gn[t]=new Ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gn[t]=new Ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gn[t]=new Ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gn[t]=new Ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gn[t]=new Ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gn[t]=new Ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gn[t]=new Ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var vd=/[\-:]([a-z])/g;function _d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vd,_d);gn[e]=new Ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vd,_d);gn[e]=new Ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vd,_d);gn[e]=new Ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gn[t]=new Ln(t,1,!1,t.toLowerCase(),null,!1,!1)});gn.xlinkHref=new Ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gn[t]=new Ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function yd(t,e,n,i){var r=gn.hasOwnProperty(e)?gn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ey(e,n,r,i)&&(n=null),i||r===null?Q_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ji=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),Dg=Symbol.for("react.provider"),Ug=Symbol.for("react.context"),Sd=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),of=Symbol.for("react.suspense_list"),Md=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),Fg=Symbol.for("react.offscreen"),Eh=Symbol.iterator;function xo(t){return t===null||typeof t!="object"?null:(t=Eh&&t[Eh]||t["@@iterator"],typeof t=="function"?t:null)}var Vt=Object.assign,zc;function Oo(t){if(zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zc=e&&e[1]||""}return`
`+zc+t}var Bc=!1;function Hc(t,e){if(!t||Bc)return"";Bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function ty(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=Hc(t.type,!1),t;case 11:return t=Hc(t.type.render,!1),t;case 1:return t=Hc(t.type,!0),t;default:return""}}function af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Ps:return"Portal";case rf:return"Profiler";case xd:return"StrictMode";case sf:return"Suspense";case of:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ug:return(t.displayName||"Context")+".Consumer";case Dg:return(t._context.displayName||"Context")+".Provider";case Sd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Md:return e=t.displayName||null,e!==null?e:af(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return af(t(e))}catch{}}return null}function ny(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return af(e);case 8:return e===xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Og(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iy(t){var e=Og(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ba(t){t._valueTracker||(t._valueTracker=iy(t))}function kg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Og(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lf(t,e){var n=e.checked;return Vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zg(t,e){e=e.checked,e!=null&&yd(t,"checked",e,!1)}function cf(t,e){zg(t,e);var n=Tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&uf(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uf(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function Ws(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ff(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ye(91));return Vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ah(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ye(92));if(ko(n)){if(1<n.length)throw Error(ye(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function Bg(t,e){var n=Tr(e.value),i=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function bh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,Gg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ry=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(t){ry.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ho[e]=Ho[t]})});function Vg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ho.hasOwnProperty(t)&&Ho[t]?(""+e).trim():e+"px"}function Wg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var sy=Vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(t,e){if(e){if(sy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ye(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ye(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ye(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ye(62))}}function pf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mf=null;function Ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gf=null,js=null,Xs=null;function Ch(t){if(t=xa(t)){if(typeof gf!="function")throw Error(ye(280));var e=t.stateNode;e&&(e=_c(e),gf(t.stateNode,t.type,e))}}function jg(t){js?Xs?Xs.push(t):Xs=[t]:js=t}function Xg(){if(js){var t=js,e=Xs;if(Xs=js=null,Ch(t),e)for(t=0;t<e.length;t++)Ch(e[t])}}function $g(t,e){return t(e)}function Yg(){}var Gc=!1;function qg(t,e,n){if(Gc)return t(e,n);Gc=!0;try{return $g(t,e,n)}finally{Gc=!1,(js!==null||Xs!==null)&&(Yg(),Xg())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var i=_c(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ye(231,e,typeof n));return n}var vf=!1;if(Bi)try{var So={};Object.defineProperty(So,"passive",{get:function(){vf=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{vf=!1}function oy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Go=!1,Dl=null,Ul=!1,_f=null,ay={onError:function(t){Go=!0,Dl=t}};function ly(t,e,n,i,r,s,o,a,l){Go=!1,Dl=null,oy.apply(ay,arguments)}function cy(t,e,n,i,r,s,o,a,l){if(ly.apply(this,arguments),Go){if(Go){var c=Dl;Go=!1,Dl=null}else throw Error(ye(198));Ul||(Ul=!0,_f=c)}}function os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Kg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rh(t){if(os(t)!==t)throw Error(ye(188))}function uy(t){var e=t.alternate;if(!e){if(e=os(t),e===null)throw Error(ye(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rh(r),t;if(s===i)return Rh(r),e;s=s.sibling}throw Error(ye(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ye(189))}}if(n.alternate!==i)throw Error(ye(190))}if(n.tag!==3)throw Error(ye(188));return n.stateNode.current===n?t:e}function Zg(t){return t=uy(t),t!==null?Qg(t):null}function Qg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qg(t);if(e!==null)return e;t=t.sibling}return null}var Jg=jn.unstable_scheduleCallback,Ph=jn.unstable_cancelCallback,fy=jn.unstable_shouldYield,dy=jn.unstable_requestPaint,$t=jn.unstable_now,hy=jn.unstable_getCurrentPriorityLevel,wd=jn.unstable_ImmediatePriority,ev=jn.unstable_UserBlockingPriority,Fl=jn.unstable_NormalPriority,py=jn.unstable_LowPriority,tv=jn.unstable_IdlePriority,pc=null,Ti=null;function my(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(pc,t,void 0,(t.current.flags&128)===128)}catch{}}var mi=Math.clz32?Math.clz32:_y,gy=Math.log,vy=Math.LN2;function _y(t){return t>>>=0,t===0?32:31-(gy(t)/vy|0)|0}var Ra=64,Pa=4194304;function zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=zo(a):(s&=o,s!==0&&(i=zo(s)))}else o=n&~r,o!==0?i=zo(o):s!==0&&(i=zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-mi(e),r=1<<n,i|=t[n],e&=~r;return i}function yy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=yy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nv(){var t=Ra;return Ra<<=1,!(Ra&4194240)&&(Ra=64),t}function Vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mi(e),t[e]=n}function Sy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-mi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-mi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Rt=0;function iv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rv,Ad,sv,ov,av,xf=!1,La=[],dr=null,hr=null,pr=null,ea=new Map,ta=new Map,or=[],My="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lh(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function Mo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xa(e),e!==null&&Ad(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ey(t,e,n,i,r){switch(e){case"focusin":return dr=Mo(dr,t,e,n,i,r),!0;case"dragenter":return hr=Mo(hr,t,e,n,i,r),!0;case"mouseover":return pr=Mo(pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ea.set(s,Mo(ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ta.set(s,Mo(ta.get(s)||null,t,e,n,i,r)),!0}return!1}function lv(t){var e=Gr(t.target);if(e!==null){var n=os(e);if(n!==null){if(e=n.tag,e===13){if(e=Kg(n),e!==null){t.blockedOn=e,av(t.priority,function(){sv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);mf=i,n.target.dispatchEvent(i),mf=null}else return e=xa(n),e!==null&&Ad(e),t.blockedOn=n,!1;e.shift()}return!0}function Nh(t,e,n){Sl(t)&&n.delete(e)}function wy(){xf=!1,dr!==null&&Sl(dr)&&(dr=null),hr!==null&&Sl(hr)&&(hr=null),pr!==null&&Sl(pr)&&(pr=null),ea.forEach(Nh),ta.forEach(Nh)}function Eo(t,e){t.blockedOn===e&&(t.blockedOn=null,xf||(xf=!0,jn.unstable_scheduleCallback(jn.unstable_NormalPriority,wy)))}function na(t){function e(r){return Eo(r,t)}if(0<La.length){Eo(La[0],t);for(var n=1;n<La.length;n++){var i=La[n];i.blockedOn===t&&(i.blockedOn=null)}}for(dr!==null&&Eo(dr,t),hr!==null&&Eo(hr,t),pr!==null&&Eo(pr,t),ea.forEach(e),ta.forEach(e),n=0;n<or.length;n++)i=or[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)lv(n),n.blockedOn===null&&or.shift()}var $s=ji.ReactCurrentBatchConfig,kl=!0;function Ty(t,e,n,i){var r=Rt,s=$s.transition;$s.transition=null;try{Rt=1,bd(t,e,n,i)}finally{Rt=r,$s.transition=s}}function Ay(t,e,n,i){var r=Rt,s=$s.transition;$s.transition=null;try{Rt=4,bd(t,e,n,i)}finally{Rt=r,$s.transition=s}}function bd(t,e,n,i){if(kl){var r=Sf(t,e,n,i);if(r===null)Jc(t,e,i,zl,n),Lh(t,i);else if(Ey(r,t,e,n,i))i.stopPropagation();else if(Lh(t,i),e&4&&-1<My.indexOf(t)){for(;r!==null;){var s=xa(r);if(s!==null&&rv(s),s=Sf(t,e,n,i),s===null&&Jc(t,e,i,zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Jc(t,e,i,null,n)}}var zl=null;function Sf(t,e,n,i){if(zl=null,t=Ed(i),t=Gr(t),t!==null)if(e=os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Kg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function cv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hy()){case wd:return 1;case ev:return 4;case Fl:case py:return 16;case tv:return 536870912;default:return 16}default:return 16}}var lr=null,Cd=null,Ml=null;function uv(){if(Ml)return Ml;var t,e=Cd,n=e.length,i,r="value"in lr?lr.value:lr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ml=r.slice(t,1<i?1-i:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function Ih(){return!1}function $n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Na:Ih,this.isPropagationStopped=Ih,this}return Vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rd=$n(ho),ya=Vt({},ho,{view:0,detail:0}),by=$n(ya),Wc,jc,wo,mc=Vt({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(Wc=t.screenX-wo.screenX,jc=t.screenY-wo.screenY):jc=Wc=0,wo=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Dh=$n(mc),Cy=Vt({},mc,{dataTransfer:0}),Ry=$n(Cy),Py=Vt({},ya,{relatedTarget:0}),Xc=$n(Py),Ly=Vt({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=$n(Ly),Iy=Vt({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dy=$n(Iy),Uy=Vt({},ho,{data:0}),Uh=$n(Uy),Fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ky[t])?!!e[t]:!1}function Pd(){return zy}var By=Vt({},ya,{key:function(t){if(t.key){var e=Fy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Oy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pd,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hy=$n(By),Gy=Vt({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fh=$n(Gy),Vy=Vt({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pd}),Wy=$n(Vy),jy=Vt({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xy=$n(jy),$y=Vt({},mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yy=$n($y),qy=[9,13,27,32],Ld=Bi&&"CompositionEvent"in window,Vo=null;Bi&&"documentMode"in document&&(Vo=document.documentMode);var Ky=Bi&&"TextEvent"in window&&!Vo,fv=Bi&&(!Ld||Vo&&8<Vo&&11>=Vo),Oh=" ",kh=!1;function dv(t,e){switch(t){case"keyup":return qy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function Zy(t,e){switch(t){case"compositionend":return hv(e);case"keypress":return e.which!==32?null:(kh=!0,Oh);case"textInput":return t=e.data,t===Oh&&kh?null:t;default:return null}}function Qy(t,e){if(Ns)return t==="compositionend"||!Ld&&dv(t,e)?(t=uv(),Ml=Cd=lr=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fv&&e.locale!=="ko"?null:e.data;default:return null}}var Jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jy[t.type]:e==="textarea"}function pv(t,e,n,i){jg(i),e=Bl(e,"onChange"),0<e.length&&(n=new Rd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Wo=null,ia=null;function ex(t){Tv(t,0)}function gc(t){var e=Us(t);if(kg(e))return t}function tx(t,e){if(t==="change")return e}var mv=!1;if(Bi){var $c;if(Bi){var Yc="oninput"in document;if(!Yc){var Bh=document.createElement("div");Bh.setAttribute("oninput","return;"),Yc=typeof Bh.oninput=="function"}$c=Yc}else $c=!1;mv=$c&&(!document.documentMode||9<document.documentMode)}function Hh(){Wo&&(Wo.detachEvent("onpropertychange",gv),ia=Wo=null)}function gv(t){if(t.propertyName==="value"&&gc(ia)){var e=[];pv(e,ia,t,Ed(t)),qg(ex,e)}}function nx(t,e,n){t==="focusin"?(Hh(),Wo=e,ia=n,Wo.attachEvent("onpropertychange",gv)):t==="focusout"&&Hh()}function ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gc(ia)}function rx(t,e){if(t==="click")return gc(e)}function sx(t,e){if(t==="input"||t==="change")return gc(e)}function ox(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vi=typeof Object.is=="function"?Object.is:ox;function ra(t,e){if(vi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nf.call(e,r)||!vi(t[r],e[r]))return!1}return!0}function Gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,e){var n=Gh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gh(n)}}function vv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _v(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function Nd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ax(t){var e=_v(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vv(n.ownerDocument.documentElement,n)){if(i!==null&&Nd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Vh(n,s);var o=Vh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lx=Bi&&"documentMode"in document&&11>=document.documentMode,Is=null,Mf=null,jo=null,Ef=!1;function Wh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||Is==null||Is!==Il(i)||(i=Is,"selectionStart"in i&&Nd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&ra(jo,i)||(jo=i,i=Bl(Mf,"onSelect"),0<i.length&&(e=new Rd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Is)))}function Ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ds={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionend:Ia("Transition","TransitionEnd")},qc={},yv={};Bi&&(yv=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function vc(t){if(qc[t])return qc[t];if(!Ds[t])return t;var e=Ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yv)return qc[t]=e[n];return t}var xv=vc("animationend"),Sv=vc("animationiteration"),Mv=vc("animationstart"),Ev=vc("transitionend"),wv=new Map,jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){wv.set(t,e),ss(e,[t])}for(var Kc=0;Kc<jh.length;Kc++){var Zc=jh[Kc],cx=Zc.toLowerCase(),ux=Zc[0].toUpperCase()+Zc.slice(1);Rr(cx,"on"+ux)}Rr(xv,"onAnimationEnd");Rr(Sv,"onAnimationIteration");Rr(Mv,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(Ev,"onTransitionEnd");Qs("onMouseEnter",["mouseout","mouseover"]);Qs("onMouseLeave",["mouseout","mouseover"]);Qs("onPointerEnter",["pointerout","pointerover"]);Qs("onPointerLeave",["pointerout","pointerover"]);ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function Xh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,cy(i,e,void 0,t),t.currentTarget=null}function Tv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Xh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Xh(r,a,c),s=l}}}if(Ul)throw t=_f,Ul=!1,_f=null,t}function Ut(t,e){var n=e[Cf];n===void 0&&(n=e[Cf]=new Set);var i=t+"__bubble";n.has(i)||(Av(e,t,2,!1),n.add(i))}function Qc(t,e,n){var i=0;e&&(i|=4),Av(n,t,i,e)}var Da="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[Da]){t[Da]=!0,Ig.forEach(function(n){n!=="selectionchange"&&(fx.has(n)||Qc(n,!1,t),Qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Da]||(e[Da]=!0,Qc("selectionchange",!1,e))}}function Av(t,e,n,i){switch(cv(e)){case 1:var r=Ty;break;case 4:r=Ay;break;default:r=bd}n=r.bind(null,e,n,t),r=void 0,!vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Jc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}qg(function(){var c=s,f=Ed(n),d=[];e:{var h=wv.get(t);if(h!==void 0){var g=Rd,_=t;switch(t){case"keypress":if(El(n)===0)break e;case"keydown":case"keyup":g=Hy;break;case"focusin":_="focus",g=Xc;break;case"focusout":_="blur",g=Xc;break;case"beforeblur":case"afterblur":g=Xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Wy;break;case xv:case Sv:case Mv:g=Ny;break;case Ev:g=Xy;break;case"scroll":g=by;break;case"wheel":g=Yy;break;case"copy":case"cut":case"paste":g=Dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fh}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=Jo(m,u),S!=null&&y.push(oa(m,S,v)))),p)break;m=m.return}0<y.length&&(h=new g(h,_,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==mf&&(_=n.relatedTarget||n.fromElement)&&(Gr(_)||_[Hi]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?Gr(_):null,_!==null&&(p=os(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(y=Dh,S="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Fh,S="onPointerLeave",u="onPointerEnter",m="pointer"),p=g==null?h:Us(g),v=_==null?h:Us(_),h=new y(S,m+"leave",g,n,f),h.target=p,h.relatedTarget=v,S=null,Gr(f)===c&&(y=new y(u,m+"enter",_,n,f),y.target=v,y.relatedTarget=p,S=y),p=S,g&&_)t:{for(y=g,u=_,m=0,v=y;v;v=ls(v))m++;for(v=0,S=u;S;S=ls(S))v++;for(;0<m-v;)y=ls(y),m--;for(;0<v-m;)u=ls(u),v--;for(;m--;){if(y===u||u!==null&&y===u.alternate)break t;y=ls(y),u=ls(u)}y=null}else y=null;g!==null&&$h(d,h,g,y,!1),_!==null&&p!==null&&$h(d,p,_,y,!0)}}e:{if(h=c?Us(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var P=tx;else if(zh(h))if(mv)P=sx;else{P=ix;var C=nx}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=rx);if(P&&(P=P(t,c))){pv(d,P,n,f);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&uf(h,"number",h.value)}switch(C=c?Us(c):window,t){case"focusin":(zh(C)||C.contentEditable==="true")&&(Is=C,Mf=c,jo=null);break;case"focusout":jo=Mf=Is=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,Wh(d,n,f);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":Wh(d,n,f)}var b;if(Ld)e:{switch(t){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Ns?dv(t,n)&&(G="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(fv&&n.locale!=="ko"&&(Ns||G!=="onCompositionStart"?G==="onCompositionEnd"&&Ns&&(b=uv()):(lr=f,Cd="value"in lr?lr.value:lr.textContent,Ns=!0)),C=Bl(c,G),0<C.length&&(G=new Uh(G,t,null,n,f),d.push({event:G,listeners:C}),b?G.data=b:(b=hv(n),b!==null&&(G.data=b)))),(b=Ky?Zy(t,n):Qy(t,n))&&(c=Bl(c,"onBeforeInput"),0<c.length&&(f=new Uh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=b))}Tv(d,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Jo(t,n),s!=null&&i.unshift(oa(t,s,r)),s=Jo(t,e),s!=null&&i.push(oa(t,s,r))),t=t.return}return i}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $h(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Jo(n,s),l!=null&&o.unshift(oa(n,l,a))):r||(l=Jo(n,s),l!=null&&o.push(oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dx=/\r\n?/g,hx=/\u0000|\uFFFD/g;function Yh(t){return(typeof t=="string"?t:""+t).replace(dx,`
`).replace(hx,"")}function Ua(t,e,n){if(e=Yh(e),Yh(t)!==e&&n)throw Error(ye(425))}function Hl(){}var wf=null,Tf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(t){return qh.resolve(null).then(t).catch(gx)}:bf;function gx(t){setTimeout(function(){throw t})}function eu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);na(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),Ei="__reactFiber$"+po,aa="__reactProps$"+po,Hi="__reactContainer$"+po,Cf="__reactEvents$"+po,vx="__reactListeners$"+po,_x="__reactHandles$"+po;function Gr(t){var e=t[Ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hi]||n[Ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kh(t);t!==null;){if(n=t[Ei])return n;t=Kh(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[Ei]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ye(33))}function _c(t){return t[aa]||null}var Rf=[],Fs=-1;function Pr(t){return{current:t}}function Ot(t){0>Fs||(t.current=Rf[Fs],Rf[Fs]=null,Fs--)}function It(t,e){Fs++,Rf[Fs]=t.current,t.current=e}var Ar={},En=Pr(Ar),Fn=Pr(!1),Qr=Ar;function Js(t,e){var n=t.type.contextTypes;if(!n)return Ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function On(t){return t=t.childContextTypes,t!=null}function Gl(){Ot(Fn),Ot(En)}function Zh(t,e,n){if(En.current!==Ar)throw Error(ye(168));It(En,e),It(Fn,n)}function bv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ye(108,ny(t)||"Unknown",r));return Vt({},n,i)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,Qr=En.current,It(En,t),It(Fn,Fn.current),!0}function Qh(t,e,n){var i=t.stateNode;if(!i)throw Error(ye(169));n?(t=bv(t,e,Qr),i.__reactInternalMemoizedMergedChildContext=t,Ot(Fn),Ot(En),It(En,t)):Ot(Fn),It(Fn,n)}var Di=null,yc=!1,tu=!1;function Cv(t){Di===null?Di=[t]:Di.push(t)}function yx(t){yc=!0,Cv(t)}function Lr(){if(!tu&&Di!==null){tu=!0;var t=0,e=Rt;try{var n=Di;for(Rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Di=null,yc=!1}catch(r){throw Di!==null&&(Di=Di.slice(t+1)),Jg(wd,Lr),r}finally{Rt=e,tu=!1}}return null}var Os=[],ks=0,Wl=null,jl=0,qn=[],Kn=0,Jr=null,Fi=1,Oi="";function Fr(t,e){Os[ks++]=jl,Os[ks++]=Wl,Wl=t,jl=e}function Rv(t,e,n){qn[Kn++]=Fi,qn[Kn++]=Oi,qn[Kn++]=Jr,Jr=t;var i=Fi;t=Oi;var r=32-mi(i)-1;i&=~(1<<r),n+=1;var s=32-mi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fi=1<<32-mi(e)+r|n<<r|i,Oi=s+t}else Fi=1<<s|n<<r|i,Oi=t}function Id(t){t.return!==null&&(Fr(t,1),Rv(t,1,0))}function Dd(t){for(;t===Wl;)Wl=Os[--ks],Os[ks]=null,jl=Os[--ks],Os[ks]=null;for(;t===Jr;)Jr=qn[--Kn],qn[Kn]=null,Oi=qn[--Kn],qn[Kn]=null,Fi=qn[--Kn],qn[Kn]=null}var Wn=null,Vn=null,zt=!1,fi=null;function Pv(t,e){var n=ei(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wn=t,Vn=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wn=t,Vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Fi,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ei(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wn=t,Vn=null,!0):!1;default:return!1}}function Pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lf(t){if(zt){var e=Vn;if(e){var n=e;if(!Jh(t,e)){if(Pf(t))throw Error(ye(418));e=mr(n.nextSibling);var i=Wn;e&&Jh(t,e)?Pv(i,n):(t.flags=t.flags&-4097|2,zt=!1,Wn=t)}}else{if(Pf(t))throw Error(ye(418));t.flags=t.flags&-4097|2,zt=!1,Wn=t}}}function ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function Fa(t){if(t!==Wn)return!1;if(!zt)return ep(t),zt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=Vn)){if(Pf(t))throw Lv(),Error(ye(418));for(;e;)Pv(t,e),e=mr(e.nextSibling)}if(ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ye(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vn=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vn=null}}else Vn=Wn?mr(t.stateNode.nextSibling):null;return!0}function Lv(){for(var t=Vn;t;)t=mr(t.nextSibling)}function eo(){Vn=Wn=null,zt=!1}function Ud(t){fi===null?fi=[t]:fi.push(t)}var xx=ji.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ye(309));var i=n.stateNode}if(!i)throw Error(ye(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ye(284));if(!n._owner)throw Error(ye(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(ye(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tp(t){var e=t._init;return e(t._payload)}function Nv(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=yr(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,S){return m===null||m.tag!==6?(m=lu(v,u.mode,S),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,S){var P=v.type;return P===Ls?f(u,m,v.props.children,S,v.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===rr&&tp(P)===m.type)?(S=r(m,v.props),S.ref=To(u,m,v),S.return=u,S):(S=Pl(v.type,v.key,v.props,null,u.mode,S),S.ref=To(u,m,v),S.return=u,S)}function c(u,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=cu(v,u.mode,S),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function f(u,m,v,S,P){return m===null||m.tag!==7?(m=$r(v,u.mode,S,P),m.return=u,m):(m=r(m,v),m.return=u,m)}function d(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=lu(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Aa:return v=Pl(m.type,m.key,m.props,null,u.mode,v),v.ref=To(u,null,m),v.return=u,v;case Ps:return m=cu(m,u.mode,v),m.return=u,m;case rr:var S=m._init;return d(u,S(m._payload),v)}if(ko(m)||xo(m))return m=$r(m,u.mode,v,null),m.return=u,m;Oa(u,m)}return null}function h(u,m,v,S){var P=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:return v.key===P?l(u,m,v,S):null;case Ps:return v.key===P?c(u,m,v,S):null;case rr:return P=v._init,h(u,m,P(v._payload),S)}if(ko(v)||xo(v))return P!==null?null:f(u,m,v,S,null);Oa(u,v)}return null}function g(u,m,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(m,u,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Aa:return u=u.get(S.key===null?v:S.key)||null,l(m,u,S,P);case Ps:return u=u.get(S.key===null?v:S.key)||null,c(m,u,S,P);case rr:var C=S._init;return g(u,m,v,C(S._payload),P)}if(ko(S)||xo(S))return u=u.get(v)||null,f(m,u,S,P,null);Oa(m,S)}return null}function _(u,m,v,S){for(var P=null,C=null,b=m,G=m=0,ie=null;b!==null&&G<v.length;G++){b.index>G?(ie=b,b=null):ie=b.sibling;var x=h(u,b,v[G],S);if(x===null){b===null&&(b=ie);break}t&&b&&x.alternate===null&&e(u,b),m=s(x,m,G),C===null?P=x:C.sibling=x,C=x,b=ie}if(G===v.length)return n(u,b),zt&&Fr(u,G),P;if(b===null){for(;G<v.length;G++)b=d(u,v[G],S),b!==null&&(m=s(b,m,G),C===null?P=b:C.sibling=b,C=b);return zt&&Fr(u,G),P}for(b=i(u,b);G<v.length;G++)ie=g(b,u,G,v[G],S),ie!==null&&(t&&ie.alternate!==null&&b.delete(ie.key===null?G:ie.key),m=s(ie,m,G),C===null?P=ie:C.sibling=ie,C=ie);return t&&b.forEach(function(R){return e(u,R)}),zt&&Fr(u,G),P}function y(u,m,v,S){var P=xo(v);if(typeof P!="function")throw Error(ye(150));if(v=P.call(v),v==null)throw Error(ye(151));for(var C=P=null,b=m,G=m=0,ie=null,x=v.next();b!==null&&!x.done;G++,x=v.next()){b.index>G?(ie=b,b=null):ie=b.sibling;var R=h(u,b,x.value,S);if(R===null){b===null&&(b=ie);break}t&&b&&R.alternate===null&&e(u,b),m=s(R,m,G),C===null?P=R:C.sibling=R,C=R,b=ie}if(x.done)return n(u,b),zt&&Fr(u,G),P;if(b===null){for(;!x.done;G++,x=v.next())x=d(u,x.value,S),x!==null&&(m=s(x,m,G),C===null?P=x:C.sibling=x,C=x);return zt&&Fr(u,G),P}for(b=i(u,b);!x.done;G++,x=v.next())x=g(b,u,G,x.value,S),x!==null&&(t&&x.alternate!==null&&b.delete(x.key===null?G:x.key),m=s(x,m,G),C===null?P=x:C.sibling=x,C=x);return t&&b.forEach(function(te){return e(u,te)}),zt&&Fr(u,G),P}function p(u,m,v,S){if(typeof v=="object"&&v!==null&&v.type===Ls&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:e:{for(var P=v.key,C=m;C!==null;){if(C.key===P){if(P=v.type,P===Ls){if(C.tag===7){n(u,C.sibling),m=r(C,v.props.children),m.return=u,u=m;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===rr&&tp(P)===C.type){n(u,C.sibling),m=r(C,v.props),m.ref=To(u,C,v),m.return=u,u=m;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===Ls?(m=$r(v.props.children,u.mode,S,v.key),m.return=u,u=m):(S=Pl(v.type,v.key,v.props,null,u.mode,S),S.ref=To(u,m,v),S.return=u,u=S)}return o(u);case Ps:e:{for(C=v.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=cu(v,u.mode,S),m.return=u,u=m}return o(u);case rr:return C=v._init,p(u,m,C(v._payload),S)}if(ko(v))return _(u,m,v,S);if(xo(v))return y(u,m,v,S);Oa(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=lu(v,u.mode,S),m.return=u,u=m),o(u)):n(u,m)}return p}var to=Nv(!0),Iv=Nv(!1),Xl=Pr(null),$l=null,zs=null,Fd=null;function Od(){Fd=zs=$l=null}function kd(t){var e=Xl.current;Ot(Xl),t._currentValue=e}function Nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){$l=t,Fd=zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Un=!0),t.firstContext=null)}function ii(t){var e=t._currentValue;if(Fd!==t)if(t={context:t,memoizedValue:e,next:null},zs===null){if($l===null)throw Error(ye(308));zs=t,$l.dependencies={lanes:0,firstContext:t}}else zs=zs.next=t;return e}var Vr=null;function zd(t){Vr===null?Vr=[t]:Vr.push(t)}function Dv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,zd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Gi(t,i)}function Gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function Bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gi(t,n)}return r=i.interleaved,r===null?(e.next=e,zd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gi(t,n)}function wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Td(t,n)}}function np(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,i){var r=t.updateQueue;sr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(g,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,d,h):_,h==null)break e;d=Vt({},d,h);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,l=d):f=f.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=d}}function ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ye(191,r));r.call(i)}}}var Sa={},Ai=Pr(Sa),la=Pr(Sa),ca=Pr(Sa);function Wr(t){if(t===Sa)throw Error(ye(174));return t}function Hd(t,e){switch(It(ca,e),It(la,t),It(Ai,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=df(e,t)}Ot(Ai),It(Ai,e)}function no(){Ot(Ai),Ot(la),Ot(ca)}function Fv(t){Wr(ca.current);var e=Wr(Ai.current),n=df(e,t.type);e!==n&&(It(la,t),It(Ai,n))}function Gd(t){la.current===t&&(Ot(Ai),Ot(la))}var Bt=Pr(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nu=[];function Vd(){for(var t=0;t<nu.length;t++)nu[t]._workInProgressVersionPrimary=null;nu.length=0}var Tl=ji.ReactCurrentDispatcher,iu=ji.ReactCurrentBatchConfig,es=0,Ht=null,Jt=null,on=null,Kl=!1,Xo=!1,ua=0,Sx=0;function _n(){throw Error(ye(321))}function Wd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vi(t[n],e[n]))return!1;return!0}function jd(t,e,n,i,r,s){if(es=s,Ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tl.current=t===null||t.memoizedState===null?Tx:Ax,t=n(i,r),Xo){s=0;do{if(Xo=!1,ua=0,25<=s)throw Error(ye(301));s+=1,on=Jt=null,e.updateQueue=null,Tl.current=bx,t=n(i,r)}while(Xo)}if(Tl.current=Zl,e=Jt!==null&&Jt.next!==null,es=0,on=Jt=Ht=null,Kl=!1,e)throw Error(ye(300));return t}function Xd(){var t=ua!==0;return ua=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Ht.memoizedState=on=t:on=on.next=t,on}function ri(){if(Jt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var e=on===null?Ht.memoizedState:on.next;if(e!==null)on=e,Jt=t;else{if(t===null)throw Error(ye(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},on===null?Ht.memoizedState=on=t:on=on.next=t}return on}function fa(t,e){return typeof e=="function"?e(t):e}function ru(t){var e=ri(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=Jt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((es&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ht.lanes|=f,ts|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,vi(i,e.memoizedState)||(Un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ht.lanes|=s,ts|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function su(t){var e=ri(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);vi(s,e.memoizedState)||(Un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ov(){}function kv(t,e){var n=Ht,i=ri(),r=e(),s=!vi(i.memoizedState,r);if(s&&(i.memoizedState=r,Un=!0),i=i.queue,$d(Hv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||on!==null&&on.memoizedState.tag&1){if(n.flags|=2048,da(9,Bv.bind(null,n,i,r,e),void 0,null),ln===null)throw Error(ye(349));es&30||zv(n,e,r)}return r}function zv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bv(t,e,n,i){e.value=n,e.getSnapshot=i,Gv(e)&&Vv(t)}function Hv(t,e,n){return n(function(){Gv(e)&&Vv(t)})}function Gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vi(t,n)}catch{return!0}}function Vv(t){var e=Gi(t,1);e!==null&&gi(e,t,1,-1)}function rp(t){var e=yi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=wx.bind(null,Ht,t),[e.memoizedState,t]}function da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Wv(){return ri().memoizedState}function Al(t,e,n,i){var r=yi();Ht.flags|=t,r.memoizedState=da(1|e,n,void 0,i===void 0?null:i)}function xc(t,e,n,i){var r=ri();i=i===void 0?null:i;var s=void 0;if(Jt!==null){var o=Jt.memoizedState;if(s=o.destroy,i!==null&&Wd(i,o.deps)){r.memoizedState=da(e,n,s,i);return}}Ht.flags|=t,r.memoizedState=da(1|e,n,s,i)}function sp(t,e){return Al(8390656,8,t,e)}function $d(t,e){return xc(2048,8,t,e)}function jv(t,e){return xc(4,2,t,e)}function Xv(t,e){return xc(4,4,t,e)}function $v(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yv(t,e,n){return n=n!=null?n.concat([t]):null,xc(4,4,$v.bind(null,e,t),n)}function Yd(){}function qv(t,e){var n=ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Kv(t,e){var n=ri();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Zv(t,e,n){return es&21?(vi(n,e)||(n=nv(),Ht.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Un=!0),t.memoizedState=n)}function Mx(t,e){var n=Rt;Rt=n!==0&&4>n?n:4,t(!0);var i=iu.transition;iu.transition={};try{t(!1),e()}finally{Rt=n,iu.transition=i}}function Qv(){return ri().memoizedState}function Ex(t,e,n){var i=_r(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Jv(t))e0(e,n);else if(n=Dv(t,e,n,i),n!==null){var r=Cn();gi(n,t,i,r),t0(n,e,i)}}function wx(t,e,n){var i=_r(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jv(t))e0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,vi(a,o)){var l=e.interleaved;l===null?(r.next=r,zd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Dv(t,e,r,i),n!==null&&(r=Cn(),gi(n,t,i,r),t0(n,e,i))}}function Jv(t){var e=t.alternate;return t===Ht||e!==null&&e===Ht}function e0(t,e){Xo=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function t0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Td(t,n)}}var Zl={readContext:ii,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},Tx={readContext:ii,useCallback:function(t,e){return yi().memoizedState=[t,e===void 0?null:e],t},useContext:ii,useEffect:sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Al(4194308,4,$v.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Al(4194308,4,t,e)},useInsertionEffect:function(t,e){return Al(4,2,t,e)},useMemo:function(t,e){var n=yi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=yi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ex.bind(null,Ht,t),[i.memoizedState,t]},useRef:function(t){var e=yi();return t={current:t},e.memoizedState=t},useState:rp,useDebugValue:Yd,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=rp(!1),e=t[0];return t=Mx.bind(null,t[1]),yi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ht,r=yi();if(zt){if(n===void 0)throw Error(ye(407));n=n()}else{if(n=e(),ln===null)throw Error(ye(349));es&30||zv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,sp(Hv.bind(null,i,s,t),[t]),i.flags|=2048,da(9,Bv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=yi(),e=ln.identifierPrefix;if(zt){var n=Oi,i=Fi;n=(i&~(1<<32-mi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Sx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ax={readContext:ii,useCallback:qv,useContext:ii,useEffect:$d,useImperativeHandle:Yv,useInsertionEffect:jv,useLayoutEffect:Xv,useMemo:Kv,useReducer:ru,useRef:Wv,useState:function(){return ru(fa)},useDebugValue:Yd,useDeferredValue:function(t){var e=ri();return Zv(e,Jt.memoizedState,t)},useTransition:function(){var t=ru(fa)[0],e=ri().memoizedState;return[t,e]},useMutableSource:Ov,useSyncExternalStore:kv,useId:Qv,unstable_isNewReconciler:!1},bx={readContext:ii,useCallback:qv,useContext:ii,useEffect:$d,useImperativeHandle:Yv,useInsertionEffect:jv,useLayoutEffect:Xv,useMemo:Kv,useReducer:su,useRef:Wv,useState:function(){return su(fa)},useDebugValue:Yd,useDeferredValue:function(t){var e=ri();return Jt===null?e.memoizedState=t:Zv(e,Jt.memoizedState,t)},useTransition:function(){var t=su(fa)[0],e=ri().memoizedState;return[t,e]},useMutableSource:Ov,useSyncExternalStore:kv,useId:Qv,unstable_isNewReconciler:!1};function ci(t,e){if(t&&t.defaultProps){e=Vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function If(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Cn(),r=_r(t),s=zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(gi(e,t,r,i),wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Cn(),r=_r(t),s=zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(gi(e,t,r,i),wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Cn(),i=_r(t),r=zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=gr(t,r,i),e!==null&&(gi(e,t,i,n),wl(e,t,i))}};function op(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,i)||!ra(r,s):!0}function n0(t,e,n){var i=!1,r=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=ii(s):(r=On(e)?Qr:En.current,i=e.contextTypes,s=(i=i!=null)?Js(t,r):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ap(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function Df(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Bd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ii(s):(s=On(e)?Qr:En.current,r.context=Js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(If(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sc.enqueueReplaceState(r,r.state,null),Yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function io(t,e){try{var n="",i=e;do n+=ty(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cx=typeof WeakMap=="function"?WeakMap:Map;function i0(t,e,n){n=zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Jl||(Jl=!0,jf=i),Uf(t,e)},n}function r0(t,e,n){n=zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uf(t,e),typeof i!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function lp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Cx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Gx.bind(null,t,e,n),e.then(t,t))}function cp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zi(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var Rx=ji.ReactCurrentOwner,Un=!1;function An(t,e,n,i){e.child=t===null?Iv(e,null,n,i):to(e,t.child,n,i)}function fp(t,e,n,i,r){n=n.render;var s=e.ref;return Ys(e,r),i=jd(t,e,n,i,s,r),n=Xd(),t!==null&&!Un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(zt&&n&&Id(e),e.flags|=1,An(t,e,i,r),e.child)}function dp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!nh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,s0(t,e,s,i,r)):(t=Pl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,i)&&t.ref===e.ref)return Vi(t,e,r)}return e.flags|=1,t=yr(s,i),t.ref=e.ref,t.return=e,e.child=t}function s0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ra(s,i)&&t.ref===e.ref)if(Un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Un=!0);else return e.lanes=t.lanes,Vi(t,e,r)}return Ff(t,e,n,i,r)}function o0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Hs,Gn),Gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,It(Hs,Gn),Gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,It(Hs,Gn),Gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,It(Hs,Gn),Gn|=i;return An(t,e,r,n),e.child}function a0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ff(t,e,n,i,r){var s=On(n)?Qr:En.current;return s=Js(e,s),Ys(e,r),n=jd(t,e,n,i,s,r),i=Xd(),t!==null&&!Un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(zt&&i&&Id(e),e.flags|=1,An(t,e,n,r),e.child)}function hp(t,e,n,i,r){if(On(n)){var s=!0;Vl(e)}else s=!1;if(Ys(e,r),e.stateNode===null)bl(t,e),n0(e,n,i),Df(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ii(c):(c=On(n)?Qr:En.current,c=Js(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ap(e,o,i,c),sr=!1;var h=e.memoizedState;o.state=h,Yl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Fn.current||sr?(typeof f=="function"&&(If(e,n,f,i),l=e.memoizedState),(a=sr||op(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Uv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ci(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ii(l):(l=On(n)?Qr:En.current,l=Js(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&ap(e,o,i,l),sr=!1,h=e.memoizedState,o.state=h,Yl(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||Fn.current||sr?(typeof g=="function"&&(If(e,n,g,i),_=e.memoizedState),(c=sr||op(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Of(t,e,n,i,s,r)}function Of(t,e,n,i,r,s){a0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Qh(e,n,!1),Vi(t,e,s);i=e.stateNode,Rx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=to(e,t.child,null,s),e.child=to(e,null,a,s)):An(t,e,a,s),e.memoizedState=i.state,r&&Qh(e,n,!0),e.child}function l0(t){var e=t.stateNode;e.pendingContext?Zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zh(t,e.context,!1),Hd(t,e.containerInfo)}function pp(t,e,n,i,r){return eo(),Ud(r),e.flags|=256,An(t,e,n,i),e.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function c0(t,e,n){var i=e.pendingProps,r=Bt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),It(Bt,r&1),t===null)return Lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wc(o,i,0,null),t=$r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zf(n),e.memoizedState=kf,t):qd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Px(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=yr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=yr(a,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kf,i}return s=t.child,t=s.sibling,i=yr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function qd(t,e){return e=wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,i){return i!==null&&Ud(i),to(e,t.child,null,n),t=qd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Px(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=ou(Error(ye(422))),ka(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wc({mode:"visible",children:i.children},r,0,null),s=$r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&to(e,t.child,null,o),e.child.memoizedState=zf(o),e.memoizedState=kf,s);if(!(e.mode&1))return ka(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ye(419)),i=ou(s,i,void 0),ka(t,e,o,i)}if(a=(o&t.childLanes)!==0,Un||a){if(i=ln,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gi(t,r),gi(i,t,r,-1))}return th(),i=ou(Error(ye(421))),ka(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Vx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Vn=mr(r.nextSibling),Wn=e,zt=!0,fi=null,t!==null&&(qn[Kn++]=Fi,qn[Kn++]=Oi,qn[Kn++]=Jr,Fi=t.id,Oi=t.overflow,Jr=e),e=qd(e,i.children),e.flags|=4096,e)}function mp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nf(t.return,e,n)}function au(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function u0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(An(t,e,i.children,n),i=Bt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mp(t,n,e);else if(t.tag===19)mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(It(Bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),au(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ql(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}au(e,!0,n,null,s);break;case"together":au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ye(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lx(t,e,n){switch(e.tag){case 3:l0(e),eo();break;case 5:Fv(e);break;case 1:On(e.type)&&Vl(e);break;case 4:Hd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;It(Xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(It(Bt,Bt.current&1),e.flags|=128,null):n&e.child.childLanes?c0(t,e,n):(It(Bt,Bt.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);It(Bt,Bt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return u0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),It(Bt,Bt.current),i)break;return null;case 22:case 23:return e.lanes=0,o0(t,e,n)}return Vi(t,e,n)}var f0,Bf,d0,h0;f0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bf=function(){};d0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Wr(Ai.current);var s=null;switch(n){case"input":r=lf(t,r),i=lf(t,i),s=[];break;case"select":r=Vt({},r,{value:void 0}),i=Vt({},i,{value:void 0}),s=[];break;case"textarea":r=ff(t,r),i=ff(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hl)}hf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};h0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ao(t,e){if(!zt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function yn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Nx(t,e,n){var i=e.pendingProps;switch(Dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(e),null;case 1:return On(e.type)&&Gl(),yn(e),null;case 3:return i=e.stateNode,no(),Ot(Fn),Ot(En),Vd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fi!==null&&(Yf(fi),fi=null))),Bf(t,e),yn(e),null;case 5:Gd(e);var r=Wr(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)d0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ye(166));return yn(e),null}if(t=Wr(Ai.current),Fa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ei]=e,i[aa]=s,t=(e.mode&1)!==0,n){case"dialog":Ut("cancel",i),Ut("close",i);break;case"iframe":case"object":case"embed":Ut("load",i);break;case"video":case"audio":for(r=0;r<Bo.length;r++)Ut(Bo[r],i);break;case"source":Ut("error",i);break;case"img":case"image":case"link":Ut("error",i),Ut("load",i);break;case"details":Ut("toggle",i);break;case"input":wh(i,s),Ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ut("invalid",i);break;case"textarea":Ah(i,s),Ut("invalid",i)}hf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",""+a]):Zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ut("scroll",i)}switch(n){case"input":ba(i),Th(i,s,!0);break;case"textarea":ba(i),bh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ei]=e,t[aa]=i,f0(t,e,!1,!1),e.stateNode=t;e:{switch(o=pf(n,i),n){case"dialog":Ut("cancel",t),Ut("close",t),r=i;break;case"iframe":case"object":case"embed":Ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Bo.length;r++)Ut(Bo[r],t);r=i;break;case"source":Ut("error",t),r=i;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),r=i;break;case"details":Ut("toggle",t),r=i;break;case"input":wh(t,i),r=lf(t,i),Ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Vt({},i,{value:void 0}),Ut("invalid",t);break;case"textarea":Ah(t,i),r=ff(t,i),Ut("invalid",t);break;default:r=i}hf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Wg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qo(t,l):typeof l=="number"&&Qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ut("scroll",t):l!=null&&yd(t,s,l,o))}switch(n){case"input":ba(t),Th(t,i,!1);break;case"textarea":ba(t),bh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ws(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ws(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yn(e),null;case 6:if(t&&e.stateNode!=null)h0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ye(166));if(n=Wr(ca.current),Wr(Ai.current),Fa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ei]=e,(s=i.nodeValue!==n)&&(t=Wn,t!==null))switch(t.tag){case 3:Ua(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ei]=e,e.stateNode=i}return yn(e),null;case 13:if(Ot(Bt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zt&&Vn!==null&&e.mode&1&&!(e.flags&128))Lv(),eo(),e.flags|=98560,s=!1;else if(s=Fa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ye(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ye(317));s[Ei]=e}else eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yn(e),s=!1}else fi!==null&&(Yf(fi),fi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Bt.current&1?en===0&&(en=3):th())),e.updateQueue!==null&&(e.flags|=4),yn(e),null);case 4:return no(),Bf(t,e),t===null&&sa(e.stateNode.containerInfo),yn(e),null;case 10:return kd(e.type._context),yn(e),null;case 17:return On(e.type)&&Gl(),yn(e),null;case 19:if(Ot(Bt),s=e.memoizedState,s===null)return yn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ao(s,!1);else{if(en!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,Ao(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return It(Bt,Bt.current&1|2),e.child}t=t.sibling}s.tail!==null&&$t()>ro&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=ql(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!zt)return yn(e),null}else 2*$t()-s.renderingStartTime>ro&&n!==1073741824&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=$t(),e.sibling=null,n=Bt.current,It(Bt,i?n&1|2:n&1),e):(yn(e),null);case 22:case 23:return eh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Gn&1073741824&&(yn(e),e.subtreeFlags&6&&(e.flags|=8192)):yn(e),null;case 24:return null;case 25:return null}throw Error(ye(156,e.tag))}function Ix(t,e){switch(Dd(e),e.tag){case 1:return On(e.type)&&Gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return no(),Ot(Fn),Ot(En),Vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gd(e),null;case 13:if(Ot(Bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ye(340));eo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ot(Bt),null;case 4:return no(),null;case 10:return kd(e.type._context),null;case 22:case 23:return eh(),null;case 24:return null;default:return null}}var za=!1,Mn=!1,Dx=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){jt(t,e,i)}else n.current=null}function Hf(t,e,n){try{n()}catch(i){jt(t,e,i)}}var gp=!1;function Ux(t,e){if(wf=kl,t=_v(),Nd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tf={focusedElem:t,selectionRange:n},kl=!1,Ie=e;Ie!==null;)if(e=Ie,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ie=t;else for(;Ie!==null;){e=Ie;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:ci(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ye(163))}}catch(S){jt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ie=t;break}Ie=e.return}return _=gp,gp=!1,_}function $o(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hf(e,n,s)}r=r.next}while(r!==i)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Gf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function p0(t){var e=t.alternate;e!==null&&(t.alternate=null,p0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ei],delete e[aa],delete e[Cf],delete e[vx],delete e[_x])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function m0(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||m0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hl));else if(i!==4&&(t=t.child,t!==null))for(Vf(t,e,n),t=t.sibling;t!==null;)Vf(t,e,n),t=t.sibling}function Wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wf(t,e,n),t=t.sibling;t!==null;)Wf(t,e,n),t=t.sibling}var un=null,ui=!1;function Ki(t,e,n){for(n=n.child;n!==null;)g0(t,e,n),n=n.sibling}function g0(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(pc,n)}catch{}switch(n.tag){case 5:Mn||Bs(n,e);case 6:var i=un,r=ui;un=null,Ki(t,e,n),un=i,ui=r,un!==null&&(ui?(t=un,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):un.removeChild(n.stateNode));break;case 18:un!==null&&(ui?(t=un,n=n.stateNode,t.nodeType===8?eu(t.parentNode,n):t.nodeType===1&&eu(t,n),na(t)):eu(un,n.stateNode));break;case 4:i=un,r=ui,un=n.stateNode.containerInfo,ui=!0,Ki(t,e,n),un=i,ui=r;break;case 0:case 11:case 14:case 15:if(!Mn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hf(n,e,o),r=r.next}while(r!==i)}Ki(t,e,n);break;case 1:if(!Mn&&(Bs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){jt(n,e,a)}Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:n.mode&1?(Mn=(i=Mn)||n.memoizedState!==null,Ki(t,e,n),Mn=i):Ki(t,e,n);break;default:Ki(t,e,n)}}function _p(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dx),e.forEach(function(i){var r=Wx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function si(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:un=a.stateNode,ui=!1;break e;case 3:un=a.stateNode.containerInfo,ui=!0;break e;case 4:un=a.stateNode.containerInfo,ui=!0;break e}a=a.return}if(un===null)throw Error(ye(160));g0(s,o,r),un=null,ui=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){jt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)v0(e,t),e=e.sibling}function v0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(e,t),_i(t),i&4){try{$o(3,t,t.return),Mc(3,t)}catch(y){jt(t,t.return,y)}try{$o(5,t,t.return)}catch(y){jt(t,t.return,y)}}break;case 1:si(e,t),_i(t),i&512&&n!==null&&Bs(n,n.return);break;case 5:if(si(e,t),_i(t),i&512&&n!==null&&Bs(n,n.return),t.flags&32){var r=t.stateNode;try{Qo(r,"")}catch(y){jt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zg(r,s),pf(a,o);var c=pf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Wg(r,d):f==="dangerouslySetInnerHTML"?Gg(r,d):f==="children"?Qo(r,d):yd(r,f,d,c)}switch(a){case"input":cf(r,s);break;case"textarea":Bg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ws(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ws(r,!!s.multiple,s.defaultValue,!0):Ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[aa]=s}catch(y){jt(t,t.return,y)}}break;case 6:if(si(e,t),_i(t),i&4){if(t.stateNode===null)throw Error(ye(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){jt(t,t.return,y)}}break;case 3:if(si(e,t),_i(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(y){jt(t,t.return,y)}break;case 4:si(e,t),_i(t);break;case 13:si(e,t),_i(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Qd=$t())),i&4&&_p(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Mn=(c=Mn)||f,si(e,t),Mn=c):si(e,t),_i(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ie=t,f=t.child;f!==null;){for(d=Ie=f;Ie!==null;){switch(h=Ie,g=h.child,h.tag){case 0:case 11:case 14:case 15:$o(4,h,h.return);break;case 1:Bs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){jt(i,n,y)}}break;case 5:Bs(h,h.return);break;case 22:if(h.memoizedState!==null){xp(d);continue}}g!==null?(g.return=h,Ie=g):xp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vg("display",o))}catch(y){jt(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){jt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:si(e,t),_i(t),i&4&&_p(t);break;case 21:break;default:si(e,t),_i(t)}}function _i(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(m0(n)){var i=n;break e}n=n.return}throw Error(ye(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qo(r,""),i.flags&=-33);var s=vp(t);Wf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=vp(t);Vf(t,a,o);break;default:throw Error(ye(161))}}catch(l){jt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fx(t,e,n){Ie=t,_0(t)}function _0(t,e,n){for(var i=(t.mode&1)!==0;Ie!==null;){var r=Ie,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Mn;a=za;var c=Mn;if(za=o,(Mn=l)&&!c)for(Ie=r;Ie!==null;)o=Ie,l=o.child,o.tag===22&&o.memoizedState!==null?Sp(r):l!==null?(l.return=o,Ie=l):Sp(r);for(;s!==null;)Ie=s,_0(s),s=s.sibling;Ie=r,za=a,Mn=c}yp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ie=s):yp(t)}}function yp(t){for(;Ie!==null;){var e=Ie;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Mn||Mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Mn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ci(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ip(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ip(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&na(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ye(163))}Mn||e.flags&512&&Gf(e)}catch(h){jt(e,e.return,h)}}if(e===t){Ie=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ie=n;break}Ie=e.return}}function xp(t){for(;Ie!==null;){var e=Ie;if(e===t){Ie=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ie=n;break}Ie=e.return}}function Sp(t){for(;Ie!==null;){var e=Ie;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(l){jt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){jt(e,r,l)}}var s=e.return;try{Gf(e)}catch(l){jt(e,s,l)}break;case 5:var o=e.return;try{Gf(e)}catch(l){jt(e,o,l)}}}catch(l){jt(e,e.return,l)}if(e===t){Ie=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ie=a;break}Ie=e.return}}var Ox=Math.ceil,Ql=ji.ReactCurrentDispatcher,Kd=ji.ReactCurrentOwner,ni=ji.ReactCurrentBatchConfig,Et=0,ln=null,Zt=null,pn=0,Gn=0,Hs=Pr(0),en=0,ha=null,ts=0,Ec=0,Zd=0,Yo=null,In=null,Qd=0,ro=1/0,Ii=null,Jl=!1,jf=null,vr=null,Ba=!1,cr=null,ec=0,qo=0,Xf=null,Cl=-1,Rl=0;function Cn(){return Et&6?$t():Cl!==-1?Cl:Cl=$t()}function _r(t){return t.mode&1?Et&2&&pn!==0?pn&-pn:xx.transition!==null?(Rl===0&&(Rl=nv()),Rl):(t=Rt,t!==0||(t=window.event,t=t===void 0?16:cv(t.type)),t):1}function gi(t,e,n,i){if(50<qo)throw qo=0,Xf=null,Error(ye(185));_a(t,n,i),(!(Et&2)||t!==ln)&&(t===ln&&(!(Et&2)&&(Ec|=n),en===4&&ar(t,pn)),kn(t,i),n===1&&Et===0&&!(e.mode&1)&&(ro=$t()+500,yc&&Lr()))}function kn(t,e){var n=t.callbackNode;xy(t,e);var i=Ol(t,t===ln?pn:0);if(i===0)n!==null&&Ph(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ph(n),e===1)t.tag===0?yx(Mp.bind(null,t)):Cv(Mp.bind(null,t)),mx(function(){!(Et&6)&&Lr()}),n=null;else{switch(iv(i)){case 1:n=wd;break;case 4:n=ev;break;case 16:n=Fl;break;case 536870912:n=tv;break;default:n=Fl}n=A0(n,y0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function y0(t,e){if(Cl=-1,Rl=0,Et&6)throw Error(ye(327));var n=t.callbackNode;if(qs()&&t.callbackNode!==n)return null;var i=Ol(t,t===ln?pn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=tc(t,i);else{e=i;var r=Et;Et|=2;var s=S0();(ln!==t||pn!==e)&&(Ii=null,ro=$t()+500,Xr(t,e));do try{Bx();break}catch(a){x0(t,a)}while(!0);Od(),Ql.current=s,Et=r,Zt!==null?e=0:(ln=null,pn=0,e=en)}if(e!==0){if(e===2&&(r=yf(t),r!==0&&(i=r,e=$f(t,r))),e===1)throw n=ha,Xr(t,0),ar(t,i),kn(t,$t()),n;if(e===6)ar(t,i);else{if(r=t.current.alternate,!(i&30)&&!kx(r)&&(e=tc(t,i),e===2&&(s=yf(t),s!==0&&(i=s,e=$f(t,s))),e===1))throw n=ha,Xr(t,0),ar(t,i),kn(t,$t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ye(345));case 2:Or(t,In,Ii);break;case 3:if(ar(t,i),(i&130023424)===i&&(e=Qd+500-$t(),10<e)){if(Ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bf(Or.bind(null,t,In,Ii),e);break}Or(t,In,Ii);break;case 4:if(ar(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-mi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=$t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ox(i/1960))-i,10<i){t.timeoutHandle=bf(Or.bind(null,t,In,Ii),i);break}Or(t,In,Ii);break;case 5:Or(t,In,Ii);break;default:throw Error(ye(329))}}}return kn(t,$t()),t.callbackNode===n?y0.bind(null,t):null}function $f(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=tc(t,e),t!==2&&(e=In,In=n,e!==null&&Yf(e)),t}function Yf(t){In===null?In=t:In.push.apply(In,t)}function kx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!vi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Zd,e&=~Ec,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mi(e),i=1<<n;t[n]=-1,e&=~i}}function Mp(t){if(Et&6)throw Error(ye(327));qs();var e=Ol(t,0);if(!(e&1))return kn(t,$t()),null;var n=tc(t,e);if(t.tag!==0&&n===2){var i=yf(t);i!==0&&(e=i,n=$f(t,i))}if(n===1)throw n=ha,Xr(t,0),ar(t,e),kn(t,$t()),n;if(n===6)throw Error(ye(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,In,Ii),kn(t,$t()),null}function Jd(t,e){var n=Et;Et|=1;try{return t(e)}finally{Et=n,Et===0&&(ro=$t()+500,yc&&Lr())}}function ns(t){cr!==null&&cr.tag===0&&!(Et&6)&&qs();var e=Et;Et|=1;var n=ni.transition,i=Rt;try{if(ni.transition=null,Rt=1,t)return t()}finally{Rt=i,ni.transition=n,Et=e,!(Et&6)&&Lr()}}function eh(){Gn=Hs.current,Ot(Hs)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,px(n)),Zt!==null)for(n=Zt.return;n!==null;){var i=n;switch(Dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gl();break;case 3:no(),Ot(Fn),Ot(En),Vd();break;case 5:Gd(i);break;case 4:no();break;case 13:Ot(Bt);break;case 19:Ot(Bt);break;case 10:kd(i.type._context);break;case 22:case 23:eh()}n=n.return}if(ln=t,Zt=t=yr(t.current,null),pn=Gn=e,en=0,ha=null,Zd=Ec=ts=0,In=Yo=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function x0(t,e){do{var n=Zt;try{if(Od(),Tl.current=Zl,Kl){for(var i=Ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Kl=!1}if(es=0,on=Jt=Ht=null,Xo=!1,ua=0,Kd.current=null,n===null||n.return===null){en=1,ha=e,Zt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=pn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=cp(o);if(g!==null){g.flags&=-257,up(g,o,a,s,e),g.mode&1&&lp(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){lp(s,c,e),th();break e}l=Error(ye(426))}}else if(zt&&a.mode&1){var p=cp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),up(p,o,a,s,e),Ud(io(l,a));break e}}s=l=io(l,a),en!==4&&(en=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=i0(s,l,e);np(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(vr===null||!vr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=r0(s,a,e);np(s,S);break e}}s=s.return}while(s!==null)}E0(n)}catch(P){e=P,Zt===n&&n!==null&&(Zt=n=n.return);continue}break}while(!0)}function S0(){var t=Ql.current;return Ql.current=Zl,t===null?Zl:t}function th(){(en===0||en===3||en===2)&&(en=4),ln===null||!(ts&268435455)&&!(Ec&268435455)||ar(ln,pn)}function tc(t,e){var n=Et;Et|=2;var i=S0();(ln!==t||pn!==e)&&(Ii=null,Xr(t,e));do try{zx();break}catch(r){x0(t,r)}while(!0);if(Od(),Et=n,Ql.current=i,Zt!==null)throw Error(ye(261));return ln=null,pn=0,en}function zx(){for(;Zt!==null;)M0(Zt)}function Bx(){for(;Zt!==null&&!fy();)M0(Zt)}function M0(t){var e=T0(t.alternate,t,Gn);t.memoizedProps=t.pendingProps,e===null?E0(t):Zt=e,Kd.current=null}function E0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ix(n,e),n!==null){n.flags&=32767,Zt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{en=6,Zt=null;return}}else if(n=Nx(n,e,Gn),n!==null){Zt=n;return}if(e=e.sibling,e!==null){Zt=e;return}Zt=e=t}while(e!==null);en===0&&(en=5)}function Or(t,e,n){var i=Rt,r=ni.transition;try{ni.transition=null,Rt=1,Hx(t,e,n,i)}finally{ni.transition=r,Rt=i}return null}function Hx(t,e,n,i){do qs();while(cr!==null);if(Et&6)throw Error(ye(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ye(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sy(t,s),t===ln&&(Zt=ln=null,pn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ba||(Ba=!0,A0(Fl,function(){return qs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ni.transition,ni.transition=null;var o=Rt;Rt=1;var a=Et;Et|=4,Kd.current=null,Ux(t,n),v0(n,t),ax(Tf),kl=!!wf,Tf=wf=null,t.current=n,Fx(n),dy(),Et=a,Rt=o,ni.transition=s}else t.current=n;if(Ba&&(Ba=!1,cr=t,ec=r),s=t.pendingLanes,s===0&&(vr=null),my(n.stateNode),kn(t,$t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Jl)throw Jl=!1,t=jf,jf=null,t;return ec&1&&t.tag!==0&&qs(),s=t.pendingLanes,s&1?t===Xf?qo++:(qo=0,Xf=t):qo=0,Lr(),null}function qs(){if(cr!==null){var t=iv(ec),e=ni.transition,n=Rt;try{if(ni.transition=null,Rt=16>t?16:t,cr===null)var i=!1;else{if(t=cr,cr=null,ec=0,Et&6)throw Error(ye(331));var r=Et;for(Et|=4,Ie=t.current;Ie!==null;){var s=Ie,o=s.child;if(Ie.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ie=c;Ie!==null;){var f=Ie;switch(f.tag){case 0:case 11:case 15:$o(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ie=d;else for(;Ie!==null;){f=Ie;var h=f.sibling,g=f.return;if(p0(f),f===c){Ie=null;break}if(h!==null){h.return=g,Ie=h;break}Ie=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}Ie=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ie=o;else e:for(;Ie!==null;){if(s=Ie,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$o(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ie=u;break e}Ie=s.return}}var m=t.current;for(Ie=m;Ie!==null;){o=Ie;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ie=v;else e:for(o=m;Ie!==null;){if(a=Ie,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mc(9,a)}}catch(P){jt(a,a.return,P)}if(a===o){Ie=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ie=S;break e}Ie=a.return}}if(Et=r,Lr(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(pc,t)}catch{}i=!0}return i}finally{Rt=n,ni.transition=e}}return!1}function Ep(t,e,n){e=io(n,e),e=i0(t,e,1),t=gr(t,e,1),e=Cn(),t!==null&&(_a(t,1,e),kn(t,e))}function jt(t,e,n){if(t.tag===3)Ep(t,t,n);else for(;e!==null;){if(e.tag===3){Ep(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vr===null||!vr.has(i))){t=io(n,t),t=r0(e,t,1),e=gr(e,t,1),t=Cn(),e!==null&&(_a(e,1,t),kn(e,t));break}}e=e.return}}function Gx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Cn(),t.pingedLanes|=t.suspendedLanes&n,ln===t&&(pn&n)===n&&(en===4||en===3&&(pn&130023424)===pn&&500>$t()-Qd?Xr(t,0):Zd|=n),kn(t,e)}function w0(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=Cn();t=Gi(t,e),t!==null&&(_a(t,e,n),kn(t,n))}function Vx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),w0(t,n)}function Wx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ye(314))}i!==null&&i.delete(e),w0(t,n)}var T0;T0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fn.current)Un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Un=!1,Lx(t,e,n);Un=!!(t.flags&131072)}else Un=!1,zt&&e.flags&1048576&&Rv(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;bl(t,e),t=e.pendingProps;var r=Js(e,En.current);Ys(e,n),r=jd(null,e,i,t,r,n);var s=Xd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,On(i)?(s=!0,Vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bd(e),r.updater=Sc,e.stateNode=r,r._reactInternals=e,Df(e,i,t,n),e=Of(null,e,i,!0,s,n)):(e.tag=0,zt&&s&&Id(e),An(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Xx(i),t=ci(i,t),r){case 0:e=Ff(null,e,i,t,n);break e;case 1:e=hp(null,e,i,t,n);break e;case 11:e=fp(null,e,i,t,n);break e;case 14:e=dp(null,e,i,ci(i.type,t),n);break e}throw Error(ye(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),Ff(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),hp(t,e,i,r,n);case 3:e:{if(l0(e),t===null)throw Error(ye(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Uv(t,e),Yl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=io(Error(ye(423)),e),e=pp(t,e,i,n,r);break e}else if(i!==r){r=io(Error(ye(424)),e),e=pp(t,e,i,n,r);break e}else for(Vn=mr(e.stateNode.containerInfo.firstChild),Wn=e,zt=!0,fi=null,n=Iv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(eo(),i===r){e=Vi(t,e,n);break e}An(t,e,i,n)}e=e.child}return e;case 5:return Fv(e),t===null&&Lf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Af(i,r)?o=null:s!==null&&Af(i,s)&&(e.flags|=32),a0(t,e),An(t,e,o,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return c0(t,e,n);case 4:return Hd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=to(e,null,i,n):An(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),fp(t,e,i,r,n);case 7:return An(t,e,e.pendingProps,n),e.child;case 8:return An(t,e,e.pendingProps.children,n),e.child;case 12:return An(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,It(Xl,i._currentValue),i._currentValue=o,s!==null)if(vi(s.value,o)){if(s.children===r.children&&!Fn.current){e=Vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ye(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}An(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ys(e,n),r=ii(r),i=i(r),e.flags|=1,An(t,e,i,n),e.child;case 14:return i=e.type,r=ci(i,e.pendingProps),r=ci(i.type,r),dp(t,e,i,r,n);case 15:return s0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),bl(t,e),e.tag=1,On(i)?(t=!0,Vl(e)):t=!1,Ys(e,n),n0(e,i,r),Df(e,i,r,n),Of(null,e,i,!0,t,n);case 19:return u0(t,e,n);case 22:return o0(t,e,n)}throw Error(ye(156,e.tag))};function A0(t,e){return Jg(t,e)}function jx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,e,n,i){return new jx(t,e,n,i)}function nh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xx(t){if(typeof t=="function")return nh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sd)return 11;if(t===Md)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=ei(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")nh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ls:return $r(n.children,r,s,e);case xd:o=8,r|=8;break;case rf:return t=ei(12,n,e,r|2),t.elementType=rf,t.lanes=s,t;case sf:return t=ei(13,n,e,r),t.elementType=sf,t.lanes=s,t;case of:return t=ei(19,n,e,r),t.elementType=of,t.lanes=s,t;case Fg:return wc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dg:o=10;break e;case Ug:o=9;break e;case Sd:o=11;break e;case Md:o=14;break e;case rr:o=16,i=null;break e}throw Error(ye(130,t==null?t:typeof t,""))}return e=ei(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function $r(t,e,n,i){return t=ei(7,t,i,e),t.lanes=n,t}function wc(t,e,n,i){return t=ei(22,t,i,e),t.elementType=Fg,t.lanes=n,t.stateNode={isHidden:!1},t}function lu(t,e,n){return t=ei(6,t,null,e),t.lanes=n,t}function cu(t,e,n){return e=ei(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $x(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ih(t,e,n,i,r,s,o,a,l){return t=new $x(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bd(s),t}function Yx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function b0(t){if(!t)return Ar;t=t._reactInternals;e:{if(os(t)!==t||t.tag!==1)throw Error(ye(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(On(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ye(171))}if(t.tag===1){var n=t.type;if(On(n))return bv(t,n,e)}return e}function C0(t,e,n,i,r,s,o,a,l){return t=ih(n,i,!0,t,r,s,o,a,l),t.context=b0(null),n=t.current,i=Cn(),r=_r(n),s=zi(i,r),s.callback=e??null,gr(n,s,r),t.current.lanes=r,_a(t,r,i),kn(t,i),t}function Tc(t,e,n,i){var r=e.current,s=Cn(),o=_r(r);return n=b0(n),e.context===null?e.context=n:e.pendingContext=n,e=zi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=gr(r,e,o),t!==null&&(gi(t,r,o,s),wl(t,r,o)),o}function nc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rh(t,e){wp(t,e),(t=t.alternate)&&wp(t,e)}function qx(){return null}var R0=typeof reportError=="function"?reportError:function(t){console.error(t)};function sh(t){this._internalRoot=t}Ac.prototype.render=sh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ye(409));Tc(t,e,null,null)};Ac.prototype.unmount=sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){Tc(null,t,null,null)}),e[Hi]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=ov();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&lv(t)}};function oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function Kx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nc(o);s.call(c)}}var o=C0(e,i,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=o,t[Hi]=o.current,sa(t.nodeType===8?t.parentNode:t),ns(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nc(l);a.call(c)}}var l=ih(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=l,t[Hi]=l.current,sa(t.nodeType===8?t.parentNode:t),ns(function(){Tc(e,l,n,i)}),l}function Cc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nc(o);a.call(l)}}Tc(e,o,t,r)}else o=Kx(n,e,t,r,i);return nc(o)}rv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zo(e.pendingLanes);n!==0&&(Td(e,n|1),kn(e,$t()),!(Et&6)&&(ro=$t()+500,Lr()))}break;case 13:ns(function(){var i=Gi(t,1);if(i!==null){var r=Cn();gi(i,t,1,r)}}),rh(t,1)}};Ad=function(t){if(t.tag===13){var e=Gi(t,134217728);if(e!==null){var n=Cn();gi(e,t,134217728,n)}rh(t,134217728)}};sv=function(t){if(t.tag===13){var e=_r(t),n=Gi(t,e);if(n!==null){var i=Cn();gi(n,t,e,i)}rh(t,e)}};ov=function(){return Rt};av=function(t,e){var n=Rt;try{return Rt=t,e()}finally{Rt=n}};gf=function(t,e,n){switch(e){case"input":if(cf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=_c(i);if(!r)throw Error(ye(90));kg(i),cf(i,r)}}}break;case"textarea":Bg(t,n);break;case"select":e=n.value,e!=null&&Ws(t,!!n.multiple,e,!1)}};$g=Jd;Yg=ns;var Zx={usingClientEntryPoint:!1,Events:[xa,Us,_c,jg,Xg,Jd]},bo={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qx={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zg(t),t===null?null:t.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{pc=Ha.inject(Qx),Ti=Ha}catch{}}Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zx;Xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oh(e))throw Error(ye(200));return Yx(t,e,null,n)};Xn.createRoot=function(t,e){if(!oh(t))throw Error(ye(299));var n=!1,i="",r=R0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ih(t,1,!1,null,null,n,!1,i,r),t[Hi]=e.current,sa(t.nodeType===8?t.parentNode:t),new sh(e)};Xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ye(188)):(t=Object.keys(t).join(","),Error(ye(268,t)));return t=Zg(e),t=t===null?null:t.stateNode,t};Xn.flushSync=function(t){return ns(t)};Xn.hydrate=function(t,e,n){if(!bc(e))throw Error(ye(200));return Cc(null,t,e,!0,n)};Xn.hydrateRoot=function(t,e,n){if(!oh(t))throw Error(ye(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=R0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=C0(e,null,t,1,n??null,r,!1,s,o),t[Hi]=e.current,sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ac(e)};Xn.render=function(t,e,n){if(!bc(e))throw Error(ye(200));return Cc(null,t,e,!1,n)};Xn.unmountComponentAtNode=function(t){if(!bc(t))throw Error(ye(40));return t._reactRootContainer?(ns(function(){Cc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1};Xn.unstable_batchedUpdates=Jd;Xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!bc(n))throw Error(ye(200));if(t==null||t._reactInternals===void 0)throw Error(ye(38));return Cc(t,e,n,!1,i)};Xn.version="18.3.1-next-f1338f8080-20240426";function P0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P0)}catch(t){console.error(t)}}P0(),Pg.exports=Xn;var Jx=Pg.exports,Ap=Jx;tf.createRoot=Ap.createRoot,tf.hydrateRoot=Ap.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pa.apply(this,arguments)}var ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ur||(ur={}));const bp="popstate";function eS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return qf("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ic(r)}return nS(e,n,null,t)}function Gt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ah(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tS(){return Math.random().toString(36).substr(2,8)}function Cp(t,e){return{usr:t.state,key:t.key,idx:e}}function qf(t,e,n,i){return n===void 0&&(n=null),pa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?mo(e):e,{state:n,key:e&&e.key||i||tS()})}function ic(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function mo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function nS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=ur.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(pa({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=ur.Pop;let p=f(),u=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:u})}function h(p,u){a=ur.Push;let m=qf(y.location,p,u);c=f()+1;let v=Cp(m,c),S=y.createHref(m);try{o.pushState(v,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(S)}s&&l&&l({action:a,location:y.location,delta:1})}function g(p,u){a=ur.Replace;let m=qf(y.location,p,u);c=f();let v=Cp(m,c),S=y.createHref(m);o.replaceState(v,"",S),s&&l&&l({action:a,location:y.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof p=="string"?p:ic(p);return m=m.replace(/ $/,"%20"),Gt(u,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,u)}let y={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(bp,d),l=p,()=>{r.removeEventListener(bp,d),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:g,go(p){return o.go(p)}};return y}var Rp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Rp||(Rp={}));function iS(t,e,n){return n===void 0&&(n="/"),rS(t,e,n)}function rS(t,e,n,i){let r=typeof e=="string"?mo(e):e,s=so(r.pathname||"/",n);if(s==null)return null;let o=L0(t);sS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=gS(s);a=pS(o[l],c)}return a}function L0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Gt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=xr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Gt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),L0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:dS(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of N0(s.path))r(s,o,l)}),e}function N0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=N0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function sS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:hS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const oS=/^:[\w-]+$/,aS=3,lS=2,cS=1,uS=10,fS=-2,Pp=t=>t==="*";function dS(t,e){let n=t.split("/"),i=n.length;return n.some(Pp)&&(i+=fS),e&&(i+=lS),n.filter(r=>!Pp(r)).reduce((r,s)=>r+(oS.test(s)?aS:s===""?cS:uS),i)}function hS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function pS(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",d=Kf({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),h=l.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:xr([s,d.pathname]),pathnameBase:SS(xr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=xr([s,d.pathnameBase]))}return o}function Kf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=mS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,f,d)=>{let{paramName:h,isOptional:g}=f;if(h==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=a[d];return g&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function mS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ah(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function gS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ah(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function so(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const vS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_S=t=>vS.test(t);function yS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?mo(t):t,s;if(n)if(_S(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),ah(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Lp(n.substring(1),"/"):s=Lp(n,e)}else s=e;return{pathname:s,search:MS(i),hash:ES(r)}}function Lp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function uu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function lh(t,e){let n=xS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function ch(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=mo(t):(r=pa({},t),Gt(!r.pathname||!r.pathname.includes("?"),uu("?","pathname","search",r)),Gt(!r.pathname||!r.pathname.includes("#"),uu("#","pathname","hash",r)),Gt(!r.search||!r.search.includes("#"),uu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=yS(r,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const xr=t=>t.join("/").replace(/\/\/+/g,"/"),SS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),MS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ES=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function wS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const I0=["post","put","patch","delete"];new Set(I0);const TS=["get",...I0];new Set(TS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ma.apply(this,arguments)}const Rc=D.createContext(null),D0=D.createContext(null),Xi=D.createContext(null),Pc=D.createContext(null),$i=D.createContext({outlet:null,matches:[],isDataRoute:!1}),U0=D.createContext(null);function AS(t,e){let{relative:n}=e===void 0?{}:e;go()||Gt(!1);let{basename:i,navigator:r}=D.useContext(Xi),{hash:s,pathname:o,search:a}=Nc(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:xr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function go(){return D.useContext(Pc)!=null}function Yi(){return go()||Gt(!1),D.useContext(Pc).location}function F0(t){D.useContext(Xi).static||D.useLayoutEffect(t)}function Lc(){let{isDataRoute:t}=D.useContext($i);return t?HS():bS()}function bS(){go()||Gt(!1);let t=D.useContext(Rc),{basename:e,future:n,navigator:i}=D.useContext(Xi),{matches:r}=D.useContext($i),{pathname:s}=Yi(),o=JSON.stringify(lh(r,n.v7_relativeSplatPath)),a=D.useRef(!1);return F0(()=>{a.current=!0}),D.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let d=ch(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:xr([e,d.pathname])),(f.replace?i.replace:i.push)(d,f.state,f)},[e,i,o,s,t])}const CS=D.createContext(null);function RS(t){let e=D.useContext($i).outlet;return e&&D.createElement(CS.Provider,{value:t},e)}function Nc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=D.useContext(Xi),{matches:r}=D.useContext($i),{pathname:s}=Yi(),o=JSON.stringify(lh(r,i.v7_relativeSplatPath));return D.useMemo(()=>ch(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function PS(t,e){return LS(t,e)}function LS(t,e,n,i){go()||Gt(!1);let{navigator:r}=D.useContext(Xi),{matches:s}=D.useContext($i),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Yi(),f;if(e){var d;let p=typeof e=="string"?mo(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||Gt(!1),f=p}else f=c;let h=f.pathname||"/",g=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=iS(t,{pathname:g}),y=FS(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:xr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:xr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&y?D.createElement(Pc.Provider,{value:{location:ma({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ur.Pop}},y):y}function NS(){let t=BS(),e=wS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:r},n):null,null)}const IS=D.createElement(NS,null);class DS extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement($i.Provider,{value:this.props.routeContext},D.createElement(U0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function US(t){let{routeContext:e,match:n,children:i}=t,r=D.useContext(Rc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement($i.Provider,{value:e},i)}function FS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||Gt(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:h,errors:g}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||_){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,d,h)=>{let g,_=!1,y=null,p=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||IS,l&&(c<0&&h===0?(GS("route-fallback"),_=!0,p=null):c===h&&(_=!0,p=d.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,h+1)),m=()=>{let v;return g?v=y:_?v=p:d.route.Component?v=D.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=f,D.createElement(US,{match:d,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?D.createElement(DS,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:m(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):m()},null)}var O0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(O0||{}),k0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(k0||{});function OS(t){let e=D.useContext(Rc);return e||Gt(!1),e}function kS(t){let e=D.useContext(D0);return e||Gt(!1),e}function zS(t){let e=D.useContext($i);return e||Gt(!1),e}function z0(t){let e=zS(),n=e.matches[e.matches.length-1];return n.route.id||Gt(!1),n.route.id}function BS(){var t;let e=D.useContext(U0),n=kS(),i=z0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function HS(){let{router:t}=OS(O0.UseNavigateStable),e=z0(k0.UseNavigateStable),n=D.useRef(!1);return F0(()=>{n.current=!0}),D.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ma({fromRouteId:e},s)))},[t,e])}const Np={};function GS(t,e,n){Np[t]||(Np[t]=!0)}function VS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function B0(t){let{to:e,replace:n,state:i,relative:r}=t;go()||Gt(!1);let{future:s,static:o}=D.useContext(Xi),{matches:a}=D.useContext($i),{pathname:l}=Yi(),c=Lc(),f=ch(e,lh(a,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(f);return D.useEffect(()=>c(JSON.parse(d),{replace:n,state:i,relative:r}),[c,d,r,n,i]),null}function WS(t){return RS(t.context)}function ir(t){Gt(!1)}function jS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ur.Pop,navigator:s,static:o=!1,future:a}=t;go()&&Gt(!1);let l=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:l,navigator:s,static:o,future:ma({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=mo(i));let{pathname:f="/",search:d="",hash:h="",state:g=null,key:_="default"}=i,y=D.useMemo(()=>{let p=so(f,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:g,key:_},navigationType:r}},[l,f,d,h,g,_,r]);return y==null?null:D.createElement(Xi.Provider,{value:c},D.createElement(Pc.Provider,{children:n,value:y}))}function XS(t){let{children:e,location:n}=t;return PS(Zf(e),n)}new Promise(()=>{});function Zf(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(i,r)=>{if(!D.isValidElement(i))return;let s=[...e,r];if(i.type===D.Fragment){n.push.apply(n,Zf(i.props.children,s));return}i.type!==ir&&Gt(!1),!i.props.index||!i.props.children||Gt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Zf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rc(){return rc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},rc.apply(this,arguments)}function H0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function $S(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function YS(t,e){return t.button===0&&(!e||e==="_self")&&!$S(t)}const qS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],KS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],ZS="6";try{window.__reactRouterVersion=ZS}catch{}const QS=D.createContext({isTransitioning:!1}),JS="startTransition",Ip=G_[JS];function eM(t){let{basename:e,children:n,future:i,window:r}=t,s=D.useRef();s.current==null&&(s.current=eS({window:r,v5Compat:!0}));let o=s.current,[a,l]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=D.useCallback(d=>{c&&Ip?Ip(()=>l(d)):l(d)},[l,c]);return D.useLayoutEffect(()=>o.listen(f),[o,f]),D.useEffect(()=>VS(i),[i]),D.createElement(jS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const tM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,iM=D.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f,viewTransition:d}=e,h=H0(e,qS),{basename:g}=D.useContext(Xi),_,y=!1;if(typeof c=="string"&&nM.test(c)&&(_=c,tM))try{let v=new URL(window.location.href),S=c.startsWith("//")?new URL(v.protocol+c):new URL(c),P=so(S.pathname,g);S.origin===v.origin&&P!=null?c=P+S.search+S.hash:y=!0}catch{}let p=AS(c,{relative:r}),u=oM(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:r,viewTransition:d});function m(v){i&&i(v),v.defaultPrevented||u(v)}return D.createElement("a",rc({},h,{href:_||p,onClick:y||s?i:m,ref:n,target:l}))}),rM=D.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:f}=e,d=H0(e,KS),h=Nc(l,{relative:d.relative}),g=Yi(),_=D.useContext(D0),{navigator:y,basename:p}=D.useContext(Xi),u=_!=null&&aM(h)&&c===!0,m=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,v=g.pathname,S=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(v=v.toLowerCase(),S=S?S.toLowerCase():null,m=m.toLowerCase()),S&&p&&(S=so(S,p)||S);const P=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let C=v===m||!o&&v.startsWith(m)&&v.charAt(P)==="/",b=S!=null&&(S===m||!o&&S.startsWith(m)&&S.charAt(m.length)==="/"),G={isActive:C,isPending:b,isTransitioning:u},ie=C?i:void 0,x;typeof s=="function"?x=s(G):x=[s,C?"active":null,b?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(G):a;return D.createElement(iM,rc({},d,{"aria-current":ie,className:x,ref:n,style:R,to:l,viewTransition:c}),typeof f=="function"?f(G):f)});var Qf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Qf||(Qf={}));var Dp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dp||(Dp={}));function sM(t){let e=D.useContext(Rc);return e||Gt(!1),e}function oM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Lc(),c=Yi(),f=Nc(t,{relative:o});return D.useCallback(d=>{if(YS(d,n)){d.preventDefault();let h=i!==void 0?i:ic(c)===ic(f);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,f,i,r,n,t,s,o,a])}function aM(t,e){e===void 0&&(e={});let n=D.useContext(QS);n==null&&Gt(!1);let{basename:i}=sM(Qf.useViewTransitionState),r=Nc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=so(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=so(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Kf(r.pathname,o)!=null||Kf(r.pathname,s)!=null}const uh="reforgedz.session";function qt(){const t=localStorage.getItem(uh);if(!t)return null;try{const e=JSON.parse(t);return!e||typeof e.token!="string"||e.token.length===0?null:e}catch{return null}}function lM(t){localStorage.setItem(uh,JSON.stringify(t))}function cM(){localStorage.removeItem(uh)}function uM(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),n=(4-e.length%4)%4,i=e+"=".repeat(n);return atob(i)}function fM(){const t=qt();if(!t)return null;const e=String(t.token).split(".");if(e.length!==2)return null;try{const n=uM(e[0]),i=JSON.parse(n);return!i||typeof i.sub!="string"?null:i}catch{return null}}function fu(t){const e=fM();if(!e)return!1;const n=e.tools;return!n||typeof n!="object"?t==="replay":!!n[t]}function Qt(){const t="https://admin.reforgedz.xyz";return t.length>0?t.replace(/\/$/,""):window.location.origin}async function dM(t,e){const n=Qt(),i=await fetch(`${n}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})});if(!i.ok){const r=await i.text();throw new Error(r||`Login failed (${i.status})`)}return await i.json()}async function hM(){const t=Qt(),e=qt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to list servers (${n.status})`)}return await n.json()}async function Jf(){const t=Qt(),e=qt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/replay/statusAll`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to get replay status for all servers (${n.status})`)}return await n.json()}async function Up(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/range?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get replay range (${i.status})`)}return await i.json()}async function Fp(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/players?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to list replay players (${i.status})`)}return await i.json()}async function Ga(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=new URLSearchParams;i.set("serverId",t.serverId),typeof t.sinceTsMs=="number"&&i.set("sinceTsMs",String(t.sinceTsMs)),typeof t.untilTsMs=="number"&&i.set("untilTsMs",String(t.untilTsMs)),typeof t.limit=="number"&&i.set("limit",String(t.limit)),t.tail&&i.set("tail","1");const r=await fetch(`${e}/api/replay/events?${i.toString()}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!r.ok){const s=await r.text();throw new Error(s||`Failed to get replay events (${r.status})`)}return await r.json()}async function pM(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/gmPing`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to send GM ping (${i.status})`)}return await i.json()}async function du(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapTerrain?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map terrain (${i.status})`)}return await i.json()}async function hu(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapDescriptors?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map descriptors (${i.status})`)}return await i.json()}async function mM(){const t=Qt(),e=qt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/admin/users`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list users (${n.status})`);return await n.json()}async function gM(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to create user (${i.status})`);return await i.json()}async function pu(t,e){const n=Qt(),i=qt();if(!i)throw new Error("Not authenticated");const r=await fetch(`${n}/api/admin/users/${encodeURIComponent(t)}`,{method:"PUT",headers:{Authorization:`Bearer ${i.token}`,"Content-Type":"application/json"},body:JSON.stringify({tools:e})});if(!r.ok)throw new Error(await r.text()||`Failed to update user (${r.status})`);return await r.json()}async function vM(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users/${encodeURIComponent(t)}`,{method:"DELETE",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to delete user (${i.status})`);return await i.json()}async function _M(){const t=Qt(),e=qt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list dev servers (${n.status})`);return await n.json()}async function yM(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to add dev server (${i.status})`);return await i.json()}async function xM(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/clear?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to clear history (${i.status})`);return await i.json()}async function SM(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/regenerateTerrain?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to regenerate terrain (${i.status})`);return await i.json()}async function MM(){const t=Qt(),e=qt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/discordWebhook`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to load webhook (${n.status})`);return await n.json()}async function EM(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/discordWebhook`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify({webhookUrl:t})});if(!i.ok)throw new Error(await i.text()||`Failed to save webhook (${i.status})`);return await i.json()}async function wM(t){const e=Qt(),n=qt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/exportDiscord`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to export to Discord (${i.status})`);return await i.json()}function TM(){const t=Lc(),e=Yi(),n=D.useMemo(()=>{const h=e.state;return h&&typeof h.from=="string"&&h.from.length>0?h.from:"/"},[e.state]),[i,r]=D.useState(""),[s,o]=D.useState(""),[a,l]=D.useState(null),[c,f]=D.useState(!1);async function d(h){if(h.preventDefault(),l(null),i.trim().length===0||s.length===0){l("Enter username and password");return}f(!0);try{const g=await dM(i.trim(),s);lM({token:g.token}),t(n,{replace:!0})}catch(g){const _=g instanceof Error?g.message:"Login failed";l(_)}finally{f(!1)}}return M.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24,boxSizing:"border-box"},children:M.jsxs("div",{className:"stack",style:{width:"min(440px, 100%)",gap:14},children:[M.jsxs("div",{style:{textAlign:"center"},children:[M.jsx("div",{className:"label",children:"Welcome"}),M.jsx("h1",{className:"h1",style:{fontSize:22,marginTop:6},children:"ReforgedZ Admin Menu"}),M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Sign in to continue."})]}),M.jsx("div",{className:"card",style:{padding:18},children:M.jsxs("form",{className:"stack",onSubmit:d,children:[M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx("div",{className:"label",children:"Username"}),M.jsx("input",{className:"input",value:i,onChange:h=>r(h.target.value),autoComplete:"username"})]}),M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx("div",{className:"label",children:"Password"}),M.jsx("input",{className:"input",type:"password",value:s,onChange:h=>o(h.target.value),autoComplete:"current-password"})]}),a?M.jsx("div",{className:"error",style:{fontSize:13},children:a}):null,M.jsx("button",{className:"button buttonPrimary",type:"submit",disabled:c,children:c?"Signing in…":"Sign in"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"If you aren't meant to be here, say hi to eiry, I know where you live!."})]})})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fh="161",AM=0,Op=1,bM=2,G0=1,CM=2,Ni=3,br=0,zn=1,di=2,Sr=0,Ks=1,kp=2,zp=3,Bp=4,RM=5,Br=100,PM=101,LM=102,Hp=103,Gp=104,NM=200,IM=201,DM=202,UM=203,ed=204,td=205,FM=206,OM=207,kM=208,zM=209,BM=210,HM=211,GM=212,VM=213,WM=214,jM=0,XM=1,$M=2,sc=3,YM=4,qM=5,KM=6,ZM=7,V0=0,QM=1,JM=2,Mr=0,eE=1,tE=2,nE=3,iE=4,rE=5,sE=6,W0=300,oo=301,ao=302,nd=303,id=304,Ic=306,rd=1e3,hi=1001,sd=1002,bn=1003,Vp=1004,Co=1005,Nn=1006,mu=1007,jr=1008,Er=1009,oE=1010,aE=1011,dh=1012,j0=1013,fr=1014,Ui=1015,ga=1016,X0=1017,$0=1018,Yr=1020,lE=1021,pi=1023,cE=1024,uE=1025,qr=1026,lo=1027,fE=1028,Y0=1029,dE=1030,q0=1031,K0=1033,gu=33776,vu=33777,_u=33778,yu=33779,Wp=35840,jp=35841,Xp=35842,$p=35843,Z0=36196,Yp=37492,qp=37496,Kp=37808,Zp=37809,Qp=37810,Jp=37811,em=37812,tm=37813,nm=37814,im=37815,rm=37816,sm=37817,om=37818,am=37819,lm=37820,cm=37821,xu=36492,um=36494,fm=36495,hE=36283,dm=36284,hm=36285,pm=36286,Q0=3e3,Kr=3001,pE=3200,mE=3201,J0=0,gE=1,Qn="",fn="srgb",Wi="srgb-linear",hh="display-p3",Dc="display-p3-linear",oc="linear",Ft="srgb",ac="rec709",lc="p3",cs=7680,mm=519,vE=512,_E=513,yE=514,e_=515,xE=516,SE=517,ME=518,EE=519,od=35044,gm="300 es",ad=1035,ki=2e3,cc=2001;class vo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=Math.PI/180,ld=180/Math.PI;function wr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[t&255]+xn[t>>8&255]+xn[t>>16&255]+xn[t>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function Dn(t,e,n){return Math.max(e,Math.min(n,t))}function wE(t,e){return(t%e+e)%e}function Su(t,e,n){return(1-n)*t+n*e}function vm(t){return(t&t-1)===0&&t!==0}function cd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function wi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Pt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,n=0){mt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,n,i,r,s,o,a,l,c){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],g=i[5],_=i[8],y=r[0],p=r[3],u=r[6],m=r[1],v=r[4],S=r[7],P=r[2],C=r[5],b=r[8];return s[0]=o*y+a*m+l*P,s[3]=o*p+a*v+l*C,s[6]=o*u+a*S+l*b,s[1]=c*y+f*m+d*P,s[4]=c*p+f*v+d*C,s[7]=c*u+f*S+d*b,s[2]=h*y+g*m+_*P,s[5]=h*p+g*v+_*C,s[8]=h*u+g*S+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,g=c*s-o*l,_=n*d+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Mu.makeScale(e,n)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mu=new gt;function t_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function uc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function TE(){const t=uc("canvas");return t.style.display="block",t}const _m={};function Zr(t){t in _m||(_m[t]=!0,console.warn(t))}const ym=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xm=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Va={[Wi]:{transfer:oc,primaries:ac,toReference:t=>t,fromReference:t=>t},[fn]:{transfer:Ft,primaries:ac,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Dc]:{transfer:oc,primaries:lc,toReference:t=>t.applyMatrix3(xm),fromReference:t=>t.applyMatrix3(ym)},[hh]:{transfer:Ft,primaries:lc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(xm),fromReference:t=>t.applyMatrix3(ym).convertLinearToSRGB()}},AE=new Set([Wi,Dc]),Lt={enabled:!0,_workingColorSpace:Wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!AE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Va[e].toReference,r=Va[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Va[t].primaries},getTransfer:function(t){return t===Qn?oc:Va[t].transfer}};function Zs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Eu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let us;class n_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{us===void 0&&(us=uc("canvas")),us.width=e.width,us.height=e.height;const i=us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=us}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=uc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zs(n[i]/255)*255):n[i]=Zs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bE=0;class i_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wu(r[o].image)):s.push(wu(r[o]))}else s=wu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function wu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?n_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CE=0;class Rn extends vo{constructor(e=Rn.DEFAULT_IMAGE,n=Rn.DEFAULT_MAPPING,i=hi,r=hi,s=Nn,o=jr,a=pi,l=Er,c=Rn.DEFAULT_ANISOTROPY,f=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=wr(),this.name="",this.source=new i_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Kr?fn:Qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==W0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===fn?Kr:Q0}set encoding(e){Zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kr?fn:Qn}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=W0;Rn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,n=0,i=0,r=1){an.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],g=l[5],_=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(g+1)/2,P=(u+1)/2,C=(f+h)/4,b=(d+y)/4,G=(_+p)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=b/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=G/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=b/s,r=G/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-_)*(p-_)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(m)<.001&&(m=1),this.x=(p-_)/m,this.y=(d-y)/m,this.z=(h-f)/m,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RE extends vo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new an(0,0,e,n),this.scissorTest=!1,this.viewport=new an(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Kr?fn:Qn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new i_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends RE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class r_ extends Rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class PE extends Rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],g=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==h||c!==g||f!==_){let p=1-a;const u=l*h+c*g+f*_+d*y,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),C=Math.atan2(P,u*m);p=Math.sin(p*C)/P,a=Math.sin(a*C)/P}const S=a*m;if(l=l*p+h*S,c=c*p+g*S,f=f*p+_*S,d=d*p+y*S,p===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=P,c*=P,f*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],g=s[o+2],_=s[o+3];return e[n]=a*_+f*d+l*g-c*h,e[n+1]=l*_+f*h+c*d-a*g,e[n+2]=c*_+f*g+a*h-l*d,e[n+3]=f*_-a*d-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*g*_,this._y=c*g*d-h*f*_,this._z=c*f*_+h*g*d,this._w=c*f*d-h*g*_;break;case"YXZ":this._x=h*f*d+c*g*_,this._y=c*g*d-h*f*_,this._z=c*f*_-h*g*d,this._w=c*f*d+h*g*_;break;case"ZXY":this._x=h*f*d-c*g*_,this._y=c*g*d+h*f*_,this._z=c*f*_+h*g*d,this._w=c*f*d-h*g*_;break;case"ZYX":this._x=h*f*d-c*g*_,this._y=c*g*d+h*f*_,this._z=c*f*_-h*g*d,this._w=c*f*d+h*g*_;break;case"YZX":this._x=h*f*d+c*g*_,this._y=c*g*d+h*f*_,this._z=c*f*_-h*g*d,this._w=c*f*d-h*g*_;break;case"XZY":this._x=h*f*d-c*g*_,this._y=c*g*d-h*f*_,this._z=c*f*_+h*g*d,this._w=c*f*d+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tu=new V,Sm=new rs;class Ma{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(s,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),ja.subVectors(this.max,Ro),fs.subVectors(e.a,Ro),ds.subVectors(e.b,Ro),hs.subVectors(e.c,Ro),Zi.subVectors(ds,fs),Qi.subVectors(hs,ds),Nr.subVectors(fs,hs);let n=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-Nr.z,Nr.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,Nr.z,0,-Nr.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-Nr.y,Nr.x,0];return!Au(n,fs,ds,hs,ja)||(n=[1,0,0,0,1,0,0,0,1],!Au(n,fs,ds,hs,ja))?!1:(Xa.crossVectors(Zi,Qi),n=[Xa.x,Xa.y,Xa.z],Au(n,fs,ds,hs,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new V,new V,new V,new V,new V,new V,new V,new V],oi=new V,Wa=new Ma,fs=new V,ds=new V,hs=new V,Zi=new V,Qi=new V,Nr=new V,Ro=new V,ja=new V,Xa=new V,Ir=new V;function Au(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ir.fromArray(t,s);const a=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),c=n.dot(Ir),f=i.dot(Ir);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const LE=new Ma,Po=new V,bu=new V;class Uc{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(bu)),this.expandByPoint(Po.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new V,Cu=new V,$a=new V,Ji=new V,Ru=new V,Ya=new V,Pu=new V;class s_{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cu.copy(e).add(n).multiplyScalar(.5),$a.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(Cu);const s=e.distanceTo(n)*.5,o=-this.direction.dot($a),a=Ji.dot(this.direction),l=-Ji.dot($a),c=Ji.lengthSq(),f=Math.abs(1-o*o);let d,h,g,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const y=1/f;d*=y,h*=y,g=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Cu).addScaledVector($a,h),g}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,s){Ru.subVectors(n,e),Ya.subVectors(i,e),Pu.crossVectors(Ru,Ya);let o=this.direction.dot(Pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(Ji,Ya));if(l<0)return null;const c=a*this.direction.dot(Ru.cross(Ji));if(c<0||l+c>o)return null;const f=-a*Ji.dot(Pu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,g,_,y,p){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,g,_,y,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,g,_,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=g,u[7]=_,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,g=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=g+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,g=l*d,_=c*f,y=c*d;n[0]=h+y*a,n[4]=_*a-g,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=g*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,g=l*d,_=c*f,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,g=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=_*c-g,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=g*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=y-h*d,n[8]=_*d+g,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=g*d+_,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,g=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=o*f,n[9]=g*d-_,n[2]=_*d-g,n[6]=a*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NE,e,IE)}lookAt(e,n,i){const r=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),er.crossVectors(i,Bn),er.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),er.crossVectors(i,Bn)),er.normalize(),qa.crossVectors(Bn,er),r[0]=er.x,r[4]=qa.x,r[8]=Bn.x,r[1]=er.y,r[5]=qa.y,r[9]=Bn.y,r[2]=er.z,r[6]=qa.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],g=i[13],_=i[2],y=i[6],p=i[10],u=i[14],m=i[3],v=i[7],S=i[11],P=i[15],C=r[0],b=r[4],G=r[8],ie=r[12],x=r[1],R=r[5],te=r[9],fe=r[13],O=r[2],ne=r[6],Q=r[10],le=r[14],H=r[3],$=r[7],Z=r[11],ae=r[15];return s[0]=o*C+a*x+l*O+c*H,s[4]=o*b+a*R+l*ne+c*$,s[8]=o*G+a*te+l*Q+c*Z,s[12]=o*ie+a*fe+l*le+c*ae,s[1]=f*C+d*x+h*O+g*H,s[5]=f*b+d*R+h*ne+g*$,s[9]=f*G+d*te+h*Q+g*Z,s[13]=f*ie+d*fe+h*le+g*ae,s[2]=_*C+y*x+p*O+u*H,s[6]=_*b+y*R+p*ne+u*$,s[10]=_*G+y*te+p*Q+u*Z,s[14]=_*ie+y*fe+p*le+u*ae,s[3]=m*C+v*x+S*O+P*H,s[7]=m*b+v*R+S*ne+P*$,s[11]=m*G+v*te+S*Q+P*Z,s[15]=m*ie+v*fe+S*le+P*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],g=e[14],_=e[3],y=e[7],p=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*g-i*l*g)+y*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*f-s*l*f)+p*(+n*c*d-n*a*g-s*o*d+i*o*g+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],g=e[11],_=e[12],y=e[13],p=e[14],u=e[15],m=d*p*c-y*h*c+y*l*g-a*p*g-d*l*u+a*h*u,v=_*h*c-f*p*c-_*l*g+o*p*g+f*l*u-o*h*u,S=f*y*c-_*d*c+_*a*g-o*y*g-f*a*u+o*d*u,P=_*d*l-f*y*l-_*a*h+o*y*h+f*a*p-o*d*p,C=n*m+i*v+r*S+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=m*b,e[1]=(y*h*s-d*p*s-y*r*g+i*p*g+d*r*u-i*h*u)*b,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*u+i*l*u)*b,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*g-i*l*g)*b,e[4]=v*b,e[5]=(f*p*s-_*h*s+_*r*g-n*p*g-f*r*u+n*h*u)*b,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*b,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*g+n*l*g)*b,e[8]=S*b,e[9]=(_*d*s-f*y*s-_*i*g+n*y*g+f*i*u-n*d*u)*b,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*b,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*g-n*a*g)*b,e[12]=P*b,e[13]=(f*y*r-_*d*r+_*i*h-n*y*h-f*i*p+n*d*p)*b,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*p-n*a*p)*b,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,g=s*f,_=s*d,y=o*f,p=o*d,u=a*d,m=l*c,v=l*f,S=l*d,P=i.x,C=i.y,b=i.z;return r[0]=(1-(y+u))*P,r[1]=(g+S)*P,r[2]=(_-v)*P,r[3]=0,r[4]=(g-S)*C,r[5]=(1-(h+u))*C,r[6]=(p+m)*C,r[7]=0,r[8]=(_+v)*b,r[9]=(p-m)*b,r[10]=(1-(h+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ai.copy(this);const c=1/s,f=1/o,d=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=f,ai.elements[5]*=f,ai.elements[6]*=f,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,n.setFromRotationMatrix(ai),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ki){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(a===ki)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===cc)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ki){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,g=(i+r)*f;let _,y;if(a===ki)_=(o+s)*d,y=-2*d;else if(a===cc)_=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ps=new V,ai=new Yt,NE=new V(0,0,0),IE=new V(1,1,1),er=new V,qa=new V,Bn=new V,Mm=new Yt,Em=new rs;class Ea{constructor(e=0,n=0,i=0,r=Ea.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Em.setFromEuler(this),this.setFromQuaternion(Em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ea.DEFAULT_ORDER="XYZ";class o_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DE=0;const wm=new V,ms=new rs,Ri=new Yt,Ka=new V,Lo=new V,UE=new V,FE=new rs,Tm=new V(1,0,0),Am=new V(0,1,0),bm=new V(0,0,1),OE={type:"added"},kE={type:"removed"};class tn extends vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new V,n=new Ea,i=new rs,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Yt},normalMatrix:{value:new gt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Tm,e)}rotateY(e){return this.rotateOnAxis(Am,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,n){return wm.copy(e).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tm,e)}translateY(e){return this.translateOnAxis(Am,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ka.copy(e):Ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Lo,Ka,this.up):Ri.lookAt(Ka,Lo,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Ri),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(OE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,UE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,FE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new V(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new V,Pi=new V,Lu=new V,Li=new V,gs=new V,vs=new V,Cm=new V,Nu=new V,Iu=new V,Du=new V;class Jn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),li.subVectors(e,n),r.cross(li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){li.subVectors(r,n),Pi.subVectors(i,n),Lu.subVectors(e,n);const o=li.dot(li),a=li.dot(Pi),l=li.dot(Lu),c=Pi.dot(Pi),f=Pi.dot(Lu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,g=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static isFrontFacing(e,n,i,r){return li.subVectors(i,n),Pi.subVectors(e,n),li.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),li.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;gs.subVectors(r,i),vs.subVectors(s,i),Nu.subVectors(e,i);const l=gs.dot(Nu),c=vs.dot(Nu);if(l<=0&&c<=0)return n.copy(i);Iu.subVectors(e,r);const f=gs.dot(Iu),d=vs.dot(Iu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(gs,o);Du.subVectors(e,s);const g=gs.dot(Du),_=vs.dot(Du);if(_>=0&&g<=_)return n.copy(s);const y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(vs,a);const p=f*_-g*d;if(p<=0&&d-f>=0&&g-_>=0)return Cm.subVectors(s,r),a=(d-f)/(d-f+(g-_)),n.copy(r).addScaledVector(Cm,a);const u=1/(p+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(gs,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const a_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Uu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ut{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Lt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Lt.workingColorSpace){if(e=wE(e,1),n=Dn(n,0,1),i=Dn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Uu(o,s,e+1/3),this.g=Uu(o,s,e),this.b=Uu(o,s,e-1/3)}return Lt.toWorkingColorSpace(this,r),this}setStyle(e,n=fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fn){const i=a_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}copyLinearToSRGB(e){return this.r=Eu(e.r),this.g=Eu(e.g),this.b=Eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Lt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(Dn(Sn.r*255,0,255))*65536+Math.round(Dn(Sn.g*255,0,255))*256+Math.round(Dn(Sn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Sn.copy(this),n);const i=Sn.r,r=Sn.g,s=Sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=fn){Lt.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,i=Sn.g,r=Sn.b;return e!==fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(Za);const i=Su(tr.h,Za.h,n),r=Su(tr.s,Za.s,n),s=Su(tr.l,Za.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new ut;ut.NAMES=a_;let zE=0;class as extends vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=Ks,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ed&&(i.blendSrc=this.blendSrc),this.blendDst!==td&&(i.blendDst=this.blendDst),this.blendEquation!==Br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class l_ extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=V0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new V,Qa=new mt;class dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=od,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qa.fromBufferAttribute(this,n),Qa.applyMatrix3(e),this.setXY(n,Qa.x,Qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==od&&(e.usage=this.usage),e}}class c_ extends dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class u_ extends dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class mn extends dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let BE=0;const Yn=new Yt,Fu=new tn,_s=new V,Hn=new Ma,No=new Ma,sn=new V;class hn extends vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t_(e)?u_:c_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new gt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,n,i){return Yn.makeTranslation(e,n,i),this.applyMatrix4(Yn),this}scale(e,n,i){return Yn.makeScale(e,n,i),this.applyMatrix4(Yn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];No.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Hn.min,No.min),Hn.expandByPoint(sn),sn.addVectors(Hn.max,No.max),Hn.expandByPoint(sn)):(Hn.expandByPoint(No.min),Hn.expandByPoint(No.max))}Hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)sn.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(e,c),sn.add(_s)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let x=0;x<a;x++)c[x]=new V,f[x]=new V;const d=new V,h=new V,g=new V,_=new mt,y=new mt,p=new mt,u=new V,m=new V;function v(x,R,te){d.fromArray(r,x*3),h.fromArray(r,R*3),g.fromArray(r,te*3),_.fromArray(o,x*2),y.fromArray(o,R*2),p.fromArray(o,te*2),h.sub(d),g.sub(d),y.sub(_),p.sub(_);const fe=1/(y.x*p.y-p.x*y.y);isFinite(fe)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(g,-y.y).multiplyScalar(fe),m.copy(g).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(fe),c[x].add(u),c[R].add(u),c[te].add(u),f[x].add(m),f[R].add(m),f[te].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let x=0,R=S.length;x<R;++x){const te=S[x],fe=te.start,O=te.count;for(let ne=fe,Q=fe+O;ne<Q;ne+=3)v(i[ne+0],i[ne+1],i[ne+2])}const P=new V,C=new V,b=new V,G=new V;function ie(x){b.fromArray(s,x*3),G.copy(b);const R=c[x];P.copy(R),P.sub(b.multiplyScalar(b.dot(R))).normalize(),C.crossVectors(G,R);const fe=C.dot(f[x])<0?-1:1;l[x*4]=P.x,l[x*4+1]=P.y,l[x*4+2]=P.z,l[x*4+3]=fe}for(let x=0,R=S.length;x<R;++x){const te=S[x],fe=te.start,O=te.count;for(let ne=fe,Q=fe+O;ne<Q;ne+=3)ie(i[ne+0]),ie(i[ne+1]),ie(i[ne+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,f=new V,d=new V;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let g=0,_=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*f;for(let u=0;u<f;u++)h[_++]=c[g++]}return new dn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const g=c[d];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,g=d.length;h<g;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rm=new Yt,Dr=new s_,Ja=new Uc,Pm=new V,ys=new V,xs=new V,Ss=new V,Ou=new V,el=new V,tl=new mt,nl=new mt,il=new mt,Lm=new V,Nm=new V,Im=new V,rl=new V,sl=new V;class ti extends tn{constructor(e=new hn,n=new l_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){el.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Ou.fromBufferAttribute(d,e),o?el.addScaledVector(Ou,f):el.addScaledVector(Ou.sub(n),f))}n.add(el)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(Ja.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Ja,Pm)===null||Dr.origin.distanceToSquared(Pm)>(e.far-e.near)**2))&&(Rm.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Rm),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let S=m,P=v;S<P;S+=3){const C=a.getX(S),b=a.getX(S+1),G=a.getX(S+2);r=ol(this,u,e,i,c,f,d,C,b,G),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let p=_,u=y;p<u;p+=3){const m=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=ol(this,o,e,i,c,f,d,m,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=m,P=v;S<P;S+=3){const C=S,b=S+1,G=S+2;r=ol(this,u,e,i,c,f,d,C,b,G),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let p=_,u=y;p<u;p+=3){const m=p,v=p+1,S=p+2;r=ol(this,o,e,i,c,f,d,m,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function HE(t,e,n,i,r,s,o,a){let l;if(e.side===zn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===br,a),l===null)return null;sl.copy(a),sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(sl);return c<n.near||c>n.far?null:{distance:c,point:sl.clone(),object:t}}function ol(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ys),t.getVertexPosition(l,xs),t.getVertexPosition(c,Ss);const f=HE(t,e,n,i,ys,xs,Ss,rl);if(f){r&&(tl.fromBufferAttribute(r,a),nl.fromBufferAttribute(r,l),il.fromBufferAttribute(r,c),f.uv=Jn.getInterpolation(rl,ys,xs,Ss,tl,nl,il,new mt)),s&&(tl.fromBufferAttribute(s,a),nl.fromBufferAttribute(s,l),il.fromBufferAttribute(s,c),f.uv1=Jn.getInterpolation(rl,ys,xs,Ss,tl,nl,il,new mt),f.uv2=f.uv1),o&&(Lm.fromBufferAttribute(o,a),Nm.fromBufferAttribute(o,l),Im.fromBufferAttribute(o,c),f.normal=Jn.getInterpolation(rl,ys,xs,Ss,Lm,Nm,Im,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};Jn.getNormal(ys,xs,Ss,d.normal),f.face=d}return f}class wa extends hn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(f,3)),this.setAttribute("uv",new mn(d,2));function _(y,p,u,m,v,S,P,C,b,G,ie){const x=S/b,R=P/G,te=S/2,fe=P/2,O=C/2,ne=b+1,Q=G+1;let le=0,H=0;const $=new V;for(let Z=0;Z<Q;Z++){const ae=Z*R-fe;for(let pe=0;pe<ne;pe++){const qe=pe*x-te;$[y]=qe*m,$[p]=ae*v,$[u]=O,c.push($.x,$.y,$.z),$[y]=0,$[p]=0,$[u]=C>0?1:-1,f.push($.x,$.y,$.z),d.push(pe/b),d.push(1-Z/G),le+=1}}for(let Z=0;Z<G;Z++)for(let ae=0;ae<b;ae++){const pe=h+ae+ne*Z,qe=h+ae+ne*(Z+1),ee=h+(ae+1)+ne*(Z+1),ce=h+(ae+1)+ne*Z;l.push(pe,qe,ce),l.push(qe,ee,ce),H+=6}a.addGroup(g,H,ie),g+=H,h+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Tn(t){const e={};for(let n=0;n<t.length;n++){const i=co(t[n]);for(const r in i)e[r]=i[r]}return e}function GE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function f_(t){return t.getRenderTarget()===null?t.outputColorSpace:Lt.workingColorSpace}const VE={clone:co,merge:Tn};var WE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WE,this.fragmentShader=jE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=GE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class d_ extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new V,Dm=new mt,Um=new mt;class Zn extends d_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ld*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ld*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,n){return this.getViewBounds(e,Dm,Um),n.subVectors(Um,Dm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ll*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ms=-90,Es=1;class XE extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(Ms,Es,e,n);r.layers=this.layers,this.add(r);const s=new Zn(Ms,Es,e,n);s.layers=this.layers,this.add(s);const o=new Zn(Ms,Es,e,n);o.layers=this.layers,this.add(o);const a=new Zn(Ms,Es,e,n);a.layers=this.layers,this.add(a);const l=new Zn(Ms,Es,e,n);l.layers=this.layers,this.add(l);const c=new Zn(Ms,Es,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class h_ extends Rn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:oo,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $E extends is{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Kr?fn:Qn),this.texture=new h_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wa(5,5,5),s=new Cr({name:"CubemapFromEquirect",uniforms:co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:Sr});s.uniforms.tEquirect.value=n;const o=new ti(r,s),a=n.minFilter;return n.minFilter===jr&&(n.minFilter=Nn),new XE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ku=new V,YE=new V,qE=new gt;class kr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ku.subVectors(i,n).cross(YE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ku),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||qE.getNormalMatrix(e),r=this.coplanarPoint(ku).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Uc,al=new V;class ph{constructor(e=new kr,n=new kr,i=new kr,r=new kr,s=new kr,o=new kr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ki){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],g=r[8],_=r[9],y=r[10],p=r[11],u=r[12],m=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,p-g,S-u).normalize(),i[1].setComponents(l+s,h+c,p+g,S+u).normalize(),i[2].setComponents(l+o,h+f,p+_,S+m).normalize(),i[3].setComponents(l-o,h-f,p-_,S-m).normalize(),i[4].setComponents(l-a,h-d,p-y,S-v).normalize(),n===ki)i[5].setComponents(l+a,h+d,p+y,S+v).normalize();else if(n===cc)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function p_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,g=d.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,f,d){const h=f.array,g=f._updateRange,_=f.updateRanges;if(t.bindBuffer(d,c),g.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let y=0,p=_.length;y<p;y++){const u=_[y];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:l}}class uo extends hn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,g=[],_=[],y=[],p=[];for(let u=0;u<f;u++){const m=u*h-o;for(let v=0;v<c;v++){const S=v*d-s;_.push(S,-m,0),y.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,S=m+c*(u+1),P=m+1+c*(u+1),C=m+1+c*u;g.push(v,S,C),g.push(S,P,C)}this.setIndex(g),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(y,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QE=`#ifdef USE_ALPHAHASH
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
#endif`,JE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ew=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iw=`#ifdef USE_AOMAP
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
#endif`,rw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sw=`#ifdef USE_BATCHING
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
#endif`,ow=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,aw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uw=`#ifdef USE_IRIDESCENCE
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
#endif`,fw=`#ifdef USE_BUMPMAP
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
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_w=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xw=`#define PI 3.141592653589793
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
} // validated`,Sw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mw=`vec3 transformedNormal = objectNormal;
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
#endif`,Ew=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ww=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Aw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cw=`
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
}`,Rw=`#ifdef USE_ENVMAP
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
#endif`,Pw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lw=`#ifdef USE_ENVMAP
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
#endif`,Nw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iw=`#ifdef USE_ENVMAP
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
#endif`,Dw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ow=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kw=`#ifdef USE_GRADIENTMAP
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
}`,zw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vw=`uniform bool receiveShadow;
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
#endif`,Ww=`#ifdef USE_ENVMAP
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
#endif`,jw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$w=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qw=`PhysicalMaterial material;
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
#endif`,Kw=`struct PhysicalMaterial {
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
}`,Zw=`
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
#endif`,Qw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aT=`#if defined( USE_POINTS_UV )
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
#endif`,lT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fT=`#ifdef USE_MORPHNORMALS
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
#endif`,dT=`#ifdef USE_MORPHTARGETS
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
#endif`,hT=`#ifdef USE_MORPHTARGETS
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
#endif`,pT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_T=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yT=`#ifdef USE_NORMALMAP
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
#endif`,xT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ST=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ET=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UT=`float getShadowMask() {
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
}`,FT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OT=`#ifdef USE_SKINNING
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
#endif`,kT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zT=`#ifdef USE_SKINNING
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
#endif`,BT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WT=`#ifdef USE_TRANSMISSION
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
#endif`,jT=`#ifdef USE_TRANSMISSION
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
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZT=`uniform sampler2D t2D;
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
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
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
}`,i1=`#if DEPTH_PACKING == 3200
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
}`,r1=`#define DISTANCE
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
}`,s1=`#define DISTANCE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
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
}`,c1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,f1=`uniform vec3 diffuse;
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
}`,d1=`#define LAMBERT
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
}`,h1=`#define LAMBERT
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
}`,p1=`#define MATCAP
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
}`,m1=`#define MATCAP
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
}`,g1=`#define NORMAL
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
}`,v1=`#define NORMAL
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
}`,_1=`#define PHONG
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
}`,y1=`#define PHONG
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
}`,x1=`#define STANDARD
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
}`,S1=`#define STANDARD
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
}`,M1=`#define TOON
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
}`,E1=`#define TOON
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
}`,w1=`uniform float size;
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
}`,T1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,b1=`uniform vec3 color;
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
}`,C1=`uniform float rotation;
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
}`,R1=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:ZE,alphahash_pars_fragment:QE,alphamap_fragment:JE,alphamap_pars_fragment:ew,alphatest_fragment:tw,alphatest_pars_fragment:nw,aomap_fragment:iw,aomap_pars_fragment:rw,batching_pars_vertex:sw,batching_vertex:ow,begin_vertex:aw,beginnormal_vertex:lw,bsdfs:cw,iridescence_fragment:uw,bumpmap_pars_fragment:fw,clipping_planes_fragment:dw,clipping_planes_pars_fragment:hw,clipping_planes_pars_vertex:pw,clipping_planes_vertex:mw,color_fragment:gw,color_pars_fragment:vw,color_pars_vertex:_w,color_vertex:yw,common:xw,cube_uv_reflection_fragment:Sw,defaultnormal_vertex:Mw,displacementmap_pars_vertex:Ew,displacementmap_vertex:ww,emissivemap_fragment:Tw,emissivemap_pars_fragment:Aw,colorspace_fragment:bw,colorspace_pars_fragment:Cw,envmap_fragment:Rw,envmap_common_pars_fragment:Pw,envmap_pars_fragment:Lw,envmap_pars_vertex:Nw,envmap_physical_pars_fragment:Ww,envmap_vertex:Iw,fog_vertex:Dw,fog_pars_vertex:Uw,fog_fragment:Fw,fog_pars_fragment:Ow,gradientmap_pars_fragment:kw,lightmap_fragment:zw,lightmap_pars_fragment:Bw,lights_lambert_fragment:Hw,lights_lambert_pars_fragment:Gw,lights_pars_begin:Vw,lights_toon_fragment:jw,lights_toon_pars_fragment:Xw,lights_phong_fragment:$w,lights_phong_pars_fragment:Yw,lights_physical_fragment:qw,lights_physical_pars_fragment:Kw,lights_fragment_begin:Zw,lights_fragment_maps:Qw,lights_fragment_end:Jw,logdepthbuf_fragment:eT,logdepthbuf_pars_fragment:tT,logdepthbuf_pars_vertex:nT,logdepthbuf_vertex:iT,map_fragment:rT,map_pars_fragment:sT,map_particle_fragment:oT,map_particle_pars_fragment:aT,metalnessmap_fragment:lT,metalnessmap_pars_fragment:cT,morphcolor_vertex:uT,morphnormal_vertex:fT,morphtarget_pars_vertex:dT,morphtarget_vertex:hT,normal_fragment_begin:pT,normal_fragment_maps:mT,normal_pars_fragment:gT,normal_pars_vertex:vT,normal_vertex:_T,normalmap_pars_fragment:yT,clearcoat_normal_fragment_begin:xT,clearcoat_normal_fragment_maps:ST,clearcoat_pars_fragment:MT,iridescence_pars_fragment:ET,opaque_fragment:wT,packing:TT,premultiplied_alpha_fragment:AT,project_vertex:bT,dithering_fragment:CT,dithering_pars_fragment:RT,roughnessmap_fragment:PT,roughnessmap_pars_fragment:LT,shadowmap_pars_fragment:NT,shadowmap_pars_vertex:IT,shadowmap_vertex:DT,shadowmask_pars_fragment:UT,skinbase_vertex:FT,skinning_pars_vertex:OT,skinning_vertex:kT,skinnormal_vertex:zT,specularmap_fragment:BT,specularmap_pars_fragment:HT,tonemapping_fragment:GT,tonemapping_pars_fragment:VT,transmission_fragment:WT,transmission_pars_fragment:jT,uv_pars_fragment:XT,uv_pars_vertex:$T,uv_vertex:YT,worldpos_vertex:qT,background_vert:KT,background_frag:ZT,backgroundCube_vert:QT,backgroundCube_frag:JT,cube_vert:e1,cube_frag:t1,depth_vert:n1,depth_frag:i1,distanceRGBA_vert:r1,distanceRGBA_frag:s1,equirect_vert:o1,equirect_frag:a1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:f1,meshlambert_vert:d1,meshlambert_frag:h1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:v1,meshphong_vert:_1,meshphong_frag:y1,meshphysical_vert:x1,meshphysical_frag:S1,meshtoon_vert:M1,meshtoon_frag:E1,points_vert:w1,points_frag:T1,shadow_vert:A1,shadow_frag:b1,sprite_vert:C1,sprite_frag:R1},Te={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Si={basic:{uniforms:Tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ut(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Tn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Tn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Tn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ut(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Tn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Tn([Te.points,Te.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Tn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Tn([Te.common,Te.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Tn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Tn([Te.sprite,Te.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Tn([Te.common,Te.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Tn([Te.lights,Te.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Si.physical={uniforms:Tn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const ll={r:0,b:0,g:0};function P1(t,e,n,i,r,s,o){const a=new ut(0);let l=s===!0?0:1,c,f,d=null,h=0,g=null;function _(p,u){let m=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),m=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ic)?(f===void 0&&(f=new ti(new wa(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:co(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=Lt.getTransfer(v.colorSpace)!==Ft,(d!==v||h!==v.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,g=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ti(new uo(2,2),new Cr({name:"BackgroundMaterial",uniforms:co(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(v.colorSpace)!==Ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(ll,f_(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:_}}function L1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function d(O,ne,Q,le,H){let $=!1;if(o){const Z=y(le,Q,ne);c!==Z&&(c=Z,g(c.object)),$=u(O,le,Q,H),$&&m(O,le,Q,H)}else{const Z=ne.wireframe===!0;(c.geometry!==le.id||c.program!==Q.id||c.wireframe!==Z)&&(c.geometry=le.id,c.program=Q.id,c.wireframe=Z,$=!0)}H!==null&&n.update(H,t.ELEMENT_ARRAY_BUFFER),($||f)&&(f=!1,G(O,ne,Q,le),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(O){return i.isWebGL2?t.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return i.isWebGL2?t.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function y(O,ne,Q){const le=Q.wireframe===!0;let H=a[O.id];H===void 0&&(H={},a[O.id]=H);let $=H[ne.id];$===void 0&&($={},H[ne.id]=$);let Z=$[le];return Z===void 0&&(Z=p(h()),$[le]=Z),Z}function p(O){const ne=[],Q=[],le=[];for(let H=0;H<r;H++)ne[H]=0,Q[H]=0,le[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:Q,attributeDivisors:le,object:O,attributes:{},index:null}}function u(O,ne,Q,le){const H=c.attributes,$=ne.attributes;let Z=0;const ae=Q.getAttributes();for(const pe in ae)if(ae[pe].location>=0){const ee=H[pe];let ce=$[pe];if(ce===void 0&&(pe==="instanceMatrix"&&O.instanceMatrix&&(ce=O.instanceMatrix),pe==="instanceColor"&&O.instanceColor&&(ce=O.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;Z++}return c.attributesNum!==Z||c.index!==le}function m(O,ne,Q,le){const H={},$=ne.attributes;let Z=0;const ae=Q.getAttributes();for(const pe in ae)if(ae[pe].location>=0){let ee=$[pe];ee===void 0&&(pe==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),pe==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor));const ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),H[pe]=ce,Z++}c.attributes=H,c.attributesNum=Z,c.index=le}function v(){const O=c.newAttributes;for(let ne=0,Q=O.length;ne<Q;ne++)O[ne]=0}function S(O){P(O,0)}function P(O,ne){const Q=c.newAttributes,le=c.enabledAttributes,H=c.attributeDivisors;Q[O]=1,le[O]===0&&(t.enableVertexAttribArray(O),le[O]=1),H[O]!==ne&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,ne),H[O]=ne)}function C(){const O=c.newAttributes,ne=c.enabledAttributes;for(let Q=0,le=ne.length;Q<le;Q++)ne[Q]!==O[Q]&&(t.disableVertexAttribArray(Q),ne[Q]=0)}function b(O,ne,Q,le,H,$,Z){Z===!0?t.vertexAttribIPointer(O,ne,Q,H,$):t.vertexAttribPointer(O,ne,Q,le,H,$)}function G(O,ne,Q,le){if(i.isWebGL2===!1&&(O.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=le.attributes,$=Q.getAttributes(),Z=ne.defaultAttributeValues;for(const ae in $){const pe=$[ae];if(pe.location>=0){let qe=H[ae];if(qe===void 0&&(ae==="instanceMatrix"&&O.instanceMatrix&&(qe=O.instanceMatrix),ae==="instanceColor"&&O.instanceColor&&(qe=O.instanceColor)),qe!==void 0){const ee=qe.normalized,ce=qe.itemSize,Ae=n.get(qe);if(Ae===void 0)continue;const Ue=Ae.buffer,$e=Ae.type,De=Ae.bytesPerElement,ft=i.isWebGL2===!0&&($e===t.INT||$e===t.UNSIGNED_INT||qe.gpuType===j0);if(qe.isInterleavedBufferAttribute){const Ye=qe.data,W=Ye.stride,vt=qe.offset;if(Ye.isInstancedInterleavedBuffer){for(let Ce=0;Ce<pe.locationSize;Ce++)P(pe.location+Ce,Ye.meshPerAttribute);O.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Ce=0;Ce<pe.locationSize;Ce++)S(pe.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Ce=0;Ce<pe.locationSize;Ce++)b(pe.location+Ce,ce/pe.locationSize,$e,ee,W*De,(vt+ce/pe.locationSize*Ce)*De,ft)}else{if(qe.isInstancedBufferAttribute){for(let Ye=0;Ye<pe.locationSize;Ye++)P(pe.location+Ye,qe.meshPerAttribute);O.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Ye=0;Ye<pe.locationSize;Ye++)S(pe.location+Ye);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Ye=0;Ye<pe.locationSize;Ye++)b(pe.location+Ye,ce/pe.locationSize,$e,ee,ce*De,ce/pe.locationSize*Ye*De,ft)}}else if(Z!==void 0){const ee=Z[ae];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(pe.location,ee);break;case 3:t.vertexAttrib3fv(pe.location,ee);break;case 4:t.vertexAttrib4fv(pe.location,ee);break;default:t.vertexAttrib1fv(pe.location,ee)}}}}C()}function ie(){te();for(const O in a){const ne=a[O];for(const Q in ne){const le=ne[Q];for(const H in le)_(le[H].object),delete le[H];delete ne[Q]}delete a[O]}}function x(O){if(a[O.id]===void 0)return;const ne=a[O.id];for(const Q in ne){const le=ne[Q];for(const H in le)_(le[H].object),delete le[H];delete ne[Q]}delete a[O.id]}function R(O){for(const ne in a){const Q=a[ne];if(Q[O.id]===void 0)continue;const le=Q[O.id];for(const H in le)_(le[H].object),delete le[H];delete Q[O.id]}}function te(){fe(),f=!0,c!==l&&(c=l,g(c.object))}function fe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:fe,dispose:ie,releaseStatesOfGeometry:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function N1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h;_++)this.render(f[_],d[_]);else{g.multiDrawArraysWEBGL(s,f,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function I1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),P=v&&S,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:C}}function D1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new kr,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||i!==0||r;return r=h,i=d.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,g){const _=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const m=s?0:i,v=m*4;let S=u.clippingState||null;l.value=S,S=f(_,h,v,g);for(let P=0;P!==v;++P)S[P]=n[P];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,g,_){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const u=g+y*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,S=g;v!==y;++v,S+=4)o.copy(d[v]).applyMatrix4(m,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function U1(t){let e=new WeakMap;function n(o,a){return a===nd?o.mapping=oo:a===id&&(o.mapping=ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nd||a===id)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $E(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class m_ extends d_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gs=4,Fm=[.125,.215,.35,.446,.526,.582],Hr=20,zu=new m_,Om=new ut;let Bu=null,Hu=0,Gu=0;const zr=(1+Math.sqrt(5))/2,ws=1/zr,km=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,zr,ws),new V(0,zr,-ws),new V(ws,0,zr),new V(-ws,0,zr),new V(zr,ws,0),new V(-zr,ws,0)];class zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Hu,Gu),e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===oo||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ga,format:pi,colorSpace:Wi,depthBuffer:!1},r=Bm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F1(s)),this._blurMaterial=O1(s,e,n)}return r}_compileMaterial(e){const n=new ti(this._lodPlanes[0],e);this._renderer.compile(n,zu)}_sceneToCubeUV(e,n,i,r){const a=new Zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Om),f.toneMapping=Mr,f.autoClear=!1;const g=new l_({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),_=new ti(new wa,g);let y=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,y=!0):(g.color.copy(Om),y=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;cl(r,m*v,u>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===oo||e.mapping===ao;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ti(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;cl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,zu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=km[(r-1)%km.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new ti(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Hr-1),y=s/_,p=isFinite(s)?1+Math.floor(f*y):Hr;p>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hr}`);const u=[];let m=0;for(let b=0;b<Hr;++b){const G=b/y,ie=Math.exp(-G*G/2);u.push(ie),b===0?m+=ie:b<p&&(m+=2*ie)}for(let b=0;b<u.length;b++)u[b]=u[b]/m;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-Gs?r-v+Gs:0),C=4*(this._cubeSize-S);cl(n,P,C,3*S,2*S),l.setRenderTarget(n),l.render(d,zu)}}function F1(t){const e=[],n=[],i=[];let r=t;const s=t-Gs+1+Fm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Gs?l=Fm[o-t+Gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],g=6,_=6,y=3,p=2,u=1,m=new Float32Array(y*_*g),v=new Float32Array(p*_*g),S=new Float32Array(u*_*g);for(let C=0;C<g;C++){const b=C%3*2/3-1,G=C>2?0:-1,ie=[b,G,0,b+2/3,G,0,b+2/3,G+1,0,b,G,0,b+2/3,G+1,0,b,G+1,0];m.set(ie,y*_*C),v.set(h,p*_*C);const x=[C,C,C,C,C,C];S.set(x,u*_*C)}const P=new hn;P.setAttribute("position",new dn(m,y)),P.setAttribute("uv",new dn(v,p)),P.setAttribute("faceIndex",new dn(S,u)),e.push(P),r>Gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bm(t,e,n){const i=new is(t,e,n);return i.texture.mapping=Ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function O1(t,e,n){const i=new Float32Array(Hr),r=new V(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Hm(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Gm(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}function k1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===nd||l===id,f=l===oo||l===ao;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new zm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new zm(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function z1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function B1(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const y=g[_];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(d){const h=[],g=d.index,_=d.attributes.position;let y=0;if(g!==null){const m=g.array;y=g.version;for(let v=0,S=m.length;v<S;v+=3){const P=m[v+0],C=m[v+1],b=m[v+2];h.push(P,C,C,b,b,P)}}else if(_!==void 0){const m=_.array;y=_.version;for(let v=0,S=m.length/3-1;v<S;v+=3){const P=v+0,C=v+1,b=v+2;h.push(P,C,C,b,b,P)}}else return;const p=new(t_(h)?u_:c_)(h,1);p.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function H1(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function f(g,_){t.drawElements(s,_,a,g*l),n.update(_,s,1)}function d(g,_,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,a,g*l,y),n.update(_,s,y)}function h(g,_,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(g[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,a,g,0,y);let u=0;for(let m=0;m<y;m++)u+=_[m];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function G1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function V1(t,e){return t[0]-e[0]}function W1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function j1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new an,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let p=s.get(f);if(p===void 0||p.count!==y){let ne=function(){fe.dispose(),s.delete(f),f.removeEventListener("dispose",ne)};var g=ne;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,P=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],G=f.morphAttributes.color||[];let ie=0;v===!0&&(ie=1),S===!0&&(ie=2),P===!0&&(ie=3);let x=f.attributes.position.count*ie,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const te=new Float32Array(x*R*4*y),fe=new r_(te,x,R,y);fe.type=Ui,fe.needsUpdate=!0;const O=ie*4;for(let Q=0;Q<y;Q++){const le=C[Q],H=b[Q],$=G[Q],Z=x*R*4*Q;for(let ae=0;ae<le.count;ae++){const pe=ae*O;v===!0&&(o.fromBufferAttribute(le,ae),te[Z+pe+0]=o.x,te[Z+pe+1]=o.y,te[Z+pe+2]=o.z,te[Z+pe+3]=0),S===!0&&(o.fromBufferAttribute(H,ae),te[Z+pe+4]=o.x,te[Z+pe+5]=o.y,te[Z+pe+6]=o.z,te[Z+pe+7]=0),P===!0&&(o.fromBufferAttribute($,ae),te[Z+pe+8]=o.x,te[Z+pe+9]=o.y,te[Z+pe+10]=o.z,te[Z+pe+11]=$.itemSize===4?o.w:1)}}p={count:y,texture:fe,size:new mt(x,R)},s.set(f,p),f.addEventListener("dispose",ne)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const m=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",m),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let S=0;S<_;S++)y[S]=[S,0];i[f.id]=y}for(let S=0;S<_;S++){const P=y[S];P[0]=S,P[1]=h[S]}y.sort(W1);for(let S=0;S<8;S++)S<_&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(V1);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let m=0;for(let S=0;S<8;S++){const P=a[S],C=P[0],b=P[1];C!==Number.MAX_SAFE_INTEGER&&b?(p&&f.getAttribute("morphTarget"+S)!==p[C]&&f.setAttribute("morphTarget"+S,p[C]),u&&f.getAttribute("morphNormal"+S)!==u[C]&&f.setAttribute("morphNormal"+S,u[C]),r[S]=b,m+=b):(p&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),u&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const v=f.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function X1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class g_ extends Rn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:qr,f!==qr&&f!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===qr&&(i=fr),i===void 0&&f===lo&&(i=Yr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const v_=new Rn,__=new g_(1,1);__.compareFunction=e_;const y_=new r_,x_=new PE,S_=new h_,Vm=[],Wm=[],jm=new Float32Array(16),Xm=new Float32Array(9),$m=new Float32Array(4);function _o(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vm[r];if(s===void 0&&(s=new Float32Array(r),Vm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function nn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function rn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fc(t,e){let n=Wm[e];n===void 0&&(n=new Int32Array(e),Wm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2fv(this.addr,e),rn(n,e)}}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(nn(n,e))return;t.uniform3fv(this.addr,e),rn(n,e)}}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4fv(this.addr,e),rn(n,e)}}function Z1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;$m.set(i),t.uniformMatrix2fv(this.addr,!1,$m),rn(n,i)}}function Q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;Xm.set(i),t.uniformMatrix3fv(this.addr,!1,Xm),rn(n,i)}}function J1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(nn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),rn(n,e)}else{if(nn(n,i))return;jm.set(i),t.uniformMatrix4fv(this.addr,!1,jm),rn(n,i)}}function eA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2iv(this.addr,e),rn(n,e)}}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3iv(this.addr,e),rn(n,e)}}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4iv(this.addr,e),rn(n,e)}}function rA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(nn(n,e))return;t.uniform2uiv(this.addr,e),rn(n,e)}}function oA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(nn(n,e))return;t.uniform3uiv(this.addr,e),rn(n,e)}}function aA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(nn(n,e))return;t.uniform4uiv(this.addr,e),rn(n,e)}}function lA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?__:v_;n.setTexture2D(e||s,r)}function cA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||x_,r)}function uA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||S_,r)}function fA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||y_,r)}function dA(t){switch(t){case 5126:return $1;case 35664:return Y1;case 35665:return q1;case 35666:return K1;case 35674:return Z1;case 35675:return Q1;case 35676:return J1;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return rA;case 36294:return sA;case 36295:return oA;case 36296:return aA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return cA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return fA}}function hA(t,e){t.uniform1fv(this.addr,e)}function pA(t,e){const n=_o(e,this.size,2);t.uniform2fv(this.addr,n)}function mA(t,e){const n=_o(e,this.size,3);t.uniform3fv(this.addr,n)}function gA(t,e){const n=_o(e,this.size,4);t.uniform4fv(this.addr,n)}function vA(t,e){const n=_o(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _A(t,e){const n=_o(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yA(t,e){const n=_o(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xA(t,e){t.uniform1iv(this.addr,e)}function SA(t,e){t.uniform2iv(this.addr,e)}function MA(t,e){t.uniform3iv(this.addr,e)}function EA(t,e){t.uniform4iv(this.addr,e)}function wA(t,e){t.uniform1uiv(this.addr,e)}function TA(t,e){t.uniform2uiv(this.addr,e)}function AA(t,e){t.uniform3uiv(this.addr,e)}function bA(t,e){t.uniform4uiv(this.addr,e)}function CA(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);nn(i,s)||(t.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||v_,s[o])}function RA(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);nn(i,s)||(t.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||x_,s[o])}function PA(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);nn(i,s)||(t.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||S_,s[o])}function LA(t,e,n){const i=this.cache,r=e.length,s=Fc(n,r);nn(i,s)||(t.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||y_,s[o])}function NA(t){switch(t){case 5126:return hA;case 35664:return pA;case 35665:return mA;case 35666:return gA;case 35674:return vA;case 35675:return _A;case 35676:return yA;case 5124:case 35670:return xA;case 35667:case 35671:return SA;case 35668:case 35672:return MA;case 35669:case 35673:return EA;case 5125:return wA;case 36294:return TA;case 36295:return AA;case 36296:return bA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return RA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return LA}}class IA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dA(n.type)}}class DA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=NA(n.type)}}class UA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Vu=/(\w+)(\])?(\[|\.)?/g;function Ym(t,e){t.seq.push(e),t.map[e.id]=e}function FA(t,e,n){const i=t.name,r=i.length;for(Vu.lastIndex=0;;){const s=Vu.exec(i),o=Vu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ym(n,c===void 0?new IA(a,t,e):new DA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new UA(a),Ym(n,d)),n=d}}}class Nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);FA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function qm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const OA=37297;let kA=0;function zA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function BA(t){const e=Lt.getPrimaries(Lt.workingColorSpace),n=Lt.getPrimaries(t);let i;switch(e===n?i="":e===lc&&n===ac?i="LinearDisplayP3ToLinearSRGB":e===ac&&n===lc&&(i="LinearSRGBToLinearDisplayP3"),t){case Wi:case Dc:return[i,"LinearTransferOETF"];case fn:case hh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Km(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+zA(t.getShaderSource(e),o)}else return r}function HA(t,e){const n=BA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function GA(t,e){let n;switch(e){case eE:n="Linear";break;case tE:n="Reinhard";break;case nE:n="OptimizedCineon";break;case iE:n="ACESFilmic";break;case sE:n="AgX";break;case rE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function VA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}function WA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function jA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function XA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vs(t){return t!==""}function Zm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $A=/^[ \t]*#include +<([\w\d./]+)>/gm;function ud(t){return t.replace($A,qA)}const YA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qA(t,e){let n=pt[e];if(n===void 0){const i=YA.get(e);if(i!==void 0)n=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ud(n)}const KA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(t){return t.replace(KA,ZA)}function ZA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function eg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function QA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===G0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===CM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function JA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case Ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function tb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case V0:e="ENVMAP_BLENDING_MULTIPLY";break;case QM:e="ENVMAP_BLENDING_MIX";break;case JM:e="ENVMAP_BLENDING_ADD";break}return e}function nb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ib(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=QA(n),c=JA(n),f=eb(n),d=tb(n),h=nb(n),g=n.isWebGL2?"":VA(n),_=WA(n),y=jA(s),p=r.createProgram();let u,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Vs).join(`
`),u.length>0&&(u+=`
`),m=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Vs).join(`
`),m.length>0&&(m+=`
`)):(u=[eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),m=[g,eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?pt.tonemapping_pars_fragment:"",n.toneMapping!==Mr?GA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,HA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vs).join(`
`)),o=ud(o),o=Zm(o,n),o=Qm(o,n),a=ud(a),a=Zm(a,n),a=Qm(a,n),o=Jm(o),a=Jm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=v+u+o,P=v+m+a,C=qm(r,r.VERTEX_SHADER,S),b=qm(r,r.FRAGMENT_SHADER,P);r.attachShader(p,C),r.attachShader(p,b),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function G(te){if(t.debug.checkShaderErrors){const fe=r.getProgramInfoLog(p).trim(),O=r.getShaderInfoLog(C).trim(),ne=r.getShaderInfoLog(b).trim();let Q=!0,le=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,C,b);else{const H=Km(r,C,"vertex"),$=Km(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+te.name+`
Material Type: `+te.type+`

Program Info Log: `+fe+`
`+H+`
`+$)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(O===""||ne==="")&&(le=!1);le&&(te.diagnostics={runnable:Q,programLog:fe,vertexShader:{log:O,prefix:u},fragmentShader:{log:ne,prefix:m}})}r.deleteShader(C),r.deleteShader(b),ie=new Nl(r,p),x=XA(r,p)}let ie;this.getUniforms=function(){return ie===void 0&&G(this),ie};let x;this.getAttributes=function(){return x===void 0&&G(this),x};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(p,OA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=b,this}let rb=0;class sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ob(e),n.set(e,i)),i}}class ob{constructor(e){this.id=rb++,this.code=e,this.usedTimes=0}}function ab(t,e,n,i,r,s,o){const a=new o_,l=new sb,c=new Set,f=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,R,te,fe,O){const ne=fe.fog,Q=O.geometry,le=x.isMeshStandardMaterial?fe.environment:null,H=(x.isMeshStandardMaterial?n:e).get(x.envMap||le),$=H&&H.mapping===Ic?H.image.height:null,Z=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const ae=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,pe=ae!==void 0?ae.length:0;let qe=0;Q.morphAttributes.position!==void 0&&(qe=1),Q.morphAttributes.normal!==void 0&&(qe=2),Q.morphAttributes.color!==void 0&&(qe=3);let ee,ce,Ae,Ue;if(Z){const Je=Si[Z];ee=Je.vertexShader,ce=Je.fragmentShader}else ee=x.vertexShader,ce=x.fragmentShader,l.update(x),Ae=l.getVertexShaderID(x),Ue=l.getFragmentShaderID(x);const $e=t.getRenderTarget(),De=O.isInstancedMesh===!0,ft=O.isBatchedMesh===!0,Ye=!!x.map,W=!!x.matcap,vt=!!H,Ce=!!x.aoMap,ze=!!x.lightMap,Ge=!!x.bumpMap,At=!!x.normalMap,lt=!!x.displacementMap,A=!!x.emissiveMap,E=!!x.metalnessMap,K=!!x.roughnessMap,me=x.anisotropy>0,de=x.clearcoat>0,J=x.iridescence>0,Fe=x.sheen>0,be=x.transmission>0,Re=me&&!!x.anisotropyMap,tt=de&&!!x.clearcoatMap,at=de&&!!x.clearcoatNormalMap,he=de&&!!x.clearcoatRoughnessMap,wt=J&&!!x.iridescenceMap,rt=J&&!!x.iridescenceThicknessMap,Qe=Fe&&!!x.sheenColorMap,Ve=Fe&&!!x.sheenRoughnessMap,Le=!!x.specularMap,nt=!!x.specularColorMap,St=!!x.specularIntensityMap,_t=be&&!!x.transmissionMap,ct=be&&!!x.thicknessMap,je=!!x.gradientMap,L=!!x.alphaMap,ge=x.alphaTest>0,ve=!!x.alphaHash,Ne=!!x.extensions;let Xe=Mr;x.toneMapped&&($e===null||$e.isXRRenderTarget===!0)&&(Xe=t.toneMapping);const yt={isWebGL2:d,shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:ce,defines:x.defines,customVertexShaderID:Ae,customFragmentShaderID:Ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:ft,instancing:De,instancingColor:De&&O.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:$e===null?t.outputColorSpace:$e.isXRRenderTarget===!0?$e.texture.colorSpace:Wi,alphaToCoverage:!!x.alphaToCoverage,map:Ye,matcap:W,envMap:vt,envMapMode:vt&&H.mapping,envMapCubeUVHeight:$,aoMap:Ce,lightMap:ze,bumpMap:Ge,normalMap:At,displacementMap:g&&lt,emissiveMap:A,normalMapObjectSpace:At&&x.normalMapType===gE,normalMapTangentSpace:At&&x.normalMapType===J0,metalnessMap:E,roughnessMap:K,anisotropy:me,anisotropyMap:Re,clearcoat:de,clearcoatMap:tt,clearcoatNormalMap:at,clearcoatRoughnessMap:he,iridescence:J,iridescenceMap:wt,iridescenceThicknessMap:rt,sheen:Fe,sheenColorMap:Qe,sheenRoughnessMap:Ve,specularMap:Le,specularColorMap:nt,specularIntensityMap:St,transmission:be,transmissionMap:_t,thicknessMap:ct,gradientMap:je,opaque:x.transparent===!1&&x.blending===Ks&&x.alphaToCoverage===!1,alphaMap:L,alphaTest:ge,alphaHash:ve,combine:x.combine,mapUv:Ye&&p(x.map.channel),aoMapUv:Ce&&p(x.aoMap.channel),lightMapUv:ze&&p(x.lightMap.channel),bumpMapUv:Ge&&p(x.bumpMap.channel),normalMapUv:At&&p(x.normalMap.channel),displacementMapUv:lt&&p(x.displacementMap.channel),emissiveMapUv:A&&p(x.emissiveMap.channel),metalnessMapUv:E&&p(x.metalnessMap.channel),roughnessMapUv:K&&p(x.roughnessMap.channel),anisotropyMapUv:Re&&p(x.anisotropyMap.channel),clearcoatMapUv:tt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&p(x.sheenRoughnessMap.channel),specularMapUv:Le&&p(x.specularMap.channel),specularColorMapUv:nt&&p(x.specularColorMap.channel),specularIntensityMapUv:St&&p(x.specularIntensityMap.channel),transmissionMapUv:_t&&p(x.transmissionMap.channel),thicknessMapUv:ct&&p(x.thicknessMap.channel),alphaMapUv:L&&p(x.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(At||me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Q.attributes.uv&&(Ye||L),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:qe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&te.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ye&&x.map.isVideoTexture===!0&&Lt.getTransfer(x.map.colorSpace)===Ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===di,flipSided:x.side===zn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:Ne&&x.extensions.derivatives===!0,extensionFragDepth:Ne&&x.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ne&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const te in x.defines)R.push(te),R.push(x.defines[te]);return x.isRawShaderMaterial===!1&&(v(R,x),S(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function v(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function S(x,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const R=y[x.type];let te;if(R){const fe=Si[R];te=VE.clone(fe.uniforms)}else te=x.uniforms;return te}function C(x,R){let te;for(let fe=0,O=f.length;fe<O;fe++){const ne=f[fe];if(ne.cacheKey===R){te=ne,++te.usedTimes;break}}return te===void 0&&(te=new ib(t,R,x,s),f.push(te)),te}function b(x){if(--x.usedTimes===0){const R=f.indexOf(x);f[R]=f[f.length-1],f.pop(),x.destroy()}}function G(x){l.remove(x)}function ie(){l.dispose()}return{getParameters:u,getProgramCacheKey:m,getUniforms:P,acquireProgram:C,releaseProgram:b,releaseShaderCache:G,programs:f,dispose:ie}}function lb(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function cb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ng(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,g,_,y,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:g,groupOrder:_,renderOrder:d.renderOrder,z:y,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=g,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=y,u.group=p),e++,u}function a(d,h,g,_,y,p){const u=o(d,h,g,_,y,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(d,h,g,_,y,p){const u=o(d,h,g,_,y,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||cb),i.length>1&&i.sort(h||tg),r.length>1&&r.sort(h||tg)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function ub(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ng,t.set(i,[o])):r>=s.length?(o=new ng,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new ut};break;case"SpotLight":n={position:new V,direction:new V,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":n={color:new ut,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function db(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let hb=0;function pb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mb(t,e){const n=new fb,i=db(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new V);const s=new V,o=new Yt,a=new Yt;function l(f,d){let h=0,g=0,_=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let y=0,p=0,u=0,m=0,v=0,S=0,P=0,C=0,b=0,G=0,ie=0;f.sort(pb);const x=d===!0?Math.PI:1;for(let te=0,fe=f.length;te<fe;te++){const O=f[te],ne=O.color,Q=O.intensity,le=O.distance,H=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=ne.r*Q*x,g+=ne.g*Q*x,_+=ne.b*Q*x;else if(O.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(O.sh.coefficients[$],Q);ie++}else if(O.isDirectionalLight){const $=n.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*x),O.castShadow){const Z=O.shadow,ae=i.get(O);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,r.directionalShadow[y]=ae,r.directionalShadowMap[y]=H,r.directionalShadowMatrix[y]=O.shadow.matrix,S++}r.directional[y]=$,y++}else if(O.isSpotLight){const $=n.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(ne).multiplyScalar(Q*x),$.distance=le,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,r.spot[u]=$;const Z=O.shadow;if(O.map&&(r.spotLightMap[b]=O.map,b++,Z.updateMatrices(O),O.castShadow&&G++),r.spotLightMatrix[u]=Z.matrix,O.castShadow){const ae=i.get(O);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,r.spotShadow[u]=ae,r.spotShadowMap[u]=H,C++}u++}else if(O.isRectAreaLight){const $=n.get(O);$.color.copy(ne).multiplyScalar(Q),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),r.rectArea[m]=$,m++}else if(O.isPointLight){const $=n.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity*x),$.distance=O.distance,$.decay=O.decay,O.castShadow){const Z=O.shadow,ae=i.get(O);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,ae.shadowCameraNear=Z.camera.near,ae.shadowCameraFar=Z.camera.far,r.pointShadow[p]=ae,r.pointShadowMap[p]=H,r.pointShadowMatrix[p]=O.shadow.matrix,P++}r.point[p]=$,p++}else if(O.isHemisphereLight){const $=n.get(O);$.skyColor.copy(O.color).multiplyScalar(Q*x),$.groundColor.copy(O.groundColor).multiplyScalar(Q*x),r.hemi[v]=$,v++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=_;const R=r.hash;(R.directionalLength!==y||R.pointLength!==p||R.spotLength!==u||R.rectAreaLength!==m||R.hemiLength!==v||R.numDirectionalShadows!==S||R.numPointShadows!==P||R.numSpotShadows!==C||R.numSpotMaps!==b||R.numLightProbes!==ie)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=m,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+b-G,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=ie,R.directionalLength=y,R.pointLength=p,R.spotLength=u,R.rectAreaLength=m,R.hemiLength=v,R.numDirectionalShadows=S,R.numPointShadows=P,R.numSpotShadows=C,R.numSpotMaps=b,R.numLightProbes=ie,r.version=hb++)}function c(f,d){let h=0,g=0,_=0,y=0,p=0;const u=d.matrixWorldInverse;for(let m=0,v=f.length;m<v;m++){const S=f[m];if(S.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),h++}else if(S.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const P=r.rectArea[y];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),g++}else if(S.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function ig(t,e){const n=new mb(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function gb(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new ig(t,e),n.set(s,[l])):o>=a.length?(l=new ig(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class vb extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _b extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
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
}`;function Sb(t,e,n){let i=new ph;const r=new mt,s=new mt,o=new an,a=new vb({depthPacking:mE}),l=new _b,c={},f=n.maxTextureSize,d={[br]:zn,[zn]:br,[di]:di},h=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:yb,fragmentShader:xb}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new hn;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ti(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=G0;let u=this.type;this.render=function(C,b,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const ie=t.getRenderTarget(),x=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),te=t.state;te.setBlending(Sr),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const fe=u!==Ni&&this.type===Ni,O=u===Ni&&this.type!==Ni;for(let ne=0,Q=C.length;ne<Q;ne++){const le=C[ne],H=le.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const $=H.getFrameExtents();if(r.multiply($),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,H.mapSize.y=s.y)),H.map===null||fe===!0||O===!0){const ae=this.type!==Ni?{minFilter:bn,magFilter:bn}:{};H.map!==null&&H.map.dispose(),H.map=new is(r.x,r.y,ae),H.map.texture.name=le.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const Z=H.getViewportCount();for(let ae=0;ae<Z;ae++){const pe=H.getViewport(ae);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),te.viewport(o),H.updateMatrices(le,ae),i=H.getFrustum(),S(b,G,H.camera,le,this.type)}H.isPointLightShadow!==!0&&this.type===Ni&&m(H,G),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(ie,x,R)};function m(C,b){const G=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new is(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,G,h,y,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,G,g,y,null)}function v(C,b,G,ie){let x=null;const R=G.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=G.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const te=x.uuid,fe=b.uuid;let O=c[te];O===void 0&&(O={},c[te]=O);let ne=O[fe];ne===void 0&&(ne=x.clone(),O[fe]=ne,b.addEventListener("dispose",P)),x=ne}if(x.visible=b.visible,x.wireframe=b.wireframe,ie===Ni?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,G.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const te=t.properties.get(x);te.light=G}return x}function S(C,b,G,ie,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld);const fe=e.update(C),O=C.material;if(Array.isArray(O)){const ne=fe.groups;for(let Q=0,le=ne.length;Q<le;Q++){const H=ne[Q],$=O[H.materialIndex];if($&&$.visible){const Z=v(C,$,ie,x);C.onBeforeShadow(t,C,b,G,fe,Z,H),t.renderBufferDirect(G,null,fe,Z,C,H),C.onAfterShadow(t,C,b,G,fe,Z,H)}}}else if(O.visible){const ne=v(C,O,ie,x);C.onBeforeShadow(t,C,b,G,fe,ne,null),t.renderBufferDirect(G,null,fe,ne,C,null),C.onAfterShadow(t,C,b,G,fe,ne,null)}}const te=C.children;for(let fe=0,O=te.length;fe<O;fe++)S(te[fe],b,G,ie,x)}function P(C){C.target.removeEventListener("dispose",P);for(const G in c){const ie=c[G],x=C.target.uuid;x in ie&&(ie[x].dispose(),delete ie[x])}}}function Mb(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ge=new an;let ve=null;const Ne=new an(0,0,0,0);return{setMask:function(Xe){ve!==Xe&&!L&&(t.colorMask(Xe,Xe,Xe,Xe),ve=Xe)},setLocked:function(Xe){L=Xe},setClear:function(Xe,yt,Je,Dt,oe){oe===!0&&(Xe*=Dt,yt*=Dt,Je*=Dt),ge.set(Xe,yt,Je,Dt),Ne.equals(ge)===!1&&(t.clearColor(Xe,yt,Je,Dt),Ne.copy(ge))},reset:function(){L=!1,ve=null,Ne.set(-1,0,0,0)}}}function s(){let L=!1,ge=null,ve=null,Ne=null;return{setTest:function(Xe){Xe?De(t.DEPTH_TEST):ft(t.DEPTH_TEST)},setMask:function(Xe){ge!==Xe&&!L&&(t.depthMask(Xe),ge=Xe)},setFunc:function(Xe){if(ve!==Xe){switch(Xe){case jM:t.depthFunc(t.NEVER);break;case XM:t.depthFunc(t.ALWAYS);break;case $M:t.depthFunc(t.LESS);break;case sc:t.depthFunc(t.LEQUAL);break;case YM:t.depthFunc(t.EQUAL);break;case qM:t.depthFunc(t.GEQUAL);break;case KM:t.depthFunc(t.GREATER);break;case ZM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=Xe}},setLocked:function(Xe){L=Xe},setClear:function(Xe){Ne!==Xe&&(t.clearDepth(Xe),Ne=Xe)},reset:function(){L=!1,ge=null,ve=null,Ne=null}}}function o(){let L=!1,ge=null,ve=null,Ne=null,Xe=null,yt=null,Je=null,Dt=null,oe=null;return{setTest:function(re){L||(re?De(t.STENCIL_TEST):ft(t.STENCIL_TEST))},setMask:function(re){ge!==re&&!L&&(t.stencilMask(re),ge=re)},setFunc:function(re,Me,se){(ve!==re||Ne!==Me||Xe!==se)&&(t.stencilFunc(re,Me,se),ve=re,Ne=Me,Xe=se)},setOp:function(re,Me,se){(yt!==re||Je!==Me||Dt!==se)&&(t.stencilOp(re,Me,se),yt=re,Je=Me,Dt=se)},setLocked:function(re){L=re},setClear:function(re){oe!==re&&(t.clearStencil(re),oe=re)},reset:function(){L=!1,ge=null,ve=null,Ne=null,Xe=null,yt=null,Je=null,Dt=null,oe=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let h={},g={},_=new WeakMap,y=[],p=null,u=!1,m=null,v=null,S=null,P=null,C=null,b=null,G=null,ie=new ut(0,0,0),x=0,R=!1,te=null,fe=null,O=null,ne=null,Q=null;const le=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=$>=1):Z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=$>=2);let ae=null,pe={};const qe=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),ce=new an().fromArray(qe),Ae=new an().fromArray(ee);function Ue(L,ge,ve,Ne){const Xe=new Uint8Array(4),yt=t.createTexture();t.bindTexture(L,yt),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<ve;Je++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ge,0,t.RGBA,1,1,Ne,0,t.RGBA,t.UNSIGNED_BYTE,Xe):t.texImage2D(ge+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Xe);return yt}const $e={};$e[t.TEXTURE_2D]=Ue(t.TEXTURE_2D,t.TEXTURE_2D,1),$e[t.TEXTURE_CUBE_MAP]=Ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&($e[t.TEXTURE_2D_ARRAY]=Ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),$e[t.TEXTURE_3D]=Ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(t.DEPTH_TEST),l.setFunc(sc),lt(!1),A(Op),De(t.CULL_FACE),Ge(Sr);function De(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function ft(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ye(L,ge){return g[L]!==ge?(t.bindFramebuffer(L,ge),g[L]=ge,i&&(L===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ge),L===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ge)),!0):!1}function W(L,ge){let ve=y,Ne=!1;if(L)if(ve=_.get(ge),ve===void 0&&(ve=[],_.set(ge,ve)),L.isWebGLMultipleRenderTargets){const Xe=L.texture;if(ve.length!==Xe.length||ve[0]!==t.COLOR_ATTACHMENT0){for(let yt=0,Je=Xe.length;yt<Je;yt++)ve[yt]=t.COLOR_ATTACHMENT0+yt;ve.length=Xe.length,Ne=!0}}else ve[0]!==t.COLOR_ATTACHMENT0&&(ve[0]=t.COLOR_ATTACHMENT0,Ne=!0);else ve[0]!==t.BACK&&(ve[0]=t.BACK,Ne=!0);Ne&&(n.isWebGL2?t.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function vt(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const Ce={[Br]:t.FUNC_ADD,[PM]:t.FUNC_SUBTRACT,[LM]:t.FUNC_REVERSE_SUBTRACT};if(i)Ce[Hp]=t.MIN,Ce[Gp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ce[Hp]=L.MIN_EXT,Ce[Gp]=L.MAX_EXT)}const ze={[NM]:t.ZERO,[IM]:t.ONE,[DM]:t.SRC_COLOR,[ed]:t.SRC_ALPHA,[BM]:t.SRC_ALPHA_SATURATE,[kM]:t.DST_COLOR,[FM]:t.DST_ALPHA,[UM]:t.ONE_MINUS_SRC_COLOR,[td]:t.ONE_MINUS_SRC_ALPHA,[zM]:t.ONE_MINUS_DST_COLOR,[OM]:t.ONE_MINUS_DST_ALPHA,[HM]:t.CONSTANT_COLOR,[GM]:t.ONE_MINUS_CONSTANT_COLOR,[VM]:t.CONSTANT_ALPHA,[WM]:t.ONE_MINUS_CONSTANT_ALPHA};function Ge(L,ge,ve,Ne,Xe,yt,Je,Dt,oe,re){if(L===Sr){u===!0&&(ft(t.BLEND),u=!1);return}if(u===!1&&(De(t.BLEND),u=!0),L!==RM){if(L!==m||re!==R){if((v!==Br||C!==Br)&&(t.blendEquation(t.FUNC_ADD),v=Br,C=Br),re)switch(L){case Ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kp:t.blendFunc(t.ONE,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,P=null,b=null,G=null,ie.set(0,0,0),x=0,m=L,R=re}return}Xe=Xe||ge,yt=yt||ve,Je=Je||Ne,(ge!==v||Xe!==C)&&(t.blendEquationSeparate(Ce[ge],Ce[Xe]),v=ge,C=Xe),(ve!==S||Ne!==P||yt!==b||Je!==G)&&(t.blendFuncSeparate(ze[ve],ze[Ne],ze[yt],ze[Je]),S=ve,P=Ne,b=yt,G=Je),(Dt.equals(ie)===!1||oe!==x)&&(t.blendColor(Dt.r,Dt.g,Dt.b,oe),ie.copy(Dt),x=oe),m=L,R=!1}function At(L,ge){L.side===di?ft(t.CULL_FACE):De(t.CULL_FACE);let ve=L.side===zn;ge&&(ve=!ve),lt(ve),L.blending===Ks&&L.transparent===!1?Ge(Sr):Ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ne=L.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),K(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?De(t.SAMPLE_ALPHA_TO_COVERAGE):ft(t.SAMPLE_ALPHA_TO_COVERAGE)}function lt(L){te!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),te=L)}function A(L){L!==AM?(De(t.CULL_FACE),L!==fe&&(L===Op?t.cullFace(t.BACK):L===bM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ft(t.CULL_FACE),fe=L}function E(L){L!==O&&(H&&t.lineWidth(L),O=L)}function K(L,ge,ve){L?(De(t.POLYGON_OFFSET_FILL),(ne!==ge||Q!==ve)&&(t.polygonOffset(ge,ve),ne=ge,Q=ve)):ft(t.POLYGON_OFFSET_FILL)}function me(L){L?De(t.SCISSOR_TEST):ft(t.SCISSOR_TEST)}function de(L){L===void 0&&(L=t.TEXTURE0+le-1),ae!==L&&(t.activeTexture(L),ae=L)}function J(L,ge,ve){ve===void 0&&(ae===null?ve=t.TEXTURE0+le-1:ve=ae);let Ne=pe[ve];Ne===void 0&&(Ne={type:void 0,texture:void 0},pe[ve]=Ne),(Ne.type!==L||Ne.texture!==ge)&&(ae!==ve&&(t.activeTexture(ve),ae=ve),t.bindTexture(L,ge||$e[L]),Ne.type=L,Ne.texture=ge)}function Fe(){const L=pe[ae];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function be(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(L){ce.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ce.copy(L))}function St(L){Ae.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ae.copy(L))}function _t(L,ge){let ve=d.get(ge);ve===void 0&&(ve=new WeakMap,d.set(ge,ve));let Ne=ve.get(L);Ne===void 0&&(Ne=t.getUniformBlockIndex(ge,L.name),ve.set(L,Ne))}function ct(L,ge){const Ne=d.get(ge).get(L);f.get(ge)!==Ne&&(t.uniformBlockBinding(ge,Ne,L.__bindingPointIndex),f.set(ge,Ne))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ae=null,pe={},g={},_=new WeakMap,y=[],p=null,u=!1,m=null,v=null,S=null,P=null,C=null,b=null,G=null,ie=new ut(0,0,0),x=0,R=!1,te=null,fe=null,O=null,ne=null,Q=null,ce.set(0,0,t.canvas.width,t.canvas.height),Ae.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:ft,bindFramebuffer:Ye,drawBuffers:W,useProgram:vt,setBlending:Ge,setMaterial:At,setFlipSided:lt,setCullFace:A,setLineWidth:E,setPolygonOffset:K,setScissorTest:me,activeTexture:de,bindTexture:J,unbindTexture:Fe,compressedTexImage2D:be,compressedTexImage3D:Re,texImage2D:Ve,texImage3D:Le,updateUBOMapping:_t,uniformBlockBinding:ct,texStorage2D:rt,texStorage3D:Qe,texSubImage2D:tt,texSubImage3D:at,compressedTexSubImage2D:he,compressedTexSubImage3D:wt,scissor:nt,viewport:St,reset:je}}function Eb(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return g?new OffscreenCanvas(A,E):uc("canvas")}function y(A,E,K,me){let de=1;if((A.width>me||A.height>me)&&(de=me/Math.max(A.width,A.height)),de<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const J=E?cd:Math.floor,Fe=J(de*A.width),be=J(de*A.height);d===void 0&&(d=_(Fe,be));const Re=K?_(Fe,be):d;return Re.width=Fe,Re.height=be,Re.getContext("2d").drawImage(A,0,0,Fe,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Fe+"x"+be+")."),Re}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return vm(A.width)&&vm(A.height)}function u(A){return a?!1:A.wrapS!==hi||A.wrapT!==hi||A.minFilter!==bn&&A.minFilter!==Nn}function m(A,E){return A.generateMipmaps&&E&&A.minFilter!==bn&&A.minFilter!==Nn}function v(A){t.generateMipmap(A)}function S(A,E,K,me,de=!1){if(a===!1)return E;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=E;if(E===t.RED&&(K===t.FLOAT&&(J=t.R32F),K===t.HALF_FLOAT&&(J=t.R16F),K===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(K===t.UNSIGNED_BYTE&&(J=t.R8UI),K===t.UNSIGNED_SHORT&&(J=t.R16UI),K===t.UNSIGNED_INT&&(J=t.R32UI),K===t.BYTE&&(J=t.R8I),K===t.SHORT&&(J=t.R16I),K===t.INT&&(J=t.R32I)),E===t.RG&&(K===t.FLOAT&&(J=t.RG32F),K===t.HALF_FLOAT&&(J=t.RG16F),K===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RGBA){const Fe=de?oc:Lt.getTransfer(me);K===t.FLOAT&&(J=t.RGBA32F),K===t.HALF_FLOAT&&(J=t.RGBA16F),K===t.UNSIGNED_BYTE&&(J=Fe===Ft?t.SRGB8_ALPHA8:t.RGBA8),K===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),K===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function P(A,E,K){return m(A,K)===!0||A.isFramebufferTexture&&A.minFilter!==bn&&A.minFilter!==Nn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function C(A){return A===bn||A===Vp||A===Co?t.NEAREST:t.LINEAR}function b(A){const E=A.target;E.removeEventListener("dispose",b),ie(E),E.isVideoTexture&&f.delete(E)}function G(A){const E=A.target;E.removeEventListener("dispose",G),R(E)}function ie(A){const E=i.get(A);if(E.__webglInit===void 0)return;const K=A.source,me=h.get(K);if(me){const de=me[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&x(A),Object.keys(me).length===0&&h.delete(K)}i.remove(A)}function x(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const K=A.source,me=h.get(K);delete me[E.__cacheKey],o.memory.textures--}function R(A){const E=A.texture,K=i.get(A),me=i.get(E);if(me.__webglTexture!==void 0&&(t.deleteTexture(me.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(K.__webglFramebuffer[de]))for(let J=0;J<K.__webglFramebuffer[de].length;J++)t.deleteFramebuffer(K.__webglFramebuffer[de][J]);else t.deleteFramebuffer(K.__webglFramebuffer[de]);K.__webglDepthbuffer&&t.deleteRenderbuffer(K.__webglDepthbuffer[de])}else{if(Array.isArray(K.__webglFramebuffer))for(let de=0;de<K.__webglFramebuffer.length;de++)t.deleteFramebuffer(K.__webglFramebuffer[de]);else t.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&t.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&t.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let de=0;de<K.__webglColorRenderbuffer.length;de++)K.__webglColorRenderbuffer[de]&&t.deleteRenderbuffer(K.__webglColorRenderbuffer[de]);K.__webglDepthRenderbuffer&&t.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let de=0,J=E.length;de<J;de++){const Fe=i.get(E[de]);Fe.__webglTexture&&(t.deleteTexture(Fe.__webglTexture),o.memory.textures--),i.remove(E[de])}i.remove(E),i.remove(A)}let te=0;function fe(){te=0}function O(){const A=te;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),te+=1,A}function ne(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function Q(A,E){const K=i.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&K.__version!==A.version){const me=A.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(K,A,E);return}}n.bindTexture(t.TEXTURE_2D,K.__webglTexture,t.TEXTURE0+E)}function le(A,E){const K=i.get(A);if(A.version>0&&K.__version!==A.version){ce(K,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,K.__webglTexture,t.TEXTURE0+E)}function H(A,E){const K=i.get(A);if(A.version>0&&K.__version!==A.version){ce(K,A,E);return}n.bindTexture(t.TEXTURE_3D,K.__webglTexture,t.TEXTURE0+E)}function $(A,E){const K=i.get(A);if(A.version>0&&K.__version!==A.version){Ae(K,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture,t.TEXTURE0+E)}const Z={[rd]:t.REPEAT,[hi]:t.CLAMP_TO_EDGE,[sd]:t.MIRRORED_REPEAT},ae={[bn]:t.NEAREST,[Vp]:t.NEAREST_MIPMAP_NEAREST,[Co]:t.NEAREST_MIPMAP_LINEAR,[Nn]:t.LINEAR,[mu]:t.LINEAR_MIPMAP_NEAREST,[jr]:t.LINEAR_MIPMAP_LINEAR},pe={[vE]:t.NEVER,[EE]:t.ALWAYS,[_E]:t.LESS,[e_]:t.LEQUAL,[yE]:t.EQUAL,[ME]:t.GEQUAL,[xE]:t.GREATER,[SE]:t.NOTEQUAL};function qe(A,E,K){if(E.type===Ui&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Nn||E.magFilter===mu||E.magFilter===Co||E.magFilter===jr||E.minFilter===Nn||E.minFilter===mu||E.minFilter===Co||E.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),K?(t.texParameteri(A,t.TEXTURE_WRAP_S,Z[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Z[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Z[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ae[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ae[E.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==hi||E.wrapT!==hi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(E.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==bn&&E.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===bn||E.minFilter!==Co&&E.minFilter!==jr||E.type===Ui&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ga&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(A,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function ee(A,E){let K=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",b));const me=E.source;let de=h.get(me);de===void 0&&(de={},h.set(me,de));const J=ne(E);if(J!==A.__cacheKey){de[J]===void 0&&(de[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,K=!0),de[J].usedTimes++;const Fe=de[A.__cacheKey];Fe!==void 0&&(de[A.__cacheKey].usedTimes--,Fe.usedTimes===0&&x(E)),A.__cacheKey=J,A.__webglTexture=de[J].texture}return K}function ce(A,E,K){let me=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=t.TEXTURE_3D);const de=ee(A,E),J=E.source;n.bindTexture(me,A.__webglTexture,t.TEXTURE0+K);const Fe=i.get(J);if(J.version!==Fe.__version||de===!0){n.activeTexture(t.TEXTURE0+K);const be=Lt.getPrimaries(Lt.workingColorSpace),Re=E.colorSpace===Qn?null:Lt.getPrimaries(E.colorSpace),tt=E.colorSpace===Qn||be===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const at=u(E)&&p(E.image)===!1;let he=y(E.image,at,!1,r.maxTextureSize);he=lt(E,he);const wt=p(he)||a,rt=s.convert(E.format,E.colorSpace);let Qe=s.convert(E.type),Ve=S(E.internalFormat,rt,Qe,E.colorSpace,E.isVideoTexture);qe(me,E,wt);let Le;const nt=E.mipmaps,St=a&&E.isVideoTexture!==!0&&Ve!==Z0,_t=Fe.__version===void 0||de===!0,ct=J.dataReady,je=P(E,he,wt);if(E.isDepthTexture)Ve=t.DEPTH_COMPONENT,a?E.type===Ui?Ve=t.DEPTH_COMPONENT32F:E.type===fr?Ve=t.DEPTH_COMPONENT24:E.type===Yr?Ve=t.DEPTH24_STENCIL8:Ve=t.DEPTH_COMPONENT16:E.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===qr&&Ve===t.DEPTH_COMPONENT&&E.type!==dh&&E.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=fr,Qe=s.convert(E.type)),E.format===lo&&Ve===t.DEPTH_COMPONENT&&(Ve=t.DEPTH_STENCIL,E.type!==Yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Yr,Qe=s.convert(E.type))),_t&&(St?n.texStorage2D(t.TEXTURE_2D,1,Ve,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Ve,he.width,he.height,0,rt,Qe,null));else if(E.isDataTexture)if(nt.length>0&&wt){St&&_t&&n.texStorage2D(t.TEXTURE_2D,je,Ve,nt[0].width,nt[0].height);for(let L=0,ge=nt.length;L<ge;L++)Le=nt[L],St?ct&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,Le.width,Le.height,rt,Qe,Le.data):n.texImage2D(t.TEXTURE_2D,L,Ve,Le.width,Le.height,0,rt,Qe,Le.data);E.generateMipmaps=!1}else St?(_t&&n.texStorage2D(t.TEXTURE_2D,je,Ve,he.width,he.height),ct&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he.width,he.height,rt,Qe,he.data)):n.texImage2D(t.TEXTURE_2D,0,Ve,he.width,he.height,0,rt,Qe,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){St&&_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Ve,nt[0].width,nt[0].height,he.depth);for(let L=0,ge=nt.length;L<ge;L++)Le=nt[L],E.format!==pi?rt!==null?St?ct&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,L,0,0,0,Le.width,Le.height,he.depth,rt,Le.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,L,Ve,Le.width,Le.height,he.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?ct&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,L,0,0,0,Le.width,Le.height,he.depth,rt,Qe,Le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,L,Ve,Le.width,Le.height,he.depth,0,rt,Qe,Le.data)}else{St&&_t&&n.texStorage2D(t.TEXTURE_2D,je,Ve,nt[0].width,nt[0].height);for(let L=0,ge=nt.length;L<ge;L++)Le=nt[L],E.format!==pi?rt!==null?St?ct&&n.compressedTexSubImage2D(t.TEXTURE_2D,L,0,0,Le.width,Le.height,rt,Le.data):n.compressedTexImage2D(t.TEXTURE_2D,L,Ve,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?ct&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,Le.width,Le.height,rt,Qe,Le.data):n.texImage2D(t.TEXTURE_2D,L,Ve,Le.width,Le.height,0,rt,Qe,Le.data)}else if(E.isDataArrayTexture)St?(_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Ve,he.width,he.height,he.depth),ct&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,rt,Qe,he.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ve,he.width,he.height,he.depth,0,rt,Qe,he.data);else if(E.isData3DTexture)St?(_t&&n.texStorage3D(t.TEXTURE_3D,je,Ve,he.width,he.height,he.depth),ct&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,rt,Qe,he.data)):n.texImage3D(t.TEXTURE_3D,0,Ve,he.width,he.height,he.depth,0,rt,Qe,he.data);else if(E.isFramebufferTexture){if(_t)if(St)n.texStorage2D(t.TEXTURE_2D,je,Ve,he.width,he.height);else{let L=he.width,ge=he.height;for(let ve=0;ve<je;ve++)n.texImage2D(t.TEXTURE_2D,ve,Ve,L,ge,0,rt,Qe,null),L>>=1,ge>>=1}}else if(nt.length>0&&wt){St&&_t&&n.texStorage2D(t.TEXTURE_2D,je,Ve,nt[0].width,nt[0].height);for(let L=0,ge=nt.length;L<ge;L++)Le=nt[L],St?ct&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,rt,Qe,Le):n.texImage2D(t.TEXTURE_2D,L,Ve,rt,Qe,Le);E.generateMipmaps=!1}else St?(_t&&n.texStorage2D(t.TEXTURE_2D,je,Ve,he.width,he.height),ct&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,rt,Qe,he)):n.texImage2D(t.TEXTURE_2D,0,Ve,rt,Qe,he);m(E,wt)&&v(me),Fe.__version=J.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ae(A,E,K){if(E.image.length!==6)return;const me=ee(A,E),de=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+K);const J=i.get(de);if(de.version!==J.__version||me===!0){n.activeTexture(t.TEXTURE0+K);const Fe=Lt.getPrimaries(Lt.workingColorSpace),be=E.colorSpace===Qn?null:Lt.getPrimaries(E.colorSpace),Re=E.colorSpace===Qn||Fe===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const tt=E.isCompressedTexture||E.image[0].isCompressedTexture,at=E.image[0]&&E.image[0].isDataTexture,he=[];for(let L=0;L<6;L++)!tt&&!at?he[L]=y(E.image[L],!1,!0,r.maxCubemapSize):he[L]=at?E.image[L].image:E.image[L],he[L]=lt(E,he[L]);const wt=he[0],rt=p(wt)||a,Qe=s.convert(E.format,E.colorSpace),Ve=s.convert(E.type),Le=S(E.internalFormat,Qe,Ve,E.colorSpace),nt=a&&E.isVideoTexture!==!0,St=J.__version===void 0||me===!0,_t=de.dataReady;let ct=P(E,wt,rt);qe(t.TEXTURE_CUBE_MAP,E,rt);let je;if(tt){nt&&St&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ct,Le,wt.width,wt.height);for(let L=0;L<6;L++){je=he[L].mipmaps;for(let ge=0;ge<je.length;ge++){const ve=je[ge];E.format!==pi?Qe!==null?nt?_t&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge,0,0,ve.width,ve.height,Qe,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?_t&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge,0,0,ve.width,ve.height,Qe,Ve,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge,Le,ve.width,ve.height,0,Qe,Ve,ve.data)}}}else{je=E.mipmaps,nt&&St&&(je.length>0&&ct++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ct,Le,he[0].width,he[0].height));for(let L=0;L<6;L++)if(at){nt?_t&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,he[L].width,he[L].height,Qe,Ve,he[L].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,Le,he[L].width,he[L].height,0,Qe,Ve,he[L].data);for(let ge=0;ge<je.length;ge++){const Ne=je[ge].image[L].image;nt?_t&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge+1,0,0,Ne.width,Ne.height,Qe,Ve,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge+1,Le,Ne.width,Ne.height,0,Qe,Ve,Ne.data)}}else{nt?_t&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Qe,Ve,he[L]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,Le,Qe,Ve,he[L]);for(let ge=0;ge<je.length;ge++){const ve=je[ge];nt?_t&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge+1,0,0,Qe,Ve,ve.image[L]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ge+1,Le,Qe,Ve,ve.image[L])}}}m(E,rt)&&v(t.TEXTURE_CUBE_MAP),J.__version=de.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ue(A,E,K,me,de,J){const Fe=s.convert(K.format,K.colorSpace),be=s.convert(K.type),Re=S(K.internalFormat,Fe,be,K.colorSpace);if(!i.get(E).__hasExternalTextures){const at=Math.max(1,E.width>>J),he=Math.max(1,E.height>>J);de===t.TEXTURE_3D||de===t.TEXTURE_2D_ARRAY?n.texImage3D(de,J,Re,at,he,E.depth,0,Fe,be,null):n.texImage2D(de,J,Re,at,he,0,Fe,be,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ge(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,de,i.get(K).__webglTexture,0,ze(E)):(de===t.TEXTURE_2D||de>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,me,de,i.get(K).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(A,E,K){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let me=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(K||Ge(E)){const de=E.depthTexture;de&&de.isDepthTexture&&(de.type===Ui?me=t.DEPTH_COMPONENT32F:de.type===fr&&(me=t.DEPTH_COMPONENT24));const J=ze(E);Ge(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,me,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,J,me,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,me,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const me=ze(E);K&&Ge(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,t.DEPTH24_STENCIL8,E.width,E.height):Ge(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const me=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let de=0;de<me.length;de++){const J=me[de],Fe=s.convert(J.format,J.colorSpace),be=s.convert(J.type),Re=S(J.internalFormat,Fe,be,J.colorSpace),tt=ze(E);K&&Ge(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,tt,Re,E.width,E.height):Ge(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,tt,Re,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Re,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const me=i.get(E.depthTexture).__webglTexture,de=ze(E);if(E.depthTexture.format===qr)Ge(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,me,0);else if(E.depthTexture.format===lo)Ge(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function ft(A){const E=i.get(A),K=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");De(E.__webglFramebuffer,A)}else if(K){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]=t.createRenderbuffer(),$e(E.__webglDepthbuffer[me],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),$e(E.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(A,E,K){const me=i.get(A);E!==void 0&&Ue(me.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),K!==void 0&&ft(A)}function W(A){const E=A.texture,K=i.get(A),me=i.get(E);A.addEventListener("dispose",G),A.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture()),me.__version=E.version,o.memory.textures++);const de=A.isWebGLCubeRenderTarget===!0,J=A.isWebGLMultipleRenderTargets===!0,Fe=p(A)||a;if(de){K.__webglFramebuffer=[];for(let be=0;be<6;be++)if(a&&E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[be]=[];for(let Re=0;Re<E.mipmaps.length;Re++)K.__webglFramebuffer[be][Re]=t.createFramebuffer()}else K.__webglFramebuffer[be]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let be=0;be<E.mipmaps.length;be++)K.__webglFramebuffer[be]=t.createFramebuffer()}else K.__webglFramebuffer=t.createFramebuffer();if(J)if(r.drawBuffers){const be=A.texture;for(let Re=0,tt=be.length;Re<tt;Re++){const at=i.get(be[Re]);at.__webglTexture===void 0&&(at.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ge(A)===!1){const be=J?E:[E];K.__webglMultisampledFramebuffer=t.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Re=0;Re<be.length;Re++){const tt=be[Re];K.__webglColorRenderbuffer[Re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,K.__webglColorRenderbuffer[Re]);const at=s.convert(tt.format,tt.colorSpace),he=s.convert(tt.type),wt=S(tt.internalFormat,at,he,tt.colorSpace,A.isXRRenderTarget===!0),rt=ze(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,rt,wt,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,K.__webglColorRenderbuffer[Re])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(K.__webglDepthRenderbuffer=t.createRenderbuffer(),$e(K.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,me.__webglTexture),qe(t.TEXTURE_CUBE_MAP,E,Fe);for(let be=0;be<6;be++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)Ue(K.__webglFramebuffer[be][Re],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Re);else Ue(K.__webglFramebuffer[be],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(E,Fe)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(J){const be=A.texture;for(let Re=0,tt=be.length;Re<tt;Re++){const at=be[Re],he=i.get(at);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),qe(t.TEXTURE_2D,at,Fe),Ue(K.__webglFramebuffer,A,at,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,0),m(at,Fe)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let be=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?be=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(be,me.__webglTexture),qe(be,E,Fe),a&&E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)Ue(K.__webglFramebuffer[Re],A,E,t.COLOR_ATTACHMENT0,be,Re);else Ue(K.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,be,0);m(E,Fe)&&v(be),n.unbindTexture()}A.depthBuffer&&ft(A)}function vt(A){const E=p(A)||a,K=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let me=0,de=K.length;me<de;me++){const J=K[me];if(m(J,E)){const Fe=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(J).__webglTexture;n.bindTexture(Fe,be),v(Fe),n.unbindTexture()}}}function Ce(A){if(a&&A.samples>0&&Ge(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],K=A.width,me=A.height;let de=t.COLOR_BUFFER_BIT;const J=[],Fe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(A),Re=A.isWebGLMultipleRenderTargets===!0;if(Re)for(let tt=0;tt<E.length;tt++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+tt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+tt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let tt=0;tt<E.length;tt++){J.push(t.COLOR_ATTACHMENT0+tt),A.depthBuffer&&J.push(Fe);const at=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(at===!1&&(A.depthBuffer&&(de|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(de|=t.STENCIL_BUFFER_BIT)),Re&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[tt]),at===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Fe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Fe])),Re){const he=i.get(E[tt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,K,me,0,0,K,me,de,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,J)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Re)for(let tt=0;tt<E.length;tt++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+tt,t.RENDERBUFFER,be.__webglColorRenderbuffer[tt]);const at=i.get(E[tt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+tt,t.TEXTURE_2D,at,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function ze(A){return Math.min(r.maxSamples,A.samples)}function Ge(A){const E=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function At(A){const E=o.render.frame;f.get(A)!==E&&(f.set(A,E),A.update())}function lt(A,E){const K=A.colorSpace,me=A.format,de=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ad||K!==Wi&&K!==Qn&&(Lt.getTransfer(K)===Ft?a===!1?e.has("EXT_sRGB")===!0&&me===pi?(A.format=ad,A.minFilter=Nn,A.generateMipmaps=!1):E=n_.sRGBToLinear(E):(me!==pi||de!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}this.allocateTextureUnit=O,this.resetTextureUnits=fe,this.setTexture2D=Q,this.setTexture2DArray=le,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Ye,this.setupRenderTarget=W,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ge}function wb(t,e,n){const i=n.isWebGL2;function r(s,o=Qn){let a;const l=Lt.getTransfer(o);if(s===Er)return t.UNSIGNED_BYTE;if(s===X0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===$0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===oE)return t.BYTE;if(s===aE)return t.SHORT;if(s===dh)return t.UNSIGNED_SHORT;if(s===j0)return t.INT;if(s===fr)return t.UNSIGNED_INT;if(s===Ui)return t.FLOAT;if(s===ga)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===lE)return t.ALPHA;if(s===pi)return t.RGBA;if(s===cE)return t.LUMINANCE;if(s===uE)return t.LUMINANCE_ALPHA;if(s===qr)return t.DEPTH_COMPONENT;if(s===lo)return t.DEPTH_STENCIL;if(s===ad)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===fE)return t.RED;if(s===Y0)return t.RED_INTEGER;if(s===dE)return t.RG;if(s===q0)return t.RG_INTEGER;if(s===K0)return t.RGBA_INTEGER;if(s===gu||s===vu||s===_u||s===yu)if(l===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===gu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===gu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_u)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===yu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wp||s===jp||s===Xp||s===$p)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$p)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Z0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Yp||s===qp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Yp)return l===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qp)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kp||s===Zp||s===Qp||s===Jp||s===em||s===tm||s===nm||s===im||s===rm||s===sm||s===om||s===am||s===lm||s===cm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Kp)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zp)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qp)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jp)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===em)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===im)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===om)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===am)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xu||s===um||s===fm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===xu)return l===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===um)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hE||s===dm||s===hm||s===pm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===xu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===dm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===pm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Tb extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mi extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ab={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ab)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cb=`
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

}`;class Rb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Rn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Cr({extensions:{fragDepth:!0},vertexShader:bb,fragmentShader:Cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ti(new uo(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class Pb extends vo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,g=null,_=null;const y=new Rb,p=n.getContextAttributes();let u=null,m=null;const v=[],S=[],P=new mt;let C=null;const b=new Zn;b.layers.enable(1),b.viewport=new an;const G=new Zn;G.layers.enable(2),G.viewport=new an;const ie=[b,G],x=new Tb;x.layers.enable(1),x.layers.enable(2);let R=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=v[ee];return ce===void 0&&(ce=new Wu,v[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=v[ee];return ce===void 0&&(ce=new Wu,v[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=v[ee];return ce===void 0&&(ce=new Wu,v[ee]=ce),ce.getHandSpace()};function fe(ee){const ce=S.indexOf(ee.inputSource);if(ce===-1)return;const Ae=v[ce];Ae!==void 0&&(Ae.update(ee.inputSource,ee.frame,c||o),Ae.dispatchEvent({type:ee.type,data:ee.inputSource}))}function O(){r.removeEventListener("select",fe),r.removeEventListener("selectstart",fe),r.removeEventListener("selectend",fe),r.removeEventListener("squeeze",fe),r.removeEventListener("squeezestart",fe),r.removeEventListener("squeezeend",fe),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<v.length;ee++){const ce=S[ee];ce!==null&&(S[ee]=null,v[ee].disconnect(ce))}R=null,te=null,y.reset(),e.setRenderTarget(u),g=null,h=null,d=null,r=null,m=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",fe),r.addEventListener("selectstart",fe),r.addEventListener("selectend",fe),r.addEventListener("squeeze",fe),r.addEventListener("squeezestart",fe),r.addEventListener("squeezeend",fe),r.addEventListener("end",O),r.addEventListener("inputsourceschange",ne),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new is(g.framebufferWidth,g.framebufferHeight,{format:pi,type:Er,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ce=null,Ae=null,Ue=null;p.depth&&(Ue=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=p.stencil?lo:qr,Ae=p.stencil?Yr:fr);const $e={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer($e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new is(h.textureWidth,h.textureHeight,{format:pi,type:Er,depthTexture:new g_(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const De=e.properties.get(m);De.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ne(ee){for(let ce=0;ce<ee.removed.length;ce++){const Ae=ee.removed[ce],Ue=S.indexOf(Ae);Ue>=0&&(S[Ue]=null,v[Ue].disconnect(Ae))}for(let ce=0;ce<ee.added.length;ce++){const Ae=ee.added[ce];let Ue=S.indexOf(Ae);if(Ue===-1){for(let De=0;De<v.length;De++)if(De>=S.length){S.push(Ae),Ue=De;break}else if(S[De]===null){S[De]=Ae,Ue=De;break}if(Ue===-1)break}const $e=v[Ue];$e&&$e.connect(Ae)}}const Q=new V,le=new V;function H(ee,ce,Ae){Q.setFromMatrixPosition(ce.matrixWorld),le.setFromMatrixPosition(Ae.matrixWorld);const Ue=Q.distanceTo(le),$e=ce.projectionMatrix.elements,De=Ae.projectionMatrix.elements,ft=$e[14]/($e[10]-1),Ye=$e[14]/($e[10]+1),W=($e[9]+1)/$e[5],vt=($e[9]-1)/$e[5],Ce=($e[8]-1)/$e[0],ze=(De[8]+1)/De[0],Ge=ft*Ce,At=ft*ze,lt=Ue/(-Ce+ze),A=lt*-Ce;ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(A),ee.translateZ(lt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const E=ft+lt,K=Ye+lt,me=Ge-A,de=At+(Ue-A),J=W*Ye/K*E,Fe=vt*Ye/K*E;ee.projectionMatrix.makePerspective(me,de,J,Fe,E,K),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function $(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;y.texture!==null&&(ee.near=y.depthNear,ee.far=y.depthFar),x.near=G.near=b.near=ee.near,x.far=G.far=b.far=ee.far,(R!==x.near||te!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,te=x.far,b.near=R,b.far=te,G.near=R,G.far=te,b.updateProjectionMatrix(),G.updateProjectionMatrix(),ee.updateProjectionMatrix());const ce=ee.parent,Ae=x.cameras;$(x,ce);for(let Ue=0;Ue<Ae.length;Ue++)$(Ae[Ue],ce);Ae.length===2?H(x,b,G):x.projectionMatrix.copy(b.projectionMatrix),Z(ee,x,ce)};function Z(ee,ce,Ae){Ae===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(Ae.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ld*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null};let ae=null;function pe(ee,ce){if(f=ce.getViewerPose(c||o),_=ce,f!==null){const Ae=f.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let Ue=!1;Ae.length!==x.cameras.length&&(x.cameras.length=0,Ue=!0);for(let De=0;De<Ae.length;De++){const ft=Ae[De];let Ye=null;if(g!==null)Ye=g.getViewport(ft);else{const vt=d.getViewSubImage(h,ft);Ye=vt.viewport,De===0&&(e.setRenderTargetTextures(m,vt.colorTexture,h.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(m))}let W=ie[De];W===void 0&&(W=new Zn,W.layers.enable(De),W.viewport=new an,ie[De]=W),W.matrix.fromArray(ft.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(ft.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),De===0&&(x.matrix.copy(W.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ue===!0&&x.cameras.push(W)}const $e=r.enabledFeatures;if($e&&$e.includes("depth-sensing")){const De=d.getDepthInformation(Ae[0]);De&&De.isValid&&De.texture&&y.init(e,De,r.renderState)}}for(let Ae=0;Ae<v.length;Ae++){const Ue=S[Ae],$e=v[Ae];Ue!==null&&$e!==void 0&&$e.update(Ue,ce,c||o)}y.render(e,x),ae&&ae(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const qe=new p_;qe.setAnimationLoop(pe),this.setAnimationLoop=function(ee){ae=ee},this.dispose=function(){}}}function Lb(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,f_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,m,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&g(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,m,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===zn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===zn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const m=e.get(u).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,m,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*m,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,m){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===zn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const m=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Nb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const S=v.program;i.uniformBlockBinding(m,S)}function c(m,v){let S=r[m.id];S===void 0&&(_(m),S=f(m),r[m.id]=S,m.addEventListener("dispose",p));const P=v.program;i.updateUBOMapping(m,P);const C=e.render.frame;s[m.id]!==C&&(h(m),s[m.id]=C)}function f(m){const v=d();m.__bindingPointIndex=v;const S=t.createBuffer(),P=m.__size,C=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],S=m.uniforms,P=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,b=S.length;C<b;C++){const G=Array.isArray(S[C])?S[C]:[S[C]];for(let ie=0,x=G.length;ie<x;ie++){const R=G[ie];if(g(R,C,ie,P)===!0){const te=R.__offset,fe=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let ne=0;ne<fe.length;ne++){const Q=fe[ne],le=y(Q);typeof Q=="number"||typeof Q=="boolean"?(R.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,te+O,R.__data)):Q.isMatrix3?(R.__data[0]=Q.elements[0],R.__data[1]=Q.elements[1],R.__data[2]=Q.elements[2],R.__data[3]=0,R.__data[4]=Q.elements[3],R.__data[5]=Q.elements[4],R.__data[6]=Q.elements[5],R.__data[7]=0,R.__data[8]=Q.elements[6],R.__data[9]=Q.elements[7],R.__data[10]=Q.elements[8],R.__data[11]=0):(Q.toArray(R.__data,O),O+=le.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,te,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,S,P){const C=m.value,b=v+"_"+S;if(P[b]===void 0)return typeof C=="number"||typeof C=="boolean"?P[b]=C:P[b]=C.clone(),!0;{const G=P[b];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return P[b]=C,!0}else if(G.equals(C)===!1)return G.copy(C),!0}return!1}function _(m){const v=m.uniforms;let S=0;const P=16;for(let b=0,G=v.length;b<G;b++){const ie=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,R=ie.length;x<R;x++){const te=ie[x],fe=Array.isArray(te.value)?te.value:[te.value];for(let O=0,ne=fe.length;O<ne;O++){const Q=fe[O],le=y(Q),H=S%P;H!==0&&P-H<le.boundary&&(S+=P-H),te.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=S,S+=le.storage}}}const C=S%P;return C>0&&(S+=P-C),m.__size=S,m.__cache={},this}function y(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function p(m){const v=m.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class M_{constructor(e={}){const{canvas:n=TE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const u=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this._useLegacyLights=!1,this.toneMapping=Mr,this.toneMappingExposure=1;const v=this;let S=!1,P=0,C=0,b=null,G=-1,ie=null;const x=new an,R=new an;let te=null;const fe=new ut(0);let O=0,ne=n.width,Q=n.height,le=1,H=null,$=null;const Z=new an(0,0,ne,Q),ae=new an(0,0,ne,Q);let pe=!1;const qe=new ph;let ee=!1,ce=!1,Ae=null;const Ue=new Yt,$e=new mt,De=new V,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return b===null?le:1}let W=i;function vt(T,B){for(let Y=0;Y<T.length;Y++){const X=T[Y],q=n.getContext(X,B);if(q!==null)return q}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fh}`),n.addEventListener("webglcontextlost",je,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ge,!1),W===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),W=vt(B,T),W===null)throw vt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ce,ze,Ge,At,lt,A,E,K,me,de,J,Fe,be,Re,tt,at,he,wt,rt,Qe,Ve,Le,nt,St;function _t(){Ce=new z1(W),ze=new I1(W,Ce,e),Ce.init(ze),Le=new wb(W,Ce,ze),Ge=new Mb(W,Ce,ze),At=new G1(W),lt=new lb,A=new Eb(W,Ce,Ge,lt,ze,Le,At),E=new U1(v),K=new k1(v),me=new KE(W,ze),nt=new L1(W,Ce,me,ze),de=new B1(W,me,At,nt),J=new X1(W,de,me,At),rt=new j1(W,ze,A),at=new D1(lt),Fe=new ab(v,E,K,Ce,ze,nt,at),be=new Lb(v,lt),Re=new ub,tt=new gb(Ce,ze),wt=new P1(v,E,K,Ge,J,h,l),he=new Sb(v,J,ze),St=new Nb(W,At,ze,Ge),Qe=new N1(W,Ce,At,ze),Ve=new H1(W,Ce,At,ze),At.programs=Fe.programs,v.capabilities=ze,v.extensions=Ce,v.properties=lt,v.renderLists=Re,v.shadowMap=he,v.state=Ge,v.info=At}_t();const ct=new Pb(v,W);this.xr=ct,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=Ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(T){T!==void 0&&(le=T,this.setSize(ne,Q,!1))},this.getSize=function(T){return T.set(ne,Q)},this.setSize=function(T,B,Y=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=T,Q=B,n.width=Math.floor(T*le),n.height=Math.floor(B*le),Y===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(ne*le,Q*le).floor()},this.setDrawingBufferSize=function(T,B,Y){ne=T,Q=B,le=Y,n.width=Math.floor(T*Y),n.height=Math.floor(B*Y),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,B,Y,X){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,B,Y,X),Ge.viewport(x.copy(Z).multiplyScalar(le).floor())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,B,Y,X){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,B,Y,X),Ge.scissor(R.copy(ae).multiplyScalar(le).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(T){Ge.setScissorTest(pe=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(T=!0,B=!0,Y=!0){let X=0;if(T){let q=!1;if(b!==null){const we=b.texture.format;q=we===K0||we===q0||we===Y0}if(q){const we=b.texture.type,He=we===Er||we===fr||we===dh||we===Yr||we===X0||we===$0,Pe=wt.getClearColor(),Be=wt.getClearAlpha(),ot=Pe.r,Ze=Pe.g,We=Pe.b;He?(g[0]=ot,g[1]=Ze,g[2]=We,g[3]=Be,W.clearBufferuiv(W.COLOR,0,g)):(_[0]=ot,_[1]=Ze,_[2]=We,_[3]=Be,W.clearBufferiv(W.COLOR,0,_))}else X|=W.COLOR_BUFFER_BIT}B&&(X|=W.DEPTH_BUFFER_BIT),Y&&(X|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",je,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),Re.dispose(),tt.dispose(),lt.dispose(),E.dispose(),K.dispose(),J.dispose(),nt.dispose(),St.dispose(),Fe.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",oe),ct.removeEventListener("sessionend",re),Ae&&(Ae.dispose(),Ae=null),Me.stop()};function je(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=At.autoReset,B=he.enabled,Y=he.autoUpdate,X=he.needsUpdate,q=he.type;_t(),At.autoReset=T,he.enabled=B,he.autoUpdate=Y,he.needsUpdate=X,he.type=q}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ve(T){const B=T.target;B.removeEventListener("dispose",ve),Ne(B)}function Ne(T){Xe(T),lt.remove(T)}function Xe(T){const B=lt.get(T).programs;B!==void 0&&(B.forEach(function(Y){Fe.releaseProgram(Y)}),T.isShaderMaterial&&Fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Y,X,q,we){B===null&&(B=ft);const He=q.isMesh&&q.matrixWorld.determinant()<0,Pe=Xt(T,B,Y,X,q);Ge.setMaterial(X,He);let Be=Y.index,ot=1;if(X.wireframe===!0){if(Be=de.getWireframeAttribute(Y),Be===void 0)return;ot=2}const Ze=Y.drawRange,We=Y.attributes.position;let bt=Ze.start*ot,Wt=(Ze.start+Ze.count)*ot;we!==null&&(bt=Math.max(bt,we.start*ot),Wt=Math.min(Wt,(we.start+we.count)*ot)),Be!==null?(bt=Math.max(bt,0),Wt=Math.min(Wt,Be.count)):We!=null&&(bt=Math.max(bt,0),Wt=Math.min(Wt,We.count));const Mt=Wt-bt;if(Mt<0||Mt===1/0)return;nt.setup(q,X,Pe,Y,Be);let w,F=Qe;if(Be!==null&&(w=me.get(Be),F=Ve,F.setIndex(w)),q.isMesh)X.wireframe===!0?(Ge.setLineWidth(X.wireframeLinewidth*Ye()),F.setMode(W.LINES)):F.setMode(W.TRIANGLES);else if(q.isLine){let N=X.linewidth;N===void 0&&(N=1),Ge.setLineWidth(N*Ye()),q.isLineSegments?F.setMode(W.LINES):q.isLineLoop?F.setMode(W.LINE_LOOP):F.setMode(W.LINE_STRIP)}else q.isPoints?F.setMode(W.POINTS):q.isSprite&&F.setMode(W.TRIANGLES);if(q.isBatchedMesh)F.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)F.renderInstances(bt,Mt,q.count);else if(Y.isInstancedBufferGeometry){const N=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,U=Math.min(Y.instanceCount,N);F.renderInstances(bt,Mt,U)}else F.render(bt,Mt)};function yt(T,B,Y){T.transparent===!0&&T.side===di&&T.forceSinglePass===!1?(T.side=zn,T.needsUpdate=!0,st(T,B,Y),T.side=br,T.needsUpdate=!0,st(T,B,Y),T.side=di):st(T,B,Y)}this.compile=function(T,B,Y=null){Y===null&&(Y=T),p=tt.get(Y),p.init(),m.push(p),Y.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),T!==Y&&T.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights(v._useLegacyLights);const X=new Set;return T.traverse(function(q){const we=q.material;if(we)if(Array.isArray(we))for(let He=0;He<we.length;He++){const Pe=we[He];yt(Pe,Y,q),X.add(Pe)}else yt(we,Y,q),X.add(we)}),m.pop(),p=null,X},this.compileAsync=function(T,B,Y=null){const X=this.compile(T,B,Y);return new Promise(q=>{function we(){if(X.forEach(function(He){lt.get(He).currentProgram.isReady()&&X.delete(He)}),X.size===0){q(T);return}setTimeout(we,10)}Ce.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Je=null;function Dt(T){Je&&Je(T)}function oe(){Me.stop()}function re(){Me.start()}const Me=new p_;Me.setAnimationLoop(Dt),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(T){Je=T,ct.setAnimationLoop(T),T===null?Me.stop():Me.start()},ct.addEventListener("sessionstart",oe),ct.addEventListener("sessionend",re),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(B),B=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,b),p=tt.get(T,m.length),p.init(),m.push(p),Ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),qe.setFromProjectionMatrix(Ue),ce=this.localClippingEnabled,ee=at.init(this.clippingPlanes,ce),y=Re.get(T,u.length),y.init(),u.push(y),se(T,B,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(H,$),this.info.render.frame++,ee===!0&&at.beginShadows();const Y=p.state.shadowsArray;if(he.render(Y,T,B),ee===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1)&&wt.render(y,T),p.setupLights(v._useLegacyLights),B.isArrayCamera){const X=B.cameras;for(let q=0,we=X.length;q<we;q++){const He=X[q];Se(y,T,He,He.viewport)}}else Se(y,T,B);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(v,T,B),nt.resetDefaultState(),G=-1,ie=null,m.pop(),m.length>0?p=m[m.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function se(T,B,Y,X){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||qe.intersectsSprite(T)){X&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ue);const He=J.update(T),Pe=T.material;Pe.visible&&y.push(T,He,Pe,Y,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||qe.intersectsObject(T))){const He=J.update(T),Pe=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),De.copy(He.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(Ue)),Array.isArray(Pe)){const Be=He.groups;for(let ot=0,Ze=Be.length;ot<Ze;ot++){const We=Be[ot],bt=Pe[We.materialIndex];bt&&bt.visible&&y.push(T,He,bt,Y,De.z,We)}}else Pe.visible&&y.push(T,He,Pe,Y,De.z,null)}}const we=T.children;for(let He=0,Pe=we.length;He<Pe;He++)se(we[He],B,Y,X)}function Se(T,B,Y,X){const q=T.opaque,we=T.transmissive,He=T.transparent;p.setupLightsView(Y),ee===!0&&at.setGlobalState(v.clippingPlanes,Y),we.length>0&&Oe(q,we,B,Y),X&&Ge.viewport(x.copy(X)),q.length>0&&Ke(q,B,Y),we.length>0&&Ke(we,B,Y),He.length>0&&Ke(He,B,Y),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Oe(T,B,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const we=ze.isWebGL2;Ae===null&&(Ae=new is(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?ga:Er,minFilter:jr,samples:we?4:0})),v.getDrawingBufferSize($e),we?Ae.setSize($e.x,$e.y):Ae.setSize(cd($e.x),cd($e.y));const He=v.getRenderTarget();v.setRenderTarget(Ae),v.getClearColor(fe),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const Pe=v.toneMapping;v.toneMapping=Mr,Ke(T,Y,X),A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae);let Be=!1;for(let ot=0,Ze=B.length;ot<Ze;ot++){const We=B[ot],bt=We.object,Wt=We.geometry,Mt=We.material,w=We.group;if(Mt.side===di&&bt.layers.test(X.layers)){const F=Mt.side;Mt.side=zn,Mt.needsUpdate=!0,it(bt,Y,X,Wt,Mt,w),Mt.side=F,Mt.needsUpdate=!0,Be=!0}}Be===!0&&(A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae)),v.setRenderTarget(He),v.setClearColor(fe,O),v.toneMapping=Pe}function Ke(T,B,Y){const X=B.isScene===!0?B.overrideMaterial:null;for(let q=0,we=T.length;q<we;q++){const He=T[q],Pe=He.object,Be=He.geometry,ot=X===null?He.material:X,Ze=He.group;Pe.layers.test(Y.layers)&&it(Pe,B,Y,Be,ot,Ze)}}function it(T,B,Y,X,q,we){T.onBeforeRender(v,B,Y,X,q,we),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(v,B,Y,X,T,we),q.transparent===!0&&q.side===di&&q.forceSinglePass===!1?(q.side=zn,q.needsUpdate=!0,v.renderBufferDirect(Y,B,X,q,T,we),q.side=br,q.needsUpdate=!0,v.renderBufferDirect(Y,B,X,q,T,we),q.side=di):v.renderBufferDirect(Y,B,X,q,T,we),T.onAfterRender(v,B,Y,X,q,we)}function st(T,B,Y){B.isScene!==!0&&(B=ft);const X=lt.get(T),q=p.state.lights,we=p.state.shadowsArray,He=q.state.version,Pe=Fe.getParameters(T,q.state,we,B,Y),Be=Fe.getProgramCacheKey(Pe);let ot=X.programs;X.environment=T.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(T.isMeshStandardMaterial?K:E).get(T.envMap||X.environment),ot===void 0&&(T.addEventListener("dispose",ve),ot=new Map,X.programs=ot);let Ze=ot.get(Be);if(Ze!==void 0){if(X.currentProgram===Ze&&X.lightsStateVersion===He)return ht(T,Pe),Ze}else Pe.uniforms=Fe.getUniforms(T),T.onBuild(Y,Pe,v),T.onBeforeCompile(Pe,v),Ze=Fe.acquireProgram(Pe,Be),ot.set(Be,Ze),X.uniforms=Pe.uniforms;const We=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=at.uniform),ht(T,Pe),X.needsLights=vn(T),X.lightsStateVersion=He,X.needsLights&&(We.ambientLightColor.value=q.state.ambient,We.lightProbe.value=q.state.probe,We.directionalLights.value=q.state.directional,We.directionalLightShadows.value=q.state.directionalShadow,We.spotLights.value=q.state.spot,We.spotLightShadows.value=q.state.spotShadow,We.rectAreaLights.value=q.state.rectArea,We.ltc_1.value=q.state.rectAreaLTC1,We.ltc_2.value=q.state.rectAreaLTC2,We.pointLights.value=q.state.point,We.pointLightShadows.value=q.state.pointShadow,We.hemisphereLights.value=q.state.hemi,We.directionalShadowMap.value=q.state.directionalShadowMap,We.directionalShadowMatrix.value=q.state.directionalShadowMatrix,We.spotShadowMap.value=q.state.spotShadowMap,We.spotLightMatrix.value=q.state.spotLightMatrix,We.spotLightMap.value=q.state.spotLightMap,We.pointShadowMap.value=q.state.pointShadowMap,We.pointShadowMatrix.value=q.state.pointShadowMatrix),X.currentProgram=Ze,X.uniformsList=null,Ze}function Tt(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Nl.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function ht(T,B){const Y=lt.get(T);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Xt(T,B,Y,X,q){B.isScene!==!0&&(B=ft),A.resetTextureUnits();const we=B.fog,He=X.isMeshStandardMaterial?B.environment:null,Pe=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Wi,Be=(X.isMeshStandardMaterial?K:E).get(X.envMap||He),ot=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ze=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),We=!!Y.morphAttributes.position,bt=!!Y.morphAttributes.normal,Wt=!!Y.morphAttributes.color;let Mt=Mr;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const w=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,F=w!==void 0?w.length:0,N=lt.get(X),U=p.state.lights;if(ee===!0&&(ce===!0||T!==ie)){const ke=T===ie&&X.id===G;at.setState(X,T,ke)}let j=!1;X.version===N.__version?(N.needsLights&&N.lightsStateVersion!==U.state.version||N.outputColorSpace!==Pe||q.isBatchedMesh&&N.batching===!1||!q.isBatchedMesh&&N.batching===!0||q.isInstancedMesh&&N.instancing===!1||!q.isInstancedMesh&&N.instancing===!0||q.isSkinnedMesh&&N.skinning===!1||!q.isSkinnedMesh&&N.skinning===!0||q.isInstancedMesh&&N.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&N.instancingColor===!1&&q.instanceColor!==null||N.envMap!==Be||X.fog===!0&&N.fog!==we||N.numClippingPlanes!==void 0&&(N.numClippingPlanes!==at.numPlanes||N.numIntersection!==at.numIntersection)||N.vertexAlphas!==ot||N.vertexTangents!==Ze||N.morphTargets!==We||N.morphNormals!==bt||N.morphColors!==Wt||N.toneMapping!==Mt||ze.isWebGL2===!0&&N.morphTargetsCount!==F)&&(j=!0):(j=!0,N.__version=X.version);let z=N.currentProgram;j===!0&&(z=st(X,B,q));let I=!1,k=!1,xe=!1;const ue=z.getUniforms(),_e=N.uniforms;if(Ge.useProgram(z.program)&&(I=!0,k=!0,xe=!0),X.id!==G&&(G=X.id,k=!0),I||ie!==T){ue.setValue(W,"projectionMatrix",T.projectionMatrix),ue.setValue(W,"viewMatrix",T.matrixWorldInverse);const ke=ue.map.cameraPosition;ke!==void 0&&ke.setValue(W,De.setFromMatrixPosition(T.matrixWorld)),ze.logarithmicDepthBuffer&&ue.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ue.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),ie!==T&&(ie=T,k=!0,xe=!0)}if(q.isSkinnedMesh){ue.setOptional(W,q,"bindMatrix"),ue.setOptional(W,q,"bindMatrixInverse");const ke=q.skeleton;ke&&(ze.floatVertexTextures?(ke.boneTexture===null&&ke.computeBoneTexture(),ue.setValue(W,"boneTexture",ke.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(ue.setOptional(W,q,"batchingTexture"),ue.setValue(W,"batchingTexture",q._matricesTexture,A));const Ee=Y.morphAttributes;if((Ee.position!==void 0||Ee.normal!==void 0||Ee.color!==void 0&&ze.isWebGL2===!0)&&rt.update(q,Y,z),(k||N.receiveShadow!==q.receiveShadow)&&(N.receiveShadow=q.receiveShadow,ue.setValue(W,"receiveShadow",q.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(_e.envMap.value=Be,_e.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),k&&(ue.setValue(W,"toneMappingExposure",v.toneMappingExposure),N.needsLights&&kt(_e,xe),we&&X.fog===!0&&be.refreshFogUniforms(_e,we),be.refreshMaterialUniforms(_e,X,le,Q,Ae),Nl.upload(W,Tt(N),_e,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Nl.upload(W,Tt(N),_e,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ue.setValue(W,"center",q.center),ue.setValue(W,"modelViewMatrix",q.modelViewMatrix),ue.setValue(W,"normalMatrix",q.normalMatrix),ue.setValue(W,"modelMatrix",q.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ke=X.uniformsGroups;for(let dt=0,et=ke.length;dt<et;dt++)if(ze.isWebGL2){const Ct=ke[dt];St.update(Ct,z),St.bind(Ct,z)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return z}function kt(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function vn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,B,Y){lt.get(T.texture).__webglTexture=B,lt.get(T.depthTexture).__webglTexture=Y;const X=lt.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Y===void 0,X.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const Y=lt.get(T);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,Y=0){b=T,P=B,C=Y;let X=!0,q=null,we=!1,He=!1;if(T){const Be=lt.get(T);Be.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(W.FRAMEBUFFER,null),X=!1):Be.__webglFramebuffer===void 0?A.setupRenderTarget(T):Be.__hasExternalTextures&&A.rebindTextures(T,lt.get(T.texture).__webglTexture,lt.get(T.depthTexture).__webglTexture);const ot=T.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(He=!0);const Ze=lt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ze[B])?q=Ze[B][Y]:q=Ze[B],we=!0):ze.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?q=lt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ze)?q=Ze[Y]:q=Ze,x.copy(T.viewport),R.copy(T.scissor),te=T.scissorTest}else x.copy(Z).multiplyScalar(le).floor(),R.copy(ae).multiplyScalar(le).floor(),te=pe;if(Ge.bindFramebuffer(W.FRAMEBUFFER,q)&&ze.drawBuffers&&X&&Ge.drawBuffers(T,q),Ge.viewport(x),Ge.scissor(R),Ge.setScissorTest(te),we){const Be=lt.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+B,Be.__webglTexture,Y)}else if(He){const Be=lt.get(T.texture),ot=B||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Be.__webglTexture,Y||0,ot)}G=-1},this.readRenderTargetPixels=function(T,B,Y,X,q,we,He){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&He!==void 0&&(Pe=Pe[He]),Pe){Ge.bindFramebuffer(W.FRAMEBUFFER,Pe);try{const Be=T.texture,ot=Be.format,Ze=Be.type;if(ot!==pi&&Le.convert(ot)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ze===ga&&(Ce.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ze!==Er&&Le.convert(Ze)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===Ui&&(ze.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-X&&Y>=0&&Y<=T.height-q&&W.readPixels(B,Y,X,q,Le.convert(ot),Le.convert(Ze),we)}finally{const Be=b!==null?lt.get(b).__webglFramebuffer:null;Ge.bindFramebuffer(W.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(T,B,Y=0){const X=Math.pow(2,-Y),q=Math.floor(B.image.width*X),we=Math.floor(B.image.height*X);A.setTexture2D(B,0),W.copyTexSubImage2D(W.TEXTURE_2D,Y,0,0,T.x,T.y,q,we),Ge.unbindTexture()},this.copyTextureToTexture=function(T,B,Y,X=0){const q=B.image.width,we=B.image.height,He=Le.convert(Y.format),Pe=Le.convert(Y.type);A.setTexture2D(Y,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Y.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Y.unpackAlignment),B.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,X,T.x,T.y,q,we,He,Pe,B.image.data):B.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,X,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,He,B.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,X,T.x,T.y,He,Pe,B.image),X===0&&Y.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(T,B,Y,X,q=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=T.max.x-T.min.x+1,He=T.max.y-T.min.y+1,Pe=T.max.z-T.min.z+1,Be=Le.convert(X.format),ot=Le.convert(X.type);let Ze;if(X.isData3DTexture)A.setTexture3D(X,0),Ze=W.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)A.setTexture2DArray(X,0),Ze=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const We=W.getParameter(W.UNPACK_ROW_LENGTH),bt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Wt=W.getParameter(W.UNPACK_SKIP_PIXELS),Mt=W.getParameter(W.UNPACK_SKIP_ROWS),w=W.getParameter(W.UNPACK_SKIP_IMAGES),F=Y.isCompressedTexture?Y.mipmaps[q]:Y.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,F.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,F.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,T.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,T.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,T.min.z),Y.isDataTexture||Y.isData3DTexture?W.texSubImage3D(Ze,q,B.x,B.y,B.z,we,He,Pe,Be,ot,F.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ze,q,B.x,B.y,B.z,we,He,Pe,Be,F.data)):W.texSubImage3D(Ze,q,B.x,B.y,B.z,we,He,Pe,Be,ot,F),W.pixelStorei(W.UNPACK_ROW_LENGTH,We),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,bt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Wt),W.pixelStorei(W.UNPACK_SKIP_ROWS,Mt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,w),q===0&&X.generateMipmaps&&W.generateMipmap(Ze),Ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Ge.unbindTexture()},this.resetState=function(){P=0,C=0,b=null,Ge.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===hh?"display-p3":"srgb",n.unpackColorSpace=Lt.workingColorSpace===Dc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===fn?Kr:Q0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kr?fn:Wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ib extends M_{}Ib.prototype.isWebGL1Renderer=!0;class Db extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Ub{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=od,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Zr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new V;class fc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.applyMatrix4(e),this.setXYZ(n,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.applyNormalMatrix(e),this.setXYZ(n,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.transformDirection(e),this.setXYZ(n,wn.x,wn.y,wn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=wi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=wi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=wi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=wi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Pt(n,this.array),i=Pt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array),s=Pt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new dn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fd extends as{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ts;const Io=new V,As=new V,bs=new V,Cs=new mt,Do=new mt,E_=new Yt,ul=new V,Uo=new V,fl=new V,rg=new mt,ju=new mt,sg=new mt;class og extends tn{constructor(e=new fd){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new hn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ub(n,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new fc(i,3,0,!1)),Ts.setAttribute("uv",new fc(i,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new mt(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),E_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-bs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;dl(ul.set(-.5,-.5,0),bs,o,As,r,s),dl(Uo.set(.5,-.5,0),bs,o,As,r,s),dl(fl.set(.5,.5,0),bs,o,As,r,s),rg.set(0,0),ju.set(1,0),sg.set(1,1);let a=e.ray.intersectTriangle(ul,Uo,fl,!1,Io);if(a===null&&(dl(Uo.set(-.5,.5,0),bs,o,As,r,s),ju.set(0,1),a=e.ray.intersectTriangle(ul,fl,Uo,!1,Io),a===null))return;const l=e.ray.origin.distanceTo(Io);l<e.near||l>e.far||n.push({distance:l,point:Io.clone(),uv:Jn.getInterpolation(Io,ul,Uo,fl,rg,ju,sg,new mt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function dl(t,e,n,i,r,s){Cs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Do.x=s*Cs.x-r*Cs.y,Do.y=r*Cs.x+s*Cs.y):Do.copy(Cs),t.copy(e),t.x+=Do.x,t.y+=Do.y,t.applyMatrix4(E_)}class xi extends as{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ag=new V,lg=new V,cg=new Yt,Xu=new s_,hl=new Uc;class dd extends tn{constructor(e=new hn,n=new xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ag.fromBufferAttribute(n,r-1),lg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ag.distanceTo(lg);e.setAttribute("lineDistance",new mn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;cg.copy(r).invert(),Xu.copy(e.ray).applyMatrix4(cg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new V,f=new V,d=new V,h=new V,g=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),m=Math.min(_.count,o.start+o.count);for(let v=u,S=m-1;v<S;v+=g){const P=_.getX(v),C=_.getX(v+1);if(c.fromBufferAttribute(p,P),f.fromBufferAttribute(p,C),Xu.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(h);G<e.near||G>e.far||n.push({distance:G,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let v=u,S=m-1;v<S;v+=g){if(c.fromBufferAttribute(p,v),f.fromBufferAttribute(p,v+1),Xu.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||n.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ug=new V,fg=new V;class Ko extends dd{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ug.fromBufferAttribute(n,r),fg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ug.distanceTo(fg);e.setAttribute("lineDistance",new mn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dg extends Rn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const pl=new V,ml=new V,$u=new V,gl=new Jn;class Fb extends hn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ll*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},g=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:p,c:u}=gl;if(y.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),gl.getNormal($u),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let m=0;m<3;m++){const v=(m+1)%3,S=d[m],P=d[v],C=gl[f[m]],b=gl[f[v]],G=`${S}_${P}`,ie=`${P}_${S}`;ie in h&&h[ie]?($u.dot(h[ie].normal)<=s&&(g.push(C.x,C.y,C.z),g.push(b.x,b.y,b.z)),h[ie]=null):G in h||(h[G]={index0:c[m],index1:c[v],normal:$u.clone()})}}for(const _ in h)if(h[_]){const{index0:y,index1:p}=h[_];pl.fromBufferAttribute(a,y),ml.fromBufferAttribute(a,p),g.push(pl.x,pl.y,pl.z),g.push(ml.x,ml.y,ml.z)}this.setAttribute("position",new mn(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class gh extends hn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new V,h=new V,g=[],_=[],y=[],p=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const C=P/n;d.x=-e*Math.cos(r+C*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),p.push(C+S,1-v),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=f[u][m+1],S=f[u][m],P=f[u+1][m],C=f[u+1][m+1];(u!==0||o>0)&&g.push(v,S,C),(u!==i-1||l<Math.PI)&&g.push(S,P,C)}this.setIndex(g),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(y,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fo extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=J0,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vh extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Ob extends vh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Yu=new Yt,hg=new V,pg=new V;class kb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ph,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;hg.setFromMatrixPosition(e.matrixWorld),n.position.copy(hg),pg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pg),n.updateMatrixWorld(),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zb extends kb{constructor(){super(new m_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mg extends vh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new zb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bb extends vh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hb extends Ko{constructor(e=10,n=10,i=4473924,r=8947848){i=new ut(i),r=new ut(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,g=0,_=-a;h<=n;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=h===s?i:r;y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3}const f=new hn;f.setAttribute("position",new mn(l,3)),f.setAttribute("color",new mn(c,3));const d=new xi({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Gb extends Ko{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new hn;r.setAttribute("position",new mn(n,3)),r.setAttribute("color",new mn(i,3));const s=new xi({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new ut,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);function qu(t,e,n){return t<e?e:t>n?n:t}function Vb(t){const e=D.useRef(null),n=D.useRef([]),i=D.useRef(null),r=D.useRef(0),s=D.useRef(null),o=D.useRef({enabled:!0,scale:1,background:!0}),a=D.useRef(!0),l=D.useRef(null),c=D.useRef([]),f=D.useRef([]),d=D.useRef(null),h=D.useRef([]),g=D.useRef({markers:!0,trail:!0,death:!0,ping:!0,terrain:!0,towns:!0});return D.useEffect(()=>{n.current=t.players,g.current.markers=!0},[t.players]),D.useEffect(()=>{i.current=t.focusTarget},[t.focusTarget]),D.useEffect(()=>{r.current=t.focusNonce},[t.focusNonce]),D.useEffect(()=>{s.current=typeof t.followPlayerId=="number"?t.followPlayerId:null},[t.followPlayerId]),D.useEffect(()=>{o.current=t.nameTags||{enabled:!0,scale:1,background:!0},g.current.markers=!0},[t.nameTags]),D.useEffect(()=>{a.current=t.showAimLines!==!1,g.current.markers=!0},[t.showAimLines]),D.useEffect(()=>{l.current=t.trail||null,g.current.trail=!0},[t.trail]),D.useEffect(()=>{c.current=Array.isArray(t.deathMarkers)?t.deathMarkers:[],g.current.death=!0},[t.deathMarkers]),D.useEffect(()=>{f.current=Array.isArray(t.pingMarkers)?t.pingMarkers:[],g.current.ping=!0},[t.pingMarkers]),D.useEffect(()=>{d.current=t.terrain||null,g.current.terrain=!0},[t.terrain]),D.useEffect(()=>{h.current=Array.isArray(t.towns)?t.towns:[],g.current.towns=!0},[t.towns]),D.useEffect(()=>{const _=e.current;if(!_)return;const y=_,p=new M_({canvas:y,antialias:!0,powerPreference:"high-performance"});p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),p.shadowMap.enabled=!1;const u=new Db;u.background=new ut(724761);const m=new Zn(70,1,.1,2e4);m.position.set(0,25,60);const v=new Bb(16777215,.28);u.add(v);const S=new Ob(9418495,724761,.35);u.add(S);const P=new mg(16777215,1.15);P.position.set(150,260,130),P.castShadow=!1,u.add(P);const C=new mg(16777215,.35);C.position.set(-180,160,-120),u.add(C);const b=new Hb(2e3,200,3293278,1910328);u.add(b);const G=new Gb(10);u.add(G);const ie=new Mi;u.add(ie);const x=new Mi;u.add(x);const R=new Mi;u.add(R);const te=new Mi;u.add(te);const fe=new Mi;u.add(fe);const O=new Mi;u.add(O);const ne=new gh(.4,16,12),Q=new Fo({color:16366681}),le=new Fo({color:16757322}),H=new Fo({color:9081766}),$=new xi({color:16366681,transparent:!0,opacity:.8}),Z=new xi({color:16757322,transparent:!0,opacity:.8}),ae=new xi({color:9081766,transparent:!0,opacity:.7}),pe=new xi({color:16366681,transparent:!0,opacity:.35}),qe=new xi({color:16730698,transparent:!0,opacity:.9}),ee=new xi({color:16366681,transparent:!0,opacity:.95}),ce=new Fo({vertexColors:!0,roughness:1,metalness:0,side:di,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),Ae=new xi({color:15134195,transparent:!0,opacity:.55}),Ue=new Map,$e=new Map,De=new Map,ft=new Map,Ye=new Map,W=new Map;let vt=null,Ce=null,ze=null,Ge="",At=null;function lt(oe){const re=oe.material;re.map&&re.map.dispose(),re.dispose()}function A(){const oe=h.current;if(oe===At)return;At=oe;for(const Se of De.values())lt(Se),fe.remove(Se);if(De.clear(),!oe||oe.length===0)return;const re={scale:2.8,background:!1},Me=Se=>/^type:\s*\d+\s*$/i.test(Se.trim()),se=Se=>{let Oe=(Se||"").trim();return Oe=Oe.replace(/^#AR-MapLocation_/i,""),Oe=Oe.replace(/_/g," ").trim(),Oe};for(const Se of oe){if(!Se||typeof Se.name!="string"||!Se.name)continue;const Oe=se(Se.name);if(!Oe||Me(Oe))continue;const Ke=Se.pos;if(!Ke||!Number.isFinite(Ke.x)||!Number.isFinite(Ke.y)||!Number.isFinite(Ke.z))continue;const it=K(Oe,re);me(it,re),it.frustumCulled=!1,it.material.depthWrite=!1,it.position.set(Ke.x,Ke.y+5,Ke.z),fe.add(it);const st=Math.round(Ke.x),Tt=Math.round(Ke.z),ht=`${Oe}|${st}|${Tt}`;De.set(ht,it)}}let E=null;function K(oe,re){const Me=document.createElement("canvas"),se=Me.getContext("2d");if(!se){const B=new dg(document.createElement("canvas")),Y=new fd({map:B,transparent:!0});return new og(Y)}const Se=16;se.font=`600 ${Se}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;const Oe=10,Ke=6,it=se.measureText(oe),st=Math.ceil(it.width),Tt=Math.max(8,st+Oe*2),ht=Se+Ke*2,Xt=2;if(Me.width=Tt*Xt,Me.height=ht*Xt,se.setTransform(Xt,0,0,Xt,0,0),se.clearRect(0,0,Tt,ht),re.background){se.fillStyle="rgba(0,0,0,0.55)";const B=6;se.beginPath(),se.moveTo(B,0),se.lineTo(Tt-B,0),se.quadraticCurveTo(Tt,0,Tt,B),se.lineTo(Tt,ht-B),se.quadraticCurveTo(Tt,ht,Tt-B,ht),se.lineTo(B,ht),se.quadraticCurveTo(0,ht,0,ht-B),se.lineTo(0,B),se.quadraticCurveTo(0,0,B,0),se.closePath(),se.fill()}se.font=`600 ${Se}px system-ui, -apple-system, Segoe UI, Roboto, Arial`,se.fillStyle="rgba(255,255,255,0.95)",se.textBaseline="middle",se.fillText(oe,Oe,Math.floor(ht/2));const kt=new dg(Me);kt.needsUpdate=!0;const vn=new fd({map:kt,transparent:!0,depthTest:!1}),T=new og(vn);return T.userData={canvas:Me,texture:kt,text:oe},T.center.set(.5,0),T}function me(oe,re){const se=oe.material.map,Se=se&&se.image;if(!Se||!Se.width||!Se.height){oe.scale.set(2.5*re.scale,.8*re.scale,1);return}const Oe=Se.width/Se.height,Ke=.85*re.scale,it=Ke*Oe;oe.scale.set(it,Ke,1)}function de(oe,re,Me){const se=oe.userData;if(se&&se.text===re){me(oe,Me);return}const Se=oe.material,Oe=Se.map;Oe&&Oe.dispose(),Se.dispose();const Ke=K(re,Me);oe.material=Ke.material,oe.userData=Ke.userData,me(oe,Me)}const J={rmbDown:!1,pointerLocked:!1,yaw:0,pitch:0,speed:20,keys:Object.create(null)};let Fe=0;function be(){const oe=y.clientWidth,re=y.clientHeight;p.setSize(oe,re,!1),m.aspect=oe/re,m.updateProjectionMatrix()}const Re=new ResizeObserver(()=>be());Re.observe(y),be();function tt(){const oe=new Set,re=o.current,Me=a.current,se=n.current;for(const Se of se){oe.add(Se.playerId);let Oe=Ue.get(Se.playerId);if(!Oe){Oe=new ti(ne,Q),Oe.castShadow=!1,Oe.receiveShadow=!1,Oe.userData={playerId:Se.playerId},Ue.set(Se.playerId,Oe),ie.add(Oe);const Xt=K(Se.label||String(Se.playerId),re);Xt.position.set(0,1.2,0),me(Xt,re),$e.set(Se.playerId,Xt),Oe.add(Xt);const kt=new hn,vn=new Float32Array(6);kt.setAttribute("position",new dn(vn,3));const T=new dd(kt,$);ft.set(Se.playerId,T),ie.add(T)}const Ke=!!Se.isDead,it=!!Se.inVehicle,st=Ke?H:it?le:Q;Oe.material!==st&&(Oe.material=st),Oe.position.set(Se.pos.x,Se.pos.y,Se.pos.z);const Tt=$e.get(Se.playerId);Tt&&(Tt.visible=re.enabled,re.enabled&&de(Tt,Se.label||String(Se.playerId),re));const ht=ft.get(Se.playerId);if(ht){if(ht.visible=Me,!Me)continue;const Xt=Ke?ae:it?Z:$;ht.material!==Xt&&(ht.material=Xt);const kt=Se.aimDir,vn=ht.geometry.getAttribute("position");if(!kt)vn.setXYZ(0,Se.pos.x,Se.pos.y,Se.pos.z),vn.setXYZ(1,Se.pos.x,Se.pos.y,Se.pos.z),vn.needsUpdate=!0;else{const T=kt.x,B=kt.y,Y=kt.z,X=Math.max(1e-4,Math.sqrt(T*T+B*B+Y*Y)),q=T/X,we=B/X,He=Y/X,Pe=6,Be=Se.pos.x,ot=Se.pos.y+.6,Ze=Se.pos.z,We=Be+q*Pe,bt=ot+we*Pe,Wt=Ze+He*Pe;vn.setXYZ(0,Be,ot,Ze),vn.setXYZ(1,We,bt,Wt),vn.needsUpdate=!0}}}for(const[Se,Oe]of Ue){if(oe.has(Se))continue;ie.remove(Oe),Ue.delete(Se);const Ke=$e.get(Se);if(Ke){Oe.remove(Ke);const st=Ke.material;st.map&&st.map.dispose(),st.dispose(),$e.delete(Se)}const it=ft.get(Se);it&&(ie.remove(it),it.geometry.dispose(),ft.delete(Se))}}function at(){const oe=l.current;if(!oe||!Array.isArray(oe.points)||oe.points.length<2){E&&(x.remove(E),E.geometry.dispose(),E=null);return}const re=oe.points,Me=new Float32Array(re.length*3);for(let se=0;se<re.length;se++)Me[se*3+0]=re[se].x,Me[se*3+1]=re[se].y+.15,Me[se*3+2]=re[se].z;if(E){const se=E.geometry;se.setAttribute("position",new dn(Me,3)),se.getAttribute("position").needsUpdate=!0,se.computeBoundingSphere()}else{const se=new hn;se.setAttribute("position",new dn(Me,3)),E=new dd(se,pe),x.add(E)}}function he(){const oe=c.current,re=new Set;for(let Me=0;Me<oe.length;Me++){const se=oe[Me],Se=`${Math.round(se.x*10)}|${Math.round(se.y*10)}|${Math.round(se.z*10)}|${Me}`;re.add(Se);let Oe=Ye.get(Se);if(!Oe){const it=new hn,st=new Float32Array([-1.2,0,-1.2,1.2,0,1.2,-1.2,0,1.2,1.2,0,-1.2]);it.setAttribute("position",new dn(st,3)),Oe=new Ko(it,qe),Ye.set(Se,Oe),R.add(Oe)}Oe.position.set(se.x,se.y+.1,se.z)}for(const[Me,se]of Ye)re.has(Me)||(R.remove(se),se.geometry.dispose(),Ye.delete(Me))}function wt(){const oe=f.current,re=new Set;for(let Me=0;Me<oe.length;Me++){const se=oe[Me],Se=`${Math.round(se.x*10)}|${Math.round(se.y*10)}|${Math.round(se.z*10)}|${Me}`;re.add(Se);let Oe=W.get(Se);if(!Oe){const it=new hn,st=new Float32Array([-1.8,0,-1.8,1.8,0,1.8,-1.8,0,1.8,1.8,0,-1.8]);it.setAttribute("position",new dn(st,3)),Oe=new Ko(it,ee),W.set(Se,Oe),te.add(Oe)}Oe.position.set(se.x,se.y+.15,se.z)}for(const[Me,se]of W)re.has(Me)||(te.remove(se),se.geometry.dispose(),W.delete(Me))}function rt(){const oe=new rs().setFromAxisAngle(new V(0,1,0),J.yaw),re=new rs().setFromAxisAngle(new V(1,0,0),J.pitch);m.quaternion.copy(oe).multiply(re)}function Qe(oe){oe.preventDefault()}function Ve(oe){oe.button===2&&(J.rmbDown=!0,document.pointerLockElement!==y&&y.requestPointerLock())}function Le(oe){oe.button===2&&(J.rmbDown=!1,document.pointerLockElement===y&&document.exitPointerLock())}function nt(){if(J.pointerLocked=document.pointerLockElement===y,J.pointerLocked){const oe=new Ea().setFromQuaternion(m.quaternion,"YXZ");J.yaw=oe.y,J.pitch=oe.x}}function St(oe){if(!J.pointerLocked)return;const re=oe.movementX||0,Me=oe.movementY||0;J.yaw-=re*.002,J.pitch-=Me*.002,J.pitch=qu(J.pitch,-Math.PI/2+.01,Math.PI/2-.01)}function _t(oe){if(typeof s.current=="number"){const Se=oe.deltaY<0?.9:1.1,Oe=Je.clone().multiplyScalar(Se),Ke=Oe.length(),it=qu(Ke,6,800);Ke>1e-4&&Oe.multiplyScalar(it/Ke),Je.copy(Oe);return}const Me=oe.deltaY<0?1:-1,se=J.speed+Me*Math.max(1,J.speed*.1);J.speed=qu(se,1,400)}function ct(oe){J.keys[oe.code]=!0}function je(oe){J.keys[oe.code]=!1}function L(){const oe=d.current;if(!oe){b.visible=!0,vt&&(vt.geometry.dispose(),O.remove(vt),vt=null,Ge=""),Ce&&(Ce.geometry.dispose(),O.remove(Ce),Ce=null),ze&&(ze.geometry.dispose(),ze.material.dispose(),O.remove(ze),ze=null);return}b.visible=!1;const re=`${oe.gridW}x${oe.gridH}|${oe.bbMin.x},${oe.bbMin.y},${oe.bbMin.z}|${oe.bbMax.x},${oe.bbMax.y},${oe.bbMax.z}|${oe.heights.length}`;if(re===Ge)return;Ge=re,vt&&(vt.geometry.dispose(),O.remove(vt),vt=null),Ce&&(Ce.geometry.dispose(),O.remove(Ce),Ce=null),ze&&(ze.geometry.dispose(),ze.material.dispose(),O.remove(ze),ze=null);const Me=Math.max(2,Math.floor(oe.gridW)),se=Math.max(2,Math.floor(oe.gridH)),Se=Me*se;if(!Array.isArray(oe.heights)||oe.heights.length<Se)return;const Oe=oe.bbMax.x-oe.bbMin.x,Ke=oe.bbMax.z-oe.bbMin.z;if(!Number.isFinite(Oe)||!Number.isFinite(Ke)||Oe<=0||Ke<=0)return;const it=new uo(Oe,Ke,Me-1,se-1);it.rotateX(-Math.PI/2);const st=it.attributes.position;let Tt=1/0,ht=-1/0;for(let Pe=0;Pe<Se;Pe++){const Be=oe.heights[Pe];typeof Be!="number"||!Number.isFinite(Be)||(Be<Tt&&(Tt=Be),Be>ht&&(ht=Be))}(!Number.isFinite(Tt)||!Number.isFinite(ht)||ht-Tt<.001)&&(Tt=0,ht=1);const Xt=ht-Tt,kt=new Float32Array(Se*3),vn=new ut(988708),T=new ut(1910328),B=new ut(3293278),Y=0,X=new ut(735846);for(let Pe=0;Pe<se;Pe++){const Be=Pe,ot=Pe;for(let Ze=0;Ze<Me;Ze++){const We=Ze+Me*Be,bt=Ze+Me*ot,Wt=oe.heights[We];st.setY(bt,Wt);let Mt=(Wt-Tt)/Xt;Number.isFinite(Mt)||(Mt=0),Mt=Math.min(1,Math.max(0,Mt)),Mt=Math.pow(Mt,.65);const w=Mt<.5?vn.clone().lerp(T,Mt/.5):T.clone().lerp(B,(Mt-.5)/.5);Number.isFinite(Wt)&&Wt<Y&&w.lerp(X,.28),kt[bt*3+0]=w.r,kt[bt*3+1]=w.g,kt[bt*3+2]=w.b}}st.needsUpdate=!0,it.setAttribute("color",new dn(kt,3)),it.computeVertexNormals(),vt=new ti(it,ce),vt.receiveShadow=!1,vt.castShadow=!1;const q=(oe.bbMin.x+oe.bbMax.x)/2,we=(oe.bbMin.z+oe.bbMax.z)/2;if(vt.position.set(q,0,we),O.add(vt),Tt<Y&&ht>Y){const Pe=new uo(Oe,Ke,1,1);Pe.rotateX(-Math.PI/2);const Be=new Fo({color:1732264,transparent:!0,opacity:.26,roughness:.15,metalness:0,side:di,depthWrite:!1});ze=new ti(Pe,Be),ze.receiveShadow=!1,ze.castShadow=!1,ze.position.set(q,Y,we),O.add(ze)}const He=new Fb(it,35);Ce=new Ko(He,Ae),Ce.position.copy(vt.position),O.add(Ce)}y.addEventListener("contextmenu",Qe),y.addEventListener("mousedown",Ve),window.addEventListener("mouseup",Le),document.addEventListener("pointerlockchange",nt),window.addEventListener("mousemove",St),y.addEventListener("wheel",_t,{passive:!0}),window.addEventListener("keydown",ct),window.addEventListener("keyup",je);let ge=performance.now(),ve=0,Ne=0,Xe=0,yt=null;const Je=new V(0,25,60);function Dt(oe){const re=Math.min((oe-ge)/1e3,.05);ge=oe;const Me=g.current;Me.towns&&(A(),Me.towns=!1),Me.markers&&oe-Ne>=50&&(tt(),Me.markers=!1,Ne=oe),Me.trail&&oe-Xe>=75&&(at(),Me.trail=!1,Xe=oe),Me.death&&(he(),Me.death=!1),Me.ping&&(wt(),Me.ping=!1),Me.terrain&&(L(),Me.terrain=!1);const se=s.current;if(typeof se=="number"){const it=n.current.find(st=>st&&st.playerId===se);if(it){const st=it.pos;if(se!==yt){Je.set(m.position.x-st.x,m.position.y-st.y,m.position.z-st.z);const ht=Je.length();(!Number.isFinite(Je.x)||!Number.isFinite(Je.y)||!Number.isFinite(Je.z)||!Number.isFinite(ht)||ht<1||ht>500)&&Je.set(0,25,60),yt=se}if(m.position.set(st.x+Je.x,st.y+Je.y,st.z+Je.z),m.lookAt(st.x,st.y+1.5,st.z),J.rmbDown||J.pointerLocked){const ht=new V(0,0,-1).applyQuaternion(m.quaternion),Xt=new V(1,0,0).applyQuaternion(m.quaternion),kt=new V(0,1,0);J.keys.KeyW&&Je.addScaledVector(ht,J.speed*re),J.keys.KeyS&&Je.addScaledVector(ht,-J.speed*re),J.keys.KeyA&&Je.addScaledVector(Xt,-J.speed*re),J.keys.KeyD&&Je.addScaledVector(Xt,J.speed*re),J.keys.KeyQ&&Je.addScaledVector(kt,J.speed*re),J.keys.KeyZ&&Je.addScaledVector(kt,-J.speed*re)}m.position.set(st.x+Je.x,st.y+Je.y,st.z+Je.z),m.lookAt(st.x,st.y+1.5,st.z)}}else yt=null;const Se=r.current;if(se===null&&Se!==Fe){Fe=Se;const Ke=i.current;Ke&&(m.position.set(Ke.x,Ke.y+25,Ke.z+60),m.lookAt(Ke.x,Ke.y+1.5,Ke.z))}if(J.pointerLocked&&se===null&&rt(),(J.rmbDown||J.pointerLocked)&&se===null){const Ke=new V(0,0,-1).applyQuaternion(m.quaternion),it=new V(1,0,0).applyQuaternion(m.quaternion),st=new V(0,1,0);J.keys.KeyW&&m.position.addScaledVector(Ke,J.speed*re),J.keys.KeyS&&m.position.addScaledVector(Ke,-J.speed*re),J.keys.KeyA&&m.position.addScaledVector(it,-J.speed*re),J.keys.KeyD&&m.position.addScaledVector(it,J.speed*re),J.keys.KeyQ&&m.position.addScaledVector(st,J.speed*re),J.keys.KeyZ&&m.position.addScaledVector(st,-J.speed*re)}p.render(u,m),ve=window.requestAnimationFrame(Dt)}return ve=window.requestAnimationFrame(Dt),()=>{window.cancelAnimationFrame(ve),y.removeEventListener("contextmenu",Qe),y.removeEventListener("mousedown",Ve),window.removeEventListener("mouseup",Le),document.removeEventListener("pointerlockchange",nt),window.removeEventListener("mousemove",St),y.removeEventListener("wheel",_t),window.removeEventListener("keydown",ct),window.removeEventListener("keyup",je),Re.disconnect(),ne.dispose(),Q.dispose(),le.dispose(),H.dispose(),$.dispose(),Z.dispose(),ae.dispose(),pe.dispose(),qe.dispose(),ee.dispose(),ce.dispose(),Ae.dispose(),E&&(E.geometry.dispose(),E=null),vt&&(vt.geometry.dispose(),vt=null),Ce&&(Ce.geometry.dispose(),Ce=null);for(const oe of Ye.values())oe.geometry.dispose();for(const oe of W.values())oe.geometry.dispose();p.dispose()}},[]),M.jsx("div",{style:{width:"100%",height:"100%",minHeight:400,position:"relative"},children:M.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block",borderRadius:8}})})}function cn(t){if(!t)return null;if(typeof t=="object"){if(Array.isArray(t)){if(t.length<3)return null;const r=t[0],s=t[1],o=t[2];return typeof r!="number"||typeof s!="number"||typeof o!="number"?null:{x:r,y:s,z:o}}const e=t.x,n=t.y,i=t.z;return typeof e!="number"||typeof n!="number"||typeof i!="number"?null:{x:e,y:n,z:i}}if(typeof t=="string"){const e=t.trim().split(/\s+/g);if(e.length<3)return null;const n=Number(e[0]),i=Number(e[1]),r=Number(e[2]);return!Number.isFinite(n)||!Number.isFinite(i)||!Number.isFinite(r)?null:{x:n,y:i,z:r}}return null}function Ku(t,e=30){return!t||typeof t.x!="number"||typeof t.z!="number"?!0:Math.abs(t.x)<=e&&Math.abs(t.z)<=e}function Zu(t){if(!t)return null;const e=cn(t.bbMin),n=cn(t.bbMax),i=typeof t.gridW=="number"?t.gridW:0,r=typeof t.gridH=="number"?t.gridH:0,s=Array.isArray(t.heights)?t.heights.filter(o=>typeof o=="number"):[];return e&&n&&i>=2&&r>=2&&s.length>=i*r?{bbMin:e,bbMax:n,gridW:i,gridH:r,heights:s}:null}function Qu(t){if(!t)return null;const e=Array.isArray(t.descriptors)?t.descriptors:Array.isArray(t.towns)?t.towns:[];if(e.length===0)return null;const n=[];for(const i of e){if(!i)continue;const r=typeof i.name=="string"?i.name.trim():"",s=typeof i.type=="string"?i.type.trim():"",o=typeof i.baseType=="number"?i.baseType:null,a=r||s||(o!==null?`type:${o}`:"descriptor"),l=cn(i.pos);l&&n.push({name:a,pos:l})}return n.length===0?null:n}function gg(t,e,n){if(!t||!t.bbMin||!t.bbMax||!Array.isArray(t.heights))return null;const i=Math.floor(t.gridW),r=Math.floor(t.gridH);if(i<2||r<2||t.heights.length<i*r)return null;const s=t.bbMin.x,o=t.bbMax.x,a=t.bbMin.z,l=t.bbMax.z,c=o-s,f=l-a;if(!Number.isFinite(c)||!Number.isFinite(f)||c<=0||f<=0)return null;const d=(e-s)/c,h=(n-a)/f;if(!Number.isFinite(d)||!Number.isFinite(h)||d<0||d>1||h<0||h>1)return null;const g=d*(i-1),_=h*(r-1),y=Math.floor(g),p=Math.floor(_),u=Math.min(i-1,y+1),m=Math.min(r-1,p+1),v=g-y,S=_-p,P=y+i*p,C=u+i*p,b=y+i*m,G=u+i*m,ie=t.heights[P],x=t.heights[C],R=t.heights[b],te=t.heights[G];if(![ie,x,R,te].every(ne=>typeof ne=="number"&&Number.isFinite(ne)))return null;const fe=ie*(1-v)+x*v,O=R*(1-v)+te*v;return fe*(1-S)+O*S}function Wb(t){const e=Yi();return D.useMemo(()=>{const i=new URLSearchParams(e.search).get(t);return i||null},[e.search,t])}function vl(t){const e=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,n=Math.floor(e/1e3),i=Math.floor(n/3600),r=Math.floor(n%3600/60),s=n%60,o=String(i).padStart(2,"0"),a=String(r).padStart(2,"0"),l=String(s).padStart(2,"0");return`${o}:${a}:${l}`}function Ju(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function jb(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function Xb(t,e){if(!Array.isArray(t)||t.length===0)return[];const n=new Map;for(const r of t){const s=e(r).trim();s&&n.set(s,(n.get(s)||0)+1)}const i=Array.from(n.entries()).map(([r,s])=>({name:r,count:s}));return i.sort((r,s)=>s.count-r.count||r.name.localeCompare(s.name)),i}function dc(t){const e=t.payload;return e&&typeof e.tsMs=="number"?e.tsMs:null}function Rs(t){const e=t.payload;return`${t.receivedAt}|${e&&e.tsMs}|${e&&e.type}`}function ef(t,e,n){if(!Number.isFinite(e)||e<=0)return[];if(t.length<=e)return t;if(typeof n!="number"||!Number.isFinite(n))return t.slice(t.length-e);const i=dc(t[0]),r=dc(t[t.length-1]);if(typeof i!="number"||typeof r!="number")return t.slice(t.length-e);const s=Math.abs(n-i),o=Math.abs(r-n),a=t.length-e;return s>o?t.slice(a):t.slice(0,t.length-a)}function $b(){const t=Wb("serverId"),[e,n]=D.useState([]),[i,r]=D.useState(""),[s,o]=D.useState(null),[a,l]=D.useState(null),[c,f]=D.useState(null),[d,h]=D.useState(!1),[g,_]=D.useState(!0),[y,p]=D.useState({minTsMs:null,maxTsMs:null}),[u,m]=D.useState(null),[v,S]=D.useState(null),[P,C]=D.useState(null),[b,G]=D.useState([]),[ie,x]=D.useState(""),[R,te]=D.useState(null),[fe,O]=D.useState(null),[ne,Q]=D.useState(0),[le,H]=D.useState(!0),[$,Z]=D.useState("players"),[ae,pe]=D.useState(!1),[qe,ee]=D.useState(!0),[ce,Ae]=D.useState(null),[Ue,$e]=D.useState(null),De=D.useRef(new Map),[ft,Ye]=D.useState(!1),[W,vt]=D.useState(1),Ce=D.useRef(null),[ze,Ge]=D.useState(!0),[At,lt]=D.useState(1),[A,E]=D.useState(!0),[K,me]=D.useState(!0),[de,J]=D.useState(!0),[Fe,be]=D.useState(!0),[Re,tt]=D.useState(!0),[at,he]=D.useState(20),[wt,rt]=D.useState([]),Qe=D.useRef(0),[Ve,Le]=D.useState(()=>{try{const w=window.localStorage.getItem("replay.eventClickOffsetSeconds"),F=w!==null?Number(w):5;return Number.isFinite(F)?Math.max(0,Math.min(60,Math.floor(F))):5}catch{return 5}}),[nt,St]=D.useState(null),[_t,ct]=D.useState(null),[je,L]=D.useState([]),ge=D.useRef(null),ve=D.useRef(!1),Ne=D.useRef(null),Xe=D.useRef(0),yt=D.useRef(0),Je=D.useRef(!1),Dt=D.useRef(!1),oe=D.useRef(new Map);D.useEffect(()=>{t&&t.length>0&&r(t)},[t]),D.useEffect(()=>{Ce.current=u},[u]),D.useEffect(()=>{Ne.current=null,Xe.current=0,yt.current=0},[i]),D.useEffect(()=>{try{window.localStorage.setItem("replay.eventClickOffsetSeconds",String(Ve))}catch{}},[Ve]),D.useEffect(()=>{function w(F){F.code==="KeyF"&&_t!==null&&ct(null)}return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[_t]),D.useEffect(()=>{let w=!1;async function F(){try{const N=await hM();if(w)return;n(N)}catch(N){if(w)return;const U=N instanceof Error?N.message:"Failed to load servers";f(U)}}return F(),()=>{w=!0}},[]),D.useEffect(()=>{let w=!1;async function F(){try{const U=await Jf();if(w)return;o(U),l(null)}catch(U){if(w)return;const j=U instanceof Error?U.message:"Failed to load server status";l(j)}}F();const N=window.setInterval(F,15e3);return()=>{w=!0,window.clearInterval(N)}},[]);const re=i.length>0?i:null;D.useEffect(()=>{S(null),C(null)},[re]),D.useEffect(()=>{if(!re)return;const w=re;let F=!1;async function N(){h(!0),f(null);try{const[U,j,z,I]=await Promise.all([Up(w),Fp(w),du(w).catch(()=>null),hu(w).catch(()=>null)]);if(F)return;p({minTsMs:U.minTsMs,maxTsMs:U.maxTsMs}),G(j);const k=Zu(z);k&&S(k);const xe=Qu(I);if(xe&&C(xe),typeof U.maxTsMs=="number"){m(U.maxTsMs);const ue=await Ga({serverId:w,untilTsMs:U.maxTsMs,limit:5e3,tail:!0}).catch(()=>[]);if(!F){L(ue);let _e=null;for(const Ee of ue){const ke=Ee.payload;ke&&typeof ke.tsMs=="number"&&(_e===null||ke.tsMs>_e)&&(_e=ke.tsMs)}ge.current=_e!==null?_e:Math.max(0,U.maxTsMs-15e3)}}Qe.current=Date.now(),Ye(!1)}catch(U){if(F)return;const j=U instanceof Error?U.message:"Failed to load replay data";f(j)}finally{F||h(!1)}}return N(),()=>{F=!0}},[re]),D.useEffect(()=>{if(!re||v||Je.current||!je.some(N=>{const U=N.payload;return U&&(U.type==="map"||U.type==="terrain")}))return;let F=!1;return Je.current=!0,du(re).then(N=>{if(F)return;const U=Zu(N);U&&S(U)}).catch(()=>{}).finally(()=>{Je.current=!1}),()=>{F=!0}},[je,re,v]),D.useEffect(()=>{if(!re||P||Dt.current||!je.some(N=>{const U=N.payload;return U&&(U.type==="map"||U.type==="terrain"||U.type==="towns"||U.type==="descriptors")}))return;let F=!1;return Dt.current=!0,hu(re).then(N=>{if(F)return;const U=Qu(N);U&&C(U)}).catch(()=>{}).finally(()=>{Dt.current=!1}),()=>{F=!0}},[je,re,P]),D.useEffect(()=>{if(!re||g||!ft||typeof y.maxTsMs!="number")return;let w=0,F=performance.now();function N(U){const j=Math.min(250,Math.max(0,U-F));F=U;const z=Ce.current;if(typeof z=="number"){const I=y.maxTsMs;let k=z+j*W;k>=I&&(k=I,Ye(!1)),Ce.current=k,m(k)}w=window.requestAnimationFrame(N)}return w=window.requestAnimationFrame(N),()=>window.cancelAnimationFrame(w)},[ft,g,W,y.maxTsMs,re]),D.useEffect(()=>{if(!re)return;const w=re;let F=!1,N=null;async function U(){try{const j=await Fp(w);F||G(j)}catch{}F||(N=window.setTimeout(U,g?3e3:5e3))}return U(),()=>{F=!0,N!==null&&window.clearTimeout(N)}},[g,re]),D.useEffect(()=>{if(!re)return;const w=re;let F=!1,N=null;async function U(){try{const j=await Up(w);if(F)return;const z=ge.current;typeof z=="number"&&typeof j.maxTsMs=="number"&&j.maxTsMs+1e3<z&&(ge.current=null,Qe.current=Date.now(),L([{receivedAt:Date.now(),payload:{type:"restart",tsMs:j.maxTsMs,event:{reason:"server_restart_or_history_cleared"}}}]),rt([]),Ye(!1),Je.current=!1,du(w).then(I=>{if(F)return;const k=Zu(I);k&&S(k)}).catch(()=>{}),Dt.current=!1,hu(w).then(I=>{if(F)return;const k=Qu(I);k&&C(k)}).catch(()=>{})),p({minTsMs:j.minTsMs,maxTsMs:j.maxTsMs}),g&&typeof j.maxTsMs=="number"&&m(j.maxTsMs)}catch{}F||(N=window.setTimeout(U,g?2e3:3e3))}return U(),()=>{F=!0,N!==null&&window.clearTimeout(N)}},[g,re]),D.useEffect(()=>{if(!re)return;const w=re;let F=!1,N=null;async function U(){const j=y.maxTsMs;if(typeof j!="number"){F||(N=window.setTimeout(U,1e3));return}const z=ge.current,I=typeof z=="number"?z+1:Math.max(0,j-8e3);try{let ue=I;const _e=[];let Ee=typeof ge.current=="number"?ge.current:null;for(let ke=0;ke<2;ke++){const dt=await Ga({serverId:w,sinceTsMs:ue,untilTsMs:j,limit:1500});_e.push(...dt);let et=null;for(const Ct of dt){const Nt=dc(Ct);Nt!==null&&((et===null||Nt>et)&&(et=Nt),(Ee===null||Nt>Ee)&&(Ee=Nt))}if(dt.length<1500||et===null||et>=j)break;ue=et+1}if(F)return;_e.length>0&&L(ke=>{const dt=ke.slice(-500),et=new Set;for(const Nt of dt)et.add(Rs(Nt));const Ct=ke.slice();for(const Nt of _e){const qi=Rs(Nt);et.has(qi)||Ct.push(Nt)}return ef(Ct,25e4,Ce.current)}),typeof Ee=="number"&&(ge.current=Ee)}catch(k){if(!F){const xe=k instanceof Error?k.message:"Failed to fetch replay events";f(xe)}}F||(N=window.setTimeout(U,g?1e3:1500))}return U(),()=>{F=!0,N!==null&&window.clearTimeout(N)}},[g,y.maxTsMs,re]);const Me=D.useMemo(()=>{let w=null,F=null;for(const N of je){const U=N.payload,j=U&&typeof U.tsMs=="number"?U.tsMs:null;j!==null&&((w===null||j<w)&&(w=j),(F===null||j>F)&&(F=j))}return{minTsMs:w,maxTsMs:F}},[je]);D.useEffect(()=>{if(!re)return;const w=re,F=u,N=Me.minTsMs,U=y.minTsMs;if(typeof F!="number"||typeof N!="number"||typeof U!="number"||N<=U+1||F>N+2e3||ve.current)return;ve.current=!0;const z=Math.max(0,Math.floor(N)-1);Ga({serverId:w,untilTsMs:z,limit:5e3,tail:!0}).then(I=>{I.length!==0&&L(k=>{const xe=k.slice(0,800),ue=new Set;for(const ke of xe)ue.add(Rs(ke));const _e=[];for(const ke of I){const dt=Rs(ke);ue.has(dt)||_e.push(ke)}const Ee=_e.concat(k);return ef(Ee,25e4,Ce.current)})}).catch(()=>{}).finally(()=>{ve.current=!1})},[u,Me.minTsMs,y.minTsMs,re]),D.useEffect(()=>{if(!re)return;const w=re;if(Ne.current===w)return;const F=Me.minTsMs,N=y.minTsMs;if(typeof F!="number"||typeof N!="number"||F<=N+1)return;const U=25e4;if(je.length>=U-5e3){Ne.current=w;return}const j=Date.now();if(j-yt.current<400||ve.current)return;yt.current=j,ve.current=!0;const z=Math.max(0,Math.floor(F)-1);Ga({serverId:w,untilTsMs:z,limit:5e3,tail:!0}).then(I=>{if(I.length===0){Xe.current+=1,Xe.current>=3&&(Ne.current=w);return}Xe.current=0,L(k=>{const xe=k.slice(0,800),ue=new Set;for(const ke of xe)ue.add(Rs(ke));const _e=[];for(const ke of I){const dt=Rs(ke);ue.has(dt)||_e.push(ke)}const Ee=_e.concat(k);return ef(Ee,U,Ce.current)})}).catch(()=>{}).finally(()=>{ve.current=!1})},[je.length,Me.minTsMs,y.minTsMs,re]);const se=D.useMemo(()=>{const w=[];for(const F of je){const N=F.payload;!N||typeof N!="object"||N.type==="snapshot"&&typeof N.tsMs=="number"&&Array.isArray(N.players)&&w.push({tsMs:N.tsMs,players:N.players})}return w.sort((F,N)=>F.tsMs-N.tsMs),w},[je]),Se=D.useMemo(()=>{const w=new Map;for(const N of b){if(!N||typeof N.playerId!="number")continue;const U=typeof N.name=="string"&&N.name.trim().length>0?N.name.trim():String(N.playerId);w.set(N.playerId,U)}for(const N of je){const U=N.payload;if(!U||typeof U!="object"||U.type!=="join"&&U.type!=="disconnect")continue;const j=U.event,z=j&&typeof j.playerId=="number"?j.playerId:null;if(z===null)continue;const I=j&&typeof j.name=="string"&&j.name.trim().length>0?j.name.trim():"";I?w.set(z,I):w.has(z)||w.set(z,String(z))}for(const N of se)for(const U of N.players){if(!U||typeof U!="object")continue;const j=U.playerId;if(typeof j!="number")continue;const z=typeof U.name=="string"&&U.name.trim().length>0?U.name.trim():"";z?w.set(j,z):w.has(j)||w.set(j,String(j))}const F=Array.from(w.entries()).map(([N,U])=>({playerId:N,name:U}));return F.sort((N,U)=>N.name.localeCompare(U.name)||N.playerId-U.playerId),F},[je,b,se]),Oe=D.useMemo(()=>{const w=new Map;for(const F of se){const N=F.tsMs;for(const U of F.players){if(!U||typeof U!="object")continue;const j=U.playerId;if(typeof j!="number")continue;let z=w.get(j);z||(z=[],w.set(j,z)),z.push({tsMs:N,player:U})}}return w},[se]),Ke=D.useMemo(()=>{const w=new Map;for(const F of je){const N=F.payload;if(!N||typeof N!="object"||N.type!=="join"&&N.type!=="disconnect"||typeof N.tsMs!="number")continue;const U=N.event,j=U&&typeof U.playerId=="number"?U.playerId:null;if(j===null)continue;let z=w.get(j);z||(z=[],w.set(j,z)),z.push({tsMs:N.tsMs,type:N.type})}for(const F of w.values())F.sort((N,U)=>N.tsMs-U.tsMs);return w},[je]),it=D.useMemo(()=>(w,F)=>{const N=Oe.get(w);if(!N||N.length===0)return null;let U=0,j=N.length-1,z=-1;for(;U<=j;){const I=U+j>>1;N[I].tsMs<=F?(z=I,U=I+1):j=I-1}return z<0?null:N[z]},[Oe]),st=D.useMemo(()=>(w,F,N)=>{const U=Oe.get(w);if(!U||U.length===0)return null;let j=0,z=U.length-1,I=-1;for(;j<=z;){const k=j+z>>1;U[k].tsMs<=F?(I=k,j=k+1):z=k-1}if(I<0)return null;for(let k=I;k>=0;k--){const xe=U[k],ue=F-xe.tsMs;if(ue<0)continue;if(ue>N)break;const _e=xe.player;if(!_e||typeof _e!="object")continue;const Ee=_e.inventory,ke=_e.attachments,dt=_e.weapon,et={tsMs:xe.tsMs};if(Array.isArray(Ee)&&(et.inventory=Ee),Array.isArray(ke)&&(et.attachments=ke),dt&&typeof dt=="object"&&typeof dt.name=="string"&&dt.name.length>0&&(et.weapon=dt),"inventory"in et||"attachments"in et||"weapon"in et)return et}return null},[Oe]),Tt=D.useMemo(()=>(w,F)=>{const N=Ke.get(w);if(!N||N.length===0)return null;let U=0,j=N.length-1,z=-1;for(;U<=j;){const I=U+j>>1;N[I].tsMs<=F?(z=I,U=I+1):j=I-1}return z<0?null:N[z].type==="join"},[Ke]),ht=D.useMemo(()=>(w,F,N=6e4)=>{if(typeof w!="number"||w<0||typeof F!="number"||!Number.isFinite(F)||se.length===0)return null;const U=F+Math.max(1e3,Math.min(5*60*1e3,Math.floor(N)));let j=0,z=se.length-1,I=se.length;for(;j<=z;){const k=j+z>>1;se[k].tsMs>=F?(I=k,z=k-1):j=k+1}for(let k=I;k<se.length;k++){const xe=se[k];if(xe.tsMs>U)break;const ue=xe.players.find(Ee=>Ee&&typeof Ee=="object"&&Ee.playerId===w);if(!ue)continue;const _e=cn(ue.pos);if(_e&&!Ku(_e,30))return _e}return null},[se]),Xt=D.useMemo(()=>(w,F,N=6e4)=>{if(typeof w!="number"||w<0||typeof F!="number"||!Number.isFinite(F)||se.length===0)return null;const U=F-Math.max(1e3,Math.min(5*60*1e3,Math.floor(N)));let j=0,z=se.length-1,I=-1;for(;j<=z;){const k=j+z>>1;se[k].tsMs<=F?(I=k,j=k+1):z=k-1}for(let k=I;k>=0;k--){const xe=se[k];if(xe.tsMs<U)break;const ue=xe.players.find(Ee=>Ee&&typeof Ee=="object"&&Ee.playerId===w);if(!ue)continue;const _e=cn(ue.pos);if(_e&&!Ku(_e,30))return _e}return null},[se]),kt=D.useMemo(()=>{const w=new Map;for(const F of je){const N=F.payload;if(!N||typeof N!="object"||N.type!=="kill"&&N.type!=="death"||typeof N.tsMs!="number")continue;const U=N.event,j=U&&typeof U.victimPlayerId=="number"?U.victimPlayerId:null;if(j===null)continue;const z=N.tsMs+3e4,I=w.get(j)||0;z>I&&w.set(j,z)}return w},[je]),vn=D.useMemo(()=>({enabled:ze,scale:Math.min(2,Math.max(.5,At)),background:A}),[A,At,ze]),T=D.useMemo(()=>{const w=u;if(typeof w!="number")return[];if(Oe.size===0)return[];const F=new Map;for(const j of Se)F.set(j.playerId,j.name);const N=3e4,U=[];for(const j of Se){const z=j.playerId,I=it(z,w);if(!I)continue;const k=Tt(z,w);if(k===!1||k===null&&w-I.tsMs>N)continue;const xe=I.player,ue=cn(xe.pos);if(!ue)continue;const _e=!!xe.inVehicle,Ee=gg(v,ue.x,ue.z),dt=!_e&&typeof Ee=="number"&&Number.isFinite(Ee)&&typeof ue.y=="number"&&Number.isFinite(ue.y)&&Math.abs(ue.y-Ee)<=3.5?{...ue,y:Ee+.35}:ue,et=cn(xe.aimDir),Ct=xe.vehicle&&typeof xe.vehicle.name=="string"?String(xe.vehicle.name):"",Nt=I.tsMs,qi=kt.get(z)||0,Oc=typeof Nt=="number"?qi>Nt:!1;let yo=F.get(z)||String(z);K&&_e&&Ct&&(yo=`${yo} (${Ct})`),U.push({playerId:z,label:yo,pos:dt,aimDir:et,inVehicle:_e,isDead:Oc})}return U},[u,kt,it,Tt,Se,Oe,K,v]),B=D.useMemo(()=>{if(!Re||R===null||typeof u!="number"||se.length===0)return null;const w=Math.max(5e3,Math.min(6e4,Math.floor(at*1e3))),F=u-w,N=[];let U=null;for(const z of se){if(z.tsMs<F)continue;if(z.tsMs>u)break;const I=z.players.find(dt=>dt&&typeof dt=="object"&&dt.playerId===R);if(!I)continue;const k=!!I.inVehicle,xe=I.entityId,ue=typeof xe=="string"&&xe.length>0?xe:null;ue&&U&&ue!==U&&(N.length=0),ue&&(U=ue);const _e=cn(I.pos);if(!_e||Ku(_e,30))continue;const Ee=gg(v,_e.x,_e.z),ke=!k&&typeof Ee=="number"&&Number.isFinite(Ee)&&typeof _e.y=="number"&&Number.isFinite(_e.y)&&Math.abs(_e.y-Ee)<=3.5;N.push(ke?{..._e,y:Ee}:_e)}if(N.length<2)return null;const j=200;if(N.length>j){const z=Math.ceil(N.length/j),I=[];for(let k=0;k<N.length;k+=z)I.push(N[k]);return{points:I}}return{points:N}},[u,Re,R,se,v,at]),Y=D.useMemo(()=>{if(!Fe)return[];const w=u;if(typeof w!="number")return[];const F=[];for(const N of je){const U=N.payload;if(!U||typeof U!="object"||U.type!=="kill"&&U.type!=="death"||typeof U.tsMs!="number"||w<U.tsMs||w>U.tsMs+3e3)continue;const j=U.event,z=j?cn(j.victimPos):null;if(z&&(F.push(z),F.length>=40))break}return F},[u,je,Fe]),X=D.useMemo(()=>{const w=y.minTsMs,F=y.maxTsMs,N=u;return typeof w!="number"||typeof F!="number"||typeof N!="number"?{min:0,max:100,value:0,disabled:!0}:F<=w?{min:w,max:w+1,value:w,disabled:!1}:{min:w,max:F,value:Math.min(Math.max(N,w),F),disabled:!1}},[u,y.maxTsMs,y.minTsMs]),q=D.useMemo(()=>{let w=-1/0,F=0;for(const N of je){if(!N||typeof N.receivedAt!="number")continue;const U=dc(N);U!==null&&U>w&&(w=U,F=N.receivedAt)}return!Number.isFinite(w)||w<0||!Number.isFinite(F)||F<=0?null:{tsMs:w,receivedAt:F}},[je]),we=D.useMemo(()=>{if(!q)return null;const w=q;return F=>{const N=w.receivedAt+(F-w.tsMs);return Number.isFinite(N)?new Date(N).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}):""}},[q]),He=D.useMemo(()=>{if(_t===null)return null;const w=Se.find(F=>F.playerId===_t);return w?w.name:String(_t)},[_t,Se]),Pe=D.useMemo(()=>{const w=u;if(typeof w!="number"||!Number.isFinite(w))return[];const F=3e4,N=[];for(const U of Se){const j=U.playerId,z=Tt(j,w);if(z===!0){N.push(U);continue}if(z===!1)continue;const I=it(j,w);I&&w-I.tsMs<=F&&N.push(U)}return N.sort((U,j)=>U.name.localeCompare(j.name)||U.playerId-j.playerId),N},[u,it,Tt,Se]);function Be(w){const F=Math.max(0,Math.floor(Ve*1e3)),N=X.disabled?0:X.min,U=X.disabled?w:X.max,j=Math.min(U,Math.max(N,w-F));m(j)}const ot=D.useMemo(()=>{const w=ie.trim().toLowerCase(),F=Array.isArray(Pe)?Pe:[];return w?F.filter(N=>(N.name||"").toLowerCase().includes(w)||String(N.playerId).includes(w)):F},[ie,Pe]),Ze=D.useMemo(()=>{if(R===null)return null;const w=u;if(typeof w!="number")return null;const F=it(R,w);return F?{snapTsMs:F.tsMs,player:F.player}:null},[u,it,R]),We=D.useMemo(()=>{const w=u;if(typeof w!="number")return Ze;const F=Ze;if(!F||!F.player||typeof F.player!="object")return F;const N=F.player,U=F.snapTsMs,j=typeof N.playerId=="number"?N.playerId:null;if(j===null)return F;const z=5*6e4,I=oe.current.get(j)||{invTsMs:-1,hotbarTsMs:-1,weaponTsMs:-1},k=N.inventory;Array.isArray(k)&&(I.inventory=k,I.invTsMs=U);const xe=N.attachments;Array.isArray(xe)&&(I.attachments=xe,I.hotbarTsMs=U);const ue=N.weapon;ue&&typeof ue=="object"&&typeof ue.name=="string"&&ue.name.length>0&&(I.weapon=ue,I.weaponTsMs=U),oe.current.set(j,I);const _e=!Array.isArray(k),Ee=!Array.isArray(xe),ke=!ue||!ue.name,et=_e||Ee||ke?st(j,w,z):null;et&&et.inventory&&(!("inventory"in I)||I.invTsMs>w||w-I.invTsMs>z)&&(I.inventory=et.inventory,I.invTsMs=et.tsMs),et&&et.attachments&&(!("attachments"in I)||I.hotbarTsMs>w||w-I.hotbarTsMs>z)&&(I.attachments=et.attachments,I.hotbarTsMs=et.tsMs),et&&et.weapon&&(!I.weapon||I.weaponTsMs>w||w-I.weaponTsMs>z)&&(I.weapon=et.weapon,I.weaponTsMs=et.tsMs);const Ct=w-I.invTsMs,Nt=w-I.hotbarTsMs,qi=w-I.weaponTsMs,Oc="inventory"in I&&I.invTsMs<=w&&Ct>=0&&Ct<=z&&_e,yo="attachments"in I&&I.hotbarTsMs<=w&&Nt>=0&&Nt<=z&&Ee,w_=!!I.weapon&&I.weaponTsMs<=w&&qi>=0&&qi<=z&&ke;return{...N,inventory:Oc?I.inventory:k,attachments:yo?I.attachments:xe,weapon:w_?I.weapon:ue,__snapTsMs:U}},[u,st,Ze]),bt=D.useMemo(()=>{const w=[];for(const j of je){const z=j.payload;if(!z||typeof z!="object"||typeof z.tsMs!="number"||z.type==="snapshot"||z.type!=="kill"&&z.type!=="death"&&z.type!=="aiKill"&&z.type!=="join"&&z.type!=="disconnect"&&z.type!=="restart"&&z.type!=="gmPing")continue;const I=z.event;if(z.type==="kill"){const k=I&&typeof I.killerName=="string"?I.killerName:"Unknown",xe=I&&typeof I.victimName=="string"?I.victimName:"Unknown",ue=I&&typeof I.weaponName=="string"?I.weaponName:"",_e=I&&typeof I.distanceM=="number"?I.distanceM:null,Ee=typeof _e=="number"&&Number.isFinite(_e)?`${Math.round(_e)}m`:"",ke=I?cn(I.victimPos):null,dt=I&&typeof I.victimPlayerId=="number"?I.victimPlayerId:null,et=I&&typeof I.killerPlayerId=="number"?I.killerPlayerId:null,Ct=[];ue&&Ct.push(ue),Ee&&Ct.push(Ee),w.push({tsMs:z.tsMs,type:"kill",title:`${k} → ${xe}`,subtitle:Ct.join(" • "),focusPos:ke,focusPlayerId:dt,playerIds:[et,dt].filter(Nt=>typeof Nt=="number")})}else if(z.type==="death"){const k=I&&typeof I.victimPlayerId=="number"?I.victimPlayerId:null,xe=I&&typeof I.killerPlayerId=="number"?I.killerPlayerId:null;if(k!==null&&xe!==null&&xe>=0&&xe!==k)continue;const ue=I&&typeof I.victimName=="string"?I.victimName:"Unknown",_e=I&&typeof I.weaponName=="string"?I.weaponName:"",Ee=I&&typeof I.distanceM=="number"?I.distanceM:null,ke=typeof Ee=="number"&&Number.isFinite(Ee)?`${Math.round(Ee)}m`:"",dt=I?cn(I.victimPos):null,et=[];_e&&et.push(_e),ke&&et.push(ke),w.push({tsMs:z.tsMs,type:"death",title:`${ue} died`,subtitle:et.join(" • "),focusPos:dt,focusPlayerId:k,playerIds:[k].filter(Ct=>typeof Ct=="number")})}else if(z.type==="aiKill"){const k=I&&typeof I.killerName=="string"?I.killerName:"Unknown",xe=I&&typeof I.victimName=="string"?I.victimName:"Unknown",ue=I&&typeof I.weaponName=="string"?I.weaponName:"",_e=I&&typeof I.distanceM=="number"?I.distanceM:null,Ee=typeof _e=="number"&&Number.isFinite(_e)?`${Math.round(_e)}m`:"",ke=I?cn(I.victimPos):null,dt=I&&typeof I.killerPlayerId=="number"?I.killerPlayerId:null,et=[];ue&&et.push(ue),Ee&&et.push(Ee),w.push({tsMs:z.tsMs,type:"aiKill",title:`${k} → AI: ${xe}`,subtitle:et.join(" • "),focusPos:ke,focusPlayerId:dt,playerIds:[dt].filter(Ct=>typeof Ct=="number")})}else if(z.type==="gmPing"){const k=I&&typeof I.by=="string"&&I.by.length>0?I.by:"",xe=I&&typeof I.title=="string"&&I.title.length>0?I.title:"event",ue=I?cn(I.pos):null,_e=k?`(${k} sent a GM ping to ${xe})`:`GM ping to ${xe}`;w.push({tsMs:z.tsMs,type:"gmPing",title:_e,subtitle:"",focusPos:ue,focusPlayerId:null,playerIds:[]})}else{if(z.type==="restart"){w.push({tsMs:z.tsMs,type:"restart",title:"Server restarted",subtitle:"restart / history cleared",focusPos:null,focusPlayerId:null,playerIds:[]});continue}const k=I&&typeof I.name=="string"?I.name:String(I&&I.playerId?I.playerId:"player"),xe=I&&typeof I.playerId=="number"?I.playerId:null,ue=z.type==="join"&&typeof xe=="number"?ht(xe,z.tsMs,9e4):null,_e=z.type==="disconnect"&&typeof xe=="number"?Xt(xe,z.tsMs,9e4):null;w.push({tsMs:z.tsMs,type:String(z.type),title:`${z.type==="join"?"Join":"Disconnect"}: ${k}`,subtitle:z.type==="disconnect"&&I&&typeof I.kickCause=="string"&&I.kickCause?`cause: ${I.kickCause}`:"",focusPos:ue||_e,focusPlayerId:xe,playerIds:[xe].filter(Ee=>typeof Ee=="number")})}}w.sort((j,z)=>j.tsMs-z.tsMs);const F=u,N=nt;let U=w;return typeof F=="number"&&(U=U.filter(j=>j.tsMs<=F)),typeof N=="number"&&(U=U.filter(j=>j.playerIds.includes(N))),U.slice(-200)},[u,nt,je,ht]);D.useEffect(()=>{if(!Ue)return;const w=window.setTimeout(()=>{const F=De.current.get(Ue);F&&F.scrollIntoView({block:"nearest",behavior:"smooth"})},0);return()=>window.clearTimeout(w)},[Ue,$]);const Wt=D.useMemo(()=>{const w=y.minTsMs,F=y.maxTsMs;if(typeof w!="number"||typeof F!="number")return[];let N=[];for(const z of je){const I=z.payload;if(!I||typeof I!="object"||I.type!=="kill"&&I.type!=="death"&&I.type!=="aiKill"&&I.type!=="join"&&I.type!=="disconnect"&&I.type!=="restart"&&I.type!=="gmPing"||typeof I.tsMs!="number"||I.tsMs<w||I.tsMs>F)continue;const k=I.event;if(I.type==="kill"){const xe=k&&typeof k.killerName=="string"?k.killerName:"Unknown",ue=k&&typeof k.victimName=="string"?k.victimName:"Unknown",_e=k&&typeof k.weaponName=="string"?k.weaponName:"",Ee=k&&typeof k.distanceM=="number"?k.distanceM:null,ke=typeof Ee=="number"&&Number.isFinite(Ee)?`${Math.round(Ee)}m`:"",dt=k?cn(k.victimPos):null,et=k&&typeof k.victimPlayerId=="number"?k.victimPlayerId:null,Ct=k&&typeof k.killerPlayerId=="number"?k.killerPlayerId:null,Nt=[];_e&&Nt.push(_e),ke&&Nt.push(ke),N.push({tsMs:I.tsMs,type:"kill",title:`${xe} → ${ue}`,subtitle:Nt.join(" • "),focusPos:dt,focusPlayerId:et,playerIds:[Ct,et].filter(qi=>typeof qi=="number")})}else if(I.type==="death"){const xe=k&&typeof k.victimPlayerId=="number"?k.victimPlayerId:null,ue=k&&typeof k.killerPlayerId=="number"?k.killerPlayerId:null;if(xe!==null&&ue!==null&&ue>=0&&ue!==xe)continue;const _e=k&&typeof k.victimName=="string"?k.victimName:"Unknown",Ee=k&&typeof k.weaponName=="string"?k.weaponName:"",ke=k&&typeof k.distanceM=="number"?k.distanceM:null,dt=typeof ke=="number"&&Number.isFinite(ke)?`${Math.round(ke)}m`:"",et=k?cn(k.victimPos):null,Ct=[];Ee&&Ct.push(Ee),dt&&Ct.push(dt),N.push({tsMs:I.tsMs,type:"death",title:`${_e} died`,subtitle:Ct.join(" • "),focusPos:et,focusPlayerId:xe,playerIds:[xe].filter(Nt=>typeof Nt=="number")})}else if(I.type==="aiKill"){const xe=k&&typeof k.killerName=="string"?k.killerName:"Unknown",ue=k&&typeof k.victimName=="string"?k.victimName:"Unknown",_e=k&&typeof k.weaponName=="string"?k.weaponName:"",Ee=k&&typeof k.distanceM=="number"?k.distanceM:null,ke=typeof Ee=="number"&&Number.isFinite(Ee)?`${Math.round(Ee)}m`:"",dt=k?cn(k.victimPos):null,et=k&&typeof k.killerPlayerId=="number"?k.killerPlayerId:null,Ct=[];_e&&Ct.push(_e),ke&&Ct.push(ke),N.push({tsMs:I.tsMs,type:"aiKill",title:`${xe} → AI: ${ue}`,subtitle:Ct.join(" • "),focusPos:dt,focusPlayerId:et,playerIds:[et].filter(Nt=>typeof Nt=="number")})}else if(I.type==="gmPing"){const xe=k&&typeof k.by=="string"&&k.by.length>0?k.by:"",ue=k&&typeof k.title=="string"&&k.title.length>0?k.title:"event",_e=k?cn(k.pos):null,Ee=xe?`(${xe} sent a GM ping to ${ue})`:`GM ping to ${ue}`;N.push({tsMs:I.tsMs,type:"gmPing",title:Ee,subtitle:"",focusPos:_e,focusPlayerId:null,playerIds:[]})}else if(I.type==="restart"){const xe=k&&typeof k.reason=="string"?k.reason:"",ue=xe==="session_start"?"server restart":xe==="server_restart_or_history_cleared"?"restart / history cleared":xe||"restart";N.push({tsMs:I.tsMs,type:"restart",title:"Server restarted",subtitle:ue,focusPos:null,focusPlayerId:null,playerIds:[]})}else{const xe=k&&typeof k.name=="string"?k.name:String(k&&k.playerId?k.playerId:"player"),ue=k&&typeof k.playerId=="number"?k.playerId:null,_e=I.type==="join"&&typeof ue=="number"?ht(ue,I.tsMs,9e4):null;N.push({tsMs:I.tsMs,type:I.type,title:`${I.type==="join"?"Join":"Disconnect"}: ${xe}`,subtitle:I.type==="disconnect"&&k&&typeof k.kickCause=="string"&&k.kickCause?`cause: ${k.kickCause}`:"",focusPos:_e,focusPlayerId:ue,playerIds:[ue].filter(Ee=>typeof Ee=="number")})}}N.sort((z,I)=>z.tsMs-I.tsMs);const U=nt;typeof U=="number"&&(N=N.filter(z=>z.playerIds.includes(U)));const j=420;if(N.length>j){const z=Math.ceil(N.length/j),I=[];for(let k=0;k<N.length;k+=z)I.push(N[k]);return I}return N},[nt,je,ht,y.maxTsMs,y.minTsMs]);function Mt(w){const F=`${Date.now()}-${Math.random().toString(16).slice(2)}`;rt(N=>[{id:F,...w,visible:!1},...N].slice(0,5)),window.setTimeout(()=>{rt(N=>N.map(U=>U.id===F?{...U,visible:!0}:U))},10),window.setTimeout(()=>{rt(N=>N.map(U=>U.id===F?{...U,visible:!1}:U))},4500),window.setTimeout(()=>{rt(N=>N.filter(U=>U.id!==F))},5200)}return D.useEffect(()=>{if(!g||je.length===0)return;const w=Qe.current;let F=w;const N=[];for(const U of je)!U||typeof U.receivedAt!="number"||U.receivedAt<=w||(U.receivedAt>F&&(F=U.receivedAt),N.push({receivedAt:U.receivedAt,payload:U.payload}));N.sort((U,j)=>U.receivedAt-j.receivedAt);for(const U of N){const j=U.payload;if(!(!j||typeof j!="object")&&j.type!=="snapshot"){if(j.type==="gmPing"){const z=j.event,I=z&&typeof z.by=="string"&&z.by.length>0?z.by:"",k=z&&typeof z.title=="string"&&z.title.length>0?z.title:"Ping";Mt({kind:"event",title:"GM ping",subtitle:I?`${I} • ${k}`:k});continue}if(j.type==="kill"){const z=j.event,I=z&&typeof z.killerName=="string"?z.killerName:"Unknown",k=z&&typeof z.victimName=="string"?z.victimName:"Unknown",xe=z&&typeof z.weaponName=="string"&&z.weaponName.length>0?z.weaponName:"",ue=z&&typeof z.distanceM=="number"?z.distanceM:null,_e=typeof ue=="number"&&Number.isFinite(ue)?`${Math.round(ue)}m`:"",Ee=[];xe&&Ee.push(xe),_e&&Ee.push(_e),Mt({kind:"kill",title:`${I} → ${k}`,subtitle:Ee.length>0?Ee.join(" • "):"Kill"})}else if(j.type==="death"){const z=j.event,I=z&&typeof z.victimPlayerId=="number"?z.victimPlayerId:null,k=z&&typeof z.killerPlayerId=="number"?z.killerPlayerId:null;if(I!==null&&k!==null&&k>=0&&k!==I)continue;const xe=z&&typeof z.victimName=="string"?z.victimName:"Unknown",ue=z&&typeof z.weaponName=="string"&&z.weaponName.length>0?z.weaponName:"",_e=z&&typeof z.distanceM=="number"?z.distanceM:null,Ee=typeof _e=="number"&&Number.isFinite(_e)?`${Math.round(_e)}m`:"",ke=[];ue&&ke.push(ue),Ee&&ke.push(Ee),Mt({kind:"event",title:`${xe} died`,subtitle:ke.length>0?ke.join(" • "):"Death"})}else if(j.type==="aiKill"){const z=j.event,I=z&&typeof z.killerName=="string"?z.killerName:"Unknown",k=z&&typeof z.victimName=="string"?z.victimName:"Unknown",xe=z&&typeof z.weaponName=="string"&&z.weaponName.length>0?z.weaponName:"",ue=z&&typeof z.distanceM=="number"?z.distanceM:null,_e=typeof ue=="number"&&Number.isFinite(ue)?`${Math.round(ue)}m`:"",Ee=[];xe&&Ee.push(xe),_e&&Ee.push(_e),Mt({kind:"kill",title:`${I} → AI: ${k}`,subtitle:Ee.length>0?Ee.join(" • "):"AI kill"})}}}F>w&&(Qe.current=F)},[je,g]),M.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden"},children:[M.jsxs("div",{className:"row",style:{gap:12,padding:12,alignItems:"center"},children:[M.jsxs("div",{style:{minWidth:240,maxWidth:520,flex:1},children:[M.jsxs("select",{className:"input",value:i,onChange:w=>{r(w.target.value),G([]),te(null),O(null),L([]),p({minTsMs:null,maxTsMs:null}),m(null),ge.current=null,Qe.current=0,rt([])},children:[M.jsx("option",{value:"",children:"Select a server…"}),e.map(w=>M.jsxs("option",{value:w.id,children:[w.name," (",w.id,")"]},w.id))]}),e.length===0?M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"No servers returned yet."}):null]}),re?null:M.jsx("button",{className:"button",onClick:()=>{l(null),Jf().then(w=>o(w)).catch(w=>{const F=w instanceof Error?w.message:"Failed to load server status";l(F)})},children:"Refresh overview"}),d?M.jsx("div",{className:"muted",style:{fontSize:12},children:"Loading…"}):null,c?M.jsx("div",{className:"error",style:{flex:1},children:c}):null]}),re?M.jsx("div",{style:{position:"relative",width:"100%",height:"calc(100vh - 72px)",padding:12,boxSizing:"border-box"},children:M.jsx("div",{className:"card",style:{width:"100%",height:"100%",padding:0,overflow:"hidden"},children:M.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[M.jsx(Vb,{players:T,focusTarget:fe,focusNonce:ne,followPlayerId:_t,nameTags:vn,showAimLines:de,trail:B,deathMarkers:Y,terrain:v,towns:P||void 0}),_t!==null&&He?M.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:132,display:"flex",justifyContent:"center",pointerEvents:"none"},children:M.jsx("div",{className:"card",style:{padding:"8px 12px",background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)"},children:M.jsxs("div",{style:{fontWeight:800,fontSize:12},children:["Attached to ",He,", press F to unattach"]})})}):null,M.jsx("div",{style:{position:"absolute",top:12,right:12,width:340,display:"flex",flexDirection:"column",gap:8,pointerEvents:"none"},children:wt.map(w=>M.jsxs("div",{style:{pointerEvents:"none",padding:"10px 12px",borderRadius:10,background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)",opacity:w.visible?1:0,transform:w.visible?"translateY(0px)":"translateY(-6px)",transition:"opacity 250ms ease, transform 250ms ease"},children:[M.jsx("div",{style:{fontWeight:700,fontSize:13},children:w.title}),w.subtitle?M.jsx("div",{className:"muted",style:{fontSize:12},children:w.subtitle}):null]},w.id))}),M.jsx("div",{style:{position:"absolute",top:12,left:12,width:le?360:"auto"},children:M.jsxs("div",{className:"card",style:{padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"nowrap"},children:[M.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:$==="players"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:$==="players"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>Z("players"),children:"Players"}),M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:$==="events"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:$==="events"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>Z("events"),children:"Events"})]}),M.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[$==="players"?M.jsx("button",{type:"button",className:"button",title:"Nametag options",style:{padding:"6px 10px"},onClick:()=>pe(w=>!w),children:"⚙"}):null,M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>H(w=>!w),children:le?"−":"+"})]})]}),le?M.jsxs("div",{className:"stack",style:{marginTop:10},children:[$==="players"?M.jsxs(M.Fragment,{children:[ae?M.jsxs("div",{style:{border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:[M.jsx("div",{className:"label",style:{marginBottom:8},children:"Nametags"}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:ze,onChange:w=>Ge(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Show nametags"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:A,onChange:w=>E(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Background"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:K,onChange:w=>me(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Include vehicle in label"})]}),M.jsx("div",{className:"label",style:{marginBottom:6},children:"Nametag size"}),M.jsx("input",{style:{width:"100%"},type:"range",min:.6,max:1.6,step:.1,value:At,onChange:w=>lt(Number(w.target.value))}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:[At.toFixed(1),"×"]}),M.jsx("div",{style:{height:8}}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:de,onChange:w=>J(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Aim direction line"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:Fe,onChange:w=>be(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Death markers"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:Re,onChange:w=>tt(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Trails (focused player)"})]}),Re?M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"label",style:{marginBottom:6},children:"Trail window (seconds)"}),M.jsx("input",{style:{width:"100%"},type:"range",min:5,max:60,step:5,value:at,onChange:w=>he(Number(w.target.value))}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:[at,"s"]})]}):null]}):null,M.jsx("input",{className:"input",placeholder:"Search players…",value:ie,onChange:w=>x(w.target.value)})]}):null,$==="players"?M.jsx("div",{className:"scroll",style:{maxHeight:240,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:ot.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No players."}):ot.map(w=>{const F=R===w.playerId;return M.jsxs("button",{type:"button",onClick:()=>{Z("players"),te(w.playerId),ct(w.playerId);const N=T.find(U=>U.playerId===w.playerId);N&&(O(N.pos),Q(U=>U+1))},className:"button",style:{width:"100%",textAlign:"left",borderRadius:0,border:"none",borderBottom:"1px solid rgba(255,255,255,0.06)",background:F?"rgba(255,255,255,0.08)":"transparent",padding:"8px 10px"},children:[M.jsx("div",{style:{fontWeight:700,fontSize:13},children:w.name}),M.jsxs("div",{className:"muted",style:{fontSize:11},children:["#",w.playerId]})]},w.playerId)})}):M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between",gap:10},children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Event click offset"}),M.jsxs("div",{className:"row",style:{gap:8},children:[M.jsx("input",{className:"input",style:{width:90,padding:"6px 10px"},type:"number",min:0,max:60,step:1,value:Ve,onChange:w=>Le(Math.max(0,Math.min(60,Math.floor(Number(w.target.value)||0)))),title:"Jump this many seconds before an event"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"sec"})]})]}),M.jsx("div",{className:"scroll",style:{maxWidth:340,overflowX:"auto",overflowY:"hidden",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:bt.length===0?M.jsx("div",{className:"muted",style:{fontSize:12},children:"No events in buffer yet."}):M.jsx("div",{style:{display:"flex",gap:10},children:bt.slice().reverse().map((w,F)=>{const N=`${w.tsMs}|${w.type}|${w.title}|${w.subtitle||""}`,U=Ue===N,j=!!re&&w.type!=="gmPing"&&!!w.focusPos,z=w.subtitle?`${w.title} • ${w.subtitle}`:w.title;return M.jsxs("div",{ref:I=>{I?De.current.set(N,I):De.current.delete(N)},className:"button",style:{minWidth:220,textAlign:"left",borderRadius:10,border:U?"1px solid rgba(255,255,255,0.35)":"1px solid rgba(255,255,255,0.10)",background:U?"rgba(255,255,255,0.10)":"rgba(255,255,255,0.06)",padding:"8px 10px",position:"relative"},role:"button",tabIndex:0,onClick:()=>{$e(N),Ye(!1),_(!1),Be(w.tsMs),typeof w.focusPlayerId=="number"&&te(w.focusPlayerId),w.focusPos&&(O(w.focusPos),Q(I=>I+1))},onKeyDown:I=>{I.key!=="Enter"&&I.key!==" "||(I.preventDefault(),$e(N),Ye(!1),_(!1),Be(w.tsMs),typeof w.focusPlayerId=="number"&&te(w.focusPlayerId),w.focusPos&&(O(w.focusPos),Q(k=>k+1)))},children:[M.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:8,right:8,padding:"4px 8px",fontSize:11,opacity:j?1:.4},title:j?"Send GM ping to this event location":"No position for this event",disabled:!j,onClick:I=>{if(I.stopPropagation(),!re)return;const k=w.focusPos;if(!k)return;const xe=typeof w.focusPlayerId=="number"?w.focusPlayerId:Array.isArray(w.playerIds)&&w.playerIds.length>0?w.playerIds[0]:null;pM({serverId:re,tsMs:w.tsMs,pos:k,title:z,reporterPlayerId:xe})},children:"GM ping"}),M.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:34,right:8,padding:"4px 8px",fontSize:11,opacity:j?1:.4},title:j?"Export 5s before/after as a GIF to Discord":"No position for this event",disabled:!j,onClick:I=>{if(I.stopPropagation(),!re)return;const k=w.focusPos;k&&(async()=>{try{await wM({serverId:re,tsMs:w.tsMs,title:w.title,pos:k,focusPlayerId:typeof w.focusPlayerId=="number"?w.focusPlayerId:null,playerIds:Array.isArray(w.playerIds)?w.playerIds:null}),Mt({kind:"event",title:"Discord export",subtitle:"Sent"})}catch(xe){f(xe instanceof Error?xe.message:"Failed to export to Discord")}})()},children:"Export"}),M.jsx("div",{style:{fontWeight:800,fontSize:12},children:w.title}),M.jsxs("div",{className:"muted",style:{fontSize:11,marginTop:2},children:["+",vl(w.tsMs-X.min),we?` • ${we(w.tsMs)}`:"",w.subtitle?` • ${w.subtitle}`:""]})]},`${w.tsMs}-${F}`)})})})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Selected"}),R===null?M.jsx("div",{className:"muted",style:{fontSize:12},children:"Click a player to view equipment."}):We?M.jsxs("div",{style:{fontSize:12},children:[M.jsxs("div",{className:"muted",style:{marginBottom:6},children:["pos: ",JSON.stringify(We.pos)]}),M.jsxs("details",{open:!0,children:[M.jsx("summary",{style:{cursor:"pointer",fontWeight:700},children:"Weapon"}),M.jsx("div",{className:"muted",style:{marginTop:6},children:We.weapon&&We.weapon.name?We.weapon.name:"None"})]}),M.jsx("div",{style:{height:6}}),M.jsxs("details",{children:[M.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Inventory (",Array.isArray(We.inventory)?We.inventory.length:0,")"]}),M.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:(()=>{const w=Xb(We.inventory,F=>F&&F.name?String(F.name):"Item");return w.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No inventory data in this snapshot."}):w.slice(0,80).map((F,N)=>M.jsx("div",{style:{padding:"7px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{style:{fontSize:12},children:[F.name,F.count>1?` ×${F.count}`:""]})},N))})()})]}),M.jsx("div",{style:{height:6}}),M.jsxs("details",{children:[M.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Hotbar (",Array.isArray(We.attachments)?We.attachments.length:0,")"]}),M.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:Array.isArray(We.attachments)&&We.attachments.length>0?We.attachments.map((w,F)=>M.jsx("div",{style:{padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{style:{fontSize:12},children:[w&&w.slot?M.jsxs("span",{className:"muted",style:{fontSize:11},children:[String(w.slot),":"]}):null," ",w&&w.name?String(w.name):"Item"]})},F)):M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No attachments data in this snapshot."})})]}),M.jsx("div",{style:{height:8}}),M.jsxs("div",{children:[M.jsx("div",{className:"muted",style:{fontSize:12,marginBottom:6},children:"Filter events by player"}),M.jsxs("select",{className:"input",style:{width:"100%",padding:"6px 10px"},value:nt===null?"":String(nt),onChange:w=>{const F=String(w.target.value||"");if(!F){St(null);return}const N=Number(F);St(Number.isFinite(N)?N:null)},title:"Filter events by player",children:[M.jsx("option",{value:"",children:"All players"}),Pe.map(w=>M.jsxs("option",{value:String(w.playerId),children:[w.name," (#",w.playerId,")"]},w.playerId))]})]})]}):M.jsx("div",{className:"muted",style:{fontSize:12},children:"No snapshot data for this player at the current time."})]})]}):null]})}),M.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:12,display:"flex",justifyContent:"center"},children:M.jsxs("div",{className:"card",style:{width:"min(980px, 100%)",padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Replay time"}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:["+",vl(X.value-X.min)," of +",vl(X.max-X.min),we?` • ${we(X.value)}`:""]})]}),M.jsxs("div",{className:"row",style:{gap:10,alignItems:"center"},children:[M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>{g&&_(!1),Ye(w=>!w)},disabled:X.disabled,children:ft?"Pause":"Play"}),M.jsxs("select",{className:"input",style:{width:110,padding:"6px 10px"},value:String(W),onChange:w=>vt(Number(w.target.value)),disabled:X.disabled,title:"Playback speed",children:[M.jsx("option",{value:"0.25",children:"0.25×"}),M.jsx("option",{value:"0.5",children:"0.5×"}),M.jsx("option",{value:"1",children:"1×"}),M.jsx("option",{value:"2",children:"2×"}),M.jsx("option",{value:"4",children:"4×"})]}),M.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[M.jsx("input",{type:"checkbox",checked:qe,onChange:w=>ee(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Events"})]}),M.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[M.jsx("input",{type:"checkbox",checked:g,onChange:w=>{const F=w.target.checked;_(F),F&&Ye(!1)}}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Live"})]})]})]}),qe?M.jsxs("div",{style:{position:"relative",height:18,marginTop:6,marginBottom:4},children:[M.jsx("div",{style:{position:"absolute",left:0,right:0,top:8,height:2,background:"rgba(255,255,255,0.10)"}}),ce?M.jsxs("div",{style:{position:"absolute",left:`${ce.leftPct}%`,top:0,transform:"translate(-50%, -110%)",zIndex:10,pointerEvents:"none",maxWidth:320,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:"6px 8px"},children:[M.jsx("div",{style:{fontWeight:800,fontSize:12,lineHeight:1.2},children:ce.title}),M.jsx("div",{className:"muted",style:{fontSize:11,marginTop:2,lineHeight:1.2},children:ce.subtitle})]}):null,(()=>{const w=X.min,F=X.max,N=Math.max(1,F-w);return Wt.map((U,j)=>{const z=(U.tsMs-w)/N,I=Math.min(1,Math.max(0,z))*100,k=U.type==="kill"||U.type==="death"||U.type==="aiKill"?"rgba(255,74,74,0.95)":U.type==="restart"?"rgba(255,217,102,0.95)":"rgba(183,247,200,0.95)",xe=U.type==="disconnect"?"brightness(0.65) saturate(1.1)":void 0,ue=`+${vl(U.tsMs-w)}${we?` • ${we(U.tsMs)}`:""}${U.subtitle?` • ${U.subtitle}`:""}`,_e=`${U.tsMs}|${U.type}|${U.title}|${U.subtitle||""}`;return M.jsx("button",{type:"button",className:"button",style:{position:"absolute",left:`calc(${I}% - 4px)`,top:4,width:8,height:8,borderRadius:999,padding:0,border:"1px solid rgba(0,0,0,0.35)",background:k,filter:xe},onMouseEnter:()=>{Ae({tsMs:U.tsMs,type:U.type,title:U.title,subtitle:ue,leftPct:I})},onMouseLeave:()=>Ae(null),onClick:()=>{Ye(!1),_(!1),Be(U.tsMs),typeof U.focusPlayerId=="number"&&te(U.focusPlayerId),U.focusPos&&(O(U.focusPos),Q(Ee=>Ee+1)),Z("events"),$e(_e),Ae(null)}},`${U.tsMs}-${j}-${U.type}`)})})()]}):null,M.jsx("input",{style:{width:"100%"},type:"range",min:X.min,max:X.max,value:X.value,disabled:X.disabled,onChange:w=>{const F=Number(w.target.value);Number.isFinite(F)&&(g&&_(!1),ft&&Ye(!1),m(F))}})]})})]})})}):null,re?null:M.jsxs("div",{style:{padding:12,height:"calc(100vh - 72px)",boxSizing:"border-box",overflow:"auto"},children:[M.jsxs("div",{className:"card",style:{marginBottom:12},children:[M.jsx("div",{style:{fontWeight:900,letterSpacing:.2},children:"Server overview"}),M.jsx("div",{style:{marginTop:4,fontSize:13},children:"Pick a server to open the replay viewer. Times are shown in your local clock."}),a?M.jsx("div",{className:"error",style:{marginTop:10},children:a}):null]}),M.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:(s&&s.length>0?s:e.map(w=>({serverId:w.id,name:w.name,lastIngestTsMs:null,minTsMs:null,maxTsMs:null,firstReceivedAt:null,lastReceivedAt:null,storedEvents:null,totalEvents:null,retentionMs:0,mapId:null}))).map(w=>{const F=typeof w.retentionMs=="number"?w.retentionMs:0,N=typeof w.lastReceivedAt=="number"?w.lastReceivedAt:null,U=F>0&&N!==null?N-F:null,j=typeof w.firstReceivedAt=="number"?U!==null?Math.max(w.firstReceivedAt,U):w.firstReceivedAt:U;return M.jsxs("button",{className:"card",style:{textAlign:"left",cursor:"pointer",border:"none"},onClick:()=>{r(w.serverId),G([]),te(null),O(null),L([]),p({minTsMs:null,maxTsMs:null}),m(null),ge.current=null,Qe.current=0,rt([])},children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12},children:[M.jsx("div",{style:{fontWeight:900},children:w.name}),M.jsx("div",{className:"muted",style:{fontSize:12},children:w.serverId})]}),M.jsxs("div",{style:{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Events"}),M.jsx("div",{style:{fontWeight:800},children:typeof w.storedEvents=="number"?`${w.storedEvents} events`:"—"}),typeof w.totalEvents=="number"&&typeof w.storedEvents=="number"&&w.totalEvents!==w.storedEvents?M.jsxs("div",{className:"muted",style:{fontSize:12,marginTop:2},children:["All-time: ",w.totalEvents," events"]}):null]}),M.jsxs("div",{children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Retention"}),M.jsx("div",{style:{fontWeight:800},children:F>0?jb(F):"∞"})]}),M.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Buffer window"}),M.jsxs("div",{style:{fontWeight:800,fontSize:13},children:[Ju(j)," → ",Ju(N)]})]}),M.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Last ingest"}),M.jsx("div",{style:{fontWeight:800,fontSize:13},children:Ju(w.lastReceivedAt)})]})]})]},w.serverId)})}),(!s||s.length===0)&&e.length===0?M.jsx("div",{style:{marginTop:12},children:"No servers yet — add one in the Dev page, then come back here."}):null]})]})}function vg(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function Yb(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function qb(){const[t,e]=D.useState(null),[n,i]=D.useState(null);D.useEffect(()=>{let s=!1;return Jf().then(o=>{s||(e(o),i(null))}).catch(o=>{if(s)return;const a=o instanceof Error?o.message:"Failed to load replay status";i(a)}),()=>{s=!0}},[]);const r=D.useMemo(()=>{if(!t)return[];const s=t.slice();return s.sort((o,a)=>{const l=typeof o.storedEvents=="number"?o.storedEvents:-1;return(typeof a.storedEvents=="number"?a.storedEvents:-1)-l}),s.slice(0,6)},[t]);return M.jsx("div",{className:"container",children:M.jsxs("div",{className:"stack",children:[M.jsx("div",{className:"card",style:{padding:18},children:M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx("div",{className:"label",children:"Welcome"}),M.jsx("h1",{className:"h1",style:{marginTop:0},children:"ReforgedZ Admin"}),M.jsx("div",{className:"muted",children:"Use the sidebar to manage users, servers, and replay history."})]})}),M.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:[M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Replay overview"}),M.jsx("div",{className:"muted",style:{fontSize:13},children:t?`${t.length} server${t.length===1?"":"s"} detected.`:"Loading…"}),n?M.jsx("div",{className:"error",style:{marginTop:8},children:n}):null]}),r.length>0?M.jsx("div",{className:"stack",style:{gap:8},children:r.map(s=>{const o=typeof s.retentionMs=="number"?s.retentionMs:0,a=typeof s.lastReceivedAt=="number"?s.lastReceivedAt:null,l=o>0&&a!==null?a-o:null,c=typeof s.firstReceivedAt=="number"?l!==null?Math.max(s.firstReceivedAt,l):s.firstReceivedAt:l;return M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:850},children:s.name}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:[vg(c)," → ",vg(a)]})]}),M.jsxs("div",{style:{textAlign:"right"},children:[M.jsx("div",{style:{fontWeight:900},children:typeof s.storedEvents=="number"?`${s.storedEvents} events`:"—"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:o>0?Yb(o):"∞"}),typeof s.totalEvents=="number"&&typeof s.storedEvents=="number"&&s.totalEvents!==s.storedEvents?M.jsxs("div",{className:"muted",style:{fontSize:11},children:["All-time ",s.totalEvents," events"]}):null]})]},s.serverId)})}):M.jsx("div",{className:"muted",style:{fontSize:12},children:"Open Replay Tool to see a detailed per-server dashboard."})]})}),M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Replay Tool tips"}),M.jsx("div",{className:"muted",style:{fontSize:13},children:"A few quick controls that help a lot."})]}),M.jsxs("div",{className:"stack",style:{gap:6,fontSize:13},children:[M.jsxs("div",{children:[M.jsx("span",{style:{fontWeight:850},children:"Attach camera:"})," click a player in the left panel."]}),M.jsxs("div",{children:[M.jsx("span",{style:{fontWeight:850},children:"Detach:"})," press ",M.jsx("span",{style:{fontWeight:900},children:"F"}),"."]}),M.jsxs("div",{children:[M.jsx("span",{style:{fontWeight:850},children:"Event jump offset:"})," defaults to 5s before the event (configurable in Replay Tool)."]})]})]})}),M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Retention"}),M.jsx("div",{className:"muted",style:{fontSize:13},children:"Replay is a rolling buffer. Restarts are marked in the timeline."})]}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"If you clear a server’s history, replay data is removed but cached map metadata is preserved."})]})})]})]})})}function Kb(){const[t,e]=D.useState(null),[n,i]=D.useState(!1),[r,s]=D.useState([]),[o,a]=D.useState(""),[l,c]=D.useState(""),[f,d]=D.useState(!0),[h,g]=D.useState(!1),[_,y]=D.useState(!1);async function p(){i(!0),e(null);try{const m=await mM();s(m)}catch(m){e(m instanceof Error?m.message:"Failed to load users")}finally{i(!1)}}D.useEffect(()=>{p()},[]);const u=D.useMemo(()=>o.trim().length>=3&&l.length>=6,[l.length,o]);return M.jsx("div",{className:"container",children:M.jsxs("div",{className:"stack",children:[M.jsx("h1",{className:"h1",children:"Admin"}),t?M.jsx("div",{className:"error",children:t}):null,M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Create user"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Create a new account and choose which tools it can access."})]}),M.jsxs("div",{className:"row",children:[M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Username"}),M.jsx("input",{className:"input",value:o,onChange:m=>a(m.target.value),placeholder:"username"})]}),M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Password"}),M.jsx("input",{className:"input",type:"password",value:l,onChange:m=>c(m.target.value),placeholder:"password"})]})]}),M.jsxs("div",{className:"row",style:{gap:16},children:[M.jsxs("label",{className:"row",style:{gap:8},children:[M.jsx("input",{type:"checkbox",checked:f,onChange:m=>d(m.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Replay Tool"})]}),M.jsxs("label",{className:"row",style:{gap:8},children:[M.jsx("input",{type:"checkbox",checked:h,onChange:m=>g(m.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Admin"})]}),M.jsxs("label",{className:"row",style:{gap:8},children:[M.jsx("input",{type:"checkbox",checked:_,onChange:m=>y(m.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Dev"})]})]}),M.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:M.jsx("button",{className:"button buttonPrimary",disabled:!u||n,onClick:async()=>{i(!0),e(null);try{await gM({username:o.trim(),password:l,tools:{replay:f,admin:h,dev:_}}),a(""),c(""),d(!0),g(!1),y(!1),await p()}catch(m){e(m instanceof Error?m.message:"Failed to create user")}finally{i(!1)}},children:"Create user"})})]})}),M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Users"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Manage tool access and reset passwords."})]}),M.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:p,children:"Refresh"})]}),M.jsx("div",{className:"scroll",style:{maxHeight:420,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No users found."}):r.map(m=>{var v,S,P,C,b,G;return M.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center"},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:800},children:m.username}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:["tools: ",(v=m.tools)!=null&&v.replay?"replay ":"",(S=m.tools)!=null&&S.admin?"admin ":"",(P=m.tools)!=null&&P.dev?"dev ":""]})]}),M.jsxs("div",{className:"row",style:{gap:8},children:[M.jsxs("button",{className:"button",onClick:async()=>{var ie,x,R;i(!0),e(null);try{await pu(m.username,{replay:!((ie=m.tools)!=null&&ie.replay),admin:!!((x=m.tools)!=null&&x.admin),dev:!!((R=m.tools)!=null&&R.dev)}),await p()}catch(te){e(te instanceof Error?te.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle replay tool access",children:["Replay: ",(C=m.tools)!=null&&C.replay?"On":"Off"]}),M.jsxs("button",{className:"button",onClick:async()=>{var ie,x,R;i(!0),e(null);try{await pu(m.username,{replay:!!((ie=m.tools)!=null&&ie.replay),admin:!((x=m.tools)!=null&&x.admin),dev:!!((R=m.tools)!=null&&R.dev)}),await p()}catch(te){e(te instanceof Error?te.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle admin access",children:["Admin: ",(b=m.tools)!=null&&b.admin?"On":"Off"]}),M.jsxs("button",{className:"button",onClick:async()=>{var ie,x,R;i(!0),e(null);try{await pu(m.username,{replay:!!((ie=m.tools)!=null&&ie.replay),admin:!!((x=m.tools)!=null&&x.admin),dev:!((R=m.tools)!=null&&R.dev)}),await p()}catch(te){e(te instanceof Error?te.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle dev access",children:["Dev: ",(G=m.tools)!=null&&G.dev?"On":"Off"]}),M.jsx("button",{className:"button",style:{borderColor:"rgba(255, 180, 180, 0.35)"},disabled:n,onClick:async()=>{if(confirm(`Delete user '${m.username}'?`)){i(!0),e(null);try{await vM(m.username),await p()}catch(ie){e(ie instanceof Error?ie.message:"Failed to delete user")}finally{i(!1)}}},children:"Delete"})]})]})},m.username)})})]})})]})})}function Zb(){const[t,e]=D.useState(null),[n,i]=D.useState(!1),[r,s]=D.useState([]),[o,a]=D.useState(""),[l,c]=D.useState(""),[f,d]=D.useState(!1),[h,g]=D.useState(""),[_,y]=D.useState(""),[p,u]=D.useState("");async function m(){i(!0),e(null);try{const v=await _M();s(v);const S=await MM();d(!!S.isSet),a(S.masked||"")}catch(v){e(v instanceof Error?v.message:"Failed to load dev servers")}finally{i(!1)}}return D.useEffect(()=>{m()},[]),M.jsx("div",{className:"container",children:M.jsxs("div",{className:"stack",children:[M.jsx("h1",{className:"h1",children:"Dev"}),t?M.jsx("div",{className:"error",children:t}):null,M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Discord webhook (global)"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Used by “Export event to Discord”. One webhook URL is shared for all servers."})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Current"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:f?o||"set":"not set"})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Webhook URL"}),M.jsx("input",{className:"input",type:"password",value:l,onChange:v=>c(v.target.value),placeholder:"https://discord.com/api/webhooks/..."}),M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Leave blank and click Save to clear."})]}),M.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:M.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:async()=>{i(!0),e(null);try{await EM(l.trim()),c(""),await m()}catch(v){e(v instanceof Error?v.message:"Failed to save webhook")}finally{i(!1)}},children:"Save webhook"})}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Add server"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Adds a new ingest key so the backend will accept replay uploads for that server."})]}),M.jsxs("div",{className:"row",children:[M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Server ID"}),M.jsx("input",{className:"input",value:h,onChange:v=>g(v.target.value),placeholder:"reforgedz-dev-eu-1"})]}),M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Server name (optional)"}),M.jsx("input",{className:"input",value:p,onChange:v=>u(v.target.value),placeholder:"EU #1"})]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Server key / secret"}),M.jsx("input",{className:"input",value:_,onChange:v=>y(v.target.value),placeholder:"secret"}),M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"This must match what the Reforger exporter sends as serverKey."})]}),M.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:M.jsx("button",{className:"button buttonPrimary",disabled:n||h.trim().length===0||_.trim().length<6,onClick:async()=>{i(!0),e(null);try{await yM({serverId:h.trim(),serverKey:_.trim(),name:p.trim()||void 0}),g(""),y(""),u(""),await m()}catch(v){e(v instanceof Error?v.message:"Failed to add server")}finally{i(!1)}},children:"Add server"})})]})}),M.jsxs("div",{className:"card",children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Servers"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Clear history deletes stored replay history for that server (events + snapshots). Cached map data is kept."})]}),M.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:m,children:"Refresh"})]}),M.jsx("div",{style:{height:10}}),M.jsx("div",{className:"scroll",style:{maxHeight:520,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No servers configured."}):r.map(v=>M.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:800},children:v.name||v.id}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:["id: ",v.id,v.keyHint?` • key: ${v.keyHint}`:""]})]}),M.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Clear history for '${v.id}'? This deletes stored replay data.`)){i(!0),e(null);try{await xM(v.id),await m()}catch(S){e(S instanceof Error?S.message:"Failed to clear history")}finally{i(!1)}}},children:"Clear history"}),M.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Regenerate terrain data for '${v.id}'? This queues a command for the exporter to re-send map terrain.`)){i(!0),e(null);try{await SM(v.id),await m()}catch(S){e(S instanceof Error?S.message:"Failed to regenerate terrain")}finally{i(!1)}}},children:"Regenerate terrain data"})]})},v.id))})]})]})})}function _l(t){return M.jsx(rM,{to:t.to,className:({isActive:e})=>`navItem${e?" navItemActive":""}`,children:t.label})}function Qb(){const t=Lc();function e(){cM(),t("/login",{replace:!0})}return M.jsxs("div",{className:"appShell",children:[M.jsxs("aside",{className:"sidebar",children:[M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"ReforgedZ"}),M.jsx("div",{className:"h2",children:"Admin Panel"})]}),M.jsx("div",{style:{height:8}}),M.jsx("div",{className:"label",children:"Tools"}),M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx(_l,{to:"/",label:"Home"}),fu("replay")?M.jsx(_l,{to:"/replay",label:"Replay Tool"}):null,fu("admin")?M.jsx(_l,{to:"/admin",label:"Admin"}):null,fu("dev")?M.jsx(_l,{to:"/dev",label:"Dev"}):null]})]}),M.jsx("div",{style:{flex:1}}),M.jsx("button",{className:"button buttonPrimary",onClick:e,children:"Log out"})]}),M.jsx("main",{className:"main",children:M.jsx(WS,{})})]})}function Jb(t){const e=Yi();return qt()?M.jsx(M.Fragment,{children:t.children}):M.jsx(B0,{to:"/login",replace:!0,state:{from:e.pathname}})}function eC(){return M.jsxs(XS,{children:[M.jsx(ir,{path:"/login",element:M.jsx(TM,{})}),M.jsxs(ir,{element:M.jsx(Jb,{children:M.jsx(Qb,{})}),children:[M.jsx(ir,{path:"/",element:M.jsx(qb,{})}),M.jsx(ir,{path:"/replay",element:M.jsx($b,{})}),M.jsx(ir,{path:"/admin",element:M.jsx(Kb,{})}),M.jsx(ir,{path:"/dev",element:M.jsx(Zb,{})})]}),M.jsx(ir,{path:"*",element:M.jsx(B0,{to:"/",replace:!0})})]})}tf.createRoot(document.getElementById("root")).render(M.jsx(Cg.StrictMode,{children:M.jsx(eM,{children:M.jsx(eC,{})})}));
