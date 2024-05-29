import{a7 as S,r as F,C as t,af as Q,x as X,aq as G,y as b,_,z as p,ac as w,A as x,B as A,ae as P,Y as ee,g as ae,D as le,E as y,o as N,c as h,a as ne,I as ie,K as j,J as I,b as M,n as q,Z as te}from"./CmUflXix.js";const ue=(e,n)=>{const c=S("form-events",void 0),a=S("form-group",void 0),v=S("form-inputs",void 0);a&&(e!=null&&e.id&&(a.inputId.value=e==null?void 0:e.id),v&&(v.value[a.name.value]=a.inputId.value));const f=F(!1);function d(i,g){c&&c.emit({type:i,path:g})}function u(){d("blur",a==null?void 0:a.name.value),f.value=!0}function z(){d("change",a==null?void 0:a.name.value)}const B=Q(()=>{(f.value||a!=null&&a.eagerValidation.value)&&d("input",a==null?void 0:a.name.value)},300);return{inputId:t(()=>(e==null?void 0:e.id)??(a==null?void 0:a.inputId.value)),name:t(()=>(e==null?void 0:e.name)??(a==null?void 0:a.name.value)),size:t(()=>{var g;const i=n.size[a==null?void 0:a.size.value]?a==null?void 0:a.size.value:null;return(e==null?void 0:e.size)??i??((g=n==null?void 0:n.default)==null?void 0:g.size)}),color:t(()=>{var i;return(i=a==null?void 0:a.error)!=null&&i.value?"red":e==null?void 0:e.color}),emitFormBlur:u,emitFormInput:B,emitFormChange:z}},o=X(b.ui.strategy,b.ui.input,G),oe=p({components:{UIcon:w},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>o.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(o.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return[...b.ui.colors,...Object.keys(o.color)].includes(e)}},variant:{type:String,default:()=>o.default.variant,validator(e){return[...Object.keys(o.variant),...Object.values(o.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:n,slots:c}){const{ui:a,attrs:v}=x("input",A(e,"ui"),o,A(e,"class")),{size:f,rounded:d}=P({ui:a,props:e}),{emitFormBlur:u,emitFormInput:z,size:B,color:i,inputId:g,name:D}=ue(e,o),s=t(()=>f.value||B.value),m=F(ee({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),$=F(null),T=()=>{var l;e.autofocus&&((l=$.value)==null||l.focus())},k=l=>{m.value.trim&&(l=l.trim()),(m.value.number||e.type==="number")&&(l=te(l)),n("update:modelValue",l),z()},W=l=>{m.value.lazy||k(l.target.value)},E=l=>{if(e.type==="file"){const r=l.target.files;n("change",r)}else{const r=l.target.value;n("change",r),m.value.lazy&&k(r),m.value.trim&&(l.target.value=r.trim())}},U=l=>{u(),n("blur",l)};ae(()=>{setTimeout(()=>{T()},e.autofocusDelay)});const J=t(()=>{var r,V;const l=((V=(r=a.value.color)==null?void 0:r[i.value])==null?void 0:V[e.variant])||a.value.variant[e.variant];return le(y(a.value.base,a.value.form,d.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[s.value],e.padded?a.value.padding[s.value]:"p-0",l==null?void 0:l.replaceAll("{color}",i.value),(C.value||c.leading)&&a.value.leading.padding[s.value],(O.value||c.trailing)&&a.value.trailing.padding[s.value]),e.inputClass)}),C=t(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),O=t(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),L=t(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),K=t(()=>e.loading&&!C.value?e.loadingIcon:e.trailingIcon||e.icon),R=t(()=>y(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[s.value])),Y=t(()=>y(a.value.icon.base,i.value&&b.ui.colors.includes(i.value)&&a.value.icon.color.replaceAll("{color}",i.value),a.value.icon.size[s.value],e.loading&&a.value.icon.loading)),Z=t(()=>y(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[s.value])),H=t(()=>y(a.value.icon.base,i.value&&b.ui.colors.includes(i.value)&&a.value.icon.color.replaceAll("{color}",i.value),a.value.icon.size[s.value],e.loading&&!C.value&&a.value.icon.loading));return{ui:a,attrs:v,name:D,inputId:g,input:$,isLeading:C,isTrailing:O,inputClass:J,leadingIconName:L,leadingIconClass:Y,leadingWrapperIconClass:R,trailingIconName:K,trailingIconClass:H,trailingWrapperIconClass:Z,onInput:W,onChange:E,onBlur:U}}}),de=["id","name","value","type","required","placeholder","disabled"];function se(e,n,c,a,v,f){const d=w;return N(),h("div",{class:I(e.ui.wrapper)},[ne("input",ie({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.attrs,{onInput:n[0]||(n[0]=(...u)=>e.onInput&&e.onInput(...u)),onBlur:n[1]||(n[1]=(...u)=>e.onBlur&&e.onBlur(...u)),onChange:n[2]||(n[2]=(...u)=>e.onChange&&e.onChange(...u))}),null,16,de),j(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(N(),h("span",{key:0,class:I(e.leadingWrapperIconClass)},[j(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[M(d,{name:e.leadingIconName,class:I(e.leadingIconClass)},null,8,["name","class"])])],2)):q("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(N(),h("span",{key:1,class:I(e.trailingWrapperIconClass)},[j(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[M(d,{name:e.trailingIconName,class:I(e.trailingIconClass)},null,8,["name","class"])])],2)):q("",!0)],2)}const ce=_(oe,[["render",se]]);export{ce as _,ue as u};