import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as n,d as c,f as u,a as d,w as e,r as b,o as m,e as l}from"./app-DTepnp3Y.js";const o={};function v(y,s){const p=b("CodeTabs");return m(),r("div",null,[s[4]||(s[4]=n("p",null," ",-1)),s[5]||(s[5]=n("p",null,"在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。",-1)),c(" more "),s[6]||(s[6]=u(`<h2 id="p4typemap-setup" tabindex="-1"><a class="header-anchor" href="#p4typemap-setup"><span>P4Typemap setup</span></a></h2><p>在命令行下设置 P4 的环境变量,将下方相应的部分替换为你的用户名和连接地址，</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>p4 set P4USER=your.username</span></span>
<span class="line"><span>	p4 set P4PORT=localhost:1666</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>用下面的命令打开 typemap 设置。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>p4 -P YourPassword typemap</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后将会看到一个文本窗口，这就是当前服务器的 typemap。下面是我们以前用过的 typemap 示例：</p>`,6)),d(p,{id:"21",data:[{id:"UE官方"},{id:"快捷复制"}],"tab-id":"shell"},{title0:e(({value:a,isActive:i})=>s[0]||(s[0]=[l("UE官方")])),title1:e(({value:a,isActive:i})=>s[1]||(s[1]=[l("快捷复制")])),tab0:e(({value:a,isActive:i})=>s[2]||(s[2]=[n("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[n("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"# Perforce File Type Mapping Specifications.")]),l(`
`),n("span",{class:"line"},[n("span",null,"	#")]),l(`
`),n("span",{class:"line"},[n("span",null,"	# TypeMap: a list of filetype mappings; one per line.")]),l(`
`),n("span",{class:"line"},[n("span",null,"	# Each line has two elements:")]),l(`
`),n("span",{class:"line"},[n("span",null,"	#")]),l(`
`),n("span",{class:"line"},[n("span",null,"	# Filetype: The filetype to use on 'p4 add'.")]),l(`
`),n("span",{class:"line"},[n("span",null,"	#")]),l(`
`),n("span",{class:"line"},[n("span",null,"	# Path: File pattern which will use this filetype.")]),l(`
`),n("span",{class:"line"},[n("span",null,"	#")]),l(`
`),n("span",{class:"line"},[n("span",null,"	# See 'p4 help typemap' for more information.")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"TypeMap:")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....exe")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....dll")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....lib")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....app")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....dylib")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....stub")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....ipa")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary //depot/....bmp")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....ini")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....config")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....cpp")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....h")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....c")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....cs")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....m")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....mm")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....py")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....uasset")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....umap")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....upk")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....udk")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....ubulk")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:e(({value:a,isActive:i})=>s[3]||(s[3]=[n("div",{class:"language- line-numbers-mode","data-highlighter":"shiki","data-ext":"",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[n("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"# Perforce File Type Mapping Specifications.")]),l(`
`),n("span",{class:"line"},[n("span",null,"#")]),l(`
`),n("span",{class:"line"},[n("span",null,"#  TypeMap:	a list of filetype mappings; one per line.")]),l(`
`),n("span",{class:"line"},[n("span",null,"#		Each line has two elements:")]),l(`
`),n("span",{class:"line"},[n("span",null,"#")]),l(`
`),n("span",{class:"line"},[n("span",null,"#  		Filetype: The filetype to use on 'p4 add'.")]),l(`
`),n("span",{class:"line"},[n("span",null,"#")]),l(`
`),n("span",{class:"line"},[n("span",null,"#  		Path:     File pattern which will use this filetype.")]),l(`
`),n("span",{class:"line"},[n("span",null,"#")]),l(`
`),n("span",{class:"line"},[n("span",null,"# See 'p4 help typemap' for more information.")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"TypeMap:")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //....asp")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //....cnf")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //....css")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //....htm")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //....html")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //....inc")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //....js")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text+w //....log")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text+w //....ini")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text+w //....pdm")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....zip")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....bz2")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....rar")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....gz")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....avi")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....jpg")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....jpeg")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....mpg")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....gif")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....tif")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....mov")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+Fl //....jar")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ico")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....exp")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....btr")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....bmp")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....doc")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....dot")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....xls")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ppt")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....pdf")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....tar")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....exe")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....dll")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....lib")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....bin")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....class")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....war")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ear")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....so")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....rpt")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....cfm")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ma")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....mb")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....pac")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....m4a")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....mp4")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....aac")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....wma")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....docx")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....pptx")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....xlsx")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....png")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....raw")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....odt")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ods")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....odg")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....odp")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....otg")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ots")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....ott")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....psd")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //....sxw")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....exe")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....dll")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....lib")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....app")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....dylib")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....stub")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+w //depot/....ipa")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary //depot/....bmp")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....ini")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....config")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....cpp")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....h")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....c")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....cs")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....m")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....mm")]),l(`
`),n("span",{class:"line"},[n("span",null,"	text //depot/....py")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....uasset")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....umap")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....upk")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....udk")]),l(`
`),n("span",{class:"line"},[n("span",null,"	binary+l //depot/....ubulk")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),s[7]||(s[7]=n("p",null,"完成编辑后，点击键盘上的 Ctrl+S 保存并退出。命令行应该会提示 Typemap saved。",-1))])}const f=t(o,[["render",v]]),x=JSON.parse('{"path":"/engine/Perforce/P4Typemap.html","title":"P4Typemap Set","lang":"zh-CN","frontmatter":{"title":"P4Typemap Set","icon":"iconfont alicon-perforce","category":["Perforce"],"tags":["Perforce","typemap"],"date":"2025-03-15T00:00:00.000Z","description":"在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/Perforce/P4Typemap.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"P4Typemap Set"}],["meta",{"property":"og:description","content":"在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-18T17:06:57.000Z"}],["meta",{"property":"article:tag","content":"Perforce"}],["meta",{"property":"article:tag","content":"typemap"}],["meta",{"property":"article:published_time","content":"2025-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-18T17:06:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"P4Typemap Set\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-15T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-18T17:06:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"git":{"createdTime":1742052435000,"updatedTime":1742317617000,"contributors":[{"name":"Megestus","username":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":2,"url":"https://github.com/Megestus"}],"changelog":[{"hash":"77c0f6100593a366c638cba200be333fdee1b033","time":1742317617000,"email":"75190962+Megestus@users.noreply.github.com","author":"Megestus","message":"update"},{"hash":"4d85baccb368a81f14baeec67136afee1fa40621","time":1742052435000,"email":"75190962+Megestus@users.noreply.github.com","author":"Megestus","message":"UPDATE"}]},"filePathRelative":"engine/Perforce/P4Typemap.md","localizedDate":"2025年3月15日","excerpt":"<p> </p>\\n<p>在向新的 Depot 添加文件前，应当先设置 P4 Typemap 来让 Perforce 了解如何对待虚幻文件类型。typemap 的设置能够在 Perforce 中控制文件的只读和可写的形式。</p>\\n","autoDesc":true}');export{f as comp,x as data};
