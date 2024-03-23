import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as m,c as u,b,d as e,e as n,a as r,w as i,f as c}from"./app-BtSpwITl.js";const g={},p=e("p",null,"对于游戏引擎版本的文件，进行版本控制可能需要 Helix Core 忽略某些文件，例如单个用户设置、缓存等。",-1),v={href:"https://doc.megestu.top/doc/49/",target:"_blank",rel:"noopener noreferrer"},h=c('<hr><p>设置步骤为：</p><ul><li>创建ignore.txt，写好ignore内容-保存-上传p4根目录</li><li>运行bat，并检查是否过滤成功</li></ul><h2 id="p4v-设置-ignore" tabindex="-1"><a class="header-anchor" href="#p4v-设置-ignore"><span>P4V_设置.ignore</span></a></h2><p>过滤忽略无需同步的文件。</p><div class="image-preview"><img src="https://sky.megestu.top/i/12024/20240217153354.png" style="width:40% !important;"></div><h3 id="_1-新建p4ignore-txt文件并上传至仓库" tabindex="-1"><a class="header-anchor" href="#_1-新建p4ignore-txt文件并上传至仓库"><span>1 新建P4ignore.txt文件并上传至仓库.</span></a></h3>',7),_=e("summary",null,"P4ignore：展开复制",-1),P=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`# directories
*/.git/*
*/.vs/*
*/obj/Development/*
*/obj/Debug/*
*/obj/x64/*
*/Intermediate/*
*/Saved/*
*/DerivedDataCache/*

# files
*.pdb
*.obj
*.response
*.prev
**DebugGame*
*.pch
*.tmp
*.dSYM
*.VC.db
*.opensdf
*.opendb
*.sdf
*.suo
*.log
*.DS_Store
*.ipch
*.vscode/*
*.idea/*
*.sln
*.p4config
*.code-workspace
*.ue4dependencies
*/Log.txt
*.akd

**/Engine/DerivedDataCache/*
**/Engine/Binaries/Win64/**Win64-Debug*
**/Engine/Binaries/Mac/**Mac-Debug*
**/Engine/Plugins/**Win64-Debug*
**/Engine/Plugins/**Mac-Debug*

**/Projects/**Win64-Debug*
**/Projects/**Mac-Debug*
**/Projects/**/.vs/*
**/Projects/**/Binaries/*
**/Projects/**/DerivedDataCache/*
**/Projects/**/Intermediate/*
**/Projects/**/Saved/*

!**/Engine/Binaries/DotNET/*
!**/Engine/Intermediate/**.precompiled
!**/Engine/Intermediate/**.lib
!**/Engine/Intermediate/**.o
!**/Engine/Intermediate/**.obj
!**/Engine/Source/**.sln
!**/Engine/Source/**.vscode/*

!**/Projects/**/Content/**.obj

!Dev-Binaries/**.zip

/Engine/DerivedDataCache/*
/Engine/Binaries/Win64/**Win64-Debug*
/Engine/Binaries/Mac/**Mac-Debug*
/Engine/Plugins/**Win64-Debug*
/Engine/Plugins/**Mac-Debug*

/Projects/**Win64-Debug*
/Projects/**Mac-Debug*
/Projects/**/.vs/*
/Projects/**/Binaries/*
/Projects/**/DerivedDataCache/*
/Projects/**/Intermediate/*
/Projects/**/Saved/*

!/Engine/Binaries/DotNET/*
!/Engine/Intermediate/**.precompiled
!/Engine/Intermediate/**.lib
!/Engine/Intermediate/**.o
!/Engine/Intermediate/**.obj
!/Engine/Source/**.sln
!/Engine/Source/**.vscode/*

!/Projects/**/Content/**.obj


!/Dev-Binaries/**.zip
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=e("p",null," ",-1),D=e("h3",{id:"_2-用下面代码创建一个p4ignore-bat-然后运行",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-用下面代码创建一个p4ignore-bat-然后运行"},[e("span",null,"2.用下面代码创建一个P4ignore.bat ， 然后运行.")])],-1),f=e("div",{class:"language-bat line-numbers-mode","data-ext":"bat","data-title":"bat"},[e("pre",{class:"language-bat"},[e("code",null,`@echo off
set workdir=%~dp0
set result=%workdir%p4ignore.txt
echo %result%
p4 set P4IGNORE="%result%"
pause
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),E=c(`<p> </p><h3 id="_3-在depot右击打开cmd" tabindex="-1"><a class="header-anchor" href="#_3-在depot右击打开cmd"><span>3.在Depot右击打开CMD</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/12024/20240217153444.png" style="width:50% !important;"></div><p> </p><h3 id="_4-输入p4-ignores-查询是否启用" tabindex="-1"><a class="header-anchor" href="#_4-输入p4-ignores-查询是否启用"><span>4.输入p4 ignores 查询是否启用</span></a></h3><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>p4 ignores
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="image-preview"><img src="https://sky.megestu.top/i/12024/20240217153513.png" style="width:80% !important;"></div>`,7);function j(y,C){const o=a("ExternalLinkIcon"),l=a("CodeTabs");return m(),u("div",null,[p,b(" more "),e("p",null,[n("翻译的官方文档 "),e("a",v,[n("设置和创建忽略文件 P4 ignore"),r(o)])]),h,e("details",null,[_,r(l,{id:"34",data:[{id:"p4ignore.txt"}],"tab-id":"shell"},{title0:i(({value:s,isActive:t})=>[n("p4ignore.txt")]),tab0:i(({value:s,isActive:t})=>[P]),_:1},8,["data"])]),x,D,r(l,{id:"46",data:[{id:"P4ignore.bat"}],"tab-id":"shell"},{title0:i(({value:s,isActive:t})=>[n("P4ignore.bat")]),tab0:i(({value:s,isActive:t})=>[f]),_:1},8,["data"]),E])}const S=d(g,[["render",j],["__file","P4ignore.html.vue"]]),I=JSON.parse('{"path":"/posts/Perforce/P4ignore.html","title":"P4ignore Set","lang":"zh-CN","frontmatter":{"title":"P4ignore Set","icon":"iconfont alicon-perforce","category":["Perforce"],"tag":["Perforce","ignore"],"date":"2023-12-21T00:00:00.000Z","description":"对于游戏引擎版本的文件，进行版本控制可能需要 Helix Core 忽略某些文件，例如单个用户设置、缓存等。 翻译的官方文档 设置和创建忽略文件 P4 ignore 设置步骤为： 创建ignore.txt，写好ignore内容-保存-上传p4根目录 运行bat，并检查是否过滤成功 P4V_设置.ignore 过滤忽略无需同步的文件。 1 新建P4ign...","head":[["meta",{"property":"og:url","content":"https://megestus.top/blog/posts/Perforce/P4ignore.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"P4ignore Set"}],["meta",{"property":"og:description","content":"对于游戏引擎版本的文件，进行版本控制可能需要 Helix Core 忽略某些文件，例如单个用户设置、缓存等。 翻译的官方文档 设置和创建忽略文件 P4 ignore 设置步骤为： 创建ignore.txt，写好ignore内容-保存-上传p4根目录 运行bat，并检查是否过滤成功 P4V_设置.ignore 过滤忽略无需同步的文件。 1 新建P4ign..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-23T14:30:16.000Z"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"Perforce"}],["meta",{"property":"article:tag","content":"ignore"}],["meta",{"property":"article:published_time","content":"2023-12-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-23T14:30:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"P4ignore Set\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-23T14:30:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"P4V_设置.ignore","slug":"p4v-设置-ignore","link":"#p4v-设置-ignore","children":[{"level":3,"title":"1 新建P4ignore.txt文件并上传至仓库.","slug":"_1-新建p4ignore-txt文件并上传至仓库","link":"#_1-新建p4ignore-txt文件并上传至仓库","children":[]},{"level":3,"title":"2.用下面代码创建一个P4ignore.bat ， 然后运行.","slug":"_2-用下面代码创建一个p4ignore-bat-然后运行","link":"#_2-用下面代码创建一个p4ignore-bat-然后运行","children":[]},{"level":3,"title":"3.在Depot右击打开CMD","slug":"_3-在depot右击打开cmd","link":"#_3-在depot右击打开cmd","children":[]},{"level":3,"title":"4.输入p4 ignores 查询是否启用","slug":"_4-输入p4-ignores-查询是否启用","link":"#_4-输入p4-ignores-查询是否启用","children":[]}]}],"git":{"createdTime":1711204216000,"updatedTime":1711204216000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":1}]},"filePathRelative":"posts/Perforce/P4ignore.md","localizedDate":"2023年12月21日","excerpt":"<p>对于游戏引擎版本的文件，进行版本控制可能需要 Helix Core 忽略某些文件，例如单个用户设置、缓存等。</p>\\n","autoDesc":true}');export{S as comp,I as data};
