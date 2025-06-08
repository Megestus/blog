import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,f as i,o as t}from"./app-DMfxAZlG.js";const p={};function l(c,s){return t(),a("div",null,[e(" more "),s[0]||(s[0]=i(`<div class="language-zscript line-numbers-mode" data-highlighter="shiki" data-ext="zscript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-zscript"><span class="line"><span>//  Learn -  ZScript Fundamentals - Radio Button  单选按钮</span></span>
<span class="line"><span>//  https://www.youtube.com/watch?v=kKZ4UF57-HI&amp;list=PLuvCsqbtUSFBDPXvB3SScoMD1VapO9Z0v&amp;index=11</span></span>
<span class="line"><span></span></span>
<span class="line"><span> //目前有三个单选按钮-A是启用的如果点击B那么关闭AC  同理点击C 则AB是关闭状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Button A</span></span>
<span class="line"><span>[ISwitch, &quot;A&quot;,1,&quot;My Pop up Info&quot;,   </span></span>
<span class="line"><span>		[Iunpress,&quot;Zscript:B&quot;]</span></span>
<span class="line"><span>		[Iunpress,&quot;Zscript:C&quot;]</span></span>
<span class="line"><span>	,</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[IEnable, &quot;Zscript:A&quot;] </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Button B</span></span>
<span class="line"><span>[ISwitch, &quot;B&quot;,0,&quot;My Pop up Info&quot;,</span></span>
<span class="line"><span>		[Iunpress,&quot;Zscript:A&quot;]</span></span>
<span class="line"><span>		[Iunpress,&quot;Zscript:C&quot;]</span></span>
<span class="line"><span>	,</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[IEnable, &quot;Zscript:B&quot;] </span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Button C</span></span>
<span class="line"><span>[ISwitch, &quot;C&quot;,0,&quot;My Pop up Info&quot;,</span></span>
<span class="line"><span>		[Iunpress,&quot;Zscript:A&quot;]</span></span>
<span class="line"><span>		[Iunpress,&quot;Zscript:B&quot;]</span></span>
<span class="line"><span>	,</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[IEnable, &quot;Zscript:C&quot;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const u=n(p,[["render",l]]),d=JSON.parse('{"path":"/posts/zbrush/ZScripting/9_Radio%20Button.html","title":"9.RadioButton","lang":"zh-CN","frontmatter":{"title":"9.RadioButton","icon":"iconfont alicon-zbrush","category":["Zbrush","ZScript Fundamentals"],"tags":["ZScripting"],"date":"2025-05-06T00:00:00.000Z","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9.RadioButton\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-05-06T00:00:00.000Z\\",\\"dateModified\\":\\"2025-06-08T14:17:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"],["meta",{"property":"og:url","content":"https:///about.md/blog/posts/zbrush/ZScripting/9_Radio%20Button.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"9.RadioButton"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-08T14:17:38.000Z"}],["meta",{"property":"article:tag","content":"ZScripting"}],["meta",{"property":"article:published_time","content":"2025-05-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-08T14:17:38.000Z"}]]},"git":{"createdTime":1749392258000,"updatedTime":1749392258000,"contributors":[{"name":"Megestus","username":"Megestus","email":"75190962+Megestus@users.noreply.github.com","commits":1,"url":"https://github.com/Megestus"}],"changelog":[{"hash":"1f507d97aafe9ab731e2ef3a4b8c3375f00551c5","time":1749392258000,"email":"75190962+Megestus@users.noreply.github.com","author":"Megestus","message":"update"}]},"filePathRelative":"posts/zbrush/ZScripting/9_Radio Button.md","excerpt":""}');export{u as comp,d as data};
