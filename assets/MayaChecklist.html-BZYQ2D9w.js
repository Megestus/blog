import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as i,d as e,f as l,o as t}from"./app-CWLg4lWR.js";const p={};function c(r,s){return t(),a("div",null,[s[0]||(s[0]=i("p",null,"记录检查maya常规问题-以及解决方案",-1)),e(" more "),s[1]||(s[1]=l(`<h2 id="检查重叠面以及模型" tabindex="-1"><a class="header-anchor" href="#检查重叠面以及模型"><span>检查重叠面以及模型</span></a></h2><p>可以使用下方 Ari的工具</p><p>AriSamePositionSelector<br><a href="http://cgjishu.net/blog-entry-290.html" target="_blank" rel="noopener noreferrer">下载地址</a></p><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/AriSamePositionSelector002.gif" style="width:80% !important;"></div><details><summary>Code：点击查看复制代码</summary><div class="language-mel line-numbers-mode" data-highlighter="shiki" data-ext="mel" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-mel"><span class="line"><span>//--------------------------------------------------------------------------</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>// ScriptName : AriSamePositionSelector</span></span>
<span class="line"><span>// Contents   : ����|�W�V�����ɂ���I�u�W�F�N�g��I�����܂��B</span></span>
<span class="line"><span>// Author     : Ari</span></span>
<span class="line"><span>// Since      : 2019/11/17</span></span>
<span class="line"><span>// LastUpdate : </span></span>
<span class="line"><span>// Note       : </span></span>
<span class="line"><span>// Help       : http://cgjishu.net/blog-entry-290.html</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>//--------------------------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>proc saveSetting(){</span></span>
<span class="line"><span>	global string $AriSamePositionSelector_UI_Threshold_FS;</span></span>
<span class="line"><span>	global string $AriSamePositionSelector_UI_CheckBB_CB;</span></span>
<span class="line"><span>	global string $AriSamePositionSelector_UI_UnselectBB_CB;</span></span>
<span class="line"><span>	float $threshold = \`floatSliderGrp -q -v $AriSamePositionSelector_UI_Threshold_FS\`;</span></span>
<span class="line"><span>	int $checkBB     = \`checkBox -q -v $AriSamePositionSelector_UI_CheckBB_CB\`;</span></span>
<span class="line"><span>	int $unselect    = \`checkBox -q -v $AriSamePositionSelector_UI_UnselectBB_CB\`;</span></span>
<span class="line"><span>	optionVar -fv &quot;AriSamePositionS_Threshold&quot;  $threshold;</span></span>
<span class="line"><span>	optionVar -iv &quot;AriSamePositionS_CheckBB&quot;  $checkBB;</span></span>
<span class="line"><span>	optionVar -iv &quot;AriSamePositionS_Unselect&quot; $unselect;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>proc int vectorMuch(vector $valA, vector $valB,float $gosa){</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	int $muchTrue = false;</span></span>
<span class="line"><span>	if(    ($valA.x) &lt;= ($valB.x)+$gosa &amp;&amp; ($valA.x) &gt;= ($valB.x)-$gosa</span></span>
<span class="line"><span>		&amp;&amp; ($valA.y) &lt;= ($valB.y)+$gosa &amp;&amp; ($valA.y) &gt;= ($valB.y)-$gosa</span></span>
<span class="line"><span>		&amp;&amp; ($valA.z) &lt;= ($valB.z)+$gosa &amp;&amp; ($valA.z) &gt;= ($valB.z)-$gosa){</span></span>
<span class="line"><span>		$muchTrue = true;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return $muchTrue;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>proc string[] checkBoundingBox(string $objectList_name[]){</span></span>
<span class="line"><span>	global string $AriSamePositionSelector_UI_Threshold_FS;</span></span>
<span class="line"><span>	float $gosa = \`floatSliderGrp -q -v $AriSamePositionSelector_UI_Threshold_FS\`;</span></span>
<span class="line"><span>	vector $objectList_bbMin[];</span></span>
<span class="line"><span>	vector $objectList_bbMax[];</span></span>
<span class="line"><span>	for($ii=0; $ii&lt;size($objectList_name); $ii++){</span></span>
<span class="line"><span>		$objectList_bbMin[$ii] = \`getAttr ($objectList_name[$ii]+&quot;.boundingBoxMin&quot;)\`;</span></span>
<span class="line"><span>		$objectList_bbMax[$ii] = \`getAttr ($objectList_name[$ii]+&quot;.boundingBoxMax&quot;)\`;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	string $sameObjList[];</span></span>
<span class="line"><span>	int $counter=0;</span></span>
<span class="line"><span>	for($ii=0; $ii&lt;size($objectList_name); $ii++){</span></span>
<span class="line"><span>		vector $bbMinA = $objectList_bbMin[$ii];</span></span>
<span class="line"><span>		vector $bbMaxA = $objectList_bbMax[$ii];</span></span>
<span class="line"><span>		vector $bbMinB;</span></span>
<span class="line"><span>		vector $bbMaxB;</span></span>
<span class="line"><span>		int $localCounter=0;</span></span>
<span class="line"><span>		for($jj=$ii+1; $jj&lt;size($objectList_name); $jj++){</span></span>
<span class="line"><span>			if(stringArrayContains($objectList_name[$jj],$sameObjList))continue;</span></span>
<span class="line"><span>			$bbMinB = $objectList_bbMin[$jj];</span></span>
<span class="line"><span>			$bbMaxB = $objectList_bbMax[$jj];</span></span>
<span class="line"><span>			if(vectorMuch($bbMinA,$bbMinB,$gosa) &amp;&amp; vectorMuch($bbMaxA,$bbMaxB,$gosa)){</span></span>
<span class="line"><span>				if($localCounter==0){</span></span>
<span class="line"><span>					$sameObjList[$counter] = $objectList_name[$ii];</span></span>
<span class="line"><span>					$counter++;</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				$sameObjList[$counter] = $objectList_name[$jj];</span></span>
<span class="line"><span>				$counter++;</span></span>
<span class="line"><span>				$localCounter++;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if($localCounter!=0){</span></span>
<span class="line"><span>			$sameObjList[$counter] = &quot;;&quot;;</span></span>
<span class="line"><span>			$counter++;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	return $sameObjList;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>proc selectList(string $objList[]){</span></span>
<span class="line"><span>	global string $AriSamePositionSelector_UI_UnselectBB_CB;</span></span>
<span class="line"><span>	string $selectList[];</span></span>
<span class="line"><span>	int $unSelectTrue = \`checkBox -q -v $AriSamePositionSelector_UI_UnselectBB_CB\`;</span></span>
<span class="line"><span>	int $firstTrue = false;</span></span>
<span class="line"><span>	if($unSelectTrue)$firstTrue = true;</span></span>
<span class="line"><span>	for($obj in $objList){</span></span>
<span class="line"><span>		if($obj != &quot;;&quot;){</span></span>
<span class="line"><span>			if($firstTrue==true){</span></span>
<span class="line"><span>				$firstTrue = false;</span></span>
<span class="line"><span>				continue;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			$selectList[size($selectList)] = $obj;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		else{</span></span>
<span class="line"><span>			if($unSelectTrue){</span></span>
<span class="line"><span>				$firstTrue = true;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	select $selectList;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>global proc AriSamePositionSelector_Select(){</span></span>
<span class="line"><span>	global string $AriSamePositionSelector_UI_CheckBB_CB;</span></span>
<span class="line"><span>	global string $AriSamePositionSelector_UI_Threshold_FS;</span></span>
<span class="line"><span>	saveSetting();</span></span>
<span class="line"><span>	int $bbTrue = \`checkBox -q -v $AriSamePositionSelector_UI_CheckBB_CB\`;</span></span>
<span class="line"><span>	float $gosa = \`floatSliderGrp -q -v $AriSamePositionSelector_UI_Threshold_FS\`;</span></span>
<span class="line"><span>	string $objectList_name[] = \`ls -sl -tr\`;</span></span>
<span class="line"><span>	vector $objectList_pos[];</span></span>
<span class="line"><span>	for($ii=0; $ii&lt;size($objectList_name); $ii++){</span></span>
<span class="line"><span>		float $pos[] = \`xform  -q -ws -piv $objectList_name[$ii]\`;</span></span>
<span class="line"><span>		$objectList_pos[$ii] = &lt;&lt;$pos[0],$pos[1],$pos[2]&gt;&gt;;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	string $sameObjList[];</span></span>
<span class="line"><span>	int $counter=0;</span></span>
<span class="line"><span>	for($ii=0; $ii&lt;size($objectList_name); $ii++){</span></span>
<span class="line"><span>		vector $posA = $objectList_pos[$ii];</span></span>
<span class="line"><span>		vector $posB;</span></span>
<span class="line"><span>		int $localCounter=0;</span></span>
<span class="line"><span>		for($jj=$ii+1; $jj&lt;size($objectList_name); $jj++){</span></span>
<span class="line"><span>			if(stringArrayContains($objectList_name[$jj],$sameObjList))continue;</span></span>
<span class="line"><span>			$posB = $objectList_pos[$jj];</span></span>
<span class="line"><span>			if(vectorMuch($posA,$posB,$gosa)){</span></span>
<span class="line"><span>				if($localCounter==0){</span></span>
<span class="line"><span>					$sameObjList[$counter] = $objectList_name[$ii];</span></span>
<span class="line"><span>					$counter++;</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				$sameObjList[$counter] = $objectList_name[$jj];</span></span>
<span class="line"><span>				$counter++;</span></span>
<span class="line"><span>				$localCounter++;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		if($localCounter!=0){</span></span>
<span class="line"><span>			$sameObjList[$counter] = &quot;;&quot;;</span></span>
<span class="line"><span>			$counter++;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if($bbTrue){</span></span>
<span class="line"><span>		string $sameBoundingBoxList[];</span></span>
<span class="line"><span>		string $pairList[];</span></span>
<span class="line"><span>		$counter=0;</span></span>
<span class="line"><span>		for($ii=0; $ii&lt;size($sameObjList); $ii++){</span></span>
<span class="line"><span>			if($sameObjList[$ii] == &quot;;&quot;){</span></span>
<span class="line"><span>				string $objList[] = checkBoundingBox($pairList);</span></span>
<span class="line"><span>				$sameBoundingBoxList = stringArrayCatenate($sameBoundingBoxList, $objList);</span></span>
<span class="line"><span>				clear $pairList;</span></span>
<span class="line"><span>				$counter=0;</span></span>
<span class="line"><span>				continue;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			$pairList[$counter] = $sameObjList[$ii];</span></span>
<span class="line"><span>			$counter++;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		$sameObjList = $sameBoundingBoxList;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	selectList($sameObjList);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>global proc AriSamePositionSelector(){</span></span>
<span class="line"><span>	global string $AriSamePositionSelector_UI_Threshold_FS;</span></span>
<span class="line"><span>	global string $AriSamePositionSelector_UI_CheckBB_CB;</span></span>
<span class="line"><span>	global string $AriSamePositionSelector_UI_UnselectBB_CB;</span></span>
<span class="line"><span>	float $threshold = 0.01;</span></span>
<span class="line"><span>	int $checkBB  = true;</span></span>
<span class="line"><span>	int $unselect = true;</span></span>
<span class="line"><span>	if(\`optionVar -exists &quot;AriSamePositionS_Threshold&quot;\`) $threshold = \`optionVar -q &quot;AriSamePositionS_Threshold&quot;\`;</span></span>
<span class="line"><span>	if(\`optionVar -exists &quot;AriSamePositionS_CheckBB&quot;\`)   $checkBB   = \`optionVar -q &quot;AriSamePositionS_CheckBB&quot;\`;</span></span>
<span class="line"><span>	if(\`optionVar -exists &quot;AriSamePositionS_Unselect&quot;\`)  $unselect  = \`optionVar -q &quot;AriSamePositionS_Unselect&quot;\`;</span></span>
<span class="line"><span>	if((\`window -ex  AriSamePositionSelector\`)==true)deleteUI AriSamePositionSelector;</span></span>
<span class="line"><span>	window -title &quot;AriSamePositionSelector&quot; -tlb true -w 300 -h 200 AriSamePositionSelector;</span></span>
<span class="line"><span>	string $jpTrue = false;</span></span>
<span class="line"><span>	string $label_Threshold = &quot;Threshold&quot;;</span></span>
<span class="line"><span>	string $label_CheckBB   = &quot;Check boundingbox&quot;;</span></span>
<span class="line"><span>	string $lable_Unselect  = &quot;Unselect first object&quot;;</span></span>
<span class="line"><span>	if($jpTrue){</span></span>
<span class="line"><span>		$label_Threshold = &quot;阈值&quot;;</span></span>
<span class="line"><span>		$label_CheckBB   = &quot;检查边界框&quot;;</span></span>
<span class="line"><span>		$lable_Unselect  = &quot;取消选择第一个对象&quot;;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	string $form = \`formLayout\`;</span></span>
<span class="line"><span>	string $column = \`columnLayout -adj true\`;</span></span>
<span class="line"><span>	rowLayout -nc 2 -adj 2;</span></span>
<span class="line"><span>	text -l &quot;Threshold:&quot;;</span></span>
<span class="line"><span>	$AriSamePositionSelector_UI_Threshold_FS = \`floatSliderGrp -cw 2 50 -max 0.1 -fmx 1000 -pre 6 -v $threshold -field true\`;</span></span>
<span class="line"><span>	setParent..;</span></span>
<span class="line"><span>	$AriSamePositionSelector_UI_CheckBB_CB    = \`checkBox -l $label_CheckBB  -v $checkBB\`; </span></span>
<span class="line"><span>	$AriSamePositionSelector_UI_UnselectBB_CB = \`checkBox -l $lable_Unselect -v $unselect\`;</span></span>
<span class="line"><span>	separator -h 12;</span></span>
<span class="line"><span>	setParent..;</span></span>
<span class="line"><span>	string $button = \`button -l &quot;Select&quot; -c &quot;AriSamePositionSelector_Select()&quot;\`;</span></span>
<span class="line"><span>	setParent..;</span></span>
<span class="line"><span>	formLayout -e</span></span>
<span class="line"><span>	-af $column &quot;left&quot;  0</span></span>
<span class="line"><span>	-af $column &quot;right&quot; 0</span></span>
<span class="line"><span>	-af $column &quot;top&quot;   0 </span></span>
<span class="line"><span>	-af $button &quot;bottom&quot; 0</span></span>
<span class="line"><span>	-af $button &quot;left&quot;   0</span></span>
<span class="line"><span>	-af $button &quot;right&quot;  0</span></span>
<span class="line"><span>	-ac $button &quot;top&quot;    0 $column</span></span>
<span class="line"><span>	$form;</span></span>
<span class="line"><span>	showWindow;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>AriSamePositionSelector()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p> </p><h2 id="出现maya模型炸开的情况" tabindex="-1"><a class="header-anchor" href="#出现maya模型炸开的情况"><span>出现maya模型炸开的情况</span></a></h2><p>解决方案：</p><ol><li>删除模型顶点色 一般能解决这个问题</li><li>切换显示颜色属性 也能解决炸开的模型问题</li></ol><div class="image-preview"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/delcolorset.png" style="width:60% !important;"><img src="https://megestus-1309556466.cos.ap-shanghai.myqcloud.com/img/setdisplaycolors.png" style="width:35% !important;"></div><p> </p><h2 id="preseve-uvs-拖拽-拖不动" tabindex="-1"><a class="header-anchor" href="#preseve-uvs-拖拽-拖不动"><span>Preseve UVs 拖拽-拖不动</span></a></h2><p>解决方案：box侧面分离后 再选择点进行拖动，后再把侧面的面合并回。</p>`,13))])}const v=n(p,[["render",c]]),u=JSON.parse('{"path":"/posts/maya/MayaChecklist.html","title":"Maya-Checklist","lang":"zh-CN","frontmatter":{"title":"Maya-Checklist","icon":"iconfont alicon-maya1","category":["maya"],"tags":["maya","tool","Checklist"],"date":"2023-12-23T00:00:00.000Z","description":"记录检查maya常规问题-以及解决方案","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Maya-Checklist\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-07T17:21:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Megestus\\",\\"url\\":\\"https://github.com/Megestus\\"}]}"],["meta",{"property":"og:url","content":"https:///about.md/blog/posts/maya/MayaChecklist.html"}],["meta",{"property":"og:site_name","content":"Megestus"}],["meta",{"property":"og:title","content":"Maya-Checklist"}],["meta",{"property":"og:description","content":"记录检查maya常规问题-以及解决方案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T17:21:45.000Z"}],["meta",{"property":"article:tag","content":"Checklist"}],["meta",{"property":"article:tag","content":"tool"}],["meta",{"property":"article:tag","content":"maya"}],["meta",{"property":"article:published_time","content":"2023-12-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-07T17:21:45.000Z"}]]},"git":{"createdTime":1711204216000,"updatedTime":1723051305000,"contributors":[{"name":"Megestus","username":"Megestus","email":"2624203622@qq.com","commits":3,"url":"https://github.com/Megestus"}],"changelog":[{"hash":"afe162d98fa0abfeee0db98fc4ab7be79ecce00e","time":1723051305000,"email":"75190962+Megestus@users.noreply.github.com","author":"Megestus","message":"update tags"},{"hash":"370207019bc58720c973b5a434806c43d97d5261","time":1718442447000,"email":"2624203622@qq.com","author":"Megestus","message":"update imgs"},{"hash":"5cd2acd48e79a0d9fced6c5c5d5d6a0e6460b3ae","time":1711204216000,"email":"2624203622@qq.com","author":"Megestus","message":"init"}]},"filePathRelative":"posts/maya/MayaChecklist.md","excerpt":"<p>记录检查maya常规问题-以及解决方案</p>\\n","autoDesc":true}');export{v as comp,u as data};
