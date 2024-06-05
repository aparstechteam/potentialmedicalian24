import{_ as k}from"./loading.f6273bc4.js";import{N as C}from"./index.7ee87b00.js";import"./lodash.2463e795.js";import{_ as p,s as R,r as f,o as d,c as l,a as t,b as c,w as u,d as M,v as S,F as g,e as L,n as N,t as i,f as m,g as v,h as _,u as $,i as j,j as A,k as B,p as E,l as I}from"./index.aa1576b5.js";import{r as b,_ as T}from"./MediTopper.3fda68d1.js";const P={data(){return{search:"",testResults:[],allresult:[],results:[],limit:1}},methods:{loadMore(){this.limit+=1},modeltestResults(){let e=b;this.testResults=e.map((s,o)=>({rank:o+1,...s})),this.allresult=b},millisToMinutesAndSeconds(e){var s=Math.floor(e/6e4),o=(e%6e4/1e3).toFixed(0);return s+":"+(o<10?"0":"")+o},searchResult(){this.testResults=this.allresult.filter(e=>{if(e.name.toLowerCase().includes(this.search.toLowerCase())||e.institute.toLowerCase().includes(this.search.toLowerCase())||e.roll.toLowerCase().includes(this.search.toLowerCase()))return e})},getStyle(e){return e==1?"success":e==2?"orange darken-2":e==3?"indigo":""},getborderStyle(e){let s={1:"s singleResult mb-2",2:"f singleResult mb-2",3:"d singleResult mb-2"};return s[e]?s[e]:"singleResult mb-2"}},created(){this.modeltestResults(),window.scrollTo(0,0)},computed:{user(){return R.state.user}}},V={class:"leaderboard bg-[#CAF6BB] py-5 min-h-screen px-2"},D=t("div",{class:"text-center my-2"},[t("img",{src:T,alt:"",class:"mx-auto md:h-24 h-20"})],-1),F=t("div",{class:"text-center"},[t("p",{class:"bg-yellow-400 font-bold text-lg s inline-flex p-2"},"ACS POTENTIAL MEDICALIAN 2024")],-1),H={class:"flex justify-end my-2 md:mx-auto md:w-1/2"},O=t("span",{class:"material-icons"},"leaderboard",-1),Q=v(" Leaderboard "),G={class:"p-5 mx-1 rounded md:w-1/2 md:mx-auto bg-yellow-400"},K={class:"flex gap-2"},q={key:0,class:"mt-4"},z={key:0},U=["id"],J={class:"flex items-center justify-center w-10 h-10 font-semibold rounded-full bg-gradient-to-t from-yellow-400 to-yellow-500"},W={class:"flex-1 ml-2 text-gray-900 md:ml-4"},X={class:"text-lg font-semibold"},Y=t("span",{class:"material-icons"},"visibility",-1),Z={key:1,class:"text-center"},tt=t("button",{class:"btn loading"},"Loading...",-1),et=[tt];function st(e,s,o,y,n,r){const h=f("router-link");return d(),l("div",V,[t("div",null,[c(h,{to:"/",class:"py-4"},{default:u(()=>[D]),_:1}),F,t("div",H,[c(h,{to:"/leaderboard",as:"button",class:"btn bg-green-500 btn-success text-white"},{default:u(()=>[O,Q]),_:1})]),t("div",G,[t("div",K,[M(t("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>n.search=a),placeholder:"Search by Name/College",onKeyup:s[1]||(s[1]=(...a)=>r.searchResult&&r.searchResult(...a)),class:"input input-bordered flex-1"},null,544),[[S,n.search]]),t("button",{class:"btn btn-success bg-green-500 text-white",onClick:s[2]||(s[2]=(...a)=>r.searchResult&&r.searchResult(...a))}," Result ")]),n.search?(d(),l("div",q,[n.allresult.length>0?(d(),l("div",z,[(d(!0),l(g,null,L(n.testResults.slice(0,n.limit),(a,w)=>(d(),l("div",{key:w,id:a.ttrx,class:N(["border bg-gray-50",`${r.getborderStyle(a.rank)} flex justify-between items-center p-5   rounded  shadow-md `]),style:{"scroll-margin":"100px"}},[t("span",J,i(a.rank),1),t("div",W,[t("h2",X,i(a.name),1),t("p",null,i(a.institute),1),t("p",null,i(a.roll),1)]),t("div",null,[c(h,{to:`/result/${a.rank}?rank=${a.rank}`,class:"btn bg-green-500 btn-success text-white btn-circle"},{default:u(()=>[Y]),_:2},1032,["to"])])],10,U))),128))])):(d(),l("div",Z,et))])):m("",!0)])])])}const at=p(P,[["render",st]]);const x=e=>(E("data-v-14260593"),e=e(),I(),e),dt={key:1,class:"text-gray-900"},lt={class:"container py-10 mx-auto text-center min-h-screen"},rt={class:"max-w-3xl rounded-2xl mx-auto p-3 space-y-5 bg-gray-50/50"},ot={class:"text-2xl"},nt=x(()=>t("h3",null,"Batch 23",-1)),it={key:0,class:"px-3"},ct=A('<div class="grid md:grid-cols-2 gap-4" data-v-14260593><div class="w-full border rounded-lg" data-v-14260593><table class="table w-full text-center" data-v-14260593><thead class="bg-white" data-v-14260593><th class="bg-white" colspan="2" data-v-14260593><h2 class="text-red-500 font-semibold text-lg" data-v-14260593> Marks Distribution </h2></th></thead><thead data-v-14260593><th data-v-14260593>Subject</th><th data-v-14260593>Marks</th></thead><tbody data-v-14260593><tr class="" data-v-14260593><td data-v-14260593>Biology</td><td data-v-14260593>30</td></tr><tr class="" data-v-14260593><td data-v-14260593>Chemistry</td><td data-v-14260593>25</td></tr><tr class="" data-v-14260593><td data-v-14260593>Physics</td><td data-v-14260593>20</td></tr><tr class="" data-v-14260593><td data-v-14260593>English</td><td data-v-14260593>15</td></tr><tr class="" data-v-14260593><td data-v-14260593>GK</td><td data-v-14260593>10</td></tr></tbody></table></div><div class="w-full border rounded-lg" data-v-14260593><table class="table w-full" data-v-14260593><thead data-v-14260593><th colspan="2" data-v-14260593><h2 class="text-red-500 font-semibold text-lg text-center" data-v-14260593> Instructions </h2></th></thead><tbody data-v-14260593><tr data-v-14260593><td data-v-14260593> Per question mark </td><td data-v-14260593> 1 </td></tr><tr data-v-14260593><td data-v-14260593> Negative mark <br data-v-14260593><span class="text-sm" data-v-14260593> (Per Question) </span></td><td data-v-14260593> 0.25 </td></tr><tr data-v-14260593><td data-v-14260593> Total Questions </td><td data-v-14260593> 100 </td></tr><tr data-v-14260593><td data-v-14260593> Total Marks </td><td data-v-14260593> 100 </td></tr><tr data-v-14260593><td data-v-14260593> Exam Duration </td><td data-v-14260593> 40 Minutes </td></tr></tbody></table></div></div><div data-v-14260593><div class="text-red-500 py-2" data-v-14260593> **5 Marks will be deducted for second timers. </div></div><div class="w-full border rounded-lg" data-v-14260593><table class="table w-full text-center" data-v-14260593><tbody data-v-14260593><tr data-v-14260593><th data-v-14260593><h2 class="text-red-500 font-semibold text-lg text-center" data-v-14260593> Starts at</h2></th><td data-v-14260593> 6 October 2023, 6:00 AM </td></tr><tr data-v-14260593><th data-v-14260593><h2 class="text-red-500 font-semibold text-lg text-center" data-v-14260593> Ends At </h2></th><td data-v-14260593> 7 October 2023, 9:00 PM </td></tr></tbody></table></div>',3),ut={class:"flex justify-center py-3 gap-3"},vt=v("Go to Exam"),ht=x(()=>t("div",{class:"space-y-4 flex items-center justify-center min-h-[60vh]"},[t("p",{class:"text-center text-xl"},[v("\u0985\u0982\u09B6\u0997\u09CD\u09B0\u09B9\u09A3 \u0995\u09B0\u09BE\u09B0 \u09B8\u09AE\u09DF \u09B6\u09C7\u09B7\u0964 "),t("br"),v(" \u09B6\u09C0\u0998\u09CD\u09B0\u0987 \u09AB\u09B2\u09BE\u09AB\u09B2 \u09AA\u09CD\u09B0\u0995\u09BE\u09B6 \u0995\u09B0\u09BE \u09B9\u09AC\u09C7\u0964 ")])],-1)),_t={key:2,class:"flex items-center justify-center w-full h-screen"},mt=x(()=>t("div",{class:"flex items-center flex-col justify-center -mt-24 space-x-1 text-sm text-gray-700 p-5 rounded-xl border"},[t("img",{src:k,alt:""}),t("div",{class:"text-lg"},"Please wait...")],-1)),xt=[mt],bt={__name:"Home",setup(e){const s=_(!0),o=_(!1);return $(),_(!1),(y,n)=>{const r=f("router-link");return d(),l(g,null,[s.value?(d(),j(at,{key:0})):(d(),l("div",dt,[t("div",lt,[t("div",rt,[c(r,{to:"/",as:"div",class:"text-center uppercase"},{default:u(()=>[t("h1",ot,i(B(C)),1),nt]),_:1}),s.value?m("",!0):(d(),l("div",it,[ct,t("div",ut,[c(r,{to:"/exam",class:"btn btn-lg"},{default:u(()=>[vt]),_:1})])])),ht])])])),o.value?(d(),l("div",_t,xt)):m("",!0)],64)}}},kt=p(bt,[["__scopeId","data-v-14260593"]]);export{kt as default};
