import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,b as n,d as r,a as d,w as l,r as u,o as m,e as s}from"./app-kEL1YkOC.js";const o={};function b(v,e){const a=u("CodeTabs");return m(),t("div",null,[e[2]||(e[2]=n("div",{class:"image-preview"},[n("img",{src:"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/SelectEdges.png",style:{width:"25% !important"}})],-1)),r(" more "),d(a,{id:"3",data:[{id:"mel"}],"tab-id":"shell"},{title0:l(({value:i,isActive:p})=>e[0]||(e[0]=[s("mel")])),tab0:l(({value:i,isActive:p})=>e[1]||(e[1]=[n("div",{class:"language-mel line-numbers-mode","data-highlighter":"shiki","data-ext":"mel",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[n("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[n("code",null,[n("span",{class:"line"},[n("span")]),s(`
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
`),n("span",{class:"line"},[n("span",null,"showWindow $SelectEdgeswindow;")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})])}const h=c(o,[["render",b]]),E=JSON.parse('{"path":"/posts/maya/selectEdges.html","title":"Maya-SelectEdges","lang":"zh-CN","frontmatter":{"title":"Maya-SelectEdges","icon":"iconfont alicon-maya1","category":["maya"],"tags":["maya","tool"],"date":"2023-12-02T00:00:00.000Z","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/maya/selectEdges.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Maya-SelectEdges"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"property":"article:tag","content":"maya"}],["meta",{"property":"article:tag","content":"tool"}],["meta",{"property":"article:published_time","content":"2023-12-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maya-SelectEdges\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","username":"Megestus","email":"2624203622@qq.com","commits":4,"url":"https://github.com/Megestus"}]},"filePathRelative":"posts/maya/selectEdges.md","localizedDate":"2023年12月2日","excerpt":"<div class=\\"image-preview\\">\\n  <img src=\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/SelectEdges.png\\" style=\\"width: 25% !important;\\">\\n</div>\\n"}');export{h as comp,E as data};
