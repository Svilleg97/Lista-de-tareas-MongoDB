var e={6544:e=>{var t={408:(e,t)=>{var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),f=Symbol.iterator,p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,g={};function m(e,t,o){this.props=e,this.context=t,this.refs=g,this.updater=o||p}function v(){}function y(e,t,o){this.props=e,this.context=t,this.refs=g,this.updater=o||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var w=y.prototype=new v;w.constructor=y,b(w,m.prototype),w.isPureReactComponent=!0;var k=Array.isArray,_=Object.prototype.hasOwnProperty,x={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function A(e,t,n){var i,r={},s=null,a=null;if(null!=t)for(i in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)_.call(t,i)&&!$.hasOwnProperty(i)&&(r[i]=t[i]);var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){for(var l=Array(c),h=0;h<c;h++)l[h]=arguments[h+2];r.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps)void 0===r[i]&&(r[i]=c[i]);return{$$typeof:o,type:e,key:s,ref:a,props:r,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,i,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case n:c=!0}}if(c)return s=s(c=e),e=""===r?"."+E(c,0):r,k(s)?(i="",null!=e&&(i=e.replace(S,"$&/")+"/"),P(s,t,i,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,i+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",k(e))for(var l=0;l<e.length;l++){var h=r+E(a=e[l],l);c+=P(a,t,i,h,s)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),l=0;!(a=e.next()).done;)c+=P(a=a.value,t,i,h=r+E(a,l++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,o){if(null==e)return e;var n=[],i=0;return P(e,n,"","",(function(e){return t.call(o,e,i++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},M={transition:null},N={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:M,ReactCurrentOwner:x};t.Children={map:T,forEach:function(e,t,o){T(e,(function(){t.apply(this,arguments)}),o)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=i,t.Profiler=s,t.PureComponent=y,t.StrictMode=r,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=b({},e.props),r=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=x.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)_.call(t,l)&&!$.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){c=Array(l);for(var h=0;h<l;h++)c[h]=arguments[h+2];i.children=c}return{$$typeof:o,type:e.type,key:r,ref:s,props:i,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=A,t.createFactory=function(e){var t=A.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,o){return R.current.useImperativeHandle(e,t,o)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,o){return R.current.useReducer(e,t,o)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,o){return R.current.useSyncExternalStore(e,t,o)},t.useTransition=function(){return R.current.useTransition()},t.version="18.2.0"},294:(e,t,o)=>{e.exports=o(408)}},o={};function n(e){var i=o[e];if(void 0!==i)return i.exports;var r=o[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{n.r(i),n.d(i,{AdditionsDeletions:()=>wt,Avatar:()=>Tt,AvatarGroup:()=>Ot,Badge:()=>Bt,Button:()=>It,ComplexityIndicator:()=>zt,FocusContainer:()=>ho,FocusItem:()=>ao,FocusRow:()=>co,FocusView:()=>lo,GkAdditionsDeletions:()=>Ct,GkAvatar:()=>Rt,GkAvatarGroup:()=>Mt,GkBadge:()=>Dt,GkButton:()=>jt,GkComplexityIndicator:()=>qt,GkFocusItem:()=>uo,GkFocusRow:()=>fo,GkFocusRowContainer:()=>po,GkMenu:()=>So,GkMenuItem:()=>Eo,GkMenuLabel:()=>Po,GkRelativeDate:()=>no,GkTag:()=>Ro,GkTooltip:()=>Mo,Input:()=>wo,Menu:()=>$o,MenuItem:()=>Ao,MenuLabel:()=>Co,Popover:()=>gt,RelativeDate:()=>oo,Tag:()=>Oo,Tooltip:()=>vt,defineGkElement:()=>No,elementBaseStyles:()=>pe,focusOutlineStyle:()=>fe,screenReaderStyles:()=>ue});const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class s{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=r.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(o,e))}return e}toString(){return this.cssText}}const a=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new s(n,e,o)},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,o))(t)})(e):e;var l;const h=window,d=h.trustedTypes,u=d?d.emptyScript:"",f=h.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},b=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:b};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var o;const n=null!==(o=this.shadowRoot)&&void 0!==o?o:this.attachShadow(this.constructor.shadowRootOptions);return((o,n)=>{t?o.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),i=e.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=g){var n;const i=this.constructor._$Ep(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:p).toAttribute(t,o.type);this._$El=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$El=null}}_$AK(e,t){var o;const n=this.constructor,i=n._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=n.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:p;this._$El=i,this[i]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||b)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var v;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:m}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.1");const y=window,w=y.trustedTypes,k=w?w.createPolicy("lit-html",{createHTML:e=>e}):void 0,_="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,$="?"+x,A=`<${$}>`,C=document,S=()=>C.createComment(""),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,T="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,M=/>/g,N=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,D=/"/g,L=/^(?:script|style|textarea|title)$/i,F=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),I=F(1),j=(F(2),Symbol.for("lit-noChange")),U=Symbol.for("lit-nothing"),H=new WeakMap,z=C.createTreeWalker(C,129,null,!1);class q{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const s=e.length-1,a=this.parts,[c,l]=((e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",s=O;for(let t=0;t<o;t++){const o=e[t];let a,c,l=-1,h=0;for(;h<o.length&&(s.lastIndex=h,c=s.exec(o),null!==c);)h=s.lastIndex,s===O?"!--"===c[1]?s=R:void 0!==c[1]?s=M:void 0!==c[2]?(L.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=N):void 0!==c[3]&&(s=N):s===N?">"===c[0]?(s=null!=i?i:O,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?N:'"'===c[3]?D:B):s===D||s===B?s=N:s===R||s===M?s=O:(s=N,i=void 0);const d=s===N&&e[t+1].startsWith("/>")?" ":"";r+=s===O?o+A:l>=0?(n.push(a),o.slice(0,l)+_+o.slice(l)+x+d):o+x+(-2===l?(n.push(void 0),t):d)}const a=r+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==k?k.createHTML(a):a,n]})(e,t);if(this.el=q.createElement(c,o),z.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=z.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(_)||t.startsWith(x)){const o=l[r++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+_).split(x),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?Q:"?"===t[1]?Z:"@"===t[1]?J:Y})}else a.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(L.test(n.tagName)){const e=n.textContent.split(x),t=e.length-1;if(t>0){n.textContent=w?w.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],S()),z.nextNode(),a.push({type:2,index:++i});n.append(e[t],S())}}}else if(8===n.nodeType)if(n.data===$)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(x,e+1));)a.push({type:7,index:i}),e+=x.length-1}i++}}static createElement(e,t){const o=C.createElement("template");return o.innerHTML=e,o}}function V(e,t,o=e,n){var i,r,s,a;if(t===j)return t;let c=void 0!==n?null===(i=o._$Co)||void 0===i?void 0:i[n]:o._$Cl;const l=E(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(s=(a=o)._$Co)&&void 0!==s?s:a._$Co=[])[n]=c:o._$Cl=c),void 0!==c&&(t=V(e,c._$AS(e,t.values),c,n)),t}class W{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:C).importNode(o,!0);z.currentNode=i;let r=z.nextNode(),s=0,a=0,c=n[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new G(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new X(r,this,e)),this._$AV.push(t),c=n[++a]}s!==(null==c?void 0:c.index)&&(r=z.nextNode(),s++)}return z.currentNode=C,i}v(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class G{constructor(e,t,o,n){var i;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),E(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==j&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>P(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==U&&E(this._$AH)?this._$AA.nextSibling.data=e:this.$(C.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=q.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(o);else{const e=new W(i,this),t=e.u(this.options);e.v(o),this.$(t),this._$AH=e}}_$AC(e){let t=H.get(e.strings);return void 0===t&&H.set(e.strings,t=new q(e)),t}T(e){P(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new G(this.k(S()),this.k(S()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Y{constructor(e,t,o,n,i){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=V(this,e,t,0),r=!E(e)||e!==this._$AH&&e!==j,r&&(this._$AH=e);else{const n=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=V(this,n[o+s],t,s),a===j&&(a=this._$AH[s]),r||(r=!E(a)||a!==this._$AH[s]),a===U?e=U:e!==U&&(e+=(null!=a?a:"")+i[s+1]),this._$AH[s]=a}r&&!n&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Q extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}const K=w?w.emptyScript:"";class Z extends Y{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class J extends Y{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=V(this,e,t,0))&&void 0!==o?o:U)===j)return;const n=this._$AH,i=e===U&&n!==U||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==U&&(n===U||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class X{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}}const ee=y.litHtmlPolyfillSupport;var te,oe;null==ee||ee(q,G),(null!==(v=y.litHtmlVersions)&&void 0!==v?v:y.litHtmlVersions=[]).push("2.7.4");class ne extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,i;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let s=r._$litPart$;if(void 0===s){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=s=new G(t.insertBefore(S(),e),e,void 0,null!=o?o:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return j}}ne.finalized=!0,ne._$litElement$=!0,null===(te=globalThis.litElementHydrateSupport)||void 0===te||te.call(globalThis,{LitElement:ne});const ie=globalThis.litElementPolyfillSupport;null==ie||ie({LitElement:ne}),(null!==(oe=globalThis.litElementVersions)&&void 0!==oe?oe:globalThis.litElementVersions=[]).push("3.3.2");const re=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function se(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):re(e,t)}const ae=({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,r=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(r.finisher=function(t){e(t,n)}),r}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}};function ce(e,t){return ae({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}var le;const he=null!=(null===(le=window.HTMLSlotElement)||void 0===le?void 0:le.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));class de extends ne{}const ue=a`.sr-only,.sr-only-focusable:not(:active):not(:focus){clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;overflow:hidden;position:absolute;white-space:nowrap}`,fe=a``,pe=a`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`;function be(e){return e.split("-")[1]}function ge(e){return"y"===e?"height":"width"}function me(e){return e.split("-")[0]}function ve(e){return["top","bottom"].includes(me(e))?"x":"y"}function ye(e,t,o){let{reference:n,floating:i}=e;const r=n.x+n.width/2-i.width/2,s=n.y+n.height/2-i.height/2,a=ve(t),c=ge(a),l=n[c]/2-i[c]/2,h="x"===a;let d;switch(me(t)){case"top":d={x:r,y:n.y-i.height};break;case"bottom":d={x:r,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:s};break;case"left":d={x:n.x-i.width,y:s};break;default:d={x:n.x,y:n.y}}switch(be(t)){case"start":d[a]-=l*(o&&h?-1:1);break;case"end":d[a]+=l*(o&&h?-1:1)}return d}function we(e,t){return"function"==typeof e?e(t):e}function ke(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function _e(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function xe(e,t){var o;void 0===t&&(t={});const{x:n,y:i,platform:r,rects:s,elements:a,strategy:c}=e,{boundary:l="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:f=0}=we(t,e),p=ke(f),b=a[u?"floating"===d?"reference":"floating":d],g=_e(await r.getClippingRect({element:null==(o=await(null==r.isElement?void 0:r.isElement(b)))||o?b:b.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:l,rootBoundary:h,strategy:c})),m="floating"===d?{...s.floating,x:n,y:i}:s.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),y=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},w=_e(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,offsetParent:v,strategy:c}):m);return{top:(g.top-w.top+p.top)/y.y,bottom:(w.bottom-g.bottom+p.bottom)/y.y,left:(g.left-w.left+p.left)/y.x,right:(w.right-g.right+p.right)/y.x}}const $e=Math.min,Ae=Math.max;function Ce(e,t,o){return Ae(e,$e(t,o))}const Se=(["top","right","bottom","left"].reduce(((e,t)=>e.concat(t,t+"-start",t+"-end")),[]),{left:"right",right:"left",bottom:"top",top:"bottom"});function Ee(e){return e.replace(/left|right|bottom|top/g,(e=>Se[e]))}const Pe={start:"end",end:"start"};function Te(e){return e.replace(/start|end/g,(e=>Pe[e]))}const Oe=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var o;const{placement:n,middlewareData:i,rects:r,initialPlacement:s,platform:a,elements:c}=t,{mainAxis:l=!0,crossAxis:h=!0,fallbackPlacements:d,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:p=!0,...b}=we(e,t),g=me(n),m=me(s)===s,v=await(null==a.isRTL?void 0:a.isRTL(c.floating)),y=d||(m||!p?[Ee(s)]:function(e){const t=Ee(e);return[Te(e),t,Te(t)]}(s));d||"none"===f||y.push(...function(e,t,o,n){const i=be(e);let r=function(e,t,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return o?t?i:n:t?n:i;case"left":case"right":return t?r:s;default:return[]}}(me(e),"start"===o,n);return i&&(r=r.map((e=>e+"-"+i)),t&&(r=r.concat(r.map(Te)))),r}(s,p,f,v));const w=[s,...y],k=await xe(t,b),_=[];let x=(null==(o=i.flip)?void 0:o.overflows)||[];if(l&&_.push(k[g]),h){const{main:e,cross:t}=function(e,t,o){void 0===o&&(o=!1);const n=be(e),i=ve(e),r=ge(i);let s="x"===i?n===(o?"end":"start")?"right":"left":"start"===n?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=Ee(s)),{main:s,cross:Ee(s)}}(n,r,v);_.push(k[e],k[t])}if(x=[...x,{placement:n,overflows:_}],!_.every((e=>e<=0))){var $,A;const e=((null==($=i.flip)?void 0:$.index)||0)+1,t=w[e];if(t)return{data:{index:e,overflows:x},reset:{placement:t}};let o=null==(A=x.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:A.placement;if(!o)switch(u){case"bestFit":{var C;const e=null==(C=x.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:C[0];e&&(o=e);break}case"initialPlacement":o=s}if(n!==o)return{reset:{placement:o}}}return{}}}},Re=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:o,y:n}=t,i=await async function(e,t){const{placement:o,platform:n,elements:i}=e,r=await(null==n.isRTL?void 0:n.isRTL(i.floating)),s=me(o),a=be(o),c="x"===ve(o),l=["left","top"].includes(s)?-1:1,h=r&&c?-1:1,d=we(t,e);let{mainAxis:u,crossAxis:f,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&"number"==typeof p&&(f="end"===a?-1*p:p),c?{x:f*h,y:u*l}:{x:u*l,y:f*h}}(t,e);return{x:o+i.x,y:n+i.y,data:i}}}};const Me=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:e=>{let{x:t,y:o}=e;return{x:t,y:o}}},...c}=we(e,t),l={x:o,y:n},h=await xe(t,c),d=ve(me(i)),u=function(e){return"x"===e?"y":"x"}(d);let f=l[d],p=l[u];if(r){const e="y"===d?"bottom":"right";f=Ce(f+h["y"===d?"top":"left"],f,f-h[e])}if(s){const e="y"===u?"bottom":"right";p=Ce(p+h["y"===u?"top":"left"],p,p-h[e])}const b=a.fn({...t,[d]:f,[u]:p});return{...b,data:{x:b.x-o,y:b.y-n}}}}};function Ne(e){var t;return(null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Be(e){return Ne(e).getComputedStyle(e)}function De(e){return e instanceof Ne(e).Node}function Le(e){return De(e)?(e.nodeName||"").toLowerCase():"#document"}function Fe(e){return e instanceof Ne(e).HTMLElement}function Ie(e){return e instanceof Ne(e).Element}function je(e){return"undefined"!=typeof ShadowRoot&&(e instanceof Ne(e).ShadowRoot||e instanceof ShadowRoot)}function Ue(e){const{overflow:t,overflowX:o,overflowY:n,display:i}=Be(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+o)&&!["inline","contents"].includes(i)}function He(e){return["table","td","th"].includes(Le(e))}function ze(e){const t=qe(),o=Be(e);return"none"!==o.transform||"none"!==o.perspective||!t&&!!o.backdropFilter&&"none"!==o.backdropFilter||!t&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((e=>(o.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(o.contain||"").includes(e)))}function qe(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Ve(e){return["html","body","#document"].includes(Le(e))}const We=Math.min,Ge=Math.max,Ye=Math.round,Qe=(Math.floor,e=>({x:e,y:e}));function Ke(e){const t=Be(e);let o=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=Fe(e),r=i?e.offsetWidth:o,s=i?e.offsetHeight:n,a=Ye(o)!==r||Ye(n)!==s;return a&&(o=r,n=s),{width:o,height:n,$:a}}function Ze(e){return Ie(e)?e:e.contextElement}function Je(e){const t=Ze(e);if(!Fe(t))return Qe(1);const o=t.getBoundingClientRect(),{width:n,height:i,$:r}=Ke(t);let s=(r?Ye(o.width):o.width)/n,a=(r?Ye(o.height):o.height)/i;return s&&Number.isFinite(s)||(s=1),a&&Number.isFinite(a)||(a=1),{x:s,y:a}}const Xe=Qe(0);function et(e,t,o){var n,i;if(void 0===t&&(t=!0),!qe())return Xe;const r=e?Ne(e):window;return!o||t&&o!==r?Xe:{x:(null==(n=r.visualViewport)?void 0:n.offsetLeft)||0,y:(null==(i=r.visualViewport)?void 0:i.offsetTop)||0}}function tt(e,t,o,n){void 0===t&&(t=!1),void 0===o&&(o=!1);const i=e.getBoundingClientRect(),r=Ze(e);let s=Qe(1);t&&(n?Ie(n)&&(s=Je(n)):s=Je(e));const a=et(r,o,n);let c=(i.left+a.x)/s.x,l=(i.top+a.y)/s.y,h=i.width/s.x,d=i.height/s.y;if(r){const e=Ne(r),t=n&&Ie(n)?Ne(n):n;let o=e.frameElement;for(;o&&n&&t!==e;){const e=Je(o),t=o.getBoundingClientRect(),n=getComputedStyle(o),i=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,r=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;c*=e.x,l*=e.y,h*=e.x,d*=e.y,c+=i,l+=r,o=Ne(o).frameElement}}return _e({width:h,height:d,x:c,y:l})}function ot(e){return((De(e)?e.ownerDocument:e.document)||window.document).documentElement}function nt(e){return Ie(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function it(e){return tt(ot(e)).left+nt(e).scrollLeft}function rt(e){if("html"===Le(e))return e;const t=e.assignedSlot||e.parentNode||je(e)&&e.host||ot(e);return je(t)?t.host:t}function st(e){const t=rt(e);return Ve(t)?e.ownerDocument?e.ownerDocument.body:e.body:Fe(t)&&Ue(t)?t:st(t)}function at(e,t){var o;void 0===t&&(t=[]);const n=st(e),i=n===(null==(o=e.ownerDocument)?void 0:o.body),r=Ne(n);return i?t.concat(r,r.visualViewport||[],Ue(n)?n:[]):t.concat(n,at(n))}function ct(e,t,o){let n;if("viewport"===t)n=function(e,t){const o=Ne(e),n=ot(e),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,a=0,c=0;if(i){r=i.width,s=i.height;const e=qe();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:a,y:c}}(e,o);else if("document"===t)n=function(e){const t=ot(e),o=nt(e),n=e.ownerDocument.body,i=Ge(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=Ge(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+it(e);const a=-o.scrollTop;return"rtl"===Be(n).direction&&(s+=Ge(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:a}}(ot(e));else if(Ie(t))n=function(e,t){const o=tt(e,!0,"fixed"===t),n=o.top+e.clientTop,i=o.left+e.clientLeft,r=Fe(e)?Je(e):Qe(1);return{width:e.clientWidth*r.x,height:e.clientHeight*r.y,x:i*r.x,y:n*r.y}}(t,o);else{const o=et(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return _e(n)}function lt(e,t){const o=rt(e);return!(o===t||!Ie(o)||Ve(o))&&("fixed"===Be(o).position||lt(o,t))}function ht(e,t){return Fe(e)&&"fixed"!==Be(e).position?t?t(e):e.offsetParent:null}function dt(e,t){const o=Ne(e);if(!Fe(e))return o;let n=ht(e,t);for(;n&&He(n)&&"static"===Be(n).position;)n=ht(n,t);return n&&("html"===Le(n)||"body"===Le(n)&&"static"===Be(n).position&&!ze(n))?o:n||function(e){let t=rt(e);for(;Fe(t)&&!Ve(t);){if(ze(t))return t;t=rt(t)}return null}(e)||o}function ut(e,t,o){const n=Fe(t),i=ot(t),r="fixed"===o,s=tt(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const c=Qe(0);if(n||!n&&!r)if(("body"!==Le(t)||Ue(i))&&(a=nt(t)),Fe(t)){const e=tt(t,!0,r,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&(c.x=it(i));return{x:s.left+a.scrollLeft-c.x,y:s.top+a.scrollTop-c.y,width:s.width,height:s.height}}const ft={getClippingRect:function(e){let{element:t,boundary:o,rootBoundary:n,strategy:i}=e;const r="clippingAncestors"===o?function(e,t){const o=t.get(e);if(o)return o;let n=at(e).filter((e=>Ie(e)&&"body"!==Le(e))),i=null;const r="fixed"===Be(e).position;let s=r?rt(e):e;for(;Ie(s)&&!Ve(s);){const t=Be(s),o=ze(s);o||"fixed"!==t.position||(i=null),(r?!o&&!i:!o&&"static"===t.position&&i&&["absolute","fixed"].includes(i.position)||Ue(s)&&!o&&lt(e,s))?n=n.filter((e=>e!==s)):i=t,s=rt(s)}return t.set(e,n),n}(t,this._c):[].concat(o),s=[...r,n],a=s[0],c=s.reduce(((e,o)=>{const n=ct(t,o,i);return e.top=Ge(n.top,e.top),e.right=We(n.right,e.right),e.bottom=We(n.bottom,e.bottom),e.left=Ge(n.left,e.left),e}),ct(t,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:o,strategy:n}=e;const i=Fe(o),r=ot(o);if(o===r)return t;let s={scrollLeft:0,scrollTop:0},a=Qe(1);const c=Qe(0);if((i||!i&&"fixed"!==n)&&(("body"!==Le(o)||Ue(r))&&(s=nt(o)),Fe(o))){const e=tt(o);a=Je(o),c.x=e.x+o.clientLeft,c.y=e.y+o.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-s.scrollLeft*a.x+c.x,y:t.y*a.y-s.scrollTop*a.y+c.y}},isElement:Ie,getDimensions:function(e){return Ke(e)},getOffsetParent:dt,getDocumentElement:ot,getScale:Je,async getElementRects(e){let{reference:t,floating:o,strategy:n}=e;const i=this.getOffsetParent||dt,r=this.getDimensions;return{reference:ut(t,await i(o),n),floating:{x:0,y:0,...await r(o)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>"rtl"===Be(e).direction},pt=a`:host{display:contents;position:relative}.popover{display:block;left:0;top:0;position:absolute}.arrow{background:var(--gk-tooltip-background-color,#000);height:8px;position:absolute;transform:rotate(45deg);width:8px}`;var bt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class gt extends de{constructor(){super(...arguments),this.arrow=!1,this.hover=!1,this.placement="top",this.popoverId=`popover_${Math.random().toString(16).slice(2)}`,this.srVisible=!1,this.open=!1,this.isTrackingOutside=!1}static{this.styles=[pe,ue,pt]}static{this.elementName="gk-popover"}firstUpdated(e){const t=this.triggerSlot.assignedElements()[0];this.triggerEl=t instanceof HTMLSlotElement?t.assignedElements({flatten:!0})[0]:t}async connectedCallback(){super.connectedCallback(),await this.updateComplete,await this.updateToggle(),null==this._toggleHandler&&(this._toggleHandler=this.handleToggle.bind(this)),this.hover?(this.triggerEl?.addEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.addEventListener("mouseout",this._toggleHandler,!1)):this.triggerEl?.addEventListener("focus",this._toggleHandler,!1)}disconnectedCallback(){super.disconnectedCallback(),null!=this._toggleHandler&&(this.triggerEl?.removeEventListener("focus",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseover",this._toggleHandler,!1),this.triggerEl?.removeEventListener("mouseout",this._toggleHandler,!1),this._toggleHandler=void 0),this.disposeTrackOutside()}handleToggle(e){e.composedPath().includes(this.triggerEl)&&(this.open=!this.open,this.updateToggle())}async updateToggle(){this.open?(await this.showPopover(),null!=this.popoverEl&&window.requestAnimationFrame((()=>{this.popoverEl?.focus()}))):this.hidePopover()}handleDocumentEvent(e){!1!==this.open&&(e.composedPath().includes(this)||this.hidePopover())}trackOutside(){this.hover||this.isTrackingOutside||!this.open||(this.isTrackingOutside=!0,null==this._documentEventHandler&&(this._documentEventHandler=this.handleDocumentEvent.bind(this)),document.addEventListener("click",this._documentEventHandler,!1),document.addEventListener("focusin",this._documentEventHandler,!1))}disposeTrackOutside(){this.isTrackingOutside&&(this.isTrackingOutside=!1,null!=this._documentEventHandler&&(document.removeEventListener("click",this._documentEventHandler,!1),window.removeEventListener("focusin",this._documentEventHandler,!1),this._documentEventHandler=void 0))}async updatePositioning(){const e=[Re(6),Oe(),Me({padding:5})];this.arrowEl&&e.push((e=>({name:"arrow",options:e,async fn(t){const{x:o,y:n,placement:i,rects:r,platform:s,elements:a}=t,{element:c,padding:l=0}=we(e,t)||{};if(null==c)return{};const h=ke(l),d={x:o,y:n},u=ve(i),f=ge(u),p=await s.getDimensions(c),b="y"===u,g=b?"top":"left",m=b?"bottom":"right",v=b?"clientHeight":"clientWidth",y=r.reference[f]+r.reference[u]-d[u]-r.floating[f],w=d[u]-r.reference[u],k=await(null==s.getOffsetParent?void 0:s.getOffsetParent(c));let _=k?k[v]:0;_&&await(null==s.isElement?void 0:s.isElement(k))||(_=a.floating[v]||r.floating[f]);const x=y/2-w/2,$=_/2-p[f]/2-1,A=$e(h[g],$),C=$e(h[m],$),S=A,E=_-p[f]-C,P=_/2-p[f]/2+x,T=Ce(S,P,E),O=null!=be(i)&&P!=T&&r.reference[f]/2-(P<S?A:C)-p[f]/2<0?P<S?S-P:E-P:0;return{[u]:d[u]-O,data:{[u]:T,centerOffset:P-T+O}}}}))({element:this.arrowEl})),await((e,t,o)=>{const n=new Map,i={platform:ft,...o},r={...i.platform,_c:n};return(async(e,t,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,a=r.filter(Boolean),c=await(null==s.isRTL?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=ye(l,n,c),u=n,f={},p=0;for(let o=0;o<a.length;o++){const{name:r,fn:b}=a[o],{x:g,y:m,data:v,reset:y}=await b({x:h,y:d,initialPlacement:n,placement:u,strategy:i,middlewareData:f,rects:l,platform:s,elements:{reference:e,floating:t}});h=null!=g?g:h,d=null!=m?m:d,f={...f,[r]:{...f[r],...v}},y&&p<=50&&(p++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(l=!0===y.rects?await s.getElementRects({reference:e,floating:t,strategy:i}):y.rects),({x:h,y:d}=ye(l,u,c))),o=-1)}return{x:h,y:d,placement:u,strategy:i,middlewareData:f}})(e,t,{...i,platform:r})})(this.triggerEl,this.popoverEl,{middleware:e,placement:this.placement}).then((({x:e,y:t,placement:o,middlewareData:n})=>{if(Object.assign(this.popoverEl.style,{left:`${e}px`,top:`${t}px`}),this.arrowEl){const e=n.arrow?.x,t=n.arrow?.y,i={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(this.arrowEl.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",right:"",bottom:"",[i]:"-4px"})}}))}async showPopover(){this.open=!0,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="true"),this.srVisible?this.popoverEl.classList.remove("sr-only"):this.popoverEl.removeAttribute("hidden"),await this.updatePositioning(),this.trackOutside()}hidePopover(){this.open=!1,null!=this.triggerEl&&(this.triggerEl.ariaExpanded="false"),this.srVisible?this.popoverEl.classList.add("sr-only"):this.popoverEl.setAttribute("hidden","true"),this.disposeTrackOutside()}get arrowMarkup(){return this.arrow?I`<div part="arrow" class="arrow"></div>`:""}render(){return I`<slot name="trigger" aria-describedby="${this.popoverId}"></slot><div class="popover ${this.srVisible&&"sr-only"}" ?hidden="${!this.srVisible}" id="${this.popoverId}" part="popover" role="tooltip"><slot></slot>${this.arrowMarkup}</div>`}}bt([se({type:Boolean})],gt.prototype,"arrow",void 0),bt([se({type:Boolean})],gt.prototype,"hover",void 0),bt([se()],gt.prototype,"placement",void 0),bt([se({attribute:"popover-id"})],gt.prototype,"popoverId",void 0),bt([se({attribute:"sr-visible",type:Boolean})],gt.prototype,"srVisible",void 0),bt([ce('slot[name="trigger"]')],gt.prototype,"triggerSlot",void 0),bt([ce(".popover")],gt.prototype,"popoverEl",void 0),bt([ce(".arrow")],gt.prototype,"arrowEl",void 0),bt([se({state:!0})],gt.prototype,"open",void 0);const mt=a`gk-popover::part(popover){background:var(--gk-tooltip-background-color,#000);color:var(--gk-tooltip-font-color,#fff);font-size:var(--gk-tooltip-font-size,14px);font-weight:var(--gk-tooltip-font-weight,bold);padding:var(--gk-tooltip-padding,10px 16px);width:max-content}`;class vt extends de{constructor(){super(...arguments),this.srVisible=!1}static{this.styles=[pe,ue,mt]}static{this.elementName="gk-tooltip"}static{this.components=[gt]}render(){return I`<gk-popover arrow hover ?sr-visible="${this.srVisible}" part="base"><slot name="trigger" slot="trigger"></slot><slot></slot></gk-popover>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([se({attribute:"sr-visible",type:Boolean})],vt.prototype,"srVisible",void 0);const yt=a`:host{display:inline-block;vertical-align:middle;font-weight:700}.deletions{color:var(--gk-deletions-color,#fe5955);padding-left:4px}.additions{color:var(--gk-additions-color,#74b666);padding-right:4px}`;class wt extends de{constructor(){super(...arguments),this.tooltipText="Lines Added/Removed",this.tooltipId=`additions-deletions_${Math.random().toString(16).slice(2)}`}static{this.styles=yt}static{this.elementName="gk-additions-deletions"}static{this.components=[vt]}render(){return I`<gk-tooltip sr-visible tooltip-id="${this.tooltipId}"><span slot="trigger" part="base"><span class="additions">+<slot name="additions"></slot></span>/ <span class="deletions">−<slot name="deletions"></slot></span></span><span>${this.tooltipText}</span></gk-tooltip>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([se({attribute:"tooltip-text"})],wt.prototype,"tooltipText",void 0);const kt=new Set(["children","localName","ref","style","className"]),_t=new WeakMap,xt=(e,t,o,n,i)=>{const r=null==i?void 0:i[t];void 0===r||o===n?null==o&&t in HTMLElement.prototype?e.removeAttribute(t):e[t]=o:((e,t,o)=>{let n=_t.get(e);void 0===n&&_t.set(e,n=new Map);let i=n.get(t);void 0!==o?void 0===i?(n.set(t,i={handleEvent:o}),e.addEventListener(t,i)):i.handleEvent=o:void 0!==i&&(n.delete(t),e.removeEventListener(t,i))})(e,r,o)};function $t(e=window.React,t,o,n,i){let r,s,a;if(void 0===t){const t=e;({tagName:s,elementClass:a,events:n,displayName:i}=t),r=t.react}else r=e,a=o,s=t;const c=r.Component,l=r.createElement,h=new Set(Object.keys(null!=n?n:{}));class d extends c{constructor(){super(...arguments),this.o=null}t(e){if(null!==this.o)for(const t in this.i)xt(this.o,t,this.props[t],e?e[t]:void 0,n)}componentDidMount(){var e;this.t(),null===(e=this.o)||void 0===e||e.removeAttribute("defer-hydration")}componentDidUpdate(e){this.t(e)}render(){const{_$Gl:e,...t}=this.props;this.h!==e&&(this.u=t=>{null!==e&&((e,t)=>{"function"==typeof e?e(t):e.current=t})(e,t),this.o=t,this.h=e}),this.i={};const o={ref:this.u};for(const[e,n]of Object.entries(t))kt.has(e)?o["className"===e?"class":e]=n:h.has(e)||e in a.prototype?this.i[e]=n:o[e]=n;return o.suppressHydrationWarning=!0,l(s,o)}}d.displayName=null!=i?i:a.name;const u=r.forwardRef(((e,t)=>l(d,{...e,_$Gl:t},null==e?void 0:e.children)));return u.displayName=d.displayName,u}var At=n(294);const Ct=$t({react:At,tagName:"gk-additions-deletions",elementClass:wt}),St=a`:host{display:inline-block}.avatar{vertical-align:middle;background-color:var(--gk-avatar-background-color,#e0e0e0);width:var(--gk-avatar-size,30px);aspect-ratio:1/1;border-radius:50%;transition:.2s}.avatar.is-offline{border:2px solid var(--gk-avatar-offline-outline-color,#3d424d)}.avatar.is-online{border:2px solid var(--gk-avatar-online-outline-color,#60b864)}.avatar--image{display:inline-block;object-fit:cover;object-position:50% 50%}.avatar--content{display:inline-flex;justify-content:center;align-items:center;font-size:var(--gk-avatar-font-size,11px);line-height:var(--gk-avatar-size,30px);text-align:center}.avatar:hover{transform:scale(1.2)}`,Et=a`:host{display:inline-block}.avatar-group{display:inline-flex;flex-direction:row;justify-content:center;align-items:center}.avatar-group::slotted(:not(:first-child)){margin-left:calc(var(--gk-avatar-size,2.4rem) * -.2)}.avatar-group:focus-within::slotted(*),.avatar-group:hover::slotted(*){opacity:.5}.avatar-group:focus-within::slotted(:focus),.avatar-group:hover::slotted(:hover){opacity:1;z-index:var(--gk-avatar-selected-zindex,1)!important}`;var Pt=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class Tt extends de{static{this.styles=[pe,St]}static{this.elementName="gk-avatar"}get indicatorClass(){return this.indicator?`is-${this.indicator}`:""}render(){return this.src?I`<img src="${this.src}" class="avatar avatar--image${this.indicatorClass}" part="base">`:I`<slot class="avatar avatar--content${this.indicatorClass}" part="base"></slot>`}}Pt([se()],Tt.prototype,"src",void 0),Pt([se()],Tt.prototype,"indicator",void 0);class Ot extends de{static{this.elementName="gk-avatar-group"}static{this.styles=[pe,Et]}render(){return I`<slot class="avatar-group" part="base"></slot>`}}const Rt=$t({react:At,tagName:"gk-avatar",elementClass:Tt}),Mt=$t({react:At,tagName:"gk-avatar-group",elementClass:Ot}),Nt=a`.badge{border-radius:var(--gk-badge-border-radius,22px);display:inline-block;font-size:var(--gk-badge-font-size,12px)}.badge--outline{border-color:var(--gk-badge-outline-color,#01ebcf);border-style:solid;border-width:var(--gk-badge-outline-border-width,1px);color:var(--gk-badge-outline-color,#01ebcf);padding:var(--gk-badge-outline-padding,4px 8px)}.badge--filled{background-color:var(--gk-badge-filled-background-color,#2b2f36);color:var(--gk-badge-filled-color,#ffffff99);padding:var(--gk-badge-filled-padding,2px 6px)}`;class Bt extends de{constructor(){super(...arguments),this.variant="outline"}static{this.styles=Nt}static{this.elementName="gk-badge"}render(){return I`<slot class="${`badge badge--${this.variant}`}" part="base"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([se()],Bt.prototype,"variant",void 0);const Dt=$t({react:At,tagName:"gk-badge",elementClass:Bt}),Lt=a`:host{display:inline-block}button{appearance:none;border:none;padding:8px 12px}button:hover{cursor:pointer}button:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.button--ghost{background:0 0;color:var(--gk-button-ghost-color,#fff)}.button--ghost:focus,.button--ghost:hover{text-decoration:underline}.button--ghost:active{color:var(--gk-button-ghost-color-active,#adb8c2)}.button--ghost:disabled,.button--ghost:disabled:active,.button--ghost:disabled:focus,.button--ghost:disabled:hover{color:var(--gk-button-ghost-color-disabled,#ffffff60);cursor:default;text-decoration:none}.button--outline{background:0 0;border-radius:2px;border-style:solid;border-width:var(--gk-button-outline-border-width,1px);color:var(--gk-button-outline-color,#fff)}.button--outline:focus,.button--outline:hover{background-color:#ffffff50}.button--outline:active{background-color:var(--gk-button-outline-color-active,#adb8c2)}.button--outline:disabled,.button--outline:disabled:active,.button--outline:disabled:focus,.button--outline:disabled:hover{background-color:transparent;border-color:var(--gk-button-outline-color-disabled,#ffffff60);color:var(--gk-button-outline-color-disabled,#ffffff60);cursor:default;text-decoration:none}`;var Ft=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class It extends de{constructor(){super(...arguments),this.disabled=!1,this.type="button",this.variant="ghost"}static{this.styles=Lt}static{this.elementName="gk-button"}get allClasses(){const e=["button"];return e.push(`button--${this.variant}`),e.join(" ")}_handleClick(e){e.stopPropagation(),this.dispatchEvent(new Event("click"))}render(){return I`<button class="${this.allClasses}" @click="${this._handleClick}" ?disabled="${this.disabled}" part="base" type="${this.type}"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></button>`}}Ft([se({type:Boolean,reflect:!0})],It.prototype,"disabled",void 0),Ft([se({reflect:!0})],It.prototype,"type",void 0),Ft([se()],It.prototype,"variant",void 0);const jt=$t({react:At,tagName:"gk-button",elementClass:It,events:{onClick:"click"}}),Ut=a`:host{display:inline-block}.complexity-indicator{display:inline-flex}.complexity-indicator__box{display:block;height:var(--gk-complexity-indicator-box-size,8px);width:var(--gk-complexity-indicator-box-size,8px)}.complexity-indicator__box:not(:last-of-type){margin-right:var(--gk-complexity-indicator-space-between,2px)}.complexity-indicator--level-1 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-1,#5cb85c)}.complexity-indicator--level-2 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-2,#4d88ff)}.complexity-indicator--level-3 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-3,#de9b43)}.complexity-indicator--level-4 .complexity-indicator__box{background-color:var(--gk-complexity-indicator-color-level-4,#d9413d)}`;var Ht=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class zt extends de{constructor(){super(...arguments),this.level=1,this.label="Complexity of pull request"}static{this.styles=[pe,ue,Ut]}static{this.elementName="gk-complexity-indicator"}render(){const e=[];for(let t=0;t<this.level;t++)e.push(t);return I`<div class="complexity-indicator complexity-indicator--level-${this.level}" part="base"><span class="sr-only">${this.label}</span> ${e.map((()=>I`<span class="complexity-indicator__box"></span>`))}</div>`}}Ht([se({type:Number})],zt.prototype,"level",void 0),Ht([se()],zt.prototype,"label",void 0);const qt=$t({react:At,tagName:"gk-complexity-indicator",elementClass:zt}),Vt=/(?<literal>\[.*?\])|(?<year>YYYY|YY)|(?<month>M{1,4})|(?<day>Do|DD?)|(?<weekday>d{2,4})|(?<hour>HH?|hh?)|(?<minute>mm?)|(?<second>ss?)|(?<fractionalSecond>SSS)|(?<dayPeriod>A|a)|(?<timeZoneName>ZZ?)/g,Wt=/(?<dateStyle>full|long|medium|short)(?:\+(?<timeStyle>full|long|medium|short))?/,Gt=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Yt;const Qt=new Map;let Kt,Zt,Jt;new Map;const Xt=["th","st","nd","rd"];function eo(e){const t=e%100;return`${e}${Xt[(t-20)%10]??Xt[t]??Xt[0]}`}var to=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class oo extends de{constructor(){super(...arguments),this.date=new Date,this.format="MMMM Do, YYYY h:mma"}static{this.styles=[pe]}static{this.elementName="gk-date-from"}static{this.components=[vt]}get relativeTime(){return function(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,t,n,i]of Gt){const r=Math.abs(o);if(r>=t||1e3===t)return null==Yt&&(null!=Jt?Yt=Jt.resolvedOptions().locale:null!=Zt?Yt=Zt.resolvedOptions().locale:(Jt=new Intl.RelativeTimeFormat(Kt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Yt=Jt.resolvedOptions().locale)),"en"===Yt||Yt?.startsWith("en-")?`${Math.round(r/n)}${i}`:(null==Jt&&(Jt=new Intl.RelativeTimeFormat(Kt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Jt.format(Math.round(o/n),e))}return""}(this.date)}get isDate(){return this.date&&!isNaN(this.date.getMilliseconds())}render(){if(this.isDate)return I`<gk-tooltip><time datetime="${this.date}" part="base" slot="trigger">${this.relativeTime}</time><span>${function(e,t,o,n=!0){const i=`${o??""}:${t=t??void 0}`;let r=Qt.get(i);if(null==r){const e=function(e){if(null==e)return{localeMatcher:"best fit",dateStyle:"full",timeStyle:"short"};const t=Wt.exec(e);if(null!=t?.groups){const{dateStyle:e,timeStyle:o}=t.groups;return{localeMatcher:"best fit",dateStyle:e||"full",timeStyle:o||void 0}}const o={localeMatcher:"best fit"};for(const{groups:t}of e.matchAll(Vt))if(null!=t)for(const e in t){const n=t[e];if(null!=n)switch(e){case"year":o.year=4===n.length?"numeric":"2-digit";break;case"month":switch(n.length){case 4:o.month="long";break;case 3:o.month="short";break;case 2:o.month="2-digit";break;case 1:o.month="numeric"}break;case"day":o.day="DD"===n?"2-digit":"numeric";break;case"weekday":switch(n.length){case 4:o.weekday="long";break;case 3:o.weekday="short";break;case 2:o.weekday="narrow"}break;case"hour":o.hour=2===n.length?"2-digit":"numeric",o.hour12="hh"===n||"h"===n;break;case"minute":o.minute=2===n.length?"2-digit":"numeric";break;case"second":o.second=2===n.length?"2-digit":"numeric";break;case"fractionalSecond":o.fractionalSecondDigits=3;break;case"dayPeriod":o.dayPeriod="narrow",o.hour12=!0,o.hourCycle="h12";break;case"timeZoneName":o.timeZoneName=2===n.length?"long":"short"}}return o}(t);let s;s=null==o?Kt:"system"===o?void 0:[o],r=new Intl.DateTimeFormat(s,e),n&&Qt.set(i,r)}if(null==t||Wt.test(t))return r.format(e);function s(e){const t=`${o??""}:time:${e}`;let i=Qt.get(t);if(null==i){const r={localeMatcher:"best fit",timeStyle:e};let s;s=null==o?Kt:"system"===o?void 0:[o],i=new Intl.DateTimeFormat(s,r),n&&Qt.set(t,i)}return i}const a=r.formatToParts(e);return t.replace(Vt,((t,o,n,i,r,c,l,h,d,u,f,p,b,g,m)=>{if(null!=o)return o.substring(1,o.length-1);for(const t in m){const o=m[t];if(null==o)continue;const n=a.find((e=>e.type===t));if("Do"===o&&"day"===n?.type)return eo(Number(n.value));if("a"===o&&"dayPeriod"===n?.type){const t=s("short").formatToParts(e).find((e=>"dayPeriod"===e.type));return`${(t??n)?.value??""}`}return n?.value??""}return""}))}(this.date,this.format??"MMMM Do, YYYY h:mma")}</span></gk-tooltip>`}}to([se({converter:(e=>({toAttribute:t=>t.toLocaleDateString(e),fromAttribute:e=>new Date(e)}))(navigator.language),reflect:!0})],oo.prototype,"date",void 0),to([se()],oo.prototype,"format",void 0);const no=$t({react:At,tagName:"gk-date-from",elementClass:oo}),io=a`.row--heading{text-transform:uppercase;color:var(--gk-text-secondary-color,rgba(255,255,255,.6))}.content::slotted(:not(:first-child)){border-top:1px solid var(--gk-divider-color,rgba(255,255,255,.04))}`,ro=a`:host{display:contents}.row{display:flex;flex-direction:row;align-items:center;padding:8px 0}.row:not(.row--heading):focus-within,.row:not(.row--heading):hover{background-color:var(--gk-focus-background-color-hover,rgba(255,255,255,.04))}.row:not(.row--heading):focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.row__key{flex:none;display:block;width:64px}@media (max-width:720px){.row__key{width:32px}}.row__content{flex:1;display:block}@media (max-width:720px){.row--heading .item__date,.row--heading .item__secondary{display:none}}`,so=a`.item{display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item{flex-direction:column;align-items:stretch}}.item__primary{flex:1;display:flex;flex-direction:row;gap:12px}.item__type{flex:none}@media (max-width:720px){.item__type{order:-1}}.item__content{display:flex;flex-direction:column;gap:6px;min-width:92px}@media (max-width:720px){.item__content{align-items:stretch}}.item__content>p{margin:0}.item__secondary{flex:none;display:flex;flex-direction:row;align-items:center;gap:8px}@media (max-width:720px){.item__secondary{flex-wrap:wrap;padding-left:36px}}.item__people{display:block;min-width:92px}@media (max-width:720px){.item__people{min-width:0}}.item__repo{display:block;width:150px}@media (max-width:720px){.item__repo{width:max-content}}.item__date{display:block;min-width:48px;align-self:center}@media (max-width:720px){.item__date{align-self:flex-start;min-width:0}}.item__actions{display:block;min-width:70px}@media (max-width:720px){.item__actions{width:100%}}`;class ao extends de{static{this.styles=[pe,so]}static{this.elementName="gk-focus-item"}render(){return I`<div class="item"><div class="item__primary"><div class="item__date"><slot name="date"></slot></div><div class="item__content"><slot></slot></div></div><div class="item__secondary"><slot name="people" class="item__people"></slot><slot name="repo" class="item__repo"></slot><slot name="actions" class="item__actions"></slot></div></div>`}}class co extends de{static{this.styles=[pe,ro]}static{this.elementName="gk-focus-row"}render(){return I`<div class="row"><div class="row__key"><slot name="key"></slot></div><slot class="row__content"></slot></div>`}}class lo extends de{static{this.styles=a`div{color:var(--gk-color-primary)}`}static{this.elementName="gk-focus-view"}render(){return I`<div>Hello, World</div>`}}class ho extends de{static{this.styles=[pe,ro,so,io]}static{this.elementName="gk-focus-container"}render(){return I`<div class="row row--heading"><slot name="key" class="row__key">Key</slot><div class="row__content"><div class="item"><div class="item__primary"><slot name="date" class="item__date">Updated</slot><slot name="item" class="item__content">Item</slot></div><div class="item__secondary"><slot name="people" class="item__people">People</slot><slot name="repo" class="item__repo">Repo</slot><slot name="actions" class="item__actions">Action</slot></div></div></div></div><slot class="content"></slot>`}}const uo=$t({react:At,tagName:"gk-focus-item",elementClass:ao}),fo=$t({react:At,tagName:"gk-focus-row",elementClass:co}),po=$t({react:At,tagName:"gk-focus-container",elementClass:ho});class bo{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const go=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends bo{constructor(e){var t;if(super(e),1!==e.type||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var o,n;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(o=this.nt)||void 0===o?void 0:o.has(e))&&this.it.add(e);return this.render(t)}const i=e.element.classList;this.it.forEach((e=>{e in t||(i.remove(e),this.it.delete(e))}));for(const e in t){const o=!!t[e];o===this.it.has(e)||(null===(n=this.nt)||void 0===n?void 0:n.has(e))||(o?(i.add(e),this.it.add(e)):(i.remove(e),this.it.delete(e)))}return j}}),mo=e=>null!=e?e:U,vo=a`:host{display:block}.input-container{background-color:var(--gk-input-background-color,#000);border:1px solid var(--gk-input-border-color,#ffffff14);border-radius:var(--gk-input-border-radius,2px);color:var(--gk-input-color,#ffffff99);cursor:text;display:inline-flex;justify-content:start;padding:var(--gk-input-padding,10px);vertical-align:middle;width:100%}.input{appearance:none;background:inherit;border:none;box-shadow:none;color:inherit;flex:1 1 auto;font:inherit;height:100%;margin:0;outline:0;padding:0}.input-container:focus-within{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}`;var yo=function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s};class wo extends de{static{this.formAssociated=!0}static{this.styles=[pe,ue,vo]}static{this.elementName="gk-input"}constructor(){super(),this.disabled=!1,this.labelVisibility="visible",this.required=!1,this.type="text",this.value="",this.internals=this.attachInternals()}firstUpdated(){this.internals.setFormValue(this.value)}render(){return I`<div class="field"><label class="${go({label:!0,"sr-only":"sr-only"===this.labelVisibility})}" for="input" ?hidden="${"hidden"===this.labelVisibility}" part="field-label"><slot name="label">${this.label}</slot></label><div class="${go({"input-container":!0,"input-container--disabled":this.disabled})}"><slot name="prefix" part="prefix"></slot><input autocomplete="${mo(this.autocomplete)}" autocorrect="${mo(this.autocorrect)}" class="input" ?disabled="${this.disabled}" id="input" name="${mo(this.name)}" part="input" placeholder="${mo(this.placeholder)}" type="${this.type}" @input="${this.onInput}"><slot name="suffix" part="suffix"></slot></div></div>`}onInput(e){this.value=e.target.value,this.internals.setFormValue(this.value)}}yo([se()],wo.prototype,"autocomplete",void 0),yo([se()],wo.prototype,"autocorrect",void 0),yo([se({type:Boolean,reflect:!0})],wo.prototype,"disabled",void 0),yo([se()],wo.prototype,"label",void 0),yo([se({attribute:"label-visibility"})],wo.prototype,"labelVisibility",void 0),yo([se()],wo.prototype,"name",void 0),yo([se()],wo.prototype,"placeholder",void 0),yo([se({type:Boolean,reflect:!0})],wo.prototype,"required",void 0),yo([se({reflect:!0})],wo.prototype,"type",void 0),yo([se()],wo.prototype,"value",void 0);const ko=a`:host{display:inline-block}.menu{border:1px solid var(--gk-menu-border-color,#2a2f35);border-radius:4px;background:var(--gk-menu-background-color,#32363f);box-shadow:0 5px 16px 0 rgba(0,0,0,.85);display:inline-block;padding:4px 0}`,_o=a`:host{display:block}.menu-item{font-size:var(--gk-menu-item-font-size,12px);padding:5px 6px}.menu-item:focus,.menu-item:hover{background-color:var(--gk-menu-item-background-color-hover,#4d88ff1a);cursor:pointer}.menu-item:focus{outline:1px solid var(--gk-focus-border-color,#007fd4);outline-offset:-1px}.menu-item:active{background-color:var(--gk-menu-item-background-color-active,#4d88ff4d)}.menu-item--disabled,.menu-item--disabled:active,.menu-item--disabled:focus,.menu-item--disabled:hover{background-color:initial;color:var(--gk-menu-item-font-color-disabled,#ffffff60);cursor:default;pointer-events:none}`,xo=a`:host{display:block}.menu-label{cursor:default;display:inline-block;font-size:var(--gk-menu-label-font-size,12px);font-weight:700;padding:5px 6px}`;class $o extends de{constructor(){super(...arguments),this._currentMenuItem=void 0}static{this.styles=[pe,ko]}static{this.elementName="gk-menu"}_handleSlotChange(){const e=this._getAllItems();e.length&&this._setCurrentItem(e[0])}_handleClick(e){e.stopPropagation();const t=e.target.closest("gk-menu-item");if(!t||t.disabled)return;this._currentMenuItem=t;const o=new CustomEvent("select",{detail:{target:t}});this.dispatchEvent(o)}_handleKeyDown(e){if("Enter"===e.key||" "===e.key)return e.preventDefault(),void this._currentMenuItem?.click();if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=this._getAllItems(),o=t.length;let n=this._currentMenuItem?t.indexOf(this._currentMenuItem):0;"ArrowUp"===e.key?n=(n-1+o)%o:"ArrowDown"===e.key?n=(n+1)%o:"Home"===e.key?n=0:"End"===e.key&&(n=o-1),this._setCurrentItem(t[n]),t[n].focus()}}_handleMouseDown(e){const t=e.target;this._isMenuItem(t)&&this._setCurrentItem(t)}_isMenuItem(e){const t=e.getAttribute("role")||"";return"gk-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(t)}_setCurrentItem(e){this._currentMenuItem=e,this._setTabIndex()}_getAllItems(){return this.slotChildren.filter((e=>this._isMenuItem(e)))}_setTabIndex(){this._getAllItems().forEach((e=>{e.setAttribute("tabindex",this._currentMenuItem===e?"0":"-1")}))}render(){return I`<slot class="menu" @click="${this._handleClick}" @keydown="${this._handleKeyDown}" @mousedown="${this._handleMouseDown}" @slotchange="${this._handleSlotChange}" part="base" role="menu"></slot>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([function(e){const{slot:t,selector:o}=null!=e?e:{};return ae({descriptor:n=>({get(){var n;const i="slot"+(t?`[name=${t}]`:":not([name])"),r=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(i),s=null!=r?he(r,e):[];return o?s.filter((e=>e.matches(o))):s},enumerable:!0,configurable:!0})})}({flatten:!0})],$o.prototype,"slotChildren",void 0);class Ao extends de{constructor(){super(...arguments),this.disabled=!1}static{this.styles=[pe,_o]}static{this.elementName="gk-menu-item"}get allClasses(){return this.disabled?"menu-item--disabled":""}render(){return I`<div aria-disabled="${this.disabled}" class="menu-item ${this.allClasses}" part="base" role="menuitem"><slot name="prefix"></slot><slot></slot><slot name="suffix"></slot></div>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([se({type:Boolean,reflect:!0})],Ao.prototype,"disabled",void 0);class Co extends de{static{this.styles=[pe,xo]}static{this.elementName="gk-menu-label"}render(){return I`<slot class="menu-label" part="base"></slot>`}}const So=$t({react:At,tagName:"gk-menu",elementClass:$o,events:{onClick:"click"}}),Eo=$t({react:At,tagName:"gk-menu-item",elementClass:Ao}),Po=$t({react:At,tagName:"gk-menu-label",elementClass:Co}),To=a`:host{display:inline-block}.tag{display:inline-flex;align-items:center;vertical-align:middle;gap:8px;padding:var(--gk-tag-padding,4px 6px);border-radius:var(--gk-tag-radius,4px);background-color:var(--gk-tag-background-color,#33363e);color:var(--gk-tag-color,#85868b);max-width:100%}.tag__prefix,.tag__suffix{flex:none}.tag__label{display:inline;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tag--ghost{background-color:transparent}`;class Oo extends de{static{this.styles=[pe,To]}static{this.elementName="gk-tag"}render(){return I`<span class="tag ${this.variant?`tag--${this.variant}`:""}" part="base"><slot class="tag__prefix" name="prefix"></slot><slot class="tag__label"></slot><slot class="tag__suffix" name="suffix"></slot></span>`}}!function(e,t,o,n){var i,r=arguments.length,s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(r<3?i(s):r>3?i(t,o,s):i(t,o))||s);r>3&&s&&Object.defineProperty(t,o,s)}([se()],Oo.prototype,"variant",void 0);const Ro=$t({react:At,tagName:"gk-tag",elementClass:Oo}),Mo=$t({react:At,tagName:"gk-tooltip",elementClass:vt});function No(...e){e.forEach((e=>{e.elementName&&!customElements.get(e.elementName)&&(customElements.define(e.elementName,e),e.components&&e.components.length>0&&No(...e.components))}))}})(),e.exports=i}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),void 0!==o&&Object.defineProperty(o,"p",{get:function(){try{if("string"!=typeof webpackResourceBasePath)throw new Error("WebpackRequireFrom: 'webpackResourceBasePath' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");return webpackResourceBasePath}catch(e){return"#{root}/dist/webviews/"}},set:function(e){}});var n={};(()=>{o.d(n,{S:()=>li});var e=Object.defineProperty,t=(t,o,n)=>(((t,o,n)=>{o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n})(t,"symbol"!=typeof o?o+"":o,n),n);class i{constructor(e,o=!1){this.method=e,this.reset=o,t(this,"_")}}class r extends i{}class s extends i{}function a(e,t,o){e.method===t.method&&o(t.params,e)}const c=new r("webview/ready"),l=new r("webview/focus");new r("command/execute"),new r("configuration/preview"),new r("configuration/update"),new s("configuration/didChange"),new s("configuration/didPreview"),new s("webview/didOpenAnchor");const h=new r("focus/pr/openWorktree"),d=new r("focus/pr/openBranch"),u=new r("focus/pr/switchToBranch"),f=new s("focus/didChange",!0);function p(e,t){let o,n,i,r,s;function a(e){const o=e-(n??0);return null==n||o>=t||o<0}function c(){const e=Date.now();if(a(e))l();else{s=setTimeout(c,t-(e-(n??0)))}}function l(){return s=void 0,o?function(){const t=o,n=i;return o=i=void 0,r=e.apply(n,t),r}():(o=i=void 0,r)}function h(...e){const l=Date.now(),h=a(l);return o=e,i=this,n=l,h&&null==s?(s=setTimeout(c,t),r):(null==s&&(s=setTimeout(c,t)),r)}return h.cancel=function(){null!=s&&clearTimeout(s),o=n=i=s=void 0},h.flush=function(){return null!=s?l():r},h.pending=function(){return null!=s},h}var b=(e=>(e.Off="off",e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e))(b||{}),g=Object.defineProperty,m=(e,t,o)=>(((e,t,o)=>{t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o})(e,"symbol"!=typeof t?t+"":t,o),o);const v="";const y=new class{constructor(){m(this,"output"),m(this,"provider"),m(this,"_isDebugging",!1),m(this,"level",0),m(this,"_logLevel",b.Off)}configure(e,t,o=!1){this.provider=e,this._isDebugging=o,this.logLevel=t}enabled(e){return this.level>=w(e)}get isDebugging(){return this._isDebugging}get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e,this.level=w(this._logLevel),e===b.Off?(this.output?.dispose?.(),this.output=void 0):this.output=this.output??this.provider.createChannel(this.provider.name)}get timestamp(){return`[${(new Date).toISOString().replace(/T/," ").slice(0,-1)}]`}debug(e,...t){if(this.level<4&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??v}`)),this.isDebugging,null==this.output||this.level<4||this.output.appendLine(`${this.timestamp} ${o??v}${this.toLoggableParams(!0,t)}`)}error(e,t,...o){if(this.level<1&&!this.isDebugging)return;let n;if(n=null==t||"string"==typeof t?t:`${t.prefix} ${o.shift()??v}`,null==n){const t=e instanceof Error?e.stack:void 0;if(t){const e=/.*\s*?at\s(.+?)\s/.exec(t);null!=e&&(n=e[1])}}this.isDebugging,null==this.output||this.level<1||this.output.appendLine(`${this.timestamp} ${n??v}${this.toLoggableParams(!1,o)}\n${String(e)}`)}log(e,...t){if(this.level<3&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??v}`)),this.isDebugging,null==this.output||this.level<3||this.output.appendLine(`${this.timestamp} ${o??v}${this.toLoggableParams(!1,t)}`)}warn(e,...t){if(this.level<2&&!this.isDebugging)return;let o;"string"==typeof e?o=e:(o=t.shift(),null!=e&&(o=`${e.prefix} ${o??v}`)),this.isDebugging,null==this.output||this.level<2||this.output.appendLine(`${this.timestamp} ${o??v}${this.toLoggableParams(!1,t)}`)}showOutputChannel(e){this.output?.show?.(e)}toLoggable(e,t){if("object"!=typeof e)return String(e);if(Array.isArray(e))return`[${e.map((e=>this.toLoggable(e,t))).join(", ")}]`;const o=this.provider.toLoggable?.(e);if(null!=o)return o;try{return JSON.stringify(e,t)}catch{return"<error>"}}toLoggableParams(e,t){if(0===t.length||e&&this.level<4&&!this.isDebugging)return v;const o=t.map((e=>this.toLoggable(e))).join(", ");return 0!==o.length?` — ${o}`:v}};function w(e){switch(e){case b.Off:return 0;case b.Error:return 1;case b.Warn:return 2;case b.Info:return 3;case b.Debug:return 4;default:return 0}}var k,_;(_=k||(k={})).on=function(e,t,o,n){let i=!1;if("string"==typeof e){const r=function(t){const n=t?.target?.closest(e);null!=n&&o(t,n)};return document.addEventListener(t,r,n??!0),{dispose:()=>{i||(i=!0,document.removeEventListener(t,r,n??!0))}}}const r=function(e){o(e,this)};return e.addEventListener(t,r,n??!1),{dispose:()=>{i||(i=!0,e.removeEventListener(t,r,n??!1))}}},_.insertTemplate=function(e,t,o){const n=document.getElementById(e);if(t.replaceChildren(n?.content.cloneNode(!0)),t.className=n.className,null!=o?.visible){const e=t.querySelectorAll("[data-visible]");for(const t of e){const e=t.dataset.visible;e&&(o.visible[e]?t.style.display="initial":t.style.display="none")}}if(null!=o?.bindings){const e=t.querySelectorAll("[data-bind]");for(const t of e){const e=t.dataset.bind;if(!e)continue;const n=o.bindings[e];null!=n&&(t.textContent=String(n))}}},_.resetSlot=function(e){e.replaceChildren(),e.className=""};var x=(e=>(e[e.Hash=35]="Hash",e[e.Slash=47]="Slash",e[e.Digit0=48]="Digit0",e[e.Digit1=49]="Digit1",e[e.Digit2=50]="Digit2",e[e.Digit3=51]="Digit3",e[e.Digit4=52]="Digit4",e[e.Digit5=53]="Digit5",e[e.Digit6=54]="Digit6",e[e.Digit7=55]="Digit7",e[e.Digit8=56]="Digit8",e[e.Digit9=57]="Digit9",e[e.Backslash=92]="Backslash",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.Z=90]="Z",e[e.a=97]="a",e[e.b=98]="b",e[e.c=99]="c",e[e.d=100]="d",e[e.e=101]="e",e[e.f=102]="f",e[e.z=122]="z",e))(x||{});var $=Object.defineProperty,A=(e,t,o)=>(((e,t,o)=>{t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o})(e,"symbol"!=typeof t?t+"":t,o),o);function C(e,t){const o=e+t,n=t<0?o<0?0:o:o>255?255:o;return Math.round(n)}function S(e,t){return E(e,-t)}function E(e,t){const o=function(e){const t=U(e);return null==t?null:[t.rgba.r,t.rgba.g,t.rgba.b,t.rgba.a]}(e);if(null==o)return e;const[n,i,r,s]=o,a=255*t/100;return`rgba(${C(n,a)}, ${C(i,a)}, ${C(r,a)}, ${s})`}function P(e,t){const o=D.from(e);return null==o?e:o.transparent(t/100).toString()}function T(e,t){const o=Math.pow(10,t);return Math.round(e*o)/o}class O{constructor(e,t,o,n=1){A(this,"_rgbaBrand"),A(this,"r"),A(this,"g"),A(this,"b"),A(this,"a"),this.r=0|Math.min(255,Math.max(0,e)),this.g=0|Math.min(255,Math.max(0,t)),this.b=0|Math.min(255,Math.max(0,o)),this.a=T(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b&&e.a===t.a}}class R{constructor(e,t,o,n){A(this,"_hslaBrand"),A(this,"h"),A(this,"s"),A(this,"l"),A(this,"a"),this.h=0|Math.max(Math.min(360,e),0),this.s=T(Math.max(Math.min(1,t),0),3),this.l=T(Math.max(Math.min(1,o),0),3),this.a=T(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.l===t.l&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=e.a,r=Math.max(t,o,n),s=Math.min(t,o,n);let a=0,c=0;const l=(s+r)/2,h=r-s;if(h>0){switch(c=Math.min(l<=.5?h/(2*l):h/(2-2*l),1),r){case t:a=(o-n)/h+(o<n?6:0);break;case o:a=(n-t)/h+2;break;case n:a=(t-o)/h+4}a*=60,a=Math.round(a)}return new R(a,c,l,i)}static _hue2rgb(e,t,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?e+6*(t-e)*o:o<.5?t:o<2/3?e+(t-e)*(2/3-o)*6:e}static toRGBA(e){const t=e.h/360,{s:o,l:n,a:i}=e;let r,s,a;if(0===o)r=s=a=n;else{const e=n<.5?n*(1+o):n+o-n*o,i=2*n-e;r=R._hue2rgb(i,e,t+1/3),s=R._hue2rgb(i,e,t),a=R._hue2rgb(i,e,t-1/3)}return new O(Math.round(255*r),Math.round(255*s),Math.round(255*a),i)}}class M{constructor(e,t,o,n){A(this,"_hsvaBrand"),A(this,"h"),A(this,"s"),A(this,"v"),A(this,"a"),this.h=0|Math.max(Math.min(360,e),0),this.s=T(Math.max(Math.min(1,t),0),3),this.v=T(Math.max(Math.min(1,o),0),3),this.a=T(Math.max(Math.min(1,n),0),3)}static equals(e,t){return e.h===t.h&&e.s===t.s&&e.v===t.v&&e.a===t.a}static fromRGBA(e){const t=e.r/255,o=e.g/255,n=e.b/255,i=Math.max(t,o,n),r=i-Math.min(t,o,n),s=0===i?0:r/i;let a;return a=0===r?0:i===t?((o-n)/r%6+6)%6:i===o?(n-t)/r+2:(t-o)/r+4,new M(Math.round(60*a),s,i,e.a)}static toRGBA(e){const{h:t,s:o,v:n,a:i}=e,r=n*o,s=r*(1-Math.abs(t/60%2-1)),a=n-r;let[c,l,h]=[0,0,0];return t<60?(c=r,l=s):t<120?(c=s,l=r):t<180?(l=r,h=s):t<240?(l=s,h=r):t<300?(c=s,h=r):t<=360&&(c=r,h=s),c=Math.round(255*(c+a)),l=Math.round(255*(l+a)),h=Math.round(255*(h+a)),new O(c,l,h,i)}}function N(e,t){return t.getPropertyValue(e).trim()}const B=class{constructor(e){if(A(this,"rgba"),A(this,"_hsla"),A(this,"_hsva"),A(this,"_toString"),!e)throw new Error("Color needs a value");if(e instanceof O)this.rgba=e;else if(e instanceof R)this._hsla=e,this.rgba=R.toRGBA(e);else{if(!(e instanceof M))throw new Error("Invalid color ctor argument");this._hsva=e,this.rgba=M.toRGBA(e)}}static from(e){return e instanceof B?e:U(e)||B.red}static fromCssVariable(e,t){return U(N(e,t))||B.red}static fromHex(e){return H(e)||B.red}static equals(e,t){return!e&&!t||!(!e||!t)&&e.equals(t)}get hsla(){return this._hsla?this._hsla:R.fromRGBA(this.rgba)}get hsva(){return this._hsva?this._hsva:M.fromRGBA(this.rgba)}equals(e){return null!=e&&(Boolean(e)&&O.equals(this.rgba,e.rgba)&&R.equals(this.hsla,e.hsla)&&M.equals(this.hsva,e.hsva))}getRelativeLuminance(){return T(.2126*B._relativeLuminanceForComponent(this.rgba.r)+.7152*B._relativeLuminanceForComponent(this.rgba.g)+.0722*B._relativeLuminanceForComponent(this.rgba.b),4)}static _relativeLuminanceForComponent(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}luminance(e){return function(e,t){if(0===t)return new D(new O(0,0,0,e.rgba.a));if(1===t)return new D(new O(255,255,255,e.rgba.a));const o=e.getRelativeLuminance();let n=20;const i=(e,o)=>{const r=e.mix(o,.5),s=r.getRelativeLuminance();return Math.abs(t-s)<1e-7||!n--?r:s>t?i(e,r):i(r,o)},r=(o>t?i(D.black,e):i(e,D.white)).rgba;return new D(new O(r.r,r.g,r.b,e.rgba.a))}(this,e)}getContrastRatio(e){const t=this.getRelativeLuminance(),o=e.getRelativeLuminance();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)}isDarker(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3<128}isLighter(){return(299*this.rgba.r+587*this.rgba.g+114*this.rgba.b)/1e3>=128}isLighterThan(e){return this.getRelativeLuminance()>e.getRelativeLuminance()}isDarkerThan(e){return this.getRelativeLuminance()<e.getRelativeLuminance()}lighten(e){return new B(new R(this.hsla.h,this.hsla.s,this.hsla.l+this.hsla.l*e,this.hsla.a))}darken(e){return new B(new R(this.hsla.h,this.hsla.s,this.hsla.l-this.hsla.l*e,this.hsla.a))}transparent(e){const{r:t,g:o,b:n,a:i}=this.rgba;return new B(new O(t,o,n,i*e))}isTransparent(){return 0===this.rgba.a}isOpaque(){return 1===this.rgba.a}opposite(){return new B(new O(255-this.rgba.r,255-this.rgba.g,255-this.rgba.b,this.rgba.a))}blend(e){const t=e.rgba,o=this.rgba.a,n=t.a,i=o+n*(1-o);if(i<1e-6)return B.transparent;const r=this.rgba.r*o/i+t.r*n*(1-o)/i,s=this.rgba.g*o/i+t.g*n*(1-o)/i,a=this.rgba.b*o/i+t.b*n*(1-o)/i;return new B(new O(r,s,a,i))}mix(e,t){return function(e,t,o){const n=e.rgba,i=t.rgba;return new D(new O(n.r+o*(i.r-n.r),n.g+o*(i.g-n.g),n.b+o*(i.b-n.b),n.a+o*(i.a-n.a)))}(this,e,t)}makeOpaque(e){if(this.isOpaque()||1!==e.rgba.a)return this;const{r:t,g:o,b:n,a:i}=this.rgba;return new B(new O(e.rgba.r-i*(e.rgba.r-t),e.rgba.g-i*(e.rgba.g-o),e.rgba.b-i*(e.rgba.b-n),1))}flatten(...e){const t=e.reduceRight(((e,t)=>B._flatten(t,e)));return B._flatten(this,t)}static _flatten(e,t){const o=1-e.rgba.a;return new B(new O(o*t.rgba.r+e.rgba.a*e.rgba.r,o*t.rgba.g+e.rgba.a*e.rgba.g,o*t.rgba.b+e.rgba.a*e.rgba.b))}toString(){return this._toString||(this._toString=function(e){if(e.isOpaque())return I(e);return L(e)}(this)),this._toString}static getLighterColor(e,t,o){if(e.isLighterThan(t))return e;o=o||.5;const n=e.getRelativeLuminance(),i=t.getRelativeLuminance();return o=o*(i-n)/i,e.lighten(o)}static getDarkerColor(e,t,o){if(e.isDarkerThan(t))return e;o=o||.5;const n=e.getRelativeLuminance();return o=o*(n-t.getRelativeLuminance())/n,e.darken(o)}};let D=B;function L(e){return`rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${Number(e.rgba.a.toFixed(2))})`}function F(e){const t=e.toString(16);return 2!==t.length?`0${t}`:t}function I(e){return`#${F(e.rgba.r)}${F(e.rgba.g)}${F(e.rgba.b)}`}A(D,"white",new B(new O(255,255,255,1))),A(D,"black",new B(new O(0,0,0,1))),A(D,"red",new B(new O(255,0,0,1))),A(D,"blue",new B(new O(0,0,255,1))),A(D,"green",new B(new O(0,255,0,1))),A(D,"cyan",new B(new O(0,255,255,1))),A(D,"lightgrey",new B(new O(211,211,211,1))),A(D,"transparent",new B(new O(0,0,0,0)));const j=/^((?:rgb|hsl)a?)\((-?\d+%?)[,\s]+(-?\d+%?)[,\s]+(-?\d+%?)[,\s]*(-?[\d.]+%?)?\)$/i;function U(e){if(0===(e=e.trim()).length)return null;if(e.charCodeAt(0)===x.Hash)return H(e);const t=j.exec(e);if(null==t)return null;const o=t[1];let n;switch(o){case"rgb":case"hsl":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),1];break;case"rgba":case"hsla":n=[parseInt(t[2],10),parseInt(t[3],10),parseInt(t[4],10),parseFloat(t[5])];break;default:return null}switch(o){case"rgb":case"rgba":return new D(new O(n[0],n[1],n[2],n[3]));case"hsl":case"hsla":return new D(new R(n[0],n[1],n[2],n[3]))}return D.red}function H(e){const t=(e=e.trim()).length;if(0===t)return null;if(e.charCodeAt(0)!==x.Hash)return null;switch(t){case 7:{const t=16*z(e.charCodeAt(1))+z(e.charCodeAt(2)),o=16*z(e.charCodeAt(3))+z(e.charCodeAt(4)),n=16*z(e.charCodeAt(5))+z(e.charCodeAt(6));return new D(new O(t,o,n,1))}case 9:{const t=16*z(e.charCodeAt(1))+z(e.charCodeAt(2)),o=16*z(e.charCodeAt(3))+z(e.charCodeAt(4)),n=16*z(e.charCodeAt(5))+z(e.charCodeAt(6)),i=16*z(e.charCodeAt(7))+z(e.charCodeAt(8));return new D(new O(t,o,n,i/255))}case 4:{const t=z(e.charCodeAt(1)),o=z(e.charCodeAt(2)),n=z(e.charCodeAt(3));return new D(new O(16*t+t,16*o+o,16*n+n))}case 5:{const t=z(e.charCodeAt(1)),o=z(e.charCodeAt(2)),n=z(e.charCodeAt(3)),i=z(e.charCodeAt(4));return new D(new O(16*t+t,16*o+o,16*n+n,(16*i+i)/255))}default:return null}}function z(e){switch(e){case x.Digit0:return 0;case x.Digit1:return 1;case x.Digit2:return 2;case x.Digit3:return 3;case x.Digit4:return 4;case x.Digit5:return 5;case x.Digit6:return 6;case x.Digit7:return 7;case x.Digit8:return 8;case x.Digit9:return 9;case x.a:case x.A:return 10;case x.b:case x.B:return 11;case x.c:case x.C:return 12;case x.d:case x.D:return 13;case x.e:case x.E:return 14;case x.f:case x.F:return 15}return 0}const q=class{constructor(){this._disposed=!1}get event(){return null==this._event&&(this._event=(e,t,o)=>{null==this.listeners&&(this.listeners=new Q);const n=this.listeners.push(null==t?e:[e,t]),i={dispose:()=>{i.dispose=q._noop,this._disposed||n()}};return Array.isArray(o)&&o.push(i),i}),this._event}fire(e){if(null!=this.listeners){null==this._deliveryQueue&&(this._deliveryQueue=new Q);for(let t=this.listeners.iterator(),o=t.next();!o.done;o=t.next())this._deliveryQueue.push([o.value,e]);for(;this._deliveryQueue.size>0;){const[e,t]=this._deliveryQueue.shift();try{"function"==typeof e?e(t):e[0].call(e[1],t)}catch(e){}}}}dispose(){this.listeners?.clear(),this._deliveryQueue?.clear(),this._disposed=!0}};let V=q;V._noop=function(){};const W={done:!0,value:void 0},G=class{constructor(e){this.element=e,this.next=G.Undefined,this.prev=G.Undefined}};let Y=G;Y.Undefined=new G(void 0);class Q{constructor(){this._first=Y.Undefined,this._last=Y.Undefined,this._size=0}get size(){return this._size}isEmpty(){return this._first===Y.Undefined}clear(){this._first=Y.Undefined,this._last=Y.Undefined,this._size=0}unshift(e){return this._insert(e,!1)}push(e){return this._insert(e,!0)}_insert(e,t){const o=new Y(e);if(this._first===Y.Undefined)this._first=o,this._last=o;else if(t){const e=this._last;this._last=o,o.prev=e,e.next=o}else{const e=this._first;this._first=o,o.next=e,e.prev=o}this._size+=1;let n=!1;return()=>{n||(n=!0,this._remove(o))}}shift(){if(this._first===Y.Undefined)return;const e=this._first.element;return this._remove(this._first),e}pop(){if(this._last===Y.Undefined)return;const e=this._last.element;return this._remove(this._last),e}_remove(e){if(e.prev!==Y.Undefined&&e.next!==Y.Undefined){const t=e.prev;t.next=e.next,e.next.prev=t}else e.prev===Y.Undefined&&e.next===Y.Undefined?(this._first=Y.Undefined,this._last=Y.Undefined):e.next===Y.Undefined?(this._last=this._last.prev,this._last.next=Y.Undefined):e.prev===Y.Undefined&&(this._first=this._first.next,this._first.prev=Y.Undefined);this._size-=1}iterator(){let e,t=this._first;return{next:function(){return t===Y.Undefined?W:(null==e?e={done:!1,value:t.element}:e.value=t.element,t=t.next,e)}}}toArray(){const e=[];for(let t=this._first;t!==Y.Undefined;t=t.next)e.push(t.element);return e}}const K=new V,Z=K.event;function J(e){const t=document.documentElement,o=window.getComputedStyle(t),n=document.body.classList,i=n.contains("vscode-light")||n.contains("vscode-high-contrast-light"),r=n.contains("vscode-high-contrast")||n.contains("vscode-high-contrast-light"),s=t.style,a=N("--vscode-editor-background",o);let c=N("--vscode-editor-foreground",o);c||(c=N("--vscode-foreground",o));let l=N("--color-background",o);return s.setProperty("--color-background--lighten-05",E(l,5)),s.setProperty("--color-background--darken-05",S(l,5)),s.setProperty("--color-background--lighten-075",E(l,7.5)),s.setProperty("--color-background--darken-075",S(l,7.5)),s.setProperty("--color-background--lighten-10",E(l,10)),s.setProperty("--color-background--darken-10",S(l,10)),s.setProperty("--color-background--lighten-15",E(l,15)),s.setProperty("--color-background--darken-15",S(l,15)),s.setProperty("--color-background--lighten-30",E(l,30)),s.setProperty("--color-background--darken-30",S(l,30)),s.setProperty("--color-background--lighten-50",E(l,50)),s.setProperty("--color-background--darken-50",S(l,50)),l=N("--color-button-background",o),s.setProperty("--color-button-background--darken-30",S(l,30)),l=N("--color-highlight",o),s.setProperty("--color-highlight--75",P(l,75)),s.setProperty("--color-highlight--50",P(l,50)),s.setProperty("--color-highlight--25",P(l,25)),l=N("--color-button-secondary-background",o),s.setProperty("--color-button-secondary-background--darken-30",S(l,30)),l=N("--color-foreground",o),s.setProperty("--color-foreground--85",P(l,85)),s.setProperty("--color-foreground--75",P(l,75)),s.setProperty("--color-foreground--65",P(l,65)),s.setProperty("--color-foreground--50",P(l,50)),l=N("--color-link-foreground",o),s.setProperty("--color-link-foreground--darken-20",S(l,20)),s.setProperty("--color-link-foreground--lighten-20",E(l,20)),l=N("--color-alert-infoBackground",o),s.setProperty("--color-alert-infoHoverBackground",i?S(l,5):E(l,5)),l=N("--color-alert-warningBackground",o),s.setProperty("--color-alert-warningHoverBackground",i?S(l,5):E(l,5)),l=N("--color-alert-errorBackground",o),s.setProperty("--color-alert-errorHoverBackground",i?S(l,5):E(l,5)),l=i?S(a,5):E(a,5),s.setProperty("--color-alert-neutralBackground",l),s.setProperty("--color-alert-neutralHoverBackground",i?S(l,5):E(l,5)),{colors:{background:a,foreground:c},computedStyle:o,isLightTheme:i,isHighContrastTheme:r,isInitializing:null==e}}let X=0;function ee(){return 1073741824===X?X=1:X++,`webview:${X}`}class te{constructor(e){this.appName=e;const t=[],o=J();if(null!=this.onThemeUpdated&&(this.onThemeUpdated(o),t.push(Z(this.onThemeUpdated,this))),this.state=window.bootstrap,window.bootstrap=void 0,this.placement=document.body.getAttribute("data-placement")??"editor",y.configure({name:e,createChannel:function(e){return{name:e,appendLine:function(e){}}}},b.Off),this.log("ctor()"),this._api=acquireVsCodeApi(),null!=this.state){const e=this.getState();this.state.timestamp>=(e?.timestamp??0)?this._api.setState(this.state):this.state=e}t.push(function(){const e=new MutationObserver((e=>{K.fire(J(e))}));return e.observe(document.body,{attributeFilter:["class"]}),{dispose:()=>e.disconnect()}}()),requestAnimationFrame((()=>{this.log("ctor(): initializing...");try{this.onInitialize?.(),this.bind(),null!=this.onMessageReceived&&t.push(k.on(window,"message",this.onMessageReceived.bind(this))),this.sendCommand(c,void 0),this.onInitialized?.()}finally{document.body.classList.contains("preload")&&setTimeout((()=>{document.body.classList.remove("preload")}),500)}})),t.push(k.on(window,"pagehide",(()=>{t?.forEach((e=>e.dispose())),this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=void 0})))}bind(){this.bindDisposables?.forEach((e=>e.dispose())),this.bindDisposables=this.onBind?.(),null==this.bindDisposables&&(this.bindDisposables=[]);const e=p((e=>{this.sendCommand(l,e)}),150);this.bindDisposables.push(k.on(document,"focusin",(t=>{const o=t.composedPath().some((e=>"INPUT"===e.tagName));!0===this._focused&&this._inputFocused===o||(this._focused=!0,this._inputFocused=o,e({focused:!0,inputFocused:o}))})),k.on(document,"focusout",(()=>{!1===this._focused&&!1===this._inputFocused||(this._focused=!1,this._inputFocused=!1,e({focused:!1,inputFocused:!1}))})))}log(e,...t){y.log(e,...t)}getState(){return this._api.getState()}sendCommand(e,t){const o=ee();this.log(`sendCommand(${o}): name=${e.method}`),this.postMessage({id:o,method:e.method,params:t})}async sendCommandWithCompletion(e,t,o){const n=ee();this.log(`sendCommandWithCompletion(${n}): name=${e.method}`);const i=new Promise(((e,t)=>{let i;const r=[k.on(window,"message",(t=>{a(o,t.data,(o=>{t.data.completionId===n&&(r.forEach((e=>e.dispose())),queueMicrotask((()=>e(o))))}))})),{dispose:function(){null!=i&&(clearTimeout(i),i=void 0)}}];i=setTimeout((()=>{i=void 0,r.forEach((e=>e.dispose())),t(new Error(`Timed out waiting for completion of ${o.method}`))}),6e4)}));return this.postMessage({id:n,method:e.method,params:t,completionId:n}),i}setState(e){this._api.setState(e)}postMessage(e){this._api.postMessage(e)}}var oe=o(6544);const ne=window,ie=ne.ShadowRoot&&(void 0===ne.ShadyCSS||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,re=Symbol(),se=new WeakMap;class ae{constructor(e,t,o){if(this._$cssResult$=!0,o!==re)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ie&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=se.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&se.set(t,e))}return e}toString(){return this.cssText}}const ce=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new ae(o,e,re)},le=ie?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new ae("string"==typeof e?e:e+"",void 0,re))(t)})(e):e;var he;const de=window,ue=de.trustedTypes,fe=ue?ue.emptyScript:"",pe=de.reactiveElementPolyfillSupport,be={toAttribute(e,t){switch(t){case Boolean:e=e?fe:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},ge=(e,t)=>t!==e&&(t==t||e==e),me={attribute:!0,type:String,converter:be,reflect:!1,hasChanged:ge},ve="finalized";class ye extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=me){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||me}static finalize(){if(this.hasOwnProperty(ve))return!1;this[ve]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(le(e))}else void 0!==e&&t.push(le(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{ie?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),n=ne.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=me){var n;const i=this.constructor._$Ep(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:be).toAttribute(t,o.type);this._$El=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$El=null}}_$AK(e,t){var o;const n=this.constructor,i=n._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=n.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:be;this._$El=i,this[i]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||ge)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var we;ye[ve]=!0,ye.elementProperties=new Map,ye.elementStyles=[],ye.shadowRootOptions={mode:"open"},null==pe||pe({ReactiveElement:ye}),(null!==(he=de.reactiveElementVersions)&&void 0!==he?he:de.reactiveElementVersions=[]).push("1.6.2");const ke=window,_e=ke.trustedTypes,xe=_e?_e.createPolicy("lit-html",{createHTML:e=>e}):void 0,$e="$lit$",Ae=`lit$${(Math.random()+"").slice(9)}$`,Ce="?"+Ae,Se=`<${Ce}>`,Ee=document,Pe=()=>Ee.createComment(""),Te=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Oe=Array.isArray,Re=e=>Oe(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),Me="[ \t\n\f\r]",Ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Be=/-->/g,De=/>/g,Le=RegExp(`>|${Me}(?:([^\\s"'>=/]+)(${Me}*=${Me}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Fe=/'/g,Ie=/"/g,je=/^(?:script|style|textarea|title)$/i,Ue=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),He=Ue(1),ze=(Ue(2),Symbol.for("lit-noChange")),qe=Symbol.for("lit-nothing"),Ve=new WeakMap,We=Ee.createTreeWalker(Ee,129,null,!1);function Ge(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==xe?xe.createHTML(t):t}const Ye=(e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",s=Ne;for(let t=0;t<o;t++){const o=e[t];let a,c,l=-1,h=0;for(;h<o.length&&(s.lastIndex=h,c=s.exec(o),null!==c);)h=s.lastIndex,s===Ne?"!--"===c[1]?s=Be:void 0!==c[1]?s=De:void 0!==c[2]?(je.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Le):void 0!==c[3]&&(s=Le):s===Le?">"===c[0]?(s=null!=i?i:Ne,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?Le:'"'===c[3]?Ie:Fe):s===Ie||s===Fe?s=Le:s===Be||s===De?s=Ne:(s=Le,i=void 0);const d=s===Le&&e[t+1].startsWith("/>")?" ":"";r+=s===Ne?o+Se:l>=0?(n.push(a),o.slice(0,l)+$e+o.slice(l)+Ae+d):o+Ae+(-2===l?(n.push(void 0),t):d)}return[Ge(e,r+(e[o]||"<?>")+(2===t?"</svg>":"")),n]};class Qe{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const s=e.length-1,a=this.parts,[c,l]=Ye(e,t);if(this.el=Qe.createElement(c,o),We.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=We.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith($e)||t.startsWith(Ae)){const o=l[r++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+$e).split(Ae),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?et:"?"===t[1]?ot:"@"===t[1]?nt:Xe})}else a.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(je.test(n.tagName)){const e=n.textContent.split(Ae),t=e.length-1;if(t>0){n.textContent=_e?_e.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],Pe()),We.nextNode(),a.push({type:2,index:++i});n.append(e[t],Pe())}}}else if(8===n.nodeType)if(n.data===Ce)a.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(Ae,e+1));)a.push({type:7,index:i}),e+=Ae.length-1}i++}}static createElement(e,t){const o=Ee.createElement("template");return o.innerHTML=e,o}}function Ke(e,t,o=e,n){var i,r,s,a;if(t===ze)return t;let c=void 0!==n?null===(i=o._$Co)||void 0===i?void 0:i[n]:o._$Cl;const l=Te(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(s=(a=o)._$Co)&&void 0!==s?s:a._$Co=[])[n]=c:o._$Cl=c),void 0!==c&&(t=Ke(e,c._$AS(e,t.values),c,n)),t}class Ze{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:Ee).importNode(o,!0);We.currentNode=i;let r=We.nextNode(),s=0,a=0,c=n[0];for(;void 0!==c;){if(s===c.index){let t;2===c.type?t=new Je(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new it(r,this,e)),this._$AV.push(t),c=n[++a]}s!==(null==c?void 0:c.index)&&(r=We.nextNode(),s++)}return We.currentNode=Ee,i}v(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class Je{constructor(e,t,o,n){var i;this.type=2,this._$AH=qe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cp=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ke(this,e,t),Te(e)?e===qe||null==e||""===e?(this._$AH!==qe&&this._$AR(),this._$AH=qe):e!==this._$AH&&e!==ze&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):Re(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==qe&&Te(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ee.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=Qe.createElement(Ge(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(o);else{const e=new Ze(i,this),t=e.u(this.options);e.v(o),this.$(t),this._$AH=e}}_$AC(e){let t=Ve.get(e.strings);return void 0===t&&Ve.set(e.strings,t=new Qe(e)),t}T(e){Oe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new Je(this.k(Pe()),this.k(Pe()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Xe{constructor(e,t,o,n,i){this.type=1,this._$AH=qe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=qe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=Ke(this,e,t,0),r=!Te(e)||e!==this._$AH&&e!==ze,r&&(this._$AH=e);else{const n=e;let s,a;for(e=i[0],s=0;s<i.length-1;s++)a=Ke(this,n[o+s],t,s),a===ze&&(a=this._$AH[s]),r||(r=!Te(a)||a!==this._$AH[s]),a===qe?e=qe:e!==qe&&(e+=(null!=a?a:"")+i[s+1]),this._$AH[s]=a}r&&!n&&this.j(e)}j(e){e===qe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class et extends Xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===qe?void 0:e}}const tt=_e?_e.emptyScript:"";class ot extends Xe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==qe?this.element.setAttribute(this.name,tt):this.element.removeAttribute(this.name)}}class nt extends Xe{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=Ke(this,e,t,0))&&void 0!==o?o:qe)===ze)return;const n=this._$AH,i=e===qe&&n!==qe||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==qe&&(n===qe||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class it{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Ke(this,e)}}const rt={O:$e,P:Ae,A:Ce,C:1,M:Ye,L:Ze,D:Re,R:Ke,I:Je,V:Xe,H:ot,N:nt,U:et,F:it},st=ke.litHtmlPolyfillSupport;null==st||st(Qe,Je),(null!==(we=ke.litHtmlVersions)&&void 0!==we?we:ke.litHtmlVersions=[]).push("2.7.5");var at,ct;class lt extends ye{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,i;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let s=r._$litPart$;if(void 0===s){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=s=new Je(t.insertBefore(Pe(),e),e,void 0,null!=o?o:{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return ze}}lt.finalized=!0,lt._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:lt});const ht=globalThis.litElementPolyfillSupport;null==ht||ht({LitElement:lt});(null!==(ct=globalThis.litElementVersions)&&void 0!==ct?ct:globalThis.litElementVersions=[]).push("3.3.2");const dt=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){customElements.define(e,t)}}})(e,t),ut=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}},ft=(e,t,o)=>{t.constructor.createProperty(o,e)};function pt(e){return(t,o)=>void 0!==o?ft(e,t,o):ut(e,t)}function bt(e){return pt({...e,state:!0})}function gt(e,t){return(({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,r=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(r.finisher=function(t){e(t,n)}),r}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}})({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}var mt;null===(mt=window.HTMLSlotElement)||void 0===mt||mt.prototype.assignedElements;function*vt(e,t){if(void 0!==e){let o=0;for(const n of e)yield t(n,o++)}}const yt=2;class wt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:kt}=rt,_t=()=>document.createComment(""),xt=(e,t,o)=>{var n;const i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(_t(),r),n=i.insertBefore(_t(),r);o=new kt(t,n,e,e.options)}else{const t=o._$AB.nextSibling,s=o._$AM,a=s!==e;if(a){let t;null===(n=o._$AQ)||void 0===n||n.call(o,e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==s._$AU&&o._$AP(t)}if(t!==r||a){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,r),e=t}}}return o},$t=(e,t,o=e)=>(e._$AI(t,o),e),At={},Ct=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let o=e._$AA;const n=e._$AB.nextSibling;for(;o!==n;){const e=o.nextSibling;o.remove(),o=e}},St=(e,t,o)=>{const n=new Map;for(let i=t;i<=o;i++)n.set(e[i],i);return n},Et=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends wt{constructor(e){if(super(e),e.type!==yt)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const i=[],r=[];let s=0;for(const t of e)i[s]=n?n(t,s):s,r[s]=o(t,s),s++;return{values:r,keys:i}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){var i;const r=(e=>e._$AH)(e),{values:s,keys:a}=this.dt(t,o,n);if(!Array.isArray(r))return this.ht=a,s;const c=null!==(i=this.ht)&&void 0!==i?i:this.ht=[],l=[];let h,d,u=0,f=r.length-1,p=0,b=s.length-1;for(;u<=f&&p<=b;)if(null===r[u])u++;else if(null===r[f])f--;else if(c[u]===a[p])l[p]=$t(r[u],s[p]),u++,p++;else if(c[f]===a[b])l[b]=$t(r[f],s[b]),f--,b--;else if(c[u]===a[b])l[b]=$t(r[u],s[b]),xt(e,l[b+1],r[u]),u++,b--;else if(c[f]===a[p])l[p]=$t(r[f],s[p]),xt(e,r[u],r[f]),f--,p++;else if(void 0===h&&(h=St(a,p,b),d=St(c,u,f)),h.has(c[u]))if(h.has(c[f])){const t=d.get(a[p]),o=void 0!==t?r[t]:null;if(null===o){const t=xt(e,r[u]);$t(t,s[p]),l[p]=t}else l[p]=$t(o,s[p]),xt(e,r[u],o),r[t]=null;p++}else Ct(r[f]),f--;else Ct(r[u]),u++;for(;p<=b;){const t=xt(e,l[b+1]);$t(t,s[p]),l[p++]=t}for(;u<=f;){const e=r[u++];null!==e&&Ct(e)}return this.ht=a,((e,t=At)=>{e._$AH=t})(e,l),ze}});function Pt(e,t,o){return e?t():null==o?void 0:o()}const Tt=ce`
	:host {
		--gk-additions-color: var(--vscode-gitDecoration-addedResourceForeground);
		--gk-deletions-color: var(--vscode-gitDecoration-deletedResourceForeground);

		--gk-avatar-background-color: var(--background-10);
		--gk-tag-background-color: var(--background-10);
		--gk-text-secondary-color: var(--color-foreground--85);

		--gk-menu-border-color: var(--background-30);
		--gk-menu-background-color: var(--background-10);
		--gk-menu-item-background-color-hover: var(--background-15);
		--gk-menu-item-font-color-disabled: var(--color-foreground--50);

		--gk-button-ghost-color: var(--color-foreground);
		--gk-button-ghost-color-active: var(--color-foreground--85);
		--gk-button-ghost-color-disabled: var(--color-foreground--50);
		--gk-button-outline-color: var(--color-foreground);
		--gk-button-outline-color-active: var(--background-10);
		--gk-button-outline-color-disabled: var(--color-foreground--50);

		--gk-tooltip-background-color: var(--popover-bg); // var(--vscode-editorHoverWidget-background);
		--gk-tooltip-font-color: var(--color-foreground); // var(--vscode-editorHoverWidget-foreground);
		--gk-tooltip-font-weight: normal;
		--gk-tooltip-font-size: 1.2rem;
	}
`,Ot=(ce`
	.sr-only,
	.sr-only-focusable:not(:active):not(:focus) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
`,ce`
	outline: 1px solid var(--color-focus-border);
	outline-offset: -1px;
`),Rt=ce`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;ce`
	a {
		color: var(--vscode-textLink-foreground);
		text-decoration: none;
	}
	a:focus {
		${Ot}
	}
	a:hover {
		text-decoration: underline;
	}
`;var Mt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,Bt=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Nt(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Mt(t,o,r),r};let Dt=class extends lt{constructor(){super(...arguments),this.full=!1,this.tabIndex=0}get role(){return this.href?"link":"button"}render(){const e=He`<slot></slot>`;return null!=this.href?He`<a href=${this.href}>${e}</a>`:e}};Dt.styles=[Rt,ce`
			:host {
				--button-foreground: var(--color-button-foreground);
				--button-background: var(--color-button-background);
				--button-hover-background: var(--vscode-button-hoverBackground);
				--button-padding: 0.4rem 1.1rem;
				--button-line-height: 1.694;
				--button-border: var(--vscode-button-border, transparent);

				display: inline-block;
				border: none;
				font-family: inherit;
				font-size: inherit;
				line-height: var(--button-line-height);
				text-align: center;
				text-decoration: none;
				user-select: none;
				background: var(--button-background);
				color: var(--button-foreground);
				cursor: pointer;
				border: 1px solid var(--button-border);
				border-radius: var(--gk-action-radius);
			}

			:host(:not([href])) {
				padding: var(--button-padding);
			}

			:host([href]) > a {
				display: inline-block;
				padding: var(--button-padding);

				color: inherit;
				text-decoration: none;

				width: 100%;
				height: 100%;
			}

			:host(:hover) {
				background: var(--button-hover-background);
			}

			:host(:focus) {
				${Ot}
			}

			:host([full]) {
				width: 100%;
			}

			:host([appearance='secondary']) {
				--button-background: var(--vscode-button-secondaryBackground);
				--button-foreground: var(--vscode-button-secondaryForeground);
				--button-hover-background: var(--vscode-button-secondaryHoverBackground);
			}

			:host([appearance='toolbar']) {
				--button-background: transparent;
				--button-foreground: var(--vscode-foreground);
				--button-hover-background: var(--vscode-toolbar-hoverBackground);
				--button-padding: 0.4rem;
				--button-line-height: 1.6;
				--button-border: transparent;
			}

			:host([appearance='alert']) {
				--button-background: transparent;
				--button-border: var(--color-alert-infoBorder);
				--button-foreground: var(--color-button-foreground);
				--button-hover-background: var(--color-alert-infoBorder);
				--button-line-height: 1.64;
				width: max-content;
			}

			:host-context(.vscode-light):host([appearance='alert']:not(:hover)),
			:host-context(.vscode-high-contrast-light):host([appearance='alert']:not(:hover)) {
				--button-foreground: var(--color-foreground);
			}

			:host([appearance='toolbar'][href]) > a {
				display: flex;
				align-items: center;
			}

			:host([appearance='alert'][href]) > a {
				display: block;
				width: max-content;
			}
		`],Bt([pt({type:Boolean,reflect:!0})],Dt.prototype,"full",2),Bt([pt()],Dt.prototype,"href",2),Bt([pt({reflect:!0})],Dt.prototype,"role",1),Bt([pt()],Dt.prototype,"appearance",2),Bt([pt({type:Number,reflect:!0})],Dt.prototype,"tabIndex",2),Dt=Bt([dt("gl-button")],Dt);var Lt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,It=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Ft(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Lt(t,o,r),r};let jt=class extends lt{constructor(){super(...arguments),this.icon="",this.modifier="",this.size=16}updated(e){e.has("size")&&this.style.setProperty("--code-icon-size",`${this.size}px`),super.update(e)}};jt.styles=ce`
		:host {
			font: normal normal normal var(--code-icon-size, 16px) / 1 codicon;
			display: inline-block;
			text-decoration: none;
			text-rendering: auto;
			text-align: center;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			color: inherit;
			vertical-align: text-bottom;
			letter-spacing: normal;
		}

		:host([icon='add']):before {
			content: '\\ea60';
		}
		:host([icon='plus']):before {
			content: '\\ea60';
		}
		:host([icon='gist-new']):before {
			content: '\\ea60';
		}
		:host([icon='repo-create']):before {
			content: '\\ea60';
		}
		:host([icon='lightbulb']):before {
			content: '\\ea61';
		}
		:host([icon='light-bulb']):before {
			content: '\\ea61';
		}
		:host([icon='repo']):before {
			content: '\\ea62';
		}
		:host([icon='repo-delete']):before {
			content: '\\ea62';
		}
		:host([icon='gist-fork']):before {
			content: '\\ea63';
		}
		:host([icon='repo-forked']):before {
			content: '\\ea63';
		}
		:host([icon='git-pull-request']):before {
			content: '\\ea64';
		}
		:host([icon='git-pull-request-abandoned']):before {
			content: '\\ea64';
		}
		:host([icon='record-keys']):before {
			content: '\\ea65';
		}
		:host([icon='keyboard']):before {
			content: '\\ea65';
		}
		:host([icon='tag']):before {
			content: '\\ea66';
		}
		:host([icon='tag-add']):before {
			content: '\\ea66';
		}
		:host([icon='tag-remove']):before {
			content: '\\ea66';
		}
		:host([icon='person']):before {
			content: '\\ea67';
		}
		:host([icon='person-follow']):before {
			content: '\\ea67';
		}
		:host([icon='person-outline']):before {
			content: '\\ea67';
		}
		:host([icon='person-filled']):before {
			content: '\\ea67';
		}
		:host([icon='git-branch']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-create']):before {
			content: '\\ea68';
		}
		:host([icon='git-branch-delete']):before {
			content: '\\ea68';
		}
		:host([icon='source-control']):before {
			content: '\\ea68';
		}
		:host([icon='mirror']):before {
			content: '\\ea69';
		}
		:host([icon='mirror-public']):before {
			content: '\\ea69';
		}
		:host([icon='star']):before {
			content: '\\ea6a';
		}
		:host([icon='star-add']):before {
			content: '\\ea6a';
		}
		:host([icon='star-delete']):before {
			content: '\\ea6a';
		}
		:host([icon='star-empty']):before {
			content: '\\ea6a';
		}
		:host([icon='comment']):before {
			content: '\\ea6b';
		}
		:host([icon='comment-add']):before {
			content: '\\ea6b';
		}
		:host([icon='alert']):before {
			content: '\\ea6c';
		}
		:host([icon='warning']):before {
			content: '\\ea6c';
		}
		:host([icon='search']):before {
			content: '\\ea6d';
		}
		:host([icon='search-save']):before {
			content: '\\ea6d';
		}
		:host([icon='log-out']):before {
			content: '\\ea6e';
		}
		:host([icon='sign-out']):before {
			content: '\\ea6e';
		}
		:host([icon='log-in']):before {
			content: '\\ea6f';
		}
		:host([icon='sign-in']):before {
			content: '\\ea6f';
		}
		:host([icon='eye']):before {
			content: '\\ea70';
		}
		:host([icon='eye-unwatch']):before {
			content: '\\ea70';
		}
		:host([icon='eye-watch']):before {
			content: '\\ea70';
		}
		:host([icon='circle-filled']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-dot']):before {
			content: '\\ea71';
		}
		:host([icon='close-dirty']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint']):before {
			content: '\\ea71';
		}
		:host([icon='debug-breakpoint-disabled']):before {
			content: '\\ea71';
		}
		:host([icon='debug-hint']):before {
			content: '\\ea71';
		}
		:host([icon='primitive-square']):before {
			content: '\\ea72';
		}
		:host([icon='edit']):before {
			content: '\\ea73';
		}
		:host([icon='pencil']):before {
			content: '\\ea73';
		}
		:host([icon='info']):before {
			content: '\\ea74';
		}
		:host([icon='issue-opened']):before {
			content: '\\ea74';
		}
		:host([icon='gist-private']):before {
			content: '\\ea75';
		}
		:host([icon='git-fork-private']):before {
			content: '\\ea75';
		}
		:host([icon='lock']):before {
			content: '\\ea75';
		}
		:host([icon='mirror-private']):before {
			content: '\\ea75';
		}
		:host([icon='close']):before {
			content: '\\ea76';
		}
		:host([icon='remove-close']):before {
			content: '\\ea76';
		}
		:host([icon='x']):before {
			content: '\\ea76';
		}
		:host([icon='repo-sync']):before {
			content: '\\ea77';
		}
		:host([icon='sync']):before {
			content: '\\ea77';
		}
		:host([icon='clone']):before {
			content: '\\ea78';
		}
		:host([icon='desktop-download']):before {
			content: '\\ea78';
		}
		:host([icon='beaker']):before {
			content: '\\ea79';
		}
		:host([icon='microscope']):before {
			content: '\\ea79';
		}
		:host([icon='vm']):before {
			content: '\\ea7a';
		}
		:host([icon='device-desktop']):before {
			content: '\\ea7a';
		}
		:host([icon='file']):before {
			content: '\\ea7b';
		}
		:host([icon='file-text']):before {
			content: '\\ea7b';
		}
		:host([icon='more']):before {
			content: '\\ea7c';
		}
		:host([icon='ellipsis']):before {
			content: '\\ea7c';
		}
		:host([icon='kebab-horizontal']):before {
			content: '\\ea7c';
		}
		:host([icon='mail-reply']):before {
			content: '\\ea7d';
		}
		:host([icon='reply']):before {
			content: '\\ea7d';
		}
		:host([icon='organization']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-filled']):before {
			content: '\\ea7e';
		}
		:host([icon='organization-outline']):before {
			content: '\\ea7e';
		}
		:host([icon='new-file']):before {
			content: '\\ea7f';
		}
		:host([icon='file-add']):before {
			content: '\\ea7f';
		}
		:host([icon='new-folder']):before {
			content: '\\ea80';
		}
		:host([icon='file-directory-create']):before {
			content: '\\ea80';
		}
		:host([icon='trash']):before {
			content: '\\ea81';
		}
		:host([icon='trashcan']):before {
			content: '\\ea81';
		}
		:host([icon='history']):before {
			content: '\\ea82';
		}
		:host([icon='clock']):before {
			content: '\\ea82';
		}
		:host([icon='folder']):before {
			content: '\\ea83';
		}
		:host([icon='file-directory']):before {
			content: '\\ea83';
		}
		:host([icon='symbol-folder']):before {
			content: '\\ea83';
		}
		:host([icon='logo-github']):before {
			content: '\\ea84';
		}
		:host([icon='mark-github']):before {
			content: '\\ea84';
		}
		:host([icon='github']):before {
			content: '\\ea84';
		}
		:host([icon='terminal']):before {
			content: '\\ea85';
		}
		:host([icon='console']):before {
			content: '\\ea85';
		}
		:host([icon='repl']):before {
			content: '\\ea85';
		}
		:host([icon='zap']):before {
			content: '\\ea86';
		}
		:host([icon='symbol-event']):before {
			content: '\\ea86';
		}
		:host([icon='error']):before {
			content: '\\ea87';
		}
		:host([icon='stop']):before {
			content: '\\ea87';
		}
		:host([icon='variable']):before {
			content: '\\ea88';
		}
		:host([icon='symbol-variable']):before {
			content: '\\ea88';
		}
		:host([icon='array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-array']):before {
			content: '\\ea8a';
		}
		:host([icon='symbol-module']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-package']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-namespace']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-object']):before {
			content: '\\ea8b';
		}
		:host([icon='symbol-method']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-function']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-constructor']):before {
			content: '\\ea8c';
		}
		:host([icon='symbol-boolean']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-null']):before {
			content: '\\ea8f';
		}
		:host([icon='symbol-numeric']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-number']):before {
			content: '\\ea90';
		}
		:host([icon='symbol-structure']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-struct']):before {
			content: '\\ea91';
		}
		:host([icon='symbol-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-type-parameter']):before {
			content: '\\ea92';
		}
		:host([icon='symbol-key']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-text']):before {
			content: '\\ea93';
		}
		:host([icon='symbol-reference']):before {
			content: '\\ea94';
		}
		:host([icon='go-to-file']):before {
			content: '\\ea94';
		}
		:host([icon='symbol-enum']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-value']):before {
			content: '\\ea95';
		}
		:host([icon='symbol-ruler']):before {
			content: '\\ea96';
		}
		:host([icon='symbol-unit']):before {
			content: '\\ea96';
		}
		:host([icon='activate-breakpoints']):before {
			content: '\\ea97';
		}
		:host([icon='archive']):before {
			content: '\\ea98';
		}
		:host([icon='arrow-both']):before {
			content: '\\ea99';
		}
		:host([icon='arrow-down']):before {
			content: '\\ea9a';
		}
		:host([icon='arrow-left']):before {
			content: '\\ea9b';
		}
		:host([icon='arrow-right']):before {
			content: '\\ea9c';
		}
		:host([icon='arrow-small-down']):before {
			content: '\\ea9d';
		}
		:host([icon='arrow-small-left']):before {
			content: '\\ea9e';
		}
		:host([icon='arrow-small-right']):before {
			content: '\\ea9f';
		}
		:host([icon='arrow-small-up']):before {
			content: '\\eaa0';
		}
		:host([icon='arrow-up']):before {
			content: '\\eaa1';
		}
		:host([icon='bell']):before {
			content: '\\eaa2';
		}
		:host([icon='bold']):before {
			content: '\\eaa3';
		}
		:host([icon='book']):before {
			content: '\\eaa4';
		}
		:host([icon='bookmark']):before {
			content: '\\eaa5';
		}
		:host([icon='debug-breakpoint-conditional-unverified']):before {
			content: '\\eaa6';
		}
		:host([icon='debug-breakpoint-conditional']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-conditional-disabled']):before {
			content: '\\eaa7';
		}
		:host([icon='debug-breakpoint-data-unverified']):before {
			content: '\\eaa8';
		}
		:host([icon='debug-breakpoint-data']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-data-disabled']):before {
			content: '\\eaa9';
		}
		:host([icon='debug-breakpoint-log-unverified']):before {
			content: '\\eaaa';
		}
		:host([icon='debug-breakpoint-log']):before {
			content: '\\eaab';
		}
		:host([icon='debug-breakpoint-log-disabled']):before {
			content: '\\eaab';
		}
		:host([icon='briefcase']):before {
			content: '\\eaac';
		}
		:host([icon='broadcast']):before {
			content: '\\eaad';
		}
		:host([icon='browser']):before {
			content: '\\eaae';
		}
		:host([icon='bug']):before {
			content: '\\eaaf';
		}
		:host([icon='calendar']):before {
			content: '\\eab0';
		}
		:host([icon='case-sensitive']):before {
			content: '\\eab1';
		}
		:host([icon='check']):before {
			content: '\\eab2';
		}
		:host([icon='checklist']):before {
			content: '\\eab3';
		}
		:host([icon='chevron-down']):before {
			content: '\\eab4';
		}
		:host([icon='chevron-left']):before {
			content: '\\eab5';
		}
		:host([icon='chevron-right']):before {
			content: '\\eab6';
		}
		:host([icon='chevron-up']):before {
			content: '\\eab7';
		}
		:host([icon='chrome-close']):before {
			content: '\\eab8';
		}
		:host([icon='chrome-maximize']):before {
			content: '\\eab9';
		}
		:host([icon='chrome-minimize']):before {
			content: '\\eaba';
		}
		:host([icon='chrome-restore']):before {
			content: '\\eabb';
		}
		:host([icon='circle-outline']):before {
			content: '\\eabc';
		}
		:host([icon='debug-breakpoint-unverified']):before {
			content: '\\eabc';
		}
		:host([icon='circle-slash']):before {
			content: '\\eabd';
		}
		:host([icon='circuit-board']):before {
			content: '\\eabe';
		}
		:host([icon='clear-all']):before {
			content: '\\eabf';
		}
		:host([icon='clippy']):before {
			content: '\\eac0';
		}
		:host([icon='close-all']):before {
			content: '\\eac1';
		}
		:host([icon='cloud-download']):before {
			content: '\\eac2';
		}
		:host([icon='cloud-upload']):before {
			content: '\\eac3';
		}
		:host([icon='code']):before {
			content: '\\eac4';
		}
		:host([icon='collapse-all']):before {
			content: '\\eac5';
		}
		:host([icon='color-mode']):before {
			content: '\\eac6';
		}
		:host([icon='comment-discussion']):before {
			content: '\\eac7';
		}
		:host([icon='credit-card']):before {
			content: '\\eac9';
		}
		:host([icon='dash']):before {
			content: '\\eacc';
		}
		:host([icon='dashboard']):before {
			content: '\\eacd';
		}
		:host([icon='database']):before {
			content: '\\eace';
		}
		:host([icon='debug-continue']):before {
			content: '\\eacf';
		}
		:host([icon='debug-disconnect']):before {
			content: '\\ead0';
		}
		:host([icon='debug-pause']):before {
			content: '\\ead1';
		}
		:host([icon='debug-restart']):before {
			content: '\\ead2';
		}
		:host([icon='debug-start']):before {
			content: '\\ead3';
		}
		:host([icon='debug-step-into']):before {
			content: '\\ead4';
		}
		:host([icon='debug-step-out']):before {
			content: '\\ead5';
		}
		:host([icon='debug-step-over']):before {
			content: '\\ead6';
		}
		:host([icon='debug-stop']):before {
			content: '\\ead7';
		}
		:host([icon='debug']):before {
			content: '\\ead8';
		}
		:host([icon='device-camera-video']):before {
			content: '\\ead9';
		}
		:host([icon='device-camera']):before {
			content: '\\eada';
		}
		:host([icon='device-mobile']):before {
			content: '\\eadb';
		}
		:host([icon='diff-added']):before {
			content: '\\eadc';
		}
		:host([icon='diff-ignored']):before {
			content: '\\eadd';
		}
		:host([icon='diff-modified']):before {
			content: '\\eade';
		}
		:host([icon='diff-removed']):before {
			content: '\\eadf';
		}
		:host([icon='diff-renamed']):before {
			content: '\\eae0';
		}
		:host([icon='diff']):before {
			content: '\\eae1';
		}
		:host([icon='discard']):before {
			content: '\\eae2';
		}
		:host([icon='editor-layout']):before {
			content: '\\eae3';
		}
		:host([icon='empty-window']):before {
			content: '\\eae4';
		}
		:host([icon='exclude']):before {
			content: '\\eae5';
		}
		:host([icon='extensions']):before {
			content: '\\eae6';
		}
		:host([icon='eye-closed']):before {
			content: '\\eae7';
		}
		:host([icon='file-binary']):before {
			content: '\\eae8';
		}
		:host([icon='file-code']):before {
			content: '\\eae9';
		}
		:host([icon='file-media']):before {
			content: '\\eaea';
		}
		:host([icon='file-pdf']):before {
			content: '\\eaeb';
		}
		:host([icon='file-submodule']):before {
			content: '\\eaec';
		}
		:host([icon='file-symlink-directory']):before {
			content: '\\eaed';
		}
		:host([icon='file-symlink-file']):before {
			content: '\\eaee';
		}
		:host([icon='file-zip']):before {
			content: '\\eaef';
		}
		:host([icon='files']):before {
			content: '\\eaf0';
		}
		:host([icon='filter']):before {
			content: '\\eaf1';
		}
		:host([icon='flame']):before {
			content: '\\eaf2';
		}
		:host([icon='fold-down']):before {
			content: '\\eaf3';
		}
		:host([icon='fold-up']):before {
			content: '\\eaf4';
		}
		:host([icon='fold']):before {
			content: '\\eaf5';
		}
		:host([icon='folder-active']):before {
			content: '\\eaf6';
		}
		:host([icon='folder-opened']):before {
			content: '\\eaf7';
		}
		:host([icon='gear']):before {
			content: '\\eaf8';
		}
		:host([icon='gift']):before {
			content: '\\eaf9';
		}
		:host([icon='gist-secret']):before {
			content: '\\eafa';
		}
		:host([icon='gist']):before {
			content: '\\eafb';
		}
		:host([icon='git-commit']):before {
			content: '\\eafc';
		}
		:host([icon='git-compare']):before {
			content: '\\eafd';
		}
		:host([icon='compare-changes']):before {
			content: '\\eafd';
		}
		:host([icon='git-merge']):before {
			content: '\\eafe';
		}
		:host([icon='github-action']):before {
			content: '\\eaff';
		}
		:host([icon='github-alt']):before {
			content: '\\eb00';
		}
		:host([icon='globe']):before {
			content: '\\eb01';
		}
		:host([icon='grabber']):before {
			content: '\\eb02';
		}
		:host([icon='graph']):before {
			content: '\\eb03';
		}
		:host([icon='gripper']):before {
			content: '\\eb04';
		}
		:host([icon='heart']):before {
			content: '\\eb05';
		}
		:host([icon='home']):before {
			content: '\\eb06';
		}
		:host([icon='horizontal-rule']):before {
			content: '\\eb07';
		}
		:host([icon='hubot']):before {
			content: '\\eb08';
		}
		:host([icon='inbox']):before {
			content: '\\eb09';
		}
		:host([icon='issue-reopened']):before {
			content: '\\eb0b';
		}
		:host([icon='issues']):before {
			content: '\\eb0c';
		}
		:host([icon='italic']):before {
			content: '\\eb0d';
		}
		:host([icon='jersey']):before {
			content: '\\eb0e';
		}
		:host([icon='json']):before {
			content: '\\eb0f';
		}
		:host([icon='kebab-vertical']):before {
			content: '\\eb10';
		}
		:host([icon='key']):before {
			content: '\\eb11';
		}
		:host([icon='law']):before {
			content: '\\eb12';
		}
		:host([icon='lightbulb-autofix']):before {
			content: '\\eb13';
		}
		:host([icon='link-external']):before {
			content: '\\eb14';
		}
		:host([icon='link']):before {
			content: '\\eb15';
		}
		:host([icon='list-ordered']):before {
			content: '\\eb16';
		}
		:host([icon='list-unordered']):before {
			content: '\\eb17';
		}
		:host([icon='live-share']):before {
			content: '\\eb18';
		}
		:host([icon='loading']):before {
			content: '\\eb19';
		}
		:host([icon='location']):before {
			content: '\\eb1a';
		}
		:host([icon='mail-read']):before {
			content: '\\eb1b';
		}
		:host([icon='mail']):before {
			content: '\\eb1c';
		}
		:host([icon='markdown']):before {
			content: '\\eb1d';
		}
		:host([icon='megaphone']):before {
			content: '\\eb1e';
		}
		:host([icon='mention']):before {
			content: '\\eb1f';
		}
		:host([icon='milestone']):before {
			content: '\\eb20';
		}
		:host([icon='mortar-board']):before {
			content: '\\eb21';
		}
		:host([icon='move']):before {
			content: '\\eb22';
		}
		:host([icon='multiple-windows']):before {
			content: '\\eb23';
		}
		:host([icon='mute']):before {
			content: '\\eb24';
		}
		:host([icon='no-newline']):before {
			content: '\\eb25';
		}
		:host([icon='note']):before {
			content: '\\eb26';
		}
		:host([icon='octoface']):before {
			content: '\\eb27';
		}
		:host([icon='open-preview']):before {
			content: '\\eb28';
		}
		:host([icon='package']):before {
			content: '\\eb29';
		}
		:host([icon='paintcan']):before {
			content: '\\eb2a';
		}
		:host([icon='pin']):before {
			content: '\\eb2b';
		}
		:host([icon='play']):before {
			content: '\\eb2c';
		}
		:host([icon='run']):before {
			content: '\\eb2c';
		}
		:host([icon='plug']):before {
			content: '\\eb2d';
		}
		:host([icon='preserve-case']):before {
			content: '\\eb2e';
		}
		:host([icon='preview']):before {
			content: '\\eb2f';
		}
		:host([icon='project']):before {
			content: '\\eb30';
		}
		:host([icon='pulse']):before {
			content: '\\eb31';
		}
		:host([icon='question']):before {
			content: '\\eb32';
		}
		:host([icon='quote']):before {
			content: '\\eb33';
		}
		:host([icon='radio-tower']):before {
			content: '\\eb34';
		}
		:host([icon='reactions']):before {
			content: '\\eb35';
		}
		:host([icon='references']):before {
			content: '\\eb36';
		}
		:host([icon='refresh']):before {
			content: '\\eb37';
		}
		:host([icon='regex']):before {
			content: '\\eb38';
		}
		:host([icon='remote-explorer']):before {
			content: '\\eb39';
		}
		:host([icon='remote']):before {
			content: '\\eb3a';
		}
		:host([icon='remove']):before {
			content: '\\eb3b';
		}
		:host([icon='replace-all']):before {
			content: '\\eb3c';
		}
		:host([icon='replace']):before {
			content: '\\eb3d';
		}
		:host([icon='repo-clone']):before {
			content: '\\eb3e';
		}
		:host([icon='repo-force-push']):before {
			content: '\\eb3f';
		}
		:host([icon='repo-pull']):before {
			content: '\\eb40';
		}
		:host([icon='repo-push']):before {
			content: '\\eb41';
		}
		:host([icon='report']):before {
			content: '\\eb42';
		}
		:host([icon='request-changes']):before {
			content: '\\eb43';
		}
		:host([icon='rocket']):before {
			content: '\\eb44';
		}
		:host([icon='root-folder-opened']):before {
			content: '\\eb45';
		}
		:host([icon='root-folder']):before {
			content: '\\eb46';
		}
		:host([icon='rss']):before {
			content: '\\eb47';
		}
		:host([icon='ruby']):before {
			content: '\\eb48';
		}
		:host([icon='save-all']):before {
			content: '\\eb49';
		}
		:host([icon='save-as']):before {
			content: '\\eb4a';
		}
		:host([icon='save']):before {
			content: '\\eb4b';
		}
		:host([icon='screen-full']):before {
			content: '\\eb4c';
		}
		:host([icon='screen-normal']):before {
			content: '\\eb4d';
		}
		:host([icon='search-stop']):before {
			content: '\\eb4e';
		}
		:host([icon='server']):before {
			content: '\\eb50';
		}
		:host([icon='settings-gear']):before {
			content: '\\eb51';
		}
		:host([icon='settings']):before {
			content: '\\eb52';
		}
		:host([icon='shield']):before {
			content: '\\eb53';
		}
		:host([icon='smiley']):before {
			content: '\\eb54';
		}
		:host([icon='sort-precedence']):before {
			content: '\\eb55';
		}
		:host([icon='split-horizontal']):before {
			content: '\\eb56';
		}
		:host([icon='split-vertical']):before {
			content: '\\eb57';
		}
		:host([icon='squirrel']):before {
			content: '\\eb58';
		}
		:host([icon='star-full']):before {
			content: '\\eb59';
		}
		:host([icon='star-half']):before {
			content: '\\eb5a';
		}
		:host([icon='symbol-class']):before {
			content: '\\eb5b';
		}
		:host([icon='symbol-color']):before {
			content: '\\eb5c';
		}
		:host([icon='symbol-constant']):before {
			content: '\\eb5d';
		}
		:host([icon='symbol-enum-member']):before {
			content: '\\eb5e';
		}
		:host([icon='symbol-field']):before {
			content: '\\eb5f';
		}
		:host([icon='symbol-file']):before {
			content: '\\eb60';
		}
		:host([icon='symbol-interface']):before {
			content: '\\eb61';
		}
		:host([icon='symbol-keyword']):before {
			content: '\\eb62';
		}
		:host([icon='symbol-misc']):before {
			content: '\\eb63';
		}
		:host([icon='symbol-operator']):before {
			content: '\\eb64';
		}
		:host([icon='symbol-property']):before {
			content: '\\eb65';
		}
		:host([icon='wrench']):before {
			content: '\\eb65';
		}
		:host([icon='wrench-subaction']):before {
			content: '\\eb65';
		}
		:host([icon='symbol-snippet']):before {
			content: '\\eb66';
		}
		:host([icon='tasklist']):before {
			content: '\\eb67';
		}
		:host([icon='telescope']):before {
			content: '\\eb68';
		}
		:host([icon='text-size']):before {
			content: '\\eb69';
		}
		:host([icon='three-bars']):before {
			content: '\\eb6a';
		}
		:host([icon='thumbsdown']):before {
			content: '\\eb6b';
		}
		:host([icon='thumbsup']):before {
			content: '\\eb6c';
		}
		:host([icon='tools']):before {
			content: '\\eb6d';
		}
		:host([icon='triangle-down']):before {
			content: '\\eb6e';
		}
		:host([icon='triangle-left']):before {
			content: '\\eb6f';
		}
		:host([icon='triangle-right']):before {
			content: '\\eb70';
		}
		:host([icon='triangle-up']):before {
			content: '\\eb71';
		}
		:host([icon='twitter']):before {
			content: '\\eb72';
		}
		:host([icon='unfold']):before {
			content: '\\eb73';
		}
		:host([icon='unlock']):before {
			content: '\\eb74';
		}
		:host([icon='unmute']):before {
			content: '\\eb75';
		}
		:host([icon='unverified']):before {
			content: '\\eb76';
		}
		:host([icon='verified']):before {
			content: '\\eb77';
		}
		:host([icon='versions']):before {
			content: '\\eb78';
		}
		:host([icon='vm-active']):before {
			content: '\\eb79';
		}
		:host([icon='vm-outline']):before {
			content: '\\eb7a';
		}
		:host([icon='vm-running']):before {
			content: '\\eb7b';
		}
		:host([icon='watch']):before {
			content: '\\eb7c';
		}
		:host([icon='whitespace']):before {
			content: '\\eb7d';
		}
		:host([icon='whole-word']):before {
			content: '\\eb7e';
		}
		:host([icon='window']):before {
			content: '\\eb7f';
		}
		:host([icon='word-wrap']):before {
			content: '\\eb80';
		}
		:host([icon='zoom-in']):before {
			content: '\\eb81';
		}
		:host([icon='zoom-out']):before {
			content: '\\eb82';
		}
		:host([icon='list-filter']):before {
			content: '\\eb83';
		}
		:host([icon='list-flat']):before {
			content: '\\eb84';
		}
		:host([icon='list-selection']):before {
			content: '\\eb85';
		}
		:host([icon='selection']):before {
			content: '\\eb85';
		}
		:host([icon='list-tree']):before {
			content: '\\eb86';
		}
		:host([icon='debug-breakpoint-function-unverified']):before {
			content: '\\eb87';
		}
		:host([icon='debug-breakpoint-function']):before {
			content: '\\eb88';
		}
		:host([icon='debug-breakpoint-function-disabled']):before {
			content: '\\eb88';
		}
		:host([icon='debug-stackframe-active']):before {
			content: '\\eb89';
		}
		:host([icon='debug-stackframe-dot']):before {
			content: '\\eb8a';
		}
		:host([icon='debug-stackframe']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-stackframe-focused']):before {
			content: '\\eb8b';
		}
		:host([icon='debug-breakpoint-unsupported']):before {
			content: '\\eb8c';
		}
		:host([icon='symbol-string']):before {
			content: '\\eb8d';
		}
		:host([icon='debug-reverse-continue']):before {
			content: '\\eb8e';
		}
		:host([icon='debug-step-back']):before {
			content: '\\eb8f';
		}
		:host([icon='debug-restart-frame']):before {
			content: '\\eb90';
		}
		:host([icon='debug-alt']):before {
			content: '\\eb91';
		}
		:host([icon='call-incoming']):before {
			content: '\\eb92';
		}
		:host([icon='call-outgoing']):before {
			content: '\\eb93';
		}
		:host([icon='menu']):before {
			content: '\\eb94';
		}
		:host([icon='expand-all']):before {
			content: '\\eb95';
		}
		:host([icon='feedback']):before {
			content: '\\eb96';
		}
		:host([icon='group-by-ref-type']):before {
			content: '\\eb97';
		}
		:host([icon='ungroup-by-ref-type']):before {
			content: '\\eb98';
		}
		:host([icon='account']):before {
			content: '\\eb99';
		}
		:host([icon='bell-dot']):before {
			content: '\\eb9a';
		}
		:host([icon='debug-console']):before {
			content: '\\eb9b';
		}
		:host([icon='library']):before {
			content: '\\eb9c';
		}
		:host([icon='output']):before {
			content: '\\eb9d';
		}
		:host([icon='run-all']):before {
			content: '\\eb9e';
		}
		:host([icon='sync-ignored']):before {
			content: '\\eb9f';
		}
		:host([icon='pinned']):before {
			content: '\\eba0';
		}
		:host([icon='github-inverted']):before {
			content: '\\eba1';
		}
		:host([icon='server-process']):before {
			content: '\\eba2';
		}
		:host([icon='server-environment']):before {
			content: '\\eba3';
		}
		:host([icon='pass']):before {
			content: '\\eba4';
		}
		:host([icon='issue-closed']):before {
			content: '\\eba4';
		}
		:host([icon='stop-circle']):before {
			content: '\\eba5';
		}
		:host([icon='play-circle']):before {
			content: '\\eba6';
		}
		:host([icon='record']):before {
			content: '\\eba7';
		}
		:host([icon='debug-alt-small']):before {
			content: '\\eba8';
		}
		:host([icon='vm-connect']):before {
			content: '\\eba9';
		}
		:host([icon='cloud']):before {
			content: '\\ebaa';
		}
		:host([icon='merge']):before {
			content: '\\ebab';
		}
		:host([icon='export']):before {
			content: '\\ebac';
		}
		:host([icon='graph-left']):before {
			content: '\\ebad';
		}
		:host([icon='magnet']):before {
			content: '\\ebae';
		}
		:host([icon='notebook']):before {
			content: '\\ebaf';
		}
		:host([icon='redo']):before {
			content: '\\ebb0';
		}
		:host([icon='check-all']):before {
			content: '\\ebb1';
		}
		:host([icon='pinned-dirty']):before {
			content: '\\ebb2';
		}
		:host([icon='pass-filled']):before {
			content: '\\ebb3';
		}
		:host([icon='circle-large-filled']):before {
			content: '\\ebb4';
		}
		:host([icon='circle-large-outline']):before {
			content: '\\ebb5';
		}
		:host([icon='combine']):before {
			content: '\\ebb6';
		}
		:host([icon='gather']):before {
			content: '\\ebb6';
		}
		:host([icon='table']):before {
			content: '\\ebb7';
		}
		:host([icon='variable-group']):before {
			content: '\\ebb8';
		}
		:host([icon='type-hierarchy']):before {
			content: '\\ebb9';
		}
		:host([icon='type-hierarchy-sub']):before {
			content: '\\ebba';
		}
		:host([icon='type-hierarchy-super']):before {
			content: '\\ebbb';
		}
		:host([icon='git-pull-request-create']):before {
			content: '\\ebbc';
		}
		:host([icon='run-above']):before {
			content: '\\ebbd';
		}
		:host([icon='run-below']):before {
			content: '\\ebbe';
		}
		:host([icon='notebook-template']):before {
			content: '\\ebbf';
		}
		:host([icon='debug-rerun']):before {
			content: '\\ebc0';
		}
		:host([icon='workspace-trusted']):before {
			content: '\\ebc1';
		}
		:host([icon='workspace-untrusted']):before {
			content: '\\ebc2';
		}
		:host([icon='workspace-unknown']):before {
			content: '\\ebc3';
		}
		:host([icon='terminal-cmd']):before {
			content: '\\ebc4';
		}
		:host([icon='terminal-debian']):before {
			content: '\\ebc5';
		}
		:host([icon='terminal-linux']):before {
			content: '\\ebc6';
		}
		:host([icon='terminal-powershell']):before {
			content: '\\ebc7';
		}
		:host([icon='terminal-tmux']):before {
			content: '\\ebc8';
		}
		:host([icon='terminal-ubuntu']):before {
			content: '\\ebc9';
		}
		:host([icon='terminal-bash']):before {
			content: '\\ebca';
		}
		:host([icon='arrow-swap']):before {
			content: '\\ebcb';
		}
		:host([icon='copy']):before {
			content: '\\ebcc';
		}
		:host([icon='person-add']):before {
			content: '\\ebcd';
		}
		:host([icon='filter-filled']):before {
			content: '\\ebce';
		}
		:host([icon='wand']):before {
			content: '\\ebcf';
		}
		:host([icon='debug-line-by-line']):before {
			content: '\\ebd0';
		}
		:host([icon='inspect']):before {
			content: '\\ebd1';
		}
		:host([icon='layers']):before {
			content: '\\ebd2';
		}
		:host([icon='layers-dot']):before {
			content: '\\ebd3';
		}
		:host([icon='layers-active']):before {
			content: '\\ebd4';
		}
		:host([icon='compass']):before {
			content: '\\ebd5';
		}
		:host([icon='compass-dot']):before {
			content: '\\ebd6';
		}
		:host([icon='compass-active']):before {
			content: '\\ebd7';
		}
		:host([icon='azure']):before {
			content: '\\ebd8';
		}
		:host([icon='issue-draft']):before {
			content: '\\ebd9';
		}
		:host([icon='git-pull-request-closed']):before {
			content: '\\ebda';
		}
		:host([icon='git-pull-request-draft']):before {
			content: '\\ebdb';
		}
		:host([icon='debug-all']):before {
			content: '\\ebdc';
		}
		:host([icon='debug-coverage']):before {
			content: '\\ebdd';
		}
		:host([icon='run-errors']):before {
			content: '\\ebde';
		}
		:host([icon='folder-library']):before {
			content: '\\ebdf';
		}
		:host([icon='debug-continue-small']):before {
			content: '\\ebe0';
		}
		:host([icon='beaker-stop']):before {
			content: '\\ebe1';
		}
		:host([icon='graph-line']):before {
			content: '\\ebe2';
		}
		:host([icon='graph-scatter']):before {
			content: '\\ebe3';
		}
		:host([icon='pie-chart']):before {
			content: '\\ebe4';
		}
		:host([icon='bracket']):before {
			content: '\\eb0f';
		}
		:host([icon='bracket-dot']):before {
			content: '\\ebe5';
		}
		:host([icon='bracket-error']):before {
			content: '\\ebe6';
		}
		:host([icon='lock-small']):before {
			content: '\\ebe7';
		}
		:host([icon='azure-devops']):before {
			content: '\\ebe8';
		}
		:host([icon='verified-filled']):before {
			content: '\\ebe9';
		}
		:host([icon='newline']):before {
			content: '\\ebea';
		}
		:host([icon='layout']):before {
			content: '\\ebeb';
		}
		:host([icon='layout-activitybar-left']):before {
			content: '\\ebec';
		}
		:host([icon='layout-activitybar-right']):before {
			content: '\\ebed';
		}
		:host([icon='layout-panel-left']):before {
			content: '\\ebee';
		}
		:host([icon='layout-panel-center']):before {
			content: '\\ebef';
		}
		:host([icon='layout-panel-justify']):before {
			content: '\\ebf0';
		}
		:host([icon='layout-panel-right']):before {
			content: '\\ebf1';
		}
		:host([icon='layout-panel']):before {
			content: '\\ebf2';
		}
		:host([icon='layout-sidebar-left']):before {
			content: '\\ebf3';
		}
		:host([icon='layout-sidebar-right']):before {
			content: '\\ebf4';
		}
		:host([icon='layout-statusbar']):before {
			content: '\\ebf5';
		}
		:host([icon='layout-menubar']):before {
			content: '\\ebf6';
		}
		:host([icon='layout-centered']):before {
			content: '\\ebf7';
		}
		:host([icon='target']):before {
			content: '\\ebf8';
		}

		:host([icon^='gl-']) {
			font-family: 'glicons';
		}
		:host([icon='gl-commit-horizontal']):before {
			content: '\\f101';
		}
		:host([icon='gl-graph']):before {
			content: '\\f102';
		}
		:host([icon='gl-next-commit']):before {
			content: '\\f103';
		}
		:host([icon='gl-prev-commit-menu']):before {
			content: '\\f104';
		}
		:host([icon='gl-prev-commit']):before {
			content: '\\f105';
		}
		:host([icon='gl-compare-ref-working']):before {
			content: '\\f106';
		}
		:host([icon='gl-branches-view']):before {
			content: '\\f107';
		}
		:host([icon='gl-commit-view']):before {
			content: '\\f108';
		}
		:host([icon='gl-commits-view']):before {
			content: '\\f109';
		}
		:host([icon='gl-compare-view']):before {
			content: '\\f10a';
		}
		:host([icon='gl-contributors-view']):before {
			content: '\\f10b';
		}
		:host([icon='gl-history-view']):before {
			content: '\\f10c';
		}
		:host([icon='gl-remotes-view']):before {
			content: '\\f10d';
		}
		:host([icon='gl-repositories-view']):before {
			content: '\\f10e';
		}
		:host([icon='gl-search-view']):before {
			content: '\\f10f';
		}
		:host([icon='gl-stashes-view']):before {
			content: '\\f110';
		}
		:host([icon='gl-tags-view']):before {
			content: '\\f111';
		}
		:host([icon='gl-worktrees-view']):before {
			content: '\\f112';
		}
		:host([icon='gl-gitlens']):before {
			content: '\\f113';
		}
		:host([icon='gl-stash-pop']):before {
			content: '\\f114';
		}
		:host([icon='gl-stash-save']):before {
			content: '\\f115';
		}
		:host([icon='gl-unplug']):before {
			content: '\\f116';
		}
		:host([icon='gl-open-revision']):before {
			content: '\\f117';
		}
		:host([icon='gl-switch']):before {
			content: '\\f118';
		}
		:host([icon='gl-expand']):before {
			content: '\\f119';
		}
		:host([icon='gl-list-auto']):before {
			content: '\\f11a';
		}
		:host([icon='gl-arrow-up-force']):before {
			content: '\\f11b';
		}
		:host([icon='gl-pinned-filled']):before {
			content: '\\f11c';
			/* TODO: see relative positioning needed in every use-case */
			position: relative;
			left: 1px;
		}
		:host([icon='gl-clock']):before {
			content: '\\f11d';
		}
		:host([icon='gl-provider-azdo']):before {
			content: '\\f11e';
		}
		:host([icon='gl-provider-bitbucket']):before {
			content: '\\f11f';
		}
		:host([icon='gl-provider-gerrit']):before {
			content: '\\f120';
		}
		:host([icon='gl-provider-gitea']):before {
			content: '\\f121';
		}
		:host([icon='gl-provider-github']):before {
			content: '\\f122';
		}
		:host([icon='gl-provider-gitlab']):before {
			content: '\\f123';
		}
		:host([icon='gl-gitlens-inspect']):before {
			content: '\\f124';
		}
		:host([icon='gl-workspaces-view']):before {
			content: '\\f125';
		}

		@keyframes codicon-spin {
			100% {
				transform: rotate(360deg);
			}
		}

		:host([modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;
		}
		:host([icon='loading'][modifier='spin']) {
			/* Use steps to throttle FPS to reduce CPU usage */
			animation: codicon-spin 1.5s steps(30) infinite;

			/* custom speed & easing for loading icon */
			animation-duration: 1s !important;
			animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;
		}
	`,It([pt()],jt.prototype,"icon",2),It([pt()],jt.prototype,"modifier",2),It([pt({type:Number})],jt.prototype,"size",2),jt=It([dt("code-icon")],jt);const Ut=[["year",629856e5,31536e6,"yr"],["month",2628e6,2628e6,"mo"],["week",6048e5,6048e5,"wk"],["day",864e5,864e5,"d"],["hour",36e5,36e5,"h"],["minute",6e4,6e4,"m"],["second",1e3,1e3,"s"]];let Ht;let zt,qt,Vt;function Wt(e,t){const o=("number"==typeof e?e:e.getTime())-(new Date).getTime();for(const[e,n,i,r]of Ut){const s=Math.abs(o);if(s>=n||1e3===n){if(t){if(null==Ht&&(null!=Vt?Ht=Vt.resolvedOptions().locale:null!=qt?Ht=qt.resolvedOptions().locale:(Vt=new Intl.RelativeTimeFormat(zt,{localeMatcher:"best fit",numeric:"always",style:"narrow"}),Ht=Vt.resolvedOptions().locale)),"en"===Ht||Ht?.startsWith("en-")){return`${Math.round(s/i)}${r}`}return null==Vt&&(Vt=new Intl.RelativeTimeFormat(zt,{localeMatcher:"best fit",numeric:"always",style:"narrow"})),Vt.format(Math.round(o/i),e)}return null==qt&&(qt=new Intl.RelativeTimeFormat(zt,{localeMatcher:"best fit",numeric:"auto",style:"long"})),qt.format(Math.round(o/i),e)}}return""}var Gt=(e=>(e[e.VerificationRequired=-1]="VerificationRequired",e[e.Free=0]="Free",e[e.FreeInPreviewTrial=1]="FreeInPreviewTrial",e[e.FreePreviewTrialExpired=2]="FreePreviewTrialExpired",e[e.FreePlusInTrial=3]="FreePlusInTrial",e[e.FreePlusTrialExpired=4]="FreePlusTrialExpired",e[e.Paid=5]="Paid",e))(Gt||{});function Yt(e){switch(e){case"free+":return"GitLens Free";case"pro":return"GitLens Pro";case"teams":return"GitLens Teams";case"enterprise":return"GitLens Enterprise";default:return"GitLens"}}function Qt(e,t){return Kt(e.plan.effective.expiresOn,t)}function Kt(e,t){return null!=e?function(e,t,o){const n=("number"==typeof t?t:t.getTime())-("number"==typeof e?e:e.getTime());switch(o){case"days":return Math.floor(n/864e5);case"hours":return Math.floor(n/36e5);case"minutes":return Math.floor(n/6e4);case"seconds":return Math.floor(n/1e3);default:return n}}(Date.now(),new Date(e),t):void 0}function Zt(e){return null!=e&&(5===e||1===e||3===e)}function Jt(e){return null!=e&&(1===e||3===e)}const Xt=ce`
	a {
		color: var(--link-foreground);
		text-decoration: var(--link-decoration-default, none);
	}
	a:focus {
		outline-color: var(--focus-border);
	}
	a:hover {
		color: var(--link-foreground-active);
		text-decoration: underline;
	}
`;var eo=Object.defineProperty,to=Object.getOwnPropertyDescriptor,oo=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?to(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&eo(t,o,r),r};let no=class extends lt{render(){if(null==this.state)return void(this.hidden=!0);this.hidden=!1;const e="alert"===(this.appearance??"alert")?"alert":qe;switch(this.state){case Gt.VerificationRequired:return He`
					<p>You must verify your email before you can continue.</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.resendVerification"
						>Resend verification email</gl-button
					>
					<gl-button appearance="${e}" href="command:gitlens.plus.validate"
						>Refresh verification status</gl-button
					>
				`;case Gt.Free:return He`
					<gl-button appearance="${e}" href="command:gitlens.plus.startPreviewTrial"
						>Preview Now</gl-button
					>
					<p>
						Preview Pro for 3 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a> to start a full 7-day Pro trial.
					</p>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case Gt.FreePreviewTrialExpired:return He`
					<p>
						Your 3-day Pro preview has ended, start a free Pro trial to get an additional 7 days, or
						<a href="command:gitlens.plus.loginOrSignUp">sign in</a>.
					</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.loginOrSignUp"
						>Start Free Pro Trial</gl-button
					>
					<p>✨ A trial or paid plan is required to use this on privately hosted repos.</p>
				`;case Gt.FreePlusTrialExpired:return He`
					<p>Your Pro trial has ended, please upgrade to continue to use this on privately hosted repos.</p>
					<gl-button appearance="${e}" href="command:gitlens.plus.purchase"
						>Upgrade to Pro</gl-button
					>
					<p>✨ A paid plan is required to use this on privately hosted repos.</p>
				`}}};no.styles=[Xt,ce`
			:host {
				container-type: inline-size;
			}

			:host([appearance='welcome']) gl-button {
				width: 100%;
				max-width: 300px;
			}

			@container (max-width: 600px) {
				:host([appearance='welcome']) gl-button {
					display: block;
					margin-left: auto;
					margin-right: auto;
				}
			}

			:host([appearance='alert']) gl-button {
				display: block;
				margin-left: auto;
				margin-right: auto;
			}

			:host-context([appearance='alert']) p:first-child {
				margin-top: 0;
			}

			:host-context([appearance='alert']) p:last-child {
				margin-bottom: 0;
			}
		`],oo([pt({type:String})],no.prototype,"appearance",2),oo([pt({attribute:!1,type:Number})],no.prototype,"state",2),no=oo([dt("gk-feature-gate-plus-state")],no);var io=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,so=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?ro(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&io(t,o,r),r};let ao=class extends lt{render(){if(!this.visible||null!=this.state&&Zt(this.state))return void(this.hidden=!0);const e=this.appearance??"editor"===(document.body.getAttribute("data-placement")??"editor")?"alert":"welcome";return this.hidden=!1,He`
			<section>
				<slot>
					<slot name="feature" hidden=${this.state===Gt.Free?qe:""}></slot>
				</slot>
				<gk-feature-gate-plus-state appearance=${e} .state=${this.state}></gk-feature-gate-plus-state>
			</section>
		`}};ao.styles=ce`
		:host {
			--background: var(--vscode-sideBar-background);
			--foreground: var(--vscode-sideBar-foreground);
			--link-foreground: var(--vscode-textLink-foreground);
			--link-foreground-active: var(--vscode-textLink-activeForeground);

			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			overflow: auto;
			z-index: 100;

			box-sizing: border-box;
		}

		:host-context(body[data-placement='editor']),
		:host([appearance='alert']) {
			--background: transparent;
			--foreground: var(--vscode-editor-foreground);

			backdrop-filter: blur(3px) saturate(0.8);
			padding: 0 2rem;
		}

		::slotted(p) {
			margin: revert !important;
		}

		::slotted(p:first-child) {
			margin-top: 0 !important;
		}

		section {
			--section-foreground: var(--foreground);
			--section-background: var(--background);
			--section-border-color: transparent;

			display: flex;
			flex-direction: column;
			padding: 0 2rem 1.3rem 2rem;
			background: var(--section-background);
			color: var(--section-foreground);
			border: 1px solid var(--section-border-color);

			height: min-content;
		}

		:host-context(body[data-placement='editor']) section,
		:host([appearance='alert']) section {
			--section-foreground: var(--color-alert-foreground);
			--section-background: var(--color-alert-infoBackground);
			--section-border-color: var(--color-alert-infoBorder);

			--link-decoration-default: underline;
			--link-foreground: var(--vscode-foreground);
			--link-foreground-active: var(--vscode-foreground);

			border-radius: 0.3rem;
			max-width: 600px;
			max-height: min-content;
			margin: 0.2rem auto;
			padding: 1.3rem;
		}

		:host-context(body[data-placement='editor']) section ::slotted(gl-button),
		:host([appearance='alert']) section ::slotted(gl-button) {
			display: block;
			margin-left: auto;
			margin-right: auto;
		}
	`,so([pt()],ao.prototype,"appearance",2),so([pt({attribute:!1,type:Number})],ao.prototype,"state",2),so([pt({type:Boolean})],ao.prototype,"visible",2),ao=so([dt("gk-feature-gate")],ao);const{fromCharCode:co}=String;new TextEncoder;const lo=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===lo.trustedTypes&&(lo.trustedTypes={createPolicy:(e,t)=>t});const ho={configurable:!1,enumerable:!1,writable:!1};void 0===lo.FAST&&Reflect.defineProperty(lo,"FAST",Object.assign({value:Object.create(null)},ho));const uo=lo.FAST;if(void 0===uo.getById){const e=Object.create(null);Reflect.defineProperty(uo,"getById",Object.assign({value(t,o){let n=e[t];return void 0===n&&(n=o?e[t]=o():null),n}},ho))}const fo=Object.freeze([]);function po(){const e=new WeakMap;return function(t){let o=e.get(t);if(void 0===o){let n=Reflect.getPrototypeOf(t);for(;void 0===o&&null!==n;)o=e.get(n),n=Reflect.getPrototypeOf(n);o=void 0===o?[]:o.slice(0),e.set(t,o)}return o}}const bo=lo.FAST.getById(1,(()=>{const e=[],t=[];function o(){if(t.length)throw t.shift()}function n(e){try{e.call()}catch(e){t.push(e),setTimeout(o,0)}}function i(){let t=0;for(;t<e.length;)if(n(e[t]),t++,t>1024){for(let o=0,n=e.length-t;o<n;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&lo.requestAnimationFrame(i),e.push(t)},process:i})})),go=lo.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let mo=go;const vo=`fast-${Math.random().toString(36).substring(2,8)}`,yo=`${vo}{`,wo=`}${vo}`,ko=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(mo!==go)throw new Error("The HTML policy can only be set once.");mo=e},createHTML:e=>mo.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(vo),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${vo}:`,"")),createInterpolationPlaceholder:e=>`${yo}${e}${wo}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${vo}:${e}--\x3e`,queueUpdate:bo.enqueue,processUpdates:bo.process,nextUpdate:()=>new Promise(bo.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class _o{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else{-1===t.indexOf(e)&&t.push(e)}}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const o=t.indexOf(e);-1!==o&&t.splice(o,1)}}notify(e){const t=this.spillover,o=this.source;if(void 0===t){const t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(o,e),void 0!==n&&n.handleChange(o,e)}else for(let n=0,i=t.length;n<i;++n)t[n].handleChange(o,e)}}class xo{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new _o(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new _o(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const $o=uo.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=ko.queueUpdate;let n,i=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=i(e):t.set(e,o=new xo(e))),o}const s=po();class a{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==n&&n.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,n=e[o];if(n!==t){e[o]=t;const i=e[this.callback];"function"==typeof i&&i.call(e,n,t),r(e).notify(this.name)}}}class c extends _o{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const i=this.binding(e,t);return n=o,i}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,i=r(e),s=null===o?this.first:{};if(s.propertySource=e,s.propertyName=t,s.notifier=i,i.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;n=void 0,t=o.propertySource[o.propertyName],n=this,e===t&&(this.needsRefresh=!0)}o.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,o(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){i=e},getNotifier:r,track(e,t){void 0!==n&&n.watch(e,t)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(e,t){r(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new a(t)),s(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:s,binding(e,t,o=this.isVolatileBinding(e)){return new c(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));function Ao(e,t){$o.defineProperty(e,t)}function Co(e,t,o){return Object.assign({},o,{get:function(){return $o.trackVolatile(),o.get.apply(this)}})}const So=uo.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class Eo{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return So.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){So.set(e)}}$o.defineProperty(Eo.prototype,"index"),$o.defineProperty(Eo.prototype,"length");const Po=Object.seal(new Eo);class To{constructor(){this.targetIndex=0}}class Oo extends To{constructor(){super(...arguments),this.createPlaceholder=ko.createInterpolationPlaceholder}}class Ro extends To{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return ko.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function Mo(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=$o.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function No(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function Bo(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Do(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function Lo(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Fo(e){ko.setAttribute(this.target,this.targetName,e)}function Io(e){ko.setBooleanAttribute(this.target,this.targetName,e)}function jo(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Uo(e){this.target[this.targetName]=e}function Ho(e){const t=this.classVersions||Object.create(null),o=this.target;let n=this.version||0;if(null!=e&&e.length){const i=e.split(/\s+/);for(let e=0,r=i.length;e<r;++e){const r=i[e];""!==r&&(t[r]=n,o.classList.add(r))}}if(this.classVersions=t,this.version=n+1,0!==n){n-=1;for(const e in t)t[e]===n&&o.classList.remove(e)}}class zo extends Oo{constructor(e){super(),this.binding=e,this.bind=Mo,this.unbind=Bo,this.updateTarget=Fo,this.isBindingVolatile=$o.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Uo,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>ko.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Io;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=No,this.unbind=Lo;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=Ho)}}targetAtContent(){this.updateTarget=jo,this.unbind=Do}createBehavior(e){return new qo(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class qo{constructor(e,t,o,n,i,r,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=n,this.unbind=i,this.updateTarget=r,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Eo.setEvent(e);const t=this.binding(this.source,this.context);Eo.setEvent(null),!0!==t&&e.preventDefault()}}let Vo=null;class Wo{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Vo=this}static borrow(e){const t=Vo||new Wo;return t.directives=e,t.reset(),Vo=null,t}}function Go(e){if(1===e.length)return e[0];let t;const o=e.length,n=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),i=new zo(((e,t)=>{let i="";for(let r=0;r<o;++r)i+=n[r](e,t);return i}));return i.targetName=t,i}const Yo=wo.length;function Qo(e,t){const o=t.split(yo);if(1===o.length)return null;const n=[];for(let t=0,i=o.length;t<i;++t){const i=o[t],r=i.indexOf(wo);let s;if(-1===r)s=i;else{const t=parseInt(i.substring(0,r));n.push(e.directives[t]),s=i.substring(r+Yo)}""!==s&&n.push(s)}return n}function Ko(e,t,o=!1){const n=t.attributes;for(let i=0,r=n.length;i<r;++i){const s=n[i],a=s.value,c=Qo(e,a);let l=null;null===c?o&&(l=new zo((()=>a)),l.targetName=s.name):l=Go(c),null!==l&&(t.removeAttributeNode(s),i--,r--,e.addFactory(l))}}function Zo(e,t,o){const n=Qo(e,t.textContent);if(null!==n){let i=t;for(let r=0,s=n.length;r<s;++r){const s=n[r],a=0===r?t:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",e.captureContentBinding(s)),i=a,e.targetIndex++,a!==t&&o.nextNode()}e.targetIndex--}}const Jo=document.createRange();class Xo{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const o=e.parentNode;let n,i=this.firstChild;for(;i!==t;)n=i.nextSibling,o.insertBefore(i,e),i=n;o.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.appendChild(n),n=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,n=this.firstChild;for(;n!==t;)o=n.nextSibling,e.removeChild(n),n=o;e.removeChild(t);const i=this.behaviors,r=this.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(r)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const n=this.source;this.source=e,this.context=t;for(let i=0,r=o.length;i<r;++i){const r=o[i];r.unbind(n),r.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,i=o.length;n<i;++n)o[n].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,n=e.length;o<n;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Jo.setStartBefore(e[0].firstChild),Jo.setEndAfter(e[e.length-1].lastChild),Jo.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],n=o.behaviors,i=o.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(i)}}}}class en{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=ko.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const n=Wo.borrow(t);Ko(n,e,!0);const i=n.behaviorFactories;n.reset();const r=ko.createTemplateWalker(o);let s;for(;s=r.nextNode();)switch(n.targetIndex++,s.nodeType){case 1:Ko(n,s);break;case 3:Zo(n,s,r);break;case 8:ko.isMarker(s)&&n.addFactory(t[ko.extractDirectiveIndexFromMarker(s)])}let a=0;(ko.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),a=-1);const c=n.behaviorFactories;return n.release(),{fragment:o,viewBehaviorFactories:c,hostBehaviorFactories:i,targetOffset:a}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,n=new Array(this.behaviorCount),i=ko.createTemplateWalker(t);let r=0,s=this.targetOffset,a=i.nextNode();for(let e=o.length;r<e;++r){const e=o[r],t=e.targetIndex;for(;null!==a;){if(s===t){n[r]=e.createBehavior(a);break}a=i.nextNode(),s++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,i=t.length;o<i;++o,++r)n[r]=t[o].createBehavior(e)}return new Xo(t,n)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const n=this.create(o);return n.bind(e,Po),n.appendTo(t),n}}const tn=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function on(e,...t){const o=[];let n="";for(let i=0,r=e.length-1;i<r;++i){const r=e[i];let s=t[i];if(n+=r,s instanceof en){const e=s;s=()=>e}if("function"==typeof s&&(s=new zo(s)),s instanceof Oo){const e=tn.exec(r);null!==e&&(s.targetName=e[2])}s instanceof To?(n+=s.createPlaceholder(o.length),o.push(s)):n+=s}return n+=e[e.length-1],new en(n,o)}class nn{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=$o.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(fo),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class rn extends nn{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function sn(e){return"string"==typeof e&&(e={property:e}),new Ro("fast-slotted",rn,e)}const an=e=>"function"==typeof e,cn=()=>null;function ln(e){return void 0===e?cn:an(e)?e:()=>e}class hn{createCSS(){return""}createBehavior(){}}class dn{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function un(e){return e.map((e=>e instanceof dn?un(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function fn(e){return e.map((e=>e instanceof dn?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}dn.create=(()=>{if(ko.supportsAdoptedStyleSheets){const e=new Map;return t=>new gn(t,e)}return e=>new vn(e)})();let pn=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},bn=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e)))};if(ko.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),pn=(e,t)=>{e.adoptedStyleSheets.push(...t)},bn=(e,t)=>{for(const o of t){const t=e.adoptedStyleSheets.indexOf(o);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class gn extends dn{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=fn(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=un(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){pn(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){bn(e,this.styleSheets),super.removeStylesFrom(e)}}let mn=0;class vn extends dn{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=fn(e),this.styleSheets=un(e),this.styleClass="fast-style-class-"+ ++mn}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const i=document.createElement("style");i.innerHTML=t[n],i.className=o,e.append(i)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,n=t.length;o<n;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}function yn(e,t){const o=[];let n="";const i=[];for(let r=0,s=e.length-1;r<s;++r){n+=e[r];let s=t[r];if(s instanceof hn){const e=s.createBehavior();s=s.createCSS(),e&&i.push(e)}s instanceof dn||s instanceof CSSStyleSheet?(""!==n.trim()&&(o.push(n),n=""),o.push(s)):n+=s}return n+=e[e.length-1],""!==n.trim()&&o.push(n),{styles:o,behaviors:i}}function wn(e,...t){const{styles:o,behaviors:n}=yn(e,t),i=dn.create(o);return n.length&&i.withBehaviors(...n),i}const kn=Object.freeze({locate:po()}),_n={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e};class xn{constructor(e,t,o=t.toLowerCase(),n="reflect",i){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=n,this.converter=i,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===i&&(this.converter=_n)}setValue(e,t){const o=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return $o.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||ko.queueUpdate((()=>{o.add(e);const n=e[this.fieldName];switch(t){case"reflect":const t=this.converter;ko.setAttribute(e,this.attribute,void 0!==t?t.toView(n):n);break;case"boolean":ko.setBooleanAttribute(e,this.attribute,n)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(kn.locate(e));for(let n=0,i=t.length;n<i;++n){const i=t[n];if(void 0!==i)for(let t=0,n=i.length;t<n;++t){const n=i[t];"string"==typeof n?o.push(new xn(e,n)):o.push(new xn(e,n.property,n.attribute,n.mode,n.converter))}}return o}}function $n(e,t){let o;function n(e,t){arguments.length>1&&(o.property=t),kn.locate(e.constructor).push(o)}return arguments.length>1?(o={},void n(e,t)):(o=void 0===e?{}:e,n)}const An={mode:"open"},Cn={},Sn=uo.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class En{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=xn.collect(e,t.attributes),n=new Array(o.length),i={},r={};for(let e=0,t=o.length;e<t;++e){const t=o[e];n[e]=t.attribute,i[t.name]=t,r[t.attribute]=t}this.attributes=o,this.observedAttributes=n,this.propertyLookup=i,this.attributeLookup=r,this.shadowOptions=void 0===t.shadowOptions?An:null===t.shadowOptions?void 0:Object.assign(Object.assign({},An),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?Cn:Object.assign(Object.assign({},Cn),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?dn.create(t.styles):t.styles instanceof dn?t.styles:dn.create([t.styles])}get isDefined(){return!!Sn.getByType(this.type)}define(e=customElements){const t=this.type;if(Sn.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,n=e.length;t<n;++t)$o.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}En.forType=Sn.getByType;const Pn=new WeakMap,Tn={bubbles:!0,composed:!0,cancelable:!0};function On(e){return e.shadowRoot||Pn.get(e)||null}class Rn extends xo{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&Pn.set(e,t)}const n=$o.getAccessors(e);if(n.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,i=n.length;o<i;++o){const i=n[o].name,r=e[i];void 0!==r&&(delete e[i],t[i]=r)}}}get isConnected(){return $o.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,$o.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=On(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=On(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,n=[];for(let i=0;i<o;++i){const o=e[i];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),n.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,Po)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const n=e.length,i=[];for(let r=0;r<n;++r){const n=e[r];if(o.has(n)){const e=o.get(n)-1;0===e||t?o.delete(n)&&i.push(n):o.set(n,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,Po);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,Po);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Tn),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let n=0,i=o.length;n<i;++n){const i=o[n];e[i]=t[i]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=On(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||ko.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=En.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new Rn(e,o)}}function Mn(e){return class extends e{constructor(){super(),Rn.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const Nn=Object.assign(Mn(HTMLElement),{from:e=>Mn(e),define:(e,t)=>new En(e,t).define().type});function Bn(...e){return e.some((e=>(e?.length??0)>0))}const Dn=wn`
	:host {
		box-sizing: border-box;
	}
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: inherit;
	}
	[hidden] {
		display: none !important;
	}
`;var Ln=Object.defineProperty,Fn=Object.getOwnPropertyDescriptor,In=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Fn(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Ln(t,o,r),r};const jn=on`
	<template>
		<div class="top" ?hidden="${e=>!e.hasTopNodes}">
			<slot ${sn("typeNodes")} name="type"></slot>
			<slot ${sn("actionsNodes")} name="actions"></slot>
		</div>
		<div class="heading" ?hidden="${e=>!e.hasHeadingNodes}">
			<slot ${sn("headingNodes")} name="heading"></slot>
		</div>
		<div class="content"><slot></slot></div>
		${function(e,t,o){const n=an(e)?e:()=>e,i=ln(t),r=ln(o);return(e,t)=>n(e,t)?i(e,t):r(e,t)}((e=>e.caret),on`<span class="caret"></span>`)}
	</template>
`,Un=wn`
	${Dn}

	:host {
		position: absolute;
		width: var(--popover-width, 100%);
		max-width: var(--popover-max-width, 30rem);
		padding: 1.2rem 1.2rem 1.2rem;
		/* update with a standardized z-index */
		z-index: 10;

		background-color: var(--popover-bg);
		box-shadow: 0 0.3rem 0.3rem 0 var(--vscode-widget-shadow);

		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	:host([caret]:not([placement~='bottom'])) {
		transform: translateY(0.8rem);
	}

	:host([caret][placement~='bottom']) {
		transform: translateY(-0.8rem);
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.5;
		margin-top: -0.4rem;
	}

	.heading {
		font-weight: 600;
	}

	.caret {
		position: absolute;
		width: 0;
		height: 0;
		border-left: 0.8rem solid transparent;
		border-right: 0.8rem solid transparent;
		border-bottom: 0.8rem solid var(--popover-bg);
	}

	:host(:not([placement~='bottom'])) .caret {
		bottom: 100%;
	}

	:host([placement~='bottom']) .caret {
		top: 100%;
		transform: rotate(180deg);
	}

	:host(:not([placement~='end'])) .caret {
		left: 1.2rem;
	}

	:host([placement~='end']) .caret {
		right: 1.2rem;
	}
`;let Hn=class extends Nn{constructor(){super(...arguments),this.open=!1,this.caret=!0}get hasTopNodes(){return Bn(this.typeNodes,this.actionsNodes)}get hasHeadingNodes(){return Bn(this.headingNodes)}};var zn;In([$n({mode:"boolean"})],Hn.prototype,"open",2),In([$n({mode:"boolean"})],Hn.prototype,"caret",2),In([$n],Hn.prototype,"placement",2),In([Ao],Hn.prototype,"typeNodes",2),In([Ao],Hn.prototype,"actionsNodes",2),In([Ao],Hn.prototype,"headingNodes",2),In([Co],Hn.prototype,"hasTopNodes",1),In([Co],Hn.prototype,"hasHeadingNodes",1),Hn=In([(zn={name:"pop-over",template:jn,styles:Un},function(e){new En(e,zn).define()})],Hn);var qn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,Wn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Vn(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&qn(t,o,r),r};let Gn=class extends lt{constructor(){super(...arguments),this.placement="top end"}render(){const e=Zt(this.subscription?.state),t=Jt(this.subscription?.state);return He`
			<span class="badge-container">
				<span class="badge ${e?"active":"inactive"}"
					>${t?He`<span class="badge-trial">Trial</span>`:""}✨</span
				>
				<pop-over .placement=${this.placement} class="badge-popover">
					<span slot="heading"
						>${function(e,t){switch(e){case 4:return Yt("free+");case 1:return`${Yt("pro")} (Trial)`;case 3:return`${Yt(t??"pro")} (Trial)`;case-1:return"GitLens (Unverified)";case 5:return Yt(t??"pro");default:return"GitLens"}}(this.subscription?.state,this.subscription?.plan.effective.id)}${this.trialHtml}</span
					>
					${this.footnoteHtml}
				</pop-over>
			</span>
		`}get trialHtml(){if(!Jt(this.subscription?.state))return qe;const e=Qt(this.subscription,"days")??0;return He`<span class="badge-trial-left">${e<1?"<1 day":function(e,t,o){if(null==o)return`${t} ${e}${1===t?"":"s"}`;const n=1===t?e:o.plural??`${e}s`;return o.only?n:`${0===t?o.zero??t:o.format?.(t)??t}${o.infix??" "}${n}`}("day",e)} left</span>`}get footnoteHtml(){switch(this.subscription?.state){case Gt.VerificationRequired:case Gt.Free:case Gt.FreePreviewTrialExpired:return He`<span class="badge-footnote"
					>✨ Requires a trial or paid plan for use on privately hosted repos.</span
				>`;case Gt.FreePlusTrialExpired:case Gt.FreeInPreviewTrial:case Gt.FreePlusInTrial:return He`<span class="badge-footnote"
					>✨ Requires a paid plan for use on privately hosted repos.</span
				>`;case Gt.Paid:return He`<span class="badge-footnote"
					>You have access to ✨ features on privately hosted repos and ☁️ features based on your plan.</span
				>`;default:return qe}}};Gn.styles=[Rt,ce`
			:host {
				position: relative;
			}

			:host(:focus) {
				${Ot}
			}

			.badge-container {
				position: relative;
			}

			.badge {
				cursor: help;
			}

			.badge.inactive {
				filter: grayscale(100%);
			}

			.badge-popover {
				width: max-content;
				top: 100%;
				text-align: left;
			}

			.badge-footnote {
				white-space: break-spaces;
			}

			.badge-trial {
				font-size: smaller;
				font-weight: 700;
				margin-right: 0.5rem;
				text-transform: uppercase;
				white-space: nowrap;
			}

			.badge-trial-left {
				font-weight: 400;
				opacity: 0.6;
				margin-left: 1rem;
			}

			.badge:not(:hover) ~ .badge-popover {
				display: none;
			}

			:host(:not([placement~='end'])) .badge-popover {
				left: 0;
			}

			:host([placement~='end']) .badge-popover {
				right: 0;
			}
		`],Wn([pt({reflect:!0})],Gn.prototype,"placement",2),Wn([pt({attribute:!1})],Gn.prototype,"subscription",2),Gn=Wn([dt("gk-feature-gate-badge")],Gn);const Yn=ce`
	.repo-branch {
		display: flex;
		flex-direction: column;
		gap: 0 0.4rem;
	}

	@media (max-width: 720px) {
		.repo-branch {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	.repo-branch__tag {
		cursor: pointer;
	}
`,Qn=ce`
	.indicator-warning {
		color: var(--vscode-problemsWarningIcon-foreground);
	}
	.indicator-danger {
		color: var(--vscode-problemsErrorIcon-foreground);
	}
`;function Kn(e,t=new Date){const o=Math.floor((t.getTime()-e.getTime())/1e3);let n="ok";return Math.floor(o/31536e3)>=1||Math.floor(o/2592e3)>=1||Math.floor(o/604800)>=1?n="danger":Math.floor(o/86400)>=1&&(n="warning"),{label:Wt(e,!0),tooltip:Wt(e),status:n}}var Zn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,Xn=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?Jn(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&Zn(t,o,r),r};let ei=class extends lt{constructor(){super(),this.isCurrentBranch=!1,this.isCurrentWorktree=!1,this.hasWorktree=!1,this.hasLocalBranch=!1,(0,oe.defineGkElement)(oe.Tag,oe.FocusRow,oe.FocusItem,oe.AvatarGroup,oe.Avatar,oe.RelativeDate,oe.AdditionsDeletions,oe.Tooltip)}get lastUpdatedDate(){return new Date(this.pullRequest.date)}get assignees(){const e=this.pullRequest?.assignees;if(null==e)return[];const t=this.pullRequest.author;return null!=t?e.filter((e=>e.name!==t.name)):e}get indicator(){return null==this.pullRequest?"":"ChangesRequested"===this.pullRequest.reviewDecision?"changes":"Approved"===this.pullRequest.reviewDecision&&"Mergeable"===this.pullRequest.mergeableState?"ready":"Conflicting"===this.pullRequest.mergeableState?"conflicting":""}get dateStyle(){return`indicator-${Kn(this.lastUpdatedDate).status}`}render(){if(this.pullRequest)return He`
			<gk-focus-row>
				<span slot="key" class="key">
					${Pt("changes"===this.indicator,(()=>He`<gk-tooltip>
								<code-icon slot="trigger" class="indicator-error" icon="request-changes"></code-icon>
								<span>changes requested</span>
							</gk-tooltip>`))}
					${Pt("ready"===this.indicator,(()=>He`<gk-tooltip>
								<code-icon slot="trigger" class="indicator-info" icon="pass"></code-icon>
								<span>approved and ready to merge</span>
							</gk-tooltip>`))}
					${Pt("conflicting"===this.indicator,(()=>He`<gk-tooltip>
								<code-icon slot="trigger" class="indicator-error" icon="bracket-error"></code-icon>
								<span>cannot be merged due to merge conflicts</span>
							</gk-tooltip>`))}
				</span>
				<gk-focus-item>
					<p>
						<span class="title"
							>${this.pullRequest.title}
							<a href="${this.pullRequest.url}">#${this.pullRequest.id}</a></span
						>
						<!-- &nbsp;
						<gk-badge>pending suggestions</gk-badge> -->
					</p>
					<p>
						<gk-badge variant="outline" class="row-type">PR</gk-badge>
						<gk-additions-deletions class="add-delete">
							<span slot="additions">${this.pullRequest.additions}</span>
							<span slot="deletions">${this.pullRequest.deletions}</span>
						</gk-additions-deletions>
						<gk-tooltip>
							<gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="comment-discussion"></code-icon></span>
								${this.pullRequest.comments}
							</gk-tag>
							<span>Comments</span>
						</gk-tooltip>
					</p>
					<span slot="people">
						<gk-avatar-group>
							${Pt(null!=this.pullRequest.author,(()=>He`<gk-avatar
										src="${this.pullRequest.author.avatarUrl}"
										title="${this.pullRequest.author.name} (author)"
									></gk-avatar>`))}
							${Pt(this.assignees.length>0,(()=>He`
									${Et(this.assignees,(e=>e.url),(e=>He`<gk-avatar
												src="${e.avatarUrl}"
												title="${e.name?`${e.name} (assignee)`:"(assignee)"}"
											></gk-avatar>`))}
								`))}
						</gk-avatar-group>
					</span>
					<span slot="date">
						<gk-date-from class="date ${this.dateStyle}" date="${this.lastUpdatedDate}"></gk-date-from>
					</span>
					<div slot="repo" class="repo-branch">
						<gk-tag class="repo-branch__tag" full @click=${this.onOpenBranchClick}>
							<span slot="prefix"><code-icon icon="source-control"></code-icon></span>
							${!0===this.pullRequest.refs?.isCrossRepository?He`${this.pullRequest.refs?.head.owner}:${this.pullRequest.refs?.head.branch}`:this.pullRequest.refs?.head.branch}
						</gk-tag>
						<gk-tag variant="ghost" class="repo-branch__tag" full>
							<span slot="prefix"><code-icon icon="repo"></code-icon></span>
							${this.pullRequest.refs?.base.repo}
						</gk-tag>
					</div>
					<nav slot="actions" class="actions">
						<gk-tooltip>
							<a
								slot="trigger"
								href="#"
								tabindex="${this.isCurrentWorktree||this.isCurrentBranch?-1:qe}"
								aria-label="${this.isCurrentWorktree?"Already on this worktree":"Open Worktree..."}"
								@click="${this.onOpenWorktreeClick}"
								><code-icon icon="gl-worktrees-view"></code-icon
							></a>
							<span
								>${this.isCurrentWorktree?"Already on this worktree":"Open Worktree..."}</span
							> </gk-tooltip
						><gk-tooltip>
							<a
								slot="trigger"
								href="#"
								tabindex="${this.hasWorktree||this.isCurrentBranch?-1:qe}"
								aria-label="${this.isCurrentBranch?"Already on this branch":this.hasWorktree?"This branch has a worktree":"Switch to Branch..."}"
								@click="${this.onSwitchBranchClick}"
								><code-icon icon="gl-switch"></code-icon
							></a>
							<span
								>${this.isCurrentBranch?"Already on this branch":this.hasWorktree?"This branch has a worktree":"Switch to Branch..."}</span
							>
						</gk-tooltip>
					</nav>
				</gk-focus-item>
			</gk-focus-row>
		`}onOpenBranchClick(e){this.dispatchEvent(new CustomEvent("open-branch",{detail:this.pullRequest}))}onOpenWorktreeClick(e){if(this.isCurrentWorktree)return e.preventDefault(),void e.stopImmediatePropagation();this.dispatchEvent(new CustomEvent("open-worktree",{detail:this.pullRequest}))}onSwitchBranchClick(e){if(this.isCurrentBranch||this.hasWorktree)return e.preventDefault(),void e.stopImmediatePropagation();this.dispatchEvent(new CustomEvent("switch-branch",{detail:this.pullRequest}))}};ei.styles=[Tt,Rt,Qn,Yn,ce`
			:host {
				display: block;
			}

			p {
				margin: 0;
			}

			a {
				color: var(--vscode-textLink-foreground);
				text-decoration: none;
			}
			a:hover {
				text-decoration: underline;
			}
			a:focus {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.actions gk-tooltip {
				display: inline-block;
			}

			.actions a {
				box-sizing: border-box;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				width: 3.2rem;
				height: 3.2rem;
				border-radius: 0.5rem;
				color: inherit;
				padding: 0.2rem;
				vertical-align: text-bottom;
				text-decoration: none;
				cursor: pointer;
			}
			.actions a:hover {
				background-color: var(--vscode-toolbar-hoverBackground);
			}
			.actions a:active {
				background-color: var(--vscode-toolbar-activeBackground);
			}
			.actions a[tabindex='-1'] {
				opacity: 0.5;
				cursor: default;
			}

			.actions a code-icon {
				font-size: 1.6rem;
			}

			.indicator-info {
				color: var(--vscode-problemsInfoIcon-foreground);
			}
			.indicator-warning {
				color: var(--vscode-problemsWarningIcon-foreground);
			}
			.indicator-error {
				color: var(--vscode-problemsErrorIcon-foreground);
			}
			.indicator-neutral {
				color: var(--color-alert-neutralBorder);
			}

			.row-type {
				--gk-badge-outline-padding: 0.3rem 0.8rem;
				--gk-badge-font-size: 1.1rem;
				opacity: 0.5;
				vertical-align: middle;
			}

			.title {
				font-size: 1.4rem;
			}

			.add-delete {
				margin-left: 0.4rem;
				margin-right: 0.2rem;
			}

			.key {
				z-index: 1;
				position: relative;
			}

			.date {
				display: inline-block;
				min-width: 1.6rem;
			}
		`],Xn([pt({type:Number})],ei.prototype,"rank",2),Xn([pt({type:Object})],ei.prototype,"pullRequest",2),Xn([pt({type:Boolean})],ei.prototype,"isCurrentBranch",2),Xn([pt({type:Boolean})],ei.prototype,"isCurrentWorktree",2),Xn([pt({type:Boolean})],ei.prototype,"hasWorktree",2),Xn([pt({type:Boolean})],ei.prototype,"hasLocalBranch",2),ei=Xn([dt("gk-pull-request-row")],ei);var ti=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,ni=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?oi(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&ti(t,o,r),r};let ii=class extends lt{constructor(){super(),(0,oe.defineGkElement)(oe.Tag,oe.FocusRow,oe.FocusItem,oe.AvatarGroup,oe.Avatar,oe.RelativeDate,oe.Tooltip)}get lastUpdatedDate(){return new Date(this.issue.date)}get dateStyle(){return`indicator-${Kn(this.lastUpdatedDate).status}`}get assignees(){const e=this.issue?.assignees;if(null==e)return[];const t=this.issue.author;return null!=t?e.filter((e=>e.avatarUrl!==t.avatarUrl)):e}render(){if(this.issue)return He`
			<gk-focus-row>
				<span slot="key"></span>
				<gk-focus-item>
					<p>
						<span class="title">${this.issue.title} <a href="${this.issue.url}">#${this.issue.id}</a></span>
						<!-- &nbsp;
						<gk-badge>pending suggestions</gk-badge> -->
					</p>
					<p>
						<gk-badge variant="outline" class="row-type">Issue</gk-badge>
						<gk-tooltip
							><gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="comment-discussion"></code-icon></span>
								${this.issue.commentsCount} </gk-tag
							><span>Comments</span></gk-tooltip
						>
						<gk-tooltip
							><gk-tag variant="ghost" slot="trigger">
								<span slot="prefix"><code-icon icon="thumbsup"></code-icon></span>
								${this.issue.thumbsUpCount} </gk-tag
							><span>Thumbs Up</span></gk-tooltip
						>
					</p>
					<span slot="people">
						<gk-avatar-group>
							${Pt(null!=this.issue.author,(()=>He`<gk-avatar
										src="${this.issue.author.avatarUrl}"
										title="${this.issue.author.name} (author)"
									></gk-avatar>`))}
							${Pt(this.assignees.length>0,(()=>He`
									${Et(this.assignees,(e=>e.url),(e=>He`<gk-avatar
												src="${e.avatarUrl}"
												title="${e.name?`${e.name} `:""}(assignee)"
											></gk-avatar>`))}
								`))}
						</gk-avatar-group>
					</span>
					<span slot="date">
						<gk-date-from class="date ${this.dateStyle}" date="${this.lastUpdatedDate}"></gk-date-from>
					</span>
					<div slot="repo">
						<gk-tag variant="ghost" full>
							<span slot="prefix"><code-icon icon="repo"></code-icon></span>
							${this.issue.repository.repo}
						</gk-tag>
					</div>
					<nav slot="actions" class="actions">
						<gk-tooltip>
							<a slot="trigger" href="${this.issue.url}"><code-icon icon="globe"></code-icon></a>
							<span>Open issue on remote</span>
						</gk-tooltip>
					</nav>
				</gk-focus-item>
			</gk-focus-row>
		`}};ii.styles=[Tt,Rt,Qn,Yn,ce`
			:host {
				display: block;
			}

			p {
				margin: 0;
			}

			a {
				color: var(--vscode-textLink-foreground);
				text-decoration: none;
			}
			a:hover {
				text-decoration: underline;
			}
			a:focus {
				outline: 1px solid var(--vscode-focusBorder);
				outline-offset: -1px;
			}

			.actions {
			}

			.actions a {
				box-sizing: border-box;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				width: 3.2rem;
				height: 3.2rem;
				border-radius: 0.5rem;
				color: inherit;
				padding: 0.2rem;
				vertical-align: text-bottom;
				text-decoration: none;
				cursor: pointer;
			}
			.actions a:hover {
				background-color: var(--vscode-toolbar-hoverBackground);
			}
			.actions a:active {
				background-color: var(--vscode-toolbar-activeBackground);
			}

			.actions a code-icon {
				font-size: 1.6rem;
			}

			.row-type {
				--gk-badge-outline-padding: 0.3rem 0.8rem;
				--gk-badge-font-size: 1.1rem;
				opacity: 0.5;
				vertical-align: middle;
			}

			.title {
				font-size: 1.4rem;
			}

			.date {
				display: inline-block;
				min-width: 1.6rem;
			}
		`],ni([pt({type:Number})],ii.prototype,"rank",2),ni([pt({type:Object})],ii.prototype,"issue",2),ii=ni([dt("gk-issue-row")],ii);var ri=Object.defineProperty,si=Object.getOwnPropertyDescriptor,ai=(e,t,o,n)=>{for(var i,r=n>1?void 0:n?si(t,o):t,s=e.length-1;s>=0;s--)(i=e[s])&&(r=(n?i(t,o,r):i(r))||r);return n&&r&&ri(t,o,r),r};let ci=class extends lt{constructor(){super(),this.tabFilters=["prs","issues"],this.tabFilterOptions=[{label:"All",value:""},{label:"PRs",value:"prs"},{label:"Issues",value:"issues"}],this.mineFilters=["authored","assigned","review-requested","mentioned"],this.mineFilterOptions=[{label:"Mine",value:""},{label:"Opened by Me",value:"authored"},{label:"Assigned to Me",value:"assigned"},{label:"Needs my Review",value:"review-requested"},{label:"Mentions Me",value:"mentioned"}],(0,oe.defineGkElement)(oe.Button,oe.Badge,oe.Input,oe.FocusContainer,oe.Popover,oe.Menu,oe.MenuItem)}get subscriptionState(){return this.state?.access.subscription.current}get showSubscriptionGate(){return!1===this.state?.access.allowed}get showFeatureGate(){return!0!==this.state?.access.allowed}get showConnectionGate(){return!0===this.state?.access.allowed&&!this.state?.repos?.some((e=>e.isConnected))}get mineFilterMenuLabel(){return null!=this.selectedMineFilter&&""!==this.selectedMineFilter?this.mineFilterOptions.find((e=>e.value===this.selectedMineFilter))?.label:this.mineFilterOptions[0].label}get items(){if(this.isLoading)return[];const e=[];let t=0;return this.state?.pullRequests?.forEach((({pullRequest:o,reasons:n,isCurrentBranch:i,isCurrentWorktree:r,hasWorktree:s,hasLocalBranch:a})=>{e.push({isPullrequest:!0,state:{pullRequest:o,isCurrentBranch:i,isCurrentWorktree:r,hasWorktree:s,hasLocalBranch:a},rank:++t,tags:n})})),this.state?.issues?.forEach((({issue:o,reasons:n})=>{e.push({isPullrequest:!1,rank:++t,state:{issue:o},tags:n})})),e}get tabFilterOptionsWithCounts(){const e={};return this.tabFilters.forEach((t=>e[t]=0)),this.items.forEach((({isPullrequest:t})=>{const o=t?"prs":"issues";null!=e[o]&&e[o]++})),this.tabFilterOptions.map((t=>({...t,count:""===t.value?this.items.length:e[t.value]})))}get filteredItems(){if(0===this.items.length)return this.items;const e=null!=this.searchText&&""!==this.searchText,t=null!=this.selectedMineFilter&&""!==this.selectedMineFilter,o=null!=this.selectedTabFilter&&""!==this.selectedTabFilter;if(!e&&!t&&!o)return this.items;const n=this.searchText?.toLowerCase();return this.items.filter((i=>{if(o&&(!0===i.isPullrequest&&"issues"===this.selectedTabFilter||!1===i.isPullrequest&&"prs"===this.selectedTabFilter))return!1;if(t&&!i.tags.includes(this.selectedMineFilter))return!1;if(e){if(i.state.issue&&!i.state.issue.title.toLowerCase().includes(n))return!1;if(i.state.pullRequest&&!i.state.pullRequest.title.toLowerCase().includes(n))return!1}return!0}))}get isLoading(){return null==this.state?.pullRequests||null==this.state?.issues}loadingContent(){return He`
			<div class="alert">
				<span class="alert__content"><code-icon modifier="spin" icon="loading"></code-icon> Loading</span>
			</div>
		`}focusItemsContent(){return this.isLoading?this.loadingContent():0===this.filteredItems.length?He`
				<div class="alert">
					<span class="alert__content">None found</span>
				</div>
			`:He`
			${Et(this.filteredItems,(e=>e.rank),(({isPullrequest:e,rank:t,state:o})=>Pt(e,(()=>He`<gk-pull-request-row
								.rank=${t}
								.pullRequest=${o.pullRequest}
								.isCurrentBranch=${o.isCurrentBranch}
								.isCurrentWorktree=${o.isCurrentWorktree}
								.hasWorktree=${o.hasWorktree}
								.hasLocalBranch=${o.hasLocalBranch}
							></gk-pull-request-row>`),(()=>He`<gk-issue-row .rank=${t} .issue=${o.issue}></gk-issue-row>`))))}
		`}render(){return null==this.state?this.loadingContent():He`
			<div class="app">
				<div class="app__toolbar">
					<span class="preview">Preview</span>
					<gk-feature-gate-badge
						.subscription=${this.subscriptionState}
						id="subscription-gate-badge"
					></gk-feature-gate-badge>
					<gk-button
						class="feedback"
						appearance="toolbar"
						href="https://github.com/gitkraken/vscode-gitlens/discussions/2535"
						title="Focus View Feedback"
						aria-label="Focus View Feedback"
						><code-icon icon="feedback"></code-icon
					></gk-button>
				</div>

				<div class="app__content">
					<gk-feature-gate
						.state=${this.subscriptionState?.state}
						.visible=${this.showFeatureGate}
						id="subscription-gate"
						class="scrollable"
						><p slot="feature">
							Brings all of your GitHub pull requests and issues into a unified actionable view to help to
							you more easily juggle work in progress, pending work, reviews, and more. Quickly see if
							anything requires your attention while keeping you focused.
						</p></gk-feature-gate
					>
					<gk-feature-gate .visible=${this.showConnectionGate} id="connection-gate" class="scrollable">
						<h3>No GitHub remotes are connected</h3>
						<p>
							This enables access to Pull Requests and Issues in the Focus View as well as provide
							additional information inside hovers and the Commit Details view, such as auto-linked issues
							and pull requests and avatars.
						</p>
						<gl-button appearance="alert" href="command:gitlens.connectRemoteProvider"
							>Connect to GitHub</gl-button
						>
					</gk-feature-gate>

					<div class="app__focus">
						<header class="app__header">
							<div class="app__header-group">
								<nav class="tab-filter" id="filter-focus-items">
									${vt(this.tabFilterOptionsWithCounts,(({label:e,value:t,count:o},n)=>He`
											<button
												class="tab-filter__tab ${(this.selectedTabFilter?t===this.selectedTabFilter:0===n)?"is-active":""}"
												type="button"
												data-tab="${t}"
												@click=${()=>this.selectedTabFilter=t}
											>
												${e} <gk-badge variant="filled">${o}</gk-badge>
											</button>
										`))}
								</nav>
								<gk-popover>
									<gk-button slot="trigger"
										><code-icon icon="list-filter"></code-icon> ${this.mineFilterMenuLabel}
										<code-icon icon="chevron-down"></code-icon
									></gk-button>
									<gk-menu class="mine-menu" @select=${this.onSelectMineFilter}>
										${vt(this.mineFilterOptions,(({label:e,value:t},o)=>He`
												<gk-menu-item
													data-value="${t}"
													?disabled=${this.selectedMineFilter?t===this.selectedMineFilter:0===o}
													>${e}</gk-menu-item
												>
											`))}
									</gk-menu>
								</gk-popover>
							</div>
							<div class="app__header-group">
								<gk-input
									class="app__search"
									label="Search field"
									label-visibility="sr-only"
									placeholder="Search"
									@input=${p(this.onSearchInput.bind(this),200)}
								>
									<code-icon slot="prefix" icon="search"></code-icon>
								</gk-input>
							</div>
						</header>
						<main class="app__main">
							<gk-focus-container id="list-focus-items">
								<span slot="key"><code-icon icon="circle-large-outline"></code-icon></span>
								<span slot="date"><code-icon icon="gl-clock"></code-icon></span>
								<span slot="repo">Repo / Branch</span>
								${this.focusItemsContent()}
							</gk-focus-container>
						</main>
					</div>
				</div>
			</div>
		`}onSearchInput(e){const t=e.target.value;""===t||t.length<3?this.searchText=void 0:this.searchText=t}onSelectMineFilter(e){const t=e.detail?.target;if(null!=t?.dataset?.value){this.selectedMineFilter=t.dataset.value;const e=t.closest("gk-popover");e?.hidePopover()}}createRenderRoot(){return this}};ci.styles=[Tt],ai([gt("#subscription-gate",!0)],ci.prototype,"subscriptionEl",2),ai([gt("#connection-gate",!0)],ci.prototype,"connectionEl",2),ai([gt("#subscription-gate-badge",!0)],ci.prototype,"subScriptionBadgeEl",2),ai([bt()],ci.prototype,"selectedTabFilter",2),ai([bt()],ci.prototype,"selectedMineFilter",2),ai([bt()],ci.prototype,"searchText",2),ai([pt({type:Object})],ci.prototype,"state",2),ci=ai([dt("gl-focus-app")],ci);class li extends te{constructor(){super("FocusApp")}onInitialize(){this.attachState()}onBind(){const e=super.onBind?.()??[];return e.push(k.on("gk-pull-request-row","open-worktree",((e,t)=>this.onOpenWorktree(e,t))),k.on("gk-pull-request-row","open-branch",((e,t)=>this.onOpenBranch(e,t))),k.on("gk-pull-request-row","switch-branch",((e,t)=>this.onSwitchBranch(e,t)))),e}get component(){return null==this._component&&(this._component=document.getElementById("app")),this._component}attachState(){this.component.state=this.state}onOpenBranch(e,t){null!=e.detail?.refs?.head&&this.sendCommand(d,{pullRequest:e.detail})}onSwitchBranch(e,t){null!=e.detail?.refs?.head&&this.sendCommand(u,{pullRequest:e.detail})}onOpenWorktree(e,t){null!=e.detail?.refs?.head&&this.sendCommand(h,{pullRequest:e.detail})}onMessageReceived(e){const t=e.data;if(this.log(`onMessageReceived(${t.id}): name=${t.method}`),t.method===f.method)a(f,t,(e=>{this.state=e.state,this.setState(this.state),this.attachState()}))}}new li})();var i=n.S;export{i as FocusApp};