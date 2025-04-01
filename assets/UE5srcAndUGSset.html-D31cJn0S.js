import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as m,b as e,d as u,f as t,a as r,w as i,e as n,r as d,o as v}from"./app-CGUs6M_8.js";const b={};function h(g,s){const c=d("CodeTabs"),p=d("RouteLink");return v(),m("div",null,[s[16]||(s[16]=e("p",null,"本文是学习部署源码引擎构建并使用UGS作为Perforce同步UE项目的图形化前端的笔记(持续记录更新中)...",-1)),u(" more "),s[17]||(s[17]=t(`<p> </p><h2 id="一、设置visual-studio-环境" tabindex="-1"><a class="header-anchor" href="#一、设置visual-studio-环境"><span>一、设置Visual Studio 环境</span></a></h2><h3 id="设置虚幻引擎到visual-studio工作流前" tabindex="-1"><a class="header-anchor" href="#设置虚幻引擎到visual-studio工作流前"><span>设置虚幻引擎到Visual Studio工作流前</span></a></h3><p>下列表格列出了已集成二进制版虚幻引擎的Visual Studio版本。</p><table><thead><tr><th>虚幻引擎版本</th><th>Visual Studio版本</th></tr></thead><tbody><tr><td>4.25或更高版本</td><td>VS 2019 (Default)</td></tr><tr><td>4.22或更高版本</td><td>VS 2017 / VS 2019</td></tr><tr><td>4.15或更高版本</td><td>VS 2017</td></tr><tr><td>4.10 - 4.14</td><td>VS 2015</td></tr><tr><td>4.2 - 4.9</td><td>VS 2013</td></tr></tbody></table><p><a href="https://visualstudio.microsoft.com/zh-hans/downloads/" target="_blank" rel="noopener noreferrer">Visual Studio下载地址</a></p><blockquote><p>推荐vs2022</p></blockquote><h3 id="运行虚幻引擎必备条件安装程序" tabindex="-1"><a class="header-anchor" href="#运行虚幻引擎必备条件安装程序"><span>运行虚幻引擎必备条件安装程序</span></a></h3><p>在Epic启动器安装或从GitHub复制虚幻引擎时，将自动运行虚幻引擎必备条件安装程序。若通过Perforce进行安装或同步虚幻引擎，则需要手动运行必备条件安装程序。 运行本地编译的虚幻引擎工具前必须进行此操作。<br> 安装程序位于<code>[虚幻引擎根目录]\\Engine\\Extras\\Redist\\en-us\\</code>。</p><h4 id="新安装visual-studio时的选项" tabindex="-1"><a class="header-anchor" href="#新安装visual-studio时的选项"><span>新安装Visual Studio时的选项</span></a></h4><p>如果你是初次安装Visual Studio，请确保启用下列选项。</p><h4 id="c-工具" tabindex="-1"><a class="header-anchor" href="#c-工具"><span>C++工具</span></a></h4><p>要在安装Visual Studio时添加C++工具，请确保在 工作量（Workloads） 下选择 用C++开发游戏（Game development with C++），并使用以下选项：</p><ul><li>C++ profiling tools</li><li>C++ AddressSanitizer (optional)</li><li>Windows 10 SDK (10.0.18362 or Newer)</li></ul><h4 id="包含虚幻引擎安装程序" tabindex="-1"><a class="header-anchor" href="#包含虚幻引擎安装程序"><span>包含虚幻引擎安装程序</span></a></h4><p>要在安装Visual Studio时包含虚幻引擎的安装程序，在右侧的 摘要（Summary） 工具栏中展开 用C++开发游戏（Game development with C++）。<br> 在可选（Optional） 下，确保勾选 虚幻引擎安装程序（Unreal Engine installer） 以便启用它。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161509547.png" style="width:50%!important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161509242.png" style="width:50%!important;"></div><blockquote><p>如果你PC是win11，并且使用VS2022可能会如同我这般基本勾选上了，只缺一个<code>win10 SDK(10.0.19041)</code>,<br> 一起安装可同时兼容 Win10 和 Win11 系统，以应对不同的开发情况。</p></blockquote><p>更多的推荐设置麻烦跳转官网查看 <a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/setting-up-visual-studio-development-environment-for-cplusplus-projects-in-unreal-engine?application_version=5.0" target="_blank" rel="noopener noreferrer">设置Visual Studio以使用虚幻引擎的提示、技巧和技术</a></p><p> </p><h2 id="二、下载虚幻引擎源代码" tabindex="-1"><a class="header-anchor" href="#二、下载虚幻引擎源代码"><span>二、下载虚幻引擎源代码</span></a></h2><p>如要访问https://github.com/EpicGames/UnrealEngine上的仓库，你必须满足以下条件：</p><ul><li>已经是虚幻引擎的订阅用户。</li><li>已经拥有GitHub账号。</li><li>已经根据<a href="https://www.unrealengine.com/zh-CN/ue-on-github" target="_blank" rel="noopener noreferrer">在GitHub上访问虚幻引擎源代码</a>文中的所述步骤，将GitHub账号与你的虚幻引擎账号关联。</li></ul><p> </p><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支"><span>分支</span></a></h3><h4 id="源代码分支" tabindex="-1"><a class="header-anchor" href="#源代码分支"><span>源代码分支</span></a></h4><p>UE5源代码发布在若干个分支中。 名称中包含dev、staging和test的分支通常给Epic内部流程使用，对于终端用户几乎没有用处。当官方对新版本进行稳定性更新或者发布补丁时，其它临时的分支也会时不时地出现。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161716696.png" style="width:100% !important;"></div><h4 id="发布分支" tabindex="-1"><a class="header-anchor" href="#发布分支"><span>发布分支</span></a></h4><p>发布（Release） 分支会一直和当前的官方版本保持一致。它们经过我们官方QA团队全面的测试，所以对于学习虚幻引擎和制作自己的项目来说是一个很好的起始点。官方花费大量精力来确保每次发布的版本都稳定可靠，并且计划每隔几个月发布新的版本。</p><h4 id="主分支" tabindex="-1"><a class="header-anchor" href="#主分支"><span>主分支</span></a></h4><p>大部分活跃的UE5开发工作在 <a href="https://github.com/EpicGames/UnrealEngine/tree/ue5-main" target="_blank" rel="noopener noreferrer">ue5-main</a> 分支中进行。该分支是引擎最新的发布版本，可能存在一些bug，或者甚至无法正常编译。开发者可用用它来测试新功能或者与我们一起进行锁步开发。</p><blockquote><p>如果你要使用该分支，请注意它会比当前官方版本和下一个要发布的版本都要提前。所以你在ue5-main分支中创建的内容和代码可能与当前官方发布的版本并不兼容，需要等官方之后从ue5-main中创建新分支用于发布之后。</p></blockquote><p>运行 Perforce 服务器又两种方式，P4D 和 P4S。P4D 运行时是一个命令行命令，因此它通常被用来做维护工作时使用。P4S 是一个和 P4D 相同功能的服务，这能让服务器程序在后台运行。 当安装 Perforce 服务器工具后，P4S 通常都会被安装并在后台启动。</p><blockquote><p>有时候服务并没有自动启动。要先Windows系统中启动服务，首先找到 Control Panel -&gt; Administrative Tools -&gt;Services applet。 然后在列表中找到 Perforce Service 并启动它：</p></blockquote><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161447639.png" style="width:100% !important;"></div><p> </p><h3 id="下载源码" tabindex="-1"><a class="header-anchor" href="#下载源码"><span>下载源码</span></a></h3><p>我们构建直接下载使用官方的发布版本即可，保证其稳定性。</p><p><a href="https://github.com/EpicGames/UnrealEngine/tags" target="_blank" rel="noopener noreferrer">tags</a><br><a href="https://github.com/EpicGames/UnrealEngine/releases" target="_blank" rel="noopener noreferrer">releases</a></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503192225139.png" style="width:50% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503192225358.png" style="width:50% !important;"></div><p> </p><h2 id="三、perforce" tabindex="-1"><a class="header-anchor" href="#三、perforce"><span>三、Perforce</span></a></h2><p>Perforce的安装我们查看 <a href="https://www.zhihu.com/tardis/zm/art/606970716?source_id=1005" target="_blank" rel="noopener noreferrer">从零开始在NAS上配置Perforce并启用虚幻引擎源码管理</a>,<br> 当然没有服务器，我们也可以在windows中安装Docker部署Perforce。</p><p>我们开始打开P4Admin和P4V连接服务器 创建流仓库和流</p><h3 id="在p4admin新建steamsdepot-ue5" tabindex="-1"><a class="header-anchor" href="#在p4admin新建steamsdepot-ue5"><span>在P4Admin新建SteamsDepot <code>UE5</code></span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161755856.png"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161756236.png" style="width:20% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503161756378.png"></div><p> </p><h3 id="在p4v上创建steams" tabindex="-1"><a class="header-anchor" href="#在p4v上创建steams"><span>在P4V上创建Steams</span></a></h3><table><thead><tr><th></th><th></th><th>仓库</th><th>适用范围</th></tr></thead><tbody><tr><td>Dev</td><td>//UE5/Dev</td><td>UE</td><td>用于存放Dev引擎主路径</td></tr><tr><td>Dev-Binaries</td><td>//UE5/Dev-Binaries</td><td>UE</td><td>用于存放预构建缓存二进制文件</td></tr><tr><td>UnrealGameSync</td><td>//UE5/UnrealGameSync</td><td>UE</td><td>用于存放UnrealGameSync</td></tr></tbody></table><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170004468.png" style="width:75% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005073.png" style="width:33.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005529.png" style="width:33.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005614.png" style="width:33.3% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005958.png" style="width:35% !important;"></div><p>创建好流后,会提示仓库为空,需要上传一个文件到流仓库目录下,可新建一个txt 文件,直接拖拽进去即可.</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170005017.png" style="width:33.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170006596.png" style="width:33.3% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503170023060.png" style="width:33.3% !important;"></div><p> </p><h3 id="perforce设置workspace" tabindex="-1"><a class="header-anchor" href="#perforce设置workspace"><span>Perforce设置WorkSpace</span></a></h3><p>传一个文件到流仓库目录下时会临时自动创建一个随机名称的Workspace,那么我们需要新建的Workspace根据项目需求并规范化命名。</p><ul><li>开发Dev仓库Workspace</li><li>Binaries用于存放预编译二进制文件</li><li>UnrealGameSync仓库Workspace</li></ul><p> </p><h4 id="setup-bat优化加速设置" tabindex="-1"><a class="header-anchor" href="#setup-bat优化加速设置"><span>Setup.bat优化加速设置</span></a></h4><p>设置Setup.bat文件中下载线程与过滤以及指认缓存位置</p><p><code>--threads=20 --cache=%~dp0UE5_Source_Cache</code></p><p>总览Setup.bat</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@echo off</span>
<span class="line">setlocal</span>
<span class="line">pushd &quot;%~dp0&quot;</span>
<span class="line"></span>
<span class="line">rem Figure out if we should append the -prompt argument</span>
<span class="line">set PROMPT_ARGUMENT=</span>
<span class="line">for %%P in (%*) do if /I &quot;%%P&quot; == &quot;--prompt&quot; goto no_prompt_argument</span>
<span class="line">for %%P in (%*) do if /I &quot;%%P&quot; == &quot;--force&quot; goto no_prompt_argument</span>
<span class="line">set PROMPT_ARGUMENT=--prompt --threads=20 --cache=%~dp0UE5_Source_Cache</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双击Setup.bat 这将下载引擎的二进制内容，安装先决条件，并设置虚幻文件关联。</p><p>引擎二进制文件的完整下载目前超过 18+ GiB，可能需要一些时间才能完成。后续运行将会快得多，往后只会下载新的和更新的内容。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503192329458.png" style="width:100% !important;"></div><p>检查缓存文件是否生成。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503200024542.png" style="width:100% !important;"></div><p> </p><h4 id="unrealenigine修改引擎dir" tabindex="-1"><a class="header-anchor" href="#unrealenigine修改引擎dir"><span>UnrealEnigine修改引擎Dir</span></a></h4><p>在UE5Games.uprojectdirs文件最后一行添加项目路径，像这样</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">; These folders will be searched 1 level deep in order to find projects</span>
<span class="line">; UnrealBuildTool will store the following information:</span>
<span class="line">; - Project name</span>
<span class="line">; - Location of project</span>
<span class="line">; - Whether it has code or not</span>
<span class="line">; - TargetNames contains at the project location</span>
<span class="line">;</span>
<span class="line">./</span>
<span class="line">Engine/Source/</span>
<span class="line">Engine/Programs/</span>
<span class="line">UEProject/  </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ue5-更改虚幻引擎的缓存路径" tabindex="-1"><a class="header-anchor" href="#ue5-更改虚幻引擎的缓存路径"><span>UE5_更改虚幻引擎的缓存路径</span></a></h4><p>可参考这个链接 <a href="https://www.bilibili.com/video/BV1sK4y1Z7Bv/?spm_id_from=autoNext" target="_blank" rel="noopener noreferrer">【UE4基础】更改UE4引擎的缓存路径 教程</a></p><p>将<code>Engine\\Config\\BaseEnigne.ini</code>引擎版本不可知的用户目录/派生数据缓存<br><code>%ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache</code><br> 替换为 游戏路径/派生数据缓存<br><code>%GAMEDIR%DerivedDataCache</code></p><p>下方我也写了一个bat，直接执行即可，只需要根据提示输入引擎BaseEngine.ini所在的路径,会协助替换DDC本地缓存路径至项目根目录下。</p>`,78)),r(c,{id:"373",data:[{id:"Modify_DDC_loc_EN"},{id:"Modify_DDC_loc_ZH"}],"tab-id":"shell"},{title0:i(({value:a,isActive:l})=>s[0]||(s[0]=[n("Modify_DDC_loc_EN")])),title1:i(({value:a,isActive:l})=>s[1]||(s[1]=[n("Modify_DDC_loc_ZH")])),tab0:i(({value:a,isActive:l})=>s[2]||(s[2]=[e("div",{class:"language-bat line-numbers-mode","data-highlighter":"prismjs","data-ext":"bat"},[e("pre",null,[e("code",null,[e("span",{class:"line"},"@echo off"),n(`
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
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),tab1:i(({value:a,isActive:l})=>s[3]||(s[3]=[e("div",{class:"language-bat line-numbers-mode","data-highlighter":"prismjs","data-ext":"bat"},[e("pre",null,[e("code",null,[e("span",{class:"line"},"@echo off"),n(`
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
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),s[18]||(s[18]=t(`<h3 id="typemap" tabindex="-1"><a class="header-anchor" href="#typemap"><span>Typemap</span></a></h3><ul><li>Typemap是让Perforce服务器可编译储存项目所需的各类格式的文件</li></ul><p>在Perforce的仓库中右击打开CMD编辑器并输入以下代码</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">p4 typemap</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在打开的Typemap文件中替换下方typemap代码，完成编辑后，点击键盘上的 Ctrl+S 保存并退出。命令行应该会提示 Typemap saved。</p>`,5)),r(c,{id:"398",data:[{id:"typemap"}],"tab-id":"shell"},{title0:i(({value:a,isActive:l})=>s[4]||(s[4]=[n("typemap")])),tab0:i(({value:a,isActive:l})=>s[5]||(s[5]=[e("div",{class:"language-typemap line-numbers-mode","data-highlighter":"prismjs","data-ext":"typemap"},[e("pre",null,[e("code",null,[e("span",{class:"line"},"# The form data below was edited by admin"),n(`
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
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),s[19]||(s[19]=t('<p> </p><h3 id="上传源码至perforce" tabindex="-1"><a class="header-anchor" href="#上传源码至perforce"><span>上传源码至Perforce</span></a></h3><p>把我们下载好的源码zip，解压到我们指定的Workspass Dev仓库根目录中</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503192316731.png" style="width:95% !important;"></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>值得注意的是需要保证这个wrokspass的磁盘空间最少要有<code>300GB</code>。</p></div><p><code>Can&#39;t add filenames with wildcards [@#%*] in them.</code></p><p>如果出现这种情况，需要分批次文件递交-把单独出现的文件单独一个chagelist 就可以递交了。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503230911600.png" style="width:95% !important;"></div><p> </p><h3 id="p4ignore" tabindex="-1"><a class="header-anchor" href="#p4ignore"><span>P4ignore</span></a></h3><p>上传完成后设置ignore</p>',11)),r(c,{id:"437",data:[{id:".ignore"}],"tab-id":"shell"},{title0:i(({value:a,isActive:l})=>s[6]||(s[6]=[n(".ignore")])),tab0:i(({value:a,isActive:l})=>s[7]||(s[7]=[e("div",{class:"language-.ignore line-numbers-mode","data-highlighter":"prismjs","data-ext":".ignore"},[e("pre",null,[e("code",null,[e("span",{class:"line"},"# directories"),n(`
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
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),s[20]||(s[20]=t(`<ul><li>ignore则是 过滤忽略无需同步的文件。</li></ul><h4 id="_1-新建-ignore文件并上传至仓库" tabindex="-1"><a class="header-anchor" href="#_1-新建-ignore文件并上传至仓库"><span>1.新建 .ignore文件并上传至仓库</span></a></h4><p>新建txt文本,重命名为<code>p4ignore.txt</code>,后复制上方.ignore代码，上传P4</p><h4 id="_2-在depot右击打开cmd" tabindex="-1"><a class="header-anchor" href="#_2-在depot右击打开cmd"><span>2.在Depot右击打开CMD</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503192325338.png" style="width:100% !important;"></div><h4 id="_3-运行p4ignore-bat" tabindex="-1"><a class="header-anchor" href="#_3-运行p4ignore-bat"><span>3.运行P4ignore.bat</span></a></h4><p>新建txt文本,重命名为<code>P4ignore.bat</code>,双击运行。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@echo off</span>
<span class="line">set workdir=%~dp0</span>
<span class="line">set result=%workdir%p4ignore.txt</span>
<span class="line">echo %result%</span>
<span class="line">p4 set P4IGNORE=&quot;%result%&quot;</span>
<span class="line">pause</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-检查p4-ignores" tabindex="-1"><a class="header-anchor" href="#_4-检查p4-ignores"><span>4.检查p4 ignores</span></a></h4><p>同理，在P4 CMD中输入</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">p4 ignores</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>检查p4 ignore是否生效,如生成相应过滤路径，则p4ignore已生效</p><p> </p><h2 id="四、编译源码-跳过" tabindex="-1"><a class="header-anchor" href="#四、编译源码-跳过"><span>四、编译源码 （跳过）</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>以下是常规使用vs编译，我们这里使用<code>BuidGraph</code>提供的功能进行编译。所以这个<code>编译源码</code>可先跳过</p></div><h4 id="generateprojectfiles-bat生成解决方案sln" tabindex="-1"><a class="header-anchor" href="#generateprojectfiles-bat生成解决方案sln"><span>GenerateProjectFiles.bat生成解决方案sln</span></a></h4><p>运行GenerateProjectFiles.bat为引擎创建生成解决方案。这应该不到一分钟就能完成</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503200235538.png" style="width:50% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503200236875.png" style="width:50% !important;"></div><h3 id="初步编译引擎" tabindex="-1"><a class="header-anchor" href="#初步编译引擎"><span>初步编译引擎</span></a></h3><p>通过双击新的UE5.sln文件将项目加载到 Visual Studio 中</p><p>将解决方案配置设置为<code>Development Editor</code>，将解决方案平台设置为<code>Win64</code>，然后右键单击UE5目标并选择<code>Build</code>。编译可能需要 10 到 40 分钟才能完成，甚至一到两小时小时也说不定，却决于电脑的CPU。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503200250007.png" style="width:100% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503200915914.png" style="width:100% !important;"></div><p>编译完成后，可以通过将启动项目设置为UE5并按F5开始调试，从 Visual Studio 运行编辑器。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503200930628.png" style="width:100% !important;"></div><p>就绪后就启动编辑器了</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503202114117.png" style="width:100% !important;"></div><p> </p><p> </p><h2 id="五、提交工程并创建预编译二进制文件" tabindex="-1"><a class="header-anchor" href="#五、提交工程并创建预编译二进制文件"><span>五、提交工程并创建预编译二进制文件</span></a></h2><h3 id="创建project" tabindex="-1"><a class="header-anchor" href="#创建project"><span>创建Project</span></a></h3><p>由于引擎还没有编译 所以没有编辑器创建工程-我们使用Eipc Games Launcher 创建一个工程，<strong>注意</strong>-是创建C++工程</p>`,32)),e("p",null,[s[9]||(s[9]=n("并在Dev目录中创建UEProcjet文件夹 , 这里则是关联")),r(p,{to:"/engine/Perforce/UE5srcAndUGSset.html#UnrealEnigine%E4%BF%AE%E6%94%B9%E5%BC%95%E6%93%8EDir"},{default:i(()=>s[8]||(s[8]=[n("Dir的设置")])),_:1}),s[10]||(s[10]=n("。"))]),s[21]||(s[21]=t(`<div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231126767.png" style="width:90% !important;"></div><h4 id="清除多余的文件" tabindex="-1"><a class="header-anchor" href="#清除多余的文件"><span>清除多余的文件</span></a></h4><p>清除多余的文件-工程实际需要递交的也就就这几个文件夹</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231132145.png" style="width:50% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231133679.png" style="width:50% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503200044147.png" style="width:60% !important;"></div><p>被高亮为 <code>绿色</code> 的目录和文件应该被添加到项目的 <code>Depot</code> 中。<code>Binaries</code> 目录高亮为 <code>黄色</code>，可以<code>选择是否要加入</code>到版本管理中，这取决于团队自生的工作需要。</p><ul><li>如果团队中每个人都准备自己来编译引擎和游戏的话，那么 <code>Binaries</code> 则无需加入到版本管理中，</li><li>但如果团队中有人只是想获取一个版本就能直接在编辑器中工作的话，则需要把 <code>Binaries</code> 添加上去。</li></ul><p> </p><h4 id="修改-project配置" tabindex="-1"><a class="header-anchor" href="#修改-project配置"><span>修改.Project配置</span></a></h4><p>去掉引擎版本初始配置EngineAssociation的配置以方便源码引起指认</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231115795.png" style="width:80% !important;"></div><p>然后就上传到P4中.</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231138205.png" style="width:40% !important;"></div><p> </p><h4 id="生成和上传预编译的二进制文件" tabindex="-1"><a class="header-anchor" href="#生成和上传预编译的二进制文件"><span>生成和上传预编译的二进制文件</span></a></h4><p>使用 <code>BuildEditorAndTools</code> 的命令示例，创建<code> build_and_submit_for_ugs.bat</code>,放至根目录下。</p><div class="language-bat line-numbers-mode" data-highlighter="prismjs" data-ext="bat"><pre><code><span class="line">Engine\\Build\\BatchFiles\\RunUAT.bat</span>
<span class="line">	  BuildGraph</span>
<span class="line">	  -Script=Engine/Build/Graph/Examples/BuildEditorAndTools.xml</span>
<span class="line">	  -Target=&quot;Submit To Perforce for UGS&quot;</span>
<span class="line">	  -set:EditorTarget=ProjectNameEditor</span>
<span class="line">	  -set:ArchiveStream=//UE4/Dev-Binaries</span>
<span class="line">	  -p4</span>
<span class="line">	  -submit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>EditorTarget</code>改为我们创建的<code>Procjet_test</code>内的EditorTarget，路径在 <code>UEProject\\[Project]\\Source</code></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231152581.png" style="width:50% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231149475.png" style="width:50% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231158231.png" style="width:50% !important;"></div>`,20)),e("p",null,[s[12]||(s[12]=n("另外我们需要注意我们提交的这个流的名字是正确的 ")),s[13]||(s[13]=e("code",null,"//UE5/Dev-Binaries",-1)),s[14]||(s[14]=n(",这里是")),r(p,{to:"/engine/Perforce/UE5srcAndUGSset.html#%E5%9C%A8P4V%E4%B8%8A%E5%88%9B%E5%BB%BASteams"},{default:i(()=>s[11]||(s[11]=[n("之前创建的Dev-Binaries")])),_:1}),s[15]||(s[15]=n(",专门用于存放预编译的二进制文件."))]),s[22]||(s[22]=t(`<div class="language-bat line-numbers-mode" data-highlighter="prismjs" data-ext="bat"><pre><code><span class="line">	  -set:ArchiveStream=//UE5/Dev-Binaries</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>复制下方这个进行修改-上述仅供参考</p></blockquote><div class="language-bat line-numbers-mode" data-highlighter="prismjs" data-ext="bat"><pre><code><span class="line">@echo off</span>
<span class="line">Engine\\Build\\BatchFiles\\RunUAT.bat BuildGraph -Script=Engine/Build/Graph/Examples/BuildEditorAndTools.xml -Target=&quot;Submit To Perforce for UGS&quot; -set:EditorTarget=Project_TestEditor -set:ArchiveStream=//UE5/Dev-Binaries -p4 -submit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503192351246.png" style="width:100% !important;"></div><p>然后双击执行这个bat，开始编译。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231222923.png" style="width:100% !important;"></div><p>漫长的过程-大概两个半小时。</p><p>好像没看到二进制zip上传到P4...</p><p>Wip....</p><h3 id="ugs预编译" tabindex="-1"><a class="header-anchor" href="#ugs预编译"><span>UGS预编译</span></a></h3><p>\\Engine\\Source\\Programs\\UnrealGameSync 到这个目录下 运行UnrealGameSync.sln</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231422721.png" style="width:100% !important;"></div><p>注意如果提示缺少 - wixproj ，那么就去官网下载并安装这个程序 <a href="https://www.firegiant.com/wixtoolset/" target="_blank" rel="noopener noreferrer">WiX Toolset</a></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231425834.png" style="width:100% !important;"></div><p>生成解决方案</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231557934.png" style="width:100% !important;"></div><p>我们就能在\\Engine\\Source\\Programs\\UnrealGameSync\\UnrealGameSync\\bin\\Release\\net8.0-windows 下找到编译好的UGS</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202503231558862.png" style="width:100% !important;"></div><p>配置设置</p><p> </p><p>Wip...</p><h2 id="学习的文章和引用" tabindex="-1"><a class="header-anchor" href="#学习的文章和引用"><span>学习的文章和引用：</span></a></h2><p><a href="https://zhuanlan.zhihu.com/p/414193101" target="_blank" rel="noopener noreferrer">知乎-Jeffrey Tsai - UE5 源码引擎构建&amp;UGS部署与搭建</a></p><p><a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/downloading-unreal-engine-source-code?application_version=5.0" target="_blank" rel="noopener noreferrer">下载虚幻引擎源代码</a></p><p><a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/unreal-game-sync-ugs-for-unreal-engine?application_version=5.0" target="_blank" rel="noopener noreferrer">UnrealGameSync (UGS)</a></p><p><a href="https://dev.epicgames.com/documentation/zh-cn/unreal-engine/building-unreal-engine-from-source" target="_blank" rel="noopener noreferrer">从源代码构建虚幻引擎</a></p>`,26))])}const E=o(b,[["render",h]]),w=JSON.parse('{"path":"/engine/Perforce/UE5srcAndUGSset.html","title":"UE5 源码引擎构建&UGS部署与搭建","lang":"zh-CN","frontmatter":{"title":"UE5 源码引擎构建&UGS部署与搭建","icon":"iconfont alicon-perforce","category":["Perforce"],"tags":["Perforce","Source code engine","Teams","UE5","UGS"],"date":"2025-03-16T00:00:00.000Z","star":5,"description":"本文是学习部署源码引擎构建并使用UGS作为Perforce同步UE项目的图形化前端的笔记(持续记录更新中)...","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/Perforce/UE5srcAndUGSset.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"UE5 源码引擎构建&UGS部署与搭建"}],["meta",{"property":"og:description","content":"本文是学习部署源码引擎构建并使用UGS作为Perforce同步UE项目的图形化前端的笔记(持续记录更新中)..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-23T08:04:33.000Z"}],["meta",{"property":"article:tag","content":"Perforce"}],["meta",{"property":"article:tag","content":"Source code engine"}],["meta",{"property":"article:tag","content":"Teams"}],["meta",{"property":"article:tag","content":"UE5"}],["meta",{"property":"article:tag","content":"UGS"}],["meta",{"property":"article:published_time","content":"2025-03-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-23T08:04:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UE5 源码引擎构建&UGS部署与搭建\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-16T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-23T08:04:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"一、设置Visual Studio 环境","slug":"一、设置visual-studio-环境","link":"#一、设置visual-studio-环境","children":[{"level":3,"title":"设置虚幻引擎到Visual Studio工作流前","slug":"设置虚幻引擎到visual-studio工作流前","link":"#设置虚幻引擎到visual-studio工作流前","children":[]},{"level":3,"title":"运行虚幻引擎必备条件安装程序","slug":"运行虚幻引擎必备条件安装程序","link":"#运行虚幻引擎必备条件安装程序","children":[{"level":4,"title":"新安装Visual Studio时的选项","slug":"新安装visual-studio时的选项","link":"#新安装visual-studio时的选项","children":[]},{"level":4,"title":"C++工具","slug":"c-工具","link":"#c-工具","children":[]},{"level":4,"title":"包含虚幻引擎安装程序","slug":"包含虚幻引擎安装程序","link":"#包含虚幻引擎安装程序","children":[]}]}]},{"level":2,"title":"二、下载虚幻引擎源代码","slug":"二、下载虚幻引擎源代码","link":"#二、下载虚幻引擎源代码","children":[{"level":3,"title":"分支","slug":"分支","link":"#分支","children":[{"level":4,"title":"源代码分支","slug":"源代码分支","link":"#源代码分支","children":[]},{"level":4,"title":"发布分支","slug":"发布分支","link":"#发布分支","children":[]},{"level":4,"title":"主分支","slug":"主分支","link":"#主分支","children":[]}]},{"level":3,"title":"下载源码","slug":"下载源码","link":"#下载源码","children":[]}]},{"level":2,"title":"三、Perforce","slug":"三、perforce","link":"#三、perforce","children":[{"level":3,"title":"在P4Admin新建SteamsDepot UE5","slug":"在p4admin新建steamsdepot-ue5","link":"#在p4admin新建steamsdepot-ue5","children":[]},{"level":3,"title":"在P4V上创建Steams","slug":"在p4v上创建steams","link":"#在p4v上创建steams","children":[]},{"level":3,"title":"Perforce设置WorkSpace","slug":"perforce设置workspace","link":"#perforce设置workspace","children":[{"level":4,"title":"Setup.bat优化加速设置","slug":"setup-bat优化加速设置","link":"#setup-bat优化加速设置","children":[]},{"level":4,"title":"UnrealEnigine修改引擎Dir","slug":"unrealenigine修改引擎dir","link":"#unrealenigine修改引擎dir","children":[]},{"level":4,"title":"UE5_更改虚幻引擎的缓存路径","slug":"ue5-更改虚幻引擎的缓存路径","link":"#ue5-更改虚幻引擎的缓存路径","children":[]}]},{"level":3,"title":"Typemap","slug":"typemap","link":"#typemap","children":[]},{"level":3,"title":"上传源码至Perforce","slug":"上传源码至perforce","link":"#上传源码至perforce","children":[]},{"level":3,"title":"P4ignore","slug":"p4ignore","link":"#p4ignore","children":[{"level":4,"title":"1.新建 .ignore文件并上传至仓库","slug":"_1-新建-ignore文件并上传至仓库","link":"#_1-新建-ignore文件并上传至仓库","children":[]},{"level":4,"title":"2.在Depot右击打开CMD","slug":"_2-在depot右击打开cmd","link":"#_2-在depot右击打开cmd","children":[]},{"level":4,"title":"3.运行P4ignore.bat","slug":"_3-运行p4ignore-bat","link":"#_3-运行p4ignore-bat","children":[]},{"level":4,"title":"4.检查p4 ignores","slug":"_4-检查p4-ignores","link":"#_4-检查p4-ignores","children":[]}]}]},{"level":2,"title":"四、编译源码 （跳过）","slug":"四、编译源码-跳过","link":"#四、编译源码-跳过","children":[{"level":4,"title":"GenerateProjectFiles.bat生成解决方案sln","slug":"generateprojectfiles-bat生成解决方案sln","link":"#generateprojectfiles-bat生成解决方案sln","children":[]},{"level":3,"title":"初步编译引擎","slug":"初步编译引擎","link":"#初步编译引擎","children":[]}]},{"level":2,"title":"五、提交工程并创建预编译二进制文件","slug":"五、提交工程并创建预编译二进制文件","link":"#五、提交工程并创建预编译二进制文件","children":[{"level":3,"title":"创建Project","slug":"创建project","link":"#创建project","children":[{"level":4,"title":"清除多余的文件","slug":"清除多余的文件","link":"#清除多余的文件","children":[]},{"level":4,"title":"修改.Project配置","slug":"修改-project配置","link":"#修改-project配置","children":[]},{"level":4,"title":"生成和上传预编译的二进制文件","slug":"生成和上传预编译的二进制文件","link":"#生成和上传预编译的二进制文件","children":[]}]},{"level":3,"title":"UGS预编译","slug":"ugs预编译","link":"#ugs预编译","children":[]}]},{"level":2,"title":"学习的文章和引用：","slug":"学习的文章和引用","link":"#学习的文章和引用","children":[]}],"git":{"createdTime":1742317617000,"updatedTime":1742717073000,"contributors":[{"name":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":8}]},"filePathRelative":"engine/Perforce/UE5srcAndUGSset.md","localizedDate":"2025年3月16日","excerpt":"<p>本文是学习部署源码引擎构建并使用UGS作为Perforce同步UE项目的图形化前端的笔记(持续记录更新中)...</p>\\n","autoDesc":true}');export{E as comp,w as data};
