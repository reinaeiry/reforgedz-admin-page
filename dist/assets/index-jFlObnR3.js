function X0(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Y0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fg={exports:{}},Tc={},kg={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),q0=Symbol.for("react.portal"),K0=Symbol.for("react.fragment"),Z0=Symbol.for("react.strict_mode"),Q0=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),e_=Symbol.for("react.context"),t_=Symbol.for("react.forward_ref"),n_=Symbol.for("react.suspense"),i_=Symbol.for("react.memo"),r_=Symbol.for("react.lazy"),Ph=Symbol.iterator;function s_(t){return t===null||typeof t!="object"?null:(t=Ph&&t[Ph]||t["@@iterator"],typeof t=="function"?t:null)}var Og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zg=Object.assign,Bg={};function Ea(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||Og}Ea.prototype.isReactComponent={};Ea.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ea.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hg(){}Hg.prototype=Ea.prototype;function wf(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||Og}var Tf=wf.prototype=new Hg;Tf.constructor=wf;zg(Tf,Ea.prototype);Tf.isPureReactComponent=!0;var Nh=Array.isArray,jg=Object.prototype.hasOwnProperty,bf={current:null},Gg={key:!0,ref:!0,__self:!0,__source:!0};function Vg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)jg.call(e,i)&&!Gg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Po,type:t,key:s,ref:a,props:r,_owner:bf.current}}function a_(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Af(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function o_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lh=/\/+/g;function Kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?o_(""+t.key):e.toString(36)}function Nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Po:case q0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Kc(a,0):i,Nh(r)?(n="",t!=null&&(n=t.replace(Lh,"$&/")+"/"),Nl(r,e,n,"",function(c){return c})):r!=null&&(Af(r)&&(r=a_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Lh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Nh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Kc(s,o);a+=Nl(s,e,n,l,r)}else if(l=s_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Kc(s,o++),a+=Nl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Oo(t,e,n){if(t==null)return t;var i=[],r=0;return Nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function l_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var On={current:null},Ll={transition:null},c_={ReactCurrentDispatcher:On,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:bf};function Wg(){throw Error("act(...) is not supported in production builds of React.")}Mt.Children={map:Oo,forEach:function(t,e,n){Oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oo(t,function(){e++}),e},toArray:function(t){return Oo(t,function(e){return e})||[]},only:function(t){if(!Af(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Mt.Component=Ea;Mt.Fragment=K0;Mt.Profiler=Q0;Mt.PureComponent=wf;Mt.StrictMode=Z0;Mt.Suspense=n_;Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c_;Mt.act=Wg;Mt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=zg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=bf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)jg.call(e,l)&&!Gg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Po,type:t.type,key:r,ref:s,props:i,_owner:a}};Mt.createContext=function(t){return t={$$typeof:e_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:J0,_context:t},t.Consumer=t};Mt.createElement=Vg;Mt.createFactory=function(t){var e=Vg.bind(null,t);return e.type=t,e};Mt.createRef=function(){return{current:null}};Mt.forwardRef=function(t){return{$$typeof:t_,render:t}};Mt.isValidElement=Af;Mt.lazy=function(t){return{$$typeof:r_,_payload:{_status:-1,_result:t},_init:l_}};Mt.memo=function(t,e){return{$$typeof:i_,type:t,compare:e===void 0?null:e}};Mt.startTransition=function(t){var e=Ll.transition;Ll.transition={};try{t()}finally{Ll.transition=e}};Mt.unstable_act=Wg;Mt.useCallback=function(t,e){return On.current.useCallback(t,e)};Mt.useContext=function(t){return On.current.useContext(t)};Mt.useDebugValue=function(){};Mt.useDeferredValue=function(t){return On.current.useDeferredValue(t)};Mt.useEffect=function(t,e){return On.current.useEffect(t,e)};Mt.useId=function(){return On.current.useId()};Mt.useImperativeHandle=function(t,e,n){return On.current.useImperativeHandle(t,e,n)};Mt.useInsertionEffect=function(t,e){return On.current.useInsertionEffect(t,e)};Mt.useLayoutEffect=function(t,e){return On.current.useLayoutEffect(t,e)};Mt.useMemo=function(t,e){return On.current.useMemo(t,e)};Mt.useReducer=function(t,e,n){return On.current.useReducer(t,e,n)};Mt.useRef=function(t){return On.current.useRef(t)};Mt.useState=function(t){return On.current.useState(t)};Mt.useSyncExternalStore=function(t,e,n){return On.current.useSyncExternalStore(t,e,n)};Mt.useTransition=function(){return On.current.useTransition()};Mt.version="18.3.1";kg.exports=Mt;var R=kg.exports;const $g=Y0(R),u_=X0({__proto__:null,default:$g},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_=R,f_=Symbol.for("react.element"),h_=Symbol.for("react.fragment"),p_=Object.prototype.hasOwnProperty,m_=d_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g_={key:!0,ref:!0,__self:!0,__source:!0};function Xg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)p_.call(e,i)&&!g_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:f_,type:t,key:s,ref:a,props:r,_owner:m_.current}}Tc.Fragment=h_;Tc.jsx=Xg;Tc.jsxs=Xg;Fg.exports=Tc;var p=Fg.exports,fd={},Yg={exports:{}},ei={},qg={exports:{}},Kg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,Y){var Z=H.length;H.push(Y);e:for(;0<Z;){var ae=Z-1>>>1,pe=H[ae];if(0<r(pe,Y))H[ae]=Y,H[Z]=pe,Z=ae;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var Y=H[0],Z=H.pop();if(Z!==Y){H[0]=Z;e:for(var ae=0,pe=H.length,Ze=pe>>>1;ae<Ze;){var J=2*(ae+1)-1,ue=H[J],be=J+1,Fe=H[be];if(0>r(ue,Z))be<pe&&0>r(Fe,ue)?(H[ae]=Fe,H[be]=Z,ae=be):(H[ae]=ue,H[J]=Z,ae=J);else if(be<pe&&0>r(Fe,Z))H[ae]=Fe,H[be]=Z,ae=be;else break e}}return Y}function r(H,Y){var Z=H.sortIndex-Y.sortIndex;return Z!==0?Z:H.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,v=!1,x=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(H){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=H)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S(H){if(_=!1,y(H),!x)if(n(l)!==null)x=!0,Q(w);else{var Y=n(c);Y!==null&&le(S,Y.startTime-H)}}function w(H,Y){x=!1,_&&(_=!1,u(j),j=-1),v=!0;var Z=h;try{for(y(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||H&&!I());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,h=f.priorityLevel;var pe=ae(f.expirationTime<=Y);Y=t.unstable_now(),typeof pe=="function"?f.callback=pe:f===n(l)&&i(l),y(Y)}else i(l);f=n(l)}if(f!==null)var Ze=!0;else{var J=n(c);J!==null&&le(S,J.startTime-Y),Ze=!1}return Ze}finally{f=null,h=Z,v=!1}}var C=!1,N=null,j=-1,ne=5,E=-1;function I(){return!(t.unstable_now()-E<ne)}function te(){if(N!==null){var H=t.unstable_now();E=H;var Y=!0;try{Y=N(!0,H)}finally{Y?oe():(C=!1,N=null)}}else C=!1}var oe;if(typeof g=="function")oe=function(){g(te)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,ee=z.port2;z.port1.onmessage=te,oe=function(){ee.postMessage(null)}}else oe=function(){m(te,0)};function Q(H){N=H,C||(C=!0,oe())}function le(H,Y){j=m(function(){H(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){x||v||(x=!0,Q(w))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var Z=h;h=Y;try{return H()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,Y){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=h;h=H;try{return Y()}finally{h=Z}},t.unstable_scheduleCallback=function(H,Y,Z){var ae=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ae+Z:ae):Z=ae,H){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=Z+pe,H={id:d++,callback:Y,priorityLevel:H,startTime:Z,expirationTime:pe,sortIndex:-1},Z>ae?(H.sortIndex=Z,e(c,H),n(l)===null&&H===n(c)&&(_?(u(j),j=-1):_=!0,le(S,Z-ae))):(H.sortIndex=pe,e(l,H),x||v||(x=!0,Q(w))),H},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(H){var Y=h;return function(){var Z=h;h=Y;try{return H.apply(this,arguments)}finally{h=Z}}}})(Kg);qg.exports=Kg;var v_=qg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_=R,Jn=v_;function _e(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zg=new Set,co={};function gs(t,e){ua(t,e),ua(t+"Capture",e)}function ua(t,e){for(co[t]=e,t=0;t<e.length;t++)Zg.add(e[t])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hd=Object.prototype.hasOwnProperty,__=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ih={},Dh={};function x_(t){return hd.call(Dh,t)?!0:hd.call(Ih,t)?!1:__.test(t)?Dh[t]=!0:(Ih[t]=!0,!1)}function S_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M_(t,e,n,i){if(e===null||typeof e>"u"||S_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function zn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tn[t]=new zn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tn[e]=new zn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tn[t]=new zn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tn[t]=new zn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tn[t]=new zn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tn[t]=new zn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tn[t]=new zn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tn[t]=new zn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tn[t]=new zn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function Rf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cf,Rf);Tn[e]=new zn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cf,Rf);Tn[e]=new zn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cf,Rf);Tn[e]=new zn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tn[t]=new zn(t,1,!1,t.toLowerCase(),null,!1,!1)});Tn.xlinkHref=new zn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tn[t]=new zn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pf(t,e,n,i){var r=Tn.hasOwnProperty(e)?Tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(M_(e,n,r,i)&&(n=null),i||r===null?x_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=y_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),js=Symbol.for("react.portal"),Gs=Symbol.for("react.fragment"),Nf=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),Qg=Symbol.for("react.provider"),Jg=Symbol.for("react.context"),Lf=Symbol.for("react.forward_ref"),md=Symbol.for("react.suspense"),gd=Symbol.for("react.suspense_list"),If=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),ev=Symbol.for("react.offscreen"),Uh=Symbol.iterator;function La(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var Kt=Object.assign,Zc;function qa(t){if(Zc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zc=e&&e[1]||""}return`
`+Zc+t}var Qc=!1;function Jc(t,e){if(!t||Qc)return"";Qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Qc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qa(t):""}function E_(t){switch(t.tag){case 5:return qa(t.type);case 16:return qa("Lazy");case 13:return qa("Suspense");case 19:return qa("SuspenseList");case 0:case 2:case 15:return t=Jc(t.type,!1),t;case 11:return t=Jc(t.type.render,!1),t;case 1:return t=Jc(t.type,!0),t;default:return""}}function vd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gs:return"Fragment";case js:return"Portal";case pd:return"Profiler";case Nf:return"StrictMode";case md:return"Suspense";case gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jg:return(t.displayName||"Context")+".Consumer";case Qg:return(t._context.displayName||"Context")+".Provider";case Lf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case If:return e=t.displayName||null,e!==null?e:vd(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return vd(t(e))}catch{}}return null}function w_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vd(e);case 8:return e===Nf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function T_(t){var e=tv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bo(t){t._valueTracker||(t._valueTracker=T_(t))}function nv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=tv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yd(t,e){var n=e.checked;return Kt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iv(t,e){e=e.checked,e!=null&&Pf(t,"checked",e,!1)}function _d(t,e){iv(t,e);var n=Dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&xd(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xd(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ka=Array.isArray;function na(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Sd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_e(91));return Kt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Oh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_e(92));if(Ka(n)){if(1<n.length)throw Error(_e(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function rv(t,e){var n=Dr(e.value),i=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Md(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ho,av=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ho.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b_=["Webkit","ms","Moz","O"];Object.keys(Ja).forEach(function(t){b_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ja[e]=Ja[t]})});function ov(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ja.hasOwnProperty(t)&&Ja[t]?(""+e).trim():e+"px"}function lv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ov(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var A_=Kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ed(t,e){if(e){if(A_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_e(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_e(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_e(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_e(62))}}function wd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Td=null;function Df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bd=null,ia=null,ra=null;function Bh(t){if(t=Io(t)){if(typeof bd!="function")throw Error(_e(280));var e=t.stateNode;e&&(e=Pc(e),bd(t.stateNode,t.type,e))}}function cv(t){ia?ra?ra.push(t):ra=[t]:ia=t}function uv(){if(ia){var t=ia,e=ra;if(ra=ia=null,Bh(t),e)for(t=0;t<e.length;t++)Bh(e[t])}}function dv(t,e){return t(e)}function fv(){}var eu=!1;function hv(t,e,n){if(eu)return t(e,n);eu=!0;try{return dv(t,e,n)}finally{eu=!1,(ia!==null||ra!==null)&&(fv(),uv())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var i=Pc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_e(231,e,typeof n));return n}var Ad=!1;if(Zi)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{Ad=!1}function C_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var eo=!1,$l=null,Xl=!1,Cd=null,R_={onError:function(t){eo=!0,$l=t}};function P_(t,e,n,i,r,s,a,o,l){eo=!1,$l=null,C_.apply(R_,arguments)}function N_(t,e,n,i,r,s,a,o,l){if(P_.apply(this,arguments),eo){if(eo){var c=$l;eo=!1,$l=null}else throw Error(_e(198));Xl||(Xl=!0,Cd=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hh(t){if(vs(t)!==t)throw Error(_e(188))}function L_(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(_e(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Hh(r),t;if(s===i)return Hh(r),e;s=s.sibling}throw Error(_e(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(_e(189))}}if(n.alternate!==i)throw Error(_e(190))}if(n.tag!==3)throw Error(_e(188));return n.stateNode.current===n?t:e}function mv(t){return t=L_(t),t!==null?gv(t):null}function gv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gv(t);if(e!==null)return e;t=t.sibling}return null}var vv=Jn.unstable_scheduleCallback,jh=Jn.unstable_cancelCallback,I_=Jn.unstable_shouldYield,D_=Jn.unstable_requestPaint,tn=Jn.unstable_now,U_=Jn.unstable_getCurrentPriorityLevel,Uf=Jn.unstable_ImmediatePriority,yv=Jn.unstable_UserBlockingPriority,Yl=Jn.unstable_NormalPriority,F_=Jn.unstable_LowPriority,_v=Jn.unstable_IdlePriority,bc=null,Ui=null;function k_(t){if(Ui&&typeof Ui.onCommitFiberRoot=="function")try{Ui.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var bi=Math.clz32?Math.clz32:B_,O_=Math.log,z_=Math.LN2;function B_(t){return t>>>=0,t===0?32:31-(O_(t)/z_|0)|0}var jo=64,Go=4194304;function Za(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Za(o):(s&=a,s!==0&&(i=Za(s)))}else a=n&~r,a!==0?i=Za(a):s!==0&&(i=Za(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-bi(e),r=1<<n,i|=t[n],e&=~r;return i}function H_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-bi(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=H_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xv(){var t=jo;return jo<<=1,!(jo&4194240)&&(jo=64),t}function tu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function No(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bi(e),t[e]=n}function G_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-bi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ff(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-bi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ft=0;function Sv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mv,kf,Ev,wv,Tv,Pd=!1,Vo=[],Sr=null,Mr=null,Er=null,ho=new Map,po=new Map,mr=[],V_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gh(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Da(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Io(e),e!==null&&kf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function W_(t,e,n,i,r){switch(e){case"focusin":return Sr=Da(Sr,t,e,n,i,r),!0;case"dragenter":return Mr=Da(Mr,t,e,n,i,r),!0;case"mouseover":return Er=Da(Er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ho.set(s,Da(ho.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,po.set(s,Da(po.get(s)||null,t,e,n,i,r)),!0}return!1}function bv(t){var e=Jr(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=pv(n),e!==null){t.blockedOn=e,Tv(t.priority,function(){Ev(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Td=i,n.target.dispatchEvent(i),Td=null}else return e=Io(n),e!==null&&kf(e),t.blockedOn=n,!1;e.shift()}return!0}function Vh(t,e,n){Il(t)&&n.delete(e)}function $_(){Pd=!1,Sr!==null&&Il(Sr)&&(Sr=null),Mr!==null&&Il(Mr)&&(Mr=null),Er!==null&&Il(Er)&&(Er=null),ho.forEach(Vh),po.forEach(Vh)}function Ua(t,e){t.blockedOn===e&&(t.blockedOn=null,Pd||(Pd=!0,Jn.unstable_scheduleCallback(Jn.unstable_NormalPriority,$_)))}function mo(t){function e(r){return Ua(r,t)}if(0<Vo.length){Ua(Vo[0],t);for(var n=1;n<Vo.length;n++){var i=Vo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Sr!==null&&Ua(Sr,t),Mr!==null&&Ua(Mr,t),Er!==null&&Ua(Er,t),ho.forEach(e),po.forEach(e),n=0;n<mr.length;n++)i=mr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)bv(n),n.blockedOn===null&&mr.shift()}var sa=nr.ReactCurrentBatchConfig,Kl=!0;function X_(t,e,n,i){var r=Ft,s=sa.transition;sa.transition=null;try{Ft=1,Of(t,e,n,i)}finally{Ft=r,sa.transition=s}}function Y_(t,e,n,i){var r=Ft,s=sa.transition;sa.transition=null;try{Ft=4,Of(t,e,n,i)}finally{Ft=r,sa.transition=s}}function Of(t,e,n,i){if(Kl){var r=Nd(t,e,n,i);if(r===null)du(t,e,i,Zl,n),Gh(t,i);else if(W_(r,t,e,n,i))i.stopPropagation();else if(Gh(t,i),e&4&&-1<V_.indexOf(t)){for(;r!==null;){var s=Io(r);if(s!==null&&Mv(s),s=Nd(t,e,n,i),s===null&&du(t,e,i,Zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else du(t,e,i,null,n)}}var Zl=null;function Nd(t,e,n,i){if(Zl=null,t=Df(i),t=Jr(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function Av(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U_()){case Uf:return 1;case yv:return 4;case Yl:case F_:return 16;case _v:return 536870912;default:return 16}default:return 16}}var vr=null,zf=null,Dl=null;function Cv(){if(Dl)return Dl;var t,e=zf,n=e.length,i,r="value"in vr?vr.value:vr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Dl=r.slice(t,1<i?1-i:void 0)}function Ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function Wh(){return!1}function ti(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wo:Wh,this.isPropagationStopped=Wh,this}return Kt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),e}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bf=ti(wa),Lo=Kt({},wa,{view:0,detail:0}),q_=ti(Lo),nu,iu,Fa,Ac=Kt({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fa&&(Fa&&t.type==="mousemove"?(nu=t.screenX-Fa.screenX,iu=t.screenY-Fa.screenY):iu=nu=0,Fa=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:iu}}),$h=ti(Ac),K_=Kt({},Ac,{dataTransfer:0}),Z_=ti(K_),Q_=Kt({},Lo,{relatedTarget:0}),ru=ti(Q_),J_=Kt({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),ex=ti(J_),tx=Kt({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nx=ti(tx),ix=Kt({},wa,{data:0}),Xh=ti(ix),rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ax[t])?!!e[t]:!1}function Hf(){return ox}var lx=Kt({},Lo,{key:function(t){if(t.key){var e=rx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cx=ti(lx),ux=Kt({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=ti(ux),dx=Kt({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),fx=ti(dx),hx=Kt({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=ti(hx),mx=Kt({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gx=ti(mx),vx=[9,13,27,32],jf=Zi&&"CompositionEvent"in window,to=null;Zi&&"documentMode"in document&&(to=document.documentMode);var yx=Zi&&"TextEvent"in window&&!to,Rv=Zi&&(!jf||to&&8<to&&11>=to),qh=" ",Kh=!1;function Pv(t,e){switch(t){case"keyup":return vx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function _x(t,e){switch(t){case"compositionend":return Nv(e);case"keypress":return e.which!==32?null:(Kh=!0,qh);case"textInput":return t=e.data,t===qh&&Kh?null:t;default:return null}}function xx(t,e){if(Vs)return t==="compositionend"||!jf&&Pv(t,e)?(t=Cv(),Dl=zf=vr=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rv&&e.locale!=="ko"?null:e.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Sx[t.type]:e==="textarea"}function Lv(t,e,n,i){cv(i),e=Ql(e,"onChange"),0<e.length&&(n=new Bf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var no=null,go=null;function Mx(t){Gv(t,0)}function Cc(t){var e=Xs(t);if(nv(e))return t}function Ex(t,e){if(t==="change")return e}var Iv=!1;if(Zi){var su;if(Zi){var au="oninput"in document;if(!au){var Qh=document.createElement("div");Qh.setAttribute("oninput","return;"),au=typeof Qh.oninput=="function"}su=au}else su=!1;Iv=su&&(!document.documentMode||9<document.documentMode)}function Jh(){no&&(no.detachEvent("onpropertychange",Dv),go=no=null)}function Dv(t){if(t.propertyName==="value"&&Cc(go)){var e=[];Lv(e,go,t,Df(t)),hv(Mx,e)}}function wx(t,e,n){t==="focusin"?(Jh(),no=e,go=n,no.attachEvent("onpropertychange",Dv)):t==="focusout"&&Jh()}function Tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc(go)}function bx(t,e){if(t==="click")return Cc(e)}function Ax(t,e){if(t==="input"||t==="change")return Cc(e)}function Cx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ci=typeof Object.is=="function"?Object.is:Cx;function vo(t,e){if(Ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hd.call(e,r)||!Ci(t[r],e[r]))return!1}return!0}function ep(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tp(t,e){var n=ep(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ep(n)}}function Uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fv(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rx(t){var e=Fv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Uv(n.ownerDocument.documentElement,n)){if(i!==null&&Gf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=tp(n,s);var a=tp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Px=Zi&&"documentMode"in document&&11>=document.documentMode,Ws=null,Ld=null,io=null,Id=!1;function np(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Id||Ws==null||Ws!==Wl(i)||(i=Ws,"selectionStart"in i&&Gf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),io&&vo(io,i)||(io=i,i=Ql(Ld,"onSelect"),0<i.length&&(e=new Bf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ws)))}function $o(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},ou={},kv={};Zi&&(kv=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Rc(t){if(ou[t])return ou[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kv)return ou[t]=e[n];return t}var Ov=Rc("animationend"),zv=Rc("animationiteration"),Bv=Rc("animationstart"),Hv=Rc("transitionend"),jv=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){jv.set(t,e),gs(e,[t])}for(var lu=0;lu<ip.length;lu++){var cu=ip[lu],Nx=cu.toLowerCase(),Lx=cu[0].toUpperCase()+cu.slice(1);Or(Nx,"on"+Lx)}Or(Ov,"onAnimationEnd");Or(zv,"onAnimationIteration");Or(Bv,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(Hv,"onTransitionEnd");ua("onMouseEnter",["mouseout","mouseover"]);ua("onMouseLeave",["mouseout","mouseover"]);ua("onPointerEnter",["pointerout","pointerover"]);ua("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function rp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N_(i,e,void 0,t),t.currentTarget=null}function Gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;rp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;rp(r,o,c),s=l}}}if(Xl)throw t=Cd,Xl=!1,Cd=null,t}function jt(t,e){var n=e[Od];n===void 0&&(n=e[Od]=new Set);var i=t+"__bubble";n.has(i)||(Vv(e,t,2,!1),n.add(i))}function uu(t,e,n){var i=0;e&&(i|=4),Vv(n,t,i,e)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Xo]){t[Xo]=!0,Zg.forEach(function(n){n!=="selectionchange"&&(Ix.has(n)||uu(n,!1,t),uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xo]||(e[Xo]=!0,uu("selectionchange",!1,e))}}function Vv(t,e,n,i){switch(Av(e)){case 1:var r=X_;break;case 4:r=Y_;break;default:r=Of}n=r.bind(null,e,n,t),r=void 0,!Ad||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function du(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}hv(function(){var c=s,d=Df(n),f=[];e:{var h=jv.get(t);if(h!==void 0){var v=Bf,x=t;switch(t){case"keypress":if(Ul(n)===0)break e;case"keydown":case"keyup":v=cx;break;case"focusin":x="focus",v=ru;break;case"focusout":x="blur",v=ru;break;case"beforeblur":case"afterblur":v=ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=$h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Z_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=fx;break;case Ov:case zv:case Bv:v=ex;break;case Hv:v=px;break;case"scroll":v=q_;break;case"wheel":v=gx;break;case"copy":case"cut":case"paste":v=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Yh}var _=(e&4)!==0,m=!_&&t==="scroll",u=_?h!==null?h+"Capture":null:h;_=[];for(var g=c,y;g!==null;){y=g;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,u!==null&&(S=fo(g,u),S!=null&&_.push(_o(g,S,y)))),m)break;g=g.return}0<_.length&&(h=new v(h,x,null,n,d),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==Td&&(x=n.relatedTarget||n.fromElement)&&(Jr(x)||x[Qi]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=c,x=x?Jr(x):null,x!==null&&(m=vs(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(_=$h,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=Yh,S="onPointerLeave",u="onPointerEnter",g="pointer"),m=v==null?h:Xs(v),y=x==null?h:Xs(x),h=new _(S,g+"leave",v,n,d),h.target=m,h.relatedTarget=y,S=null,Jr(d)===c&&(_=new _(u,g+"enter",x,n,d),_.target=y,_.relatedTarget=m,S=_),m=S,v&&x)t:{for(_=v,u=x,g=0,y=_;y;y=xs(y))g++;for(y=0,S=u;S;S=xs(S))y++;for(;0<g-y;)_=xs(_),g--;for(;0<y-g;)u=xs(u),y--;for(;g--;){if(_===u||u!==null&&_===u.alternate)break t;_=xs(_),u=xs(u)}_=null}else _=null;v!==null&&sp(f,h,v,_,!1),x!==null&&m!==null&&sp(f,m,x,_,!0)}}e:{if(h=c?Xs(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var w=Ex;else if(Zh(h))if(Iv)w=Ax;else{w=Tx;var C=wx}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=bx);if(w&&(w=w(t,c))){Lv(f,w,n,d);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&xd(h,"number",h.value)}switch(C=c?Xs(c):window,t){case"focusin":(Zh(C)||C.contentEditable==="true")&&(Ws=C,Ld=c,io=null);break;case"focusout":io=Ld=Ws=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,np(f,n,d);break;case"selectionchange":if(Px)break;case"keydown":case"keyup":np(f,n,d)}var N;if(jf)e:{switch(t){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Vs?Pv(t,n)&&(j="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Rv&&n.locale!=="ko"&&(Vs||j!=="onCompositionStart"?j==="onCompositionEnd"&&Vs&&(N=Cv()):(vr=d,zf="value"in vr?vr.value:vr.textContent,Vs=!0)),C=Ql(c,j),0<C.length&&(j=new Xh(j,t,null,n,d),f.push({event:j,listeners:C}),N?j.data=N:(N=Nv(n),N!==null&&(j.data=N)))),(N=yx?_x(t,n):xx(t,n))&&(c=Ql(c,"onBeforeInput"),0<c.length&&(d=new Xh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=N))}Gv(f,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fo(t,n),s!=null&&i.unshift(_o(t,s,r)),s=fo(t,e),s!=null&&i.push(_o(t,s,r))),t=t.return}return i}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=fo(n,s),l!=null&&a.unshift(_o(n,l,o))):r||(l=fo(n,s),l!=null&&a.push(_o(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Dx=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function ap(t){return(typeof t=="string"?t:""+t).replace(Dx,`
`).replace(Ux,"")}function Yo(t,e,n){if(e=ap(e),ap(t)!==e&&n)throw Error(_e(425))}function Jl(){}var Dd=null,Ud=null;function Fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kd=typeof setTimeout=="function"?setTimeout:void 0,Fx=typeof clearTimeout=="function"?clearTimeout:void 0,op=typeof Promise=="function"?Promise:void 0,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof op<"u"?function(t){return op.resolve(null).then(t).catch(Ox)}:kd;function Ox(t){setTimeout(function(){throw t})}function fu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),mo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);mo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ta=Math.random().toString(36).slice(2),Ii="__reactFiber$"+Ta,xo="__reactProps$"+Ta,Qi="__reactContainer$"+Ta,Od="__reactEvents$"+Ta,zx="__reactListeners$"+Ta,Bx="__reactHandles$"+Ta;function Jr(t){var e=t[Ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[Ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lp(t);t!==null;){if(n=t[Ii])return n;t=lp(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[Ii]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_e(33))}function Pc(t){return t[xo]||null}var zd=[],Ys=-1;function zr(t){return{current:t}}function Vt(t){0>Ys||(t.current=zd[Ys],zd[Ys]=null,Ys--)}function Bt(t,e){Ys++,zd[Ys]=t.current,t.current=e}var Ur={},Nn=zr(Ur),Vn=zr(!1),cs=Ur;function da(t,e){var n=t.type.contextTypes;if(!n)return Ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Wn(t){return t=t.childContextTypes,t!=null}function ec(){Vt(Vn),Vt(Nn)}function cp(t,e,n){if(Nn.current!==Ur)throw Error(_e(168));Bt(Nn,e),Bt(Vn,n)}function Wv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(_e(108,w_(t)||"Unknown",r));return Kt({},n,i)}function tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,cs=Nn.current,Bt(Nn,t),Bt(Vn,Vn.current),!0}function up(t,e,n){var i=t.stateNode;if(!i)throw Error(_e(169));n?(t=Wv(t,e,cs),i.__reactInternalMemoizedMergedChildContext=t,Vt(Vn),Vt(Nn),Bt(Nn,t)):Vt(Vn),Bt(Vn,n)}var Wi=null,Nc=!1,hu=!1;function $v(t){Wi===null?Wi=[t]:Wi.push(t)}function Hx(t){Nc=!0,$v(t)}function Br(){if(!hu&&Wi!==null){hu=!0;var t=0,e=Ft;try{var n=Wi;for(Ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Wi=null,Nc=!1}catch(r){throw Wi!==null&&(Wi=Wi.slice(t+1)),vv(Uf,Br),r}finally{Ft=e,hu=!1}}return null}var qs=[],Ks=0,nc=null,ic=0,ri=[],si=0,us=null,Xi=1,Yi="";function Xr(t,e){qs[Ks++]=ic,qs[Ks++]=nc,nc=t,ic=e}function Xv(t,e,n){ri[si++]=Xi,ri[si++]=Yi,ri[si++]=us,us=t;var i=Xi;t=Yi;var r=32-bi(i)-1;i&=~(1<<r),n+=1;var s=32-bi(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Xi=1<<32-bi(e)+r|n<<r|i,Yi=s+t}else Xi=1<<s|n<<r|i,Yi=t}function Vf(t){t.return!==null&&(Xr(t,1),Xv(t,1,0))}function Wf(t){for(;t===nc;)nc=qs[--Ks],qs[Ks]=null,ic=qs[--Ks],qs[Ks]=null;for(;t===us;)us=ri[--si],ri[si]=null,Yi=ri[--si],ri[si]=null,Xi=ri[--si],ri[si]=null}var Qn=null,Zn=null,Wt=!1,Mi=null;function Yv(t,e){var n=ci(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qn=t,Zn=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qn=t,Zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=us!==null?{id:Xi,overflow:Yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ci(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qn=t,Zn=null,!0):!1;default:return!1}}function Bd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hd(t){if(Wt){var e=Zn;if(e){var n=e;if(!dp(t,e)){if(Bd(t))throw Error(_e(418));e=wr(n.nextSibling);var i=Qn;e&&dp(t,e)?Yv(i,n):(t.flags=t.flags&-4097|2,Wt=!1,Qn=t)}}else{if(Bd(t))throw Error(_e(418));t.flags=t.flags&-4097|2,Wt=!1,Qn=t}}}function fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qn=t}function qo(t){if(t!==Qn)return!1;if(!Wt)return fp(t),Wt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fd(t.type,t.memoizedProps)),e&&(e=Zn)){if(Bd(t))throw qv(),Error(_e(418));for(;e;)Yv(t,e),e=wr(e.nextSibling)}if(fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_e(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zn=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zn=null}}else Zn=Qn?wr(t.stateNode.nextSibling):null;return!0}function qv(){for(var t=Zn;t;)t=wr(t.nextSibling)}function fa(){Zn=Qn=null,Wt=!1}function $f(t){Mi===null?Mi=[t]:Mi.push(t)}var jx=nr.ReactCurrentBatchConfig;function ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_e(309));var i=n.stateNode}if(!i)throw Error(_e(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(_e(284));if(!n._owner)throw Error(_e(290,t))}return t}function Ko(t,e){throw t=Object.prototype.toString.call(e),Error(_e(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hp(t){var e=t._init;return e(t._payload)}function Kv(t){function e(u,g){if(t){var y=u.deletions;y===null?(u.deletions=[g],u.flags|=16):y.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Cr(u,g),u.index=0,u.sibling=null,u}function s(u,g,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<g?(u.flags|=2,g):y):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,y,S){return g===null||g.tag!==6?(g=xu(y,u.mode,S),g.return=u,g):(g=r(g,y),g.return=u,g)}function l(u,g,y,S){var w=y.type;return w===Gs?d(u,g,y.props.children,S,y.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===hr&&hp(w)===g.type)?(S=r(g,y.props),S.ref=ka(u,g,y),S.return=u,S):(S=jl(y.type,y.key,y.props,null,u.mode,S),S.ref=ka(u,g,y),S.return=u,S)}function c(u,g,y,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Su(y,u.mode,S),g.return=u,g):(g=r(g,y.children||[]),g.return=u,g)}function d(u,g,y,S,w){return g===null||g.tag!==7?(g=rs(y,u.mode,S,w),g.return=u,g):(g=r(g,y),g.return=u,g)}function f(u,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=xu(""+g,u.mode,y),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zo:return y=jl(g.type,g.key,g.props,null,u.mode,y),y.ref=ka(u,null,g),y.return=u,y;case js:return g=Su(g,u.mode,y),g.return=u,g;case hr:var S=g._init;return f(u,S(g._payload),y)}if(Ka(g)||La(g))return g=rs(g,u.mode,y,null),g.return=u,g;Ko(u,g)}return null}function h(u,g,y,S){var w=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:o(u,g,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case zo:return y.key===w?l(u,g,y,S):null;case js:return y.key===w?c(u,g,y,S):null;case hr:return w=y._init,h(u,g,w(y._payload),S)}if(Ka(y)||La(y))return w!==null?null:d(u,g,y,S,null);Ko(u,y)}return null}function v(u,g,y,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(y)||null,o(g,u,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case zo:return u=u.get(S.key===null?y:S.key)||null,l(g,u,S,w);case js:return u=u.get(S.key===null?y:S.key)||null,c(g,u,S,w);case hr:var C=S._init;return v(u,g,y,C(S._payload),w)}if(Ka(S)||La(S))return u=u.get(y)||null,d(g,u,S,w,null);Ko(g,S)}return null}function x(u,g,y,S){for(var w=null,C=null,N=g,j=g=0,ne=null;N!==null&&j<y.length;j++){N.index>j?(ne=N,N=null):ne=N.sibling;var E=h(u,N,y[j],S);if(E===null){N===null&&(N=ne);break}t&&N&&E.alternate===null&&e(u,N),g=s(E,g,j),C===null?w=E:C.sibling=E,C=E,N=ne}if(j===y.length)return n(u,N),Wt&&Xr(u,j),w;if(N===null){for(;j<y.length;j++)N=f(u,y[j],S),N!==null&&(g=s(N,g,j),C===null?w=N:C.sibling=N,C=N);return Wt&&Xr(u,j),w}for(N=i(u,N);j<y.length;j++)ne=v(N,u,j,y[j],S),ne!==null&&(t&&ne.alternate!==null&&N.delete(ne.key===null?j:ne.key),g=s(ne,g,j),C===null?w=ne:C.sibling=ne,C=ne);return t&&N.forEach(function(I){return e(u,I)}),Wt&&Xr(u,j),w}function _(u,g,y,S){var w=La(y);if(typeof w!="function")throw Error(_e(150));if(y=w.call(y),y==null)throw Error(_e(151));for(var C=w=null,N=g,j=g=0,ne=null,E=y.next();N!==null&&!E.done;j++,E=y.next()){N.index>j?(ne=N,N=null):ne=N.sibling;var I=h(u,N,E.value,S);if(I===null){N===null&&(N=ne);break}t&&N&&I.alternate===null&&e(u,N),g=s(I,g,j),C===null?w=I:C.sibling=I,C=I,N=ne}if(E.done)return n(u,N),Wt&&Xr(u,j),w;if(N===null){for(;!E.done;j++,E=y.next())E=f(u,E.value,S),E!==null&&(g=s(E,g,j),C===null?w=E:C.sibling=E,C=E);return Wt&&Xr(u,j),w}for(N=i(u,N);!E.done;j++,E=y.next())E=v(N,u,j,E.value,S),E!==null&&(t&&E.alternate!==null&&N.delete(E.key===null?j:E.key),g=s(E,g,j),C===null?w=E:C.sibling=E,C=E);return t&&N.forEach(function(te){return e(u,te)}),Wt&&Xr(u,j),w}function m(u,g,y,S){if(typeof y=="object"&&y!==null&&y.type===Gs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case zo:e:{for(var w=y.key,C=g;C!==null;){if(C.key===w){if(w=y.type,w===Gs){if(C.tag===7){n(u,C.sibling),g=r(C,y.props.children),g.return=u,u=g;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===hr&&hp(w)===C.type){n(u,C.sibling),g=r(C,y.props),g.ref=ka(u,C,y),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}y.type===Gs?(g=rs(y.props.children,u.mode,S,y.key),g.return=u,u=g):(S=jl(y.type,y.key,y.props,null,u.mode,S),S.ref=ka(u,g,y),S.return=u,u=S)}return a(u);case js:e:{for(C=y.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(u,g.sibling),g=r(g,y.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Su(y,u.mode,S),g.return=u,u=g}return a(u);case hr:return C=y._init,m(u,g,C(y._payload),S)}if(Ka(y))return x(u,g,y,S);if(La(y))return _(u,g,y,S);Ko(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,y),g.return=u,u=g):(n(u,g),g=xu(y,u.mode,S),g.return=u,u=g),a(u)):n(u,g)}return m}var ha=Kv(!0),Zv=Kv(!1),rc=zr(null),sc=null,Zs=null,Xf=null;function Yf(){Xf=Zs=sc=null}function qf(t){var e=rc.current;Vt(rc),t._currentValue=e}function jd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function aa(t,e){sc=t,Xf=Zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Gn=!0),t.firstContext=null)}function fi(t){var e=t._currentValue;if(Xf!==t)if(t={context:t,memoizedValue:e,next:null},Zs===null){if(sc===null)throw Error(_e(308));Zs=t,sc.dependencies={lanes:0,firstContext:t}}else Zs=Zs.next=t;return e}var es=null;function Kf(t){es===null?es=[t]:es.push(t)}function Qv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ji(t,i)}function Ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function Zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ki(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ji(t,n)}return r=i.interleaved,r===null?(e.next=e,Kf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ji(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ff(t,n)}}function pp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ac(t,e,n,i){var r=t.updateQueue;pr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,v=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,_=o;switch(h=e,v=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){f=x.call(v,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(v,f,h):x,h==null)break e;f=Kt({},f,h);break e;case 2:pr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else v={eventTime:v,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=v,l=f):d=d.next=v,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);fs|=a,t.lanes=a,t.memoizedState=f}}function mp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(_e(191,r));r.call(i)}}}var Do={},Fi=zr(Do),So=zr(Do),Mo=zr(Do);function ts(t){if(t===Do)throw Error(_e(174));return t}function Qf(t,e){switch(Bt(Mo,e),Bt(So,t),Bt(Fi,Do),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Md(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Md(e,t)}Vt(Fi),Bt(Fi,e)}function pa(){Vt(Fi),Vt(So),Vt(Mo)}function ey(t){ts(Mo.current);var e=ts(Fi.current),n=Md(e,t.type);e!==n&&(Bt(So,t),Bt(Fi,n))}function Jf(t){So.current===t&&(Vt(Fi),Vt(So))}var Xt=zr(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pu=[];function eh(){for(var t=0;t<pu.length;t++)pu[t]._workInProgressVersionPrimary=null;pu.length=0}var kl=nr.ReactCurrentDispatcher,mu=nr.ReactCurrentBatchConfig,ds=0,Yt=null,ln=null,gn=null,lc=!1,ro=!1,Eo=0,Gx=0;function bn(){throw Error(_e(321))}function th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ci(t[n],e[n]))return!1;return!0}function nh(t,e,n,i,r,s){if(ds=s,Yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kl.current=t===null||t.memoizedState===null?Xx:Yx,t=n(i,r),ro){s=0;do{if(ro=!1,Eo=0,25<=s)throw Error(_e(301));s+=1,gn=ln=null,e.updateQueue=null,kl.current=qx,t=n(i,r)}while(ro)}if(kl.current=cc,e=ln!==null&&ln.next!==null,ds=0,gn=ln=Yt=null,lc=!1,e)throw Error(_e(300));return t}function ih(){var t=Eo!==0;return Eo=0,t}function Pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Yt.memoizedState=gn=t:gn=gn.next=t,gn}function hi(){if(ln===null){var t=Yt.alternate;t=t!==null?t.memoizedState:null}else t=ln.next;var e=gn===null?Yt.memoizedState:gn.next;if(e!==null)gn=e,ln=t;else{if(t===null)throw Error(_e(310));ln=t,t={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},gn===null?Yt.memoizedState=gn=t:gn=gn.next=t}return gn}function wo(t,e){return typeof e=="function"?e(t):e}function gu(t){var e=hi(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=ln,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((ds&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,Yt.lanes|=d,fs|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Ci(i,e.memoizedState)||(Gn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Yt.lanes|=s,fs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vu(t){var e=hi(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Ci(s,e.memoizedState)||(Gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ty(){}function ny(t,e){var n=Yt,i=hi(),r=e(),s=!Ci(i.memoizedState,r);if(s&&(i.memoizedState=r,Gn=!0),i=i.queue,rh(sy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||gn!==null&&gn.memoizedState.tag&1){if(n.flags|=2048,To(9,ry.bind(null,n,i,r,e),void 0,null),yn===null)throw Error(_e(349));ds&30||iy(n,e,r)}return r}function iy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Yt.updateQueue,e===null?(e={lastEffect:null,stores:null},Yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ry(t,e,n,i){e.value=n,e.getSnapshot=i,ay(e)&&oy(t)}function sy(t,e,n){return n(function(){ay(e)&&oy(t)})}function ay(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ci(t,n)}catch{return!0}}function oy(t){var e=Ji(t,1);e!==null&&Ai(e,t,1,-1)}function gp(t){var e=Pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=$x.bind(null,Yt,t),[e.memoizedState,t]}function To(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Yt.updateQueue,e===null?(e={lastEffect:null,stores:null},Yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ly(){return hi().memoizedState}function Ol(t,e,n,i){var r=Pi();Yt.flags|=t,r.memoizedState=To(1|e,n,void 0,i===void 0?null:i)}function Lc(t,e,n,i){var r=hi();i=i===void 0?null:i;var s=void 0;if(ln!==null){var a=ln.memoizedState;if(s=a.destroy,i!==null&&th(i,a.deps)){r.memoizedState=To(e,n,s,i);return}}Yt.flags|=t,r.memoizedState=To(1|e,n,s,i)}function vp(t,e){return Ol(8390656,8,t,e)}function rh(t,e){return Lc(2048,8,t,e)}function cy(t,e){return Lc(4,2,t,e)}function uy(t,e){return Lc(4,4,t,e)}function dy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fy(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,dy.bind(null,e,t),n)}function sh(){}function hy(t,e){var n=hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&th(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function py(t,e){var n=hi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&th(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function my(t,e,n){return ds&21?(Ci(n,e)||(n=xv(),Yt.lanes|=n,fs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Gn=!0),t.memoizedState=n)}function Vx(t,e){var n=Ft;Ft=n!==0&&4>n?n:4,t(!0);var i=mu.transition;mu.transition={};try{t(!1),e()}finally{Ft=n,mu.transition=i}}function gy(){return hi().memoizedState}function Wx(t,e,n){var i=Ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vy(t))yy(e,n);else if(n=Qv(t,e,n,i),n!==null){var r=Fn();Ai(n,t,i,r),_y(n,e,i)}}function $x(t,e,n){var i=Ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vy(t))yy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Ci(o,a)){var l=e.interleaved;l===null?(r.next=r,Kf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Qv(t,e,r,i),n!==null&&(r=Fn(),Ai(n,t,i,r),_y(n,e,i))}}function vy(t){var e=t.alternate;return t===Yt||e!==null&&e===Yt}function yy(t,e){ro=lc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _y(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ff(t,n)}}var cc={readContext:fi,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},Xx={readContext:fi,useCallback:function(t,e){return Pi().memoizedState=[t,e===void 0?null:e],t},useContext:fi,useEffect:vp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4194308,4,dy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ol(4,2,t,e)},useMemo:function(t,e){var n=Pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Wx.bind(null,Yt,t),[i.memoizedState,t]},useRef:function(t){var e=Pi();return t={current:t},e.memoizedState=t},useState:gp,useDebugValue:sh,useDeferredValue:function(t){return Pi().memoizedState=t},useTransition:function(){var t=gp(!1),e=t[0];return t=Vx.bind(null,t[1]),Pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Yt,r=Pi();if(Wt){if(n===void 0)throw Error(_e(407));n=n()}else{if(n=e(),yn===null)throw Error(_e(349));ds&30||iy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,vp(sy.bind(null,i,s,t),[t]),i.flags|=2048,To(9,ry.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Pi(),e=yn.identifierPrefix;if(Wt){var n=Yi,i=Xi;n=(i&~(1<<32-bi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Yx={readContext:fi,useCallback:hy,useContext:fi,useEffect:rh,useImperativeHandle:fy,useInsertionEffect:cy,useLayoutEffect:uy,useMemo:py,useReducer:gu,useRef:ly,useState:function(){return gu(wo)},useDebugValue:sh,useDeferredValue:function(t){var e=hi();return my(e,ln.memoizedState,t)},useTransition:function(){var t=gu(wo)[0],e=hi().memoizedState;return[t,e]},useMutableSource:ty,useSyncExternalStore:ny,useId:gy,unstable_isNewReconciler:!1},qx={readContext:fi,useCallback:hy,useContext:fi,useEffect:rh,useImperativeHandle:fy,useInsertionEffect:cy,useLayoutEffect:uy,useMemo:py,useReducer:vu,useRef:ly,useState:function(){return vu(wo)},useDebugValue:sh,useDeferredValue:function(t){var e=hi();return ln===null?e.memoizedState=t:my(e,ln.memoizedState,t)},useTransition:function(){var t=vu(wo)[0],e=hi().memoizedState;return[t,e]},useMutableSource:ty,useSyncExternalStore:ny,useId:gy,unstable_isNewReconciler:!1};function xi(t,e){if(t&&t.defaultProps){e=Kt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Kt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ic={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Fn(),r=Ar(t),s=Ki(i,r);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(Ai(e,t,r,i),Fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Fn(),r=Ar(t),s=Ki(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(Ai(e,t,r,i),Fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Fn(),i=Ar(t),r=Ki(n,i);r.tag=2,e!=null&&(r.callback=e),e=Tr(t,r,i),e!==null&&(Ai(e,t,i,n),Fl(e,t,i))}};function yp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!vo(n,i)||!vo(r,s):!0}function xy(t,e,n){var i=!1,r=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=fi(s):(r=Wn(e)?cs:Nn.current,i=e.contextTypes,s=(i=i!=null)?da(t,r):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ic,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _p(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ic.enqueueReplaceState(e,e.state,null)}function Vd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=fi(s):(s=Wn(e)?cs:Nn.current,r.context=da(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ic.enqueueReplaceState(r,r.state,null),ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ma(t,e){try{var n="",i=e;do n+=E_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Kx=typeof WeakMap=="function"?WeakMap:Map;function Sy(t,e,n){n=Ki(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){dc||(dc=!0,tf=i),Wd(t,e)},n}function My(t,e,n){n=Ki(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wd(t,e),typeof i!="function"&&(br===null?br=new Set([this]):br.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function xp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Kx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=uS.bind(null,t,e,n),e.then(t,t))}function Sp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ki(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var Zx=nr.ReactCurrentOwner,Gn=!1;function Dn(t,e,n,i){e.child=t===null?Zv(e,null,n,i):ha(e,t.child,n,i)}function Ep(t,e,n,i,r){n=n.render;var s=e.ref;return aa(e,r),i=nh(t,e,n,i,s,r),n=ih(),t!==null&&!Gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(Wt&&n&&Vf(e),e.flags|=1,Dn(t,e,i,r),e.child)}function wp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ey(t,e,s,i,r)):(t=jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(a,i)&&t.ref===e.ref)return er(t,e,r)}return e.flags|=1,t=Cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ey(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(vo(s,i)&&t.ref===e.ref)if(Gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Gn=!0);else return e.lanes=t.lanes,er(t,e,r)}return $d(t,e,n,i,r)}function wy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Js,Kn),Kn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Bt(Js,Kn),Kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Bt(Js,Kn),Kn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Bt(Js,Kn),Kn|=i;return Dn(t,e,r,n),e.child}function Ty(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $d(t,e,n,i,r){var s=Wn(n)?cs:Nn.current;return s=da(e,s),aa(e,r),n=nh(t,e,n,i,s,r),i=ih(),t!==null&&!Gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(Wt&&i&&Vf(e),e.flags|=1,Dn(t,e,n,r),e.child)}function Tp(t,e,n,i,r){if(Wn(n)){var s=!0;tc(e)}else s=!1;if(aa(e,r),e.stateNode===null)zl(t,e),xy(e,n,i),Vd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=fi(c):(c=Wn(n)?cs:Nn.current,c=da(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&_p(e,a,i,c),pr=!1;var h=e.memoizedState;a.state=h,ac(e,i,a,r),l=e.memoizedState,o!==i||h!==l||Vn.current||pr?(typeof d=="function"&&(Gd(e,n,d,i),l=e.memoizedState),(o=pr||yp(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Jv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:xi(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=fi(l):(l=Wn(n)?cs:Nn.current,l=da(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&_p(e,a,i,l),pr=!1,h=e.memoizedState,a.state=h,ac(e,i,a,r);var x=e.memoizedState;o!==f||h!==x||Vn.current||pr?(typeof v=="function"&&(Gd(e,n,v,i),x=e.memoizedState),(c=pr||yp(e,n,c,i,h,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Xd(t,e,n,i,s,r)}function Xd(t,e,n,i,r,s){Ty(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&up(e,n,!1),er(t,e,s);i=e.stateNode,Zx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ha(e,t.child,null,s),e.child=ha(e,null,o,s)):Dn(t,e,o,s),e.memoizedState=i.state,r&&up(e,n,!0),e.child}function by(t){var e=t.stateNode;e.pendingContext?cp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cp(t,e.context,!1),Qf(t,e.containerInfo)}function bp(t,e,n,i,r){return fa(),$f(r),e.flags|=256,Dn(t,e,n,i),e.child}var Yd={dehydrated:null,treeContext:null,retryLane:0};function qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ay(t,e,n){var i=e.pendingProps,r=Xt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Bt(Xt,r&1),t===null)return Hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Fc(a,i,0,null),t=rs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qd(n),e.memoizedState=Yd,t):ah(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Qx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Cr(o,s):(s=rs(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?qd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Yd,i}return s=t.child,t=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ah(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zo(t,e,n,i){return i!==null&&$f(i),ha(e,t.child,null,n),t=ah(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=yu(Error(_e(422))),Zo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Fc({mode:"visible",children:i.children},r,0,null),s=rs(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ha(e,t.child,null,a),e.child.memoizedState=qd(a),e.memoizedState=Yd,s);if(!(e.mode&1))return Zo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(_e(419)),i=yu(s,i,void 0),Zo(t,e,a,i)}if(o=(a&t.childLanes)!==0,Gn||o){if(i=yn,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ji(t,r),Ai(i,t,r,-1))}return fh(),i=yu(Error(_e(421))),Zo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=dS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Zn=wr(r.nextSibling),Qn=e,Wt=!0,Mi=null,t!==null&&(ri[si++]=Xi,ri[si++]=Yi,ri[si++]=us,Xi=t.id,Yi=t.overflow,us=e),e=ah(e,i.children),e.flags|=4096,e)}function Ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),jd(t.return,e,n)}function _u(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Cy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Dn(t,e,i.children,n),i=Xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ap(t,n,e);else if(t.tag===19)Ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Bt(Xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_u(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&oc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_u(e,!0,n,null,s);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_e(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jx(t,e,n){switch(e.tag){case 3:by(e),fa();break;case 5:ey(e);break;case 1:Wn(e.type)&&tc(e);break;case 4:Qf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Bt(rc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Bt(Xt,Xt.current&1),e.flags|=128,null):n&e.child.childLanes?Ay(t,e,n):(Bt(Xt,Xt.current&1),t=er(t,e,n),t!==null?t.sibling:null);Bt(Xt,Xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Cy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Bt(Xt,Xt.current),i)break;return null;case 22:case 23:return e.lanes=0,wy(t,e,n)}return er(t,e,n)}var Ry,Kd,Py,Ny;Ry=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kd=function(){};Py=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ts(Fi.current);var s=null;switch(n){case"input":r=yd(t,r),i=yd(t,i),s=[];break;case"select":r=Kt({},r,{value:void 0}),i=Kt({},i,{value:void 0}),s=[];break;case"textarea":r=Sd(t,r),i=Sd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Jl)}Ed(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(co.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(co.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&jt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ny=function(t,e,n,i){n!==i&&(e.flags|=4)};function Oa(t,e){if(!Wt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function An(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function eS(t,e,n){var i=e.pendingProps;switch(Wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(e),null;case 1:return Wn(e.type)&&ec(),An(e),null;case 3:return i=e.stateNode,pa(),Vt(Vn),Vt(Nn),eh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(qo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mi!==null&&(sf(Mi),Mi=null))),Kd(t,e),An(e),null;case 5:Jf(e);var r=ts(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)Py(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(_e(166));return An(e),null}if(t=ts(Fi.current),qo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ii]=e,i[xo]=s,t=(e.mode&1)!==0,n){case"dialog":jt("cancel",i),jt("close",i);break;case"iframe":case"object":case"embed":jt("load",i);break;case"video":case"audio":for(r=0;r<Qa.length;r++)jt(Qa[r],i);break;case"source":jt("error",i);break;case"img":case"image":case"link":jt("error",i),jt("load",i);break;case"details":jt("toggle",i);break;case"input":Fh(i,s),jt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},jt("invalid",i);break;case"textarea":Oh(i,s),jt("invalid",i)}Ed(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,o,t),r=["children",""+o]):co.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&jt("scroll",i)}switch(n){case"input":Bo(i),kh(i,s,!0);break;case"textarea":Bo(i),zh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Ii]=e,t[xo]=i,Ry(t,e,!1,!1),e.stateNode=t;e:{switch(a=wd(n,i),n){case"dialog":jt("cancel",t),jt("close",t),r=i;break;case"iframe":case"object":case"embed":jt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qa.length;r++)jt(Qa[r],t);r=i;break;case"source":jt("error",t),r=i;break;case"img":case"image":case"link":jt("error",t),jt("load",t),r=i;break;case"details":jt("toggle",t),r=i;break;case"input":Fh(t,i),r=yd(t,i),jt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Kt({},i,{value:void 0}),jt("invalid",t);break;case"textarea":Oh(t,i),r=Sd(t,i),jt("invalid",t);break;default:r=i}Ed(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?lv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&av(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&uo(t,l):typeof l=="number"&&uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&jt("scroll",t):l!=null&&Pf(t,s,l,a))}switch(n){case"input":Bo(t),kh(t,i,!1);break;case"textarea":Bo(t),zh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?na(t,!!i.multiple,s,!1):i.defaultValue!=null&&na(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return An(e),null;case 6:if(t&&e.stateNode!=null)Ny(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(_e(166));if(n=ts(Mo.current),ts(Fi.current),qo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ii]=e,(s=i.nodeValue!==n)&&(t=Qn,t!==null))switch(t.tag){case 3:Yo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ii]=e,e.stateNode=i}return An(e),null;case 13:if(Vt(Xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Wt&&Zn!==null&&e.mode&1&&!(e.flags&128))qv(),fa(),e.flags|=98560,s=!1;else if(s=qo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(_e(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_e(317));s[Ii]=e}else fa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;An(e),s=!1}else Mi!==null&&(sf(Mi),Mi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Xt.current&1?cn===0&&(cn=3):fh())),e.updateQueue!==null&&(e.flags|=4),An(e),null);case 4:return pa(),Kd(t,e),t===null&&yo(e.stateNode.containerInfo),An(e),null;case 10:return qf(e.type._context),An(e),null;case 17:return Wn(e.type)&&ec(),An(e),null;case 19:if(Vt(Xt),s=e.memoizedState,s===null)return An(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Oa(s,!1);else{if(cn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=oc(t),a!==null){for(e.flags|=128,Oa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Bt(Xt,Xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&tn()>ga&&(e.flags|=128,i=!0,Oa(s,!1),e.lanes=4194304)}else{if(!i)if(t=oc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Wt)return An(e),null}else 2*tn()-s.renderingStartTime>ga&&n!==1073741824&&(e.flags|=128,i=!0,Oa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=tn(),e.sibling=null,n=Xt.current,Bt(Xt,i?n&1|2:n&1),e):(An(e),null);case 22:case 23:return dh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Kn&1073741824&&(An(e),e.subtreeFlags&6&&(e.flags|=8192)):An(e),null;case 24:return null;case 25:return null}throw Error(_e(156,e.tag))}function tS(t,e){switch(Wf(e),e.tag){case 1:return Wn(e.type)&&ec(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pa(),Vt(Vn),Vt(Nn),eh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jf(e),null;case 13:if(Vt(Xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_e(340));fa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Vt(Xt),null;case 4:return pa(),null;case 10:return qf(e.type._context),null;case 22:case 23:return dh(),null;case 24:return null;default:return null}}var Qo=!1,Pn=!1,nS=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Qt(t,e,i)}else n.current=null}function Zd(t,e,n){try{n()}catch(i){Qt(t,e,i)}}var Cp=!1;function iS(t,e){if(Dd=Kl,t=Fv(),Gf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var v;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ud={focusedElem:t,selectionRange:n},Kl=!1,Ue=e;Ue!==null;)if(e=Ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ue=t;else for(;Ue!==null;){e=Ue;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,m=x.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:xi(e.type,_),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_e(163))}}catch(S){Qt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ue=t;break}Ue=e.return}return x=Cp,Cp=!1,x}function so(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zd(e,n,s)}r=r.next}while(r!==i)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ly(t){var e=t.alternate;e!==null&&(t.alternate=null,Ly(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ii],delete e[xo],delete e[Od],delete e[zx],delete e[Bx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Iy(t){return t.tag===5||t.tag===3||t.tag===4}function Rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jl));else if(i!==4&&(t=t.child,t!==null))for(Jd(t,e,n),t=t.sibling;t!==null;)Jd(t,e,n),t=t.sibling}function ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}var _n=null,Si=!1;function ar(t,e,n){for(n=n.child;n!==null;)Dy(t,e,n),n=n.sibling}function Dy(t,e,n){if(Ui&&typeof Ui.onCommitFiberUnmount=="function")try{Ui.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:Pn||Qs(n,e);case 6:var i=_n,r=Si;_n=null,ar(t,e,n),_n=i,Si=r,_n!==null&&(Si?(t=_n,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_n.removeChild(n.stateNode));break;case 18:_n!==null&&(Si?(t=_n,n=n.stateNode,t.nodeType===8?fu(t.parentNode,n):t.nodeType===1&&fu(t,n),mo(t)):fu(_n,n.stateNode));break;case 4:i=_n,r=Si,_n=n.stateNode.containerInfo,Si=!0,ar(t,e,n),_n=i,Si=r;break;case 0:case 11:case 14:case 15:if(!Pn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Zd(n,e,a),r=r.next}while(r!==i)}ar(t,e,n);break;case 1:if(!Pn&&(Qs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Qt(n,e,o)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(Pn=(i=Pn)||n.memoizedState!==null,ar(t,e,n),Pn=i):ar(t,e,n);break;default:ar(t,e,n)}}function Pp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nS),e.forEach(function(i){var r=fS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function pi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:_n=o.stateNode,Si=!1;break e;case 3:_n=o.stateNode.containerInfo,Si=!0;break e;case 4:_n=o.stateNode.containerInfo,Si=!0;break e}o=o.return}if(_n===null)throw Error(_e(160));Dy(s,a,r),_n=null,Si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Qt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Uy(e,t),e=e.sibling}function Uy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pi(e,t),Ri(t),i&4){try{so(3,t,t.return),Dc(3,t)}catch(_){Qt(t,t.return,_)}try{so(5,t,t.return)}catch(_){Qt(t,t.return,_)}}break;case 1:pi(e,t),Ri(t),i&512&&n!==null&&Qs(n,n.return);break;case 5:if(pi(e,t),Ri(t),i&512&&n!==null&&Qs(n,n.return),t.flags&32){var r=t.stateNode;try{uo(r,"")}catch(_){Qt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&iv(r,s),wd(o,a);var c=wd(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?lv(r,f):d==="dangerouslySetInnerHTML"?av(r,f):d==="children"?uo(r,f):Pf(r,d,f,c)}switch(o){case"input":_d(r,s);break;case"textarea":rv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?na(r,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?na(r,!!s.multiple,s.defaultValue,!0):na(r,!!s.multiple,s.multiple?[]:"",!1))}r[xo]=s}catch(_){Qt(t,t.return,_)}}break;case 6:if(pi(e,t),Ri(t),i&4){if(t.stateNode===null)throw Error(_e(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Qt(t,t.return,_)}}break;case 3:if(pi(e,t),Ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(_){Qt(t,t.return,_)}break;case 4:pi(e,t),Ri(t);break;case 13:pi(e,t),Ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ch=tn())),i&4&&Pp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Pn=(c=Pn)||d,pi(e,t),Pn=c):pi(e,t),Ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ue=t,d=t.child;d!==null;){for(f=Ue=d;Ue!==null;){switch(h=Ue,v=h.child,h.tag){case 0:case 11:case 14:case 15:so(4,h,h.return);break;case 1:Qs(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){Qt(i,n,_)}}break;case 5:Qs(h,h.return);break;case 22:if(h.memoizedState!==null){Lp(f);continue}}v!==null?(v.return=h,Ue=v):Lp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=ov("display",a))}catch(_){Qt(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){Qt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:pi(e,t),Ri(t),i&4&&Pp(t);break;case 21:break;default:pi(e,t),Ri(t)}}function Ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Iy(n)){var i=n;break e}n=n.return}throw Error(_e(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(uo(r,""),i.flags&=-33);var s=Rp(t);ef(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Rp(t);Jd(t,o,a);break;default:throw Error(_e(161))}}catch(l){Qt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rS(t,e,n){Ue=t,Fy(t)}function Fy(t,e,n){for(var i=(t.mode&1)!==0;Ue!==null;){var r=Ue,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Qo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Pn;o=Qo;var c=Pn;if(Qo=a,(Pn=l)&&!c)for(Ue=r;Ue!==null;)a=Ue,l=a.child,a.tag===22&&a.memoizedState!==null?Ip(r):l!==null?(l.return=a,Ue=l):Ip(r);for(;s!==null;)Ue=s,Fy(s),s=s.sibling;Ue=r,Qo=o,Pn=c}Np(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ue=s):Np(t)}}function Np(t){for(;Ue!==null;){var e=Ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pn||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Pn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:xi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&mo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_e(163))}Pn||e.flags&512&&Qd(e)}catch(h){Qt(e,e.return,h)}}if(e===t){Ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Lp(t){for(;Ue!==null;){var e=Ue;if(e===t){Ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Ip(t){for(;Ue!==null;){var e=Ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(l){Qt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Qt(e,r,l)}}var s=e.return;try{Qd(e)}catch(l){Qt(e,s,l)}break;case 5:var a=e.return;try{Qd(e)}catch(l){Qt(e,a,l)}}}catch(l){Qt(e,e.return,l)}if(e===t){Ue=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ue=o;break}Ue=e.return}}var sS=Math.ceil,uc=nr.ReactCurrentDispatcher,oh=nr.ReactCurrentOwner,di=nr.ReactCurrentBatchConfig,Rt=0,yn=null,on=null,En=0,Kn=0,Js=zr(0),cn=0,bo=null,fs=0,Uc=0,lh=0,ao=null,Hn=null,ch=0,ga=1/0,Vi=null,dc=!1,tf=null,br=null,Jo=!1,yr=null,fc=0,oo=0,nf=null,Bl=-1,Hl=0;function Fn(){return Rt&6?tn():Bl!==-1?Bl:Bl=tn()}function Ar(t){return t.mode&1?Rt&2&&En!==0?En&-En:jx.transition!==null?(Hl===0&&(Hl=xv()),Hl):(t=Ft,t!==0||(t=window.event,t=t===void 0?16:Av(t.type)),t):1}function Ai(t,e,n,i){if(50<oo)throw oo=0,nf=null,Error(_e(185));No(t,n,i),(!(Rt&2)||t!==yn)&&(t===yn&&(!(Rt&2)&&(Uc|=n),cn===4&&gr(t,En)),$n(t,i),n===1&&Rt===0&&!(e.mode&1)&&(ga=tn()+500,Nc&&Br()))}function $n(t,e){var n=t.callbackNode;j_(t,e);var i=ql(t,t===yn?En:0);if(i===0)n!==null&&jh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jh(n),e===1)t.tag===0?Hx(Dp.bind(null,t)):$v(Dp.bind(null,t)),kx(function(){!(Rt&6)&&Br()}),n=null;else{switch(Sv(i)){case 1:n=Uf;break;case 4:n=yv;break;case 16:n=Yl;break;case 536870912:n=_v;break;default:n=Yl}n=Vy(n,ky.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ky(t,e){if(Bl=-1,Hl=0,Rt&6)throw Error(_e(327));var n=t.callbackNode;if(oa()&&t.callbackNode!==n)return null;var i=ql(t,t===yn?En:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=hc(t,i);else{e=i;var r=Rt;Rt|=2;var s=zy();(yn!==t||En!==e)&&(Vi=null,ga=tn()+500,is(t,e));do try{lS();break}catch(o){Oy(t,o)}while(!0);Yf(),uc.current=s,Rt=r,on!==null?e=0:(yn=null,En=0,e=cn)}if(e!==0){if(e===2&&(r=Rd(t),r!==0&&(i=r,e=rf(t,r))),e===1)throw n=bo,is(t,0),gr(t,i),$n(t,tn()),n;if(e===6)gr(t,i);else{if(r=t.current.alternate,!(i&30)&&!aS(r)&&(e=hc(t,i),e===2&&(s=Rd(t),s!==0&&(i=s,e=rf(t,s))),e===1))throw n=bo,is(t,0),gr(t,i),$n(t,tn()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(_e(345));case 2:Yr(t,Hn,Vi);break;case 3:if(gr(t,i),(i&130023424)===i&&(e=ch+500-tn(),10<e)){if(ql(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=kd(Yr.bind(null,t,Hn,Vi),e);break}Yr(t,Hn,Vi);break;case 4:if(gr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-bi(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=tn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*sS(i/1960))-i,10<i){t.timeoutHandle=kd(Yr.bind(null,t,Hn,Vi),i);break}Yr(t,Hn,Vi);break;case 5:Yr(t,Hn,Vi);break;default:throw Error(_e(329))}}}return $n(t,tn()),t.callbackNode===n?ky.bind(null,t):null}function rf(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=hc(t,e),t!==2&&(e=Hn,Hn=n,e!==null&&sf(e)),t}function sf(t){Hn===null?Hn=t:Hn.push.apply(Hn,t)}function aS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~lh,e&=~Uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bi(e),i=1<<n;t[n]=-1,e&=~i}}function Dp(t){if(Rt&6)throw Error(_e(327));oa();var e=ql(t,0);if(!(e&1))return $n(t,tn()),null;var n=hc(t,e);if(t.tag!==0&&n===2){var i=Rd(t);i!==0&&(e=i,n=rf(t,i))}if(n===1)throw n=bo,is(t,0),gr(t,e),$n(t,tn()),n;if(n===6)throw Error(_e(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,Hn,Vi),$n(t,tn()),null}function uh(t,e){var n=Rt;Rt|=1;try{return t(e)}finally{Rt=n,Rt===0&&(ga=tn()+500,Nc&&Br())}}function hs(t){yr!==null&&yr.tag===0&&!(Rt&6)&&oa();var e=Rt;Rt|=1;var n=di.transition,i=Ft;try{if(di.transition=null,Ft=1,t)return t()}finally{Ft=i,di.transition=n,Rt=e,!(Rt&6)&&Br()}}function dh(){Kn=Js.current,Vt(Js)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Fx(n)),on!==null)for(n=on.return;n!==null;){var i=n;switch(Wf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ec();break;case 3:pa(),Vt(Vn),Vt(Nn),eh();break;case 5:Jf(i);break;case 4:pa();break;case 13:Vt(Xt);break;case 19:Vt(Xt);break;case 10:qf(i.type._context);break;case 22:case 23:dh()}n=n.return}if(yn=t,on=t=Cr(t.current,null),En=Kn=e,cn=0,bo=null,lh=Uc=fs=0,Hn=ao=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}es=null}return t}function Oy(t,e){do{var n=on;try{if(Yf(),kl.current=cc,lc){for(var i=Yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}lc=!1}if(ds=0,gn=ln=Yt=null,ro=!1,Eo=0,oh.current=null,n===null||n.return===null){cn=1,bo=e,on=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=En,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Sp(a);if(v!==null){v.flags&=-257,Mp(v,a,o,s,e),v.mode&1&&xp(s,c,e),e=v,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){xp(s,c,e),fh();break e}l=Error(_e(426))}}else if(Wt&&o.mode&1){var m=Sp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Mp(m,a,o,s,e),$f(ma(l,o));break e}}s=l=ma(l,o),cn!==4&&(cn=2),ao===null?ao=[s]:ao.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Sy(s,l,e);pp(s,u);break e;case 1:o=l;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(br===null||!br.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=My(s,o,e);pp(s,S);break e}}s=s.return}while(s!==null)}Hy(n)}catch(w){e=w,on===n&&n!==null&&(on=n=n.return);continue}break}while(!0)}function zy(){var t=uc.current;return uc.current=cc,t===null?cc:t}function fh(){(cn===0||cn===3||cn===2)&&(cn=4),yn===null||!(fs&268435455)&&!(Uc&268435455)||gr(yn,En)}function hc(t,e){var n=Rt;Rt|=2;var i=zy();(yn!==t||En!==e)&&(Vi=null,is(t,e));do try{oS();break}catch(r){Oy(t,r)}while(!0);if(Yf(),Rt=n,uc.current=i,on!==null)throw Error(_e(261));return yn=null,En=0,cn}function oS(){for(;on!==null;)By(on)}function lS(){for(;on!==null&&!I_();)By(on)}function By(t){var e=Gy(t.alternate,t,Kn);t.memoizedProps=t.pendingProps,e===null?Hy(t):on=e,oh.current=null}function Hy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tS(n,e),n!==null){n.flags&=32767,on=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{cn=6,on=null;return}}else if(n=eS(n,e,Kn),n!==null){on=n;return}if(e=e.sibling,e!==null){on=e;return}on=e=t}while(e!==null);cn===0&&(cn=5)}function Yr(t,e,n){var i=Ft,r=di.transition;try{di.transition=null,Ft=1,cS(t,e,n,i)}finally{di.transition=r,Ft=i}return null}function cS(t,e,n,i){do oa();while(yr!==null);if(Rt&6)throw Error(_e(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_e(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(G_(t,s),t===yn&&(on=yn=null,En=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,Vy(Yl,function(){return oa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=di.transition,di.transition=null;var a=Ft;Ft=1;var o=Rt;Rt|=4,oh.current=null,iS(t,n),Uy(n,t),Rx(Ud),Kl=!!Dd,Ud=Dd=null,t.current=n,rS(n),D_(),Rt=o,Ft=a,di.transition=s}else t.current=n;if(Jo&&(Jo=!1,yr=t,fc=r),s=t.pendingLanes,s===0&&(br=null),k_(n.stateNode),$n(t,tn()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(dc)throw dc=!1,t=tf,tf=null,t;return fc&1&&t.tag!==0&&oa(),s=t.pendingLanes,s&1?t===nf?oo++:(oo=0,nf=t):oo=0,Br(),null}function oa(){if(yr!==null){var t=Sv(fc),e=di.transition,n=Ft;try{if(di.transition=null,Ft=16>t?16:t,yr===null)var i=!1;else{if(t=yr,yr=null,fc=0,Rt&6)throw Error(_e(331));var r=Rt;for(Rt|=4,Ue=t.current;Ue!==null;){var s=Ue,a=s.child;if(Ue.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Ue=c;Ue!==null;){var d=Ue;switch(d.tag){case 0:case 11:case 15:so(8,d,s)}var f=d.child;if(f!==null)f.return=d,Ue=f;else for(;Ue!==null;){d=Ue;var h=d.sibling,v=d.return;if(Ly(d),d===c){Ue=null;break}if(h!==null){h.return=v,Ue=h;break}Ue=v}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ue=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ue=a;else e:for(;Ue!==null;){if(s=Ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:so(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ue=u;break e}Ue=s.return}}var g=t.current;for(Ue=g;Ue!==null;){a=Ue;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Ue=y;else e:for(a=g;Ue!==null;){if(o=Ue,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Dc(9,o)}}catch(w){Qt(o,o.return,w)}if(o===a){Ue=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ue=S;break e}Ue=o.return}}if(Rt=r,Br(),Ui&&typeof Ui.onPostCommitFiberRoot=="function")try{Ui.onPostCommitFiberRoot(bc,t)}catch{}i=!0}return i}finally{Ft=n,di.transition=e}}return!1}function Up(t,e,n){e=ma(n,e),e=Sy(t,e,1),t=Tr(t,e,1),e=Fn(),t!==null&&(No(t,1,e),$n(t,e))}function Qt(t,e,n){if(t.tag===3)Up(t,t,n);else for(;e!==null;){if(e.tag===3){Up(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(br===null||!br.has(i))){t=ma(n,t),t=My(e,t,1),e=Tr(e,t,1),t=Fn(),e!==null&&(No(e,1,t),$n(e,t));break}}e=e.return}}function uS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Fn(),t.pingedLanes|=t.suspendedLanes&n,yn===t&&(En&n)===n&&(cn===4||cn===3&&(En&130023424)===En&&500>tn()-ch?is(t,0):lh|=n),$n(t,e)}function jy(t,e){e===0&&(t.mode&1?(e=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):e=1);var n=Fn();t=Ji(t,e),t!==null&&(No(t,e,n),$n(t,n))}function dS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jy(t,n)}function fS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(_e(314))}i!==null&&i.delete(e),jy(t,n)}var Gy;Gy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vn.current)Gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Gn=!1,Jx(t,e,n);Gn=!!(t.flags&131072)}else Gn=!1,Wt&&e.flags&1048576&&Xv(e,ic,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;zl(t,e),t=e.pendingProps;var r=da(e,Nn.current);aa(e,n),r=nh(null,e,i,t,r,n);var s=ih();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wn(i)?(s=!0,tc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zf(e),r.updater=Ic,e.stateNode=r,r._reactInternals=e,Vd(e,i,t,n),e=Xd(null,e,i,!0,s,n)):(e.tag=0,Wt&&s&&Vf(e),Dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(zl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=pS(i),t=xi(i,t),r){case 0:e=$d(null,e,i,t,n);break e;case 1:e=Tp(null,e,i,t,n);break e;case 11:e=Ep(null,e,i,t,n);break e;case 14:e=wp(null,e,i,xi(i.type,t),n);break e}throw Error(_e(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),$d(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Tp(t,e,i,r,n);case 3:e:{if(by(e),t===null)throw Error(_e(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Jv(t,e),ac(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ma(Error(_e(423)),e),e=bp(t,e,i,n,r);break e}else if(i!==r){r=ma(Error(_e(424)),e),e=bp(t,e,i,n,r);break e}else for(Zn=wr(e.stateNode.containerInfo.firstChild),Qn=e,Wt=!0,Mi=null,n=Zv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fa(),i===r){e=er(t,e,n);break e}Dn(t,e,i,n)}e=e.child}return e;case 5:return ey(e),t===null&&Hd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Fd(i,r)?a=null:s!==null&&Fd(i,s)&&(e.flags|=32),Ty(t,e),Dn(t,e,a,n),e.child;case 6:return t===null&&Hd(e),null;case 13:return Ay(t,e,n);case 4:return Qf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ha(e,null,i,n):Dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),Ep(t,e,i,r,n);case 7:return Dn(t,e,e.pendingProps,n),e.child;case 8:return Dn(t,e,e.pendingProps.children,n),e.child;case 12:return Dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,Bt(rc,i._currentValue),i._currentValue=a,s!==null)if(Ci(s.value,a)){if(s.children===r.children&&!Vn.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ki(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(_e(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),jd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,aa(e,n),r=fi(r),i=i(r),e.flags|=1,Dn(t,e,i,n),e.child;case 14:return i=e.type,r=xi(i,e.pendingProps),r=xi(i.type,r),wp(t,e,i,r,n);case 15:return Ey(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xi(i,r),zl(t,e),e.tag=1,Wn(i)?(t=!0,tc(e)):t=!1,aa(e,n),xy(e,i,r),Vd(e,i,r,n),Xd(null,e,i,!0,t,n);case 19:return Cy(t,e,n);case 22:return wy(t,e,n)}throw Error(_e(156,e.tag))};function Vy(t,e){return vv(t,e)}function hS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,e,n,i){return new hS(t,e,n,i)}function hh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pS(t){if(typeof t=="function")return hh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lf)return 11;if(t===If)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=ci(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")hh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Gs:return rs(n.children,r,s,e);case Nf:a=8,r|=8;break;case pd:return t=ci(12,n,e,r|2),t.elementType=pd,t.lanes=s,t;case md:return t=ci(13,n,e,r),t.elementType=md,t.lanes=s,t;case gd:return t=ci(19,n,e,r),t.elementType=gd,t.lanes=s,t;case ev:return Fc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qg:a=10;break e;case Jg:a=9;break e;case Lf:a=11;break e;case If:a=14;break e;case hr:a=16,i=null;break e}throw Error(_e(130,t==null?t:typeof t,""))}return e=ci(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function rs(t,e,n,i){return t=ci(7,t,i,e),t.lanes=n,t}function Fc(t,e,n,i){return t=ci(22,t,i,e),t.elementType=ev,t.lanes=n,t.stateNode={isHidden:!1},t}function xu(t,e,n){return t=ci(6,t,null,e),t.lanes=n,t}function Su(t,e,n){return e=ci(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tu(0),this.expirationTimes=tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ph(t,e,n,i,r,s,a,o,l){return t=new mS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ci(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zf(s),t}function gS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Wy(t){if(!t)return Ur;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(_e(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_e(171))}if(t.tag===1){var n=t.type;if(Wn(n))return Wv(t,n,e)}return e}function $y(t,e,n,i,r,s,a,o,l){return t=ph(n,i,!0,t,r,s,a,o,l),t.context=Wy(null),n=t.current,i=Fn(),r=Ar(n),s=Ki(i,r),s.callback=e??null,Tr(n,s,r),t.current.lanes=r,No(t,r,i),$n(t,i),t}function kc(t,e,n,i){var r=e.current,s=Fn(),a=Ar(r);return n=Wy(n),e.context===null?e.context=n:e.pendingContext=n,e=Ki(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Tr(r,e,a),t!==null&&(Ai(t,r,a,s),Fl(t,r,a)),a}function pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mh(t,e){Fp(t,e),(t=t.alternate)&&Fp(t,e)}function vS(){return null}var Xy=typeof reportError=="function"?reportError:function(t){console.error(t)};function gh(t){this._internalRoot=t}Oc.prototype.render=gh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_e(409));kc(t,e,null,null)};Oc.prototype.unmount=gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hs(function(){kc(null,t,null,null)}),e[Qi]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=wv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mr.length&&e!==0&&e<mr[n].priority;n++);mr.splice(n,0,t),n===0&&bv(t)}};function vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kp(){}function yS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=pc(a);s.call(c)}}var a=$y(e,i,t,0,null,!1,!1,"",kp);return t._reactRootContainer=a,t[Qi]=a.current,yo(t.nodeType===8?t.parentNode:t),hs(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=pc(l);o.call(c)}}var l=ph(t,0,!1,null,null,!1,!1,"",kp);return t._reactRootContainer=l,t[Qi]=l.current,yo(t.nodeType===8?t.parentNode:t),hs(function(){kc(e,l,n,i)}),l}function Bc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=pc(a);o.call(l)}}kc(e,a,t,r)}else a=yS(n,e,t,r,i);return pc(a)}Mv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Za(e.pendingLanes);n!==0&&(Ff(e,n|1),$n(e,tn()),!(Rt&6)&&(ga=tn()+500,Br()))}break;case 13:hs(function(){var i=Ji(t,1);if(i!==null){var r=Fn();Ai(i,t,1,r)}}),mh(t,1)}};kf=function(t){if(t.tag===13){var e=Ji(t,134217728);if(e!==null){var n=Fn();Ai(e,t,134217728,n)}mh(t,134217728)}};Ev=function(t){if(t.tag===13){var e=Ar(t),n=Ji(t,e);if(n!==null){var i=Fn();Ai(n,t,e,i)}mh(t,e)}};wv=function(){return Ft};Tv=function(t,e){var n=Ft;try{return Ft=t,e()}finally{Ft=n}};bd=function(t,e,n){switch(e){case"input":if(_d(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Pc(i);if(!r)throw Error(_e(90));nv(i),_d(i,r)}}}break;case"textarea":rv(t,n);break;case"select":e=n.value,e!=null&&na(t,!!n.multiple,e,!1)}};dv=uh;fv=hs;var _S={usingClientEntryPoint:!1,Events:[Io,Xs,Pc,cv,uv,uh]},za={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xS={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mv(t),t===null?null:t.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||vS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{bc=el.inject(xS),Ui=el}catch{}}ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_S;ei.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vh(e))throw Error(_e(200));return gS(t,e,null,n)};ei.createRoot=function(t,e){if(!vh(t))throw Error(_e(299));var n=!1,i="",r=Xy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ph(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,yo(t.nodeType===8?t.parentNode:t),new gh(e)};ei.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_e(188)):(t=Object.keys(t).join(","),Error(_e(268,t)));return t=mv(e),t=t===null?null:t.stateNode,t};ei.flushSync=function(t){return hs(t)};ei.hydrate=function(t,e,n){if(!zc(e))throw Error(_e(200));return Bc(null,t,e,!0,n)};ei.hydrateRoot=function(t,e,n){if(!vh(t))throw Error(_e(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Xy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=$y(e,null,t,1,n??null,r,!1,s,a),t[Qi]=e.current,yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Oc(e)};ei.render=function(t,e,n){if(!zc(e))throw Error(_e(200));return Bc(null,t,e,!1,n)};ei.unmountComponentAtNode=function(t){if(!zc(t))throw Error(_e(40));return t._reactRootContainer?(hs(function(){Bc(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};ei.unstable_batchedUpdates=uh;ei.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zc(n))throw Error(_e(200));if(t==null||t._reactInternals===void 0)throw Error(_e(38));return Bc(t,e,n,!1,i)};ei.version="18.3.1-next-f1338f8080-20240426";function Yy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yy)}catch(t){console.error(t)}}Yy(),Yg.exports=ei;var SS=Yg.exports,Op=SS;fd.createRoot=Op.createRoot,fd.hydrateRoot=Op.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ao.apply(this,arguments)}var _r;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(_r||(_r={}));const zp="popstate";function MS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return af("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:mc(r)}return wS(e,n,null,t)}function qt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ES(){return Math.random().toString(36).substr(2,8)}function Bp(t,e){return{usr:t.state,key:t.key,idx:e}}function af(t,e,n,i){return n===void 0&&(n=null),Ao({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ba(e):e,{state:n,key:e&&e.key||i||ES()})}function mc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ba(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function wS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=_r.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(Ao({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=_r.Pop;let m=d(),u=m==null?null:m-c;c=m,l&&l({action:o,location:_.location,delta:u})}function h(m,u){o=_r.Push;let g=af(_.location,m,u);c=d()+1;let y=Bp(g,c),S=_.createHref(g);try{a.pushState(y,"",S)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;r.location.assign(S)}s&&l&&l({action:o,location:_.location,delta:1})}function v(m,u){o=_r.Replace;let g=af(_.location,m,u);c=d();let y=Bp(g,c),S=_.createHref(g);a.replaceState(y,"",S),s&&l&&l({action:o,location:_.location,delta:0})}function x(m){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof m=="string"?m:mc(m);return g=g.replace(/ $/,"%20"),qt(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let _={get action(){return o},get location(){return t(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(zp,f),l=m,()=>{r.removeEventListener(zp,f),l=null}},createHref(m){return e(r,m)},createURL:x,encodeLocation(m){let u=x(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:v,go(m){return a.go(m)}};return _}var Hp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Hp||(Hp={}));function TS(t,e,n){return n===void 0&&(n="/"),bS(t,e,n)}function bS(t,e,n,i){let r=typeof e=="string"?ba(e):e,s=va(r.pathname||"/",n);if(s==null)return null;let a=qy(t);AS(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=OS(s);o=FS(a[l],c)}return o}function qy(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(qt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Rr([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(qt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),qy(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:DS(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Ky(s.path))r(s,a,l)}),e}function Ky(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Ky(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function AS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:US(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const CS=/^:[\w-]+$/,RS=3,PS=2,NS=1,LS=10,IS=-2,jp=t=>t==="*";function DS(t,e){let n=t.split("/"),i=n.length;return n.some(jp)&&(i+=IS),e&&(i+=PS),n.filter(r=>!jp(r)).reduce((r,s)=>r+(CS.test(s)?RS:s===""?NS:LS),i)}function US(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function FS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=of({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Rr([s,f.pathname]),pathnameBase:GS(Rr([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Rr([s,f.pathnameBase]))}return a}function of(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=kS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let _=o[f]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const x=o[f];return v&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function kS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),yh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function OS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return yh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function va(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const zS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,BS=t=>zS.test(t);function HS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ba(t):t,s;if(n)if(BS(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),yh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Gp(n.substring(1),"/"):s=Gp(n,e)}else s=e;return{pathname:s,search:VS(i),hash:WS(r)}}function Gp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Mu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function _h(t,e){let n=jS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function xh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ba(t):(r=Ao({},t),qt(!r.pathname||!r.pathname.includes("?"),Mu("?","pathname","search",r)),qt(!r.pathname||!r.pathname.includes("#"),Mu("#","pathname","hash",r)),qt(!r.search||!r.search.includes("#"),Mu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=HS(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),GS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),VS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,WS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $S(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Zy=["post","put","patch","delete"];new Set(Zy);const XS=["get",...Zy];new Set(XS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Co.apply(this,arguments)}const Hc=R.createContext(null),Qy=R.createContext(null),ir=R.createContext(null),jc=R.createContext(null),rr=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Jy=R.createContext(null);function YS(t,e){let{relative:n}=e===void 0?{}:e;Aa()||qt(!1);let{basename:i,navigator:r}=R.useContext(ir),{hash:s,pathname:a,search:o}=Vc(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Rr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function Aa(){return R.useContext(jc)!=null}function sr(){return Aa()||qt(!1),R.useContext(jc).location}function e0(t){R.useContext(ir).static||R.useLayoutEffect(t)}function Gc(){let{isDataRoute:t}=R.useContext(rr);return t?cM():qS()}function qS(){Aa()||qt(!1);let t=R.useContext(Hc),{basename:e,future:n,navigator:i}=R.useContext(ir),{matches:r}=R.useContext(rr),{pathname:s}=sr(),a=JSON.stringify(_h(r,n.v7_relativeSplatPath)),o=R.useRef(!1);return e0(()=>{o.current=!0}),R.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=xh(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Rr([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,a,s,t])}const KS=R.createContext(null);function ZS(t){let e=R.useContext(rr).outlet;return e&&R.createElement(KS.Provider,{value:t},e)}function Vc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=R.useContext(ir),{matches:r}=R.useContext(rr),{pathname:s}=sr(),a=JSON.stringify(_h(r,i.v7_relativeSplatPath));return R.useMemo(()=>xh(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function QS(t,e){return JS(t,e)}function JS(t,e,n,i){Aa()||qt(!1);let{navigator:r}=R.useContext(ir),{matches:s}=R.useContext(rr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=sr(),d;if(e){var f;let m=typeof e=="string"?ba(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||qt(!1),d=m}else d=c;let h=d.pathname||"/",v=h;if(l!=="/"){let m=l.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=TS(t,{pathname:v}),_=rM(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Rr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Rr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&_?R.createElement(jc.Provider,{value:{location:Co({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:_r.Pop}},_):_}function eM(){let t=lM(),e=$S(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:r},n):null,null)}const tM=R.createElement(eM,null);class nM extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(rr.Provider,{value:this.props.routeContext},R.createElement(Jy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iM(t){let{routeContext:e,match:n,children:i}=t,r=R.useContext(Hc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(rr.Provider,{value:e},i)}function rM(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||qt(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:v}=n,x=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||x){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,f,h)=>{let v,x=!1,_=null,m=null;n&&(v=o&&f.route.id?o[f.route.id]:void 0,_=f.route.errorElement||tM,l&&(c<0&&h===0?(uM("route-fallback"),x=!0,m=null):c===h&&(x=!0,m=f.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,h+1)),g=()=>{let y;return v?y=_:x?y=m:f.route.Component?y=R.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=d,R.createElement(iM,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?R.createElement(nM,{location:n.location,revalidation:n.revalidation,component:_,error:v,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var t0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(t0||{}),n0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(n0||{});function sM(t){let e=R.useContext(Hc);return e||qt(!1),e}function aM(t){let e=R.useContext(Qy);return e||qt(!1),e}function oM(t){let e=R.useContext(rr);return e||qt(!1),e}function i0(t){let e=oM(),n=e.matches[e.matches.length-1];return n.route.id||qt(!1),n.route.id}function lM(){var t;let e=R.useContext(Jy),n=aM(),i=i0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function cM(){let{router:t}=sM(t0.UseNavigateStable),e=i0(n0.UseNavigateStable),n=R.useRef(!1);return e0(()=>{n.current=!0}),R.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Co({fromRouteId:e},s)))},[t,e])}const Vp={};function uM(t,e,n){Vp[t]||(Vp[t]=!0)}function dM(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function r0(t){let{to:e,replace:n,state:i,relative:r}=t;Aa()||qt(!1);let{future:s,static:a}=R.useContext(ir),{matches:o}=R.useContext(rr),{pathname:l}=sr(),c=Gc(),d=xh(e,_h(o,s.v7_relativeSplatPath),l,r==="path"),f=JSON.stringify(d);return R.useEffect(()=>c(JSON.parse(f),{replace:n,state:i,relative:r}),[c,f,r,n,i]),null}function fM(t){return ZS(t.context)}function _i(t){qt(!1)}function hM(t){let{basename:e="/",children:n=null,location:i,navigationType:r=_r.Pop,navigator:s,static:a=!1,future:o}=t;Aa()&&qt(!1);let l=e.replace(/^\/*/,"/"),c=R.useMemo(()=>({basename:l,navigator:s,static:a,future:Co({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=ba(i));let{pathname:d="/",search:f="",hash:h="",state:v=null,key:x="default"}=i,_=R.useMemo(()=>{let m=va(d,l);return m==null?null:{location:{pathname:m,search:f,hash:h,state:v,key:x},navigationType:r}},[l,d,f,h,v,x,r]);return _==null?null:R.createElement(ir.Provider,{value:c},R.createElement(jc.Provider,{children:n,value:_}))}function pM(t){let{children:e,location:n}=t;return QS(lf(e),n)}new Promise(()=>{});function lf(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(i,r)=>{if(!R.isValidElement(i))return;let s=[...e,r];if(i.type===R.Fragment){n.push.apply(n,lf(i.props.children,s));return}i.type!==_i&&qt(!1),!i.props.index||!i.props.children||qt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=lf(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gc(){return gc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gc.apply(this,arguments)}function s0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function mM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function gM(t,e){return t.button===0&&(!e||e==="_self")&&!mM(t)}const vM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],yM=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],_M="6";try{window.__reactRouterVersion=_M}catch{}const xM=R.createContext({isTransitioning:!1}),SM="startTransition",Wp=u_[SM];function MM(t){let{basename:e,children:n,future:i,window:r}=t,s=R.useRef();s.current==null&&(s.current=MS({window:r,v5Compat:!0}));let a=s.current,[o,l]=R.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=R.useCallback(f=>{c&&Wp?Wp(()=>l(f)):l(f)},[l,c]);return R.useLayoutEffect(()=>a.listen(d),[a,d]),R.useEffect(()=>dM(i),[i]),R.createElement(hM,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const EM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,TM=R.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,h=s0(e,vM),{basename:v}=R.useContext(ir),x,_=!1;if(typeof c=="string"&&wM.test(c)&&(x=c,EM))try{let y=new URL(window.location.href),S=c.startsWith("//")?new URL(y.protocol+c):new URL(c),w=va(S.pathname,v);S.origin===y.origin&&w!=null?c=w+S.search+S.hash:_=!0}catch{}let m=YS(c,{relative:r}),u=CM(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function g(y){i&&i(y),y.defaultPrevented||u(y)}return R.createElement("a",gc({},h,{href:x||m,onClick:_||s?i:g,ref:n,target:l}))}),bM=R.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:c,children:d}=e,f=s0(e,yM),h=Vc(l,{relative:f.relative}),v=sr(),x=R.useContext(Qy),{navigator:_,basename:m}=R.useContext(ir),u=x!=null&&RM(h)&&c===!0,g=_.encodeLocation?_.encodeLocation(h).pathname:h.pathname,y=v.pathname,S=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;r||(y=y.toLowerCase(),S=S?S.toLowerCase():null,g=g.toLowerCase()),S&&m&&(S=va(S,m)||S);const w=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let C=y===g||!a&&y.startsWith(g)&&y.charAt(w)==="/",N=S!=null&&(S===g||!a&&S.startsWith(g)&&S.charAt(g.length)==="/"),j={isActive:C,isPending:N,isTransitioning:u},ne=C?i:void 0,E;typeof s=="function"?E=s(j):E=[s,C?"active":null,N?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let I=typeof o=="function"?o(j):o;return R.createElement(TM,gc({},f,{"aria-current":ne,className:E,ref:n,style:I,to:l,viewTransition:c}),typeof d=="function"?d(j):d)});var cf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(cf||(cf={}));var $p;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})($p||($p={}));function AM(t){let e=R.useContext(Hc);return e||qt(!1),e}function CM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=Gc(),c=sr(),d=Vc(t,{relative:a});return R.useCallback(f=>{if(gM(f,n)){f.preventDefault();let h=i!==void 0?i:mc(c)===mc(d);l(t,{replace:h,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,d,i,r,n,t,s,a,o])}function RM(t,e){e===void 0&&(e={});let n=R.useContext(xM);n==null&&qt(!1);let{basename:i}=AM(cf.useViewTransitionState),r=Vc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=va(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=va(n.nextLocation.pathname,i)||n.nextLocation.pathname;return of(r.pathname,a)!=null||of(r.pathname,s)!=null}const Sh="reforgedz.session";function Pt(){const t=localStorage.getItem(Sh);if(!t)return null;try{const e=JSON.parse(t);return!e||typeof e.token!="string"||e.token.length===0?null:e}catch{return null}}function PM(t){localStorage.setItem(Sh,JSON.stringify(t))}function NM(){localStorage.removeItem(Sh)}function LM(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),n=(4-e.length%4)%4,i=e+"=".repeat(n);return atob(i)}function Mh(){const t=Pt();if(!t)return null;const e=String(t.token).split(".");if(e.length!==2)return null;try{const n=LM(e[0]),i=JSON.parse(n);return!i||typeof i.sub!="string"?null:i}catch{return null}}function mi(t){const e=Mh();if(!e)return!1;const n=e.tools;return!n||typeof n!="object"?t==="replay":!!n[t]}function Nt(){const t="https://admin.reforgedz.net";return t.length>0?t.replace(/\/$/,""):window.location.origin}async function IM(t,e){const n=Nt(),i=await fetch(`${n}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})});if(!i.ok){const r=await i.text();throw new Error(r||`Login failed (${i.status})`)}return await i.json()}async function a0(){const t=Nt(),e=Pt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to list servers (${n.status})`)}return await n.json()}async function uf(){const t=Nt(),e=Pt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/replay/statusAll`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to get replay status for all servers (${n.status})`)}return await n.json()}async function Xp(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/range?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get replay range (${i.status})`)}return await i.json()}async function Yp(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/players?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to list replay players (${i.status})`)}return await i.json()}async function tl(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=new URLSearchParams;i.set("serverId",t.serverId),typeof t.sinceTsMs=="number"&&i.set("sinceTsMs",String(t.sinceTsMs)),typeof t.untilTsMs=="number"&&i.set("untilTsMs",String(t.untilTsMs)),typeof t.limit=="number"&&i.set("limit",String(t.limit)),t.tail&&i.set("tail","1");const r=await fetch(`${e}/api/replay/events?${i.toString()}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!r.ok){const s=await r.text();throw new Error(s||`Failed to get replay events (${r.status})`)}return await r.json()}async function DM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/gmPing`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to send GM ping (${i.status})`)}return await i.json()}async function Eu(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapTerrain?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map terrain (${i.status})`)}return await i.json()}async function wu(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapDescriptors?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map descriptors (${i.status})`)}return await i.json()}async function UM(){const t=Nt(),e=Pt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/admin/users`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list users (${n.status})`);return await n.json()}async function FM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to create user (${i.status})`);return await i.json()}async function kM(t,e){const n=Nt(),i=Pt();if(!i)throw new Error("Not authenticated");const r=await fetch(`${n}/api/admin/users/${encodeURIComponent(t)}`,{method:"PUT",headers:{Authorization:`Bearer ${i.token}`,"Content-Type":"application/json"},body:JSON.stringify({tools:e})});if(!r.ok)throw new Error(await r.text()||`Failed to update user (${r.status})`);return await r.json()}async function OM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users/${encodeURIComponent(t)}`,{method:"DELETE",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to delete user (${i.status})`);return await i.json()}async function zM(){const t=Nt(),e=Pt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list dev servers (${n.status})`);return await n.json()}async function BM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to add dev server (${i.status})`);return await i.json()}async function HM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/clear?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to clear history (${i.status})`);return await i.json()}async function jM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/regenerateTerrain?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to regenerate terrain (${i.status})`);return await i.json()}async function GM(){const t=Nt(),e=Pt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/discordWebhook`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to load webhook (${n.status})`);return await n.json()}async function VM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/discordWebhook`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify({webhookUrl:t})});if(!i.ok)throw new Error(await i.text()||`Failed to save webhook (${i.status})`);return await i.json()}async function WM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/exportDiscord`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to export to Discord (${i.status})`);return await i.json()}async function $M(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/health?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to get server health (${i.status})`);return await i.json()}async function XM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/bans?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to get bans (${i.status})`);return await i.json()}async function YM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/bans`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to add ban (${i.status})`);return await i.json()}async function qM(t,e){const n=Nt(),i=Pt();if(!i)throw new Error("Not authenticated");const r=await fetch(`${n}/api/admin/bans/${encodeURIComponent(e)}?serverId=${encodeURIComponent(t)}`,{method:"DELETE",headers:{Authorization:`Bearer ${i.token}`}});if(!r.ok)throw new Error(await r.text()||`Failed to remove ban (${r.status})`);return await r.json()}async function KM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/mutes?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to get mutes (${i.status})`);return await i.json()}async function ZM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/mutes`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to add mute (${i.status})`);return await i.json()}async function QM(t,e){const n=Nt(),i=Pt();if(!i)throw new Error("Not authenticated");const r=await fetch(`${n}/api/admin/mutes/${encodeURIComponent(e)}?serverId=${encodeURIComponent(t)}`,{method:"DELETE",headers:{Authorization:`Bearer ${i.token}`}});if(!r.ok)throw new Error(await r.text()||`Failed to remove mute (${r.status})`);return await r.json()}async function JM(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/kick`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to kick player (${i.status})`);return await i.json()}async function eE(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/globalMessage`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to send global message (${i.status})`);return await i.json()}async function tE(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/players?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to get live players (${i.status})`);return await i.json()}async function o0(t){const e=Nt(),n=Pt();if(!n)throw new Error("Not authenticated");const i=new URLSearchParams;i.set("serverId",t.serverId),t.types&&i.set("types",t.types),typeof t.sinceTsMs=="number"&&i.set("sinceTsMs",String(t.sinceTsMs)),typeof t.untilTsMs=="number"&&i.set("untilTsMs",String(t.untilTsMs)),typeof t.limit=="number"&&i.set("limit",String(t.limit));const r=await fetch(`${e}/api/admin/events?${i.toString()}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!r.ok)throw new Error(await r.text()||`Failed to get event log (${r.status})`);return await r.json()}async function nE(t,e){const n=Nt(),i=Pt();if(!i)throw new Error("Not authenticated");const r=await fetch(`${n}/api/admin/player/${encodeURIComponent(e)}?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${i.token}`}});if(!r.ok)throw new Error(await r.text()||`Failed to get player profile (${r.status})`);return await r.json()}function iE(){const t=Gc(),e=sr(),n=R.useMemo(()=>{const h=e.state;return h&&typeof h.from=="string"&&h.from.length>0?h.from:"/"},[e.state]),[i,r]=R.useState(""),[s,a]=R.useState(""),[o,l]=R.useState(null),[c,d]=R.useState(!1);async function f(h){if(h.preventDefault(),l(null),i.trim().length===0||s.length===0){l("Enter username and password");return}d(!0);try{const v=await IM(i.trim(),s);PM({token:v.token}),t(n,{replace:!0})}catch(v){const x=v instanceof Error?v.message:"Login failed";l(x)}finally{d(!1)}}return p.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24,boxSizing:"border-box"},children:p.jsxs("div",{className:"stack",style:{width:"min(440px, 100%)",gap:14},children:[p.jsxs("div",{style:{textAlign:"center"},children:[p.jsx("div",{className:"label",children:"Welcome"}),p.jsx("h1",{className:"h1",style:{fontSize:22,marginTop:6},children:"ReforgedZ Admin Menu"}),p.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Sign in to continue."})]}),p.jsx("div",{className:"card",style:{padding:18},children:p.jsxs("form",{className:"stack",onSubmit:f,children:[p.jsxs("div",{className:"stack",style:{gap:8},children:[p.jsx("div",{className:"label",children:"Username"}),p.jsx("input",{className:"input",value:i,onChange:h=>r(h.target.value),autoComplete:"username"})]}),p.jsxs("div",{className:"stack",style:{gap:8},children:[p.jsx("div",{className:"label",children:"Password"}),p.jsx("input",{className:"input",type:"password",value:s,onChange:h=>a(h.target.value),autoComplete:"current-password"})]}),o?p.jsx("div",{className:"error",style:{fontSize:13},children:o}):null,p.jsx("button",{className:"button buttonPrimary",type:"submit",disabled:c,children:c?"Signing in…":"Sign in"}),p.jsx("div",{className:"muted",style:{fontSize:12},children:"If you aren't meant to be here, say hi to eiry, I know where you live!."})]})})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="161",rE=0,qp=1,sE=2,l0=1,aE=2,Gi=3,Fr=0,Xn=1,Ei=2,Pr=0,la=1,Kp=2,Zp=3,Qp=4,oE=5,Zr=100,lE=101,cE=102,Jp=103,em=104,uE=200,dE=201,fE=202,hE=203,df=204,ff=205,pE=206,mE=207,gE=208,vE=209,yE=210,_E=211,xE=212,SE=213,ME=214,EE=0,wE=1,TE=2,vc=3,bE=4,AE=5,CE=6,RE=7,c0=0,PE=1,NE=2,Nr=0,LE=1,IE=2,DE=3,UE=4,FE=5,kE=6,u0=300,ya=301,_a=302,hf=303,pf=304,Wc=306,mf=1e3,wi=1001,gf=1002,Un=1003,tm=1004,Ba=1005,Bn=1006,Tu=1007,ns=1008,Lr=1009,OE=1010,zE=1011,wh=1012,d0=1013,xr=1014,$i=1015,Ro=1016,f0=1017,h0=1018,ss=1020,BE=1021,Ti=1023,HE=1024,jE=1025,as=1026,xa=1027,GE=1028,p0=1029,VE=1030,m0=1031,g0=1033,bu=33776,Au=33777,Cu=33778,Ru=33779,nm=35840,im=35841,rm=35842,sm=35843,v0=36196,am=37492,om=37496,lm=37808,cm=37809,um=37810,dm=37811,fm=37812,hm=37813,pm=37814,mm=37815,gm=37816,vm=37817,ym=37818,_m=37819,xm=37820,Sm=37821,Pu=36492,Mm=36494,Em=36495,WE=36283,wm=36284,Tm=36285,bm=36286,y0=3e3,os=3001,$E=3200,XE=3201,_0=0,YE=1,oi="",xn="srgb",tr="srgb-linear",Th="display-p3",$c="display-p3-linear",yc="linear",Gt="srgb",_c="rec709",xc="p3",Ss=7680,Am=519,qE=512,KE=513,ZE=514,x0=515,QE=516,JE=517,ew=518,tw=519,vf=35044,Cm="300 es",yf=1035,qi=2e3,Sc=2001;class Ca{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gl=Math.PI/180,_f=180/Math.PI;function Ir(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[t&255]+Cn[t>>8&255]+Cn[t>>16&255]+Cn[t>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[n&63|128]+Cn[n>>8&255]+"-"+Cn[n>>16&255]+Cn[n>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function jn(t,e,n){return Math.max(e,Math.min(n,t))}function nw(t,e){return(t%e+e)%e}function Nu(t,e,n){return(1-n)*t+n*e}function Rm(t){return(t&t-1)===0&&t!==0}function xf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Di(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Ot(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,n=0){vt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,n,i,r,s,a,o,l,c){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],v=i[5],x=i[8],_=r[0],m=r[3],u=r[6],g=r[1],y=r[4],S=r[7],w=r[2],C=r[5],N=r[8];return s[0]=a*_+o*g+l*w,s[3]=a*m+o*y+l*C,s[6]=a*u+o*S+l*N,s[1]=c*_+d*g+f*w,s[4]=c*m+d*y+f*C,s[7]=c*u+d*S+f*N,s[2]=h*_+v*g+x*w,s[5]=h*m+v*y+x*C,s[8]=h*u+v*S+x*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,v=c*s-a*l,x=n*f+i*h+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*c-d*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=v*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Lu.makeScale(e,n)),this}rotate(e){return this.premultiply(Lu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lu=new xt;function S0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iw(){const t=Mc("canvas");return t.style.display="block",t}const Pm={};function ls(t){t in Pm||(Pm[t]=!0,console.warn(t))}const Nm=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lm=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),nl={[tr]:{transfer:yc,primaries:_c,toReference:t=>t,fromReference:t=>t},[xn]:{transfer:Gt,primaries:_c,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[$c]:{transfer:yc,primaries:xc,toReference:t=>t.applyMatrix3(Lm),fromReference:t=>t.applyMatrix3(Nm)},[Th]:{transfer:Gt,primaries:xc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Lm),fromReference:t=>t.applyMatrix3(Nm).convertLinearToSRGB()}},rw=new Set([tr,$c]),zt={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!rw.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=nl[e].toReference,r=nl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return nl[t].primaries},getTransfer:function(t){return t===oi?yc:nl[t].transfer}};function ca(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Iu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ms;class M0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=Mc("canvas")),Ms.width=e.width,Ms.height=e.height;const i=Ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ms}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ca(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ca(n[i]/255)*255):n[i]=ca(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sw=0;class E0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sw++}),this.uuid=Ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Du(r[a].image)):s.push(Du(r[a]))}else s=Du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?M0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aw=0;class kn extends Ca{constructor(e=kn.DEFAULT_IMAGE,n=kn.DEFAULT_MAPPING,i=wi,r=wi,s=Bn,a=ns,o=Ti,l=Lr,c=kn.DEFAULT_ANISOTROPY,d=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aw++}),this.uuid=Ir(),this.name="",this.source=new E0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===os?xn:oi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mf:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mf:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xn?os:y0}set encoding(e){ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===os?xn:oi}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=u0;kn.DEFAULT_ANISOTROPY=1;class vn{constructor(e=0,n=0,i=0,r=1){vn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],v=l[5],x=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(x+m)<.1&&Math.abs(c+v+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(v+1)/2,w=(u+1)/2,C=(d+h)/4,N=(f+_)/4,j=(x+m)/4;return y>S&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=N/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=j/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=N/s,r=j/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-x)*(m-x)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(f-_)/g,this.z=(h-d)/g,this.w=Math.acos((c+v+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ow extends Ca{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new vn(0,0,e,n),this.scissorTest=!1,this.viewport=new vn(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ls("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===os?xn:oi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new kn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new E0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends ow{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class w0 extends kn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lw extends kn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[a+0],v=s[a+1],x=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=v,e[n+2]=x,e[n+3]=_;return}if(f!==_||l!==h||c!==v||d!==x){let m=1-o;const u=l*h+c*v+d*x+f*_,g=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const w=Math.sqrt(y),C=Math.atan2(w,u*g);m=Math.sin(m*C)/w,o=Math.sin(o*C)/w}const S=o*g;if(l=l*m+h*S,c=c*m+v*S,d=d*m+x*S,f=f*m+_*S,m===1-o){const w=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=w,c*=w,d*=w,f*=w}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],v=s[a+2],x=s[a+3];return e[n]=o*x+d*f+l*v-c*h,e[n+1]=l*x+d*h+c*f-o*v,e[n+2]=c*x+d*v+o*h-l*f,e[n+3]=d*x-o*f-l*h-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),v=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*v*x,this._y=c*v*f-h*d*x,this._z=c*d*x+h*v*f,this._w=c*d*f-h*v*x;break;case"YXZ":this._x=h*d*f+c*v*x,this._y=c*v*f-h*d*x,this._z=c*d*x-h*v*f,this._w=c*d*f+h*v*x;break;case"ZXY":this._x=h*d*f-c*v*x,this._y=c*v*f+h*d*x,this._z=c*d*x+h*v*f,this._w=c*d*f-h*v*x;break;case"ZYX":this._x=h*d*f-c*v*x,this._y=c*v*f+h*d*x,this._z=c*d*x-h*v*f,this._w=c*d*f+h*v*x;break;case"YZX":this._x=h*d*f+c*v*x,this._y=c*v*f+h*d*x,this._z=c*d*x-h*v*f,this._w=c*d*f-h*v*x;break;case"XZY":this._x=h*d*f-c*v*x,this._y=c*v*f-h*d*x,this._z=c*d*x+h*v*f,this._w=c*d*f+h*v*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const v=.5/Math.sqrt(h+1);this._w=.25/v,this._x=(d-l)*v,this._y=(s-c)*v,this._z=(a-r)*v}else if(i>o&&i>f){const v=2*Math.sqrt(1+i-o-f);this._w=(d-l)/v,this._x=.25*v,this._y=(r+a)/v,this._z=(s+c)/v}else if(o>f){const v=2*Math.sqrt(1+o-i-f);this._w=(s-c)/v,this._x=(r+a)/v,this._y=.25*v,this._z=(l+d)/v}else{const v=2*Math.sqrt(1+f-i-o);this._w=(a-r)/v,this._x=(s+c)/v,this._y=(l+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const v=1-n;return this._w=v*a+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Im.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Im.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uu=new G,Im=new ms;class Uo{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(gi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(gi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=gi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gi):gi.fromBufferAttribute(s,a),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),il.copy(i.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),rl.subVectors(this.max,Ha),Es.subVectors(e.a,Ha),ws.subVectors(e.b,Ha),Ts.subVectors(e.c,Ha),or.subVectors(ws,Es),lr.subVectors(Ts,ws),Hr.subVectors(Es,Ts);let n=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Hr.z,Hr.y,or.z,0,-or.x,lr.z,0,-lr.x,Hr.z,0,-Hr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Hr.y,Hr.x,0];return!Fu(n,Es,ws,Ts,rl)||(n=[1,0,0,0,1,0,0,0,1],!Fu(n,Es,ws,Ts,rl))?!1:(sl.crossVectors(or,lr),n=[sl.x,sl.y,sl.z],Fu(n,Es,ws,Ts,rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new G,new G,new G,new G,new G,new G,new G,new G],gi=new G,il=new Uo,Es=new G,ws=new G,Ts=new G,or=new G,lr=new G,Hr=new G,Ha=new G,rl=new G,sl=new G,jr=new G;function Fu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){jr.fromArray(t,s);const o=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=e.dot(jr),c=n.dot(jr),d=i.dot(jr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const cw=new Uo,ja=new G,ku=new G;class Xc{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):cw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);const n=ja.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ja,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add(ku)),this.expandByPoint(ja.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new G,Ou=new G,al=new G,cr=new G,zu=new G,ol=new G,Bu=new G;class T0{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ou.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Ou);const s=e.distanceTo(n)*.5,a=-this.direction.dot(al),o=cr.dot(this.direction),l=-cr.dot(al),c=cr.lengthSq(),d=Math.abs(1-a*a);let f,h,v,x;if(d>0)if(f=a*l-o,h=a*o-l,x=s*d,f>=0)if(h>=-x)if(h<=x){const _=1/d;f*=_,h*=_,v=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),v=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),v=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),v=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),v=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),v=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),v=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ou).addScaledVector(al,h),v}intersectSphere(e,n){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,n,i,r,s){zu.subVectors(n,e),ol.subVectors(i,e),Bu.crossVectors(zu,ol);let a=this.direction.dot(Bu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cr.subVectors(this.origin,e);const l=o*this.direction.dot(ol.crossVectors(cr,ol));if(l<0)return null;const c=o*this.direction.dot(zu.cross(cr));if(c<0||l+c>a)return null;const d=-o*cr.dot(Bu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,n,i,r,s,a,o,l,c,d,f,h,v,x,_,m){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,v,x,_,m)}set(e,n,i,r,s,a,o,l,c,d,f,h,v,x,_,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=v,u[7]=x,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/bs.setFromMatrixColumn(e,0).length(),s=1/bs.setFromMatrixColumn(e,1).length(),a=1/bs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,v=a*f,x=o*d,_=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=v+x*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=x+v*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,v=l*f,x=c*d,_=c*f;n[0]=h+_*o,n[4]=x*o-v,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=v*o-x,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,v=l*f,x=c*d,_=c*f;n[0]=h-_*o,n[4]=-a*f,n[8]=x+v*o,n[1]=v+x*o,n[5]=a*d,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,v=a*f,x=o*d,_=o*f;n[0]=l*d,n[4]=x*c-v,n[8]=h*c+_,n[1]=l*f,n[5]=_*c+h,n[9]=v*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,v=a*c,x=o*l,_=o*c;n[0]=l*d,n[4]=_-h*f,n[8]=x*f+v,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=v*f+x,n[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,v=a*c,x=o*l,_=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+_,n[5]=a*d,n[9]=v*f-x,n[2]=x*f-v,n[6]=o*d,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uw,e,dw)}lookAt(e,n,i){const r=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),ur.crossVectors(i,Yn),ur.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),ur.crossVectors(i,Yn)),ur.normalize(),ll.crossVectors(Yn,ur),r[0]=ur.x,r[4]=ll.x,r[8]=Yn.x,r[1]=ur.y,r[5]=ll.y,r[9]=Yn.y,r[2]=ur.z,r[6]=ll.z,r[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],v=i[13],x=i[2],_=i[6],m=i[10],u=i[14],g=i[3],y=i[7],S=i[11],w=i[15],C=r[0],N=r[4],j=r[8],ne=r[12],E=r[1],I=r[5],te=r[9],oe=r[13],z=r[2],ee=r[6],Q=r[10],le=r[14],H=r[3],Y=r[7],Z=r[11],ae=r[15];return s[0]=a*C+o*E+l*z+c*H,s[4]=a*N+o*I+l*ee+c*Y,s[8]=a*j+o*te+l*Q+c*Z,s[12]=a*ne+o*oe+l*le+c*ae,s[1]=d*C+f*E+h*z+v*H,s[5]=d*N+f*I+h*ee+v*Y,s[9]=d*j+f*te+h*Q+v*Z,s[13]=d*ne+f*oe+h*le+v*ae,s[2]=x*C+_*E+m*z+u*H,s[6]=x*N+_*I+m*ee+u*Y,s[10]=x*j+_*te+m*Q+u*Z,s[14]=x*ne+_*oe+m*le+u*ae,s[3]=g*C+y*E+S*z+w*H,s[7]=g*N+y*I+S*ee+w*Y,s[11]=g*j+y*te+S*Q+w*Z,s[15]=g*ne+y*oe+S*le+w*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],v=e[14],x=e[3],_=e[7],m=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*v-i*l*v)+_*(+n*l*v-n*c*h+s*a*h-r*a*v+r*c*d-s*l*d)+m*(+n*c*f-n*o*v-s*a*f+i*a*v+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],v=e[11],x=e[12],_=e[13],m=e[14],u=e[15],g=f*m*c-_*h*c+_*l*v-o*m*v-f*l*u+o*h*u,y=x*h*c-d*m*c-x*l*v+a*m*v+d*l*u-a*h*u,S=d*_*c-x*f*c+x*o*v-a*_*v-d*o*u+a*f*u,w=x*f*l-d*_*l-x*o*h+a*_*h+d*o*m-a*f*m,C=n*g+i*y+r*S+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=g*N,e[1]=(_*h*s-f*m*s-_*r*v+i*m*v+f*r*u-i*h*u)*N,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*u+i*l*u)*N,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*v-i*l*v)*N,e[4]=y*N,e[5]=(d*m*s-x*h*s+x*r*v-n*m*v-d*r*u+n*h*u)*N,e[6]=(x*l*s-a*m*s-x*r*c+n*m*c+a*r*u-n*l*u)*N,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*v+n*l*v)*N,e[8]=S*N,e[9]=(x*f*s-d*_*s-x*i*v+n*_*v+d*i*u-n*f*u)*N,e[10]=(a*_*s-x*o*s+x*i*c-n*_*c-a*i*u+n*o*u)*N,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*v-n*o*v)*N,e[12]=w*N,e[13]=(d*_*r-x*f*r+x*i*h-n*_*h-d*i*m+n*f*m)*N,e[14]=(x*o*r-a*_*r-x*i*l+n*_*l+a*i*m-n*o*m)*N,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*N,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,v=s*d,x=s*f,_=a*d,m=a*f,u=o*f,g=l*c,y=l*d,S=l*f,w=i.x,C=i.y,N=i.z;return r[0]=(1-(_+u))*w,r[1]=(v+S)*w,r[2]=(x-y)*w,r[3]=0,r[4]=(v-S)*C,r[5]=(1-(h+u))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(x+y)*N,r[9]=(m-g)*N,r[10]=(1-(h+_))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=bs.set(r[0],r[1],r[2]).length();const a=bs.set(r[4],r[5],r[6]).length(),o=bs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vi.copy(this);const c=1/s,d=1/a,f=1/o;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=d,vi.elements[5]*=d,vi.elements[6]*=d,vi.elements[8]*=f,vi.elements[9]*=f,vi.elements[10]*=f,n.setFromRotationMatrix(vi),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=qi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let v,x;if(o===qi)v=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Sc)v=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=qi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),h=(n+e)*c,v=(i+r)*d;let x,_;if(o===qi)x=(a+s)*f,_=-2*f;else if(o===Sc)x=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const bs=new G,vi=new nn,uw=new G(0,0,0),dw=new G(1,1,1),ur=new G,ll=new G,Yn=new G,Dm=new nn,Um=new ms;class Fo{constructor(e=0,n=0,i=0,r=Fo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(jn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(jn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,v));break;case"XZY":this._z=Math.asin(-jn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fo.DEFAULT_ORDER="XYZ";class b0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fw=0;const Fm=new G,As=new ms,Bi=new nn,cl=new G,Ga=new G,hw=new G,pw=new ms,km=new G(1,0,0),Om=new G(0,1,0),zm=new G(0,0,1),mw={type:"added"},gw={type:"removed"};class un extends Ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fw++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new G,n=new Fo,i=new ms,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nn},normalMatrix:{value:new xt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(zm,e)}translateOnAxis(e,n){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cl.copy(e):cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Ga,cl,this.up):Bi.lookAt(cl,Ga,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),As.setFromRotationMatrix(Bi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gw)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,hw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,pw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),v=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),v.length>0&&(i.animations=v),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new G(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new G,Hi=new G,Hu=new G,ji=new G,Cs=new G,Rs=new G,Bm=new G,ju=new G,Gu=new G,Vu=new G;class li{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),yi.subVectors(e,n),r.cross(yi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){yi.subVectors(r,n),Hi.subVectors(i,n),Hu.subVectors(e,n);const a=yi.dot(yi),o=yi.dot(Hi),l=yi.dot(Hu),c=Hi.dot(Hi),d=Hi.dot(Hu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,v=(c*l-o*d)*h,x=(a*d-o*l)*h;return s.set(1-v-x,x,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ji.x),l.addScaledVector(a,ji.y),l.addScaledVector(o,ji.z),l)}static isFrontFacing(e,n,i,r){return yi.subVectors(i,n),Hi.subVectors(e,n),yi.cross(Hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),yi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return li.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Cs.subVectors(r,i),Rs.subVectors(s,i),ju.subVectors(e,i);const l=Cs.dot(ju),c=Rs.dot(ju);if(l<=0&&c<=0)return n.copy(i);Gu.subVectors(e,r);const d=Cs.dot(Gu),f=Rs.dot(Gu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Cs,a);Vu.subVectors(e,s);const v=Cs.dot(Vu),x=Rs.dot(Vu);if(x>=0&&v<=x)return n.copy(s);const _=v*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Rs,o);const m=d*x-v*f;if(m<=0&&f-d>=0&&v-x>=0)return Bm.subVectors(s,r),o=(f-d)/(f-d+(v-x)),n.copy(r).addScaledVector(Bm,o);const u=1/(m+_+h);return a=_*u,o=h*u,n.copy(i).addScaledVector(Cs,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const A0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=zt.workingColorSpace){return this.r=e,this.g=n,this.b=i,zt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=zt.workingColorSpace){if(e=nw(e,1),n=jn(n,0,1),i=jn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Wu(a,s,e+1/3),this.g=Wu(a,s,e),this.b=Wu(a,s,e-1/3)}return zt.toWorkingColorSpace(this,r),this}setStyle(e,n=xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xn){const i=A0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=Iu(e.r),this.g=Iu(e.g),this.b=Iu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return zt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(jn(Rn.r*255,0,255))*65536+Math.round(jn(Rn.g*255,0,255))*256+Math.round(jn(Rn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=zt.workingColorSpace){zt.fromWorkingColorSpace(Rn.copy(this),n);const i=Rn.r,r=Rn.g,s=Rn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=zt.workingColorSpace){return zt.fromWorkingColorSpace(Rn.copy(this),n),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=xn){zt.fromWorkingColorSpace(Rn.copy(this),e);const n=Rn.r,i=Rn.g,r=Rn.b;return e!==xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(ul);const i=Nu(dr.h,ul.h,n),r=Nu(dr.s,ul.s,n),s=Nu(dr.l,ul.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new pt;pt.NAMES=A0;let vw=0;class ys extends Ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vw++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=la,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=df,this.blendDst=ff,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==la&&(i.blending=this.blending),this.side!==Fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==df&&(i.blendSrc=this.blendSrc),this.blendDst!==ff&&(i.blendDst=this.blendDst),this.blendEquation!==Zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class C0 extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=c0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new G,dl=new vt;class Sn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ls("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)dl.fromBufferAttribute(this,n),dl.applyMatrix3(e),this.setXY(n,dl.x,dl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix3(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(e),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.transformDirection(e),this.setXYZ(n,an.x,an.y,an.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Di(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Di(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Di(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Di(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Di(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vf&&(e.usage=this.usage),e}}class R0 extends Sn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class P0 extends Sn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wn extends Sn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let yw=0;const ni=new nn,$u=new un,Ps=new G,qn=new Uo,Va=new Uo,pn=new G;class Mn extends Ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yw++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S0(e)?P0:R0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new xt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,i){return ni.makeTranslation(e,n,i),this.applyMatrix4(ni),this}scale(e,n,i){return ni.makeScale(e,n,i),this.applyMatrix4(ni),this}lookAt(e){return $u.lookAt(e),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Uo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Va.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(qn.min,Va.min),qn.expandByPoint(pn),pn.addVectors(qn.max,Va.max),qn.expandByPoint(pn)):(qn.expandByPoint(Va.min),qn.expandByPoint(Va.max))}qn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)pn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pn));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)pn.fromBufferAttribute(o,c),l&&(Ps.fromBufferAttribute(e,c),pn.add(Ps)),r=Math.max(r,i.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let E=0;E<o;E++)c[E]=new G,d[E]=new G;const f=new G,h=new G,v=new G,x=new vt,_=new vt,m=new vt,u=new G,g=new G;function y(E,I,te){f.fromArray(r,E*3),h.fromArray(r,I*3),v.fromArray(r,te*3),x.fromArray(a,E*2),_.fromArray(a,I*2),m.fromArray(a,te*2),h.sub(f),v.sub(f),_.sub(x),m.sub(x);const oe=1/(_.x*m.y-m.x*_.y);isFinite(oe)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(v,-_.y).multiplyScalar(oe),g.copy(v).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(oe),c[E].add(u),c[I].add(u),c[te].add(u),d[E].add(g),d[I].add(g),d[te].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let E=0,I=S.length;E<I;++E){const te=S[E],oe=te.start,z=te.count;for(let ee=oe,Q=oe+z;ee<Q;ee+=3)y(i[ee+0],i[ee+1],i[ee+2])}const w=new G,C=new G,N=new G,j=new G;function ne(E){N.fromArray(s,E*3),j.copy(N);const I=c[E];w.copy(I),w.sub(N.multiplyScalar(N.dot(I))).normalize(),C.crossVectors(j,I);const oe=C.dot(d[E])<0?-1:1;l[E*4]=w.x,l[E*4+1]=w.y,l[E*4+2]=w.z,l[E*4+3]=oe}for(let E=0,I=S.length;E<I;++E){const te=S[E],oe=te.start,z=te.count;for(let ee=oe,Q=oe+z;ee<Q;ee+=3)ne(i[ee+0]),ne(i[ee+1]),ne(i[ee+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,v=i.count;h<v;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,d=new G,f=new G;if(e)for(let h=0,v=e.count;h<v;h+=3){const x=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,v=n.count;h<v;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)pn.fromBufferAttribute(e,n),pn.normalize(),e.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let v=0,x=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?v=l[_]*o.data.stride+o.offset:v=l[_]*d;for(let u=0;u<d;u++)h[x++]=c[v++]}return new Sn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],v=e(h,i);l.push(v)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const v=c[f];d.push(v.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,v=f.length;h<v;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hm=new nn,Gr=new T0,fl=new Xc,jm=new G,Ns=new G,Ls=new G,Is=new G,Xu=new G,hl=new G,pl=new vt,ml=new vt,gl=new vt,Gm=new G,Vm=new G,Wm=new G,vl=new G,yl=new G;class ui extends un{constructor(e=new Mn,n=new C0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(Xu.fromBufferAttribute(f,e),a?hl.addScaledVector(Xu,d):hl.addScaledVector(Xu.sub(n),d))}n.add(hl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),Gr.copy(e.ray).recast(e.near),!(fl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(fl,jm)===null||Gr.origin.distanceToSquared(jm)>(e.far-e.near)**2))&&(Hm.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(Hm),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,v=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){const m=h[x],u=a[m.materialIndex],g=Math.max(m.start,v.start),y=Math.min(o.count,Math.min(m.start+m.count,v.start+v.count));for(let S=g,w=y;S<w;S+=3){const C=o.getX(S),N=o.getX(S+1),j=o.getX(S+2);r=_l(this,u,e,i,c,d,f,C,N,j),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,v.start),_=Math.min(o.count,v.start+v.count);for(let m=x,u=_;m<u;m+=3){const g=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);r=_l(this,a,e,i,c,d,f,g,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){const m=h[x],u=a[m.materialIndex],g=Math.max(m.start,v.start),y=Math.min(l.count,Math.min(m.start+m.count,v.start+v.count));for(let S=g,w=y;S<w;S+=3){const C=S,N=S+1,j=S+2;r=_l(this,u,e,i,c,d,f,C,N,j),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,v.start),_=Math.min(l.count,v.start+v.count);for(let m=x,u=_;m<u;m+=3){const g=m,y=m+1,S=m+2;r=_l(this,a,e,i,c,d,f,g,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function _w(t,e,n,i,r,s,a,o){let l;if(e.side===Xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Fr,o),l===null)return null;yl.copy(o),yl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(yl);return c<n.near||c>n.far?null:{distance:c,point:yl.clone(),object:t}}function _l(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ns),t.getVertexPosition(l,Ls),t.getVertexPosition(c,Is);const d=_w(t,e,n,i,Ns,Ls,Is,vl);if(d){r&&(pl.fromBufferAttribute(r,o),ml.fromBufferAttribute(r,l),gl.fromBufferAttribute(r,c),d.uv=li.getInterpolation(vl,Ns,Ls,Is,pl,ml,gl,new vt)),s&&(pl.fromBufferAttribute(s,o),ml.fromBufferAttribute(s,l),gl.fromBufferAttribute(s,c),d.uv1=li.getInterpolation(vl,Ns,Ls,Is,pl,ml,gl,new vt),d.uv2=d.uv1),a&&(Gm.fromBufferAttribute(a,o),Vm.fromBufferAttribute(a,l),Wm.fromBufferAttribute(a,c),d.normal=li.getInterpolation(vl,Ns,Ls,Is,Gm,Vm,Wm,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};li.getNormal(Ns,Ls,Is,f.normal),d.face=f}return d}class ko extends Mn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,v=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(d,3)),this.setAttribute("uv",new wn(f,2));function x(_,m,u,g,y,S,w,C,N,j,ne){const E=S/N,I=w/j,te=S/2,oe=w/2,z=C/2,ee=N+1,Q=j+1;let le=0,H=0;const Y=new G;for(let Z=0;Z<Q;Z++){const ae=Z*I-oe;for(let pe=0;pe<ee;pe++){const Ze=pe*E-te;Y[_]=Ze*g,Y[m]=ae*y,Y[u]=z,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[u]=C>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(pe/N),f.push(1-Z/j),le+=1}}for(let Z=0;Z<j;Z++)for(let ae=0;ae<N;ae++){const pe=h+ae+ee*Z,Ze=h+ae+ee*(Z+1),J=h+(ae+1)+ee*(Z+1),ue=h+(ae+1)+ee*Z;l.push(pe,Ze,ue),l.push(Ze,J,ue),H+=6}o.addGroup(v,H,ne),v+=H,h+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function In(t){const e={};for(let n=0;n<t.length;n++){const i=Sa(t[n]);for(const r in i)e[r]=i[r]}return e}function xw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function N0(t){return t.getRenderTarget()===null?t.outputColorSpace:zt.workingColorSpace}const Sw={clone:Sa,merge:In};var Mw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ew=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mw,this.fragmentShader=Ew,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sa(e.uniforms),this.uniformsGroups=xw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class L0 extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=qi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new G,$m=new vt,Xm=new vt;class ai extends L0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _f*2*Math.atan(Math.tan(Gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,$m,Xm),n.subVectors(Xm,$m)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Us=1;class ww extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ai(Ds,Us,e,n);r.layers=this.layers,this.add(r);const s=new ai(Ds,Us,e,n);s.layers=this.layers,this.add(s);const a=new ai(Ds,Us,e,n);a.layers=this.layers,this.add(a);const o=new ai(Ds,Us,e,n);o.layers=this.layers,this.add(o);const l=new ai(Ds,Us,e,n);l.layers=this.layers,this.add(l);const c=new ai(Ds,Us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,v),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class I0 extends kn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ya,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tw extends ps{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ls("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===os?xn:oi),this.texture=new I0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ko(5,5,5),s=new kr({name:"CubemapFromEquirect",uniforms:Sa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:Pr});s.uniforms.tEquirect.value=n;const a=new ui(r,s),o=n.minFilter;return n.minFilter===ns&&(n.minFilter=Bn),new ww(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Yu=new G,bw=new G,Aw=new xt;class qr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yu.subVectors(i,n).cross(bw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Aw.getNormalMatrix(e),r=this.coplanarPoint(Yu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Xc,xl=new G;class bh{constructor(e=new qr,n=new qr,i=new qr,r=new qr,s=new qr,a=new qr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=qi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],v=r[8],x=r[9],_=r[10],m=r[11],u=r[12],g=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-v,S-u).normalize(),i[1].setComponents(l+s,h+c,m+v,S+u).normalize(),i[2].setComponents(l+a,h+d,m+x,S+g).normalize(),i[3].setComponents(l-a,h-d,m-x,S-g).normalize(),i[4].setComponents(l-o,h-f,m-_,S-y).normalize(),n===qi)i[5].setComponents(l+o,h+f,m+_,S+y).normalize();else if(n===Sc)i[5].setComponents(o,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function D0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Cw(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,v=f.byteLength,x=t.createBuffer();t.bindBuffer(d,x),t.bufferData(d,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:v}}function s(c,d,f){const h=d.array,v=d._updateRange,x=d.updateRanges;if(t.bindBuffer(f,c),v.count===-1&&x.length===0&&t.bufferSubData(f,0,h),x.length!==0){for(let _=0,m=x.length;_<m;_++){const u=x[_];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}v.count!==-1&&(n?t.bufferSubData(f,v.offset*h.BYTES_PER_ELEMENT,h,v.offset,v.count):t.bufferSubData(f,v.offset*h.BYTES_PER_ELEMENT,h.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:a,remove:o,update:l}}class Ma extends Mn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,v=[],x=[],_=[],m=[];for(let u=0;u<d;u++){const g=u*h-a;for(let y=0;y<c;y++){const S=y*f-s;x.push(S,-g,0),_.push(0,0,1),m.push(y/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const y=g+c*u,S=g+c*(u+1),w=g+1+c*(u+1),C=g+1+c*u;v.push(y,S,C),v.push(S,w,C)}this.setIndex(v),this.setAttribute("position",new wn(x,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pw=`#ifdef USE_ALPHAHASH
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
#endif`,Nw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uw=`#ifdef USE_AOMAP
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
#endif`,Fw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kw=`#ifdef USE_BATCHING
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
#endif`,Ow=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jw=`#ifdef USE_IRIDESCENCE
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
#endif`,Gw=`#ifdef USE_BUMPMAP
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
#endif`,Vw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ww=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qw=`#define PI 3.141592653589793
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
} // validated`,Jw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e1=`vec3 transformedNormal = objectNormal;
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
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s1="gl_FragColor = linearToOutputTexel( gl_FragColor );",a1=`
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
}`,o1=`#ifdef USE_ENVMAP
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
#endif`,l1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g1=`#ifdef USE_GRADIENTMAP
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
}`,v1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S1=`uniform bool receiveShadow;
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
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,E1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A1=`PhysicalMaterial material;
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
#endif`,C1=`struct PhysicalMaterial {
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
}`,R1=`
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
#endif`,P1=`#if defined( RE_IndirectDiffuse )
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
#endif`,N1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,U1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,F1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z1=`#if defined( USE_POINTS_UV )
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
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G1=`#ifdef USE_MORPHNORMALS
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
#endif`,V1=`#ifdef USE_MORPHTARGETS
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
#endif`,W1=`#ifdef USE_MORPHTARGETS
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
#endif`,$1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z1=`#ifdef USE_NORMALMAP
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
#endif`,Q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hT=`float getShadowMask() {
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
}`,pT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mT=`#ifdef USE_SKINNING
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
#endif`,gT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vT=`#ifdef USE_SKINNING
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
#endif`,yT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_T=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ST=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MT=`#ifdef USE_TRANSMISSION
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
#endif`,ET=`#ifdef USE_TRANSMISSION
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
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RT=`uniform sampler2D t2D;
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
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`#include <common>
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
}`,UT=`#if DEPTH_PACKING == 3200
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
}`,FT=`#define DISTANCE
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
}`,kT=`#define DISTANCE
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
}`,OT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`uniform float scale;
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
}`,HT=`uniform vec3 diffuse;
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
}`,jT=`#include <common>
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
}`,GT=`uniform vec3 diffuse;
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
}`,VT=`#define LAMBERT
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
}`,WT=`#define LAMBERT
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
}`,$T=`#define MATCAP
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
}`,XT=`#define MATCAP
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
}`,YT=`#define NORMAL
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
}`,qT=`#define NORMAL
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
}`,KT=`#define PHONG
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
}`,ZT=`#define PHONG
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
}`,QT=`#define STANDARD
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
}`,JT=`#define STANDARD
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
}`,eb=`#define TOON
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
}`,tb=`#define TOON
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
}`,nb=`uniform float size;
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
}`,ib=`uniform vec3 diffuse;
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
}`,rb=`#include <common>
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
}`,sb=`uniform vec3 color;
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
}`,ab=`uniform float rotation;
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
}`,ob=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Rw,alphahash_pars_fragment:Pw,alphamap_fragment:Nw,alphamap_pars_fragment:Lw,alphatest_fragment:Iw,alphatest_pars_fragment:Dw,aomap_fragment:Uw,aomap_pars_fragment:Fw,batching_pars_vertex:kw,batching_vertex:Ow,begin_vertex:zw,beginnormal_vertex:Bw,bsdfs:Hw,iridescence_fragment:jw,bumpmap_pars_fragment:Gw,clipping_planes_fragment:Vw,clipping_planes_pars_fragment:Ww,clipping_planes_pars_vertex:$w,clipping_planes_vertex:Xw,color_fragment:Yw,color_pars_fragment:qw,color_pars_vertex:Kw,color_vertex:Zw,common:Qw,cube_uv_reflection_fragment:Jw,defaultnormal_vertex:e1,displacementmap_pars_vertex:t1,displacementmap_vertex:n1,emissivemap_fragment:i1,emissivemap_pars_fragment:r1,colorspace_fragment:s1,colorspace_pars_fragment:a1,envmap_fragment:o1,envmap_common_pars_fragment:l1,envmap_pars_fragment:c1,envmap_pars_vertex:u1,envmap_physical_pars_fragment:M1,envmap_vertex:d1,fog_vertex:f1,fog_pars_vertex:h1,fog_fragment:p1,fog_pars_fragment:m1,gradientmap_pars_fragment:g1,lightmap_fragment:v1,lightmap_pars_fragment:y1,lights_lambert_fragment:_1,lights_lambert_pars_fragment:x1,lights_pars_begin:S1,lights_toon_fragment:E1,lights_toon_pars_fragment:w1,lights_phong_fragment:T1,lights_phong_pars_fragment:b1,lights_physical_fragment:A1,lights_physical_pars_fragment:C1,lights_fragment_begin:R1,lights_fragment_maps:P1,lights_fragment_end:N1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:I1,logdepthbuf_pars_vertex:D1,logdepthbuf_vertex:U1,map_fragment:F1,map_pars_fragment:k1,map_particle_fragment:O1,map_particle_pars_fragment:z1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:H1,morphcolor_vertex:j1,morphnormal_vertex:G1,morphtarget_pars_vertex:V1,morphtarget_vertex:W1,normal_fragment_begin:$1,normal_fragment_maps:X1,normal_pars_fragment:Y1,normal_pars_vertex:q1,normal_vertex:K1,normalmap_pars_fragment:Z1,clearcoat_normal_fragment_begin:Q1,clearcoat_normal_fragment_maps:J1,clearcoat_pars_fragment:eT,iridescence_pars_fragment:tT,opaque_fragment:nT,packing:iT,premultiplied_alpha_fragment:rT,project_vertex:sT,dithering_fragment:aT,dithering_pars_fragment:oT,roughnessmap_fragment:lT,roughnessmap_pars_fragment:cT,shadowmap_pars_fragment:uT,shadowmap_pars_vertex:dT,shadowmap_vertex:fT,shadowmask_pars_fragment:hT,skinbase_vertex:pT,skinning_pars_vertex:mT,skinning_vertex:gT,skinnormal_vertex:vT,specularmap_fragment:yT,specularmap_pars_fragment:_T,tonemapping_fragment:xT,tonemapping_pars_fragment:ST,transmission_fragment:MT,transmission_pars_fragment:ET,uv_pars_fragment:wT,uv_pars_vertex:TT,uv_vertex:bT,worldpos_vertex:AT,background_vert:CT,background_frag:RT,backgroundCube_vert:PT,backgroundCube_frag:NT,cube_vert:LT,cube_frag:IT,depth_vert:DT,depth_frag:UT,distanceRGBA_vert:FT,distanceRGBA_frag:kT,equirect_vert:OT,equirect_frag:zT,linedashed_vert:BT,linedashed_frag:HT,meshbasic_vert:jT,meshbasic_frag:GT,meshlambert_vert:VT,meshlambert_frag:WT,meshmatcap_vert:$T,meshmatcap_frag:XT,meshnormal_vert:YT,meshnormal_frag:qT,meshphong_vert:KT,meshphong_frag:ZT,meshphysical_vert:QT,meshphysical_frag:JT,meshtoon_vert:eb,meshtoon_frag:tb,points_vert:nb,points_frag:ib,shadow_vert:rb,shadow_frag:sb,sprite_vert:ab,sprite_frag:ob},Te={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Ni={basic:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new pt(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:In([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:In([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:In([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new pt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:In([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:In([Te.points,Te.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:In([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:In([Te.common,Te.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:In([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:In([Te.sprite,Te.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:In([Te.common,Te.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:In([Te.lights,Te.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Ni.physical={uniforms:In([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Sl={r:0,b:0,g:0};function lb(t,e,n,i,r,s,a){const o=new pt(0);let l=s===!0?0:1,c,d,f=null,h=0,v=null;function x(m,u){let g=!1,y=u.isScene===!0?u.background:null;y&&y.isTexture&&(y=(u.backgroundBlurriness>0?n:e).get(y)),y===null?_(o,l):y&&y.isColor&&(_(y,1),g=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Wc)?(d===void 0&&(d=new ui(new ko(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Sa(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=zt.getTransfer(y.colorSpace)!==Gt,(f!==y||h!==y.version||v!==t.toneMapping)&&(d.material.needsUpdate=!0,f=y,h=y.version,v=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ui(new Ma(2,2),new kr({name:"BackgroundMaterial",uniforms:Sa(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=zt.getTransfer(y.colorSpace)!==Gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,v=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,u){m.getRGB(Sl,N0(t)),i.buffers.color.setClear(Sl.r,Sl.g,Sl.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:x}}function cb(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,d=!1;function f(z,ee,Q,le,H){let Y=!1;if(a){const Z=_(le,Q,ee);c!==Z&&(c=Z,v(c.object)),Y=u(z,le,Q,H),Y&&g(z,le,Q,H)}else{const Z=ee.wireframe===!0;(c.geometry!==le.id||c.program!==Q.id||c.wireframe!==Z)&&(c.geometry=le.id,c.program=Q.id,c.wireframe=Z,Y=!0)}H!==null&&n.update(H,t.ELEMENT_ARRAY_BUFFER),(Y||d)&&(d=!1,j(z,ee,Q,le),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function v(z){return i.isWebGL2?t.bindVertexArray(z):s.bindVertexArrayOES(z)}function x(z){return i.isWebGL2?t.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function _(z,ee,Q){const le=Q.wireframe===!0;let H=o[z.id];H===void 0&&(H={},o[z.id]=H);let Y=H[ee.id];Y===void 0&&(Y={},H[ee.id]=Y);let Z=Y[le];return Z===void 0&&(Z=m(h()),Y[le]=Z),Z}function m(z){const ee=[],Q=[],le=[];for(let H=0;H<r;H++)ee[H]=0,Q[H]=0,le[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:Q,attributeDivisors:le,object:z,attributes:{},index:null}}function u(z,ee,Q,le){const H=c.attributes,Y=ee.attributes;let Z=0;const ae=Q.getAttributes();for(const pe in ae)if(ae[pe].location>=0){const J=H[pe];let ue=Y[pe];if(ue===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(ue=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(ue=z.instanceColor)),J===void 0||J.attribute!==ue||ue&&J.data!==ue.data)return!0;Z++}return c.attributesNum!==Z||c.index!==le}function g(z,ee,Q,le){const H={},Y=ee.attributes;let Z=0;const ae=Q.getAttributes();for(const pe in ae)if(ae[pe].location>=0){let J=Y[pe];J===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(J=z.instanceColor));const ue={};ue.attribute=J,J&&J.data&&(ue.data=J.data),H[pe]=ue,Z++}c.attributes=H,c.attributesNum=Z,c.index=le}function y(){const z=c.newAttributes;for(let ee=0,Q=z.length;ee<Q;ee++)z[ee]=0}function S(z){w(z,0)}function w(z,ee){const Q=c.newAttributes,le=c.enabledAttributes,H=c.attributeDivisors;Q[z]=1,le[z]===0&&(t.enableVertexAttribArray(z),le[z]=1),H[z]!==ee&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,ee),H[z]=ee)}function C(){const z=c.newAttributes,ee=c.enabledAttributes;for(let Q=0,le=ee.length;Q<le;Q++)ee[Q]!==z[Q]&&(t.disableVertexAttribArray(Q),ee[Q]=0)}function N(z,ee,Q,le,H,Y,Z){Z===!0?t.vertexAttribIPointer(z,ee,Q,H,Y):t.vertexAttribPointer(z,ee,Q,le,H,Y)}function j(z,ee,Q,le){if(i.isWebGL2===!1&&(z.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const H=le.attributes,Y=Q.getAttributes(),Z=ee.defaultAttributeValues;for(const ae in Y){const pe=Y[ae];if(pe.location>=0){let Ze=H[ae];if(Ze===void 0&&(ae==="instanceMatrix"&&z.instanceMatrix&&(Ze=z.instanceMatrix),ae==="instanceColor"&&z.instanceColor&&(Ze=z.instanceColor)),Ze!==void 0){const J=Ze.normalized,ue=Ze.itemSize,be=n.get(Ze);if(be===void 0)continue;const Fe=be.buffer,Qe=be.type,Oe=be.bytesPerElement,yt=i.isWebGL2===!0&&(Qe===t.INT||Qe===t.UNSIGNED_INT||Ze.gpuType===d0);if(Ze.isInterleavedBufferAttribute){const qe=Ze.data,W=qe.stride,$t=Ze.offset;if(qe.isInstancedInterleavedBuffer){for(let ze=0;ze<pe.locationSize;ze++)w(pe.location+ze,qe.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let ze=0;ze<pe.locationSize;ze++)S(pe.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let ze=0;ze<pe.locationSize;ze++)N(pe.location+ze,ue/pe.locationSize,Qe,J,W*Oe,($t+ue/pe.locationSize*ze)*Oe,yt)}else{if(Ze.isInstancedBufferAttribute){for(let qe=0;qe<pe.locationSize;qe++)w(pe.location+qe,Ze.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Ze.meshPerAttribute*Ze.count)}else for(let qe=0;qe<pe.locationSize;qe++)S(pe.location+qe);t.bindBuffer(t.ARRAY_BUFFER,Fe);for(let qe=0;qe<pe.locationSize;qe++)N(pe.location+qe,ue/pe.locationSize,Qe,J,ue*Oe,ue/pe.locationSize*qe*Oe,yt)}}else if(Z!==void 0){const J=Z[ae];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(pe.location,J);break;case 3:t.vertexAttrib3fv(pe.location,J);break;case 4:t.vertexAttrib4fv(pe.location,J);break;default:t.vertexAttrib1fv(pe.location,J)}}}}C()}function ne(){te();for(const z in o){const ee=o[z];for(const Q in ee){const le=ee[Q];for(const H in le)x(le[H].object),delete le[H];delete ee[Q]}delete o[z]}}function E(z){if(o[z.id]===void 0)return;const ee=o[z.id];for(const Q in ee){const le=ee[Q];for(const H in le)x(le[H].object),delete le[H];delete ee[Q]}delete o[z.id]}function I(z){for(const ee in o){const Q=o[ee];if(Q[z.id]===void 0)continue;const le=Q[z.id];for(const H in le)x(le[H].object),delete le[H];delete Q[z.id]}}function te(){oe(),d=!0,c!==l&&(c=l,v(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:te,resetDefaultState:oe,dispose:ne,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:S,disableUnusedAttributes:C}}function ub(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}function o(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let v,x;if(r)v=t,x="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<h;x++)this.render(d[x],f[x]);else{v.multiDrawArraysWEBGL(s,d,0,f,0,h);let x=0;for(let _=0;_<h;_++)x+=f[_];n.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function db(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(N){if(N==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,S=a||e.has("OES_texture_float"),w=y&&S,C=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:C}}function fb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new qr,o=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const v=f.length!==0||h||i!==0||r;return r=h,i=f.length,v},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,v){const x=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!m)s?d(null):c();else{const g=s?0:i,y=g*4;let S=u.clippingState||null;l.value=S,S=d(x,h,y,v);for(let w=0;w!==y;++w)S[w]=n[w];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,v,x){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const u=v+_*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,S=v;y!==_;++y,S+=4)a.copy(f[y]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function hb(t){let e=new WeakMap;function n(a,o){return o===hf?a.mapping=ya:o===pf&&(a.mapping=_a),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===hf||o===pf)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Tw(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class U0 extends L0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ea=4,Ym=[.125,.215,.35,.446,.526,.582],Qr=20,qu=new U0,qm=new pt;let Ku=null,Zu=0,Qu=0;const Kr=(1+Math.sqrt(5))/2,Fs=1/Kr,Km=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Kr,Fs),new G(0,Kr,-Fs),new G(Fs,0,Kr),new G(-Fs,0,Kr),new G(Kr,Fs,0),new G(-Kr,Fs,0)];class Zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Zu,Qu),e.scissorTest=!1,Ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ya||e.mapping===_a?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ro,format:Ti,colorSpace:tr,depthBuffer:!1},r=Qm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pb(s)),this._blurMaterial=mb(s,e,n)}return r}_compileMaterial(e){const n=new ui(this._lodPlanes[0],e);this._renderer.compile(n,qu)}_sceneToCubeUV(e,n,i,r){const o=new ai(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(qm),d.toneMapping=Nr,d.autoClear=!1;const v=new C0({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),x=new ui(new ko,v);let _=!1;const m=e.background;m?m.isColor&&(v.color.copy(m),e.background=null,_=!0):(v.color.copy(qm),_=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const y=this._cubeSize;Ml(r,g*y,u>2?y:0,y,y),d.setRenderTarget(r),_&&d.render(x,o),d.render(e,o)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ya||e.mapping===_a;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ui(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ml(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,qu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Km[(r-1)%Km.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ui(this._lodPlanes[r],c),h=c.uniforms,v=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Qr-1),_=s/x,m=isFinite(s)?1+Math.floor(d*_):Qr;m>Qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qr}`);const u=[];let g=0;for(let N=0;N<Qr;++N){const j=N/_,ne=Math.exp(-j*j/2);u.push(ne),N===0?g+=ne:N<m&&(g+=2*ne)}for(let N=0;N<u.length;N++)u[N]=u[N]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=x,h.mipInt.value=y-i;const S=this._sizeLods[r],w=3*S*(r>y-ea?r-y+ea:0),C=4*(this._cubeSize-S);Ml(n,w,C,3*S,2*S),l.setRenderTarget(n),l.render(f,qu)}}function pb(t){const e=[],n=[],i=[];let r=t;const s=t-ea+1+Ym.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ea?l=Ym[a-t+ea-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],v=6,x=6,_=3,m=2,u=1,g=new Float32Array(_*x*v),y=new Float32Array(m*x*v),S=new Float32Array(u*x*v);for(let C=0;C<v;C++){const N=C%3*2/3-1,j=C>2?0:-1,ne=[N,j,0,N+2/3,j,0,N+2/3,j+1,0,N,j,0,N+2/3,j+1,0,N,j+1,0];g.set(ne,_*x*C),y.set(h,m*x*C);const E=[C,C,C,C,C,C];S.set(E,u*x*C)}const w=new Mn;w.setAttribute("position",new Sn(g,_)),w.setAttribute("uv",new Sn(y,m)),w.setAttribute("faceIndex",new Sn(S,u)),e.push(w),r>ea&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Qm(t,e,n){const i=new ps(t,e,n);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ml(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mb(t,e,n){const i=new Float32Array(Qr),r=new G(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Jm(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function eg(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Ah(){return`

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
	`}function gb(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===hf||l===pf,d=l===ya||l===_a;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Zm(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new Zm(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function vb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yb(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const _=h.morphAttributes[x];for(let m=0,u=_.length;m<u;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete r[h.id];const v=s.get(h);v&&(e.remove(v),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const v=f.morphAttributes;for(const x in v){const _=v[x];for(let m=0,u=_.length;m<u;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(f){const h=[],v=f.index,x=f.attributes.position;let _=0;if(v!==null){const g=v.array;_=v.version;for(let y=0,S=g.length;y<S;y+=3){const w=g[y+0],C=g[y+1],N=g[y+2];h.push(w,C,C,N,N,w)}}else if(x!==void 0){const g=x.array;_=x.version;for(let y=0,S=g.length/3-1;y<S;y+=3){const w=y+0,C=y+1,N=y+2;h.push(w,C,C,N,N,w)}}else return;const m=new(S0(h)?P0:R0)(h,1);m.version=_;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const v=f.index;v!==null&&h.version<v.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function _b(t,e,n,i){const r=i.isWebGL2;let s;function a(v){s=v}let o,l;function c(v){o=v.type,l=v.bytesPerElement}function d(v,x){t.drawElements(s,x,o,v*l),n.update(x,s,1)}function f(v,x,_){if(_===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,x,o,v*l,_),n.update(x,s,_)}function h(v,x,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<_;u++)this.render(v[u]/l,x[u]);else{m.multiDrawElementsWEBGL(s,x,0,o,v,0,_);let u=0;for(let g=0;g<_;g++)u+=x[g];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function xb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Sb(t,e){return t[0]-e[0]}function Mb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Eb(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new vn,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let m=s.get(d);if(m===void 0||m.count!==_){let ee=function(){oe.dispose(),s.delete(d),d.removeEventListener("dispose",ee)};var v=ee;m!==void 0&&m.texture.dispose();const y=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],j=d.morphAttributes.color||[];let ne=0;y===!0&&(ne=1),S===!0&&(ne=2),w===!0&&(ne=3);let E=d.attributes.position.count*ne,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const te=new Float32Array(E*I*4*_),oe=new w0(te,E,I,_);oe.type=$i,oe.needsUpdate=!0;const z=ne*4;for(let Q=0;Q<_;Q++){const le=C[Q],H=N[Q],Y=j[Q],Z=E*I*4*Q;for(let ae=0;ae<le.count;ae++){const pe=ae*z;y===!0&&(a.fromBufferAttribute(le,ae),te[Z+pe+0]=a.x,te[Z+pe+1]=a.y,te[Z+pe+2]=a.z,te[Z+pe+3]=0),S===!0&&(a.fromBufferAttribute(H,ae),te[Z+pe+4]=a.x,te[Z+pe+5]=a.y,te[Z+pe+6]=a.z,te[Z+pe+7]=0),w===!0&&(a.fromBufferAttribute(Y,ae),te[Z+pe+8]=a.x,te[Z+pe+9]=a.y,te[Z+pe+10]=a.z,te[Z+pe+11]=Y.itemSize===4?a.w:1)}}m={count:_,texture:oe,size:new vt(E,I)},s.set(d,m),d.addEventListener("dispose",ee)}let u=0;for(let y=0;y<h.length;y++)u+=h[y];const g=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=h===void 0?0:h.length;let _=i[d.id];if(_===void 0||_.length!==x){_=[];for(let S=0;S<x;S++)_[S]=[S,0];i[d.id]=_}for(let S=0;S<x;S++){const w=_[S];w[0]=S,w[1]=h[S]}_.sort(Mb);for(let S=0;S<8;S++)S<x&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Sb);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let S=0;S<8;S++){const w=o[S],C=w[0],N=w[1];C!==Number.MAX_SAFE_INTEGER&&N?(m&&d.getAttribute("morphTarget"+S)!==m[C]&&d.setAttribute("morphTarget"+S,m[C]),u&&d.getAttribute("morphNormal"+S)!==u[C]&&d.setAttribute("morphNormal"+S,u[C]),r[S]=N,g+=N):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const y=d.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",y),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function wb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class F0 extends kn{constructor(e,n,i,r,s,a,o,l,c,d){if(d=d!==void 0?d:as,d!==as&&d!==xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===as&&(i=xr),i===void 0&&d===xa&&(i=ss),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const k0=new kn,O0=new F0(1,1);O0.compareFunction=x0;const z0=new w0,B0=new lw,H0=new I0,tg=[],ng=[],ig=new Float32Array(16),rg=new Float32Array(9),sg=new Float32Array(4);function Ra(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=tg[r];if(s===void 0&&(s=new Float32Array(r),tg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function dn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function fn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yc(t,e){let n=ng[e];n===void 0&&(n=new Int32Array(e),ng[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Tb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;t.uniform2fv(this.addr,e),fn(n,e)}}function Ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(dn(n,e))return;t.uniform3fv(this.addr,e),fn(n,e)}}function Cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;t.uniform4fv(this.addr,e),fn(n,e)}}function Rb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(dn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),fn(n,e)}else{if(dn(n,i))return;sg.set(i),t.uniformMatrix2fv(this.addr,!1,sg),fn(n,i)}}function Pb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(dn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),fn(n,e)}else{if(dn(n,i))return;rg.set(i),t.uniformMatrix3fv(this.addr,!1,rg),fn(n,i)}}function Nb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(dn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),fn(n,e)}else{if(dn(n,i))return;ig.set(i),t.uniformMatrix4fv(this.addr,!1,ig),fn(n,i)}}function Lb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;t.uniform2iv(this.addr,e),fn(n,e)}}function Db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;t.uniform3iv(this.addr,e),fn(n,e)}}function Ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;t.uniform4iv(this.addr,e),fn(n,e)}}function Fb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(dn(n,e))return;t.uniform2uiv(this.addr,e),fn(n,e)}}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(dn(n,e))return;t.uniform3uiv(this.addr,e),fn(n,e)}}function zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(dn(n,e))return;t.uniform4uiv(this.addr,e),fn(n,e)}}function Bb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?O0:k0;n.setTexture2D(e||s,r)}function Hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||B0,r)}function jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||H0,r)}function Gb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||z0,r)}function Vb(t){switch(t){case 5126:return Tb;case 35664:return bb;case 35665:return Ab;case 35666:return Cb;case 35674:return Rb;case 35675:return Pb;case 35676:return Nb;case 5124:case 35670:return Lb;case 35667:case 35671:return Ib;case 35668:case 35672:return Db;case 35669:case 35673:return Ub;case 5125:return Fb;case 36294:return kb;case 36295:return Ob;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Gb}}function Wb(t,e){t.uniform1fv(this.addr,e)}function $b(t,e){const n=Ra(e,this.size,2);t.uniform2fv(this.addr,n)}function Xb(t,e){const n=Ra(e,this.size,3);t.uniform3fv(this.addr,n)}function Yb(t,e){const n=Ra(e,this.size,4);t.uniform4fv(this.addr,n)}function qb(t,e){const n=Ra(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Kb(t,e){const n=Ra(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Zb(t,e){const n=Ra(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Qb(t,e){t.uniform1iv(this.addr,e)}function Jb(t,e){t.uniform2iv(this.addr,e)}function eA(t,e){t.uniform3iv(this.addr,e)}function tA(t,e){t.uniform4iv(this.addr,e)}function nA(t,e){t.uniform1uiv(this.addr,e)}function iA(t,e){t.uniform2uiv(this.addr,e)}function rA(t,e){t.uniform3uiv(this.addr,e)}function sA(t,e){t.uniform4uiv(this.addr,e)}function aA(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);dn(i,s)||(t.uniform1iv(this.addr,s),fn(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||k0,s[a])}function oA(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);dn(i,s)||(t.uniform1iv(this.addr,s),fn(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||B0,s[a])}function lA(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);dn(i,s)||(t.uniform1iv(this.addr,s),fn(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||H0,s[a])}function cA(t,e,n){const i=this.cache,r=e.length,s=Yc(n,r);dn(i,s)||(t.uniform1iv(this.addr,s),fn(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||z0,s[a])}function uA(t){switch(t){case 5126:return Wb;case 35664:return $b;case 35665:return Xb;case 35666:return Yb;case 35674:return qb;case 35675:return Kb;case 35676:return Zb;case 5124:case 35670:return Qb;case 35667:case 35671:return Jb;case 35668:case 35672:return eA;case 35669:case 35673:return tA;case 5125:return nA;case 36294:return iA;case 36295:return rA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return aA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return cA}}class dA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Vb(n.type)}}class fA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uA(n.type)}}class hA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function ag(t,e){t.seq.push(e),t.map[e.id]=e}function pA(t,e,n){const i=t.name,r=i.length;for(Ju.lastIndex=0;;){const s=Ju.exec(i),a=Ju.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ag(n,c===void 0?new dA(o,t,e):new fA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new hA(o),ag(n,f)),n=f}}}class Vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);pA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function og(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mA=37297;let gA=0;function vA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function yA(t){const e=zt.getPrimaries(zt.workingColorSpace),n=zt.getPrimaries(t);let i;switch(e===n?i="":e===xc&&n===_c?i="LinearDisplayP3ToLinearSRGB":e===_c&&n===xc&&(i="LinearSRGBToLinearDisplayP3"),t){case tr:case $c:return[i,"LinearTransferOETF"];case xn:case Th:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function lg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+vA(t.getShaderSource(e),a)}else return r}function _A(t,e){const n=yA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function xA(t,e){let n;switch(e){case LE:n="Linear";break;case IE:n="Reinhard";break;case DE:n="OptimizedCineon";break;case UE:n="ACESFilmic";break;case kE:n="AgX";break;case FE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function SA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ta).join(`
`)}function MA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function EA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function wA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ta(t){return t!==""}function cg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ug(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(t){return t.replace(TA,AA)}const bA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AA(t,e){let n=gt[e];if(n===void 0){const i=bA.get(e);if(i!==void 0)n=gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sf(n)}const CA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dg(t){return t.replace(CA,RA)}function RA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function PA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===l0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===aE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function NA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ya:case _a:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case _a:e="ENVMAP_MODE_REFRACTION";break}return e}function IA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case c0:e="ENVMAP_BLENDING_MULTIPLY";break;case PE:e="ENVMAP_BLENDING_MIX";break;case NE:e="ENVMAP_BLENDING_ADD";break}return e}function DA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function UA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=PA(n),c=NA(n),d=LA(n),f=IA(n),h=DA(n),v=n.isWebGL2?"":SA(n),x=MA(n),_=EA(s),m=r.createProgram();let u,g,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ta).join(`
`),u.length>0&&(u+=`
`),g=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ta).join(`
`),g.length>0&&(g+=`
`)):(u=[fg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),g=[v,fg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Nr?"#define TONE_MAPPING":"",n.toneMapping!==Nr?gt.tonemapping_pars_fragment:"",n.toneMapping!==Nr?xA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,_A("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ta).join(`
`)),a=Sf(a),a=cg(a,n),a=ug(a,n),o=Sf(o),o=cg(o,n),o=ug(o,n),a=dg(a),o=dg(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=y+u+a,w=y+g+o,C=og(r,r.VERTEX_SHADER,S),N=og(r,r.FRAGMENT_SHADER,w);r.attachShader(m,C),r.attachShader(m,N),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function j(te){if(t.debug.checkShaderErrors){const oe=r.getProgramInfoLog(m).trim(),z=r.getShaderInfoLog(C).trim(),ee=r.getShaderInfoLog(N).trim();let Q=!0,le=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,N);else{const H=lg(r,C,"vertex"),Y=lg(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+te.name+`
Material Type: `+te.type+`

Program Info Log: `+oe+`
`+H+`
`+Y)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(z===""||ee==="")&&(le=!1);le&&(te.diagnostics={runnable:Q,programLog:oe,vertexShader:{log:z,prefix:u},fragmentShader:{log:ee,prefix:g}})}r.deleteShader(C),r.deleteShader(N),ne=new Vl(r,m),E=wA(r,m)}let ne;this.getUniforms=function(){return ne===void 0&&j(this),ne};let E;this.getAttributes=function(){return E===void 0&&j(this),E};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(m,mA)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=N,this}let FA=0;class kA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OA(e),n.set(e,i)),i}}class OA{constructor(e){this.id=FA++,this.code=e,this.usedTimes=0}}function zA(t,e,n,i,r,s,a){const o=new b0,l=new kA,c=new Set,d=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,v=r.vertexTextures;let x=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(E){return c.add(E),E===0?"uv":`uv${E}`}function u(E,I,te,oe,z){const ee=oe.fog,Q=z.geometry,le=E.isMeshStandardMaterial?oe.environment:null,H=(E.isMeshStandardMaterial?n:e).get(E.envMap||le),Y=H&&H.mapping===Wc?H.image.height:null,Z=_[E.type];E.precision!==null&&(x=r.getMaxPrecision(E.precision),x!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",x,"instead."));const ae=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,pe=ae!==void 0?ae.length:0;let Ze=0;Q.morphAttributes.position!==void 0&&(Ze=1),Q.morphAttributes.normal!==void 0&&(Ze=2),Q.morphAttributes.color!==void 0&&(Ze=3);let J,ue,be,Fe;if(Z){const Et=Ni[Z];J=Et.vertexShader,ue=Et.fragmentShader}else J=E.vertexShader,ue=E.fragmentShader,l.update(E),be=l.getVertexShaderID(E),Fe=l.getFragmentShaderID(E);const Qe=t.getRenderTarget(),Oe=z.isInstancedMesh===!0,yt=z.isBatchedMesh===!0,qe=!!E.map,W=!!E.matcap,$t=!!H,ze=!!E.aoMap,Je=!!E.lightMap,Be=!!E.bumpMap,ct=!!E.normalMap,$e=!!E.displacementMap,A=!!E.emissiveMap,T=!!E.metalnessMap,q=!!E.roughnessMap,ye=E.anisotropy>0,fe=E.clearcoat>0,de=E.iridescence>0,ke=E.sheen>0,we=E.transmission>0,Pe=ye&&!!E.anisotropyMap,me=fe&&!!E.clearcoatMap,at=fe&&!!E.clearcoatNormalMap,he=fe&&!!E.clearcoatRoughnessMap,wt=de&&!!E.iridescenceMap,it=de&&!!E.iridescenceThicknessMap,et=ke&&!!E.sheenColorMap,je=ke&&!!E.sheenRoughnessMap,Ne=!!E.specularMap,ft=!!E.specularColorMap,_t=!!E.specularIntensityMap,Lt=we&&!!E.transmissionMap,rt=we&&!!E.thicknessMap,Tt=!!E.gradientMap,L=!!E.alphaMap,ve=E.alphaTest>0,ge=!!E.alphaHash,Le=!!E.extensions;let Xe=Nr;E.toneMapped&&(Qe===null||Qe.isXRRenderTarget===!0)&&(Xe=t.toneMapping);const St={isWebGL2:f,shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:J,fragmentShader:ue,defines:E.defines,customVertexShaderID:be,customFragmentShaderID:Fe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:x,batching:yt,instancing:Oe,instancingColor:Oe&&z.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Qe===null?t.outputColorSpace:Qe.isXRRenderTarget===!0?Qe.texture.colorSpace:tr,alphaToCoverage:!!E.alphaToCoverage,map:qe,matcap:W,envMap:$t,envMapMode:$t&&H.mapping,envMapCubeUVHeight:Y,aoMap:ze,lightMap:Je,bumpMap:Be,normalMap:ct,displacementMap:v&&$e,emissiveMap:A,normalMapObjectSpace:ct&&E.normalMapType===YE,normalMapTangentSpace:ct&&E.normalMapType===_0,metalnessMap:T,roughnessMap:q,anisotropy:ye,anisotropyMap:Pe,clearcoat:fe,clearcoatMap:me,clearcoatNormalMap:at,clearcoatRoughnessMap:he,iridescence:de,iridescenceMap:wt,iridescenceThicknessMap:it,sheen:ke,sheenColorMap:et,sheenRoughnessMap:je,specularMap:Ne,specularColorMap:ft,specularIntensityMap:_t,transmission:we,transmissionMap:Lt,thicknessMap:rt,gradientMap:Tt,opaque:E.transparent===!1&&E.blending===la&&E.alphaToCoverage===!1,alphaMap:L,alphaTest:ve,alphaHash:ge,combine:E.combine,mapUv:qe&&m(E.map.channel),aoMapUv:ze&&m(E.aoMap.channel),lightMapUv:Je&&m(E.lightMap.channel),bumpMapUv:Be&&m(E.bumpMap.channel),normalMapUv:ct&&m(E.normalMap.channel),displacementMapUv:$e&&m(E.displacementMap.channel),emissiveMapUv:A&&m(E.emissiveMap.channel),metalnessMapUv:T&&m(E.metalnessMap.channel),roughnessMapUv:q&&m(E.roughnessMap.channel),anisotropyMapUv:Pe&&m(E.anisotropyMap.channel),clearcoatMapUv:me&&m(E.clearcoatMap.channel),clearcoatNormalMapUv:at&&m(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(E.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&m(E.iridescenceMap.channel),iridescenceThicknessMapUv:it&&m(E.iridescenceThicknessMap.channel),sheenColorMapUv:et&&m(E.sheenColorMap.channel),sheenRoughnessMapUv:je&&m(E.sheenRoughnessMap.channel),specularMapUv:Ne&&m(E.specularMap.channel),specularColorMapUv:ft&&m(E.specularColorMap.channel),specularIntensityMapUv:_t&&m(E.specularIntensityMap.channel),transmissionMapUv:Lt&&m(E.transmissionMap.channel),thicknessMapUv:rt&&m(E.thicknessMap.channel),alphaMapUv:L&&m(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ct||ye),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(qe||L),fog:!!ee,useFog:E.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ze,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&te.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&zt.getTransfer(E.map.colorSpace)===Gt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ei,flipSided:E.side===Xn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Le&&E.extensions.derivatives===!0,extensionFragDepth:Le&&E.extensions.fragDepth===!0,extensionDrawBuffers:Le&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Le&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Le&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function g(E){const I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(const te in E.defines)I.push(te),I.push(E.defines[te]);return E.isRawShaderMaterial===!1&&(y(I,E),S(I,E),I.push(t.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function y(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function S(E,I){o.disableAll(),I.isWebGL2&&o.enable(0),I.supportsVertexTextures&&o.enable(1),I.instancing&&o.enable(2),I.instancingColor&&o.enable(3),I.matcap&&o.enable(4),I.envMap&&o.enable(5),I.normalMapObjectSpace&&o.enable(6),I.normalMapTangentSpace&&o.enable(7),I.clearcoat&&o.enable(8),I.iridescence&&o.enable(9),I.alphaTest&&o.enable(10),I.vertexColors&&o.enable(11),I.vertexAlphas&&o.enable(12),I.vertexUv1s&&o.enable(13),I.vertexUv2s&&o.enable(14),I.vertexUv3s&&o.enable(15),I.vertexTangents&&o.enable(16),I.anisotropy&&o.enable(17),I.alphaHash&&o.enable(18),I.batching&&o.enable(19),E.push(o.mask),o.disableAll(),I.fog&&o.enable(0),I.useFog&&o.enable(1),I.flatShading&&o.enable(2),I.logarithmicDepthBuffer&&o.enable(3),I.skinning&&o.enable(4),I.morphTargets&&o.enable(5),I.morphNormals&&o.enable(6),I.morphColors&&o.enable(7),I.premultipliedAlpha&&o.enable(8),I.shadowMapEnabled&&o.enable(9),I.useLegacyLights&&o.enable(10),I.doubleSided&&o.enable(11),I.flipSided&&o.enable(12),I.useDepthPacking&&o.enable(13),I.dithering&&o.enable(14),I.transmission&&o.enable(15),I.sheen&&o.enable(16),I.opaque&&o.enable(17),I.pointsUvs&&o.enable(18),I.decodeVideoTexture&&o.enable(19),I.alphaToCoverage&&o.enable(20),E.push(o.mask)}function w(E){const I=_[E.type];let te;if(I){const oe=Ni[I];te=Sw.clone(oe.uniforms)}else te=E.uniforms;return te}function C(E,I){let te;for(let oe=0,z=d.length;oe<z;oe++){const ee=d[oe];if(ee.cacheKey===I){te=ee,++te.usedTimes;break}}return te===void 0&&(te=new UA(t,I,E,s),d.push(te)),te}function N(E){if(--E.usedTimes===0){const I=d.indexOf(E);d[I]=d[d.length-1],d.pop(),E.destroy()}}function j(E){l.remove(E)}function ne(){l.dispose()}return{getParameters:u,getProgramCacheKey:g,getUniforms:w,acquireProgram:C,releaseProgram:N,releaseShaderCache:j,programs:d,dispose:ne}}function BA(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function HA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,v,x,_,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:v,groupOrder:x,renderOrder:f.renderOrder,z:_,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=v,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=_,u.group=m),e++,u}function o(f,h,v,x,_,m){const u=a(f,h,v,x,_,m);v.transmission>0?i.push(u):v.transparent===!0?r.push(u):n.push(u)}function l(f,h,v,x,_,m){const u=a(f,h,v,x,_,m);v.transmission>0?i.unshift(u):v.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||HA),i.length>1&&i.sort(h||hg),r.length>1&&r.sort(h||hg)}function d(){for(let f=e,h=t.length;f<h;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function jA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new pg,t.set(i,[a])):r>=s.length?(a=new pg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function GA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new pt};break;case"SpotLight":n={position:new G,direction:new G,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function VA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WA=0;function $A(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function XA(t,e){const n=new GA,i=VA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new G);const s=new G,a=new nn,o=new nn;function l(d,f){let h=0,v=0,x=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let _=0,m=0,u=0,g=0,y=0,S=0,w=0,C=0,N=0,j=0,ne=0;d.sort($A);const E=f===!0?Math.PI:1;for(let te=0,oe=d.length;te<oe;te++){const z=d[te],ee=z.color,Q=z.intensity,le=z.distance,H=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=ee.r*Q*E,v+=ee.g*Q*E,x+=ee.b*Q*E;else if(z.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(z.sh.coefficients[Y],Q);ne++}else if(z.isDirectionalLight){const Y=n.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity*E),z.castShadow){const Z=z.shadow,ae=i.get(z);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,r.directionalShadow[_]=ae,r.directionalShadowMap[_]=H,r.directionalShadowMatrix[_]=z.shadow.matrix,S++}r.directional[_]=Y,_++}else if(z.isSpotLight){const Y=n.get(z);Y.position.setFromMatrixPosition(z.matrixWorld),Y.color.copy(ee).multiplyScalar(Q*E),Y.distance=le,Y.coneCos=Math.cos(z.angle),Y.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Y.decay=z.decay,r.spot[u]=Y;const Z=z.shadow;if(z.map&&(r.spotLightMap[N]=z.map,N++,Z.updateMatrices(z),z.castShadow&&j++),r.spotLightMatrix[u]=Z.matrix,z.castShadow){const ae=i.get(z);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,r.spotShadow[u]=ae,r.spotShadowMap[u]=H,C++}u++}else if(z.isRectAreaLight){const Y=n.get(z);Y.color.copy(ee).multiplyScalar(Q),Y.halfWidth.set(z.width*.5,0,0),Y.halfHeight.set(0,z.height*.5,0),r.rectArea[g]=Y,g++}else if(z.isPointLight){const Y=n.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity*E),Y.distance=z.distance,Y.decay=z.decay,z.castShadow){const Z=z.shadow,ae=i.get(z);ae.shadowBias=Z.bias,ae.shadowNormalBias=Z.normalBias,ae.shadowRadius=Z.radius,ae.shadowMapSize=Z.mapSize,ae.shadowCameraNear=Z.camera.near,ae.shadowCameraFar=Z.camera.far,r.pointShadow[m]=ae,r.pointShadowMap[m]=H,r.pointShadowMatrix[m]=z.shadow.matrix,w++}r.point[m]=Y,m++}else if(z.isHemisphereLight){const Y=n.get(z);Y.skyColor.copy(z.color).multiplyScalar(Q*E),Y.groundColor.copy(z.groundColor).multiplyScalar(Q*E),r.hemi[y]=Y,y++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=v,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==_||I.pointLength!==m||I.spotLength!==u||I.rectAreaLength!==g||I.hemiLength!==y||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==C||I.numSpotMaps!==N||I.numLightProbes!==ne)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=g,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=C+N-j,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=j,r.numLightProbes=ne,I.directionalLength=_,I.pointLength=m,I.spotLength=u,I.rectAreaLength=g,I.hemiLength=y,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=C,I.numSpotMaps=N,I.numLightProbes=ne,r.version=WA++)}function c(d,f){let h=0,v=0,x=0,_=0,m=0;const u=f.matrixWorldInverse;for(let g=0,y=d.length;g<y;g++){const S=d[g];if(S.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),h++}else if(S.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),x++}else if(S.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(u),o.identity(),a.copy(S.matrixWorld),a.premultiply(u),o.extractRotation(a),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const w=r.point[v];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(u),v++}else if(S.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function mg(t,e){const n=new XA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function YA(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new mg(t,e),n.set(s,[l])):a>=o.length?(l=new mg(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class qA extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KA extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QA=`uniform sampler2D shadow_pass;
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
}`;function JA(t,e,n){let i=new bh;const r=new vt,s=new vt,a=new vn,o=new qA({depthPacking:XE}),l=new KA,c={},d=n.maxTextureSize,f={[Fr]:Xn,[Xn]:Fr,[Ei]:Ei},h=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:ZA,fragmentShader:QA}),v=h.clone();v.defines.HORIZONTAL_PASS=1;const x=new Mn;x.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ui(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l0;let u=this.type;this.render=function(C,N,j){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const ne=t.getRenderTarget(),E=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),te=t.state;te.setBlending(Pr),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const oe=u!==Gi&&this.type===Gi,z=u===Gi&&this.type!==Gi;for(let ee=0,Q=C.length;ee<Q;ee++){const le=C[ee],H=le.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const Y=H.getFrameExtents();if(r.multiply(Y),s.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Y.x),r.x=s.x*Y.x,H.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Y.y),r.y=s.y*Y.y,H.mapSize.y=s.y)),H.map===null||oe===!0||z===!0){const ae=this.type!==Gi?{minFilter:Un,magFilter:Un}:{};H.map!==null&&H.map.dispose(),H.map=new ps(r.x,r.y,ae),H.map.texture.name=le.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const Z=H.getViewportCount();for(let ae=0;ae<Z;ae++){const pe=H.getViewport(ae);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),te.viewport(a),H.updateMatrices(le,ae),i=H.getFrustum(),S(N,j,H.camera,le,this.type)}H.isPointLightShadow!==!0&&this.type===Gi&&g(H,j),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(ne,E,I)};function g(C,N){const j=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,v.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,v.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ps(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(N,null,j,h,_,null),v.uniforms.shadow_pass.value=C.mapPass.texture,v.uniforms.resolution.value=C.mapSize,v.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(N,null,j,v,_,null)}function y(C,N,j,ne){let E=null;const I=j.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)E=I;else if(E=j.isPointLight===!0?l:o,t.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const te=E.uuid,oe=N.uuid;let z=c[te];z===void 0&&(z={},c[te]=z);let ee=z[oe];ee===void 0&&(ee=E.clone(),z[oe]=ee,N.addEventListener("dispose",w)),E=ee}if(E.visible=N.visible,E.wireframe=N.wireframe,ne===Gi?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:f[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,j.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const te=t.properties.get(E);te.light=j}return E}function S(C,N,j,ne,E){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Gi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld);const oe=e.update(C),z=C.material;if(Array.isArray(z)){const ee=oe.groups;for(let Q=0,le=ee.length;Q<le;Q++){const H=ee[Q],Y=z[H.materialIndex];if(Y&&Y.visible){const Z=y(C,Y,ne,E);C.onBeforeShadow(t,C,N,j,oe,Z,H),t.renderBufferDirect(j,null,oe,Z,C,H),C.onAfterShadow(t,C,N,j,oe,Z,H)}}}else if(z.visible){const ee=y(C,z,ne,E);C.onBeforeShadow(t,C,N,j,oe,ee,null),t.renderBufferDirect(j,null,oe,ee,C,null),C.onAfterShadow(t,C,N,j,oe,ee,null)}}const te=C.children;for(let oe=0,z=te.length;oe<z;oe++)S(te[oe],N,j,ne,E)}function w(C){C.target.removeEventListener("dispose",w);for(const j in c){const ne=c[j],E=C.target.uuid;E in ne&&(ne[E].dispose(),delete ne[E])}}}function eC(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ve=new vn;let ge=null;const Le=new vn(0,0,0,0);return{setMask:function(Xe){ge!==Xe&&!L&&(t.colorMask(Xe,Xe,Xe,Xe),ge=Xe)},setLocked:function(Xe){L=Xe},setClear:function(Xe,St,Et,Ht,rn){rn===!0&&(Xe*=Ht,St*=Ht,Et*=Ht),ve.set(Xe,St,Et,Ht),Le.equals(ve)===!1&&(t.clearColor(Xe,St,Et,Ht),Le.copy(ve))},reset:function(){L=!1,ge=null,Le.set(-1,0,0,0)}}}function s(){let L=!1,ve=null,ge=null,Le=null;return{setTest:function(Xe){Xe?Oe(t.DEPTH_TEST):yt(t.DEPTH_TEST)},setMask:function(Xe){ve!==Xe&&!L&&(t.depthMask(Xe),ve=Xe)},setFunc:function(Xe){if(ge!==Xe){switch(Xe){case EE:t.depthFunc(t.NEVER);break;case wE:t.depthFunc(t.ALWAYS);break;case TE:t.depthFunc(t.LESS);break;case vc:t.depthFunc(t.LEQUAL);break;case bE:t.depthFunc(t.EQUAL);break;case AE:t.depthFunc(t.GEQUAL);break;case CE:t.depthFunc(t.GREATER);break;case RE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=Xe}},setLocked:function(Xe){L=Xe},setClear:function(Xe){Le!==Xe&&(t.clearDepth(Xe),Le=Xe)},reset:function(){L=!1,ve=null,ge=null,Le=null}}}function a(){let L=!1,ve=null,ge=null,Le=null,Xe=null,St=null,Et=null,Ht=null,rn=null;return{setTest:function(bt){L||(bt?Oe(t.STENCIL_TEST):yt(t.STENCIL_TEST))},setMask:function(bt){ve!==bt&&!L&&(t.stencilMask(bt),ve=bt)},setFunc:function(bt,Ce,hn){(ge!==bt||Le!==Ce||Xe!==hn)&&(t.stencilFunc(bt,Ce,hn),ge=bt,Le=Ce,Xe=hn)},setOp:function(bt,Ce,hn){(St!==bt||Et!==Ce||Ht!==hn)&&(t.stencilOp(bt,Ce,hn),St=bt,Et=Ce,Ht=hn)},setLocked:function(bt){L=bt},setClear:function(bt){rn!==bt&&(t.clearStencil(bt),rn=bt)},reset:function(){L=!1,ve=null,ge=null,Le=null,Xe=null,St=null,Et=null,Ht=null,rn=null}}}const o=new r,l=new s,c=new a,d=new WeakMap,f=new WeakMap;let h={},v={},x=new WeakMap,_=[],m=null,u=!1,g=null,y=null,S=null,w=null,C=null,N=null,j=null,ne=new pt(0,0,0),E=0,I=!1,te=null,oe=null,z=null,ee=null,Q=null;const le=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=Y>=2);let ae=null,pe={};const Ze=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),ue=new vn().fromArray(Ze),be=new vn().fromArray(J);function Fe(L,ve,ge,Le){const Xe=new Uint8Array(4),St=t.createTexture();t.bindTexture(L,St),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Et=0;Et<ge;Et++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ve,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,Xe):t.texImage2D(ve+Et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Xe);return St}const Qe={};Qe[t.TEXTURE_2D]=Fe(t.TEXTURE_2D,t.TEXTURE_2D,1),Qe[t.TEXTURE_CUBE_MAP]=Fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Qe[t.TEXTURE_2D_ARRAY]=Fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Qe[t.TEXTURE_3D]=Fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(t.DEPTH_TEST),l.setFunc(vc),$e(!1),A(qp),Oe(t.CULL_FACE),Be(Pr);function Oe(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function yt(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function qe(L,ve){return v[L]!==ve?(t.bindFramebuffer(L,ve),v[L]=ve,i&&(L===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=ve),L===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=ve)),!0):!1}function W(L,ve){let ge=_,Le=!1;if(L)if(ge=x.get(ve),ge===void 0&&(ge=[],x.set(ve,ge)),L.isWebGLMultipleRenderTargets){const Xe=L.texture;if(ge.length!==Xe.length||ge[0]!==t.COLOR_ATTACHMENT0){for(let St=0,Et=Xe.length;St<Et;St++)ge[St]=t.COLOR_ATTACHMENT0+St;ge.length=Xe.length,Le=!0}}else ge[0]!==t.COLOR_ATTACHMENT0&&(ge[0]=t.COLOR_ATTACHMENT0,Le=!0);else ge[0]!==t.BACK&&(ge[0]=t.BACK,Le=!0);Le&&(n.isWebGL2?t.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function $t(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const ze={[Zr]:t.FUNC_ADD,[lE]:t.FUNC_SUBTRACT,[cE]:t.FUNC_REVERSE_SUBTRACT};if(i)ze[Jp]=t.MIN,ze[em]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ze[Jp]=L.MIN_EXT,ze[em]=L.MAX_EXT)}const Je={[uE]:t.ZERO,[dE]:t.ONE,[fE]:t.SRC_COLOR,[df]:t.SRC_ALPHA,[yE]:t.SRC_ALPHA_SATURATE,[gE]:t.DST_COLOR,[pE]:t.DST_ALPHA,[hE]:t.ONE_MINUS_SRC_COLOR,[ff]:t.ONE_MINUS_SRC_ALPHA,[vE]:t.ONE_MINUS_DST_COLOR,[mE]:t.ONE_MINUS_DST_ALPHA,[_E]:t.CONSTANT_COLOR,[xE]:t.ONE_MINUS_CONSTANT_COLOR,[SE]:t.CONSTANT_ALPHA,[ME]:t.ONE_MINUS_CONSTANT_ALPHA};function Be(L,ve,ge,Le,Xe,St,Et,Ht,rn,bt){if(L===Pr){u===!0&&(yt(t.BLEND),u=!1);return}if(u===!1&&(Oe(t.BLEND),u=!0),L!==oE){if(L!==g||bt!==I){if((y!==Zr||C!==Zr)&&(t.blendEquation(t.FUNC_ADD),y=Zr,C=Zr),bt)switch(L){case la:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kp:t.blendFunc(t.ONE,t.ONE);break;case Zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case la:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,w=null,N=null,j=null,ne.set(0,0,0),E=0,g=L,I=bt}return}Xe=Xe||ve,St=St||ge,Et=Et||Le,(ve!==y||Xe!==C)&&(t.blendEquationSeparate(ze[ve],ze[Xe]),y=ve,C=Xe),(ge!==S||Le!==w||St!==N||Et!==j)&&(t.blendFuncSeparate(Je[ge],Je[Le],Je[St],Je[Et]),S=ge,w=Le,N=St,j=Et),(Ht.equals(ne)===!1||rn!==E)&&(t.blendColor(Ht.r,Ht.g,Ht.b,rn),ne.copy(Ht),E=rn),g=L,I=!1}function ct(L,ve){L.side===Ei?yt(t.CULL_FACE):Oe(t.CULL_FACE);let ge=L.side===Xn;ve&&(ge=!ge),$e(ge),L.blending===la&&L.transparent===!1?Be(Pr):Be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Le=L.stencilWrite;c.setTest(Le),Le&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),q(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Oe(t.SAMPLE_ALPHA_TO_COVERAGE):yt(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(L){te!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),te=L)}function A(L){L!==rE?(Oe(t.CULL_FACE),L!==oe&&(L===qp?t.cullFace(t.BACK):L===sE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):yt(t.CULL_FACE),oe=L}function T(L){L!==z&&(H&&t.lineWidth(L),z=L)}function q(L,ve,ge){L?(Oe(t.POLYGON_OFFSET_FILL),(ee!==ve||Q!==ge)&&(t.polygonOffset(ve,ge),ee=ve,Q=ge)):yt(t.POLYGON_OFFSET_FILL)}function ye(L){L?Oe(t.SCISSOR_TEST):yt(t.SCISSOR_TEST)}function fe(L){L===void 0&&(L=t.TEXTURE0+le-1),ae!==L&&(t.activeTexture(L),ae=L)}function de(L,ve,ge){ge===void 0&&(ae===null?ge=t.TEXTURE0+le-1:ge=ae);let Le=pe[ge];Le===void 0&&(Le={type:void 0,texture:void 0},pe[ge]=Le),(Le.type!==L||Le.texture!==ve)&&(ae!==ge&&(t.activeTexture(ge),ae=ge),t.bindTexture(L,ve||Qe[L]),Le.type=L,Le.texture=ve)}function ke(){const L=pe[ae];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function we(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){ue.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ue.copy(L))}function _t(L){be.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),be.copy(L))}function Lt(L,ve){let ge=f.get(ve);ge===void 0&&(ge=new WeakMap,f.set(ve,ge));let Le=ge.get(L);Le===void 0&&(Le=t.getUniformBlockIndex(ve,L.name),ge.set(L,Le))}function rt(L,ve){const Le=f.get(ve).get(L);d.get(ve)!==Le&&(t.uniformBlockBinding(ve,Le,L.__bindingPointIndex),d.set(ve,Le))}function Tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ae=null,pe={},v={},x=new WeakMap,_=[],m=null,u=!1,g=null,y=null,S=null,w=null,C=null,N=null,j=null,ne=new pt(0,0,0),E=0,I=!1,te=null,oe=null,z=null,ee=null,Q=null,ue.set(0,0,t.canvas.width,t.canvas.height),be.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Oe,disable:yt,bindFramebuffer:qe,drawBuffers:W,useProgram:$t,setBlending:Be,setMaterial:ct,setFlipSided:$e,setCullFace:A,setLineWidth:T,setPolygonOffset:q,setScissorTest:ye,activeTexture:fe,bindTexture:de,unbindTexture:ke,compressedTexImage2D:we,compressedTexImage3D:Pe,texImage2D:je,texImage3D:Ne,updateUBOMapping:Lt,uniformBlockBinding:rt,texStorage2D:it,texStorage3D:et,texSubImage2D:me,texSubImage3D:at,compressedTexSubImage2D:he,compressedTexSubImage3D:wt,scissor:ft,viewport:_t,reset:Tt}}function tC(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,T){return v?new OffscreenCanvas(A,T):Mc("canvas")}function _(A,T,q,ye){let fe=1;if((A.width>ye||A.height>ye)&&(fe=ye/Math.max(A.width,A.height)),fe<1||T===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const de=T?xf:Math.floor,ke=de(fe*A.width),we=de(fe*A.height);f===void 0&&(f=x(ke,we));const Pe=q?x(ke,we):f;return Pe.width=ke,Pe.height=we,Pe.getContext("2d").drawImage(A,0,0,ke,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ke+"x"+we+")."),Pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Rm(A.width)&&Rm(A.height)}function u(A){return o?!1:A.wrapS!==wi||A.wrapT!==wi||A.minFilter!==Un&&A.minFilter!==Bn}function g(A,T){return A.generateMipmaps&&T&&A.minFilter!==Un&&A.minFilter!==Bn}function y(A){t.generateMipmap(A)}function S(A,T,q,ye,fe=!1){if(o===!1)return T;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de=T;if(T===t.RED&&(q===t.FLOAT&&(de=t.R32F),q===t.HALF_FLOAT&&(de=t.R16F),q===t.UNSIGNED_BYTE&&(de=t.R8)),T===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(de=t.R8UI),q===t.UNSIGNED_SHORT&&(de=t.R16UI),q===t.UNSIGNED_INT&&(de=t.R32UI),q===t.BYTE&&(de=t.R8I),q===t.SHORT&&(de=t.R16I),q===t.INT&&(de=t.R32I)),T===t.RG&&(q===t.FLOAT&&(de=t.RG32F),q===t.HALF_FLOAT&&(de=t.RG16F),q===t.UNSIGNED_BYTE&&(de=t.RG8)),T===t.RGBA){const ke=fe?yc:zt.getTransfer(ye);q===t.FLOAT&&(de=t.RGBA32F),q===t.HALF_FLOAT&&(de=t.RGBA16F),q===t.UNSIGNED_BYTE&&(de=ke===Gt?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function w(A,T,q){return g(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==Un&&A.minFilter!==Bn?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function C(A){return A===Un||A===tm||A===Ba?t.NEAREST:t.LINEAR}function N(A){const T=A.target;T.removeEventListener("dispose",N),ne(T),T.isVideoTexture&&d.delete(T)}function j(A){const T=A.target;T.removeEventListener("dispose",j),I(T)}function ne(A){const T=i.get(A);if(T.__webglInit===void 0)return;const q=A.source,ye=h.get(q);if(ye){const fe=ye[T.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&E(A),Object.keys(ye).length===0&&h.delete(q)}i.remove(A)}function E(A){const T=i.get(A);t.deleteTexture(T.__webglTexture);const q=A.source,ye=h.get(q);delete ye[T.__cacheKey],a.memory.textures--}function I(A){const T=A.texture,q=i.get(A),ye=i.get(T);if(ye.__webglTexture!==void 0&&(t.deleteTexture(ye.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(q.__webglFramebuffer[fe]))for(let de=0;de<q.__webglFramebuffer[fe].length;de++)t.deleteFramebuffer(q.__webglFramebuffer[fe][de]);else t.deleteFramebuffer(q.__webglFramebuffer[fe]);q.__webglDepthbuffer&&t.deleteRenderbuffer(q.__webglDepthbuffer[fe])}else{if(Array.isArray(q.__webglFramebuffer))for(let fe=0;fe<q.__webglFramebuffer.length;fe++)t.deleteFramebuffer(q.__webglFramebuffer[fe]);else t.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&t.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&t.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let fe=0;fe<q.__webglColorRenderbuffer.length;fe++)q.__webglColorRenderbuffer[fe]&&t.deleteRenderbuffer(q.__webglColorRenderbuffer[fe]);q.__webglDepthRenderbuffer&&t.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let fe=0,de=T.length;fe<de;fe++){const ke=i.get(T[fe]);ke.__webglTexture&&(t.deleteTexture(ke.__webglTexture),a.memory.textures--),i.remove(T[fe])}i.remove(T),i.remove(A)}let te=0;function oe(){te=0}function z(){const A=te;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),te+=1,A}function ee(A){const T=[];return T.push(A.wrapS),T.push(A.wrapT),T.push(A.wrapR||0),T.push(A.magFilter),T.push(A.minFilter),T.push(A.anisotropy),T.push(A.internalFormat),T.push(A.format),T.push(A.type),T.push(A.generateMipmaps),T.push(A.premultiplyAlpha),T.push(A.flipY),T.push(A.unpackAlignment),T.push(A.colorSpace),T.join()}function Q(A,T){const q=i.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const ye=A.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(q,A,T);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+T)}function le(A,T){const q=i.get(A);if(A.version>0&&q.__version!==A.version){ue(q,A,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+T)}function H(A,T){const q=i.get(A);if(A.version>0&&q.__version!==A.version){ue(q,A,T);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+T)}function Y(A,T){const q=i.get(A);if(A.version>0&&q.__version!==A.version){be(q,A,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+T)}const Z={[mf]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[gf]:t.MIRRORED_REPEAT},ae={[Un]:t.NEAREST,[tm]:t.NEAREST_MIPMAP_NEAREST,[Ba]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[Tu]:t.LINEAR_MIPMAP_NEAREST,[ns]:t.LINEAR_MIPMAP_LINEAR},pe={[qE]:t.NEVER,[tw]:t.ALWAYS,[KE]:t.LESS,[x0]:t.LEQUAL,[ZE]:t.EQUAL,[ew]:t.GEQUAL,[QE]:t.GREATER,[JE]:t.NOTEQUAL};function Ze(A,T,q){if(T.type===$i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Bn||T.magFilter===Tu||T.magFilter===Ba||T.magFilter===ns||T.minFilter===Bn||T.minFilter===Tu||T.minFilter===Ba||T.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(t.texParameteri(A,t.TEXTURE_WRAP_S,Z[T.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Z[T.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Z[T.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ae[T.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ae[T.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(T.wrapS!==wi||T.wrapT!==wi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(T.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==Un&&T.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,pe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ye=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Un||T.minFilter!==Ba&&T.minFilter!==ns||T.type===$i&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Ro&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(t.texParameterf(A,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function J(A,T){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",N));const ye=T.source;let fe=h.get(ye);fe===void 0&&(fe={},h.set(ye,fe));const de=ee(T);if(de!==A.__cacheKey){fe[de]===void 0&&(fe[de]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,q=!0),fe[de].usedTimes++;const ke=fe[A.__cacheKey];ke!==void 0&&(fe[A.__cacheKey].usedTimes--,ke.usedTimes===0&&E(T)),A.__cacheKey=de,A.__webglTexture=fe[de].texture}return q}function ue(A,T,q){let ye=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ye=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ye=t.TEXTURE_3D);const fe=J(A,T),de=T.source;n.bindTexture(ye,A.__webglTexture,t.TEXTURE0+q);const ke=i.get(de);if(de.version!==ke.__version||fe===!0){n.activeTexture(t.TEXTURE0+q);const we=zt.getPrimaries(zt.workingColorSpace),Pe=T.colorSpace===oi?null:zt.getPrimaries(T.colorSpace),me=T.colorSpace===oi||we===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const at=u(T)&&m(T.image)===!1;let he=_(T.image,at,!1,r.maxTextureSize);he=$e(T,he);const wt=m(he)||o,it=s.convert(T.format,T.colorSpace);let et=s.convert(T.type),je=S(T.internalFormat,it,et,T.colorSpace,T.isVideoTexture);Ze(ye,T,wt);let Ne;const ft=T.mipmaps,_t=o&&T.isVideoTexture!==!0&&je!==v0,Lt=ke.__version===void 0||fe===!0,rt=de.dataReady,Tt=w(T,he,wt);if(T.isDepthTexture)je=t.DEPTH_COMPONENT,o?T.type===$i?je=t.DEPTH_COMPONENT32F:T.type===xr?je=t.DEPTH_COMPONENT24:T.type===ss?je=t.DEPTH24_STENCIL8:je=t.DEPTH_COMPONENT16:T.type===$i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===as&&je===t.DEPTH_COMPONENT&&T.type!==wh&&T.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=xr,et=s.convert(T.type)),T.format===xa&&je===t.DEPTH_COMPONENT&&(je=t.DEPTH_STENCIL,T.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ss,et=s.convert(T.type))),Lt&&(_t?n.texStorage2D(t.TEXTURE_2D,1,je,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,je,he.width,he.height,0,it,et,null));else if(T.isDataTexture)if(ft.length>0&&wt){_t&&Lt&&n.texStorage2D(t.TEXTURE_2D,Tt,je,ft[0].width,ft[0].height);for(let L=0,ve=ft.length;L<ve;L++)Ne=ft[L],_t?rt&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,Ne.width,Ne.height,it,et,Ne.data):n.texImage2D(t.TEXTURE_2D,L,je,Ne.width,Ne.height,0,it,et,Ne.data);T.generateMipmaps=!1}else _t?(Lt&&n.texStorage2D(t.TEXTURE_2D,Tt,je,he.width,he.height),rt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he.width,he.height,it,et,he.data)):n.texImage2D(t.TEXTURE_2D,0,je,he.width,he.height,0,it,et,he.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){_t&&Lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Tt,je,ft[0].width,ft[0].height,he.depth);for(let L=0,ve=ft.length;L<ve;L++)Ne=ft[L],T.format!==Ti?it!==null?_t?rt&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,L,0,0,0,Ne.width,Ne.height,he.depth,it,Ne.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,L,je,Ne.width,Ne.height,he.depth,0,Ne.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?rt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,L,0,0,0,Ne.width,Ne.height,he.depth,it,et,Ne.data):n.texImage3D(t.TEXTURE_2D_ARRAY,L,je,Ne.width,Ne.height,he.depth,0,it,et,Ne.data)}else{_t&&Lt&&n.texStorage2D(t.TEXTURE_2D,Tt,je,ft[0].width,ft[0].height);for(let L=0,ve=ft.length;L<ve;L++)Ne=ft[L],T.format!==Ti?it!==null?_t?rt&&n.compressedTexSubImage2D(t.TEXTURE_2D,L,0,0,Ne.width,Ne.height,it,Ne.data):n.compressedTexImage2D(t.TEXTURE_2D,L,je,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?rt&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,Ne.width,Ne.height,it,et,Ne.data):n.texImage2D(t.TEXTURE_2D,L,je,Ne.width,Ne.height,0,it,et,Ne.data)}else if(T.isDataArrayTexture)_t?(Lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Tt,je,he.width,he.height,he.depth),rt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,it,et,he.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,je,he.width,he.height,he.depth,0,it,et,he.data);else if(T.isData3DTexture)_t?(Lt&&n.texStorage3D(t.TEXTURE_3D,Tt,je,he.width,he.height,he.depth),rt&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,it,et,he.data)):n.texImage3D(t.TEXTURE_3D,0,je,he.width,he.height,he.depth,0,it,et,he.data);else if(T.isFramebufferTexture){if(Lt)if(_t)n.texStorage2D(t.TEXTURE_2D,Tt,je,he.width,he.height);else{let L=he.width,ve=he.height;for(let ge=0;ge<Tt;ge++)n.texImage2D(t.TEXTURE_2D,ge,je,L,ve,0,it,et,null),L>>=1,ve>>=1}}else if(ft.length>0&&wt){_t&&Lt&&n.texStorage2D(t.TEXTURE_2D,Tt,je,ft[0].width,ft[0].height);for(let L=0,ve=ft.length;L<ve;L++)Ne=ft[L],_t?rt&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,it,et,Ne):n.texImage2D(t.TEXTURE_2D,L,je,it,et,Ne);T.generateMipmaps=!1}else _t?(Lt&&n.texStorage2D(t.TEXTURE_2D,Tt,je,he.width,he.height),rt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,it,et,he)):n.texImage2D(t.TEXTURE_2D,0,je,it,et,he);g(T,wt)&&y(ye),ke.__version=de.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function be(A,T,q){if(T.image.length!==6)return;const ye=J(A,T),fe=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+q);const de=i.get(fe);if(fe.version!==de.__version||ye===!0){n.activeTexture(t.TEXTURE0+q);const ke=zt.getPrimaries(zt.workingColorSpace),we=T.colorSpace===oi?null:zt.getPrimaries(T.colorSpace),Pe=T.colorSpace===oi||ke===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const me=T.isCompressedTexture||T.image[0].isCompressedTexture,at=T.image[0]&&T.image[0].isDataTexture,he=[];for(let L=0;L<6;L++)!me&&!at?he[L]=_(T.image[L],!1,!0,r.maxCubemapSize):he[L]=at?T.image[L].image:T.image[L],he[L]=$e(T,he[L]);const wt=he[0],it=m(wt)||o,et=s.convert(T.format,T.colorSpace),je=s.convert(T.type),Ne=S(T.internalFormat,et,je,T.colorSpace),ft=o&&T.isVideoTexture!==!0,_t=de.__version===void 0||ye===!0,Lt=fe.dataReady;let rt=w(T,wt,it);Ze(t.TEXTURE_CUBE_MAP,T,it);let Tt;if(me){ft&&_t&&n.texStorage2D(t.TEXTURE_CUBE_MAP,rt,Ne,wt.width,wt.height);for(let L=0;L<6;L++){Tt=he[L].mipmaps;for(let ve=0;ve<Tt.length;ve++){const ge=Tt[ve];T.format!==Ti?et!==null?ft?Lt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve,0,0,ge.width,ge.height,et,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve,Ne,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?Lt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve,0,0,ge.width,ge.height,et,je,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve,Ne,ge.width,ge.height,0,et,je,ge.data)}}}else{Tt=T.mipmaps,ft&&_t&&(Tt.length>0&&rt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,rt,Ne,he[0].width,he[0].height));for(let L=0;L<6;L++)if(at){ft?Lt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,he[L].width,he[L].height,et,je,he[L].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,Ne,he[L].width,he[L].height,0,et,je,he[L].data);for(let ve=0;ve<Tt.length;ve++){const Le=Tt[ve].image[L].image;ft?Lt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve+1,0,0,Le.width,Le.height,et,je,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve+1,Ne,Le.width,Le.height,0,et,je,Le.data)}}else{ft?Lt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,et,je,he[L]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,Ne,et,je,he[L]);for(let ve=0;ve<Tt.length;ve++){const ge=Tt[ve];ft?Lt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve+1,0,0,et,je,ge.image[L]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,ve+1,Ne,et,je,ge.image[L])}}}g(T,it)&&y(t.TEXTURE_CUBE_MAP),de.__version=fe.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function Fe(A,T,q,ye,fe,de){const ke=s.convert(q.format,q.colorSpace),we=s.convert(q.type),Pe=S(q.internalFormat,ke,we,q.colorSpace);if(!i.get(T).__hasExternalTextures){const at=Math.max(1,T.width>>de),he=Math.max(1,T.height>>de);fe===t.TEXTURE_3D||fe===t.TEXTURE_2D_ARRAY?n.texImage3D(fe,de,Pe,at,he,T.depth,0,ke,we,null):n.texImage2D(fe,de,Pe,at,he,0,ke,we,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Be(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ye,fe,i.get(q).__webglTexture,0,Je(T)):(fe===t.TEXTURE_2D||fe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ye,fe,i.get(q).__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(A,T,q){if(t.bindRenderbuffer(t.RENDERBUFFER,A),T.depthBuffer&&!T.stencilBuffer){let ye=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(q||Be(T)){const fe=T.depthTexture;fe&&fe.isDepthTexture&&(fe.type===$i?ye=t.DEPTH_COMPONENT32F:fe.type===xr&&(ye=t.DEPTH_COMPONENT24));const de=Je(T);Be(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,ye,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ye,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,ye,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(T.depthBuffer&&T.stencilBuffer){const ye=Je(T);q&&Be(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,t.DEPTH24_STENCIL8,T.width,T.height):Be(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ye=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let fe=0;fe<ye.length;fe++){const de=ye[fe],ke=s.convert(de.format,de.colorSpace),we=s.convert(de.type),Pe=S(de.internalFormat,ke,we,de.colorSpace),me=Je(T);q&&Be(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,Pe,T.width,T.height):Be(T)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,Pe,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(A,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q(T.depthTexture,0);const ye=i.get(T.depthTexture).__webglTexture,fe=Je(T);if(T.depthTexture.format===as)Be(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ye,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ye,0);else if(T.depthTexture.format===xa)Be(T)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ye,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function yt(A){const T=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Oe(T.__webglFramebuffer,A)}else if(q){T.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ye]),T.__webglDepthbuffer[ye]=t.createRenderbuffer(),Qe(T.__webglDepthbuffer[ye],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),Qe(T.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(A,T,q){const ye=i.get(A);T!==void 0&&Fe(ye.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&yt(A)}function W(A){const T=A.texture,q=i.get(A),ye=i.get(T);A.addEventListener("dispose",j),A.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture()),ye.__version=T.version,a.memory.textures++);const fe=A.isWebGLCubeRenderTarget===!0,de=A.isWebGLMultipleRenderTargets===!0,ke=m(A)||o;if(fe){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(o&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)q.__webglFramebuffer[we][Pe]=t.createFramebuffer()}else q.__webglFramebuffer[we]=t.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)q.__webglFramebuffer[we]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(de)if(r.drawBuffers){const we=A.texture;for(let Pe=0,me=we.length;Pe<me;Pe++){const at=i.get(we[Pe]);at.__webglTexture===void 0&&(at.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Be(A)===!1){const we=de?T:[T];q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Pe=0;Pe<we.length;Pe++){const me=we[Pe];q.__webglColorRenderbuffer[Pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[Pe]);const at=s.convert(me.format,me.colorSpace),he=s.convert(me.type),wt=S(me.internalFormat,at,he,me.colorSpace,A.isXRRenderTarget===!0),it=Je(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,it,wt,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,q.__webglColorRenderbuffer[Pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),Qe(q.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,ye.__webglTexture),Ze(t.TEXTURE_CUBE_MAP,T,ke);for(let we=0;we<6;we++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)Fe(q.__webglFramebuffer[we][Pe],A,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+we,Pe);else Fe(q.__webglFramebuffer[we],A,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);g(T,ke)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){const we=A.texture;for(let Pe=0,me=we.length;Pe<me;Pe++){const at=we[Pe],he=i.get(at);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),Ze(t.TEXTURE_2D,at,ke),Fe(q.__webglFramebuffer,A,at,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,0),g(at,ke)&&y(t.TEXTURE_2D)}n.unbindTexture()}else{let we=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?we=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(we,ye.__webglTexture),Ze(we,T,ke),o&&T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)Fe(q.__webglFramebuffer[Pe],A,T,t.COLOR_ATTACHMENT0,we,Pe);else Fe(q.__webglFramebuffer,A,T,t.COLOR_ATTACHMENT0,we,0);g(T,ke)&&y(we),n.unbindTexture()}A.depthBuffer&&yt(A)}function $t(A){const T=m(A)||o,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ye=0,fe=q.length;ye<fe;ye++){const de=q[ye];if(g(de,T)){const ke=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(de).__webglTexture;n.bindTexture(ke,we),y(ke),n.unbindTexture()}}}function ze(A){if(o&&A.samples>0&&Be(A)===!1){const T=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,ye=A.height;let fe=t.COLOR_BUFFER_BIT;const de=[],ke=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(A),Pe=A.isWebGLMultipleRenderTargets===!0;if(Pe)for(let me=0;me<T.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let me=0;me<T.length;me++){de.push(t.COLOR_ATTACHMENT0+me),A.depthBuffer&&de.push(ke);const at=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(at===!1&&(A.depthBuffer&&(fe|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(fe|=t.STENCIL_BUFFER_BIT)),Pe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[me]),at===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ke]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ke])),Pe){const he=i.get(T[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,q,ye,0,0,q,ye,fe,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,de)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Pe)for(let me=0;me<T.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,we.__webglColorRenderbuffer[me]);const at=i.get(T[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,at,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function Je(A){return Math.min(r.maxSamples,A.samples)}function Be(A){const T=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ct(A){const T=a.render.frame;d.get(A)!==T&&(d.set(A,T),A.update())}function $e(A,T){const q=A.colorSpace,ye=A.format,fe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===yf||q!==tr&&q!==oi&&(zt.getTransfer(q)===Gt?o===!1?e.has("EXT_sRGB")===!0&&ye===Ti?(A.format=yf,A.minFilter=Bn,A.generateMipmaps=!1):T=M0.sRGBToLinear(T):(ye!==Ti||fe!==Lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}this.allocateTextureUnit=z,this.resetTextureUnits=oe,this.setTexture2D=Q,this.setTexture2DArray=le,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=qe,this.setupRenderTarget=W,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Be}function nC(t,e,n){const i=n.isWebGL2;function r(s,a=oi){let o;const l=zt.getTransfer(a);if(s===Lr)return t.UNSIGNED_BYTE;if(s===f0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===h0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===OE)return t.BYTE;if(s===zE)return t.SHORT;if(s===wh)return t.UNSIGNED_SHORT;if(s===d0)return t.INT;if(s===xr)return t.UNSIGNED_INT;if(s===$i)return t.FLOAT;if(s===Ro)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===BE)return t.ALPHA;if(s===Ti)return t.RGBA;if(s===HE)return t.LUMINANCE;if(s===jE)return t.LUMINANCE_ALPHA;if(s===as)return t.DEPTH_COMPONENT;if(s===xa)return t.DEPTH_STENCIL;if(s===yf)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===GE)return t.RED;if(s===p0)return t.RED_INTEGER;if(s===VE)return t.RG;if(s===m0)return t.RG_INTEGER;if(s===g0)return t.RGBA_INTEGER;if(s===bu||s===Au||s===Cu||s===Ru)if(l===Gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===bu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Au)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ru)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===bu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Au)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ru)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nm||s===im||s===rm||s===sm)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===nm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===im)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rm)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sm)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===v0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===am||s===om)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===am)return l===Gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===om)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lm||s===cm||s===um||s===dm||s===fm||s===hm||s===pm||s===mm||s===gm||s===vm||s===ym||s===_m||s===xm||s===Sm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===lm)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cm)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===um)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dm)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fm)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hm)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pm)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mm)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gm)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===vm)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ym)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_m)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xm)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sm)return l===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pu||s===Mm||s===Em)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Pu)return l===Gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Em)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===WE||s===wm||s===Tm||s===bm)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Pu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===wm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Tm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ss?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class iC extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Li extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rC={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),v=.02,x=.005;c.inputState.pinching&&h>v+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=v-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const sC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aC=`
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

}`;class oC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new kn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new kr({extensions:{fragDepth:!0},vertexShader:sC,fragmentShader:aC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new Ma(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class lC extends Ca{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,v=null,x=null;const _=new oC,m=n.getContextAttributes();let u=null,g=null;const y=[],S=[],w=new vt;let C=null;const N=new ai;N.layers.enable(1),N.viewport=new vn;const j=new ai;j.layers.enable(2),j.viewport=new vn;const ne=[N,j],E=new iC;E.layers.enable(1),E.layers.enable(2);let I=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=y[J];return ue===void 0&&(ue=new ed,y[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=y[J];return ue===void 0&&(ue=new ed,y[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=y[J];return ue===void 0&&(ue=new ed,y[J]=ue),ue.getHandSpace()};function oe(J){const ue=S.indexOf(J.inputSource);if(ue===-1)return;const be=y[ue];be!==void 0&&(be.update(J.inputSource,J.frame,c||a),be.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){r.removeEventListener("select",oe),r.removeEventListener("selectstart",oe),r.removeEventListener("selectend",oe),r.removeEventListener("squeeze",oe),r.removeEventListener("squeezestart",oe),r.removeEventListener("squeezeend",oe),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",ee);for(let J=0;J<y.length;J++){const ue=S[J];ue!==null&&(S[J]=null,y[J].disconnect(ue))}I=null,te=null,_.reset(),e.setRenderTarget(u),v=null,h=null,f=null,r=null,g=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:v},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",oe),r.addEventListener("selectstart",oe),r.addEventListener("selectend",oe),r.addEventListener("squeeze",oe),r.addEventListener("squeezestart",oe),r.addEventListener("squeezeend",oe),r.addEventListener("end",z),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),g=new ps(v.framebufferWidth,v.framebufferHeight,{format:Ti,type:Lr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,be=null,Fe=null;m.depth&&(Fe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=m.stencil?xa:as,be=m.stencil?ss:xr);const Qe={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Qe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new ps(h.textureWidth,h.textureHeight,{format:Ti,type:Lr,depthTexture:new F0(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Oe=e.properties.get(g);Oe.__ignoreDepthValues=h.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ee(J){for(let ue=0;ue<J.removed.length;ue++){const be=J.removed[ue],Fe=S.indexOf(be);Fe>=0&&(S[Fe]=null,y[Fe].disconnect(be))}for(let ue=0;ue<J.added.length;ue++){const be=J.added[ue];let Fe=S.indexOf(be);if(Fe===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=S.length){S.push(be),Fe=Oe;break}else if(S[Oe]===null){S[Oe]=be,Fe=Oe;break}if(Fe===-1)break}const Qe=y[Fe];Qe&&Qe.connect(be)}}const Q=new G,le=new G;function H(J,ue,be){Q.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(be.matrixWorld);const Fe=Q.distanceTo(le),Qe=ue.projectionMatrix.elements,Oe=be.projectionMatrix.elements,yt=Qe[14]/(Qe[10]-1),qe=Qe[14]/(Qe[10]+1),W=(Qe[9]+1)/Qe[5],$t=(Qe[9]-1)/Qe[5],ze=(Qe[8]-1)/Qe[0],Je=(Oe[8]+1)/Oe[0],Be=yt*ze,ct=yt*Je,$e=Fe/(-ze+Je),A=$e*-ze;ue.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(A),J.translateZ($e),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const T=yt+$e,q=qe+$e,ye=Be-A,fe=ct+(Fe-A),de=W*qe/q*T,ke=$t*qe/q*T;J.projectionMatrix.makePerspective(ye,fe,de,ke,T,q),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function Y(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;_.texture!==null&&(J.near=_.depthNear,J.far=_.depthFar),E.near=j.near=N.near=J.near,E.far=j.far=N.far=J.far,(I!==E.near||te!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,te=E.far,N.near=I,N.far=te,j.near=I,j.far=te,N.updateProjectionMatrix(),j.updateProjectionMatrix(),J.updateProjectionMatrix());const ue=J.parent,be=E.cameras;Y(E,ue);for(let Fe=0;Fe<be.length;Fe++)Y(be[Fe],ue);be.length===2?H(E,N,j):E.projectionMatrix.copy(N.projectionMatrix),Z(J,E,ue)};function Z(J,ue,be){be===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=_f*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&v===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null};let ae=null;function pe(J,ue){if(d=ue.getViewerPose(c||a),x=ue,d!==null){const be=d.views;v!==null&&(e.setRenderTargetFramebuffer(g,v.framebuffer),e.setRenderTarget(g));let Fe=!1;be.length!==E.cameras.length&&(E.cameras.length=0,Fe=!0);for(let Oe=0;Oe<be.length;Oe++){const yt=be[Oe];let qe=null;if(v!==null)qe=v.getViewport(yt);else{const $t=f.getViewSubImage(h,yt);qe=$t.viewport,Oe===0&&(e.setRenderTargetTextures(g,$t.colorTexture,h.ignoreDepthValues?void 0:$t.depthStencilTexture),e.setRenderTarget(g))}let W=ne[Oe];W===void 0&&(W=new ai,W.layers.enable(Oe),W.viewport=new vn,ne[Oe]=W),W.matrix.fromArray(yt.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(yt.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(qe.x,qe.y,qe.width,qe.height),Oe===0&&(E.matrix.copy(W.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Fe===!0&&E.cameras.push(W)}const Qe=r.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")){const Oe=f.getDepthInformation(be[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,r.renderState)}}for(let be=0;be<y.length;be++){const Fe=S[be],Qe=y[be];Fe!==null&&Qe!==void 0&&Qe.update(Fe,ue,c||a)}_.render(e,E),ae&&ae(J,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),x=null}const Ze=new D0;Ze.setAnimationLoop(pe),this.setAnimationLoop=function(J){ae=J},this.dispose=function(){}}}function cC(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,N0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,y,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&v(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),x(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),_(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Xn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Xn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const y=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*y,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=y*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function v(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Xn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uC(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,y){const S=y.program;i.uniformBlockBinding(g,S)}function c(g,y){let S=r[g.id];S===void 0&&(x(g),S=d(g),r[g.id]=S,g.addEventListener("dispose",m));const w=y.program;i.updateUBOMapping(g,w);const C=e.render.frame;s[g.id]!==C&&(h(g),s[g.id]=C)}function d(g){const y=f();g.__bindingPointIndex=y;const S=t.createBuffer(),w=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,w,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,S),S}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const y=r[g.id],S=g.uniforms,w=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let C=0,N=S.length;C<N;C++){const j=Array.isArray(S[C])?S[C]:[S[C]];for(let ne=0,E=j.length;ne<E;ne++){const I=j[ne];if(v(I,C,ne,w)===!0){const te=I.__offset,oe=Array.isArray(I.value)?I.value:[I.value];let z=0;for(let ee=0;ee<oe.length;ee++){const Q=oe[ee],le=_(Q);typeof Q=="number"||typeof Q=="boolean"?(I.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,te+z,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=0,I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=0,I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=0):(Q.toArray(I.__data,z),z+=le.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,te,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(g,y,S,w){const C=g.value,N=y+"_"+S;if(w[N]===void 0)return typeof C=="number"||typeof C=="boolean"?w[N]=C:w[N]=C.clone(),!0;{const j=w[N];if(typeof C=="number"||typeof C=="boolean"){if(j!==C)return w[N]=C,!0}else if(j.equals(C)===!1)return j.copy(C),!0}return!1}function x(g){const y=g.uniforms;let S=0;const w=16;for(let N=0,j=y.length;N<j;N++){const ne=Array.isArray(y[N])?y[N]:[y[N]];for(let E=0,I=ne.length;E<I;E++){const te=ne[E],oe=Array.isArray(te.value)?te.value:[te.value];for(let z=0,ee=oe.length;z<ee;z++){const Q=oe[z],le=_(Q),H=S%w;H!==0&&w-H<le.boundary&&(S+=w-H),te.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=S,S+=le.storage}}}const C=S%w;return C>0&&(S+=w-C),g.__size=S,g.__cache={},this}function _(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),y}function m(g){const y=g.target;y.removeEventListener("dispose",m);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class j0{constructor(e={}){const{canvas:n=iw(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const v=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this._useLegacyLights=!1,this.toneMapping=Nr,this.toneMappingExposure=1;const y=this;let S=!1,w=0,C=0,N=null,j=-1,ne=null;const E=new vn,I=new vn;let te=null;const oe=new pt(0);let z=0,ee=n.width,Q=n.height,le=1,H=null,Y=null;const Z=new vn(0,0,ee,Q),ae=new vn(0,0,ee,Q);let pe=!1;const Ze=new bh;let J=!1,ue=!1,be=null;const Fe=new nn,Qe=new vt,Oe=new G,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return N===null?le:1}let W=i;function $t(b,B){for(let $=0;$<b.length;$++){const K=b[$],X=n.getContext(K,B);if(X!==null)return X}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Eh}`),n.addEventListener("webglcontextlost",Tt,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ve,!1),W===null){const B=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&B.shift(),W=$t(B,b),W===null)throw $t(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ze,Je,Be,ct,$e,A,T,q,ye,fe,de,ke,we,Pe,me,at,he,wt,it,et,je,Ne,ft,_t;function Lt(){ze=new vb(W),Je=new db(W,ze,e),ze.init(Je),Ne=new nC(W,ze,Je),Be=new eC(W,ze,Je),ct=new xb(W),$e=new BA,A=new tC(W,ze,Be,$e,Je,Ne,ct),T=new hb(y),q=new gb(y),ye=new Cw(W,Je),ft=new cb(W,ze,ye,Je),fe=new yb(W,ye,ct,ft),de=new wb(W,fe,ye,ct),it=new Eb(W,Je,A),at=new fb($e),ke=new zA(y,T,q,ze,Je,ft,at),we=new cC(y,$e),Pe=new jA,me=new YA(ze,Je),wt=new lb(y,T,q,Be,de,h,l),he=new JA(y,de,Je),_t=new uC(W,ct,Je,Be),et=new ub(W,ze,ct,Je),je=new _b(W,ze,ct,Je),ct.programs=ke.programs,y.capabilities=Je,y.extensions=ze,y.properties=$e,y.renderLists=Pe,y.shadowMap=he,y.state=Be,y.info=ct}Lt();const rt=new lC(y,W);this.xr=rt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const b=ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(b){b!==void 0&&(le=b,this.setSize(ee,Q,!1))},this.getSize=function(b){return b.set(ee,Q)},this.setSize=function(b,B,$=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=b,Q=B,n.width=Math.floor(b*le),n.height=Math.floor(B*le),$===!0&&(n.style.width=b+"px",n.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(ee*le,Q*le).floor()},this.setDrawingBufferSize=function(b,B,$){ee=b,Q=B,le=$,n.width=Math.floor(b*$),n.height=Math.floor(B*$),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,B,$,K){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,B,$,K),Be.viewport(E.copy(Z).multiplyScalar(le).floor())},this.getScissor=function(b){return b.copy(ae)},this.setScissor=function(b,B,$,K){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,B,$,K),Be.scissor(I.copy(ae).multiplyScalar(le).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){Be.setScissorTest(pe=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){Y=b},this.getClearColor=function(b){return b.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(b=!0,B=!0,$=!0){let K=0;if(b){let X=!1;if(N!==null){const Me=N.texture.format;X=Me===g0||Me===m0||Me===p0}if(X){const Me=N.texture.type,Ie=Me===Lr||Me===xr||Me===wh||Me===ss||Me===f0||Me===h0,Re=wt.getClearColor(),Ke=wt.getClearAlpha(),tt=Re.r,nt=Re.g,Ge=Re.b;Ie?(v[0]=tt,v[1]=nt,v[2]=Ge,v[3]=Ke,W.clearBufferuiv(W.COLOR,0,v)):(x[0]=tt,x[1]=nt,x[2]=Ge,x[3]=Ke,W.clearBufferiv(W.COLOR,0,x))}else K|=W.COLOR_BUFFER_BIT}B&&(K|=W.DEPTH_BUFFER_BIT),$&&(K|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Pe.dispose(),me.dispose(),$e.dispose(),T.dispose(),q.dispose(),de.dispose(),ft.dispose(),_t.dispose(),ke.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",rn),rt.removeEventListener("sessionend",bt),be&&(be.dispose(),be=null),Ce.stop()};function Tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=ct.autoReset,B=he.enabled,$=he.autoUpdate,K=he.needsUpdate,X=he.type;Lt(),ct.autoReset=b,he.enabled=B,he.autoUpdate=$,he.needsUpdate=K,he.type=X}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ge(b){const B=b.target;B.removeEventListener("dispose",ge),Le(B)}function Le(b){Xe(b),$e.remove(b)}function Xe(b){const B=$e.get(b).programs;B!==void 0&&(B.forEach(function($){ke.releaseProgram($)}),b.isShaderMaterial&&ke.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,$,K,X,Me){B===null&&(B=yt);const Ie=X.isMesh&&X.matrixWorld.determinant()<0,Re=ht(b,B,$,K,X);Be.setMaterial(K,Ie);let Ke=$.index,tt=1;if(K.wireframe===!0){if(Ke=fe.getWireframeAttribute($),Ke===void 0)return;tt=2}const nt=$.drawRange,Ge=$.attributes.position;let mt=nt.start*tt,Jt=(nt.start+nt.count)*tt;Me!==null&&(mt=Math.max(mt,Me.start*tt),Jt=Math.min(Jt,(Me.start+Me.count)*tt)),Ke!==null?(mt=Math.max(mt,0),Jt=Math.min(Jt,Ke.count)):Ge!=null&&(mt=Math.max(mt,0),Jt=Math.min(Jt,Ge.count));const Dt=Jt-mt;if(Dt<0||Dt===1/0)return;ft.setup(X,K,Re,$,Ke);let kt,At=et;if(Ke!==null&&(kt=ye.get(Ke),At=je,At.setIndex(kt)),X.isMesh)K.wireframe===!0?(Be.setLineWidth(K.wireframeLinewidth*qe()),At.setMode(W.LINES)):At.setMode(W.TRIANGLES);else if(X.isLine){let ot=K.linewidth;ot===void 0&&(ot=1),Be.setLineWidth(ot*qe()),X.isLineSegments?At.setMode(W.LINES):X.isLineLoop?At.setMode(W.LINE_LOOP):At.setMode(W.LINE_STRIP)}else X.isPoints?At.setMode(W.POINTS):X.isSprite&&At.setMode(W.TRIANGLES);if(X.isBatchedMesh)At.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)At.renderInstances(mt,Dt,X.count);else if($.isInstancedBufferGeometry){const ot=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Zt=Math.min($.instanceCount,ot);At.renderInstances(mt,Dt,Zt)}else At.render(mt,Dt)};function St(b,B,$){b.transparent===!0&&b.side===Ei&&b.forceSinglePass===!1?(b.side=Xn,b.needsUpdate=!0,xe(b,B,$),b.side=Fr,b.needsUpdate=!0,xe(b,B,$),b.side=Ei):xe(b,B,$)}this.compile=function(b,B,$=null){$===null&&($=b),m=me.get($),m.init(),g.push(m),$.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),b!==$&&b.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(y._useLegacyLights);const K=new Set;return b.traverse(function(X){const Me=X.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){const Re=Me[Ie];St(Re,$,X),K.add(Re)}else St(Me,$,X),K.add(Me)}),g.pop(),m=null,K},this.compileAsync=function(b,B,$=null){const K=this.compile(b,B,$);return new Promise(X=>{function Me(){if(K.forEach(function(Ie){$e.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){X(b);return}setTimeout(Me,10)}ze.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Et=null;function Ht(b){Et&&Et(b)}function rn(){Ce.stop()}function bt(){Ce.start()}const Ce=new D0;Ce.setAnimationLoop(Ht),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(b){Et=b,rt.setAnimationLoop(b),b===null?Ce.stop():Ce.start()},rt.addEventListener("sessionstart",rn),rt.addEventListener("sessionend",bt),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(B),B=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,B,N),m=me.get(b,g.length),m.init(),g.push(m),Fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ze.setFromProjectionMatrix(Fe),ue=this.localClippingEnabled,J=at.init(this.clippingPlanes,ue),_=Pe.get(b,u.length),_.init(),u.push(_),hn(b,B,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(H,Y),this.info.render.frame++,J===!0&&at.beginShadows();const $=m.state.shadowsArray;if(he.render($,b,B),J===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),(rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1)&&wt.render(_,b),m.setupLights(y._useLegacyLights),B.isArrayCamera){const K=B.cameras;for(let X=0,Me=K.length;X<Me;X++){const Ie=K[X];ie(_,b,Ie,Ie.viewport)}}else ie(_,b,B);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(y,b,B),ft.resetDefaultState(),j=-1,ne=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function hn(b,B,$,K){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ze.intersectsSprite(b)){K&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Fe);const Ie=de.update(b),Re=b.material;Re.visible&&_.push(b,Ie,Re,$,Oe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ze.intersectsObject(b))){const Ie=de.update(b),Re=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Oe.copy(Ie.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(Fe)),Array.isArray(Re)){const Ke=Ie.groups;for(let tt=0,nt=Ke.length;tt<nt;tt++){const Ge=Ke[tt],mt=Re[Ge.materialIndex];mt&&mt.visible&&_.push(b,Ie,mt,$,Oe.z,Ge)}}else Re.visible&&_.push(b,Ie,Re,$,Oe.z,null)}}const Me=b.children;for(let Ie=0,Re=Me.length;Ie<Re;Ie++)hn(Me[Ie],B,$,K)}function ie(b,B,$,K){const X=b.opaque,Me=b.transmissive,Ie=b.transparent;m.setupLightsView($),J===!0&&at.setGlobalState(y.clippingPlanes,$),Me.length>0&&De(X,Me,B,$),K&&Be.viewport(E.copy(K)),X.length>0&&Ae(X,B,$),Me.length>0&&Ae(Me,B,$),Ie.length>0&&Ae(Ie,B,$),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function De(b,B,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Me=Je.isWebGL2;be===null&&(be=new ps(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")?Ro:Lr,minFilter:ns,samples:Me?4:0})),y.getDrawingBufferSize(Qe),Me?be.setSize(Qe.x,Qe.y):be.setSize(xf(Qe.x),xf(Qe.y));const Ie=y.getRenderTarget();y.setRenderTarget(be),y.getClearColor(oe),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear();const Re=y.toneMapping;y.toneMapping=Nr,Ae(b,$,K),A.updateMultisampleRenderTarget(be),A.updateRenderTargetMipmap(be);let Ke=!1;for(let tt=0,nt=B.length;tt<nt;tt++){const Ge=B[tt],mt=Ge.object,Jt=Ge.geometry,Dt=Ge.material,kt=Ge.group;if(Dt.side===Ei&&mt.layers.test(K.layers)){const At=Dt.side;Dt.side=Xn,Dt.needsUpdate=!0,Se(mt,$,K,Jt,Dt,kt),Dt.side=At,Dt.needsUpdate=!0,Ke=!0}}Ke===!0&&(A.updateMultisampleRenderTarget(be),A.updateRenderTargetMipmap(be)),y.setRenderTarget(Ie),y.setClearColor(oe,z),y.toneMapping=Re}function Ae(b,B,$){const K=B.isScene===!0?B.overrideMaterial:null;for(let X=0,Me=b.length;X<Me;X++){const Ie=b[X],Re=Ie.object,Ke=Ie.geometry,tt=K===null?Ie.material:K,nt=Ie.group;Re.layers.test($.layers)&&Se(Re,B,$,Ke,tt,nt)}}function Se(b,B,$,K,X,Me){b.onBeforeRender(y,B,$,K,X,Me),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(y,B,$,K,b,Me),X.transparent===!0&&X.side===Ei&&X.forceSinglePass===!1?(X.side=Xn,X.needsUpdate=!0,y.renderBufferDirect($,B,K,X,b,Me),X.side=Fr,X.needsUpdate=!0,y.renderBufferDirect($,B,K,X,b,Me),X.side=Ei):y.renderBufferDirect($,B,K,X,b,Me),b.onAfterRender(y,B,$,K,X,Me)}function xe(b,B,$){B.isScene!==!0&&(B=yt);const K=$e.get(b),X=m.state.lights,Me=m.state.shadowsArray,Ie=X.state.version,Re=ke.getParameters(b,X.state,Me,B,$),Ke=ke.getProgramCacheKey(Re);let tt=K.programs;K.environment=b.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(b.isMeshStandardMaterial?q:T).get(b.envMap||K.environment),tt===void 0&&(b.addEventListener("dispose",ge),tt=new Map,K.programs=tt);let nt=tt.get(Ke);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===Ie)return Ye(b,Re),nt}else Re.uniforms=ke.getUniforms(b),b.onBuild($,Re,y),b.onBeforeCompile(Re,y),nt=ke.acquireProgram(Re,Ke),tt.set(Ke,nt),K.uniforms=Re.uniforms;const Ge=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ge.clippingPlanes=at.uniform),Ye(b,Re),K.needsLights=It(b),K.lightsStateVersion=Ie,K.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=nt,K.uniformsList=null,nt}function He(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Vl.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Ye(b,B){const $=$e.get(b);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function ht(b,B,$,K,X){B.isScene!==!0&&(B=yt),A.resetTextureUnits();const Me=B.fog,Ie=K.isMeshStandardMaterial?B.environment:null,Re=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:tr,Ke=(K.isMeshStandardMaterial?q:T).get(K.envMap||Ie),tt=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,nt=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ge=!!$.morphAttributes.position,mt=!!$.morphAttributes.normal,Jt=!!$.morphAttributes.color;let Dt=Nr;K.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Dt=y.toneMapping);const kt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,At=kt!==void 0?kt.length:0,ot=$e.get(K),Zt=m.state.lights;if(J===!0&&(ue===!0||b!==ne)){const re=b===ne&&K.id===j;at.setState(K,b,re)}let M=!1;K.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Zt.state.version||ot.outputColorSpace!==Re||X.isBatchedMesh&&ot.batching===!1||!X.isBatchedMesh&&ot.batching===!0||X.isInstancedMesh&&ot.instancing===!1||!X.isInstancedMesh&&ot.instancing===!0||X.isSkinnedMesh&&ot.skinning===!1||!X.isSkinnedMesh&&ot.skinning===!0||X.isInstancedMesh&&ot.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ot.instancingColor===!1&&X.instanceColor!==null||ot.envMap!==Ke||K.fog===!0&&ot.fog!==Me||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==at.numPlanes||ot.numIntersection!==at.numIntersection)||ot.vertexAlphas!==tt||ot.vertexTangents!==nt||ot.morphTargets!==Ge||ot.morphNormals!==mt||ot.morphColors!==Jt||ot.toneMapping!==Dt||Je.isWebGL2===!0&&ot.morphTargetsCount!==At)&&(M=!0):(M=!0,ot.__version=K.version);let O=ot.currentProgram;M===!0&&(O=xe(K,B,X));let U=!1,P=!1,V=!1;const F=O.getUniforms(),D=ot.uniforms;if(Be.useProgram(O.program)&&(U=!0,P=!0,V=!0),K.id!==j&&(j=K.id,P=!0),U||ne!==b){F.setValue(W,"projectionMatrix",b.projectionMatrix),F.setValue(W,"viewMatrix",b.matrixWorldInverse);const re=F.map.cameraPosition;re!==void 0&&re.setValue(W,Oe.setFromMatrixPosition(b.matrixWorld)),Je.logarithmicDepthBuffer&&F.setValue(W,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&F.setValue(W,"isOrthographic",b.isOrthographicCamera===!0),ne!==b&&(ne=b,P=!0,V=!0)}if(X.isSkinnedMesh){F.setOptional(W,X,"bindMatrix"),F.setOptional(W,X,"bindMatrixInverse");const re=X.skeleton;re&&(Je.floatVertexTextures?(re.boneTexture===null&&re.computeBoneTexture(),F.setValue(W,"boneTexture",re.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(F.setOptional(W,X,"batchingTexture"),F.setValue(W,"batchingTexture",X._matricesTexture,A));const k=$.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0&&Je.isWebGL2===!0)&&it.update(X,$,O),(P||ot.receiveShadow!==X.receiveShadow)&&(ot.receiveShadow=X.receiveShadow,F.setValue(W,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(D.envMap.value=Ke,D.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),P&&(F.setValue(W,"toneMappingExposure",y.toneMappingExposure),ot.needsLights&&st(D,V),Me&&K.fog===!0&&we.refreshFogUniforms(D,Me),we.refreshMaterialUniforms(D,K,le,Q,be),Vl.upload(W,He(ot),D,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Vl.upload(W,He(ot),D,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&F.setValue(W,"center",X.center),F.setValue(W,"modelViewMatrix",X.modelViewMatrix),F.setValue(W,"normalMatrix",X.normalMatrix),F.setValue(W,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const re=K.uniformsGroups;for(let se=0,ce=re.length;se<ce;se++)if(Je.isWebGL2){const Ee=re[se];_t.update(Ee,O),_t.bind(Ee,O)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return O}function st(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function It(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,B,$){$e.get(b.texture).__webglTexture=B,$e.get(b.depthTexture).__webglTexture=$;const K=$e.get(b);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,B){const $=$e.get(b);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,$=0){N=b,w=B,C=$;let K=!0,X=null,Me=!1,Ie=!1;if(b){const Ke=$e.get(b);Ke.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(W.FRAMEBUFFER,null),K=!1):Ke.__webglFramebuffer===void 0?A.setupRenderTarget(b):Ke.__hasExternalTextures&&A.rebindTextures(b,$e.get(b.texture).__webglTexture,$e.get(b.depthTexture).__webglTexture);const tt=b.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ie=!0);const nt=$e.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(nt[B])?X=nt[B][$]:X=nt[B],Me=!0):Je.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?X=$e.get(b).__webglMultisampledFramebuffer:Array.isArray(nt)?X=nt[$]:X=nt,E.copy(b.viewport),I.copy(b.scissor),te=b.scissorTest}else E.copy(Z).multiplyScalar(le).floor(),I.copy(ae).multiplyScalar(le).floor(),te=pe;if(Be.bindFramebuffer(W.FRAMEBUFFER,X)&&Je.drawBuffers&&K&&Be.drawBuffers(b,X),Be.viewport(E),Be.scissor(I),Be.setScissorTest(te),Me){const Ke=$e.get(b.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ke.__webglTexture,$)}else if(Ie){const Ke=$e.get(b.texture),tt=B||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ke.__webglTexture,$||0,tt)}j=-1},this.readRenderTargetPixels=function(b,B,$,K,X,Me,Ie){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=$e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Re=Re[Ie]),Re){Be.bindFramebuffer(W.FRAMEBUFFER,Re);try{const Ke=b.texture,tt=Ke.format,nt=Ke.type;if(tt!==Ti&&Ne.convert(tt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=nt===Ro&&(ze.has("EXT_color_buffer_half_float")||Je.isWebGL2&&ze.has("EXT_color_buffer_float"));if(nt!==Lr&&Ne.convert(nt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===$i&&(Je.isWebGL2||ze.has("OES_texture_float")||ze.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-K&&$>=0&&$<=b.height-X&&W.readPixels(B,$,K,X,Ne.convert(tt),Ne.convert(nt),Me)}finally{const Ke=N!==null?$e.get(N).__webglFramebuffer:null;Be.bindFramebuffer(W.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(b,B,$=0){const K=Math.pow(2,-$),X=Math.floor(B.image.width*K),Me=Math.floor(B.image.height*K);A.setTexture2D(B,0),W.copyTexSubImage2D(W.TEXTURE_2D,$,0,0,b.x,b.y,X,Me),Be.unbindTexture()},this.copyTextureToTexture=function(b,B,$,K=0){const X=B.image.width,Me=B.image.height,Ie=Ne.convert($.format),Re=Ne.convert($.type);A.setTexture2D($,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,K,b.x,b.y,X,Me,Ie,Re,B.image.data):B.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,K,b.x,b.y,B.mipmaps[0].width,B.mipmaps[0].height,Ie,B.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,K,b.x,b.y,Ie,Re,B.image),K===0&&$.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(b,B,$,K,X=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=b.max.x-b.min.x+1,Ie=b.max.y-b.min.y+1,Re=b.max.z-b.min.z+1,Ke=Ne.convert(K.format),tt=Ne.convert(K.type);let nt;if(K.isData3DTexture)A.setTexture3D(K,0),nt=W.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),nt=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);const Ge=W.getParameter(W.UNPACK_ROW_LENGTH),mt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Jt=W.getParameter(W.UNPACK_SKIP_PIXELS),Dt=W.getParameter(W.UNPACK_SKIP_ROWS),kt=W.getParameter(W.UNPACK_SKIP_IMAGES),At=$.isCompressedTexture?$.mipmaps[X]:$.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,At.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,At.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,b.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,b.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,b.min.z),$.isDataTexture||$.isData3DTexture?W.texSubImage3D(nt,X,B.x,B.y,B.z,Me,Ie,Re,Ke,tt,At.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(nt,X,B.x,B.y,B.z,Me,Ie,Re,Ke,At.data)):W.texSubImage3D(nt,X,B.x,B.y,B.z,Me,Ie,Re,Ke,tt,At),W.pixelStorei(W.UNPACK_ROW_LENGTH,Ge),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,mt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Jt),W.pixelStorei(W.UNPACK_SKIP_ROWS,Dt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,kt),X===0&&K.generateMipmaps&&W.generateMipmap(nt),Be.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Be.unbindTexture()},this.resetState=function(){w=0,C=0,N=null,Be.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Th?"display-p3":"srgb",n.unpackColorSpace=zt.workingColorSpace===$c?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xn?os:y0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===os?xn:tr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class dC extends j0{}dC.prototype.isWebGL1Renderer=!0;class fC extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class hC{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=vf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ir()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ls("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new G;class Ec{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Ln.fromBufferAttribute(this,n),Ln.applyMatrix4(e),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ln.fromBufferAttribute(this,n),Ln.applyNormalMatrix(e),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ln.fromBufferAttribute(this,n),Ln.transformDirection(e),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Di(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Di(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Di(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Di(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Di(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Sn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mf extends ys{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ks;const Wa=new G,Os=new G,zs=new G,Bs=new vt,$a=new vt,G0=new nn,El=new G,Xa=new G,wl=new G,gg=new vt,td=new vt,vg=new vt;class yg extends un{constructor(e=new Mf){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new Mn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hC(n,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new Ec(i,3,0,!1)),ks.setAttribute("uv",new Ec(i,2,3,!1))}this.geometry=ks,this.material=e,this.center=new vt(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),G0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-zs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Tl(El.set(-.5,-.5,0),zs,a,Os,r,s),Tl(Xa.set(.5,-.5,0),zs,a,Os,r,s),Tl(wl.set(.5,.5,0),zs,a,Os,r,s),gg.set(0,0),td.set(1,0),vg.set(1,1);let o=e.ray.intersectTriangle(El,Xa,wl,!1,Wa);if(o===null&&(Tl(Xa.set(-.5,.5,0),zs,a,Os,r,s),td.set(0,1),o=e.ray.intersectTriangle(El,wl,Xa,!1,Wa),o===null))return;const l=e.ray.origin.distanceTo(Wa);l<e.near||l>e.far||n.push({distance:l,point:Wa.clone(),uv:li.getInterpolation(Wa,El,Xa,wl,gg,td,vg,new vt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Tl(t,e,n,i,r,s){Bs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?($a.x=s*Bs.x-r*Bs.y,$a.y=r*Bs.x+s*Bs.y):$a.copy(Bs),t.copy(e),t.x+=$a.x,t.y+=$a.y,t.applyMatrix4(G0)}class ii extends ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _g=new G,xg=new G,Sg=new nn,nd=new T0,bl=new Xc;class Ef extends un{constructor(e=new Mn,n=new ii){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)_g.fromBufferAttribute(n,r-1),xg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=_g.distanceTo(xg);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(r),bl.radius+=s,e.ray.intersectsSphere(bl)===!1)return;Sg.copy(r).invert(),nd.copy(e.ray).applyMatrix4(Sg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new G,d=new G,f=new G,h=new G,v=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){const u=Math.max(0,a.start),g=Math.min(x.count,a.start+a.count);for(let y=u,S=g-1;y<S;y+=v){const w=x.getX(y),C=x.getX(y+1);if(c.fromBufferAttribute(m,w),d.fromBufferAttribute(m,C),nd.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const j=e.ray.origin.distanceTo(h);j<e.near||j>e.far||n.push({distance:j,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let y=u,S=g-1;y<S;y+=v){if(c.fromBufferAttribute(m,y),d.fromBufferAttribute(m,y+1),nd.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||n.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Mg=new G,Eg=new G;class lo extends Ef{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Mg.fromBufferAttribute(n,r),Eg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Mg.distanceTo(Eg);e.setAttribute("lineDistance",new wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wg extends kn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Al=new G,Cl=new G,id=new G,Rl=new li;class pC extends Mn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Gl*n),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],d=["a","b","c"],f=new Array(3),h={},v=[];for(let x=0;x<l;x+=3){a?(c[0]=a.getX(x),c[1]=a.getX(x+1),c[2]=a.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:_,b:m,c:u}=Rl;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),Rl.getNormal(id),f[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let g=0;g<3;g++){const y=(g+1)%3,S=f[g],w=f[y],C=Rl[d[g]],N=Rl[d[y]],j=`${S}_${w}`,ne=`${w}_${S}`;ne in h&&h[ne]?(id.dot(h[ne].normal)<=s&&(v.push(C.x,C.y,C.z),v.push(N.x,N.y,N.z)),h[ne]=null):j in h||(h[j]={index0:c[g],index1:c[y],normal:id.clone()})}}for(const x in h)if(h[x]){const{index0:_,index1:m}=h[x];Al.fromBufferAttribute(o,_),Cl.fromBufferAttribute(o,m),v.push(Al.x,Al.y,Al.z),v.push(Cl.x,Cl.y,Cl.z)}this.setAttribute("position",new wn(v,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ch extends Mn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new G,h=new G,v=[],x=[],_=[],m=[];for(let u=0;u<=i;u++){const g=[],y=u/i;let S=0;u===0&&a===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let w=0;w<=n;w++){const C=w/n;f.x=-e*Math.cos(r+C*s)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(r+C*s)*Math.sin(a+y*o),x.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(C+S,1-y),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const y=d[u][g+1],S=d[u][g],w=d[u+1][g],C=d[u+1][g+1];(u!==0||a>0)&&v.push(y,S,C),(u!==i-1||l<Math.PI)&&v.push(S,w,C)}this.setIndex(v),this.setAttribute("position",new wn(x,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ch(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wr extends ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_0,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rh extends un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class mC extends Rh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const rd=new nn,Tg=new G,bg=new G;class gC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bh,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Tg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tg),bg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bg),n.updateMatrixWorld(),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vC extends gC{constructor(){super(new U0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ag extends Rh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new vC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yC extends Rh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class _C extends lo{constructor(e=10,n=10,i=4473924,r=8947848){i=new pt(i),r=new pt(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let h=0,v=0,x=-o;h<=n;h++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const _=h===s?i:r;_.toArray(c,v),v+=3,_.toArray(c,v),v+=3,_.toArray(c,v),v+=3,_.toArray(c,v),v+=3}const d=new Mn;d.setAttribute("position",new wn(l,3)),d.setAttribute("color",new wn(c,3));const f=new ii({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class xC extends lo{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Mn;r.setAttribute("position",new wn(n,3)),r.setAttribute("color",new wn(i,3));const s=new ii({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new pt,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);function sd(t,e,n){return t<e?e:t>n?n:t}function SC(t){const e=R.useRef(null),n=R.useRef([]),i=R.useRef(null),r=R.useRef(0),s=R.useRef(null),a=R.useRef({enabled:!0,scale:1,background:!0}),o=R.useRef(!0),l=R.useRef(null),c=R.useRef([]),d=R.useRef([]),f=R.useRef(null),h=R.useRef([]),v=R.useRef({markers:!0,trail:!0,death:!0,ping:!0,terrain:!0,towns:!0});return R.useEffect(()=>{n.current=t.players,v.current.markers=!0},[t.players]),R.useEffect(()=>{i.current=t.focusTarget},[t.focusTarget]),R.useEffect(()=>{r.current=t.focusNonce},[t.focusNonce]),R.useEffect(()=>{s.current=typeof t.followPlayerId=="number"?t.followPlayerId:null},[t.followPlayerId]),R.useEffect(()=>{a.current=t.nameTags||{enabled:!0,scale:1,background:!0},v.current.markers=!0},[t.nameTags]),R.useEffect(()=>{o.current=t.showAimLines!==!1,v.current.markers=!0},[t.showAimLines]),R.useEffect(()=>{l.current=t.trail||null,v.current.trail=!0},[t.trail]),R.useEffect(()=>{c.current=Array.isArray(t.deathMarkers)?t.deathMarkers:[],v.current.death=!0},[t.deathMarkers]),R.useEffect(()=>{d.current=Array.isArray(t.pingMarkers)?t.pingMarkers:[],v.current.ping=!0},[t.pingMarkers]),R.useEffect(()=>{f.current=t.terrain||null,v.current.terrain=!0},[t.terrain]),R.useEffect(()=>{h.current=Array.isArray(t.towns)?t.towns:[],v.current.towns=!0},[t.towns]),R.useEffect(()=>{const x=e.current;if(!x)return;const _=x,m=new j0({canvas:_,antialias:!0,powerPreference:"high-performance"});m.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),m.shadowMap.enabled=!1;const u=new fC;u.background=new pt(724761);const g=new ai(70,1,.1,2e4);g.position.set(0,25,60);const y=new yC(16777215,.28);u.add(y);const S=new mC(9418495,724761,.35);u.add(S);const w=new Ag(16777215,1.15);w.position.set(150,260,130),w.castShadow=!1,u.add(w);const C=new Ag(16777215,.35);C.position.set(-180,160,-120),u.add(C);const N=new _C(2e3,200,3293278,1910328);u.add(N);const j=new xC(10);u.add(j);const ne=new Li;u.add(ne);const E=new Li;u.add(E);const I=new Li;u.add(I);const te=new Li;u.add(te);const oe=new Li;u.add(oe);const z=new Li;u.add(z);const ee=new Ch(.4,16,12),Q=new Wr({color:16366681}),le=new Wr({color:16757322}),H=new Wr({color:9081766}),Y=new Wr({color:2795519,emissive:731972,emissiveIntensity:.9}),Z=new Wr({color:11818495,emissive:2752575,emissiveIntensity:.9}),ae=new ii({color:16366681,transparent:!0,opacity:.8}),pe=new ii({color:16757322,transparent:!0,opacity:.8}),Ze=new ii({color:9081766,transparent:!0,opacity:.7}),J=new ii({color:2795519,transparent:!0,opacity:.95}),ue=new ii({color:11818495,transparent:!0,opacity:.95}),be=new ii({color:16366681,transparent:!0,opacity:.35}),Fe=new ii({color:16730698,transparent:!0,opacity:.9}),Qe=new ii({color:16366681,transparent:!0,opacity:.95}),Oe=new Wr({vertexColors:!0,roughness:1,metalness:0,side:Ei,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),yt=new ii({color:15134195,transparent:!0,opacity:.55}),qe=new Map,W=new Map,$t=new Map,ze=new Map,Je=new Map,Be=new Map;let ct=null,$e=null,A=null,T="",q=null;function ye(ie){const De=ie.material;De.map&&De.map.dispose(),De.dispose()}function fe(){const ie=h.current;if(ie===q)return;q=ie;for(const xe of $t.values())ye(xe),oe.remove(xe);if($t.clear(),!ie||ie.length===0)return;const De={scale:2.8,background:!1},Ae=xe=>/^type:\s*\d+\s*$/i.test(xe.trim()),Se=xe=>{let He=(xe||"").trim();return He=He.replace(/^#AR-MapLocation_/i,""),He=He.replace(/_/g," ").trim(),He};for(const xe of ie){if(!xe||typeof xe.name!="string"||!xe.name)continue;const He=Se(xe.name);if(!He||Ae(He))continue;const Ye=xe.pos;if(!Ye||!Number.isFinite(Ye.x)||!Number.isFinite(Ye.y)||!Number.isFinite(Ye.z))continue;const ht=ke(He,De);we(ht,De),ht.frustumCulled=!1,ht.material.depthWrite=!1,ht.position.set(Ye.x,Ye.y+5,Ye.z),oe.add(ht);const st=Math.round(Ye.x),It=Math.round(Ye.z),b=`${He}|${st}|${It}`;$t.set(b,ht)}}let de=null;function ke(ie,De){const Ae=document.createElement("canvas"),Se=Ae.getContext("2d");if(!Se){const Me=new wg(document.createElement("canvas")),Ie=new Mf({map:Me,transparent:!0});return new yg(Ie)}const xe=16;Se.font=`600 ${xe}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;const He=10,Ye=6,ht=Se.measureText(ie),st=Math.ceil(ht.width),It=Math.max(8,st+He*2),b=xe+Ye*2,B=2;if(Ae.width=It*B,Ae.height=b*B,Se.setTransform(B,0,0,B,0,0),Se.clearRect(0,0,It,b),De.background){Se.fillStyle="rgba(0,0,0,0.55)";const Me=6;Se.beginPath(),Se.moveTo(Me,0),Se.lineTo(It-Me,0),Se.quadraticCurveTo(It,0,It,Me),Se.lineTo(It,b-Me),Se.quadraticCurveTo(It,b,It-Me,b),Se.lineTo(Me,b),Se.quadraticCurveTo(0,b,0,b-Me),Se.lineTo(0,Me),Se.quadraticCurveTo(0,0,Me,0),Se.closePath(),Se.fill()}Se.font=`600 ${xe}px system-ui, -apple-system, Segoe UI, Roboto, Arial`,Se.fillStyle="rgba(255,255,255,0.95)",Se.textBaseline="middle",Se.fillText(ie,He,Math.floor(b/2));const $=new wg(Ae);$.needsUpdate=!0;const K=new Mf({map:$,transparent:!0,depthTest:!1}),X=new yg(K);return X.userData={canvas:Ae,texture:$,text:ie},X.center.set(.5,0),X}function we(ie,De){const Se=ie.material.map,xe=Se&&Se.image;if(!xe||!xe.width||!xe.height){ie.scale.set(2.5*De.scale,.8*De.scale,1);return}const He=xe.width/xe.height,Ye=.85*De.scale,ht=Ye*He;ie.scale.set(ht,Ye,1)}function Pe(ie,De,Ae){const Se=ie.userData;if(Se&&Se.text===De){we(ie,Ae);return}const xe=ie.material,He=xe.map;He&&He.dispose(),xe.dispose();const Ye=ke(De,Ae);ie.material=Ye.material,ie.userData=Ye.userData,we(ie,Ae)}const me={rmbDown:!1,pointerLocked:!1,yaw:0,pitch:0,speed:20,keys:Object.create(null)};let at=0;function he(){const ie=_.clientWidth,De=_.clientHeight;m.setSize(ie,De,!1),g.aspect=ie/De,g.updateProjectionMatrix()}const wt=new ResizeObserver(()=>he());wt.observe(_),he();function it(){const ie=new Set,De=a.current,Ae=o.current,Se=n.current;for(const xe of Se){ie.add(xe.playerId);let He=qe.get(xe.playerId);if(!He){He=new ui(ee,Q),He.castShadow=!1,He.receiveShadow=!1,He.userData={playerId:xe.playerId},qe.set(xe.playerId,He),ne.add(He);const $=ke(xe.label||String(xe.playerId),De);$.position.set(0,1.2,0),we($,De),W.set(xe.playerId,$),He.add($);const K=new Mn,X=new Float32Array(6);K.setAttribute("position",new Sn(X,3));const Me=new Ef(K,ae);ze.set(xe.playerId,Me),ne.add(Me)}const Ye=!!xe.isDead,ht=!!xe.inVehicle,st=xe.highlight||null,It=st==="killer"?Y:st==="victim"?Z:Ye?H:ht?le:Q;He.material!==It&&(He.material=It),He.position.set(xe.pos.x,xe.pos.y,xe.pos.z);const b=W.get(xe.playerId);b&&(b.visible=De.enabled,De.enabled&&Pe(b,xe.label||String(xe.playerId),De));const B=ze.get(xe.playerId);if(B){if(B.visible=Ae,!Ae)continue;const $=st==="killer"?J:st==="victim"?ue:Ye?Ze:ht?pe:ae;B.material!==$&&(B.material=$);const K=xe.aimDir,X=B.geometry.getAttribute("position");if(!K)X.setXYZ(0,xe.pos.x,xe.pos.y,xe.pos.z),X.setXYZ(1,xe.pos.x,xe.pos.y,xe.pos.z),X.needsUpdate=!0;else{const Me=K.x,Ie=K.y,Re=K.z,Ke=Math.max(1e-4,Math.sqrt(Me*Me+Ie*Ie+Re*Re)),tt=Me/Ke,nt=Ie/Ke,Ge=Re/Ke,mt=6,Jt=xe.pos.x,Dt=xe.pos.y+.6,kt=xe.pos.z,At=Jt+tt*mt,ot=Dt+nt*mt,Zt=kt+Ge*mt;X.setXYZ(0,Jt,Dt,kt),X.setXYZ(1,At,ot,Zt),X.needsUpdate=!0}}}for(const[xe,He]of qe){if(ie.has(xe))continue;ne.remove(He),qe.delete(xe);const Ye=W.get(xe);if(Ye){He.remove(Ye);const st=Ye.material;st.map&&st.map.dispose(),st.dispose(),W.delete(xe)}const ht=ze.get(xe);ht&&(ne.remove(ht),ht.geometry.dispose(),ze.delete(xe))}}function et(){const ie=l.current;if(!ie||!Array.isArray(ie.points)||ie.points.length<2){de&&(E.remove(de),de.geometry.dispose(),de=null);return}const De=ie.points,Ae=new Float32Array(De.length*3);for(let Se=0;Se<De.length;Se++)Ae[Se*3+0]=De[Se].x,Ae[Se*3+1]=De[Se].y+.15,Ae[Se*3+2]=De[Se].z;if(de){const Se=de.geometry;Se.setAttribute("position",new Sn(Ae,3)),Se.getAttribute("position").needsUpdate=!0,Se.computeBoundingSphere()}else{const Se=new Mn;Se.setAttribute("position",new Sn(Ae,3)),de=new Ef(Se,be),E.add(de)}}function je(){const ie=c.current,De=new Set;for(let Ae=0;Ae<ie.length;Ae++){const Se=ie[Ae],xe=`${Math.round(Se.x*10)}|${Math.round(Se.y*10)}|${Math.round(Se.z*10)}|${Ae}`;De.add(xe);let He=Je.get(xe);if(!He){const ht=new Mn,st=new Float32Array([-1.2,0,-1.2,1.2,0,1.2,-1.2,0,1.2,1.2,0,-1.2]);ht.setAttribute("position",new Sn(st,3)),He=new lo(ht,Fe),Je.set(xe,He),I.add(He)}He.position.set(Se.x,Se.y+.1,Se.z)}for(const[Ae,Se]of Je)De.has(Ae)||(I.remove(Se),Se.geometry.dispose(),Je.delete(Ae))}function Ne(){const ie=d.current,De=new Set;for(let Ae=0;Ae<ie.length;Ae++){const Se=ie[Ae],xe=`${Math.round(Se.x*10)}|${Math.round(Se.y*10)}|${Math.round(Se.z*10)}|${Ae}`;De.add(xe);let He=Be.get(xe);if(!He){const ht=new Mn,st=new Float32Array([-1.8,0,-1.8,1.8,0,1.8,-1.8,0,1.8,1.8,0,-1.8]);ht.setAttribute("position",new Sn(st,3)),He=new lo(ht,Qe),Be.set(xe,He),te.add(He)}He.position.set(Se.x,Se.y+.15,Se.z)}for(const[Ae,Se]of Be)De.has(Ae)||(te.remove(Se),Se.geometry.dispose(),Be.delete(Ae))}function ft(){const ie=new ms().setFromAxisAngle(new G(0,1,0),me.yaw),De=new ms().setFromAxisAngle(new G(1,0,0),me.pitch);g.quaternion.copy(ie).multiply(De)}function _t(ie){ie.preventDefault()}function Lt(ie){ie.button===2&&(me.rmbDown=!0,document.pointerLockElement!==_&&_.requestPointerLock())}function rt(ie){ie.button===2&&(me.rmbDown=!1,document.pointerLockElement===_&&document.exitPointerLock())}function Tt(){if(me.pointerLocked=document.pointerLockElement===_,me.pointerLocked){const ie=new Fo().setFromQuaternion(g.quaternion,"YXZ");me.yaw=ie.y,me.pitch=ie.x}}function L(ie){if(!me.pointerLocked)return;const De=ie.movementX||0,Ae=ie.movementY||0;me.yaw-=De*.002,me.pitch-=Ae*.002,me.pitch=sd(me.pitch,-Math.PI/2+.01,Math.PI/2-.01)}function ve(ie){if(typeof s.current=="number"){const xe=ie.deltaY<0?.9:1.1,He=Ce.clone().multiplyScalar(xe),Ye=He.length(),ht=sd(Ye,6,800);Ye>1e-4&&He.multiplyScalar(ht/Ye),Ce.copy(He);return}const Ae=ie.deltaY<0?1:-1,Se=me.speed+Ae*Math.max(1,me.speed*.1);me.speed=sd(Se,1,400)}function ge(ie){me.keys[ie.code]=!0}function Le(ie){me.keys[ie.code]=!1}function Xe(){const ie=f.current;if(!ie){N.visible=!0,ct&&(ct.geometry.dispose(),z.remove(ct),ct=null,T=""),$e&&($e.geometry.dispose(),z.remove($e),$e=null),A&&(A.geometry.dispose(),A.material.dispose(),z.remove(A),A=null);return}N.visible=!1;const De=`${ie.gridW}x${ie.gridH}|${ie.bbMin.x},${ie.bbMin.y},${ie.bbMin.z}|${ie.bbMax.x},${ie.bbMax.y},${ie.bbMax.z}|${ie.heights.length}`;if(De===T)return;T=De,ct&&(ct.geometry.dispose(),z.remove(ct),ct=null),$e&&($e.geometry.dispose(),z.remove($e),$e=null),A&&(A.geometry.dispose(),A.material.dispose(),z.remove(A),A=null);const Ae=Math.max(2,Math.floor(ie.gridW)),Se=Math.max(2,Math.floor(ie.gridH)),xe=Ae*Se;if(!Array.isArray(ie.heights)||ie.heights.length<xe)return;const He=ie.bbMax.x-ie.bbMin.x,Ye=ie.bbMax.z-ie.bbMin.z;if(!Number.isFinite(He)||!Number.isFinite(Ye)||He<=0||Ye<=0)return;const ht=new Ma(He,Ye,Ae-1,Se-1);ht.rotateX(-Math.PI/2);const st=ht.attributes.position;let It=1/0,b=-1/0;for(let Ge=0;Ge<xe;Ge++){const mt=ie.heights[Ge];typeof mt!="number"||!Number.isFinite(mt)||(mt<It&&(It=mt),mt>b&&(b=mt))}(!Number.isFinite(It)||!Number.isFinite(b)||b-It<.001)&&(It=0,b=1);const B=b-It,$=new Float32Array(xe*3),K=new pt(988708),X=new pt(1910328),Me=new pt(3293278),Ie=0,Re=new pt(735846);for(let Ge=0;Ge<Se;Ge++){const mt=Ge,Jt=Ge;for(let Dt=0;Dt<Ae;Dt++){const kt=Dt+Ae*mt,At=Dt+Ae*Jt,ot=ie.heights[kt];st.setY(At,ot);let Zt=(ot-It)/B;Number.isFinite(Zt)||(Zt=0),Zt=Math.min(1,Math.max(0,Zt)),Zt=Math.pow(Zt,.65);const M=Zt<.5?K.clone().lerp(X,Zt/.5):X.clone().lerp(Me,(Zt-.5)/.5);Number.isFinite(ot)&&ot<Ie&&M.lerp(Re,.28),$[At*3+0]=M.r,$[At*3+1]=M.g,$[At*3+2]=M.b}}st.needsUpdate=!0,ht.setAttribute("color",new Sn($,3)),ht.computeVertexNormals(),ct=new ui(ht,Oe),ct.receiveShadow=!1,ct.castShadow=!1;const Ke=(ie.bbMin.x+ie.bbMax.x)/2,tt=(ie.bbMin.z+ie.bbMax.z)/2;if(ct.position.set(Ke,0,tt),z.add(ct),It<Ie&&b>Ie){const Ge=new Ma(He,Ye,1,1);Ge.rotateX(-Math.PI/2);const mt=new Wr({color:1732264,transparent:!0,opacity:.26,roughness:.15,metalness:0,side:Ei,depthWrite:!1});A=new ui(Ge,mt),A.receiveShadow=!1,A.castShadow=!1,A.position.set(Ke,Ie,tt),z.add(A)}const nt=new pC(ht,35);$e=new lo(nt,yt),$e.position.copy(ct.position),z.add($e)}_.addEventListener("contextmenu",_t),_.addEventListener("mousedown",Lt),window.addEventListener("mouseup",rt),document.addEventListener("pointerlockchange",Tt),window.addEventListener("mousemove",L),_.addEventListener("wheel",ve,{passive:!0}),window.addEventListener("keydown",ge),window.addEventListener("keyup",Le);let St=performance.now(),Et=0,Ht=0,rn=0,bt=null;const Ce=new G(0,25,60);function hn(ie){const De=Math.min((ie-St)/1e3,.05);St=ie;const Ae=v.current;Ae.towns&&(fe(),Ae.towns=!1),Ae.markers&&ie-Ht>=50&&(it(),Ae.markers=!1,Ht=ie),Ae.trail&&ie-rn>=75&&(et(),Ae.trail=!1,rn=ie),Ae.death&&(je(),Ae.death=!1),Ae.ping&&(Ne(),Ae.ping=!1),Ae.terrain&&(Xe(),Ae.terrain=!1);const Se=s.current;if(typeof Se=="number"){const ht=n.current.find(st=>st&&st.playerId===Se);if(ht){const st=ht.pos;if(Se!==bt){Ce.set(g.position.x-st.x,g.position.y-st.y,g.position.z-st.z);const b=Ce.length();(!Number.isFinite(Ce.x)||!Number.isFinite(Ce.y)||!Number.isFinite(Ce.z)||!Number.isFinite(b)||b<1||b>500)&&Ce.set(0,25,60),bt=Se}if(g.position.set(st.x+Ce.x,st.y+Ce.y,st.z+Ce.z),g.lookAt(st.x,st.y+1.5,st.z),me.rmbDown||me.pointerLocked){const b=new G(0,0,-1).applyQuaternion(g.quaternion),B=new G(1,0,0).applyQuaternion(g.quaternion),$=new G(0,1,0);me.keys.KeyW&&Ce.addScaledVector(b,me.speed*De),me.keys.KeyS&&Ce.addScaledVector(b,-me.speed*De),me.keys.KeyA&&Ce.addScaledVector(B,-me.speed*De),me.keys.KeyD&&Ce.addScaledVector(B,me.speed*De),me.keys.KeyQ&&Ce.addScaledVector($,me.speed*De),me.keys.KeyZ&&Ce.addScaledVector($,-me.speed*De)}g.position.set(st.x+Ce.x,st.y+Ce.y,st.z+Ce.z),g.lookAt(st.x,st.y+1.5,st.z)}}else bt=null;const xe=r.current;if(Se===null&&xe!==at){at=xe;const Ye=i.current;Ye&&(g.position.set(Ye.x,Ye.y+25,Ye.z+60),g.lookAt(Ye.x,Ye.y+1.5,Ye.z))}if(me.pointerLocked&&Se===null&&ft(),(me.rmbDown||me.pointerLocked)&&Se===null){const Ye=new G(0,0,-1).applyQuaternion(g.quaternion),ht=new G(1,0,0).applyQuaternion(g.quaternion),st=new G(0,1,0);me.keys.KeyW&&g.position.addScaledVector(Ye,me.speed*De),me.keys.KeyS&&g.position.addScaledVector(Ye,-me.speed*De),me.keys.KeyA&&g.position.addScaledVector(ht,-me.speed*De),me.keys.KeyD&&g.position.addScaledVector(ht,me.speed*De),me.keys.KeyQ&&g.position.addScaledVector(st,me.speed*De),me.keys.KeyZ&&g.position.addScaledVector(st,-me.speed*De)}m.render(u,g),Et=window.requestAnimationFrame(hn)}return Et=window.requestAnimationFrame(hn),()=>{window.cancelAnimationFrame(Et),_.removeEventListener("contextmenu",_t),_.removeEventListener("mousedown",Lt),window.removeEventListener("mouseup",rt),document.removeEventListener("pointerlockchange",Tt),window.removeEventListener("mousemove",L),_.removeEventListener("wheel",ve),window.removeEventListener("keydown",ge),window.removeEventListener("keyup",Le),wt.disconnect(),ee.dispose(),Q.dispose(),le.dispose(),H.dispose(),Y.dispose(),Z.dispose(),ae.dispose(),pe.dispose(),Ze.dispose(),J.dispose(),ue.dispose(),be.dispose(),Fe.dispose(),Qe.dispose(),Oe.dispose(),yt.dispose(),de&&(de.geometry.dispose(),de=null),ct&&(ct.geometry.dispose(),ct=null),$e&&($e.geometry.dispose(),$e=null);for(const ie of Je.values())ie.geometry.dispose();for(const ie of Be.values())ie.geometry.dispose();m.dispose()}},[]),p.jsx("div",{style:{width:"100%",height:"100%",minHeight:400,position:"relative"},children:p.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block",borderRadius:8}})})}function mn(t){if(!t)return null;if(typeof t=="object"){if(Array.isArray(t)){if(t.length<3)return null;const r=t[0],s=t[1],a=t[2];return typeof r!="number"||typeof s!="number"||typeof a!="number"?null:{x:r,y:s,z:a}}const e=t.x,n=t.y,i=t.z;return typeof e!="number"||typeof n!="number"||typeof i!="number"?null:{x:e,y:n,z:i}}if(typeof t=="string"){const e=t.trim().split(/\s+/g);if(e.length<3)return null;const n=Number(e[0]),i=Number(e[1]),r=Number(e[2]);return!Number.isFinite(n)||!Number.isFinite(i)||!Number.isFinite(r)?null:{x:n,y:i,z:r}}return null}function Ya(t,e=30){return!t||typeof t.x!="number"||typeof t.z!="number"?!0:Math.abs(t.x)<=e&&Math.abs(t.z)<=e}function ad(t,e,n){if(!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(n))return t;const i=Math.max(0,Math.min(1,n));return t+(e-t)*i}function MC(t,e,n){return{x:ad(t.x,e.x,n),y:ad(t.y,e.y,n),z:ad(t.z,e.z,n)}}function od(t){if(!t)return null;const e=mn(t.bbMin),n=mn(t.bbMax),i=typeof t.gridW=="number"?t.gridW:0,r=typeof t.gridH=="number"?t.gridH:0,s=Array.isArray(t.heights)?t.heights.filter(a=>typeof a=="number"):[];return e&&n&&i>=2&&r>=2&&s.length>=i*r?{bbMin:e,bbMax:n,gridW:i,gridH:r,heights:s}:null}function ld(t){if(!t)return null;const e=Array.isArray(t.descriptors)?t.descriptors:Array.isArray(t.towns)?t.towns:[];if(e.length===0)return null;const n=[];for(const i of e){if(!i)continue;const r=typeof i.name=="string"?i.name.trim():"",s=typeof i.type=="string"?i.type.trim():"",a=typeof i.baseType=="number"?i.baseType:null,o=r||s||(a!==null?`type:${a}`:"descriptor"),l=mn(i.pos);l&&n.push({name:o,pos:l})}return n.length===0?null:n}function Cg(t,e,n){if(!t||!t.bbMin||!t.bbMax||!Array.isArray(t.heights))return null;const i=Math.floor(t.gridW),r=Math.floor(t.gridH);if(i<2||r<2||t.heights.length<i*r)return null;const s=t.bbMin.x,a=t.bbMax.x,o=t.bbMin.z,l=t.bbMax.z,c=a-s,d=l-o;if(!Number.isFinite(c)||!Number.isFinite(d)||c<=0||d<=0)return null;const f=(e-s)/c,h=(n-o)/d;if(!Number.isFinite(f)||!Number.isFinite(h)||f<0||f>1||h<0||h>1)return null;const v=f*(i-1),x=h*(r-1),_=Math.floor(v),m=Math.floor(x),u=Math.min(i-1,_+1),g=Math.min(r-1,m+1),y=v-_,S=x-m,w=_+i*m,C=u+i*m,N=_+i*g,j=u+i*g,ne=t.heights[w],E=t.heights[C],I=t.heights[N],te=t.heights[j];if(![ne,E,I,te].every(ee=>typeof ee=="number"&&Number.isFinite(ee)))return null;const oe=ne*(1-y)+E*y,z=I*(1-y)+te*y;return oe*(1-S)+z*S}function EC(t){const e=sr();return R.useMemo(()=>{const i=new URLSearchParams(e.search).get(t);return i||null},[e.search,t])}function Pl(t){const e=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,n=Math.floor(e/1e3),i=Math.floor(n/3600),r=Math.floor(n%3600/60),s=n%60,a=String(i).padStart(2,"0"),o=String(r).padStart(2,"0"),l=String(s).padStart(2,"0");return`${a}:${o}:${l}`}function cd(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function wC(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function TC(t,e){if(!Array.isArray(t)||t.length===0)return[];const n=new Map;for(const r of t){const s=e(r).trim();s&&n.set(s,(n.get(s)||0)+1)}const i=Array.from(n.entries()).map(([r,s])=>({name:r,count:s}));return i.sort((r,s)=>s.count-r.count||r.name.localeCompare(s.name)),i}function wc(t){const e=t.payload;return e&&typeof e.tsMs=="number"?e.tsMs:null}function Hs(t){const e=t.payload;return`${t.receivedAt}|${e&&e.tsMs}|${e&&e.type}`}function ud(t,e,n){if(!Number.isFinite(e)||e<=0)return[];if(t.length<=e)return t;if(typeof n!="number"||!Number.isFinite(n))return t.slice(t.length-e);const i=wc(t[0]),r=wc(t[t.length-1]);if(typeof i!="number"||typeof r!="number")return t.slice(t.length-e);const s=Math.abs(n-i),a=Math.abs(r-n),o=t.length-e;return s>a?t.slice(o):t.slice(0,t.length-o)}function bC(){const t=EC("serverId"),[e,n]=R.useState([]),[i,r]=R.useState(""),[s,a]=R.useState(null),[o,l]=R.useState(null),[c,d]=R.useState(null),[f,h]=R.useState(!1),[v,x]=R.useState(!0),[_,m]=R.useState({minTsMs:null,maxTsMs:null}),[u,g]=R.useState(null),[y,S]=R.useState(null),[w,C]=R.useState(null),[N,j]=R.useState([]),[ne,E]=R.useState(""),[I,te]=R.useState(null),[oe,z]=R.useState(null),[ee,Q]=R.useState(0),[le,H]=R.useState(!0),[Y,Z]=R.useState("players"),[ae,pe]=R.useState(!1),[Ze,J]=R.useState(!0),[ue,be]=R.useState(null),[Fe,Qe]=R.useState(null),Oe=R.useRef(new Map),[yt,qe]=R.useState(!1),[W,$t]=R.useState(1),ze=R.useRef(null),[Je,Be]=R.useState(!0),[ct,$e]=R.useState(1),[A,T]=R.useState(!0),[q,ye]=R.useState(!0),[fe,de]=R.useState(!0),[ke,we]=R.useState(!0),[Pe,me]=R.useState(!0),[at,he]=R.useState(20),[wt,it]=R.useState([]),et=R.useRef(0),je=R.useRef(null),[Ne,ft]=R.useState(()=>{try{const M=window.localStorage.getItem("replay.eventClickOffsetSeconds"),O=M!==null?Number(M):5;return Number.isFinite(O)?Math.max(0,Math.min(60,Math.floor(O))):5}catch{return 5}}),[_t,Lt]=R.useState(null),[rt,Tt]=R.useState(null),[L,ve]=R.useState([]),ge=R.useRef(null),Le=R.useRef(!1),Xe=R.useRef(null),St=R.useRef(0),Et=R.useRef(0),Ht=R.useRef(!1),rn=R.useRef(!1),bt=R.useRef(new Map);R.useEffect(()=>{t&&t.length>0&&r(t)},[t]),R.useEffect(()=>{ze.current=u},[u]),R.useEffect(()=>{Xe.current=null,St.current=0,Et.current=0},[i]),R.useEffect(()=>{try{window.localStorage.setItem("replay.eventClickOffsetSeconds",String(Ne))}catch{}},[Ne]),R.useEffect(()=>{function M(O){O.code==="KeyF"&&rt!==null&&Tt(null)}return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[rt]),R.useEffect(()=>{let M=!1;async function O(){try{const U=await a0();if(M)return;n(U)}catch(U){if(M)return;const P=U instanceof Error?U.message:"Failed to load servers";d(P)}}return O(),()=>{M=!0}},[]),R.useEffect(()=>{let M=!1;async function O(){try{const P=await uf();if(M)return;a(P),l(null)}catch(P){if(M)return;const V=P instanceof Error?P.message:"Failed to load server status";l(V)}}O();const U=window.setInterval(O,15e3);return()=>{M=!0,window.clearInterval(U)}},[]);const Ce=i.length>0?i:null;R.useEffect(()=>{S(null),C(null)},[Ce]),R.useEffect(()=>{if(!Ce)return;const M=Ce;let O=!1;async function U(){h(!0),d(null);try{const[P,V,F,D]=await Promise.all([Xp(M),Yp(M),Eu(M).catch(()=>null),wu(M).catch(()=>null)]);if(O)return;m({minTsMs:P.minTsMs,maxTsMs:P.maxTsMs}),j(V);const k=od(F);k&&S(k);const re=ld(D);if(re&&C(re),typeof P.maxTsMs=="number"){g(P.maxTsMs);const se=await tl({serverId:M,untilTsMs:P.maxTsMs,limit:5e3,tail:!0}).catch(()=>[]);if(!O){ve(se);let ce=null;for(const Ee of se){const Ve=Ee.payload;Ve&&typeof Ve.tsMs=="number"&&(ce===null||Ve.tsMs>ce)&&(ce=Ve.tsMs)}ge.current=ce!==null?ce:Math.max(0,P.maxTsMs-15e3)}}et.current=Date.now(),je.current=null,qe(!1)}catch(P){if(O)return;const V=P instanceof Error?P.message:"Failed to load replay data";d(V)}finally{O||h(!1)}}return U(),()=>{O=!0}},[Ce]),R.useEffect(()=>{if(!Ce||y||Ht.current||!L.some(U=>{const P=U.payload;return P&&(P.type==="map"||P.type==="terrain")}))return;let O=!1;return Ht.current=!0,Eu(Ce).then(U=>{if(O)return;const P=od(U);P&&S(P)}).catch(()=>{}).finally(()=>{Ht.current=!1}),()=>{O=!0}},[L,Ce,y]),R.useEffect(()=>{if(!Ce||w||rn.current||!L.some(U=>{const P=U.payload;return P&&(P.type==="map"||P.type==="terrain"||P.type==="towns"||P.type==="descriptors")}))return;let O=!1;return rn.current=!0,wu(Ce).then(U=>{if(O)return;const P=ld(U);P&&C(P)}).catch(()=>{}).finally(()=>{rn.current=!1}),()=>{O=!0}},[L,Ce,w]),R.useEffect(()=>{if(!Ce||v||!yt||typeof _.maxTsMs!="number")return;let M=0,O=performance.now();function U(P){const V=Math.min(250,Math.max(0,P-O));O=P;const F=ze.current;if(typeof F=="number"){const D=_.maxTsMs;let k=F+V*W;k>=D&&(k=D,qe(!1)),ze.current=k,g(k)}M=window.requestAnimationFrame(U)}return M=window.requestAnimationFrame(U),()=>window.cancelAnimationFrame(M)},[yt,v,W,_.maxTsMs,Ce]),R.useEffect(()=>{if(!Ce)return;const M=Ce;let O=!1,U=null;async function P(){try{const V=await Yp(M);O||j(V)}catch{}O||(U=window.setTimeout(P,v?3e3:5e3))}return P(),()=>{O=!0,U!==null&&window.clearTimeout(U)}},[v,Ce]),R.useEffect(()=>{if(!Ce)return;const M=Ce;let O=!1,U=null;async function P(){try{const V=await Xp(M);if(O)return;const F=ge.current;typeof F=="number"&&typeof V.maxTsMs=="number"&&V.maxTsMs+1e3<F&&(ge.current=null,et.current=Date.now(),ve([{receivedAt:Date.now(),payload:{type:"restart",tsMs:V.maxTsMs,event:{reason:"server_restart_or_history_cleared"}}}]),it([]),qe(!1),Ht.current=!1,Eu(M).then(D=>{if(O)return;const k=od(D);k&&S(k)}).catch(()=>{}),rn.current=!1,wu(M).then(D=>{if(O)return;const k=ld(D);k&&C(k)}).catch(()=>{})),m({minTsMs:V.minTsMs,maxTsMs:V.maxTsMs}),v&&typeof V.maxTsMs=="number"&&g(V.maxTsMs)}catch{}O||(U=window.setTimeout(P,v?2e3:3e3))}return P(),()=>{O=!0,U!==null&&window.clearTimeout(U)}},[v,Ce]),R.useEffect(()=>{if(!Ce)return;const M=Ce;let O=!1,U=null;async function P(){const V=_.maxTsMs;if(typeof V!="number"){O||(U=window.setTimeout(P,1e3));return}const F=ge.current,D=typeof F=="number"?F+1:Math.max(0,V-8e3);try{let se=D;const ce=[];let Ee=typeof ge.current=="number"?ge.current:null;for(let Ve=0;Ve<2;Ve++){const lt=await tl({serverId:M,sinceTsMs:se,untilTsMs:V,limit:1500});ce.push(...lt);let We=null;for(const ut of lt){const dt=wc(ut);dt!==null&&((We===null||dt>We)&&(We=dt),(Ee===null||dt>Ee)&&(Ee=dt))}if(lt.length<1500||We===null||We>=V)break;se=We+1}if(O)return;ce.length>0&&ve(Ve=>{const lt=Ve.slice(-500),We=new Set;for(const dt of lt)We.add(Hs(dt));const ut=Ve.slice();for(const dt of ce){const en=Hs(dt);We.has(en)||ut.push(dt)}return ud(ut,25e4,ze.current)}),typeof Ee=="number"&&(ge.current=Ee)}catch(k){if(!O){const re=k instanceof Error?k.message:"Failed to fetch replay events";d(re)}}O||(U=window.setTimeout(P,v?1e3:1500))}return P(),()=>{O=!0,U!==null&&window.clearTimeout(U)}},[v,_.maxTsMs,Ce]);const hn=R.useMemo(()=>{let M=null,O=null;for(const U of L){const P=U.payload,V=P&&typeof P.tsMs=="number"?P.tsMs:null;V!==null&&((M===null||V<M)&&(M=V),(O===null||V>O)&&(O=V))}return{minTsMs:M,maxTsMs:O}},[L]);R.useEffect(()=>{if(!Ce)return;const M=Ce,O=u,U=hn.minTsMs,P=_.minTsMs;if(typeof O!="number"||typeof U!="number"||typeof P!="number"||U<=P+1||O>U+2e3||Le.current)return;Le.current=!0;const F=Math.max(0,Math.floor(U)-1);tl({serverId:M,untilTsMs:F,limit:5e3,tail:!0}).then(D=>{D.length!==0&&ve(k=>{const re=k.slice(0,800),se=new Set;for(const Ve of re)se.add(Hs(Ve));const ce=[];for(const Ve of D){const lt=Hs(Ve);se.has(lt)||ce.push(Ve)}const Ee=ce.concat(k);return ud(Ee,25e4,ze.current)})}).catch(()=>{}).finally(()=>{Le.current=!1})},[u,hn.minTsMs,_.minTsMs,Ce]),R.useEffect(()=>{if(!Ce)return;const M=Ce;if(!v||Xe.current===M)return;const O=hn.minTsMs,U=_.minTsMs,P=_.maxTsMs;if(typeof O!="number"||typeof U!="number"||typeof P!="number")return;const V=15*6e4,F=Math.max(U,Math.max(0,Math.floor(P-V)));if(O<=F+1)return;const D=25e4;if(L.length>=D-5e3){Xe.current=M;return}const k=Date.now();if(k-Et.current<1500||Le.current)return;Et.current=k,Le.current=!0;const re=Math.max(0,Math.floor(O)-1);tl({serverId:M,untilTsMs:re,limit:5e3,tail:!0}).then(se=>{if(se.length===0){St.current+=1,St.current>=3&&(Xe.current=M);return}St.current=0,ve(ce=>{const Ee=ce.slice(0,800),Ve=new Set;for(const ut of Ee)Ve.add(Hs(ut));const lt=[];for(const ut of se){const dt=Hs(ut);Ve.has(dt)||lt.push(ut)}const We=lt.concat(ce);return ud(We,D,ze.current)})}).catch(()=>{}).finally(()=>{Le.current=!1})},[L.length,v,hn.minTsMs,_.maxTsMs,_.minTsMs,Ce]);const ie=R.useMemo(()=>{const M=[];for(const O of L){const U=O.payload;!U||typeof U!="object"||U.type==="snapshot"&&typeof U.tsMs=="number"&&Array.isArray(U.players)&&M.push({tsMs:U.tsMs,players:U.players})}return M.sort((O,U)=>O.tsMs-U.tsMs),M},[L]),De=R.useMemo(()=>{const M=new Map;for(const U of N){if(!U||typeof U.playerId!="number")continue;const P=typeof U.name=="string"&&U.name.trim().length>0?U.name.trim():String(U.playerId);M.set(U.playerId,P)}for(const U of L){const P=U.payload;if(!P||typeof P!="object"||P.type!=="join"&&P.type!=="disconnect")continue;const V=P.event,F=V&&typeof V.playerId=="number"?V.playerId:null;if(F===null)continue;const D=V&&typeof V.name=="string"&&V.name.trim().length>0?V.name.trim():"";D?M.set(F,D):M.has(F)||M.set(F,String(F))}for(const U of ie)for(const P of U.players){if(!P||typeof P!="object")continue;const V=P.playerId;if(typeof V!="number")continue;const F=typeof P.name=="string"&&P.name.trim().length>0?P.name.trim():"";F?M.set(V,F):M.has(V)||M.set(V,String(V))}const O=Array.from(M.entries()).map(([U,P])=>({playerId:U,name:P}));return O.sort((U,P)=>U.name.localeCompare(P.name)||U.playerId-P.playerId),O},[L,N,ie]),Ae=R.useMemo(()=>{const M=new Map;for(const O of ie){const U=O.tsMs;for(const P of O.players){if(!P||typeof P!="object")continue;const V=P.playerId;if(typeof V!="number")continue;let F=M.get(V);F||(F=[],M.set(V,F)),F.push({tsMs:U,player:P})}}return M},[ie]),Se=R.useMemo(()=>(M,O)=>{const U=Ae.get(M);if(!U||U.length===0)return null;let P=0,V=U.length-1,F=-1;for(;P<=V;){const Ct=P+V>>1;U[Ct].tsMs<=O?(F=Ct,P=Ct+1):V=Ct-1}if(F<0)return null;const D=30,k=25,re=6e4,se=2500,ce=5e3,Ee=80,Ve=Ct=>{const Ut=Ct&&typeof Ct=="object"?Ct.entityId:null;if(typeof Ut!="string")return null;const sn=Ut.trim();return sn.length>0?sn:null};let lt=null;const We=Ve(U[F].player);if(We)lt=We;else{let Ct=null;for(let ki=F;ki>=0&&F-ki<Ee;ki--){const Pa=U[ki];if(O-Pa.tsMs>ce)break;const Na=Ve(Pa.player);if(Na){Ct=Na;break}}let Ut=null;for(let ki=F+1;ki<U.length&&ki-F<Ee;ki++){const Pa=U[ki];if(Pa.tsMs-O>ce)break;const Na=Ve(Pa.player);if(Na){Ut=Na;break}}const sn=mn(U[F].player&&U[F].player.pos);!!(sn&&Ya(sn,D))&&Ut?lt=Ut:lt=Ct||Ut}const ut=Ct=>{if(lt){const sn=Ve(Ct);if(sn&&sn!==lt)return null}const Ut=mn(Ct&&Ct.pos);return!Ut||Ya(Ut,D)?null:Ut};let dt=null;for(let Ct=F;Ct>=0&&F-Ct<k;Ct--){const Ut=U[Ct];if(O-Ut.tsMs>re)break;if(lt){const _s=Ve(Ut.player);if(_s&&_s!==lt)break}const sn=ut(Ut.player);if(sn){dt={pos:sn,tsMs:Ut.tsMs,player:Ut.player};break}}let en=null;for(let Ct=F+1;Ct<U.length&&Ct-F<k;Ct++){const Ut=U[Ct];if(Ut.tsMs-O>re)break;if(lt){const _s=Ve(Ut.player);if(_s&&_s!==lt)break}const sn=ut(Ut.player);if(sn){en={pos:sn,tsMs:Ut.tsMs,player:Ut.player};break}}if(!dt&&en)return en.tsMs-O<=750?en:null;if(!dt)return null;if(en&&en.tsMs>dt.tsMs&&O>=dt.tsMs&&O<=en.tsMs){const Ct=en.tsMs-dt.tsMs;if(Ct>0&&Ct<=se){const Ut=(O-dt.tsMs)/Ct;return{pos:MC(dt.pos,en.pos,Ut),tsMs:dt.tsMs,player:dt.player}}}return dt},[Ae]),xe=R.useMemo(()=>{const M=[];for(const O of L){const U=O&&O.payload;if(!(!U||typeof U!="object")&&typeof U.tsMs=="number"&&U.type!=="snapshot"){if(U.type==="gmPing"){const P=U.event,V=P&&typeof P.by=="string"&&P.by.length>0?P.by:"",F=P&&typeof P.title=="string"&&P.title.length>0?P.title:"Ping";M.push({tsMs:U.tsMs,kind:"event",title:"GM ping",subtitle:V?`${V} • ${F}`:F});continue}if(U.type==="kill"){const P=U.event,V=P&&typeof P.killerName=="string"?P.killerName:"Unknown",F=P&&typeof P.victimName=="string"?P.victimName:"Unknown",D=P&&typeof P.weaponName=="string"&&P.weaponName.length>0?P.weaponName:"",k=P&&typeof P.distanceM=="number"?P.distanceM:null,re=typeof k=="number"&&Number.isFinite(k)?`${Math.round(k)}m`:"",se=[];D&&se.push(D),re&&se.push(re),M.push({tsMs:U.tsMs,kind:"kill",title:`${V} → ${F}`,subtitle:se.length>0?se.join(" • "):"Kill"});continue}if(U.type==="death"){const P=U.event,V=P&&typeof P.victimPlayerId=="number"?P.victimPlayerId:null,F=P&&typeof P.killerPlayerId=="number"?P.killerPlayerId:null;if(V!==null&&F!==null&&F>=0&&F!==V)continue;const D=P&&typeof P.victimName=="string"?P.victimName:"Unknown",k=P&&typeof P.weaponName=="string"&&P.weaponName.length>0?P.weaponName:"",re=P&&typeof P.distanceM=="number"?P.distanceM:null,se=typeof re=="number"&&Number.isFinite(re)?`${Math.round(re)}m`:"",ce=[];k&&ce.push(k),se&&ce.push(se),M.push({tsMs:U.tsMs,kind:"event",title:`${D} died`,subtitle:ce.length>0?ce.join(" • "):"Death"});continue}if(U.type==="aiKill"){const P=U.event,V=P&&typeof P.killerName=="string"?P.killerName:"Unknown",F=P&&typeof P.victimName=="string"?P.victimName:"Unknown",D=P&&typeof P.weaponName=="string"&&P.weaponName.length>0?P.weaponName:"",k=P&&typeof P.distanceM=="number"?P.distanceM:null,re=typeof k=="number"&&Number.isFinite(k)?`${Math.round(k)}m`:"",se=[];D&&se.push(D),re&&se.push(re),M.push({tsMs:U.tsMs,kind:"kill",title:`${V} → AI: ${F}`,subtitle:se.length>0?se.join(" • "):"AI kill"})}}}return M.sort((O,U)=>O.tsMs-U.tsMs),M},[L]),He=R.useMemo(()=>{const M=new Map;for(const O of L){const U=O.payload;if(!U||typeof U!="object"||U.type!=="join"&&U.type!=="disconnect"||typeof U.tsMs!="number")continue;const P=U.event,V=P&&typeof P.playerId=="number"?P.playerId:null;if(V===null)continue;let F=M.get(V);F||(F=[],M.set(V,F)),F.push({tsMs:U.tsMs,type:U.type})}for(const O of M.values())O.sort((U,P)=>U.tsMs-P.tsMs);return M},[L]),Ye=R.useMemo(()=>(M,O)=>{const U=Ae.get(M);if(!U||U.length===0)return null;let P=0,V=U.length-1,F=-1;for(;P<=V;){const D=P+V>>1;U[D].tsMs<=O?(F=D,P=D+1):V=D-1}return F<0?null:U[F]},[Ae]),ht=R.useMemo(()=>(M,O,U)=>{const P=Ae.get(M);if(!P||P.length===0)return null;let V=0,F=P.length-1,D=-1;for(;V<=F;){const k=V+F>>1;P[k].tsMs<=O?(D=k,V=k+1):F=k-1}if(D<0)return null;for(let k=D;k>=0;k--){const re=P[k],se=O-re.tsMs;if(se<0)continue;if(se>U)break;const ce=re.player;if(!ce||typeof ce!="object")continue;const Ee=ce.inventory,Ve=ce.attachments,lt=ce.weapon,We={tsMs:re.tsMs};if(Array.isArray(Ee)&&(We.inventory=Ee),Array.isArray(Ve)&&(We.attachments=Ve),lt&&typeof lt=="object"&&typeof lt.name=="string"&&lt.name.length>0&&(We.weapon=lt),"inventory"in We||"attachments"in We||"weapon"in We)return We}return null},[Ae]),st=R.useMemo(()=>(M,O)=>{const U=He.get(M);if(!U||U.length===0)return null;let P=0,V=U.length-1,F=-1;for(;P<=V;){const D=P+V>>1;U[D].tsMs<=O?(F=D,P=D+1):V=D-1}return F<0?null:U[F].type==="join"},[He]),It=R.useMemo(()=>(M,O,U=6e4)=>{if(typeof M!="number"||M<0||typeof O!="number"||!Number.isFinite(O)||ie.length===0)return null;const P=O+Math.max(1e3,Math.min(5*60*1e3,Math.floor(U)));let V=0,F=ie.length-1,D=ie.length;for(;V<=F;){const k=V+F>>1;ie[k].tsMs>=O?(D=k,F=k-1):V=k+1}for(let k=D;k<ie.length;k++){const re=ie[k];if(re.tsMs>P)break;const se=re.players.find(Ee=>Ee&&typeof Ee=="object"&&Ee.playerId===M);if(!se)continue;const ce=mn(se.pos);if(ce&&!Ya(ce,30))return ce}return null},[ie]),b=R.useMemo(()=>(M,O,U=6e4)=>{if(typeof M!="number"||M<0||typeof O!="number"||!Number.isFinite(O)||ie.length===0)return null;const P=O-Math.max(1e3,Math.min(5*60*1e3,Math.floor(U)));let V=0,F=ie.length-1,D=-1;for(;V<=F;){const k=V+F>>1;ie[k].tsMs<=O?(D=k,V=k+1):F=k-1}for(let k=D;k>=0;k--){const re=ie[k];if(re.tsMs<P)break;const se=re.players.find(Ee=>Ee&&typeof Ee=="object"&&Ee.playerId===M);if(!se)continue;const ce=mn(se.pos);if(ce&&!Ya(ce,30))return ce}return null},[ie]),B=R.useMemo(()=>{const M=new Map;for(const O of L){const U=O.payload;if(!U||typeof U!="object"||U.type!=="kill"&&U.type!=="death"||typeof U.tsMs!="number")continue;const P=U.event,V=P&&typeof P.victimPlayerId=="number"?P.victimPlayerId:null;if(V===null)continue;const F=U.tsMs+3e4,D=M.get(V)||0;F>D&&M.set(V,F)}return M},[L]),$=R.useMemo(()=>{const M=new Map;if(!Fe)return M;const O=u;if(typeof O!="number"||!Number.isFinite(O))return M;const U=Fe.split("|");if(U.length<2)return M;const P=Number(U[0]),V=String(U[1]||"");if(!Number.isFinite(P)||V!=="kill"&&V!=="death"||O<P-(v?0:5e3)||O>P+5e3)return M;let k=null;for(const se of L){const ce=se&&se.payload;if(!(!ce||typeof ce!="object")&&ce.type===V&&typeof ce.tsMs=="number"&&ce.tsMs===P){k=ce.event;break}}if(!k||typeof k!="object")return M;if(V==="kill"){const se=typeof k.killerPlayerId=="number"?k.killerPlayerId:null,ce=typeof k.victimPlayerId=="number"?k.victimPlayerId:null;return se!==null&&M.set(se,"killer"),ce!==null&&M.set(ce,"victim"),M}const re=typeof k.victimPlayerId=="number"?k.victimPlayerId:null;return re!==null&&M.set(re,"victim"),M},[u,L,v,Fe]),K=R.useMemo(()=>({enabled:Je,scale:Math.min(2,Math.max(.5,ct)),background:A}),[A,ct,Je]),X=R.useMemo(()=>{const M=u;if(typeof M!="number")return[];if(Ae.size===0)return[];const O=new Map;for(const V of De)O.set(V.playerId,V.name);const U=3e4,P=[];for(const V of De){const F=V.playerId,D=Ye(F,M);if(!D)continue;const k=st(F,M);if(k===!1||k===null&&M-D.tsMs>U)continue;const re=Se(F,M);if(!re)continue;const se=re.player,ce=re.pos,Ee=!!se.inVehicle,Ve=Cg(y,ce.x,ce.z),We=!Ee&&typeof Ve=="number"&&Number.isFinite(Ve)&&typeof ce.y=="number"&&Number.isFinite(ce.y)&&Math.abs(ce.y-Ve)<=3.5?{...ce,y:Ve+.35}:ce,ut=mn(se.aimDir),dt=se.vehicle&&typeof se.vehicle.name=="string"?String(se.vehicle.name):"",en=D.tsMs,Ct=B.get(F)||0,Ut=typeof en=="number"?Ct>en:!1;let sn=O.get(F)||String(F);q&&Ee&&dt&&(sn=`${sn} (${dt})`),P.push({playerId:F,label:sn,pos:We,aimDir:ut,inVehicle:Ee,isDead:Ut,highlight:$.get(F)||null})}return P},[u,B,Se,Ye,st,De,Ae,$,q,y]),Me=R.useMemo(()=>{if(!Pe||I===null||typeof u!="number")return null;const M=Ae.get(I);if(!M||M.length===0)return null;const O=Math.max(5e3,Math.min(6e4,Math.floor(at*1e3))),U=u-O,P=[];let V=null,F=0,D=M.length-1,k=M.length;for(;F<=D;){const se=F+D>>1;M[se].tsMs>=U?(k=se,D=se-1):F=se+1}for(let se=Math.max(0,k-1);se<M.length;se++){const ce=M[se];if(ce.tsMs<U)continue;if(ce.tsMs>u)break;const Ee=ce.player;if(!Ee||typeof Ee!="object")continue;const Ve=!!Ee.inVehicle,lt=Ee.entityId,We=typeof lt=="string"&&lt.length>0?lt:null;We&&V&&We!==V&&(P.length=0),We&&(V=We);const ut=mn(Ee.pos);if(!ut||Ya(ut,30))continue;const dt=Cg(y,ut.x,ut.z),en=!Ve&&typeof dt=="number"&&Number.isFinite(dt)&&typeof ut.y=="number"&&Number.isFinite(ut.y)&&Math.abs(ut.y-dt)<=3.5;P.push(en?{...ut,y:dt}:ut)}if(P.length<2)return null;const re=200;if(P.length>re){const se=Math.ceil(P.length/re),ce=[];for(let Ee=0;Ee<P.length;Ee+=se)ce.push(P[Ee]);return{points:ce}}return{points:P}},[u,Pe,Ae,I,y,at]),Ie=R.useMemo(()=>{if(!ke)return[];const M=u;if(typeof M!="number")return[];const O=[];for(const U of L){const P=U.payload;if(!P||typeof P!="object"||P.type!=="kill"&&P.type!=="death"||typeof P.tsMs!="number"||M<P.tsMs||M>P.tsMs+3e3)continue;const V=P.event;let F=V?mn(V.victimPos):null;if(!F&&V&&typeof V=="object"){const D=typeof V.victimPlayerId=="number"?V.victimPlayerId:null;if(typeof D=="number"){const k=Se(D,P.tsMs);k&&(F=k.pos)}}if(F&&(O.push(F),O.length>=40))break}return O},[u,L,Se,ke]),Re=R.useMemo(()=>{const M=_.minTsMs,O=_.maxTsMs,U=u;return typeof M!="number"||typeof O!="number"||typeof U!="number"?{min:0,max:100,value:0,disabled:!0}:O<=M?{min:M,max:M+1,value:M,disabled:!1}:{min:M,max:O,value:Math.min(Math.max(U,M),O),disabled:!1}},[u,_.maxTsMs,_.minTsMs]),Ke=R.useMemo(()=>{let M=-1/0,O=0;for(const U of L){if(!U||typeof U.receivedAt!="number")continue;const P=wc(U);P!==null&&P>M&&(M=P,O=U.receivedAt)}return!Number.isFinite(M)||M<0||!Number.isFinite(O)||O<=0?null:{tsMs:M,receivedAt:O}},[L]),tt=R.useMemo(()=>{if(!Ke)return null;const M=Ke;return O=>{const U=M.receivedAt+(O-M.tsMs);return Number.isFinite(U)?new Date(U).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}):""}},[Ke]),nt=R.useMemo(()=>{if(rt===null)return null;const M=De.find(O=>O.playerId===rt);return M?M.name:String(rt)},[rt,De]),Ge=R.useMemo(()=>{const M=u;if(typeof M!="number"||!Number.isFinite(M))return[];const O=3e4,U=[];for(const P of De){const V=P.playerId,F=st(V,M);if(F===!0){U.push(P);continue}if(F===!1)continue;const D=Ye(V,M);D&&M-D.tsMs<=O&&U.push(P)}return U.sort((P,V)=>P.name.localeCompare(V.name)||P.playerId-V.playerId),U},[u,Ye,st,De]);function mt(M){const O=Math.max(0,Math.floor(Ne*1e3)),U=Re.disabled?0:Re.min,P=Re.disabled?M:Re.max,V=Math.min(P,Math.max(U,M-O));g(V)}const Jt=R.useMemo(()=>{const M=ne.trim().toLowerCase(),O=Array.isArray(Ge)?Ge:[];return M?O.filter(U=>(U.name||"").toLowerCase().includes(M)||String(U.playerId).includes(M)):O},[ne,Ge]),Dt=R.useMemo(()=>{if(I===null)return null;const M=u;if(typeof M!="number")return null;const O=Ye(I,M);return O?{snapTsMs:O.tsMs,player:O.player}:null},[u,Ye,I]),kt=R.useMemo(()=>{const M=u;if(typeof M!="number")return Dt;const O=Dt;if(!O||!O.player||typeof O.player!="object")return O;const U=O.player,P=O.snapTsMs,V=typeof U.playerId=="number"?U.playerId:null;if(V===null)return O;const F=5*6e4,D=bt.current.get(V)||{invTsMs:-1,hotbarTsMs:-1,weaponTsMs:-1},k=U.inventory;Array.isArray(k)&&(D.inventory=k,D.invTsMs=P);const re=U.attachments;Array.isArray(re)&&(D.attachments=re,D.hotbarTsMs=P);const se=U.weapon;se&&typeof se=="object"&&typeof se.name=="string"&&se.name.length>0&&(D.weapon=se,D.weaponTsMs=P),bt.current.set(V,D);const ce=!Array.isArray(k),Ee=!Array.isArray(re),Ve=!se||!se.name,We=ce||Ee||Ve?ht(V,M,F):null;We&&We.inventory&&(!("inventory"in D)||D.invTsMs>M||M-D.invTsMs>F)&&(D.inventory=We.inventory,D.invTsMs=We.tsMs),We&&We.attachments&&(!("attachments"in D)||D.hotbarTsMs>M||M-D.hotbarTsMs>F)&&(D.attachments=We.attachments,D.hotbarTsMs=We.tsMs),We&&We.weapon&&(!D.weapon||D.weaponTsMs>M||M-D.weaponTsMs>F)&&(D.weapon=We.weapon,D.weaponTsMs=We.tsMs);const ut=M-D.invTsMs,dt=M-D.hotbarTsMs,en=M-D.weaponTsMs,Ct="inventory"in D&&D.invTsMs<=M&&ut>=0&&ut<=F&&ce,Ut="attachments"in D&&D.hotbarTsMs<=M&&dt>=0&&dt<=F&&Ee,sn=!!D.weapon&&D.weaponTsMs<=M&&en>=0&&en<=F&&Ve;return{...U,inventory:Ct?D.inventory:k,attachments:Ut?D.attachments:re,weapon:sn?D.weapon:se,__snapTsMs:P}},[u,ht,Dt]),At=R.useMemo(()=>{const M=[];for(const V of L){const F=V.payload;if(!F||typeof F!="object"||typeof F.tsMs!="number"||F.type==="snapshot"||F.type!=="kill"&&F.type!=="death"&&F.type!=="aiKill"&&F.type!=="join"&&F.type!=="disconnect"&&F.type!=="restart"&&F.type!=="gmPing")continue;const D=F.event;if(F.type==="kill"){const k=D&&typeof D.killerName=="string"?D.killerName:"Unknown",re=D&&typeof D.victimName=="string"?D.victimName:"Unknown",se=D&&typeof D.weaponName=="string"?D.weaponName:"",ce=D&&typeof D.distanceM=="number"?D.distanceM:null,Ee=typeof ce=="number"&&Number.isFinite(ce)?`${Math.round(ce)}m`:"",Ve=D?mn(D.victimPos):null,lt=D&&typeof D.victimPlayerId=="number"?D.victimPlayerId:null,We=D&&typeof D.killerPlayerId=="number"?D.killerPlayerId:null,ut=[];se&&ut.push(se),Ee&&ut.push(Ee),M.push({tsMs:F.tsMs,type:"kill",title:`${k} → ${re}`,subtitle:ut.join(" • "),focusPos:Ve,focusPlayerId:lt,playerIds:[We,lt].filter(dt=>typeof dt=="number")})}else if(F.type==="death"){const k=D&&typeof D.victimPlayerId=="number"?D.victimPlayerId:null,re=D&&typeof D.killerPlayerId=="number"?D.killerPlayerId:null;if(k!==null&&re!==null&&re>=0&&re!==k)continue;const se=D&&typeof D.victimName=="string"?D.victimName:"Unknown",ce=D&&typeof D.weaponName=="string"?D.weaponName:"",Ee=D&&typeof D.distanceM=="number"?D.distanceM:null,Ve=typeof Ee=="number"&&Number.isFinite(Ee)?`${Math.round(Ee)}m`:"",lt=D?mn(D.victimPos):null,We=[];ce&&We.push(ce),Ve&&We.push(Ve),M.push({tsMs:F.tsMs,type:"death",title:`${se} died`,subtitle:We.join(" • "),focusPos:lt,focusPlayerId:k,playerIds:[k].filter(ut=>typeof ut=="number")})}else if(F.type==="aiKill"){const k=D&&typeof D.killerName=="string"?D.killerName:"Unknown",re=D&&typeof D.victimName=="string"?D.victimName:"Unknown",se=D&&typeof D.weaponName=="string"?D.weaponName:"",ce=D&&typeof D.distanceM=="number"?D.distanceM:null,Ee=typeof ce=="number"&&Number.isFinite(ce)?`${Math.round(ce)}m`:"",Ve=D?mn(D.victimPos):null,lt=D&&typeof D.killerPlayerId=="number"?D.killerPlayerId:null,We=[];se&&We.push(se),Ee&&We.push(Ee),M.push({tsMs:F.tsMs,type:"aiKill",title:`${k} → AI: ${re}`,subtitle:We.join(" • "),focusPos:Ve,focusPlayerId:lt,playerIds:[lt].filter(ut=>typeof ut=="number")})}else if(F.type==="gmPing"){const k=D&&typeof D.by=="string"&&D.by.length>0?D.by:"",re=D&&typeof D.title=="string"&&D.title.length>0?D.title:"event",se=D?mn(D.pos):null,ce=k?`(${k} sent a GM ping to ${re})`:`GM ping to ${re}`;M.push({tsMs:F.tsMs,type:"gmPing",title:ce,subtitle:"",focusPos:se,focusPlayerId:null,playerIds:[]})}else{if(F.type==="restart"){M.push({tsMs:F.tsMs,type:"restart",title:"Server restarted",subtitle:"restart / history cleared",focusPos:null,focusPlayerId:null,playerIds:[]});continue}const k=D&&typeof D.name=="string"?D.name:String(D&&D.playerId?D.playerId:"player"),re=D&&typeof D.playerId=="number"?D.playerId:null,se=F.type==="join"&&typeof re=="number"?It(re,F.tsMs,9e4):null,ce=F.type==="disconnect"&&typeof re=="number"?b(re,F.tsMs,9e4):null;M.push({tsMs:F.tsMs,type:String(F.type),title:`${F.type==="join"?"Join":"Disconnect"}: ${k}`,subtitle:F.type==="disconnect"&&D&&typeof D.kickCause=="string"&&D.kickCause?`cause: ${D.kickCause}`:"",focusPos:se||ce,focusPlayerId:re,playerIds:[re].filter(Ee=>typeof Ee=="number")})}}M.sort((V,F)=>V.tsMs-F.tsMs);const O=u,U=_t;let P=M;return typeof O=="number"&&(P=P.filter(V=>V.tsMs<=O)),typeof U=="number"&&(P=P.filter(V=>V.playerIds.includes(U))),P.slice(-200)},[u,_t,L,It]);R.useEffect(()=>{if(!Fe)return;const M=window.setTimeout(()=>{const O=Oe.current.get(Fe);O&&O.scrollIntoView({block:"nearest",behavior:"smooth"})},0);return()=>window.clearTimeout(M)},[Fe,Y]);const ot=R.useMemo(()=>{const M=_.minTsMs,O=_.maxTsMs;if(typeof M!="number"||typeof O!="number")return[];let U=[];for(const F of L){const D=F.payload;if(!D||typeof D!="object"||D.type!=="kill"&&D.type!=="death"&&D.type!=="aiKill"&&D.type!=="join"&&D.type!=="disconnect"&&D.type!=="restart"&&D.type!=="gmPing"||typeof D.tsMs!="number"||D.tsMs<M||D.tsMs>O)continue;const k=D.event;if(D.type==="kill"){const re=k&&typeof k.killerName=="string"?k.killerName:"Unknown",se=k&&typeof k.victimName=="string"?k.victimName:"Unknown",ce=k&&typeof k.weaponName=="string"?k.weaponName:"",Ee=k&&typeof k.distanceM=="number"?k.distanceM:null,Ve=typeof Ee=="number"&&Number.isFinite(Ee)?`${Math.round(Ee)}m`:"",lt=k?mn(k.victimPos):null,We=k&&typeof k.victimPlayerId=="number"?k.victimPlayerId:null,ut=k&&typeof k.killerPlayerId=="number"?k.killerPlayerId:null,dt=[];ce&&dt.push(ce),Ve&&dt.push(Ve),U.push({tsMs:D.tsMs,type:"kill",title:`${re} → ${se}`,subtitle:dt.join(" • "),focusPos:lt,focusPlayerId:We,playerIds:[ut,We].filter(en=>typeof en=="number")})}else if(D.type==="death"){const re=k&&typeof k.victimPlayerId=="number"?k.victimPlayerId:null,se=k&&typeof k.killerPlayerId=="number"?k.killerPlayerId:null;if(re!==null&&se!==null&&se>=0&&se!==re)continue;const ce=k&&typeof k.victimName=="string"?k.victimName:"Unknown",Ee=k&&typeof k.weaponName=="string"?k.weaponName:"",Ve=k&&typeof k.distanceM=="number"?k.distanceM:null,lt=typeof Ve=="number"&&Number.isFinite(Ve)?`${Math.round(Ve)}m`:"",We=k?mn(k.victimPos):null,ut=[];Ee&&ut.push(Ee),lt&&ut.push(lt),U.push({tsMs:D.tsMs,type:"death",title:`${ce} died`,subtitle:ut.join(" • "),focusPos:We,focusPlayerId:re,playerIds:[re].filter(dt=>typeof dt=="number")})}else if(D.type==="aiKill"){const re=k&&typeof k.killerName=="string"?k.killerName:"Unknown",se=k&&typeof k.victimName=="string"?k.victimName:"Unknown",ce=k&&typeof k.weaponName=="string"?k.weaponName:"",Ee=k&&typeof k.distanceM=="number"?k.distanceM:null,Ve=typeof Ee=="number"&&Number.isFinite(Ee)?`${Math.round(Ee)}m`:"",lt=k?mn(k.victimPos):null,We=k&&typeof k.killerPlayerId=="number"?k.killerPlayerId:null,ut=[];ce&&ut.push(ce),Ve&&ut.push(Ve),U.push({tsMs:D.tsMs,type:"aiKill",title:`${re} → AI: ${se}`,subtitle:ut.join(" • "),focusPos:lt,focusPlayerId:We,playerIds:[We].filter(dt=>typeof dt=="number")})}else if(D.type==="gmPing"){const re=k&&typeof k.by=="string"&&k.by.length>0?k.by:"",se=k&&typeof k.title=="string"&&k.title.length>0?k.title:"event",ce=k?mn(k.pos):null,Ee=re?`(${re} sent a GM ping to ${se})`:`GM ping to ${se}`;U.push({tsMs:D.tsMs,type:"gmPing",title:Ee,subtitle:"",focusPos:ce,focusPlayerId:null,playerIds:[]})}else if(D.type==="restart"){const re=k&&typeof k.reason=="string"?k.reason:"",se=re==="session_start"?"server restart":re==="server_restart_or_history_cleared"?"restart / history cleared":re||"restart";U.push({tsMs:D.tsMs,type:"restart",title:"Server restarted",subtitle:se,focusPos:null,focusPlayerId:null,playerIds:[]})}else{const re=k&&typeof k.name=="string"?k.name:String(k&&k.playerId?k.playerId:"player"),se=k&&typeof k.playerId=="number"?k.playerId:null,ce=D.type==="join"&&typeof se=="number"?It(se,D.tsMs,9e4):null;U.push({tsMs:D.tsMs,type:D.type,title:`${D.type==="join"?"Join":"Disconnect"}: ${re}`,subtitle:D.type==="disconnect"&&k&&typeof k.kickCause=="string"&&k.kickCause?`cause: ${k.kickCause}`:"",focusPos:ce,focusPlayerId:se,playerIds:[se].filter(Ee=>typeof Ee=="number")})}}U.sort((F,D)=>F.tsMs-D.tsMs);const P=_t;typeof P=="number"&&(U=U.filter(F=>F.playerIds.includes(P)));const V=420;if(U.length>V){const F=Math.ceil(U.length/V),D=[];for(let k=0;k<U.length;k+=F)D.push(U[k]);return D}return U},[_t,L,It,_.maxTsMs,_.minTsMs]);function Zt(M){const O=`${Date.now()}-${Math.random().toString(16).slice(2)}`;it(U=>[{id:O,...M,visible:!1},...U].slice(0,5)),window.setTimeout(()=>{it(U=>U.map(P=>P.id===O?{...P,visible:!0}:P))},10),window.setTimeout(()=>{it(U=>U.map(P=>P.id===O?{...P,visible:!1}:P))},4500),window.setTimeout(()=>{it(U=>U.filter(P=>P.id!==O))},5200)}return R.useEffect(()=>{if(!v||L.length===0)return;const M=et.current;let O=M;const U=[];for(const P of L)!P||typeof P.receivedAt!="number"||P.receivedAt<=M||(P.receivedAt>O&&(O=P.receivedAt),U.push({receivedAt:P.receivedAt,payload:P.payload}));U.sort((P,V)=>P.receivedAt-V.receivedAt);for(const P of U){const V=P.payload;if(!(!V||typeof V!="object")&&V.type!=="snapshot"){if(V.type==="gmPing"){const F=V.event,D=F&&typeof F.by=="string"&&F.by.length>0?F.by:"",k=F&&typeof F.title=="string"&&F.title.length>0?F.title:"Ping";Zt({kind:"event",title:"GM ping",subtitle:D?`${D} • ${k}`:k});continue}if(V.type==="kill"){const F=V.event,D=F&&typeof F.killerName=="string"?F.killerName:"Unknown",k=F&&typeof F.victimName=="string"?F.victimName:"Unknown",re=F&&typeof F.weaponName=="string"&&F.weaponName.length>0?F.weaponName:"",se=F&&typeof F.distanceM=="number"?F.distanceM:null,ce=typeof se=="number"&&Number.isFinite(se)?`${Math.round(se)}m`:"",Ee=[];re&&Ee.push(re),ce&&Ee.push(ce),Zt({kind:"kill",title:`${D} → ${k}`,subtitle:Ee.length>0?Ee.join(" • "):"Kill"})}else if(V.type==="death"){const F=V.event,D=F&&typeof F.victimPlayerId=="number"?F.victimPlayerId:null,k=F&&typeof F.killerPlayerId=="number"?F.killerPlayerId:null;if(D!==null&&k!==null&&k>=0&&k!==D)continue;const re=F&&typeof F.victimName=="string"?F.victimName:"Unknown",se=F&&typeof F.weaponName=="string"&&F.weaponName.length>0?F.weaponName:"",ce=F&&typeof F.distanceM=="number"?F.distanceM:null,Ee=typeof ce=="number"&&Number.isFinite(ce)?`${Math.round(ce)}m`:"",Ve=[];se&&Ve.push(se),Ee&&Ve.push(Ee),Zt({kind:"event",title:`${re} died`,subtitle:Ve.length>0?Ve.join(" • "):"Death"})}else if(V.type==="aiKill"){const F=V.event,D=F&&typeof F.killerName=="string"?F.killerName:"Unknown",k=F&&typeof F.victimName=="string"?F.victimName:"Unknown",re=F&&typeof F.weaponName=="string"&&F.weaponName.length>0?F.weaponName:"",se=F&&typeof F.distanceM=="number"?F.distanceM:null,ce=typeof se=="number"&&Number.isFinite(se)?`${Math.round(se)}m`:"",Ee=[];re&&Ee.push(re),ce&&Ee.push(ce),Zt({kind:"kill",title:`${D} → AI: ${k}`,subtitle:Ee.length>0?Ee.join(" • "):"AI kill"})}}}O>M&&(et.current=O)},[L,v]),R.useEffect(()=>{if(!Ce||v)return;const M=u;if(typeof M!="number"||!Number.isFinite(M)||xe.length===0)return;const O=je.current;if(typeof O!="number"||!Number.isFinite(O)){je.current=M;return}if(M+50<O){je.current=M,it([]);return}if(M<=O)return;let U=0,P=xe.length-1,V=xe.length;for(;U<=P;){const k=U+P>>1;xe[k].tsMs>O?(V=k,P=k-1):U=k+1}const F=[];for(let k=V;k<xe.length;k++){const re=xe[k];if(re.tsMs>M)break;F.push(re)}const D=F.length>2?F.slice(-2):F;for(const k of D)Zt({kind:k.kind,title:k.title,subtitle:k.subtitle});je.current=M},[u,v,Ce,xe]),p.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden"},children:[p.jsxs("div",{className:"row",style:{gap:12,padding:12,alignItems:"center"},children:[p.jsxs("div",{style:{minWidth:240,maxWidth:520,flex:1},children:[p.jsxs("select",{className:"input",value:i,onChange:M=>{r(M.target.value),j([]),te(null),z(null),ve([]),m({minTsMs:null,maxTsMs:null}),g(null),ge.current=null,et.current=0,je.current=null,it([])},children:[p.jsx("option",{value:"",children:"Select a server…"}),e.map(M=>p.jsxs("option",{value:M.id,children:[M.name," (",M.id,")"]},M.id))]}),e.length===0?p.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"No servers returned yet."}):null]}),Ce?null:p.jsx("button",{className:"button",onClick:()=>{l(null),uf().then(M=>a(M)).catch(M=>{const O=M instanceof Error?M.message:"Failed to load server status";l(O)})},children:"Refresh overview"}),f?p.jsx("div",{className:"muted",style:{fontSize:12},children:"Loading…"}):null,c?p.jsx("div",{className:"error",style:{flex:1},children:c}):null]}),Ce?p.jsx("div",{style:{position:"relative",width:"100%",height:"calc(100vh - 72px)",padding:12,boxSizing:"border-box"},children:p.jsx("div",{className:"card",style:{width:"100%",height:"100%",padding:0,overflow:"hidden"},children:p.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[p.jsx(SC,{players:X,focusTarget:oe,focusNonce:ee,followPlayerId:rt,nameTags:K,showAimLines:fe,trail:Me,deathMarkers:Ie,terrain:y,towns:w||void 0}),rt!==null&&nt?p.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:132,display:"flex",justifyContent:"center",pointerEvents:"none"},children:p.jsx("div",{className:"card",style:{padding:"8px 12px",background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)"},children:p.jsxs("div",{style:{fontWeight:800,fontSize:12},children:["Attached to ",nt,", press F to unattach"]})})}):null,p.jsx("div",{style:{position:"absolute",top:12,right:12,width:340,display:"flex",flexDirection:"column",gap:8,pointerEvents:"none"},children:wt.map(M=>p.jsxs("div",{style:{pointerEvents:"none",padding:"10px 12px",borderRadius:10,background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)",opacity:M.visible?1:0,transform:M.visible?"translateY(0px)":"translateY(-6px)",transition:"opacity 250ms ease, transform 250ms ease"},children:[p.jsx("div",{style:{fontWeight:700,fontSize:13},children:M.title}),M.subtitle?p.jsx("div",{className:"muted",style:{fontSize:12},children:M.subtitle}):null]},M.id))}),p.jsx("div",{style:{position:"absolute",top:12,left:12,width:le?360:"auto"},children:p.jsxs("div",{className:"card",style:{padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[p.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"nowrap"},children:[p.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[p.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:Y==="players"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:Y==="players"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>Z("players"),children:"Players"}),p.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:Y==="events"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:Y==="events"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>Z("events"),children:"Events"})]}),p.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[Y==="players"?p.jsx("button",{type:"button",className:"button",title:"Nametag options",style:{padding:"6px 10px"},onClick:()=>pe(M=>!M),children:"⚙"}):null,p.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>H(M=>!M),children:le?"−":"+"})]})]}),le?p.jsxs("div",{className:"stack",style:{marginTop:10},children:[Y==="players"?p.jsxs(p.Fragment,{children:[ae?p.jsxs("div",{style:{border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:[p.jsx("div",{className:"label",style:{marginBottom:8},children:"Nametags"}),p.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[p.jsx("input",{type:"checkbox",checked:Je,onChange:M=>Be(M.target.checked)}),p.jsx("span",{className:"muted",style:{fontSize:12},children:"Show nametags"})]}),p.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[p.jsx("input",{type:"checkbox",checked:A,onChange:M=>T(M.target.checked)}),p.jsx("span",{className:"muted",style:{fontSize:12},children:"Background"})]}),p.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[p.jsx("input",{type:"checkbox",checked:q,onChange:M=>ye(M.target.checked)}),p.jsx("span",{className:"muted",style:{fontSize:12},children:"Include vehicle in label"})]}),p.jsx("div",{className:"label",style:{marginBottom:6},children:"Nametag size"}),p.jsx("input",{style:{width:"100%"},type:"range",min:.6,max:1.6,step:.1,value:ct,onChange:M=>$e(Number(M.target.value))}),p.jsxs("div",{className:"muted",style:{fontSize:12},children:[ct.toFixed(1),"×"]}),p.jsx("div",{style:{height:8}}),p.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[p.jsx("input",{type:"checkbox",checked:fe,onChange:M=>de(M.target.checked)}),p.jsx("span",{className:"muted",style:{fontSize:12},children:"Aim direction line"})]}),p.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[p.jsx("input",{type:"checkbox",checked:ke,onChange:M=>we(M.target.checked)}),p.jsx("span",{className:"muted",style:{fontSize:12},children:"Death markers"})]}),p.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[p.jsx("input",{type:"checkbox",checked:Pe,onChange:M=>me(M.target.checked)}),p.jsx("span",{className:"muted",style:{fontSize:12},children:"Trails (focused player)"})]}),Pe?p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"label",style:{marginBottom:6},children:"Trail window (seconds)"}),p.jsx("input",{style:{width:"100%"},type:"range",min:5,max:60,step:5,value:at,onChange:M=>he(Number(M.target.value))}),p.jsxs("div",{className:"muted",style:{fontSize:12},children:[at,"s"]})]}):null]}):null,p.jsx("input",{className:"input",placeholder:"Search players…",value:ne,onChange:M=>E(M.target.value)})]}):null,Y==="players"?p.jsx("div",{className:"scroll",style:{maxHeight:240,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:Jt.length===0?p.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No players."}):Jt.map(M=>{const O=I===M.playerId;return p.jsxs("button",{type:"button",onClick:()=>{Z("players"),te(M.playerId),Tt(M.playerId);const U=X.find(P=>P.playerId===M.playerId);U&&(z(U.pos),Q(P=>P+1))},className:"button",style:{width:"100%",textAlign:"left",borderRadius:0,border:"none",borderBottom:"1px solid rgba(255,255,255,0.06)",background:O?"rgba(255,255,255,0.08)":"transparent",padding:"8px 10px"},children:[p.jsx("div",{style:{fontWeight:700,fontSize:13},children:M.name}),p.jsxs("div",{className:"muted",style:{fontSize:11},children:["#",M.playerId]})]},M.playerId)})}):p.jsxs("div",{className:"stack",style:{gap:8},children:[p.jsxs("div",{className:"row",style:{justifyContent:"space-between",gap:10},children:[p.jsx("div",{className:"muted",style:{fontSize:12},children:"Event click offset"}),p.jsxs("div",{className:"row",style:{gap:8},children:[p.jsx("input",{className:"input",style:{width:90,padding:"6px 10px"},type:"number",min:0,max:60,step:1,value:Ne,onChange:M=>ft(Math.max(0,Math.min(60,Math.floor(Number(M.target.value)||0)))),title:"Jump this many seconds before an event"}),p.jsx("div",{className:"muted",style:{fontSize:12},children:"sec"})]})]}),p.jsx("div",{className:"scroll",style:{maxWidth:340,overflowX:"auto",overflowY:"hidden",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:At.length===0?p.jsx("div",{className:"muted",style:{fontSize:12},children:"No events in buffer yet."}):p.jsx("div",{style:{display:"flex",gap:10},children:At.slice().reverse().map((M,O)=>{const U=`${M.tsMs}|${M.type}|${M.title}|${M.subtitle||""}`,P=Fe===U,V=!!Ce&&M.type!=="gmPing"&&!!M.focusPos,F=M.subtitle?`${M.title} • ${M.subtitle}`:M.title;return p.jsxs("div",{ref:D=>{D?Oe.current.set(U,D):Oe.current.delete(U)},className:"button",style:{minWidth:220,textAlign:"left",borderRadius:10,border:P?"1px solid rgba(255,255,255,0.35)":"1px solid rgba(255,255,255,0.10)",background:P?"rgba(255,255,255,0.10)":"rgba(255,255,255,0.06)",padding:"8px 10px",position:"relative"},role:"button",tabIndex:0,onClick:()=>{Qe(U),qe(!1),x(!1),mt(M.tsMs),typeof M.focusPlayerId=="number"&&te(M.focusPlayerId),M.focusPos&&(z(M.focusPos),Q(D=>D+1))},onKeyDown:D=>{D.key!=="Enter"&&D.key!==" "||(D.preventDefault(),Qe(U),qe(!1),x(!1),mt(M.tsMs),typeof M.focusPlayerId=="number"&&te(M.focusPlayerId),M.focusPos&&(z(M.focusPos),Q(k=>k+1)))},children:[p.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:8,right:8,padding:"4px 8px",fontSize:11,opacity:V?1:.4},title:V?"Send GM ping to this event location":"No position for this event",disabled:!V,onClick:D=>{if(D.stopPropagation(),!Ce)return;const k=M.focusPos;if(!k)return;const re=typeof M.focusPlayerId=="number"?M.focusPlayerId:Array.isArray(M.playerIds)&&M.playerIds.length>0?M.playerIds[0]:null;DM({serverId:Ce,tsMs:M.tsMs,pos:k,title:F,reporterPlayerId:re})},children:"GM ping"}),p.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:34,right:8,padding:"4px 8px",fontSize:11,opacity:V?1:.4},title:V?"Export 5s before/after as a GIF to Discord":"No position for this event",disabled:!V,onClick:D=>{if(D.stopPropagation(),!Ce)return;const k=M.focusPos;k&&(async()=>{try{await WM({serverId:Ce,tsMs:M.tsMs,title:M.title,pos:k,focusPlayerId:typeof M.focusPlayerId=="number"?M.focusPlayerId:null,playerIds:Array.isArray(M.playerIds)?M.playerIds:null}),Zt({kind:"event",title:"Discord export",subtitle:"Sent"})}catch(re){d(re instanceof Error?re.message:"Failed to export to Discord")}})()},children:"Export"}),p.jsx("div",{style:{fontWeight:800,fontSize:12},children:M.title}),p.jsxs("div",{className:"muted",style:{fontSize:11,marginTop:2},children:["+",Pl(M.tsMs-Re.min),tt?` • ${tt(M.tsMs)}`:"",M.subtitle?` • ${M.subtitle}`:""]})]},`${M.tsMs}-${O}`)})})})]}),p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Selected"}),I===null?p.jsx("div",{className:"muted",style:{fontSize:12},children:"Click a player to view equipment."}):kt?p.jsxs("div",{style:{fontSize:12},children:[p.jsxs("div",{className:"muted",style:{marginBottom:6},children:["pos: ",JSON.stringify(kt.pos)]}),p.jsxs("details",{open:!0,children:[p.jsx("summary",{style:{cursor:"pointer",fontWeight:700},children:"Weapon"}),p.jsx("div",{className:"muted",style:{marginTop:6},children:kt.weapon&&kt.weapon.name?kt.weapon.name:"None"})]}),p.jsx("div",{style:{height:6}}),p.jsxs("details",{children:[p.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Inventory (",Array.isArray(kt.inventory)?kt.inventory.length:0,")"]}),p.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:(()=>{const M=TC(kt.inventory,O=>O&&O.name?String(O.name):"Item");return M.length===0?p.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No inventory data in this snapshot."}):M.slice(0,80).map((O,U)=>p.jsx("div",{style:{padding:"7px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:p.jsxs("div",{style:{fontSize:12},children:[O.name,O.count>1?` ×${O.count}`:""]})},U))})()})]}),p.jsx("div",{style:{height:6}}),p.jsxs("details",{children:[p.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Hotbar (",Array.isArray(kt.attachments)?kt.attachments.length:0,")"]}),p.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:Array.isArray(kt.attachments)&&kt.attachments.length>0?kt.attachments.map((M,O)=>p.jsx("div",{style:{padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:p.jsxs("div",{style:{fontSize:12},children:[M&&M.slot?p.jsxs("span",{className:"muted",style:{fontSize:11},children:[String(M.slot),":"]}):null," ",M&&M.name?String(M.name):"Item"]})},O)):p.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No attachments data in this snapshot."})})]}),p.jsx("div",{style:{height:8}}),p.jsxs("div",{children:[p.jsx("div",{className:"muted",style:{fontSize:12,marginBottom:6},children:"Filter events by player"}),p.jsxs("select",{className:"input",style:{width:"100%",padding:"6px 10px"},value:_t===null?"":String(_t),onChange:M=>{const O=String(M.target.value||"");if(!O){Lt(null);return}const U=Number(O);Lt(Number.isFinite(U)?U:null)},title:"Filter events by player",children:[p.jsx("option",{value:"",children:"All players"}),Ge.map(M=>p.jsxs("option",{value:String(M.playerId),children:[M.name," (#",M.playerId,")"]},M.playerId))]})]})]}):p.jsx("div",{className:"muted",style:{fontSize:12},children:"No snapshot data for this player at the current time."})]})]}):null]})}),p.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:12,display:"flex",justifyContent:"center"},children:p.jsxs("div",{className:"card",style:{width:"min(980px, 100%)",padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[p.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Replay time"}),p.jsxs("div",{className:"muted",style:{fontSize:12},children:["+",Pl(Re.value-Re.min)," of +",Pl(Re.max-Re.min),tt?` • ${tt(Re.value)}`:""]})]}),p.jsxs("div",{className:"row",style:{gap:10,alignItems:"center"},children:[p.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>{v&&x(!1),qe(M=>!M)},disabled:Re.disabled,children:yt?"Pause":"Play"}),p.jsxs("select",{className:"input",style:{width:110,padding:"6px 10px"},value:String(W),onChange:M=>$t(Number(M.target.value)),disabled:Re.disabled,title:"Playback speed",children:[p.jsx("option",{value:"0.25",children:"0.25×"}),p.jsx("option",{value:"0.5",children:"0.5×"}),p.jsx("option",{value:"1",children:"1×"}),p.jsx("option",{value:"2",children:"2×"}),p.jsx("option",{value:"4",children:"4×"})]}),p.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[p.jsx("input",{type:"checkbox",checked:Ze,onChange:M=>J(M.target.checked)}),p.jsx("span",{className:"muted",style:{fontSize:12},children:"Events"})]}),p.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[p.jsx("input",{type:"checkbox",checked:v,onChange:M=>{const O=M.target.checked;x(O),O&&qe(!1)}}),p.jsx("span",{className:"muted",style:{fontSize:12},children:"Live"})]})]})]}),Ze?p.jsxs("div",{style:{position:"relative",height:18,marginTop:6,marginBottom:4},children:[p.jsx("div",{style:{position:"absolute",left:0,right:0,top:8,height:2,background:"rgba(255,255,255,0.10)"}}),ue?p.jsxs("div",{style:{position:"absolute",left:`${ue.leftPct}%`,top:0,transform:"translate(-50%, -110%)",zIndex:10,pointerEvents:"none",maxWidth:320,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:"6px 8px"},children:[p.jsx("div",{style:{fontWeight:800,fontSize:12,lineHeight:1.2},children:ue.title}),p.jsx("div",{className:"muted",style:{fontSize:11,marginTop:2,lineHeight:1.2},children:ue.subtitle})]}):null,(()=>{const M=Re.min,O=Re.max,U=Math.max(1,O-M);return ot.map((P,V)=>{const F=(P.tsMs-M)/U,D=Math.min(1,Math.max(0,F))*100,k=P.type==="kill"||P.type==="death"||P.type==="aiKill"?"rgba(255,74,74,0.95)":P.type==="restart"?"rgba(255,217,102,0.95)":"rgba(183,247,200,0.95)",re=P.type==="disconnect"?"brightness(0.65) saturate(1.1)":void 0,se=`+${Pl(P.tsMs-M)}${tt?` • ${tt(P.tsMs)}`:""}${P.subtitle?` • ${P.subtitle}`:""}`,ce=`${P.tsMs}|${P.type}|${P.title}|${P.subtitle||""}`;return p.jsx("button",{type:"button",className:"button",style:{position:"absolute",left:`calc(${D}% - 4px)`,top:4,width:8,height:8,borderRadius:999,padding:0,border:"1px solid rgba(0,0,0,0.35)",background:k,filter:re},onMouseEnter:()=>{be({tsMs:P.tsMs,type:P.type,title:P.title,subtitle:se,leftPct:D})},onMouseLeave:()=>be(null),onClick:()=>{qe(!1),x(!1),mt(P.tsMs),typeof P.focusPlayerId=="number"&&te(P.focusPlayerId),P.focusPos&&(z(P.focusPos),Q(Ee=>Ee+1)),Z("events"),Qe(ce),be(null)}},`${P.tsMs}-${V}-${P.type}`)})})()]}):null,p.jsx("input",{style:{width:"100%"},type:"range",min:Re.min,max:Re.max,value:Re.value,disabled:Re.disabled,onChange:M=>{const O=Number(M.target.value);Number.isFinite(O)&&(v&&x(!1),yt&&qe(!1),g(O))}})]})})]})})}):null,Ce?null:p.jsxs("div",{style:{padding:12,height:"calc(100vh - 72px)",boxSizing:"border-box",overflow:"auto"},children:[p.jsxs("div",{className:"card",style:{marginBottom:12},children:[p.jsx("div",{style:{fontWeight:900,letterSpacing:.2},children:"Server overview"}),p.jsx("div",{style:{marginTop:4,fontSize:13},children:"Pick a server to open the replay viewer. Times are shown in your local clock."}),o?p.jsx("div",{className:"error",style:{marginTop:10},children:o}):null]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:(s&&s.length>0?s:e.map(M=>({serverId:M.id,name:M.name,lastIngestTsMs:null,minTsMs:null,maxTsMs:null,firstReceivedAt:null,lastReceivedAt:null,storedEvents:null,totalEvents:null,retentionMs:0,mapId:null}))).map(M=>{const O=typeof M.retentionMs=="number"?M.retentionMs:0,U=typeof M.lastReceivedAt=="number"?M.lastReceivedAt:null,P=O>0&&U!==null?U-O:null,V=typeof M.firstReceivedAt=="number"?P!==null?Math.max(M.firstReceivedAt,P):M.firstReceivedAt:P;return p.jsxs("button",{className:"card",style:{textAlign:"left",cursor:"pointer",border:"none"},onClick:()=>{r(M.serverId),j([]),te(null),z(null),ve([]),m({minTsMs:null,maxTsMs:null}),g(null),ge.current=null,et.current=0,it([])},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12},children:[p.jsx("div",{style:{fontWeight:900},children:M.name}),p.jsx("div",{className:"muted",style:{fontSize:12},children:M.serverId})]}),p.jsxs("div",{style:{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[p.jsxs("div",{children:[p.jsx("div",{className:"muted",style:{fontSize:12},children:"Events"}),p.jsx("div",{style:{fontWeight:800},children:typeof M.storedEvents=="number"?`${M.storedEvents} events`:"—"}),typeof M.totalEvents=="number"&&typeof M.storedEvents=="number"&&M.totalEvents!==M.storedEvents?p.jsxs("div",{className:"muted",style:{fontSize:12,marginTop:2},children:["All-time: ",M.totalEvents," events"]}):null]}),p.jsxs("div",{children:[p.jsx("div",{className:"muted",style:{fontSize:12},children:"Retention"}),p.jsx("div",{style:{fontWeight:800},children:O>0?wC(O):"∞"})]}),p.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[p.jsx("div",{className:"muted",style:{fontSize:12},children:"Buffer window"}),p.jsxs("div",{style:{fontWeight:800,fontSize:13},children:[cd(V)," → ",cd(U)]})]}),p.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[p.jsx("div",{className:"muted",style:{fontSize:12},children:"Last ingest"}),p.jsx("div",{style:{fontWeight:800,fontSize:13},children:cd(M.lastReceivedAt)})]})]})]},M.serverId)})}),(!s||s.length===0)&&e.length===0?p.jsx("div",{style:{marginTop:12},children:"No servers yet — add one in the Dev page, then come back here."}):null]})]})}function Rg(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function AC(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function CC(){const[t,e]=R.useState(null),[n,i]=R.useState(null);R.useEffect(()=>{let s=!1;return uf().then(a=>{s||(e(a),i(null))}).catch(a=>{if(s)return;const o=a instanceof Error?a.message:"Failed to load replay status";i(o)}),()=>{s=!0}},[]);const r=R.useMemo(()=>{if(!t)return[];const s=t.slice();return s.sort((a,o)=>{const l=typeof a.storedEvents=="number"?a.storedEvents:-1;return(typeof o.storedEvents=="number"?o.storedEvents:-1)-l}),s.slice(0,6)},[t]);return p.jsx("div",{className:"container",children:p.jsxs("div",{className:"stack",children:[p.jsx("div",{className:"card",style:{padding:18},children:p.jsxs("div",{className:"stack",style:{gap:8},children:[p.jsx("div",{className:"label",children:"Welcome"}),p.jsx("h1",{className:"h1",style:{marginTop:0},children:"ReforgedZ Admin"}),p.jsx("div",{className:"muted",children:"Use the sidebar to manage users, servers, and replay history."})]})}),p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:[p.jsx("div",{className:"card",children:p.jsxs("div",{className:"stack",style:{gap:10},children:[p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Replay overview"}),p.jsx("div",{className:"muted",style:{fontSize:13},children:t?`${t.length} server${t.length===1?"":"s"} detected.`:"Loading…"}),n?p.jsx("div",{className:"error",style:{marginTop:8},children:n}):null]}),r.length>0?p.jsx("div",{className:"stack",style:{gap:8},children:r.map(s=>{const a=typeof s.retentionMs=="number"?s.retentionMs:0,o=typeof s.lastReceivedAt=="number"?s.lastReceivedAt:null,l=a>0&&o!==null?o-a:null,c=typeof s.firstReceivedAt=="number"?l!==null?Math.max(s.firstReceivedAt,l):s.firstReceivedAt:l;return p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:850},children:s.name}),p.jsxs("div",{className:"muted",style:{fontSize:12},children:[Rg(c)," → ",Rg(o)]})]}),p.jsxs("div",{style:{textAlign:"right"},children:[p.jsx("div",{style:{fontWeight:900},children:typeof s.storedEvents=="number"?`${s.storedEvents} events`:"—"}),p.jsx("div",{className:"muted",style:{fontSize:12},children:a>0?AC(a):"∞"}),typeof s.totalEvents=="number"&&typeof s.storedEvents=="number"&&s.totalEvents!==s.storedEvents?p.jsxs("div",{className:"muted",style:{fontSize:11},children:["All-time ",s.totalEvents," events"]}):null]})]},s.serverId)})}):p.jsx("div",{className:"muted",style:{fontSize:12},children:"Open Replay Tool to see a detailed per-server dashboard."})]})}),p.jsx("div",{className:"card",children:p.jsxs("div",{className:"stack",style:{gap:10},children:[p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Replay Tool tips"}),p.jsx("div",{className:"muted",style:{fontSize:13},children:"A few quick controls that help a lot."})]}),p.jsxs("div",{className:"stack",style:{gap:6,fontSize:13},children:[p.jsxs("div",{children:[p.jsx("span",{style:{fontWeight:850},children:"Attach camera:"})," click a player in the left panel."]}),p.jsxs("div",{children:[p.jsx("span",{style:{fontWeight:850},children:"Detach:"})," press ",p.jsx("span",{style:{fontWeight:900},children:"F"}),"."]}),p.jsxs("div",{children:[p.jsx("span",{style:{fontWeight:850},children:"Event jump offset:"})," defaults to 5s before the event (configurable in Replay Tool)."]})]})]})}),p.jsx("div",{className:"card",children:p.jsxs("div",{className:"stack",style:{gap:10},children:[p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Retention"}),p.jsx("div",{className:"muted",style:{fontSize:13},children:"Replay is a rolling buffer. Restarts are marked in the timeline."})]}),p.jsx("div",{className:"muted",style:{fontSize:12},children:"If you clear a server’s history, replay data is removed but cached map metadata is preserved."})]})})]})]})})}const Pg=[{label:"Core",tools:[{key:"replay",label:"Replay Tool"},{key:"admin",label:"User Management"},{key:"dev",label:"Dev"}]},{label:"Admin Tools",tools:[{key:"players",label:"Live Players"},{key:"bans",label:"Bans"},{key:"mutes",label:"Mutes"},{key:"events",label:"Event Log"},{key:"health",label:"Server Health"},{key:"playerLookup",label:"Player Lookup"}]}],Ng={replay:!0,admin:!1,dev:!1,players:!1,bans:!1,mutes:!1,events:!1,health:!1,playerLookup:!1};function RC(t){const e=Object.entries(t).filter(([,n])=>n).map(([n])=>n);return e.length>0?e.join(", "):"none"}function PC(){const[t,e]=R.useState(null),[n,i]=R.useState(!1),[r,s]=R.useState([]),[a,o]=R.useState(""),[l,c]=R.useState(""),[d,f]=R.useState({...Ng}),[h,v]=R.useState(null);async function x(){i(!0),e(null);try{s(await UM())}catch(g){e(g instanceof Error?g.message:"Failed to load users")}finally{i(!1)}}R.useEffect(()=>{x()},[]);const _=R.useMemo(()=>a.trim().length>=3&&l.length>=6,[l.length,a]);function m(g){f(y=>({...y,[g]:!y[g]}))}async function u(g,y){var S,w,C,N,j,ne,E,I,te;i(!0),e(null);try{const oe={replay:!!((S=g.tools)!=null&&S.replay),admin:!!((w=g.tools)!=null&&w.admin),dev:!!((C=g.tools)!=null&&C.dev),players:!!((N=g.tools)!=null&&N.players),bans:!!((j=g.tools)!=null&&j.bans),mutes:!!((ne=g.tools)!=null&&ne.mutes),events:!!((E=g.tools)!=null&&E.events),health:!!((I=g.tools)!=null&&I.health),playerLookup:!!((te=g.tools)!=null&&te.playerLookup)};await kM(g.username,{...oe,[y]:!oe[y]}),await x()}catch(oe){e(oe instanceof Error?oe.message:"Failed to update user")}finally{i(!1)}}return p.jsx("div",{className:"container",children:p.jsxs("div",{className:"stack",children:[p.jsx("h1",{className:"h1",children:"Admin Management"}),t?p.jsx("div",{className:"error",children:t}):null,p.jsx("div",{className:"card",children:p.jsxs("div",{className:"stack",children:[p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Create user"}),p.jsx("div",{className:"muted",style:{fontSize:12},children:"Create a new account and choose which tools it can access."})]}),p.jsxs("div",{className:"row",children:[p.jsxs("div",{style:{flex:1,minWidth:200},children:[p.jsx("div",{className:"label",children:"Username"}),p.jsx("input",{className:"input",value:a,onChange:g=>o(g.target.value),placeholder:"username"})]}),p.jsxs("div",{style:{flex:1,minWidth:200},children:[p.jsx("div",{className:"label",children:"Password"}),p.jsx("input",{className:"input",type:"password",value:l,onChange:g=>c(g.target.value),placeholder:"password"})]})]}),Pg.map(g=>p.jsxs("div",{children:[p.jsx("div",{className:"label",style:{marginBottom:6},children:g.label}),p.jsx("div",{className:"row",style:{gap:12,flexWrap:"wrap"},children:g.tools.map(y=>p.jsxs("label",{className:"row",style:{gap:6,cursor:"pointer"},children:[p.jsx("input",{type:"checkbox",checked:d[y.key],onChange:()=>m(y.key)}),p.jsx("span",{style:{fontSize:12},children:y.label})]},y.key))})]},g.label)),p.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:p.jsx("button",{className:"button buttonPrimary",disabled:!_||n,onClick:async()=>{i(!0),e(null);try{await FM({username:a.trim(),password:l,tools:d}),o(""),c(""),f({...Ng}),await x()}catch(g){e(g instanceof Error?g.message:"Failed to create user")}finally{i(!1)}},children:"Create user"})})]})}),p.jsx("div",{className:"card",children:p.jsxs("div",{className:"stack",children:[p.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Users"}),p.jsx("div",{className:"muted",style:{fontSize:12},children:"Click a user to manage permissions."})]}),p.jsx("button",{className:"button",disabled:n,onClick:x,children:"Refresh"})]}),p.jsx("div",{className:"scroll",style:{maxHeight:520,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?p.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No users found."}):r.map(g=>{const y=h===g.username;return p.jsxs("div",{style:{borderBottom:"1px solid rgba(255,255,255,0.06)"},children:[p.jsx("div",{style:{padding:"10px 12px",cursor:"pointer"},onClick:()=>v(y?null:g.username),children:p.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:800},children:g.username}),p.jsx("div",{className:"muted",style:{fontSize:11},children:RC(g.tools??{})})]}),p.jsxs("div",{className:"row",style:{gap:8},children:[p.jsx("span",{className:"muted",style:{fontSize:12},children:y?"collapse":"expand"}),p.jsx("button",{className:"button",style:{fontSize:11,padding:"4px 10px",borderColor:"rgba(255,180,180,0.35)"},disabled:n,onClick:async S=>{if(S.stopPropagation(),!!confirm(`Delete user '${g.username}'?`)){i(!0),e(null);try{await OM(g.username),await x()}catch(w){e(w instanceof Error?w.message:"Failed to delete user")}finally{i(!1)}}},children:"Delete"})]})]})}),y?p.jsx("div",{style:{padding:"0 12px 12px",display:"flex",flexDirection:"column",gap:8},children:Pg.map(S=>p.jsxs("div",{children:[p.jsx("div",{className:"label",style:{marginBottom:4},children:S.label}),p.jsx("div",{className:"row",style:{gap:8,flexWrap:"wrap"},children:S.tools.map(w=>{var N;const C=!!((N=g.tools)!=null&&N[w.key]);return p.jsxs("button",{className:"button",style:{fontSize:11,padding:"4px 10px",borderColor:C?"rgba(183,247,200,0.4)":"rgba(255,255,255,0.12)",background:C?"rgba(183,247,200,0.08)":void 0},disabled:n,onClick:()=>u(g,w.key),children:[w.label,": ",C?"On":"Off"]},w.key)})})]},S.label))}):null]},g.username)})})]})})]})})}function NC(){const[t,e]=R.useState(null),[n,i]=R.useState(!1),[r,s]=R.useState([]),[a,o]=R.useState(""),[l,c]=R.useState(""),[d,f]=R.useState(!1),[h,v]=R.useState(""),[x,_]=R.useState(""),[m,u]=R.useState("");async function g(){i(!0),e(null);try{const y=await zM();s(y);const S=await GM();f(!!S.isSet),o(S.masked||"")}catch(y){e(y instanceof Error?y.message:"Failed to load dev servers")}finally{i(!1)}}return R.useEffect(()=>{g()},[]),p.jsx("div",{className:"container",children:p.jsxs("div",{className:"stack",children:[p.jsx("h1",{className:"h1",children:"Dev"}),t?p.jsx("div",{className:"error",children:t}):null,p.jsx("div",{className:"card",children:p.jsxs("div",{className:"stack",children:[p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Discord webhook (global)"}),p.jsx("div",{className:"muted",style:{fontSize:12},children:"Used by “Export event to Discord”. One webhook URL is shared for all servers."})]}),p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Current"}),p.jsx("div",{className:"muted",style:{fontSize:12},children:d?a||"set":"not set"})]}),p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Webhook URL"}),p.jsx("input",{className:"input",type:"password",value:l,onChange:y=>c(y.target.value),placeholder:"https://discord.com/api/webhooks/..."}),p.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Leave blank and click Save to clear."})]}),p.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:p.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:async()=>{i(!0),e(null);try{await VM(l.trim()),c(""),await g()}catch(y){e(y instanceof Error?y.message:"Failed to save webhook")}finally{i(!1)}},children:"Save webhook"})}),p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Add server"}),p.jsx("div",{className:"muted",style:{fontSize:12},children:"Adds a new ingest key so the backend will accept replay uploads for that server."})]}),p.jsxs("div",{className:"row",children:[p.jsxs("div",{style:{flex:1,minWidth:240},children:[p.jsx("div",{className:"label",children:"Server ID"}),p.jsx("input",{className:"input",value:h,onChange:y=>v(y.target.value),placeholder:"reforgedz-dev-eu-1"})]}),p.jsxs("div",{style:{flex:1,minWidth:240},children:[p.jsx("div",{className:"label",children:"Server name (optional)"}),p.jsx("input",{className:"input",value:m,onChange:y=>u(y.target.value),placeholder:"EU #1"})]})]}),p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Server key / secret"}),p.jsx("input",{className:"input",value:x,onChange:y=>_(y.target.value),placeholder:"secret"}),p.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"This must match what the Reforger exporter sends as serverKey."})]}),p.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:p.jsx("button",{className:"button buttonPrimary",disabled:n||h.trim().length===0||x.trim().length<6,onClick:async()=>{i(!0),e(null);try{await BM({serverId:h.trim(),serverKey:x.trim(),name:m.trim()||void 0}),v(""),_(""),u(""),await g()}catch(y){e(y instanceof Error?y.message:"Failed to add server")}finally{i(!1)}},children:"Add server"})})]})}),p.jsxs("div",{className:"card",children:[p.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Servers"}),p.jsx("div",{className:"muted",style:{fontSize:12},children:"Clear history deletes stored replay history for that server (events + snapshots). Cached map data is kept."})]}),p.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:g,children:"Refresh"})]}),p.jsx("div",{style:{height:10}}),p.jsx("div",{className:"scroll",style:{maxHeight:520,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?p.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No servers configured."}):r.map(y=>p.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:p.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:800},children:y.name||y.id}),p.jsxs("div",{className:"muted",style:{fontSize:12},children:["id: ",y.id,y.keyHint?` • key: ${y.keyHint}`:""]})]}),p.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Clear history for '${y.id}'? This deletes stored replay data.`)){i(!0),e(null);try{await HM(y.id),await g()}catch(S){e(S instanceof Error?S.message:"Failed to clear history")}finally{i(!1)}}},children:"Clear history"}),p.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Regenerate terrain data for '${y.id}'? This queues a command for the exporter to re-send map terrain.`)){i(!0),e(null);try{await jM(y.id),await g()}catch(S){e(S instanceof Error?S.message:"Failed to regenerate terrain")}finally{i(!1)}}},children:"Regenerate terrain data"})]})},y.id))})]})]})})}const V0=R.createContext({servers:[],serverId:"",setServerId:()=>{}});function qc(){return R.useContext(V0)}function LC({children:t}){const[e,n]=R.useState([]),[i,r]=R.useState("");return R.useEffect(()=>{a0().then(s=>{n(s),s.length===1&&!i&&r(s[0].id)}).catch(()=>{})},[]),p.jsx(V0.Provider,{value:{servers:e,serverId:i,setServerId:r},children:t})}function Lg(t,e){if(e===0)return"Permanent";const i=(t+e)*1e3-Date.now();if(i<=0)return"Expired";const r=Math.floor(i/36e5),s=Math.floor(r/24);if(s>0)return`${s}d ${r%24}h remaining`;const a=Math.floor(i%36e5/6e4);return r>0?`${r}h ${a}m remaining`:`${a}m remaining`}function IC({serverId:t}){const[e,n]=R.useState([]),[i,r]=R.useState(null),[s,a]=R.useState(!1),[o,l]=R.useState(""),[c,d]=R.useState(!0),f=R.useRef(0),h=R.useCallback(async()=>{if(t){a(!0),r(null);try{n(await tE(t))}catch(_){r(_ instanceof Error?_.message:"Failed to load players")}finally{a(!1)}}},[t]);R.useEffect(()=>{if(!t||!c)return;h(),f.current=Date.now();const _=setInterval(async()=>{try{const m=await o0({serverId:t,types:"join,disconnect",sinceTsMs:f.current,limit:1});f.current=Date.now(),m.length>0&&h()}catch{}},5e3);return()=>clearInterval(_)},[t,c,h]);const v=R.useMemo(()=>{if(!o.trim())return e;const _=o.toLowerCase();return e.filter(m=>m.name.toLowerCase().includes(_)||m.identityId.toLowerCase().includes(_))},[e,o]);async function x(_){const m=prompt(`Kick reason for ${_.name}:`);if(m){a(!0);try{await JM({serverId:t,playerUID:_.identityId,reason:m}),await h()}catch(u){r(u instanceof Error?u.message:"Failed to kick player")}finally{a(!1)}}}return p.jsxs("div",{className:"stack",children:[p.jsxs("div",{className:"row",style:{gap:12},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{className:"label",children:"Search"}),p.jsx("input",{className:"input",placeholder:"Filter by name or UID...",value:o,onChange:_=>l(_.target.value)})]}),p.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:8},children:[p.jsxs("label",{className:"row",style:{gap:6},children:[p.jsx("input",{type:"checkbox",checked:c,onChange:_=>d(_.target.checked)}),p.jsx("span",{className:"muted",style:{fontSize:12},children:"Auto"})]}),p.jsx("button",{className:"button",onClick:h,disabled:s||!t,children:"Refresh"})]})]}),i?p.jsx("div",{className:"error",children:i}):null,p.jsxs("div",{className:"pageHeader",children:[p.jsxs("div",{className:"label",children:[v.length," player",v.length!==1?"s":""," online"]}),p.jsx("div",{className:"muted",style:{fontSize:11},children:"Refreshes on join / leave"})]}),p.jsxs("div",{className:"listContainer",children:[p.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1.5fr 1fr 1fr auto",gap:8,padding:"8px 12px",borderBottom:"1px solid rgba(255,255,255,0.10)",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",color:"rgba(230,237,243,0.4)"},children:[p.jsx("div",{children:"Player"}),p.jsx("div",{children:"Position"}),p.jsx("div",{children:"Vehicle"}),p.jsx("div",{children:"Weapon"}),p.jsx("div",{style:{textAlign:"right"},children:"Actions"})]}),p.jsx("div",{className:"scroll",style:{maxHeight:520,overflow:"auto"},children:v.length===0?p.jsx("div",{className:"muted",style:{padding:20,fontSize:12,textAlign:"center"},children:t?"No players online.":"Select a server."}):v.map(_=>p.jsxs("div",{className:"listRow",style:{display:"grid",gridTemplateColumns:"2fr 1.5fr 1fr 1fr auto",gap:8,alignItems:"center"},children:[p.jsxs("div",{style:{minWidth:0},children:[p.jsx("div",{style:{fontWeight:700,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:_.name}),p.jsx("div",{className:"muted",style:{fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:_.identityId||`ID: ${_.playerId}`})]}),p.jsx("div",{className:"muted",style:{fontSize:12},children:_.pos?`${Math.round(_.pos.x)}, ${Math.round(_.pos.y)}, ${Math.round(_.pos.z)}`:"-"}),p.jsx("div",{children:_.inVehicle&&_.vehicle?p.jsx("span",{className:"tag",style:{background:"rgba(100,180,255,0.12)",color:"#8ec8ff"},children:_.vehicle.name||_.vehicle.prefab}):p.jsx("span",{className:"muted",style:{fontSize:12},children:"-"})}),p.jsx("div",{children:_.weapon?p.jsx("span",{className:"tag",style:{background:"rgba(255,180,100,0.12)",color:"#ffc88e"},children:_.weapon.name||_.weapon.prefab}):p.jsx("span",{className:"muted",style:{fontSize:12},children:"-"})}),p.jsxs("div",{className:"row",style:{gap:4,justifyContent:"flex-end"},children:[p.jsx("button",{className:"button",style:{fontSize:11,padding:"4px 8px"},disabled:s||!_.identityId,onClick:()=>navigator.clipboard.writeText(_.identityId),children:"Copy UID"}),p.jsx("button",{className:"button",style:{fontSize:11,padding:"4px 8px",borderColor:"rgba(255,180,180,0.35)"},disabled:s||!_.identityId,onClick:()=>x(_),children:"Kick"})]})]},_.playerId))})]})]})}function DC({serverId:t}){const[e,n]=R.useState(""),[i,r]=R.useState(null),[s,a]=R.useState(null),[o,l]=R.useState(!1);async function c(){if(!(!e.trim()||!t)){l(!0),a(null),r(null);try{r(await nE(t,e.trim()))}catch(d){a(d instanceof Error?d.message:"Player not found")}finally{l(!1)}}}return p.jsxs("div",{className:"stack",children:[p.jsxs("div",{className:"row",style:{gap:12},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{className:"label",children:"Player UID"}),p.jsx("input",{className:"input",value:e,onChange:d=>n(d.target.value),placeholder:"BI Identity ID",onKeyDown:d=>{d.key==="Enter"&&c()}})]}),p.jsx("div",{style:{display:"flex",alignItems:"flex-end"},children:p.jsx("button",{className:"button buttonPrimary",disabled:o||!t||!e.trim(),onClick:c,children:"Search"})})]}),s?p.jsx("div",{className:"error",children:s}):null,i?p.jsxs("div",{className:"stack",children:[p.jsxs("div",{className:"card",children:[p.jsx("div",{style:{fontWeight:800,fontSize:16},children:i.playerName}),p.jsxs("div",{className:"muted",style:{fontSize:11,marginTop:4},children:["UID: ",i.playerUID]}),i.lastSeen?p.jsxs("div",{className:"muted",style:{fontSize:11},children:["Last seen: ",new Date(i.lastSeen).toLocaleString()]}):null]}),p.jsxs("div",{className:"statsGrid",children:[p.jsxs("div",{className:"card statCard",children:[p.jsx("div",{className:"label",children:"Kills"}),p.jsx("div",{className:"statValue",children:i.totalKills})]}),p.jsxs("div",{className:"card statCard",children:[p.jsx("div",{className:"label",children:"Deaths"}),p.jsx("div",{className:"statValue",children:i.totalDeaths})]}),p.jsxs("div",{className:"card statCard",children:[p.jsx("div",{className:"label",children:"K/D"}),p.jsx("div",{className:"statValue",children:i.totalDeaths>0?(i.totalKills/i.totalDeaths).toFixed(2):i.totalKills>0?"---":"0.00"})]})]}),i.bans.length>0?p.jsxs("div",{className:"card",children:[p.jsxs("div",{className:"label",style:{marginBottom:8},children:["Ban History (",i.bans.length,")"]}),p.jsx("div",{className:"listContainer",children:p.jsx("div",{className:"scroll",style:{maxHeight:200,overflow:"auto"},children:i.bans.map((d,f)=>p.jsxs("div",{className:"listRow",children:[p.jsx("div",{style:{fontWeight:700,color:"#ffb4b4",fontSize:13},children:d.reason}),p.jsxs("div",{className:"muted",style:{fontSize:11},children:["By: ",d.bannedBy," · ",Lg(d.timestamp,d.duration)]})]},f))})})]}):null,i.mutes.length>0?p.jsxs("div",{className:"card",children:[p.jsxs("div",{className:"label",style:{marginBottom:8},children:["Mute History (",i.mutes.length,")"]}),p.jsx("div",{className:"listContainer",children:p.jsx("div",{className:"scroll",style:{maxHeight:200,overflow:"auto"},children:i.mutes.map((d,f)=>p.jsxs("div",{className:"listRow",children:[p.jsx("div",{style:{fontWeight:700,color:"#ffd4b4",fontSize:13},children:d.reason}),p.jsxs("div",{className:"muted",style:{fontSize:11},children:["By: ",d.mutedBy," · ",Lg(d.timestamp,d.duration)]})]},f))})})]}):null]}):null]})}function UC(){const{serverId:t}=qc(),[e,n]=R.useState("live");return p.jsx("div",{className:"container",children:p.jsxs("div",{className:"stack",children:[p.jsx("h1",{className:"h1",children:"Players"}),p.jsxs("div",{className:"tabBar",children:[p.jsx("button",{className:`tab${e==="live"?" tabActive":""}`,onClick:()=>n("live"),children:"Live Players"}),p.jsx("button",{className:`tab${e==="lookup"?" tabActive":""}`,onClick:()=>n("lookup"),children:"Player Lookup"})]}),e==="live"?p.jsx(IC,{serverId:t}):p.jsx(DC,{serverId:t})]})})}const FC=[{label:"Permanent",value:0},{label:"1 hour",value:3600},{label:"6 hours",value:21600},{label:"1 day",value:86400},{label:"3 days",value:259200},{label:"7 days",value:604800},{label:"30 days",value:2592e3}],kC=[{label:"Permanent",value:0},{label:"5 minutes",value:300},{label:"30 minutes",value:1800},{label:"1 hour",value:3600},{label:"6 hours",value:21600},{label:"1 day",value:86400},{label:"7 days",value:604800}];function W0(t,e){if(e===0)return"Permanent";const i=(t+e)*1e3-Date.now();if(i<=0)return"Expired";const r=Math.floor(i/36e5),s=Math.floor(r/24);if(s>0)return`${s}d ${r%24}h remaining`;const a=Math.floor(i%36e5/6e4);return r>0?`${r}h ${a}m remaining`:`${a}m remaining`}function OC({serverId:t}){const[e,n]=R.useState([]),[i,r]=R.useState(null),[s,a]=R.useState(!1),[o,l]=R.useState(""),[c,d]=R.useState(""),[f,h]=R.useState(""),[v,x]=R.useState(""),[_,m]=R.useState(0),u=R.useCallback(async()=>{if(t){a(!0),r(null);try{n(await XM(t))}catch(w){r(w instanceof Error?w.message:"Failed to load bans")}finally{a(!1)}}},[t]);R.useEffect(()=>{t&&u()},[t,u]);const g=R.useMemo(()=>{if(!o.trim())return e;const w=o.toLowerCase();return e.filter(C=>C.playerName.toLowerCase().includes(w)||C.playerUID.toLowerCase().includes(w)||C.reason.toLowerCase().includes(w))},[e,o]);async function y(){if(c.trim()){a(!0),r(null);try{const w=Mh();await YM({serverId:t,playerUID:c.trim(),playerName:f.trim(),reason:v.trim()||"No reason",duration:_,bannedBy:(w==null?void 0:w.sub)??"WebAdmin"}),d(""),h(""),x(""),m(0),await u()}catch(w){r(w instanceof Error?w.message:"Failed to ban")}finally{a(!1)}}}async function S(w,C){if(confirm(`Unban ${C||w}?`)){a(!0),r(null);try{await qM(t,w),await u()}catch(N){r(N instanceof Error?N.message:"Failed to unban")}finally{a(!1)}}}return p.jsxs("div",{className:"stack",children:[p.jsx("div",{className:"card",children:p.jsxs("div",{className:"stack",children:[p.jsx("div",{className:"label",children:"Add ban"}),p.jsxs("div",{className:"row",style:{gap:12},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{className:"label",children:"Player UID"}),p.jsx("input",{className:"input",value:c,onChange:w=>d(w.target.value),placeholder:"BI Identity ID"})]}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{className:"label",children:"Name (optional)"}),p.jsx("input",{className:"input",value:f,onChange:w=>h(w.target.value),placeholder:"Name"})]})]}),p.jsxs("div",{className:"row",style:{gap:12},children:[p.jsxs("div",{style:{flex:2},children:[p.jsx("div",{className:"label",children:"Reason"}),p.jsx("input",{className:"input",value:v,onChange:w=>x(w.target.value),placeholder:"Ban reason"})]}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{className:"label",children:"Duration"}),p.jsx("select",{className:"input",value:_,onChange:w=>m(Number(w.target.value)),children:FC.map(w=>p.jsx("option",{value:w.value,children:w.label},w.value))})]})]}),p.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:p.jsx("button",{className:"button buttonPrimary",disabled:s||!t||!c.trim(),onClick:y,children:"Ban player"})})]})}),i?p.jsx("div",{className:"error",children:i}):null,p.jsxs("div",{className:"row",style:{gap:12},children:[p.jsx("div",{style:{flex:1},children:p.jsx("input",{className:"input",placeholder:"Search bans...",value:o,onChange:w=>l(w.target.value)})}),p.jsx("button",{className:"button",onClick:u,disabled:s||!t,children:"Refresh"})]}),p.jsxs("div",{className:"label",children:[g.length," ban",g.length!==1?"s":""]}),p.jsx("div",{className:"listContainer",children:p.jsx("div",{className:"scroll",style:{maxHeight:400,overflow:"auto"},children:g.length===0?p.jsx("div",{className:"muted",style:{padding:20,fontSize:12,textAlign:"center"},children:t?"No bans found.":"Select a server."}):g.map(w=>p.jsx("div",{className:"listRow",children:p.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700},children:w.playerName||w.playerUID}),p.jsxs("div",{className:"muted",style:{fontSize:11},children:["UID: ",w.playerUID]}),p.jsxs("div",{className:"muted",style:{fontSize:11},children:[w.reason," · By: ",w.bannedBy," · ",W0(w.timestamp,w.duration)]})]}),p.jsx("button",{className:"button",style:{fontSize:11,padding:"4px 10px",borderColor:"rgba(183,247,200,0.35)"},disabled:s,onClick:()=>S(w.playerUID,w.playerName),children:"Unban"})]})},w.playerUID))})})]})}function zC({serverId:t}){const[e,n]=R.useState([]),[i,r]=R.useState(null),[s,a]=R.useState(!1),[o,l]=R.useState(""),[c,d]=R.useState(""),[f,h]=R.useState(""),[v,x]=R.useState(""),[_,m]=R.useState(0),u=R.useCallback(async()=>{if(t){a(!0),r(null);try{n(await KM(t))}catch(w){r(w instanceof Error?w.message:"Failed to load mutes")}finally{a(!1)}}},[t]);R.useEffect(()=>{t&&u()},[t,u]);const g=R.useMemo(()=>{if(!o.trim())return e;const w=o.toLowerCase();return e.filter(C=>C.playerName.toLowerCase().includes(w)||C.playerUID.toLowerCase().includes(w)||C.reason.toLowerCase().includes(w))},[e,o]);async function y(){if(c.trim()){a(!0),r(null);try{const w=Mh();await ZM({serverId:t,playerUID:c.trim(),playerName:f.trim(),reason:v.trim()||"No reason",duration:_,mutedBy:(w==null?void 0:w.sub)??"WebAdmin"}),d(""),h(""),x(""),m(0),await u()}catch(w){r(w instanceof Error?w.message:"Failed to mute")}finally{a(!1)}}}async function S(w,C){if(confirm(`Unmute ${C||w}?`)){a(!0),r(null);try{await QM(t,w),await u()}catch(N){r(N instanceof Error?N.message:"Failed to unmute")}finally{a(!1)}}}return p.jsxs("div",{className:"stack",children:[p.jsx("div",{className:"card",children:p.jsxs("div",{className:"stack",children:[p.jsx("div",{className:"label",children:"Add mute"}),p.jsxs("div",{className:"row",style:{gap:12},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{className:"label",children:"Player UID"}),p.jsx("input",{className:"input",value:c,onChange:w=>d(w.target.value),placeholder:"BI Identity ID"})]}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{className:"label",children:"Name (optional)"}),p.jsx("input",{className:"input",value:f,onChange:w=>h(w.target.value),placeholder:"Name"})]})]}),p.jsxs("div",{className:"row",style:{gap:12},children:[p.jsxs("div",{style:{flex:2},children:[p.jsx("div",{className:"label",children:"Reason"}),p.jsx("input",{className:"input",value:v,onChange:w=>x(w.target.value),placeholder:"Mute reason"})]}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{className:"label",children:"Duration"}),p.jsx("select",{className:"input",value:_,onChange:w=>m(Number(w.target.value)),children:kC.map(w=>p.jsx("option",{value:w.value,children:w.label},w.value))})]})]}),p.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:p.jsx("button",{className:"button buttonPrimary",disabled:s||!t||!c.trim(),onClick:y,children:"Mute player"})})]})}),i?p.jsx("div",{className:"error",children:i}):null,p.jsxs("div",{className:"row",style:{gap:12},children:[p.jsx("div",{style:{flex:1},children:p.jsx("input",{className:"input",placeholder:"Search mutes...",value:o,onChange:w=>l(w.target.value)})}),p.jsx("button",{className:"button",onClick:u,disabled:s||!t,children:"Refresh"})]}),p.jsxs("div",{className:"label",children:[g.length," mute",g.length!==1?"s":""]}),p.jsx("div",{className:"listContainer",children:p.jsx("div",{className:"scroll",style:{maxHeight:400,overflow:"auto"},children:g.length===0?p.jsx("div",{className:"muted",style:{padding:20,fontSize:12,textAlign:"center"},children:t?"No mutes found.":"Select a server."}):g.map(w=>p.jsx("div",{className:"listRow",children:p.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700},children:w.playerName||w.playerUID}),p.jsxs("div",{className:"muted",style:{fontSize:11},children:["UID: ",w.playerUID]}),p.jsxs("div",{className:"muted",style:{fontSize:11},children:[w.reason," · By: ",w.mutedBy," · ",W0(w.timestamp,w.duration)]})]}),p.jsx("button",{className:"button",style:{fontSize:11,padding:"4px 10px",borderColor:"rgba(183,247,200,0.35)"},disabled:s,onClick:()=>S(w.playerUID,w.playerName),children:"Unmute"})]})},w.playerUID))})})]})}function BC(){const{serverId:t}=qc(),[e,n]=R.useState("bans");return p.jsx("div",{className:"container",children:p.jsxs("div",{className:"stack",children:[p.jsx("h1",{className:"h1",children:"Moderation"}),p.jsxs("div",{className:"tabBar",children:[p.jsx("button",{className:`tab${e==="bans"?" tabActive":""}`,onClick:()=>n("bans"),children:"Bans"}),p.jsx("button",{className:`tab${e==="mutes"?" tabActive":""}`,onClick:()=>n("mutes"),children:"Mutes"})]}),e==="bans"?p.jsx(OC,{serverId:t}):p.jsx(zC,{serverId:t})]})})}const HC=[{label:"All",value:""},{label:"Kills",value:"kill"},{label:"Deaths",value:"death"},{label:"AI Kills",value:"aiKill"},{label:"Joins",value:"join"},{label:"Disconnects",value:"disconnect"}];function Ig(t){const e=t.event??{};switch(t.type){case"kill":{const n=e.killerName??"?",i=e.victimName??"?",r=e.weaponName??"",s=typeof e.distanceM=="number"?` (${Math.round(e.distanceM)}m)`:"";return`${n} killed ${i}${r?` with ${r}`:""}${s}`}case"death":{const n=e.victimName??"?",i=e.killerName??"",r=e.weaponName??"";return i?`${n} killed by ${i}${r?` with ${r}`:""}`:`${n} died`}case"aiKill":{const n=e.killerName??"?",i=e.victimName??"AI",r=e.weaponName??"";return`${n} killed ${i} (AI)${r?` with ${r}`:""}`}case"join":return`${e.name??"?"} joined`;case"disconnect":{const n=e.name??"?",i=e.kickCause??"";return`${n} disconnected${i?` (${i})`:""}`}default:return t.type}}function jC(t){switch(t){case"kill":return"#ffb4b4";case"death":return"#ffd4b4";case"aiKill":return"#d4b4ff";case"join":return"#b7f7c8";case"disconnect":return"rgba(230,237,243,0.5)";default:return"rgba(230,237,243,0.6)"}}function Dg(t){return t>=30?"#b7f7c8":t>=15?"#f9bc59":"#ffb4b4"}function Ug(t,e,n){if(t.length<2)return null;const i=280,r=48,s=Math.max(e,1),a=t.map((o,l)=>{const c=l/(t.length-1)*i,d=r-Math.min(o,s)/s*(r-4)-2;return`${c},${d}`});return p.jsx("svg",{width:i,height:r,style:{display:"block",marginTop:8},children:p.jsx("polyline",{points:a.join(" "),fill:"none",stroke:n,strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round"})})}function GC({serverId:t}){const[e,n]=R.useState([]),[i,r]=R.useState(null),[s,a]=R.useState(!1),[o,l]=R.useState(""),[c,d]=R.useState(""),[f,h]=R.useState(!0),v=R.useCallback(async()=>{if(t){a(!0),r(null);try{n(await o0({serverId:t,types:o||void 0,limit:200}))}catch(_){r(_ instanceof Error?_.message:"Failed to load events")}finally{a(!1)}}},[t,o]);R.useEffect(()=>{if(!t||(v(),!f))return;const _=setInterval(v,1e4);return()=>clearInterval(_)},[t,o,f,v]);const x=R.useMemo(()=>{if(!c.trim())return e;const _=c.toLowerCase();return e.filter(m=>Ig(m).toLowerCase().includes(_))},[e,c]);return p.jsxs("div",{className:"stack",children:[p.jsxs("div",{className:"row",style:{gap:12},children:[p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{className:"label",children:"Type"}),p.jsx("select",{className:"input",value:o,onChange:_=>l(_.target.value),children:HC.map(_=>p.jsx("option",{value:_.value,children:_.label},_.value))})]}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{className:"label",children:"Search"}),p.jsx("input",{className:"input",placeholder:"Filter events...",value:c,onChange:_=>d(_.target.value)})]}),p.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:8},children:[p.jsxs("label",{className:"row",style:{gap:6},children:[p.jsx("input",{type:"checkbox",checked:f,onChange:_=>h(_.target.checked)}),p.jsx("span",{className:"muted",style:{fontSize:12},children:"Auto"})]}),p.jsx("button",{className:"button",onClick:v,disabled:s||!t,children:"Refresh"})]})]}),i?p.jsx("div",{className:"error",children:i}):null,p.jsxs("div",{className:"label",children:[x.length," event",x.length!==1?"s":""]}),p.jsx("div",{className:"listContainer",children:p.jsx("div",{className:"scroll",style:{maxHeight:500,overflow:"auto"},children:x.length===0?p.jsx("div",{className:"muted",style:{padding:20,fontSize:12,textAlign:"center"},children:t?"No events found.":"Select a server."}):x.map((_,m)=>p.jsx("div",{className:"listRow",children:p.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[p.jsxs("div",{className:"row",style:{gap:8},children:[p.jsx("span",{className:"tag",style:{color:jC(_.type),minWidth:60,textAlign:"center"},children:_.type}),p.jsx("span",{style:{fontSize:13},children:Ig(_)})]}),p.jsx("div",{className:"muted",style:{fontSize:11,whiteSpace:"nowrap"},children:new Date(_.receivedAt).toLocaleTimeString()})]})},`${_.tsMs}-${m}`))})})]})}function VC({serverId:t}){const[e,n]=R.useState(null),[i,r]=R.useState(null),[s,a]=R.useState(!1),[o,l]=R.useState(!0),[c,d]=R.useState([]),[f,h]=R.useState([]),[v,x]=R.useState(""),[_,m]=R.useState(""),[u,g]=R.useState(!1),y=R.useCallback(async()=>{if(t){a(!0),r(null);try{const w=await $M(t);n(w),d(C=>[...C.slice(-59),w.fps]),h(C=>[...C.slice(-59),w.playerCount])}catch(w){r(w instanceof Error?w.message:"Failed to get health")}finally{a(!1)}}},[t]);R.useEffect(()=>{if(!t||(d([]),h([]),n(null),y(),!o))return;const w=setInterval(y,15e3);return()=>clearInterval(w)},[t,o,y]);async function S(){if(!(!v.trim()&&!_.trim()||!t)){a(!0),r(null),g(!1);try{await eE({serverId:t,title:_.trim(),message:v.trim()}),x(""),m(""),g(!0),setTimeout(()=>g(!1),3e3)}catch(w){r(w instanceof Error?w.message:"Failed to send message")}finally{a(!1)}}}return p.jsxs("div",{className:"stack",children:[p.jsxs("div",{className:"row",style:{justifyContent:"flex-end",gap:8},children:[p.jsxs("label",{className:"row",style:{gap:6},children:[p.jsx("input",{type:"checkbox",checked:o,onChange:w=>l(w.target.checked)}),p.jsx("span",{className:"muted",style:{fontSize:12},children:"Auto-refresh (15s)"})]}),p.jsx("button",{className:"button",onClick:y,disabled:s||!t,children:"Refresh"})]}),i?p.jsx("div",{className:"error",children:i}):null,e?p.jsxs("div",{className:"statsGrid",children:[p.jsxs("div",{className:"card statCard",children:[p.jsx("div",{className:"label",children:"Server FPS"}),p.jsx("div",{className:"statValue",style:{color:Dg(e.fps)},children:e.fps.toFixed(1)}),Ug(c,60,Dg(e.fps))]}),p.jsxs("div",{className:"card statCard",children:[p.jsx("div",{className:"label",children:"Players Online"}),p.jsx("div",{className:"statValue",children:e.playerCount}),Ug(f,Math.max(64,...f),"var(--rz-accent)")]})]}):t?p.jsx("div",{className:"muted",children:"Loading health data..."}):null,p.jsx("div",{className:"card",children:p.jsxs("div",{className:"stack",children:[p.jsxs("div",{children:[p.jsx("div",{className:"label",children:"Global Announcement"}),p.jsx("div",{className:"muted",style:{fontSize:12},children:"Broadcast to all players (appears on left side of screen)."})]}),p.jsx("div",{className:"row",style:{gap:12},children:p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{className:"label",children:"Title"}),p.jsx("input",{className:"input",value:_,onChange:w=>m(w.target.value),placeholder:"Announcement"})]})}),p.jsxs("div",{className:"row",children:[p.jsx("input",{className:"input",style:{flex:1},value:v,onChange:w=>x(w.target.value),placeholder:"Server restarting in 5 minutes...",onKeyDown:w=>{w.key==="Enter"&&S()}}),p.jsx("button",{className:"button buttonPrimary",disabled:s||!t||!v.trim()&&!_.trim(),onClick:S,children:"Send"})]}),u?p.jsx("div",{className:"success",style:{fontSize:12},children:"Message sent!"}):null]})})]})}function WC(){const{serverId:t}=qc(),[e,n]=R.useState("events");return p.jsx("div",{className:"container",children:p.jsxs("div",{className:"stack",children:[p.jsx("h1",{className:"h1",children:"Server"}),p.jsxs("div",{className:"tabBar",children:[p.jsx("button",{className:`tab${e==="events"?" tabActive":""}`,onClick:()=>n("events"),children:"Event Log"}),p.jsx("button",{className:`tab${e==="health"?" tabActive":""}`,onClick:()=>n("health"),children:"Health & Messages"})]}),e==="events"?p.jsx(GC,{serverId:t}):p.jsx(VC,{serverId:t})]})})}function $r(t){return p.jsx(bM,{to:t.to,className:({isActive:e})=>`navItem${e?" navItemActive":""}`,children:t.label})}function dd(t){return p.jsxs("div",{style:{marginTop:4},children:[p.jsx("div",{className:"sidebarSection",children:t.label}),p.jsx("div",{className:"stack",style:{gap:4},children:t.children})]})}function $C(){const{servers:t,serverId:e,setServerId:n}=qc();return p.jsxs("div",{style:{padding:"0 4px"},children:[p.jsx("div",{className:"label",children:"Server"}),p.jsxs("select",{className:"input",style:{fontSize:12,padding:"6px 8px"},value:e,onChange:i=>n(i.target.value),children:[p.jsx("option",{value:"",children:"Select server..."}),t.map(i=>p.jsx("option",{value:i.id,children:i.name},i.id))]})]})}function XC(){const t=Gc();function e(){NM(),t("/login",{replace:!0})}const n=mi("players")||mi("playerLookup"),i=mi("bans")||mi("mutes"),r=mi("events")||mi("health"),s=n||i||r;return p.jsxs("div",{className:"appShell",children:[p.jsxs("aside",{className:"sidebar",children:[p.jsxs("div",{className:"stack",style:{gap:4},children:[p.jsxs("div",{style:{padding:"4px 0 12px"},children:[p.jsx("div",{className:"label",children:"ReforgedZ"}),p.jsx("div",{className:"h2",children:"Admin Panel"})]}),p.jsx($C,{}),p.jsx($r,{to:"/",label:"Home"}),mi("replay")?p.jsx(dd,{label:"Replay",children:p.jsx($r,{to:"/replay",label:"Replay Tool"})}):null,s?p.jsxs(dd,{label:"Admin",children:[n?p.jsx($r,{to:"/players",label:"Players"}):null,i?p.jsx($r,{to:"/moderation",label:"Moderation"}):null,r?p.jsx($r,{to:"/server",label:"Server"}):null]}):null,mi("admin")||mi("dev")?p.jsxs(dd,{label:"Management",children:[mi("admin")?p.jsx($r,{to:"/admin",label:"Admin Management"}):null,mi("dev")?p.jsx($r,{to:"/dev",label:"Dev"}):null]}):null]}),p.jsx("div",{style:{flex:1}}),p.jsx("button",{className:"button buttonPrimary",onClick:e,children:"Log out"})]}),p.jsx("main",{className:"main",children:p.jsx(fM,{})})]})}function YC(){return p.jsx(LC,{children:p.jsx(XC,{})})}function qC(t){const e=sr();return Pt()?p.jsx(p.Fragment,{children:t.children}):p.jsx(r0,{to:"/login",replace:!0,state:{from:e.pathname}})}function KC(){return p.jsxs(pM,{children:[p.jsx(_i,{path:"/login",element:p.jsx(iE,{})}),p.jsxs(_i,{element:p.jsx(qC,{children:p.jsx(YC,{})}),children:[p.jsx(_i,{path:"/",element:p.jsx(CC,{})}),p.jsx(_i,{path:"/replay",element:p.jsx(bC,{})}),p.jsx(_i,{path:"/players",element:p.jsx(UC,{})}),p.jsx(_i,{path:"/moderation",element:p.jsx(BC,{})}),p.jsx(_i,{path:"/server",element:p.jsx(WC,{})}),p.jsx(_i,{path:"/admin",element:p.jsx(PC,{})}),p.jsx(_i,{path:"/dev",element:p.jsx(NC,{})})]}),p.jsx(_i,{path:"*",element:p.jsx(r0,{to:"/",replace:!0})})]})}fd.createRoot(document.getElementById("root")).render(p.jsx($g.StrictMode,{children:p.jsx(MM,{children:p.jsx(KC,{})})}));
