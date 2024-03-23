import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o,c as n,d as t,e,a as s,b as p,f as l}from"./app-BtSpwITl.js";const d={},c=t("div",{class:"image-preview"},[t("img",{src:"https://sky.megestu.top/i/12024/camera-1130731_1280.jpg",style:{width:"50% !important"}})],-1),h=t("p",null,"图床是一种可以将图片上传到互联网上的服务，可以用来节省本地空间，提高图片加载速度，方便分享图片等。",-1),m=t("p",null,[e("当我们谈论图床时... "),p(" more "),e(" 通常指的是用于存储图片的服务器。根据位置的不同，可以将图床分为国内和国外两种类型。国外的图床由于存在空间距离等因素，导致访问速度较慢，并且可能影响图片的显示速度。")],-1),g=t("p",null,"而国内的图床则包括三种类型：单线空间、多线空间和 CDN 加速。单线空间指的是使用一条网络线路进行数据传输，它相对来说在并发访问较高时的处理能力有限。多线空间使用了多条网络线路，可以提供更好的并发性能和稳定性。CDN（内容分发网络）是建立在全球范围数据网络上的分布式内容分发网，采用流媒体服务器集群技术。通过部署在不同地方的节点，CDN 可以克服单个服务器带宽和并发能力受限的弱点，大大提升系统支持的并发流量数量，并减少或避免单点故障对系统的负面影响。",-1),u=t("p",null," ",-1),v=t("h2",{id:"部署",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#部署"},[t("span",null,"部署")])],-1),_={href:"https://github.com/Molunerfinn/PicGo",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.jsdelivr.com/?docs=gh",target:"_blank",rel:"noopener noreferrer"},b=l('<hr><p>下载完成picgo后打开在配置面板中得知-我们需要以下内容信息 git仓库，制定文件路径，分支，token，按配置填写域名cdn。</p><div class="image-preview"><img src="https://sky.megestu.top/i/12024/img_2024-01_n26.png" style="width:90% !important;"></div><p> </p><h3 id="新建github仓库" tabindex="-1"><a class="header-anchor" href="#新建github仓库"><span>新建<i class="fa-brands fa-github"></i>Github仓库</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/12024/img_2024-01-n37.png" style="width:90% !important;"></div><p>并且-创建好存储文件夹。</p><div class="image-preview"><img src="https://sky.megestu.top/i/12024/img_2024-01-n55.png" style="width:90% !important;"></div><p> </p><hr><h3 id="创建token" tabindex="-1"><a class="header-anchor" href="#创建token"><span>创建token</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/12024/img_2024-01_n22.png" style="width:95% !important;"></div><p>完成以上内容，就回到picgo。</p><p> </p><hr><h3 id="picgo-图床设置" tabindex="-1"><a class="header-anchor" href="#picgo-图床设置"><span>PicGo 图床设置</span></a></h3><ul><li><em>Github设置</em></li></ul><div class="image-preview"><img src="https://sky.megestu.top/i/12024/img_2024-01_n26.png" style="width:90% !important;"></div><p>配置描述：</p><table><thead><tr><th></th><th>Github设置</th></tr></thead><tbody><tr><td>图床配置名</td><td>随意</td></tr><tr><td>设定仓库名</td><td>用户名+仓库名</td></tr><tr><td>设定分支名</td><td>使用主分支 main</td></tr><tr><td>设定Token</td><td>Github-Token</td></tr><tr><td>设定存储路径</td><td>在仓库中创建的文件夹 images/</td></tr><tr><td>设定自定义域名</td><td>使用jsdelivr开源的CDN + 用户名 + 仓库</td></tr></tbody></table><p>配置好了如下：</p><div class="image-preview"><img src="https://sky.megestu.top/i/12024/img_2024-01_n34.png" style="width:90% !important;"></div><p> </p><h3 id="jsdelivr开源cdn使用规则" tabindex="-1"><a class="header-anchor" href="#jsdelivr开源cdn使用规则"><span>jsdelivr开源CDN使用规则</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/12024/img_2024-01_n09.png" style="width:90% !important;"></div><p> </p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><div class="image-preview"><img src="https://sky.megestu.top/i/12024/img_2024-01_n57.png" style="width:90% !important;"></div><h2 id="vscode-配置" tabindex="-1"><a class="header-anchor" href="#vscode-配置"><span>VsCode 配置</span></a></h2><p>在拓展中安装PicGo插件-随后到VsCode的设置中-拓展-PicGo填写，上方所获取的配置信息即可。</p><ul><li><code>Ctrl</code>+<code>Alt</code>+<code>U</code> 从剪贴板上传图像</li></ul><div class="image-preview"><img src="https://sky.megestu.top/i/12024/20240126212014.png" style="width:90% !important;"></div><div class="image-preview"><img src="https://sky.megestu.top/i/12024/20240126212256.png" style="width:70% !important;"></div>',33);function k(f,w){const i=r("ExternalLinkIcon");return o(),n("div",null,[c,h,m,g,u,v,t("p",null,[e("下载： "),t("a",_,[e("PicGo"),s(i)])]),t("p",null,[e("jsdelivr开源CDN配置： "),t("a",y,[e("cdn"),s(i)])]),b])}const G=a(d,[["render",k],["__file","gallery.html.vue"]]),x=JSON.parse('{"path":"/server/app/gallery.html","title":"GitHub+PicGo+CDN 搭建图床","lang":"zh-CN","frontmatter":{"title":"GitHub+PicGo+CDN 搭建图床","icon":"fa-solid fa-images","category":"图床","tag":["图床","Cloud sever","gallery"],"date":"2024-01-04T00:00:00.000Z","description":"图床是一种可以将图片上传到互联网上的服务，可以用来节省本地空间，提高图片加载速度，方便分享图片等。 当我们谈论图床时... 通常指的是用于存储图片的服务器。根据位置的不同，可以将图床分为国内和国外两种类型。国外的图床由于存在空间距离等因素，导致访问速度较慢，并且可能影响图片的显示速度。 而国内的图床则包括三种类型：单线空间、多线空间和 CDN 加速。单...","head":[["meta",{"property":"og:url","content":"https://megestus.top/blog/server/app/gallery.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"GitHub+PicGo+CDN 搭建图床"}],["meta",{"property":"og:description","content":"图床是一种可以将图片上传到互联网上的服务，可以用来节省本地空间，提高图片加载速度，方便分享图片等。 当我们谈论图床时... 通常指的是用于存储图片的服务器。根据位置的不同，可以将图床分为国内和国外两种类型。国外的图床由于存在空间距离等因素，导致访问速度较慢，并且可能影响图片的显示速度。 而国内的图床则包括三种类型：单线空间、多线空间和 CDN 加速。单..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-23T14:30:16.000Z"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"图床"}],["meta",{"property":"article:tag","content":"Cloud sever"}],["meta",{"property":"article:tag","content":"gallery"}],["meta",{"property":"article:published_time","content":"2024-01-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-23T14:30:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GitHub+PicGo+CDN 搭建图床\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-23T14:30:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"新建Github仓库","slug":"新建github仓库","link":"#新建github仓库","children":[]},{"level":3,"title":"创建token","slug":"创建token","link":"#创建token","children":[]},{"level":3,"title":"PicGo 图床设置","slug":"picgo-图床设置","link":"#picgo-图床设置","children":[]},{"level":3,"title":"jsdelivr开源CDN使用规则","slug":"jsdelivr开源cdn使用规则","link":"#jsdelivr开源cdn使用规则","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"VsCode 配置","slug":"vscode-配置","link":"#vscode-配置","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1711204216000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":1}]},"filePathRelative":"server/app/gallery.md","localizedDate":"2024年1月4日","excerpt":"<div class=\\"image-preview\\">\\n  <img src=\\"https://sky.megestu.top/i/12024/camera-1130731_1280.jpg\\" style=\\"width: 50% !important;\\">\\n</div>\\n<p>图床是一种可以将图片上传到互联网上的服务，可以用来节省本地空间，提高图片加载速度，方便分享图片等。</p>\\n<p>当我们谈论图床时...</p>\\n","autoDesc":true}');export{G as comp,x as data};
