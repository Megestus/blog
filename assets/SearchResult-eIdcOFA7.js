import{u as G,g as te,h as ae,i as j,j as se,P as re,t as le,k as ne,l as A,m as w,n as ie,p as $,q as a,s as oe,R as F,v as ue,x as he,y as ce,C as pe,z as me,A as de,B as ye,D as ge,E as ve,F as ke,G as fe,H as M,I as z,J as be,K as H,L as Pe}from"./app-CmgrhljR.js";const xe=["/Friends.html","/","/about.html","/about2.html","/intro.html","/log.html","/demo/","/engine/","/posts/","/server/","/demo/vuepress/mdNotes.html","/demo/vuepress/page.html","/demo/vuepress/vuepressdebug.html","/posts/3dmax/MaxNotes.html","/posts/3dmax/Maxscript101.html","/posts/3dmax/MaxscriptLearn.html","/posts/Cinema4D/C4DBP.html","/posts/Perforce/P4checTips.html","/posts/Perforce/P4ignore.html","/posts/Perforce/PerforceCmd.html","/posts/Perforce/PerforceSet.html","/posts/Substance/SPAOBake.html","/posts/maya/ErrorOpenNewFileMaya.html","/posts/maya/MayaChecklist.html","/posts/maya/MayaNotes.html","/posts/maya/PythonLearn.html","/posts/maya/Pythonwindow.html","/posts/maya/UVzTool.html","/posts/maya/mayacanotdesktop.html","/posts/maya/mayaspeed.html","/posts/maya/melLearn.html","/posts/maya/py2_3.html","/posts/maya/reset_Camera.html","/posts/maya/selectEdges.html","/posts/other/other.html","/posts/zbrush/ZbrushToPs.html","/posts/zbrush/pathset.html","/posts/zbrush/zbrushtips.html","/server/app/COS_Piclist.html","/server/app/GitHubActions.html","/server/app/WindowsWeb.html","/server/app/gallery.html","/server/app/lankong.html","/server/app/windowstips.html","/server/docker/NPS_NPM.html","/server/docker/Portainer.html","/server/docker/docker.html","/server/docker/dockermirror.html","/server/docker/linux.html","/server/docker/linuxSL.html","/server/docker/mariadb.html","/engine/unity/C_sharp/C_Basics.html","/engine/unity/shader/shader0.html","/engine/unity/shader/shader1.html","/engine/unity/shader/shader10.html","/engine/unity/shader/shader11.html","/engine/unity/shader/shader12.html","/engine/unity/shader/shader13.html","/engine/unity/shader/shader14.html","/engine/unity/shader/shader2.html","/engine/unity/shader/shader3.html","/engine/unity/shader/shader4.html","/engine/unity/shader/shader5.html","/engine/unity/shader/shader6.html","/engine/unity/shader/shader7.html","/engine/unity/shader/shader8.html","/engine/unity/shader/shader9.html","/engine/unreal/Landscape/Autolandscape.html","/engine/unreal/Landscape/LandscapeTips.html","/engine/unreal/Landscape/Landscapeblend.html","/engine/unreal/Note/BSP.html","/engine/unreal/Note/DrawCall_note.html","/engine/unreal/Note/MaterialFunction.html","/engine/unreal/Note/TexDensity_CheckTool.html","/engine/unreal/Note/unreal.html","/engine/unreal/Note/unrealtips.html","/engine/unreal/PCG/PCG_Basic.html","/engine/unreal/PCG/PCG_Surface_Sampler.html","/404.html","/job/","/demo/vuepress/","/posts/3dmax/","/posts/Cinema4D/","/posts/Perforce/","/posts/Substance/","/posts/maya/","/posts/other/","/posts/zbrush/","/server/app/","/server/docker/","/engine/unity/C_sharp/","/engine/unity/","/engine/unity/shader/","/engine/unreal/Landscape/","/engine/unreal/","/engine/unreal/Note/","/engine/unreal/PCG/","/category/","/category/3dmax/","/category/perforce/","/category/substance/","/category/maya/","/category/zbrush/","/category/%E5%9B%BE%E5%BA%8A/","/category/github/","/category/windows/","/category/docker/","/category/linux/","/category/shader/","/category/unreal/","/tag/","/tag/3dmax/","/tag/tips/","/tag/perforce/","/tag/ignore/","/tag/cloud-sever/","/tag/teams/","/tag/ue5/","/tag/substance-paint/","/tag/substance/","/tag/maya/","/tag/tool/","/tag/checklist/","/tag/python/","/tag/mayanote/","/tag/mel/","/tag/zbrush/","/tag/%E5%9B%BE%E5%BA%8A/","/tag/gallery/","/tag/github/","/tag/automation/","/tag/actions/","/tag/windows/","/tag/web/","/tag/lsky/","/tag/docker/","/tag/nas/","/tag/portainer/","/tag/linux/","/tag/mariadb/","/tag/adminer/","/tag/mysql/","/tag/shader/","/tag/unity/","/tag/unreal/","/tag/landscape/","/tag/bsp/","/tag/pcg/","/article/","/star/","/timeline/"],Ce="SEARCH_PRO_QUERY_HISTORY",v=G(Ce,[]),we=()=>{const{queryHistoryCount:s}=H,r=s>0;return{enabled:r,queryHistory:v,addQueryHistory:l=>{r&&(v.value=Array.from(new Set([l,...v.value.slice(0,s-1)])))},removeQueryHistory:l=>{v.value=[...v.value.slice(0,l),...v.value.slice(l+1)]}}},D=s=>xe[s.id]+("anchor"in s?`#${s.anchor}`:""),He="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:O}=H,k=G(He,[]),Se=()=>{const s=O>0;return{enabled:s,resultHistory:k,addResultHistory:r=>{if(s){const l={link:D(r),display:r.display};"header"in r&&(l.header=r.header),k.value=[l,...k.value.slice(0,O-1)]}},removeResultHistory:r=>{k.value=[...k.value.slice(0,r),...k.value.slice(r+1)]}}},Re=s=>{const r=pe(),l=j(),S=me(),i=A(0),P=w(()=>i.value>0),d=de([]);return ye(()=>{const{search:y,terminate:R}=ge(),f=be(h=>{const b=h.join(" "),{searchFilter:L=m=>m,splitWord:Q,suggestionsFilter:B,...g}=r.value;b?(i.value+=1,y(h.join(" "),l.value,g).then(m=>L(m,b,l.value,S.value)).then(m=>{i.value-=1,d.value=m}).catch(m=>{console.warn(m),i.value-=1,i.value||(d.value=[])})):d.value=[]},H.searchDelay-H.suggestDelay);$([s,l],([h])=>f(h),{immediate:!0}),ve(()=>{R()})}),{isSearching:P,results:d}};var Qe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:r}){const l=ae(),S=j(),i=se(re),{enabled:P,addQueryHistory:d,queryHistory:y,removeQueryHistory:R}=we(),{enabled:f,resultHistory:h,addResultHistory:b,removeResultHistory:L}=Se(),Q=P||f,B=le(s,"queries"),{results:g,isSearching:m}=Re(B),n=ne({isQuery:!0,index:0}),c=A(0),p=A(0),N=w(()=>Q&&(y.value.length>0||h.value.length>0)),_=w(()=>g.value.length>0),q=w(()=>g.value[c.value]||null),I=()=>{const{isQuery:e,index:t}=n;t===0?(n.isQuery=!e,n.index=e?h.value.length-1:y.value.length-1):n.index=t-1},U=()=>{const{isQuery:e,index:t}=n;t===(e?y.value.length-1:h.value.length-1)?(n.isQuery=!e,n.index=0):n.index=t+1},Y=()=>{c.value=c.value>0?c.value-1:g.value.length-1,p.value=q.value.contents.length-1},V=()=>{c.value=c.value<g.value.length-1?c.value+1:0,p.value=0},W=()=>{p.value<q.value.contents.length-1?p.value+=1:V()},J=()=>{p.value>0?p.value-=1:Y()},E=e=>e.map(t=>Pe(t)?t:a(t[0],t[1])),K=e=>{if(e.type==="customField"){const t=ke[e.index]||"$content",[o,C=""]=fe(t)?t[S.value].split("$content"):t.split("$content");return e.display.map(u=>a("div",E([o,...u,C])))}return e.display.map(t=>a("div",E(t)))},x=()=>{c.value=0,p.value=0,r("updateQuery",""),r("close")},Z=()=>P?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:n.isQuery&&n.index===t}],onClick:()=>{r("updateQuery",e)}},[a(M,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:z,onClick:o=>{o.preventDefault(),o.stopPropagation(),R(t)}})]))])):null,X=()=>f?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),h.value.map((e,t)=>a(F,{to:e.link,class:["search-pro-result-item",{active:!n.isQuery&&n.index===t}],onClick:()=>{x()}},()=>[a(M,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>E(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:z,onClick:o=>{o.preventDefault(),o.stopPropagation(),L(t)}})]))])):null;return ie("keydown",e=>{if(s.isFocusing){if(_.value){if(e.key==="ArrowUp")J();else if(e.key==="ArrowDown")W();else if(e.key==="Enter"){const t=q.value.contents[p.value];d(s.queries.join(" ")),b(t),l.push(D(t)),x()}}else if(f){if(e.key==="ArrowUp")I();else if(e.key==="ArrowDown")U();else if(e.key==="Enter"){const{index:t}=n;n.isQuery?(r("updateQuery",y.value[t]),e.preventDefault()):(l.push(h.value[t].link),x())}}}}),$([c,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!_.value:!N.value}],id:"search-pro-results"},s.queries.length?m.value?a(oe,{hint:i.value.searching}):_.value?a("ul",{class:"search-pro-result-list"},g.value.map(({title:e,contents:t},o)=>{const C=c.value===o;return a("li",{class:["search-pro-result-list-item",{active:C}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((u,ee)=>{const T=C&&p.value===ee;return a(F,{to:D(u),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{d(s.queries.join(" ")),b(u),x()}},()=>[u.type==="text"?null:a(u.type==="title"?ue:u.type==="heading"?he:ce,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[u.type==="text"&&u.header?a("div",{class:"content-header"},u.header):null,a("div",K(u))])])})])})):i.value.emptyResult:Q?N.value?[Z(),X()]:i.value.emptyHistory:i.value.emptyResult)}});export{Qe as default};
