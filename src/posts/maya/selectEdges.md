---
title: Maya-SelectEdges
icon: tools
category:
  - maya
tag:
  - maya
  - tool
date: 2023-12-02
---

<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/SelectEdges.png" />
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
<!-- more -->

::: code-tabs#shell

@tab mel

```mel

proc selectEdges()
{string $numbOfNEdgesSelected[] = `filterExpand -expand true -sm 32`;
    int $sizeNComponents = size($numbOfNEdgesSelected);
        if($sizeNComponents == 0)
            error "Select at least one edge before running the script.";
        else if($sizeNComponents == 1)
        {
            polySelectEdgesEveryN "edgeRing" 2;
            print "1 loop pattern selected   (^▽^ ).";
        }


        else if($sizeNComponents == 2)
        {
            polySelectEdgesEveryN "edgeRing" 4;
            print "2 loop pattern selected   ヾ(≧▽≦*)o.";
        }


        else if($sizeNComponents == 3)
        {
            polySelectEdgesEveryN "edgeRing" 6;
            print "3 loop pattern selected  （′v｀）.";
        }


        else if($sizeNComponents == 4)
        {
            polySelectEdgesEveryN "edgeRing" 8;
            print "4 loop pattern selected  (p≧w≦q).";
        }


        else if($sizeNComponents == 5)
        {
            polySelectEdgesEveryN "edgeRing" 10;
            print "5 loop pattern selected （＞人＜；）.";
        }


        else if($sizeNComponents == 6)
        {
            polySelectEdgesEveryN "edgeRing" 12;
            print "6 loop pattern selected  (*￣︿￣).";
        }


        else if($sizeNComponents == 7)
        {
            polySelectEdgesEveryN "edgeRing" 14;
            print "7 loop pattern selected  （＝。＝）.";
        }


        else if($sizeNComponents == 8)
        {
            polySelectEdgesEveryN "edgeRing" 16;
            print "8 loop pattern selected  (。﹏。).";
        }


        else if($sizeNComponents > 8)
        {
            error "Select 8 or less edges.  ○|￣|_";
        }

}


string $SelectEdgeswindow = "SelectEdges";
    if(`window -ex $SelectEdgeswindow`)
        {
            deleteUI -window $SelectEdgeswindow;
        }
    if(!`window -ex $SelectEdgeswindow`)
        {
            string $lbWinName0 = `window
                                -tlb 1
                                -bgc .25 .25 .25
                                $SelectEdgeswindow`;
        }


columnLayout -adjustableColumn true;
text -label "选边-或多边-点执行" -h 50 -w 150 ;
button -label "执行" -command "selectEdges" -bgc .80 .60 .50 ;


setParent ..;
showWindow $SelectEdgeswindow;

```

:::
