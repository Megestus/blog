---
title: Maya-UVswap
icon: tools
category:
  - maya
tag:
  - maya
  - tool

---

接触maya插件开发时，所做的uv切换小工具，正是这个工具的执行方式，让我理解了变量。


<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/uvsetswap.png" />
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

@tab python

```python

import maya.cmds as cmds

name = "UVswap"
if cmds.window(name,query=True,exists=True,):
    cmds.deleteUI(name)
cmds.window(name,resizeToFitChildren=True)
cmds.columnLayout()

cmds.text(l ='Enter the uvSet name in uv1 and uv2',h=10)
cmds.text(l ='    to swap or reorder. ',h=10)
cmds.text(l ='',h=5)
cmds.text(l ='UV1',h=10)
cmds.textFieldGrp( "uvSet1", text='map1' , editable=True)
cmds.text(l ='UV2',h=10)
cmds.textFieldGrp( "uvSet2", text='uvSet', editable=True)
cmds.button(label='UVsetSwap', command='UVsetSwap()')
cmds.text(l ='',h=2)
cmds.button(label='UVsetReorder', command='UVsetReorder()')
cmds.showWindow()

UVname1 = cmds.textFieldGrp( "uvSet1",query=True,text=True)
UVname2 = cmds.textFieldGrp( "uvSet2",query=True,text=True)
print "Now we have UVset = " + UVname1,UVname2  


def UVsetSwap():
    UVname1 = cmds.textFieldGrp( "uvSet1",query=True,text=True)
    UVname2 = cmds.textFieldGrp( "uvSet2",query=True,text=True)
    cmds.polyUVSet( query=True, allUVSets=True )   
    cmds.polyUVSet( create=True, uvSet='TempUV' ) 
    cmds.polyUVSet( copy=True, nuv='TempUV', uvSet=UVname1 ) 
    cmds.polyUVSet( copy=True, nuv=UVname1, uvSet=UVname2 ) 
    cmds.polyUVSet( copy=True, nuv=UVname2, uvSet='TempUV' )
    cmds.polyUVSet( delete=True, uvSet='TempUV') 


def UVsetReorder():
    UVname1 = cmds.textFieldGrp( "uvSet1",query=True,text=True)
    UVname2 = cmds.textFieldGrp( "uvSet2",query=True,text=True)
    print "Reorder object is " + UVname1 + " + " + UVname2 
    cmds.polyUVSet( reorder=True, nuv=UVname1, uvSet=UVname2)
    UVobj = cmds.ls(sl=1)  
    cmds.select(UVobj)

```

@tab mel

```mel


proc lbUvsetreorder()
{   
    string $lbText1 = `textFieldGrp -q -tx text1n`;
    string $lbText2 = `textFieldGrp -q -tx text2n`;
    //Get the input text     
    string $LUVSet1 = $lbText1;  
    string $LUVSet2 = $lbText2;
    //Set a variable
    string $curObjList[] = `ls -sl` ;
    polyUVSet -reorder -uvSet $LUVSet1 -nuv $LUVSet2;//reorder uv1 and uv2
    select  $curObjList ;
}

proc lbUvsetswap0()
{
    string $lbText1 = `textFieldGrp -q -tx text1n`;//查询输入框内的文本名字
    string $lbText2 = `textFieldGrp -q -tx text2n`;
    //Get the input text  获得输入的文本名字
    string $LUVSet1 = $lbText1;  
    string $LUVSet2 = $lbText2;
    //Set a variable 获得变量
    string $curObjList[] = `ls -sl` ;
    string $curObj;
    for ($i = 0; $i < size($curObjList); $i++) {
    // store original current UV set for later
    string $originalUVset[] = `polyUVSet -q -currentUVSet $curObjList[$i]`;
    // check for mapl and uvSet. Error if they don't exist 
    polyUVSet -currentUVSet -uvSet $LUVSet1 $curObjList[$i];
    string $checkUVmapl[] = `polyUVSet -q -currentUVSet $curObjList[$i]`;
    if ($checkUVmapl[0] == $LUVSet1) { // If it exists, do nothing 
    print "\n mapl exists \n";
    } else {// If it doesn't exist, error
    error "Missing UV set:First uvSet" ;
    }
    polyUVSet -currentUVSet -uvSet $LUVSet2 $curObjList[$i];
    string $checkUVset2[] = `polyUVSet -q -currentUVSet $curObjList[$i]`; 
    print "\n uvSet exists \n";
    if ($checkUVset2[0] == $LUVSet2) {// If it exists, do nothing
    } else { // If it doesn't exist, error 
    error "Missing UV set:Second uvSet" ;
    }
    // check for and make a temp UV set 
    polyUVSet -currentUVSet -uvSet "tempUV" $curObjList[$i];
    string $checkUVtemp[] = `polyUVSet -q -currentUVSet $curObjList[$i]`;
    if ($checkUVtemp[0] == "tempUV") {// If it exists, don't make it
    polyUVSet -currentUVSet -uvSet $LUVSet1 $curObjList[$i];
    polyUVSet -copy -uvSet $LUVSet1 -nuv "tempUV" $curObjList[$i];// copy "mapl" UVs to "tempUV" 
    } else {// If it doesn't exist, make it
    polyUVSet -create -uvSet "tempUV" $curObjList[$i];
    polyUVSet -copy -uvSet $LUVSet1 -nuv "tempUV" $curObjList[$i];// copy "mapl" UVs to "tempUV"
    }
    polyUVSet -copy -uvSet $LUVSet2 -nuv $LUVSet1 $curObjList[$i];// copy "tempUV" UVs to "mapl"
    polyUVSet -copy -uvSet "tempUV" -nuv $LUVSet2 $curObjList[$i];// copy "uvSet" UVs to "uvSet"  
    polyUVSet -delete -uvSet "tempUV" $curObjList [$i]; // delete the temp UV set
    string $restoreUVset = $originalUVset[0]; 
    polyUVSet -currentUVSet -uvSet $restoreUVset $curObjList[$i];
    }
    print "\n UV set swap first uvSet <-> second uvSet Done \n";
    select  $curObjList ;
    // check for and make a temp UV set 
    // copy mapl to a temp UV set 
    // copy uvSet to mapl
    // copy temp uv set to mapl
    // delete temp uv set
}   

///////////////UI///////////////////

proc lbUVsetSwapwin()
{
string $lbwindows0 = "UVsetSwap";
if(`window -ex $lbwindows0`)
{
    deleteUI -window $lbwindows0;
    windowPref -remove -ra $lbwindows0;
}
if(!`window -ex $lbwindows0`)
{
    string $lbWinName0 = `window  -tlb 1 $lbwindows0`; 
    
    columnLayout;
        
        text -label "   Enter the uvSet name in uv1 and uv2   " ;
        text "   to swap or reorder.   ";
        text "    ";
        text "uv1";
        textFieldGrp  -tx "map1" text1n;
        text "uv2";
        textFieldGrp  -tx "uvSet" text2n;
        button -l "UVset Swap" -h 30   -c lbUvsetswap0;
        button -l "UVset Reorder" -h 30   -c lbUvsetreorder;
        setParent ..;
    showWindow $lbwindows0;
}
}
lbUVsetSwapwin();


```

:::



<!-- UE-BluePrint  link:
<iframe src="https://blueprintue.com/render/rgme0fzo/" scrolling="off" allowfullscreen  width="100%" height="400"  frameborder="50"></iframe> -->

