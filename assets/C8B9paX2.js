import{A as Q,r as g,B as R,g as m,l as F,C as z,D as L,F as Ce,n as W,E as Vt,G,H,T as Ot,I as jt,J as Mt,K as je,L as D,M as dt,N as pe,_ as ct,O as ft,P as $e,Q as Rt,R as Ut,o as T,c as P,a as S,S as Te,U as pt,V as _e,W as vt,d as ee,t as oe,v as fe,h as be,i as ke,w as M,b as $,X as qt,Y as Ht,Z as Nt,$ as It,j as w,a0 as Qt,s as Me,x as zt,y as X,m as mt,z as gt,k as ht,a1 as Wt}from"./DUjtdLeJ.js";import{c as yt,w as Gt,i as ve,f as Re,u as Ue,A as K,S as ae,o as x,t as bt,a as le,P as Ee,N as Z,b as Ze,T as Kt,d as Yt,e as xe,I as We,l as wt,g as j,h as Jt,j as qe,k as Xt,s as Zt,m as te,n as en,p as tn,q as nn,_ as on}from"./LCwV11Gg.js";import{_ as an}from"./B_SzS69p.js";import{u as ln,a as St,_ as rn}from"./B0X1AZYo.js";import{_ as sn}from"./BX5nLKi2.js";import{_ as un}from"./CoUQlGIM.js";const dn={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},cn={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}};function _t(e,t,n,a){yt.isServer||Q(l=>{e=e??window,e.addEventListener(t,n,a),l(()=>e.removeEventListener(t,n,a))})}var ce=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ce||{});function fn(){let e=g(0);return Gt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Et(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let a=x(n);a instanceof HTMLElement&&t.add(a)}return t}var Ct=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ct||{});let ue=Object.assign(R({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:g(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:a}){let l=g(null);a({el:l,$el:l});let o=m(()=>ve(l)),r=g(!1);F(()=>r.value=!0),z(()=>r.value=!1),vn({ownerDocument:o},m(()=>r.value&&!!(e.features&16)));let i=mn({ownerDocument:o,container:l,initialFocus:m(()=>e.initialFocus)},m(()=>r.value&&!!(e.features&2)));gn({ownerDocument:o,container:l,containers:e.containers,previousActiveElement:i},m(()=>r.value&&!!(e.features&8)));let s=fn();function d(v){let h=x(l);h&&(_=>_())(()=>{le(s.value,{[ce.Forwards]:()=>{Ee(h,Z.First,{skipElements:[v.relatedTarget]})},[ce.Backwards]:()=>{Ee(h,Z.Last,{skipElements:[v.relatedTarget]})}})})}let u=g(!1);function c(v){v.key==="Tab"&&(u.value=!0,requestAnimationFrame(()=>{u.value=!1}))}function f(v){if(!r.value)return;let h=Et(e.containers);x(l)instanceof HTMLElement&&h.add(x(l));let _=v.relatedTarget;_ instanceof HTMLElement&&_.dataset.headlessuiFocusGuard!=="true"&&($t(h,_)||(u.value?Ee(x(l),le(s.value,{[ce.Forwards]:()=>Z.Next,[ce.Backwards]:()=>Z.Previous})|Z.WrapAround,{relativeTo:v.target}):v.target instanceof HTMLElement&&ae(v.target)))}return()=>{let v={},h={ref:l,onKeydown:c,onFocusout:f},{features:_,initialFocus:y,containers:B,...b}=e;return L(Ce,[!!(_&4)&&L(Re,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:Ue.Focusable}),K({ourProps:h,theirProps:{...t,...b},slot:v,attrs:t,slots:n,name:"FocusTrap"}),!!(_&4)&&L(Re,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:Ue.Focusable})])}}}),{features:Ct});function pn(e){let t=g(Ze.slice());return W([e],([n],[a])=>{a===!0&&n===!1?bt(()=>{t.value.splice(0)}):a===!1&&n===!0&&(t.value=Ze.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(a=>a!=null&&a.isConnected))!=null?n:null}}function vn({ownerDocument:e},t){let n=pn(t);F(()=>{Q(()=>{var a,l;t.value||((a=e.value)==null?void 0:a.activeElement)===((l=e.value)==null?void 0:l.body)&&ae(n())},{flush:"post"})}),z(()=>{t.value&&ae(n())})}function mn({ownerDocument:e,container:t,initialFocus:n},a){let l=g(null),o=g(!1);return F(()=>o.value=!0),z(()=>o.value=!1),F(()=>{W([t,n,a],(r,i)=>{if(r.every((d,u)=>(i==null?void 0:i[u])===d)||!a.value)return;let s=x(t);s&&bt(()=>{var d,u;if(!o.value)return;let c=x(n),f=(d=e.value)==null?void 0:d.activeElement;if(c){if(c===f){l.value=f;return}}else if(s.contains(f)){l.value=f;return}c?ae(c):Ee(s,Z.First|Z.NoScroll)===Kt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(u=e.value)==null?void 0:u.activeElement})},{immediate:!0,flush:"post"})}),l}function gn({ownerDocument:e,container:t,containers:n,previousActiveElement:a},l){var o;_t((o=e.value)==null?void 0:o.defaultView,"focus",r=>{if(!l.value)return;let i=Et(n);x(t)instanceof HTMLElement&&i.add(x(t));let s=a.value;if(!s)return;let d=r.target;d&&d instanceof HTMLElement?$t(i,d)?(a.value=d,ae(d)):(r.preventDefault(),r.stopPropagation(),ae(s)):ae(a.value)},!0)}function $t(e,t){for(let n of e)if(n.contains(t))return!0;return!1}function hn(e){let t=Vt(e.getSnapshot());return z(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function yn(e,t){let n=e(),a=new Set;return{getSnapshot(){return n},subscribe(l){return a.add(l),()=>a.delete(l)},dispatch(l,...o){let r=t[l].call(n,...o);r&&(n=r,a.forEach(i=>i()))}}}function bn(){let e;return{before({doc:t}){var n;let a=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-a.clientWidth},after({doc:t,d:n}){let a=t.documentElement,l=a.clientWidth-a.offsetWidth,o=e-l;n.style(a,"paddingRight",`${o}px`)}}}function wn(){return Yt()?{before({doc:e,d:t,meta:n}){function a(l){return n.containers.flatMap(o=>o()).some(o=>o.contains(l))}t.microTask(()=>{var l;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=xe();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let o=(l=window.scrollY)!=null?l:window.pageYOffset,r=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let s=i.target.closest("a");if(!s)return;let{hash:d}=new URL(s.href),u=e.querySelector(d);u&&!a(u)&&(r=u)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(a(i.target)){let s=i.target;for(;s.parentElement&&a(s.parentElement);)s=s.parentElement;t.style(s,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement){if(i.target.tagName==="INPUT")return;if(a(i.target)){let s=i.target;for(;s.parentElement&&s.dataset.headlessuiPortal!==""&&!(s.scrollHeight>s.clientHeight||s.scrollWidth>s.clientWidth);)s=s.parentElement;s.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()}},{passive:!1}),t.add(()=>{var i;let s=(i=window.scrollY)!=null?i:window.pageYOffset;o!==s&&window.scrollTo(0,o),r&&r.isConnected&&(r.scrollIntoView({block:"nearest"}),r=null)})})}}:{}}function Sn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function _n(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let ne=yn(()=>new Map,{PUSH(e,t){var n;let a=(n=this.get(e))!=null?n:{doc:e,count:0,d:xe(),meta:new Set};return a.count++,a.meta.add(t),this.set(e,a),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let a={doc:e,d:t,meta:_n(n)},l=[wn(),bn(),Sn()];l.forEach(({before:o})=>o==null?void 0:o(a)),l.forEach(({after:o})=>o==null?void 0:o(a))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});ne.subscribe(()=>{let e=ne.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let a=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!a||!l&&a)&&ne.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&ne.dispatch("TEARDOWN",n)}});function En(e,t,n){let a=hn(ne),l=m(()=>{let o=e.value?a.value.get(e.value):void 0;return o?o.count>0:!1});return W([e,t],([o,r],[i],s)=>{if(!o||!r)return;ne.dispatch("PUSH",o,n);let d=!1;s(()=>{d||(ne.dispatch("POP",i??o,n),d=!0)})},{immediate:!0}),l}let Be=new Map,de=new Map;function et(e,t=g(!0)){Q(n=>{var a;if(!t.value)return;let l=x(e);if(!l)return;n(function(){var r;if(!l)return;let i=(r=de.get(l))!=null?r:1;if(i===1?de.delete(l):de.set(l,i-1),i!==1)return;let s=Be.get(l);s&&(s["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",s["aria-hidden"]),l.inert=s.inert,Be.delete(l))});let o=(a=de.get(l))!=null?a:0;de.set(l,o+1),o===0&&(Be.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}function Cn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let a=g(null),l=ve(a);function o(){var r,i,s;let d=[];for(let u of e)u!==null&&(u instanceof HTMLElement?d.push(u):"value"in u&&u.value instanceof HTMLElement&&d.push(u.value));if(t!=null&&t.value)for(let u of t.value)d.push(u);for(let u of(r=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?r:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(x(a))||u.contains((s=(i=x(a))==null?void 0:i.getRootNode())==null?void 0:s.host)||d.some(c=>u.contains(c))||d.push(u));return d}return{resolveContainers:o,contains(r){return o().some(i=>i.contains(r))},mainTreeNodeRef:a,MainTreeNode(){return n!=null?null:L(Re,{features:Ue.Hidden,ref:a})}}}let Tt=Symbol("ForcePortalRootContext");function $n(){return H(Tt,!1)}let tt=R({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return G(Tt,e.force),()=>{let{force:a,...l}=e;return K({theirProps:l,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}}),kt=Symbol("StackContext");var He=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(He||{});function Tn(){return H(kt,()=>{})}function kn({type:e,enabled:t,element:n,onUpdate:a}){let l=Tn();function o(...r){a==null||a(...r),l(...r)}F(()=>{W(t,(r,i)=>{r?o(0,e,n):i===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),z(()=>{t.value&&o(1,e,n)}),G(kt,o)}let xn=Symbol("DescriptionContext");function Ln({slot:e=g({}),name:t="Description",props:n={}}={}){let a=g([]);function l(o){return a.value.push(o),()=>{let r=a.value.indexOf(o);r!==-1&&a.value.splice(r,1)}}return G(xn,{register:l,slot:e,name:t,props:n}),m(()=>a.value.length>0?a.value.join(" "):void 0)}function Pn(e){let t=ve(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let a=t.createElement("div");return a.setAttribute("id","headlessui-portal-root"),t.body.appendChild(a)}const Ne=new WeakMap;function An(e){var t;return(t=Ne.get(e))!=null?t:0}function nt(e,t){let n=t(An(e));return n<=0?Ne.delete(e):Ne.set(e,n),n}let Fn=R({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let a=g(null),l=m(()=>ve(a)),o=$n(),r=H(xt,null),i=g(o===!0||r==null?Pn(a.value):r.resolveTarget());i.value&&nt(i.value,f=>f+1);let s=g(!1);F(()=>{s.value=!0}),Q(()=>{o||r!=null&&(i.value=r.resolveTarget())});let d=H(Ie,null),u=!1,c=Mt();return W(a,()=>{if(u||!d)return;let f=x(a);f&&(z(d.register(f),c),u=!0)}),z(()=>{var f,v;let h=(f=l.value)==null?void 0:f.getElementById("headlessui-portal-root");!h||i.value!==h||nt(i.value,_=>_-1)||i.value.children.length>0||(v=i.value.parentElement)==null||v.removeChild(i.value)}),()=>{if(!s.value||i.value===null)return null;let f={ref:a,"data-headlessui-portal":""};return L(Ot,{to:i.value},K({ourProps:f,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Ie=Symbol("PortalParentContext");function Dn(){let e=H(Ie,null),t=g([]);function n(o){return t.value.push(o),e&&e.register(o),()=>a(o)}function a(o){let r=t.value.indexOf(o);r!==-1&&t.value.splice(r,1),e&&e.unregister(o)}let l={register:n,unregister:a,portals:t};return[t,R({name:"PortalWrapper",setup(o,{slots:r}){return G(Ie,l),()=>{var i;return(i=r.default)==null?void 0:i.call(r)}}})]}let xt=Symbol("PortalGroupContext"),Bn=R({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let a=jt({resolveTarget(){return e.target}});return G(xt,a),()=>{let{target:l,...o}=e;return K({theirProps:o,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}});var Vn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Vn||{});let Qe=Symbol("DialogContext");function Lt(e){let t=H(Qe,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Lt),n}return t}let we="DC8F892D-2EBD-447C-A4C8-A03058436FF4",On=R({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:we},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:a,expose:l}){var o,r;let i=(o=e.id)!=null?o:`headlessui-dialog-${We()}`,s=g(!1);F(()=>{s.value=!0});let d=!1,u=m(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(d||(d=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),c=g(0),f=wt(),v=m(()=>e.open===we&&f!==null?(f.value&j.Open)===j.Open:e.open),h=g(null),_=m(()=>ve(h));if(l({el:h,$el:h}),!(e.open!==we||f!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof v.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${v.value===we?void 0:e.open}`);let y=m(()=>s.value&&v.value?0:1),B=m(()=>y.value===0),b=m(()=>c.value>1),p=H(Qe,null)!==null,[k,A]=Dn(),{resolveContainers:re,mainTreeNodeRef:me,MainTreeNode:ge}=Cn({portals:k,defaultContainers:[m(()=>{var E;return(E=ie.panelRef.value)!=null?E:h.value})]}),Pe=m(()=>b.value?"parent":"leaf"),he=m(()=>f!==null?(f.value&j.Closing)===j.Closing:!1),Ae=m(()=>p||he.value?!1:B.value),Fe=m(()=>{var E,C,V;return(V=Array.from((C=(E=_.value)==null?void 0:E.querySelectorAll("body > *"))!=null?C:[]).find(O=>O.id==="headlessui-portal-root"?!1:O.contains(x(me))&&O instanceof HTMLElement))!=null?V:null});et(Fe,Ae);let U=m(()=>b.value?!0:B.value),se=m(()=>{var E,C,V;return(V=Array.from((C=(E=_.value)==null?void 0:E.querySelectorAll("[data-headlessui-portal]"))!=null?C:[]).find(O=>O.contains(x(me))&&O instanceof HTMLElement))!=null?V:null});et(se,U),kn({type:"Dialog",enabled:m(()=>y.value===0),element:h,onUpdate:(E,C)=>{if(C==="Dialog")return le(E,{[He.Add]:()=>c.value+=1,[He.Remove]:()=>c.value-=1})}});let N=Ln({name:"DialogDescription",slot:m(()=>({open:v.value}))}),I=g(null),ie={titleId:I,panelRef:g(null),dialogState:y,setTitleId(E){I.value!==E&&(I.value=E)},close(){t("close",!1)}};G(Qe,ie);let Ye=m(()=>!(!B.value||b.value));Jt(re,(E,C)=>{E.preventDefault(),ie.close(),je(()=>C==null?void 0:C.focus())},Ye);let Je=m(()=>!(b.value||y.value!==0));_t((r=_.value)==null?void 0:r.defaultView,"keydown",E=>{Je.value&&(E.defaultPrevented||E.key===Xt.Escape&&(E.preventDefault(),E.stopPropagation(),ie.close()))});let Xe=m(()=>!(he.value||y.value!==0||p));return En(_,Xe,E=>{var C;return{containers:[...(C=E.containers)!=null?C:[],re]}}),Q(E=>{if(y.value!==0)return;let C=x(h);if(!C)return;let V=new ResizeObserver(O=>{for(let De of O){let ye=De.target.getBoundingClientRect();ye.x===0&&ye.y===0&&ye.width===0&&ye.height===0&&ie.close()}});V.observe(C),E(()=>V.disconnect())}),()=>{let{open:E,initialFocus:C,...V}=e,O={...n,ref:h,id:i,role:u.value,"aria-modal":y.value===0?!0:void 0,"aria-labelledby":I.value,"aria-describedby":N.value},De={open:y.value===0};return L(tt,{force:!0},()=>[L(Fn,()=>L(Bn,{target:h.value},()=>L(tt,{force:!1},()=>L(ue,{initialFocus:C,containers:re,features:B.value?le(Pe.value,{parent:ue.features.RestoreFocus,leaf:ue.features.All&~ue.features.FocusLock}):ue.features.None},()=>L(A,{},()=>K({ourProps:O,theirProps:{...V,...n},slot:De,attrs:n,slots:a,visible:y.value===0,features:qe.RenderStrategy|qe.Static,name:"Dialog"})))))),L(ge)])}}}),jn=R({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:a}){var l;let o=(l=e.id)!=null?l:`headlessui-dialog-panel-${We()}`,r=Lt("DialogPanel");a({el:r.panelRef,$el:r.panelRef});function i(s){s.stopPropagation()}return()=>{let{...s}=e,d={id:o,ref:r.panelRef,onClick:i};return K({ourProps:d,theirProps:s,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});function Mn(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Ve(e,...t){e&&t.length>0&&e.classList.add(...t)}function Se(e,...t){e&&t.length>0&&e.classList.remove(...t)}var ze=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(ze||{});function Rn(e,t){let n=xe();if(!e)return n.dispose;let{transitionDuration:a,transitionDelay:l}=getComputedStyle(e),[o,r]=[a,l].map(i=>{let[s=0]=i.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,u)=>u-d);return s});return o!==0?n.setTimeout(()=>t("finished"),o+r):t("finished"),n.add(()=>t("cancelled")),n.dispose}function ot(e,t,n,a,l,o){let r=xe(),i=o!==void 0?Mn(o):()=>{};return Se(e,...l),Ve(e,...t,...n),r.nextFrame(()=>{Se(e,...n),Ve(e,...a),r.add(Rn(e,s=>(Se(e,...a,...t),Ve(e,...l),i(s))))}),r.add(()=>Se(e,...t,...n,...a,...l)),r.add(()=>i("cancelled")),r.dispose}function Y(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let Ge=Symbol("TransitionContext");var Un=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Un||{});function qn(){return H(Ge,null)!==null}function Hn(){let e=H(Ge,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Nn(){let e=H(Ke,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Ke=Symbol("NestingContext");function Le(e){return"children"in e?Le(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Pt(e){let t=g([]),n=g(!1);F(()=>n.value=!0),z(()=>n.value=!1);function a(o,r=te.Hidden){let i=t.value.findIndex(({id:s})=>s===o);i!==-1&&(le(r,{[te.Unmount](){t.value.splice(i,1)},[te.Hidden](){t.value[i].state="hidden"}}),!Le(t)&&n.value&&(e==null||e()))}function l(o){let r=t.value.find(({id:i})=>i===o);return r?r.state!=="visible"&&(r.state="visible"):t.value.push({id:o,state:"visible"}),()=>a(o,te.Unmount)}return{children:t,register:l,unregister:a}}let At=qe.RenderStrategy,Ft=R({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:a,expose:l}){let o=g(0);function r(){o.value|=j.Opening,t("beforeEnter")}function i(){o.value&=~j.Opening,t("afterEnter")}function s(){o.value|=j.Closing,t("beforeLeave")}function d(){o.value&=~j.Closing,t("afterLeave")}if(!qn()&&Zt())return()=>L(Dt,{...e,onBeforeEnter:r,onAfterEnter:i,onBeforeLeave:s,onAfterLeave:d},a);let u=g(null),c=m(()=>e.unmount?te.Unmount:te.Hidden);l({el:u,$el:u});let{show:f,appear:v}=Hn(),{register:h,unregister:_}=Nn(),y=g(f.value?"visible":"hidden"),B={value:!0},b=We(),p={value:!1},k=Pt(()=>{!p.value&&y.value!=="hidden"&&(y.value="hidden",_(b),d())});F(()=>{let U=h(b);z(U)}),Q(()=>{if(c.value===te.Hidden&&b){if(f.value&&y.value!=="visible"){y.value="visible";return}le(y.value,{hidden:()=>_(b),visible:()=>h(b)})}});let A=Y(e.enter),re=Y(e.enterFrom),me=Y(e.enterTo),ge=Y(e.entered),Pe=Y(e.leave),he=Y(e.leaveFrom),Ae=Y(e.leaveTo);F(()=>{Q(()=>{if(y.value==="visible"){let U=x(u);if(U instanceof Comment&&U.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function Fe(U){let se=B.value&&!v.value,N=x(u);!N||!(N instanceof HTMLElement)||se||(p.value=!0,f.value&&r(),f.value||s(),U(f.value?ot(N,A,re,me,ge,I=>{p.value=!1,I===ze.Finished&&i()}):ot(N,Pe,he,Ae,ge,I=>{p.value=!1,I===ze.Finished&&(Le(k)||(y.value="hidden",_(b),d()))})))}return F(()=>{W([f],(U,se,N)=>{Fe(N),B.value=!1},{immediate:!0})}),G(Ke,k),en(m(()=>le(y.value,{visible:j.Open,hidden:j.Closed})|o.value)),()=>{let{appear:U,show:se,enter:N,enterFrom:I,enterTo:ie,entered:Ye,leave:Je,leaveFrom:Xe,leaveTo:E,...C}=e,V={ref:u},O={...C,...v.value&&f.value&&yt.isServer?{class:D([n.class,C.class,...A,...re])}:{}};return K({theirProps:O,ourProps:V,slot:{},slots:a,attrs:n,features:At,visible:y.value==="visible",name:"TransitionChild"})}}}),In=Ft,Dt=R({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:a}){let l=wt(),o=m(()=>e.show===null&&l!==null?(l.value&j.Open)===j.Open:e.show);Q(()=>{if(![!0,!1].includes(o.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let r=g(o.value?"visible":"hidden"),i=Pt(()=>{r.value="hidden"}),s=g(!0),d={show:o,appear:m(()=>e.appear||!s.value)};return F(()=>{Q(()=>{s.value=!1,o.value?r.value="visible":Le(i)||(r.value="hidden")})}),G(Ke,i),G(Ge,d),()=>{let u=tn(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),c={unmount:e.unmount};return K({ourProps:{...c,as:"template"},theirProps:{},slot:{},slots:{...a,default:()=>[L(In,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...c,...u},a.default)]},attrs:{},features:At,visible:r.value==="visible",name:"Transition"})}}});const at=dt(pe.ui.strategy,pe.ui.checkbox,dn),Qn=R({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:void 0},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>at.default.color,validator(e){return pe.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:n,attrs:a}=ft("checkbox",$e(e,"ui"),at,$e(e,"class")),{emitFormChange:l,color:o,name:r,inputId:i}=ln(e),s=i.value??St("$w0Dlaqhaps"),d=m({get(){return e.modelValue},set(f){t("update:modelValue",f)}}),u=f=>{t("change",f.target.checked),l()},c=m(()=>Rt(Ut(n.value.base,n.value.form,n.value.rounded,n.value.background,n.value.border,o.value&&n.value.ring.replaceAll("{color}",o.value),o.value&&n.value.color.replaceAll("{color}",o.value)),e.inputClass));return{ui:n,attrs:a,toggle:d,inputId:s,name:r,inputClass:c,onChange:u}}}),zn=["data-n-ids"],Wn=["id","name","required","value","disabled","indeterminate"],Gn=["for"];function Kn(e,t,n,a,l,o){return T(),P("div",{class:D(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[S("div",{class:D(e.ui.container)},[Te(S("input",_e({id:e.inputId,"onUpdate:modelValue":t[0]||(t[0]=r=>e.toggle=r),name:e.name,required:e.required,value:e.value,disabled:e.disabled,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:t[1]||(t[1]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,Wn),[[pt,e.toggle]])],2),e.label||e.$slots.label?(T(),P("div",{key:0,class:D(e.ui.inner)},[S("label",{for:e.inputId,class:D(e.ui.label)},[vt(e.$slots,"label",{},()=>[ee(oe(e.label),1)]),e.required?(T(),P("span",{key:0,class:D(e.ui.required)},"*",2)):fe("",!0)],10,Gn),e.help?(T(),P("p",{key:0,class:D(e.ui.help)},oe(e.help),3)):fe("",!0)],2)):fe("",!0)],10,zn)}const Yn=ct(Qn,[["render",Kn]]),Jn=dt(pe.ui.strategy,pe.ui.modal,cn),Xn=R({components:{HDialog:On,HDialogPanel:jn,TransitionRoot:Dt,TransitionChild:Ft},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:t}){const{ui:n,attrs:a}=ft("modal",$e(e,"ui"),Jn,$e(e,"class")),l=m({get(){return e.modelValue},set(s){t("update:modelValue",s)}}),o=m(()=>e.transition?{...n.value.transition}:{});function r(s){if(e.preventClose){t("close-prevented");return}l.value=s,t("close")}const i=()=>{t("after-leave")};return nn(()=>St("$CxPNJhEsgc")),{ui:n,attrs:a,isOpen:l,transitionClass:o,onAfterLeave:i,close:r}}});function Zn(e,t,n,a,l,o){const r=be("TransitionChild"),i=be("HDialogPanel"),s=be("HDialog"),d=be("TransitionRoot");return T(),ke(d,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:M(()=>[$(s,_e({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:M(()=>[e.overlay?(T(),ke(r,_e({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:M(()=>[S("div",{class:D([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):fe("",!0),S("div",{class:D(e.ui.inner)},[S("div",{class:D([e.ui.container,!e.fullscreen&&e.ui.padding])},[$(r,_e({as:"template",appear:e.appear},e.transitionClass),{default:M(()=>[$(i,{class:D([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:M(()=>[vt(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const eo=ct(Xn,[["render",Zn]]);var to=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],no=function(e){return to.map(function(t){return t.toLowerCase()}).indexOf(e.toLowerCase())!==-1},oo=function(e,t,n){Object.keys(t).filter(no).forEach(function(a){var l=t[a];typeof l=="function"&&(a==="onInit"?l(e,n):n.on(a.substring(2),function(o){return l(o,n)}))})},ao=function(e,t,n,a){var l=e.modelEvents?e.modelEvents:null,o=Array.isArray(l)?l.join(" "):l;W(a,function(r,i){n&&typeof r=="string"&&r!==i&&r!==n.getContent({format:e.outputFormat})&&n.setContent(r)}),n.on(o||"change input undo redo",function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))})},lo=function(e,t,n,a,l,o){a.setContent(o()),n.attrs["onUpdate:modelValue"]&&ao(t,n,a,l),oo(e,n.attrs,a)},lt=0,Bt=function(e){var t=Date.now(),n=Math.floor(Math.random()*1e9);return lt++,e+"_"+n+lt+String(t)},ro=function(e){return e!==null&&e.tagName.toLowerCase()==="textarea"},rt=function(e){return typeof e>"u"||e===""?[]:Array.isArray(e)?e:e.split(" ")},io=function(e,t){return rt(e).concat(rt(t))},so=function(e){return e==null},it=function(){return{listeners:[],scriptId:Bt("tiny-script"),scriptLoaded:!1}},uo=function(){var e=it(),t=function(l,o,r,i){var s=o.createElement("script");s.referrerPolicy="origin",s.type="application/javascript",s.id=l,s.src=r;var d=function(){s.removeEventListener("load",d),i()};s.addEventListener("load",d),o.head&&o.head.appendChild(s)},n=function(l,o,r){e.scriptLoaded?r():(e.listeners.push(r),l.getElementById(e.scriptId)||t(e.scriptId,l,o,function(){e.listeners.forEach(function(i){return i()}),e.scriptLoaded=!0}))},a=function(){e=it()};return{load:n,reinitialize:a}},co=uo(),fo=function(){return typeof window<"u"?window:global},J=function(){var e=fo();return e&&e.tinymce?e.tinymce:null},po={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return e==="html"||e==="text"}}},q=function(){return q=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},q.apply(this,arguments)},vo=function(e,t,n,a){return e(a||"div",{id:t,ref:n})},mo=function(e,t,n){return e("textarea",{id:t,visibility:"hidden",ref:n})},Oe={selector:void 0,target:void 0},st=R({props:po,setup:function(e,t){var n=e.init?q(q({},e.init),Oe):q({},Oe),a=qt(e),l=a.disabled,o=a.modelValue,r=a.tagName,i=g(null),s=null,d=e.id||Bt("tiny-vue"),u=e.init&&e.init.inline||e.inline,c=!!t.attrs["onUpdate:modelValue"],f=!0,v=e.initialValue?e.initialValue:"",h="",_=function(b){return c?function(){return o!=null&&o.value?o.value:""}:function(){return b?v:h}},y=function(){var b=_(f),p=q(q({},n),{readonly:e.disabled,target:i.value,plugins:io(n.plugins,e.plugins),toolbar:e.toolbar||n.toolbar,inline:u,setup:function(k){s=k,k.on("init",function(A){return lo(A,e,t,k,o,b)}),typeof n.setup=="function"&&n.setup(k)}});ro(i.value)&&(i.value.style.visibility=""),J().init(p),f=!1};W(l,function(b){var p;s!==null&&(typeof((p=s.mode)===null||p===void 0?void 0:p.set)=="function"?s.mode.set(b?"readonly":"design"):s.setMode(b?"readonly":"design"))}),W(r,function(b){var p;c||(h=s.getContent()),(p=J())===null||p===void 0||p.remove(s),je(function(){return y()})}),F(function(){if(J()!==null)y();else if(i.value&&i.value.ownerDocument){var b=e.cloudChannel?e.cloudChannel:"6",p=e.apiKey?e.apiKey:"no-api-key",k=so(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/".concat(p,"/tinymce/").concat(b,"/tinymce.min.js"):e.tinymceScriptSrc;co.load(i.value.ownerDocument,k,y)}}),Ht(function(){J()!==null&&J().remove(s)}),u||(Nt(function(){f||y()}),It(function(){var b;c||(h=s.getContent()),(b=J())===null||b===void 0||b.remove(s)}));var B=function(b){var p;h=s.getContent(),(p=J())===null||p===void 0||p.remove(s),n=q(q(q({},n),b),Oe),je(function(){return y()})};return t.expose({rerender:B,getEditor:function(){return s}}),function(){return u?vo(L,d,i,e.tagName):mo(L,d,i)}}});const go=["Physics 1st Paper","Physics 2nd Paper","Chemistry 1st Paper","Chemistry 2nd Paper","Biology 1st Paper","Biology 2nd Paper","English","GK"],ho=["None","Easy","Medium","Hard"],ut={min_height:200,menubar:!1,plugins:"lists link image table code help wordcount table autoresize",toolbar:"undo redo | subscript | superscript | formatselect | bold italic underline backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | image | table | wordcount"},yo={key:0,class:"p-5"},bo=S("div",null,[S("h1",{class:"text-lg font-semibold text-center"}," Create New MCQ ")],-1),wo={class:"my-3 space-y-5"},So={class:"sticky top-0 z-10 grid grid-cols-3 gap-5 py-5 bg-white"},_o={class:"flex flex-wrap mb-6 -mx-3"},Eo={class:"w-full px-3 mb-6 md:mb-0"},Co={class:"flex items-center justify-between"},$o=S("label",{class:"block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase",for:"grid-question"},"Question",-1),To={class:"inline-flex items-center space-x-2"},ko=S("label",{class:"block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase",for:"grid-question"},"Rich Text",-1),xo={key:1},Lo={class:"space-y-3"},Po={class:"flex items-center justify-between"},Ao={key:1},Fo={class:"py-2 my-3 text-center"},Do={__name:"ManageQuestion",props:{question:{type:Object},label:{type:String,default:"Create MCQ"},isEdit:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const{$axios:n}=ht(),a=e,l=g(!1),o=g(a.isEdit?{question:a.question.question,options:a.question.options.map(u=>({option_text:u.option_text,correct:u.correct})),subject:a.question.subject,difficulty:a.question.difficulty}:{question:"",options:[{option_text:"",correct:!1},{option_text:"",correct:!1},{option_text:"",correct:!1},{option_text:"",correct:!1}],subject:"",difficulty:""}),r=g({question:!0,a:!0,b:!0,c:!0,d:!0,subject:"",difficulty:""}),i=t,s=g(!1),d=async()=>{if(s.value=!0,o.value.options.filter(u=>u.correct).length==0){X().add({title:"Please select correct answer"}),s.value=!1;return}if(o.value.options.filter(u=>u.option_text.trim()=="").length>0){X().add({title:"Please fill all the options"}),s.value=!1;return}if(o.value.question.trim()==""){X().add({title:"Please fill the question"}),s.value=!1;return}try{if(a.isEdit){(await n.put("/questions/"+a.question._id,o.value)).status==201&&(i("close"),X().add({title:"Question edited successfully"})),s.value=!1;return}const{status:u}=await n.post("/questions",o.value);u===201&&(o.value={question:"",options:[{option_text:"",correct:!1},{option_text:"",correct:!1},{option_text:"",correct:!1},{option_text:"",correct:!1}],subject:"",difficulty:""},l.value=!1,X().add({title:"Question Uploaded"}),i("close")),s.value=!1}catch(u){console.log(u),X().add({title:"Something went wrong",description:u.response.data.message})}finally{s.value=!1}};return(u,c)=>{const f=mt,v=gt,h=on,_=an,y=Yn,B=rn,b=eo;return T(),P("div",null,[$(v,{onClick:c[0]||(c[0]=p=>l.value=!0)},{default:M(()=>[$(f,{name:e.isEdit?"lucide:edit":"lucide:plus"},null,8,["name"]),ee(" "+oe(e.label),1)]),_:1}),$(b,{modelValue:w(l),"onUpdate:modelValue":c[6]||(c[6]=p=>zt(l)?l.value=p:null),ui:{width:"md:max-w-2xl w-full"}},{default:M(()=>[w(o)?(T(),P("div",yo,[bo,S("form",{onSubmit:Qt(d,["prevent"])},[S("div",wo,[S("div",So,[$(h,{modelValue:w(o).subject,"onUpdate:modelValue":c[1]||(c[1]=p=>w(o).subject=p),options:w(go),label:"Subject",placeholder:"Select Subject"},null,8,["modelValue","options"]),$(h,{modelValue:w(o).difficulty,"onUpdate:modelValue":c[2]||(c[2]=p=>w(o).difficulty=p),options:w(ho),label:"Difficulty",placeholder:"Select Difficulty"},null,8,["modelValue","options"])])]),S("div",_o,[S("div",Eo,[S("div",Co,[$o,S("div",To,[ko,Te(S("input",{type:"checkbox",class:"-mt-2 checkbox checkbox-primary","onUpdate:modelValue":c[3]||(c[3]=p=>w(r).question=p)},null,512),[[pt,w(r).question]])])]),w(r).question?(T(),P("div",xo,[$(w(st),{modelValue:w(o).question,"onUpdate:modelValue":c[5]||(c[5]=p=>w(o).question=p),"api-key":"dhu3tqgm970fbnm2joay4oofjz7xjpaa9cu3tlsxe8bz1m4o",init:w(ut)},null,8,["modelValue","init"])])):(T(),ke(_,{key:0,modelValue:w(o).question,"onUpdate:modelValue":c[4]||(c[4]=p=>w(o).question=p),placeholder:"Question"},null,8,["modelValue"]))])]),S("div",Lo,[(T(),P(Ce,null,Me(["a","b","c","d"],(p,k)=>S("div",{key:k,class:"w-full p-1 space-y-2"},[S("div",Po,[$(y,{modelValue:w(o).options[k].correct,"onUpdate:modelValue":A=>w(o).options[k].correct=A,label:`Question ${p.toUpperCase()}`},null,8,["modelValue","onUpdate:modelValue","label"]),$(y,{modelValue:w(r)[p],"onUpdate:modelValue":A=>w(r)[p]=A,label:"Rich Text"},null,8,["modelValue","onUpdate:modelValue"])]),w(r)[p]?(T(),P("div",Ao,[$(w(st),{modelValue:w(o).options[k].option_text,"onUpdate:modelValue":A=>w(o).options[k].option_text=A,"api-key":"dhu3tqgm970fbnm2joay4oofjz7xjpaa9cu3tlsxe8bz1m4o",init:w(ut)},null,8,["modelValue","onUpdate:modelValue","init"])])):(T(),ke(B,{key:0,modelValue:w(o).options[k].option_text,"onUpdate:modelValue":A=>w(o).options[k].option_text=A,placeholder:"Answer"},null,8,["modelValue","onUpdate:modelValue"]))])),64))]),S("div",Fo,[$(v,{size:"md",class:D({loading:w(s)}),type:"submit"},{default:M(()=>[ee(oe(e.isEdit?"Edit":"Create")+" MCQ ",1)]),_:1},8,["class"])])],32)])):fe("",!0)]),_:1},8,["modelValue"])])}}},Bo={class:"flex justify-between print:hidden"},Vo=S("h1",{class:"text-2xl font-semibold"},"Questions",-1),Oo={key:0,class:"my-5 space-y-5"},jo={class:"flex gap-3"},Mo={class:"mt-3 text-lg font-semibold"},Ro={class:"flex flex-wrap gap-3 mt-4"},Uo={class:"flex gap-3 items-center mt-3 print:hidden"},qo={key:1},Go={__name:"questions",setup(e){const{$axios:t}=ht(),n=g(null),a=async()=>{const{data:o}=await t("/questions");n.value=o.questions},l=async o=>{confirm("Are you sure you want to delete this question?")&&(await t.delete(`/questions/${o}`),X().add({title:"Question deleted successfully"}),a())};return F(()=>{a()}),(o,r)=>{const i=Do,s=sn,d=mt,u=gt,c=un,f=Wt("katex");return T(),P("div",null,[S("div",Bo,[Vo,$(i,{onClose:a})]),w(n)?(T(),P("div",Oo,[(T(!0),P(Ce,null,Me(w(n),(v,h)=>(T(),P("div",{key:v._id,class:"p-5 border rounded-2xl"},[S("div",jo,[$(s,{color:"amber"},{default:M(()=>[ee(" Q. "+oe(h+1),1)]),_:2},1024),$(s,{color:"blue"},{default:M(()=>[ee(oe(v.subject),1)]),_:2},1024),$(s,{color:"orange"},{default:M(()=>[ee(oe(v.difficulty),1)]),_:2},1024)]),Te(S("div",Mo,null,512),[[f,v.question]]),S("div",Ro,[(T(!0),P(Ce,null,Me(v.options,(_,y)=>(T(),P("div",{key:y},[S("div",{class:D(["p-2 rounded-lg border",{"border-2 border-black":_.correct,"bg-white":!_.correct}])},[Te(S("div",null,null,512),[[f,_.option_text]])],2)]))),128))]),S("div",Uo,[$(i,{question:v,label:"Edit Question",isEdit:!0,onClose:a},null,8,["question"]),$(u,{onClick:_=>l(v._id),color:"red"},{default:M(()=>[$(d,{name:"lucide:trash"}),ee(" Delete ")]),_:2},1032,["onClick"])])]))),128))])):(T(),P("div",qo,[$(c)]))])}}};export{Go as default};