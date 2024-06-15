import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as i,d as e,e as a,f as s,o as c}from"./app-BqpH05od.js";const o={},p=e("p",null,[a("记录下云服务器部署Perforce的流程"),e("br"),a(" 在以前知乎的文章中提到过使用Nas部署P4，以及Perforce的工作原理及作用。"),e("br"),e("i",{class:"fa-solid fa-cable-car"}),a(" 文章："),e("a",{href:"https://www.zhihu.com/tardis/zm/art/606970716?source_id=1005",target:"_blank",rel:"noopener noreferrer"},"从零开始在NAS上配置Perforce并启用虚幻引擎源码管理"),e("br"),a(" 那没有Nas如何快速的创建一个Perforce为团队服务呢？")],-1),n=s(`<p> </p><h2 id="购买服务器" tabindex="-1"><a class="header-anchor" href="#购买服务器"><span>购买服务器</span></a></h2><p>我这里使用的是腾讯云</p><p><a href="https://cloud.tencent.com/act/free?from=19067" target="_blank" rel="noopener noreferrer">腾讯云地址</a></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/9ecfdc66dcdee766d6297a314d98daa0.image.webp" style="width:90% !important;"></div><p>通过以上新用户福利，我们即可获得一个月免费的轻量服务器。<br> 然后我们在选择系统时，可以直接使用Docker镜像，这样就可以快速的使用到docker，不需要再去装一遍。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/180c0ea68a43c7518a4c01850e515262.clipboard-2023-10-18.webp" style="width:90% !important;"></div><p>我们在购买完服务器后-可以在邮件中得知当前服务器的账号以及登录密码。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/6ed0ea4a45366f5589597c6054d66261.clipboard-2023-10-19.webp" style="width:90% !important;"></div><p> </p><h2 id="开始部署" tabindex="-1"><a class="header-anchor" href="#开始部署"><span>开始部署</span></a></h2><p>然后我们登录此服务器</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/93da21e2caaa9adca4c819917440bfbe.clipboard-2023-10-19.webp" style="width:90% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/0ea5fb1aa5dece4f8d29f81b25e6c207.clipboard-2023-10-19.webp" style="width:90% !important;"></div><p>登录后 输入<code>sudo -i</code> 获取root权限</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/c03d4a9469ad6576c7308690160a6528.clipboard-2023-10-19.webp" style="width:80% !important;"></div><p> </p><h2 id="部署perforce" tabindex="-1"><a class="header-anchor" href="#部署perforce"><span>部署perforce</span></a></h2><p>然后一键部署perforce镜像</p><p>复制下列代码，粘贴，执行</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker run -d  -p 1666:1666 -v /volume1/docker/perforce/data:/data -e P4USER:p4admin --name perforce ambakshi/perforce-server

docker logs -f perforce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/dffc4ed5eaf39b59574564049f32a357.image.webp" style="width:90% !important;"></div><p>以上我们就已经部署完成啦</p><p>我们按回车键。执行<code>docker logs -f perforce</code>获取perforce的日志，在日志里获取P4的管理员账号和密码。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/31e4ecc7f86de925883ddc6ab1e29397.image.webp" style="width:90% !important;"></div><p>当然你也可以直接复制以下默认管理员账号以及密码，进行登录。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#端口号
P4PORT=1666
#用户及密码
P4USER=p4admin
P4PASSWD=pass12349ers!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p> </p><h3 id="防火墙开放-1666-8080端口" tabindex="-1"><a class="header-anchor" href="#防火墙开放-1666-8080端口"><span>防火墙开放 1666 8080端口</span></a></h3><hr><p>还需要在腾讯云服务器页面里防火墙中 开放<code>1666</code> <code>8080</code>端口 ，这样小伙伴们才能通过端口进行访问。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/c2766ff110944bc6ed07b58af1eb5ae8.image.webp" style="width:90% !important;"></div><p> </p><h2 id="安装p4v-给团队小伙伴登录" tabindex="-1"><a class="header-anchor" href="#安装p4v-给团队小伙伴登录"><span>安装P4V 给团队小伙伴登录</span></a></h2><p><a href="https://www.perforce.com/downloads/helix-visual-client-p4v" target="_blank" rel="noopener noreferrer">P4V下载地址</a></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/4dfa81522be498514ca684e195c15d71.image.webp" style="width:90% !important;"></div><p>选择适合系统的P4V-下载</p><p> </p><h3 id="p4v安装过程" tabindex="-1"><a class="header-anchor" href="#p4v安装过程"><span>P4V安装过程</span></a></h3><hr><p>这里如果执行不了下一步，可以填写你的<code>[ip]:1666</code>则可以继续下一步。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/eed1a21de36a198d1ad977c02e5101b8.image.webp" style="width:75% !important;"></div><p>无脑下一步~</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/a45b9bf8c83d41ce3d8b677190873260.image.webp" style="width:75% !important;"></div><p>输入账号密码</p><p>即可完成登录</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/08741e445fe305f48a8c260b9ef23e2c.image.webp" style="width:90% !important;"></div><p>部署完成</p><p><i class="fa-regular fa-face-smile-wink"></i></p><p> </p><h2 id="关于使用方法-或者说明" tabindex="-1"><a class="header-anchor" href="#关于使用方法-或者说明"><span>关于使用方法，或者说明</span></a></h2><p>详细使用方法-可以通过互联网查找，当然，部署P4的你应该也有一定的使用经验。这对你来说应该不是什么很大的问题。 或者查看我翻译的 P4文档<br><a href="https://doc.megestu.top/project-3/" target="_blank" rel="noopener noreferrer">链接地址</a></p><p>值得注意的是我们设置引擎上传的文件需要添加过滤，不然什么文件都会上传到引擎上，会造成一些不必要产生的问题。<br><a href="https://doc.megestu.top/doc/49/" target="_blank" rel="noopener noreferrer">设置和创建忽略文件 P4 ignore</a></p><p> </p><h2 id="ue5-源码连接" tabindex="-1"><a class="header-anchor" href="#ue5-源码连接"><span>UE5 源码连接</span></a></h2><p>步骤：</p><ul><li>在启动引擎后在界面右下角</li><li>点击版本控制-连接到版本控制</li><li>选择提供方为Perforce</li><li>然后选择可以用工作区</li><li>接受设置</li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/UESourcelink.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/UESourcelink2.png" style="width:60% !important;"></div><div class="hint-container info"><p class="hint-container-title">这个连接源码前，需要打开过P4</p></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/UESourcelink3.png" style="width:60% !important;"></div><p>使用和P4类似， 不过多说明。</p>`,62);function d(l,m){return c(),r("div",null,[p,i(" more "),n])}const u=t(o,[["render",d],["__file","PerforceSet.html.vue"]]),f=JSON.parse('{"path":"/posts/Perforce/PerforceSet.html","title":"UE5+Perforce+腾讯云版本控制搭建流程与工作流程","lang":"zh-CN","frontmatter":{"title":"UE5+Perforce+腾讯云版本控制搭建流程与工作流程","icon":"iconfont alicon-perforce","category":["Perforce"],"tag":["Perforce","Cloud sever","Teams","UE5"],"date":"2023-12-20T00:00:00.000Z","star":5,"cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/p4nas.png","description":"记录下云服务器部署Perforce的流程 在以前知乎的文章中提到过使用Nas部署P4，以及Perforce的工作原理及作用。 文章：从零开始在NAS上配置Perforce并启用虚幻引擎源码管理 那没有Nas如何快速的创建一个Perforce为团队服务呢？","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/posts/Perforce/PerforceSet.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"UE5+Perforce+腾讯云版本控制搭建流程与工作流程"}],["meta",{"property":"og:description","content":"记录下云服务器部署Perforce的流程 在以前知乎的文章中提到过使用Nas部署P4，以及Perforce的工作原理及作用。 文章：从零开始在NAS上配置Perforce并启用虚幻引擎源码管理 那没有Nas如何快速的创建一个Perforce为团队服务呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/p4nas.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-15T09:07:27.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/p4nas.png"}],["meta",{"name":"twitter:image:alt","content":"UE5+Perforce+腾讯云版本控制搭建流程与工作流程"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"Perforce"}],["meta",{"property":"article:tag","content":"Cloud sever"}],["meta",{"property":"article:tag","content":"Teams"}],["meta",{"property":"article:tag","content":"UE5"}],["meta",{"property":"article:published_time","content":"2023-12-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-15T09:07:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UE5+Perforce+腾讯云版本控制搭建流程与工作流程\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/p4nas.png\\"],\\"datePublished\\":\\"2023-12-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-15T09:07:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"购买服务器","slug":"购买服务器","link":"#购买服务器","children":[]},{"level":2,"title":"开始部署","slug":"开始部署","link":"#开始部署","children":[]},{"level":2,"title":"部署perforce","slug":"部署perforce","link":"#部署perforce","children":[{"level":3,"title":"防火墙开放 1666  8080端口","slug":"防火墙开放-1666-8080端口","link":"#防火墙开放-1666-8080端口","children":[]}]},{"level":2,"title":"安装P4V 给团队小伙伴登录","slug":"安装p4v-给团队小伙伴登录","link":"#安装p4v-给团队小伙伴登录","children":[{"level":3,"title":"P4V安装过程","slug":"p4v安装过程","link":"#p4v安装过程","children":[]}]},{"level":2,"title":"关于使用方法，或者说明","slug":"关于使用方法-或者说明","link":"#关于使用方法-或者说明","children":[]},{"level":2,"title":"UE5 源码连接","slug":"ue5-源码连接","link":"#ue5-源码连接","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1718442447000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":2}]},"filePathRelative":"posts/Perforce/PerforceSet.md","localizedDate":"2023年12月20日","excerpt":"<p>记录下云服务器部署Perforce的流程<br>\\n在以前知乎的文章中提到过使用Nas部署P4，以及Perforce的工作原理及作用。<br>\\n<i class=\\"fa-solid fa-cable-car\\"></i> 文章：<a href=\\"https://www.zhihu.com/tardis/zm/art/606970716?source_id=1005\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">从零开始在NAS上配置Perforce并启用虚幻引擎源码管理</a><br>\\n那没有Nas如何快速的创建一个Perforce为团队服务呢？</p>\\n","autoDesc":true}');export{u as comp,f as data};
