import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,d as c,f as u,a as d,w as e,r as b,o as m,e as s}from"./app-CWLg4lWR.js";const o={};function v(y,l){const p=b("CodeTabs");return m(),r("div",null,[l[4]||(l[4]=n("p",null," ",-1)),l[5]||(l[5]=n("p",null,"在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。",-1)),c(" more "),l[6]||(l[6]=u(`<h2 id="p4typemap-setup" tabindex="-1"><a class="header-anchor" href="#p4typemap-setup"><span>P4Typemap setup</span></a></h2><p>在命令行下设置 P4 的环境变量,将下方相应的部分替换为你的用户名和连接地址，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>p4 set P4USER=your.username</span></span>
<span class="line"><span>	p4 set P4PORT=localhost:1666</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>用下面的命令打开 typemap 设置。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>p4 -P YourPassword typemap</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后将会看到一个文本窗口，这就是当前服务器的 typemap。下面是我们以前用过的 typemap 示例：</p>`,6)),d(p,{data:[{id:"UE官方"},{id:"快捷复制"}],"tab-id":"shell"},{title0:e(({value:a,isActive:i})=>l[0]||(l[0]=[s("UE官方")])),title1:e(({value:a,isActive:i})=>l[1]||(l[1]=[s("快捷复制")])),tab0:e(({value:a,isActive:i})=>l[2]||(l[2]=[n("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[n("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[n("code",{class:"language-"},[n("span",{class:"line"},[n("span",null,"# Perforce File Type Mapping Specifications.")]),s(`
`),n("span",{class:"line"},[n("span",null,"	#")]),s(`
`),n("span",{class:"line"},[n("span",null,"	# TypeMap: a list of filetype mappings; one per line.")]),s(`
`),n("span",{class:"line"},[n("span",null,"	# Each line has two elements:")]),s(`
`),n("span",{class:"line"},[n("span",null,"	#")]),s(`
`),n("span",{class:"line"},[n("span",null,"	# Filetype: The filetype to use on 'p4 add'.")]),s(`
`),n("span",{class:"line"},[n("span",null,"	#")]),s(`
`),n("span",{class:"line"},[n("span",null,"	# Path: File pattern which will use this filetype.")]),s(`
`),n("span",{class:"line"},[n("span",null,"	#")]),s(`
`),n("span",{class:"line"},[n("span",null,"	# See 'p4 help typemap' for more information.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"TypeMap:")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....exe")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....dll")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....lib")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....app")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....dylib")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....stub")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....ipa")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary //depot/....bmp")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....ini")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....config")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....cpp")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....h")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....c")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....cs")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....m")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....mm")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....py")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....uasset")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....umap")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....upk")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....udk")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....ubulk")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:e(({value:a,isActive:i})=>l[3]||(l[3]=[n("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[n("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[n("code",{class:"language-"},[n("span",{class:"line"},[n("span",null,"# Perforce File Type Mapping Specifications.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  TypeMap:	a list of filetype mappings; one per line.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#		Each line has two elements:")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  		Filetype: The filetype to use on 'p4 add'.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"#  		Path:     File pattern which will use this filetype.")]),s(`
`),n("span",{class:"line"},[n("span",null,"#")]),s(`
`),n("span",{class:"line"},[n("span",null,"# See 'p4 help typemap' for more information.")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"TypeMap:")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //....asp")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //....cnf")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //....css")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //....htm")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //....html")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //....inc")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //....js")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text+w //....log")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text+w //....ini")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text+w //....pdm")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....zip")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....bz2")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....rar")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....gz")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....avi")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....jpg")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....jpeg")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....mpg")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....gif")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....tif")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....mov")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....jar")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ico")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....exp")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....btr")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....bmp")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....doc")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....dot")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....xls")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ppt")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....pdf")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....tar")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....exe")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....dll")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....lib")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....bin")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....class")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....war")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ear")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....so")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....rpt")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....cfm")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ma")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....mb")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....pac")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....m4a")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....mp4")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....aac")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....wma")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....docx")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....pptx")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....xlsx")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....png")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....raw")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....odt")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ods")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....odg")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....odp")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....otg")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ots")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ott")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....psd")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....sxw")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....exe")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....dll")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....lib")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....app")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....dylib")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....stub")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....ipa")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary //depot/....bmp")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....ini")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....config")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....cpp")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....h")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....c")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....cs")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....m")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....mm")]),s(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....py")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....uasset")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....umap")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....upk")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....udk")]),s(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....ubulk")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),l[7]||(l[7]=n("p",null,"完成编辑后，点击键盘上的 Ctrl+S 保存并退出。命令行应该会提示 Typemap saved。",-1))])}const f=t(o,[["render",v]]),x=JSON.parse('{"path":"/engine/Perforce/P4Typemap.html","title":"P4Typemap Set","lang":"zh-CN","frontmatter":{"title":"P4Typemap Set","icon":"iconfont alicon-perforce","category":["Perforce"],"tags":["Perforce","typemap"],"date":"2025-03-15T00:00:00.000Z","description":"在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"P4Typemap Set\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-15T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-18T17:06:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"],["meta",{"property":"og:url","content":"https:///about.md/blog/engine/Perforce/P4Typemap.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"P4Typemap Set"}],["meta",{"property":"og:description","content":"在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-18T17:06:57.000Z"}],["meta",{"property":"article:tag","content":"typemap"}],["meta",{"property":"article:tag","content":"Perforce"}],["meta",{"property":"article:published_time","content":"2025-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-18T17:06:57.000Z"}]]},"git":{"createdTime":1742052435000,"updatedTime":1742317617000,"contributors":[{"name":"Megestus","username":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":2,"url":"https://github.com/Megestus"}],"changelog":[{"hash":"77c0f6100593a366c638cba200be333fdee1b033","time":1742317617000,"email":"75190962+Megestus@users.noreply.github.com","author":"Megestus","message":"update"},{"hash":"4d85baccb368a81f14baeec67136afee1fa40621","time":1742052435000,"email":"75190962+Megestus@users.noreply.github.com","author":"Megestus","message":"UPDATE"}]},"filePathRelative":"engine/Perforce/P4Typemap.md","excerpt":"<p> </p>\\n<p>在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。</p>\\n","autoDesc":true}');export{f as comp,x as data};
