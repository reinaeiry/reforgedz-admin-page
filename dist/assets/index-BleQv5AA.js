function M_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function E_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mg={exports:{}},uc={},gg={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),w_=Symbol.for("react.portal"),T_=Symbol.for("react.fragment"),A_=Symbol.for("react.strict_mode"),b_=Symbol.for("react.profiler"),C_=Symbol.for("react.provider"),R_=Symbol.for("react.context"),P_=Symbol.for("react.forward_ref"),L_=Symbol.for("react.suspense"),N_=Symbol.for("react.memo"),I_=Symbol.for("react.lazy"),ph=Symbol.iterator;function D_(t){return t===null||typeof t!="object"?null:(t=ph&&t[ph]||t["@@iterator"],typeof t=="function"?t:null)}var vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_g=Object.assign,yg={};function lo(t,e,n){this.props=t,this.context=e,this.refs=yg,this.updater=n||vg}lo.prototype.isReactComponent={};lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xg(){}xg.prototype=lo.prototype;function cd(t,e,n){this.props=t,this.context=e,this.refs=yg,this.updater=n||vg}var ud=cd.prototype=new xg;ud.constructor=cd;_g(ud,lo.prototype);ud.isPureReactComponent=!0;var mh=Array.isArray,Sg=Object.prototype.hasOwnProperty,fd={current:null},Mg={key:!0,ref:!0,__self:!0,__source:!0};function Eg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Sg.call(e,i)&&!Mg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:pa,type:t,key:s,ref:o,props:r,_owner:fd.current}}function U_(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function F_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gh=/\/+/g;function Dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?F_(""+t.key):e.toString(36)}function gl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case w_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Dc(o,0):i,mh(r)?(n="",t!=null&&(n=t.replace(gh,"$&/")+"/"),gl(r,e,n,"",function(c){return c})):r!=null&&(dd(r)&&(r=U_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(gh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",mh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Dc(s,a);o+=gl(s,e,n,l,r)}else if(l=D_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Dc(s,a++),o+=gl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ma(t,e,n){if(t==null)return t;var i=[],r=0;return gl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function O_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bn={current:null},vl={transition:null},k_={ReactCurrentDispatcher:bn,ReactCurrentBatchConfig:vl,ReactCurrentOwner:fd};function wg(){throw Error("act(...) is not supported in production builds of React.")}xt.Children={map:Ma,forEach:function(t,e,n){Ma(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ma(t,function(){e++}),e},toArray:function(t){return Ma(t,function(e){return e})||[]},only:function(t){if(!dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};xt.Component=lo;xt.Fragment=T_;xt.Profiler=b_;xt.PureComponent=cd;xt.StrictMode=A_;xt.Suspense=L_;xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_;xt.act=wg;xt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=_g({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Sg.call(e,l)&&!Mg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:pa,type:t.type,key:r,ref:s,props:i,_owner:o}};xt.createContext=function(t){return t={$$typeof:R_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:C_,_context:t},t.Consumer=t};xt.createElement=Eg;xt.createFactory=function(t){var e=Eg.bind(null,t);return e.type=t,e};xt.createRef=function(){return{current:null}};xt.forwardRef=function(t){return{$$typeof:P_,render:t}};xt.isValidElement=dd;xt.lazy=function(t){return{$$typeof:I_,_payload:{_status:-1,_result:t},_init:O_}};xt.memo=function(t,e){return{$$typeof:N_,type:t,compare:e===void 0?null:e}};xt.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};xt.unstable_act=wg;xt.useCallback=function(t,e){return bn.current.useCallback(t,e)};xt.useContext=function(t){return bn.current.useContext(t)};xt.useDebugValue=function(){};xt.useDeferredValue=function(t){return bn.current.useDeferredValue(t)};xt.useEffect=function(t,e){return bn.current.useEffect(t,e)};xt.useId=function(){return bn.current.useId()};xt.useImperativeHandle=function(t,e,n){return bn.current.useImperativeHandle(t,e,n)};xt.useInsertionEffect=function(t,e){return bn.current.useInsertionEffect(t,e)};xt.useLayoutEffect=function(t,e){return bn.current.useLayoutEffect(t,e)};xt.useMemo=function(t,e){return bn.current.useMemo(t,e)};xt.useReducer=function(t,e,n){return bn.current.useReducer(t,e,n)};xt.useRef=function(t){return bn.current.useRef(t)};xt.useState=function(t){return bn.current.useState(t)};xt.useSyncExternalStore=function(t,e,n){return bn.current.useSyncExternalStore(t,e,n)};xt.useTransition=function(){return bn.current.useTransition()};xt.version="18.3.1";gg.exports=xt;var F=gg.exports;const Tg=E_(F),z_=M_({__proto__:null,default:Tg},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_=F,H_=Symbol.for("react.element"),G_=Symbol.for("react.fragment"),V_=Object.prototype.hasOwnProperty,W_=B_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j_={key:!0,ref:!0,__self:!0,__source:!0};function Ag(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)V_.call(e,i)&&!j_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:H_,type:t,key:s,ref:o,props:r,_owner:W_.current}}uc.Fragment=G_;uc.jsx=Ag;uc.jsxs=Ag;mg.exports=uc;var M=mg.exports,Zu={},bg={exports:{}},Vn={},Cg={exports:{}},Rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,$){var K=H.length;H.push($);e:for(;0<K;){var se=K-1>>>1,fe=H[se];if(0<r(fe,$))H[se]=$,H[K]=fe,K=se;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var $=H[0],K=H.pop();if(K!==$){H[0]=K;e:for(var se=0,fe=H.length,Ke=fe>>>1;se<Ke;){var ee=2*(se+1)-1,ae=H[ee],Ae=ee+1,Oe=H[Ae];if(0>r(ae,K))Ae<fe&&0>r(Oe,ae)?(H[se]=Oe,H[Ae]=K,se=Ae):(H[se]=ae,H[ee]=K,se=ee);else if(Ae<fe&&0>r(Oe,K))H[se]=Oe,H[Ae]=K,se=Ae;else break e}}return $}function r(H,$){var K=H.sortIndex-$.sortIndex;return K!==0?K:H.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,g=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(H){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=H)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function S(H){if(y=!1,v(H),!_)if(n(l)!==null)_=!0,Q(P);else{var $=n(c);$!==null&&oe(S,$.startTime-H)}}function P(H,$){_=!1,y&&(y=!1,u(G),G=-1),g=!0;var K=h;try{for(v($),d=n(l);d!==null&&(!(d.expirationTime>$)||H&&!R());){var se=d.callback;if(typeof se=="function"){d.callback=null,h=d.priorityLevel;var fe=se(d.expirationTime<=$);$=t.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(l)&&i(l),v($)}else i(l);d=n(l)}if(d!==null)var Ke=!0;else{var ee=n(c);ee!==null&&oe(S,ee.startTime-$),Ke=!1}return Ke}finally{d=null,h=K,g=!1}}var C=!1,b=null,G=-1,re=5,x=-1;function R(){return!(t.unstable_now()-x<re)}function te(){if(b!==null){var H=t.unstable_now();x=H;var $=!0;try{$=b(!0,H)}finally{$?le():(C=!1,b=null)}}else C=!1}var le;if(typeof m=="function")le=function(){m(te)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,ne=k.port2;k.port1.onmessage=te,le=function(){ne.postMessage(null)}}else le=function(){p(te,0)};function Q(H){b=H,C||(C=!0,le())}function oe(H,$){G=p(function(){H(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Q(P))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var K=h;h=$;try{return H()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,$){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var K=h;h=H;try{return $()}finally{h=K}},t.unstable_scheduleCallback=function(H,$,K){var se=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?se+K:se):K=se,H){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=K+fe,H={id:f++,callback:$,priorityLevel:H,startTime:K,expirationTime:fe,sortIndex:-1},K>se?(H.sortIndex=K,e(c,H),n(l)===null&&H===n(c)&&(y?(u(G),G=-1):y=!0,oe(S,K-se))):(H.sortIndex=fe,e(l,H),_||g||(_=!0,Q(P))),H},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(H){var $=h;return function(){var K=h;h=$;try{return H.apply(this,arguments)}finally{h=K}}}})(Rg);Cg.exports=Rg;var X_=Cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_=F,Gn=X_;function ge(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pg=new Set,Yo={};function ns(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(Yo[t]=e,t=0;t<e.length;t++)Pg.add(e[t])}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=Object.prototype.hasOwnProperty,Y_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vh={},_h={};function q_(t){return Qu.call(_h,t)?!0:Qu.call(vh,t)?!1:Y_.test(t)?_h[t]=!0:(vh[t]=!0,!1)}function K_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Z_(t,e,n,i){if(e===null||typeof e>"u"||K_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Cn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var hn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){hn[t]=new Cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];hn[e]=new Cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){hn[t]=new Cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){hn[t]=new Cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){hn[t]=new Cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){hn[t]=new Cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){hn[t]=new Cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){hn[t]=new Cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){hn[t]=new Cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var hd=/[\-:]([a-z])/g;function pd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hd,pd);hn[e]=new Cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hd,pd);hn[e]=new Cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hd,pd);hn[e]=new Cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){hn[t]=new Cn(t,1,!1,t.toLowerCase(),null,!1,!1)});hn.xlinkHref=new Cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){hn[t]=new Cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function md(t,e,n,i){var r=hn.hasOwnProperty(e)?hn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Z_(e,n,r,i)&&(n=null),i||r===null?q_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Vi=$_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ea=Symbol.for("react.element"),bs=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),gd=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),Lg=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),vd=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),Ig=Symbol.for("react.offscreen"),yh=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=yh&&t[yh]||t["@@iterator"],typeof t=="function"?t:null)}var Ht=Object.assign,Uc;function Do(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var Fc=!1;function Oc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Do(t):""}function Q_(t){switch(t.tag){case 5:return Do(t.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return t=Oc(t.type,!1),t;case 11:return t=Oc(t.type.render,!1),t;case 1:return t=Oc(t.type,!0),t;default:return""}}function nf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cs:return"Fragment";case bs:return"Portal";case Ju:return"Profiler";case gd:return"StrictMode";case ef:return"Suspense";case tf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ng:return(t.displayName||"Context")+".Consumer";case Lg:return(t._context.displayName||"Context")+".Provider";case vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _d:return e=t.displayName||null,e!==null?e:nf(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return nf(t(e))}catch{}}return null}function J_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nf(e);case 8:return e===gd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ey(t){var e=Dg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wa(t){t._valueTracker||(t._valueTracker=ey(t))}function Ug(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Dg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rf(t,e){var n=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fg(t,e){e=e.checked,e!=null&&md(t,"checked",e,!1)}function sf(t,e){Fg(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?of(t,e.type,n):e.hasOwnProperty("defaultValue")&&of(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function of(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Uo=Array.isArray;function Hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ge(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ge(92));if(Uo(n)){if(1<n.length)throw Error(ge(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function Og(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Eh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ta,zg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ty=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(t){ty.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ko[e]=ko[t]})});function Bg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ko.hasOwnProperty(t)&&ko[t]?(""+e).trim():e+"px"}function Hg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Bg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ny=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cf(t,e){if(e){if(ny[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ge(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ge(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ge(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ge(62))}}function uf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var df=null,Gs=null,Vs=null;function wh(t){if(t=va(t)){if(typeof df!="function")throw Error(ge(280));var e=t.stateNode;e&&(e=mc(e),df(t.stateNode,t.type,e))}}function Gg(t){Gs?Vs?Vs.push(t):Vs=[t]:Gs=t}function Vg(){if(Gs){var t=Gs,e=Vs;if(Vs=Gs=null,wh(t),e)for(t=0;t<e.length;t++)wh(e[t])}}function Wg(t,e){return t(e)}function jg(){}var kc=!1;function Xg(t,e,n){if(kc)return t(e,n);kc=!0;try{return Wg(t,e,n)}finally{kc=!1,(Gs!==null||Vs!==null)&&(jg(),Vg())}}function Ko(t,e){var n=t.stateNode;if(n===null)return null;var i=mc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ge(231,e,typeof n));return n}var hf=!1;if(ki)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){hf=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{hf=!1}function iy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var zo=!1,Ll=null,Nl=!1,pf=null,ry={onError:function(t){zo=!0,Ll=t}};function sy(t,e,n,i,r,s,o,a,l){zo=!1,Ll=null,iy.apply(ry,arguments)}function oy(t,e,n,i,r,s,o,a,l){if(sy.apply(this,arguments),zo){if(zo){var c=Ll;zo=!1,Ll=null}else throw Error(ge(198));Nl||(Nl=!0,pf=c)}}function is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Th(t){if(is(t)!==t)throw Error(ge(188))}function ay(t){var e=t.alternate;if(!e){if(e=is(t),e===null)throw Error(ge(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Th(r),t;if(s===i)return Th(r),e;s=s.sibling}throw Error(ge(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ge(189))}}if(n.alternate!==i)throw Error(ge(190))}if(n.tag!==3)throw Error(ge(188));return n.stateNode.current===n?t:e}function Yg(t){return t=ay(t),t!==null?qg(t):null}function qg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qg(t);if(e!==null)return e;t=t.sibling}return null}var Kg=Gn.unstable_scheduleCallback,Ah=Gn.unstable_cancelCallback,ly=Gn.unstable_shouldYield,cy=Gn.unstable_requestPaint,Wt=Gn.unstable_now,uy=Gn.unstable_getCurrentPriorityLevel,xd=Gn.unstable_ImmediatePriority,Zg=Gn.unstable_UserBlockingPriority,Il=Gn.unstable_NormalPriority,fy=Gn.unstable_LowPriority,Qg=Gn.unstable_IdlePriority,fc=null,Ei=null;function dy(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(fc,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:my,hy=Math.log,py=Math.LN2;function my(t){return t>>>=0,t===0?32:31-(hy(t)/py|0)|0}var Aa=64,ba=4194304;function Fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Fo(a):(s&=o,s!==0&&(i=Fo(s)))}else o=n&~r,o!==0?i=Fo(o):s!==0&&(i=Fo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function gy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-di(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=gy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function mf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jg(){var t=Aa;return Aa<<=1,!(Aa&4194240)&&(Aa=64),t}function zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function _y(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Sd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ct=0;function ev(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tv,Md,nv,iv,rv,gf=!1,Ca=[],cr=null,ur=null,fr=null,Zo=new Map,Qo=new Map,ir=[],yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bh(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function yo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=va(e),e!==null&&Md(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xy(t,e,n,i,r){switch(e){case"focusin":return cr=yo(cr,t,e,n,i,r),!0;case"dragenter":return ur=yo(ur,t,e,n,i,r),!0;case"mouseover":return fr=yo(fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Zo.set(s,yo(Zo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qo.set(s,yo(Qo.get(s)||null,t,e,n,i,r)),!0}return!1}function sv(t){var e=zr(t.target);if(e!==null){var n=is(e);if(n!==null){if(e=n.tag,e===13){if(e=$g(n),e!==null){t.blockedOn=e,rv(t.priority,function(){nv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ff=i,n.target.dispatchEvent(i),ff=null}else return e=va(n),e!==null&&Md(e),t.blockedOn=n,!1;e.shift()}return!0}function Ch(t,e,n){_l(t)&&n.delete(e)}function Sy(){gf=!1,cr!==null&&_l(cr)&&(cr=null),ur!==null&&_l(ur)&&(ur=null),fr!==null&&_l(fr)&&(fr=null),Zo.forEach(Ch),Qo.forEach(Ch)}function xo(t,e){t.blockedOn===e&&(t.blockedOn=null,gf||(gf=!0,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,Sy)))}function Jo(t){function e(r){return xo(r,t)}if(0<Ca.length){xo(Ca[0],t);for(var n=1;n<Ca.length;n++){var i=Ca[n];i.blockedOn===t&&(i.blockedOn=null)}}for(cr!==null&&xo(cr,t),ur!==null&&xo(ur,t),fr!==null&&xo(fr,t),Zo.forEach(e),Qo.forEach(e),n=0;n<ir.length;n++)i=ir[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)sv(n),n.blockedOn===null&&ir.shift()}var Ws=Vi.ReactCurrentBatchConfig,Ul=!0;function My(t,e,n,i){var r=Ct,s=Ws.transition;Ws.transition=null;try{Ct=1,Ed(t,e,n,i)}finally{Ct=r,Ws.transition=s}}function Ey(t,e,n,i){var r=Ct,s=Ws.transition;Ws.transition=null;try{Ct=4,Ed(t,e,n,i)}finally{Ct=r,Ws.transition=s}}function Ed(t,e,n,i){if(Ul){var r=vf(t,e,n,i);if(r===null)qc(t,e,i,Fl,n),bh(t,i);else if(xy(r,t,e,n,i))i.stopPropagation();else if(bh(t,i),e&4&&-1<yy.indexOf(t)){for(;r!==null;){var s=va(r);if(s!==null&&tv(s),s=vf(t,e,n,i),s===null&&qc(t,e,i,Fl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var Fl=null;function vf(t,e,n,i){if(Fl=null,t=yd(i),t=zr(t),t!==null)if(e=is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function ov(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uy()){case xd:return 1;case Zg:return 4;case Il:case fy:return 16;case Qg:return 536870912;default:return 16}default:return 16}}var sr=null,wd=null,yl=null;function av(){if(yl)return yl;var t,e=wd,n=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return yl=r.slice(t,1<i?1-i:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ra(){return!0}function Rh(){return!1}function Wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ra:Rh,this.isPropagationStopped=Rh,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Td=Wn(co),ga=Ht({},co,{view:0,detail:0}),wy=Wn(ga),Bc,Hc,So,dc=Ht({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(Bc=t.screenX-So.screenX,Hc=t.screenY-So.screenY):Hc=Bc=0,So=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Ph=Wn(dc),Ty=Ht({},dc,{dataTransfer:0}),Ay=Wn(Ty),by=Ht({},ga,{relatedTarget:0}),Gc=Wn(by),Cy=Ht({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),Ry=Wn(Cy),Py=Ht({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ly=Wn(Py),Ny=Ht({},co,{data:0}),Lh=Wn(Ny),Iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Uy[t])?!!e[t]:!1}function Ad(){return Fy}var Oy=Ht({},ga,{key:function(t){if(t.key){var e=Iy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ad,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ky=Wn(Oy),zy=Ht({},dc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=Wn(zy),By=Ht({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ad}),Hy=Wn(By),Gy=Ht({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vy=Wn(Gy),Wy=Ht({},dc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=Wn(Wy),Xy=[9,13,27,32],bd=ki&&"CompositionEvent"in window,Bo=null;ki&&"documentMode"in document&&(Bo=document.documentMode);var $y=ki&&"TextEvent"in window&&!Bo,lv=ki&&(!bd||Bo&&8<Bo&&11>=Bo),Ih=" ",Dh=!1;function cv(t,e){switch(t){case"keyup":return Xy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rs=!1;function Yy(t,e){switch(t){case"compositionend":return uv(e);case"keypress":return e.which!==32?null:(Dh=!0,Ih);case"textInput":return t=e.data,t===Ih&&Dh?null:t;default:return null}}function qy(t,e){if(Rs)return t==="compositionend"||!bd&&cv(t,e)?(t=av(),yl=wd=sr=null,Rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lv&&e.locale!=="ko"?null:e.data;default:return null}}var Ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ky[t.type]:e==="textarea"}function fv(t,e,n,i){Gg(i),e=Ol(e,"onChange"),0<e.length&&(n=new Td("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ho=null,ea=null;function Zy(t){Mv(t,0)}function hc(t){var e=Ns(t);if(Ug(e))return t}function Qy(t,e){if(t==="change")return e}var dv=!1;if(ki){var Vc;if(ki){var Wc="oninput"in document;if(!Wc){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),Wc=typeof Fh.oninput=="function"}Vc=Wc}else Vc=!1;dv=Vc&&(!document.documentMode||9<document.documentMode)}function Oh(){Ho&&(Ho.detachEvent("onpropertychange",hv),ea=Ho=null)}function hv(t){if(t.propertyName==="value"&&hc(ea)){var e=[];fv(e,ea,t,yd(t)),Xg(Zy,e)}}function Jy(t,e,n){t==="focusin"?(Oh(),Ho=e,ea=n,Ho.attachEvent("onpropertychange",hv)):t==="focusout"&&Oh()}function ex(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hc(ea)}function tx(t,e){if(t==="click")return hc(e)}function nx(t,e){if(t==="input"||t==="change")return hc(e)}function ix(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pi=typeof Object.is=="function"?Object.is:ix;function ta(t,e){if(pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qu.call(e,r)||!pi(t[r],e[r]))return!1}return!0}function kh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zh(t,e){var n=kh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kh(n)}}function pv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mv(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function Cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rx(t){var e=mv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pv(n.ownerDocument.documentElement,n)){if(i!==null&&Cd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=zh(n,s);var o=zh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sx=ki&&"documentMode"in document&&11>=document.documentMode,Ps=null,_f=null,Go=null,yf=!1;function Bh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yf||Ps==null||Ps!==Pl(i)||(i=Ps,"selectionStart"in i&&Cd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Go&&ta(Go,i)||(Go=i,i=Ol(_f,"onSelect"),0<i.length&&(e=new Td("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ps)))}function Pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},jc={},gv={};ki&&(gv=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function pc(t){if(jc[t])return jc[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gv)return jc[t]=e[n];return t}var vv=pc("animationend"),_v=pc("animationiteration"),yv=pc("animationstart"),xv=pc("transitionend"),Sv=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){Sv.set(t,e),ns(e,[t])}for(var Xc=0;Xc<Hh.length;Xc++){var $c=Hh[Xc],ox=$c.toLowerCase(),ax=$c[0].toUpperCase()+$c.slice(1);Ar(ox,"on"+ax)}Ar(vv,"onAnimationEnd");Ar(_v,"onAnimationIteration");Ar(yv,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(xv,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function Gh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,oy(i,e,void 0,t),t.currentTarget=null}function Mv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Gh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Gh(r,a,c),s=l}}}if(Nl)throw t=pf,Nl=!1,pf=null,t}function Nt(t,e){var n=e[wf];n===void 0&&(n=e[wf]=new Set);var i=t+"__bubble";n.has(i)||(Ev(e,t,2,!1),n.add(i))}function Yc(t,e,n){var i=0;e&&(i|=4),Ev(n,t,i,e)}var La="_reactListening"+Math.random().toString(36).slice(2);function na(t){if(!t[La]){t[La]=!0,Pg.forEach(function(n){n!=="selectionchange"&&(lx.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[La]||(e[La]=!0,Yc("selectionchange",!1,e))}}function Ev(t,e,n,i){switch(ov(e)){case 1:var r=My;break;case 4:r=Ey;break;default:r=Ed}n=r.bind(null,e,n,t),r=void 0,!hf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Xg(function(){var c=s,f=yd(n),d=[];e:{var h=Sv.get(t);if(h!==void 0){var g=Td,_=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":g=ky;break;case"focusin":_="focus",g=Gc;break;case"focusout":_="blur",g=Gc;break;case"beforeblur":case"afterblur":g=Gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Hy;break;case vv:case _v:case yv:g=Ry;break;case xv:g=Vy;break;case"scroll":g=wy;break;case"wheel":g=jy;break;case"copy":case"cut":case"paste":g=Ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Nh}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var m=c,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=Ko(m,u),S!=null&&y.push(ia(m,S,v)))),p)break;m=m.return}0<y.length&&(h=new g(h,_,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==ff&&(_=n.relatedTarget||n.fromElement)&&(zr(_)||_[zi]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?zr(_):null,_!==null&&(p=is(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(y=Ph,S="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Nh,S="onPointerLeave",u="onPointerEnter",m="pointer"),p=g==null?h:Ns(g),v=_==null?h:Ns(_),h=new y(S,m+"leave",g,n,f),h.target=p,h.relatedTarget=v,S=null,zr(f)===c&&(y=new y(u,m+"enter",_,n,f),y.target=v,y.relatedTarget=p,S=y),p=S,g&&_)t:{for(y=g,u=_,m=0,v=y;v;v=os(v))m++;for(v=0,S=u;S;S=os(S))v++;for(;0<m-v;)y=os(y),m--;for(;0<v-m;)u=os(u),v--;for(;m--;){if(y===u||u!==null&&y===u.alternate)break t;y=os(y),u=os(u)}y=null}else y=null;g!==null&&Vh(d,h,g,y,!1),_!==null&&p!==null&&Vh(d,p,_,y,!0)}}e:{if(h=c?Ns(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var P=Qy;else if(Uh(h))if(dv)P=nx;else{P=ex;var C=Jy}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=tx);if(P&&(P=P(t,c))){fv(d,P,n,f);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&of(h,"number",h.value)}switch(C=c?Ns(c):window,t){case"focusin":(Uh(C)||C.contentEditable==="true")&&(Ps=C,_f=c,Go=null);break;case"focusout":Go=_f=Ps=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,Bh(d,n,f);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":Bh(d,n,f)}var b;if(bd)e:{switch(t){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Rs?cv(t,n)&&(G="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(lv&&n.locale!=="ko"&&(Rs||G!=="onCompositionStart"?G==="onCompositionEnd"&&Rs&&(b=av()):(sr=f,wd="value"in sr?sr.value:sr.textContent,Rs=!0)),C=Ol(c,G),0<C.length&&(G=new Lh(G,t,null,n,f),d.push({event:G,listeners:C}),b?G.data=b:(b=uv(n),b!==null&&(G.data=b)))),(b=$y?Yy(t,n):qy(t,n))&&(c=Ol(c,"onBeforeInput"),0<c.length&&(f=new Lh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=b))}Mv(d,e)})}function ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ko(t,n),s!=null&&i.unshift(ia(t,s,r)),s=Ko(t,e),s!=null&&i.push(ia(t,s,r))),t=t.return}return i}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ko(n,s),l!=null&&o.unshift(ia(n,l,a))):r||(l=Ko(n,s),l!=null&&o.push(ia(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var cx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function Wh(t){return(typeof t=="string"?t:""+t).replace(cx,`
`).replace(ux,"")}function Na(t,e,n){if(e=Wh(e),Wh(t)!==e&&n)throw Error(ge(425))}function kl(){}var xf=null,Sf=null;function Mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ef=typeof setTimeout=="function"?setTimeout:void 0,fx=typeof clearTimeout=="function"?clearTimeout:void 0,jh=typeof Promise=="function"?Promise:void 0,dx=typeof queueMicrotask=="function"?queueMicrotask:typeof jh<"u"?function(t){return jh.resolve(null).then(t).catch(hx)}:Ef;function hx(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Jo(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),Si="__reactFiber$"+uo,ra="__reactProps$"+uo,zi="__reactContainer$"+uo,wf="__reactEvents$"+uo,px="__reactListeners$"+uo,mx="__reactHandles$"+uo;function zr(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xh(t);t!==null;){if(n=t[Si])return n;t=Xh(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[Si]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ge(33))}function mc(t){return t[ra]||null}var Tf=[],Is=-1;function br(t){return{current:t}}function Dt(t){0>Is||(t.current=Tf[Is],Tf[Is]=null,Is--)}function Lt(t,e){Is++,Tf[Is]=t.current,t.current=e}var Er={},xn=br(Er),In=br(!1),qr=Er;function Ks(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Dn(t){return t=t.childContextTypes,t!=null}function zl(){Dt(In),Dt(xn)}function $h(t,e,n){if(xn.current!==Er)throw Error(ge(168));Lt(xn,e),Lt(In,n)}function wv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ge(108,J_(t)||"Unknown",r));return Ht({},n,i)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,qr=xn.current,Lt(xn,t),Lt(In,In.current),!0}function Yh(t,e,n){var i=t.stateNode;if(!i)throw Error(ge(169));n?(t=wv(t,e,qr),i.__reactInternalMemoizedMergedChildContext=t,Dt(In),Dt(xn),Lt(xn,t)):Dt(In),Lt(In,n)}var Ni=null,gc=!1,Zc=!1;function Tv(t){Ni===null?Ni=[t]:Ni.push(t)}function gx(t){gc=!0,Tv(t)}function Cr(){if(!Zc&&Ni!==null){Zc=!0;var t=0,e=Ct;try{var n=Ni;for(Ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,gc=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),Kg(xd,Cr),r}finally{Ct=e,Zc=!1}}return null}var Ds=[],Us=0,Hl=null,Gl=0,Xn=[],$n=0,Kr=null,Di=1,Ui="";function Ir(t,e){Ds[Us++]=Gl,Ds[Us++]=Hl,Hl=t,Gl=e}function Av(t,e,n){Xn[$n++]=Di,Xn[$n++]=Ui,Xn[$n++]=Kr,Kr=t;var i=Di;t=Ui;var r=32-di(i)-1;i&=~(1<<r),n+=1;var s=32-di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Di=1<<32-di(e)+r|n<<r|i,Ui=s+t}else Di=1<<s|n<<r|i,Ui=t}function Rd(t){t.return!==null&&(Ir(t,1),Av(t,1,0))}function Pd(t){for(;t===Hl;)Hl=Ds[--Us],Ds[Us]=null,Gl=Ds[--Us],Ds[Us]=null;for(;t===Kr;)Kr=Xn[--$n],Xn[$n]=null,Ui=Xn[--$n],Xn[$n]=null,Di=Xn[--$n],Xn[$n]=null}var Hn=null,Bn=null,Ut=!1,li=null;function bv(t,e){var n=Zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Hn=t,Bn=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Hn=t,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:Di,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Hn=t,Bn=null,!0):!1;default:return!1}}function Af(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bf(t){if(Ut){var e=Bn;if(e){var n=e;if(!qh(t,e)){if(Af(t))throw Error(ge(418));e=dr(n.nextSibling);var i=Hn;e&&qh(t,e)?bv(i,n):(t.flags=t.flags&-4097|2,Ut=!1,Hn=t)}}else{if(Af(t))throw Error(ge(418));t.flags=t.flags&-4097|2,Ut=!1,Hn=t}}}function Kh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function Ia(t){if(t!==Hn)return!1;if(!Ut)return Kh(t),Ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mf(t.type,t.memoizedProps)),e&&(e=Bn)){if(Af(t))throw Cv(),Error(ge(418));for(;e;)bv(t,e),e=dr(e.nextSibling)}if(Kh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ge(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bn=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bn=null}}else Bn=Hn?dr(t.stateNode.nextSibling):null;return!0}function Cv(){for(var t=Bn;t;)t=dr(t.nextSibling)}function Zs(){Bn=Hn=null,Ut=!1}function Ld(t){li===null?li=[t]:li.push(t)}var vx=Vi.ReactCurrentBatchConfig;function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ge(309));var i=n.stateNode}if(!i)throw Error(ge(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ge(284));if(!n._owner)throw Error(ge(290,t))}return t}function Da(t,e){throw t=Object.prototype.toString.call(e),Error(ge(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zh(t){var e=t._init;return e(t._payload)}function Rv(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=gr(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,S){return m===null||m.tag!==6?(m=ru(v,u.mode,S),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,S){var P=v.type;return P===Cs?f(u,m,v.props.children,S,v.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===tr&&Zh(P)===m.type)?(S=r(m,v.props),S.ref=Mo(u,m,v),S.return=u,S):(S=bl(v.type,v.key,v.props,null,u.mode,S),S.ref=Mo(u,m,v),S.return=u,S)}function c(u,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=su(v,u.mode,S),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function f(u,m,v,S,P){return m===null||m.tag!==7?(m=Wr(v,u.mode,S,P),m.return=u,m):(m=r(m,v),m.return=u,m)}function d(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ru(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ea:return v=bl(m.type,m.key,m.props,null,u.mode,v),v.ref=Mo(u,null,m),v.return=u,v;case bs:return m=su(m,u.mode,v),m.return=u,m;case tr:var S=m._init;return d(u,S(m._payload),v)}if(Uo(m)||vo(m))return m=Wr(m,u.mode,v,null),m.return=u,m;Da(u,m)}return null}function h(u,m,v,S){var P=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ea:return v.key===P?l(u,m,v,S):null;case bs:return v.key===P?c(u,m,v,S):null;case tr:return P=v._init,h(u,m,P(v._payload),S)}if(Uo(v)||vo(v))return P!==null?null:f(u,m,v,S,null);Da(u,v)}return null}function g(u,m,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(m,u,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ea:return u=u.get(S.key===null?v:S.key)||null,l(m,u,S,P);case bs:return u=u.get(S.key===null?v:S.key)||null,c(m,u,S,P);case tr:var C=S._init;return g(u,m,v,C(S._payload),P)}if(Uo(S)||vo(S))return u=u.get(v)||null,f(m,u,S,P,null);Da(m,S)}return null}function _(u,m,v,S){for(var P=null,C=null,b=m,G=m=0,re=null;b!==null&&G<v.length;G++){b.index>G?(re=b,b=null):re=b.sibling;var x=h(u,b,v[G],S);if(x===null){b===null&&(b=re);break}t&&b&&x.alternate===null&&e(u,b),m=s(x,m,G),C===null?P=x:C.sibling=x,C=x,b=re}if(G===v.length)return n(u,b),Ut&&Ir(u,G),P;if(b===null){for(;G<v.length;G++)b=d(u,v[G],S),b!==null&&(m=s(b,m,G),C===null?P=b:C.sibling=b,C=b);return Ut&&Ir(u,G),P}for(b=i(u,b);G<v.length;G++)re=g(b,u,G,v[G],S),re!==null&&(t&&re.alternate!==null&&b.delete(re.key===null?G:re.key),m=s(re,m,G),C===null?P=re:C.sibling=re,C=re);return t&&b.forEach(function(R){return e(u,R)}),Ut&&Ir(u,G),P}function y(u,m,v,S){var P=vo(v);if(typeof P!="function")throw Error(ge(150));if(v=P.call(v),v==null)throw Error(ge(151));for(var C=P=null,b=m,G=m=0,re=null,x=v.next();b!==null&&!x.done;G++,x=v.next()){b.index>G?(re=b,b=null):re=b.sibling;var R=h(u,b,x.value,S);if(R===null){b===null&&(b=re);break}t&&b&&R.alternate===null&&e(u,b),m=s(R,m,G),C===null?P=R:C.sibling=R,C=R,b=re}if(x.done)return n(u,b),Ut&&Ir(u,G),P;if(b===null){for(;!x.done;G++,x=v.next())x=d(u,x.value,S),x!==null&&(m=s(x,m,G),C===null?P=x:C.sibling=x,C=x);return Ut&&Ir(u,G),P}for(b=i(u,b);!x.done;G++,x=v.next())x=g(b,u,G,x.value,S),x!==null&&(t&&x.alternate!==null&&b.delete(x.key===null?G:x.key),m=s(x,m,G),C===null?P=x:C.sibling=x,C=x);return t&&b.forEach(function(te){return e(u,te)}),Ut&&Ir(u,G),P}function p(u,m,v,S){if(typeof v=="object"&&v!==null&&v.type===Cs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ea:e:{for(var P=v.key,C=m;C!==null;){if(C.key===P){if(P=v.type,P===Cs){if(C.tag===7){n(u,C.sibling),m=r(C,v.props.children),m.return=u,u=m;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===tr&&Zh(P)===C.type){n(u,C.sibling),m=r(C,v.props),m.ref=Mo(u,C,v),m.return=u,u=m;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===Cs?(m=Wr(v.props.children,u.mode,S,v.key),m.return=u,u=m):(S=bl(v.type,v.key,v.props,null,u.mode,S),S.ref=Mo(u,m,v),S.return=u,u=S)}return o(u);case bs:e:{for(C=v.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=su(v,u.mode,S),m.return=u,u=m}return o(u);case tr:return C=v._init,p(u,m,C(v._payload),S)}if(Uo(v))return _(u,m,v,S);if(vo(v))return y(u,m,v,S);Da(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=ru(v,u.mode,S),m.return=u,u=m),o(u)):n(u,m)}return p}var Qs=Rv(!0),Pv=Rv(!1),Vl=br(null),Wl=null,Fs=null,Nd=null;function Id(){Nd=Fs=Wl=null}function Dd(t){var e=Vl.current;Dt(Vl),t._currentValue=e}function Cf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){Wl=t,Nd=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nn=!0),t.firstContext=null)}function ei(t){var e=t._currentValue;if(Nd!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(Wl===null)throw Error(ge(308));Fs=t,Wl.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Br=null;function Ud(t){Br===null?Br=[t]:Br.push(t)}function Lv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ud(e)):(n.next=r.next,r.next=n),e.interleaved=n,Bi(t,i)}function Bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function Fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ud(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sd(t,n)}}function Qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jl(t,e,n,i){var r=t.updateQueue;nr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,g=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(g,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(g,d,h):_,h==null)break e;d=Ht({},d,h);break e;case 2:nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,l=d):f=f.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=d}}function Jh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ge(191,r));r.call(i)}}}var _a={},wi=br(_a),sa=br(_a),oa=br(_a);function Hr(t){if(t===_a)throw Error(ge(174));return t}function Od(t,e){switch(Lt(oa,e),Lt(sa,t),Lt(wi,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lf(e,t)}Dt(wi),Lt(wi,e)}function Js(){Dt(wi),Dt(sa),Dt(oa)}function Iv(t){Hr(oa.current);var e=Hr(wi.current),n=lf(e,t.type);e!==n&&(Lt(sa,t),Lt(wi,n))}function kd(t){sa.current===t&&(Dt(wi),Dt(sa))}var kt=br(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qc=[];function zd(){for(var t=0;t<Qc.length;t++)Qc[t]._workInProgressVersionPrimary=null;Qc.length=0}var Ml=Vi.ReactCurrentDispatcher,Jc=Vi.ReactCurrentBatchConfig,Zr=0,zt=null,Kt=null,nn=null,$l=!1,Vo=!1,aa=0,_x=0;function mn(){throw Error(ge(321))}function Bd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pi(t[n],e[n]))return!1;return!0}function Hd(t,e,n,i,r,s){if(Zr=s,zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?Mx:Ex,t=n(i,r),Vo){s=0;do{if(Vo=!1,aa=0,25<=s)throw Error(ge(301));s+=1,nn=Kt=null,e.updateQueue=null,Ml.current=wx,t=n(i,r)}while(Vo)}if(Ml.current=Yl,e=Kt!==null&&Kt.next!==null,Zr=0,nn=Kt=zt=null,$l=!1,e)throw Error(ge(300));return t}function Gd(){var t=aa!==0;return aa=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?zt.memoizedState=nn=t:nn=nn.next=t,nn}function ti(){if(Kt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var e=nn===null?zt.memoizedState:nn.next;if(e!==null)nn=e,Kt=t;else{if(t===null)throw Error(ge(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},nn===null?zt.memoizedState=nn=t:nn=nn.next=t}return nn}function la(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=ti(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=Kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Zr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,zt.lanes|=f,Qr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,pi(i,e.memoizedState)||(Nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,zt.lanes|=s,Qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=ti(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);pi(s,e.memoizedState)||(Nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Dv(){}function Uv(t,e){var n=zt,i=ti(),r=e(),s=!pi(i.memoizedState,r);if(s&&(i.memoizedState=r,Nn=!0),i=i.queue,Vd(kv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||nn!==null&&nn.memoizedState.tag&1){if(n.flags|=2048,ca(9,Ov.bind(null,n,i,r,e),void 0,null),sn===null)throw Error(ge(349));Zr&30||Fv(n,e,r)}return r}function Fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ov(t,e,n,i){e.value=n,e.getSnapshot=i,zv(e)&&Bv(t)}function kv(t,e,n){return n(function(){zv(e)&&Bv(t)})}function zv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pi(t,n)}catch{return!0}}function Bv(t){var e=Bi(t,1);e!==null&&hi(e,t,1,-1)}function ep(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e.queue=t,t=t.dispatch=Sx.bind(null,zt,t),[e.memoizedState,t]}function ca(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Hv(){return ti().memoizedState}function El(t,e,n,i){var r=vi();zt.flags|=t,r.memoizedState=ca(1|e,n,void 0,i===void 0?null:i)}function vc(t,e,n,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Kt!==null){var o=Kt.memoizedState;if(s=o.destroy,i!==null&&Bd(i,o.deps)){r.memoizedState=ca(e,n,s,i);return}}zt.flags|=t,r.memoizedState=ca(1|e,n,s,i)}function tp(t,e){return El(8390656,8,t,e)}function Vd(t,e){return vc(2048,8,t,e)}function Gv(t,e){return vc(4,2,t,e)}function Vv(t,e){return vc(4,4,t,e)}function Wv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jv(t,e,n){return n=n!=null?n.concat([t]):null,vc(4,4,Wv.bind(null,e,t),n)}function Wd(){}function Xv(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $v(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Bd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Yv(t,e,n){return Zr&21?(pi(n,e)||(n=Jg(),zt.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nn=!0),t.memoizedState=n)}function yx(t,e){var n=Ct;Ct=n!==0&&4>n?n:4,t(!0);var i=Jc.transition;Jc.transition={};try{t(!1),e()}finally{Ct=n,Jc.transition=i}}function qv(){return ti().memoizedState}function xx(t,e,n){var i=mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Kv(t))Zv(e,n);else if(n=Lv(t,e,n,i),n!==null){var r=Tn();hi(n,t,i,r),Qv(n,e,i)}}function Sx(t,e,n){var i=mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kv(t))Zv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,pi(a,o)){var l=e.interleaved;l===null?(r.next=r,Ud(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Lv(t,e,r,i),n!==null&&(r=Tn(),hi(n,t,i,r),Qv(n,e,i))}}function Kv(t){var e=t.alternate;return t===zt||e!==null&&e===zt}function Zv(t,e){Vo=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sd(t,n)}}var Yl={readContext:ei,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},Mx={readContext:ei,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:ei,useEffect:tp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,Wv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xx.bind(null,zt,t),[i.memoizedState,t]},useRef:function(t){var e=vi();return t={current:t},e.memoizedState=t},useState:ep,useDebugValue:Wd,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=ep(!1),e=t[0];return t=yx.bind(null,t[1]),vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=zt,r=vi();if(Ut){if(n===void 0)throw Error(ge(407));n=n()}else{if(n=e(),sn===null)throw Error(ge(349));Zr&30||Fv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,tp(kv.bind(null,i,s,t),[t]),i.flags|=2048,ca(9,Ov.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=vi(),e=sn.identifierPrefix;if(Ut){var n=Ui,i=Di;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ex={readContext:ei,useCallback:Xv,useContext:ei,useEffect:Vd,useImperativeHandle:jv,useInsertionEffect:Gv,useLayoutEffect:Vv,useMemo:$v,useReducer:eu,useRef:Hv,useState:function(){return eu(la)},useDebugValue:Wd,useDeferredValue:function(t){var e=ti();return Yv(e,Kt.memoizedState,t)},useTransition:function(){var t=eu(la)[0],e=ti().memoizedState;return[t,e]},useMutableSource:Dv,useSyncExternalStore:Uv,useId:qv,unstable_isNewReconciler:!1},wx={readContext:ei,useCallback:Xv,useContext:ei,useEffect:Vd,useImperativeHandle:jv,useInsertionEffect:Gv,useLayoutEffect:Vv,useMemo:$v,useReducer:tu,useRef:Hv,useState:function(){return tu(la)},useDebugValue:Wd,useDeferredValue:function(t){var e=ti();return Kt===null?e.memoizedState=t:Yv(e,Kt.memoizedState,t)},useTransition:function(){var t=tu(la)[0],e=ti().memoizedState;return[t,e]},useMutableSource:Dv,useSyncExternalStore:Uv,useId:qv,unstable_isNewReconciler:!1};function oi(t,e){if(t&&t.defaultProps){e=Ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _c={isMounted:function(t){return(t=t._reactInternals)?is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Tn(),r=mr(t),s=Oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(hi(e,t,r,i),Sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Tn(),r=mr(t),s=Oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hr(t,s,r),e!==null&&(hi(e,t,r,i),Sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tn(),i=mr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=hr(t,r,i),e!==null&&(hi(e,t,i,n),Sl(e,t,i))}};function np(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ta(n,i)||!ta(r,s):!0}function Jv(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=Dn(e)?qr:xn.current,i=e.contextTypes,s=(i=i!=null)?Ks(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ip(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function Pf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Fd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=Dn(e)?qr:xn.current,r.context=Ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_c.enqueueReplaceState(r,r.state,null),jl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function eo(t,e){try{var n="",i=e;do n+=Q_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Tx=typeof WeakMap=="function"?WeakMap:Map;function e0(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kl||(Kl=!0,Hf=i),Lf(t,e)},n}function t0(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Lf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lf(t,e),typeof i!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Tx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zx.bind(null,t,e,n),e.then(t,t))}function sp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function op(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var Ax=Vi.ReactCurrentOwner,Nn=!1;function En(t,e,n,i){e.child=t===null?Pv(e,null,n,i):Qs(e,t.child,n,i)}function ap(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=Hd(t,e,n,i,s,r),n=Gd(),t!==null&&!Nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(Ut&&n&&Rd(e),e.flags|=1,En(t,e,i,r),e.child)}function lp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,n0(t,e,s,i,r)):(t=bl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ta,n(o,i)&&t.ref===e.ref)return Hi(t,e,r)}return e.flags|=1,t=gr(s,i),t.ref=e.ref,t.return=e,e.child=t}function n0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ta(s,i)&&t.ref===e.ref)if(Nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Nn=!0);else return e.lanes=t.lanes,Hi(t,e,r)}return Nf(t,e,n,i,r)}function i0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(ks,zn),zn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Lt(ks,zn),zn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Lt(ks,zn),zn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Lt(ks,zn),zn|=i;return En(t,e,r,n),e.child}function r0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nf(t,e,n,i,r){var s=Dn(n)?qr:xn.current;return s=Ks(e,s),js(e,r),n=Hd(t,e,n,i,s,r),i=Gd(),t!==null&&!Nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(Ut&&i&&Rd(e),e.flags|=1,En(t,e,n,r),e.child)}function cp(t,e,n,i,r){if(Dn(n)){var s=!0;Bl(e)}else s=!1;if(js(e,r),e.stateNode===null)wl(t,e),Jv(e,n,i),Pf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=Dn(n)?qr:xn.current,c=Ks(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ip(e,o,i,c),nr=!1;var h=e.memoizedState;o.state=h,jl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||In.current||nr?(typeof f=="function"&&(Rf(e,n,f,i),l=e.memoizedState),(a=nr||np(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Nv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:oi(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=Dn(n)?qr:xn.current,l=Ks(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&ip(e,o,i,l),nr=!1,h=e.memoizedState,o.state=h,jl(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||In.current||nr?(typeof g=="function"&&(Rf(e,n,g,i),_=e.memoizedState),(c=nr||np(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return If(t,e,n,i,s,r)}function If(t,e,n,i,r,s){r0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Yh(e,n,!1),Hi(t,e,s);i=e.stateNode,Ax.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,s),e.child=Qs(e,null,a,s)):En(t,e,a,s),e.memoizedState=i.state,r&&Yh(e,n,!0),e.child}function s0(t){var e=t.stateNode;e.pendingContext?$h(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$h(t,e.context,!1),Od(t,e.containerInfo)}function up(t,e,n,i,r){return Zs(),Ld(r),e.flags|=256,En(t,e,n,i),e.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function o0(t,e,n){var i=e.pendingProps,r=kt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Lt(kt,r&1),t===null)return bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sc(o,i,0,null),t=Wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uf(n),e.memoizedState=Df,t):jd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return bx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=gr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=gr(a,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Df,i}return s=t.child,t=s.sibling,i=gr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function jd(t,e){return e=Sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ua(t,e,n,i){return i!==null&&Ld(i),Qs(e,t.child,null,n),t=jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=nu(Error(ge(422))),Ua(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sc({mode:"visible",children:i.children},r,0,null),s=Wr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=Uf(o),e.memoizedState=Df,s);if(!(e.mode&1))return Ua(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ge(419)),i=nu(s,i,void 0),Ua(t,e,o,i)}if(a=(o&t.childLanes)!==0,Nn||a){if(i=sn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Bi(t,r),hi(i,t,r,-1))}return Zd(),i=nu(Error(ge(421))),Ua(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Bx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Bn=dr(r.nextSibling),Hn=e,Ut=!0,li=null,t!==null&&(Xn[$n++]=Di,Xn[$n++]=Ui,Xn[$n++]=Kr,Di=t.id,Ui=t.overflow,Kr=e),e=jd(e,i.children),e.flags|=4096,e)}function fp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Cf(t.return,e,n)}function iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function a0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(En(t,e,i.children,n),i=kt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,n,e);else if(t.tag===19)fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Lt(kt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}iu(e,!0,n,null,s);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ge(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cx(t,e,n){switch(e.tag){case 3:s0(e),Zs();break;case 5:Iv(e);break;case 1:Dn(e.type)&&Bl(e);break;case 4:Od(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Lt(Vl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Lt(kt,kt.current&1),e.flags|=128,null):n&e.child.childLanes?o0(t,e,n):(Lt(kt,kt.current&1),t=Hi(t,e,n),t!==null?t.sibling:null);Lt(kt,kt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return a0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Lt(kt,kt.current),i)break;return null;case 22:case 23:return e.lanes=0,i0(t,e,n)}return Hi(t,e,n)}var l0,Ff,c0,u0;l0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ff=function(){};c0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(wi.current);var s=null;switch(n){case"input":r=rf(t,r),i=rf(t,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=af(t,r),i=af(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kl)}cf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Nt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};u0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Eo(t,e){if(!Ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function gn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Rx(t,e,n){var i=e.pendingProps;switch(Pd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(e),null;case 1:return Dn(e.type)&&zl(),gn(e),null;case 3:return i=e.stateNode,Js(),Dt(In),Dt(xn),zd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(Wf(li),li=null))),Ff(t,e),gn(e),null;case 5:kd(e);var r=Hr(oa.current);if(n=e.type,t!==null&&e.stateNode!=null)c0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ge(166));return gn(e),null}if(t=Hr(wi.current),Ia(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[ra]=s,t=(e.mode&1)!==0,n){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(r=0;r<Oo.length;r++)Nt(Oo[r],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":xh(i,s),Nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Nt("invalid",i);break;case"textarea":Mh(i,s),Nt("invalid",i)}cf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",""+a]):Yo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Nt("scroll",i)}switch(n){case"input":wa(i),Sh(i,s,!0);break;case"textarea":wa(i),Eh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Si]=e,t[ra]=i,l0(t,e,!1,!1),e.stateNode=t;e:{switch(o=uf(n,i),n){case"dialog":Nt("cancel",t),Nt("close",t),r=i;break;case"iframe":case"object":case"embed":Nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oo.length;r++)Nt(Oo[r],t);r=i;break;case"source":Nt("error",t),r=i;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),r=i;break;case"details":Nt("toggle",t),r=i;break;case"input":xh(t,i),r=rf(t,i),Nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),Nt("invalid",t);break;case"textarea":Mh(t,i),r=af(t,i),Nt("invalid",t);break;default:r=i}cf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Hg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qo(t,l):typeof l=="number"&&qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Nt("scroll",t):l!=null&&md(t,s,l,o))}switch(n){case"input":wa(t),Sh(t,i,!1);break;case"textarea":wa(t),Eh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gn(e),null;case 6:if(t&&e.stateNode!=null)u0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ge(166));if(n=Hr(oa.current),Hr(wi.current),Ia(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=Hn,t!==null))switch(t.tag){case 3:Na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return gn(e),null;case 13:if(Dt(kt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ut&&Bn!==null&&e.mode&1&&!(e.flags&128))Cv(),Zs(),e.flags|=98560,s=!1;else if(s=Ia(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ge(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ge(317));s[Si]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;gn(e),s=!1}else li!==null&&(Wf(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||kt.current&1?Zt===0&&(Zt=3):Zd())),e.updateQueue!==null&&(e.flags|=4),gn(e),null);case 4:return Js(),Ff(t,e),t===null&&na(e.stateNode.containerInfo),gn(e),null;case 10:return Dd(e.type._context),gn(e),null;case 17:return Dn(e.type)&&zl(),gn(e),null;case 19:if(Dt(kt),s=e.memoizedState,s===null)return gn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Eo(s,!1);else{if(Zt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,Eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Lt(kt,kt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Wt()>to&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ut)return gn(e),null}else 2*Wt()-s.renderingStartTime>to&&n!==1073741824&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Wt(),e.sibling=null,n=kt.current,Lt(kt,i?n&1|2:n&1),e):(gn(e),null);case 22:case 23:return Kd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?zn&1073741824&&(gn(e),e.subtreeFlags&6&&(e.flags|=8192)):gn(e),null;case 24:return null;case 25:return null}throw Error(ge(156,e.tag))}function Px(t,e){switch(Pd(e),e.tag){case 1:return Dn(e.type)&&zl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Js(),Dt(In),Dt(xn),zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kd(e),null;case 13:if(Dt(kt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ge(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Dt(kt),null;case 4:return Js(),null;case 10:return Dd(e.type._context),null;case 22:case 23:return Kd(),null;case 24:return null;default:return null}}var Fa=!1,yn=!1,Lx=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Vt(t,e,i)}else n.current=null}function Of(t,e,n){try{n()}catch(i){Vt(t,e,i)}}var dp=!1;function Nx(t,e){if(xf=Ul,t=mv(),Cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},Ul=!1,Ue=e;Ue!==null;)if(e=Ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ue=t;else for(;Ue!==null;){e=Ue;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:oi(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ge(163))}}catch(S){Vt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ue=t;break}Ue=e.return}return _=dp,dp=!1,_}function Wo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Of(e,n,s)}r=r.next}while(r!==i)}}function yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f0(t){var e=t.alternate;e!==null&&(t.alternate=null,f0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[ra],delete e[wf],delete e[px],delete e[mx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function d0(t){return t.tag===5||t.tag===3||t.tag===4}function hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||d0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kl));else if(i!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}function Bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}var an=null,ai=!1;function $i(t,e,n){for(n=n.child;n!==null;)h0(t,e,n),n=n.sibling}function h0(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(fc,n)}catch{}switch(n.tag){case 5:yn||Os(n,e);case 6:var i=an,r=ai;an=null,$i(t,e,n),an=i,ai=r,an!==null&&(ai?(t=an,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):an.removeChild(n.stateNode));break;case 18:an!==null&&(ai?(t=an,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),Jo(t)):Kc(an,n.stateNode));break;case 4:i=an,r=ai,an=n.stateNode.containerInfo,ai=!0,$i(t,e,n),an=i,ai=r;break;case 0:case 11:case 14:case 15:if(!yn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Of(n,e,o),r=r.next}while(r!==i)}$i(t,e,n);break;case 1:if(!yn&&(Os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Vt(n,e,a)}$i(t,e,n);break;case 21:$i(t,e,n);break;case 22:n.mode&1?(yn=(i=yn)||n.memoizedState!==null,$i(t,e,n),yn=i):$i(t,e,n);break;default:$i(t,e,n)}}function pp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Lx),e.forEach(function(i){var r=Hx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ni(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:an=a.stateNode,ai=!1;break e;case 3:an=a.stateNode.containerInfo,ai=!0;break e;case 4:an=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(an===null)throw Error(ge(160));h0(s,o,r),an=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)p0(e,t),e=e.sibling}function p0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(e,t),gi(t),i&4){try{Wo(3,t,t.return),yc(3,t)}catch(y){Vt(t,t.return,y)}try{Wo(5,t,t.return)}catch(y){Vt(t,t.return,y)}}break;case 1:ni(e,t),gi(t),i&512&&n!==null&&Os(n,n.return);break;case 5:if(ni(e,t),gi(t),i&512&&n!==null&&Os(n,n.return),t.flags&32){var r=t.stateNode;try{qo(r,"")}catch(y){Vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fg(r,s),uf(a,o);var c=uf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Hg(r,d):f==="dangerouslySetInnerHTML"?zg(r,d):f==="children"?qo(r,d):md(r,f,d,c)}switch(a){case"input":sf(r,s);break;case"textarea":Og(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Hs(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Hs(r,!!s.multiple,s.defaultValue,!0):Hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ra]=s}catch(y){Vt(t,t.return,y)}}break;case 6:if(ni(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(ge(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Vt(t,t.return,y)}}break;case 3:if(ni(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(y){Vt(t,t.return,y)}break;case 4:ni(e,t),gi(t);break;case 13:ni(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Yd=Wt())),i&4&&pp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(yn=(c=yn)||f,ni(e,t),yn=c):ni(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Ue=t,f=t.child;f!==null;){for(d=Ue=f;Ue!==null;){switch(h=Ue,g=h.child,h.tag){case 0:case 11:case 14:case 15:Wo(4,h,h.return);break;case 1:Os(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Vt(i,n,y)}}break;case 5:Os(h,h.return);break;case 22:if(h.memoizedState!==null){gp(d);continue}}g!==null?(g.return=h,Ue=g):gp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bg("display",o))}catch(y){Vt(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Vt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ni(e,t),gi(t),i&4&&pp(t);break;case 21:break;default:ni(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(d0(n)){var i=n;break e}n=n.return}throw Error(ge(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qo(r,""),i.flags&=-33);var s=hp(t);Bf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=hp(t);zf(t,a,o);break;default:throw Error(ge(161))}}catch(l){Vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ix(t,e,n){Ue=t,m0(t)}function m0(t,e,n){for(var i=(t.mode&1)!==0;Ue!==null;){var r=Ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Fa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||yn;a=Fa;var c=yn;if(Fa=o,(yn=l)&&!c)for(Ue=r;Ue!==null;)o=Ue,l=o.child,o.tag===22&&o.memoizedState!==null?vp(r):l!==null?(l.return=o,Ue=l):vp(r);for(;s!==null;)Ue=s,m0(s),s=s.sibling;Ue=r,Fa=a,yn=c}mp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ue=s):mp(t)}}function mp(t){for(;Ue!==null;){var e=Ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yn||yc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!yn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Jo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ge(163))}yn||e.flags&512&&kf(e)}catch(h){Vt(e,e.return,h)}}if(e===t){Ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function gp(t){for(;Ue!==null;){var e=Ue;if(e===t){Ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function vp(t){for(;Ue!==null;){var e=Ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yc(4,e)}catch(l){Vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Vt(e,r,l)}}var s=e.return;try{kf(e)}catch(l){Vt(e,s,l)}break;case 5:var o=e.return;try{kf(e)}catch(l){Vt(e,o,l)}}}catch(l){Vt(e,e.return,l)}if(e===t){Ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ue=a;break}Ue=e.return}}var Dx=Math.ceil,ql=Vi.ReactCurrentDispatcher,Xd=Vi.ReactCurrentOwner,Jn=Vi.ReactCurrentBatchConfig,Et=0,sn=null,Yt=null,fn=0,zn=0,ks=br(0),Zt=0,ua=null,Qr=0,xc=0,$d=0,jo=null,Pn=null,Yd=0,to=1/0,Li=null,Kl=!1,Hf=null,pr=null,Oa=!1,or=null,Zl=0,Xo=0,Gf=null,Tl=-1,Al=0;function Tn(){return Et&6?Wt():Tl!==-1?Tl:Tl=Wt()}function mr(t){return t.mode&1?Et&2&&fn!==0?fn&-fn:vx.transition!==null?(Al===0&&(Al=Jg()),Al):(t=Ct,t!==0||(t=window.event,t=t===void 0?16:ov(t.type)),t):1}function hi(t,e,n,i){if(50<Xo)throw Xo=0,Gf=null,Error(ge(185));ma(t,n,i),(!(Et&2)||t!==sn)&&(t===sn&&(!(Et&2)&&(xc|=n),Zt===4&&rr(t,fn)),Un(t,i),n===1&&Et===0&&!(e.mode&1)&&(to=Wt()+500,gc&&Cr()))}function Un(t,e){var n=t.callbackNode;vy(t,e);var i=Dl(t,t===sn?fn:0);if(i===0)n!==null&&Ah(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ah(n),e===1)t.tag===0?gx(_p.bind(null,t)):Tv(_p.bind(null,t)),dx(function(){!(Et&6)&&Cr()}),n=null;else{switch(ev(i)){case 1:n=xd;break;case 4:n=Zg;break;case 16:n=Il;break;case 536870912:n=Qg;break;default:n=Il}n=E0(n,g0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function g0(t,e){if(Tl=-1,Al=0,Et&6)throw Error(ge(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var i=Dl(t,t===sn?fn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ql(t,i);else{e=i;var r=Et;Et|=2;var s=_0();(sn!==t||fn!==e)&&(Li=null,to=Wt()+500,Vr(t,e));do try{Ox();break}catch(a){v0(t,a)}while(!0);Id(),ql.current=s,Et=r,Yt!==null?e=0:(sn=null,fn=0,e=Zt)}if(e!==0){if(e===2&&(r=mf(t),r!==0&&(i=r,e=Vf(t,r))),e===1)throw n=ua,Vr(t,0),rr(t,i),Un(t,Wt()),n;if(e===6)rr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ux(r)&&(e=Ql(t,i),e===2&&(s=mf(t),s!==0&&(i=s,e=Vf(t,s))),e===1))throw n=ua,Vr(t,0),rr(t,i),Un(t,Wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ge(345));case 2:Dr(t,Pn,Li);break;case 3:if(rr(t,i),(i&130023424)===i&&(e=Yd+500-Wt(),10<e)){if(Dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ef(Dr.bind(null,t,Pn,Li),e);break}Dr(t,Pn,Li);break;case 4:if(rr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Dx(i/1960))-i,10<i){t.timeoutHandle=Ef(Dr.bind(null,t,Pn,Li),i);break}Dr(t,Pn,Li);break;case 5:Dr(t,Pn,Li);break;default:throw Error(ge(329))}}}return Un(t,Wt()),t.callbackNode===n?g0.bind(null,t):null}function Vf(t,e){var n=jo;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=Pn,Pn=n,e!==null&&Wf(e)),t}function Wf(t){Pn===null?Pn=t:Pn.push.apply(Pn,t)}function Ux(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!pi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~$d,e&=~xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function _p(t){if(Et&6)throw Error(ge(327));Xs();var e=Dl(t,0);if(!(e&1))return Un(t,Wt()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var i=mf(t);i!==0&&(e=i,n=Vf(t,i))}if(n===1)throw n=ua,Vr(t,0),rr(t,e),Un(t,Wt()),n;if(n===6)throw Error(ge(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,Pn,Li),Un(t,Wt()),null}function qd(t,e){var n=Et;Et|=1;try{return t(e)}finally{Et=n,Et===0&&(to=Wt()+500,gc&&Cr())}}function Jr(t){or!==null&&or.tag===0&&!(Et&6)&&Xs();var e=Et;Et|=1;var n=Jn.transition,i=Ct;try{if(Jn.transition=null,Ct=1,t)return t()}finally{Ct=i,Jn.transition=n,Et=e,!(Et&6)&&Cr()}}function Kd(){zn=ks.current,Dt(ks)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fx(n)),Yt!==null)for(n=Yt.return;n!==null;){var i=n;switch(Pd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zl();break;case 3:Js(),Dt(In),Dt(xn),zd();break;case 5:kd(i);break;case 4:Js();break;case 13:Dt(kt);break;case 19:Dt(kt);break;case 10:Dd(i.type._context);break;case 22:case 23:Kd()}n=n.return}if(sn=t,Yt=t=gr(t.current,null),fn=zn=e,Zt=0,ua=null,$d=xc=Qr=0,Pn=jo=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Br=null}return t}function v0(t,e){do{var n=Yt;try{if(Id(),Ml.current=Yl,$l){for(var i=zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$l=!1}if(Zr=0,nn=Kt=zt=null,Vo=!1,aa=0,Xd.current=null,n===null||n.return===null){Zt=1,ua=e,Yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=fn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=sp(o);if(g!==null){g.flags&=-257,op(g,o,a,s,e),g.mode&1&&rp(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){rp(s,c,e),Zd();break e}l=Error(ge(426))}}else if(Ut&&a.mode&1){var p=sp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),op(p,o,a,s,e),Ld(eo(l,a));break e}}s=l=eo(l,a),Zt!==4&&(Zt=2),jo===null?jo=[s]:jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=e0(s,l,e);Qh(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(pr===null||!pr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=t0(s,a,e);Qh(s,S);break e}}s=s.return}while(s!==null)}x0(n)}catch(P){e=P,Yt===n&&n!==null&&(Yt=n=n.return);continue}break}while(!0)}function _0(){var t=ql.current;return ql.current=Yl,t===null?Yl:t}function Zd(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),sn===null||!(Qr&268435455)&&!(xc&268435455)||rr(sn,fn)}function Ql(t,e){var n=Et;Et|=2;var i=_0();(sn!==t||fn!==e)&&(Li=null,Vr(t,e));do try{Fx();break}catch(r){v0(t,r)}while(!0);if(Id(),Et=n,ql.current=i,Yt!==null)throw Error(ge(261));return sn=null,fn=0,Zt}function Fx(){for(;Yt!==null;)y0(Yt)}function Ox(){for(;Yt!==null&&!ly();)y0(Yt)}function y0(t){var e=M0(t.alternate,t,zn);t.memoizedProps=t.pendingProps,e===null?x0(t):Yt=e,Xd.current=null}function x0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Px(n,e),n!==null){n.flags&=32767,Yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,Yt=null;return}}else if(n=Rx(n,e,zn),n!==null){Yt=n;return}if(e=e.sibling,e!==null){Yt=e;return}Yt=e=t}while(e!==null);Zt===0&&(Zt=5)}function Dr(t,e,n){var i=Ct,r=Jn.transition;try{Jn.transition=null,Ct=1,kx(t,e,n,i)}finally{Jn.transition=r,Ct=i}return null}function kx(t,e,n,i){do Xs();while(or!==null);if(Et&6)throw Error(ge(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ge(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_y(t,s),t===sn&&(Yt=sn=null,fn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oa||(Oa=!0,E0(Il,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jn.transition,Jn.transition=null;var o=Ct;Ct=1;var a=Et;Et|=4,Xd.current=null,Nx(t,n),p0(n,t),rx(Sf),Ul=!!xf,Sf=xf=null,t.current=n,Ix(n),cy(),Et=a,Ct=o,Jn.transition=s}else t.current=n;if(Oa&&(Oa=!1,or=t,Zl=r),s=t.pendingLanes,s===0&&(pr=null),dy(n.stateNode),Un(t,Wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kl)throw Kl=!1,t=Hf,Hf=null,t;return Zl&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===Gf?Xo++:(Xo=0,Gf=t):Xo=0,Cr(),null}function Xs(){if(or!==null){var t=ev(Zl),e=Jn.transition,n=Ct;try{if(Jn.transition=null,Ct=16>t?16:t,or===null)var i=!1;else{if(t=or,or=null,Zl=0,Et&6)throw Error(ge(331));var r=Et;for(Et|=4,Ue=t.current;Ue!==null;){var s=Ue,o=s.child;if(Ue.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ue=c;Ue!==null;){var f=Ue;switch(f.tag){case 0:case 11:case 15:Wo(8,f,s)}var d=f.child;if(d!==null)d.return=f,Ue=d;else for(;Ue!==null;){f=Ue;var h=f.sibling,g=f.return;if(f0(f),f===c){Ue=null;break}if(h!==null){h.return=g,Ue=h;break}Ue=g}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}Ue=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ue=o;else e:for(;Ue!==null;){if(s=Ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ue=u;break e}Ue=s.return}}var m=t.current;for(Ue=m;Ue!==null;){o=Ue;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ue=v;else e:for(o=m;Ue!==null;){if(a=Ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yc(9,a)}}catch(P){Vt(a,a.return,P)}if(a===o){Ue=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ue=S;break e}Ue=a.return}}if(Et=r,Cr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(fc,t)}catch{}i=!0}return i}finally{Ct=n,Jn.transition=e}}return!1}function yp(t,e,n){e=eo(n,e),e=e0(t,e,1),t=hr(t,e,1),e=Tn(),t!==null&&(ma(t,1,e),Un(t,e))}function Vt(t,e,n){if(t.tag===3)yp(t,t,n);else for(;e!==null;){if(e.tag===3){yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(pr===null||!pr.has(i))){t=eo(n,t),t=t0(e,t,1),e=hr(e,t,1),t=Tn(),e!==null&&(ma(e,1,t),Un(e,t));break}}e=e.return}}function zx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Tn(),t.pingedLanes|=t.suspendedLanes&n,sn===t&&(fn&n)===n&&(Zt===4||Zt===3&&(fn&130023424)===fn&&500>Wt()-Yd?Vr(t,0):$d|=n),Un(t,e)}function S0(t,e){e===0&&(t.mode&1?(e=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):e=1);var n=Tn();t=Bi(t,e),t!==null&&(ma(t,e,n),Un(t,n))}function Bx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),S0(t,n)}function Hx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ge(314))}i!==null&&i.delete(e),S0(t,n)}var M0;M0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||In.current)Nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nn=!1,Cx(t,e,n);Nn=!!(t.flags&131072)}else Nn=!1,Ut&&e.flags&1048576&&Av(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wl(t,e),t=e.pendingProps;var r=Ks(e,xn.current);js(e,n),r=Hd(null,e,i,t,r,n);var s=Gd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dn(i)?(s=!0,Bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fd(e),r.updater=_c,e.stateNode=r,r._reactInternals=e,Pf(e,i,t,n),e=If(null,e,i,!0,s,n)):(e.tag=0,Ut&&s&&Rd(e),En(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Vx(i),t=oi(i,t),r){case 0:e=Nf(null,e,i,t,n);break e;case 1:e=cp(null,e,i,t,n);break e;case 11:e=ap(null,e,i,t,n);break e;case 14:e=lp(null,e,i,oi(i.type,t),n);break e}throw Error(ge(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Nf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),cp(t,e,i,r,n);case 3:e:{if(s0(e),t===null)throw Error(ge(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Nv(t,e),jl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=eo(Error(ge(423)),e),e=up(t,e,i,n,r);break e}else if(i!==r){r=eo(Error(ge(424)),e),e=up(t,e,i,n,r);break e}else for(Bn=dr(e.stateNode.containerInfo.firstChild),Hn=e,Ut=!0,li=null,n=Pv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),i===r){e=Hi(t,e,n);break e}En(t,e,i,n)}e=e.child}return e;case 5:return Iv(e),t===null&&bf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Mf(i,r)?o=null:s!==null&&Mf(i,s)&&(e.flags|=32),r0(t,e),En(t,e,o,n),e.child;case 6:return t===null&&bf(e),null;case 13:return o0(t,e,n);case 4:return Od(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qs(e,null,i,n):En(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),ap(t,e,i,r,n);case 7:return En(t,e,e.pendingProps,n),e.child;case 8:return En(t,e,e.pendingProps.children,n),e.child;case 12:return En(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Lt(Vl,i._currentValue),i._currentValue=o,s!==null)if(pi(s.value,o)){if(s.children===r.children&&!In.current){e=Hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Oi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ge(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Cf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}En(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=ei(r),i=i(r),e.flags|=1,En(t,e,i,n),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),lp(t,e,i,r,n);case 15:return n0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),wl(t,e),e.tag=1,Dn(i)?(t=!0,Bl(e)):t=!1,js(e,n),Jv(e,i,r),Pf(e,i,r,n),If(null,e,i,!0,t,n);case 19:return a0(t,e,n);case 22:return i0(t,e,n)}throw Error(ge(156,e.tag))};function E0(t,e){return Kg(t,e)}function Gx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,e,n,i){return new Gx(t,e,n,i)}function Qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vx(t){if(typeof t=="function")return Qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vd)return 11;if(t===_d)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Qd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cs:return Wr(n.children,r,s,e);case gd:o=8,r|=8;break;case Ju:return t=Zn(12,n,e,r|2),t.elementType=Ju,t.lanes=s,t;case ef:return t=Zn(13,n,e,r),t.elementType=ef,t.lanes=s,t;case tf:return t=Zn(19,n,e,r),t.elementType=tf,t.lanes=s,t;case Ig:return Sc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lg:o=10;break e;case Ng:o=9;break e;case vd:o=11;break e;case _d:o=14;break e;case tr:o=16,i=null;break e}throw Error(ge(130,t==null?t:typeof t,""))}return e=Zn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Wr(t,e,n,i){return t=Zn(7,t,i,e),t.lanes=n,t}function Sc(t,e,n,i){return t=Zn(22,t,i,e),t.elementType=Ig,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=Zn(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=Zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Wx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Jd(t,e,n,i,r,s,o,a,l){return t=new Wx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fd(s),t}function jx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function w0(t){if(!t)return Er;t=t._reactInternals;e:{if(is(t)!==t||t.tag!==1)throw Error(ge(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ge(171))}if(t.tag===1){var n=t.type;if(Dn(n))return wv(t,n,e)}return e}function T0(t,e,n,i,r,s,o,a,l){return t=Jd(n,i,!0,t,r,s,o,a,l),t.context=w0(null),n=t.current,i=Tn(),r=mr(n),s=Oi(i,r),s.callback=e??null,hr(n,s,r),t.current.lanes=r,ma(t,r,i),Un(t,i),t}function Mc(t,e,n,i){var r=e.current,s=Tn(),o=mr(r);return n=w0(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=hr(r,e,o),t!==null&&(hi(t,r,o,s),Sl(t,r,o)),o}function Jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function eh(t,e){xp(t,e),(t=t.alternate)&&xp(t,e)}function Xx(){return null}var A0=typeof reportError=="function"?reportError:function(t){console.error(t)};function th(t){this._internalRoot=t}Ec.prototype.render=th.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ge(409));Mc(t,e,null,null)};Ec.prototype.unmount=th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){Mc(null,t,null,null)}),e[zi]=null}};function Ec(t){this._internalRoot=t}Ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=iv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&sv(t)}};function nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function $x(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jl(o);s.call(c)}}var o=T0(e,i,t,0,null,!1,!1,"",Sp);return t._reactRootContainer=o,t[zi]=o.current,na(t.nodeType===8?t.parentNode:t),Jr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Jl(l);a.call(c)}}var l=Jd(t,0,!1,null,null,!1,!1,"",Sp);return t._reactRootContainer=l,t[zi]=l.current,na(t.nodeType===8?t.parentNode:t),Jr(function(){Mc(e,l,n,i)}),l}function Tc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Jl(o);a.call(l)}}Mc(e,o,t,r)}else o=$x(n,e,t,r,i);return Jl(o)}tv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fo(e.pendingLanes);n!==0&&(Sd(e,n|1),Un(e,Wt()),!(Et&6)&&(to=Wt()+500,Cr()))}break;case 13:Jr(function(){var i=Bi(t,1);if(i!==null){var r=Tn();hi(i,t,1,r)}}),eh(t,1)}};Md=function(t){if(t.tag===13){var e=Bi(t,134217728);if(e!==null){var n=Tn();hi(e,t,134217728,n)}eh(t,134217728)}};nv=function(t){if(t.tag===13){var e=mr(t),n=Bi(t,e);if(n!==null){var i=Tn();hi(n,t,e,i)}eh(t,e)}};iv=function(){return Ct};rv=function(t,e){var n=Ct;try{return Ct=t,e()}finally{Ct=n}};df=function(t,e,n){switch(e){case"input":if(sf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=mc(i);if(!r)throw Error(ge(90));Ug(i),sf(i,r)}}}break;case"textarea":Og(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};Wg=qd;jg=Jr;var Yx={usingClientEntryPoint:!1,Events:[va,Ns,mc,Gg,Vg,qd]},wo={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qx={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yg(t),t===null?null:t.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||Xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{fc=ka.inject(qx),Ei=ka}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(e))throw Error(ge(200));return jx(t,e,null,n)};Vn.createRoot=function(t,e){if(!nh(t))throw Error(ge(299));var n=!1,i="",r=A0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Jd(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,na(t.nodeType===8?t.parentNode:t),new th(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ge(188)):(t=Object.keys(t).join(","),Error(ge(268,t)));return t=Yg(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return Jr(t)};Vn.hydrate=function(t,e,n){if(!wc(e))throw Error(ge(200));return Tc(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!nh(t))throw Error(ge(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=A0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=T0(e,null,t,1,n??null,r,!1,s,o),t[zi]=e.current,na(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ec(e)};Vn.render=function(t,e,n){if(!wc(e))throw Error(ge(200));return Tc(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!wc(t))throw Error(ge(40));return t._reactRootContainer?(Jr(function(){Tc(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};Vn.unstable_batchedUpdates=qd;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!wc(n))throw Error(ge(200));if(t==null||t._reactInternals===void 0)throw Error(ge(38));return Tc(t,e,n,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(t){console.error(t)}}b0(),bg.exports=Vn;var Kx=bg.exports,Mp=Kx;Zu.createRoot=Mp.createRoot,Zu.hydrateRoot=Mp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fa(){return fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fa.apply(this,arguments)}var ar;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ar||(ar={}));const Ep="popstate";function Zx(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return jf("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ec(r)}return Jx(e,n,null,t)}function Bt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ih(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Qx(){return Math.random().toString(36).substr(2,8)}function wp(t,e){return{usr:t.state,key:t.key,idx:e}}function jf(t,e,n,i){return n===void 0&&(n=null),fa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?fo(e):e,{state:n,key:e&&e.key||i||Qx()})}function ec(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function fo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Jx(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=ar.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(fa({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=ar.Pop;let p=f(),u=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:u})}function h(p,u){a=ar.Push;let m=jf(y.location,p,u);c=f()+1;let v=wp(m,c),S=y.createHref(m);try{o.pushState(v,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(S)}s&&l&&l({action:a,location:y.location,delta:1})}function g(p,u){a=ar.Replace;let m=jf(y.location,p,u);c=f();let v=wp(m,c),S=y.createHref(m);o.replaceState(v,"",S),s&&l&&l({action:a,location:y.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof p=="string"?p:ec(p);return m=m.replace(/ $/,"%20"),Bt(u,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,u)}let y={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Ep,d),l=p,()=>{r.removeEventListener(Ep,d),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:g,go(p){return o.go(p)}};return y}var Tp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Tp||(Tp={}));function eS(t,e,n){return n===void 0&&(n="/"),tS(t,e,n)}function tS(t,e,n,i){let r=typeof e=="string"?fo(e):e,s=no(r.pathname||"/",n);if(s==null)return null;let o=C0(t);nS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=hS(s);a=fS(o[l],c)}return a}function C0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Bt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=vr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Bt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),C0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:cS(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of R0(s.path))r(s,o,l)}),e}function R0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=R0(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function nS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:uS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const iS=/^:[\w-]+$/,rS=3,sS=2,oS=1,aS=10,lS=-2,Ap=t=>t==="*";function cS(t,e){let n=t.split("/"),i=n.length;return n.some(Ap)&&(i+=lS),e&&(i+=sS),n.filter(r=>!Ap(r)).reduce((r,s)=>r+(iS.test(s)?rS:s===""?oS:aS),i)}function uS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function fS(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",d=Xf({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),h=l.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:vr([s,d.pathname]),pathnameBase:_S(vr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=vr([s,d.pathnameBase]))}return o}function Xf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=dS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,f,d)=>{let{paramName:h,isOptional:g}=f;if(h==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=a[d];return g&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function dS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ih(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function hS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ih(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function no(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const pS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mS=t=>pS.test(t);function gS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?fo(t):t,s;if(n)if(mS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),ih(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=bp(n.substring(1),"/"):s=bp(n,e)}else s=e;return{pathname:s,search:yS(i),hash:xS(r)}}function bp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ou(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function rh(t,e){let n=vS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function sh(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=fo(t):(r=fa({},t),Bt(!r.pathname||!r.pathname.includes("?"),ou("?","pathname","search",r)),Bt(!r.pathname||!r.pathname.includes("#"),ou("#","pathname","hash",r)),Bt(!r.search||!r.search.includes("#"),ou("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=gS(r,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const vr=t=>t.join("/").replace(/\/\/+/g,"/"),_S=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function SS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const P0=["post","put","patch","delete"];new Set(P0);const MS=["get",...P0];new Set(MS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},da.apply(this,arguments)}const Ac=F.createContext(null),L0=F.createContext(null),Wi=F.createContext(null),bc=F.createContext(null),ji=F.createContext({outlet:null,matches:[],isDataRoute:!1}),N0=F.createContext(null);function ES(t,e){let{relative:n}=e===void 0?{}:e;ho()||Bt(!1);let{basename:i,navigator:r}=F.useContext(Wi),{hash:s,pathname:o,search:a}=Rc(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:vr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function ho(){return F.useContext(bc)!=null}function Xi(){return ho()||Bt(!1),F.useContext(bc).location}function I0(t){F.useContext(Wi).static||F.useLayoutEffect(t)}function Cc(){let{isDataRoute:t}=F.useContext(ji);return t?kS():wS()}function wS(){ho()||Bt(!1);let t=F.useContext(Ac),{basename:e,future:n,navigator:i}=F.useContext(Wi),{matches:r}=F.useContext(ji),{pathname:s}=Xi(),o=JSON.stringify(rh(r,n.v7_relativeSplatPath)),a=F.useRef(!1);return I0(()=>{a.current=!0}),F.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let d=sh(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:vr([e,d.pathname])),(f.replace?i.replace:i.push)(d,f.state,f)},[e,i,o,s,t])}const TS=F.createContext(null);function AS(t){let e=F.useContext(ji).outlet;return e&&F.createElement(TS.Provider,{value:t},e)}function Rc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=F.useContext(Wi),{matches:r}=F.useContext(ji),{pathname:s}=Xi(),o=JSON.stringify(rh(r,i.v7_relativeSplatPath));return F.useMemo(()=>sh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function bS(t,e){return CS(t,e)}function CS(t,e,n,i){ho()||Bt(!1);let{navigator:r}=F.useContext(Wi),{matches:s}=F.useContext(ji),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Xi(),f;if(e){var d;let p=typeof e=="string"?fo(e):e;l==="/"||(d=p.pathname)!=null&&d.startsWith(l)||Bt(!1),f=p}else f=c;let h=f.pathname||"/",g=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=eS(t,{pathname:g}),y=IS(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:vr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:vr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&y?F.createElement(bc.Provider,{value:{location:da({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ar.Pop}},y):y}function RS(){let t=OS(),e=SS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:r},n):null,null)}const PS=F.createElement(RS,null);class LS extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(ji.Provider,{value:this.props.routeContext},F.createElement(N0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function NS(t){let{routeContext:e,match:n,children:i}=t,r=F.useContext(Ac);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(ji.Provider,{value:e},i)}function IS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||Bt(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:h,errors:g}=n,_=d.route.loader&&h[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||_){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,d,h)=>{let g,_=!1,y=null,p=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||PS,l&&(c<0&&h===0?(zS("route-fallback"),_=!0,p=null):c===h&&(_=!0,p=d.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,h+1)),m=()=>{let v;return g?v=y:_?v=p:d.route.Component?v=F.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=f,F.createElement(NS,{match:d,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?F.createElement(LS,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:m(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):m()},null)}var D0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(D0||{}),U0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(U0||{});function DS(t){let e=F.useContext(Ac);return e||Bt(!1),e}function US(t){let e=F.useContext(L0);return e||Bt(!1),e}function FS(t){let e=F.useContext(ji);return e||Bt(!1),e}function F0(t){let e=FS(),n=e.matches[e.matches.length-1];return n.route.id||Bt(!1),n.route.id}function OS(){var t;let e=F.useContext(N0),n=US(),i=F0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function kS(){let{router:t}=DS(D0.UseNavigateStable),e=F0(U0.UseNavigateStable),n=F.useRef(!1);return I0(()=>{n.current=!0}),F.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,da({fromRouteId:e},s)))},[t,e])}const Cp={};function zS(t,e,n){Cp[t]||(Cp[t]=!0)}function BS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function O0(t){let{to:e,replace:n,state:i,relative:r}=t;ho()||Bt(!1);let{future:s,static:o}=F.useContext(Wi),{matches:a}=F.useContext(ji),{pathname:l}=Xi(),c=Cc(),f=sh(e,rh(a,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(f);return F.useEffect(()=>c(JSON.parse(d),{replace:n,state:i,relative:r}),[c,d,r,n,i]),null}function HS(t){return AS(t.context)}function er(t){Bt(!1)}function GS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ar.Pop,navigator:s,static:o=!1,future:a}=t;ho()&&Bt(!1);let l=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:l,navigator:s,static:o,future:da({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=fo(i));let{pathname:f="/",search:d="",hash:h="",state:g=null,key:_="default"}=i,y=F.useMemo(()=>{let p=no(f,l);return p==null?null:{location:{pathname:p,search:d,hash:h,state:g,key:_},navigationType:r}},[l,f,d,h,g,_,r]);return y==null?null:F.createElement(Wi.Provider,{value:c},F.createElement(bc.Provider,{children:n,value:y}))}function VS(t){let{children:e,location:n}=t;return bS($f(e),n)}new Promise(()=>{});function $f(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(i,r)=>{if(!F.isValidElement(i))return;let s=[...e,r];if(i.type===F.Fragment){n.push.apply(n,$f(i.props.children,s));return}i.type!==er&&Bt(!1),!i.props.index||!i.props.children||Bt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=$f(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tc(){return tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},tc.apply(this,arguments)}function k0(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function WS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function jS(t,e){return t.button===0&&(!e||e==="_self")&&!WS(t)}const XS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$S=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],YS="6";try{window.__reactRouterVersion=YS}catch{}const qS=F.createContext({isTransitioning:!1}),KS="startTransition",Rp=z_[KS];function ZS(t){let{basename:e,children:n,future:i,window:r}=t,s=F.useRef();s.current==null&&(s.current=Zx({window:r,v5Compat:!0}));let o=s.current,[a,l]=F.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=F.useCallback(d=>{c&&Rp?Rp(()=>l(d)):l(d)},[l,c]);return F.useLayoutEffect(()=>o.listen(f),[o,f]),F.useEffect(()=>BS(i),[i]),F.createElement(GS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const QS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",JS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eM=F.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f,viewTransition:d}=e,h=k0(e,XS),{basename:g}=F.useContext(Wi),_,y=!1;if(typeof c=="string"&&JS.test(c)&&(_=c,QS))try{let v=new URL(window.location.href),S=c.startsWith("//")?new URL(v.protocol+c):new URL(c),P=no(S.pathname,g);S.origin===v.origin&&P!=null?c=P+S.search+S.hash:y=!0}catch{}let p=ES(c,{relative:r}),u=iM(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:r,viewTransition:d});function m(v){i&&i(v),v.defaultPrevented||u(v)}return F.createElement("a",tc({},h,{href:_||p,onClick:y||s?i:m,ref:n,target:l}))}),tM=F.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:f}=e,d=k0(e,$S),h=Rc(l,{relative:d.relative}),g=Xi(),_=F.useContext(L0),{navigator:y,basename:p}=F.useContext(Wi),u=_!=null&&rM(h)&&c===!0,m=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,v=g.pathname,S=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;r||(v=v.toLowerCase(),S=S?S.toLowerCase():null,m=m.toLowerCase()),S&&p&&(S=no(S,p)||S);const P=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let C=v===m||!o&&v.startsWith(m)&&v.charAt(P)==="/",b=S!=null&&(S===m||!o&&S.startsWith(m)&&S.charAt(m.length)==="/"),G={isActive:C,isPending:b,isTransitioning:u},re=C?i:void 0,x;typeof s=="function"?x=s(G):x=[s,C?"active":null,b?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(G):a;return F.createElement(eM,tc({},d,{"aria-current":re,className:x,ref:n,style:R,to:l,viewTransition:c}),typeof f=="function"?f(G):f)});var Yf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Yf||(Yf={}));var Pp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Pp||(Pp={}));function nM(t){let e=F.useContext(Ac);return e||Bt(!1),e}function iM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Cc(),c=Xi(),f=Rc(t,{relative:o});return F.useCallback(d=>{if(jS(d,n)){d.preventDefault();let h=i!==void 0?i:ec(c)===ec(f);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,f,i,r,n,t,s,o,a])}function rM(t,e){e===void 0&&(e={});let n=F.useContext(qS);n==null&&Bt(!1);let{basename:i}=nM(Yf.useViewTransitionState),r=Rc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=no(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=no(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Xf(r.pathname,o)!=null||Xf(r.pathname,s)!=null}const oh="reforgedz.session";function Xt(){const t=localStorage.getItem(oh);if(!t)return null;try{const e=JSON.parse(t);return!e||typeof e.token!="string"||e.token.length===0?null:e}catch{return null}}function sM(t){localStorage.setItem(oh,JSON.stringify(t))}function oM(){localStorage.removeItem(oh)}function aM(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),n=(4-e.length%4)%4,i=e+"=".repeat(n);return atob(i)}function lM(){const t=Xt();if(!t)return null;const e=String(t.token).split(".");if(e.length!==2)return null;try{const n=aM(e[0]),i=JSON.parse(n);return!i||typeof i.sub!="string"?null:i}catch{return null}}function au(t){const e=lM();if(!e)return!1;const n=e.tools;return!n||typeof n!="object"?t==="replay":!!n[t]}function qt(){const t="https://admin.reforgedz.xyz";return t.length>0?t.replace(/\/$/,""):window.location.origin}async function cM(t,e){const n=qt(),i=await fetch(`${n}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})});if(!i.ok){const r=await i.text();throw new Error(r||`Login failed (${i.status})`)}return await i.json()}async function uM(){const t=qt(),e=Xt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to list servers (${n.status})`)}return await n.json()}async function qf(){const t=qt(),e=Xt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/replay/statusAll`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok){const i=await n.text();throw new Error(i||`Failed to get replay status for all servers (${n.status})`)}return await n.json()}async function Lp(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/range?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get replay range (${i.status})`)}return await i.json()}async function Np(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/players?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to list replay players (${i.status})`)}return await i.json()}async function lu(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=new URLSearchParams;i.set("serverId",t.serverId),typeof t.sinceTsMs=="number"&&i.set("sinceTsMs",String(t.sinceTsMs)),typeof t.untilTsMs=="number"&&i.set("untilTsMs",String(t.untilTsMs)),typeof t.limit=="number"&&i.set("limit",String(t.limit)),t.tail&&i.set("tail","1");const r=await fetch(`${e}/api/replay/events?${i.toString()}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!r.ok){const s=await r.text();throw new Error(s||`Failed to get replay events (${r.status})`)}return await r.json()}async function fM(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/gmPing`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to send GM ping (${i.status})`)}return await i.json()}async function cu(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapTerrain?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map terrain (${i.status})`)}return await i.json()}async function uu(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/mapDescriptors?serverId=${encodeURIComponent(t)}`,{headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok){const r=await i.text();throw new Error(r||`Failed to get map descriptors (${i.status})`)}return await i.json()}async function dM(){const t=qt(),e=Xt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/admin/users`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list users (${n.status})`);return await n.json()}async function hM(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to create user (${i.status})`);return await i.json()}async function fu(t,e){const n=qt(),i=Xt();if(!i)throw new Error("Not authenticated");const r=await fetch(`${n}/api/admin/users/${encodeURIComponent(t)}`,{method:"PUT",headers:{Authorization:`Bearer ${i.token}`,"Content-Type":"application/json"},body:JSON.stringify({tools:e})});if(!r.ok)throw new Error(await r.text()||`Failed to update user (${r.status})`);return await r.json()}async function pM(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/admin/users/${encodeURIComponent(t)}`,{method:"DELETE",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to delete user (${i.status})`);return await i.json()}async function mM(){const t=qt(),e=Xt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/servers`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to list dev servers (${n.status})`);return await n.json()}async function gM(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to add dev server (${i.status})`);return await i.json()}async function vM(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/clear?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to clear history (${i.status})`);return await i.json()}async function _M(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/servers/regenerateTerrain?serverId=${encodeURIComponent(t)}`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`}});if(!i.ok)throw new Error(await i.text()||`Failed to regenerate terrain (${i.status})`);return await i.json()}async function yM(){const t=qt(),e=Xt();if(!e)throw new Error("Not authenticated");const n=await fetch(`${t}/api/dev/discordWebhook`,{headers:{Authorization:`Bearer ${e.token}`}});if(!n.ok)throw new Error(await n.text()||`Failed to load webhook (${n.status})`);return await n.json()}async function xM(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/dev/discordWebhook`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify({webhookUrl:t})});if(!i.ok)throw new Error(await i.text()||`Failed to save webhook (${i.status})`);return await i.json()}async function SM(t){const e=qt(),n=Xt();if(!n)throw new Error("Not authenticated");const i=await fetch(`${e}/api/replay/exportDiscord`,{method:"POST",headers:{Authorization:`Bearer ${n.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!i.ok)throw new Error(await i.text()||`Failed to export to Discord (${i.status})`);return await i.json()}function MM(){const t=Cc(),e=Xi(),n=F.useMemo(()=>{const h=e.state;return h&&typeof h.from=="string"&&h.from.length>0?h.from:"/"},[e.state]),[i,r]=F.useState(""),[s,o]=F.useState(""),[a,l]=F.useState(null),[c,f]=F.useState(!1);async function d(h){if(h.preventDefault(),l(null),i.trim().length===0||s.length===0){l("Enter username and password");return}f(!0);try{const g=await cM(i.trim(),s);sM({token:g.token}),t(n,{replace:!0})}catch(g){const _=g instanceof Error?g.message:"Login failed";l(_)}finally{f(!1)}}return M.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24,boxSizing:"border-box"},children:M.jsxs("div",{className:"stack",style:{width:"min(440px, 100%)",gap:14},children:[M.jsxs("div",{style:{textAlign:"center"},children:[M.jsx("div",{className:"label",children:"Welcome"}),M.jsx("h1",{className:"h1",style:{fontSize:22,marginTop:6},children:"ReforgedZ Admin Menu"}),M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Sign in to continue."})]}),M.jsx("div",{className:"card",style:{padding:18},children:M.jsxs("form",{className:"stack",onSubmit:d,children:[M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx("div",{className:"label",children:"Username"}),M.jsx("input",{className:"input",value:i,onChange:h=>r(h.target.value),autoComplete:"username"})]}),M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx("div",{className:"label",children:"Password"}),M.jsx("input",{className:"input",type:"password",value:s,onChange:h=>o(h.target.value),autoComplete:"current-password"})]}),a?M.jsx("div",{className:"error",style:{fontSize:13},children:a}):null,M.jsx("button",{className:"button buttonPrimary",type:"submit",disabled:c,children:c?"Signing in…":"Sign in"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"If you aren't meant to be here, say hi to eiry, I know where you live!."})]})})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="161",EM=0,Ip=1,wM=2,z0=1,TM=2,Pi=3,wr=0,Fn=1,ci=2,_r=0,$s=1,Dp=2,Up=3,Fp=4,AM=5,Or=100,bM=101,CM=102,Op=103,kp=104,RM=200,PM=201,LM=202,NM=203,Kf=204,Zf=205,IM=206,DM=207,UM=208,FM=209,OM=210,kM=211,zM=212,BM=213,HM=214,GM=0,VM=1,WM=2,nc=3,jM=4,XM=5,$M=6,YM=7,B0=0,qM=1,KM=2,yr=0,ZM=1,QM=2,JM=3,eE=4,tE=5,nE=6,H0=300,io=301,ro=302,Qf=303,Jf=304,Pc=306,ed=1e3,ui=1001,td=1002,wn=1003,zp=1004,To=1005,Rn=1006,du=1007,Gr=1008,xr=1009,iE=1010,rE=1011,lh=1012,G0=1013,lr=1014,Ii=1015,ha=1016,V0=1017,W0=1018,jr=1020,sE=1021,fi=1023,oE=1024,aE=1025,Xr=1026,so=1027,lE=1028,j0=1029,cE=1030,X0=1031,$0=1033,hu=33776,pu=33777,mu=33778,gu=33779,Bp=35840,Hp=35841,Gp=35842,Vp=35843,Y0=36196,Wp=37492,jp=37496,Xp=37808,$p=37809,Yp=37810,qp=37811,Kp=37812,Zp=37813,Qp=37814,Jp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,vu=36492,om=36494,am=36495,uE=36283,lm=36284,cm=36285,um=36286,q0=3e3,$r=3001,fE=3200,dE=3201,K0=0,hE=1,qn="",ln="srgb",Gi="srgb-linear",ch="display-p3",Lc="display-p3-linear",ic="linear",It="srgb",rc="rec709",sc="p3",as=7680,fm=519,pE=512,mE=513,gE=514,Z0=515,vE=516,_E=517,yE=518,xE=519,nd=35044,dm="300 es",id=1035,Fi=2e3,oc=2001;class po{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=Math.PI/180,rd=180/Math.PI;function Sr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[t&255]+vn[t>>8&255]+vn[t>>16&255]+vn[t>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function Ln(t,e,n){return Math.max(e,Math.min(n,t))}function SE(t,e){return(t%e+e)%e}function _u(t,e,n){return(1-n)*t+n*e}function hm(t){return(t&t-1)===0&&t!==0}function sd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Mi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Rt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,n=0){mt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,n,i,r,s,o,a,l,c){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],g=i[5],_=i[8],y=r[0],p=r[3],u=r[6],m=r[1],v=r[4],S=r[7],P=r[2],C=r[5],b=r[8];return s[0]=o*y+a*m+l*P,s[3]=o*p+a*v+l*C,s[6]=o*u+a*S+l*b,s[1]=c*y+f*m+d*P,s[4]=c*p+f*v+d*C,s[7]=c*u+f*S+d*b,s[2]=h*y+g*m+_*P,s[5]=h*p+g*v+_*C,s[8]=h*u+g*S+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,g=c*s-o*l,_=n*d+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=g*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yu.makeScale(e,n)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new gt;function Q0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ac(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ME(){const t=ac("canvas");return t.style.display="block",t}const pm={};function Yr(t){t in pm||(pm[t]=!0,console.warn(t))}const mm=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gm=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),za={[Gi]:{transfer:ic,primaries:rc,toReference:t=>t,fromReference:t=>t},[ln]:{transfer:It,primaries:rc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Lc]:{transfer:ic,primaries:sc,toReference:t=>t.applyMatrix3(gm),fromReference:t=>t.applyMatrix3(mm)},[ch]:{transfer:It,primaries:sc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(gm),fromReference:t=>t.applyMatrix3(mm).convertLinearToSRGB()}},EE=new Set([Gi,Lc]),Pt={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!EE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=za[e].toReference,r=za[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return za[t].primaries},getTransfer:function(t){return t===qn?ic:za[t].transfer}};function Ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function xu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ls;class J0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ls===void 0&&(ls=ac("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ac("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ys(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ys(n[i]/255)*255):n[i]=Ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wE=0;class e_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Su(r[o].image)):s.push(Su(r[o]))}else s=Su(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Su(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?J0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TE=0;class An extends po{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=ui,r=ui,s=Rn,o=Gr,a=fi,l=xr,c=An.DEFAULT_ANISOTROPY,f=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Sr(),this.name="",this.source=new e_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===$r?ln:qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ln?$r:q0}set encoding(e){Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$r?ln:qn}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=H0;An.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,n=0,i=0,r=1){rn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],g=l[5],_=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(g+1)/2,P=(u+1)/2,C=(f+h)/4,b=(d+y)/4,G=(_+p)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=b/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=G/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=b/s,r=G/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-_)*(p-_)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(m)<.001&&(m=1),this.x=(p-_)/m,this.y=(d-y)/m,this.z=(h-f)/m,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AE extends po{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rn(0,0,e,n),this.scissorTest=!1,this.viewport=new rn(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Yr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$r?ln:qn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new An(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new e_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends AE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class t_ extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bE extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],g=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==h||c!==g||f!==_){let p=1-a;const u=l*h+c*g+f*_+d*y,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),C=Math.atan2(P,u*m);p=Math.sin(p*C)/P,a=Math.sin(a*C)/P}const S=a*m;if(l=l*p+h*S,c=c*p+g*S,f=f*p+_*S,d=d*p+y*S,p===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=P,c*=P,f*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],g=s[o+2],_=s[o+3];return e[n]=a*_+f*d+l*g-c*h,e[n+1]=l*_+f*h+c*d-a*g,e[n+2]=c*_+f*g+a*h-l*d,e[n+3]=f*_-a*d-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*g*_,this._y=c*g*d-h*f*_,this._z=c*f*_+h*g*d,this._w=c*f*d-h*g*_;break;case"YXZ":this._x=h*f*d+c*g*_,this._y=c*g*d-h*f*_,this._z=c*f*_-h*g*d,this._w=c*f*d+h*g*_;break;case"ZXY":this._x=h*f*d-c*g*_,this._y=c*g*d+h*f*_,this._z=c*f*_+h*g*d,this._w=c*f*d-h*g*_;break;case"ZYX":this._x=h*f*d-c*g*_,this._y=c*g*d+h*f*_,this._z=c*f*_-h*g*d,this._w=c*f*d+h*g*_;break;case"YZX":this._x=h*f*d+c*g*_,this._y=c*g*d+h*f*_,this._z=c*f*_-h*g*d,this._w=c*f*d-h*g*_;break;case"XZY":this._x=h*f*d-c*g*_,this._y=c*g*d-h*f*_,this._z=c*f*_+h*g*d,this._w=c*f*d+h*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mu=new V,vm=new ts;class ya{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ba.copy(i.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),Ha.subVectors(this.max,Ao),cs.subVectors(e.a,Ao),us.subVectors(e.b,Ao),fs.subVectors(e.c,Ao),Yi.subVectors(us,cs),qi.subVectors(fs,us),Rr.subVectors(cs,fs);let n=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-Rr.z,Rr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,Rr.z,0,-Rr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-Rr.y,Rr.x,0];return!Eu(n,cs,us,fs,Ha)||(n=[1,0,0,0,1,0,0,0,1],!Eu(n,cs,us,fs,Ha))?!1:(Ga.crossVectors(Yi,qi),n=[Ga.x,Ga.y,Ga.z],Eu(n,cs,us,fs,Ha))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new V,new V,new V,new V,new V,new V,new V,new V],ii=new V,Ba=new ya,cs=new V,us=new V,fs=new V,Yi=new V,qi=new V,Rr=new V,Ao=new V,Ha=new V,Ga=new V,Pr=new V;function Eu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Pr.fromArray(t,s);const a=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),c=n.dot(Pr),f=i.dot(Pr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const CE=new ya,bo=new V,wu=new V;class Nc{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(wu)),this.expandByPoint(bo.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new V,Tu=new V,Va=new V,Ki=new V,Au=new V,Wa=new V,bu=new V;class n_{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tu.copy(e).add(n).multiplyScalar(.5),Va.copy(n).sub(e).normalize(),Ki.copy(this.origin).sub(Tu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Va),a=Ki.dot(this.direction),l=-Ki.dot(Va),c=Ki.lengthSq(),f=Math.abs(1-o*o);let d,h,g,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const y=1/f;d*=y,h*=y,g=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),g=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Tu).addScaledVector(Va,h),g}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,i,r,s){Au.subVectors(n,e),Wa.subVectors(i,e),bu.crossVectors(Au,Wa);let o=this.direction.dot(bu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=a*this.direction.dot(Wa.crossVectors(Ki,Wa));if(l<0)return null;const c=a*this.direction.dot(Au.cross(Ki));if(c<0||l+c>o)return null;const f=-a*Ki.dot(bu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,g,_,y,p){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,g,_,y,p)}set(e,n,i,r,s,o,a,l,c,f,d,h,g,_,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=g,u[7]=_,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,g=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=g+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,g=l*d,_=c*f,y=c*d;n[0]=h+y*a,n[4]=_*a-g,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=g*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,g=l*d,_=c*f,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=_+g*a,n[1]=g+_*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,g=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=_*c-g,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=g*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=y-h*d,n[8]=_*d+g,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=g*d+_,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,g=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=o*f,n[9]=g*d-_,n[2]=_*d-g,n[6]=a*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RE,e,PE)}lookAt(e,n,i){const r=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),Zi.crossVectors(i,On),Zi.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Zi.crossVectors(i,On)),Zi.normalize(),ja.crossVectors(On,Zi),r[0]=Zi.x,r[4]=ja.x,r[8]=On.x,r[1]=Zi.y,r[5]=ja.y,r[9]=On.y,r[2]=Zi.z,r[6]=ja.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],g=i[13],_=i[2],y=i[6],p=i[10],u=i[14],m=i[3],v=i[7],S=i[11],P=i[15],C=r[0],b=r[4],G=r[8],re=r[12],x=r[1],R=r[5],te=r[9],le=r[13],k=r[2],ne=r[6],Q=r[10],oe=r[14],H=r[3],$=r[7],K=r[11],se=r[15];return s[0]=o*C+a*x+l*k+c*H,s[4]=o*b+a*R+l*ne+c*$,s[8]=o*G+a*te+l*Q+c*K,s[12]=o*re+a*le+l*oe+c*se,s[1]=f*C+d*x+h*k+g*H,s[5]=f*b+d*R+h*ne+g*$,s[9]=f*G+d*te+h*Q+g*K,s[13]=f*re+d*le+h*oe+g*se,s[2]=_*C+y*x+p*k+u*H,s[6]=_*b+y*R+p*ne+u*$,s[10]=_*G+y*te+p*Q+u*K,s[14]=_*re+y*le+p*oe+u*se,s[3]=m*C+v*x+S*k+P*H,s[7]=m*b+v*R+S*ne+P*$,s[11]=m*G+v*te+S*Q+P*K,s[15]=m*re+v*le+S*oe+P*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],g=e[14],_=e[3],y=e[7],p=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*g-i*l*g)+y*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*f-s*l*f)+p*(+n*c*d-n*a*g-s*o*d+i*o*g+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],g=e[11],_=e[12],y=e[13],p=e[14],u=e[15],m=d*p*c-y*h*c+y*l*g-a*p*g-d*l*u+a*h*u,v=_*h*c-f*p*c-_*l*g+o*p*g+f*l*u-o*h*u,S=f*y*c-_*d*c+_*a*g-o*y*g-f*a*u+o*d*u,P=_*d*l-f*y*l-_*a*h+o*y*h+f*a*p-o*d*p,C=n*m+i*v+r*S+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=m*b,e[1]=(y*h*s-d*p*s-y*r*g+i*p*g+d*r*u-i*h*u)*b,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*u+i*l*u)*b,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*g-i*l*g)*b,e[4]=v*b,e[5]=(f*p*s-_*h*s+_*r*g-n*p*g-f*r*u+n*h*u)*b,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*u-n*l*u)*b,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*g+n*l*g)*b,e[8]=S*b,e[9]=(_*d*s-f*y*s-_*i*g+n*y*g+f*i*u-n*d*u)*b,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*b,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*g-n*a*g)*b,e[12]=P*b,e[13]=(f*y*r-_*d*r+_*i*h-n*y*h-f*i*p+n*d*p)*b,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*p-n*a*p)*b,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,g=s*f,_=s*d,y=o*f,p=o*d,u=a*d,m=l*c,v=l*f,S=l*d,P=i.x,C=i.y,b=i.z;return r[0]=(1-(y+u))*P,r[1]=(g+S)*P,r[2]=(_-v)*P,r[3]=0,r[4]=(g-S)*C,r[5]=(1-(h+u))*C,r[6]=(p+m)*C,r[7]=0,r[8]=(_+v)*b,r[9]=(p-m)*b,r[10]=(1-(h+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ds.set(r[0],r[1],r[2]).length();const o=ds.set(r[4],r[5],r[6]).length(),a=ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const c=1/s,f=1/o,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=f,ri.elements[5]*=f,ri.elements[6]*=f,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,n.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Fi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(a===Fi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===oc)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Fi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,g=(i+r)*f;let _,y;if(a===Fi)_=(o+s)*d,y=-2*d;else if(a===oc)_=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ds=new V,ri=new jt,RE=new V(0,0,0),PE=new V(1,1,1),Zi=new V,ja=new V,On=new V,_m=new jt,ym=new ts;class xa{constructor(e=0,n=0,i=0,r=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class i_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LE=0;const xm=new V,hs=new ts,bi=new jt,Xa=new V,Co=new V,NE=new V,IE=new ts,Sm=new V(1,0,0),Mm=new V(0,1,0),Em=new V(0,0,1),DE={type:"added"},UE={type:"removed"};class Qt extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new V,n=new xa,i=new ts,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new gt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xa.copy(e):Xa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Co,Xa,this.up):bi.lookAt(Xa,Co,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(bi),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(DE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(UE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,NE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,IE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new V(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new V,Ci=new V,Cu=new V,Ri=new V,ps=new V,ms=new V,wm=new V,Ru=new V,Pu=new V,Lu=new V;class Kn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),si.subVectors(e,n),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){si.subVectors(r,n),Ci.subVectors(i,n),Cu.subVectors(e,n);const o=si.dot(si),a=si.dot(Ci),l=si.dot(Cu),c=Ci.dot(Ci),f=Ci.dot(Cu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,g=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static isFrontFacing(e,n,i,r){return si.subVectors(i,n),Ci.subVectors(e,n),si.cross(Ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),si.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ps.subVectors(r,i),ms.subVectors(s,i),Ru.subVectors(e,i);const l=ps.dot(Ru),c=ms.dot(Ru);if(l<=0&&c<=0)return n.copy(i);Pu.subVectors(e,r);const f=ps.dot(Pu),d=ms.dot(Pu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(ps,o);Lu.subVectors(e,s);const g=ps.dot(Lu),_=ms.dot(Lu);if(_>=0&&g<=_)return n.copy(s);const y=g*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ms,a);const p=f*_-g*d;if(p<=0&&d-f>=0&&g-_>=0)return wm.subVectors(s,r),a=(d-f)/(d-f+(g-_)),n.copy(r).addScaledVector(wm,a);const u=1/(p+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const r_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Nu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ft{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Pt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Pt.workingColorSpace){if(e=SE(e,1),n=Ln(n,0,1),i=Ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Nu(o,s,e+1/3),this.g=Nu(o,s,e),this.b=Nu(o,s,e-1/3)}return Pt.toWorkingColorSpace(this,r),this}setStyle(e,n=ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ln){const i=r_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=xu(e.r),this.g=xu(e.g),this.b=xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Pt.fromWorkingColorSpace(_n.copy(this),e),Math.round(Ln(_n.r*255,0,255))*65536+Math.round(Ln(_n.g*255,0,255))*256+Math.round(Ln(_n.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.fromWorkingColorSpace(_n.copy(this),n);const i=_n.r,r=_n.g,s=_n.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ln){Pt.fromWorkingColorSpace(_n.copy(this),e);const n=_n.r,i=_n.g,r=_n.b;return e!==ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+n,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qi),e.getHSL($a);const i=_u(Qi.h,$a.h,n),r=_u(Qi.s,$a.s,n),s=_u(Qi.l,$a.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new ft;ft.NAMES=r_;let FE=0;class rs extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=$s,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kf,this.blendDst=Zf,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kf&&(i.blendSrc=this.blendSrc),this.blendDst!==Zf&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class s_ extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=B0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new V,Ya=new mt;class cn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ya.fromBufferAttribute(this,n),Ya.applyMatrix3(e),this.setXY(n,Ya.x,Ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Mi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Mi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Mi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Mi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nd&&(e.usage=this.usage),e}}class o_ extends cn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class a_ extends cn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dn extends cn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let OE=0;const jn=new jt,Iu=new Qt,gs=new V,kn=new ya,Ro=new ya,tn=new V;class un extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q0(e)?a_:o_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new gt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,i){return jn.makeTranslation(e,n,i),this.applyMatrix4(jn),this}scale(e,n,i){return jn.makeScale(e,n,i),this.applyMatrix4(jn),this}lookAt(e){return Iu.lookAt(e),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ro.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(kn.min,Ro.min),kn.expandByPoint(tn),tn.addVectors(kn.max,Ro.max),kn.expandByPoint(tn)):(kn.expandByPoint(Ro.min),kn.expandByPoint(Ro.max))}kn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(tn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)tn.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),tn.add(gs)),r=Math.max(r,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let x=0;x<a;x++)c[x]=new V,f[x]=new V;const d=new V,h=new V,g=new V,_=new mt,y=new mt,p=new mt,u=new V,m=new V;function v(x,R,te){d.fromArray(r,x*3),h.fromArray(r,R*3),g.fromArray(r,te*3),_.fromArray(o,x*2),y.fromArray(o,R*2),p.fromArray(o,te*2),h.sub(d),g.sub(d),y.sub(_),p.sub(_);const le=1/(y.x*p.y-p.x*y.y);isFinite(le)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(g,-y.y).multiplyScalar(le),m.copy(g).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(le),c[x].add(u),c[R].add(u),c[te].add(u),f[x].add(m),f[R].add(m),f[te].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let x=0,R=S.length;x<R;++x){const te=S[x],le=te.start,k=te.count;for(let ne=le,Q=le+k;ne<Q;ne+=3)v(i[ne+0],i[ne+1],i[ne+2])}const P=new V,C=new V,b=new V,G=new V;function re(x){b.fromArray(s,x*3),G.copy(b);const R=c[x];P.copy(R),P.sub(b.multiplyScalar(b.dot(R))).normalize(),C.crossVectors(G,R);const le=C.dot(f[x])<0?-1:1;l[x*4]=P.x,l[x*4+1]=P.y,l[x*4+2]=P.z,l[x*4+3]=le}for(let x=0,R=S.length;x<R;++x){const te=S[x],le=te.start,k=te.count;for(let ne=le,Q=le+k;ne<Q;ne+=3)re(i[ne+0]),re(i[ne+1]),re(i[ne+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,f=new V,d=new V;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let g=0,_=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?g=l[y]*a.data.stride+a.offset:g=l[y]*f;for(let u=0;u<f;u++)h[_++]=c[g++]}return new cn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new un,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const g=c[d];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,g=d.length;h<g;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tm=new jt,Lr=new n_,qa=new Nc,Am=new V,vs=new V,_s=new V,ys=new V,Du=new V,Ka=new V,Za=new mt,Qa=new mt,Ja=new mt,bm=new V,Cm=new V,Rm=new V,el=new V,tl=new V;class Qn extends Qt{constructor(e=new un,n=new s_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Du.fromBufferAttribute(d,e),o?Ka.addScaledVector(Du,f):Ka.addScaledVector(Du.sub(n),f))}n.add(Ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(qa.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(qa,Am)===null||Lr.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(Tm.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Tm),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let S=m,P=v;S<P;S+=3){const C=a.getX(S),b=a.getX(S+1),G=a.getX(S+2);r=nl(this,u,e,i,c,f,d,C,b,G),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(a.count,g.start+g.count);for(let p=_,u=y;p<u;p+=3){const m=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=nl(this,o,e,i,c,f,d,m,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],u=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=m,P=v;S<P;S+=3){const C=S,b=S+1,G=S+2;r=nl(this,u,e,i,c,f,d,C,b,G),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let p=_,u=y;p<u;p+=3){const m=p,v=p+1,S=p+2;r=nl(this,o,e,i,c,f,d,m,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function kE(t,e,n,i,r,s,o,a){let l;if(e.side===Fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===wr,a),l===null)return null;tl.copy(a),tl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(tl);return c<n.near||c>n.far?null:{distance:c,point:tl.clone(),object:t}}function nl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,vs),t.getVertexPosition(l,_s),t.getVertexPosition(c,ys);const f=kE(t,e,n,i,vs,_s,ys,el);if(f){r&&(Za.fromBufferAttribute(r,a),Qa.fromBufferAttribute(r,l),Ja.fromBufferAttribute(r,c),f.uv=Kn.getInterpolation(el,vs,_s,ys,Za,Qa,Ja,new mt)),s&&(Za.fromBufferAttribute(s,a),Qa.fromBufferAttribute(s,l),Ja.fromBufferAttribute(s,c),f.uv1=Kn.getInterpolation(el,vs,_s,ys,Za,Qa,Ja,new mt),f.uv2=f.uv1),o&&(bm.fromBufferAttribute(o,a),Cm.fromBufferAttribute(o,l),Rm.fromBufferAttribute(o,c),f.normal=Kn.getInterpolation(el,vs,_s,ys,bm,Cm,Rm,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};Kn.getNormal(vs,_s,ys,d.normal),f.face=d}return f}class Sa extends un{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(f,3)),this.setAttribute("uv",new dn(d,2));function _(y,p,u,m,v,S,P,C,b,G,re){const x=S/b,R=P/G,te=S/2,le=P/2,k=C/2,ne=b+1,Q=G+1;let oe=0,H=0;const $=new V;for(let K=0;K<Q;K++){const se=K*R-le;for(let fe=0;fe<ne;fe++){const Ke=fe*x-te;$[y]=Ke*m,$[p]=se*v,$[u]=k,c.push($.x,$.y,$.z),$[y]=0,$[p]=0,$[u]=C>0?1:-1,f.push($.x,$.y,$.z),d.push(fe/b),d.push(1-K/G),oe+=1}}for(let K=0;K<G;K++)for(let se=0;se<b;se++){const fe=h+se+ne*K,Ke=h+se+ne*(K+1),ee=h+(se+1)+ne*(K+1),ae=h+(se+1)+ne*K;l.push(fe,Ke,ae),l.push(Ke,ee,ae),H+=6}a.addGroup(g,H,re),g+=H,h+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Mn(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const r in i)e[r]=i[r]}return e}function zE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function l_(t){return t.getRenderTarget()===null?t.outputColorSpace:Pt.workingColorSpace}const BE={clone:oo,merge:Mn};var HE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HE,this.fragmentShader=GE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=zE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class c_ extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new V,Pm=new mt,Lm=new mt;class Yn extends c_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rd*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,n){return this.getViewBounds(e,Pm,Lm),n.subVectors(Lm,Pm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xs=-90,Ss=1;class VE extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yn(xs,Ss,e,n);r.layers=this.layers,this.add(r);const s=new Yn(xs,Ss,e,n);s.layers=this.layers,this.add(s);const o=new Yn(xs,Ss,e,n);o.layers=this.layers,this.add(o);const a=new Yn(xs,Ss,e,n);a.layers=this.layers,this.add(a);const l=new Yn(xs,Ss,e,n);l.layers=this.layers,this.add(l);const c=new Yn(xs,Ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class u_ extends An{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:io,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WE extends es{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Yr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$r?ln:qn),this.texture=new u_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Sa(5,5,5),s=new Tr({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:_r});s.uniforms.tEquirect.value=n;const o=new Qn(r,s),a=n.minFilter;return n.minFilter===Gr&&(n.minFilter=Rn),new VE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Uu=new V,jE=new V,XE=new gt;class Ur{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Uu.subVectors(i,n).cross(jE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Uu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||XE.getNormalMatrix(e),r=this.coplanarPoint(Uu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Nc,il=new V;class uh{constructor(e=new Ur,n=new Ur,i=new Ur,r=new Ur,s=new Ur,o=new Ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],g=r[8],_=r[9],y=r[10],p=r[11],u=r[12],m=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,p-g,S-u).normalize(),i[1].setComponents(l+s,h+c,p+g,S+u).normalize(),i[2].setComponents(l+o,h+f,p+_,S+m).normalize(),i[3].setComponents(l-o,h-f,p-_,S-m).normalize(),i[4].setComponents(l-a,h-d,p-y,S-v).normalize(),n===Fi)i[5].setComponents(l+a,h+d,p+y,S+v).normalize();else if(n===oc)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(il.x=r.normal.x>0?e.max.x:e.min.x,il.y=r.normal.y>0?e.max.y:e.min.y,il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function f_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $E(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,g=d.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=t.SHORT;else if(d instanceof Uint32Array)y=t.UNSIGNED_INT;else if(d instanceof Int32Array)y=t.INT;else if(d instanceof Int8Array)y=t.BYTE;else if(d instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,f,d){const h=f.array,g=f._updateRange,_=f.updateRanges;if(t.bindBuffer(d,c),g.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let y=0,p=_.length;y<p;y++){const u=_[y];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:l}}class ao extends un{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,g=[],_=[],y=[],p=[];for(let u=0;u<f;u++){const m=u*h-o;for(let v=0;v<c;v++){const S=v*d-s;_.push(S,-m,0),y.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,S=m+c*(u+1),P=m+1+c*(u+1),C=m+1+c*u;g.push(v,S,C),g.push(S,P,C)}this.setIndex(g),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(y,3)),this.setAttribute("uv",new dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var YE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qE=`#ifdef USE_ALPHAHASH
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
#endif`,KE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ew=`#ifdef USE_AOMAP
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
#endif`,tw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nw=`#ifdef USE_BATCHING
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
#endif`,iw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ow=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aw=`#ifdef USE_IRIDESCENCE
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
#endif`,lw=`#ifdef USE_BUMPMAP
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
#endif`,cw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vw=`#define PI 3.141592653589793
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
} // validated`,_w=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yw=`vec3 transformedNormal = objectNormal;
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
#endif`,xw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ew=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ww="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tw=`
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
}`,Aw=`#ifdef USE_ENVMAP
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
#endif`,bw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cw=`#ifdef USE_ENVMAP
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
#endif`,Rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pw=`#ifdef USE_ENVMAP
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
#endif`,Lw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uw=`#ifdef USE_GRADIENTMAP
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
}`,Fw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ow=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bw=`uniform bool receiveShadow;
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
#endif`,Hw=`#ifdef USE_ENVMAP
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
#endif`,Gw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ww=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xw=`PhysicalMaterial material;
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
#endif`,$w=`struct PhysicalMaterial {
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
}`,Yw=`
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
#endif`,qw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rT=`#if defined( USE_POINTS_UV )
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
#endif`,sT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lT=`#ifdef USE_MORPHNORMALS
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
#endif`,cT=`#ifdef USE_MORPHTARGETS
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
#endif`,uT=`#ifdef USE_MORPHTARGETS
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
#endif`,fT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gT=`#ifdef USE_NORMALMAP
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
#endif`,vT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_T=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ST=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ET=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,NT=`float getShadowMask() {
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
}`,IT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DT=`#ifdef USE_SKINNING
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
#endif`,UT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FT=`#ifdef USE_SKINNING
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
#endif`,OT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,HT=`#ifdef USE_TRANSMISSION
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
#endif`,GT=`#ifdef USE_TRANSMISSION
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YT=`uniform sampler2D t2D;
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
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`#include <common>
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
}`,e1=`#if DEPTH_PACKING == 3200
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
}`,t1=`#define DISTANCE
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
}`,n1=`#define DISTANCE
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`uniform float scale;
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
}`,o1=`uniform vec3 diffuse;
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
}`,a1=`#include <common>
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#define LAMBERT
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
}`,u1=`#define LAMBERT
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
}`,f1=`#define MATCAP
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
}`,d1=`#define MATCAP
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
}`,h1=`#define NORMAL
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
}`,p1=`#define NORMAL
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
}`,m1=`#define PHONG
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
}`,g1=`#define PHONG
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
}`,v1=`#define STANDARD
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
}`,_1=`#define STANDARD
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
}`,y1=`#define TOON
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
}`,x1=`#define TOON
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
}`,S1=`uniform float size;
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
}`,M1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,w1=`uniform vec3 color;
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
}`,T1=`uniform float rotation;
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
}`,A1=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:YE,alphahash_pars_fragment:qE,alphamap_fragment:KE,alphamap_pars_fragment:ZE,alphatest_fragment:QE,alphatest_pars_fragment:JE,aomap_fragment:ew,aomap_pars_fragment:tw,batching_pars_vertex:nw,batching_vertex:iw,begin_vertex:rw,beginnormal_vertex:sw,bsdfs:ow,iridescence_fragment:aw,bumpmap_pars_fragment:lw,clipping_planes_fragment:cw,clipping_planes_pars_fragment:uw,clipping_planes_pars_vertex:fw,clipping_planes_vertex:dw,color_fragment:hw,color_pars_fragment:pw,color_pars_vertex:mw,color_vertex:gw,common:vw,cube_uv_reflection_fragment:_w,defaultnormal_vertex:yw,displacementmap_pars_vertex:xw,displacementmap_vertex:Sw,emissivemap_fragment:Mw,emissivemap_pars_fragment:Ew,colorspace_fragment:ww,colorspace_pars_fragment:Tw,envmap_fragment:Aw,envmap_common_pars_fragment:bw,envmap_pars_fragment:Cw,envmap_pars_vertex:Rw,envmap_physical_pars_fragment:Hw,envmap_vertex:Pw,fog_vertex:Lw,fog_pars_vertex:Nw,fog_fragment:Iw,fog_pars_fragment:Dw,gradientmap_pars_fragment:Uw,lightmap_fragment:Fw,lightmap_pars_fragment:Ow,lights_lambert_fragment:kw,lights_lambert_pars_fragment:zw,lights_pars_begin:Bw,lights_toon_fragment:Gw,lights_toon_pars_fragment:Vw,lights_phong_fragment:Ww,lights_phong_pars_fragment:jw,lights_physical_fragment:Xw,lights_physical_pars_fragment:$w,lights_fragment_begin:Yw,lights_fragment_maps:qw,lights_fragment_end:Kw,logdepthbuf_fragment:Zw,logdepthbuf_pars_fragment:Qw,logdepthbuf_pars_vertex:Jw,logdepthbuf_vertex:eT,map_fragment:tT,map_pars_fragment:nT,map_particle_fragment:iT,map_particle_pars_fragment:rT,metalnessmap_fragment:sT,metalnessmap_pars_fragment:oT,morphcolor_vertex:aT,morphnormal_vertex:lT,morphtarget_pars_vertex:cT,morphtarget_vertex:uT,normal_fragment_begin:fT,normal_fragment_maps:dT,normal_pars_fragment:hT,normal_pars_vertex:pT,normal_vertex:mT,normalmap_pars_fragment:gT,clearcoat_normal_fragment_begin:vT,clearcoat_normal_fragment_maps:_T,clearcoat_pars_fragment:yT,iridescence_pars_fragment:xT,opaque_fragment:ST,packing:MT,premultiplied_alpha_fragment:ET,project_vertex:wT,dithering_fragment:TT,dithering_pars_fragment:AT,roughnessmap_fragment:bT,roughnessmap_pars_fragment:CT,shadowmap_pars_fragment:RT,shadowmap_pars_vertex:PT,shadowmap_vertex:LT,shadowmask_pars_fragment:NT,skinbase_vertex:IT,skinning_pars_vertex:DT,skinning_vertex:UT,skinnormal_vertex:FT,specularmap_fragment:OT,specularmap_pars_fragment:kT,tonemapping_fragment:zT,tonemapping_pars_fragment:BT,transmission_fragment:HT,transmission_pars_fragment:GT,uv_pars_fragment:VT,uv_pars_vertex:WT,uv_vertex:jT,worldpos_vertex:XT,background_vert:$T,background_frag:YT,backgroundCube_vert:qT,backgroundCube_frag:KT,cube_vert:ZT,cube_frag:QT,depth_vert:JT,depth_frag:e1,distanceRGBA_vert:t1,distanceRGBA_frag:n1,equirect_vert:i1,equirect_frag:r1,linedashed_vert:s1,linedashed_frag:o1,meshbasic_vert:a1,meshbasic_frag:l1,meshlambert_vert:c1,meshlambert_frag:u1,meshmatcap_vert:f1,meshmatcap_frag:d1,meshnormal_vert:h1,meshnormal_frag:p1,meshphong_vert:m1,meshphong_frag:g1,meshphysical_vert:v1,meshphysical_frag:_1,meshtoon_vert:y1,meshtoon_frag:x1,points_vert:S1,points_frag:M1,shadow_vert:E1,shadow_frag:w1,sprite_vert:T1,sprite_frag:A1},Te={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},yi={basic:{uniforms:Mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ft(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Mn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Mn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Mn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ft(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Mn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Mn([Te.points,Te.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Mn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Mn([Te.common,Te.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Mn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Mn([Te.sprite,Te.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Mn([Te.common,Te.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Mn([Te.lights,Te.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};yi.physical={uniforms:Mn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const rl={r:0,b:0,g:0};function b1(t,e,n,i,r,s,o){const a=new ft(0);let l=s===!0?0:1,c,f,d=null,h=0,g=null;function _(p,u){let m=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),m=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Pc)?(f===void 0&&(f=new Qn(new Sa(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:oo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=Pt.getTransfer(v.colorSpace)!==It,(d!==v||h!==v.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,g=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Qn(new ao(2,2),new Tr({name:"BackgroundMaterial",uniforms:oo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(v.colorSpace)!==It,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(rl,l_(t)),i.buffers.color.setClear(rl.r,rl.g,rl.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:_}}function C1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function d(k,ne,Q,oe,H){let $=!1;if(o){const K=y(oe,Q,ne);c!==K&&(c=K,g(c.object)),$=u(k,oe,Q,H),$&&m(k,oe,Q,H)}else{const K=ne.wireframe===!0;(c.geometry!==oe.id||c.program!==Q.id||c.wireframe!==K)&&(c.geometry=oe.id,c.program=Q.id,c.wireframe=K,$=!0)}H!==null&&n.update(H,t.ELEMENT_ARRAY_BUFFER),($||f)&&(f=!1,G(k,ne,Q,oe),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(k){return i.isWebGL2?t.bindVertexArray(k):s.bindVertexArrayOES(k)}function _(k){return i.isWebGL2?t.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function y(k,ne,Q){const oe=Q.wireframe===!0;let H=a[k.id];H===void 0&&(H={},a[k.id]=H);let $=H[ne.id];$===void 0&&($={},H[ne.id]=$);let K=$[oe];return K===void 0&&(K=p(h()),$[oe]=K),K}function p(k){const ne=[],Q=[],oe=[];for(let H=0;H<r;H++)ne[H]=0,Q[H]=0,oe[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:Q,attributeDivisors:oe,object:k,attributes:{},index:null}}function u(k,ne,Q,oe){const H=c.attributes,$=ne.attributes;let K=0;const se=Q.getAttributes();for(const fe in se)if(se[fe].location>=0){const ee=H[fe];let ae=$[fe];if(ae===void 0&&(fe==="instanceMatrix"&&k.instanceMatrix&&(ae=k.instanceMatrix),fe==="instanceColor"&&k.instanceColor&&(ae=k.instanceColor)),ee===void 0||ee.attribute!==ae||ae&&ee.data!==ae.data)return!0;K++}return c.attributesNum!==K||c.index!==oe}function m(k,ne,Q,oe){const H={},$=ne.attributes;let K=0;const se=Q.getAttributes();for(const fe in se)if(se[fe].location>=0){let ee=$[fe];ee===void 0&&(fe==="instanceMatrix"&&k.instanceMatrix&&(ee=k.instanceMatrix),fe==="instanceColor"&&k.instanceColor&&(ee=k.instanceColor));const ae={};ae.attribute=ee,ee&&ee.data&&(ae.data=ee.data),H[fe]=ae,K++}c.attributes=H,c.attributesNum=K,c.index=oe}function v(){const k=c.newAttributes;for(let ne=0,Q=k.length;ne<Q;ne++)k[ne]=0}function S(k){P(k,0)}function P(k,ne){const Q=c.newAttributes,oe=c.enabledAttributes,H=c.attributeDivisors;Q[k]=1,oe[k]===0&&(t.enableVertexAttribArray(k),oe[k]=1),H[k]!==ne&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,ne),H[k]=ne)}function C(){const k=c.newAttributes,ne=c.enabledAttributes;for(let Q=0,oe=ne.length;Q<oe;Q++)ne[Q]!==k[Q]&&(t.disableVertexAttribArray(Q),ne[Q]=0)}function b(k,ne,Q,oe,H,$,K){K===!0?t.vertexAttribIPointer(k,ne,Q,H,$):t.vertexAttribPointer(k,ne,Q,oe,H,$)}function G(k,ne,Q,oe){if(i.isWebGL2===!1&&(k.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=oe.attributes,$=Q.getAttributes(),K=ne.defaultAttributeValues;for(const se in $){const fe=$[se];if(fe.location>=0){let Ke=H[se];if(Ke===void 0&&(se==="instanceMatrix"&&k.instanceMatrix&&(Ke=k.instanceMatrix),se==="instanceColor"&&k.instanceColor&&(Ke=k.instanceColor)),Ke!==void 0){const ee=Ke.normalized,ae=Ke.itemSize,Ae=n.get(Ke);if(Ae===void 0)continue;const Oe=Ae.buffer,Xe=Ae.type,Fe=Ae.bytesPerElement,dt=i.isWebGL2===!0&&(Xe===t.INT||Xe===t.UNSIGNED_INT||Ke.gpuType===G0);if(Ke.isInterleavedBufferAttribute){const $e=Ke.data,W=$e.stride,vt=Ke.offset;if($e.isInstancedInterleavedBuffer){for(let Pe=0;Pe<fe.locationSize;Pe++)P(fe.location+Pe,$e.meshPerAttribute);k.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let Pe=0;Pe<fe.locationSize;Pe++)S(fe.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let Pe=0;Pe<fe.locationSize;Pe++)b(fe.location+Pe,ae/fe.locationSize,Xe,ee,W*Fe,(vt+ae/fe.locationSize*Pe)*Fe,dt)}else{if(Ke.isInstancedBufferAttribute){for(let $e=0;$e<fe.locationSize;$e++)P(fe.location+$e,Ke.meshPerAttribute);k.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let $e=0;$e<fe.locationSize;$e++)S(fe.location+$e);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let $e=0;$e<fe.locationSize;$e++)b(fe.location+$e,ae/fe.locationSize,Xe,ee,ae*Fe,ae/fe.locationSize*$e*Fe,dt)}}else if(K!==void 0){const ee=K[se];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(fe.location,ee);break;case 3:t.vertexAttrib3fv(fe.location,ee);break;case 4:t.vertexAttrib4fv(fe.location,ee);break;default:t.vertexAttrib1fv(fe.location,ee)}}}}C()}function re(){te();for(const k in a){const ne=a[k];for(const Q in ne){const oe=ne[Q];for(const H in oe)_(oe[H].object),delete oe[H];delete ne[Q]}delete a[k]}}function x(k){if(a[k.id]===void 0)return;const ne=a[k.id];for(const Q in ne){const oe=ne[Q];for(const H in oe)_(oe[H].object),delete oe[H];delete ne[Q]}delete a[k.id]}function R(k){for(const ne in a){const Q=a[ne];if(Q[k.id]===void 0)continue;const oe=Q[k.id];for(const H in oe)_(oe[H].object),delete oe[H];delete Q[k.id]}}function te(){le(),f=!0,c!==l&&(c=l,g(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:le,dispose:re,releaseStatesOfGeometry:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function R1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let g,_;if(r)g=t,_="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h;_++)this.render(f[_],d[_]);else{g.multiDrawArraysWEBGL(s,f,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function P1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),P=v&&S,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:C}}function L1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ur,a=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const g=d.length!==0||h||i!==0||r;return r=h,i=d.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,g){const _=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!p)s?f(null):c();else{const m=s?0:i,v=m*4;let S=u.clippingState||null;l.value=S,S=f(_,h,v,g);for(let P=0;P!==v;++P)S[P]=n[P];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,g,_){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const u=g+y*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,S=g;v!==y;++v,S+=4)o.copy(d[v]).applyMatrix4(m,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function N1(t){let e=new WeakMap;function n(o,a){return a===Qf?o.mapping=io:a===Jf&&(o.mapping=ro),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qf||a===Jf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new WE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class d_ extends c_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,Nm=[.125,.215,.35,.446,.526,.582],kr=20,Fu=new d_,Im=new ft;let Ou=null,ku=0,zu=0;const Fr=(1+Math.sqrt(5))/2,Ms=1/Fr,Dm=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Fr,Ms),new V(0,Fr,-Ms),new V(Ms,0,Fr),new V(-Ms,0,Fr),new V(Fr,Ms,0),new V(-Fr,Ms,0)];class Um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ou=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,ku,zu),e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ha,format:fi,colorSpace:Gi,depthBuffer:!1},r=Fm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I1(s)),this._blurMaterial=D1(s,e,n)}return r}_compileMaterial(e){const n=new Qn(this._lodPlanes[0],e);this._renderer.compile(n,Fu)}_sceneToCubeUV(e,n,i,r){const a=new Yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Im),f.toneMapping=yr,f.autoClear=!1;const g=new s_({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),_=new Qn(new Sa,g);let y=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,y=!0):(g.color.copy(Im),y=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;sl(r,m*v,u>2?v:0,v,v),f.setRenderTarget(r),y&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===io||e.mapping===ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Qn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;sl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Fu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dm[(r-1)%Dm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Qn(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*kr-1),y=s/_,p=isFinite(s)?1+Math.floor(f*y):kr;p>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kr}`);const u=[];let m=0;for(let b=0;b<kr;++b){const G=b/y,re=Math.exp(-G*G/2);u.push(re),b===0?m+=re:b<p&&(m+=2*re)}for(let b=0;b<u.length;b++)u[b]=u[b]/m;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-zs?r-v+zs:0),C=4*(this._cubeSize-S);sl(n,P,C,3*S,2*S),l.setRenderTarget(n),l.render(d,Fu)}}function I1(t){const e=[],n=[],i=[];let r=t;const s=t-zs+1+Nm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-zs?l=Nm[o-t+zs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],g=6,_=6,y=3,p=2,u=1,m=new Float32Array(y*_*g),v=new Float32Array(p*_*g),S=new Float32Array(u*_*g);for(let C=0;C<g;C++){const b=C%3*2/3-1,G=C>2?0:-1,re=[b,G,0,b+2/3,G,0,b+2/3,G+1,0,b,G,0,b+2/3,G+1,0,b,G+1,0];m.set(re,y*_*C),v.set(h,p*_*C);const x=[C,C,C,C,C,C];S.set(x,u*_*C)}const P=new un;P.setAttribute("position",new cn(m,y)),P.setAttribute("uv",new cn(v,p)),P.setAttribute("faceIndex",new cn(S,u)),e.push(P),r>zs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fm(t,e,n){const i=new es(t,e,n);return i.texture.mapping=Pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function D1(t,e,n){const i=new Float32Array(kr),r=new V(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fh(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Om(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:_r,depthTest:!1,depthWrite:!1})}function km(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function U1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qf||l===Jf,f=l===io||l===ro;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Um(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new Um(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function F1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function O1(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const y=g[_];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(d){const h=[],g=d.index,_=d.attributes.position;let y=0;if(g!==null){const m=g.array;y=g.version;for(let v=0,S=m.length;v<S;v+=3){const P=m[v+0],C=m[v+1],b=m[v+2];h.push(P,C,C,b,b,P)}}else if(_!==void 0){const m=_.array;y=_.version;for(let v=0,S=m.length/3-1;v<S;v+=3){const P=v+0,C=v+1,b=v+2;h.push(P,C,C,b,b,P)}}else return;const p=new(Q0(h)?a_:o_)(h,1);p.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function f(d){const h=s.get(d);if(h){const g=d.index;g!==null&&h.version<g.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function k1(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function f(g,_){t.drawElements(s,_,a,g*l),n.update(_,s,1)}function d(g,_,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,a,g*l,y),n.update(_,s,y)}function h(g,_,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(g[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,a,g,0,y);let u=0;for(let m=0;m<y;m++)u+=_[m];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function z1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function B1(t,e){return t[0]-e[0]}function H1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function G1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new rn,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let p=s.get(f);if(p===void 0||p.count!==y){let ne=function(){le.dispose(),s.delete(f),f.removeEventListener("dispose",ne)};var g=ne;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,P=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],G=f.morphAttributes.color||[];let re=0;v===!0&&(re=1),S===!0&&(re=2),P===!0&&(re=3);let x=f.attributes.position.count*re,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const te=new Float32Array(x*R*4*y),le=new t_(te,x,R,y);le.type=Ii,le.needsUpdate=!0;const k=re*4;for(let Q=0;Q<y;Q++){const oe=C[Q],H=b[Q],$=G[Q],K=x*R*4*Q;for(let se=0;se<oe.count;se++){const fe=se*k;v===!0&&(o.fromBufferAttribute(oe,se),te[K+fe+0]=o.x,te[K+fe+1]=o.y,te[K+fe+2]=o.z,te[K+fe+3]=0),S===!0&&(o.fromBufferAttribute(H,se),te[K+fe+4]=o.x,te[K+fe+5]=o.y,te[K+fe+6]=o.z,te[K+fe+7]=0),P===!0&&(o.fromBufferAttribute($,se),te[K+fe+8]=o.x,te[K+fe+9]=o.y,te[K+fe+10]=o.z,te[K+fe+11]=$.itemSize===4?o.w:1)}}p={count:y,texture:le,size:new mt(x,R)},s.set(f,p),f.addEventListener("dispose",ne)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const m=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",m),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let y=i[f.id];if(y===void 0||y.length!==_){y=[];for(let S=0;S<_;S++)y[S]=[S,0];i[f.id]=y}for(let S=0;S<_;S++){const P=y[S];P[0]=S,P[1]=h[S]}y.sort(H1);for(let S=0;S<8;S++)S<_&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(B1);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let m=0;for(let S=0;S<8;S++){const P=a[S],C=P[0],b=P[1];C!==Number.MAX_SAFE_INTEGER&&b?(p&&f.getAttribute("morphTarget"+S)!==p[C]&&f.setAttribute("morphTarget"+S,p[C]),u&&f.getAttribute("morphNormal"+S)!==u[C]&&f.setAttribute("morphNormal"+S,u[C]),r[S]=b,m+=b):(p&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),u&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const v=f.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function V1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class h_ extends An{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Xr,f!==Xr&&f!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Xr&&(i=lr),i===void 0&&f===so&&(i=jr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const p_=new An,m_=new h_(1,1);m_.compareFunction=Z0;const g_=new t_,v_=new bE,__=new u_,zm=[],Bm=[],Hm=new Float32Array(16),Gm=new Float32Array(9),Vm=new Float32Array(4);function mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zm[r];if(s===void 0&&(s=new Float32Array(r),zm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function en(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ic(t,e){let n=Bm[e];n===void 0&&(n=new Int32Array(e),Bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function W1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;t.uniform2fv(this.addr,e),en(n,e)}}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;t.uniform3fv(this.addr,e),en(n,e)}}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;t.uniform4fv(this.addr,e),en(n,e)}}function Y1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,i))return;Vm.set(i),t.uniformMatrix2fv(this.addr,!1,Vm),en(n,i)}}function q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,i))return;Gm.set(i),t.uniformMatrix3fv(this.addr,!1,Gm),en(n,i)}}function K1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,i))return;Hm.set(i),t.uniformMatrix4fv(this.addr,!1,Hm),en(n,i)}}function Z1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;t.uniform2iv(this.addr,e),en(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;t.uniform3iv(this.addr,e),en(n,e)}}function eA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;t.uniform4iv(this.addr,e),en(n,e)}}function tA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;t.uniform2uiv(this.addr,e),en(n,e)}}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;t.uniform3uiv(this.addr,e),en(n,e)}}function rA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;t.uniform4uiv(this.addr,e),en(n,e)}}function sA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?m_:p_;n.setTexture2D(e||s,r)}function oA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||v_,r)}function aA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||__,r)}function lA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||g_,r)}function cA(t){switch(t){case 5126:return W1;case 35664:return j1;case 35665:return X1;case 35666:return $1;case 35674:return Y1;case 35675:return q1;case 35676:return K1;case 5124:case 35670:return Z1;case 35667:case 35671:return Q1;case 35668:case 35672:return J1;case 35669:case 35673:return eA;case 5125:return tA;case 36294:return nA;case 36295:return iA;case 36296:return rA;case 35678:case 36198:case 36298:case 36306:case 35682:return sA;case 35679:case 36299:case 36307:return oA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return lA}}function uA(t,e){t.uniform1fv(this.addr,e)}function fA(t,e){const n=mo(e,this.size,2);t.uniform2fv(this.addr,n)}function dA(t,e){const n=mo(e,this.size,3);t.uniform3fv(this.addr,n)}function hA(t,e){const n=mo(e,this.size,4);t.uniform4fv(this.addr,n)}function pA(t,e){const n=mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mA(t,e){const n=mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gA(t,e){const n=mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function vA(t,e){t.uniform1iv(this.addr,e)}function _A(t,e){t.uniform2iv(this.addr,e)}function yA(t,e){t.uniform3iv(this.addr,e)}function xA(t,e){t.uniform4iv(this.addr,e)}function SA(t,e){t.uniform1uiv(this.addr,e)}function MA(t,e){t.uniform2uiv(this.addr,e)}function EA(t,e){t.uniform3uiv(this.addr,e)}function wA(t,e){t.uniform4uiv(this.addr,e)}function TA(t,e,n){const i=this.cache,r=e.length,s=Ic(n,r);Jt(i,s)||(t.uniform1iv(this.addr,s),en(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||p_,s[o])}function AA(t,e,n){const i=this.cache,r=e.length,s=Ic(n,r);Jt(i,s)||(t.uniform1iv(this.addr,s),en(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||v_,s[o])}function bA(t,e,n){const i=this.cache,r=e.length,s=Ic(n,r);Jt(i,s)||(t.uniform1iv(this.addr,s),en(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||__,s[o])}function CA(t,e,n){const i=this.cache,r=e.length,s=Ic(n,r);Jt(i,s)||(t.uniform1iv(this.addr,s),en(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||g_,s[o])}function RA(t){switch(t){case 5126:return uA;case 35664:return fA;case 35665:return dA;case 35666:return hA;case 35674:return pA;case 35675:return mA;case 35676:return gA;case 5124:case 35670:return vA;case 35667:case 35671:return _A;case 35668:case 35672:return yA;case 35669:case 35673:return xA;case 5125:return SA;case 36294:return MA;case 36295:return EA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return TA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return CA}}class PA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=cA(n.type)}}class LA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RA(n.type)}}class NA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bu=/(\w+)(\])?(\[|\.)?/g;function Wm(t,e){t.seq.push(e),t.map[e.id]=e}function IA(t,e,n){const i=t.name,r=i.length;for(Bu.lastIndex=0;;){const s=Bu.exec(i),o=Bu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wm(n,c===void 0?new PA(a,t,e):new LA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new NA(a),Wm(n,d)),n=d}}}class Rl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);IA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function jm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const DA=37297;let UA=0;function FA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function OA(t){const e=Pt.getPrimaries(Pt.workingColorSpace),n=Pt.getPrimaries(t);let i;switch(e===n?i="":e===sc&&n===rc?i="LinearDisplayP3ToLinearSRGB":e===rc&&n===sc&&(i="LinearSRGBToLinearDisplayP3"),t){case Gi:case Lc:return[i,"LinearTransferOETF"];case ln:case ch:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Xm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+FA(t.getShaderSource(e),o)}else return r}function kA(t,e){const n=OA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function zA(t,e){let n;switch(e){case ZM:n="Linear";break;case QM:n="Reinhard";break;case JM:n="OptimizedCineon";break;case eE:n="ACESFilmic";break;case nE:n="AgX";break;case tE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function BA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function HA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function GA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Bs(t){return t!==""}function $m(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WA=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(t){return t.replace(WA,XA)}const jA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function XA(t,e){let n=pt[e];if(n===void 0){const i=jA.get(e);if(i!==void 0)n=pt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return od(n)}const $A=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(t){return t.replace($A,YA)}function YA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function qA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===z0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===TM?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function KA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case Pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function QA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case B0:e="ENVMAP_BLENDING_MULTIPLY";break;case qM:e="ENVMAP_BLENDING_MIX";break;case KM:e="ENVMAP_BLENDING_ADD";break}return e}function JA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function eb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=qA(n),c=KA(n),f=ZA(n),d=QA(n),h=JA(n),g=n.isWebGL2?"":BA(n),_=HA(n),y=GA(s),p=r.createProgram();let u,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Bs).join(`
`),u.length>0&&(u+=`
`),m=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Bs).join(`
`),m.length>0&&(m+=`
`)):(u=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),m=[g,Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?pt.tonemapping_pars_fragment:"",n.toneMapping!==yr?zA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,kA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bs).join(`
`)),o=od(o),o=$m(o,n),o=Ym(o,n),a=od(a),a=$m(a,n),a=Ym(a,n),o=qm(o),a=qm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=v+u+o,P=v+m+a,C=jm(r,r.VERTEX_SHADER,S),b=jm(r,r.FRAGMENT_SHADER,P);r.attachShader(p,C),r.attachShader(p,b),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function G(te){if(t.debug.checkShaderErrors){const le=r.getProgramInfoLog(p).trim(),k=r.getShaderInfoLog(C).trim(),ne=r.getShaderInfoLog(b).trim();let Q=!0,oe=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,C,b);else{const H=Xm(r,C,"vertex"),$=Xm(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+te.name+`
Material Type: `+te.type+`

Program Info Log: `+le+`
`+H+`
`+$)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(k===""||ne==="")&&(oe=!1);oe&&(te.diagnostics={runnable:Q,programLog:le,vertexShader:{log:k,prefix:u},fragmentShader:{log:ne,prefix:m}})}r.deleteShader(C),r.deleteShader(b),re=new Rl(r,p),x=VA(r,p)}let re;this.getUniforms=function(){return re===void 0&&G(this),re};let x;this.getAttributes=function(){return x===void 0&&G(this),x};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(p,DA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=b,this}let tb=0;class nb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ib(e),n.set(e,i)),i}}class ib{constructor(e){this.id=tb++,this.code=e,this.usedTimes=0}}function rb(t,e,n,i,r,s,o){const a=new i_,l=new nb,c=new Set,f=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,R,te,le,k){const ne=le.fog,Q=k.geometry,oe=x.isMeshStandardMaterial?le.environment:null,H=(x.isMeshStandardMaterial?n:e).get(x.envMap||oe),$=H&&H.mapping===Pc?H.image.height:null,K=y[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const se=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,fe=se!==void 0?se.length:0;let Ke=0;Q.morphAttributes.position!==void 0&&(Ke=1),Q.morphAttributes.normal!==void 0&&(Ke=2),Q.morphAttributes.color!==void 0&&(Ke=3);let ee,ae,Ae,Oe;if(K){const Ee=yi[K];ee=Ee.vertexShader,ae=Ee.fragmentShader}else ee=x.vertexShader,ae=x.fragmentShader,l.update(x),Ae=l.getVertexShaderID(x),Oe=l.getFragmentShaderID(x);const Xe=t.getRenderTarget(),Fe=k.isInstancedMesh===!0,dt=k.isBatchedMesh===!0,$e=!!x.map,W=!!x.matcap,vt=!!H,Pe=!!x.aoMap,ze=!!x.lightMap,Ve=!!x.bumpMap,Tt=!!x.normalMap,lt=!!x.displacementMap,A=!!x.emissiveMap,E=!!x.metalnessMap,q=!!x.roughnessMap,de=x.anisotropy>0,ce=x.clearcoat>0,J=x.iridescence>0,ke=x.sheen>0,be=x.transmission>0,Le=de&&!!x.anisotropyMap,et=ce&&!!x.clearcoatMap,st=ce&&!!x.clearcoatNormalMap,ue=ce&&!!x.clearcoatRoughnessMap,wt=J&&!!x.iridescenceMap,it=J&&!!x.iridescenceThicknessMap,Qe=ke&&!!x.sheenColorMap,We=ke&&!!x.sheenRoughnessMap,Ie=!!x.specularMap,nt=!!x.specularColorMap,Mt=!!x.specularIntensityMap,_t=be&&!!x.transmissionMap,ut=be&&!!x.thicknessMap,qe=!!x.gradientMap,L=!!x.alphaMap,he=x.alphaTest>0,_e=!!x.alphaHash,De=!!x.extensions;let je=yr;x.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(je=t.toneMapping);const St={isWebGL2:d,shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:ae,defines:x.defines,customVertexShaderID:Ae,customFragmentShaderID:Oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:dt,instancing:Fe,instancingColor:Fe&&k.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Xe===null?t.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:Gi,alphaToCoverage:!!x.alphaToCoverage,map:$e,matcap:W,envMap:vt,envMapMode:vt&&H.mapping,envMapCubeUVHeight:$,aoMap:Pe,lightMap:ze,bumpMap:Ve,normalMap:Tt,displacementMap:g&&lt,emissiveMap:A,normalMapObjectSpace:Tt&&x.normalMapType===hE,normalMapTangentSpace:Tt&&x.normalMapType===K0,metalnessMap:E,roughnessMap:q,anisotropy:de,anisotropyMap:Le,clearcoat:ce,clearcoatMap:et,clearcoatNormalMap:st,clearcoatRoughnessMap:ue,iridescence:J,iridescenceMap:wt,iridescenceThicknessMap:it,sheen:ke,sheenColorMap:Qe,sheenRoughnessMap:We,specularMap:Ie,specularColorMap:nt,specularIntensityMap:Mt,transmission:be,transmissionMap:_t,thicknessMap:ut,gradientMap:qe,opaque:x.transparent===!1&&x.blending===$s&&x.alphaToCoverage===!1,alphaMap:L,alphaTest:he,alphaHash:_e,combine:x.combine,mapUv:$e&&p(x.map.channel),aoMapUv:Pe&&p(x.aoMap.channel),lightMapUv:ze&&p(x.lightMap.channel),bumpMapUv:Ve&&p(x.bumpMap.channel),normalMapUv:Tt&&p(x.normalMap.channel),displacementMapUv:lt&&p(x.displacementMap.channel),emissiveMapUv:A&&p(x.emissiveMap.channel),metalnessMapUv:E&&p(x.metalnessMap.channel),roughnessMapUv:q&&p(x.roughnessMap.channel),anisotropyMapUv:Le&&p(x.anisotropyMap.channel),clearcoatMapUv:et&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:it&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:We&&p(x.sheenRoughnessMap.channel),specularMapUv:Ie&&p(x.specularMap.channel),specularColorMapUv:nt&&p(x.specularColorMap.channel),specularIntensityMapUv:Mt&&p(x.specularIntensityMap.channel),transmissionMapUv:_t&&p(x.transmissionMap.channel),thicknessMapUv:ut&&p(x.thicknessMap.channel),alphaMapUv:L&&p(x.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Tt||de),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Q.attributes.uv&&($e||L),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ke,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&te.length>0,shadowMapType:t.shadowMap.type,toneMapping:je,useLegacyLights:t._useLegacyLights,decodeVideoTexture:$e&&x.map.isVideoTexture===!0&&Pt.getTransfer(x.map.colorSpace)===It,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ci,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:De&&x.extensions.derivatives===!0,extensionFragDepth:De&&x.extensions.fragDepth===!0,extensionDrawBuffers:De&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:De&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:De&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:De&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const te in x.defines)R.push(te),R.push(x.defines[te]);return x.isRawShaderMaterial===!1&&(v(R,x),S(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function v(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function S(x,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),x.push(a.mask)}function P(x){const R=y[x.type];let te;if(R){const le=yi[R];te=BE.clone(le.uniforms)}else te=x.uniforms;return te}function C(x,R){let te;for(let le=0,k=f.length;le<k;le++){const ne=f[le];if(ne.cacheKey===R){te=ne,++te.usedTimes;break}}return te===void 0&&(te=new eb(t,R,x,s),f.push(te)),te}function b(x){if(--x.usedTimes===0){const R=f.indexOf(x);f[R]=f[f.length-1],f.pop(),x.destroy()}}function G(x){l.remove(x)}function re(){l.dispose()}return{getParameters:u,getProgramCacheKey:m,getUniforms:P,acquireProgram:C,releaseProgram:b,releaseShaderCache:G,programs:f,dispose:re}}function sb(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ob(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,g,_,y,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:g,groupOrder:_,renderOrder:d.renderOrder,z:y,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=g,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=y,u.group=p),e++,u}function a(d,h,g,_,y,p){const u=o(d,h,g,_,y,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(d,h,g,_,y,p){const u=o(d,h,g,_,y,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||ob),i.length>1&&i.sort(h||Zm),r.length>1&&r.sort(h||Zm)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function ab(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Qm,t.set(i,[o])):r>=s.length?(o=new Qm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function lb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new ft};break;case"SpotLight":n={position:new V,direction:new V,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function cb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ub=0;function fb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function db(t,e){const n=new lb,i=cb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new V);const s=new V,o=new jt,a=new jt;function l(f,d){let h=0,g=0,_=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let y=0,p=0,u=0,m=0,v=0,S=0,P=0,C=0,b=0,G=0,re=0;f.sort(fb);const x=d===!0?Math.PI:1;for(let te=0,le=f.length;te<le;te++){const k=f[te],ne=k.color,Q=k.intensity,oe=k.distance,H=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=ne.r*Q*x,g+=ne.g*Q*x,_+=ne.b*Q*x;else if(k.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(k.sh.coefficients[$],Q);re++}else if(k.isDirectionalLight){const $=n.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity*x),k.castShadow){const K=k.shadow,se=i.get(k);se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize=K.mapSize,r.directionalShadow[y]=se,r.directionalShadowMap[y]=H,r.directionalShadowMatrix[y]=k.shadow.matrix,S++}r.directional[y]=$,y++}else if(k.isSpotLight){const $=n.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(ne).multiplyScalar(Q*x),$.distance=oe,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,r.spot[u]=$;const K=k.shadow;if(k.map&&(r.spotLightMap[b]=k.map,b++,K.updateMatrices(k),k.castShadow&&G++),r.spotLightMatrix[u]=K.matrix,k.castShadow){const se=i.get(k);se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize=K.mapSize,r.spotShadow[u]=se,r.spotShadowMap[u]=H,C++}u++}else if(k.isRectAreaLight){const $=n.get(k);$.color.copy(ne).multiplyScalar(Q),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),r.rectArea[m]=$,m++}else if(k.isPointLight){const $=n.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity*x),$.distance=k.distance,$.decay=k.decay,k.castShadow){const K=k.shadow,se=i.get(k);se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize=K.mapSize,se.shadowCameraNear=K.camera.near,se.shadowCameraFar=K.camera.far,r.pointShadow[p]=se,r.pointShadowMap[p]=H,r.pointShadowMatrix[p]=k.shadow.matrix,P++}r.point[p]=$,p++}else if(k.isHemisphereLight){const $=n.get(k);$.skyColor.copy(k.color).multiplyScalar(Q*x),$.groundColor.copy(k.groundColor).multiplyScalar(Q*x),r.hemi[v]=$,v++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=_;const R=r.hash;(R.directionalLength!==y||R.pointLength!==p||R.spotLength!==u||R.rectAreaLength!==m||R.hemiLength!==v||R.numDirectionalShadows!==S||R.numPointShadows!==P||R.numSpotShadows!==C||R.numSpotMaps!==b||R.numLightProbes!==re)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=m,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+b-G,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=re,R.directionalLength=y,R.pointLength=p,R.spotLength=u,R.rectAreaLength=m,R.hemiLength=v,R.numDirectionalShadows=S,R.numPointShadows=P,R.numSpotShadows=C,R.numSpotMaps=b,R.numLightProbes=re,r.version=ub++)}function c(f,d){let h=0,g=0,_=0,y=0,p=0;const u=d.matrixWorldInverse;for(let m=0,v=f.length;m<v;m++){const S=f[m];if(S.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),h++}else if(S.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const P=r.rectArea[y];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),g++}else if(S.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Jm(t,e){const n=new db(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function hb(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Jm(t,e),n.set(s,[l])):o>=a.length?(l=new Jm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class pb extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mb extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vb=`uniform sampler2D shadow_pass;
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
}`;function _b(t,e,n){let i=new uh;const r=new mt,s=new mt,o=new rn,a=new pb({depthPacking:dE}),l=new mb,c={},f=n.maxTextureSize,d={[wr]:Fn,[Fn]:wr,[ci]:ci},h=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:gb,fragmentShader:vb}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new un;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Qn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z0;let u=this.type;this.render=function(C,b,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const re=t.getRenderTarget(),x=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),te=t.state;te.setBlending(_r),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const le=u!==Pi&&this.type===Pi,k=u===Pi&&this.type!==Pi;for(let ne=0,Q=C.length;ne<Q;ne++){const oe=C[ne],H=oe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const $=H.getFrameExtents();if(r.multiply($),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,H.mapSize.y=s.y)),H.map===null||le===!0||k===!0){const se=this.type!==Pi?{minFilter:wn,magFilter:wn}:{};H.map!==null&&H.map.dispose(),H.map=new es(r.x,r.y,se),H.map.texture.name=oe.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const K=H.getViewportCount();for(let se=0;se<K;se++){const fe=H.getViewport(se);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),te.viewport(o),H.updateMatrices(oe,se),i=H.getFrustum(),S(b,G,H.camera,oe,this.type)}H.isPointLightShadow!==!0&&this.type===Pi&&m(H,G),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(re,x,R)};function m(C,b){const G=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new es(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,G,h,y,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,G,g,y,null)}function v(C,b,G,re){let x=null;const R=G.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=G.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const te=x.uuid,le=b.uuid;let k=c[te];k===void 0&&(k={},c[te]=k);let ne=k[le];ne===void 0&&(ne=x.clone(),k[le]=ne,b.addEventListener("dispose",P)),x=ne}if(x.visible=b.visible,x.wireframe=b.wireframe,re===Pi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,G.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const te=t.properties.get(x);te.light=G}return x}function S(C,b,G,re,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Pi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld);const le=e.update(C),k=C.material;if(Array.isArray(k)){const ne=le.groups;for(let Q=0,oe=ne.length;Q<oe;Q++){const H=ne[Q],$=k[H.materialIndex];if($&&$.visible){const K=v(C,$,re,x);C.onBeforeShadow(t,C,b,G,le,K,H),t.renderBufferDirect(G,null,le,K,C,H),C.onAfterShadow(t,C,b,G,le,K,H)}}}else if(k.visible){const ne=v(C,k,re,x);C.onBeforeShadow(t,C,b,G,le,ne,null),t.renderBufferDirect(G,null,le,ne,C,null),C.onAfterShadow(t,C,b,G,le,ne,null)}}const te=C.children;for(let le=0,k=te.length;le<k;le++)S(te[le],b,G,re,x)}function P(C){C.target.removeEventListener("dispose",P);for(const G in c){const re=c[G],x=C.target.uuid;x in re&&(re[x].dispose(),delete re[x])}}}function yb(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const he=new rn;let _e=null;const De=new rn(0,0,0,0);return{setMask:function(je){_e!==je&&!L&&(t.colorMask(je,je,je,je),_e=je)},setLocked:function(je){L=je},setClear:function(je,St,Ee,Ft,ie){ie===!0&&(je*=Ft,St*=Ft,Ee*=Ft),he.set(je,St,Ee,Ft),De.equals(he)===!1&&(t.clearColor(je,St,Ee,Ft),De.copy(he))},reset:function(){L=!1,_e=null,De.set(-1,0,0,0)}}}function s(){let L=!1,he=null,_e=null,De=null;return{setTest:function(je){je?Fe(t.DEPTH_TEST):dt(t.DEPTH_TEST)},setMask:function(je){he!==je&&!L&&(t.depthMask(je),he=je)},setFunc:function(je){if(_e!==je){switch(je){case GM:t.depthFunc(t.NEVER);break;case VM:t.depthFunc(t.ALWAYS);break;case WM:t.depthFunc(t.LESS);break;case nc:t.depthFunc(t.LEQUAL);break;case jM:t.depthFunc(t.EQUAL);break;case XM:t.depthFunc(t.GEQUAL);break;case $M:t.depthFunc(t.GREATER);break;case YM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=je}},setLocked:function(je){L=je},setClear:function(je){De!==je&&(t.clearDepth(je),De=je)},reset:function(){L=!1,he=null,_e=null,De=null}}}function o(){let L=!1,he=null,_e=null,De=null,je=null,St=null,Ee=null,Ft=null,ie=null;return{setTest:function(ve){L||(ve?Fe(t.STENCIL_TEST):dt(t.STENCIL_TEST))},setMask:function(ve){he!==ve&&!L&&(t.stencilMask(ve),he=ve)},setFunc:function(ve,Me,pe){(_e!==ve||De!==Me||je!==pe)&&(t.stencilFunc(ve,Me,pe),_e=ve,De=Me,je=pe)},setOp:function(ve,Me,pe){(St!==ve||Ee!==Me||Ft!==pe)&&(t.stencilOp(ve,Me,pe),St=ve,Ee=Me,Ft=pe)},setLocked:function(ve){L=ve},setClear:function(ve){ie!==ve&&(t.clearStencil(ve),ie=ve)},reset:function(){L=!1,he=null,_e=null,De=null,je=null,St=null,Ee=null,Ft=null,ie=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let h={},g={},_=new WeakMap,y=[],p=null,u=!1,m=null,v=null,S=null,P=null,C=null,b=null,G=null,re=new ft(0,0,0),x=0,R=!1,te=null,le=null,k=null,ne=null,Q=null;const oe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=$>=1):K.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=$>=2);let se=null,fe={};const Ke=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),ae=new rn().fromArray(Ke),Ae=new rn().fromArray(ee);function Oe(L,he,_e,De){const je=new Uint8Array(4),St=t.createTexture();t.bindTexture(L,St),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<_e;Ee++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(he,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,je):t.texImage2D(he+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,je);return St}const Xe={};Xe[t.TEXTURE_2D]=Oe(t.TEXTURE_2D,t.TEXTURE_2D,1),Xe[t.TEXTURE_CUBE_MAP]=Oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Xe[t.TEXTURE_2D_ARRAY]=Oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Xe[t.TEXTURE_3D]=Oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(t.DEPTH_TEST),l.setFunc(nc),lt(!1),A(Ip),Fe(t.CULL_FACE),Ve(_r);function Fe(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function dt(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function $e(L,he){return g[L]!==he?(t.bindFramebuffer(L,he),g[L]=he,i&&(L===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=he),L===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=he)),!0):!1}function W(L,he){let _e=y,De=!1;if(L)if(_e=_.get(he),_e===void 0&&(_e=[],_.set(he,_e)),L.isWebGLMultipleRenderTargets){const je=L.texture;if(_e.length!==je.length||_e[0]!==t.COLOR_ATTACHMENT0){for(let St=0,Ee=je.length;St<Ee;St++)_e[St]=t.COLOR_ATTACHMENT0+St;_e.length=je.length,De=!0}}else _e[0]!==t.COLOR_ATTACHMENT0&&(_e[0]=t.COLOR_ATTACHMENT0,De=!0);else _e[0]!==t.BACK&&(_e[0]=t.BACK,De=!0);De&&(n.isWebGL2?t.drawBuffers(_e):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(_e))}function vt(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const Pe={[Or]:t.FUNC_ADD,[bM]:t.FUNC_SUBTRACT,[CM]:t.FUNC_REVERSE_SUBTRACT};if(i)Pe[Op]=t.MIN,Pe[kp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Pe[Op]=L.MIN_EXT,Pe[kp]=L.MAX_EXT)}const ze={[RM]:t.ZERO,[PM]:t.ONE,[LM]:t.SRC_COLOR,[Kf]:t.SRC_ALPHA,[OM]:t.SRC_ALPHA_SATURATE,[UM]:t.DST_COLOR,[IM]:t.DST_ALPHA,[NM]:t.ONE_MINUS_SRC_COLOR,[Zf]:t.ONE_MINUS_SRC_ALPHA,[FM]:t.ONE_MINUS_DST_COLOR,[DM]:t.ONE_MINUS_DST_ALPHA,[kM]:t.CONSTANT_COLOR,[zM]:t.ONE_MINUS_CONSTANT_COLOR,[BM]:t.CONSTANT_ALPHA,[HM]:t.ONE_MINUS_CONSTANT_ALPHA};function Ve(L,he,_e,De,je,St,Ee,Ft,ie,ve){if(L===_r){u===!0&&(dt(t.BLEND),u=!1);return}if(u===!1&&(Fe(t.BLEND),u=!0),L!==AM){if(L!==m||ve!==R){if((v!==Or||C!==Or)&&(t.blendEquation(t.FUNC_ADD),v=Or,C=Or),ve)switch(L){case $s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFunc(t.ONE,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case $s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,P=null,b=null,G=null,re.set(0,0,0),x=0,m=L,R=ve}return}je=je||he,St=St||_e,Ee=Ee||De,(he!==v||je!==C)&&(t.blendEquationSeparate(Pe[he],Pe[je]),v=he,C=je),(_e!==S||De!==P||St!==b||Ee!==G)&&(t.blendFuncSeparate(ze[_e],ze[De],ze[St],ze[Ee]),S=_e,P=De,b=St,G=Ee),(Ft.equals(re)===!1||ie!==x)&&(t.blendColor(Ft.r,Ft.g,Ft.b,ie),re.copy(Ft),x=ie),m=L,R=!1}function Tt(L,he){L.side===ci?dt(t.CULL_FACE):Fe(t.CULL_FACE);let _e=L.side===Fn;he&&(_e=!_e),lt(_e),L.blending===$s&&L.transparent===!1?Ve(_r):Ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const De=L.stencilWrite;c.setTest(De),De&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),q(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Fe(t.SAMPLE_ALPHA_TO_COVERAGE):dt(t.SAMPLE_ALPHA_TO_COVERAGE)}function lt(L){te!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),te=L)}function A(L){L!==EM?(Fe(t.CULL_FACE),L!==le&&(L===Ip?t.cullFace(t.BACK):L===wM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):dt(t.CULL_FACE),le=L}function E(L){L!==k&&(H&&t.lineWidth(L),k=L)}function q(L,he,_e){L?(Fe(t.POLYGON_OFFSET_FILL),(ne!==he||Q!==_e)&&(t.polygonOffset(he,_e),ne=he,Q=_e)):dt(t.POLYGON_OFFSET_FILL)}function de(L){L?Fe(t.SCISSOR_TEST):dt(t.SCISSOR_TEST)}function ce(L){L===void 0&&(L=t.TEXTURE0+oe-1),se!==L&&(t.activeTexture(L),se=L)}function J(L,he,_e){_e===void 0&&(se===null?_e=t.TEXTURE0+oe-1:_e=se);let De=fe[_e];De===void 0&&(De={type:void 0,texture:void 0},fe[_e]=De),(De.type!==L||De.texture!==he)&&(se!==_e&&(t.activeTexture(_e),se=_e),t.bindTexture(L,he||Xe[L]),De.type=L,De.texture=he)}function ke(){const L=fe[se];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function be(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(L){ae.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function Mt(L){Ae.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ae.copy(L))}function _t(L,he){let _e=d.get(he);_e===void 0&&(_e=new WeakMap,d.set(he,_e));let De=_e.get(L);De===void 0&&(De=t.getUniformBlockIndex(he,L.name),_e.set(L,De))}function ut(L,he){const De=d.get(he).get(L);f.get(he)!==De&&(t.uniformBlockBinding(he,De,L.__bindingPointIndex),f.set(he,De))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},se=null,fe={},g={},_=new WeakMap,y=[],p=null,u=!1,m=null,v=null,S=null,P=null,C=null,b=null,G=null,re=new ft(0,0,0),x=0,R=!1,te=null,le=null,k=null,ne=null,Q=null,ae.set(0,0,t.canvas.width,t.canvas.height),Ae.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Fe,disable:dt,bindFramebuffer:$e,drawBuffers:W,useProgram:vt,setBlending:Ve,setMaterial:Tt,setFlipSided:lt,setCullFace:A,setLineWidth:E,setPolygonOffset:q,setScissorTest:de,activeTexture:ce,bindTexture:J,unbindTexture:ke,compressedTexImage2D:be,compressedTexImage3D:Le,texImage2D:We,texImage3D:Ie,updateUBOMapping:_t,uniformBlockBinding:ut,texStorage2D:it,texStorage3D:Qe,texSubImage2D:et,texSubImage3D:st,compressedTexSubImage2D:ue,compressedTexSubImage3D:wt,scissor:nt,viewport:Mt,reset:qe}}function xb(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return g?new OffscreenCanvas(A,E):ac("canvas")}function y(A,E,q,de){let ce=1;if((A.width>de||A.height>de)&&(ce=de/Math.max(A.width,A.height)),ce<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const J=E?sd:Math.floor,ke=J(ce*A.width),be=J(ce*A.height);d===void 0&&(d=_(ke,be));const Le=q?_(ke,be):d;return Le.width=ke,Le.height=be,Le.getContext("2d").drawImage(A,0,0,ke,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ke+"x"+be+")."),Le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return hm(A.width)&&hm(A.height)}function u(A){return a?!1:A.wrapS!==ui||A.wrapT!==ui||A.minFilter!==wn&&A.minFilter!==Rn}function m(A,E){return A.generateMipmaps&&E&&A.minFilter!==wn&&A.minFilter!==Rn}function v(A){t.generateMipmap(A)}function S(A,E,q,de,ce=!1){if(a===!1)return E;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=E;if(E===t.RED&&(q===t.FLOAT&&(J=t.R32F),q===t.HALF_FLOAT&&(J=t.R16F),q===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(J=t.R8UI),q===t.UNSIGNED_SHORT&&(J=t.R16UI),q===t.UNSIGNED_INT&&(J=t.R32UI),q===t.BYTE&&(J=t.R8I),q===t.SHORT&&(J=t.R16I),q===t.INT&&(J=t.R32I)),E===t.RG&&(q===t.FLOAT&&(J=t.RG32F),q===t.HALF_FLOAT&&(J=t.RG16F),q===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RGBA){const ke=ce?ic:Pt.getTransfer(de);q===t.FLOAT&&(J=t.RGBA32F),q===t.HALF_FLOAT&&(J=t.RGBA16F),q===t.UNSIGNED_BYTE&&(J=ke===It?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function P(A,E,q){return m(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function C(A){return A===wn||A===zp||A===To?t.NEAREST:t.LINEAR}function b(A){const E=A.target;E.removeEventListener("dispose",b),re(E),E.isVideoTexture&&f.delete(E)}function G(A){const E=A.target;E.removeEventListener("dispose",G),R(E)}function re(A){const E=i.get(A);if(E.__webglInit===void 0)return;const q=A.source,de=h.get(q);if(de){const ce=de[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&x(A),Object.keys(de).length===0&&h.delete(q)}i.remove(A)}function x(A){const E=i.get(A);t.deleteTexture(E.__webglTexture);const q=A.source,de=h.get(q);delete de[E.__cacheKey],o.memory.textures--}function R(A){const E=A.texture,q=i.get(A),de=i.get(E);if(de.__webglTexture!==void 0&&(t.deleteTexture(de.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(q.__webglFramebuffer[ce]))for(let J=0;J<q.__webglFramebuffer[ce].length;J++)t.deleteFramebuffer(q.__webglFramebuffer[ce][J]);else t.deleteFramebuffer(q.__webglFramebuffer[ce]);q.__webglDepthbuffer&&t.deleteRenderbuffer(q.__webglDepthbuffer[ce])}else{if(Array.isArray(q.__webglFramebuffer))for(let ce=0;ce<q.__webglFramebuffer.length;ce++)t.deleteFramebuffer(q.__webglFramebuffer[ce]);else t.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&t.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&t.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ce=0;ce<q.__webglColorRenderbuffer.length;ce++)q.__webglColorRenderbuffer[ce]&&t.deleteRenderbuffer(q.__webglColorRenderbuffer[ce]);q.__webglDepthRenderbuffer&&t.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ce=0,J=E.length;ce<J;ce++){const ke=i.get(E[ce]);ke.__webglTexture&&(t.deleteTexture(ke.__webglTexture),o.memory.textures--),i.remove(E[ce])}i.remove(E),i.remove(A)}let te=0;function le(){te=0}function k(){const A=te;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),te+=1,A}function ne(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function Q(A,E){const q=i.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const de=A.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(q,A,E);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+E)}function oe(A,E){const q=i.get(A);if(A.version>0&&q.__version!==A.version){ae(q,A,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+E)}function H(A,E){const q=i.get(A);if(A.version>0&&q.__version!==A.version){ae(q,A,E);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+E)}function $(A,E){const q=i.get(A);if(A.version>0&&q.__version!==A.version){Ae(q,A,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+E)}const K={[ed]:t.REPEAT,[ui]:t.CLAMP_TO_EDGE,[td]:t.MIRRORED_REPEAT},se={[wn]:t.NEAREST,[zp]:t.NEAREST_MIPMAP_NEAREST,[To]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[du]:t.LINEAR_MIPMAP_NEAREST,[Gr]:t.LINEAR_MIPMAP_LINEAR},fe={[pE]:t.NEVER,[xE]:t.ALWAYS,[mE]:t.LESS,[Z0]:t.LEQUAL,[gE]:t.EQUAL,[yE]:t.GEQUAL,[vE]:t.GREATER,[_E]:t.NOTEQUAL};function Ke(A,E,q){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===du||E.magFilter===To||E.magFilter===Gr||E.minFilter===Rn||E.minFilter===du||E.minFilter===To||E.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(t.texParameteri(A,t.TEXTURE_WRAP_S,K[E.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,K[E.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,K[E.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,se[E.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,se[E.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==ui||E.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(E.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==wn&&E.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const de=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===wn||E.minFilter!==To&&E.minFilter!==Gr||E.type===Ii&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ha&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(A,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function ee(A,E){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",b));const de=E.source;let ce=h.get(de);ce===void 0&&(ce={},h.set(de,ce));const J=ne(E);if(J!==A.__cacheKey){ce[J]===void 0&&(ce[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ce[J].usedTimes++;const ke=ce[A.__cacheKey];ke!==void 0&&(ce[A.__cacheKey].usedTimes--,ke.usedTimes===0&&x(E)),A.__cacheKey=J,A.__webglTexture=ce[J].texture}return q}function ae(A,E,q){let de=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=t.TEXTURE_3D);const ce=ee(A,E),J=E.source;n.bindTexture(de,A.__webglTexture,t.TEXTURE0+q);const ke=i.get(J);if(J.version!==ke.__version||ce===!0){n.activeTexture(t.TEXTURE0+q);const be=Pt.getPrimaries(Pt.workingColorSpace),Le=E.colorSpace===qn?null:Pt.getPrimaries(E.colorSpace),et=E.colorSpace===qn||be===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const st=u(E)&&p(E.image)===!1;let ue=y(E.image,st,!1,r.maxTextureSize);ue=lt(E,ue);const wt=p(ue)||a,it=s.convert(E.format,E.colorSpace);let Qe=s.convert(E.type),We=S(E.internalFormat,it,Qe,E.colorSpace,E.isVideoTexture);Ke(de,E,wt);let Ie;const nt=E.mipmaps,Mt=a&&E.isVideoTexture!==!0&&We!==Y0,_t=ke.__version===void 0||ce===!0,ut=J.dataReady,qe=P(E,ue,wt);if(E.isDepthTexture)We=t.DEPTH_COMPONENT,a?E.type===Ii?We=t.DEPTH_COMPONENT32F:E.type===lr?We=t.DEPTH_COMPONENT24:E.type===jr?We=t.DEPTH24_STENCIL8:We=t.DEPTH_COMPONENT16:E.type===Ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Xr&&We===t.DEPTH_COMPONENT&&E.type!==lh&&E.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=lr,Qe=s.convert(E.type)),E.format===so&&We===t.DEPTH_COMPONENT&&(We=t.DEPTH_STENCIL,E.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=jr,Qe=s.convert(E.type))),_t&&(Mt?n.texStorage2D(t.TEXTURE_2D,1,We,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,We,ue.width,ue.height,0,it,Qe,null));else if(E.isDataTexture)if(nt.length>0&&wt){Mt&&_t&&n.texStorage2D(t.TEXTURE_2D,qe,We,nt[0].width,nt[0].height);for(let L=0,he=nt.length;L<he;L++)Ie=nt[L],Mt?ut&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,Ie.width,Ie.height,it,Qe,Ie.data):n.texImage2D(t.TEXTURE_2D,L,We,Ie.width,Ie.height,0,it,Qe,Ie.data);E.generateMipmaps=!1}else Mt?(_t&&n.texStorage2D(t.TEXTURE_2D,qe,We,ue.width,ue.height),ut&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,it,Qe,ue.data)):n.texImage2D(t.TEXTURE_2D,0,We,ue.width,ue.height,0,it,Qe,ue.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Mt&&_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,We,nt[0].width,nt[0].height,ue.depth);for(let L=0,he=nt.length;L<he;L++)Ie=nt[L],E.format!==fi?it!==null?Mt?ut&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,L,0,0,0,Ie.width,Ie.height,ue.depth,it,Ie.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,L,We,Ie.width,Ie.height,ue.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?ut&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,L,0,0,0,Ie.width,Ie.height,ue.depth,it,Qe,Ie.data):n.texImage3D(t.TEXTURE_2D_ARRAY,L,We,Ie.width,Ie.height,ue.depth,0,it,Qe,Ie.data)}else{Mt&&_t&&n.texStorage2D(t.TEXTURE_2D,qe,We,nt[0].width,nt[0].height);for(let L=0,he=nt.length;L<he;L++)Ie=nt[L],E.format!==fi?it!==null?Mt?ut&&n.compressedTexSubImage2D(t.TEXTURE_2D,L,0,0,Ie.width,Ie.height,it,Ie.data):n.compressedTexImage2D(t.TEXTURE_2D,L,We,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?ut&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,Ie.width,Ie.height,it,Qe,Ie.data):n.texImage2D(t.TEXTURE_2D,L,We,Ie.width,Ie.height,0,it,Qe,Ie.data)}else if(E.isDataArrayTexture)Mt?(_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,qe,We,ue.width,ue.height,ue.depth),ut&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,it,Qe,ue.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,We,ue.width,ue.height,ue.depth,0,it,Qe,ue.data);else if(E.isData3DTexture)Mt?(_t&&n.texStorage3D(t.TEXTURE_3D,qe,We,ue.width,ue.height,ue.depth),ut&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,it,Qe,ue.data)):n.texImage3D(t.TEXTURE_3D,0,We,ue.width,ue.height,ue.depth,0,it,Qe,ue.data);else if(E.isFramebufferTexture){if(_t)if(Mt)n.texStorage2D(t.TEXTURE_2D,qe,We,ue.width,ue.height);else{let L=ue.width,he=ue.height;for(let _e=0;_e<qe;_e++)n.texImage2D(t.TEXTURE_2D,_e,We,L,he,0,it,Qe,null),L>>=1,he>>=1}}else if(nt.length>0&&wt){Mt&&_t&&n.texStorage2D(t.TEXTURE_2D,qe,We,nt[0].width,nt[0].height);for(let L=0,he=nt.length;L<he;L++)Ie=nt[L],Mt?ut&&n.texSubImage2D(t.TEXTURE_2D,L,0,0,it,Qe,Ie):n.texImage2D(t.TEXTURE_2D,L,We,it,Qe,Ie);E.generateMipmaps=!1}else Mt?(_t&&n.texStorage2D(t.TEXTURE_2D,qe,We,ue.width,ue.height),ut&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,it,Qe,ue)):n.texImage2D(t.TEXTURE_2D,0,We,it,Qe,ue);m(E,wt)&&v(de),ke.__version=J.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ae(A,E,q){if(E.image.length!==6)return;const de=ee(A,E),ce=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+q);const J=i.get(ce);if(ce.version!==J.__version||de===!0){n.activeTexture(t.TEXTURE0+q);const ke=Pt.getPrimaries(Pt.workingColorSpace),be=E.colorSpace===qn?null:Pt.getPrimaries(E.colorSpace),Le=E.colorSpace===qn||ke===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const et=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let L=0;L<6;L++)!et&&!st?ue[L]=y(E.image[L],!1,!0,r.maxCubemapSize):ue[L]=st?E.image[L].image:E.image[L],ue[L]=lt(E,ue[L]);const wt=ue[0],it=p(wt)||a,Qe=s.convert(E.format,E.colorSpace),We=s.convert(E.type),Ie=S(E.internalFormat,Qe,We,E.colorSpace),nt=a&&E.isVideoTexture!==!0,Mt=J.__version===void 0||de===!0,_t=ce.dataReady;let ut=P(E,wt,it);Ke(t.TEXTURE_CUBE_MAP,E,it);let qe;if(et){nt&&Mt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,Ie,wt.width,wt.height);for(let L=0;L<6;L++){qe=ue[L].mipmaps;for(let he=0;he<qe.length;he++){const _e=qe[he];E.format!==fi?Qe!==null?nt?_t&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,he,0,0,_e.width,_e.height,Qe,_e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,he,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?_t&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,he,0,0,_e.width,_e.height,Qe,We,_e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,he,Ie,_e.width,_e.height,0,Qe,We,_e.data)}}}else{qe=E.mipmaps,nt&&Mt&&(qe.length>0&&ut++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,Ie,ue[0].width,ue[0].height));for(let L=0;L<6;L++)if(st){nt?_t&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,ue[L].width,ue[L].height,Qe,We,ue[L].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,Ie,ue[L].width,ue[L].height,0,Qe,We,ue[L].data);for(let he=0;he<qe.length;he++){const De=qe[he].image[L].image;nt?_t&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,he+1,0,0,De.width,De.height,Qe,We,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,he+1,Ie,De.width,De.height,0,Qe,We,De.data)}}else{nt?_t&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Qe,We,ue[L]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,Ie,Qe,We,ue[L]);for(let he=0;he<qe.length;he++){const _e=qe[he];nt?_t&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,he+1,0,0,Qe,We,_e.image[L]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+L,he+1,Ie,Qe,We,_e.image[L])}}}m(E,it)&&v(t.TEXTURE_CUBE_MAP),J.__version=ce.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Oe(A,E,q,de,ce,J){const ke=s.convert(q.format,q.colorSpace),be=s.convert(q.type),Le=S(q.internalFormat,ke,be,q.colorSpace);if(!i.get(E).__hasExternalTextures){const st=Math.max(1,E.width>>J),ue=Math.max(1,E.height>>J);ce===t.TEXTURE_3D||ce===t.TEXTURE_2D_ARRAY?n.texImage3D(ce,J,Le,st,ue,E.depth,0,ke,be,null):n.texImage2D(ce,J,Le,st,ue,0,ke,be,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ve(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,de,ce,i.get(q).__webglTexture,0,ze(E)):(ce===t.TEXTURE_2D||ce>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,de,ce,i.get(q).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(A,E,q){if(t.bindRenderbuffer(t.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let de=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(q||Ve(E)){const ce=E.depthTexture;ce&&ce.isDepthTexture&&(ce.type===Ii?de=t.DEPTH_COMPONENT32F:ce.type===lr&&(de=t.DEPTH_COMPONENT24));const J=ze(E);Ve(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,de,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,J,de,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,de,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const de=ze(E);q&&Ve(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,t.DEPTH24_STENCIL8,E.width,E.height):Ve(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const de=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ce=0;ce<de.length;ce++){const J=de[ce],ke=s.convert(J.format,J.colorSpace),be=s.convert(J.type),Le=S(J.internalFormat,ke,be,J.colorSpace),et=ze(E);q&&Ve(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,et,Le,E.width,E.height):Ve(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,et,Le,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Le,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Fe(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const de=i.get(E.depthTexture).__webglTexture,ce=ze(E);if(E.depthTexture.format===Xr)Ve(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,de,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,de,0);else if(E.depthTexture.format===so)Ve(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,de,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function dt(A){const E=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Fe(E.__webglFramebuffer,A)}else if(q){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]=t.createRenderbuffer(),Xe(E.__webglDepthbuffer[de],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),Xe(E.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(A,E,q){const de=i.get(A);E!==void 0&&Oe(de.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&dt(A)}function W(A){const E=A.texture,q=i.get(A),de=i.get(E);A.addEventListener("dispose",G),A.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture()),de.__version=E.version,o.memory.textures++);const ce=A.isWebGLCubeRenderTarget===!0,J=A.isWebGLMultipleRenderTargets===!0,ke=p(A)||a;if(ce){q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(a&&E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[be]=[];for(let Le=0;Le<E.mipmaps.length;Le++)q.__webglFramebuffer[be][Le]=t.createFramebuffer()}else q.__webglFramebuffer[be]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let be=0;be<E.mipmaps.length;be++)q.__webglFramebuffer[be]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(J)if(r.drawBuffers){const be=A.texture;for(let Le=0,et=be.length;Le<et;Le++){const st=i.get(be[Le]);st.__webglTexture===void 0&&(st.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ve(A)===!1){const be=J?E:[E];q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Le=0;Le<be.length;Le++){const et=be[Le];q.__webglColorRenderbuffer[Le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[Le]);const st=s.convert(et.format,et.colorSpace),ue=s.convert(et.type),wt=S(et.internalFormat,st,ue,et.colorSpace,A.isXRRenderTarget===!0),it=ze(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,it,wt,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,q.__webglColorRenderbuffer[Le])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),Xe(q.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,de.__webglTexture),Ke(t.TEXTURE_CUBE_MAP,E,ke);for(let be=0;be<6;be++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Le=0;Le<E.mipmaps.length;Le++)Oe(q.__webglFramebuffer[be][Le],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Le);else Oe(q.__webglFramebuffer[be],A,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(E,ke)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(J){const be=A.texture;for(let Le=0,et=be.length;Le<et;Le++){const st=be[Le],ue=i.get(st);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),Ke(t.TEXTURE_2D,st,ke),Oe(q.__webglFramebuffer,A,st,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,0),m(st,ke)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let be=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?be=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(be,de.__webglTexture),Ke(be,E,ke),a&&E.mipmaps&&E.mipmaps.length>0)for(let Le=0;Le<E.mipmaps.length;Le++)Oe(q.__webglFramebuffer[Le],A,E,t.COLOR_ATTACHMENT0,be,Le);else Oe(q.__webglFramebuffer,A,E,t.COLOR_ATTACHMENT0,be,0);m(E,ke)&&v(be),n.unbindTexture()}A.depthBuffer&&dt(A)}function vt(A){const E=p(A)||a,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let de=0,ce=q.length;de<ce;de++){const J=q[de];if(m(J,E)){const ke=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(J).__webglTexture;n.bindTexture(ke,be),v(ke),n.unbindTexture()}}}function Pe(A){if(a&&A.samples>0&&Ve(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,de=A.height;let ce=t.COLOR_BUFFER_BIT;const J=[],ke=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(A),Le=A.isWebGLMultipleRenderTargets===!0;if(Le)for(let et=0;et<E.length;et++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+et,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+et,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let et=0;et<E.length;et++){J.push(t.COLOR_ATTACHMENT0+et),A.depthBuffer&&J.push(ke);const st=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(st===!1&&(A.depthBuffer&&(ce|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ce|=t.STENCIL_BUFFER_BIT)),Le&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[et]),st===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ke]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ke])),Le){const ue=i.get(E[et]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,q,de,0,0,q,de,ce,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,J)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Le)for(let et=0;et<E.length;et++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+et,t.RENDERBUFFER,be.__webglColorRenderbuffer[et]);const st=i.get(E[et]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+et,t.TEXTURE_2D,st,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function ze(A){return Math.min(r.maxSamples,A.samples)}function Ve(A){const E=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(A){const E=o.render.frame;f.get(A)!==E&&(f.set(A,E),A.update())}function lt(A,E){const q=A.colorSpace,de=A.format,ce=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===id||q!==Gi&&q!==qn&&(Pt.getTransfer(q)===It?a===!1?e.has("EXT_sRGB")===!0&&de===fi?(A.format=id,A.minFilter=Rn,A.generateMipmaps=!1):E=J0.sRGBToLinear(E):(de!==fi||ce!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}this.allocateTextureUnit=k,this.resetTextureUnits=le,this.setTexture2D=Q,this.setTexture2DArray=oe,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=$e,this.setupRenderTarget=W,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Ve}function Sb(t,e,n){const i=n.isWebGL2;function r(s,o=qn){let a;const l=Pt.getTransfer(o);if(s===xr)return t.UNSIGNED_BYTE;if(s===V0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===W0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===iE)return t.BYTE;if(s===rE)return t.SHORT;if(s===lh)return t.UNSIGNED_SHORT;if(s===G0)return t.INT;if(s===lr)return t.UNSIGNED_INT;if(s===Ii)return t.FLOAT;if(s===ha)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===sE)return t.ALPHA;if(s===fi)return t.RGBA;if(s===oE)return t.LUMINANCE;if(s===aE)return t.LUMINANCE_ALPHA;if(s===Xr)return t.DEPTH_COMPONENT;if(s===so)return t.DEPTH_STENCIL;if(s===id)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===lE)return t.RED;if(s===j0)return t.RED_INTEGER;if(s===cE)return t.RG;if(s===X0)return t.RG_INTEGER;if(s===$0)return t.RGBA_INTEGER;if(s===hu||s===pu||s===mu||s===gu)if(l===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bp||s===Hp||s===Gp||s===Vp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Y0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wp||s===jp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Wp)return l===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===jp)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xp||s===$p||s===Yp||s===qp||s===Kp||s===Zp||s===Qp||s===Jp||s===em||s===tm||s===nm||s===im||s===rm||s===sm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xp)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$p)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yp)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qp)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kp)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zp)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qp)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jp)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===em)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===tm)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nm)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===im)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rm)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sm)return l===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vu||s===om||s===am)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===vu)return l===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===om)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===am)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===uE||s===lm||s===cm||s===um)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===vu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===lm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===um)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Mb extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xi extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eb={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),g=.02,_=.005;c.inputState.pinching&&h>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tb=`
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

}`;class Ab{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new An,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Tr({extensions:{fragDepth:!0},vertexShader:wb,fragmentShader:Tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qn(new ao(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class bb extends po{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,g=null,_=null;const y=new Ab,p=n.getContextAttributes();let u=null,m=null;const v=[],S=[],P=new mt;let C=null;const b=new Yn;b.layers.enable(1),b.viewport=new rn;const G=new Yn;G.layers.enable(2),G.viewport=new rn;const re=[b,G],x=new Mb;x.layers.enable(1),x.layers.enable(2);let R=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ae=v[ee];return ae===void 0&&(ae=new Hu,v[ee]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ee){let ae=v[ee];return ae===void 0&&(ae=new Hu,v[ee]=ae),ae.getGripSpace()},this.getHand=function(ee){let ae=v[ee];return ae===void 0&&(ae=new Hu,v[ee]=ae),ae.getHandSpace()};function le(ee){const ae=S.indexOf(ee.inputSource);if(ae===-1)return;const Ae=v[ae];Ae!==void 0&&(Ae.update(ee.inputSource,ee.frame,c||o),Ae.dispatchEvent({type:ee.type,data:ee.inputSource}))}function k(){r.removeEventListener("select",le),r.removeEventListener("selectstart",le),r.removeEventListener("selectend",le),r.removeEventListener("squeeze",le),r.removeEventListener("squeezestart",le),r.removeEventListener("squeezeend",le),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<v.length;ee++){const ae=S[ee];ae!==null&&(S[ee]=null,v[ee].disconnect(ae))}R=null,te=null,y.reset(),e.setRenderTarget(u),g=null,h=null,d=null,r=null,m=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",le),r.addEventListener("selectstart",le),r.addEventListener("selectend",le),r.addEventListener("squeeze",le),r.addEventListener("squeezestart",le),r.addEventListener("squeezeend",le),r.addEventListener("end",k),r.addEventListener("inputsourceschange",ne),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),m=new es(g.framebufferWidth,g.framebufferHeight,{format:fi,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ae=null,Ae=null,Oe=null;p.depth&&(Oe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=p.stencil?so:Xr,Ae=p.stencil?jr:lr);const Xe={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),m=new es(h.textureWidth,h.textureHeight,{format:fi,type:xr,depthTexture:new h_(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Fe=e.properties.get(m);Fe.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ne(ee){for(let ae=0;ae<ee.removed.length;ae++){const Ae=ee.removed[ae],Oe=S.indexOf(Ae);Oe>=0&&(S[Oe]=null,v[Oe].disconnect(Ae))}for(let ae=0;ae<ee.added.length;ae++){const Ae=ee.added[ae];let Oe=S.indexOf(Ae);if(Oe===-1){for(let Fe=0;Fe<v.length;Fe++)if(Fe>=S.length){S.push(Ae),Oe=Fe;break}else if(S[Fe]===null){S[Fe]=Ae,Oe=Fe;break}if(Oe===-1)break}const Xe=v[Oe];Xe&&Xe.connect(Ae)}}const Q=new V,oe=new V;function H(ee,ae,Ae){Q.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(Ae.matrixWorld);const Oe=Q.distanceTo(oe),Xe=ae.projectionMatrix.elements,Fe=Ae.projectionMatrix.elements,dt=Xe[14]/(Xe[10]-1),$e=Xe[14]/(Xe[10]+1),W=(Xe[9]+1)/Xe[5],vt=(Xe[9]-1)/Xe[5],Pe=(Xe[8]-1)/Xe[0],ze=(Fe[8]+1)/Fe[0],Ve=dt*Pe,Tt=dt*ze,lt=Oe/(-Pe+ze),A=lt*-Pe;ae.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(A),ee.translateZ(lt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const E=dt+lt,q=$e+lt,de=Ve-A,ce=Tt+(Oe-A),J=W*$e/q*E,ke=vt*$e/q*E;ee.projectionMatrix.makePerspective(de,ce,J,ke,E,q),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function $(ee,ae){ae===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ae.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;y.texture!==null&&(ee.near=y.depthNear,ee.far=y.depthFar),x.near=G.near=b.near=ee.near,x.far=G.far=b.far=ee.far,(R!==x.near||te!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,te=x.far,b.near=R,b.far=te,G.near=R,G.far=te,b.updateProjectionMatrix(),G.updateProjectionMatrix(),ee.updateProjectionMatrix());const ae=ee.parent,Ae=x.cameras;$(x,ae);for(let Oe=0;Oe<Ae.length;Oe++)$(Ae[Oe],ae);Ae.length===2?H(x,b,G):x.projectionMatrix.copy(b.projectionMatrix),K(ee,x,ae)};function K(ee,ae,Ae){Ae===null?ee.matrix.copy(ae.matrixWorld):(ee.matrix.copy(Ae.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ae.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=rd*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null};let se=null;function fe(ee,ae){if(f=ae.getViewerPose(c||o),_=ae,f!==null){const Ae=f.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let Oe=!1;Ae.length!==x.cameras.length&&(x.cameras.length=0,Oe=!0);for(let Fe=0;Fe<Ae.length;Fe++){const dt=Ae[Fe];let $e=null;if(g!==null)$e=g.getViewport(dt);else{const vt=d.getViewSubImage(h,dt);$e=vt.viewport,Fe===0&&(e.setRenderTargetTextures(m,vt.colorTexture,h.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(m))}let W=re[Fe];W===void 0&&(W=new Yn,W.layers.enable(Fe),W.viewport=new rn,re[Fe]=W),W.matrix.fromArray(dt.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(dt.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set($e.x,$e.y,$e.width,$e.height),Fe===0&&(x.matrix.copy(W.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Oe===!0&&x.cameras.push(W)}const Xe=r.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")){const Fe=d.getDepthInformation(Ae[0]);Fe&&Fe.isValid&&Fe.texture&&y.init(e,Fe,r.renderState)}}for(let Ae=0;Ae<v.length;Ae++){const Oe=S[Ae],Xe=v[Ae];Oe!==null&&Xe!==void 0&&Xe.update(Oe,ae,c||o)}y.render(e,x),se&&se(ee,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const Ke=new f_;Ke.setAnimationLoop(fe),this.setAnimationLoop=function(ee){se=ee},this.dispose=function(){}}}function Cb(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,l_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,m,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&g(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,m,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Fn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Fn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const m=e.get(u).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,m,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*m,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,m){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Fn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const m=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Rb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const S=v.program;i.uniformBlockBinding(m,S)}function c(m,v){let S=r[m.id];S===void 0&&(_(m),S=f(m),r[m.id]=S,m.addEventListener("dispose",p));const P=v.program;i.updateUBOMapping(m,P);const C=e.render.frame;s[m.id]!==C&&(h(m),s[m.id]=C)}function f(m){const v=d();m.__bindingPointIndex=v;const S=t.createBuffer(),P=m.__size,C=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],S=m.uniforms,P=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,b=S.length;C<b;C++){const G=Array.isArray(S[C])?S[C]:[S[C]];for(let re=0,x=G.length;re<x;re++){const R=G[re];if(g(R,C,re,P)===!0){const te=R.__offset,le=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let ne=0;ne<le.length;ne++){const Q=le[ne],oe=y(Q);typeof Q=="number"||typeof Q=="boolean"?(R.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,te+k,R.__data)):Q.isMatrix3?(R.__data[0]=Q.elements[0],R.__data[1]=Q.elements[1],R.__data[2]=Q.elements[2],R.__data[3]=0,R.__data[4]=Q.elements[3],R.__data[5]=Q.elements[4],R.__data[6]=Q.elements[5],R.__data[7]=0,R.__data[8]=Q.elements[6],R.__data[9]=Q.elements[7],R.__data[10]=Q.elements[8],R.__data[11]=0):(Q.toArray(R.__data,k),k+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,te,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,S,P){const C=m.value,b=v+"_"+S;if(P[b]===void 0)return typeof C=="number"||typeof C=="boolean"?P[b]=C:P[b]=C.clone(),!0;{const G=P[b];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return P[b]=C,!0}else if(G.equals(C)===!1)return G.copy(C),!0}return!1}function _(m){const v=m.uniforms;let S=0;const P=16;for(let b=0,G=v.length;b<G;b++){const re=Array.isArray(v[b])?v[b]:[v[b]];for(let x=0,R=re.length;x<R;x++){const te=re[x],le=Array.isArray(te.value)?te.value:[te.value];for(let k=0,ne=le.length;k<ne;k++){const Q=le[k],oe=y(Q),H=S%P;H!==0&&P-H<oe.boundary&&(S+=P-H),te.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=S,S+=oe.storage}}}const C=S%P;return C>0&&(S+=P-C),m.__size=S,m.__cache={},this}function y(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function p(m){const v=m.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class y_{constructor(e={}){const{canvas:n=ME(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const g=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const u=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this._useLegacyLights=!1,this.toneMapping=yr,this.toneMappingExposure=1;const v=this;let S=!1,P=0,C=0,b=null,G=-1,re=null;const x=new rn,R=new rn;let te=null;const le=new ft(0);let k=0,ne=n.width,Q=n.height,oe=1,H=null,$=null;const K=new rn(0,0,ne,Q),se=new rn(0,0,ne,Q);let fe=!1;const Ke=new uh;let ee=!1,ae=!1,Ae=null;const Oe=new jt,Xe=new mt,Fe=new V,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return b===null?oe:1}let W=i;function vt(T,B){for(let X=0;X<T.length;X++){const Z=T[X],Y=n.getContext(Z,B);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ah}`),n.addEventListener("webglcontextlost",qe,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",he,!1),W===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),W=vt(B,T),W===null)throw vt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pe,ze,Ve,Tt,lt,A,E,q,de,ce,J,ke,be,Le,et,st,ue,wt,it,Qe,We,Ie,nt,Mt;function _t(){Pe=new F1(W),ze=new P1(W,Pe,e),Pe.init(ze),Ie=new Sb(W,Pe,ze),Ve=new yb(W,Pe,ze),Tt=new z1(W),lt=new sb,A=new xb(W,Pe,Ve,lt,ze,Ie,Tt),E=new N1(v),q=new U1(v),de=new $E(W,ze),nt=new C1(W,Pe,de,ze),ce=new O1(W,de,Tt,nt),J=new V1(W,ce,de,Tt),it=new G1(W,ze,A),st=new L1(lt),ke=new rb(v,E,q,Pe,ze,nt,st),be=new Cb(v,lt),Le=new ab,et=new hb(Pe,ze),wt=new b1(v,E,q,Ve,J,h,l),ue=new _b(v,J,ze),Mt=new Rb(W,Tt,ze,Ve),Qe=new R1(W,Pe,Tt,ze),We=new k1(W,Pe,Tt,ze),Tt.programs=ke.programs,v.capabilities=ze,v.extensions=Pe,v.properties=lt,v.renderLists=Le,v.shadowMap=ue,v.state=Ve,v.info=Tt}_t();const ut=new bb(v,W);this.xr=ut,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=Pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(T){T!==void 0&&(oe=T,this.setSize(ne,Q,!1))},this.getSize=function(T){return T.set(ne,Q)},this.setSize=function(T,B,X=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=T,Q=B,n.width=Math.floor(T*oe),n.height=Math.floor(B*oe),X===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(ne*oe,Q*oe).floor()},this.setDrawingBufferSize=function(T,B,X){ne=T,Q=B,oe=X,n.width=Math.floor(T*X),n.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,B,X,Z){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,B,X,Z),Ve.viewport(x.copy(K).multiplyScalar(oe).floor())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,B,X,Z){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,B,X,Z),Ve.scissor(R.copy(se).multiplyScalar(oe).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(T){Ve.setScissorTest(fe=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(T=!0,B=!0,X=!0){let Z=0;if(T){let Y=!1;if(b!==null){const Ce=b.texture.format;Y=Ce===$0||Ce===X0||Ce===j0}if(Y){const Ce=b.texture.type,He=Ce===xr||Ce===lr||Ce===lh||Ce===jr||Ce===V0||Ce===W0,Ne=wt.getClearColor(),Re=wt.getClearAlpha(),rt=Ne.r,Je=Ne.g,tt=Ne.b;He?(g[0]=rt,g[1]=Je,g[2]=tt,g[3]=Re,W.clearBufferuiv(W.COLOR,0,g)):(_[0]=rt,_[1]=Je,_[2]=tt,_[3]=Re,W.clearBufferiv(W.COLOR,0,_))}else Z|=W.COLOR_BUFFER_BIT}B&&(Z|=W.DEPTH_BUFFER_BIT),X&&(Z|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",qe,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",he,!1),Le.dispose(),et.dispose(),lt.dispose(),E.dispose(),q.dispose(),J.dispose(),nt.dispose(),Mt.dispose(),ke.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ie),ut.removeEventListener("sessionend",ve),Ae&&(Ae.dispose(),Ae=null),Me.stop()};function qe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Tt.autoReset,B=ue.enabled,X=ue.autoUpdate,Z=ue.needsUpdate,Y=ue.type;_t(),Tt.autoReset=T,ue.enabled=B,ue.autoUpdate=X,ue.needsUpdate=Z,ue.type=Y}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _e(T){const B=T.target;B.removeEventListener("dispose",_e),De(B)}function De(T){je(T),lt.remove(T)}function je(T){const B=lt.get(T).programs;B!==void 0&&(B.forEach(function(X){ke.releaseProgram(X)}),T.isShaderMaterial&&ke.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,Z,Y,Ce){B===null&&(B=dt);const He=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=Gt(T,B,X,Z,Y);Ve.setMaterial(Z,He);let Re=X.index,rt=1;if(Z.wireframe===!0){if(Re=ce.getWireframeAttribute(X),Re===void 0)return;rt=2}const Je=X.drawRange,tt=X.attributes.position;let w=Je.start*rt,z=(Je.start+Je.count)*rt;Ce!==null&&(w=Math.max(w,Ce.start*rt),z=Math.min(z,(Ce.start+Ce.count)*rt)),Re!==null?(w=Math.max(w,0),z=Math.min(z,Re.count)):tt!=null&&(w=Math.max(w,0),z=Math.min(z,tt.count));const I=z-w;if(I<0||I===1/0)return;nt.setup(Y,Z,Ne,X,Re);let D,j=Qe;if(Re!==null&&(D=de.get(Re),j=We,j.setIndex(D)),Y.isMesh)Z.wireframe===!0?(Ve.setLineWidth(Z.wireframeLinewidth*$e()),j.setMode(W.LINES)):j.setMode(W.TRIANGLES);else if(Y.isLine){let U=Z.linewidth;U===void 0&&(U=1),Ve.setLineWidth(U*$e()),Y.isLineSegments?j.setMode(W.LINES):Y.isLineLoop?j.setMode(W.LINE_LOOP):j.setMode(W.LINE_STRIP)}else Y.isPoints?j.setMode(W.POINTS):Y.isSprite&&j.setMode(W.TRIANGLES);if(Y.isBatchedMesh)j.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)j.renderInstances(w,I,Y.count);else if(X.isInstancedBufferGeometry){const U=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,N=Math.min(X.instanceCount,U);j.renderInstances(w,I,N)}else j.render(w,I)};function St(T,B,X){T.transparent===!0&&T.side===ci&&T.forceSinglePass===!1?(T.side=Fn,T.needsUpdate=!0,at(T,B,X),T.side=wr,T.needsUpdate=!0,at(T,B,X),T.side=ci):at(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),p=et.get(X),p.init(),m.push(p),X.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),T!==X&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights(v._useLegacyLights);const Z=new Set;return T.traverse(function(Y){const Ce=Y.material;if(Ce)if(Array.isArray(Ce))for(let He=0;He<Ce.length;He++){const Ne=Ce[He];St(Ne,X,Y),Z.add(Ne)}else St(Ce,X,Y),Z.add(Ce)}),m.pop(),p=null,Z},this.compileAsync=function(T,B,X=null){const Z=this.compile(T,B,X);return new Promise(Y=>{function Ce(){if(Z.forEach(function(He){lt.get(He).currentProgram.isReady()&&Z.delete(He)}),Z.size===0){Y(T);return}setTimeout(Ce,10)}Pe.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Ee=null;function Ft(T){Ee&&Ee(T)}function ie(){Me.stop()}function ve(){Me.start()}const Me=new f_;Me.setAnimationLoop(Ft),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(T){Ee=T,ut.setAnimationLoop(T),T===null?Me.stop():Me.start()},ut.addEventListener("sessionstart",ie),ut.addEventListener("sessionend",ve),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(B),B=ut.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,b),p=et.get(T,m.length),p.init(),m.push(p),Oe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ke.setFromProjectionMatrix(Oe),ae=this.localClippingEnabled,ee=st.init(this.clippingPlanes,ae),y=Le.get(T,u.length),y.init(),u.push(y),pe(T,B,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(H,$),this.info.render.frame++,ee===!0&&st.beginShadows();const X=p.state.shadowsArray;if(ue.render(X,T,B),ee===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1)&&wt.render(y,T),p.setupLights(v._useLegacyLights),B.isArrayCamera){const Z=B.cameras;for(let Y=0,Ce=Z.length;Y<Ce;Y++){const He=Z[Y];xe(y,T,He,He.viewport)}}else xe(y,T,B);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(v,T,B),nt.resetDefaultState(),G=-1,re=null,m.pop(),m.length>0?p=m[m.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function pe(T,B,X,Z){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ke.intersectsSprite(T)){Z&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Oe);const He=J.update(T),Ne=T.material;Ne.visible&&y.push(T,He,Ne,X,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ke.intersectsObject(T))){const He=J.update(T),Ne=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Fe.copy(He.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ne)){const Re=He.groups;for(let rt=0,Je=Re.length;rt<Je;rt++){const tt=Re[rt],w=Ne[tt.materialIndex];w&&w.visible&&y.push(T,He,w,X,Fe.z,tt)}}else Ne.visible&&y.push(T,He,Ne,X,Fe.z,null)}}const Ce=T.children;for(let He=0,Ne=Ce.length;He<Ne;He++)pe(Ce[He],B,X,Z)}function xe(T,B,X,Z){const Y=T.opaque,Ce=T.transmissive,He=T.transparent;p.setupLightsView(X),ee===!0&&st.setGlobalState(v.clippingPlanes,X),Ce.length>0&&Ge(Y,Ce,B,X),Z&&Ve.viewport(x.copy(Z)),Y.length>0&&Ye(Y,B,X),Ce.length>0&&Ye(Ce,B,X),He.length>0&&Ye(He,B,X),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Ge(T,B,X,Z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const Ce=ze.isWebGL2;Ae===null&&(Ae=new es(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?ha:xr,minFilter:Gr,samples:Ce?4:0})),v.getDrawingBufferSize(Xe),Ce?Ae.setSize(Xe.x,Xe.y):Ae.setSize(sd(Xe.x),sd(Xe.y));const He=v.getRenderTarget();v.setRenderTarget(Ae),v.getClearColor(le),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear();const Ne=v.toneMapping;v.toneMapping=yr,Ye(T,X,Z),A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae);let Re=!1;for(let rt=0,Je=B.length;rt<Je;rt++){const tt=B[rt],w=tt.object,z=tt.geometry,I=tt.material,D=tt.group;if(I.side===ci&&w.layers.test(Z.layers)){const j=I.side;I.side=Fn,I.needsUpdate=!0,ot(w,X,Z,z,I,D),I.side=j,I.needsUpdate=!0,Re=!0}}Re===!0&&(A.updateMultisampleRenderTarget(Ae),A.updateRenderTargetMipmap(Ae)),v.setRenderTarget(He),v.setClearColor(le,k),v.toneMapping=Ne}function Ye(T,B,X){const Z=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Ce=T.length;Y<Ce;Y++){const He=T[Y],Ne=He.object,Re=He.geometry,rt=Z===null?He.material:Z,Je=He.group;Ne.layers.test(X.layers)&&ot(Ne,B,X,Re,rt,Je)}}function ot(T,B,X,Z,Y,Ce){T.onBeforeRender(v,B,X,Z,Y,Ce),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(v,B,X,Z,T,Ce),Y.transparent===!0&&Y.side===ci&&Y.forceSinglePass===!1?(Y.side=Fn,Y.needsUpdate=!0,v.renderBufferDirect(X,B,Z,Y,T,Ce),Y.side=wr,Y.needsUpdate=!0,v.renderBufferDirect(X,B,Z,Y,T,Ce),Y.side=ci):v.renderBufferDirect(X,B,Z,Y,T,Ce),T.onAfterRender(v,B,X,Z,Y,Ce)}function at(T,B,X){B.isScene!==!0&&(B=dt);const Z=lt.get(T),Y=p.state.lights,Ce=p.state.shadowsArray,He=Y.state.version,Ne=ke.getParameters(T,Y.state,Ce,B,X),Re=ke.getProgramCacheKey(Ne);let rt=Z.programs;Z.environment=T.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(T.isMeshStandardMaterial?q:E).get(T.envMap||Z.environment),rt===void 0&&(T.addEventListener("dispose",_e),rt=new Map,Z.programs=rt);let Je=rt.get(Re);if(Je!==void 0){if(Z.currentProgram===Je&&Z.lightsStateVersion===He)return yt(T,Ne),Je}else Ne.uniforms=ke.getUniforms(T),T.onBuild(X,Ne,v),T.onBeforeCompile(Ne,v),Je=ke.acquireProgram(Ne,Re),rt.set(Re,Je),Z.uniforms=Ne.uniforms;const tt=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(tt.clippingPlanes=st.uniform),yt(T,Ne),Z.needsLights=pn(T),Z.lightsStateVersion=He,Z.needsLights&&(tt.ambientLightColor.value=Y.state.ambient,tt.lightProbe.value=Y.state.probe,tt.directionalLights.value=Y.state.directional,tt.directionalLightShadows.value=Y.state.directionalShadow,tt.spotLights.value=Y.state.spot,tt.spotLightShadows.value=Y.state.spotShadow,tt.rectAreaLights.value=Y.state.rectArea,tt.ltc_1.value=Y.state.rectAreaLTC1,tt.ltc_2.value=Y.state.rectAreaLTC2,tt.pointLights.value=Y.state.point,tt.pointLightShadows.value=Y.state.pointShadow,tt.hemisphereLights.value=Y.state.hemi,tt.directionalShadowMap.value=Y.state.directionalShadowMap,tt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,tt.spotShadowMap.value=Y.state.spotShadowMap,tt.spotLightMatrix.value=Y.state.spotLightMatrix,tt.spotLightMap.value=Y.state.spotLightMap,tt.pointShadowMap.value=Y.state.pointShadowMap,tt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Je,Z.uniformsList=null,Je}function At(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Rl.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function yt(T,B){const X=lt.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Gt(T,B,X,Z,Y){B.isScene!==!0&&(B=dt),A.resetTextureUnits();const Ce=B.fog,He=Z.isMeshStandardMaterial?B.environment:null,Ne=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Gi,Re=(Z.isMeshStandardMaterial?q:E).get(Z.envMap||He),rt=Z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Je=!!X.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),tt=!!X.morphAttributes.position,w=!!X.morphAttributes.normal,z=!!X.morphAttributes.color;let I=yr;Z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(I=v.toneMapping);const D=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,j=D!==void 0?D.length:0,U=lt.get(Z),N=p.state.lights;if(ee===!0&&(ae===!0||T!==re)){const ht=T===re&&Z.id===G;st.setState(Z,T,ht)}let O=!1;Z.version===U.__version?(U.needsLights&&U.lightsStateVersion!==N.state.version||U.outputColorSpace!==Ne||Y.isBatchedMesh&&U.batching===!1||!Y.isBatchedMesh&&U.batching===!0||Y.isInstancedMesh&&U.instancing===!1||!Y.isInstancedMesh&&U.instancing===!0||Y.isSkinnedMesh&&U.skinning===!1||!Y.isSkinnedMesh&&U.skinning===!0||Y.isInstancedMesh&&U.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&U.instancingColor===!1&&Y.instanceColor!==null||U.envMap!==Re||Z.fog===!0&&U.fog!==Ce||U.numClippingPlanes!==void 0&&(U.numClippingPlanes!==st.numPlanes||U.numIntersection!==st.numIntersection)||U.vertexAlphas!==rt||U.vertexTangents!==Je||U.morphTargets!==tt||U.morphNormals!==w||U.morphColors!==z||U.toneMapping!==I||ze.isWebGL2===!0&&U.morphTargetsCount!==j)&&(O=!0):(O=!0,U.__version=Z.version);let me=U.currentProgram;O===!0&&(me=at(Z,B,Y));let Se=!1,ye=!1,we=!1;const Be=me.getUniforms(),ct=U.uniforms;if(Ve.useProgram(me.program)&&(Se=!0,ye=!0,we=!0),Z.id!==G&&(G=Z.id,ye=!0),Se||re!==T){Be.setValue(W,"projectionMatrix",T.projectionMatrix),Be.setValue(W,"viewMatrix",T.matrixWorldInverse);const ht=Be.map.cameraPosition;ht!==void 0&&ht.setValue(W,Fe.setFromMatrixPosition(T.matrixWorld)),ze.logarithmicDepthBuffer&&Be.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Be.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),re!==T&&(re=T,ye=!0,we=!0)}if(Y.isSkinnedMesh){Be.setOptional(W,Y,"bindMatrix"),Be.setOptional(W,Y,"bindMatrixInverse");const ht=Y.skeleton;ht&&(ze.floatVertexTextures?(ht.boneTexture===null&&ht.computeBoneTexture(),Be.setValue(W,"boneTexture",ht.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Be.setOptional(W,Y,"batchingTexture"),Be.setValue(W,"batchingTexture",Y._matricesTexture,A));const Ze=X.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0&&ze.isWebGL2===!0)&&it.update(Y,X,me),(ye||U.receiveShadow!==Y.receiveShadow)&&(U.receiveShadow=Y.receiveShadow,Be.setValue(W,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ct.envMap.value=Re,ct.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ye&&(Be.setValue(W,"toneMappingExposure",v.toneMappingExposure),U.needsLights&&Ot(ct,we),Ce&&Z.fog===!0&&be.refreshFogUniforms(ct,Ce),be.refreshMaterialUniforms(ct,Z,oe,Q,Ae),Rl.upload(W,At(U),ct,A)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Rl.upload(W,At(U),ct,A),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Be.setValue(W,"center",Y.center),Be.setValue(W,"modelViewMatrix",Y.modelViewMatrix),Be.setValue(W,"normalMatrix",Y.normalMatrix),Be.setValue(W,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const ht=Z.uniformsGroups;for(let bt=0,mi=ht.length;bt<mi;bt++)if(ze.isWebGL2){const ss=ht[bt];Mt.update(ss,me),Mt.bind(ss,me)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return me}function Ot(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function pn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,B,X){lt.get(T.texture).__webglTexture=B,lt.get(T.depthTexture).__webglTexture=X;const Z=lt.get(T);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=X===void 0,Z.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const X=lt.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,X=0){b=T,P=B,C=X;let Z=!0,Y=null,Ce=!1,He=!1;if(T){const Re=lt.get(T);Re.__useDefaultFramebuffer!==void 0?(Ve.bindFramebuffer(W.FRAMEBUFFER,null),Z=!1):Re.__webglFramebuffer===void 0?A.setupRenderTarget(T):Re.__hasExternalTextures&&A.rebindTextures(T,lt.get(T.texture).__webglTexture,lt.get(T.depthTexture).__webglTexture);const rt=T.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(He=!0);const Je=lt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Je[B])?Y=Je[B][X]:Y=Je[B],Ce=!0):ze.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?Y=lt.get(T).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[X]:Y=Je,x.copy(T.viewport),R.copy(T.scissor),te=T.scissorTest}else x.copy(K).multiplyScalar(oe).floor(),R.copy(se).multiplyScalar(oe).floor(),te=fe;if(Ve.bindFramebuffer(W.FRAMEBUFFER,Y)&&ze.drawBuffers&&Z&&Ve.drawBuffers(T,Y),Ve.viewport(x),Ve.scissor(R),Ve.setScissorTest(te),Ce){const Re=lt.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+B,Re.__webglTexture,X)}else if(He){const Re=lt.get(T.texture),rt=B||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Re.__webglTexture,X||0,rt)}G=-1},this.readRenderTargetPixels=function(T,B,X,Z,Y,Ce,He){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=lt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&He!==void 0&&(Ne=Ne[He]),Ne){Ve.bindFramebuffer(W.FRAMEBUFFER,Ne);try{const Re=T.texture,rt=Re.format,Je=Re.type;if(rt!==fi&&Ie.convert(rt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const tt=Je===ha&&(Pe.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Je!==xr&&Ie.convert(Je)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===Ii&&(ze.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Z&&X>=0&&X<=T.height-Y&&W.readPixels(B,X,Z,Y,Ie.convert(rt),Ie.convert(Je),Ce)}finally{const Re=b!==null?lt.get(b).__webglFramebuffer:null;Ve.bindFramebuffer(W.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(T,B,X=0){const Z=Math.pow(2,-X),Y=Math.floor(B.image.width*Z),Ce=Math.floor(B.image.height*Z);A.setTexture2D(B,0),W.copyTexSubImage2D(W.TEXTURE_2D,X,0,0,T.x,T.y,Y,Ce),Ve.unbindTexture()},this.copyTextureToTexture=function(T,B,X,Z=0){const Y=B.image.width,Ce=B.image.height,He=Ie.convert(X.format),Ne=Ie.convert(X.type);A.setTexture2D(X,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment),B.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Z,T.x,T.y,Y,Ce,He,Ne,B.image.data):B.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Z,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,He,B.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,Z,T.x,T.y,He,Ne,B.image),Z===0&&X.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(T,B,X,Z,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=T.max.x-T.min.x+1,He=T.max.y-T.min.y+1,Ne=T.max.z-T.min.z+1,Re=Ie.convert(Z.format),rt=Ie.convert(Z.type);let Je;if(Z.isData3DTexture)A.setTexture3D(Z,0),Je=W.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)A.setTexture2DArray(Z,0),Je=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Z.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Z.unpackAlignment);const tt=W.getParameter(W.UNPACK_ROW_LENGTH),w=W.getParameter(W.UNPACK_IMAGE_HEIGHT),z=W.getParameter(W.UNPACK_SKIP_PIXELS),I=W.getParameter(W.UNPACK_SKIP_ROWS),D=W.getParameter(W.UNPACK_SKIP_IMAGES),j=X.isCompressedTexture?X.mipmaps[Y]:X.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,j.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,j.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,T.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,T.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?W.texSubImage3D(Je,Y,B.x,B.y,B.z,Ce,He,Ne,Re,rt,j.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Je,Y,B.x,B.y,B.z,Ce,He,Ne,Re,j.data)):W.texSubImage3D(Je,Y,B.x,B.y,B.z,Ce,He,Ne,Re,rt,j),W.pixelStorei(W.UNPACK_ROW_LENGTH,tt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,w),W.pixelStorei(W.UNPACK_SKIP_PIXELS,z),W.pixelStorei(W.UNPACK_SKIP_ROWS,I),W.pixelStorei(W.UNPACK_SKIP_IMAGES,D),Y===0&&Z.generateMipmaps&&W.generateMipmap(Je),Ve.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Ve.unbindTexture()},this.resetState=function(){P=0,C=0,b=null,Ve.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ch?"display-p3":"srgb",n.unpackColorSpace=Pt.workingColorSpace===Lc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ln?$r:q0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$r?ln:Gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Pb extends y_{}Pb.prototype.isWebGL1Renderer=!0;class Lb extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Nb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Sn=new V;class lc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(e),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Mi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Mi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Mi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Mi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Rt(n,this.array),i=Rt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new cn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new lc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ad extends rs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Es;const Po=new V,ws=new V,Ts=new V,As=new mt,Lo=new mt,x_=new jt,ol=new V,No=new V,al=new V,eg=new mt,Gu=new mt,tg=new mt;class ng extends Qt{constructor(e=new ad){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new un;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Nb(n,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new lc(i,3,0,!1)),Es.setAttribute("uv",new lc(i,2,3,!1))}this.geometry=Es,this.material=e,this.center=new mt(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),x_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Ts.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ll(ol.set(-.5,-.5,0),Ts,o,ws,r,s),ll(No.set(.5,-.5,0),Ts,o,ws,r,s),ll(al.set(.5,.5,0),Ts,o,ws,r,s),eg.set(0,0),Gu.set(1,0),tg.set(1,1);let a=e.ray.intersectTriangle(ol,No,al,!1,Po);if(a===null&&(ll(No.set(-.5,.5,0),Ts,o,ws,r,s),Gu.set(0,1),a=e.ray.intersectTriangle(ol,al,No,!1,Po),a===null))return;const l=e.ray.origin.distanceTo(Po);l<e.near||l>e.far||n.push({distance:l,point:Po.clone(),uv:Kn.getInterpolation(Po,ol,No,al,eg,Gu,tg,new mt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ll(t,e,n,i,r,s){As.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Lo.x=s*As.x-r*As.y,Lo.y=r*As.x+s*As.y):Lo.copy(As),t.copy(e),t.x+=Lo.x,t.y+=Lo.y,t.applyMatrix4(x_)}class _i extends rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ig=new V,rg=new V,sg=new jt,Vu=new n_,cl=new Nc;class ld extends Qt{constructor(e=new un,n=new _i){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ig.fromBufferAttribute(n,r-1),rg.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ig.distanceTo(rg);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;sg.copy(r).invert(),Vu.copy(e.ray).applyMatrix4(sg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new V,f=new V,d=new V,h=new V,g=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const u=Math.max(0,o.start),m=Math.min(_.count,o.start+o.count);for(let v=u,S=m-1;v<S;v+=g){const P=_.getX(v),C=_.getX(v+1);if(c.fromBufferAttribute(p,P),f.fromBufferAttribute(p,C),Vu.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(h);G<e.near||G>e.far||n.push({distance:G,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let v=u,S=m-1;v<S;v+=g){if(c.fromBufferAttribute(p,v),f.fromBufferAttribute(p,v+1),Vu.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||n.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const og=new V,ag=new V;class $o extends ld{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)og.fromBufferAttribute(n,r),ag.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+og.distanceTo(ag);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lg extends An{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const ul=new V,fl=new V,Wu=new V,dl=new Kn;class Ib extends un{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Cl*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},g=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:y,b:p,c:u}=dl;if(y.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),dl.getNormal(Wu),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let m=0;m<3;m++){const v=(m+1)%3,S=d[m],P=d[v],C=dl[f[m]],b=dl[f[v]],G=`${S}_${P}`,re=`${P}_${S}`;re in h&&h[re]?(Wu.dot(h[re].normal)<=s&&(g.push(C.x,C.y,C.z),g.push(b.x,b.y,b.z)),h[re]=null):G in h||(h[G]={index0:c[m],index1:c[v],normal:Wu.clone()})}}for(const _ in h)if(h[_]){const{index0:y,index1:p}=h[_];ul.fromBufferAttribute(a,y),fl.fromBufferAttribute(a,p),g.push(ul.x,ul.y,ul.z),g.push(fl.x,fl.y,fl.z)}this.setAttribute("position",new dn(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class dh extends un{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new V,h=new V,g=[],_=[],y=[],p=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const C=P/n;d.x=-e*Math.cos(r+C*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),p.push(C+S,1-v),m.push(c++)}f.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=f[u][m+1],S=f[u][m],P=f[u+1][m],C=f[u+1][m+1];(u!==0||o>0)&&g.push(v,S,C),(u!==i-1||l<Math.PI)&&g.push(S,P,C)}this.setIndex(g),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(y,3)),this.setAttribute("uv",new dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Io extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K0,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hh extends Qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Db extends hh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const ju=new jt,cg=new V,ug=new V;class Ub{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uh,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;cg.setFromMatrixPosition(e.matrixWorld),n.position.copy(cg),ug.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ug),n.updateMatrixWorld(),ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fb extends Ub{constructor(){super(new d_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fg extends hh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Fb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ob extends hh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class kb extends $o{constructor(e=10,n=10,i=4473924,r=8947848){i=new ft(i),r=new ft(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,g=0,_=-a;h<=n;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=h===s?i:r;y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3,y.toArray(c,g),g+=3}const f=new un;f.setAttribute("position",new dn(l,3)),f.setAttribute("color",new dn(c,3));const d=new _i({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class zb extends $o{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new un;r.setAttribute("position",new dn(n,3)),r.setAttribute("color",new dn(i,3));const s=new _i({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new ft,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);function Xu(t,e,n){return t<e?e:t>n?n:t}function Bb(t){const e=F.useRef(null),n=F.useRef([]),i=F.useRef(null),r=F.useRef(0),s=F.useRef(null),o=F.useRef({enabled:!0,scale:1,background:!0}),a=F.useRef(!0),l=F.useRef(null),c=F.useRef([]),f=F.useRef([]),d=F.useRef(null),h=F.useRef([]),g=F.useRef({markers:!0,trail:!0,death:!0,ping:!0,terrain:!0,towns:!0});return F.useEffect(()=>{n.current=t.players,g.current.markers=!0},[t.players]),F.useEffect(()=>{i.current=t.focusTarget},[t.focusTarget]),F.useEffect(()=>{r.current=t.focusNonce},[t.focusNonce]),F.useEffect(()=>{s.current=typeof t.followPlayerId=="number"?t.followPlayerId:null},[t.followPlayerId]),F.useEffect(()=>{o.current=t.nameTags||{enabled:!0,scale:1,background:!0},g.current.markers=!0},[t.nameTags]),F.useEffect(()=>{a.current=t.showAimLines!==!1,g.current.markers=!0},[t.showAimLines]),F.useEffect(()=>{l.current=t.trail||null,g.current.trail=!0},[t.trail]),F.useEffect(()=>{c.current=Array.isArray(t.deathMarkers)?t.deathMarkers:[],g.current.death=!0},[t.deathMarkers]),F.useEffect(()=>{f.current=Array.isArray(t.pingMarkers)?t.pingMarkers:[],g.current.ping=!0},[t.pingMarkers]),F.useEffect(()=>{d.current=t.terrain||null,g.current.terrain=!0},[t.terrain]),F.useEffect(()=>{h.current=Array.isArray(t.towns)?t.towns:[],g.current.towns=!0},[t.towns]),F.useEffect(()=>{const _=e.current;if(!_)return;const y=_,p=new y_({canvas:y,antialias:!0,powerPreference:"high-performance"});p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),p.shadowMap.enabled=!1;const u=new Lb;u.background=new ft(724761);const m=new Yn(70,1,.1,2e4);m.position.set(0,25,60);const v=new Ob(16777215,.28);u.add(v);const S=new Db(9418495,724761,.35);u.add(S);const P=new fg(16777215,1.15);P.position.set(150,260,130),P.castShadow=!1,u.add(P);const C=new fg(16777215,.35);C.position.set(-180,160,-120),u.add(C);const b=new kb(2e3,200,3293278,1910328);u.add(b);const G=new zb(10);u.add(G);const re=new xi;u.add(re);const x=new xi;u.add(x);const R=new xi;u.add(R);const te=new xi;u.add(te);const le=new xi;u.add(le);const k=new xi;u.add(k);const ne=new dh(.4,16,12),Q=new Io({color:16366681}),oe=new Io({color:16757322}),H=new Io({color:9081766}),$=new _i({color:16366681,transparent:!0,opacity:.8}),K=new _i({color:16757322,transparent:!0,opacity:.8}),se=new _i({color:9081766,transparent:!0,opacity:.7}),fe=new _i({color:16366681,transparent:!0,opacity:.35}),Ke=new _i({color:16730698,transparent:!0,opacity:.9}),ee=new _i({color:16366681,transparent:!0,opacity:.95}),ae=new Io({vertexColors:!0,roughness:1,metalness:0,side:ci,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),Ae=new _i({color:15134195,transparent:!0,opacity:.55}),Oe=new Map,Xe=new Map,Fe=new Map,dt=new Map,$e=new Map,W=new Map;let vt=null,Pe=null,ze=null,Ve="",Tt=null;function lt(ie){const ve=ie.material;ve.map&&ve.map.dispose(),ve.dispose()}function A(){const ie=h.current;if(ie===Tt)return;Tt=ie;for(const xe of Fe.values())lt(xe),le.remove(xe);if(Fe.clear(),!ie||ie.length===0)return;const ve={scale:2.8,background:!1},Me=xe=>/^type:\s*\d+\s*$/i.test(xe.trim()),pe=xe=>{let Ge=(xe||"").trim();return Ge=Ge.replace(/^#AR-MapLocation_/i,""),Ge=Ge.replace(/_/g," ").trim(),Ge};for(const xe of ie){if(!xe||typeof xe.name!="string"||!xe.name)continue;const Ge=pe(xe.name);if(!Ge||Me(Ge))continue;const Ye=xe.pos;if(!Ye||!Number.isFinite(Ye.x)||!Number.isFinite(Ye.y)||!Number.isFinite(Ye.z))continue;const ot=q(Ge,ve);de(ot,ve),ot.frustumCulled=!1,ot.material.depthWrite=!1,ot.position.set(Ye.x,Ye.y+5,Ye.z),le.add(ot);const at=Math.round(Ye.x),At=Math.round(Ye.z),yt=`${Ge}|${at}|${At}`;Fe.set(yt,ot)}}let E=null;function q(ie,ve){const Me=document.createElement("canvas"),pe=Me.getContext("2d");if(!pe){const B=new lg(document.createElement("canvas")),X=new ad({map:B,transparent:!0});return new ng(X)}const xe=16;pe.font=`600 ${xe}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;const Ge=10,Ye=6,ot=pe.measureText(ie),at=Math.ceil(ot.width),At=Math.max(8,at+Ge*2),yt=xe+Ye*2,Gt=2;if(Me.width=At*Gt,Me.height=yt*Gt,pe.setTransform(Gt,0,0,Gt,0,0),pe.clearRect(0,0,At,yt),ve.background){pe.fillStyle="rgba(0,0,0,0.55)";const B=6;pe.beginPath(),pe.moveTo(B,0),pe.lineTo(At-B,0),pe.quadraticCurveTo(At,0,At,B),pe.lineTo(At,yt-B),pe.quadraticCurveTo(At,yt,At-B,yt),pe.lineTo(B,yt),pe.quadraticCurveTo(0,yt,0,yt-B),pe.lineTo(0,B),pe.quadraticCurveTo(0,0,B,0),pe.closePath(),pe.fill()}pe.font=`600 ${xe}px system-ui, -apple-system, Segoe UI, Roboto, Arial`,pe.fillStyle="rgba(255,255,255,0.95)",pe.textBaseline="middle",pe.fillText(ie,Ge,Math.floor(yt/2));const Ot=new lg(Me);Ot.needsUpdate=!0;const pn=new ad({map:Ot,transparent:!0,depthTest:!1}),T=new ng(pn);return T.userData={canvas:Me,texture:Ot,text:ie},T.center.set(.5,0),T}function de(ie,ve){const pe=ie.material.map,xe=pe&&pe.image;if(!xe||!xe.width||!xe.height){ie.scale.set(2.5*ve.scale,.8*ve.scale,1);return}const Ge=xe.width/xe.height,Ye=.85*ve.scale,ot=Ye*Ge;ie.scale.set(ot,Ye,1)}function ce(ie,ve,Me){const pe=ie.userData;if(pe&&pe.text===ve){de(ie,Me);return}const xe=ie.material,Ge=xe.map;Ge&&Ge.dispose(),xe.dispose();const Ye=q(ve,Me);ie.material=Ye.material,ie.userData=Ye.userData,de(ie,Me)}const J={rmbDown:!1,pointerLocked:!1,yaw:0,pitch:0,speed:20,keys:Object.create(null)};let ke=0;function be(){const ie=y.clientWidth,ve=y.clientHeight;p.setSize(ie,ve,!1),m.aspect=ie/ve,m.updateProjectionMatrix()}const Le=new ResizeObserver(()=>be());Le.observe(y),be();function et(){const ie=new Set,ve=o.current,Me=a.current,pe=n.current;for(const xe of pe){ie.add(xe.playerId);let Ge=Oe.get(xe.playerId);if(!Ge){Ge=new Qn(ne,Q),Ge.castShadow=!1,Ge.receiveShadow=!1,Ge.userData={playerId:xe.playerId},Oe.set(xe.playerId,Ge),re.add(Ge);const Gt=q(xe.label||String(xe.playerId),ve);Gt.position.set(0,1.2,0),de(Gt,ve),Xe.set(xe.playerId,Gt),Ge.add(Gt);const Ot=new un,pn=new Float32Array(6);Ot.setAttribute("position",new cn(pn,3));const T=new ld(Ot,$);dt.set(xe.playerId,T),re.add(T)}const Ye=!!xe.isDead,ot=!!xe.inVehicle,at=Ye?H:ot?oe:Q;Ge.material!==at&&(Ge.material=at),Ge.position.set(xe.pos.x,xe.pos.y,xe.pos.z);const At=Xe.get(xe.playerId);At&&(At.visible=ve.enabled,ve.enabled&&ce(At,xe.label||String(xe.playerId),ve));const yt=dt.get(xe.playerId);if(yt){if(yt.visible=Me,!Me)continue;const Gt=Ye?se:ot?K:$;yt.material!==Gt&&(yt.material=Gt);const Ot=xe.aimDir,pn=yt.geometry.getAttribute("position");if(!Ot)pn.setXYZ(0,xe.pos.x,xe.pos.y,xe.pos.z),pn.setXYZ(1,xe.pos.x,xe.pos.y,xe.pos.z),pn.needsUpdate=!0;else{const T=Ot.x,B=Ot.y,X=Ot.z,Z=Math.max(1e-4,Math.sqrt(T*T+B*B+X*X)),Y=T/Z,Ce=B/Z,He=X/Z,Ne=6,Re=xe.pos.x,rt=xe.pos.y+.6,Je=xe.pos.z,tt=Re+Y*Ne,w=rt+Ce*Ne,z=Je+He*Ne;pn.setXYZ(0,Re,rt,Je),pn.setXYZ(1,tt,w,z),pn.needsUpdate=!0}}}for(const[xe,Ge]of Oe){if(ie.has(xe))continue;re.remove(Ge),Oe.delete(xe);const Ye=Xe.get(xe);if(Ye){Ge.remove(Ye);const at=Ye.material;at.map&&at.map.dispose(),at.dispose(),Xe.delete(xe)}const ot=dt.get(xe);ot&&(re.remove(ot),ot.geometry.dispose(),dt.delete(xe))}}function st(){const ie=l.current;if(!ie||!Array.isArray(ie.points)||ie.points.length<2){E&&(x.remove(E),E.geometry.dispose(),E=null);return}const ve=ie.points,Me=new Float32Array(ve.length*3);for(let pe=0;pe<ve.length;pe++)Me[pe*3+0]=ve[pe].x,Me[pe*3+1]=ve[pe].y+.15,Me[pe*3+2]=ve[pe].z;if(E){const pe=E.geometry;pe.setAttribute("position",new cn(Me,3)),pe.getAttribute("position").needsUpdate=!0,pe.computeBoundingSphere()}else{const pe=new un;pe.setAttribute("position",new cn(Me,3)),E=new ld(pe,fe),x.add(E)}}function ue(){const ie=c.current,ve=new Set;for(let Me=0;Me<ie.length;Me++){const pe=ie[Me],xe=`${Math.round(pe.x*10)}|${Math.round(pe.y*10)}|${Math.round(pe.z*10)}|${Me}`;ve.add(xe);let Ge=$e.get(xe);if(!Ge){const ot=new un,at=new Float32Array([-1.2,0,-1.2,1.2,0,1.2,-1.2,0,1.2,1.2,0,-1.2]);ot.setAttribute("position",new cn(at,3)),Ge=new $o(ot,Ke),$e.set(xe,Ge),R.add(Ge)}Ge.position.set(pe.x,pe.y+.1,pe.z)}for(const[Me,pe]of $e)ve.has(Me)||(R.remove(pe),pe.geometry.dispose(),$e.delete(Me))}function wt(){const ie=f.current,ve=new Set;for(let Me=0;Me<ie.length;Me++){const pe=ie[Me],xe=`${Math.round(pe.x*10)}|${Math.round(pe.y*10)}|${Math.round(pe.z*10)}|${Me}`;ve.add(xe);let Ge=W.get(xe);if(!Ge){const ot=new un,at=new Float32Array([-1.8,0,-1.8,1.8,0,1.8,-1.8,0,1.8,1.8,0,-1.8]);ot.setAttribute("position",new cn(at,3)),Ge=new $o(ot,ee),W.set(xe,Ge),te.add(Ge)}Ge.position.set(pe.x,pe.y+.15,pe.z)}for(const[Me,pe]of W)ve.has(Me)||(te.remove(pe),pe.geometry.dispose(),W.delete(Me))}function it(){const ie=new ts().setFromAxisAngle(new V(0,1,0),J.yaw),ve=new ts().setFromAxisAngle(new V(1,0,0),J.pitch);m.quaternion.copy(ie).multiply(ve)}function Qe(ie){ie.preventDefault()}function We(ie){ie.button===2&&(J.rmbDown=!0,document.pointerLockElement!==y&&y.requestPointerLock())}function Ie(ie){ie.button===2&&(J.rmbDown=!1,document.pointerLockElement===y&&document.exitPointerLock())}function nt(){if(J.pointerLocked=document.pointerLockElement===y,J.pointerLocked){const ie=new xa().setFromQuaternion(m.quaternion,"YXZ");J.yaw=ie.y,J.pitch=ie.x}}function Mt(ie){if(!J.pointerLocked)return;const ve=ie.movementX||0,Me=ie.movementY||0;J.yaw-=ve*.002,J.pitch-=Me*.002,J.pitch=Xu(J.pitch,-Math.PI/2+.01,Math.PI/2-.01)}function _t(ie){if(typeof s.current=="number"){const xe=ie.deltaY<0?.9:1.1,Ge=Ee.clone().multiplyScalar(xe),Ye=Ge.length(),ot=Xu(Ye,6,800);Ye>1e-4&&Ge.multiplyScalar(ot/Ye),Ee.copy(Ge);return}const Me=ie.deltaY<0?1:-1,pe=J.speed+Me*Math.max(1,J.speed*.1);J.speed=Xu(pe,1,400)}function ut(ie){J.keys[ie.code]=!0}function qe(ie){J.keys[ie.code]=!1}function L(){const ie=d.current;if(!ie){b.visible=!0,vt&&(vt.geometry.dispose(),k.remove(vt),vt=null,Ve=""),Pe&&(Pe.geometry.dispose(),k.remove(Pe),Pe=null),ze&&(ze.geometry.dispose(),ze.material.dispose(),k.remove(ze),ze=null);return}b.visible=!1;const ve=`${ie.gridW}x${ie.gridH}|${ie.bbMin.x},${ie.bbMin.y},${ie.bbMin.z}|${ie.bbMax.x},${ie.bbMax.y},${ie.bbMax.z}|${ie.heights.length}`;if(ve===Ve)return;Ve=ve,vt&&(vt.geometry.dispose(),k.remove(vt),vt=null),Pe&&(Pe.geometry.dispose(),k.remove(Pe),Pe=null),ze&&(ze.geometry.dispose(),ze.material.dispose(),k.remove(ze),ze=null);const Me=Math.max(2,Math.floor(ie.gridW)),pe=Math.max(2,Math.floor(ie.gridH)),xe=Me*pe;if(!Array.isArray(ie.heights)||ie.heights.length<xe)return;const Ge=ie.bbMax.x-ie.bbMin.x,Ye=ie.bbMax.z-ie.bbMin.z;if(!Number.isFinite(Ge)||!Number.isFinite(Ye)||Ge<=0||Ye<=0)return;const ot=new ao(Ge,Ye,Me-1,pe-1);ot.rotateX(-Math.PI/2);const at=ot.attributes.position;let At=1/0,yt=-1/0;for(let Ne=0;Ne<xe;Ne++){const Re=ie.heights[Ne];typeof Re!="number"||!Number.isFinite(Re)||(Re<At&&(At=Re),Re>yt&&(yt=Re))}(!Number.isFinite(At)||!Number.isFinite(yt)||yt-At<.001)&&(At=0,yt=1);const Gt=yt-At,Ot=new Float32Array(xe*3),pn=new ft(988708),T=new ft(1910328),B=new ft(3293278),X=0,Z=new ft(735846);for(let Ne=0;Ne<pe;Ne++){const Re=Ne,rt=Ne;for(let Je=0;Je<Me;Je++){const tt=Je+Me*Re,w=Je+Me*rt,z=ie.heights[tt];at.setY(w,z);let I=(z-At)/Gt;Number.isFinite(I)||(I=0),I=Math.min(1,Math.max(0,I)),I=Math.pow(I,.65);const D=I<.5?pn.clone().lerp(T,I/.5):T.clone().lerp(B,(I-.5)/.5);Number.isFinite(z)&&z<X&&D.lerp(Z,.28),Ot[w*3+0]=D.r,Ot[w*3+1]=D.g,Ot[w*3+2]=D.b}}at.needsUpdate=!0,ot.setAttribute("color",new cn(Ot,3)),ot.computeVertexNormals(),vt=new Qn(ot,ae),vt.receiveShadow=!1,vt.castShadow=!1;const Y=(ie.bbMin.x+ie.bbMax.x)/2,Ce=(ie.bbMin.z+ie.bbMax.z)/2;if(vt.position.set(Y,0,Ce),k.add(vt),At<X&&yt>X){const Ne=new ao(Ge,Ye,1,1);Ne.rotateX(-Math.PI/2);const Re=new Io({color:1732264,transparent:!0,opacity:.26,roughness:.15,metalness:0,side:ci,depthWrite:!1});ze=new Qn(Ne,Re),ze.receiveShadow=!1,ze.castShadow=!1,ze.position.set(Y,X,Ce),k.add(ze)}const He=new Ib(ot,35);Pe=new $o(He,Ae),Pe.position.copy(vt.position),k.add(Pe)}y.addEventListener("contextmenu",Qe),y.addEventListener("mousedown",We),window.addEventListener("mouseup",Ie),document.addEventListener("pointerlockchange",nt),window.addEventListener("mousemove",Mt),y.addEventListener("wheel",_t,{passive:!0}),window.addEventListener("keydown",ut),window.addEventListener("keyup",qe);let he=performance.now(),_e=0,De=0,je=0,St=null;const Ee=new V(0,25,60);function Ft(ie){const ve=Math.min((ie-he)/1e3,.05);he=ie;const Me=g.current;Me.towns&&(A(),Me.towns=!1),Me.markers&&ie-De>=50&&(et(),Me.markers=!1,De=ie),Me.trail&&ie-je>=75&&(st(),Me.trail=!1,je=ie),Me.death&&(ue(),Me.death=!1),Me.ping&&(wt(),Me.ping=!1),Me.terrain&&(L(),Me.terrain=!1);const pe=s.current;if(typeof pe=="number"){const ot=n.current.find(at=>at&&at.playerId===pe);if(ot){const at=ot.pos;if(pe!==St){Ee.set(m.position.x-at.x,m.position.y-at.y,m.position.z-at.z);const yt=Ee.length();(!Number.isFinite(Ee.x)||!Number.isFinite(Ee.y)||!Number.isFinite(Ee.z)||!Number.isFinite(yt)||yt<1||yt>500)&&Ee.set(0,25,60),St=pe}if(m.position.set(at.x+Ee.x,at.y+Ee.y,at.z+Ee.z),m.lookAt(at.x,at.y+1.5,at.z),J.rmbDown||J.pointerLocked){const yt=new V(0,0,-1).applyQuaternion(m.quaternion),Gt=new V(1,0,0).applyQuaternion(m.quaternion),Ot=new V(0,1,0);J.keys.KeyW&&Ee.addScaledVector(yt,J.speed*ve),J.keys.KeyS&&Ee.addScaledVector(yt,-J.speed*ve),J.keys.KeyA&&Ee.addScaledVector(Gt,-J.speed*ve),J.keys.KeyD&&Ee.addScaledVector(Gt,J.speed*ve),J.keys.KeyQ&&Ee.addScaledVector(Ot,J.speed*ve),J.keys.KeyZ&&Ee.addScaledVector(Ot,-J.speed*ve)}m.position.set(at.x+Ee.x,at.y+Ee.y,at.z+Ee.z),m.lookAt(at.x,at.y+1.5,at.z)}}else St=null;const xe=r.current;if(pe===null&&xe!==ke){ke=xe;const Ye=i.current;Ye&&(m.position.set(Ye.x,Ye.y+25,Ye.z+60),m.lookAt(Ye.x,Ye.y+1.5,Ye.z))}if(J.pointerLocked&&pe===null&&it(),(J.rmbDown||J.pointerLocked)&&pe===null){const Ye=new V(0,0,-1).applyQuaternion(m.quaternion),ot=new V(1,0,0).applyQuaternion(m.quaternion),at=new V(0,1,0);J.keys.KeyW&&m.position.addScaledVector(Ye,J.speed*ve),J.keys.KeyS&&m.position.addScaledVector(Ye,-J.speed*ve),J.keys.KeyA&&m.position.addScaledVector(ot,-J.speed*ve),J.keys.KeyD&&m.position.addScaledVector(ot,J.speed*ve),J.keys.KeyQ&&m.position.addScaledVector(at,J.speed*ve),J.keys.KeyZ&&m.position.addScaledVector(at,-J.speed*ve)}p.render(u,m),_e=window.requestAnimationFrame(Ft)}return _e=window.requestAnimationFrame(Ft),()=>{window.cancelAnimationFrame(_e),y.removeEventListener("contextmenu",Qe),y.removeEventListener("mousedown",We),window.removeEventListener("mouseup",Ie),document.removeEventListener("pointerlockchange",nt),window.removeEventListener("mousemove",Mt),y.removeEventListener("wheel",_t),window.removeEventListener("keydown",ut),window.removeEventListener("keyup",qe),Le.disconnect(),ne.dispose(),Q.dispose(),oe.dispose(),H.dispose(),$.dispose(),K.dispose(),se.dispose(),fe.dispose(),Ke.dispose(),ee.dispose(),ae.dispose(),Ae.dispose(),E&&(E.geometry.dispose(),E=null),vt&&(vt.geometry.dispose(),vt=null),Pe&&(Pe.geometry.dispose(),Pe=null);for(const ie of $e.values())ie.geometry.dispose();for(const ie of W.values())ie.geometry.dispose();p.dispose()}},[]),M.jsx("div",{style:{width:"100%",height:"100%",minHeight:400,position:"relative"},children:M.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block",borderRadius:8}})})}function on(t){if(!t)return null;if(typeof t=="object"){if(Array.isArray(t)){if(t.length<3)return null;const r=t[0],s=t[1],o=t[2];return typeof r!="number"||typeof s!="number"||typeof o!="number"?null:{x:r,y:s,z:o}}const e=t.x,n=t.y,i=t.z;return typeof e!="number"||typeof n!="number"||typeof i!="number"?null:{x:e,y:n,z:i}}if(typeof t=="string"){const e=t.trim().split(/\s+/g);if(e.length<3)return null;const n=Number(e[0]),i=Number(e[1]),r=Number(e[2]);return!Number.isFinite(n)||!Number.isFinite(i)||!Number.isFinite(r)?null:{x:n,y:i,z:r}}return null}function $u(t,e=30){return!t||typeof t.x!="number"||typeof t.z!="number"?!0:Math.abs(t.x)<=e&&Math.abs(t.z)<=e}function Yu(t){if(!t)return null;const e=on(t.bbMin),n=on(t.bbMax),i=typeof t.gridW=="number"?t.gridW:0,r=typeof t.gridH=="number"?t.gridH:0,s=Array.isArray(t.heights)?t.heights.filter(o=>typeof o=="number"):[];return e&&n&&i>=2&&r>=2&&s.length>=i*r?{bbMin:e,bbMax:n,gridW:i,gridH:r,heights:s}:null}function qu(t){if(!t)return null;const e=Array.isArray(t.descriptors)?t.descriptors:Array.isArray(t.towns)?t.towns:[];if(e.length===0)return null;const n=[];for(const i of e){if(!i)continue;const r=typeof i.name=="string"?i.name.trim():"",s=typeof i.type=="string"?i.type.trim():"",o=typeof i.baseType=="number"?i.baseType:null,a=r||s||(o!==null?`type:${o}`:"descriptor"),l=on(i.pos);l&&n.push({name:a,pos:l})}return n.length===0?null:n}function dg(t,e,n){if(!t||!t.bbMin||!t.bbMax||!Array.isArray(t.heights))return null;const i=Math.floor(t.gridW),r=Math.floor(t.gridH);if(i<2||r<2||t.heights.length<i*r)return null;const s=t.bbMin.x,o=t.bbMax.x,a=t.bbMin.z,l=t.bbMax.z,c=o-s,f=l-a;if(!Number.isFinite(c)||!Number.isFinite(f)||c<=0||f<=0)return null;const d=(e-s)/c,h=(n-a)/f;if(!Number.isFinite(d)||!Number.isFinite(h)||d<0||d>1||h<0||h>1)return null;const g=d*(i-1),_=h*(r-1),y=Math.floor(g),p=Math.floor(_),u=Math.min(i-1,y+1),m=Math.min(r-1,p+1),v=g-y,S=_-p,P=y+i*p,C=u+i*p,b=y+i*m,G=u+i*m,re=t.heights[P],x=t.heights[C],R=t.heights[b],te=t.heights[G];if(![re,x,R,te].every(ne=>typeof ne=="number"&&Number.isFinite(ne)))return null;const le=re*(1-v)+x*v,k=R*(1-v)+te*v;return le*(1-S)+k*S}function Hb(t){const e=Xi();return F.useMemo(()=>{const i=new URLSearchParams(e.search).get(t);return i||null},[e.search,t])}function hl(t){const e=Number.isFinite(t)?Math.max(0,Math.floor(t)):0,n=Math.floor(e/1e3),i=Math.floor(n/3600),r=Math.floor(n%3600/60),s=n%60,o=String(i).padStart(2,"0"),a=String(r).padStart(2,"0"),l=String(s).padStart(2,"0");return`${o}:${a}:${l}`}function Ku(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function Gb(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function Vb(t,e){if(!Array.isArray(t)||t.length===0)return[];const n=new Map;for(const r of t){const s=e(r).trim();s&&n.set(s,(n.get(s)||0)+1)}const i=Array.from(n.entries()).map(([r,s])=>({name:r,count:s}));return i.sort((r,s)=>s.count-r.count||r.name.localeCompare(s.name)),i}function cc(t){const e=t.payload;return e&&typeof e.tsMs=="number"?e.tsMs:null}function pl(t){const e=t.payload;return`${t.receivedAt}|${e&&e.tsMs}|${e&&e.type}`}function hg(t,e,n){if(!Number.isFinite(e)||e<=0)return[];if(t.length<=e)return t;if(typeof n!="number"||!Number.isFinite(n))return t.slice(t.length-e);const i=cc(t[0]),r=cc(t[t.length-1]);if(typeof i!="number"||typeof r!="number")return t.slice(t.length-e);const s=Math.abs(n-i),o=Math.abs(r-n),a=t.length-e;return s>o?t.slice(a):t.slice(0,t.length-a)}function Wb(){const t=Hb("serverId"),[e,n]=F.useState([]),[i,r]=F.useState(""),[s,o]=F.useState(null),[a,l]=F.useState(null),[c,f]=F.useState(null),[d,h]=F.useState(!1),[g,_]=F.useState(!0),[y,p]=F.useState({minTsMs:null,maxTsMs:null}),[u,m]=F.useState(null),[v,S]=F.useState(null),[P,C]=F.useState(null),[b,G]=F.useState([]),[re,x]=F.useState(""),[R,te]=F.useState(null),[le,k]=F.useState(null),[ne,Q]=F.useState(0),[oe,H]=F.useState(!0),[$,K]=F.useState("players"),[se,fe]=F.useState(!1),[Ke,ee]=F.useState(!0),[ae,Ae]=F.useState(null),[Oe,Xe]=F.useState(null),Fe=F.useRef(new Map),[dt,$e]=F.useState(!1),[W,vt]=F.useState(1),Pe=F.useRef(null),[ze,Ve]=F.useState(!0),[Tt,lt]=F.useState(1),[A,E]=F.useState(!0),[q,de]=F.useState(!0),[ce,J]=F.useState(!0),[ke,be]=F.useState(!0),[Le,et]=F.useState(!0),[st,ue]=F.useState(20),[wt,it]=F.useState([]),Qe=F.useRef(0),[We,Ie]=F.useState(()=>{try{const w=window.localStorage.getItem("replay.eventClickOffsetSeconds"),z=w!==null?Number(w):5;return Number.isFinite(z)?Math.max(0,Math.min(60,Math.floor(z))):5}catch{return 5}}),[nt,Mt]=F.useState(null),[_t,ut]=F.useState(null),[qe,L]=F.useState([]),he=F.useRef(null),_e=F.useRef(!1),De=F.useRef(!1),je=F.useRef(!1),St=F.useRef(new Map);F.useEffect(()=>{t&&t.length>0&&r(t)},[t]),F.useEffect(()=>{Pe.current=u},[u]),F.useEffect(()=>{try{window.localStorage.setItem("replay.eventClickOffsetSeconds",String(We))}catch{}},[We]),F.useEffect(()=>{function w(z){z.code==="KeyF"&&_t!==null&&ut(null)}return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[_t]),F.useEffect(()=>{let w=!1;async function z(){try{const I=await uM();if(w)return;n(I)}catch(I){if(w)return;const D=I instanceof Error?I.message:"Failed to load servers";f(D)}}return z(),()=>{w=!0}},[]),F.useEffect(()=>{let w=!1;async function z(){try{const D=await qf();if(w)return;o(D),l(null)}catch(D){if(w)return;const j=D instanceof Error?D.message:"Failed to load server status";l(j)}}z();const I=window.setInterval(z,15e3);return()=>{w=!0,window.clearInterval(I)}},[]);const Ee=i.length>0?i:null;F.useEffect(()=>{S(null),C(null)},[Ee]),F.useEffect(()=>{if(!Ee)return;const w=Ee;let z=!1;async function I(){h(!0),f(null);try{const[D,j,U,N]=await Promise.all([Lp(w),Np(w),cu(w).catch(()=>null),uu(w).catch(()=>null)]);if(z)return;p({minTsMs:D.minTsMs,maxTsMs:D.maxTsMs}),G(j);const O=Yu(U);O&&S(O);const me=qu(N);if(me&&C(me),typeof D.maxTsMs=="number"){m(D.maxTsMs);const Se=await lu({serverId:w,untilTsMs:D.maxTsMs,limit:5e3,tail:!0}).catch(()=>[]);if(!z){L(Se);let ye=null;for(const we of Se){const Be=we.payload;Be&&typeof Be.tsMs=="number"&&(ye===null||Be.tsMs>ye)&&(ye=Be.tsMs)}he.current=ye!==null?ye:Math.max(0,D.maxTsMs-15e3)}}Qe.current=Date.now(),$e(!1)}catch(D){if(z)return;const j=D instanceof Error?D.message:"Failed to load replay data";f(j)}finally{z||h(!1)}}return I(),()=>{z=!0}},[Ee]),F.useEffect(()=>{if(!Ee||v||De.current||!qe.some(I=>{const D=I.payload;return D&&(D.type==="map"||D.type==="terrain")}))return;let z=!1;return De.current=!0,cu(Ee).then(I=>{if(z)return;const D=Yu(I);D&&S(D)}).catch(()=>{}).finally(()=>{De.current=!1}),()=>{z=!0}},[qe,Ee,v]),F.useEffect(()=>{if(!Ee||P||je.current||!qe.some(I=>{const D=I.payload;return D&&(D.type==="map"||D.type==="terrain"||D.type==="towns"||D.type==="descriptors")}))return;let z=!1;return je.current=!0,uu(Ee).then(I=>{if(z)return;const D=qu(I);D&&C(D)}).catch(()=>{}).finally(()=>{je.current=!1}),()=>{z=!0}},[qe,Ee,P]),F.useEffect(()=>{if(!Ee||g||!dt||typeof y.maxTsMs!="number")return;let w=0,z=performance.now();function I(D){const j=Math.min(250,Math.max(0,D-z));z=D;const U=Pe.current;if(typeof U=="number"){const N=y.maxTsMs;let O=U+j*W;O>=N&&(O=N,$e(!1)),Pe.current=O,m(O)}w=window.requestAnimationFrame(I)}return w=window.requestAnimationFrame(I),()=>window.cancelAnimationFrame(w)},[dt,g,W,y.maxTsMs,Ee]),F.useEffect(()=>{if(!Ee)return;const w=Ee;let z=!1,I=null;async function D(){try{const j=await Np(w);z||G(j)}catch{}z||(I=window.setTimeout(D,g?3e3:5e3))}return D(),()=>{z=!0,I!==null&&window.clearTimeout(I)}},[g,Ee]),F.useEffect(()=>{if(!Ee)return;const w=Ee;let z=!1,I=null;async function D(){try{const j=await Lp(w);if(z)return;const U=he.current;typeof U=="number"&&typeof j.maxTsMs=="number"&&j.maxTsMs+1e3<U&&(he.current=null,Qe.current=Date.now(),L([{receivedAt:Date.now(),payload:{type:"restart",tsMs:j.maxTsMs,event:{reason:"server_restart_or_history_cleared"}}}]),it([]),$e(!1),De.current=!1,cu(w).then(N=>{if(z)return;const O=Yu(N);O&&S(O)}).catch(()=>{}),je.current=!1,uu(w).then(N=>{if(z)return;const O=qu(N);O&&C(O)}).catch(()=>{})),p({minTsMs:j.minTsMs,maxTsMs:j.maxTsMs}),g&&typeof j.maxTsMs=="number"&&m(j.maxTsMs)}catch{}z||(I=window.setTimeout(D,g?2e3:3e3))}return D(),()=>{z=!0,I!==null&&window.clearTimeout(I)}},[g,Ee]),F.useEffect(()=>{if(!Ee)return;const w=Ee;let z=!1,I=null;async function D(){const j=y.maxTsMs;if(typeof j!="number"){z||(I=window.setTimeout(D,1e3));return}const U=he.current,N=typeof U=="number"?U+1:Math.max(0,j-8e3);try{let Se=N;const ye=[];let we=typeof he.current=="number"?he.current:null;for(let Be=0;Be<2;Be++){const ct=await lu({serverId:w,sinceTsMs:Se,untilTsMs:j,limit:1500});ye.push(...ct);let Ze=null;for(const ht of ct){const bt=cc(ht);bt!==null&&((Ze===null||bt>Ze)&&(Ze=bt),(we===null||bt>we)&&(we=bt))}if(ct.length<1500||Ze===null||Ze>=j)break;Se=Ze+1}if(z)return;ye.length>0&&L(Be=>{const ct=Be.slice(-500),Ze=new Set;for(const bt of ct)Ze.add(pl(bt));const ht=Be.slice();for(const bt of ye){const mi=pl(bt);Ze.has(mi)||ht.push(bt)}return hg(ht,25e4,Pe.current)}),typeof we=="number"&&(he.current=we)}catch(O){if(!z){const me=O instanceof Error?O.message:"Failed to fetch replay events";f(me)}}z||(I=window.setTimeout(D,g?1e3:1500))}return D(),()=>{z=!0,I!==null&&window.clearTimeout(I)}},[g,y.maxTsMs,Ee]);const Ft=F.useMemo(()=>{let w=null,z=null;for(const I of qe){const D=I.payload,j=D&&typeof D.tsMs=="number"?D.tsMs:null;j!==null&&((w===null||j<w)&&(w=j),(z===null||j>z)&&(z=j))}return{minTsMs:w,maxTsMs:z}},[qe]);F.useEffect(()=>{if(!Ee)return;const w=Ee,z=u,I=Ft.minTsMs,D=y.minTsMs;if(typeof z!="number"||typeof I!="number"||typeof D!="number"||I<=D+1||z>I+2e3||_e.current)return;_e.current=!0;const U=Math.max(0,Math.floor(I)-1);lu({serverId:w,untilTsMs:U,limit:5e3,tail:!0}).then(N=>{N.length!==0&&L(O=>{const me=O.slice(0,800),Se=new Set;for(const Be of me)Se.add(pl(Be));const ye=[];for(const Be of N){const ct=pl(Be);Se.has(ct)||ye.push(Be)}const we=ye.concat(O);return hg(we,25e4,Pe.current)})}).catch(()=>{}).finally(()=>{_e.current=!1})},[u,Ft.minTsMs,y.minTsMs,Ee]);const ie=F.useMemo(()=>{const w=[];for(const z of qe){const I=z.payload;!I||typeof I!="object"||I.type==="snapshot"&&typeof I.tsMs=="number"&&Array.isArray(I.players)&&w.push({tsMs:I.tsMs,players:I.players})}return w.sort((z,I)=>z.tsMs-I.tsMs),w},[qe]),ve=F.useMemo(()=>{const w=new Map;for(const I of b){if(!I||typeof I.playerId!="number")continue;const D=typeof I.name=="string"&&I.name.trim().length>0?I.name.trim():String(I.playerId);w.set(I.playerId,D)}for(const I of qe){const D=I.payload;if(!D||typeof D!="object"||D.type!=="join"&&D.type!=="disconnect")continue;const j=D.event,U=j&&typeof j.playerId=="number"?j.playerId:null;if(U===null)continue;const N=j&&typeof j.name=="string"&&j.name.trim().length>0?j.name.trim():"";N?w.set(U,N):w.has(U)||w.set(U,String(U))}for(const I of ie)for(const D of I.players){if(!D||typeof D!="object")continue;const j=D.playerId;if(typeof j!="number")continue;const U=typeof D.name=="string"&&D.name.trim().length>0?D.name.trim():"";U?w.set(j,U):w.has(j)||w.set(j,String(j))}const z=Array.from(w.entries()).map(([I,D])=>({playerId:I,name:D}));return z.sort((I,D)=>I.name.localeCompare(D.name)||I.playerId-D.playerId),z},[qe,b,ie]),Me=F.useMemo(()=>{const w=new Map;for(const z of ie){const I=z.tsMs;for(const D of z.players){if(!D||typeof D!="object")continue;const j=D.playerId;if(typeof j!="number")continue;let U=w.get(j);U||(U=[],w.set(j,U)),U.push({tsMs:I,player:D})}}return w},[ie]),pe=F.useMemo(()=>{const w=new Map;for(const z of qe){const I=z.payload;if(!I||typeof I!="object"||I.type!=="join"&&I.type!=="disconnect"||typeof I.tsMs!="number")continue;const D=I.event,j=D&&typeof D.playerId=="number"?D.playerId:null;if(j===null)continue;let U=w.get(j);U||(U=[],w.set(j,U)),U.push({tsMs:I.tsMs,type:I.type})}for(const z of w.values())z.sort((I,D)=>I.tsMs-D.tsMs);return w},[qe]),xe=F.useMemo(()=>(w,z)=>{const I=Me.get(w);if(!I||I.length===0)return null;let D=0,j=I.length-1,U=-1;for(;D<=j;){const N=D+j>>1;I[N].tsMs<=z?(U=N,D=N+1):j=N-1}return U<0?null:I[U]},[Me]),Ge=F.useMemo(()=>(w,z,I)=>{const D=Me.get(w);if(!D||D.length===0)return null;let j=0,U=D.length-1,N=-1;for(;j<=U;){const O=j+U>>1;D[O].tsMs<=z?(N=O,j=O+1):U=O-1}if(N<0)return null;for(let O=N;O>=0;O--){const me=D[O],Se=z-me.tsMs;if(Se<0)continue;if(Se>I)break;const ye=me.player;if(!ye||typeof ye!="object")continue;const we=ye.inventory,Be=ye.attachments,ct=ye.weapon,Ze={tsMs:me.tsMs};if(Array.isArray(we)&&(Ze.inventory=we),Array.isArray(Be)&&(Ze.attachments=Be),ct&&typeof ct=="object"&&typeof ct.name=="string"&&ct.name.length>0&&(Ze.weapon=ct),"inventory"in Ze||"attachments"in Ze||"weapon"in Ze)return Ze}return null},[Me]),Ye=F.useMemo(()=>(w,z)=>{const I=pe.get(w);if(!I||I.length===0)return null;let D=0,j=I.length-1,U=-1;for(;D<=j;){const N=D+j>>1;I[N].tsMs<=z?(U=N,D=N+1):j=N-1}return U<0?null:I[U].type==="join"},[pe]),ot=F.useMemo(()=>(w,z,I=6e4)=>{if(typeof w!="number"||w<0||typeof z!="number"||!Number.isFinite(z)||ie.length===0)return null;const D=z+Math.max(1e3,Math.min(5*60*1e3,Math.floor(I)));let j=0,U=ie.length-1,N=ie.length;for(;j<=U;){const O=j+U>>1;ie[O].tsMs>=z?(N=O,U=O-1):j=O+1}for(let O=N;O<ie.length;O++){const me=ie[O];if(me.tsMs>D)break;const Se=me.players.find(we=>we&&typeof we=="object"&&we.playerId===w);if(!Se)continue;const ye=on(Se.pos);if(ye&&!$u(ye,30))return ye}return null},[ie]),at=F.useMemo(()=>(w,z,I=6e4)=>{if(typeof w!="number"||w<0||typeof z!="number"||!Number.isFinite(z)||ie.length===0)return null;const D=z-Math.max(1e3,Math.min(5*60*1e3,Math.floor(I)));let j=0,U=ie.length-1,N=-1;for(;j<=U;){const O=j+U>>1;ie[O].tsMs<=z?(N=O,j=O+1):U=O-1}for(let O=N;O>=0;O--){const me=ie[O];if(me.tsMs<D)break;const Se=me.players.find(we=>we&&typeof we=="object"&&we.playerId===w);if(!Se)continue;const ye=on(Se.pos);if(ye&&!$u(ye,30))return ye}return null},[ie]),At=F.useMemo(()=>{const w=new Map;for(const z of qe){const I=z.payload;if(!I||typeof I!="object"||I.type!=="kill"&&I.type!=="death"||typeof I.tsMs!="number")continue;const D=I.event,j=D&&typeof D.victimPlayerId=="number"?D.victimPlayerId:null;if(j===null)continue;const U=I.tsMs+3e4,N=w.get(j)||0;U>N&&w.set(j,U)}return w},[qe]),yt=F.useMemo(()=>({enabled:ze,scale:Math.min(2,Math.max(.5,Tt)),background:A}),[A,Tt,ze]),Gt=F.useMemo(()=>{const w=u;if(typeof w!="number")return[];if(Me.size===0)return[];const z=new Map;for(const j of ve)z.set(j.playerId,j.name);const I=3e4,D=[];for(const j of ve){const U=j.playerId,N=xe(U,w);if(!N)continue;const O=Ye(U,w);if(O===!1||O===null&&w-N.tsMs>I)continue;const me=N.player,Se=on(me.pos);if(!Se)continue;const ye=!!me.inVehicle,we=dg(v,Se.x,Se.z),ct=!ye&&typeof we=="number"&&Number.isFinite(we)&&typeof Se.y=="number"&&Number.isFinite(Se.y)&&Math.abs(Se.y-we)<=3.5?{...Se,y:we+.35}:Se,Ze=on(me.aimDir),ht=me.vehicle&&typeof me.vehicle.name=="string"?String(me.vehicle.name):"",bt=N.tsMs,mi=At.get(U)||0,ss=typeof bt=="number"?mi>bt:!1;let go=z.get(U)||String(U);q&&ye&&ht&&(go=`${go} (${ht})`),D.push({playerId:U,label:go,pos:ct,aimDir:Ze,inVehicle:ye,isDead:ss})}return D},[u,At,xe,Ye,ve,Me,q,v]),Ot=F.useMemo(()=>{if(!Le||R===null||typeof u!="number"||ie.length===0)return null;const w=Math.max(5e3,Math.min(6e4,Math.floor(st*1e3))),z=u-w,I=[];let D=null;for(const U of ie){if(U.tsMs<z)continue;if(U.tsMs>u)break;const N=U.players.find(ct=>ct&&typeof ct=="object"&&ct.playerId===R);if(!N)continue;const O=!!N.inVehicle,me=N.entityId,Se=typeof me=="string"&&me.length>0?me:null;Se&&D&&Se!==D&&(I.length=0),Se&&(D=Se);const ye=on(N.pos);if(!ye||$u(ye,30))continue;const we=dg(v,ye.x,ye.z),Be=!O&&typeof we=="number"&&Number.isFinite(we)&&typeof ye.y=="number"&&Number.isFinite(ye.y)&&Math.abs(ye.y-we)<=3.5;I.push(Be?{...ye,y:we}:ye)}if(I.length<2)return null;const j=200;if(I.length>j){const U=Math.ceil(I.length/j),N=[];for(let O=0;O<I.length;O+=U)N.push(I[O]);return{points:N}}return{points:I}},[u,Le,R,ie,v,st]),pn=F.useMemo(()=>{if(!ke)return[];const w=u;if(typeof w!="number")return[];const z=[];for(const I of qe){const D=I.payload;if(!D||typeof D!="object"||D.type!=="kill"&&D.type!=="death"||typeof D.tsMs!="number"||w<D.tsMs||w>D.tsMs+3e3)continue;const j=D.event,U=j?on(j.victimPos):null;if(U&&(z.push(U),z.length>=40))break}return z},[u,qe,ke]),T=F.useMemo(()=>{const w=y.minTsMs,z=y.maxTsMs,I=u;return typeof w!="number"||typeof z!="number"||typeof I!="number"?{min:0,max:100,value:0,disabled:!0}:z<=w?{min:w,max:w+1,value:w,disabled:!1}:{min:w,max:z,value:Math.min(Math.max(I,w),z),disabled:!1}},[u,y.maxTsMs,y.minTsMs]),B=F.useMemo(()=>{let w=-1/0,z=0;for(const I of qe){if(!I||typeof I.receivedAt!="number")continue;const D=cc(I);D!==null&&D>w&&(w=D,z=I.receivedAt)}return!Number.isFinite(w)||w<0||!Number.isFinite(z)||z<=0?null:{tsMs:w,receivedAt:z}},[qe]),X=F.useMemo(()=>{if(!B)return null;const w=B;return z=>{const I=w.receivedAt+(z-w.tsMs);return Number.isFinite(I)?new Date(I).toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}):""}},[B]),Z=F.useMemo(()=>{if(_t===null)return null;const w=ve.find(z=>z.playerId===_t);return w?w.name:String(_t)},[_t,ve]),Y=F.useMemo(()=>{const w=u;if(typeof w!="number"||!Number.isFinite(w))return[];const z=3e4,I=[];for(const D of ve){const j=D.playerId,U=Ye(j,w);if(U===!0){I.push(D);continue}if(U===!1)continue;const N=xe(j,w);N&&w-N.tsMs<=z&&I.push(D)}return I.sort((D,j)=>D.name.localeCompare(j.name)||D.playerId-j.playerId),I},[u,xe,Ye,ve]);function Ce(w){const z=Math.max(0,Math.floor(We*1e3)),I=T.disabled?0:T.min,D=T.disabled?w:T.max,j=Math.min(D,Math.max(I,w-z));m(j)}const He=F.useMemo(()=>{const w=re.trim().toLowerCase(),z=Array.isArray(Y)?Y:[];return w?z.filter(I=>(I.name||"").toLowerCase().includes(w)||String(I.playerId).includes(w)):z},[re,Y]),Ne=F.useMemo(()=>{if(R===null)return null;const w=u;if(typeof w!="number")return null;const z=xe(R,w);return z?{snapTsMs:z.tsMs,player:z.player}:null},[u,xe,R]),Re=F.useMemo(()=>{const w=u;if(typeof w!="number")return Ne;const z=Ne;if(!z||!z.player||typeof z.player!="object")return z;const I=z.player,D=z.snapTsMs,j=typeof I.playerId=="number"?I.playerId:null;if(j===null)return z;const U=5*6e4,N=St.current.get(j)||{invTsMs:-1,hotbarTsMs:-1,weaponTsMs:-1},O=I.inventory;Array.isArray(O)&&(N.inventory=O,N.invTsMs=D);const me=I.attachments;Array.isArray(me)&&(N.attachments=me,N.hotbarTsMs=D);const Se=I.weapon;Se&&typeof Se=="object"&&typeof Se.name=="string"&&Se.name.length>0&&(N.weapon=Se,N.weaponTsMs=D),St.current.set(j,N);const ye=!Array.isArray(O),we=!Array.isArray(me),Be=!Se||!Se.name,Ze=ye||we||Be?Ge(j,w,U):null;Ze&&Ze.inventory&&(!("inventory"in N)||N.invTsMs>w||w-N.invTsMs>U)&&(N.inventory=Ze.inventory,N.invTsMs=Ze.tsMs),Ze&&Ze.attachments&&(!("attachments"in N)||N.hotbarTsMs>w||w-N.hotbarTsMs>U)&&(N.attachments=Ze.attachments,N.hotbarTsMs=Ze.tsMs),Ze&&Ze.weapon&&(!N.weapon||N.weaponTsMs>w||w-N.weaponTsMs>U)&&(N.weapon=Ze.weapon,N.weaponTsMs=Ze.tsMs);const ht=w-N.invTsMs,bt=w-N.hotbarTsMs,mi=w-N.weaponTsMs,ss="inventory"in N&&N.invTsMs<=w&&ht>=0&&ht<=U&&ye,go="attachments"in N&&N.hotbarTsMs<=w&&bt>=0&&bt<=U&&we,S_=!!N.weapon&&N.weaponTsMs<=w&&mi>=0&&mi<=U&&Be;return{...I,inventory:ss?N.inventory:O,attachments:go?N.attachments:me,weapon:S_?N.weapon:Se,__snapTsMs:D}},[u,Ge,Ne]),rt=F.useMemo(()=>{const w=[];for(const j of qe){const U=j.payload;if(!U||typeof U!="object"||typeof U.tsMs!="number"||U.type==="snapshot"||U.type!=="kill"&&U.type!=="death"&&U.type!=="aiKill"&&U.type!=="join"&&U.type!=="disconnect"&&U.type!=="restart"&&U.type!=="gmPing")continue;const N=U.event;if(U.type==="kill"){const O=N&&typeof N.killerName=="string"?N.killerName:"Unknown",me=N&&typeof N.victimName=="string"?N.victimName:"Unknown",Se=N&&typeof N.weaponName=="string"?N.weaponName:"",ye=N&&typeof N.distanceM=="number"?N.distanceM:null,we=typeof ye=="number"&&Number.isFinite(ye)?`${Math.round(ye)}m`:"",Be=N?on(N.victimPos):null,ct=N&&typeof N.victimPlayerId=="number"?N.victimPlayerId:null,Ze=N&&typeof N.killerPlayerId=="number"?N.killerPlayerId:null,ht=[];Se&&ht.push(Se),we&&ht.push(we),w.push({tsMs:U.tsMs,type:"kill",title:`${O} → ${me}`,subtitle:ht.join(" • "),focusPos:Be,focusPlayerId:ct,playerIds:[Ze,ct].filter(bt=>typeof bt=="number")})}else if(U.type==="death"){const O=N&&typeof N.victimPlayerId=="number"?N.victimPlayerId:null,me=N&&typeof N.killerPlayerId=="number"?N.killerPlayerId:null;if(O!==null&&me!==null&&me>=0&&me!==O)continue;const Se=N&&typeof N.victimName=="string"?N.victimName:"Unknown",ye=N&&typeof N.weaponName=="string"?N.weaponName:"",we=N&&typeof N.distanceM=="number"?N.distanceM:null,Be=typeof we=="number"&&Number.isFinite(we)?`${Math.round(we)}m`:"",ct=N?on(N.victimPos):null,Ze=[];ye&&Ze.push(ye),Be&&Ze.push(Be),w.push({tsMs:U.tsMs,type:"death",title:`${Se} died`,subtitle:Ze.join(" • "),focusPos:ct,focusPlayerId:O,playerIds:[O].filter(ht=>typeof ht=="number")})}else if(U.type==="aiKill"){const O=N&&typeof N.killerName=="string"?N.killerName:"Unknown",me=N&&typeof N.victimName=="string"?N.victimName:"Unknown",Se=N&&typeof N.weaponName=="string"?N.weaponName:"",ye=N&&typeof N.distanceM=="number"?N.distanceM:null,we=typeof ye=="number"&&Number.isFinite(ye)?`${Math.round(ye)}m`:"",Be=N?on(N.victimPos):null,ct=N&&typeof N.killerPlayerId=="number"?N.killerPlayerId:null,Ze=[];Se&&Ze.push(Se),we&&Ze.push(we),w.push({tsMs:U.tsMs,type:"aiKill",title:`${O} → AI: ${me}`,subtitle:Ze.join(" • "),focusPos:Be,focusPlayerId:ct,playerIds:[ct].filter(ht=>typeof ht=="number")})}else if(U.type==="gmPing"){const O=N&&typeof N.by=="string"&&N.by.length>0?N.by:"",me=N&&typeof N.title=="string"&&N.title.length>0?N.title:"event",Se=N?on(N.pos):null,ye=O?`(${O} sent a GM ping to ${me})`:`GM ping to ${me}`;w.push({tsMs:U.tsMs,type:"gmPing",title:ye,subtitle:"",focusPos:Se,focusPlayerId:null,playerIds:[]})}else{if(U.type==="restart"){w.push({tsMs:U.tsMs,type:"restart",title:"Server restarted",subtitle:"restart / history cleared",focusPos:null,focusPlayerId:null,playerIds:[]});continue}const O=N&&typeof N.name=="string"?N.name:String(N&&N.playerId?N.playerId:"player"),me=N&&typeof N.playerId=="number"?N.playerId:null,Se=U.type==="join"&&typeof me=="number"?ot(me,U.tsMs,9e4):null,ye=U.type==="disconnect"&&typeof me=="number"?at(me,U.tsMs,9e4):null;w.push({tsMs:U.tsMs,type:String(U.type),title:`${U.type==="join"?"Join":"Disconnect"}: ${O}`,subtitle:U.type==="disconnect"&&N&&typeof N.kickCause=="string"&&N.kickCause?`cause: ${N.kickCause}`:"",focusPos:Se||ye,focusPlayerId:me,playerIds:[me].filter(we=>typeof we=="number")})}}w.sort((j,U)=>j.tsMs-U.tsMs);const z=u,I=nt;let D=w;return typeof z=="number"&&(D=D.filter(j=>j.tsMs<=z)),typeof I=="number"&&(D=D.filter(j=>j.playerIds.includes(I))),D.slice(-200)},[u,nt,qe,ot]);F.useEffect(()=>{if(!Oe)return;const w=window.setTimeout(()=>{const z=Fe.current.get(Oe);z&&z.scrollIntoView({block:"nearest",behavior:"smooth"})},0);return()=>window.clearTimeout(w)},[Oe,$]);const Je=F.useMemo(()=>{const w=y.minTsMs,z=y.maxTsMs;if(typeof w!="number"||typeof z!="number")return[];let I=[];for(const U of qe){const N=U.payload;if(!N||typeof N!="object"||N.type!=="kill"&&N.type!=="death"&&N.type!=="aiKill"&&N.type!=="join"&&N.type!=="disconnect"&&N.type!=="restart"&&N.type!=="gmPing"||typeof N.tsMs!="number"||N.tsMs<w||N.tsMs>z)continue;const O=N.event;if(N.type==="kill"){const me=O&&typeof O.killerName=="string"?O.killerName:"Unknown",Se=O&&typeof O.victimName=="string"?O.victimName:"Unknown",ye=O&&typeof O.weaponName=="string"?O.weaponName:"",we=O&&typeof O.distanceM=="number"?O.distanceM:null,Be=typeof we=="number"&&Number.isFinite(we)?`${Math.round(we)}m`:"",ct=O?on(O.victimPos):null,Ze=O&&typeof O.victimPlayerId=="number"?O.victimPlayerId:null,ht=O&&typeof O.killerPlayerId=="number"?O.killerPlayerId:null,bt=[];ye&&bt.push(ye),Be&&bt.push(Be),I.push({tsMs:N.tsMs,type:"kill",title:`${me} → ${Se}`,subtitle:bt.join(" • "),focusPos:ct,focusPlayerId:Ze,playerIds:[ht,Ze].filter(mi=>typeof mi=="number")})}else if(N.type==="death"){const me=O&&typeof O.victimPlayerId=="number"?O.victimPlayerId:null,Se=O&&typeof O.killerPlayerId=="number"?O.killerPlayerId:null;if(me!==null&&Se!==null&&Se>=0&&Se!==me)continue;const ye=O&&typeof O.victimName=="string"?O.victimName:"Unknown",we=O&&typeof O.weaponName=="string"?O.weaponName:"",Be=O&&typeof O.distanceM=="number"?O.distanceM:null,ct=typeof Be=="number"&&Number.isFinite(Be)?`${Math.round(Be)}m`:"",Ze=O?on(O.victimPos):null,ht=[];we&&ht.push(we),ct&&ht.push(ct),I.push({tsMs:N.tsMs,type:"death",title:`${ye} died`,subtitle:ht.join(" • "),focusPos:Ze,focusPlayerId:me,playerIds:[me].filter(bt=>typeof bt=="number")})}else if(N.type==="aiKill"){const me=O&&typeof O.killerName=="string"?O.killerName:"Unknown",Se=O&&typeof O.victimName=="string"?O.victimName:"Unknown",ye=O&&typeof O.weaponName=="string"?O.weaponName:"",we=O&&typeof O.distanceM=="number"?O.distanceM:null,Be=typeof we=="number"&&Number.isFinite(we)?`${Math.round(we)}m`:"",ct=O?on(O.victimPos):null,Ze=O&&typeof O.killerPlayerId=="number"?O.killerPlayerId:null,ht=[];ye&&ht.push(ye),Be&&ht.push(Be),I.push({tsMs:N.tsMs,type:"aiKill",title:`${me} → AI: ${Se}`,subtitle:ht.join(" • "),focusPos:ct,focusPlayerId:Ze,playerIds:[Ze].filter(bt=>typeof bt=="number")})}else if(N.type==="gmPing"){const me=O&&typeof O.by=="string"&&O.by.length>0?O.by:"",Se=O&&typeof O.title=="string"&&O.title.length>0?O.title:"event",ye=O?on(O.pos):null,we=me?`(${me} sent a GM ping to ${Se})`:`GM ping to ${Se}`;I.push({tsMs:N.tsMs,type:"gmPing",title:we,subtitle:"",focusPos:ye,focusPlayerId:null,playerIds:[]})}else if(N.type==="restart"){const me=O&&typeof O.reason=="string"?O.reason:"",Se=me==="session_start"?"server restart":me==="server_restart_or_history_cleared"?"restart / history cleared":me||"restart";I.push({tsMs:N.tsMs,type:"restart",title:"Server restarted",subtitle:Se,focusPos:null,focusPlayerId:null,playerIds:[]})}else{const me=O&&typeof O.name=="string"?O.name:String(O&&O.playerId?O.playerId:"player"),Se=O&&typeof O.playerId=="number"?O.playerId:null,ye=N.type==="join"&&typeof Se=="number"?ot(Se,N.tsMs,9e4):null;I.push({tsMs:N.tsMs,type:N.type,title:`${N.type==="join"?"Join":"Disconnect"}: ${me}`,subtitle:N.type==="disconnect"&&O&&typeof O.kickCause=="string"&&O.kickCause?`cause: ${O.kickCause}`:"",focusPos:ye,focusPlayerId:Se,playerIds:[Se].filter(we=>typeof we=="number")})}}I.sort((U,N)=>U.tsMs-N.tsMs);const D=nt;typeof D=="number"&&(I=I.filter(U=>U.playerIds.includes(D)));const j=420;if(I.length>j){const U=Math.ceil(I.length/j),N=[];for(let O=0;O<I.length;O+=U)N.push(I[O]);return N}return I},[nt,qe,ot,y.maxTsMs,y.minTsMs]);function tt(w){const z=`${Date.now()}-${Math.random().toString(16).slice(2)}`;it(I=>[{id:z,...w,visible:!1},...I].slice(0,5)),window.setTimeout(()=>{it(I=>I.map(D=>D.id===z?{...D,visible:!0}:D))},10),window.setTimeout(()=>{it(I=>I.map(D=>D.id===z?{...D,visible:!1}:D))},4500),window.setTimeout(()=>{it(I=>I.filter(D=>D.id!==z))},5200)}return F.useEffect(()=>{if(!g||qe.length===0)return;const w=Qe.current;let z=w;const I=[];for(const D of qe)!D||typeof D.receivedAt!="number"||D.receivedAt<=w||(D.receivedAt>z&&(z=D.receivedAt),I.push({receivedAt:D.receivedAt,payload:D.payload}));I.sort((D,j)=>D.receivedAt-j.receivedAt);for(const D of I){const j=D.payload;if(!(!j||typeof j!="object")&&j.type!=="snapshot"){if(j.type==="gmPing"){const U=j.event,N=U&&typeof U.by=="string"&&U.by.length>0?U.by:"",O=U&&typeof U.title=="string"&&U.title.length>0?U.title:"Ping";tt({kind:"event",title:"GM ping",subtitle:N?`${N} • ${O}`:O});continue}if(j.type==="kill"){const U=j.event,N=U&&typeof U.killerName=="string"?U.killerName:"Unknown",O=U&&typeof U.victimName=="string"?U.victimName:"Unknown",me=U&&typeof U.weaponName=="string"&&U.weaponName.length>0?U.weaponName:"",Se=U&&typeof U.distanceM=="number"?U.distanceM:null,ye=typeof Se=="number"&&Number.isFinite(Se)?`${Math.round(Se)}m`:"",we=[];me&&we.push(me),ye&&we.push(ye),tt({kind:"kill",title:`${N} → ${O}`,subtitle:we.length>0?we.join(" • "):"Kill"})}else if(j.type==="death"){const U=j.event,N=U&&typeof U.victimPlayerId=="number"?U.victimPlayerId:null,O=U&&typeof U.killerPlayerId=="number"?U.killerPlayerId:null;if(N!==null&&O!==null&&O>=0&&O!==N)continue;const me=U&&typeof U.victimName=="string"?U.victimName:"Unknown",Se=U&&typeof U.weaponName=="string"&&U.weaponName.length>0?U.weaponName:"",ye=U&&typeof U.distanceM=="number"?U.distanceM:null,we=typeof ye=="number"&&Number.isFinite(ye)?`${Math.round(ye)}m`:"",Be=[];Se&&Be.push(Se),we&&Be.push(we),tt({kind:"event",title:`${me} died`,subtitle:Be.length>0?Be.join(" • "):"Death"})}else if(j.type==="aiKill"){const U=j.event,N=U&&typeof U.killerName=="string"?U.killerName:"Unknown",O=U&&typeof U.victimName=="string"?U.victimName:"Unknown",me=U&&typeof U.weaponName=="string"&&U.weaponName.length>0?U.weaponName:"",Se=U&&typeof U.distanceM=="number"?U.distanceM:null,ye=typeof Se=="number"&&Number.isFinite(Se)?`${Math.round(Se)}m`:"",we=[];me&&we.push(me),ye&&we.push(ye),tt({kind:"kill",title:`${N} → AI: ${O}`,subtitle:we.length>0?we.join(" • "):"AI kill"})}}}z>w&&(Qe.current=z)},[qe,g]),M.jsxs("div",{style:{width:"100vw",height:"100vh",overflow:"hidden"},children:[M.jsxs("div",{className:"row",style:{gap:12,padding:12,alignItems:"center"},children:[M.jsxs("div",{style:{minWidth:240,maxWidth:520,flex:1},children:[M.jsxs("select",{className:"input",value:i,onChange:w=>{r(w.target.value),G([]),te(null),k(null),L([]),p({minTsMs:null,maxTsMs:null}),m(null),he.current=null,Qe.current=0,it([])},children:[M.jsx("option",{value:"",children:"Select a server…"}),e.map(w=>M.jsxs("option",{value:w.id,children:[w.name," (",w.id,")"]},w.id))]}),e.length===0?M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"No servers returned yet."}):null]}),Ee?null:M.jsx("button",{className:"button",onClick:()=>{l(null),qf().then(w=>o(w)).catch(w=>{const z=w instanceof Error?w.message:"Failed to load server status";l(z)})},children:"Refresh overview"}),d?M.jsx("div",{className:"muted",style:{fontSize:12},children:"Loading…"}):null,c?M.jsx("div",{className:"error",style:{flex:1},children:c}):null]}),Ee?M.jsx("div",{style:{position:"relative",width:"100%",height:"calc(100vh - 72px)",padding:12,boxSizing:"border-box"},children:M.jsx("div",{className:"card",style:{width:"100%",height:"100%",padding:0,overflow:"hidden"},children:M.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[M.jsx(Bb,{players:Gt,focusTarget:le,focusNonce:ne,followPlayerId:_t,nameTags:yt,showAimLines:ce,trail:Ot,deathMarkers:pn,terrain:v,towns:P||void 0}),_t!==null&&Z?M.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:132,display:"flex",justifyContent:"center",pointerEvents:"none"},children:M.jsx("div",{className:"card",style:{padding:"8px 12px",background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)"},children:M.jsxs("div",{style:{fontWeight:800,fontSize:12},children:["Attached to ",Z,", press F to unattach"]})})}):null,M.jsx("div",{style:{position:"absolute",top:12,right:12,width:340,display:"flex",flexDirection:"column",gap:8,pointerEvents:"none"},children:wt.map(w=>M.jsxs("div",{style:{pointerEvents:"none",padding:"10px 12px",borderRadius:10,background:"rgba(0,0,0,0.55)",border:"1px solid rgba(255,255,255,0.14)",opacity:w.visible?1:0,transform:w.visible?"translateY(0px)":"translateY(-6px)",transition:"opacity 250ms ease, transform 250ms ease"},children:[M.jsx("div",{style:{fontWeight:700,fontSize:13},children:w.title}),w.subtitle?M.jsx("div",{className:"muted",style:{fontSize:12},children:w.subtitle}):null]},w.id))}),M.jsx("div",{style:{position:"absolute",top:12,left:12,width:oe?360:"auto"},children:M.jsxs("div",{className:"card",style:{padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"nowrap"},children:[M.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:$==="players"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:$==="players"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>K("players"),children:"Players"}),M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px",background:$==="events"?"rgba(249,188,89,0.22)":"rgba(255,255,255,0.10)",borderColor:$==="events"?"rgba(249,188,89,0.40)":"rgba(255,255,255,0.14)"},onClick:()=>K("events"),children:"Events"})]}),M.jsxs("div",{className:"row",style:{gap:8,flexWrap:"nowrap"},children:[$==="players"?M.jsx("button",{type:"button",className:"button",title:"Nametag options",style:{padding:"6px 10px"},onClick:()=>fe(w=>!w),children:"⚙"}):null,M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>H(w=>!w),children:oe?"−":"+"})]})]}),oe?M.jsxs("div",{className:"stack",style:{marginTop:10},children:[$==="players"?M.jsxs(M.Fragment,{children:[se?M.jsxs("div",{style:{border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:[M.jsx("div",{className:"label",style:{marginBottom:8},children:"Nametags"}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:ze,onChange:w=>Ve(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Show nametags"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:A,onChange:w=>E(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Background"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:q,onChange:w=>de(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Include vehicle in label"})]}),M.jsx("div",{className:"label",style:{marginBottom:6},children:"Nametag size"}),M.jsx("input",{style:{width:"100%"},type:"range",min:.6,max:1.6,step:.1,value:Tt,onChange:w=>lt(Number(w.target.value))}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:[Tt.toFixed(1),"×"]}),M.jsx("div",{style:{height:8}}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:ce,onChange:w=>J(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Aim direction line"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:ke,onChange:w=>be(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Death markers"})]}),M.jsxs("label",{className:"row",style:{gap:8,marginBottom:8},children:[M.jsx("input",{type:"checkbox",checked:Le,onChange:w=>et(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Trails (focused player)"})]}),Le?M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"label",style:{marginBottom:6},children:"Trail window (seconds)"}),M.jsx("input",{style:{width:"100%"},type:"range",min:5,max:60,step:5,value:st,onChange:w=>ue(Number(w.target.value))}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:[st,"s"]})]}):null]}):null,M.jsx("input",{className:"input",placeholder:"Search players…",value:re,onChange:w=>x(w.target.value)})]}):null,$==="players"?M.jsx("div",{className:"scroll",style:{maxHeight:240,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:He.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No players."}):He.map(w=>{const z=R===w.playerId;return M.jsxs("button",{type:"button",onClick:()=>{K("players"),te(w.playerId),ut(w.playerId);const I=Gt.find(D=>D.playerId===w.playerId);I&&(k(I.pos),Q(D=>D+1))},className:"button",style:{width:"100%",textAlign:"left",borderRadius:0,border:"none",borderBottom:"1px solid rgba(255,255,255,0.06)",background:z?"rgba(255,255,255,0.08)":"transparent",padding:"8px 10px"},children:[M.jsx("div",{style:{fontWeight:700,fontSize:13},children:w.name}),M.jsxs("div",{className:"muted",style:{fontSize:11},children:["#",w.playerId]})]},w.playerId)})}):M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between",gap:10},children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Event click offset"}),M.jsxs("div",{className:"row",style:{gap:8},children:[M.jsx("input",{className:"input",style:{width:90,padding:"6px 10px"},type:"number",min:0,max:60,step:1,value:We,onChange:w=>Ie(Math.max(0,Math.min(60,Math.floor(Number(w.target.value)||0)))),title:"Jump this many seconds before an event"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"sec"})]})]}),M.jsx("div",{className:"scroll",style:{maxWidth:340,overflowX:"auto",overflowY:"hidden",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:10},children:rt.length===0?M.jsx("div",{className:"muted",style:{fontSize:12},children:"No events in buffer yet."}):M.jsx("div",{style:{display:"flex",gap:10},children:rt.slice().reverse().map((w,z)=>{const I=`${w.tsMs}|${w.type}|${w.title}|${w.subtitle||""}`,D=Oe===I,j=!!Ee&&w.type!=="gmPing"&&!!w.focusPos,U=w.subtitle?`${w.title} • ${w.subtitle}`:w.title;return M.jsxs("div",{ref:N=>{N?Fe.current.set(I,N):Fe.current.delete(I)},className:"button",style:{minWidth:220,textAlign:"left",borderRadius:10,border:D?"1px solid rgba(255,255,255,0.35)":"1px solid rgba(255,255,255,0.10)",background:D?"rgba(255,255,255,0.10)":"rgba(255,255,255,0.06)",padding:"8px 10px",position:"relative"},role:"button",tabIndex:0,onClick:()=>{Xe(I),$e(!1),_(!1),Ce(w.tsMs),typeof w.focusPlayerId=="number"&&te(w.focusPlayerId),w.focusPos&&(k(w.focusPos),Q(N=>N+1))},onKeyDown:N=>{N.key!=="Enter"&&N.key!==" "||(N.preventDefault(),Xe(I),$e(!1),_(!1),Ce(w.tsMs),typeof w.focusPlayerId=="number"&&te(w.focusPlayerId),w.focusPos&&(k(w.focusPos),Q(O=>O+1)))},children:[M.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:8,right:8,padding:"4px 8px",fontSize:11,opacity:j?1:.4},title:j?"Send GM ping to this event location":"No position for this event",disabled:!j,onClick:N=>{if(N.stopPropagation(),!Ee)return;const O=w.focusPos;if(!O)return;const me=typeof w.focusPlayerId=="number"?w.focusPlayerId:Array.isArray(w.playerIds)&&w.playerIds.length>0?w.playerIds[0]:null;fM({serverId:Ee,tsMs:w.tsMs,pos:O,title:U,reporterPlayerId:me})},children:"GM ping"}),M.jsx("button",{type:"button",className:"button",style:{position:"absolute",top:34,right:8,padding:"4px 8px",fontSize:11,opacity:j?1:.4},title:j?"Export 5s before/after as a GIF to Discord":"No position for this event",disabled:!j,onClick:N=>{if(N.stopPropagation(),!Ee)return;const O=w.focusPos;O&&(async()=>{try{await SM({serverId:Ee,tsMs:w.tsMs,title:w.title,pos:O,focusPlayerId:typeof w.focusPlayerId=="number"?w.focusPlayerId:null,playerIds:Array.isArray(w.playerIds)?w.playerIds:null}),tt({kind:"event",title:"Discord export",subtitle:"Sent"})}catch(me){f(me instanceof Error?me.message:"Failed to export to Discord")}})()},children:"Export"}),M.jsx("div",{style:{fontWeight:800,fontSize:12},children:w.title}),M.jsxs("div",{className:"muted",style:{fontSize:11,marginTop:2},children:["+",hl(w.tsMs-T.min),X?` • ${X(w.tsMs)}`:"",w.subtitle?` • ${w.subtitle}`:""]})]},`${w.tsMs}-${z}`)})})})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Selected"}),R===null?M.jsx("div",{className:"muted",style:{fontSize:12},children:"Click a player to view equipment."}):Re?M.jsxs("div",{style:{fontSize:12},children:[M.jsxs("div",{className:"muted",style:{marginBottom:6},children:["pos: ",JSON.stringify(Re.pos)]}),M.jsxs("details",{open:!0,children:[M.jsx("summary",{style:{cursor:"pointer",fontWeight:700},children:"Weapon"}),M.jsx("div",{className:"muted",style:{marginTop:6},children:Re.weapon&&Re.weapon.name?Re.weapon.name:"None"})]}),M.jsx("div",{style:{height:6}}),M.jsxs("details",{children:[M.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Inventory (",Array.isArray(Re.inventory)?Re.inventory.length:0,")"]}),M.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:(()=>{const w=Vb(Re.inventory,z=>z&&z.name?String(z.name):"Item");return w.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No inventory data in this snapshot."}):w.slice(0,80).map((z,I)=>M.jsx("div",{style:{padding:"7px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{style:{fontSize:12},children:[z.name,z.count>1?` ×${z.count}`:""]})},I))})()})]}),M.jsx("div",{style:{height:6}}),M.jsxs("details",{children:[M.jsxs("summary",{style:{cursor:"pointer",fontWeight:700},children:["Hotbar (",Array.isArray(Re.attachments)?Re.attachments.length:0,")"]}),M.jsx("div",{className:"scroll",style:{marginTop:6,maxHeight:170,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:Array.isArray(Re.attachments)&&Re.attachments.length>0?Re.attachments.map((w,z)=>M.jsx("div",{style:{padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{style:{fontSize:12},children:[w&&w.slot?M.jsxs("span",{className:"muted",style:{fontSize:11},children:[String(w.slot),":"]}):null," ",w&&w.name?String(w.name):"Item"]})},z)):M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No attachments data in this snapshot."})})]}),M.jsx("div",{style:{height:8}}),M.jsxs("div",{children:[M.jsx("div",{className:"muted",style:{fontSize:12,marginBottom:6},children:"Filter events by player"}),M.jsxs("select",{className:"input",style:{width:"100%",padding:"6px 10px"},value:nt===null?"":String(nt),onChange:w=>{const z=String(w.target.value||"");if(!z){Mt(null);return}const I=Number(z);Mt(Number.isFinite(I)?I:null)},title:"Filter events by player",children:[M.jsx("option",{value:"",children:"All players"}),Y.map(w=>M.jsxs("option",{value:String(w.playerId),children:[w.name," (#",w.playerId,")"]},w.playerId))]})]})]}):M.jsx("div",{className:"muted",style:{fontSize:12},children:"No snapshot data for this player at the current time."})]})]}):null]})}),M.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:12,display:"flex",justifyContent:"center"},children:M.jsxs("div",{className:"card",style:{width:"min(980px, 100%)",padding:10,background:"rgba(0,0,0,0.45)",border:"1px solid rgba(255,255,255,0.14)"},children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center",gap:12,flexWrap:"wrap"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Replay time"}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:["+",hl(T.value-T.min)," of +",hl(T.max-T.min),X?` • ${X(T.value)}`:""]})]}),M.jsxs("div",{className:"row",style:{gap:10,alignItems:"center"},children:[M.jsx("button",{type:"button",className:"button",style:{padding:"6px 10px"},onClick:()=>{g&&_(!1),$e(w=>!w)},disabled:T.disabled,children:dt?"Pause":"Play"}),M.jsxs("select",{className:"input",style:{width:110,padding:"6px 10px"},value:String(W),onChange:w=>vt(Number(w.target.value)),disabled:T.disabled,title:"Playback speed",children:[M.jsx("option",{value:"0.25",children:"0.25×"}),M.jsx("option",{value:"0.5",children:"0.5×"}),M.jsx("option",{value:"1",children:"1×"}),M.jsx("option",{value:"2",children:"2×"}),M.jsx("option",{value:"4",children:"4×"})]}),M.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[M.jsx("input",{type:"checkbox",checked:Ke,onChange:w=>ee(w.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Events"})]}),M.jsxs("label",{className:"row",style:{gap:8,userSelect:"none"},children:[M.jsx("input",{type:"checkbox",checked:g,onChange:w=>{const z=w.target.checked;_(z),z&&$e(!1)}}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Live"})]})]})]}),Ke?M.jsxs("div",{style:{position:"relative",height:18,marginTop:6,marginBottom:4},children:[M.jsx("div",{style:{position:"absolute",left:0,right:0,top:8,height:2,background:"rgba(255,255,255,0.10)"}}),ae?M.jsxs("div",{style:{position:"absolute",left:`${ae.leftPct}%`,top:0,transform:"translate(-50%, -110%)",zIndex:10,pointerEvents:"none",maxWidth:320,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10,padding:"6px 8px"},children:[M.jsx("div",{style:{fontWeight:800,fontSize:12,lineHeight:1.2},children:ae.title}),M.jsx("div",{className:"muted",style:{fontSize:11,marginTop:2,lineHeight:1.2},children:ae.subtitle})]}):null,(()=>{const w=T.min,z=T.max,I=Math.max(1,z-w);return Je.map((D,j)=>{const U=(D.tsMs-w)/I,N=Math.min(1,Math.max(0,U))*100,O=D.type==="kill"||D.type==="death"||D.type==="aiKill"?"rgba(255,74,74,0.95)":D.type==="restart"?"rgba(255,217,102,0.95)":"rgba(183,247,200,0.95)",me=D.type==="disconnect"?"brightness(0.65) saturate(1.1)":void 0,Se=`+${hl(D.tsMs-w)}${X?` • ${X(D.tsMs)}`:""}${D.subtitle?` • ${D.subtitle}`:""}`,ye=`${D.tsMs}|${D.type}|${D.title}|${D.subtitle||""}`;return M.jsx("button",{type:"button",className:"button",style:{position:"absolute",left:`calc(${N}% - 4px)`,top:4,width:8,height:8,borderRadius:999,padding:0,border:"1px solid rgba(0,0,0,0.35)",background:O,filter:me},onMouseEnter:()=>{Ae({tsMs:D.tsMs,type:D.type,title:D.title,subtitle:Se,leftPct:N})},onMouseLeave:()=>Ae(null),onClick:()=>{$e(!1),_(!1),Ce(D.tsMs),typeof D.focusPlayerId=="number"&&te(D.focusPlayerId),D.focusPos&&(k(D.focusPos),Q(we=>we+1)),K("events"),Xe(ye),Ae(null)}},`${D.tsMs}-${j}-${D.type}`)})})()]}):null,M.jsx("input",{style:{width:"100%"},type:"range",min:T.min,max:T.max,value:T.value,disabled:T.disabled,onChange:w=>{const z=Number(w.target.value);Number.isFinite(z)&&(g&&_(!1),dt&&$e(!1),m(z))}})]})})]})})}):null,Ee?null:M.jsxs("div",{style:{padding:12,height:"calc(100vh - 72px)",boxSizing:"border-box",overflow:"auto"},children:[M.jsxs("div",{className:"card",style:{marginBottom:12},children:[M.jsx("div",{style:{fontWeight:900,letterSpacing:.2},children:"Server overview"}),M.jsx("div",{style:{marginTop:4,fontSize:13},children:"Pick a server to open the replay viewer. Times are shown in your local clock."}),a?M.jsx("div",{className:"error",style:{marginTop:10},children:a}):null]}),M.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:(s&&s.length>0?s:e.map(w=>({serverId:w.id,name:w.name,lastIngestTsMs:null,minTsMs:null,maxTsMs:null,firstReceivedAt:null,lastReceivedAt:null,storedEvents:null,totalEvents:null,retentionMs:0,mapId:null}))).map(w=>{const z=typeof w.retentionMs=="number"?w.retentionMs:0,I=typeof w.lastReceivedAt=="number"?w.lastReceivedAt:null,D=z>0&&I!==null?I-z:null,j=typeof w.firstReceivedAt=="number"?D!==null?Math.max(w.firstReceivedAt,D):w.firstReceivedAt:D;return M.jsxs("button",{className:"card",style:{textAlign:"left",cursor:"pointer",border:"none"},onClick:()=>{r(w.serverId),G([]),te(null),k(null),L([]),p({minTsMs:null,maxTsMs:null}),m(null),he.current=null,Qe.current=0,it([])},children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12},children:[M.jsx("div",{style:{fontWeight:900},children:w.name}),M.jsx("div",{className:"muted",style:{fontSize:12},children:w.serverId})]}),M.jsxs("div",{style:{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Events"}),M.jsx("div",{style:{fontWeight:800},children:typeof w.storedEvents=="number"?`${w.storedEvents} events`:"—"}),typeof w.totalEvents=="number"&&typeof w.storedEvents=="number"&&w.totalEvents!==w.storedEvents?M.jsxs("div",{className:"muted",style:{fontSize:12,marginTop:2},children:["All-time: ",w.totalEvents," events"]}):null]}),M.jsxs("div",{children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Retention"}),M.jsx("div",{style:{fontWeight:800},children:z>0?Gb(z):"∞"})]}),M.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Buffer window"}),M.jsxs("div",{style:{fontWeight:800,fontSize:13},children:[Ku(j)," → ",Ku(I)]})]}),M.jsxs("div",{style:{gridColumn:"1 / span 2"},children:[M.jsx("div",{className:"muted",style:{fontSize:12},children:"Last ingest"}),M.jsx("div",{style:{fontWeight:800,fontSize:13},children:Ku(w.lastReceivedAt)})]})]})]},w.serverId)})}),(!s||s.length===0)&&e.length===0?M.jsx("div",{style:{marginTop:12},children:"No servers yet — add one in the Dev page, then come back here."}):null]})]})}function pg(t){if(typeof t!="number"||!Number.isFinite(t))return"—";try{return new Date(t).toLocaleString()}catch{return"—"}}function jb(t){if(!Number.isFinite(t)||t<=0)return"—";const e=Math.floor(t/1e3),n=Math.floor(e/3600),i=Math.floor(e%3600/60);return n>=48&&n%24===0?`${Math.floor(n/24)}d`:n>0?`${n}h ${i}m`:`${i}m`}function Xb(){const[t,e]=F.useState(null),[n,i]=F.useState(null);F.useEffect(()=>{let s=!1;return qf().then(o=>{s||(e(o),i(null))}).catch(o=>{if(s)return;const a=o instanceof Error?o.message:"Failed to load replay status";i(a)}),()=>{s=!0}},[]);const r=F.useMemo(()=>{if(!t)return[];const s=t.slice();return s.sort((o,a)=>{const l=typeof o.storedEvents=="number"?o.storedEvents:-1;return(typeof a.storedEvents=="number"?a.storedEvents:-1)-l}),s.slice(0,6)},[t]);return M.jsx("div",{className:"container",children:M.jsxs("div",{className:"stack",children:[M.jsx("div",{className:"card",style:{padding:18},children:M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx("div",{className:"label",children:"Welcome"}),M.jsx("h1",{className:"h1",style:{marginTop:0},children:"ReforgedZ Admin"}),M.jsx("div",{className:"muted",children:"Use the sidebar to manage users, servers, and replay history."})]})}),M.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:12},children:[M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Replay overview"}),M.jsx("div",{className:"muted",style:{fontSize:13},children:t?`${t.length} server${t.length===1?"":"s"} detected.`:"Loading…"}),n?M.jsx("div",{className:"error",style:{marginTop:8},children:n}):null]}),r.length>0?M.jsx("div",{className:"stack",style:{gap:8},children:r.map(s=>{const o=typeof s.retentionMs=="number"?s.retentionMs:0,a=typeof s.lastReceivedAt=="number"?s.lastReceivedAt:null,l=o>0&&a!==null?a-o:null,c=typeof s.firstReceivedAt=="number"?l!==null?Math.max(s.firstReceivedAt,l):s.firstReceivedAt:l;return M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:12},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:850},children:s.name}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:[pg(c)," → ",pg(a)]})]}),M.jsxs("div",{style:{textAlign:"right"},children:[M.jsx("div",{style:{fontWeight:900},children:typeof s.storedEvents=="number"?`${s.storedEvents} events`:"—"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:o>0?jb(o):"∞"}),typeof s.totalEvents=="number"&&typeof s.storedEvents=="number"&&s.totalEvents!==s.storedEvents?M.jsxs("div",{className:"muted",style:{fontSize:11},children:["All-time ",s.totalEvents," events"]}):null]})]},s.serverId)})}):M.jsx("div",{className:"muted",style:{fontSize:12},children:"Open Replay Tool to see a detailed per-server dashboard."})]})}),M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Replay Tool tips"}),M.jsx("div",{className:"muted",style:{fontSize:13},children:"A few quick controls that help a lot."})]}),M.jsxs("div",{className:"stack",style:{gap:6,fontSize:13},children:[M.jsxs("div",{children:[M.jsx("span",{style:{fontWeight:850},children:"Attach camera:"})," click a player in the left panel."]}),M.jsxs("div",{children:[M.jsx("span",{style:{fontWeight:850},children:"Detach:"})," press ",M.jsx("span",{style:{fontWeight:900},children:"F"}),"."]}),M.jsxs("div",{children:[M.jsx("span",{style:{fontWeight:850},children:"Event jump offset:"})," defaults to 5s before the event (configurable in Replay Tool)."]})]})]})}),M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Retention"}),M.jsx("div",{className:"muted",style:{fontSize:13},children:"Replay is a rolling buffer. Restarts are marked in the timeline."})]}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"If you clear a server’s history, replay data is removed but cached map metadata is preserved."})]})})]})]})})}function $b(){const[t,e]=F.useState(null),[n,i]=F.useState(!1),[r,s]=F.useState([]),[o,a]=F.useState(""),[l,c]=F.useState(""),[f,d]=F.useState(!0),[h,g]=F.useState(!1),[_,y]=F.useState(!1);async function p(){i(!0),e(null);try{const m=await dM();s(m)}catch(m){e(m instanceof Error?m.message:"Failed to load users")}finally{i(!1)}}F.useEffect(()=>{p()},[]);const u=F.useMemo(()=>o.trim().length>=3&&l.length>=6,[l.length,o]);return M.jsx("div",{className:"container",children:M.jsxs("div",{className:"stack",children:[M.jsx("h1",{className:"h1",children:"Admin"}),t?M.jsx("div",{className:"error",children:t}):null,M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Create user"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Create a new account and choose which tools it can access."})]}),M.jsxs("div",{className:"row",children:[M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Username"}),M.jsx("input",{className:"input",value:o,onChange:m=>a(m.target.value),placeholder:"username"})]}),M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Password"}),M.jsx("input",{className:"input",type:"password",value:l,onChange:m=>c(m.target.value),placeholder:"password"})]})]}),M.jsxs("div",{className:"row",style:{gap:16},children:[M.jsxs("label",{className:"row",style:{gap:8},children:[M.jsx("input",{type:"checkbox",checked:f,onChange:m=>d(m.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Replay Tool"})]}),M.jsxs("label",{className:"row",style:{gap:8},children:[M.jsx("input",{type:"checkbox",checked:h,onChange:m=>g(m.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Admin"})]}),M.jsxs("label",{className:"row",style:{gap:8},children:[M.jsx("input",{type:"checkbox",checked:_,onChange:m=>y(m.target.checked)}),M.jsx("span",{className:"muted",style:{fontSize:12},children:"Dev"})]})]}),M.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:M.jsx("button",{className:"button buttonPrimary",disabled:!u||n,onClick:async()=>{i(!0),e(null);try{await hM({username:o.trim(),password:l,tools:{replay:f,admin:h,dev:_}}),a(""),c(""),d(!0),g(!1),y(!1),await p()}catch(m){e(m instanceof Error?m.message:"Failed to create user")}finally{i(!1)}},children:"Create user"})})]})}),M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Users"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Manage tool access and reset passwords."})]}),M.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:p,children:"Refresh"})]}),M.jsx("div",{className:"scroll",style:{maxHeight:420,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No users found."}):r.map(m=>{var v,S,P,C,b,G;return M.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{className:"row",style:{justifyContent:"space-between",alignItems:"center"},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:800},children:m.username}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:["tools: ",(v=m.tools)!=null&&v.replay?"replay ":"",(S=m.tools)!=null&&S.admin?"admin ":"",(P=m.tools)!=null&&P.dev?"dev ":""]})]}),M.jsxs("div",{className:"row",style:{gap:8},children:[M.jsxs("button",{className:"button",onClick:async()=>{var re,x,R;i(!0),e(null);try{await fu(m.username,{replay:!((re=m.tools)!=null&&re.replay),admin:!!((x=m.tools)!=null&&x.admin),dev:!!((R=m.tools)!=null&&R.dev)}),await p()}catch(te){e(te instanceof Error?te.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle replay tool access",children:["Replay: ",(C=m.tools)!=null&&C.replay?"On":"Off"]}),M.jsxs("button",{className:"button",onClick:async()=>{var re,x,R;i(!0),e(null);try{await fu(m.username,{replay:!!((re=m.tools)!=null&&re.replay),admin:!((x=m.tools)!=null&&x.admin),dev:!!((R=m.tools)!=null&&R.dev)}),await p()}catch(te){e(te instanceof Error?te.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle admin access",children:["Admin: ",(b=m.tools)!=null&&b.admin?"On":"Off"]}),M.jsxs("button",{className:"button",onClick:async()=>{var re,x,R;i(!0),e(null);try{await fu(m.username,{replay:!!((re=m.tools)!=null&&re.replay),admin:!!((x=m.tools)!=null&&x.admin),dev:!((R=m.tools)!=null&&R.dev)}),await p()}catch(te){e(te instanceof Error?te.message:"Failed to update user")}finally{i(!1)}},disabled:n,title:"Toggle dev access",children:["Dev: ",(G=m.tools)!=null&&G.dev?"On":"Off"]}),M.jsx("button",{className:"button",style:{borderColor:"rgba(255, 180, 180, 0.35)"},disabled:n,onClick:async()=>{if(confirm(`Delete user '${m.username}'?`)){i(!0),e(null);try{await pM(m.username),await p()}catch(re){e(re instanceof Error?re.message:"Failed to delete user")}finally{i(!1)}}},children:"Delete"})]})]})},m.username)})})]})})]})})}function Yb(){const[t,e]=F.useState(null),[n,i]=F.useState(!1),[r,s]=F.useState([]),[o,a]=F.useState(""),[l,c]=F.useState(""),[f,d]=F.useState(!1),[h,g]=F.useState(""),[_,y]=F.useState(""),[p,u]=F.useState("");async function m(){i(!0),e(null);try{const v=await mM();s(v);const S=await yM();d(!!S.isSet),a(S.masked||"")}catch(v){e(v instanceof Error?v.message:"Failed to load dev servers")}finally{i(!1)}}return F.useEffect(()=>{m()},[]),M.jsx("div",{className:"container",children:M.jsxs("div",{className:"stack",children:[M.jsx("h1",{className:"h1",children:"Dev"}),t?M.jsx("div",{className:"error",children:t}):null,M.jsx("div",{className:"card",children:M.jsxs("div",{className:"stack",children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Discord webhook (global)"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Used by “Export event to Discord”. One webhook URL is shared for all servers."})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Current"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:f?o||"set":"not set"})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Webhook URL"}),M.jsx("input",{className:"input",type:"password",value:l,onChange:v=>c(v.target.value),placeholder:"https://discord.com/api/webhooks/..."}),M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"Leave blank and click Save to clear."})]}),M.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:M.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:async()=>{i(!0),e(null);try{await xM(l.trim()),c(""),await m()}catch(v){e(v instanceof Error?v.message:"Failed to save webhook")}finally{i(!1)}},children:"Save webhook"})}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Add server"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Adds a new ingest key so the backend will accept replay uploads for that server."})]}),M.jsxs("div",{className:"row",children:[M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Server ID"}),M.jsx("input",{className:"input",value:h,onChange:v=>g(v.target.value),placeholder:"reforgedz-dev-eu-1"})]}),M.jsxs("div",{style:{flex:1,minWidth:240},children:[M.jsx("div",{className:"label",children:"Server name (optional)"}),M.jsx("input",{className:"input",value:p,onChange:v=>u(v.target.value),placeholder:"EU #1"})]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Server key / secret"}),M.jsx("input",{className:"input",value:_,onChange:v=>y(v.target.value),placeholder:"secret"}),M.jsx("div",{className:"muted",style:{fontSize:12,marginTop:6},children:"This must match what the Reforger exporter sends as serverKey."})]}),M.jsx("div",{className:"row",style:{justifyContent:"flex-end"},children:M.jsx("button",{className:"button buttonPrimary",disabled:n||h.trim().length===0||_.trim().length<6,onClick:async()=>{i(!0),e(null);try{await gM({serverId:h.trim(),serverKey:_.trim(),name:p.trim()||void 0}),g(""),y(""),u(""),await m()}catch(v){e(v instanceof Error?v.message:"Failed to add server")}finally{i(!1)}},children:"Add server"})})]})}),M.jsxs("div",{className:"card",children:[M.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Servers"}),M.jsx("div",{className:"muted",style:{fontSize:12},children:"Clear history deletes stored replay history for that server (events + snapshots). Cached map data is kept."})]}),M.jsx("button",{className:"button buttonPrimary",disabled:n,onClick:m,children:"Refresh"})]}),M.jsx("div",{style:{height:10}}),M.jsx("div",{className:"scroll",style:{maxHeight:520,overflow:"auto",border:"1px solid rgba(255,255,255,0.10)",borderRadius:10},children:r.length===0?M.jsx("div",{className:"muted",style:{padding:10,fontSize:12},children:"No servers configured."}):r.map(v=>M.jsx("div",{style:{padding:10,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:M.jsxs("div",{className:"row",style:{justifyContent:"space-between"},children:[M.jsxs("div",{children:[M.jsx("div",{style:{fontWeight:800},children:v.name||v.id}),M.jsxs("div",{className:"muted",style:{fontSize:12},children:["id: ",v.id,v.keyHint?` • key: ${v.keyHint}`:""]})]}),M.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Clear history for '${v.id}'? This deletes stored replay data.`)){i(!0),e(null);try{await vM(v.id),await m()}catch(S){e(S instanceof Error?S.message:"Failed to clear history")}finally{i(!1)}}},children:"Clear history"}),M.jsx("button",{className:"button",disabled:n,onClick:async()=>{if(confirm(`Regenerate terrain data for '${v.id}'? This queues a command for the exporter to re-send map terrain.`)){i(!0),e(null);try{await _M(v.id),await m()}catch(S){e(S instanceof Error?S.message:"Failed to regenerate terrain")}finally{i(!1)}}},children:"Regenerate terrain data"})]})},v.id))})]})]})})}function ml(t){return M.jsx(tM,{to:t.to,className:({isActive:e})=>`navItem${e?" navItemActive":""}`,children:t.label})}function qb(){const t=Cc();function e(){oM(),t("/login",{replace:!0})}return M.jsxs("div",{className:"appShell",children:[M.jsxs("aside",{className:"sidebar",children:[M.jsxs("div",{className:"stack",style:{gap:10},children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"ReforgedZ"}),M.jsx("div",{className:"h2",children:"Admin Panel"})]}),M.jsx("div",{style:{height:8}}),M.jsx("div",{className:"label",children:"Tools"}),M.jsxs("div",{className:"stack",style:{gap:8},children:[M.jsx(ml,{to:"/",label:"Home"}),au("replay")?M.jsx(ml,{to:"/replay",label:"Replay Tool"}):null,au("admin")?M.jsx(ml,{to:"/admin",label:"Admin"}):null,au("dev")?M.jsx(ml,{to:"/dev",label:"Dev"}):null]})]}),M.jsx("div",{style:{flex:1}}),M.jsx("button",{className:"button buttonPrimary",onClick:e,children:"Log out"})]}),M.jsx("main",{className:"main",children:M.jsx(HS,{})})]})}function Kb(t){const e=Xi();return Xt()?M.jsx(M.Fragment,{children:t.children}):M.jsx(O0,{to:"/login",replace:!0,state:{from:e.pathname}})}function Zb(){return M.jsxs(VS,{children:[M.jsx(er,{path:"/login",element:M.jsx(MM,{})}),M.jsxs(er,{element:M.jsx(Kb,{children:M.jsx(qb,{})}),children:[M.jsx(er,{path:"/",element:M.jsx(Xb,{})}),M.jsx(er,{path:"/replay",element:M.jsx(Wb,{})}),M.jsx(er,{path:"/admin",element:M.jsx($b,{})}),M.jsx(er,{path:"/dev",element:M.jsx(Yb,{})})]}),M.jsx(er,{path:"*",element:M.jsx(O0,{to:"/",replace:!0})})]})}Zu.createRoot(document.getElementById("root")).render(M.jsx(Tg.StrictMode,{children:M.jsx(ZS,{children:M.jsx(Zb,{})})}));
