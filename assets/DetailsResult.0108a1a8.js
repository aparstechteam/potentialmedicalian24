import{r as d,_ as u}from"./MediTopper.3fda68d1.js";import{h,z as b,r as m,o as p,c as g,a as t,b as n,w as c,t as s,k as a,g as r}from"./index.1717b423.js";import{N as w}from"./index.7ee87b00.js";const x={class:"bg-[#CAF6BB] min-h-screen px-2"},y={class:"py-4"},f=t("img",{src:u,alt:"",class:"mx-auto md:h-24 h-20"},null,-1),v={class:"text-center"},k={class:"bg-yellow-400 font-bold text-lg s inline-flex p-2"},N={class:"md:w-1/2 container flex justify-between mx-auto py-2 items-center print:hidden"},B=t("h1",{class:"text-2xl"},"Result",-1),R={class:"flex flex-wrap gap-2"},S=t("span",{class:"material-icons"},"print",-1),C=r(" Print Your Result "),M=[S,C],V=t("span",{class:"material-icons"},"leaderboard",-1),q=r(" Leaderboard "),A={class:"mt-2"},D={class:"md:w-1/2 mx-auto space-y-3"},E={class:"table mx-auto w-full"},P=t("thead",null,[t("tr",null,[t("th",{class:"text-center bg-yellow-400",colspan:"2"},"Your result is below")])],-1),T=t("th",{class:"bg-yellow-300"},"Roll",-1),Y={class:"bg-yellow-200"},j=t("th",{class:"bg-yellow-300"},"Student Name",-1),z={class:"bg-yellow-200"},F=t("th",{class:"bg-yellow-300"},"Test Score",-1),L={class:"bg-yellow-200"},G=t("th",{class:"bg-yellow-300"},"Merit Score",-1),H={class:"bg-yellow-200"},I=t("th",{class:"bg-yellow-300"},"Merit Position",-1),J={class:"bg-yellow-200"},K=t("th",{class:"bg-yellow-300"},"Status",-1),O={class:"bg-yellow-200"},tt={__name:"DetailsResult",setup(Q){const e=h({}),o=b(),i=o.query.rank;e.value=d[o.query.rank-1];const _=()=>{window.print()};return(U,W)=>{const l=m("router-link");return p(),g("div",x,[t("div",y,[n(l,{to:"/",class:"text-center my-2"},{default:c(()=>[f]),_:1})]),t("div",v,[t("p",k,s(a(w)),1)]),t("div",N,[B,t("div",R,[t("button",{onClick:_,class:"btn bg-green-500 btn-success text-white flex items-center gap-1"},M),n(l,{to:"/leaderboard",class:"btn bg-green-500 btn-success text-white flex items-center gap-1"},{default:c(()=>[V,q]),_:1})])]),t("div",A,[t("div",D,[t("table",E,[P,t("tbody",null,[t("tr",null,[T,t("td",Y,s(e.value.roll),1)]),t("tr",null,[j,t("td",z,s(e.value.name),1)]),t("tr",null,[F,t("td",L,s(e.value.test_score),1)]),t("tr",null,[G,t("td",H,s(e.value.merit_score),1)]),t("tr",null,[I,t("td",J,s(a(i)),1)]),t("tr",null,[K,t("td",O,s(e.value.result),1)])])])])])])}}};export{tt as default};