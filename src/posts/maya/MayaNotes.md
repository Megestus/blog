---
title: MayaNotes
icon: bookmark
category:
  - Maya
tag:
  - Maya
  - tips
date: 2023-12-23
# star: 1
---

记录一些基础的maya日常笔记

<!-- more -->

## 一些常用小代码 

::: center
### 硬边选择
:::

功能描述：按角度获取硬边

::: code-tabs#shell

@tab python

```python

import maya.cmds as cmds
cmds.polySelectConstraint(m = 3, t = 0x8000, sm = 1)
sels = cmds.ls(sl = 1)
cmds.polySelectConstraint(sm = 0) #复原选择模式，不然在view中只能选择硬边
cmds.select(sels)

```

:::


::: center

### 提取曲线

:::


功能描述：从边提取曲线 polyEdgeToCurves

::: code-tabs#shell

@tab mel
```mel

polyToCurve -form 2 -degree 3 -conformToSmoothMeshPreview 1;

```
:::


::: center
### 世界中心枢轴
:::

功能描述：世界中心枢轴: 选择对象

::: code-tabs#shell

@tab mel

```mel
string $obj[]=`ls-sl`;
for($aObj in $obj)
{
xform -cp $aObj;//坐标刷新到自身中心
move -rpr 0 0 0 $aObj;
}
FreezeTransformations;//冻结变换-也就是位置信息为零
DeleteHistory;//清除历史
ResetTransformations;//重置变换-坐标归世界中心
OptimizeScene;//清理场景
```

:::

::: center
### 固定FBX参数导出
:::

功能描述：统一团队导出格式

::: code-tabs#shell

@tab mel

```mel
string $ObjectsSelected[] = `ls -sl`;             //--选择对象--//

float $ObjectsSize = size($ObjectsSelected);    //判读是否多个对象//
if($ObjectsSize > 1)
error "如果有多个对象,请把对象打组导出.";
if($ObjectsSize == 1)                           //等于1就执行导出//

SelectHierarchy;
DeleteHistory;              //按类型删除: 历史: 删除选定对象上的构建历史

//---------------------------FBX导出窗口调用命令--------------------------//
$tbSaveLocation = `fileDialog2 -ff "*.fbx"`;
FBXProperty Export|IncludeGrp|Geometry|SmoothingGroups -v true;        //true|false;
FBXProperty Export|IncludeGrp|Geometry|expHardEdges -v false;           
FBXProperty Export|IncludeGrp|Geometry|TangentsandBinormals -v false;
FBXProperty Export|IncludeGrp|Geometry|SmoothMesh -v true;             
FBXProperty Export|IncludeGrp|Geometry|SelectionSet -v false;
FBXProperty Export|IncludeGrp|Geometry|BlindData -v false;
FBXProperty Export|IncludeGrp|Geometry|AnimationOnly -v false;         
FBXProperty Export|IncludeGrp|Geometry|Instances -v false;
FBXProperty Export|IncludeGrp|Geometry|ContainerObjects -v false;
FBXProperty Export|IncludeGrp|Geometry|Triangulate -v false;
FBXProperty Export|AdvOptGrp|Fbx|AsciiFbx -v "Binary";
FBXExport -f $tbSaveLocation -s;

//ExportSelection;
//---------------------------导出命令--------------------------//

print "成功导出";

```

:::

&ensp;

## 免费工具


### - 来自 Klaudio Ladavac 免费工具 -


颜色id工具；镜像工具；测量工具；楔角工具；选择相似工具

[下载地址 ](https://klaudio2u.gumroad.com/)

<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/KlaudioLadavac.png" />
</div>

---

&ensp;

### - Ari UV工具集 -



UV-工具集

地址：
[cgjishu.net](http://cgjishu.net/)

<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/Ari.png" />
</div>

---


&ensp;

### - Im3dJoe - Maya Polygon Lab -

Im3dJoe工作室免费分享的一些超棒工具  

[下载地址](https://im3djoe.gumroad.com/)

部分截图
<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/Im3dJoe.png" />
</div>




<style>

  .image-preview {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .image-preview > img {
     box-sizing: border-box;
     width: 33.3% !important;
     padding: 9px;
     border-radius: 16px;
  }

  @media (max-width: 719px){
    .image-preview > img {
      width: 50% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>
