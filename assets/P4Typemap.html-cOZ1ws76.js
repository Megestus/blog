import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,d as c,f as d,a as m,g as l,r as b,o as u,e}from"./app-5lP94BTU.js";const o={};function v(y,s){const t=b("CodeTabs");return u(),r("div",null,[s[4]||(s[4]=n("p",null," ",-1)),s[5]||(s[5]=n("p",null,"在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。",-1)),c(" more "),s[6]||(s[6]=d(`<h2 id="p4typemap-setup" tabindex="-1"><a class="header-anchor" href="#p4typemap-setup"><span>P4Typemap setup</span></a></h2><p>在命令行下设置 P4 的环境变量,将下方相应的部分替换为你的用户名和连接地址，</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">p4 set P4USER=your.username</span>
<span class="line">	p4 set P4PORT=localhost:1666</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>用下面的命令打开 typemap 设置。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">p4 -P YourPassword typemap</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后将会看到一个文本窗口，这就是当前服务器的 typemap。下面是我们以前用过的 typemap 示例：</p>`,6)),m(t,{id:"21",data:[{id:"UE官方"},{id:"快捷复制"}],"tab-id":"shell"},{title0:l(({value:a,isActive:i})=>s[0]||(s[0]=[e("UE官方")])),title1:l(({value:a,isActive:i})=>s[1]||(s[1]=[e("快捷复制")])),tab0:l(({value:a,isActive:i})=>s[2]||(s[2]=[n("div",{class:"language-text line-numbers-mode","data-highlighter":"prismjs","data-ext":"text"},[n("pre",null,[n("code",null,[n("span",{class:"line"},"# Perforce File Type Mapping Specifications."),e(`
`),n("span",{class:"line"},"	#"),e(`
`),n("span",{class:"line"},"	# TypeMap: a list of filetype mappings; one per line."),e(`
`),n("span",{class:"line"},"	# Each line has two elements:"),e(`
`),n("span",{class:"line"},"	#"),e(`
`),n("span",{class:"line"},"	# Filetype: The filetype to use on 'p4 add'."),e(`
`),n("span",{class:"line"},"	#"),e(`
`),n("span",{class:"line"},"	# Path: File pattern which will use this filetype."),e(`
`),n("span",{class:"line"},"	#"),e(`
`),n("span",{class:"line"},"	# See 'p4 help typemap' for more information."),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"TypeMap:"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....exe"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....dll"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....lib"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....app"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....dylib"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....stub"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....ipa"),e(`
`),n("span",{class:"line"},"	binary //depot/....bmp"),e(`
`),n("span",{class:"line"},"	text //depot/....ini"),e(`
`),n("span",{class:"line"},"	text //depot/....config"),e(`
`),n("span",{class:"line"},"	text //depot/....cpp"),e(`
`),n("span",{class:"line"},"	text //depot/....h"),e(`
`),n("span",{class:"line"},"	text //depot/....c"),e(`
`),n("span",{class:"line"},"	text //depot/....cs"),e(`
`),n("span",{class:"line"},"	text //depot/....m"),e(`
`),n("span",{class:"line"},"	text //depot/....mm"),e(`
`),n("span",{class:"line"},"	text //depot/....py"),e(`
`),n("span",{class:"line"},"	binary+l //depot/....uasset"),e(`
`),n("span",{class:"line"},"	binary+l //depot/....umap"),e(`
`),n("span",{class:"line"},"	binary+l //depot/....upk"),e(`
`),n("span",{class:"line"},"	binary+l //depot/....udk"),e(`
`),n("span",{class:"line"},"	binary+l //depot/....ubulk"),e(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:l(({value:a,isActive:i})=>s[3]||(s[3]=[n("div",{class:"language-text line-numbers-mode","data-highlighter":"prismjs","data-ext":"text"},[n("pre",null,[n("code",null,[n("span",{class:"line"},"# Perforce File Type Mapping Specifications."),e(`
`),n("span",{class:"line"},"#"),e(`
`),n("span",{class:"line"},"#  TypeMap:	a list of filetype mappings; one per line."),e(`
`),n("span",{class:"line"},"#		Each line has two elements:"),e(`
`),n("span",{class:"line"},"#"),e(`
`),n("span",{class:"line"},"#  		Filetype: The filetype to use on 'p4 add'."),e(`
`),n("span",{class:"line"},"#"),e(`
`),n("span",{class:"line"},"#  		Path:     File pattern which will use this filetype."),e(`
`),n("span",{class:"line"},"#"),e(`
`),n("span",{class:"line"},"# See 'p4 help typemap' for more information."),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"TypeMap:"),e(`
`),n("span",{class:"line"},"	text //....asp"),e(`
`),n("span",{class:"line"},"	text //....cnf"),e(`
`),n("span",{class:"line"},"	text //....css"),e(`
`),n("span",{class:"line"},"	text //....htm"),e(`
`),n("span",{class:"line"},"	text //....html"),e(`
`),n("span",{class:"line"},"	text //....inc"),e(`
`),n("span",{class:"line"},"	text //....js"),e(`
`),n("span",{class:"line"},"	text+w //....log"),e(`
`),n("span",{class:"line"},"	text+w //....ini"),e(`
`),n("span",{class:"line"},"	text+w //....pdm"),e(`
`),n("span",{class:"line"},"	binary+Fl //....zip"),e(`
`),n("span",{class:"line"},"	binary+Fl //....bz2"),e(`
`),n("span",{class:"line"},"	binary+Fl //....rar"),e(`
`),n("span",{class:"line"},"	binary+Fl //....gz"),e(`
`),n("span",{class:"line"},"	binary+Fl //....avi"),e(`
`),n("span",{class:"line"},"	binary+Fl //....jpg"),e(`
`),n("span",{class:"line"},"	binary+Fl //....jpeg"),e(`
`),n("span",{class:"line"},"	binary+Fl //....mpg"),e(`
`),n("span",{class:"line"},"	binary+Fl //....gif"),e(`
`),n("span",{class:"line"},"	binary+Fl //....tif"),e(`
`),n("span",{class:"line"},"	binary+Fl //....mov"),e(`
`),n("span",{class:"line"},"	binary+Fl //....jar"),e(`
`),n("span",{class:"line"},"	binary+l //....ico"),e(`
`),n("span",{class:"line"},"	binary+l //....exp"),e(`
`),n("span",{class:"line"},"	binary+l //....btr"),e(`
`),n("span",{class:"line"},"	binary+l //....bmp"),e(`
`),n("span",{class:"line"},"	binary+l //....doc"),e(`
`),n("span",{class:"line"},"	binary+l //....dot"),e(`
`),n("span",{class:"line"},"	binary+l //....xls"),e(`
`),n("span",{class:"line"},"	binary+l //....ppt"),e(`
`),n("span",{class:"line"},"	binary+l //....pdf"),e(`
`),n("span",{class:"line"},"	binary+l //....tar"),e(`
`),n("span",{class:"line"},"	binary+l //....exe"),e(`
`),n("span",{class:"line"},"	binary+l //....dll"),e(`
`),n("span",{class:"line"},"	binary+l //....lib"),e(`
`),n("span",{class:"line"},"	binary+l //....bin"),e(`
`),n("span",{class:"line"},"	binary+l //....class"),e(`
`),n("span",{class:"line"},"	binary+l //....war"),e(`
`),n("span",{class:"line"},"	binary+l //....ear"),e(`
`),n("span",{class:"line"},"	binary+l //....so"),e(`
`),n("span",{class:"line"},"	binary+l //....rpt"),e(`
`),n("span",{class:"line"},"	binary+l //....cfm"),e(`
`),n("span",{class:"line"},"	binary+l //....ma"),e(`
`),n("span",{class:"line"},"	binary+l //....mb"),e(`
`),n("span",{class:"line"},"	binary+l //....pac"),e(`
`),n("span",{class:"line"},"	binary+l //....m4a"),e(`
`),n("span",{class:"line"},"	binary+l //....mp4"),e(`
`),n("span",{class:"line"},"	binary+l //....aac"),e(`
`),n("span",{class:"line"},"	binary+l //....wma"),e(`
`),n("span",{class:"line"},"	binary+l //....docx"),e(`
`),n("span",{class:"line"},"	binary+l //....pptx"),e(`
`),n("span",{class:"line"},"	binary+l //....xlsx"),e(`
`),n("span",{class:"line"},"	binary+l //....png"),e(`
`),n("span",{class:"line"},"	binary+l //....raw"),e(`
`),n("span",{class:"line"},"	binary+l //....odt"),e(`
`),n("span",{class:"line"},"	binary+l //....ods"),e(`
`),n("span",{class:"line"},"	binary+l //....odg"),e(`
`),n("span",{class:"line"},"	binary+l //....odp"),e(`
`),n("span",{class:"line"},"	binary+l //....otg"),e(`
`),n("span",{class:"line"},"	binary+l //....ots"),e(`
`),n("span",{class:"line"},"	binary+l //....ott"),e(`
`),n("span",{class:"line"},"	binary+l //....psd"),e(`
`),n("span",{class:"line"},"	binary+l //....sxw"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....exe"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....dll"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....lib"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....app"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....dylib"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....stub"),e(`
`),n("span",{class:"line"},"	binary+w //depot/....ipa"),e(`
`),n("span",{class:"line"},"	binary //depot/....bmp"),e(`
`),n("span",{class:"line"},"	text //depot/....ini"),e(`
`),n("span",{class:"line"},"	text //depot/....config"),e(`
`),n("span",{class:"line"},"	text //depot/....cpp"),e(`
`),n("span",{class:"line"},"	text //depot/....h"),e(`
`),n("span",{class:"line"},"	text //depot/....c"),e(`
`),n("span",{class:"line"},"	text //depot/....cs"),e(`
`),n("span",{class:"line"},"	text //depot/....m"),e(`
`),n("span",{class:"line"},"	text //depot/....mm"),e(`
`),n("span",{class:"line"},"	text //depot/....py"),e(`
`),n("span",{class:"line"},"	binary+l //depot/....uasset"),e(`
`),n("span",{class:"line"},"	binary+l //depot/....umap"),e(`
`),n("span",{class:"line"},"	binary+l //depot/....upk"),e(`
`),n("span",{class:"line"},"	binary+l //depot/....udk"),e(`
`),n("span",{class:"line"},"	binary+l //depot/....ubulk"),e(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),s[7]||(s[7]=n("p",null,"完成编辑后，点击键盘上的 Ctrl+S 保存并退出。命令行应该会提示 Typemap saved。",-1))])}const f=p(o,[["render",v],["__file","P4Typemap.html.vue"]]),h=JSON.parse('{"path":"/posts/Perforce/P4Typemap.html","title":"P4Typemap Set","lang":"zh-CN","frontmatter":{"title":"P4Typemap Set","icon":"iconfont alicon-perforce","category":["Perforce"],"tags":["Perforce","typemap"],"date":"2025-03-15T00:00:00.000Z","description":"在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/Perforce/P4Typemap.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"P4Typemap Set"}],["meta",{"property":"og:description","content":"在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-15T15:27:15.000Z"}],["meta",{"property":"article:tag","content":"Perforce"}],["meta",{"property":"article:tag","content":"typemap"}],["meta",{"property":"article:published_time","content":"2025-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-15T15:27:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"P4Typemap Set\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-15T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-15T15:27:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"P4Typemap setup","slug":"p4typemap-setup","link":"#p4typemap-setup","children":[]}],"git":{"createdTime":1742052435000,"updatedTime":1742052435000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":1}]},"filePathRelative":"posts/Perforce/P4Typemap.md","localizedDate":"2025年3月15日","excerpt":"<p> </p>\\n<p>在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。</p>\\n","autoDesc":true}');export{f as comp,h as data};
