import{J as B,k,L as Z,r as $,g as u,ai as G,O as _,ar as p,P as S,_ as x,D as P,af as M,Q as ee,R as T,ah as ae,a6 as ne,n as le,S as te,U as b,o as h,c as N,a as ie,X as ue,Y as O,N as C,b as E,v as V,a7 as oe}from"./BudS9JwL.js";const de=Symbol.for("nuxt:client-only"),se="data-n-ids",re="-";function Ie(e){var c,g,d,o,m,I;if(typeof e!="string")throw new TypeError("[nuxt] [useId] key must be a string.");e=`n${e.slice(1)}`;const n=k(),i=Z();if(!i)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");n._id||(n._id=0),i._nuxtIdIndex||(i._nuxtIdIndex={}),(c=i._nuxtIdIndex)[e]||(c[e]=0);const a=e+re+i._nuxtIdIndex[e]++;if(n.payload.serverRendered&&n.isHydrating&&!B(de,!1)){const l=((g=i.vnode.el)==null?void 0:g.nodeType)===8&&((o=(d=i.vnode.el)==null?void 0:d.nextElementSibling)!=null&&o.getAttribute)?(m=i.vnode.el)==null?void 0:m.nextElementSibling:i.vnode.el,s=JSON.parse(((I=l==null?void 0:l.getAttribute)==null?void 0:I.call(l,se))||"{}");if(s[a])return s[a]}return e+"_"+n._id++}const ce=(e,n)=>{const i=B("form-events",void 0),a=B("form-group",void 0),c=B("form-inputs",void 0);a&&(e!=null&&e.id&&(a.inputId.value=e==null?void 0:e.id),c&&(c.value[a.name.value]=a.inputId.value));const g=$(!1);function d(l,s){i&&i.emit({type:l,path:s})}function o(){d("blur",a==null?void 0:a.name.value),g.value=!0}function m(){d("change",a==null?void 0:a.name.value)}const I=G(()=>{(g.value||a!=null&&a.eagerValidation.value)&&d("input",a==null?void 0:a.name.value)},300);return{inputId:u(()=>(e==null?void 0:e.id)??(a==null?void 0:a.inputId.value)),name:u(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:u(()=>{var s;const l=n.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??l??((s=n==null?void 0:n.default)==null?void 0:s.size)}),color:u(()=>{var l;return(l=a==null?void 0:a.error)!=null&&l.value?"red":e==null?void 0:e.color}),emitFormBlur:o,emitFormInput:I,emitFormChange:m}},r=_(S.ui.strategy,S.ui.input,p),ge=P({components:{UIcon:M},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>r.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(r.size).includes(e)}},color:{type:String,default:()=>r.default.color,validator(e){return[...S.ui.colors,...Object.keys(r.color)].includes(e)}},variant:{type:String,default:()=>r.default.variant,validator(e){return[...Object.keys(r.variant),...Object.values(r.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:n,slots:i}){const{ui:a,attrs:c}=ee("input",T(e,"ui"),r,T(e,"class")),{size:g,rounded:d}=ae({ui:a,props:e}),{emitFormBlur:o,emitFormInput:m,size:I,color:l,inputId:s,name:R}=ce(e,r),v=u(()=>g.value||I.value),y=$(ne({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),j=$(null),q=()=>{var t;e.autofocus&&((t=j.value)==null||t.focus())},w=t=>{y.value.trim&&(t=t.trim()),(y.value.number||e.type==="number")&&(t=oe(t)),n("update:modelValue",t),m()},D=t=>{y.value.lazy||w(t.target.value)},U=t=>{if(e.type==="file"){const f=t.target.files;n("change",f)}else{const f=t.target.value;n("change",f),y.value.lazy&&w(f),y.value.trim&&(t.target.value=f.trim())}},W=t=>{o(),n("blur",t)};le(()=>{setTimeout(()=>{q()},e.autofocusDelay)});const J=u(()=>{var f,F;const t=((F=(f=a.value.color)==null?void 0:f[l.value])==null?void 0:F[e.variant])||a.value.variant[e.variant];return te(b(a.value.base,a.value.form,d.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[v.value],e.padded?a.value.padding[v.value]:"p-0",t==null?void 0:t.replaceAll("{color}",l.value),(z.value||i.leading)&&a.value.leading.padding[v.value],(A.value||i.trailing)&&a.value.trailing.padding[v.value]),e.inputClass)}),z=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),A=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),L=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),Y=u(()=>e.loading&&!z.value?e.loadingIcon:e.trailingIcon||e.icon),H=u(()=>b(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[v.value])),K=u(()=>b(a.value.icon.base,l.value&&S.ui.colors.includes(l.value)&&a.value.icon.color.replaceAll("{color}",l.value),a.value.icon.size[v.value],e.loading&&a.value.icon.loading)),Q=u(()=>b(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[v.value])),X=u(()=>b(a.value.icon.base,l.value&&S.ui.colors.includes(l.value)&&a.value.icon.color.replaceAll("{color}",l.value),a.value.icon.size[v.value],e.loading&&!z.value&&a.value.icon.loading));return{ui:a,attrs:c,name:R,inputId:s,input:j,isLeading:z,isTrailing:A,inputClass:J,leadingIconName:L,leadingIconClass:K,leadingWrapperIconClass:H,trailingIconName:Y,trailingIconClass:X,trailingWrapperIconClass:Q,onInput:D,onChange:U,onBlur:W}}}),ve=["id","name","value","type","required","placeholder","disabled"];function fe(e,n,i,a,c,g){const d=M;return h(),N("div",{class:C(e.ui.wrapper)},[ie("input",ue({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.attrs,{onInput:n[0]||(n[0]=(...o)=>e.onInput&&e.onInput(...o)),onBlur:n[1]||(n[1]=(...o)=>e.onBlur&&e.onBlur(...o)),onChange:n[2]||(n[2]=(...o)=>e.onChange&&e.onChange(...o))}),null,16,ve),O(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(h(),N("span",{key:0,class:C(e.leadingWrapperIconClass)},[O(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[E(d,{name:e.leadingIconName,class:C(e.leadingIconClass)},null,8,["name","class"])])],2)):V("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(h(),N("span",{key:1,class:C(e.trailingWrapperIconClass)},[O(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[E(d,{name:e.trailingIconName,class:C(e.trailingIconClass)},null,8,["name","class"])])],2)):V("",!0)],2)}const ye=x(ge,[["render",fe]]);export{ye as _,Ie as a,ce as u};
