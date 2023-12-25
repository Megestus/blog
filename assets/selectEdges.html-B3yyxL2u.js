import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as i,c as p,e as u,a as r,w as a,b as n,d as s}from"./app-HELsg-TZ.js";const k={},d=n("div",{class:"image-preview"},[n("img",{src:"https://megestus.github.io/blog/assets/images/SelectEdges.png"})],-1),m=n("div",{class:"language-mel line-numbers-mode","data-ext":"mel"},[n("pre",{class:"language-mel"},[n("code",null,[s(`
`),n("span",{class:"token keyword"},"proc"),s(),n("span",{class:"token function"},"selectEdges"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"string"),s(),n("span",{class:"token variable"},"$numbOfNEdgesSelected"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token code italic"},[n("span",{class:"token delimiter punctuation"},"`"),n("span",{class:"token statement"},[n("span",{class:"token function"},"filterExpand"),s(),n("span",{class:"token flag operator"},"-expand"),s(" true "),n("span",{class:"token flag operator"},"-sm"),s(),n("span",{class:"token number"},"32")]),n("span",{class:"token delimiter punctuation"},"`")]),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$numbOfNEdgesSelected"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token function"},"error"),s(),n("span",{class:"token string"},'"Select at least one edge before running the script."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"1 loop pattern selected   (^▽^ )."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"2 loop pattern selected   ヾ(≧▽≦*)o."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"3 loop pattern selected  （′v｀）."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"4 loop pattern selected  (p≧w≦q)."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"5 loop pattern selected （＞人＜；）."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"6 loop pattern selected  (*￣︿￣)."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"14"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"7 loop pattern selected  （＝。＝）."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"polySelectEdgesEveryN"),s(),n("span",{class:"token string"},'"edgeRing"'),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"print"),s(),n("span",{class:"token string"},'"8 loop pattern selected  (。﹏。)."'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


        `),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sizeNComponents"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"error"),s(),n("span",{class:"token string"},'"Select 8 or less edges.  ○|￣|_"'),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"string"),s(),n("span",{class:"token variable"},"$SelectEdgeswindow"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"SelectEdges"'),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token code italic"},[n("span",{class:"token delimiter punctuation"},"`"),n("span",{class:"token statement"},[n("span",{class:"token function"},"window"),s(),n("span",{class:"token flag operator"},"-ex"),s(),n("span",{class:"token variable"},"$SelectEdgeswindow")]),n("span",{class:"token delimiter punctuation"},"`")]),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"deleteUI"),s(),n("span",{class:"token flag operator"},"-window"),s(),n("span",{class:"token variable"},"$SelectEdgeswindow"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token code italic"},[n("span",{class:"token delimiter punctuation"},"`"),n("span",{class:"token statement"},[n("span",{class:"token function"},"window"),s(),n("span",{class:"token flag operator"},"-ex"),s(),n("span",{class:"token variable"},"$SelectEdgeswindow")]),n("span",{class:"token delimiter punctuation"},"`")]),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"string"),s(),n("span",{class:"token variable"},"$lbWinName0"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token code italic"},[n("span",{class:"token delimiter punctuation"},"`"),n("span",{class:"token statement"},[n("span",{class:"token function"},"window"),s(`
                                `),n("span",{class:"token flag operator"},"-tlb"),s(),n("span",{class:"token number"},"1"),s(`
                                `),n("span",{class:"token flag operator"},"-bgc"),s(),n("span",{class:"token number"},".25"),s(),n("span",{class:"token number"},".25"),s(),n("span",{class:"token number"},".25"),s(`
                                `),n("span",{class:"token variable"},"$SelectEdgeswindow")]),n("span",{class:"token delimiter punctuation"},"`")]),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token function"},"columnLayout"),s(),n("span",{class:"token flag operator"},"-adjustableColumn"),s(" true"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"text"),s(),n("span",{class:"token flag operator"},"-label"),s(),n("span",{class:"token string"},'"选边-或多边-点执行"'),s(),n("span",{class:"token flag operator"},"-h"),s(),n("span",{class:"token number"},"50"),s(),n("span",{class:"token flag operator"},"-w"),s(),n("span",{class:"token number"},"150"),s(),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"button"),s(),n("span",{class:"token flag operator"},"-label"),s(),n("span",{class:"token string"},'"执行"'),s(),n("span",{class:"token flag operator"},"-command"),s(),n("span",{class:"token string"},'"selectEdges"'),s(),n("span",{class:"token flag operator"},"-bgc"),s(),n("span",{class:"token number"},".80"),s(),n("span",{class:"token number"},".60"),s(),n("span",{class:"token number"},".50"),s(),n("span",{class:"token punctuation"},";"),s(`


`),n("span",{class:"token function"},"setParent"),s(),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"showWindow"),s(),n("span",{class:"token variable"},"$SelectEdgeswindow"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function b(v,g){const e=c("CodeTabs");return i(),p("div",null,[d,u(" more "),r(e,{id:"3",data:[{id:"mel"}],"tab-id":"shell"},{title0:a(({value:t,isActive:l})=>[s("mel")]),tab0:a(({value:t,isActive:l})=>[m]),_:1})])}const y=o(k,[["render",b],["__file","selectEdges.html.vue"]]);export{y as default};
