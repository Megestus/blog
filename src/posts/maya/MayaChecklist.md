---
title: Maya-Checklist
icon: fa-solid fa-list
category:
  - maya
tag:
  - maya
  - tool
  - Checklist

---

记录检查maya常规问题-以及解决方案

<!-- more -->

## 检查重叠面以及模型

可以使用下方 Ari的工具

AriSamePositionSelector
[下载地址](http://cgjishu.net/blog-entry-290.html) 


<div class="image-preview">
  <img src="https://blog-imgs-132.fc2.com/v/e/c/vectrix/AriSamePositionSelector002.gif" />
</div>


<details>
  <summary>Code：点击查看复制代码</summary>
  

```mel
//--------------------------------------------------------------------------
//
// ScriptName : AriSamePositionSelector
// Contents   : ����|�W�V�����ɂ���I�u�W�F�N�g��I�����܂��B
// Author     : Ari
// Since      : 2019/11/17
// LastUpdate : 
// Note       : 
// Help       : http://cgjishu.net/blog-entry-290.html
//
//--------------------------------------------------------------------------



proc saveSetting(){
	global string $AriSamePositionSelector_UI_Threshold_FS;
	global string $AriSamePositionSelector_UI_CheckBB_CB;
	global string $AriSamePositionSelector_UI_UnselectBB_CB;
	float $threshold = `floatSliderGrp -q -v $AriSamePositionSelector_UI_Threshold_FS`;
	int $checkBB     = `checkBox -q -v $AriSamePositionSelector_UI_CheckBB_CB`;
	int $unselect    = `checkBox -q -v $AriSamePositionSelector_UI_UnselectBB_CB`;
	optionVar -fv "AriSamePositionS_Threshold"  $threshold;
	optionVar -iv "AriSamePositionS_CheckBB"  $checkBB;
	optionVar -iv "AriSamePositionS_Unselect" $unselect;
}

proc int vectorMuch(vector $valA, vector $valB,float $gosa){
	
	int $muchTrue = false;
	if(    ($valA.x) <= ($valB.x)+$gosa && ($valA.x) >= ($valB.x)-$gosa
		&& ($valA.y) <= ($valB.y)+$gosa && ($valA.y) >= ($valB.y)-$gosa
		&& ($valA.z) <= ($valB.z)+$gosa && ($valA.z) >= ($valB.z)-$gosa){
		$muchTrue = true;
	}
	return $muchTrue;
}
proc string[] checkBoundingBox(string $objectList_name[]){
	global string $AriSamePositionSelector_UI_Threshold_FS;
	float $gosa = `floatSliderGrp -q -v $AriSamePositionSelector_UI_Threshold_FS`;
	vector $objectList_bbMin[];
	vector $objectList_bbMax[];
	for($ii=0; $ii<size($objectList_name); $ii++){
		$objectList_bbMin[$ii] = `getAttr ($objectList_name[$ii]+".boundingBoxMin")`;
		$objectList_bbMax[$ii] = `getAttr ($objectList_name[$ii]+".boundingBoxMax")`;
	}
	string $sameObjList[];
	int $counter=0;
	for($ii=0; $ii<size($objectList_name); $ii++){
		vector $bbMinA = $objectList_bbMin[$ii];
		vector $bbMaxA = $objectList_bbMax[$ii];
		vector $bbMinB;
		vector $bbMaxB;
		int $localCounter=0;
		for($jj=$ii+1; $jj<size($objectList_name); $jj++){
			if(stringArrayContains($objectList_name[$jj],$sameObjList))continue;
			$bbMinB = $objectList_bbMin[$jj];
			$bbMaxB = $objectList_bbMax[$jj];
			if(vectorMuch($bbMinA,$bbMinB,$gosa) && vectorMuch($bbMaxA,$bbMaxB,$gosa)){
				if($localCounter==0){
					$sameObjList[$counter] = $objectList_name[$ii];
					$counter++;
				}
				$sameObjList[$counter] = $objectList_name[$jj];
				$counter++;
				$localCounter++;
			}
		}
		if($localCounter!=0){
			$sameObjList[$counter] = ";";
			$counter++;
		}
	}
	return $sameObjList;
}
proc selectList(string $objList[]){
	global string $AriSamePositionSelector_UI_UnselectBB_CB;
	string $selectList[];
	int $unSelectTrue = `checkBox -q -v $AriSamePositionSelector_UI_UnselectBB_CB`;
	int $firstTrue = false;
	if($unSelectTrue)$firstTrue = true;
	for($obj in $objList){
		if($obj != ";"){
			if($firstTrue==true){
				$firstTrue = false;
				continue;
			}
			$selectList[size($selectList)] = $obj;
		}
		else{
			if($unSelectTrue){
				$firstTrue = true;
			}
		}
	}
	select $selectList;
}
global proc AriSamePositionSelector_Select(){
	global string $AriSamePositionSelector_UI_CheckBB_CB;
	global string $AriSamePositionSelector_UI_Threshold_FS;
	saveSetting();
	int $bbTrue = `checkBox -q -v $AriSamePositionSelector_UI_CheckBB_CB`;
	float $gosa = `floatSliderGrp -q -v $AriSamePositionSelector_UI_Threshold_FS`;
	string $objectList_name[] = `ls -sl -tr`;
	vector $objectList_pos[];
	for($ii=0; $ii<size($objectList_name); $ii++){
		float $pos[] = `xform  -q -ws -piv $objectList_name[$ii]`;
		$objectList_pos[$ii] = <<$pos[0],$pos[1],$pos[2]>>;
	}
	string $sameObjList[];
	int $counter=0;
	for($ii=0; $ii<size($objectList_name); $ii++){
		vector $posA = $objectList_pos[$ii];
		vector $posB;
		int $localCounter=0;
		for($jj=$ii+1; $jj<size($objectList_name); $jj++){
			if(stringArrayContains($objectList_name[$jj],$sameObjList))continue;
			$posB = $objectList_pos[$jj];
			if(vectorMuch($posA,$posB,$gosa)){
				if($localCounter==0){
					$sameObjList[$counter] = $objectList_name[$ii];
					$counter++;
				}
				$sameObjList[$counter] = $objectList_name[$jj];
				$counter++;
				$localCounter++;
			}
		}
		if($localCounter!=0){
			$sameObjList[$counter] = ";";
			$counter++;
		}
	}
	if($bbTrue){
		string $sameBoundingBoxList[];
		string $pairList[];
		$counter=0;
		for($ii=0; $ii<size($sameObjList); $ii++){
			if($sameObjList[$ii] == ";"){
				string $objList[] = checkBoundingBox($pairList);
				$sameBoundingBoxList = stringArrayCatenate($sameBoundingBoxList, $objList);
				clear $pairList;
				$counter=0;
				continue;
			}
			$pairList[$counter] = $sameObjList[$ii];
			$counter++;
		}
		$sameObjList = $sameBoundingBoxList;
	}
	selectList($sameObjList);
}
global proc AriSamePositionSelector(){
	global string $AriSamePositionSelector_UI_Threshold_FS;
	global string $AriSamePositionSelector_UI_CheckBB_CB;
	global string $AriSamePositionSelector_UI_UnselectBB_CB;
	float $threshold = 0.01;
	int $checkBB  = true;
	int $unselect = true;
	if(`optionVar -exists "AriSamePositionS_Threshold"`) $threshold = `optionVar -q "AriSamePositionS_Threshold"`;
	if(`optionVar -exists "AriSamePositionS_CheckBB"`)   $checkBB   = `optionVar -q "AriSamePositionS_CheckBB"`;
	if(`optionVar -exists "AriSamePositionS_Unselect"`)  $unselect  = `optionVar -q "AriSamePositionS_Unselect"`;
	if((`window -ex  AriSamePositionSelector`)==true)deleteUI AriSamePositionSelector;
	window -title "AriSamePositionSelector" -tlb true -w 300 -h 200 AriSamePositionSelector;
	string $jpTrue = false;
	string $label_Threshold = "Threshold";
	string $label_CheckBB   = "Check boundingbox";
	string $lable_Unselect  = "Unselect first object";
	if($jpTrue){
		$label_Threshold = "阈值";
		$label_CheckBB   = "检查边界框";
		$lable_Unselect  = "取消选择第一个对象";
	}
	string $form = `formLayout`;
	string $column = `columnLayout -adj true`;
	rowLayout -nc 2 -adj 2;
	text -l "Threshold:";
	$AriSamePositionSelector_UI_Threshold_FS = `floatSliderGrp -cw 2 50 -max 0.1 -fmx 1000 -pre 6 -v $threshold -field true`;
	setParent..;
	$AriSamePositionSelector_UI_CheckBB_CB    = `checkBox -l $label_CheckBB  -v $checkBB`; 
	$AriSamePositionSelector_UI_UnselectBB_CB = `checkBox -l $lable_Unselect -v $unselect`;
	separator -h 12;
	setParent..;
	string $button = `button -l "Select" -c "AriSamePositionSelector_Select()"`;
	setParent..;
	formLayout -e
	-af $column "left"  0
	-af $column "right" 0
	-af $column "top"   0 
	-af $button "bottom" 0
	-af $button "left"   0
	-af $button "right"  0
	-ac $button "top"    0 $column
	$form;
	showWindow;
}

AriSamePositionSelector()

```
  

</details>

&ensp; 

##   出现maya模型炸开的情况

解决方案：
1. 删除模型顶点色 一般能解决这个问题
2. 切换显示颜色属性 也能解决炸开的模型问题

<div class="image-preview">
  <img src="https://megestus.github.io/blog/assets/images/delcolorset.png" />
  <img src="https://megestus.github.io/blog/assets/images/setdisplaycolors.png" style="width: 30% !important;" />
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
     width: 50% !important;
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