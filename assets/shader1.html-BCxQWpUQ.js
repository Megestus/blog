import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as p,a as t,e as a,d as s,f as m,o as n,r as l}from"./app-Bh0bkeBs.js";const o={},c=s("p",null,"摘要：Struct、Vector、Dot、Mapping、渲染过程、lambert、Halflambert",-1),h=s("p",null," ",-1),g=m(`<h2 id="了解-结构-struct" tabindex="-1"><a class="header-anchor" href="#了解-结构-struct"><span>了解：结构（Struct）</span></a></h2><ul><li>Struct：<strong>一些相关数据的组织方式</strong></li></ul><p>打个比方:</p><p>可以把学生证理解为:相关学生信息的组织方式;<br> 很显然，方便之处是: 进校门时不用出示多张姓名卡，学号卡，班号卡...，而只用出示一个信息集中的学生证.</p><h3 id="渲染时发生了什么" tabindex="-1"><a class="header-anchor" href="#渲染时发生了什么"><span>渲染时发生了什么?</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240127130336.png" style="width:90% !important;"></div><p>模型信息》输入结构</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240127130423.png" style="width:90% !important;"></div><p>输入结构》顶点shader》输出结构</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240127130457.png" style="width:90% !important;"></div><p>输出结构》像素shader》渲染结果</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240127130525.png" style="width:90% !important;"></div><h2 id="了解-向量-vector" tabindex="-1"><a class="header-anchor" href="#了解-向量-vector"><span>了解：向量（Vector）</span></a></h2><ul><li>标量(Scalar): 只有大小，没有方向的量，如: 年龄，体重等；</li><li>向量(Vector): 既有大小，也有方向的量，如: 力，速度等；</li><li>理论上不存在没有大小，只有方向的量;但存在大小无现实意义的量，我们多把它归一化处理。</li></ul><h2 id="了解-点乘-dot" tabindex="-1"><a class="header-anchor" href="#了解-点乘-dot"><span>了解：点乘（Dot）</span></a></h2><ul><li>点乘/点积/Dot: 两向量间的一种运算方式，结果为一标量具有良好的几何含义；</li><li>结果的几何意义为:一个向量在另一向量上的投影长度；</li><li>结果的图形学表现为:两向量，方向同时 结果=1(白色)，方向反 结果=-1(黑色)，垂直 结果=0(黑色)；</li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240121173451.png" style="width:50% !important;"></div><p><em><strong>lambert</strong></em></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240127130616.png" style="width:90% !important;"></div><p><em><strong>半lambert</strong></em></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240127130639.png" style="width:90% !important;"></div><h3 id="实战环节" tabindex="-1"><a class="header-anchor" href="#实战环节"><span>实战环节</span></a></h3><p>在shaderforge新建无光照shader</p><p>运用上述所学，使用点乘实现lambert</p><p>我们可以在shaderforge　通过右键菜单－获取自己所需要的<strong>数据结构</strong></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240121180958.png" style="width:40% !important;"></div><p>获取点乘Dot</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240121181618.png" style="width:90% !important;"></div><p>获取模型的法线方向－以及灯光的方向</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240121181442.png" style="width:90% !important;"></div><p>然后我们就可以得到一个基础的光照模型,这里使用clamp 控制最大值和最小值在0~1 之间。这样就能把负数给清理掉，以及大于1的值。</p><h3 id="lambert" tabindex="-1"><a class="header-anchor" href="#lambert"><span>lambert</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240121184006.png" style="width:90% !important;"></div><h3 id="halflambert" tabindex="-1"><a class="header-anchor" href="#halflambert"><span>Halflambert</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240121190311.png" style="width:90% !important;"></div><h3 id="clamp-节点" tabindex="-1"><a class="header-anchor" href="#clamp-节点"><span>clamp 节点</span></a></h3><p>clamp 节点的解释-我们可以在<a href="https://acegikmo.com/shaderforge/" target="_blank" rel="noopener noreferrer">shaderforge的官网文档</a>中找到</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240121194815.png" style="width:90% !important;"></div><h2 id="了解-映射-mapping" tabindex="-1"><a class="header-anchor" href="#了解-映射-mapping"><span>了解：映射 (Mapping)</span></a></h2><p>两个集合，元素间相对应的关系，可以理解为UV与贴图之间的关系。</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240127130720.png" style="width:90% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240121200729.png" style="width:90% !important;"></div><p>导致斑点问题的原因是由浮点精度造成的: <a href="https://www.zoroot.com:8084/read/463/pdf" target="_blank" rel="noopener noreferrer">《Shader入门精要》158页</a>，<br> 解决方法:贴图的WrapMode从Repeat改成Clamp。</p><ul><li>Repeat模式会保留小数部分，例如：1.0001</li><li>clamp模式会把小数部分给化为整数，例如：1</li></ul><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240121201109.png" style="width:29.5% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240121201127.png" style="width:30%
  !important;"></div><h2 id="课后作业" tabindex="-1"><a class="header-anchor" href="#课后作业"><span>课后作业</span></a></h2><p>作业：</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240122004616.png" style="width:40% !important;"></div><p>实现节点：<br> 通过直接绘制贴图和shaderforge内的描边接口实现</p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240122225141.png" style="width:90% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240122005042.png" style="width:90% !important;"></div>`,51);function d(u,y){const e=l("Badge");return n(),r("div",null,[c,p(" more "),h,t(e,{type:"warning",text:"结构（Struct）"}),a(),t(e,{type:"tip",text:" 向量（Vector"}),a(),t(e,{type:"danger",text:"点乘（Dot）"}),a(),t(e,{type:"warning",text:"屏幕映射(Screen Mapping)"}),t(e,{type:"danger",text:"lambert "}),a(),t(e,{type:"tip",text:"Halflambert"}),a(),g])}const w=i(o,[["render",d],["__file","shader1.html.vue"]]),f=JSON.parse('{"path":"/engine/unity/shader/shader1.html","title":"unity-shader-01","lang":"zh-CN","frontmatter":{"title":"unity-shader-01","description":"摘要：Struct、Vector、Dot、Mapping、渲染过程、lambert、Halflambert","icon":"iconfont alicon-shader","category":"shader","tag":["shader","unity"],"date":"2024-01-22T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240123231818.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader1.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-01"}],["meta",{"property":"og:description","content":"摘要：Struct、Vector、Dot、Mapping、渲染过程、lambert、Halflambert"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240123231818.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-15T09:07:27.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240123231818.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-01"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-01-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-15T09:07:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-01\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240123231818.png\\"],\\"datePublished\\":\\"2024-01-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-15T09:07:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":2,"title":"了解：结构（Struct）","slug":"了解-结构-struct","link":"#了解-结构-struct","children":[{"level":3,"title":"渲染时发生了什么?","slug":"渲染时发生了什么","link":"#渲染时发生了什么","children":[]}]},{"level":2,"title":"了解：向量（Vector）","slug":"了解-向量-vector","link":"#了解-向量-vector","children":[]},{"level":2,"title":"了解：点乘（Dot）","slug":"了解-点乘-dot","link":"#了解-点乘-dot","children":[{"level":3,"title":"实战环节","slug":"实战环节","link":"#实战环节","children":[]},{"level":3,"title":"lambert","slug":"lambert","link":"#lambert","children":[]},{"level":3,"title":"Halflambert","slug":"halflambert","link":"#halflambert","children":[]},{"level":3,"title":"clamp 节点","slug":"clamp-节点","link":"#clamp-节点","children":[]}]},{"level":2,"title":"了解：映射 (Mapping)","slug":"了解-映射-mapping","link":"#了解-映射-mapping","children":[]},{"level":2,"title":"课后作业","slug":"课后作业","link":"#课后作业","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1718442447000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":2}]},"filePathRelative":"engine/unity/shader/shader1.md","localizedDate":"2024年1月22日","excerpt":"<p>摘要：Struct、Vector、Dot、Mapping、渲染过程、lambert、Halflambert</p>\\n","autoDesc":true}');export{w as comp,f as data};