import{_ as d}from"./noimages-DNGVo6ul.js";import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as m,c as v,b,d as n,e as s,a as e,w as i,f as o}from"./app-CZC5R5cU.js";const C={},h=n("p",null,"摘要： C#是一种由微软开发的通用、面向对象的编程语言，广泛应用于各种类型的软件开发中，包括桌面应用程序、Web 应用程序和游戏开发。在游戏开发领域，C#也被广泛应用于Unity引擎中。",-1),k=n("h2",{id:"了解基础知识",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#了解基础知识"},[n("span",null,"了解基础知识")])],-1),_={href:"https://www.runoob.com/csharp/csharp-tutorial.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.bilibili.com/video/BV1bV411v72f?p=2&vd_source=e36f99094145021094d7f673ef1c1dcc",target:"_blank",rel:"noopener noreferrer"},y=o('<p>C# 编程是基于 C 和 C++ 编程语言的，因此如果对 C 和 C++ 编程有基本的了解，将有助于学习 C# 编程语言。</p><p>根据 codeMonkey 的教程里 提到下方C#中常用的概念和元素</p><ul><li>Variables（变量）：用于存储和表示数据的标识符。</li><li>Functions（函数）：执行特定任务或操作的代码块。</li><li>Conditions（条件语句）：根据条件决定程序流向的结构，比如if语句、switch语句等。</li><li>Collections（集合）：用于存储多个相同类型对象实例的容器，如数组、列表、字典等。</li><li>Loops（循环）：重复执行特定代码块直到满足退出条件为止，比如for循环、while循环等。</li><li>Comments（注释）：在代码中添加说明性文字以提高可读性，并且不会被编译器解析为可执行指令部分。</li><li>Enums（枚举类型/枚举值/枚举类别) ：一种用户自定义数据类型，在其中包含了固有值.</li><li>Classes(类) : 类是 C# 中最基本也是最重要 的建筑模块.</li><li>Accessors (访问者): 属性访问器确定属性是否只读, 可写或同时可以进行读取与写入</li><li>Scope (范围): 它指示变量在程序中何处可以被引用</li></ul><p> </p><h2 id="variables-变量" tabindex="-1"><a class="header-anchor" href="#variables-变量"><span>Variables（变量）</span></a></h2>',5),g={href:"https://www.bilibili.com/video/BV1Z4411y7Ff/?vd_source=e36f99094145021094d7f673ef1c1dcc",target:"_blank",rel:"noopener noreferrer"},w=o(`<p>介于codeMonkey讲的有些快 阅读上有些不是有些困难-从而看M_Studio 讲的C#</p><p>创建2D类型游戏-从unity中学习打开c#脚本后</p><div class="language-mel line-numbers-mode" data-ext="mel" data-title="mel"><pre class="language-mel"><code><span class="token function">using</span> System<span class="token punctuation">.</span>Collections<span class="token punctuation">;</span>
<span class="token function">using</span> System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic<span class="token punctuation">;</span>
<span class="token function">using</span> UnityEngine<span class="token punctuation">;</span>

<span class="token function">public</span> class Variables <span class="token punctuation">:</span> MonoBehaviour
<span class="token punctuation">{</span>
<span class="token comment">//  公开  ；类型 ； 名称 ；调用库</span>

    <span class="token comment">//变量</span>
    <span class="token function">public</span> <span class="token keyword">int</span> health <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> 
    <span class="token function">public</span> <span class="token keyword">float</span> speed <span class="token operator">=</span><span class="token number">5.5</span>f<span class="token punctuation">;</span>
    <span class="token function">public</span> bool isJump<span class="token punctuation">;</span> 
    
        <span class="token comment">//公开</span>
    <span class="token function">private</span> 
    <span class="token comment">//私有</span>

    <span class="token comment">// Start is called before the first frame update</span>
    <span class="token function">void</span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>

    <span class="token comment">// Update is called once per frame</span>
    <span class="token function">void</span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ing...</p><p> </p>`,5),x=n("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[n("pre",{class:"language-text"},[n("code",null,`test
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),B=n("div",{class:"image-preview"},[n("img",{src:d,style:{width:"25% !important"}})],-1);function V(M,U){const a=t("ExternalLinkIcon"),l=t("Badge"),c=t("CodeTabs");return m(),v("div",null,[h,b(" more "),k,n("p",null,[n("a",_,[s("菜鸟 - C# 教程"),e(a)])]),n("p",null,[n("a",f,[s("unity codeMonkey C#基础 教程"),e(a)])]),y,n("p",null,[n("a",g,[s("[零基础]学习C#在Unity中的使用|入门01:创建变量"),e(a)])]),w,n("details",null,[n("summary",null,[e(l,{text:"Code-view",color:"#e0dd8b"})]),e(c,{id:"94",data:[{id:"test"}],"tab-id":"shell"},{title0:i(({value:p,isActive:r})=>[s("test")]),tab0:i(({value:p,isActive:r})=>[x]),_:1})]),B])}const W=u(C,[["render",V],["__file","C_Basics.html.vue"]]),E=JSON.parse('{"path":"/engine/unity/C_sharp/C_Basics.html","title":"C#Basics","lang":"zh-CN","frontmatter":{"title":"C#Basics","description":"摘要： C#是一种由微软开发的通用、面向对象的编程语言，广泛应用于各种类型的软件开发中，包括桌面应用程序、Web 应用程序和游戏开发。在游戏开发领域，C#也被广泛应用于Unity引擎中。 了解基础知识 菜鸟 - C# 教程 unity codeMonkey C#基础 教程 C# 编程是基于 C 和 C++ 编程语言的，因此如果对 C 和 C++ 编程有...","icon":"iconfont alicon-c-sharp","category":"c-sharp","tag":["c-sharp","unity"],"cover":null,"article":false,"head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/C_sharp/C_Basics.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"C#Basics"}],["meta",{"property":"og:description","content":"摘要： C#是一种由微软开发的通用、面向对象的编程语言，广泛应用于各种类型的软件开发中，包括桌面应用程序、Web 应用程序和游戏开发。在游戏开发领域，C#也被广泛应用于Unity引擎中。 了解基础知识 菜鸟 - C# 教程 unity codeMonkey C#基础 教程 C# 编程是基于 C 和 C++ 编程语言的，因此如果对 C 和 C++ 编程有..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-06T17:51:46.000Z"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"c-sharp"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:modified_time","content":"2024-04-06T17:51:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"C#Basics\\",\\"description\\":\\"摘要： C#是一种由微软开发的通用、面向对象的编程语言，广泛应用于各种类型的软件开发中，包括桌面应用程序、Web 应用程序和游戏开发。在游戏开发领域，C#也被广泛应用于Unity引擎中。 了解基础知识 菜鸟 - C# 教程 unity codeMonkey C#基础 教程 C# 编程是基于 C 和 C++ 编程语言的，因此如果对 C 和 C++ 编程有...\\"}"]]},"headers":[{"level":2,"title":"了解基础知识","slug":"了解基础知识","link":"#了解基础知识","children":[]},{"level":2,"title":"Variables（变量）","slug":"variables-变量","link":"#variables-变量","children":[]}],"git":{"createdTime":1711820863000,"updatedTime":1712425906000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":2}]},"filePathRelative":"engine/unity/C_sharp/C#Basics.md","localizedDate":"2024年3月30日","excerpt":"<p>摘要： C#是一种由微软开发的通用、面向对象的编程语言，广泛应用于各种类型的软件开发中，包括桌面应用程序、Web 应用程序和游戏开发。在游戏开发领域，C#也被广泛应用于Unity引擎中。</p>\\n","autoDesc":true}');export{W as comp,E as data};
