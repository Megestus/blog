import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as n,d,a as r,w as l,r as u,o as m,e as s}from"./app-BWbkbruB.js";const o={};function b(g,e){const a=u("CodeTabs");return m(),t("div",null,[e[2]||(e[2]=n("div",{class:"image-preview"},[n("img",{src:"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/SelectEdges.png",style:{width:"25% !important"}})],-1)),d(" more "),r(a,{data:[{id:"mel"}],"tab-id":"shell"},{title0:l(({value:i,isActive:c})=>e[0]||(e[0]=[s("mel")])),tab0:l(({value:i,isActive:c})=>e[1]||(e[1]=[n("div",{class:"language-mel line-numbers-mode","data-highlighter":"shiki","data-ext":"mel",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[n("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[n("code",{class:"language-mel"},[n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"proc selectEdges()")]),s(`
`),n("span",{class:"line"},[n("span",null,"{string $numbOfNEdgesSelected[] = `filterExpand -expand true -sm 32`;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    int $sizeNComponents = size($numbOfNEdgesSelected);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if($sizeNComponents == 0)")]),s(`
`),n("span",{class:"line"},[n("span",null,'            error "Select at least one edge before running the script.";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if($sizeNComponents == 1)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            polySelectEdgesEveryN "edgeRing" 2;')]),s(`
`),n("span",{class:"line"},[n("span",null,'            print "1 loop pattern selected   (^▽^ ).";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if($sizeNComponents == 2)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            polySelectEdgesEveryN "edgeRing" 4;')]),s(`
`),n("span",{class:"line"},[n("span",null,'            print "2 loop pattern selected   ヾ(≧▽≦*)o.";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if($sizeNComponents == 3)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            polySelectEdgesEveryN "edgeRing" 6;')]),s(`
`),n("span",{class:"line"},[n("span",null,'            print "3 loop pattern selected  （′v｀）.";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if($sizeNComponents == 4)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            polySelectEdgesEveryN "edgeRing" 8;')]),s(`
`),n("span",{class:"line"},[n("span",null,'            print "4 loop pattern selected  (p≧w≦q).";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if($sizeNComponents == 5)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            polySelectEdgesEveryN "edgeRing" 10;')]),s(`
`),n("span",{class:"line"},[n("span",null,'            print "5 loop pattern selected （＞人＜；）.";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if($sizeNComponents == 6)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            polySelectEdgesEveryN "edgeRing" 12;')]),s(`
`),n("span",{class:"line"},[n("span",null,'            print "6 loop pattern selected  (*￣︿￣).";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if($sizeNComponents == 7)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            polySelectEdgesEveryN "edgeRing" 14;')]),s(`
`),n("span",{class:"line"},[n("span",null,'            print "7 loop pattern selected  （＝。＝）.";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if($sizeNComponents == 8)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            polySelectEdgesEveryN "edgeRing" 16;')]),s(`
`),n("span",{class:"line"},[n("span",null,'            print "8 loop pattern selected  (。﹏。).";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if($sizeNComponents > 8)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,'            error "Select 8 or less edges.  ○|￣|_";')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'string $SelectEdgeswindow = "SelectEdges";')]),s(`
`),n("span",{class:"line"},[n("span",null,"    if(`window -ex $SelectEdgeswindow`)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            deleteUI -window $SelectEdgeswindow;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if(!`window -ex $SelectEdgeswindow`)")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            string $lbWinName0 = `window")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                -tlb 1")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                -bgc .25 .25 .25")]),s(`
`),n("span",{class:"line"},[n("span",null,"                                $SelectEdgeswindow`;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"columnLayout -adjustableColumn true;")]),s(`
`),n("span",{class:"line"},[n("span",null,'text -label "选边-或多边-点执行" -h 50 -w 150 ;')]),s(`
`),n("span",{class:"line"},[n("span",null,'button -label "执行" -command "selectEdges" -bgc .80 .60 .50 ;')]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"setParent ..;")]),s(`
`),n("span",{class:"line"},[n("span",null,"showWindow $SelectEdgeswindow;")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})])}const y=p(o,[["render",b]]),E=JSON.parse('{"path":"/posts/maya/selectEdges.html","title":"Maya-SelectEdges","lang":"zh-CN","frontmatter":{"title":"Maya-SelectEdges","icon":"iconfont alicon-maya1","category":["Maya"],"tags":["maya","tool"],"date":"2023-12-02T00:00:00.000Z","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maya-SelectEdges\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-02T00:00:00.000Z\\",\\"dateModified\\":\\"2025-06-14T17:50:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"],["meta",{"property":"og:url","content":"https:///about.md/blog/posts/maya/selectEdges.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Maya-SelectEdges"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-14T17:50:19.000Z"}],["meta",{"property":"article:tag","content":"tool"}],["meta",{"property":"article:tag","content":"maya"}],["meta",{"property":"article:published_time","content":"2023-12-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-14T17:50:19.000Z"}]]},"git":{"createdTime":1711204216000,"updatedTime":1749923419000,"contributors":[{"name":"Megestus","username":"Megestus","email":"2624203622@qq.com","commits":5,"url":"https://github.com/Megestus"}],"changelog":[{"hash":"248a6b6c7ea53ce763a21313002a4b96da28ecc8","time":1749923419000,"email":"75190962+Megestus@users.noreply.github.com","author":"Megestus","message":"UPDATE category"},{"hash":"afe162d98fa0abfeee0db98fc4ab7be79ecce00e","time":1723051305000,"email":"75190962+Megestus@users.noreply.github.com","author":"Megestus","message":"update tags"},{"hash":"370207019bc58720c973b5a434806c43d97d5261","time":1718442447000,"email":"2624203622@qq.com","author":"Megestus","message":"update imgs"},{"hash":"307da94b8e59a5e583a77de37cda367b0b35d599","time":1711306177000,"email":"2624203622@qq.com","author":"Megestus","message":"update"},{"hash":"5cd2acd48e79a0d9fced6c5c5d5d6a0e6460b3ae","time":1711204216000,"email":"2624203622@qq.com","author":"Megestus","message":"init"}]},"filePathRelative":"posts/maya/selectEdges.md","excerpt":"<div class=\\"image-preview\\">\\n  <img src=\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/SelectEdges.png\\" style=\\"width: 25% !important;\\">\\n</div>\\n"}');export{y as comp,E as data};
