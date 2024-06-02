import{_ as g,g as d,r as m,h as v,o as l,i as x,j as e,k as h,l as B,c as b,a as t,b as n,t as _,m as S}from"./DP0v5Lqn.js";import{_ as k}from"./DVZ69HJF.js";const y={__name:"BatchChart",setup(u){const{$dashboardStore:a}=h(),o=d(()=>a.dashboard.data.usersByBatch),i=m(o.value.map(s=>s.count)),r=m({chart:{type:"donut",height:350},labels:o.value.map(s=>s._id),responsive:[{breakpoint:480,options:{chart:{width:300},legend:{position:"bottom"}}}],legend:{position:"right",offsetY:0,height:230},title:{text:"Batch-wise Student Count",align:"center"}});return(s,p)=>{const c=v("apexchart");return l(),x(c,{type:"donut",width:"500",options:e(r),series:e(i)},null,8,["options","series"])}}},w=g(y,[["__scopeId","data-v-1f395143"]]),C={__name:"BoardChart",setup(u){const{$dashboardStore:a}=h(),o=d(()=>a.dashboard.data.usersByBoard),i=d(()=>o.value.map(s=>s.count)),r=d(()=>({chart:{type:"donut",height:350},labels:o.value.map(s=>s._id),title:{text:"Board-wise Student Count",align:"center"},responsive:[{breakpoint:480,options:{chart:{width:300},legend:{position:"bottom"}}}],legend:{position:"right",offsetY:0,height:230}}));return(s,p)=>{const c=v("apexchart");return l(),x(c,{type:"donut",width:"500",options:e(r),series:e(i)},null,8,["options","series"])}}},D=g(C,[["__scopeId","data-v-a513f122"]]),$={key:0,class:"space-y-5"},z={class:"grid gap-3 md:grid-cols-2"},I={class:"flex items-center gap-3 p-3 border rounded-md"},N={class:"p-3 bg-blue-50"},O=t("h3",{class:"text-xl font-semibold"},"Total Student",-1),T={class:"font-semibold"},V={class:"flex items-center gap-3 p-3 border rounded-md"},Y={class:"p-3 bg-blue-50"},j=t("h3",{class:"text-xl font-semibold"},"Total Submission",-1),A={class:"font-semibold"},E={class:"grid gap-3 md:grid-cols-2"},L={class:"flex items-center gap-3 p-3 border rounded-md"},M={class:"p-3 bg-blue-50"},P=t("h3",{class:"text-xl font-semibold"},"Submitted",-1),q={class:"font-semibold"},F={class:"flex items-center gap-3 p-3 border rounded-md"},G={class:"p-3 bg-blue-50"},H=t("h3",{class:"text-xl font-semibold"},"Pending",-1),J={class:"font-semibold"},K={class:"grid gap-5 lg:grid-cols-2"},Q={class:"mt-10 p-5 border"},R={class:"mt-10 p-5 border"},U={key:1},Z={__name:"index",setup(u){const{$dashboardStore:a}=h(),o=d(()=>a.dashboard);return B(async()=>{await a.getDashboard()}),(i,r)=>{const s=S,p=w,c=D,f=k;return e(o)?(l(),b("div",$,[t("div",z,[t("div",I,[t("div",N,[n(s,{name:"lucide:users",size:"20",color:"blue"})]),t("div",null,[O,t("p",T,_(e(o).data.totalStudents),1)])]),t("div",V,[t("div",Y,[n(s,{name:"lucide:check",size:"20",color:"blue"})]),t("div",null,[j,t("p",A,_(e(o).data.totalSubmissions),1)])])]),t("div",E,[t("div",L,[t("div",M,[n(s,{name:"lucide:check",size:"20",color:"blue"})]),t("div",null,[P,t("p",q,_(e(o).data.submittedSubmissions),1)])]),t("div",F,[t("div",G,[n(s,{name:"lucide:clock",size:"20",color:"blue"})]),t("div",null,[H,t("p",J,_(e(o).data.totalSubmissions-e(o).data.submittedSubmissions),1)])])]),t("div",null,[t("div",K,[t("div",Q,[n(p)]),t("div",R,[n(c)])])])])):(l(),b("div",U,[n(f)]))}}};export{Z as default};
