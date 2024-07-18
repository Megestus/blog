import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as t,d as i,f as n,o as s}from"./app-De9ZHit5.js";const o={},p=i("p",null,"在上一文中得知了，几个基本的采样类型，接下来对表面采样做一个基本的学习。",-1),r=n('<p>基于UE5.2</p><h3 id="surface-sampler" tabindex="-1"><a class="header-anchor" href="#surface-sampler"><span>Surface Sampler</span></a></h3><p>我们可以在suface sampler 直接调整PCG的生成密度</p><ul><li>Points Per Squared Meter （每平方米数）： 按每平方米生成多少数量</li><li>Looseness（松弛） ： 数值越大越松弛反之密集</li></ul><figure><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140050261.png" alt="202407140050261.png" tabindex="0" loading="lazy"><figcaption>202407140050261.png</figcaption></figure><h3 id="static-mesh-spawner" tabindex="-1"><a class="header-anchor" href="#static-mesh-spawner"><span>Static Mesh Spawner</span></a></h3><p>在mesh Entries 中添加index 然后替换 static mesh</p><figure><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140050172.png" alt="202407140050172.png" tabindex="0" loading="lazy"><figcaption>202407140050172.png</figcaption></figure><h3 id="认识3个调整节点组合分别是" tabindex="-1"><a class="header-anchor" href="#认识3个调整节点组合分别是"><span>认识3个调整节点组合分别是</span></a></h3><ul><li>Normal To Density 可以理解为mask 通过调整normal 的xyz轴控制生成的数量，用于一些在高度生成的调整</li><li>Density Filter 则是对前者Normal To Density的 normal 数值进行更细微的调整</li><li>Transform Points 对于采样的对象 进行变换 偏移旋转缩放</li></ul><figure><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140050092.png" alt="202407140050092.png" tabindex="0" loading="lazy"><figcaption>202407140050092.png</figcaption></figure><h4 id="normal-to-density" tabindex="-1"><a class="header-anchor" href="#normal-to-density"><span>Normal To Density</span></a></h4><figure><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140051621.png" alt="202407140051621.png" tabindex="0" loading="lazy"><figcaption>202407140051621.png</figcaption></figure><h4 id="density-filter" tabindex="-1"><a class="header-anchor" href="#density-filter"><span>Density Filter</span></a></h4><figure><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140051146.png" alt="202407140051146.png" tabindex="0" loading="lazy"><figcaption>202407140051146.png</figcaption></figure><h4 id="transform-points" tabindex="-1"><a class="header-anchor" href="#transform-points"><span>Transform Points</span></a></h4><figure><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140051632.png" alt="202407140051632.png" tabindex="0" loading="lazy"><figcaption>202407140051632.png</figcaption></figure><blockquote><p>对于一些树木的生成朝向 可以通过 Absolute Rotation 绝对旋转 固定为朝向上方</p></blockquote><figure><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140051241.png" alt="202407140051241.png" tabindex="0" loading="lazy"><figcaption>202407140051241.png</figcaption></figure><p>最后可以进行嵌套组合一个简单的PCG模块</p><figure><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140051946.png" alt="202407140051946.png" tabindex="0" loading="lazy"><figcaption>202407140051946.png</figcaption></figure>',21);function c(l,g){return s(),a("div",null,[p,t(" more "),r])}const u=e(o,[["render",c],["__file","PCG_Surface_Sampler.html.vue"]]),d=JSON.parse('{"path":"/engine/unreal/PCG/PCG_Surface_Sampler.html","title":"Unreal PCG Surface Sampler applications","lang":"zh-CN","frontmatter":{"title":"Unreal PCG Surface Sampler applications","description":"在上一文中得知了，几个基本的采样类型，接下来对表面采样做一个基本的学习。","icon":"iconfont alicon-unreal","category":"unreal","tag":["unreal","PCG"],"date":"2024-07-13T00:00:00.000Z","cover":null,"head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unreal/PCG/PCG_Surface_Sampler.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Unreal PCG Surface Sampler applications"}],["meta",{"property":"og:description","content":"在上一文中得知了，几个基本的采样类型，接下来对表面采样做一个基本的学习。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140050261.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-18T16:28:16.000Z"}],["meta",{"property":"article:author","content":"Megestus"}],["meta",{"property":"article:tag","content":"unreal"}],["meta",{"property":"article:tag","content":"PCG"}],["meta",{"property":"article:published_time","content":"2024-07-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-18T16:28:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Unreal PCG Surface Sampler applications\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140050261.png\\",\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140050172.png\\",\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140050092.png\\",\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140051621.png\\",\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140051146.png\\",\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140051632.png\\",\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140051241.png\\",\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/202407140051946.png\\"],\\"datePublished\\":\\"2024-07-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-18T16:28:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":3,"title":"Surface Sampler","slug":"surface-sampler","link":"#surface-sampler","children":[]},{"level":3,"title":"Static Mesh Spawner","slug":"static-mesh-spawner","link":"#static-mesh-spawner","children":[]},{"level":3,"title":"认识3个调整节点组合分别是","slug":"认识3个调整节点组合分别是","link":"#认识3个调整节点组合分别是","children":[]}],"git":{"createdTime":1721320096000,"updatedTime":1721320096000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":1}]},"filePathRelative":"engine/unreal/PCG/PCG_Surface_Sampler.md","localizedDate":"2024年7月13日","excerpt":"<p>在上一文中得知了，几个基本的采样类型，接下来对表面采样做一个基本的学习。</p>\\n","autoDesc":true}');export{u as comp,d as data};