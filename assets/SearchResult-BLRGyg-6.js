import{u as z,g as Z,h as ee,i as N,j as te,k as ae,t as se,l as re,m as B,n as q,p as le,q as U,s as a,v as F,x as O,R as $,y as ne,z as ue,A as ie,B as oe,C as ce,D as he,E as de,F as ve,O as pe,G as me,H as ye,P as ge,I as fe,J as ke,K as _}from"./app-CQU17XHM.js";const xe=["/Friends.html","/","/intro.html","/log.html","/demo/","/engine/","/posts/","/server/","/demo/vuepress/mdNotes.html","/demo/vuepress/page.html","/demo/vuepress/vuepressdebug.html","/engine/unreal/unreal.html","/posts/3dmax/MaxNotes.html","/posts/3dmax/Maxscript101.html","/posts/3dmax/MaxscriptLearn.html","/posts/Perforce/P4checTips.html","/posts/Perforce/P4ignore.html","/posts/Perforce/PerforceCmd.html","/posts/Perforce/PerforceSet.html","/posts/Substance/SPAOBake.html","/posts/maya/MayaChecklist.html","/posts/maya/MayaNotes.html","/posts/maya/PythonLearn.html","/posts/maya/Pythonwindow.html","/posts/maya/UVset.html","/posts/maya/melLearn.html","/posts/maya/selectEdges.html","/posts/zbrush/pathset.html","/server/app/GitHubActions.html","/server/app/gallery.html","/server/app/lankong.html","/server/app/windowstips.html","/server/docker/NPS_NPM.html","/server/docker/Portainer.html","/server/docker/docker.html","/server/docker/linux.html","/server/docker/mariadb.html","/engine/unity/C_sharp/C_Basics.html","/engine/unity/shader/shader0.html","/engine/unity/shader/shader1.html","/engine/unity/shader/shader10.html","/engine/unity/shader/shader11.html","/engine/unity/shader/shader12.html","/engine/unity/shader/shader13.html","/engine/unity/shader/shader14.html","/engine/unity/shader/shader2.html","/engine/unity/shader/shader3.html","/engine/unity/shader/shader4.html","/engine/unity/shader/shader5.html","/engine/unity/shader/shader6.html","/engine/unity/shader/shader7.html","/engine/unity/shader/shader8.html","/engine/unity/shader/shader9.html","/404.html","/demo/vuepress/","/engine/unreal/","/posts/3dmax/","/posts/Perforce/","/posts/Substance/","/posts/maya/","/posts/zbrush/","/server/app/","/server/docker/","/engine/unity/C_sharp/","/engine/unity/","/engine/unity/shader/","/category/","/category/3dmax/","/category/perforce/","/category/substance/","/category/maya/","/category/zbrush/","/category/github/","/category/%E5%9B%BE%E5%BA%8A/","/category/windows/","/category/docker/","/category/linux/","/category/shader/","/tag/","/tag/3dmax/","/tag/tips/","/tag/perforce/","/tag/ignore/","/tag/cloud-sever/","/tag/teams/","/tag/ue5/","/tag/substance-paint/","/tag/substance/","/tag/maya/","/tag/tool/","/tag/checklist/","/tag/python/","/tag/mel/","/tag/zbrush/","/tag/github/","/tag/automation/","/tag/actions/","/tag/%E5%9B%BE%E5%BA%8A/","/tag/gallery/","/tag/lsky/","/tag/windows/","/tag/docker/","/tag/nas/","/tag/portainer/","/tag/linux/","/tag/mariadb/","/tag/adminer/","/tag/mysql/","/tag/shader/","/tag/unity/","/article/","/star/","/timeline/"],He="SEARCH_PRO_QUERY_HISTORY",p=z(He,[]),be=()=>{const{queryHistoryCount:s}=_,r=s>0;return{enabled:r,queryHistory:p,addQueryHistory:l=>{r&&(p.value.length<s?p.value=Array.from(new Set([l,...p.value])):p.value=Array.from(new Set([l,...p.value.slice(0,s-1)])))},removeQueryHistory:l=>{p.value=[...p.value.slice(0,l),...p.value.slice(l+1)]}}},D=s=>xe[s.id]+("anchor"in s?`#${s.anchor}`:""),we="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:L}=_,m=z(we,[]),Re=()=>{const s=L>0;return{enabled:s,resultHistory:m,addResultHistory:r=>{if(s){const l={link:D(r),display:r.display};"header"in r&&(l.header=r.header),m.value.length<L?m.value=[l,...m.value]:m.value=[l,...m.value.slice(0,L-1)]}},removeResultHistory:r=>{m.value=[...m.value.slice(0,r),...m.value.slice(r+1)]}}},Pe=s=>{const r=ce(),l=N(),C=he(),u=B(!1),g=de([]);return ve(()=>{const{search:H,terminate:y}=pe(),b=()=>{g.value=[],u.value=!1},f=ke(d=>{u.value=!0,d?H(d,l.value,r.value).then(v=>{var w,k;return((k=(w=r.value).searchFilter)==null?void 0:k.call(w,v,d,l.value,C.value))??v}).then(v=>{g.value=v,u.value=!1}).catch(v=>{console.error(v),b()}):b()},_.searchDelay);U([s,l],()=>f(s.value),{immediate:!0}),me(()=>{y()})}),{searching:u,results:g}};var Se=Z({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:r}){const l=ee(),C=N(),u=te(ae),{enabled:g,addQueryHistory:H,queryHistory:y,removeQueryHistory:b}=be(),{enabled:f,resultHistory:d,addResultHistory:v,removeResultHistory:w}=Re(),k=g||f,S=se(s,"query"),{results:x,searching:I}=Pe(S),n=re({isQuery:!0,index:0}),c=B(0),h=B(0),M=q(()=>k&&(y.value.length>0||d.value.length>0)),Q=q(()=>x.value.length>0),A=q(()=>x.value[c.value]||null),j=()=>{const{isQuery:e,index:t}=n;t===0?(n.isQuery=!e,n.index=e?d.value.length-1:y.value.length-1):n.index=t-1},G=()=>{const{isQuery:e,index:t}=n;t===(e?y.value.length-1:d.value.length-1)?(n.isQuery=!e,n.index=0):n.index=t+1},V=()=>{c.value=c.value>0?c.value-1:x.value.length-1,h.value=A.value.contents.length-1},Y=()=>{c.value=c.value<x.value.length-1?c.value+1:0,h.value=0},J=()=>{h.value<A.value.contents.length-1?h.value+=1:Y()},K=()=>{h.value>0?h.value-=1:V()},E=e=>e.map(t=>ye(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=ge[e.index]||"$content",[i,P=""]=fe(t)?t[C.value].split("$content"):t.split("$content");return e.display.map(o=>a("div",E([i,...o,P])))}return e.display.map(t=>a("div",E(t)))},R=()=>{c.value=0,h.value=0,r("updateQuery",""),r("close")};return le("keydown",e=>{if(s.isFocusing){if(Q.value){if(e.key==="ArrowUp")K();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const t=A.value.contents[h.value];H(s.query),v(t),l.push(D(t)),R()}}else if(f){if(e.key==="ArrowUp")j();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=n;n.isQuery?(r("updateQuery",y.value[t]),e.preventDefault()):(l.push(d.value[t].link),R())}}}}),U([c,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:S.value?!Q.value:!M.value}],id:"search-pro-results"},S.value===""?k?M.value?[g?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.queryHistory),y.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:n.isQuery&&n.index===t}],onClick:()=>{r("updateQuery",e)}},[a(F,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:i=>{i.preventDefault(),i.stopPropagation(),b(t)}})]))])):null,f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.resultHistory),d.value.map((e,t)=>a($,{to:e.link,class:["search-pro-result-item",{active:!n.isQuery&&n.index===t}],onClick:()=>{R()}},()=>[a(F,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(i=>E(i)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:i=>{i.preventDefault(),i.stopPropagation(),w(t)}})]))])):null]:u.value.emptyHistory:u.value.emptyResult:I.value?a(ne,{hint:u.value.searching}):Q.value?a("ul",{class:"search-pro-result-list"},x.value.map(({title:e,contents:t},i)=>{const P=c.value===i;return a("li",{class:["search-pro-result-list-item",{active:P}]},[a("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((o,X)=>{const T=P&&h.value===X;return a($,{to:D(o),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{H(s.query),v(o),R()}},()=>[o.type==="text"?null:a(o.type==="title"?ue:o.type==="heading"?ie:oe,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?a("div",{class:"content-header"},o.header):null,a("div",W(o))])])})])})):u.value.emptyResult)}});export{Se as default};
