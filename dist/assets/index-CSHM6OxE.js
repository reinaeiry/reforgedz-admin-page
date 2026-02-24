function x_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function S_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dg={exports:{}},ic={},hg={exports:{}},nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),M_=Symbol.for("react.portal"),E_=Symbol.for("react.fragment"),w_=Symbol.for("react.strict_mode"),T_=Symbol.for("react.profiler"),A_=Symbol.for("react.provider"),b_=Symbol.for("react.context"),C_=Symbol.for("react.forward_ref"),R_=Symbol.for("react.suspense"),P_=Symbol.for("react.memo"),L_=Symbol.for("react.lazy"),fh=Symbol.iterator;function N_(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var pg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mg=Object.assign,gg={};function to(t,e,n){this.props=t,this.context=e,this.refs=gg,this.updater=n||pg}to.prototype.isReactComponent={};to.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};to.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vg(){}vg.prototype=to.prototype;function rd(t,e,n){this.props=t,this.context=e,this.refs=gg,this.updater=n||pg}var sd=rd.prototype=new vg;sd.constructor=rd;mg(sd,to.prototype);sd.isPureReactComponent=!0;var dh=Array.isArray,_g=Object.prototype.hasOwnProperty,od={current:null},yg={key:!0,ref:!0,__self:!0,__source:!0};function xg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_g.call(e,i)&&!yg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:oa,type:t,key:s,ref:o,props:r,_owner:od.current}}function I_(t,e){return{$$typeof:oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===oa}function D_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hh=/\/+/g;function Pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?D_(""+t.key):e.toString(36)}function ll(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case oa:case M_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Pc(o,0):i,dh(r)?(n="",t!=null&&(n=t.replace(hh,"$&/")+"/"),ll(r,e,n,"",function(c){return c})):r!=null&&(ad(r)&&(r=I_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(hh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",dh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Pc(s,a);o+=ll(s,e,n,l,r)}else if(l=N_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Pc(s,a++),o+=ll(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pa(t,e,n){if(t==null)return t;var i=[],r=0;return ll(t,i,"","",function(s){return e.call(n,s,r++)}),i}function U_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},cl={transition:null},F_={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:cl,ReactCurrentOwner:od};function Sg(){throw Error("act(...) is not supported in production builds of React.")}nt.Children={map:pa,forEach:function(t,e,n){pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pa(t,function(){e++}),e},toArray:function(t){return pa(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};nt.Component=to;nt.Fragment=E_;nt.Profiler=T_;nt.PureComponent=rd;nt.StrictMode=w_;nt.Suspense=R_;nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;nt.act=Sg;nt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=mg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=od.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_g.call(e,l)&&!yg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:oa,type:t.type,key:r,ref:s,props:i,_owner:o}};nt.createContext=function(t){return t={$$typeof:b_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:A_,_context:t},t.Consumer=t};nt.createElement=xg;nt.createFactory=function(t){var e=xg.bind(null,t);return e.type=t,e};nt.createRef=function(){return{current:null}};nt.forwardRef=function(t){return{$$typeof:C_,render:t}};nt.isValidElement=ad;nt.lazy=function(t){return{$$typeof:L_,_payload:{_status:-1,_result:t},_init:U_}};nt.memo=function(t,e){return{$$typeof:P_,type:t,compare:e===void 0?null:e}};nt.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};nt.unstable_act=Sg;nt.useCallback=function(t,e){return pn.current.useCallback(t,e)};nt.useContext=function(t){return pn.current.useContext(t)};nt.useDebugValue=function(){};nt.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};nt.useEffect=function(t,e){return pn.current.useEffect(t,e)};nt.useId=function(){return pn.current.useId()};nt.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};nt.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};nt.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};nt.useMemo=function(t,e){return pn.current.useMemo(t,e)};nt.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};nt.useRef=function(t){return pn.current.useRef(t)};nt.useState=function(t){return pn.current.useState(t)};nt.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};nt.useTransition=function(){return pn.current.useTransition()};nt.version="18.3.1";hg.exports=nt;var F=hg.exports;const Mg=S_(F),O_=x_({__proto__:null,default:Mg},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_=F,z_=Symbol.for("react.element"),B_=Symbol.for("react.fragment"),H_=Object.prototype.hasOwnProperty,G_=k_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V_={key:!0,ref:!0,__self:!0,__source:!0};function Eg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)H_.call(e,i)&&!V_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:z_,type:t,key:s,ref:o,props:r,_owner:G_.current}}ic.Fragment=B_;ic.jsx=Eg;ic.jsxs=Eg;dg.exports=ic;var E=dg.exports,Xu={},wg={exports:{}},Ln={},Tg={exports:{}},Ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,W){var $=B.length;B.push(W);e:for(;0<$;){var ie=$-1>>>1,fe=B[ie];if(0<r(fe,W))B[ie]=W,B[$]=fe,$=ie;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var W=B[0],$=B.pop();if($!==W){B[0]=$;e:for(var ie=0,fe=B.length,Fe=fe>>>1;ie<Fe;){var q=2*(ie+1)-1,se=B[q],_e=q+1,Ce=B[_e];if(0>r(se,$))_e<fe&&0>r(Ce,se)?(B[ie]=Ce,B[_e]=$,ie=_e):(B[ie]=se,B[q]=$,ie=q);else if(_e<fe&&0>r(Ce,$))B[ie]=Ce,B[_e]=$,ie=_e;else break e}}return W}function r(B,W){var $=B.sortIndex-W.sortIndex;return $!==0?$:B.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,m=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(B){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=B)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function M(B){if(y=!1,v(B),!_)if(n(l)!==null)_=!0,K(D);else{var W=n(c);W!==null&&re(M,W.startTime-B)}}function D(B,W){_=!1,y&&(y=!1,u(H),H=-1),m=!0;var $=h;try{for(v(W),d=n(l);d!==null&&(!(d.expirationTime>W)||B&&!I());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,h=d.priorityLevel;var fe=ie(d.expirationTime<=W);W=t.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(l)&&i(l),v(W)}else i(l);d=n(l)}if(d!==null)var Fe=!0;else{var q=n(c);q!==null&&re(M,q.startTime-W),Fe=!1}return Fe}finally{d=null,h=$,m=!1}}var N=!1,P=null,H=-1,ne=5,S=-1;function I(){return!(t.unstable_now()-S<ne)}function ee(){if(P!==null){var B=t.unstable_now();S=B;var W=!0;try{W=P(!0,B)}finally{W?oe():(N=!1,P=null)}}else N=!1}var oe;if(typeof g=="function")oe=function(){g(ee)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,Q=O.port2;O.port1.onmessage=ee,oe=function(){Q.postMessage(null)}}else oe=function(){p(ee,0)};function K(B){P=B,N||(N=!0,oe())}function re(B,W){H=p(function(){B(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,K(D))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var $=h;h=W;try{return B()}finally{h=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=h;h=B;try{return W()}finally{h=$}},t.unstable_scheduleCallback=function(B,W,$){var ie=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ie+$:ie):$=ie,B){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=$+fe,B={id:f++,callback:W,priorityLevel:B,startTime:$,expirationTime:fe,sortIndex:-1},$>ie?(B.sortIndex=$,e(c,B),n(l)===null&&B===n(c)&&(y?(u(H),H=-1):y=!0,re(M,$-ie))):(B.sortIndex=fe,e(l,B),_||m||(_=!0,K(D))),B},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(B){var W=h;return function(){var $=h;h=W;try{return B.apply(this,arguments)}finally{h=$}}}})(Ag);Tg.exports=Ag;var W_=Tg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_=F,Pn=W_;function ge(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bg=new Set,Bo={};function Kr(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(Bo[t]=e,t=0;t<e.length;t++)bg.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=Object.prototype.hasOwnProperty,X_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ph={},mh={};function $_(t){return $u.call(mh,t)?!0:$u.call(ph,t)?!1:X_.test(t)?mh[t]=!0:(ph[t]=!0,!1)}function Y_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function q_(t,e,n,i){if(e===null||typeof e>"u"||Y_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ld=/[\-:]([a-z])/g;function cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ld,cd);qt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ld,cd);qt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ld,cd);qt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ud(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(q_(e,n,r,i)&&(n=null),i||r===null?$_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),Yu=Symbol.for("react.profiler"),Cg=Symbol.for("react.provider"),Rg=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),Ku=Symbol.for("react.suspense_list"),hd=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),Pg=Symbol.for("react.offscreen"),gh=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=gh&&t[gh]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Lc;function bo(t){if(Lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lc=e&&e[1]||""}return`
`+Lc+t}var Nc=!1;function Ic(t,e){if(!t||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function K_(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=Ic(t.type,!1),t;case 11:return t=Ic(t.type.render,!1),t;case 1:return t=Ic(t.type,!0),t;default:return""}}function Zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case xs:return"Portal";case Yu:return"Profiler";case fd:return"StrictMode";case qu:return"Suspense";case Ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rg:return(t.displayName||"Context")+".Consumer";case Cg:return(t._context.displayName||"Context")+".Provider";case dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hd:return e=t.displayName||null,e!==null?e:Zu(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return Zu(t(e))}catch{}}return null}function Z_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zu(e);case 8:return e===fd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q_(t){var e=Lg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ga(t){t._valueTracker||(t._valueTracker=Q_(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Lg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qu(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ig(t,e){e=e.checked,e!=null&&ud(t,"checked",e,!1)}function Ju(t,e){Ig(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ef(t,e.type,n):e.hasOwnProperty("defaultValue")&&ef(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _h(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ef(t,e,n){(e!=="number"||Ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Co=Array.isArray;function Ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function tf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ge(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ge(92));if(Co(n)){if(1<n.length)throw Error(ge(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function Dg(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ug(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ug(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var va,Fg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J_=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(t){J_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Lo[e]=Lo[t]})});function Og(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Lo.hasOwnProperty(t)&&Lo[t]?(""+e).trim():e+"px"}function kg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Og(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ey=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rf(t,e){if(e){if(ey[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ge(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ge(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ge(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ge(62))}}function sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=null;function pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var af=null,Us=null,Fs=null;function Sh(t){if(t=ca(t)){if(typeof af!="function")throw Error(ge(280));var e=t.stateNode;e&&(e=lc(e),af(t.stateNode,t.type,e))}}function zg(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function Bg(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,Sh(t),e)for(t=0;t<e.length;t++)Sh(e[t])}}function Hg(t,e){return t(e)}function Gg(){}var Dc=!1;function Vg(t,e,n){if(Dc)return t(e,n);Dc=!0;try{return Hg(t,e,n)}finally{Dc=!1,(Us!==null||Fs!==null)&&(Gg(),Bg())}}function Go(t,e){var n=t.stateNode;if(n===null)return null;var i=lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ge(231,e,typeof n));return n}var lf=!1;if(Ri)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){lf=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{lf=!1}function ty(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var No=!1,El=null,wl=!1,cf=null,ny={onError:function(t){No=!0,El=t}};function iy(t,e,n,i,r,s,o,a,l){No=!1,El=null,ty.apply(ny,arguments)}function ry(t,e,n,i,r,s,o,a,l){if(iy.apply(this,arguments),No){if(No){var c=El;No=!1,El=null}else throw Error(ge(198));wl||(wl=!0,cf=c)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mh(t){if(Zr(t)!==t)throw Error(ge(188))}function sy(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(ge(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Mh(r),t;if(s===i)return Mh(r),e;s=s.sibling}throw Error(ge(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ge(189))}}if(n.alternate!==i)throw Error(ge(190))}if(n.tag!==3)throw Error(ge(188));return n.stateNode.current===n?t:e}function jg(t){return t=sy(t),t!==null?Xg(t):null}function Xg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xg(t);if(e!==null)return e;t=t.sibling}return null}var $g=Pn.unstable_scheduleCallback,Eh=Pn.unstable_cancelCallback,oy=Pn.unstable_shouldYield,ay=Pn.unstable_requestPaint,Ct=Pn.unstable_now,ly=Pn.unstable_getCurrentPriorityLevel,md=Pn.unstable_ImmediatePriority,Yg=Pn.unstable_UserBlockingPriority,Tl=Pn.unstable_NormalPriority,cy=Pn.unstable_LowPriority,qg=Pn.unstable_IdlePriority,rc=null,di=null;function uy(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(rc,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:hy,fy=Math.log,dy=Math.LN2;function hy(t){return t>>>=0,t===0?32:31-(fy(t)/dy|0)|0}var _a=64,ya=4194304;function Ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ro(a):(s&=o,s!==0&&(i=Ro(s)))}else o=n&~r,o!==0?i=Ro(o):s!==0&&(i=Ro(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function py(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function my(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ii(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=py(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function uf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kg(){var t=_a;return _a<<=1,!(_a&4194240)&&(_a=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function gy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ft=0;function Zg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qg,vd,Jg,ev,tv,ff=!1,xa=[],tr=null,nr=null,ir=null,Vo=new Map,Wo=new Map,qi=[],vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function fo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ca(e),e!==null&&vd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function _y(t,e,n,i,r){switch(e){case"focusin":return tr=fo(tr,t,e,n,i,r),!0;case"dragenter":return nr=fo(nr,t,e,n,i,r),!0;case"mouseover":return ir=fo(ir,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Vo.set(s,fo(Vo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wo.set(s,fo(Wo.get(s)||null,t,e,n,i,r)),!0}return!1}function nv(t){var e=Ir(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Wg(n),e!==null){t.blockedOn=e,tv(t.priority,function(){Jg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);of=i,n.target.dispatchEvent(i),of=null}else return e=ca(n),e!==null&&vd(e),t.blockedOn=n,!1;e.shift()}return!0}function Th(t,e,n){ul(t)&&n.delete(e)}function yy(){ff=!1,tr!==null&&ul(tr)&&(tr=null),nr!==null&&ul(nr)&&(nr=null),ir!==null&&ul(ir)&&(ir=null),Vo.forEach(Th),Wo.forEach(Th)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,ff||(ff=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,yy)))}function jo(t){function e(r){return ho(r,t)}if(0<xa.length){ho(xa[0],t);for(var n=1;n<xa.length;n++){var i=xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&ho(tr,t),nr!==null&&ho(nr,t),ir!==null&&ho(ir,t),Vo.forEach(e),Wo.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)nv(n),n.blockedOn===null&&qi.shift()}var Os=Di.ReactCurrentBatchConfig,bl=!0;function xy(t,e,n,i){var r=ft,s=Os.transition;Os.transition=null;try{ft=1,_d(t,e,n,i)}finally{ft=r,Os.transition=s}}function Sy(t,e,n,i){var r=ft,s=Os.transition;Os.transition=null;try{ft=4,_d(t,e,n,i)}finally{ft=r,Os.transition=s}}function _d(t,e,n,i){if(bl){var r=df(t,e,n,i);if(r===null)jc(t,e,i,Cl,n),wh(t,i);else if(_y(r,t,e,n,i))i.stopPropagation();else if(wh(t,i),e&4&&-1<vy.indexOf(t)){for(;r!==null;){var s=ca(r);if(s!==null&&Qg(s),s=df(t,e,n,i),s===null&&jc(t,e,i,Cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else jc(t,e,i,null,n)}}var Cl=null;function df(t,e,n,i){if(Cl=null,t=pd(i),t=Ir(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cl=t,null}function iv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ly()){case md:return 1;case Yg:return 4;case Tl:case cy:return 16;case qg:return 536870912;default:return 16}default:return 16}}var Zi=null,yd=null,fl=null;function rv(){if(fl)return fl;var t,e=yd,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fl=r.slice(t,1<i?1-i:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sa(){return!0}function Ah(){return!1}function Nn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sa:Ah,this.isPropagationStopped=Ah,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),e}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xd=Nn(no),la=Tt({},no,{view:0,detail:0}),My=Nn(la),Fc,Oc,po,sc=Tt({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Fc=t.screenX-po.screenX,Oc=t.screenY-po.screenY):Oc=Fc=0,po=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),bh=Nn(sc),Ey=Tt({},sc,{dataTransfer:0}),wy=Nn(Ey),Ty=Tt({},la,{relatedTarget:0}),kc=Nn(Ty),Ay=Tt({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),by=Nn(Ay),Cy=Tt({},no,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ry=Nn(Cy),Py=Tt({},no,{data:0}),Ch=Nn(Py),Ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Iy[t])?!!e[t]:!1}function Sd(){return Dy}var Uy=Tt({},la,{key:function(t){if(t.key){var e=Ly[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ny[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fy=Nn(Uy),Oy=Tt({},sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=Nn(Oy),ky=Tt({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),zy=Nn(ky),By=Tt({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hy=Nn(By),Gy=Tt({},sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vy=Nn(Gy),Wy=[9,13,27,32],Md=Ri&&"CompositionEvent"in window,Io=null;Ri&&"documentMode"in document&&(Io=document.documentMode);var jy=Ri&&"TextEvent"in window&&!Io,sv=Ri&&(!Md||Io&&8<Io&&11>=Io),Ph=" ",Lh=!1;function ov(t,e){switch(t){case"keyup":return Wy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function Xy(t,e){switch(t){case"compositionend":return av(e);case"keypress":return e.which!==32?null:(Lh=!0,Ph);case"textInput":return t=e.data,t===Ph&&Lh?null:t;default:return null}}function $y(t,e){if(Ms)return t==="compositionend"||!Md&&ov(t,e)?(t=rv(),fl=yd=Zi=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sv&&e.locale!=="ko"?null:e.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yy[t.type]:e==="textarea"}function lv(t,e,n,i){zg(i),e=Rl(e,"onChange"),0<e.length&&(n=new xd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Do=null,Xo=null;function qy(t){yv(t,0)}function oc(t){var e=Ts(t);if(Ng(e))return t}function Ky(t,e){if(t==="change")return e}var cv=!1;if(Ri){var zc;if(Ri){var Bc="oninput"in document;if(!Bc){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),Bc=typeof Ih.oninput=="function"}zc=Bc}else zc=!1;cv=zc&&(!document.documentMode||9<document.documentMode)}function Dh(){Do&&(Do.detachEvent("onpropertychange",uv),Xo=Do=null)}function uv(t){if(t.propertyName==="value"&&oc(Xo)){var e=[];lv(e,Xo,t,pd(t)),Vg(qy,e)}}function Zy(t,e,n){t==="focusin"?(Dh(),Do=e,Xo=n,Do.attachEvent("onpropertychange",uv)):t==="focusout"&&Dh()}function Qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(Xo)}function Jy(t,e){if(t==="click")return oc(e)}function ex(t,e){if(t==="input"||t==="change")return oc(e)}function tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var si=typeof Object.is=="function"?Object.is:tx;function $o(t,e){if(si(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!$u.call(e,r)||!si(t[r],e[r]))return!1}return!0}function Uh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fh(t,e){var n=Uh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uh(n)}}function fv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dv(){for(var t=window,e=Ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ml(t.document)}return e}function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nx(t){var e=dv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fv(n.ownerDocument.documentElement,n)){if(i!==null&&Ed(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Fh(n,s);var o=Fh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ix=Ri&&"documentMode"in document&&11>=document.documentMode,Es=null,hf=null,Uo=null,pf=!1;function Oh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pf||Es==null||Es!==Ml(i)||(i=Es,"selectionStart"in i&&Ed(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Uo&&$o(Uo,i)||(Uo=i,i=Rl(hf,"onSelect"),0<i.length&&(e=new xd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Es)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Hc={},hv={};Ri&&(hv=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function ac(t){if(Hc[t])return Hc[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hv)return Hc[t]=e[n];return t}var pv=ac("animationend"),mv=ac("animationiteration"),gv=ac("animationstart"),vv=ac("transitionend"),_v=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){_v.set(t,e),Kr(e,[t])}for(var Gc=0;Gc<kh.length;Gc++){var Vc=kh[Gc],rx=Vc.toLowerCase(),sx=Vc[0].toUpperCase()+Vc.slice(1);_r(rx,"on"+sx)}_r(pv,"onAnimationEnd");_r(mv,"onAnimationIteration");_r(gv,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(vv,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function zh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ry(i,e,void 0,t),t.currentTarget=null}function yv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;zh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;zh(r,a,c),s=l}}}if(wl)throw t=cf,wl=!1,cf=null,t}function gt(t,e){var n=e[yf];n===void 0&&(n=e[yf]=new Set);var i=t+"__bubble";n.has(i)||(xv(e,t,2,!1),n.add(i))}function Wc(t,e,n){var i=0;e&&(i|=4),xv(n,t,i,e)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Yo(t){if(!t[Ea]){t[Ea]=!0,bg.forEach(function(n){n!=="selectionchange"&&(ox.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ea]||(e[Ea]=!0,Wc("selectionchange",!1,e))}}function xv(t,e,n,i){switch(iv(e)){case 1:var r=xy;break;case 4:r=Sy;break;default:r=_d}n=r.bind(null,e,n,t),r=void 0,!lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function jc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Vg(function(){var c=s,f=pd(n),d=[];e:{var h=_v.get(t);if(h!==void 0){var m=xd,_=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":m=Fy;break;case"focusin":_="focus",m=kc;break;case"focusout":_="blur",m=kc;break;case"beforeblur":case"afterblur":m=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=zy;break;case pv:case mv:case gv:m=by;break;case vv:m=Hy;break;case"scroll":m=My;break;case"wheel":m=Vy;break;case"copy":case"cut":case"paste":m=Ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Rh}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=Go(g,u),M!=null&&y.push(qo(g,M,v)))),p)break;g=g.return}0<y.length&&(h=new m(h,_,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==of&&(_=n.relatedTarget||n.fromElement)&&(Ir(_)||_[Pi]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Ir(_):null,_!==null&&(p=Zr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=bh,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Rh,M="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?h:Ts(m),v=_==null?h:Ts(_),h=new y(M,g+"leave",m,n,f),h.target=p,h.relatedTarget=v,M=null,Ir(f)===c&&(y=new y(u,g+"enter",_,n,f),y.target=v,y.relatedTarget=p,M=y),p=M,m&&_)t:{for(y=m,u=_,g=0,v=y;v;v=Jr(v))g++;for(v=0,M=u;M;M=Jr(M))v++;for(;0<g-v;)y=Jr(y),g--;for(;0<v-g;)u=Jr(u),v--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Jr(y),u=Jr(u)}y=null}else y=null;m!==null&&Bh(d,h,m,y,!1),_!==null&&p!==null&&Bh(d,p,_,y,!0)}}e:{if(h=c?Ts(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var D=Ky;else if(Nh(h))if(cv)D=ex;else{D=Qy;var N=Zy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(D=Jy);if(D&&(D=D(t,c))){lv(d,D,n,f);break e}N&&N(t,h,c),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&ef(h,"number",h.value)}switch(N=c?Ts(c):window,t){case"focusin":(Nh(N)||N.contentEditable==="true")&&(Es=N,hf=c,Uo=null);break;case"focusout":Uo=hf=Es=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,Oh(d,n,f);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":Oh(d,n,f)}var P;if(Md)e:{switch(t){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else Ms?ov(t,n)&&(H="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(sv&&n.locale!=="ko"&&(Ms||H!=="onCompositionStart"?H==="onCompositionEnd"&&Ms&&(P=rv()):(Zi=f,yd="value"in Zi?Zi.value:Zi.textContent,Ms=!0)),N=Rl(c,H),0<N.length&&(H=new Ch(H,t,null,n,f),d.push({event:H,listeners:N}),P?H.data=P:(P=av(n),P!==null&&(H.data=P)))),(P=jy?Xy(t,n):$y(t,n))&&(c=Rl(c,"onBeforeInput"),0<c.length&&(f=new Ch("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=P))}yv(d,e)})}function qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Go(t,n),s!=null&&i.unshift(qo(t,s,r)),s=Go(t,e),s!=null&&i.push(qo(t,s,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Go(n,s),l!=null&&o.unshift(qo(n,l,a))):r||(l=Go(n,s),l!=null&&o.push(qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ax=/\r\n?/g,lx=/\u0000|\uFFFD/g;function Hh(t){return(typeof t=="string"?t:""+t).replace(ax,`
`).replace(lx,"")}function wa(t,e,n){if(e=Hh(e),Hh(t)!==e&&n)throw Error(ge(425))}function Pl(){}var mf=null,gf=null;function vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,Gh=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Gh<"u"?function(t){return Gh.resolve(null).then(t).catch(fx)}:_f;function fx(t){setTimeout(function(){throw t})}function Xc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);jo(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var io=Math.random().toString(36).slice(2),ui="__reactFiber$"+io,Ko="__reactProps$"+io,Pi="__reactContainer$"+io,yf="__reactEvents$"+io,dx="__reactListeners$"+io,hx="__reactHandles$"+io;function Ir(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vh(t);t!==null;){if(n=t[ui])return n;t=Vh(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[ui]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ge(33))}function lc(t){return t[Ko]||null}var xf=[],As=-1;function yr(t){return{current:t}}function _t(t){0>As||(t.current=xf[As],xf[As]=null,As--)}function pt(t,e){As++,xf[As]=t.current,t.current=e}var mr={},on=yr(mr),xn=yr(!1),Vr=mr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Ll(){_t(xn),_t(on)}function Wh(t,e,n){if(on.current!==mr)throw Error(ge(168));pt(on,e),pt(xn,n)}function Sv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ge(108,Z_(t)||"Unknown",r));return Tt({},n,i)}function Nl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Vr=on.current,pt(on,t),pt(xn,xn.current),!0}function jh(t,e,n){var i=t.stateNode;if(!i)throw Error(ge(169));n?(t=Sv(t,e,Vr),i.__reactInternalMemoizedMergedChildContext=t,_t(xn),_t(on),pt(on,t)):_t(xn),pt(xn,n)}var Si=null,cc=!1,$c=!1;function Mv(t){Si===null?Si=[t]:Si.push(t)}function px(t){cc=!0,Mv(t)}function xr(){if(!$c&&Si!==null){$c=!0;var t=0,e=ft;try{var n=Si;for(ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,cc=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),$g(md,xr),r}finally{ft=e,$c=!1}}return null}var bs=[],Cs=0,Il=null,Dl=0,Fn=[],On=0,Wr=null,Ti=1,Ai="";function br(t,e){bs[Cs++]=Dl,bs[Cs++]=Il,Il=t,Dl=e}function Ev(t,e,n){Fn[On++]=Ti,Fn[On++]=Ai,Fn[On++]=Wr,Wr=t;var i=Ti;t=Ai;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var s=32-ii(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ti=1<<32-ii(e)+r|n<<r|i,Ai=s+t}else Ti=1<<s|n<<r|i,Ai=t}function wd(t){t.return!==null&&(br(t,1),Ev(t,1,0))}function Td(t){for(;t===Il;)Il=bs[--Cs],bs[Cs]=null,Dl=bs[--Cs],bs[Cs]=null;for(;t===Wr;)Wr=Fn[--On],Fn[On]=null,Ai=Fn[--On],Fn[On]=null,Ti=Fn[--On],Fn[On]=null}var Rn=null,Cn=null,xt=!1,Jn=null;function wv(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:Ti,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Cn=null,!0):!1;default:return!1}}function Sf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mf(t){if(xt){var e=Cn;if(e){var n=e;if(!Xh(t,e)){if(Sf(t))throw Error(ge(418));e=rr(n.nextSibling);var i=Rn;e&&Xh(t,e)?wv(i,n):(t.flags=t.flags&-4097|2,xt=!1,Rn=t)}}else{if(Sf(t))throw Error(ge(418));t.flags=t.flags&-4097|2,xt=!1,Rn=t}}}function $h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Ta(t){if(t!==Rn)return!1;if(!xt)return $h(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vf(t.type,t.memoizedProps)),e&&(e=Cn)){if(Sf(t))throw Tv(),Error(ge(418));for(;e;)wv(t,e),e=rr(e.nextSibling)}if($h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ge(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Rn?rr(t.stateNode.nextSibling):null;return!0}function Tv(){for(var t=Cn;t;)t=rr(t.nextSibling)}function Ws(){Cn=Rn=null,xt=!1}function Ad(t){Jn===null?Jn=[t]:Jn.push(t)}var mx=Di.ReactCurrentBatchConfig;function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ge(309));var i=n.stateNode}if(!i)throw Error(ge(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ge(284));if(!n._owner)throw Error(ge(290,t))}return t}function Aa(t,e){throw t=Object.prototype.toString.call(e),Error(ge(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yh(t){var e=t._init;return e(t._payload)}function Av(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=lr(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,M){return g===null||g.tag!==6?(g=eu(v,u.mode,M),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,M){var D=v.type;return D===Ss?f(u,g,v.props.children,M,v.key):g!==null&&(g.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===$i&&Yh(D)===g.type)?(M=r(g,v.props),M.ref=mo(u,g,v),M.return=u,M):(M=yl(v.type,v.key,v.props,null,u.mode,M),M.ref=mo(u,g,v),M.return=u,M)}function c(u,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=tu(v,u.mode,M),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function f(u,g,v,M,D){return g===null||g.tag!==7?(g=kr(v,u.mode,M,D),g.return=u,g):(g=r(g,v),g.return=u,g)}function d(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=eu(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ma:return v=yl(g.type,g.key,g.props,null,u.mode,v),v.ref=mo(u,null,g),v.return=u,v;case xs:return g=tu(g,u.mode,v),g.return=u,g;case $i:var M=g._init;return d(u,M(g._payload),v)}if(Co(g)||co(g))return g=kr(g,u.mode,v,null),g.return=u,g;Aa(u,g)}return null}function h(u,g,v,M){var D=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return D!==null?null:a(u,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ma:return v.key===D?l(u,g,v,M):null;case xs:return v.key===D?c(u,g,v,M):null;case $i:return D=v._init,h(u,g,D(v._payload),M)}if(Co(v)||co(v))return D!==null?null:f(u,g,v,M,null);Aa(u,v)}return null}function m(u,g,v,M,D){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,a(g,u,""+M,D);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ma:return u=u.get(M.key===null?v:M.key)||null,l(g,u,M,D);case xs:return u=u.get(M.key===null?v:M.key)||null,c(g,u,M,D);case $i:var N=M._init;return m(u,g,v,N(M._payload),D)}if(Co(M)||co(M))return u=u.get(v)||null,f(g,u,M,D,null);Aa(g,M)}return null}function _(u,g,v,M){for(var D=null,N=null,P=g,H=g=0,ne=null;P!==null&&H<v.length;H++){P.index>H?(ne=P,P=null):ne=P.sibling;var S=h(u,P,v[H],M);if(S===null){P===null&&(P=ne);break}t&&P&&S.alternate===null&&e(u,P),g=s(S,g,H),N===null?D=S:N.sibling=S,N=S,P=ne}if(H===v.length)return n(u,P),xt&&br(u,H),D;if(P===null){for(;H<v.length;H++)P=d(u,v[H],M),P!==null&&(g=s(P,g,H),N===null?D=P:N.sibling=P,N=P);return xt&&br(u,H),D}for(P=i(u,P);H<v.length;H++)ne=m(P,u,H,v[H],M),ne!==null&&(t&&ne.alternate!==null&&P.delete(ne.key===null?H:ne.key),g=s(ne,g,H),N===null?D=ne:N.sibling=ne,N=ne);return t&&P.forEach(function(I){return e(u,I)}),xt&&br(u,H),D}function y(u,g,v,M){var D=co(v);if(typeof D!="function")throw Error(ge(150));if(v=D.call(v),v==null)throw Error(ge(151));for(var N=D=null,P=g,H=g=0,ne=null,S=v.next();P!==null&&!S.done;H++,S=v.next()){P.index>H?(ne=P,P=null):ne=P.sibling;var I=h(u,P,S.value,M);if(I===null){P===null&&(P=ne);break}t&&P&&I.alternate===null&&e(u,P),g=s(I,g,H),N===null?D=I:N.sibling=I,N=I,P=ne}if(S.done)return n(u,P),xt&&br(u,H),D;if(P===null){for(;!S.done;H++,S=v.next())S=d(u,S.value,M),S!==null&&(g=s(S,g,H),N===null?D=S:N.sibling=S,N=S);return xt&&br(u,H),D}for(P=i(u,P);!S.done;H++,S=v.next())S=m(P,u,H,S.value,M),S!==null&&(t&&S.alternate!==null&&P.delete(S.key===null?H:S.key),g=s(S,g,H),N===null?D=S:N.sibling=S,N=S);return t&&P.forEach(function(ee){return e(u,ee)}),xt&&br(u,H),D}function p(u,g,v,M){if(typeof v=="object"&&v!==null&&v.type===Ss&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ma:e:{for(var D=v.key,N=g;N!==null;){if(N.key===D){if(D=v.type,D===Ss){if(N.tag===7){n(u,N.sibling),g=r(N,v.props.children),g.return=u,u=g;break e}}else if(N.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===$i&&Yh(D)===N.type){n(u,N.sibling),g=r(N,v.props),g.ref=mo(u,N,v),g.return=u,u=g;break e}n(u,N);break}else e(u,N);N=N.sibling}v.type===Ss?(g=kr(v.props.children,u.mode,M,v.key),g.return=u,u=g):(M=yl(v.type,v.key,v.props,null,u.mode,M),M.ref=mo(u,g,v),M.return=u,u=M)}return o(u);case xs:e:{for(N=v.key;g!==null;){if(g.key===N)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=tu(v,u.mode,M),g.return=u,u=g}return o(u);case $i:return N=v._init,p(u,g,N(v._payload),M)}if(Co(v))return _(u,g,v,M);if(co(v))return y(u,g,v,M);Aa(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=eu(v,u.mode,M),g.return=u,u=g),o(u)):n(u,g)}return p}var js=Av(!0),bv=Av(!1),Ul=yr(null),Fl=null,Rs=null,bd=null;function Cd(){bd=Rs=Fl=null}function Rd(t){var e=Ul.current;_t(Ul),t._currentValue=e}function Ef(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ks(t,e){Fl=t,bd=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(bd!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(Fl===null)throw Error(ge(308));Rs=t,Fl.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Dr=null;function Pd(t){Dr===null?Dr=[t]:Dr.push(t)}function Cv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Pd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function Ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,Pd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gd(t,n)}}function qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ol(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=Tt({},d,h);break e;case 2:Yi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=d}}function Kh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ge(191,r));r.call(i)}}}var ua={},hi=yr(ua),Zo=yr(ua),Qo=yr(ua);function Ur(t){if(t===ua)throw Error(ge(174));return t}function Nd(t,e){switch(pt(Qo,e),pt(Zo,t),pt(hi,ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nf(e,t)}_t(hi),pt(hi,e)}function Xs(){_t(hi),_t(Zo),_t(Qo)}function Pv(t){Ur(Qo.current);var e=Ur(hi.current),n=nf(e,t.type);e!==n&&(pt(Zo,t),pt(hi,n))}function Id(t){Zo.current===t&&(_t(hi),_t(Zo))}var Mt=yr(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yc=[];function Dd(){for(var t=0;t<Yc.length;t++)Yc[t]._workInProgressVersionPrimary=null;Yc.length=0}var pl=Di.ReactCurrentDispatcher,qc=Di.ReactCurrentBatchConfig,jr=0,Et=null,Dt=null,Gt=null,zl=!1,Fo=!1,Jo=0,gx=0;function Qt(){throw Error(ge(321))}function Ud(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!si(t[n],e[n]))return!1;return!0}function Fd(t,e,n,i,r,s){if(jr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?xx:Sx,t=n(i,r),Fo){s=0;do{if(Fo=!1,Jo=0,25<=s)throw Error(ge(301));s+=1,Gt=Dt=null,e.updateQueue=null,pl.current=Mx,t=n(i,r)}while(Fo)}if(pl.current=Bl,e=Dt!==null&&Dt.next!==null,jr=0,Gt=Dt=Et=null,zl=!1,e)throw Error(ge(300));return t}function Od(){var t=Jo!==0;return Jo=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Et.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function jn(){if(Dt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Gt===null?Et.memoizedState:Gt.next;if(e!==null)Gt=e,Dt=t;else{if(t===null)throw Error(ge(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Gt===null?Et.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function ea(t,e){return typeof e=="function"?e(t):e}function Kc(t){var e=jn(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((jr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Et.lanes|=f,Xr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,si(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=jn(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);si(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Lv(){}function Nv(t,e){var n=Et,i=jn(),r=e(),s=!si(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,kd(Uv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,ta(9,Dv.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(ge(349));jr&30||Iv(n,e,r)}return r}function Iv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dv(t,e,n,i){e.value=n,e.getSnapshot=i,Fv(e)&&Ov(t)}function Uv(t,e,n){return n(function(){Fv(e)&&Ov(t)})}function Fv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!si(t,n)}catch{return!0}}function Ov(t){var e=Li(t,1);e!==null&&ri(e,t,1,-1)}function Zh(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=yx.bind(null,Et,t),[e.memoizedState,t]}function ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function kv(){return jn().memoizedState}function ml(t,e,n,i){var r=li();Et.flags|=t,r.memoizedState=ta(1|e,n,void 0,i===void 0?null:i)}function uc(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&Ud(i,o.deps)){r.memoizedState=ta(e,n,s,i);return}}Et.flags|=t,r.memoizedState=ta(1|e,n,s,i)}function Qh(t,e){return ml(8390656,8,t,e)}function kd(t,e){return uc(2048,8,t,e)}function zv(t,e){return uc(4,2,t,e)}function Bv(t,e){return uc(4,4,t,e)}function Hv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gv(t,e,n){return n=n!=null?n.concat([t]):null,uc(4,4,Hv.bind(null,e,t),n)}function zd(){}function Vv(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ud(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Wv(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ud(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function jv(t,e,n){return jr&21?(si(n,e)||(n=Kg(),Et.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function vx(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var i=qc.transition;qc.transition={};try{t(!1),e()}finally{ft=n,qc.transition=i}}function Xv(){return jn().memoizedState}function _x(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$v(t))Yv(e,n);else if(n=Cv(t,e,n,i),n!==null){var r=dn();ri(n,t,i,r),qv(n,e,i)}}function yx(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($v(t))Yv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,si(a,o)){var l=e.interleaved;l===null?(r.next=r,Pd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Cv(t,e,r,i),n!==null&&(r=dn(),ri(n,t,i,r),qv(n,e,i))}}function $v(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Yv(t,e){Fo=zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gd(t,n)}}var Bl={readContext:Wn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},xx={readContext:Wn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:Qh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,Hv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=_x.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:Zh,useDebugValue:zd,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=Zh(!1),e=t[0];return t=vx.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=li();if(xt){if(n===void 0)throw Error(ge(407));n=n()}else{if(n=e(),Wt===null)throw Error(ge(349));jr&30||Iv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Qh(Uv.bind(null,i,s,t),[t]),i.flags|=2048,ta(9,Dv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Wt.identifierPrefix;if(xt){var n=Ai,i=Ti;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sx={readContext:Wn,useCallback:Vv,useContext:Wn,useEffect:kd,useImperativeHandle:Gv,useInsertionEffect:zv,useLayoutEffect:Bv,useMemo:Wv,useReducer:Kc,useRef:kv,useState:function(){return Kc(ea)},useDebugValue:zd,useDeferredValue:function(t){var e=jn();return jv(e,Dt.memoizedState,t)},useTransition:function(){var t=Kc(ea)[0],e=jn().memoizedState;return[t,e]},useMutableSource:Lv,useSyncExternalStore:Nv,useId:Xv,unstable_isNewReconciler:!1},Mx={readContext:Wn,useCallback:Vv,useContext:Wn,useEffect:kd,useImperativeHandle:Gv,useInsertionEffect:zv,useLayoutEffect:Bv,useMemo:Wv,useReducer:Zc,useRef:kv,useState:function(){return Zc(ea)},useDebugValue:zd,useDeferredValue:function(t){var e=jn();return Dt===null?e.memoizedState=t:jv(e,Dt.memoizedState,t)},useTransition:function(){var t=Zc(ea)[0],e=jn().memoizedState;return[t,e]},useMutableSource:Lv,useSyncExternalStore:Nv,useId:Xv,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fc={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=ar(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ri(e,t,r,i),hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=ar(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,r),e!==null&&(ri(e,t,r,i),hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=ar(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=sr(t,r,i),e!==null&&(ri(e,t,i,n),hl(e,t,i))}};function Jh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,i)||!$o(r,s):!0}function Kv(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=Sn(e)?Vr:on.current,i=e.contextTypes,s=(i=i!=null)?Vs(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ep(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fc.enqueueReplaceState(e,e.state,null)}function Tf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ld(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=Sn(e)?Vr:on.current,r.context=Vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fc.enqueueReplaceState(r,r.state,null),Ol(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function $s(t,e){try{var n="",i=e;do n+=K_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ex=typeof WeakMap=="function"?WeakMap:Map;function Zv(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Gl||(Gl=!0,Ff=i),Af(t,e)},n}function Qv(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Af(t,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ex;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ox.bind(null,t,e,n),e.then(t,t))}function np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ip(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var wx=Di.ReactCurrentOwner,yn=!1;function un(t,e,n,i){e.child=t===null?bv(e,null,n,i):js(e,t.child,n,i)}function rp(t,e,n,i,r){n=n.render;var s=e.ref;return ks(e,r),i=Fd(t,e,n,i,s,r),n=Od(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(xt&&n&&wd(e),e.flags|=1,un(t,e,i,r),e.child)}function sp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!$d(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jv(t,e,s,i,r)):(t=yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Jv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($o(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return bf(t,e,n,i,r)}function e0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Ls,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(Ls,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(Ls,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(Ls,bn),bn|=i;return un(t,e,r,n),e.child}function t0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function bf(t,e,n,i,r){var s=Sn(n)?Vr:on.current;return s=Vs(e,s),ks(e,r),n=Fd(t,e,n,i,s,r),i=Od(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(xt&&i&&wd(e),e.flags|=1,un(t,e,n,r),e.child)}function op(t,e,n,i,r){if(Sn(n)){var s=!0;Nl(e)}else s=!1;if(ks(e,r),e.stateNode===null)gl(t,e),Kv(e,n,i),Tf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=Sn(n)?Vr:on.current,c=Vs(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ep(e,o,i,c),Yi=!1;var h=e.memoizedState;o.state=h,Ol(e,i,o,r),l=e.memoizedState,a!==i||h!==l||xn.current||Yi?(typeof f=="function"&&(wf(e,n,f,i),l=e.memoizedState),(a=Yi||Jh(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Rv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Zn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=Sn(n)?Vr:on.current,l=Vs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&ep(e,o,i,l),Yi=!1,h=e.memoizedState,o.state=h,Ol(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||xn.current||Yi?(typeof m=="function"&&(wf(e,n,m,i),_=e.memoizedState),(c=Yi||Jh(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Cf(t,e,n,i,s,r)}function Cf(t,e,n,i,r,s){t0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&jh(e,n,!1),Ni(t,e,s);i=e.stateNode,wx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=js(e,t.child,null,s),e.child=js(e,null,a,s)):un(t,e,a,s),e.memoizedState=i.state,r&&jh(e,n,!0),e.child}function n0(t){var e=t.stateNode;e.pendingContext?Wh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wh(t,e.context,!1),Nd(t,e.containerInfo)}function ap(t,e,n,i,r){return Ws(),Ad(r),e.flags|=256,un(t,e,n,i),e.child}var Rf={dehydrated:null,treeContext:null,retryLane:0};function Pf(t){return{baseLanes:t,cachePool:null,transitions:null}}function i0(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(Mt,r&1),t===null)return Mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pc(o,i,0,null),t=kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Pf(n),e.memoizedState=Rf,t):Bd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Tx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Pf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rf,i}return s=t.child,t=s.sibling,i=lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bd(t,e){return e=pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ba(t,e,n,i){return i!==null&&Ad(i),js(e,t.child,null,n),t=Bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Qc(Error(ge(422))),ba(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=pc({mode:"visible",children:i.children},r,0,null),s=kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&js(e,t.child,null,o),e.child.memoizedState=Pf(o),e.memoizedState=Rf,s);if(!(e.mode&1))return ba(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ge(419)),i=Qc(s,i,void 0),ba(t,e,o,i)}if(a=(o&t.childLanes)!==0,yn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),ri(i,t,r,-1))}return Xd(),i=Qc(Error(ge(421))),ba(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=rr(r.nextSibling),Rn=e,xt=!0,Jn=null,t!==null&&(Fn[On++]=Ti,Fn[On++]=Ai,Fn[On++]=Wr,Ti=t.id,Ai=t.overflow,Wr=e),e=Bd(e,i.children),e.flags|=4096,e)}function lp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ef(t.return,e,n)}function Jc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function r0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,n,e);else if(t.tag===19)lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Jc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&kl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Jc(e,!0,n,null,s);break;case"together":Jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ge(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ax(t,e,n){switch(e.tag){case 3:n0(e),Ws();break;case 5:Pv(e);break;case 1:Sn(e.type)&&Nl(e);break;case 4:Nd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(Ul,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?i0(t,e,n):(pt(Mt,Mt.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);pt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return r0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,e0(t,e,n)}return Ni(t,e,n)}var s0,Lf,o0,a0;s0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lf=function(){};o0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(hi.current);var s=null;switch(n){case"input":r=Qu(t,r),i=Qu(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=tf(t,r),i=tf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Pl)}rf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};a0=function(t,e,n,i){n!==i&&(e.flags|=4)};function go(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function bx(t,e,n){var i=e.pendingProps;switch(Td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return Sn(e.type)&&Ll(),Jt(e),null;case 3:return i=e.stateNode,Xs(),_t(xn),_t(on),Dd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ta(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(zf(Jn),Jn=null))),Lf(t,e),Jt(e),null;case 5:Id(e);var r=Ur(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)o0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ge(166));return Jt(e),null}if(t=Ur(hi.current),Ta(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Po.length;r++)gt(Po[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":vh(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":yh(i,s),gt("invalid",i)}rf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&wa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wa(i.textContent,a,t),r=["children",""+a]):Bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":ga(i),_h(i,s,!0);break;case"textarea":ga(i),xh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Pl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ug(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ui]=e,t[Ko]=i,s0(t,e,!1,!1),e.stateNode=t;e:{switch(o=sf(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Po.length;r++)gt(Po[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":vh(t,i),r=Qu(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":yh(t,i),r=tf(t,i),gt("invalid",t);break;default:r=i}rf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?kg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Fg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ho(t,l):typeof l=="number"&&Ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&ud(t,s,l,o))}switch(n){case"input":ga(t),_h(t,i,!1);break;case"textarea":ga(t),xh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Pl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)a0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ge(166));if(n=Ur(Qo.current),Ur(hi.current),Ta(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:wa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return Jt(e),null;case 13:if(_t(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&Cn!==null&&e.mode&1&&!(e.flags&128))Tv(),Ws(),e.flags|=98560,s=!1;else if(s=Ta(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ge(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ge(317));s[ui]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else Jn!==null&&(zf(Jn),Jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Ut===0&&(Ut=3):Xd())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return Xs(),Lf(t,e),t===null&&Yo(e.stateNode.containerInfo),Jt(e),null;case 10:return Rd(e.type._context),Jt(e),null;case 17:return Sn(e.type)&&Ll(),Jt(e),null;case 19:if(_t(Mt),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)go(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kl(t),o!==null){for(e.flags|=128,go(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>Ys&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304)}else{if(!i)if(t=kl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return Jt(e),null}else 2*Ct()-s.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=Mt.current,pt(Mt,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return jd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(ge(156,e.tag))}function Cx(t,e){switch(Td(e),e.tag){case 1:return Sn(e.type)&&Ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),_t(xn),_t(on),Dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Id(e),null;case 13:if(_t(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ge(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(Mt),null;case 4:return Xs(),null;case 10:return Rd(e.type._context),null;case 22:case 23:return jd(),null;case 24:return null;default:return null}}var Ca=!1,nn=!1,Rx=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function Nf(t,e,n){try{n()}catch(i){At(t,e,i)}}var cp=!1;function Px(t,e){if(mf=bl,t=dv(),Ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gf={focusedElem:t,selectionRange:n},bl=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Zn(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ge(163))}}catch(M){At(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return _=cp,cp=!1,_}function Oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Nf(e,n,s)}r=r.next}while(r!==i)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function If(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l0(t){var e=t.alternate;e!==null&&(t.alternate=null,l0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[Ko],delete e[yf],delete e[dx],delete e[hx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c0(t){return t.tag===5||t.tag===3||t.tag===4}function up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pl));else if(i!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}function Uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Uf(t,e,n),t=t.sibling;t!==null;)Uf(t,e,n),t=t.sibling}var jt=null,Qn=!1;function zi(t,e,n){for(n=n.child;n!==null;)u0(t,e,n),n=n.sibling}function u0(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(rc,n)}catch{}switch(n.tag){case 5:nn||Ps(n,e);case 6:var i=jt,r=Qn;jt=null,zi(t,e,n),jt=i,Qn=r,jt!==null&&(Qn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Qn?(t=jt,n=n.stateNode,t.nodeType===8?Xc(t.parentNode,n):t.nodeType===1&&Xc(t,n),jo(t)):Xc(jt,n.stateNode));break;case 4:i=jt,r=Qn,jt=n.stateNode.containerInfo,Qn=!0,zi(t,e,n),jt=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nf(n,e,o),r=r.next}while(r!==i)}zi(t,e,n);break;case 1:if(!nn&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}zi(t,e,n);break;case 21:zi(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,zi(t,e,n),nn=i):zi(t,e,n);break;default:zi(t,e,n)}}function fp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Rx),e.forEach(function(i){var r=zx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,Qn=!1;break e;case 3:jt=a.stateNode.containerInfo,Qn=!0;break e;case 4:jt=a.stateNode.containerInfo,Qn=!0;break e}a=a.return}if(jt===null)throw Error(ge(160));u0(s,o,r),jt=null,Qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)f0(e,t),e=e.sibling}function f0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),ai(t),i&4){try{Oo(3,t,t.return),dc(3,t)}catch(y){At(t,t.return,y)}try{Oo(5,t,t.return)}catch(y){At(t,t.return,y)}}break;case 1:$n(e,t),ai(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if($n(e,t),ai(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{Ho(r,"")}catch(y){At(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ig(r,s),sf(a,o);var c=sf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?kg(r,d):f==="dangerouslySetInnerHTML"?Fg(r,d):f==="children"?Ho(r,d):ud(r,f,d,c)}switch(a){case"input":Ju(r,s);break;case"textarea":Dg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ds(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ds(r,!!s.multiple,s.defaultValue,!0):Ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ko]=s}catch(y){At(t,t.return,y)}}break;case 6:if($n(e,t),ai(t),i&4){if(t.stateNode===null)throw Error(ge(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){At(t,t.return,y)}}break;case 3:if($n(e,t),ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(y){At(t,t.return,y)}break;case 4:$n(e,t),ai(t);break;case 13:$n(e,t),ai(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vd=Ct())),i&4&&fp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||f,$n(e,t),nn=c):$n(e,t),ai(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ae=t,f=t.child;f!==null;){for(d=Ae=f;Ae!==null;){switch(h=Ae,m=h.child,h.tag){case 0:case 11:case 14:case 15:Oo(4,h,h.return);break;case 1:Ps(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){At(i,n,y)}}break;case 5:Ps(h,h.return);break;case 22:if(h.memoizedState!==null){hp(d);continue}}m!==null?(m.return=h,Ae=m):hp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Og("display",o))}catch(y){At(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){At(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$n(e,t),ai(t),i&4&&fp(t);break;case 21:break;default:$n(e,t),ai(t)}}function ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c0(n)){var i=n;break e}n=n.return}throw Error(ge(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ho(r,""),i.flags&=-33);var s=up(t);Uf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=up(t);Df(t,a,o);break;default:throw Error(ge(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lx(t,e,n){Ae=t,d0(t)}function d0(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ca;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||nn;a=Ca;var c=nn;if(Ca=o,(nn=l)&&!c)for(Ae=r;Ae!==null;)o=Ae,l=o.child,o.tag===22&&o.memoizedState!==null?pp(r):l!==null?(l.return=o,Ae=l):pp(r);for(;s!==null;)Ae=s,d0(s),s=s.sibling;Ae=r,Ca=a,nn=c}dp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):dp(t)}}function dp(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&jo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ge(163))}nn||e.flags&512&&If(e)}catch(h){At(e,e.return,h)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function hp(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function pp(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{If(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{If(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){Ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ae=a;break}Ae=e.return}}var Nx=Math.ceil,Hl=Di.ReactCurrentDispatcher,Hd=Di.ReactCurrentOwner,Vn=Di.ReactCurrentBatchConfig,at=0,Wt=null,Nt=null,$t=0,bn=0,Ls=yr(0),Ut=0,na=null,Xr=0,hc=0,Gd=0,ko=null,vn=null,Vd=0,Ys=1/0,xi=null,Gl=!1,Ff=null,or=null,Ra=!1,Qi=null,Vl=0,zo=0,Of=null,vl=-1,_l=0;function dn(){return at&6?Ct():vl!==-1?vl:vl=Ct()}function ar(t){return t.mode&1?at&2&&$t!==0?$t&-$t:mx.transition!==null?(_l===0&&(_l=Kg()),_l):(t=ft,t!==0||(t=window.event,t=t===void 0?16:iv(t.type)),t):1}function ri(t,e,n,i){if(50<zo)throw zo=0,Of=null,Error(ge(185));aa(t,n,i),(!(at&2)||t!==Wt)&&(t===Wt&&(!(at&2)&&(hc|=n),Ut===4&&Ki(t,$t)),Mn(t,i),n===1&&at===0&&!(e.mode&1)&&(Ys=Ct()+500,cc&&xr()))}function Mn(t,e){var n=t.callbackNode;my(t,e);var i=Al(t,t===Wt?$t:0);if(i===0)n!==null&&Eh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Eh(n),e===1)t.tag===0?px(mp.bind(null,t)):Mv(mp.bind(null,t)),ux(function(){!(at&6)&&xr()}),n=null;else{switch(Zg(i)){case 1:n=md;break;case 4:n=Yg;break;case 16:n=Tl;break;case 536870912:n=qg;break;default:n=Tl}n=x0(n,h0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h0(t,e){if(vl=-1,_l=0,at&6)throw Error(ge(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var i=Al(t,t===Wt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Wl(t,i);else{e=i;var r=at;at|=2;var s=m0();(Wt!==t||$t!==e)&&(xi=null,Ys=Ct()+500,Or(t,e));do try{Ux();break}catch(a){p0(t,a)}while(!0);Cd(),Hl.current=s,at=r,Nt!==null?e=0:(Wt=null,$t=0,e=Ut)}if(e!==0){if(e===2&&(r=uf(t),r!==0&&(i=r,e=kf(t,r))),e===1)throw n=na,Or(t,0),Ki(t,i),Mn(t,Ct()),n;if(e===6)Ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ix(r)&&(e=Wl(t,i),e===2&&(s=uf(t),s!==0&&(i=s,e=kf(t,s))),e===1))throw n=na,Or(t,0),Ki(t,i),Mn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ge(345));case 2:Cr(t,vn,xi);break;case 3:if(Ki(t,i),(i&130023424)===i&&(e=Vd+500-Ct(),10<e)){if(Al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=_f(Cr.bind(null,t,vn,xi),e);break}Cr(t,vn,xi);break;case 4:if(Ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ii(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Nx(i/1960))-i,10<i){t.timeoutHandle=_f(Cr.bind(null,t,vn,xi),i);break}Cr(t,vn,xi);break;case 5:Cr(t,vn,xi);break;default:throw Error(ge(329))}}}return Mn(t,Ct()),t.callbackNode===n?h0.bind(null,t):null}function kf(t,e){var n=ko;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=Wl(t,e),t!==2&&(e=vn,vn=n,e!==null&&zf(e)),t}function zf(t){vn===null?vn=t:vn.push.apply(vn,t)}function Ix(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!si(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ki(t,e){for(e&=~Gd,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function mp(t){if(at&6)throw Error(ge(327));zs();var e=Al(t,0);if(!(e&1))return Mn(t,Ct()),null;var n=Wl(t,e);if(t.tag!==0&&n===2){var i=uf(t);i!==0&&(e=i,n=kf(t,i))}if(n===1)throw n=na,Or(t,0),Ki(t,e),Mn(t,Ct()),n;if(n===6)throw Error(ge(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,vn,xi),Mn(t,Ct()),null}function Wd(t,e){var n=at;at|=1;try{return t(e)}finally{at=n,at===0&&(Ys=Ct()+500,cc&&xr())}}function $r(t){Qi!==null&&Qi.tag===0&&!(at&6)&&zs();var e=at;at|=1;var n=Vn.transition,i=ft;try{if(Vn.transition=null,ft=1,t)return t()}finally{ft=i,Vn.transition=n,at=e,!(at&6)&&xr()}}function jd(){bn=Ls.current,_t(Ls)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cx(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(Td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ll();break;case 3:Xs(),_t(xn),_t(on),Dd();break;case 5:Id(i);break;case 4:Xs();break;case 13:_t(Mt);break;case 19:_t(Mt);break;case 10:Rd(i.type._context);break;case 22:case 23:jd()}n=n.return}if(Wt=t,Nt=t=lr(t.current,null),$t=bn=e,Ut=0,na=null,Gd=hc=Xr=0,vn=ko=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Dr=null}return t}function p0(t,e){do{var n=Nt;try{if(Cd(),pl.current=Bl,zl){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zl=!1}if(jr=0,Gt=Dt=Et=null,Fo=!1,Jo=0,Hd.current=null,n===null||n.return===null){Ut=1,na=e,Nt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=np(o);if(m!==null){m.flags&=-257,ip(m,o,a,s,e),m.mode&1&&tp(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){tp(s,c,e),Xd();break e}l=Error(ge(426))}}else if(xt&&a.mode&1){var p=np(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),ip(p,o,a,s,e),Ad($s(l,a));break e}}s=l=$s(l,a),Ut!==4&&(Ut=2),ko===null?ko=[s]:ko.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Zv(s,l,e);qh(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(or===null||!or.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Qv(s,a,e);qh(s,M);break e}}s=s.return}while(s!==null)}v0(n)}catch(D){e=D,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function m0(){var t=Hl.current;return Hl.current=Bl,t===null?Bl:t}function Xd(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Wt===null||!(Xr&268435455)&&!(hc&268435455)||Ki(Wt,$t)}function Wl(t,e){var n=at;at|=2;var i=m0();(Wt!==t||$t!==e)&&(xi=null,Or(t,e));do try{Dx();break}catch(r){p0(t,r)}while(!0);if(Cd(),at=n,Hl.current=i,Nt!==null)throw Error(ge(261));return Wt=null,$t=0,Ut}function Dx(){for(;Nt!==null;)g0(Nt)}function Ux(){for(;Nt!==null&&!oy();)g0(Nt)}function g0(t){var e=y0(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?v0(t):Nt=e,Hd.current=null}function v0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cx(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Nt=null;return}}else if(n=bx(n,e,bn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Cr(t,e,n){var i=ft,r=Vn.transition;try{Vn.transition=null,ft=1,Fx(t,e,n,i)}finally{Vn.transition=r,ft=i}return null}function Fx(t,e,n,i){do zs();while(Qi!==null);if(at&6)throw Error(ge(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ge(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gy(t,s),t===Wt&&(Nt=Wt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ra||(Ra=!0,x0(Tl,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var o=ft;ft=1;var a=at;at|=4,Hd.current=null,Px(t,n),f0(n,t),nx(gf),bl=!!mf,gf=mf=null,t.current=n,Lx(n),ay(),at=a,ft=o,Vn.transition=s}else t.current=n;if(Ra&&(Ra=!1,Qi=t,Vl=r),s=t.pendingLanes,s===0&&(or=null),uy(n.stateNode),Mn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gl)throw Gl=!1,t=Ff,Ff=null,t;return Vl&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===Of?zo++:(zo=0,Of=t):zo=0,xr(),null}function zs(){if(Qi!==null){var t=Zg(Vl),e=Vn.transition,n=ft;try{if(Vn.transition=null,ft=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,Vl=0,at&6)throw Error(ge(331));var r=at;for(at|=4,Ae=t.current;Ae!==null;){var s=Ae,o=s.child;if(Ae.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ae=c;Ae!==null;){var f=Ae;switch(f.tag){case 0:case 11:case 15:Oo(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ae=d;else for(;Ae!==null;){f=Ae;var h=f.sibling,m=f.return;if(l0(f),f===c){Ae=null;break}if(h!==null){h.return=m,Ae=h;break}Ae=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}Ae=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ae=o;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ae=u;break e}Ae=s.return}}var g=t.current;for(Ae=g;Ae!==null;){o=Ae;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ae=v;else e:for(o=g;Ae!==null;){if(a=Ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dc(9,a)}}catch(D){At(a,a.return,D)}if(a===o){Ae=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Ae=M;break e}Ae=a.return}}if(at=r,xr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(rc,t)}catch{}i=!0}return i}finally{ft=n,Vn.transition=e}}return!1}function gp(t,e,n){e=$s(n,e),e=Zv(t,e,1),t=sr(t,e,1),e=dn(),t!==null&&(aa(t,1,e),Mn(t,e))}function At(t,e,n){if(t.tag===3)gp(t,t,n);else for(;e!==null;){if(e.tag===3){gp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){t=$s(n,t),t=Qv(e,t,1),e=sr(e,t,1),t=dn(),e!==null&&(aa(e,1,t),Mn(e,t));break}}e=e.return}}function Ox(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&($t&n)===n&&(Ut===4||Ut===3&&($t&130023424)===$t&&500>Ct()-Vd?Or(t,0):Gd|=n),Mn(t,e)}function _0(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=dn();t=Li(t,e),t!==null&&(aa(t,e,n),Mn(t,n))}function kx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_0(t,n)}function zx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ge(314))}i!==null&&i.delete(e),_0(t,n)}var y0;y0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,Ax(t,e,n);yn=!!(t.flags&131072)}else yn=!1,xt&&e.flags&1048576&&Ev(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gl(t,e),t=e.pendingProps;var r=Vs(e,on.current);ks(e,n),r=Fd(null,e,i,t,r,n);var s=Od();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Nl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ld(e),r.updater=fc,e.stateNode=r,r._reactInternals=e,Tf(e,i,t,n),e=Cf(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&wd(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Hx(i),t=Zn(i,t),r){case 0:e=bf(null,e,i,t,n);break e;case 1:e=op(null,e,i,t,n);break e;case 11:e=rp(null,e,i,t,n);break e;case 14:e=sp(null,e,i,Zn(i.type,t),n);break e}throw Error(ge(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),bf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),op(t,e,i,r,n);case 3:e:{if(n0(e),t===null)throw Error(ge(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Rv(t,e),Ol(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=$s(Error(ge(423)),e),e=ap(t,e,i,n,r);break e}else if(i!==r){r=$s(Error(ge(424)),e),e=ap(t,e,i,n,r);break e}else for(Cn=rr(e.stateNode.containerInfo.firstChild),Rn=e,xt=!0,Jn=null,n=bv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Ni(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return Pv(e),t===null&&Mf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,vf(i,r)?o=null:s!==null&&vf(i,s)&&(e.flags|=32),t0(t,e),un(t,e,o,n),e.child;case 6:return t===null&&Mf(e),null;case 13:return i0(t,e,n);case 4:return Nd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=js(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),rp(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(Ul,i._currentValue),i._currentValue=o,s!==null)if(si(s.value,o)){if(s.children===r.children&&!xn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ef(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ge(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ef(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ks(e,n),r=Wn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),sp(t,e,i,r,n);case 15:return Jv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),gl(t,e),e.tag=1,Sn(i)?(t=!0,Nl(e)):t=!1,ks(e,n),Kv(e,i,r),Tf(e,i,r,n),Cf(null,e,i,!0,t,n);case 19:return r0(t,e,n);case 22:return e0(t,e,n)}throw Error(ge(156,e.tag))};function x0(t,e){return $g(t,e)}function Bx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new Bx(t,e,n,i)}function $d(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hx(t){if(typeof t=="function")return $d(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dd)return 11;if(t===hd)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")$d(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return kr(n.children,r,s,e);case fd:o=8,r|=8;break;case Yu:return t=Hn(12,n,e,r|2),t.elementType=Yu,t.lanes=s,t;case qu:return t=Hn(13,n,e,r),t.elementType=qu,t.lanes=s,t;case Ku:return t=Hn(19,n,e,r),t.elementType=Ku,t.lanes=s,t;case Pg:return pc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cg:o=10;break e;case Rg:o=9;break e;case dd:o=11;break e;case hd:o=14;break e;case $i:o=16,i=null;break e}throw Error(ge(130,t==null?t:typeof t,""))}return e=Hn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function kr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function pc(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=Pg,t.lanes=n,t.stateNode={isHidden:!1},t}function eu(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function tu(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yd(t,e,n,i,r,s,o,a,l){return t=new Gx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ld(s),t}function Vx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function S0(t){if(!t)return mr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(ge(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ge(171))}if(t.tag===1){var n=t.type;if(Sn(n))return Sv(t,n,e)}return e}function M0(t,e,n,i,r,s,o,a,l){return t=Yd(n,i,!0,t,r,s,o,a,l),t.context=S0(null),n=t.current,i=dn(),r=ar(n),s=Ci(i,r),s.callback=e??null,sr(n,s,r),t.current.lanes=r,aa(t,r,i),Mn(t,i),t}function mc(t,e,n,i){var r=e.current,s=dn(),o=ar(r);return n=S0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=sr(r,e,o),t!==null&&(ri(t,r,o,s),hl(t,r,o)),o}function jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){vp(t,e),(t=t.alternate)&&vp(t,e)}function Wx(){return null}var E0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kd(t){this._internalRoot=t}gc.prototype.render=Kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ge(409));mc(t,e,null,null)};gc.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){mc(null,t,null,null)}),e[Pi]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ev();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&nv(t)}};function Zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _p(){}function jx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=jl(o);s.call(c)}}var o=M0(e,i,t,0,null,!1,!1,"",_p);return t._reactRootContainer=o,t[Pi]=o.current,Yo(t.nodeType===8?t.parentNode:t),$r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=jl(l);a.call(c)}}var l=Yd(t,0,!1,null,null,!1,!1,"",_p);return t._reactRootContainer=l,t[Pi]=l.current,Yo(t.nodeType===8?t.parentNode:t),$r(function(){mc(e,l,n,i)}),l}function _c(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=jl(o);a.call(l)}}mc(e,o,t,r)}else o=jx(n,e,t,r,i);return jl(o)}Qg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ro(e.pendingLanes);n!==0&&(gd(e,n|1),Mn(e,Ct()),!(at&6)&&(Ys=Ct()+500,xr()))}break;case 13:$r(function(){var i=Li(t,1);if(i!==null){var r=dn();ri(i,t,1,r)}}),qd(t,1)}};vd=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=dn();ri(e,t,134217728,n)}qd(t,134217728)}};Jg=function(t){if(t.tag===13){var e=ar(t),n=Li(t,e);if(n!==null){var i=dn();ri(n,t,e,i)}qd(t,e)}};ev=function(){return ft};tv=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};af=function(t,e,n){switch(e){case"input":if(Ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=lc(i);if(!r)throw Error(ge(90));Ng(i),Ju(i,r)}}}break;case"textarea":Dg(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};Hg=Wd;Gg=$r;var Xx={usingClientEntryPoint:!1,Events:[ca,Ts,lc,zg,Bg,Wd]},vo={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jg(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||Wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{rc=Pa.inject($x),di=Pa}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xx;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zd(e))throw Error(ge(200));return Vx(t,e,null,n)};Ln.createRoot=function(t,e){if(!Zd(t))throw Error(ge(299));var n=!1,i="",r=E0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yd(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,Yo(t.nodeType===8?t.parentNode:t),new Kd(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ge(188)):(t=Object.keys(t).join(","),Error(ge(268,t)));return t=jg(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return $r(t)};Ln.hydrate=function(t,e,n){if(!vc(e))throw Error(ge(200));return _c(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!Zd(t))throw Error(ge(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=E0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=M0(e,null,t,1,n??null,r,!1,s,o),t[Pi]=e.current,Yo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new gc(e)};Ln.render=function(t,e,n){if(!vc(e))throw Error(ge(200));return _c(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!vc(t))throw Error(ge(40));return t._reactRootContainer?($r(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};Ln.unstable_batchedUpdates=Wd;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vc(n))throw Error(ge(200));if(t==null||t._reactInternals===void 0)throw Error(ge(38));return _c(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function w0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w0)}catch(t){console.error(t)}}w0(),wg.exports=Ln;var Yx=wg.exports,yp=Yx;Xu.createRoot=yp.createRoot,Xu.hydrateRoot=yp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ia(){return ia=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ia.apply(this,arguments)}var Ji;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ji||(Ji={}));const xp="popstate";function qx(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Bf("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Xl(r)}return Zx(e,n,null,t)}function wt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Qd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Kx(){return Math.random().toString(36).substr(2,8)}function Sp(t,e){return{usr:t.state,key:t.key,idx:e}}function Bf(t,e,n,i){return n===void 0&&(n=null),ia({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ro(e):e,{state:n,key:e&&e.key||i||Kx()})}function Xl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ro(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Zx(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Ji.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(ia({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=Ji.Pop;let p=f(),u=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:u})}function h(p,u){a=Ji.Push;let g=Bf(y.location,p,u);c=f()+1;let v=Sp(g,c),M=y.createHref(g);try{o.pushState(v,"",M)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;r.location.assign(M)}s&&l&&l({action:a,location:y.location,delta:1})}function m(p,u){a=Ji.Replace;let g=Bf(y.location,p,u);c=f();let v=Sp(g,c),M=y.createHref(g);o.replaceState(v,"",M),s&&l&&l({action:a,location:y.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:Xl(p);return g=g.replace(/ $/,"%20"),wt(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let y={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(xp,d),l=p,()=>{r.removeEventListener(xp,d),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:m,go(p){return o.go(p)}};return y}var Mp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Mp||(Mp={}));function Qx(t,e,n){return n===void 0&&(n="/"),Jx(t,e,n)}function Jx(t,e,n,i){let r=typeof e=="string"?ro(e):e,s=qs(r.pathname||"/",n);if(s==null)return null;let o=T0(t);eS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=fS(s);a=cS(o[l],c)}return a}function T0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(wt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=cr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(wt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),T0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:aS(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of A0(s.path))r(s,o,l)}),e}function A0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=A0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function eS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const tS=/^:[\w-]+$/,nS=3,iS=2,rS=1,sS=10,oS=-2,Ep=t=>t==="*";function aS(t,e){let n=t.split("/"),i=n.length;return n.some(Ep)&&(i+=oS),e&&(i+=iS),n.filter(r=>!Ep(r)).reduce((r,s)=>r+(tS.test(s)?nS:s===""?rS:sS),i)}function lS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function cS(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",d=Hf({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),h=l.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:cr([s,d.pathname]),pathnameBase:gS(cr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=cr([s,d.pathnameBase]))}return o}function Hf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=uS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,f,d)=>{let{paramName:h,isOptional:m}=f;if(h==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=a[d];return m&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function uS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Qd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function fS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const dS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hS=t=>dS.test(t);function pS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ro(t):t,s;if(n)if(hS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Qd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=wp(n.substring(1),"/"):s=wp(n,e)}else s=e;return{pathname:s,search:vS(i),hash:_S(r)}}function wp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function nu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Jd(t,e){let n=mS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function eh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ro(t):(r=ia({},t),wt(!r.pathname||!r.pathname.includes("?"),nu("?","pathname","search",r)),wt(!r.pathname||!r.pathname.includes("#"),nu("#","pathname","hash",r)),wt(!r.search||!r.search.includes("#"),nu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=pS(r,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const cr=t=>t.join("/").replace(/\/\/+/g,"/"),gS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_S=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function yS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const b0=["post","put","patch","delete"];new Set(b0);const xS=["get",...b0];new Set(xS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ra(){return ra=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ra.apply(this,arguments)}const yc=F.createContext(null),C0=F.createContext(null),Ui=F.createContext(null),xc=F.createContext(null),Fi=F.createContext({outlet:null,matches:[],isDataRoute:!1}),R0=F.createContext(null);function SS(t,e){let{relative:n}=e===void 0?{}:e;so()||wt(!1);let{basename:i,navigator:r}=F.useContext(Ui),{hash:s,pathname:o,search:a}=Mc(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:cr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function so(){return F.useContext(xc)!=null}function Oi(){return so()||wt(!1),F.useContext(xc).location}function P0(t){F.useContext(Ui).static||F.useLayoutEffect(t)}function Sc(){let{isDataRoute:t}=F.useContext(Fi);return t?FS():MS()}function MS(){so()||wt(!1);let t=F.useContext(yc),{basename:e,future:n,navigator:i}=F.useContext(Ui),{matches:r}=F.useContext(Fi),{pathname:s}=Oi(),o=JSON.stringify(Jd(r,n.v7_relativeSplatPath)),a=F.useRef(!1);return P0(()=>{a.current=!0}),F.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let d=eh(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:cr([e,d.pathname])),(f.replace?i.replace:i.push)(d,f.state,f)},[e,i,o,s,t])}const ES=F.createContext(null);function wS(t){let e=F.useContext(Fi).outlet;return e&&F.createElement(ES.Provider,{value:t},e)}function Mc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=F.useContext(Ui),{matches:r}=F.useContext(Fi),{pathname:s}=Oi(),o=JSON.stringify(Jd(r,i.v7_relativeSplatPath));return F.useMemo(()=>eh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function TS(t,e){return AS(t,e)}function AS(t,e,n,i){so()||wt(!1);let{navigator:r}=F.useContext(Ui),{matches:s}=F.useContext(Fi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Oi(),f;if(e){var d;let p=typeof e=="string"?ro(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||wt(!1),f=p}else f=c;let h=f.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=Qx(t,{pathname:m}),y=LS(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:cr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:cr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&y?F.createElement(xc.Provider,{value:{location:ra({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ji.Pop}},y):y}function bS(){let t=US(),e=yS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:r},n):null,null)}const CS=F.createElement(bS,null);class RS extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(Fi.Provider,{value:this.props.routeContext},F.createElement(R0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PS(t){let{routeContext:e,match:n,children:i}=t,r=F.useContext(yc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(Fi.Provider,{value:e},i)}function LS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||wt(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:h,errors:m}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||_){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,d,h)=>{let m,_=!1,y=null,p=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||CS,l&&(c<0&&h===0?(OS("route-fallback"),_=!0,p=null):c===h&&(_=!0,p=d.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,h+1)),g=()=>{let v;return m?v=y:_?v=p:d.route.Component?v=F.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=f,F.createElement(PS,{match:d,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?F.createElement(RS,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var L0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(L0||{}),N0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(N0||{});function NS(t){let e=F.useContext(yc);return e||wt(!1),e}function IS(t){let e=F.useContext(C0);return e||wt(!1),e}function DS(t){let e=F.useContext(Fi);return e||wt(!1),e}function I0(t){let e=DS(),n=e.matches[e.matches.length-1];return n.route.id||wt(!1),n.route.id}function US(){var t;let e=F.useContext(R0),n=IS(),i=I0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function FS(){let{router:t}=NS(L0.UseNavigateStable),e=I0(N0.UseNavigateStable),n=F.useRef(!1);return P0(()=>{n.current=!0}),F.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ra({fromRouteId:e},s)))},[t,e])}const Tp={};function OS(t,e,n){Tp[t]||(Tp[t]=!0)}function kS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function D0(t){let{to:e,replace:n,state:i,relative:r}=t;so()||wt(!1);let{future:s,static:o}=F.useContext(Ui),{matches:a}=F.useContext(Fi),{pathname:l}=Oi(),c=Sc(),f=eh(e,Jd(a,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(f);return F.useEffect(()=>c(JSON.parse(d),{replace:n,state:i,relative:r}),[c,d,r,n,i]),null}function zS(t){return wS(t.context)}function Xi(t){wt(!1)}function BS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Ji.Pop,navigator:s,static:o=!1,future:a}=t;so()&&wt(!1);let l=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:l,navigator:s,static:o,future:ra({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=ro(i));let{pathname:f="/",search:d="",hash:h="",state:m=null,key:_="default"}=i,y=F.useMemo(()=>{let p=qs(f,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:m,key:_},navigationType:r}},[l,f,d,h,m,_,r]);return y==null?null:F.createElement(Ui.Provider,{value:c},F.createElement(xc.Provider,{children:n,value:y}))}function HS(t){let{children:e,location:n}=t;return TS(Gf(e),n)}new Promise(()=>{});function Gf(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(i,r)=>{if(!F.isValidElement(i))return;let s=[...e,r];if(i.type===F.Fragment){n.push.apply(n,Gf(i.props.children,s));return}i.type!==Xi&&wt(!1),!i.props.index||!i.props.children||wt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Gf(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $l(){return $l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$l.apply(this,arguments)}function U0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function GS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VS(t,e){return t.button===0&&(!e||e==="_self")&&!GS(t)}const WS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],jS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],XS="6";try{window.__reactRouterVersion=XS}catch{}const $S=F.createContext({isTransitioning:!1}),YS="startTransition",Ap=O_[YS];function qS(t){let{basename:e,children:n,future:i,window:r}=t,s=F.useRef();s.current==null&&(s.current=qx({window:r,v5Compat:!0}));let o=s.current,[a,l]=F.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=F.useCallback(d=>{c&&Ap?Ap(()=>l(d)):l(d)},[l,c]);return F.useLayoutEffect(()=>o.listen(f),[o,f]),F.useEffect(()=>kS(i),[i]),F.createElement(BS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const KS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,QS=F.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f,viewTransition:d}=e,h=U0(e,WS),{basename:m}=F.useContext(Ui),_,y=!1;if(typeof c=="string"&&ZS.test(c)&&(_=c,KS))try{let v=new URL(window.location.href),M=c.startsWith("//")?new URL(v.protocol+c):new URL(c),D=qs(M.pathname,m);M.origin===v.origin&&D!=null?c=D+M.search+M.hash:y=!0}catch{}let p=SS(c,{relative:r}),u=tM(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:r,viewTransition:d});function g(v){i&&i(v),v.defaultPrevented||u(v)}return F.createElement("a",$l({},h,{href:_||p,onClick:y||s?i:g,ref:n,target:l}))}),JS=F.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:f}=e,d=U0(e,jS),h=Mc(l,{relative:d.relative}),m=Oi(),_=F.useContext(C0),{navigator:y,basename:p}=F.useContext(Ui),u=_!=null&&nM(h)&&c===!0,g=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,v=m.pathname,M=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(v=v.toLowerCase(),M=M?M.toLowerCase():null,g=g.toLowerCase()),M&&p&&(M=qs(M,p)||M);const D=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let N=v===g||!o&&v.startsWith(g)&&v.charAt(D)==="/",P=M!=null&&(M===g||!o&&M.startsWith(g)&&M.charAt(g.length)==="/"),H={isActive:N,isPending:P,isTransitioning:u},ne=N?i:void 0,S;typeof s=="function"?S=s(H):S=[s,N?"active":null,P?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let I=typeof a=="function"?a(H):a;return F.createElement(QS,$l({},d,{"aria-current":ne,className:S,ref:n,style:I,to:l,viewTransition:c}),typeof f=="function"?f(H):f)});var Vf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Vf||(Vf={}));var bp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bp||(bp={}));function eM(t){let e=F.useContext(yc);return e||wt(!1),e}function tM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Sc(),c=Oi(),f=Mc(t,{relative:o});return F.useCallback(d=>{if(VS(d,n)){d.preventDefault();let h=i!==void 0?i:Xl(c)===Xl(f);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,f,i,r,n,t,s,o,a])}function nM(t,e){e===void 0&&(e={});let n=F.useContext($S);n==null&&wt(!1);let{basename:i}=eM(Vf.useViewTransitionState),r=Mc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=qs(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=qs(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Hf(r.pathname,o)!=null||Hf(r.pathname,s)!=null}const th="reforgedz.session";function Kt(){const t=localStorage.getItem(th);if(!t)return null;try{const e=JSON.parse(t);return!e||typeof e.token!="string"||e.token.length===0?null:e}catch{return null}}function iM(t){localStorage.setItem(th,JSON.stringify(t))}function rM(){localStorage.removeItem(th)}function sM(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),n=(4-e.length%4)%4,i=e+"=".repeat(n);return atob(i)}function oM(){const t=Kt();if(!t)return null;const e=String(t.token).split(".");if(e.length!==2)return null;try{const n=sM(e[0]),i=JSON.parse(n);return!i||typeof i.sub!="string"?null:i}catch{return null}}function iu(t){const e=oM();if(!e)return!1;const n=e.tools;return!n||typeof n!="object"?t==="replay":!!n[t]}function an(){const t="https://admin.reforgedz.xyz";return t.length>0?t.replace(/\/$/,""):window.location.origin}async function aM(t,e){const n=an(),i=await fetch(`${n}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})});if(!i.ok){const r=await i.text();throw new Error(r||`Login failed (${i.status})`)}return await i.json()}async function lM(){const t=an(),e=Kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to list servers (${n.status})`)}return await n.json()}async function Wf(){const t=an(),e=Kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/replay/statusAll`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to get replay status for all servers (${n.status})`)}return await n.json()}async function Cp(t){const e=an(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/range?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get replay range (${i.status})`)}return await i.json()}async function Rp(t){const e=an(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/players?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to list replay players (${i.status})`)}return await i.json()}async function ru(t){const e=an(),n=Kt();if(!n)throw new Error("Not authenticated");const i=new URLSearchParams;i.set("serverId",t.serverId),typeof t.sinceTsMs=="number"&&i.set("sinceTsMs",String(t.sinceTsMs)),typeof t.untilTsMs=="number"&&i.set("untilTsMs",String(t.untilTsMs)),typeof t.limit=="number"&&i.set("limit",String(t.limit)),t.tail&&i.set("tail","1");const r=await fetch(`${e}/api/replay/events?${i.toString()}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!r.ok){const s=await r.text();throw new Error(s||`Failed to get replay events (${r.status})`)}return await r.json()}async function su(t){const e=an(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapTerrain?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map terrain (${i.status})`)}return await i.json()}async function ou(t){const e=an(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapDescriptors?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map descriptors (${i.status})`)}return await i.json()}async function cM(){const t=an(),e=Kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/admin/users`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list users (${n.status})`);return await n.json()}async function uM(t){const e=an(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to create user (${i.status})`);return await i.json()}async function au(t,e){const n=an(),i=Kt();if(!i)throw new Error("Not authenticated");const r=await fetch(`${n}/api/admin/users/${encodeURIComponent(t)}`,{method:"PUT",headers:{Authorization:`Bearer ${i.token}`,"Content-Type":"application/json"},body:JSON.stringify({tools:e})});if(!r.ok)throw new Error(await r.text()||`Failed to update user (${r.status})`);return await r.json()}async function fM(t){const e=an(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users/${encodeURIComponent(t)}`,{method:"DELETE",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to delete user (${i.status})`);return await i.json()}async function dM(){const t=an(),e=Kt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list dev servers (${n.status})`);return await n.json()}async function hM(t){const e=an(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to add dev server (${i.status})`);return await i.json()}async function pM(t){const e=an(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/clear?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to clear history (${i.status})`);return await i.json()}async function mM(t){const e=an(),n=Kt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/regenerateTerrain?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to regenerate terrain (${i.status})`);return await i.json()}function gM(){const t=Sc(),e=Oi(),n=F.useMemo(()=>{const h=e.state;return h&&typeof h.from=="string"&&h.from.length>0?h.from:"/"},[e.state]),[i,r]=F.useState(""),[s,o]=F.useState(""),[a,l]=F.useState(null),[c,f]=F.useState(!1);async function d(h){if(h.preventDefault(),l(null),i.trim().length===0||s.length===0){l("Enter username and password");return}f(!0);try{const m=await aM(i.trim(),s);iM({token:m.token}),t(n,{replace:!0})}catch(m){const _=m instanceof Error?m.message:"Login failed";l(_)}finally{f(!1)}}return E.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24,boxSizing:"border-box"},children:E.jsxs("div",{className:"stack",style:{width:"min(440px, 100%)",gap:14},children:[E.jsxs("div",{style:{textAlign:"center"},children:[E.jsx("div",{className:"label",children:"Welcome"}),E.jsx("h1",{className:"h1",style:{fontSize:22,marginTop:6},children:"ReforgedZ Admin Menu"}),E.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Sign in to continue."})]}),E.jsx("div",{className:"card",style:{padding:18},children:E.jsxs("form",{className:"stack",onSubmit:d,children:[E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsx("div",{className:"label",children:"Username"}),E.jsx("input",{className:"input",value:i,onChange:h=>r(h.target.value),autoComplete:"username"})]}),E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsx("div",{className:"label",children:"Password"}),E.jsx("input",{className:"input",type:"password",value:s,onChange:h=>o(h.target.value),autoComplete:"current-password"})]}),a?E.jsx("div",{className:"error",style:{fontSize:13},children:a}):null,E.jsx("button",{className:"button buttonPrimary",type:"submit",disabled:c,children:c?"Signing in…":"Sign in"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"If you aren't meant to be here, say hi to eiry, I know where you live!."})]})})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nh="161",vM=0,Pp=1,_M=2,F0=1,O0=2,yi=3,gr=0,En=1,ei=2,ur=0,Bs=1,Lp=2,Np=3,Ip=4,yM=5,Lr=100,xM=101,SM=102,Dp=103,Up=104,MM=200,EM=201,wM=202,TM=203,jf=204,Xf=205,AM=206,bM=207,CM=208,RM=209,PM=210,LM=211,NM=212,IM=213,DM=214,UM=0,FM=1,OM=2,Yl=3,kM=4,zM=5,BM=6,HM=7,k0=0,GM=1,VM=2,fr=0,WM=1,jM=2,XM=3,$M=4,YM=5,qM=6,z0=300,Ks=301,Zs=302,$f=303,Yf=304,Ec=306,qf=1e3,ti=1001,Kf=1002,fn=1003,Fp=1004,_o=1005,gn=1006,lu=1007,Fr=1008,dr=1009,KM=1010,ZM=1011,ih=1012,B0=1013,er=1014,Ei=1015,sa=1016,H0=1017,G0=1018,zr=1020,QM=1021,ni=1023,JM=1024,eE=1025,Br=1026,Qs=1027,tE=1028,V0=1029,nE=1030,W0=1031,j0=1033,cu=33776,uu=33777,fu=33778,du=33779,Op=35840,kp=35841,zp=35842,Bp=35843,X0=36196,Hp=37492,Gp=37496,Vp=37808,Wp=37809,jp=37810,Xp=37811,$p=37812,Yp=37813,qp=37814,Kp=37815,Zp=37816,Qp=37817,Jp=37818,em=37819,tm=37820,nm=37821,hu=36492,im=36494,rm=36495,iE=36283,sm=36284,om=36285,am=36286,$0=3e3,Hr=3001,rE=3200,sE=3201,Y0=0,oE=1,zn="",Xt="srgb",Ii="srgb-linear",rh="display-p3",wc="display-p3-linear",ql="linear",vt="srgb",Kl="rec709",Zl="p3",es=7680,lm=519,aE=512,lE=513,cE=514,q0=515,uE=516,fE=517,dE=518,hE=519,Zf=35044,cm="300 es",Qf=1035,bi=2e3,Ql=2001;class oo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xl=Math.PI/180,Jf=180/Math.PI;function hr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function _n(t,e,n){return Math.max(e,Math.min(n,t))}function pE(t,e){return(t%e+e)%e}function pu(t,e,n){return(1-n)*t+n*e}function um(t){return(t&t-1)===0&&t!==0}function ed(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(_n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,n,i,r,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],_=i[8],y=r[0],p=r[3],u=r[6],g=r[1],v=r[4],M=r[7],D=r[2],N=r[5],P=r[8];return s[0]=o*y+a*g+l*D,s[3]=o*p+a*v+l*N,s[6]=o*u+a*M+l*P,s[1]=c*y+f*g+d*D,s[4]=c*p+f*v+d*N,s[7]=c*u+f*M+d*P,s[2]=h*y+m*g+_*D,s[5]=h*p+m*v+_*N,s[8]=h*u+m*M+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,m=c*s-o*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(mu.makeScale(e,n)),this}rotate(e){return this.premultiply(mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mu=new tt;function K0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Jl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function mE(){const t=Jl("canvas");return t.style.display="block",t}const fm={};function Gr(t){t in fm||(fm[t]=!0,console.warn(t))}const dm=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hm=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),La={[Ii]:{transfer:ql,primaries:Kl,toReference:t=>t,fromReference:t=>t},[Xt]:{transfer:vt,primaries:Kl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[wc]:{transfer:ql,primaries:Zl,toReference:t=>t.applyMatrix3(hm),fromReference:t=>t.applyMatrix3(dm)},[rh]:{transfer:vt,primaries:Zl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(hm),fromReference:t=>t.applyMatrix3(dm).convertLinearToSRGB()}},gE=new Set([Ii,wc]),ht={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!gE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=La[e].toReference,r=La[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return La[t].primaries},getTransfer:function(t){return t===zn?ql:La[t].transfer}};function Hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ts;class Z0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=Jl("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hs(n[i]/255)*255):n[i]=Hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vE=0;class Q0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vu(r[o].image)):s.push(vu(r[o]))}else s=vu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function vu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Z0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _E=0;class hn extends oo{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=ti,r=ti,s=gn,o=Fr,a=ni,l=dr,c=hn.DEFAULT_ANISOTROPY,f=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=hr(),this.name="",this.source=new Q0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Hr?Xt:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qf:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qf:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xt?Hr:$0}set encoding(e){Gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hr?Xt:zn}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=z0;hn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],_=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(m+1)/2,D=(u+1)/2,N=(f+h)/4,P=(d+y)/4,H=(_+p)/4;return v>M&&v>D?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=N/i,s=P/i):M>D?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=N/r,s=H/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=P/s,r=H/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-_)*(p-_)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(d-y)/g,this.z=(h-f)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yE extends oo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hr?Xt:zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Q0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends yE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class J0 extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xE extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==h||c!==m||f!==_){let p=1-a;const u=l*h+c*m+f*_+d*y,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const D=Math.sqrt(v),N=Math.atan2(D,u*g);p=Math.sin(p*N)/D,a=Math.sin(a*N)/D}const M=a*g;if(l=l*p+h*M,c=c*p+m*M,f=f*p+_*M,d=d*p+y*M,p===1-a){const D=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=D,c*=D,f*=D,d*=D}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+f*d+l*m-c*h,e[n+1]=l*_+f*h+c*d-a*m,e[n+2]=c*_+f*m+a*h-l*d,e[n+3]=f*_-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"YXZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"ZXY":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"ZYX":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"YZX":this._x=h*f*d+c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d-h*m*_;break;case"XZY":this._x=h*f*d-c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _u.copy(this).projectOnVector(e),this.sub(_u)}reflect(e){return this.sub(_u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(_n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _u=new G,pm=new qr;class fa{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Na.copy(i.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),Ia.subVectors(this.max,yo),ns.subVectors(e.a,yo),is.subVectors(e.b,yo),rs.subVectors(e.c,yo),Bi.subVectors(is,ns),Hi.subVectors(rs,is),Er.subVectors(ns,rs);let n=[0,-Bi.z,Bi.y,0,-Hi.z,Hi.y,0,-Er.z,Er.y,Bi.z,0,-Bi.x,Hi.z,0,-Hi.x,Er.z,0,-Er.x,-Bi.y,Bi.x,0,-Hi.y,Hi.x,0,-Er.y,Er.x,0];return!yu(n,ns,is,rs,Ia)||(n=[1,0,0,0,1,0,0,0,1],!yu(n,ns,is,rs,Ia))?!1:(Da.crossVectors(Bi,Hi),n=[Da.x,Da.y,Da.z],yu(n,ns,is,rs,Ia))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new G,new G,new G,new G,new G,new G,new G,new G],Yn=new G,Na=new fa,ns=new G,is=new G,rs=new G,Bi=new G,Hi=new G,Er=new G,yo=new G,Ia=new G,Da=new G,wr=new G;function yu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){wr.fromArray(t,s);const a=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=n.dot(wr),f=i.dot(wr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const SE=new fa,xo=new G,xu=new G;class Tc{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):SE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);const n=xo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(xo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(xu)),this.expandByPoint(xo.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new G,Su=new G,Ua=new G,Gi=new G,Mu=new G,Fa=new G,Eu=new G;class e_{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Su.copy(e).add(n).multiplyScalar(.5),Ua.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(Su);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ua),a=Gi.dot(this.direction),l=-Gi.dot(Ua),c=Gi.lengthSq(),f=Math.abs(1-o*o);let d,h,m,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const y=1/f;d*=y,h*=y,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Su).addScaledVector(Ua,h),m}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){Mu.subVectors(n,e),Fa.subVectors(i,e),Eu.crossVectors(Mu,Fa);let o=this.direction.dot(Eu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(Fa.crossVectors(Gi,Fa));if(l<0)return null;const c=a*this.direction.dot(Mu.cross(Gi));if(c<0||l+c>o)return null;const f=-a*Gi.dot(Eu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,m,_,y,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,m,_,y,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,m,_,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=m,u[7]=_,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=m+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,_=c*f,y=c*d;n[0]=h+y*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,_=c*f,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=_*c-m,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=y-h*d,n[8]=_*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*d+_,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=o*f,n[9]=m*d-_,n[2]=_*d-m,n[6]=a*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ME,e,EE)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Vi.crossVectors(i,wn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Vi.crossVectors(i,wn)),Vi.normalize(),Oa.crossVectors(wn,Vi),r[0]=Vi.x,r[4]=Oa.x,r[8]=wn.x,r[1]=Vi.y,r[5]=Oa.y,r[9]=wn.y,r[2]=Vi.z,r[6]=Oa.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],_=i[2],y=i[6],p=i[10],u=i[14],g=i[3],v=i[7],M=i[11],D=i[15],N=r[0],P=r[4],H=r[8],ne=r[12],S=r[1],I=r[5],ee=r[9],oe=r[13],O=r[2],Q=r[6],K=r[10],re=r[14],B=r[3],W=r[7],$=r[11],ie=r[15];return s[0]=o*N+a*S+l*O+c*B,s[4]=o*P+a*I+l*Q+c*W,s[8]=o*H+a*ee+l*K+c*$,s[12]=o*ne+a*oe+l*re+c*ie,s[1]=f*N+d*S+h*O+m*B,s[5]=f*P+d*I+h*Q+m*W,s[9]=f*H+d*ee+h*K+m*$,s[13]=f*ne+d*oe+h*re+m*ie,s[2]=_*N+y*S+p*O+u*B,s[6]=_*P+y*I+p*Q+u*W,s[10]=_*H+y*ee+p*K+u*$,s[14]=_*ne+y*oe+p*re+u*ie,s[3]=g*N+v*S+M*O+D*B,s[7]=g*P+v*I+M*Q+D*W,s[11]=g*H+v*ee+M*K+D*$,s[15]=g*ne+v*oe+M*re+D*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],_=e[3],y=e[7],p=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+y*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*f-s*l*f)+p*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],_=e[12],y=e[13],p=e[14],u=e[15],g=d*p*c-y*h*c+y*l*m-a*p*m-d*l*u+a*h*u,v=_*h*c-f*p*c-_*l*m+o*p*m+f*l*u-o*h*u,M=f*y*c-_*d*c+_*a*m-o*y*m-f*a*u+o*d*u,D=_*d*l-f*y*l-_*a*h+o*y*h+f*a*p-o*d*p,N=n*g+i*v+r*M+s*D;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/N;return e[0]=g*P,e[1]=(y*h*s-d*p*s-y*r*m+i*p*m+d*r*u-i*h*u)*P,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*u+i*l*u)*P,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*P,e[4]=v*P,e[5]=(f*p*s-_*h*s+_*r*m-n*p*m-f*r*u+n*h*u)*P,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*P,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*m+n*l*m)*P,e[8]=M*P,e[9]=(_*d*s-f*y*s-_*i*m+n*y*m+f*i*u-n*d*u)*P,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*P,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*m-n*a*m)*P,e[12]=D*P,e[13]=(f*y*r-_*d*r+_*i*h-n*y*h-f*i*p+n*d*p)*P,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*p-n*a*p)*P,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,m=s*f,_=s*d,y=o*f,p=o*d,u=a*d,g=l*c,v=l*f,M=l*d,D=i.x,N=i.y,P=i.z;return r[0]=(1-(y+u))*D,r[1]=(m+M)*D,r[2]=(_-v)*D,r[3]=0,r[4]=(m-M)*N,r[5]=(1-(h+u))*N,r[6]=(p+g)*N,r[7]=0,r[8]=(_+v)*P,r[9]=(p-g)*P,r[10]=(1-(h+y))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/s,f=1/o,d=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=f,qn.elements[5]*=f,qn.elements[6]*=f,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,n.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=bi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===bi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ql)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=bi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,m=(i+r)*f;let _,y;if(a===bi)_=(o+s)*d,y=-2*d;else if(a===Ql)_=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ss=new G,qn=new Rt,ME=new G(0,0,0),EE=new G(1,1,1),Vi=new G,Oa=new G,wn=new G,mm=new Rt,gm=new qr;class da{constructor(e=0,n=0,i=0,r=da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_n(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gm.setFromEuler(this),this.setFromQuaternion(gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class t_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wE=0;const vm=new G,os=new qr,gi=new Rt,ka=new G,So=new G,TE=new G,AE=new qr,_m=new G(1,0,0),ym=new G(0,1,0),xm=new G(0,0,1),bE={type:"added"},CE={type:"removed"};class Ft extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new G,n=new da,i=new qr,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new tt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new t_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,n){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ka.copy(e):ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(So,ka,this.up):gi.lookAt(ka,So,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(gi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,TE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,AE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new G(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new G,vi=new G,wu=new G,_i=new G,as=new G,ls=new G,Sm=new G,Tu=new G,Au=new G,bu=new G;class Bn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),vi.subVectors(i,n),wu.subVectors(e,n);const o=Kn.dot(Kn),a=Kn.dot(vi),l=Kn.dot(wu),c=vi.dot(vi),f=vi.dot(wu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),vi.subVectors(e,n),Kn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Kn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;as.subVectors(r,i),ls.subVectors(s,i),Tu.subVectors(e,i);const l=as.dot(Tu),c=ls.dot(Tu);if(l<=0&&c<=0)return n.copy(i);Au.subVectors(e,r);const f=as.dot(Au),d=ls.dot(Au);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(as,o);bu.subVectors(e,s);const m=as.dot(bu),_=ls.dot(bu);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ls,a);const p=f*_-m*d;if(p<=0&&d-f>=0&&m-_>=0)return Sm.subVectors(s,r),a=(d-f)/(d-f+(m-_)),n.copy(r).addScaledVector(Sm,a);const u=1/(p+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const n_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},za={h:0,s:0,l:0};function Cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ht.workingColorSpace){return this.r=e,this.g=n,this.b=i,ht.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ht.workingColorSpace){if(e=pE(e,1),n=_n(n,0,1),i=_n(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cu(o,s,e+1/3),this.g=Cu(o,s,e),this.b=Cu(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,n=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xt){const i=n_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=gu(e.r),this.g=gu(e.g),this.b=gu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return ht.fromWorkingColorSpace(tn.copy(this),e),Math.round(_n(tn.r*255,0,255))*65536+Math.round(_n(tn.g*255,0,255))*256+Math.round(_n(tn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ht.workingColorSpace){ht.fromWorkingColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=ht.workingColorSpace){return ht.fromWorkingColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Xt){ht.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==Xt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(za);const i=pu(Wi.h,za.h,n),r=pu(Wi.s,za.s,n),s=pu(Wi.l,za.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new qe;qe.NAMES=n_;let RE=0;class Qr extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=Bs,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jf,this.blendDst=Xf,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jf&&(i.blendSrc=this.blendSrc),this.blendDst!==Xf&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class i_ extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=k0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new G,Ba=new Je;class rn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ba.fromBufferAttribute(this,n),Ba.applyMatrix3(e),this.setXY(n,Ba.x,Ba.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fi(n,this.array)),n}setX(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fi(n,this.array)),n}setY(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fi(n,this.array)),n}setW(e,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zf&&(e.usage=this.usage),e}}class r_ extends rn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class s_ extends rn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yt extends rn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let PE=0;const Un=new Rt,Ru=new Ft,cs=new G,Tn=new fa,Mo=new fa,Ht=new G;class sn extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K0(e)?s_:r_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Tn.min,Mo.min),Tn.expandByPoint(Ht),Ht.addVectors(Tn.max,Mo.max),Tn.expandByPoint(Ht)):(Tn.expandByPoint(Mo.min),Tn.expandByPoint(Mo.max))}Tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ht.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Ht.add(cs)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let S=0;S<a;S++)c[S]=new G,f[S]=new G;const d=new G,h=new G,m=new G,_=new Je,y=new Je,p=new Je,u=new G,g=new G;function v(S,I,ee){d.fromArray(r,S*3),h.fromArray(r,I*3),m.fromArray(r,ee*3),_.fromArray(o,S*2),y.fromArray(o,I*2),p.fromArray(o,ee*2),h.sub(d),m.sub(d),y.sub(_),p.sub(_);const oe=1/(y.x*p.y-p.x*y.y);isFinite(oe)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(oe),g.copy(m).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(oe),c[S].add(u),c[I].add(u),c[ee].add(u),f[S].add(g),f[I].add(g),f[ee].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let S=0,I=M.length;S<I;++S){const ee=M[S],oe=ee.start,O=ee.count;for(let Q=oe,K=oe+O;Q<K;Q+=3)v(i[Q+0],i[Q+1],i[Q+2])}const D=new G,N=new G,P=new G,H=new G;function ne(S){P.fromArray(s,S*3),H.copy(P);const I=c[S];D.copy(I),D.sub(P.multiplyScalar(P.dot(I))).normalize(),N.crossVectors(H,I);const oe=N.dot(f[S])<0?-1:1;l[S*4]=D.x,l[S*4+1]=D.y,l[S*4+2]=D.z,l[S*4+3]=oe}for(let S=0,I=M.length;S<I;++S){const ee=M[S],oe=ee.start,O=ee.count;for(let Q=oe,K=oe+O;Q<K;Q+=3)ne(i[Q+0]),ne(i[Q+1]),ne(i[Q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,f=new G,d=new G;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let u=0;u<f;u++)h[_++]=c[m++]}return new rn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mm=new Rt,Tr=new e_,Ha=new Tc,Em=new G,us=new G,fs=new G,ds=new G,Pu=new G,Ga=new G,Va=new Je,Wa=new Je,ja=new Je,wm=new G,Tm=new G,Am=new G,Xa=new G,$a=new G;class Gn extends Ft{constructor(e=new sn,n=new i_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ga.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Pu.fromBufferAttribute(d,e),o?Ga.addScaledVector(Pu,f):Ga.addScaledVector(Pu.sub(n),f))}n.add(Ga)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(Ha.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Ha,Em)===null||Tr.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Mm.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(Mm),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,D=v;M<D;M+=3){const N=a.getX(M),P=a.getX(M+1),H=a.getX(M+2);r=Ya(this,u,e,i,c,f,d,N,P,H),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=_,u=y;p<u;p+=3){const g=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);r=Ya(this,o,e,i,c,f,d,g,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,D=v;M<D;M+=3){const N=M,P=M+1,H=M+2;r=Ya(this,u,e,i,c,f,d,N,P,H),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,u=y;p<u;p+=3){const g=p,v=p+1,M=p+2;r=Ya(this,o,e,i,c,f,d,g,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function LE(t,e,n,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gr,a),l===null)return null;$a.copy(a),$a.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($a);return c<n.near||c>n.far?null:{distance:c,point:$a.clone(),object:t}}function Ya(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,us),t.getVertexPosition(l,fs),t.getVertexPosition(c,ds);const f=LE(t,e,n,i,us,fs,ds,Xa);if(f){r&&(Va.fromBufferAttribute(r,a),Wa.fromBufferAttribute(r,l),ja.fromBufferAttribute(r,c),f.uv=Bn.getInterpolation(Xa,us,fs,ds,Va,Wa,ja,new Je)),s&&(Va.fromBufferAttribute(s,a),Wa.fromBufferAttribute(s,l),ja.fromBufferAttribute(s,c),f.uv1=Bn.getInterpolation(Xa,us,fs,ds,Va,Wa,ja,new Je),f.uv2=f.uv1),o&&(wm.fromBufferAttribute(o,a),Tm.fromBufferAttribute(o,l),Am.fromBufferAttribute(o,c),f.normal=Bn.getInterpolation(Xa,us,fs,ds,wm,Tm,Am,new G),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new G,materialIndex:0};Bn.getNormal(us,fs,ds,d.normal),f.face=d}return f}class ha extends sn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function _(y,p,u,g,v,M,D,N,P,H,ne){const S=M/P,I=D/H,ee=M/2,oe=D/2,O=N/2,Q=P+1,K=H+1;let re=0,B=0;const W=new G;for(let $=0;$<K;$++){const ie=$*I-oe;for(let fe=0;fe<Q;fe++){const Fe=fe*S-ee;W[y]=Fe*g,W[p]=ie*v,W[u]=O,c.push(W.x,W.y,W.z),W[y]=0,W[p]=0,W[u]=N>0?1:-1,f.push(W.x,W.y,W.z),d.push(fe/P),d.push(1-$/H),re+=1}}for(let $=0;$<H;$++)for(let ie=0;ie<P;ie++){const fe=h+ie+Q*$,Fe=h+ie+Q*($+1),q=h+(ie+1)+Q*($+1),se=h+(ie+1)+Q*$;l.push(fe,Fe,se),l.push(Fe,q,se),B+=6}a.addGroup(m,B,ne),m+=B,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=Js(t[n]);for(const r in i)e[r]=i[r]}return e}function NE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function o_(t){return t.getRenderTarget()===null?t.outputColorSpace:ht.workingColorSpace}const IE={clone:Js,merge:cn};var DE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DE,this.fragmentShader=UE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=NE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class a_ extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new G,bm=new Je,Cm=new Je;class kn extends a_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jf*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,bm,Cm),n.subVectors(Cm,bm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const hs=-90,ps=1;class FE extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(hs,ps,e,n);r.layers=this.layers,this.add(r);const s=new kn(hs,ps,e,n);s.layers=this.layers,this.add(s);const o=new kn(hs,ps,e,n);o.layers=this.layers,this.add(o);const a=new kn(hs,ps,e,n);a.layers=this.layers,this.add(a);const l=new kn(hs,ps,e,n);l.layers=this.layers,this.add(l);const c=new kn(hs,ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ql)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class l_ extends hn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ks,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OE extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hr?Xt:zn),this.texture=new l_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ha(5,5,5),s=new vr({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:ur});s.uniforms.tEquirect.value=n;const o=new Gn(r,s),a=n.minFilter;return n.minFilter===Fr&&(n.minFilter=gn),new FE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Lu=new G,kE=new G,zE=new tt;class Rr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lu.subVectors(i,n).cross(kE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||zE.getNormalMatrix(e),r=this.coplanarPoint(Lu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new Tc,qa=new G;class sh{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,s=new Rr,o=new Rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],_=r[9],y=r[10],p=r[11],u=r[12],g=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-m,M-u).normalize(),i[1].setComponents(l+s,h+c,p+m,M+u).normalize(),i[2].setComponents(l+o,h+f,p+_,M+g).normalize(),i[3].setComponents(l-o,h-f,p-_,M-g).normalize(),i[4].setComponents(l-a,h-d,p-y,M-v).normalize(),n===bi)i[5].setComponents(l+a,h+d,p+y,M+v).normalize();else if(n===Ql)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(qa.x=r.normal.x>0?e.max.x:e.min.x,qa.y=r.normal.y>0?e.max.y:e.min.y,qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function c_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function BE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,m=d.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,d){const h=f.array,m=f._updateRange,_=f.updateRanges;if(t.bindBuffer(d,c),m.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let y=0,p=_.length;y<p;y++){const u=_[y];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:l}}class eo extends sn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,m=[],_=[],y=[],p=[];for(let u=0;u<f;u++){const g=u*h-o;for(let v=0;v<c;v++){const M=v*d-s;_.push(M,-g,0),y.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,M=g+c*(u+1),D=g+1+c*(u+1),N=g+1+c*u;m.push(v,M,N),m.push(M,D,N)}this.setIndex(m),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.widthSegments,e.heightSegments)}}var HE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GE=`#ifdef USE_ALPHAHASH
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
#endif`,VE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$E=`#ifdef USE_AOMAP
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
#endif`,YE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
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
#endif`,KE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ZE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ew=`#ifdef USE_IRIDESCENCE
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
#endif`,tw=`#ifdef USE_BUMPMAP
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
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ow=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uw=`#define PI 3.141592653589793
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
} // validated`,fw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dw=`vec3 transformedNormal = objectNormal;
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
#endif`,hw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vw="gl_FragColor = linearToOutputTexel( gl_FragColor );",_w=`
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
}`,yw=`#ifdef USE_ENVMAP
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
#endif`,xw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sw=`#ifdef USE_ENVMAP
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
#endif`,Mw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ew=`#ifdef USE_ENVMAP
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
#endif`,ww=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Aw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cw=`#ifdef USE_GRADIENTMAP
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
}`,Rw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iw=`uniform bool receiveShadow;
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
#endif`,Dw=`#ifdef USE_ENVMAP
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
#endif`,Uw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zw=`PhysicalMaterial material;
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
#endif`,Bw=`struct PhysicalMaterial {
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
}`,Hw=`
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
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ww=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$w=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zw=`#if defined( USE_POINTS_UV )
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
#endif`,Qw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tT=`#ifdef USE_MORPHNORMALS
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
#endif`,nT=`#ifdef USE_MORPHTARGETS
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
#endif`,iT=`#ifdef USE_MORPHTARGETS
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
#endif`,rT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cT=`#ifdef USE_NORMALMAP
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
#endif`,uT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_T=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ST=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ET=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TT=`float getShadowMask() {
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
}`,AT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bT=`#ifdef USE_SKINNING
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
#endif`,CT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RT=`#ifdef USE_SKINNING
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
#endif`,PT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DT=`#ifdef USE_TRANSMISSION
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
#endif`,UT=`#ifdef USE_TRANSMISSION
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
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HT=`uniform sampler2D t2D;
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
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XT=`#include <common>
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
}`,$T=`#if DEPTH_PACKING == 3200
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
}`,YT=`#define DISTANCE
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
}`,qT=`#define DISTANCE
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
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`uniform float scale;
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
}`,JT=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#define LAMBERT
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
}`,i1=`#define LAMBERT
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
}`,r1=`#define MATCAP
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
}`,s1=`#define MATCAP
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
}`,o1=`#define NORMAL
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
}`,a1=`#define NORMAL
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
}`,l1=`#define PHONG
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
}`,c1=`#define PHONG
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
}`,u1=`#define STANDARD
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
}`,f1=`#define STANDARD
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
}`,d1=`#define TOON
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
}`,h1=`#define TOON
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
}`,p1=`uniform float size;
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#include <common>
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
}`,v1=`uniform vec3 color;
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
}`,_1=`uniform float rotation;
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
}`,y1=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:HE,alphahash_pars_fragment:GE,alphamap_fragment:VE,alphamap_pars_fragment:WE,alphatest_fragment:jE,alphatest_pars_fragment:XE,aomap_fragment:$E,aomap_pars_fragment:YE,batching_pars_vertex:qE,batching_vertex:KE,begin_vertex:ZE,beginnormal_vertex:QE,bsdfs:JE,iridescence_fragment:ew,bumpmap_pars_fragment:tw,clipping_planes_fragment:nw,clipping_planes_pars_fragment:iw,clipping_planes_pars_vertex:rw,clipping_planes_vertex:sw,color_fragment:ow,color_pars_fragment:aw,color_pars_vertex:lw,color_vertex:cw,common:uw,cube_uv_reflection_fragment:fw,defaultnormal_vertex:dw,displacementmap_pars_vertex:hw,displacementmap_vertex:pw,emissivemap_fragment:mw,emissivemap_pars_fragment:gw,colorspace_fragment:vw,colorspace_pars_fragment:_w,envmap_fragment:yw,envmap_common_pars_fragment:xw,envmap_pars_fragment:Sw,envmap_pars_vertex:Mw,envmap_physical_pars_fragment:Dw,envmap_vertex:Ew,fog_vertex:ww,fog_pars_vertex:Tw,fog_fragment:Aw,fog_pars_fragment:bw,gradientmap_pars_fragment:Cw,lightmap_fragment:Rw,lightmap_pars_fragment:Pw,lights_lambert_fragment:Lw,lights_lambert_pars_fragment:Nw,lights_pars_begin:Iw,lights_toon_fragment:Uw,lights_toon_pars_fragment:Fw,lights_phong_fragment:Ow,lights_phong_pars_fragment:kw,lights_physical_fragment:zw,lights_physical_pars_fragment:Bw,lights_fragment_begin:Hw,lights_fragment_maps:Gw,lights_fragment_end:Vw,logdepthbuf_fragment:Ww,logdepthbuf_pars_fragment:jw,logdepthbuf_pars_vertex:Xw,logdepthbuf_vertex:$w,map_fragment:Yw,map_pars_fragment:qw,map_particle_fragment:Kw,map_particle_pars_fragment:Zw,metalnessmap_fragment:Qw,metalnessmap_pars_fragment:Jw,morphcolor_vertex:eT,morphnormal_vertex:tT,morphtarget_pars_vertex:nT,morphtarget_vertex:iT,normal_fragment_begin:rT,normal_fragment_maps:sT,normal_pars_fragment:oT,normal_pars_vertex:aT,normal_vertex:lT,normalmap_pars_fragment:cT,clearcoat_normal_fragment_begin:uT,clearcoat_normal_fragment_maps:fT,clearcoat_pars_fragment:dT,iridescence_pars_fragment:hT,opaque_fragment:pT,packing:mT,premultiplied_alpha_fragment:gT,project_vertex:vT,dithering_fragment:_T,dithering_pars_fragment:yT,roughnessmap_fragment:xT,roughnessmap_pars_fragment:ST,shadowmap_pars_fragment:MT,shadowmap_pars_vertex:ET,shadowmap_vertex:wT,shadowmask_pars_fragment:TT,skinbase_vertex:AT,skinning_pars_vertex:bT,skinning_vertex:CT,skinnormal_vertex:RT,specularmap_fragment:PT,specularmap_pars_fragment:LT,tonemapping_fragment:NT,tonemapping_pars_fragment:IT,transmission_fragment:DT,transmission_pars_fragment:UT,uv_pars_fragment:FT,uv_pars_vertex:OT,uv_vertex:kT,worldpos_vertex:zT,background_vert:BT,background_frag:HT,backgroundCube_vert:GT,backgroundCube_frag:VT,cube_vert:WT,cube_frag:jT,depth_vert:XT,depth_frag:$T,distanceRGBA_vert:YT,distanceRGBA_frag:qT,equirect_vert:KT,equirect_frag:ZT,linedashed_vert:QT,linedashed_frag:JT,meshbasic_vert:e1,meshbasic_frag:t1,meshlambert_vert:n1,meshlambert_frag:i1,meshmatcap_vert:r1,meshmatcap_frag:s1,meshnormal_vert:o1,meshnormal_frag:a1,meshphong_vert:l1,meshphong_frag:c1,meshphysical_vert:u1,meshphysical_frag:f1,meshtoon_vert:d1,meshtoon_frag:h1,points_vert:p1,points_frag:m1,shadow_vert:g1,shadow_frag:v1,sprite_vert:_1,sprite_frag:y1},ye={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ci={basic:{uniforms:cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:cn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:cn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:cn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:cn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:cn([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:cn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:cn([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:cn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:cn([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:cn([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:cn([ye.lights,ye.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ci.physical={uniforms:cn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ka={r:0,b:0,g:0};function x1(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,f,d=null,h=0,m=null;function _(p,u){let g=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),g=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ec)?(f===void 0&&(f=new Gn(new ha(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:Js(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,N,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=ht.getTransfer(v.colorSpace)!==vt,(d!==v||h!==v.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Gn(new eo(2,2),new vr({name:"BackgroundMaterial",uniforms:Js(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ht.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(Ka,o_(t)),i.buffers.color.setClear(Ka.r,Ka.g,Ka.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:_}}function S1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function d(O,Q,K,re,B){let W=!1;if(o){const $=y(re,K,Q);c!==$&&(c=$,m(c.object)),W=u(O,re,K,B),W&&g(O,re,K,B)}else{const $=Q.wireframe===!0;(c.geometry!==re.id||c.program!==K.id||c.wireframe!==$)&&(c.geometry=re.id,c.program=K.id,c.wireframe=$,W=!0)}B!==null&&n.update(B,t.ELEMENT_ARRAY_BUFFER),(W||f)&&(f=!1,H(O,Q,K,re),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(O){return i.isWebGL2?t.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return i.isWebGL2?t.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function y(O,Q,K){const re=K.wireframe===!0;let B=a[O.id];B===void 0&&(B={},a[O.id]=B);let W=B[Q.id];W===void 0&&(W={},B[Q.id]=W);let $=W[re];return $===void 0&&($=p(h()),W[re]=$),$}function p(O){const Q=[],K=[],re=[];for(let B=0;B<r;B++)Q[B]=0,K[B]=0,re[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:K,attributeDivisors:re,object:O,attributes:{},index:null}}function u(O,Q,K,re){const B=c.attributes,W=Q.attributes;let $=0;const ie=K.getAttributes();for(const fe in ie)if(ie[fe].location>=0){const q=B[fe];let se=W[fe];if(se===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),q===void 0||q.attribute!==se||se&&q.data!==se.data)return!0;$++}return c.attributesNum!==$||c.index!==re}function g(O,Q,K,re){const B={},W=Q.attributes;let $=0;const ie=K.getAttributes();for(const fe in ie)if(ie[fe].location>=0){let q=W[fe];q===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(q=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(q=O.instanceColor));const se={};se.attribute=q,q&&q.data&&(se.data=q.data),B[fe]=se,$++}c.attributes=B,c.attributesNum=$,c.index=re}function v(){const O=c.newAttributes;for(let Q=0,K=O.length;Q<K;Q++)O[Q]=0}function M(O){D(O,0)}function D(O,Q){const K=c.newAttributes,re=c.enabledAttributes,B=c.attributeDivisors;K[O]=1,re[O]===0&&(t.enableVertexAttribArray(O),re[O]=1),B[O]!==Q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,Q),B[O]=Q)}function N(){const O=c.newAttributes,Q=c.enabledAttributes;for(let K=0,re=Q.length;K<re;K++)Q[K]!==O[K]&&(t.disableVertexAttribArray(K),Q[K]=0)}function P(O,Q,K,re,B,W,$){$===!0?t.vertexAttribIPointer(O,Q,K,B,W):t.vertexAttribPointer(O,Q,K,re,B,W)}function H(O,Q,K,re){if(i.isWebGL2===!1&&(O.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const B=re.attributes,W=K.getAttributes(),$=Q.defaultAttributeValues;for(const ie in W){const fe=W[ie];if(fe.location>=0){let Fe=B[ie];if(Fe===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(Fe=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(Fe=O.instanceColor)),Fe!==void 0){const q=Fe.normalized,se=Fe.itemSize,_e=n.get(Fe);if(_e===void 0)continue;const Ce=_e.buffer,we=_e.type,xe=_e.bytesPerElement,Be=i.isWebGL2===!0&&(we===t.INT||we===t.UNSIGNED_INT||Fe.gpuType===B0);if(Fe.isInterleavedBufferAttribute){const ke=Fe.data,V=ke.stride,bt=Fe.offset;if(ke.isInstancedInterleavedBuffer){for(let De=0;De<fe.locationSize;De++)D(fe.location+De,ke.meshPerAttribute);O.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let De=0;De<fe.locationSize;De++)M(fe.location+De);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let De=0;De<fe.locationSize;De++)P(fe.location+De,se/fe.locationSize,we,q,V*xe,(bt+se/fe.locationSize*De)*xe,Be)}else{if(Fe.isInstancedBufferAttribute){for(let ke=0;ke<fe.locationSize;ke++)D(fe.location+ke,Fe.meshPerAttribute);O.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let ke=0;ke<fe.locationSize;ke++)M(fe.location+ke);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let ke=0;ke<fe.locationSize;ke++)P(fe.location+ke,se/fe.locationSize,we,q,se*xe,se/fe.locationSize*ke*xe,Be)}}else if($!==void 0){const q=$[ie];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(fe.location,q);break;case 3:t.vertexAttrib3fv(fe.location,q);break;case 4:t.vertexAttrib4fv(fe.location,q);break;default:t.vertexAttrib1fv(fe.location,q)}}}}N()}function ne(){ee();for(const O in a){const Q=a[O];for(const K in Q){const re=Q[K];for(const B in re)_(re[B].object),delete re[B];delete Q[K]}delete a[O]}}function S(O){if(a[O.id]===void 0)return;const Q=a[O.id];for(const K in Q){const re=Q[K];for(const B in re)_(re[B].object),delete re[B];delete Q[K]}delete a[O.id]}function I(O){for(const Q in a){const K=a[Q];if(K[O.id]===void 0)continue;const re=K[O.id];for(const B in re)_(re[B].object),delete re[B];delete K[O.id]}}function ee(){oe(),f=!0,c!==l&&(c=l,m(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ee,resetDefaultState:oe,dispose:ne,releaseStatesOfGeometry:S,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:M,disableUnusedAttributes:N}}function M1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(f[_],d[_]);else{m.multiDrawArraysWEBGL(s,f,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function E1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=o||e.has("OES_texture_float"),D=v&&M,N=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:D,maxSamples:N}}function w1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Rr,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const g=s?0:i,v=g*4;let M=u.clippingState||null;l.value=M,M=f(_,h,v,m);for(let D=0;D!==v;++D)M[D]=n[D];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,_){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const u=m+y*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,M=m;v!==y;++v,M+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function T1(t){let e=new WeakMap;function n(o,a){return a===$f?o.mapping=Ks:a===Yf&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$f||a===Yf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new OE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class u_ extends a_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ns=4,Rm=[.125,.215,.35,.446,.526,.582],Nr=20,Nu=new u_,Pm=new qe;let Iu=null,Du=0,Uu=0;const Pr=(1+Math.sqrt(5))/2,ms=1/Pr,Lm=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Pr,ms),new G(0,Pr,-ms),new G(ms,0,Pr),new G(-ms,0,Pr),new G(Pr,ms,0),new G(-Pr,ms,0)];class Nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Iu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Iu,Du,Uu),e.scissorTest=!1,Za(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Iu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:sa,format:ni,colorSpace:Ii,depthBuffer:!1},r=Im(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A1(s)),this._blurMaterial=b1(s,e,n)}return r}_compileMaterial(e){const n=new Gn(this._lodPlanes[0],e);this._renderer.compile(n,Nu)}_sceneToCubeUV(e,n,i,r){const a=new kn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Pm),f.toneMapping=fr,f.autoClear=!1;const m=new i_({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),_=new Gn(new ha,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Pm),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;Za(r,g*v,u>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ks||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Za(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Nu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lm[(r-1)%Lm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Gn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Nr-1),y=s/_,p=isFinite(s)?1+Math.floor(f*y):Nr;p>Nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nr}`);const u=[];let g=0;for(let P=0;P<Nr;++P){const H=P/y,ne=Math.exp(-H*H/2);u.push(ne),P===0?g+=ne:P<p&&(g+=2*ne)}for(let P=0;P<u.length;P++)u[P]=u[P]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const M=this._sizeLods[r],D=3*M*(r>v-Ns?r-v+Ns:0),N=4*(this._cubeSize-M);Za(n,D,N,3*M,2*M),l.setRenderTarget(n),l.render(d,Nu)}}function A1(t){const e=[],n=[],i=[];let r=t;const s=t-Ns+1+Rm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ns?l=Rm[o-t+Ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,_=6,y=3,p=2,u=1,g=new Float32Array(y*_*m),v=new Float32Array(p*_*m),M=new Float32Array(u*_*m);for(let N=0;N<m;N++){const P=N%3*2/3-1,H=N>2?0:-1,ne=[P,H,0,P+2/3,H,0,P+2/3,H+1,0,P,H,0,P+2/3,H+1,0,P,H+1,0];g.set(ne,y*_*N),v.set(h,p*_*N);const S=[N,N,N,N,N,N];M.set(S,u*_*N)}const D=new sn;D.setAttribute("position",new rn(g,y)),D.setAttribute("uv",new rn(v,p)),D.setAttribute("faceIndex",new rn(M,u)),e.push(D),r>Ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Im(t,e,n){const i=new Yr(t,e,n);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Za(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function b1(t,e,n){const i=new Float32Array(Nr),r=new G(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Dm(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Um(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function oh(){return`

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
	`}function C1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$f||l===Yf,f=l===Ks||l===Zs;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Nm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new Nm(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function R1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function P1(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const y=m[_];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let v=0,M=g.length;v<M;v+=3){const D=g[v+0],N=g[v+1],P=g[v+2];h.push(D,N,N,P,P,D)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const D=v+0,N=v+1,P=v+2;h.push(D,N,N,P,P,D)}}else return;const p=new(K0(h)?s_:r_)(h,1);p.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function L1(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function f(m,_){t.drawElements(s,_,a,m*l),n.update(_,s,1)}function d(m,_,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,a,m*l,y),n.update(_,s,y)}function h(m,_,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,a,m,0,y);let u=0;for(let g=0;g<y;g++)u+=_[g];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function N1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function I1(t,e){return t[0]-e[0]}function D1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function U1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Vt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let p=s.get(f);if(p===void 0||p.count!==y){let Q=function(){oe.dispose(),s.delete(f),f.removeEventListener("dispose",Q)};var m=Q;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,D=f.morphAttributes.color!==void 0,N=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],H=f.morphAttributes.color||[];let ne=0;v===!0&&(ne=1),M===!0&&(ne=2),D===!0&&(ne=3);let S=f.attributes.position.count*ne,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const ee=new Float32Array(S*I*4*y),oe=new J0(ee,S,I,y);oe.type=Ei,oe.needsUpdate=!0;const O=ne*4;for(let K=0;K<y;K++){const re=N[K],B=P[K],W=H[K],$=S*I*4*K;for(let ie=0;ie<re.count;ie++){const fe=ie*O;v===!0&&(o.fromBufferAttribute(re,ie),ee[$+fe+0]=o.x,ee[$+fe+1]=o.y,ee[$+fe+2]=o.z,ee[$+fe+3]=0),M===!0&&(o.fromBufferAttribute(B,ie),ee[$+fe+4]=o.x,ee[$+fe+5]=o.y,ee[$+fe+6]=o.z,ee[$+fe+7]=0),D===!0&&(o.fromBufferAttribute(W,ie),ee[$+fe+8]=o.x,ee[$+fe+9]=o.y,ee[$+fe+10]=o.z,ee[$+fe+11]=W.itemSize===4?o.w:1)}}p={count:y,texture:oe,size:new Je(S,I)},s.set(f,p),f.addEventListener("dispose",Q)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const g=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let M=0;M<_;M++)y[M]=[M,0];i[f.id]=y}for(let M=0;M<_;M++){const D=y[M];D[0]=M,D[1]=h[M]}y.sort(D1);for(let M=0;M<8;M++)M<_&&y[M][1]?(a[M][0]=y[M][0],a[M][1]=y[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(I1);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let g=0;for(let M=0;M<8;M++){const D=a[M],N=D[0],P=D[1];N!==Number.MAX_SAFE_INTEGER&&P?(p&&f.getAttribute("morphTarget"+M)!==p[N]&&f.setAttribute("morphTarget"+M,p[N]),u&&f.getAttribute("morphNormal"+M)!==u[N]&&f.setAttribute("morphNormal"+M,u[N]),r[M]=P,g+=P):(p&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),u&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const v=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function F1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class f_ extends hn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Br,f!==Br&&f!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Br&&(i=er),i===void 0&&f===Qs&&(i=zr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const d_=new hn,h_=new f_(1,1);h_.compareFunction=q0;const p_=new J0,m_=new xE,g_=new l_,Fm=[],Om=[],km=new Float32Array(16),zm=new Float32Array(9),Bm=new Float32Array(4);function ao(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Fm[r];if(s===void 0&&(s=new Float32Array(r),Fm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ac(t,e){let n=Om[e];n===void 0&&(n=new Int32Array(e),Om[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function O1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function B1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function H1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Bm.set(i),t.uniformMatrix2fv(this.addr,!1,Bm),kt(n,i)}}function G1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;zm.set(i),t.uniformMatrix3fv(this.addr,!1,zm),kt(n,i)}}function V1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;km.set(i),t.uniformMatrix4fv(this.addr,!1,km),kt(n,i)}}function W1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function Y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function Q1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?h_:d_;n.setTexture2D(e||s,r)}function J1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||m_,r)}function eA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||g_,r)}function tA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||p_,r)}function nA(t){switch(t){case 5126:return O1;case 35664:return k1;case 35665:return z1;case 35666:return B1;case 35674:return H1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return W1;case 35667:case 35671:return j1;case 35668:case 35672:return X1;case 35669:case 35673:return $1;case 5125:return Y1;case 36294:return q1;case 36295:return K1;case 36296:return Z1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return tA}}function iA(t,e){t.uniform1fv(this.addr,e)}function rA(t,e){const n=ao(e,this.size,2);t.uniform2fv(this.addr,n)}function sA(t,e){const n=ao(e,this.size,3);t.uniform3fv(this.addr,n)}function oA(t,e){const n=ao(e,this.size,4);t.uniform4fv(this.addr,n)}function aA(t,e){const n=ao(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lA(t,e){const n=ao(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cA(t,e){const n=ao(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uA(t,e){t.uniform1iv(this.addr,e)}function fA(t,e){t.uniform2iv(this.addr,e)}function dA(t,e){t.uniform3iv(this.addr,e)}function hA(t,e){t.uniform4iv(this.addr,e)}function pA(t,e){t.uniform1uiv(this.addr,e)}function mA(t,e){t.uniform2uiv(this.addr,e)}function gA(t,e){t.uniform3uiv(this.addr,e)}function vA(t,e){t.uniform4uiv(this.addr,e)}function _A(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||d_,s[o])}function yA(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||m_,s[o])}function xA(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||g_,s[o])}function SA(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||p_,s[o])}function MA(t){switch(t){case 5126:return iA;case 35664:return rA;case 35665:return sA;case 35666:return oA;case 35674:return aA;case 35675:return lA;case 35676:return cA;case 5124:case 35670:return uA;case 35667:case 35671:return fA;case 35668:case 35672:return dA;case 35669:case 35673:return hA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return SA}}class EA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nA(n.type)}}class wA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MA(n.type)}}class TA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Fu=/(\w+)(\])?(\[|\.)?/g;function Hm(t,e){t.seq.push(e),t.map[e.id]=e}function AA(t,e,n){const i=t.name,r=i.length;for(Fu.lastIndex=0;;){const s=Fu.exec(i),o=Fu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hm(n,c===void 0?new EA(a,t,e):new wA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new TA(a),Hm(n,d)),n=d}}}class Sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);AA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Gm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const bA=37297;let CA=0;function RA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function PA(t){const e=ht.getPrimaries(ht.workingColorSpace),n=ht.getPrimaries(t);let i;switch(e===n?i="":e===Zl&&n===Kl?i="LinearDisplayP3ToLinearSRGB":e===Kl&&n===Zl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ii:case wc:return[i,"LinearTransferOETF"];case Xt:case rh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Vm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+RA(t.getShaderSource(e),o)}else return r}function LA(t,e){const n=PA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function NA(t,e){let n;switch(e){case WM:n="Linear";break;case jM:n="Reinhard";break;case XM:n="OptimizedCineon";break;case $M:n="ACESFilmic";break;case qM:n="AgX";break;case YM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function IA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function DA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function UA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function FA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Is(t){return t!==""}function Wm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OA=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(t){return t.replace(OA,zA)}const kA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zA(t,e){let n=Qe[e];if(n===void 0){const i=kA.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return td(n)}const BA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(t){return t.replace(BA,HA)}function HA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $m(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function GA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===F0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===O0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function VA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function jA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case k0:e="ENVMAP_BLENDING_MULTIPLY";break;case GM:e="ENVMAP_BLENDING_MIX";break;case VM:e="ENVMAP_BLENDING_ADD";break}return e}function XA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $A(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=GA(n),c=VA(n),f=WA(n),d=jA(n),h=XA(n),m=n.isWebGL2?"":IA(n),_=DA(n),y=UA(s),p=r.createProgram();let u,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Is).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Is).join(`
`),g.length>0&&(g+=`
`)):(u=[$m(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),g=[m,$m(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?Qe.tonemapping_pars_fragment:"",n.toneMapping!==fr?NA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,LA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Is).join(`
`)),o=td(o),o=Wm(o,n),o=jm(o,n),a=td(a),a=Wm(a,n),a=jm(a,n),o=Xm(o),a=Xm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=v+u+o,D=v+g+a,N=Gm(r,r.VERTEX_SHADER,M),P=Gm(r,r.FRAGMENT_SHADER,D);r.attachShader(p,N),r.attachShader(p,P),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function H(ee){if(t.debug.checkShaderErrors){const oe=r.getProgramInfoLog(p).trim(),O=r.getShaderInfoLog(N).trim(),Q=r.getShaderInfoLog(P).trim();let K=!0,re=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,N,P);else{const B=Vm(r,N,"vertex"),W=Vm(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+ee.name+`
Material Type: `+ee.type+`

Program Info Log: `+oe+`
`+B+`
`+W)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(O===""||Q==="")&&(re=!1);re&&(ee.diagnostics={runnable:K,programLog:oe,vertexShader:{log:O,prefix:u},fragmentShader:{log:Q,prefix:g}})}r.deleteShader(N),r.deleteShader(P),ne=new Sl(r,p),S=FA(r,p)}let ne;this.getUniforms=function(){return ne===void 0&&H(this),ne};let S;this.getAttributes=function(){return S===void 0&&H(this),S};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(p,bA)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=N,this.fragmentShader=P,this}let YA=0;class qA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new KA(e),n.set(e,i)),i}}class KA{constructor(e){this.id=YA++,this.code=e,this.usedTimes=0}}function ZA(t,e,n,i,r,s,o){const a=new t_,l=new qA,c=new Set,f=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return c.add(S),S===0?"uv":`uv${S}`}function u(S,I,ee,oe,O){const Q=oe.fog,K=O.geometry,re=S.isMeshStandardMaterial?oe.environment:null,B=(S.isMeshStandardMaterial?n:e).get(S.envMap||re),W=B&&B.mapping===Ec?B.image.height:null,$=y[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const ie=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,fe=ie!==void 0?ie.length:0;let Fe=0;K.morphAttributes.position!==void 0&&(Fe=1),K.morphAttributes.normal!==void 0&&(Fe=2),K.morphAttributes.color!==void 0&&(Fe=3);let q,se,_e,Ce;if($){const ve=ci[$];q=ve.vertexShader,se=ve.fragmentShader}else q=S.vertexShader,se=S.fragmentShader,l.update(S),_e=l.getVertexShaderID(S),Ce=l.getFragmentShaderID(S);const we=t.getRenderTarget(),xe=O.isInstancedMesh===!0,Be=O.isBatchedMesh===!0,ke=!!S.map,V=!!S.matcap,bt=!!B,De=!!S.aoMap,Le=!!S.lightMap,Ne=!!S.bumpMap,rt=!!S.normalMap,Ye=!!S.displacementMap,b=!!S.emissiveMap,w=!!S.metalnessMap,X=!!S.roughnessMap,de=S.anisotropy>0,ae=S.clearcoat>0,he=S.iridescence>0,Pe=S.sheen>0,Se=S.transmission>0,Te=de&&!!S.anisotropyMap,He=ae&&!!S.clearcoatMap,Xe=ae&&!!S.clearcoatNormalMap,le=ae&&!!S.clearcoatRoughnessMap,st=he&&!!S.iridescenceMap,je=he&&!!S.iridescenceThicknessMap,ze=Pe&&!!S.sheenColorMap,Ie=Pe&&!!S.sheenRoughnessMap,be=!!S.specularMap,Ge=!!S.specularColorMap,it=!!S.specularIntensityMap,We=Se&&!!S.transmissionMap,Re=Se&&!!S.thicknessMap,Ke=!!S.gradientMap,T=!!S.alphaMap,Y=S.alphaTest>0,Z=!!S.alphaHash,te=!!S.extensions;let j=fr;S.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(j=t.toneMapping);const pe={isWebGL2:d,shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:se,defines:S.defines,customVertexShaderID:_e,customFragmentShaderID:Ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Be,instancing:xe,instancingColor:xe&&O.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Ii,alphaToCoverage:!!S.alphaToCoverage,map:ke,matcap:V,envMap:bt,envMapMode:bt&&B.mapping,envMapCubeUVHeight:W,aoMap:De,lightMap:Le,bumpMap:Ne,normalMap:rt,displacementMap:m&&Ye,emissiveMap:b,normalMapObjectSpace:rt&&S.normalMapType===oE,normalMapTangentSpace:rt&&S.normalMapType===Y0,metalnessMap:w,roughnessMap:X,anisotropy:de,anisotropyMap:Te,clearcoat:ae,clearcoatMap:He,clearcoatNormalMap:Xe,clearcoatRoughnessMap:le,iridescence:he,iridescenceMap:st,iridescenceThicknessMap:je,sheen:Pe,sheenColorMap:ze,sheenRoughnessMap:Ie,specularMap:be,specularColorMap:Ge,specularIntensityMap:it,transmission:Se,transmissionMap:We,thicknessMap:Re,gradientMap:Ke,opaque:S.transparent===!1&&S.blending===Bs&&S.alphaToCoverage===!1,alphaMap:T,alphaTest:Y,alphaHash:Z,combine:S.combine,mapUv:ke&&p(S.map.channel),aoMapUv:De&&p(S.aoMap.channel),lightMapUv:Le&&p(S.lightMap.channel),bumpMapUv:Ne&&p(S.bumpMap.channel),normalMapUv:rt&&p(S.normalMap.channel),displacementMapUv:Ye&&p(S.displacementMap.channel),emissiveMapUv:b&&p(S.emissiveMap.channel),metalnessMapUv:w&&p(S.metalnessMap.channel),roughnessMapUv:X&&p(S.roughnessMap.channel),anisotropyMapUv:Te&&p(S.anisotropyMap.channel),clearcoatMapUv:He&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:je&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&p(S.sheenRoughnessMap.channel),specularMapUv:be&&p(S.specularMap.channel),specularColorMapUv:Ge&&p(S.specularColorMap.channel),specularIntensityMapUv:it&&p(S.specularIntensityMap.channel),transmissionMapUv:We&&p(S.transmissionMap.channel),thicknessMapUv:Re&&p(S.thicknessMap.channel),alphaMapUv:T&&p(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(rt||de),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(ke||T),fog:!!Q,useFog:S.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Fe,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&ee.length>0,shadowMapType:t.shadowMap.type,toneMapping:j,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ke&&S.map.isVideoTexture===!0&&ht.getTransfer(S.map.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ei,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:te&&S.extensions.derivatives===!0,extensionFragDepth:te&&S.extensions.fragDepth===!0,extensionDrawBuffers:te&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:te&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:te&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:te&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function g(S){const I=[];if(S.shaderID?I.push(S.shaderID):(I.push(S.customVertexShaderID),I.push(S.customFragmentShaderID)),S.defines!==void 0)for(const ee in S.defines)I.push(ee),I.push(S.defines[ee]);return S.isRawShaderMaterial===!1&&(v(I,S),M(I,S),I.push(t.outputColorSpace)),I.push(S.customProgramCacheKey),I.join()}function v(S,I){S.push(I.precision),S.push(I.outputColorSpace),S.push(I.envMapMode),S.push(I.envMapCubeUVHeight),S.push(I.mapUv),S.push(I.alphaMapUv),S.push(I.lightMapUv),S.push(I.aoMapUv),S.push(I.bumpMapUv),S.push(I.normalMapUv),S.push(I.displacementMapUv),S.push(I.emissiveMapUv),S.push(I.metalnessMapUv),S.push(I.roughnessMapUv),S.push(I.anisotropyMapUv),S.push(I.clearcoatMapUv),S.push(I.clearcoatNormalMapUv),S.push(I.clearcoatRoughnessMapUv),S.push(I.iridescenceMapUv),S.push(I.iridescenceThicknessMapUv),S.push(I.sheenColorMapUv),S.push(I.sheenRoughnessMapUv),S.push(I.specularMapUv),S.push(I.specularColorMapUv),S.push(I.specularIntensityMapUv),S.push(I.transmissionMapUv),S.push(I.thicknessMapUv),S.push(I.combine),S.push(I.fogExp2),S.push(I.sizeAttenuation),S.push(I.morphTargetsCount),S.push(I.morphAttributeCount),S.push(I.numDirLights),S.push(I.numPointLights),S.push(I.numSpotLights),S.push(I.numSpotLightMaps),S.push(I.numHemiLights),S.push(I.numRectAreaLights),S.push(I.numDirLightShadows),S.push(I.numPointLightShadows),S.push(I.numSpotLightShadows),S.push(I.numSpotLightShadowsWithMaps),S.push(I.numLightProbes),S.push(I.shadowMapType),S.push(I.toneMapping),S.push(I.numClippingPlanes),S.push(I.numClipIntersection),S.push(I.depthPacking)}function M(S,I){a.disableAll(),I.isWebGL2&&a.enable(0),I.supportsVertexTextures&&a.enable(1),I.instancing&&a.enable(2),I.instancingColor&&a.enable(3),I.matcap&&a.enable(4),I.envMap&&a.enable(5),I.normalMapObjectSpace&&a.enable(6),I.normalMapTangentSpace&&a.enable(7),I.clearcoat&&a.enable(8),I.iridescence&&a.enable(9),I.alphaTest&&a.enable(10),I.vertexColors&&a.enable(11),I.vertexAlphas&&a.enable(12),I.vertexUv1s&&a.enable(13),I.vertexUv2s&&a.enable(14),I.vertexUv3s&&a.enable(15),I.vertexTangents&&a.enable(16),I.anisotropy&&a.enable(17),I.alphaHash&&a.enable(18),I.batching&&a.enable(19),S.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.skinning&&a.enable(4),I.morphTargets&&a.enable(5),I.morphNormals&&a.enable(6),I.morphColors&&a.enable(7),I.premultipliedAlpha&&a.enable(8),I.shadowMapEnabled&&a.enable(9),I.useLegacyLights&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),I.alphaToCoverage&&a.enable(20),S.push(a.mask)}function D(S){const I=y[S.type];let ee;if(I){const oe=ci[I];ee=IE.clone(oe.uniforms)}else ee=S.uniforms;return ee}function N(S,I){let ee;for(let oe=0,O=f.length;oe<O;oe++){const Q=f[oe];if(Q.cacheKey===I){ee=Q,++ee.usedTimes;break}}return ee===void 0&&(ee=new $A(t,I,S,s),f.push(ee)),ee}function P(S){if(--S.usedTimes===0){const I=f.indexOf(S);f[I]=f[f.length-1],f.pop(),S.destroy()}}function H(S){l.remove(S)}function ne(){l.dispose()}return{getParameters:u,getProgramCacheKey:g,getUniforms:D,acquireProgram:N,releaseProgram:P,releaseShaderCache:H,programs:f,dispose:ne}}function QA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function JA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ym(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,_,y,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:y,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=y,u.group=p),e++,u}function a(d,h,m,_,y,p){const u=o(d,h,m,_,y,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,h,m,_,y,p){const u=o(d,h,m,_,y,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||JA),i.length>1&&i.sort(h||Ym),r.length>1&&r.sort(h||Ym)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function eb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new qm,t.set(i,[o])):r>=s.length?(o=new qm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function tb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new qe};break;case"SpotLight":n={position:new G,direction:new G,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function nb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ib=0;function rb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sb(t,e){const n=new tb,i=nb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new G);const s=new G,o=new Rt,a=new Rt;function l(f,d){let h=0,m=0,_=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let y=0,p=0,u=0,g=0,v=0,M=0,D=0,N=0,P=0,H=0,ne=0;f.sort(rb);const S=d===!0?Math.PI:1;for(let ee=0,oe=f.length;ee<oe;ee++){const O=f[ee],Q=O.color,K=O.intensity,re=O.distance,B=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=Q.r*K*S,m+=Q.g*K*S,_+=Q.b*K*S;else if(O.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(O.sh.coefficients[W],K);ne++}else if(O.isDirectionalLight){const W=n.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const $=O.shadow,ie=i.get(O);ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,r.directionalShadow[y]=ie,r.directionalShadowMap[y]=B,r.directionalShadowMatrix[y]=O.shadow.matrix,M++}r.directional[y]=W,y++}else if(O.isSpotLight){const W=n.get(O);W.position.setFromMatrixPosition(O.matrixWorld),W.color.copy(Q).multiplyScalar(K*S),W.distance=re,W.coneCos=Math.cos(O.angle),W.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),W.decay=O.decay,r.spot[u]=W;const $=O.shadow;if(O.map&&(r.spotLightMap[P]=O.map,P++,$.updateMatrices(O),O.castShadow&&H++),r.spotLightMatrix[u]=$.matrix,O.castShadow){const ie=i.get(O);ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,r.spotShadow[u]=ie,r.spotShadowMap[u]=B,N++}u++}else if(O.isRectAreaLight){const W=n.get(O);W.color.copy(Q).multiplyScalar(K),W.halfWidth.set(O.width*.5,0,0),W.halfHeight.set(0,O.height*.5,0),r.rectArea[g]=W,g++}else if(O.isPointLight){const W=n.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity*S),W.distance=O.distance,W.decay=O.decay,O.castShadow){const $=O.shadow,ie=i.get(O);ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,ie.shadowCameraNear=$.camera.near,ie.shadowCameraFar=$.camera.far,r.pointShadow[p]=ie,r.pointShadowMap[p]=B,r.pointShadowMatrix[p]=O.shadow.matrix,D++}r.point[p]=W,p++}else if(O.isHemisphereLight){const W=n.get(O);W.skyColor.copy(O.color).multiplyScalar(K*S),W.groundColor.copy(O.groundColor).multiplyScalar(K*S),r.hemi[v]=W,v++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const I=r.hash;(I.directionalLength!==y||I.pointLength!==p||I.spotLength!==u||I.rectAreaLength!==g||I.hemiLength!==v||I.numDirectionalShadows!==M||I.numPointShadows!==D||I.numSpotShadows!==N||I.numSpotMaps!==P||I.numLightProbes!==ne)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=N+P-H,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=ne,I.directionalLength=y,I.pointLength=p,I.spotLength=u,I.rectAreaLength=g,I.hemiLength=v,I.numDirectionalShadows=M,I.numPointShadows=D,I.numSpotShadows=N,I.numSpotMaps=P,I.numLightProbes=ne,r.version=ib++)}function c(f,d){let h=0,m=0,_=0,y=0,p=0;const u=d.matrixWorldInverse;for(let g=0,v=f.length;g<v;g++){const M=f[g];if(M.isDirectionalLight){const D=r.directional[h];D.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(u),h++}else if(M.isSpotLight){const D=r.spot[_];D.position.setFromMatrixPosition(M.matrixWorld),D.position.applyMatrix4(u),D.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(u),_++}else if(M.isRectAreaLight){const D=r.rectArea[y];D.position.setFromMatrixPosition(M.matrixWorld),D.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),D.halfWidth.set(M.width*.5,0,0),D.halfHeight.set(0,M.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const D=r.point[m];D.position.setFromMatrixPosition(M.matrixWorld),D.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const D=r.hemi[p];D.direction.setFromMatrixPosition(M.matrixWorld),D.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Km(t,e){const n=new sb(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ob(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Km(t,e),n.set(s,[l])):o>=a.length?(l=new Km(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class ab extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lb extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
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
}`;function fb(t,e,n){let i=new sh;const r=new Je,s=new Je,o=new Vt,a=new ab({depthPacking:sE}),l=new lb,c={},f=n.maxTextureSize,d={[gr]:En,[En]:gr,[ei]:ei},h=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:cb,fragmentShader:ub}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Gn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F0;let u=this.type;this.render=function(N,P,H){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||N.length===0)return;const ne=t.getRenderTarget(),S=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),ee=t.state;ee.setBlending(ur),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const oe=u!==yi&&this.type===yi,O=u===yi&&this.type!==yi;for(let Q=0,K=N.length;Q<K;Q++){const re=N[Q],B=re.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const W=B.getFrameExtents();if(r.multiply(W),s.copy(B.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/W.x),r.x=s.x*W.x,B.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/W.y),r.y=s.y*W.y,B.mapSize.y=s.y)),B.map===null||oe===!0||O===!0){const ie=this.type!==yi?{minFilter:fn,magFilter:fn}:{};B.map!==null&&B.map.dispose(),B.map=new Yr(r.x,r.y,ie),B.map.texture.name=re.name+".shadowMap",B.camera.updateProjectionMatrix()}t.setRenderTarget(B.map),t.clear();const $=B.getViewportCount();for(let ie=0;ie<$;ie++){const fe=B.getViewport(ie);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),ee.viewport(o),B.updateMatrices(re,ie),i=B.getFrustum(),M(P,H,B.camera,re,this.type)}B.isPointLightShadow!==!0&&this.type===yi&&g(B,H),B.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(ne,S,I)};function g(N,P){const H=e.update(y);h.defines.VSM_SAMPLES!==N.blurSamples&&(h.defines.VSM_SAMPLES=N.blurSamples,m.defines.VSM_SAMPLES=N.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Yr(r.x,r.y)),h.uniforms.shadow_pass.value=N.map.texture,h.uniforms.resolution.value=N.mapSize,h.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(P,null,H,h,y,null),m.uniforms.shadow_pass.value=N.mapPass.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(P,null,H,m,y,null)}function v(N,P,H,ne){let S=null;const I=H.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(I!==void 0)S=I;else if(S=H.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ee=S.uuid,oe=P.uuid;let O=c[ee];O===void 0&&(O={},c[ee]=O);let Q=O[oe];Q===void 0&&(Q=S.clone(),O[oe]=Q,P.addEventListener("dispose",D)),S=Q}if(S.visible=P.visible,S.wireframe=P.wireframe,ne===yi?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,H.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const ee=t.properties.get(S);ee.light=H}return S}function M(N,P,H,ne,S){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&S===yi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,N.matrixWorld);const oe=e.update(N),O=N.material;if(Array.isArray(O)){const Q=oe.groups;for(let K=0,re=Q.length;K<re;K++){const B=Q[K],W=O[B.materialIndex];if(W&&W.visible){const $=v(N,W,ne,S);N.onBeforeShadow(t,N,P,H,oe,$,B),t.renderBufferDirect(H,null,oe,$,N,B),N.onAfterShadow(t,N,P,H,oe,$,B)}}}else if(O.visible){const Q=v(N,O,ne,S);N.onBeforeShadow(t,N,P,H,oe,Q,null),t.renderBufferDirect(H,null,oe,Q,N,null),N.onAfterShadow(t,N,P,H,oe,Q,null)}}const ee=N.children;for(let oe=0,O=ee.length;oe<O;oe++)M(ee[oe],P,H,ne,S)}function D(N){N.target.removeEventListener("dispose",D);for(const H in c){const ne=c[H],S=N.target.uuid;S in ne&&(ne[S].dispose(),delete ne[S])}}}function db(t,e,n){const i=n.isWebGL2;function r(){let T=!1;const Y=new Vt;let Z=null;const te=new Vt(0,0,0,0);return{setMask:function(j){Z!==j&&!T&&(t.colorMask(j,j,j,j),Z=j)},setLocked:function(j){T=j},setClear:function(j,pe,ve,Ee,lt){lt===!0&&(j*=Ee,pe*=Ee,ve*=Ee),Y.set(j,pe,ve,Ee),te.equals(Y)===!1&&(t.clearColor(j,pe,ve,Ee),te.copy(Y))},reset:function(){T=!1,Z=null,te.set(-1,0,0,0)}}}function s(){let T=!1,Y=null,Z=null,te=null;return{setTest:function(j){j?xe(t.DEPTH_TEST):Be(t.DEPTH_TEST)},setMask:function(j){Y!==j&&!T&&(t.depthMask(j),Y=j)},setFunc:function(j){if(Z!==j){switch(j){case UM:t.depthFunc(t.NEVER);break;case FM:t.depthFunc(t.ALWAYS);break;case OM:t.depthFunc(t.LESS);break;case Yl:t.depthFunc(t.LEQUAL);break;case kM:t.depthFunc(t.EQUAL);break;case zM:t.depthFunc(t.GEQUAL);break;case BM:t.depthFunc(t.GREATER);break;case HM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=j}},setLocked:function(j){T=j},setClear:function(j){te!==j&&(t.clearDepth(j),te=j)},reset:function(){T=!1,Y=null,Z=null,te=null}}}function o(){let T=!1,Y=null,Z=null,te=null,j=null,pe=null,ve=null,Ee=null,lt=null;return{setTest:function(Oe){T||(Oe?xe(t.STENCIL_TEST):Be(t.STENCIL_TEST))},setMask:function(Oe){Y!==Oe&&!T&&(t.stencilMask(Oe),Y=Oe)},setFunc:function(Oe,$e,ut){(Z!==Oe||te!==$e||j!==ut)&&(t.stencilFunc(Oe,$e,ut),Z=Oe,te=$e,j=ut)},setOp:function(Oe,$e,ut){(pe!==Oe||ve!==$e||Ee!==ut)&&(t.stencilOp(Oe,$e,ut),pe=Oe,ve=$e,Ee=ut)},setLocked:function(Oe){T=Oe},setClear:function(Oe){lt!==Oe&&(t.clearStencil(Oe),lt=Oe)},reset:function(){T=!1,Y=null,Z=null,te=null,j=null,pe=null,ve=null,Ee=null,lt=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,y=[],p=null,u=!1,g=null,v=null,M=null,D=null,N=null,P=null,H=null,ne=new qe(0,0,0),S=0,I=!1,ee=null,oe=null,O=null,Q=null,K=null;const re=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),B=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=W>=2);let ie=null,fe={};const Fe=t.getParameter(t.SCISSOR_BOX),q=t.getParameter(t.VIEWPORT),se=new Vt().fromArray(Fe),_e=new Vt().fromArray(q);function Ce(T,Y,Z,te){const j=new Uint8Array(4),pe=t.createTexture();t.bindTexture(T,pe),t.texParameteri(T,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(T,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ve=0;ve<Z;ve++)i&&(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)?t.texImage3D(Y,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,j):t.texImage2D(Y+ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,j);return pe}const we={};we[t.TEXTURE_2D]=Ce(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=Ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[t.TEXTURE_2D_ARRAY]=Ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=Ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(t.DEPTH_TEST),l.setFunc(Yl),Ye(!1),b(Pp),xe(t.CULL_FACE),Ne(ur);function xe(T){h[T]!==!0&&(t.enable(T),h[T]=!0)}function Be(T){h[T]!==!1&&(t.disable(T),h[T]=!1)}function ke(T,Y){return m[T]!==Y?(t.bindFramebuffer(T,Y),m[T]=Y,i&&(T===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=Y),T===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=Y)),!0):!1}function V(T,Y){let Z=y,te=!1;if(T)if(Z=_.get(Y),Z===void 0&&(Z=[],_.set(Y,Z)),T.isWebGLMultipleRenderTargets){const j=T.texture;if(Z.length!==j.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,ve=j.length;pe<ve;pe++)Z[pe]=t.COLOR_ATTACHMENT0+pe;Z.length=j.length,te=!0}}else Z[0]!==t.COLOR_ATTACHMENT0&&(Z[0]=t.COLOR_ATTACHMENT0,te=!0);else Z[0]!==t.BACK&&(Z[0]=t.BACK,te=!0);te&&(n.isWebGL2?t.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function bt(T){return p!==T?(t.useProgram(T),p=T,!0):!1}const De={[Lr]:t.FUNC_ADD,[xM]:t.FUNC_SUBTRACT,[SM]:t.FUNC_REVERSE_SUBTRACT};if(i)De[Dp]=t.MIN,De[Up]=t.MAX;else{const T=e.get("EXT_blend_minmax");T!==null&&(De[Dp]=T.MIN_EXT,De[Up]=T.MAX_EXT)}const Le={[MM]:t.ZERO,[EM]:t.ONE,[wM]:t.SRC_COLOR,[jf]:t.SRC_ALPHA,[PM]:t.SRC_ALPHA_SATURATE,[CM]:t.DST_COLOR,[AM]:t.DST_ALPHA,[TM]:t.ONE_MINUS_SRC_COLOR,[Xf]:t.ONE_MINUS_SRC_ALPHA,[RM]:t.ONE_MINUS_DST_COLOR,[bM]:t.ONE_MINUS_DST_ALPHA,[LM]:t.CONSTANT_COLOR,[NM]:t.ONE_MINUS_CONSTANT_COLOR,[IM]:t.CONSTANT_ALPHA,[DM]:t.ONE_MINUS_CONSTANT_ALPHA};function Ne(T,Y,Z,te,j,pe,ve,Ee,lt,Oe){if(T===ur){u===!0&&(Be(t.BLEND),u=!1);return}if(u===!1&&(xe(t.BLEND),u=!0),T!==yM){if(T!==g||Oe!==I){if((v!==Lr||N!==Lr)&&(t.blendEquation(t.FUNC_ADD),v=Lr,N=Lr),Oe)switch(T){case Bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lp:t.blendFunc(t.ONE,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}M=null,D=null,P=null,H=null,ne.set(0,0,0),S=0,g=T,I=Oe}return}j=j||Y,pe=pe||Z,ve=ve||te,(Y!==v||j!==N)&&(t.blendEquationSeparate(De[Y],De[j]),v=Y,N=j),(Z!==M||te!==D||pe!==P||ve!==H)&&(t.blendFuncSeparate(Le[Z],Le[te],Le[pe],Le[ve]),M=Z,D=te,P=pe,H=ve),(Ee.equals(ne)===!1||lt!==S)&&(t.blendColor(Ee.r,Ee.g,Ee.b,lt),ne.copy(Ee),S=lt),g=T,I=!1}function rt(T,Y){T.side===ei?Be(t.CULL_FACE):xe(t.CULL_FACE);let Z=T.side===En;Y&&(Z=!Z),Ye(Z),T.blending===Bs&&T.transparent===!1?Ne(ur):Ne(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),a.setMask(T.colorWrite);const te=T.stencilWrite;c.setTest(te),te&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),X(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):Be(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(T){ee!==T&&(T?t.frontFace(t.CW):t.frontFace(t.CCW),ee=T)}function b(T){T!==vM?(xe(t.CULL_FACE),T!==oe&&(T===Pp?t.cullFace(t.BACK):T===_M?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Be(t.CULL_FACE),oe=T}function w(T){T!==O&&(B&&t.lineWidth(T),O=T)}function X(T,Y,Z){T?(xe(t.POLYGON_OFFSET_FILL),(Q!==Y||K!==Z)&&(t.polygonOffset(Y,Z),Q=Y,K=Z)):Be(t.POLYGON_OFFSET_FILL)}function de(T){T?xe(t.SCISSOR_TEST):Be(t.SCISSOR_TEST)}function ae(T){T===void 0&&(T=t.TEXTURE0+re-1),ie!==T&&(t.activeTexture(T),ie=T)}function he(T,Y,Z){Z===void 0&&(ie===null?Z=t.TEXTURE0+re-1:Z=ie);let te=fe[Z];te===void 0&&(te={type:void 0,texture:void 0},fe[Z]=te),(te.type!==T||te.texture!==Y)&&(ie!==Z&&(t.activeTexture(Z),ie=Z),t.bindTexture(T,Y||we[T]),te.type=T,te.texture=Y)}function Pe(){const T=fe[ie];T!==void 0&&T.type!==void 0&&(t.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function He(){try{t.texSubImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Xe(){try{t.texSubImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function st(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ze(){try{t.texStorage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ie(){try{t.texImage2D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function be(){try{t.texImage3D.apply(t,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ge(T){se.equals(T)===!1&&(t.scissor(T.x,T.y,T.z,T.w),se.copy(T))}function it(T){_e.equals(T)===!1&&(t.viewport(T.x,T.y,T.z,T.w),_e.copy(T))}function We(T,Y){let Z=d.get(Y);Z===void 0&&(Z=new WeakMap,d.set(Y,Z));let te=Z.get(T);te===void 0&&(te=t.getUniformBlockIndex(Y,T.name),Z.set(T,te))}function Re(T,Y){const te=d.get(Y).get(T);f.get(Y)!==te&&(t.uniformBlockBinding(Y,te,T.__bindingPointIndex),f.set(Y,te))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ie=null,fe={},m={},_=new WeakMap,y=[],p=null,u=!1,g=null,v=null,M=null,D=null,N=null,P=null,H=null,ne=new qe(0,0,0),S=0,I=!1,ee=null,oe=null,O=null,Q=null,K=null,se.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:xe,disable:Be,bindFramebuffer:ke,drawBuffers:V,useProgram:bt,setBlending:Ne,setMaterial:rt,setFlipSided:Ye,setCullFace:b,setLineWidth:w,setPolygonOffset:X,setScissorTest:de,activeTexture:ae,bindTexture:he,unbindTexture:Pe,compressedTexImage2D:Se,compressedTexImage3D:Te,texImage2D:Ie,texImage3D:be,updateUBOMapping:We,uniformBlockBinding:Re,texStorage2D:je,texStorage3D:ze,texSubImage2D:He,texSubImage3D:Xe,compressedTexSubImage2D:le,compressedTexSubImage3D:st,scissor:Ge,viewport:it,reset:Ke}}function hb(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,w){return m?new OffscreenCanvas(b,w):Jl("canvas")}function y(b,w,X,de){let ae=1;if((b.width>de||b.height>de)&&(ae=de/Math.max(b.width,b.height)),ae<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const he=w?ed:Math.floor,Pe=he(ae*b.width),Se=he(ae*b.height);d===void 0&&(d=_(Pe,Se));const Te=X?_(Pe,Se):d;return Te.width=Pe,Te.height=Se,Te.getContext("2d").drawImage(b,0,0,Pe,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Pe+"x"+Se+")."),Te}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return um(b.width)&&um(b.height)}function u(b){return a?!1:b.wrapS!==ti||b.wrapT!==ti||b.minFilter!==fn&&b.minFilter!==gn}function g(b,w){return b.generateMipmaps&&w&&b.minFilter!==fn&&b.minFilter!==gn}function v(b){t.generateMipmap(b)}function M(b,w,X,de,ae=!1){if(a===!1)return w;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let he=w;if(w===t.RED&&(X===t.FLOAT&&(he=t.R32F),X===t.HALF_FLOAT&&(he=t.R16F),X===t.UNSIGNED_BYTE&&(he=t.R8)),w===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(he=t.R8UI),X===t.UNSIGNED_SHORT&&(he=t.R16UI),X===t.UNSIGNED_INT&&(he=t.R32UI),X===t.BYTE&&(he=t.R8I),X===t.SHORT&&(he=t.R16I),X===t.INT&&(he=t.R32I)),w===t.RG&&(X===t.FLOAT&&(he=t.RG32F),X===t.HALF_FLOAT&&(he=t.RG16F),X===t.UNSIGNED_BYTE&&(he=t.RG8)),w===t.RGBA){const Pe=ae?ql:ht.getTransfer(de);X===t.FLOAT&&(he=t.RGBA32F),X===t.HALF_FLOAT&&(he=t.RGBA16F),X===t.UNSIGNED_BYTE&&(he=Pe===vt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(he=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(he=t.RGB5_A1)}return(he===t.R16F||he===t.R32F||he===t.RG16F||he===t.RG32F||he===t.RGBA16F||he===t.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function D(b,w,X){return g(b,X)===!0||b.isFramebufferTexture&&b.minFilter!==fn&&b.minFilter!==gn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function N(b){return b===fn||b===Fp||b===_o?t.NEAREST:t.LINEAR}function P(b){const w=b.target;w.removeEventListener("dispose",P),ne(w),w.isVideoTexture&&f.delete(w)}function H(b){const w=b.target;w.removeEventListener("dispose",H),I(w)}function ne(b){const w=i.get(b);if(w.__webglInit===void 0)return;const X=b.source,de=h.get(X);if(de){const ae=de[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&S(b),Object.keys(de).length===0&&h.delete(X)}i.remove(b)}function S(b){const w=i.get(b);t.deleteTexture(w.__webglTexture);const X=b.source,de=h.get(X);delete de[w.__cacheKey],o.memory.textures--}function I(b){const w=b.texture,X=i.get(b),de=i.get(w);if(de.__webglTexture!==void 0&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(X.__webglFramebuffer[ae]))for(let he=0;he<X.__webglFramebuffer[ae].length;he++)t.deleteFramebuffer(X.__webglFramebuffer[ae][he]);else t.deleteFramebuffer(X.__webglFramebuffer[ae]);X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer[ae])}else{if(Array.isArray(X.__webglFramebuffer))for(let ae=0;ae<X.__webglFramebuffer.length;ae++)t.deleteFramebuffer(X.__webglFramebuffer[ae]);else t.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&t.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ae=0;ae<X.__webglColorRenderbuffer.length;ae++)X.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(X.__webglColorRenderbuffer[ae]);X.__webglDepthRenderbuffer&&t.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ae=0,he=w.length;ae<he;ae++){const Pe=i.get(w[ae]);Pe.__webglTexture&&(t.deleteTexture(Pe.__webglTexture),o.memory.textures--),i.remove(w[ae])}i.remove(w),i.remove(b)}let ee=0;function oe(){ee=0}function O(){const b=ee;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),ee+=1,b}function Q(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function K(b,w){const X=i.get(b);if(b.isVideoTexture&&rt(b),b.isRenderTargetTexture===!1&&b.version>0&&X.__version!==b.version){const de=b.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(X,b,w);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+w)}function re(b,w){const X=i.get(b);if(b.version>0&&X.__version!==b.version){se(X,b,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+w)}function B(b,w){const X=i.get(b);if(b.version>0&&X.__version!==b.version){se(X,b,w);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+w)}function W(b,w){const X=i.get(b);if(b.version>0&&X.__version!==b.version){_e(X,b,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+w)}const $={[qf]:t.REPEAT,[ti]:t.CLAMP_TO_EDGE,[Kf]:t.MIRRORED_REPEAT},ie={[fn]:t.NEAREST,[Fp]:t.NEAREST_MIPMAP_NEAREST,[_o]:t.NEAREST_MIPMAP_LINEAR,[gn]:t.LINEAR,[lu]:t.LINEAR_MIPMAP_NEAREST,[Fr]:t.LINEAR_MIPMAP_LINEAR},fe={[aE]:t.NEVER,[hE]:t.ALWAYS,[lE]:t.LESS,[q0]:t.LEQUAL,[cE]:t.EQUAL,[dE]:t.GEQUAL,[uE]:t.GREATER,[fE]:t.NOTEQUAL};function Fe(b,w,X){if(w.type===Ei&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===gn||w.magFilter===lu||w.magFilter===_o||w.magFilter===Fr||w.minFilter===gn||w.minFilter===lu||w.minFilter===_o||w.minFilter===Fr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(t.texParameteri(b,t.TEXTURE_WRAP_S,$[w.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,$[w.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,$[w.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ie[w.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ie[w.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==ti||w.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,N(w.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,N(w.minFilter)),w.minFilter!==fn&&w.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,fe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===fn||w.minFilter!==_o&&w.minFilter!==Fr||w.type===Ei&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===sa&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(b,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function q(b,w){let X=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",P));const de=w.source;let ae=h.get(de);ae===void 0&&(ae={},h.set(de,ae));const he=Q(w);if(he!==b.__cacheKey){ae[he]===void 0&&(ae[he]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ae[he].usedTimes++;const Pe=ae[b.__cacheKey];Pe!==void 0&&(ae[b.__cacheKey].usedTimes--,Pe.usedTimes===0&&S(w)),b.__cacheKey=he,b.__webglTexture=ae[he].texture}return X}function se(b,w,X){let de=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(de=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(de=t.TEXTURE_3D);const ae=q(b,w),he=w.source;n.bindTexture(de,b.__webglTexture,t.TEXTURE0+X);const Pe=i.get(he);if(he.version!==Pe.__version||ae===!0){n.activeTexture(t.TEXTURE0+X);const Se=ht.getPrimaries(ht.workingColorSpace),Te=w.colorSpace===zn?null:ht.getPrimaries(w.colorSpace),He=w.colorSpace===zn||Se===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Xe=u(w)&&p(w.image)===!1;let le=y(w.image,Xe,!1,r.maxTextureSize);le=Ye(w,le);const st=p(le)||a,je=s.convert(w.format,w.colorSpace);let ze=s.convert(w.type),Ie=M(w.internalFormat,je,ze,w.colorSpace,w.isVideoTexture);Fe(de,w,st);let be;const Ge=w.mipmaps,it=a&&w.isVideoTexture!==!0&&Ie!==X0,We=Pe.__version===void 0||ae===!0,Re=he.dataReady,Ke=D(w,le,st);if(w.isDepthTexture)Ie=t.DEPTH_COMPONENT,a?w.type===Ei?Ie=t.DEPTH_COMPONENT32F:w.type===er?Ie=t.DEPTH_COMPONENT24:w.type===zr?Ie=t.DEPTH24_STENCIL8:Ie=t.DEPTH_COMPONENT16:w.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Br&&Ie===t.DEPTH_COMPONENT&&w.type!==ih&&w.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=er,ze=s.convert(w.type)),w.format===Qs&&Ie===t.DEPTH_COMPONENT&&(Ie=t.DEPTH_STENCIL,w.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=zr,ze=s.convert(w.type))),We&&(it?n.texStorage2D(t.TEXTURE_2D,1,Ie,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Ie,le.width,le.height,0,je,ze,null));else if(w.isDataTexture)if(Ge.length>0&&st){it&&We&&n.texStorage2D(t.TEXTURE_2D,Ke,Ie,Ge[0].width,Ge[0].height);for(let T=0,Y=Ge.length;T<Y;T++)be=Ge[T],it?Re&&n.texSubImage2D(t.TEXTURE_2D,T,0,0,be.width,be.height,je,ze,be.data):n.texImage2D(t.TEXTURE_2D,T,Ie,be.width,be.height,0,je,ze,be.data);w.generateMipmaps=!1}else it?(We&&n.texStorage2D(t.TEXTURE_2D,Ke,Ie,le.width,le.height),Re&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,je,ze,le.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,le.width,le.height,0,je,ze,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){it&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ke,Ie,Ge[0].width,Ge[0].height,le.depth);for(let T=0,Y=Ge.length;T<Y;T++)be=Ge[T],w.format!==ni?je!==null?it?Re&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,T,0,0,0,be.width,be.height,le.depth,je,be.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,T,Ie,be.width,be.height,le.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?Re&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,T,0,0,0,be.width,be.height,le.depth,je,ze,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,T,Ie,be.width,be.height,le.depth,0,je,ze,be.data)}else{it&&We&&n.texStorage2D(t.TEXTURE_2D,Ke,Ie,Ge[0].width,Ge[0].height);for(let T=0,Y=Ge.length;T<Y;T++)be=Ge[T],w.format!==ni?je!==null?it?Re&&n.compressedTexSubImage2D(t.TEXTURE_2D,T,0,0,be.width,be.height,je,be.data):n.compressedTexImage2D(t.TEXTURE_2D,T,Ie,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?Re&&n.texSubImage2D(t.TEXTURE_2D,T,0,0,be.width,be.height,je,ze,be.data):n.texImage2D(t.TEXTURE_2D,T,Ie,be.width,be.height,0,je,ze,be.data)}else if(w.isDataArrayTexture)it?(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ke,Ie,le.width,le.height,le.depth),Re&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,je,ze,le.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,le.width,le.height,le.depth,0,je,ze,le.data);else if(w.isData3DTexture)it?(We&&n.texStorage3D(t.TEXTURE_3D,Ke,Ie,le.width,le.height,le.depth),Re&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,je,ze,le.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,le.width,le.height,le.depth,0,je,ze,le.data);else if(w.isFramebufferTexture){if(We)if(it)n.texStorage2D(t.TEXTURE_2D,Ke,Ie,le.width,le.height);else{let T=le.width,Y=le.height;for(let Z=0;Z<Ke;Z++)n.texImage2D(t.TEXTURE_2D,Z,Ie,T,Y,0,je,ze,null),T>>=1,Y>>=1}}else if(Ge.length>0&&st){it&&We&&n.texStorage2D(t.TEXTURE_2D,Ke,Ie,Ge[0].width,Ge[0].height);for(let T=0,Y=Ge.length;T<Y;T++)be=Ge[T],it?Re&&n.texSubImage2D(t.TEXTURE_2D,T,0,0,je,ze,be):n.texImage2D(t.TEXTURE_2D,T,Ie,je,ze,be);w.generateMipmaps=!1}else it?(We&&n.texStorage2D(t.TEXTURE_2D,Ke,Ie,le.width,le.height),Re&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,je,ze,le)):n.texImage2D(t.TEXTURE_2D,0,Ie,je,ze,le);g(w,st)&&v(de),Pe.__version=he.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function _e(b,w,X){if(w.image.length!==6)return;const de=q(b,w),ae=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+X);const he=i.get(ae);if(ae.version!==he.__version||de===!0){n.activeTexture(t.TEXTURE0+X);const Pe=ht.getPrimaries(ht.workingColorSpace),Se=w.colorSpace===zn?null:ht.getPrimaries(w.colorSpace),Te=w.colorSpace===zn||Pe===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const He=w.isCompressedTexture||w.image[0].isCompressedTexture,Xe=w.image[0]&&w.image[0].isDataTexture,le=[];for(let T=0;T<6;T++)!He&&!Xe?le[T]=y(w.image[T],!1,!0,r.maxCubemapSize):le[T]=Xe?w.image[T].image:w.image[T],le[T]=Ye(w,le[T]);const st=le[0],je=p(st)||a,ze=s.convert(w.format,w.colorSpace),Ie=s.convert(w.type),be=M(w.internalFormat,ze,Ie,w.colorSpace),Ge=a&&w.isVideoTexture!==!0,it=he.__version===void 0||de===!0,We=ae.dataReady;let Re=D(w,st,je);Fe(t.TEXTURE_CUBE_MAP,w,je);let Ke;if(He){Ge&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,be,st.width,st.height);for(let T=0;T<6;T++){Ke=le[T].mipmaps;for(let Y=0;Y<Ke.length;Y++){const Z=Ke[Y];w.format!==ni?ze!==null?Ge?We&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y,0,0,Z.width,Z.height,ze,Z.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y,be,Z.width,Z.height,0,Z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?We&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y,0,0,Z.width,Z.height,ze,Ie,Z.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y,be,Z.width,Z.height,0,ze,Ie,Z.data)}}}else{Ke=w.mipmaps,Ge&&it&&(Ke.length>0&&Re++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,be,le[0].width,le[0].height));for(let T=0;T<6;T++)if(Xe){Ge?We&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,le[T].width,le[T].height,ze,Ie,le[T].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,be,le[T].width,le[T].height,0,ze,Ie,le[T].data);for(let Y=0;Y<Ke.length;Y++){const te=Ke[Y].image[T].image;Ge?We&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y+1,0,0,te.width,te.height,ze,Ie,te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y+1,be,te.width,te.height,0,ze,Ie,te.data)}}else{Ge?We&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,ze,Ie,le[T]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,be,ze,Ie,le[T]);for(let Y=0;Y<Ke.length;Y++){const Z=Ke[Y];Ge?We&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y+1,0,0,ze,Ie,Z.image[T]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+T,Y+1,be,ze,Ie,Z.image[T])}}}g(w,je)&&v(t.TEXTURE_CUBE_MAP),he.__version=ae.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Ce(b,w,X,de,ae,he){const Pe=s.convert(X.format,X.colorSpace),Se=s.convert(X.type),Te=M(X.internalFormat,Pe,Se,X.colorSpace);if(!i.get(w).__hasExternalTextures){const Xe=Math.max(1,w.width>>he),le=Math.max(1,w.height>>he);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,he,Te,Xe,le,w.depth,0,Pe,Se,null):n.texImage2D(ae,he,Te,Xe,le,0,Pe,Se,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ne(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,ae,i.get(X).__webglTexture,0,Le(w)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,de,ae,i.get(X).__webglTexture,he),n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(b,w,X){if(t.bindRenderbuffer(t.RENDERBUFFER,b),w.depthBuffer&&!w.stencilBuffer){let de=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(X||Ne(w)){const ae=w.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Ei?de=t.DEPTH_COMPONENT32F:ae.type===er&&(de=t.DEPTH_COMPONENT24));const he=Le(w);Ne(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,de,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,he,de,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,de,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(w.depthBuffer&&w.stencilBuffer){const de=Le(w);X&&Ne(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,t.DEPTH24_STENCIL8,w.width,w.height):Ne(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const de=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ae=0;ae<de.length;ae++){const he=de[ae],Pe=s.convert(he.format,he.colorSpace),Se=s.convert(he.type),Te=M(he.internalFormat,Pe,Se,he.colorSpace),He=Le(w);X&&Ne(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,Te,w.width,w.height):Ne(w)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,Te,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Te,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function xe(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);const de=i.get(w.depthTexture).__webglTexture,ae=Le(w);if(w.depthTexture.format===Br)Ne(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,de,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,de,0);else if(w.depthTexture.format===Qs)Ne(w)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,de,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Be(b){const w=i.get(b),X=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");xe(w.__webglFramebuffer,b)}else if(X){w.__webglDepthbuffer=[];for(let de=0;de<6;de++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[de]),w.__webglDepthbuffer[de]=t.createRenderbuffer(),we(w.__webglDepthbuffer[de],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),we(w.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(b,w,X){const de=i.get(b);w!==void 0&&Ce(de.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Be(b)}function V(b){const w=b.texture,X=i.get(b),de=i.get(w);b.addEventListener("dispose",H),b.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture()),de.__version=w.version,o.memory.textures++);const ae=b.isWebGLCubeRenderTarget===!0,he=b.isWebGLMultipleRenderTargets===!0,Pe=p(b)||a;if(ae){X.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(a&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[Se]=[];for(let Te=0;Te<w.mipmaps.length;Te++)X.__webglFramebuffer[Se][Te]=t.createFramebuffer()}else X.__webglFramebuffer[Se]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let Se=0;Se<w.mipmaps.length;Se++)X.__webglFramebuffer[Se]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(he)if(r.drawBuffers){const Se=b.texture;for(let Te=0,He=Se.length;Te<He;Te++){const Xe=i.get(Se[Te]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Ne(b)===!1){const Se=he?w:[w];X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Te=0;Te<Se.length;Te++){const He=Se[Te];X.__webglColorRenderbuffer[Te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[Te]);const Xe=s.convert(He.format,He.colorSpace),le=s.convert(He.type),st=M(He.internalFormat,Xe,le,He.colorSpace,b.isXRRenderTarget===!0),je=Le(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,st,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,X.__webglColorRenderbuffer[Te])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),we(X.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,de.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,w,Pe);for(let Se=0;Se<6;Se++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)Ce(X.__webglFramebuffer[Se][Te],b,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Te);else Ce(X.__webglFramebuffer[Se],b,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);g(w,Pe)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){const Se=b.texture;for(let Te=0,He=Se.length;Te<He;Te++){const Xe=Se[Te],le=i.get(Xe);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),Fe(t.TEXTURE_2D,Xe,Pe),Ce(X.__webglFramebuffer,b,Xe,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,0),g(Xe,Pe)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let Se=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?Se=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Se,de.__webglTexture),Fe(Se,w,Pe),a&&w.mipmaps&&w.mipmaps.length>0)for(let Te=0;Te<w.mipmaps.length;Te++)Ce(X.__webglFramebuffer[Te],b,w,t.COLOR_ATTACHMENT0,Se,Te);else Ce(X.__webglFramebuffer,b,w,t.COLOR_ATTACHMENT0,Se,0);g(w,Pe)&&v(Se),n.unbindTexture()}b.depthBuffer&&Be(b)}function bt(b){const w=p(b)||a,X=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let de=0,ae=X.length;de<ae;de++){const he=X[de];if(g(he,w)){const Pe=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(he).__webglTexture;n.bindTexture(Pe,Se),v(Pe),n.unbindTexture()}}}function De(b){if(a&&b.samples>0&&Ne(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],X=b.width,de=b.height;let ae=t.COLOR_BUFFER_BIT;const he=[],Pe=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(b),Te=b.isWebGLMultipleRenderTargets===!0;if(Te)for(let He=0;He<w.length;He++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let He=0;He<w.length;He++){he.push(t.COLOR_ATTACHMENT0+He),b.depthBuffer&&he.push(Pe);const Xe=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(Xe===!1&&(b.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),Te&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[He]),Xe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Pe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Pe])),Te){const le=i.get(w[He]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,le,0)}t.blitFramebuffer(0,0,X,de,0,0,X,de,ae,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,he)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Te)for(let He=0;He<w.length;He++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.RENDERBUFFER,Se.__webglColorRenderbuffer[He]);const Xe=i.get(w[He]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+He,t.TEXTURE_2D,Xe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function Le(b){return Math.min(r.maxSamples,b.samples)}function Ne(b){const w=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function rt(b){const w=o.render.frame;f.get(b)!==w&&(f.set(b,w),b.update())}function Ye(b,w){const X=b.colorSpace,de=b.format,ae=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Qf||X!==Ii&&X!==zn&&(ht.getTransfer(X)===vt?a===!1?e.has("EXT_sRGB")===!0&&de===ni?(b.format=Qf,b.minFilter=gn,b.generateMipmaps=!1):w=Z0.sRGBToLinear(w):(de!==ni||ae!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}this.allocateTextureUnit=O,this.resetTextureUnits=oe,this.setTexture2D=K,this.setTexture2DArray=re,this.setTexture3D=B,this.setTextureCube=W,this.rebindTextures=ke,this.setupRenderTarget=V,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ne}function pb(t,e,n){const i=n.isWebGL2;function r(s,o=zn){let a;const l=ht.getTransfer(o);if(s===dr)return t.UNSIGNED_BYTE;if(s===H0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===G0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===KM)return t.BYTE;if(s===ZM)return t.SHORT;if(s===ih)return t.UNSIGNED_SHORT;if(s===B0)return t.INT;if(s===er)return t.UNSIGNED_INT;if(s===Ei)return t.FLOAT;if(s===sa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===QM)return t.ALPHA;if(s===ni)return t.RGBA;if(s===JM)return t.LUMINANCE;if(s===eE)return t.LUMINANCE_ALPHA;if(s===Br)return t.DEPTH_COMPONENT;if(s===Qs)return t.DEPTH_STENCIL;if(s===Qf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===tE)return t.RED;if(s===V0)return t.RED_INTEGER;if(s===nE)return t.RG;if(s===W0)return t.RG_INTEGER;if(s===j0)return t.RGBA_INTEGER;if(s===cu||s===uu||s===fu||s===du)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===cu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===cu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===du)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Op||s===kp||s===zp||s===Bp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Op)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===X0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hp||s===Gp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Hp)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vp||s===Wp||s===jp||s===Xp||s===$p||s===Yp||s===qp||s===Kp||s===Zp||s===Qp||s===Jp||s===em||s===tm||s===nm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Vp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$p)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===em)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tm)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nm)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hu||s===im||s===rm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===hu)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===im)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===iE||s===sm||s===om||s===am)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===hu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===sm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===om)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===am)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class mb extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wi extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gb={type:"move"};class Ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new wi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_b=`
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

}`;class yb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new hn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new vr({extensions:{fragDepth:!0},vertexShader:vb,fragmentShader:_b,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Gn(new eo(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class xb extends oo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,_=null;const y=new yb,p=n.getContextAttributes();let u=null,g=null;const v=[],M=[],D=new Je;let N=null;const P=new kn;P.layers.enable(1),P.viewport=new Vt;const H=new kn;H.layers.enable(2),H.viewport=new Vt;const ne=[P,H],S=new mb;S.layers.enable(1),S.layers.enable(2);let I=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=v[q];return se===void 0&&(se=new Ou,v[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=v[q];return se===void 0&&(se=new Ou,v[q]=se),se.getGripSpace()},this.getHand=function(q){let se=v[q];return se===void 0&&(se=new Ou,v[q]=se),se.getHandSpace()};function oe(q){const se=M.indexOf(q.inputSource);if(se===-1)return;const _e=v[se];_e!==void 0&&(_e.update(q.inputSource,q.frame,c||o),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){r.removeEventListener("select",oe),r.removeEventListener("selectstart",oe),r.removeEventListener("selectend",oe),r.removeEventListener("squeeze",oe),r.removeEventListener("squeezestart",oe),r.removeEventListener("squeezeend",oe),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",Q);for(let q=0;q<v.length;q++){const se=M[q];se!==null&&(M[q]=null,v[q].disconnect(se))}I=null,ee=null,y.reset(),e.setRenderTarget(u),m=null,h=null,d=null,r=null,g=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",oe),r.addEventListener("selectstart",oe),r.addEventListener("selectend",oe),r.addEventListener("squeeze",oe),r.addEventListener("squeezestart",oe),r.addEventListener("squeezeend",oe),r.addEventListener("end",O),r.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Yr(m.framebufferWidth,m.framebufferHeight,{format:ni,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let se=null,_e=null,Ce=null;p.depth&&(Ce=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=p.stencil?Qs:Br,_e=p.stencil?zr:er);const we={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(we),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Yr(h.textureWidth,h.textureHeight,{format:ni,type:dr,depthTexture:new f_(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const xe=e.properties.get(g);xe.__ignoreDepthValues=h.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(q){for(let se=0;se<q.removed.length;se++){const _e=q.removed[se],Ce=M.indexOf(_e);Ce>=0&&(M[Ce]=null,v[Ce].disconnect(_e))}for(let se=0;se<q.added.length;se++){const _e=q.added[se];let Ce=M.indexOf(_e);if(Ce===-1){for(let xe=0;xe<v.length;xe++)if(xe>=M.length){M.push(_e),Ce=xe;break}else if(M[xe]===null){M[xe]=_e,Ce=xe;break}if(Ce===-1)break}const we=v[Ce];we&&we.connect(_e)}}const K=new G,re=new G;function B(q,se,_e){K.setFromMatrixPosition(se.matrixWorld),re.setFromMatrixPosition(_e.matrixWorld);const Ce=K.distanceTo(re),we=se.projectionMatrix.elements,xe=_e.projectionMatrix.elements,Be=we[14]/(we[10]-1),ke=we[14]/(we[10]+1),V=(we[9]+1)/we[5],bt=(we[9]-1)/we[5],De=(we[8]-1)/we[0],Le=(xe[8]+1)/xe[0],Ne=Be*De,rt=Be*Le,Ye=Ce/(-De+Le),b=Ye*-De;se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(b),q.translateZ(Ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const w=Be+Ye,X=ke+Ye,de=Ne-b,ae=rt+(Ce-b),he=V*ke/X*w,Pe=bt*ke/X*w;q.projectionMatrix.makePerspective(de,ae,he,Pe,w,X),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function W(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;y.texture!==null&&(q.near=y.depthNear,q.far=y.depthFar),S.near=H.near=P.near=q.near,S.far=H.far=P.far=q.far,(I!==S.near||ee!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,ee=S.far,P.near=I,P.far=ee,H.near=I,H.far=ee,P.updateProjectionMatrix(),H.updateProjectionMatrix(),q.updateProjectionMatrix());const se=q.parent,_e=S.cameras;W(S,se);for(let Ce=0;Ce<_e.length;Ce++)W(_e[Ce],se);_e.length===2?B(S,P,H):S.projectionMatrix.copy(P.projectionMatrix),$(q,S,se)};function $(q,se,_e){_e===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Jf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null};let ie=null;function fe(q,se){if(f=se.getViewerPose(c||o),_=se,f!==null){const _e=f.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let Ce=!1;_e.length!==S.cameras.length&&(S.cameras.length=0,Ce=!0);for(let xe=0;xe<_e.length;xe++){const Be=_e[xe];let ke=null;if(m!==null)ke=m.getViewport(Be);else{const bt=d.getViewSubImage(h,Be);ke=bt.viewport,xe===0&&(e.setRenderTargetTextures(g,bt.colorTexture,h.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(g))}let V=ne[xe];V===void 0&&(V=new kn,V.layers.enable(xe),V.viewport=new Vt,ne[xe]=V),V.matrix.fromArray(Be.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Be.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(ke.x,ke.y,ke.width,ke.height),xe===0&&(S.matrix.copy(V.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ce===!0&&S.cameras.push(V)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const xe=d.getDepthInformation(_e[0]);xe&&xe.isValid&&xe.texture&&y.init(e,xe,r.renderState)}}for(let _e=0;_e<v.length;_e++){const Ce=M[_e],we=v[_e];Ce!==null&&we!==void 0&&we.update(Ce,se,c||o)}y.render(e,S),ie&&ie(q,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),_=null}const Fe=new c_;Fe.setAnimationLoop(fe),this.setAnimationLoop=function(q){ie=q},this.dispose=function(){}}}function Sb(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,o_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===En&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===En&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===En&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Mb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function c(g,v){let M=r[g.id];M===void 0&&(_(g),M=f(g),r[g.id]=M,g.addEventListener("dispose",p));const D=v.program;i.updateUBOMapping(g,D);const N=e.render.frame;s[g.id]!==N&&(h(g),s[g.id]=N)}function f(g){const v=d();g.__bindingPointIndex=v;const M=t.createBuffer(),D=g.__size,N=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,D,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],M=g.uniforms,D=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let N=0,P=M.length;N<P;N++){const H=Array.isArray(M[N])?M[N]:[M[N]];for(let ne=0,S=H.length;ne<S;ne++){const I=H[ne];if(m(I,N,ne,D)===!0){const ee=I.__offset,oe=Array.isArray(I.value)?I.value:[I.value];let O=0;for(let Q=0;Q<oe.length;Q++){const K=oe[Q],re=y(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,ee+O,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,O),O+=re.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ee,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,M,D){const N=g.value,P=v+"_"+M;if(D[P]===void 0)return typeof N=="number"||typeof N=="boolean"?D[P]=N:D[P]=N.clone(),!0;{const H=D[P];if(typeof N=="number"||typeof N=="boolean"){if(H!==N)return D[P]=N,!0}else if(H.equals(N)===!1)return H.copy(N),!0}return!1}function _(g){const v=g.uniforms;let M=0;const D=16;for(let P=0,H=v.length;P<H;P++){const ne=Array.isArray(v[P])?v[P]:[v[P]];for(let S=0,I=ne.length;S<I;S++){const ee=ne[S],oe=Array.isArray(ee.value)?ee.value:[ee.value];for(let O=0,Q=oe.length;O<Q;O++){const K=oe[O],re=y(K),B=M%D;B!==0&&D-B<re.boundary&&(M+=D-B),ee.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=M,M+=re.storage}}}const N=M%D;return N>0&&(M+=D-N),g.__size=M,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class v_{constructor(e={}){const{canvas:n=mE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this._useLegacyLights=!1,this.toneMapping=fr,this.toneMappingExposure=1;const v=this;let M=!1,D=0,N=0,P=null,H=-1,ne=null;const S=new Vt,I=new Vt;let ee=null;const oe=new qe(0);let O=0,Q=n.width,K=n.height,re=1,B=null,W=null;const $=new Vt(0,0,Q,K),ie=new Vt(0,0,Q,K);let fe=!1;const Fe=new sh;let q=!1,se=!1,_e=null;const Ce=new Rt,we=new Je,xe=new G,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return P===null?re:1}let V=i;function bt(C,x){for(let R=0;R<C.length;R++){const L=C[R],A=n.getContext(L,x);if(A!==null)return A}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nh}`),n.addEventListener("webglcontextlost",Ke,!1),n.addEventListener("webglcontextrestored",T,!1),n.addEventListener("webglcontextcreationerror",Y,!1),V===null){const x=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&x.shift(),V=bt(x,C),V===null)throw bt(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let De,Le,Ne,rt,Ye,b,w,X,de,ae,he,Pe,Se,Te,He,Xe,le,st,je,ze,Ie,be,Ge,it;function We(){De=new R1(V),Le=new E1(V,De,e),De.init(Le),be=new pb(V,De,Le),Ne=new db(V,De,Le),rt=new N1(V),Ye=new QA,b=new hb(V,De,Ne,Ye,Le,be,rt),w=new T1(v),X=new C1(v),de=new BE(V,Le),Ge=new S1(V,De,de,Le),ae=new P1(V,de,rt,Ge),he=new F1(V,ae,de,rt),je=new U1(V,Le,b),Xe=new w1(Ye),Pe=new ZA(v,w,X,De,Le,Ge,Xe),Se=new Sb(v,Ye),Te=new eb,He=new ob(De,Le),st=new x1(v,w,X,Ne,he,h,l),le=new fb(v,he,Le),it=new Mb(V,rt,Le,Ne),ze=new M1(V,De,rt,Le),Ie=new L1(V,De,rt,Le),rt.programs=Pe.programs,v.capabilities=Le,v.extensions=De,v.properties=Ye,v.renderLists=Te,v.shadowMap=le,v.state=Ne,v.info=rt}We();const Re=new xb(v,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=De.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=De.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(C){C!==void 0&&(re=C,this.setSize(Q,K,!1))},this.getSize=function(C){return C.set(Q,K)},this.setSize=function(C,x,R=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=C,K=x,n.width=Math.floor(C*re),n.height=Math.floor(x*re),R===!0&&(n.style.width=C+"px",n.style.height=x+"px"),this.setViewport(0,0,C,x)},this.getDrawingBufferSize=function(C){return C.set(Q*re,K*re).floor()},this.setDrawingBufferSize=function(C,x,R){Q=C,K=x,re=R,n.width=Math.floor(C*R),n.height=Math.floor(x*R),this.setViewport(0,0,C,x)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy($)},this.setViewport=function(C,x,R,L){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,x,R,L),Ne.viewport(S.copy($).multiplyScalar(re).floor())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,x,R,L){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,x,R,L),Ne.scissor(I.copy(ie).multiplyScalar(re).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(C){Ne.setScissorTest(fe=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(C=!0,x=!0,R=!0){let L=0;if(C){let A=!1;if(P!==null){const U=P.texture.format;A=U===j0||U===W0||U===V0}if(A){const U=P.texture.type,k=U===dr||U===er||U===ih||U===zr||U===H0||U===G0,z=st.getClearColor(),J=st.getClearAlpha(),me=z.r,ue=z.g,ce=z.b;k?(m[0]=me,m[1]=ue,m[2]=ce,m[3]=J,V.clearBufferuiv(V.COLOR,0,m)):(_[0]=me,_[1]=ue,_[2]=ce,_[3]=J,V.clearBufferiv(V.COLOR,0,_))}else L|=V.COLOR_BUFFER_BIT}x&&(L|=V.DEPTH_BUFFER_BIT),R&&(L|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ke,!1),n.removeEventListener("webglcontextrestored",T,!1),n.removeEventListener("webglcontextcreationerror",Y,!1),Te.dispose(),He.dispose(),Ye.dispose(),w.dispose(),X.dispose(),he.dispose(),Ge.dispose(),it.dispose(),Pe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",lt),Re.removeEventListener("sessionend",Oe),_e&&(_e.dispose(),_e=null),$e.stop()};function Ke(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function T(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=rt.autoReset,x=le.enabled,R=le.autoUpdate,L=le.needsUpdate,A=le.type;We(),rt.autoReset=C,le.enabled=x,le.autoUpdate=R,le.needsUpdate=L,le.type=A}function Y(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Z(C){const x=C.target;x.removeEventListener("dispose",Z),te(x)}function te(C){j(C),Ye.remove(C)}function j(C){const x=Ye.get(C).programs;x!==void 0&&(x.forEach(function(R){Pe.releaseProgram(R)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,x,R,L,A,U){x===null&&(x=Be);const k=A.isMesh&&A.matrixWorld.determinant()<0,z=Pt(C,x,R,L,A);Ne.setMaterial(L,k);let J=R.index,me=1;if(L.wireframe===!0){if(J=ae.getWireframeAttribute(R),J===void 0)return;me=2}const ue=R.drawRange,ce=R.attributes.position;let Me=ue.start*me,Ue=(ue.start+ue.count)*me;U!==null&&(Me=Math.max(Me,U.start*me),Ue=Math.min(Ue,(U.start+U.count)*me)),J!==null?(Me=Math.max(Me,0),Ue=Math.min(Ue,J.count)):ce!=null&&(Me=Math.max(Me,0),Ue=Math.min(Ue,ce.count));const Ze=Ue-Me;if(Ze<0||Ze===1/0)return;Ge.setup(A,L,z,R,J);let ot,ct=ze;if(J!==null&&(ot=de.get(J),ct=Ie,ct.setIndex(ot)),A.isMesh)L.wireframe===!0?(Ne.setLineWidth(L.wireframeLinewidth*ke()),ct.setMode(V.LINES)):ct.setMode(V.TRIANGLES);else if(A.isLine){let Ve=L.linewidth;Ve===void 0&&(Ve=1),Ne.setLineWidth(Ve*ke()),A.isLineSegments?ct.setMode(V.LINES):A.isLineLoop?ct.setMode(V.LINE_LOOP):ct.setMode(V.LINE_STRIP)}else A.isPoints?ct.setMode(V.POINTS):A.isSprite&&ct.setMode(V.TRIANGLES);if(A.isBatchedMesh)ct.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else if(A.isInstancedMesh)ct.renderInstances(Me,Ze,A.count);else if(R.isInstancedBufferGeometry){const Ve=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,Sr=Math.min(R.instanceCount,Ve);ct.renderInstances(Me,Ze,Sr)}else ct.render(Me,Ze)};function pe(C,x,R){C.transparent===!0&&C.side===ei&&C.forceSinglePass===!1?(C.side=En,C.needsUpdate=!0,Bt(C,x,R),C.side=gr,C.needsUpdate=!0,Bt(C,x,R),C.side=ei):Bt(C,x,R)}this.compile=function(C,x,R=null){R===null&&(R=C),p=He.get(R),p.init(),g.push(p),R.traverseVisible(function(A){A.isLight&&A.layers.test(x.layers)&&(p.pushLight(A),A.castShadow&&p.pushShadow(A))}),C!==R&&C.traverseVisible(function(A){A.isLight&&A.layers.test(x.layers)&&(p.pushLight(A),A.castShadow&&p.pushShadow(A))}),p.setupLights(v._useLegacyLights);const L=new Set;return C.traverse(function(A){const U=A.material;if(U)if(Array.isArray(U))for(let k=0;k<U.length;k++){const z=U[k];pe(z,R,A),L.add(z)}else pe(U,R,A),L.add(U)}),g.pop(),p=null,L},this.compileAsync=function(C,x,R=null){const L=this.compile(C,x,R);return new Promise(A=>{function U(){if(L.forEach(function(k){Ye.get(k).currentProgram.isReady()&&L.delete(k)}),L.size===0){A(C);return}setTimeout(U,10)}De.get("KHR_parallel_shader_compile")!==null?U():setTimeout(U,10)})};let ve=null;function Ee(C){ve&&ve(C)}function lt(){$e.stop()}function Oe(){$e.start()}const $e=new c_;$e.setAnimationLoop(Ee),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(C){ve=C,Re.setAnimationLoop(C),C===null?$e.stop():$e.start()},Re.addEventListener("sessionstart",lt),Re.addEventListener("sessionend",Oe),this.render=function(C,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(x),x=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,x,P),p=He.get(C,g.length),p.init(),g.push(p),Ce.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),Fe.setFromProjectionMatrix(Ce),se=this.localClippingEnabled,q=Xe.init(this.clippingPlanes,se),y=Te.get(C,u.length),y.init(),u.push(y),ut(C,x,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(B,W),this.info.render.frame++,q===!0&&Xe.beginShadows();const R=p.state.shadowsArray;if(le.render(R,C,x),q===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1)&&st.render(y,C),p.setupLights(v._useLegacyLights),x.isArrayCamera){const L=x.cameras;for(let A=0,U=L.length;A<U;A++){const k=L[A];et(y,C,k,k.viewport)}}else et(y,C,x);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(v,C,x),Ge.resetDefaultState(),H=-1,ne=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function ut(C,x,R,L){if(C.visible===!1)return;if(C.layers.test(x.layers)){if(C.isGroup)R=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(x);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Fe.intersectsSprite(C)){L&&xe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ce);const k=he.update(C),z=C.material;z.visible&&y.push(C,k,z,R,xe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Fe.intersectsObject(C))){const k=he.update(C),z=C.material;if(L&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xe.copy(C.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),xe.copy(k.boundingSphere.center)),xe.applyMatrix4(C.matrixWorld).applyMatrix4(Ce)),Array.isArray(z)){const J=k.groups;for(let me=0,ue=J.length;me<ue;me++){const ce=J[me],Me=z[ce.materialIndex];Me&&Me.visible&&y.push(C,k,Me,R,xe.z,ce)}}else z.visible&&y.push(C,k,z,R,xe.z,null)}}const U=C.children;for(let k=0,z=U.length;k<z;k++)ut(U[k],x,R,L)}function et(C,x,R,L){const A=C.opaque,U=C.transmissive,k=C.transparent;p.setupLightsView(R),q===!0&&Xe.setGlobalState(v.clippingPlanes,R),U.length>0&&zt(A,U,x,R),L&&Ne.viewport(S.copy(L)),A.length>0&&mt(A,x,R),U.length>0&&mt(U,x,R),k.length>0&&mt(k,x,R),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function zt(C,x,R,L){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;const U=Le.isWebGL2;_e===null&&(_e=new Yr(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?sa:dr,minFilter:Fr,samples:U?4:0})),v.getDrawingBufferSize(we),U?_e.setSize(we.x,we.y):_e.setSize(ed(we.x),ed(we.y));const k=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(oe),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const z=v.toneMapping;v.toneMapping=fr,mt(C,R,L),b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e);let J=!1;for(let me=0,ue=x.length;me<ue;me++){const ce=x[me],Me=ce.object,Ue=ce.geometry,Ze=ce.material,ot=ce.group;if(Ze.side===ei&&Me.layers.test(L.layers)){const ct=Ze.side;Ze.side=En,Ze.needsUpdate=!0,St(Me,R,L,Ue,Ze,ot),Ze.side=ct,Ze.needsUpdate=!0,J=!0}}J===!0&&(b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e)),v.setRenderTarget(k),v.setClearColor(oe,O),v.toneMapping=z}function mt(C,x,R){const L=x.isScene===!0?x.overrideMaterial:null;for(let A=0,U=C.length;A<U;A++){const k=C[A],z=k.object,J=k.geometry,me=L===null?k.material:L,ue=k.group;z.layers.test(R.layers)&&St(z,x,R,J,me,ue)}}function St(C,x,R,L,A,U){C.onBeforeRender(v,x,R,L,A,U),C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),A.onBeforeRender(v,x,R,L,C,U),A.transparent===!0&&A.side===ei&&A.forceSinglePass===!1?(A.side=En,A.needsUpdate=!0,v.renderBufferDirect(R,x,L,A,C,U),A.side=gr,A.needsUpdate=!0,v.renderBufferDirect(R,x,L,A,C,U),A.side=ei):v.renderBufferDirect(R,x,L,A,C,U),C.onAfterRender(v,x,R,L,A,U)}function Bt(C,x,R){x.isScene!==!0&&(x=Be);const L=Ye.get(C),A=p.state.lights,U=p.state.shadowsArray,k=A.state.version,z=Pe.getParameters(C,A.state,U,x,R),J=Pe.getProgramCacheKey(z);let me=L.programs;L.environment=C.isMeshStandardMaterial?x.environment:null,L.fog=x.fog,L.envMap=(C.isMeshStandardMaterial?X:w).get(C.envMap||L.environment),me===void 0&&(C.addEventListener("dispose",Z),me=new Map,L.programs=me);let ue=me.get(J);if(ue!==void 0){if(L.currentProgram===ue&&L.lightsStateVersion===k)return oi(C,z),ue}else z.uniforms=Pe.getUniforms(C),C.onBuild(R,z,v),C.onBeforeCompile(z,v),ue=Pe.acquireProgram(z,J),me.set(J,ue),L.uniforms=z.uniforms;const ce=L.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ce.clippingPlanes=Xe.uniform),oi(C,z),L.needsLights=It(C),L.lightsStateVersion=k,L.needsLights&&(ce.ambientLightColor.value=A.state.ambient,ce.lightProbe.value=A.state.probe,ce.directionalLights.value=A.state.directional,ce.directionalLightShadows.value=A.state.directionalShadow,ce.spotLights.value=A.state.spot,ce.spotLightShadows.value=A.state.spotShadow,ce.rectAreaLights.value=A.state.rectArea,ce.ltc_1.value=A.state.rectAreaLTC1,ce.ltc_2.value=A.state.rectAreaLTC2,ce.pointLights.value=A.state.point,ce.pointLightShadows.value=A.state.pointShadow,ce.hemisphereLights.value=A.state.hemi,ce.directionalShadowMap.value=A.state.directionalShadowMap,ce.directionalShadowMatrix.value=A.state.directionalShadowMatrix,ce.spotShadowMap.value=A.state.spotShadowMap,ce.spotLightMatrix.value=A.state.spotLightMatrix,ce.spotLightMap.value=A.state.spotLightMap,ce.pointShadowMap.value=A.state.pointShadowMap,ce.pointShadowMatrix.value=A.state.pointShadowMatrix),L.currentProgram=ue,L.uniformsList=null,ue}function In(C){if(C.uniformsList===null){const x=C.currentProgram.getUniforms();C.uniformsList=Sl.seqWithValue(x.seq,C.uniforms)}return C.uniformsList}function oi(C,x){const R=Ye.get(C);R.outputColorSpace=x.outputColorSpace,R.batching=x.batching,R.instancing=x.instancing,R.instancingColor=x.instancingColor,R.skinning=x.skinning,R.morphTargets=x.morphTargets,R.morphNormals=x.morphNormals,R.morphColors=x.morphColors,R.morphTargetsCount=x.morphTargetsCount,R.numClippingPlanes=x.numClippingPlanes,R.numIntersection=x.numClipIntersection,R.vertexAlphas=x.vertexAlphas,R.vertexTangents=x.vertexTangents,R.toneMapping=x.toneMapping}function Pt(C,x,R,L,A){x.isScene!==!0&&(x=Be),b.resetTextureUnits();const U=x.fog,k=L.isMeshStandardMaterial?x.environment:null,z=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ii,J=(L.isMeshStandardMaterial?X:w).get(L.envMap||k),me=L.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,ue=!!R.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),ce=!!R.morphAttributes.position,Me=!!R.morphAttributes.normal,Ue=!!R.morphAttributes.color;let Ze=fr;L.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ze=v.toneMapping);const ot=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ct=ot!==void 0?ot.length:0,Ve=Ye.get(L),Sr=p.state.lights;if(q===!0&&(se===!0||C!==ne)){const Dn=C===ne&&L.id===H;Xe.setState(L,C,Dn)}let yt=!1;L.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Sr.state.version||Ve.outputColorSpace!==z||A.isBatchedMesh&&Ve.batching===!1||!A.isBatchedMesh&&Ve.batching===!0||A.isInstancedMesh&&Ve.instancing===!1||!A.isInstancedMesh&&Ve.instancing===!0||A.isSkinnedMesh&&Ve.skinning===!1||!A.isSkinnedMesh&&Ve.skinning===!0||A.isInstancedMesh&&Ve.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&Ve.instancingColor===!1&&A.instanceColor!==null||Ve.envMap!==J||L.fog===!0&&Ve.fog!==U||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Xe.numPlanes||Ve.numIntersection!==Xe.numIntersection)||Ve.vertexAlphas!==me||Ve.vertexTangents!==ue||Ve.morphTargets!==ce||Ve.morphNormals!==Me||Ve.morphColors!==Ue||Ve.toneMapping!==Ze||Le.isWebGL2===!0&&Ve.morphTargetsCount!==ct)&&(yt=!0):(yt=!0,Ve.__version=L.version);let Xn=Ve.currentProgram;yt===!0&&(Xn=Bt(L,x,A));let ch=!1,lo=!1,bc=!1;const Zt=Xn.getUniforms(),Mr=Ve.uniforms;if(Ne.useProgram(Xn.program)&&(ch=!0,lo=!0,bc=!0),L.id!==H&&(H=L.id,lo=!0),ch||ne!==C){Zt.setValue(V,"projectionMatrix",C.projectionMatrix),Zt.setValue(V,"viewMatrix",C.matrixWorldInverse);const Dn=Zt.map.cameraPosition;Dn!==void 0&&Dn.setValue(V,xe.setFromMatrixPosition(C.matrixWorld)),Le.logarithmicDepthBuffer&&Zt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&Zt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),ne!==C&&(ne=C,lo=!0,bc=!0)}if(A.isSkinnedMesh){Zt.setOptional(V,A,"bindMatrix"),Zt.setOptional(V,A,"bindMatrixInverse");const Dn=A.skeleton;Dn&&(Le.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),Zt.setValue(V,"boneTexture",Dn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}A.isBatchedMesh&&(Zt.setOptional(V,A,"batchingTexture"),Zt.setValue(V,"batchingTexture",A._matricesTexture,b));const Cc=R.morphAttributes;if((Cc.position!==void 0||Cc.normal!==void 0||Cc.color!==void 0&&Le.isWebGL2===!0)&&je.update(A,R,Xn),(lo||Ve.receiveShadow!==A.receiveShadow)&&(Ve.receiveShadow=A.receiveShadow,Zt.setValue(V,"receiveShadow",A.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(Mr.envMap.value=J,Mr.flipEnvMap.value=J.isCubeTexture&&J.isRenderTargetTexture===!1?-1:1),lo&&(Zt.setValue(V,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&ki(Mr,bc),U&&L.fog===!0&&Se.refreshFogUniforms(Mr,U),Se.refreshMaterialUniforms(Mr,L,re,K,_e),Sl.upload(V,In(Ve),Mr,b)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Sl.upload(V,In(Ve),Mr,b),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&Zt.setValue(V,"center",A.center),Zt.setValue(V,"modelViewMatrix",A.modelViewMatrix),Zt.setValue(V,"normalMatrix",A.normalMatrix),Zt.setValue(V,"modelMatrix",A.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const Dn=L.uniformsGroups;for(let Rc=0,y_=Dn.length;Rc<y_;Rc++)if(Le.isWebGL2){const uh=Dn[Rc];it.update(uh,Xn),it.bind(uh,Xn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xn}function ki(C,x){C.ambientLightColor.needsUpdate=x,C.lightProbe.needsUpdate=x,C.directionalLights.needsUpdate=x,C.directionalLightShadows.needsUpdate=x,C.pointLights.needsUpdate=x,C.pointLightShadows.needsUpdate=x,C.spotLights.needsUpdate=x,C.spotLightShadows.needsUpdate=x,C.rectAreaLights.needsUpdate=x,C.hemisphereLights.needsUpdate=x}function It(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,x,R){Ye.get(C.texture).__webglTexture=x,Ye.get(C.depthTexture).__webglTexture=R;const L=Ye.get(C);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=R===void 0,L.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,x){const R=Ye.get(C);R.__webglFramebuffer=x,R.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(C,x=0,R=0){P=C,D=x,N=R;let L=!0,A=null,U=!1,k=!1;if(C){const J=Ye.get(C);J.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(V.FRAMEBUFFER,null),L=!1):J.__webglFramebuffer===void 0?b.setupRenderTarget(C):J.__hasExternalTextures&&b.rebindTextures(C,Ye.get(C.texture).__webglTexture,Ye.get(C.depthTexture).__webglTexture);const me=C.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(k=!0);const ue=Ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ue[x])?A=ue[x][R]:A=ue[x],U=!0):Le.isWebGL2&&C.samples>0&&b.useMultisampledRTT(C)===!1?A=Ye.get(C).__webglMultisampledFramebuffer:Array.isArray(ue)?A=ue[R]:A=ue,S.copy(C.viewport),I.copy(C.scissor),ee=C.scissorTest}else S.copy($).multiplyScalar(re).floor(),I.copy(ie).multiplyScalar(re).floor(),ee=fe;if(Ne.bindFramebuffer(V.FRAMEBUFFER,A)&&Le.drawBuffers&&L&&Ne.drawBuffers(C,A),Ne.viewport(S),Ne.scissor(I),Ne.setScissorTest(ee),U){const J=Ye.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+x,J.__webglTexture,R)}else if(k){const J=Ye.get(C.texture),me=x||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.__webglTexture,R||0,me)}H=-1},this.readRenderTargetPixels=function(C,x,R,L,A,U,k){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let z=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&k!==void 0&&(z=z[k]),z){Ne.bindFramebuffer(V.FRAMEBUFFER,z);try{const J=C.texture,me=J.format,ue=J.type;if(me!==ni&&be.convert(me)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ce=ue===sa&&(De.has("EXT_color_buffer_half_float")||Le.isWebGL2&&De.has("EXT_color_buffer_float"));if(ue!==dr&&be.convert(ue)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ue===Ei&&(Le.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=C.width-L&&R>=0&&R<=C.height-A&&V.readPixels(x,R,L,A,be.convert(me),be.convert(ue),U)}finally{const J=P!==null?Ye.get(P).__webglFramebuffer:null;Ne.bindFramebuffer(V.FRAMEBUFFER,J)}}},this.copyFramebufferToTexture=function(C,x,R=0){const L=Math.pow(2,-R),A=Math.floor(x.image.width*L),U=Math.floor(x.image.height*L);b.setTexture2D(x,0),V.copyTexSubImage2D(V.TEXTURE_2D,R,0,0,C.x,C.y,A,U),Ne.unbindTexture()},this.copyTextureToTexture=function(C,x,R,L=0){const A=x.image.width,U=x.image.height,k=be.convert(R.format),z=be.convert(R.type);b.setTexture2D(R,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,R.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,R.unpackAlignment),x.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,L,C.x,C.y,A,U,k,z,x.image.data):x.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,L,C.x,C.y,x.mipmaps[0].width,x.mipmaps[0].height,k,x.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,L,C.x,C.y,k,z,x.image),L===0&&R.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(C,x,R,L,A=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const U=C.max.x-C.min.x+1,k=C.max.y-C.min.y+1,z=C.max.z-C.min.z+1,J=be.convert(L.format),me=be.convert(L.type);let ue;if(L.isData3DTexture)b.setTexture3D(L,0),ue=V.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)b.setTexture2DArray(L,0),ue=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,L.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,L.unpackAlignment);const ce=V.getParameter(V.UNPACK_ROW_LENGTH),Me=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ue=V.getParameter(V.UNPACK_SKIP_PIXELS),Ze=V.getParameter(V.UNPACK_SKIP_ROWS),ot=V.getParameter(V.UNPACK_SKIP_IMAGES),ct=R.isCompressedTexture?R.mipmaps[A]:R.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ct.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ct.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,C.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,C.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C.min.z),R.isDataTexture||R.isData3DTexture?V.texSubImage3D(ue,A,x.x,x.y,x.z,U,k,z,J,me,ct.data):R.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(ue,A,x.x,x.y,x.z,U,k,z,J,ct.data)):V.texSubImage3D(ue,A,x.x,x.y,x.z,U,k,z,J,me,ct),V.pixelStorei(V.UNPACK_ROW_LENGTH,ce),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Me),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ue),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ze),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ot),A===0&&L.generateMipmaps&&V.generateMipmap(ue),Ne.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),Ne.unbindTexture()},this.resetState=function(){D=0,N=0,P=null,Ne.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===rh?"display-p3":"srgb",n.unpackColorSpace=ht.workingColorSpace===wc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xt?Hr:$0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hr?Xt:Ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Eb extends v_{}Eb.prototype.isWebGL1Renderer=!0;class wb extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Tb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Zf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Gr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new G;class ec{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=fi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=fi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=fi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=fi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new rn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nd extends Qr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gs;const Eo=new G,vs=new G,_s=new G,ys=new Je,wo=new Je,__=new Rt,Qa=new G,To=new G,Ja=new G,Zm=new Je,ku=new Je,Qm=new Je;class Jm extends Ft{constructor(e=new nd){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new sn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Tb(n,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new ec(i,3,0,!1)),gs.setAttribute("uv",new ec(i,2,3,!1))}this.geometry=gs,this.material=e,this.center=new Je(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),__.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-_s.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;el(Qa.set(-.5,-.5,0),_s,o,vs,r,s),el(To.set(.5,-.5,0),_s,o,vs,r,s),el(Ja.set(.5,.5,0),_s,o,vs,r,s),Zm.set(0,0),ku.set(1,0),Qm.set(1,1);let a=e.ray.intersectTriangle(Qa,To,Ja,!1,Eo);if(a===null&&(el(To.set(-.5,.5,0),_s,o,vs,r,s),ku.set(0,1),a=e.ray.intersectTriangle(Qa,Ja,To,!1,Eo),a===null))return;const l=e.ray.origin.distanceTo(Eo);l<e.near||l>e.far||n.push({distance:l,point:Eo.clone(),uv:Bn.getInterpolation(Eo,Qa,To,Ja,Zm,ku,Qm,new Je),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function el(t,e,n,i,r,s){ys.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(wo.x=s*ys.x-r*ys.y,wo.y=r*ys.x+s*ys.y):wo.copy(ys),t.copy(e),t.x+=wo.x,t.y+=wo.y,t.applyMatrix4(__)}class Mi extends Qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eg=new G,tg=new G,ng=new Rt,zu=new e_,tl=new Tc;class id extends Ft{constructor(e=new sn,n=new Mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)eg.fromBufferAttribute(n,r-1),tg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=eg.distanceTo(tg);e.setAttribute("lineDistance",new Yt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;ng.copy(r).invert(),zu.copy(e.ray).applyMatrix4(ng);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new G,f=new G,d=new G,h=new G,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),g=Math.min(_.count,o.start+o.count);for(let v=u,M=g-1;v<M;v+=m){const D=_.getX(v),N=_.getX(v+1);if(c.fromBufferAttribute(p,D),f.fromBufferAttribute(p,N),zu.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(h);H<e.near||H>e.far||n.push({distance:H,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let v=u,M=g-1;v<M;v+=m){if(c.fromBufferAttribute(p,v),f.fromBufferAttribute(p,v+1),zu.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(h);N<e.near||N>e.far||n.push({distance:N,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ig=new G,rg=new G;class tc extends id{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ig.fromBufferAttribute(n,r),rg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ig.distanceTo(rg);e.setAttribute("lineDistance",new Yt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sg extends hn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const nl=new G,il=new G,Bu=new G,rl=new Bn;class Ab extends sn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(xl*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:p,c:u}=rl;if(y.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),rl.getNormal(Bu),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let g=0;g<3;g++){const v=(g+1)%3,M=d[g],D=d[v],N=rl[f[g]],P=rl[f[v]],H=`${M}_${D}`,ne=`${D}_${M}`;ne in h&&h[ne]?(Bu.dot(h[ne].normal)<=s&&(m.push(N.x,N.y,N.z),m.push(P.x,P.y,P.z)),h[ne]=null):H in h||(h[H]={index0:c[g],index1:c[v],normal:Bu.clone()})}}for(const _ in h)if(h[_]){const{index0:y,index1:p}=h[_];nl.fromBufferAttribute(a,y),il.fromBufferAttribute(a,p),m.push(nl.x,nl.y,nl.z),m.push(il.x,il.y,il.z)}this.setAttribute("position",new Yt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ah extends sn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new G,h=new G,m=[],_=[],y=[],p=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let D=0;D<=n;D++){const N=D/n;d.x=-e*Math.cos(r+N*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+N*s)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),p.push(N+M,1-v),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=f[u][g+1],M=f[u][g],D=f[u+1][g],N=f[u+1][g+1];(u!==0||o>0)&&m.push(v,M,N),(u!==i-1||l<Math.PI)&&m.push(M,D,N)}this.setIndex(m),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(y,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ao extends Qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Y0,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lh extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class bb extends lh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Hu=new Rt,og=new G,ag=new G;class Cb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sh,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;og.setFromMatrixPosition(e.matrixWorld),n.position.copy(og),ag.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ag),n.updateMatrixWorld(),Hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rb extends Cb{constructor(){super(new u_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lg extends lh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Rb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pb extends lh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lb extends tc{constructor(e=10,n=10,i=4473924,r=8947848){i=new qe(i),r=new qe(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,m=0,_=-a;h<=n;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=h===s?i:r;y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3}const f=new sn;f.setAttribute("position",new Yt(l,3)),f.setAttribute("color",new Yt(c,3));const d=new Mi({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Nb extends tc{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new sn;r.setAttribute("position",new Yt(n,3)),r.setAttribute("color",new Yt(i,3));const s=new Mi({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new qe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);function Gu(t,e,n){return t<e?e:t>n?n:t}function Ib(t){const e=F.useRef(null),n=F.useRef([]),i=F.useRef(null),r=F.useRef(0),s=F.useRef(null),o=F.useRef({enabled:!0,scale:1,background:!0}),a=F.useRef(!0),l=F.useRef(null),c=F.useRef([]),f=F.useRef(null),d=F.useRef([]);return F.useEffect(()=>{n.current=t.players},[t.players]),F.useEffect(()=>{i.current=t.focusTarget},[t.focusTarget]),F.useEffect(()=>{r.current=t.focusNonce},[t.focusNonce]),F.useEffect(()=>{s.current=typeof t.followPlayerId=="number"?t.followPlayerId:null},[t.followPlayerId]),F.useEffect(()=>{o.current=t.nameTags||{enabled:!0,scale:1,background:!0}},[t.nameTags]),F.useEffect(()=>{a.current=t.showAimLines!==!1},[t.showAimLines]),F.useEffect(()=>{l.current=t.trail||null},[t.trail]),F.useEffect(()=>{c.current=Array.isArray(t.deathMarkers)?t.deathMarkers:[]},[t.deathMarkers]),F.useEffect(()=>{f.current=t.terrain||null},[t.terrain]),F.useEffect(()=>{d.current=Array.isArray(t.towns)?t.towns:[]},[t.towns]),F.useEffect(()=>{const h=e.current;if(!h)return;const m=h,_=new v_({canvas:m,antialias:!0});_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.shadowMap.enabled=!0,_.shadowMap.type=O0;const y=new wb;y.background=new qe(724761);const p=new kn(70,1,.1,2e4);p.position.set(0,25,60);const u=new Pb(16777215,.28);y.add(u);const g=new bb(9418495,724761,.35);y.add(g);const v=new lg(16777215,1.15);v.position.set(150,260,130),v.castShadow=!0,v.shadow.mapSize.width=2048,v.shadow.mapSize.height=2048,v.shadow.camera.near=10,v.shadow.camera.far=1200,v.shadow.camera.left=-420,v.shadow.camera.right=420,v.shadow.camera.top=420,v.shadow.camera.bottom=-420,v.shadow.bias=-15e-5,y.add(v);const M=new lg(16777215,.35);M.position.set(-180,160,-120),y.add(M);const D=new Lb(2e3,200,3293278,1910328);y.add(D);const N=new Nb(10);y.add(N);const P=new wi;y.add(P);const H=new wi;y.add(H);const ne=new wi;y.add(ne);const S=new wi;y.add(S);const I=new wi;y.add(I);const ee=new ah(.4,16,12),oe=new Ao({color:16366681}),O=new Ao({color:16757322}),Q=new Ao({color:9081766}),K=new Mi({color:16366681,transparent:!0,opacity:.8}),re=new Mi({color:16757322,transparent:!0,opacity:.8}),B=new Mi({color:9081766,transparent:!0,opacity:.7}),W=new Mi({color:16366681,transparent:!0,opacity:.35}),$=new Mi({color:16730698,transparent:!0,opacity:.9}),ie=new Ao({vertexColors:!0,roughness:1,metalness:0,side:ei,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),fe=new Mi({color:15134195,transparent:!0,opacity:.55}),Fe=new Map,q=new Map,se=new Map,_e=new Map,Ce=new Map;let we=null,xe=null,Be=null,ke="",V=null;function bt(T){const Y=T.material;Y.map&&Y.map.dispose(),Y.dispose()}function De(){const T=d.current;if(T===V)return;V=T;for(const j of se.values())bt(j),S.remove(j);if(se.clear(),!T||T.length===0)return;const Y={scale:2.8,background:!1},Z=j=>/^type:\s*\d+\s*$/i.test(j.trim()),te=j=>{let pe=(j||"").trim();return pe=pe.replace(/^#AR-MapLocation_/i,""),pe=pe.replace(/_/g," ").trim(),pe};for(const j of T){if(!j||typeof j.name!="string"||!j.name)continue;const pe=te(j.name);if(!pe||Z(pe))continue;const ve=j.pos;if(!ve||!Number.isFinite(ve.x)||!Number.isFinite(ve.y)||!Number.isFinite(ve.z))continue;const Ee=Ne(pe,Y);rt(Ee,Y),Ee.frustumCulled=!1,Ee.material.depthWrite=!1,Ee.position.set(ve.x,ve.y+5,ve.z),S.add(Ee);const lt=Math.round(ve.x),Oe=Math.round(ve.z),$e=`${pe}|${lt}|${Oe}`;se.set($e,Ee)}}let Le=null;function Ne(T,Y){const Z=document.createElement("canvas"),te=Z.getContext("2d");if(!te){const St=new sg(document.createElement("canvas")),Bt=new nd({map:St,transparent:!0});return new Jm(Bt)}const j=16;te.font=`600 ${j}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;const pe=10,ve=6,Ee=te.measureText(T),lt=Math.ceil(Ee.width),Oe=Math.max(8,lt+pe*2),$e=j+ve*2,ut=2;if(Z.width=Oe*ut,Z.height=$e*ut,te.setTransform(ut,0,0,ut,0,0),te.clearRect(0,0,Oe,$e),Y.background){te.fillStyle="rgba(0,0,0,0.55)";const St=6;te.beginPath(),te.moveTo(St,0),te.lineTo(Oe-St,0),te.quadraticCurveTo(Oe,0,Oe,St),te.lineTo(Oe,$e-St),te.quadraticCurveTo(Oe,$e,Oe-St,$e),te.lineTo(St,$e),te.quadraticCurveTo(0,$e,0,$e-St),te.lineTo(0,St),te.quadraticCurveTo(0,0,St,0),te.closePath(),te.fill()}te.font=`600 ${j}px system-ui, -apple-system, Segoe UI, Roboto, Arial`,te.fillStyle="rgba(255,255,255,0.95)",te.textBaseline="middle",te.fillText(T,pe,Math.floor($e/2));const et=new sg(Z);et.needsUpdate=!0;const zt=new nd({map:et,transparent:!0,depthTest:!1}),mt=new Jm(zt);return mt.userData={canvas:Z,texture:et,text:T},mt.center.set(.5,0),mt}function rt(T,Y){const te=T.material.map,j=te&&te.image;if(!j||!j.width||!j.height){T.scale.set(2.5*Y.scale,.8*Y.scale,1);return}const pe=j.width/j.height,ve=.85*Y.scale,Ee=ve*pe;T.scale.set(Ee,ve,1)}function Ye(T,Y,Z){const te=T.userData;if(te&&te.text===Y){rt(T,Z);return}const j=T.material,pe=j.map;pe&&pe.dispose(),j.dispose();const ve=Ne(Y,Z);T.material=ve.material,T.userData=ve.userData,rt(T,Z)}const b={rmbDown:!1,pointerLocked:!1,yaw:0,pitch:0,speed:20,keys:Object.create(null)};let w=0;function X(){const T=m.clientWidth,Y=m.clientHeight;_.setSize(T,Y,!1),p.aspect=T/Y,p.updateProjectionMatrix()}const de=new ResizeObserver(()=>X());de.observe(m),X();function ae(){const T=new Set,Y=o.current,Z=a.current,te=n.current;for(const j of te){T.add(j.playerId);let pe=Fe.get(j.playerId);if(!pe){pe=new Gn(ee,oe),pe.castShadow=!0,pe.receiveShadow=!1,pe.userData={playerId:j.playerId},Fe.set(j.playerId,pe),P.add(pe);const ut=Ne(j.label||String(j.playerId),Y);ut.position.set(0,1.2,0),rt(ut,Y),q.set(j.playerId,ut),pe.add(ut);const et=new sn,zt=new Float32Array(6);et.setAttribute("position",new rn(zt,3));const mt=new id(et,K);_e.set(j.playerId,mt),P.add(mt)}const ve=!!j.isDead,Ee=!!j.inVehicle,lt=ve?Q:Ee?O:oe;pe.material!==lt&&(pe.material=lt),pe.position.set(j.pos.x,j.pos.y,j.pos.z);const Oe=q.get(j.playerId);Oe&&(Oe.visible=Y.enabled,Y.enabled&&Ye(Oe,j.label||String(j.playerId),Y));const $e=_e.get(j.playerId);if($e){if($e.visible=Z,!Z)continue;const ut=ve?B:Ee?re:K;$e.material!==ut&&($e.material=ut);const et=j.aimDir,zt=$e.geometry.getAttribute("position");if(!et)zt.setXYZ(0,j.pos.x,j.pos.y,j.pos.z),zt.setXYZ(1,j.pos.x,j.pos.y,j.pos.z),zt.needsUpdate=!0;else{const mt=et.x,St=et.y,Bt=et.z,In=Math.max(1e-4,Math.sqrt(mt*mt+St*St+Bt*Bt)),oi=mt/In,Pt=St/In,ki=Bt/In,It=6,C=j.pos.x,x=j.pos.y+.6,R=j.pos.z,L=C+oi*It,A=x+Pt*It,U=R+ki*It;zt.setXYZ(0,C,x,R),zt.setXYZ(1,L,A,U),zt.needsUpdate=!0}}}for(const[j,pe]of Fe){if(T.has(j))continue;P.remove(pe),Fe.delete(j);const ve=q.get(j);if(ve){pe.remove(ve);const lt=ve.material;lt.map&&lt.map.dispose(),lt.dispose(),q.delete(j)}const Ee=_e.get(j);Ee&&(P.remove(Ee),Ee.geometry.dispose(),_e.delete(j))}}function he(){const T=l.current;if(!T||!Array.isArray(T.points)||T.points.length<2){Le&&(H.remove(Le),Le.geometry.dispose(),Le=null);return}const Y=T.points,Z=new Float32Array(Y.length*3);for(let te=0;te<Y.length;te++)Z[te*3+0]=Y[te].x,Z[te*3+1]=Y[te].y+.15,Z[te*3+2]=Y[te].z;if(Le){const te=Le.geometry;te.setAttribute("position",new rn(Z,3)),te.getAttribute("position").needsUpdate=!0,te.computeBoundingSphere()}else{const te=new sn;te.setAttribute("position",new rn(Z,3)),Le=new id(te,W),H.add(Le)}}function Pe(){const T=c.current,Y=new Set;for(let Z=0;Z<T.length;Z++){const te=T[Z],j=`${Math.round(te.x*10)}|${Math.round(te.y*10)}|${Math.round(te.z*10)}|${Z}`;Y.add(j);let pe=Ce.get(j);if(!pe){const Ee=new sn,lt=new Float32Array([-1.2,0,-1.2,1.2,0,1.2,-1.2,0,1.2,1.2,0,-1.2]);Ee.setAttribute("position",new rn(lt,3)),pe=new tc(Ee,$),Ce.set(j,pe),ne.add(pe)}pe.position.set(te.x,te.y+.1,te.z)}for(const[Z,te]of Ce)Y.has(Z)||(ne.remove(te),te.geometry.dispose(),Ce.delete(Z))}function Se(){const T=new qr().setFromAxisAngle(new G(0,1,0),b.yaw),Y=new qr().setFromAxisAngle(new G(1,0,0),b.pitch);p.quaternion.copy(T).multiply(Y)}function Te(T){T.preventDefault()}function He(T){T.button===2&&(b.rmbDown=!0,document.pointerLockElement!==m&&m.requestPointerLock())}function Xe(T){T.button===2&&(b.rmbDown=!1,document.pointerLockElement===m&&document.exitPointerLock())}function le(){if(b.pointerLocked=document.pointerLockElement===m,b.pointerLocked){const T=new da().setFromQuaternion(p.quaternion,"YXZ");b.yaw=T.y,b.pitch=T.x}}function st(T){if(!b.pointerLocked)return;const Y=T.movementX||0,Z=T.movementY||0;b.yaw-=Y*.002,b.pitch-=Z*.002,b.pitch=Gu(b.pitch,-Math.PI/2+.01,Math.PI/2-.01)}function je(T){if(typeof s.current=="number"){const j=T.deltaY<0?.9:1.1,pe=Re.clone().multiplyScalar(j),ve=pe.length(),Ee=Gu(ve,6,800);ve>1e-4&&pe.multiplyScalar(Ee/ve),Re.copy(pe);return}const Z=T.deltaY<0?1:-1,te=b.speed+Z*Math.max(1,b.speed*.1);b.speed=Gu(te,1,400)}function ze(T){b.keys[T.code]=!0}function Ie(T){b.keys[T.code]=!1}function be(){const T=f.current;if(!T){D.visible=!0,we&&(we.geometry.dispose(),I.remove(we),we=null,ke=""),xe&&(xe.geometry.dispose(),I.remove(xe),xe=null),Be&&(Be.geometry.dispose(),Be.material.dispose(),I.remove(Be),Be=null);return}D.visible=!1;const Y=`${T.gridW}x${T.gridH}|${T.bbMin.x},${T.bbMin.y},${T.bbMin.z}|${T.bbMax.x},${T.bbMax.y},${T.bbMax.z}|${T.heights.length}`;if(Y===ke)return;ke=Y,we&&(we.geometry.dispose(),I.remove(we),we=null),xe&&(xe.geometry.dispose(),I.remove(xe),xe=null),Be&&(Be.geometry.dispose(),Be.material.dispose(),I.remove(Be),Be=null);const Z=Math.max(2,Math.floor(T.gridW)),te=Math.max(2,Math.floor(T.gridH)),j=Z*te;if(!Array.isArray(T.heights)||T.heights.length<j)return;const pe=T.bbMax.x-T.bbMin.x,ve=T.bbMax.z-T.bbMin.z;if(!Number.isFinite(pe)||!Number.isFinite(ve)||pe<=0||ve<=0)return;const Ee=new eo(pe,ve,Z-1,te-1);Ee.rotateX(-Math.PI/2);const lt=Ee.attributes.position;let Oe=1/0,$e=-1/0;for(let It=0;It<j;It++){const C=T.heights[It];typeof C!="number"||!Number.isFinite(C)||(C<Oe&&(Oe=C),C>$e&&($e=C))}(!Number.isFinite(Oe)||!Number.isFinite($e)||$e-Oe<.001)&&(Oe=0,$e=1);const ut=$e-Oe,et=new Float32Array(j*3),zt=new qe(988708),mt=new qe(1910328),St=new qe(3293278),Bt=0,In=new qe(735846);for(let It=0;It<te;It++){const C=It,x=It;for(let R=0;R<Z;R++){const L=R+Z*C,A=R+Z*x,U=T.heights[L];lt.setY(A,U);let k=(U-Oe)/ut;Number.isFinite(k)||(k=0),k=Math.min(1,Math.max(0,k)),k=Math.pow(k,.65);const z=k<.5?zt.clone().lerp(mt,k/.5):mt.clone().lerp(St,(k-.5)/.5);Number.isFinite(U)&&U<Bt&&z.lerp(In,.28),et[A*3+0]=z.r,et[A*3+1]=z.g,et[A*3+2]=z.b}}lt.needsUpdate=!0,Ee.setAttribute("color",new rn(et,3)),Ee.computeVertexNormals(),we=new Gn(Ee,ie),we.receiveShadow=!0,we.castShadow=!1;const oi=(T.bbMin.x+T.bbMax.x)/2,Pt=(T.bbMin.z+T.bbMax.z)/2;if(we.position.set(oi,0,Pt),I.add(we),Oe<Bt&&$e>Bt){const It=new eo(pe,ve,1,1);It.rotateX(-Math.PI/2);const C=new Ao({color:1732264,transparent:!0,opacity:.26,roughness:.15,metalness:0,side:ei,depthWrite:!1});Be=new Gn(It,C),Be.receiveShadow=!1,Be.castShadow=!1,Be.position.set(oi,Bt,Pt),I.add(Be)}const ki=new Ab(Ee,18);xe=new tc(ki,fe),xe.position.copy(we.position),I.add(xe)}m.addEventListener("contextmenu",Te),m.addEventListener("mousedown",He),window.addEventListener("mouseup",Xe),document.addEventListener("pointerlockchange",le),window.addEventListener("mousemove",st),m.addEventListener("wheel",je,{passive:!0}),window.addEventListener("keydown",ze),window.addEventListener("keyup",Ie);let Ge=performance.now(),it=0,We=null;const Re=new G(0,25,60);function Ke(T){const Y=Math.min((T-Ge)/1e3,.05);Ge=T,De(),ae(),he(),Pe(),be();const Z=s.current;if(typeof Z=="number"){const ve=n.current.find(Ee=>Ee&&Ee.playerId===Z);if(ve){const Ee=ve.pos;if(Z!==We&&(Re.set(p.position.x-Ee.x,p.position.y-Ee.y,p.position.z-Ee.z),(!Number.isFinite(Re.x)||!Number.isFinite(Re.y)||!Number.isFinite(Re.z)||Re.length()<1)&&Re.set(0,25,60),We=Z),p.position.set(Ee.x+Re.x,Ee.y+Re.y,Ee.z+Re.z),p.lookAt(Ee.x,Ee.y+1.5,Ee.z),b.rmbDown||b.pointerLocked){const Oe=new G(0,0,-1).applyQuaternion(p.quaternion),$e=new G(1,0,0).applyQuaternion(p.quaternion),ut=new G(0,1,0);b.keys.KeyW&&Re.addScaledVector(Oe,b.speed*Y),b.keys.KeyS&&Re.addScaledVector(Oe,-b.speed*Y),b.keys.KeyA&&Re.addScaledVector($e,-b.speed*Y),b.keys.KeyD&&Re.addScaledVector($e,b.speed*Y),b.keys.KeyQ&&Re.addScaledVector(ut,b.speed*Y),b.keys.KeyZ&&Re.addScaledVector(ut,-b.speed*Y)}p.position.set(Ee.x+Re.x,Ee.y+Re.y,Ee.z+Re.z),p.lookAt(Ee.x,Ee.y+1.5,Ee.z)}}else We=null;const te=r.current;if(Z===null&&te!==w){w=te;const pe=i.current;pe&&(p.position.set(pe.x,pe.y+25,pe.z+60),p.lookAt(pe.x,pe.y+1.5,pe.z))}if(b.pointerLocked&&Z===null&&Se(),(b.rmbDown||b.pointerLocked)&&Z===null){const pe=new G(0,0,-1).applyQuaternion(p.quaternion),ve=new G(1,0,0).applyQuaternion(p.quaternion),Ee=new G(0,1,0);b.keys.KeyW&&p.position.addScaledVector(pe,b.speed*Y),b.keys.KeyS&&p.position.addScaledVector(pe,-b.speed*Y),b.keys.KeyA&&p.position.addScaledVector(ve,-b.speed*Y),b.keys.KeyD&&p.position.addScaledVector(ve,b.speed*Y),b.keys.KeyQ&&p.position.addScaledVector(Ee,b.speed*Y),b.keys.KeyZ&&p.position.addScaledVector(Ee,-b.speed*Y)}_.render(y,p),it=window.requestAnimationFrame(Ke)}return it=window.requestAnimationFrame(Ke),()=>{window.cancelAnimationFrame(it),m.removeEventListener("contextmenu",Te),m.removeEventListener("mousedown",He),window.removeEventListener("mouseup",Xe),document.removeEventListener("pointerlockchange",le),window.removeEventListener("mousemove",st),m.removeEventListener("wheel",je),window.removeEventListener("keydown",ze),window.removeEventListener("keyup",Ie),de.disconnect(),ee.dispose(),oe.dispose(),O.dispose(),Q.dispose(),K.dispose(),re.dispose(),B.dispose(),W.dispose(),$.dispose(),ie.dispose(),fe.dispose(),Le&&(Le.geometry.dispose(),Le=null),we&&(we.geometry.dispose(),we=null),xe&&(xe.geometry.dispose(),xe=null),_.dispose()}},[]),E.jsx("div",{style:{width:"100%",height:"100%",minHeight:400,position:"relative"},children:E.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block",borderRadius:8}})})}function An(t){if(!t)return null;if(typeof t=="object"){if(Array.isArray(t)){if(t.length<3)return null;const r=t[0],s=t[1],o=t[2];return typeof r!="number"||typeof s!="number"||typeof o!="number"?null:{x:r,y:s,z:o}}const e=t.x,n=t.y,i=t.z;return typeof e!="number"||typeof n!="number"||typeof i!="number"?null:{x:e,y:n,z:i}}if(typeof t=="string"){const e=t.trim().split(/\s+/g);if(e.length<3)return null;const n=Number(e[0]),i=Number(e[1]),r=Number(e[2]);return!Number.isFinite(n)||!Number.isFinite(i)||!Number.isFinite(r)?null:{x:n,y:i,z:r}}return null}function Vu(t){if(!t)return null;const e=An(t.bbMin),n=An(t.bbMax),i=typeof t.gridW=="number"?t.gridW:0,r=typeof t.gridH=="number"?t.gridH:0,s=Array.isArray(t.heights)?t.heights.filter(o=>typeof o=="number"):[];return e&&n&&i>=2&&r>=2&&s.length>=i*r?{bbMin:e,bbMax:n,gridW:i,gridH:r,heights:s}:null}function Wu(t){if(!t)return null;const e=Array.isArray(t.descriptors)?t.descriptors:Array.isArray(t.towns)?t.towns:[];if(e.length===0)return null;const n=[];for(const i of e){if(!i)continue;const r=typeof i.name=="string"?i.name.trim():"",s=typeof i.type=="string"?i.type.trim():"",o=typeof i.baseType=="number"?i.baseType:null,a=r||s||(o!==null?`type:${o}`:"descriptor"),l=An(i.pos);l&&n.push({name:a,pos:l})}return n.length===0?null:n}function cg(t,e,n){if(!t||!t.bbMin||!t.bbMax||!Array.isArray(t.heights))return null;const i=Math.floor(t.gridW),r=Math.floor(t.gridH);if(i<2||r<2||t.heights.length<i*r)return null;const s=t.bbMin.x,o=t.bbMax.x,a=t.bbMin.z,l=t.bbMax.z,c=o-s,f=l-a;if(!Number.isFinite(c)||!Number.isFinite(f)||c<=0||f<=0)return null;const d=(e-s)/c,h=(n-a)/f;if(!Number.isFinite(d)||!Number.isFinite(h)||d<0||d>1||h<0||h>1)return null;const m=d*(i-1),_=h*(r-1),y=Math.floor(m),p=Math.floor(_),u=Math.min(i-1,y+1),g=Math.min(r-1,p+1),v=m-y,M=_-p,D=y+i*p,N=u+i*p,P=y+i*g,H=u+i*g,ne=t.heights[D],S=t.heights[N],I=t.heights[P],ee=t.heights[H];if(![ne,S,I,ee].every(Q=>typeof Q=="number"&&Number.isFinite(Q)))return null;const oe=ne*(1-v)+S*v,O=I*(1-v)+ee*v;return oe*(1-M)+O*M}function Db(t){const e=Oi();return F.useMemo(()=>{const i=new URLSearchParams(e.search).get(t);return i||null},[e.search,t])}function sl(t){const e=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,n=Math.floor(e/1e3),i=Math.floor(n/3600),r=Math.floor(n%3600/60),s=n%60,o=String(i).padStart(2,"0"),a=String(r).padStart(2,"0"),l=String(s).padStart(2,"0");return`${o}:${a}:${l}`}function ju(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function Ub(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function Fb(t,e){if(!Array.isArray(t)||t.length===0)return[];const n=new Map;for(const r of t){const s=e(r).trim();s&&n.set(s,(n.get(s)||0)+1)}const i=Array.from(n.entries()).map(([r,s])=>({name:r,count:s}));return i.sort((r,s)=>s.count-r.count||r.name.localeCompare(s.name)),i}function nc(t){const e=t.payload;return e&&typeof e.tsMs=="number"?e.tsMs:null}function ol(t){const e=t.payload;return`${t.receivedAt}|${e&&e.tsMs}|${e&&e.type}`}function ug(t,e,n){if(!Number.isFinite(e)||e<=0)return[];if(t.length<=e)return t;if(typeof n!="number"||!Number.isFinite(n))return t.slice(t.length-e);const i=nc(t[0]),r=nc(t[t.length-1]);if(typeof i!="number"||typeof r!="number")return t.slice(t.length-e);const s=Math.abs(n-i),o=Math.abs(r-n),a=t.length-e;return s>o?t.slice(a):t.slice(0,t.length-a)}function Ob(){const t=Db("serverId"),[e,n]=F.useState([]),[i,r]=F.useState(""),[s,o]=F.useState(null),[a,l]=F.useState(null),[c,f]=F.useState(null),[d,h]=F.useState(!1),[m,_]=F.useState(!0),[y,p]=F.useState({minTsMs:null,maxTsMs:null}),[u,g]=F.useState(null),[v,M]=F.useState(null),[D,N]=F.useState(null),[P,H]=F.useState([]),[ne,S]=F.useState(""),[I,ee]=F.useState(null),[oe,O]=F.useState(null),[Q,K]=F.useState(0),[re,B]=F.useState(!0),[W,$]=F.useState("players"),[ie,fe]=F.useState(!1),[Fe,q]=F.useState(!0),[se,_e]=F.useState(null),[Ce,we]=F.useState(null),xe=F.useRef(new Map),[Be,ke]=F.useState(!1),[V,bt]=F.useState(1),De=F.useRef(null),[Le,Ne]=F.useState(!0),[rt,Ye]=F.useState(1),[b,w]=F.useState(!0),[X,de]=F.useState(!0),[ae,he]=F.useState(!0),[Pe,Se]=F.useState(!0),[Te,He]=F.useState(!0),[Xe,le]=F.useState(20),[st,je]=F.useState([]),ze=F.useRef(0),[Ie,be]=F.useState(()=>{try{const x=window.localStorage.getItem("replay.eventClickOffsetSeconds"),R=x!==null?Number(x):5;return Number.isFinite(R)?Math.max(0,Math.min(60,Math.floor(R))):5}catch{return 5}}),[Ge,it]=F.useState(null),[We,Re]=F.useState([]),Ke=F.useRef(null),T=F.useRef(!1),Y=F.useRef(!1),Z=F.useRef(!1),te=F.useRef(new Map);F.useEffect(()=>{t&&t.length>0&&r(t)},[t]),F.useEffect(()=>{De.current=u},[u]),F.useEffect(()=>{try{window.localStorage.setItem("replay.eventClickOffsetSeconds",String(Ie))}catch{}},[Ie]),F.useEffect(()=>{function x(R){R.code==="KeyF"&&Ge!==null&&it(null)}return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[Ge]),F.useEffect(()=>{let x=!1;async function R(){try{const L=await lM();if(x)return;n(L)}catch(L){if(x)return;const A=L instanceof Error?L.message:"Failed to load servers";f(A)}}return R(),()=>{x=!0}},[]),F.useEffect(()=>{let x=!1;async function R(){try{const A=await Wf();if(x)return;o(A),l(null)}catch(A){if(x)return;const U=A instanceof Error?A.message:"Failed to load server status";l(U)}}R();const L=window.setInterval(R,15e3);return()=>{x=!0,window.clearInterval(L)}},[]);const j=i.length>0?i:null;F.useEffect(()=>{M(null),N(null)},[j]),F.useEffect(()=>{if(!j)return;const x=j;let R=!1;async function L(){h(!0),f(null);try{const[A,U,k,z]=await Promise.all([Cp(x),Rp(x),su(x).catch(()=>null),ou(x).catch(()=>null)]);if(R)return;p({minTsMs:A.minTsMs,maxTsMs:A.maxTsMs}),H(U);const J=Vu(k);J&&M(J);const me=Wu(z);if(me&&N(me),typeof A.maxTsMs=="number"){g(A.maxTsMs);const ue=await ru({serverId:x,untilTsMs:A.maxTsMs,limit:5e3,tail:!0}).catch(()=>[]);if(!R){Re(ue);let ce=null;for(const Me of ue){const Ue=Me.payload;Ue&&typeof Ue.tsMs=="number"&&(ce===null||Ue.tsMs>ce)&&(ce=Ue.tsMs)}Ke.current=ce!==null?ce:Math.max(0,A.maxTsMs-15e3)}}ze.current=Date.now(),ke(!1)}catch(A){if(R)return;const U=A instanceof Error?A.message:"Failed to load replay data";f(U)}finally{R||h(!1)}}return L(),()=>{R=!0}},[j]),F.useEffect(()=>{if(!j||v||Y.current||!We.some(L=>{const A=L.payload;return A&&(A.type==="map"||A.type==="terrain")}))return;let R=!1;return Y.current=!0,su(j).then(L=>{if(R)return;const A=Vu(L);A&&M(A)}).catch(()=>{}).finally(()=>{Y.current=!1}),()=>{R=!0}},[We,j,v]),F.useEffect(()=>{if(!j||D||Z.current||!We.some(L=>{const A=L.payload;return A&&(A.type==="map"||A.type==="terrain"||A.type==="towns"||A.type==="descriptors")}))return;let R=!1;return Z.current=!0,ou(j).then(L=>{if(R)return;const A=Wu(L);A&&N(A)}).catch(()=>{}).finally(()=>{Z.current=!1}),()=>{R=!0}},[We,j,D]),F.useEffect(()=>{if(!j||m||!Be||typeof y.maxTsMs!="number")return;let x=0,R=performance.now();function L(A){const U=Math.min(250,Math.max(0,A-R));R=A;const k=De.current;if(typeof k=="number"){const z=y.maxTsMs;let J=k+U*V;J>=z&&(J=z,ke(!1)),De.current=J,g(J)}x=window.requestAnimationFrame(L)}return x=window.requestAnimationFrame(L),()=>window.cancelAnimationFrame(x)},[Be,m,V,y.maxTsMs,j]),F.useEffect(()=>{if(!j)return;const x=j;let R=!1,L=null;async function A(){try{const U=await Rp(x);R||H(U)}catch{}R||(L=window.setTimeout(A,m?1e3:2500))}return A(),()=>{R=!0,L!==null&&window.clearTimeout(L)}},[m,j]),F.useEffect(()=>{if(!j)return;const x=j;let R=!1,L=null;async function A(){try{const U=await Cp(x);if(R)return;const k=Ke.current;typeof k=="number"&&typeof U.maxTsMs=="number"&&U.maxTsMs+1e3<k&&(Ke.current=null,ze.current=Date.now(),Re([{receivedAt:Date.now(),payload:{type:"restart",tsMs:U.maxTsMs,event:{reason:"server_restart_or_history_cleared"}}}]),je([]),ke(!1),Y.current=!1,su(x).then(z=>{if(R)return;const J=Vu(z);J&&M(J)}).catch(()=>{}),Z.current=!1,ou(x).then(z=>{if(R)return;const J=Wu(z);J&&N(J)}).catch(()=>{})),p({minTsMs:U.minTsMs,maxTsMs:U.maxTsMs}),m&&typeof U.maxTsMs=="number"&&g(U.maxTsMs)}catch{}R||(L=window.setTimeout(A,m?500:1500))}return A(),()=>{R=!0,L!==null&&window.clearTimeout(L)}},[m,j]),F.useEffect(()=>{if(!j)return;const x=j;let R=!1,L=null;async function A(){const U=y.maxTsMs;if(typeof U!="number"){R||(L=window.setTimeout(A,1e3));return}const k=Ke.current,z=typeof k=="number"?k+1:Math.max(0,U-15e3);try{let ue=z;const ce=[];let Me=typeof Ke.current=="number"?Ke.current:null;for(let Ue=0;Ue<5;Ue++){const Ze=await ru({serverId:x,sinceTsMs:ue,untilTsMs:U,limit:5e3});ce.push(...Ze);let ot=null;for(const ct of Ze){const Ve=nc(ct);Ve!==null&&((ot===null||Ve>ot)&&(ot=Ve),(Me===null||Ve>Me)&&(Me=Ve))}if(Ze.length<5e3||ot===null||ot>=U)break;ue=ot+1}if(R)return;ce.length>0&&Re(Ue=>{const Ze=Ue.slice(-500),ot=new Set;for(const Ve of Ze)ot.add(ol(Ve));const ct=Ue.slice();for(const Ve of ce){const Sr=ol(Ve);ot.has(Sr)||ct.push(Ve)}return ug(ct,25e4,De.current)}),typeof Me=="number"&&(Ke.current=Me)}catch(J){if(!R){const me=J instanceof Error?J.message:"Failed to fetch replay events";f(me)}}R||(L=window.setTimeout(A,m?200:900))}return A(),()=>{R=!0,L!==null&&window.clearTimeout(L)}},[m,y.maxTsMs,j]);const pe=F.useMemo(()=>{let x=null,R=null;for(const L of We){const A=L.payload,U=A&&typeof A.tsMs=="number"?A.tsMs:null;U!==null&&((x===null||U<x)&&(x=U),(R===null||U>R)&&(R=U))}return{minTsMs:x,maxTsMs:R}},[We]);F.useEffect(()=>{if(!j)return;const x=j,R=u,L=pe.minTsMs,A=y.minTsMs;if(typeof R!="number"||typeof L!="number"||typeof A!="number"||L<=A+1||R>L+2e3||T.current)return;T.current=!0;const k=Math.max(0,Math.floor(L)-1);ru({serverId:x,untilTsMs:k,limit:5e3,tail:!0}).then(z=>{z.length!==0&&Re(J=>{const me=J.slice(0,800),ue=new Set;for(const Ue of me)ue.add(ol(Ue));const ce=[];for(const Ue of z){const Ze=ol(Ue);ue.has(Ze)||ce.push(Ue)}const Me=ce.concat(J);return ug(Me,25e4,De.current)})}).catch(()=>{}).finally(()=>{T.current=!1})},[u,pe.minTsMs,y.minTsMs,j]);const ve=F.useMemo(()=>{const x=[];for(const R of We){const L=R.payload;!L||typeof L!="object"||L.type==="snapshot"&&typeof L.tsMs=="number"&&Array.isArray(L.players)&&x.push({tsMs:L.tsMs,players:L.players})}return x.sort((R,L)=>R.tsMs-L.tsMs),x},[We]),Ee=F.useMemo(()=>{const x=new Map;for(const R of We){const L=R.payload;if(!L||typeof L!="object"||L.type!=="kill"&&L.type!=="death"||typeof L.tsMs!="number")continue;const A=L.event,U=A&&typeof A.victimPlayerId=="number"?A.victimPlayerId:null;if(U===null)continue;const k=L.tsMs+3e4,z=x.get(U)||0;k>z&&x.set(U,k)}return x},[We]),lt=F.useMemo(()=>({enabled:Le,scale:Math.min(2,Math.max(.5,rt)),background:b}),[b,rt,Le]),Oe=F.useMemo(()=>{const x=u;if(typeof x!="number")return[];if(ve.length===0)return[];let R=0,L=ve.length-1,A=-1;for(;R<=L;){const J=R+L>>1;ve[J].tsMs<=x?(A=J,R=J+1):L=J-1}A<0&&(A=0);const U=ve[A],k=new Map;for(const J of P)k.set(J.playerId,J.name);const z=[];for(const J of U.players){if(!J||typeof J!="object")continue;const me=J.playerId;if(typeof me!="number")continue;const ue=An(J.pos);if(!ue)continue;const ce=!!J.inVehicle,Me=cg(v,ue.x,ue.z),Ze=!ce&&typeof Me=="number"&&Number.isFinite(Me)&&typeof ue.y=="number"&&Number.isFinite(ue.y)&&Math.abs(ue.y-Me)<=3.5?{...ue,y:Me+.35}:ue,ot=An(J.aimDir),ct=J.vehicle&&typeof J.vehicle.name=="string"?String(J.vehicle.name):"",Ve=U.tsMs,Sr=Ee.get(me)||0,yt=typeof Ve=="number"?Sr>Ve:!1;let Xn=k.get(me)||String(me);X&&ce&&ct&&(Xn=`${Xn} (${ct})`),z.push({playerId:me,label:Xn,pos:Ze,aimDir:ot,inVehicle:ce,isDead:yt})}return z},[u,Ee,P,X,ve,v]),$e=F.useMemo(()=>{if(!Te||I===null||typeof u!="number"||ve.length===0)return null;const x=Math.max(5e3,Math.min(6e4,Math.floor(Xe*1e3))),R=u-x,L=[];let A=null;for(const k of ve){if(k.tsMs<R)continue;if(k.tsMs>u)break;const z=k.players.find(Ze=>Ze&&typeof Ze=="object"&&Ze.playerId===I);if(!z)continue;const J=!!z.inVehicle,me=z.entityId,ue=typeof me=="string"&&me.length>0?me:null;ue&&A&&ue!==A&&(L.length=0),ue&&(A=ue);const ce=An(z.pos);if(!ce)continue;const Me=cg(v,ce.x,ce.z),Ue=!J&&typeof Me=="number"&&Number.isFinite(Me)&&typeof ce.y=="number"&&Number.isFinite(ce.y)&&Math.abs(ce.y-Me)<=3.5;L.push(Ue?{...ce,y:Me}:ce)}if(L.length<2)return null;const U=200;if(L.length>U){const k=Math.ceil(L.length/U),z=[];for(let J=0;J<L.length;J+=k)z.push(L[J]);return{points:z}}return{points:L}},[u,Te,I,ve,v,Xe]),ut=F.useMemo(()=>{if(!Pe)return[];const x=u;if(typeof x!="number")return[];const R=[];for(const L of We){const A=L.payload;if(!A||typeof A!="object"||A.type!=="kill"&&A.type!=="death"||typeof A.tsMs!="number"||x<A.tsMs||x>A.tsMs+5e3)continue;const U=A.event,k=U?An(U.victimPos):null;if(k&&(R.push(k),R.length>=40))break}return R},[u,We,Pe]),et=F.useMemo(()=>{const x=y.minTsMs,R=y.maxTsMs,L=u;return typeof x!="number"||typeof R!="number"||typeof L!="number"?{min:0,max:100,value:0,disabled:!0}:R<=x?{min:x,max:x+1,value:x,disabled:!1}:{min:x,max:R,value:Math.min(Math.max(L,x),R),disabled:!1}},[u,y.maxTsMs,y.minTsMs]),zt=F.useMemo(()=>{let x=-1/0,R=0;for(const L of We){if(!L||typeof L.receivedAt!="number")continue;const A=nc(L);A!==null&&A>x&&(x=A,R=L.receivedAt)}return!Number.isFinite(x)||x<0||!Number.isFinite(R)||R<=0?null:{tsMs:x,receivedAt:R}},[We]),mt=F.useMemo(()=>{if(!zt)return null;const x=zt;return R=>{const L=x.receivedAt+(R-x.tsMs);return Number.isFinite(L)?new Date(L).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}):""}},[zt]),St=F.useMemo(()=>{if(Ge===null)return null;const x=P.find(R=>R.playerId===Ge);return x?x.name:String(Ge)},[Ge,P]);function Bt(x){const R=Math.max(0,Math.floor(Ie*1e3)),L=et.disabled?0:et.min,A=et.disabled?x:et.max,U=Math.min(A,Math.max(L,x-R));g(U)}const In=F.useMemo(()=>{const x=ne.trim().toLowerCase(),R=Array.isArray(P)?P:[];return x?R.filter(L=>(L.name||"").toLowerCase().includes(x)||String(L.playerId).includes(x)):R},[ne,P]),oi=F.useMemo(()=>{if(I===null)return null;const x=u;if(typeof x!="number"||ve.length===0)return null;let R=0,L=ve.length-1,A=-1;for(;R<=L;){const z=R+L>>1;ve[z].tsMs<=x?(A=z,R=z+1):L=z-1}return A<0&&(A=0),ve[A].players.find(z=>z&&typeof z=="object"&&z.playerId===I)||null},[u,I,ve]),Pt=F.useMemo(()=>{const x=oi,R=u;if(!x||typeof x!="object"||typeof R!="number")return x;const L=typeof x.playerId=="number"?x.playerId:null;if(L===null)return x;const A=12e3,U=te.current.get(L)||{invTsMs:-1,hotbarTsMs:-1,weaponTsMs:-1},k=x.inventory;Array.isArray(k)&&(U.inventory=k,U.invTsMs=R);const z=x.attachments;Array.isArray(z)&&(U.attachments=z,U.hotbarTsMs=R);const J=x.weapon;J&&typeof J=="object"&&typeof J.name=="string"&&J.name.length>0&&(U.weapon=J,U.weaponTsMs=R),te.current.set(L,U);const me=!Array.isArray(k),ue=!Array.isArray(z),ce=!J||!J.name,Me="inventory"in U&&R-U.invTsMs<=A&&me,Ue="attachments"in U&&R-U.hotbarTsMs<=A&&ue,Ze=!!U.weapon&&R-U.weaponTsMs<=A&&ce;return{...x,inventory:Me?U.inventory:k,attachments:Ue?U.attachments:z,weapon:Ze?U.weapon:J}},[u,oi]),ki=F.useMemo(()=>{const x=[];for(const L of We){const A=L.payload;if(!A||typeof A!="object"||typeof A.tsMs!="number"||A.type==="snapshot"||A.type!=="kill"&&A.type!=="death"&&A.type!=="aiKill"&&A.type!=="join"&&A.type!=="disconnect"&&A.type!=="restart")continue;const U=A.event;if(A.type==="kill"){const k=U&&typeof U.killerName=="string"?U.killerName:"Unknown",z=U&&typeof U.victimName=="string"?U.victimName:"Unknown",J=U&&typeof U.weaponName=="string"?U.weaponName:"",me=U&&typeof U.distanceM=="number"?U.distanceM:null,ue=typeof me=="number"&&Number.isFinite(me)?`${Math.round(me)}m`:"",ce=U?An(U.victimPos):null,Me=U&&typeof U.victimPlayerId=="number"?U.victimPlayerId:null,Ue=[];J&&Ue.push(J),ue&&Ue.push(ue),x.push({tsMs:A.tsMs,type:"kill",title:`${k} → ${z}`,subtitle:Ue.join(" • "),focusPos:ce,focusPlayerId:Me})}else if(A.type==="death"){const k=U&&typeof U.victimPlayerId=="number"?U.victimPlayerId:null,z=U&&typeof U.killerPlayerId=="number"?U.killerPlayerId:null;if(k!==null&&z!==null&&z>=0&&z!==k)continue;const J=U&&typeof U.victimName=="string"?U.victimName:"Unknown",me=U&&typeof U.weaponName=="string"?U.weaponName:"",ue=U&&typeof U.distanceM=="number"?U.distanceM:null,ce=typeof ue=="number"&&Number.isFinite(ue)?`${Math.round(ue)}m`:"",Me=U?An(U.victimPos):null,Ue=[];me&&Ue.push(me),ce&&Ue.push(ce),x.push({tsMs:A.tsMs,type:"death",title:`${J} died`,subtitle:Ue.join(" • "),focusPos:Me,focusPlayerId:k})}else if(A.type==="aiKill"){const k=U&&typeof U.killerName=="string"?U.killerName:"Unknown",z=U&&typeof U.victimName=="string"?U.victimName:"Unknown",J=U&&typeof U.weaponName=="string"?U.weaponName:"",me=U&&typeof U.distanceM=="number"?U.distanceM:null,ue=typeof me=="number"&&Number.isFinite(me)?`${Math.round(me)}m`:"",ce=U?An(U.victimPos):null,Me=U&&typeof U.killerPlayerId=="number"?U.killerPlayerId:null,Ue=[];J&&Ue.push(J),ue&&Ue.push(ue),x.push({tsMs:A.tsMs,type:"aiKill",title:`${k} → AI: ${z}`,subtitle:Ue.join(" • "),focusPos:ce,focusPlayerId:Me})}else{if(A.type==="restart"){x.push({tsMs:A.tsMs,type:"restart",title:"Server restarted",subtitle:"restart / history cleared",focusPos:null,focusPlayerId:null});continue}const k=U&&typeof U.name=="string"?U.name:String(U&&U.playerId?U.playerId:"player"),z=U&&typeof U.playerId=="number"?U.playerId:null;x.push({tsMs:A.tsMs,type:String(A.type),title:`${A.type==="join"?"Join":"Disconnect"}: ${k}`,subtitle:A.type==="disconnect"&&U&&typeof U.kickCause=="string"&&U.kickCause?`cause: ${U.kickCause}`:"",focusPos:null,focusPlayerId:z})}}x.sort((L,A)=>L.tsMs-A.tsMs);const R=u;return typeof R=="number"?x.filter(L=>L.tsMs<=R).slice(-200):x.slice(-200)},[u,We]);F.useEffect(()=>{if(!Ce)return;const x=window.setTimeout(()=>{const R=xe.current.get(Ce);R&&R.scrollIntoView({block:"nearest",behavior:"smooth"})},0);return()=>window.clearTimeout(x)},[Ce,W]);const It=F.useMemo(()=>{const x=y.minTsMs,R=y.maxTsMs;if(typeof x!="number"||typeof R!="number")return[];const L=[];for(const U of We){const k=U.payload;if(!k||typeof k!="object"||k.type!=="kill"&&k.type!=="death"&&k.type!=="aiKill"&&k.type!=="join"&&k.type!=="disconnect"&&k.type!=="restart"||typeof k.tsMs!="number"||k.tsMs<x||k.tsMs>R)continue;const z=k.event;if(k.type==="kill"){const J=z&&typeof z.killerName=="string"?z.killerName:"Unknown",me=z&&typeof z.victimName=="string"?z.victimName:"Unknown",ue=z&&typeof z.weaponName=="string"?z.weaponName:"",ce=z&&typeof z.distanceM=="number"?z.distanceM:null,Me=typeof ce=="number"&&Number.isFinite(ce)?`${Math.round(ce)}m`:"",Ue=z?An(z.victimPos):null,Ze=z&&typeof z.victimPlayerId=="number"?z.victimPlayerId:null,ot=[];ue&&ot.push(ue),Me&&ot.push(Me),L.push({tsMs:k.tsMs,type:"kill",title:`${J} → ${me}`,subtitle:ot.join(" • "),focusPos:Ue,focusPlayerId:Ze})}else if(k.type==="death"){const J=z&&typeof z.victimPlayerId=="number"?z.victimPlayerId:null,me=z&&typeof z.killerPlayerId=="number"?z.killerPlayerId:null;if(J!==null&&me!==null&&me>=0&&me!==J)continue;const ue=z&&typeof z.victimName=="string"?z.victimName:"Unknown",ce=z&&typeof z.weaponName=="string"?z.weaponName:"",Me=z&&typeof z.distanceM=="number"?z.distanceM:null,Ue=typeof Me=="number"&&Number.isFinite(Me)?`${Math.round(Me)}m`:"",Ze=z?An(z.victimPos):null,ot=[];ce&&ot.push(ce),Ue&&ot.push(Ue),L.push({tsMs:k.tsMs,type:"death",title:`${ue} died`,subtitle:ot.join(" • "),focusPos:Ze,focusPlayerId:J})}else if(k.type==="aiKill"){const J=z&&typeof z.killerName=="string"?z.killerName:"Unknown",me=z&&typeof z.victimName=="string"?z.victimName:"Unknown",ue=z&&typeof z.weaponName=="string"?z.weaponName:"",ce=z&&typeof z.distanceM=="number"?z.distanceM:null,Me=typeof ce=="number"&&Number.isFinite(ce)?`${Math.round(ce)}m`:"",Ue=z?An(z.victimPos):null,Ze=z&&typeof z.killerPlayerId=="number"?z.killerPlayerId:null,ot=[];ue&&ot.push(ue),Me&&ot.push(Me),L.push({tsMs:k.tsMs,type:"aiKill",title:`${J} → AI: ${me}`,subtitle:ot.join(" • "),focusPos:Ue,focusPlayerId:Ze})}else if(k.type==="restart"){const J=z&&typeof z.reason=="string"?z.reason:"",me=J==="session_start"?"server restart":J==="server_restart_or_history_cleared"?"restart / history cleared":J||"restart";L.push({tsMs:k.tsMs,type:"restart",title:"Server restarted",subtitle:me,focusPos:null,focusPlayerId:null})}else{const J=z&&typeof z.name=="string"?z.name:String(z&&z.playerId?z.playerId:"player"),me=z&&typeof z.playerId=="number"?z.playerId:null;L.push({tsMs:k.tsMs,type:k.type,title:`${k.type==="join"?"Join":"Disconnect"}: ${J}`,subtitle:k.type==="disconnect"&&z&&typeof z.kickCause=="string"&&z.kickCause?`cause: ${z.kickCause}`:"",focusPos:null,focusPlayerId:me})}}L.sort((U,k)=>U.tsMs-k.tsMs);const A=420;if(L.length>A){const U=Math.ceil(L.length/A),k=[];for(let z=0;z<L.length;z+=U)k.push(L[z]);return k}return L},[We,y.maxTsMs,y.minTsMs]);function C(x){const R=`${Date.now()}-${Math.random().toString(16).slice(2)}`;je(L=>[{id:R,...x,visible:!1},...L].slice(0,5)),window.setTimeout(()=>{je(L=>L.map(A=>A.id===R?{...A,visible:!0}:A))},10),window.setTimeout(()=>{je(L=>L.map(A=>A.id===R?{...A,visible:!1}:A))},4500),window.setTimeout(()=>{je(L=>L.filter(A=>A.id!==R))},5200)}return F.useEffect(()=>{if(!m||We.length===0)return;const x=ze.current;let R=x;const L=[];for(const A of We)!A||typeof A.receivedAt!="number"||A.receivedAt<=x||(A.receivedAt>R&&(R=A.receivedAt),L.push({receivedAt:A.receivedAt,payload:A.payload}));L.sort((A,U)=>A.receivedAt-U.receivedAt);for(const A of L){const U=A.payload;if(!(!U||typeof U!="object")&&U.type!=="snapshot"){if(U.type==="kill"){const k=U.event,z=k&&typeof k.killerName=="string"?k.killerName:"Unknown",J=k&&typeof k.victimName=="string"?k.victimName:"Unknown",me=k&&typeof k.weaponName=="string"&&k.weaponName.length>0?k.weaponName:"",ue=k&&typeof k.distanceM=="number"?k.distanceM:null,ce=typeof ue=="number"&&Number.isFinite(ue)?`${Math.round(ue)}m`:"",Me=[];me&&Me.push(me),ce&&Me.push(ce),C({kind:"kill",title:`${z} → ${J}`,subtitle:Me.length>0?Me.join(" • "):"Kill"})}else if(U.type==="death"){const k=U.event,z=k&&typeof k.victimPlayerId=="number"?k.victimPlayerId:null,J=k&&typeof k.killerPlayerId=="number"?k.killerPlayerId:null;if(z!==null&&J!==null&&J>=0&&J!==z)continue;const me=k&&typeof k.victimName=="string"?k.victimName:"Unknown",ue=k&&typeof k.weaponName=="string"&&k.weaponName.length>0?k.weaponName:"",ce=k&&typeof k.distanceM=="number"?k.distanceM:null,Me=typeof ce=="number"&&Number.isFinite(ce)?`${Math.round(ce)}m`:"",Ue=[];ue&&Ue.push(ue),Me&&Ue.push(Me),C({kind:"event",title:`${me} died`,subtitle:Ue.length>0?Ue.join(" • "):"Death"})}else if(U.type==="aiKill"){const k=U.event,z=k&&typeof k.killerName=="string"?k.killerName:"Unknown",J=k&&typeof k.victimName=="string"?k.victimName:"Unknown",me=k&&typeof k.weaponName=="string"&&k.weaponName.length>0?k.weaponName:"",ue=k&&typeof k.distanceM=="number"?k.distanceM:null,ce=typeof ue=="number"&&Number.isFinite(ue)?`${Math.round(ue)}m`:"",Me=[];me&&Me.push(me),ce&&Me.push(ce),C({kind:"kill",title:`${z} → AI: ${J}`,subtitle:Me.length>0?Me.join(" • "):"AI kill"})}}}R>x&&(ze.current=R)},[We,m]),E.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden"},children:[E.jsxs("div",{className:"row",style:{gap:12,padding:12,alignItems:"center"},children:[E.jsxs("div",{style:{minWidth:240,maxWidth:520,flex:1},children:[E.jsxs("select",{className:"input",value:i,onChange:x=>{r(x.target.value),H([]),ee(null),O(null),Re([]),p({minTsMs:null,maxTsMs:null}),g(null),Ke.current=null,ze.current=0,je([])},children:[E.jsx("option",{value:"",children:"Select a server…"}),e.map(x=>E.jsxs("option",{value:x.id,children:[x.name," (",x.id,")"]},x.id))]}),e.length===0?E.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"No servers returned yet."}):null]}),j?null:E.jsx("button",{className:"button",onClick:()=>{l(null),Wf().then(x=>o(x)).catch(x=>{const R=x instanceof Error?x.message:"Failed to load server status";l(R)})},children:"Refresh overview"}),d?E.jsx("div",{className:"muted",style:{fontSize:12},children:"Loading…"}):null,c?E.jsx("div",{className:"error",style:{flex:1},children:c}):null]}),j?E.jsx("div",{style:{position:"relative",width:"100%",height:"calc(100vh - 72px)",padding:12,boxSizing:"border-box"},children:E.jsx("div",{className:"card",style:{width:"100%",height:"100%",padding:0,overflow:"hidden"},children:E.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[E.jsx(Ib,{players:Oe,focusTarget:oe,focusNonce:Q,followPlayerId:Ge,nameTags:lt,showAimLines:ae,trail:$e,deathMarkers:ut,terrain:v,towns:D||void 0}),Ge!==null&&St?E.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:132,display:"flex",justifyContent:"center",pointerEvents:"none"},children:E.jsx("div",{className:"card",style:{padding:"8px 12px",background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)"},children:E.jsxs("div",{style:{fontWeight:800,fontSize:12},children:["Attached to ",St,", press F to unattach"]})})}):null,E.jsx("div",{style:{position:"absolute",top:12,right:12,width:340,display:"flex",flexDirection:"column",gap:8,pointerEvents:"none"},children:st.map(x=>E.jsxs("div",{style:{pointerEvents:"none",padding:"10px 12px",borderRadius:10,background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)",opacity:x.visible?1:0,transform:x.visible?"translateY(0px)":"translateY(-6px)",transition:"opacity 250ms ease, transform 250ms ease"},children:[E.jsx("div",{style:{fontWeight:700,fontSize:13},children:x.title}),x.subtitle?E.jsx("div",{className:"muted",style:{fontSize:12},children:x.subtitle}):null]},x.id))}),E.jsx("div",{style:{position:"absolute",top:12,left:12,width:re?360:"auto"},children:E.jsxs("div",{className:"card",style:{padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"nowrap"},children:[E.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[E.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:W==="players"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:W==="players"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>$("players"),children:"Players"}),E.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:W==="events"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:W==="events"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>$("events"),children:"Events"})]}),E.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[W==="players"?E.jsx("button",{type:"button",className:"button",title:"Nametag options",style:{padding:"6px 10px"},onClick:()=>fe(x=>!x),children:"⚙"}):null,E.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>B(x=>!x),children:re?"−":"+"})]})]}),re?E.jsxs("div",{className:"stack",style:{marginTop:10},children:[W==="players"?E.jsxs(E.Fragment,{children:[ie?E.jsxs("div",{style:{border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:[E.jsx("div",{className:"label",style:{marginBottom:8},children:"Nametags"}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:Le,onChange:x=>Ne(x.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Show nametags"})]}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:b,onChange:x=>w(x.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Background"})]}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:X,onChange:x=>de(x.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Include vehicle in label"})]}),E.jsx("div",{className:"label",style:{marginBottom:6},children:"Nametag size"}),E.jsx("input",{style:{width:"100%"},type:"range",min:.6,max:1.6,step:.1,value:rt,onChange:x=>Ye(Number(x.target.value))}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:[rt.toFixed(1),"×"]}),E.jsx("div",{style:{height:8}}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:ae,onChange:x=>he(x.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Aim direction line"})]}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:Pe,onChange:x=>Se(x.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Death markers"})]}),E.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[E.jsx("input",{type:"checkbox",checked:Te,onChange:x=>He(x.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Trails (focused player)"})]}),Te?E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"label",style:{marginBottom:6},children:"Trail window (seconds)"}),E.jsx("input",{style:{width:"100%"},type:"range",min:5,max:60,step:5,value:Xe,onChange:x=>le(Number(x.target.value))}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:[Xe,"s"]})]}):null]}):null,E.jsx("input",{className:"input",placeholder:"Search players…",value:ne,onChange:x=>S(x.target.value)})]}):null,W==="players"?E.jsx("div",{className:"scroll",style:{maxHeight:240,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:In.length===0?E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No players."}):In.map(x=>{const R=I===x.playerId;return E.jsxs("button",{type:"button",onClick:()=>{$("players"),ee(x.playerId),it(x.playerId);const L=Oe.find(A=>A.playerId===x.playerId);L&&(O(L.pos),K(A=>A+1))},className:"button",style:{width:"100%",textAlign:"left",borderRadius:0,border:"none",borderBottom:"1px solid rgba(255,255,255,0.06)",background:R?"rgba(255,255,255,0.08)":"transparent",padding:"8px 10px"},children:[E.jsx("div",{style:{fontWeight:700,fontSize:13},children:x.name}),E.jsxs("div",{className:"muted",style:{fontSize:11},children:["#",x.playerId]})]},x.playerId)})}):E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between",gap:10},children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Event click offset"}),E.jsxs("div",{className:"row",style:{gap:8},children:[E.jsx("input",{className:"input",style:{width:90,padding:"6px 10px"},type:"number",min:0,max:60,step:1,value:Ie,onChange:x=>be(Math.max(0,Math.min(60,Math.floor(Number(x.target.value)||0)))),title:"Jump this many seconds before an event"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"sec"})]})]}),E.jsx("div",{className:"scroll",style:{maxWidth:340,overflowX:"auto",overflowY:"hidden",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:ki.length===0?E.jsx("div",{className:"muted",style:{fontSize:12},children:"No events in buffer yet."}):E.jsx("div",{style:{display:"flex",gap:10},children:ki.slice().reverse().map((x,R)=>{const L=`${x.tsMs}|${x.type}|${x.title}|${x.subtitle||""}`,A=Ce===L;return E.jsxs("button",{ref:U=>{U?xe.current.set(L,U):xe.current.delete(L)},type:"button",className:"button",style:{minWidth:220,textAlign:"left",borderRadius:10,border:A?"1px solid rgba(255,255,255,0.35)":"1px solid rgba(255,255,255,0.10)",background:A?"rgba(255,255,255,0.10)":"rgba(255,255,255,0.06)",padding:"8px 10px"},onClick:()=>{we(L),ke(!1),_(!1),Bt(x.tsMs),typeof x.focusPlayerId=="number"&&ee(x.focusPlayerId),x.focusPos&&(O(x.focusPos),K(U=>U+1))},children:[E.jsx("div",{style:{fontWeight:800,fontSize:12},children:x.title}),E.jsxs("div",{className:"muted",style:{fontSize:11,marginTop:2},children:["+",sl(x.tsMs-et.min),mt?` • ${mt(x.tsMs)}`:"",x.subtitle?` • ${x.subtitle}`:""]})]},`${x.tsMs}-${R}`)})})})]}),E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Selected"}),I===null?E.jsx("div",{className:"muted",style:{fontSize:12},children:"Click a player to view equipment."}):Pt?E.jsxs("div",{style:{fontSize:12},children:[E.jsxs("div",{className:"muted",style:{marginBottom:6},children:["pos: ",JSON.stringify(Pt.pos)]}),E.jsxs("details",{open:!0,children:[E.jsx("summary",{style:{cursor:"pointer",fontWeight:700},children:"Weapon"}),E.jsx("div",{className:"muted",style:{marginTop:6},children:Pt.weapon&&Pt.weapon.name?Pt.weapon.name:"None"})]}),E.jsx("div",{style:{height:6}}),E.jsxs("details",{children:[E.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Inventory (",Array.isArray(Pt.inventory)?Pt.inventory.length:0,")"]}),E.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:(()=>{const x=Fb(Pt.inventory,R=>R&&R.name?String(R.name):"Item");return x.length===0?E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No inventory data in this snapshot."}):x.slice(0,80).map((R,L)=>E.jsx("div",{style:{padding:"7px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:E.jsxs("div",{style:{fontSize:12},children:[R.name,R.count>1?` ×${R.count}`:""]})},L))})()})]}),E.jsx("div",{style:{height:6}}),E.jsxs("details",{children:[E.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Hotbar (",Array.isArray(Pt.attachments)?Pt.attachments.length:0,")"]}),E.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:Array.isArray(Pt.attachments)&&Pt.attachments.length>0?Pt.attachments.map((x,R)=>E.jsx("div",{style:{padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:E.jsxs("div",{style:{fontSize:12},children:[x&&x.slot?E.jsxs("span",{className:"muted",style:{fontSize:11},children:[String(x.slot),":"]}):null," ",x&&x.name?String(x.name):"Item"]})},R)):E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No attachments data in this snapshot."})})]})]}):E.jsx("div",{className:"muted",style:{fontSize:12},children:"No snapshot data for this player at the current time."})]})]}):null]})}),E.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:12,display:"flex",justifyContent:"center"},children:E.jsxs("div",{className:"card",style:{width:"min(980px, 100%)",padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Replay time"}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:["+",sl(et.value-et.min)," of +",sl(et.max-et.min),mt?` • ${mt(et.value)}`:""]})]}),E.jsxs("div",{className:"row",style:{gap:10,alignItems:"center"},children:[E.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>{m&&_(!1),ke(x=>!x)},disabled:et.disabled,children:Be?"Pause":"Play"}),E.jsxs("select",{className:"input",style:{width:110,padding:"6px 10px"},value:String(V),onChange:x=>bt(Number(x.target.value)),disabled:et.disabled,title:"Playback speed",children:[E.jsx("option",{value:"0.25",children:"0.25×"}),E.jsx("option",{value:"0.5",children:"0.5×"}),E.jsx("option",{value:"1",children:"1×"}),E.jsx("option",{value:"2",children:"2×"}),E.jsx("option",{value:"4",children:"4×"})]}),E.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[E.jsx("input",{type:"checkbox",checked:Fe,onChange:x=>q(x.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Events"})]}),E.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[E.jsx("input",{type:"checkbox",checked:m,onChange:x=>{const R=x.target.checked;_(R),R&&ke(!1)}}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Live"})]})]})]}),Fe?E.jsxs("div",{style:{position:"relative",height:18,marginTop:6,marginBottom:4},children:[E.jsx("div",{style:{position:"absolute",left:0,right:0,top:8,height:2,background:"rgba(255,255,255,0.10)"}}),se?E.jsxs("div",{style:{position:"absolute",left:`${se.leftPct}%`,top:0,transform:"translate(-50%, -110%)",zIndex:10,pointerEvents:"none",maxWidth:320,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:"6px 8px"},children:[E.jsx("div",{style:{fontWeight:800,fontSize:12,lineHeight:1.2},children:se.title}),E.jsx("div",{className:"muted",style:{fontSize:11,marginTop:2,lineHeight:1.2},children:se.subtitle})]}):null,(()=>{const x=et.min,R=et.max,L=Math.max(1,R-x);return It.map((A,U)=>{const k=(A.tsMs-x)/L,z=Math.min(1,Math.max(0,k))*100,J=A.type==="kill"||A.type==="death"||A.type==="aiKill"?"rgba(255,74,74,0.95)":A.type==="restart"?"rgba(255,217,102,0.95)":"rgba(183,247,200,0.95)",me=A.type==="disconnect"?"brightness(0.65) saturate(1.1)":void 0,ue=`+${sl(A.tsMs-x)}${mt?` • ${mt(A.tsMs)}`:""}${A.subtitle?` • ${A.subtitle}`:""}`,ce=`${A.tsMs}|${A.type}|${A.title}|${A.subtitle||""}`;return E.jsx("button",{type:"button",className:"button",style:{position:"absolute",left:`calc(${z}% - 4px)`,top:4,width:8,height:8,borderRadius:999,padding:0,border:"1px solid rgba(0,0,0,0.35)",background:J,filter:me},onMouseEnter:()=>{_e({tsMs:A.tsMs,type:A.type,title:A.title,subtitle:ue,leftPct:z})},onMouseLeave:()=>_e(null),onClick:()=>{ke(!1),_(!1),Bt(A.tsMs),typeof A.focusPlayerId=="number"&&ee(A.focusPlayerId),A.focusPos&&(O(A.focusPos),K(Me=>Me+1)),$("events"),we(ce),_e(null)}},`${A.tsMs}-${U}-${A.type}`)})})()]}):null,E.jsx("input",{style:{width:"100%"},type:"range",min:et.min,max:et.max,value:et.value,disabled:et.disabled,onChange:x=>{const R=Number(x.target.value);Number.isFinite(R)&&(m&&_(!1),Be&&ke(!1),g(R))}})]})})]})})}):null,j?null:E.jsxs("div",{style:{padding:12,height:"calc(100vh - 72px)",boxSizing:"border-box",overflow:"auto"},children:[E.jsxs("div",{className:"card",style:{marginBottom:12},children:[E.jsx("div",{style:{fontWeight:900,letterSpacing:.2},children:"Server overview"}),E.jsx("div",{style:{marginTop:4,fontSize:13},children:"Pick a server to open the replay viewer. Times are shown in your local clock."}),a?E.jsx("div",{className:"error",style:{marginTop:10},children:a}):null]}),E.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:(s&&s.length>0?s:e.map(x=>({serverId:x.id,name:x.name,lastIngestTsMs:null,minTsMs:null,maxTsMs:null,firstReceivedAt:null,lastReceivedAt:null,storedEvents:null,totalEvents:null,retentionMs:0,mapId:null}))).map(x=>{const R=typeof x.retentionMs=="number"?x.retentionMs:0,L=typeof x.lastReceivedAt=="number"?x.lastReceivedAt:null,A=R>0&&L!==null?L-R:null,U=typeof x.firstReceivedAt=="number"?A!==null?Math.max(x.firstReceivedAt,A):x.firstReceivedAt:A;return E.jsxs("button",{className:"card",style:{textAlign:"left",cursor:"pointer",border:"none"},onClick:()=>{r(x.serverId),H([]),ee(null),O(null),Re([]),p({minTsMs:null,maxTsMs:null}),g(null),Ke.current=null,ze.current=0,je([])},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12},children:[E.jsx("div",{style:{fontWeight:900},children:x.name}),E.jsx("div",{className:"muted",style:{fontSize:12},children:x.serverId})]}),E.jsxs("div",{style:{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Events"}),E.jsx("div",{style:{fontWeight:800},children:typeof x.storedEvents=="number"?`${x.storedEvents} events`:"—"}),typeof x.totalEvents=="number"&&typeof x.storedEvents=="number"&&x.totalEvents!==x.storedEvents?E.jsxs("div",{className:"muted",style:{fontSize:12,marginTop:2},children:["All-time: ",x.totalEvents," events"]}):null]}),E.jsxs("div",{children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Retention"}),E.jsx("div",{style:{fontWeight:800},children:R>0?Ub(R):"∞"})]}),E.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Buffer window"}),E.jsxs("div",{style:{fontWeight:800,fontSize:13},children:[ju(U)," → ",ju(L)]})]}),E.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[E.jsx("div",{className:"muted",style:{fontSize:12},children:"Last ingest"}),E.jsx("div",{style:{fontWeight:800,fontSize:13},children:ju(x.lastIngestTsMs)})]})]})]},x.serverId)})}),(!s||s.length===0)&&e.length===0?E.jsx("div",{style:{marginTop:12},children:"No servers yet — add one in the Dev page, then come back here."}):null]})]})}function fg(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function kb(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function zb(){const[t,e]=F.useState(null),[n,i]=F.useState(null);F.useEffect(()=>{let s=!1;return Wf().then(o=>{s||(e(o),i(null))}).catch(o=>{if(s)return;const a=o instanceof Error?o.message:"Failed to load replay status";i(a)}),()=>{s=!0}},[]);const r=F.useMemo(()=>{if(!t)return[];const s=t.slice();return s.sort((o,a)=>{const l=typeof o.storedEvents=="number"?o.storedEvents:-1;return(typeof a.storedEvents=="number"?a.storedEvents:-1)-l}),s.slice(0,6)},[t]);return E.jsx("div",{className:"container",children:E.jsxs("div",{className:"stack",children:[E.jsx("div",{className:"card",style:{padding:18},children:E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsx("div",{className:"label",children:"Welcome"}),E.jsx("h1",{className:"h1",style:{marginTop:0},children:"ReforgedZ Admin"}),E.jsx("div",{className:"muted",children:"Use the sidebar to manage users, servers, and replay history."})]})}),E.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:[E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",style:{gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Replay overview"}),E.jsx("div",{className:"muted",style:{fontSize:13},children:t?`${t.length} server${t.length===1?"":"s"} detected.`:"Loading…"}),n?E.jsx("div",{className:"error",style:{marginTop:8},children:n}):null]}),r.length>0?E.jsx("div",{className:"stack",style:{gap:8},children:r.map(s=>{const o=typeof s.retentionMs=="number"?s.retentionMs:0,a=typeof s.lastReceivedAt=="number"?s.lastReceivedAt:null,l=o>0&&a!==null?a-o:null,c=typeof s.firstReceivedAt=="number"?l!==null?Math.max(s.firstReceivedAt,l):s.firstReceivedAt:l;return E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:850},children:s.name}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:[fg(c)," → ",fg(a)]})]}),E.jsxs("div",{style:{textAlign:"right"},children:[E.jsx("div",{style:{fontWeight:900},children:typeof s.storedEvents=="number"?`${s.storedEvents} events`:"—"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:o>0?kb(o):"∞"}),typeof s.totalEvents=="number"&&typeof s.storedEvents=="number"&&s.totalEvents!==s.storedEvents?E.jsxs("div",{className:"muted",style:{fontSize:11},children:["All-time ",s.totalEvents," events"]}):null]})]},s.serverId)})}):E.jsx("div",{className:"muted",style:{fontSize:12},children:"Open Replay Tool to see a detailed per-server dashboard."})]})}),E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",style:{gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Replay Tool tips"}),E.jsx("div",{className:"muted",style:{fontSize:13},children:"A few quick controls that help a lot."})]}),E.jsxs("div",{className:"stack",style:{gap:6,fontSize:13},children:[E.jsxs("div",{children:[E.jsx("span",{style:{fontWeight:850},children:"Attach camera:"})," click a player in the left panel."]}),E.jsxs("div",{children:[E.jsx("span",{style:{fontWeight:850},children:"Detach:"})," press ",E.jsx("span",{style:{fontWeight:900},children:"F"}),"."]}),E.jsxs("div",{children:[E.jsx("span",{style:{fontWeight:850},children:"Event jump offset:"})," defaults to 5s before the event (configurable in Replay Tool)."]})]})]})}),E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",style:{gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Retention"}),E.jsx("div",{className:"muted",style:{fontSize:13},children:"Replay is a rolling buffer. Restarts are marked in the timeline."})]}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"If you clear a server’s history, replay data is removed but cached map metadata is preserved."})]})})]})]})})}function Bb(){const[t,e]=F.useState(null),[n,i]=F.useState(!1),[r,s]=F.useState([]),[o,a]=F.useState(""),[l,c]=F.useState(""),[f,d]=F.useState(!0),[h,m]=F.useState(!1),[_,y]=F.useState(!1);async function p(){i(!0),e(null);try{const g=await cM();s(g)}catch(g){e(g instanceof Error?g.message:"Failed to load users")}finally{i(!1)}}F.useEffect(()=>{p()},[]);const u=F.useMemo(()=>o.trim().length>=3&&l.length>=6,[l.length,o]);return E.jsx("div",{className:"container",children:E.jsxs("div",{className:"stack",children:[E.jsx("h1",{className:"h1",children:"Admin"}),t?E.jsx("div",{className:"error",children:t}):null,E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Create user"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Create a new account and choose which tools it can access."})]}),E.jsxs("div",{className:"row",children:[E.jsxs("div",{style:{flex:1,minWidth:240},children:[E.jsx("div",{className:"label",children:"Username"}),E.jsx("input",{className:"input",value:o,onChange:g=>a(g.target.value),placeholder:"username"})]}),E.jsxs("div",{style:{flex:1,minWidth:240},children:[E.jsx("div",{className:"label",children:"Password"}),E.jsx("input",{className:"input",type:"password",value:l,onChange:g=>c(g.target.value),placeholder:"password"})]})]}),E.jsxs("div",{className:"row",style:{gap:16},children:[E.jsxs("label",{className:"row",style:{gap:8},children:[E.jsx("input",{type:"checkbox",checked:f,onChange:g=>d(g.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Replay Tool"})]}),E.jsxs("label",{className:"row",style:{gap:8},children:[E.jsx("input",{type:"checkbox",checked:h,onChange:g=>m(g.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Admin"})]}),E.jsxs("label",{className:"row",style:{gap:8},children:[E.jsx("input",{type:"checkbox",checked:_,onChange:g=>y(g.target.checked)}),E.jsx("span",{className:"muted",style:{fontSize:12},children:"Dev"})]})]}),E.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:E.jsx("button",{className:"button buttonPrimary",disabled:!u||n,onClick:async()=>{i(!0),e(null);try{await uM({username:o.trim(),password:l,tools:{replay:f,admin:h,dev:_}}),a(""),c(""),d(!0),m(!1),y(!1),await p()}catch(g){e(g instanceof Error?g.message:"Failed to create user")}finally{i(!1)}},children:"Create user"})})]})}),E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Users"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Manage tool access and reset passwords."})]}),E.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:p,children:"Refresh"})]}),E.jsx("div",{className:"scroll",style:{maxHeight:420,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No users found."}):r.map(g=>{var v,M,D,N,P,H;return E.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:E.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:800},children:g.username}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:["tools: ",(v=g.tools)!=null&&v.replay?"replay ":"",(M=g.tools)!=null&&M.admin?"admin ":"",(D=g.tools)!=null&&D.dev?"dev ":""]})]}),E.jsxs("div",{className:"row",style:{gap:8},children:[E.jsxs("button",{className:"button",onClick:async()=>{var ne,S,I;i(!0),e(null);try{await au(g.username,{replay:!((ne=g.tools)!=null&&ne.replay),admin:!!((S=g.tools)!=null&&S.admin),dev:!!((I=g.tools)!=null&&I.dev)}),await p()}catch(ee){e(ee instanceof Error?ee.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle replay tool access",children:["Replay: ",(N=g.tools)!=null&&N.replay?"On":"Off"]}),E.jsxs("button",{className:"button",onClick:async()=>{var ne,S,I;i(!0),e(null);try{await au(g.username,{replay:!!((ne=g.tools)!=null&&ne.replay),admin:!((S=g.tools)!=null&&S.admin),dev:!!((I=g.tools)!=null&&I.dev)}),await p()}catch(ee){e(ee instanceof Error?ee.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle admin access",children:["Admin: ",(P=g.tools)!=null&&P.admin?"On":"Off"]}),E.jsxs("button",{className:"button",onClick:async()=>{var ne,S,I;i(!0),e(null);try{await au(g.username,{replay:!!((ne=g.tools)!=null&&ne.replay),admin:!!((S=g.tools)!=null&&S.admin),dev:!((I=g.tools)!=null&&I.dev)}),await p()}catch(ee){e(ee instanceof Error?ee.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle dev access",children:["Dev: ",(H=g.tools)!=null&&H.dev?"On":"Off"]}),E.jsx("button",{className:"button",style:{borderColor:"rgba(255, 180, 180, 0.35)"},disabled:n,onClick:async()=>{if(confirm(`Delete user '${g.username}'?`)){i(!0),e(null);try{await fM(g.username),await p()}catch(ne){e(ne instanceof Error?ne.message:"Failed to delete user")}finally{i(!1)}}},children:"Delete"})]})]})},g.username)})})]})})]})})}function Hb(){const[t,e]=F.useState(null),[n,i]=F.useState(!1),[r,s]=F.useState([]),[o,a]=F.useState(""),[l,c]=F.useState(""),[f,d]=F.useState("");async function h(){i(!0),e(null);try{const m=await dM();s(m)}catch(m){e(m instanceof Error?m.message:"Failed to load dev servers")}finally{i(!1)}}return F.useEffect(()=>{h()},[]),E.jsx("div",{className:"container",children:E.jsxs("div",{className:"stack",children:[E.jsx("h1",{className:"h1",children:"Dev"}),t?E.jsx("div",{className:"error",children:t}):null,E.jsx("div",{className:"card",children:E.jsxs("div",{className:"stack",children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Add server"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Adds a new ingest key so the backend will accept replay uploads for that server."})]}),E.jsxs("div",{className:"row",children:[E.jsxs("div",{style:{flex:1,minWidth:240},children:[E.jsx("div",{className:"label",children:"Server ID"}),E.jsx("input",{className:"input",value:o,onChange:m=>a(m.target.value),placeholder:"reforgedz-dev-eu-1"})]}),E.jsxs("div",{style:{flex:1,minWidth:240},children:[E.jsx("div",{className:"label",children:"Server name (optional)"}),E.jsx("input",{className:"input",value:f,onChange:m=>d(m.target.value),placeholder:"EU #1"})]})]}),E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Server key / secret"}),E.jsx("input",{className:"input",value:l,onChange:m=>c(m.target.value),placeholder:"secret"}),E.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"This must match what the Reforger exporter sends as serverKey."})]}),E.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:E.jsx("button",{className:"button buttonPrimary",disabled:n||o.trim().length===0||l.trim().length<6,onClick:async()=>{i(!0),e(null);try{await hM({serverId:o.trim(),serverKey:l.trim(),name:f.trim()||void 0}),a(""),c(""),d(""),await h()}catch(m){e(m instanceof Error?m.message:"Failed to add server")}finally{i(!1)}},children:"Add server"})})]})}),E.jsxs("div",{className:"card",children:[E.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"Servers"}),E.jsx("div",{className:"muted",style:{fontSize:12},children:"Clear history deletes stored replay history for that server (events + snapshots). Cached map data is kept."})]}),E.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:h,children:"Refresh"})]}),E.jsx("div",{style:{height:10}}),E.jsx("div",{className:"scroll",style:{maxHeight:520,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?E.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No servers configured."}):r.map(m=>E.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:E.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:800},children:m.name||m.id}),E.jsxs("div",{className:"muted",style:{fontSize:12},children:["id: ",m.id,m.keyHint?` • key: ${m.keyHint}`:""]})]}),E.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Clear history for '${m.id}'? This deletes stored replay data.`)){i(!0),e(null);try{await pM(m.id),await h()}catch(_){e(_ instanceof Error?_.message:"Failed to clear history")}finally{i(!1)}}},children:"Clear history"}),E.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Regenerate terrain data for '${m.id}'? This queues a command for the exporter to re-send map terrain.`)){i(!0),e(null);try{await mM(m.id),await h()}catch(_){e(_ instanceof Error?_.message:"Failed to regenerate terrain")}finally{i(!1)}}},children:"Regenerate terrain data"})]})},m.id))})]})]})})}function al(t){return E.jsx(JS,{to:t.to,className:({isActive:e})=>`navItem${e?" navItemActive":""}`,children:t.label})}function Gb(){const t=Sc();function e(){rM(),t("/login",{replace:!0})}return E.jsxs("div",{className:"appShell",children:[E.jsxs("aside",{className:"sidebar",children:[E.jsxs("div",{className:"stack",style:{gap:10},children:[E.jsxs("div",{children:[E.jsx("div",{className:"label",children:"ReforgedZ"}),E.jsx("div",{className:"h2",children:"Admin Panel"})]}),E.jsx("div",{style:{height:8}}),E.jsx("div",{className:"label",children:"Tools"}),E.jsxs("div",{className:"stack",style:{gap:8},children:[E.jsx(al,{to:"/",label:"Home"}),iu("replay")?E.jsx(al,{to:"/replay",label:"Replay Tool"}):null,iu("admin")?E.jsx(al,{to:"/admin",label:"Admin"}):null,iu("dev")?E.jsx(al,{to:"/dev",label:"Dev"}):null]})]}),E.jsx("div",{style:{flex:1}}),E.jsx("button",{className:"button buttonPrimary",onClick:e,children:"Log out"})]}),E.jsx("main",{className:"main",children:E.jsx(zS,{})})]})}function Vb(t){const e=Oi();return Kt()?E.jsx(E.Fragment,{children:t.children}):E.jsx(D0,{to:"/login",replace:!0,state:{from:e.pathname}})}function Wb(){return E.jsxs(HS,{children:[E.jsx(Xi,{path:"/login",element:E.jsx(gM,{})}),E.jsxs(Xi,{element:E.jsx(Vb,{children:E.jsx(Gb,{})}),children:[E.jsx(Xi,{path:"/",element:E.jsx(zb,{})}),E.jsx(Xi,{path:"/replay",element:E.jsx(Ob,{})}),E.jsx(Xi,{path:"/admin",element:E.jsx(Bb,{})}),E.jsx(Xi,{path:"/dev",element:E.jsx(Hb,{})})]}),E.jsx(Xi,{path:"*",element:E.jsx(D0,{to:"/",replace:!0})})]})}Xu.createRoot(document.getElementById("root")).render(E.jsx(Mg.StrictMode,{children:E.jsx(qS,{children:E.jsx(Wb,{})})}));
