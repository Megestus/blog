import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as a,d as i,f as p,o as l}from"./app-CBBBQI4L.js";const t={};function c(d,n){return l(),e("div",null,[n[0]||(n[0]=a("p",null,"p4命令行",-1)),i(" more "),n[1]||(n[1]=p(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#在客户端工作区中打开文件以添加到 depot。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p4 [g-opts] add [-c changelist] [-d -f -I -n] [-t filetype] file ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p4 add -c 1234</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#在客户端工作区中打开文件，以便从 Depot 中删除。</span></span>
<span class="line"><span>p4 [g-opts] delete [-c PendingChangelist] [-n -k -v] [--remote=remote] FileSpec1 [FileSpec2 ...]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p4 delete //depot/README</span></span>
<span class="line"><span>p4 delete -c 40 *.bat *.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>p4 revert //...               #撤销所有更改</span></span>
<span class="line"><span>p4 revert -c 345627 &quot;//...&quot;  #还原客户端工作区中特定更改中的所有文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看仓库 需要管理员权限</span></span>
<span class="line"><span>P4 depots</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看仓库  需要管理员权限  已有的就打开查看属性</span></span>
<span class="line"><span>p4 depot 仓库名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看工作区</span></span>
<span class="line"><span>p4 clients </span></span>
<span class="line"><span>#删除指定工作区 </span></span>
<span class="line"><span>p4 client -d test123</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#指定或筛选工作区  </span></span>
<span class="line"><span>p4 client Administrator_WS</span></span>
<span class="line"><span>p4 client xxxxx  #创建工作区也是这个指令</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看变更</span></span>
<span class="line"><span>p4 changes  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#设置编码格式, 如果遇到 命令中带有中文的话,设置P4COMMANDCHARSET</span></span>
<span class="line"><span>#linux机器还是用utf8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p4 set P4CHARSET=utf8</span></span>
<span class="line"><span>p4 set P4COMMANDCHARSET=cp936</span></span>
<span class="line"><span>p4 set P4COMMANDCHARSET=utf8</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const m=s(t,[["render",c]]),v=JSON.parse('{"path":"/engine/Perforce/PerforceCmd.html","title":"P4 Depot 命令行","lang":"zh-CN","frontmatter":{"title":"P4 Depot 命令行","icon":"iconfont alicon-perforce","category":["Perforce"],"tags":["Perforce"],"date":"2023-12-21T00:00:00.000Z","description":"p4命令行","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/Perforce/PerforceCmd.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"P4 Depot 命令行"}],["meta",{"property":"og:description","content":"p4命令行"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-23T06:51:54.000Z"}],["meta",{"property":"article:tag","content":"Perforce"}],["meta",{"property":"article:published_time","content":"2023-12-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-23T06:51:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"P4 Depot 命令行\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-21T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-23T06:51:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"git":{"createdTime":1711204216000,"updatedTime":1742712714000,"contributors":[{"name":"Megestus","username":"Megestus","email":"2624203622@qq.com","commits":4,"url":"https://github.com/Megestus"}]},"filePathRelative":"engine/Perforce/PerforceCmd.md","localizedDate":"2023年12月21日","excerpt":"<p>p4命令行</p>\\n","autoDesc":true}');export{m as comp,v as data};
