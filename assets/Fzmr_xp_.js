import{_ as f,g as _,r as y,h as $,o as p,i as B,j as i,k as x,c as m,a as t,b as n,w as v,d as D,F as M,l as I,t as S,m as K,n as V,q as U,s as w,v as j,p as H,f as T,x as N}from"./BudS9JwL.js";import{_ as O}from"./ChGDjVA6.js";import{_ as L}from"./C3SLqOER.js";import{_ as Q}from"./SUovRVK4.js";import{H as R}from"./DsxYSGlx.js";import{_ as z}from"./TQb6-wOB.js";const F={__name:"BatchChart",setup(r){const{$dashboardStore:s}=x(),o=_(()=>s.dashboard.data.usersByBatch),a=y(o.value.map(e=>e.count)),c=y({chart:{type:"donut",height:350},labels:o.value.map(e=>e._id),responsive:[{breakpoint:480,options:{chart:{width:300},legend:{position:"bottom"}}}],legend:{position:"right",offsetY:0,height:230},title:{text:"Batch-wise Student Count",align:"center"}});return(e,h)=>{const d=$("apexchart");return p(),B(d,{type:"donut",width:"500",options:i(c),series:i(a)},null,8,["options","series"])}}},Y=f(F,[["__scopeId","data-v-1f395143"]]),E={__name:"BoardChart",setup(r){const{$dashboardStore:s}=x(),o=_(()=>s.dashboard.data.usersByBoard),a=_(()=>o.value.map(e=>e.count)),c=_(()=>({chart:{type:"donut",height:350},labels:o.value.map(e=>e._id),title:{text:"Board-wise Student Count",align:"center"},responsive:[{breakpoint:480,options:{chart:{width:300},legend:{position:"bottom"}}}],legend:{position:"right",offsetY:0,height:230}}));return(e,h)=>{const d=$("apexchart");return p(),B(d,{type:"donut",width:"500",options:i(c),series:i(a)},null,8,["options","series"])}}},q=f(E,[["__scopeId","data-v-a513f122"]]),G={__name:"MarkChart",setup(r){const{$dashboardStore:s}=x(),o=_(()=>s.dashboard.data.marksDistribution),a=_(()=>[{name:"Students",data:o.value.map(e=>e.count)}]),c=_(()=>({chart:{type:"bar",height:350,zoom:{enabled:!0,type:"x",autoScaleYaxis:!0}},title:{text:"Marks Distribution",align:"center"},xaxis:{title:{text:"Marks"},categories:o.value.map(e=>e._id.toString()),labels:{formatter:function(e){return e=="0"?"0 - 10":`${e} - ${parseInt(e)+10}`}}},yaxis:{title:{text:"Studnet's Count"}},dataLabels:{enabled:!1},fill:{colors:["#ff7f0e"]},stroke:{curve:"smooth",colors:["#ff7f3e"]}}));return(e,h)=>{const d=$("apexchart");return p(),B(d,{type:"bar",options:i(c),series:i(a)},null,8,["options","series"])}}},J=f(G,[["__scopeId","data-v-ea412b55"]]),P={data(){return{searchQuery:"",sortKey:"",sortAsc:!0,marksDistribution:[{range:"10-20",count:2799},{range:"20-30",count:3761},{range:"30-40",count:3521},{range:"40-50",count:2676},{range:"50-60",count:1655},{range:"60-70",count:856},{range:"70-80",count:307},{range:"80-90",count:58},{range:"90-100",count:1}]}},computed:{filteredAndSortedMarks(){let r=this.marksDistribution.filter(s=>s.range.includes(this.searchQuery));return this.sortKey&&r.sort((s,o)=>{let a=s[this.sortKey]>o[this.sortKey]?1:s[this.sortKey]<o[this.sortKey]?-1:0;return this.sortAsc?a:-a}),r}},methods:{sortBy(r){this.sortKey===r?this.sortAsc=!this.sortAsc:(this.sortKey=r,this.sortAsc=!0)}}},W={class:"container mx-auto p-4"},X={class:"flex justify-between items-center mb-4"},Z=t("h2",{class:"text-xl font-semibold text-center"}," Mark Distribution Summary ",-1),tt={class:"flex gap-2 flex-wrap"},et={class:"bg-white border rounded-md overflow-hidden"},st={class:"min-w-full"},ot=t("thead",null,[t("tr",{class:"bg-gray-200"},[t("th",{class:"py-2"},"Score Range"),t("th",{class:"py-2"},"Student's Count")])],-1),at={class:"py-2 text-center"},nt={class:"py-2 text-center"};function rt(r,s,o,a,c,e){const h=O,d=K;return p(),m("div",W,[t("div",X,[n(h,{modelValue:c.searchQuery,"onUpdate:modelValue":s[0]||(s[0]=l=>c.searchQuery=l),type:"text",placeholder:"Search..."},null,8,["modelValue"]),Z,t("div",tt,[n(d,{onClick:s[1]||(s[1]=l=>e.sortBy("range")),class:"mx-2"},{default:v(()=>[D("Sort by Range")]),_:1}),n(d,{onClick:s[2]||(s[2]=l=>e.sortBy("count")),class:"mx-2"},{default:v(()=>[D("Sort by Count")]),_:1})])]),t("div",et,[t("table",st,[ot,t("tbody",null,[(p(!0),m(M,null,I(e.filteredAndSortedMarks,l=>(p(),m("tr",{key:l.range,class:"border-b"},[t("td",at,S(l.range),1),t("td",nt,S(l.count),1)]))),128))])])])])}const ct=f(P,[["render",rt]]),it=r=>(H("data-v-17ef53cf"),r=r(),T(),r),dt={class:"flex justify-between"},lt=it(()=>t("div",null,[t("h2",{class:"text-xl font-semibold"},"Marks Distribution"),t("p",null,"Batch & Board Analysis")],-1)),_t={class:"flex justify-end gap-3"},ut={key:0,class:"mt-10 p-5 border"},pt={__name:"BoardAnalysis",setup(r){const{$dashboardStore:s}=x(),o=_(()=>s.dashboard.data.boardwiseMarks),a=y(""),c=y(""),e=async()=>{await s.getDashboard(a.value,c.value)};V(()=>{e()}),U([a,c],()=>{e()});const h=["Dhaka","Rajshahi","Comilla","Jessore","Chittagong","Barisal","Sylhet","Dinajpur","Mymensingh","Madrasah","Technical","Other"],d=_(()=>[{name:"Students",data:o.value.map(u=>u.count)}]),l=_(()=>({chart:{type:"bar",height:350},title:{text:"Marks Distribution",align:"center"},xaxis:{title:{text:"Marks"},categories:o.value.map(u=>u._id.toString()),labels:{formatter:function(u){return u=="10"?"10 - 50":`${u} - ${parseInt(u)+50}`}}},yaxis:{title:{text:"Studnet's Count"}},dataLabels:{enabled:!1},fill:{colors:["#ff7f0e"]},stroke:{curve:"smooth",colors:["#ff7f3e"]}}));return(u,b)=>{const g=L,C=Q,A=$("apexchart");return p(),m(M,null,[t("div",dt,[lt,t("div",_t,[n(C,{label:"HSC Batch*",name:"hsc_batch"},{default:v(()=>[n(g,{options:i(R),icon:"i-heroicons-academic-cap",modelValue:i(c),"onUpdate:modelValue":b[0]||(b[0]=k=>w(c)?c.value=k:null),placeholder:"HSC Batch"},null,8,["options","modelValue"])]),_:1}),n(C,{label:"Board*",name:"board"},{default:v(()=>[n(g,{icon:"i-heroicons-academic-cap",modelValue:i(a),"onUpdate:modelValue":b[1]||(b[1]=k=>w(a)?a.value=k:null),options:h,placeholder:"HSC Board"},null,8,["modelValue"])]),_:1})])]),i(o)?(p(),m("div",ut,[n(A,{type:"bar",options:i(l),series:i(d)},null,8,["options","series"])])):j("",!0)],64)}}},ht=f(pt,[["__scopeId","data-v-17ef53cf"]]),mt={key:0,class:"space-y-5"},bt={class:"grid gap-3 md:grid-cols-2"},ft={class:"flex items-center gap-3 p-3 border rounded-md"},xt={class:"p-3 bg-blue-50"},gt=t("h3",{class:"text-xl font-semibold"},"Total Student",-1),yt={class:"font-semibold"},vt={class:"flex items-center gap-3 p-3 border rounded-md"},St={class:"p-3 bg-blue-50"},$t=t("h3",{class:"text-xl font-semibold"},"Total Submission",-1),kt={class:"font-semibold"},Bt={class:"grid gap-5 lg:grid-cols-2"},Ct={class:"mt-10 p-5 border"},Dt={class:"mt-10 p-5 border"},wt={class:"space-y-5"},Mt={class:"mt-10 p-5 border"},Vt={class:"mt-10 p-5 border"},At={key:1},Nt={__name:"index",setup(r){const{$dashboardStore:s}=x(),o=_(()=>s.dashboard);return V(async()=>{await s.getDashboard()}),(a,c)=>{const e=N,h=Y,d=q,l=J,u=ct,b=ht,g=z;return i(o)?(p(),m("div",mt,[t("div",bt,[t("div",ft,[t("div",xt,[n(e,{name:"lucide:users",size:"20",color:"blue"})]),t("div",null,[gt,t("p",yt,S(i(o).data.totalStudents),1)])]),t("div",vt,[t("div",St,[n(e,{name:"lucide:check",size:"20",color:"blue"})]),t("div",null,[$t,t("p",kt,S(i(o).data.totalSubmissions),1)])])]),t("div",null,[t("div",Bt,[t("div",Ct,[n(h)]),t("div",Dt,[n(d)])])]),t("div",wt,[t("div",Mt,[n(l)]),t("div",Vt,[n(u)]),n(b)])])):(p(),m("div",At,[n(g)]))}}};export{Nt as default};
