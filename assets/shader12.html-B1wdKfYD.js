import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as s,d as u,f as l,a,w as i,r as c,o as h,e}from"./app-1Phn4f-W.js";const v={};function g(b,n){const r=c("Badge"),t=c("CodeTabs");return h(),o("div",null,[n[2]||(n[2]=s("p",null,"摘要：答疑 作业分析",-1)),u(" more "),n[3]||(n[3]=l('<p> </p><h3 id="答疑" tabindex="-1"><a class="header-anchor" href="#答疑"><span>答疑</span></a></h3><ul><li>透贴阴影问题： <ul><li>计算投影必须要有一个ShadowCastPass，之所以我们之前没写也对，是因为FallBack了Diffuse，Unity会自动调Diffuse这个Shader的ShadowCastPass，但是它是不支持透贴的；</li><li>可以FallBask到一个支持AlphaCutout的Shader上，比如：Legacy Shaders/Transparent/Cutout/VertexLit； 需要注意的是，必须包含Shader中透明相关的所有面板属性；</li></ul></li><li>透贴双面问题： <ul><li>关闭剔除背面，在声明BlendMode的地方加入：Cull Off 即可；</li></ul></li><li>开线性空间做，Gamma空间看不正常的问题： <ul><li>目前课程内容不会涉及线性空间，Gamma空间；</li><li>如果按公共件的要求，Shader应该支持线性和Gamma效果一致；</li></ul></li></ul><h2 id="作业分析" tabindex="-1"><a class="header-anchor" href="#作业分析"><span>作业分析：</span></a></h2><h3 id="文档分析" tabindex="-1"><a class="header-anchor" href="#文档分析"><span>文档分析：</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421154055.png" style="width:95% !important;"></div><ul><li>Color贴图，透明贴图，法线贴图，自发光贴图，不赘述；</li><li>DetailMask特殊效果相关，DiffuseMask罕见使用，不考虑；</li><li>Metalness 金属度贴图，仅为金属遮罩，区别于PBR的金属度；</li><li>Specular Mask，镜面反射遮罩，可理解为高光强度图；</li><li>Rimlight，边缘光效果，对应有RimMask，边缘光强度图；</li><li>Base Tint Mask，高光染色遮罩，控制高光颜色从Color贴图混合的程度；</li><li>Specular Exponent，高光次幂，不赘述；</li></ul><h3 id="资源分析" tabindex="-1"><a class="header-anchor" href="#资源分析"><span>资源分析：</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421154258.png" style="width:95% !important;"></div><h3 id="资源优化" tabindex="-1"><a class="header-anchor" href="#资源优化"><span>资源优化：</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421154436.png" style="width:95% !important;"></div><h3 id="光照模型分析" tabindex="-1"><a class="header-anchor" href="#光照模型分析"><span>光照模型分析：</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421154517.png" style="width:95% !important;"></div><h2 id="vs准备" tabindex="-1"><a class="header-anchor" href="#vs准备"><span>VS准备:</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161515.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421155518.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421155534.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421155557.png" style="width:95% !important;"></div><h3 id="光照模型" tabindex="-1"><a class="header-anchor" href="#光照模型"><span>光照模型：</span></a></h3><h4 id="_1-diffcol-speccol" tabindex="-1"><a class="header-anchor" href="#_1-diffcol-speccol"><span>1.DiffCol SpecCol</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421155651.png" style="width:95% !important;"></div><h4 id="_2-fresnel" tabindex="-1"><a class="header-anchor" href="#_2-fresnel"><span>2.Fresnel</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160005.png" style="width:95% !important;"></div><h4 id="_3-dirdiff-主光漫反射" tabindex="-1"><a class="header-anchor" href="#_3-dirdiff-主光漫反射"><span>3.DirDiff - 主光漫反射</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160056.png" style="width:95% !important;"></div><h4 id="_4-dirspec-主光镜面反射" tabindex="-1"><a class="header-anchor" href="#_4-dirspec-主光镜面反射"><span>4.DirSpec - 主光镜面反射</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160115.png" style="width:95% !important;"></div><h4 id="_5-envdiff-环境漫反射" tabindex="-1"><a class="header-anchor" href="#_5-envdiff-环境漫反射"><span>5.EnvDiff - 环境漫反射</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160221.png" style="width:95% !important;"></div><h4 id="_6-envspec-环境镜面反射" tabindex="-1"><a class="header-anchor" href="#_6-envspec-环境镜面反射"><span>6.EnvSpec - 环境镜面反射</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160439.png" style="width:95% !important;"></div><h4 id="_7-rimlight-轮廓光" tabindex="-1"><a class="header-anchor" href="#_7-rimlight-轮廓光"><span>7.RimLight - 轮廓光</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160818.png" style="width:95% !important;"></div><h4 id="_8-emission-自发光" tabindex="-1"><a class="header-anchor" href="#_8-emission-自发光"><span>8.Emission - 自发光</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160848.png" style="width:95% !important;"></div><h4 id="最终混合" tabindex="-1"><a class="header-anchor" href="#最终混合"><span>最终混合</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421160921.png" style="width:95% !important;"></div><h4 id="透明剪切" tabindex="-1"><a class="header-anchor" href="#透明剪切"><span>透明剪切</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161021.png" style="width:95% !important;"></div><h4 id="透明剪切投影修正" tabindex="-1"><a class="header-anchor" href="#透明剪切投影修正"><span>透明剪切投影修正</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161124.png" style="width:95% !important;"></div><h4 id="开启双面显示" tabindex="-1"><a class="header-anchor" href="#开启双面显示"><span>开启双面显示</span></a></h4><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161153.png" style="width:95% !important;"></div><h3 id="效果完成" tabindex="-1"><a class="header-anchor" href="#效果完成"><span>效果完成</span></a></h3><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161222.png" style="width:95% !important;"></div><h3 id="code" tabindex="-1"><a class="header-anchor" href="#code"><span>Code</span></a></h3>',46)),s("details",null,[s("summary",null,[a(r,{text:"Code-view",color:"#e0dd8b"})]),a(t,{id:"180",data:[{id:"Data2.shader"}],"tab-id":"shell"},{title0:i(({value:d,isActive:p})=>n[0]||(n[0]=[e("Data2.shader")])),tab0:i(({value:d,isActive:p})=>n[1]||(n[1]=[s("div",{class:"language-shader line-numbers-mode","data-highlighter":"prismjs","data-ext":"shader"},[s("pre",null,[s("code",null,[s("span",{class:"line"},'\uFEFFShader "AP01/L12/Dota2" {'),e(`
`),s("span",{class:"line"},"    Properties {"),e(`
`),s("span",{class:"line"},"        [Header(Texture)]"),e(`
`),s("span",{class:"line"},'        _MainTex        ("RGB:颜色 A:透贴", 2d) = "white"{}'),e(`
`),s("span",{class:"line"},'        _MaskTex        ("R:高光强度 G:边缘光强度 B:高光染色 A:高光次幂", 2d) = "black"{}'),e(`
`),s("span",{class:"line"},'        _NormTex        ("RGB:法线贴图", 2d) = "bump"{}'),e(`
`),s("span",{class:"line"},'        _MatelnessMask  ("金属度遮罩", 2d) = "black"{}'),e(`
`),s("span",{class:"line"},'        _EmissionMask   ("自发光遮罩", 2d) = "black"{}'),e(`
`),s("span",{class:"line"},'        _DiffWarpTex    ("颜色Warp图", 2d) = "gray"{}'),e(`
`),s("span",{class:"line"},'        _FresWarpTex    ("菲涅尔Warp图", 2d) = "gray"{}'),e(`
`),s("span",{class:"line"},'        _Cubemap        ("环境球", cube) = "_Skybox"{}'),e(`
`),s("span",{class:"line"},"        [Header(DirDiff)]"),e(`
`),s("span",{class:"line"},'        _LightCol       ("光颜色", color) = (1.0, 1.0, 1.0, 1.0)'),e(`
`),s("span",{class:"line"},"        [Header(DirSpec)]"),e(`
`),s("span",{class:"line"},'        _SpecPow        ("高光次幂", range(0.0, 99.0)) = 5'),e(`
`),s("span",{class:"line"},'        _SpecInt        ("高光强度", range(0.0, 10.0)) = 5'),e(`
`),s("span",{class:"line"},"        [Header(EnvDiff)]"),e(`
`),s("span",{class:"line"},'        _EnvCol         ("环境光颜色", color) = (1.0, 1.0, 1.0, 1.0)'),e(`
`),s("span",{class:"line"},"        [Header(EnvSpec)]"),e(`
`),s("span",{class:"line"},'        _EnvSpecInt     ("环境镜面反射强度", range(0.0, 30.0)) = 0.5'),e(`
`),s("span",{class:"line"},"        [Header(RimLight)]"),e(`
`),s("span",{class:"line"},'        [HDR]_RimCol    ("轮廓光颜色", color) = (1.0, 1.0, 1.0, 1.0)'),e(`
`),s("span",{class:"line"},"        [Header(Emission)]"),e(`
`),s("span",{class:"line"},'        _EmitInt        ("自发光强度", range(0.0, 10.0)) = 1.0'),e(`
`),s("span",{class:"line"},"        [HideInInspector]"),e(`
`),s("span",{class:"line"},'        _Cutoff         ("Alpha cutoff", Range(0,1)) = 0.5'),e(`
`),s("span",{class:"line"},"        [HideInInspector]"),e(`
`),s("span",{class:"line"},'        _Color          ("Main Color", Color) = (1.0, 1.0, 1.0, 1.0)'),e(`
`),s("span",{class:"line"},"    }"),e(`
`),s("span",{class:"line"},"    SubShader {"),e(`
`),s("span",{class:"line"},"        Tags {"),e(`
`),s("span",{class:"line"},'            "RenderType"="Opaque"'),e(`
`),s("span",{class:"line"},"        }"),e(`
`),s("span",{class:"line"},"        Pass {"),e(`
`),s("span",{class:"line"},'            Name "FORWARD"'),e(`
`),s("span",{class:"line"},"            Tags {"),e(`
`),s("span",{class:"line"},'                "LightMode"="ForwardBase"'),e(`
`),s("span",{class:"line"},"            }"),e(`
`),s("span",{class:"line"},"            Cull Off"),e(`
`),s("span",{class:"line"},"            CGPROGRAM"),e(`
`),s("span",{class:"line"},"            #pragma vertex vert"),e(`
`),s("span",{class:"line"},"            #pragma fragment frag"),e(`
`),s("span",{class:"line"},'            #include "UnityCG.cginc"'),e(`
`),s("span",{class:"line"},'            #include "AutoLight.cginc"'),e(`
`),s("span",{class:"line"},'            #include "Lighting.cginc"'),e(`
`),s("span",{class:"line"},"            #pragma multi_compile_fwdbase_fullshadows"),e(`
`),s("span",{class:"line"},"            #pragma target 3.0"),e(`
`),s("span",{class:"line"},"            // 输入参数"),e(`
`),s("span",{class:"line"},"            uniform sampler2D _MainTex;"),e(`
`),s("span",{class:"line"},"            uniform sampler2D _MaskTex;"),e(`
`),s("span",{class:"line"},"            uniform sampler2D _NormTex;"),e(`
`),s("span",{class:"line"},"            uniform sampler2D _MatelnessMask;"),e(`
`),s("span",{class:"line"},"            uniform sampler2D _EmissionMask;"),e(`
`),s("span",{class:"line"},"            uniform sampler2D _DiffWarpTex;"),e(`
`),s("span",{class:"line"},"            uniform sampler2D _FresWarpTex;"),e(`
`),s("span",{class:"line"},"            uniform samplerCUBE _Cubemap;"),e(`
`),s("span",{class:"line"},"            // DirDiff"),e(`
`),s("span",{class:"line"},"            uniform half3 _LightCol;"),e(`
`),s("span",{class:"line"},"            // DirSpec"),e(`
`),s("span",{class:"line"},"            uniform half _SpecPow;"),e(`
`),s("span",{class:"line"},"            uniform half _SpecInt;"),e(`
`),s("span",{class:"line"},"            // EnvDiff"),e(`
`),s("span",{class:"line"},"            uniform half3 _EnvCol;"),e(`
`),s("span",{class:"line"},"            // EnvSpec"),e(`
`),s("span",{class:"line"},"            uniform half _EnvSpecInt;"),e(`
`),s("span",{class:"line"},"            // RimLight"),e(`
`),s("span",{class:"line"},"            uniform half3 _RimCol;"),e(`
`),s("span",{class:"line"},"            // Emission"),e(`
`),s("span",{class:"line"},"            uniform half _EmitInt;"),e(`
`),s("span",{class:"line"},"            // Other"),e(`
`),s("span",{class:"line"},"            uniform half _Cutoff;"),e(`
`),s("span",{class:"line"},"            // 输入结构"),e(`
`),s("span",{class:"line"},"            struct VertexInput {"),e(`
`),s("span",{class:"line"},"                float4 vertex   : POSITION;   // 顶点信息 Get✔"),e(`
`),s("span",{class:"line"},"                float2 uv0      : TEXCOORD0;  // UV信息 Get✔"),e(`
`),s("span",{class:"line"},"                float4 normal   : NORMAL;     // 法线信息 Get✔"),e(`
`),s("span",{class:"line"},"                float4 tangent  : TANGENT;    // 切线信息 Get✔"),e(`
`),s("span",{class:"line"},"            };"),e(`
`),s("span",{class:"line"},"            // 输出结构"),e(`
`),s("span",{class:"line"},"            struct VertexOutput {"),e(`
`),s("span",{class:"line"},"                float4 pos    : SV_POSITION;  // 屏幕顶点位置"),e(`
`),s("span",{class:"line"},"                float2 uv0      : TEXCOORD0;  // UV0"),e(`
`),s("span",{class:"line"},"                float4 posWS    : TEXCOORD1;  // 世界空间顶点位置"),e(`
`),s("span",{class:"line"},"                float3 nDirWS   : TEXCOORD2;  // 世界空间法线方向"),e(`
`),s("span",{class:"line"},"                float3 tDirWS   : TEXCOORD3;  // 世界空间切线方向"),e(`
`),s("span",{class:"line"},"                float3 bDirWS   : TEXCOORD4;  // 世界空间副切线方向"),e(`
`),s("span",{class:"line"},"                LIGHTING_COORDS(5,6)          // 投影相关"),e(`
`),s("span",{class:"line"},"            };"),e(`
`),s("span",{class:"line"},"            // 输入结构>>>顶点Shader>>>输出结构"),e(`
`),s("span",{class:"line"},"            VertexOutput vert (VertexInput v) {"),e(`
`),s("span",{class:"line"},"                VertexOutput o = (VertexOutput)0;                   // 新建输出结构"),e(`
`),s("span",{class:"line"},"                    o.pos = UnityObjectToClipPos( v.vertex );       // 顶点位置 OS>CS"),e(`
`),s("span",{class:"line"},"                    o.uv0 = v.uv0;                                  // 传递UV"),e(`
`),s("span",{class:"line"},"                    o.posWS = mul(unity_ObjectToWorld, v.vertex);   // 顶点位置 OS>WS"),e(`
`),s("span",{class:"line"},"                    o.nDirWS = UnityObjectToWorldNormal(v.normal);  // 法线方向 OS>WS"),e(`
`),s("span",{class:"line"},"                    o.tDirWS = normalize(mul(unity_ObjectToWorld, float4(v.tangent.xyz, 0.0)).xyz); // 切线方向 OS>WS"),e(`
`),s("span",{class:"line"},"                    o.bDirWS = normalize(cross(o.nDirWS, o.tDirWS) * v.tangent.w);  // 副切线方向"),e(`
`),s("span",{class:"line"},"                    TRANSFER_VERTEX_TO_FRAGMENT(o)                  // 投影相关"),e(`
`),s("span",{class:"line"},"                return o;                                           // 返回输出结构"),e(`
`),s("span",{class:"line"},"            }"),e(`
`),s("span",{class:"line"},"            // 输出结构>>>像素"),e(`
`),s("span",{class:"line"},"            float4 frag(VertexOutput i) : COLOR {"),e(`
`),s("span",{class:"line"},"                // 向量准备"),e(`
`),s("span",{class:"line"},"                half3 nDirTS = UnpackNormal(tex2D(_NormTex, i.uv0));"),e(`
`),s("span",{class:"line"},"                half3x3 TBN = half3x3(i.tDirWS, i.bDirWS, i.nDirWS);"),e(`
`),s("span",{class:"line"},"                half3 nDirWS = normalize(mul(nDirTS, TBN));"),e(`
`),s("span",{class:"line"},"                half3 vDirWS = normalize(_WorldSpaceCameraPos.xyz - i.posWS);"),e(`
`),s("span",{class:"line"},"                half3 vrDirWS = reflect(-vDirWS, nDirWS);"),e(`
`),s("span",{class:"line"},"                half3 lDirWS = _WorldSpaceLightPos0.xyz;"),e(`
`),s("span",{class:"line"},"                half3 lrDirWS = reflect(-lDirWS, nDirWS);"),e(`
`),s("span",{class:"line"},"                // 中间量准备"),e(`
`),s("span",{class:"line"},"                half ndotl = dot(nDirWS, lDirWS);"),e(`
`),s("span",{class:"line"},"                half ndotv = dot(nDirWS, vDirWS);"),e(`
`),s("span",{class:"line"},"                half vdotr = dot(vDirWS, lrDirWS);"),e(`
`),s("span",{class:"line"},"                // 采样纹理"),e(`
`),s("span",{class:"line"},"                half4 var_MainTex = tex2D(_MainTex, i.uv0);"),e(`
`),s("span",{class:"line"},"                half4 var_MaskTex = tex2D(_MaskTex, i.uv0);"),e(`
`),s("span",{class:"line"},"                half var_MatelnessMask = tex2D(_MatelnessMask, i.uv0).r;"),e(`
`),s("span",{class:"line"},"                half var_EmissionMask = tex2D(_EmissionMask, i.uv0).r;"),e(`
`),s("span",{class:"line"},"                half3 var_FresWarpTex = tex2D(_FresWarpTex, ndotv);"),e(`
`),s("span",{class:"line"},"                half3 var_Cubemap = texCUBElod(_Cubemap, float4(vrDirWS, lerp(8.0, 0.0, var_MaskTex.a))).rgb;"),e(`
`),s("span",{class:"line"},"                // 提取信息"),e(`
`),s("span",{class:"line"},"                half3 baseCol = var_MainTex.rgb;"),e(`
`),s("span",{class:"line"},"                half opacity = var_MainTex.a;"),e(`
`),s("span",{class:"line"},"                half specInt = var_MaskTex.r;"),e(`
`),s("span",{class:"line"},"                half rimInt = var_MaskTex.g;"),e(`
`),s("span",{class:"line"},"                half specTint = var_MaskTex.b;"),e(`
`),s("span",{class:"line"},"                half specPow = var_MaskTex.a;"),e(`
`),s("span",{class:"line"},"                half matellic = var_MatelnessMask;"),e(`
`),s("span",{class:"line"},"                half emitInt = var_EmissionMask;"),e(`
`),s("span",{class:"line"},"                half3 envCube = var_Cubemap;"),e(`
`),s("span",{class:"line"},"                half shadow = LIGHT_ATTENUATION(i);"),e(`
`),s("span",{class:"line"},"                // 光照模型"),e(`
`),s("span",{class:"line"},"                    // 漫反射颜色 镜面反射颜色"),e(`
`),s("span",{class:"line"},"                    half3 diffCol = lerp(baseCol, half3(0.0, 0.0, 0.0), matellic);"),e(`
`),s("span",{class:"line"},"                    half3 specCol = lerp(baseCol, half3(0.3, 0.3, 0.3), specTint) * specInt;"),e(`
`),s("span",{class:"line"},"                    // 菲涅尔"),e(`
`),s("span",{class:"line"},"                    half3 fresnel = lerp(var_FresWarpTex, 0.0, matellic);"),e(`
`),s("span",{class:"line"},"                    half fresnelCol = fresnel.r;    // 无实际用途"),e(`
`),s("span",{class:"line"},"                    half fresnelRim = fresnel.g;"),e(`
`),s("span",{class:"line"},"                    half fresnelSpec = fresnel.b;"),e(`
`),s("span",{class:"line"},"                    // 光源漫反射"),e(`
`),s("span",{class:"line"},"                    half halfLambert = ndotl * 0.5 + 0.5;"),e(`
`),s("span",{class:"line"},"                    half3 var_DiffWarpTex = tex2D(_DiffWarpTex, half2(halfLambert, 0.2));"),e(`
`),s("span",{class:"line"},"                    half3 dirDiff = diffCol * var_DiffWarpTex * _LightCol;"),e(`
`),s("span",{class:"line"},"                    // 光源镜面反射"),e(`
`),s("span",{class:"line"},"                    half phong = pow(max(0.0, vdotr), specPow * _SpecPow);"),e(`
`),s("span",{class:"line"},"                    half spec = phong * max(0.0, ndotl);"),e(`
`),s("span",{class:"line"},"                    spec = max(spec, fresnelSpec);"),e(`
`),s("span",{class:"line"},"                    spec = spec * _SpecInt;"),e(`
`),s("span",{class:"line"},"                    half3 dirSpec = specCol * spec * _LightCol;"),e(`
`),s("span",{class:"line"},"                    // 环境漫反射"),e(`
`),s("span",{class:"line"},"                    half3 envDiff = diffCol * _EnvCol;"),e(`
`),s("span",{class:"line"},"                    // 环境镜面反射"),e(`
`),s("span",{class:"line"},"                    half reflectInt = max(fresnelSpec, matellic) * specInt;"),e(`
`),s("span",{class:"line"},"                    half3 envSpec = specCol * reflectInt * envCube * _EnvSpecInt;"),e(`
`),s("span",{class:"line"},"                    // 轮廓光"),e(`
`),s("span",{class:"line"},"                    half3 rimLight = _RimCol * fresnelRim * rimInt * max(0.0, nDirWS.g);"),e(`
`),s("span",{class:"line"},"                    // 自发光"),e(`
`),s("span",{class:"line"},"                    half3 emission = diffCol * emitInt * _EmitInt;"),e(`
`),s("span",{class:"line"},"                    // 混合"),e(`
`),s("span",{class:"line"},"                    half3 finalRGB = (dirDiff + dirSpec) * shadow + envDiff + envSpec + rimLight + emission;"),e(`
`),s("span",{class:"line"},"                // 透明剪切"),e(`
`),s("span",{class:"line"},"                clip(opacity - _Cutoff);"),e(`
`),s("span",{class:"line"},"                // 返回值"),e(`
`),s("span",{class:"line"},"                return float4(finalRGB, 1.0);"),e(`
`),s("span",{class:"line"},"            }"),e(`
`),s("span",{class:"line"},"            ENDCG"),e(`
`),s("span",{class:"line"},"        }"),e(`
`),s("span",{class:"line"},"    }"),e(`
`),s("span",{class:"line"},"    // 声明回退Shader"),e(`
`),s("span",{class:"line"},'    FallBack "Legacy Shaders/Transparent/Cutout/VertexLit"'),e(`
`),s("span",{class:"line"},"}"),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1})]),n[4]||(n[4]=l('<h2 id="开源shader" tabindex="-1"><a class="header-anchor" href="#开源shader"><span>开源Shader</span></a></h2><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161330.png" style="width:95% !important;"></div><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240421161343.png" style="width:95% !important;"></div><p>根据作业答案复盘下自己那些做的不足</p><ul><li>在文档分析和资源分析上 <ul><li>没有仔细阅读文档并且判断出那些可用可不用；</li><li>没有考虑到可共用贴图和非共用贴图的这方面，白工作两年半了。</li></ul></li><li>资源优化上有做考虑-但忽略了一些我不知道如何使用的贴图，需要补充这方面的短板。</li><li>光照模型分析也没有在做一次，对各环节仍有侥幸心理 装懂.. emmm 以后应该懂了</li></ul>',5))])}const y=m(v,[["render",g]]),S=JSON.parse('{"path":"/engine/unity/shader/shader12.html","title":"unity-shader-12","lang":"zh-CN","frontmatter":{"title":"unity-shader-12","description":"摘要：答疑 作业分析","icon":"iconfont alicon-shader","category":"shader","tags":["shader","unity"],"date":"2024-04-21T00:00:00.000Z","cover":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330230733.png","head":[["meta",{"property":"og:url","content":"https:///about.md/blog/engine/unity/shader/shader12.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"unity-shader-12"}],["meta",{"property":"og:description","content":"摘要：答疑 作业分析"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330230733.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330230733.png"}],["meta",{"name":"twitter:image:alt","content":"unity-shader-12"}],["meta",{"property":"article:tag","content":"shader"}],["meta",{"property":"article:tag","content":"unity"}],["meta",{"property":"article:published_time","content":"2024-04-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"unity-shader-12\\",\\"image\\":[\\"https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/20240330230733.png\\"],\\"datePublished\\":\\"2024-04-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"]]},"headers":[{"level":3,"title":"答疑","slug":"答疑","link":"#答疑","children":[]},{"level":2,"title":"作业分析：","slug":"作业分析","link":"#作业分析","children":[{"level":3,"title":"文档分析：","slug":"文档分析","link":"#文档分析","children":[]},{"level":3,"title":"资源分析：","slug":"资源分析","link":"#资源分析","children":[]},{"level":3,"title":"资源优化：","slug":"资源优化","link":"#资源优化","children":[]},{"level":3,"title":"光照模型分析：","slug":"光照模型分析","link":"#光照模型分析","children":[]}]},{"level":2,"title":"VS准备:","slug":"vs准备","link":"#vs准备","children":[{"level":3,"title":"光照模型：","slug":"光照模型","link":"#光照模型","children":[{"level":4,"title":"1.DiffCol SpecCol","slug":"_1-diffcol-speccol","link":"#_1-diffcol-speccol","children":[]},{"level":4,"title":"2.Fresnel","slug":"_2-fresnel","link":"#_2-fresnel","children":[]},{"level":4,"title":"3.DirDiff - 主光漫反射","slug":"_3-dirdiff-主光漫反射","link":"#_3-dirdiff-主光漫反射","children":[]},{"level":4,"title":"4.DirSpec - 主光镜面反射","slug":"_4-dirspec-主光镜面反射","link":"#_4-dirspec-主光镜面反射","children":[]},{"level":4,"title":"5.EnvDiff - 环境漫反射","slug":"_5-envdiff-环境漫反射","link":"#_5-envdiff-环境漫反射","children":[]},{"level":4,"title":"6.EnvSpec - 环境镜面反射","slug":"_6-envspec-环境镜面反射","link":"#_6-envspec-环境镜面反射","children":[]},{"level":4,"title":"7.RimLight - 轮廓光","slug":"_7-rimlight-轮廓光","link":"#_7-rimlight-轮廓光","children":[]},{"level":4,"title":"8.Emission - 自发光","slug":"_8-emission-自发光","link":"#_8-emission-自发光","children":[]},{"level":4,"title":"最终混合","slug":"最终混合","link":"#最终混合","children":[]},{"level":4,"title":"透明剪切","slug":"透明剪切","link":"#透明剪切","children":[]},{"level":4,"title":"透明剪切投影修正","slug":"透明剪切投影修正","link":"#透明剪切投影修正","children":[]},{"level":4,"title":"开启双面显示","slug":"开启双面显示","link":"#开启双面显示","children":[]}]},{"level":3,"title":"效果完成","slug":"效果完成","link":"#效果完成","children":[]},{"level":3,"title":"Code","slug":"code","link":"#code","children":[]}]},{"level":2,"title":"开源Shader","slug":"开源shader","link":"#开源shader","children":[]}],"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","email":"2624203622@qq.com","commits":5}]},"filePathRelative":"engine/unity/shader/shader12.md","localizedDate":"2024年4月21日","excerpt":"<p>摘要：答疑 作业分析</p>\\n","autoDesc":true}');export{y as comp,S as data};
