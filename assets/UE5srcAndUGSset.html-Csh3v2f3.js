import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,b as n,d as u,f as p,a as i,w as a,r as d,o as b,e}from"./app-1Phn4f-W.js";const v={};function g(h,s){const r=d("Badge"),c=d("CodeTabs");return b(),m("div",null,[s[4]||(s[4]=n("p",null,"本文是学习部署源码引擎构建并使用UGS作为Perforce同步UE项目的图形化前端的笔记...",-1)),u(" more "),s[5]||(s[5]=p('<h2 id="一、设置visual-studio-环境" tabindex="-1"><a class="header-anchor" href="#一、设置visual-studio-环境"><span>一、设置Visual Studio 环境</span></a></h2><h3 id="设置虚幻引擎到visual-studio工作流前" tabindex="-1"><a class="header-anchor" href="#设置虚幻引擎到visual-studio工作流前"><span>设置虚幻引擎到Visual Studio工作流前</span></a></h3><p>下列表格列出了已集成二进制版虚幻引擎的Visual Studio版本。</p><table><thead><tr><th>虚幻引擎版本</th><th>Visual Studio版本</th></tr></thead><tbody><tr><td>4.25或更高版本</td><td>VS 2019 (Default)</td></tr><tr><td>4.22或更高版本</td><td>VS 2017 / VS 2019</td></tr><tr><td>4.15或更高版本</td><td>VS 2017</td></tr><tr><td>4.10 - 4.14</td><td>VS 2015</td></tr><tr><td>4.2 - 4.9</td><td>VS 2013</td></tr></tbody></table><p><a href="https://visualstudio.microsoft.com/zh-hans/downloads/" target="_blank" rel="noopener noreferrer">Visual Studio下载地址</a></p><blockquote><p>推荐vs2022</p></blockquote><h3 id="运行虚幻引擎必备条件安装程序" tabindex="-1"><a class="header-anchor" href="#运行虚幻引擎必备条件安装程序"><span>运行虚幻引擎必备条件安装程序</span></a></h3><p>在Epic启动器安装或从GitHub复制虚幻引擎时，将自动运行虚幻引擎必备条件安装程序。若通过Perforce进行安装或同步虚幻引擎，则需要手动运行必备条件安装程序。 运行本地编译的虚幻引擎工具前必须进行此操作。<br> 安装程序位于<code>[虚幻引擎根目录]\\Engine\\Extras\\Redist\\en-us\\</code>。</p><h4 id="新安装visual-studio时的选项" tabindex="-1"><a class="header-anchor" href="#新安装visual-studio时的选项"><span>新安装Visual Studio时的选项</span></a></h4><p>如果你是初次安装Visual Studio，请确保启用下列选项。</p><h4 id="c-工具" tabindex="-1"><a class="header-anchor" href="#c-工具"><span>C++工具</span></a></h4><p>要在安装Visual Studio时添加C++工具，请确保在 工作量（Workloads） 下选择 用C++开发游戏（Game development with C++），并使用以下选项：</p><ul><li>C++ profiling tools</li><li>C++ AddressSanitizer (optional)</li><li>Windows 10 SDK (10.0.18362 or Newer)</li></ul><h4 id="包含虚幻引擎安装程序" tabindex="-1"><a class="header-anchor" href="#包含虚幻引擎安装程序"><span>包含虚幻引擎安装程序</span></a></h4><p>要在安装Visual Studio时包含虚幻引擎的安装程序，在右侧的 摘要（Summary） 工具栏中展开 用C++开发游戏（Game development with C++）。<br> 在可选（Optional） 下，确保勾选 虚幻引擎安装程序（Unreal Engine installer） 以便启用它。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161509547.png" style="width:50%!important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161509242.png" style="width:50%!important;"></div><blockquote><p>如果你PC是win11，并且使用VS2022可能会如同我这般基本勾选上了，只缺一个<code>win10 SDK(10.0.19041)</code>,<br> 一起安装可同时兼容 Win10 和 Win11 系统，以应对不同的开发情况。</p></blockquote><p>更多的推荐设置麻烦跳转官网查看 <a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine?application_version=5.0" target="_blank" rel="noopener noreferrer">设置Visual Studio以使用虚幻引擎的提示、技巧和技术</a></p><h2 id="二、下载虚幻引擎源代码" tabindex="-1"><a class="header-anchor" href="#二、下载虚幻引擎源代码"><span>二、下载虚幻引擎源代码</span></a></h2><p>如要访问https://github.com/EpicGames/UnrealEngine上的仓库，你必须满足以下条件：</p><ul><li>已经是虚幻引擎的订阅用户。</li><li>已经拥有GitHub账号。</li><li>已经根据<a href="https://www.unrealengine.com/zh-CN/ue-on-github" target="_blank" rel="noopener noreferrer">在GitHub上访问虚幻引擎源代码</a>文中的所述步骤，将GitHub账号与你的虚幻引擎账号关联。</li></ul><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支"><span>分支</span></a></h3><h4 id="源代码分支" tabindex="-1"><a class="header-anchor" href="#源代码分支"><span>源代码分支</span></a></h4><p>UE5源代码发布在若干个分支中。 名称中包含dev、staging和test的分支通常给Epic内部流程使用，对于终端用户几乎没有用处。当官方对新版本进行稳定性更新或者发布补丁时，其它临时的分支也会时不时地出现。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161716696.png" style="width:100% !important;"></div><h4 id="发布分支" tabindex="-1"><a class="header-anchor" href="#发布分支"><span>发布分支</span></a></h4><p>发布（Release） 分支会一直和当前的官方版本保持一致。它们经过我们官方QA团队全面的测试，所以对于学习虚幻引擎和制作自己的项目来说是一个很好的起始点。官方花费大量精力来确保每次发布的版本都稳定可靠，并且计划每隔几个月发布新的版本。</p><h4 id="主分支" tabindex="-1"><a class="header-anchor" href="#主分支"><span>主分支</span></a></h4><p>大部分活跃的UE5开发工作在 <a href="https://github.com/EpicGames/UnrealEngine/tree/ue5-main" target="_blank" rel="noopener noreferrer">ue5-main</a> 分支中进行。该分支是引擎最新的发布版本，可能存在一些bug，或者甚至无法正常编译。开发者可用用它来测试新功能或者与我们一起进行锁步开发。</p><blockquote><p>如果你要使用该分支，请注意它会比当前官方版本和下一个要发布的版本都要提前。所以你在ue5-main分支中创建的内容和代码可能与当前官方发布的版本并不兼容，需要等到我们之后从ue5-main中创建新分支用于官方发布之后。</p></blockquote><p>运行 Perforce 服务器又两种方式，P4D 和 P4S。P4D 运行时是一个命令行命令，因此它通常被用来做维护工作时使用。P4S 是一个和 P4D 相同功能的服务，这能让服务器程序在后台运行。 当安装 Perforce 服务器工具后，P4S 通常都会被安装并在后台启动。</p><blockquote><p>有时候服务并没有自动启动。要先Windows系统中启动服务，首先找到 Control Panel -&gt; Administrative Tools -&gt;Services applet。 然后在列表中找到 Perforce Service 并启动它：</p></blockquote><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161447639.png" style="width:100% !important;"></div><h3 id="fork仓库并克隆" tabindex="-1"><a class="header-anchor" href="#fork仓库并克隆"><span>Fork仓库并克隆</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161721440.png" style="width:100% !important;"></div><p>通过Github直接克隆好我们Fork的仓库，到指定目录，这个我们先配置好Workspass，再进行克隆。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161649149.png" style="width:100% !important;"></div><p>如果你不想用Git，你可以通过右侧的 &#39;下载ZIP&#39;（Download ZIP）按钮获取源代码，国内也有同学可能会因为网络原因克隆失败，则需要科学上网。</p><h2 id="三、perforce" tabindex="-1"><a class="header-anchor" href="#三、perforce"><span>三、Perforce</span></a></h2><p>Perforce的安装我们查看 <a href="https://www.zhihu.com/tardis/zm/art/606970716?source_id=1005" target="_blank" rel="noopener noreferrer">从零开始在NAS上配置Perforce并启用虚幻引擎源码管理</a>,<br> 当然没有服务器，我们也可以在windows中安装Docker部署Perforce。</p><p>我们开始打开P4Admin和P4V连接服务器 创建流仓库和流</p><h3 id="在p4admin新建steamsdepot-ue5" tabindex="-1"><a class="header-anchor" href="#在p4admin新建steamsdepot-ue5"><span>在P4Admin新建SteamsDepot <code>UE5</code></span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161755856.png"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161756236.png" style="width:20% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161756378.png"></div><p> </p><h3 id="在p4v-上创建-steams" tabindex="-1"><a class="header-anchor" href="#在p4v-上创建-steams"><span>在P4V 上创建 Steams</span></a></h3><table><thead><tr><th></th><th></th><th>仓库</th><th>适用范围</th></tr></thead><tbody><tr><td>Dev</td><td>//UE5/Dev</td><td>UE</td><td>用于存放Dev引擎主路径</td></tr><tr><td>Dev-Binaries</td><td>//UE5/Dev-Binaries</td><td>UE</td><td>用于存放预构建缓存二进制文件</td></tr><tr><td>UnrealGameSync</td><td>//UE5/UnrealGameSync</td><td>UE</td><td>用于存放UnrealGameSync</td></tr></tbody></table><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170004468.png" style="width:75% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005073.png" style="width:33.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005529.png" style="width:33.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005614.png" style="width:33.3% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005958.png" style="width:35% !important;"></div><p>创建好流后,会提示仓库为空,需要上传一个文件到流仓库目录下,可新建一个txt 文件,直接拖拽进去即可.</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005017.png" style="width:33.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170006596.png" style="width:33.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170023060.png" style="width:33.3% !important;"></div><p> </p><h3 id="perforce设置workspace" tabindex="-1"><a class="header-anchor" href="#perforce设置workspace"><span>Perforce设置WorkSpace</span></a></h3><p>传一个文件到流仓库目录下时会临时自动创建一个随机名称的Workspace,那么我们需要新建的Workspace根据项目需求并规范化命名。</p><ul><li>开发Dev仓库Workspace</li><li>Binaries用于存放预编译二进制文件</li><li>UnrealGameSync仓库Workspace</li></ul><p> </p><h3 id="p4v设置-typemap" tabindex="-1"><a class="header-anchor" href="#p4v设置-typemap"><span>P4V设置 Typemap</span></a></h3><p>让Perforce服务器可编译储存项目所需的各类格式的文件, 在Perforce的仓库中右击打开CMD编辑器并输入以下代码 <code>p4 typemap</code></p><p>在打开的Typemap文件中替换以下代码</p>',59)),n("details",null,[n("summary",null,[i(r,{text:"Code-view",color:"#e0dd8b"})]),i(c,{id:"323",data:[{id:"typemap"}],"tab-id":"shell"},{title0:a(({value:l,isActive:t})=>s[0]||(s[0]=[e("typemap")])),tab0:a(({value:l,isActive:t})=>s[1]||(s[1]=[n("div",{class:"language-typemap line-numbers-mode","data-highlighter":"prismjs","data-ext":"typemap"},[n("pre",null,[n("code",null,[n("span",{class:"line"},"# The form data below was edited by admin"),e(`
`),n("span",{class:"line"},"# Perforce File Type Mapping Specifications."),e(`
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
`),n("span",{class:"line"},"	binary+S2w //....exe"),e(`
`),n("span",{class:"line"},"	binary+S2w //....dll"),e(`
`),n("span",{class:"line"},"	binary+S2w //....lib"),e(`
`),n("span",{class:"line"},"	binary+S2w //....app"),e(`
`),n("span",{class:"line"},"	binary+S2w //....dylib"),e(`
`),n("span",{class:"line"},"	binary+S2w //....stub"),e(`
`),n("span",{class:"line"},"	binary+S2w //....ipa"),e(`
`),n("span",{class:"line"},"	binary //....bmp"),e(`
`),n("span",{class:"line"},"	text //....ini"),e(`
`),n("span",{class:"line"},"	text //....config"),e(`
`),n("span",{class:"line"},"	text //....cpp"),e(`
`),n("span",{class:"line"},"	text //....h"),e(`
`),n("span",{class:"line"},"	text //....c"),e(`
`),n("span",{class:"line"},"	text //....cs"),e(`
`),n("span",{class:"line"},"	text //....m"),e(`
`),n("span",{class:"line"},"	text //....mm"),e(`
`),n("span",{class:"line"},"	text //....py"),e(`
`),n("span",{class:"line"},"	binary+l //....uasset"),e(`
`),n("span",{class:"line"},"	binary+l //....umap"),e(`
`),n("span",{class:"line"},"	binary+l //....upk"),e(`
`),n("span",{class:"line"},"	binary+l //....udk"),e(`
`),n("span",{class:"line"},"	binary+w //....exe"),e(`
`),n("span",{class:"line"},"	binary+w //....dll"),e(`
`),n("span",{class:"line"},"	binary+w //....lib"),e(`
`),n("span",{class:"line"},"	binary+w //....app"),e(`
`),n("span",{class:"line"},"	binary+w //....dylib"),e(`
`),n("span",{class:"line"},"	binary+w //....stub"),e(`
`),n("span",{class:"line"},"	binary+w //....ipa"),e(`
`),n("span",{class:"line"},"	binary //....bmp"),e(`
`),n("span",{class:"line"},"	text //....ini"),e(`
`),n("span",{class:"line"},"	text+w //....config"),e(`
`),n("span",{class:"line"},"	text //....cpp"),e(`
`),n("span",{class:"line"},"	text //....h"),e(`
`),n("span",{class:"line"},"	text //....c"),e(`
`),n("span",{class:"line"},"	text //....cs"),e(`
`),n("span",{class:"line"},"	text //....m"),e(`
`),n("span",{class:"line"},"	text //....mm"),e(`
`),n("span",{class:"line"},"	text //....py"),e(`
`),n("span",{class:"line"},"	binary+l //....uasset"),e(`
`),n("span",{class:"line"},"	binary+l //....umap"),e(`
`),n("span",{class:"line"},"	binary+l //....upk"),e(`
`),n("span",{class:"line"},"	binary+l //....udk"),e(`
`),n("span",{class:"line"},"	binary+l //....ubulk"),e(`
`),n("span",{class:"line"},"	text //....ignore"),e(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})]),s[6]||(s[6]=n("p",null," ",-1)),s[7]||(s[7]=n("h3",{id:"p4v-设置-ignore",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#p4v-设置-ignore"},[n("span",null,"P4V_设置.ignore")])],-1)),s[8]||(s[8]=n("p",null,"过滤忽略无需同步的文件。",-1)),s[9]||(s[9]=n("h4",{id:"_1-新建-ignore文件并上传至仓库",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-新建-ignore文件并上传至仓库"},[n("span",null,"1.新建 .ignore文件并上传至仓库")])],-1)),n("details",null,[n("summary",null,[i(r,{text:"Code-view",color:"#e0dd8b"})]),i(c,{id:"342",data:[{id:".ignore"}],"tab-id":"shell"},{title0:a(({value:l,isActive:t})=>s[2]||(s[2]=[e(".ignore")])),tab0:a(({value:l,isActive:t})=>s[3]||(s[3]=[n("div",{class:"language-.ignore line-numbers-mode","data-highlighter":"prismjs","data-ext":".ignore"},[n("pre",null,[n("code",null,[n("span",{class:"line"},"# directories"),e(`
`),n("span",{class:"line"},"*/.git/*"),e(`
`),n("span",{class:"line"},"*/.vs/*"),e(`
`),n("span",{class:"line"},"*/obj/Development/*"),e(`
`),n("span",{class:"line"},"*/obj/Debug/*"),e(`
`),n("span",{class:"line"},"*/obj/x64/*"),e(`
`),n("span",{class:"line"},"*/Intermediate/*"),e(`
`),n("span",{class:"line"},"*/Saved/*"),e(`
`),n("span",{class:"line"},"*/DerivedDataCache/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"# files"),e(`
`),n("span",{class:"line"},"*.pdb"),e(`
`),n("span",{class:"line"},"*.obj"),e(`
`),n("span",{class:"line"},"*.response"),e(`
`),n("span",{class:"line"},"*.prev"),e(`
`),n("span",{class:"line"},"**DebugGame*"),e(`
`),n("span",{class:"line"},"*.pch"),e(`
`),n("span",{class:"line"},"*.tmp"),e(`
`),n("span",{class:"line"},"*.dSYM"),e(`
`),n("span",{class:"line"},"*.VC.db"),e(`
`),n("span",{class:"line"},"*.opensdf"),e(`
`),n("span",{class:"line"},"*.opendb"),e(`
`),n("span",{class:"line"},"*.sdf"),e(`
`),n("span",{class:"line"},"*.suo"),e(`
`),n("span",{class:"line"},"*.log"),e(`
`),n("span",{class:"line"},"*.DS_Store"),e(`
`),n("span",{class:"line"},"*.ipch"),e(`
`),n("span",{class:"line"},"*.vscode/*"),e(`
`),n("span",{class:"line"},"*.idea/*"),e(`
`),n("span",{class:"line"},"*.sln"),e(`
`),n("span",{class:"line"},"*.p4config"),e(`
`),n("span",{class:"line"},"*.code-workspace"),e(`
`),n("span",{class:"line"},"*.ue4dependencies"),e(`
`),n("span",{class:"line"},"*/Log.txt"),e(`
`),n("span",{class:"line"},"*.akd"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"**/Engine/DerivedDataCache/*"),e(`
`),n("span",{class:"line"},"**/Engine/Binaries/Win64/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"**/Engine/Binaries/Mac/**Mac-Debug*"),e(`
`),n("span",{class:"line"},"**/Engine/Plugins/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"**/Engine/Plugins/**Mac-Debug*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"**/Projects/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"**/Projects/**Mac-Debug*"),e(`
`),n("span",{class:"line"},"**/Projects/**/.vs/*"),e(`
`),n("span",{class:"line"},"**/Projects/**/Binaries/*"),e(`
`),n("span",{class:"line"},"**/Projects/**/DerivedDataCache/*"),e(`
`),n("span",{class:"line"},"**/Projects/**/Intermediate/*"),e(`
`),n("span",{class:"line"},"**/Projects/**/Saved/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"!**/Engine/Binaries/DotNET/*"),e(`
`),n("span",{class:"line"},"!**/Engine/Intermediate/**.precompiled"),e(`
`),n("span",{class:"line"},"!**/Engine/Intermediate/**.lib"),e(`
`),n("span",{class:"line"},"!**/Engine/Intermediate/**.o"),e(`
`),n("span",{class:"line"},"!**/Engine/Intermediate/**.obj"),e(`
`),n("span",{class:"line"},"!**/Engine/Source/**.sln"),e(`
`),n("span",{class:"line"},"!**/Engine/Source/**.vscode/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"!**/Projects/**/Content/**.obj"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"!Dev-Binaries/**.zip"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"/Engine/DerivedDataCache/*"),e(`
`),n("span",{class:"line"},"/Engine/Binaries/Win64/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"/Engine/Binaries/Mac/**Mac-Debug*"),e(`
`),n("span",{class:"line"},"/Engine/Plugins/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"/Engine/Plugins/**Mac-Debug*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"/Projects/**Win64-Debug*"),e(`
`),n("span",{class:"line"},"/Projects/**Mac-Debug*"),e(`
`),n("span",{class:"line"},"/Projects/**/.vs/*"),e(`
`),n("span",{class:"line"},"/Projects/**/Binaries/*"),e(`
`),n("span",{class:"line"},"/Projects/**/DerivedDataCache/*"),e(`
`),n("span",{class:"line"},"/Projects/**/Intermediate/*"),e(`
`),n("span",{class:"line"},"/Projects/**/Saved/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"!/Engine/Binaries/DotNET/*"),e(`
`),n("span",{class:"line"},"!/Engine/Intermediate/**.precompiled"),e(`
`),n("span",{class:"line"},"!/Engine/Intermediate/**.lib"),e(`
`),n("span",{class:"line"},"!/Engine/Intermediate/**.o"),e(`
`),n("span",{class:"line"},"!/Engine/Intermediate/**.obj"),e(`
`),n("span",{class:"line"},"!/Engine/Source/**.sln"),e(`
`),n("span",{class:"line"},"!/Engine/Source/**.vscode/*"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"!/Projects/**/Content/**.obj"),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"}),e(`
`),n("span",{class:"line"},"!/Dev-Binaries/**.zip"),e(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})]),s[10]||(s[10]=p(`<h4 id="_2-在depot右击打开cmd" tabindex="-1"><a class="header-anchor" href="#_2-在depot右击打开cmd"><span>2.在Depot右击打开CMD</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170042749.png" style="width:50% !important;"></div><h4 id="_3-运行p4ignore-bat" tabindex="-1"><a class="header-anchor" href="#_3-运行p4ignore-bat"><span>3.运行P4ignore.bat</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@echo off</span>
<span class="line">set workdir=%~dp0</span>
<span class="line">set result=%workdir%p4ignore.txt</span>
<span class="line">echo %result%</span>
<span class="line">p4 set P4IGNORE=&quot;%result%&quot;</span>
<span class="line">pause</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-输入p4-ignores" tabindex="-1"><a class="header-anchor" href="#_4-输入p4-ignores"><span>4.输入p4 ignores</span></a></h4><p><code>p4 ignores</code></p><p>检查p4 ignore是否生效,如生成相应过滤路径，则p4ignore已生效</p><h2 id="四、ue5-编译源码" tabindex="-1"><a class="header-anchor" href="#四、ue5-编译源码"><span>四、UE5_编译源码</span></a></h2><h3 id="ue5-setup-bat优化加速设置" tabindex="-1"><a class="header-anchor" href="#ue5-setup-bat优化加速设置"><span>UE5_Setup.bat优化加速设置</span></a></h3><p>设置Setup.bat文件中下载线程与过滤以及指认缓存位置</p><p><code>--threads=20 --cache=%~dp0UE5_Source_Cahce</code></p><p>总览Setup.bat</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@echo off</span>
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
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双击Setup.bat 检查缓存文件，这里可以生成已被过滤的路径，则P4Ignore生效</p><p>UnrealEnigine5_修改引擎Dir 在UE4Games.uprojectdirs文件最后一行添加项目路径，像这样</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">; These folders will be searched 1 level deep in order to find projects</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UnrealEngine5_更改虚幻引擎的缓存路径 可参考这个链接 https://www.bilibili.com/video/BV1sK4y1Z7Bv/?spm_id_from=autoNext</p><p>将 Engine\\Config\\BaseEnigne.ini 引擎版本不可知的用户目录/派生数据缓存 %ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache 替换为 游戏路径/派生数据缓存 %GAMEDIR%DerivedDataCache</p><p>Project_为UnrealGameSync设置预构建二进制缓存文件 //UE5/Dev/UE4Games.uprojectdirs 这里要把EditorTarget设置为项目路径下Source文件中的.Target.cs文件的EditorTarget名称，不要后缀</p><p>Engine\\Build\\BatchFiles\\RunUAT.bat BuildGraph -Script=Engine/Build/Graph/Examples/BuildEditorAndTools.xml -Target=&quot;Submit To Perforce for UGS&quot; -set:EditorTarget=ZeroEditor -set:ArchiveStream=//UE/Dev-Binaries -p4 -submit</p><p>这里是UnrealGameSync参考</p><p>要使用户能下载预编译编辑器编译，而无需在本地编译，可向Perforce提交包含所需二进制文件的zip文件，并让UnrealGameSync同步和抽取此类文件。为此，使用与本地编译相同的用户界面，但无相匹配二进制文件的修改将变灰。配置后，用户可选择 选项 菜单下的 同步预编译二进制（Sync Precompiled Binaries） 项目使用预编译二进制文件。</p><p>Peforce_递交源码至Perforce服务器</p><p>Wip...</p><h2 id="学习的文章和引用" tabindex="-1"><a class="header-anchor" href="#学习的文章和引用"><span>学习的文章和引用：</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/414193101" target="_blank" rel="noopener noreferrer">知乎-Jeffrey Tsai - UE5 源码引擎构建&amp;UGS部署与搭建</a></p><p><a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/downloading-unreal-engine-source-code?application_version=5.0" target="_blank" rel="noopener noreferrer">下载虚幻引擎源代码</a></p><p><a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/unreal-game-sync-ugs-for-unreal-engine?application_version=5.0" target="_blank" rel="noopener noreferrer">UnrealGameSync (UGS)</a></p>`,28))])}const E=o(v,[["render",g]]),S=JSON.parse('{"path":"/engine/Perforce/UE5srcAndUGSset.html","title":"UE5 源码引擎构建&UGS部署与搭建","lang":"zh-CN","frontmatter":{"title":"UE5 源码引擎构建&UGS部署与搭建","icon":"iconfont alicon-perforce","category":["Perforce"],"tags":["Perforce","Source code engine","Teams","UE5","UGS"],"date":"2025-03-16T00:00:00.000Z","star":5,"description":"本文是学习部署源码引擎构建并使用UGS作为Perforce同步UE项目的图形化前端的笔记...","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/Perforce/UE5srcAndUGSset.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"UE5 源码引擎构建&UGS部署与搭建"}],["meta",{"property":"og:description","content":"本文是学习部署源码引擎构建并使用UGS作为Perforce同步UE项目的图形化前端的笔记..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-18T17:06:57.000Z"}],["meta",{"property":"article:tag","content":"Perforce"}],["meta",{"property":"article:tag","content":"Source code engine"}],["meta",{"property":"article:tag","content":"Teams"}],["meta",{"property":"article:tag","content":"UE5"}],["meta",{"property":"article:tag","content":"UGS"}],["meta",{"property":"article:published_time","content":"2025-03-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-18T17:06:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UE5 源码引擎构建&UGS部署与搭建\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-16T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-18T17:06:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"一、设置Visual Studio 环境","slug":"一、设置visual-studio-环境","link":"#一、设置visual-studio-环境","children":[{"level":3,"title":"设置虚幻引擎到Visual Studio工作流前","slug":"设置虚幻引擎到visual-studio工作流前","link":"#设置虚幻引擎到visual-studio工作流前","children":[]},{"level":3,"title":"运行虚幻引擎必备条件安装程序","slug":"运行虚幻引擎必备条件安装程序","link":"#运行虚幻引擎必备条件安装程序","children":[{"level":4,"title":"新安装Visual Studio时的选项","slug":"新安装visual-studio时的选项","link":"#新安装visual-studio时的选项","children":[]},{"level":4,"title":"C++工具","slug":"c-工具","link":"#c-工具","children":[]},{"level":4,"title":"包含虚幻引擎安装程序","slug":"包含虚幻引擎安装程序","link":"#包含虚幻引擎安装程序","children":[]}]}]},{"level":2,"title":"二、下载虚幻引擎源代码","slug":"二、下载虚幻引擎源代码","link":"#二、下载虚幻引擎源代码","children":[{"level":3,"title":"分支","slug":"分支","link":"#分支","children":[{"level":4,"title":"源代码分支","slug":"源代码分支","link":"#源代码分支","children":[]},{"level":4,"title":"发布分支","slug":"发布分支","link":"#发布分支","children":[]},{"level":4,"title":"主分支","slug":"主分支","link":"#主分支","children":[]}]},{"level":3,"title":"Fork仓库并克隆","slug":"fork仓库并克隆","link":"#fork仓库并克隆","children":[]}]},{"level":2,"title":"三、Perforce","slug":"三、perforce","link":"#三、perforce","children":[{"level":3,"title":"在P4Admin新建SteamsDepot UE5","slug":"在p4admin新建steamsdepot-ue5","link":"#在p4admin新建steamsdepot-ue5","children":[]},{"level":3,"title":"在P4V 上创建 Steams","slug":"在p4v-上创建-steams","link":"#在p4v-上创建-steams","children":[]},{"level":3,"title":"Perforce设置WorkSpace","slug":"perforce设置workspace","link":"#perforce设置workspace","children":[]},{"level":3,"title":"P4V设置 Typemap","slug":"p4v设置-typemap","link":"#p4v设置-typemap","children":[]},{"level":3,"title":"P4V_设置.ignore","slug":"p4v-设置-ignore","link":"#p4v-设置-ignore","children":[{"level":4,"title":"1.新建 .ignore文件并上传至仓库","slug":"_1-新建-ignore文件并上传至仓库","link":"#_1-新建-ignore文件并上传至仓库","children":[]},{"level":4,"title":"2.在Depot右击打开CMD","slug":"_2-在depot右击打开cmd","link":"#_2-在depot右击打开cmd","children":[]},{"level":4,"title":"3.运行P4ignore.bat","slug":"_3-运行p4ignore-bat","link":"#_3-运行p4ignore-bat","children":[]},{"level":4,"title":"4.输入p4 ignores","slug":"_4-输入p4-ignores","link":"#_4-输入p4-ignores","children":[]}]}]},{"level":2,"title":"四、UE5_编译源码","slug":"四、ue5-编译源码","link":"#四、ue5-编译源码","children":[{"level":3,"title":"UE5_Setup.bat优化加速设置","slug":"ue5-setup-bat优化加速设置","link":"#ue5-setup-bat优化加速设置","children":[]}]},{"level":2,"title":"学习的文章和引用：","slug":"学习的文章和引用","link":"#学习的文章和引用","children":[]}],"git":{"createdTime":1742317617000,"updatedTime":1742317617000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":1}]},"filePathRelative":"engine/Perforce/UE5srcAndUGSset.md","localizedDate":"2025年3月16日","excerpt":"<p>本文是学习部署源码引擎构建并使用UGS作为Perforce同步UE项目的图形化前端的笔记...</p>\\n","autoDesc":true}');export{E as comp,S as data};
