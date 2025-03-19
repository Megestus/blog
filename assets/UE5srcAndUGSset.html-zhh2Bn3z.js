import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,b as e,d as o,f as r,a as c,w as i,r as u,o as m,e as n}from"./app-CqJLYeKA.js";const b={};function v(h,s){const t=u("CodeTabs");return m(),d("div",null,[s[8]||(s[8]=e("p",null,"本文是学习部署源码引擎构建并使用UGS作为Perforce同步UE项目的图形化前端的笔记...",-1)),o(" more "),s[9]||(s[9]=r(`<p> </p><h2 id="一、设置visual-studio-环境" tabindex="-1"><a class="header-anchor" href="#一、设置visual-studio-环境"><span>一、设置Visual Studio 环境</span></a></h2><h3 id="设置虚幻引擎到visual-studio工作流前" tabindex="-1"><a class="header-anchor" href="#设置虚幻引擎到visual-studio工作流前"><span>设置虚幻引擎到Visual Studio工作流前</span></a></h3><p>下列表格列出了已集成二进制版虚幻引擎的Visual Studio版本。</p><table><thead><tr><th>虚幻引擎版本</th><th>Visual Studio版本</th></tr></thead><tbody><tr><td>4.25或更高版本</td><td>VS 2019 (Default)</td></tr><tr><td>4.22或更高版本</td><td>VS 2017 / VS 2019</td></tr><tr><td>4.15或更高版本</td><td>VS 2017</td></tr><tr><td>4.10 - 4.14</td><td>VS 2015</td></tr><tr><td>4.2 - 4.9</td><td>VS 2013</td></tr></tbody></table><p><a href="https://visualstudio.microsoft.com/zh-hans/downloads/" target="_blank" rel="noopener noreferrer">Visual Studio下载地址</a></p><blockquote><p>推荐vs2022</p></blockquote><h3 id="运行虚幻引擎必备条件安装程序" tabindex="-1"><a class="header-anchor" href="#运行虚幻引擎必备条件安装程序"><span>运行虚幻引擎必备条件安装程序</span></a></h3><p>在Epic启动器安装或从GitHub复制虚幻引擎时，将自动运行虚幻引擎必备条件安装程序。若通过Perforce进行安装或同步虚幻引擎，则需要手动运行必备条件安装程序。 运行本地编译的虚幻引擎工具前必须进行此操作。<br> 安装程序位于<code>[虚幻引擎根目录]\\Engine\\Extras\\Redist\\en-us\\</code>。</p><h4 id="新安装visual-studio时的选项" tabindex="-1"><a class="header-anchor" href="#新安装visual-studio时的选项"><span>新安装Visual Studio时的选项</span></a></h4><p>如果你是初次安装Visual Studio，请确保启用下列选项。</p><h4 id="c-工具" tabindex="-1"><a class="header-anchor" href="#c-工具"><span>C++工具</span></a></h4><p>要在安装Visual Studio时添加C++工具，请确保在 工作量（Workloads） 下选择 用C++开发游戏（Game development with C++），并使用以下选项：</p><ul><li>C++ profiling tools</li><li>C++ AddressSanitizer (optional)</li><li>Windows 10 SDK (10.0.18362 or Newer)</li></ul><h4 id="包含虚幻引擎安装程序" tabindex="-1"><a class="header-anchor" href="#包含虚幻引擎安装程序"><span>包含虚幻引擎安装程序</span></a></h4><p>要在安装Visual Studio时包含虚幻引擎的安装程序，在右侧的 摘要（Summary） 工具栏中展开 用C++开发游戏（Game development with C++）。<br> 在可选（Optional） 下，确保勾选 虚幻引擎安装程序（Unreal Engine installer） 以便启用它。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161509547.png" style="width:50%!important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161509242.png" style="width:50%!important;"></div><blockquote><p>如果你PC是win11，并且使用VS2022可能会如同我这般基本勾选上了，只缺一个<code>win10 SDK(10.0.19041)</code>,<br> 一起安装可同时兼容 Win10 和 Win11 系统，以应对不同的开发情况。</p></blockquote><p>更多的推荐设置麻烦跳转官网查看 <a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine?application_version=5.0" target="_blank" rel="noopener noreferrer">设置Visual Studio以使用虚幻引擎的提示、技巧和技术</a></p><p> </p><h2 id="二、下载虚幻引擎源代码" tabindex="-1"><a class="header-anchor" href="#二、下载虚幻引擎源代码"><span>二、下载虚幻引擎源代码</span></a></h2><p>如要访问https://github.com/EpicGames/UnrealEngine上的仓库，你必须满足以下条件：</p><ul><li>已经是虚幻引擎的订阅用户。</li><li>已经拥有GitHub账号。</li><li>已经根据<a href="https://www.unrealengine.com/zh-CN/ue-on-github" target="_blank" rel="noopener noreferrer">在GitHub上访问虚幻引擎源代码</a>文中的所述步骤，将GitHub账号与你的虚幻引擎账号关联。</li></ul><p> </p><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支"><span>分支</span></a></h3><h4 id="源代码分支" tabindex="-1"><a class="header-anchor" href="#源代码分支"><span>源代码分支</span></a></h4><p>UE5源代码发布在若干个分支中。 名称中包含dev、staging和test的分支通常给Epic内部流程使用，对于终端用户几乎没有用处。当官方对新版本进行稳定性更新或者发布补丁时，其它临时的分支也会时不时地出现。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161716696.png" style="width:100% !important;"></div><h4 id="发布分支" tabindex="-1"><a class="header-anchor" href="#发布分支"><span>发布分支</span></a></h4><p>发布（Release） 分支会一直和当前的官方版本保持一致。它们经过我们官方QA团队全面的测试，所以对于学习虚幻引擎和制作自己的项目来说是一个很好的起始点。官方花费大量精力来确保每次发布的版本都稳定可靠，并且计划每隔几个月发布新的版本。</p><h4 id="主分支" tabindex="-1"><a class="header-anchor" href="#主分支"><span>主分支</span></a></h4><p>大部分活跃的UE5开发工作在 <a href="https://github.com/EpicGames/UnrealEngine/tree/ue5-main" target="_blank" rel="noopener noreferrer">ue5-main</a> 分支中进行。该分支是引擎最新的发布版本，可能存在一些bug，或者甚至无法正常编译。开发者可用用它来测试新功能或者与我们一起进行锁步开发。</p><blockquote><p>如果你要使用该分支，请注意它会比当前官方版本和下一个要发布的版本都要提前。所以你在ue5-main分支中创建的内容和代码可能与当前官方发布的版本并不兼容，需要等官方之后从ue5-main中创建新分支用于发布之后。</p></blockquote><p>运行 Perforce 服务器又两种方式，P4D 和 P4S。P4D 运行时是一个命令行命令，因此它通常被用来做维护工作时使用。P4S 是一个和 P4D 相同功能的服务，这能让服务器程序在后台运行。 当安装 Perforce 服务器工具后，P4S 通常都会被安装并在后台启动。</p><blockquote><p>有时候服务并没有自动启动。要先Windows系统中启动服务，首先找到 Control Panel -&gt; Administrative Tools -&gt;Services applet。 然后在列表中找到 Perforce Service 并启动它：</p></blockquote><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161447639.png" style="width:100% !important;"></div><p> </p><h3 id="下载源码" tabindex="-1"><a class="header-anchor" href="#下载源码"><span>下载源码</span></a></h3><p>我们构建直接下载使用官方的发布版本即可，保证其稳定性。</p><p><a href="https://github.com/EpicGames/UnrealEngine/tags" target="_blank" rel="noopener noreferrer">tags</a><br><a href="https://github.com/EpicGames/UnrealEngine/releases" target="_blank" rel="noopener noreferrer">releases</a></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503192225139.png" style="width:50% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503192225358.png" style="width:50% !important;"></div><p> </p><h2 id="三、perforce" tabindex="-1"><a class="header-anchor" href="#三、perforce"><span>三、Perforce</span></a></h2><p>Perforce的安装我们查看 <a href="https://www.zhihu.com/tardis/zm/art/606970716?source_id=1005" target="_blank" rel="noopener noreferrer">从零开始在NAS上配置Perforce并启用虚幻引擎源码管理</a>,<br> 当然没有服务器，我们也可以在windows中安装Docker部署Perforce。</p><p>我们开始打开P4Admin和P4V连接服务器 创建流仓库和流</p><h3 id="在p4admin新建steamsdepot-ue5" tabindex="-1"><a class="header-anchor" href="#在p4admin新建steamsdepot-ue5"><span>在P4Admin新建SteamsDepot <code>UE5</code></span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161755856.png"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161756236.png" style="width:20% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161756378.png"></div><p> </p><h3 id="在p4v-上创建-steams" tabindex="-1"><a class="header-anchor" href="#在p4v-上创建-steams"><span>在P4V 上创建 Steams</span></a></h3><table><thead><tr><th></th><th></th><th>仓库</th><th>适用范围</th></tr></thead><tbody><tr><td>Dev</td><td>//UE5/Dev</td><td>UE</td><td>用于存放Dev引擎主路径</td></tr><tr><td>Dev-Binaries</td><td>//UE5/Dev-Binaries</td><td>UE</td><td>用于存放预构建缓存二进制文件</td></tr><tr><td>UnrealGameSync</td><td>//UE5/UnrealGameSync</td><td>UE</td><td>用于存放UnrealGameSync</td></tr></tbody></table><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170004468.png" style="width:75% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005073.png" style="width:33.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005529.png" style="width:33.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005614.png" style="width:33.3% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005958.png" style="width:35% !important;"></div><p>创建好流后,会提示仓库为空,需要上传一个文件到流仓库目录下,可新建一个txt 文件,直接拖拽进去即可.</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005017.png" style="width:33.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170006596.png" style="width:33.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170023060.png" style="width:33.3% !important;"></div><p> </p><h3 id="perforce设置workspace" tabindex="-1"><a class="header-anchor" href="#perforce设置workspace"><span>Perforce设置WorkSpace</span></a></h3><p>传一个文件到流仓库目录下时会临时自动创建一个随机名称的Workspace,那么我们需要新建的Workspace根据项目需求并规范化命名。</p><ul><li>开发Dev仓库Workspace</li><li>Binaries用于存放预编译二进制文件</li><li>UnrealGameSync仓库Workspace</li></ul><p> </p><h3 id="typemap-和-ignore" tabindex="-1"><a class="header-anchor" href="#typemap-和-ignore"><span>Typemap 和 .ignore</span></a></h3><ul><li>Typemap是让Perforce服务器可编译储存项目所需的各类格式的文件</li></ul><p>在Perforce的仓库中右击打开CMD编辑器并输入以下代码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">p4 typemap</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在打开的Typemap文件中替换下方typemap代码，完成编辑后，点击键盘上的 Ctrl+S 保存并退出。命令行应该会提示 Typemap saved。</p>`,65)),c(t,{id:"344",data:[{id:"typemap"},{id:".ignore"}],"tab-id":"shell"},{title0:i(({value:a,isActive:l})=>s[0]||(s[0]=[n("typemap")])),title1:i(({value:a,isActive:l})=>s[1]||(s[1]=[n(".ignore")])),tab0:i(({value:a,isActive:l})=>s[2]||(s[2]=[e("div",{class:"language-typemap line-numbers-mode","data-highlighter":"prismjs","data-ext":"typemap"},[e("pre",null,[e("code",null,[e("span",{class:"line"},"# The form data below was edited by admin"),n(`
`),e("span",{class:"line"},"# Perforce File Type Mapping Specifications."),n(`
`),e("span",{class:"line"},"#"),n(`
`),e("span",{class:"line"},"#  TypeMap:	a list of filetype mappings; one per line."),n(`
`),e("span",{class:"line"},"#		Each line has two elements:"),n(`
`),e("span",{class:"line"},"#"),n(`
`),e("span",{class:"line"},"#  		Filetype: The filetype to use on 'p4 add'."),n(`
`),e("span",{class:"line"},"#"),n(`
`),e("span",{class:"line"},"#  		Path:     File pattern which will use this filetype."),n(`
`),e("span",{class:"line"},"#"),n(`
`),e("span",{class:"line"},"# See 'p4 help typemap' for more information."),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"TypeMap:"),n(`
`),e("span",{class:"line"},"	text //....asp"),n(`
`),e("span",{class:"line"},"	text //....cnf"),n(`
`),e("span",{class:"line"},"	text //....css"),n(`
`),e("span",{class:"line"},"	text //....htm"),n(`
`),e("span",{class:"line"},"	text //....html"),n(`
`),e("span",{class:"line"},"	text //....inc"),n(`
`),e("span",{class:"line"},"	text //....js"),n(`
`),e("span",{class:"line"},"	text+w //....log"),n(`
`),e("span",{class:"line"},"	text+w //....ini"),n(`
`),e("span",{class:"line"},"	text+w //....pdm"),n(`
`),e("span",{class:"line"},"	binary+Fl //....zip"),n(`
`),e("span",{class:"line"},"	binary+Fl //....bz2"),n(`
`),e("span",{class:"line"},"	binary+Fl //....rar"),n(`
`),e("span",{class:"line"},"	binary+Fl //....gz"),n(`
`),e("span",{class:"line"},"	binary+Fl //....avi"),n(`
`),e("span",{class:"line"},"	binary+Fl //....jpg"),n(`
`),e("span",{class:"line"},"	binary+Fl //....jpeg"),n(`
`),e("span",{class:"line"},"	binary+Fl //....mpg"),n(`
`),e("span",{class:"line"},"	binary+Fl //....gif"),n(`
`),e("span",{class:"line"},"	binary+Fl //....tif"),n(`
`),e("span",{class:"line"},"	binary+Fl //....mov"),n(`
`),e("span",{class:"line"},"	binary+Fl //....jar"),n(`
`),e("span",{class:"line"},"	binary+l //....ico"),n(`
`),e("span",{class:"line"},"	binary+l //....exp"),n(`
`),e("span",{class:"line"},"	binary+l //....btr"),n(`
`),e("span",{class:"line"},"	binary+l //....bmp"),n(`
`),e("span",{class:"line"},"	binary+l //....doc"),n(`
`),e("span",{class:"line"},"	binary+l //....dot"),n(`
`),e("span",{class:"line"},"	binary+l //....xls"),n(`
`),e("span",{class:"line"},"	binary+l //....ppt"),n(`
`),e("span",{class:"line"},"	binary+l //....pdf"),n(`
`),e("span",{class:"line"},"	binary+l //....tar"),n(`
`),e("span",{class:"line"},"	binary+l //....exe"),n(`
`),e("span",{class:"line"},"	binary+l //....dll"),n(`
`),e("span",{class:"line"},"	binary+l //....lib"),n(`
`),e("span",{class:"line"},"	binary+l //....bin"),n(`
`),e("span",{class:"line"},"	binary+l //....class"),n(`
`),e("span",{class:"line"},"	binary+l //....war"),n(`
`),e("span",{class:"line"},"	binary+l //....ear"),n(`
`),e("span",{class:"line"},"	binary+l //....so"),n(`
`),e("span",{class:"line"},"	binary+l //....rpt"),n(`
`),e("span",{class:"line"},"	binary+l //....cfm"),n(`
`),e("span",{class:"line"},"	binary+l //....ma"),n(`
`),e("span",{class:"line"},"	binary+l //....mb"),n(`
`),e("span",{class:"line"},"	binary+l //....pac"),n(`
`),e("span",{class:"line"},"	binary+l //....m4a"),n(`
`),e("span",{class:"line"},"	binary+l //....mp4"),n(`
`),e("span",{class:"line"},"	binary+l //....aac"),n(`
`),e("span",{class:"line"},"	binary+l //....wma"),n(`
`),e("span",{class:"line"},"	binary+l //....docx"),n(`
`),e("span",{class:"line"},"	binary+l //....pptx"),n(`
`),e("span",{class:"line"},"	binary+l //....xlsx"),n(`
`),e("span",{class:"line"},"	binary+l //....png"),n(`
`),e("span",{class:"line"},"	binary+l //....raw"),n(`
`),e("span",{class:"line"},"	binary+l //....odt"),n(`
`),e("span",{class:"line"},"	binary+l //....ods"),n(`
`),e("span",{class:"line"},"	binary+l //....odg"),n(`
`),e("span",{class:"line"},"	binary+l //....odp"),n(`
`),e("span",{class:"line"},"	binary+l //....otg"),n(`
`),e("span",{class:"line"},"	binary+l //....ots"),n(`
`),e("span",{class:"line"},"	binary+l //....ott"),n(`
`),e("span",{class:"line"},"	binary+l //....psd"),n(`
`),e("span",{class:"line"},"	binary+l //....sxw"),n(`
`),e("span",{class:"line"},"	binary+S2w //....exe"),n(`
`),e("span",{class:"line"},"	binary+S2w //....dll"),n(`
`),e("span",{class:"line"},"	binary+S2w //....lib"),n(`
`),e("span",{class:"line"},"	binary+S2w //....app"),n(`
`),e("span",{class:"line"},"	binary+S2w //....dylib"),n(`
`),e("span",{class:"line"},"	binary+S2w //....stub"),n(`
`),e("span",{class:"line"},"	binary+S2w //....ipa"),n(`
`),e("span",{class:"line"},"	binary //....bmp"),n(`
`),e("span",{class:"line"},"	text //....ini"),n(`
`),e("span",{class:"line"},"	text //....config"),n(`
`),e("span",{class:"line"},"	text //....cpp"),n(`
`),e("span",{class:"line"},"	text //....h"),n(`
`),e("span",{class:"line"},"	text //....c"),n(`
`),e("span",{class:"line"},"	text //....cs"),n(`
`),e("span",{class:"line"},"	text //....m"),n(`
`),e("span",{class:"line"},"	text //....mm"),n(`
`),e("span",{class:"line"},"	text //....py"),n(`
`),e("span",{class:"line"},"	binary+l //....uasset"),n(`
`),e("span",{class:"line"},"	binary+l //....umap"),n(`
`),e("span",{class:"line"},"	binary+l //....upk"),n(`
`),e("span",{class:"line"},"	binary+l //....udk"),n(`
`),e("span",{class:"line"},"	binary+w //....exe"),n(`
`),e("span",{class:"line"},"	binary+w //....dll"),n(`
`),e("span",{class:"line"},"	binary+w //....lib"),n(`
`),e("span",{class:"line"},"	binary+w //....app"),n(`
`),e("span",{class:"line"},"	binary+w //....dylib"),n(`
`),e("span",{class:"line"},"	binary+w //....stub"),n(`
`),e("span",{class:"line"},"	binary+w //....ipa"),n(`
`),e("span",{class:"line"},"	binary //....bmp"),n(`
`),e("span",{class:"line"},"	text //....ini"),n(`
`),e("span",{class:"line"},"	text+w //....config"),n(`
`),e("span",{class:"line"},"	text //....cpp"),n(`
`),e("span",{class:"line"},"	text //....h"),n(`
`),e("span",{class:"line"},"	text //....c"),n(`
`),e("span",{class:"line"},"	text //....cs"),n(`
`),e("span",{class:"line"},"	text //....m"),n(`
`),e("span",{class:"line"},"	text //....mm"),n(`
`),e("span",{class:"line"},"	text //....py"),n(`
`),e("span",{class:"line"},"	binary+l //....uasset"),n(`
`),e("span",{class:"line"},"	binary+l //....umap"),n(`
`),e("span",{class:"line"},"	binary+l //....upk"),n(`
`),e("span",{class:"line"},"	binary+l //....udk"),n(`
`),e("span",{class:"line"},"	binary+l //....ubulk"),n(`
`),e("span",{class:"line"},"	text //....ignore"),n(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),tab1:i(({value:a,isActive:l})=>s[3]||(s[3]=[e("div",{class:"language-.ignore line-numbers-mode","data-highlighter":"prismjs","data-ext":".ignore"},[e("pre",null,[e("code",null,[e("span",{class:"line"},"# directories"),n(`
`),e("span",{class:"line"},"*/.git/*"),n(`
`),e("span",{class:"line"},"*/.vs/*"),n(`
`),e("span",{class:"line"},"*/obj/Development/*"),n(`
`),e("span",{class:"line"},"*/obj/Debug/*"),n(`
`),e("span",{class:"line"},"*/obj/x64/*"),n(`
`),e("span",{class:"line"},"*/Intermediate/*"),n(`
`),e("span",{class:"line"},"*/Saved/*"),n(`
`),e("span",{class:"line"},"*/DerivedDataCache/*"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"# files"),n(`
`),e("span",{class:"line"},"*.pdb"),n(`
`),e("span",{class:"line"},"*.obj"),n(`
`),e("span",{class:"line"},"*.response"),n(`
`),e("span",{class:"line"},"*.prev"),n(`
`),e("span",{class:"line"},"**DebugGame*"),n(`
`),e("span",{class:"line"},"*.pch"),n(`
`),e("span",{class:"line"},"*.tmp"),n(`
`),e("span",{class:"line"},"*.dSYM"),n(`
`),e("span",{class:"line"},"*.VC.db"),n(`
`),e("span",{class:"line"},"*.opensdf"),n(`
`),e("span",{class:"line"},"*.opendb"),n(`
`),e("span",{class:"line"},"*.sdf"),n(`
`),e("span",{class:"line"},"*.suo"),n(`
`),e("span",{class:"line"},"*.log"),n(`
`),e("span",{class:"line"},"*.DS_Store"),n(`
`),e("span",{class:"line"},"*.ipch"),n(`
`),e("span",{class:"line"},"*.vscode/*"),n(`
`),e("span",{class:"line"},"*.idea/*"),n(`
`),e("span",{class:"line"},"*.sln"),n(`
`),e("span",{class:"line"},"*.p4config"),n(`
`),e("span",{class:"line"},"*.code-workspace"),n(`
`),e("span",{class:"line"},"*.ue4dependencies"),n(`
`),e("span",{class:"line"},"*/Log.txt"),n(`
`),e("span",{class:"line"},"*.akd"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"**/Engine/DerivedDataCache/*"),n(`
`),e("span",{class:"line"},"**/Engine/Binaries/Win64/**Win64-Debug*"),n(`
`),e("span",{class:"line"},"**/Engine/Binaries/Mac/**Mac-Debug*"),n(`
`),e("span",{class:"line"},"**/Engine/Plugins/**Win64-Debug*"),n(`
`),e("span",{class:"line"},"**/Engine/Plugins/**Mac-Debug*"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"**/Projects/**Win64-Debug*"),n(`
`),e("span",{class:"line"},"**/Projects/**Mac-Debug*"),n(`
`),e("span",{class:"line"},"**/Projects/**/.vs/*"),n(`
`),e("span",{class:"line"},"**/Projects/**/Binaries/*"),n(`
`),e("span",{class:"line"},"**/Projects/**/DerivedDataCache/*"),n(`
`),e("span",{class:"line"},"**/Projects/**/Intermediate/*"),n(`
`),e("span",{class:"line"},"**/Projects/**/Saved/*"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"!**/Engine/Binaries/DotNET/*"),n(`
`),e("span",{class:"line"},"!**/Engine/Intermediate/**.precompiled"),n(`
`),e("span",{class:"line"},"!**/Engine/Intermediate/**.lib"),n(`
`),e("span",{class:"line"},"!**/Engine/Intermediate/**.o"),n(`
`),e("span",{class:"line"},"!**/Engine/Intermediate/**.obj"),n(`
`),e("span",{class:"line"},"!**/Engine/Source/**.sln"),n(`
`),e("span",{class:"line"},"!**/Engine/Source/**.vscode/*"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"!**/Projects/**/Content/**.obj"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"!Dev-Binaries/**.zip"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"/Engine/DerivedDataCache/*"),n(`
`),e("span",{class:"line"},"/Engine/Binaries/Win64/**Win64-Debug*"),n(`
`),e("span",{class:"line"},"/Engine/Binaries/Mac/**Mac-Debug*"),n(`
`),e("span",{class:"line"},"/Engine/Plugins/**Win64-Debug*"),n(`
`),e("span",{class:"line"},"/Engine/Plugins/**Mac-Debug*"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"/Projects/**Win64-Debug*"),n(`
`),e("span",{class:"line"},"/Projects/**Mac-Debug*"),n(`
`),e("span",{class:"line"},"/Projects/**/.vs/*"),n(`
`),e("span",{class:"line"},"/Projects/**/Binaries/*"),n(`
`),e("span",{class:"line"},"/Projects/**/DerivedDataCache/*"),n(`
`),e("span",{class:"line"},"/Projects/**/Intermediate/*"),n(`
`),e("span",{class:"line"},"/Projects/**/Saved/*"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"!/Engine/Binaries/DotNET/*"),n(`
`),e("span",{class:"line"},"!/Engine/Intermediate/**.precompiled"),n(`
`),e("span",{class:"line"},"!/Engine/Intermediate/**.lib"),n(`
`),e("span",{class:"line"},"!/Engine/Intermediate/**.o"),n(`
`),e("span",{class:"line"},"!/Engine/Intermediate/**.obj"),n(`
`),e("span",{class:"line"},"!/Engine/Source/**.sln"),n(`
`),e("span",{class:"line"},"!/Engine/Source/**.vscode/*"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"!/Projects/**/Content/**.obj"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"!/Dev-Binaries/**.zip"),n(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),s[10]||(s[10]=r(`<ul><li>ignore则是 过滤忽略无需同步的文件。</li></ul><h4 id="_1-新建-ignore文件并上传至仓库" tabindex="-1"><a class="header-anchor" href="#_1-新建-ignore文件并上传至仓库"><span>1.新建 .ignore文件并上传至仓库</span></a></h4><p>新建txt文本,重命名为<code>p4ignore.txt</code>,后复制上方.ignore代码，上传P4</p><h4 id="_2-在depot右击打开cmd" tabindex="-1"><a class="header-anchor" href="#_2-在depot右击打开cmd"><span>2.在Depot右击打开CMD</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503192325338.png" style="width:100% !important;"></div><h4 id="_3-运行p4ignore-bat" tabindex="-1"><a class="header-anchor" href="#_3-运行p4ignore-bat"><span>3.运行P4ignore.bat</span></a></h4><p>新建txt文本,重命名为<code>P4ignore.bat</code>,双击运行。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@echo off</span>
<span class="line">set workdir=%~dp0</span>
<span class="line">set result=%workdir%p4ignore.txt</span>
<span class="line">echo %result%</span>
<span class="line">p4 set P4IGNORE=&quot;%result%&quot;</span>
<span class="line">pause</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-输入p4-ignores" tabindex="-1"><a class="header-anchor" href="#_4-输入p4-ignores"><span>4.输入p4 ignores</span></a></h4><p>同理，在P4 CMD中输入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">p4 ignores</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查p4 ignore是否生效,如生成相应过滤路径，则p4ignore已生效</p><p> </p><h2 id="四、编译源码" tabindex="-1"><a class="header-anchor" href="#四、编译源码"><span>四、编译源码</span></a></h2><p>把我们下载好的源码zip，解压到我们指定的Workspass Dev仓库中</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503192316731.png" style="width:95% !important;"></div><h3 id="setup-bat优化加速设置" tabindex="-1"><a class="header-anchor" href="#setup-bat优化加速设置"><span>Setup.bat优化加速设置</span></a></h3><p>设置Setup.bat文件中下载线程与过滤以及指认缓存位置</p><p><code>--threads=20 --cache=%~dp0UE5_Source_Cahce</code></p><p>总览Setup.bat</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@echo off</span>
<span class="line">setlocal</span>
<span class="line">pushd &quot;%~dp0&quot;</span>
<span class="line"></span>
<span class="line">rem Figure out if we should append the -prompt argument</span>
<span class="line">set PROMPT_ARGUMENT=</span>
<span class="line">for %%P in (%*) do if /I &quot;%%P&quot; == &quot;--prompt&quot; goto no_prompt_argument</span>
<span class="line">for %%P in (%*) do if /I &quot;%%P&quot; == &quot;--force&quot; goto no_prompt_argument</span>
<span class="line">set PROMPT_ARGUMENT=--prompt --threads=20 --cache=%~dp0UE5_Source_Cahce</span>
<span class="line">:no_prompt_argument</span>
<span class="line"></span>
<span class="line">rem Sync the dependencies...</span>
<span class="line">.\\Engine\\Binaries\\DotNET\\GitDependencies.exe %PROMPT_ARGUMENT% %*</span>
<span class="line">if ERRORLEVEL 1 goto error</span>
<span class="line"></span>
<span class="line">rem Setup the git hooks...</span>
<span class="line">if not exist .git\\hooks goto no_git_hooks_directory</span>
<span class="line">echo Registering git hooks...</span>
<span class="line">echo #!/bin/sh &gt;.git\\hooks\\post-checkout</span>
<span class="line">echo Engine/Binaries/DotNET/GitDependencies.exe %* &gt;&gt;.git\\hooks\\post-checkout</span>
<span class="line">echo #!/bin/sh &gt;.git\\hooks\\post-merge</span>
<span class="line">echo Engine/Binaries/DotNET/GitDependencies.exe %* &gt;&gt;.git\\hooks\\post-merge</span>
<span class="line">:no_git_hooks_directory</span>
<span class="line"></span>
<span class="line">rem Install prerequisites...</span>
<span class="line">echo Installing prerequisites...</span>
<span class="line">start /wait Engine\\Extras\\Redist\\en-us\\UE4PrereqSetup_x64.exe /quiet</span>
<span class="line"></span>
<span class="line">rem Register the engine installation...</span>
<span class="line">if not exist .\\Engine\\Binaries\\Win64\\UnrealVersionSelector-Win64-Shipping.exe goto :no_unreal_version_selector</span>
<span class="line">.\\Engine\\Binaries\\Win64\\UnrealVersionSelector-Win64-Shipping.exe /register</span>
<span class="line">:no_unreal_version_selector</span>
<span class="line"></span>
<span class="line">rem Done!</span>
<span class="line">goto :end</span>
<span class="line"></span>
<span class="line">rem Error happened. Wait for a keypress before quitting.</span>
<span class="line">:error</span>
<span class="line">pause</span>
<span class="line"></span>
<span class="line">:end</span>
<span class="line">popd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双击Setup.bat 安装依赖</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503192329458.png" style="width:100% !important;"></div><p>检查缓存文件是否生成。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503200024542.png" style="width:100% !important;"></div><p> </p><h3 id="unrealenigine修改引擎dir" tabindex="-1"><a class="header-anchor" href="#unrealenigine修改引擎dir"><span>UnrealEnigine修改引擎Dir</span></a></h3><h4 id="ue4-更改虚幻引擎的缓存路径" tabindex="-1"><a class="header-anchor" href="#ue4-更改虚幻引擎的缓存路径"><span>UE4_更改虚幻引擎的缓存路径</span></a></h4><p>在UE4Games.uprojectdirs文件最后一行添加项目路径，像这样</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">; These folders will be searched 1 level deep in order to find projects</span>
<span class="line">; UnrealBuildTool will store the following information:</span>
<span class="line">; - Project name</span>
<span class="line">; - Location of project</span>
<span class="line">; - Whether it has code or not</span>
<span class="line">; - TargetNames contains at the project location</span>
<span class="line">;</span>
<span class="line">./</span>
<span class="line">Engine/Source/</span>
<span class="line">UEProject/</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ue5-更改虚幻引擎的缓存路径" tabindex="-1"><a class="header-anchor" href="#ue5-更改虚幻引擎的缓存路径"><span>UE5_更改虚幻引擎的缓存路径</span></a></h4><p>可参考这个链接 <a href="https://www.bilibili.com/video/BV1sK4y1Z7Bv/?spm_id_from=autoNext" target="_blank" rel="noopener noreferrer">【UE4基础】更改UE4引擎的缓存路径 教程</a></p><p>将<code>Engine\\Config\\BaseEnigne.ini</code>引擎版本不可知的用户目录/派生数据缓存<br><code>%ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache</code><br> 替换为 游戏路径/派生数据缓存<br><code>%GAMEDIR%DerivedDataCache</code></p><p>下方我也写了一个bat，直接执行即可，只需要根据提示输入引擎BaseEngine.ini所在的路径,会协助替换DDC本地缓存路径至项目根目录下。</p>`,34)),c(t,{id:"442",data:[{id:"Modify_DDC_loc_EN"},{id:"Modify_DDC_loc_ZH"}],"tab-id":"shell"},{title0:i(({value:a,isActive:l})=>s[4]||(s[4]=[n("Modify_DDC_loc_EN")])),title1:i(({value:a,isActive:l})=>s[5]||(s[5]=[n("Modify_DDC_loc_ZH")])),tab0:i(({value:a,isActive:l})=>s[6]||(s[6]=[e("div",{class:"language-bat line-numbers-mode","data-highlighter":"prismjs","data-ext":"bat"},[e("pre",null,[e("code",null,[e("span",{class:"line"},"@echo off"),n(`
`),e("span",{class:"line"},"chcp 65001"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"echo ==================================================================="),n(`
`),e("span",{class:"line"},"echo = Replace the DDC local cache path to the project root directory  = "),n(`
`),e("span",{class:"line"},"echo ==================================================================="),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"setlocal enabledelayedexpansion"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"REM Prompts the user for a path"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},'echo This script will put "ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache"'),n(`
`),e("span",{class:"line"},'echo replace "GAMEDIR%DerivedDataCache"'),n(`
`),e("span",{class:"line"},"echo Please enter the path where the BaseEngine.ini engine is located below:"),n(`
`),e("span",{class:"line"},'echo Hint: ".. \\UE 5.4\\Engine\\Config"'),n(`
`),e("span",{class:"line"},"echo ==================================================================="),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"REM Gets the path to the input"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"set /p userPath="),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"REM Replace the path entered by the user into the 'path_to_file' variable"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},'set "path_to_file=%userPath%\\BaseEngine.ini"'),n(`
`),e("span",{class:"line"},'set "search_string=%ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache"'),n(`
`),e("span",{class:"line"},'set "replace_string=%GAMEDIR%DerivedDataCache"'),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"REM Read the contents of the file line by line and replace the specified string before writing back to the original file"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},`for /f "delims=" %%a in ('type "%path_to_file%" ^& break ^> "%path_to_file%"') do (`),n(`
`),e("span",{class:"line"},'    set "line=%%a"'),n(`
`),e("span",{class:"line"},'    >>"%path_to_file%" echo(!line:%search_string%=%replace_string%!'),n(`
`),e("span",{class:"line"},")"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"REM Prompt to exit after 5 seconds"),n(`
`),e("span",{class:"line"},"echo Done  Exit in 5 seconds"),n(`
`),e("span",{class:"line"},"ping -n 5 127.0.0.1 > nul"),n(`
`),e("span",{class:"line"},"exit"),n(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),tab1:i(({value:a,isActive:l})=>s[7]||(s[7]=[e("div",{class:"language-bat line-numbers-mode","data-highlighter":"prismjs","data-ext":"bat"},[e("pre",null,[e("code",null,[e("span",{class:"line"},"@echo off"),n(`
`),e("span",{class:"line"},"chcp 65001"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"echo =========================================="),n(`
`),e("span",{class:"line"},"echo =    替换DDC本地缓存路径至项目根目录下   = "),n(`
`),e("span",{class:"line"},"echo ==========================================   "),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"setlocal enabledelayedexpansion"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"REM 提示用户输入路径"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},'echo 将会找到 "ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache"'),n(`
`),e("span",{class:"line"},'echo 替换为 "GAMEDIR%DerivedDataCache"'),n(`
`),e("span",{class:"line"},"echo 请在下方输入引擎BaseEngine.ini所在的路径:"),n(`
`),e("span",{class:"line"},'echo 提示："..\\UE_5.4\\Engine\\Config"'),n(`
`),e("span",{class:"line"},"echo ==========================================   "),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"REM 获取输入的路径"),n(`
`),e("span",{class:"line"},"set /p userPath="),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"REM 将用户输入的路径替换到 path_to_file 变量中"),n(`
`),e("span",{class:"line"},'set "path_to_file=%userPath%\\BaseEngine.ini"'),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},'set "search_string=%ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache"'),n(`
`),e("span",{class:"line"},'set "replace_string=%GAMEDIR%DerivedDataCache"'),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"REM 逐行读取文件内容并替换指定字符串后写回到原文件中"),n(`
`),e("span",{class:"line"},`for /f "delims=" %%a in ('type "%path_to_file%" ^& break ^> "%path_to_file%"') do (`),n(`
`),e("span",{class:"line"},'    set "line=%%a"'),n(`
`),e("span",{class:"line"},'    >>"%path_to_file%" echo(!line:%search_string%=%replace_string%!'),n(`
`),e("span",{class:"line"},")"),n(`
`),e("span",{class:"line"}),n(`
`),e("span",{class:"line"},"REM 提示完成"),n(`
`),e("span",{class:"line"},'echo "完成,五秒后退出."'),n(`
`),e("span",{class:"line"},"ping -n 5 127.0.0.1 > nul"),n(`
`),e("span",{class:"line"},"exit"),n(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),s[11]||(s[11]=r(`<p> </p><h3 id="ugs预编译二进制文件" tabindex="-1"><a class="header-anchor" href="#ugs预编译二进制文件"><span>UGS预编译二进制文件</span></a></h3><p>使用 UnrealGameSync（UGS） 同步和编译某个版本时，需要你的本地机器有可以编译 虚幻引擎（UE） 的IDE，并使用一系列脚本来自动执行编译过程。但是，<br> 项目中的许多贡献者并不使用代码库，或者无法访问IDE。为了使这些用户能够运行项目的最新版本，UGS支持将 预编译二进制文件（PCB） 添加到版本中。<br> 你可以使用 .zip 文件形式将PCB提交到Perforce，以将其与变更列表关联。此后，UGS可以同步和解压缩 .zip 文件的内容，而不是在本地进行编译。</p><p>执行此操作使用的用户界面与本地编译相同，但没有匹配二进制文件的更改都将显示为灰色。配置完成后，<br> 用户可以选中 选项（Options） 菜单下的 同步预编译二进制文件（Sync Precompiled Binaries），选择使用预编译二进制文件。</p><h4 id="设置流送" tabindex="-1"><a class="header-anchor" href="#设置流送"><span>设置流送</span></a></h4><p>1.将 Build/UnrealGameSync.ini 添加到项目的根目录下，并引用将上传二进制文件的Perforce位置。 这是从Perforce获取PCB时UGS将搜索的内容。</p><p><code>Build\\UnrealGameSync.ini </code>条目示例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[//UE4/Main/Samples/Games/ShooterGame/ShooterGame.uproject]</span>
<span class="line"> ZippedBinariesPath=//UE4/Dev-Binaries/++UE4+Main-Editor.zip</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>UnrealGameSync.ini</code> 需要在 <code>[虚幻项目根目录]/Build/*</code></p></blockquote><p>2.指定 <code>ZippedBinariesPath</code> 时，有一些细节需要记住：</p><ul><li><p>名称<code>//UE4/Dev-Binaries/++UE4+Main-Editor.zip</code>需要匹配下面上传部分中提到的ArchiveStream参数，其中++UE4+Main是当前分支的名称，斜杠转义为&quot;+&quot;字符。 使用参数时应使用斜杠而不是&quot;+&quot;字符。</p></li><li><p>任何有权访问PCB流送的用户账号都可以向其上传一组新的PCB，但如何完成取决于用户，因为这取决于工作室想要如何部署。 手动用户可以执行上传操作，或者自动构建节点也可以完成。</p></li></ul><h4 id="生成和上传预编译的二进制文件" tabindex="-1"><a class="header-anchor" href="#生成和上传预编译的二进制文件"><span>生成和上传预编译的二进制文件</span></a></h4><p>在设置了两个流送并且用户有权访问之后，就可以生成PCB并将其上传到指定的PCB流送。</p><p>生成并上传PCB：</p><ul><li><p>1.从Perforce同步 主流送 内容。</p></li><li><p>2.运行基于位于 <code>[UE Root]/Engine/Build/Graph/Examples/BuildEditorAndTools.xml </code>的示例的 <strong>BuildGraph</strong> 脚本，以便生成PCB并将其上传至正确的Perforce位置（使用 <code>-ArchiveStream </code>参数指定位置）。</p></li></ul><p>使用 <code>BuildEditorAndTools</code> 的命令示例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Engine\\Build\\BatchFiles\\RunUAT.bat</span>
<span class="line">	  BuildGraph</span>
<span class="line">	  -Script=Engine/Build/Graph/Examples/BuildEditorAndTools.xml</span>
<span class="line">	  -Target=&quot;Submit To Perforce for UGS&quot;</span>
<span class="line">	  -set:EditorTarget=ProjectNameEditor</span>
<span class="line">	  -set:ArchiveStream=//UE4/Dev-Binaries</span>
<span class="line">	  -p4</span>
<span class="line">	  -submit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此示例中，ShooterGame 是一个原生项目，用户想要作为PCB上传的任何项目也需要是原生的。</p><p>3.此示例将向 <code>//UE4/Dev-Binaries/++UE4+Main-Editor.zip</code> 提交zip文件，其中++UE4+Main是当前分支的名称，斜杠转义为&quot;+&quot;字符。应该将相同的路径设置为 <code>UnrealGameSync.ini</code>中<code>ZippedBinariesPath</code> 的值。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503192351246.png" style="width:100% !important;"></div><h4 id="使用来自ugs的预编译二进制文件" tabindex="-1"><a class="header-anchor" href="#使用来自ugs的预编译二进制文件"><span>使用来自UGS的预编译二进制文件</span></a></h4><p>使用位于主流送中的文件，在预编译的二进制文件成功生成并上传到次级流送后，UGS应该能够检测和使用主流送相关的PCB。</p><p>1.启用 同步预编译二进制文件（Sync Precompiled Binaries） 选项，并同步到最新。 图中示例是一个没有任何预编译二进制文件的流送，但如果在前面步骤中正确设置了二进制文件，则该选项应该可选。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503200018567.png" style="width:100% !important;"></div><p>2.应该选择并使用PCB，而不是为选择此选项的任何人构建引擎。</p><p>以上均复制于官方文档-<a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/using-precompiled-binaries-in-unreal-game-sync-for-unreal-engine" target="_blank" rel="noopener noreferrer">UGS预编译二进制文件</a></p><p> </p><div class="hint-container tip"><p class="hint-container-title">Jeffrey Tsai：</p><p>在运行预构建之后可以看到在根路径下生成了一个LocalBuild的文件，包含了引擎和项目运行所需构建环境中构建的二进制文件，打包成zip文件通过UGS分发拉取，在没有构建环境的机器上直接拉取编译好的二进制文件而无需再次构建.</p><p>总的来说，在开发中程序一般会配好编译环境，而美术则不需要。针对不同的环境这里使用bat批处理命名进行预编译，并打包发送到Binaries分流<br> （也就是说在建立分流时需要新建好分流，这样的命令可以在程序机器上UGS中定义自定义构建步骤中调用，或者使用jekins自动化出发批量CL的检测和构建）。<br> 这样的好处是，美术可以快速拉取最新完整的引擎内容。</p></div><p> </p><h3 id="peforce-递交源码至perforce服务器" tabindex="-1"><a class="header-anchor" href="#peforce-递交源码至perforce服务器"><span>Peforce_递交源码至Perforce服务器</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503200106678.png" style="width:100% !important;"></div><p> </p><h3 id="project-项目递交至perforce服务器" tabindex="-1"><a class="header-anchor" href="#project-项目递交至perforce服务器"><span>Project_项目递交至Perforce服务器</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503200044147.png" style="width:70% !important;"></div><p>被高亮为 <code>绿色</code> 的目录和文件应该被添加到项目的 <code>Depot</code> 中。<code>Binaries</code> 目录高亮为 <code>黄色</code>，可以<code>选择是否要加入</code>到版本管理中，这取决于团队自生的工作需要。</p><ul><li>如果团队中每个人都准备自己来编译引擎和游戏的话，那么 <code>Binaries</code> 则无需加入到版本管理中，(不用UGS)</li><li>但如果团队中有人只是想获取一个版本就能直接在编辑器中工作的话，则需要把 <code>Binaries</code> 添加上去。(用UGS)</li></ul><p>请留意先前的 <code>server typemap</code> 的设置，能够让程序员们直接重新编译版本而不受在默认的 Perforce 管理配置下这些文件只读属性的限制。</p><p> </p><p>Wip...</p><h2 id="学习的文章和引用" tabindex="-1"><a class="header-anchor" href="#学习的文章和引用"><span>学习的文章和引用：</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/414193101" target="_blank" rel="noopener noreferrer">知乎-Jeffrey Tsai - UE5 源码引擎构建&amp;UGS部署与搭建</a></p><p><a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/downloading-unreal-engine-source-code?application_version=5.0" target="_blank" rel="noopener noreferrer">下载虚幻引擎源代码</a></p><p><a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/unreal-game-sync-ugs-for-unreal-engine?application_version=5.0" target="_blank" rel="noopener noreferrer">UnrealGameSync (UGS)</a></p><p><a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/building-unreal-engine-from-source" target="_blank" rel="noopener noreferrer">从源代码构建虚幻引擎</a></p>`,44))])}const f=p(b,[["render",v]]),E=JSON.parse('{"path":"/engine/Perforce/UE5srcAndUGSset.html","title":"UE5 源码引擎构建&UGS部署与搭建","lang":"zh-CN","frontmatter":{"title":"UE5 源码引擎构建&UGS部署与搭建","icon":"iconfont alicon-perforce","category":["Perforce"],"tags":["Perforce","Source code engine","Teams","UE5","UGS"],"date":"2025-03-16T00:00:00.000Z","star":5,"description":"本文是学习部署源码引擎构建并使用UGS作为Perforce同步UE项目的图形化前端的笔记...","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/Perforce/UE5srcAndUGSset.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"UE5 源码引擎构建&UGS部署与搭建"}],["meta",{"property":"og:description","content":"本文是学习部署源码引擎构建并使用UGS作为Perforce同步UE项目的图形化前端的笔记..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-19T17:16:35.000Z"}],["meta",{"property":"article:tag","content":"Perforce"}],["meta",{"property":"article:tag","content":"Source code engine"}],["meta",{"property":"article:tag","content":"Teams"}],["meta",{"property":"article:tag","content":"UE5"}],["meta",{"property":"article:tag","content":"UGS"}],["meta",{"property":"article:published_time","content":"2025-03-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-19T17:16:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UE5 源码引擎构建&UGS部署与搭建\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-16T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-19T17:16:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"一、设置Visual Studio 环境","slug":"一、设置visual-studio-环境","link":"#一、设置visual-studio-环境","children":[{"level":3,"title":"设置虚幻引擎到Visual Studio工作流前","slug":"设置虚幻引擎到visual-studio工作流前","link":"#设置虚幻引擎到visual-studio工作流前","children":[]},{"level":3,"title":"运行虚幻引擎必备条件安装程序","slug":"运行虚幻引擎必备条件安装程序","link":"#运行虚幻引擎必备条件安装程序","children":[{"level":4,"title":"新安装Visual Studio时的选项","slug":"新安装visual-studio时的选项","link":"#新安装visual-studio时的选项","children":[]},{"level":4,"title":"C++工具","slug":"c-工具","link":"#c-工具","children":[]},{"level":4,"title":"包含虚幻引擎安装程序","slug":"包含虚幻引擎安装程序","link":"#包含虚幻引擎安装程序","children":[]}]}]},{"level":2,"title":"二、下载虚幻引擎源代码","slug":"二、下载虚幻引擎源代码","link":"#二、下载虚幻引擎源代码","children":[{"level":3,"title":"分支","slug":"分支","link":"#分支","children":[{"level":4,"title":"源代码分支","slug":"源代码分支","link":"#源代码分支","children":[]},{"level":4,"title":"发布分支","slug":"发布分支","link":"#发布分支","children":[]},{"level":4,"title":"主分支","slug":"主分支","link":"#主分支","children":[]}]},{"level":3,"title":"下载源码","slug":"下载源码","link":"#下载源码","children":[]}]},{"level":2,"title":"三、Perforce","slug":"三、perforce","link":"#三、perforce","children":[{"level":3,"title":"在P4Admin新建SteamsDepot UE5","slug":"在p4admin新建steamsdepot-ue5","link":"#在p4admin新建steamsdepot-ue5","children":[]},{"level":3,"title":"在P4V 上创建 Steams","slug":"在p4v-上创建-steams","link":"#在p4v-上创建-steams","children":[]},{"level":3,"title":"Perforce设置WorkSpace","slug":"perforce设置workspace","link":"#perforce设置workspace","children":[]},{"level":3,"title":"Typemap 和 .ignore","slug":"typemap-和-ignore","link":"#typemap-和-ignore","children":[{"level":4,"title":"1.新建 .ignore文件并上传至仓库","slug":"_1-新建-ignore文件并上传至仓库","link":"#_1-新建-ignore文件并上传至仓库","children":[]},{"level":4,"title":"2.在Depot右击打开CMD","slug":"_2-在depot右击打开cmd","link":"#_2-在depot右击打开cmd","children":[]},{"level":4,"title":"3.运行P4ignore.bat","slug":"_3-运行p4ignore-bat","link":"#_3-运行p4ignore-bat","children":[]},{"level":4,"title":"4.输入p4 ignores","slug":"_4-输入p4-ignores","link":"#_4-输入p4-ignores","children":[]}]}]},{"level":2,"title":"四、编译源码","slug":"四、编译源码","link":"#四、编译源码","children":[{"level":3,"title":"Setup.bat优化加速设置","slug":"setup-bat优化加速设置","link":"#setup-bat优化加速设置","children":[]},{"level":3,"title":"UnrealEnigine修改引擎Dir","slug":"unrealenigine修改引擎dir","link":"#unrealenigine修改引擎dir","children":[{"level":4,"title":"UE4_更改虚幻引擎的缓存路径","slug":"ue4-更改虚幻引擎的缓存路径","link":"#ue4-更改虚幻引擎的缓存路径","children":[]},{"level":4,"title":"UE5_更改虚幻引擎的缓存路径","slug":"ue5-更改虚幻引擎的缓存路径","link":"#ue5-更改虚幻引擎的缓存路径","children":[]}]},{"level":3,"title":"UGS预编译二进制文件","slug":"ugs预编译二进制文件","link":"#ugs预编译二进制文件","children":[{"level":4,"title":"设置流送","slug":"设置流送","link":"#设置流送","children":[]},{"level":4,"title":"生成和上传预编译的二进制文件","slug":"生成和上传预编译的二进制文件","link":"#生成和上传预编译的二进制文件","children":[]},{"level":4,"title":"使用来自UGS的预编译二进制文件","slug":"使用来自ugs的预编译二进制文件","link":"#使用来自ugs的预编译二进制文件","children":[]}]},{"level":3,"title":"Peforce_递交源码至Perforce服务器","slug":"peforce-递交源码至perforce服务器","link":"#peforce-递交源码至perforce服务器","children":[]},{"level":3,"title":"Project_项目递交至Perforce服务器","slug":"project-项目递交至perforce服务器","link":"#project-项目递交至perforce服务器","children":[]}]},{"level":2,"title":"学习的文章和引用：","slug":"学习的文章和引用","link":"#学习的文章和引用","children":[]}],"git":{"createdTime":1742317617000,"updatedTime":1742404595000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":2}]},"filePathRelative":"engine/Perforce/UE5srcAndUGSset.md","localizedDate":"2025年3月16日","excerpt":"<p>本文是学习部署源码引擎构建并使用UGS作为Perforce同步UE项目的图形化前端的笔记...</p>\\n","autoDesc":true}');export{f as comp,E as data};
